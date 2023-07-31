---
title: dataset.yaml Guide
---

:::tip
`dataset.yaml` is optional for the `swcli dataset build` command.
:::

Building `Starwhale Dataset` uses `dataset.yaml`. Omitting `dataset.yaml` allows describing related configurations in `swcli dataset build` command line parameters. `dataset.yaml` can be considered as a file-based representation of the `build` command line configuration.

## YAML Field Descriptions

|Field|Description|Required|Type|Default|
|-|-|-|-|-|  
|name|Name of the Starwhale Dataset|Yes|String||
|handler|Importable address of a class that inherits `starwhale.SWDSBinBuildExecutor`, `starwhale.UserRawBuildExecutor` or `starwhale.BuildExecutor`, or a function that returns a Generator or iterable object. Format is `{module path}:{class name\|function name}`|Yes|String||
|desc|Dataset description|No|String|""|
|version|`dataset.yaml` format version, currently only "1.0" is supported|No|String|1.0|
|attr|Dataset build parameters|No|Dict||
|attr.volume_size|Size of each data file in the swds-bin dataset. Can be a number in bytes, or a number plus unit like 64M, 1GB etc.|No|Int or Str|64MB|
|attr.alignment_size|Data alignment size of each data block in the swds-bin dataset. If set to 4k, and a data block is 7.9K, 0.1K padding will be added to make the block size a multiple of `alignment_size`, improving page size and read efficiency.|No|Integer or String|128|

## Examples

### Simplest Example

```yaml
name: helloworld 
handler: dataset:ExampleProcessExecutor
```

The `helloworld` dataset uses the `ExampleProcessExecutor` class in `dataset.py` of the `dataset.yaml` directory to build data.

### MNIST Dataset Build Example

```yaml
name: mnist
handler: mnist.dataset:DatasetProcessExecutor
desc: MNIST data and label test dataset
attr:
  alignment_size: 128
  volume_size: 4M
```

### Example with `handler` as a generator function

`dataset.yaml` contents:

```yaml
name: helloworld
handler: dataset:iter_item 
```

`dataset.py` contents:

```python
def iter_item():
  for i in range(10):
    yield {"img": f"image-{i}".encode(), "label": i}
```
