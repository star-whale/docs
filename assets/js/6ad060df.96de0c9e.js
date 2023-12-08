"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[62201],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),c=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(t),m=n,d=h["".concat(i,".").concat(m)]||h[m]||u[m]||l;return t?a.createElement(d,s(s({ref:r},p),{},{components:t})):a.createElement(d,s({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=h;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},10818:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(83117),n=(t(67294),t(3905));const l={title:'Launch Starwhale Server with the "swcli server start" command'},s=void 0,o={unversionedId:"server/installation/server-start",id:"version-0.6.7/server/installation/server-start",title:'Launch Starwhale Server with the "swcli server start" command',description:"Prerequisites",source:"@site/versioned_docs/version-0.6.7/server/installation/server-start.md",sourceDirName:"server/installation",slug:"/server/installation/server-start",permalink:"/server/installation/server-start",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.7/server/installation/server-start.md",tags:[],version:"0.6.7",frontMatter:{title:'Launch Starwhale Server with the "swcli server start" command'},sidebar:"mainSidebar",previous:{title:"Starwhale Server Installation Guide",permalink:"/server/installation/"},next:{title:"Install Starwhale Server with Minikube",permalink:"/server/installation/minikube"}},i={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Launch Starwhale Server",id:"launch-starwhale-server",level:2},{value:"Stop Starwhale Server",id:"stop-starwhale-server",level:2}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../swcli/installation"},"Starwhale Client")," 0.6.7+"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," 19.03+"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose")," 2.0.0+"),(0,n.kt)("li",{parentName:"ul"},"Operating System: Linux or macOS")),(0,n.kt)("p",null,"If you are unsure whether your dependencies meet the requirements, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"swcli check")," command to check, and the normal output should be as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli check\n\u2705 Docker 24.0.7\n\u2705 Docker Compose 2.21.0\n\u2705 Conda 22.9.0\n")),(0,n.kt)("h2",{id:"launch-starwhale-server"},"Launch Starwhale Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"swcli server start\n")),(0,n.kt)("p",null,"After executing the command, it will pull the Starwhale Server Docker image consistent with the ",(0,n.kt)("inlineCode",{parentName:"p"},"swcli")," version and start the Starwhale Server related container services. Finally, it will open the browser ",(0,n.kt)("a",{parentName:"p",href:"http://127.0.0.1:8008"},"http://127.0.0.1:8008")," page, where you can log in to the Starwhale Server with the default username ",(0,n.kt)("inlineCode",{parentName:"p"},"starwhale")," and password ",(0,n.kt)("inlineCode",{parentName:"p"},"abcd1234"),"."),(0,n.kt)("p",null,"When the server is successfully started, you will see a prompt similar to the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli server start\n\ud83d\udef8 render compose yaml file: /home/tianwei/.starwhale/.server/docker-compose.yaml\n\ud83c\udfd3 start Starwhale Server by docker compose\n Container starwhale_local-db-1  Created\n Container starwhale_local-server-1  Recreate\n Container starwhale_local-server-1  Recreated\n Container starwhale_local-db-1  Starting\n Container starwhale_local-db-1  Started\n Container starwhale_local-db-1  Waiting\n Container starwhale_local-db-1  Healthy\n Container starwhale_local-server-1  Starting\n Container starwhale_local-server-1  Started\nStarwhale Server is running in the background.\n         \ud83c\udf4e stop: swcli server stop\n         \ud83c\udf4c check status: swcli server status\n         \ud83c\udf49 more compose command: docker compose -f /home/tianwei/.starwhale/.server/docker-compose.yaml sub-command\n         \ud83e\udd55 visit web:\n")),(0,n.kt)("p",null,"If there are any issues during the startup process, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker compose -f ~/.starwhale/.server/docker-compose.yaml logs")," command to view the logs, or you can check the service status through the ",(0,n.kt)("inlineCode",{parentName:"p"},"swcli server status")," command."),(0,n.kt)("h2",{id:"stop-starwhale-server"},"Stop Starwhale Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"swcli server stop\n")),(0,n.kt)("p",null,"After executing the command, it will stop the previously launched Starwhale Server service."))}u.isMDXComponent=!0}}]);