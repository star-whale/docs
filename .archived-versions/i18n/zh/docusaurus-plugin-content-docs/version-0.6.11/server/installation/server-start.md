---
title: 使用 swcli server start 命令一键启动 Starwhale Server
---

## 先决条件

* [Starwhale Client](../../swcli/installation) 0.6.7+
* [Docker](https://docs.docker.com/get-docker/) 19.03+
* [Docker Compose](https://docs.docker.com/compose/install/) 2.0.0+
* 操作系统：Linux 或 macOS

如果不确定依赖版本是否满足要求，可以使用 `swcli check` 命令进行检查，正常输出如下：

```bash
❯ swcli check
✅ Docker 24.0.7
✅ Docker Compose 2.21.0
✅ Conda 22.9.0
```

## 启动 Starwhale Server

```bash
swcli server start
```

命令执行后，会拉取与 `swcli` 版本一致的 Starwhale Server Docker 镜像，并启动 Starwhale Server 相关容器服务，最后会打开浏览器 <http://127.0.0.1:8082> 页面，可以使用默认用户名 `starwhale` 和密码 `abcd1234` 登录 Starwhale Server。

当成功启动后，会有类似如下的提示信息：

```bash
❯ swcli server start
🛸 render compose yaml file: /home/tianwei/.starwhale/.server/docker-compose.yaml
🏓 start Starwhale Server by docker compose
 Container starwhale_local-db-1  Created
 Container starwhale_local-server-1  Recreate
 Container starwhale_local-server-1  Recreated
 Container starwhale_local-db-1  Starting
 Container starwhale_local-db-1  Started
 Container starwhale_local-db-1  Waiting
 Container starwhale_local-db-1  Healthy
 Container starwhale_local-server-1  Starting
 Container starwhale_local-server-1  Started
Starwhale Server is running in the background.
         🍎 stop: swcli server stop
         🍌 check status: swcli server status
         🍉 more compose command: docker compose -f /home/tianwei/.starwhale/.server/docker-compose.yaml sub-command
         🥕 visit web: http://127.0.0.1:8082
```

若启动过程中出现问题，可以使用 `docker compose -f ~/.starwhale/.server/docker-compose.yaml logs` 命令查看日志，也可以通过 `swcli server status` 命令查看服务状态。

## 关闭 Starwhale Server

```bash
swcli server stop
```

命令执行后，会关闭曾经启动的 Starwhale Server 服务。
