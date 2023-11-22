"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[321],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>k});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(t),k=a,v=d["".concat(c,".").concat(k)]||d[k]||p[k]||o;return t?n.createElement(v,l(l({ref:r},u),{},{components:t})):n.createElement(v,l({ref:r},u))}));function k(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7912:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(3117),a=(t(7294),t(3905));const o={title:"\u4f7f\u7528 Docker \u5b89\u88c5 Starwhale Server"},l=void 0,i={unversionedId:"server/installation/docker",id:"server/installation/docker",title:"\u4f7f\u7528 Docker \u5b89\u88c5 Starwhale Server",description:"\u5148\u51b3\u6761\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/server/installation/docker.md",sourceDirName:"server/installation",slug:"/server/installation/docker",permalink:"/zh/next/server/installation/docker",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/server/installation/docker.md",tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 Docker \u5b89\u88c5 Starwhale Server"},sidebar:"mainSidebar",previous:{title:"\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u5b89\u88c5 Starwhale",permalink:"/zh/next/server/installation/k8s-cluster"},next:{title:"Starwhale \u73af\u5883\u53d8\u91cf\u6587\u4ef6\u793a\u4f8b",permalink:"/zh/next/server/installation/starwhale_env"}},c={},s=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u4e3aDocker\u51c6\u5907env\u6587\u4ef6",id:"\u4e3adocker\u51c6\u5907env\u6587\u4ef6",level:2},{value:"\u51c6\u5907kubeconfig\u6587\u4ef6\u53ef\u9009",id:"\u51c6\u5907kubeconfig\u6587\u4ef6\u53ef\u9009",level:2},{value:"\u542f\u52a8Docker\u955c\u50cf",id:"\u542f\u52a8docker\u955c\u50cf",level:2}],u={toc:s};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1.19\u6216\u8005\u66f4\u9ad8\u7248\u672c\u7684Kubernetes\u96c6\u7fa4\u7528\u4e8e\u6267\u884c\u4efb\u52a1\u3002"),(0,a.kt)("li",{parentName:"ul"},"MySQL 8.0\u4ee5\u4e0a\u7248\u672c\u7684\u6570\u636e\u5e93\u5b9e\u4f8b\u7528\u4e8e\u5b58\u50a8\u5143\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u517c\u5bb9S3\u63a5\u53e3\u7684\u5bf9\u8c61\u5b58\u50a8\uff0c\u7528\u4e8e\u4fdd\u5b58\u6570\u636e\u96c6\u3001\u6a21\u578b\u7b49\u3002")),(0,a.kt)("p",null,"\u8bf7\u786e\u4fdd\u60a8\u7684Kubernetes\u96c6\u7fa4\u4e0a\u7684pod\u53ef\u4ee5\u8bbf\u95eeStarwhale Server\u4fa6\u542c\u7684\u7aef\u53e3\u3002"),(0,a.kt)("h2",{id:"\u4e3adocker\u51c6\u5907env\u6587\u4ef6"},"\u4e3aDocker\u51c6\u5907env\u6587\u4ef6"),(0,a.kt)("p",null,"Starwhale Server\u53ef\u4ee5\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"Docker\u7684env\u6587\u4ef6\u6a21\u677f\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"starwhale_env"},"\u6b64\u5904"),"\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u6a21\u677f\u6765\u521b\u5efa\u81ea\u5df1\u7684env\u6587\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u51c6\u5907kubeconfig\u6587\u4ef6\u53ef\u9009"},"\u51c6\u5907kubeconfig\u6587\u4ef6","[\u53ef\u9009][SW_SCHEDULER=k8s]"),(0,a.kt)("p",null,"kubeconfig\u6587\u4ef6\u7528\u4e8e\u8bbf\u95eeKubernetes\u96c6\u7fa4\u3002 \u6709\u5173kubeconfig\u6587\u4ef6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"\u5b98\u65b9Kubernetes\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5b89\u88c5\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),"\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u53ef\u4ee5\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl config view")," \u6765\u67e5\u770b\u60a8\u5f53\u524d\u7684\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u542f\u52a8docker\u955c\u50cf"},"\u542f\u52a8Docker\u955c\u50cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -d --name starwhale-server -p 8082:8082 \\\n        --restart unless-stopped \\\n        --mount type=bind,source=<\u60a8\u7684kubeconfig\u6587\u4ef6\u8def\u5f84>,destination=/root/.kube/config,readonly \\\n        --env-file <\u60a8\u7684env\u6587\u4ef6\u8def\u5f84> \\\n        docker-registry.starwhale.cn/star-whale/server:0.5.6\n")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u975e\u4e2d\u56fd\u5927\u9646\u7f51\u7edc\u7528\u6237\uff0c\u53ef\u4ee5\u4f7f\u7528\u6258\u7ba1\u5728 ghcr.io \u4e0a\u7684\u955c\u50cf\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"ghcr.io/star-whale/server")," \u3002"))}p.isMDXComponent=!0}}]);