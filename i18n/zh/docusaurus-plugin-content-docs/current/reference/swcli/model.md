---
title: swcli model
---

## 概述

```bash
swcli [全局选项] model [选项] <SUBCOMMAND> [参数]...
```

`model`命令包括以下子命令：

* `build`
* `copy`(`cp`)
* `diff`
* `extract`
* `history`
* `info`
* `list`(`ls`)
* `recover`
* `remove`(`rm`)
* `run`
* `serve`
* `tag`

## swcli model build {#build}

```bash
swcli [全局选项] model build [选项] <WORKDIR>
```

`model build` 会将整个 `WORKDIR` 打包到Starwhale模型中，[.swignore](../../swcli/swignore.md)匹配的文件除外。

`model build` 会导入 `--module` 参数指定的模块，然后生成运行模型所需要的配置。如果您指定的模块依赖第三方库，我们强烈建议您使用 `--runtime` 选项。如果不指定该选项，您需要确保 `swcli` 所使用的 Python 环境已经安装了相关的依赖库。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--project`或`-p` | N | String | [默认项目](../../swcli/uri.md#defaultProject) | 项目URI |
| `--model-yaml` 或 `-f` | N | String | ${workdir}/model.yaml | `model.yaml` 文件路径，默认会尝试使用 ${workdir}/model.yaml 文件。model.yaml 对于模型构建并非必需的。|
| `--module` 或 `-m` | N | String | | 构建时导入的模块。Starwhale 会将这些模块中包含的 handler 导出到模型包。该参数可以指定多次，用来导入多个 Python 模块。|
| `--runtime` | N | String | | 运行此命令时使用的 [Starwhale Runtime](../../userguide/runtime)的URI。如果指定此选项，该命令将在 Starwhale 运行时指定的独立 Python 环境中运行。否则它将直接在 `swcli` 当前的 Python 环境中运行。 |
| `--name` 或 `-n` | N | String | | 模型包的名字 |
| `--desc` 或 `-d` | N | String | | 模型包的描述 |
| `--package-runtime` 或 `--no-package-runtime` | N | Boolean | True | 当使用 `--runtime` 参数时，默认情况下，会将对应的 Starwhale 运行时变成 Starwhale 模型的内置运行时。可以通过 `--no-package-runtime` 参数禁用该特性。|
| `--add-all` | N | Boolean | False | Starwhale 模型打包的时候会自动忽略一些类似 pyc/venv/conda 构建目录等，可以通过该参数将这些文件也进行打包。即使该参数使用，也不影响 `.swignore` 文件的预期作用。|
| `-t` 或 `--tag` | N | 全局 | String | | 用户自定义标签，可以指定多次。|

### Starwhale 模型构建的例子

```bash
# build by the model.yaml in current directory and model package will package all the files from the current directory.
swcli model build .
# search model run decorators from mnist.evaluate, mnist.train and mnist.predict modules, then package all the files from the current directory to model package.
swcli model build . --module mnist.evaluate --module mnist.train --module mnist.predict
# build model package in the Starwhale Runtime environment.
swcli model build . --module mnist.evaluate --runtime pytorch/version/v1
# forbid to package Starwhale Runtime into the model.
swcli model build . --module mnist.evaluate --runtime pytorch/version/v1 --no-package-runtime
# build model package with tags.
swcli model build . --tag tag1 --tag tag2
```

## swcli model copy {#copy}

```bash
swcli [全局选项] model copy [选项] <SRC> <DEST>
```

`model copy` 将模型从 `SRC` 复制到 `DEST`，用来实现不同实例的模型分享。这里 `SRC` 和 `DEST` 都是[模型URI](../../swcli/uri.md#model-dataset-runtime)。

Starwhale 模型复制时，默认会带上用户自定义的所有标签，可以使用 `--ignore-tag` 参数，忽略某些标签。另外，`latest` 和 `^v\d+$` 标签是 Starwhale 系统内建标签，只在当前实例中使用，不会拷贝到其他实例中。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
|`--force`或`-f`| N | Boolean | False | 如果为true，`DEST`已经存在时会被强制覆盖。否则此命令会显示一条错误消息。另外，如果复制时携带的标签已经被其他版本使用，通过该参数可以强制更新标签到此版本上。|
|`-i`或`--ignore-tag`| N |String | | 可以指定多次，忽略多个用户自定义标签。|

### Starwhale 模型复制的例子

```bash
#- copy cloud instance(pre-k8s) mnist project's mnist-cloud model to local project(myproject) with a new model name 'mnist-local'
swcli model cp cloud://pre-k8s/project/mnist/mnist-cloud/version/ge3tkylgha2tenrtmftdgyjzni3dayq local/project/myproject/mnist-local

#- copy cloud instance(pre-k8s) mnist project's mnist-cloud model to local default project(self) with the cloud instance model name 'mnist-cloud'
swcli model cp cloud://pre-k8s/project/model/mnist/mnist-cloud/version/ge3tkylgha2tenrtmftdgyjzni3dayq .

#- copy cloud instance(pre-k8s) mnist project's mnist-cloud model to local project(myproject) with the cloud instance model name 'mnist-cloud'
swcli model cp cloud://pre-k8s/project/mnist/mnist-cloud/version/ge3tkylgha2tenrtmftdgyjzni3dayq . -dlp myproject

#- copy cloud instance(pre-k8s) mnist project's mnist-cloud model to local default project(self) with a model name 'mnist-local'
swcli model cp cloud://pre-k8s/project/model/mnist/mnist-cloud/version/ge3tkylgha2tenrtmftdgyjzni3dayq mnist-local

#- copy cloud instance(pre-k8s) mnist project's mnist-cloud model to local project(myproject) with a model name 'mnist-local'
swcli model cp cloud://pre-k8s/project/mnist/mnist-cloud/version/ge3tkylgha2tenrtmftdgyjzni3dayq mnist-local -dlp myproject

#- copy standalone instance(local) default project(self)'s mnist-local model to cloud instance(pre-k8s) mnist project with a new model name 'mnist-cloud'
swcli model cp mnist-local/version/latest cloud://pre-k8s/project/mnist/mnist-cloud

#- copy standalone instance(local) default project(self)'s mnist-local model to cloud instance(pre-k8s) mnist project with standalone instance model name 'mnist-local'
swcli model cp mnist-local/version/latest cloud://pre-k8s/project/mnist

#- copy standalone instance(local) default project(self)'s mnist-local model to cloud instance(pre-k8s) mnist project without 'cloud://' prefix
swcli model cp mnist-local/version/latest pre-k8s/project/mnist

#- copy standalone instance(local) project(myproject)'s mnist-local model to cloud instance(pre-k8s) mnist project with standalone instance model name 'mnist-local'
swcli model cp local/project/myproject/model/mnist-local/version/latest cloud://pre-k8s/project/mnist

#- copy without some tags
swcli model cp mnist cloud://cloud.starwhale.cn/project/starwhale:public --ignore-tag t1
```

## swcli model diff {#diff}

```bash
swcli [全局选项] model diff [选项] <MODEL VERSION> <MODEL VERSION>
```

`model diff` 比较同一模型的两个版本之间的差异。

`MODEL VERSION` 是一个[模型URI](../../swcli/uri.md#model-dataset-runtime)。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--show-details` | N | Boolean | False | 使用该选项输出详细的差异信息。|

## swcli model extract {#extract}

```bash
swcli [全局选项] model extract [选项] <MODEL> <TARGET_DIR>
```

`model extract` 能够对将Starwhale 模型解压到指定目录中，方便进行后续改造。

`MODEL` 是一个[模型URI](../../swcli/uri.md#model-dataset-runtime)。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--force`或`-f` | N | Boolean | False | 如果使用了该选项，会强制覆盖目标目录已经存在的模型解压文件。|

### Starwhale 模型解压的例子

```bash
#- extract mnist model package to current directory
swcli model extract mnist/version/xxxx .

#- extract mnist model package to current directory and force to overwrite the files
swcli model extract mnist/version/xxxx . -f
```

## swcli model history {#history}

```bash
swcli [全局选项] model history [选项] <MODEL>
```

`model history`输出指定Starwhale模型的所有历史版本。

`MODEL`是一个[模型URI](../../swcli/uri.md#model-dataset-runtime)。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--fullname` | N | Boolean | False | 显示完整的版本名称。如果没有使用该选项，则仅显示前 12 个字符。|

## swcli model info {#info}

```bash
swcli [全局选项] model info [选项] <MODEL>
```

`model info`输出指定Starwhale模型版本的详细信息。

`MODEL`是一个[模型URI](../../swcli/uri.md#model-dataset-runtime)。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--output-filter` 或 `-of` | N | Choice of [basic/model_yaml/manifest/files/handlers/all] | basic | 设置输出的过滤规则，比如只显示Model的model.yaml。目前该参数仅对Standalone Instance的Model生效。|

### Starwhale 模型信息查看的例子

```bash
swcli model info mnist # show basic info from the latest version of model
swcli model info mnist/version/v0 # show basic info from the v0 version of model
swcli model info mnist/version/latest --output-filter=all # show all info
swcli model info mnist -of basic # show basic info
swcli model info mnist -of model_yaml  # show model.yaml
swcli model info mnist -of handlers # show model runnable handlers info
swcli model info mnist -of files # show model package files tree
swcli -o json model info mnist -of all # show all info in json format
```

## swcli model list {#list}

```bash
swcli [全局选项] model list [选项]
```

`model list`显示所有的Starwhale模型。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--project` | N | String | | 要查看的项目的URI。如果未指定此选项，则使用[默认项目](../../swcli/uri.md#defaultProject)替代。 |
| `--fullname` | N | Boolean | False | 显示完整的版本名称。如果没有使用该选项，则仅显示前 12 个字符。 |
| `--show-removed` | N | Boolean | False | 如果使用了该选项，则结果中会包含已删除但未被垃圾回收的模型。 |
| `--page` | N | Integer | 1 | 起始页码。仅限Server和Cloud实例。 |
| `--size` | N | Integer | 20 | 一页中的模型数。仅限Server和Cloud实例。 |
| `--filter`或`-fl` | N | String | | 仅显示符合条件的模型。该选项可以在一个命令中被多次重复使用。 |

| 过滤器 | 类型 | 说明 | 范例 |
| --- | --- | --- | --- |
| `name` | Key-Value | 模型名称前缀 | `--filter name=mnist` |
| `owner` | Key-Value | 模型所有者名字 | `--filter owner=starwhale` |
| `latest` | Flag | 如果指定了该选项，结果中仅显示最新版本。 | `--filter latest` |

## swcli model recover {#recover}

```bash
swcli [全局选项] model recover [选项] <MODEL>
```

`model recover` 恢复以前删除的 Starwhale 模型或版本。

`MODEL`是一个[模型URI](../../swcli/uri.md#model-dataset-runtime)。如果 URI 不包含版本，则会恢复所有删除的版本。

已经被垃圾回收或者使用 `--force` 选项删除的 Starwhale 模型或版本无法使用本命令恢复。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--force`或`-f` | N | Boolean | False | 如果使用了该选项，当前同名的 Starwhale 模型或版本会被强制覆盖。|

## swcli model remove {#remove}

```bash
swcli [全局选项] model remove [选项] <MODEL>
```

`model remove` 删除指定的 Starwhale 模型或某个版本。

`MODEL` 是一个[模型URI](../../swcli/uri.md#model-dataset-runtime)。如果URI不包含版本，则删除指定模型的所有版本。

被删除的 Starwhale 模型或版本可以在垃圾回收之前通过 `swcli model recover` 恢复。要永久删除某个Starwhale模型或版本，您可以使用 `--force` 选项。

被删除的 Starwhale 模型或版本可以通过 `swcli model list --show-removed` 列出。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--force`或`-f` | N | Boolean | False | 使用此选项永久删除某个Starwhale模型或版本。删除后不可恢复。|

## swcli model run {#run}

```bash
swcli [全局选项] model run [选项]
```

`model run` 运行一个模型的 Handler。该命令提供两种模式： [model URI](../../swcli/uri.md#model-dataset-runtime)模式和本地开发模式。
model URI模式需要一个预先构建好的模型包，本地开发模式仅需要 model 代码目录即可。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--workdir` 或 `-w` | N | String | | 在本地开发模式中使用，指定 model 代码目录地址。|
| `--uri` 或 `-u` | N | String | | 在model URI模式中使用，指定 model URI。|
| `--handler` 或 `-h` | N | String | | 运行的Handler索引或名字，默认运行第一个Handler。格式为序号或Handler的名字。|
| `--module` 或 `-m` | N | String | | Python Module 的名字，是一个可以被 import 的 Python Module 路径。该参数可以被设置多次。|
| `--runtime` 或 `-r` | N | String | | 运行此命令时使用的[Starwhale Runtime](../../userguide/runtime)的 URI。如果指定此选项，该命令将在 Starwhale 运行时指定的独立 Python 环境中运行。否则它将直接在 `swcli` 当前的 Python 环境中运行。|
| `--model-yaml` 或 `-f` | N | String | ${MODEL_DIR}/model.yaml | model.yaml 的路径。model.yaml 对于 `model run` 是非必须的。|
| `--run-project` 或 `-p` | N | String | 默认的 Project | Project URI，表示 `model run` 的结果存储到对应的项目中。|
| `--dataset` 或 `-d` | N | String | | Dataset URI，模型运行所需要的 Starwhale 数据集。该参数可以被设置多次。|
| `--in-container` | N | Boolean | False | 使用docker镜像来运行模型。此选项仅适用于 Standalone 实例。Server 和 Cloud 实例始终使用 docker 镜像。如果指定的 runtime 是基于 docker 镜像构建的，此选项总是为真。|
| `--forbid-snapshot` 或 `-fs` | N | Boolean | False | 当在model URI模式下，每次模型运行，都会使用一个全新的快照目录，设置该参数后直接使用模型的 workdir 目录作为运行目录。本地开发模式下，此参数不生效，每次运行都是在 `--workdir` 指定的目录中。|
| `-- --user-arbitrary-args` | N | String | | 给[你在handlers中预设的参数](https://github.com/star-whale/starwhale/pull/2614) 赋值. |

### Starwhale 模型运行的例子

```bash
# --> run by model uri
# run the first handler from model uri
swcli model run -u mnist/version/latest
# run index id(1) handler from model uri
swcli model run --uri mnist/version/latest --handler 1
# run index fullname(mnist.evaluator:MNISTInference.cmp) handler from model uri
swcli model run --uri mnist/version/latest --handler mnist.evaluator:MNISTInference.cmp

# --> run by the working directory, which does not build model package yet. Make local debug happy.
# run the first handler from the working directory, use the model.yaml in the working directory
swcli model run -w .
# run index id(1) handler from the working directory, search mnist.evaluator module and model.yaml handlers(if existed) to get runnable handlers
swcli model run --workdir . --module mnist.evaluator --handler 1
# run index fullname(mnist.evaluator:MNISTInference.cmp) handler from the working directory, search mnist.evaluator module to get runnable handlers
swcli model run --workdir . --module mnist.evaluator --handler mnist.evaluator:MNISTInference.cmp
# run the f handler in th.py from the working directory with the args defined in th:f
# @handler()
# def f(
#     x=ListInput(IntInput()),
#     y=2,
#     mi=MyInput(),
#     ds=DatasetInput(required=True),
#     ctx=ContextInput(),
# )
swcli model run -w . -m th --handler th:f -- -x 2 -x=1 --mi=blab-la --ds mnist
```

## swcli model serve {#serve}

```bash
swcli [全局选项] model serve [选项]
```

`model serve` 命令可以以Web Server方式运行模型，并提供简易的 Web 交互界面。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--workdir` 或 `-w` | N | String | | 在本地开发模式中使用，指定 model 代码目录地址。|
| `--uri` 或 `-u` | N | String | | 在 model URI模式中使用，指定 model URI。|
| `--runtime` 或 `-r` | N | String | | 运行此命令时使用的[Starwhale Runtime](../../userguide/runtime)的 URI。如果指定此选项，该命令将在 Starwhale 运行时指定的独立 Python 环境中运行。否则它将直接在 `swcli` 当前的 Python 环境中运行。|
| `--model-yaml` 或 `-f` | N | String | ${MODEL_DIR}/model.yaml | model.yaml 的路径。model.yaml 对于 `model serve` 是非必须的。|
| `--module` 或 `-m` | N | String | | Python Module 的名字，是一个可以被 import 的 Python Module 路径。该参数可以被设置多次。|
| `--host` | N | String | 127.0.0.1 | 服务监听的地址 |
| `--port` | N | Integer | 8080 | 服务监听的端口 |

### Starwhale 模型 Serving 的例子

```bash
swcli model serve -u mnist
swcli model serve --uri mnist/version/latest --runtime pytorch/version/latest

swcli model serve --workdir . --runtime pytorch/version/v0
swcli model serve --workdir . --runtime pytorch/version/v1 --host 0.0.0.0 --port 8080
swcli model serve --workdir . --runtime pytorch --module mnist.evaluator
```

## swcli model tag {#tag}

```bash
swcli [全局选项] model tag [选项] <MODEL> [TAGS]...
```

`model tag`将标签附加到指定的Starwhale模型版本，同时支持删除和列出所有标签的功能。可以在模型URI中使用标签替代版本ID。

`MODEL`是一个[模型URI](../../swcli/uri.md#model-dataset-runtime)。

每个模型版本可以包含任意数量的标签，但同一模型中不允许有重复的标签名称。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--remove`或`-r` | N | Boolean | False | 使用该选项删除标签 |
| `--quiet`或`-q` | N | Boolean | False | 使用该选项以忽略错误，例如删除不存在的标签。 |
| `--force-add`或`-f`| N | Boolean | False | 当向 server/cloud 实例中添加标签时，若遇到其他版本的模型已经使用该标签会提示报错，强制更新时可以使用 `--force-add` 参数。|

### Starwhale 模型标签的例子

```bash
#- list tags of the mnist model
swcli model tag mnist

#- add tags for the mnist model
swcli model tag mnist -t t1 -t t2
swcli model tag cloud://cloud.starwhale.cn/project/public:starwhale/model/mnist/version/latest -t t1 --force-add
swcli model tag mnist -t t1 --quiet

#- remove tags for the mnist model
swcli model tag mnist -r -t t1 -t t2
swcli model tag cloud://cloud.starwhale.cn/project/public:starwhale/model/mnist --remove -t t1
```
