"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[6209],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(r),m=n,d=h["".concat(i,".").concat(m)]||h[m]||u[m]||l;return r?a.createElement(d,s(s({ref:t},p),{},{components:r})):a.createElement(d,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},83438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(83117),n=(r(67294),r(3905));const l={title:'Launch Starwhale Server with the "swcli server start" command'},s=void 0,o={unversionedId:"server/installation/server-start",id:"server/installation/server-start",title:'Launch Starwhale Server with the "swcli server start" command',description:"Prerequisites",source:"@site/docs/server/installation/server-start.md",sourceDirName:"server/installation",slug:"/server/installation/server-start",permalink:"/next/server/installation/server-start",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/server/installation/server-start.md",tags:[],version:"current",frontMatter:{title:'Launch Starwhale Server with the "swcli server start" command'},sidebar:"mainSidebar",previous:{title:"Starwhale Server Installation Guide",permalink:"/next/server/installation/"},next:{title:"Install Starwhale Server with Minikube",permalink:"/next/server/installation/minikube"}},i={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Launch Starwhale Server",id:"launch-starwhale-server",level:2},{value:"Stop Starwhale Server",id:"stop-starwhale-server",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../swcli/installation"},"Starwhale Client")," 0.6.7+"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," 19.03+"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose")," 2.0.0+"),(0,n.kt)("li",{parentName:"ul"},"Operating System: Linux or macOS")),(0,n.kt)("p",null,"If you are unsure whether your dependencies meet the requirements, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"swcli check")," command to check, and the normal output should be as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli check\n\u2705 Docker 24.0.7\n\u2705 Docker Compose 2.21.0\n\u2705 Conda 22.9.0\n")),(0,n.kt)("h2",{id:"launch-starwhale-server"},"Launch Starwhale Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"swcli server start\n")),(0,n.kt)("p",null,"After executing the command, it will pull the Starwhale Server Docker image consistent with the ",(0,n.kt)("inlineCode",{parentName:"p"},"swcli")," version and start the Starwhale Server related container services. Finally, it will open the browser ",(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:8008"},"http://127.0.0.1:8008")," page, where you can log in to the Starwhale Server with the default username ",(0,n.kt)("inlineCode",{parentName:"p"},"starwhale")," and password ",(0,n.kt)("inlineCode",{parentName:"p"},"abcd1234"),"."),(0,n.kt)("p",null,"When the server is successfully started, you will see a prompt similar to the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli server start\n\ud83d\udef8 render compose yaml file: /home/tianwei/.starwhale/.server/docker-compose.yaml\n\ud83c\udfd3 start Starwhale Server by docker compose\n Container starwhale_local-db-1  Created\n Container starwhale_local-server-1  Recreate\n Container starwhale_local-server-1  Recreated\n Container starwhale_local-db-1  Starting\n Container starwhale_local-db-1  Started\n Container starwhale_local-db-1  Waiting\n Container starwhale_local-db-1  Healthy\n Container starwhale_local-server-1  Starting\n Container starwhale_local-server-1  Started\nStarwhale Server is running in the background.\n         \ud83c\udf4e stop: swcli server stop\n         \ud83c\udf4c check status: swcli server status\n         \ud83c\udf49 more compose command: docker compose -f /home/tianwei/.starwhale/.server/docker-compose.yaml sub-command\n         \ud83e\udd55 visit web:\n")),(0,n.kt)("p",null,"If there are any issues during the startup process, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker compose -f ~/.starwhale/.server/docker-compose.yaml logs")," command to view the logs, or you can check the service status through the ",(0,n.kt)("inlineCode",{parentName:"p"},"swcli server status")," command."),(0,n.kt)("h2",{id:"stop-starwhale-server"},"Stop Starwhale Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"swcli server stop\n")),(0,n.kt)("p",null,"After executing the command, it will stop the previously launched Starwhale Server service."))}u.isMDXComponent=!0}}]);