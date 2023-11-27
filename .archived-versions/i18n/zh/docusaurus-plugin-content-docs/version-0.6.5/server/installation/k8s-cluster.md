---
title: 在 Kubernetes 集群中安装 Starwhale
---

在私有化场景中，可以使用 Helm 将 Starwhale Server 部署到一个 Kubernetes 集群中。Starwhale Server 依赖 MySQL 数据库和对象存储的这两个基础设施依赖：

- 生产环境中，建议提供外部高可用的 MySQL 数据库和对象存储。
- 试用或测试环境中，可以使用 Starwhale Charts 中自带单机版的 MySQL 和 MinIO。

## 先决条件

- 1.19或者更高版本的Kubernetes集群用于执行任务。
- Kubernetes Ingress 提供 HTTP(S) 路由。
- [Helm](https://helm.sh) 3.2.0+。
- [**生产环境必需**] MySQL 8.0以上版本的数据库实例用于存储元数据。
- [**生产环境必需**] 兼容S3接口的对象存储，用于保存数据集、模型等。当前经过测试的对象存储服务列表：
  - [MinIO](https://min.io/)
  - AWS [S3](https://aws.amazon.com/s3/)
  - 金山云 [KS3](https://www.ksyun.com/nv/product/ES10000.html)
  - 阿里云 [OSS](https://www.aliyun.com/product/oss)
  - 腾讯云 [COS](https://cloud.tencent.com/document/product/436)

## Helm Charts

### 下载 Starwhale Helm chart

```bash
helm repo add starwhale https://star-whale.github.io/charts
helm repo update
```

### 编写 values.yaml (生产环境必需)

生产环境中，需要根据实际部署需要，设置包括 MySQL数据库，对象存储，域名和内存等参数，编写 values.yaml 是推荐的方式。下面是一个 values.yaml 的实例，供参考：

```yaml
# 设置镜像源，中国大陆网环境推荐 “docker-registry.starwhale.cn” 地址。其他网络环境可以忽略该设置项，会使用ghcr.io 镜像源: https://github.com/orgs/star-whale/packages 。
image:
  registry: docker-registry.starwhale.cn
  org: star-whale

# 生产环境中依赖的外部 MySQL 服务，MySQL 版本需要大于8.0
externalMySQL:
  host: 10.0.1.100  # Kubernetes 集群中可以访问的数据库IP地址或域名
  port: 3306
  username: "your-username"
  password: "your-password"
  database: starwhale  # 需要提前创建数据库，名字自由指定，默认字符集即可。上面指定的数据库用户需要对这个 dataset 有读写权限

# 生产环境中依赖的外部 S3 协议的对象存储服务
externalOSS:
  host: ks3-cn-beijing.ksyuncs.com  # Kubernetes 集群和 Standalone 实例中同时可以访问的对象存储IP地址或域名
  port: 80
  accessKey: "your-ak"
  secretKey: "your-sk"
  defaultBuckets: starwhale  # 需要提前创建Bucket，名字自由指定。上面指定的ak/sk 需要对这个 Bucket 有读写权限
  region: BEIJING  # 对象存储对应的 region，默认为 local

# 生产环境中指定了外部对象存储后，不需要自带的单机版本 MinIO
minio:
  enabled: false

# 生产环境中指定了外部 MySQL 后，不需要自带的单机版本 MySQL
mysql:
  enabled: false

controller:
  containerPort: 8082
  storageType: "ksyun"  # 对象存储的类型 minio/s3/ksyun/baidu/tencent/aliyun
  ingress:
    enabled: true
    ingressClassName: nginx   # 与 Kubernetes 集群中 Ingress Controller 对应
    host: server-domain-name  # Server 外部访问的域名
    path: /

# 生产环境中推荐 Starwhale Server 至少32G内存和8核CPU。
resources:
  controller:
    limits:
      memory: 32G
      cpu: 8
    requests:
      memory: 32G
      cpu: 8

# Server 中运行评测是需要下载 Starwhale Runtime 中定义的 Python Package，推荐设置符合实际网络环境的 PYPI mirror。后续也可以在 Server System Settings页面中修改。
mirror:
  pypi:
    enabled: true
    indexUrl: "https://mirrors.aliyun.com/pypi/simple/"
    extraIndexUrl: "https://pypi.tuna.tsinghua.edu.cn/simple/"
    trustedHost: "mirrors.aliyun.com pypi.tuna.tsinghua.edu.cn"
```

## 部署/更新 Starwhale Server

首次部署或更新都可以使用如下命令，会自动创建一个 starwhale 的 kubernetes namespace。 `values.custom.yaml` 是根据实际集群的需要，编写的values.yaml。

```bash
helm upgrade --devel --install starwhale starwhale/starwhale --namespace starwhale --create-namespace -f values.custom.yaml
```

如果您安装了`kubectl`命令行工具，您可以运行 `kubectl get pods -n starwhale` 来检查是否所有 pod 都在正常运行中。

## 卸载 Starwhale Server

```bash
helm delete starwhale
```
