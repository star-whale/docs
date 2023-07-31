---
title: Starwhale 资源URI
---

:::tip
**资源 URI 在 Starwhale Client 中被广泛使用。URI 可以引用本地实例中的资源或远程实例中的任何其他资源。 这样 Starwhale Client 就可以轻松操作任何资源。**
:::

![concepts-org.jpg](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/concepts-org.jpg)

## 实例URI {#instance}

实例 URI 可以是以下形式之一:

- `local`: 指本地的 Standalone 实例.
- `[http(s)://]<hostname or ip>[:<port>]`：指向一个 Starwhale Cloud 实例。
- `[cloud://]<cloud alias>`：Server或Cloud的实例别名，可以在实例登录阶段配置。

:::caution
“local”不同于“localhost”，前者为 Standalone 实例，而后者是一个 URL ，指向本地运行的 Starwhale Server 实例。
:::

例子:

```bash
# 登录Starwhale Cloud，别名为swcloud
swcli instance login --username <your account name> --password <your password> https://cloud.starwhale.cn --alias swcloud

# 将模型从本地实例复制到云实例
swcli model copy mnist/version/latest swcloud/project/<your account name>:demo

# 将运行时复制到Starwhale Server实例：http://localhost:8081
swcli runtime copy pytorch/version/v1 http://localhost:8081/project/<your account name>:demo
```

## 项目URI {#project}

项目URI的格式为“[<实例URI>/project/]&lt;project name>”。 如果未指定实例 URI，则使用当前实例。

例子:

```bash
swcli project select self   # 选择当前实例中的self项目
swcli project info local/project/self  # 查看本地实例中的self项目信息
```

## 模型/数据集/运行时URI {#model-dataset-runtime}

- 模型URI: `[<项目URI>/model/]<model name>[/version/<version id|tag>]`.
- 数据集URI: `[<项目URI>/dataset/]<dataset name>[/version/<version id|tag>]`.
- 运行时URI: `[<项目URI>/runtime/]<runtime name>[/version/<version id|tag>]`.

:::tip

- `swcli` 支持更加人性化的短版本ID。您可以只键入版本ID的前几个字符，前提是它至少有四个字符长且唯一指向某个版本ID。但是，`recover` 命令必须使用完整的版本ID。
- 如果未指定项目URI，将使用[默认项目](#defaultProject)。
- 您始终可以使用版本标签而不是版本ID。

:::

例子：

```bash
swcli model info mnist/version/hbtdenjxgm4ggnrtmftdgyjzm43tioi  # 检查模型信息，模型名称：mnist，版本：hbtdenjxgm4ggnrtmftdgyjzm43tioi
swcli model remove mnist/version/hbtdenj  # 使用短版本ID
swcli model info mnist  # 检查mnist模型信息
swcli model run mnist --runtime pytorch-mnist --dataset mnist # 使用latest的默认tag
```

## 作业URI {#job}

- 格式: `[<项目URI>/job/]<job id>`.
- 如果未指定项目URI，将使用默认项目。

例子：

```bash
swcli job info mezdayjzge3w   # 查看默认实例和默认项目中的mezdayjzge3w版本
swcli job info local/project/self/job/mezday # 检查本地实例，self项目，作业id:mezday
```

## 默认实例 {#defaultInstance}

当项目URI中的实例部分被省略时，将使用默认实例进行替代。默认实例是由 `swcli instance login` 或 `swcli instance use` 指定的。

## 默认项目 {#defaultProject}

当模型/数据集/运行时/评估URI的项目部分被省略时，将使用默认项目。默认项目是指通过 `swcli project use` 命令选择的项目。
