"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[2512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=l,h=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(83117),l=(n(67294),n(3905));const o={title:"Object Detection & segmentation on PennFudanPed dataset"},r=void 0,s={unversionedId:"examples/pfp",id:"version-0.4.2/examples/pfp",title:"Object Detection & segmentation on PennFudanPed dataset",description:"This example illustrates how to evaluate a pre-trained image object detection & segmentation model on Starwhale(version:0.2.0b8) in 6 steps",source:"@site/versioned_docs/version-0.4.2/examples/pfp.md",sourceDirName:"examples",slug:"/examples/pfp",permalink:"/docs/0.4.2/examples/pfp",draft:!1,editUrl:"https://github.com/star-whale/starwhale/tree/main/docs/versioned_docs/version-0.4.2/examples/pfp.md",tags:[],version:"0.4.2",frontMatter:{title:"Object Detection & segmentation on PennFudanPed dataset"}},i={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a Runtime",id:"create-a-runtime",level:2},{value:"Train the model",id:"train-the-model",level:2},{value:"Slice the test dataset using the Starwhale protocol",id:"slice-the-test-dataset-using-the-starwhale-protocol",level:2},{value:"Implement the inference method and evaluation metrics computing method",id:"implement-the-inference-method-and-evaluation-metrics-computing-method",level:2},{value:"Implement ppl",id:"implement-ppl",level:3},{value:"Implement cmp",id:"implement-cmp",level:3},{value:"Build Runtime, Model, and Dataset",id:"build-runtime-model-and-dataset",level:2},{value:"Build Runtime",id:"build-runtime",level:3},{value:"Build Dataset",id:"build-dataset",level:3},{value:"Build Model",id:"build-model",level:3},{value:"Run the evaluation job and see the metrics",id:"run-the-evaluation-job-and-see-the-metrics",level:2},{value:"Evaluate the model on the local standalone instance",id:"evaluate-the-model-on-the-local-standalone-instance",level:3},{value:"Create the job",id:"create-the-job",level:4},{value:"See the metrics",id:"see-the-metrics",level:4},{value:"Evaluate model on a cloud instance",id:"evaluate-model-on-a-cloud-instance",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example illustrates how to evaluate a pre-trained image object detection & segmentation model on Starwhale(",(0,l.kt)("inlineCode",{parentName:"p"},"version:0.2.0b8"),") in 6 steps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a Runtime"),(0,l.kt)("li",{parentName:"ul"},"Train the model"),(0,l.kt)("li",{parentName:"ul"},"Implement the dataset slicing method"),(0,l.kt)("li",{parentName:"ul"},"Implement the inference method and evaluation metrics computing method"),(0,l.kt)("li",{parentName:"ul"},"Build Runtime, Model, and Dataset"),(0,l.kt)("li",{parentName:"ul"},"Run the evaluation job and look at the metrics")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 This example requires CUDA.")),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Assume that you have Python3.7 or above installed."),(0,l.kt)("li",{parentName:"ul"},"Clone the Starwhale repo")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/star-whale/starwhale.git\ncd starwhale/example/PennFudanPed\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 If you are from the mainland of China, we strongly recommend you use a proxy.")),(0,l.kt)("h2",{id:"create-a-runtime"},"Create a Runtime"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ swcli runtime create . --name visual_pytorch -m venv --python=3.8 --force\n\ud83c\udf52 /home/renyanda/.config/starwhale/config.yaml use unexpected version(None), swcli only support 2.0 version.\n\ud83e\udd55 /home/renyanda/.config/starwhale/config.yaml will be upgraded to 2.0 automatically.\n\ud83d\udea7 start to create runtime environment...\n\ud83d\udc4f create venv@/home/renyanda/penn_fudan_ped/venv, python:3.8.10 (default, Mar 15 2022, 12:22:08)\n[GCC 9.4.0]\n\ud83d\udc36 install starwhale==0.2.0b8 venv@/home/renyanda/penn_fudan_ped/venv...\n\ud83c\udf70 run command in shell \ud83c\udf70\n        source /home/renyanda/penn_fudan_ped/venv/bin/activate\n\ud83d\udc4f python runtime environment is ready to use \ud83c\udf89\n$ source ./venv/bin/activate\n(visual_pytorch) $  python3 -m pip install -r requirements.txt\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 make sure python3.8-venv is installed if you choose --python=3.8\n\ud83d\udca1 ",(0,l.kt)("inlineCode",{parentName:"p"},"python3 -m pip install")," is recommended over ",(0,l.kt)("inlineCode",{parentName:"p"},"pip install"))),(0,l.kt)("h2",{id:"train-the-model"},"Train the model"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The training code in this repo is copied from ",(0,l.kt)("a",{parentName:"p",href:"https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html"},"torchvision tutorial"),". However, some code is modified to understand better how Starwhale works.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(visual_pytorch) $ mkdir models\n(visual_pytorch) $ mkdir data\n(visual_pytorch) $ cd data\n(visual_pytorch) $ wget https://www.cis.upenn.edu/~jshi/ped_html/PennFudanPed.zip\n(visual_pytorch) $ unzip PennFudanPed.zip\n(visual_pytorch) $ cd ../code\n(visual_pytorch) $ python train.py\n")),(0,l.kt)("p",null,"You will get the logs as below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Epoch: [0]  [ 0/60]  eta: 0:00:53  lr: 0.000090  loss: 4.0966 (4.0966)  loss_classifier: 0.6816 (0.6816)  loss_box_reg: 0.5010 (0.5010)  loss_mask: 2.8732 (2.8732)  loss_objectness: 0.0377 (0.0377)  loss_rpn_box_reg: 0.0030 (0.0030)  time: 0.8854  data: 0.2439  max mem: 2301\n...logs omitted...\ncreating index...\nindex created!\n...logs omitted...\n Average Recall     (AR) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.806\nThat's it!\n")),(0,l.kt)("p",null,"Great! Now, you have your model trained and saved. You can see it in the ",(0,l.kt)("inlineCode",{parentName:"p"},"models")," directory."),(0,l.kt)("h2",{id:"slice-the-test-dataset-using-the-starwhale-protocol"},"Slice the test dataset using the Starwhale protocol"),(0,l.kt)("p",null,"In the training section, we use a dataset called ",(0,l.kt)("a",{parentName:"p",href:"https://www.cis.upenn.edu/~jshi/ped_html/"},"PennFudanPed"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(visual_pytorch) $ ls ../data\nPennFudanPed  PennFudanPed.zip\n")),(0,l.kt)("p",null,"You need to extend the abstract class ",(0,l.kt)("inlineCode",{parentName:"p"},"BuildExecutor"),", so Starwhale can use it."),(0,l.kt)("h2",{id:"implement-the-inference-method-and-evaluation-metrics-computing-method"},"Implement the inference method and evaluation metrics computing method"),(0,l.kt)("p",null,"The inference method is called ",(0,l.kt)("inlineCode",{parentName:"p"},"ppl"),", and the evaluation metrics computing method is called ",(0,l.kt)("inlineCode",{parentName:"p"},"cmp"),".\nHere is the code snap from ",(0,l.kt)("inlineCode",{parentName:"p"},"ppl.py"),", which implements both methods. You need to extend the abstract class ",(0,l.kt)("inlineCode",{parentName:"p"},"PipelineHandler")," so you can receive the byte arrays, which you transformed in the last step."),(0,l.kt)("p",null,"There is a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/issues/611"},"flaw")," in the Starwhale(",(0,l.kt)("inlineCode",{parentName:"p"},"version:0.2.0b8"),") SDK. You must convert tensors to lists(",(0,l.kt)("inlineCode",{parentName:"p"},"tensor_dict_to_list_dict"),") in order to serialize them, and then convert them back(",(0,l.kt)("inlineCode",{parentName:"p"},"list_dict_to_tensor_dict"),"). This is because the framework uses jsonline to serialize Python objects."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 The reason we serialize ppl results instead of directly invoking cmp is that we design ppl and cmp as decoupled phases. We expect the ppl phase to be executed on distributed machines, which can significantly reduce inference time on large test datasets. So, there must be an inter-protocol between ppl and cmp.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"_DTYPE_DICT_OUTPUT = {'boxes': torch.float32, 'labels': torch.int64, 'scores': torch.float32, 'masks': torch.uint8}\n_DTYPE_DICT_LABEL = {'iscrowd': torch.int64, 'image_id': torch.int64, 'area': torch.float32, 'boxes': torch.float32, 'labels': torch.int64, 'scores': torch.float32, 'masks': torch.uint8}\n\n\nclass MARSKRCNN(PipelineHandler):\n\n    def __init__(self, device=\"cuda\") -> None:\n        super().__init__(merge_label=True, ignore_error=True)\n        self.device = torch.device(device)\n\n    @torch.no_grad()\n    def ppl(self, data, **kw):\n        model = self._load_model(self.device)\n        files_bytes = pickle.loads(data)\n        _result = []\n        cpu_device = torch.device(\"cpu\")\n        for file_bytes in files_bytes:\n            image = Image.open(io.BytesIO(file_bytes.content_bytes))\n            _image = F.to_tensor(image)\n            outputs = model([_image.to(self.device)])\n            output = outputs[0]\n            # [{'boxes':tensor[[],[]]},'labels':tensor[[],[]],'masks':tensor[[[]]]}]\n            output = {k: v.to(cpu_device) for k, v in output.items()}\n            output['height'] = _image.shape[-2]\n            output['width'] = _image.shape[-1]\n            _result.append(output)\n        return _result\n\n    def handle_label(self, label, **kw):\n        files_bytes = pickle.loads(label)\n        _result = []\n        for idx, file_bytes in enumerate(files_bytes):\n            image = Image.open(io.BytesIO(file_bytes.content_bytes))\n            target = penn_fudan_ped_ds.mask_to_coco_target(image, kw['index'] + idx)\n            _result.append(target)\n        return _result\n\n    def cmp(self, _data_loader):\n        _result, _label = [], []\n        for _data in _data_loader:\n            # _label.extend([self.list_dict_to_tensor_dict(l, True) for l in _data[self._label_field]])\n            _label.extend([l for l in _data[self._label_field]])\n            (result) = _data[self._ppl_data_field]\n            _result.extend(result)\n        ds = zip(_result, _label)\n        coco_ds = coco_utils.convert_to_coco_api(ds)\n        coco_evaluator = coco_eval.CocoEvaluator(coco_ds,  [\"bbox\", \"segm\"])\n        for outputs, targets in zip(_result, _label):\n            res = {targets[\"image_id\"].item(): outputs}\n            coco_evaluator.update(res)\n\n        # gather the stats from all processes\n        coco_evaluator.synchronize_between_processes()\n\n        # accumulate predictions from all images\n        coco_evaluator.accumulate()\n        coco_evaluator.summarize()\n\n        return [{iou_type: coco_eval.stats.tolist() for iou_type, coco_eval in coco_evaluator.coco_eval.items()}]\n\n    def _pre(self, input: bytes):\n        image = Image.open(io.BytesIO(input))\n        image = F.to_tensor(image)\n        return [image.to(self.device)]\n\n    def _load_model(self, device):\n        s = _ROOT_DIR + \"/models/maskrcnn.pth\"\n        net = mask_rcnn_model.get_model_instance_segmentation(2, False, torch.load(\n            s))\n        net = net.to(device)\n        net.eval()\n        print(\"mask rcnn model loaded, start to inference...\")\n        return net\n")),(0,l.kt)("h3",{id:"implement-ppl"},"Implement ppl"),(0,l.kt)("p",null,"Starwhale will feed the byte arrays of one batch to the ",(0,l.kt)("inlineCode",{parentName:"p"},"ppl")," method and put the output of ",(0,l.kt)("inlineCode",{parentName:"p"},"ppl")," into an ",(0,l.kt)("inlineCode",{parentName:"p"},"inference_result")," dict, which looks like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{"result":[{resultObj1},{resultObj2}],"label":[{labelObj1},{labelObj2}]}\n')),(0,l.kt)("p",null,"Starwhale will automatically add the result of ",(0,l.kt)("inlineCode",{parentName:"p"},"ppl")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"inference_result.result")," and the result of ",(0,l.kt)("inlineCode",{parentName:"p"},"handle_label")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"inference_result.label"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"inference_result")," is used in the argument of ",(0,l.kt)("inlineCode",{parentName:"p"},"cmp")," named ",(0,l.kt)("inlineCode",{parentName:"p"},"_data_loader"),"."),(0,l.kt)("h3",{id:"implement-cmp"},"Implement cmp"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"_data_loader")," is an iterator for ",(0,l.kt)("inlineCode",{parentName:"p"},"result")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"label"),". For a multiple classification problem, it is pretty easy to implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"cmp")," method by annotating your ",(0,l.kt)("inlineCode",{parentName:"p"},"cmp")," method with the ",(0,l.kt)("inlineCode",{parentName:"p"},"multi_classification")," annotation and coping the lines inside it."),(0,l.kt)("p",null,"If you need to show ",(0,l.kt)("inlineCode",{parentName:"p"},"roc")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"auc"),", you will also need to supply ",(0,l.kt)("inlineCode",{parentName:"p"},"_pr")," in your ",(0,l.kt)("inlineCode",{parentName:"p"},"ppl")," method."),(0,l.kt)("p",null,"By now, we have finished all the coding parts. Then let's begin the command line part."),(0,l.kt)("h2",{id:"build-runtime-model-and-dataset"},"Build Runtime, Model, and Dataset"),(0,l.kt)("h3",{id:"build-runtime"},"Build Runtime"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(visual_pytorch) $ cd ..\n(visual_pytorch) $ swcli runtime build .\n\ud83d\udea7 start to build runtime bundle...\n\ud83d\udc77 uri:local/project/self/runtime/visual_pytorch\n\ud83d\udc26 runtime will ignore pypi editable package\n\ud83c\udd95 version gftdinztgqzt\n\ud83d\udcc1 workdir: /home/renyanda/.cache/starwhale/self/workdir/runtime/visual_pytorch/gf/gftdinztgqztenddmvsdsolbnjxxgmy\n\ud83d\udcab python3.8.10@venv, os(Linux), include-editable(False), try to export environment...\n\ud83c\udf08 runtime docker image: ghcr.io/star-whale/starwhale:0.2.0b8  \ud83c\udf08\n\ud83e\udd8b .swrt bundle:/home/renyanda/.cache/starwhale/self/runtime/visual_pytorch/gf/gftdinztgqztenddmvsdsolbnjxxgmy.swrt\n  7 out of 7 steps finished \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 0:00:00\n")),(0,l.kt)("h3",{id:"build-dataset"},"Build Dataset"),(0,l.kt)("p",null,"Here is some descriptive information needed for Starwhale to build a Starwhale Dataset(SWDS). A yaml file describes the information as below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'name: penn_fudan_ped\ndata_dir: data\ndata_filter: "PNGImages/*6.png"\nlabel_filter: "PedMasks/*6_mask.png"\nprocess: code.data_slicer:PennFudanPedSlicer\n\ndesc: PennFudanPed data and label test dataset\ntag:\n  - bin\n\nattr:\n    alignment_size: 4k\n    volume_size: 8M\n')),(0,l.kt)("p",null,"Most of the fields are self-explained. The ",(0,l.kt)("inlineCode",{parentName:"p"},"process")," descriptor is the entry point of the data split method, and Starwhale will use the files in ",(0,l.kt)("inlineCode",{parentName:"p"},"testing_list.txt")," as the input for ",(0,l.kt)("inlineCode",{parentName:"p"},"process"),"."),(0,l.kt)("p",null,"After creating the yaml file under ",(0,l.kt)("inlineCode",{parentName:"p"},"${code_base}/example/PennFudanPed/"),", we are ready."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(visual_pytorch) $ swcli dataset build .\n\ud83d\udea7 start to build dataset bundle...\n\ud83d\udc77 uri:local/project/self/dataset/penn_fudan_ped\n\ud83c\udd95 version g5tggmbvhbsg\n\ud83d\udcc1 swds workdir: /home/renyanda/.cache/starwhale/self/dataset/penn_fudan_ped/g5/g5tggmbvhbsgkzrwge4wizbvoj3xa3y.swds\n\ud83d\udc4d try to copy source code files...\n\ud83d\udde3  swcli python prefix:/usr, runtime env python prefix:/home/renyanda/penn_fudan_ped/venv, swcli will inject sys.path\n\ud83d\udc7b import code.data_slicer:PennFudanPedSlicer@/home/renyanda/penn_fudan_ped to make swds...\ncleanup done.\nfinish gen swds @ /home/renyanda/.cache/starwhale/self/dataset/penn_fudan_ped/g5/g5tggmbvhbsgkzrwge4wizbvoj3xa3y.swds/data\n\ud83e\udd16 calculate signature...\n\ud83c\udf3a congratulation! you can run  swcli dataset info penn_fudan_ped/version/g5tggmbvhbsgkzrwge4wizbvoj3xa3y\n  8 out of 8 steps finished \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 0:00:04\n")),(0,l.kt)("p",null,"There is one more step left."),(0,l.kt)("h3",{id:"build-model"},"Build Model"),(0,l.kt)("p",null,"Here is some descriptive information for Starwhale to build a Starwhale Model Package(SWMP). A yaml file describes the information as below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 1.0\nname: mask_rcnn\nmodel:\n  - models/maskrcnn.pth\nrun:\n  ppl: code.ppl:MARSKRCNN\ndesc: mask rcnn resnet50 by PyTorch\ntag:\n  - instance segmentation & object dectection\n")),(0,l.kt)("p",null,"Most of the fields are self-explained. The ",(0,l.kt)("inlineCode",{parentName:"p"},"ppl")," descriptor is the entry point of the inference and cmp method.\nAfter creating the yaml file under ",(0,l.kt)("inlineCode",{parentName:"p"},"${code_base}/example/PennFudanPed/"),", we are ready."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(visual_pytorch) $ swcli model build .\n\ud83d\udea7 start to build model bundle...\n\ud83d\udc77 uri:local/project/self/model/mask_rcnn\n\ud83c\udd95 version mrrdoytdmq4d\n\ud83d\udcc1 workdir: /home/renyanda/.cache/starwhale/self/workdir/model/mask_rcnn/mr/mrrdoytdmq4dqndcgu4dmntbonxhm2i\n\ud83d\udc4d try to copy source code files...\n\ud83e\udd8b .swmp bundle:/home/renyanda/.cache/starwhale/self/model/mask_rcnn/mr/mrrdoytdmq4dqndcgu4dmntbonxhm2i.swmp\n  6 out of 6 steps finished \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 0:00:03\n")),(0,l.kt)("p",null,"Here we are. We have finished all the complex parts."),(0,l.kt)("h2",{id:"run-the-evaluation-job-and-see-the-metrics"},"Run the evaluation job and see the metrics"),(0,l.kt)("p",null,"We have two ways to evaluate our model."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Evaluate the model on the local standalone instance"),(0,l.kt)("li",{parentName:"ul"},"Evaluate the model on a cloud instance")),(0,l.kt)("h3",{id:"evaluate-the-model-on-the-local-standalone-instance"},"Evaluate the model on the local standalone instance"),(0,l.kt)("h4",{id:"create-the-job"},"Create the job"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ swcli job create self --model mask_rcnn/version/latest --dataset penn_fudan_ped/version/latest --runtime visual_pytorch/version/latest\n\ud83d\ude39 /home/renyanda/.cache/starwhale/self/workdir/model/mask_rcnn/mr/mrrdoytdmq4dqndcgu4dmntbonxhm2i existed, skip extract model bundle\n\ud83d\udc4f render swds penn_fudan_ped:g5tggmbvhbsgkzrwge4wizbvoj3xa3y local_fuse.json\n\ud83d\udd0d /home/renyanda/.cache/starwhale/self/dataset/penn_fudan_ped/g5/g5tggmbvhbsgkzrwge4wizbvoj3xa3y.swds/local_fuse.json\ntry to import code.ppl:MARSKRCNN@/home/renyanda/.cache/starwhale/self/workdir/model/mask_rcnn/mr/mrrdoytdmq4dqndcgu4dmntbonxhm2i/src...\n\ud83d\udde3  swcli python prefix:/usr, runtime env python prefix:/home/renyanda/penn_fudan_ped/venv, swcli will inject sys.path\nmask rcnn model loaded, start to inference...\nmask rcnn model loaded, start to inference...\nmask rcnn model loaded, start to inference...\nmask rcnn model loaded, start to inference...\n\ud83d\udc4f finish run ppl: PipelineHandler status@/home/renyanda/.cache/starwhale/self/job/gu/guzgeztdga4tqzjzmvqtenjvnvstkyi/ppl/status, log@/home/renyanda/.cache/starwhale/self/job/gu/guzgeztdga4tqzjzmvqtenjvnvstkyi/ppl/log, result@/home/renyanda/.cache/starwhale/self/job/gu/guzgeztdga4tqzjzmvqtenjvnvstkyi/ppl/result\ntry to import code.ppl:MARSKRCNN@/home/renyanda/.cache/starwhale/self/workdir/model/mask_rcnn/mr/mrrdoytdmq4dqndcgu4dmntbonxhm2i/src...\n\ud83d\udde3  swcli python prefix:/usr, runtime env python prefix:/home/renyanda/penn_fudan_ped/venv, swcli will inject sys.path\ncreating index...\nindex created!\nAccumulating evaluation results...\nDONE (t=0.00s).\nAccumulating evaluation results...\nDONE (t=0.00s).\nIoU metric: bbox\n Average Precision  (AP) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.260\nIoU metric: segm\n Average Precision  (AP) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.000\n\ud83d\udc4f finish run cmp: PipelineHandler status@/home/renyanda/.cache/starwhale/self/job/gu/guzgeztdga4tqzjzmvqtenjvnvstkyi/cmp/status, log@/home/renyanda/.cache/starwhale/self/job/gu/guzgeztdga4tqzjzmvqtenjvnvstkyi/cmp/log, result@/home/renyanda/.cache/starwhale/self/job/gu/guzgeztdga4tqzjzmvqtenjvnvstkyi/cmp/result\n  7 out of 7 steps finished \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 0:01:11\n\ud83d\udc4f success to create job(project id: local/project/self)\n\ud83d\udc26 run cmd to fetch job info: swcli job info guzgeztdga4t\n")),(0,l.kt)("h4",{id:"see-the-metrics"},"See the metrics"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'(visual_pytorch) $ cat /home/renyanda/.cache/starwhale/self/job/gu/guzgeztdga4tqzjzmvqtenjvnvstkyi/cmp/result/current\n[{"bbox": [0.25974458315396753, 0.31819486296455735, 0.26732673267326734, -1.0, 0.3029702970297029, 0.2615275813295615, 0.08666666666666667, 0.2644444444444444, 0.2644444444444444, -1.0, 0.3, 0.2619047619047619], "segm": [0.0, 0.0, 0.0, -1.0, 0.0, 0.0, 0.0, 0.0, 0.0, -1.0, 0.0, 0.0]}]\n')),(0,l.kt)("p",null,"Congratulations, we have nearly finished the whole example! From now on, we can update the training method, get a new model, build a new SWMP and evaluate our model from time to time."),(0,l.kt)("h3",{id:"evaluate-model-on-a-cloud-instance"},"Evaluate model on a cloud instance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Log in to a cloud instance"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(visual_pytorch) $ swcli instance login http://console.pre.intra.starwhale.ai --username starwhale --password abcd1234 --alias pre-k8s\n\u200d\ud83c\udf73 login http://console.pre.intra.starwhale.ai successfully!\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Copy the model to the cloud instance"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(visual_pytorch) $ swcli model copy mask_rcnn/version/mfstoolehayd cloud://pre-k8s/project/1\n\ud83d\udea7 start to copy local/project/self/model/m5/version/mfstoolehayd -> http://console.pre.intra.starwhale.ai/project/1...\n  \ud83c\udfb3 upload mfstoolehaydeyrvmyzdamzrmzshuma.swmp \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:07 94.0 MB 10.0 MB/s\n\ud83d\udc4f copy done.\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Copy the dataset to the cloud instance"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(visual_pytorch) $ swcli dataset copy penn_fudan_ped/version/gmzgczrqmezd cloud://pre-k8s/project/1\n\ud83d\udea7 start to copy local/project/self/dataset/speechcommands/version/gmzgczrqmezd -> http://console.pre.intra.starwhale.ai/project/1...\n  \u2b06 _manifest.yaml         \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 4.3 kB  ?\n  \u2b06 data_ubyte_0.swds_bin  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:05 72.3 MB 9.6 MB/s\n  \u2b06 data_ubyte_1.swds_bin  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:13 72.8 MB 9.7 MB/s\n  \u2b06 data_ubyte_2.swds_bin  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:21 72.6 MB 9.7 MB/s\n  \u2b06 data_ubyte_3.swds_bin  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:29 72.6 MB 9.7 MB/s\n  \u2b06 data_ubyte_4.swds_bin  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:37 73.0 MB 9.8 MB/s\n  \u2b06 data_ubyte_5.swds_bin  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:45 72.8 MB 9.4 MB/s\n  \u2b06 data_ubyte_6.swds_bin  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:53 72.8 MB 9.6 MB/s\n  \u2b06 data_ubyte_7.swds_bin  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:01:01 72.7 MB 9.7 MB/s\n  \u2b06 data_ubyte_8.swds_bin  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:01:09 72.5 MB 9.7 MB/s\n  \u2b06 data_ubyte_9.swds_bin  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:01:13 32.5 MB 6.9 MB/s\n  \u2b06 index.jsonl            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:01:15 15.2 kB ?\n  \u2b06 label_ubyte_0.swds_bin \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:01:15 36.6 kB ?\n  \u2b06 label_ubyte_1.swds_bin \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:01:15 36.6 kB ?\n  \u2b06 label_ubyte_2.swds_bin \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:01:15 36.6 kB ?\n  \u2b06 label_ubyte_3.swds_bin \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:01:15 36.6 kB ?\n  \u2b06 label_ubyte_4.swds_bin \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:01:15 36.6 kB ?\n  \u2b06 label_ubyte_5.swds_bin \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:01:15 36.6 kB ?\n  \u2b06 label_ubyte_6.swds_bin \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:01:15 36.6 kB ?\n  \u2b06 label_ubyte_7.swds_bin \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:01:15 36.6 kB ?\n  \u2b06 label_ubyte_8.swds_bin \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:01:15 36.6 kB ?\n  \u2b06 label_ubyte_9.swds_bin \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:01:15 16.3 kB ?\n  \u2b06 archive.swds_meta      \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:01:23 93.9 MB 10.0 MB/s\n\ud83d\udc4f copy done\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Copy the runtime to the cloud instance"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(visual_pytorch) $ swcli runtime copy visual_pytorch/version/ga2wkmbwmizw cloud://pre-k8s/project/1\n\ud83d\udea7 start to copy local/project/self/runtime/visual_pytorch/version/ga2wkmbwmizw -> http://console.pre.intra.starwhale.ai/project/1...\n  \ud83c\udfb3 upload ga2wkmbwmizwkn3bmuytsmjunv3dc3q.swrt \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 20.5 kB ?\n\ud83d\udc4f copy done.\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Go to the console and create one job"))))}c.isMDXComponent=!0}}]);