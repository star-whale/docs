"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[2386],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(t),u=l,h=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return t?a.createElement(h,o(o({ref:n},m),{},{components:t})):a.createElement(h,o({ref:n},m))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(83117),l=(t(67294),t(3905));const r={title:"PennFudanPed\u6570\u636e\u96c6\u7684\u76ee\u6807\u68c0\u6d4b\u4efb\u52a1\u6a21\u578b\u8bc4\u6d4b"},o=void 0,i={unversionedId:"examples/pfp",id:"examples/pfp",title:"PennFudanPed\u6570\u636e\u96c6\u7684\u76ee\u6807\u68c0\u6d4b\u4efb\u52a1\u6a21\u578b\u8bc4\u6d4b",description:"\u672c\u4f8b\u5b50\u53c2\u8003TorchVision\u5bf9PennFudanPed\u6570\u636e\u96c6\u8fdb\u884cNeural Machine Translation\u548c\u6a21\u578b\u8bc4\u6d4b\uff0c\u76f8\u5173\u4ee3\u7801\u7684\u94fe\u63a5\uff1aexample/PennFudanPed\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/examples/pfp.md",sourceDirName:"examples",slug:"/examples/pfp",permalink:"/zh/docs/next/examples/pfp",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/examples/pfp.md",tags:[],version:"current",frontMatter:{title:"PennFudanPed\u6570\u636e\u96c6\u7684\u76ee\u6807\u68c0\u6d4b\u4efb\u52a1\u6a21\u578b\u8bc4\u6d4b"}},s={},p=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u57fa\u7840\u73af\u5883",id:"\u57fa\u7840\u73af\u5883",level:3},{value:"Starwhale Runtime\u6fc0\u6d3b",id:"starwhale-runtime\u6fc0\u6d3b",level:3},{value:"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3",id:"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3",level:3},{value:"Starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b",id:"starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b",level:2},{value:"\u6b65\u9aa41\uff1a\u6784\u5efaStarwhale Dataset",id:"\u6b65\u9aa41\u6784\u5efastarwhale-dataset",level:3},{value:"\u6b65\u9aa42\uff1aStandalone Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b",id:"\u6b65\u9aa42standalone-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b",level:3},{value:"\u6b65\u9aa43\uff1a\u6784\u5efaStarwhale Model",id:"\u6b65\u9aa43\u6784\u5efastarwhale-model",level:3},{value:"\u6b65\u9aa44\uff1aCloud Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\uff08\u53ef\u9009\uff09",id:"\u6b65\u9aa44cloud-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\u53ef\u9009",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],m={toc:p};function c(e){let{components:n,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u4f8b\u5b50",(0,l.kt)("a",{parentName:"p",href:"https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html"},"\u53c2\u8003TorchVision"),"\u5bf9",(0,l.kt)("a",{parentName:"p",href:"https://www.cis.upenn.edu/~jshi/ped_html/"},"PennFudanPed\u6570\u636e\u96c6"),"\u8fdb\u884cNeural Machine Translation\u548c\u6a21\u578b\u8bc4\u6d4b\uff0c\u76f8\u5173\u4ee3\u7801\u7684\u94fe\u63a5\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/PennFudanPed"},"example/PennFudanPed"),"\u3002"),(0,l.kt)("p",null,"\u4ece\u8be5\u4f8b\u4e2d\uff0c\u6211\u4eec\u80fd\u5b9e\u8df5\u5982\u4e0bStarwhale\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4f7f\u7528COCOObjectAnnotation\u7c7b\u578b\u4f5c\u4e3aAnnotation\u6784\u5efa\u9002\u7528\u4e8e\u76ee\u6807\u68c0\u6d4b\u7684\u6570\u636e\u96c6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"starwhale.Evaluation")," SDK\u81ea\u4e3b\u4e0a\u62a5\u8bc4\u6d4b\u7ed3\u679c\u3002")),(0,l.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,l.kt)("p",null,"\u9605\u8bfb\u672c\u6587\u524d\uff0c\u5efa\u8bae\u5148\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"../runtime/examples/pytorch.md"},"Pytorch Runtime\u6784\u5efa"),", ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/next/examples/speech"},"Speech Commands\u6570\u636e\u96c6\u7684\u591a\u5206\u7c7b\u4efb\u52a1\u6a21\u578b\u8bc4\u6d4b"),"\u3002"),(0,l.kt)("h3",{id:"\u57fa\u7840\u73af\u5883"},"\u57fa\u7840\u73af\u5883"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python\u7248\u672c: 3.7 ~ 3.10\u3002"),(0,l.kt)("li",{parentName:"ul"},"OS\u73af\u5883: Linux\u6216macOS(\u4ec5\u8fd0\u884cStandalone)\u3002"),(0,l.kt)("li",{parentName:"ul"},"Starwhale Client \u5b8c\u6210\u5b89\u88c5\uff0c\u4e14\u7248\u672c\u4e0d\u65e9\u4e8e0.3.0\u3002"),(0,l.kt)("li",{parentName:"ul"},"[\u53ef\u9009]","Starwhale Controller \u5b8c\u6210\u5b89\u88c5\uff0c\u4e14\u7248\u672c\u4e0d\u65e9\u4e8e0.3.0\uff0c\u5982\u679c\u53ea\u5e0c\u671b\u5728Standalone Instance\u4e2d\u8fdb\u884c\u8bc4\u6d4b\uff0c\u53ef\u4ee5\u5ffd\u7565\u8be5\u6b65\u9aa4\u3002"),(0,l.kt)("li",{parentName:"ul"},"Runtime: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/runtime/pytorch"},"Pytorch Runtime Example"))),(0,l.kt)("h3",{id:"starwhale-runtime\u6fc0\u6d3b"},"Starwhale Runtime\u6fc0\u6d3b"),(0,l.kt)("p",null,"\u672c\u4f8b\u53ef\u4ee5\u4f7f\u7528Starwhale\u63d0\u4f9b\u7684",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/runtime/pytorch"},"Pytorch Runtime\u4f8b\u5b50"),"\u4f5c\u4e3aStarwhale Runtime\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7f16\u5199Runtime\u914d\u7f6e\u3002\u6a21\u578b\u8bad\u7ec3\u548c\u8bc4\u6d4b\u90fd\u53ef\u4ee5\u4f7f\u7528\u8be5Runtime\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u51c6\u5907Runtime\uff1a\u4e0b\u8f7d\u6216\u91cd\u65b0\u6784\u5efa\uff0c\u5982\u4f55Standalone Instance\u4e2d\u5df2\u7ecf\u6709\u8be5Runtime\uff0c\u5219\u5ffd\u7565\u8be5\u6b65\u9aa4\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e0b\u8f7dStarwhale Cloud\u5df2\u7ecf\u6784\u5efa\u597d\u7684Pytorch Runtime\nswcli runtime copy https://cloud.starwhale.ai/project/demo/runtime/pytorch/version/latest self\n\n# \u6216\u6839\u636epytorch runtime example\u5728\u672c\u5730\u6784\u5efa\u4e00\u4e2a\u65b0\u7684Runtime\ngit clone --depth=1 https://github.com/star-whale/starwhale.git\ncd starwhale/example/runtime/pytorch\nswcli runtime build .\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Activate Runtime\uff1a\u5728\u5f53\u524dshell\u4e2d\u6fc0\u6d3b\u76f8\u5e94\u7684Python\u73af\u5883")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"swcli runtime activate pytorch/version/latest\n")),(0,l.kt)("h3",{id:"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3"},"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3"),(0,l.kt)("p",null,"\u6570\u636e\u51c6\u5907\u548c\u6a21\u578b\u8bad\u7ec3\u975e\u5e38\u5bb9\u6613\uff0c\u53ea\u9700\u8981\u4e09\u6b65\u5c31\u80fd\u5b8c\u6210\u64cd\u4f5c\uff1a\u4e0b\u8f7d\u4ee3\u7801\u3001\u4e0b\u8f7d\u6570\u636e\u3001\u5f00\u59cb\u8bad\u7ec3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone --depth=1 https://github.com/star-whale/starwhale.git\ncd starwhale/example/PennFudanPed\nmake download-data\nmake train\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"make download-data")," \u547d\u4ee4\u4e0b\u8f7d\u6570\u636e\u7684\u65f6\u5019\uff0c\u5982\u679c\u9047\u5230\u7f51\u7edc\u95ee\u9898\uff0c\u8bf7\u5408\u7406\u8bbe\u7f6e\u4ee3\u7406\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"make train")," \u547d\u4ee4\u9700\u8981\u5728Pytorch Runtime \u5df2\u7ecf\u6fc0\u6d3b\u7684Shell\u73af\u5883\u4e2d\u6267\u884c\uff0c\u5426\u5219\u53ef\u80fd\u63d0\u793a\u67d0\u4e9bPython\u5305Import Error\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"make train")," \u8fc7\u7a0b\u53ef\u80fd\u4f1a\u6bd4\u8f83\u6162\uff0c\u6267\u884c\u65f6\u95f4\u957f\u77ed\u53d6\u51b3\u4e8e\u673a\u5668\u914d\u7f6e\u3001GPU\u8d44\u6e90\u60c5\u51b5\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u6267\u884c\u7ed3\u675f\u540e\uff0c\u53ef\u4ee5\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"data"),"\u76ee\u5f55\u67e5\u770b\u539f\u59cb\u6570\u636e\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"models"),"\u76ee\u5f55\u67e5\u770b\u5df2\u7ecf\u6784\u5efa\u597d\u7684\u6a21\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728train.py\u5bf9\u8bad\u7ec3\u8fc7\u7a0b\u7684\u4e00\u4e9b\u53c2\u6570\u8fdb\u884c\u8c03\u6574\uff0c\u6bd4\u5982epoch\u503c\u7b49\u3002")),(0,l.kt)("h2",{id:"starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b"},"Starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b"),(0,l.kt)("h3",{id:"\u6b65\u9aa41\u6784\u5efastarwhale-dataset"},"\u6b65\u9aa41\uff1a\u6784\u5efaStarwhale Dataset"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u5df2\u7ecf\u6fc0\u6d3b\u8be5runtime\u73af\u5883\uff0c\u5219\u5ffd\u7565\u672c\u884c\u547d\u4ee4\nswcli runtime activate pytorch/version/latest\n# \u6839\u636edataset.yaml\u6784\u5efaswds-bin\u683c\u5f0fin\u683c\u5f0f\u7684\u6570\u636e\u96c6\nswcli dataset build .\n# \u67e5\u770b\u6700\u65b0\u6784\u5efa\u7684\u6570\u636e\u96c6\u8be6\u60c5\nswcli dataset info pfp/version/latest\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\u547d\u4ee4\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"starwhale/example/PennFudanPed"),"\u4e2d\u6267\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u5176\u4ed6\u76ee\u5f55\u4e2d\u6267\u884c\uff0c\u4f46\u8981\u5408\u7406\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli dataset build"),"\u547d\u4ee4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u53c2\u6570\u3002\u9664\u4e86\u53ef\u4ee5\u5728\u6267\u884cbuild\u547d\u4ee4\u524d\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"runtime activate")," \u547d\u4ee4\u6fc0\u6d3bRuntime\uff0c\u4e5f\u53ef\u4ee5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"model build")," \u547d\u4ee4\u4e2d\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"--runtime pytorch/version/latest")," \u53c2\u6570\uff0c\u786e\u4fdd\u6267\u884c\u8be5\u547d\u4ee4\u662f\u5728Pytorch Runtime\u4e2d\u8fdb\u884c\u7684\u3002"),(0,l.kt)("p",null,"PennFudanPed \u4f8b\u5b50\u662f\u6bd4\u8f83\u5178\u578b\u7684COCO\u683c\u5f0f\u6570\u636e\u96c6\u5f62\u5f0f\uff0cStarwhale SDK\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"p"},"COCOObjectAnnotation")," \u7c7b\u578b\u548c\u591aAnnotation\u673a\u5236\uff0c\u53ef\u4ee5\u8ba9\u6570\u636e\u96c6\u6784\u5efa\u975e\u5e38\u5bb9\u6613\uff0c\u6838\u5fc3\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from PIL import Image as PILImage\nfrom pycocotools import mask as coco_mask\nfrom starwhale import Image, MIMEType, BoundingBox, COCOObjectAnnotation\n\nclass PFPDatasetBuildExecutor:\n    def __iter__(self) -> t.Generator[t.Tuple[t.Any, t.Any], None, None]:\n        root_dir = Path(__file__).parent.parent / "data" / "PennFudanPed"\n        names = [p.stem for p in (root_dir / "PNGImages").iterdir()]\n        self.object_id = 1\n        for idx, name in enumerate(sorted(names)):\n            data_fpath = root_dir / "PNGImages" / f"{name}.png"\n            mask_fpath = root_dir / "PedMasks" / f"{name}_mask.png"\n            height, width = self._get_image_shape(data_fpath)\n            coco_annotations = self._make_coco_annotations(mask_fpath, idx)\n            annotations = {\n                "mask": Image(\n                    mask_fpath,\n                    display_name=name,\n                    mime_type=MIMEType.PNG,\n                    shape=(height, width, 3),\n                    as_mask=True,\n                    mask_uri=name,\n                ).carry_raw_data(),\n                "image": {"id": idx, "height": height, "width": width, "name": name},\n                "object_nums": len(coco_annotations),\n                "annotations": coco_annotations,\n            }\n            data = Image(\n                data_fpath,\n                display_name=name,\n                mime_type=MIMEType.PNG,\n                shape=(height, width, 3),\n            )\n            yield data, annotations\n\n    def _make_coco_annotations(\n        self, mask_fpath: Path, image_id: int\n    ) -> t.List[COCOObjectAnnotation]:\n        mask_img = PILImage.open(str(mask_fpath))\n\n        mask = np.array(mask_img)\n        object_ids = np.unique(mask)[1:]\n        binary_mask = mask == object_ids[:, None, None]\n        # TODO: tune permute without pytorch\n        binary_mask_tensor = torch.as_tensor(binary_mask, dtype=torch.uint8)\n        binary_mask_tensor = (\n            binary_mask_tensor.permute(0, 2, 1).contiguous().permute(0, 2, 1)\n        )\n\n        coco_annotations = []\n        for i in range(0, len(object_ids)):\n            _pos = np.where(binary_mask[i])\n            _xmin, _ymin = float(np.min(_pos[1])), float(np.min(_pos[0]))\n            _xmax, _ymax = float(np.max(_pos[1])), float(np.max(_pos[0]))\n            _bbox = BoundingBox(\n                x=_xmin, y=_ymin, width=_xmax - _xmin, height=_ymax - _ymin\n            )\n\n            rle: t.Dict = coco_mask.encode(binary_mask_tensor[i].numpy())  # type: ignore\n            rle["counts"] = rle["counts"].decode("utf-8")\n\n            coco_annotations.append(\n                COCOObjectAnnotation(\n                    id=self.object_id,\n                    image_id=image_id,\n                    category_id=1,  # PennFudan Dataset only has one class-PASPersonStanding\n                    segmentation=rle,\n                    area=_bbox.width * _bbox.height,\n                    bbox=_bbox,\n                    iscrowd=0,  # suppose all instances are not crowd\n                )\n            )\n            self.object_id += 1\n\n        return coco_annotations\n')),(0,l.kt)("p",null,"\u540c\u65f6Cloud Instance\u5bf9\u6b64\u7c7b\u6570\u636e\u96c6\u63d0\u4f9b\u4e86\u9002\u5408\u7684\u53ef\u89c6\u5316\u5448\u73b0\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"pfp-dataset.gif",src:t(69208).Z,width:"2522",height:"1368"})),(0,l.kt)("h3",{id:"\u6b65\u9aa42standalone-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b"},"\u6b65\u9aa42\uff1aStandalone Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6839\u636emodel.yaml\u8fd0\u884c\u8bc4\u6d4b\u4efb\u52a1\nswcli model eval . --dataset mask_rcnn/version/latest\n# \u5c55\u793a\u8bc4\u6d4b\u7ed3\u679c\nswcli model info ${version}\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\u547d\u4ee4\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"starwhale/example/PennFudanPed"),"\u4e2d\u6267\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u5176\u4ed6\u76ee\u5f55\u4e2d\u6267\u884c\uff0c\u4f46\u8981\u5408\u7406\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model eval"),"\u547d\u4ee4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u53c2\u6570\u3002"),(0,l.kt)("p",null,"PennFudanPed\u4f8b\u5b50\u662f\u591a\u76ee\u6807\u68c0\u6d4b\u95ee\u9898\uff0c\u65e0\u6cd5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"starwhale.multi_classification")," \u4fee\u9970\u5668\uff0cStarwhale SDK\u4e2d\u4e5f\u6ca1\u6709\u63d0\u4f9b\u5408\u9002\u7684\u4fee\u9970\u5668\u81ea\u52a8\u5904\u7406cmp\u7ed3\u679c\u3002\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"self.evaluation_store.log_metrics")," \u51fd\u6570\uff0c\u5c06report\u7684\u7ed3\u679c\u5b58\u50a8\u5230Starwhale Datastore\u4e2d\uff0c\u8fd9\u6837\u5728Standalone Instance \u548c Cloud Instance\u4e2d\u90fd\u80fd\u770b\u5230\u76f8\u5173\u7ed3\u679c\u3002\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"evaluation")," SDK\u4e0a\u62a5\u5404\u79cd\u8bc4\u6d4b\u7ed3\u679c\u6570\u636e\u3002"),(0,l.kt)("p",null,"cmp\u4e2d\u6838\u5fc3\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def cmp(self, ppl_result):\n    pred_results, annotations = [], []\n    for _data in ppl_result:\n        annotations.append(_data["input"])\n        pred_results.append(_data["output"])\n\n    evaluator = make_coco_evaluator(annotations, iou_types=self.iou_types)\n    for index, pred in pred_results:\n        evaluator.update({index: pred})\n\n    evaluator.synchronize_between_processes()\n    evaluator.accumulate()\n    evaluator.summarize()\n\n    detector_metrics_map = [\n        "average_precision",\n        "average_precision_iou50",\n        "average_precision_iou75",\n        "ap_across_scales_small",\n        "ap_across_scales_medium",\n        "ap_across_scales_large",\n        "average_recall_max1",\n        "average_recall_max10",\n        "average_recall_max100",\n        "ar_across_scales_small",\n        "ar_across_scales_medium",\n        "ar_across_scales_large",\n    ]\n\n    report = {"kind": "coco_object_detection", "bbox": {}, "segm": {}}\n    for _iou, _eval in evaluator.coco_eval.items():\n        if _iou not in report:\n            continue\n\n        _stats = _eval.stats.tolist()\n        for _idx, _label in enumerate(detector_metrics_map):\n            report[_iou][_label] = _stats[_idx]\n\n    self.evaluation_store.log_metrics(report)\n')),(0,l.kt)("p",null,"\u5728Standalone Instance\u4e2d\u5448\u73b0\u8bc4\u6d4b\u7ed3\u679c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"eval-info.png",src:t(92856).Z,width:"2545",height:"997"})),(0,l.kt)("p",null,"\u5728Cloud Instance\u4e2d\u5448\u73b0\u8bc4\u6d4b\u7ed3\u679c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"eval-cloud.png",src:t(32607).Z,width:"2532",height:"751"})),(0,l.kt)("h3",{id:"\u6b65\u9aa43\u6784\u5efastarwhale-model"},"\u6b65\u9aa43\uff1a\u6784\u5efaStarwhale Model"),(0,l.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u7ecf\u8fc7\u591a\u6b21\u8fd0\u884c\u6a21\u578b\u8bc4\u6d4b\u547d\u4ee4(\u6b65\u9aa42)\u8fdb\u884c\u8c03\u8bd5\uff0c\u5f97\u5230\u4e00\u4e2a\u53ef\u4ee5\u5728\u5927\u6570\u636e\u91cf\u4e0b\u8fd0\u884c\u8bc4\u6d4b\u6216\u53ef\u53d1\u5e03\u7684\u6a21\u578b\uff0c\u5c31\u9700\u8981\u6267\u884c\u6b65\u9aa43\uff0c\u6784\u5efa\u4e00\u4e2a\u53ef\u5206\u53d1\u7684Starwhale Model\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#\u6839\u636emodel.yaml\u6784\u5efaStarwhale Model\nswcli model build .\n# \u67e5\u770b\u6700\u65b0\u6784\u5efa\u7684\u6a21\u578b\u4fe1\u606f\nswcli model info mask_rcnn/version/latest\n")),(0,l.kt)("h3",{id:"\u6b65\u9aa44cloud-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\u53ef\u9009"},"\u6b65\u9aa44\uff1aCloud Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\uff08\u53ef\u9009\uff09"),(0,l.kt)("p",null,"\u5728Cloud Instance\u4e0a\u8fd0\u884c\u8bc4\u6d4b\u4efb\u52a1\uff0c\u9700\u8981\u5c06Standalone Instance\u4e0a\u6784\u5efa\u7684Model\u3001Dataset\u548cRuntime\u53d1\u5e03\u5230\u76f8\u5e94\u7684Instance\u4e0a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u767b\u9646\u76f8\u5173instance\uff0c\u4e4b\u540e\u53ef\u4ee5\u7528 prod alias\u8bbf\u95ee\u8be5instance\nswcli instance login --username ${username} --token ${token}  http://${instance-address} --alias prod\n# \u5c06\u672c\u5730\u9ed8\u8ba4instance\u6539\u4e3astandalone\nswcli instance select local\n#\u4e0a\u4f20model\u5230prod instance\u4e2dname\u4e3astarwhale\u7684project\u4e2d\nswcli model copy mask_rcnn/version/latest cloud://prod/project/starwhale\n#\u4e0a\u4f20dataset\u5230prod instance\u4e2dname\u4e3astarwhale\u7684project\u4e2d\nswcli dataset copy pfp/version/latest cloud://prod/project/starwhale\n#\u4e0a\u4f20runtime\u5230prod instance\u4e2dname\u4e3astarwhale\u7684project\u4e2d\nswcli runtime copy pytorch/version/latest cloud://prod/project/starwhale\n")),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u53ef\u4ee5\u5728\u7ec8\u7aef\u4e2d\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"swcli ui prod"),"\u547d\u4ee4\uff0c\u53ef\u4ee5\u62c9\u8d77\u6d4f\u89c8\u5668\u5e76\u8fdb\u5165prod instance\u7684web\u9875\u9762\u4e2d\uff0c\u63a5\u7740\u8fdb\u5165\u76f8\u5173project\uff0c\u521b\u5efa\u8bc4\u6d4b\u4efb\u52a1\u5373\u53ef\u3002"),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.cis.upenn.edu/~jshi/ped_html/"},"Penn-Fudan Database for Pedestrian Detection and Segmentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html"},"TorchVision object detection finetuning tutorial"))))}c.isMDXComponent=!0},32607:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/pfp-cloud-result-diff-3e6b3544f38b7344d8b1259fdc578f83.png"},69208:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/pfp-dataset-4b53e864ec8066046099c81f4a631e2d.gif"},92856:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/pfp-eval-info-616198eb97a8b3796bf560f68ff20292.png"}}]);