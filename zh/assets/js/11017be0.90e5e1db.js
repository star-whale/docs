"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(3117),r=(n(7294),n(3905));const l={title:"Starwhale \u8d44\u6e90URI"},i=void 0,o={unversionedId:"swcli/uri",id:"swcli/uri",title:"Starwhale \u8d44\u6e90URI",description:"\u8d44\u6e90 URI \u5728 Starwhale Client \u4e2d\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002URI \u53ef\u4ee5\u5f15\u7528\u672c\u5730\u5b9e\u4f8b\u4e2d\u7684\u8d44\u6e90\u6216\u8fdc\u7a0b\u5b9e\u4f8b\u4e2d\u7684\u4efb\u4f55\u5176\u4ed6\u8d44\u6e90\u3002 \u8fd9\u6837 Starwhale Client \u5c31\u53ef\u4ee5\u8f7b\u677e\u64cd\u4f5c\u4efb\u4f55\u8d44\u6e90\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/swcli/uri.md",sourceDirName:"swcli",slug:"/swcli/uri",permalink:"/zh/next/swcli/uri",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/swcli/uri.md",tags:[],version:"current",frontMatter:{title:"Starwhale \u8d44\u6e90URI"},sidebar:"mainSidebar",previous:{title:"\u5b89\u88c5\u6307\u5357",permalink:"/zh/next/swcli/installation"},next:{title:"\u5173\u4e8e .swignore \u6587\u4ef6",permalink:"/zh/next/swcli/swignore"}},c={},s=[{value:"\u5b9e\u4f8bURI",id:"instance",level:2},{value:"\u9879\u76eeURI",id:"project",level:2},{value:"\u6a21\u578b/\u6570\u636e\u96c6/\u8fd0\u884c\u65f6URI",id:"model-dataset-runtime",level:2},{value:"\u4f5c\u4e1aURI",id:"job",level:2},{value:"\u9ed8\u8ba4\u5b9e\u4f8b",id:"defaultInstance",level:2},{value:"\u9ed8\u8ba4\u9879\u76ee",id:"defaultProject",level:2}],p={toc:s};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u8d44\u6e90 URI \u5728 Starwhale Client \u4e2d\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002URI \u53ef\u4ee5\u5f15\u7528\u672c\u5730\u5b9e\u4f8b\u4e2d\u7684\u8d44\u6e90\u6216\u8fdc\u7a0b\u5b9e\u4f8b\u4e2d\u7684\u4efb\u4f55\u5176\u4ed6\u8d44\u6e90\u3002 \u8fd9\u6837 Starwhale Client \u5c31\u53ef\u4ee5\u8f7b\u677e\u64cd\u4f5c\u4efb\u4f55\u8d44\u6e90\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"concepts-org.jpg",src:n(8073).Z,width:"1394",height:"634"})),(0,r.kt)("h2",{id:"instance"},"\u5b9e\u4f8bURI"),(0,r.kt)("p",null,"\u5b9e\u4f8b URI \u53ef\u4ee5\u662f\u4ee5\u4e0b\u5f62\u5f0f\u4e4b\u4e00:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"local"),": \u6307\u672c\u5730\u7684 Standalone \u5b9e\u4f8b."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[http(s)://]<hostname or ip>[:<port>]"),"\uff1a\u6307\u5411\u4e00\u4e2a Starwhale Cloud \u5b9e\u4f8b\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[cloud://]<cloud alias>"),"\uff1aServer\u6216Cloud\u7684\u5b9e\u4f8b\u522b\u540d\uff0c\u53ef\u4ee5\u5728\u5b9e\u4f8b\u767b\u5f55\u9636\u6bb5\u914d\u7f6e\u3002")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u201clocal\u201d\u4e0d\u540c\u4e8e\u201clocalhost\u201d\uff0c\u524d\u8005\u4e3a Standalone \u5b9e\u4f8b\uff0c\u800c\u540e\u8005\u662f\u4e00\u4e2a URL \uff0c\u6307\u5411\u672c\u5730\u8fd0\u884c\u7684 Starwhale Server \u5b9e\u4f8b\u3002")),(0,r.kt)("p",null,"\u4f8b\u5b50:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u767b\u5f55Starwhale Cloud\uff0c\u522b\u540d\u4e3aswcloud\nswcli instance login --username <your account name> --password <your password> https://cloud.starwhale.cn --alias swcloud\n\n# \u5c06\u6a21\u578b\u4ece\u672c\u5730\u5b9e\u4f8b\u590d\u5236\u5230\u4e91\u5b9e\u4f8b\nswcli model copy mnist/version/latest swcloud/project/<your account name>:demo\n\n# \u5c06\u8fd0\u884c\u65f6\u590d\u5236\u5230Starwhale Server\u5b9e\u4f8b\uff1ahttp://localhost:8081\nswcli runtime copy pytorch/version/v1 http://localhost:8081/project/<your account name>:demo\n")),(0,r.kt)("h2",{id:"project"},"\u9879\u76eeURI"),(0,r.kt)("p",null,"\u9879\u76eeURI\u7684\u683c\u5f0f\u4e3a\u201c","[<\u5b9e\u4f8bURI>/project/]","<","project name>\u201d\u3002 \u5982\u679c\u672a\u6307\u5b9a\u5b9e\u4f8b URI\uff0c\u5219\u4f7f\u7528\u5f53\u524d\u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"\u4f8b\u5b50:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli project select self   # \u9009\u62e9\u5f53\u524d\u5b9e\u4f8b\u4e2d\u7684self\u9879\u76ee\nswcli project info local/project/self  # \u67e5\u770b\u672c\u5730\u5b9e\u4f8b\u4e2d\u7684self\u9879\u76ee\u4fe1\u606f\n")),(0,r.kt)("h2",{id:"model-dataset-runtime"},"\u6a21\u578b/\u6570\u636e\u96c6/\u8fd0\u884c\u65f6URI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6a21\u578bURI: ",(0,r.kt)("inlineCode",{parentName:"li"},"[<\u9879\u76eeURI>/model/]<model name>[/version/<version id|tag>]"),"."),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u96c6URI: ",(0,r.kt)("inlineCode",{parentName:"li"},"[<\u9879\u76eeURI>/dataset/]<dataset name>[/version/<version id|tag>]"),"."),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u65f6URI: ",(0,r.kt)("inlineCode",{parentName:"li"},"[<\u9879\u76eeURI>/runtime/]<runtime name>[/version/<version id|tag>]"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"swcli")," \u652f\u6301\u66f4\u52a0\u4eba\u6027\u5316\u7684\u77ed\u7248\u672cID\u3002\u60a8\u53ef\u4ee5\u53ea\u952e\u5165\u7248\u672cID\u7684\u524d\u51e0\u4e2a\u5b57\u7b26\uff0c\u524d\u63d0\u662f\u5b83\u81f3\u5c11\u6709\u56db\u4e2a\u5b57\u7b26\u957f\u4e14\u552f\u4e00\u6307\u5411\u67d0\u4e2a\u7248\u672cID\u3002\u4f46\u662f\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"recover")," \u547d\u4ee4\u5fc5\u987b\u4f7f\u7528\u5b8c\u6574\u7684\u7248\u672cID\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u672a\u6307\u5b9a\u9879\u76eeURI\uff0c\u5c06\u4f7f\u7528",(0,r.kt)("a",{parentName:"li",href:"#defaultProject"},"\u9ed8\u8ba4\u9879\u76ee"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u60a8\u59cb\u7ec8\u53ef\u4ee5\u4f7f\u7528\u7248\u672c\u6807\u7b7e\u800c\u4e0d\u662f\u7248\u672cID\u3002"))),(0,r.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model info mnist/version/hbtdenjxgm4ggnrtmftdgyjzm43tioi  # \u68c0\u67e5\u6a21\u578b\u4fe1\u606f\uff0c\u6a21\u578b\u540d\u79f0\uff1amnist\uff0c\u7248\u672c\uff1ahbtdenjxgm4ggnrtmftdgyjzm43tioi\nswcli model remove mnist/version/hbtdenj  # \u4f7f\u7528\u77ed\u7248\u672cID\nswcli model info mnist  # \u68c0\u67e5mnist\u6a21\u578b\u4fe1\u606f\nswcli model run mnist --runtime pytorch-mnist --dataset mnist # \u4f7f\u7528latest\u7684\u9ed8\u8ba4tag\n")),(0,r.kt)("h2",{id:"job"},"\u4f5c\u4e1aURI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u683c\u5f0f: ",(0,r.kt)("inlineCode",{parentName:"li"},"[<\u9879\u76eeURI>/job/]<job id>"),"."),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u672a\u6307\u5b9a\u9879\u76eeURI\uff0c\u5c06\u4f7f\u7528\u9ed8\u8ba4\u9879\u76ee\u3002")),(0,r.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli job info mezdayjzge3w   # \u67e5\u770b\u9ed8\u8ba4\u5b9e\u4f8b\u548c\u9ed8\u8ba4\u9879\u76ee\u4e2d\u7684mezdayjzge3w\u7248\u672c\nswcli job info local/project/self/job/mezday # \u68c0\u67e5\u672c\u5730\u5b9e\u4f8b\uff0cself\u9879\u76ee\uff0c\u4f5c\u4e1aid:mezday\n")),(0,r.kt)("h2",{id:"defaultInstance"},"\u9ed8\u8ba4\u5b9e\u4f8b"),(0,r.kt)("p",null,"\u5f53\u9879\u76eeURI\u4e2d\u7684\u5b9e\u4f8b\u90e8\u5206\u88ab\u7701\u7565\u65f6\uff0c\u5c06\u4f7f\u7528\u9ed8\u8ba4\u5b9e\u4f8b\u8fdb\u884c\u66ff\u4ee3\u3002\u9ed8\u8ba4\u5b9e\u4f8b\u662f\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli instance login")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli instance use")," \u6307\u5b9a\u7684\u3002"),(0,r.kt)("h2",{id:"defaultProject"},"\u9ed8\u8ba4\u9879\u76ee"),(0,r.kt)("p",null,"\u5f53\u6a21\u578b/\u6570\u636e\u96c6/\u8fd0\u884c\u65f6/\u8bc4\u4f30URI\u7684\u9879\u76ee\u90e8\u5206\u88ab\u7701\u7565\u65f6\uff0c\u5c06\u4f7f\u7528\u9ed8\u8ba4\u9879\u76ee\u3002\u9ed8\u8ba4\u9879\u76ee\u662f\u6307\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli project use")," \u547d\u4ee4\u9009\u62e9\u7684\u9879\u76ee\u3002"))}u.isMDXComponent=!0},8073:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/concepts-org-2fa311f19e51c21807369e5e97e8dbaa.jpg"}}]);