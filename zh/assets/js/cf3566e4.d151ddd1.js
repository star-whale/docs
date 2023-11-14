"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[215],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,k=p["".concat(o,".").concat(h)]||p[h]||m[h]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6285:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=a(3117),r=(a(7294),a(3905));const l={title:"\u4f7f\u7528 Minikube \u5b89\u88c5 Starwhale Server"},i=void 0,s={unversionedId:"server/installation/minikube",id:"server/installation/minikube",title:"\u4f7f\u7528 Minikube \u5b89\u88c5 Starwhale Server",description:"\u5148\u51b3\u6761\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/server/installation/minikube.md",sourceDirName:"server/installation",slug:"/server/installation/minikube",permalink:"/zh/next/server/installation/minikube",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/server/installation/minikube.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 Minikube \u5b89\u88c5 Starwhale Server"},sidebar:"mainSidebar",previous:{title:"Starwhale Server \u5b89\u88c5\u6307\u5357",permalink:"/zh/next/server/installation/"},next:{title:"\u4f7f\u7528 Helm \u5b89\u88c5 Starwhale Server",permalink:"/zh/next/server/installation/helm-charts"}},o={},u=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u542f\u52a8 Minikube",id:"\u542f\u52a8-minikube",level:2},{value:"\u5b89\u88c5 Starwhale Server",id:"\u5b89\u88c5-starwhale-server",level:2},{value:"\u68c0\u67e5 Starwhale Server \u72b6\u6001",id:"\u68c0\u67e5-starwhale-server-\u72b6\u6001",level:2},{value:"\u672c\u673a\u8bbf\u95ee\u7684\u7f51\u7edc\u914d\u7f6e",id:"\u672c\u673a\u8bbf\u95ee\u7684\u7f51\u7edc\u914d\u7f6e",level:2},{value:"\u5176\u4ed6\u673a\u5668\u8bbf\u95ee\u7684\u7f51\u7edc\u914d\u7f6e",id:"\u5176\u4ed6\u673a\u5668\u8bbf\u95ee\u7684\u7f51\u7edc\u914d\u7f6e",level:2}],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube")," 1.32.0+"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"Helm")," 3.2.0+"),(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u7cfb\u7edf\uff1a Linux \u6216 macOS")),(0,r.kt)("h2",{id:"\u542f\u52a8-minikube"},"\u542f\u52a8 Minikube"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'minikube start --kubernetes-version=1.25.3 --image-repository=docker-registry.starwhale.cn/minikube --base-image=docker-registry.starwhale.cn/minikube/k8s-minikube/kicbase:v0.0.42\n\nminikube addons enable ingress --images="KubeWebhookCertgenPatch=ingress-nginx/kube-webhook-certgen:v20231011-8b53cabe0,KubeWebhookCertgenCreate=ingress-nginx/kube-webhook-certgen:v20231011-8b53cabe0,IngressController=ingress-nginx/controller:v1.9.4"\n')),(0,r.kt)("p",null,"\u76ee\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-registry.starwhale.cn/minikube")," \u76ee\u524d\u53ea\u7f13\u5b58\u4e86 Kubernetes 1.25.3 \u7684\u955c\u50cf\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u963f\u91cc\u4e91\u63d0\u4f9b\u7684 Minikube \u955c\u50cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'minikube start --image-mirror-country=cn\n\nminikube addons enable ingress --images="KubeWebhookCertgenPatch=kube-webhook-certgen:v20231011-8b53cabe0,KubeWebhookCertgenCreate=kube-webhook-certgen:v20231011-8b53cabe0,IngressController=nginx-ingress-controller:v1.9.4" --registries="KubeWebhookCertgenPatch=registry.cn-hangzhou.aliyuncs.com/google_containers,KubeWebhookCertgenCreate=registry.cn-hangzhou.aliyuncs.com/google_containers,IngressController=registry.cn-hangzhou.aliyuncs.com/google_containers"\n')),(0,r.kt)("p",null,"\u5bf9\u4e8e\u975e\u4e2d\u56fd\u5927\u9646\u7f51\u7edc\u7528\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start --addons ingress\n")),(0,r.kt)("p",null,"\u5982\u679c\u5728\u60a8\u7684\u673a\u5668\u4e0a\u6ca1\u6709\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh-cn/docs/reference/kubectl/"},"kubectl"),"\uff0c\u53ef\u4ee5\u4f7f\u7528 Minikube \u81ea\u5e26\u7684 kubectl\uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"minikube kubectl")," \u6216 bashrc\u4e2d\u589e\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},'alias kubectl="minikube kubectl --"'),"\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5-starwhale-server"},"\u5b89\u88c5 Starwhale Server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add starwhale https://star-whale.github.io/charts\nhelm repo update\nhelm pull starwhale/starwhale --untar --untardir ./charts\n\nhelm upgrade --install starwhale ./charts/starwhale -n starwhale --create-namespace -f ./charts/starwhale/values.minikube.cn.yaml\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u975e\u4e2d\u56fd\u5927\u9646\u7f51\u7edc\u7528\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"values.minikube.global.yaml"),"\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --install starwhale ./charts/starwhale -n starwhale --create-namespace -f ./charts/starwhale/values.minikube.global.yaml\n")),(0,r.kt)("p",null,"\u5f53\u6210\u529f\u5b89\u88c5\u540e\uff0c\u4f1a\u6709\u7c7b\u4f3c\u5982\u4e0b\u7684\u63d0\u793a\u4fe1\u606f\u8f93\u51fa\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'    Release "starwhale" has been upgraded. Happy Helming!\n    NAME: starwhale\n    LAST DEPLOYED: Tue Feb 14 16:25:03 2023\n    NAMESPACE: starwhale\n    STATUS: deployed\n    REVISION: 14\n    NOTES:\n    ******************************************\n    Chart Name: starwhale\n    Chart Version: 0.5.6\n    App Version: latest\n    Starwhale Image:\n        - server: ghcr.io/star-whale/server:latest\n\n    ******************************************\n    Controller:\n        - visit: http://controller.starwhale.svc\n    Minio:\n        - web visit: http://minio.starwhale.svc\n        - admin visit: http://minio-admin.starwhale.svc\n    MySQL:\n        - port-forward:\n        - run: kubectl port-forward --namespace starwhale svc/mysql 3306:3306\n        - visit: mysql -h 127.0.0.1 -P 3306 -ustarwhale -pstarwhale\n    Please run the following command for the domains searching:\n        echo "$(sudo minikube ip) controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc " | sudo tee -a /etc/hosts\n    ******************************************\n    Login Info:\n    - starwhale: u:starwhale, p:abcd1234\n    - minio admin: u:minioadmin, p:minioadmin\n\n    *_* Enjoy to use Starwhale Platform. *_*\n')),(0,r.kt)("h2",{id:"\u68c0\u67e5-starwhale-server-\u72b6\u6001"},"\u68c0\u67e5 Starwhale Server \u72b6\u6001"),(0,r.kt)("p",null,"Minikube \u65b9\u5f0f\u542f\u52a8 Starwhale Server \u4e00\u822c\u8981\u7528\u65f63-5\u5206\u949f\uff0c\u53ef\u4ee5\u8f93\u51fa\u5982\u4e0b\u547d\u4ee4\u68c0\u67e5\u662f\u5426\u5b8c\u6210\u542f\u52a8\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployments -n starwhale\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"NAME"),(0,r.kt)("th",{parentName:"tr",align:null},"READY"),(0,r.kt)("th",{parentName:"tr",align:null},"UP-TO-DATE"),(0,r.kt)("th",{parentName:"tr",align:null},"AVAILABLE"),(0,r.kt)("th",{parentName:"tr",align:null},"AGE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"controller"),(0,r.kt)("td",{parentName:"tr",align:null},"1/1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"5m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"minio"),(0,r.kt)("td",{parentName:"tr",align:null},"1/1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"5m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mysql"),(0,r.kt)("td",{parentName:"tr",align:null},"1/1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"5m")))),(0,r.kt)("h2",{id:"\u672c\u673a\u8bbf\u95ee\u7684\u7f51\u7edc\u914d\u7f6e"},"\u672c\u673a\u8bbf\u95ee\u7684\u7f51\u7edc\u914d\u7f6e"),(0,r.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b\u547d\u4ee4\u540e\uff0c\u5c31\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"http://controller.starwhale.svc"},"http://controller.starwhale.svc")," \u8bbf\u95ee Starwhale Server\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "$(sudo minikube ip) controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc " | sudo tee -a /etc/hosts\n')),(0,r.kt)("h2",{id:"\u5176\u4ed6\u673a\u5668\u8bbf\u95ee\u7684\u7f51\u7edc\u914d\u7f6e"},"\u5176\u4ed6\u673a\u5668\u8bbf\u95ee\u7684\u7f51\u7edc\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6b65\u9aa41\uff1a \u5728 Starwhale Server \u6240\u5728\u673a\u5668\u4e0a"),(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"socat")," \u547d\u4ee4\u505a\u4e34\u65f6\u7684\u7aef\u53e3\u8f6c\u53d1\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# install socat at first, ref: https://howtoinstall.co/en/socat\nsudo socat TCP4-LISTEN:80,fork,reuseaddr,bind=0.0.0.0 TCP4:`minikube ip`:80\n")),(0,r.kt)("p",{parentName:"li"},"\u5f53\u60a8\u505c\u6389socat\u8fdb\u7a0b\u540e\uff0c\u7aef\u53e3\u8f6c\u53d1\u4f1a\u88ab\u7981\u6b62\uff0c\u5176\u4ed6\u673a\u5668\u7684\u8bbf\u95ee\u4e5f\u4f1a\u88ab\u7981\u6b62\u3002\u5982\u679c\u60f3\u957f\u671f\u5f00\u542f\u7aef\u53e3\u8f6c\u53d1\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"iptables")," \u547d\u4ee4\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6b65\u9aa42\uff1a \u5728\u5176\u4ed6\u673a\u5668\u4e0a"),(0,r.kt)("p",{parentName:"li"},"\u5728 hosts \u6587\u4ef6\u6dfb\u52a0\u76f8\u5173\u57df\u540d\u6620\u5c04\uff0c\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# for macOSX or Linux environment, run the command in the shell.\necho ${your_machine_ip} controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc " | sudo tee -a /etc/hosts\n\n# for Windows environment, run the command in the PowerShell with administrator permission.\nAdd-Content -Path C:\\Windows\\System32\\drivers\\etc\\hosts -Value "`n${your_machine_ip} controller.starwhale.svc minio.starwhale.svc  minio-admin.starwhale.svc"\n')))))}m.isMDXComponent=!0}}]);