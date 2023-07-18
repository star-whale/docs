"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[7813],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(a),k=l,N=u["".concat(o,".").concat(k)]||u[k]||m[k]||r;return a?n.createElement(N,i(i({ref:t},s),{},{components:a})):n.createElement(N,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3759:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(3117),l=(a(7294),a(3905));const r={title:"swcli dataset"},i=void 0,p={unversionedId:"reference/swcli/dataset",id:"reference/swcli/dataset",title:"swcli dataset",description:"Overview",source:"@site/docs/reference/swcli/dataset.md",sourceDirName:"reference/swcli",slug:"/reference/swcli/dataset",permalink:"/next/reference/swcli/dataset",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/reference/swcli/dataset.md",tags:[],version:"current",frontMatter:{title:"swcli dataset"},sidebar:"mainSidebar",previous:{title:"swcli model",permalink:"/next/reference/swcli/model"},next:{title:"swcli runtime",permalink:"/next/reference/swcli/runtime"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"swcli dataset copy",id:"copy",level:2},{value:"swcli dataset diff",id:"diff",level:2},{value:"swcli dataset history",id:"history",level:2},{value:"swcli dataset info",id:"info",level:2},{value:"swcli dataset list",id:"list",level:2},{value:"swcli dataset recover",id:"recover",level:2},{value:"swcli dataset remove",id:"remove",level:2},{value:"swcli dataset tag",id:"tag",level:2}],s={toc:d};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] dataset [OPTIONS] <SUBCOMMAND> [ARGS]...\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"dataset")," command includes the following subcommands:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"copy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"diff")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"history")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"recover")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"remove")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"summary")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tag")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"head"))),(0,l.kt)("h2",{id:"copy"},"swcli dataset copy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] dataset copy [OPTIONS] <SRC> <DEST>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset copy")," copies from ",(0,l.kt)("inlineCode",{parentName:"p"},"SRC")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"DEST"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SRC")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"DEST")," are both ",(0,l.kt)("a",{parentName:"p",href:"/next/swcli/uri#model-dataset-runtime"},"dataset URIs"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--force")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, ",(0,l.kt)("inlineCode",{parentName:"td"},"DEST")," will be overwritten if it exists; otherwise, this command displays an error message.")))),(0,l.kt)("h2",{id:"diff"},"swcli dataset diff"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] dataset diff [OPTIONS] <DATASET VERSION> <DATASET VERSION>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset diff")," compares the difference between two versions of the same dataset."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DATASET VERSION")," is a ",(0,l.kt)("a",{parentName:"p",href:"/next/swcli/uri#model-dataset-runtime"},"dataset URI"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--show-details")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, outputs the detail information.")))),(0,l.kt)("h2",{id:"history"},"swcli dataset history"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] dataset history [OPTIONS] <DATASET>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset history")," outputs all history versions of the specified Starwhale Dataset."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DATASET")," is a ",(0,l.kt)("a",{parentName:"p",href:"/next/swcli/uri#model-dataset-runtime"},"dataset URI"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fullname")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"Show the full version name. Only the first 12 characters are shown if this option is false.")))),(0,l.kt)("h2",{id:"info"},"swcli dataset info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] dataset info [OPTIONS] <DATASET>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset info")," outputs detailed information about the specified Starwhale Dataset version."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DATASET")," is a ",(0,l.kt)("a",{parentName:"p",href:"/next/swcli/uri#model-dataset-runtime"},"dataset URI"),"."),(0,l.kt)("h2",{id:"list"},"swcli dataset list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] dataset list [OPTIONS]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset list")," shows all Starwhale Datasets."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--project")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The URI of the project to list. Use the ",(0,l.kt)("a",{parentName:"td",href:"/next/swcli/uri#defaultProject"},"default project")," if not specified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fullname")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"Show the full version name. Only the first 12 characters are shown if this option is false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--show-removed")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-sr")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, include datasets that are removed but not garbage collected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--page")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"The starting page number.  Server and cloud instances only.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--size")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of items in one page. Server and cloud instances only.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-fl")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Show only Starwhale Datasetes that match specified filters. This option can be used multiple times in one command.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Filter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"Key-Value"),(0,l.kt)("td",{parentName:"tr",align:null},"The name prefix of datasets"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter name=mnist"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"owner")),(0,l.kt)("td",{parentName:"tr",align:null},"Key-Value"),(0,l.kt)("td",{parentName:"tr",align:null},"The dataset owner name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter owner=starwhale"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"latest")),(0,l.kt)("td",{parentName:"tr",align:null},"Flag"),(0,l.kt)("td",{parentName:"tr",align:null},"If specified, it shows only the latest version."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter latest"))))),(0,l.kt)("h2",{id:"recover"},"swcli dataset recover"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] dataset recover [OPTIONS] <DATASET>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset recover")," recovers previously removed Starwhale Datasets or versions."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DATASET")," is a ",(0,l.kt)("a",{parentName:"p",href:"/next/swcli/uri#model-dataset-runtime"},"dataset URI"),". If the version part of the URI is omitted, all removed versions are recovered."),(0,l.kt)("p",null,"Garbage-collected Starwhale Datasets or versions can not be recovered, as well as those are removed with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--force")," option."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--force")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, overwrite the Starwhale Dataset or version with the same name or version id.")))),(0,l.kt)("h2",{id:"remove"},"swcli dataset remove"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] dataset remove [OPTIONS] <DATASET>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset remove")," removes the specified Starwhale Dataset or version."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DATASET")," is a ",(0,l.kt)("a",{parentName:"p",href:"/next/swcli/uri#model-dataset-runtime"},"dataset URI"),". If the version part of the URI is omitted, all versions are removed."),(0,l.kt)("p",null,"Removed Starwhale Datasets or versions can be recovered by ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli dataset recover")," before garbage collection. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--force")," option to persistently remove a Starwhale Dataset or version."),(0,l.kt)("p",null,"Removed Starwhale Datasets or versions can be listed by ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli dataset list --show-removed"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--force")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, persistently delete the Starwhale Dataset or version. It can not be recovered.")))),(0,l.kt)("h2",{id:"tag"},"swcli dataset tag"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] dataset tag [OPTIONS] <DATASET> [TAGS]...\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"dataset tag")," attaches a tag to a specified Starwhale Dataset version. The tag can be used in a dataset URI instead of the version id."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DATASET")," is a ",(0,l.kt)("a",{parentName:"p",href:"/next/swcli/uri#model-dataset-runtime"},"dataset URI"),"."),(0,l.kt)("p",null,"Each dataset version can have any number of tags\uff0c but duplicated tag names are not allowed in the same dataset."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"dataset tag")," only works for the ",(0,l.kt)("a",{parentName:"strong",href:"/next/instances/standalone/"},"standalone instance"),".")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--remove")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-r")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"remove the tag if true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--quiet")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-q")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"ignore errors, for example, removing tags that do not exist.")))))}m.isMDXComponent=!0}}]);