"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[24188],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>p});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(t),p=r,h=c["".concat(s,".").concat(p)]||c[p]||m[p]||i;return t?n.createElement(h,l(l({ref:a},d),{},{components:t})):n.createElement(h,l({ref:a},d))}));function p(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4515:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(83117),r=(t(67294),t(3905));const i={slug:"/",title:"What is Starwhale"},l=void 0,o={unversionedId:"what-is-starwhale",id:"version-0.6.8/what-is-starwhale",title:"What is Starwhale",description:"Overview",source:"@site/versioned_docs/version-0.6.8/what-is-starwhale.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.8/what-is-starwhale.md",tags:[],version:"0.6.8",frontMatter:{slug:"/",title:"What is Starwhale"},sidebar:"mainSidebar",next:{title:"Getting started",permalink:"/getting-started/"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Starwhale Products",id:"starwhale-products",level:2},{value:"Starwhale Framework",id:"starwhale-framework",level:2},{value:"Starwhale Use Cases",id:"starwhale-use-cases",level:2},{value:"Start Your Starwhale Journey",id:"start-your-starwhale-journey",level:2}],d={toc:u};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Starwhale is an MLOps/LLMOps platform that provides R&D operation management capabilities for machine learning projects, establishing standardized model development, testing, deployment and operation processes, connecting business teams, AI teams and operation teams. It solves problems such as long model iteration cycles, team collaboration, and waste of human resources in the machine learning process. Starwhale provides Standalone, Server and Cloud in three instance ways to meet the development needs of a single machine environment, private cluster deployment and multi-cloud services hosted by the Starwhale team."),(0,r.kt)("p",null,"Starwhale is also an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale"},"open source platform"),", using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/main/LICENSE"},"Apache-2.0 license"),"."),(0,r.kt)("h2",{id:"starwhale-products"},"Starwhale Products"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/products.png",alt:"products"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fundamentals:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"model/index"},"Starwhale Model"),": Starwhale Model is a standard package format for machine learning models, which can be used for various purposes, such as model fine-tuning, model evaluation, and online services. Starwhale Model includes model files, inference code, configuration files, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"dataset/index"},"Starwhale Dataset"),": Starwhale Dataset enables efficient data storage, data loading, and data visualization, making it a data management tool for the ML/DL field."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"runtime/index"},"Starwhale Runtime"),": Starwhale Runtime provides a reproducible and shareable runtime environment for running Python programs. With Starwhale Runtime, you can easily share with others and use it on Starwhale Server and Starwhale Cloud instances."))),(0,r.kt)("li",{parentName:"ul"},"Model Evaluation:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"evaluation/index"},"Model Evaluation"),": Starwhale Model Evaluation allows users to implement complex, production-level, distributed model evaluation tasks with minimal Python code using the SDK."),(0,r.kt)("li",{parentName:"ul"},"Live Demo: Evaluate models online through a Web UI."),(0,r.kt)("li",{parentName:"ul"},"Reports: Create shareable, automatically integrated evaluation reports."),(0,r.kt)("li",{parentName:"ul"},"Tables: Provide multi-dimensional model evaluation result comparisons and displays, with support for multimedia data such as images, audio, and video. The tables can present all the data and artifacts recorded during the evaluation process using the Starwhale Python SDK."))),(0,r.kt)("li",{parentName:"ul"},"LLM Fine-tuning: Provide a full toolchain for LLM fine-tuning, including model fine-tuning, batch evaluation comparison, online evaluation comparison, and model publishing."),(0,r.kt)("li",{parentName:"ul"},"Deployment Instances:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Starwhale Standalone: Deployed in a local development environment, managed by the ",(0,r.kt)("inlineCode",{parentName:"li"},"swcli")," command-line tool, meeting development and debugging needs."),(0,r.kt)("li",{parentName:"ul"},"Starwhale Server: Deployed in a private data center, relying on a Kubernetes cluster, providing centralized, web-based, and secure services."),(0,r.kt)("li",{parentName:"ul"},"Starwhale Cloud: Hosted on a public cloud, with the access address ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.starwhale.ai"},"https://cloud.starwhale.ai"),". The Starwhale team is responsible for maintenance, and no installation is required. You can start using it after registering an account.")))),(0,r.kt)("h2",{id:"starwhale-framework"},"Starwhale Framework"),(0,r.kt)("img",{src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/framework.png",alt:"framework",width:"75%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Individual Developers",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use Starwhale Standalone instances."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"swcli"),": A set of command-line tools written in Python that can be used to complete tasks such as model building, evaluation, and copying."),(0,r.kt)("li",{parentName:"ul"},"Starwhale Python SDK: A series of utility functions or classes that simplify tasks such as model evaluation and fine-tuning, dataset construction, and loading."))),(0,r.kt)("li",{parentName:"ul"},"For Team Users",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use Starwhale Server or Starwhale Cloud instances, which provide a Web UI."),(0,r.kt)("li",{parentName:"ul"},"Core Components:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"api server"),": Depends on MySQL database and object storage, and implements the API for the Starwhale platform."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"scheduler"),": Depends on Docker or Kubernetes, and schedules evaluation tasks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"datastore"),": Depends on object storage, providing a Big Table-like storage and access method to meet the storage and retrieval requirements of datasets and evaluation data."))),(0,r.kt)("li",{parentName:"ul"},"External Dependencies:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Storage: MySQL and object storage."),(0,r.kt)("li",{parentName:"ul"},"Containers: Docker (single-node) or Kubernetes (cluster)."),(0,r.kt)("li",{parentName:"ul"},"Compute Resources: Bare metal or public cloud.")))))),(0,r.kt)("h2",{id:"starwhale-use-cases"},"Starwhale Use Cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dataset Management"),": With the Starwhale Dataset Python SDK, you can easily import, create, distribute, and load datasets while achieving fine-grained version control and visualization."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Model Management"),": By using a simple packaging mechanism, you can generate Starwhale Model packages that include models, configuration files, and code, providing efficient distribution, version management, Model Registry, and visualization, making the daily management of model packages more straightforward."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Machine Learning Runtime Sharing"),": By exporting the development environment or writing a simple YAML, you can reproduce the environment in other instances, achieving a stable and consistent runtime. Starwhale Runtime abstracts and shields some underlying dependencies, so users don't need to master Dockerfile writing or CUDA installation, making it easy to define an environment that meets the requirements of machine learning programs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Model Evaluation"),": With the Starwhale Evaluation Python SDK, you can implement efficient, large-scale, multi-dataset, and multi-stage model evaluations in a distributed cluster environment with minimal code, record data and artifacts generated during the evaluation process in Starwhale Tables, and provide various visualization methods."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Online Evaluation"),": Quickly create interactive Web UI online services for Starwhale models to perform rapid testing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Model Fine-tuning"),": Provide a complete toolchain for fine-tuning large language models (LLMs), making the model fine-tuning process faster and more quantifiable.")),(0,r.kt)("p",null,"Starwhale is an open platform that can be used for individual functions or combined for use, with the core goal of providing a convenient tool for data scientists and machine learning engineers to improve work efficiency."),(0,r.kt)("h2",{id:"start-your-starwhale-journey"},"Start Your Starwhale Journey"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Complete the ",(0,r.kt)("a",{parentName:"li",href:"swcli/installation"},"installation of Starwhale Client")," and ",(0,r.kt)("a",{parentName:"li",href:"server/installation/server-start"},"launch of Starwhale Server")," within 5-10 minutes."),(0,r.kt)("li",{parentName:"ul"},"Follow the ",(0,r.kt)("a",{parentName:"li",href:"server/installation/server-start"},"Starwhale Standalone Getting Started Guide")," to build, evaluate, and visualize the helloworld example's model, dataset, and runtime in your local environment."),(0,r.kt)("li",{parentName:"ul"},"Refer to the ",(0,r.kt)("a",{parentName:"li",href:"getting-started/server"},"Starwhale Server Getting Started Guide")," to run the helloworld example's model evaluation in Starwhale Server."),(0,r.kt)("li",{parentName:"ul"},"Read the ",(0,r.kt)("a",{parentName:"li",href:"swcli"},"User Guide")," and ",(0,r.kt)("a",{parentName:"li",href:"reference/swcli"},"Reference Guide"),", and refer to the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/starwhale-ai/starwhale/tree/main/examples"},"examples")," to explore more features and functionalities.")))}m.isMDXComponent=!0}}]);