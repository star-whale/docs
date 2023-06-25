"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[14112],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8266:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(83117),r=(n(67294),n(3905));const l={title:"Deploy Starwhale Server with Docker"},i=void 0,o={unversionedId:"instances/server/install/docker",id:"version-0.4.1/instances/server/install/docker",title:"Deploy Starwhale Server with Docker",description:"1. Prerequisites",source:"@site/versioned_docs/version-0.4.1/instances/server/install/docker.md",sourceDirName:"instances/server/install",slug:"/instances/server/install/docker",permalink:"/docs/0.4.1/instances/server/install/docker",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.1/instances/server/install/docker.md",tags:[],version:"0.4.1",frontMatter:{title:"Deploy Starwhale Server with Docker"},sidebar:"mainSidebar",previous:{title:"Concepts",permalink:"/docs/0.4.1/instances/server/concepts"},next:{title:"Deploy Starwhale Server with Helm Charts",permalink:"/docs/0.4.1/instances/server/install/helm-charts"}},p={},u=[{value:"1. Prerequisites",id:"1-prerequisites",level:2},{value:"2. Configurations",id:"2-configurations",level:2},{value:"2.1. environments",id:"21-environments",level:3},{value:"2.2. Kubeconfig",id:"22-kubeconfig",level:3}],s={toc:u};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-prerequisites"},"1. Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker or Podman environment"),(0,r.kt)("li",{parentName:"ul"},"Pod of Starwhale job can access the port exposed by Starwhale controller"),(0,r.kt)("li",{parentName:"ul"},"Object Store"),(0,r.kt)("li",{parentName:"ul"},"MySQL database")),(0,r.kt)("h2",{id:"2-configurations"},"2. Configurations"),(0,r.kt)("h3",{id:"21-environments"},"2.1. environments"),(0,r.kt)("p",null,"Most of the configuration of Controller can be controlled by environment variables. Here is a list of available\nenvironment variables."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_JWT_SECRET"),(0,r.kt)("td",{parentName:"tr",align:null},"JWT secret"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_JWT_TOKEN_EXPIRE_MINUTES"),(0,r.kt)("td",{parentName:"tr",align:null},"JWT token expire duration in minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"43200"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_CONTROLLER_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"Exposed port by Controller"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"8082"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_K8S_NAME_SPACE"),(0,r.kt)("td",{parentName:"tr",align:null},"K8s namespace used by   evaluations"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_INSTANCE_URI"),(0,r.kt)("td",{parentName:"tr",align:null},"Controller connection uri for evaluation job"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://controller:8082"},"http://controller:8082"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_STORAGE_ENDPOINT"),(0,r.kt)("td",{parentName:"tr",align:null},"Endpoint of the external OSS"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://foo.com:8088"},"http://foo.com:8088"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_STORAGE_BUCKET"),(0,r.kt)("td",{parentName:"tr",align:null},"bucket of the external OSS"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"starwhale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_STORAGE_ACCESSKEY"),(0,r.kt)("td",{parentName:"tr",align:null},"access key of the external OSS"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_STORAGE_SECRETKEY"),(0,r.kt)("td",{parentName:"tr",align:null},"secret key of the external OSS"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_STORAGE_REGION"),(0,r.kt)("td",{parentName:"tr",align:null},"region of the external OSS"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"local"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_STORAGE_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"OSS type, (s3, aliyun, minio)"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"minio"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_METADATA_STORAGE_IP"),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL host"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_METADATA_STORAGE_PORT"),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL port"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_METADATA_STORAGE_USER"),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL user"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_METADATA_STORAGE_PASSWORD"),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL password"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SW_METADATA_STORAGE_DB"),(0,r.kt)("td",{parentName:"tr",align:null},"MySQL database name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"More environment variables in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/main/server/controller/src/main/resources/application.yaml"},"application.yaml"),"."),(0,r.kt)("h3",{id:"22-kubeconfig"},"2.2. Kubeconfig"),(0,r.kt)("p",null,"For a brief description of Kubeconfig, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"official documentation"),"."),(0,r.kt)("p",null,"Controller needs to run the task on the K8s cluster, we can provide this file by mounting a file or directory to the container."),(0,r.kt)("p",null,"Demo startup script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export MAIN_IP=$(ip addr show eth0 | grep \"inet\\b\" | awk '{print $2}' | cut -d/ -f1)\nexport PORT=8082\nexport IMAGE=ghcr.io/star-whale/server:0.3.0\n\ndocker run -it -d --name controller -p 8082:8082 \\\n        --restart unless-stopped \\\n        --mount type=bind,source=/etc/kube/config,destination=/root/.kube/config,readonly \\\n        -e SW_JWT_SECRET=PfUeyDjzt4Vp8pFpOj7sR1eJ5r6 \\\n        -e SW_CONTROLLER_PORT=${PORT} \\\n        -e SW_RUNTIME_IMAGE_DEFAULT=ghcr.io/star-whale/starwhale:latest \\\n        -e SW_K8S_NAME_SPACE=default \\\n        -e SW_INSTANCE_URI=http://${MAIN_IP}:${PORT} \\\n        -e SW_STORAGE_ENDPOINT=http://foo.com:8088 \\\n        -e SW_STORAGE_BUCKET=starwhale \\\n        -e SW_STORAGE_ACCESSKEY=VC0x1qoTT7u9eFQTJemUI7s1 \\\n        -e SW_STORAGE_SECRETKEY=6mS15aUBloF8DuMiGBK7ij56VZhnwi \\\n        -e SW_STORAGE_REGION=local \\\n        -e SW_STORAGE_TYPE=s3 \\\n        -e SW_METADATA_STORAGE_IP=bar.com \\\n        -e SW_METADATA_STORAGE_PORT=3306 \\\n        -e SW_METADATA_STORAGE_PASSWORD=starwhale \\\n        -e SW_METADATA_STORAGE_USER=starwhale \\\n        -e SW_METADATA_STORAGE_DB=starwhale \\\n        ${IMAGE}\n")))}m.isMDXComponent=!0}}]);