---
title: Starwhale Dataset SDK
---

## dataset

Get `starwhale.Dataset` object, by creating new datasets or loading existing datasets.

```python
@classmethod
def dataset(
    cls,
    uri: t.Union[str, Resource],
    create: str = _DatasetCreateMode.auto,
    readonly: bool = False,
) -> Dataset:
```

### Parameters {#dataset-params}

- `uri`: (str or Resource, required)
  - The dataset uri or Resource object.
- `create`: (str, optional)
  - The mode of dataset creating. The options are `auto`, `empty` and `forbid`.
    - `auto` mode: If the dataset already exists, creation is ignored. If it does not exist, the dataset is created automatically.
    - `empty` mode: If the dataset already exists, an Exception is raised; If it does not exist, an empty dataset is created. This mode ensures the creation of a new, empty dataset.
    - `forbid` mode: If the dataset already exists, nothing is done.If it does not exist, an Exception is raised. This mode ensures the existence of the dataset.
  - The default is `auto`.
- `readonly`: (bool, optional)
  - For an existing dataset, you can specify the `readonly=True` argument to ensure the dataset is in readonly mode.
  - Default is `False`.

### Examples {#dataset-example}

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

`starwhale.Dataset` implements the abstraction of a Starwhale dataset, and can operate on datasets in Standalone/Server/Cloud instances.

### from_huggingface

`from_huggingface` is a classmethod that can convert a Huggingface dataset into a Starwhale dataset.

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
) -> Dataset:
```

#### Parameters {#hf-params}

- `name`: (str, required)
  - dataset name.
- `repo`: (str, required)
  - The huggingface datasets repo name, for example: [samsum](https://huggingface.co/datasets/samsum), [fka/awesome-chatgpt-prompts](https://huggingface.co/datasets/fka/awesome-chatgpt-prompts)。
- `subset`: (str, optional)
  - The subset name. If the huggingface dataset has multiple subsets, you must specify the subset name.
- `split`: (str, optional)
  - The split name. If the split name is not specified, the all splits dataset will be built.
- `revision`: (str, optional)
  - The huggingface datasets revision. The default value is `main`. If the split name is not specified, the all splits dataset will be built.
- `alignment_size`: (int|str, optional)
  - The blob alignment size.
  - The default value is 128 Bytes.
- `volume_size`: (int|str, optional)
  - The maximum size of a dataset blob file. A new blob file will be generated when the size exceeds this limit.
  - The default value is `64MB`.
- `mode`: (str|DatasetChangeMode, optional)
  - The dataset change mode. The default value is `patch`. Mode choices are `patch` and `overwrite`.
- `cache`: (bool, optional)
  - Whether to use huggingface dataset cache(download + local hf dataset).
  - The default value is True.

#### Examples {#hf-example}

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

`from_json` is a classmethod that can convert a json text into a Starwhale dataset.

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
) -> Dataset:
```

#### Parameters {#json-params}

- `name`: (str, required)
  - Dataset name.
- `json_text`: (str, required)
  - A json string. The `from_json` function deserializes this string into Python objects to start building the Starwhale dataset.
- `field_selector`: (str, optional)
  - The filed from which you would like to extract dataset array items.
  - The default value is "" which indicates that the json object is an array contains all the items.
- `alignment_size`: (int|str, optional)
  - The blob alignment size.
  - The default value is 128 Bytes.
- `volume_size`: (int|str, optional)
  - The maximum size of a dataset blob file. A new blob file will be generated when the size exceeds this limit.
  - The default value is `64MB`.
- `mode`: (str|DatasetChangeMode, optional)
  - The dataset change mode. The default value is `patch`. Mode choices are `patch` and `overwrite`.

#### Examples {#json-example}

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

`from_folder` is a classmethod that can read Image/Video/Audio data from a specified directory and automatically convert them into a Starwhale dataset. This function supports the following features:

- It can recursively search the target directory and its subdirectories
- Supports extracting three types of files:
  - `image`: Supports `png/jpg/jpeg/webp/svg/apng` image types. Image files will be converted to `Starwhale.Image` type.
  - `video`: Supports `mp4/webm/avi` video types. Video files will be converted to `Starwhale.Video` type.
  - `audio`: Supports `mp3/wav` audio types. Audio files will be converted to `Starwhale.Audio` type.
- Each file corresponds to one record in the dataset, with the file stored in the `file` field.
- If `auto_label=True`, the parent directory name will be used as the label for that record, stored in the `label` field. Files in the root directory will not be labeled.
- If a txt file with the same name as an image/video/audio file exists, its content will be stored as the `caption` field in the dataset.
- If `metadata.csv` or `metadata.jsonl` exists in the root directory, their content will be read automatically and associated to records by file path as meta information in the dataset.
  - `metadata.csv` and `metadata.jsonl` are mutually exclusive. An exception will be thrown if both exist.
  - Each record in `metadata.csv` and `metadata.jsonl` must contain a `file_name` field pointing to the file path.
  - `metadata.csv` and `metadata.jsonl` are optional for dataset building.

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
) -> Dataset:
```

#### Parameters {#folder-params}

- `folder`: (str|Path, required)
  - The folder path from which you would like to create this dataset.
- `kind`: (str|DatasetFolderSourceType, required)
  - The dataset source type you would like to use, the choices are: image, video and audio.
  - Recursively searching for files of the specified `kind` in `folder`. Other file types will be ignored.
- `name`: (str|Resource, optional)
  - The dataset name you would like to use.
  - If not specified, the name is the folder name.
- `auto_label`: (bool, optional)
  - Whether to auto label by the sub-folder name.
  - The default value is `True`.
- `alignment_size`: (int|str, optional)
  - The blob alignment size.
  - The default value is 128 Bytes.
- `volume_size`: (int|str, optional)
  - The maximum size of a dataset blob file. A new blob file will be generated when the size exceeds this limit.
  - The default value is `64MB`.
- `mode`: (str|DatasetChangeMode, optional)
  - The dataset change mode. The default value is `patch`. Mode choices are `patch` and `overwrite`.

#### Examples ${folder-example}

- Example for the normal function calling

  ```python
  from starwhale import Dataset

  # create a my-image-dataset dataset from /path/to/image folder.
  ds = Dataset.from_folder(
      folder="/path/to/image",
      kind="image",
      name="my-image-dataset"
  )
  ```

- Example for `caption`

  ```bash
  folder/dog/1.png
  folder/dog/1.txt
  ```

  1.txt content will be used as the caption of 1.png.

- Example for `metadata`

  `metadata.csv`:

  ```csv
  file_name, caption
  1.png, dog
  2.png, cat
  ```

  `metadata.jsonl`:

  ```jsonl
  {"file_name": "1.png", "caption": "dog"}
  {"file_name": "2.png", "caption": "cat"}
  ```

- Example for auto-labeling

  The following structure will create a dataset with 2 labels: "cat" and "dog", 4 images in total.

  ```bash
  folder/dog/1.png
  folder/cat/2.png
  folder/dog/3.png
  folder/cat/4.png
  ```

### \_\_iter\_\_

`__iter__` a method that iter the dataset rows.

```python
from starwhale import dataset

ds = dataset("mnist")

for item in ds:
  print(item.index)
  print(item.features.label)  # label and img are the features of mnist.
  print(item.features.img)
```

### batch_iter

`batch_iter` is a method that iter the dataset rows in batch.

```python
def batch_iter(
    self, batch_size: int = 1, drop_not_full: bool = False
) -> t.Iterator[t.List[DataRow]]:
```

#### Parameters {#batch-params}

- `batch_size`: (int, optional)
  - batch size. The default value is 1.
- `drop_not_full`: (bool, optional)
  - Whether the last batch of data, with a size smaller than `batch_size`, it will be discarded.
  - The default value is `False`.

#### Examples {#batch-example}

```python
from starwhale import dataset

ds = dataset("mnist")
for batch_rows in ds.batch_iter(batch_size=2):
    assert len(batch_rows) == 2
    print(batch_rows[0].features)
```

### \_\_getitem\_\_

`__getitem__` is a method that allows retrieving certain rows of data from the dataset, with usage similar to Python dict and list types.

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

`__setitem__` is a method that allows updating rows of data in the dataset, with usage similar to Python dicts. `__setitem__` supports multi-threaded parallel data insertion.

```python
def __setitem__(
    self, key: t.Union[str, int], value: t.Union[DataRow, t.Tuple, t.Dict]
) -> None:
```

#### Parameters {#set-params}

- `key`: (int|str, required)
  - `key` is the `index` for each row in the dataset. The type is int or str, but a dataset only accepts one type.
- `value`: (DataRow|tuple|dict, required)
  - `value` is the `features` for each row in the dataset, using a Python dict is generally recommended.

#### Examples {#set-example}

- Normal insertion

Insert two rows into the `test` dataset, with index `test` and `test2` repectively:

```python
from starwhale import dataset

with dataset("test") as ds:
  ds["test"] = {"txt": "abc", "int": 1}
  ds["test2"] = {"txt": "bcd", "int": 2}
  ds.commit()
```

- Parallel insertion

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

`__delitem__` is a method to delete certain rows of data from the dataset.

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

`append` is a method to append data to a dataset, similar to the append method for Python lists.

- Adding features dict, each row is automatically indexed with int starting from 0 and incrementing.

  ```python
  from starwhale import dataset, Image

  with dataset("new-ds") as ds:
    for i in range(0, 100):
      ds.append({"label": i, "image": Image(f"folder/{i}.png")})
    ds.commit()
  ```

- By appending the index and features dictionary, the index of each data row in the dataset will not be handled automatically.

  ```python
  from dataset import dataset, Image

  with dataset("new-ds") as ds:
    for i in range(0, 100):
      ds.append((f"index-{i}", {"label": i, "image": Image(f"folder/{i}.png")}))

    ds.commit()
  ```

### extend

`extend` is a method to bulk append data to a dataset, similar to the extend method for Python lists.

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

`commit` is a method that flushes the current cached data to storage when called, and generates a dataset version. This version can then be used to load the corresponding dataset content afterwards.

For a dataset, if some data is added without calling `commit`, but `close` is called or the process exits directly instead, the data will still be written to the dataset, just without generating a new version.

```python
def commit(self, tags: t.Optional[t.List[str]] = None, message: str = "") -> str:
```

#### Parameters {#commit-params}

- `tags`: (list(str), optional)
  - tag as a list
- `message`: (str, optional)
  - commit message. The default value is empty.

#### Examples {#commit-example}

```python
from starwhale import dataset
with dataset("mnist") as ds:
    ds.append({"label": 1})
    ds.commit(message="init commit")
```

### readonly

`readonly` is a property attribute indicating if the dataset is read-only, it returns a bool value.

```python
from starwhale import dataset
ds = dataset("mnist", readonly=True)
assert ds.readonly
```

### loading_version

`loading_version` is a property attribute, string type.

- When loading an existing dataset, the `loading_version` is the related dataset version.
- When creating a non-existed dataset, the `loading_version` is equal to the pending_commit_version.

### pending_commit_version

`pending_commit_version` is a property attribute, string type.  When you call the `commit` function, the `pending_commit_version` will be recorded in the Standalone instance ,Server instance or Cloud instance.

### committed_version

`committed_version` is a property attribute, string type. After the `commit` function is called, the `committed_version` will come out, it is equal to the `pending_commit_version`. Accessing this attribute without calling `commit` first will raise an exception.

### remove

`remove` is a method equivalent to the `swcli dataset remove` command, it can delete a dataset.

```python
def remove(self, force: bool = False) -> None:
```

### recover

`recover` is a method equivalent to the `swcli dataset recover` command, it can recover a soft-deleted dataset that has not been run garbage collection.

```python
def recover(self, force: bool = False) -> None:
```

### summary

`summary` is a method equivalent to the `swcli dataset summary` command, it returns summary information of the dataset.

```python
def summary(self) -> t.Optional[DatasetSummary]:
```

### history

`history` is a method equivalent to the `swcli dataset history` command, it returns the history records of the dataset.

```python
def history(self) -> t.List[t.Dict]:
```

### flush

`flush` is a method that flushes temporarily cached data from memory to persistent storage. The `commit` and `close` methods will automatically call `flush`.

### close

`close` is a method that closes opened connections related to the dataset. `Dataset` also implements contextmanager, so datasets can be automatically closed using `with` syntax without needing to explicitly call `close`.

```python
from starwhale import dataset

ds = dataset("mnist")
ds.close()

with dataset("mnist") as ds:
  print(ds[0])
```

### head

`head` is a method to show the first n rows of a dataset, equivalent to the `swcli dataset head` command.

```python
def head(self, n: int = 5, skip_fetch_data: bool = False) -> List[DataRow]:
```

### fetch_one

`fetch_one` is a method to get the first record in a dataset, similar to `head(n=1)[0]`.

### list

`list` is a class method to list Starwhale datasets under a project URI, equivalent to the `swcli dataset list` command.

```python
@classmethod
def list(
    cls,
    project_uri: Union[str, Project] = "",
    fullname: bool = False,
    show_removed: bool = False,
    page_index: int = DEFAULT_PAGE_IDX,
    page_size: int = DEFAULT_PAGE_SIZE,
) -> Tuple[List[Dict[str, Any]], Dict[str, Any]]:
```

### copy

`copy` is a method to copy a dataset to another instance, equivalent to the `swcli dataset copy` command.

```python
def copy(
  self,
  dest_uri: str,
  dest_local_project_uri: str = "",
  force: bool = False,
  mode: str = DatasetChangeMode.PATCH.value,
) -> None:
```

#### Parameters {#copy-params}

- `dest_uri`: (str, required)
  - Dataset URI
- `dest_local_project_uri`: (str, optional)
  - When copy the remote dataset into local, the parameter can set for the Project URI.
- `force`: (bool, optional)
  - Whether to forcibly overwrite the dataset if there is already one with the same version on the target instance.
  - The default value is `False`.
- `mode`: (str, optional)
  - Dataset copy mode, default is 'patch'. Mode choices are: 'patch', 'overwrite'.
  - `patch`: Patch mode, only update the changed rows and columns for the remote dataset.
  - `overwrite`: Overwrite mode, update records and delete extraneous rows from the remote dataset.

#### Examples {#copy-example}

```python
from starwhale import dataset
ds = dataset("mnist")
ds.copy("cloud://remote-instance/project/starwhale")
```

### to_pytorch

`to_pytorch` is a method that can convert a Starwhale dataset to a Pytorch `torch.utils.data.Dataset`, which can then be passed to `torch.utils.data.DataLoader` for use.

**It should be noted that the `to_pytorch` function returns a Pytorch `IterableDataset`.**

```python
def to_pytorch(
    self,
    transform: t.Optional[t.Callable] = None,
    drop_index: bool = True,
    skip_default_transform: bool = False,
) -> torch.utils.data.Dataset:
```

#### Parameters {#pytorch-params}

- `transform`: (callable, optional)
  - A transform function for input data.
- `drop_index`: (bool, optional)
  - Whether to drop the `index` column.
- `skip_default_transform`: (bool, optional)
  - If `transform` is not set, by default the built-in Starwhale transform function will be used to transform the data. This can be disabled with the `skip_default_transform` parameter.

#### Examples {#pytorch-example}

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

`to_tensorflow` is a method that can convert a Starwhale dataset to a Tensorflow `tensorflow.data.Dataset`.

```python
def to_tensorflow(self, drop_index: bool = True) -> tensorflow.data.Dataset:
```

#### Parameters {#tf-params}

- `drop_index`: (bool, optional)
  - Whether to drop the `index` column.

#### Examples {#tf-example}

```python
from starwhale import dataset
import tensorflow as tf

ds = dataset("mnist")
tf_ds = ds.to_tensorflow(drop_index=True)
assert isinstance(tf_ds, tf.data.Dataset)
```

### with_builder_blob_config

`with_builder_blob_config` is a method to set blob-related attributes in a Starwhale dataset. It needs to be called before making data changes.

```python
def with_builder_blob_config(
    self,
    volume_size: int | str | None = D_FILE_VOLUME_SIZE,
    alignment_size: int | str | None = D_ALIGNMENT_SIZE,
) -> Dataset:
```

#### Parameters {#builder-params}

- `alignment_size`: (int|str, optional)
  - The blob alignment size.
  - The default value is 128 Bytes.
- `volume_size`: (int|str, optional)
  - The maximum size of a dataset blob file. A new blob file will be generated when the size exceeds this limit.
  - The default value is `64MB`.

#### Examples {#builder-example}

```python
from starwhale import dataset, Binary

ds = dataset("mnist").with_builder_blob_config(volume_size="32M", alignment_size=128)
ds.append({"data": Binary(b"123")})
ds.commit()
ds.close()
```

### with_loader_config

`with_loader_config` is a method to set parameters for the Starwhale dataset loader process.

```python
def with_loader_config(
    self,
    num_workers: t.Optional[int] = None,
    cache_size: t.Optional[int] = None,
    field_transformer: t.Optional[t.Dict] = None,
) -> Dataset:
```

#### Parameters {#loader-params}

- `num_workers`: (int, optional)
  - The workers number for loading dataset.
  - The default value is 2.
- `cache_size`: (int, optional)
  - Prefetched data rows.
  - The default value is 20.
- `field_transformer`: (dict, optional)
  - features name transform dict.

#### Examples {#loader-example}

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
