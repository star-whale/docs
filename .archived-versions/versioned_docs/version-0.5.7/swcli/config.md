---
title: Configuration
---

Standalone Instance is installed on the user's laptop or development server, providing isolation at the level of Linux/macOX users. Users can install the Starwhale Python package using the pip command and execute any swcli command. After that, they can view their Starwhale configuration in ~/.config/starwhale/config.yaml. In the vast majority of cases, users do not need to manually modify the config.yaml file.

The ~/.config/starwhale/config.yaml file has permissions set to 0o600 to ensure security, as it contains sensitive information such as encryption keys. Users are advised not to change the file permissions.You could customize your `swcli` by `swci config edit`:

```shell
swcli config edit
```

## config.yaml example

The typical `config.yaml` file is as follows:

- The default instance is local.
- cloud-cn/cloud-k8s/pre-k8s are the server/cloud instances, local is the standalone instance.
- The local storage root directory for the Standalone Instance is set to /home/liutianwei/.starwhale.

```yaml
current_instance: local
instances:
  cloud-cn:
    sw_token: ${TOKEN}
    type: cloud
    updated_at: 2022-09-28 18:41:05 CST
    uri: https://cloud.starwhale.cn
    user_name: starwhale
    user_role: normal
  cloud-k8s:
    sw_token: ${TOKEN}
    type: cloud
    updated_at: 2022-09-19 16:10:01 CST
    uri: http://cloud.pre.intra.starwhale.ai
    user_name: starwhale
    user_role: normal
  local:
    current_project: self
    type: standalone
    updated_at: 2022-06-09 16:14:02 CST
    uri: local
    user_name: liutianwei
  pre-k8s:
    sw_token: ${TOKEN}
    type: cloud
    updated_at: 2022-09-19 18:06:50 CST
    uri: http://console.pre.intra.starwhale.ai
    user_name: starwhale
    user_role: normal
link_auths:
  - ak: starwhale
    bucket: users
    connect_timeout: 10.0
    endpoint: http://10.131.0.1:9000
    read_timeout: 100.0
    sk: starwhale
    type: s3
storage:
  root: /home/liutianwei/.starwhale
version: '2.0'
```

## config.yaml definition

|Parameter|Description|Type|Default Value|Required|
|---|----|---|-----|-------|
|`current_instance`|The name of the default instance to use. It is usually set using the `swcli instance select` command.|String|self|Yes|
|`instances`|Managed instances, including Standalone, Server and Cloud Instances. There must be at least one Standalone Instance named "local" and one or more Server/Cloud Instances. You can log in to a new instance with `swcli instance login` and log out from an instance with `swcli instance logout`.|Dict|Standalone Instance named "local"|Yes|
|`instances.{instance-alias-name}.sw_token`|Login token for Server/Cloud Instances. It is only effective for Server/Cloud Instances. Subsequent `swcli` operations on Server/Cloud Instances will use this token. Note that tokens have an expiration time, typically set to one month, which can be configured within the Server/Cloud Instance.|String||Cloud - Yes, Standalone - No|
|`instances.{instance-alias-name}.type`|Type of the instance, currently can only be "cloud" or "standalone".|Choice[string]||Yes|
|`instances.{instance-alias-name}.uri`|For Server/Cloud Instances, the URI is an http/https address. For Standalone Instances, the URI is set to "local".|String||Yes|
|`instances.{instance-alias-name}.user_name`|User's name|String||Yes|
|`instances.{instance-alias-name}.current_project`|Default Project under the current instance. It will be used to fill the "project" field in the URI representation by default. You can set it using the `swcli project select` command.|String||Yes|
|`instances.{instance-alias-name}.user_role`|User's role.|String|normal|Yes|
|`instances.{instance-alias-name}.updated_at`|The last updated time for this instance configuration.|Time format string||Yes|
|`storage`|Settings related to local storage.|Dict||Yes|
|`storage.root`|The root directory for Standalone Instance's local storage. Typically, if there is insufficient space in the home directory and you manually move data files to another location, you can modify this field.|String|`~/.starwhale`|Yes|
|`version`|The version of config.yaml, currently only supports 2.0.|String|2.0|Yes|

### link_auths definition

You could put `starwhale.Link` to your assets while the URI in the `Link` could be whatever(only s3 like or http is implemented) you need, such as `s3://10.131.0.1:9000/users/path`. However, `Link`s may need to be authed, you could config the auth info in `link_auths`.

```yaml
link_auths:
  - type: s3
    ak: starwhale
    bucket: users
    region: local
    connect_timeout: 10.0
    endpoint: http://10.131.0.1:9000
    read_timeout: 100.0
    sk: starwhale
```

Items in `link_auths` will match the uri in `Link`s automatically. `s3` typed link_auth matching `Link`s by looking up `bucket` and `endpoint`.
