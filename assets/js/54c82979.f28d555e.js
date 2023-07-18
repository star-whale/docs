"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[6329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(3117),a=(n(7294),n(3905));const i={title:"Getting started"},o=void 0,l={unversionedId:"getting-started/index",id:"getting-started/index",title:"Getting started",description:"First, you need to install the Starwhale Client (SWCLI), which can be done by running the following command",source:"@site/docs/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/next/getting-started/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/getting-started/index.md",tags:[],version:"current",frontMatter:{title:"Getting started"},sidebar:"mainSidebar",previous:{title:"What is Starwhale",permalink:"/next/"},next:{title:"Getting started with Starwhale Standalone",permalink:"/next/getting-started/standalone"}},s={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"First, you need to install the ",(0,a.kt)("a",{parentName:"p",href:"../swcli"},"Starwhale Client (SWCLI)"),", which can be done by running the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install starwhale\n")),(0,a.kt)("p",null,"For more information, see the ",(0,a.kt)("a",{parentName:"p",href:"../swcli/installation"},"SWCLI installation guide")),(0,a.kt)("p",null,"Depending on your instance type, there are three getting-started guides available for you:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"standalone"},"Getting started with Starwhale Standalone")," - This guide helps you run an MNIST evaluation on your desktop PC/laptop. It is the fastest and simplest way to get started with Starwhale."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"server"},"Getting started with Starwhale Server")," - This guide helps you install Starwhale Server in your data center and run an MNIST evaluation. At the end of the tutorial, you will have a Starwhale Server instance where you can run model evaluations on and manage your datasets and models."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"cloud"},"Getting started with Starwhale Cloud")," - This guide helps you create an account on Starwhale Cloud and run an MNIST evaluation. It is the easiest way to experience all Starwhale features.")))}p.isMDXComponent=!0}}]);