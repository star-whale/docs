"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[1358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=p(n),s=l,N=k["".concat(d,".").concat(s)]||k[s]||u[s]||r;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(3117),l=(n(7294),n(3905));const r={title:"swcli model"},i=void 0,o={unversionedId:"reference/swcli/model",id:"version-0.4.6/reference/swcli/model",title:"swcli model",description:"Overview",source:"@site/versioned_docs/version-0.4.6/reference/swcli/model.md",sourceDirName:"reference/swcli",slug:"/reference/swcli/model",permalink:"/0.4.6/reference/swcli/model",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.6/reference/swcli/model.md",tags:[],version:"0.4.6",frontMatter:{title:"swcli model"},sidebar:"mainSidebar",previous:{title:"swcli project",permalink:"/0.4.6/reference/swcli/project"},next:{title:"swcli dataset",permalink:"/0.4.6/reference/swcli/dataset"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"swcli model build",id:"build",level:2},{value:"swcli model copy",id:"copy",level:2},{value:"swcli model diff",id:"diff",level:2},{value:"swcli model history",id:"history",level:2},{value:"swcli model info",id:"info",level:2},{value:"swcli model list",id:"list",level:2},{value:"swcli model recover",id:"recover",level:2},{value:"swcli model remove",id:"remove",level:2},{value:"swcli model run",id:"run",level:2},{value:"swcli model tag",id:"tag",level:2}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] model [OPTIONS] <SUBCOMMAND> [ARGS]...\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"model")," command includes the following subcommands:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"build")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"copy")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"diff")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"history")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"recover")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"remove")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"run")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tag"))),(0,l.kt)("h2",{id:"build"},"swcli model build"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] model build [OPTIONS] <WORKDIR>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model build")," will put the whole ",(0,l.kt)("inlineCode",{parentName:"p"},"WORKDIR")," into the model, except files that match patterns defined in ",(0,l.kt)("a",{parentName:"p",href:"/0.4.6/swcli/swignore"},".swignore"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model build")," will import modules specified by ",(0,l.kt)("inlineCode",{parentName:"p"},"--module")," to generate the required configurations to run the model. If your module depends on third-party libraries, we strongly recommend you use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--runtime")," option; otherwise, you need to ensure that the python environment used by swcli has these libraries installed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--project")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-p")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/0.4.6/swcli/uri#defaultProject"},"the default project")),(0,l.kt)("td",{parentName:"tr",align:null},"the project URI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--module")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-m")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Python modules to be imported during the build process. Starwhale will export model handlers from these modules to the model package. This option supports set multiple times.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--runtime")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-r")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the URI of the ",(0,l.kt)("a",{parentName:"td",href:"/0.4.6/runtime/"},"Starwhale Runtime")," to use when running this command. If this option is used, this command will run in an independent python environment specified by the Starwhale Runtime; otherwise, it will run directly in the swcli's current python environment.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--name")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-n")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"model package name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--desc")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-d")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"model package description")))),(0,l.kt)("h2",{id:"copy"},"swcli model copy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] model copy [OPTIONS] <SRC> <DEST>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model copy")," copies from ",(0,l.kt)("inlineCode",{parentName:"p"},"SRC")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"DEST"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SRC")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"DEST")," are both ",(0,l.kt)("a",{parentName:"p",href:"/0.4.6/swcli/uri#model-dataset-runtime"},"model URIs"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--force")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, ",(0,l.kt)("inlineCode",{parentName:"td"},"DEST")," will be overwritten if it exists; otherwise, this command displays an error message.")))),(0,l.kt)("h2",{id:"diff"},"swcli model diff"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] model diff [OPTIONS] <MODEL VERSION> <MODEL VERSION>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model diff")," compares the difference between two versions of the same model."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MODEL VERSION")," is a ",(0,l.kt)("a",{parentName:"p",href:"/0.4.6/swcli/uri#model-dataset-runtime"},"model URI"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--show-details")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, outputs the detail information.")))),(0,l.kt)("h2",{id:"history"},"swcli model history"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] model history [OPTIONS] <MODEL>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model history")," outputs all history versions of the specified Starwhale Model."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MODEL")," is a ",(0,l.kt)("a",{parentName:"p",href:"/0.4.6/swcli/uri#model-dataset-runtime"},"model URI"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fullname")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"Show the full version name. Only the first 12 characters are shown if this option is false.")))),(0,l.kt)("h2",{id:"info"},"swcli model info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] model info [OPTIONS] <MODEL>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model info")," outputs detailed information about the specified Starwhale Model version."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MODEL")," is a ",(0,l.kt)("a",{parentName:"p",href:"/0.4.6/swcli/uri#model-dataset-runtime"},"model URI"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--output-filter")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-of")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Choice of [basic"),(0,l.kt)("td",{parentName:"tr",align:null},"model_yaml"),(0,l.kt)("td",{parentName:"tr",align:null},"manifest")))),(0,l.kt)("h2",{id:"list"},"swcli model list"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] model list [OPTIONS]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model list")," shows all Starwhale Models."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--project")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The URI of the project to list. Use the ",(0,l.kt)("a",{parentName:"td",href:"/0.4.6/swcli/uri#defaultProject"},"default project")," if not specified.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--fullname")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"Show the full version name. Only the first 12 characters are shown if this option is false.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--show-removed")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, include packages that are removed but not garbage collected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--page")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"The starting page number.  Server and cloud instances only.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--size")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of items in one page. Server and cloud instances only.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-fl")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Show only Starwhale Models that match specified filters. This option can be used multiple times in one command.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Filter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"Key-Value"),(0,l.kt)("td",{parentName:"tr",align:null},"The name prefix of models"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter name=mnist"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"owner")),(0,l.kt)("td",{parentName:"tr",align:null},"Key-Value"),(0,l.kt)("td",{parentName:"tr",align:null},"The model owner name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter owner=starwhale"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"latest")),(0,l.kt)("td",{parentName:"tr",align:null},"Flag"),(0,l.kt)("td",{parentName:"tr",align:null},"If specified, it shows only the latest version."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--filter latest"))))),(0,l.kt)("h2",{id:"recover"},"swcli model recover"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] model recover [OPTIONS] <MODEL>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model recover")," recovers previously removed Starwhale Models or versions."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MODEL")," is a ",(0,l.kt)("a",{parentName:"p",href:"/0.4.6/swcli/uri#model-dataset-runtime"},"model URI"),". If the version part of the URI is omitted, all removed versions are recovered."),(0,l.kt)("p",null,"Garbage-collected Starwhale Models or versions can not be recovered, as well as those are removed with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--force")," option."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--force")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, overwrite the Starwhale Model or version with the same name or version id.")))),(0,l.kt)("h2",{id:"remove"},"swcli model remove"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] model remove [OPTIONS] <MODEL>\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model remove")," removes the specified Starwhale Model or version."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MODEL")," is a ",(0,l.kt)("a",{parentName:"p",href:"/0.4.6/swcli/uri#model-dataset-runtime"},"model URI"),". If the version part of the URI is omitted, all versions are removed."),(0,l.kt)("p",null,"Removed Starwhale Models or versions can be recovered by ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model recover")," before garbage collection. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--force")," option to persistently remove a Starwhale Model or version."),(0,l.kt)("p",null,"Removed Starwhale Models or versions can be listed by ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model list --show-removed"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--force")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-f")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, persistently delete the Starwhale Model or version. It can not be recovered.")))),(0,l.kt)("h2",{id:"run"},"swcli model run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] model run [OPTIONS]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model run")," executes a model handler. Model run supports two modes to run: ",(0,l.kt)("a",{parentName:"p",href:"/0.4.6/swcli/uri#model-dataset-runtime"},"model URI")," and local development. Model URI mode needs a pre-built Starwhale Model Package. Local development model only needs the model src dir."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--workdir")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-w")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"For local development mode, the path of model src dir.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--uri")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-u")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"For model URI mode, the string of model uri.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--handler")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-h")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Runnable handler index or name, default is None, will use the first handler")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--runtime")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"the ",(0,l.kt)("a",{parentName:"td",href:"/0.4.6/runtime/"},"Starwhale Runtime")," URI to use when running this command. If this option is used, this command will run in an independent python environment specified by the Starwhale Runtime; otherwise, it will run directly in the swcli's current python environment.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--in-container")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"Use docker container to run the model. This option is only available for standalone instances. For server and cloud instances, a docker image is always used. If the runtime is a docker image, this option is always implied.")))),(0,l.kt)("h2",{id:"tag"},"swcli model tag"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] model tag [OPTIONS] <MODEL> [TAGS]...\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model tag")," attaches a tag to a specified Starwhale Model version. The tag can be used in a model URI instead of the version id."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MODEL")," is a ",(0,l.kt)("a",{parentName:"p",href:"/0.4.6/swcli/uri#model-dataset-runtime"},"model URI"),"."),(0,l.kt)("p",null,"Each model version can have any number of tags\uff0c but duplicated tag names are not allowed in the same model."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"model tag")," only works for the ",(0,l.kt)("a",{parentName:"strong",href:"/0.4.6/instances/standalone/"},"standalone instance"),".")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--remove")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-r")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"remove the tag if true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--quiet")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"-q")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"ignore errors, for example, removing tags that do not exist.")))))}u.isMDXComponent=!0}}]);