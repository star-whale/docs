---
title: dataset.yaml 使用指南
---

`Starwhale Dataset` 构建的时候使用 `dataset.yaml`，若省略dataset.yaml，则可以在 `swcli dataset build` 命令行参数中描述相关配置。可以认为 `dataset.yaml` 是`build`命令行的配置文件化表述。

## YAML 字段描述

|字段|描述|是否必要|类型|默认值|
|---|---|-------|---|-----|
|name|Starwhale Dataset的名字|是|String||
|handler|继承 `starwhale.SWDSBinBuildExecutor`, `starwhale.UserRawBuildExecutor` 或 `starwhale.BuildExecutor` 类的可import地址，或者为一个函数，该函数返回一个Generator或一个可迭代的对象，格式为 {module 路径}:{类名|函数名} |是|String||
|desc|数据集描述信息|否|String|""|
|version|dataset.yaml格式版本，目前仅支持填写 1.0|否|String|1.0|
|pkg_data|swds中包含的文件或目录，支持wildcard方式描述。默认会包含 `.py/.sh/.yaml` 文件|否|List[String]||
|exclude_pkg_data|swds中排除的文件或目录，支持wildcard方式描述。不在pkg_data中指定或`.py/.sh/.yaml`后缀的文件，都不会拷贝到swds中|否|List[String]||
|attr|数据集构建参数|否|Dict||
|attr.volume_size|swds-bin格式的数据集每个data文件的大小。当写数字时，单位bytes；也可以是数字+单位格式，如64M, 1GB等|否|Int或Str|64MB|
|attr.alignment_size|swds-bin格式的数据集每个数据块的数据alignment大小，如果设置alignment_size为4k，数据块大小为7.9K，则会补齐0.1K的空数据，让数据块为alignment_size的整数倍，提升page size等读取效率|否|Integer或String|4k|
|append|当append设置为True时，表示此次数据集构建会继承 `append_from`版本的数据集内容，实现追加数据集的目的。|否|Boolean|False|
|append_from|与 `append` 参数组合使用，指定继承数据集的版本，注意此处并不是Dataset URI，而是同一个数据集下的其他版本号或tag，默认为latest，即最近一次构建的版本。|否|String|latest|
|project_uri|Project URI|`swcli project select`命令设定的project|String||
|runtime_uri|Runtime URI，若设置，则表示数据集构建的时候会使用该Runtime提供的运行时环境；若不设置，则使用当前shell环境作为运行时|否|String||

当handler为一个函数时，需要该函数返回一个Generator（推荐做法）或一个可迭代的对象（比如一个列表）。

## 使用示例

### 最简示例

```yaml
name: helloworld
handler: dataset:ExampleProcessExecutor
```

helloworld的数据集，使用dataset.yaml目录中dataset.py文件中的 `ExampleProcessExecutor` 类进行数据构建。

### MNIST数据集构建示例

```yaml
name: mnist
handler: mnist.dataset:DatasetProcessExecutor

desc: MNIST data and label test dataset

attr:
  alignment_size: 1k
  volume_size: 4M
```

### handler为generator function的例子

dataset.yaml 内容：

```yaml
name: helloworld
handler: dataset:iter_item
```

dataset.py 内容：

```python
def iter_item():
    for i in range(10):
        yield {"img": f"image-{i}".encode(), "label": i}
```

本例中，handler为一个generator function，Starwhale SDK根据首个yield出来的元素为非`Starwhale.Link`类型，等同于继承 `starwhale.SWDSBinBuildExecutor` 类。
