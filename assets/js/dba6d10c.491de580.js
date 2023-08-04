"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[7273],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(3117),n=(a(7294),a(3905));const l={title:"Install Starwhale Server with Helm"},i=void 0,s={unversionedId:"server/installation/helm-charts",id:"version-0.5.8/server/installation/helm-charts",title:"Install Starwhale Server with Helm",description:"Prerequisites",source:"@site/versioned_docs/version-0.5.8/server/installation/helm-charts.md",sourceDirName:"server/installation",slug:"/server/installation/helm-charts",permalink:"/0.5.8/server/installation/helm-charts",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.8/server/installation/helm-charts.md",tags:[],version:"0.5.8",frontMatter:{title:"Install Starwhale Server with Helm"},sidebar:"mainSidebar",previous:{title:"Install Starwhale Server with Minikube",permalink:"/0.5.8/server/installation/minikube"},next:{title:"Install Starwhale Server with Docker",permalink:"/0.5.8/server/installation/docker"}},o={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a service account on Kubernetes for Starwhale Server",id:"create-a-service-account-on-kubernetes-for-starwhale-server",level:2},{value:"Installing Starwhale Server",id:"installing-starwhale-server",level:2},{value:"Updating Starwhale Server",id:"updating-starwhale-server",level:2},{value:"Uninstalling Starwhale Server",id:"uninstalling-starwhale-server",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A running Kubernetes 1.19+ cluster to run tasks."),(0,n.kt)("li",{parentName:"ul"},"A running MySQL 8.0+ instance to store metadata."),(0,n.kt)("li",{parentName:"ul"},"A S3-compatible object storage system to save datasets, models, and others."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm")," 3.2.0+.")),(0,n.kt)("p",null,"The Starwhale Helm Charts includes MySQL and ",(0,n.kt)("a",{parentName:"p",href:"https://min.io/"},"MinIO")," as dependencies. If you do not have your own MySQL instance or any S3-compatible object storage available, use the Helm Charts to install. Please check ",(0,n.kt)("a",{parentName:"p",href:"#installation-options"},"Installation Options")," to learn how to install Starwhale Server with MySQL and MinIO."),(0,n.kt)("h2",{id:"create-a-service-account-on-kubernetes-for-starwhale-server"},"Create a service account on Kubernetes for Starwhale Server"),(0,n.kt)("p",null,"If Kubernetes RBAC is enabled (In Kubernetes 1.6+, RBAC is enabled by default), Starwhale Server can not work properly unless is started by a service account with at least the following permissions:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Resource"),(0,n.kt)("th",{parentName:"tr",align:null},"API Group"),(0,n.kt)("th",{parentName:"tr",align:null},"Get"),(0,n.kt)("th",{parentName:"tr",align:null},"List"),(0,n.kt)("th",{parentName:"tr",align:null},"Watch"),(0,n.kt)("th",{parentName:"tr",align:null},"Create"),(0,n.kt)("th",{parentName:"tr",align:null},"Delete"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"jobs"),(0,n.kt)("td",{parentName:"tr",align:null},"batch"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pods"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nodes"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"events"),(0,n.kt)("td",{parentName:"tr",align:null},'""'),(0,n.kt)("td",{parentName:"tr",align:null},"Y"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: starwhale-role\nrules:\n- apiGroups:\n  - ""\n  resources:\n  - pods\n  - nodes\n  verbs:\n  - get\n  - list\n  - watch\n- apiGroups:\n  - "batch"\n  resources:\n  - jobs\n  verbs:\n  - create\n  - get\n  - list\n  - watch\n  - delete\n- apiGroups:\n  - ""\n  resources:\n  - events\n  verbs:\n  - get\n  - watch\n  - list\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: starwhale-binding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: starwhale-role\nsubjects:\n- kind: ServiceAccount\n  name: starwhale\n')),(0,n.kt)("h1",{id:"downloading-starwhale-helm-charts"},"Downloading Starwhale Helm Charts"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add starwhale https://star-whale.github.io/charts\nhelm repo update\n")),(0,n.kt)("h2",{id:"installing-starwhale-server"},"Installing Starwhale Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install starwhale-server starwhale/starwhale-server -n starwhale --create-namespace\n")),(0,n.kt)("p",null,"If you have a local ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," command-line tool installed, you can run ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n starwhale")," to check if all pods are running."),(0,n.kt)("h2",{id:"updating-starwhale-server"},"Updating Starwhale Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\nhelm upgrade starwhale-server starwhale/starwhale-server\n")),(0,n.kt)("h2",{id:"uninstalling-starwhale-server"},"Uninstalling Starwhale Server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete starwhale-server\n")))}c.isMDXComponent=!0}}]);