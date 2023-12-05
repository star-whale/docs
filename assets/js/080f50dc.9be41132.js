"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[3194],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=l.createContext({}),m=function(e){var t=l.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return l.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=m(a),u=r,h=s["".concat(d,".").concat(u)]||s[u]||p[u]||n;return a?l.createElement(h,o(o({ref:t},c),{},{components:a})):l.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<n;m++)o[m]=a[m];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}s.displayName="MDXCreateElement"},54831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var l=a(83117),r=(a(67294),a(3905));const n={title:"Starwhale Model"},o=void 0,i={unversionedId:"model/index",id:"version-0.6.5/model/index",title:"Starwhale Model",description:"overview",source:"@site/versioned_docs/version-0.6.5/model/index.md",sourceDirName:"model",slug:"/model/",permalink:"/0.6.5/model/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.5/model/index.md",tags:[],version:"0.6.5",frontMatter:{title:"Starwhale Model"},sidebar:"mainSidebar",previous:{title:"Voucher",permalink:"/0.6.5/cloud/billing/voucher"},next:{title:"The model.yaml Specification",permalink:"/0.6.5/model/yaml"}},d={},m=[{value:"Create a Starwhale Model",id:"create-a-starwhale-model",level:2},{value:"Create a Starwhale Model by swcli",id:"create-a-starwhale-model-by-swcli",level:3},{value:"Create a Starwhale Model by Python SDK",id:"create-a-starwhale-model-by-python-sdk",level:3},{value:"Model Management",id:"model-management",level:2},{value:"Model Management by swcli",id:"model-management-by-swcli",level:3},{value:"Model Management by WebUI",id:"model-management-by-webui",level:3},{value:"Model History",id:"model-history",level:2},{value:"Model History Management by swcli",id:"model-history-management-by-swcli",level:2},{value:"Model Evaluation",id:"model-evaluation",level:2},{value:"Model Evaluation by swcli",id:"model-evaluation-by-swcli",level:3},{value:"The Storage Format",id:"format",level:2}],c={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/model-overview.svg",alt:"overview"})),(0,r.kt)("p",null,"A Starwhale Model is a standard format for packaging machine learning models that can be used for various purposes, like model fine-tuning, model evaluation, and online serving. A Starwhale Model contains the model file, inference codes, configuration files, and any other files required to run the model."),(0,r.kt)("h2",{id:"create-a-starwhale-model"},"Create a Starwhale Model"),(0,r.kt)("p",null,"There are two ways to create a Starwhale Model: by ",(0,r.kt)("a",{parentName:"p",href:"/0.6.5/reference/swcli/model"},"swcli")," or by ",(0,r.kt)("a",{parentName:"p",href:"/0.6.5/reference/sdk/model"},"Python SDK"),"."),(0,r.kt)("h3",{id:"create-a-starwhale-model-by-swcli"},"Create a Starwhale Model by swcli"),(0,r.kt)("p",null,"To create a Starwhale Model by swcli, you need to define a model.yaml, which describes some required information about the model package, and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model build . --model-yaml /path/to/model.yaml\n")),(0,r.kt)("p",null,"For more information about the command and model.yaml, see ",(0,r.kt)("a",{parentName:"p",href:"/0.6.5/reference/swcli/model#build"},"the swcli reference"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"model.yaml")," is optional for model building."),(0,r.kt)("h3",{id:"create-a-starwhale-model-by-python-sdk"},"Create a Starwhale Model by Python SDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import model, predict\n\n@predict\ndef predict_img(data):\n   ...\n\nmodel.build(name="mnist", modules=[predict_img])\n')),(0,r.kt)("h2",{id:"model-management"},"Model Management"),(0,r.kt)("h3",{id:"model-management-by-swcli"},"Model Management by swcli"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/0.6.5/reference/swcli/model#list"},(0,r.kt)("inlineCode",{parentName:"a"},"swcli model list"))),(0,r.kt)("td",{parentName:"tr",align:null},"List all Starwhale Models in a project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/0.6.5/reference/swcli/model#info"},(0,r.kt)("inlineCode",{parentName:"a"},"swcli model info"))),(0,r.kt)("td",{parentName:"tr",align:null},"Show detail information about a Starwhale Model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/0.6.5/reference/swcli/model#copy"},(0,r.kt)("inlineCode",{parentName:"a"},"swcli model copy"))),(0,r.kt)("td",{parentName:"tr",align:null},"Copy a Starwhale Model to another location")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/0.6.5/reference/swcli/model#remove"},(0,r.kt)("inlineCode",{parentName:"a"},"swcli model remove"))),(0,r.kt)("td",{parentName:"tr",align:null},"Remove a Starwhale Model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/0.6.5/reference/swcli/model#recover"},(0,r.kt)("inlineCode",{parentName:"a"},"swcli model recover"))),(0,r.kt)("td",{parentName:"tr",align:null},"Recover a previously removed Starwhale Model")))),(0,r.kt)("h3",{id:"model-management-by-webui"},"Model Management by WebUI"),(0,r.kt)("h2",{id:"model-history"},"Model History"),(0,r.kt)("p",null,"Starwhale Models are versioned. The general rules about versions are described in ",(0,r.kt)("a",{parentName:"p",href:"/0.6.5/concepts/versioning"},"Resource versioning in Starwhale"),"."),(0,r.kt)("h2",{id:"model-history-management-by-swcli"},"Model History Management by swcli"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/0.6.5/reference/swcli/model#list"},(0,r.kt)("inlineCode",{parentName:"a"},"swcli model history"))),(0,r.kt)("td",{parentName:"tr",align:null},"List all versions of a Starwhale Model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/0.6.5/reference/swcli/model#info"},(0,r.kt)("inlineCode",{parentName:"a"},"swcli model info"))),(0,r.kt)("td",{parentName:"tr",align:null},"Show detail information about a Starwhale Model version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/0.6.5/reference/swcli/model#diff"},(0,r.kt)("inlineCode",{parentName:"a"},"swcli model diff"))),(0,r.kt)("td",{parentName:"tr",align:null},"Compare two versions of a Starwhale model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/0.6.5/reference/swcli/model#copy"},(0,r.kt)("inlineCode",{parentName:"a"},"swcli model copy"))),(0,r.kt)("td",{parentName:"tr",align:null},"Copy a Starwhale Model version to a new one")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/0.6.5/reference/swcli/model#remove"},(0,r.kt)("inlineCode",{parentName:"a"},"swcli model remove"))),(0,r.kt)("td",{parentName:"tr",align:null},"Remove a Starwhale Model version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/0.6.5/reference/swcli/model#recover"},(0,r.kt)("inlineCode",{parentName:"a"},"swcli model recover"))),(0,r.kt)("td",{parentName:"tr",align:null},"Recover a previously removed Starwhale Model version")))),(0,r.kt)("h2",{id:"model-evaluation"},"Model Evaluation"),(0,r.kt)("h3",{id:"model-evaluation-by-swcli"},"Model Evaluation by swcli"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/0.6.5/reference/swcli/model#eval"},(0,r.kt)("inlineCode",{parentName:"a"},"swcli model run"))),(0,r.kt)("td",{parentName:"tr",align:null},"Create an evaluation with a Starwhale Model")))),(0,r.kt)("h2",{id:"format"},"The Storage Format"),(0,r.kt)("p",null,"The Starwhale Model is a tarball file that contains the source directory."))}p.isMDXComponent=!0}}]);