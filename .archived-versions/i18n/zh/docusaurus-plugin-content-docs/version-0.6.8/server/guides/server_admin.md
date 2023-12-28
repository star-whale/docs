---
title: Starwhale Server 系统设置
---

## 超级管理员密码重置

一旦您忘记了超级管理员的密码, 您可以通过下面的SQL语句将密码重置为 `abcd1234`

```sql
update user_info set user_pwd='ee9533077d01d2d65a4efdb41129a91e', user_pwd_salt='6ea18d595773ccc2beacce26' where id=1
```

重置后，您可以使用上述密码登录到console。 然后再次修改密码为您想要的密码。

## 系统设置

您可以在 Starwhale Server Web 界面中对系统设置进行更改，目前支持runtime的docker镜像源修改以及资源池的划分等。下面是系统设置的一个例子：

```yaml
dockerSetting:
  registryForPull: "docker-registry.starwhale.cn/star-whale"
  registryForPush: ""
  userName: ""
  password: ""
  insecure: true
pypiSetting:
  indexUrl: ""
  extraIndexUrl: ""
  trustedHost: ""
  retries: 10
  timeout: 90
imageBuild:
  resourcePool: ""
  image: ""
  clientVersion: ""
  pythonVersion: ""
datasetBuild:
  resourcePool: ""
  image: ""
  clientVersion: ""
  pythonVersion: ""
resourcePoolSetting:
- name: "default"
  nodeSelector: null
  resources:
  - name: "cpu"
    max: null
    min: null
    defaults: 5.0
  - name: "memory"
    max: null
    min: null
    defaults: 3145728.0
  - name: "nvidia.com/gpu"
    max: null
    min: null
    defaults: null
  tolerations: null
  metadata: null
  isPrivate: null
  visibleUserIds: null
storageSetting:
- type: "minio"
  tokens:
    bucket: "users"
    ak: "starwhale"
    sk: "starwhale"
    endpoint: "http://10.131.0.1:9000"
    region: "local"
    hugeFileThreshold: "10485760"
    hugeFilePartSize: "5242880"
- type: "s3"
  tokens:
    bucket: "users"
    ak: "starwhale"
    sk: "starwhale"
    endpoint: "http://10.131.0.1:9000"
    region: "local"
    hugeFileThreshold: "10485760"
    hugeFilePartSize: "5242880"
```

### 镜像源设置

Server 下发的 Tasks 都是基于 docker 实现的，Starwhale Server 支持自定义镜像源，包括 `dockerSetting.registryForPush` 和 `dockerSetting.registryForPull`。

### 资源池设置

资源池实现了集群机器分组的功能。用户在创建任务时可以通过选择资源池将自己的任务下发到想要的机器组中。资源池可以理解为 Kubernetes 中的 `nodeSelector`，所以当您在K8S集群中给机器打上标签后，就可以在这里配置您的 `resourcePool`。

### 存储设置

您可以通过存储设置来配置 Starwhale Server可以访问那些存储介质：

```yaml
storageSetting:
  - type: s3
    tokens:
      - bucket: starwhale # required
        ak: access_key # required
        sk: scret_key # required
        endpoint: http://s3.region.amazonaws.com # optional
        region: region of the service # required when endpoint is empty
        hugeFileThreshold: 10485760 #  bigger than 10MB will use multiple part upload
        hugeFilePartSize: 5242880 # MB part size for multiple part upload
  - type: minio
    tokens:
      - bucket: starwhale # required
        ak: access_key # required
        sk: scret_key # required
        endpoint: http://10.131.0.1:9000 # required
        region: local # optional
        hugeFileThreshold: 10485760 #  bigger than 10MB will use multiple part upload
        hugeFilePartSize: 5242880 # MB part size for multiple part upload
  - type: aliyun
    tokens:
      - bucket: starwhale # required
        ak: access_key # required
        sk: scret_key # required
        endpoint: http://10.131.0.2:9000 # required
        region: local # optional
        hugeFileThreshold: 10485760 #  bigger than 10MB will use multiple part upload
        hugeFilePartSize: 5242880 # MB part size for multiple part upload

```

每一个 `storageSetting` 条目都应该有一个`StorageAccessService`接口的实现. Starwhale目前有四个内置的实现:

- `StorageAccessServiceAliyun` 可以处理 `type` 是 `aliyun` 或者 `oss` 的条目
- `StorageAccessServiceMinio` 可以处理`type` 是 `minio` 的条目
- `StorageAccessServiceS3` 可以处理 `type` 是 `s3` 的条目
- `StorageAccessServiceFile` 可以处理 `type` 是 `fs` 或者 `file` 的条目

不同的实现对 `tokens` 的要求是不一样的. 当 `type` 是 `aliyun`、`minio`或者`oss`的时候 `endpoint` 是 必填的。 当 `endpoint` 为空并且  `type` 是 `s3` 的时候 `region` 必填的。 而 `fs/file` 类型的存储则需要 `rootDir` 和 `serviceProvider` 作为`tokens`的key.
更多细节请参阅代码。
