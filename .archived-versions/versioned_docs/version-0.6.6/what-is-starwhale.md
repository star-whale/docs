---
slug: /
title: What is Starwhale
---

## Overview

Starwhale is an MLOps/LLMOps platform that provides R&D operation management capabilities for machine learning projects, establishing standardized model development, testing, deployment and operation processes, connecting business teams, AI teams and operation teams. It solves problems such as long model iteration cycles, team collaboration, and waste of human resources in the machine learning process. Starwhale provides Standalone, Server and Cloud in three instance ways to meet the development needs of a single machine environment, private cluster deployment and multi-cloud services hosted by the Starwhale team.

Starwhale is also an [open source platform](https://github.com/star-whale/starwhale), using the [Apache-2.0 license](https://github.com/star-whale/starwhale/blob/main/LICENSE).

![products](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/products.png)

* Fundamentals:
  * [Starwhale Model](model/index): Starwhale Model is a standard package format for machine learning models, which can be used for various purposes, such as model fine-tuning, model evaluation, and online services. Starwhale Model includes model files, inference code, configuration files, etc.
  * [Starwhale Dataset](dataset/index): Starwhale Dataset enables efficient data storage, data loading, and data visualization, making it a data management tool for the ML/DL field.
  * [Starwhale Runtime](runtime/index): Starwhale Runtime provides a reproducible and shareable runtime environment for running Python programs. With Starwhale Runtime, you can easily share with others and use it on Starwhale Server and Starwhale Cloud instances.
* Model Evaluation:
  * [Model Evaluation](evaluation/index): Starwhale Model Evaluation allows users to implement complex, production-level, distributed model evaluation tasks with minimal Python code using the SDK.
  * Live Demo: Evaluate models online through a Web UI.
  * Reports: Create shareable, automatically integrated evaluation reports.
  * Tables: Provide multi-dimensional model evaluation result comparisons and displays, with support for multimedia data such as images, audio, and video. The tables can present all the data and artifacts recorded during the evaluation process using the Starwhale Python SDK.
* LLM Fine-tuning: Provide a full toolchain for LLM fine-tuning, including model fine-tuning, batch evaluation comparison, online evaluation comparison, and model publishing.
* Deployment Instances:
  * Starwhale Standalone: Deployed in a local development environment, managed by the `swcli` command-line tool, meeting development and debugging needs.
  * Starwhale Server: Deployed in a private data center, relying on a Kubernetes cluster, providing centralized, web-based, and secure services.
  * Starwhale Cloud: Hosted on a public cloud, with the access address <https://cloud.starwhale.ai>. The Starwhale team is responsible for maintenance, and no installation is required. You can start using it after registering an account.

## Typical Use Cases

* **Dataset Management**: With the Starwhale Dataset Python SDK, you can easily import, create, distribute, and load datasets while achieving fine-grained version control and visualization.
* **Model Management**: By using a simple packaging mechanism, you can generate Starwhale Model packages that include models, configuration files, and code, providing efficient distribution, version management, Model Registry, and visualization, making the daily management of model packages more straightforward.
* **Machine Learning Runtime Sharing**: By exporting the development environment or writing a simple YAML, you can reproduce the environment in other instances, achieving a stable and consistent runtime. Starwhale Runtime abstracts and shields some underlying dependencies, so users don't need to master Dockerfile writing or CUDA installation, making it easy to define an environment that meets the requirements of machine learning programs.
* **Model Evaluation**: With the Starwhale Evaluation Python SDK, you can implement efficient, large-scale, multi-dataset, and multi-stage model evaluations in a distributed cluster environment with minimal code, record data and artifacts generated during the evaluation process in Starwhale Tables, and provide various visualization methods.
* **Online Evaluation**: Quickly create interactive Web UI online services for Starwhale models to perform rapid testing.
* **Model Fine-tuning**: Provide a complete toolchain for fine-tuning large language models (LLMs), making the model fine-tuning process faster and more quantifiable.

Starwhale is an open platform that can be used for individual functions or combined for use, with the core goal of providing a convenient tool for data scientists and machine learning engineers to improve work efficiency.

## Start Your Starwhale Journey

* Complete the [installation of Starwhale Client](swcli/installation) and [launch of Starwhale Server](server/installation/server-start) within 5-10 minutes.
* Follow the [Starwhale Standalone Getting Started Guide](server/installation/server-start) to build, evaluate, and visualize the helloworld example's model, dataset, and runtime in your local environment.
* Refer to the [Starwhale Server Getting Started Guide](getting-started/server) to run the helloworld example's model evaluation in Starwhale Server.
* Read the [User Guide](swcli) and [Reference Guide](reference/swcli), and refer to the [examples](https://github.com/starwhale-ai/starwhale/tree/main/examples) to explore more features and functionalities.
