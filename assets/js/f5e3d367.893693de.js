"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[3719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=l,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(83117),l=(n(67294),n(3905));const r={title:"MNIST with Pytorch"},i=void 0,o={unversionedId:"examples/mnist",id:"version-0.4.2/examples/mnist",title:"MNIST with Pytorch",description:"MNIST is the hello world code for Machine Learning. This document will let you master all core Starwhale concepts and workflows.",source:"@site/versioned_docs/version-0.4.2/examples/mnist.md",sourceDirName:"examples",slug:"/examples/mnist",permalink:"/docs/0.4.2/examples/mnist",draft:!1,editUrl:"https://github.com/star-whale/starwhale/tree/main/docs/versioned_docs/version-0.4.2/examples/mnist.md",tags:[],version:"0.4.2",frontMatter:{title:"MNIST with Pytorch"}},s={},p=[{value:"Downloading the MNIST example",id:"downloading-the-mnist-example",level:2},{value:"Creating and building Runtime",id:"creating-and-building-runtime",level:2},{value:"Train the MNIST Model",id:"train-the-mnist-model",level:2},{value:"Building Model",id:"building-model",level:2},{value:"Building Dataset",id:"building-dataset",level:2},{value:"Running Standalone Evaluation Job",id:"running-standalone-evaluation-job",level:2},{value:"Copying Model/Dataset/Runtime into Cloud instance",id:"copying-modeldatasetruntime-into-cloud-instance",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"MNIST is the hello world code for Machine Learning. This document will let you master all core Starwhale concepts and workflows."),(0,l.kt)("h2",{id:"downloading-the-mnist-example"},"Downloading the MNIST example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/star-whale/starwhale.git\ncd starwhale/example/mnist\n")),(0,l.kt)("h2",{id:"creating-and-building-runtime"},"Creating and building Runtime"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli runtime create -n pytorch-mnist -m venv --python 3.9 .\nsource venv/bin/activate\npython3 -m pip install -r requirements.txt\nswcli runtime build .\nswcli runtime info pytorch-mnist/version/latest\n")),(0,l.kt)("h2",{id:"train-the-mnist-model"},"Train the MNIST Model"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make train\n")),(0,l.kt)("p",null,"output: models/mnist_cnn.pt, which is pre-trained model."),(0,l.kt)("h2",{id:"building-model"},"Building Model"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Write some code with Starwhale Python SDK. Full code is ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/blob/main/example/mnist/mnist/ppl.py"},"here"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale.api.model import PipelineHandler\nfrom starwhale.api.metric import multi_classification\n\nclass MNISTInference(PipelineHandler):\n\n    def __init__(self):\n        super().__init__(merge_label=True, ignore_error=False)\n        self.model = self._load_model()\n\n    def ppl(self, data:bytes, **kw):\n        data = self._pre(data)\n        output = self.model(data)\n        return self._post(output)\n\n    def handle_label(self, label:bytes, **kw):\n        return [int(l) for l in label]\n\n    @multi_classification(\n        confusion_matrix_normalize="all",\n        show_hamming_loss=True,\n        show_cohen_kappa_score=True,\n        show_roc_auc=True,\n        all_labels=[i for i in range(0, 10)],\n    )\n    def cmp(self, _data_loader:"DataLoader"):\n        _result, _label, _pr = [], [], []\n        for _data in _data_loader:\n            _label.extend([int(l) for l in _data[self._label_field]])\n            # unpack data according to the return value of function ppl\n            (pred, pr) = _data[self._ppl_data_field]\n            _result.extend([int(l) for l in pred])\n            _pr.extend([l for l in pr])\n\n    def _pre(self, input:bytes):\n        """write some mnist preprocessing code"""\n\n    def _post(self, input:bytes):\n        """write some mnist post-processing code"""\n\n    def _load_model():\n        """load your pre trained model"""\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Define ",(0,l.kt)("inlineCode",{parentName:"li"},"model.yaml"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: mnist\nrun:\nppl: mnist.ppl:MNISTInference\n")),(0,l.kt)("h2",{id:"building-dataset"},"Building Dataset"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Write some code with Starwhale Python SDK. Full code is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/main/example/mnist/mnist/process.py"},"here"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},' from starwhale.api.dataset import BuildExecutor\n\n class DataSetProcessExecutor(BuildExecutor):\n\n     def iter_data_slice(self, path: str):\n         """read data file, unpack binary data, yield data bytes"""\n\n     def iter_label_slice(self, path: str):\n         """read label file, unpack binary data, yield label bytes"""\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Define ",(0,l.kt)("inlineCode",{parentName:"p"},"dataset.yaml"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},' name: mnist\n data_dir: data\n data_filter: "t10k-image*"\n label_filter: "t10k-label*"\n process: mnist.process:DataSetProcessExecutor\n attr:\n   alignment_size: 4k\n   volume_size: 2M\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run one command to build the dataset."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," swcli dataset build .\n swcli dataset info mnist/version/latest\n")))),(0,l.kt)("h2",{id:"running-standalone-evaluation-job"},"Running Standalone Evaluation Job"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli -vvv job create --model mnist/version/latest --dataset mnist/version/latest\nswcli job list\nswcli job info ${version}\n")),(0,l.kt)("h2",{id:"copying-modeldatasetruntime-into-cloud-instance"},"Copying Model/Dataset/Runtime into Cloud instance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model copy mnist/version/latest cloud://pre-k8s/project/1\nswcli dataset copy mnist/version/latest cloud://pre-k8s/project/1\nswcli runtime copy pytorch-mnist/version/latest cloud://pre-k8s/project/1\n")))}c.isMDXComponent=!0}}]);