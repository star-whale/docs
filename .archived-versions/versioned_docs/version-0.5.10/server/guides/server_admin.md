---
title: Controller Admin Settings
---

## Superuser Password Reset

In case you forget the superusers password, you could use the sql below to reset the password to `abcd1234`

```sql
update user_info set user_pwd='ee9533077d01d2d65a4efdb41129a91e', user_pwd_salt='6ea18d595773ccc2beacce26' where id=1
```

After that, you could login to the console and then change the password to what you really want.

## System Settings

You could customize system to make it easier to use by leverage of `System setting`. Here is an example below:

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
    ak: "starwhale"b
    sk: "starwhale"
    endpoint: "http://10.131.0.1:9000"
    region: "local"
    hugeFileThreshold: "10485760"
    hugeFilePartSize: "5242880"
```

### Image Registry

Tasks dispatched by the server are based on docker images. Pulling these images could be slow if your internet is not working well. Starwhale Server supports the custom image registries, includes `dockerSetting.registryForPush` and `dockerSetting.registryForPull`.

### Resource Pool

The `resourcePoolSetting` allows you to manage your cluster in a group manner. It is currently implemented by K8S `nodeSelector`, you could label your machines in K8S cluster and make them a `resourcePool` in Starwhale.

### Remote Storage

The `storageSetting` allows you to manage the storages the server could access.

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

Every `storageSetting` item has a corresponding implementation of `StorageAccessService` interface. Starwhale has four build-in implementations:

- `StorageAccessServiceAliyun` matches `type` in (`aliyun`,`oss`)
- `StorageAccessServiceMinio` matches `type` in (`minio`)
- `StorageAccessServiceS3` matches `type` in (`s3`)
- `StorageAccessServiceFile` matches `type` in (`fs`, `file`)

Each of the implementations has different requirements for `tokens`. `endpoint` is required when `type` in (`aliyun`,`minio`), `region` is required when `type` is `s3` and `endpoint` is empty. While `fs/file` type requires tokens has name `rootDir` and `serviceProvider`.
Please refer the code for more details.
