---
title: Starwhale Glossary
---

On this page you find a list of important terminology used throughout the Starwhale documentation.

* **Starwhale Dataset**: An abstraction of datasets in the machine learning field by Starwhale, which implements dataset construction, sharing, loading, version control and visualization to meet the requirements of processes like model training and evaluation.
* **Starwhale Model**: A standard package format for models in machine learning defined by Starwhale, including model weight files, code and configurations, etc. It meets requirements like model evaluation, fine-tuning in processes like model package construction, sharing, version control and running.
* **Starwhale Runtime**:  An abstraction of program running environments in the machine learning field by Starwhale. It shields details like Dockerfile writing and CUDA installation and realizes a reproducible, shareable Python running environment.
* **Starwhale Instance**: Each deployment of Starwhale is called an instance. All instances can be managed by the `swcli`. There are 3 types of Starwhale instances: Starwhale Standalone, Starwhale Server and Starwhale Cloud. Starwhale tries to keep concepts consistent across different types of instances. In this way, people can easily exchange data and migrate between them.
* **Starwhale Standalone**: One of the 3 Starwhale instance types. Aimed at independent developers, deployed in local development environments and managed through the `swcli` command line tool to meet development, debugging needs etc.
* **Starwhale Server**: One of the 3 Starwhale instance types. Aimed at team users, deployed in private data centers, relies on Kubernetes clusters, provides centralized, interactive, secure services.
* **Starwhale Cloud**: One of the 3 Starwhale instance types. Hosted public cloud service, available at <https://cloud.starwhale.cn>, operated and maintained by the Starwhale team, no installation needed, ready to use.
* **`swcli`**: A Starwhale command line tool written in Python, used to manage model packages, datasets and runtimes on different instances.
* **datastore**: An infrastructure in Starwhale, provides storage and access methods like Big Table, meets requirements like storage and retrieval of datasets and evaluation data.
* **Starwhale Project**: The basic unit to organize different resources (e.g. models, datasets etc).
* **`.swignore` file**: Similar to .gitignore, .dockerignore files, used to define ignoring some files or folders. The Starwhale model building process will try to read this file and decide which files to ignore.
* **`model.yaml` file**: A descriptive file defining how to build a Starwhale Model, optional.
* **`dataset.yaml` file**: A descriptive file defining how to build a Starwhale Dataset, needs to work with some Python scripts. Used by `swcli dataset build` command, optional.
* **`runtime.yaml` file**: A descriptive file defining a Starwhale Runtime, used by `swcli runtime build` command, optional.
