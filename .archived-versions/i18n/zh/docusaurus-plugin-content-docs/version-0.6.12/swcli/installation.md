---
title: 安装指南
---

`swcli` 命令行工具能够对各种实例完成几乎所有的操作，由于是由纯 Python3 编写，可以使用 `pip` 命令完成安装，本文会提供一些安装建议，帮助您获得一个干净的、无依赖冲突的 `swcli` Python 环境。

:::caution 安装建议
非常不建议将 Starwhale 安装在系统的全局 Python 环境中，可能会导致 Python 的依赖冲突问题。使用 venv 或 conda 创建一个隔离的 Python 环境，并在其中安装 Starwhale，是 Python 推荐的做法。
:::

## 快速安装

```bash
python3 -m pip install starwhale
```

## 先决条件

* Python3.7 ~ 3.11
* Linux 或 macOS
* [Conda](https://conda.io/)（可选）

在Ubuntu系统中，可以运行以下命令：

```bash
sudo apt-get install python3 python3-venv python3-pip

#如果您想安装多个python版本
sudo add-apt-repository -y ppa:deadsnakes/ppa
sudo apt-get update
sudo apt-get install -y python3.7 python3.8 python3.9 python3-pip python3-venv python3.8-venv python3.7-venv python3.9-venv
```

`swcli` 可以在 macOS 下工作，包括 arm(M1 Chip) 和 x86(Intel Chip) 两种体系结构。但 macOS 下自带的 Python3 可能会遇到一些 Python 自身的问题，推荐使用 `homebrew` 进行安装：

```bash
brew install python3
```

## 安装 swcli

### 使用venv安装

venv 环境即可以使用 Python3 自带的 venv，也可以使用 virtualenv 工具。

```bash
python3 -m venv ~/.cache/venv/starwhale
source ~/.cache/venv/starwhale/bin/activate
python3 -m pip install starwhale

swcli --version

sudo ln -sf "$(which swcli)" /usr/local/bin/
```

### 使用conda安装

```bash
conda create --name starwhale --yes  python=3.9
conda activate starwhale
python3 -m pip install starwhale

swcli --version

sudo ln -sf "$(which swcli)" /usr/local/bin/
```

👏 现在，您可以在全局环境中使用 `swcli` 了。

### swcli 的特定场景依赖安装

```bash
# 针对Audio处理, 主要包含soundfile库等
python -m pip install starwhale[audio]

# 针对Image处理，主要包含pillow库等
python -m pip install starwhale[pillow]

# 针对swcli model server命令
python -m pip install starwhale[server]

# 针对内建的Online Serving
python -m pip install starwhale[online-serve]

# 安装全部依赖
python -m pip install starwhale[all]
```

## 更新 swcli

```bash
#适用于venv环境
python3 -m pip install --upgrade starwhale

#适用于conda环境
conda run -n starwhale python3 -m pip install --upgrade starwhale
```

## 卸载swcli

```bash
python3 -m pip remove starwhale

rm -rf ~/.config/starwhale
rm -rf ~/.starwhale
```
