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
