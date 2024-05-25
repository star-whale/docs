"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[50121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const i={title:"Starwhale Resources URI"},o=void 0,l={unversionedId:"swcli/uri",id:"version-0.6.10/swcli/uri",title:"Starwhale Resources URI",description:"Resource URI is widely used in Starwhale client commands. The URI can refer to a resource in the local instance or any other resource in a remote instance. In this way, the Starwhale client can easily manipulate any resource.",source:"@site/versioned_docs/version-0.6.10/swcli/uri.md",sourceDirName:"swcli",slug:"/swcli/uri",permalink:"/0.6.10/swcli/uri",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.10/swcli/uri.md",tags:[],version:"0.6.10",frontMatter:{title:"Starwhale Resources URI"},sidebar:"mainSidebar",previous:{title:"Installation Guide",permalink:"/0.6.10/swcli/installation"},next:{title:"About the .swignore file",permalink:"/0.6.10/swcli/swignore"}},s={},c=[{value:"Instance URI",id:"instance",level:2},{value:"Project URI",id:"project",level:2},{value:"Model/Dataset/Runtime URI",id:"model-dataset-runtime",level:2},{value:"Job URI",id:"job",level:2},{value:"The default instance",id:"defaultInstance",level:2},{value:"The default project",id:"defaultProject",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Resource URI is widely used in Starwhale client commands. The URI can refer to a resource in the local instance or any other resource in a remote instance. In this way, the Starwhale client can easily manipulate any resource."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/concepts-org.jpg",alt:"concepts-org.jpg"})),(0,r.kt)("h2",{id:"instance"},"Instance URI"),(0,r.kt)("p",null,"Instance URI can be either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"local"),": standalone instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[http(s)://]<hostname or ip>[:<port>]"),": cloud instance with HTTP address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[cloud://]<cloud alias>"),": cloud or server instance with an alias name, which can be configured in the instance login phase.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},'"local" is different from "localhost". The former means the local standalone instance without a controller, while the latter implies a controller listening at the default port 8082 on the localhost.'))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# log in Starwhale Cloud; the alias is swcloud\nswcli instance login --username <your account name> --password <your password> https://cloud.starwhale.ai --alias swcloud\n\n# copy a model from the local instance to the cloud instance\nswcli model copy mnist/version/latest swcloud/project/<your account name>:demo\n\n# copy a runtime to a Starwhale Server instance: http://localhost:8081\nswcli runtime copy pytorch/version/v1 http://localhost:8081/project/<your account name>:demo\n")),(0,r.kt)("h2",{id:"project"},"Project URI"),(0,r.kt)("p",null,"Project URI is in the format ",(0,r.kt)("inlineCode",{parentName:"p"},"[<Instance URI>/project/]<project name>"),". If the instance URI is not specified, use the current instance instead."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli project select self   # select the self project in the current instance\nswcli project info local/project/self  # inspect self project info in the local instance\n")),(0,r.kt)("h2",{id:"model-dataset-runtime"},"Model/Dataset/Runtime URI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Model URI: ",(0,r.kt)("inlineCode",{parentName:"li"},"[<Project URI>/model/]<model name>[/version/<version id|tag>]"),"."),(0,r.kt)("li",{parentName:"ul"},"Dataset URI: ",(0,r.kt)("inlineCode",{parentName:"li"},"[<Project URI>/dataset/]<dataset name>[/version/<version id|tag>]"),"."),(0,r.kt)("li",{parentName:"ul"},"Runtime URI: ",(0,r.kt)("inlineCode",{parentName:"li"},"[<Project URI>/runtime/]<runtime name>[/version/<version id|tag>]"),".")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"swcli")," supports human-friendly short version id. You can type the first few characters of the version id, provided it is at least four characters long and unambiguous. However, the ",(0,r.kt)("inlineCode",{parentName:"li"},"recover")," command must use the complete version id."),(0,r.kt)("li",{parentName:"ul"},"If the project URI is not specified, the ",(0,r.kt)("a",{parentName:"li",href:"#defaultProject"},"default project")," will be used."),(0,r.kt)("li",{parentName:"ul"},"You can always use the version tag instead of the version id."))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model info mnist/version/hbtdenjxgm4ggnrtmftdgyjzm43tioi  # inspect model info, model name: mnist, version:hbtdenjxgm4ggnrtmftdgyjzm43tioi\nswcli model remove mnist/version/hbtdenj  # short version\nswcli model info mnist  # inspect mnist model info\nswcli model run mnist --runtime pytorch-mnist --dataset mnist # use the default latest tag\n")),(0,r.kt)("h2",{id:"job"},"Job URI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"format: ",(0,r.kt)("inlineCode",{parentName:"li"},"[<Project URI>/job/]<job id>"),"."),(0,r.kt)("li",{parentName:"ul"},"If the project URI is not specified, the ",(0,r.kt)("a",{parentName:"li",href:"#defaultProject"},"default project")," will be used.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli job info mezdayjzge3w   # Inspect mezdayjzge3w version in default instance and default project\nswcli job info local/project/self/job/mezday # Inspect the local instance, self project, with short job id:mezday\n")),(0,r.kt)("h2",{id:"defaultInstance"},"The default instance"),(0,r.kt)("p",null,"When the instance part of a project URI is omitted, the default instance is used instead. The default instance is the one selected by the ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli instance login")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli instance use")," command."),(0,r.kt)("h2",{id:"defaultProject"},"The default project"),(0,r.kt)("p",null,"When the project parts of Model/Dataset/Runtime/Evaluation URIs are omitted, the default project is used instead. The default project is the one selected by the ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli project use")," command."))}u.isMDXComponent=!0}}]);