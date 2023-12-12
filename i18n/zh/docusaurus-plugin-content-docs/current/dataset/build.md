---
title: 数据集构建
---

Starwhale 数据集构建方式非常灵活，可以从一些图片/音频/视频/csv/json/jsonl文件构建，也可以写一些Python脚本构建，还可以从Huggingface Hub 导入数据集。

## 从数据文件直接构建

### 图片

支持递归遍历目录中的图片文件，构建Starwhale 数据集，不需要写任何代码：

- 支持的图片文件格式： `png/jpg/jpeg/webp/svg/apng`
- 图片会转成 Starwhale.Image 类型，并可以在 Starwhale Server Web页面中查看。
- 支持命令行 `swcli dataset build --image` 和 Python SDK `starwhale.Dataset.from_folder` 两种方式。
- label机制：当 SDK 设置 `auto_label=True` 或 命令行设置 `--auto-label` 时，会将父目录的名字作为 `label`。
- metadata机制：可以通过在根目录设置 `metadata.csv` 或 `metadata.jsonl` 文件来扩展数据集的列。
- caption机制：当在同目录下发现 `{image-name}.txt` 文件时，文件中的内容会被自动导入，填充到 `caption` 列中。

假设在 folder 目录中有下面四个文件：

```console
folder/dog/1.png
folder/cat/2.png
folder/dog/3.png
folder/cat/4.png
```

命令方式构建方法：

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


Python SDK方式构建：

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


### 视频

支持递归遍历目录中的视频文件，构建Starwhale 数据集，不需要写任何代码：

- 支持的视频文件格式：`mp4/webm/avi`
- 视频会被转成 Starwhale.Video 类型，并可以在 Starwhale Server Web页面中查看。
- 支持命令行 `swcli dataset build --video` 和 Python SDK `starwhale.Dataset.from_folder` 两种方式。
- label, caption 和 metadata 机制与图片方式相同。

### 音频

支持递归遍历目录中的音频文件，构建Starwhale 数据集，不需要写任何代码：

- 支持的音频文件格式：`mp3/wav`
- 音频会被转成 Starwhale.Audio 类型，并可以在 Starwhale Server Web页面中查看。
- 支持命令行 `swcli dataset build --video` 和 Python SDK `starwhale.Dataset.from_folder` 两种方式。
- label, caption 和 metadata 机制与图片方式相同。

### csv 文件

支持命令行或Python SDK方式将本地或远端的csv文件直接转化成 Starwhale 数据集：

- 支持一个或多个本地csv文件
- 支持对本地目录递归寻找csv文件
- 支持一个或多个以http url方式指定的远端csv文件

命令行方式构建：

```console
❯ swcli dataset build --name product-desc-modelscope --csv https://modelscope.cn/api/v1/datasets/lcl193798/product_description_generation/repo\?Revision\=master\&FilePath\=test.csv --encoding=utf-8-sig
🚧 start to build dataset bundle...
👷 uri local/project/self/dataset/product-desc-modelscope/version/latest
🌊 creating dataset local/project/self/dataset/product-desc-modelscope/version/wzaz4ccodpyj4jelgupljreyida2bleg5xp7viwe...
🦋 update 3848 records into dataset
🌺 congratulation! dataset build from csv files(('https://modelscope.cn/api/v1/datasets/lcl193798/product_description_generation/repo?Revision=master&FilePath=test.csv',)) has been built. You can run  swcli dataset info product-desc-modelscope/version/wzaz4ccodpyj
```

Python SDK方式构建：

```python
from starwhale import Dataset
ds = Dataset.from_csv(path="http://example.com/data.csv", name="my-csv-dataset")
```

### json/jsonl 文件

支持命令行或Python SDK方式将本地或远端的json/jsonl文件直接转化成 Starwhale 数据集：

- 支持一个或多个本地json/jsonl文件
- 支持对本地目录递归寻找json/jsonl文件
- 支持一个或多个以http url方式指定的远端json/jsonl文件

对于json文件：

- 默认认为json解析后的对象是list，list中的每个对象是dict，会映射为Starwhale 数据集中的一行。
- 可以通过 `--field-selector` 或 `field_selector` 参数定位具体的某个list。

比如json文件如下：

```json
{
    "p1": {
        "p2":{
            "p3": [
                {"a": 1, "b": 2},
                {"a": 10, "b": 20},
            ]
        }
    }
}
```

那么可以设置 `--field-selector=p1.p2.p3` ，准确添加两行数据到数据集中。

命令方式构建：

```console
❯ swcli dataset build --json https://modelscope.cn/api/v1/datasets/damo/100PoisonMpts/repo\?Revision\=master\&FilePath\=train.jsonl
🚧 start to build dataset bundle...
👷 uri local/project/self/dataset/json-b0o2zsvg/version/latest
🌊 creating dataset local/project/self/dataset/json-b0o2zsvg/version/q3uoziwqligxdggncqywpund75jz55h3bne6a5la...
🦋 update 906 records into dataset
🌺 congratulation! dataset build from ('https://modelscope.cn/api/v1/datasets/damo/100PoisonMpts/repo?Revision=master&FilePath=train.jsonl',) has been built. You can run  swcli dataset info json-b0o2zsvg/version/q3uoziwqligx
```

Python SDK方式构建：

```python
from starwhale import Dataset
myds = Dataset.from_json(
    name="translation",
    text='{"content":{"child_content":[{"en":"hello","zh-cn":"你好"},{"en":"how are you","zh-cn":"最近怎么样"}]}}',
    field_selector="content.child_content"
)
print(myds[0].features["zh-cn"])
```

```console
🌊 creating dataset local/project/self/dataset/translation/version/kblfn5zh4cpoqxqbhgdfbvonulr2zefp6lojq44y...
🦋 update 2 records into dataset
你好
```

## 从Huggingface Datasets Hub中构建

Huggingface Hub 上有大量的数据集，可以通过一行代码或一条命令就能转化为 Starwhale 数据集。

:::tip
Huggingface Datasets 转化需要依赖 [datasets](https://pypi.org/project/datasets/) 库。
:::

命令行方式：

```console
swcli dataset build -hf lambdalabs/pokemon-blip-captions --name pokemon
```

Python SDK方式：

```python
from starwhale import Dataset

# You only specify starwhale dataset expected name and huggingface repo name
# example: https://huggingface.co/datasets/lambdalabs/pokemon-blip-captions
ds = Dataset.from_huggingface("pokemon", "lambdalabs/pokemon-blip-captions")
print(ds)
print(len(ds))
print(repr(ds.fetch_one()))
```

## 使用 Starwhale SDK 编写 Python Script 方式构建

## 使用 swcli dataset build + Python Handler 方式构建
