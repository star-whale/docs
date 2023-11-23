---
title: Getting started with Starwhale Standalone
---

When the [Starwhale Client (swcli)](../swcli/) is installed, you are ready to use Starwhale Standalone.

We also provide a Jupyter Notebook example, you can try it in [Google Colab](https://colab.research.google.com/github/star-whale/starwhale/blob/main/example/notebooks/quickstart-standalone.ipynb) or in your local [vscode/jupyterlab](https://github.com/star-whale/starwhale/blob/main/example/notebooks/quickstart-standalone.ipynb).

## Downloading Examples

Download Starwhale examples by cloning the Starwhale project via:

```bash
GIT_LFS_SKIP_SMUDGE=1 git clone https://github.com/star-whale/starwhale.git --depth 1
cd starwhale
```

To save time in the example downloading, we skip git-lfs and other commits info. We will use ML/DL HelloWorld code MNIST to start your Starwhale journey. The following steps are all performed in the starwhale directory.

![Core Workflow](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/standalone-core-workflow.gif)

## Building Starwhale Runtime

Runtime example codes are in the `example/helloworld` directory.

- Build the Starwhale runtime bundle:

  ```bash
  swcli -vvv runtime build --yaml example/helloworld/runtime.yaml
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
  swcli runtime info helloworld
  ```

## Building a Model

Model example codes are in the `example/helloworld` directory.

- Build a Starwhale model:

  ```bash
  swcli -vvv model build example/helloworld --name helloworld -m evaluation --runtime helloworld
  ```

- Check your local Starwhale models:

  ```bash
  swcli model list
  swcli model info helloworld
  ```

## Building a Dataset

Dataset example codes are in the `example/helloworld` directory.

- Build a Starwhale dataset:

  ```bash
  swcli runtime activate helloworld
  python3 example/helloworld/dataset.py
  deactivate
  ```

- Check your local Starwhale dataset:

  ```bash
  swcli dataset list
  swcli dataset info mnist64
  swcli dataset head mnist64
  ```

## Running an Evaluation Job

- Create an evaluation job:

 ```bash
 swcli -vvv model run --uri helloworld --dataset mnist64 --runtime helloworld
 ```

- Check the evaluation result

 ```bash
 swcli job list
 swcli job info $(swcli job list | grep mnist | grep success | awk '{print $1}' | head -n 1)
 ```

**Congratulations! You have completed the Starwhale Standalone Getting Started Guide.**
