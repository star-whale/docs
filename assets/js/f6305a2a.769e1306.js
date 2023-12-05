"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[6392],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=m(a),u=l,h=s["".concat(d,".").concat(u)]||s[u]||p[u]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},30678:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(83117),l=(a(67294),a(3905));const r={title:"Starwhale Model"},o=void 0,i={unversionedId:"model/index",id:"model/index",title:"Starwhale Model",description:"overview",source:"@site/docs/model/index.md",sourceDirName:"model",slug:"/model/",permalink:"/next/model/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/model/index.md",tags:[],version:"current",frontMatter:{title:"Starwhale Model"},sidebar:"mainSidebar",previous:{title:"Voucher",permalink:"/next/cloud/billing/voucher"},next:{title:"The model.yaml Specification",permalink:"/next/model/yaml"}},d={},m=[{value:"Create a Starwhale Model",id:"create-a-starwhale-model",level:2},{value:"Create a Starwhale Model by swcli",id:"create-a-starwhale-model-by-swcli",level:3},{value:"Create a Starwhale Model by Python SDK",id:"create-a-starwhale-model-by-python-sdk",level:3},{value:"Model Management",id:"model-management",level:2},{value:"Model Management by swcli",id:"model-management-by-swcli",level:3},{value:"Model Management by WebUI",id:"model-management-by-webui",level:3},{value:"Model History",id:"model-history",level:2},{value:"Model History Management by swcli",id:"model-history-management-by-swcli",level:2},{value:"Model Evaluation",id:"model-evaluation",level:2},{value:"Model Evaluation by swcli",id:"model-evaluation-by-swcli",level:3},{value:"The Storage Format",id:"format",level:2}],c={toc:m};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/model-overview.svg",alt:"overview"})),(0,l.kt)("p",null,"A Starwhale Model is a standard format for packaging machine learning models that can be used for various purposes, like model fine-tuning, model evaluation, and online serving. A Starwhale Model contains the model file, inference codes, configuration files, and any other files required to run the model."),(0,l.kt)("h2",{id:"create-a-starwhale-model"},"Create a Starwhale Model"),(0,l.kt)("p",null,"There are two ways to create a Starwhale Model: by ",(0,l.kt)("a",{parentName:"p",href:"/next/reference/swcli/model"},"swcli")," or by ",(0,l.kt)("a",{parentName:"p",href:"/next/reference/sdk/model"},"Python SDK"),"."),(0,l.kt)("h3",{id:"create-a-starwhale-model-by-swcli"},"Create a Starwhale Model by swcli"),(0,l.kt)("p",null,"To create a Starwhale Model by swcli, you need to define a model.yaml, which describes some required information about the model package, and run the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model build . --model-yaml /path/to/model.yaml\n")),(0,l.kt)("p",null,"For more information about the command and model.yaml, see ",(0,l.kt)("a",{parentName:"p",href:"/next/reference/swcli/model#build"},"the swcli reference"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml")," is optional for model building."),(0,l.kt)("h3",{id:"create-a-starwhale-model-by-python-sdk"},"Create a Starwhale Model by Python SDK"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import model, predict\n\n@predict\ndef predict_img(data):\n   ...\n\nmodel.build(name="mnist", modules=[predict_img])\n')),(0,l.kt)("h2",{id:"model-management"},"Model Management"),(0,l.kt)("h3",{id:"model-management-by-swcli"},"Model Management by swcli"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/reference/swcli/model#list"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model list"))),(0,l.kt)("td",{parentName:"tr",align:null},"List all Starwhale Models in a project")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/reference/swcli/model#info"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model info"))),(0,l.kt)("td",{parentName:"tr",align:null},"Show detail information about a Starwhale Model")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/reference/swcli/model#copy"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model copy"))),(0,l.kt)("td",{parentName:"tr",align:null},"Copy a Starwhale Model to another location")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/reference/swcli/model#remove"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model remove"))),(0,l.kt)("td",{parentName:"tr",align:null},"Remove a Starwhale Model")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/reference/swcli/model#recover"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model recover"))),(0,l.kt)("td",{parentName:"tr",align:null},"Recover a previously removed Starwhale Model")))),(0,l.kt)("h3",{id:"model-management-by-webui"},"Model Management by WebUI"),(0,l.kt)("h2",{id:"model-history"},"Model History"),(0,l.kt)("p",null,"Starwhale Models are versioned. The general rules about versions are described in ",(0,l.kt)("a",{parentName:"p",href:"/next/concepts/versioning"},"Resource versioning in Starwhale"),"."),(0,l.kt)("h2",{id:"model-history-management-by-swcli"},"Model History Management by swcli"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/reference/swcli/model#list"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model history"))),(0,l.kt)("td",{parentName:"tr",align:null},"List all versions of a Starwhale Model")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/reference/swcli/model#info"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model info"))),(0,l.kt)("td",{parentName:"tr",align:null},"Show detail information about a Starwhale Model version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/reference/swcli/model#diff"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model diff"))),(0,l.kt)("td",{parentName:"tr",align:null},"Compare two versions of a Starwhale model")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/reference/swcli/model#copy"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model copy"))),(0,l.kt)("td",{parentName:"tr",align:null},"Copy a Starwhale Model version to a new one")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/reference/swcli/model#remove"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model remove"))),(0,l.kt)("td",{parentName:"tr",align:null},"Remove a Starwhale Model version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/reference/swcli/model#recover"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model recover"))),(0,l.kt)("td",{parentName:"tr",align:null},"Recover a previously removed Starwhale Model version")))),(0,l.kt)("h2",{id:"model-evaluation"},"Model Evaluation"),(0,l.kt)("h3",{id:"model-evaluation-by-swcli"},"Model Evaluation by swcli"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/next/reference/swcli/model#eval"},(0,l.kt)("inlineCode",{parentName:"a"},"swcli model run"))),(0,l.kt)("td",{parentName:"tr",align:null},"Create an evaluation with a Starwhale Model")))),(0,l.kt)("h2",{id:"format"},"The Storage Format"),(0,l.kt)("p",null,"The Starwhale Model is a tarball file that contains the source directory."))}p.isMDXComponent=!0}}]);