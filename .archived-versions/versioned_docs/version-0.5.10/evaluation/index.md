---
title: Starwhale Model Evaluation
---

## Design Overview

### Starwhale Evaluation Positioning

The goal of `Starwhale Evaluation` is to provide end-to-end management for model evaluation, including creating Jobs, distributing Tasks, viewing model evaluation reports and basic management. `Starwhale Evaluation` is a specific application of `Starwhale Model`, `Starwhale Dataset`, and `Starwhale Runtime` in the model evaluation scenario. `Starwhale Evaluation` is part of the MLOps toolchain built by Starwhale. More applications like `Starwhale Model Serving`, `Starwhale Training` will be included in the future.

### Core Features

- **Visualization**: Both `swcli` and the Web UI provide visualization of model evaluation results, supporting comparison of multiple results. Users can also customize logging of intermediate processes.

- **Multi-scenario Adaptation**: Whether it's a notebook, desktop or distributed cluster environment, the same commands, Python scripts, artifacts and operations can be used for model evaluation. This satisfies different computational power and data volume requirements.

- **Seamless Starwhale Integration**: Leverage `Starwhale Runtime` for the runtime environment, `Starwhale Dataset` as data input, and run models from `Starwhale Model`. Configuration is simple whether using `swcli`, Python SDK or Cloud/Server instance Web UI.

### Key Elements

- `swcli model run`: Command line for bulk offline model evaluation.
- `swcli model serve`: Command line for online model evaluation.

## Best Practices

### Command Line Grouping

From the perspective of completing an end-to-end `Starwhale Evaluation` workflow, commands can be grouped as:

- Preparation Stage
  - `swcli dataset build` or Starwhale Dataset Python SDK
  - `swcli model build` or Starwhale Model Python SDK
  - `swcli runtime build`
- Evaluation Stage
  - `swcli model run`
  - `swcli model serve`
- Results Stage
  - `swcli job info`
- Basic Management
  - `swcli job list`
  - `swcli job remove`
  - `swcli job recover`

## Abstraction job-step-task

- `job`: A model evaluation task is a `job`, which contains one or more `steps`.

- `step`: A `step` corresponds to a stage in the evaluation process. With the default PipelineHandler, `steps` are `predict` and `evaluate`. For custom evaluation processes using `@handler`, `@evaluation.predict`, `@evaluation.evaluate` decorators, `steps` are the decorated functions. `Steps` can have dependencies, forming a DAG. A `step` contains one or more `tasks`. `Tasks` in the same `step` have the same logic but different inputs. A common approach is to split the dataset into multiple parts, with each part passed to a `task`. `Tasks` can run in parallel.

- `task`: A `task` is the final running entity. In Cloud/Server instances, a `task` is a container in a Pod. In Standalone instances, a `task` is a Python Thread.

The job-step-task abstraction is the basis for implementing distributed runs in `Starwhale Evaluation`.
