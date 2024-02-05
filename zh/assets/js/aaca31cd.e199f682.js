"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[58689],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),o=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=o(a),u=r,y=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return a?n.createElement(y,i(i({ref:t},d),{},{components:a})):n.createElement(y,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},16086:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(83117),r=(a(67294),a(3905));const l={title:"\u6570\u636e\u96c6\u52a0\u8f7d"},i=void 0,p={unversionedId:"dataset/load",id:"version-0.6.9/dataset/load",title:"\u6570\u636e\u96c6\u52a0\u8f7d",description:"Starwhale \u6570\u636e\u96c6\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5728\u4efb\u610f\u4f4d\u7f6e\u8bbf\u95ee\u6570\u636e\u96c6\uff0c\u52a0\u8f7d\u4e00\u6761\u6216\u591a\u6761\u6570\u636e\uff0c\u6ee1\u8db3\u8bad\u7ec3\u3001\u8bc4\u6d4b\u548c\u5fae\u8c03\u7b49\u6570\u636e\u6d88\u8d39\u7684\u9700\u6c42\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.9/dataset/load.md",sourceDirName:"dataset",slug:"/dataset/load",permalink:"/zh/0.6.9/dataset/load",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.9/dataset/load.md",tags:[],version:"0.6.9",frontMatter:{title:"\u6570\u636e\u96c6\u52a0\u8f7d"},sidebar:"mainSidebar",previous:{title:"\u6570\u636e\u96c6\u6784\u5efa",permalink:"/zh/0.6.9/dataset/build"},next:{title:"\u6570\u636e\u96c6\u53ef\u89c6\u5316",permalink:"/zh/0.6.9/dataset/view"}},s={},o=[{value:"\u6570\u636e\u96c6\u52a0\u8f7d\u7684\u7279\u70b9",id:"\u6570\u636e\u96c6\u52a0\u8f7d\u7684\u7279\u70b9",level:2},{value:"\u6570\u636e\u96c6\u5143\u7d20\u8bbf\u95ee\u65b9\u5f0f",id:"\u6570\u636e\u96c6\u5143\u7d20\u8bbf\u95ee\u65b9\u5f0f",level:2},{value:"\u4e0b\u6807\u65b9\u5f0f",id:"\u4e0b\u6807\u65b9\u5f0f",level:3},{value:"\u8fed\u4ee3\u65b9\u5f0f",id:"\u8fed\u4ee3\u65b9\u5f0f",level:3},{value:"fetch_one \u65b9\u6cd5",id:"fetch_one-\u65b9\u6cd5",level:3},{value:"head \u65b9\u6cd5",id:"head-\u65b9\u6cd5",level:3}],d={toc:o};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Starwhale \u6570\u636e\u96c6\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5728\u4efb\u610f\u4f4d\u7f6e\u8bbf\u95ee\u6570\u636e\u96c6\uff0c\u52a0\u8f7d\u4e00\u6761\u6216\u591a\u6761\u6570\u636e\uff0c\u6ee1\u8db3\u8bad\u7ec3\u3001\u8bc4\u6d4b\u548c\u5fae\u8c03\u7b49\u6570\u636e\u6d88\u8d39\u7684\u9700\u6c42\u3002"),(0,r.kt)("h2",{id:"\u6570\u636e\u96c6\u52a0\u8f7d\u7684\u7279\u70b9"},"\u6570\u636e\u96c6\u52a0\u8f7d\u7684\u7279\u70b9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u52a0\u8f7d\u672c\u5730 Standalone \u5b9e\u4f8b\u6216\u8fdc\u7aef Cloud/Server \u5b9e\u4f8b\u7684\u6570\u636e\u96c6\uff0c\u6570\u636e\u96c6\u552f\u4e00\u7d22\u5f15\u65b9\u5f0f\u662f\u6570\u636e\u96c6URI\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\n\nlocal_latest_ds = dataset("mnist")\nremote_cloud_ds = dataset("https://cloud-cn.starwhale.cn/project/starwhale:helloworld/dataset/mnist64/v2")\nremote_server_ds = dataset("cloud://server/project/1/dataset/helloworld")\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fdc\u7aef\u6570\u636e\u96c6\u6309\u9700\u9884\u52a0\u8f7d\uff0c\u6570\u636e\u4e0d\u843d\u76d8\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Starwhale \u6570\u636e\u96c6\u52a0\u8f7d\u65f6\uff0c\u5e76\u4e0d\u4f1a\u5c06\u8fdc\u7aef\u6570\u636e\u96c6\u5b8c\u5168\u4e0b\u8f7d\u5230\u672c\u5730\u540e\u518d\u52a0\u8f7d\u3002\u53ea\u4f1a\u52a0\u8f7d\u76ee\u6807\u7d22\u5f15\u5173\u8054\u7684\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6839\u636e\u76ee\u6807\u7d22\u5f15\u7279\u5f81\uff0c\u63d0\u524d\u52a0\u8f7d\u4e00\u4e9b\u6570\u636e\uff0c\u63d0\u5347Batch\u6027\u80fd\uff0c\u7528\u7a7a\u95f4\u6362\u65f6\u95f4\u3002")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/dataset-load.png",alt:"dataset-load"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6570\u636e\u7d22\u5f15\u65b9\u5f0f\u7075\u6d3b\u3002Starwhale Dataset \u7c7b\u5b9e\u73b0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"__getitem__")," \u65b9\u6cd5\uff0c\u63d0\u4f9bkey\u7d22\u5f15\u548c\u5206\u7247\u7d22\u5f15\u65b9\u5f0f\u8bfb\u53d6\u76f8\u5173\u6570\u636e\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\nds = dataset("mnist64")\nprint(ds[0].features.img)\nprint(ds[0].features.label)\nprint(len(ds[:10]))\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"ArtifactType.Image, display:0, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding:\n0\n10\n")))),(0,r.kt)("h2",{id:"\u6570\u636e\u96c6\u5143\u7d20\u8bbf\u95ee\u65b9\u5f0f"},"\u6570\u636e\u96c6\u5143\u7d20\u8bbf\u95ee\u65b9\u5f0f"),(0,r.kt)("h3",{id:"\u4e0b\u6807\u65b9\u5f0f"},"\u4e0b\u6807\u65b9\u5f0f"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 key \u503c\u8fdb\u884c\u8bbf\u95ee\u3002\u5f53\u4f7f\u7528\u5207\u7247\u65f6\uff0c\u6309\u6839\u636ekey\u6392\u5e8f\u7ed3\u679c\u53d6\u8303\u56f4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\n\nwith dataset("empty-new") as ds:\n    for i in range(0, 100):\n        ds.append({"a": i})\n    ds.commit()\n\nds = dataset("empty-new", readonly=True)\nprint(ds[0].features.a)\nprint(ds[99].features["a"])\nprint(ds[0:10])\nprint(ds[99:])\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"0\n99\n10\n2\n")),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\uff0c\u8fd9\u91cc\u5e76\u4e0d\u662flist\u7684\u5207\u7247\u8bed\u6cd5\uff0c\u5e76\u4e0d\u652f\u6301\u9006\u5e8f\u7d22\u5f15\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"ds[-1]")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"ds[1:-1]")," \u8fd9\u79cd\u8868\u8fbe\u3002"),(0,r.kt)("h3",{id:"\u8fed\u4ee3\u65b9\u5f0f"},"\u8fed\u4ee3\u65b9\u5f0f"),(0,r.kt)("p",null,"Starwhale Dataset \u7c7b\u5b9e\u73b0\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"__iter__")," \u65b9\u6cd5\uff0c\u53ef\u4ee5\u5bf9\u5b9e\u4f8b\u5316\u7684Dataset\u5bf9\u8c61\u8fdb\u884c\u904d\u5386\u8fed\u4ee3\uff0c\u8fd9\u4e5f\u662f\u8bad\u7ec3\u3001\u8bc4\u6d4b\u548c\u5fae\u8c03\u4e2d\u5e38\u7528\u7684\u6570\u636e\u96c6\u8bbf\u95ee\u65b9\u5f0f\uff0c\u80fd\u83b7\u5f97\u6700\u4f73\u6027\u80fd\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\nds = dataset("mnist64")\nfor idx, row in enumerate(ds):\n    if idx > 10:\n        break\n    print(row.index, row.features)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"0 {'img': ArtifactType.Image, display:0, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 0}\n1 {'img': ArtifactType.Image, display:1, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 1}\n2 {'img': ArtifactType.Image, display:2, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 2}\n4 {'img': ArtifactType.Image, display:4, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 4}\n5 {'img': ArtifactType.Image, display:5, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 5}\n3 {'img': ArtifactType.Image, display:3, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 3}\n6 {'img': ArtifactType.Image, display:6, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 6}\n7 {'img': ArtifactType.Image, display:7, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 7}\n8 {'img': ArtifactType.Image, display:8, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 8}\n9 {'img': ArtifactType.Image, display:9, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 9}\n10 {'img': ArtifactType.Image, display:10, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 0}\n")),(0,r.kt)("h3",{id:"fetch_one-\u65b9\u6cd5"},"fetch_one \u65b9\u6cd5"),(0,r.kt)("p",null,"\u83b7\u53d6\u6570\u636e\u96c6\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u4e00\u822c\u7528\u6765\u505a\u56de\u5f52\u6d4b\u8bd5\u6216\u67e5\u770b\u4e00\u4e0b\u6570\u636e\u96c6features\u7ed3\u6784\u3002\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"head(n=1)")," \u7b49\u4ef7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\nds = dataset("mnist64")\nitem = ds.fetch_one()\nprint(item.index)\nprint(list(item.features.keys()))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"0\n['img', 'label']\n")),(0,r.kt)("h3",{id:"head-\u65b9\u6cd5"},"head \u65b9\u6cd5"),(0,r.kt)("p",null,"\u83b7\u53d6\u6570\u636e\u96c6\u7684n\u4e2a\u5143\u7d20\uff0c\u4ee5\u5217\u8868\u65b9\u5f0f\u8fd4\u56de\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import dataset\nds = dataset("mnist64")\nitems = ds.head(n=5)\nprint(items[0])\nprint(items[0].features)\nprint(len(items))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"0\n{'img': ArtifactType.Image, display:0, mime_type:MIMEType.PNG, shape:[8, 8, 1], encoding: , 'label': 0}\n5\n")))}m.isMDXComponent=!0}}]);