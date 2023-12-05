"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[2957],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(r),c=n,d=h["".concat(o,".").concat(c)]||h[c]||m[c]||l;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},91217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(83117),n=(r(67294),r(3905));const l={title:"\u4f7f\u7528 Helm \u5b89\u88c5 Starwhale Server"},i=void 0,s={unversionedId:"server/installation/helm-charts",id:"version-0.6.4/server/installation/helm-charts",title:"\u4f7f\u7528 Helm \u5b89\u88c5 Starwhale Server",description:"\u5148\u51b3\u6761\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.4/server/installation/helm-charts.md",sourceDirName:"server/installation",slug:"/server/installation/helm-charts",permalink:"/zh/0.6.4/server/installation/helm-charts",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.4/server/installation/helm-charts.md",tags:[],version:"0.6.4",frontMatter:{title:"\u4f7f\u7528 Helm \u5b89\u88c5 Starwhale Server"},sidebar:"mainSidebar",previous:{title:"\u4f7f\u7528 Minikube \u5b89\u88c5 Starwhale Server",permalink:"/zh/0.6.4/server/installation/minikube"},next:{title:"\u4f7f\u7528 Docker \u5b89\u88c5 Starwhale Server",permalink:"/zh/0.6.4/server/installation/docker"}},o={},p=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5728 Kubernetes \u4e0a\u4e3a Starwhale Server \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u8d26\u53f7",id:"\u5728-kubernetes-\u4e0a\u4e3a-starwhale-server-\u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u8d26\u53f7",level:2},{value:"\u4e0b\u8f7d Starwhale Helm chart",id:"\u4e0b\u8f7d-starwhale-helm-chart",level:2},{value:"\u5b89\u88c5Starwhale Server",id:"\u5b89\u88c5starwhale-server",level:2},{value:"\u66f4\u65b0 Starwhale Server",id:"\u66f4\u65b0-starwhale-server",level:2},{value:"\u5378\u8f7d Starwhale Server",id:"\u5378\u8f7d-starwhale-server",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1.19\u6216\u8005\u66f4\u9ad8\u7248\u672c\u7684Kubernetes\u96c6\u7fa4\u7528\u4e8e\u6267\u884c\u4efb\u52a1\u3002"),(0,n.kt)("li",{parentName:"ul"},"MySQL 8.0\u4ee5\u4e0a\u7248\u672c\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\u7528\u4e8e\u5b58\u50a8\u5143\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u517c\u5bb9S3\u63a5\u53e3\u7684\u5bf9\u8c61\u5b58\u50a8\uff0c\u7528\u4e8e\u4fdd\u5b58\u6570\u636e\u96c6\u3001\u6a21\u578b\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm")," 3.2.0+\u3002")),(0,n.kt)("p",null,"Starwhale Helm charts \u5305\u62ec MySQL \u548c ",(0,n.kt)("a",{parentName:"p",href:"https://min.io/"},"MinIO")," \u4f5c\u4e3a\u4f9d\u8d56\u9879\u3002\u5982\u679c\u60a8\u6ca1\u6709\u81ea\u5df1\u7684 MySQL \u5b9e\u4f8b\u6216\u4efb\u4f55\u4e0e AWS S3 \u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8\u53ef\u7528\uff0c\u53ef\u4ee5\u901a\u8fc7 Helm Chats \u8fdb\u884c\u5b89\u88c5\u3002\u8bf7\u67e5\u770b\u4e0b\u6587\u7684",(0,n.kt)("a",{parentName:"p",href:"#%E5%AE%89%E8%A3%85%E9%80%89%E9%A1%B9"},"\u5b89\u88c5\u9009\u9879"),"\u4ee5\u4e86\u89e3\u5982\u4f55\u5728\u5b89\u88c5 Starwhale Server \u7684\u540c\u65f6\u5b89\u88c5 MySQL \u548c MinIO\u3002"),(0,n.kt)("h2",{id:"\u5728-kubernetes-\u4e0a\u4e3a-starwhale-server-\u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u8d26\u53f7"},"\u5728 Kubernetes \u4e0a\u4e3a Starwhale Server \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u8d26\u53f7"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u7684 Kubernetes \u96c6\u7fa4\u542f\u7528\u4e86 RBAC\uff08\u5728 Kubernetes 1.6+\u4e2d\uff0c\u9ed8\u8ba4\u542f\u7528 RBAC\uff09\uff0cStarwhale Server \u5c06\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\uff0c\u9664\u975e\u7531\u81f3\u5c11\u5177\u6709\u4ee5\u4e0b\u6743\u9650\u7684\u670d\u52a1\u5e10\u6237\u542f\u52a8\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Resource"),(0,n.kt)("th",{parentName:"tr",align:null},"API Group"),(0,n.kt)("th",{parentName:"tr",align:null},"Get"),(0,n.kt)("th",{parentName:"tr",align:null},"List"),(0,n.kt)("th",{parentName:"tr",align:null},"Watch"),(0,n.kt)("th",{parentName:"tr",align:null},"Create"),(0,n.kt)("th",{parentName:"tr",align:null},"Delete"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jobs"),(0,n.kt)("td",{parentName:"tr",align:null},"batch"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pods"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nodes"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"events"),(0,n.kt)("td",{parentName:"tr",align:null},'""'),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: starwhale-role\nrules:\n- apiGroups:\n  - ""\n  resources:\n  - pods\n  - nodes\n  verbs:\n  - get\n  - list\n  - watch\n- apiGroups:\n  - "batch"\n  resources:\n  - jobs\n  verbs:\n  - create\n  - get\n  - list\n  - watch\n  - delete\n- apiGroups:\n  - ""\n  resources:\n  - events\n  verbs:\n  - get\n  - watch\n  - list\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: starwhale-binding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: starwhale-role\nsubjects:\n- kind: ServiceAccount\n  name: starwhale\n')),(0,n.kt)("h2",{id:"\u4e0b\u8f7d-starwhale-helm-chart"},"\u4e0b\u8f7d Starwhale Helm chart"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add starwhale https://star-whale.github.io/charts\nhelm repo update\n")),(0,n.kt)("h2",{id:"\u5b89\u88c5starwhale-server"},"\u5b89\u88c5Starwhale Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install starwhale-server starwhale/starwhale-server -n starwhale --create-namespace\n")),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u5b89\u88c5\u4e86",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n starwhale")," \u6765\u68c0\u67e5\u662f\u5426\u6240\u6709 pod \u90fd\u5728\u6b63\u5e38\u8fd0\u884c\u4e2d\u3002"),(0,n.kt)("h2",{id:"\u66f4\u65b0-starwhale-server"},"\u66f4\u65b0 Starwhale Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\nhelm upgrade starwhale-server starwhale/starwhale-server\n")),(0,n.kt)("h2",{id:"\u5378\u8f7d-starwhale-server"},"\u5378\u8f7d Starwhale Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete starwhale-server\n")))}m.isMDXComponent=!0}}]);