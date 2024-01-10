---
title: Starwhale 数据集 SDK
---

## dataset

获取 `starwhale.Dataset` 对象，包括创建新的数据集和加载已经存在的数据集两种方式。

```python
@classmethod
def dataset(
    cls,
    uri: t.Union[str, Resource],
    create: str = _DatasetCreateMode.auto,
    readonly: bool = False,
) -> Dataset:
```

### 参数 {#dataset-params}

- `uri`: (str 或 Resource, required)
  - Dataset URI 格式的字符串或 Resource 对象。
- `create`: (str, optional)
  - 数据集创建模式，包括 `auto`, `empty` 和 `forbid` 三种方式。
    - `auto` 模式: 如果数据集已经存在，不会自动创建数据集；如果数据集不存在，则自动创建数据集。
    - `empty` 模式: 如果数据集已经存在，则抛出异常；如果数据集不存在，则自动创建数据集。
    - `forbid` 模式: 如果数据集已经存在，则不做任何事情；如果数据集不存在，则抛出异常。`forbid` 模式能确保数据集存在。
  - `auto` 模式是默认值。
- `readonly`: (bool, optional)
  - 对于已经存在的数据集，可以指定 `readonly=True` 保证数据集以只读方式加载。
  - 默认值为 `False`。

### 使用示例 {#dataset-example}

```python
from starwhale import dataset, Image

# create a new dataset named mnist, and add a row into the dataset
# dataset("mnist") is equal to dataset("mnist", create="auto")
ds = dataset("mnist")
ds.exists()  # return False, "mnist" dataset is not existing.
ds.append({"img": Image(), "label": 1})
ds.commit()
ds.close()

# load a cloud instance dataset in readonly mode
ds = dataset("cloud://remote-instance/project/starwhale/dataset/mnist", readonly=True)
labels = [row.features.label in ds]
ds.close()

# load a read/write dataset with a specified version
ds = dataset("mnist/version/mrrdczdbmzsw")
ds[0].features.label = 1
ds.commit()
ds.close()

# create an empty dataset
ds = dataset("mnist-empty", create="empty")

# ensure the dataset existence
ds = dataset("mnist-existed", create="forbid")
```

## class starwhale.Dataset

`starwhale.Dataset` 实现 Starwhale 数据集的抽象，能够对Standalone/Server/Cloud 实例上的数据集进行操作。

### from_huggingface

`from_huggingface` 是一个 classmethod 方法，能够将 Huggingface 上的数据集转化为 Starwhale 数据集。

```python
def from_huggingface(
    cls,
    name: str,
    repo: str,
    subset: str | None = None,
    split: str | None = None,
    revision: str = "main",
    alignment_size: int | str = D_ALIGNMENT_SIZE,
    volume_size: int | str = D_FILE_VOLUME_SIZE,
    mode: DatasetChangeMode | str = DatasetChangeMode.PATCH,
    cache: bool = True,
    tags: t.List[str] | None = None,
) -> Dataset:
```

#### 参数 {#hf-params}

- `name`: (str, required)
  - 数据集名称。
- `repo`: (str, required)
  - Huggingface的数据集 Repo 名称，比如： [samsum](https://huggingface.co/datasets/samsum), [fka/awesome-chatgpt-prompts](https://huggingface.co/datasets/fka/awesome-chatgpt-prompts)。
- `subset`: (str, optional)
  - Huggingface的数据集 subset 名称，如果HF数据集有多个 subsets, 您务必要指定一个 subset。
- `split`: (str, optional)
  - Huggingface的数据集中 Split 名称。如果没有指定 split，则数据集中所有的 splits 数据都会被构建。
- `revision`: (str, optional)
  - Huggingface的数据集版本，默认是 `main`，即main分支的最新一次提交。参数接受branch, tag 或 commit hash。
- `alignment_size`: (int|str, optional)
  - 数据集 blob 文件中数据对齐的尺寸。
  - 默认值为 `128`，即128个字节对齐。
- `volume_size`: (int|str, optional)
  - 数据集 blob 文件的最大尺寸，超过后会产生一个新的 blob 文件。
  - 默认值为 `64MB`，即每个blob文件64MB大小。
- `mode`: (str|DatasetChangeMode, optional)
  - 数据集更新的模式，包括 `patch` 模式和 `overwrite` 模式。
  - 默认为 `patch` 模式。
- `cache`: (bool, optional)
  - 是否使用 Huggingface 的本地缓存。
  - 默认使用缓存。
  - 缓存 = 下载文件缓存 + 本地Huggingface 数据集缓存。
- `tags`: (List[str], optional)
  - 用户自定义的数据集标签。

#### 使用示例 {#hf-example}

```python
from starwhale import Dataset
myds = Dataset.from_huggingface("mnist", "mnist")
print(myds[0])
```

```python
from starwhale import Dataset
myds = Dataset.from_huggingface("mmlu", "cais/mmlu", subset="anatomy", split="auxiliary_train", revision="7456cfb")
```

### from_json

`from_json` 是一个 classmethod 方法，能够将 json 字符串转化为 Starwhale 数据集。

```python
@classmethod
def from_json(
    cls,
    name: str,
    json_text: str,
    field_selector: str = "",
    alignment_size: int | str = D_ALIGNMENT_SIZE,
    volume_size: int | str = D_FILE_VOLUME_SIZE,
    mode: DatasetChangeMode | str = DatasetChangeMode.PATCH,
    tags: t.List[str] | None = None,
) -> Dataset:
```

#### 参数 {#json-params}

- `name`: (str, required)
  - 数据集名称
- `json_text`: (str, required)
  - json 字符串，`from_json` 函数会序列化该字符串为 Python 对象，然后开始构建 Starwhale 数据集。
- `field_selector`: (str, optional)
  - 可以提取 json_text 中特定的 array 结构。
  - 默认从 json 的根提取数据。
- `alignment_size`: (int|str, optional)
  - 数据集 blob 文件中数据对齐的尺寸。
  - 默认值为 `128`，即128个字节对齐。
- `volume_size`: (int|str, optional)
  - 数据集 blob 文件的最大尺寸，超过后会产生一个新的 blob 文件。
  - 默认值为 `64MB`，即每个blob文件64MB大小。
- `mode`: (str|DatasetChangeMode, optional)
  - 数据集更新的模式，包括 `patch` 模式和 `overwrite` 模式。
  - 默认为 `patch` 模式。
- `tags`: (List[str], optional)
  - 用户自定义的数据集标签。

#### 使用示例 {#json-example}

```python
from starwhale import Dataset
myds = Dataset.from_json(
    name="translation",
    json_text='[{"en":"hello","zh-cn":"你好"},{"en":"how are you","zh-cn":"最近怎么样"}]'
)
print(myds[0].features.en)
```

```python
from starwhale import Dataset
myds = Dataset.from_json(
    name="translation",
    json_text='{"content":{"child_content":[{"en":"hello","zh-cn":"你好"},{"en":"how are you","zh-cn":"最近怎么样"}]}}',
    field_selector="content.child_content"
)
print(myds[0].features["zh-cn"])
```

### from_folder

`from_folder` 是一个 classmethod 方法，能够读取指定目录中的 Image/Video/Audio 数据，并将其自动转化为 Starwhale 数据集。该函数支持如下特性：

- 能够递归的搜索目标目录及子目录
- 支持三种类型的文件提取：
  - `image`: 支持 `png/jpg/jpeg/webp/svg/apng` 图片类型。图片文件会被转化为 `Starwhale.Image` 类型。
  - `video`: 支持 `mp4/webm/avi` 视频类型。视频文件会被转化为 `Starwhale.Video` 类型。
  - `audio`: 支持 `mp3/wav` 音频类型。音频文件会被转化为 `Starwhale.Audio` 类型。
- 每个文件对应数据集的一条记录，文件对应的数据集字段名称为 `file`。
- 若 `auto_label=True`，则会使用父目录的名称作为该条数据的标签，对应 `label` 字段。根目录下的文件，则不会被打标签。
- 若存在与 image/video/audio 同名的 txt 文件，则该文件内容会被作为 `caption` 字段内容存放到数据集中。
- 若根目录存在 `metadata.csv` 或 `metadata.jsonl` 文件，则会自动读取文件的内容，并将其通过文件路径名作为关联，存入数据集中，可以用来指定 meta 信息。
  - `metadata.csv` 和 `metadata.jsonl` 文件是互斥的，当都存在的时候，程序会抛出异常。
  - `metadata.csv` 和 `metadata.jsonl` 每行记录中需要包含 `file_name` 字段，指向对应文件的路径。
  - `metadata.csv` 或 `metadata.jsonl` 对于数据集构建是可选的。

```python
@classmethod
def from_folder(
    cls,
    folder: str | Path,
    kind: str | DatasetFolderSourceType,
    name: str | Resource = "",
    auto_label: bool = True,
    alignment_size: int | str = D_ALIGNMENT_SIZE,
    volume_size: int | str = D_FILE_VOLUME_SIZE,
    mode: DatasetChangeMode | str = DatasetChangeMode.PATCH,
    tags: t.List[str] | None = None,
) -> Dataset:
```

#### 参数 {#folder-params}

- `folder`: (str|Path, required)
  - 文件夹路径
- `kind`: (str|DatasetFolderSourceType, required)
  - 数据类型设置，目前支持 `image`, `video` 和 `audio` 三种类型。
  - 会根据设置的 `kind` 值，在 `folder` 中递归寻找对应类型的文件。其他类型文件会被忽略掉。
- `name`: (str|Resource, optional)
  - 数据集名称。
  - 若不指定，则使用目录名称作为数据集名称。
- `auto_label`: (bool, optional)
  - 是否根据父目录的名字自动对每条记录打标签。
  - 默认为 `True`。
- `alignment_size`: (int|str, optional)
  - 数据集 blob 文件中数据对齐的尺寸。
  - 默认值为 `128`，即128个字节对齐。
- `volume_size`: (int|str, optional)
  - 数据集 blob 文件的最大尺寸，超过后会产生一个新的 blob 文件。
  - 默认值为 `64MB`，即每个blob文件64MB大小。
- `mode`: (str|DatasetChangeMode, optional)
  - 数据集更新的模式，包括 `patch` 模式和 `overwrite` 模式。
  - 默认为 `patch` 模式。
- `tags`: (List[str], optional)
  - 用户自定义的数据集标签。

#### 使用示例 ${folder-example}

- 函数调用示例

  ```python
  from starwhale import Dataset

  # create a my-image-dataset dataset from /path/to/image folder.
  ds = Dataset.from_folder(
      folder="/path/to/image",
      kind="image",
      name="my-image-dataset"
  )
  ```

- `caption` 示例

  ```bash
  folder/dog/1.png
  folder/dog/1.txt
  ```

  `1.txt` 中的内容，会填充到 `1.png` 所在行中 `caption` 字段中。

- `metadata.csv` 和 `metadata.jsonl` 示例

  `metadata.csv` 内容：

  ```csv
  file_name, caption
  1.png, dog
  2.png, cat
  ```

  `metadata.jsonl` 内容：

  ```jsonl
  {"file_name": "1.png", "caption": "dog"}
  {"file_name": "2.png", "caption": "cat"}
  ```

- 自动 label 示例

  ```bash
  folder/dog/1.png
  folder/cat/2.png
  folder/dog/3.png
  folder/cat/4.png
  ```

  生成的数据集中包含四条数据，分为 `dog` 和 `cat` 两类。

### \_\_iter\_\_

`__iter__` 是一个 method 方法，能否对数据集进行迭代。

```python
from starwhale import dataset

ds = dataset("mnist")

for item in ds:
  print(item.index)
  print(item.features.label)  # label 和 img 是 mnist数据集中的数据列
  print(item.features.img)
```

### batch_iter

`batch_iter` 是一个 method 方法，能否批量的进行数据集迭代。

```python
def batch_iter(
    self, batch_size: int = 1, drop_not_full: bool = False
) -> t.Iterator[t.List[DataRow]]:
```

#### 参数 {#batch-params}

- `batch_size`: (int, optional)
  - batch的大小，默认值为1。
- `drop_not_full`: (bool, optional)
  - 最后一组batch数据数量小于 `batch_size` 时，该组数据是否会被抛弃掉。
  - 默认是不抛弃。

#### 使用示例 {#batch-example}

```python
from starwhale import dataset

ds = dataset("mnist")
for batch_rows in ds.batch_iter(batch_size=2):
    assert len(batch_rows) == 2
    print(batch_rows[0].features)
```

### \_\_getitem\_\_

`__getitem__` 是一个 method 方法，能提供数据集中某些行数据的获取，操作方式类似 Python 的 dict 和 list 类型。

```python
from starwhale import dataset

ds = dataset("mock-int-index")

# if the index type is string
ds["str_key"]  # get the DataRow by the "str_key" string key
ds["start":"end"]  # get a slice of the dataset by the range ("start", "end")

ds = dataset("mock-str-index")
# if the index type is int
ds[1]  # get the DataRow by the 1 int key
ds[1:10:2] # get a slice of the dataset by the range (1, 10), step is 2
```

### \_\_setitem\_\_

`__setitem__` 是一个 method 方法，能提供数据集中行数据的更新，操作方式类似 Python 的 dict 类型。`__setitem__` 支持多线程并行插入数据。

```python
def __setitem__(
    self, key: t.Union[str, int], value: t.Union[DataRow, t.Tuple, t.Dict]
) -> None:
```

#### 参数 {#set-params}

- `key`: (int|str, required)
  - `key` 即为数据集中每行的 `index`，类型为 int 或 str，一个数据集中只接受一种类型。
- `value`: (DataRow|tuple|dict, required)
  - `value` 即为数据集中每行的 `features`，一般建议用 Python 的 dict 类型。

#### 使用示例 {#set-example}

- 插入数据

向 `test` 数据中插入两条数据，index分别为 `test` 和 `test2`。

```python
from starwhale import dataset

with dataset("test") as ds:
  ds["test"] = {"txt": "abc", "int": 1}
  ds["test2"] = {"txt": "bcd", "int": 2}
  ds.commit()
```

- 并行插入数据

```python
from starwhale import dataset, Binary
from concurrent.futures import as_completed, ThreadPoolExecutor

ds = dataset("test")

def _do_append(_start: int) -> None:
  for i in range(_start, 100):
    ds.append((i, {"data": Binary(), "label": i}))

pool = ThreadPoolExecutor(max_workers=10)
tasks = [pool.submit(_do_append, i * 10) for i in range(0, 9)]

ds.commit()
ds.close()
```

### \_\_delitem\_\_

`__delitem__` 是一个 method 方法，用来删除数据集中的某些行数据。

```python
def __delitem__(self, key: _ItemType) -> None:
```

```python
from starwhale import dataset

ds = dataset("existed-ds")
del ds[6:9]
del ds[0]
ds.commit()
ds.close()
```

### append

`append` 是一个 method 方法，用来向数据集中添加数据，类似 Python list 的 append 函数。

- 添加 features dict，每行数据自动 index 为 int 类型，从0开始自增。

  ```python
  from starwhale import dataset, Image

  with dataset("new-ds") as ds:
    for i in range(0, 100):
      ds.append({"label": i, "image": Image(f"folder/{i}.png")})
    ds.commit()
  ```

- 添加 index + features dict，数据集中每行数据的 index 不会被自动处理。

  ```python
  from dataset import dataset, Image

  with dataset("new-ds") as ds:
    for i in range(0, 100):
      ds.append((f"index-{i}", {"label": i, "image": Image(f"folder/{i}.png")}))

    ds.commit()
  ```

### extend

`extend` 是一个 method 方法，用来向数据集中批量添加数据，类似 Python list 的 extend 函数。

```python
from starwhale import dataset, Text

ds = dataset("new-ds")
ds.extend([
    (f"label-{i}", {"text": Text(), "label": i}) for i in range(0, 10)
  ])
ds.commit()
ds.close()
```

### commit

`commit` 是一个 method 方法，调用 commit 时会将当前缓存中数据 flush 到存储中，并产生一个数据集版本，后续可以用这个版本信息加载相应的数据集内容。

对于一个数据集，如果添加一些数据后，并没有调用 `commit` 方法，而是直接调用 `close` 或退出进程，那么这些数据依旧会写入到数据集中，只是没有一个生成一个新的版本。

```python
@_check_readonly
def commit(
    self,
    tags: t.Optional[t.List[str]] = None,
    message: str = "",
    force_add_tags: bool = False,
    ignore_add_tags_errors: bool = False,
) -> str:
```

#### 参数 {#commit-params}

- `tags`: (List(str), optional)
  - 指定 tags，可以指定多个tag。
- `message`: (str, optional)
  - 提交信息，默认为空。
- `force_add_tags`: (bool, optional)
  - 当给改版本添加标签时，对于 server/cloud 实例，若标签已经被应用到其他数据集版本时，可以使用 `force_add_tags=True` 参数强制将标签添加到此版本上，否则会抛出异常。
  - 默认为 `False` 。
- `ignore_add_tags_errors`: (bool, optional)
  - 忽略添加标签是否抛出的异常。
  - 默认为 `False` 。

#### 使用示例 {#commit-example}

```python
from starwhale import dataset
with dataset("mnist") as ds:
    ds.append({"label": 1})
    ds.commit(message="init commit")
```

### readonly

`readonly` 是一个 property 属性，表示数据集是否只读，返回值为 bool 类型。

```python
from starwhale import dataset
ds = dataset("mnist", readonly=True)
assert ds.readonly
```

### loading_version

`loading_version` 是一个 property 属性，字符串类型。

- 当加载一个已经存在的数据集时，返回的是数据集加载的对应版本。
- 对加载一个不存在的数据集时，返回的是 `pending_commit_version`。

### pending_commit_version

`pending_commit_version` 是一个 property 属性，字符串类型，表示待提交的版本信息。当调用 `commit` 方法后，`pending_commit_version` 会变成 `committed_version`。

### committed_version

`committed_version` 是一个 property 属性，字符串类型，表示已经调用 `commit` 方法后生成的版本信息。当没有调用 `commit` 方法时，访问该属性时程序会抛出异常。

### remove

`remove` 是一个 method 方法，等价于 `swcli dataset remove` 命令，能够删除数据集。

```python
def remove(self, force: bool = False) -> None:
```

### recover

`recover` 是一个 method 方法，等价于 `swcli dataset recover` 命令，能够对软删除且未GC的数据集进行恢复。

```python
def recover(self, force: bool = False) -> None:
```

### summary

`summary` 是一个 method 方法，等价于 `swcli dataset summary` 命令，返回数据集摘要信息。

```python
def summary(self) -> t.Optional[DatasetSummary]:
```

### history

`history` 是一个 method 方法，等价于 `swcli dataset history` 命令，返回数据集的历史记录。

```python
def history(self) -> t.List[t.Dict]:
```

### flush

`flush` 是一个 method 方法，能够将内存中暂存的数据刷到持久化存储中。`commit` 和 `close` 方法会自动调用 `flush` 。

### close

`close` 是一个 method 方法，关闭已经打开的数据集相关链接。`Dataset` 也实现了 contextmanager，使用 `with` 语法后可以自动关闭数据集，不需要主动调用 `close` 方法。

```python
from starwhale import dataset

ds = dataset("mnist")
ds.close()

with dataset("mnist") as ds:
  print(ds[0])
```

### head

`head` 是一个 method 方法，能够显示数据集前n行数据，等价于 `swcli dataset head` 命令。

```python
def head(self, n: int = 5, skip_fetch_data: bool = False) -> t.List[DataRow]:
```

### fetch_one

`fetch_one` 是一个 method 方法，获得数据集的第一条记录，相当于 `head(n=1)[0]`。

### list

`list` 是一个 classmethod 方法，能够列出项目 URI 下的 Starwhale 数据集，等价于 `swcli dataset list` 命令。

```python
@classmethod
def list(
    cls,
    project_uri: t.Union[str, Project] = "",
    fullname: bool = False,
    show_removed: bool = False,
    page_index: int = DEFAULT_PAGE_IDX,
    page_size: int = DEFAULT_PAGE_SIZE,
) -> Tuple[DatasetListType, Dict[str, Any]]:
```

### copy

`copy` 是一个 method 方法，能够复制数据到其他实例上，等价于 `swcli dataset copy` 命令。

```python
def copy(
  self,
  dest_uri: str,
  dest_local_project_uri: str = "",
  force: bool = False,
  mode: str = DatasetChangeMode.PATCH.value,
  ignore_tags: t.List[str] | None = None,
) -> None:
```

#### 参数 {#copy-params}

- `dest_uri`: (str, required)
  - Dataset URI
- `dest_local_project_uri`: (str, optional)
  - 从远端复制到本地 Standalone 实例时，可以指定对应的项目 URI。
- `force`: (bool, optional)
  - 当目标实例上已经有相同版本的数据集时，是否强制覆盖。
  - 默认不覆盖。
  - 当复制标签到远端 Server/Cloud 实例时，若标签已经被其他版本使用，使用 `force=True` 参数可以强制变更标签到本版本上。
- `mode`: (str, optional)
  - 数据集复制模式，分为 `patch` 模式 和 `overwrite` 模式，默认为 `patch` 。
  - `patch`: 使用补丁方式更新数据集，只更新计划变更的行和列，在新生成的版本中仍能读取到未受影响的行和列。
  - `overwrite`: 使用覆盖方式更新数据集，会将原来的所有行都删除，然后再进行更新，在新生成的版本中读取不到老数据。但请放心，删除的数据依旧可以通过旧版本进行访问。
- `ignore_tags` (List[str], optional)
  - 复制数据集时，可以忽略的自定义标签。
  - 默认会复制所有用户自定义标签到其他实例中。
  - 复制标签会忽略 `latest` 和 `^v\d+$` 内建标签。

#### 使用示例 {#copy-example}

```python
from starwhale import dataset
ds = dataset("mnist")
ds.copy("cloud://remote-instance/project/starwhale")
```

### to_pytorch

`to_pytorch` 是一个 method 方法，能够将 Starwhale 数据集转化为 Pytorch 的 `torch.utils.data.Dataset` 类型，可以进一步传给 `torch.utils.data.DataLoader` 进行使用。

**需要注意的是，`to_pytorch` 函数返回的是 Pytorch 的 `IterableDataset`**。

```python
def to_pytorch(
    self,
    transform: t.Optional[t.Callable] = None,
    drop_index: bool = True,
    skip_default_transform: bool = False,
) -> torch.utils.data.Dataset:
```

#### 参数 {#pytorch-params}

- `transform`: (callable, optional)
  - 支持用户自定义变换函数，能够按需转化数据类型。
- `drop_index`: (bool, optional)
  - 是否抛弃掉 `index` 字段。
- `skip_default_transform`: (bool, optional)
  - 如果没有设置 `transform`， 默认状态下会使用 Starwhale 内建的 transform 函数，对数据进行转化，可以通过 `skip_default_transform` 参数禁用内建数据转化。

#### 使用示例 {#pytorch-example}

```python
import torch.utils.data as tdata
from starwhale import dataset

ds = dataset("mnist")

torch_ds = ds.to_pytorch()
torch_loader = tdata.DataLoader(torch_ds, batch_size=2)
```

```python
import torch.utils.data as tdata
from starwhale import dataset

with dataset("mnist") as ds:
    for i in range(0, 10):
        ds.append({"txt": Text(f"data-{i}"), "label": i})

    ds.commit()

def _custom_transform(data: t.Any) -> t.Any:
    data = data.copy()
    txt = data["txt"].to_str()
    data["txt"] = f"custom-{txt}"
    return data

torch_loader = tdata.DataLoader(
    dataset(ds.uri).to_pytorch(transform=_custom_transform), batch_size=1
)
item = next(iter(torch_loader))
assert isinstance(item["label"], torch.Tensor)
assert item["txt"][0] in ("custom-data-0", "custom-data-1")
```

### to_tensorflow

`to_tensorflow` 是一个 method 方法，能够将 Starwhale 数据集转化为 Tensorflow 的 `tensorflow.data.Dataset` 类型。

```python
def to_tensorflow(self, drop_index: bool = True) -> tensorflow.data.Dataset:
```

#### 参数 {#tf-params}

- `drop_index`: (bool, optional)
  - 是否抛弃掉 `index` 字段。

#### 使用示例 {#tf-example}

```python
from starwhale import dataset
import tensorflow as tf

ds = dataset("mnist")
tf_ds = ds.to_tensorflow(drop_index=True)
assert isinstance(tf_ds, tf.data.Dataset)
```

### with_builder_blob_config

`with_builder_blob_config` 是一个 method 方法，用来设置 Starwhale 数据集中 blob 的相关属性信息。需要在变更数据之前调用。

```python
def with_builder_blob_config(
    self,
    volume_size: int | str | None = D_FILE_VOLUME_SIZE,
    alignment_size: int | str | None = D_ALIGNMENT_SIZE,
) -> Dataset:
```

#### 参数 {#builder-params}

- `volume_size`: (int|str, optional)
  - 单个数据集 blob 文件的大小。
  - 默认值为 64MB。
  - 当类型为 int 时，单位为 Bytes。
  - 当类型为 str 是，格式类似 `1GB`, `64MB`。
- `alignment_size`: (int|str, optional)
  - 数据集 blob 文件中数据对齐的大小
  - 默认值为 128个字节。
  - 与 `volume_size` 一样的类型解析。

#### 使用示例 {#builder-example}

```python
from starwhale import dataset, Binary

ds = dataset("mnist").with_builder_blob_config(volume_size="32M", alignment_size=128)
ds.append({"data": Binary(b"123")})
ds.commit()
ds.close()
```

### with_loader_config

`with_loader_config` 是一个 method 方法，用来设置 Starwhale 数据集 loader 的过程参数。

```python
def with_loader_config(
    self,
    num_workers: t.Optional[int] = None,
    cache_size: t.Optional[int] = None,
    field_transformer: t.Optional[t.Dict] = None,
) -> Dataset:
```

#### 参数 {#loader-params}

- `num_workers`: (int, optional)
  - 加载数据集的 worker 数目，默认为2。
- `cache_size`: (int, optional)
  - 预加载的数据的数量，默认为20条。
- `field_transformer`: (dict, optional)
  - features 字段名称的变换。

#### 使用示例 {#loader-example}

```python
from starwhale import Dataset, dataset
Dataset.from_json(
    "translation",
    '[{"en":"hello","zh-cn":"你好"},{"en":"how are you","zh-cn":"最近怎么样"}]'
)
myds = dataset("translation").with_loader_config(field_transformer={"en": "en-us"})
assert myds[0].features["en-us"] == myds[0].features["en"]
```

```python
from starwhale import Dataset, dataset
Dataset.from_json(
    "translation2",
    '[{"content":{"child_content":[{"en":"hello","zh-cn":"你好"},{"en":"how are you","zh-cn":"最近怎么样"}]}}]'
)
myds = dataset("translation2").with_loader_config(field_transformer={"content.child_content[0].en": "en-us"})
assert myds[0].features["en-us"] == myds[0].features["content"]["child_content"][0]["en"]
```
