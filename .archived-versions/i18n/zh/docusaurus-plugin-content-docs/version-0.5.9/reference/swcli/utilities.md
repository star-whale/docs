---
title: 其他命令
---

## swcli gc {#gc}

```bash
swcli [全局选项] gc [选项]
```

`gc`根据内部的垃圾回收策略清理已经被删除的项目、模型、数据集和运行时。

| 选项 | 必填项 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `--dry-run` | N | Boolean | False | 如果为真，仅输出将被删除的对象而不清理。 |
| `--yes` | N | Boolean | False | 跳过所有需要确认的项目。 |

## swcli check {#check}

```bash
swcli [全局选项] check
```

检查 `swcli` 命令的外部依赖是否满足条件，目前主要检查 Docker 和 Conda。

## swcli completion install {#c-install}

```bash
swcli [全局选项] completion install <SHELL_NAME>
```

安装 `swcli` 命令补全，目前支持 bash, zsh 和 fish。如果不指定 SHELL_NAME，则尝试主动探测当前shell类型。

## swcli config edit {#config-edit}

```bash
swcli [全局选项] config edit
```

编辑 Starwhale 配置文件，即 `~/.config/starwhale/config.yaml` 。

## swcli ui {#ui}

```bash
swcli [全局选项] ui <INSTANCE>
```

打开对应实例的Web页面。
