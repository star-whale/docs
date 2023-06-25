"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[60466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(83117),i=(n(67294),n(3905));const a={title:"Controller Admin Settings"},o=void 0,s={unversionedId:"instances/server/guides/server_admin",id:"version-0.4.4/instances/server/guides/server_admin",title:"Controller Admin Settings",description:"Superuser Password Reset",source:"@site/versioned_docs/version-0.4.4/instances/server/guides/server_admin.md",sourceDirName:"instances/server/guides",slug:"/instances/server/guides/server_admin",permalink:"/docs/0.4.4/instances/server/guides/server_admin",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.4/instances/server/guides/server_admin.md",tags:[],version:"0.4.4",frontMatter:{title:"Controller Admin Settings"},sidebar:"mainSidebar",previous:{title:"Install Starwhale Server with Helm",permalink:"/docs/0.4.4/instances/server/installation/helm-charts"},next:{title:"Getting Started",permalink:"/docs/0.4.4/instances/cloud/getting_started"}},l={},p=[{value:"Superuser Password Reset",id:"superuser-password-reset",level:2},{value:"System setting",id:"system-setting",level:2},{value:"Overwrite the image registry of a runtime",id:"overwrite-the-image-registry-of-a-runtime",level:3},{value:"The <code>resourcePoolSetting</code>",id:"the-resourcepoolsetting",level:3},{value:"The <code>storageSetting</code>",id:"the-storagesetting",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"superuser-password-reset"},"Superuser Password Reset"),(0,i.kt)("p",null,"In case you forget the superusers password, you could use the sql below to reset the password to ",(0,i.kt)("inlineCode",{parentName:"p"},"abcd1234")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"update user_info set user_pwd='ee9533077d01d2d65a4efdb41129a91e', user_pwd_salt='6ea18d595773ccc2beacce26' where id=1\n")),(0,i.kt)("p",null,"After that, you could login to the console and then change the password to what you really want."),(0,i.kt)("h2",{id:"system-setting"},"System setting"),(0,i.kt)("p",null,"You could customize system to make it easier to use by leverage of ",(0,i.kt)("inlineCode",{parentName:"p"},"System setting"),". Here is an example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\ndockerSetting:\n  registry: "docker-registry.starwhale.cn"\nresourcePoolSetting:\n  - name: pool1\n    nodeSelector:\n      kubernetes.io/hostname: host003-bj01\n    resources:\n      - name: nvidia.com/gpu # the resource name the cluster supported\n        max: 2 # maximu request per task\n        min: 1 # minium request per task\n        defaults: 1 # the default value for the task\n      - name: memory # the resource name the cluster supported\n        max: 10240 # maximu request per task\n        min: 1024 # minium request per task\n        defaults: 2048 # the default value for the task\n  - name: pool2\n    nodeSelector:\n      kubernetes.io/hostname: host005-bj01\n    resources:\n      - name: cpu\n        max: 2\n        min: 1\n        defaults:\nstorageSetting:\n  - type: s3\n    tokens:\n      - bucket: starwhale\n        ak: access_key\n        sk: scret_key\n        endpoint: http://mybucket.s3.region.amazonaws.com\n        region: region of the service\n        hugeFileThreshold: 10485760\n        hugeFilePartSize: 5242880\n  - type: minio\n    tokens:\n      - bucket: starwhale\n        ak: access_key\n        sk: scret_key\n        endpoint: http://10.131.0.1:9000\n        region: local\n        hugeFileThreshold: 10485760\n        hugeFilePartSize: 5242880\n\n\n')),(0,i.kt)("h3",{id:"overwrite-the-image-registry-of-a-runtime"},"Overwrite the image registry of a runtime"),(0,i.kt)("p",null,"Tasks dispatched by the server are based on docker images. Pulling these images could be slow if your internet is not working well.\nWe offer a convenience to overwrite the registry of a runtime: Put the YAML below to system setting, the registry of images is overwritten to the one you specified at runtime."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'dockerSetting:\n  registry: "docker-registry.starwhale.cn"\n')),(0,i.kt)("p",null,"The priority of the system setting is the highest. Fine-grained setting is not provided yet."),(0,i.kt)("h3",{id:"the-resourcepoolsetting"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"resourcePoolSetting")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"resourcePoolSetting")," allows you to manage your cluster in a group manner. It is currently implemented by K8S ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeSelector"),", you could label your machines in K8S cluster and make them a ",(0,i.kt)("inlineCode",{parentName:"p"},"resourcePool")," in Starwhale."),(0,i.kt)("h3",{id:"the-storagesetting"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"storageSetting")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"storageSetting")," allows you to manage the storages the server could access."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"storageSetting:\n  - type: s3\n    tokens:\n      - bucket: starwhale # required\n        ak: access_key # required\n        sk: scret_key # required\n        endpoint: http://s3.region.amazonaws.com # optional\n        region: region of the service # required when endpoint is empty\n        hugeFileThreshold: 10485760 #  bigger than 10MB will use multiple part upload\n        hugeFilePartSize: 5242880 # MB part size for multiple part upload\n  - type: minio\n    tokens:\n      - bucket: starwhale # required\n        ak: access_key # required\n        sk: scret_key # required\n        endpoint: http://10.131.0.1:9000 # required\n        region: local # optional\n        hugeFileThreshold: 10485760 #  bigger than 10MB will use multiple part upload\n        hugeFilePartSize: 5242880 # MB part size for multiple part upload\n  - type: aliyun\n    tokens:\n      - bucket: starwhale # required\n        ak: access_key # required\n        sk: scret_key # required\n        endpoint: http://10.131.0.2:9000 # required\n        region: local # optional\n        hugeFileThreshold: 10485760 #  bigger than 10MB will use multiple part upload\n        hugeFilePartSize: 5242880 # MB part size for multiple part upload\n\n")),(0,i.kt)("p",null,"Every ",(0,i.kt)("inlineCode",{parentName:"p"},"storageSetting")," item has a corresponding implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageAccessService")," interface. Starwhale has four build-in implementations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StorageAccessServiceAliyun")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," in (",(0,i.kt)("inlineCode",{parentName:"li"},"aliyun"),",",(0,i.kt)("inlineCode",{parentName:"li"},"oss"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StorageAccessServiceMinio")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," in (",(0,i.kt)("inlineCode",{parentName:"li"},"minio"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StorageAccessServiceS3")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," in (",(0,i.kt)("inlineCode",{parentName:"li"},"s3"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StorageAccessServiceFile")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," in (",(0,i.kt)("inlineCode",{parentName:"li"},"fs"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"file"),")")),(0,i.kt)("p",null,"Each of the implementations has different requirements for ",(0,i.kt)("inlineCode",{parentName:"p"},"tokens"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint")," is required when ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," in (",(0,i.kt)("inlineCode",{parentName:"p"},"aliyun"),",",(0,i.kt)("inlineCode",{parentName:"p"},"minio"),"), ",(0,i.kt)("inlineCode",{parentName:"p"},"region")," is required when ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"s3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint")," is empty. While ",(0,i.kt)("inlineCode",{parentName:"p"},"fs/file")," type requires tokens has name ",(0,i.kt)("inlineCode",{parentName:"p"},"rootDir")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceProvider"),".\nPlease refer the code for more details."))}d.isMDXComponent=!0}}]);