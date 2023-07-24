---
title: Starwhale Standalone入门指南
---

当[Starwhale Client（swcli）](../swcli)安装完成后，您就可以使用Starwhale Standalone。

我们也提供对应的Jupyter Notebook例子，可以在 [Google Colab](https://colab.research.google.com/github/star-whale/starwhale/blob/main/example/notebooks/quickstart-standalone.ipynb) 或本地的 [vscode/jupyterlab](https://github.com/star-whale/starwhale/blob/main/example/notebooks/quickstart-standalone.ipynb) 中试用。

## 下载例子

通过以下方式克隆Starwhale项目来下载Starwhale示例：

```bash
GIT_LFS_SKIP_SMUDGE=1 git clone https://github.com/star-whale/starwhale.git --depth 1
cd starwhale
```

为了节省例子的下载时间，我们执行git clone命令时，忽略了git-lfs，并只保留最近一次的commit信息。我们选用ML/DL领域的HelloWorld程序-MNIST来介绍如何从零开始构建数据集、模型包和运行环境，并最终完成模型评测。接下来的操作都在 starwhale 目录中进行。

![核心工作流程](../img/standalone-core-workflow.gif)

## 构建 Pytorch 运行时

运行时示例代码位于`example/runtime/pytorch`目录中。

- 构建Starwhale运行时包：

  ```bash
  swcli runtime build --yaml example/runtime/pytorch/runtime.yaml
  ```

  :::tip

  当首次构建Starwhale Runtime时，由于需要创建venv或conda隔离环境，并下载相关的Python依赖，命令执行需要花费一段时间。时间长短取决与所在机器的网络情况和runtime.yaml中Python依赖的数量。建议合理设置机器的 `~/.pip/pip.conf` 文件，填写缓存路径和适合当前网络环境的pypi mirror地址。

  处于中国大陆网络环境中的用户，可以参考如下配置：

    ```conf
    [global]
    cache-dir = ~/.cache/pip
    index-url = https://pypi.tuna.tsinghua.edu.cn/simple
    extra-index-url = https://mirrors.aliyun.com/pypi/simple/
    ```

  :::

- 检查您本地的Starwhale运行时：

  ```bash
  swcli runtime list
  swcli runtime info pytorch
  ```

## 构建模型

模型示例代码位于 `example/mnist` 目录中。

- 下载预训练模型文件：

  ```bash
  cd example/mnist
  CN=1 make download-model
  # 非中国大陆网络用户，可以省略 CN=1 环境变量
  cd -
  ```

- 构建一个Starwhale模型：

  ```bash
  swcli model build example/mnist --runtime pytorch
  ```

- 检查您本地的Starwhale模型：

  ```bash
  swcli model list
  swcli model info mnist
  ```

## 构建数据集

数据集示例代码位于 `example/mnist` 目录中。

- 下载MNIST原始数据：

  ```bash
  cd example/mnist
  CN=1 make download-data
  # 非中国大陆网络用户，可以省略 CN=1 环境变量
  cd -
  ```

- 构建Starwhale数据集：

  ```bash
  swcli dataset build --yaml example/mnist/dataset.yaml
  ```

- 检查您本地的Starwhale数据集：

  ```bash
  swcli dataset list
  swcli dataset info mnist
  swcli dataset head mnist
  ```

## 运行评估作业

- 创建评估工作

 ```bash
 swcli -vvv model run --uri mnist --dataset mnist --runtime pytorch
 ```

- 检查评估结果

 ```bash
 swcli job list
 swcli job info $(swcli job list | grep mnist | grep success | awk '{print $1}' | head -n 1)
 ```

**恭喜！ 您已完成Starwhale Standalone的入门指南。**
