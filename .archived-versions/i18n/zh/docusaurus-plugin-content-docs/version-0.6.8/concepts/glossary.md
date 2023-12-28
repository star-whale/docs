---
title: Starwhale的名词解释
---

本文会列出 Starwhale 的一些重要的专有术语。

* **Starwhale Dataset**：Starwhale 对机器学习领域数据集的一种抽象，实现数据集的构建、分发、加载、版本控制和可视化展示，满足模型训练、评测等过程中对数据集的需求。
* **Starwhale Model**：Starwhale 定义的一种机器学习中模型的标准包格式，包括模型权重文件、代码和配置等，满足模型评测、模型微调等环节中模型包的构建、分发、版本控制和运行等需求。
* **Starwhale Runtime**：Starwhale 对机器学习领域程序运行环境的一种抽象，屏蔽Dockerfile编写和CUDA安装等细节，实现一种可复现、可分享的Python运行环境。
* **Starwhale Instance**：Starwhale的每个部署称为一个实例。所有实例都可以通过`swcli`进行管理。Starwhale 实例有Starwhale Standalone, Starwhale Server 和 Starwhale Cloud 三种类型。Starwhale 会在不同实例上保持概念上的一致性，用户可以轻松的在不同实例上复制模型、数据集和运行时。
* **Starwhale Standalone**：Starwhale 三种实例类型之一。面向独立开发者，部署在本地开发环境中，通过`swcli`命令行工具进行管理，满足开发、调试等需求。
* **Starwhale Server**：Starwhale 三种实例类型之一。面向团队用户，部署在私有数据中心里，依赖Kubernetes集群，提供集中化、Web交互式的、安全的服务。
* Starwhale Cloud：Starwhale 三种实例类型之一。托管在公有云上的服务，访问地址为 <https://cloud.starwhale.cn>，由Starwhale团队负责运维，无需安装，开箱即用。
* **`swcli`**：是Python编写的Starwhale命令行工具，可以对不同实例上的模型包、数据集和运行时进行管理。
* **datastore**：Starwhale 中的一个基础设施，提供类似Big Table的存储和访问方式，满足数据集和评测数据的存储、检索等需求。
* **Starwhale Project**：是组织不同资源（如模型、数据集等）的基本单位。
* **`.swignore` 文件**：与`.gitignore`和`.dockerignore`等文件类似，用来定义忽略某些文件或文件夹，Starwhale 模型构建过程会尝试读取该文件，并决定哪些文件会被忽略掉。
* **`model.yaml` 文件**：是一种定义Starwhale Model如何构建的描述性文件，非必需。
* **`dataset.yaml` 文件**：是一种定义Starwhale Dataset如何构建的描述性文件，需要与一些Python脚本配合使用。`swcli dataset build` 命令会使用。非必需。
* **`runtime.yaml` 文件**：是一种定义Starwhale Runtime的描述性文件，`swcli runtime build` 命令会使用。非必需。
