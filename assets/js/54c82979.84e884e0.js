"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[6329],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||l;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5262:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(3117),r=(a(7294),a(3905));const l={title:"Getting started"},o=void 0,i={unversionedId:"getting-started/index",id:"getting-started/index",title:"Getting started",description:"Each deployment of Starwhale is called an instance. All instances can be managed by the Starwhale Client (swcli).",source:"@site/docs/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/next/getting-started/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/getting-started/index.md",tags:[],version:"current",frontMatter:{title:"Getting started"},sidebar:"mainSidebar",previous:{title:"What is Starwhale",permalink:"/next/"},next:{title:"Getting started with Starwhale Standalone",permalink:"/next/getting-started/standalone"}},s={},u=[],d={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Each deployment of Starwhale is called an instance. All instances can be managed by the Starwhale Client (swcli)."),(0,r.kt)("p",null,"You can start using Starwhale with one of the following instance types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Starwhale Standalone")," - Rather than a running service, Starwhale Standalone is actually a repository that resides in your local file system. It is created and managed by the Starwhale Client (swcli). You only need to install swcli to use it. Currently, each user on a single machine can have only ONE Starwhale Standalone instance. We recommend you use the Starwhale Standalone to build and test your datasets, runtime, and models before pushing them to Starwhale Server/Cloud instances."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Starwhale Server")," - Starwhale Server is a service deployed on your local server. Besides text-only results from the Starwhale Client (swcli), Starwhale Server provides Web UI for you to manage your datasets and models, evaluate your models in your local Kubernetes cluster, and review the evaluation results."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Starwhale Cloud")," - Starwhale Cloud is a managed service hosted on public clouds. By registering an account on ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn"},"https://cloud.starwhale.cn"),', you are ready to use Starwhale without needing to install, operate, and maintain your own instances. Starwhale Cloud also provides public resources for you to download, like datasets, runtimes, and models. Check the "starwhale/public" project on Starwhale Cloud for more details.')),(0,r.kt)("p",null,"When choosing which instance type to use, consider the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Instance Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Deployment location"),(0,r.kt)("th",{parentName:"tr",align:null},"Maintained by"),(0,r.kt)("th",{parentName:"tr",align:null},"User Interface"),(0,r.kt)("th",{parentName:"tr",align:null},"Scalability"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Starwhale Standalone"),(0,r.kt)("td",{parentName:"tr",align:null},"Your laptop or any server in your data center"),(0,r.kt)("td",{parentName:"tr",align:null},"Not required"),(0,r.kt)("td",{parentName:"tr",align:null},"Command line"),(0,r.kt)("td",{parentName:"tr",align:null},"Not scalable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Starwhale Server"),(0,r.kt)("td",{parentName:"tr",align:null},"Your data center"),(0,r.kt)("td",{parentName:"tr",align:null},"Yourself"),(0,r.kt)("td",{parentName:"tr",align:null},"Web UI and command line"),(0,r.kt)("td",{parentName:"tr",align:null},"Scalable, depends on your Kubernetes cluster")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Starwhale Cloud"),(0,r.kt)("td",{parentName:"tr",align:null},"Public cloud, like AWS or Aliyun"),(0,r.kt)("td",{parentName:"tr",align:null},"the Starwhale Team"),(0,r.kt)("td",{parentName:"tr",align:null},"Web UI and command line"),(0,r.kt)("td",{parentName:"tr",align:null},"Scalable, but currently limited by the freely available resource on the cloud")))),(0,r.kt)("p",null,"Depending on your instance type, there are three getting-started guides available for you:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"standalone"},"Getting started with Starwhale Standalone")," - This guide helps you run an MNIST evaluation on your desktop PC/laptop. It is the fastest and simplest way to get started with Starwhale."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"server"},"Getting started with Starwhale Server")," - This guide helps you install Starwhale Server in your private data center and run an MNIST evaluation. At the end of the tutorial, you will have a Starwhale Server instance where you can run model evaluations on and manage your datasets and models."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"cloud"},"Getting started with Starwhale Cloud")," - This guide helps you create an account on Starwhale Cloud and run an MNIST evaluation. It is the easiest way to experience all Starwhale features.")))}c.isMDXComponent=!0}}]);