---
title: Getting Started with Starwhale Runtime
---

This article demonstrates how to build a Starwhale Runtime of the Pytorch environment and how to use it. This runtime can meet the dependency requirements of the six examples in Starwhale: mnist, speech commands, nmt, cifar10, ag_news, and PennFudan. Links to relevant code: [example/runtime/pytorch](https://github.com/star-whale/starwhale/tree/main/example/runtime/pytorch).

You can learn the following things from this tutorial:

* How to build a Starwhale Runtime.
* How to use a Starwhale Runtime in different scenarios.
* How to release a Starwhale Runtime.

## Prerequisites

* Python 3.7+
* Linux or macOS
* [Starwhale Client](../swcli/index.md) 0.5.6+

Run the following command to clone the example code:

```shell
git clone https://github.com/star-whale/starwhale.git
cd starwhale/example/runtime/pytorch # for users in the mainland of China, use pytorch-cn-mirror instead.
```

## Build Starwhale Runtime

```console
❯ swcli -vvv runtime build --yaml runtime.yaml
```

## Use Starwhale Runtime in the standalone instance

### Use Starwhale Runtime in the shell

```console
# Activate the runtime
swcli runtime activate pytorch
```

`swcli runtime activate` will download all python dependencies of the runtime, which may take a long time.

All dependencies are ready in your python environment when the runtime is activated. It is similar to `source venv/bin/activate` of virtualenv or the `conda activate` command of conda. If you close the shell or switch to another shell, you need to reactivate the runtime.

### Use Starwhale Runtime in swcli

```console
# Use the runtime when building a Starwhale Model
swcli model build . --runtime pytorch
# Use the runtime when building a Starwhale Dataset
swcli dataset build --yaml /path/to/dataset.yaml --runtime pytorch
# Run a model evaluation with the runtime
swcli model run --uri mnist/version/v0 --dataset mnist --runtime pytorch
```

## Copy Starwhale Runtime to another instance

You can copy the runtime to a server/cloud instance, which can then be used in the server/cloud instance or downloaded by other users.

```console
# Copy the runtime to a server instance named 'pre-k8s'
❯ swcli runtime copy pytorch cloud://pre-k8s/project/starwhale
```
