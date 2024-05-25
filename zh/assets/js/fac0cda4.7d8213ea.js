"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[54310],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>N});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),u=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},o=function(t){var e=u(t.components);return a.createElement(m.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),k=u(n),N=r,g=k["".concat(m,".").concat(N)]||k[N]||d[N]||l;return n?a.createElement(g,p(p({ref:e},o),{},{components:n})):a.createElement(g,p({ref:e},o))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var u=2;u<l;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},58142:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(83117),r=(n(67294),n(3905));const l={title:"Starwhale\u4e2d\u7684\u89d2\u8272\u548c\u6743\u9650"},p=void 0,i={unversionedId:"concepts/roles-permissions",id:"version-0.6.11/concepts/roles-permissions",title:"Starwhale\u4e2d\u7684\u89d2\u8272\u548c\u6743\u9650",description:"\u89d2\u8272\u7528\u4e8e\u4e3a\u7528\u6237\u5206\u914d\u6743\u9650\u3002\u53ea\u6709Starwhale Server/Cloud\u6709\u89d2\u8272\u548c\u6743\u9650\uff0cStarwhale Standalone\u6ca1\u6709\u76f8\u5e94\u6982\u5ff5\u3002\u7cfb\u7edf\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u7ba1\u7406\u5458\u89d2\u8272\u5e76\u5206\u914d\u7ed9\u9ed8\u8ba4\u7528\u6237\u201cstarwhale\u201d\u3002\u4e00\u4e9b\u654f\u611f\u64cd\u4f5c\u53ea\u80fd\u7531\u5177\u6709\u7ba1\u7406\u5458\u89d2\u8272\u7684\u7528\u6237\u6267\u884c\uff0c\u4f8b\u5982\u5728Starwhale Server\u4e2d\u521b\u5efa\u65b0\u7684\u8d26\u53f7\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.11/concepts/roles-permissions.md",sourceDirName:"concepts",slug:"/concepts/roles-permissions",permalink:"/zh/0.6.11/concepts/roles-permissions",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.11/concepts/roles-permissions.md",tags:[],version:"0.6.11",frontMatter:{title:"Starwhale\u4e2d\u7684\u89d2\u8272\u548c\u6743\u9650"},sidebar:"mainSidebar",previous:{title:"Starwhale\u4e2d\u7684\u9879\u76ee",permalink:"/zh/0.6.11/concepts/project"},next:{title:"Starwhale\u7684\u8d44\u6e90\u7248\u672c\u63a7\u5236",permalink:"/zh/0.6.11/concepts/versioning"}},m={},u=[],o={toc:u};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u89d2\u8272\u7528\u4e8e\u4e3a\u7528\u6237\u5206\u914d\u6743\u9650\u3002\u53ea\u6709Starwhale Server/Cloud\u6709\u89d2\u8272\u548c\u6743\u9650\uff0cStarwhale Standalone\u6ca1\u6709\u76f8\u5e94\u6982\u5ff5\u3002\u7cfb\u7edf\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a\u7ba1\u7406\u5458\u89d2\u8272\u5e76\u5206\u914d\u7ed9\u9ed8\u8ba4\u7528\u6237\u201cstarwhale\u201d\u3002\u4e00\u4e9b\u654f\u611f\u64cd\u4f5c\u53ea\u80fd\u7531\u5177\u6709\u7ba1\u7406\u5458\u89d2\u8272\u7684\u7528\u6237\u6267\u884c\uff0c\u4f8b\u5982\u5728Starwhale Server\u4e2d\u521b\u5efa\u65b0\u7684\u8d26\u53f7\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e2a\u9879\u76ee\u5177\u6709\u4e09\u7c7b\u89d2\u8272\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u5458Admin - \u9879\u76ee\u7ba1\u7406\u5458\u53ef\u4ee5\u8bfb\u5199\u9879\u76ee\u6570\u636e\u5e76\u5c06\u9879\u76ee\u89d2\u8272\u5206\u914d\u7ed9\u7528\u6237\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7ef4\u62a4\u8005Maintainer - \u9879\u76ee\u7ef4\u62a4\u8005\u53ef\u4ee5\u8bfb\u5199\u9879\u76ee\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8bbf\u5ba2Guest - \u9879\u76ee\u8bbf\u5ba2\u53ea\u80fd\u8bfb\u53d6\u9879\u76ee\u6570\u636e\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u52a8\u4f5c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7ba1\u7406\u5458Admin"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7ef4\u62a4\u8005Maintainer"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bbf\u5ba2Guest"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u9879\u76ee\u6210\u5458"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7f16\u8f91\u9879\u76ee"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u9879\u76ee"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u8bc4\u4ef7"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u8bc4\u4ef7"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u8bc4\u4ef7"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u6570\u636e\u96c6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u6570\u636e\u96c6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u6570\u636e\u96c6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u6570\u636e\u96c6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u6a21\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u6a21\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u6a21\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u578b\u53f7"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u8fd0\u884c\u65f6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u8fd0\u884c\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u8fd0\u884c\u65f6"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u8fd0\u884c\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f")))),(0,r.kt)("p",null,"\u521b\u5efa\u9879\u76ee\u7684\u7528\u6237\u6210\u4e3a\u7b2c\u4e00\u4e2a\u9879\u76ee\u7ba1\u7406\u5458\u3002\u4ed6\u53ef\u4ee5\u5728\u8fd9\u4e4b\u540e\u5c06\u89d2\u8272\u5206\u914d\u7ed9\u5176\u4ed6\u7528\u6237\u3002"))}d.isMDXComponent=!0}}]);