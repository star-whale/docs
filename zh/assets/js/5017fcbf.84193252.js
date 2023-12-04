"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[1096],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,v=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return t?n.createElement(v,l(l({ref:r},u),{},{components:t})):n.createElement(v,l({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3373:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(3117),a=(t(7294),t(3905));const i={title:"Starwhale Server \u5b89\u88c5\u6307\u5357"},l=void 0,o={unversionedId:"server/installation/index",id:"server/installation/index",title:"Starwhale Server \u5b89\u88c5\u6307\u5357",description:"Starwhale Server \u4ee5 Docker \u955c\u50cf\u7684\u5f62\u5f0f\u53d1\u5e03\u3002\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Docker \u8fd0\u884c\uff0c\u4e5f\u53ef\u4ee5\u90e8\u7f72\u5230 Kubernetes \u96c6\u7fa4\u4e0a\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/server/installation/index.md",sourceDirName:"server/installation",slug:"/server/installation/",permalink:"/zh/next/server/installation/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/server/installation/index.md",tags:[],version:"current",frontMatter:{title:"Starwhale Server \u5b89\u88c5\u6307\u5357"},sidebar:"mainSidebar",previous:{title:"Starwhale Server \u7528\u6237\u6307\u5357",permalink:"/zh/next/server/"},next:{title:"\u4f7f\u7528 swcli server start \u547d\u4ee4\u4e00\u952e\u542f\u52a8 Starwhale Server",permalink:"/zh/next/server/installation/server-start"}},s={},c=[],u={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Starwhale Server \u4ee5 Docker \u955c\u50cf\u7684\u5f62\u5f0f\u53d1\u5e03\u3002\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 Docker \u8fd0\u884c\uff0c\u4e5f\u53ef\u4ee5\u90e8\u7f72\u5230 Kubernetes \u96c6\u7fa4\u4e0a\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u8ba1\u5212\u5728\u5355\u673a\u73af\u5883\u5feb\u901f\u4f53\u9a8c Starwhale Server \u529f\u80fd\uff0c \u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"swcli server start")," \u547d\u4ee4",(0,a.kt)("a",{parentName:"li",href:"server-start"},"\u4e00\u952e\u542f\u52a8 Starwhale Server"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u8ba1\u5212\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 Starwhale Server\uff0c\u53ef\u4ee5\u4f7f\u7528 Kubernetes \u5b9e\u73b0\u751f\u4ea7\u7ea7\u522b\u7684\u90e8\u7f72\uff0c\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"li",href:"k8s-cluster"},"\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u5b89\u88c5 Starwhale"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u8ba1\u5212\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube")," \u6765\u90e8\u7f72 Starwhale Server\uff0c \u53c2\u89c1 ",(0,a.kt)("a",{parentName:"li",href:"minikube"},"\u5728 Minikube \u4e2d\u5b89\u88c5 Starwhale"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u8ba1\u5212\u4f7f\u7528 Docker \u5355\u72ec\u6258\u7ba1 Starwhale Server\uff0c\u5e76\u5c06\u4efb\u52a1\u63d0\u4ea4\u5230 Kubernetes \u96c6\u7fa4\u4e2d\uff0c\u53c2\u89c1",(0,a.kt)("a",{parentName:"li",href:"docker"},"\u4f7f\u7528 Docker \u5b89\u88c5 Starwhale Server"),"\u3002")))}p.isMDXComponent=!0}}]);