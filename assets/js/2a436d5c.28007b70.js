"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[71955],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return t?a.createElement(h,o(o({ref:n},m),{},{components:t})):a.createElement(h,o({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},52209:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(83117),r=(t(67294),t(3905));const i={title:"The runtime.yaml Specification"},o=void 0,l={unversionedId:"runtime/yaml",id:"version-0.5.10/runtime/yaml",title:"The runtime.yaml Specification",description:"runtime.yaml is the configuration file that defines the properties of the Starwhale Runtime. runtime.yaml is required for the yaml mode of the swcli runtime build command.",source:"@site/versioned_docs/version-0.5.10/runtime/yaml.md",sourceDirName:"runtime",slug:"/runtime/yaml",permalink:"/0.5.10/runtime/yaml",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.10/runtime/yaml.md",tags:[],version:"0.5.10",frontMatter:{title:"The runtime.yaml Specification"},sidebar:"mainSidebar",previous:{title:"Starwhale Runtime",permalink:"/0.5.10/runtime/"},next:{title:"Starwhale Dataset User Guide",permalink:"/0.5.10/dataset/"}},s={},c=[{value:"Examples",id:"examples",level:2},{value:"The simplest example",id:"the-simplest-example",level:3},{value:"The llama2 example",id:"the-llama2-example",level:3},{value:"The full definition example",id:"the-full-definition-example",level:3}],m={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runtime.yaml")," is the configuration file that defines the properties of the Starwhale Runtime. ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime.yaml")," is required for the ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," mode of the ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli runtime build")," command."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"the-simplest-example"},"The simplest example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"dependencies:\n  - pip:\n      - numpy\nname: simple-test\n")),(0,r.kt)("p",null,"Define a Starwhale Runtime that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"venv")," as the Python virtual environment for package isolation, and installs the numpy dependency."),(0,r.kt)("h3",{id:"the-llama2-example"},"The llama2 example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: llama2\nmode: venv\nenvironment:\n  arch: noarch\n  os: ubuntu:20.04\n  cuda: 11.7\n  python: "3.10"\ndependencies:\n  - pip:\n      - torch\n      - fairscale\n      - fire\n      - sentencepiece\n      - gradio >= 3.37.0\n      # external starwhale dependencies\n      - starwhale[serve] >= 0.5.5\n')),(0,r.kt)("h3",{id:"the-full-definition-example"},"The full definition example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# [required]The name of Starwhale Runtime\nname: demo\n# [optional]The mode of Starwhale Runtime: venv or conda. Default is venv.\nmode: venv\n# [optional]The configurations of pip and conda.\nconfigs:\n  # If you do not use conda, ignore this field.\n  conda:\n    condarc: # custom condarc config file\n      channels:\n        - defaults\n      show_channel_urls: true\n      default_channels:\n        - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main\n        - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r\n        - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2\n      custom_channels:\n        conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n        pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n        pytorch-lts: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud\n        nvidia: https://mirrors.aliyun.com/anaconda/cloud\n      ssl_verify: false\n      default_threads: 10\n  pip:\n    # pip config set global.index-url\n    index_url: https://example.org/\n    # pip config set global.extra-index-url\n    extra_index_url: https://another.net/\n    # pip config set install.trusted-host\n    trusted_host:\n      - example.org\n      - another.net\n# [optional] The definition of the environment.\nenvironment:\n  # Now it must be ubuntu:20.04\n  os: ubuntu:20.04\n  # CUDA version. possible values: 11.3, 11.4, 11.5, 11.6, 11.7\n  cuda: 11.4\n  # Python version. possible values: 3.7, 3.8, 3.9, 3.10, 3.11\n  python: 3.8\n  # Define your custom base image\n  docker:\n    image: mycustom.com/docker/image:tag\n# [required] The dependencies of the Starwhale Runtime.\ndependencies:\n  # If this item is present, conda env create -f conda.yml will be executed\n  - conda.yaml\n  # If this item is present, pip install -r requirements.txt will be executed before installing other pip packages\n  - requirements.txt\n  # Packages to be install with conda. venv mode will ignore the conda field.\n  - conda:\n    - numpy\n    - requests\n  # Packages to be installed with pip. The format is the same as requirements.txt\n  - pip:\n    - pillow\n    - numpy\n    - deepspeed==0.9.0\n    - safetensors==0.3.0\n    - transformers @ git+https://github.com/huggingface/transformers.git@3c3108972af74246bc3a0ecf3259fd2eafbacdef\n    - peft @ git+https://github.com/huggingface/peft.git@fcff23f005fc7bfb816ad1f55360442c170cd5f5\n    - accelerate @ git+https://github.com/huggingface/accelerate.git@eba6eb79dc2ab652cd8b44b37165a4852768a8ac\n  # Additional wheels packages to be installed when restoring the runtime\n  - wheels:\n      - dummy-0.0.0-py3-none-any.whl\n  # Additional files to be included in the runtime\n  - files:\n      - dest: bin/prepare.sh\n        name: prepare\n        src: scripts/prepare.sh\n  # Run some custom commands\n  - commands:\n      - apt-get install -y libgl1\n      - touch /tmp/runtime-command-run.flag\n")))}p.isMDXComponent=!0}}]);