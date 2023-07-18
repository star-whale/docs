"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9183],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>v});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),v=a,f=d["".concat(s,".").concat(v)]||d[v]||p[v]||i;return t?n.createElement(f,o(o({ref:r},u),{},{components:t})):n.createElement(f,o({ref:r},u))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8236:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(3117),a=(t(7294),t(3905));const i={title:"Starwhale Server Installation Guide"},o=void 0,l={unversionedId:"instances/server/installation/index",id:"version-0.4.6/instances/server/installation/index",title:"Starwhale Server Installation Guide",description:"Starwhale Server is delivered as a Docker image, which can be run with Docker directly or deployed to a Kubernetes cluster.",source:"@site/versioned_docs/version-0.4.6/instances/server/installation/index.md",sourceDirName:"instances/server/installation",slug:"/instances/server/installation/",permalink:"/docs/0.4.6/instances/server/installation/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.6/instances/server/installation/index.md",tags:[],version:"0.4.6",frontMatter:{title:"Starwhale Server Installation Guide"},sidebar:"mainSidebar",previous:{title:"Starwhale Server User Guide",permalink:"/docs/0.4.6/instances/server/"},next:{title:"Install Starwhale Server with Docker",permalink:"/docs/0.4.6/instances/server/installation/docker"}},s={},c=[],u={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Starwhale Server is delivered as a Docker image, which can be run with Docker directly or deployed to a Kubernetes cluster."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To install Starwhale Server with Docker, see ",(0,a.kt)("a",{parentName:"li",href:"docker"},"Install Starwhale Server with Docker")),(0,a.kt)("li",{parentName:"ul"},"To deploy Starwhale Server to a Kubernetes cluster, see ",(0,a.kt)("a",{parentName:"li",href:"helm"},"Install Starwhale Server with Helm"))))}p.isMDXComponent=!0}}]);