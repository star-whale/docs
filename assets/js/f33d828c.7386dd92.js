"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[21679],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,g=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},24988:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(83117),r=(a(67294),a(3905));const i={title:"Dataset Loading"},s=void 0,l={unversionedId:"dataset/load",id:"version-0.6.10/dataset/load",title:"Dataset Loading",description:"After Starwhale datasets are constructed, they can be accessed from any location to load one or multiple data items, meeting the needs for training, evaluation and fine-tuning.",source:"@site/versioned_docs/version-0.6.10/dataset/load.md",sourceDirName:"dataset",slug:"/dataset/load",permalink:"/dataset/load",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.10/dataset/load.md",tags:[],version:"0.6.10",frontMatter:{title:"Dataset Loading"},sidebar:"mainSidebar",previous:{title:"Dataset Building",permalink:"/dataset/build"},next:{title:"Dataset Visualization",permalink:"/dataset/view"}},o={},d=[{value:"Features of Dataset Loading",id:"features-of-dataset-loading",level:2},{value:"Methods to Access Dataset Elements",id:"methods-to-access-dataset-elements",level:2},{value:"Indexing",id:"indexing",level:3},{value:"Iteration",id:"iteration",level:3},{value:"fetch_one Method",id:"fetch_one-method",level:3},{value:"head Method",id:"head-method",level:3}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After Starwhale datasets are constructed, they can be accessed from any location to load one or multiple data items, meeting the needs for training, evaluation and fine-tuning."),(0,r.kt)("h2",{id:"features-of-dataset-loading"},"Features of Dataset Loading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Load datasets from local Standalone instances or remote Cloud/Server instances. Datasets are uniquely indexed by dataset URI."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\n\nlocal_latest_ds = dataset("mnist")\nremote_cloud_ds = dataset("https://cloud-cn.starwhale.cn/project/starwhale:helloworld/dataset/mnist64/v2")\nremote_server_ds = dataset("cloud://server/project/1/dataset/helloworld")\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remote datasets are loaded on demand without local persistence."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When loading Starwhale datasets, remote datasets will not be completely downloaded before loading. Only related data based on target indexes will be loaded."),(0,r.kt)("li",{parentName:"ul"},"Some data will be loaded in advance based on target index features to improve batch performance by trading space for time.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/dataset-load.png",alt:"dataset-load"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Flexible data indexing methods. Starwhale Dataset class implements ",(0,r.kt)("inlineCode",{parentName:"p"},"__getitem__")," to provide key index and slice index methods to read related data."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\nds = dataset("mnist64")\nprint(ds[0].features.img)\nprint(ds[0].features.label)\nprint(len(ds[:10]))\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"ArtifactType.Image, display:0, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding:\n0\n10\n")))),(0,r.kt)("h2",{id:"methods-to-access-dataset-elements"},"Methods to Access Dataset Elements"),(0,r.kt)("h3",{id:"indexing"},"Indexing"),(0,r.kt)("p",null,"Use key values for accessing. Use slices for ranges sorted by key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\n\nwith dataset("empty-new") as ds:\n    for i in range(0, 100):\n        ds.append({"a": i})\n    ds.commit()\n\nds = dataset("empty-new", readonly=True)\nprint(ds[0].features.a)\nprint(ds[99].features["a"])\nprint(ds[0:10])\nprint(ds[99:])\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"0\n99\n10\n2\n")),(0,r.kt)("p",null,"Note that this is not the slicing syntax of a list and does not support reverse indexing expressions like ds","[-1]"," or ds","[1:-1]","."),(0,r.kt)("h3",{id:"iteration"},"Iteration"),(0,r.kt)("p",null,"Starwhale Dataset implements ",(0,r.kt)("inlineCode",{parentName:"p"},"__iter__")," enabling iterating over Dataset instances. This is commonly used in training, evaluation and fine-tuning to achieve the best performance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\nds = dataset("mnist64")\nfor idx, row in enumerate(ds):\n    if idx > 10:\n        break\n    print(row.index, row.features)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"0 {'img': ArtifactType.Image, display:0, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 0}\n1 {'img': ArtifactType.Image, display:1, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 1}\n2 {'img': ArtifactType.Image, display:2, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 2}\n4 {'img': ArtifactType.Image, display:4, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 4}\n5 {'img': ArtifactType.Image, display:5, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 5}\n3 {'img': ArtifactType.Image, display:3, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 3}\n6 {'img': ArtifactType.Image, display:6, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 6}\n7 {'img': ArtifactType.Image, display:7, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 7}\n8 {'img': ArtifactType.Image, display:8, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 8}\n9 {'img': ArtifactType.Image, display:9, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 9}\n10 {'img': ArtifactType.Image, display:10, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 0}\n")),(0,r.kt)("h3",{id:"fetch_one-method"},"fetch_one Method"),(0,r.kt)("p",null,"Get the first element of the dataset, usually for testing or viewing dataset features structure. Equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"head(n=1)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\nds = dataset("mnist64")\nitem = ds.fetch_one()\nprint(item.index)\nprint(list(item.features.keys()))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"0\n['img', 'label']\n")),(0,r.kt)("h3",{id:"head-method"},"head Method"),(0,r.kt)("p",null,"Get the first n elements of the dataset, returned as a list."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\nds = dataset("mnist64")\nitems = ds.head(n=5)\nprint(items[0])\nprint(items[0].features)\nprint(len(items))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"0\n{'img': ArtifactType.Image, display:0, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 0}\n5\n")))}m.isMDXComponent=!0}}]);