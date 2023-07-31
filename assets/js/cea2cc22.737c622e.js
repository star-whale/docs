"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const i={title:"Getting started"},o=void 0,l={unversionedId:"getting-started/index",id:"version-0.5.8/getting-started/index",title:"Getting started",description:"First, you need to install the Starwhale Client (swcli), which can be done by running the following command:",source:"@site/versioned_docs/version-0.5.8/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/getting-started/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.8/getting-started/index.md",tags:[],version:"0.5.8",frontMatter:{title:"Getting started"},sidebar:"mainSidebar",previous:{title:"What is Starwhale",permalink:"/"},next:{title:"Getting started with Starwhale Standalone",permalink:"/getting-started/standalone"}},s={},c=[],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"First, you need to install the ",(0,a.kt)("a",{parentName:"p",href:"../swcli"},"Starwhale Client (swcli)"),", which can be done by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install starwhale\n")),(0,a.kt)("p",null,"For more information, see the ",(0,a.kt)("a",{parentName:"p",href:"../swcli/installation"},"swcli installation guide"),"."),(0,a.kt)("p",null,"Depending on your instance type, there are three getting-started guides available for you:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"standalone"},"Getting started with Starwhale Standalone")," - This guide helps you run an MNIST evaluation on your desktop PC/laptop. It is the fastest and simplest way to get started with Starwhale."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"server"},"Getting started with Starwhale Server")," - This guide helps you install Starwhale Server in your private data center and run an MNIST evaluation. At the end of the tutorial, you will have a Starwhale Server instance where you can run model evaluations on and manage your datasets and models."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"cloud"},"Getting started with Starwhale Cloud")," - This guide helps you create an account on Starwhale Cloud and run an MNIST evaluation. It is the easiest way to experience all Starwhale features.")))}d.isMDXComponent=!0}}]);