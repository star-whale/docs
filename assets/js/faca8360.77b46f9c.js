"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[5210],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45756:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(83117),a=(r(67294),r(3905));const l={title:"FAQs"},o=void 0,i={unversionedId:"faq/index",id:"version-0.6.7/faq/index",title:"FAQs",description:'Error "413 Client Error: Request Entity Too Large" when Copying Starwhale Models to Server',source:"@site/versioned_docs/version-0.6.7/faq/index.md",sourceDirName:"faq",slug:"/faq/",permalink:"/0.6.7/faq/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.7/faq/index.md",tags:[],version:"0.6.7",frontMatter:{title:"FAQs"},sidebar:"mainSidebar",previous:{title:"Other SDK",permalink:"/0.6.7/reference/sdk/other"},next:{title:"Contribute to Starwhale",permalink:"/0.6.7/community/contribute"}},s={},u=[{value:"Error &quot;413 Client Error: Request Entity Too Large&quot; when Copying Starwhale Models to Server",id:"error-413-client-error-request-entity-too-large-when-copying-starwhale-models-to-server",level:2},{value:"RBAC Authorization Error when Starwhale Server Submits Jobs to Kubernetes Cluster",id:"rbac-authorization-error-when-starwhale-server-submits-jobs-to-kubernetes-cluster",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"error-413-client-error-request-entity-too-large-when-copying-starwhale-models-to-server"},'Error "413 Client Error: Request Entity Too Large" when Copying Starwhale Models to Server'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cause: The proxy-body-size set in the Ingress (Nginx default is 1MB) is smaller than the actual uploaded file size."),(0,a.kt)("li",{parentName:"ul"},"Solution: Check the Ingress configuration of the Starwhale Server and add ",(0,a.kt)("inlineCode",{parentName:"li"},"nginx.ingress.kubernetes.io/proxy-body-size: 30g")," to the annotations field.")),(0,a.kt)("h2",{id:"rbac-authorization-error-when-starwhale-server-submits-jobs-to-kubernetes-cluster"},"RBAC Authorization Error when Starwhale Server Submits Jobs to Kubernetes Cluster"),(0,a.kt)("p",null,"The Kubernetes cluster has RBAC enabled, and the service account for the Starwhale Server does not have sufficient permissions. It requires at least the following permissions:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Resource"),(0,a.kt)("th",{parentName:"tr",align:null},"API Group"),(0,a.kt)("th",{parentName:"tr",align:null},"Get"),(0,a.kt)("th",{parentName:"tr",align:null},"List"),(0,a.kt)("th",{parentName:"tr",align:null},"Watch"),(0,a.kt)("th",{parentName:"tr",align:null},"Create"),(0,a.kt)("th",{parentName:"tr",align:null},"Delete"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jobs"),(0,a.kt)("td",{parentName:"tr",align:null},"batch"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"Y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pods"),(0,a.kt)("td",{parentName:"tr",align:null},"core"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"nodes"),(0,a.kt)("td",{parentName:"tr",align:null},"core"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"events"),(0,a.kt)("td",{parentName:"tr",align:null},'""'),(0,a.kt)("td",{parentName:"tr",align:null},"Y"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,"Example YAML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: starwhale-role\nrules:\n- apiGroups:\n  - ""\n  resources:\n  - pods\n  - nodes\n  verbs:\n  - get\n  - list\n  - watch\n- apiGroups:\n  - "batch"\n  resources:\n  - jobs\n  verbs:\n  - create\n  - get\n  - list\n  - watch\n  - delete\n- apiGroups:\n  - ""\n  resources:\n  - events\n  verbs:\n  - get\n  - watch\n  - list\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: starwhale-binding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: starwhale-role\nsubjects:\n- kind: ServiceAccount\n  name: starwhale\n')))}c.isMDXComponent=!0}}]);