---
title: Starwhale Model
---

![overview](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/model-overview.svg)

A Starwhale Model is a standard format for packaging machine learning models that can be used for various purposes, like model fine-tuning, model evaluation, and online serving. A Starwhale Model contains the model file, inference codes, configuration files, and any other files required to run the model.

## Create a Starwhale Model

There are two ways to create a Starwhale Model: by [swcli](../reference/swcli/model.md) or by [Python SDK](../reference/sdk/model.md).

### Create a Starwhale Model by swcli

To create a Starwhale Model by swcli, you need to define a model.yaml, which describes some required information about the model package, and run the following command:

```bash
swcli model build . --model-yaml /path/to/model.yaml
```

For more information about the command and model.yaml, see [the swcli reference](../reference/swcli/model.md#build). `model.yaml` is optional for model building.

### Create a Starwhale Model by Python SDK

```python
from starwhale import model, predict

@predict
def predict_img(data):
   ...

model.build(name="mnist", modules=[predict_img])
```

## Model Management

### Model Management by swcli

| Command | Description |
| ------- | ----------- |
| [`swcli model list`](../reference/swcli/model.md#list) | List all Starwhale Models in a project |
| [`swcli model info`](../reference/swcli/model.md#info) | Show detail information about a Starwhale Model |
| [`swcli model copy`](../reference/swcli/model.md#copy) | Copy a Starwhale Model to another location |
| [`swcli model remove`](../reference/swcli/model.md#remove) | Remove a Starwhale Model |
| [`swcli model recover`](../reference/swcli/model.md#recover) | Recover a previously removed Starwhale Model |

### Model Management by WebUI

## Model History

Starwhale Models are versioned. The general rules about versions are described in [Resource versioning in Starwhale](../concepts/versioning.md).

## Model History Management by swcli

| Command | Description |
| ------- | ----------- |
| [`swcli model history`](../reference/swcli/model.md#list) | List all versions of a Starwhale Model |
| [`swcli model info`](../reference/swcli/model.md#info) | Show detail information about a Starwhale Model version |
| [`swcli model diff`](../reference/swcli/model.md#diff) | Compare two versions of a Starwhale model |
| [`swcli model copy`](../reference/swcli/model.md#copy) | Copy a Starwhale Model version to a new one |
| [`swcli model remove`](../reference/swcli/model.md#remove) | Remove a Starwhale Model version |
| [`swcli model recover`](../reference/swcli/model.md#recover) | Recover a previously removed Starwhale Model version |

## Model Evaluation

### Model Evaluation by swcli

| Command | Description |
| ------- | ----------- |
| [`swcli model run`](../reference/swcli/model.md#eval) | Create an evaluation with a Starwhale Model |

## The Storage Format {#format}

The Starwhale Model is a tarball file that contains the source directory.
