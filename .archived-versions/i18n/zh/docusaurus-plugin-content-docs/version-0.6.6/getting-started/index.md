---
title: 入门指南
---

Starwhale的每个部署称为一个实例。所有实例都可以通过Starwhale Client（swcli）进行管理。您可以任选以下实例类型之一开始使用:

* **Starwhale Standalone** - Starwhale Standalone 本质上是一套存储在本地文件系统中的数据库。它由 Starwhale Client（swcli）创建和管理。您只需安装 `swcli` 即可使用。目前，一台机器上的每个用户只能拥有一个Starwhale Standalone 实例。我们建议您使用 Starwhale Standalone 来构建和测试您的数据集和模型，然后再将它们推送到 Starwhale Server/Cloud 实例。
* **Starwhale Server** - Starwhale Server 是部署在您本地服务器上的服务。除了 Starwhale Client（swcli）的文本交互界面，Starwhale Server还提供 Web UI供您管理数据集和模型，以及在Kubernetes集群中运行模型并查看运行结果。
* **Starwhale Cloud** - Starwhale Cloud 是托管在公共云上的服务。 通过在<https://cloud.starwhale.cn>注册一个账号，您就可以使用Starwhale，而无需安装、运行和维护您自己的实例。 Starwhale Cloud 还提供公共资源供您下载，例如一些流行的开源集数据集、模型和运行时。查看 Starwhale Cloud 实例上的 “starwhale/public”项目以获取更多详细信息。

在您决定要使用的实例类型时，请考虑以下因素：

| 实例类型 | 部署位置 | 维护者 | 用户界面 | 可扩展性 |
| -------------- | -------------- | -------------- | -------------- | -------------- |
| Starwhale Standalone | 您的笔记本电脑或本地服务器 | 不需要 | 命令行 | 不可扩展 |
| Starwhale Server | 您的数据中心 | 您自己 | Web UI和命令行 | 可扩展，取决于您的 Kubernetes 集群 |
| Starwhale Cloud | 公共云，如AWS或阿里云 | Starwhale团队 | Web UI和命令行 | 可扩展，但目前受到云上免费可用资源的限制 |

根据您使用的实例类型，您可以参考以下三个入门指南：

* [Starwhale Standalone入门指南](standalone) - 本指南可帮助您在台式PC/笔记本电脑上运行一个MNIST评估。这是开始使用Starwhale最快最简单的方法。
* [Starwhale Server入门指南](server) - 本指南可帮助您在私有服务器上安装Starwhale Server并运行一个MNIST评估。在本指南结束时，您将拥有一个Starwhale Server实例，您可以在其中管理您的数据集和模型。
* [Starwhale Cloud入门指南](cloud) - 本指南可帮助您在Starwhale Cloud上创建帐户并运行MNIST评估。这是体验所有Starwhale功能的最简单方法。
