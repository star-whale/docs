---
title: swcli dataset
---

## 概述

```bash
swcli [全局选项] dataset [选项] <SUBCOMMAND> [参数]...
```

`dataset`命令包括以下子命令：

* `build`
* `copy`(`cp`)
* `diff`
* `head`
* `history`
* `info`
* `list`(`ls`)
* `recover`
* `remove`(`rm`)
* `summary`
* `tag`

## swcli dataset build {#build}

```bash
swcli [全局选项] dataset build [选项]
```

`dataset build` 能够以多种数据源为输入，构建一个 Starwhale 数据集。

### 参数说明

* 数据源相关参数：

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
|`-if`或`--image`或 `--image-folder`| N | String | | 如果不为空，则读取指定目录中的图片，进行数据集的构建。 |
|`-af`或`--audio`或 `--audio-folder`| N | String | | 如果不为空，则读取指定目录中的音频，进行数据集的构建。 |
|`-vf`或`--video`或 `--video-folder`| N | String | | 如果不为空，则读取指定目录中的视频，进行数据集的构建。 |
|`-h`或`--handler`或 `--python-handler`| N | String | | 如果不为空，则读取对应的Python Handler，运行该Handler进行数据集构建。 |
|`-f`或`--yaml`或 `--dataset-yaml`| N | cwd目录的dataset.yaml | | 如果不为空，则读取对应dataset yaml，进行数据集的构建。 |
|`-jf`或`--json-file`| N | String | | 如果不为空，则读取对应 json 文件，进行数据集的构建。 |
|`-hf`或 `--huggingface`| N | String | | 如果不为空，则读取对应 Huggingface 仓库，进行数据集的构建。 |

**数据源相关参数是互斥的，只能指定一种方式**，如果都不指定，则会采用 `--dataset-yaml` 方式读取 `cwd` 目录下的 dataset.yaml 文件进行数据集构建。

* 其他参数：

| 选项 | 必填项 | 作用域 |类型 | 默认值 | 说明 |
| --- | --- | --- |--- | --- | --- |
| `-pt` 或 `--patch` | `--patch` 或 `--overwrite` 必选其一 | 全局 | Boolean | True | 使用补丁方式更新数据集，只更新计划变更的行和列，在新生成的版本中仍能读取到未受影响的行和列。|
| `-ow` 或 `--overwrite`| `--patch` 或 `--overwrite` 必选其一 | 全局 | Boolean | False | 使用覆盖方式更新数据集，会将原来的所有行都删除，然后再进行更新，在新生成的版本中读取不到老数据。但请放心，删除的数据依旧可以通过旧版本进行访问。|
| `-n` 或 `--name`| N | 全局 | String | | 数据集名称 |
| `-p` 或 `--project` | N | 全局 | String | 默认Project | 存储数据集的项目 |
| `-d` 或 `--desc` | N | 全局 | String | | 数据集描述信息 |
| `-as` 或 `--alignment-size` | N | 全局 | String | 128B | 数据集 blob 文件中数据对齐的大小 |
| `-vs` 或 `--volume-size` | N | 全局 | String | 64MB | 单个数据集 blob 文件的大小 |
| `-r` 或 `--runtime` | N | 全局 | String | | 构建数据集所使用的Starwhale 运行时，不指定时则使用用当前shell环境的Python。|
| `-w` 或 `--workdir` | N | Python Handler 模式 | String | cwd 目录 | 搜索Python Handler的根目录 |
| `--auto-label`/`--no-auto-label` | N | 图片、视频、音频目录模式 | Boolean | True | 是否根据子目录名称自动对数据打标签。|
| `--field-selector` | N | JSON 文件模式 | String | | 定向提取JSON中的字段进行数据集构建，使用点(.)作为分隔符。|
| `--subset` | N | Huggingface 模式 | String | | HF的 subset 名字，如果HF数据集有subset，则必须要指定该参数。|
| `--split` | N | Huggingface 模式 | String | | HF的 split 名字，如果不指定则包含所有 splits。 |
| `--revision` | N | Huggingface 模式 | String | main | HF的数据集的版本，支持tag, branch 和 commit hash。|
| `--cache`/`--no-cache` | N | Huggingface 模式 | Boolean | True | 是否使用HF的本地缓存 |
| `-t` 或 `--tag` | N | 全局 | String | | 用户自定义标签，可以指定多次。|

### 数据集构建例子

```bash
#- from dataset.yaml
swcli dataset build  # build dataset from dataset.yaml in the current work directory(pwd)
swcli dataset build --yaml /path/to/dataset.yaml  # build dataset from /path/to/dataset.yaml, all the involved files are related to the dataset.yaml file.
swcli dataset build --overwrite --yaml /path/to/dataset.yaml  # build dataset from /path/to/dataset.yaml, and overwrite the existed dataset.
swcli dataset build --tag tag1 --tag tag2

#- from handler
swcli dataset build --handler mnist.dataset:iter_mnist_item # build dataset from mnist.dataset:iter_mnist_item handler, the workdir is the current work directory(pwd).
# build dataset from mnist.dataset:LinkRawDatasetProcessExecutor handler, the workdir is example/mnist
swcli dataset build --handler mnist.dataset:LinkRawDatasetProcessExecutor --workdir example/mnist

#- from image folder
swcli dataset build --image-folder /path/to/image/folder  # build dataset from /path/to/image/folder, search all image type files.

#- from audio folder
swcli dataset build --audio-folder /path/to/audio/folder  # build dataset from /path/to/audio/folder, search all audio type files.

#- from video folder
swcli dataset build --video-folder /path/to/video/folder  # build dataset from /path/to/video/folder, search all video type files.

#- from json file
swcli dataset build --json-file /path/to/example.json
swcli dataset build --json-file http://example.com/example.json
swcli dataset build --json-file /path/to/example.json --field-selector a.b.c # extract the json_content["a"]["b"]["c"] field from the json file.
swcli dataset build --name qald9 --json-file https://raw.githubusercontent.com/ag-sc/QALD/master/9/data/qald-9-test-multilingual.json --field-selector questions

#- from huggingface dataset
swcli dataset build --huggingface mnist
swcli dataset build -hf mnist --no-cache
swcli dataset build -hf cais/mmlu --subset anatomy --split auxiliary_train --revision 7456cfb
```

## swcli dataset copy {#copy}

```bash
swcli [全局选项] dataset copy [选项] <SRC> <DEST>
```

`dataset copy` 将数据集从 `SRC` 复制到 `DEST` 。这里 `SRC` 和 `DEST` 都是[数据集URI](../../swcli/uri.md#model-dataset-runtime)。

Starwhale 数据集复制时，默认会带上用户自定义的所有标签，可以使用 `--ignore-tag` 参数，忽略某些标签。另外，`latest` 和 `^v\d+$` 标签是 Starwhale 系统内建标签，只在当前实例中使用，不会拷贝到其他实例中。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
|`--force`或`-f`| N | Boolean | False | 如果为true，`DEST`已经存在时会被强制覆盖。另外，如果复制时携带的标签已经被其他版本使用，通过该参数可以强制更新标签到此版本上。|
|`-p`或`--patch`| `--patch` 或 `--overwrite` 必选其一 | Boolean | True | 使用补丁方式更新数据集，只更新计划变更的行和列，在新生成的版本中仍能读取到未受影响的行和列。 |
|`-o`或`--overwrite`| `--patch` 或 `--overwrite` 必选其一 | Boolean | False | 使用覆盖方式更新数据集，会将原来的所有行都删除，然后再进行更新，在新生成的版本中读取不到老数据。但请放心，删除的数据依旧可以通过旧版本进行访问。|
|`-i`或`--ignore-tag`| N |String | | 可以指定多次，忽略多个用户自定义标签。|

### 数据集复制的例子

```bash
#- copy cloud instance(pre-k8s) mnist project's mnist-cloud dataset to local project(myproject) with a new dataset name 'mnist-local'
swcli dataset cp cloud://pre-k8s/project/mnist/mnist-cloud/version/ge3tkylgha2tenrtmftdgyjzni3dayq local/project/myproject/mnist-local

#- copy cloud instance(pre-k8s) mnist project's mnist-cloud dataset to local default project(self) with the cloud instance dataset name 'mnist-cloud'
swcli dataset cp --patch cloud://pre-k8s/project/dataset/mnist/mnist-cloud/version/ge3tkylgha2tenrtmftdgyjzni3dayq .

#- copy cloud instance(pre-k8s) mnist project's mnist-cloud dataset to local project(myproject) with the cloud instance dataset name 'mnist-cloud'
swcli dataset cp cloud://pre-k8s/project/mnist/mnist-cloud/version/ge3tkylgha2tenrtmftdgyjzni3dayq . -dlp myproject

#- copy cloud instance(pre-k8s) mnist project's mnist-cloud dataset to local default project(self) with a dataset name 'mnist-local'
swcli dataset cp --overwrite cloud://pre-k8s/project/dataset/mnist/mnist-cloud/version/ge3tkylgha2tenrtmftdgyjzni3dayq mnist-local

#- copy cloud instance(pre-k8s) mnist project's mnist-cloud dataset to local project(myproject) with a dataset name 'mnist-local'
swcli dataset cp cloud://pre-k8s/project/mnist/mnist-cloud/version/ge3tkylgha2tenrtmftdgyjzni3dayq mnist-local -dlp myproject

#- copy standalone instance(local) default project(self)'s mnist-local dataset to cloud instance(pre-k8s) mnist project with a new dataset name 'mnist-cloud'
swcli dataset cp mnist-local/version/latest cloud://pre-k8s/project/mnist/mnist-cloud

#- copy standalone instance(local) default project(self)'s mnist-local dataset to cloud instance(pre-k8s) mnist project with standalone instance dataset name 'mnist-local'
swcli dataset cp mnist-local/version/latest cloud://pre-k8s/project/mnist

#- copy standalone instance(local) default project(self)'s mnist-local dataset to cloud instance(pre-k8s) mnist project without 'cloud://' prefix
swcli dataset cp mnist-local/version/latest pre-k8s/project/mnist

#- copy standalone instance(local) project(myproject)'s mnist-local dataset to cloud instance(pre-k8s) mnist project with standalone instance dataset name 'mnist-local'
swcli dataset cp local/project/myproject/dataset/mnist-local/version/latest cloud://pre-k8s/project/mnist

#- copy without some tags
swcli dataset cp mnist cloud://cloud.starwhale.cn/project/starwhale:public --ignore-tag t1 --force
```

## swcli dataset diff {#diff}

```bash
swcli [全局选项] dataset diff [选项] <DATASET VERSION> <DATASET VERSION>
```

`dataset diff`比较同一数据集的两个版本之间的差异。

`DATASET VERSION`是一个[数据集URI](../../swcli/uri.md#model-dataset-runtime)。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--show-details` | N | Boolean | False | 使用该选项输出详细的差异信息 |

## swcli dataset head {#head}

```bash
swcli [全局选项] dataset head [选项] <DATASET VERSION>
```

打印数据集中的前n行记录。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `-n`或`--rows` | N | Int | 5 | 输出前n行数据集记录 |
| `-srd`或`--show-raw-data` | N | Boolean | False | 抓取blob数据，可能会用时较长。 |
| `-st`或`--show-types` | N | Boolean | False | 展示数据类型 |

### 数据集打印的例子

```bash
#- print the first 5 rows of the mnist dataset
swcli dataset head -n 5 mnist

#- print the first 10 rows of the mnist(v0 version) dataset and show raw data
swcli dataset head -n 10 mnist/v0 --show-raw-data

#- print the data types of the mnist dataset
swcli dataset head mnist --show-types

#- print the remote cloud dataset's first 5 rows
swcli dataset head cloud://cloud-cn/project/test/dataset/mnist -n 5

#- print the first 5 rows in the json format
swcli -o json dataset head -n 5 mnist
```

## swcli dataset history {#history}

```bash
swcli [全局选项] dataset history [选项] <DATASET>
```

`dataset history` 输出指定Starwhale数据集的所有历史版本。

`DATASET` 是一个[数据集URI](../../swcli/uri.md#model-dataset-runtime)。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--fullname` | N | Boolean | False | 显示完整的版本名称。如果没有使用该选项，则仅显示前 12 个字符。 |

## swcli dataset info {#info}

```bash
swcli [全局选项] dataset info [选项] <DATASET>
```

`dataset info` 输出指定Starwhale数据集版本的详细信息。

`DATASET` 是一个[数据集URI](../../swcli/uri.md#model-dataset-runtime)。

## swcli dataset list {#list}

```bash
swcli [全局选项] dataset list [选项]
```

`dataset list` 命令显示所有的 Starwhale 数据集。

| `--project` 或 `-p` | N | String | | 要查看的项目的URI。如果未指定此选项，则使用[默认项目](../../swcli/uri.md#defaultProject)替代。 |
| `--fullname` 或 `-f` | N | Boolean | False | 显示完整的版本名称。如果没有使用该选项，则仅显示前 12 个字符。 |
|`--show-removed`或`-sr` | N | Boolean | False | 如果使用了该选项，则结果中会包含已删除但未被垃圾回收的数据集。 |
| `--page` | N | Integer | 1 | 起始页码，仅限Server和Cloud实例。 |
| `--size` | N | Integer | 20 | 一页中的数据集数量，仅限Server和Cloud实例。 |
| `--filter`或`-fl` | N | String | | 仅显示符合条件的数据集。该选项可以在一个命令中被多次重复使用。 |

| 过滤器 | 类型 | 说明 | 范例 |
| --- | --- | --- | --- |
| `name` | Key-Value | 数据集名称前缀 | `--filter name=mnist` |
| `owner` | Key-Value | 数据集所有者名字 | `--filter owner=starwhale` |
| `latest` | Flag | 如果指定了该选项，结果中仅显示最新版本。 | `--filter latest` |

## swcli dataset recover {#recover}

```bash
swcli [全局选项] dataset recover [选项] <DATASET>
```

`dataset recover` 恢复以前删除的Starwhale数据集或版本。

`DATASET` 是一个[数据集URI](../../swcli/uri.md#model-dataset-runtime)。如果URI不包含版本，则会恢复所有删除的版本。

已经被垃圾回收或者使用 `--force` 选项删除的 Starwhale 数据集或版本无法使用本命令恢复。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--force`或`-f` | N | Boolean | False | 如果使用了该选项，当前同名的Starwhale数据集或版本会被强制覆盖。 |

## swcli dataset remove {#remove}

```bash
swcli [全局选项] dataset remove [选项] <DATASET>
```

`dataset remove` 删除指定的 Starwhale 数据集或某个版本。

`DATASET` 是一个[数据集URI](../../swcli/uri.md#model-dataset-runtime)。如果URI不包含版本，则删除指定数据集的所有版本。软删除的 Starwhale 数据集，可以通过 `swcli dataset recover` 命令进行恢复（未进行垃圾回收）。

被删除的Starwhale数据集或版本可以通过 `swcli dataset list --show-removed` 列出。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--force`或`-f` | N | Boolean | False | 使用此选项永久删除某个Starwhale数据集或版本。删除后不可恢复。 |

## swcli dataset summary {#summary}

```bash
swcli [全局选项] dataset summary <DATASET>
```

显示数据集摘要信息。`DATASET` 是一个[数据集URI](../../swcli/uri.md#model-dataset-runtime)。

## swcli dataset tag {#tag}

```bash
swcli [全局选项] dataset tag [选项] <DATASET> [TAGS]...
```

`dataset tag` 将标签附加到指定的Starwhale数据集版本，同时支持删除和列出所有标签的功能。可以在数据集URI中使用标签替代版本ID。

`DATASET`是一个[数据集URI](../../swcli/uri.md#model-dataset-runtime)。

每个数据集版本可以包含任意数量的标签，但同一数据集中不允许有重复的标签名称。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--remove`或`-r` | N | Boolean | False | 使用该选项删除标签 |
| `--quiet`或`-q` | N | Boolean | False | 使用该选项以忽略错误，例如删除不存在的标签。 |
| `--force-add`或`-f`| N | Boolean | False | 当向 server/cloud 实例中添加标签时，若遇到其他版本的数据集已经使用该标签会提示报错，强制更新时可以使用 `--force-add` 参数。|

### 数据集标签的例子

```bash
#- list tags of the mnist dataset
swcli dataset tag mnist

#- add tags for the mnist dataset
swcli dataset tag mnist -t t1 -t t2
swcli dataset tag cloud://cloud.starwhale.cn/project/public:starwhale/dataset/mnist/version/latest -t t1 --force-add
swcli dataset tag mnist -t t1 --quiet

#- remove tags for the mnist dataset
swcli dataset tag mnist -r -t t1 -t t2
swcli dataset tag cloud://cloud.starwhale.cn/project/public:starwhale/dataset/mnist --remove -t t1
```
