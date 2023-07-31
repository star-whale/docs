---
title: Virtual Kubelet as Kubernetes nodes
---

## Introduction

[Virtual Kubelet](https://virtual-kubelet.io/) is an open source framework that can simulate a K8s node by mimicking the communication between kubelet and the K8s cluster.

This solution is widely used by major cloud vendors for serverless container cluster solutions, such as Alibaba Cloud's ASK, Amazon's AWS Fargate, etc.

## Principles

The virtual kubelet framework implements the related interfaces of kubelet for Node. With simple configuration, it can simulate a node.

We only need to implement the [PodLifecycleHandler](https://github.com/virtual-kubelet/virtual-kubelet/blob/704b01eac6bdf0472b9c93173e4cb64bd6e53e94/node/podcontroller.go#L47) interface to support:

- Create, update, delete Pod
- Get Pod status
- Get Container logs

## Adding Devices to the Cluster

If our device cannot serve as a K8s node due to resource constraints or other situations, we can manage these devices by using virtual kubelet to simulate a proxy node.

The control flow between Starwhale Controller and the device is as follows:

```text

 ┌──────────────────────┐      ┌────────────────┐     ┌─────────────────┐     ┌────────────┐
 │ Starwhale Controller ├─────►│ K8s API Server ├────►│ virtual kubelet ├────►│ Our device │
 └──────────────────────┘      └────────────────┘     └─────────────────┘     └────────────┘

```

Virtual kubelet converts the Pod orchestration information sent by Starwhale Controller into control behaviors for the device, such as executing a command via ssh on the device, or sending a message via USB or serial port.

Below is an example of using virtual kubelet to control a device not joined to the cluster that is SSH-enabled:

1. Prepare certificates

- Create file vklet.csr with the following content:

```ini
[req]
req_extensions = v3_req
distinguished_name = req_distinguished_name

[req_distinguished_name]

[v3_req]
basicConstraints = CA:FALSE
keyUsage = digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names

[alt_names]
IP = 1.2.3.4
```

- Generate the certificate:

```sh
openssl genrsa -out vklet-key.pem 2048
openssl req -new -key vklet-key.pem -out vklet.csr -subj '/CN=system:node:1.2.3.4;/C=US/O=system:nodes' -config ./csr.conf
```

- Submit the certificate:

```sh
cat vklet.csr| base64 | tr -d "\n" # output as content of spec.request in csr.yaml
```

csr.yaml:

```yaml
apiVersion: certificates.k8s.io/v1
kind: CertificateSigningRequest
metadata:
  name: vklet
spec:
  request: ******************
  signerName: kubernetes.io/kube-apiserver-client
  expirationSeconds: 1086400
  usages:
    - client auth
```

```sh
kubectl apply -f csr.yaml
kubectl certificate approve vklet
kubectl get csr vklet -o jsonpath='{.status.certificate}'| base64 -d > vklet-cert.pem
```

Now we have vklet-cert.pem.

- Compile virtual kubelet:

```sh
git clone https://github.com/virtual-kubelet/virtual-kubelet
cd virtual-kubelet && make build
```

Create the node configuration file mock.json:

```json
{
  "virtual-kubelet":
  {
    "cpu": "100",
    "memory": "100Gi",
    "pods": "100"
  }
}
```

Start virtual kubelet:

```sh
export APISERVER_CERT_LOCATION=/path/to/vklet-cert.pem
export APISERVER_KEY_LOCATION=/path/to/vklet-key.pem
export KUBECONFIG=/path/to/kubeconfig
virtual-kubelet --provider mock --provider-config /path/to/mock.json
```

Now we have simulated a node with 100 cores + 100GB memory using virtual kubelet.

- Add `PodLifecycleHandler` implementation to convert important information in Pod orchestration into ssh command execution, and collect logs for Starwhale Controller to collect.

See [ssh executor](https://github.com/jialeicui/remote-provider/tree/master/cmd/virtual-kubelet/internal/provider/mock) for a concrete implementation.
