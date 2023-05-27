"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[134],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,g=u["".concat(s,".").concat(c)]||u[c]||d[c]||r;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88804:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(83117),l=(a(67294),a(3905));const r={title:"Getting started with Starwhale Standalone"},i=void 0,o={unversionedId:"getting-started/standalone",id:"version-0.4.6/getting-started/standalone",title:"Getting started with Starwhale Standalone",description:"When the Starwhale Client (SWCLI) is installed, you are ready to use Starwhale Standalone.",source:"@site/versioned_docs/version-0.4.6/getting-started/standalone.md",sourceDirName:"getting-started",slug:"/getting-started/standalone",permalink:"/docs/getting-started/standalone",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.6/getting-started/standalone.md",tags:[],version:"0.4.6",frontMatter:{title:"Getting started with Starwhale Standalone"},sidebar:"mainSidebar",previous:{title:"Getting started",permalink:"/docs/getting-started/"},next:{title:"Getting started with Starwhale Server",permalink:"/docs/getting-started/server"}},s={},p=[{value:"Downloading Examples",id:"downloading-examples",level:2},{value:"Building a Pytorch Runtime",id:"building-a-pytorch-runtime",level:2},{value:"Building a Model",id:"building-a-model",level:2},{value:"Building a Dataset",id:"building-a-dataset",level:2},{value:"Running an Evaluation Job",id:"running-an-evaluation-job",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"When the ",(0,l.kt)("a",{parentName:"p",href:"../swcli"},"Starwhale Client (SWCLI)")," is installed, you are ready to use Starwhale Standalone."),(0,l.kt)("h2",{id:"downloading-examples"},"Downloading Examples"),(0,l.kt)("p",null,"Download Starwhale examples by cloning the Starwhale project via:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/star-whale/starwhale.git\ncd starwhale\n")),(0,l.kt)("p",null,"We will use MNIST with PyTorch to start your Starwhale journey. The following steps are all performed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"starwhale")," directory."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Core Workflow",src:a(99211).Z,width:"3036",height:"1741"})),(0,l.kt)("h2",{id:"building-a-pytorch-runtime"},"Building a Pytorch Runtime"),(0,l.kt)("p",null,"Runtime example codes are in the ",(0,l.kt)("inlineCode",{parentName:"p"},"example/runtime/pytorch")," directory."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Build the Starwhale runtime bundle:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli runtime build example/runtime/pytorch\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check your local Starwhale runtimes:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli runtime list\nswcli runtime info pytorch/version/latest\n")))),(0,l.kt)("h2",{id:"building-a-model"},"Building a Model"),(0,l.kt)("p",null,"Model example codes are in the ",(0,l.kt)("inlineCode",{parentName:"p"},"example/mnist")," directory."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download the pre-trained model file:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p example/mnist/models\nwget -O example/mnist/models/mnist_cnn.pt https://starwhale-examples.s3.us-west-1.amazonaws.com/mnist_cnn.pt\n\n# Users in the mainland of China may use the following URL to improve the download speed:\n# wget -O example/mnist/models/mnist_cnn.pt https://starwhale-examples.oss-cn-beijing.aliyuncs.com/mnist_cnn.pt\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Build a Starwhale model:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model build example/mnist\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check your local Starwhale models."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model list\nswcli model info mnist/version/latest\n")))),(0,l.kt)("h2",{id:"building-a-dataset"},"Building a Dataset"),(0,l.kt)("p",null,"Dataset example codes are in the ",(0,l.kt)("inlineCode",{parentName:"p"},"example/mnist")," directory."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download the MNIST raw data:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p example/mnist/data\nwget -O example/mnist/data/t10k-images-idx3-ubyte.gz http://yann.lecun.com/exdb/mnist/t10k-images-idx3-ubyte.gz\nwget -O example/mnist/data/t10k-labels-idx1-ubyte.gz http://yann.lecun.com/exdb/mnist/t10k-labels-idx1-ubyte.gz\ngzip -d example/mnist/data/*.gz\nls -lah example/mnist/data/*\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Build a Starwhale dataset:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli dataset build example/mnist\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check your local Starwhale dataset:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli dataset list\nswcli dataset info mnist/version/latest\n")))),(0,l.kt)("h2",{id:"running-an-evaluation-job"},"Running an Evaluation Job"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create an evaluation job"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli -vvv eval run --model mnist/version/latest --dataset mnist/version/latest --runtime pytorch/version/latest\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check the evaluation result"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli eval list\nswcli eval info ${version}\n")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"When you use a new runtime in the eval run command, it may take a lot of time to download python dependencies. We recommend you set an appropriate PyPI mirror in the ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.pip/pip.conf")," file.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Congratulations! You have completed the Starwhale Standalone Getting Started Guide.")))}d.isMDXComponent=!0},99211:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/standalone-core-workflow-270ac0f0cb5b20dbe5ccd11727e2620b.gif"}}]);