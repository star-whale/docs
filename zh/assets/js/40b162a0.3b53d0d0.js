"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[5715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const o={title:"Starwhale Client\uff08SWCLI\uff09\u7528\u6237\u6307\u5357"},i=void 0,l={unversionedId:"swcli/index",id:"swcli/index",title:"Starwhale Client\uff08SWCLI\uff09\u7528\u6237\u6307\u5357",description:"SWCLI\u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u53ef\u8ba9\u60a8\u4e0eStarwhale\u5b9e\u4f8b\u8fdb\u884c\u4ea4\u4e92\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528SWCLI\u5b8c\u6210Starwhale\u4e2d\u51e0\u4e4e\u6240\u6709\u7684\u4efb\u52a1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/swcli/index.md",sourceDirName:"swcli",slug:"/swcli/",permalink:"/zh/next/swcli/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/swcli/index.md",tags:[],version:"current",frontMatter:{title:"Starwhale Client\uff08SWCLI\uff09\u7528\u6237\u6307\u5357"},sidebar:"mainSidebar",previous:{title:"\u6838\u5fc3\u6982\u5ff5",permalink:"/zh/next/instances/cloud/concepts"},next:{title:"SWCLI\u5b89\u88c5\u6307\u5357",permalink:"/zh/next/swcli/installation"}},c={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SWCLI\u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u53ef\u8ba9\u60a8\u4e0eStarwhale\u5b9e\u4f8b\u8fdb\u884c\u4ea4\u4e92\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528SWCLI\u5b8c\u6210Starwhale\u4e2d\u51e0\u4e4e\u6240\u6709\u7684\u4efb\u52a1\u3002"),(0,a.kt)("p",null,"SWCLI\u662f\u7528\u7eafpython3\u7f16\u5199\u7684\uff08\u9700\u8981 Python 3.7+\uff09\uff0c\u56e0\u6b64\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"pip")," \u547d\u4ee4\u8f7b\u677e\u5b89\u88c5\u3002"),(0,a.kt)("p",null,"\u76ee\u524d\uff0cSWCLI \u4ec5\u652f\u6301 Linux \u548c macOS\u3002 Windows\u7248\u672c\u5373\u5c06\u63a8\u51fa\u3002"),(0,a.kt)("p",null,"\u8981\u5b89\u88c5/\u66f4\u65b0SWCLI\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"installation"},"SWCLI\u5b89\u88c5\u6307\u5357"),"\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u7684\u547d\u4ee4\u5217\u8868\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"../reference/swcli"},"SWCLI\u53c2\u8003\u6307\u5357"),"\u3002"))}u.isMDXComponent=!0}}]);