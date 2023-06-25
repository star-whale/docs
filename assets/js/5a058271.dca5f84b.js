"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[66412],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=r.createContext({}),m=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(a),p=l,h=u["".concat(d,".").concat(p)]||u[p]||c[p]||n;return a?r.createElement(h,o(o({ref:t},s),{},{components:a})):r.createElement(h,o({ref:t},s))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<n;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13364:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var r=a(83117),l=(a(67294),a(3905));const n={title:"Starwhale Model User Guide"},o=void 0,i={unversionedId:"userguide/model",id:"version-0.4.4/userguide/model",title:"Starwhale Model User Guide",description:"A Starwhale Model is a standard format for packaging machine learning models that can be used for various purposes, like model finetuning, model evaluation, and online serving. A Starwhale Model contains the model file, inference codes, configuration files, and any other files required to run the model.",source:"@site/versioned_docs/version-0.4.4/userguide/model.md",sourceDirName:"userguide",slug:"/userguide/model",permalink:"/docs/0.4.4/userguide/model",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.4/userguide/model.md",tags:[],version:"0.4.4",frontMatter:{title:"Starwhale Model User Guide"},sidebar:"mainSidebar",previous:{title:"About the .swignore file",permalink:"/docs/0.4.4/swcli/swignore"},next:{title:"Starwhale Runtime User Guide",permalink:"/docs/0.4.4/userguide/runtime"}},d={},m=[{value:"Create a Starwhale Model",id:"create-a-starwhale-model",level:2},{value:"Create a Starwhale Model by SWCLI",id:"create-a-starwhale-model-by-swcli",level:3},{value:"Create a Starwhale Model by SDK",id:"create-a-starwhale-model-by-sdk",level:3},{value:"Model Management",id:"model-management",level:2},{value:"Model Management by SWCLI",id:"model-management-by-swcli",level:3},{value:"Model Management by WebUI",id:"model-management-by-webui",level:3},{value:"Model History",id:"model-history",level:2},{value:"Model History Management by SWCLI",id:"model-history-management-by-swcli",level:2},{value:"Model History Management by WebUI",id:"model-history-management-by-webui",level:2},{value:"Model Evaluation",id:"model-evaluation",level:2},{value:"Model Evaluation by SWCLI",id:"model-evaluation-by-swcli",level:3},{value:"Model Evaluation by WebUI",id:"model-evaluation-by-webui",level:3},{value:"Model Online Evaluation by WebUI",id:"model-online-evaluation-by-webui",level:4},{value:"The Storage Format",id:"format",level:2}],s={toc:m};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A Starwhale Model is a standard format for packaging machine learning models that can be used for various purposes, like model finetuning, model evaluation, and online serving. A Starwhale Model contains the model file, inference codes, configuration files, and any other files required to run the model."),(0,l.kt)("p",null,"For more information about the packaging format, see ",(0,l.kt)("a",{parentName:"p",href:"#format"},"the storage format"),"."),(0,l.kt)("h2",{id:"create-a-starwhale-model"},"Create a Starwhale Model"),(0,l.kt)("p",null,"There are two ways to create a Starwhale Model: by ",(0,l.kt)("a",{parentName:"p",href:"/docs/0.4.4/reference/swcli/model"},"SWCLI")," or by SDK."),(0,l.kt)("h3",{id:"create-a-starwhale-model-by-swcli"},"Create a Starwhale Model by SWCLI"),(0,l.kt)("p",null,"To create a Starwhale Model by SWCLI, you need to define a model.yaml, which describes some required information about the model package, and run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model build <path to your model.yaml directory>\n")),(0,l.kt)("p",null,"For more information about the command and model.yaml, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/0.4.4/reference/swcli/model#build"},"the SWCLI reference")),(0,l.kt)("h3",{id:"create-a-starwhale-model-by-sdk"},"Create a Starwhale Model by SDK"),(0,l.kt)("h2",{id:"model-management"},"Model Management"),(0,l.kt)("h3",{id:"model-management-by-swcli"},"Model Management by SWCLI"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.4.4/reference/swcli/model#list"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model list"))),(0,l.kt)("td",{parentName:"tr",align:null},"List all Starwhale Models in a project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.4.4/reference/swcli/model#info"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model info"))),(0,l.kt)("td",{parentName:"tr",align:null},"Show detail information about a Starwhale Model")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.4.4/reference/swcli/model#copy"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model copy"))),(0,l.kt)("td",{parentName:"tr",align:null},"Copy a Starwhale Model to another location")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.4.4/reference/swcli/model#remove"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model remove"))),(0,l.kt)("td",{parentName:"tr",align:null},"Remove a Starwhale Model")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.4.4/reference/swcli/model#recover"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model recover"))),(0,l.kt)("td",{parentName:"tr",align:null},"Recover a previously removed Starwhale Model")))),(0,l.kt)("h3",{id:"model-management-by-webui"},"Model Management by WebUI"),(0,l.kt)("h2",{id:"model-history"},"Model History"),(0,l.kt)("p",null,"Starwhale Models are versioned. The general rules about versions are described in ",(0,l.kt)("a",{parentName:"p",href:"/docs/0.4.4/concepts/versioning"},"Resource versioning in Starwhale"),"."),(0,l.kt)("h2",{id:"model-history-management-by-swcli"},"Model History Management by SWCLI"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.4.4/reference/swcli/model#list"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model history"))),(0,l.kt)("td",{parentName:"tr",align:null},"List all versions of a Starwhale Model")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.4.4/reference/swcli/model#info"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model info"))),(0,l.kt)("td",{parentName:"tr",align:null},"Show detail information about a Starwhale Model version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.4.4/reference/swcli/model#diff"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model diff"))),(0,l.kt)("td",{parentName:"tr",align:null},"Compare two versions of a Starwhale model")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.4.4/reference/swcli/model#copy"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model copy"))),(0,l.kt)("td",{parentName:"tr",align:null},"Copy a Starwhale Model version to a new one")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.4.4/reference/swcli/model#remove"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model remove"))),(0,l.kt)("td",{parentName:"tr",align:null},"Remove a Starwhale Model version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.4.4/reference/swcli/model#recover"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model recover"))),(0,l.kt)("td",{parentName:"tr",align:null},"Recover a previously removed Starwhale Model version")))),(0,l.kt)("h2",{id:"model-history-management-by-webui"},"Model History Management by WebUI"),(0,l.kt)("h2",{id:"model-evaluation"},"Model Evaluation"),(0,l.kt)("h3",{id:"model-evaluation-by-swcli"},"Model Evaluation by SWCLI"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/0.4.4/reference/swcli/model#eval"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model eval"))),(0,l.kt)("td",{parentName:"tr",align:null},"Create an evaluation with a Starwhale Model")))),(0,l.kt)("h3",{id:"model-evaluation-by-webui"},"Model Evaluation by WebUI"),(0,l.kt)("h4",{id:"model-online-evaluation-by-webui"},"Model Online Evaluation by WebUI"),(0,l.kt)("h2",{id:"format"},"The Storage Format"),(0,l.kt)("p",null,"The Starwhale Model is a tarball file that contains the source directory."))}c.isMDXComponent=!0}}]);