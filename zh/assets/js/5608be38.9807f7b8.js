"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[68769],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>u});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),k=m(a),u=r,N=k["".concat(p,".").concat(u)]||k[u]||s[u]||l;return a?n.createElement(N,i(i({ref:e},o),{},{components:a})):n.createElement(N,i({ref:e},o))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},31457:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var n=a(83117),r=(a(67294),a(3905));const l={title:"\u4f7f\u7528Helm\u5b89\u88c5Cloud Instance"},i=void 0,d={unversionedId:"instances/server/install/helm-charts",id:"version-0.4.1/instances/server/install/helm-charts",title:"\u4f7f\u7528Helm\u5b89\u88c5Cloud Instance",description:"1. Helm Charts",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.1/instances/server/install/helm-charts.md",sourceDirName:"instances/server/install",slug:"/instances/server/install/helm-charts",permalink:"/zh/docs/0.4.1/instances/server/install/helm-charts",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.1/instances/server/install/helm-charts.md",tags:[],version:"0.4.1",frontMatter:{title:"\u4f7f\u7528Helm\u5b89\u88c5Cloud Instance"},sidebar:"mainSidebar",previous:{title:"\u4f7f\u7528 Docker \u90e8\u7f72 Starwhale Controller",permalink:"/zh/docs/0.4.1/instances/server/install/docker"},next:{title:"Starwhale Server\u7cfb\u7edf\u8bbe\u7f6e",permalink:"/zh/docs/0.4.1/instances/server/guides/server_admin"}},p={},m=[{value:"1. Helm Charts",id:"1-helm-charts",level:2},{value:"2. \u6838\u5fc3\u547d\u4ee4",id:"2-\u6838\u5fc3\u547d\u4ee4",level:2},{value:"3. \u524d\u7f6e\u6761\u4ef6",id:"3-\u524d\u7f6e\u6761\u4ef6",level:2},{value:"4. \u5b89\u88c5Chart",id:"4-\u5b89\u88c5chart",level:2},{value:"5. \u5378\u8f7dChart",id:"5-\u5378\u8f7dchart",level:2},{value:"6. \u66f4\u65b0Chart",id:"6-\u66f4\u65b0chart",level:2},{value:"7. \u914d\u7f6e\u53c2\u6570\u8bf4\u660e",id:"7-\u914d\u7f6e\u53c2\u6570\u8bf4\u660e",level:2},{value:"7.1 \u57fa\u672c\u53c2\u6570",id:"71-\u57fa\u672c\u53c2\u6570",level:3},{value:"7.2 Starwhale controller\u53c2\u6570",id:"72-starwhale-controller\u53c2\u6570",level:3},{value:"7.3 \u57fa\u7840\u8bbe\u65bd\u53c2\u6570",id:"73-\u57fa\u7840\u8bbe\u65bd\u53c2\u6570",level:3},{value:"7.4 \u5f00\u53d1\u6a21\u5f0f",id:"74-\u5f00\u53d1\u6a21\u5f0f",level:3},{value:"7.5 ServiceAccount",id:"75-serviceaccount",level:3}],o={toc:m};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-helm-charts"},"1. Helm Charts"),(0,r.kt)("p",null,"\u4f7f\u7528Helm Charts\u53ef\u4ee5\u975e\u5e38\u5bb9\u6613\u7684\u5c06Starwhale Cloud Instance\u5728Kubernetes\u96c6\u7fa4\u4e2d\u8fdb\u884c\u5b89\u88c5\uff0c\u5305\u62ecStarwhale Controller\u548c\u7b2c\u4e09\u65b9\u57fa\u7840\u4f9d\u8d56\uff08mysql/minio\u7b49\uff09\u3002"),(0,r.kt)("h2",{id:"2-\u6838\u5fc3\u547d\u4ee4"},"2. \u6838\u5fc3\u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add starwhale https://star-whale.github.io/charts\nhelm repo update\nhelm upgrade --install starwhale starwhale/starwhale -n starwhale --create-namespace\n")),(0,r.kt)("h2",{id:"3-\u524d\u7f6e\u6761\u4ef6"},"3. \u524d\u7f6e\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes 1.19+"),(0,r.kt)("li",{parentName:"ul"},"Helm 3.2.0+")),(0,r.kt)("h2",{id:"4-\u5b89\u88c5chart"},"4. \u5b89\u88c5Chart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add starwhale https://star-whale.github.io/charts\nhelm repo update\nhelm upgrade --install starwhale starwhale/starwhale -n starwhale --create-namespace\n")),(0,r.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u591a\u79cd\u4f7f\u7528\u4e0d\u540c\u573a\u666f\u7684values.yaml:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9488\u5bf9minikube\u7684all-in-one\u573a\u666f\uff0c\u9002\u5408\u975e\u4e2d\u56fd\u5927\u9646\u7f51\u7edc\u73af\u5883\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm pull starwhale/starwhale --untar --untardir ./charts\nhelm upgrade --install starwhale ./charts/starwhale -n starwhale --create-namespace -f ./charts/starwhale/values.minikube.global.yaml\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9488\u5bf9minikube\u7684all-in-one\u573a\u666f\uff0c\u9002\u5408\u4e2d\u56fd\u5927\u9646\u7f51\u7edc\u73af\u5883\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm pull starwhale/starwhale --untar --untardir ./charts\nhelm upgrade --install starwhale ./charts/starwhale -n starwhale --create-namespace -f ./charts/starwhale/values.minikube.cn.yaml\n")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("inlineCode",{parentName:"p"},"helm pull")," \u547d\u4ee4\u4f1a\u5c06chart\u5305\u4e0b\u8f7d\u5230\u672c\u5730\u5e76\u89e3\u538b\uff0c\u53ef\u4ee5\u4fee\u6539\u5176\u4e2d\u7684values\u6587\u4ef6\uff0c\u6ee1\u8db3\u4e2a\u6027\u5316\u573a\u666f\u9700\u6c42\u3002"))),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"--version")," \u53c2\u6570\u6307\u5b9a\u7248\u672c\uff0c\u9ed8\u8ba4\u4f1a\u5b89\u88c5\u6700\u65b0\u53d1\u5e03\u7684Charts"),(0,r.kt)("h2",{id:"5-\u5378\u8f7dchart"},"5. \u5378\u8f7dChart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm delete starwhale\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"helm delete")," \u547d\u4ee4\u4e0d\u652f\u6301\u5220\u9664Kubernetes\u7684namespace\uff0c\u9700\u8981\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl delete namespace starwhale")," \u547d\u4ee4\u8fdb\u884c\u5220\u9664\u3002"),(0,r.kt)("h2",{id:"6-\u66f4\u65b0chart"},"6. \u66f4\u65b0Chart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update starwhale\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"update")," \u547d\u4ee4\u4ece\u8fdc\u7aef\u7684Starwhale Chart\u4ed3\u5e93\u4e2d\u66f4\u65b0\u672c\u5730\u7684charts\u6587\u4ef6\u3002\u66f4\u8be6\u7ec6\u7684\u7248\u672c\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/starwhale/starwhale"},"ArtifactHub"),"\u3002"),(0,r.kt)("h2",{id:"7-\u914d\u7f6e\u53c2\u6570\u8bf4\u660e"},"7. \u914d\u7f6e\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("h3",{id:"71-\u57fa\u672c\u53c2\u6570"},"7.1 \u57fa\u672c\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.registry")),(0,r.kt)("td",{parentName:"tr",align:null},"\u955c\u50cfRegistry, Starwhale\u955c\u50cf\u4f1a\u53d1\u5e03\u5728 docker.io, ghcr.io\u548cdocker-registry.starwhale.cn\u4e0a\uff0c\u4e2d\u56fd\u5927\u9646\u7f51\u7edc\u63a8\u8350\u4f7f\u7528docker-registry.starwhale.cn\u955c\u50cf\u6e90"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ghcr.io"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image.org")),(0,r.kt)("td",{parentName:"tr",align:null},"\u955c\u50cf\u7684org\u540d\u5b57\uff1a ",(0,r.kt)("a",{parentName:"td",href:"https://hub.docker.com/u/starwhaleai"},"starwhaleai"),"(docker.io)\u3001",(0,r.kt)("a",{parentName:"td",href:"https://github.com/orgs/star-whale"},"star-whale"),"(ghcr.io\u548cdocker-registry.starwhale.cn) \u6216\u8005\u5176\u4ed6\u5728\u79c1\u6709registry\u4e0a\u5b9a\u4e49\u7684\u955c\u50cforg\u540d\u5b57"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"star-whale"))))),(0,r.kt)("h3",{id:"72-starwhale-controller\u53c2\u6570"},"7.2 Starwhale controller\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"controller.auth.username")),(0,r.kt)("td",{parentName:"tr",align:null},"console web \u7528\u6237\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"starwhale"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"controller.auth.password")),(0,r.kt)("td",{parentName:"tr",align:null},"console web \u5bc6\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"abcd1234"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"controller.ingress.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"controller.ingress.ingressClassName")),(0,r.kt)("td",{parentName:"tr",align:null},"ingress class name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"nginx"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"controller.ingress.host")),(0,r.kt)("td",{parentName:"tr",align:null},"Starwhale controller \u8bbf\u95ee\u57df\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"console.pre.intra.starwhale.ai"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"controller.containerPort")),(0,r.kt)("td",{parentName:"tr",align:null},"Starwhale console web port"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8082"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"controller.storageType")),(0,r.kt)("td",{parentName:"tr",align:null},"Controller\u6587\u4ef6\u5b58\u50a8\u7684\u7c7b\u578b\uff0c\u76ee\u524d\u652f\u6301s3\u3001aliyun\u3001minio\u3001fs\u56db\u79cd"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"minio"))))),(0,r.kt)("h3",{id:"73-\u57fa\u7840\u8bbe\u65bd\u53c2\u6570"},"7.3 \u57fa\u7840\u8bbe\u65bd\u53c2\u6570"),(0,r.kt)("p",null,"Starwhale \u63d0\u4f9bMySQL\u548cminio\u7684Charts\uff0c\u7531\u4e8e\u662f\u5355\u4f8b\u6a21\u5f0f\uff0c\u6545\u53ea\u80fd\u5728\u5f00\u53d1\u8c03\u8bd5\u573a\u666f\u4e2d\u4f7f\u7528\u3002\u5982\u679c\u662f\u751f\u4ea7\u73af\u5883\uff0c\u9700\u8981\u901a\u8fc7externalMySQL\u548cexternalOSS\u53c2\u6570\u914d\u7f6e\u5916\u90e8\u7684\u9ad8\u53ef\u7528\u57fa\u7840\u8bbe\u65bd\u3002"),(0,r.kt)("p",null,"\u6d4b\u8bd5\u73af\u5883\u4e2d\u4f7f\u7528\u7684\u5355\u4f8b\u57fa\u7840\u8bbe\u65bd\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"mysql.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"\u90e8\u7f72\u4e00\u4e2a\u5355\u4f8b\u7684MySQL\u670d\u52a1\uff0c\u9700\u8981\u4e3aMySQL\u63d0\u4f9b\u4e00\u4e2aPV\u6301\u4e45\u5316\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"minio.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"\u90e8\u7f72\u4e00\u4e2a\u5355\u4f8b\u7684Minio\u670d\u52a1\uff0c\u9700\u8981\u4e3aMinio\u63d0\u4f9b\u4e00\u4e2aPV\u6301\u4e45\u5316\u6570\u636e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"minio.ingress.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eminio admin web\u7684Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"minio.ingress.host")),(0,r.kt)("td",{parentName:"tr",align:null},"minio admin web \u57df\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"minio.pre.intra.starwhale.ai"))))),(0,r.kt)("p",null,"\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528\u7684\u5916\u90e8\u57fa\u7840\u8bbe\u65bd\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"externalMySQL.host")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53 mysql.enabled \u8bbe\u7f6e\u4e3a false, \u4f7f\u7528\u5916\u90e8\u7684MySQL host"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"localhost"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"externalMySQL.port")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u5916\u90e8\u7684MySQL port"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3306"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"externalMySQL.username")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5916\u90e8\u7684MySQL \u7528\u6237\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"``")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"externalMySQL.password")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5916\u90e8\u7684MySQL \u5bc6\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},"``")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"externalMySQL.database")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u7ba1\u7406\u521b\u5efa\u4e00\u4e2a\u7ed9Starwhale\u72ec\u7acb\u4f7f\u7528\u7684database"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"starwhale"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"externalOSS.host")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53 minio.enabled \u8bbe\u7f6e\u4e3a false, \u4f7f\u7528\u5916\u90e8\u7684\u57fa\u4e8eS3\u534f\u8bae\u7684\u5bf9\u8c61\u5b58\u50a8\u7684host"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"localhost"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"externalOSS.port")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5916\u90e8\u5bf9\u8c61\u5b58\u50a8\u7684port"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"9000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"externalOSS.accessKey")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5916\u90e8\u5bf9\u8c61\u5b58\u50a8\u7684access key"),(0,r.kt)("td",{parentName:"tr",align:null},"``")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"externalOSS.secretKey")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5916\u90e8\u5bf9\u8c61\u5b58\u50a8\u7684secret key"),(0,r.kt)("td",{parentName:"tr",align:null},"``")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"externalOSS.region")),(0,r.kt)("td",{parentName:"tr",align:null},"\u5916\u90e8\u5bf9\u8c61\u5b58\u50a8\u7684region"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"local"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"externalOSS.defaultBuckets")),(0,r.kt)("td",{parentName:"tr",align:null},"\u7cfb\u7edf\u7ba1\u7406\u5458\u521b\u5efa\u4e00\u4e2a\u7ed9Starwhale\u72ec\u7acb\u4f7f\u7528\u7684bucket"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"starwhale"))))),(0,r.kt)("h3",{id:"74-\u5f00\u53d1\u6a21\u5f0f"},"7.4 \u5f00\u53d1\u6a21\u5f0f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"devMode.createPV.enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u52a8\u521b\u5efaPV"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"devMode.createPV.host")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528Node selector\u8fdb\u884c\u9009\u62e9\u4f55\u5904\u521b\u5efaPV"),(0,r.kt)("td",{parentName:"tr",align:null},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"devMode.createPV.rootPath")),(0,r.kt)("td",{parentName:"tr",align:null},"test PV\u7684 Local path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/var/starwhale"))))),(0,r.kt)("p",null,"\u5f00\u53d1\u6a21\u5f0f\u652f\u6301\u81ea\u52a8\u521b\u5efalocal path\u7684PV\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm install starwhale . -n starwhale --create-namespace \\\n    --set devMode.createPV.enabled=true \\\n    --set devMode.createPV.host=pv-host \\\n    --set devMode.createPV.rootPath=/path/to/pv-storage\n")),(0,r.kt)("h3",{id:"75-serviceaccount"},"7.5 ServiceAccount"),(0,r.kt)("p",null,"\u4e3a\u4e86 Starwhale Controller \u80fd\u591f\u5728 K8s \u96c6\u7fa4\u4e0a\u6b63\u5e38\u8fd0\u884c\uff0c\u6211\u4eec\u9700\u8981\u7ed9 Controller \u914d\u7f6e ServiceAccount\uff0c\u5e76\u4e14\u5206\u914d\u8db3\u591f\u7684\u6743\u9650\uff0c\u76ee\u524d\u9700\u8981\u7684\u6743\u9650\u5217\u8868\u5982\u4e0b\uff08\u4ee5RBAC\u4e3a\u4f8b\uff09"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Resource"),(0,r.kt)("th",{parentName:"tr",align:null},"API Group"),(0,r.kt)("th",{parentName:"tr",align:null},"Get"),(0,r.kt)("th",{parentName:"tr",align:null},"List"),(0,r.kt)("th",{parentName:"tr",align:null},"Watch"),(0,r.kt)("th",{parentName:"tr",align:null},"Create"),(0,r.kt)("th",{parentName:"tr",align:null},"Delete"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"jobs"),(0,r.kt)("td",{parentName:"tr",align:null},"batch"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pods"),(0,r.kt)("td",{parentName:"tr",align:null},"core"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"core"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"events"),(0,r.kt)("td",{parentName:"tr",align:null},'""'),(0,r.kt)("td",{parentName:"tr",align:null},"Y"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"\u793a\u4f8b\u7f16\u6392\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: test-role\nrules:\n- apiGroups:\n  - ""\n  resources:\n  - pods\n  - nodes\n  verbs:\n  - get\n  - list\n  - watch\n- apiGroups:\n  - "batch"\n  resources:\n  - jobs\n  verbs:\n  - create\n  - get\n  - list\n  - watch\n  - delete\n- apiGroups:\n  - ""\n  resources:\n  - events\n  verbs:\n  - get\n  - watch\n  - list\n---\n\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: test-binding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: test-role\nsubjects:\n- kind: ServiceAccount\n  name: test-sa\n')))}s.isMDXComponent=!0}}]);