"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[2387],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),u=l,h=c["".concat(o,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},22730:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(83117),l=(a(67294),a(3905));const i={title:"Speech Commands \u6570\u636e\u96c6\u7684\u591a\u5206\u7c7b\u4efb\u52a1\u6a21\u578b\u8bc4\u6d4b"},r=void 0,p={unversionedId:"examples/speech",id:"version-0.5.6/examples/speech",title:"Speech Commands \u6570\u636e\u96c6\u7684\u591a\u5206\u7c7b\u4efb\u52a1\u6a21\u578b\u8bc4\u6d4b",description:"\u672c\u4f8b\u5b50\u53c2\u8003TorchAudio\u5bf9Speech Commands\u6570\u636e\u96c6\u8fdb\u884c\u5206\u7c7b\u8bc6\u522b\u548c\u6a21\u578b\u8bc4\u6d4b\uff0c\u76f8\u5173\u4ee3\u7801\u7684\u94fe\u63a5\uff1aexample/speechcommand\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.6/examples/speech.md",sourceDirName:"examples",slug:"/examples/speech",permalink:"/zh/examples/speech",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.6/examples/speech.md",tags:[],version:"0.5.6",frontMatter:{title:"Speech Commands \u6570\u636e\u96c6\u7684\u591a\u5206\u7c7b\u4efb\u52a1\u6a21\u578b\u8bc4\u6d4b"}},o={},s=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u57fa\u7840\u73af\u5883",id:"\u57fa\u7840\u73af\u5883",level:3},{value:"Starwhale Runtime\u6fc0\u6d3b",id:"starwhale-runtime\u6fc0\u6d3b",level:3},{value:"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3",id:"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3",level:3},{value:"Starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b",id:"starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b",level:2},{value:"\u6b65\u9aa41\uff1a\u6784\u5efaStarwhale Dataset",id:"\u6b65\u9aa41\u6784\u5efastarwhale-dataset",level:3},{value:"\u6b65\u9aa42\uff1aStandalone Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b",id:"\u6b65\u9aa42standalone-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b",level:3},{value:"\u6b65\u9aa43\uff1a\u6784\u5efaStarwhale Model",id:"\u6b65\u9aa43\u6784\u5efastarwhale-model",level:3},{value:"\u6b65\u9aa44\uff1aCloud Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\uff08\u53ef\u9009\uff09",id:"\u6b65\u9aa44cloud-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\u53ef\u9009",level:3},{value:"\u6df1\u5165\u7406\u89e3Speech Commands\u4f8b\u5b50",id:"\u6df1\u5165\u7406\u89e3speech-commands\u4f8b\u5b50",level:2},{value:"\u4ee3\u7801\u7ed3\u6784\u8bf4\u660e",id:"\u4ee3\u7801\u7ed3\u6784\u8bf4\u660e",level:3},{value:"Dataset\u7684\u6784\u5efa",id:"dataset\u7684\u6784\u5efa",level:3},{value:"\u6a21\u578b\u8bc4\u6d4b\u4ee3\u7801",id:"\u6a21\u578b\u8bc4\u6d4b\u4ee3\u7801",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],m={toc:s};function d(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u4f8b\u5b50",(0,l.kt)("a",{parentName:"p",href:"https://pytorch.org/tutorials/intermediate/speech_command_classification_with_torchaudio_tutorial.html"},"\u53c2\u8003TorchAudio"),"\u5bf9",(0,l.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1804.03209"},"Speech Commands\u6570\u636e\u96c6"),"\u8fdb\u884c\u5206\u7c7b\u8bc6\u522b\u548c\u6a21\u578b\u8bc4\u6d4b\uff0c\u76f8\u5173\u4ee3\u7801\u7684\u94fe\u63a5\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/speech_command"},"example/speech_command"),"\u3002"),(0,l.kt)("p",null,"\u4ece\u8be5\u4f8b\u4e2d\uff0c\u6211\u4eec\u80fd\u5b9e\u8df5\u5982\u4e0bStarwhale\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u6784\u5efaswds-bin\u683c\u5f0fin\u683c\u5f0f\u7684Starwhale Dataset\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u6784\u5efa\u5b58\u50a8\u5728\u7b2c\u4e09\u65b9Minio\u5b58\u50a8\u4e0a\u7684remote-link\u683c\u5f0f\u7684Starwhale Dataset\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4f7f\u7528TorchAudio\u5b8c\u6210\u97f3\u9891\u6570\u636e\u7684\u591a\u5206\u7c7b\u4efb\u52a1\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4f7f\u7528\u5df2\u7ecf\u6784\u5efa\u597d\u7684Starwhale Runtime\u4f5c\u4e3aPython\u8fd0\u884c\u73af\u5883\u3002")),(0,l.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,l.kt)("h3",{id:"\u57fa\u7840\u73af\u5883"},"\u57fa\u7840\u73af\u5883"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python\u7248\u672c: 3.7 ~ 3.10\u3002"),(0,l.kt)("li",{parentName:"ul"},"OS\u73af\u5883: Linux\u6216macOS(\u4ec5\u8fd0\u884cStandalone)\u3002"),(0,l.kt)("li",{parentName:"ul"},"Starwhale Client \u5b8c\u6210\u5b89\u88c5\uff0c\u4e14\u7248\u672c\u4e0d\u65e9\u4e8e0.3.0\u3002"),(0,l.kt)("li",{parentName:"ul"},"[\u53ef\u9009]","Starwhale Controller \u5b8c\u6210\u5b89\u88c5\uff0c\u4e14\u7248\u672c\u4e0d\u65e9\u4e8e0.3.0\uff0c\u5982\u679c\u53ea\u5e0c\u671b\u5728Standalone Instance\u4e2d\u8fdb\u884c\u8bc4\u6d4b\uff0c\u53ef\u4ee5\u5ffd\u7565\u8be5\u6b65\u9aa4\u3002"),(0,l.kt)("li",{parentName:"ul"},"Runtime: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/runtime/pytorch"},"Pytorch Runtime Example"))),(0,l.kt)("h3",{id:"starwhale-runtime\u6fc0\u6d3b"},"Starwhale Runtime\u6fc0\u6d3b"),(0,l.kt)("p",null,"\u672c\u4f8b\u53ef\u4ee5\u4f7f\u7528Starwhale\u63d0\u4f9b\u7684",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/runtime/pytorch"},"Pytorch Runtime\u4f8b\u5b50"),"\u4f5c\u4e3aStarwhale Runtime\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7f16\u5199Runtime\u914d\u7f6e\u3002\u6a21\u578b\u8bad\u7ec3\u548c\u8bc4\u6d4b\u90fd\u53ef\u4ee5\u4f7f\u7528\u8be5Runtime\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u51c6\u5907Runtime\uff1a\u4e0b\u8f7d\u6216\u91cd\u65b0\u6784\u5efa\uff0c\u5982\u4f55Standalone Instance\u4e2d\u5df2\u7ecf\u6709\u8be5Runtime\uff0c\u5219\u5ffd\u7565\u8be5\u6b65\u9aa4\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e0b\u8f7dStarwhale Cloud\u5df2\u7ecf\u6784\u5efa\u597d\u7684Pytorch Runtime\nswcli runtime copy https://cloud.starwhale.ai/project/demo/runtime/pytorch/version/latest self\n\n# \u6216\u6839\u636epytorch runtime example\u5728\u672c\u5730\u6784\u5efa\u4e00\u4e2a\u65b0\u7684Runtime\ngit clone --depth=1 https://github.com/star-whale/starwhale.git\ncd starwhale/example/runtime/pytorch\nswcli runtime build .\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Activate Runtime\uff1a\u5728\u5f53\u524dshell\u4e2d\u6fc0\u6d3b\u76f8\u5e94\u7684Python\u73af\u5883")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"swcli runtime activate pytorch/version/latest\n")),(0,l.kt)("h3",{id:"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3"},"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3"),(0,l.kt)("p",null,"\u6570\u636e\u51c6\u5907\u548c\u6a21\u578b\u8bad\u7ec3\u975e\u5e38\u5bb9\u6613\uff0c\u53ea\u9700\u8981\u4e24\u6b65\u5c31\u80fd\u5b8c\u6210\u64cd\u4f5c\uff1a\u4e0b\u8f7d\u4ee3\u7801\u3001\u5f00\u59cb\u8bad\u7ec3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone --depth=1 https://github.com/star-whale/starwhale.git\ncd starwhale/example/speech_command\nmake train\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"make train")," \u547d\u4ee4\u9700\u8981\u5728Pytorch Runtime \u5df2\u7ecf\u6fc0\u6d3b\u7684Shell\u73af\u5883\u4e2d\u6267\u884c\uff0c\u5426\u5219\u53ef\u80fd\u63d0\u793a\u67d0\u4e9bPython\u5305Import Error\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"make train")," \u547d\u4ee4\u4f1a\u81ea\u52a8\u4e0b\u8f7d\u6570\u636e\uff0c\u5982\u679c\u9047\u5230\u7f51\u7edc\u95ee\u9898\uff0c\u8bf7\u5408\u7406\u8bbe\u7f6e\u4ee3\u7406\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"make train")," \u8fc7\u7a0b\u53ef\u80fd\u4f1a\u6bd4\u8f83\u6162\uff0c\u6267\u884c\u65f6\u95f4\u957f\u77ed\u53d6\u51b3\u4e8e\u7f51\u7edc\u901f\u5ea6\u3001\u673a\u5668\u914d\u7f6e\u3001GPU\u8d44\u6e90\u60c5\u51b5\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u6267\u884c\u7ed3\u675f\u540e\uff0c\u53ef\u4ee5\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"data"),"\u76ee\u5f55\u67e5\u770b\u539f\u59cb\u6570\u636e\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"models"),"\u76ee\u5f55\u67e5\u770b\u5df2\u7ecf\u6784\u5efa\u597d\u7684\u6a21\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728train.py\u4e2d\u5bf9\u8bad\u7ec3\u8fc7\u7a0b\u7684\u4e00\u4e9b\u53c2\u6570\u8fdb\u884c\u8c03\u6574\uff0c\u6bd4\u5982epoch\u503c\u7b49\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"train.png",src:a(98904).Z,width:"3776",height:"1022"})),(0,l.kt)("h2",{id:"starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b"},"Starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b"),(0,l.kt)("h3",{id:"\u6b65\u9aa41\u6784\u5efastarwhale-dataset"},"\u6b65\u9aa41\uff1a\u6784\u5efaStarwhale Dataset"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6839\u636edataset.yaml\u6784\u5efaswds-bin\u683c\u5f0f\u7684\u6570\u636e\u96c6\nswcli dataset build . --runtime pytorch/version/latest\n# \u67e5\u770b\u6700\u65b0\u6784\u5efa\u7684\u6570\u636e\u96c6\u8be6\u60c5\nswcli dataset info speech_commands_validation/version/latest\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"build"),"\u547d\u4ee4\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"starwhale/example/speech_command"),"\u4e2d\u6267\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u5176\u4ed6\u76ee\u5f55\u4e2d\u6267\u884c\uff0c\u4f46\u8981\u5408\u7406\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"swcli dataset build"),"\u547d\u4ee4\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"WORKDIR"),"\u53c2\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u793a\u4f8b\u4e2ddataset.yaml\u4e2d",(0,l.kt)("inlineCode",{parentName:"li"},"handler"),"\u662fswds-bin\u683c\u5f0f\u6570\u636e\u96c6\u7684\u6784\u5efa\uff0c\u5982\u679c\u60f3\u6784\u5efaremote-link\u7684\u6570\u636e\u96c6\uff0c\u53ef\u4ee5\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"li"},"handler:LinkRawDatasetBuildExecutor"),"\u3002\u76ee\u524d\u53ef\u4ee5\u7b80\u5355\u7684\u5728dataset.yaml\u4e2d\u8c03\u6574\u6ce8\u91ca\uff0c\u540e\u7eedStarwhale\u4f1a\u652f\u6301\u591ahandler\u6570\u636e\u96c6\u7684\u540c\u65f6\u6784\u5efa\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"swcli dataset build"),"\u547d\u4ee4\u65f6\uff0c\u662f\u5728\u5df2\u7ecf\u6fc0\u6d3bPytorch Runtime\u7684Shell\u73af\u5883\u4e2d\u8fdb\u884c\u7684\uff0c\u5219\u53ef\u4ee5\u5ffd\u7565 ",(0,l.kt)("inlineCode",{parentName:"li"},"--runtime pytorch/version/latest")," \u53c2\u6570\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"dataset-build.png",src:a(8850).Z,width:"3814",height:"1360"}),"\n",(0,l.kt)("img",{alt:"dataset-info.png",src:a(73385).Z,width:"3822",height:"2005"})),(0,l.kt)("h3",{id:"\u6b65\u9aa42standalone-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b"},"\u6b65\u9aa42\uff1aStandalone Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6839\u636emodel.yaml\u8fd0\u884c\u8bc4\u6d4b\u4efb\u52a1\nswcli model eval . --dataset  speech_commands_validation/version/latest --runtime pytorch/version/latest\n# \u5c55\u793a\u8bc4\u6d4b\u7ed3\u679c\nswcli model info ${version}\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\u547d\u4ee4\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"starwhale/example/speech_command"),"\u4e2d\u6267\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u5176\u4ed6\u76ee\u5f55\u4e2d\u6267\u884c\uff0c\u4f46\u8981\u5408\u7406\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model eval"),"\u547d\u4ee4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u53c2\u6570\u3002\u5982\u679c\u4e0d\u60f3\u6bcf\u6b21\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"eval"),"\u547d\u4ee4\u90fd\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"--runtime"),"\u53c2\u6570\uff0c\u5219\u53ef\u4ee5\u5148\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"swcli runtime activate pytorch/version/latest"),"\u547d\u4ee4\u6fc0\u6d3b\u5f53\u524dshell\u73af\u5883\uff0c\u6216\u5728\u4e00\u4e2a\u5df2\u7ecf\u6fc0\u6d3bPytorch Runtime\u73af\u5883shell\u4e2d\u6267\u884c\u8bc4\u6d4b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"eval.png",src:a(66235).Z,width:"3826",height:"1965"})),(0,l.kt)("h3",{id:"\u6b65\u9aa43\u6784\u5efastarwhale-model"},"\u6b65\u9aa43\uff1a\u6784\u5efaStarwhale Model"),(0,l.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u7ecf\u8fc7\u591a\u6b21\u8fd0\u884c\u6a21\u578b\u8bc4\u6d4b\u547d\u4ee4(\u6b65\u9aa42)\u8fdb\u884c\u8c03\u8bd5\uff0c\u5f97\u5230\u4e00\u4e2a\u53ef\u4ee5\u5728\u5927\u6570\u636e\u91cf\u4e0b\u8fd0\u884c\u8bc4\u6d4b\u6216\u53ef\u53d1\u5e03\u7684\u6a21\u578b\uff0c\u5c31\u9700\u8981\u6267\u884c\u6b65\u9aa43\uff0c\u6784\u5efa\u4e00\u4e2a\u53ef\u5206\u53d1\u7684Starwhale Model\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#\u5982\u679c\u5df2\u7ecf\u6fc0\u6d3b\u8be5runtime\u73af\u5883\uff0c\u5219\u5ffd\u7565\u672c\u884c\u547d\u4ee4\nswcli runtime activate pytorch/version/latest\n#\u6839\u636emodel.yaml\u6784\u5efaStarwhale Model\nswcli model build .\n# \u67e5\u770b\u6700\u65b0\u6784\u5efa\u7684\u6a21\u578b\u4fe1\u606f\nswcli model info speech_commands_m5/version/latest\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0a\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"build"),"\u547d\u4ee4\u5728",(0,l.kt)("inlineCode",{parentName:"li"},"starwhale/example/speech_command"),"\u4e2d\u6267\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u5176\u4ed6\u76ee\u5f55\u4e2d\u6267\u884c\uff0c\u4f46\u8981\u5408\u7406\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"swcli model build"),"\u547d\u4ee4\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"WORKDIR"),"\u53c2\u6570\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"swcli model build"),"\u547d\u4ee4\u65f6\uff0c\u662f\u5728\u975ePytorch Runtime\u7684Shell\u73af\u5883\u4e2d\u8fdb\u884c\u7684\uff0c\u5219\u53ef\u4ee5\u8ffd\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"--runtime pytorch/version/latest")," \u53c2\u6570\uff0c\u786e\u4fdd\u6784\u5efa\u65f6\u4f7f\u7528Pytorch Runtime\u73af\u5883\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"model-build.png",src:a(42370).Z,width:"3822",height:"1295"})),(0,l.kt)("h3",{id:"\u6b65\u9aa44cloud-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\u53ef\u9009"},"\u6b65\u9aa44\uff1aCloud Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\uff08\u53ef\u9009\uff09"),(0,l.kt)("p",null,"\u5728Cloud Instance\u4e0a\u8fd0\u884c\u8bc4\u6d4b\u4efb\u52a1\uff0c\u9700\u8981\u5c06Standalone Instance\u4e0a\u6784\u5efa\u7684Model\u3001Dataset\u548cRuntime\u53d1\u5e03\u5230\u76f8\u5e94\u7684Instance\u4e0a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u767b\u9646\u76f8\u5173instance\uff0c\u4e4b\u540e\u53ef\u4ee5\u7528 prod alias\u8bbf\u95ee\u8be5instance\nswcli instance login --username ${username} --token ${token}  http://${instance-address} --alias prod\n# \u5c06\u672c\u5730\u9ed8\u8ba4instance\u6539\u4e3astandalone\nswcli instance select local\n#\u4e0a\u4f20model\u5230prod instance\u4e2dname\u4e3astarwhale\u7684project\u4e2d\nswcli model copy speech_commands_m5/version/latest cloud://prod/project/starwhale\n#\u4e0a\u4f20dataset\u5230prod instance\u4e2dname\u4e3astarwhale\u7684project\u4e2d\nswcli dataset copy speech_commands_validation/version/latest cloud://prod/project/starwhale\n#\u4e0a\u4f20runtime\u5230prod instance\u4e2dname\u4e3astarwhale\u7684project\u4e2d\nswcli runtime copy pytorch/version/latest cloud://prod/project/starwhale\n")),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u53ef\u4ee5\u5728\u7ec8\u7aef\u4e2d\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"swcli ui prod"),"\u547d\u4ee4\uff0c\u53ef\u4ee5\u62c9\u8d77\u6d4f\u89c8\u5668\u5e76\u8fdb\u5165prod instance\u7684web\u9875\u9762\u4e2d\uff0c\u63a5\u7740\u8fdb\u5165\u76f8\u5173project\uff0c\u521b\u5efa\u8bc4\u6d4b\u4efb\u52a1\u5373\u53ef\u3002"),(0,l.kt)("h2",{id:"\u6df1\u5165\u7406\u89e3speech-commands\u4f8b\u5b50"},"\u6df1\u5165\u7406\u89e3Speech Commands\u4f8b\u5b50"),(0,l.kt)("p",null,"\u6b64\u90e8\u5206\u4ece\u4ee3\u7801\u548c\u914d\u7f6e\u5c42\u9762\u8be6\u7ec6\u4ecb\u7ecdSpeech Commands Dataset\u662f\u5982\u4f55\u8fdb\u884cStarwhale\u6a21\u578b\u8bc4\u6d4b\u7684\uff0c\u5982\u679c\u53ea\u662f\u5e0c\u671b\u7b80\u5355\u590d\u73b0\u8bc4\u6d4b\uff0c\u53ef\u4ee5\u8df3\u8fc7\u6b64\u7ae0\u8282\u3002"),(0,l.kt)("h3",{id:"\u4ee3\u7801\u7ed3\u6784\u8bf4\u660e"},"\u4ee3\u7801\u7ed3\u6784\u8bf4\u660e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"|-- .gitignore              # \u76ee\u524d\u4f1aignore models\u548cdata\u76ee\u5f55\u3002\n|-- Makefile                # \u76ee\u524d\u4ec5\u5305\u542btrain\u547d\u4ee4\u3002\n|-- dataset.yaml            # Starwhale Dataset\u6784\u5efa\u7684\u63cf\u8ff0\u6027\u6587\u4ef6\uff0c\u4e5f\u662fDataset\u7684\u8d77\u70b9\u3002\n|-- model.yaml              # Starwhale Model\u6784\u5efa\u548c\u8fd0\u884c\u7684\u63cf\u8ff0\u6027\u6587\u4ef6\uff0c\u4e5f\u662fModel\u7684\u8d77\u70b9\u3002\n|-- data                    # clone\u4ee3\u7801\u4ed3\u5e93\u7684\u521d\u59cb\u72b6\u6001\u5e76\u6ca1\u6709\u6b64\u76ee\u5f55\uff0cmake train\u547d\u4ee4\u81ea\u52a8\u521b\u5efa\u3002\n   |-- SpeechCommands       # make train\u547d\u4ee4\u6267\u884c\u7684\u65f6\u5019\uff0c\u4f1a\u5728\u8fd9\u4e2a\u76ee\u5f55\u4e2d\u81ea\u52a8\u4e0b\u8f7d\u6570\u636e\u539f\u59cb\u6587\u4ef6\uff0c\u5927\u69823.2G\u7684wav\u97f3\u9891\u6587\u4ef6\u3002\n|-- models                  # clone\u4ee3\u7801\u4ed3\u5e93\u7684\u521d\u59cb\u72b6\u6001\u5e76\u6ca1\u6709\u6b64\u76ee\u5f55\uff0cmake train\u547d\u4ee4\u81ea\u52a8\u521b\u5efa\u3002\n   |-- m5.pth               # make train\u547d\u4ee4\u6267\u884c\u5b8c\u6210\u540e\uff0c\u4f1a\u751f\u6210m5.pth\u6587\u4ef6\uff0c\u5373\u6a21\u578b\u6587\u4ef6\u3002\n|-- sc                      # \u6e90\u4ee3\u7801\u76ee\u5f55\uff0c\u5305\u542b\u82e5\u5e72Python\u4ee3\u7801\u6587\u4ef6\u3002\n   |-- __init__.py          # model.yaml\u548cdataset.yaml\u4e2dhandler\u5b57\u6bb5\u4f1a\u901a\u8fc7python module\u65b9\u5f0f\u63cf\u8ff0\u5165\u53e3\u70b9\uff0c\u6545\u9700\u8981sc\u76ee\u5f55\u662f\u4e00\u4e2aPython Module\uff0c\u9700\u8981\u5199\u660e__init__.py\u6587\u4ef6\u3002\n   |-- dataset.py           # \u63cf\u8ff0Starwhale Dataset\u5982\u4f55\u6784\u5efa\u3002\n   |-- evaluator.py         # \u63cf\u8ff0\u5982\u4f55\u4f7f\u7528Starwhale\u7684PipelineHandler\u5feb\u901f\u5b8c\u6210ppl\u548ccmp\u9636\u6bb5\u7684\u5b9a\u4e49\uff0c\u8fdb\u800c\u5b8c\u6210Model\u8bc4\u6d4b\u4efb\u52a1\u3002\n   |-- model.py             # \u63cf\u8ff0\u6a21\u578b\u7ed3\u6784\u3002\n   |-- train.py             # \u63cf\u8ff0\u8bad\u7ec3\u8fc7\u7a0b\uff0c\u4fbf\u4e8e\u8fdb\u884c\u4f8b\u5b50\u590d\u73b0\u3002\u76ee\u524dStarwhale\u6ca1\u6709\u63d0\u4f9bModel Training\u7684\u76f8\u5173\u652f\u6301\uff0c\u6b64\u6587\u4ef6\u4e5f\u4e0d\u662fStarwhale Model Evaluation\u6240\u5fc5\u987b\u7684\u3002\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sc/dataset.py"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"sc/evaluator.py"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"dataset.yaml")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml")," \u8fd9\u56db\u4e2a\u6587\u4ef6\u662f\u5173\u952e\u4ee3\u7801\u548c\u914d\u7f6e\u3002"),(0,l.kt)("h3",{id:"dataset\u7684\u6784\u5efa"},"Dataset\u7684\u6784\u5efa"),(0,l.kt)("p",null,"\u5728Starwhale\u4f53\u7cfb\u4e2d\uff0c\u8981\u8fdb\u884c\u6a21\u578b\u8bc4\u6d4b\uff0c\u7b2c\u4e00\u6b65\u5c31\u9700\u8981\u51c6\u5907\u8bc4\u6d4b\u7684\u6570\u636e\u96c6\u3002Starwhale\u63d0\u4f9b\u4e00\u79cd\u5feb\u901f\u6784\u5efa\u3001\u4f7f\u7528\u7b80\u5355\u3001\u53ef\u5206\u53d1\u3001\u6709\u7248\u672c\u63a7\u5236\u7684\u6570\u636e\u96c6\u673a\u5236\uff0c\u7528\u6237\u53ea\u9700\u8981\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"p"},"dataset.yaml"),"\u548c\u7f16\u5199\u5c11\u91cf\u4ee3\u7801\uff0c\u5c31\u80fd\u5b8c\u6210\u6570\u636e\u96c6\u7684\u6784\u5efa\u3002\u76ee\u524dStarwhale Dataset\u6784\u5efa\u4e09\u8981\u7d20\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"dataset.yaml")," \u3001",(0,l.kt)("inlineCode",{parentName:"p"},"dataset.py")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli dataset build")," \u547d\u4ee4\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"dataset.yaml \u5b9a\u4e49"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: speech_commands_validation                      #\u6570\u636e\u96c6\u540d\u79f0\nhandler: sc.dataset:SWDSBuildExecutor                 #\u6784\u5efa\u6570\u636e\u96c6\u65f6\u8c03\u7528\u7684python\u4ee3\u7801\u5165\u53e3\u70b9\n\ndesc: SpeechCommands data and label test dataset      #[\u53ef\u9009]\u63cf\u8ff0\u6570\u636e\u96c6\u7528\u9014\nattr:                                                 #[\u53ef\u9009]\u63cf\u8ff0\u6570\u636e\u96c6\u7684\u4e00\u4e9b\u6784\u5efa\u53c2\u6570\nalignment_size: 4k                                    #[\u53ef\u9009]\u9ed8\u8ba44k\nvolume_size: 64M                                      #[\u53ef\u9009]\u9ed8\u8ba464MB\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"handler"),"\u7ed3\u6784\u4e3a ${python module path}:${handler class}\u3002\u5165\u53e3\u70b9\u76ee\u524d\u53ea\u80fd\u4e3aPython Class\uff0c\u4e14\u9700\u8981\u7ee7\u627f\u81ea",(0,l.kt)("inlineCode",{parentName:"li"},"starwhale.BuildExecutor"),"\u6216",(0,l.kt)("inlineCode",{parentName:"li"},"starwhale.UserRawBuildExecutor"),"\uff0c\u5e76\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"li"},"iter_item"),"\u65b9\u6cd5\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"attr.alignment_size"),"\uff1a\u5f53\u6784\u5efaswds\u548cuser raw\u683c\u5f0f\u7684\u6570\u636e\u96c6\u65f6\uff0c\u5355\u4e2a\u6570\u636e\u6837\u672c\u7684\u7684padding alignment size\uff0c\u9ed8\u8ba4\u4e3a4k\u3002\u53ef\u4ee5\u8ba4\u4e3a\u662f\u4e3a\u4e86Page Size\u7b49\u505a\u7684padding\u4f18\u5316\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"attr.volume_size"),"\uff1a\u5f53\u6784\u5efaswds\u548cuser raw\u683c\u5f0f\u7684\u6570\u636e\u96c6\u65f6\uff0c\u5355\u4e2a\u6570\u636e\u6587\u4ef6\u7684\u6700\u5927\u5c3a\u5bf8\uff0c\u8d85\u8fc7\u8be5\u5c3a\u5bf8\u5c31\u4f1a\u88ab\u5206\u5272\uff0c\u80fd\u591f\u907f\u514d\u5355\u4e2a\u6570\u636e\u6587\u4ef6\u8fc7\u5927\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u76ee\u524ddataset.yaml\u5bf9\u4e8e\u6570\u636e\u96c6\u6784\u5efa\u662f\u5fc5\u987b\u7684\u3002\u6700\u7b80\u5355\u7684dataset.yaml\u53ea\u9700\u8981\u5305\u542bname\u548chandler\u4e24\u4e2a\u5b57\u6bb5\uff0c\u540e\u7eedStarwhale\u4e5f\u4f1a\u8003\u8651\u8fdb\u4e00\u6b65\u4f18\u5316dataset.yaml\u8868\u793a\uff0c\u751a\u81f3\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\u7701\u7565dataset.yaml\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"swds-bin\u683c\u5f0f\u7684\u6570\u636e\u96c6\u6784\u5efa\u4ee3\u7801"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import typing as t\nfrom pathlib import Path\nfrom starwhale import Audio, MIMEType\n\ndataset_dir = (\n    Path(__file__).parent.parent / "data" / "SpeechCommands" / "speech_commands_v0.02"\n)\nvalidation_ds_paths = [dataset_dir / "validation_list.txt"]\n\nclass SWDSBuildExecutor:\n    def __iter__(self) -> t.Generator:  # \u5b9e\u73b0__iter__\u65b9\u6cd5\u3002\n        for path in validation_ds_paths:\n            with path.open() as f:\n                for item in f.readlines():\n                    item = item.strip()\n                    if not item:\n                        continue\n\n                    data_path = dataset_dir / item\n                    data = Audio(    # \u6784\u5efa\u4e00\u4e2aAudio\u7c7b\u578b\u7684\u6570\u636e\n                        data_path, display_name=item, shape=(1,), mime_type=MIMEType.WAV\n                    )\n\n                    speaker_id, utterance_num = data_path.stem.split("_nohash_")\n                    yield {\n                        "speech": data,\n                        "label": data_path.parent.name,\n                        "speaker_id": speaker_id,\n                        "utterance_num": int(utterance_num),\n                    }\n')),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6784\u5efa\u6570\u636e\u9700\u8981\u5b9e\u73b0",(0,l.kt)("inlineCode",{parentName:"li"},"__iter__"),"\u65b9\u6cd5(\u5f53handler\u662fclass\u65f6)\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56de\u53ef\u8fed\u4ee3\u7684\u6570\u636e\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"remote-link\u683c\u5f0f\u7684\u6570\u636e\u96c6\u6784\u5efa\u4ee3\u7801"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import typing as t\nfrom pathlib import Path\nfrom starwhale import Audio, MIMEType, Link, S3LinkAuth\n\nclass LinkRawDatasetBuildExecutor:\n\n    _auth = S3LinkAuth(\n        name="speech", access_key="minioadmin", secret="minioadmin", region="local"\n    )\n    _addr = "10.131.0.1:9000"\n    _bucket = "users"\n\n    def __iter__(self) -> t.Generator[t.Tuple[t.Any, t.Any], None, None]:\n        import boto3\n        from botocore.client import Config\n\n        s3 = boto3.resource(\n            "s3",\n            endpoint_url=f"http://{self._addr}",\n            aws_access_key_id=self._auth.access_key,\n            aws_secret_access_key=self._auth.secret,\n            config=Config(signature_version="s3v4"),\n            region_name=self._auth.region,\n        )\n\n        objects = s3.Bucket(self._bucket).objects.filter(\n            Prefix="dataset/SpeechCommands/speech_commands_v0.02"\n        )\n\n        for obj in objects:\n            path = Path(obj.key)  # type: ignore\n            command = path.parent.name\n            if (\n                command == "_background_noise_"\n                or "_nohash_" not in path.name\n                or obj.size < 10240\n                or not path.name.endswith(".wav")\n            ):\n                continue\n\n            speaker_id, utterance_num = path.stem.split("_nohash_")\n            uri = f"s3://{self._addr}/{self._bucket}/{obj.key.lstrip(\'/\')}"\n            data = Link(\n                uri,\n                self._auth,\n                size=obj.size,\n                data_type=Audio(\n                    display_name=f"{command}/{path.name}",\n                    mime_type=MIMEType.WAV,\n                    shape=(1,),\n                ),\n            )\n            annotations = {\n                "label": command,\n                "speaker_id": speaker_id,\n                "utterance_num": int(utterance_num),\n            }\n            yield data, annotations\n\n')),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f53\u539f\u59cb\u6570\u636e\u6587\u4ef6\u5df2\u7ecf\u5b58\u5728\u7b2c\u4e09\u65b9\u5b58\u50a8\u4e0a\uff0c\u53ef\u4ee5\u4f7f\u7528Starwhale remote-link\u683c\u5f0f\u7684dataset\uff0c\u80fd\u591f\u907f\u514d\u91cd\u590d\u62f7\u8d1d\u6570\u636e\uff0c\u5c24\u5176\u9002\u5408\u6570\u91cf\u91cf\u6bd4\u8f83\u5927\u6216\u5df2\u7ecf\u6709\u67d0\u79cd\u5b58\u50a8\u683c\u5f0f\u7684\u6570\u636e\u96c6\u7684\u573a\u666f\u3002remote-link\u7684dataset\u6784\u5efa\u7c7b\u9700\u8981\u7ee7\u627f ",(0,l.kt)("inlineCode",{parentName:"li"},"UserRawBuildExecutor")," \u7c7b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u672c\u4f8b\u5b50\u4e2d\u4f7f\u7528boto3\u5e93\u4eceMinio\u4e0a\u904d\u5386\u76f8\u5173Prefix\u8def\u5f84\uff0c\u8fed\u4ee3\u8fd4\u56de",(0,l.kt)("inlineCode",{parentName:"li"},"Link"),"\u7c7b\u578b\u7684\u6570\u636e\u3002\u9700\u8981\u6ce8\u610f\u7684\u65f6\uff0c\u7531\u4e8e\u8bbf\u95eeRemote\u7684Minio\u6570\u636e\uff0c\u9700\u8981\u643a\u5e26\u8fde\u63a5\u5bc6\u94a5\u4fe1\u606f\uff0cStarwhale\u4e3a\u4fdd\u8bc1\u5b89\u5168\u6027\uff0c\u9700\u8981\u8fde\u63a5\u5bc6\u94a5\u4fe1\u606f\uff0c\u7ba1\u7406\u5458\u9700\u8981\u5728server\u7684system setting\u4e2d\u914d\u7f6e\u5fc5\u8981\u7684\u79d8\u94a5\u4fe1\u606f\u3002")))),(0,l.kt)("h3",{id:"\u6a21\u578b\u8bc4\u6d4b\u4ee3\u7801"},"\u6a21\u578b\u8bc4\u6d4b\u4ee3\u7801"),(0,l.kt)("p",null,"Starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u4e00\u822c\u5206\u4e3appl\u548ccmp\u4e24\u4e2a\u9636\u6bb5\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8bc4\u6d4b\u9636\u6bb5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- ppl \u9636\u6bb5\uff1aStarwhale Dataset\u7684\u6570\u636e\u4e00\u822c\u4f1a\u7ecf\u8fc7\u524d\u5904\u7406\u3001\u6a21\u578b\u63a8\u7406\u548c\u540e\u5904\u7406\uff0c\u5f97\u5230\u53ef\u4ee5\u505a\u7edf\u4e00\u5408\u5e76\u6bd4\u8f83\u7684\u6570\u636e\u3002\n- cmp \u9636\u6bb5\uff1a\u6536\u96c6ppl\u9636\u6bb5\u4ea7\u751f\u7684\u6570\u636e\uff0c\u4e00\u822c\u4f1a\u4e0elabel\u8fdb\u884c\u5bf9\u6bd4\uff0c\u5f97\u5230\u6a21\u578b\u7684\u8bc4\u6d4b\u7ed3\u679c\u3002\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"model.yaml \u5b9a\u4e49"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 1.0                          #\u53ef\u9009\uff0c\u9ed8\u8ba4\u4e3a1.0\uff0c\u8868\u793ayaml\u683c\u5f0f\u7684\u7248\u672c\u53f7\nname: speech_commands_m5              #\u6a21\u578b\u5305\u7684\u540d\u79f0\nrun:\n  handler: sc.evaluator:M5Inference   #\u6a21\u578b\u8bc4\u6d4b\u7684Handler\n\ndesc: m5 by pytorch                   #\u53ef\u9009\uff0c\u6a21\u578b\u8bc4\u6d4b\u63cf\u8ff0\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"run.handler")," \u7ed3\u6784\u4e3a ${python module path}:${handler class}\u3002\u5165\u53e3\u70b9\u76ee\u524d\u53ea\u80fd\u4e3aPython Class\u3002\u5982\u679c\u7ee7\u627f",(0,l.kt)("inlineCode",{parentName:"li"},"starwhale.PipelineHandler"),"\u7c7b\uff0c\u5e76\u5b9e\u73b0ppl\u548ccmp\u4e24\u4e2a\u65b9\u6cd5\uff0c\u53ef\u4ee5\u975e\u5e38\u5bb9\u6613\u7684\u5b8c\u6210\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b\u3002\u7528\u6237\u4e5f\u53ef\u4ee5\u4e0d\u7ee7\u627f",(0,l.kt)("inlineCode",{parentName:"li"},"starwhale.PipelineHandler"),"\u7c7b\uff0c\u800c\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"starwhale.Step")," \u7b49\u5de5\u5177\u51fd\u6570\u5b9e\u73b0\u5b8c\u5168\u81ea\u5b9a\u4e49\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ppl\u8fc7\u7a0b"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import torch\nfrom starwhale import Audio, PipelineHandler\n\nclass M5Inference(PipelineHandler):\n\n    @torch.no_grad()\n    def ppl(self, audio: Audio, **kw):\n        _tensor = self.pre(audio)\n        output = self.model(_tensor)\n        return self._post(output)\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u96c6\u4e2d\u7684\u6bcf\u6761\u6570\u636e\u90fd\u4f1a\u8c03\u7528\u4e00\u6b21ppl\uff0c\u5982\u679chandler\u4e2d\u5199\u7684class\u7ee7\u627f\u81ea",(0,l.kt)("inlineCode",{parentName:"li"},"PipelineHandler"),"\uff0c\u90a3\u4e48\u4e00\u5b9a\u8981\u5b9e\u73b0ppl\u65b9\u6cd5\u3002\u5178\u578b\u7684ppl\u5904\u7406\u8fc7\u7a0b\u662f\u524d\u5904\u7406->\u6a21\u578b\u63a8\u7406->\u540e\u5904\u7406\uff0c\u4f46\u4e0d\u7528\u62d8\u6ce5\u4e8e\u8fd9\u79cd\u5f62\u5f0f\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u884c\u7f16\u5199\u7a0b\u5e8f\u3002"),(0,l.kt)("li",{parentName:"ul"},"ppl\u51fd\u6570\u7684\u8f93\u5165\u53c2\u6570\u5206\u4e3a\u4e24\u90e8\u5206\uff1a\u6570\u636e\u548c\u5176\u4ed6\u53c2\u6570\u3002\u6570\u636e\u90e8\u5206\u662f\u5236\u4f5c\u6570\u636e\u96c6\u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"iter_item")," \u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"yield")," \u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u672c\u4f8b\u5b50\u4e2d\u662f\u4e00\u4e2aStarwhale\u7684Audio\u7c7b\u578b\u3002\u5176\u4ed6\u53c2\u6570\u90e8\u5206kw\uff0c\u662f\u4e00\u4e2a\u5b57\u5178\uff0c\u76ee\u524d\u4f1a\u5305\u542b\u4e24\u4e2a\u53c2\u6570\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"annotations")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"index")," \u3002",(0,l.kt)("inlineCode",{parentName:"li"},"annotations"),"\u662f",(0,l.kt)("inlineCode",{parentName:"li"},"iter_item")," \u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"yield")," \u7684\u7b2c\u4e8c\u4e2a\u5143\u7d20\uff0c\u5305\u542b\u82e5\u5e72\u4e2a\u6570\u636e\u96c6\u4e2d\u7528\u6237\u81ea\u5b9a\u4e49\u7684annotation\uff0c\u7528\u5b57\u5178\u8868\u793a\u3002",(0,l.kt)("inlineCode",{parentName:"li"},"index")," \u7c7b\u578b\u4e3afloat\uff0c\u8868\u793a\u8be5\u6761\u6570\u636e\u5728\u6574\u4e2a\u6570\u636e\u96c6\u4e2d\u7684\u7d22\u5f15\u7f16\u53f7\u3002"),(0,l.kt)("li",{parentName:"ul"},"ppl\u51fd\u6570\u9700\u8981\u6709\u8fd4\u56de\u503c\uff0c\u4f46\u6ca1\u6709\u7c7b\u578b\u548c\u5f62\u5f0f\u9650\u5236\uff0c\u53ea\u8981\u80fdpickle\u5373\u53ef\uff0c\u5728cmp\u4e2d\u4e5f\u4f1a\u81ea\u52a8\u53cd\u5e8f\u5217\u5316\u6210\u539f\u59cb\u7684\u7c7b\u578b\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"cmp\u8fc7\u7a0b"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import multi_classification, PipelineHandler\n\nclass M5Inference(PipelineHandler):\n\n    @multi_classification(\n    confusion_matrix_normalize="all",\n    show_hamming_loss=True,\n    show_cohen_kappa_score=True,\n    show_roc_auc=True,\n    all_labels=[i for i in range(0, len(ALL_LABELS))],\n    )\n    def cmp(self, ppl_result):\n        result, label, pr = [], [], []\n        for _data in ppl_result:\n            label.append(ALL_LABELS_MAP[_data["input"]["label"]])\n            pr.append(_data["output"][1])\n            result.append(_data["output"][0][0])\n        return label, result, pr\n')),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"cmp\u8fc7\u7a0b\u4e00\u822c\u662f\u6574\u4e2a\u8bc4\u6d4b\u7684\u6700\u540e\u4e00\u6b65\uff0c\u8d1f\u8d23\u5c06ppl\u63a8\u7406\u7ed3\u679c\u6c47\u603b\uff0c\u5e76\u5bf9label\u8fdb\u884c\u5bf9\u6bd4\uff0c\u7136\u540e\u5f97\u5230\u5404\u79cd\u5f62\u6001\u7684\u8bc4\u6d4b\u62a5\u544a\u3002\u7ee7\u627f",(0,l.kt)("inlineCode",{parentName:"li"},"PipelineHandler"),"\u7684\u7c7b\uff0c\u9700\u8981\u5b9e\u73b0cmp\u65b9\u6cd5\u3002"),(0,l.kt)("li",{parentName:"ul"},"cmp\u51fd\u6570\u7684\u8f93\u5165\u53c2\u6570\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"ppl_result"),"\uff0c\u53ef\u4ee5\u88ab\u8fed\u4ee3\u4f7f\u7528\u3002\u6bcf\u4e2a\u8fed\u4ee3\u51fa\u6765\u7684\u5143\u7d20\u662f\u4e00\u4e2adict\u7c7b\u578b\uff0c\u76ee\u524d\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"li"},"input")," , ",(0,l.kt)("inlineCode",{parentName:"li"},"output")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"data_id")," \u4e09\u4e2a\u5143\u7d20\u3002",(0,l.kt)("inlineCode",{parentName:"li"},"output")," \u4e3a\u67d0\u6761dataset\u6570\u636e\u7684ppl\u63a8\u7406\u7ed3\u679c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u672c\u4f8b\u662f\u4e00\u4e2amulti classification\u95ee\u9898\uff0c\u53ef\u4ee5\u76f4\u63a5\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"starwhale.multi_classification")," \u4fee\u9970\u5668\uff0c\u80fd\u81ea\u52a8\u5bf9cmp\u7ed3\u679c\u8fdb\u884c\u8fdb\u4e00\u6b65\u5206\u6790\uff0c\u5e76\u5c06\u7ed3\u679c\u5b58\u50a8\u5728Starwhale\u7684DataStore\u4e2d\uff0c\u65b9\u4fbf\u540e\u7eed\u7684\u53ef\u89c6\u5316\u5c55\u793a\u3002\u7531\u4e8e\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"show_roc_auc=True")," \u53c2\u6570\uff0ccmp\u51fd\u6570\u9700\u8981\u8fd4\u56de\u4e09\u4e2a\u5143\u7d20\uff1alabel\u5217\u8868\uff0cresult\u5217\u8868\u548cprobability_matrix\u5217\u8868\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5373\u4f7f\u662fmulti classification\u95ee\u9898\uff0c\u4e5f\u4e0d\u9700\u8981\u5f3a\u5236\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"starwhale.multi_classification")," \u4fee\u9970\u5668\uff0c\u7528\u6237\u5b8c\u5168\u53ef\u4ee5\u6309\u7167\u81ea\u5df1\u7684\u9700\u6c42\u5b9a\u5236\u5316cmp\u8fc7\u7a0b\u3002")))),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pytorch.org/tutorials/intermediate/speech_command_classification_with_torchaudio_tutorial.html"},"Speech command classification with TorchAudio")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/1804.03209"},"Speech Commands\u6570\u636e\u96c6"))))}d.isMDXComponent=!0},8850:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sc_dataset_build-9dc60893fc5eb7e6ef8affd1c1036b8c.png"},73385:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sc_dataset_info-8a3990b6493f75cd9362373255c3856d.png"},66235:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sc_eval-dee4a237dbcaf703e6abb1db2fca83b9.png"},42370:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sc_model-860a13166d7d8787b9d41a400d76165f.png"},98904:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sc_train-48054ce983cf2f445c974132d4365bcb.png"}}]);