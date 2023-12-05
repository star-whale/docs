"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9706],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),d=a,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return t?r.createElement(h,o(o({ref:n},c),{},{components:t})):r.createElement(h,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},20177:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(83117),a=(t(67294),t(3905));const i={title:"Starwhale Runtime"},o=void 0,l={unversionedId:"runtime/index",id:"version-0.5.12/runtime/index",title:"Starwhale Runtime",description:"Overview",source:"@site/versioned_docs/version-0.5.12/runtime/index.md",sourceDirName:"runtime",slug:"/runtime/",permalink:"/0.5.12/runtime/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.12/runtime/index.md",tags:[],version:"0.5.12",frontMatter:{title:"Starwhale Runtime"},sidebar:"mainSidebar",previous:{title:"The model.yaml Specification",permalink:"/0.5.12/model/yaml"},next:{title:"The runtime.yaml Specification",permalink:"/0.5.12/runtime/yaml"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"The base image",id:"the-base-image",level:2},{value:"runtime.yaml",id:"yaml",level:2}],c={toc:u};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Starwhale Runtime aims to provide a reproducible and sharable running environment for python programs. You can easily share your working environment with your teammates or outsiders, and vice versa. Furthermore, you can run your programs on Starwhale Server or Starwhale Cloud without bothering with the dependencies."),(0,a.kt)("p",null,"Starwhale works well with virtualenv, conda, and docker. If you are using one of them, it is straightforward to create a Starwhale Runtime based on your current environment."),(0,a.kt)("p",null,"Multiple Starwhale Runtimes on your local machine can be switched freely by one command. You can work on different projects without messing up the environment.Starwhale Runtime consists of two parts: the base image and the dependencies."),(0,a.kt)("h2",{id:"the-base-image"},"The base image"),(0,a.kt)("p",null,"The base is a docker image with Python, CUDA, and cuDNN installed. Starwhale provides various base images for you to choose from; see the following list:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Computer system architecture:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"X86 (amd64)"),(0,a.kt)("li",{parentName:"ul"},"Arm (aarch64)"))),(0,a.kt)("li",{parentName:"ul"},"Operating system:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ubuntu 20.04 LTS (ubuntu:20.04)"))),(0,a.kt)("li",{parentName:"ul"},"Python:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"3.7"),(0,a.kt)("li",{parentName:"ul"},"3.8"),(0,a.kt)("li",{parentName:"ul"},"3.9"),(0,a.kt)("li",{parentName:"ul"},"3.10"),(0,a.kt)("li",{parentName:"ul"},"3.11"))),(0,a.kt)("li",{parentName:"ul"},"CUDA:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CUDA 11.3 + cuDNN 8.4"),(0,a.kt)("li",{parentName:"ul"},"CUDA 11.4 + cuDNN 8.4"),(0,a.kt)("li",{parentName:"ul"},"CUDA 11.5 + cuDNN 8.4"),(0,a.kt)("li",{parentName:"ul"},"CUDA 11.6 + cuDNN 8.4"),(0,a.kt)("li",{parentName:"ul"},"CUDA 11.7")))),(0,a.kt)("h2",{id:"yaml"},"runtime.yaml"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"runtime.yaml")," is the core configuration file of Starwhale Runtime."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# The name of Starwhale Runtime\nname: demo\n# The mode of Starwhale Runtime: venv or conda. Default is venv.\nmode: venv\nconfigs:\n  # If you do not use conda, ignore this field.\n  conda:\n    condarc: # custom condarc config file\n      channels:\n        - defaults\n      show_channel_urls: true\n      default_channels:\n        - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main\n        - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r\n        - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2\n      custom_channels:\n        conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n        pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n        pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n        nvidia: https://mirrors.aliyun.com/anaconda/cloud\n      ssl_verify: false\n      default_threads: 10\n  pip:\n    # pip config set global.index-url\n    index_url: https://example.org/\n    # pip config set global.extra-index-url\n    extra_index_url: https://another.net/\n    # pip config set install.trusted-host\n    trusted_host:\n      - example.org\n      - another.net\nenvironment:\n  # Now it must be ubuntu:20.04\n  os: ubuntu:20.04\n  # CUDA version. possible values: 11.3, 11.4, 11.5, 11.6, 11.7\n  cuda: 11.4\n  # Python version. possible values: 3.7, 3.8, 3.9, 3.10, 3.11\n  python: 3.8\n  # Define your base image\n  docker:\n    image: mycustom.com/docker/image:tag\ndependencies:\n  # If this item is present, conda env create -f conda.yml will be executed\n  - conda.yaml\n  # If this item is present, pip install -r requirements.txt will be executed before installing other pip packages\n  - requirements.txt\n  # Packages to be install with conda. venv mode will ignore the conda field.\n  - conda:\n    - numpy\n    - requests \n  # Packages to be installed with pip. The format is the same as requirements.txt  \n  - pip:\n    - pillow\n    - numpy\n    - deepspeed==0.9.0\n    - safetensors==0.3.0\n    - transformers @ git+https://github.com/huggingface/transformers.git@3c3108972af74246bc3a0ecf3259fd2eafbacdef\n    - peft @ git+https://github.com/huggingface/peft.git@fcff23f005fc7bfb816ad1f55360442c170cd5f5\n    - accelerate @ git+https://github.com/huggingface/accelerate.git@eba6eb79dc2ab652cd8b44b37165a4852768a8ac\n  # Additional wheels packages to be installed when restoring the runtime\n  - wheels:\n      - dummy-0.0.0-py3-none-any.whl\n  # Additional files to be included in the runtime\n  - files:\n      - dest: bin/prepare.sh\n        name: prepare\n        src: scripts/prepare.sh\n  # Run some custom commands\n  - commands:\n      - apt-get install -y libgl1\n      - touch /tmp/runtime-command-run.flag\n")))}m.isMDXComponent=!0}}]);