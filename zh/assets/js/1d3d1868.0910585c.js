"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[7955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const o={title:"\u53ef\u4ee5\u4f5c\u4e3aK8s\u8282\u70b9\u7684\u8bbe\u5907"},i=void 0,s={unversionedId:"evaluation/heterogeneous/node-able",id:"evaluation/heterogeneous/node-able",title:"\u53ef\u4ee5\u4f5c\u4e3aK8s\u8282\u70b9\u7684\u8bbe\u5907",description:"\u7279\u5f81",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/evaluation/heterogeneous/node-able.md",sourceDirName:"evaluation/heterogeneous",slug:"/evaluation/heterogeneous/node-able",permalink:"/zh/docs/next/evaluation/heterogeneous/node-able",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/evaluation/heterogeneous/node-able.md",tags:[],version:"current",frontMatter:{title:"\u53ef\u4ee5\u4f5c\u4e3aK8s\u8282\u70b9\u7684\u8bbe\u5907"}},l={},p=[{value:"\u7279\u5f81",id:"\u7279\u5f81",level:2},{value:"\u5178\u578b\u8bbe\u5907",id:"\u5178\u578b\u8bbe\u5907",level:2},{value:"\u6811\u8393\u6d3e",id:"\u6811\u8393\u6d3e",level:3},{value:"Jetson",id:"jetson",level:3},{value:"\u8282\u70b9\u73af\u5883\u521d\u59cb\u5316",id:"\u8282\u70b9\u73af\u5883\u521d\u59cb\u5316",level:4},{value:"\u914d\u7f6e GPU",id:"\u914d\u7f6e-gpu",level:4},{value:"\u5236\u4f5c\u548c\u4f7f\u7528\u81ea\u5b9a\u4e49\u955c\u50cf",id:"\u5236\u4f5c\u548c\u4f7f\u7528\u81ea\u5b9a\u4e49\u955c\u50cf",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7279\u5f81"},"\u7279\u5f81"),(0,a.kt)("p",null,"\u6b64\u7c7b\u8bbe\u5907\u53ef\u4ee5\u4f5c\u4e3a\u4e00\u4e2a\u72ec\u7acb\u7684 K8s \u8282\u70b9\u8fd0\u884c\uff0c\u8282\u70b9\u7684\u6982\u5ff5\u53ef\u4ee5\u53c2\u8003 K8s ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/"},"\u5b98\u65b9\u6587\u6863"),"\n\u7b80\u5355\u6765\u8bb2\uff0c\u8bbe\u5907\u81f3\u5c11\u652f\u6301\u5b89\u88c5\u548c\u8fd0\u884c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/generated/kubelet"},"kubelet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/"},"kube-proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes"},"container runtime"))),(0,a.kt)("p",null,"\u8fd9\u7c7b\u8bbe\u5907\u63a5\u5165\u4e4b\u540e\uff0c\u901a\u5e38\u9700\u8981\u5b9a\u5236 runtime \u955c\u50cf\u6765\u8fd0\u884c Starwhale \u7684 ","[Job]","(/zh/docs/overview/concepts# -job-step-and-task)"),(0,a.kt)("h2",{id:"\u5178\u578b\u8bbe\u5907"},"\u5178\u578b\u8bbe\u5907"),(0,a.kt)("h3",{id:"\u6811\u8393\u6d3e"},"\u6811\u8393\u6d3e"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/"},"\u6811\u8393\u6d3e")," \u662f\u6211\u4eec\u719f\u77e5\u7684\u5fae\u578b\u7535\u8111, \u9664\u4e86\u662f ARM \u67b6\u6784\u5916, \u4f7f\u7528\u8d77\u6765\u548c\u5e38\u89c4\u7684\u670d\u52a1\u5668\u533a\u522b\u4e0d\u5927, \u4e0b\u9762\u7b80\u5355\u4ecb\u7ecd\u6811\u8393\u6d3e\u52a0\u5165 K8s \u96c6\u7fa4\u7684\u6b65\u9aa4."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u64cd\u4f5c\u7cfb\u7edf, \u5efa\u8bae\u4f7f\u7528\u57fa\u4e8e Ubuntu \u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://www.raspberrypi.com/software/"},"Raspberry Pi OS")),(0,a.kt)("li",{parentName:"ol"},"\u5b89\u88c5 Docker \u73af\u5883, \u6309\u7167 Docker ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/debian/"},"\u5b98\u65b9\u6587\u6863")," \u7684\u8bf4\u660e\u64cd\u4f5c\u5373\u53ef\u5b8c\u6210\u5b89\u88c5"),(0,a.kt)("li",{parentName:"ol"},"\u52a0\u5165\u5df2\u6709\u7684 K8s \u96c6\u7fa4, \u8fc7\u7a0b\u4e2d\u5982\u679c\u9047\u5230\u95ee\u9898, \u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kelseyhightower/kubernetes-the-hard-way"},"Kubernetes The Hard Way"))),(0,a.kt)("p",null,"\u6210\u529f\u52a0\u5165\u96c6\u7fa4\u4e4b\u540e, \u5c31\u53ef\u4ee5\u53c2\u8003\u540e\u7eed\u7684\u6587\u6863\u5c06\u4efb\u52a1\u8c03\u5ea6\u5230\u6811\u8393\u6d3e\u4e0a\u8fdb\u884c\u5b9e\u9a8c\u4e86."),(0,a.kt)("h3",{id:"jetson"},"Jetson"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/"},"Jetson")," \u662f Intel \u516c\u53f8\u51fa\u54c1\u7684\u4e00\u7c7b\u9ad8\u6027\u80fd\u5d4c\u5165\u5f0f\u8bbe\u5907\uff0c\u5185\u7f6e GPU\n\u6211\u4eec\u4f7f\u7528\u5b83\u901a\u5e38\u662f\u8981\u5145\u5206\u5229\u7528\u5b83\u7684GPU\u8ba1\u7b97\u8d44\u6e90"),(0,a.kt)("p",null,"\u540e\u9762\u6211\u4eec\u4ee5 orin \u4e3a\u4f8b\u8fdb\u884c\u73af\u5883\u914d\u7f6e\u7684\u8bf4\u660e"),(0,a.kt)("h4",{id:"\u8282\u70b9\u73af\u5883\u521d\u59cb\u5316"},"\u8282\u70b9\u73af\u5883\u521d\u59cb\u5316"),(0,a.kt)("p",null,"\u6309\u7167\u5b98\u65b9\u7684\u6587\u6863\u521d\u59cb\u5316\u597d\u5b9a\u5236\u7684 Ubuntu \u7cfb\u7edf\u4ee5\u53ca JetPack \u5957\u4ef6, \u4fdd\u8bc1\u80fd\u591f\u6210\u529f\u8fd0\u884c\u5b98\u65b9\u63d0\u4f9b\u7684demo, \u62e5\u6709 docker \u73af\u5883. ",(0,a.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-agx-orin-devkit"},"orin \u7684\u521d\u59cb\u5316\u6587\u6863")),(0,a.kt)("h4",{id:"\u914d\u7f6e-gpu"},"\u914d\u7f6e GPU"),(0,a.kt)("p",null,"K8s \u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/device-plugins/"},"device plugin")," \u673a\u5236\u652f\u6301\u5c06\u786c\u4ef6\u8d44\u6e90\u53d1\u5e03\u5230\u96c6\u7fa4.\nNVIDIA \u4e3a\u5b83\u7684 GPU \u63d0\u4f9b\u4e86\u81ea\u5df1\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA/k8s-device-plugin"},"k8s device plugin"),", \u5e76\u4e14\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA/k8s-device-plugin/releases/tag/v0.13.0-rc.1"},"v0.13.0-rc.1")," \u5f00\u59cb\u652f\u6301\u4e86 Jetson \u7cfb\u5217\u8bbe\u5907"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e nvidia-container-runtime \u4f5c\u4e3a\u9ed8\u8ba4\u7684 runtime, \u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA/k8s-device-plugin#preparing-your-gpu-nodes"},"\u94fe\u63a5"),"\n\u6bd4\u5982\u5982\u679c\u4f7f\u7528\u7684\u662fdocker, \u5219\u9700\u8981\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")," \u5305\u542b\u4e0b\u9762\u5185\u5bb9"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "runtimes": {\n        "nvidia": {\n            "path": "nvidia-container-runtime",\n            "runtimeArgs": []\n        }\n    },\n\n    "default-runtime": "nvidia"\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528 Jetson \u5b98\u65b9\u6559\u7a0b\u4e2d\u63d0\u5230\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"deviceQuery")," \u6d4b\u8bd5\u5728 docker \u4e2d\u4f7f\u7528 GPU"),(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u6709\u7c7b\u4f3c\u4e0b\u9762\u7684\u8f93\u51fa, \u5219\u6211\u4eec\u7684 docker \u73af\u5883\u5df2\u7ecf\u914d\u7f6e\u597d"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# docker run --rm -v `/path/to/deviceQuery`:/root/deviceQuery nvcr.io/nvidia/l4t-jetpack:r35.1.0 /root/deivceQuery\n\n/root/deviceQuery Starting...\n\nCUDA Device Query (Runtime API) version (CUDART static linking)\n\nDetected 1 CUDA Capable device(s)\n\nDevice 0: "Orin"\nCUDA Driver Version / Runtime Version          11.4 / 11.4\nCUDA Capability Major/Minor version number:    8.7\nTotal amount of global memory:                 30623 MBytes (32110190592 bytes)\n(016) Multiprocessors, (128) CUDA Cores/MP:    2048 CUDA Cores\nGPU Max Clock rate:                            1300 MHz (1.30 GHz)\nMemory Clock rate:                             1300 Mhz\nMemory Bus Width:                              128-bit\nL2 Cache Size:                                 4194304 bytes\nMaximum Texture Dimension Size (x,y,z)         1D=(131072), 2D=(131072, 65536), 3D=(16384, 16384, 16384)\nMaximum Layered 1D Texture Size, (num) layers  1D=(32768), 2048 layers\nMaximum Layered 2D Texture Size, (num) layers  2D=(32768, 32768), 2048 layers\nTotal amount of constant memory:               65536 bytes\nTotal amount of shared memory per block:       49152 bytes\nTotal shared memory per multiprocessor:        167936 bytes\nTotal number of registers available per block: 65536\nWarp size:                                     32\nMaximum number of threads per multiprocessor:  1536\nMaximum number of threads per block:           1024\nMax dimension size of a thread block (x,y,z): (1024, 1024, 64)\nMax dimension size of a grid size    (x,y,z): (2147483647, 65535, 65535)\nMaximum memory pitch:                          2147483647 bytes\nTexture alignment:                             512 bytes\nConcurrent copy and kernel execution:          Yes with 2 copy engine(s)\nRun time limit on kernels:                     No\nIntegrated GPU sharing Host Memory:            Yes\nSupport host page-locked memory mapping:       Yes\nAlignment requirement for Surfaces:            Yes\nDevice has ECC support:                        Disabled\nDevice supports Unified Addressing (UVA):      Yes\nDevice supports Managed Memory:                Yes\nDevice supports Compute Preemption:            Yes\nSupports Cooperative Kernel Launch:            Yes\nSupports MultiDevice Co-op Kernel Launch:      Yes\nDevice PCI Domain ID / Bus ID / location ID:   0 / 0 / 0\nCompute Mode:\n    < Default (multiple host threads can use ::cudaSetDevice() with device simultaneously) >\n\ndeviceQuery, CUDA Driver = CUDART, CUDA Driver Version = 11.4, CUDA Runtime Version = 11.4, NumDevs = 1\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c06\u8282\u70b9\u52a0\u5165 K8s \u96c6\u7fa4\n\u6b64\u73af\u8282\u548c\u670d\u52a1\u5668\u65e0\u5dee\u522b, \u7ec6\u8282\u53c2\u8003 K8s \u76f8\u5173\u6587\u6863\u5b8c\u6210\u5373\u53ef")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e device plugin \u7684 daemon set\n\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA/k8s-device-plugin#enabling-gpu-support-in-kubernetes"},"\u94fe\u63a5")),(0,a.kt)("p",{parentName:"li"},"\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.13.0-rc.1")," \u4e3a\u4f8b"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl create -f https://raw.githubusercontent.com/NVIDIA/k8s-device-plugin/v0.13.0-rc.1/nvidia-device-plugin.yml\n")),(0,a.kt)("p",{parentName:"li"},"\u6ce8\u610f: \u6b64\u64cd\u4f5c\u4f1a\u5728\u6240\u6709\u7684 K8s \u8282\u70b9\u4e2d\u8fd0\u884c NVIDIA \u7684 device plugin \u63d2\u4ef6, \u5982\u679c\u4e4b\u524d\u914d\u7f6e\u8fc7, \u5219\u4f1a\u88ab\u66f4\u65b0, \u8bf7\u8c28\u614e\u8bc4\u4f30\u4f7f\u7528\u7684\u955c\u50cf\u7248\u672c")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u786e\u8ba4 GPU \u53ef\u4ee5\u5728\u96c6\u7fa4\u4e2d\u53d1\u73b0\u548c\u4f7f\u7528\n\u53c2\u8003\u4e0b\u8fb9\u547d\u4ee4, \u67e5\u770b Jetson \u8282\u70b9\u7684 Capacity \u4e2d\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"nvidia.com/gpu"),", GPU \u5373\u88ab K8s \u96c6\u7fa4\u6b63\u5e38\u8bc6\u522b"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# kubectl describe node orin | grep -A15 Capacity\nCapacity:\ncpu:                12\nephemeral-storage:  59549612Ki\nhugepages-1Gi:      0\nhugepages-2Mi:      0\nhugepages-32Mi:     0\nhugepages-64Ki:     0\nmemory:             31357608Ki\nnvidia.com/gpu:     1\npods:               110\n")))),(0,a.kt)("h4",{id:"\u5236\u4f5c\u548c\u4f7f\u7528\u81ea\u5b9a\u4e49\u955c\u50cf"},"\u5236\u4f5c\u548c\u4f7f\u7528\u81ea\u5b9a\u4e49\u955c\u50cf"),(0,a.kt)("p",null,"\u6587\u7ae0\u524d\u9762\u63d0\u5230\u7684 l4t-jetpack \u955c\u50cf\u53ef\u4ee5\u6ee1\u8db3\u6211\u4eec\u4e00\u822c\u7684\u4f7f\u7528, \u5982\u679c\u6211\u4eec\u9700\u8981\u81ea\u5df1\u5b9a\u5236\u66f4\u52a0\u7cbe\u7b80\u6216\u8005\u66f4\u591a\u529f\u80fd\u7684\u955c\u50cf, \u53ef\u4ee5\u57fa\u4e8e l4t-base \u6765\u5236\u4f5c\n\u76f8\u5173 Dockerfile \u53ef\u4ee5\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/docker/devices/jetson"},"Starwhale\u4e3amnist\u5236\u4f5c\u7684\u955c\u50cf")))}c.isMDXComponent=!0}}]);