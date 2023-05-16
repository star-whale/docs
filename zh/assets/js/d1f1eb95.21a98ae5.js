"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[5297],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=u(n),c=l,s=k["".concat(o,".").concat(c)]||k[c]||d[c]||r;return n?a.createElement(s,i(i({ref:t},m),{},{components:n})):a.createElement(s,i({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},72756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=n(83117),l=(n(67294),n(3905));const r={title:"swcli job"},i=void 0,p={unversionedId:"reference/swcli/job",id:"version-0.4.3/reference/swcli/job",title:"swcli job",description:"\u6982\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.3/reference/swcli/job.md",sourceDirName:"reference/swcli",slug:"/reference/swcli/job",permalink:"/zh/docs/0.4.3/reference/swcli/job",draft:!1,editUrl:"https://github.com/star-whale/starwhale/tree/main/docs/versioned_docs/version-0.4.3/reference/swcli/job.md",tags:[],version:"0.4.3",frontMatter:{title:"swcli job"},sidebar:"mainSidebar",previous:{title:"swcli runtime",permalink:"/zh/docs/0.4.3/reference/swcli/runtime"},next:{title:"\u5176\u4ed6\u516c\u5171\u547d\u4ee4",permalink:"/zh/docs/0.4.3/reference/swcli/utilities"}},o={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"swcli job cancel",id:"cancel",level:2},{value:"swcli job info",id:"info",level:2},{value:"swcli job list",id:"list",level:2},{value:"swcli job pause",id:"pause",level:2},{value:"swcli job resume",id:"resume",level:2}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] job [\u9009\u9879] <\u5b50\u547d\u4ee4> [\u53c2\u6570]...\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"job"),"\u547d\u4ee4\u5305\u62ec\u4ee5\u4e0b\u5b50\u547d\u4ee4\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cancel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pause")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"recover")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"remove")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"resume"))),(0,l.kt)("h2",{id:"cancel"},"swcli job cancel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] job cancel [\u9009\u9879] <JOB>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"job cancel"),"\u505c\u6b62\u6307\u5b9a\u7684\u4f5c\u4e1a\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"JOB"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/0.4.3/swcli/uri#job"},"\u4f5c\u4e1aURI"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--force")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e3a\u771f\uff0c\u5f3a\u5236\u505c\u6b62\u6307\u5b9a\u7684\u4f5c\u4e1a\u3002")))),(0,l.kt)("h2",{id:"info"},"swcli job info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] job info [\u9009\u9879] <JOB>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"job info"),"\u8f93\u51fa\u6307\u5b9a\u4f5c\u4e1a\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"JOB"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/0.4.3/swcli/uri#job"},"\u4f5c\u4e1aURI"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--page")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d77\u59cb\u9875\u7801\u3002\u4ec5\u9650Server\u548cCloud\u5b9e\u4f8b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--size")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u9875\u4e2d\u7684\u4f5c\u4e1a\u6570\u3002\u4ec5\u9650Server\u548cCloud\u5b9e\u4f8b\u3002")))),(0,l.kt)("h2",{id:"list"},"swcli job list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] job list [\u9009\u9879]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"job list"),"\u663e\u793a\u6240\u6709\u7684Starwhale\u4f5c\u4e1a\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--project")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u67e5\u770b\u7684\u9879\u76ee\u7684URI\u3002\u5982\u679c\u672a\u6307\u5b9a\u6b64\u9009\u9879\uff0c\u5219\u4f7f\u7528",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/0.4.3/swcli/uri#defaultProject"},"\u9ed8\u8ba4\u9879\u76ee"),"\u66ff\u4ee3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--show-removed")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4f7f\u7528\u4e86\u8be5\u9009\u9879\uff0c\u5219\u7ed3\u679c\u4e2d\u4f1a\u5305\u542b\u5df2\u5220\u9664\u4f46\u672a\u88ab\u5783\u573e\u56de\u6536\u7684\u4f5c\u4e1a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--page")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d77\u59cb\u9875\u7801\u3002\u4ec5\u9650Server\u548cCloud\u5b9e\u4f8b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--size")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u9875\u4e2d\u7684\u4f5c\u4e1a\u6570\u3002\u4ec5\u9650Server\u548cCloud\u5b9e\u4f8b\u3002")))),(0,l.kt)("h2",{id:"pause"},"swcli job pause"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] job pause [\u9009\u9879] <JOB>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"job pause"),"\u6682\u505c\u6307\u5b9a\u7684\u4f5c\u4e1a. \u88ab\u6682\u505c\u7684\u4f5c\u4e1a\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"job resume"),"\u6062\u590d\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"JOB"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/0.4.3/swcli/uri#job"},"\u4f5c\u4e1aURI"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pause"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"cancel"),"\u529f\u80fd\u4e0a\u57fa\u672c\u76f8\u540c\u3002\u5b83\u4eec\u7684\u5dee\u522b\u5728\u4e8e\u88ab\u6682\u505c\u7684\u4f5c\u4e1a\u4f1a\u4fdd\u7559\u4f5c\u4e1aID\uff0c\u5728\u6062\u590d\u65f6\u7ee7\u7eed\u4f7f\u7528\u3002\u4f5c\u4e1a\u7684\u5f00\u53d1\u8005\u9700\u8981\u5b9a\u671f\u4fdd\u5b58\u4f5c\u4e1a\u6570\u636e\u5e76\u5728\u6062\u590d\u7684\u65f6\u5019\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u6570\u636e\u3002\u4f5c\u4e1aID\u53ef\u4ee5\u7528\u4f5c\u4fdd\u5b58\u6570\u636e\u7684\u952e\u503c\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--force")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e3a\u771f\uff0c\u5f3a\u5236\u505c\u6b62\u6307\u5b9a\u7684\u4f5c\u4e1a\u3002")))),(0,l.kt)("h2",{id:"resume"},"swcli job resume"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] job resume [\u9009\u9879] <JOB>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"job resume"),"\u6062\u590d\u6307\u5b9a\u7684\u4f5c\u4e1a\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"JOB"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/0.4.3/swcli/uri#job"},"\u4f5c\u4e1aURI"),"\u3002"))}d.isMDXComponent=!0}}]);