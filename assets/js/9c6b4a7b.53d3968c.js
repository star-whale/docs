"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[7525],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=i,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||r;return a?n.createElement(k,l(l({ref:t},m),{},{components:a})):n.createElement(k,l({ref:t},m))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67066:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(83117),i=(a(67294),a(3905));const r={title:"Starwhale Model Evaluation"},l=void 0,o={unversionedId:"evaluation/index",id:"version-0.5.9/evaluation/index",title:"Starwhale Model Evaluation",description:"Design Overview",source:"@site/versioned_docs/version-0.5.9/evaluation/index.md",sourceDirName:"evaluation",slug:"/evaluation/",permalink:"/0.5.9/evaluation/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.9/evaluation/index.md",tags:[],version:"0.5.9",frontMatter:{title:"Starwhale Model Evaluation"},sidebar:"mainSidebar",previous:{title:"The dataset.yaml Specification",permalink:"/0.5.9/dataset/yaml"},next:{title:"Devices as Kubernetes nodes",permalink:"/0.5.9/evaluation/heterogeneous/node-able"}},p={},s=[{value:"Design Overview",id:"design-overview",level:2},{value:"Starwhale Evaluation Positioning",id:"starwhale-evaluation-positioning",level:3},{value:"Core Features",id:"core-features",level:3},{value:"Key Elements",id:"key-elements",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Command Line Grouping",id:"command-line-grouping",level:3},{value:"Abstraction job-step-task",id:"abstraction-job-step-task",level:2}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"design-overview"},"Design Overview"),(0,i.kt)("h3",{id:"starwhale-evaluation-positioning"},"Starwhale Evaluation Positioning"),(0,i.kt)("p",null,"The goal of ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Evaluation")," is to provide end-to-end management for model evaluation, including creating Jobs, distributing Tasks, viewing model evaluation reports and basic management. ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Evaluation")," is a specific application of ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Model"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Dataset"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Runtime")," in the model evaluation scenario. ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Evaluation")," is part of the MLOps toolchain built by Starwhale. More applications like ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Model Serving"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Training")," will be included in the future."),(0,i.kt)("h3",{id:"core-features"},"Core Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Visualization"),": Both ",(0,i.kt)("inlineCode",{parentName:"p"},"swcli")," and the Web UI provide visualization of model evaluation results, supporting comparison of multiple results. Users can also customize logging of intermediate processes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Multi-scenario Adaptation"),": Whether it's a notebook, desktop or distributed cluster environment, the same commands, Python scripts, artifacts and operations can be used for model evaluation. This satisfies different computational power and data volume requirements.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Seamless Starwhale Integration"),": Leverage ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Runtime")," for the runtime environment, ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Dataset")," as data input, and run models from ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Model"),". Configuration is simple whether using ",(0,i.kt)("inlineCode",{parentName:"p"},"swcli"),", Python SDK or Cloud/Server instance Web UI."))),(0,i.kt)("h3",{id:"key-elements"},"Key Elements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli model run"),": Command line for bulk offline model evaluation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli model serve"),": Command line for online model evaluation.")),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("h3",{id:"command-line-grouping"},"Command Line Grouping"),(0,i.kt)("p",null,"From the perspective of completing an end-to-end ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Evaluation")," workflow, commands can be grouped as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Preparation Stage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset build")," or Starwhale Dataset Python SDK"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli model build")," or Starwhale Model Python SDK"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli runtime build")))),(0,i.kt)("li",{parentName:"ul"},"Evaluation Stage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli model run")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli model serve")))),(0,i.kt)("li",{parentName:"ul"},"Results Stage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli job info")))),(0,i.kt)("li",{parentName:"ul"},"Basic Management",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli job list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli job remove")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli job recover"))))),(0,i.kt)("h2",{id:"abstraction-job-step-task"},"Abstraction job-step-task"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"job"),": A model evaluation task is a ",(0,i.kt)("inlineCode",{parentName:"p"},"job"),", which contains one or more ",(0,i.kt)("inlineCode",{parentName:"p"},"steps"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"step"),": A ",(0,i.kt)("inlineCode",{parentName:"p"},"step")," corresponds to a stage in the evaluation process. With the default PipelineHandler, ",(0,i.kt)("inlineCode",{parentName:"p"},"steps")," are ",(0,i.kt)("inlineCode",{parentName:"p"},"predict")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"evaluate"),". For custom evaluation processes using ",(0,i.kt)("inlineCode",{parentName:"p"},"@handler"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@evaluation.predict"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@evaluation.evaluate")," decorators, ",(0,i.kt)("inlineCode",{parentName:"p"},"steps")," are the decorated functions. ",(0,i.kt)("inlineCode",{parentName:"p"},"Steps")," can have dependencies, forming a DAG. A ",(0,i.kt)("inlineCode",{parentName:"p"},"step")," contains one or more ",(0,i.kt)("inlineCode",{parentName:"p"},"tasks"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Tasks")," in the same ",(0,i.kt)("inlineCode",{parentName:"p"},"step")," have the same logic but different inputs. A common approach is to split the dataset into multiple parts, with each part passed to a ",(0,i.kt)("inlineCode",{parentName:"p"},"task"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Tasks")," can run in parallel.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"task"),": A ",(0,i.kt)("inlineCode",{parentName:"p"},"task")," is the final running entity. In Cloud/Server instances, a ",(0,i.kt)("inlineCode",{parentName:"p"},"task")," is a container in a Pod. In Standalone instances, a ",(0,i.kt)("inlineCode",{parentName:"p"},"task")," is a Python Thread."))),(0,i.kt)("p",null,"The job-step-task abstraction is the basis for implementing distributed runs in ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Evaluation"),"."))}d.isMDXComponent=!0}}]);