"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[3859],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(a),h=r,d=c["".concat(o,".").concat(h)]||c[h]||p[h]||l;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},77345:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(83117),r=(a(67294),a(3905));const l={title:"Install Starwhale Server with Minikube"},i=void 0,s={unversionedId:"server/installation/minikube",id:"version-0.5.12/server/installation/minikube",title:"Install Starwhale Server with Minikube",description:"Prerequisites",source:"@site/versioned_docs/version-0.5.12/server/installation/minikube.md",sourceDirName:"server/installation",slug:"/server/installation/minikube",permalink:"/server/installation/minikube",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.12/server/installation/minikube.md",tags:[],version:"0.5.12",frontMatter:{title:"Install Starwhale Server with Minikube"},sidebar:"mainSidebar",previous:{title:"Starwhale Server Installation Guide",permalink:"/server/installation/"},next:{title:"Install Starwhale Server with Helm",permalink:"/server/installation/helm-charts"}},o={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Starting Minikube",id:"starting-minikube",level:2},{value:"Installing Starwhale Server",id:"installing-starwhale-server",level:2},{value:"Checking Starwhale Server status",id:"checking-starwhale-server-status",level:2},{value:"Visiting for local",id:"visiting-for-local",level:2},{value:"Visiting for others",id:"visiting-for-others",level:2}],u={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube")," 1.25+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm")," 3.2.0+"),(0,r.kt)("li",{parentName:"ul"},"OS: Linux or macOS")),(0,r.kt)("h2",{id:"starting-minikube"},"Starting Minikube"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --addons ingress --kubernetes-version=1.25.3\n")),(0,r.kt)("p",null,"For users in the mainland of China, please add ",(0,r.kt)("inlineCode",{parentName:"p"},"--image-mirror-country=cn")," parameter. If there is no kubectl bin in your machine, you may use ",(0,r.kt)("inlineCode",{parentName:"p"},"minikube kubectl")," or ",(0,r.kt)("inlineCode",{parentName:"p"},'alias kubectl="minikube kubectl --"')," alias command."),(0,r.kt)("h2",{id:"installing-starwhale-server"},"Installing Starwhale Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add starwhale https://star-whale.github.io/charts\nhelm repo update\nhelm pull starwhale/starwhale --untar --untardir ./charts\n\nhelm upgrade --install starwhale ./charts/starwhale -n starwhale --create-namespace -f ./charts/starwhale/values.minikube.global.yaml\n")),(0,r.kt)("p",null,"For users in the mainland of China, use ",(0,r.kt)("inlineCode",{parentName:"p"},"values.minikube.global.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --install starwhale ./charts/starwhale -n starwhale --create-namespace -f ./charts/starwhale/values.minikube.cn.yaml\n")),(0,r.kt)("p",null,"After the installation is successful, the following prompt message appears:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'    Release "starwhale" has been upgraded. Happy Helming!\n    NAME: starwhale\n    LAST DEPLOYED: Tue Feb 14 16:25:03 2023\n    NAMESPACE: starwhale\n    STATUS: deployed\n    REVISION: 14\n    NOTES:\n    ******************************************\n    Chart Name: starwhale\n    Chart Version: 0.5.6\n    App Version: latest\n    Starwhale Image:\n        - server: ghcr.io/star-whale/server:latest\n\n    ******************************************\n    Controller:\n        - visit: http://controller.starwhale.svc\n    Minio:\n        - web visit: http://minio.starwhale.svc\n        - admin visit: http://minio-admin.starwhale.svc\n    MySQL:\n        - port-forward:\n        - run: kubectl port-forward --namespace starwhale svc/mysql 3306:3306\n        - visit: mysql -h 127.0.0.1 -P 3306 -ustarwhale -pstarwhale\n    Please run the following command for the domains searching:\n        echo "$(sudo minikube ip) controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc " | sudo tee -a /etc/hosts\n    ******************************************\n    Login Info:\n    - starwhale: u:starwhale, p:abcd1234\n    - minio admin: u:minioadmin, p:minioadmin\n\n    *_* Enjoy to use Starwhale Platform. *_*\n')),(0,r.kt)("h2",{id:"checking-starwhale-server-status"},"Checking Starwhale Server status"),(0,r.kt)("p",null,"Keep checking the minikube service status until all deployments are running(waiting for 3~5 mins):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployments -n starwhale\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"NAME"),(0,r.kt)("th",{parentName:"tr",align:null},"READY"),(0,r.kt)("th",{parentName:"tr",align:null},"UP-TO-DATE"),(0,r.kt)("th",{parentName:"tr",align:null},"AVAILABLE"),(0,r.kt)("th",{parentName:"tr",align:null},"AGE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"controller"),(0,r.kt)("td",{parentName:"tr",align:null},"1/1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"5m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minio"),(0,r.kt)("td",{parentName:"tr",align:null},"1/1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"5m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql"),(0,r.kt)("td",{parentName:"tr",align:null},"1/1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"5m")))),(0,r.kt)("h2",{id:"visiting-for-local"},"Visiting for local"),(0,r.kt)("p",null,"Make the Starwhale controller accessible locally with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "$(sudo minikube ip) controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc " | sudo tee -a /etc/hosts\n')),(0,r.kt)("p",null,"Then you can visit ",(0,r.kt)("a",{parentName:"p",href:"http://controller.starwhale.svc"},"http://controller.starwhale.svc")," in your local web browser."),(0,r.kt)("h2",{id:"visiting-for-others"},"Visiting for others"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 1: in the Starwhale Server machine"),(0,r.kt)("p",{parentName:"li"},"for temporary use with ",(0,r.kt)("inlineCode",{parentName:"p"},"socat")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# install socat at first, ref: https://howtoinstall.co/en/socat\nsudo socat TCP4-LISTEN:80,fork,reuseaddr,bind=0.0.0.0 TCP4:`minikube ip`:80\n")),(0,r.kt)("p",{parentName:"li"},"When you kill the socat process, the share access will be blocked. ",(0,r.kt)("inlineCode",{parentName:"p"},"iptables")," maybe a better choice for long-term use.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Step 2: in the other machines"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# for macOSX or Linux environment, run the command in the shell.\necho ${your_machine_ip} controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc " | sudo tee -a /etc/hosts\n\n# for Windows environment, run the command in the PowerShell with administrator permission.\nAdd-Content -Path C:\\Windows\\System32\\drivers\\etc\\hosts -Value "`n${your_machine_ip} controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc"\n')))))}p.isMDXComponent=!0}}]);