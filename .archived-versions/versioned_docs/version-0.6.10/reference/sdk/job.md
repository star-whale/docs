---
title: Starwhale Job SDK
---

## job

Get a `starwhale.Job` object through the Job URI parameter, which represents a Job on Standalone/Server/Cloud instances.

```python
@classmethod
def job(
    cls,
    uri: str,
) -> Job:
```

### Parameters {#job-func-params}

- `uri`: (str, required)
  - Job URI format.

### Usage Example {#job-func-example}

```python
from starwhale import job

# get job object of uri=https://server/job/1
j1 = job("https://server/job/1")

# get job from standalone instance
j2 = job("local/project/self/job/xm5wnup")
j3 = job("xm5wnup")
```

## class starwhale.Job

`starwhale.Job` abstracts Starwhale Job and enables some information retrieval operations on the job.

### list

`list` is a classmethod that can list the jobs under a project.

```python
@classmethod
def list(
    cls,
    project: str = "",
    page_index: int = DEFAULT_PAGE_IDX,
    page_size: int = DEFAULT_PAGE_SIZE,
) -> Tuple[List[Job], Dict]:
```

### Parameters {#list-params}

- `project`: (str, optional)
  - Project URI, can be projects on Standalone/Server/Cloud instances.
  - If `project` is not specified, the project selected by `swcli project selected` will be used.
- `page_index`: (int, optional)
  - When getting the jobs list from Server/Cloud instances, paging is supported. This parameter specifies the page number.
    - Default is 1.
    - Page numbers start from 1.
  - Standalone instances do not support paging. This parameter has no effect.
- `page_size`: (int, optional)
  - When getting the jobs list from Server/Cloud instances, paging is supported. This parameter specifies the number of jobs returned per page.
    - Default is 1.
    - Page numbers start from 1.
  - Standalone instances do not support paging. This parameter has no effect.

### Usage Example {#list-example}

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

`get` is a classmethod that gets information about a specific job and returns a `Starwhale.Job` object. It has the same functionality and parameter definitions as the `starwhale.job` function.

### Usage Example {#get-example}

```python
from starwhale import Job

# get job object of uri=https://server/job/1
j1 = Job.get("https://server/job/1")

# get job from standalone instance
j2 = Job.get("local/project/self/job/xm5wnup")
j3 = Job.get("xm5wnup")
```

## summary

`summary` is a property that returns the data written to the summary table during the job execution, in dict type.

```python
@property
def summary(self) -> Dict[str, Any]:
```

### Usage Example {#summary-example}

```python
from starwhale import jobs

j1 = job("https://server/job/1")

print(j1.summary)
```

### tables

`tables` is a property that returns the names of tables created during the job execution (not including the summary table, which is created automatically at the project level), in list type.

```python
@property
def tables(self) -> List[str]:
```

### Usage Example {#tables-example}

```python
from starwhale import jobs

j1 = job("https://server/job/1")

print(j1.tables)
```

## get_table_rows

`get_table_rows` is a method that returns records from a data table according to the table name and other parameters, in iterator type.

```python
def get_table_rows(
    self,
    name: str,
    start: Any = None,
    end: Any = None,
    keep_none: bool = False,
    end_inclusive: bool = False,
) -> Iterator[Dict[str, Any]]:
```

### Parameters {#rows-params}

- `name`: (str, required)
  - Datastore table name. The one of table names obtained through the `tables` property is ok.
- `start`: (Any, optional)
  - The starting ID value of the returned records.
  - Default is None, meaning start from the beginning of the table.
- `end`: (Any, optional)
  - The ending ID value of the returned records.
  - Default is None, meaning until the end of the table.
  - If both `start` and `end` are None, all records in the table will be returned as an iterator.
- `keep_none`: (bool, optional)
  - Whether to return records with `None` values.
  - Default is False.
- `end_inclusive`: (bool, optional)
  - When `end` is set, whether the iteration includes the `end` record.
  - Default is False.

### Usage Example {#rows-example}

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

`status` is a property that returns the current real-time state of the Job as a string. The possible states are `CREATED`, `READY`, `PAUSED`, `RUNNING`, `CANCELLING`, `CANCELED`, `SUCCESS`, `FAIL`, and `UNKNOWN`.

```python
@property
def status(self) -> str:
```

## create

`create` is a classmethod that can create tasks on a Standalone instance or Server/Cloud instance, including tasks for Model Evaluation, Fine-tuning, Online Serving, and Developing. The function returns a Job object.

- `create` determines which instance the generated task runs on through the `project` parameter, including Standalone and Server/Cloud instances.
- On a Standalone instance, `create` creates a synchronously executed task.
- On a Server/Cloud instance, `create` creates an asynchronously executed task.

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

### Parameters {#create-params}

Parameters apply to all instances:

- `project`: (Project|str, required)
  - A `Project` object or Project URI string.
- `model`: (Resource|str, required)
  - Model URI string or `Resource` object of Model type, representing the Starwhale model package to run.
- `run_handler`: (str, required)
  - The name of the runnable handler in the Starwhale model package, e.g. the `evaluate` handler of [mnist](https://github.com/star-whale/starwhale/tree/main/example/mnist): `mnist.evaluator:MNISTInference.evaluate`.
- `datasets`: (List[str | Resource], optional)
  - Datasets required for the Starwhale model package to run, not required.

Parameters only effective for Standalone instances:

- `dataset_head`: (int, optional)
  - Generally used for debugging scenarios, only uses the first N data in the dataset for the Starwhale model to consume.

Parameters only effective for Server/Cloud instances:

- `runtime`: (Resource | str, optional)
  - Runtime URI string or `Resource` object of Runtime type, representing the Starwhale runtime required to run the task.
  - When not specified, it will try to use the built-in runtime of the Starwhale model package.
  - When creating tasks under a Standalone instance, the Python interpreter environment used by the Python script is used as its own runtime. Specifying a runtime via the `runtime` parameter is not supported. If you need to specify a runtime, you can use the `swcli model run` command.
- `resource_pool`: (str, optional)
  - Specify which resource pool the task runs in, default to the `default` resource pool.
- `ttl`: (int, optional)
  - Maximum lifetime of the task, will be killed after timeout.
  - The unit is seconds.
  - By default, ttl is 0, meaning no timeout limit, and the task will run as expected.
  - When ttl is less than 0, it also means no timeout limit.
- `dev_mode`: (bool, optional)
  - Whether to set debug mode. After turning on this mode, you can enter the related environment through VSCode Web.
  - Debug mode is off by default.
- `dev_mode_password`: (str, optional)
  - Login password for VSCode Web in debug mode.
  - Default is empty, in which case the task's UUID will be used as the password, which can be obtained via `job.info().job.uuid`.
- `overwrite_specs`: (Dict[str, Any], optional)
  - Support setting the `replicas` and `resources` fields of the handler.
  - If empty, use the values set in the corresponding handler of the model package.
  - The key of `overwrite_specs` is the name of the handler, e.g. the `evaluate` handler of [mnist](https://github.com/star-whale/starwhale/tree/main/example/mnist): `mnist.evaluator:MNISTInference.evaluate`.
  - The value of `overwrite_specs` is the set value, in dictionary format, supporting settings for `replicas` and `resources`, e.g. `{"replicas": 1, "resources": {"memory": "1GiB"}}`.

### Examples {#create-example}

- create a Cloud Instance job

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

- create a Standalone Instance job

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
