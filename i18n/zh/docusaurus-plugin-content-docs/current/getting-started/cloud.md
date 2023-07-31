---
title: Starwhale Cloud入门指南
---

Starwhale Cloud运行在阿里云上，域名是 <https://cloud.starwhale.cn> ，后续我们会推出部署在AWS上的 <https://cloud.starwhale.ai> 服务，需要注意的是，这是两个相互独立的实例，帐户和数据不共享。您可以选择任何一个开始。

在开始之前，您需要先安装[Starwhale Client（swcli）](../swcli)。

## 注册Starwhale Cloud并创建您的第一个项目

您可以直接使用自己的GitHub或微信帐号登录，也可以注册一个新的帐号。如果您使用 GitHub 或 微信帐号登录，系统会要求您提供用户名。

然后您可以创建一个新项目。在本教程中，我们将使用名称 `demo` 作为项目名称。

## 在本地机器上构建数据集、模型和运行时

按照[Starwhale Standalone入门指南](standalone)中的步骤1到步骤4在本地机器上创建：

- 一个名为mnist的Starwhale模型
- 一个名为mnist的Starwhale数据集
- 一个名为pytorch的Starwhale运行时

## 登录云实例

```bash
swcli instance login --username <您的用户名> --password <您的密码> --alias swcloud https://cloud.starwhale.cn
```

## 将数据集、模型和运行时复制到Starwhale Cloud

```bash
swcli model copy mnist swcloud/project/demo
swcli dataset copy mnist swcloud/project/demo
swcli runtime copy pytorch swcloud/project/demo
```

## 使用 Web UI 运行评估

![console-create-job.gif](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/console-create-job.gif)

**恭喜！ 您已完成Starwhale Cloud的入门指南。**
