---
title: 其他 SDK
---

## \__version__

Starwhale Python SDK 和 `swcli` 版本，是字符串常量。

```python
>>> from starwhale import __version__
>>> print(__version__)
0.5.7
```

## init_logger

`init_logger` 用来设置日志输出级别。默认为`0` 。

- `0`: 输出 `errors` 信息，traceback 呈现最近的1个堆栈。
- `1`: 输出 `errors` + `warnings` 信息，traceback 呈现最近的5个堆栈内容。
- `2`: 输出 `errors` + `warnings` + `info` 信息，trackback 呈现最多10个堆栈内容。
- `3`: 输出 `errors` + `warnings` + `info` + `debug` 信息，trackback 呈现最多100个堆栈内容。
- `>=4`: 输出 `errors` + `warnings` + `info` + `debug` + `trace` 信息，trackback 呈现最多1000个堆栈内容。

```python
def init_logger(verbose: int = 0) -> None:
```

## login

登录 server/cloud 实例，等价于 `swcli instance login` 命令。登录 Standalone 实例是无意义的。

```python
def login(
    instance: str,
    alias: str = "",
    username: str = "",
    password: str = "",
    token: str = "",
) -> None:
```

### 参数 {#login-params}

- `instance`: (str, required)
  - server/cloud 实例的 http url。
- `alias`: (str, optional)
  - 实例的别名，可以简化 Starwhale URI 中 instance部分。
  - 若不指定，则使用实例的 http url 中 hostname 部分。
- `username`: (str, optional)
- `password`: (str, optional)
- `token`: (str, optional)
  - `username` + `password` 和 `token` 只能选择一种方式登录实例。

### 使用示例 {#login-example}

```python
from starwhale import login

# login to Starwhale Cloud instance by token
login(instance="https://cloud.starwhale.cn", alias="cloud-cn", token="xxx")

# login to Starwhale Server instance by username and password
login(instance="http://controller.starwhale.svc", alias="dev", username="starwhale", password="abcd1234")
```

## logout

登出 server/cloud 实例， 等价于 `swcli isntance logout` 命令。登出 Standalone 实例是无意义的。

```python
def logout(instance: str) -> None:
```

### 使用示例 {#logout-example}

```python
from starwhale import login, logout

login(instance="https://cloud.starwhale.cn", alias="cloud-cn", token="xxx")
# logout by the alias
logout("cloud-cn")

login(instance="http://controller.starwhale.svc", alias="dev", username="starwhale", password="abcd1234")
# logout by the instance http url
logout("http://controller.starwhale.svc")
```
