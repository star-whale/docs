"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[78990],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,w=m["".concat(p,".").concat(c)]||m[c]||h[c]||n;return a?r.createElement(w,i(i({ref:t},u),{},{components:a})):r.createElement(w,i({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var r=a(83117),l=(a(67294),a(3905));const n={slug:"/",title:"\u4ec0\u4e48\u662fStarwhale"},i=void 0,o={unversionedId:"what-is-starwhale",id:"version-0.6.8/what-is-starwhale",title:"\u4ec0\u4e48\u662fStarwhale",description:"\u6982\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.8/what-is-starwhale.md",sourceDirName:".",slug:"/",permalink:"/zh/0.6.8/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.8/what-is-starwhale.md",tags:[],version:"0.6.8",frontMatter:{slug:"/",title:"\u4ec0\u4e48\u662fStarwhale"},sidebar:"mainSidebar",next:{title:"\u5165\u95e8\u6307\u5357",permalink:"/zh/0.6.8/getting-started/"}},p={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"Starwhale \u529f\u80fd",id:"starwhale-\u529f\u80fd",level:2},{value:"Starwhale \u6846\u67b6",id:"starwhale-\u6846\u67b6",level:2},{value:"\u5178\u578b\u4f7f\u7528\u573a\u666f",id:"\u5178\u578b\u4f7f\u7528\u573a\u666f",level:2},{value:"\u5f00\u59cb Starwhale \u4e4b\u65c5",id:"\u5f00\u59cb-starwhale-\u4e4b\u65c5",level:2}],u={toc:s};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("p",null,"Starwhale\u662f\u4e00\u4e2a MLOps/LLMOps\u5e73\u53f0\uff0c\u9762\u5411\u673a\u5668\u5b66\u4e60\u9879\u76ee\u63d0\u4f9b\u7814\u53d1\u8fd0\u8425\u7ba1\u7406\u80fd\u529b\uff0c\u5efa\u7acb\u6807\u51c6\u5316\u7684\u6a21\u578b\u5f00\u53d1\u3001\u6d4b\u8bd5\u3001\u90e8\u7f72\u548c\u8fd0\u8425\u6d41\u7a0b\uff0c\u8fde\u63a5\u4e1a\u52a1\u56e2\u961f\u3001AI\u56e2\u961f\u548c\u8fd0\u8425\u56e2\u961f\u3002\u89e3\u51b3\u673a\u5668\u5b66\u4e60\u8fc7\u7a0b\u4e2d\u6a21\u578b\u8fed\u4ee3\u5468\u671f\u957f\u3001\u56e2\u961f\u534f\u4f5c\u3001\u4eba\u529b\u8d44\u6e90\u6d6a\u8d39\u7b49\u95ee\u9898\u3002Starwhale\u63d0\u4f9bStandalone, Server \u548c Cloud \u4e09\u79cd\u5b9e\u4f8b\u65b9\u5f0f\uff0c\u6ee1\u8db3\u5355\u673a\u73af\u5883\u5f00\u53d1\uff0c\u79c1\u6709\u5316\u96c6\u7fa4\u90e8\u7f72\u548cStarwhale\u56e2\u961f\u6258\u7ba1\u7684\u4e91\u670d\u52a1\u591a\u79cd\u90e8\u7f72\u573a\u666f\u3002"),(0,l.kt)("p",null,"Starwhale \u540c\u65f6\u4e5f\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale"},"\u5f00\u6e90\u7684\u5e73\u53f0"),"\uff0c\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/main/LICENSE"},"Apache-2.0 \u534f\u8bae"),"\u3002"),(0,l.kt)("h2",{id:"starwhale-\u529f\u80fd"},"Starwhale \u529f\u80fd"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/products.png",alt:"products"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5e73\u53f0\u57fa\u7840\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"model/index"},"Starwhale Model"),"\uff1aStarwhale \u6a21\u578b\u662f\u4e00\u79cd\u673a\u5668\u5b66\u4e60\u6a21\u578b\u7684\u6807\u51c6\u5305\u683c\u5f0f\uff0c\u53ef\u7528\u4e8e\u591a\u79cd\u7528\u9014\uff0c\u4f8b\u5982\u6a21\u578b\u5fae\u8c03\u3001\u6a21\u578b\u8bc4\u4f30\u548c\u5728\u7ebf\u670d\u52a1\u3002 Starwhale \u6a21\u578b\u5305\u542b\u6a21\u578b\u6587\u4ef6\u3001\u63a8\u7406\u4ee3\u7801\u3001\u914d\u7f6e\u6587\u4ef6\u7b49\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"dataset/index"},"Starwhale Dataset"),"\uff1aStarwhale \u6570\u636e\u96c6\u80fd\u591f\u9ad8\u6548\u7684\u6570\u636e\u5b58\u50a8\u3001\u6570\u636e\u52a0\u8f7d\u548c\u6570\u636e\u53ef\u89c6\u5316\uff0c\u662f\u4e00\u6b3e\u9762\u5411ML/DL\u9886\u57df\u7684\u6570\u636e\u7ba1\u7406\u5de5\u5177\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"runtime/index"},"Starwhale Runtime"),"\uff1aStarwhale \u8fd0\u884c\u65f6\u80fd\u591f\u9488\u5bf9\u8fd0\u884cPython\u7a0b\u5e8f\uff0c\u63d0\u4f9b\u4e00\u79cd\u53ef\u590d\u73b0\u3001\u53ef\u5206\u4eab\u7684\u8fd0\u884c\u73af\u5883\u3002\u4f7f\u7528 Starwhale \u8fd0\u884c\u65f6\uff0c\u53ef\u4ee5\u975e\u5e38\u5bb9\u6613\u7684\u4e0e\u4ed6\u4eba\u5206\u4eab\uff0c\u5e76\u4e14\u80fd\u5728 Starwhale Server \u548c Starwhale Cloud \u5b9e\u4f8b\u4e0a\u4f7f\u7528 Starwhale \u8fd0\u884c\u65f6\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u6a21\u578b\u8bc4\u6d4b\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"evaluation/index"},"Model Evaluation"),"\uff1aStarwhale \u6a21\u578b\u8bc4\u6d4b\u80fd\u8ba9\u7528\u6237\u901a\u8fc7SDK\u5199\u5c11\u91cf\u7684Python \u4ee3\u7801\u5c31\u80fd\u5b9e\u73b0\u590d\u6742\u7684\u3001\u751f\u4ea7\u7ea7\u522b\u7684\u3001\u5206\u5e03\u5f0f\u7684\u6a21\u578b\u8bc4\u6d4b\u4efb\u52a1\u3002"),(0,l.kt)("li",{parentName:"ul"},"Live Demo\uff1a\u80fd\u591f\u901a\u8fc7Web UI\u65b9\u5f0f\u5bf9\u6a21\u578b\u8fdb\u884c\u5728\u7ebf\u8bc4\u6d4b\u3002"),(0,l.kt)("li",{parentName:"ul"},"Reports\uff1a\u7f16\u5199\u53ef\u5206\u4eab\uff0c\u53ef\u81ea\u52a8\u96c6\u6210\u8bc4\u6d4b\u6570\u636e\u7684\u62a5\u544a\u3002"),(0,l.kt)("li",{parentName:"ul"},"Tables\uff1a\u63d0\u4f9b\u591a\u7ef4\u5ea6\u7684\u6a21\u578b\u8bc4\u6d4b\u7ed3\u679c\u5bf9\u6bd4\u548c\u5c55\u793a\uff0c\u8868\u683c\u4e2d\u652f\u6301\u5305\u62ec\u56fe\u7247\u3001\u97f3\u9891\u548c\u89c6\u9891\u7b49\u591a\u5a92\u4f53\u6570\u636e\u5c55\u793a\u3002\u80fd\u591f\u5c06\u8bc4\u6d4b\u8fc7\u7a0b\u4e2d\u901a\u8fc7Starwhale Python SDK \u81ea\u7531\u8bb0\u5f55\u7684\u6570\u636e\u90fd\u5448\u73b0\u51fa\u6765\u3002"))),(0,l.kt)("li",{parentName:"ul"},"LLM \u5fae\u8c03\uff1a\u63d0\u4f9b\u9762\u5411LLM\u7684\u5168\u6d41\u7a0b\u6a21\u578b\u5fae\u8c03\u5de5\u5177\u94fe\uff0c\u5305\u62ec\u6a21\u578b\u5fae\u8c03\uff0c\u6279\u91cf\u8bc4\u6d4b\u5bf9\u6bd4\uff0c\u5728\u7ebf\u8bc4\u6d4b\u5bf9\u6bd4\u548c\u6a21\u578b\u53d1\u5e03\u529f\u80fd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u5b9e\u4f8b\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Starwhale Standalone\uff1a\u90e8\u7f72\u5728\u672c\u5730\u5f00\u53d1\u73af\u5883\u4e2d\uff0c\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"swcli")," \u547d\u4ee4\u884c\u5de5\u5177\u8fdb\u884c\u7ba1\u7406\uff0c\u6ee1\u8db3\u5f00\u53d1\u8c03\u8bd5\u9700\u6c42\u3002"),(0,l.kt)("li",{parentName:"ul"},"Starwhale Server\uff1a\u90e8\u7f72\u5728\u79c1\u6709\u6570\u636e\u4e2d\u5fc3\u91cc\uff0c\u4f9d\u8d56 Kubernetes \u96c6\u7fa4\uff0c\u63d0\u4f9b\u96c6\u4e2d\u5316\u7684\u3001Web\u4ea4\u4e92\u5f0f\u7684\u3001\u5b89\u5168\u7684\u670d\u52a1\u3002"),(0,l.kt)("li",{parentName:"ul"},"Starwhale Cloud\uff1a\u6258\u7ba1\u5728\u516c\u5171\u4e91\u4e0a\u7684\u670d\u52a1\uff0c\u8bbf\u95ee\u5730\u5740\u4e3a",(0,l.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn"},"https://cloud.starwhale.cn"),"\uff0c\u7531 Starwhale \u56e2\u961f\u8d1f\u8d23\u8fd0\u7ef4\uff0c\u65e0\u9700\u5b89\u88c5\uff0c\u6ce8\u518c\u8d26\u6237\u540e\u5373\u53ef\u4f7f\u7528\u3002")))),(0,l.kt)("h2",{id:"starwhale-\u6846\u67b6"},"Starwhale \u6846\u67b6"),(0,l.kt)("img",{src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/framework.png",alt:"framework",width:"75%"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9762\u5411\u72ec\u7acb\u5f00\u53d1\u8005",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Starwhale Standalone \u5b9e\u4f8b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli"),"\uff1aPython \u7f16\u5199\u7684\u4e00\u7ec4\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u53ef\u4ee5\u7528\u6765\u5b8c\u6210\u6a21\u578b\u6784\u5efa\u3001\u8bc4\u6d4b\u3001\u62f7\u8d1d\u7b49\u5de5\u4f5c\u3002"),(0,l.kt)("li",{parentName:"ul"},"Starwhale Python SDK\uff1a\u4e00\u7cfb\u5217\u5de5\u5177\u51fd\u6570\u6216\u7c7b\uff0c\u8ba9\u6a21\u578b\u8bc4\u6d4b\u4e0e\u5fae\u8c03\u3001\u6570\u636e\u96c6\u6784\u5efa\u4e0e\u52a0\u8f7d\u7b49\u4efb\u52a1\u53d8\u5f97\u7b80\u5355\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u9762\u5411\u56e2\u961f\u7528\u6237",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Starwhale Server \u6216 Starwhale Cloud \u5b9e\u4f8b\uff0c\u63d0\u4f9bWeb UI\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u7ec4\u4ef6\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"api server"),"\uff1a\u4f9d\u8d56MySQL\u6570\u636e\u5e93\u548c\u5bf9\u8c61\u5b58\u50a8\uff0c\u5b8c\u6210Starwhale\u5e73\u53f0\u7684API\u5b9e\u73b0\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"scheduler"),"\uff1a\u4f9d\u8d56Docker\u6216Kubernetes\uff0c\u5b9e\u73b0\u8bc4\u6d4b\u4efb\u52a1\u7684\u8c03\u5ea6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"datastore"),"\uff1a\u4f9d\u8d56\u5bf9\u8c61\u5b58\u50a8\uff0c\u63d0\u4f9b\u7c7b\u4f3cBig Table\u7684\u5b58\u50a8\u4e0e\u8bbf\u95ee\u65b9\u5f0f\uff0c\u6ee1\u8db3\u6570\u636e\u96c6\u548c\u8bc4\u6d4b\u6570\u636e\u7684\u5b58\u50a8\u3001\u68c0\u7d22\u7b49\u9700\u6c42\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8\u4f9d\u8d56\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b58\u50a8\uff1aMySQL\u548c\u5bf9\u8c61\u5b58\u50a8\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bb9\u5668\uff1aDocker\uff08\u5355\u673a\uff09\u6216Kubernetes\uff08\u96c6\u7fa4\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u8d44\u6e90\uff1a\u88f8\u91d1\u5c5e\u6216\u516c\u6709\u4e91\u3002")))))),(0,l.kt)("h2",{id:"\u5178\u578b\u4f7f\u7528\u573a\u666f"},"\u5178\u578b\u4f7f\u7528\u573a\u666f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6570\u636e\u96c6\u7ba1\u7406"),"\uff1a\u57fa\u4e8e Starwhale Dataset Python SDK \u53ef\u4ee5\u975e\u5e38\u5bb9\u6613\u7684\u5bfc\u5165\u3001\u521b\u5efa\u3001\u5206\u53d1\u548c\u52a0\u8f7d\u6570\u636e\u96c6\uff0c\u540c\u65f6\u53ef\u4ee5\u5b9e\u73b0\u6570\u636e\u96c6\u7ec6\u7c92\u5ea6\u7684\u7248\u672c\u63a7\u5236\u548c\u53ef\u89c6\u5316\u7b49\u529f\u80fd\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6a21\u578b\u7ba1\u7406"),"\uff1a\u901a\u8fc7\u7b80\u5355\u7684\u6253\u5305\u673a\u5236\uff0c\u80fd\u5c06\u6a21\u578b\u3001\u914d\u7f6e\u6587\u4ef6\u548c\u4ee3\u7801\u7b49\u751f\u6210 Starwhale \u6a21\u578b\u5305\uff0c\u63d0\u4f9b\u9ad8\u6548\u5206\u53d1\u3001\u7248\u672c\u7ba1\u7406\u3001Model Registry\u548c\u53ef\u89c6\u5316\u7b49\u529f\u80fd\uff0c\u8ba9\u6a21\u578b\u5305\u7684\u65e5\u5e38\u7ba1\u7406\u66f4\u7b80\u5355\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u673a\u5668\u5b66\u4e60\u8fd0\u884c\u73af\u5883\u5171\u4eab"),"\uff1a \u901a\u8fc7\u5bfc\u51fa\u5f00\u53d1\u73af\u5883\u6216\u7f16\u5199\u7b80\u5355\u7684 YAML \u751f\u6210 Starwhale \u8fd0\u884c\u65f6\uff0c\u53ef\u4ee5\u5728\u5176\u4ed6\u5b9e\u4f8b\u4e2d\u91cd\u73b0\u8be5\u73af\u5883\uff0c\u83b7\u5f97\u7a33\u5b9a\u7684\u3001\u4e00\u81f4\u7684\u8fd0\u884c\u65f6\uff0c\u5b9e\u73b0\u4e00\u5904\u5b9a\u4e49\uff0c\u5904\u5904\u8fd0\u884c\u7684\u76ee\u6807\u3002Starwhale \u8fd0\u884c\u65f6\u62bd\u8c61\u548c\u5c4f\u853d\u4e00\u4e9b\u5e95\u5c42\u4f9d\u8d56\uff0c\u7528\u6237\u4e0d\u9700\u8981\u638c\u63e1Dockerfile\u7f16\u5199\u3001CUDA\u5b89\u88c5\u7b49\u77e5\u8bc6\uff0c\u975e\u5e38\u7b80\u5355\u7684\u5c31\u80fd\u5b9a\u4e49\u51fa\u6ee1\u8db3\u673a\u5668\u5b66\u4e60\u7a0b\u5e8f\u8fd0\u884c\u7684\u73af\u5883\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6a21\u578b\u8bc4\u6d4b"),"\uff1a\u501f\u52a9 Starwhale Evaluation Python SDK\uff0c\u53ea\u9700\u8981\u7f16\u5199\u5c11\u91cf\u4ee3\u7801\uff0c\u5c31\u80fd\u5b9e\u73b0\u5206\u5e03\u5f0f\u96c6\u7fa4\u73af\u5883\u4e0b\u7684\u9ad8\u6548\u7684\u3001\u5927\u89c4\u6a21\u7684\u3001\u591a\u6570\u636e\u96c6\u7684\u3001\u591a\u9636\u6bb5\u7684\u6a21\u578b\u8bc4\u6d4b\uff0c\u5e76\u80fd\u5c06\u8bc4\u6d4b\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u6570\u636e\u3001\u5236\u54c1\u7b49\u8bb0\u5f55\u5230 Starwhale Tables\u4e2d\uff0c\u5e76\u63d0\u4f9b\u591a\u79cd\u53ef\u89c6\u5316\u65b9\u5f0f\u5c55\u793a\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5728\u7ebf\u8bc4\u6d4b"),"\uff1a\u4e3aStarwhale \u6a21\u578b\u5feb\u901f\u521b\u5efa\u4ea4\u4e92\u5f0f\u7684Web UI\u5728\u7ebf\u670d\u52a1\uff0c\u53ef\u4ee5\u8fdb\u884c\u5feb\u901f\u68c0\u6d4b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6a21\u578b\u5fae\u8c03"),"\uff1a\u9488\u5bf9\u5927\u8bed\u8a00\u6a21\u578b(LLM)\u7684\u5fae\u8c03\uff0c\u63d0\u4f9b\u4e00\u5957\u5b8c\u6574\u7684\u5de5\u5177\u94fe\uff0c\u8ba9\u6a21\u578b\u5fae\u8c03\u8fc7\u7a0b\u53d8\u5f97\u5feb\u901f\u4e14\u53ef\u91cf\u5316\u3002")),(0,l.kt)("p",null,"Starwhale \u662f\u4e00\u4e2a\u5f00\u653e\u7684\u5e73\u53f0\uff0c\u5de5\u4f5c\u4e2d\u53ef\u4ee5\u53ea\u7528\u67d0\u4e9b\u529f\u80fd\uff0c\u4e5f\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\uff0c\u6838\u5fc3\u76ee\u6807\u662f\u4e3a\u6570\u636e\u79d1\u5b66\u5bb6\u548c\u673a\u5668\u5b66\u4e60\u5de5\u7a0b\u5e08\u63d0\u4f9b\u4e00\u4e2a\u65b9\u4fbf\u7684\u5de5\u5177\uff0c\u63d0\u5347\u5de5\u4f5c\u6548\u7387\u3002"),(0,l.kt)("h2",{id:"\u5f00\u59cb-starwhale-\u4e4b\u65c5"},"\u5f00\u59cb Starwhale \u4e4b\u65c5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"5-10\u5206\u949f\u5185\u5b8c\u6210 ",(0,l.kt)("a",{parentName:"li",href:"swcli/installation"},"Starwhale Client \u7684\u5b89\u88c5"),"\u548c ",(0,l.kt)("a",{parentName:"li",href:"server/installation/server-start"},"Starwhale Server \u7684\u542f\u52a8"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"server/installation/server-start"},"Starwhale Standalone \u5165\u95e8\u6307\u5357"),"\uff0c\u5728\u672c\u5730\u5bf9 helloworld \u4f8b\u5b50\u7684\u6a21\u578b\u3001\u6570\u636e\u96c6\u548c\u8fd0\u884c\u65f6\u8fdb\u884c\u6784\u5efa\uff0c\u5b8c\u6210\u5bf9 MNIST \u6570\u636e\u96c6\u7684\u6a21\u578b\u6548\u679c\u7684\u8bc4\u4f30\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"getting-started/server"},"Starwhale Server \u5165\u95e8\u6307\u5357"),"\uff0c\u5728 Starwhale Server \u4e2d\u8fd0\u884c helloworld \u4f8b\u5b50\u7684\u6a21\u578b\u8bc4\u6d4b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9605\u8bfb ",(0,l.kt)("a",{parentName:"li",href:"swcli"},"\u7528\u6237\u6307\u5357")," \u548c ",(0,l.kt)("a",{parentName:"li",href:"reference/swcli"},"\u53c2\u8003\u6307\u5357"),"\uff0c\u5e76\u53c2\u7167",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example"},"\u4f8b\u5b50"),"\uff0c\u5236\u4f5c\u81ea\u5df1\u7684\u6570\u636e\u96c6\u3001\u8fd0\u884c\u65f6\u548c\u6a21\u578b\u5305\uff0c\u8fdb\u884c\u6a21\u578b\u8bc4\u6d4b\u7b49\u4efb\u52a1\u3002")))}h.isMDXComponent=!0}}]);