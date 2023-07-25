"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[7659],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||l;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9873:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=t(3117),a=(t(7294),t(3905));const l={title:"Starwhale Server Installation Guide"},i=void 0,o={unversionedId:"server/installation/index",id:"server/installation/index",title:"Starwhale Server Installation Guide",description:"Starwhale Server is delivered as a Docker image, which can be run with Docker directly or deployed to a Kubernetes cluster.",source:"@site/docs/server/installation/index.md",sourceDirName:"server/installation",slug:"/server/installation/",permalink:"/next/server/installation/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/server/installation/index.md",tags:[],version:"current",frontMatter:{title:"Starwhale Server Installation Guide"},sidebar:"mainSidebar",previous:{title:"Starwhale Server User Guide",permalink:"/next/server/"},next:{title:"Install Starwhale Server with Minikube",permalink:"/next/server/installation/minikube"}},c={},s=[],u={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Starwhale Server is delivered as a Docker image, which can be run with Docker directly or deployed to a Kubernetes cluster."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To install Starwhale Server with Docker, see ",(0,a.kt)("a",{parentName:"li",href:"docker"},"Install Starwhale Server with Docker")),(0,a.kt)("li",{parentName:"ul"},"To deploy Starwhale Server to a Kubernetes cluster, see ",(0,a.kt)("a",{parentName:"li",href:"helm-charts"},"Install Starwhale Server with Helm"))))}p.isMDXComponent=!0}}]);