"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[64559],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(t),u=r,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return t?n.createElement(g,l(l({ref:a},m),{},{components:t})):n.createElement(g,l({ref:a},m))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},16678:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(83117),r=(t(67294),t(3905));const o={title:"\u6570\u636e\u96c6\u4e0e\u5176\u4ed6ML\u5e93\u7684\u96c6\u6210"},l=void 0,i={unversionedId:"dataset/integration",id:"version-0.6.9/dataset/integration",title:"\u6570\u636e\u96c6\u4e0e\u5176\u4ed6ML\u5e93\u7684\u96c6\u6210",description:"Starwhale \u6570\u636e\u96c6\u53ef\u4ee5 Pillow, Numpy, Huggingface Datasets, Pytorch \u548c Tensorflow \u7b49\u6d41\u884c\u7684ML\u5e93\u8fdb\u884c\u826f\u597d\u7684\u96c6\u6210\uff0c\u65b9\u4fbf\u8fdb\u884c\u6570\u636e\u8f6c\u5316\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.9/dataset/integration.md",sourceDirName:"dataset",slug:"/dataset/integration",permalink:"/zh/0.6.9/dataset/integration",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.9/dataset/integration.md",tags:[],version:"0.6.9",frontMatter:{title:"\u6570\u636e\u96c6\u4e0e\u5176\u4ed6ML\u5e93\u7684\u96c6\u6210"},sidebar:"mainSidebar",previous:{title:"\u6570\u636e\u96c6\u7248\u672c\u63a7\u5236",permalink:"/zh/0.6.9/dataset/version"},next:{title:"Starwhale \u6a21\u578b\u8bc4\u6d4b",permalink:"/zh/0.6.9/evaluation/"}},s={},p=[{value:"Pillow",id:"pillow",level:2},{value:"\u4f7f\u7528 Pillow Image \u521d\u59cb\u5316 Starwhale Image",id:"\u4f7f\u7528-pillow-image-\u521d\u59cb\u5316-starwhale-image",level:3},{value:"\u5c06 Starwhale Image \u8f6c\u5316\u4e3a Pillow Image",id:"\u5c06-starwhale-image-\u8f6c\u5316\u4e3a-pillow-image",level:3},{value:"Numpy",id:"numpy",level:2},{value:"\u8f6c\u5316\u4e3a numpy.ndarray",id:"\u8f6c\u5316\u4e3a-numpyndarray",level:3},{value:"\u4f7f\u7528 numpy.ndarray \u521d\u59cb\u5316 Starwhale Image",id:"\u4f7f\u7528-numpyndarray-\u521d\u59cb\u5316-starwhale-image",level:3},{value:"Huggingface Datasets",id:"huggingface-datasets",level:2},{value:"Pytorch",id:"pytorch",level:2},{value:"Tensorflow",id:"tensorflow",level:2}],m={toc:p};function d(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Starwhale \u6570\u636e\u96c6\u53ef\u4ee5 Pillow, Numpy, Huggingface Datasets, Pytorch \u548c Tensorflow \u7b49\u6d41\u884c\u7684ML\u5e93\u8fdb\u884c\u826f\u597d\u7684\u96c6\u6210\uff0c\u65b9\u4fbf\u8fdb\u884c\u6570\u636e\u8f6c\u5316\u3002"),(0,r.kt)("h2",{id:"pillow"},"Pillow"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../reference/sdk/type#image"},"Starwhale Image")," \u7c7b\u578b\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"https://pillow.readthedocs.io/en/stable/reference/Image.html"},"Pillow Image")," \u5bf9\u8c61\u8fdb\u884c\u53cc\u5411\u8f6c\u5316\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528-pillow-image-\u521d\u59cb\u5316-starwhale-image"},"\u4f7f\u7528 Pillow Image \u521d\u59cb\u5316 Starwhale Image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\n\n# login cloud instance in advance: `swcli instance login` command or `starwhale.login` sdk\n# raw dataset url: https://cloud.starwhale.cn/projects/397/datasets/172/versions/236/files\nds = dataset("https://cloud.starwhale.cn/project/starwhale:object-detection/dataset/coco128/v2")\nimg = ds.head(n=1)[0].features.image\n\npil = img.to_pil()\nprint(pil)\nprint(pil.size)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"<PIL.JpegImagePlugin.JpegImageFile image mode=RGB size=640x480 at 0x7F77FBA98250>\n(640, 480)\n")),(0,r.kt)("h3",{id:"\u5c06-starwhale-image-\u8f6c\u5316\u4e3a-pillow-image"},"\u5c06 Starwhale Image \u8f6c\u5316\u4e3a Pillow Image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import numpy\nfrom PIL import Image as PILImage\nfrom starwhale import Image\n\n# generate a random image\nrandom_array = numpy.random.randint(low=0, high=256, size=(100, 100, 3), dtype=numpy.uint8)\npil = PILImage.fromarray(random_array, mode="RGB")\n\nimg = Image(pil)\nprint(img)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"ArtifactType.Image, display:, mime_type:MIMEType.UNDEFINED, shape:[None, None, 3], encoding:\n")),(0,r.kt)("h2",{id:"numpy"},"Numpy"),(0,r.kt)("h3",{id:"\u8f6c\u5316\u4e3a-numpyndarray"},"\u8f6c\u5316\u4e3a numpy.ndarray"),(0,r.kt)("p",null,"Starwhale \u7684\u4ee5\u4e0b\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u8f6c\u5316\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"numpy.ndarray")," \u5bf9\u8c61:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Image"),"\uff1a\u5148\u8f6c\u5316\u4e3aPillow Image\u7c7b\u578b\uff0c\u7136\u540e\u518d\u8f6c\u5316\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"numpy.ndarray")," \u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Video"),"\uff1a\u5c06 video bytes \u76f4\u63a5\u8f6c\u5316 ",(0,r.kt)("inlineCode",{parentName:"li"},"numpy.ndarray")," \u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Audio"),"\uff1a\u8c03\u7528 soundfile \u5e93\u5c06 audio bytes \u8f6c\u5316\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"numpy.ndarray")," \u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BoundingBox"),"\uff1a\u8f6c\u5316\u4e3a xywh \u683c\u5f0f\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"numpy.ndarray")," \u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Binary"),"\uff1a\u5c06 bytes \u76f4\u63a5\u8f6c\u5316 ",(0,r.kt)("inlineCode",{parentName:"li"},"numpy.ndarray")," \u5bf9\u8c61\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\n\n# login cloud instance in advance: `swcli instance login` command or `starwhale.login` sdk\n# raw dataset url: https://cloud.starwhale.cn/projects/397/datasets/172/versions/236/files\nds = dataset("https://cloud.starwhale.cn/project/starwhale:object-detection/dataset/coco128/v2")\n\nitem = ds.head(n=1)[0]\n\nimg = item.features.image\nimg_array = img.to_numpy()\nprint(img_array)\nprint(img_array.shape)\n\nbbox = item.features.annotations[0]["bbox"]\nprint(bbox)\nprint(bbox.to_numpy())\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"<class 'numpy.ndarray'>\n(480, 640, 3)\nBoundingBox[XYWH]- x:1.0799999999999699, y:187.69008, width:611.5897600000001, height:285.84000000000003\narray([  1.08   , 187.69008, 611.58976, 285.84   ])\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528-numpyndarray-\u521d\u59cb\u5316-starwhale-image"},"\u4f7f\u7528 numpy.ndarray \u521d\u59cb\u5316 Starwhale Image"),(0,r.kt)("p",null,"\u5f53\u4e00\u4e2a\u56fe\u7247\u8868\u793a\u4e3a numpy.ndarray \u5bf9\u8c61\u65f6\uff0c\u53ef\u4ee5\u7528\u6765\u521d\u59cb\u5316\u4e3a Starwhale Image \u5bf9\u8c61\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import numpy\nfrom starwhale import Image\n\n# generate a random image numpy.ndarray\nrandom_array = numpy.random.randint(low=0, high=256, size=(100, 100, 3), dtype=numpy.uint8)\nimg = Image(random_array)\nprint(img)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"ArtifactType.Image, display:, mime_type:MIMEType.UNDEFINED, shape:[None, None, 3], encoding:\n")),(0,r.kt)("h2",{id:"huggingface-datasets"},"Huggingface Datasets"),(0,r.kt)("p",null,"Huggingface Hub \u4e0a\u6709\u5927\u91cf\u7684\u6570\u636e\u96c6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e00\u884c\u4ee3\u7801\u5c31\u80fd\u8f6c\u5316\u4e3a Starwhale \u6570\u636e\u96c6\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Huggingface Datasets \u8f6c\u5316\u9700\u8981\u4f9d\u8d56 ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/datasets/"},"datasets")," \u5e93\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import Dataset\n\n# You only specify starwhale dataset expected name and huggingface repo name\n# example: https://huggingface.co/datasets/lambdalabs/pokemon-blip-captions\nds = Dataset.from_huggingface("pokemon", "lambdalabs/pokemon-blip-captions")\nprint(ds)\nprint(len(ds))\nprint(repr(ds.fetch_one()))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"\ud83c\udf0a creating dataset local/project/self/dataset/pokemon/version/r2m3is6ormwcio4gtayop25qk4gmfr6mcei6hise...\n\ud83e\udd8b update 833 records into dataset\nDataset: pokemon, stash version: r2m3is6ormwcio4gtayop25qk4gmfr6mcei6hise, loading version: r2m3is6ormwcio4gtayop25qk4gmfr6mcei6hise\n833\nindex:default/train/0, features:{'image': ArtifactType.Image, display:, mime_type:MIMEType.JPEG, shape:[1280, 1280, 3], encoding: , 'text': 'a drawing of a green pokemon with red eyes', '_hf_subset': 'default', '_hf_split': 'train'}, shadow dataset: None\n")),(0,r.kt)("h2",{id:"pytorch"},"Pytorch"),(0,r.kt)("p",null,"Starwhale Dataset \u53ef\u4ee5\u8f6c\u5316\u4e3a Pytorch \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/docs/stable/data.html#torch.utils.data.IterableDataset"},"torch.utils.dataset.IterableDataset")," \u5bf9\u8c61\uff0c\u5e76\u63a5\u53d7 transform \u53d8\u6362\u3002\u8f6c\u5316\u540e\u7684 Pytorch dataset \u5bf9\u8c61\u5c31\u53ef\u4ee5\u4f20\u9012\u7ed9 Pytorch dataloader \u6216 Huggingface Trainer \u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\nimport torch.utils.data as tdata\n\ndef custom_transform(data):\n    data["label"] = data["label"] + 100\n    return data\n\nwith dataset("simple", create="empty") as ds:\n    for i in range(0, 10):\n        ds[i] = {"text": f"{i}-text", "label": i}\n    ds.commit()\n\n    torch_ds = ds.to_pytorch(transform=custom_transform)\n    torch_loader = tdata.DataLoader(torch_ds, batch_size=1)\n    item = next(iter(torch_loader))\n    print(item)\n    print(item["label"])\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"{'text': ['0-text'], 'label': tensor([100])}\ntensor([100])\n")),(0,r.kt)("h2",{id:"tensorflow"},"Tensorflow"),(0,r.kt)("p",null,"Starwhale Dataset \u53ef\u4ee5\u8f6c\u5316\u4e3a Tensorflow \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/api_docs/python/tf/data/Dataset"},"tensorflow.data.Dataset")," \u5bf9\u8c61\uff0c\u540c\u65f6\u4e5f\u652f\u6301 transform \u51fd\u6570\uff0c\u53ef\u4ee5\u5bf9\u6570\u636e\u8fdb\u884c\u53d8\u5316\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\n\n# login cloud instance in advance: `swcli instance login` command or `starwhale.login` sdk\n# raw dataset url: https://cloud.starwhale.cn/projects/397/datasets/172/versions/236/files\nds = dataset("https://cloud.starwhale.cn/project/starwhale:helloworld/dataset/mnist64")\ntf_ds = ds.to_tensorflow()\nprint(tf_ds)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"<_FlatMapDataset element_spec={'label': TensorSpec(shape=(), dtype=tf.int64, name=None), 'img': TensorSpec(shape=(8, 8, 1), dtype=tf.uint8, name=None)}>\n")))}d.isMDXComponent=!0}}]);