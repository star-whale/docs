"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[8592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>N});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),k=o(n),N=r,s=k["".concat(p,".").concat(N)]||k[N]||u[N]||l;return n?a.createElement(s,i(i({ref:t},d),{},{components:n})):a.createElement(s,i({ref:t},d))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},16451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>o});var a=n(83117),r=(n(67294),n(3905));const l={title:"swcli runtime"},i=void 0,m={unversionedId:"reference/swcli/runtime",id:"reference/swcli/runtime",title:"swcli runtime",description:"Overview",source:"@site/docs/reference/swcli/runtime.md",sourceDirName:"reference/swcli",slug:"/reference/swcli/runtime",permalink:"/docs/next/reference/swcli/runtime",draft:!1,editUrl:"https://github.com/star-whale/starwhale/tree/main/docs/docs/reference/swcli/runtime.md",tags:[],version:"current",frontMatter:{title:"swcli runtime"},sidebar:"mainSidebar",previous:{title:"swcli dataset",permalink:"/docs/next/reference/swcli/dataset"},next:{title:"swcli job",permalink:"/docs/next/reference/swcli/job"}},p={},o=[{value:"Overview",id:"overview",level:2},{value:"swcli runtime activate",id:"activate",level:2},{value:"swcli runtime build",id:"build",level:2},{value:"swcli runtime copy",id:"copy",level:2},{value:"swcli runtime dockerize",id:"dockerize",level:2},{value:"swcli runtime history",id:"history",level:2},{value:"swcli runtime info",id:"info",level:2},{value:"swcli runtime list",id:"list",level:2},{value:"swcli runtime recover",id:"recover",level:2},{value:"swcli runtime remove",id:"remove",level:2},{value:"swcli runtime tag",id:"tag",level:2}],d={toc:o};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] runtime [OPTIONS] <SUBCOMMAND> [ARGS]...\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime")," command includes the following subcommands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"activate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"build")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"copy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dockerize")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"history")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"recover")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remove")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tag"))),(0,r.kt)("h2",{id:"activate"},"swcli runtime activate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] runtime activate [OPTIONS] <RUNTIME>\n")),(0,r.kt)("p",null,"Like ",(0,r.kt)("inlineCode",{parentName:"p"},"source venv/bin/activate")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"conda activate xxx"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime activate")," setups a new python environment according to the settings of the specified runtime. When the current shell is closed or switched to another one, you need to reactivate the runtime."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RUNTIME")," is a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/swcli/uri#model-dataset-runtime"},"Runtime URI"),"."),(0,r.kt)("p",null,"If you want to quit the activated runtime environment, please run ",(0,r.kt)("inlineCode",{parentName:"p"},"venv deactivate")," in the venv environment or ",(0,r.kt)("inlineCode",{parentName:"p"},"conda deactivate")," in the conda environment."),(0,r.kt)("h2",{id:"build"},"swcli runtime build"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] runtime build [OPTIONS] <WORKDIR>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime build")," and creates a new Starwhale Runtime from a conda enviroment, a virtualenv environment, or a docker image."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--project")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"-p")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/swcli/uri#defaultProject"},"the default project")),(0,r.kt)("td",{parentName:"tr",align:null},"the project URI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--conda")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the conda environment to build from"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--conda-prefix")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The path of the conda environment to build from"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--venv")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The path of the virtualenv environment to build from"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--docker")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The docker image to build from"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"copy"},"swcli runtime copy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] runtime copy [OPTIONS] <SRC> <DEST>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime copy")," copies from ",(0,r.kt)("inlineCode",{parentName:"p"},"SRC")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"DEST"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SRC")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DEST")," are both ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/swcli/uri#model-dataset-runtime"},"Runtime URIs"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--force")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"-f")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, ",(0,r.kt)("inlineCode",{parentName:"td"},"DEST")," will be overwritten if it exists; otherwise, this command displays an error message.")))),(0,r.kt)("h2",{id:"dockerize"},"swcli runtime dockerize"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] runtime dockerize [OPTIONS] <RUNTIME>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime dockerize")," generates a docker image based on the specified runtime. Starwhale uses ",(0,r.kt)("inlineCode",{parentName:"p"},"docker buildx")," to create the image. Docker 19.03 or later is required to run this command."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RUNTIME")," is a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/swcli/uri#model-dataset-runtime"},"Runtime URI"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--tag")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"-t")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The tag of the docker image. This option can be repeated multiple times.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--push")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, push the image to the docker registry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--platform")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"amd64"),(0,r.kt)("td",{parentName:"tr",align:null},"The target platform\uff0ccan be either amd64 or arm64. This option can be repeated multiple times to create a multi-platform image.")))),(0,r.kt)("h2",{id:"history"},"swcli runtime history"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] runtime history [OPTIONS] <RUNTIME>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime history")," outputs all history versions of the specified Starwhale Runtime."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RUNTIME")," is a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/swcli/uri#model-dataset-runtime"},"Runtime URI"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--fullname")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"Show the full version name. Only the first 12 characters are shown if this option is false.")))),(0,r.kt)("h2",{id:"info"},"swcli runtime info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] runtime info [OPTIONS] <RUNTIME>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime info")," outputs detailed information about a specified Starwhale Runtime version."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RUNTIME")," is a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/swcli/uri#model-dataset-runtime"},"Runtime URI"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--output-filter")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"-of")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Choice of [basic"),(0,r.kt)("td",{parentName:"tr",align:null},"runtime_yaml"),(0,r.kt)("td",{parentName:"tr",align:null},"manifest")))),(0,r.kt)("h2",{id:"list"},"swcli runtime list"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] runtime list [OPTIONS]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime list")," shows all Starwhale Runtimes."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--project")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The URI of the project to list. Use the ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/swcli/uri#defaultProject"},"default project")," if not specified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--fullname")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"Show the full version name. Only the first 12 characters are shown if this option is false.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--show-removed")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"-sr")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, include runtimes that are removed but not garbage collected.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--page")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"The starting page number.  Server and cloud instances only.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--size")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of items in one page. Server and cloud instances only.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--filter")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"-fl")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Show only Starwhale Runtimes that match specified filters. This option can be used multiple times in one command.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Filter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"Key-Value"),(0,r.kt)("td",{parentName:"tr",align:null},"The name prefix of runtimes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--filter name=pytorch"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"owner")),(0,r.kt)("td",{parentName:"tr",align:null},"Key-Value"),(0,r.kt)("td",{parentName:"tr",align:null},"The runtime owner name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--filter owner=starwhale"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"latest")),(0,r.kt)("td",{parentName:"tr",align:null},"Flag"),(0,r.kt)("td",{parentName:"tr",align:null},"If specified, it shows only the latest version."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--filter latest"))))),(0,r.kt)("h2",{id:"recover"},"swcli runtime recover"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] runtime recover [OPTIONS] <RUNTIME>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime recover")," can recover previously removed Starwhale Runtimes or versions."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RUNTIME")," is a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/swcli/uri#model-dataset-runtime"},"Runtime URI"),". If the version part of the URI is omitted, all removed versions are recovered."),(0,r.kt)("p",null,"Garbage-collected Starwhale Runtimes or versions can not be recovered, as well as those are removed with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--force")," option."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--force")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"-f")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, overwrite the Starwhale Runtime or version with the same name or version id.")))),(0,r.kt)("h2",{id:"remove"},"swcli runtime remove"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] runtime remove [OPTIONS] <RUNTIME>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime remove")," removes the specified Starwhale Runtime or version."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RUNTIME")," is a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/swcli/uri#model-dataset-runtime"},"Runtime URI"),". If the version part of the URI is omitted, all versions are removed."),(0,r.kt)("p",null,"Removed Starwhale Runtimes or versions can be recovered by ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli runtime recover")," before garbage collection. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-- force")," option to persistently remove a Starwhale Runtime or version."),(0,r.kt)("p",null,"Removed Starwhale Runtimes or versions can be listed by ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli runtime list --show-removed"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--force")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"-f")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, persistently delete the Starwhale Runtime or version. It can not be recovered.")))),(0,r.kt)("h2",{id:"tag"},"swcli runtime tag"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] runtime tag [OPTIONS] <RUNTIME> [TAGS]...\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime tag")," attaches a tag to a specified Starwhale Runtime version. The tag can be used in a runtime URI instead of the version id."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RUNTIME")," is a ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/swcli/uri#model-dataset-runtime"},"Runtime URI"),"."),(0,r.kt)("p",null,"Each runtime version can have any number of tags\uff0c but duplicated tag names are not allowed in the same runtime."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"runtime tag")," only works for the ",(0,r.kt)("a",{parentName:"strong",href:"/docs/next/instances/standalone/"},"standalone instance"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--remove")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"-r")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"remove the tag if true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--quiet")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"-q")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"ignore errors, for example, removing tags that do not exist.")))))}u.isMDXComponent=!0}}]);