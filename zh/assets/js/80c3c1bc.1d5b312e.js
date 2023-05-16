"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[6224],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),h=n,d=m["".concat(o,".").concat(h)]||m[h]||c[h]||l;return a?r.createElement(d,s(s({ref:t},u),{},{components:a})):r.createElement(d,s({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32250:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=a(83117),n=(a(67294),a(3905));const l={title:"\u4f7f\u7528Helm\u5b89\u88c5Starwhale Server"},s=void 0,i={unversionedId:"instances/server/installation/helm-charts",id:"version-0.4.2/instances/server/installation/helm-charts",title:"\u4f7f\u7528Helm\u5b89\u88c5Starwhale Server",description:"\u5148\u51b3\u6761\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.2/instances/server/installation/helm-charts.md",sourceDirName:"instances/server/installation",slug:"/instances/server/installation/helm-charts",permalink:"/zh/docs/0.4.2/instances/server/installation/helm-charts",draft:!1,editUrl:"https://github.com/star-whale/starwhale/tree/main/docs/versioned_docs/version-0.4.2/instances/server/installation/helm-charts.md",tags:[],version:"0.4.2",frontMatter:{title:"\u4f7f\u7528Helm\u5b89\u88c5Starwhale Server"},sidebar:"mainSidebar",previous:{title:"\u4f7f\u7528Docker\u5b89\u88c5Starwhale Server",permalink:"/zh/docs/0.4.2/instances/server/installation/docker"},next:{title:"Starwhale Server\u7cfb\u7edf\u8bbe\u7f6e",permalink:"/zh/docs/0.4.2/instances/server/guides/server_admin"}},o={},p=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5728 Kubernetes \u4e0a\u4e3a Starwhale Server \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u8d26\u53f7",id:"\u5728-kubernetes-\u4e0a\u4e3a-starwhale-server-\u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u8d26\u53f7",level:2},{value:"\u4e0b\u8f7dStarwhale Helm chart",id:"\u4e0b\u8f7dstarwhale-helm-chart",level:2},{value:"\u5b89\u88c5Starwhale Server",id:"\u5b89\u88c5starwhale-server",level:2},{value:"\u5b89\u88c5\u9009\u9879",id:"\u5b89\u88c5\u9009\u9879",level:2},{value:"\u66f4\u65b0Starwhale Server",id:"\u66f4\u65b0starwhale-server",level:2},{value:"\u5378\u8f7dStarwhale Server",id:"\u5378\u8f7dstarwhale-server",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1.19\u6216\u8005\u66f4\u9ad8\u7248\u672c\u7684Kubernetes\u96c6\u7fa4\u7528\u4e8e\u6267\u884c\u4efb\u52a1\u3002"),(0,n.kt)("li",{parentName:"ul"},"MySQL 8.0\u4ee5\u4e0a\u7248\u672c\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\u7528\u4e8e\u5b58\u50a8\u5143\u6570\u636e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u517c\u5bb9S3\u63a5\u53e3\u7684\u5bf9\u8c61\u5b58\u50a8\uff0c\u7528\u4e8e\u4fdd\u5b58\u6570\u636e\u96c6\u3001\u6a21\u578b\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm")," 3.2.0+")),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709Kubernetes\u96c6\u7fa4\uff0c\u53ea\u662f\u60f3\u5feb\u901f\u5c1d\u8bd5\u4e00\u4e0b\uff0c\u60a8\u53ef\u4ee5\u5728\u4f60\u7684\u673a\u5668\u4e0a\u5b89\u88c5",(0,n.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),"\u3002"),(0,n.kt)("p",null,"Starwhale Helm chart\u5305\u62ecMySQL\u548c",(0,n.kt)("a",{parentName:"p",href:"https://min.io/"},"MinIO"),"\u4f5c\u4e3a\u4f9d\u8d56\u9879\u3002\u5982\u679c\u60a8\u6ca1\u6709\u81ea\u5df1\u7684MySQL\u5b9e\u4f8b\u6216\u4efb\u4f55\u4e0eAWS S3\u517c\u5bb9\u7684\u5bf9\u8c61\u5b58\u50a8\u53ef\u7528\uff0c\u53ef\u4ee5\u901a\u8fc7Helm chart\u8fdb\u884c\u5b89\u88c5\u3002\u8bf7\u67e5\u770b\u4e0b\u6587\u7684",(0,n.kt)("a",{parentName:"p",href:"#%E5%AE%89%E8%A3%85%E9%80%89%E9%A1%B9"},"\u5b89\u88c5\u9009\u9879"),"\u4ee5\u4e86\u89e3\u5982\u4f55\u5728\u5b89\u88c5Starwhale Server\u7684\u540c\u65f6\u5b89\u88c5MySQL\u548cMinIO\u3002"),(0,n.kt)("h2",{id:"\u5728-kubernetes-\u4e0a\u4e3a-starwhale-server-\u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u8d26\u53f7"},"\u5728 Kubernetes \u4e0a\u4e3a Starwhale Server \u521b\u5efa\u4e00\u4e2a\u670d\u52a1\u8d26\u53f7"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u7684Kubernetes\u96c6\u7fa4\u542f\u7528\u4e86RBAC\uff08\u5728 Kubernetes 1.6+\u4e2d\uff0c\u9ed8\u8ba4\u542f\u7528 RBAC\uff09\uff0cStarwhale Server\u5c06\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\uff0c\u9664\u975e\u7531\u81f3\u5c11\u5177\u6709\u4ee5\u4e0b\u6743\u9650\u7684\u670d\u52a1\u5e10\u6237\u542f\u52a8\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Resource"),(0,n.kt)("th",{parentName:"tr",align:null},"API Group"),(0,n.kt)("th",{parentName:"tr",align:null},"Get"),(0,n.kt)("th",{parentName:"tr",align:null},"List"),(0,n.kt)("th",{parentName:"tr",align:null},"Watch"),(0,n.kt)("th",{parentName:"tr",align:null},"Create"),(0,n.kt)("th",{parentName:"tr",align:null},"Delete"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jobs"),(0,n.kt)("td",{parentName:"tr",align:null},"batch"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pods"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nodes"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"events"),(0,n.kt)("td",{parentName:"tr",align:null},'""'),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"\u4f8b\u5b50"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: starwhale-role\nrules:\n- apiGroups:\n  - ""\n  resources:\n  - pods\n  - nodes\n  verbs:\n  - get\n  - list\n  - watch\n- apiGroups:\n  - "batch"\n  resources:\n  - jobs\n  verbs:\n  - create\n  - get\n  - list\n  - watch\n  - delete\n- apiGroups:\n  - ""\n  resources:\n  - events\n  verbs:\n  - get\n  - watch\n  - list\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: starwhale-binding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: starwhale-role\nsubjects:\n- kind: ServiceAccount\n  name: starwhale\n')),(0,n.kt)("h2",{id:"\u4e0b\u8f7dstarwhale-helm-chart"},"\u4e0b\u8f7dStarwhale Helm chart"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add starwhale https://star-whale.github.io/charts\nhelm repo update\n")),(0,n.kt)("h2",{id:"\u5b89\u88c5starwhale-server"},"\u5b89\u88c5Starwhale Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install starwhale-server starwhale/starwhale-server -n starwhale --create-namespace\n")),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u662f\u5728Minikube\u4e0a\u5b89\u88c5Starwhale Server\uff0c\u5219\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install starwhale-server starwhale/starwhale -n starwhale --create-namespace --set minikube.enabled=true\n")),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u5b89\u88c5\u4e86",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u60a8\u53ef\u4ee5\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n starwhale")," \u6765\u68c0\u67e5\u662f\u5426\u6240\u6709 pod \u90fd\u5728\u6b63\u5e38\u8fd0\u884c\u4e2d\u3002"),(0,n.kt)("h2",{id:"\u5b89\u88c5\u9009\u9879"},"\u5b89\u88c5\u9009\u9879"),(0,n.kt)("h2",{id:"\u66f4\u65b0starwhale-server"},"\u66f4\u65b0Starwhale Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\nhelm upgrade starwhale-server starwhale/starwhale-server\n")),(0,n.kt)("h2",{id:"\u5378\u8f7dstarwhale-server"},"\u5378\u8f7dStarwhale Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete starwhale-server\n")))}c.isMDXComponent=!0}}]);