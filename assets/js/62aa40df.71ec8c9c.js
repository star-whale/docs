"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[68607],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},40094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const l={title:"swcli project"},i=void 0,o={unversionedId:"reference/swcli/project",id:"version-0.4.3/reference/swcli/project",title:"swcli project",description:"Overview",source:"@site/versioned_docs/version-0.4.3/reference/swcli/project.md",sourceDirName:"reference/swcli",slug:"/reference/swcli/project",permalink:"/docs/0.4.3/reference/swcli/project",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.3/reference/swcli/project.md",tags:[],version:"0.4.3",frontMatter:{title:"swcli project"},sidebar:"mainSidebar",previous:{title:"swcli instance",permalink:"/docs/0.4.3/reference/swcli/instance"},next:{title:"swcli model",permalink:"/docs/0.4.3/reference/swcli/model"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"swcli project create",id:"create",level:2},{value:"swcli project info",id:"info",level:2},{value:"swcli project list",id:"list",level:2},{value:"swcli project recover",id:"recover",level:2},{value:"swcli project remove",id:"remove",level:2},{value:"swcli project use",id:"use",level:2}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] project [OPTIONS] <SUBCOMMAND> [ARGS]...\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"project")," command includes the following subcommands:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"info")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"recover")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"remove")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"use"))),(0,a.kt)("h2",{id:"create"},"swcli project create"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] project create <PROJECT>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"project create")," creates a new project."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PROJECT")," is a ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.3/swcli/uri#project"},"project URI"),"."),(0,a.kt)("h2",{id:"info"},"swcli project info"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] project info [OPTIONS] <PROJECT>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"project info")," outputs detailed information about the specified Starwhale Project."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PROJECT")," is a ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.3/swcli/uri#project"},"project URI"),"."),(0,a.kt)("h2",{id:"list"},"swcli project list"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] project list [OPTIONS]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"project list")," shows all Starwhale Projects."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--instance")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"The URI of the instance to list. If this option is omitted, use the ",(0,a.kt)("a",{parentName:"td",href:"/docs/0.4.3/swcli/uri#defaultInstance"},"default instance"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--show-removed")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"If true, include projects that are removed but not garbage collected.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--page")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"The starting page number.  Server and cloud instances only.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--size")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"20"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of items in one page. Server and cloud instances only.")))),(0,a.kt)("h2",{id:"recover"},"swcli project recover"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] project recover [OPTIONS] <PROJECT>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"project recover")," recovers previously removed Starwhale Projects."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PROJECT")," is a ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.3/swcli/uri#project"},"project URI"),"."),(0,a.kt)("p",null,"Garbage-collected Starwhale Projects can not be recovered, as well as those are removed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--force")," option."),(0,a.kt)("h2",{id:"remove"},"swcli project remove"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] project remove [OPTIONS] <PROJECT>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"project remove")," removes the specified Starwhale Project."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PROJECT")," is a ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.3/swcli/uri#project"},"project URI"),"."),(0,a.kt)("p",null,"Removed Starwhale Projects can be recovered by ",(0,a.kt)("inlineCode",{parentName:"p"},"swcli project recover")," before garbage collection. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--force")," option to persistently remove a Starwhale Project."),(0,a.kt)("p",null,"Removed Starwhale Project can be listed by ",(0,a.kt)("inlineCode",{parentName:"p"},"swcli project list --show-removed"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--force")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"-f")),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"If true, persistently delete the Starwhale Project. It can not be recovered.")))),(0,a.kt)("h2",{id:"use"},"swcli project use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] project use <PROJECT>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"project use")," make the specified project ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.4.3/swcli/uri#defaultProject"},"default"),". You must ",(0,a.kt)("a",{parentName:"p",href:"#login"},"login")," at first to use a project on a Server/Cloud instance."))}d.isMDXComponent=!0}}]);