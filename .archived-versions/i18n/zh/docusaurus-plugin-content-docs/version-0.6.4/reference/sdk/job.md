---
title: Starwhale 任务 SDK
---

## job

通过Job URI参数获取 `starwhale.Job` 对象，可以获得 Standalone/Server/Cloud 实例上的任务。

```python
@classmethod
def job(
    cls,
    uri: str,
) -> Job:
```

### 参数 {#job-func-params}

- `uri`: (str, required)
  - Job URI格式的字符串。

### 使用示例 {#job-func-example}

```python
from starwhale import job
# get job object of uri=https://server/job/1
j1 = job("https://server/job/1")
# get job from standalone instance
j2 = job("local/project/self/job/xm5wnup")
j3 = job("xm5wnup")
```

## class starwhale.Job

`starwhale.Job` 实现对 Starwhale 任务的抽象，能够对 Standalone/Server/Cloud 实例上的任务进行一些信息获取类的操作。

### list

`list` 是一个 classmethod 方法，能够列出某个项目下的任务。

```python
@classmethod
def list(
    cls,
    project: str = "",
    page_index: int = DEFAULT_PAGE_IDX,
    page_size: int = DEFAULT_PAGE_SIZE,
) -> t.Tuple[t.List[Job], t.Dict]:
```

### 参数 {#list-params}

- `project`: (str, optional)
  - Project URI，Standalone/Server/Cloud 实例上的项目都可以。
  - 若不指定 `project` 参数，则使用 `swcli project selected` 命令选定的项目。
- `page_index`: (int, optional)
  - 当获取 Server/Cloud 实例的项目列表时，支持翻页操作，该参数可以指定页面序号。
    - 默认值为 1。
    - 页面起始序号为 1。
  - Standalone 实例不支持翻页操作，设置该参数无效。
- `page_size`: (int, optional)
  - 当获取 Server/Cloud 实例的项目列表时，支持翻页操作，该参数可以指定每页返回的任务数量。
    - 默认值为 1。
    - 页面起始序号为 1。
  - Standalone 实例不支持翻页操作，设置该参数无效。

### 使用示例 {#list-example}

```python
from starwhale import Job
# list jobs of current selected project
jobs, pagination_info = Job.list()
# list jobs of starwhale/public project in the cloud.starwhale.cn instance
jobs, pagination_info = Job.list("https://cloud.starwhale.cn/project/starwhale:public")
# list jobs of id=1 project in the server instance, page index is 2, page size is 10
jobs, pagination_info = Job.list("https://server/project/1", page_index=2, page_size=10)
```

## get

`get` 是一个 classmethod 方法，能够获得某个特定任务的信息，返回 `Starwhale.Job` 对象，与 `starwhale.job` 函数功能和参数定义上完全一致。

### 使用示例 {#get-example}

```python
from starwhale import Job
# get job object of uri=https://server/job/1
j1 = Job.get("https://server/job/1")
# get job from standalone instance
j2 = Job.get("local/project/self/job/xm5wnup")
j3 = Job.get("xm5wnup")
```

## summary

`summary` 是一个 property 属性，返回任务运行中写入 summary 表中的数据，字典类型。

```python
@property
    def summary(self) -> t.Dict[str, t.Any]:
```

### 使用示例 {#summary-example}

```python
from starwhale import jobs
j1 = job("https://server/job/1")
print(j1.summary)
```

### tables

`tables` 是一个 property 属性，返回任务运行中创建的表名（不包括 summary 表，以为 summary 表是项目级别自动创建的），列表类型。

```python
@property
    def tables(self) -> t.List[str]:
```

### 使用示例 {#tables-example}

```python
from starwhale import jobs
j1 = job("https://server/job/1")
print(j1.tables)
```

## get_table_rows

`get_table_rows` 是一个 method 方法，可以根据表名等参数返回数据表的记录，迭代器类型。

```python
def get_table_rows(
    self,
    name: str,
    start: t.Any = None,
    end: t.Any = None,
    keep_none: bool = False,
    end_inclusive: bool = False,
) -> t.Iterator[t.Dict[str, t.Any]]:
```

### 参数 {#rows-params}

- `name`: (str, required)
  - datastore 表名。通过 `tables` 属性获得的表名，可以传给 `name` 参数。
- `start`: (Any, optional)
  - 返回记录中，ID的起始值。
  - 默认值为 None，表示从头开始。
- `end`: (Any, optional)
  - 返回记录中，ID的结束值。
  - 默认值为 `None` ，表示一直到表末尾。
  - 若 `start` 和 `end` 都为 None，则会以迭代器方式返回整个表的数据。
- `keep_none`: (bool, optional)
  - 是否返回值为 None的记录。
  - 默认为 False。
- `end_inclusive`: (bool, optional)
  - 当 `end` 参数设置时，迭代记录的时候，是否包含`end`记录。
  - 默认为 False。

### 使用示例 {#rows-example}

```python
from starwhale import job
j = job("local/project/self/job/xm5wnup")
table_name = j.tables[0]
for row in j.get_table_rows(table_name):
    print(row)
rows = list(j.get_table_rows(table_name, start=0, end=100))
# return the first record from the results table
result = list(j.get_table_rows('results', start=0, end=1))[0]
```

## status

`status` 是一个 property 属性，返回当前Job的实时状态，字符串类型，状态包含 `CREATED`, `READY`, `PAUSED`, `RUNNING`, `CANCELLING`, `CANCELED`, `SUCCESS`, `FAIL` 和 `UNKNOWN` 。

```python
@property
def status(self) -> str:
```

## create

`create` 是一个 classmethod 方法，能够创建 Standalone 实例或 Server/Cloud 实例上的任务，包括Model Evluation, Fine-tuning, Online Serving 和 Developing 等类型的任务。函数返回 Job 类型的对象。

- `create` 通过 `project` 参数决定生成的任务运行在何种实例上，包括 Standalone 和 Server/Cloud 实例。
- 在 Standalone 实例下，`create` 创建一个同步执行的任务。
- 在 Server/Cloud 实例下， `create` 创建一个异步执行的任务。

```python
@classmethod
def create(
    cls,
    project: Project | str,
    model: Resource | str,
    run_handler: str,
    datasets: t.List[str | Resource] | None = None,
    runtime: Resource | str | None = None,
    resource_pool: str = DEFAULT_RESOURCE_POOL,
    ttl: int = 0,
    dev_mode: bool = False,
    dev_mode_password: str = "",
    dataset_head: int = 0,
    overwrite_specs: t.Dict[str, t.Any] | None = None,
) -> Job:
```

### 参数 {#create-params}

对所有实例都生效的参数：

- `project`: (Project|str, required)
  - `Project` 对象或 Project URI 字符串。
- `model`: (Resource|str, required)
  - Model URI 字符串或 Model 类型的 `Resource` 对象，表示要运行的 Starwhale 模型包。
- `run_handler`: (str, required)
  - Starwhale 模型包中对应的可运行的 handler 名称，比如 [mnist](https://github.com/star-whale/starwhale/tree/main/example/mnist) 的 evaluate handler: `mnist.evaluator:MNISTInference.evaluate` 。
- `datasets`: (List[str | Resource], optional)
  - Starwhale 模型包运行所需要的数据集，非必需。

仅对 Standalone 实例生效的参数：

- `dataset_head`: (int, optional)
  - 一般用于调试场景，只使用数据集前 N 条数据来供 Starwhale 模型来消费。

仅对 Server/Cloud 实例生效的参数：

- `runtime`: (Resource | str, optional)
  - Runtime URI 字符串或 Runtime 类型的 `Resource` 对象，表示要运行任务所需要的 Starwhale 运行时。
  - 当不指定该参数时，会尝试使用 Starwhale 模型包的内建运行时。
  - 创建 Standalone 实例下的任务，使用 Python 脚本所用的 Python 解释器环境作为自己的运行时，不支持通过 `runtime` 参数指定运行时。若有指定运行时的需要，可以使用 `swcli model run` 命令。
- `resource_pool`: (str, optional)
  - 指定任务运行在哪个资源池中，默认为 `default` 资源池。
- `ttl`: (int, optional)
  - 任务最大存活时间，超时后会被杀掉。
  - 参数单位为秒。
  - 默认情况下，ttl为0，表示没有超时限制，任务会按预期运行。
  - 当ttl小于0时，也表示没有超时限制。
- `dev_mode`: (bool, optional)
  - 是否设置为调试模式。开启此模式后，可以通过VSCode Web进入到相关环境中。
  - 默认不进入调试模式。
- `dev_mode_password`: (str, optional)
  - 调试模式下VSCode Web的登录密码。
  - 默认为空，此时会用任务的UUID作为密码，可以通过 `job.info().job.uuid` 获得。
- `overwrite_specs`: (Dict[str, Any], optional)
  - 支持设置 handler 的 `replicas` 和 `resources` 字段。
  - 若为空，则使用模型包中对应 handler 设置的值。
  - `overwrite_specs` 的 key 为 handler 的名字，比如 [mnist](https://github.com/star-whale/starwhale/tree/main/example/mnist) 的 evaluate handler: `mnist.evaluator:MNISTInference.evaluate`。
  - `overwrite_specs` 的 value 为设置的值，字典格式，支持设置 `replicas` 和 `resources` , 比如 `{"replicas": 1, "resources": {"memory": "1GiB"}}`。

### 使用示例 {#create-example}

- 创建一个 Cloud 实例的任务

```python
from starwhale import Job
project = "https://cloud.starwhale.cn/project/starwhale:public"
job = Job.create(
    project=project,
    model=f"{project}/model/mnist/version/v0",
    run_handler="mnist.evaluator:MNISTInference.evaluate",
    datasets=[f"{project}/dataset/mnist/version/v0"],
    runtime=f"{project}/runtime/pytorch",
    overwrite_specs={"mnist.evaluator:MNISTInference.evaluate": {"resources": "4GiB"},
                     "mnist.evaluator:MNISTInference.predict": {"resources": "8GiB", "replicas": 10}}
)
print(job.status)
```

- 创建一个 Standalone 实例的任务

```python
from starwhale import Job
job = Job.create(
    project="self",
    model="mnist",
    run_handler="mnist.evaluator:MNISTInference.evaluate",
    datasets=["mnist"],
)
print(job.status)
```
