---
title: swcli server
---

## Overview

```bash
swcli [GLOBAL OPTIONS] server <SUBCOMMAND> [ARGS]...
```

The `server` command includes the following subcommands:

* `start`
* `stop`
* `status` (`ps`)

## swcli server start {#start}

```bash
swcli [GLOBAL OPTIONS] server start [OPTIONS]
```

The `server start` command uses Docker and Docker-Compose to quickly start the Starwhale Server in a local environment.

* Requirements: `Docker` >= 19.03, `Docker-Compose` >= v2. You can use the `swcli check` command to check.
* You need use `swcli server stop` to close Starwhale Server.
* For containers started by `server start`, the restart policy is `restart=always`. Even if the machine restarts, related containers will start automatically.
* `server start` renders docker compose yaml files in the  `~/.starwhale/.server directory`. `docker compose` commands can use this file for richer operations like viewing logs: `docker compose -f ~/.starwhale/.server/docker-compose.yaml logs -f.`

### Options {#start-params}

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
|`-h`or`--host`| N | String | 127.0.0.1 | IP address bound by the Starwhale Server startup port, default is 127.0.0.1. If you want other machines to access, you can set it to 0.0.0.0|
|`-p`or`--port`| N | Int | 8082 | Port bound by the Starwhale Server.|
|`-e`or`--env`| N | String |  | Set environment variables for Starwhale Server startup or runtime use, e.g. `SW_PYPI_INDEX_URL` and `SW_PYPI_EXTRA_INDEX_URL` environment variables can change the Starwhale Server's PYPI source.|
|`-i`or`--server-image`| N | String | | Docker Image for Starwhale Server. If not specified, the Starwhale Server Image corresponding to the swcli command line version will be used.|
|`--detach/--no-detach`| N | Bool | `--detach` | Run Starwhale Server in the background.|
|`--dry-run` | N | Bool | False | render compose yaml file and dry run docker compose. |

### Server start examples {#start-example}

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
swcli [GLOBAL OPTIONS] server stop
```

The `server stop` command will stop containers started by `swcli server start` and close the Starwhale Server service.

## swcli server status {#status}

```bash
swcli [GLOBAL OPTIONS] server status
```

The `server status` command shows the status of Starwhale Server related containers. The `swcli server ps` command has the same effect.
