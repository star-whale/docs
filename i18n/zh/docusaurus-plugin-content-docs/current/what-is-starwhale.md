---
slug: /
title: 什么是Starwhale
---

## 概述

Starwhale是一个 MLOps/LLMOps平台，面向机器学习项目提供研发运营管理能力，建立标准化的模型开发、测试、部署和运营流程，连接业务团队、AI团队和运营团队。解决机器学习过程中模型迭代周期长、团队协作、人力资源浪费等问题。Starwhale提供Standalone, Server 和 Cloud 三种实例方式，满足单机环境开发，私有化集群部署和Starwhale团队托管的云服务多种部署场景。

Starwhale 同时也是一个[开源的平台](https://github.com/star-whale/starwhale)，使用 [Apache-2.0 协议](https://github.com/star-whale/starwhale/blob/main/LICENSE)。

![products](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/products.png)

* 平台基础：
  * [Starwhale Model](model/index)：Starwhale 模型是一种机器学习模型的标准包格式，可用于多种用途，例如模型微调、模型评估和在线服务。 Starwhale 模型包含模型文件、推理代码、配置文件等。
  * [Starwhale Dataset](dataset/index)：Starwhale 数据集能够高效的数据存储、数据加载和数据可视化，是一款面向ML/DL领域的数据管理工具。
  * [Starwhale Runtime](runtime/index)：Starwhale 运行时能够针对运行Python程序，提供一种可复现、可分享的运行环境。使用 Starwhale 运行时，可以非常容易的与他人分享，并且能在 Starwhale Server 和 Starwhale Cloud 实例上使用 Starwhale 运行时。
* 模型评测：
  * [Model Evaluation](evaluation/index)：Starwhale 模型评测能让用户通过SDK写少量的Python 代码就能实现复杂的、生产级别的、分布式的模型评测任务。
  * Live Demo：能够通过Web UI方式对模型进行在线评测。
  * Reports：编写可分享，可自动集成评测数据的报告。
  * Tables：提供多维度的模型评测结果对比和展示，表格中支持包括图片、音频和视频等多媒体数据展示。能够将评测过程中通过Starwhale Python SDK 自由记录的数据都呈现出来。
* LLM 微调：提供面向LLM的全流程模型微调工具链，包括模型微调，批量评测对比，在线评测对比和模型发布功能。
* 部署实例：
  * Starwhale Standalone：部署在本地开发环境中，通过 `swcli` 命令行工具进行管理，满足开发调试需求。
  * Starwhale Server：部署在私有数据中心里，依赖 Kubernetes 集群，提供集中化的、Web交互式的、安全的服务。
  * Starwhale Cloud：托管在公共云上的服务，访问地址为<https://cloud.starwhale.cn>，由 Starwhale 团队负责运维，无需安装，注册账户后即可使用。

## 典型使用场景

* **数据集管理**：基于 Starwhale Dataset Python SDK 可以非常容易的导入、创建、分发和加载数据集，同时可以实现数据集细粒度的版本控制和可视化等功能。
* **模型管理**：通过简单的打包机制，能将模型、配置文件和代码等生成 Starwhale 模型包，提供高效分发、版本管理、Model Registry和可视化等功能，让模型包的日常管理更简单。
* **机器学习运行环境共享**： 通过导出开发环境或编写简单的 YAML 生成 Starwhale 运行时，可以在其他实例中重现该环境，获得稳定的、一致的运行时，实现一处定义，处处运行的目标。Starwhale 运行时抽象和屏蔽一些底层依赖，用户不需要掌握Dockerfile编写、CUDA安装等知识，非常简单的就能定义出满足机器学习程序运行的环境。
* **模型评测**：借助 Starwhale Evaluation Python SDK，只需要编写少量代码，就能实现分布式集群环境下的高效的、大规模的、多数据集的、多阶段的模型评测，并能将评测过程中产生的数据、制品等记录到 Starwhale Tables中，并提供多种可视化方式展示。
* **在线评测**：为Starwhale 模型快速创建交互式的Web UI在线服务，可以进行快速检测。
* **模型微调**：针对大语言模型(LLM)的微调，提供一套完整的工具链，让模型微调过程变得快速且可量化。

Starwhale 是一个开放的平台，工作中可以只用某些功能，也可以组合使用，核心目标是为数据科学家和机器学习工程师提供一个方便的工具，提升工作效率。

## 开始 Starwhale 之旅

* 5-10分钟内完成 [Starwhale Client 的安装](swcli/installation)和 [Starwhale Server 的启动](server/installation/server-start)。
* 参考 [Starwhale Standalone 入门指南](server/installation/server-start)，在本地对 helloworld 例子的模型、数据集和运行时构建，完成对 MNIST 数据集的模型效果的评估。
* 参考 [Starwhale Server 入门指南](getting-started/server)，在 Starwhale Server 中运行 helloworld 例子的模型评测。
* 阅读 [用户指南](swcli) 和 [参考指南](reference/swcli)，并参照[例子](https://github.com/star-whale/starwhale/tree/main/example)，制作自己的数据集、运行时和模型包，进行模型评测等任务。
