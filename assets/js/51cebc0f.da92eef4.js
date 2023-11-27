"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[8220],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,v=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?n.createElement(v,i(i({ref:r},p),{},{components:t})):n.createElement(v,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9799:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=t(3117),o=(t(7294),t(3905));const a={title:"Install Starwhale Server with Docker Compose"},i=void 0,s={unversionedId:"server/installation/docker-compose",id:"version-0.6.5/server/installation/docker-compose",title:"Install Starwhale Server with Docker Compose",description:"Prerequisites",source:"@site/versioned_docs/version-0.6.5/server/installation/docker-compose.md",sourceDirName:"server/installation",slug:"/server/installation/docker-compose",permalink:"/server/installation/docker-compose",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.5/server/installation/docker-compose.md",tags:[],version:"0.6.5",frontMatter:{title:"Install Starwhale Server with Docker Compose"},sidebar:"mainSidebar",previous:{title:"Starwhale Server Environment Example",permalink:"/server/installation/starwhale_env"},next:{title:"Controller Admin Settings",permalink:"/server/guides/server_admin"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Start up the server",id:"start-up-the-server",level:3}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docker >= 19.03"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/compose-plugin/"},"Docker Compose Plugin")," >= 2.3"),(0,o.kt)("li",{parentName:"ul"},"x86-64 System(Linux)")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"start-up-the-server"},"Start up the server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/star-whale/starwhale/main/docker/compose/compose.yaml\nGLOBAL_IP=${your_accessible_ip_for_server} ; docker compose up\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GLOBAL_IP")," is the ip for Controller which could be accessed by all ",(0,o.kt)("inlineCode",{parentName:"p"},"swcli")," both inside docker containers and other user machines."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"compose.yaml")," contains Starwhale Controller/MySQL/MinIO services. Touch a ",(0,o.kt)("inlineCode",{parentName:"p"},"compose.override.yaml"),", as its name implies, can contain ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/reference/#specifying-multiple-compose-files"},"configuration overrides")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"compose.yaml"),". The available configurations are specified ",(0,o.kt)("a",{parentName:"p",href:"starwhale_env"},"here")))}u.isMDXComponent=!0}}]);