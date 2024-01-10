"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[20082],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},58355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(83117),o=(r(67294),r(3905));const a={title:"\u4f7f\u7528Docker Compose\u5b89\u88c5Starwhale"},l=void 0,i={unversionedId:"server/installation/docker-compose",id:"version-0.6.9/server/installation/docker-compose",title:"\u4f7f\u7528Docker Compose\u5b89\u88c5Starwhale",description:"\u5148\u51b3\u6761\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.9/server/installation/docker-compose.md",sourceDirName:"server/installation",slug:"/server/installation/docker-compose",permalink:"/zh/server/installation/docker-compose",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.9/server/installation/docker-compose.md",tags:[],version:"0.6.9",frontMatter:{title:"\u4f7f\u7528Docker Compose\u5b89\u88c5Starwhale"},sidebar:"mainSidebar",previous:{title:"Starwhale \u73af\u5883\u53d8\u91cf\u6587\u4ef6\u793a\u4f8b",permalink:"/zh/server/installation/starwhale_env"},next:{title:"Starwhale Server \u7cfb\u7edf\u8bbe\u7f6e",permalink:"/zh/server/guides/server_admin"}},c={},s=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5b89\u88c5\u65b9\u6cd5",id:"\u5b89\u88c5\u65b9\u6cd5",level:2},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",level:3}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker >= 19.03"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/compose-plugin/"},"Docker Compose Plugin")," >= 2.3"),(0,o.kt)("li",{parentName:"ul"},"x86-64 System(Linux)")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u65b9\u6cd5"},"\u5b89\u88c5\u65b9\u6cd5"),(0,o.kt)("h3",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/star-whale/starwhale/main/docker/compose/compose.yaml\nGLOBAL_IP=${your_accessible_ip_for_server} ; docker compose up\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"GLOBAL_IP")," \u9700\u8981\u662f\u53ef\u4ee5\u88ab\u6240\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"swcli")," \u8bbf\u95ee\u5230\u7684\uff0c\u5305\u62ec\u7528\u6237\u5b9e\u9645\u4f7f\u7528\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"swcli"),"\u548ccontainer\u5185\u90e8\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"swcli"),". \u5982\u679c\u4e0d\u80fd\u8bbf\u95ee\uff0c\u8bf7\u786e\u8ba4\u60a8\u7684\u9632\u706b\u5899\u8bbe\u7f6e."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"compose.yaml")," \u5305\u542b\u4e86Mysql\u6570\u636e\u5e93\uff0cMinIO\u5b58\u50a8\u548cController\u670d\u52a1. \u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"compose.override.yaml"),",  ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/reference/#specifying-multiple-compose-files"},"\u53ef\u4ee5\u8986\u76d6")," ",(0,o.kt)("inlineCode",{parentName:"p"},"compose.yaml")," \u4e2d\u7684\u914d\u7f6e.\n\u5982\u4f55\u914d\u7f6e\u53ef\u4ee5\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"starwhale_env"},"\u6b64\u5904")))}m.isMDXComponent=!0}}]);