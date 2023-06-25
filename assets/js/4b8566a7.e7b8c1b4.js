"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[98582],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(r),h=n,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},36238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(83117),n=(r(67294),r(3905));const o={title:"Getting started with Starwhale Server"},l=void 0,i={unversionedId:"getting-started/server",id:"version-0.4.3/getting-started/server",title:"Getting started with Starwhale Server",description:"Install Starwhale Server",source:"@site/versioned_docs/version-0.4.3/getting-started/server.md",sourceDirName:"getting-started",slug:"/getting-started/server",permalink:"/docs/0.4.3/getting-started/server",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.3/getting-started/server.md",tags:[],version:"0.4.3",frontMatter:{title:"Getting started with Starwhale Server"},sidebar:"mainSidebar",previous:{title:"Getting started with Starwhale Standalone",permalink:"/docs/0.4.3/getting-started/standalone"},next:{title:"Getting started with Starwhale Cloud",permalink:"/docs/0.4.3/getting-started/cloud"}},s={},d=[{value:"Install Starwhale Server",id:"install-starwhale-server",level:2},{value:"Create your first project",id:"create-your-first-project",level:2},{value:"Login to the server",id:"login-to-the-server",level:3},{value:"Create a new project",id:"create-a-new-project",level:3},{value:"Build the dataset, model, and runtime on your local machine",id:"build-the-dataset-model-and-runtime-on-your-local-machine",level:2},{value:"Copy the dataset, the model, and the runtime to the server",id:"copy-the-dataset-the-model-and-the-runtime-to-the-server",level:2},{value:"Use the Web UI to run an evaluation",id:"use-the-web-ui-to-run-an-evaluation",level:2}],c={toc:d};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"install-starwhale-server"},"Install Starwhale Server"),(0,n.kt)("p",null,"To install Starwhale Server, see the ","[installation guide]"),(0,n.kt)("h2",{id:"create-your-first-project"},"Create your first project"),(0,n.kt)("h3",{id:"login-to-the-server"},"Login to the server"),(0,n.kt)("p",null,"Open your browser and enter your server's URL in the address bar. Login with your username(starwhale) and password(abcd1234)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"console-artifacts.gif",src:r(98136).Z,width:"2060",height:"1112"})),(0,n.kt)("h3",{id:"create-a-new-project"},"Create a new project"),(0,n.kt)("h2",{id:"build-the-dataset-model-and-runtime-on-your-local-machine"},"Build the dataset, model, and runtime on your local machine"),(0,n.kt)("p",null,"Follow step 1 to step 4 in ",(0,n.kt)("a",{parentName:"p",href:"standalone"},"Getting started with Starwhale Standalone")," to create:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a Starwhale model named mnist"),(0,n.kt)("li",{parentName:"ul"},"a Starwhale dataset named mnist"),(0,n.kt)("li",{parentName:"ul"},"a Starwhale runtime named pytorch")),(0,n.kt)("h2",{id:"copy-the-dataset-the-model-and-the-runtime-to-the-server"},"Copy the dataset, the model, and the runtime to the server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"swcli instance login --username <your username> --password <your password> --alias server <Your Server URL>\nswcli model copy mnist/version/latest server/project/demo\nswcli dataset copy mnist/version/latest server/project/demo\nswcli runtime copy pytorch/version/latest server/project/demo\n")),(0,n.kt)("h2",{id:"use-the-web-ui-to-run-an-evaluation"},"Use the Web UI to run an evaluation"),(0,n.kt)("p",null,'Navigate to the "demo" project in your browser and create a new one.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"console-create-job.gif",src:r(90869).Z,width:"2116",height:"1147"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Congratulations! You have completed the Starwhale Server Getting Started Guide.")))}u.isMDXComponent=!0},98136:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/console-artifacts-fd7bf6e54d06dc37d234019e769031e6.gif"},90869:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/console-create-job-b3f6012e26da81d411aa7624990a7087.gif"}}]);