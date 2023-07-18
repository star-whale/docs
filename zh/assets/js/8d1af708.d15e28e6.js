"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[8721],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,k=m["".concat(o,".").concat(d)]||m[d]||s[d]||l;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5083:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(3117),a=(r(7294),r(3905));const l={title:"swcli project"},i=void 0,p={unversionedId:"reference/swcli/project",id:"version-0.5.0/reference/swcli/project",title:"swcli project",description:"Overview",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.0/reference/swcli/project.md",sourceDirName:"reference/swcli",slug:"/reference/swcli/project",permalink:"/zh/docs/reference/swcli/project",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.0/reference/swcli/project.md",tags:[],version:"0.5.0",frontMatter:{title:"swcli project"},sidebar:"mainSidebar",previous:{title:"swcli instance",permalink:"/zh/docs/reference/swcli/instance"},next:{title:"swcli model",permalink:"/zh/docs/reference/swcli/model"}},o={},c=[{value:"Overview",id:"overview",level:2},{value:"swcli project create",id:"create",level:2},{value:"swcli project info",id:"info",level:2},{value:"swcli project list",id:"list",level:2},{value:"swcli project recover",id:"recover",level:2},{value:"swcli project remove",id:"remove",level:2},{value:"swcli project use",id:"use",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] project [\u9009\u9879] <\u5b50\u547d\u4ee4> [\u53c2\u6570]...\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"project"),"\u547d\u4ee4\u5305\u62ec\u4ee5\u4e0b\u5b50\u547d\u4ee4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"info")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"recover")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"remove")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"use"))),(0,a.kt)("h2",{id:"create"},"swcli project create"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] project create <PROJECT>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"project create"),"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u9879\u76ee\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PROJECT"),"\u662f\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/swcli/uri#project"},"\u9879\u76eeURI"),"\u3002"),(0,a.kt)("h2",{id:"info"},"swcli project info"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] project info [\u9009\u9879] <PROJECT>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"project info"),"\u8f93\u51fa\u6307\u5b9a\u9879\u76ee\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PROJECT"),"\u662f\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/swcli/uri#project"},"\u9879\u76eeURI"),"\u3002"),(0,a.kt)("h2",{id:"list"},"swcli project list"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] project list [\u9009\u9879]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"project list"),"\u663e\u793a\u6240\u6709\u7684\u9879\u76ee\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--instance")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u8981\u663e\u793a\u7684\u5b9e\u4f8bURI\u3002\u5982\u679c\u4e0d\u6307\u5b9a\u8be5\u9009\u9879\uff0c\u5219\u663e\u793a",(0,a.kt)("a",{parentName:"td",href:"/zh/docs/swcli/uri#defaultInstance"},"\u9ed8\u8ba4\u5b9e\u4f8b"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--show-removed")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4f7f\u7528\u4e86\u8be5\u9009\u9879\uff0c\u5219\u7ed3\u679c\u4e2d\u4f1a\u5305\u542b\u5df2\u5220\u9664\u4f46\u672a\u88ab\u5783\u573e\u56de\u6536\u7684\u9879\u76ee\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--page")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8d77\u59cb\u9875\u7801\u3002\u4ec5\u9650Server\u548cCloud\u5b9e\u4f8b\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--size")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"20"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e00\u9875\u4e2d\u7684\u9879\u76ee\u6570\u3002\u4ec5\u9650Server\u548cCloud\u5b9e\u4f8b\u3002")))),(0,a.kt)("h2",{id:"recover"},"swcli project recover"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] project recover [\u9009\u9879] <PROJECT>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"project recover"),"\u6062\u590d\u4ee5\u524d\u5220\u9664\u7684\u9879\u76ee\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PROJECT"),"\u662f\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/swcli/uri#project"},"\u9879\u76eeURI"),"\u3002"),(0,a.kt)("p",null,"\u5df2\u7ecf\u88ab\u5783\u573e\u56de\u6536\u6216\u8005\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"--force"),"\u9009\u9879\u5220\u9664\u7684\u9879\u76ee\u65e0\u6cd5\u4f7f\u7528\u672c\u547d\u4ee4\u6062\u590d\u3002"),(0,a.kt)("h2",{id:"remove"},"swcli project remove"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] project remove [\u9009\u9879] <PROJECT>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"project remove"),"\u5220\u9664\u6307\u5b9a\u7684\u9879\u76ee\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PROJECT"),"\u662f\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/swcli/uri#project"},"\u9879\u76eeURI"),"\u3002"),(0,a.kt)("p",null,"\u88ab\u5220\u9664\u7684\u9879\u76ee\u53ef\u4ee5\u5728\u5783\u573e\u56de\u6536\u4e4b\u524d\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"swcli project recover"),"\u6062\u590d\u3002\u8981\u6c38\u4e45\u5220\u9664\u67d0\u4e2a\u9879\u76ee\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"--force"),"\u9009\u9879\u3002"),(0,a.kt)("p",null,"\u88ab\u5220\u9664\u7684\u9879\u76ee\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"swcli project list --show-removed"),"\u5217\u51fa\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--force"),"\u6216",(0,a.kt)("inlineCode",{parentName:"td"},"-f")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6b64\u9009\u9879\u6c38\u4e45\u5220\u9664\u67d0\u4e2aStarwhale\u6a21\u578b\u6216\u7248\u672c\u3002\u5220\u9664\u540e\u4e0d\u53ef\u6062\u590d\u3002")))),(0,a.kt)("h2",{id:"use"},"swcli project use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] project use <PROJECT>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"project use"),"\u5c06\u6307\u5b9a\u7684\u9879\u76ee\u8bbe\u7f6e\u4e3a",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/swcli/uri#defaultProject"},"\u9ed8\u8ba4\u9879\u76ee"),"\u3002\u5982\u679c\u8981\u6307\u5b9aServer/Cloud\u5b9e\u4f8b\u4e0a\u7684\u9879\u76ee\uff0c\u60a8\u9700\u8981\u5148",(0,a.kt)("a",{parentName:"p",href:"#login"},"\u767b\u5f55"),"\u624d\u80fd\u8fd0\u884c\u672c\u547d\u4ee4\u3002"))}s.isMDXComponent=!0}}]);