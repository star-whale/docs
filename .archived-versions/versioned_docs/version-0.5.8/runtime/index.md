---
title: Starwhale Runtime
---

## Overview

Starwhale Runtime aims to provide a reproducible and sharable running environment for python programs. You can easily share your working environment with your teammates or outsiders, and vice versa. Furthermore, you can run your programs on Starwhale Server or Starwhale Cloud without bothering with the dependencies.

Starwhale works well with virtualenv, conda, and docker. If you are using one of them, it is straightforward to create a Starwhale Runtime based on your current environment.

Multiple Starwhale Runtimes on your local machine can be switched freely by one command. You can work on different projects without messing up the environment.Starwhale Runtime consists of two parts: the base image and the dependencies.

## The base image

The base is a docker image with Python, CUDA, and cuDNN installed. Starwhale provides various base images for you to choose from; see the following list:

* Computer system architecture:
  * X86 (amd64)
  * Arm (aarch64)
* Operating system:
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

## runtime.yaml {#yaml}

`runtime.yaml` is the core configuration file of Starwhale Runtime.

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
  # Define your base image
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
