---
title: Starwhale 模型评测
---

## 设计概述

### Starwhale Evaluation 定位

`Starwhale Evaluation` 目标是对模型评测进行全流程管理，包括创建 Job、分发 Task、查看模型评测报告和基本管理等。`Starwhale Evaluation` 是 Starwhale构建的 MLOps 工具链使用 `Starwhale Model`、`Starwhale Dataset`、`Starwhale Runtime` 三个基础元素，在模型评测这个场景上的具体应用，后续还会包含 `Starwhale Model Serving`、`Starwhale Training` 等应用场景。

### 核心功能

- **可视化展示**：`swcli`和 Web UI都提供对模型评测结果的可视化展示，支持多个结果的对比等功能，同时用户可以自定义记录评测中间过程。
- **多场景适配**：不管是在笔记本的单机环境，还是在分布式服务器集群环境，都能使用统一的命令、Python脚本、制品和操作方法进行模型评测，满足不同算力、不同数据量的外部环境要求。
- **Starwhale无缝集成**：使用`Starwhale Runtime`提供的运行环境，将 `Starwhale Dataset` 作为数据输入，在 `Starwhale Model` 中运行模型评测任务，不管是在 `swcli`、Python SDK 还是 Cloud/Server 实例 Web UI中，都能简单的进行配置。

### 关键元素

- `swcli model run` 命令行： 能够完成模型的批量、离线式评测。
- `swcli model serve` 命令行： 能够完成模型的在线评测。

## 最佳实践

### 命令行分组

从完成 `Starwhale Evaluation` 全流程任务的角度，可以将所涉及的命令分组如下：

- 基础准备阶段
  - `swcli dataset build` 或 Starwhale Dataset Python SDK
  - `swcli model build` 或 Starwhale Model Python SDK
  - `swcli runtime build`
- 评测阶段
  - `swcli model run`
  - `swcli model serve`
- 结果展示阶段
  - `swcli job info`
- 基本管理
  - `swcli job list`
  - `swcli job remove`
  - `swcli job recover`

## job-step-task 抽象

- `job`: 一次模型评测任务就是一个 `job`，一个 `job` 包含一个或多个 `step`。
- `step`: `step` 对应评测过程中的某个阶段。使用PipelineHandler的默认评测过程，`step`就是`predict`和`evaluate`；用户自定义的评测过程，`step` 就是使用 `@handler`, `@evaluation.predict`, `@evaluation.evaluate` 修饰的函数。`step` 之间可以有依赖关系，形成一个DAG。一个 `step` 包含一个或多个 `task`。同一 `step` 中的不同 `task`，执行逻辑是一致的，只是输入参数不同，常见做法是将数据集分割成若干部分，然后传入每个`task` 中，`task` 可以并行执行。
- `task`: `task` 是最终运行的实体。在 Cloud/Server 实例中，一个 `task` 就是一个Pod的container； 在Standalone 实例中，一个 `task` 就是一个 Python Thread。

job-step-task 的抽象是实现 `Starwhale Evaluation` 分布式运行的基础。
