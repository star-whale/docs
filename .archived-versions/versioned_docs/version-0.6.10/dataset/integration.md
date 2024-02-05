---
title: Integration with Other ML Libraries
---

Starwhale datasets can integrate well with popular ML libraries such as Pillow, Numpy, Huggingface Datasets, Pytorch and Tensorflow, facilitating data transformation.

## Pillow

[Starwhale Image](../reference/sdk/type#image) type and [Pillow Image](https://pillow.readthedocs.io/en/stable/reference/Image.html) objects have bidirectional conversion.

### Initialize Starwhale Image with Pillow Image

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

### Converting Starwhale Image to Pillow Image

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

### Converting to numpy.ndarray

The following Starwhale data types can be converted to `numpy.ndarray` objects:

* `Image`: First convert to Pillow Image type, then to `numpy.ndarray` object.
* `Video`: Directly convert video bytes to `numpy.ndarray` object.
* `Audio`: Use the soundfile library to convert audio bytes to `numpy.ndarray` object.
* `BoundingBox`: Convert to `numpy.ndarray` object in xywh format.
* `Binary`: Directly convert bytes to `numpy.ndarray` object.

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

### Initialize Starwhale Image with numpy.ndarray

When an image is represented as a `numpy.ndarray` object, it can be used to initialize a Starwhale Image object.

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

There are numerous datasets on the Huggingface Hub that can be transformed into Starwhale datasets with a single line of code.

:::tip
Huggingface Datasets conversion relies on the [datasets](https://pypi.org/project/datasets/) library.
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

Starwhale Dataset can be converted into Pytorch's [torch.utils.dataset.IterableDataset](https://pytorch.org/docs/stable/data.html#torch.utils.data.IterableDataset) object and accept transform. The converted Pytorch dataset object can then be passed to Pytorch dataloader or Huggingface Trainer, etc.

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

Starwhale Dataset can be converted into Tensorflow's [tensorflow.data.Dataset](https://www.tensorflow.org/api_docs/python/tf/data/Dataset) object and supports transform functions to mutate the data.

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
