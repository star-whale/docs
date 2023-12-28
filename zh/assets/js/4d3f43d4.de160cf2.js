"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[52476],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),u=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(a),m=n,h=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return a?r.createElement(h,i(i({ref:e},d),{},{components:a})):r.createElement(h,i({ref:e},d))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},44024:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(83117),n=(a(67294),a(3905));const l={title:"\u5165\u95e8\u6307\u5357"},i=void 0,o={unversionedId:"getting-started/index",id:"version-0.6.8/getting-started/index",title:"\u5165\u95e8\u6307\u5357",description:"Starwhale\u7684\u6bcf\u4e2a\u90e8\u7f72\u79f0\u4e3a\u4e00\u4e2a\u5b9e\u4f8b\u3002\u6240\u6709\u5b9e\u4f8b\u90fd\u53ef\u4ee5\u901a\u8fc7Starwhale Client\uff08swcli\uff09\u8fdb\u884c\u7ba1\u7406\u3002\u60a8\u53ef\u4ee5\u4efb\u9009\u4ee5\u4e0b\u5b9e\u4f8b\u7c7b\u578b\u4e4b\u4e00\u5f00\u59cb\u4f7f\u7528:",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.8/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/zh/getting-started/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.8/getting-started/index.md",tags:[],version:"0.6.8",frontMatter:{title:"\u5165\u95e8\u6307\u5357"},sidebar:"mainSidebar",previous:{title:"\u4ec0\u4e48\u662fStarwhale",permalink:"/zh/"},next:{title:"Starwhale Standalone\u5165\u95e8\u6307\u5357",permalink:"/zh/getting-started/standalone"}},p={},u=[],d={toc:u};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Starwhale\u7684\u6bcf\u4e2a\u90e8\u7f72\u79f0\u4e3a\u4e00\u4e2a\u5b9e\u4f8b\u3002\u6240\u6709\u5b9e\u4f8b\u90fd\u53ef\u4ee5\u901a\u8fc7Starwhale Client\uff08swcli\uff09\u8fdb\u884c\u7ba1\u7406\u3002\u60a8\u53ef\u4ee5\u4efb\u9009\u4ee5\u4e0b\u5b9e\u4f8b\u7c7b\u578b\u4e4b\u4e00\u5f00\u59cb\u4f7f\u7528:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Starwhale Standalone")," - Starwhale Standalone \u672c\u8d28\u4e0a\u662f\u4e00\u5957\u5b58\u50a8\u5728\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u6570\u636e\u5e93\u3002\u5b83\u7531 Starwhale Client\uff08swcli\uff09\u521b\u5efa\u548c\u7ba1\u7406\u3002\u60a8\u53ea\u9700\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"li"},"swcli")," \u5373\u53ef\u4f7f\u7528\u3002\u76ee\u524d\uff0c\u4e00\u53f0\u673a\u5668\u4e0a\u7684\u6bcf\u4e2a\u7528\u6237\u53ea\u80fd\u62e5\u6709\u4e00\u4e2aStarwhale Standalone \u5b9e\u4f8b\u3002\u6211\u4eec\u5efa\u8bae\u60a8\u4f7f\u7528 Starwhale Standalone \u6765\u6784\u5efa\u548c\u6d4b\u8bd5\u60a8\u7684\u6570\u636e\u96c6\u548c\u6a21\u578b\uff0c\u7136\u540e\u518d\u5c06\u5b83\u4eec\u63a8\u9001\u5230 Starwhale Server/Cloud \u5b9e\u4f8b\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Starwhale Server")," - Starwhale Server \u662f\u90e8\u7f72\u5728\u60a8\u672c\u5730\u670d\u52a1\u5668\u4e0a\u7684\u670d\u52a1\u3002\u9664\u4e86 Starwhale Client\uff08swcli\uff09\u7684\u6587\u672c\u4ea4\u4e92\u754c\u9762\uff0cStarwhale Server\u8fd8\u63d0\u4f9b Web UI\u4f9b\u60a8\u7ba1\u7406\u6570\u636e\u96c6\u548c\u6a21\u578b\uff0c\u4ee5\u53ca\u5728Kubernetes\u96c6\u7fa4\u4e2d\u8fd0\u884c\u6a21\u578b\u5e76\u67e5\u770b\u8fd0\u884c\u7ed3\u679c\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Starwhale Cloud")," - Starwhale Cloud \u662f\u6258\u7ba1\u5728\u516c\u5171\u4e91\u4e0a\u7684\u670d\u52a1\u3002 \u901a\u8fc7\u5728",(0,n.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn"},"https://cloud.starwhale.cn"),"\u6ce8\u518c\u4e00\u4e2a\u8d26\u53f7\uff0c\u60a8\u5c31\u53ef\u4ee5\u4f7f\u7528Starwhale\uff0c\u800c\u65e0\u9700\u5b89\u88c5\u3001\u8fd0\u884c\u548c\u7ef4\u62a4\u60a8\u81ea\u5df1\u7684\u5b9e\u4f8b\u3002 Starwhale Cloud \u8fd8\u63d0\u4f9b\u516c\u5171\u8d44\u6e90\u4f9b\u60a8\u4e0b\u8f7d\uff0c\u4f8b\u5982\u4e00\u4e9b\u6d41\u884c\u7684\u5f00\u6e90\u96c6\u6570\u636e\u96c6\u3001\u6a21\u578b\u548c\u8fd0\u884c\u65f6\u3002\u67e5\u770b Starwhale Cloud \u5b9e\u4f8b\u4e0a\u7684 \u201cstarwhale/public\u201d\u9879\u76ee\u4ee5\u83b7\u53d6\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002")),(0,n.kt)("p",null,"\u5728\u60a8\u51b3\u5b9a\u8981\u4f7f\u7528\u7684\u5b9e\u4f8b\u7c7b\u578b\u65f6\uff0c\u8bf7\u8003\u8651\u4ee5\u4e0b\u56e0\u7d20\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u5b9e\u4f8b\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:null},"\u90e8\u7f72\u4f4d\u7f6e"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7ef4\u62a4\u8005"),(0,n.kt)("th",{parentName:"tr",align:null},"\u7528\u6237\u754c\u9762"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53ef\u6269\u5c55\u6027"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Starwhale Standalone"),(0,n.kt)("td",{parentName:"tr",align:null},"\u60a8\u7684\u7b14\u8bb0\u672c\u7535\u8111\u6216\u672c\u5730\u670d\u52a1\u5668"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u9700\u8981"),(0,n.kt)("td",{parentName:"tr",align:null},"\u547d\u4ee4\u884c"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u53ef\u6269\u5c55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Starwhale Server"),(0,n.kt)("td",{parentName:"tr",align:null},"\u60a8\u7684\u6570\u636e\u4e2d\u5fc3"),(0,n.kt)("td",{parentName:"tr",align:null},"\u60a8\u81ea\u5df1"),(0,n.kt)("td",{parentName:"tr",align:null},"Web UI\u548c\u547d\u4ee4\u884c"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53ef\u6269\u5c55\uff0c\u53d6\u51b3\u4e8e\u60a8\u7684 Kubernetes \u96c6\u7fa4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Starwhale Cloud"),(0,n.kt)("td",{parentName:"tr",align:null},"\u516c\u5171\u4e91\uff0c\u5982AWS\u6216\u963f\u91cc\u4e91"),(0,n.kt)("td",{parentName:"tr",align:null},"Starwhale\u56e2\u961f"),(0,n.kt)("td",{parentName:"tr",align:null},"Web UI\u548c\u547d\u4ee4\u884c"),(0,n.kt)("td",{parentName:"tr",align:null},"\u53ef\u6269\u5c55\uff0c\u4f46\u76ee\u524d\u53d7\u5230\u4e91\u4e0a\u514d\u8d39\u53ef\u7528\u8d44\u6e90\u7684\u9650\u5236")))),(0,n.kt)("p",null,"\u6839\u636e\u60a8\u4f7f\u7528\u7684\u5b9e\u4f8b\u7c7b\u578b\uff0c\u60a8\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u4e09\u4e2a\u5165\u95e8\u6307\u5357\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"standalone"},"Starwhale Standalone\u5165\u95e8\u6307\u5357")," - \u672c\u6307\u5357\u53ef\u5e2e\u52a9\u60a8\u5728\u53f0\u5f0fPC/\u7b14\u8bb0\u672c\u7535\u8111\u4e0a\u8fd0\u884c\u4e00\u4e2aMNIST\u8bc4\u4f30\u3002\u8fd9\u662f\u5f00\u59cb\u4f7f\u7528Starwhale\u6700\u5feb\u6700\u7b80\u5355\u7684\u65b9\u6cd5\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"server"},"Starwhale Server\u5165\u95e8\u6307\u5357")," - \u672c\u6307\u5357\u53ef\u5e2e\u52a9\u60a8\u5728\u79c1\u6709\u670d\u52a1\u5668\u4e0a\u5b89\u88c5Starwhale Server\u5e76\u8fd0\u884c\u4e00\u4e2aMNIST\u8bc4\u4f30\u3002\u5728\u672c\u6307\u5357\u7ed3\u675f\u65f6\uff0c\u60a8\u5c06\u62e5\u6709\u4e00\u4e2aStarwhale Server\u5b9e\u4f8b\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u7ba1\u7406\u60a8\u7684\u6570\u636e\u96c6\u548c\u6a21\u578b\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"cloud"},"Starwhale Cloud\u5165\u95e8\u6307\u5357")," - \u672c\u6307\u5357\u53ef\u5e2e\u52a9\u60a8\u5728Starwhale Cloud\u4e0a\u521b\u5efa\u5e10\u6237\u5e76\u8fd0\u884cMNIST\u8bc4\u4f30\u3002\u8fd9\u662f\u4f53\u9a8c\u6240\u6709Starwhale\u529f\u80fd\u7684\u6700\u7b80\u5355\u65b9\u6cd5\u3002")))}c.isMDXComponent=!0}}]);