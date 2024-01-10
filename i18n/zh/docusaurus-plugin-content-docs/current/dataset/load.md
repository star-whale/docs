---
title: 数据集加载
---

Starwhale 数据集构建完成后，可以在任意位置访问数据集，加载一条或多条数据，满足训练、评测和微调等数据消费的需求。

## 数据集加载的特点

- 加载本地 Standalone 实例或远端 Cloud/Server 实例的数据集，数据集唯一索引方式是数据集URI。

    ```python
    from starwhale import dataset

    local_latest_ds = dataset("mnist")
    remote_cloud_ds = dataset("https://cloud-cn.starwhale.cn/project/starwhale:helloworld/dataset/mnist64/v2")
    remote_server_ds = dataset("cloud://server/project/1/dataset/helloworld")
    ```

- 远端数据集按需预加载，数据不落盘。
  - Starwhale 数据集加载时，并不会将远端数据集完全下载到本地后再加载。只会加载目标索引关联的数据。
  - 根据目标索引特征，提前加载一些数据，提升Batch性能，用空间换时间。

  ![dataset-load](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/dataset-load.png)

- 数据索引方式灵活。Starwhale Dataset 类实现了 `__getitem__` 方法，提供key索引和分片索引方式读取相关数据。

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

## 数据集元素访问方式

### 下标方式

可以通过 key 值进行访问。当使用切片时，按根据key排序结果取范围。

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

需要注意，这里并不是list的切片语法，并不支持逆序索引，如 `ds[-1]` 或 `ds[1:-1]` 这种表达。

### 迭代方式

Starwhale Dataset 类实现了 `__iter__` 方法，可以对实例化的Dataset对象进行遍历迭代，这也是训练、评测和微调中常用的数据集访问方式，能获得最佳性能。

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

### fetch_one 方法

获取数据集第一个元素，一般用来做回归测试或查看一下数据集features结构。与 `head(n=1)` 等价。

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

### head 方法

获取数据集的n个元素，以列表方式返回。

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
