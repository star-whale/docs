"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[2411],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(3117),a=(r(7294),r(3905));const i={title:"\u5173\u4e8e.swignore\u6587\u4ef6"},o=void 0,l={unversionedId:"swcli/swignore",id:"swcli/swignore",title:"\u5173\u4e8e.swignore\u6587\u4ef6",description:".swignore \u6587\u4ef6\u7528\u4e8e\u5728 Starwhale \u6570\u636e\u96c6\u548c\u6a21\u578b\u7684\u6784\u5efa\u8fc7\u7a0b\u4e2d\u5ffd\u7565\u4e00\u4e9b\u6587\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/swcli/swignore.md",sourceDirName:"swcli",slug:"/swcli/swignore",permalink:"/zh/next/swcli/swignore",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/swcli/swignore.md",tags:[],version:"current",frontMatter:{title:"\u5173\u4e8e.swignore\u6587\u4ef6"},sidebar:"mainSidebar",previous:{title:"Starwhale\u8d44\u6e90URI",permalink:"/zh/next/swcli/uri"},next:{title:"Starwhale\u6a21\u578b\u7528\u6237\u6307\u5357",permalink:"/zh/next/userguide/model"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".swignore")," \u6587\u4ef6\u7528\u4e8e\u5728 Starwhale \u6570\u636e\u96c6\u548c\u6a21\u578b\u7684\u6784\u5efa\u8fc7\u7a0b\u4e2d\u5ffd\u7565\u4e00\u4e9b\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cSWCLI\u5c06\u904d\u5386\u76ee\u5f55\u6811\u5e76\u5305\u542b\u6240\u6709.py/.sh/.yaml\u6587\u4ef6\u3002\u5bf9\u4e8e\u6a21\u578b\uff0cSWCLI\u8fd8\u5c06\u5305\u62ec\u5728model.yaml\u4e2d\u6307\u5b9a\u7684\u6a21\u578b\u3002\u5982\u679c\u8981\u6392\u9664\u67d0\u4e9b\u6587\u4ef6\uff0c\u4f8b\u5982 .git \u4e0b\u7684\u6587\u4ef6\uff0c\u5219\u9700\u8981\u5c06\u5b83\u4eec\u7684\u6a21\u5f0f\u653e\u5728.swignore\u4e2d\u3002"),(0,a.kt)("h1",{id:"\u6587\u4ef6\u683c\u5f0f"},"\u6587\u4ef6\u683c\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"swignore\u6587\u4ef6\u4e2d\u7684\u6bcf\u4e00\u884c\u6307\u5b9a\u4e00\u4e2a\u5339\u914d\u6587\u4ef6\u548c\u76ee\u5f55\u7684\u6a21\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7a7a\u884c\u4e0d\u5339\u914d\u4efb\u4f55\u6587\u4ef6\uff0c\u56e0\u6b64\u5b83\u53ef\u4ee5\u4f5c\u4e3a\u53ef\u8bfb\u6027\u7684\u5206\u9694\u7b26\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u661f\u53f7",(0,a.kt)("inlineCode",{parentName:"li"},"*"),"\u5339\u914d\u9664\u659c\u6760\u4ee5\u5916\u7684\u4efb\u4f55\u5185\u5bb9\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4ee5",(0,a.kt)("inlineCode",{parentName:"li"},"#"),"\u5f00\u5934\u7684\u884c\u4f5c\u4e3a\u6ce8\u91ca\u3002")),(0,a.kt)("h1",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,a.kt)("p",null,"\u8fd9\u662f",(0,a.kt)("a",{parentName:"p",href:"/zh/next/examples/mnist"},"MNIST"),"\u793a\u4f8b\u4e2d\u4f7f\u7528\u7684.swignore\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"venv\n.git\n.history\n.vscode\n.venv\n")))}u.isMDXComponent=!0}}]);