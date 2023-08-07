"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[2627],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(a),k=l,y=u["".concat(p,".").concat(k)]||u[k]||m[k]||r;return a?n.createElement(y,i(i({ref:t},s),{},{components:a})):n.createElement(y,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(83117),l=(a(67294),a(3905));const r={title:"Starwhale Data Types"},i=void 0,o={unversionedId:"reference/sdk/type",id:"version-0.5.8/reference/sdk/type",title:"Starwhale Data Types",description:"COCOObjectAnnotation",source:"@site/versioned_docs/version-0.5.8/reference/sdk/type.md",sourceDirName:"reference/sdk",slug:"/reference/sdk/type",permalink:"/0.5.8/reference/sdk/type",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.8/reference/sdk/type.md",tags:[],version:"0.5.8",frontMatter:{title:"Starwhale Data Types"},sidebar:"mainSidebar",previous:{title:"Starwhale Dataset SDK",permalink:"/0.5.8/reference/sdk/dataset"},next:{title:"Starwhale Model Evaluation SDK",permalink:"/0.5.8/reference/sdk/evaluation"}},p={},d=[{value:"COCOObjectAnnotation",id:"cocoobjectannotation",level:2},{value:"Examples",id:"coco-example",level:3},{value:"GrayscaleImage",id:"grayscaleimage",level:2},{value:"Examples",id:"gray-example",level:3},{value:"GrayscaleImage Functions",id:"grayscaleimage-functions",level:3},{value:"GrayscaleImage.to_types",id:"grayscaleimageto_types",level:4},{value:"GrayscaleImage.carry_raw_data",id:"grayscaleimagecarry_raw_data",level:4},{value:"GrayscaleImage.astype",id:"grayscaleimageastype",level:4},{value:"BoundingBox",id:"boundingbox",level:2},{value:"ClassLabel",id:"classlabel",level:2},{value:"Image",id:"image",level:2},{value:"Examples",id:"image-example",level:3},{value:"Image Functions",id:"image-functions",level:3},{value:"Image.to_types",id:"imageto_types",level:4},{value:"Image.carry_raw_data",id:"imagecarry_raw_data",level:4},{value:"Image.astype",id:"imageastype",level:4},{value:"Video",id:"video",level:2},{value:"Examples",id:"video-example",level:3},{value:"Audio",id:"audio",level:2},{value:"Examples",id:"audio-example",level:3},{value:"Audio Functions",id:"audio-functions",level:3},{value:"Audio.to_types",id:"audioto_types",level:4},{value:"Audio.carry_raw_data",id:"audiocarry_raw_data",level:4},{value:"Audio.astype",id:"audioastype",level:4},{value:"Text",id:"text",level:2},{value:"Examples",id:"text-example",level:3},{value:"Text Functions",id:"text-functions",level:3},{value:"to_types",id:"to_types",level:4},{value:"Text.carry_raw_data",id:"textcarry_raw_data",level:4},{value:"Text.astype",id:"textastype",level:4},{value:"Text.to_str",id:"textto_str",level:4},{value:"Binary",id:"binary",level:2},{value:"Binary Functions",id:"binary-functions",level:3},{value:"Binary.to_types",id:"binaryto_types",level:4},{value:"Binary.carry_raw_data",id:"binarycarry_raw_data",level:4},{value:"Binary.astype",id:"binaryastype",level:4},{value:"Link",id:"link",level:2},{value:"Link Functions",id:"link-functions",level:3},{value:"Link.astype",id:"linkastype",level:4},{value:"S3LinkAuth",id:"s3linkauth",level:2},{value:"Examples",id:"s3-example",level:3},{value:"MIMEType",id:"mimetype",level:2},{value:"LinkType",id:"linktype",level:2},{value:"Line",id:"line",level:2},{value:"Point",id:"point",level:2},{value:"Polygon",id:"polygon",level:2}],s={toc:d};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"cocoobjectannotation"},"COCOObjectAnnotation"),(0,l.kt)("p",null,"It provides definitions following the COCO format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"COCOObjectAnnotation(\n    id: int,\n    image_id: int,\n    category_id: int,\n    segmentation: Union[t.List, t.Dict],\n    area: Union[float, int],\n    bbox: Union[BoundingBox, t.List[float]],\n    iscrowd: int,\n)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"Object id, usually a globally incrementing id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image_id")),(0,l.kt)("td",{parentName:"tr",align:null},"Image id, usually id of the image")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"category_id")),(0,l.kt)("td",{parentName:"tr",align:null},"Category id, usually id of the class in object detection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"segmentation")),(0,l.kt)("td",{parentName:"tr",align:null},"Object contour representation, Polygon (polygon vertices) or RLE format")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"area")),(0,l.kt)("td",{parentName:"tr",align:null},"Object area")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bbox")),(0,l.kt)("td",{parentName:"tr",align:null},"Represents bounding box, can be BoundingBox type or list of floats")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iscrowd")),(0,l.kt)("td",{parentName:"tr",align:null},"0 indicates a single object, 1 indicates two unseparated objects")))),(0,l.kt)("h3",{id:"coco-example"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def _make_coco_annotations(\n    self, mask_fpath: Path, image_id: int\n) -> t.List[COCOObjectAnnotation]:\n    mask_img = PILImage.open(str(mask_fpath))\n\n    mask = np.array(mask_img)\n    object_ids = np.unique(mask)[1:]\n    binary_mask = mask == object_ids[:, None, None]\n    # TODO: tune permute without pytorch\n    binary_mask_tensor = torch.as_tensor(binary_mask, dtype=torch.uint8)\n    binary_mask_tensor = (\n        binary_mask_tensor.permute(0, 2, 1).contiguous().permute(0, 2, 1)\n    )\n\n    coco_annotations = []\n    for i in range(0, len(object_ids)):\n        _pos = np.where(binary_mask[i])\n        _xmin, _ymin = float(np.min(_pos[1])), float(np.min(_pos[0]))\n        _xmax, _ymax = float(np.max(_pos[1])), float(np.max(_pos[0]))\n        _bbox = BoundingBox(\n            x=_xmin, y=_ymin, width=_xmax - _xmin, height=_ymax - _ymin\n        )\n\n        rle: t.Dict = coco_mask.encode(binary_mask_tensor[i].numpy())  # type: ignore\n        rle["counts"] = rle["counts"].decode("utf-8")\n\n        coco_annotations.append(\n            COCOObjectAnnotation(\n                id=self.object_id,\n                image_id=image_id,\n                category_id=1,  # PennFudan Dataset only has one class-PASPersonStanding\n                segmentation=rle,\n                area=_bbox.width * _bbox.height,\n                bbox=_bbox,\n                iscrowd=0,  # suppose all instances are not crowd\n            )\n        )\n        self.object_id += 1\n\n    return coco_annotations\n')),(0,l.kt)("h2",{id:"grayscaleimage"},"GrayscaleImage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GrayscaleImage")," provides a grayscale image type. It is a special case of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Image")," type, for example the digit images in MNIST."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'GrayscaleImage(\n    fp: _TArtifactFP = "",\n    display_name: str = "",\n    shape: Optional[_TShape] = None,\n    as_mask: bool = False,\n    mask_uri: str = "",\n)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fp")),(0,l.kt)("td",{parentName:"tr",align:null},"Image path, IO object, or file content bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"display_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Display name shown in Dataset Viewer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shape")),(0,l.kt)("td",{parentName:"tr",align:null},"Image width and height, default channel is 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"as_mask")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether used as a mask image")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mask_uri")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the original image for the mask")))),(0,l.kt)("h3",{id:"gray-example"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'for i in range(0, min(data_number, label_number)):\n    _data = data_file.read(image_size)\n    _label = struct.unpack(">B", label_file.read(1))[0]\n    yield GrayscaleImage(\n        _data,\n        display_name=f"{i}",\n        shape=(height, width, 1),\n    ), {"label": _label}\n')),(0,l.kt)("h3",{id:"grayscaleimage-functions"},"GrayscaleImage Functions"),(0,l.kt)("h4",{id:"grayscaleimageto_types"},"GrayscaleImage.to_types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'to_bytes(encoding: str= "utf-8") -> bytes\n')),(0,l.kt)("h4",{id:"grayscaleimagecarry_raw_data"},"GrayscaleImage.carry_raw_data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"carry_raw_data() -> GrayscaleImage\n")),(0,l.kt)("h4",{id:"grayscaleimageastype"},"GrayscaleImage.astype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"astype() -> Dict[str, t.Any]\n")),(0,l.kt)("h2",{id:"boundingbox"},"BoundingBox"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BoundingBox")," provides a bounding box type, currently in ",(0,l.kt)("inlineCode",{parentName:"p"},"LTWH")," format:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"left_x"),": x-coordinate of left edge"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"top_y"),": y-coordinate of top edge"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"width"),": width of bounding box"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"height"),": height of bounding box")),(0,l.kt)("p",null,"So it represents the bounding box using the coordinates of its left, top, width and height. This is a common format for specifying bounding boxes in computer vision tasks."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"BoundingBox(\n    x: float,\n    y: float,\n    width: float,\n    height: float\n)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:null},"x-coordinate of left edge (left_x)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},"y-coordinate of top edge (top_y)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"width")),(0,l.kt)("td",{parentName:"tr",align:null},"Width of bounding box")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"height")),(0,l.kt)("td",{parentName:"tr",align:null},"Height of bounding box")))),(0,l.kt)("h2",{id:"classlabel"},"ClassLabel"),(0,l.kt)("p",null,"Describe labels."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"ClassLabel(\n     names: List[Union[int, float, str]]\n)\n")),(0,l.kt)("h2",{id:"image"},"Image"),(0,l.kt)("p",null,"Image Type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'Image(\n    fp: _TArtifactFP = "",\n    display_name: str = "",\n    shape: Optional[_TShape] = None,\n    mime_type: Optional[MIMEType] = None,\n    as_mask: bool = False,\n    mask_uri: str = "",\n)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fp")),(0,l.kt)("td",{parentName:"tr",align:null},"Image path, IO object, or file content bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"display_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Display name shown in Dataset Viewer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shape")),(0,l.kt)("td",{parentName:"tr",align:null},"Image width, height and channels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mime_type")),(0,l.kt)("td",{parentName:"tr",align:null},"MIMEType supported types")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"as_mask")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether used as a mask image")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mask_uri")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the original image for the mask")))),(0,l.kt)("p",null,"The main difference from ",(0,l.kt)("inlineCode",{parentName:"p"},"GrayscaleImage")," is that Image supports multi-channel RGB images by specifying shape as (W, H, C)."),(0,l.kt)("h3",{id:"image-example"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import io\nimport typing as t\nimport pickle\nfrom PIL import Image as PILImage\nfrom starwhale import Image, MIMEType\n\ndef _iter_item(paths: t.List[Path]) -> t.Generator[t.Tuple[t.Any, t.Dict], None, None]:\n    for path in paths:\n        with path.open("rb") as f:\n            content = pickle.load(f, encoding="bytes")\n            for data, label, filename in zip(\n                content[b"data"], content[b"labels"], content[b"filenames"]\n            ):\n                annotations = {\n                    "label": label,\n                    "label_display_name": dataset_meta["label_names"][label],\n                }\n\n                image_array = data.reshape(3, 32, 32).transpose(1, 2, 0)\n                image_bytes = io.BytesIO()\n                PILImage.fromarray(image_array).save(image_bytes, format="PNG")\n\n                yield Image(\n                    fp=image_bytes.getvalue(),\n                    display_name=filename.decode(),\n                    shape=image_array.shape,\n                    mime_type=MIMEType.PNG,\n                ), annotations\n')),(0,l.kt)("h3",{id:"image-functions"},"Image Functions"),(0,l.kt)("h4",{id:"imageto_types"},"Image.to_types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'to_bytes(encoding: str= "utf-8") -> bytes\n')),(0,l.kt)("h4",{id:"imagecarry_raw_data"},"Image.carry_raw_data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"carry_raw_data() -> GrayscaleImage\n")),(0,l.kt)("h4",{id:"imageastype"},"Image.astype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"astype() -> Dict[str, t.Any]\n")),(0,l.kt)("h2",{id:"video"},"Video"),(0,l.kt)("p",null,"Video type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'Video(\n    fp: _TArtifactFP = "",\n    display_name: str = "",\n    mime_type: Optional[MIMEType] = None,\n)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fp")),(0,l.kt)("td",{parentName:"tr",align:null},"Video path, IO object, or file content bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"display_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Display name shown in Dataset Viewer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mime_type")),(0,l.kt)("td",{parentName:"tr",align:null},"MIMEType supported types")))),(0,l.kt)("h3",{id:"video-example"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import typing as t\nfrom pathlib import Path\n\nfrom starwhale import Video, MIMEType\n\nroot_dir = Path(__file__).parent.parent\ndataset_dir = root_dir / "data" / "UCF-101"\ntest_ds_path = [root_dir / "data" / "test_list.txt"]\n\ndef iter_ucf_item() -> t.Generator:\n    for path in test_ds_path:\n        with path.open() as f:\n            for line in f.readlines():\n                _, label, video_sub_path = line.split()\n\n                data_path = dataset_dir / video_sub_path\n                data = Video(\n                    data_path,\n                    display_name=video_sub_path,\n                    shape=(1,),\n                    mime_type=MIMEType.WEBM,\n                )\n\n                yield f"{label}_{video_sub_path}", {\n                    "video": data,\n                    "label": label,\n                }\n')),(0,l.kt)("h2",{id:"audio"},"Audio"),(0,l.kt)("p",null,"Audio type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'Audio(\n    fp: _TArtifactFP = "",\n    display_name: str = "",\n    mime_type: Optional[MIMEType] = None,\n)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fp")),(0,l.kt)("td",{parentName:"tr",align:null},"Audio path, IO object, or file content bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"display_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Display name shown in Dataset Viewer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mime_type")),(0,l.kt)("td",{parentName:"tr",align:null},"MIMEType supported types")))),(0,l.kt)("h3",{id:"audio-example"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import typing as t\nfrom starwhale import Audio\n\ndef iter_item() -> t.Generator[t.Tuple[t.Any, t.Any], None, None]:\n    for path in validation_ds_paths:\n        with path.open() as f:\n            for item in f.readlines():\n                item = item.strip()\n                if not item:\n                    continue\n\n                data_path = dataset_dir / item\n                data = Audio(\n                    data_path, display_name=item, shape=(1,), mime_type=MIMEType.WAV\n                )\n\n                speaker_id, utterance_num = data_path.stem.split("_nohash_")\n                annotations = {\n                    "label": data_path.parent.name,\n                    "speaker_id": speaker_id,\n                    "utterance_num": int(utterance_num),\n                }\n                yield data, annotations\n')),(0,l.kt)("h3",{id:"audio-functions"},"Audio Functions"),(0,l.kt)("h4",{id:"audioto_types"},"Audio.to_types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'to_bytes(encoding: str= "utf-8") -> bytes\n')),(0,l.kt)("h4",{id:"audiocarry_raw_data"},"Audio.carry_raw_data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"carry_raw_data() -> Audio\n")),(0,l.kt)("h4",{id:"audioastype"},"Audio.astype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"astype() -> Dict[str, t.Any]\n")),(0,l.kt)("h2",{id:"text"},"Text"),(0,l.kt)("p",null,"Text type, the default encode type is ",(0,l.kt)("inlineCode",{parentName:"p"},"utf-8"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'Text(\n    content: str,\n    encoding: str = "utf-8",\n)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"content")),(0,l.kt)("td",{parentName:"tr",align:null},"The text content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"encoding")),(0,l.kt)("td",{parentName:"tr",align:null},"Encoding format of the text")))),(0,l.kt)("h3",{id:"text-example"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import typing as t\nfrom pathlib import Path\nfrom starwhale import Text\n\ndef iter_item(self) -> t.Generator[t.Tuple[t.Any, t.Any], None, None]:\n    root_dir = Path(__file__).parent.parent / "data"\n\n    with (root_dir / "fra-test.txt").open("r") as f:\n        for line in f.readlines():\n            line = line.strip()\n            if not line or line.startswith("CC-BY"):\n                continue\n\n            _data, _label, *_ = line.split("\\t")\n            data = Text(_data, encoding="utf-8")\n            annotations = {"label": _label}\n            yield data, annotations\n')),(0,l.kt)("h3",{id:"text-functions"},"Text Functions"),(0,l.kt)("h4",{id:"to_types"},"to_types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'to_bytes(encoding: str= "utf-8") -> bytes\n')),(0,l.kt)("h4",{id:"textcarry_raw_data"},"Text.carry_raw_data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"carry_raw_data() -> Text\n")),(0,l.kt)("h4",{id:"textastype"},"Text.astype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"astype() -> Dict[str, t.Any]\n")),(0,l.kt)("h4",{id:"textto_str"},"Text.to_str"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"to_str() -> str\n")),(0,l.kt)("h2",{id:"binary"},"Binary"),(0,l.kt)("p",null,"Binary provides a binary data type, stored as bytes."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'Binary(\n    fp: _TArtifactFP = "",\n    mime_type: MIMEType = MIMEType.UNDEFINED,\n)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fp")),(0,l.kt)("td",{parentName:"tr",align:null},"Path, IO object, or file content bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mime_type")),(0,l.kt)("td",{parentName:"tr",align:null},"MIMEType supported types")))),(0,l.kt)("h3",{id:"binary-functions"},"Binary Functions"),(0,l.kt)("h4",{id:"binaryto_types"},"Binary.to_types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'to_bytes(encoding: str= "utf-8") -> bytes\n')),(0,l.kt)("h4",{id:"binarycarry_raw_data"},"Binary.carry_raw_data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"carry_raw_data() -> Binary\n")),(0,l.kt)("h4",{id:"binaryastype"},"Binary.astype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"astype() -> Dict[str, t.Any]\n")),(0,l.kt)("h2",{id:"link"},"Link"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Link")," provides a link type to create remote-link datasets in Starwhale."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"Link(\n    uri: str,\n    auth: Optional[LinkAuth] = DefaultS3LinkAuth,\n    offset: int = 0,\n    size: int = -1,\n    data_type: Optional[BaseArtifact] = None,\n)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uri")),(0,l.kt)("td",{parentName:"tr",align:null},"URI of the original data, currently supports localFS and S3 protocols")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"auth")),(0,l.kt)("td",{parentName:"tr",align:null},"Link auth information")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"offset")),(0,l.kt)("td",{parentName:"tr",align:null},"Data offset relative to file pointed by uri")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"size")),(0,l.kt)("td",{parentName:"tr",align:null},"Data size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"data_type")),(0,l.kt)("td",{parentName:"tr",align:null},"Actual data type pointed by the link, currently supports ",(0,l.kt)("inlineCode",{parentName:"td"},"Binary"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Image"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Text"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Audio")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"Video"))))),(0,l.kt)("h3",{id:"link-functions"},"Link Functions"),(0,l.kt)("h4",{id:"linkastype"},"Link.astype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"astype() -> Dict[str, t.Any]\n")),(0,l.kt)("h2",{id:"s3linkauth"},"S3LinkAuth"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"S3LinkAuth")," provides authentication and key information when data is stored on S3 protocol based object storage."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'S3LinkAuth(\n    name: str = "",\n    access_key: str = "",\n    secret: str = "",\n    endpoint: str = "",\n    region: str = "local",\n)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the auth")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"access_key")),(0,l.kt)("td",{parentName:"tr",align:null},"Access key for S3 connection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"secret")),(0,l.kt)("td",{parentName:"tr",align:null},"Secret for S3 connection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"Endpoint URL for S3 connection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"region")),(0,l.kt)("td",{parentName:"tr",align:null},"S3 region where bucket is located, default is local.")))),(0,l.kt)("h3",{id:"s3-example"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import struct\nimport typing as t\nfrom pathlib import Path\n\nfrom starwhale import (\n    Link,\n    S3LinkAuth,\n    GrayscaleImage,\n    UserRawBuildExecutor,\n)\nclass LinkRawDatasetProcessExecutor(UserRawBuildExecutor):\n    _auth = S3LinkAuth(name="mnist", access_key="minioadmin", secret="minioadmin")\n    _endpoint = "10.131.0.1:9000"\n    _bucket = "users"\n\n    def iter_item(self) -> t.Generator[t.Tuple[t.Any, t.Any], None, None]:\n        root_dir = Path(__file__).parent.parent / "data"\n\n        with (root_dir / "t10k-labels-idx1-ubyte").open("rb") as label_file:\n            _, label_number = struct.unpack(">II", label_file.read(8))\n\n            offset = 16\n            image_size = 28 * 28\n\n            uri = f"s3://{self._endpoint}/{self._bucket}/dataset/mnist/t10k-images-idx3-ubyte"\n            for i in range(label_number):\n                _data = Link(\n                    f"{uri}",\n                    self._auth,\n                    offset=offset,\n                    size=image_size,\n                    data_type=GrayscaleImage(display_name=f"{i}", shape=(28, 28, 1)),\n                )\n                _label = struct.unpack(">B", label_file.read(1))[0]\n                yield _data, {"label": _label}\n                offset += image_size\n')),(0,l.kt)("h2",{id:"mimetype"},"MIMEType"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MIMEType")," describes the multimedia types supported by Starwhale, implemented using Python Enum. It is used in the mime_type attribute of ",(0,l.kt)("inlineCode",{parentName:"p"},"Image"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Video")," etc to enable better Dataset Viewer support."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class MIMEType(Enum):\n    PNG = "image/png"\n    JPEG = "image/jpeg"\n    WEBP = "image/webp"\n    SVG = "image/svg+xml"\n    GIF = "image/gif"\n    APNG = "image/apng"\n    AVIF = "image/avif"\n    PPM = "image/x-portable-pixmap"\n    MP4 = "video/mp4"\n    AVI = "video/avi"\n    WEBM = "video/webm"\n    WAV = "audio/wav"\n    MP3 = "audio/mp3"\n    PLAIN = "text/plain"\n    CSV = "text/csv"\n    HTML = "text/html"\n    GRAYSCALE = "x/grayscale"\n    UNDEFINED = "x/undefined"\n')),(0,l.kt)("h2",{id:"linktype"},"LinkType"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"LinkType")," describes the remote link types supported by Starwhale, also implemented using Python Enum. Currently supports ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalFS")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"S3")," types."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class LinkType(Enum):\n    LocalFS = "local_fs"\n    S3 = "s3"\n    UNDEFINED = "undefined"\n')),(0,l.kt)("h2",{id:"line"},"Line"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import ds, Point, Line\n\nwith dataset("collections") as ds:\n    line_points = [\n        Point(x=0.0, y=1.0),\n        Point(x=0.0, y=100.0)\n    ]\n    ds.append({"line": line_points})\n    ds.commit()\n')),(0,l.kt)("h2",{id:"point"},"Point"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import ds, Point\n\nwith dataset("collections") as ds:\n    ds.append(Point(x=0.0, y=100.0))\n    ds.commit()\n')),(0,l.kt)("h2",{id:"polygon"},"Polygon"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import ds, Point, Polygon\n\nwith dataset("collections") as ds:\n    polygon_points = [\n        Point(x=0.0, y=1.0),\n        Point(x=0.0, y=100.0),\n        Point(x=2.0, y=1.0),\n        Point(x=2.0, y=100.0),\n    ]\n    ds.append({"polygon": polygon_points})\n    ds.commit()\n')))}m.isMDXComponent=!0}}]);