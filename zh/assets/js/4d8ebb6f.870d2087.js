"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[7380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2513:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(3117),a=(r(7294),r(3905));const l={title:"\u5165\u95e8\u6307\u5357"},o=void 0,i={unversionedId:"getting-started/index",id:"getting-started/index",title:"\u5165\u95e8\u6307\u5357",description:"\u9996\u5148\uff0c\u60a8\u9700\u8981\u5b89\u88c5Starwhale Client\uff08SWCLI\uff09\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b8c\u6210command",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/zh/docs/next/getting-started/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/getting-started/index.md",tags:[],version:"current",frontMatter:{title:"\u5165\u95e8\u6307\u5357"},sidebar:"mainSidebar",previous:{title:"\u4ec0\u4e48\u662fStarwhale",permalink:"/zh/docs/next/"},next:{title:"Starwhale Standalone\u5165\u95e8\u6307\u5357",permalink:"/zh/docs/next/getting-started/standalone"}},c={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u5b89\u88c5",(0,a.kt)("a",{parentName:"p",href:"../swcli"},"Starwhale Client\uff08SWCLI\uff09"),"\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b8c\u6210command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install starwhale\n")),(0,a.kt)("p",null,"\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"../swcli/installation"},"SWCLI\u5b89\u88c5\u6307\u5357")),(0,a.kt)("p",null,"\u6839\u636e\u60a8\u4f7f\u7528\u7684\u5b9e\u4f8b\u7c7b\u578b\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u4e09\u4e2a\u5165\u95e8\u6307\u5357\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"standalone"},"Starwhale Standalone\u5165\u95e8\u6307\u5357")," - \u672c\u6307\u5357\u53ef\u5e2e\u52a9\u60a8\u5728\u53f0\u5f0fPC/\u7b14\u8bb0\u672c\u7535\u8111\u4e0a\u8fd0\u884c\u4e00\u4e2aMNIST\u8bc4\u4f30\u3002\u8fd9\u662f\u5f00\u59cb\u4f7f\u7528Starwhale\u6700\u5feb\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"server"},"Starwhale Server\u5165\u95e8\u6307\u5357")," - \u672c\u6307\u5357\u53ef\u5e2e\u52a9\u60a8\u5728\u670d\u52a1\u5668\u4e0a\u5b89\u88c5Starwhale Server\u5e76\u8fd0\u884c\u4e00\u4e2aMNIST\u8bc4\u4f30\u3002\u5728\u672c\u6307\u5357\u7ed3\u675f\u65f6\uff0c\u60a8\u5c06\u62e5\u6709\u4e00\u4e2aStarwhale Server\u5b9e\u4f8b\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u7ba1\u7406\u60a8\u7684\u6570\u636e\u96c6\u548c\u6a21\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"cloud"},"Starwhale Cloud\u5165\u95e8\u6307\u5357")," - \u672c\u6307\u5357\u53ef\u5e2e\u52a9\u60a8\u5728Starwhale Cloud\u4e0a\u521b\u5efa\u5e10\u6237\u5e76\u8fd0\u884cMNIST\u8bc4\u4f30\u3002\u8fd9\u662f\u4f53\u9a8c\u6240\u6709Starwhale\u529f\u80fd\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u3002")))}u.isMDXComponent=!0}}]);