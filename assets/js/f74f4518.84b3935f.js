"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[7362],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,k=d["".concat(o,".").concat(u)]||d[u]||m[u]||l;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(3117),n=(r(7294),r(3905));const l={title:"swcli server"},i=void 0,s={unversionedId:"reference/swcli/server",id:"reference/swcli/server",title:"swcli server",description:"Overview",source:"@site/docs/reference/swcli/server.md",sourceDirName:"reference/swcli",slug:"/reference/swcli/server",permalink:"/next/reference/swcli/server",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/reference/swcli/server.md",tags:[],version:"current",frontMatter:{title:"swcli server"},sidebar:"mainSidebar",previous:{title:"swcli job",permalink:"/next/reference/swcli/job"},next:{title:"Utility Commands",permalink:"/next/reference/swcli/utilities"}},o={},p=[{value:"Overview",id:"overview",level:2},{value:"swcli server start",id:"start",level:2},{value:"Options",id:"start-params",level:3},{value:"Server start examples",id:"start-example",level:3},{value:"swcli server stop",id:"stop",level:2},{value:"swcli server status",id:"status",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] server <SUBCOMMAND> [ARGS]...\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"server")," command includes the following subcommands:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"start")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stop")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"status")," (",(0,n.kt)("inlineCode",{parentName:"li"},"ps"),")")),(0,n.kt)("h2",{id:"start"},"swcli server start"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] server start [OPTIONS]\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"server start")," command uses Docker and Docker-Compose to quickly start the Starwhale Server in a local environment."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Requirements: ",(0,n.kt)("inlineCode",{parentName:"li"},"Docker")," >= 19.03, ",(0,n.kt)("inlineCode",{parentName:"li"},"Docker-Compose")," >= v2. You can use the ",(0,n.kt)("inlineCode",{parentName:"li"},"swcli check")," command to check."),(0,n.kt)("li",{parentName:"ul"},"You need use ",(0,n.kt)("inlineCode",{parentName:"li"},"swcli server stop")," to close Starwhale Server."),(0,n.kt)("li",{parentName:"ul"},"For containers started by ",(0,n.kt)("inlineCode",{parentName:"li"},"server start"),", the restart policy is ",(0,n.kt)("inlineCode",{parentName:"li"},"restart=always"),". Even if the machine restarts, related containers will start automatically."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"server start")," renders docker compose yaml files in the  ",(0,n.kt)("inlineCode",{parentName:"li"},"~/.starwhale/.server directory"),". ",(0,n.kt)("inlineCode",{parentName:"li"},"docker compose")," commands can use this file for richer operations like viewing logs: ",(0,n.kt)("inlineCode",{parentName:"li"},"docker compose -f ~/.starwhale/.server/docker-compose.yaml logs -f."))),(0,n.kt)("h3",{id:"start-params"},"Options"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Option"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"-h"),"or",(0,n.kt)("inlineCode",{parentName:"td"},"--host")),(0,n.kt)("td",{parentName:"tr",align:null},"N"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,n.kt)("td",{parentName:"tr",align:null},"IP address bound by the Starwhale Server startup port, default is 127.0.0.1. If you want other machines to access, you can set it to 0.0.0.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"-p"),"or",(0,n.kt)("inlineCode",{parentName:"td"},"--port")),(0,n.kt)("td",{parentName:"tr",align:null},"N"),(0,n.kt)("td",{parentName:"tr",align:null},"Int"),(0,n.kt)("td",{parentName:"tr",align:null},"8082"),(0,n.kt)("td",{parentName:"tr",align:null},"Port bound by the Starwhale Server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"-e"),"or",(0,n.kt)("inlineCode",{parentName:"td"},"--env")),(0,n.kt)("td",{parentName:"tr",align:null},"N"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Set environment variables for Starwhale Server startup or runtime use, e.g. ",(0,n.kt)("inlineCode",{parentName:"td"},"SW_PYPI_INDEX_URL")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"SW_PYPI_EXTRA_INDEX_URL")," environment variables can change the Starwhale Server's PYPI source.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"-i"),"or",(0,n.kt)("inlineCode",{parentName:"td"},"--server-image")),(0,n.kt)("td",{parentName:"tr",align:null},"N"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Docker Image for Starwhale Server. If not specified, the Starwhale Server Image corresponding to the swcli command line version will be used.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--detach/--no-detach")),(0,n.kt)("td",{parentName:"tr",align:null},"N"),(0,n.kt)("td",{parentName:"tr",align:null},"Bool"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--detach")),(0,n.kt)("td",{parentName:"tr",align:null},"Run Starwhale Server in the background.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"--dry-run")),(0,n.kt)("td",{parentName:"tr",align:null},"N"),(0,n.kt)("td",{parentName:"tr",align:null},"Bool"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"render compose yaml file and dry run docker compose.")))),(0,n.kt)("h3",{id:"start-example"},"Server start examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Start Starwhale Server with default settings, then you can visit http://127.0.0.1:8082 to use Starwhale Server.\nswcli server start\n\n# Start Starwhale Server with custom Server image.\nswcli server start -i docker-registry.starwhale.cn/star-whale/server:latest\n\n# Start Starwhale Server with custom host and port.\nswcli server start --port 18082 --host 0.0.0.0\n\n# Start Starwhale Server in the foreground and custom environment variables for pypi.\nswcli server start --no-detach -e SW_PYPI_INDEX_URL=https://pypi.tuna.tsinghua.edu.cn/simple -e SW_PYPI_EXTRA_INDEX_URL=https://mirrors.aliyun.com/pypi/simple\n")),(0,n.kt)("h2",{id:"stop"},"swcli server stop"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] server stop\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"server stop")," command will stop containers started by ",(0,n.kt)("inlineCode",{parentName:"p"},"swcli server start")," and close the Starwhale Server service."),(0,n.kt)("h2",{id:"status"},"swcli server status"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] server status\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"server status")," command shows the status of Starwhale Server related containers. The ",(0,n.kt)("inlineCode",{parentName:"p"},"swcli server ps")," command has the same effect."))}m.isMDXComponent=!0}}]);