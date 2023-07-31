---
title: Utility Commands
---

## swcli gc {#gc}

```bash
swcli [GLOBAL OPTIONS] gc [OPTIONS]
```

`gc` clears removed projects, models, datasets, and runtimes according to the internal garbage collection policy.

| Option | Required | Type | Defaults | Description |
| --- | --- | --- | --- | --- |
| `--dry-run` | N | Boolean | False | If true, outputs objects to be removed instead of clearing them. |
| `--yes` | N | Boolean | False | Bypass confirmation prompts. |

## swcli check {#check}

```bash
swcli [GLOBAL OPTIONS] check
```

Check if the external dependencies of the `swcli` command meet the requirements. Currently mainly checks Docker and Conda.

## swcli completion install {#c-install}

```bash
swcli [GLOBAL OPTIONS] completion install <SHELL_NAME>
```

Install autocompletion for `swcli` commands. Currently supports bash, zsh and fish. If SHELL_NAME is not specified, it will try to automatically detect the current shell type.

## swcli config edit {#config-edit}

```bash
swcli [GLOBAL OPTIONS] config edit
```

Edit the Starwhale configuration file at `~/.config/starwhale/config.yaml`.

## swcli ui {#ui}

```bash
swcli [GLOBAL OPTIONS] ui <INSTANCE>
```

Open the web page for the corresponding instance.
