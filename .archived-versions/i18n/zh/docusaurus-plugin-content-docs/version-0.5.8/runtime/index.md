---
title: Starwhale 运行时
---

## 概览

Starwhale 运行时能够针对运行Python程序，提供一种可复现、可分享的运行环境。使用 Starwhale 运行时，可以非常容易的与他人分享，并且能在 Starwhale Server 和 Starwhale Cloud 实例上使用 Starwhale 运行时。

Starwhale 运行时使用 venv, conda 和 docker 等基础技术，如果您当前正在使用这些技术，可以非常容易的将这个环境转化为 Starwhale 运行时。

对于本地环境，Starwhale 运行时支持非常容易的多种环境管理和切换。Starwhale 运行时包含基础镜像和环境依赖两个部分。

## 基础镜像

Starwhale 基础镜像中会安装 Python, CUDA, cuDNN 和其他一些机器学习开发中必要的基础库。Starwhale 运行时提供多种基础镜像供选择，列表如下：

* 体系结构:
  * X86 (amd64)
  * Arm (aarch64)
* 操作系统:
  * Ubuntu 20.04 LTS (ubuntu:20.04)
* Python:
  * 3.7
  * 3.8
  * 3.9
  * 3.10
  * 3.11
* CUDA:
  * CUDA 11.3 + cuDNN 8.4
  * CUDA 11.4 + cuDNN 8.4
  * CUDA 11.5 + cuDNN 8.4
  * CUDA 11.6 + cuDNN 8.4
  * CUDA 11.7

`runtime.yaml` 通过相关设置来决定使用何种基础镜像。

## runtime.yaml 定义 {#yaml}

Starwhale 运行时可以通过 `runtime.yaml` 进行定义，示例如下：

```yaml
# The name of Starwhale Runtime
name: demo
# The mode of Starwhale Runtime: venv or conda. Default is venv.
mode: venv
configs:
  # If you do not use conda, ignore this field.
  conda:
    condarc: # custom condarc config file
      channels:
        - defaults
      show_channel_urls: true
      default_channels:
        - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
        - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
        - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
      custom_channels:
        conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
        pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
        pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
        nvidia: https://mirrors.aliyun.com/anaconda/cloud
      ssl_verify: false
      default_threads: 10
  pip:
    # pip config set global.index-url
    index_url: https://example.org/
    # pip config set global.extra-index-url
    extra_index_url: https://another.net/
    # pip config set install.trusted-host
    trusted_host:
      - example.org
      - another.net
environment:
  # Now it must be ubuntu:20.04
  os: ubuntu:20.04
  # CUDA version. possible values: 11.3, 11.4, 11.5, 11.6, 11.7
  cuda: 11.4
  # Python version. possible values: 3.7, 3.8, 3.9, 3.10, 3.11
  python: 3.8
  # Define your custom base image
  docker:
    image: mycustom.com/docker/image:tag
dependencies:
  # If this item is present, conda env create -f conda.yml will be executed
  - conda.yaml
  # If this item is present, pip install -r requirements.txt will be executed before installing other pip packages
  - requirements.txt
  # Packages to be install with conda. venv mode will ignore the conda field.
  - conda:
    - numpy
    - requests
  # Packages to be installed with pip. The format is the same as requirements.txt
  - pip:
    - pillow
    - numpy
    - deepspeed==0.9.0
    - safetensors==0.3.0
    - transformers @ git+https://github.com/huggingface/transformers.git@3c3108972af74246bc3a0ecf3259fd2eafbacdef
    - peft @ git+https://github.com/huggingface/peft.git@fcff23f005fc7bfb816ad1f55360442c170cd5f5
    - accelerate @ git+https://github.com/huggingface/accelerate.git@eba6eb79dc2ab652cd8b44b37165a4852768a8ac
  # Additional wheels packages to be installed when restoring the runtime
  - wheels:
      - dummy-0.0.0-py3-none-any.whl
  # Additional files to be included in the runtime
  - files:
      - dest: bin/prepare.sh
        name: prepare
        src: scripts/prepare.sh
  # Run some custom commands
  - commands:
      - apt-get install -y libgl1
      - touch /tmp/runtime-command-run.flag
```
