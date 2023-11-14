---
title: 使用Docker Compose安装Starwhale
---

## 先决条件

- Docker >= 19.03
- [Docker Compose Plugin](https://docs.docker.com/compose/install/compose-plugin/) >= 2.3
- x86-64 System(Linux)

## 安装方法

### 启动服务

```bash
wget https://raw.githubusercontent.com/star-whale/starwhale/main/docker/compose/compose.yaml
GLOBAL_IP=${your_accessible_ip_for_server} ; docker compose up
```

`GLOBAL_IP` 需要是可以被所有 `swcli` 访问到的，包括用户实际使用的`swcli`和container内部的`swcli`. 如果不能访问，请确认您的防火墙设置.

`compose.yaml` 包含了Mysql数据库，MinIO存储和Controller服务. 创建一个 `compose.override.yaml`,  [可以覆盖](https://docs.docker.com/compose/reference/#specifying-multiple-compose-files) `compose.yaml` 中的配置.
如何配置可以参考[此处](starwhale_env)
