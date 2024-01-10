---
title: runtime.yaml 使用指南
---

`runtime.yaml` 是构建 Starwhale 运行时的描述文件，用户可以细粒度的定义 Starwhale 运行时的各种属性。当使用 `swcli runtime build` 命令中 `yaml` 模式时，需要提供 `runtime.yaml` 文件。

## 使用示例

### 最简示例

```yaml
dependencies:
  - pip:
      - numpy
name: simple-test
```

定义一个以 `venv` 作为Python 包隔离方式，安装numpy依赖的 Starwhale 运行时。

### llama2 示例

```yaml
name: llama2
mode: venv
environment:
  arch: noarch
  os: ubuntu:20.04
  cuda: 11.7
  python: "3.10"
dependencies:
  - pip:
      - torch
      - fairscale
      - fire
      - sentencepiece
      - gradio >= 3.37.0
      # external starwhale dependencies
      - starwhale[serve] >= 0.5.5
```

### 完整字段示例

```yaml
# [required]The name of Starwhale Runtime
name: demo
# [optional]The mode of Starwhale Runtime: venv or conda. Default is venv.
mode: venv
# [optional]The configurations of pip and conda.
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
# [optional] The definition of the environment.
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
# [required] The dependencies of the Starwhale Runtime.
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
