---
title: 数据集版本控制
---

Starwhale 数据集支持细粒度的版本控制，能实现对每一行和每一列的变更追溯。Starwhale 的数据集版本控制具备一下特点：

- **线性版本**。设计上以简化操作为核心，不需要考虑branch、merge等复杂的操作。对大规模数据集进行branch merge操作几乎不可能。
- **细粒度控制**。最小单位是某一行的某一列变更后就可以生成一个新的版本。
- **版本唯一**。生成版本时，会产生一个唯一ID，当数据集拷贝到不同实例中，该ID不变，可以通过该ID加载对应的数据集内容。

## 构建数据集时生成版本

### SDK commit主动调用生成版本

当使用 Starwhale Dataset SDK 构建数据集时，当添加完数据后，调用 `commit` 方法时，会产生一个新的版本，得到一个UUID。

```python
from starwhale import dataset

ds1 = dataset("new-ds", create="empty")
ds1["train/0"] = {"a": 1, "b": 10}
ds1["train/1"] = {"a": 2, "b": 20}
version = ds1.commit()
print(version)
ds1.close()

ds2 = dataset(f"new-ds/version/{version}")
ds2["train/0"].features.c = 100
ds2["train/1"].features.a = -2
ds2["train/1"].features.b = -20
new_version = ds2.commit()
print(new_version)
ds2.close()

ds1 = dataset(f"new-ds/version/{version}", readonly=True)
print(f"---{version}")
print(ds1["train/0"].index, ds1["train/0"].features)
print(ds1["train/1"].index, ds1["train/1"].features)
ds2 = dataset(f"new-ds/version/{new_version}", readonly=True)
print(f"---{new_version}")
print(ds2["train/0"].index, ds2["train/0"].features)
print(ds2["train/1"].index, ds2["train/1"].features)
ds1.close()
ds2.close()
```

```console
n7uglydp4pbjrf5rjgct7ygmmwk6ldmzv5j3amaw
a4gyk3w3uxgklfthle2jjmxw3gx3k7m6icbzfhlf
---n7uglydp4pbjrf5rjgct7ygmmwk6ldmzv5j3amaw
train/0 {'a': 1, 'b': 10}
train/1 {'a': 2, 'b': 20}
---a4gyk3w3uxgklfthle2jjmxw3gx3k7m6icbzfhlf
train/0 {'a': 1, 'b': 10, 'c': 100}
train/1 {'a': -2, 'b': -20}
```

### swcli 命令行自动生成版本

对于 `swcli dataset build` 命令行构建数据集时，会自动产生一个新版本。

```console
❯ swcli dataset build --json https://modelscope.cn/api/v1/datasets/damo/100PoisonMpts/repo\?Revision\=master\&FilePath\=train.jsonl
🚧 start to build dataset bundle...
👷 uri local/project/self/dataset/json-gec8u5sv/version/latest
🌊 creating dataset local/project/self/dataset/json-gec8u5sv/version/f3iz4sdljjt7rmmfd4rkiak4vkbilp5pbrdgfgom...
🦋 update 906 records into dataset
🌺 congratulation! dataset build from ('https://modelscope.cn/api/v1/datasets/damo/100PoisonMpts/repo?Revision=master&FilePath=train.jsonl',) has been built. You can run  swcli dataset info json-gec8u5sv/version/f3iz4sdljjt7
```

### Tag 关联版本

Starwhale 数据集引入 Tag 概念，可以在 `commit` 或执行数据集构建命令时，指定Tag，实现数据集版本和Tag的关联，之后可以用Tag进行数据集加载。

- 数据集版本：一个唯一ID，类似 `f3iz4sdljjt7rmmfd4rkiak4vkbilp5pbrdgfgom`，保证在所有Starwhale 实例上ID唯一。
- 数据集Tag：可读字符串，类似 `t1`, `t2`, `v0.3`。数据集版本与Tag是一对多的关系。每个Tag只能标识一个版本，但每个数据集版本可以有多个Tag。
  - 手工指定Tag：`commit` 函数中的`tags` 参数，或在`swcli dataset build`命令行中通过`--tag`参数，指定一个或多个Tag。数据集拷贝到其他实例时，可以通过参数设置携带这些Tags。
  - 自动生成的自增Tag：在一个实例范围内，每次commit或build后，会产生类似 `v0`, `v1`, `v2` 这样的自增Tag。数据集拷贝的时候会忽略源实例上的这些Tag，在目的实例上会产生新的自增Tag。
  - `latest` Tag： 自动生成，最后一次调用commit或指定build命令，会将`latest`标记到该版本上。

## 通过版本加载数据集

通过 Dataset URI 可以加载任意位置的数据集，URI中的version字段，可以用唯一ID、唯一ID简写、自定义Tag、自增Tag和`latest` Tag等多种形式。

```python
from starwhale import dataset

# load with the latest version
print("latest version(default):", dataset("new-ds").loading_version)
print("latest version(specified):", dataset("new-ds/version/latest").loading_version)

# load with the full specified version
print("uuid version(full):", dataset("new-ds/version/n7uglydp4pbjrf5rjgct7ygmmwk6ldmzv5j3amaw").loading_version)
print("uuid version(prefix):", dataset("new-ds/version/n7uglydp4p").loading_version)

# load with tag
print("tag version(v0):", dataset("new-ds/version/v0").loading_version)
print("tag version(v1):", dataset("new-ds/version/v1").loading_version)
```

```console
latest version(default): a4gyk3w3uxgklfthle2jjmxw3gx3k7m6icbzfhlf
latest version(specified): a4gyk3w3uxgklfthle2jjmxw3gx3k7m6icbzfhlf
uuid version(full): n7uglydp4pbjrf5rjgct7ygmmwk6ldmzv5j3amaw
uuid version(prefix): n7uglydp4pbjrf5rjgct7ygmmwk6ldmzv5j3amaw
tag version(v0): n7uglydp4pbjrf5rjgct7ygmmwk6ldmzv5j3amaw
tag version(v1): a4gyk3w3uxgklfthle2jjmxw3gx3k7m6icbzfhlf
```
