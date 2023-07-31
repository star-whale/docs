"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[3069],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=r.createContext({}),m=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=m(a),u=l,h=p["".concat(d,".").concat(u)]||p[u]||c[u]||n;return a?r.createElement(h,o(o({ref:t},s),{},{components:a})):r.createElement(h,o({ref:t},s))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<n;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2616:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var r=a(3117),l=(a(7294),a(3905));const n={title:"Starwhale Model"},o=void 0,i={unversionedId:"userguide/model",id:"version-0.5.7/userguide/model",title:"Starwhale Model",description:"A Starwhale Model is a standard format for packaging machine learning models that can be used for various purposes, like model finetuning, model evaluation, and online serving. A Starwhale Model contains the model file, inference codes, configuration files, and any other files required to run the model.",source:"@site/versioned_docs/version-0.5.7/userguide/model.md",sourceDirName:"userguide",slug:"/userguide/model",permalink:"/0.5.7/userguide/model",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.7/userguide/model.md",tags:[],version:"0.5.7",frontMatter:{title:"Starwhale Model"},sidebar:"mainSidebar",previous:{title:"Project Management",permalink:"/0.5.7/server/project"},next:{title:"Starwhale Runtime",permalink:"/0.5.7/userguide/runtime"}},d={},m=[{value:"Create a Starwhale Model",id:"create-a-starwhale-model",level:2},{value:"Create a Starwhale Model by swcli",id:"create-a-starwhale-model-by-swcli",level:3},{value:"Create a Starwhale Model by Python SDK",id:"create-a-starwhale-model-by-python-sdk",level:3},{value:"Model Management",id:"model-management",level:2},{value:"Model Management by swcli",id:"model-management-by-swcli",level:3},{value:"Model Management by WebUI",id:"model-management-by-webui",level:3},{value:"Model History",id:"model-history",level:2},{value:"Model History Management by swcli",id:"model-history-management-by-swcli",level:2},{value:"Model Evaluation",id:"model-evaluation",level:2},{value:"Model Evaluation by swcli",id:"model-evaluation-by-swcli",level:3},{value:"The Storage Format",id:"format",level:2}],s={toc:m};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A Starwhale Model is a standard format for packaging machine learning models that can be used for various purposes, like model finetuning, model evaluation, and online serving. A Starwhale Model contains the model file, inference codes, configuration files, and any other files required to run the model."),(0,l.kt)("h2",{id:"create-a-starwhale-model"},"Create a Starwhale Model"),(0,l.kt)("p",null,"There are two ways to create a Starwhale Model: by ",(0,l.kt)("a",{parentName:"p",href:"/0.5.7/reference/swcli/model"},"swcli")," or by Python SDK."),(0,l.kt)("h3",{id:"create-a-starwhale-model-by-swcli"},"Create a Starwhale Model by swcli"),(0,l.kt)("p",null,"To create a Starwhale Model by swcli, you need to define a model.yaml, which describes some required information about the model package, and run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model build . --model-yaml /path/to/model.yaml\n")),(0,l.kt)("p",null,"For more information about the command and model.yaml, see ",(0,l.kt)("a",{parentName:"p",href:"/0.5.7/reference/swcli/model#build"},"the swcli reference"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml")," is optional for model building."),(0,l.kt)("h3",{id:"create-a-starwhale-model-by-python-sdk"},"Create a Starwhale Model by Python SDK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import model, predict\n\n@predict\ndef predict_img(data):\n   ...\n\nmodel.build(name="mnist", modules=[predict_img])\n')),(0,l.kt)("h2",{id:"model-management"},"Model Management"),(0,l.kt)("h3",{id:"model-management-by-swcli"},"Model Management by swcli"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/0.5.7/reference/swcli/model#list"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model list"))),(0,l.kt)("td",{parentName:"tr",align:null},"List all Starwhale Models in a project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/0.5.7/reference/swcli/model#info"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model info"))),(0,l.kt)("td",{parentName:"tr",align:null},"Show detail information about a Starwhale Model")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/0.5.7/reference/swcli/model#copy"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model copy"))),(0,l.kt)("td",{parentName:"tr",align:null},"Copy a Starwhale Model to another location")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/0.5.7/reference/swcli/model#remove"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model remove"))),(0,l.kt)("td",{parentName:"tr",align:null},"Remove a Starwhale Model")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/0.5.7/reference/swcli/model#recover"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model recover"))),(0,l.kt)("td",{parentName:"tr",align:null},"Recover a previously removed Starwhale Model")))),(0,l.kt)("h3",{id:"model-management-by-webui"},"Model Management by WebUI"),(0,l.kt)("h2",{id:"model-history"},"Model History"),(0,l.kt)("p",null,"Starwhale Models are versioned. The general rules about versions are described in ",(0,l.kt)("a",{parentName:"p",href:"/0.5.7/concepts/versioning"},"Resource versioning in Starwhale"),"."),(0,l.kt)("h2",{id:"model-history-management-by-swcli"},"Model History Management by swcli"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/0.5.7/reference/swcli/model#list"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model history"))),(0,l.kt)("td",{parentName:"tr",align:null},"List all versions of a Starwhale Model")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/0.5.7/reference/swcli/model#info"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model info"))),(0,l.kt)("td",{parentName:"tr",align:null},"Show detail information about a Starwhale Model version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/0.5.7/reference/swcli/model#diff"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model diff"))),(0,l.kt)("td",{parentName:"tr",align:null},"Compare two versions of a Starwhale model")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/0.5.7/reference/swcli/model#copy"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model copy"))),(0,l.kt)("td",{parentName:"tr",align:null},"Copy a Starwhale Model version to a new one")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/0.5.7/reference/swcli/model#remove"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model remove"))),(0,l.kt)("td",{parentName:"tr",align:null},"Remove a Starwhale Model version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/0.5.7/reference/swcli/model#recover"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model recover"))),(0,l.kt)("td",{parentName:"tr",align:null},"Recover a previously removed Starwhale Model version")))),(0,l.kt)("h2",{id:"model-evaluation"},"Model Evaluation"),(0,l.kt)("h3",{id:"model-evaluation-by-swcli"},"Model Evaluation by swcli"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/0.5.7/reference/swcli/model#eval"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model run"))),(0,l.kt)("td",{parentName:"tr",align:null},"Create an evaluation with a Starwhale Model")))),(0,l.kt)("h2",{id:"format"},"The Storage Format"),(0,l.kt)("p",null,"The Starwhale Model is a tarball file that contains the source directory."))}c.isMDXComponent=!0}}]);