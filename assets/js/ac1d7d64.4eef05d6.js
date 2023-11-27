"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[7783],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(3117),a=(r(7294),r(3905));const l={title:"Install Starwhale Server to Kubernetes Cluster"},s=void 0,i={unversionedId:"server/installation/k8s-cluster",id:"version-0.6.5/server/installation/k8s-cluster",title:"Install Starwhale Server to Kubernetes Cluster",description:"In a private deployment scenario, Starwhale Server can be deployed to a Kubernetes cluster using Helm. Starwhale Server relies on two fundamental infrastructure dependencies: MySQL database and object storage.",source:"@site/versioned_docs/version-0.6.5/server/installation/k8s-cluster.md",sourceDirName:"server/installation",slug:"/server/installation/k8s-cluster",permalink:"/server/installation/k8s-cluster",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.5/server/installation/k8s-cluster.md",tags:[],version:"0.6.5",frontMatter:{title:"Install Starwhale Server to Kubernetes Cluster"},sidebar:"mainSidebar",previous:{title:"Install Starwhale Server with Minikube",permalink:"/server/installation/minikube"},next:{title:"Install Starwhale Server with Docker",permalink:"/server/installation/docker"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Helm Charts",id:"helm-charts",level:2},{value:"Downloading Helm Charts",id:"downloading-helm-charts",level:3},{value:"Editing values.yaml (production required)",id:"editing-valuesyaml-production-required",level:3},{value:"Deploying/Upgrading Starwhale Server",id:"deployingupgrading-starwhale-server",level:2},{value:"Uninstalling Starwhale Server",id:"uninstalling-starwhale-server",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In a private deployment scenario, Starwhale Server can be deployed to a Kubernetes cluster using Helm. Starwhale Server relies on two fundamental infrastructure dependencies: MySQL database and object storage."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For production environments, it is recommended to provide externally high-availability MySQL database and object storage."),(0,a.kt)("li",{parentName:"ul"},"For trial or testing environments, the standalone versions of MySQL and MinIO, included in the Starwhale Charts, can be utilized.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A running Kubernetes 1.19+ cluster to run tasks."),(0,a.kt)("li",{parentName:"ul"},"Kubernetes Ingress provides HTTP(S) routing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm")," 3.2.0+."),(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",{parentName:"li"},"Production Required"),"]"," A running MySQL 8.0+ instance to store metadata."),(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("strong",{parentName:"li"},"Production Required"),"]"," A S3-compatible object storage system to save datasets, models, and others. Currently tested compatible object storage services:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://min.io/"},"MinIO")),(0,a.kt)("li",{parentName:"ul"},"AWS ",(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"S3")),(0,a.kt)("li",{parentName:"ul"},"Kingsoft Cloud ",(0,a.kt)("a",{parentName:"li",href:"https://www.ksyun.com/nv/product/ES10000.html"},"KS3")),(0,a.kt)("li",{parentName:"ul"},"Alibaba Cloud ",(0,a.kt)("a",{parentName:"li",href:"https://www.aliyun.com/product/oss"},"OSS")),(0,a.kt)("li",{parentName:"ul"},"Tencent Cloud ",(0,a.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/document/product/436"},"COS"))))),(0,a.kt)("h2",{id:"helm-charts"},"Helm Charts"),(0,a.kt)("h3",{id:"downloading-helm-charts"},"Downloading Helm Charts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add starwhale https://star-whale.github.io/charts\nhelm repo update\n")),(0,a.kt)("h3",{id:"editing-valuesyaml-production-required"},"Editing values.yaml (production required)"),(0,a.kt)("p",null,"In a production environment, it is recommended to configure parameters like the MySQL database, object storage, domain names, and memory allocation by editing values.yaml based on actual deployment needs. Below is a sample values.yaml for reference:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# Set image registry for China mainland, recommend "docker-registry.starwhale.cn". Other network environments can ignore this setting, will use ghcr.io: https://github.com/orgs/star-whale/packages.\nimage:\n  registry: docker-registry.starwhale.cn\n  org: star-whale\n\n# External MySQL service depended in production, MySQL version needs to be greater than 8.0\nexternalMySQL:\n  host: 10.0.1.100 # Database IP address or domain that is accessible within the Kubernetes cluster\n  port: 3306\n  username: "your-username"\n  password: "your-password"\n  database: starwhale # Needs to pre-create the database, name can be specified freely, default charset is fine. The database user specified above needs read/write permissions to this database\n\n# External S3 protocol compatible object storage service relied on in production\nexternalOSS:\n  host: ks3-cn-beijing.ksyuncs.com # Object storage IP address or domain that is accessible from both the Kubernetes cluster and Standalone instances\n  port: 80\n  accessKey: "your-ak"\n  secretKey: "your-sk"\n  defaultBuckets: test-gp # Needs to pre-create the Bucket, name can be specified freely. The ak/sk specified above needs read/write permissions to this Bucket\n  region: BEIJING # Object storage corresponding region, defaults to local\n\n# If external object storage is specified in production, built-in single instance MinIO is not needed\nminio:\n  enabled: false\n\n# If external MySQL is specified in production, built-in single instance MySQL is not needed\nmysql:\n  enabled: false\n\ncontroller:\n  containerPort: 8082\n  storageType: "ksyun" # Type of object storage service minio/s3/ksyun/baidu/tencent/aliyun\n\ningress:\n  enabled: true\n  ingressClassName: nginx # Corresponds to the Ingress Controller in the Kubernetes cluster\n  host: server-domain-name # External accessible domain name for the Server\n  path: /\n\n# Recommend at least 32GB memory and 8 CPU cores for Starwhale Server in production\nresources:\n  controller:\n    limits:\n      memory: 32G\n      cpu: 8\n    requests:\n      memory: 32G\n      cpu: 8\n\n# Downloading Python Packages defined in Starwhale Runtime requires setting PyPI mirror corresponding to actual network environment. Can also modify later in Server System Settings page.\nmirror:\n  pypi:\n    enabled: true\n    indexUrl: "https://mirrors.aliyun.com/pypi/simple/"\n    extraIndexUrl: "https://pypi.tuna.tsinghua.edu.cn/simple/"\n    trustedHost: "mirrors.aliyun.com pypi.tuna.tsinghua.edu.cn"\n')),(0,a.kt)("h2",{id:"deployingupgrading-starwhale-server"},"Deploying/Upgrading Starwhale Server"),(0,a.kt)("p",null,'The following command can be used for both initial deployment and upgrades. It will automatically create a Kubernetes namespace called "starwhale". values.custom.yaml is the values.yaml file written according to the actual needs of the cluster.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --devel --install starwhale starwhale/starwhale --namespace starwhale --create-namespace -f values.custom.yaml\n")),(0,a.kt)("p",null,"If you have a local ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," command-line tool installed, you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n starwhale")," to check if all pods are running."),(0,a.kt)("h2",{id:"uninstalling-starwhale-server"},"Uninstalling Starwhale Server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete starwhale-server\n")))}d.isMDXComponent=!0}}]);