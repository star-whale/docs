"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[50097],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),v=n,m=u["".concat(i,".").concat(v)]||u[v]||p[v]||l;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},63406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=r(83117),n=(r(67294),r(3905));const l={title:"Starwhale Server\u5165\u95e8\u6307\u5357"},o=void 0,s={unversionedId:"getting-started/server",id:"version-0.5.0/getting-started/server",title:"Starwhale Server\u5165\u95e8\u6307\u5357",description:"\u5b89\u88c5Starwhale Server",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.0/getting-started/server.md",sourceDirName:"getting-started",slug:"/getting-started/server",permalink:"/zh/docs/getting-started/server",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.0/getting-started/server.md",tags:[],version:"0.5.0",frontMatter:{title:"Starwhale Server\u5165\u95e8\u6307\u5357"},sidebar:"mainSidebar",previous:{title:"Starwhale Standalone\u5165\u95e8\u6307\u5357",permalink:"/zh/docs/getting-started/standalone"},next:{title:"Starwhale Cloud\u5165\u95e8\u6307\u5357",permalink:"/zh/docs/getting-started/cloud"}},i={},c=[{value:"\u5b89\u88c5Starwhale Server",id:"\u5b89\u88c5starwhale-server",level:2},{value:"\u521b\u5efa\u60a8\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee",id:"\u521b\u5efa\u60a8\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee",level:2},{value:"\u767b\u5f55\u670d\u52a1\u5668",id:"\u767b\u5f55\u670d\u52a1\u5668",level:3},{value:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",level:3},{value:"\u5728\u672c\u5730\u673a\u5668\u4e0a\u6784\u5efa\u6570\u636e\u96c6\u3001\u6a21\u578b\u548c\u8fd0\u884c\u65f6",id:"\u5728\u672c\u5730\u673a\u5668\u4e0a\u6784\u5efa\u6570\u636e\u96c6\u6a21\u578b\u548c\u8fd0\u884c\u65f6",level:2},{value:"\u5c06\u6570\u636e\u96c6\u3001\u6a21\u578b\u548c\u8fd0\u884c\u65f6\u590d\u5236\u5230Starwhale Server",id:"\u5c06\u6570\u636e\u96c6\u6a21\u578b\u548c\u8fd0\u884c\u65f6\u590d\u5236\u5230starwhale-server",level:2},{value:"\u4f7f\u7528Web UI\u8fd0\u884c\u6a21\u578b\u8bc4\u4f30",id:"\u4f7f\u7528web-ui\u8fd0\u884c\u6a21\u578b\u8bc4\u4f30",level:2}],d={toc:c};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u5b89\u88c5starwhale-server"},"\u5b89\u88c5Starwhale Server"),(0,n.kt)("p",null,"\u5b89\u88c5Starwhale Server\uff0c\u53c2\u89c1","[\u5b89\u88c5\u6307\u5357]"),(0,n.kt)("h2",{id:"\u521b\u5efa\u60a8\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee"},"\u521b\u5efa\u60a8\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee"),(0,n.kt)("h3",{id:"\u767b\u5f55\u670d\u52a1\u5668"},"\u767b\u5f55\u670d\u52a1\u5668"),(0,n.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\u5e76\u5728\u5730\u5740\u680f\u4e2d\u8f93\u5165\u670d\u52a1\u5668\u7684 URL\u3002 \u4f7f\u7528\u9ed8\u8ba4\u7528\u6237\u540d\uff08starwhale\uff09\u548c\u5bc6\u7801\uff08abcd1234\uff09\u767b\u5f55\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"console-artifacts.gif",src:r(75724).Z,width:"2060",height:"1112"})),(0,n.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee"),(0,n.kt)("h2",{id:"\u5728\u672c\u5730\u673a\u5668\u4e0a\u6784\u5efa\u6570\u636e\u96c6\u6a21\u578b\u548c\u8fd0\u884c\u65f6"},"\u5728\u672c\u5730\u673a\u5668\u4e0a\u6784\u5efa\u6570\u636e\u96c6\u3001\u6a21\u578b\u548c\u8fd0\u884c\u65f6"),(0,n.kt)("p",null,"\u6309\u7167",(0,n.kt)("a",{parentName:"p",href:"standalone"},"Starwhale Standalone\u5165\u95e8\u6307\u5357"),"\u4e2d\u7684\u6b65\u9aa41\u5230\u6b65\u9aa44\u5728\u672c\u5730\u673a\u5668\u4e0a\u521b\u5efa\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u540d\u4e3amnist\u7684Starwhale\u6a21\u578b"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u540d\u4e3amnist\u7684Starwhale\u6570\u636e\u96c6"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u540d\u4e3apytorch\u7684Starwhale\u8fd0\u884c\u65f6")),(0,n.kt)("h2",{id:"\u5c06\u6570\u636e\u96c6\u6a21\u578b\u548c\u8fd0\u884c\u65f6\u590d\u5236\u5230starwhale-server"},"\u5c06\u6570\u636e\u96c6\u3001\u6a21\u578b\u548c\u8fd0\u884c\u65f6\u590d\u5236\u5230Starwhale Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"swcli instance login --username <your username> --password <your password> --alias server <Your Server URL>\nswcli model copy mnist/version/latest server/project/demo\nswcli dataset copy mnist/version/latest server/project/demo\nswcli runtime copy pytorch/version/latest server/project/demo\n")),(0,n.kt)("h2",{id:"\u4f7f\u7528web-ui\u8fd0\u884c\u6a21\u578b\u8bc4\u4f30"},"\u4f7f\u7528Web UI\u8fd0\u884c\u6a21\u578b\u8bc4\u4f30"),(0,n.kt)("p",null,"\u4f7f\u7528\u6d4f\u89c8\u5668\u6253\u5f00\u201cdemo\u201d\u9879\u76ee\u5e76\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8bc4\u4f30\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"console-create-job.gif",src:r(69264).Z,width:"2116",height:"1147"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u606d\u559c\uff01 \u60a8\u5df2\u5b8c\u6210Starwhale Server\u7684\u5165\u95e8\u6307\u5357\u3002")))}p.isMDXComponent=!0},75724:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/console-artifacts-fd7bf6e54d06dc37d234019e769031e6.gif"},69264:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/console-create-job-b3f6012e26da81d411aa7624990a7087.gif"}}]);