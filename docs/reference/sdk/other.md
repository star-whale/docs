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
