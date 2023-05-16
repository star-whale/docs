"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,h=p["".concat(u,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},62781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(83117),a=(n(67294),n(3905));const i={title:"Starwhale Runtime User Guide"},o=void 0,l={unversionedId:"userguide/runtime",id:"version-0.4.4/userguide/runtime",title:"Starwhale Runtime User Guide",description:"Overview",source:"@site/versioned_docs/version-0.4.4/userguide/runtime.md",sourceDirName:"userguide",slug:"/userguide/runtime",permalink:"/zh/docs/0.4.4/userguide/runtime",draft:!1,editUrl:"https://github.com/star-whale/starwhale/tree/main/docs/versioned_docs/version-0.4.4/userguide/runtime.md",tags:[],version:"0.4.4",frontMatter:{title:"Starwhale Runtime User Guide"},sidebar:"mainSidebar",previous:{title:"Starwhale\u6a21\u578b\u7528\u6237\u6307\u5357",permalink:"/zh/docs/0.4.4/userguide/model"},next:{title:"\u6982\u8ff0",permalink:"/zh/docs/0.4.4/reference/swcli/"}},u={},s=[{value:"Overview",id:"overview",level:2},{value:"The base image",id:"the-base-image",level:3},{value:"Create a Starwhale Runtime",id:"create-a-starwhale-runtime",level:2},{value:"Create from your current environment",id:"create-from-your-current-environment",level:3},{value:"Create from runtime.yaml",id:"create-from-runtimeyaml",level:3},{value:"runtime.yaml",id:"yaml",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Starwhale Runtime aims to provide a reproducible and sharable running environment for python programs. You can easily share your working environment with your teammates or outsiders, and vice versa. Furthermore, you can run your programs on Starwhale Server or Starwhale Cloud without bothering with the dependencies."),(0,a.kt)("p",null,"Starwhale works well with virtualenv, conda, and docker. If you are using one of them, it is straightforward to create a Starwhale Runtime based on your current environment."),(0,a.kt)("p",null,"Multiple Starwhale Runtimes on your local machine can be switched freely by one command. You can work on different projects without messing up the environment."),(0,a.kt)("p",null,"Starwhale Runtime consists of two parts: the base image and the dependencies."),(0,a.kt)("h3",{id:"the-base-image"},"The base image"),(0,a.kt)("p",null,"The base is a docker image with Python, CUDA, and cuDNN installed. Starwhale provides various base images for you to choose from; see the following list:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Computer system architecture:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"X86 (amd64)"),(0,a.kt)("li",{parentName:"ul"},"Arm (aarch64)"))),(0,a.kt)("li",{parentName:"ul"},"Operating system:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ubuntu 20.04 LTS (ubuntu:20.04)"))),(0,a.kt)("li",{parentName:"ul"},"Python:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"3.7"),(0,a.kt)("li",{parentName:"ul"},"3.8"),(0,a.kt)("li",{parentName:"ul"},"3.9"),(0,a.kt)("li",{parentName:"ul"},"3.10"),(0,a.kt)("li",{parentName:"ul"},"3.11"))),(0,a.kt)("li",{parentName:"ul"},"CUDA",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"CUDA 11.3 + cuDNN 8.4"),(0,a.kt)("li",{parentName:"ul"},"CUDA 11.4 + cuDNN 8.4"),(0,a.kt)("li",{parentName:"ul"},"CUDA 11.5 + cuDNN 8.4"),(0,a.kt)("li",{parentName:"ul"},"CUDA 11.6 + cuDNN 8.4")))),(0,a.kt)("p",null,"To choose the base image, see the ",(0,a.kt)("a",{parentName:"p",href:"#yaml"},"environment section of runtime.yaml"),"."),(0,a.kt)("h2",{id:"create-a-starwhale-runtime"},"Create a Starwhale Runtime"),(0,a.kt)("h3",{id:"create-from-your-current-environment"},"Create from your current environment"),(0,a.kt)("h3",{id:"create-from-runtimeyaml"},"Create from runtime.yaml"),(0,a.kt)("h2",{id:"yaml"},"runtime.yaml"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"runtime.yaml")," is the core configuration file of Starwhale Runtime."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# The name of Starwhale Runtime\nname: demo\nconfigs:\n  # If you do not use conda, ignore this field.\n  conda:\n    # Conda channels to use when restoring the runtime\n    channels:\n      - conda-forge\n  docker:\n    # Use this field if you want to use your own customized runtime docker image.\n    # All other fields in runtime.yaml are ignored when this field is set.\n    image: ghcr.io/star-whale/runtime/pytorch\n  pip:\n    # pip config set global.index-url\n    index_url: https://example.org/\n    # pip config set global.extra-index-url\n    extra_index_url: https://another.net/\n    # pip config set install.trusted-host\n    trusted_host:\n      - example.org\n      - another.net\nenvironment:\n  # Now it must be ubuntu:20.04\n  os: ubuntu:20.04\n  # CUDA version. possible values: 11.3, 11.4, 11.5, 11.6\n  cuda: 11.4\n  # Python version. possible values: 3.7, 3.8, 3.9, 3.10, 3.11\n  python: 3.8\n  # Use this field if you want to use your own customized base docker image\n  docker:\n    image: my.com/self/custom\ndependencies:\n  # If this item is present, conda env create -f conda.yml will be executed\n  - conda.yaml\n  # If this item is present, pip install -r requirements.txt will be executed before installing other pip packages\n  - requirements.txt\n  # Packages to be installed with pip. The format is the same as requirements.txt\n  - pip:\n      - pillow\n      - numpy\n      - scikit-learn\n      - torchvision\n      - torch\n      - torchdata\n      - torchtext\n      - torchaudio\n      - pycocotools\n  # Additional wheels packages to be installed when restoring the runtime\n  - wheels:\n      - dummy-0.0.0-py3-none-any.whl\n  # Additional files to be included in the runtime\n  - files:\n      - dest: bin/prepare.sh\n        name: prepare\n        src: scripts/prepare.sh\n")))}c.isMDXComponent=!0}}]);