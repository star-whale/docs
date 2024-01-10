---
title: Dataset Building
---

Starwhale provides a highly flexible method to build datasets, allowing you to build dataset from various file types including images, audio, video, CSV, JSON, and JSONL files. Python scripts and datasets from the Huggingface Hub can also be used for construction.

## Building from Data Files

### Image

Starwhale supports recursively traversing image files within directories to build a dataset without any coding:

- Supported image formats: `png`, `jpg`, `jpeg`, `webp`, `svg`, `apng`.
- Images are converted to `Starwhale.Image` type and can be viewed in the Starwhale Server Web page.
- Supported by `swcli dataset build --image` command line and `starwhale.Dataset.from_folder` Python SDK.
- **Label mechanism**: when SDK sets `auto_label=True` or command line sets `--auto-label`, the parent directory name will be used as the `label`.
- **Metadata mechanism**: dataset columns can be expanded by setting `metadata.csv` or `metadata.jsonl` files in the root directory.
- **Caption mechanism**: when `{image-name}.txt` files are found in the same directory, the content will be automatically imported and populated into the `caption` column.

Assuming there are the following four files in the folder directory:

```console
folder/dog/1.png
folder/cat/2.png
folder/dog/3.png
folder/cat/4.png
```

Command line construction:

```console
❯ swcli dataset build --image folder --name image-folder
🚧 start to build dataset bundle...
👷 uri local/project/self/dataset/image-folder/version/latest
🌊 creating dataset local/project/self/dataset/image-folder/version/uw6mdisnf7alg4t4fs2myfug4ie4636w3x4jqcu2...
🦋 update 4 records into dataset
🌺 congratulation! you can run  swcli dataset info image-folder/version/uw6mdisnf7al
```

```console
❯ swcli dataset head image-folder -n 2
row  ───────────────────────────────────────
🌳 id: cat/2.png
🌀 features:
         🔅 file_name : cat/2.png
         🔅 label : cat
         🔅 file : ArtifactType.Image, display:2.png, mime_type:MIMEType.PNG, shape:[None, None, 3], encoding:
row  ───────────────────────────────────────
🌳 id: cat/4.png
🌀 features:
         🔅 file_name : cat/4.png
         🔅 label : cat
         🔅 file : ArtifactType.Image, display:4.png, mime_type:MIMEType.PNG, shape:[None, None, 3], encoding:
```

Python SDK construction:

```python
from starwhale import Dataset
ds = Dataset.from_folder("folder", kind="image")
print(ds)
print(ds.fetch_one().features)
```

```console
🌊 creating dataset local/project/self/dataset/folder/version/nyc2ay4gnyayv4zqalovdgakl3k2esvrne42cjna...
🦋 update 4 records into dataset
Dataset: folder, stash version: d22hdiwyakdfh5xitcpn2s32gblfbhrerzczkb63, loading version: nyc2ay4gnyayv4zqalovdgakl3k2esvrne42cjna
{'file_name': 'cat/2.png', 'label': 'cat', 'file': ArtifactType.Image, display:2.png, mime_type:MIMEType.PNG, shape:[None, None, 3], encoding: }
```

### Video

Recursive traversal of video files in a directory to construct Starwhale datasets without any coding:

- Supported video formats: `mp4`, `webm` and `avi`.
- Videos are converted to Starwhale.Video types and can be viewed in the Starwhale Server Web page.
- Supported by `swcli dataset build --video` command line and `starwhale.Dataset.from_folder` Python SDK.
- Label, caption and metadata mechanisms are the same as for images.

### Audio

Recursive traversal of audio files in a directory to construct Starwhale datasets without any coding:

- Supported audio formats: `mp3` and `wav`.
- Audio is converted to Starwhale.Audio types and can be viewed in the Starwhale Server Web page.
- Supported by `swcli dataset build --audio` command line and `starwhale.Dataset.from_folder` Python SDK.
- Label, caption and metadata mechanisms are the same as for images.

### csv Files

Command line or Python SDK can directly convert local or remote csv files into Starwhale datasets:

- Support one or more local csv files.
- Support recursive finding of csv files in a local directory.
- Support one or more remote csv files specified by http urls.

Command line construction:

```console
❯ swcli dataset build --name product-desc-modelscope --csv https://modelscope.cn/api/v1/datasets/lcl193798/product_description_generation/repo\?Revision\=master\&FilePath\=test.csv --encoding=utf-8-sig
🚧 start to build dataset bundle...
👷 uri local/project/self/dataset/product-desc-modelscope/version/latest
🌊 creating dataset local/project/self/dataset/product-desc-modelscope/version/wzaz4ccodpyj4jelgupljreyida2bleg5xp7viwe...
🦋 update 3848 records into dataset
🌺 congratulation! dataset build from csv files(('https://modelscope.cn/api/v1/datasets/lcl193798/product_description_generation/repo?Revision=master&FilePath=test.csv',)) has been built. You can run  swcli dataset info product-desc-modelscope/version/wzaz4ccodpyj
```

Python SDK construction:

```python
from starwhale import Dataset
ds = Dataset.from_csv(path="http://example.com/data.csv", name="my-csv-dataset")
```

### json/jsonl Files

Command line or Python SDK can directly convert local or remote json/jsonl files into Starwhale datasets:

- Support one or more local json/jsonl files.
- Support recursive finding of json/jsonl files in a local directory.
- Support one or more remote json/jsonl files specified by http urls.

For JSON files:

- By default, the parsed json object is assumed to be a list, and each object in the list is a dict, which maps to one row in the Starwhale dataset.
- The `--field-selector` or `field_selector` parameter can be used to locate a specific list.

For example, for the json file:

```json
{
  "p1": {
     "p2":{
       "p3": [
         {"a": 1, "b": 2},
         {"a": 10, "b": 20}
       ]
     }
  }
}
```

Set `--field-selector=p1.p2.p3` to accurately add two rows of data to the dataset.

Command line construction:

```console
❯ swcli dataset build --json https://modelscope.cn/api/v1/datasets/damo/100PoisonMpts/repo\?Revision\=master\&FilePath\=train.jsonl
🚧 start to build dataset bundle...
👷 uri local/project/self/dataset/json-b0o2zsvg/version/latest
🌊 creating dataset local/project/self/dataset/json-b0o2zsvg/version/q3uoziwqligxdggncqywpund75jz55h3bne6a5la...
🦋 update 906 records into dataset
🌺 congratulation! dataset build from ('https://modelscope.cn/api/v1/datasets/damo/100PoisonMpts/repo?Revision=master&FilePath=train.jsonl',) has been built. You can run  swcli dataset info json-b0o2zsvg/version/q3uoziwqligx
```

Python SDK construction:

```python
from starwhale import Dataset
myds = Dataset.from_json(
   name="translation",
   text='{"content": {"child_content": [{"en":"hello","zh-cn":"你好"},{"en":"how are you","zh-cn":"最近怎么样"}]}}',
   field_selector="content.child_content"
)
print(myds[0].features["zh-cn"])
```

```console
🌊 creating dataset local/project/self/dataset/translation/version/kblfn5zh4cpoqxqbhgdfbvonulr2zefp6lojq44y...
🦋 update 2 records into dataset
你好
```

## Building from Huggingface Hub

There are numerous datasets available on the Huggingface Hub, which can be converted into Starwhale Dataset with a single line of code or command.

:::tip
Huggingface Datasets conversion relies on the [datasets](https://pypi.org/project/datasets/) library.
:::

Command line:

```console
swcli dataset build -hf lambdalabs/pokemon-blip-captions --name pokemon
```

Python SDK:

```python
from starwhale import Dataset

# You only specify starwhale dataset expected name and huggingface repo name
# example: https://huggingface.co/datasets/lambdalabs/pokemon-blip-captions
ds = Dataset.from_huggingface("pokemon", "lambdalabs/pokemon-blip-captions")
print(ds)
print(len(ds))
print(repr(ds.fetch_one()))
```

## Building from Python SDK scripts

The Starwhale Dataset SDK provides a way similar to Python `dict` to add or update data, enabling the creation and update of local or remote datasets.

Starwhale defines two attributes for each row of data: `key` and `features`.

- `key`: int or str type. There is only one type of `key` in a dataset. `key` indicates the unique index of that row of data.
- `features`: dict type. Starwhale Dataset adopts a schema-free design, so the `features` structure of each row can be different.
  - `features` data supports Python constant types like int, float, str, as well as Starwhale types like Image, Video, Audio, Text, and Binary. It also supports Python compound types like list, tuple, dict.

### Dataset Initialization

To create, update, or load a dataset, you need to get a `Starwhale.Dataset` object, usually in the following ways:

```python
from starwhale import dataset

# Create a dataset named new-test in standalone instance. If it exists, raise an exception.
local_ds = dataset("new-test", create="empty")
print(local_ds)
print(len(local_ds))

# If the mnist64 dataset does not exist, create one; otherwise, load this existing dataset.
remote_ds = dataset("https://cloud.starwhale.cn/project/starwhale:helloworld/dataset/mnist64", create="auto")
print(remote_ds)
print(len(remote_ds))

# Load the existing dataset named mnist64, and if it does not exist, an error will be raised.
existed_ds = dataset("mnist64", create="forbid")
print(existed_ds)
print(len(existed_ds))
```

```console
Dataset: new-test, stash version: y4touw3btifhkd4f2gg4x3qvydgnfmvoztqqm5cf, loading version: y4touw3btifhkd4f2gg4x3qvydgnfmvoztqqm5cf
0

Dataset: mnist64, stash version: 4z5wpbpozsxlelma3j6soeatekufymnyxdeihoqo, loading version: vs3gnaauakidjcc5effevaoh63vivu7dzodo5cmc
500

Dataset: mnist64, stash version: 3ahtfbizw63myxcz34ebd72lhgc25dualcmtznts, loading version: lwhvvixpimlsghfs2xqmtgrwti4yn2z5nevz7hth
500
```

### Adding and Updating Dataset Elements

After adding data, calling `commit` will generate a new version that can then be used to access the dataset.

#### The append Method

The Dataset provides the append function, which automatically adds `features` to a new row in the dataset when called.

```python
from starwhale import dataset
ds = dataset("new-test", create="empty")

# key is the auto increment index. The example key is zero.
ds.append({"a": 0, "b": 0})

# Keys in the dataset can also be explicitly declared, but they must maintain consistency with the key types of other rows.
# When data is added in the form of a list or tuple, the first element (at index 0) represents the key for that particular row, while the second element (at index 1) contains the corresponding features.
ds.append((1, {"a":1, "b":1}))

ds.commit()
```

#### \_\_setitem\_\_ Method

The Dataset's `__setitem__` method provides a dict-like way to add data by index.

```python
ds[2] = {"a":2, "b":2}
ds.commit()
```

## Building from Python Handler

Supports reading functions in Python files through the `swcli` command line as input to build datasets. The return value of the function needs to be iterable.

Example python script dataset.py:

```python
def iter_item():
    for i in range(100):
        # only return features. key is auto increment index.
        yield {"a": i, "b": i}

def iter_item_with_key():
    for i in range(100):
        # key + features
        yield i, {"a": i, "b": i}
```

Build datasets by triggering through the `swcli` command line:

```console
swcli dataset build --handler dataset:iter_item --name test1
swcli dataset build --handler dataset:iter_item_with_key --name test2
```
