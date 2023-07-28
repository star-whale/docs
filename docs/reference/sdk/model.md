---
title: Starwhale Model SDK
---

## model.build

`model.build` is a function that can build the Starwhale model, equivalent to the `swcli model build` command.

```python
def build(
    modules: t.Optional[t.List[t.Any]] = None,
    workdir: t.Optional[_path_T] = None,
    name: t.Optional[str] = None,
    project_uri: str = "",
    desc: str = "",
    remote_project_uri: t.Optional[str] = None,
    add_all: bool = False,
) -> None:
```

### Parameters {#build-params}

- `modules`: (List[str|object], optional)
  - The search modules supports object(function, class or module) or str(example: "to.path.module", "to.path.module:object").
  - If the argument is not specified, the search modules are the imported modules.
- `name`: (str, optional)
  - Starwhale Model name.
  - The default is the current work dir (cwd) name.
- `workdir`: (str, Pathlib.Path, optional)
  - The path of the rootdir. The default workdir is the current working dir.
  - All files in the workdir will be packaged. If you want to ignore some files, you can add `.swignore` file in the workdir.
- `project_uri`: (str, optional)
  - The project uri of the Starwhale Model.
  - If the argument is not specified, the project_uri is the config value of `swcli project select` command.
- `desc`: (str, optional)
  - The description of the Starwhale Model.
- `remote_project_uri`: (str, optional)
  - Project URI of another example instance. After the Starwhale model is built, it will be automatically copied to the remote instance.
- `add_all`: (bool, optional)
  - Add all files in the working directory to the model package(excludes python cache files and virtual environment files when disabled).The `.swignore` file still takes effect.
  - The default value is `False`.

### Examples {#build-example}

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
```
