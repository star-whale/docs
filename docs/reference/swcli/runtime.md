---
title: swcli runtime
---

## Overview

```bash
swcli [GLOBAL OPTIONS] runtime [OPTIONS] <SUBCOMMAND> [ARGS]...
```

The `runtime` command includes the following subcommands:

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
swcli [GLOBAL OPTIONS] runtime activate [OPTIONS] <RUNTIME>
```

Like `source venv/bin/activate` or `conda activate xxx`, `runtime activate` setups a new python environment according to the settings of the specified runtime. When the current shell is closed or switched to another one, you need to reactivate the runtime.`RUNTIME` is a [Runtime URI](../../swcli/uri.md#model-dataset-runtime).

If you want to quit the activated runtime environment, please run `venv deactivate` in the venv environment or `conda deactivate` in the conda environment.

The `runtime activate` command will build a Python isolated environment and download relevant Python packages according to the definition of the Starwhale runtime when activating the environment for the first time. This process may spend a lot of time.

## swcli runtime build {#build}

```bash
swcli [GLOBAL OPTIONS] runtime build [OPTIONS]
```

The `runtime build` command can build a shareable and reproducible runtime environment suitable for ML/DL from various environments or `runtime.yaml` file.

### Parameters

* Parameters related to runtime building methods:

| Option | Required | Type | Defaults | Description |
|-|-|-|-|-|
|`-c` or `--conda`| N | String | | Find the corresponding conda environment by conda env name, export Python dependencies to generate Starwhale runtime.|
|`-cp` or `--conda-prefix`| N | String | | Find the corresponding conda environment by conda env prefix path, export Python dependencies to generate Starwhale runtime.|
|`-v` or `--venv`| N | String | | Find the corresponding venv environment by venv directory address, export Python dependencies to generate Starwhale runtime.|
|`-s` or `--shell`| N | String | | Export Python dependencies according to current shell environment to generate Starwhale runtime.|
|`-y` or `--yaml`| N | `runtime.yaml` in `cwd` directory | | Build Starwhale runtime according to user-defined `runtime.yaml`.|
|`-d` or `--docker`| N | String | | Use the docker image as Starwhale runtime.|

**The parameters for runtime building methods are mutually exclusive, only one method can be specified**. If not specified, it will use `--yaml` method to read `runtime.yaml` in `cwd` directory to build Starwhale runtime.

* Other parameters:

| Option | Required | Scope | Type | Defaults | Description |
|-|-|-|-|-|-|
| `--project` or `-p` | N | Global | String | [Default project](../../swcli/uri.md#defaultProject) | Project URI |
| `-del` or `--disable-env-lock` | N | `runtime.yaml` mode | Boolean | False | Whether to install dependencies in runtime.yaml and lock the version information of related dependencies. The dependencies will be locked by default.|
| `-nc` or `--no-cache` | N | `runtime.yaml` mode | Boolean | False | Whether to delete the isolated environment and install related dependencies from scratch. By default dependencies will be installed in the existing isolated environment.|
| `--cuda` | N | conda/venv/shell mode | Choice[11.3/11.4/11.5/11.6/11.7/] | | CUDA version, CUDA will not be used by default.|
| `--cudnn` | N | conda/venv/shell mode | Choice[8/] | | cuDNN version, cuDNN will not be used by default.|
| `--arch` | N | conda/venv/shell mode | Choice[amd64/arm64/noarch] | noarch | Architecture |
| `-epo` or `--emit-pip-options` | N | Global | Boolean | False | Whether to export `~/.pip/pip.conf`, exported by default.|
| `-ecc` or `--emit-condarc` | N | Global | Boolean | False | Whether to export `~/.condarc`, exported by default.|

### Examples for Starwhale Runtime building

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
swcli [GLOBAL OPTIONS] runtime copy [OPTIONS] <SRC> <DEST>
```

`runtime copy` copies from `SRC` to `DEST`. `SRC` and `DEST` are both [Runtime URIs](../../swcli/uri.md#model-dataset-runtime).

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
|`--force` or `-f`| N | Boolean | False | If true, `DEST` will be overwritten if it exists; otherwise, this command displays an error message. |

### Examples for Starwhale Runtime copy

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
swcli [GLOBAL OPTIONS] runtime dockerize [OPTIONS] <RUNTIME>
```

`runtime dockerize` generates a docker image based on the specified runtime. Starwhale uses `docker buildx` to create the image. Docker 19.03 or later is required to run this command.

`RUNTIME` is a [Runtime URI](../../swcli/uri.md#model-dataset-runtime).

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--tag` or `-t` | N | String |  | The tag of the docker image. This option can be repeated multiple times. |
| `--push` | N | Boolean | False | If true, push the image to the docker registry |
| `--platform` | N | String | amd64 | The target platform，can be either amd64 or arm64. This option can be repeated multiple times to create a multi-platform image. |

Here is the English translation:

## swcli runtime extract {#extract}

```bash
swcli [Global Options] runtime extract [Options] <RUNTIME>
```

Starwhale runtimes use the compressed packages to distribute. The `runtime extract` command can be used to extract the runtime package for further customization and modification.

| Option | Required | Type | Default | Description |
|---|---|---|---|---|
| `--force` or `-f` | N | Boolean | False | Whether to delete and re-extract if there is already an extracted Starwhale runtime in the target directory.|
| `--target-dir` | N | String | | Custom extraction directory. If not specified, it will be extracted to the default Starwhale runtime workdir. The command log will show the directory location.|

## swcli runtime history {#history}

```bash
swcli [GLOBAL OPTIONS] runtime history [OPTIONS] <RUNTIME>
```

`runtime history` outputs all history versions of the specified Starwhale Runtime.

`RUNTIME` is a [Runtime URI](../../swcli/uri.md#model-dataset-runtime).

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--fullname` | N | Boolean | False | Show the full version name. Only the first 12 characters are shown if this option is false. |

## swcli runtime info {#info}

```bash
swcli [GLOBAL OPTIONS] runtime info [OPTIONS] <RUNTIME>
```

`runtime info` outputs detailed information about a specified Starwhale Runtime version.

`RUNTIME` is a [Runtime URI](../../swcli/uri.md#model-dataset-runtime).

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--output-filter` or `-of` | N | Choice of [basic/runtime_yaml/manifest/lock/all] | basic | Filter the output content. Only standalone instance supports this option. |

### Examples for Starwhale Runtime info

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
swcli [GLOBAL OPTIONS] runtime list [OPTIONS]
```

`runtime list` shows all Starwhale Runtimes.

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--project` | N | String | | The URI of the project to list. Use the [default project](../../swcli/uri.md#defaultProject) if not specified. |
| `--fullname` | N | Boolean | False | Show the full version name. Only the first 12 characters are shown if this option is false. |
|`--show-removed` or `-sr` | N | Boolean | False | If true, include runtimes that are removed but not garbage collected. |
| `--page` | N | Integer | 1 | The starting page number.  Server and cloud instances only. |
| `--size` | N | Integer | 20 | The number of items in one page. Server and cloud instances only. |
| `--filter` or `-fl` | N | String | | Show only Starwhale Runtimes that match specified filters. This option can be used multiple times in one command. |

| Filter | Type | Description | Example |
| --- | --- | --- | --- |
| `name` | Key-Value | The name prefix of runtimes | `--filter name=pytorch` |
| `owner` | Key-Value | The runtime owner name  | `--filter owner=starwhale` |
| `latest` | Flag | If specified, it shows only the latest version. | `--filter latest` |

## swcli runtime recover {#recover}

```bash
swcli [GLOBAL OPTIONS] runtime recover [OPTIONS] <RUNTIME>
```

`runtime recover` can recover previously removed Starwhale Runtimes or versions.

`RUNTIME` is a [Runtime URI](../../swcli/uri.md#model-dataset-runtime). If the version part of the URI is omitted, all removed versions are recovered.

Garbage-collected Starwhale Runtimes or versions can not be recovered, as well as those are removed with the `--force` option.

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--force` or `-f` | N | Boolean | False | If `true`, overwrite the Starwhale Runtime or version with the same name or version id. |

## swcli runtime remove {#remove}

```bash
swcli [GLOBAL OPTIONS] runtime remove [OPTIONS] <RUNTIME>
```

`runtime remove` removes the specified Starwhale Runtime or version.

`RUNTIME` is a [Runtime URI](../../swcli/uri.md#model-dataset-runtime). If the version part of the URI is omitted, all versions are removed.

Removed Starwhale Runtimes or versions can be recovered by `swcli runtime recover` before garbage collection. Use the `-- force` option to persistently remove a Starwhale Runtime or version.

Removed Starwhale Runtimes or versions can be listed by `swcli runtime list --show-removed`.

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--force` or `-f` | N | Boolean | False | If `true`, persistently delete the Starwhale Runtime or version. It can not be recovered. |

## swcli runtime tag {#tag}

```bash
swcli [GLOBAL OPTIONS] runtime tag [OPTIONS] <RUNTIME> [TAGS]...
```

`runtime tag` attaches a tag to a specified Starwhale Runtime version. The tag can be used in a runtime URI instead of the version id.

`RUNTIME` is a [Runtime URI](../../swcli/uri.md#model-dataset-runtime).

Each runtime version can have any number of tags， but duplicated tag names are not allowed in the same runtime.

**`runtime tag` only works for the Standalone Instance.**

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--remove` or `-r` | N | Boolean | False | Remove the tag if true |
| `--quiet` or `-q` | N | Boolean | False | Ignore errors, for example, removing tags that do not exist. |
