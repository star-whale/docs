---
title: Starwhale Task SDK
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
  
### Usage Example

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
