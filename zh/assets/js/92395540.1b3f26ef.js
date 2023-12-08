"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[64612],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62627:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(83117),n=(r(67294),r(3905));const l={title:"Starwhale Cloud\u5165\u95e8\u6307\u5357"},o=void 0,i={unversionedId:"getting-started/cloud",id:"version-0.5.10/getting-started/cloud",title:"Starwhale Cloud\u5165\u95e8\u6307\u5357",description:"Starwhale Cloud\u8fd0\u884c\u5728\u963f\u91cc\u4e91\u4e0a\uff0c\u57df\u540d\u662f  \uff0c\u540e\u7eed\u6211\u4eec\u4f1a\u63a8\u51fa\u90e8\u7f72\u5728AWS\u4e0a\u7684  \u670d\u52a1\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u662f\u4e24\u4e2a\u76f8\u4e92\u72ec\u7acb\u7684\u5b9e\u4f8b\uff0c\u5e10\u6237\u548c\u6570\u636e\u4e0d\u5171\u4eab\u3002\u60a8\u53ef\u4ee5\u9009\u62e9\u4efb\u4f55\u4e00\u4e2a\u5f00\u59cb\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.10/getting-started/cloud.md",sourceDirName:"getting-started",slug:"/getting-started/cloud",permalink:"/zh/0.5.10/getting-started/cloud",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.10/getting-started/cloud.md",tags:[],version:"0.5.10",frontMatter:{title:"Starwhale Cloud\u5165\u95e8\u6307\u5357"},sidebar:"mainSidebar",previous:{title:"Starwhale Server\u5165\u95e8\u6307\u5357",permalink:"/zh/0.5.10/getting-started/server"},next:{title:"Starwhale Runtime\u5165\u95e8\u6307\u5357",permalink:"/zh/0.5.10/getting-started/runtime"}},c={},s=[{value:"\u6ce8\u518cStarwhale Cloud\u5e76\u521b\u5efa\u60a8\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee",id:"\u6ce8\u518cstarwhale-cloud\u5e76\u521b\u5efa\u60a8\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee",level:2},{value:"\u5728\u672c\u5730\u673a\u5668\u4e0a\u6784\u5efa\u6570\u636e\u96c6\u3001\u6a21\u578b\u548c\u8fd0\u884c\u65f6",id:"\u5728\u672c\u5730\u673a\u5668\u4e0a\u6784\u5efa\u6570\u636e\u96c6\u6a21\u578b\u548c\u8fd0\u884c\u65f6",level:2},{value:"\u767b\u5f55\u4e91\u5b9e\u4f8b",id:"\u767b\u5f55\u4e91\u5b9e\u4f8b",level:2},{value:"\u5c06\u6570\u636e\u96c6\u3001\u6a21\u578b\u548c\u8fd0\u884c\u65f6\u590d\u5236\u5230Starwhale Cloud",id:"\u5c06\u6570\u636e\u96c6\u6a21\u578b\u548c\u8fd0\u884c\u65f6\u590d\u5236\u5230starwhale-cloud",level:2},{value:"\u4f7f\u7528 Web UI \u8fd0\u884c\u8bc4\u4f30",id:"\u4f7f\u7528-web-ui-\u8fd0\u884c\u8bc4\u4f30",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Starwhale Cloud\u8fd0\u884c\u5728\u963f\u91cc\u4e91\u4e0a\uff0c\u57df\u540d\u662f ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.starwhale.cn"},"https://cloud.starwhale.cn")," \uff0c\u540e\u7eed\u6211\u4eec\u4f1a\u63a8\u51fa\u90e8\u7f72\u5728AWS\u4e0a\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.starwhale.ai"},"https://cloud.starwhale.ai")," \u670d\u52a1\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u662f\u4e24\u4e2a\u76f8\u4e92\u72ec\u7acb\u7684\u5b9e\u4f8b\uff0c\u5e10\u6237\u548c\u6570\u636e\u4e0d\u5171\u4eab\u3002\u60a8\u53ef\u4ee5\u9009\u62e9\u4efb\u4f55\u4e00\u4e2a\u5f00\u59cb\u3002"),(0,n.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u5148\u5b89\u88c5",(0,n.kt)("a",{parentName:"p",href:"../swcli"},"Starwhale Client\uff08swcli\uff09"),"\u3002"),(0,n.kt)("h2",{id:"\u6ce8\u518cstarwhale-cloud\u5e76\u521b\u5efa\u60a8\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee"},"\u6ce8\u518cStarwhale Cloud\u5e76\u521b\u5efa\u60a8\u7684\u7b2c\u4e00\u4e2a\u9879\u76ee"),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u81ea\u5df1\u7684GitHub\u6216\u5fae\u4fe1\u5e10\u53f7\u767b\u5f55\uff0c\u4e5f\u53ef\u4ee5\u6ce8\u518c\u4e00\u4e2a\u65b0\u7684\u5e10\u53f7\u3002\u5982\u679c\u60a8\u4f7f\u7528 GitHub \u6216 \u5fae\u4fe1\u5e10\u53f7\u767b\u5f55\uff0c\u7cfb\u7edf\u4f1a\u8981\u6c42\u60a8\u63d0\u4f9b\u7528\u6237\u540d\u3002"),(0,n.kt)("p",null,"\u7136\u540e\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\u3002\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u540d\u79f0 ",(0,n.kt)("inlineCode",{parentName:"p"},"demo")," \u4f5c\u4e3a\u9879\u76ee\u540d\u79f0\u3002"),(0,n.kt)("h2",{id:"\u5728\u672c\u5730\u673a\u5668\u4e0a\u6784\u5efa\u6570\u636e\u96c6\u6a21\u578b\u548c\u8fd0\u884c\u65f6"},"\u5728\u672c\u5730\u673a\u5668\u4e0a\u6784\u5efa\u6570\u636e\u96c6\u3001\u6a21\u578b\u548c\u8fd0\u884c\u65f6"),(0,n.kt)("p",null,"\u6309\u7167",(0,n.kt)("a",{parentName:"p",href:"standalone"},"Starwhale Standalone\u5165\u95e8\u6307\u5357"),"\u4e2d\u7684\u6b65\u9aa41\u5230\u6b65\u9aa44\u5728\u672c\u5730\u673a\u5668\u4e0a\u521b\u5efa\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u540d\u4e3amnist\u7684Starwhale\u6a21\u578b"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u540d\u4e3amnist\u7684Starwhale\u6570\u636e\u96c6"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u540d\u4e3apytorch\u7684Starwhale\u8fd0\u884c\u65f6")),(0,n.kt)("h2",{id:"\u767b\u5f55\u4e91\u5b9e\u4f8b"},"\u767b\u5f55\u4e91\u5b9e\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"swcli instance login --username <\u60a8\u7684\u7528\u6237\u540d> --password <\u60a8\u7684\u5bc6\u7801> --alias swcloud https://cloud.starwhale.cn\n")),(0,n.kt)("h2",{id:"\u5c06\u6570\u636e\u96c6\u6a21\u578b\u548c\u8fd0\u884c\u65f6\u590d\u5236\u5230starwhale-cloud"},"\u5c06\u6570\u636e\u96c6\u3001\u6a21\u578b\u548c\u8fd0\u884c\u65f6\u590d\u5236\u5230Starwhale Cloud"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model copy mnist swcloud/project/demo\nswcli dataset copy mnist swcloud/project/demo\nswcli runtime copy pytorch swcloud/project/demo\n")),(0,n.kt)("h2",{id:"\u4f7f\u7528-web-ui-\u8fd0\u884c\u8bc4\u4f30"},"\u4f7f\u7528 Web UI \u8fd0\u884c\u8bc4\u4f30"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/console-create-job.gif",alt:"console-create-job.gif"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u606d\u559c\uff01 \u60a8\u5df2\u5b8c\u6210Starwhale Cloud\u7684\u5165\u95e8\u6307\u5357\u3002")))}p.isMDXComponent=!0}}]);