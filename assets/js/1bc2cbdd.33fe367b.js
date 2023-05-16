"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},18308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(83117),i=(n(67294),n(3905));const r={title:"Starwhale Resources URI"},l=void 0,o={unversionedId:"instances/standalone/guides/uri",id:"version-0.4.5/instances/standalone/guides/uri",title:"Starwhale Resources URI",description:"Resource URI is widely used in Starwhale client commands. The URI can refer to a resource in the local instance or any other resource in a remote instance. In this way, the Starwhale client can easily manipulate any resource.",source:"@site/versioned_docs/version-0.4.5/instances/standalone/guides/uri.md",sourceDirName:"instances/standalone/guides",slug:"/instances/standalone/guides/uri",permalink:"/docs/instances/standalone/guides/uri",draft:!1,editUrl:"https://github.com/star-whale/starwhale/tree/main/docs/versioned_docs/version-0.4.5/instances/standalone/guides/uri.md",tags:[],version:"0.4.5",frontMatter:{title:"Starwhale Resources URI"},sidebar:"mainSidebar",previous:{title:"Installation",permalink:"/docs/instances/standalone/install"},next:{title:"Configuration",permalink:"/docs/instances/standalone/guides/config"}},s={},c=[{value:"Instance URI",id:"instance-uri",level:2},{value:"Project URI",id:"project-uri",level:2},{value:"Model/Dataset/Runtime URI",id:"modeldatasetruntime-uri",level:2},{value:"Evaluation URI",id:"evaluation-uri",level:2},{value:"Names Limitation",id:"names-limitation",level:2},{value:"Names uniqueness requirement",id:"names-uniqueness-requirement",level:3}],m={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Resource URI is widely used in Starwhale client commands. The URI can refer to a resource in the local instance or any other resource in a remote instance. In this way, the Starwhale client can easily manipulate any resource."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"concepts-org.jpg",src:n(62453).Z,width:"1394",height:"634"})),(0,i.kt)("h2",{id:"instance-uri"},"Instance URI"),(0,i.kt)("p",null,"Instance URI can be either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"local"),": standalone instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[http(s)://]<hostname or ip>[:<port>]"),": cloud instance with HTTP address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[cloud://]<cloud alias>"),": cloud instance with an alias name, which can be configured in the instance login phase.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'"local" is different from "localhost". The former means the local standalone instance without a controller, while the latter implies a controller listening at the default port 8082 on localhost.|')),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# login http://console.pre.intra.starwhale.ai instance, the alias is pre-k8s\nswcli instance login --username starwhale --password abcd1234 http://console.pre.intra.starwhale.ai --alias pre-k8s\n# copy model from the local instance, default project into cloud instance, instance field uses the alias name: pre-k8s.\nswcli model copy mnist/version/latest cloud://pre-k8s/project/1\n# copy runtime into cloud instance: localhost:8081\nswcli runtime copy pytorch/version/v1.0 http://localhost:8081/project/myproject\n")),(0,i.kt)("h2",{id:"project-uri"},"Project URI"),(0,i.kt)("p",null,"Project URI is in the format ",(0,i.kt)("inlineCode",{parentName:"p"},"[<Instance URI>/project/]<project name>"),". If the instance URI is not specified, use the default instance instead."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"swcli project select self   # select self project in the current instance\nswcli project info local/project/self  # inspect self project info in the local instance\n")),(0,i.kt)("h2",{id:"modeldatasetruntime-uri"},"Model/Dataset/Runtime URI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Model URI: ",(0,i.kt)("inlineCode",{parentName:"li"},"[<Project URI>/model/]<model name>[/version/<version id|tag>]"),"."),(0,i.kt)("li",{parentName:"ul"},"Dataset URI: ",(0,i.kt)("inlineCode",{parentName:"li"},"[<Project URI>/dataset/]<dataset name>[/version/<version id|tag>]"),"."),(0,i.kt)("li",{parentName:"ul"},"Runtime URI: ",(0,i.kt)("inlineCode",{parentName:"li"},"[<Project URI>/runtime/]<runtime name>[/version/<version id|tag>]"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli")," supports short version which is at least five characters, but ",(0,i.kt)("inlineCode",{parentName:"li"},"recover")," command must use full version."),(0,i.kt)("li",{parentName:"ul"},"If the project URI is not specified, use the default project."),(0,i.kt)("li",{parentName:"ul"},"The version id field also supports tag.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model info mnist/version/hbtdenjxgm4ggnrtmftdgyjzm43tioi  # inspect model info, model name: mnist, version:hbtdenjxgm4ggnrtmftdgyjzm43tioi\nswcli model remove mnist/version/hbtdenj  # short version\nswcli model info mnist  # inspect mnist model info\nswcli job create --model mnist/version/latest --runtime pytorch-mnist/version/latest --dataset mnist/version/latest\n")),(0,i.kt)("h2",{id:"evaluation-uri"},"Evaluation URI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"format: ",(0,i.kt)("inlineCode",{parentName:"li"},"[<Project URI>/evaluation/]<job id>"),"."),(0,i.kt)("li",{parentName:"ul"},"If the project URI is not specified, use the default project.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"swcli eval info mezdayjzge3w   # Inspect mezdayjzge3w version in default instance and default project\nswcli eval info local/project/self/job/mezday # Inspect the local instance, self project, with short job version:mezday\n")),(0,i.kt)("h2",{id:"names-limitation"},"Names Limitation"),(0,i.kt)("p",null,"Names mean project names, model names, dataset names, runtime names, and tag names."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Names are case-insensitive."),(0,i.kt)("li",{parentName:"ul"},"A name MUST only consist of letters ",(0,i.kt)("inlineCode",{parentName:"li"},"A-Z a-z"),", digits ",(0,i.kt)("inlineCode",{parentName:"li"},"0-9"),", the hyphen character ",(0,i.kt)("inlineCode",{parentName:"li"},"-"),", the dot character ",(0,i.kt)("inlineCode",{parentName:"li"},"."),", and the underscore character ",(0,i.kt)("inlineCode",{parentName:"li"},"_"),"."),(0,i.kt)("li",{parentName:"ul"},"A name should always start with a letter or the ",(0,i.kt)("inlineCode",{parentName:"li"},"_")," character."),(0,i.kt)("li",{parentName:"ul"},"The maximum length of a name is 80.")),(0,i.kt)("h3",{id:"names-uniqueness-requirement"},"Names uniqueness requirement"),(0,i.kt)("p",null,"The resource name should be a unique string within its owner. For example, the project name should be unique in the owner instance, and the model name should be unique in the owner project."),(0,i.kt)("p",null,'The resource name can not be used by any other resource of the same kind in the owner, including those removed ones. For example, Project "apple" can not have two models named "Alice", even if one of them is already removed.'),(0,i.kt)("p",null,'Different kinds of resources can have the same name. For example, a project and a model can have the same name "Alice".'),(0,i.kt)("p",null,'Resources with different owners can have the same name. For example, a model in project "Apple" and a model in project "Banana" can have the same name "Alice".'),(0,i.kt)("p",null,'Garbage collected resources\' names can be reused. For example, after the model with the name "Alice" in project "Apple" is removed and garbage collected, the project can have a new model with the same name "Alice".'))}u.isMDXComponent=!0},62453:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/concepts-org-2fa311f19e51c21807369e5e97e8dbaa.jpg"}}]);