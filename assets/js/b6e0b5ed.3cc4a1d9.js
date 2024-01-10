"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[69797],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(a),p=l,h=c["".concat(s,".").concat(p)]||c[p]||u[p]||r;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},28361:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(83117),l=(a(67294),a(3905));const r={title:"Starwhale's Helloworld Example - Evaluating the KNN Algorithm on Handwritten Digit Recognition Tasks"},i=void 0,o={unversionedId:"examples/helloworld",id:"version-0.6.8/examples/helloworld",title:"Starwhale's Helloworld Example - Evaluating the KNN Algorithm on Handwritten Digit Recognition Tasks",description:"This tutorial will start with the installation of the Starwhale Client, and then introduce the process of writing evaluation code, creating datasets, debugging on Standalone instances, and finally running evaluations on Server instances.",source:"@site/versioned_docs/version-0.6.8/examples/helloworld.md",sourceDirName:"examples",slug:"/examples/helloworld",permalink:"/0.6.8/examples/helloworld",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.8/examples/helloworld.md",tags:[],version:"0.6.8",frontMatter:{title:"Starwhale's Helloworld Example - Evaluating the KNN Algorithm on Handwritten Digit Recognition Tasks"},sidebar:"mainSidebar",previous:{title:"Examples",permalink:"/0.6.8/examples/"},next:{title:"Starwhale Common Concepts",permalink:"/0.6.8/concepts/"}},s={},d=[{value:"Basic Information",id:"basic-information",level:2},{value:"Installing Starwhale Client",id:"installing-starwhale-client",level:2},{value:"Building Starwhale Runtime",id:"building-starwhale-runtime",level:2},{value:"Building MNIST dataset",id:"building-mnist-dataset",level:2},{value:"Model Evaluation Code",id:"model-evaluation-code",level:2},{value:"predict phase",id:"predict-phase",level:3},{value:"evaluate phase",id:"evaluate-phase",level:3},{value:"Building Starwhale Model",id:"building-starwhale-model",level:2},{value:"Running model evaluation in Starwhale Standalone",id:"running-model-evaluation-in-starwhale-standalone",level:2},{value:"Starting Starwhale Server",id:"starting-starwhale-server",level:2},{value:"Copy runtime, model and dataset to Starwhale Server",id:"copy-runtime-model-and-dataset-to-starwhale-server",level:2},{value:"Login Starwhale Server",id:"login-starwhale-server",level:3},{value:"Copying",id:"copying",level:3},{value:"Running model evaluation in Starwhale Server",id:"running-model-evaluation-in-starwhale-server",level:2},{value:"Comparing evaluation results",id:"comparing-evaluation-results",level:2}],m={toc:d};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This tutorial will start with the installation of the Starwhale Client, and then introduce the process of writing evaluation code, creating datasets, debugging on Standalone instances, and finally running evaluations on Server instances."),(0,l.kt)("h2",{id:"basic-information"},"Basic Information"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Code: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/helloworld"},"https://github.com/star-whale/starwhale/tree/main/example/helloworld")),(0,l.kt)("li",{parentName:"ul"},"Starwhale Cloud Demo: ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn/projects/15/overview"},"https://cloud.starwhale.cn/projects/15/overview")),(0,l.kt)("li",{parentName:"ul"},"Notebook: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/blob/main/example/notebooks/quickstart-standalone.ipynb"},"Github"),", ",(0,l.kt)("a",{parentName:"li",href:"https://colab.research.google.com/github/star-whale/starwhale/blob/main/example/notebooks/quickstart-standalone.ipynb"},"Coblab")),(0,l.kt)("li",{parentName:"ul"},"Reproduction time: 10-15 mins"),(0,l.kt)("li",{parentName:"ul"},"Environment:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Laptop or dev manchine, GPU is optional"),(0,l.kt)("li",{parentName:"ul"},"Linux or macOS"),(0,l.kt)("li",{parentName:"ul"},"Python3.7 ~ 3.11")))),(0,l.kt)("h2",{id:"installing-starwhale-client"},"Installing Starwhale Client"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install starwhale\n")),(0,l.kt)("h2",{id:"building-starwhale-runtime"},"Building Starwhale Runtime"),(0,l.kt)("p",null,"Starwhale runtime provides a series of Python environment definitions and reproduction tools that can meet the environmental requirements for machine learning development and debugging. A typical way to create a Starwhale runtime is to start by writing a ",(0,l.kt)("inlineCode",{parentName:"p"},"runtime.yaml")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"name: helloworld  # runtime name\nmode: venv        # use virtualenv\ndependencies:     # python deps\n  - requirements.txt\n")),(0,l.kt)("p",null,"In the hellowrold example, we first define the name of the runtime and set the Python isolated environment to venv. Then, we add some Python dependencies, completing the definition of the ",(0,l.kt)("inlineCode",{parentName:"p"},"runtime.yaml")," file. Although the definition is simple, Starwhale will help you with many environment-related tasks in the background, such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Shielding details like Docker Image and Dockerfile"),(0,l.kt)("li",{parentName:"ul"},"Automatically adding CUDA and CuDNN dependencies"),(0,l.kt)("li",{parentName:"ul"},"Providing a carefully optimized Docker Base Image for machine learning development needs"),(0,l.kt)("li",{parentName:"ul"},"Automatically locking all dependency versions to ensure consistent reproduction environments"),(0,l.kt)("li",{parentName:"ul"},"Automatically locking Starwhale Client version"),(0,l.kt)("li",{parentName:"ul"},"Automatically locking Python version"),(0,l.kt)("li",{parentName:"ul"},"Offering two options for running isolated environments: venv and conda"),(0,l.kt)("li",{parentName:"ul"},"Providing version control for the runtime environment and the ability to freely share it with other Starwhale instances")),(0,l.kt)("p",null,"Next, we usually execute the build command to generate a Starwhale runtime with a version number:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli runtime build --yaml runtime.yaml\n")),(0,l.kt)("p",null,"Command output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli runtime build --yaml runtime.yaml\n\ud83d\udea7 start to build runtime bundle...\n\ud83d\udc77 uri local/project/self/runtime/helloworld/version/hlp6mixccpi5sdmuoxdstfn5nf5xebu2lac2gz4x\n\ud83d\udc26 runtime will ignore pypi editable package\n\ud83d\udc7d try to lock environment dependencies to /home/tianwei/code/starwhale/example/helloworld ...\n\ud83e\udd8b lock dependencies at mode venv\n\ud83c\udf7c install runtime.yaml dependencies @ /home/tianwei/code/starwhale/example/helloworld/.starwhale/venv for lock...\n\ud83d\udc31 use /home/tianwei/code/starwhale/example/helloworld/.starwhale/venv/bin/python3 to freeze requirements...\n\ud83d\udc2d dump lock file: /home/tianwei/code/starwhale/example/helloworld/.starwhale/lock/requirements-sw-lock.txt\n\ud83d\udcc1 workdir: /home/tianwei/.starwhale/self/workdir/runtime/helloworld/hl/hlp6mixccpi5sdmuoxdstfn5nf5xebu2lac2gz4x\n\ud83d\udc1d dump environment info...\n\ud83e\udd6f dump dependencies info...\n\ud83c\udf08 runtime uses builtin docker image: docker-registry.starwhale.cn/star-whale/base:0.3.4  \ud83c\udf08\n\ud83e\udd8b .swrt bundle:/home/tianwei/.starwhale/self/runtime/helloworld/hl/hlp6mixccpi5sdmuoxdstfn5nf5xebu2lac2gz4x.swrt\n  10 out of 10 steps finished \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 0:00:00\n")),(0,l.kt)("p",null,"After that, you can use some runtime management commands to view version and other information:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli runtime list\nswcli runtime info helloworld\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/examples/helloworld/runtime-list.png",alt:"runtime-build"})),(0,l.kt)("p",null,"We can use the built Starwhale runtime as the execution environment to perform tasks such as model package construction, dataset construction, and model evaluation."),(0,l.kt)("h2",{id:"building-mnist-dataset"},"Building MNIST dataset"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/modules/generated/sklearn.datasets.mnist.html"},"MNIST")," dataset in the scikit-learn library is a simplified version of MNIST, containing 500 8x8 pixel images."),(0,l.kt)("p",null,"Starwhale provides a series of Python SDKs for dataset construction and loading, allowing you to build unstructured datasets with minimal code. Let's take a look at the core code for constructing the MNIST dataset. For the complete code, please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/main/example/helloworld/dataset.py"},"dataset.py"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'import io\nfrom pathlib import Path\n\nimport numpy as np\nfrom PIL import Image as PILImage\nfrom tqdm import tqdm\n\nfrom starwhale import Image, dataset, MIMEType, init_logger\n\ninit_logger(3)\n\n# download the raw data\ndata_dir = Path(__file__).parent / "data"\nurl = "https://starwhale-examples.oss-cn-beijing.aliyuncs.com/dataset/mnist/digits.csv"\ndownload(url, data_dir / fname)\n\n# build Starwhale Dataset\nwith dataset("mnist64") as ds:   # <---- define starwhale dataset object\n    with (data_dir / fname).open("r") as f:\n        data = np.loadtxt(f, delimiter=",")\n        targets = data[:, -1].astype(int, copy=False)\n        images = data[:, :-1]\n\n        for i in tqdm(range(0, min(500, len(images)))):\n            img_2d_array = (np.reshape(images[i], (8, 8)) * 255).astype(np.uint8)\n            img_bytes = io.BytesIO()\n            PILImage.fromarray(img_2d_array, "L").save(img_bytes, format="PNG")\n            ds[i] = {           # <----- append data into dataset\n                "img": Image(\n                    img_bytes.getvalue(),\n                    display_name=f"{i}",\n                    shape=(8, 8, 1),\n                    mime_type=MIMEType.PNG,\n                ),\n                "label": targets[i],\n            }\n    ds.commit()                # <---- commit dataset\n\nprint(f"{ds.uri} dataset build done")\n')),(0,l.kt)("p",null,"There are three steps to build a Starwhale Dataset:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Declare the Starwhale Dataset object: ",(0,l.kt)("inlineCode",{parentName:"li"},'with dataset("mnist64") as ds:')),(0,l.kt)("li",{parentName:"ul"},"Iterate through the raw data and add it to the Starwhale Dataset object, similar to adding elements to a dict or list: ",(0,l.kt)("inlineCode",{parentName:"li"},'ds[i]={"img": Image(), ...}')),(0,l.kt)("li",{parentName:"ul"},"Commit the changes to create a dataset version: ",(0,l.kt)("inlineCode",{parentName:"li"},"ds.commit()"))),(0,l.kt)("p",null,"After executing the dataset construction script, you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," command to view the dataset details:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli -vvv runtime activate helloworld\npython3 dataset.py\n")),(0,l.kt)("img",{src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/examples/helloworld/dataset-build.png",alt:"dataset-build"}),(0,l.kt)("p",null,"Furthermore, Starwhale Dataset supports full Python SDK operations, allowing you to experience dataset functionalities in interactive environments like Jupyter Notebook or IPython. You can refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/helloworld/dataset_sdk"},"dataset SDK example")," for more information."),(0,l.kt)("h2",{id:"model-evaluation-code"},"Model Evaluation Code"),(0,l.kt)("p",null,"Starwhale provides a series of Python SDKs for model evaluation, allowing you to implement distributed, multi-dataset model evaluation with minimal code changes. Starwhale generally recommends dividing model evaluation into two stages: ",(0,l.kt)("inlineCode",{parentName:"p"},"predict")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"evaluate"),". Each stage can specify resource usage and set task dependencies through the ",(0,l.kt)("inlineCode",{parentName:"p"},"needs")," parameter. For the complete code, please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/main/example/helloworld/evaluation.py"},"evaluation.py"),"."),(0,l.kt)("h3",{id:"predict-phase"},"predict phase"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import Image, evaluation\n\n@evaluation.predict(\n    resources={"memory": {"request": "500M", "limit": "2G"}},\n    replicas=3,\n    log_mode="plain",\n)\ndef predict_image(data):\n    img: Image = data["img"]\n    model = _load_model()\n    input_name = model.get_inputs()[0].name\n    label_name = model.get_outputs()[0].name\n    input_array = [img.to_numpy().astype(np.float32).reshape(64)]\n    pred = model.run([label_name], {input_name: input_array})[0]\n    return pred.item()\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"predict")," stage is equivalent to the ",(0,l.kt)("inlineCode",{parentName:"p"},"map")," stage in the MapReduce architecture. Each ",(0,l.kt)("inlineCode",{parentName:"p"},"predict")," task will load the model, process the input data from the dataset, and complete the inference. The returned inference results will be automatically recorded in the relevant datastore table by Starwhale and can be used in the ",(0,l.kt)("inlineCode",{parentName:"p"},"evaluate")," stage."),(0,l.kt)("h3",{id:"evaluate-phase"},"evaluate phase"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import Image, evaluation, multi_classification\n@evaluation.evaluate(\n    needs=[predict_image],\n    resources={"memory": {"request": "500M", "limit": "2G"}},\n)\n@multi_classification(\n    confusion_matrix_normalize="all",\n    show_hamming_loss=True,\n    show_cohen_kappa_score=True,\n    show_roc_auc=False,\n    all_labels=[i for i in range(0, 10)],\n)\ndef evaluate_results(predict_result_iter):\n    result, label = [], []\n    for _data in predict_result_iter:\n        label.append(_data["input"]["label"])\n        result.append(_data["output"])\n    return label, result\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"evaluate")," stage is equivalent to the ",(0,l.kt)("inlineCode",{parentName:"p"},"reduce")," stage in the MapReduce architecture, where the inference results generated in the previous ",(0,l.kt)("inlineCode",{parentName:"p"},"predict")," stage are summarized, and some model evaluation metrics are calculated. The results are then written to datastore tables for further comparison and analysis. The Helloworld example is a classic multi-classification problem, and we can directly use the ",(0,l.kt)("inlineCode",{parentName:"p"},"@starwhale.multi_classification")," decorator for metric analysis, generating metrics such as Recall, Accuracy, and Precision."),(0,l.kt)("h2",{id:"building-starwhale-model"},"Building Starwhale Model"),(0,l.kt)("p",null,"The Starwhale model building process is very simple. By calling model building through ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," or the Python SDK, related files are packaged to generate a versioned, shareable, runnable Starwhale model package."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli -vvv model build . --name helloworld -m evaluation --runtime helloworld\n")),(0,l.kt)("p",null,"The above command will perform the following operations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Package the files and subdirectories under the ",(0,l.kt)("inlineCode",{parentName:"li"},".")," directory, mainly weight files, Python code and configuration files. During packaging, files or directories to be ignored are determined according to the ",(0,l.kt)("inlineCode",{parentName:"li"},".swignore")," file."),(0,l.kt)("li",{parentName:"ul"},"The Starwhale model package automatically recognizes the ",(0,l.kt)("inlineCode",{parentName:"li"},"README.md")," file in the root directory and renders it in the Starwhale Server web interface."),(0,l.kt)("li",{parentName:"ul"},"Analyze the function definitions in the ",(0,l.kt)("inlineCode",{parentName:"li"},"evaluation")," module to generate handlers for running the Starwhale model."),(0,l.kt)("li",{parentName:"ul"},"Use the helloworld runtime to run the packaging process. Since Starwhale model building loads code files, using the Starwhale runtime is the recommended practice."),(0,l.kt)("li",{parentName:"ul"},"Automatically inject the helloworld runtime into the Starwhale model as a built-in runtime for co-distribution with the model package."),(0,l.kt)("li",{parentName:"ul"},"Generate a model package with a unique version that can be distributed across different instances.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli model build . --name helloworld -m evaluation --runtime helloworld\n\ud83e\udd89 start to run in the new process with runtime environment: local/project/self/runtime/helloworld/version/tck2tqgpddomop4byfjbwmqk6aacg4wamidtm7eu\n\ud83d\udc0c start to restore runtime: local/project/self/runtime/helloworld/version/tck2tqgpddomop4byfjbwmqk6aacg4wamidtm7eu\n\ud83e\uddee setup python(3.9) env with venv...\n\ud83d\udc4f create venv@/home/tianwei/.starwhale/self/workdir/runtime/helloworld/tc/tck2tqgpddomop4byfjbwmqk6aacg4wamidtm7eu/export/venv, python:3.9.13 (main, Oct 13 2022, 21:15:33)\n\ud83c\udf61 installing dependencies for pip_req_file:.starwhale/lock/requirements-sw-lock.txt in the venv environment\n  6 out of 6 steps finished \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 0:00:30\n\ud83d\udc13 run process in the python isolated environment(prefix: /home/tianwei/.starwhale/self/workdir/runtime/helloworld/tc/tck2tqgpddomop4byfjbwmqk6aacg4wamidtm7eu/export/venv)\n\ud83d\udea7 start to build model bundle...\n\ud83d\udc77 uri local/project/self/model/helloworld/version/somjliyhbtqhcldnvnlapwpqsrignyem6ik564vb\n\ud83d\udcc1 workdir: /home/tianwei/.starwhale/.tmp/tmpcihsv20w\n\ud83e\udd9a copy source code files: . -> /home/tianwei/.starwhale/.tmp/tmpcihsv20w/src\n\ud83d\udcc1 source code files size: 238.35KiB\n\ud83d\udcbf package runtime(local/project/self/runtime/helloworld/version/tck2tqgpddomop4byfjbwmqk6aacg4wamidtm7eu) to /home/tianwei/.starwhale/.tmp/tmpcihsv20w/src/.starwhale/runtime/packaged.swrt\n\ud83d\ude80 generate jobs yaml from modules: ('evaluation',) , package rootdir: .\n  10 out of 10 steps finished \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 0:00:00\n\ud83d\udcaf finish gen resource @ /home/tianwei/.starwhale/self/model/helloworld/so/somjliyhbtqhcldnvnlapwpqsrignyem6ik564vb.swmp\n")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/examples/helloworld/model-info.png",alt:"model-info"})),(0,l.kt)("h2",{id:"running-model-evaluation-in-starwhale-standalone"},"Running model evaluation in Starwhale Standalone"),(0,l.kt)("p",null,"We have completed the construction of the model package, runtime, and dataset above. Next, we can conduct model evaluation to test some model evaluation effects. The Starwhale Standalone instance is specially designed for development and debugging environments. Model evaluation can also be performed on a small amount of data on Standalone to verify there are no issues with the code, before running larger-scale evaluation datasets on the Starwhale Server or Starwhale Cloud instance."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli -vvv model run --uri helloworld --dataset mnist64 --runtime helloworld --dataset-head 10\n")),(0,l.kt)("p",null,"We only use the first 10 data entries in the dataset for evaluation. The command output is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli -vvv model run --uri helloworld --dataset mnist64 --runtime helloworld --dataset-head 10\n[2023-12-07 16:30:28.334074] \ud83d\udc7e verbosity: 3, log level: DEBUG\n[2023-12-07 16:30:28.346034] \ud83e\udd89 start to run in the new process with runtime environment: local/project/self/runtime/helloworld/version/tck2tqgpddomop4byfjbwmqk6aacg4wamidtm7eu\n[2023-12-07 16:30:28.346984] \ud83d\udc13 run process in the python isolated environment(prefix: /home/tianwei/.starwhale/self/workdir/runtime/helloworld/tc/tck2tqgpddomop4byfjbwmqk6aacg4wamidtm7eu/export/venv)\n[2023-12-07 16:30:28.363485] \ud83d\udd08 |DEBUG| cmd: ['bash', '-c', 'source /home/tianwei/.starwhale/self/workdir/runtime/helloworld/tc/tck2tqgpddomop4byfjbwmqk6aacg4wamidtm7eu/export/venv/bin/activate && /home/tianwei/.starwhale/self/workdir/runtime/helloworld/tc/tck2tqgpddomop4byfjbwmqk6aacg4wamidtm7eu/export/venv/bin/swcli -vvv model run --uri helloworld --dataset mnist64 --dataset-head 10']\n[2023-12-07 16:30:29.996979] \ud83d\udc7e verbosity: 3, log level: DEBUG\n[2023-12-07 16:30:30.005397] \u2708 change current dir to /home/tianwei/.starwhale/self/job/cj/cjas3yao3l5nvfw5hkkx5x7al2d6cgtsabqjirpu/snapshot\n[2023-12-07 16:30:30.005850] \u23f3 start to run model, handler:0 ...\n[2023-12-07 16:30:30.010668] \ud83c\udfe6 runnable handlers:\n[2023-12-07 16:30:30.011033]     *  [0]: evaluation:evaluate_results\n[2023-12-07 16:30:30.011466]        [1]: evaluation:predict_image\n[2023-12-07 16:30:30.012296] \ud83d\udca1 |INFO| start to execute step: Step: handler-evaluation:.predict_image\n[2023-12-07 16:30:30.014036] \ud83d\udca1 |INFO| start to execute task: context(step:evaluation:predict_image, index:0/1) step(Step: handler-evaluation:.predict_image, {'name': 'evaluation:predict_image', 'show_name': 'predict', 'module_name': 'evaluation', 'cls_name': '', 'func_name': 'predict_image', 'resources': [RuntimeResource(type='memory', request=500000000.0, limit=2000000000.0)], 'task_num': 1, 'needs': [], 'extra_args': [], 'extra_kwargs': {'dataset_uris': None, 'ignore_error': False, 'predict_auto_log': True, 'predict_batch_size': 1, 'predict_log_dataset_features': None, 'predict_log_mode': 'plain'}, 'expose': 0, 'virtual': None, 'require_dataset': True})\n[2023-12-07 16:30:30.036313] \ud83d\udca1 |INFO| start to run _starwhale_internal_run_predict function@evaluation:predict_image-0 ...\n[2023-12-07 16:30:30.216042] \ud83d\udca1 |INFO| thread-140277817129088 handle scan-range: (0, 50)\n[2023-12-07 16:30:30.237276] \ud83d\udd08 |DEBUG| new store backendObjectStore backend:StorageBackend for local_fs created for key: local.\n[2023-12-07 16:30:30.254205] \ud83d\udca1 |INFO| thread-140277817129088 handle scan-range: (50, 100)\n[2023-12-07 16:30:30.297356] \ud83d\udd08 |DEBUG|  use 0.058s, session-id:cjas3yao3l5nvfw5hkkx5x7al2d6cgtsabqjirpu @evaluation:predict_image-0\n[2023-12-07 16:30:30.301059] \ud83d\udca1 |INFO| thread-140277817129088 handle scan-range: (100, 150)\n[2023-12-07 16:30:30.301784] \ud83d\udd08 |DEBUG|  use 0.004s, session-id:cjas3yao3l5nvfw5hkkx5x7al2d6cgtsabqjirpu @evaluation:predict_image-0\n[2023-12-07 16:30:30.304711] \ud83d\udd08 |DEBUG|  use 0.002s, session-id:cjas3yao3l5nvfw5hkkx5x7al2d6cgtsabqjirpu @evaluation:predict_image-0\n[2023-12-07 16:30:30.307783] \ud83d\udd08 |DEBUG|  use 0.002s, session-id:cjas3yao3l5nvfw5hkkx5x7al2d6cgtsabqjirpu @evaluation:predict_image-0\n[2023-12-07 16:30:30.311066] \ud83d\udd08 |DEBUG|  use 0.003s, session-id:cjas3yao3l5nvfw5hkkx5x7al2d6cgtsabqjirpu @evaluation:predict_image-0\n[2023-12-07 16:30:30.314291] \ud83d\udd08 |DEBUG|  use 0.002s, session-id:cjas3yao3l5nvfw5hkkx5x7al2d6cgtsabqjirpu @evaluation:predict_image-0\n[2023-12-07 16:30:30.318806] \ud83d\udd08 |DEBUG|  use 0.004s, session-id:cjas3yao3l5nvfw5hkkx5x7al2d6cgtsabqjirpu @evaluation:predict_image-0\n[2023-12-07 16:30:30.323726] \ud83d\udd08 |DEBUG|  use 0.004s, session-id:cjas3yao3l5nvfw5hkkx5x7al2d6cgtsabqjirpu @evaluation:predict_image-0\n[2023-12-07 16:30:30.357769] \ud83d\udd08 |DEBUG|  use 0.033s, session-id:cjas3yao3l5nvfw5hkkx5x7al2d6cgtsabqjirpu @evaluation:predict_image-0\n[2023-12-07 16:30:30.361139] \ud83d\udd08 |DEBUG|  use 0.003s, session-id:cjas3yao3l5nvfw5hkkx5x7al2d6cgtsabqjirpu @evaluation:predict_image-0\n[2023-12-07 16:30:30.463597] \ud83d\udca1 |INFO| evaluation:predict_image-0 received 10 data items for dataset ('mnist64',)\n[2023-12-07 16:30:30.464840] \ud83d\udd08 |DEBUG| execute evaluation:predict_image-0 exit func...\n[2023-12-07 16:30:30.465232] \ud83d\udca1 |INFO| finish step:evaluation:predict_image, index:0/1, status:success, error:None\n[2023-12-07 16:30:30.465829] \ud83d\udca1 |INFO| finish to execute step[1]:Step: handler-evaluation:.predict_image\n[2023-12-07 16:30:30.466943] \ud83d\udca1 |INFO| start to execute step: Step: handler-evaluation:.evaluate_results\n[2023-12-07 16:30:30.467755] \ud83d\udca1 |INFO| start to execute task: context(step:evaluation:evaluate_results, index:0/1) step(Step: handler-evaluation:.evaluate_results, {'name': 'evaluation:evaluate_results', 'show_name': 'evaluate', 'module_name': 'evaluation', 'cls_name': '', 'func_name': 'evaluate_results', 'resources': [RuntimeResource(type='memory', request=500000000.0, limit=2000000000.0)], 'task_num': 1, 'needs': ['evaluation:predict_image'], 'extra_args': [], 'extra_kwargs': {'predict_auto_log': True}, 'expose': 0, 'virtual': None, 'require_dataset': False})\n[2023-12-07 16:30:30.472041] \ud83d\udca1 |INFO| start to run _starwhale_internal_run_evaluate function@evaluation:evaluate_results-0 ...\n[2023-12-07 16:30:30.485783] \ud83d\udd08 |DEBUG| execute evaluation:evaluate_results-0 exit func...\n[2023-12-07 16:30:30.486566] \ud83d\udca1 |INFO| finish step:evaluation:evaluate_results, index:0/1, status:success, error:None\n[2023-12-07 16:30:30.487301] \ud83d\udca1 |INFO| finish to execute step[1]:Step: handler-evaluation:.evaluate_results\n[2023-12-07 16:30:30.489883] \ud83d\udcaf finish run, success!\n")),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli job info")," command to view metrics related to the model evaluation:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/examples/helloworld/job-info.png",alt:"job-info"})),(0,l.kt)("h2",{id:"starting-starwhale-server"},"Starting Starwhale Server"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli server start\n")),(0,l.kt)("p",null,"This command can start a fully functional Starwhale Server locally. The machine needs to have Docker and Docker-Compose installed in advance."),(0,l.kt)("p",null,"The command output is as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli server start\n\ud83d\udef8 render compose yaml file: /home/tianwei/.starwhale/.server/docker-compose.yaml\n\ud83c\udfd3 start Starwhale Server by docker compose\n Container starwhale_local-db-1  Running\n Container starwhale_local-server-1  Running\n Container starwhale_local-db-1  Waiting\n Container starwhale_local-db-1  Healthy\nStarwhale Server is running in the background.\n         \ud83c\udf4e stop: swcli server stop\n         \ud83c\udf4c check status: swcli server status\n         \ud83c\udf49 more compose command: docker compose -f /home/tianwei/.starwhale/.server/docker-compose.yaml sub-command\n         \ud83e\udd55 visit web: http://127.0.0.1:8082\n")),(0,l.kt)("h2",{id:"copy-runtime-model-and-dataset-to-starwhale-server"},"Copy runtime, model and dataset to Starwhale Server"),(0,l.kt)("h3",{id:"login-starwhale-server"},"Login Starwhale Server"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli instance login --username starwhale --alias local-server --password abcd1234 http://127.0.0.1:8082\n")),(0,l.kt)("p",null,"The username for the locally launched Starwhale Server service is ",(0,l.kt)("inlineCode",{parentName:"p"},"starwhale")," and the password is ",(0,l.kt)("inlineCode",{parentName:"p"},"abcd1234"),"."),(0,l.kt)("h3",{id:"copying"},"Copying"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model cp helloworld cloud://local-server/project/1\nswcli runtime cp helloworld cloud://local-server/project/1\nswcli dataset cp mnist64 cloud://local-server/project/1\n")),(0,l.kt)("p",null,"The output of the commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli model cp helloworld cloud://local-server/project/1\n\ud83d\udea7 start to copy local/project/self/model/helloworld/version/somjliyhbtqhcldnvnlapwpqsrignyem6ik564vb -> http://127.0.0.1:8082/project/1/model/helloworld/version/somjliyhbtqhcldnvnlapwpqsrignyem6ik564vb\nscanning somjliyhbtqhcldnvnlapwpqsrignyem6ik564vb.swmp...\nscan done\nuploading metadata...\nmetadata uploaded\n  \u2b06 uploading somjliyhbtqhcldnvnlapwpqsrignyem6ik564vb.swmp... \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 273.8 kB 775.2 kB/s\n  \u2b06 uploading the built-in runtime packaged.swrt               \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 20.5 kB  5.5 MB/s\n\ud83c\udf75 console url of the remote bundle: http://127.0.0.1:8082/projects/1/models/helloworld/versions/somjliyhbtqhcldnvnlapwpqsrignyem6ik564vb/overview\n\ud83c\udf75 no tags to copy\n\ud83d\udc4f copy done.\n\u276f swcli runtime cp helloworld cloud://local-server/project/1\n\ud83d\udea7 start to copy local/project/self/runtime/helloworld/version/tck2tqgpddomop4byfjbwmqk6aacg4wamidtm7eu -> http://127.0.0.1:8082/project/1/runtime/helloworld/version/tck2tqgpddomop4byfjbwmqk6aacg4wamidtm7eu\n  \ud83c\udfb3 upload tck2tqgpddomop4byfjbwmqk6aacg4wamidtm7eu.swrt \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00 20.5 kB 16.6 MB/s\n\ud83c\udf75 console url of the remote bundle: http://127.0.0.1:8082/projects/1/runtimes/helloworld/versions/tck2tqgpddomop4byfjbwmqk6aacg4wamidtm7eu/overview\n\ud83c\udf75 no tags to copy\n\ud83d\udc4f copy done.\n\u276f swcli dataset cp mnist64 cloud://local-server/project/1\n\ud83d\udea7 start to copy local/project/self/dataset/mnist64/version/rtxx5mdwlzqmomuoe235fx4vokkempa332ivmzcr -> http://127.0.0.1:8082/project/1/dataset/mnist64/version/rtxx5mdwlzqmomuoe235fx4vokkempa332ivmzcr\n\ud83d\udc26 copy dataset rows\n\u2839 \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 500 0:00:01\n\ud83e\udd98 update dataset info\n\ud83d\udc2f make version for dest instance\n\ud83c\udf75 console url of the remote bundle: http://127.0.0.1:8082/projects/1/datasets/mnist64/versions/rtxx5mdwlzqmomuoe235fx4vokkempa332ivmzcr/overview\n\ud83c\udf75 no tags to copy\n\ud83d\udc4f copy done\n")),(0,l.kt)("p",null,"Then you can access ",(0,l.kt)("a",{parentName:"p",href:"http://127.0.0.1:8082"},"http://127.0.0.1:8082")," through a browser to view the uploaded models, datasets, and runtimes."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/examples/helloworld/server-show.gif",alt:"server-show"})),(0,l.kt)("h2",{id:"running-model-evaluation-in-starwhale-server"},"Running model evaluation in Starwhale Server"),(0,l.kt)("p",null,"On the evaluation page, you can select the model, runtime, and dataset to perform the evaluation."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/examples/helloworld/server-submit.gif",alt:"server-submit"})),(0,l.kt)("h2",{id:"comparing-evaluation-results"},"Comparing evaluation results"),(0,l.kt)("p",null,"Starwhale provides rich features for comparing and visualizing evaluation results. You can select relevant evaluation results on the evaluation page for comparative analysis."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/examples/helloworld/server-summary.gif",alt:"server-summary"})),(0,l.kt)("p",null,"Congratulations on completing the Starwhale Helloworld example!"))}u.isMDXComponent=!0}}]);