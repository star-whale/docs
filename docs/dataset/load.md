---
title: Dataset Loading
---

After Starwhale datasets are constructed, they can be accessed from any location to load one or multiple data items, meeting the needs for training, evaluation and fine-tuning.

## Features of Dataset Loading

- Load datasets from local Standalone instances or remote Cloud/Server instances. Datasets are uniquely indexed by dataset URI.

    ```python
    from starwhale import dataset

    local_latest_ds = dataset("mnist")
    remote_cloud_ds = dataset("https://cloud-cn.starwhale.cn/project/starwhale:helloworld/dataset/mnist64/v2")
    remote_server_ds = dataset("cloud://server/project/1/dataset/helloworld")
    ```

- Remote datasets are loaded on demand without local persistence.
  - When loading Starwhale datasets, remote datasets will not be completely downloaded before loading. Only related data based on target indexes will be loaded.
  - Some data will be loaded in advance based on target index features to improve batch performance by trading space for time.

  ![dataset-load](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/dataset-load.png)

- Flexible data indexing methods. Starwhale Dataset class implements `__getitem__` to provide key index and slice index methods to read related data.

    ```python
    from starwhale import dataset
    ds = dataset("mnist64")
    print(ds[0].features.img)
    print(ds[0].features.label)
    print(len(ds[:10]))
    ```

    ```console
    ArtifactType.Image, display:0, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding:
    0
    10
    ```

## Methods to Access Dataset Elements

### Indexing

Use key values for accessing. Use slices for ranges sorted by key.

```python
from starwhale import dataset

with dataset("empty-new") as ds:
    for i in range(0, 100):
        ds.append({"a": i})
    ds.commit()

ds = dataset("empty-new", readonly=True)
print(ds[0].features.a)
print(ds[99].features["a"])
print(ds[0:10])
print(ds[99:])
```

```console
0
99
10
2
```

Note that this is not the slicing syntax of a list and does not support reverse indexing expressions like ds[-1] or ds[1:-1].

### Iteration

Starwhale Dataset implements `__iter__` enabling iterating over Dataset instances. This is commonly used in training, evaluation and fine-tuning to achieve the best performance.

```python
from starwhale import dataset
ds = dataset("mnist64")
for idx, row in enumerate(ds):
    if idx > 10:
        break
    print(row.index, row.features)
```

```console
0 {'img': ArtifactType.Image, display:0, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 0}
1 {'img': ArtifactType.Image, display:1, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 1}
2 {'img': ArtifactType.Image, display:2, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 2}
4 {'img': ArtifactType.Image, display:4, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 4}
5 {'img': ArtifactType.Image, display:5, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 5}
3 {'img': ArtifactType.Image, display:3, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 3}
6 {'img': ArtifactType.Image, display:6, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 6}
7 {'img': ArtifactType.Image, display:7, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 7}
8 {'img': ArtifactType.Image, display:8, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 8}
9 {'img': ArtifactType.Image, display:9, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 9}
10 {'img': ArtifactType.Image, display:10, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 0}
```

### fetch_one Method

Get the first element of the dataset, usually for testing or viewing dataset features structure. Equivalent to `head(n=1)`.

```python
from starwhale import dataset
ds = dataset("mnist64")
item = ds.fetch_one()
print(item.index)
print(list(item.features.keys()))
```

```console
0
['img', 'label']
```

### head Method

Get the first n elements of the dataset, returned as a list.

```python
from starwhale import dataset
ds = dataset("mnist64")
items = ds.head(n=5)
print(items[0])
print(items[0].features)
print(len(items))
```

```console
0
{'img': ArtifactType.Image, display:0, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 0}
5
```
