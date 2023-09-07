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

### 使用示例

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
