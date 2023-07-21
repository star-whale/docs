"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9666],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=m(a),u=l,N=s["".concat(d,".").concat(u)]||s[u]||k[u]||r;return a?n.createElement(N,i(i({ref:t},o),{},{components:a})):n.createElement(N,i({ref:t},o))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5602:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(83117),l=(a(67294),a(3905));const r={title:"swcli dataset"},i=void 0,p={unversionedId:"reference/swcli/dataset",id:"version-0.5.6/reference/swcli/dataset",title:"swcli dataset",description:"\u6982\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.6/reference/swcli/dataset.md",sourceDirName:"reference/swcli",slug:"/reference/swcli/dataset",permalink:"/zh/reference/swcli/dataset",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.6/reference/swcli/dataset.md",tags:[],version:"0.5.6",frontMatter:{title:"swcli dataset"},sidebar:"mainSidebar",previous:{title:"swcli model",permalink:"/zh/reference/swcli/model"},next:{title:"swcli runtime",permalink:"/zh/reference/swcli/runtime"}},d={},m=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"swcli dataset copy",id:"copy",level:2},{value:"swcli dataset diff",id:"diff",level:2},{value:"swcli dataset history",id:"history",level:2},{value:"swcli dataset info",id:"info",level:2},{value:"swcli dataset list",id:"list",level:2},{value:"swcli dataset recover",id:"recover",level:2},{value:"swcli dataset remove",id:"remove",level:2},{value:"swcli dataset tag",id:"tag",level:2}],o={toc:m};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] dataset [\u9009\u9879] <SUBCOMMAND> [\u53c2\u6570]...\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset"),"\u547d\u4ee4\u5305\u62ec\u4ee5\u4e0b\u5b50\u547d\u4ee4\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"copy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"diff")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"history")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"recover")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"remove")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"summary")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tag")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"head"))),(0,l.kt)("h2",{id:"copy"},"swcli dataset copy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] dataset copy [\u9009\u9879] <SRC> <DEST>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset copy"),"\u5c06\u6570\u636e\u96c6\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"SRC"),"\u590d\u5236\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"DEST"),"\u3002\u8fd9\u91cc",(0,l.kt)("inlineCode",{parentName:"p"},"SRC"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"DEST"),"\u90fd\u662f",(0,l.kt)("a",{parentName:"p",href:"/zh/swcli/uri#model-dataset-runtime"},"\u6570\u636e\u96c6URI"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--force"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e3atrue\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"DEST"),"\u5df2\u7ecf\u5b58\u5728\u65f6\u4f1a\u88ab\u5f3a\u5236\u8986\u76d6\u3002\u5426\u5219\u6b64\u547d\u4ee4\u4f1a\u663e\u793a\u4e00\u6761\u9519\u8bef\u6d88\u606f\u3002")))),(0,l.kt)("h2",{id:"diff"},"swcli dataset diff"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] dataset diff [\u9009\u9879] <DATASET VERSION> <DATASET VERSION>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset diff"),"\u6bd4\u8f83\u540c\u4e00\u6570\u636e\u96c6\u7684\u4e24\u4e2a\u7248\u672c\u4e4b\u95f4\u7684\u5dee\u5f02\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DATASET VERSION"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/swcli/uri#model-dataset-runtime"},"\u6570\u636e\u96c6URI"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--show-details")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u8be5\u9009\u9879\u8f93\u51fa\u8be6\u7ec6\u7684\u5dee\u5f02\u4fe1\u606f\u3002")))),(0,l.kt)("h2",{id:"history"},"swcli dataset history"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] dataset history [\u9009\u9879] <DATASET>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset history"),"\u8f93\u51fa\u6307\u5b9aStarwhale\u6570\u636e\u96c6\u7684\u6240\u6709\u5386\u53f2\u7248\u672c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DATASET"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/swcli/uri#model-dataset-runtime"},"\u6570\u636e\u96c6URI"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fullname")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5b8c\u6574\u7684\u7248\u672c\u540d\u79f0\u3002\u5982\u679c\u6ca1\u6709\u4f7f\u7528\u8be5\u9009\u9879\uff0c\u5219\u4ec5\u663e\u793a\u524d 12 \u4e2a\u5b57\u7b26\u3002")))),(0,l.kt)("h2",{id:"info"},"swcli dataset info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] dataset info [\u9009\u9879] <DATASET>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset info"),"\u8f93\u51fa\u6307\u5b9aStarwhale\u6570\u636e\u96c6\u7248\u672c\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DATASET"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/swcli/uri#model-dataset-runtime"},"\u6570\u636e\u96c6URI"),"\u3002"),(0,l.kt)("h2",{id:"list"},"swcli dataset list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] dataset list [\u9009\u9879]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset list"),"\u547d\u4ee4\u663e\u793a\u6240\u6709\u7684Starwhale\u6570\u636e\u96c6\u3002"),(0,l.kt)("p",null,"| ",(0,l.kt)("inlineCode",{parentName:"p"},"--project")," | \u274c | String | | \u8981\u67e5\u770b\u7684\u9879\u76ee\u7684URI\u3002\u5982\u679c\u672a\u6307\u5b9a\u6b64\u9009\u9879\uff0c\u5219\u4f7f\u7528",(0,l.kt)("a",{parentName:"p",href:"/zh/swcli/uri#defaultProject"},"\u9ed8\u8ba4\u9879\u76ee"),"\u66ff\u4ee3\u3002 |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"--fullname")," | \u274c | Boolean | False | \u663e\u793a\u5b8c\u6574\u7684\u7248\u672c\u540d\u79f0\u3002\u5982\u679c\u6ca1\u6709\u4f7f\u7528\u8be5\u9009\u9879\uff0c\u5219\u4ec5\u663e\u793a\u524d 12 \u4e2a\u5b57\u7b26\u3002 |\n|",(0,l.kt)("inlineCode",{parentName:"p"},"--show-removed"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"-sr")," | \u274c | Boolean | False | \u5982\u679c\u4f7f\u7528\u4e86\u8be5\u9009\u9879\uff0c\u5219\u7ed3\u679c\u4e2d\u4f1a\u5305\u542b\u5df2\u5220\u9664\u4f46\u672a\u88ab\u5783\u573e\u56de\u6536\u7684\u6570\u636e\u96c6\u3002 |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"--page")," | \u274c | Integer | 1 | \u8d77\u59cb\u9875\u7801\u3002\u4ec5\u9650Server\u548cCloud\u5b9e\u4f8b\u3002 |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"--size")," | \u274c | Integer | 20 | \u4e00\u9875\u4e2d\u7684\u6570\u636e\u96c6\u6570\u91cf\u3002\u4ec5\u9650Server\u548cCloud\u5b9e\u4f8b\u3002 |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"--filter"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"-fl")," | \u274c | String | | \u4ec5\u663e\u793a\u7b26\u5408\u6761\u4ef6\u7684\u6570\u636e\u96c6\u3002\u8be5\u9009\u9879\u53ef\u4ee5\u5728\u4e00\u4e2a\u547d\u4ee4\u4e2d\u88ab\u591a\u6b21\u91cd\u590d\u4f7f\u7528\u3002 |"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8fc7\u6ee4\u5668"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8303\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"Key-Value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6\u540d\u79f0\u524d\u7f00"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter name=mnist"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"owner")),(0,l.kt)("td",{parentName:"tr",align:null},"Key-Value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6\u6240\u6709\u8005\u540d\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter owner=starwhale"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"latest")),(0,l.kt)("td",{parentName:"tr",align:null},"Flag"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u6307\u5b9a\u4e86\u8be5\u9009\u9879\uff0c\u7ed3\u679c\u4e2d\u4ec5\u663e\u793a\u6700\u65b0\u7248\u672c\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter latest"))))),(0,l.kt)("h2",{id:"recover"},"swcli dataset recover"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] dataset recover [\u9009\u9879] <DATASET>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset recover"),"\u6062\u590d\u4ee5\u524d\u5220\u9664\u7684Starwhale\u6570\u636e\u96c6\u6216\u7248\u672c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DATASET"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/swcli/uri#model-dataset-runtime"},"\u6570\u636e\u96c6URI"),"\u3002\u5982\u679cURI\u4e0d\u5305\u542b\u7248\u672c\uff0c\u5219\u4f1a\u6062\u590d\u6240\u6709\u5220\u9664\u7684\u7248\u672c\u3002"),(0,l.kt)("p",null,"\u5df2\u7ecf\u88ab\u5783\u573e\u56de\u6536\u6216\u8005\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--force"),"\u9009\u9879\u5220\u9664\u7684Starwhale\u6570\u636e\u96c6\u6216\u7248\u672c\u65e0\u6cd5\u4f7f\u7528\u672c\u547d\u4ee4\u6062\u590d\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--force"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4f7f\u7528\u4e86\u8be5\u9009\u9879\uff0c\u5f53\u524d\u540c\u540d\u7684Starwhale\u6570\u636e\u96c6\u6216\u7248\u672c\u4f1a\u88ab\u5f3a\u5236\u8986\u76d6\u3002")))),(0,l.kt)("h2",{id:"remove"},"swcli dataset remove"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] dataset remove [\u9009\u9879] <DATASET>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset remove"),"\u5220\u9664\u6307\u5b9a\u7684Starwhale\u6570\u636e\u96c6\u6216\u67d0\u4e2a\u7248\u672c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DATASET"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/swcli/uri#model-dataset-runtime"},"\u6570\u636e\u96c6URI"),"\u3002\u5982\u679cURI\u4e0d\u5305\u542b\u7248\u672c\uff0c\u5219\u5220\u9664\u6307\u5b9a\u6570\u636e\u96c6\u7684\u6240\u6709\u7248\u672c\u3002"),(0,l.kt)("p",null,"Removed Starwhale Datasets or versions can be recovered by ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli dataset recover")," before garbage collection. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--force")," option to persistently remove a Starwhale Dataset or version."),(0,l.kt)("p",null,"\u88ab\u5220\u9664\u7684Starwhale\u6570\u636e\u96c6\u6216\u7248\u672c\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"swcli dataset list --show-removed"),"\u5217\u51fa\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--force"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6b64\u9009\u9879\u6c38\u4e45\u5220\u9664\u67d0\u4e2aStarwhale\u6570\u636e\u96c6\u6216\u7248\u672c\u3002\u5220\u9664\u540e\u4e0d\u53ef\u6062\u590d\u3002")))),(0,l.kt)("h2",{id:"tag"},"swcli dataset tag"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] dataset tag [\u9009\u9879] <DATASET> [TAGS]...\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset tag"),"\u5c06\u6807\u7b7e\u9644\u52a0\u5230\u6307\u5b9a\u7684Starwhale\u6570\u636e\u96c6\u7248\u672c\u3002\u53ef\u4ee5\u5728\u6570\u636e\u96c6URI\u4e2d\u4f7f\u7528\u6807\u7b7e\u66ff\u4ee3\u7248\u672cID\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DATASET"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/swcli/uri#model-dataset-runtime"},"\u6570\u636e\u96c6URI"),"\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u6570\u636e\u96c6\u7248\u672c\u53ef\u4ee5\u5305\u542b\u4efb\u610f\u6570\u91cf\u7684\u6807\u7b7e\uff0c\u4f46\u540c\u4e00\u6570\u636e\u96c6\u4e2d\u4e0d\u5141\u8bb8\u6709\u91cd\u590d\u7684\u6807\u7b7e\u540d\u79f0\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--remove"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"-r")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u8be5\u9009\u9879\u5220\u9664\u6807\u7b7e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--quiet"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"-q")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u8be5\u9009\u9879\u4ee5\u5ffd\u7565\u9519\u8bef\uff0c\u4f8b\u5982\u5220\u9664\u4e0d\u5b58\u5728\u7684\u6807\u7b7e\u3002")))))}k.isMDXComponent=!0}}]);