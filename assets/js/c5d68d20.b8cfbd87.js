"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[5684],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},390:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(3117),r=(a(7294),a(3905));const l={title:"Install Starwhale Server with Helm"},s=void 0,i={unversionedId:"instances/server/installation/helm-charts",id:"version-0.4.6/instances/server/installation/helm-charts",title:"Install Starwhale Server with Helm",description:"Prerequisites",source:"@site/versioned_docs/version-0.4.6/instances/server/installation/helm-charts.md",sourceDirName:"instances/server/installation",slug:"/instances/server/installation/helm-charts",permalink:"/docs/0.4.6/instances/server/installation/helm-charts",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.6/instances/server/installation/helm-charts.md",tags:[],version:"0.4.6",frontMatter:{title:"Install Starwhale Server with Helm"},sidebar:"mainSidebar",previous:{title:"Install Starwhale Server with Docker",permalink:"/docs/0.4.6/instances/server/installation/docker"},next:{title:"Controller Admin Settings",permalink:"/docs/0.4.6/instances/server/guides/server_admin"}},o={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a service account on Kubernetes for Starwhale Server",id:"create-a-service-account-on-kubernetes-for-starwhale-server",level:2},{value:"Install Starwhale Server",id:"install-starwhale-server",level:2},{value:"Installation Options",id:"installation-options",level:2},{value:"Update Starwhale Server",id:"update-starwhale-server",level:2},{value:"Uninstall Starwhale Server",id:"uninstall-starwhale-server",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A running Kubernetes 1.19+ cluster to run tasks."),(0,r.kt)("li",{parentName:"ul"},"A running MySQL 8.0+ instance to store metadata."),(0,r.kt)("li",{parentName:"ul"},"A S3-compatible object storage system to save datasets, models, and others."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm")," 3.2.0+")),(0,r.kt)("p",null,"If you do not have a Kubernetes cluster and just want to have a quick try, you may install ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube")," on your machine."),(0,r.kt)("p",null,"The Starwhale Helm chart includes MySQL and ",(0,r.kt)("a",{parentName:"p",href:"https://min.io/"},"MinIO")," as dependencies. If you do not have your own MySQL instance or any S3-compatible object storage available, use the Helm chart to install. Please check ",(0,r.kt)("a",{parentName:"p",href:"#installation-options"},"Installation Options")," to learn how to install Starwhale Server with MySQL and MinIO"),(0,r.kt)("h2",{id:"create-a-service-account-on-kubernetes-for-starwhale-server"},"Create a service account on Kubernetes for Starwhale Server"),(0,r.kt)("p",null,"If Kubernetes RBAC is enabled (In Kubernetes 1.6+, RBAC is enabled by default), Starwhale Server can not work properly unless is started by a service account with at least the following permissions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Resource"),(0,r.kt)("th",{parentName:"tr",align:null},"API Group"),(0,r.kt)("th",{parentName:"tr",align:null},"Get"),(0,r.kt)("th",{parentName:"tr",align:null},"List"),(0,r.kt)("th",{parentName:"tr",align:null},"Watch"),(0,r.kt)("th",{parentName:"tr",align:null},"Create"),(0,r.kt)("th",{parentName:"tr",align:null},"Delete"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jobs"),(0,r.kt)("td",{parentName:"tr",align:null},"batch"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pods"),(0,r.kt)("td",{parentName:"tr",align:null},"core"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"core"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"events"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: starwhale-role\nrules:\n- apiGroups:\n  - ""\n  resources:\n  - pods\n  - nodes\n  verbs:\n  - get\n  - list\n  - watch\n- apiGroups:\n  - "batch"\n  resources:\n  - jobs\n  verbs:\n  - create\n  - get\n  - list\n  - watch\n  - delete\n- apiGroups:\n  - ""\n  resources:\n  - events\n  verbs:\n  - get\n  - watch\n  - list\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: starwhale-binding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: starwhale-role\nsubjects:\n- kind: ServiceAccount\n  name: starwhale\n')),(0,r.kt)("h1",{id:"download-the-starwhale-helm-chart"},"Download the Starwhale Helm chart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add starwhale https://star-whale.github.io/charts\nhelm repo update\n")),(0,r.kt)("h2",{id:"install-starwhale-server"},"Install Starwhale Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install starwhale-server starwhale/starwhale-server -n starwhale --create-namespace\n")),(0,r.kt)("p",null,"If you are installing Starwhale Server on Minikube, run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install starwhale-server starwhale/starwhale -n starwhale --create-namespace --set minikube.enabled=true\n")),(0,r.kt)("p",null,"If you have a local ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," command-line tool installed, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n starwhale")," to check if all pods are running."),(0,r.kt)("h2",{id:"installation-options"},"Installation Options"),(0,r.kt)("h2",{id:"update-starwhale-server"},"Update Starwhale Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\nhelm upgrade starwhale-server starwhale/starwhale-server\n")),(0,r.kt)("h2",{id:"uninstall-starwhale-server"},"Uninstall Starwhale Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete starwhale-server\n")))}c.isMDXComponent=!0}}]);