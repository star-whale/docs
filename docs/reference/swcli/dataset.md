---
title: swcli dataset
---

## Overview

```bash
swcli [GLOBAL OPTIONS] dataset [OPTIONS] <SUBCOMMAND> [ARGS]...
```

The `dataset` command includes the following subcommands:

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
swcli [GLOBAL OPTIONS] dataset build [OPTIONS]
```

Build Starwhale Dataset. This command only supports to build standalone dataset.

### Options

* Data sources options:

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
|`-if` or `--image` or `--image-folder`| N | String | | Build dataset from image folder, the folder should contain the image files. |
|`-af` or `--audio` or `--audio-folder`| N | String | | Build dataset from audio folder, the folder should contain the audio files. |
|`-vf` or `--video` or `--video-folder`| N | String | | Build dataset from video folder, the folder should contain the video files. |
|`-h` or `--handler` or `--python-handler`| N | String | | Build dataset from python executor handler, the handler format is [module path]:[class or func name]. |
|`-f` or `--yaml` or `--dataset-yaml`| N | dataset.yaml in cwd | | Build dataset from dataset.yaml file. Default uses dataset.yaml in the work directory(cwd). |
|`-jf` or `--json`| N | String | | Build dataset from json or jsonl file, the json or jsonl file option is a json file path or a http downloaded url.The json content structure should be a list[dict] or tuple[dict]. |
|`-hf` or `--huggingface`| N | String | | Build dataset from huggingface dataset, the huggingface option is a huggingface repo name. |
|`-c` or `--csv`| N | String | | Build dataset from csv files. The option is a csv file path, dir path or a http downloaded url.The option can be used multiple times.|

**Data source options are mutually exclusive, only one option is accepted.** If no set, `swcli dataset build` command will use dataset yaml mode to build dataset with the `dataset.yaml` in the cwd.

* Other options:

| Option | Required | Scope |Type | Defaults | Description |
| --- | --- | --- |--- | --- | --- |
| `-pt` or `--patch` | one of `--patch` and `--overwrite`  | Global | Boolean | True | Patch mode, only update the changed rows and columns for the existed dataset. |
| `-ow` or `--overwrite`| one of `--patch` and `--overwrite` | Global | Boolean | False | Overwrite mode, update records and delete extraneous rows from the existed dataset. |
| `-n` or `--name`| N | Global | String | | Dataset name |
| `-p` or `--project` | N | Global | String | Default project | Project URI, the default is the current selected project. The dataset will store in the specified project. |
| `-d` or `--desc` | N | Global | String | | Dataset description |
| `-as` or `--alignment-size` | N | Global | String | 128B | swds-bin format dataset: alignment size |
| `-vs` or `--volume-size` | N | Global | String | 64MB | swds-bin format dataset: volume size |
| `-r` or `--runtime` | N | Global | String | | Runtime URI |
| `-w` or `--workdir` | N | Python Handler Mode | String | cwd |  work dir to search handler. |
| `--auto-label`/`--no-auto-label` | N | Image/Video/Audio Folder Mode | Boolean | True | Whether to auto label by the sub-folder name. |
| `--field-selector` | N | JSON File Mode | String | | The filed from which you would like to extract dataset array items. The filed is split by the dot(.) symbol. |
| `--subset` | N | Huggingface Mode | String | | Huggingface dataset subset name. If the subset name is not specified, the all subsets will be built. |
| `--split` | N | Huggingface Mode | String | | Huggingface dataset split name. If the split name is not specified, the all splits will be built.  |
| `--revision` | N | Huggingface Mode | String | main | Version of the dataset script to load. Defaults to 'main'. The option value accepts tag name, or branch name, or commit hash. |
| `--add-hf-info`/`--no-add-hf-info` | N | Huggingface Mode | Boolean | True | Whether to add huggingface dataset info to the dataset rows, currently support to add subset and split into the dataset rows. Subset uses `_hf_subset` field name, split uses `_hf_split` field name.|
| `--cache`/`--no-cache` | N | Huggingface Mode | Boolean | True | Whether to use huggingface dataset cache(download + local hf dataset). |
| `-t` or `--tag` | N | Global | String | | Dataset tags, the option can be used multiple times. |
| `--encoding` | N | CSV/JSON/JSONL Mode | String | | file encoding. |
| `--dialect` | N | CSV Mode | String | `excel` | The csv file dialect, the default is `excel`. Current supports `excel`, `excel-tab` and `unix` formats. |
| `--delimiter` | N | CSV Mode | String | `,` | A one-character string used to separate fields for the csv file. |
| `--quotechar` | N | CSV Mode | String | `"` | A one-character string used to quote fields containing special characters, such as the delimiter or quotechar, or which contain new-line characters. |
| `--skipinitialspace`/`--no-skipinitialspace` | N | CSV Mode | Bool | False | Whether to skip spaces after delimiter for the csv file. |
| `--strict`/`--no-strict` | N | CSV Mode | Bool | False | When True, raise exception Error if the csv is not well formed.|

### Examples for dataset building

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

#- from json/jsonl file
swcli dataset build --json /path/to/example.json 
swcli dataset build --json http://example.com/example.json 
swcli dataset build --json /path/to/example.json --field-selector a.b.c # extract the json_content["a"]["b"]["c"] field from the json file.  
swcli dataset build --name qald9 --json https://raw.githubusercontent.com/ag-sc/QALD/master/9/data/qald-9-test-multilingual.json --field-selector questions 
swcli dataset build --json /path/to/test01.jsonl --json /path/to/test02.jsonl 
swcli dataset build --json https://modelscope.cn/api/v1/datasets/damo/100PoisonMpts/repo\?Revision\=master\&FilePath\=train.jsonl

#- from huggingface dataset
swcli dataset build --huggingface mnist
swcli dataset build -hf mnist --no-cache
swcli dataset build -hf cais/mmlu --subset anatomy --split auxiliary_train --revision 7456cfb

#- from csv files
swcli dataset build --csv /path/to/example.csv 
swcli dataset build --csv /path/to/example.csv --csv-file /path/to/example2.csv 
swcli dataset build --csv /path/to/csv-dir  
swcli dataset build --csv http://example.com/example.csv 
swcli dataset build --name product-desc-modelscope --csv https://modelscope.cn/api/v1/datasets/lcl193798/product_description_generation/repo\?Revision\=master\&FilePath\=test.csv --encoding=utf-8-sig
```

## swcli dataset copy {#copy}

```bash
swcli [GLOBAL OPTIONS] dataset copy [OPTIONS] <SRC> <DEST>
```

`dataset copy` copies from `SRC` to `DEST`.

`SRC` and `DEST` are both [dataset URIs](../../swcli/uri.md#model-dataset-runtime).

When copying Starwhale Dataset, all custom user-defined labels will be copied by default. You can use the `--ignore-tag` parameter to ignore certain labels. In addition, the `latest` and `^v\d+$` labels are Starwhale built-in labels that are only used within the instance itself and will not be copied to other instances.

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--force` or `-f` | N | Boolean | False | If true, `DEST` will be overwritten if it exists. In addition, if the labels carried during duplication have already been used by other versions, this parameter can be used to forcibly update the labels to this version.|
|`-p` or `--patch`| one of `--patch` and `--overwrite` | Boolean | True | Patch mode, only update the changed rows and columns for the remote dataset. |
|`-o` or `--overwrite`| one of `--patch` and `--overwrite` | Boolean | False |  Overwrite mode, update records and delete extraneous rows from the remote dataset. |
|`-i` or `--ignore-tag`| N |String | | Ignore tags to copy. The option can be used multiple times.|

### Examples for dataset copy

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
swcli [GLOBAL OPTIONS] dataset diff [OPTIONS] <DATASET VERSION> <DATASET VERSION>
```

`dataset diff` compares the difference between two versions of the same dataset.

`DATASET VERSION` is a [dataset URI](../../swcli/uri.md#model-dataset-runtime).

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--show-details` | N | Boolean | False | If true, outputs the detail information. |

## swcli dataset head {#head}

```bash
swcli [全局选项] dataset head [选项] <DATASET VERSION>
```

Print the first n rows of the dataset. `DATASET VERSION` is a [dataset URI](../../swcli/uri.md#model-dataset-runtime).

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `-n` or `--rows` | N | Int | 5 |  Print the first NUM rows of the dataset. |
| `-srd` or `--show-raw-data` | N | Boolean | False | Fetch raw data content from objectstore. |
| `-st` or `--show-types` | N | Boolean | False | show data types. |

### Examples for dataset head

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
swcli [GLOBAL OPTIONS] dataset history [OPTIONS] <DATASET>
```

`dataset history` outputs all history versions of the specified Starwhale Dataset.

`DATASET` is a [dataset URI](../../swcli/uri.md#model-dataset-runtime).

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--fullname` | N | Boolean | False | Show the full version name. Only the first 12 characters are shown if this option is false. |

## swcli dataset info {#info}

```bash
swcli [GLOBAL OPTIONS] dataset info [OPTIONS] <DATASET>
```

`dataset info` outputs detailed information about the specified Starwhale Dataset version.

`DATASET` is a [dataset URI](../../swcli/uri.md#model-dataset-runtime).

## swcli dataset list {#list}

```bash
swcli [GLOBAL OPTIONS] dataset list [OPTIONS]
```

`dataset list` shows all Starwhale Datasets.

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--project` | N | String | | The URI of the project to list. Use the [default project](../../swcli/uri.md#defaultProject) if not specified. |
| `--fullname` | N | Boolean | False | Show the full version name. Only the first 12 characters are shown if this option is false. |
| `--show-removed` or `-sr` | N | Boolean | False | If true, include datasets that are removed but not garbage collected. |
| `--page` | N | Integer | 1 | The starting page number.  Server and cloud instances only. |
| `--size` | N | Integer | 20 | The number of items in one page. Server and cloud instances only. |
| `--filter` or `-fl` | N | String | | Show only Starwhale Datasetes that match specified filters. This option can be used multiple times in one command. |

| Filter | Type | Description | Example |
| --- | --- | --- | --- |
| `name` | Key-Value | The name prefix of datasets | `--filter name=mnist` |
| `owner` | Key-Value | The dataset owner name  | `--filter owner=starwhale` |
| `latest` | Flag | If specified, it shows only the latest version. | `--filter latest` |

## swcli dataset recover {#recover}

```bash
swcli [GLOBAL OPTIONS] dataset recover [OPTIONS] <DATASET>
```

`dataset recover` recovers previously removed Starwhale Datasets or versions.

`DATASET` is a [dataset URI](../../swcli/uri.md#model-dataset-runtime). If the version part of the URI is omitted, all removed versions are recovered.

Garbage-collected Starwhale Datasets or versions can not be recovered, as well as those are removed with the `--force` option.

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--force` or `-f` | N | Boolean | False | If true, overwrite the Starwhale Dataset or version with the same name or version id. |

## swcli dataset remove {#remove}

```bash
swcli [GLOBAL OPTIONS] dataset remove [OPTIONS] <DATASET>
```

`dataset remove` removes the specified Starwhale Dataset or version.

`DATASET` is a [dataset URI](../../swcli/uri.md#model-dataset-runtime). If the version part of the URI is omitted, all versions are removed.

Removed Starwhale Datasets or versions can be recovered by `swcli dataset recover` before garbage collection. Use the `--force` option to persistently remove a Starwhale Dataset or version.

Removed Starwhale Datasets or versions can be listed by `swcli dataset list --show-removed`.

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--force` or `-f` | N | Boolean | False | If true, persistently delete the Starwhale Dataset or version. It can not be recovered. |

## swcli dataset summary {#summary}

```bash
swcli [GLOBAL OPTIONS]  dataset summary <DATASET>
```

Show dataset summary. `DATASET` is a [dataset URI](../../swcli/uri.md#model-dataset-runtime).

## swcli dataset tag {#tag}

```bash
swcli [GLOBAL OPTIONS] dataset tag [OPTIONS] <DATASET> [TAGS]...
```

`dataset tag` attaches a tag to a specified Starwhale Dataset version. At the same time, tag command also supports list and remove tags. The tag can be used in a dataset URI instead of the version id.

`DATASET` is a [dataset URI](../../swcli/uri.md#model-dataset-runtime).

Each dataset version can have any number of tags， but duplicated tag names are not allowed in the same dataset.

**`dataset tag` only works for the Standalone Instance.**

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--remove` or `-r` | N | Boolean | False | remove the tag if true |
| `--quiet` or `-q` | N | Boolean | False | ignore errors, for example, removing tags that do not exist. |
| `--force-add` or `-f`| N | Boolean | False | When adding labels to server/cloud instances, if the label is already used by another dataset version, an error will be prompted. In this case, you can force an update using the `--force-add` parameter. |

### Examples for dataset tag

```bash
#- list tags of the mnist dataset
swcli dataset tag mnist

#- add tags for the mnist dataset
swcli dataset tag mnist t1 t2
swcli dataset tag cloud://cloud.starwhale.cn/project/public:starwhale/dataset/mnist/version/latest t1 --force-ad
swcli dataset tag mnist t1 --quiet

#- remove tags for the mnist dataset
swcli dataset tag mnist -r t1 t2
swcli dataset tag cloud://cloud.starwhale.cn/project/public:starwhale/dataset/mnist --remove t1
```
