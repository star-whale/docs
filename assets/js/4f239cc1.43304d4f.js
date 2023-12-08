"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[55182],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),u=i,h=c["".concat(o,".").concat(u)]||c[u]||m[u]||l;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<l;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},62676:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(83117),i=(a(67294),a(3905));const l={title:"Starwhale Dataset User Guide"},r=void 0,s={unversionedId:"dataset/index",id:"version-0.6.0/dataset/index",title:"Starwhale Dataset User Guide",description:"overview",source:"@site/versioned_docs/version-0.6.0/dataset/index.md",sourceDirName:"dataset",slug:"/dataset/",permalink:"/0.6.0/dataset/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.0/dataset/index.md",tags:[],version:"0.6.0",frontMatter:{title:"Starwhale Dataset User Guide"},sidebar:"mainSidebar",previous:{title:"The runtime.yaml Specification",permalink:"/0.6.0/runtime/yaml"},next:{title:"The dataset.yaml Specification",permalink:"/0.6.0/dataset/yaml"}},o={},d=[{value:"Design Overview",id:"design-overview",level:2},{value:"Starwhale Dataset Positioning",id:"starwhale-dataset-positioning",level:3},{value:"Core Functions",id:"core-functions",level:3},{value:"Key Elements",id:"key-elements",level:3},{value:"Best Practices",id:"best-practices",level:3},{value:"Command Line Grouping",id:"command-line-grouping",level:3},{value:"Starwhale Dataset Viewer",id:"starwhale-dataset-viewer",level:2},{value:"Starwhale Dataset Data Format",id:"starwhale-dataset-data-format",level:2},{value:"File Data Handling",id:"file-data-handling",level:3}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/dataset-overview.svg",alt:"overview"})),(0,i.kt)("h2",{id:"design-overview"},"Design Overview"),(0,i.kt)("h3",{id:"starwhale-dataset-positioning"},"Starwhale Dataset Positioning"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Dataset")," contains three core stages: data construction, data loading, and data visualization. It is a data management tool for the ML/DL field. ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Dataset")," can directly use the environment built by ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Runtime"),", and can be seamlessly integrated with ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Model")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Evaluation"),". It is an important part of the Starwhale MLOps toolchain."),(0,i.kt)("p",null,"According to the classification of MLOps Roles in ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2205.02302"},"Machine Learning Operations (MLOps): Overview, Definition, and Architecture"),", the three stages of Starwhale Dataset target the following user groups:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data construction: Data Engineer, Data Scientist"),(0,i.kt)("li",{parentName:"ul"},"Data loading: Data Scientist, ML Developer"),(0,i.kt)("li",{parentName:"ul"},"Data visualization: Data Engineer, Data Scientist, ML Developer")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/mlops-users.png",alt:"mlops-users"})),(0,i.kt)("h3",{id:"core-functions"},"Core Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Efficient loading"),": The original dataset files are stored in external storage such as OSS or NAS, and are loaded on demand without having to save to disk."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simple construction"),": Supports one-click dataset construction from Image/Video/Audio directories, json files and Huggingface datasets, and also supports writing Python code to build completely custom datasets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Versioning"),": Can perform version tracking, data append and other operations, and avoid duplicate data storage through the internally abstracted ObjectStore."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sharing"),": Implement bidirectional dataset sharing between Standalone instances and Cloud/Server instances through the ",(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset copy")," command."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Visualization"),": The web interface of Cloud/Server instances can present multi-dimensional, multi-type data visualization of datasets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Artifact storage"),": The Standalone instance can store locally built or distributed swds series files, while the Cloud/Server instance uses object storage to provide centralized swds artifact storage."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Seamless Starwhale integration"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Starwhale Dataset")," can use the runtime environment built by ",(0,i.kt)("inlineCode",{parentName:"li"},"Starwhale Runtime")," to build datasets. ",(0,i.kt)("inlineCode",{parentName:"li"},"Starwhale Evaluation")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Starwhale Model")," can directly specify the dataset through the ",(0,i.kt)("inlineCode",{parentName:"li"},"--dataset")," parameter to complete automatic data loading, which facilitates inference, model evaluation and other environments.")),(0,i.kt)("h3",{id:"key-elements"},"Key Elements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swds")," virtual package file: ",(0,i.kt)("inlineCode",{parentName:"li"},"swds")," is different from ",(0,i.kt)("inlineCode",{parentName:"li"},"swmp")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"swrt"),". It is not a single packaged file, but a virtual concept that specifically refers to a directory that contains dataset-related files for a version of the Starwhale dataset, including ",(0,i.kt)("inlineCode",{parentName:"li"},"_manifest.yaml"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dataset.yaml"),", dataset build Python scripts, and data file links, etc. You can use the ",(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset info")," command to view where the swds is located. swds is the abbreviation of Starwhale Dataset.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/swds-tree.png",alt:"swds-tree.png"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset")," command line: A set of dataset-related commands, including construction, distribution and management functions. See ",(0,i.kt)("a",{parentName:"li",href:"/0.6.0/reference/swcli/dataset"},"CLI Reference")," for details."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dataset.yaml")," configuration file: Describes the dataset construction process. It can be completely omitted and specified through ",(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset build")," parameters. ",(0,i.kt)("inlineCode",{parentName:"li"},"dataset.yaml")," can be considered as a configuration file representation of the ",(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset build")," command line parameters. ",(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset build")," parameters take precedence over ",(0,i.kt)("inlineCode",{parentName:"li"},"dataset.yaml"),"."),(0,i.kt)("li",{parentName:"ul"},"Dataset Python SDK: Includes data construction, data loading, and several predefined data types. See ",(0,i.kt)("a",{parentName:"li",href:"/0.6.0/reference/sdk/dataset"},"Python SDK")," for details."),(0,i.kt)("li",{parentName:"ul"},"Python scripts for dataset construction: A series of scripts written using the Starwhale Python SDK to build datasets.")),(0,i.kt)("h3",{id:"best-practices"},"Best Practices"),(0,i.kt)("p",null,"The construction of ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Dataset")," is performed independently. If third-party libraries need to be introduced when writing construction scripts, using ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Runtime")," can simplify Python dependency management and ensure reproducible dataset construction. The Starwhale platform will build in as many open source datasets as possible for users to ",(0,i.kt)("inlineCode",{parentName:"p"},"copy")," datasets for immediate use."),(0,i.kt)("h3",{id:"command-line-grouping"},"Command Line Grouping"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale Dataset")," command line can be divided into the following stages from the perspective of usage phases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Construction phase",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset build")))),(0,i.kt)("li",{parentName:"ul"},"Visualization phase",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset diff")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset head")))),(0,i.kt)("li",{parentName:"ul"},"Distribution phase",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset copy")))),(0,i.kt)("li",{parentName:"ul"},"Basic management",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset tag")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset info")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset history")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset list")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset summary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset remove")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"swcli dataset recover"))))),(0,i.kt)("h2",{id:"starwhale-dataset-viewer"},"Starwhale Dataset Viewer"),(0,i.kt)("p",null,"Currently, the Web UI in the Cloud/Server instance can visually display the dataset. Currently, only ",(0,i.kt)("a",{parentName:"p",href:"/0.6.0/reference/sdk/type"},"DataTypes")," using the Python SDK can be correctly interpreted by the frontend, with mappings as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Image: Display thumbnails, enlarged images, MASK type images, support ",(0,i.kt)("inlineCode",{parentName:"li"},"image/png"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"image/jpeg"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"image/webp"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"image/svg+xml"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"image/gif"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"image/apng"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"image/avif")," formats."),(0,i.kt)("li",{parentName:"ul"},"Audio: Displayed as an audio wave graph, playable, supports ",(0,i.kt)("inlineCode",{parentName:"li"},"audio/mp3")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"audio/wav")," formats."),(0,i.kt)("li",{parentName:"ul"},"Video: Displayed as a video, playable, supports ",(0,i.kt)("inlineCode",{parentName:"li"},"video/mp4"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"video/avi")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"video/webm")," formats."),(0,i.kt)("li",{parentName:"ul"},"GrayscaleImage: Display grayscale images, support ",(0,i.kt)("inlineCode",{parentName:"li"},"x/grayscale")," format."),(0,i.kt)("li",{parentName:"ul"},"Text: Display text, support ",(0,i.kt)("inlineCode",{parentName:"li"},"text/plain")," format, set encoding format, default is utf-8."),(0,i.kt)("li",{parentName:"ul"},"Binary and Bytes: Not supported for display currently."),(0,i.kt)("li",{parentName:"ul"},"Link: The above multimedia types all support specifying links as storage paths.")),(0,i.kt)("h2",{id:"starwhale-dataset-data-format"},"Starwhale Dataset Data Format"),(0,i.kt)("p",null,"The dataset consists of multiple rows, each row being a sample, each sample containing several features. The features have a dict-like structure with some simple restrictions ","[L]",":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The dict keys must be str type."),(0,i.kt)("li",{parentName:"ul"},"The dict values must be Python basic types like int/float/bool/str/bytes/dict/list/tuple, or ",(0,i.kt)("a",{parentName:"li",href:"/0.6.0/reference/sdk/type"},"Starwhale built-in data types"),"."),(0,i.kt)("li",{parentName:"ul"},"For the same key across different samples, the value types do not need to stay the same."),(0,i.kt)("li",{parentName:"ul"},"If the value is a list or tuple, the element data types must be consistent."),(0,i.kt)("li",{parentName:"ul"},"For dict values, the restrictions are the same as ","[L]",".")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'{\n    "img": GrayscaleImage(\n        link=Link(\n            "123",\n            offset=32,\n            size=784,\n            _swds_bin_offset=0,\n            _swds_bin_size=8160,\n        )\n    ),\n    "label": 0,\n}\n')),(0,i.kt)("h3",{id:"file-data-handling"},"File Data Handling"),(0,i.kt)("p",null,"Starwhale Dataset handles file type data in a special way. You can ignore this section if you don't care about Starwhale's implementation."),(0,i.kt)("p",null,"According to actual usage scenarios, Starwhale Dataset has two ways of handling file class data that is based on the base class ",(0,i.kt)("inlineCode",{parentName:"p"},"starwhale.BaseArtifact"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"swds-bin: Starwhale merges the data into several large files in its own binary format (swds-bin), which can efficiently perform indexing, slicing and loading."),(0,i.kt)("li",{parentName:"ul"},"remote-link: If the user's original data is stored in some external storage such as OSS or NAS, with a lot of original data that is inconvenient to move or has already been encapsulated by some internal dataset implementation, then you only need to use links in the data to establish indexes.")),(0,i.kt)("p",null,"In the same Starwhale dataset, two types of data can be included simultaneously."))}m.isMDXComponent=!0}}]);