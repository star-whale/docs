"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[2878],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=d(a),u=l,y=k["".concat(o,".").concat(u)]||k[u]||s[u]||r;return a?n.createElement(y,i(i({ref:t},m),{},{components:a})):n.createElement(y,i({ref:t},m))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6460:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(3117),l=(a(7294),a(3905));const r={title:"Starwhale \u6570\u636e\u7c7b\u578b SDK"},i=void 0,p={unversionedId:"reference/sdk/type",id:"version-0.5.7/reference/sdk/type",title:"Starwhale \u6570\u636e\u7c7b\u578b SDK",description:"COCOObjectAnnotation",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.7/reference/sdk/type.md",sourceDirName:"reference/sdk",slug:"/reference/sdk/type",permalink:"/zh/reference/sdk/type",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.7/reference/sdk/type.md",tags:[],version:"0.5.7",frontMatter:{title:"Starwhale \u6570\u636e\u7c7b\u578b SDK"},sidebar:"mainSidebar",previous:{title:"Starwhale \u6570\u636e\u96c6 SDK",permalink:"/zh/reference/sdk/dataset"},next:{title:"Starwhale \u6a21\u578b\u8bc4\u6d4b SDK",permalink:"/zh/reference/sdk/evaluation"}},o={},d=[{value:"COCOObjectAnnotation",id:"cocoobjectannotation",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"coco-example",level:3},{value:"GrayscaleImage",id:"grayscaleimage",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"gray-example",level:3},{value:"GrayscaleImage\u51fd\u6570",id:"grayscaleimage\u51fd\u6570",level:3},{value:"GrayscaleImage.to_types",id:"grayscaleimageto_types",level:4},{value:"GrayscaleImage.carry_raw_data",id:"grayscaleimagecarry_raw_data",level:4},{value:"GrayscaleImage.astype",id:"grayscaleimageastype",level:4},{value:"BoundingBox",id:"boundingbox",level:2},{value:"ClassLabel",id:"classlabel",level:2},{value:"Image",id:"image",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"image-example",level:3},{value:"Image\u51fd\u6570",id:"image\u51fd\u6570",level:3},{value:"Image.to_types",id:"imageto_types",level:4},{value:"Image.carry_raw_data",id:"imagecarry_raw_data",level:4},{value:"Image.astype",id:"imageastype",level:4},{value:"Video",id:"video",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"video-example",level:3},{value:"Audio",id:"audio",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"audio-example",level:3},{value:"Audio\u51fd\u6570",id:"audio\u51fd\u6570",level:3},{value:"Audio.to_types",id:"audioto_types",level:4},{value:"Audio.carry_raw_data",id:"audiocarry_raw_data",level:4},{value:"Audio.astype",id:"audioastype",level:4},{value:"Text",id:"text",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"text-example",level:3},{value:"Text\u51fd\u6570",id:"text\u51fd\u6570",level:3},{value:"to_types",id:"to_types",level:4},{value:"Text.carry_raw_data",id:"textcarry_raw_data",level:4},{value:"Text.astype",id:"textastype",level:4},{value:"Text.to_str",id:"textto_str",level:4},{value:"Binary",id:"binary",level:2},{value:"Binary\u51fd\u6570",id:"binary\u51fd\u6570",level:3},{value:"Binary.to_types",id:"binaryto_types",level:4},{value:"Binary.carry_raw_data",id:"binarycarry_raw_data",level:4},{value:"Binary.astype",id:"binaryastype",level:4},{value:"Link",id:"link",level:2},{value:"Link\u51fd\u6570",id:"link\u51fd\u6570",level:3},{value:"Link.astype",id:"linkastype",level:4},{value:"S3LinkAuth",id:"s3linkauth",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"s3-example",level:3},{value:"MIMEType",id:"mimetype",level:2},{value:"LinkType",id:"linktype",level:2},{value:"Line",id:"line",level:2},{value:"Point",id:"point",level:2},{value:"Polygon",id:"polygon",level:2}],m={toc:d};function s(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"cocoobjectannotation"},"COCOObjectAnnotation"),(0,l.kt)("p",null,"\u63d0\u4f9bCOCO\u7c7b\u578b\u7684\u5b9a\u4e49\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"COCOObjectAnnotation(\n    id: int,\n    image_id: int,\n    category_id: int,\n    segmentation: Union[t.List, t.Dict],\n    area: Union[float, int],\n    bbox: Union[BoundingBox, t.List[float]],\n    iscrowd: int,\n)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"object id\uff0c\u4e00\u822c\u4e3a\u5168\u5c40object\u7684\u9012\u589eid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"image_id")),(0,l.kt)("td",{parentName:"tr",align:null},"image id\uff0c\u4e00\u822c\u4e3a\u56fe\u7247id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"category_id")),(0,l.kt)("td",{parentName:"tr",align:null},"category id\uff0c\u4e00\u822c\u4e3a\u76ee\u6807\u68c0\u6d4b\u4e2d\u7c7b\u522b\u7684id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"segmentation")),(0,l.kt)("td",{parentName:"tr",align:null},"\u7269\u4f53\u8f6e\u5ed3\u8868\u793a\uff0cPolygon(\u591a\u8fb9\u5f62\u7684\u70b9)\u6216RLE\u683c\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"area")),(0,l.kt)("td",{parentName:"tr",align:null},"object\u9762\u79ef")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bbox")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u793abounding box\uff0c\u53ef\u4ee5\u4e3aBoundingBox\u7c7b\u578b\u6216float\u7684\u5217\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"iscrowd")),(0,l.kt)("td",{parentName:"tr",align:null},"0\u8868\u793a\u662f\u4e00\u4e2a\u5355\u72ec\u7684object\uff0c1\u8868\u793a\u4e24\u4e2a\u6ca1\u6709\u5206\u5f00\u7684object")))),(0,l.kt)("h3",{id:"coco-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def _make_coco_annotations(\n    self, mask_fpath: Path, image_id: int\n) -> t.List[COCOObjectAnnotation]:\n    mask_img = PILImage.open(str(mask_fpath))\n\n    mask = np.array(mask_img)\n    object_ids = np.unique(mask)[1:]\n    binary_mask = mask == object_ids[:, None, None]\n    # TODO: tune permute without pytorch\n    binary_mask_tensor = torch.as_tensor(binary_mask, dtype=torch.uint8)\n    binary_mask_tensor = (\n        binary_mask_tensor.permute(0, 2, 1).contiguous().permute(0, 2, 1)\n    )\n\n    coco_annotations = []\n    for i in range(0, len(object_ids)):\n        _pos = np.where(binary_mask[i])\n        _xmin, _ymin = float(np.min(_pos[1])), float(np.min(_pos[0]))\n        _xmax, _ymax = float(np.max(_pos[1])), float(np.max(_pos[0]))\n        _bbox = BoundingBox(\n            x=_xmin, y=_ymin, width=_xmax - _xmin, height=_ymax - _ymin\n        )\n\n        rle: t.Dict = coco_mask.encode(binary_mask_tensor[i].numpy())  # type: ignore\n        rle["counts"] = rle["counts"].decode("utf-8")\n\n        coco_annotations.append(\n            COCOObjectAnnotation(\n                id=self.object_id,\n                image_id=image_id,\n                category_id=1,  # PennFudan Dataset only has one class-PASPersonStanding\n                segmentation=rle,\n                area=_bbox.width * _bbox.height,\n                bbox=_bbox,\n                iscrowd=0,  # suppose all instances are not crowd\n            )\n        )\n        self.object_id += 1\n\n    return coco_annotations\n')),(0,l.kt)("h2",{id:"grayscaleimage"},"GrayscaleImage"),(0,l.kt)("p",null,"\u63d0\u4f9b\u7070\u5ea6\u56fe\u7c7b\u578b\uff0c\u6bd4\u5982MNIST\u4e2d\u6570\u5b57\u624b\u5199\u4f53\u56fe\u7247\uff0c\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Image")," \u7c7b\u578b\u7684\u4e00\u4e2a\u7279\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'GrayscaleImage(\n    fp: _TArtifactFP = "",\n    display_name: str = "",\n    shape: Optional[_TShape] = None,\n    as_mask: bool = False,\n    mask_uri: str = "",\n)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fp")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7684\u8def\u5f84\u3001IO\u5bf9\u8c61\u6216\u6587\u4ef6\u5185\u5bb9\u7684bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"display_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset Viewer\u4e0a\u5c55\u793a\u7684\u540d\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shape")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7684Width\u548cHeight\uff0cchannel\u9ed8\u8ba4\u4e3a1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"as_mask")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4f5c\u4e3aMask\u56fe\u7247")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mask_uri")),(0,l.kt)("td",{parentName:"tr",align:null},"Mask\u539f\u56fe\u7684URI")))),(0,l.kt)("h3",{id:"gray-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'for i in range(0, min(data_number, label_number)):\n    _data = data_file.read(image_size)\n    _label = struct.unpack(">B", label_file.read(1))[0]\n    yield GrayscaleImage(\n        _data,\n        display_name=f"{i}",\n        shape=(height, width, 1),\n    ), {"label": _label}\n')),(0,l.kt)("h3",{id:"grayscaleimage\u51fd\u6570"},"GrayscaleImage\u51fd\u6570"),(0,l.kt)("h4",{id:"grayscaleimageto_types"},"GrayscaleImage.to_types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'to_bytes(encoding: str= "utf-8") -> bytes\n')),(0,l.kt)("h4",{id:"grayscaleimagecarry_raw_data"},"GrayscaleImage.carry_raw_data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"carry_raw_data() -> GrayscaleImage\n")),(0,l.kt)("h4",{id:"grayscaleimageastype"},"GrayscaleImage.astype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"astype() -> Dict[str, t.Any]\n")),(0,l.kt)("h2",{id:"boundingbox"},"BoundingBox"),(0,l.kt)("p",null,"\u63d0\u4f9b\u8fb9\u754c\u6846\u7c7b\u578b\uff0c\u76ee\u524d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"LTWH")," \u683c\u5f0f\uff0c\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"left_x"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"top_y"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"width")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"height"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"BoundingBox(\n    x: float,\n    y: float,\n    width: float,\n    height: float\n)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:null},"left_x\u7684\u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:null},"top_y\u7684\u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"width")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7684\u5bbd\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"height")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7684\u9ad8\u5ea6")))),(0,l.kt)("h2",{id:"classlabel"},"ClassLabel"),(0,l.kt)("p",null,"\u63cf\u8ff0label\u7684\u6570\u91cf\u548c\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"ClassLabel(\n     names: List[Union[int, float, str]]\n)\n")),(0,l.kt)("h2",{id:"image"},"Image"),(0,l.kt)("p",null,"\u56fe\u7247\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'Image(\n    fp: _TArtifactFP = "",\n    display_name: str = "",\n    shape: Optional[_TShape] = None,\n    mime_type: Optional[MIMEType] = None,\n    as_mask: bool = False,\n    mask_uri: str = "",\n)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fp")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7684\u8def\u5f84\u3001IO\u5bf9\u8c61\u6216\u6587\u4ef6\u5185\u5bb9\u7684bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"display_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset Viewer\u4e0a\u5c55\u793a\u7684\u540d\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"shape")),(0,l.kt)("td",{parentName:"tr",align:null},"\u56fe\u7247\u7684Width\u3001Height\u548cchannel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mime_type")),(0,l.kt)("td",{parentName:"tr",align:null},"MIMEType\u652f\u6301\u7684\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"as_mask")),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u4f5c\u4e3aMask\u56fe\u7247")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mask_uri")),(0,l.kt)("td",{parentName:"tr",align:null},"Mask\u539f\u56fe\u7684URI")))),(0,l.kt)("h3",{id:"image-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import io\nimport typing as t\nimport pickle\nfrom PIL import Image as PILImage\nfrom starwhale import Image, MIMEType\n\ndef _iter_item(paths: t.List[Path]) -> t.Generator[t.Tuple[t.Any, t.Dict], None, None]:\n    for path in paths:\n        with path.open("rb") as f:\n            content = pickle.load(f, encoding="bytes")\n            for data, label, filename in zip(\n                content[b"data"], content[b"labels"], content[b"filenames"]\n            ):\n                annotations = {\n                    "label": label,\n                    "label_display_name": dataset_meta["label_names"][label],\n                }\n\n                image_array = data.reshape(3, 32, 32).transpose(1, 2, 0)\n                image_bytes = io.BytesIO()\n                PILImage.fromarray(image_array).save(image_bytes, format="PNG")\n\n                yield Image(\n                    fp=image_bytes.getvalue(),\n                    display_name=filename.decode(),\n                    shape=image_array.shape,\n                    mime_type=MIMEType.PNG,\n                ), annotations\n')),(0,l.kt)("h3",{id:"image\u51fd\u6570"},"Image\u51fd\u6570"),(0,l.kt)("h4",{id:"imageto_types"},"Image.to_types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'to_bytes(encoding: str= "utf-8") -> bytes\n')),(0,l.kt)("h4",{id:"imagecarry_raw_data"},"Image.carry_raw_data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"carry_raw_data() -> GrayscaleImage\n")),(0,l.kt)("h4",{id:"imageastype"},"Image.astype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"astype() -> Dict[str, t.Any]\n")),(0,l.kt)("h2",{id:"video"},"Video"),(0,l.kt)("p",null,"\u89c6\u9891\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'Video(\n    fp: _TArtifactFP = "",\n    display_name: str = "",\n    mime_type: Optional[MIMEType] = None,\n)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fp")),(0,l.kt)("td",{parentName:"tr",align:null},"\u89c6\u9891\u7684\u8def\u5f84\u3001IO\u5bf9\u8c61\u6216\u6587\u4ef6\u5185\u5bb9\u7684bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"display_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset Viewer\u4e0a\u5c55\u793a\u7684\u540d\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mime_type")),(0,l.kt)("td",{parentName:"tr",align:null},"MIMEType\u652f\u6301\u7684\u7c7b\u578b")))),(0,l.kt)("h3",{id:"video-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import typing as t\nfrom pathlib import Path\n\nfrom starwhale import Video, MIMEType\n\nroot_dir = Path(__file__).parent.parent\ndataset_dir = root_dir / "data" / "UCF-101"\ntest_ds_path = [root_dir / "data" / "test_list.txt"]\n\ndef iter_ucf_item() -> t.Generator:\n    for path in test_ds_path:\n        with path.open() as f:\n            for line in f.readlines():\n                _, label, video_sub_path = line.split()\n\n                data_path = dataset_dir / video_sub_path\n                data = Video(\n                    data_path,\n                    display_name=video_sub_path,\n                    shape=(1,),\n                    mime_type=MIMEType.WEBM,\n                )\n\n                yield f"{label}_{video_sub_path}", {\n                    "video": data,\n                    "label": label,\n                }\n')),(0,l.kt)("h2",{id:"audio"},"Audio"),(0,l.kt)("p",null,"\u97f3\u9891\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'Audio(\n    fp: _TArtifactFP = "",\n    display_name: str = "",\n    mime_type: Optional[MIMEType] = None,\n)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fp")),(0,l.kt)("td",{parentName:"tr",align:null},"\u97f3\u9891\u6587\u4ef6\u7684\u8def\u5f84\u3001IO\u5bf9\u8c61\u6216\u6587\u4ef6\u5185\u5bb9\u7684bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"display_name")),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset Viewer\u4e0a\u5c55\u793a\u7684\u540d\u5b57")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mime_type")),(0,l.kt)("td",{parentName:"tr",align:null},"MIMEType\u652f\u6301\u7684\u7c7b\u578b")))),(0,l.kt)("h3",{id:"audio-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import typing as t\nfrom starwhale import Audio\n\ndef iter_item() -> t.Generator[t.Tuple[t.Any, t.Any], None, None]:\n    for path in validation_ds_paths:\n        with path.open() as f:\n            for item in f.readlines():\n                item = item.strip()\n                if not item:\n                    continue\n\n                data_path = dataset_dir / item\n                data = Audio(\n                    data_path, display_name=item, shape=(1,), mime_type=MIMEType.WAV\n                )\n\n                speaker_id, utterance_num = data_path.stem.split("_nohash_")\n                annotations = {\n                    "label": data_path.parent.name,\n                    "speaker_id": speaker_id,\n                    "utterance_num": int(utterance_num),\n                }\n                yield data, annotations\n')),(0,l.kt)("h3",{id:"audio\u51fd\u6570"},"Audio\u51fd\u6570"),(0,l.kt)("h4",{id:"audioto_types"},"Audio.to_types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'to_bytes(encoding: str= "utf-8") -> bytes\n')),(0,l.kt)("h4",{id:"audiocarry_raw_data"},"Audio.carry_raw_data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"carry_raw_data() -> Audio\n")),(0,l.kt)("h4",{id:"audioastype"},"Audio.astype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"astype() -> Dict[str, t.Any]\n")),(0,l.kt)("h2",{id:"text"},"Text"),(0,l.kt)("p",null,"\u6587\u672c\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"utf-8")," \u683c\u5f0f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'Text(\n    content: str,\n    encoding: str = "utf-8",\n)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"content")),(0,l.kt)("td",{parentName:"tr",align:null},"text\u5185\u5bb9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"encoding")),(0,l.kt)("td",{parentName:"tr",align:null},"text\u7684\u7f16\u7801\u683c\u5f0f")))),(0,l.kt)("h3",{id:"text-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import typing as t\nfrom pathlib import Path\nfrom starwhale import Text\n\ndef iter_item(self) -> t.Generator[t.Tuple[t.Any, t.Any], None, None]:\n    root_dir = Path(__file__).parent.parent / "data"\n\n    with (root_dir / "fra-test.txt").open("r") as f:\n        for line in f.readlines():\n            line = line.strip()\n            if not line or line.startswith("CC-BY"):\n                continue\n\n            _data, _label, *_ = line.split("\\t")\n            data = Text(_data, encoding="utf-8")\n            annotations = {"label": _label}\n            yield data, annotations\n')),(0,l.kt)("h3",{id:"text\u51fd\u6570"},"Text\u51fd\u6570"),(0,l.kt)("h4",{id:"to_types"},"to_types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'to_bytes(encoding: str= "utf-8") -> bytes\n')),(0,l.kt)("h4",{id:"textcarry_raw_data"},"Text.carry_raw_data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"carry_raw_data() -> Text\n")),(0,l.kt)("h4",{id:"textastype"},"Text.astype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"astype() -> Dict[str, t.Any]\n")),(0,l.kt)("h4",{id:"textto_str"},"Text.to_str"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"to_str() -> str\n")),(0,l.kt)("h2",{id:"binary"},"Binary"),(0,l.kt)("p",null,"\u4e8c\u8fdb\u5236\u7c7b\u578b\uff0c\u7528bytes\u5b58\u50a8\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'Binary(\n    fp: _TArtifactFP = "",\n    mime_type: MIMEType = MIMEType.UNDEFINED,\n)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fp")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8def\u5f84\u3001IO\u5bf9\u8c61\u6216\u6587\u4ef6\u5185\u5bb9\u7684bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"mime_type")),(0,l.kt)("td",{parentName:"tr",align:null},"MIMEType\u652f\u6301\u7684\u7c7b\u578b")))),(0,l.kt)("h3",{id:"binary\u51fd\u6570"},"Binary\u51fd\u6570"),(0,l.kt)("h4",{id:"binaryto_types"},"Binary.to_types"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'to_bytes(encoding: str= "utf-8") -> bytes\n')),(0,l.kt)("h4",{id:"binarycarry_raw_data"},"Binary.carry_raw_data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"carry_raw_data() -> Binary\n")),(0,l.kt)("h4",{id:"binaryastype"},"Binary.astype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"astype() -> Dict[str, t.Any]\n")),(0,l.kt)("h2",{id:"link"},"Link"),(0,l.kt)("p",null,"Link\u7c7b\u578b\uff0c\u7528\u6765\u5236\u4f5c ",(0,l.kt)("inlineCode",{parentName:"p"},"remote-link")," \u7c7b\u578b\u7684\u6570\u636e\u96c6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"Link(\n    uri: str,\n    auth: Optional[LinkAuth] = DefaultS3LinkAuth,\n    offset: int = 0,\n    size: int = -1,\n    data_type: Optional[BaseArtifact] = None,\n)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uri")),(0,l.kt)("td",{parentName:"tr",align:null},"\u539f\u59cb\u6570\u636e\u7684uri\u5730\u5740\uff0c\u76ee\u524d\u652f\u6301localFS\u548cS3\u4e24\u79cd\u534f\u8bae")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"auth")),(0,l.kt)("td",{parentName:"tr",align:null},"Link Auth\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"offset")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u76f8\u5bf9uri\u6307\u5411\u7684\u6587\u4ef6\u504f\u79fb\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"size")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u5927\u5c0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"data_type")),(0,l.kt)("td",{parentName:"tr",align:null},"Link\u6307\u5411\u7684\u5b9e\u9645\u6570\u636e\u7c7b\u578b\uff0c\u76ee\u524d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"td"},"Binary"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Image"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Text"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"Audio")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"Video")," \u7c7b\u578b")))),(0,l.kt)("h3",{id:"link\u51fd\u6570"},"Link\u51fd\u6570"),(0,l.kt)("h4",{id:"linkastype"},"Link.astype"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"astype() -> Dict[str, t.Any]\n")),(0,l.kt)("h2",{id:"s3linkauth"},"S3LinkAuth"),(0,l.kt)("p",null,"\u5f53\u6570\u636e\u5b58\u50a8\u5728\u57fa\u4e8eS3\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u4e0a\u65f6\uff0c\u8be5\u7c7b\u578b\u8d1f\u8d23\u63cf\u8ff0\u6388\u6743\u3001\u5bc6\u94a5\u4fe1\u606f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'S3LinkAuth(\n    name: str = "",\n    access_key: str = "",\n    secret: str = "",\n    endpoint: str = "",\n    region: str = "local",\n)\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"Auth\u7684\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"access_key")),(0,l.kt)("td",{parentName:"tr",align:null},"S3\u8fde\u63a5\u4e2d\u7684access_key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"secret")),(0,l.kt)("td",{parentName:"tr",align:null},"S3\u8fde\u63a5\u4e2d\u7684secret")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"endpoint")),(0,l.kt)("td",{parentName:"tr",align:null},"S3\u8fde\u63a5\u4e2d\u7684endpoint\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"region")),(0,l.kt)("td",{parentName:"tr",align:null},"bucket\u6240\u5728\u7684S3 region\uff0c\u9ed8\u8ba4\u4e3alocal")))),(0,l.kt)("h3",{id:"s3-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import struct\nimport typing as t\nfrom pathlib import Path\n\nfrom starwhale import (\n    Link,\n    S3LinkAuth,\n    GrayscaleImage,\n    UserRawBuildExecutor,\n)\nclass LinkRawDatasetProcessExecutor(UserRawBuildExecutor):\n    _auth = S3LinkAuth(name="mnist", access_key="minioadmin", secret="minioadmin")\n    _endpoint = "10.131.0.1:9000"\n    _bucket = "users"\n\n    def iter_item(self) -> t.Generator[t.Tuple[t.Any, t.Any], None, None]:\n        root_dir = Path(__file__).parent.parent / "data"\n\n        with (root_dir / "t10k-labels-idx1-ubyte").open("rb") as label_file:\n            _, label_number = struct.unpack(">II", label_file.read(8))\n\n            offset = 16\n            image_size = 28 * 28\n\n            uri = f"s3://{self._endpoint}/{self._bucket}/dataset/mnist/t10k-images-idx3-ubyte"\n            for i in range(label_number):\n                _data = Link(\n                    f"{uri}",\n                    self._auth,\n                    offset=offset,\n                    size=image_size,\n                    data_type=GrayscaleImage(display_name=f"{i}", shape=(28, 28, 1)),\n                )\n                _label = struct.unpack(">B", label_file.read(1))[0]\n                yield _data, {"label": _label}\n                offset += image_size\n')),(0,l.kt)("h2",{id:"mimetype"},"MIMEType"),(0,l.kt)("p",null,"\u63cf\u8ff0Starwhale\u652f\u6301\u7684\u591a\u5a92\u4f53\u7c7b\u578b\uff0c\u7528Python Enum\u7c7b\u578b\u5b9e\u73b0\uff0c\u7528\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Image"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Video")," \u7b49\u7c7b\u578b\u7684mime_type \u5c5e\u6027\u4e0a\uff0c\u80fd\u66f4\u597d\u7684\u8fdb\u884cDataset Viewer\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class MIMEType(Enum):\n    PNG = "image/png"\n    JPEG = "image/jpeg"\n    WEBP = "image/webp"\n    SVG = "image/svg+xml"\n    GIF = "image/gif"\n    APNG = "image/apng"\n    AVIF = "image/avif"\n    PPM = "image/x-portable-pixmap"\n    MP4 = "video/mp4"\n    AVI = "video/avi"\n    WEBM = "video/webm"\n    WAV = "audio/wav"\n    MP3 = "audio/mp3"\n    PLAIN = "text/plain"\n    CSV = "text/csv"\n    HTML = "text/html"\n    GRAYSCALE = "x/grayscale"\n    UNDEFINED = "x/undefined"\n')),(0,l.kt)("h2",{id:"linktype"},"LinkType"),(0,l.kt)("p",null,"\u63cf\u8ff0Starwhale\u652f\u6301\u7684remote-link\u7c7b\u578b\uff0c\u7528Python Enum\u7c7b\u578b\u5b9e\u73b0\uff0c\u76ee\u524d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"LocalFS")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"S3")," \u4e24\u79cd\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class LinkType(Enum):\n    LocalFS = "local_fs"\n    S3 = "s3"\n    UNDEFINED = "undefined"\n')),(0,l.kt)("h2",{id:"line"},"Line"),(0,l.kt)("p",null,"\u63cf\u8ff0\u76f4\u7ebf\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import ds, Point, Line\n\nwith dataset("collections") as ds:\n    line_points = [\n        Point(x=0.0, y=1.0),\n        Point(x=0.0, y=100.0)\n    ]\n    ds.append({"line": line_points})\n    ds.commit()\n')),(0,l.kt)("h2",{id:"point"},"Point"),(0,l.kt)("p",null,"\u63cf\u8ff0\u70b9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import ds, Point\n\nwith dataset("collections") as ds:\n    ds.append(Point(x=0.0, y=100.0))\n    ds.commit()\n')),(0,l.kt)("h2",{id:"polygon"},"Polygon"),(0,l.kt)("p",null,"\u63cf\u8ff0\u591a\u8fb9\u5f62\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import ds, Point, Polygon\n\nwith dataset("collections") as ds:\n    polygon_points = [\n        Point(x=0.0, y=1.0),\n        Point(x=0.0, y=100.0),\n        Point(x=2.0, y=1.0),\n        Point(x=2.0, y=100.0),\n    ]\n    ds.append({"polygon": polygon_points})\n    ds.commit()\n')))}s.isMDXComponent=!0}}]);