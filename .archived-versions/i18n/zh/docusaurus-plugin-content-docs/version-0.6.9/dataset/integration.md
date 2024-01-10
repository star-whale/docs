---
title: 数据集与其他ML库的集成
---

Starwhale 数据集可以 Pillow, Numpy, Huggingface Datasets, Pytorch 和 Tensorflow 等流行的ML库进行良好的集成，方便进行数据转化。

## Pillow

[Starwhale Image](../reference/sdk/type#image) 类型与 [Pillow Image](https://pillow.readthedocs.io/en/stable/reference/Image.html) 对象进行双向转化。

### 使用 Pillow Image 初始化 Starwhale Image

```python
from starwhale import dataset

# login cloud instance in advance: `swcli instance login` command or `starwhale.login` sdk
# raw dataset url: https://cloud.starwhale.cn/projects/397/datasets/172/versions/236/files
ds = dataset("https://cloud.starwhale.cn/project/starwhale:object-detection/dataset/coco128/v2")
img = ds.head(n=1)[0].features.image

pil = img.to_pil()
print(pil)
print(pil.size)
```

```console
<PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=640x480 at 0x7F77FBA98250>
(640, 480)
```

### 将 Starwhale Image 转化为 Pillow Image

```python
import numpy
from PIL import Image as PILImage
from starwhale import Image

# generate a random image
random_array = numpy.random.randint(low=0, high=256, size=(100, 100, 3), dtype=numpy.uint8)
pil = PILImage.fromarray(random_array, mode="RGB")

img = Image(pil)
print(img)
```

```console
ArtifactType.Image, display:, mime_type:MIMEType.UNDEFINED, shape:[None, None, 3], encoding:
```

## Numpy

### 转化为 numpy.ndarray

Starwhale 的以下数据类型可以转化为 `numpy.ndarray` 对象:

* `Image`：先转化为Pillow Image类型，然后再转化为 `numpy.ndarray` 对象。
* `Video`：将 video bytes 直接转化 `numpy.ndarray` 对象。
* `Audio`：调用 soundfile 库将 audio bytes 转化为 `numpy.ndarray` 对象。
* `BoundingBox`：转化为 xywh 格式的 `numpy.ndarray` 对象。
* `Binary`：将 bytes 直接转化 `numpy.ndarray` 对象。

```python
from starwhale import dataset

# login cloud instance in advance: `swcli instance login` command or `starwhale.login` sdk
# raw dataset url: https://cloud.starwhale.cn/projects/397/datasets/172/versions/236/files
ds = dataset("https://cloud.starwhale.cn/project/starwhale:object-detection/dataset/coco128/v2")

item = ds.head(n=1)[0]

img = item.features.image
img_array = img.to_numpy()
print(img_array)
print(img_array.shape)

bbox = item.features.annotations[0]["bbox"]
print(bbox)
print(bbox.to_numpy())
```

```console
<class 'numpy.ndarray'>
(480, 640, 3)
BoundingBox[XYWH]- x:1.0799999999999699, y:187.69008, width:611.5897600000001, height:285.84000000000003
array([  1.08   , 187.69008, 611.58976, 285.84   ])
```

### 使用 numpy.ndarray 初始化 Starwhale Image

当一个图片表示为 numpy.ndarray 对象时，可以用来初始化为 Starwhale Image 对象。

```python
import numpy
from starwhale import Image

# generate a random image numpy.ndarray
random_array = numpy.random.randint(low=0, high=256, size=(100, 100, 3), dtype=numpy.uint8)
img = Image(random_array)
print(img)
```

```console
ArtifactType.Image, display:, mime_type:MIMEType.UNDEFINED, shape:[None, None, 3], encoding:
```

## Huggingface Datasets

Huggingface Hub 上有大量的数据集，可以通过一行代码就能转化为 Starwhale 数据集。

:::tip
Huggingface Datasets 转化需要依赖 [datasets](https://pypi.org/project/datasets/) 库。
:::

```python
from starwhale import Dataset

# You only specify starwhale dataset expected name and huggingface repo name
# example: https://huggingface.co/datasets/lambdalabs/pokemon-blip-captions
ds = Dataset.from_huggingface("pokemon", "lambdalabs/pokemon-blip-captions")
print(ds)
print(len(ds))
print(repr(ds.fetch_one()))
```

```console
🌊 creating dataset local/project/self/dataset/pokemon/version/r2m3is6ormwcio4gtayop25qk4gmfr6mcei6hise...
🦋 update 833 records into dataset
Dataset: pokemon, stash version: r2m3is6ormwcio4gtayop25qk4gmfr6mcei6hise, loading version: r2m3is6ormwcio4gtayop25qk4gmfr6mcei6hise
833
index:default/train/0, features:{'image': ArtifactType.Image, display:, mime_type:MIMEType.JPEG, shape:[1280, 1280, 3], encoding: , 'text': 'a drawing of a green pokemon with red eyes', '_hf_subset': 'default', '_hf_split': 'train'}, shadow dataset: None
```

## Pytorch

Starwhale Dataset 可以转化为 Pytorch 的 [torch.utils.dataset.IterableDataset](https://pytorch.org/docs/stable/data.html#torch.utils.data.IterableDataset) 对象，并接受 transform 变换。转化后的 Pytorch dataset 对象就可以传递给 Pytorch dataloader 或 Huggingface Trainer 等。

```python
from starwhale import dataset
import torch.utils.data as tdata

def custom_transform(data):
    data["label"] = data["label"] + 100
    return data

with dataset("simple", create="empty") as ds:
    for i in range(0, 10):
        ds[i] = {"text": f"{i}-text", "label": i}
    ds.commit()

    torch_ds = ds.to_pytorch(transform=custom_transform)
    torch_loader = tdata.DataLoader(torch_ds, batch_size=1)
    item = next(iter(torch_loader))
    print(item)
    print(item["label"])
```

```console
{'text': ['0-text'], 'label': tensor([100])}
tensor([100])
```

## Tensorflow

Starwhale Dataset 可以转化为 Tensorflow 的 [tensorflow.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset) 对象，同时也支持 transform 函数，可以对数据进行变化。

```python
from starwhale import dataset

# login cloud instance in advance: `swcli instance login` command or `starwhale.login` sdk
# raw dataset url: https://cloud.starwhale.cn/projects/397/datasets/172/versions/236/files
ds = dataset("https://cloud.starwhale.cn/project/starwhale:helloworld/dataset/mnist64")
tf_ds = ds.to_tensorflow()
print(tf_ds)
```

```console
<_FlatMapDataset element_spec={'label': TensorSpec(shape=(), dtype=tf.int64, name=None), 'img': TensorSpec(shape=(8, 8, 1), dtype=tf.uint8, name=None)}>
```
