"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[86803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const l={title:"Starwhale\u8d44\u6e90URI"},i=void 0,o={unversionedId:"swcli/uri",id:"version-0.4.6/swcli/uri",title:"Starwhale\u8d44\u6e90URI",description:"\u8d44\u6e90URI\u5728Starwhale Client\u4e2d\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002URI\u53ef\u4ee5\u5f15\u7528\u672c\u5730\u5b9e\u4f8b\u4e2d\u7684\u8d44\u6e90\u6216\u8fdc\u7a0b\u5b9e\u4f8b\u4e2d\u7684\u4efb\u4f55\u5176\u4ed6\u8d44\u6e90\u3002 \u8fd9\u6837Starwhale Client\u5c31\u53ef\u4ee5\u8f7b\u677e\u64cd\u4f5c\u4efb\u4f55\u8d44\u6e90\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.6/swcli/uri.md",sourceDirName:"swcli",slug:"/swcli/uri",permalink:"/zh/docs/0.4.6/swcli/uri",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.6/swcli/uri.md",tags:[],version:"0.4.6",frontMatter:{title:"Starwhale\u8d44\u6e90URI"},sidebar:"mainSidebar",previous:{title:"SWCLI\u5b89\u88c5\u6307\u5357",permalink:"/zh/docs/0.4.6/swcli/installation"},next:{title:"\u5173\u4e8e.swignore\u6587\u4ef6",permalink:"/zh/docs/0.4.6/swcli/swignore"}},s={},c=[{value:"\u5b9e\u4f8bURI",id:"instance",level:2},{value:"\u9879\u76eeURI",id:"project",level:2},{value:"\u6a21\u578b/\u6570\u636e\u96c6/\u8fd0\u884c\u65f6URI",id:"model-dataset-runtime",level:2},{value:"\u4f5c\u4e1aURI",id:"job",level:2},{value:"\u9ed8\u8ba4\u5b9e\u4f8b",id:"defaultInstance",level:2},{value:"\u9ed8\u8ba4\u9879\u76ee",id:"defaultProject",level:2}],p={toc:c};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"\u8d44\u6e90URI\u5728Starwhale Client\u4e2d\u88ab\u5e7f\u6cdb\u4f7f\u7528\u3002URI\u53ef\u4ee5\u5f15\u7528\u672c\u5730\u5b9e\u4f8b\u4e2d\u7684\u8d44\u6e90\u6216\u8fdc\u7a0b\u5b9e\u4f8b\u4e2d\u7684\u4efb\u4f55\u5176\u4ed6\u8d44\u6e90\u3002 \u8fd9\u6837Starwhale Client\u5c31\u53ef\u4ee5\u8f7b\u677e\u64cd\u4f5c\u4efb\u4f55\u8d44\u6e90\u3002"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"concepts-org.jpg",src:n(43725).Z,width:"1394",height:"634"})),(0,a.kt)("h2",{id:"instance"},"\u5b9e\u4f8bURI"),(0,a.kt)("p",null,"\u5b9e\u4f8bURI\u53ef\u4ee5\u662f\u4ee5\u4e0b\u5f62\u5f0f\u4e4b\u4e00:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"local"),": \u6307\u672c\u5730\u7684Standalone\u5b9e\u4f8b."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[http(s)://]<hostname or ip>[:<port>]"),"\uff1a\u6307\u5411\u4e00\u4e2aStarwhale Cloud\u5b9e\u4f8b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"[cloud://]<cloud alias>"),"\uff1a\u4e91\u5b9e\u4f8b\u522b\u540d\uff0c\u53ef\u4ee5\u5728\u5b9e\u4f8b\u767b\u5f55\u9636\u6bb5\u914d\u7f6e\u3002")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u201clocal\u201d\u4e0d\u540c\u4e8e\u201clocalhost\u201d\u3002\u524d\u8005\u8868\u793aStandalone\u5b9e\u4f8b\uff0c\u800c\u540e\u8005\u662f\u4e00\u4e2aURL\uff0c\u6307\u5411\u672c\u5730\u8fd0\u884c\u7684Starwhale Server\u5b9e\u4f8b\u3002")),(0,a.kt)("p",null,"\u4f8b\u5b50:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u767b\u5f55Starwhale Cloud\uff0c\u522b\u540d\u4e3aswcloud\nswcli instance login --username <your account name> --password <your password> https://cloud.starwhale.ai --alias swcloud\n# \u5c06\u6a21\u578b\u4ece\u672c\u5730\u5b9e\u4f8b\u590d\u5236\u5230\u4e91\u5b9e\u4f8b\nswcli model copy mnist/version/latest swcloud/project/<your account name>/demo\n# \u5c06\u8fd0\u884c\u65f6\u590d\u5236\u5230Starwhale Server\u5b9e\u4f8b\uff1ahttp://localhost:8081\nswcli runtime copy pytorch/version/v1 http://localhost:8081/project/<your account name>/demo\n")),(0,a.kt)("h2",{id:"project"},"\u9879\u76eeURI"),(0,a.kt)("p",null,"\u9879\u76eeURI\u7684\u683c\u5f0f\u4e3a\u201c","[<\u5b9e\u4f8bURI>/project/]","<","project name>\u201d\u3002 \u5982\u679c\u672a\u6307\u5b9a\u5b9e\u4f8bURI\uff0c\u5219\u4f7f\u7528\u5f53\u524d\u5b9e\u4f8b\u3002"),(0,a.kt)("p",null,"\u4f8b\u5b50:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli project select self   # \u9009\u62e9\u5f53\u524d\u5b9e\u4f8b\u4e2d\u7684self\u9879\u76ee\nswcli project info local/project/self  # \u67e5\u770b\u672c\u5730\u5b9e\u4f8b\u4e2d\u7684self\u9879\u76ee\u4fe1\u606f\n")),(0,a.kt)("h2",{id:"model-dataset-runtime"},"\u6a21\u578b/\u6570\u636e\u96c6/\u8fd0\u884c\u65f6URI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6a21\u578bURI: ",(0,a.kt)("inlineCode",{parentName:"li"},"[<\u9879\u76eeURI>/model/]<model name>[/version/<version id|tag>]"),"."),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u96c6URI: ",(0,a.kt)("inlineCode",{parentName:"li"},"[<\u9879\u76eeURI>/dataset/]<dataset name>[/version/<version id|tag>]"),"."),(0,a.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u65f6URI: ",(0,a.kt)("inlineCode",{parentName:"li"},"[<\u9879\u76eeURI>/runtime/]<runtime name>[/version/<version id|tag>]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"swcli")," \u652f\u6301\u66f4\u52a0\u4eba\u6027\u5316\u7684\u77ed\u7248\u672cID\u3002\u60a8\u53ef\u4ee5\u53ea\u952e\u5165\u7248\u672cID\u7684\u524d\u51e0\u4e2a\u5b57\u7b26\uff0c\u524d\u63d0\u662f\u5b83\u81f3\u5c11\u6709\u56db\u4e2a\u5b57\u7b26\u957f\u4e14\u552f\u4e00\u6307\u5411\u67d0\u4e2a\u7248\u672cID\u3002\u4f46\u662f\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"recover")," \u547d\u4ee4\u5fc5\u987b\u4f7f\u7528\u5b8c\u6574\u7684\u7248\u672cID\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u672a\u6307\u5b9a\u9879\u76eeURI\uff0c\u5c06\u4f7f\u7528\u9ed8\u8ba4\u9879\u76ee\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u60a8\u59cb\u7ec8\u53ef\u4ee5\u4f7f\u7528\u7248\u672c\u6807\u7b7e\u800c\u4e0d\u662f\u7248\u672cID\u3002")),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model info mnist/version/hbtdenjxgm4ggnrtmftdgyjzm43tioi  # \u68c0\u67e5\u6a21\u578b\u4fe1\u606f\uff0c\u6a21\u578b\u540d\u79f0\uff1amnist\uff0c\u7248\u672c\uff1ahbtdenjxgm4ggnrtmftdgyjzm43tioi\nswcli model remove mnist/version/hbtdenj  # \u4f7f\u7528\u77ed\u7248\u672cID\nswcli model info mnist  # \u68c0\u67e5mnist\u6a21\u578b\u4fe1\u606f\nswcli model run mnist/version/latest --runtime pytorch-mnist/version/latest --dataset mnist/version/latest # \u4f7f\u7528\u7248\u672c\u6807\u7b7e\n")),(0,a.kt)("h2",{id:"job"},"\u4f5c\u4e1aURI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u683c\u5f0f: ",(0,a.kt)("inlineCode",{parentName:"li"},"[<\u9879\u76eeURI>/job/]<job id>"),"."),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u672a\u6307\u5b9a\u9879\u76eeURI\uff0c\u5c06\u4f7f\u7528\u9ed8\u8ba4\u9879\u76ee\u3002")),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli job info mezdayjzge3w   # \u67e5\u770b\u9ed8\u8ba4\u5b9e\u4f8b\u548c\u9ed8\u8ba4\u9879\u76ee\u4e2d\u7684mezdayjzge3w\u7248\u672c\nswcli job info local/project/self/job/mezday # \u68c0\u67e5\u672c\u5730\u5b9e\u4f8b\uff0cself\u9879\u76ee\uff0c\u4f5c\u4e1aid:mezday\n")),(0,a.kt)("h2",{id:"defaultInstance"},"\u9ed8\u8ba4\u5b9e\u4f8b"),(0,a.kt)("p",null,"\u5f53\u9879\u76eeURI\u4e2d\u7684\u5b9e\u4f8b\u90e8\u5206\u88ab\u7701\u7565\u65f6\uff0c\u5c06\u4f7f\u7528\u9ed8\u8ba4\u5b9e\u4f8b\u8fdb\u884c\u66ff\u4ee3\u3002\u9ed8\u8ba4\u5b9e\u4f8b\u662f\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"swcli instance login"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"swcli instance use"),"\u6307\u5b9a\u7684\u3002"),(0,a.kt)("h2",{id:"defaultProject"},"\u9ed8\u8ba4\u9879\u76ee"),(0,a.kt)("p",null,"\u5f53\u6a21\u578b/\u6570\u636e\u96c6/\u8fd0\u884c\u65f6/\u8bc4\u4f30URI\u7684\u9879\u76ee\u90e8\u5206\u88ab\u7701\u7565\u65f6\uff0c\u5c06\u4f7f\u7528\u9ed8\u8ba4\u9879\u76ee\u3002\u9ed8\u8ba4\u9879\u76ee\u662f\u6307\u901a\u8fc7\u201cswcli project use\u201d\u547d\u4ee4\u9009\u62e9\u7684\u9879\u76ee\u3002"))}u.isMDXComponent=!0},43725:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/concepts-org-2fa311f19e51c21807369e5e97e8dbaa.jpg"}}]);