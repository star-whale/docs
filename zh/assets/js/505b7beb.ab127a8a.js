"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[3572],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>o});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var m=n.createContext({}),d=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=d(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,m=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),N=d(a),o=l,c=N["".concat(m,".").concat(o)]||N[o]||u[o]||r;return a?n.createElement(c,i(i({ref:e},k),{},{components:a})):n.createElement(c,i({ref:e},k))}));function o(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=N;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},48603:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(83117),l=(a(67294),a(3905));const r={title:"swcli runtime"},i=void 0,p={unversionedId:"reference/swcli/runtime",id:"version-0.4.2/reference/swcli/runtime",title:"swcli runtime",description:"\u6982\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.2/reference/swcli/runtime.md",sourceDirName:"reference/swcli",slug:"/reference/swcli/runtime",permalink:"/zh/docs/0.4.2/reference/swcli/runtime",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.2/reference/swcli/runtime.md",tags:[],version:"0.4.2",frontMatter:{title:"swcli runtime"},sidebar:"mainSidebar",previous:{title:"swcli dataset",permalink:"/zh/docs/0.4.2/reference/swcli/dataset"},next:{title:"swcli job",permalink:"/zh/docs/0.4.2/reference/swcli/job"}},m={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"swcli runtime activate",id:"activate",level:2},{value:"swcli runtime build",id:"build",level:2},{value:"swcli runtime copy",id:"copy",level:2},{value:"swcli runtime dockerize",id:"dockerize",level:2},{value:"swcli runtime history",id:"history",level:2},{value:"swcli runtime info",id:"info",level:2},{value:"swcli runtime list",id:"list",level:2},{value:"swcli runtime recover",id:"recover",level:2},{value:"swcli runtime remove",id:"remove",level:2},{value:"swcli runtime tag",id:"tag",level:2}],k={toc:d};function u(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] runtime [\u9009\u9879] <SUBCOMMAND> [\u53c2\u6570]...\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"runtime")," \u547d\u4ee4\u5305\u62ec\u4ee5\u4e0b\u5b50\u547d\u4ee4\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"activate")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"copy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dockerize")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"history")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"recover")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"remove")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tag"))),(0,l.kt)("h2",{id:"activate"},"swcli runtime activate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] runtime activate [\u9009\u9879] <RUNTIME>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"runtime activate"),"\u6839\u636e\u6307\u5b9a\u7684\u8fd0\u884c\u65f6\u521b\u5efa\u4e00\u4e2a\u5168\u65b0\u7684Python\u73af\u5883\uff0c\u7c7b\u4f3c",(0,l.kt)("inlineCode",{parentName:"p"},"source venv/bin/activate"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"conda activate xxx"),"\u7684\u6548\u679c\u3002\u5173\u95ed\u5f53\u524dshell\u6216\u5207\u6362\u5230\u5176\u4ed6shell\u540e\uff0c\u9700\u8981\u91cd\u65b0\u6fc0\u6d3bRuntime\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"URI")," \u53c2\u6570\u4e3aRuntime URI\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5df2\u7ecf\u6fc0\u6d3b\u7684Runtime\uff0c\u5982\u679c\u60f3\u8981\u9000\u51fa\u8be5\u73af\u5883\uff0c\u9700\u8981\u5728venv\u73af\u5883\u4e2d\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"deactivate")," \u547d\u4ee4\u6216conda\u73af\u5883\u4e2d\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"conda deactivate")," \u547d\u4ee4\u3002"),(0,l.kt)("h2",{id:"build"},"swcli runtime build"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] runtime build [\u9009\u9879] <WORKDIR>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"runtime build"),"\u57fa\u4e8econda\u73af\u5883\u3001virtualenv\u73af\u5883\u6216docker\u955c\u50cf\u6784\u5efa\u4e00\u4e2a\u65b0\u7684Starwhale\u8fd0\u884c\u65f6\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--project"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"-p")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/docs/0.4.2/swcli/uri#defaultProject"},"\u9ed8\u8ba4\u9879\u76ee")),(0,l.kt)("td",{parentName:"tr",align:null},"\u9879\u76eeURI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--conda")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"conda\u73af\u5883\u7684\u540d\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--conda-prefix")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"conda\u73af\u5883\u7684\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--venv")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"virtualenv\u73af\u5883\u7684\u8def\u5f84"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--docker")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"docker\u955c\u50cf\u540d"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"copy"},"swcli runtime copy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] runtime copy [\u9009\u9879] <SRC> <DEST>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"runtime copy"),"\u5c06runtime\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"SRC"),"\u590d\u5236\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"DEST"),"\u3002\u8fd9\u91cc",(0,l.kt)("inlineCode",{parentName:"p"},"SRC"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"DEST"),"\u90fd\u662f",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/0.4.2/swcli/uri#model-dataset-runtime"},"\u8fd0\u884c\u65f6URI"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--force"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e3atrue\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"DEST"),"\u5df2\u7ecf\u5b58\u5728\u65f6\u4f1a\u88ab\u5f3a\u5236\u8986\u76d6\u3002\u5426\u5219\u6b64\u547d\u4ee4\u4f1a\u663e\u793a\u4e00\u6761\u9519\u8bef\u6d88\u606f\u3002")))),(0,l.kt)("h2",{id:"dockerize"},"swcli runtime dockerize"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] runtime dockerize [\u9009\u9879] <RUNTIME>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"runtime dockerize"),"\u57fa\u4e8e\u6307\u5b9a\u7684runtime\u521b\u5efa\u4e00\u4e2adocker\u955c\u50cf\u3002Starwhale\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"docker buildx"),"\u6765\u521b\u5efa\u955c\u50cf\u3002\u8fd0\u884c\u6b64\u547d\u4ee4\u9700\u8981\u9884\u5148\u5b89\u88c5Docker 19.03\u4ee5\u4e0a\u7684\u7248\u672c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RUNTIME"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/0.4.2/swcli/uri#model-dataset-runtime"},"\u8fd0\u884c\u65f6URI"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--tag")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-t")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Docker\u955c\u50cf\u7684tag\uff0c\u8be5\u9009\u9879\u53ef\u4ee5\u91cd\u590d\u591a\u6b21\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--push")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5c06\u521b\u5efa\u7684\u955c\u50cf\u63a8\u9001\u5230docker registry\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--platform")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"amd64"),(0,l.kt)("td",{parentName:"tr",align:null},"\u955c\u50cf\u7684\u8fd0\u884c\u5e73\u53f0\uff0c\u53ef\u4ee5\u662famd64\u6216\u8005arm64\u3002\u8be5\u9009\u9879\u53ef\u4ee5\u91cd\u590d\u591a\u6b21\u7528\u4e8e\u521b\u5efa\u591a\u5e73\u53f0\u955c\u50cf\u3002")))),(0,l.kt)("h2",{id:"history"},"swcli runtime history"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] runtime history [\u9009\u9879] <RUNTIME>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"runtime history"),"\u8f93\u51fa\u6307\u5b9aStarwhale\u8fd0\u884c\u65f6\u7684\u6240\u6709\u5386\u53f2\u7248\u672c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RUNTIME"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/0.4.2/swcli/uri#model-dataset-runtime"},"\u8fd0\u884c\u65f6URI"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fullname")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5b8c\u6574\u7684\u7248\u672c\u540d\u79f0\u3002\u5982\u679c\u6ca1\u6709\u4f7f\u7528\u8be5\u9009\u9879\uff0c\u5219\u4ec5\u663e\u793a\u524d 12 \u4e2a\u5b57\u7b26\u3002")))),(0,l.kt)("h2",{id:"info"},"swcli runtime info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] runtime info [\u9009\u9879] RUNTIME\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"runtime info"),"\u8f93\u51fa\u6307\u5b9aStarwhale\u8fd0\u884c\u65f6\u7248\u672c\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RUNTIME"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/0.4.2/swcli/uri#model-dataset-runtime"},"\u8fd0\u884c\u65f6URI"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output-filter")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-of")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Choice of [basic"),(0,l.kt)("td",{parentName:"tr",align:null},"runtime_yaml"),(0,l.kt)("td",{parentName:"tr",align:null},"manifest")))),(0,l.kt)("h2",{id:"list"},"swcli runtime list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] runtime list [\u9009\u9879]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"runtime list"),"\u663e\u793a\u6240\u6709\u7684Starwhale\u8fd0\u884c\u65f6\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--project")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u67e5\u770b\u7684\u9879\u76ee\u7684URI\u3002\u5982\u679c\u672a\u6307\u5b9a\u6b64\u9009\u9879\uff0c\u5219\u4f7f\u7528",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/0.4.2/swcli/uri#defaultProject"},"\u9ed8\u8ba4\u9879\u76ee"),"\u66ff\u4ee3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fullname")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u5b8c\u6574\u7684\u7248\u672c\u540d\u79f0\u3002\u5982\u679c\u6ca1\u6709\u4f7f\u7528\u8be5\u9009\u9879\uff0c\u5219\u4ec5\u663e\u793a\u524d 12 \u4e2a\u5b57\u7b26\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--show-removed")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4f7f\u7528\u4e86\u8be5\u9009\u9879\uff0c\u5219\u7ed3\u679c\u4e2d\u4f1a\u5305\u542b\u5df2\u5220\u9664\u4f46\u672a\u88ab\u5783\u573e\u56de\u6536\u7684\u8fd0\u884c\u65f6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--page")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8d77\u59cb\u9875\u7801\u3002\u4ec5\u9650Server\u548cCloud\u5b9e\u4f8b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--size")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u9875\u4e2d\u7684\u8fd0\u884c\u65f6\u6570\u91cf\u3002\u4ec5\u9650Server\u548cCloud\u5b9e\u4f8b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"-fl")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ec5\u663e\u793a\u7b26\u5408\u6761\u4ef6\u7684\u8fd0\u884c\u65f6\u3002\u8be5\u9009\u9879\u53ef\u4ee5\u5728\u4e00\u4e2a\u547d\u4ee4\u4e2d\u88ab\u591a\u6b21\u91cd\u590d\u4f7f\u7528\u3002")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8fc7\u6ee4\u5668"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8303\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"Key-Value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u65f6\u540d\u79f0\u524d\u7f00"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter name=pytorch"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"owner")),(0,l.kt)("td",{parentName:"tr",align:null},"Key-Value"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u65f6\u6240\u6709\u8005\u540d\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter owner=starwhale"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"latest")),(0,l.kt)("td",{parentName:"tr",align:null},"Flag"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u6307\u5b9a\u4e86\u8be5\u9009\u9879\uff0c\u7ed3\u679c\u4e2d\u4ec5\u663e\u793a\u6700\u65b0\u7248\u672c\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter latest"))))),(0,l.kt)("h2",{id:"recover"},"swcli runtime recover"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] runtime recover [\u9009\u9879] <RUNTIME>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"runtime recover"),"\u547d\u4ee4\u53ef\u4ee5\u6062\u590d\u4ee5\u524d\u5220\u9664\u7684Starwhale\u8fd0\u884c\u65f6\u6216\u7248\u672c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RUNTIME"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/0.4.2/swcli/uri#model-dataset-runtime"},"\u8fd0\u884c\u65f6URI"),"\u3002\u5982\u679cURI\u4e0d\u5305\u542b\u7248\u672c\uff0c\u5219\u4f1a\u6062\u590d\u6240\u6709\u5220\u9664\u7684\u7248\u672c\u3002"),(0,l.kt)("p",null,"\u5df2\u7ecf\u88ab\u5783\u573e\u56de\u6536\u6216\u8005\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--force"),"\u9009\u9879\u5220\u9664\u7684Starwhale\u8fd0\u884c\u65f6\u6216\u7248\u672c\u65e0\u6cd5\u4f7f\u7528\u672c\u547d\u4ee4\u6062\u590d\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--force"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4f7f\u7528\u4e86\u8be5\u9009\u9879\uff0c\u5f53\u524d\u540c\u540d\u7684Starwhale\u8fd0\u884c\u65f6\u6216\u7248\u672c\u4f1a\u88ab\u5f3a\u5236\u8986\u76d6\u3002")))),(0,l.kt)("h2",{id:"remove"},"swcli runtime remove"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] runtime remove [\u9009\u9879] <RUNTIME>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"runtime remove"),"\u547d\u4ee4\u53ef\u4ee5\u5220\u9664\u6307\u5b9a\u7684Starwhale\u8fd0\u884c\u65f6\u6216\u67d0\u4e2a\u7248\u672c\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RUNTIME"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/0.4.2/swcli/uri#model-dataset-runtime"},"\u8fd0\u884c\u65f6URI"),"\u3002\u5982\u679cURI\u4e0d\u5305\u542b\u7248\u672c\uff0c\u5219\u5220\u9664\u6240\u6709\u7248\u672c\u3002"),(0,l.kt)("p",null,"\u88ab\u5220\u9664\u7684Starwhale\u8fd0\u884c\u65f6\u6216\u7248\u672c\u53ef\u4ee5\u5728\u5783\u573e\u56de\u6536\u4e4b\u524d\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"swcli runtime recover"),"\u6062\u590d\u3002\u8981\u6c38\u4e45\u5220\u9664\u67d0\u4e2aStarwhale\u8fd0\u884c\u65f6\u6216\u7248\u672c\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--force"),"\u9009\u9879\u3002"),(0,l.kt)("p",null,"\u88ab\u5220\u9664\u7684Starwhale\u8fd0\u884c\u65f6\u6216\u7248\u672c\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"swcli runtime list --show-removed"),"\u5217\u51fa\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--force"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6b64\u9009\u9879\u6c38\u4e45\u5220\u9664\u67d0\u4e2aStarwhale\u8fd0\u884c\u65f6\u6216\u7248\u672c\u3002\u5220\u9664\u540e\u4e0d\u53ef\u6062\u590d\u3002")))),(0,l.kt)("h2",{id:"tag"},"swcli runtime tag"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] runtime tag [\u9009\u9879] <RUNTIME> [TAGS]...\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"runtime tag"),"\u547d\u4ee4\u5c06\u6807\u7b7e\u9644\u52a0\u5230\u6307\u5b9a\u7684Starwhale\u8fd0\u884c\u65f6\u7248\u672c\u3002\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6URI\u4e2d\u4f7f\u7528\u6807\u7b7e\u66ff\u4ee3\u7248\u672cID\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"RUNTIME"),"\u662f\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/0.4.2/swcli/uri#model-dataset-runtime"},"\u8fd0\u884c\u65f6URI"),"\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e2a\u8fd0\u884c\u65f6\u7248\u672c\u53ef\u4ee5\u5305\u542b\u4efb\u610f\u6570\u91cf\u7684\u6807\u7b7e\uff0c\u4f46\u540c\u4e00\u8fd0\u884c\u65f6\u4e2d\u4e0d\u5141\u8bb8\u6709\u91cd\u590d\u7684\u6807\u7b7e\u540d\u79f0\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"runtime tag"),"\u4ec5\u9002\u7528\u4e8e",(0,l.kt)("a",{parentName:"strong",href:"../../instances/standalone/index.md"},"Standalone\u5b9e\u4f8b"),".")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--remove"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"-r")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u8be5\u9009\u9879\u5220\u9664\u6807\u7b7e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--quiet"),"\u6216",(0,l.kt)("inlineCode",{parentName:"td"},"-q")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u8be5\u9009\u9879\u4ee5\u5ffd\u7565\u9519\u8bef\uff0c\u4f8b\u5982\u5220\u9664\u4e0d\u5b58\u5728\u7684\u6807\u7b7e\u3002")))))}u.isMDXComponent=!0}}]);