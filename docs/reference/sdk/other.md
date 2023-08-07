---
title: Other SDK
---

## \__version__

Version of Starwhale Python SDK and `swcli`, string constant.

```python
>>> from starwhale import __version__
>>> print(__version__)
0.5.7
```

## init_logger

Initialize Starwhale logger and traceback. The default value is 0.

- `0`: show only `errors`, traceback only shows 1 frame.
- `1`: show `errors` + `warnings`, traceback shows 5 frames.
- `2`: show `errors` + `warnings` + `info`, traceback shows 10 frames.
- `3`: show `errors` + `warnings` + `info` + `debug`, traceback shows 100 frames.
- `>=4`: show `errors` + `warnings` + `info` + `debug` + `trace`, traceback shows 1000 frames.

```python
def init_logger(verbose: int = 0) -> None:
```

## login

Log in to a server/cloud instance. It is equivalent to running the `swcli instance login` command. Log in to the Standalone instance is meaningless.

```python
def login(
    instance: str,
    alias: str = "",
    username: str = "",
    password: str = "",
    token: str = "",
) -> None:
```

### Parameters {#login-params}

- `instance`: (str, required)
  - The http url of the server/cloud instance.
- `alias`: (str, optional)
  - An alias for the instance to simplify the instance part of the Starwhale URI.
  - If not specified, the hostname part of the instance http url will be used.
- `username`: (str, optional)
- `password`: (str, optional)
- `token`: (str, optional)
  - You can only choose one of `username` + `password` or `token` to login to the instance.

### Examples {#login-example}

```python
from starwhale import login

# login to Starwhale Cloud instance by token
login(instance="https://cloud.starwhale.cn", alias="cloud-cn", token="xxx")

# login to Starwhale Server instance by username and password
login(instance="http://controller.starwhale.svc", alias="dev", username="starwhale", password="abcd1234")
```

## logout

Log out of a server/cloud instance. It is equivalent to running the `swcli instance logout` command. Log out of the Standalone instance is meaningless.

```python
def logout(instance: str) -> None:
```

### Examples {#logout-example}

```python
from starwhale import login, logout

login(instance="https://cloud.starwhale.cn", alias="cloud-cn", token="xxx")
# logout by the alias
logout("cloud-cn")

login(instance="http://controller.starwhale.svc", alias="dev", username="starwhale", password="abcd1234")
# logout by the instance http url
logout("http://controller.starwhale.svc")
```
