---
title: Starwhale Runtime入门指南
---

本文演示如何搭建Pytorch环境的Starwhale Runtime以及如何在不同环境中使用它。该runtime可以满足Starwhale中六个例子的依赖需求：mnist、speech commands、nmt、cifar10、ag_news、PennFudan。相关代码链接：[example/runtime/pytorch](https://github.com/star-whale/starwhale/tree/main/example/runtime/pytorch)。

您可以从本教程中学到以下内容：

* 如何构建Starwhale Runtime。
* 如何在不同场景下使用Starwhale Runtime。
* 如何发布Starwhale Runtime。

## 前置条件

### 基础环境

* Python 3.7+
* Linux或macOS
* [Starwhale Client](../swcli/index.md) 0.5.6+

运行以下命令以克隆示例代码：

```shell
git clone https://github.com/star-whale/starwhale.git
cd starwhale/example/runtime/pytorch-cn-mirror #非中国大陆网络可使用pytorch例子
```

## 构建Starwhale Runtime

```console
❯ swcli -vvv runtime build --yaml runtime.yaml
```

## 在Standalone Instance中使用Starwhale Runtime

### 在shell中使用Starwhale Runtime

```console
# 激活runtime
swcli runtime activate pytorch-cn-mirror
```

`swcli runtime activate`会下载runtime的所有python依赖，并在当前shell环境中激活该环境。这个过程可能需要很长时间。

当runtime被激活时，所有依赖项都已在您的python环境中准备就绪，类似于virtualenv的`source venv/bin/activate`或者conda的`conda activate`命令。如果您关闭了shell或切换到另一个shell，则下次使用之前需要重新激活这个runtime。

### 在swcli中使用Starwhale Runtime

```console
# 模型构建中使用runtime
swcli model build . --runtime pytorch-cn-mirror
# 数据集构建中使用runtime
swcli dataset build . --runtime pytorch-cn-mirror
# 模型评测中使用runtime
swcli model run --uri mnist/version/v0 --dataset mnist --runtime pytorch-cn-mirror
```

## 将 Starwhale Runtime 复制到另一个实例

您可以将运行时复制到Server/Cloud实例，然后可以在Server/Cloud实例中使用或由其他用户下载。

```console
# 将runtime复制到名为“pre-k8s”的Server实例
❯ swcli runtime copy pytorch-cn-mirror cloud://pre-k8s/project/starwhale
```
