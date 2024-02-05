---
title: Install Starwhale Server with Minikube
---

## Prerequisites

* [Minikube](https://minikube.sigs.k8s.io/docs/start/) 1.32.0+
* [Helm](https://helm.sh/docs/intro/install/) 3.2.0+
* OS: Linux or macOS

## Starting Minikube

```bash
minikube start --addons ingress
```

For users in the mainland of China, please run the following commands:

```bash
minikube start --kubernetes-version=1.25.3 --image-repository=docker-registry.starwhale.cn/minikube --base-image=docker-registry.starwhale.cn/minikube/k8s-minikube/kicbase:v0.0.42

minikube addons enable ingress --images="KubeWebhookCertgenPatch=ingress-nginx/kube-webhook-certgen:v20231011-8b53cabe0,KubeWebhookCertgenCreate=ingress-nginx/kube-webhook-certgen:v20231011-8b53cabe0,IngressController=ingress-nginx/controller:v1.9.4"
```

The docker registry `docker-registry.starwhale.cn/minikube` currently only caches the images for Kubernetes 1.25.3. Another choice, you can also use Aliyun mirror:

```bash
minikube start --image-mirror-country=cn

minikube addons enable ingress --images="KubeWebhookCertgenPatch=kube-webhook-certgen:v20231011-8b53cabe0,KubeWebhookCertgenCreate=kube-webhook-certgen:v20231011-8b53cabe0,IngressController=nginx-ingress-controller:v1.9.4" --registries="KubeWebhookCertgenPatch=registry.cn-hangzhou.aliyuncs.com/google_containers,KubeWebhookCertgenCreate=registry.cn-hangzhou.aliyuncs.com/google_containers,IngressController=registry.cn-hangzhou.aliyuncs.com/google_containers"
```

If there is no kubectl bin in your machine, you may use `minikube kubectl` or `alias kubectl="minikube kubectl --"` alias command.

## Installing Starwhale Server

```bash
helm repo add starwhale https://star-whale.github.io/charts
helm repo update
helm pull starwhale/starwhale --untar --untardir ./charts

helm upgrade --install starwhale ./charts/starwhale -n starwhale --create-namespace -f ./charts/starwhale/values.minikube.global.yaml
```

For users in the mainland of China, use `values.minikube.global.yaml`:

```bash
helm upgrade --install starwhale ./charts/starwhale -n starwhale --create-namespace -f ./charts/starwhale/values.minikube.cn.yaml
```

After the installation is successful, the following prompt message appears:

```bash
    Release "starwhale" has been upgraded. Happy Helming!
    NAME: starwhale
    LAST DEPLOYED: Tue Feb 14 16:25:03 2023
    NAMESPACE: starwhale
    STATUS: deployed
    REVISION: 14
    NOTES:
    ******************************************
    Chart Name: starwhale
    Chart Version: 0.5.6
    App Version: latest
    Starwhale Image:
        - server: ghcr.io/star-whale/server:latest

    ******************************************
    Controller:
        - visit: http://controller.starwhale.svc
    Minio:
        - web visit: http://minio.starwhale.svc
        - admin visit: http://minio-admin.starwhale.svc
    MySQL:
        - port-forward:
        - run: kubectl port-forward --namespace starwhale svc/mysql 3306:3306
        - visit: mysql -h 127.0.0.1 -P 3306 -ustarwhale -pstarwhale
    Please run the following command for the domains searching:
        echo "$(sudo minikube ip) controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc " | sudo tee -a /etc/hosts
    ******************************************
    Login Info:
    - starwhale: u:starwhale, p:abcd1234
    - minio admin: u:minioadmin, p:minioadmin

    *_* Enjoy to use Starwhale Platform. *_*
```

## Checking Starwhale Server status

Keep checking the minikube service status until all deployments are running(waiting for 3~5 mins):

```bash
kubectl get deployments -n starwhale
```

| NAME       | READY | UP-TO-DATE | AVAILABLE | AGE |
| ---------- | ----- | ---------- | --------- | --- |
| controller | 1/1   | 1          | 1         | 5m  |
| minio      | 1/1   | 1          | 1         | 5m  |
| mysql      | 1/1   | 1          | 1         | 5m  |

## Visiting for local

Make the Starwhale controller accessible locally with the following command:

```bash
echo "$(sudo minikube ip) controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc " | sudo tee -a /etc/hosts
```

Then you can visit <http://controller.starwhale.svc> in your local web browser.

## Visiting for others

* Step 1: in the Starwhale Server machine

  for temporary use with `socat` command:

  ```bash
  # install socat at first, ref: https://howtoinstall.co/en/socat
  sudo socat TCP4-LISTEN:80,fork,reuseaddr,bind=0.0.0.0 TCP4:`minikube ip`:80
  ```

  When you kill the socat process, the share access will be blocked. `iptables` maybe a better choice for long-term use.

* Step 2: in the other machines

  ```bash
  # for macOSX or Linux environment, run the command in the shell.
  echo ${your_machine_ip} controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc " | sudo tee -a /etc/hosts

  # for Windows environment, run the command in the PowerShell with administrator permission.
  Add-Content -Path C:\Windows\System32\drivers\etc\hosts -Value "`n${your_machine_ip} controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc"
  ```
