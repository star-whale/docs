"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[1120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(83117),a=(n(67294),n(3905));const i={title:"Devices as Kubernetes nodes"},o=void 0,s={unversionedId:"evaluation/heterogeneous/node-able",id:"evaluation/heterogeneous/node-able",title:"Devices as Kubernetes nodes",description:"Characteristics",source:"@site/docs/evaluation/heterogeneous/node-able.md",sourceDirName:"evaluation/heterogeneous",slug:"/evaluation/heterogeneous/node-able",permalink:"/next/evaluation/heterogeneous/node-able",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/evaluation/heterogeneous/node-able.md",tags:[],version:"current",frontMatter:{title:"Devices as Kubernetes nodes"},sidebar:"mainSidebar",previous:{title:"Starwhale Model Evaluation",permalink:"/next/evaluation/"},next:{title:"Devices as Kubernetes nodes",permalink:"/next/evaluation/heterogeneous/node-able"}},l={},u=[{value:"Characteristics",id:"characteristics",level:2},{value:"Typical Devices",id:"typical-devices",level:2},{value:"Raspberry Pi",id:"raspberry-pi",level:3},{value:"Jetson",id:"jetson",level:3},{value:"Node Environment Initialization",id:"node-environment-initialization",level:4},{value:"GPU Configuration",id:"gpu-configuration",level:4},{value:"Build and Use Custom Images",id:"build-and-use-custom-images",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"characteristics"},"Characteristics"),(0,a.kt)("p",null,"These devices can run as standalone Kubernetes nodes. The node concept can be referenced in the official Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/"},"documentation"),".\nSimply put, the device should at least support installing and running:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/generated/kubelet"},"kubelet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-proxy/"},"kube-proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/production-environment/container-runtimes"},"container runtime"))),(0,a.kt)("p",null,"After connecting, these devices usually need a custom runtime image to run Starwhale ",(0,a.kt)("a",{parentName:"p",href:"/docs/overview/concepts#job-step-and-task"},"Jobs"),"."),(0,a.kt)("h2",{id:"typical-devices"},"Typical Devices"),(0,a.kt)("h3",{id:"raspberry-pi"},"Raspberry Pi"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/"},"Raspberry Pi")," is a well-known microcomputer that we are familiar with. Apart from being ARM architecture, it is not much different from a regular server to use. Here is a brief introduction to adding a Raspberry Pi to a Kubernetes cluster."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install the operating system. It is recommended to use the Ubuntu-based ",(0,a.kt)("a",{parentName:"li",href:"https://www.raspberrypi.com/software/"},"Raspberry Pi OS"),"."),(0,a.kt)("li",{parentName:"ol"},"Install the Docker environment by following the instructions in the Docker ",(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/debian/"},"official documentation"),"."),(0,a.kt)("li",{parentName:"ol"},"Join an existing Kubernetes cluster. If you encounter any problems during the process, you can refer to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kelseyhightower/kubernetes-the-hard-way"},"Kubernetes The Hard Way"),".")),(0,a.kt)("p",null,"After successfully joining the cluster, you can refer to the subsequent documents to schedule tasks to the Raspberry Pi for experiments."),(0,a.kt)("h3",{id:"jetson"},"Jetson"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/"},"Jetson")," is a class of high-performance embedded devices produced by Nvidia, with built-in GPUs. We usually use it to take full advantage of its GPU computing power."),(0,a.kt)("p",null,"Below we take Orin as an example to explain the environment configuration."),(0,a.kt)("h4",{id:"node-environment-initialization"},"Node Environment Initialization"),(0,a.kt)("p",null,"Initialize the customized Ubuntu system and JetPack suite according to the official documentation, and ensure that the official demo can run successfully with a Docker environment. ",(0,a.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-agx-orin-devkit"},"Orin initialization documentation"),"."),(0,a.kt)("h4",{id:"gpu-configuration"},"GPU Configuration"),(0,a.kt)("p",null,"Kubernetes supports publishing hardware resources to the cluster based on the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/device-plugins/"},"device plugin")," mechanism.\nNVIDIA provides its own ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA/k8s-device-plugin"},"Kubernetes device plugin")," for GPUs, which has supported Jetson series devices since ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA/k8s-device-plugin/releases/tag/v0.13.0-rc.1"},"v0.13.0-rc.1"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure nvidia-container-runtime as the default runtime. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA/k8s-device-plugin#preparing-your-gpu-nodes"},"link"),".\nFor example, if using Docker, you need to configure ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")," to contain:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "runtimes": {\n        "nvidia": {\n            "path": "nvidia-container-runtime",\n            "runtimeArgs": []\n        }\n    },\n\n    "default-runtime": "nvidia"\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"deviceQuery")," mentioned in the Jetson official tutorial to test GPU usage in Docker."),(0,a.kt)("p",{parentName:"li"},"If there is output like below, then our Docker environment is configured properly:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# docker run --rm -v `/path/to/deviceQuery`:/root/deviceQuery nvcr.io/nvidia/l4t-jetpack:r35.1.0 /root/deivceQuery\n\n/root/deviceQuery Starting...\n\nCUDA Device Query (Runtime API) version (CUDART static linking)\n\nDetected 1 CUDA Capable device(s)\n\nDevice 0: "Orin"\nCUDA Driver Version / Runtime Version 11.4 / 11.4\nCUDA Capability Major/Minor version number: 8.7\nTotal amount of global memory: 30623 MBytes (32110190592 bytes)\n(016) Multiprocessors, (128) CUDA Cores/MP: 2048 CUDA Cores\nGPU Max Clock rate: 1300 MHz (1.30 GHz)\nMemory Clock rate: 1300 Mhz\nMemory Bus Width: 128-bit\nL2 Cache Size: 4194304 bytes\nMaximum Texture Dimension Size (x,y,z) 1D=(131072), 2D=(131072, 65536), 3D=(16384, 16384, 16384)\nMaximum Layered 1D Texture Size, (num) layers 1D=(32768), 2048 layers\nMaximum Layered 2D Texture Size, (num) layers 2D=(32768, 32768), 2048 layers\nTotal amount of constant memory: 65536 bytes\nTotal amount of shared memory per block: 49152 bytes\nTotal shared memory per multiprocessor: 167936 bytes\nTotal number of registers available per block: 65536\nWarp size: 32\nMaximum number of threads per multiprocessor: 1536\nMaximum number of threads per block: 1024\nMax dimension size of a thread block (x,y,z): (1024, 1024, 64)\nMax dimension size of a grid size (x,y,z): (2147483647, 65535, 65535)\nMaximum memory pitch: 2147483647 bytes\nTexture alignment: 512 bytes\nConcurrent copy and kernel execution: Yes with 2 copy engine(s)\nRun time limit on kernels: No\nIntegrated GPU sharing Host Memory: Yes\nSupport host page-locked memory mapping: Yes\nAlignment requirement for Surfaces: Yes\nDevice has ECC support: Disabled\nDevice supports Unified Addressing (UVA): Yes\nDevice supports Managed Memory: Yes\nDevice supports Compute Preemption: Yes\nSupports Cooperative Kernel Launch: Yes\nSupports MultiDevice Co-op Kernel Launch: Yes\nDevice PCI Domain ID / Bus ID / location ID: 0 / 0 / 0\nCompute Mode:\n    <Default (multiple host threads can use ::cudaSetDevice() with device simultaneously)>\n\ndeviceQuery, CUDA Driver = CUDART, CUDA Driver Version = 11.4, CUDA Runtime Version = 11.4, NumDevs = 1\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Join the node to the Kubernetes cluster.\nThis step is no different from a server. Refer to the related Kubernetes documentation for details.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the device plugin daemon set.\nRefer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA/k8s-device-plugin#enabling-gpu-support-in-kubernetes"},"link"),"."),(0,a.kt)("p",{parentName:"li"},"Take ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.13.0-rc.1")," as an example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl create -f https://raw.githubusercontent.com/NVIDIA/k8s-device-plugin/v0.13.0-rc.1/nvidia-device-plugin.yml\n")),(0,a.kt)("p",{parentName:"li"}," Note: This operation will run the NVIDIA device plugin plugin on all Kubernetes nodes. If configured before, it will be updated. Please evaluate the image version used carefully.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Confirm GPU can be discovered and used in the cluster.\nRefer to the command below. Check that ",(0,a.kt)("inlineCode",{parentName:"p"},"nvidia.com/gpu")," is in the Capacity of the Jetson node. The GPU is then recognized normally by the Kubernetes cluster."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# kubectl describe node orin | grep -A15 Capacity\nCapacity:\ncpu:                12\nephemeral-storage:  59549612Ki\nhugepages-1Gi:      0\nhugepages-2Mi:      0\nhugepages-32Mi:     0\nhugepages-64Ki:     0\nmemory:             31357608Ki\nnvidia.com/gpu:     1\npods:               110\n")))),(0,a.kt)("h4",{id:"build-and-use-custom-images"},"Build and Use Custom Images"),(0,a.kt)("p",null,"The l4t-jetpack image mentioned earlier can meet our general use. If we need to customize a more streamlined image or one with more features, we can make it based on l4t-base.\nRelevant Dockerfiles can refer to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/docker/devices/jetson"},"the image Starwhale made for mnist"),"."))}p.isMDXComponent=!0}}]);