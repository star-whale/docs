"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),p=c(r),h=a,d=p["".concat(o,".").concat(h)]||p[h]||s[h]||l;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=p;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5819:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=r(3117),a=(r(7294),r(3905));const l={title:"Starwhale Runtime\u5165\u95e8\u6307\u5357"},i=void 0,u={unversionedId:"getting-started/runtime",id:"version-0.6.0/getting-started/runtime",title:"Starwhale Runtime\u5165\u95e8\u6307\u5357",description:"\u672c\u6587\u6f14\u793a\u5982\u4f55\u642d\u5efaPytorch\u73af\u5883\u7684Starwhale Runtime\u4ee5\u53ca\u5982\u4f55\u5728\u4e0d\u540c\u73af\u5883\u4e2d\u4f7f\u7528\u5b83\u3002\u8be5runtime\u53ef\u4ee5\u6ee1\u8db3Starwhale\u4e2d\u516d\u4e2a\u4f8b\u5b50\u7684\u4f9d\u8d56\u9700\u6c42\uff1amnist\u3001speech commands\u3001nmt\u3001cifar10\u3001ag_news\u3001PennFudan\u3002\u76f8\u5173\u4ee3\u7801\u94fe\u63a5\uff1aexample/runtime/pytorch\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.0/getting-started/runtime.md",sourceDirName:"getting-started",slug:"/getting-started/runtime",permalink:"/zh/0.6.0/getting-started/runtime",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.0/getting-started/runtime.md",tags:[],version:"0.6.0",frontMatter:{title:"Starwhale Runtime\u5165\u95e8\u6307\u5357"},sidebar:"mainSidebar",previous:{title:"Starwhale Cloud\u5165\u95e8\u6307\u5357",permalink:"/zh/0.6.0/getting-started/cloud"},next:{title:"Starwhale\u5e38\u7528\u6982\u5ff5",permalink:"/zh/0.6.0/concepts/"}},o={},c=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u57fa\u7840\u73af\u5883",id:"\u57fa\u7840\u73af\u5883",level:3},{value:"\u6784\u5efaStarwhale Runtime",id:"\u6784\u5efastarwhale-runtime",level:2},{value:"\u5728Standalone Instance\u4e2d\u4f7f\u7528Starwhale Runtime",id:"\u5728standalone-instance\u4e2d\u4f7f\u7528starwhale-runtime",level:2},{value:"\u5728shell\u4e2d\u4f7f\u7528Starwhale Runtime",id:"\u5728shell\u4e2d\u4f7f\u7528starwhale-runtime",level:3},{value:"\u5728swcli\u4e2d\u4f7f\u7528Starwhale Runtime",id:"\u5728swcli\u4e2d\u4f7f\u7528starwhale-runtime",level:3},{value:"\u5c06 Starwhale Runtime \u590d\u5236\u5230\u53e6\u4e00\u4e2a\u5b9e\u4f8b",id:"\u5c06-starwhale-runtime-\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u5b9e\u4f8b",level:2}],m={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u6f14\u793a\u5982\u4f55\u642d\u5efaPytorch\u73af\u5883\u7684Starwhale Runtime\u4ee5\u53ca\u5982\u4f55\u5728\u4e0d\u540c\u73af\u5883\u4e2d\u4f7f\u7528\u5b83\u3002\u8be5runtime\u53ef\u4ee5\u6ee1\u8db3Starwhale\u4e2d\u516d\u4e2a\u4f8b\u5b50\u7684\u4f9d\u8d56\u9700\u6c42\uff1amnist\u3001speech commands\u3001nmt\u3001cifar10\u3001ag_news\u3001PennFudan\u3002\u76f8\u5173\u4ee3\u7801\u94fe\u63a5\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/runtime/pytorch"},"example/runtime/pytorch"),"\u3002"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece\u672c\u6559\u7a0b\u4e2d\u5b66\u5230\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u6784\u5efaStarwhale Runtime\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5728\u4e0d\u540c\u573a\u666f\u4e0b\u4f7f\u7528Starwhale Runtime\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u53d1\u5e03Starwhale Runtime\u3002")),(0,a.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,a.kt)("h3",{id:"\u57fa\u7840\u73af\u5883"},"\u57fa\u7840\u73af\u5883"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Python 3.7+"),(0,a.kt)("li",{parentName:"ul"},"Linux\u6216macOS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/0.6.0/swcli/"},"Starwhale Client")," 0.5.6+")),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u514b\u9686\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/star-whale/starwhale.git\ncd starwhale/example/runtime/pytorch-cn-mirror #\u975e\u4e2d\u56fd\u5927\u9646\u7f51\u7edc\u53ef\u4f7f\u7528pytorch\u4f8b\u5b50\n")),(0,a.kt)("h2",{id:"\u6784\u5efastarwhale-runtime"},"\u6784\u5efaStarwhale Runtime"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"\u276f swcli -vvv runtime build --yaml runtime.yaml\n")),(0,a.kt)("h2",{id:"\u5728standalone-instance\u4e2d\u4f7f\u7528starwhale-runtime"},"\u5728Standalone Instance\u4e2d\u4f7f\u7528Starwhale Runtime"),(0,a.kt)("h3",{id:"\u5728shell\u4e2d\u4f7f\u7528starwhale-runtime"},"\u5728shell\u4e2d\u4f7f\u7528Starwhale Runtime"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# \u6fc0\u6d3bruntime\nswcli runtime activate pytorch-cn-mirror\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"swcli runtime activate"),"\u4f1a\u4e0b\u8f7druntime\u7684\u6240\u6709python\u4f9d\u8d56\uff0c\u5e76\u5728\u5f53\u524dshell\u73af\u5883\u4e2d\u6fc0\u6d3b\u8be5\u73af\u5883\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u53ef\u80fd\u9700\u8981\u5f88\u957f\u65f6\u95f4\u3002"),(0,a.kt)("p",null,"\u5f53runtime\u88ab\u6fc0\u6d3b\u65f6\uff0c\u6240\u6709\u4f9d\u8d56\u9879\u90fd\u5df2\u5728\u60a8\u7684python\u73af\u5883\u4e2d\u51c6\u5907\u5c31\u7eea\uff0c\u7c7b\u4f3c\u4e8evirtualenv\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"source venv/bin/activate"),"\u6216\u8005conda\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"conda activate"),"\u547d\u4ee4\u3002\u5982\u679c\u60a8\u5173\u95ed\u4e86shell\u6216\u5207\u6362\u5230\u53e6\u4e00\u4e2ashell\uff0c\u5219\u4e0b\u6b21\u4f7f\u7528\u4e4b\u524d\u9700\u8981\u91cd\u65b0\u6fc0\u6d3b\u8fd9\u4e2aruntime\u3002"),(0,a.kt)("h3",{id:"\u5728swcli\u4e2d\u4f7f\u7528starwhale-runtime"},"\u5728swcli\u4e2d\u4f7f\u7528Starwhale Runtime"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# \u6a21\u578b\u6784\u5efa\u4e2d\u4f7f\u7528runtime\nswcli model build . --runtime pytorch-cn-mirror\n# \u6570\u636e\u96c6\u6784\u5efa\u4e2d\u4f7f\u7528runtime\nswcli dataset build . --runtime pytorch-cn-mirror\n# \u6a21\u578b\u8bc4\u6d4b\u4e2d\u4f7f\u7528runtime\nswcli model run --uri mnist/version/v0 --dataset mnist --runtime pytorch-cn-mirror\n")),(0,a.kt)("h2",{id:"\u5c06-starwhale-runtime-\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u5b9e\u4f8b"},"\u5c06 Starwhale Runtime \u590d\u5236\u5230\u53e6\u4e00\u4e2a\u5b9e\u4f8b"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06\u8fd0\u884c\u65f6\u590d\u5236\u5230Server/Cloud\u5b9e\u4f8b\uff0c\u7136\u540e\u53ef\u4ee5\u5728Server/Cloud\u5b9e\u4f8b\u4e2d\u4f7f\u7528\u6216\u7531\u5176\u4ed6\u7528\u6237\u4e0b\u8f7d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# \u5c06runtime\u590d\u5236\u5230\u540d\u4e3a\u201cpre-k8s\u201d\u7684Server\u5b9e\u4f8b\n\u276f swcli runtime copy pytorch-cn-mirror cloud://pre-k8s/project/starwhale\n")))}s.isMDXComponent=!0}}]);