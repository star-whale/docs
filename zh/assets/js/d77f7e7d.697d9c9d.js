"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[1951],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(a),u=l,h=c["".concat(o,".").concat(u)]||c[u]||d[u]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8574:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(3117),l=(a(7294),a(3905));const r={title:"MNIST \u6570\u5b57\u624b\u5199\u4f53\u8bc6\u522b\u6a21\u578b\u8bc4\u6d4b"},i=void 0,s={unversionedId:"examples/mnist",id:"examples/mnist",title:"MNIST \u6570\u5b57\u624b\u5199\u4f53\u8bc6\u522b\u6a21\u578b\u8bc4\u6d4b",description:"\u672c\u4f8b\u5b50\u53c2\u8003TorchServing MNIST Example\u5bf9MNIST Dataset\u6570\u5b57\u624b\u5199\u4f53\u8bc6\u522b\u548c\u6a21\u578b\u8bc4\u6d4b\uff0c\u76f8\u5173\u4ee3\u7801\u7684\u94fe\u63a5\uff1aexample/mnist\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/examples/mnist.md",sourceDirName:"examples",slug:"/examples/mnist",permalink:"/zh/next/examples/mnist",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/examples/mnist.md",tags:[],version:"current",frontMatter:{title:"MNIST \u6570\u5b57\u624b\u5199\u4f53\u8bc6\u522b\u6a21\u578b\u8bc4\u6d4b"}},o={},m=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u57fa\u7840\u73af\u5883",id:"\u57fa\u7840\u73af\u5883",level:3},{value:"Starwhale Runtime\u6fc0\u6d3b",id:"starwhale-runtime\u6fc0\u6d3b",level:3},{value:"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3",id:"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3",level:3},{value:"Starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b",id:"starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b",level:2},{value:"\u6b65\u9aa41\uff1a\u6784\u5efaStarwhale Dataset",id:"\u6b65\u9aa41\u6784\u5efastarwhale-dataset",level:3},{value:"\u6b65\u9aa42\uff1aStandalone Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b",id:"\u6b65\u9aa42standalone-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b",level:3},{value:"\u6b65\u9aa43\uff1a\u6784\u5efaStarwhale Model",id:"\u6b65\u9aa43\u6784\u5efastarwhale-model",level:3},{value:"\u6b65\u9aa44\uff1aCloud Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\uff08\u53ef\u9009\uff09",id:"\u6b65\u9aa44cloud-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\u53ef\u9009",level:3},{value:"\u6df1\u5165\u7406\u89e3MNIST\u4f8b\u5b50",id:"\u6df1\u5165\u7406\u89e3mnist\u4f8b\u5b50",level:2},{value:"\u4ee3\u7801\u7ed3\u6784\u8bf4\u660e",id:"\u4ee3\u7801\u7ed3\u6784\u8bf4\u660e",level:3},{value:"swds-bin\u683c\u5f0f\u7684\u6570\u636e\u96c6\u6784\u5efa",id:"swds-bin\u683c\u5f0f\u7684\u6570\u636e\u96c6\u6784\u5efa",level:3},{value:"remote-link\u683c\u5f0f\u7684\u6570\u636e\u96c6\u6784\u5efa",id:"remote-link\u683c\u5f0f\u7684\u6570\u636e\u96c6\u6784\u5efa",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],p={toc:m};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u4f8b\u5b50",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pytorch/serve/tree/master/examples/image_classifier/mnist"},"\u53c2\u8003TorchServing MNIST Example"),"\u5bf9",(0,l.kt)("a",{parentName:"p",href:"http://yann.lecun.com/exdb/mnist/"},"MNIST Dataset"),"\u6570\u5b57\u624b\u5199\u4f53\u8bc6\u522b\u548c\u6a21\u578b\u8bc4\u6d4b\uff0c\u76f8\u5173\u4ee3\u7801\u7684\u94fe\u63a5\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/mnist"},"example/mnist"),"\u3002"),(0,l.kt)("p",null,"\u4ece\u8be5\u4f8b\u4e2d\uff0c\u6211\u4eec\u80fd\u5b9e\u8df5\u5982\u4e0bStarwhale\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4f7f\u7528Image\u7c7b\u578b\u6784\u5efa\u6570\u636e\u96c6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5236\u4f5cLink\u7c7b\u578b\u7684\u6570\u636e\u96c6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"starwhale.multi_classification")," \u81ea\u52a8\u5904\u7406\u591a\u5206\u7c7b\u95ee\u9898\u3002")),(0,l.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,l.kt)("p",null,"\u9605\u8bfb\u672c\u6587\u524d\uff0c\u5efa\u8bae\u5148\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"/zh/next/runtime/examples/pytorch"},"Pytorch Runtime\u6784\u5efa"),"\u3002"),(0,l.kt)("h3",{id:"\u57fa\u7840\u73af\u5883"},"\u57fa\u7840\u73af\u5883"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python\u7248\u672c: 3.7 ~ 3.10\u3002"),(0,l.kt)("li",{parentName:"ul"},"OS\u73af\u5883: Linux\u6216macOS(\u4ec5\u8fd0\u884cStandalone)\u3002"),(0,l.kt)("li",{parentName:"ul"},"Starwhale Client \u5b8c\u6210\u5b89\u88c5\uff0c\u4e14\u7248\u672c\u4e0d\u65e9\u4e8e0.3.0\u3002"),(0,l.kt)("li",{parentName:"ul"},"[\u53ef\u9009]","Starwhale Controller \u5b8c\u6210\u5b89\u88c5\uff0c\u4e14\u7248\u672c\u4e0d\u65e9\u4e8e0.3.0\uff0c\u5982\u679c\u53ea\u5e0c\u671b\u5728Standalone Instance\u4e2d\u8fdb\u884c\u8bc4\u6d4b\uff0c\u53ef\u4ee5\u5ffd\u7565\u8be5\u6b65\u9aa4\u3002"),(0,l.kt)("li",{parentName:"ul"},"Runtime: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/runtime/pytorch"},"Pytorch Runtime Example"))),(0,l.kt)("h3",{id:"starwhale-runtime\u6fc0\u6d3b"},"Starwhale Runtime\u6fc0\u6d3b"),(0,l.kt)("p",null,"\u672c\u4f8b\u53ef\u4ee5\u4f7f\u7528Starwhale\u63d0\u4f9b\u7684",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/runtime/pytorch"},"Pytorch Runtime\u4f8b\u5b50"),"\u4f5c\u4e3aStarwhale Runtime\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7f16\u5199Runtime\u914d\u7f6e\u3002\u6a21\u578b\u8bad\u7ec3\u548c\u8bc4\u6d4b\u90fd\u53ef\u4ee5\u4f7f\u7528\u8be5Runtime\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u51c6\u5907Runtime\uff1a\u4e0b\u8f7d\u6216\u91cd\u65b0\u6784\u5efa\uff0c\u5982\u4f55Standalone Instance\u4e2d\u5df2\u7ecf\u6709\u8be5Runtime\uff0c\u5219\u5ffd\u7565\u8be5\u6b65\u9aa4\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e0b\u8f7dStarwhale Cloud\u5df2\u7ecf\u6784\u5efa\u597d\u7684Pytorch Runtime\nswcli runtime copy https://cloud.starwhale.ai/project/demo/runtime/pytorch/version/latest self\n\n# \u6216\u6839\u636epytorch runtime example\u5728\u672c\u5730\u6784\u5efa\u4e00\u4e2a\u65b0\u7684Runtime\ngit clone --depth=1 https://github.com/star-whale/starwhale.git\ncd starwhale/example/runtime/pytorch\nswcli runtime build .\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Activate Runtime\uff1a\u5728\u5f53\u524dshell\u4e2d\u6fc0\u6d3b\u76f8\u5e94\u7684Python\u73af\u5883")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"swcli runtime activate pytorch/version/latest\n")),(0,l.kt)("h3",{id:"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3"},"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3"),(0,l.kt)("p",null,"\u6570\u636e\u51c6\u5907\u548c\u6a21\u578b\u8bad\u7ec3\u975e\u5e38\u5bb9\u6613\uff0c\u53ea\u9700\u8981\u4e24\u6b65\u5c31\u80fd\u5b8c\u6210\u64cd\u4f5c\uff1a\u4e0b\u8f7d\u4ee3\u7801\u3001\u5f00\u59cb\u8bad\u7ec3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone --depth=1 https://github.com/star-whale/starwhale.git\ncd starwhale/example/mnist\nmake train\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"make train")," \u547d\u4ee4\u9700\u8981\u5728Pytorch Runtime \u5df2\u7ecf\u6fc0\u6d3b\u7684Shell\u73af\u5883\u4e2d\u6267\u884c\uff0c\u5426\u5219\u53ef\u80fd\u63d0\u793a\u67d0\u4e9bPython\u5305Import Error\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"make train")," \u547d\u4ee4\u4f1a\u81ea\u52a8\u4e0b\u8f7d\u6570\u636e\uff0c\u5982\u679c\u9047\u5230\u7f51\u7edc\u95ee\u9898\uff0c\u8bf7\u5408\u7406\u8bbe\u7f6e\u4ee3\u7406\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"make train")," \u8fc7\u7a0b\u53ef\u80fd\u4f1a\u6bd4\u8f83\u6162\uff0c\u6267\u884c\u65f6\u95f4\u957f\u77ed\u53d6\u51b3\u4e8e\u7f51\u7edc\u901f\u5ea6\u3001\u673a\u5668\u914d\u7f6e\u3001GPU\u8d44\u6e90\u60c5\u51b5\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u6267\u884c\u7ed3\u675f\u540e\uff0c\u53ef\u4ee5\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"data"),"\u76ee\u5f55\u67e5\u770b\u539f\u59cb\u6570\u636e\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"models"),"\u76ee\u5f55\u67e5\u770b\u5df2\u7ecf\u6784\u5efa\u597d\u7684\u6a21\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728train.py\u4e2d\u5bf9\u8bad\u7ec3\u8fc7\u7a0b\u7684\u4e00\u4e9b\u53c2\u6570\u8fdb\u884c\u8c03\u6574\uff0c\u6bd4\u5982epoch\u503c\u7b49\u3002")),(0,l.kt)("h2",{id:"starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b"},"Starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b"),(0,l.kt)("h3",{id:"\u6b65\u9aa41\u6784\u5efastarwhale-dataset"},"\u6b65\u9aa41\uff1a\u6784\u5efaStarwhale Dataset"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6839\u636edataset.yaml\u6784\u5efaswds-bin\u683c\u5f0fin\u683c\u5f0f\u7684\u6570\u636e\u96c6\nswcli dataset build .\n# \u67e5\u770b\u6700\u65b0\u6784\u5efa\u7684\u6570\u636e\u96c6\u8be6\u60c5\nswcli dataset info mnist/version/latest\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\u547d\u4ee4\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"starwhale/example/mnist"),"\u4e2d\u6267\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u5176\u4ed6\u76ee\u5f55\u4e2d\u6267\u884c\uff0c\u4f46\u8981\u5408\u7406\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli dataset build"),"\u547d\u4ee4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u53c2\u6570\u3002"),(0,l.kt)("h3",{id:"\u6b65\u9aa42standalone-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b"},"\u6b65\u9aa42\uff1aStandalone Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6839\u636emodel.yaml\u8fd0\u884c\u8bc4\u6d4b\u4efb\u52a1\nswcli model eval . --dataset mnist/version/latest --runtime pytorch/version/latest\n# \u5c55\u793a\u8bc4\u6d4b\u7ed3\u679c\nswcli model info ${version}\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\u547d\u4ee4\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"starwhale/example/mnist"),"\u4e2d\u6267\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u5176\u4ed6\u76ee\u5f55\u4e2d\u6267\u884c\uff0c\u4f46\u8981\u5408\u7406\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model eval"),"\u547d\u4ee4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u53c2\u6570\u3002\u5982\u679c\u4e0d\u60f3\u6bcf\u6b21\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"eval"),"\u547d\u4ee4\u90fd\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"--runtime"),"\u53c2\u6570\uff0c\u5219\u53ef\u4ee5\u5148\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"swcli runtime activate pytorch/version/latest"),"\u547d\u4ee4\u6fc0\u6d3b\u5f53\u524dshell\u73af\u5883\uff0c\u6216\u5728\u4e00\u4e2a\u5df2\u7ecf\u6fc0\u6d3bPytorch Runtime\u73af\u5883shell\u4e2d\u6267\u884c\u8bc4\u6d4b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"mnist-eval.png",src:a(9050).Z,width:"2558",height:"961"})),(0,l.kt)("h3",{id:"\u6b65\u9aa43\u6784\u5efastarwhale-model"},"\u6b65\u9aa43\uff1a\u6784\u5efaStarwhale Model"),(0,l.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u7ecf\u8fc7\u591a\u6b21\u8fd0\u884c\u6a21\u578b\u8bc4\u6d4b\u547d\u4ee4(\u6b65\u9aa42)\u8fdb\u884c\u8c03\u8bd5\uff0c\u5f97\u5230\u4e00\u4e2a\u53ef\u4ee5\u5728\u5927\u6570\u636e\u91cf\u4e0b\u8fd0\u884c\u8bc4\u6d4b\u6216\u53ef\u53d1\u5e03\u7684\u6a21\u578b\uff0c\u5c31\u9700\u8981\u6267\u884c\u6b65\u9aa43\uff0c\u6784\u5efa\u4e00\u4e2a\u53ef\u5206\u53d1\u7684Starwhale Model\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#\u6839\u636emodel.yaml\u6784\u5efaStarwhale Model\nswcli model build .\n# \u67e5\u770b\u6700\u65b0\u6784\u5efa\u7684\u6a21\u578b\u4fe1\u606f\nswcli model info mnist/version/latest\n")),(0,l.kt)("h3",{id:"\u6b65\u9aa44cloud-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\u53ef\u9009"},"\u6b65\u9aa44\uff1aCloud Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\uff08\u53ef\u9009\uff09"),(0,l.kt)("p",null,"\u5728Cloud Instance\u4e0a\u8fd0\u884c\u8bc4\u6d4b\u4efb\u52a1\uff0c\u9700\u8981\u5c06Standalone Instance\u4e0a\u6784\u5efa\u7684Model\u3001Dataset\u548cRuntime\u53d1\u5e03\u5230\u76f8\u5e94\u7684Instance\u4e0a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u767b\u9646\u76f8\u5173instance\uff0c\u4e4b\u540e\u53ef\u4ee5\u7528 prod alias\u8bbf\u95ee\u8be5instance\nswcli instance login --username ${username} --token ${token}  http://${instance-address} --alias prod\n# \u5c06\u672c\u5730\u9ed8\u8ba4instance\u6539\u4e3astandalone\nswcli instance select local\n#\u4e0a\u4f20model\u5230prod instance\u4e2dname\u4e3astarwhale\u7684project\u4e2d\nswcli model copy mnist/version/latest cloud://prod/project/starwhale\n#\u4e0a\u4f20dataset\u5230prod instance\u4e2dname\u4e3astarwhale\u7684project\u4e2d\nswcli dataset copy mnist/version/latest cloud://prod/project/starwhale\n#\u4e0a\u4f20runtime\u5230prod instance\u4e2dname\u4e3astarwhale\u7684project\u4e2d\nswcli runtime copy pytorch/version/latest cloud://prod/project/starwhale\n")),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u53ef\u4ee5\u5728\u7ec8\u7aef\u4e2d\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"swcli ui prod"),"\u547d\u4ee4\uff0c\u53ef\u4ee5\u62c9\u8d77\u6d4f\u89c8\u5668\u5e76\u8fdb\u5165prod instance\u7684web\u9875\u9762\u4e2d\uff0c\u63a5\u7740\u8fdb\u5165\u76f8\u5173project\uff0c\u521b\u5efa\u8bc4\u6d4b\u4efb\u52a1\u5373\u53ef\u3002"),(0,l.kt)("h2",{id:"\u6df1\u5165\u7406\u89e3mnist\u4f8b\u5b50"},"\u6df1\u5165\u7406\u89e3MNIST\u4f8b\u5b50"),(0,l.kt)("p",null,"\u6b64\u90e8\u5206\u4ece\u4ee3\u7801\u548c\u914d\u7f6e\u5c42\u9762\uff0c\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u5bf9MNIST\u8fdb\u884cStarwhale\u6a21\u578b\u8bc4\u6d4b\uff0c\u5982\u679c\u53ea\u662f\u5e0c\u671b\u7b80\u5355\u590d\u73b0\u8bc4\u6d4b\uff0c\u53ef\u4ee5\u8df3\u8fc7\u6b64\u7ae0\u8282\u3002"),(0,l.kt)("h3",{id:"\u4ee3\u7801\u7ed3\u6784\u8bf4\u660e"},"\u4ee3\u7801\u7ed3\u6784\u8bf4\u660e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"|-- .swignore                 # .swignore\u6587\u4ef6\uff0c\u53ef\u4ee5\u5728model/dataset \u6784\u5efa\u65f6\u6392\u9664\u9ed8\u5199\u76ee\u5f55\u6216\u6587\u4ef6\n|-- Makefile                  # \u76ee\u524d\u4ec5\u5305\u542btrain\u547d\u4ee4\u3002\n|-- dataset.yaml              # Starwhale Dataset\u6784\u5efa\u7684\u63cf\u8ff0\u6027\u6587\u4ef6\uff0c\u4e5f\u662fDataset\u7684\u8d77\u70b9\u3002\n|-- model.yaml                # Starwhale Model\u6784\u5efa\u548c\u8fd0\u884c\u7684\u63cf\u8ff0\u6027\u6587\u4ef6\uff0c\u4e5f\u662fModel\u7684\u8d77\u70b9\u3002\n|-- notebook.ipynb            # notebook\u6587\u4ef6\uff0c\u53ef\u4ee5\u5728jupyter notebook\u6216google colab\u4e0a\u4f7f\u7528\u3002\n|-- requirements-sw-lock.txt  # Python\u4f9d\u8d56\n|-- config                    # config \u76ee\u5f55\uff0c\u53ef\u4ee5\u5b58\u653e\u76f8\u5173\u914d\u7f6e\n|-- data                      # clone\u4ee3\u7801\u4ed3\u5e93\u7684\u521d\u59cb\u72b6\u6001\u5e76\u6ca1\u6709\u6b64\u76ee\u5f55\uff0cmake train\u547d\u4ee4\u81ea\u52a8\u521b\u5efa\u3002\n   |-- MNIST                  # make train\u547d\u4ee4\u6267\u884c\u7684\u65f6\u5019\uff0c\u4f1a\u5728\u8fd9\u4e2a\u76ee\u5f55\u4e2d\u81ea\u52a8\u4e0b\u8f7d\u6570\u636e\u539f\u59cb\u6587\u4ef6\u3002\n|-- models                    # \u6a21\u578b\u5b58\u50a8\u76ee\u5f55\n   |-- mnist_cnn.pth          # make train\u547d\u4ee4\u6267\u884c\u5b8c\u6210\u540e\uff0c\u4f1a\u751f\u6210mnist_cnn.pth\u6587\u4ef6\uff0c\u5373\u6a21\u578b\u6587\u4ef6\u3002\n|-- mnist                     # \u6e90\u4ee3\u7801\u76ee\u5f55\uff0c\u5305\u542b\u82e5\u5e72Python\u4ee3\u7801\u6587\u4ef6\u3002\n   |-- __init__.py            # model.yaml\u548cdataset.yaml\u4e2dhandler\u5b57\u6bb5\u4f1a\u901a\u8fc7python module\u65b9\u5f0f\u63cf\u8ff0\u5165\u53e3\u70b9\uff0c\u6545\u9700\u8981mnist\u76ee\u5f55\u662f\u4e00\u4e2aPython Module\uff0c\u9700\u8981\u5199\u660e__init__.py\u6587\u4ef6\u3002\n   |-- dataset.py             # \u63cf\u8ff0Starwhale Dataset\u5982\u4f55\u6784\u5efa\u3002\n   |-- evaluator.py           # \u63cf\u8ff0\u5982\u4f55\u4f7f\u7528Starwhale\u7684PipelineHandler\u5feb\u901f\u5b8c\u6210ppl\u548ccmp\u9636\u6bb5\u7684\u5b9a\u4e49\uff0c\u8fdb\u800c\u5b8c\u6210Model\u8bc4\u6d4b\u4efb\u52a1\u3002\n   |-- model.py               # \u63cf\u8ff0\u6a21\u578b\u7ed3\u6784\u3002\n   |-- train.py               # \u63cf\u8ff0\u8bad\u7ec3\u8fc7\u7a0b\uff0c\u4fbf\u4e8e\u8fdb\u884c\u4f8b\u5b50\u590d\u73b0\u3002\u76ee\u524dStarwhale\u6ca1\u6709\u63d0\u4f9bModel Training\u7684\u76f8\u5173\u652f\u6301\uff0c\u6b64\u6587\u4ef6\u4e5f\u4e0d\u662fStarwhale Model Evaluation\u6240\u5fc5\u987b\u7684\u3002\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mnist/dataset.py"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"mnist/evaluator.py"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"dataset.yaml")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml")," \u8fd9\u56db\u4e2a\u6587\u4ef6\u662f\u5173\u952e\u4ee3\u7801\u548c\u914d\u7f6e\u3002"),(0,l.kt)("h3",{id:"swds-bin\u683c\u5f0f\u7684\u6570\u636e\u96c6\u6784\u5efa"},"swds-bin\u683c\u5f0f\u7684\u6570\u636e\u96c6\u6784\u5efa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import GrayscaleImage, SWDSBinBuildExecutor\n\nclass DatasetProcessExecutor(SWDSBinBuildExecutor):\n    def iter_item(self) -> t.Generator[t.Tuple[t.Any, t.Any], None, None]:\n        root_dir = Path(__file__).parent.parent / "data"\n\n        with (root_dir / "t10k-images-idx3-ubyte").open("rb") as data_file, (\n            root_dir / "t10k-labels-idx1-ubyte"\n        ).open("rb") as label_file:\n            _, data_number, height, width = struct.unpack(">IIII", data_file.read(16))\n            _, label_number = struct.unpack(">II", label_file.read(8))\n            print(\n                f">data({data_file.name}) split data:{data_number}, label:{label_number} group"\n            )\n            image_size = height * width\n\n            for i in range(0, min(data_number, label_number)):\n                _data = data_file.read(image_size)\n                _label = struct.unpack(">B", label_file.read(1))[0]\n                yield GrayscaleImage(\n                    _data,\n                    display_name=f"{i}",\n                    shape=(height, width, 1),\n                ), {"label": _label}\n')),(0,l.kt)("p",null,"dataset.yaml\u4e2dhandler\u6307\u5411 ",(0,l.kt)("inlineCode",{parentName:"p"},"mnist.dataset:DatasetProcessExecutor"),"\uff0c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli dataset build")," \u547d\u4ee4\u540e\u4f1a\u6784\u5efaswds-bin\u683c\u5f0f\u7684\u6570\u636e\u96c6\uff0c\u8be5\u683c\u5f0f\u662fStarwhale\u63d0\u4f9b\u7684\u4e00\u79cd\u4e8c\u8fdb\u5236\u6570\u636e\u96c6\u683c\u5f0f\u3002\u4e0a\u4f8b\u4e2d\u5bf9\u539f\u59cbMNIST\u6587\u4ef6\u8fdb\u884c\u8bfb\u53d6\u7136\u540e\u901a\u8fc7yield\u65b9\u5f0f\u8f93\u51fadata\u548cannotations\u5b57\u6bb5\u3002data\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"starwhale.GrayscaleImage")," \u7c7b\u578b\uff0c\u662f\u4e13\u95e8\u9488\u5bf9\u7070\u5ea6\u56fe\u63d0\u4f9b\u7684\u4e00\u79cd\u6570\u636e\u7c7b\u578b\uff0cCloud Instance\u7684Web Dataset Viewer\u80fd\u81ea\u52a8\u5c55\u793a\u8be5\u7c7b\u578b\u6570\u636e\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"mnist-viewer.gif",src:a(9939).Z,width:"2522",height:"1368"})),(0,l.kt)("h3",{id:"remote-link\u683c\u5f0f\u7684\u6570\u636e\u96c6\u6784\u5efa"},"remote-link\u683c\u5f0f\u7684\u6570\u636e\u96c6\u6784\u5efa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import Link, S3LinkAuth, GrayscaleImage, UserRawBuildExecutor\n\nclass LinkRawDatasetProcessExecutor(UserRawBuildExecutor):\n    _auth = S3LinkAuth(name="mnist", access_key="minioadmin", secret="minioadmin")\n    _endpoint = "10.131.0.1:9000"\n    _bucket = "users"\n\n    def iter_item(self) -> t.Generator[t.Tuple[t.Any, t.Any], None, None]:\n        root_dir = Path(__file__).parent.parent / "data"\n\n        with (root_dir / "t10k-labels-idx1-ubyte").open("rb") as label_file:\n            _, label_number = struct.unpack(">II", label_file.read(8))\n\n            offset = 16\n            image_size = 28 * 28\n\n            uri = f"s3://{self._endpoint}/{self._bucket}/dataset/mnist/t10k-images-idx3-ubyte"\n            for i in range(label_number):\n                _data = Link(\n                    f"{uri}",\n                    self._auth,\n                    offset=offset,\n                    size=image_size,\n                    data_type=GrayscaleImage(display_name=f"{i}", shape=(28, 28, 1)),\n                )\n                _label = struct.unpack(">B", label_file.read(1))[0]\n                yield _data, {"label": _label}\n                offset += image_size\n')),(0,l.kt)("p",null,"\u6700\u540e\u4e00\u79cd\u6570\u636e\u683c\u5f0f\u79f0\u4e4b\u4e3aremote-link\u683c\u5f0f\uff0c\u987e\u540d\u601d\u4e49\uff0c\u8868\u793a\u7684\u662f\u4e00\u79cd\u8fdc\u7a0blink\u65b9\u5f0f\u6784\u5efa\u7684\u6570\u636e\u96c6\uff0c\u5373\u6570\u636e\u5b58\u5728\u5728\u5176\u4ed6\u4ecb\u8d28\u4e0a\uff0c\u76ee\u524d\u652f\u6301\u5b58\u5728\u5728Local FS\u548cS3\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u4e24\u79cd\u65b9\u5f0f\u3002\u6784\u5efa\u51fa\u6765\u7684Starwhale\u6570\u636e\u96c6\u4ec5\u5b58\u50a8\u6570\u636e\u6620\u5c04\u5173\u7cfb\uff0c\u4e0d\u4f1a\u5b58\u50a8\u539f\u59cb\u6570\u636e\uff0c\u9002\u7528\u4e8e\u539f\u59cb\u6570\u636e\u6bd4\u8f83\u5927\u4e0d\u653e\u9762\u642c\u8fc1\u7684\u573a\u666f\u3002"),(0,l.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7531\u4e8e\u8bbf\u95eeRemote\u7684Minio\u6570\u636e\uff0c\u9700\u8981\u8fde\u63a5\u5bc6\u94a5\u4fe1\u606f\uff0c\u7ba1\u7406\u5458\u9700\u8981\u5728server\u7684system setting\u4e2d\u914d\u7f6e\u5fc5\u8981\u7684\u79d8\u94a5\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pytorch/serve/tree/master/examples/image_classifier/mnist"},"Digit recognition model with MNIST dataset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://yann.lecun.com/exdb/mnist/"},"MNIST Dataset"))))}d.isMDXComponent=!0},9050:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mnist-eval-6b0ce21b10f704cbdb812eaa07fd9816.png"},9939:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mnist-viewer-c019962f39d9c064db72ff240519bc57.gif"}}]);