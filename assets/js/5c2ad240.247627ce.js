"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[5057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(3117),a=(n(7294),n(3905));const o={title:"Starwhale Client (SWCLI) User Guide"},i=void 0,l={unversionedId:"swcli/index",id:"swcli/index",title:"Starwhale Client (SWCLI) User Guide",description:"The Starwhale Client (SWCLI) is a command-line tool that enables you to interact with Starwhale instances. You can use SWCLI to complete almost all tasks in Starwhale.",source:"@site/docs/swcli/index.md",sourceDirName:"swcli",slug:"/swcli/",permalink:"/docs/next/swcli/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/swcli/index.md",tags:[],version:"current",frontMatter:{title:"Starwhale Client (SWCLI) User Guide"},sidebar:"mainSidebar",previous:{title:"Concepts",permalink:"/docs/next/instances/cloud/concepts"},next:{title:"SWCLI Installation Guide",permalink:"/docs/next/swcli/installation"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Starwhale Client (SWCLI) is a command-line tool that enables you to interact with Starwhale instances. You can use SWCLI to complete almost all tasks in Starwhale."),(0,a.kt)("p",null,"SWCLI is written in pure python3 (require Python 3.7+) so that it can be easily installed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"pip")," command."),(0,a.kt)("p",null,"Currently, SWCLI only supports Linux and macOS. Windows is coming soon."),(0,a.kt)("p",null,"To install/update SWCLI, see the ",(0,a.kt)("a",{parentName:"p",href:"installation"},"SWCLI Installation Guide"),"."),(0,a.kt)("p",null,"For a list of commands, see the ",(0,a.kt)("a",{parentName:"p",href:"../reference/swcli"},"SWCLI Reference Guide"),"."))}u.isMDXComponent=!0}}]);