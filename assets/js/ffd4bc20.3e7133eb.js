"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[2269],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=i,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92015:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(83117),i=(a(67294),a(3905));const r={title:"Python SDK Overview"},l=void 0,o={unversionedId:"reference/sdk/overview",id:"version-0.5.9/reference/sdk/overview",title:"Python SDK Overview",description:"Starwhale provides a series of Python SDKs to help manage datasets, models, evaluations etc. Using the Starwhale Python SDK can make it easier to complete your ML/DL development tasks.",source:"@site/versioned_docs/version-0.5.9/reference/sdk/overview.md",sourceDirName:"reference/sdk",slug:"/reference/sdk/overview",permalink:"/0.5.9/reference/sdk/overview",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.9/reference/sdk/overview.md",tags:[],version:"0.5.9",frontMatter:{title:"Python SDK Overview"},sidebar:"mainSidebar",previous:{title:"Utility Commands",permalink:"/0.5.9/reference/swcli/utilities"},next:{title:"Starwhale Dataset SDK",permalink:"/0.5.9/reference/sdk/dataset"}},s={},p=[{value:"Classes",id:"classes",level:2},{value:"Functions",id:"functions",level:2},{value:"Data Types",id:"data-types",level:2},{value:"Other",id:"other",level:2},{value:"Further reading",id:"further-reading",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Starwhale provides a series of Python SDKs to help manage datasets, models, evaluations etc. Using the Starwhale Python SDK can make it easier to complete your ML/DL development tasks."),(0,i.kt)("h2",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PipelineHandler"),": Provides default model evaluation process definition, requires implementation of ",(0,i.kt)("inlineCode",{parentName:"li"},"predict")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"evaluate")," methods."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Context"),": Passes context information during model evaluation, including Project, Task ID etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"class Dataset"),": Starwhale Dataset class."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"class starwhale.api.service.Service"),": The base class of online evaluation.")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@multi_classification"),": Decorator for multi-class problems to simplify evaluate result calculation and storage for better evaluation presentation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@handler"),": Decorator to define a running entity with resource attributes (mem/cpu/gpu). You can control replica count. Handlers can form DAGs through dependencies to control execution flow."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@evaluation.predict"),": Decorator to define inference process in model evaluation, similar to map phase in MapReduce."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@evaluation.evaluate"),": Decorator to define evaluation process in model evaluation, similar to reduce phase in MapReduce."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"evaluation.log"),": Log evaluation metrics to the specific tables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"evaluation.log_summary"),": Log certain metrics to the summary table."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"evaluation.iter"),": Iterate and read data from the certain tables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"model.build"),": Build Starwhale model."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@fine_tune"),": Decorator to define model fine-tuning process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"init_logger"),": Set log level, implement 5-level logging."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dataset"),": Get ",(0,i.kt)("inlineCode",{parentName:"li"},"starwhale.Dataset")," object, by creating new datasets or loading existing datasets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@starwhale.api.service.api"),": Decorator to provide a simple Web Handler input definition based on Gradio.")),(0,i.kt)("h2",{id:"data-types"},"Data Types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COCOObjectAnnotation"),": Provides COCO format definitions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BoundingBox"),": Bounding box type, currently in ",(0,i.kt)("inlineCode",{parentName:"li"},"LTWH")," format - ",(0,i.kt)("inlineCode",{parentName:"li"},"left_x"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"top_y"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"height"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ClassLabel"),": Describes the number and types of labels."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Image"),": Image type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GrayscaleImage"),": Grayscale image type, e.g. MNIST digit images, a special case of ",(0,i.kt)("inlineCode",{parentName:"li"},"Image")," type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Audio"),": Audio type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Video"),": Video type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Text"),": Text type, default ",(0,i.kt)("inlineCode",{parentName:"li"},"utf-8")," encoding, for storing large texts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Binary"),": Binary type, stored in bytes, for storing large binary content."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Line"),": Line type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Point"),": Point type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Polygon"),": Polygon type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Link"),": Link type, for creating ",(0,i.kt)("inlineCode",{parentName:"li"},"remote-link")," data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"S3LinkAuth"),": When data is stored in S3-based object storage, this type describes auth and key info."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MIMEType"),": Describes multimedia types supported by Starwhale, used in ",(0,i.kt)("inlineCode",{parentName:"li"},"mime_type")," attribute of ",(0,i.kt)("inlineCode",{parentName:"li"},"Image"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Video")," etc for better Dataset Viewer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LinkType"),": Describes remote link types supported by Starwhale, currently ",(0,i.kt)("inlineCode",{parentName:"li"},"LocalFS")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"S3"),".")),(0,i.kt)("h2",{id:"other"},"Other"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__version__"),": Version of Starwhale Python SDK and ",(0,i.kt)("inlineCode",{parentName:"li"},"swcli"),", string constant.")),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you want to build and manage datasets, read about the ",(0,i.kt)("a",{parentName:"li",href:"dataset"},"Starwhale Dataset SDK")," and ",(0,i.kt)("a",{parentName:"li",href:"type"},"Starwhale Data Types"),"."),(0,i.kt)("li",{parentName:"ul"},"If you want to write model evaluation and fine-tuning programs, read about the ",(0,i.kt)("a",{parentName:"li",href:"evaluation"},"Starwhale Evaluation SDK"),"."),(0,i.kt)("li",{parentName:"ul"},"If you want to build and manage Starwhale model packages through Python scripts, read about the ",(0,i.kt)("a",{parentName:"li",href:"model"},"Starwhale Model SDK"),"."),(0,i.kt)("li",{parentName:"ul"},"If you want to learn about other utility functions, read about ",(0,i.kt)("a",{parentName:"li",href:"other"},"Other SDKs"),".")))}u.isMDXComponent=!0}}]);