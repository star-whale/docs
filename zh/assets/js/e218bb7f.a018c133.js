"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[49373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,w=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(w,l(l({ref:t},p),{},{components:n})):r.createElement(w,l({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(83117),i=(n(67294),n(3905));const a={title:"Starwhale Client (swcli) \u7528\u6237\u6307\u5357"},l=void 0,o={unversionedId:"swcli/index",id:"version-0.6.6/swcli/index",title:"Starwhale Client (swcli) \u7528\u6237\u6307\u5357",description:"swcli \u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u53ef\u8ba9\u60a8\u4e0e Starwhale \u5b9e\u4f8b\u8fdb\u884c\u4ea4\u4e92\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 swcli \u5b8c\u6210 Starwhale \u4e2d\u51e0\u4e4e\u6240\u6709\u7684\u4efb\u52a1\u3002swcli \u662f\u7528\u7eaf Python3 \u7f16\u5199\u7684\uff08\u9700\u8981 Python 3.7 ~ 3.11\uff09\uff0c\u56e0\u6b64\u53ef\u4ee5\u901a\u8fc7 pip \u547d\u4ee4\u8f7b\u677e\u5b89\u88c5\u3002\u76ee\u524d\uff0cswcli \u4ec5\u652f\u6301 Linux \u548c macOS\uff0cWindows\u7248\u672c\u5373\u5c06\u63a8\u51fa\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.6/swcli/index.md",sourceDirName:"swcli",slug:"/swcli/",permalink:"/zh/0.6.6/swcli/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.6/swcli/index.md",tags:[],version:"0.6.6",frontMatter:{title:"Starwhale Client (swcli) \u7528\u6237\u6307\u5357"},sidebar:"mainSidebar",previous:{title:"Starwhale\u4e2d\u7684\u8d44\u6e90\u7248\u672c\u63a7\u5236",permalink:"/zh/0.6.6/concepts/versioning"},next:{title:"\u5b89\u88c5\u6307\u5357",permalink:"/zh/0.6.6/swcli/installation"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"swcli")," \u662f\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u53ef\u8ba9\u60a8\u4e0e Starwhale \u5b9e\u4f8b\u8fdb\u884c\u4ea4\u4e92\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"swcli")," \u5b8c\u6210 Starwhale \u4e2d\u51e0\u4e4e\u6240\u6709\u7684\u4efb\u52a1\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"swcli")," \u662f\u7528\u7eaf Python3 \u7f16\u5199\u7684\uff08\u9700\u8981 Python 3.7 ~ 3.11\uff09\uff0c\u56e0\u6b64\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"pip")," \u547d\u4ee4\u8f7b\u677e\u5b89\u88c5\u3002\u76ee\u524d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"swcli")," \u4ec5\u652f\u6301 Linux \u548c macOS\uff0cWindows\u7248\u672c\u5373\u5c06\u63a8\u51fa\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8981\u5b89\u88c5/\u66f4\u65b0 ",(0,i.kt)("inlineCode",{parentName:"li"},"swcli"),"\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"li",href:"./installation/"},(0,i.kt)("inlineCode",{parentName:"a"},"swcli")," \u5b89\u88c5\u6307\u5357"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6709\u5173\u8be6\u7ec6\u7684\u547d\u4ee4\u5217\u8868\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"li",href:"../reference/swcli/"},(0,i.kt)("inlineCode",{parentName:"a"},"swcli")," \u53c2\u8003\u6307\u5357"),"\u3002")))}u.isMDXComponent=!0}}]);