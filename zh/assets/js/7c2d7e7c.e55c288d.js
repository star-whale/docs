"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[8674],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},46893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const l={title:"Starwhale \u8fd0\u884c\u65f6"},i=void 0,o={unversionedId:"runtime/index",id:"version-0.5.9/runtime/index",title:"Starwhale \u8fd0\u884c\u65f6",description:"\u6982\u89c8",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.9/runtime/index.md",sourceDirName:"runtime",slug:"/runtime/",permalink:"/zh/0.5.9/runtime/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.9/runtime/index.md",tags:[],version:"0.5.9",frontMatter:{title:"Starwhale \u8fd0\u884c\u65f6"},sidebar:"mainSidebar",previous:{title:"model.yaml \u4f7f\u7528\u6307\u5357",permalink:"/zh/0.5.9/model/yaml"},next:{title:"runtime.yaml \u4f7f\u7528\u6307\u5357",permalink:"/zh/0.5.9/runtime/yaml"}},u={},p=[{value:"\u6982\u89c8",id:"\u6982\u89c8",level:2},{value:"\u57fa\u7840\u955c\u50cf",id:"\u57fa\u7840\u955c\u50cf",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),(0,a.kt)("p",null,"Starwhale \u8fd0\u884c\u65f6\u80fd\u591f\u9488\u5bf9\u8fd0\u884cPython\u7a0b\u5e8f\uff0c\u63d0\u4f9b\u4e00\u79cd\u53ef\u590d\u73b0\u3001\u53ef\u5206\u4eab\u7684\u8fd0\u884c\u73af\u5883\u3002\u4f7f\u7528 Starwhale \u8fd0\u884c\u65f6\uff0c\u53ef\u4ee5\u975e\u5e38\u5bb9\u6613\u7684\u4e0e\u4ed6\u4eba\u5206\u4eab\uff0c\u5e76\u4e14\u80fd\u5728 Starwhale Server \u548c Starwhale Cloud \u5b9e\u4f8b\u4e0a\u4f7f\u7528 Starwhale \u8fd0\u884c\u65f6\u3002"),(0,a.kt)("p",null,"Starwhale \u8fd0\u884c\u65f6\u4f7f\u7528 venv, conda \u548c docker \u7b49\u57fa\u7840\u6280\u672f\uff0c\u5982\u679c\u60a8\u5f53\u524d\u6b63\u5728\u4f7f\u7528\u8fd9\u4e9b\u6280\u672f\uff0c\u53ef\u4ee5\u975e\u5e38\u5bb9\u6613\u7684\u5c06\u8fd9\u4e2a\u73af\u5883\u8f6c\u5316\u4e3a Starwhale \u8fd0\u884c\u65f6\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u672c\u5730\u73af\u5883\uff0cStarwhale \u8fd0\u884c\u65f6\u652f\u6301\u975e\u5e38\u5bb9\u6613\u7684\u591a\u79cd\u73af\u5883\u7ba1\u7406\u548c\u5207\u6362\u3002Starwhale \u8fd0\u884c\u65f6\u5305\u542b\u57fa\u7840\u955c\u50cf\u548c\u73af\u5883\u4f9d\u8d56\u4e24\u4e2a\u90e8\u5206\u3002"),(0,a.kt)("h2",{id:"\u57fa\u7840\u955c\u50cf"},"\u57fa\u7840\u955c\u50cf"),(0,a.kt)("p",null,"Starwhale \u57fa\u7840\u955c\u50cf\u4e2d\u4f1a\u5b89\u88c5 Python, CUDA, cuDNN \u548c\u5176\u4ed6\u4e00\u4e9b\u673a\u5668\u5b66\u4e60\u5f00\u53d1\u4e2d\u5fc5\u8981\u7684\u57fa\u7840\u5e93\u3002Starwhale \u8fd0\u884c\u65f6\u63d0\u4f9b\u591a\u79cd\u57fa\u7840\u955c\u50cf\u4f9b\u9009\u62e9\uff0c\u5217\u8868\u5982\u4e0b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f53\u7cfb\u7ed3\u6784:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"X86 (amd64)"),(0,a.kt)("li",{parentName:"ul"},"Arm (aarch64)"))),(0,a.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ubuntu 20.04 LTS (ubuntu:20.04)"))),(0,a.kt)("li",{parentName:"ul"},"Python:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"3.7"),(0,a.kt)("li",{parentName:"ul"},"3.8"),(0,a.kt)("li",{parentName:"ul"},"3.9"),(0,a.kt)("li",{parentName:"ul"},"3.10"),(0,a.kt)("li",{parentName:"ul"},"3.11"))),(0,a.kt)("li",{parentName:"ul"},"CUDA:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CUDA 11.3 + cuDNN 8.4"),(0,a.kt)("li",{parentName:"ul"},"CUDA 11.4 + cuDNN 8.4"),(0,a.kt)("li",{parentName:"ul"},"CUDA 11.5 + cuDNN 8.4"),(0,a.kt)("li",{parentName:"ul"},"CUDA 11.6 + cuDNN 8.4"),(0,a.kt)("li",{parentName:"ul"},"CUDA 11.7")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"runtime.yaml")," \u901a\u8fc7\u76f8\u5173\u8bbe\u7f6e\u6765\u51b3\u5b9a\u4f7f\u7528\u4f55\u79cd\u57fa\u7840\u955c\u50cf\u3002"))}m.isMDXComponent=!0}}]);