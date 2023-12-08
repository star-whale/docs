"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[88444],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},22113:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(83117),l=(a(67294),a(3905));const r={title:"Getting started with Starwhale Standalone"},i=void 0,o={unversionedId:"getting-started/standalone",id:"version-0.6.7/getting-started/standalone",title:"Getting started with Starwhale Standalone",description:"When the Starwhale Client (swcli) is installed, you are ready to use Starwhale Standalone.",source:"@site/versioned_docs/version-0.6.7/getting-started/standalone.md",sourceDirName:"getting-started",slug:"/getting-started/standalone",permalink:"/getting-started/standalone",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.7/getting-started/standalone.md",tags:[],version:"0.6.7",frontMatter:{title:"Getting started with Starwhale Standalone"},sidebar:"mainSidebar",previous:{title:"Getting started",permalink:"/getting-started/"},next:{title:"Getting started with Starwhale Server",permalink:"/getting-started/server"}},s={},p=[{value:"Installing Starwhale Client",id:"installing-starwhale-client",level:2},{value:"Downloading Examples",id:"downloading-examples",level:2},{value:"Building Starwhale Runtime",id:"building-starwhale-runtime",level:2},{value:"Building a Model",id:"building-a-model",level:2},{value:"Building a Dataset",id:"building-a-dataset",level:2},{value:"Running an Evaluation Job",id:"running-an-evaluation-job",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When the ",(0,l.kt)("a",{parentName:"p",href:"../swcli/"},"Starwhale Client (swcli)")," is installed, you are ready to use Starwhale Standalone."),(0,l.kt)("p",null,"We also provide a Jupyter Notebook example, you can try it in ",(0,l.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/star-whale/starwhale/blob/main/example/notebooks/quickstart-standalone.ipynb"},"Google Colab")," or in your local ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/main/example/notebooks/quickstart-standalone.ipynb"},"vscode/jupyterlab"),"."),(0,l.kt)("h2",{id:"installing-starwhale-client"},"Installing Starwhale Client"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install starwhale\n")),(0,l.kt)("p",null,"For detailed information, see ",(0,l.kt)("a",{parentName:"p",href:"swcli/installation"},"Starwhale Client Installation Guide"),"."),(0,l.kt)("h2",{id:"downloading-examples"},"Downloading Examples"),(0,l.kt)("p",null,"Download Starwhale examples by cloning the Starwhale project via:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"GIT_LFS_SKIP_SMUDGE=1 git clone https://github.com/star-whale/starwhale.git --depth 1\ncd starwhale\n")),(0,l.kt)("p",null,"To save time in the example downloading, we skip git-lfs and other commits info. We will use ML/DL HelloWorld code MNIST to start your Starwhale journey. The following steps are all performed in the starwhale directory."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/standalone-core-workflow.gif",alt:"Core Workflow"})),(0,l.kt)("h2",{id:"building-starwhale-runtime"},"Building Starwhale Runtime"),(0,l.kt)("p",null,"Runtime example codes are in the ",(0,l.kt)("inlineCode",{parentName:"p"},"example/helloworld")," directory."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Build the Starwhale runtime bundle:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli -vvv runtime build --yaml example/helloworld/runtime.yaml\n")),(0,l.kt)("admonition",{parentName:"li",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"When you first build runtime, creating an isolated python environment and downloading python dependencies will take a lot of time. The command execution time is related to the network environment of the machine and the number of packages in the runtime.yaml. Using the befitting pypi mirror and cache config in the ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.pip/pip.conf")," file is a recommended practice."),(0,l.kt)("p",{parentName:"admonition"},"For users in the mainland of China, the following conf file is an option:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"[global]\ncache-dir = ~/.cache/pip\nindex-url = https://pypi.tuna.tsinghua.edu.cn/simple\nextra-index-url = https://mirrors.aliyun.com/pypi/simple/\n")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check your local Starwhale Runtime:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli runtime list\nswcli runtime info helloworld\n")))),(0,l.kt)("h2",{id:"building-a-model"},"Building a Model"),(0,l.kt)("p",null,"Model example codes are in the ",(0,l.kt)("inlineCode",{parentName:"p"},"example/helloworld")," directory."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Build a Starwhale model:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli -vvv model build example/helloworld --name helloworld -m evaluation --runtime helloworld\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check your local Starwhale models:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model list\nswcli model info helloworld\n")))),(0,l.kt)("h2",{id:"building-a-dataset"},"Building a Dataset"),(0,l.kt)("p",null,"Dataset example codes are in the ",(0,l.kt)("inlineCode",{parentName:"p"},"example/helloworld")," directory."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Build a Starwhale dataset:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli runtime activate helloworld\npython3 example/helloworld/dataset.py\ndeactivate\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check your local Starwhale dataset:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli dataset list\nswcli dataset info mnist64\nswcli dataset head mnist64\n")))),(0,l.kt)("h2",{id:"running-an-evaluation-job"},"Running an Evaluation Job"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create an evaluation job:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli -vvv model run --uri helloworld --dataset mnist64 --runtime helloworld\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check the evaluation result"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli job list\nswcli job info $(swcli job list | grep mnist | grep success | awk '{print $1}' | head -n 1)\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Congratulations! You have completed the Starwhale Standalone Getting Started Guide.")))}m.isMDXComponent=!0}}]);