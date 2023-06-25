"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[81874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},29900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(83117),a=(n(67294),n(3905));const l={title:"Starwhale Runtime\u5165\u95e8\u6307\u5357"},i=void 0,o={unversionedId:"getting-started/runtime",id:"version-0.4.5/getting-started/runtime",title:"Starwhale Runtime\u5165\u95e8\u6307\u5357",description:"---",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.5/getting-started/runtime.md",sourceDirName:"getting-started",slug:"/getting-started/runtime",permalink:"/zh/docs/0.4.5/getting-started/runtime",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.5/getting-started/runtime.md",tags:[],version:"0.4.5",frontMatter:{title:"Starwhale Runtime\u5165\u95e8\u6307\u5357"},sidebar:"mainSidebar",previous:{title:"Starwhale Cloud\u5165\u95e8\u6307\u5357",permalink:"/zh/docs/0.4.5/getting-started/cloud"},next:{title:"Starwhale\u5e38\u7528\u6982\u5ff5",permalink:"/zh/docs/0.4.5/concepts/"}},u={},s=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"\u57fa\u7840\u73af\u5883",id:"\u57fa\u7840\u73af\u5883",level:3},{value:"\u6784\u5efaStarwhale Runtime",id:"\u6784\u5efastarwhale-runtime",level:2},{value:"\u5728Standalone Instance\u4e2d\u4f7f\u7528Starwhale Runtime",id:"\u5728standalone-instance\u4e2d\u4f7f\u7528starwhale-runtime",level:2},{value:"\u5728shell\u4e2d\u4f7f\u7528Starwhale Runtime",id:"\u5728shell\u4e2d\u4f7f\u7528starwhale-runtime",level:3},{value:"\u5728SWCLI\u4e2d\u4f7f\u7528Starwhale Runtime",id:"\u5728swcli\u4e2d\u4f7f\u7528starwhale-runtime",level:3},{value:"\u5c06 Starwhale Runtime \u590d\u5236\u5230\u53e6\u4e00\u4e2a\u5b9e\u4f8b",id:"\u5c06-starwhale-runtime-\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u5b9e\u4f8b",level:2}],c={toc:s};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u672c\u6587\u6f14\u793a\u5982\u4f55\u642d\u5efaPytorch\u73af\u5883\u7684Starwhale Runtime\u4ee5\u53ca\u5982\u4f55\u5728\u4e0d\u540c\u73af\u5883\u4e2d\u4f7f\u7528\u5b83\u3002\u8be5runtime\u53ef\u4ee5\u6ee1\u8db3Starwhale\u4e2d\u516d\u4e2a\u4f8b\u5b50\u7684\u4f9d\u8d56\u9700\u6c42\uff1amnist\u3001speech commands\u3001nmt\u3001cifar10\u3001ag_news\u3001PennFudan\u3002\u76f8\u5173\u4ee3\u7801\u94fe\u63a5\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/runtime/pytorch"},"example/runtime/pytorch"),"\u3002"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece\u672c\u6559\u7a0b\u4e2d\u5b66\u5230\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u6784\u5efaStarwhale Runtime\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5728\u4e0d\u540c\u573a\u666f\u4e0b\u4f7f\u7528Starwhale Runtime\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u53d1\u5e03Starwhale Runtime\u3002")),(0,a.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,a.kt)("h3",{id:"\u57fa\u7840\u73af\u5883"},"\u57fa\u7840\u73af\u5883"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Python 3.7+"),(0,a.kt)("li",{parentName:"ul"},"Linux\u6216macOS"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/0.4.5/swcli/"},"Starwhale Client")," 0.3.0+")),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4ee5\u514b\u9686\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone --depth=1 https://github.com/star-whale/starwhale.git\ncd starwhale/example/runtime/pytorch #\u4e2d\u56fd\u5927\u9646\u7528\u6237\u8bf7\u6539\u7528pytorch-cn-mirror\u3002\n")),(0,a.kt)("h2",{id:"\u6784\u5efastarwhale-runtime"},"\u6784\u5efaStarwhale Runtime"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"\u276f swcli runtime build .\n\ud83d\udea7 start to build runtime bundle...\n\ud83d\udc77 uri:local/project/self/runtime/pytorch\n\ud83d\udc26 runtime will ignore pypi editable package\n\ud83c\udd95 version gy4wgmzugayw\n\ud83d\udcc1 workdir: /home/liutianwei/.cache/starwhale/self/workdir/runtime/pytorch/gy/gy4wgmzugaywczjyg44tkzjwnvrgq4y\n\ud83d\udc1d dump environment info...\ndump dependencies info...\n\ud83c\udf08 runtime docker image: ghcr.io/star-whale/starwhale:latest-cuda11.4  \ud83c\udf08\n\ud83e\udd8b .swrt bundle:/home/liutianwei/.cache/starwhale/self/runtime/pytorch/gy/gy4wgmzugaywczjyg44tkzjwnvrgq4y.swrt\n  10 out of 10 steps finished \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 0:00:00\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"runtime-build",src:n(696).Z,width:"3711",height:"1961"})),(0,a.kt)("h2",{id:"\u5728standalone-instance\u4e2d\u4f7f\u7528starwhale-runtime"},"\u5728Standalone Instance\u4e2d\u4f7f\u7528Starwhale Runtime"),(0,a.kt)("h3",{id:"\u5728shell\u4e2d\u4f7f\u7528starwhale-runtime"},"\u5728shell\u4e2d\u4f7f\u7528Starwhale Runtime"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# \u6fc0\u6d3bruntime\nswcli runtime activate pytorch/version/latest\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"swcli runtime activate"),"\u4f1a\u4e0b\u8f7druntime\u7684\u6240\u6709python\u4f9d\u8d56\uff0c\u5e76\u5728\u5f53\u524dshell\u73af\u5883\u4e2d\u6fc0\u6d3b\u8be5\u73af\u5883\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u53ef\u80fd\u9700\u8981\u5f88\u957f\u65f6\u95f4\u3002"),(0,a.kt)("p",null,"\u5f53runtime\u88ab\u6fc0\u6d3b\u65f6\uff0c\u6240\u6709\u4f9d\u8d56\u9879\u90fd\u5df2\u5728\u60a8\u7684python\u73af\u5883\u4e2d\u51c6\u5907\u5c31\u7eea\uff0c\u7c7b\u4f3c\u4e8evirtualenv\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"source venv/bin/activate"),"\u6216\u8005conda\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"conda activate"),"\u547d\u4ee4\u3002\u5982\u679c\u60a8\u5173\u95ed\u4e86shell\u6216\u5207\u6362\u5230\u53e6\u4e00\u4e2ashell\uff0c\u5219\u4e0b\u6b21\u4f7f\u7528\u4e4b\u524d\u9700\u8981\u91cd\u65b0\u6fc0\u6d3b\u8fd9\u4e2aruntime\u3002"),(0,a.kt)("h3",{id:"\u5728swcli\u4e2d\u4f7f\u7528starwhale-runtime"},"\u5728SWCLI\u4e2d\u4f7f\u7528Starwhale Runtime"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# \u6a21\u578b\u6784\u5efa\u4e2d\u4f7f\u7528runtime\nswcli model build . --runtime pytorch\n# \u6570\u636e\u96c6\u6784\u5efa\u4e2d\u4f7f\u7528runtime\nswcli dataset build . --runtime pytorch\n# \u6a21\u578b\u8bc4\u6d4b\u4e2d\u4f7f\u7528runtime\nswcli model eval . --dataset mnist --runtime pytorch\n")),(0,a.kt)("h2",{id:"\u5c06-starwhale-runtime-\u590d\u5236\u5230\u53e6\u4e00\u4e2a\u5b9e\u4f8b"},"\u5c06 Starwhale Runtime \u590d\u5236\u5230\u53e6\u4e00\u4e2a\u5b9e\u4f8b"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06\u8fd0\u884c\u65f6\u590d\u5236\u5230Server/Cloud\u5b9e\u4f8b\uff0c\u7136\u540e\u53ef\u4ee5\u5728Server/Cloud\u5b9e\u4f8b\u4e2d\u4f7f\u7528\u6216\u7531\u5176\u4ed6\u7528\u6237\u4e0b\u8f7d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"# \u5c06runtime\u590d\u5236\u5230\u540d\u4e3a\u201cpre-k8s\u201d\u7684Server\u5b9e\u4f8b\n\u276f swcli runtime copy pytorch cloud://pre-k8s/project/starwhale\n\ud83d\udea7 start to copy local/project/self/runtime/pytorch/version/latest -> http://console.pre.intra.starwhale.ai/project/starwhale...\n  \ud83c\udfb3 upload gfsdeyrtmqztezjyg44tkzjwmnttmoi.swrt \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 30.7 kB ?\n\ud83d\udc4f copy done.\n")))}m.isMDXComponent=!0},696:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/runtime-build-bd45db2bd3e17ae344291af6c54bb13d.gif"}}]);