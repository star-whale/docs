"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9322],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},36680:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(83117),a=(t(67294),t(3905));const o={title:"Install Starwhale Server with Docker"},i=void 0,l={unversionedId:"server/installation/docker",id:"server/installation/docker",title:"Install Starwhale Server with Docker",description:"Prerequisites",source:"@site/docs/server/installation/docker.md",sourceDirName:"server/installation",slug:"/server/installation/docker",permalink:"/next/server/installation/docker",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/server/installation/docker.md",tags:[],version:"current",frontMatter:{title:"Install Starwhale Server with Docker"},sidebar:"mainSidebar",previous:{title:"Install Starwhale Server with Helm",permalink:"/next/server/installation/helm-charts"},next:{title:"Starwhale Server Environment Example",permalink:"/next/server/installation/starwhale_env"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Prepare an env file for Docker",id:"prepare-an-env-file-for-docker",level:2},{value:"Prepare a kubeconfig file",id:"prepare-a-kubeconfig-file",level:2},{value:"Run the Docker image",id:"run-the-docker-image",level:2}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A running Kubernetes 1.19+ cluster to run tasks."),(0,a.kt)("li",{parentName:"ul"},"A running MySQL 8.0+ instance to store metadata."),(0,a.kt)("li",{parentName:"ul"},"A S3-compatible object storage to save datasets, models, and others.")),(0,a.kt)("p",null,"Please make sure pods on the Kubernetes cluster can access the port exposed by the Starwhale Server installation."),(0,a.kt)("h2",{id:"prepare-an-env-file-for-docker"},"Prepare an env file for Docker"),(0,a.kt)("p",null,"Starwhale Server can be configured by environment variables."),(0,a.kt)("p",null,"An env file template for Docker is ",(0,a.kt)("a",{parentName:"p",href:"../config/starwhale_env"},"here"),". You may create your own env file by modifying the template."),(0,a.kt)("h2",{id:"prepare-a-kubeconfig-file"},"Prepare a kubeconfig file"),(0,a.kt)("p",null,"The kubeconfig file is used for accessing the Kubernetes cluster. For more information about kubeconfig files, see the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"Official Kubernetes Documentation"),"."),(0,a.kt)("p",null,"If you have a local ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," command-line tool installed, you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl config view")," to see your current configuration."),(0,a.kt)("h2",{id:"run-the-docker-image"},"Run the Docker image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -d --name starwhale-server -p 8082:8082 \\\n        --restart unless-stopped \\\n        --mount type=bind,source=<path to your kubeconfig file>,destination=/root/.kube/config,readonly \\\n        --env-file <path to your env file> \\\n        ghcr.io/star-whale/server:0.5.6\n")),(0,a.kt)("p",null,"For users in the mainland of China, use docker image: ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-registry.starwhale.cn/star-whale/server"),"."))}p.isMDXComponent=!0}}]);