---
title: Getting started with Starwhale Standalone
---

When the [Starwhale Client (swcli)](../swcli) is installed, you are ready to use Starwhale Standalone.

We also provide a Jupyter Notebook example, you can try it in [Google Colab](https://colab.research.google.com/github/star-whale/starwhale/blob/main/example/notebooks/quickstart-standalone.ipynb) or in your local [vscode/jupyterlab](https://github.com/star-whale/starwhale/blob/main/example/notebooks/quickstart-standalone.ipynb).

## Downloading Examples

Download Starwhale examples by cloning the Starwhale project via:

```bash
GIT_LFS_SKIP_SMUDGE=1 git clone https://github.com/star-whale/starwhale.git --depth 1
cd starwhale
```

To save time in the example downloading, we skip git-lfs and other commits info. We will use ML/DL HelloWorld code MNIST to start your Starwhale journey. The following steps are all performed in the starwhale directory.

![Core Workflow](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/standalone-core-workflow.gif)

## Building a Pytorch Runtime

Runtime example codes are in the `example/runtime/pytorch` directory.

- Build the Starwhale runtime bundle:

  ```bash
  swcli runtime build --yaml example/runtime/pytorch/runtime.yaml
  ```

  :::tip
  When you first build runtime, creating an isolated python environment and downloading python dependencies will take a lot of time. The command execution time is related to the network environment of the machine and the number of packages in the runtime.yaml. Using the befitting pypi mirror and cache config in the `~/.pip/pip.conf` file is a recommended practice.

  For users in the mainland of China, the following conf file is an option:

    ```conf
    [global]
    cache-dir = ~/.cache/pip
    index-url = https://pypi.tuna.tsinghua.edu.cn/simple
    extra-index-url = https://mirrors.aliyun.com/pypi/simple/
    ```

  :::

- Check your local Starwhale Runtime:

  ```bash
  swcli runtime list
  swcli runtime info pytorch
  ```

## Building a Model

Model example codes are in the `example/mnist` directory.

- Download the pre-trained model file:

  ```bash
  cd example/mnist
  make download-model
  # For users in the mainland of China, please add `CN=1` environment for make command:
  # CN=1 make download-model
  cd -
  ```

- Build a Starwhale model:

  ```bash
  swcli model build example/mnist --runtime pytorch
  ```

- Check your local Starwhale models:

  ```bash
  swcli model list
  swcli model info mnist
  ```

## Building a Dataset

Dataset example codes are in the `example/mnist` directory.

- Download the MNIST raw data:

  ```bash
  cd example/mnist
  make download-data
  # For users in the mainland of China, please add `CN=1` environment for make command:
  # CN=1 make download-data
  cd -
  ```

- Build a Starwhale dataset:

  ```bash
  swcli dataset build --yaml example/mnist/dataset.yaml
  ```

- Check your local Starwhale dataset:

  ```bash
  swcli dataset list
  swcli dataset info mnist
  swcli dataset head mnist
  ```

## Running an Evaluation Job

- Create an evaluation job:

 ```bash
 swcli -vvv model run --uri mnist --dataset mnist --runtime pytorch
 ```

- Check the evaluation result

 ```bash
 swcli job list
 swcli job info $(swcli job list | grep mnist | grep success | awk '{print $1}' | head -n 1)
 ```

**Congratulations! You have completed the Starwhale Standalone Getting Started Guide.**
