"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[67366],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),m=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(r),d=a,h=p["".concat(u,".").concat(d)]||p[d]||c[d]||i;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},15197:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(83117),a=(r(67294),r(3905));const i={title:"Starwhale Runtime"},o=void 0,l={unversionedId:"runtime/index",id:"version-0.6.5/runtime/index",title:"Starwhale Runtime",description:"overview",source:"@site/versioned_docs/version-0.6.5/runtime/index.md",sourceDirName:"runtime",slug:"/runtime/",permalink:"/0.6.5/runtime/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.5/runtime/index.md",tags:[],version:"0.6.5",frontMatter:{title:"Starwhale Runtime"},sidebar:"mainSidebar",previous:{title:"The model.yaml Specification",permalink:"/0.6.5/model/yaml"},next:{title:"The runtime.yaml Specification",permalink:"/0.6.5/runtime/yaml"}},u={},m=[{value:"Overview",id:"overview",level:2},{value:"The base image",id:"the-base-image",level:2}],s={toc:m};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/runtime-overview.svg",alt:"overview"})),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Starwhale Runtime aims to provide a reproducible and sharable running environment for python programs. You can easily share your working environment with your teammates or outsiders, and vice versa. Furthermore, you can run your programs on Starwhale Server or Starwhale Cloud without bothering with the dependencies."),(0,a.kt)("p",null,"Starwhale works well with virtualenv, conda, and docker. If you are using one of them, it is straightforward to create a Starwhale Runtime based on your current environment."),(0,a.kt)("p",null,"Multiple Starwhale Runtimes on your local machine can be switched freely by one command. You can work on different projects without messing up the environment.Starwhale Runtime consists of two parts: the base image and the dependencies."),(0,a.kt)("h2",{id:"the-base-image"},"The base image"),(0,a.kt)("p",null,"The base is a docker image with Python, CUDA, and cuDNN installed. Starwhale provides various base images for you to choose from; see the following list:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Computer system architecture:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"X86 (amd64)"),(0,a.kt)("li",{parentName:"ul"},"Arm (aarch64)"))),(0,a.kt)("li",{parentName:"ul"},"Operating system:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ubuntu 20.04 LTS (ubuntu:20.04)"))),(0,a.kt)("li",{parentName:"ul"},"Python:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"3.7"),(0,a.kt)("li",{parentName:"ul"},"3.8"),(0,a.kt)("li",{parentName:"ul"},"3.9"),(0,a.kt)("li",{parentName:"ul"},"3.10"),(0,a.kt)("li",{parentName:"ul"},"3.11"))),(0,a.kt)("li",{parentName:"ul"},"CUDA:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CUDA 11.3 + cuDNN 8.4"),(0,a.kt)("li",{parentName:"ul"},"CUDA 11.4 + cuDNN 8.4"),(0,a.kt)("li",{parentName:"ul"},"CUDA 11.5 + cuDNN 8.4"),(0,a.kt)("li",{parentName:"ul"},"CUDA 11.6 + cuDNN 8.4"),(0,a.kt)("li",{parentName:"ul"},"CUDA 11.7")))))}c.isMDXComponent=!0}}]);