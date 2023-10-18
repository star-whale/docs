---
title: Starwhale Runtime
---

![overview](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/runtime-overview.svg)

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
