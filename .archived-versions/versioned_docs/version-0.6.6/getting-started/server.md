---
title: Getting started with Starwhale Server
---

## Start Starwhale Server

```bash
swcli server start
```

For detailed informatiuon, see the [installation guide](../server/installation/index.md).

## Create your first project

### Login to the server

Open your browser and enter your server's URL in the address bar. Login with your username(starwhale) and password(abcd1234).

![console-artifacts.gif](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/console-artifacts.gif)

### Create a new project

## Build the dataset, model, and runtime on your local machine

Follow step 1 to step 4 in [Getting started with Starwhale Standalone](standalone) to create:

- a Starwhale model named helloworld
- a Starwhale dataset named mnist64
- a Starwhale runtime named helloworld

## Copy the dataset, the model, and the runtime to the server

```bash
swcli instance login --username <your username> --password <your password> --alias server <Your Server URL>

swcli model copy helloworld server/project/demo
swcli dataset copy mnist64 server/project/demo
swcli runtime copy helloworld server/project/demo
```

## Use the Web UI to run an evaluation

Navigate to the "demo" project in your browser and create a new one.

![console-create-job.gif](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/console-create-job.gif)

**Congratulations! You have completed the Starwhale Server Getting Started Guide.**
