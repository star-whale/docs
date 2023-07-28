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
