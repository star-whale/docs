"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[87899],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),h=n,d=m["".concat(o,".").concat(h)]||m[h]||p[h]||l;return r?a.createElement(d,s(s({ref:t},c),{},{components:r})):a.createElement(d,s({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<l;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61258:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(83117),n=(r(67294),r(3905));const l={title:"\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u5b89\u88c5 Starwhale"},s=void 0,i={unversionedId:"server/installation/k8s-cluster",id:"server/installation/k8s-cluster",title:"\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u5b89\u88c5 Starwhale",description:"\u5728\u79c1\u6709\u5316\u573a\u666f\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 Helm \u5c06 Starwhale Server \u90e8\u7f72\u5230\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u4e2d\u3002Starwhale Server \u4f9d\u8d56 MySQL \u6570\u636e\u5e93\u548c\u5bf9\u8c61\u5b58\u50a8\u7684\u8fd9\u4e24\u4e2a\u57fa\u7840\u8bbe\u65bd\u4f9d\u8d56\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/server/installation/k8s-cluster.md",sourceDirName:"server/installation",slug:"/server/installation/k8s-cluster",permalink:"/zh/next/server/installation/k8s-cluster",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/server/installation/k8s-cluster.md",tags:[],version:"current",frontMatter:{title:"\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u5b89\u88c5 Starwhale"},sidebar:"mainSidebar",previous:{title:"\u5728 Minikube \u4e2d\u5b89\u88c5 Starwhale",permalink:"/zh/next/server/installation/minikube"},next:{title:"\u4f7f\u7528 Docker \u5b89\u88c5 Starwhale Server",permalink:"/zh/next/server/installation/docker"}},o={},u=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"Helm Charts",id:"helm-charts",level:2},{value:"\u4e0b\u8f7d Starwhale Helm chart",id:"\u4e0b\u8f7d-starwhale-helm-chart",level:3},{value:"\u7f16\u5199 values.yaml (\u751f\u4ea7\u73af\u5883\u5fc5\u9700)",id:"\u7f16\u5199-valuesyaml-\u751f\u4ea7\u73af\u5883\u5fc5\u9700",level:3},{value:"\u90e8\u7f72/\u66f4\u65b0 Starwhale Server",id:"\u90e8\u7f72\u66f4\u65b0-starwhale-server",level:2},{value:"\u5378\u8f7d Starwhale Server",id:"\u5378\u8f7d-starwhale-server",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728\u79c1\u6709\u5316\u573a\u666f\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 Helm \u5c06 Starwhale Server \u90e8\u7f72\u5230\u4e00\u4e2a Kubernetes \u96c6\u7fa4\u4e2d\u3002Starwhale Server \u4f9d\u8d56 MySQL \u6570\u636e\u5e93\u548c\u5bf9\u8c61\u5b58\u50a8\u7684\u8fd9\u4e24\u4e2a\u57fa\u7840\u8bbe\u65bd\u4f9d\u8d56\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u5efa\u8bae\u63d0\u4f9b\u5916\u90e8\u9ad8\u53ef\u7528\u7684 MySQL \u6570\u636e\u5e93\u548c\u5bf9\u8c61\u5b58\u50a8\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8bd5\u7528\u6216\u6d4b\u8bd5\u73af\u5883\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 Starwhale Charts \u4e2d\u81ea\u5e26\u5355\u673a\u7248\u7684 MySQL \u548c MinIO\u3002")),(0,n.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1.19\u6216\u8005\u66f4\u9ad8\u7248\u672c\u7684Kubernetes\u96c6\u7fa4\u7528\u4e8e\u6267\u884c\u4efb\u52a1\u3002"),(0,n.kt)("li",{parentName:"ul"},"Kubernetes Ingress \u63d0\u4f9b HTTP(S) \u8def\u7531\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm")," 3.2.0+\u3002"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",{parentName:"li"},"\u751f\u4ea7\u73af\u5883\u5fc5\u9700"),"]"," MySQL 8.0\u4ee5\u4e0a\u7248\u672c\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\u7528\u4e8e\u5b58\u50a8\u5143\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ul"},"[",(0,n.kt)("strong",{parentName:"li"},"\u751f\u4ea7\u73af\u5883\u5fc5\u9700"),"]"," \u517c\u5bb9S3\u63a5\u53e3\u7684\u5bf9\u8c61\u5b58\u50a8\uff0c\u7528\u4e8e\u4fdd\u5b58\u6570\u636e\u96c6\u3001\u6a21\u578b\u7b49\u3002\u5f53\u524d\u7ecf\u8fc7\u6d4b\u8bd5\u7684\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u5217\u8868\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://min.io/"},"MinIO")),(0,n.kt)("li",{parentName:"ul"},"AWS ",(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"S3")),(0,n.kt)("li",{parentName:"ul"},"\u91d1\u5c71\u4e91 ",(0,n.kt)("a",{parentName:"li",href:"https://www.ksyun.com/nv/product/ES10000.html"},"KS3")),(0,n.kt)("li",{parentName:"ul"},"\u963f\u91cc\u4e91 ",(0,n.kt)("a",{parentName:"li",href:"https://www.aliyun.com/product/oss"},"OSS")),(0,n.kt)("li",{parentName:"ul"},"\u817e\u8baf\u4e91 ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/document/product/436"},"COS"))))),(0,n.kt)("h2",{id:"helm-charts"},"Helm Charts"),(0,n.kt)("h3",{id:"\u4e0b\u8f7d-starwhale-helm-chart"},"\u4e0b\u8f7d Starwhale Helm chart"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add starwhale https://star-whale.github.io/charts\nhelm repo update\n")),(0,n.kt)("h3",{id:"\u7f16\u5199-valuesyaml-\u751f\u4ea7\u73af\u5883\u5fc5\u9700"},"\u7f16\u5199 values.yaml (\u751f\u4ea7\u73af\u5883\u5fc5\u9700)"),(0,n.kt)("p",null,"\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u9700\u8981\u6839\u636e\u5b9e\u9645\u90e8\u7f72\u9700\u8981\uff0c\u8bbe\u7f6e\u5305\u62ec MySQL\u6570\u636e\u5e93\uff0c\u5bf9\u8c61\u5b58\u50a8\uff0c\u57df\u540d\u548c\u5185\u5b58\u7b49\u53c2\u6570\uff0c\u7f16\u5199 values.yaml \u662f\u63a8\u8350\u7684\u65b9\u5f0f\u3002\u4e0b\u9762\u662f\u4e00\u4e2a values.yaml \u7684\u5b9e\u4f8b\uff0c\u4f9b\u53c2\u8003\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'# \u8bbe\u7f6e\u955c\u50cf\u6e90\uff0c\u4e2d\u56fd\u5927\u9646\u7f51\u73af\u5883\u63a8\u8350 \u201cdocker-registry.starwhale.cn\u201d \u5730\u5740\u3002\u5176\u4ed6\u7f51\u7edc\u73af\u5883\u53ef\u4ee5\u5ffd\u7565\u8be5\u8bbe\u7f6e\u9879\uff0c\u4f1a\u4f7f\u7528ghcr.io \u955c\u50cf\u6e90: https://github.com/orgs/star-whale/packages \u3002\nimage:\n  registry: docker-registry.starwhale.cn\n  org: star-whale\n\n# \u751f\u4ea7\u73af\u5883\u4e2d\u4f9d\u8d56\u7684\u5916\u90e8 MySQL \u670d\u52a1\uff0cMySQL \u7248\u672c\u9700\u8981\u5927\u4e8e8.0\nexternalMySQL:\n  host: 10.0.1.100  # Kubernetes \u96c6\u7fa4\u4e2d\u53ef\u4ee5\u8bbf\u95ee\u7684\u6570\u636e\u5e93IP\u5730\u5740\u6216\u57df\u540d\n  port: 3306\n  username: "your-username"\n  password: "your-password"\n  database: starwhale  # \u9700\u8981\u63d0\u524d\u521b\u5efa\u6570\u636e\u5e93\uff0c\u540d\u5b57\u81ea\u7531\u6307\u5b9a\uff0c\u9ed8\u8ba4\u5b57\u7b26\u96c6\u5373\u53ef\u3002\u4e0a\u9762\u6307\u5b9a\u7684\u6570\u636e\u5e93\u7528\u6237\u9700\u8981\u5bf9\u8fd9\u4e2a dataset \u6709\u8bfb\u5199\u6743\u9650\n\n# \u751f\u4ea7\u73af\u5883\u4e2d\u4f9d\u8d56\u7684\u5916\u90e8 S3 \u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\nexternalOSS:\n  host: ks3-cn-beijing.ksyuncs.com  # Kubernetes \u96c6\u7fa4\u548c Standalone \u5b9e\u4f8b\u4e2d\u540c\u65f6\u53ef\u4ee5\u8bbf\u95ee\u7684\u5bf9\u8c61\u5b58\u50a8IP\u5730\u5740\u6216\u57df\u540d\n  port: 80\n  accessKey: "your-ak"\n  secretKey: "your-sk"\n  defaultBuckets: starwhale  # \u9700\u8981\u63d0\u524d\u521b\u5efaBucket\uff0c\u540d\u5b57\u81ea\u7531\u6307\u5b9a\u3002\u4e0a\u9762\u6307\u5b9a\u7684ak/sk \u9700\u8981\u5bf9\u8fd9\u4e2a Bucket \u6709\u8bfb\u5199\u6743\u9650\n  region: BEIJING  # \u5bf9\u8c61\u5b58\u50a8\u5bf9\u5e94\u7684 region\uff0c\u9ed8\u8ba4\u4e3a local\n\n# \u751f\u4ea7\u73af\u5883\u4e2d\u6307\u5b9a\u4e86\u5916\u90e8\u5bf9\u8c61\u5b58\u50a8\u540e\uff0c\u4e0d\u9700\u8981\u81ea\u5e26\u7684\u5355\u673a\u7248\u672c MinIO\nminio:\n  enabled: false\n\n# \u751f\u4ea7\u73af\u5883\u4e2d\u6307\u5b9a\u4e86\u5916\u90e8 MySQL \u540e\uff0c\u4e0d\u9700\u8981\u81ea\u5e26\u7684\u5355\u673a\u7248\u672c MySQL\nmysql:\n  enabled: false\n\ncontroller:\n  containerPort: 8082\n  storageType: "ksyun"  # \u5bf9\u8c61\u5b58\u50a8\u7684\u7c7b\u578b minio/s3/ksyun/baidu/tencent/aliyun\n  ingress:\n    enabled: true\n    ingressClassName: nginx   # \u4e0e Kubernetes \u96c6\u7fa4\u4e2d Ingress Controller \u5bf9\u5e94\n    host: server-domain-name  # Server \u5916\u90e8\u8bbf\u95ee\u7684\u57df\u540d\n    path: /\n\n# \u751f\u4ea7\u73af\u5883\u4e2d\u63a8\u8350 Starwhale Server \u81f3\u5c1132G\u5185\u5b58\u548c8\u6838CPU\u3002\nresources:\n  controller:\n    limits:\n      memory: 32G\n      cpu: 8\n    requests:\n      memory: 32G\n      cpu: 8\n\n# Server \u4e2d\u8fd0\u884c\u8bc4\u6d4b\u662f\u9700\u8981\u4e0b\u8f7d Starwhale Runtime \u4e2d\u5b9a\u4e49\u7684 Python Package\uff0c\u63a8\u8350\u8bbe\u7f6e\u7b26\u5408\u5b9e\u9645\u7f51\u7edc\u73af\u5883\u7684 PYPI mirror\u3002\u540e\u7eed\u4e5f\u53ef\u4ee5\u5728 Server System Settings\u9875\u9762\u4e2d\u4fee\u6539\u3002\nmirror:\n  pypi:\n    enabled: true\n    indexUrl: "https://mirrors.aliyun.com/pypi/simple/"\n    extraIndexUrl: "https://pypi.tuna.tsinghua.edu.cn/simple/"\n    trustedHost: "mirrors.aliyun.com pypi.tuna.tsinghua.edu.cn"\n')),(0,n.kt)("h2",{id:"\u90e8\u7f72\u66f4\u65b0-starwhale-server"},"\u90e8\u7f72/\u66f4\u65b0 Starwhale Server"),(0,n.kt)("p",null,"\u9996\u6b21\u90e8\u7f72\u6216\u66f4\u65b0\u90fd\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff0c\u4f1a\u81ea\u52a8\u521b\u5efa\u4e00\u4e2a starwhale \u7684 kubernetes namespace\u3002 ",(0,n.kt)("inlineCode",{parentName:"p"},"values.custom.yaml")," \u662f\u6839\u636e\u5b9e\u9645\u96c6\u7fa4\u7684\u9700\u8981\uff0c\u7f16\u5199\u7684values.yaml\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --devel --install starwhale starwhale/starwhale --namespace starwhale --create-namespace -f values.custom.yaml\n")),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u5b89\u88c5\u4e86",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n starwhale")," \u6765\u68c0\u67e5\u662f\u5426\u6240\u6709 pod \u90fd\u5728\u6b63\u5e38\u8fd0\u884c\u4e2d\u3002"),(0,n.kt)("h2",{id:"\u5378\u8f7d-starwhale-server"},"\u5378\u8f7d Starwhale Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete starwhale\n")))}p.isMDXComponent=!0}}]);