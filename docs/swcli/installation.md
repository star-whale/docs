---
title: Installation Guide
---

We can use `swcli` to complete all tasks for Starwhale Instances. `swcli` is written by pure python3, which can be installed easily by the `pip` command.Here are some installation tips that can help you get a cleaner, unambiguous, no dependency conflicts `swcli` python environment.

:::caution Installing Advice
DO NOT install Starwhale in your system's global Python environment. It will cause a python dependency conflict problem.
:::

## Quick install

```bash
python3 -m pip install starwhale
```

## Prerequisites

* Python 3.7 ~ 3.11
* Linux or macOS
* [Conda](https://conda.io/) (optional)

In the Ubuntu system, you can run the following commands:

```bash
sudo apt-get install python3 python3-venv python3-pip

#If you want to install multi python versions
sudo add-apt-repository -y ppa:deadsnakes/ppa
sudo apt-get update
sudo apt-get install -y python3.7 python3.8 python3.9 python3-pip python3-venv python3.8-venv python3.7-venv python3.9-venv
```

swcli works on macOS. If you run into issues with the default system Python3 on macOS, try installing Python3 through the homebrew:

```bash
brew install python3
```

## Install swcli

### Install with venv

```bash
python3 -m venv ~/.cache/venv/starwhale
source ~/.cache/venv/starwhale/bin/activate
python3 -m pip install starwhale

swcli --version

sudo ln -sf "$(which swcli)" /usr/local/bin/
```

### Install with conda

```bash
conda create --name starwhale --yes  python=3.9
conda activate starwhale
python3 -m pip install starwhale

swcli --version

sudo ln -sf "$(which swcli)" /usr/local/bin/
```

👏 Now, you can use `swcli` in the global environment.

### Install for the special scenarios

```bash
# for Audio processing
python -m pip install starwhale[audio]

# for Image processing
python -m pip install starwhale[pillow]

# for swcli model server command
python -m pip install starwhale[server]

# for built-in online serving
python -m pip install starwhale[online-serve]

# install all dependencies
python -m pip install starwhale[all]
```

## Update swcli

```bash
#for venv
python3 -m pip install --upgrade starwhale

#for conda
conda run -n starwhale python3 -m pip install --upgrade starwhale
```

## Uninstall swcli

```bash
python3 -m pip remove starwhale

rm -rf ~/.config/starwhale
rm -rf ~/.starwhale
```
