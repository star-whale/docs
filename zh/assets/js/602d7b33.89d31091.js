"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[894],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=l,h=u["".concat(o,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9622:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(3117),l=(a(7294),a(3905));const r={title:"AG News\u6570\u636e\u96c6\u7684\u6587\u672c\u5206\u7c7b\u6a21\u578b\u8bc4\u6d4b"},i=void 0,s={unversionedId:"examples/ag_news",id:"version-0.5.6/examples/ag_news",title:"AG News\u6570\u636e\u96c6\u7684\u6587\u672c\u5206\u7c7b\u6a21\u578b\u8bc4\u6d4b",description:"\u672c\u4f8b\u5b50\u53c2\u8003TorchText\u5bf9AG News\u6570\u636e\u96c6\u8fdb\u884c\u6587\u672c\u5206\u7c7b\u548c\u6a21\u578b\u8bc4\u6d4b\uff0c\u76f8\u5173\u4ee3\u7801\u7684\u94fe\u63a5\uff1aexample/textclsAGNEWS\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.6/examples/ag_news.md",sourceDirName:"examples",slug:"/examples/ag_news",permalink:"/zh/examples/ag_news",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.6/examples/ag_news.md",tags:[],version:"0.5.6",frontMatter:{title:"AG News\u6570\u636e\u96c6\u7684\u6587\u672c\u5206\u7c7b\u6a21\u578b\u8bc4\u6d4b"}},o={},p=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u57fa\u7840\u73af\u5883",id:"\u57fa\u7840\u73af\u5883",level:3},{value:"Starwhale Runtime\u6fc0\u6d3b",id:"starwhale-runtime\u6fc0\u6d3b",level:3},{value:"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3",id:"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3",level:3},{value:"Starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b",id:"starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b",level:2},{value:"\u6b65\u9aa41\uff1a\u6784\u5efaStarwhale Dataset",id:"\u6b65\u9aa41\u6784\u5efastarwhale-dataset",level:3},{value:"\u6b65\u9aa42\uff1aStandalone Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b",id:"\u6b65\u9aa42standalone-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b",level:3},{value:"\u6b65\u9aa43\uff1a\u6784\u5efaStarwhale Model",id:"\u6b65\u9aa43\u6784\u5efastarwhale-model",level:3},{value:"\u6b65\u9aa44\uff1aCloud Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\uff08\u53ef\u9009\uff09",id:"\u6b65\u9aa44cloud-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\u53ef\u9009",level:3},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u4f8b\u5b50",(0,l.kt)("a",{parentName:"p",href:"https://pytorch.org/tutorials/beginner/text_sentiment_ngrams_tutorial.html"},"\u53c2\u8003TorchText"),"\u5bf9",(0,l.kt)("a",{parentName:"p",href:"http://www.di.unipi.it/~gulli/AG_corpus_of_news_articles.html"},"AG News\u6570\u636e\u96c6"),"\u8fdb\u884c\u6587\u672c\u5206\u7c7b\u548c\u6a21\u578b\u8bc4\u6d4b\uff0c\u76f8\u5173\u4ee3\u7801\u7684\u94fe\u63a5\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/text_cls_AG_NEWS"},"example/text_cls_AG_NEWS"),"\u3002"),(0,l.kt)("p",null,"\u4ece\u8be5\u4f8b\u4e2d\uff0c\u6211\u4eec\u80fd\u5b9e\u8df5\u5982\u4e0bStarwhale\u529f\u80fd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u4f7f\u7528Text\u7c7b\u578b\u6784\u5efaswds\u6570\u636e\u96c6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5728model.yaml\u4e2d\u6307\u5b9a\u591a\u4e2amodel\u5e76\u5728\u8bc4\u6d4b\u4e2d\u4f7f\u7528\u3002")),(0,l.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,l.kt)("p",null,"\u9605\u8bfb\u672c\u6587\u524d\uff0c\u5efa\u8bae\u5148\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"/zh/runtime/examples/pytorch"},"Pytorch Runtime\u6784\u5efa"),", ",(0,l.kt)("a",{parentName:"p",href:"/zh/examples/speech"},"Speech Commands\u6570\u636e\u96c6\u7684\u591a\u5206\u7c7b\u4efb\u52a1\u6a21\u578b\u8bc4\u6d4b"),"\u3002"),(0,l.kt)("h3",{id:"\u57fa\u7840\u73af\u5883"},"\u57fa\u7840\u73af\u5883"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python\u7248\u672c: 3.7 ~ 3.10\u3002"),(0,l.kt)("li",{parentName:"ul"},"OS\u73af\u5883: Linux\u6216macOS(\u4ec5\u8fd0\u884cStandalone)\u3002"),(0,l.kt)("li",{parentName:"ul"},"Starwhale Client \u5b8c\u6210\u5b89\u88c5\uff0c\u4e14\u7248\u672c\u4e0d\u65e9\u4e8e0.3.0\u3002"),(0,l.kt)("li",{parentName:"ul"},"[\u53ef\u9009]","Starwhale Controller \u5b8c\u6210\u5b89\u88c5\uff0c\u4e14\u7248\u672c\u4e0d\u65e9\u4e8e0.3.0\uff0c\u5982\u679c\u53ea\u5e0c\u671b\u5728Standalone Instance\u4e2d\u8fdb\u884c\u8bc4\u6d4b\uff0c\u53ef\u4ee5\u5ffd\u7565\u8be5\u6b65\u9aa4\u3002"),(0,l.kt)("li",{parentName:"ul"},"Runtime: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/runtime/pytorch"},"Pytorch Runtime Example"))),(0,l.kt)("h3",{id:"starwhale-runtime\u6fc0\u6d3b"},"Starwhale Runtime\u6fc0\u6d3b"),(0,l.kt)("p",null,"\u672c\u4f8b\u53ef\u4ee5\u4f7f\u7528Starwhale\u63d0\u4f9b\u7684",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/runtime/pytorch"},"Pytorch Runtime\u4f8b\u5b50"),"\u4f5c\u4e3aStarwhale Runtime\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7f16\u5199Runtime\u914d\u7f6e\u3002\u6a21\u578b\u8bad\u7ec3\u548c\u8bc4\u6d4b\u90fd\u53ef\u4ee5\u4f7f\u7528\u8be5Runtime\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u51c6\u5907Runtime\uff1a\u4e0b\u8f7d\u6216\u91cd\u65b0\u6784\u5efa\uff0c\u5982\u4f55Standalone Instance\u4e2d\u5df2\u7ecf\u6709\u8be5Runtime\uff0c\u5219\u5ffd\u7565\u8be5\u6b65\u9aa4\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e0b\u8f7dStarwhale Cloud\u5df2\u7ecf\u6784\u5efa\u597d\u7684Pytorch Runtime\nswcli runtime copy https://cloud.starwhale.ai/project/demo/runtime/pytorch/version/latest self\n\n# \u6216\u6839\u636epytorch runtime example\u5728\u672c\u5730\u6784\u5efa\u4e00\u4e2a\u65b0\u7684Runtime\ngit clone --depth=1 https://github.com/star-whale/starwhale.git\ncd starwhale/example/runtime/pytorch\nswcli runtime build .\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Activate Runtime\uff1a\u5728\u5f53\u524dshell\u4e2d\u6fc0\u6d3b\u76f8\u5e94\u7684Python\u73af\u5883")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"swcli runtime activate pytorch/version/latest\n")),(0,l.kt)("h3",{id:"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3"},"\u6570\u636e\u51c6\u5907\u4e0e\u6a21\u578b\u8bad\u7ec3"),(0,l.kt)("p",null,"\u6570\u636e\u51c6\u5907\u548c\u6a21\u578b\u8bad\u7ec3\u975e\u5e38\u5bb9\u6613\uff0c\u53ea\u9700\u8981\u4e09\u6b65\u5c31\u80fd\u5b8c\u6210\u64cd\u4f5c\uff1a\u4e0b\u8f7d\u4ee3\u7801\u3001\u4e0b\u8f7d\u6570\u636e\u3001\u5f00\u59cb\u8bad\u7ec3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone --depth=1 https://github.com/star-whale/starwhale.git\ncd starwhale/example/text_cls_AG_NEWS\nmake download-data\nmake train\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"make download-data")," \u547d\u4ee4\u4e0b\u8f7d\u6570\u636e\u7684\u65f6\u5019\uff0c\u5982\u679c\u9047\u5230\u7f51\u7edc\u95ee\u9898\uff0c\u8bf7\u5408\u7406\u8bbe\u7f6e\u4ee3\u7406\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"make train")," \u547d\u4ee4\u9700\u8981\u5728Pytorch Runtime \u5df2\u7ecf\u6fc0\u6d3b\u7684Shell\u73af\u5883\u4e2d\u6267\u884c\uff0c\u5426\u5219\u53ef\u80fd\u63d0\u793a\u67d0\u4e9bPython\u5305Import Error\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"make train")," \u8fc7\u7a0b\u53ef\u80fd\u4f1a\u6bd4\u8f83\u6162\uff0c\u6267\u884c\u65f6\u95f4\u957f\u77ed\u53d6\u51b3\u4e8e\u673a\u5668\u914d\u7f6e\u3001GPU\u8d44\u6e90\u60c5\u51b5\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u547d\u4ee4\u6267\u884c\u7ed3\u675f\u540e\uff0c\u53ef\u4ee5\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"data"),"\u76ee\u5f55\u67e5\u770b\u539f\u59cb\u6570\u636e\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"models"),"\u76ee\u5f55\u67e5\u770b\u5df2\u7ecf\u6784\u5efa\u597d\u7684\u6a21\u578b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5728train.py\u6216Makefile\u4e2d\u5bf9\u8bad\u7ec3\u8fc7\u7a0b\u7684\u4e00\u4e9b\u53c2\u6570\u8fdb\u884c\u8c03\u6574\uff0c\u6bd4\u5982epoch\u503c, \u662f\u5426\u4f7f\u7528gpu\u7b49\u3002")),(0,l.kt)("h2",{id:"starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b"},"Starwhale\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b"),(0,l.kt)("h3",{id:"\u6b65\u9aa41\u6784\u5efastarwhale-dataset"},"\u6b65\u9aa41\uff1a\u6784\u5efaStarwhale Dataset"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6839\u636edataset.yaml\u6784\u5efaswds-bin\u683c\u5f0fin\u683c\u5f0f\u7684\u6570\u636e\u96c6\nswcli dataset build .\n# \u67e5\u770b\u6700\u65b0\u6784\u5efa\u7684\u6570\u636e\u96c6\u8be6\u60c5\nswcli dataset info ag_news_test/version/latest\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\u547d\u4ee4\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"starwhale/example/text_cls_AG_NEWS"),"\u4e2d\u6267\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u5176\u4ed6\u76ee\u5f55\u4e2d\u6267\u884c\uff0c\u4f46\u8981\u5408\u7406\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli dataset build"),"\u547d\u4ee4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli dataset build .\n\ud83d\udea7 start to build dataset bundle...\n\ud83d\udc77 uri:local/project/self/dataset/ag_news_test\n\ud83c\udd95 version gi4gcmtbgm2d\n\ud83d\udcc1 swds workdir: /home/liutianwei/.cache/starwhale/.tmp/tmpwvso4qob\n\ud83d\udc4d try to copy source code files...\ncleanup done.\nfinish gen swds @ /home/liutianwei/.cache/starwhale/.tmp/tmpwvso4qob/data\n\ud83e\udd16 calculate signature with blake2b for 4 files\n\ud83c\udf3a congratulation! you can run  swcli dataset info ag_news_test/version/gi4gcmtbgm2dmy3bmnsggzbqmy2dsma\n  9 out of 9 steps finished \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 0:00:01\nfinish gen resource @ /home/liutianwei/.cache/starwhale/self/dataset/ag_news_test/gi/gi4gcmtbgm2dmy3bmnsggzbqmy2dsma.swds\n")),(0,l.kt)("h3",{id:"\u6b65\u9aa42standalone-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b"},"\u6b65\u9aa42\uff1aStandalone Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6839\u636emodel.yaml\u8fd0\u884c\u8bc4\u6d4b\u4efb\u52a1\nswcli model eval . --dataset  ag_news_test/version/latest --runtime pytorch/version/latest\n# \u5c55\u793a\u8bc4\u6d4b\u7ed3\u679c\nswcli model info ${version}\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\u547d\u4ee4\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"starwhale/example/text_cls_AG_NEWS"),"\u4e2d\u6267\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u5176\u4ed6\u76ee\u5f55\u4e2d\u6267\u884c\uff0c\u4f46\u8981\u5408\u7406\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model eval"),"\u547d\u4ee4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u53c2\u6570\u3002\u5982\u679c\u4e0d\u60f3\u6bcf\u6b21\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"eval"),"\u547d\u4ee4\u90fd\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"--runtime"),"\u53c2\u6570\uff0c\u5219\u53ef\u4ee5\u5148\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"swcli runtime activate pytorch/version/latest"),"\u547d\u4ee4\u6fc0\u6d3b\u5f53\u524dshell\u73af\u5883\uff0c\u6216\u5728\u4e00\u4e2a\u5df2\u7ecf\u6fc0\u6d3bPytorch Runtime\u73af\u5883shell\u4e2d\u6267\u884c\u8bc4\u6d4b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"eval.png",src:a(8788).Z,width:"2541",height:"1390"})),(0,l.kt)("h3",{id:"\u6b65\u9aa43\u6784\u5efastarwhale-model"},"\u6b65\u9aa43\uff1a\u6784\u5efaStarwhale Model"),(0,l.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u7528\u6237\u7ecf\u8fc7\u591a\u6b21\u8fd0\u884c\u6a21\u578b\u8bc4\u6d4b\u547d\u4ee4(\u6b65\u9aa42)\u8fdb\u884c\u8c03\u8bd5\uff0c\u5f97\u5230\u4e00\u4e2a\u53ef\u4ee5\u5728\u5927\u6570\u636e\u91cf\u4e0b\u8fd0\u884c\u8bc4\u6d4b\u6216\u53ef\u53d1\u5e03\u7684\u6a21\u578b\uff0c\u5c31\u9700\u8981\u6267\u884c\u6b65\u9aa43\uff0c\u6784\u5efa\u4e00\u4e2a\u53ef\u5206\u53d1\u7684Starwhale Model\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#\u5982\u679c\u5df2\u7ecf\u6fc0\u6d3b\u8be5runtime\u73af\u5883\uff0c\u5219\u5ffd\u7565\u672c\u884c\u547d\u4ee4\nswcli runtime activate pytorch/version/latest\n#\u6839\u636emodel.yaml\u6784\u5efaStarwhale Model\nswcli model build .\n# \u67e5\u770b\u6700\u65b0\u6784\u5efa\u7684\u6a21\u578b\u4fe1\u606f\nswcli model info text_cls/version/latest\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\u547d\u4ee4\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"starwhale/example/text_cls_AG_NEWS"),"\u4e2d\u6267\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u5176\u4ed6\u76ee\u5f55\u4e2d\u6267\u884c\uff0c\u4f46\u8981\u5408\u7406\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model build"),"\u547d\u4ee4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR"),"\u53c2\u6570\u3002\u5982\u679c\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model build"),"\u547d\u4ee4\u65f6\uff0c\u662f\u5728\u975ePytorch Runtime\u7684Shell\u73af\u5883\u4e2d\u8fdb\u884c\u7684\uff0c\u5219\u53ef\u4ee5\u8ffd\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"--runtime pytorch/version/latest")," \u53c2\u6570\uff0c\u786e\u4fdd\u6784\u5efa\u65f6\u4f7f\u7528Pytorch Runtime\u73af\u5883\u3002"),(0,l.kt)("h3",{id:"\u6b65\u9aa44cloud-instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\u53ef\u9009"},"\u6b65\u9aa44\uff1aCloud Instance\u4e2d\u8bc4\u6d4b\u6a21\u578b\uff08\u53ef\u9009\uff09"),(0,l.kt)("p",null,"\u5728Cloud Instance\u4e0a\u8fd0\u884c\u8bc4\u6d4b\u4efb\u52a1\uff0c\u9700\u8981\u5c06Standalone Instance\u4e0a\u6784\u5efa\u7684Model\u3001Dataset\u548cRuntime\u53d1\u5e03\u5230\u76f8\u5e94\u7684Instance\u4e0a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u767b\u9646\u76f8\u5173instance\uff0c\u4e4b\u540e\u53ef\u4ee5\u7528 prod alias\u8bbf\u95ee\u8be5instance\nswcli instance login --username ${username} --token ${token}  http://${instance-address} --alias prod\n# \u5c06\u672c\u5730\u9ed8\u8ba4instance\u6539\u4e3astandalone\nswcli instance select local\n#\u4e0a\u4f20model\u5230prod instance\u4e2dname\u4e3astarwhale\u7684project\u4e2d\nswcli model copy text_cls/version/latest cloud://prod/project/starwhale\n#\u4e0a\u4f20dataset\u5230prod instance\u4e2dname\u4e3astarwhale\u7684project\u4e2d\nswcli dataset copy ag_news_test/version/latest cloud://prod/project/starwhale\n#\u4e0a\u4f20runtime\u5230prod instance\u4e2dname\u4e3astarwhale\u7684project\u4e2d\nswcli runtime copy pytorch/version/latest cloud://prod/project/starwhale\n")),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u53ef\u4ee5\u5728\u7ec8\u7aef\u4e2d\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"swcli ui prod"),"\u547d\u4ee4\uff0c\u53ef\u4ee5\u62c9\u8d77\u6d4f\u89c8\u5668\u5e76\u8fdb\u5165prod instance\u7684web\u9875\u9762\u4e2d\uff0c\u63a5\u7740\u8fdb\u5165\u76f8\u5173project\uff0c\u521b\u5efa\u8bc4\u6d4b\u4efb\u52a1\u5373\u53ef\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"ui.gif",src:a(58).Z,width:"2522",height:"1368"})),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pytorch.org/tutorials/beginner/text_sentiment_ngrams_tutorial.html"},"Text Classification with the TorchText Library")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.di.unipi.it/~gulli/AG_corpus_of_news_articles.html"},"AG News\u6570\u636e\u96c6"))))}m.isMDXComponent=!0},8788:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ag_news-eval-ed2e80ea7787b2bccb27431ebec6070b.png"},58:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ag_news-ui-ae3bad01689c09e45cba0d6313aa028c.gif"}}]);