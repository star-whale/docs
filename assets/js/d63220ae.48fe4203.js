"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[71407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(83117),i=(n(67294),n(3905));const r={title:"Starwhale Model Evaluation"},l=void 0,o={unversionedId:"evaluation/index",id:"version-0.6.11/evaluation/index",title:"Starwhale Model Evaluation",description:"Design Overview",source:"@site/versioned_docs/version-0.6.11/evaluation/index.md",sourceDirName:"evaluation",slug:"/evaluation/",permalink:"/evaluation/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.11/evaluation/index.md",tags:[],version:"0.6.11",frontMatter:{title:"Starwhale Model Evaluation"},sidebar:"mainSidebar",previous:{title:"Integration with Other ML Libraries",permalink:"/dataset/integration"},next:{title:"Devices as Kubernetes nodes",permalink:"/evaluation/heterogeneous/node-able"}},p={},s=[{value:"Design Overview",id:"design-overview",level:2},{value:"Starwhale Evaluation Positioning",id:"starwhale-evaluation-positioning",level:3},{value:"Core Features",id:"core-features",level:3},{value:"Key Elements",id:"key-elements",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Command Line Grouping",id:"command-line-grouping",level:3},{value:"Abstraction job-step-task",id:"abstraction-job-step-task",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"design-overview"},"Design Overview"),(0,i.kt)("h3",{id:"starwhale-evaluation-positioning"},"Starwhale Evaluation Positioning"),(0,i.kt)("p",null,"The goal of ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Evaluation")," is to provide end-to-end management for model evaluation, including creating Jobs, distributing Tasks, viewing model evaluation reports and basic management. ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Evaluation")," is a specific application of ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Model"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Dataset"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Runtime")," in the model evaluation scenario. ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Evaluation")," is part of the MLOps toolchain built by Starwhale. More applications like ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Model Serving"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Training")," will be included in the future."),(0,i.kt)("h3",{id:"core-features"},"Core Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Visualization"),": Both ",(0,i.kt)("inlineCode",{parentName:"p"},"swcli")," and the Web UI provide visualization of model evaluation results, supporting comparison of multiple results. Users can also customize logging of intermediate processes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Multi-scenario Adaptation"),": Whether it's a notebook, desktop or distributed cluster environment, the same commands, Python scripts, artifacts and operations can be used for model evaluation. This satisfies different computational power and data volume requirements.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Seamless Starwhale Integration"),": Leverage ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Runtime")," for the runtime environment, ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Dataset")," as data input, and run models from ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Model"),". Configuration is simple whether using ",(0,i.kt)("inlineCode",{parentName:"p"},"swcli"),", Python SDK or Cloud/Server instance Web UI."))),(0,i.kt)("h3",{id:"key-elements"},"Key Elements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli model run"),": Command line for bulk offline model evaluation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli model serve"),": Command line for online model evaluation.")),(0,i.kt)("h2",{id:"best-practices"},"Best Practices"),(0,i.kt)("h3",{id:"command-line-grouping"},"Command Line Grouping"),(0,i.kt)("p",null,"From the perspective of completing an end-to-end ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Evaluation")," workflow, commands can be grouped as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Preparation Stage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset build")," or Starwhale Dataset Python SDK"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli model build")," or Starwhale Model Python SDK"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli runtime build")))),(0,i.kt)("li",{parentName:"ul"},"Evaluation Stage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli model run")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli model serve")))),(0,i.kt)("li",{parentName:"ul"},"Results Stage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli job info")))),(0,i.kt)("li",{parentName:"ul"},"Basic Management",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli job list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli job remove")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli job recover"))))),(0,i.kt)("h2",{id:"abstraction-job-step-task"},"Abstraction job-step-task"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"job"),": A model evaluation task is a ",(0,i.kt)("inlineCode",{parentName:"p"},"job"),", which contains one or more ",(0,i.kt)("inlineCode",{parentName:"p"},"steps"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"step"),": A ",(0,i.kt)("inlineCode",{parentName:"p"},"step")," corresponds to a stage in the evaluation process. With the default PipelineHandler, ",(0,i.kt)("inlineCode",{parentName:"p"},"steps")," are ",(0,i.kt)("inlineCode",{parentName:"p"},"predict")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"evaluate"),". For custom evaluation processes using ",(0,i.kt)("inlineCode",{parentName:"p"},"@handler"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@evaluation.predict"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@evaluation.evaluate")," decorators, ",(0,i.kt)("inlineCode",{parentName:"p"},"steps")," are the decorated functions. ",(0,i.kt)("inlineCode",{parentName:"p"},"Steps")," can have dependencies, forming a DAG. A ",(0,i.kt)("inlineCode",{parentName:"p"},"step")," contains one or more ",(0,i.kt)("inlineCode",{parentName:"p"},"tasks"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Tasks")," in the same ",(0,i.kt)("inlineCode",{parentName:"p"},"step")," have the same logic but different inputs. A common approach is to split the dataset into multiple parts, with each part passed to a ",(0,i.kt)("inlineCode",{parentName:"p"},"task"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"Tasks")," can run in parallel.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"task"),": A ",(0,i.kt)("inlineCode",{parentName:"p"},"task")," is the final running entity. In Cloud/Server instances, a ",(0,i.kt)("inlineCode",{parentName:"p"},"task")," is a container in a Pod. In Standalone instances, a ",(0,i.kt)("inlineCode",{parentName:"p"},"task")," is a Python Thread."))),(0,i.kt)("p",null,"The job-step-task abstraction is the basis for implementing distributed runs in ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Evaluation"),"."))}d.isMDXComponent=!0}}]);