---
title: Install Starwhale Server with Docker Compose
---

## Prerequisites

- Docker >= 19.03
- [Docker Compose Plugin](https://docs.docker.com/compose/install/compose-plugin/) >= 2.3
- x86-64 System(Linux)

## Usage

### Start up the server

```bash
wget https://raw.githubusercontent.com/star-whale/starwhale/main/docker/compose/compose.yaml
GLOBAL_IP=${your_accessible_ip_for_server} ; docker compose up
```

The `GLOBAL_IP` is the ip for Controller which could be accessed by all `swcli` both inside docker containers and other user machines.

`compose.yaml` contains Starwhale Controller/MySQL/MinIO services. Touch a `compose.override.yaml`, as its name implies, can contain [configuration overrides](https://docs.docker.com/compose/reference/#specifying-multiple-compose-files) for `compose.yaml`. The available configurations are specified [here](starwhale_env)
