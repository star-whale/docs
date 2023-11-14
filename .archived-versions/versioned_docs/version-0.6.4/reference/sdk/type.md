---
title: Starwhale Data Types
---

## COCOObjectAnnotation

It provides definitions following the COCO format.

```python
COCOObjectAnnotation(
    id: int,
    image_id: int,
    category_id: int,
    segmentation: Union[t.List, t.Dict],
    area: Union[float, int],
    bbox: Union[BoundingBox, t.List[float]],
    iscrowd: int,
)
```

| Parameter | Description |
|-|-|
| `id` | Object id, usually a globally incrementing id |
| `image_id` | Image id, usually id of the image |
| `category_id` | Category id, usually id of the class in object detection |
| `segmentation` | Object contour representation, Polygon (polygon vertices) or RLE format |
| `area` | Object area |
| `bbox` | Represents bounding box, can be BoundingBox type or list of floats |
| `iscrowd` | 0 indicates a single object, 1 indicates two unseparated objects |

### Examples {#coco-example}

```python
def _make_coco_annotations(
    self, mask_fpath: Path, image_id: int
) -> t.List[COCOObjectAnnotation]:
    mask_img = PILImage.open(str(mask_fpath))

    mask = np.array(mask_img)
    object_ids = np.unique(mask)[1:]
    binary_mask = mask == object_ids[:, None, None]
    # TODO: tune permute without pytorch
    binary_mask_tensor = torch.as_tensor(binary_mask, dtype=torch.uint8)
    binary_mask_tensor = (
        binary_mask_tensor.permute(0, 2, 1).contiguous().permute(0, 2, 1)
    )

    coco_annotations = []
    for i in range(0, len(object_ids)):
        _pos = np.where(binary_mask[i])
        _xmin, _ymin = float(np.min(_pos[1])), float(np.min(_pos[0]))
        _xmax, _ymax = float(np.max(_pos[1])), float(np.max(_pos[0]))
        _bbox = BoundingBox(
            x=_xmin, y=_ymin, width=_xmax - _xmin, height=_ymax - _ymin
        )

        rle: t.Dict = coco_mask.encode(binary_mask_tensor[i].numpy())  # type: ignore
        rle["counts"] = rle["counts"].decode("utf-8")

        coco_annotations.append(
            COCOObjectAnnotation(
                id=self.object_id,
                image_id=image_id,
                category_id=1,  # PennFudan Dataset only has one class-PASPersonStanding
                segmentation=rle,
                area=_bbox.width * _bbox.height,
                bbox=_bbox,
                iscrowd=0,  # suppose all instances are not crowd
            )
        )
        self.object_id += 1

    return coco_annotations
```

## GrayscaleImage

`GrayscaleImage` provides a grayscale image type. It is a special case of the `Image` type, for example the digit images in MNIST.

```python
GrayscaleImage(
    fp: _TArtifactFP = "",
    display_name: str = "",
    shape: Optional[_TShape] = None,
    as_mask: bool = False,
    mask_uri: str = "",
)
```

| Parameter | Description |
|-|-|
| `fp` | Image path, IO object, or file content bytes |
| `display_name` | Display name shown in Dataset Viewer |
| `shape` | Image width and height, default channel is 1 |
| `as_mask` | Whether used as a mask image |
| `mask_uri` | URI of the original image for the mask |

### Examples {#gray-example}

```python
for i in range(0, min(data_number, label_number)):
    _data = data_file.read(image_size)
    _label = struct.unpack(">B", label_file.read(1))[0]
    yield GrayscaleImage(
        _data,
        display_name=f"{i}",
        shape=(height, width, 1),
    ), {"label": _label}
```

### GrayscaleImage Functions

#### GrayscaleImage.to_types

```python
to_bytes(encoding: str= "utf-8") -> bytes
```

#### GrayscaleImage.carry_raw_data

```python
carry_raw_data() -> GrayscaleImage
```

#### GrayscaleImage.astype

```python
astype() -> Dict[str, t.Any]
```

## BoundingBox

`BoundingBox` provides a bounding box type, currently in `LTWH` format:

- `left_x`: x-coordinate of left edge
- `top_y`: y-coordinate of top edge
- `width`: width of bounding box
- `height`: height of bounding box

So it represents the bounding box using the coordinates of its left, top, width and height. This is a common format for specifying bounding boxes in computer vision tasks.

```python
BoundingBox(
    x: float,
    y: float,
    width: float,
    height: float
)
```

| Parameter | Description |
|-|-|
| `x` | x-coordinate of left edge (left_x) |
| `y` | y-coordinate of top edge (top_y) |
| `width` | Width of bounding box |
| `height` | Height of bounding box |

## ClassLabel

Describe labels.

```python
ClassLabel(
     names: List[Union[int, float, str]]
)
```

## Image

Image Type.

```python
Image(
    fp: _TArtifactFP = "",
    display_name: str = "",
    shape: Optional[_TShape] = None,
    mime_type: Optional[MIMEType] = None,
    as_mask: bool = False,
    mask_uri: str = "",
)
```

| Parameter | Description |
|-|-|
| `fp` | Image path, IO object, or file content bytes |
| `display_name` | Display name shown in Dataset Viewer |
| `shape` | Image width, height and channels |
| `mime_type` | MIMEType supported types |
| `as_mask` | Whether used as a mask image |
| `mask_uri` | URI of the original image for the mask |

The main difference from `GrayscaleImage` is that Image supports multi-channel RGB images by specifying shape as (W, H, C).

### Examples {#image-example}

```python
import io
import typing as t
import pickle
from PIL import Image as PILImage
from starwhale import Image, MIMEType

def _iter_item(paths: t.List[Path]) -> t.Generator[t.Tuple[t.Any, t.Dict], None, None]:
    for path in paths:
        with path.open("rb") as f:
            content = pickle.load(f, encoding="bytes")
            for data, label, filename in zip(
                content[b"data"], content[b"labels"], content[b"filenames"]
            ):
                annotations = {
                    "label": label,
                    "label_display_name": dataset_meta["label_names"][label],
                }

                image_array = data.reshape(3, 32, 32).transpose(1, 2, 0)
                image_bytes = io.BytesIO()
                PILImage.fromarray(image_array).save(image_bytes, format="PNG")

                yield Image(
                    fp=image_bytes.getvalue(),
                    display_name=filename.decode(),
                    shape=image_array.shape,
                    mime_type=MIMEType.PNG,
                ), annotations
```

### Image Functions

#### Image.to_types

```python
to_bytes(encoding: str= "utf-8") -> bytes
```

#### Image.carry_raw_data

```python
carry_raw_data() -> GrayscaleImage
```

#### Image.astype

```python
astype() -> Dict[str, t.Any]
```

## Video

Video type.

```python
Video(
    fp: _TArtifactFP = "",
    display_name: str = "",
    mime_type: Optional[MIMEType] = None,
)
```

| Parameter | Description |
|-|-|
| `fp` | Video path, IO object, or file content bytes |
| `display_name` | Display name shown in Dataset Viewer |
| `mime_type` | MIMEType supported types |

### Examples {#video-example}

```python
import typing as t
from pathlib import Path

from starwhale import Video, MIMEType

root_dir = Path(__file__).parent.parent
dataset_dir = root_dir / "data" / "UCF-101"
test_ds_path = [root_dir / "data" / "test_list.txt"]

def iter_ucf_item() -> t.Generator:
    for path in test_ds_path:
        with path.open() as f:
            for line in f.readlines():
                _, label, video_sub_path = line.split()

                data_path = dataset_dir / video_sub_path
                data = Video(
                    data_path,
                    display_name=video_sub_path,
                    shape=(1,),
                    mime_type=MIMEType.WEBM,
                )

                yield f"{label}_{video_sub_path}", {
                    "video": data,
                    "label": label,
                }
```

## Audio

Audio type.

```python
Audio(
    fp: _TArtifactFP = "",
    display_name: str = "",
    mime_type: Optional[MIMEType] = None,
)
```

| Parameter | Description |
|-|-|
| `fp` | Audio path, IO object, or file content bytes |
| `display_name` | Display name shown in Dataset Viewer |
| `mime_type` | MIMEType supported types |

### Examples {#audio-example}

```python
import typing as t
from starwhale import Audio

def iter_item() -> t.Generator[t.Tuple[t.Any, t.Any], None, None]:
    for path in validation_ds_paths:
        with path.open() as f:
            for item in f.readlines():
                item = item.strip()
                if not item:
                    continue

                data_path = dataset_dir / item
                data = Audio(
                    data_path, display_name=item, shape=(1,), mime_type=MIMEType.WAV
                )

                speaker_id, utterance_num = data_path.stem.split("_nohash_")
                annotations = {
                    "label": data_path.parent.name,
                    "speaker_id": speaker_id,
                    "utterance_num": int(utterance_num),
                }
                yield data, annotations
```

### Audio Functions

#### Audio.to_types

```python
to_bytes(encoding: str= "utf-8") -> bytes
```

#### Audio.carry_raw_data

```python
carry_raw_data() -> Audio
```

#### Audio.astype

```python
astype() -> Dict[str, t.Any]
```

## Text

Text type, the default encode type is `utf-8`.

```python
Text(
    content: str,
    encoding: str = "utf-8",
)
```

| Parameter | Description |
|-|-|
| `content` | The text content |
| `encoding` | Encoding format of the text |

### Examples {#text-example}

```python
import typing as t
from pathlib import Path
from starwhale import Text

def iter_item(self) -> t.Generator[t.Tuple[t.Any, t.Any], None, None]:
    root_dir = Path(__file__).parent.parent / "data"

    with (root_dir / "fra-test.txt").open("r") as f:
        for line in f.readlines():
            line = line.strip()
            if not line or line.startswith("CC-BY"):
                continue

            _data, _label, *_ = line.split("\t")
            data = Text(_data, encoding="utf-8")
            annotations = {"label": _label}
            yield data, annotations
```

### Text Functions

#### to_types

```python
to_bytes(encoding: str= "utf-8") -> bytes
```

#### Text.carry_raw_data

```python
carry_raw_data() -> Text
```

#### Text.astype

```python
astype() -> Dict[str, t.Any]
```

#### Text.to_str

```python
to_str() -> str
```

## Binary

Binary provides a binary data type, stored as bytes.

```python
Binary(
    fp: _TArtifactFP = "",
    mime_type: MIMEType = MIMEType.UNDEFINED,
)
```

| Parameter | Description |
|-|-|
| `fp` | Path, IO object, or file content bytes |
| `mime_type` | MIMEType supported types |

### Binary Functions

#### Binary.to_types

```python
to_bytes(encoding: str= "utf-8") -> bytes
```

#### Binary.carry_raw_data

```python
carry_raw_data() -> Binary
```

#### Binary.astype

```python
astype() -> Dict[str, t.Any]
```

## Link

`Link` provides a link type to create remote-link datasets in Starwhale.

```python
Link(
    uri: str,
    auth: Optional[LinkAuth] = DefaultS3LinkAuth,
    offset: int = 0,
    size: int = -1,
    data_type: Optional[BaseArtifact] = None,
)
```

| Parameter | Description |
|-|-|
| `uri` | URI of the original data, currently supports localFS and S3 protocols |
| `auth` | Link auth information |
| `offset` | Data offset relative to file pointed by uri |
| `size` | Data size |
| `data_type` | Actual data type pointed by the link, currently supports `Binary`, `Image`, `Text`, `Audio` and `Video` |

### Link Functions

#### Link.astype

```python
astype() -> Dict[str, t.Any]
```

## MIMEType

`MIMEType` describes the multimedia types supported by Starwhale, implemented using Python Enum. It is used in the mime_type attribute of `Image`, `Video` etc to enable better Dataset Viewer support.

```python
class MIMEType(Enum):
    PNG = "image/png"
    JPEG = "image/jpeg"
    WEBP = "image/webp"
    SVG = "image/svg+xml"
    GIF = "image/gif"
    APNG = "image/apng"
    AVIF = "image/avif"
    PPM = "image/x-portable-pixmap"
    MP4 = "video/mp4"
    AVI = "video/avi"
    WEBM = "video/webm"
    WAV = "audio/wav"
    MP3 = "audio/mp3"
    PLAIN = "text/plain"
    CSV = "text/csv"
    HTML = "text/html"
    GRAYSCALE = "x/grayscale"
    UNDEFINED = "x/undefined"
```

## Line

```python
from starwhale import ds, Point, Line

with dataset("collections") as ds:
    line_points = [
        Point(x=0.0, y=1.0),
        Point(x=0.0, y=100.0)
    ]
    ds.append({"line": line_points})
    ds.commit()
```

## Point

```python
from starwhale import ds, Point

with dataset("collections") as ds:
    ds.append(Point(x=0.0, y=100.0))
    ds.commit()
```

## Polygon

```python
from starwhale import ds, Point, Polygon

with dataset("collections") as ds:
    polygon_points = [
        Point(x=0.0, y=1.0),
        Point(x=0.0, y=100.0),
        Point(x=2.0, y=1.0),
        Point(x=2.0, y=100.0),
    ]
    ds.append({"polygon": polygon_points})
    ds.commit()
```
