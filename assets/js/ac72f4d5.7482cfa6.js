"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[8309],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,h=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5890:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(3117),r=(a(7294),a(3905));const l={title:"Getting started with Starwhale Standalone"},i=void 0,o={unversionedId:"getting-started/standalone",id:"version-0.5.12/getting-started/standalone",title:"Getting started with Starwhale Standalone",description:"When the Starwhale Client (swcli) is installed, you are ready to use Starwhale Standalone.",source:"@site/versioned_docs/version-0.5.12/getting-started/standalone.md",sourceDirName:"getting-started",slug:"/getting-started/standalone",permalink:"/0.5.12/getting-started/standalone",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.12/getting-started/standalone.md",tags:[],version:"0.5.12",frontMatter:{title:"Getting started with Starwhale Standalone"},sidebar:"mainSidebar",previous:{title:"Getting started",permalink:"/0.5.12/getting-started/"},next:{title:"Getting started with Starwhale Server",permalink:"/0.5.12/getting-started/server"}},p={},s=[{value:"Downloading Examples",id:"downloading-examples",level:2},{value:"Building a Pytorch Runtime",id:"building-a-pytorch-runtime",level:2},{value:"Building a Model",id:"building-a-model",level:2},{value:"Building a Dataset",id:"building-a-dataset",level:2},{value:"Running an Evaluation Job",id:"running-an-evaluation-job",level:2}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When the ",(0,r.kt)("a",{parentName:"p",href:"../swcli"},"Starwhale Client (swcli)")," is installed, you are ready to use Starwhale Standalone."),(0,r.kt)("p",null,"We also provide a Jupyter Notebook example, you can try it in ",(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/star-whale/starwhale/blob/main/example/notebooks/quickstart-standalone.ipynb"},"Google Colab")," or in your local ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/main/example/notebooks/quickstart-standalone.ipynb"},"vscode/jupyterlab"),"."),(0,r.kt)("h2",{id:"downloading-examples"},"Downloading Examples"),(0,r.kt)("p",null,"Download Starwhale examples by cloning the Starwhale project via:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GIT_LFS_SKIP_SMUDGE=1 git clone https://github.com/star-whale/starwhale.git --depth 1\ncd starwhale\n")),(0,r.kt)("p",null,"To save time in the example downloading, we skip git-lfs and other commits info. We will use ML/DL HelloWorld code MNIST to start your Starwhale journey. The following steps are all performed in the starwhale directory."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/standalone-core-workflow.gif",alt:"Core Workflow"})),(0,r.kt)("h2",{id:"building-a-pytorch-runtime"},"Building a Pytorch Runtime"),(0,r.kt)("p",null,"Runtime example codes are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"example/runtime/pytorch")," directory."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Build the Starwhale runtime bundle:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli runtime build --yaml example/runtime/pytorch/runtime.yaml\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When you first build runtime, creating an isolated python environment and downloading python dependencies will take a lot of time. The command execution time is related to the network environment of the machine and the number of packages in the runtime.yaml. Using the befitting pypi mirror and cache config in the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.pip/pip.conf")," file is a recommended practice."),(0,r.kt)("p",{parentName:"admonition"},"For users in the mainland of China, the following conf file is an option:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"[global]\ncache-dir = ~/.cache/pip\nindex-url = https://pypi.tuna.tsinghua.edu.cn/simple\nextra-index-url = https://mirrors.aliyun.com/pypi/simple/\n")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check your local Starwhale Runtime:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli runtime list\nswcli runtime info pytorch\n")))),(0,r.kt)("h2",{id:"building-a-model"},"Building a Model"),(0,r.kt)("p",null,"Model example codes are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"example/mnist")," directory."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the pre-trained model file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd example/mnist\nmake download-model\n# For users in the mainland of China, please add `CN=1` environment for make command:\n# CN=1 make download-model\ncd -\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Build a Starwhale model:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model build example/mnist --runtime pytorch\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check your local Starwhale models:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model list\nswcli model info mnist\n")))),(0,r.kt)("h2",{id:"building-a-dataset"},"Building a Dataset"),(0,r.kt)("p",null,"Dataset example codes are in the ",(0,r.kt)("inlineCode",{parentName:"p"},"example/mnist")," directory."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the MNIST raw data:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd example/mnist\nmake download-data\n# For users in the mainland of China, please add `CN=1` environment for make command:\n# CN=1 make download-data\ncd -\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Build a Starwhale dataset:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli dataset build --yaml example/mnist/dataset.yaml\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check your local Starwhale dataset:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli dataset list\nswcli dataset info mnist\nswcli dataset head mnist\n")))),(0,r.kt)("h2",{id:"running-an-evaluation-job"},"Running an Evaluation Job"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create an evaluation job:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli -vvv model run --uri mnist --dataset mnist --runtime pytorch\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check the evaluation result"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli job list\nswcli job info $(swcli job list | grep mnist | grep success | awk '{print $1}' | head -n 1)\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congratulations! You have completed the Starwhale Standalone Getting Started Guide.")))}m.isMDXComponent=!0}}]);