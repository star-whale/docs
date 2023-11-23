---
title: Starwhale Server入门指南
---

## 安装Starwhale Server

安装 Starwhale Server，参见[安装指南](../server/installation/index.md)。

## 创建您的第一个项目

### 登录服务器

打开浏览器并在地址栏中输入服务器的 URL。 使用默认用户名（starwhale）和密码（abcd1234）登录。

![console-artifacts.gif](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/console-artifacts.gif)

### 创建一个新项目

## 在本地机器上构建数据集、模型和运行时

按照[Starwhale Standalone入门指南](standalone)中的步骤1到步骤4在本地机器上创建：

- 一个名为helloworld的Starwhale模型
- 一个名为mnist64的Starwhale数据集
- 一个名为helloworld的Starwhale运行时

## 将数据集、模型和运行时复制到Starwhale Server

```bash
swcli instance login --username <your username> --password <your password> --alias server <Your Server URL>

swcli model copy helloworld server/project/demo
swcli dataset copy mnist64 server/project/demo
swcli runtime copy helloworld server/project/demo
```

## 使用Web UI运行模型评估

使用浏览器打开“demo”项目并创建一个新的评估。

![console-create-job.gif](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/console-create-job.gif)

**恭喜！ 您已完成Starwhale Server的入门指南。**
