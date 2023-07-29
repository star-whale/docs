"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[1416],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(a),p=r,m=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(3117),r=(a(7294),a(3905));const o={title:"Getting started with Starwhale Cloud"},i=void 0,l={unversionedId:"getting-started/cloud",id:"version-0.5.7/getting-started/cloud",title:"Getting started with Starwhale Cloud",description:"Starwhale Cloud is hosted on Aliyun with the domain name . In the futher, we will launch the service on AWS with the domain name . It's important to note that these are two separate instances that are not interconnected, and accounts and data are not shared. You can choose either one to get started.",source:"@site/versioned_docs/version-0.5.7/getting-started/cloud.md",sourceDirName:"getting-started",slug:"/getting-started/cloud",permalink:"/getting-started/cloud",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.7/getting-started/cloud.md",tags:[],version:"0.5.7",frontMatter:{title:"Getting started with Starwhale Cloud"},sidebar:"mainSidebar",previous:{title:"Getting started with Starwhale Server",permalink:"/getting-started/server"},next:{title:"Getting Started with Starwhale Runtime",permalink:"/getting-started/runtime"}},c={},u=[{value:"Sign Up for Starwhale Cloud and create your first project",id:"sign-up-for-starwhale-cloud-and-create-your-first-project",level:2},{value:"Build the dataset, model, and runtime on your local machine",id:"build-the-dataset-model-and-runtime-on-your-local-machine",level:2},{value:"Login to the cloud instance",id:"login-to-the-cloud-instance",level:2},{value:"Copy the dataset, model, and runtime to the cloud instance",id:"copy-the-dataset-model-and-runtime-to-the-cloud-instance",level:2},{value:"Run an evaluation with the web UI",id:"run-an-evaluation-with-the-web-ui",level:2}],s={toc:u};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Starwhale Cloud is hosted on Aliyun with the domain name ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.starwhale.cn"},"https://cloud.starwhale.cn"),". In the futher, we will launch the service on AWS with the domain name ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.starwhale.ai"},"https://cloud.starwhale.ai"),". It's important to note that these are two separate instances that are not interconnected, and accounts and data are not shared. You can choose either one to get started."),(0,r.kt)("p",null,"You need to install the ",(0,r.kt)("a",{parentName:"p",href:"../swcli"},"Starwhale Client (swcli)")," at first."),(0,r.kt)("h2",{id:"sign-up-for-starwhale-cloud-and-create-your-first-project"},"Sign Up for Starwhale Cloud and create your first project"),(0,r.kt)("p",null,"You can either directly log in with your GitHub or Weixin account or sign up for an account. You will be asked for an account name if you log in with your GitHub or Weixin account."),(0,r.kt)("p",null,"Then you can create a new project. In this tutorial, we will use the name ",(0,r.kt)("inlineCode",{parentName:"p"},"demo")," for the project name."),(0,r.kt)("h2",{id:"build-the-dataset-model-and-runtime-on-your-local-machine"},"Build the dataset, model, and runtime on your local machine"),(0,r.kt)("p",null,"Follow step 1 to step 4 in ",(0,r.kt)("a",{parentName:"p",href:"standalone"},"Getting started with Starwhale Standalone")," to create:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a Starwhale model named mnist"),(0,r.kt)("li",{parentName:"ul"},"a Starwhale dataset named mnist"),(0,r.kt)("li",{parentName:"ul"},"a Starwhale runtime named pytorch")),(0,r.kt)("h2",{id:"login-to-the-cloud-instance"},"Login to the cloud instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli instance login --username <your account name> --password <your password> --alias swcloud https://cloud.starwhale.cn\n")),(0,r.kt)("h2",{id:"copy-the-dataset-model-and-runtime-to-the-cloud-instance"},"Copy the dataset, model, and runtime to the cloud instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model copy mnist swcloud/project/<your account name>:demo\nswcli dataset copy mnist swcloud/project/<your account name>:demo\nswcli runtime copy pytorch swcloud/project/<your account name>:demo\n")),(0,r.kt)("h2",{id:"run-an-evaluation-with-the-web-ui"},"Run an evaluation with the web UI"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"console-create-job.gif",src:a(7558).Z,width:"2116",height:"1147"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congratulations! You have completed the Starwhale Cloud Getting Started Guide.")))}d.isMDXComponent=!0},7558:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/console-create-job-b3f6012e26da81d411aa7624990a7087.gif"}}]);