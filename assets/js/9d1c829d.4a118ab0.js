"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[8279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,d=h["".concat(s,".").concat(p)]||h[p]||m[p]||i;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(3117),r=(n(7294),n(3905));const i={title:"Getting Started with Starwhale Runtime"},l=void 0,o={unversionedId:"getting-started/runtime",id:"getting-started/runtime",title:"Getting Started with Starwhale Runtime",description:"This article demonstrates how to build a Starwhale Runtime of the Pytorch environment and how to use it. This runtime can meet the dependency requirements of the six examples in Starwhale example/runtime/pytorch.",source:"@site/docs/getting-started/runtime.md",sourceDirName:"getting-started",slug:"/getting-started/runtime",permalink:"/next/getting-started/runtime",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/getting-started/runtime.md",tags:[],version:"current",frontMatter:{title:"Getting Started with Starwhale Runtime"},sidebar:"mainSidebar",previous:{title:"Getting started with Starwhale Cloud",permalink:"/next/getting-started/cloud"},next:{title:"Starwhale Common Concepts",permalink:"/next/concepts/"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build Starwhale Runtime",id:"build-starwhale-runtime",level:2},{value:"Use Starwhale Runtime in the standalone instance",id:"use-starwhale-runtime-in-the-standalone-instance",level:2},{value:"Use Starwhale Runtime in the shell",id:"use-starwhale-runtime-in-the-shell",level:3},{value:"Use Starwhale Runtime in swcli",id:"use-starwhale-runtime-in-swcli",level:3},{value:"Copy Starwhale Runtime to another instance",id:"copy-starwhale-runtime-to-another-instance",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article demonstrates how to build a Starwhale Runtime of the Pytorch environment and how to use it. This runtime can meet the dependency requirements of the six examples in Starwhale: mnist, speech commands, nmt, cifar10, ag_news, and PennFudan. Links to relevant code: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/runtime/pytorch"},"example/runtime/pytorch"),"."),(0,r.kt)("p",null,"You can learn the following things from this tutorial:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to build a Starwhale Runtime."),(0,r.kt)("li",{parentName:"ul"},"How to use a Starwhale Runtime in different scenarios."),(0,r.kt)("li",{parentName:"ul"},"How to release a Starwhale Runtime.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Python 3.7+"),(0,r.kt)("li",{parentName:"ul"},"Linux or macOS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/next/swcli/"},"Starwhale Client")," 0.5.6+")),(0,r.kt)("p",null,"Run the following command to clone the example code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/star-whale/starwhale.git\ncd starwhale/example/runtime/pytorch # for users in the mainland of China, use pytorch-cn-mirror instead.\n")),(0,r.kt)("h2",{id:"build-starwhale-runtime"},"Build Starwhale Runtime"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"\u276f swcli -vvv runtime build --yaml runtime.yaml\n")),(0,r.kt)("h2",{id:"use-starwhale-runtime-in-the-standalone-instance"},"Use Starwhale Runtime in the standalone instance"),(0,r.kt)("h3",{id:"use-starwhale-runtime-in-the-shell"},"Use Starwhale Runtime in the shell"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"# Activate the runtime\nswcli runtime activate pytorch\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"swcli runtime activate")," will download all python dependencies of the runtime, which may take a long time."),(0,r.kt)("p",null,"All dependencies are ready in your python environment when the runtime is activated. It is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"source venv/bin/activate")," of virtualenv or the ",(0,r.kt)("inlineCode",{parentName:"p"},"conda activate")," command of conda. If you close the shell or switch to another shell, you need to reactivate the runtime."),(0,r.kt)("h3",{id:"use-starwhale-runtime-in-swcli"},"Use Starwhale Runtime in swcli"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"# Use the runtime when building a Starwhale Model\nswcli model build . --runtime pytorch\n# Use the runtime when building a Starwhale Dataset\nswcli dataset build --yaml /path/to/dataset.yaml --runtime pytorch\n# Run a model evaluation with the runtime\nswcli model run --uri mnist/version/v0 --dataset mnist --runtime pytorch\n")),(0,r.kt)("h2",{id:"copy-starwhale-runtime-to-another-instance"},"Copy Starwhale Runtime to another instance"),(0,r.kt)("p",null,"You can copy the runtime to a server/cloud instance, which can then be used in the server/cloud instance or downloaded by other users."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"# Copy the runtime to a server instance named 'pre-k8s'\n\u276f swcli runtime copy pytorch cloud://pre-k8s/project/starwhale\n")))}m.isMDXComponent=!0}}]);