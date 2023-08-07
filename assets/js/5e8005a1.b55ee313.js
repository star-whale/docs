"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[178],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),u=l,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},93274:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(83117),l=(a(67294),a(3905));const i={title:"Image Classification on CIFAR-10"},r=void 0,o={unversionedId:"examples/cifar10",id:"version-0.5.7/examples/cifar10",title:"Image Classification on CIFAR-10",description:"This example will illustrate how to evaluate a pre-trained classification model on Starwhale in 5 steps.",source:"@site/versioned_docs/version-0.5.7/examples/cifar10.md",sourceDirName:"examples",slug:"/examples/cifar10",permalink:"/0.5.7/examples/cifar10",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.7/examples/cifar10.md",tags:[],version:"0.5.7",frontMatter:{title:"Image Classification on CIFAR-10"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Train the model",id:"train-the-model",level:2},{value:"Slice the test dataset using the Starwhale protocol",id:"slice-the-test-dataset-using-the-starwhale-protocol",level:2},{value:"Implement the inference method and evaluation metrics computing method",id:"implement-the-inference-method-and-evaluation-metrics-computing-method",level:2},{value:"Implement ppl",id:"implement-ppl",level:3},{value:"Implement cmp",id:"implement-cmp",level:3},{value:"Build Dataset and Model",id:"build-dataset-and-model",level:2},{value:"Build Dataset",id:"build-dataset",level:3},{value:"Build Model",id:"build-model",level:3},{value:"Run the evaluation job and see the metrics",id:"run-the-evaluation-job-and-see-the-metrics",level:2}],p={toc:d};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example will illustrate how to evaluate a pre-trained classification model on Starwhale in 5 steps."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Train the model"),(0,l.kt)("li",{parentName:"ol"},"Implement the dataset slicing method"),(0,l.kt)("li",{parentName:"ol"},"Implement the inference method and the evaluation metrics computing method"),(0,l.kt)("li",{parentName:"ol"},"Build Dataset and Model"),(0,l.kt)("li",{parentName:"ol"},"Run the evaluation job and see the metrics")),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Assume that you have Python3.7 or above installed")),(0,l.kt)("p",null,"Clone the Starwhale repo and install the requirements:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"git clone https://github.com/star-whale/starwhale.git\ncd starwhale/example/cifar10\n#create your virtual environment if needed\npip install -r requirements.txt\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 If you are from the mainland of China, we strongly recommend using a proxy.")),(0,l.kt)("h2",{id:"train-the-model"},"Train the model"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The training code in this repo is sourced from ",(0,l.kt)("a",{parentName:"p",href:"https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html"},"cifar10 tutorial"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"mkdir models\ncd code\npython3 train.py\n")),(0,l.kt)("p",null,"The training process is relatively slow on your laptop. You can reduce the train epochs in ",(0,l.kt)("inlineCode",{parentName:"p"},"train.py")," to make it faster."),(0,l.kt)("p",null,"You will get the logs below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"Downloading https://www.cs.toronto.edu/~kriz/cifar-10-python.tar.gz to ../data/cifar-10-python.tar.gz\n100.0%\nExtracting ../data/cifar-10-python.tar.gz to ../data\n[1,  2000] loss: 2.180\n[1,  4000] loss: 1.817\n......\n......\n[10, 12000] loss: 0.763\nFinished Training\n")),(0,l.kt)("p",null,"Great! Now you have your model trained and saved. You can see it in the ",(0,l.kt)("inlineCode",{parentName:"p"},"models")," directory."),(0,l.kt)("h2",{id:"slice-the-test-dataset-using-the-starwhale-protocol"},"Slice the test dataset using the Starwhale protocol"),(0,l.kt)("p",null,"In the training section, we got a dataset called ",(0,l.kt)("a",{parentName:"p",href:"https://www.cs.toronto.edu/~kriz/cifar.html"},"CIFA-10"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ cd ../data\n$ ls\ncifar-10-batches-py  cifar-10-python.tar.gz\n$ ls cifar-10-batches-py\nbatches.meta  data_batch_1  data_batch_2  data_batch_3  data_batch_4  data_batch_5  readme.html  test_batch\n")),(0,l.kt)("p",null,"The test part of the dataset is a single file of size 30MB called ",(0,l.kt)("inlineCode",{parentName:"p"},"test_batch"),", which contains 10,000 images and labels."),(0,l.kt)("p",null,"Before version ",(0,l.kt)("inlineCode",{parentName:"p"},"0.1.2b7"),", Starwhale sliced the dataset into chunks where the batched images and labels reside. You must tell Starwhale how to yield batches of byte arrays from each dataset file."),(0,l.kt)("p",null,"In this example, we will ",(0,l.kt)("inlineCode",{parentName:"p"},"unpickle")," the dataset to get the NumPy arrays of each image and a list of labels, then transform them into byte arrays."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class CIFAR10Slicer(BuildExecutor):\n\n    def iter_data_slice(self, path: str):\n        content_dict = unpickle(path)\n        data_numpy = content_dict.get(b'data')\n        idx = 0\n        data_size = len(data_numpy)\n        while True:\n            last_idx = idx\n            idx += 1\n            if idx > data_size:\n                break\n            yield data_numpy[last_idx:idx].tobytes()\n\n    def iter_label_slice(self, path: str):\n        content_dict = unpickle(path)\n        labels_list = content_dict.get(b'labels')\n        idx = 0\n        data_size = len(labels_list)\n        while True:\n            last_idx = idx\n            idx += 1\n            if idx > data_size:\n                break\n            yield bytes(labels_list[last_idx:idx])\n")),(0,l.kt)("p",null,"You need to extend the abstract class ",(0,l.kt)("inlineCode",{parentName:"p"},"BuildExecutor"),", so Starwhale can use it. The ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," argument is a file that matches ",(0,l.kt)("inlineCode",{parentName:"p"},"data_filter")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"label_filter")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"${code_base}/example/cifar10/dataset.yaml"),". The filters used in this example are  ",(0,l.kt)("inlineCode",{parentName:"p"},"test_batch"),"."),(0,l.kt)("h2",{id:"implement-the-inference-method-and-evaluation-metrics-computing-method"},"Implement the inference method and evaluation metrics computing method"),(0,l.kt)("p",null,"The inference method is called ",(0,l.kt)("inlineCode",{parentName:"p"},"ppl,")," and the evaluation metrics computing method is called ",(0,l.kt)("inlineCode",{parentName:"p"},"cmp"),".\nHere is the code snap from ",(0,l.kt)("inlineCode",{parentName:"p"},"ppl.py"),", which implements both methods. You need to extend the abstract class ",(0,l.kt)("inlineCode",{parentName:"p"},"PipelineHandler")," so you can receive the byte arrays, which you transformed in the last step."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class CIFAR10Inference(PipelineHandler):\n\n    def __init__(self, device="cpu") -> None:\n        super().__init__(merge_label=True, ignore_error=True)\n        self.device = torch.device(device)\n        self.model = self._load_model(self.device)\n\n    def ppl(self, data, **kw):\n        data = self._pre(data)\n        output = self.model(data)\n        return self._post(output)\n\n    def handle_label(self, label, **kw):\n        return [int(l) for l in label]\n\n    @multi_classification(\n        confusion_matrix_normalize="all",\n        show_hamming_loss=True,\n        show_cohen_kappa_score=True,\n        show_roc_auc=True,\n        all_labels=[i for i in range(0, 10)],\n    )\n    def cmp(self, _data_loader):\n        _result, _label, _pr = [], [], []\n        for _data in _data_loader:\n            _label.extend([int(l) for l in _data["label"]])\n            _result.extend([int(l) for l in _data["result"]])\n            _pr.extend([l for l in _data["pr"]])\n        return _label, _result, _pr\n\n    def _pre(self, input: bytes):\n        batch_size = 1\n        images = []\n        from_buffer = np.frombuffer(input, \'uint8\')\n        shape = (batch_size, ONE_IMAGE_SIZE)\n        batch_numpy_flatten_data = from_buffer.reshape(shape)\n        batch_numpy_flatten_data = np.vstack([batch_numpy_flatten_data]).reshape(-1, 3, 32, 32)\n        batch_numpy_flatten_data = batch_numpy_flatten_data.transpose((0, 2, 3, 1))\n        shape_image = (WIDTH_IMAGE, HEIGHT_IMAGE, CHANNEL_IMAGE)\n        for i in range(0, batch_size):\n            numpy_flatten_data_i_ = batch_numpy_flatten_data[i]\n            _image = Image.fromarray(numpy_flatten_data_i_.reshape(shape_image))\n            _image = transforms.Compose(\n                [transforms.ToTensor(),\n                transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))])(_image)\n            images.append(_image)\n        return torch.stack(images).to(self.device)\n\n    def _post(self, input):\n        pred_value = input.argmax(1).flatten().tolist()\n        probability_matrix = np.exp(input.tolist()).tolist()\n        return pred_value, probability_matrix\n\n    def _load_model(self, device):\n        model = Net().to(device)\n        model.load_state_dict(torch.load(str(ROOTDIR / "models/cifar_net.pth")))\n        model.eval()\n        print("load cifar_net model, start to inference...")\n        return model\n')),(0,l.kt)("h3",{id:"implement-ppl"},"Implement ppl"),(0,l.kt)("p",null,"Starwhale will feed the byte arrays of one batch to the ",(0,l.kt)("inlineCode",{parentName:"p"},"ppl")," method. And take the output of ",(0,l.kt)("inlineCode",{parentName:"p"},"ppl")," into an ",(0,l.kt)("inlineCode",{parentName:"p"},"inference_result")," dict, which looks like"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"result":[{resultObj1},{resultObj2}],"label":[{labelObj1},{labelObj2}]}\n')),(0,l.kt)("p",null,"Now let's look at how ",(0,l.kt)("inlineCode",{parentName:"p"},"inference_result")," is produced using the byte arrays of one batch."),(0,l.kt)("p",null,"First, we load our model trained before with the ",(0,l.kt)("inlineCode",{parentName:"p"},"_load_model")," method. Then we transform the byte array to a tensor which is the input for the model using ",(0,l.kt)("inlineCode",{parentName:"p"},"_pre"),". After that, we make the inference. At last, we convert the output tensor into labels with the ",(0,l.kt)("inlineCode",{parentName:"p"},"_post")," method.\nBy the way, we also overwrite the ",(0,l.kt)("inlineCode",{parentName:"p"},"handle_label")," method."),(0,l.kt)("p",null,"Starwhale will automatically add the result of ",(0,l.kt)("inlineCode",{parentName:"p"},"ppl")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"inference_result.result")," and add the result of ",(0,l.kt)("inlineCode",{parentName:"p"},"handle_label")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"inference_result.label"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"inference_result")," is used in the argument of ",(0,l.kt)("inlineCode",{parentName:"p"},"cmp")," named ",(0,l.kt)("inlineCode",{parentName:"p"},"_data_loader"),"."),(0,l.kt)("h3",{id:"implement-cmp"},"Implement cmp"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"_data_loader")," is an iterator for ",(0,l.kt)("inlineCode",{parentName:"p"},"result")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"label"),". For a multiple classification problem, it is pretty easy to implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"cmp")," method by annotating your ",(0,l.kt)("inlineCode",{parentName:"p"},"cmp")," method with the ",(0,l.kt)("inlineCode",{parentName:"p"},"multi_classification")," annotation and coping the lines inside it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'    @multi_classification(\n        confusion_matrix_normalize="all",\n        show_hamming_loss=True,\n        show_cohen_kappa_score=True,\n        show_roc_auc=True,\n        all_labels=[i for i in range(0, 10)],\n    )\n    def cmp(self, _data_loader):\n        _result, _label, _pr = [], [], []\n        for _data in _data_loader:\n            _label.extend([int(l) for l in _data["label"]])\n            _result.extend([int(l) for l in _data["result"]])\n            _pr.extend([l for l in _data["pr"]])\n        return _label, _result, _pr\n')),(0,l.kt)("p",null,"If you need to show ",(0,l.kt)("inlineCode",{parentName:"p"},"roc")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"auc"),", you must supply ",(0,l.kt)("inlineCode",{parentName:"p"},"_pr")," in your ",(0,l.kt)("inlineCode",{parentName:"p"},"ppl")," method."),(0,l.kt)("p",null,"By now, we have finished all the coding parts. Then let's begin the command line part."),(0,l.kt)("h2",{id:"build-dataset-and-model"},"Build Dataset and Model"),(0,l.kt)("h3",{id:"build-dataset"},"Build Dataset"),(0,l.kt)("p",null,"Here is some descriptive information needed for Starwhale to build a Starwhale Dataset(SWDS). A yaml file describes the information as below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'name: cifar10\ndata_dir: data\ndata_filter: "test_batch"\nlabel_filter: "test_batch"\n\nprocess: code.data_slicer:CIFAR10Slicer\npip_req: requirements.txt\n\ndesc: CIFAR10 data and label test dataset\n\nattr:\n    alignment_size: 4k\n    volume_size: 2M\n')),(0,l.kt)("p",null,"Most of the fields are self-explained. The ",(0,l.kt)("inlineCode",{parentName:"p"},"process")," descriptor is the entry point of the data split method. The ",(0,l.kt)("inlineCode",{parentName:"p"},"data_filter")," is for searching files containing data named like ",(0,l.kt)("inlineCode",{parentName:"p"},"test_batch")," recursively under ",(0,l.kt)("inlineCode",{parentName:"p"},"data_dir"),". Then Starwhale will use the files found as the input for ",(0,l.kt)("inlineCode",{parentName:"p"},"process"),"."),(0,l.kt)("p",null,"After creating the yaml file under ",(0,l.kt)("inlineCode",{parentName:"p"},"${code_base}/example/cifar10/"),", we are ready."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ cd ..\n$ swcli dataset build .\n\ud83c\udd95 swmp version g4ytezbqgfrt\n\ud83d\udcc1 swmp workdir: /home/anda/.cache/starwhale/dataset/cifar10/g4ytezbqgfrtmodche3wcnrupfwta5a\n\ud83d\udc4d try to copy source code files...\n\ud83d\udc7b import <code.data_slicer.CIFAR10Slicer object at 0x7faa927a5fa0> to make swds...\ncleanup done.\n\ud83d\udcab python3.8.13@conda, try to export environment...\n\ud83e\udd16 calculate signature...\n\ud83c\udf3a congratulation! you can run  swcli dataset info cifar10:g4ytezbqgfrtmodche3wcnrupfwta5a\n8 out of 8 steps finished \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 0:00:04\n")),(0,l.kt)("p",null,"There is one more step left."),(0,l.kt)("h3",{id:"build-model"},"Build Model"),(0,l.kt)("p",null,"Here is some descriptive information for Starwhale to build a Starwhale Model Package(SWMP). A yaml file describes the information as below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 1.0\nname: cifar_net\n\nrun:\nppl: code.ppl:CIFAR10Inference\npip_req: requirements.txt\ndesc: cifar10 by pytorch\n\ntag:\n- multi_classification\n")),(0,l.kt)("p",null,"Most of the fields are self-explained. The ",(0,l.kt)("inlineCode",{parentName:"p"},"ppl")," descriptor is the entry point of the inference and cmp method.\nAfter creating the yaml file under ",(0,l.kt)("inlineCode",{parentName:"p"},"${code_base}/example/cifar10/"),", we are ready."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ swcli model build . --skip-gen-env\n\ud83c\udd95 swmp version hfqtimrxgy4g\n\ud83d\udcc1 swmp workdir: /home/anda/.cache/starwhale/workdir/cifar_net/hfqtimrxgy4gcztfgq4gmzten42gc6a\n\ud83d\udc4d try to copy source code files...\n\ud83d\udcab python3.8.13@conda, try to export environment...\n\ud83c\udf3a congratulation! you can run  swcli model info cifar_net:hfqtimrxgy4gcztfgq4gmzten42gc6a\n6 out of 6 steps finished \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 0:00:03\n")),(0,l.kt)("p",null,"Here we are. We have finished all the complex parts."),(0,l.kt)("h2",{id:"run-the-evaluation-job-and-see-the-metrics"},"Run the evaluation job and see the metrics"),(0,l.kt)("p",null,"Before we evaluate our model, we should copy the runtime, model, and dataset to the Starwhale instance. Open the console, create one job, and look at the evaluation metrics."),(0,l.kt)("p",null,"Congratulations, we have finished the whole example! From now on, we can update the training method, get a new model, build a new SWMP and evaluate our model from time to time."))}c.isMDXComponent=!0}}]);