"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[74],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(d,".").concat(c)]||u[c]||s[c]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},31534:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const l={title:"The dataset.yaml Specification"},i=void 0,o={unversionedId:"dataset/yaml",id:"version-0.6.4/dataset/yaml",title:"The dataset.yaml Specification",description:"dataset.yaml is optional for the swcli dataset build command.",source:"@site/versioned_docs/version-0.6.4/dataset/yaml.md",sourceDirName:"dataset",slug:"/dataset/yaml",permalink:"/0.6.4/dataset/yaml",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.4/dataset/yaml.md",tags:[],version:"0.6.4",frontMatter:{title:"The dataset.yaml Specification"},sidebar:"mainSidebar",previous:{title:"Starwhale Dataset User Guide",permalink:"/0.6.4/dataset/"},next:{title:"Starwhale Model Evaluation",permalink:"/0.6.4/evaluation/"}},d={},p=[{value:"YAML Field Descriptions",id:"yaml-field-descriptions",level:2},{value:"Examples",id:"examples",level:2},{value:"Simplest Example",id:"simplest-example",level:3},{value:"MNIST Dataset Build Example",id:"mnist-dataset-build-example",level:3},{value:"Example with <code>handler</code> as a generator function",id:"example-with-handler-as-a-generator-function",level:3}],m={toc:p};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"dataset.yaml")," is optional for the ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli dataset build")," command.")),(0,r.kt)("p",null,"Building ",(0,r.kt)("inlineCode",{parentName:"p"},"Starwhale Dataset")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset.yaml"),". Omitting ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset.yaml")," allows describing related configurations in ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli dataset build")," command line parameters. ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset.yaml")," can be considered as a file-based representation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," command line configuration."),(0,r.kt)("h2",{id:"yaml-field-descriptions"},"YAML Field Descriptions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Starwhale Dataset"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handler"),(0,r.kt)("td",{parentName:"tr",align:null},"Importable address of a class that inherits ",(0,r.kt)("inlineCode",{parentName:"td"},"starwhale.SWDSBinBuildExecutor"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"starwhale.UserRawBuildExecutor")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"starwhale.BuildExecutor"),", or a function that returns a Generator or iterable object. Format is ",(0,r.kt)("inlineCode",{parentName:"td"},"{module path}:{class name\\|function name}")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"desc"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset description"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dataset.yaml"),' format version, currently only "1.0" is supported'),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attr"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataset build parameters"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Dict"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attr.volume_size"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of each data file in the swds-bin dataset. Can be a number in bytes, or a number plus unit like 64M, 1GB etc."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Int or Str"),(0,r.kt)("td",{parentName:"tr",align:null},"64MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attr.alignment_size"),(0,r.kt)("td",{parentName:"tr",align:null},"Data alignment size of each data block in the swds-bin dataset. If set to 4k, and a data block is 7.9K, 0.1K padding will be added to make the block size a multiple of ",(0,r.kt)("inlineCode",{parentName:"td"},"alignment_size"),", improving page size and read efficiency."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer or String"),(0,r.kt)("td",{parentName:"tr",align:null},"128")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"simplest-example"},"Simplest Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: helloworld\nhandler: dataset:ExampleProcessExecutor\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld")," dataset uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleProcessExecutor")," class in ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset.py")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataset.yaml")," directory to build data."),(0,r.kt)("h3",{id:"mnist-dataset-build-example"},"MNIST Dataset Build Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: mnist\nhandler: mnist.dataset:DatasetProcessExecutor\ndesc: MNIST data and label test dataset\nattr:\n  alignment_size: 128\n  volume_size: 4M\n")),(0,r.kt)("h3",{id:"example-with-handler-as-a-generator-function"},"Example with ",(0,r.kt)("inlineCode",{parentName:"h3"},"handler")," as a generator function"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dataset.yaml")," contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: helloworld\nhandler: dataset:iter_item\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dataset.py")," contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def iter_item():\n  for i in range(10):\n    yield {"img": f"image-{i}".encode(), "label": i}\n')))}s.isMDXComponent=!0}}]);