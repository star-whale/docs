---
title: Starwhale 模型 SDK
---

## model.build

`model.build` 是一个函数，能够构建 Starwhale 模型，等价于 `swcli model build` 命令。

```python
def build(
    modules: t.Optional[t.List[t.Any]] = None,
    workdir: t.Optional[_path_T] = None,
    name: t.Optional[str] = None,
    project_uri: str = "",
    desc: str = "",
    remote_project_uri: t.Optional[str] = None,
    add_all: bool = False,
    tags: t.List[str] | None = None,
) -> None:
```

### 参数 {#build-params}

- `modules`: (List[str|object], optional)
  - 构建时导入的模块，为列表类型，可以指定多个模块。
  - 模块类型包含两种：
    - 字符串类型： Python 可 Import 的路径，比如 "to.path.module", "to.path.module:object" 。
    - Python 对象： `model.build` 函数会自动解析所对应的模块。
  - 如果不指定，则会搜索当前已经导入的模块。
- `name`: (str, optional)
  - Starwhale 模型的名称。
  - 若不指定，则会使用 cwd 目录名作为 Starwhale 模型的名称。
- `workdir`: (str, Pathlib.Path, optional)
  - Starwhale 模型打包的根目录，此目录下的文件会被打包。
- `project_uri`: (str, optional)
  - Project URI，表示该模型属于哪个项目。
  - 默认为 `swcli project select` 选择的项目。
- `desc`: (str, optional)
  - 描述信息，默认为空。
- `remote_project_uri`: (str, optional)
  - 其他示例的项目 URI，构建完Starwhale 模型后，会被自动复制到远端实例中。
- `add_all`: (bool, optional)
  - Starwhale 模型打包的时候会自动忽略一些类似 pyc/venv/conda 构建目录等，可以通过该参数将这些文件也进行打包。即使该参数使用，也不影响 `.swignore` 文件的预期作用。
  - 默认为 `False`。
- `tags`: (List[str], optional)
  - 用户自定义标签。
  - 不能指定 `latest` 和 `^v\d+$` 这两个 Starwhale 系统内建标签。

### 使用示例 {#build-example}

```python
from starwhale import model

# class search handlers
from .user.code.evaluator import ExamplePipelineHandler
model.build([ExamplePipelineHandler])

# function search handlers
from .user.code.evaluator import predict_image
model.build([predict_image])

# module handlers, @handler decorates function in this module
from .user.code import evaluator
model.build([evaluator])

# str search handlers
model.build(["user.code.evaluator:ExamplePipelineHandler"])
model.build(["user.code1", "user.code2"])

# no search handlers, use imported modules
model.build()

# add user custom tags
model.build(tags=["t1", "t2"])
```
