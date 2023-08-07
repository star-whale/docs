---
title: swcli model
---

## Overview

```bash
swcli [GLOBAL OPTIONS] model [OPTIONS] <SUBCOMMAND> [ARGS]...
```

The `model` command includes the following subcommands:

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
swcli [GLOBAL OPTIONS] model build [OPTIONS] <WORKDIR>
```

`model build` will put the whole `WORKDIR` into the model, except files that match patterns defined in [.swignore](../../swcli/swignore.md).

`model build` will import modules specified by `--module` to generate the required configurations to run the model. If your module depends on third-party libraries, we strongly recommend you use the `--runtime` option; otherwise, you need to ensure that the python environment used by `swcli` has these libraries installed.

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--project` or `-p` | N | String | [the default project](../../swcli/uri.md#defaultProject) | the project URI |
| `--model-yaml` or `-f` | N | String | ${workdir}/model.yaml | model yaml path, default use ${workdir}/model.yaml file. model.yaml is optional for `model build`. |
| `--module` or `-m`| N | String | | Python modules to be imported during the build process. Starwhale will export model handlers from these modules to the model package. This option supports set multiple times.|
| `--runtime` or `-r` | N | String | | the URI of the [Starwhale Runtime](../../runtime/index.md) to use when running this command. If this option is used, this command will run in an independent python environment specified by the Starwhale Runtime; otherwise, it will run directly in the swcli's current python environment. |
| `--name` or `-n` | N | String | | model package name |
| `--desc` or `-d` | N | String | | model package description |
| `--package-runtime` 或 `--no-package-runtime` | N | Boolean | True | When using the `--runtime` parameter, by default, the corresponding Starwhale runtime will become the built-in runtime for the Starwhale model. This feature can be disabled with the `--no-package-runtime` parameter. |
| `--add-all` | N | Boolean | False | Add all files in the working directory to the model package(excludes python cache files and virtual environment files when disabled).The `.swignore` file still takes effect. |
| `-t` or `--tag` | N | Global | String | | Model tags, the option can be used multiple times. |

### Examples for model build

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
swcli [GLOBAL OPTIONS] model copy [OPTIONS] <SRC> <DEST>
```

`model copy` copies from `SRC` to `DEST` for Starwhale Model sharing.

`SRC` and `DEST` are both [model URIs](../../swcli/uri.md#model-dataset-runtime).

When copying Starwhale Model, all custom user-defined labels will be copied by default. You can use the `--ignore-tag` parameter to ignore certain labels. In addition, the `latest` and `^v\d+$` labels are Starwhale built-in labels that are only used within the instance itself and will not be copied to other instances.

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--force` or `-f` | N | Boolean | False | If true, `DEST` will be overwritten if it exists. In addition, if the labels carried during duplication have already been used by other versions, this parameter can be used to forcibly update the labels to this version.|
|`-i` or `--ignore-tag`| N |String | | Ignore tags to copy. The option can be used multiple times.|

### Examples for model copy

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
swcli [GLOBAL OPTIONS] model diff [OPTIONS] <MODEL VERSION> <MODEL VERSION>
```

`model diff` compares the difference between two versions of the same model.

`MODEL VERSION` is a [model URI](../../swcli/uri.md#model-dataset-runtime).

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--show-details` | N | Boolean | False | If true, outputs the detail information. |

## swcli model extract {#extract}

```bash
swcli [GLOBAL OPTIONS] model extract [OPTIONS] <MODEL> <TARGET_DIR>
```

The `model extract` command can extract a Starwhale model to a specified directory for further customization.

`MODEL` is a [model URI](../../swcli/uri.md#model-dataset-runtime).

| Option | Required | Type | Default | Description |
|-|-|-|-|-|
| `--force` or `-f` | N | Boolean | False | If this option is used, it will forcibly overwrite existing extracted model files in the target directory.|

### Examples for model extract

```bash
#- extract mnist model package to current directory
swcli model extract mnist/version/xxxx .

#- extract mnist model package to current directory and force to overwrite the files
swcli model extract mnist/version/xxxx . -f
```

## swcli model history {#history}

```bash
swcli [GLOBAL OPTIONS] model history [OPTIONS] <MODEL>
```

`model history` outputs all history versions of the specified Starwhale Model.

`MODEL` is a [model URI](../../swcli/uri.md#model-dataset-runtime).

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--fullname` | N | Boolean | False | Show the full version name. Only the first 12 characters are shown if this option is false. |

## swcli model info {#info}

```bash
swcli [GLOBAL OPTIONS] model info [OPTIONS] <MODEL>
```

`model info` outputs detailed information about the specified Starwhale Model version.

`MODEL` is a [model URI](../../swcli/uri.md#model-dataset-runtime).

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--output-filter` or `-of` | N | Choice of [basic/model_yaml/manifest/files/handlers/all] | basic | Filter the output content. Only standalone instance supports this option. |

### Examples for model info

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
swcli [GLOBAL OPTIONS] model list [OPTIONS]
```

`model list` shows all Starwhale Models.

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--project` | N | String | | The URI of the project to list. Use the [default project](../../swcli/uri.md#defaultProject) if not specified. |
| `--fullname` | N | Boolean | False | Show the full version name. Only the first 12 characters are shown if this option is false. |
| `--show-removed` | N | Boolean | False | If true, include packages that are removed but not garbage collected. |
| `--page` | N | Integer | 1 | The starting page number.  Server and cloud instances only. |
| `--size` | N | Integer | 20 | The number of items in one page. Server and cloud instances only. |
| `--filter` or `-fl` | N | String | | Show only Starwhale Models that match specified filters. This option can be used multiple times in one command. |

| Filter | Type | Description | Example |
| --- | --- | --- | --- |
| `name` | Key-Value | The name prefix of models | `--filter name=mnist` |
| `owner` | Key-Value | The model owner name  | `--filter owner=starwhale` |
| `latest` | Flag | If specified, it shows only the latest version. | `--filter latest` |

## swcli model recover {#recover}

```bash
swcli [GLOBAL OPTIONS] model recover [OPTIONS] <MODEL>
```

`model recover` recovers previously removed Starwhale Models or versions.

`MODEL` is a [model URI](../../swcli/uri.md#model-dataset-runtime). If the version part of the URI is omitted, all removed versions are recovered.

Garbage-collected Starwhale Models or versions can not be recovered, as well as those are removed with the `--force` option.

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--force` or `-f` | N | Boolean | False | If true, overwrite the Starwhale Model or version with the same name or version id. |

## swcli model remove {#remove}

```bash
swcli [GLOBAL OPTIONS] model remove [OPTIONS] <MODEL>
```

`model remove` removes the specified Starwhale Model or version.

`MODEL` is a [model URI](../../swcli/uri.md#model-dataset-runtime). If the version part of the URI is omitted, all versions are removed.

Removed Starwhale Models or versions can be recovered by `swcli model recover` before garbage collection. Use the `--force` option to persistently remove a Starwhale Model or version.

Removed Starwhale Models or versions can be listed by `swcli model list --show-removed`.

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--force` or `-f` | N | Boolean | False | If true, persistently delete the Starwhale Model or version. It can not be recovered. |

## swcli model run {#run}

```bash
swcli [GLOBAL OPTIONS] model run [OPTIONS]
```

`model run` executes a model handler. Model run supports two modes to run: [model URI](../../swcli/uri.md#model-dataset-runtime) and local development. Model URI mode needs a pre-built Starwhale Model Package. Local development model only needs the model src dir.

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--workdir` or `-w` | N | String | | For local development mode, the path of model src dir.|
| `--uri` or `-u` | N | String | | For model URI mode, the string of model uri.|
| `--handler` or `-h` | N | String | | Runnable handler index or name, default is None, will use the first handler |
| `--module` or `-m` | N | String | | The name of the Python module to import. This parameter can be set multiple times. |
| `--runtime` or `-r`| N | String | | the [Starwhale Runtime](../../runtime/index.md) URI to use when running this command. If this option is used, this command will run in an independent python environment specified by the Starwhale Runtime; otherwise, it will run directly in the swcli's current python environment. |
| `--model-yaml` 或 `-f` | N | String | ${MODEL_DIR}/model.yaml | The path to the model.yaml. `model.yaml` is optional for `model run`. |
| `--run-project` or `-p` | N | String | Default project | Project URI, indicates the `model run` results will be stored in the corresponding project. |
| `--dataset` or `-d` | N | String | | Dataset URI, the Starwhale dataset required for model running. This parameter can be set multiple times. |
| `--in-container` | N | Boolean | False | Use docker container to run the model. This option is only available for standalone instances. For server and cloud instances, a docker image is always used. If the runtime is a docker image, this option is always implied. |
| `--forbid-snapshot` or `-fs` | N | Boolean | False | In model URI mode, each model run uses a new snapshot directory. Setting this parameter will directly use the model's workdir as the run directory. In local dev mode, this parameter does not take effect, each run is in the `--workdir` specified directory. |

### Examples for model run

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
```

## swcli model serve {#serve}

Here is the English translation:

```bash
swcli [GLOBAL OPTIONS] model serve [OPTIONS]
```

The `model serve` command can run the model as a web server, and provide a simple web interaction interface.

| Option | Required | Type | Defaults | Description |
|-|-|-|-|-|
| `--workdir` or `-w` | N | String | | In local dev mode, specify the directory of the model code. |
| `--uri` or `-u` | N | String | | In model URI mode, specify the model URI. |
| `--runtime` or `-r` | N | String | | The URI of the [Starwhale runtime](../../userguide/runtime) to use when running this command. If specified, the command will run in the isolated Python environment defined in the Starwhale runtime. Otherwise it will run directly in the current Python environment of `swcli`. |
| `--model-yaml` or `-f` | N | String | ${MODEL_DIR}/model.yaml | The path to the model.yaml. model.yaml is optional for `model serve`. |
| `--module` or `-m` | N | String | | Name of the Python module to import. This parameter can be set multiple times. |
| `--host` | N | String | 127.0.0.1 | The address for the service to listen on. |
| `--port` | N | Integer | 8080 | The port for the service to listen on. |

### Examples for model serve

```bash
swcli model serve -u mnist
swcli model serve --uri mnist/version/latest --runtime pytorch/version/latest

swcli model serve --workdir . --runtime pytorch/version/v0
swcli model serve --workdir . --runtime pytorch/version/v1 --host 0.0.0.0 --port 8080
swcli model serve --workdir . --runtime pytorch --module mnist.evaluator
```

## swcli model tag {#tag}

```bash
swcli [GLOBAL OPTIONS] model tag [OPTIONS] <MODEL> [TAGS]...
```

`model tag` attaches a tag to a specified Starwhale Model version. At the same time, tag command also supports list and remove tags. The tag can be used in a model URI instead of the version id.

`MODEL` is a [model URI](../../swcli/uri.md#model-dataset-runtime).

Each model version can have any number of tags， but duplicated tag names are not allowed in the same model.

**`model tag` only works for the Standalone Instance.**

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--remove` or `-r` | N | Boolean | False | remove the tag if true |
| `--quiet` or `-q` | N | Boolean | False | ignore errors, for example, removing tags that do not exist. |
| `--force-add` or `-f`| N | Boolean | False | When adding labels to server/cloud instances, if the label is already used by another model version, an error will be prompted. In this case, you can force an update using the `--force-add` parameter. |

### Examples for model tag

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
