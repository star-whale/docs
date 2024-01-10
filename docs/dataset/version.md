---
title: Dataset Versioning
---

Starwhale dataset supports fine-grained version control to trace changes to each row and column. The version control of Starwhale Dataset has the following features:

- **Linear versioning**. The design aims at simplifying operations without complex branch and merge operations. Branch merge on massive datasets is almost impossible.
- **Fine-grained control**. The minimum unit is a change to a column in a row that can generate a new version.
- **Unique version IDs**. When generating a version, a globally unique ID is produced. Copying datasets between instances will keep this ID unchanged. The dataset content can be loaded by this ID.

## Generating Versions During Dataset Construction

### SDK commit to Actively Create Versions

When constructing a dataset using the Starwhale Dataset SDK, after adding data, calling the `commit` method will produce a new version and obtain a UUID.

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

### swcli Command Line

`swcli dataset build` commands automatically generate a new version:

```console
❯ swcli dataset build --json https://modelscope.cn/api/v1/datasets/damo/100PoisonMpts/repo\?Revision\=master\&FilePath\=train.jsonl
🚧 start to build dataset bundle...
👷 uri local/project/self/dataset/json-gec8u5sv/version/latest
🌊 creating dataset local/project/self/dataset/json-gec8u5sv/version/f3iz4sdljjt7rmmfd4rkiak4vkbilp5pbrdgfgom...
🦋 update 906 records into dataset
🌺 congratulation! dataset build from ('https://modelscope.cn/api/v1/datasets/damo/100PoisonMpts/repo?Revision=master&FilePath=train.jsonl',) has been built. You can run  swcli dataset info json-gec8u5sv/version/f3iz4sdljjt7
```

### Tagging Versions

Starwhale introduces the concept of Tags, which can be specified during `commit` or when executing dataset construction commands to associate dataset versions with Tags, allowing dataset loading by Tag.

- Dataset version: A unique ID, similar to `f3iz4sdljjt7rmmfd4rkiak4vkbilp5pbrdgfgom`, ensuring the ID is unique across all Starwhale instances.
- Dataset Tag: A readable string, similar to `t1`, `t2`, `v0.3`. There is a one-to-many relationship between dataset versions and Tags. Each Tag can only identify one version, but each dataset version can have multiple Tags.
  - Manually specified Tags: The `tags` parameter in the `commit` function, or the `--tag` parameter in the `swcli dataset build` command, can be used to specify one or multiple Tags. When the dataset is copied to other instances, these Tags can be carried over by parameter settings.
  - Automatically generated incremental Tags: Within an instance, after each commit or build, an incremental Tag like `v0`, `v1`, `v2` is generated. When copying the dataset, these Tags are ignored on the source instance, and new incremental Tags are generated on the destination instance.
  - `latest` Tag: Automatically generated, the last commit or build command will mark the `latest` Tag on that version.

## Loading Datasets by Version

Datasets can be loaded from any location using the Dataset URI, where the version field in the URI can take various forms such as unique IDs, unique ID abbreviations, custom Tags, incremental Tags, and the `latest` Tag.

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
