---
title: The model.yaml Specification
---

:::tip
`model.yaml` is optional for `swcli model build`.
:::

When building a Starwhale Model using the `swcli model build` command, you can specify a yaml file that follows a specific format via the `--model-yaml` parameter to simplify specifying build parameters.

Even without specifying the `--model-yaml` parameter, `swcli model build` will automatically look for a `model.yaml` file under the `${workdir}` directory and extract parameters from it. Parameters specified on the `swcli model build` command line take precedence over equivalent configurations in `model.yaml`, so you can think of `model.yaml` as a file-based representation of the `build` command line.

When building a Starwhale Model using the Python SDK, the `model.yaml` file does not take effect.

## YAML Field Descriptions

|Field|Description|Required|Type|Default|
|---|---|-------|---|-----|
|name|Name of the Starwhale Model, equivalent to `--name` parameter.|No|String||
|run.modules|Python Modules searched during model build, can specify multiple entry points for model execution, format is Python Importable path. Equivalent to `--module` parameter.|Yes|List[String]||
|run.handler|Deprecated alias of run.modules, can only specify one entry point.|No|String||
|version|dataset.yaml format version, currently only supports "1.0"|No|String|1.0|
|desc|Model description, equivalent to `--desc` parameter.|No|String||

## Example

```yaml

name: helloworld

run:
  modules:
    - src.evaluator

desc: "example yaml"

```

A Starwhale model named helloworld, searches for functions decorated with `@evaluation.predict`, `@evaluation.evaluate` or `@handler`, or classes inheriting from `PipelineHandler` in src/evaluator.py under `${WORKDIR}` of the `swcli model build` command. These functions or classes will be added to the list of runnable entry points for the Starwhale model. When running the model via `swcli model run` or Web UI, select the corresponding entry point (handler) to run.

`model.yaml` is optional, parameters defined in yaml can also be specified via `swcli` command line parameters.

```bash

swcli model build . --model-yaml model.yaml

```

Is equivalent to:

```bash

swcli model build . --name helloworld --module src.evaluator --desc "example yaml"

```
