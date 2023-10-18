---
title: 使用 Minikube 安装 Starwhale Server
---

## 先决条件

* [Minikube](https://minikube.sigs.k8s.io/docs/start/) 1.25+
* [Helm](https://helm.sh/docs/intro/install/) 3.2.0+
* 操作系统： Linux 或 macOS

## 启动 Minikube

```bash
minikube start --addons ingress --image-mirror-country=cn --kubernetes-version=1.25.3
```

对于非中国大陆网络用户，可以省略 `--image-mirror-country=cn` 参数。另外，如果在您的机器上没有安装 [kubectl](https://kubernetes.io/zh-cn/docs/reference/kubectl/)，可以使用 Minikube 自带的 kubectl： `minikube kubectl` 或 bashrc中增加 `alias kubectl="minikube kubectl --"`。

## 安装 Starwhale Server

```bash
helm repo add starwhale https://star-whale.github.io/charts
helm repo update
helm pull starwhale/starwhale --untar --untardir ./charts

helm upgrade --install starwhale ./charts/starwhale -n starwhale --create-namespace -f ./charts/starwhale/values.minikube.cn.yaml
```

对于非中国大陆网络用户，可以使用 `values.minikube.global.yaml`，命令如下：

```bash
helm upgrade --install starwhale ./charts/starwhale -n starwhale --create-namespace -f ./charts/starwhale/values.minikube.global.yaml
```

当成功安装后，会有类似如下的提示信息输出：

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

## 检查 Starwhale Server 状态

Minikube 方式启动 Starwhale Server 一般要用时3-5分钟，可以输出如下命令检查是否完成启动：

```bash
kubectl get deployments -n starwhale
```

| NAME       | READY | UP-TO-DATE | AVAILABLE | AGE |
| ---------- | ----- | ---------- | --------- | --- |
| controller | 1/1   | 1          | 1         | 5m  |
| minio      | 1/1   | 1          | 1         | 5m  |
| mysql      | 1/1   | 1          | 1         | 5m  |

## 本机访问的网络配置

输出如下命令后，就可以在浏览器中通过 <http://controller.starwhale.svc> 访问 Starwhale Server：

```bash
echo "$(sudo minikube ip) controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc " | sudo tee -a /etc/hosts
```

## 其他机器访问的网络配置

* 步骤1： 在 Starwhale Server 所在机器上

  使用 `socat` 命令做临时的端口转发，命令如下：

  ```bash
  # install socat at first, ref: https://howtoinstall.co/en/socat
  sudo socat TCP4-LISTEN:80,fork,reuseaddr,bind=0.0.0.0 TCP4:`minikube ip`:80
  ```

  当您停掉socat进程后，端口转发会被禁止，其他机器的访问也会被禁止。如果想长期开启端口转发，可以使用 `iptables` 命令。

* 步骤2： 在其他机器上

  在 hosts 文件添加相关域名映射，命令如下：

  ```bash
  # for macOSX or Linux environment, run the command in the shell.
  echo ${your_machine_ip} controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc " | sudo tee -a /etc/hosts

  # for Windows environment, run the command in the PowerShell with administrator permission.
  Add-Content -Path C:\Windows\System32\drivers\etc\hosts -Value "`n${your_machine_ip} controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc"
  ```
