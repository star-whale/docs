---
title: model.yaml 使用指南
---

:::tip
`model.yaml` 对于 `swcli model build` 构建模型的过程是非必要的。
:::

`Starwhale Model` 构建时，若使用 `swcli model build` 命令，可以通过 `--model-yaml` 参数指定符合特定格式的yaml文件，简化模型构建的参数指定。

即使不指定 `--model-yaml` 参数，`swcli model build` 也会自动寻找 `${workdir}` 目录下的 `model.yaml` 文件，会提取其中的参数。`swcli model build` 命令行中指定参数优先级大于 `model.yaml` 中的等价配置，可以认为 `model.yaml` 是 `build` 命令行的配置文件化表述。

当使用 Python SDK 方式构建 Starwhale 模型时，`model.yaml` 文件不生效。

## YAML 字段描述

|字段|描述|是否必要|类型|默认值|
|---|---|-------|---|-----|
|name|Starwhale Model 的名字，等价于 `--name` 参数。|否|String||
|run.modules|模型构建时搜索的Python Moduels，可以指定多个模型运行的入口点，格式为 Python 可 Imported 路径。等价于 `--module` 参数。|是|List[String]||
|run.handler|run.modules的曾用写法，只能指定一个模型运行的入口点，已废弃|否|String||
|version|dataset.yaml格式版本，目前仅支持填写 1.0|否|String|1.0|
|desc|数据集描述信息，等价于 `--desc` 参数。|否|String||

## 使用示例

```yaml
name: helloworld
run:
  modules:
    - src.evaluator
desc: "example yaml"
```

名称为 helloworld 的 Starwhale 模型，搜索 `swcli model build {WORKDIR}` 命令中 `${WORKDIR}` 目录相对的 src/evaluator.py 文件中被 `@evaluation.predict`, `@evaluation.evaluate` 或 `@handler` 修饰的函数, 或继承自 `PipelineHandler` 的类，这些函数或类会被加入 Starwhale 模型可运行的入口点列表中，在 `swcli model run` 或 Web UI 运行时，选择对应的入口点(handler)运行模型。

`model.yaml` 是非必要的，yaml 中定义参数可以在 `swcli` 命令行参数中指定。

```bash
swcli model build . --model-yaml model.yaml
```

等价于：

```bash
swcli model build . --name helloworld --module src.evaluator --desc "example yaml"
```
