"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[78724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=r,k=h["".concat(o,".").concat(p)]||h[p]||m[p]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},48887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const l={title:"Install Starwhale Server with Minikube"},i=void 0,s={unversionedId:"server/installation/minikube",id:"version-0.6.5/server/installation/minikube",title:"Install Starwhale Server with Minikube",description:"Prerequisites",source:"@site/versioned_docs/version-0.6.5/server/installation/minikube.md",sourceDirName:"server/installation",slug:"/server/installation/minikube",permalink:"/0.6.5/server/installation/minikube",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.5/server/installation/minikube.md",tags:[],version:"0.6.5",frontMatter:{title:"Install Starwhale Server with Minikube"},sidebar:"mainSidebar",previous:{title:"Starwhale Server Installation Guide",permalink:"/0.6.5/server/installation/"},next:{title:"Install Starwhale Server to Kubernetes Cluster",permalink:"/0.6.5/server/installation/k8s-cluster"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Starting Minikube",id:"starting-minikube",level:2},{value:"Installing Starwhale Server",id:"installing-starwhale-server",level:2},{value:"Checking Starwhale Server status",id:"checking-starwhale-server-status",level:2},{value:"Visiting for local",id:"visiting-for-local",level:2},{value:"Visiting for others",id:"visiting-for-others",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube")," 1.32.0+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm")," 3.2.0+"),(0,r.kt)("li",{parentName:"ul"},"OS: Linux or macOS")),(0,r.kt)("h2",{id:"starting-minikube"},"Starting Minikube"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --addons ingress\n")),(0,r.kt)("p",null,"For users in the mainland of China, please run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'minikube start --kubernetes-version=1.25.3 --image-repository=docker-registry.starwhale.cn/minikube --base-image=docker-registry.starwhale.cn/minikube/k8s-minikube/kicbase:v0.0.42\n\nminikube addons enable ingress --images="KubeWebhookCertgenPatch=ingress-nginx/kube-webhook-certgen:v20231011-8b53cabe0,KubeWebhookCertgenCreate=ingress-nginx/kube-webhook-certgen:v20231011-8b53cabe0,IngressController=ingress-nginx/controller:v1.9.4"\n')),(0,r.kt)("p",null,"The docker registry ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-registry.starwhale.cn/minikube")," currently only caches the images for Kubernetes 1.25.3. Another choice, you can also use Aliyun mirror:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'minikube start --image-mirror-country=cn\n\nminikube addons enable ingress --images="KubeWebhookCertgenPatch=kube-webhook-certgen:v20231011-8b53cabe0,KubeWebhookCertgenCreate=kube-webhook-certgen:v20231011-8b53cabe0,IngressController=nginx-ingress-controller:v1.9.4" --registries="KubeWebhookCertgenPatch=registry.cn-hangzhou.aliyuncs.com/google_containers,KubeWebhookCertgenCreate=registry.cn-hangzhou.aliyuncs.com/google_containers,IngressController=registry.cn-hangzhou.aliyuncs.com/google_containers"\n')),(0,r.kt)("p",null,"If there is no kubectl bin in your machine, you may use ",(0,r.kt)("inlineCode",{parentName:"p"},"minikube kubectl")," or ",(0,r.kt)("inlineCode",{parentName:"p"},'alias kubectl="minikube kubectl --"')," alias command."),(0,r.kt)("h2",{id:"installing-starwhale-server"},"Installing Starwhale Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add starwhale https://star-whale.github.io/charts\nhelm repo update\nhelm pull starwhale/starwhale --untar --untardir ./charts\n\nhelm upgrade --install starwhale ./charts/starwhale -n starwhale --create-namespace -f ./charts/starwhale/values.minikube.global.yaml\n")),(0,r.kt)("p",null,"For users in the mainland of China, use ",(0,r.kt)("inlineCode",{parentName:"p"},"values.minikube.global.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --install starwhale ./charts/starwhale -n starwhale --create-namespace -f ./charts/starwhale/values.minikube.cn.yaml\n")),(0,r.kt)("p",null,"After the installation is successful, the following prompt message appears:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'    Release "starwhale" has been upgraded. Happy Helming!\n    NAME: starwhale\n    LAST DEPLOYED: Tue Feb 14 16:25:03 2023\n    NAMESPACE: starwhale\n    STATUS: deployed\n    REVISION: 14\n    NOTES:\n    ******************************************\n    Chart Name: starwhale\n    Chart Version: 0.5.6\n    App Version: latest\n    Starwhale Image:\n        - server: ghcr.io/star-whale/server:latest\n\n    ******************************************\n    Controller:\n        - visit: http://controller.starwhale.svc\n    Minio:\n        - web visit: http://minio.starwhale.svc\n        - admin visit: http://minio-admin.starwhale.svc\n    MySQL:\n        - port-forward:\n        - run: kubectl port-forward --namespace starwhale svc/mysql 3306:3306\n        - visit: mysql -h 127.0.0.1 -P 3306 -ustarwhale -pstarwhale\n    Please run the following command for the domains searching:\n        echo "$(sudo minikube ip) controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc " | sudo tee -a /etc/hosts\n    ******************************************\n    Login Info:\n    - starwhale: u:starwhale, p:abcd1234\n    - minio admin: u:minioadmin, p:minioadmin\n\n    *_* Enjoy to use Starwhale Platform. *_*\n')),(0,r.kt)("h2",{id:"checking-starwhale-server-status"},"Checking Starwhale Server status"),(0,r.kt)("p",null,"Keep checking the minikube service status until all deployments are running(waiting for 3~5 mins):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployments -n starwhale\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"NAME"),(0,r.kt)("th",{parentName:"tr",align:null},"READY"),(0,r.kt)("th",{parentName:"tr",align:null},"UP-TO-DATE"),(0,r.kt)("th",{parentName:"tr",align:null},"AVAILABLE"),(0,r.kt)("th",{parentName:"tr",align:null},"AGE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"controller"),(0,r.kt)("td",{parentName:"tr",align:null},"1/1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"5m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minio"),(0,r.kt)("td",{parentName:"tr",align:null},"1/1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"5m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql"),(0,r.kt)("td",{parentName:"tr",align:null},"1/1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"5m")))),(0,r.kt)("h2",{id:"visiting-for-local"},"Visiting for local"),(0,r.kt)("p",null,"Make the Starwhale controller accessible locally with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "$(sudo minikube ip) controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc " | sudo tee -a /etc/hosts\n')),(0,r.kt)("p",null,"Then you can visit ",(0,r.kt)("a",{parentName:"p",href:"http://controller.starwhale.svc"},"http://controller.starwhale.svc")," in your local web browser."),(0,r.kt)("h2",{id:"visiting-for-others"},"Visiting for others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 1: in the Starwhale Server machine"),(0,r.kt)("p",{parentName:"li"},"for temporary use with ",(0,r.kt)("inlineCode",{parentName:"p"},"socat")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# install socat at first, ref: https://howtoinstall.co/en/socat\nsudo socat TCP4-LISTEN:80,fork,reuseaddr,bind=0.0.0.0 TCP4:`minikube ip`:80\n")),(0,r.kt)("p",{parentName:"li"},"When you kill the socat process, the share access will be blocked. ",(0,r.kt)("inlineCode",{parentName:"p"},"iptables")," maybe a better choice for long-term use.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 2: in the other machines"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# for macOSX or Linux environment, run the command in the shell.\necho ${your_machine_ip} controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc " | sudo tee -a /etc/hosts\n\n# for Windows environment, run the command in the PowerShell with administrator permission.\nAdd-Content -Path C:\\Windows\\System32\\drivers\\etc\\hosts -Value "`n${your_machine_ip} controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc"\n')))))}m.isMDXComponent=!0}}]);