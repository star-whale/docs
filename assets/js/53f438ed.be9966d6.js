"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,d=h["".concat(s,".").concat(p)]||h[p]||m[p]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(3117),a=(n(7294),n(3905));const i={title:"Getting Started with Starwhale Runtime"},l=void 0,o={unversionedId:"getting-started/runtime",id:"version-0.5.0/getting-started/runtime",title:"Getting Started with Starwhale Runtime",description:"This article demonstrates how to build a Starwhale Runtime of the Pytorch environment and how to use it. This runtime can meet the dependency requirements of the six examples in Starwhale example/runtime/pytorch.",source:"@site/versioned_docs/version-0.5.0/getting-started/runtime.md",sourceDirName:"getting-started",slug:"/getting-started/runtime",permalink:"/0.5.0/getting-started/runtime",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.0/getting-started/runtime.md",tags:[],version:"0.5.0",frontMatter:{title:"Getting Started with Starwhale Runtime"},sidebar:"mainSidebar",previous:{title:"Getting started with Starwhale Cloud",permalink:"/0.5.0/getting-started/cloud"},next:{title:"Starwhale Common Concepts",permalink:"/0.5.0/concepts/"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build Starwhale Runtime",id:"build-starwhale-runtime",level:2},{value:"Use Starwhale Runtime in the standalone instance",id:"use-starwhale-runtime-in-the-standalone-instance",level:2},{value:"Use Starwhale Runtime in the shell",id:"use-starwhale-runtime-in-the-shell",level:3},{value:"Use Starwhale Runtime in SWCLI",id:"use-starwhale-runtime-in-swcli",level:3},{value:"Copy Starwhale Runtime to another instance",id:"copy-starwhale-runtime-to-another-instance",level:2}],c={toc:u};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This article demonstrates how to build a Starwhale Runtime of the Pytorch environment and how to use it. This runtime can meet the dependency requirements of the six examples in Starwhale: mnist, speech commands, nmt, cifar10, ag_news, and PennFudan. Links to relevant code: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/runtime/pytorch"},"example/runtime/pytorch"),"."),(0,a.kt)("p",null,"You can learn the following things from this tutorial:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to build a Starwhale Runtime."),(0,a.kt)("li",{parentName:"ul"},"How to use a Starwhale Runtime in different scenarios."),(0,a.kt)("li",{parentName:"ul"},"How to release a Starwhale Runtime.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Python 3.7+"),(0,a.kt)("li",{parentName:"ul"},"Linux or macOS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/0.5.0/swcli/"},"Starwhale Client")," 0.3.0+")),(0,a.kt)("p",null,"Run the following command to clone the example code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone --depth=1 https://github.com/star-whale/starwhale.git\ncd starwhale/example/runtime/pytorch # for users in the mainland of China, use pytorch-cn-mirror instead.\n")),(0,a.kt)("h2",{id:"build-starwhale-runtime"},"Build Starwhale Runtime"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"\u276f swcli runtime build .\n\ud83d\udea7 start to build runtime bundle...\n\ud83d\udc77 uri:local/project/self/runtime/pytorch\n\ud83d\udc26 runtime will ignore pypi editable package\n\ud83c\udd95 version gy4wgmzugayw\n\ud83d\udcc1 workdir: /home/liutianwei/.cache/starwhale/self/workdir/runtime/pytorch/gy/gy4wgmzugaywczjyg44tkzjwnvrgq4y\n\ud83d\udc1d dump environment info...\ndump dependencies info...\n\ud83c\udf08 runtime docker image: ghcr.io/star-whale/starwhale:latest-cuda11.4  \ud83c\udf08\n\ud83e\udd8b .swrt bundle:/home/liutianwei/.cache/starwhale/self/runtime/pytorch/gy/gy4wgmzugaywczjyg44tkzjwnvrgq4y.swrt\n  10 out of 10 steps finished \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 0:00:00\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"runtime-build",src:n(9784).Z,width:"3711",height:"1961"})),(0,a.kt)("h2",{id:"use-starwhale-runtime-in-the-standalone-instance"},"Use Starwhale Runtime in the standalone instance"),(0,a.kt)("h3",{id:"use-starwhale-runtime-in-the-shell"},"Use Starwhale Runtime in the shell"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# Activate the runtime\nswcli runtime activate pytorch/version/latest\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"swcli runtime activate")," will download all python dependencies of the runtime, which may take a long time."),(0,a.kt)("p",null,"All dependencies are ready in your python environment when the runtime is activated. It is similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"source venv/bin/activate")," of virtualenv or the ",(0,a.kt)("inlineCode",{parentName:"p"},"conda activate")," command of conda. If you close the shell or switch to another shell, you need to reactivate the runtime."),(0,a.kt)("h3",{id:"use-starwhale-runtime-in-swcli"},"Use Starwhale Runtime in SWCLI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# Use the runtime when building a Starwhale Model\nswcli model build . --runtime pytorch\n# Use the runtime when building a Starwhale Dataset\nswcli dataset build . --runtime pytorch\n# Run a model evaluation with the runtime\nswcli model eval . --dataset mnist --runtime pytorch\n")),(0,a.kt)("h2",{id:"copy-starwhale-runtime-to-another-instance"},"Copy Starwhale Runtime to another instance"),(0,a.kt)("p",null,"You can copy the runtime to a server/cloud instance, which can then be used in the server/cloud instance or downloaded by other users."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# Copy the runtime to a server instance named 'pre-k8s'\n\u276f swcli runtime copy pytorch cloud://pre-k8s/project/starwhale\n\ud83d\udea7 start to copy local/project/self/runtime/pytorch/version/latest -> http://console.pre.intra.starwhale.ai/project/starwhale...\n  \ud83c\udfb3 upload gfsdeyrtmqztezjyg44tkzjwmnttmoi.swrt \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 30.7 kB ?\n\ud83d\udc4f copy done.\n")))}m.isMDXComponent=!0},9784:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/runtime-build-bd45db2bd3e17ae344291af6c54bb13d.gif"}}]);