"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9037],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||l;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(3117),a=(r(7294),r(3905));const l={title:"\u5165\u95e8\u6307\u5357"},o=void 0,i={unversionedId:"getting-started/index",id:"version-0.5.10/getting-started/index",title:"\u5165\u95e8\u6307\u5357",description:"\u9996\u5148\uff0c\u60a8\u9700\u8981\u5b89\u88c5Starwhale Client\uff08swcli\uff09\uff0c\u53ef\u4ee5\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.10/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/zh/0.5.10/getting-started/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.10/getting-started/index.md",tags:[],version:"0.5.10",frontMatter:{title:"\u5165\u95e8\u6307\u5357"},sidebar:"mainSidebar",previous:{title:"\u4ec0\u4e48\u662fStarwhale",permalink:"/zh/0.5.10/"},next:{title:"Starwhale Standalone\u5165\u95e8\u6307\u5357",permalink:"/zh/0.5.10/getting-started/standalone"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u60a8\u9700\u8981\u5b89\u88c5",(0,a.kt)("a",{parentName:"p",href:"../swcli"},"Starwhale Client\uff08swcli\uff09"),"\uff0c\u53ef\u4ee5\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install starwhale\n")),(0,a.kt)("p",null,"\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"../swcli/installation"},"swcli\u5b89\u88c5\u6307\u5357"),"\u3002"),(0,a.kt)("p",null,"\u6839\u636e\u60a8\u4f7f\u7528\u7684\u5b9e\u4f8b\u7c7b\u578b\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u4e09\u4e2a\u5165\u95e8\u6307\u5357\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"standalone"},"Starwhale Standalone\u5165\u95e8\u6307\u5357")," - \u672c\u6307\u5357\u53ef\u5e2e\u52a9\u60a8\u5728\u53f0\u5f0fPC/\u7b14\u8bb0\u672c\u7535\u8111\u4e0a\u8fd0\u884c\u4e00\u4e2aMNIST\u8bc4\u4f30\u3002\u8fd9\u662f\u5f00\u59cb\u4f7f\u7528Starwhale\u6700\u5feb\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"server"},"Starwhale Server\u5165\u95e8\u6307\u5357")," - \u672c\u6307\u5357\u53ef\u5e2e\u52a9\u60a8\u5728\u79c1\u6709\u670d\u52a1\u5668\u4e0a\u5b89\u88c5Starwhale Server\u5e76\u8fd0\u884c\u4e00\u4e2aMNIST\u8bc4\u4f30\u3002\u5728\u672c\u6307\u5357\u7ed3\u675f\u65f6\uff0c\u60a8\u5c06\u62e5\u6709\u4e00\u4e2aStarwhale Server\u5b9e\u4f8b\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u7ba1\u7406\u60a8\u7684\u6570\u636e\u96c6\u548c\u6a21\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"cloud"},"Starwhale Cloud\u5165\u95e8\u6307\u5357")," - \u672c\u6307\u5357\u53ef\u5e2e\u52a9\u60a8\u5728Starwhale Cloud\u4e0a\u521b\u5efa\u5e10\u6237\u5e76\u8fd0\u884cMNIST\u8bc4\u4f30\u3002\u8fd9\u662f\u4f53\u9a8c\u6240\u6709Starwhale\u529f\u80fd\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u3002")))}u.isMDXComponent=!0}}]);