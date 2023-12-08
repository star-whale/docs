"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[99132],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),c=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=c(n),b=r,f=s["".concat(u,".").concat(b)]||s[b]||d[b]||i;return n?l.createElement(f,o(o({ref:t},p),{},{components:n})):l.createElement(f,o({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},10228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var l=n(83117),r=(n(67294),n(3905));const i={title:"\u4ea7\u54c1\u8ba1\u8d39\u6982\u8ff0"},o=void 0,a={unversionedId:"cloud/billing/billing",id:"version-0.5.12/cloud/billing/billing",title:"\u4ea7\u54c1\u8ba1\u8d39\u6982\u8ff0",description:"Starwhale \u652f\u6301\u6309\u91cf\u4ed8\u8d39\uff0c\u6309\u91cf\u4ed8\u8d39\u662f\u4e00\u79cd\u5148\u4f7f\u7528\u540e\u4ed8\u8d39\u7684\u8ba1\u8d39\u65b9\u5f0f\u3002\u901a\u8fc7\u6309\u91cf\u4ed8\u8d39\uff0c\u60a8\u53ef\u4ee5\u6309\u8d44\u6e90\u4f7f\u7528\u91cf\u4ed8\u8d39\uff0c\u4e0d\u9700\u8981\u63d0\u524d\u8d2d\u4e70\u5927\u91cf\u8d44\u6e90\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.12/cloud/billing/billing.md",sourceDirName:"cloud/billing",slug:"/cloud/billing/",permalink:"/zh/0.5.12/cloud/billing/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.12/cloud/billing/billing.md",tags:[],version:"0.5.12",frontMatter:{title:"\u4ea7\u54c1\u8ba1\u8d39\u6982\u8ff0"},sidebar:"mainSidebar",previous:{title:"Starwhale Cloud \u7528\u6237\u6307\u5357",permalink:"/zh/0.5.12/cloud/"},next:{title:"\u8d26\u5355\u660e\u7ec6",permalink:"/zh/0.5.12/cloud/billing/bills"}},u={},c=[{value:"\u8ba1\u8d39\u8bf4\u660e",id:"\u8ba1\u8d39\u8bf4\u660e",level:2},{value:"\u8ba1\u8d39\u9879",id:"\u8ba1\u8d39\u9879",level:3},{value:"\u8ba1\u8d39\u65b9\u5f0f",id:"\u8ba1\u8d39\u65b9\u5f0f",level:3},{value:"\u5f00\u901a\u8981\u6c42",id:"\u5f00\u901a\u8981\u6c42",level:3},{value:"\u8ba1\u8d39\u5468\u671f",id:"\u8ba1\u8d39\u5468\u671f",level:3},{value:"\u8ba1\u8d39\u65f6\u957f",id:"\u8ba1\u8d39\u65f6\u957f",level:3},{value:"\u8d26\u5355\u660e\u7ec6",id:"\u8d26\u5355\u660e\u7ec6",level:2},{value:"\u6b20\u8d39\u8bf4\u660e",id:"\u6b20\u8d39\u8bf4\u660e",level:2},{value:"\u67e5\u770b\u6b20\u8d39\u91d1\u989d",id:"\u67e5\u770b\u6b20\u8d39\u91d1\u989d",level:3},{value:"\u9000\u6b3e\u8bf4\u660e",id:"\u9000\u6b3e\u8bf4\u660e",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Starwhale \u652f\u6301\u6309\u91cf\u4ed8\u8d39\uff0c\u6309\u91cf\u4ed8\u8d39\u662f\u4e00\u79cd\u5148\u4f7f\u7528\u540e\u4ed8\u8d39\u7684\u8ba1\u8d39\u65b9\u5f0f\u3002\u901a\u8fc7\u6309\u91cf\u4ed8\u8d39\uff0c\u60a8\u53ef\u4ee5\u6309\u8d44\u6e90\u4f7f\u7528\u91cf\u4ed8\u8d39\uff0c\u4e0d\u9700\u8981\u63d0\u524d\u8d2d\u4e70\u5927\u91cf\u8d44\u6e90\u3002"),(0,r.kt)("h2",{id:"\u8ba1\u8d39\u8bf4\u660e"},"\u8ba1\u8d39\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u8ba1\u8d39\u9879"},"\u8ba1\u8d39\u9879"),(0,r.kt)("p",null,"Starwhale \u6839\u636e\u60a8\u9009\u8d2d\u7684\u8d44\u6e90\u89c4\u683c\uff08CPU\u3001GPU\u3001\u5185\u5b58\uff09\u53ca\u4f7f\u7528\u65f6\u957f\u8fdb\u884c\u8ba1\u8d39\u3002"),(0,r.kt)("h3",{id:"\u8ba1\u8d39\u65b9\u5f0f"},"\u8ba1\u8d39\u65b9\u5f0f"),(0,r.kt)("p",null,"Starwhale \u652f\u6301\u6309\u91cf\u4ed8\u8d39\uff0c\u6309\u91cf\u4ed8\u8d39\u662f\u4e00\u79cd\u5148\u4f7f\u7528\u540e\u4ed8\u8d39\u7684\u8ba1\u8d39\u65b9\u5f0f\u3002\u901a\u8fc7\u6309\u91cf\u4ed8\u8d39\uff0c\u60a8\u53ef\u4ee5\u6309\u8d44\u6e90\u4f7f\u7528\u91cf\u4ed8\u8d39\uff0c\u4e0d\u9700\u8981\u63d0\u524d\u8d2d\u4e70\u5927\u91cf\u8d44\u6e90\u3002"),(0,r.kt)("p",null,"\u6309\u91cf\u4ed8\u8d39\u4e3b\u8981\u6309\u7167\u8d44\u6e90\u8ba1\u8d39\u5468\u671f\u8ba1\u8d39\uff0c\u5728\u6bcf\u4e2a\u7ed3\u7b97\u5468\u671f\u751f\u6210\u8d26\u5355\u5e76\u4ece\u8d26\u6237\u4e2d\u6263\u9664\u76f8\u5e94\u8d39\u7528\u3002\u521b\u5efa Job \u65f6\uff0c\u9700\u8981\u786e\u5b9a\u8ba1\u7b97\u8d44\u6e90\u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u8bf7\u786e\u4fdd\u60a8\u5728 Job \u8fd0\u884c\u671f\u95f4\u53ef\u7528\u4f59\u989d\u5145\u8db3\uff0c\u5982\u679c\u5728 Job \u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u60a8\u7684\u8d26\u6237\u4f59\u989d\u4e0d\u8db3\uff0c\u4f1a\u5bfc\u81f4 Job \u65e0\u6cd5\u5b8c\u6210\u5e76\u6309\u7167\u5df2\u8fd0\u884c\u65f6\u957f\u6536\u8d39\u3002"),(0,r.kt)("h3",{id:"\u5f00\u901a\u8981\u6c42"},"\u5f00\u901a\u8981\u6c42"),(0,r.kt)("p",null,"\u6309\u7167\u6309\u91cf\u4ed8\u8d39\u521b\u5efa Job \u524d\uff0c\u60a8\u7684 Starwhale \u8d26\u6237\u53ef\u7528\u4f59\u989d\u4e0d\u5f97\u5c0f\u4e8e\u4e00\u4e2a\u8ba1\u8d39\u5468\u671f\u3002"),(0,r.kt)("p",null,"\u8bf4\u660e\uff1a\u8d26\u6237\u53ef\u7528\u4f59\u989d=\u5145\u503c\u91d1\u989d+\u4ee3\u91d1\u5238\u91d1\u989d-\u5df2\u6d88\u8d39\u91d1\u989d-\u5df2\u9000\u6b3e\u91d1\u989d-\u5df2\u51bb\u7ed3\u91d1\u989d"),(0,r.kt)("h3",{id:"\u8ba1\u8d39\u5468\u671f"},"\u8ba1\u8d39\u5468\u671f"),(0,r.kt)("p",null,"\u6bcf5\u5206\u949f\u4e3a\u4e00\u4e2a\u8ba1\u8d39\u5468\u671f\uff0c\u4e0d\u8db35\u5206\u949f\u5219\u63095\u5206\u949f\u8ba1\u7b97\uff0c\u6309\u7167 Job \u8fd0\u884c\u65f6\u957f\u7ed3\u7b97\u3002"),(0,r.kt)("h3",{id:"\u8ba1\u8d39\u65f6\u957f"},"\u8ba1\u8d39\u65f6\u957f"),(0,r.kt)("p",null,"\u4ece Job \u5f00\u59cb\u8fd0\u884c\u65f6\u8ba1\u8d39\uff0c\u5230 Job \u8fd0\u884c\u7ed3\u675f\u540e\u7ed3\u675f\u8ba1\u8d39"),(0,r.kt)("h2",{id:"\u8d26\u5355\u660e\u7ec6"},"\u8d26\u5355\u660e\u7ec6"),(0,r.kt)("p",null,'\u767b\u5f55\u8d26\u6237\u4e2d\u5fc3\uff0c\u70b9\u51fb\u201c\u8d26\u6237\u7ba1\u7406\u201d\uff0c\u53ef\u5728\u8d26\u6237\u6982\u89c8\u9875\u9762\u67e5\u770b\u6700\u8fd1\u8d26\u5355\u660e\u7ec6\uff0c\u70b9\u51fb"\u5168\u90e8\u8d26\u5355\u201d\uff0c\u53ef\u8df3\u8f6c\u67e5\u770b\u5168\u90e8\u8d26\u5355\u660e\u7ec6\u3002\u8be6\u7ec6\u64cd\u4f5c\u6d41\u7a0b\u8bf7\u53c2\u89c1',(0,r.kt)("a",{parentName:"p",href:"https://github.com/lijing-susan/docs/blob/account-and-billing/i18n/zh/docusaurus-plugin-content-docs/current/instances/cloud/accound-and-billing/bills.md"},"\u8d26\u5355\u660e\u7ec6"),"\u3002"),(0,r.kt)("h2",{id:"\u6b20\u8d39\u8bf4\u660e"},"\u6b20\u8d39\u8bf4\u660e"),(0,r.kt)("p",null,"\u5982\u679c\u8d26\u53f7\u5185\u5b58\u5728\u6b20\u8d39\u8d26\u5355\uff0c\u60a8\u65e0\u6cd5\u7ee7\u7eed\u4f7f\u7528\u8ba1\u7b97\u8d44\u6e90\u3002\u5c3d\u5feb\u5145\u503c\u7ed3\u6e05\u6b20\u8d39\u8d26\u5355\u540e\u53ef\u7ee7\u7eed\u4f7f\u7528\u3002"),(0,r.kt)("h3",{id:"\u67e5\u770b\u6b20\u8d39\u91d1\u989d"},"\u67e5\u770b\u6b20\u8d39\u91d1\u989d"),(0,r.kt)("p",null,"1 \u767b\u5f55\u8d26\u6237\u4e2d\u5fc3"),(0,r.kt)("p",null,"2 \u5728",(0,r.kt)("strong",{parentName:"p"},"\u8d26\u6237\u6982\u89c8"),"\u53ef\u67e5\u770b\u6b20\u8d39\u91d1\u989d"),(0,r.kt)("h2",{id:"\u9000\u6b3e\u8bf4\u660e"},"\u9000\u6b3e\u8bf4\u660e"),(0,r.kt)("p",null,"\u73b0\u91d1\u4f59\u989d\u652f\u6301\u9000\u6b3e"),(0,r.kt)("p",null,"\u9700\u8981\u767b\u5f55\u8d26\u6237\u4e2d\u5fc3\uff0c\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u8d26\u6237\u7ba1\u7406>\u5145\u503c\u8ba2\u5355"),"\uff0c\u53ef\u9000\u6b3e\u7684\u5145\u503c\u8ba2\u5355\u4f1a\u5728",(0,r.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u5217"),"\u663e\u793a",(0,r.kt)("strong",{parentName:"p"},"\u9000\u6b3e"),"\u6309\u94ae\u3002\u70b9\u51fb\u53ef\u53d1\u8d77\u9000\u6b3e\u7533\u8bf7\uff0c\u8be6\u7ec6\u64cd\u4f5c\u6d41\u7a0b\u8bf7\u53c2\u89c1",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lijing-susan/docs/blob/account-and-billing/i18n/zh/docusaurus-plugin-content-docs/current/instances/cloud/accound-and-billing/refund.md"},"\u7533\u8bf7\u9000\u6b3e"),"\u3002"))}d.isMDXComponent=!0}}]);