---
title: Install Starwhale Server to Kubernetes Cluster
---

In a private deployment scenario, Starwhale Server can be deployed to a Kubernetes cluster using Helm. Starwhale Server relies on two fundamental infrastructure dependencies: MySQL database and object storage.

- For production environments, it is recommended to provide externally high-availability MySQL database and object storage.
- For trial or testing environments, the standalone versions of MySQL and MinIO, included in the Starwhale Charts, can be utilized.

## Prerequisites

- A running Kubernetes 1.19+ cluster to run tasks.
- Kubernetes Ingress provides HTTP(S) routing.
- [Helm](https://helm.sh) 3.2.0+.
- [**Production Required**] A running MySQL 8.0+ instance to store metadata.
- [**Production Required**] A S3-compatible object storage system to save datasets, models, and others. Currently tested compatible object storage services:
  - [MinIO](https://min.io/)
  - AWS [S3](https://aws.amazon.com/s3/)
  - Kingsoft Cloud [KS3](https://www.ksyun.com/nv/product/ES10000.html)
  - Alibaba Cloud [OSS](https://www.aliyun.com/product/oss)
  - Tencent Cloud [COS](https://cloud.tencent.com/document/product/436)

## Helm Charts

### Downloading Helm Charts

```bash
helm repo add starwhale https://star-whale.github.io/charts
helm repo update
```

### Editing values.yaml (production required)

In a production environment, it is recommended to configure parameters like the MySQL database, object storage, domain names, and memory allocation by editing values.yaml based on actual deployment needs. Below is a sample values.yaml for reference:

```yaml
# Set image registry for China mainland, recommend "docker-registry.starwhale.cn". Other network environments can ignore this setting, will use ghcr.io: https://github.com/orgs/star-whale/packages.
image:
  registry: docker-registry.starwhale.cn
  org: star-whale

# External MySQL service depended in production, MySQL version needs to be greater than 8.0
externalMySQL:
  host: 10.0.1.100 # Database IP address or domain that is accessible within the Kubernetes cluster
  port: 3306
  username: "your-username"
  password: "your-password"
  database: starwhale # Needs to pre-create the database, name can be specified freely, default charset is fine. The database user specified above needs read/write permissions to this database

# External S3 protocol compatible object storage service relied on in production
externalOSS:
  host: ks3-cn-beijing.ksyuncs.com # Object storage IP address or domain that is accessible from both the Kubernetes cluster and Standalone instances
  port: 80
  accessKey: "your-ak"
  secretKey: "your-sk"
  defaultBuckets: test-gp # Needs to pre-create the Bucket, name can be specified freely. The ak/sk specified above needs read/write permissions to this Bucket
  region: BEIJING # Object storage corresponding region, defaults to local

# If external object storage is specified in production, built-in single instance MinIO is not needed
minio:
  enabled: false

# If external MySQL is specified in production, built-in single instance MySQL is not needed
mysql:
  enabled: false

controller:
  containerPort: 8082
  storageType: "ksyun" # Type of object storage service minio/s3/ksyun/baidu/tencent/aliyun

ingress:
  enabled: true
  ingressClassName: nginx # Corresponds to the Ingress Controller in the Kubernetes cluster
  host: server-domain-name # External accessible domain name for the Server
  path: /

# Recommend at least 32GB memory and 8 CPU cores for Starwhale Server in production
resources:
  controller:
    limits:
      memory: 32G
      cpu: 8
    requests:
      memory: 32G
      cpu: 8

# Downloading Python Packages defined in Starwhale Runtime requires setting PyPI mirror corresponding to actual network environment. Can also modify later in Server System Settings page.
mirror:
  pypi:
    enabled: true
    indexUrl: "https://mirrors.aliyun.com/pypi/simple/"
    extraIndexUrl: "https://pypi.tuna.tsinghua.edu.cn/simple/"
    trustedHost: "mirrors.aliyun.com pypi.tuna.tsinghua.edu.cn"
```

## Deploying/Upgrading Starwhale Server

The following command can be used for both initial deployment and upgrades. It will automatically create a Kubernetes namespace called "starwhale". values.custom.yaml is the values.yaml file written according to the actual needs of the cluster.

```bash
helm upgrade --devel --install starwhale starwhale/starwhale --namespace starwhale --create-namespace -f values.custom.yaml
```

If you have a local `kubectl` command-line tool installed, you can run `kubectl get pods -n starwhale` to check if all pods are running.

## Uninstalling Starwhale Server

```bash
helm delete starwhale-server
```
