"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[45286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=l,k=s["".concat(m,".").concat(c)]||s[c]||u[c]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},16289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(83117),l=(n(67294),n(3905));const r={title:"The model.yaml Specification"},i=void 0,o={unversionedId:"model/yaml",id:"version-0.6.10/model/yaml",title:"The model.yaml Specification",description:"model.yaml is optional for swcli model build.",source:"@site/versioned_docs/version-0.6.10/model/yaml.md",sourceDirName:"model",slug:"/model/yaml",permalink:"/0.6.10/model/yaml",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.10/model/yaml.md",tags:[],version:"0.6.10",frontMatter:{title:"The model.yaml Specification"},sidebar:"mainSidebar",previous:{title:"Starwhale Model",permalink:"/0.6.10/model/"},next:{title:"Starwhale Runtime",permalink:"/0.6.10/runtime/"}},m={},d=[{value:"YAML Field Descriptions",id:"yaml-field-descriptions",level:2},{value:"Example",id:"example",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml")," is optional for ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model build"),".")),(0,l.kt)("p",null,"When building a Starwhale Model using the ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model build")," command, you can specify a yaml file that follows a specific format via the ",(0,l.kt)("inlineCode",{parentName:"p"},"--model-yaml")," parameter to simplify specifying build parameters."),(0,l.kt)("p",null,"Even without specifying the ",(0,l.kt)("inlineCode",{parentName:"p"},"--model-yaml")," parameter, ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model build")," will automatically look for a ",(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml")," file under the ",(0,l.kt)("inlineCode",{parentName:"p"},"${workdir}")," directory and extract parameters from it. Parameters specified on the ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model build")," command line take precedence over equivalent configurations in ",(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml"),", so you can think of ",(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml")," as a file-based representation of the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," command line."),(0,l.kt)("p",null,"When building a Starwhale Model using the Python SDK, the ",(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml")," file does not take effect."),(0,l.kt)("h2",{id:"yaml-field-descriptions"},"YAML Field Descriptions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the Starwhale Model, equivalent to ",(0,l.kt)("inlineCode",{parentName:"td"},"--name")," parameter."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"run.modules"),(0,l.kt)("td",{parentName:"tr",align:null},"Python Modules searched during model build, can specify multiple entry points for model execution, format is Python Importable path. Equivalent to ",(0,l.kt)("inlineCode",{parentName:"td"},"--module")," parameter."),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"List","[String]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"run.handler"),(0,l.kt)("td",{parentName:"tr",align:null},"Deprecated alias of run.modules, can only specify one entry point."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},'dataset.yaml format version, currently only supports "1.0"'),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"desc"),(0,l.kt)("td",{parentName:"tr",align:null},"Model description, equivalent to ",(0,l.kt)("inlineCode",{parentName:"td"},"--desc")," parameter."),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'\nname: helloworld\n\nrun:\n  modules:\n    - src.evaluator\n\ndesc: "example yaml"\n\n')),(0,l.kt)("p",null,"A Starwhale model named helloworld, searches for functions decorated with ",(0,l.kt)("inlineCode",{parentName:"p"},"@evaluation.predict"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"@evaluation.evaluate")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"@handler"),", or classes inheriting from ",(0,l.kt)("inlineCode",{parentName:"p"},"PipelineHandler")," in src/evaluator.py under ",(0,l.kt)("inlineCode",{parentName:"p"},"${WORKDIR}")," of the ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model build")," command. These functions or classes will be added to the list of runnable entry points for the Starwhale model. When running the model via ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model run")," or Web UI, select the corresponding entry point (handler) to run."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml")," is optional, parameters defined in yaml can also be specified via ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," command line parameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\nswcli model build . --model-yaml model.yaml\n\n")),(0,l.kt)("p",null,"Is equivalent to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\nswcli model build . --name helloworld --module src.evaluator --desc "example yaml"\n\n')))}u.isMDXComponent=!0}}]);