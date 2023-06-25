"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[40613],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=l,h=c["".concat(o,".").concat(u)]||c[u]||d[u]||r;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},47413:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(83117),l=(a(67294),a(3905));const r={title:"NMT for french and english"},i=void 0,s={unversionedId:"examples/nmt",id:"version-0.4.4/examples/nmt",title:"NMT for french and english",description:"This example will illustrate how to evaluate a pre-trained nmt model on StarWhale(version",source:"@site/versioned_docs/version-0.4.4/examples/nmt.md",sourceDirName:"examples",slug:"/examples/nmt",permalink:"/docs/0.4.4/examples/nmt",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.4/examples/nmt.md",tags:[],version:"0.4.4",frontMatter:{title:"NMT for french and english"}},o={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Preparing Data",id:"preparing-data",level:2},{value:"Train NMT Model",id:"train-nmt-model",level:2},{value:"Build Model With Starwhale",id:"build-model-with-starwhale",level:2},{value:"Build Runtime With Starwhale",id:"build-runtime-with-starwhale",level:2},{value:"Build Dataset With Starwhale",id:"build-dataset-with-starwhale",level:2},{value:"Evaluation process",id:"evaluation-process",level:2},{value:"Evaluate model on cloud instance",id:"evaluate-model-on-cloud-instance",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This example will illustrate how to evaluate a pre-trained nmt model on StarWhale(",(0,l.kt)("inlineCode",{parentName:"p"},"version:0.2.0"),") under 7 steps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Preparing Data"),(0,l.kt)("li",{parentName:"ul"},"Train the model"),(0,l.kt)("li",{parentName:"ul"},"Build Model With Starwhale"),(0,l.kt)("li",{parentName:"ul"},"Build Runtime With Starwhale"),(0,l.kt)("li",{parentName:"ul"},"Build Dataset With Starwhale"),(0,l.kt)("li",{parentName:"ul"},"Evaluation process"),(0,l.kt)("li",{parentName:"ul"},"Evaluate model on cloud instance")),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python3.7 +."),(0,l.kt)("li",{parentName:"ul"},"Starwhale Client.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"install: ",(0,l.kt)("inlineCode",{parentName:"li"},"pip install starwhale")),(0,l.kt)("li",{parentName:"ul"},"check version: ",(0,l.kt)("inlineCode",{parentName:"li"},"swcli --version")))),(0,l.kt)("li",{parentName:"ul"},"Clone starwhale repo")),(0,l.kt)("h2",{id:"preparing-data"},"Preparing Data"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Enter the director ",(0,l.kt)("inlineCode",{parentName:"p"},"example/nmt"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download train data"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"exec ",(0,l.kt)("inlineCode",{parentName:"p"},"mkdir data && cd data && wget https://www.manythings.org/anki/fra-eng.zip && unzip fra-eng.zip && mv fra.txt eng-fra.txt")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"--2022-06-29 18:29:22--  https://www.manythings.org/anki/fra-eng.zip\n  ...\n  Saving to: \u2018fra-eng.zip\u2019\n  ...\n  2022-06-29 18:29:26 (2.06 MB/s) - \u2018fra-eng.zip\u2019 saved [6612164/6612164]\n  Archive:  fra-eng.zip\n    inflating: _about.txt\n    inflating: fra.txt\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Copy the test file we prepared for you"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cp test/test_eng-fra.txt data/test_eng-fra.txt\n")))))),(0,l.kt)("h2",{id:"train-nmt-model"},"Train NMT Model"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Generate nmt models"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"First, generate vocabulary"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"exec ",(0,l.kt)("inlineCode",{parentName:"p"},"mkdir models && python3 main.py --mode vocab")," and the dir of models/ would generate a file named 'vocab_eng-fra.bin'"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," Reading lines...\n Read 194513 sentence pairs\n Trimmed to 194513 sentence pairs\n Counting words...\n Counted words:\n eng 15140\n fra 24329\n generated vocabulary, source 15140 words, target 24329 words\n vocabulary saved to models/vocab_eng-fra.bin\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Then, start to train the nmt model"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"exec ",(0,l.kt)("inlineCode",{parentName:"p"},"python3 main.py --mode train")," and finally the dir of models would generate two file which the suffix is .pth(It is recommended to use a machine with gpu)"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"preapring data...\nstart to train...\n0m 22s (- 3m 21s) (1000 10%) 5.2330\n0m 44s (- 2m 57s) (2000 20%) 4.8755\n1m 6s (- 2m 35s) (3000 30%) 4.6942\n1m 29s (- 2m 13s) (4000 40%) 4.5593\n1m 49s (- 1m 49s) (5000 50%) 4.5472\n2m 12s (- 1m 28s) (6000 60%) 4.4088\n2m 36s (- 1m 6s) (7000 70%) 4.3386\n2m 58s (- 0m 44s) (8000 80%) 4.3486\n3m 23s (- 0m 22s) (9000 90%) 4.2323\n3m 46s (- 0m 0s) (10000 100%) 4.1829\nSaving model to /home/**/starwhale/example/nmt/models/encoder.pth\nSaving model to /home/**/starwhale/example/nmt/models/decoder.pth\n")))))))),(0,l.kt)("h2",{id:"build-model-with-starwhale"},"Build Model With Starwhale"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Develop the evaluation process with Starwhale Python SDK, full code is ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/main/example/nmt/code/ppl.py"},"here"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale.api.model import PipelineHandler\n\nclass NMTPipeline(PipelineHandler):\n\n    def __init__(self) -> None:\n        super().__init__(merge_label=True, ignore_error=True)\n        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")\n        self.vocab = self._load_vocab()\n        self.encoder = self._load_encoder_model(self.device)\n        self.decoder = self._load_decoder_model(self.device)\n\n    @torch.no_grad()\n    def ppl(self, data, **kw):\n        print(f"-----\x3e ppl: {len(data)}")\n        src_sentences = data.decode().split(\'\\n\')\n        print("ppl-src sentexces: %s" % len(src_sentences))\n        return evaluate_batch(self.device, self.vocab.input_lang, self.vocab.output_lang, src_sentences, self.encoder, self.decoder)\n\n    def handle_label(self, label, **kw):\n        labels = label.decode().split(\'\\n\')\n        print("src labels: %s" % len(labels))\n        return labels\n\n    def cmp(self, _data_loader):\n        _result, _label = [], []\n        for _data in _data_loader:\n            _label.extend(_data[self._label_field])\n            (result) = _data[self._ppl_data_field]\n            _result.extend(result)\n        bleu = BLEU(_result, [_label])\n        return {\'summary\': {\'bleu_score\': bleu}}\n\n    def _load_vocab(self):\n        return torch.load(_ROOT_DIR + \'/models/vocab_eng-fra.bin\')\n\n    def _load_encoder_model(self, device):\n        hidden_size = 256\n        model = EncoderRNN(self.vocab.input_lang.n_words, hidden_size, device).to(device)\n        param = torch.load(_ROOT_DIR + "/models/encoder.pth", device)\n        model.load_state_dict(param)\n        return model\n\n    def _load_decoder_model(self, device):\n        hidden_size = 256\n        model = AttnDecoderRNN(self.vocab.output_lang.n_words, hidden_size, device).to(device)\n        param = torch.load(_ROOT_DIR + "/models/decoder.pth", device)\n        model.load_state_dict(param)\n        return model\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Define ",(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 1.0\nname: nmt\nrun:\n  ppl: code.ppl:NMTPipeline\ndesc: nmt by pytorch\ntag:\n  - nmt\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Build Starwhale Model(Please execute this command in the directory where 'model.yaml' is located,the same with runtime and dataset build)\n",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model build .")))),(0,l.kt)("h2",{id:"build-runtime-with-starwhale"},"Build Runtime With Starwhale"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Write requirements.txt"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"numpy\ntorch\nnltk\nstarwhale\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Build Starwhale Runtime"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"swcli runtime create -n nmt -m venv --python 3.8 .")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"2022-06-30 20:09:14.247 | DEBUG  | verbosity: 4, log level: DEBUG\n\ud83d\udea7 start to create runtime environment...\n2022-06-30 20:09:14.250 | INFO   | create venv @ /home/**/vscode_space/starwhale/example/nmt/venv...\n\ud83d\udc4f create venv@/home/**/vscode_space/starwhale/example/nmt/venv, python:3.8.10 (default, Mar 15 2022, 12:22:08)\n[GCC 9.4.0]\n\ud83d\udc36 install starwhale==0.2.0b7 venv@/home/**/vscode_space/starwhale/example/nmt/venv...\n\ud83c\udf70 run command in shell \ud83c\udf70\nsource /home/**/vscode_space/starwhale/example/nmt/venv/bin/activate\n\ud83d\udc4f python runtime environment is ready to use \ud83c\udf89\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"follow the prompts to execute the activate environment command\n",(0,l.kt)("inlineCode",{parentName:"p"},"source /home/**/vscode_space/starwhale/example/nmt/venv/bin/activate"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"install by requirements\n",(0,l.kt)("inlineCode",{parentName:"p"},"python3 -m pip install -r requirements.txt"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"swcli runtime build .")))))),(0,l.kt)("h2",{id:"build-dataset-with-starwhale"},"Build Dataset With Starwhale"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use Starwhale python SDK to customize dataset generation rules"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale.api.dataset import BuildExecutor\n\nclass DataSetProcessExecutor(BuildExecutor):\n    def iter_data_slice(self, path: str):\n        pairs = prepareData(path)\n        index = 0\n        lines = len(pairs)\n        while True:\n            last_index = index\n            index += 1\n            index = min(index, lines - 1 )\n            print(\'data:%s, %s\' % (last_index, index))\n            data_batch = [src for src, tgt in pairs[last_index:index]]\n            join = "\\n".join(data_batch)\n\n            print("res-data:%s" % join)\n            yield join.encode()\n            if index >= lines - 1:\n                break\n\n    def iter_label_slice(self, path: str):\n        pairs = prepareData(path)\n        index = 0\n        lines = len(pairs)\n        while True:\n            last_index = index\n            index += 1\n            index = min(index, lines - 1)\n\n            print(\'label:%s, %s\' % (last_index, index))\n            data_batch = [tgt for src, tgt in pairs[last_index:index]]\n            join = "\\n".join(data_batch)\n            print("res-label:%s" % join)\n            yield join.encode()\n            if index >= lines - 1:\n                break\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Define ",(0,l.kt)("inlineCode",{parentName:"p"},"dataset.yaml"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'name: nmt\ndata_dir: data\ndata_filter: "test_eng-fra.txt"\nlabel_filter: "test_eng-fra.txt"\nprocess: code.dataset:DataSetProcessExecutor\ndesc: nmt data and label test dataset\ntag:\n- bin\nattr:\n  alignment_size: 4K\n  volume_size: 2M\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Build Starwhale Dataset"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli dataset build ."))))),(0,l.kt)("h2",{id:"evaluation-process"},"Evaluation process"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create evaluate job for the models"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"exec ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli -vvv job create --model nmt/version/latest --dataset nmt/version/latest --runtime nmt/version/latest"),"."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"...\n\ud83d\udc4f finish run ppl: PipelineHandler ... result@/home/**/.cache/starwhale/self/job/gq/gqzdgzrzgfstmylbgrstmnjrpi3xeni/ppl/result\n...\n\ud83d\udc4f finish run cmp: PipelineHandler ... result@/home/**/.cache/starwhale/self/job/gq/gqzdgzrzgfstmylbgrstmnjrpi3xeni/cmp/result\n  7 out of 7 steps finished \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 0:00:03\n\ud83d\udc4f success to create job(project id: local/project/self)\n\ud83d\udc26 run cmd to fetch job info: swcli job info gqzdgzrzgfst\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Follow the prompts to execute the info command:",(0,l.kt)("inlineCode",{parentName:"p"},"swcli job info gqzdgzrzgfst")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"{\n    'created_at': '2022-07-01 10:41:07 CST',\n    'datasets': [\n        'local/project/self/dataset/nmt/version/latest'\n    ],\n    'desc': None,\n    'finished_at': '2022-07-01 10:41:10 CST',\n    'model': 'nmt/version/latest',\n    'model_dir': '/home/**/.cache/starwhale/self/workdir/model/nmt/gq/gqygmzddgaywkztdg42gizjvo5utcni/src',\n    'name': None,\n    'phase': 'all',\n    'runtime': 'nmt/version/latest',\n    'status': 'success',\n    'version': 'gqzdgzrzgfstmylbgrstmnjrpi3xeni'\n}\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Evaluation process dirs \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\ud83c\udf35 ppl: /home/**/.cache/starwhale/self/job/gq/gqzdgzrzgfstmylbgrstmnjrpi3xeni/ppl\n\ud83d\udc2b cmp: /home/**/.cache/starwhale/self/job/gq/gqzdgzrzgfstmylbgrstmnjrpi3xeni/cmp\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"the prompts 'cmp: /home/",(0,l.kt)("strong",{parentName:"p"},"/.cache/starwhale/self/job/gq/gqzdgzrzgfstmylbgrstmnjrpi3xeni/cmp' show the dir where the result file locate, so we can view the result file content by `cat /home/"),"/.cache/starwhale/self/job/gq/gqzdgzrzgfstmylbgrstmnjrpi3xeni/cmp/result/current`"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{"summary": {"bleu_score": 0.0}}\n')))))),(0,l.kt)("h2",{id:"evaluate-model-on-cloud-instance"},"Evaluate model on cloud instance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Login on one cloud instance"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(nmt) $ swcli instance login http://console.pre.intra.starwhale.ai --username starwhale --password abcd1234 --alias pre-k8s\n\ud83d\udc68\u200d\ud83c\udf73 login http://console.pre.intra.starwhale.ai successfully!\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Copy the model to cloud instance"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(nmt) $ swcli model copy nmt/version/latest cloud://pre-k8s/project/1\n\ud83d\udea7 start to copy local/project/self/model/nmt/version/latest -> http://console.pre.intra.starwhale.ai/project/1...\n  \ud83c\udfb3 upload gqygmzddgaywkztdg42gizjvo5utcni.swmp \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:05 71.0 MB 9.1 MB/s\n\ud83d\udc4f copy done.\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Copy the dataset to cloud instance"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(nmt) $ swcli dataset copy nmt/version/latest cloud://pre-k8s/project/1\n\ud83d\udea7 start to copy local/project/self/dataset/nmt/version/latest -> http://console.pre.intra.starwhale.ai/project/1...\n  \u2b06 _manifest.yaml         \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 1.2 kB\n  \u2b06 data_ubyte_0.swds_bin  \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 8.1 kB\n  \u2b06 index.jsonl            \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 338 bytes\n  \u2b06 label_ubyte_0.swds_bin \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 12.2 kB\n  \u2b06 archive.swds_meta      \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 81.9 kB\n\ud83d\udc4f copy done\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Copy the runtime to cloud instance"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"(nmt) $ swcli runtime copy nmt/version/latest cloud://pre-k8s/project/1\n\ud83d\udea7 start to copy local/project/self/runtime/nmt/version/latest -> http://console.pre.intra.starwhale.ai/project/1...\n  \ud83c\udfb3 upload mjsdkzbymmztmztdg42gizjvge2honq.swrt \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 20.5 kB\n\ud83d\udc4f copy done.\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Go to the console and create one job"))))}d.isMDXComponent=!0}}]);