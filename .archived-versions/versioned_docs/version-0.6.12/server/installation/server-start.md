---
title: Launch Starwhale Server with the "swcli server start" command
---

## Prerequisites

* [Starwhale Client](../../swcli/installation) 0.6.7+
* [Docker](https://www.docker.com/) 19.03+
* [Docker Compose](https://docs.docker.com/compose/) 2.0.0+
* Operating System: Linux or macOS

If you are unsure whether your dependencies meet the requirements, you can use the `swcli check` command to check, and the normal output should be as follows:

```bash
❯ swcli check
✅ Docker 24.0.7
✅ Docker Compose 2.21.0
✅ Conda 22.9.0
```

## Launch Starwhale Server

```bash
swcli server start
```

After executing the command, it will pull the Starwhale Server Docker image consistent with the `swcli` version and start the Starwhale Server related container services. Finally, it will open the browser <http://127.0.0.1:8008> page, where you can log in to the Starwhale Server with the default username `starwhale` and password `abcd1234`.

When the server is successfully started, you will see a prompt similar to the following:

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
         🥕 visit web:
```

If there are any issues during the startup process, you can use the `docker compose -f ~/.starwhale/.server/docker-compose.yaml logs` command to view the logs, or you can check the service status through the `swcli server status` command.

## Stop Starwhale Server

```bash
swcli server stop
```

After executing the command, it will stop the previously launched Starwhale Server service.
