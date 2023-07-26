---
title: swcli runtime
---

## 概述

```bash
swcli [全局选项] runtime [选项] <SUBCOMMAND> [参数]...
```

`runtime` 命令包括以下子命令：

* `activate`(`actv`)
* `build`
* `copy`(`cp`)
* `dockerize`
* `extract`
* `history`
* `info`
* `list`(`ls`)
* `recover`
* `remove`(`rm`)
* `tag`

## swcli runtime activate {#activate}

```bash
swcli [全局选项] runtime activate [选项] <RUNTIME>
```

`runtime activate` 根据指定的运行时创建一个全新的 Python 环境，类似 `source venv/bin/activate` 或 `conda activate xxx` 的效果。关闭当前 shell 或切换到其他 shell 后，需要重新激活 Runtime。`URI` 参数为 Runtime URI。

对于已经激活的 Starwhale 运行时，如果想要退出该环境，需要在 venv 环境中执行 `deactivate` 命令或conda环境中执行 `conda deactivate` 命令。

`runtime activate` 命令首次激活环境的时候，会根据 Starwhale 运行时的定义，构建一个 Python 隔离环境，并下载相关的 Python Packages ，可能会花费比较的时间。

## swcli runtime build {#build}

```bash
swcli [全局选项] runtime build [选项]
```

`runtime build` 命令可以从多种环境或 runtime.yaml ，构建一个可以分享、可以复现的适合 ML/DL 领域的运行环境。

### 参数说明

* 运行时构建方式的相关参数：

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
|`-c`或`--conda`| N | String | | 通过 conda env name 寻找对应的 conda 环境，导出 Python 依赖后生成 Starwhale 运行时。|
|`-cp`或`--conda-prefix`| N | String | | 通过 conda env prefix 路径寻找对应的 conda 环境，导出 Python 依赖后生成 Starwhale 运行时。|
|`-v`或`--venv`| N | String | | 通过 venv 目录地址寻找对应的 venv 环境，导出 Python 依赖后生成 Starwhale 运行时。|
|`-s`或`--shell`| N | String | | 根据当前 shell 环境，导出 Python 依赖后生成 Starwhale 运行时。|
|`-y`或`--yaml`| N | `cwd` 目录的 `runtime.yaml` | | 根据用户自定义的 `runtime.yaml` 构建 Starwhale 运行时。|
|`-d`或`--docker`| N | String | | 将 docker image 作为 Starwhale 运行时。|

**运行时构建方式的相关参数是互斥的，只能指定一种方式**，如果不指定，则会采用 `--yaml` 方式读取 `cwd` 目录下的 `runtime.yaml` 文件进行 Starwhale 运行时的构建。

* 其他参数：

| 选项 | 必填项 | 作用域 |类型 | 默认值 | 说明 |
| --- | --- | --- |--- | --- | --- |
| `--project` 或 `-p` | N | 全局 | String | [默认项目](../../swcli/uri.md#defaultProject) | 项目URI |
| `-del` 或 `--disable-env-lock` | N | `runtime.yaml` 模式 | Boolean | False | 是否安装 runtime.yaml 中的依赖，并锁定相关依赖的版本信息。默认会锁定依赖。|
| `-nc` 或 `--no-cache` | N | `runtime.yaml` 模式 | Boolean | False | 是否删除隔离环境，全新安装相关依赖。默认会在之前的隔离环境中安装依赖。|
| `--cuda` | N | conda/venv/shell 模式 | Choice[11.3/11.4/11.5/11.6/11.7/] |  | CUDA 版本，默认不使用 CUDA。 |
| `--cudnn` | N | conda/venv/shell 模式 | Choice[8/] |  | cuDNN 版本，默认不使用 cuDNN。|
| `--arch` | N | conda/venv/shell 模式 | Choice[amd64/arm64/noarch] | noarch | 体系结构 |
| `-epo` 或 `--emit-pip-options` | N | 全局 | Boolean | False | 是否导出 `~/.pip/pip.conf`，默认导出。|
| `-ecc` 或 `--emit-condarc` | N | 全局 | Boolean | False | 是否导出 `~/.condarc`，默认导出。|

### Starwhale 运行时构建的例子

```bash
#- from runtime.yaml:
swcli runtime build  # use the current directory as the workdir and use the default runtime.yaml file
swcli runtime build -y example/pytorch/runtime.yaml # use example/pytorch/runtime.yaml as the runtime.yaml file
swcli runtime build --yaml runtime.yaml # use runtime.yaml at the current directory as the runtime.yaml file

#- from conda name:
swcli runtime build -c pytorch # lock pytorch conda environment and use `pytorch` as the runtime name
swcli runtime build --conda pytorch --name pytorch-runtime # use `pytorch-runtime` as the runtime name
swcli runtime build --conda pytorch --cuda 11.4 # specify the cuda version
swcli runtime build --conda pytorch --arch noarch # specify the system architecture

#- from conda prefix path:
swcli runtime build --conda-prefix /home/starwhale/anaconda3/envs/pytorch # get conda prefix path by `conda info --envs` command

#- from venv prefix path:
swcli runtime build -v /home/starwhale/.virtualenvs/pytorch
swcli runtime build --venv /home/starwhale/.local/share/virtualenvs/pytorch --arch amd64

#- from docker image:
swcli runtime build --docker pytorch/pytorch:1.9.0-cuda11.1-cudnn8-runtime  # use the docker image as the runtime directly

#- from shell:
swcli runtime build -s --cuda 11.4 --cudnn 8 # specify the cuda and cudnn version
swcli runtime build --shell --name pytorch-runtime # lock the current shell environment and use `pytorch-runtime` as the runtime name
```

## swcli runtime copy {#copy}

```bash
swcli [全局选项] runtime copy [选项] <SRC> <DEST>
```

`runtime copy` 将 runtime 从 `SRC` 复制到 `DEST`，可以实现不同实例之间的运行时分享。这里 `SRC` 和 `DEST` 都是[运行时URI](../../swcli/uri.md#model-dataset-runtime)。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
|`--force`或`-f`| N | Boolean | False | 如果为true，`DEST`已经存在时会被强制覆盖。否则此命令会显示一条错误消息。 |

### Starwhale 运行时复制的例子

```bash
#- copy cloud instance(pre-k8s) mnist project's mnist-cloud runtime to local project(myproject) with a new runtime name 'mnist-local'
swcli runtime cp cloud://pre-k8s/project/mnist/mnist-cloud/version/ge3tkylgha2tenrtmftdgyjzni3dayq local/project/myproject/mnist-local

#- copy cloud instance(pre-k8s) mnist project's mnist-cloud runtime to local default project(self) with the cloud instance runtime name 'mnist-cloud'
swcli runtime cp cloud://pre-k8s/project/runtime/mnist/mnist-cloud/version/ge3tkylgha2tenrtmftdgyjzni3dayq .

#- copy cloud instance(pre-k8s) mnist project's mnist-cloud runtime to local project(myproject) with the cloud instance runtime name 'mnist-cloud'
swcli runtime cp cloud://pre-k8s/project/mnist/mnist-cloud/version/ge3tkylgha2tenrtmftdgyjzni3dayq . -dlp myproject

#- copy cloud instance(pre-k8s) mnist project's mnist-cloud runtime to local default project(self) with a runtime name 'mnist-local'
swcli runtime cp cloud://pre-k8s/project/runtime/mnist/mnist-cloud/version/ge3tkylgha2tenrtmftdgyjzni3dayq mnist-local

#- copy cloud instance(pre-k8s) mnist project's mnist-cloud runtime to local project(myproject) with a runtime name 'mnist-local'
swcli runtime cp cloud://pre-k8s/project/mnist/mnist-cloud/version/ge3tkylgha2tenrtmftdgyjzni3dayq mnist-local -dlp myproject

#- copy standalone instance(local) default project(self)'s mnist-local runtime to cloud instance(pre-k8s) mnist project with a new runtime name 'mnist-cloud'
swcli runtime cp mnist-local/version/latest cloud://pre-k8s/project/mnist/mnist-cloud

#- copy standalone instance(local) default project(self)'s mnist-local runtime to cloud instance(pre-k8s) mnist project with standalone instance runtime name 'mnist-local'
swcli runtime cp mnist-local/version/latest cloud://pre-k8s/project/mnist

#- copy standalone instance(local) default project(self)'s mnist-local runtime to cloud instance(pre-k8s) mnist project without 'cloud://' prefix
swcli runtime cp mnist-local/version/latest pre-k8s/project/mnist

#- copy standalone instance(local) project(myproject)'s mnist-local runtime to cloud instance(pre-k8s) mnist project with standalone instance runtime name 'mnist-local'
swcli runtime cp local/project/myproject/runtime/mnist-local/version/latest cloud://pre-k8s/project/mnist
```

## swcli runtime dockerize {#dockerize}

```bash
swcli [全局选项] runtime dockerize [选项] <RUNTIME>
```

`runtime dockerize` 基于指定的 runtime 创建一个 docker 镜像。Starwhale 使用 `docker buildx` 来创建镜像。运行此命令需要预先安装 Docker 19.03 以上的版本。

`RUNTIME`是一个[运行时URI](../../swcli/uri.md#model-dataset-runtime)。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--tag` or `-t` | N | String |  | Docker镜像的tag，该选项可以重复多次。 |
| `--push` | N | Boolean | False | 是否将创建的镜像推送到docker registry。 |
| `--platform` | N | String | amd64 | 镜像的运行平台，可以是amd64或者arm64。该选项可以重复多次用于创建多平台镜像。|
| `--dry-run` | N | Boolean | False | 只生成 Dockerfile 不实际生成和推送镜像。|

## swcli runtime extract {#extract}

```bash
swcli [全局选项] runtime extract [选项] <RUNTIME>
```

Starwhale 运行时以压缩包的方式分发，使用 `runtime extract` 命令可以解压运行时 Package，然后进行后续的自定义修改。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
|`--force`或`-f`| N | Boolean | False | 如果目标目录已经有解压好的 Starwhale 运行时，是否删除后重新解压。|
|`--target-dir`| N | String | | 自定义解压的目录，如果不指定则会放到 Starwhale 默认的运行时 workdir 目录中，命令输出日志中会提示。|

## swcli runtime history {#history}

```bash
swcli [全局选项] runtime history [选项] <RUNTIME>
```

`runtime history`输出指定Starwhale运行时的所有历史版本。

`RUNTIME`是一个[运行时URI](../../swcli/uri.md#model-dataset-runtime)。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--fullname` | N | Boolean | False | 显示完整的版本名称。如果没有使用该选项，则仅显示前 12 个字符。 |

## swcli runtime info {#info}

```bash
swcli [全局选项] runtime info [选项] <RUNTIME>
```

`runtime info`输出指定Starwhale运行时版本的详细信息。

`RUNTIME`是一个[运行时URI](../../swcli/uri.md#model-dataset-runtime)。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--output-filter` 或 `-of` | N | Choice of [basic/runtime_yaml/manifest/lock/all] | basic | 设置输出的过滤规则，比如只显示Runtime的runtime.yaml。目前该参数仅对Standalone Instance的Runtime生效。 |

### Starwhale 运行时查看详情的例子

```bash
swcli runtime info pytorch # show basic info from the latest version of runtime
swcli runtime info pytorch/version/v0  # show basic info
swcli runtime info pytorch/version/v0 --output-filter basic  # show basic info
swcli runtime info pytorch/version/v1 -of runtime_yaml  # show runtime.yaml content
swcli runtime info pytorch/version/v1 -of lock # show auto lock file content
swcli runtime info pytorch/version/v1 -of manifest # show _manifest.yaml content
swcli runtime info pytorch/version/v1 -of all # show all info of the runtime
```

## swcli runtime list {#list}

```bash
swcli [全局选项] runtime list [选项]
```

`runtime list`显示所有的 Starwhale 运行时。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--project` | N | String | | 要查看的项目的URI。如果未指定此选项，则使用[默认项目](../../swcli/uri.md#defaultProject)替代。 |
| `--fullname` | N | Boolean | False | 显示完整的版本名称。如果没有使用该选项，则仅显示前 12 个字符。 |
| `--show-removed` | N | Boolean | False | 如果使用了该选项，则结果中会包含已删除但未被垃圾回收的运行时。 |
| `--page` | N | Integer | 1 | 起始页码。仅限Server和Cloud实例。 |
| `--size` | N | Integer | 20 | 一页中的运行时数量。仅限Server和Cloud实例。 |
| `--filter`或`-fl` | N | String | | 仅显示符合条件的运行时。该选项可以在一个命令中被多次重复使用。 |

| 过滤器 | 类型 | 说明 | 范例 |
| --- | --- | --- | --- |
| `name` | Key-Value | 运行时名称前缀 | `--filter name=pytorch` |
| `owner` | Key-Value | 运行时所有者名字 | `--filter owner=starwhale` |
| `latest` | Flag | 如果指定了该选项，结果中仅显示最新版本。 | `--filter latest` |

## swcli runtime recover {#recover}

```bash
swcli [全局选项] runtime recover [选项] <RUNTIME>
```

`runtime recover` 命令可以恢复以前删除的 Starwhale 运行时。

`RUNTIME`是一个[运行时URI](../../swcli/uri.md#model-dataset-runtime)。如果URI不包含版本，则会恢复所有删除的版本。

已经被垃圾回收或者使用 `--force` 选项删除的 Starwhale 运行时或版本无法使用本命令恢复。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--force`或`-f` | N | Boolean | False | 如果使用了该选项，当前同名的Starwhale运行时或版本会被强制覆盖。 |

## swcli runtime remove {#remove}

```bash
swcli [全局选项] runtime remove [选项] <RUNTIME>
```

`runtime remove` 命令可以删除指定的 Starwhale 运行时或某个版本。

`RUNTIME` 是一个[运行时URI](../../swcli/uri.md#model-dataset-runtime)。如果 URI 不包含版本，则删除所有版本。

被删除的 Starwhale 运行时或版本可以在垃圾回收之前通过 `swcli runtime recover` 命令恢复。要永久删除某个 Starwhale 运行时或版本，您可以使用 `--force` 选项。

被删除的 Starwhale 运行时或版本可以通过 `swcli runtime list --show-removed` 列出。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--force`或`-f` | N | Boolean | False | 使用此选项永久删除某个 Starwhale 运行时或版本。删除后不可恢复。 |

## swcli runtime tag {#tag}

```bash
swcli [全局选项] runtime tag [选项] <RUNTIME> [TAGS]...
```

`runtime tag` 命令将标签附加到指定的 Starwhale 运行时版本。可以在运行时URI中使用标签替代版本 ID。

`RUNTIME` 是一个[运行时URI](../../swcli/uri.md#model-dataset-runtime)。

每个运行时版本可以包含任意数量的标签，但同一运行时中不允许有重复的标签名称。

**`runtime tag`仅适用于 Standalone 实例.**

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--remove`或`-r` | N | Boolean | False | 使用该选项删除标签 |
| `--quiet`或`-q` | N | Boolean | False | 使用该选项以忽略错误，例如删除不存在的标签。 |
