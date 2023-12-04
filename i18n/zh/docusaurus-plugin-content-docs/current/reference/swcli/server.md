---
title: swcli server
---

## 概述

```bash
swcli [全局选项] server <SUBCOMMAND> [参数]...
```

`server` 命令包含以下子命令：

* `start`
* `stop`
* `status` (`ps`)

## swcli server start {#start}

```bash
swcli [全局选项] server start [选项]
```

`server start` 使用 Docker 和 Docker-Compose 在本地环境快速启动 Starwhale Server。

* 依赖要求： `Docker` >= 19.03, `Docker-Compose` >= v2。可以使用 `swcli check` 命令检查。
* `server start` 后，需要通过 `swcli server stop` 来关闭。
* `server start` 启动的相关容器，重启策略为 `restart=always`，即使机器重启，相关容器也会自动启动。
* `server start` 会在 ~/.starwhale/.server 目录中渲染 docker compose yaml文件。`docker compose` 命令可以使用该文件，进行更丰富的操作，比如查看日志： `docker compose -f ~/.starwhale/.server/docker-compose.yaml logs -f`。

### 参数说明 {#start-params}

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
|`-h`或`--host`| N | String | 127.0.0.1 | Starwhale Server 启动端口绑定的IP，默认为 127.0.0.1, 如果希望其他机器能访问可以设置为 0.0.0.0。|
|`-p`或`--port`| N | Int | 8082 | Starwhale Server 绑定的端口。|
|`-e`或`--env`| N | String |  | 设置环境变量，供 Starwhale Server 启动或运行中使用，比如 `SW_PYPI_INDEX_URL` 和 `SW_PYPI_EXTRA_INDEX_URL` 环境变量可以改变 Starwhale Server 的 PYPI 源。|
|`-i`或`--server-image`| N | String | | Starwhale Server 的Docker Image，如不指定，则会使用 swcli 命令行对应版本的 Starwhale Server Image。|
|`--detach/--no-detach`| N | Bool | `--detach` | 后台运行 Starwhale Server。|
|`--dry-run` | N | Bool | False | 不真正运行，只产生compose yaml，并做一些校验，一般用来做调试。|

### Server 启动的例子 {#start-example}

```bash
# Start Starwhale Server with default settings, then you can visit http://127.0.0.1:8082 to use Starwhale Server.
swcli server start

# Start Starwhale Server with custom Server image.
swcli server start -i docker-registry.starwhale.cn/star-whale/server:latest

# Start Starwhale Server with custom host and port.
swcli server start --port 18082 --host 0.0.0.0

# Start Starwhale Server in the foreground and custom environment variables for pypi.
swcli server start --no-detach -e SW_PYPI_INDEX_URL=https://pypi.tuna.tsinghua.edu.cn/simple -e SW_PYPI_EXTRA_INDEX_URL=https://mirrors.aliyun.com/pypi/simple
```

## swcli server stop {#stop}

```bash
swcli [全局选项] server stop
```

`server stop` 命令会停止 `swcli server start` 启动的相关容器，关闭 Starwhale Server 服务。

## swcli server status {#status}

```bash
swcli [全局选项] server status
```

`server status` 命令展示 Starwhale Server 相关容器状态。`swcli server ps` 命令与该命令作用一致。
