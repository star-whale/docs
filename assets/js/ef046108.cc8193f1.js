"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[116],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),h=l,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(3117),l=(a(7294),a(3905));const r={title:"Multi-Fiber Networks(MFNet) For UCF101"},i=void 0,o={unversionedId:"examples/ucf101",id:"examples/ucf101",title:"Multi-Fiber Networks(MFNet) For UCF101",description:"From this example, we can learn the following skills:",source:"@site/docs/examples/ucf101.md",sourceDirName:"examples",slug:"/examples/ucf101",permalink:"/docs/next/examples/ucf101",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/examples/ucf101.md",tags:[],version:"current",frontMatter:{title:"Multi-Fiber Networks(MFNet) For UCF101"}},u={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Preparing Data",id:"preparing-data",level:2},{value:"Build Runtime With Starwhale",id:"build-runtime-with-starwhale",level:2},{value:"Build Dataset With Starwhale",id:"build-dataset-with-starwhale",level:2},{value:"Debug And Build Model With Starwhale",id:"debug-and-build-model-with-starwhale",level:2},{value:"Run Evaluation Job on Cloud Instance",id:"run-evaluation-job-on-cloud-instance",level:2},{value:"References",id:"references",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"From this example, we can learn the following skills:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use the type of Video to build dataset."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"starwhale.Evaluation")," SDK.")),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python3.7 +."),(0,l.kt)("li",{parentName:"ul"},"Starwhale Client.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"install: ",(0,l.kt)("inlineCode",{parentName:"li"},"pip install starwhale")),(0,l.kt)("li",{parentName:"ul"},"check version: ",(0,l.kt)("inlineCode",{parentName:"li"},"swcli --version")))),(0,l.kt)("li",{parentName:"ul"},"Clone starwhale repo ",(0,l.kt)("inlineCode",{parentName:"li"},"git clone --depth=1 https://github.com/star-whale/starwhale.git"))),(0,l.kt)("h2",{id:"preparing-data"},"Preparing Data"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enter the director ",(0,l.kt)("inlineCode",{parentName:"p"},"example/ucf101"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download data and preTrained model file"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd starwhale/example/ucf101\nmake prepare\n")),(0,l.kt)("h2",{id:"build-runtime-with-starwhale"},"Build Runtime With Starwhale"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"swcli runtime build .\nswcli runtime info ucf101/version/latest\n")),(0,l.kt)("h2",{id:"build-dataset-with-starwhale"},"Build Dataset With Starwhale"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli dataset build .\nswcli dataset info ucf101/version/latest\n")),(0,l.kt)("h2",{id:"debug-and-build-model-with-starwhale"},"Debug And Build Model With Starwhale"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Debug the Model at the step of preBuild")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model eval . --dataset ucf101/version/latest --runtime ucf101/version/latest\nswcli model info ${version}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"There are the code with Starwhale Python SDK. Full code is ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/blob/main/example/ucf101/ucf101/evaluator.py"},"here"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'@multi_classification(\n        confusion_matrix_normalize="all",\n        show_hamming_loss=True,\n        show_cohen_kappa_score=True,\n        show_roc_auc=True,\n    )\ndef cmp(self, ppl_result) -> t.Any:\n    result, label, pr = [], [], []\n    for _data in ppl_result:\n        label.append(_data["input"]["label"])\n        result.append(_data["output"][0])\n        pr.append(_data["output"][1])\n    return label, result, pr\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"View evaluation results on Standalone Instance")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"eval-info.png",src:a(677).Z,width:"2545",height:"1048"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Write Model.yaml")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: ucf101\n\nrun:\n  handler: ucf101.evaluator:UCF101PipelineHandler\n\ndesc: ucf101 by pytorch\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Build Model With Starwhale")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"swcli model build .\nswcli model info ucf101/version/latest\n")),(0,l.kt)("h2",{id:"run-evaluation-job-on-cloud-instance"},"Run Evaluation Job on Cloud Instance"),(0,l.kt)("p",null,"To run the evaluation job on the Cloud Instance, we need to publish the Model, Dataset and Runtime built on the Standalone Instance to the corresponding Instance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# login the corresponding Instance\uff0cthen we can use 'prod' alias to access this instance\nswcli instance login --username ${username} --token ${token}  http://${instance-address} --alias prod\n# select current instance to local\nswcli instance select local\n# upload the model to the project named starwhale in the prod instance\nswcli model copy ucf101/version/latest cloud://prod/project/starwhale\n# upload the dataset to the project named starwhale in the prod instance\nswcli dataset copy ucf101/version/latest cloud://prod/project/starwhale\n# upload the runtime to the project named starwhale in the prod instance\nswcli runtime copy ucf101/version/latest cloud://prod/project/starwhale\n")),(0,l.kt)("p",null,"Then, execute the ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli ui prod")," command in the terminal, we can pull up the browser and enter the web page of the prod instance, then enter the 'starwhale' project, and create an evaluation job."),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/cypw/PyTorch-MFNet"},"PyTorch-MFNet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.crcv.ucf.edu/data/UCF101.php"},"Dataset of UCF-101"))))}p.isMDXComponent=!0},677:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ucf101-eval-d3c0bec805a0de0f21154a6473c1b516.png"}}]);