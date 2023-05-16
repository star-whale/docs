"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[6768],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},15521:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(83117),r=(a(67294),a(3905));const o={title:"Getting started with Starwhale Cloud"},l=void 0,i={unversionedId:"getting-started/cloud",id:"version-0.4.2/getting-started/cloud",title:"Getting started with Starwhale Cloud",description:"Starwhale Cloud is hosted on AWS and Aliyun. These are two independent instances. Accounts and data are not shared. You can choose anyone you like.",source:"@site/versioned_docs/version-0.4.2/getting-started/cloud.md",sourceDirName:"getting-started",slug:"/getting-started/cloud",permalink:"/docs/0.4.2/getting-started/cloud",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.2/getting-started/cloud.md",tags:[],version:"0.4.2",frontMatter:{title:"Getting started with Starwhale Cloud"},sidebar:"mainSidebar",previous:{title:"Getting started with Starwhale Server",permalink:"/docs/0.4.2/getting-started/server"},next:{title:"Getting Started with Starwhale Runtime",permalink:"/docs/0.4.2/getting-started/runtime"}},c={},s=[{value:"Sign Up for Starwhale Cloud and create your first project",id:"sign-up-for-starwhale-cloud-and-create-your-first-project",level:2},{value:"Build the dataset, model, and runtime on your local machine",id:"build-the-dataset-model-and-runtime-on-your-local-machine",level:2},{value:"Login to the cloud instance",id:"login-to-the-cloud-instance",level:2},{value:"Copy the dataset, model, and runtime to the cloud instance",id:"copy-the-dataset-model-and-runtime-to-the-cloud-instance",level:2},{value:"Run an evaluation with the web UI",id:"run-an-evaluation-with-the-web-ui",level:2}],u={toc:s};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Starwhale Cloud is hosted on ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.starwhale.ai"},"AWS")," and ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.starwhale.cn"},"Aliyun"),". These are two independent instances. Accounts and data are not shared. You can choose anyone you like."),(0,r.kt)("p",null,"You need to install the ",(0,r.kt)("a",{parentName:"p",href:"../swcli"},"Starwhale Client (SWCLI)")," at first."),(0,r.kt)("h2",{id:"sign-up-for-starwhale-cloud-and-create-your-first-project"},"Sign Up for Starwhale Cloud and create your first project"),(0,r.kt)("p",null,"You can either directly log in with your GitHub or Google account or sign up for an account. You will be asked for an account name if you log in with your GitHub or Google account. For more information, see the ",(0,r.kt)("a",{parentName:"p",href:"../starwhale-cloud/index"},"Starwhale Cloud user guide - Create your account")),(0,r.kt)("p",null,"Then you can create a new project. In this tutorial, we will use the name ",(0,r.kt)("inlineCode",{parentName:"p"},"demo")," for the project name."),(0,r.kt)("h2",{id:"build-the-dataset-model-and-runtime-on-your-local-machine"},"Build the dataset, model, and runtime on your local machine"),(0,r.kt)("p",null,"Follow step 1 to step 4 in ",(0,r.kt)("a",{parentName:"p",href:"standalone"},"Getting started with Starwhale Standalone")," to create:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a Starwhale model named mnist"),(0,r.kt)("li",{parentName:"ul"},"a Starwhale dataset named mnist"),(0,r.kt)("li",{parentName:"ul"},"a Starwhale runtime named pytorch")),(0,r.kt)("h2",{id:"login-to-the-cloud-instance"},"Login to the cloud instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli instance login --username <your account name> --password <your password> --alias swcloud https://cloud.starwhale.ai\n# replace the URL with https://cloud.starwhale.cn if you choose to use Starwhale Cloud CN\n")),(0,r.kt)("h2",{id:"copy-the-dataset-model-and-runtime-to-the-cloud-instance"},"Copy the dataset, model, and runtime to the cloud instance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model copy mnist/version/latest swcloud/project/demo\nswcli dataset copy mnist/version/latest swcloud/project/demo\nswcli runtime copy pytorch/version/latest swcloud/project/demo\n")),(0,r.kt)("h2",{id:"run-an-evaluation-with-the-web-ui"},"Run an evaluation with the web UI"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"console-create-job.gif",src:a(25169).Z,width:"2116",height:"1147"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congratulations! You have completed the Starwhale Cloud Getting Started Guide.")))}d.isMDXComponent=!0},25169:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/console-create-job-b3f6012e26da81d411aa7624990a7087.gif"}}]);