"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[7996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(3117),i=(n(7294),n(3905));const a={title:"Controller Admin Settings"},o=void 0,l={unversionedId:"server/guides/server_admin",id:"server/guides/server_admin",title:"Controller Admin Settings",description:"Superuser Password Reset",source:"@site/docs/server/guides/server_admin.md",sourceDirName:"server/guides",slug:"/server/guides/server_admin",permalink:"/next/server/guides/server_admin",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/server/guides/server_admin.md",tags:[],version:"current",frontMatter:{title:"Controller Admin Settings"},sidebar:"mainSidebar",previous:{title:"Install Starwhale Server with Docker Compose",permalink:"/next/server/installation/docker-compose"},next:{title:"How to Organize and Manage Resources with Starwhale Projects",permalink:"/next/server/project"}},s={},p=[{value:"Superuser Password Reset",id:"superuser-password-reset",level:2},{value:"System Settings",id:"system-settings",level:2},{value:"Image Registry",id:"image-registry",level:3},{value:"Resource Pool",id:"resource-pool",level:3},{value:"Remote Storage",id:"remote-storage",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"superuser-password-reset"},"Superuser Password Reset"),(0,i.kt)("p",null,"In case you forget the superusers password, you could use the sql below to reset the password to ",(0,i.kt)("inlineCode",{parentName:"p"},"abcd1234")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"update user_info set user_pwd='ee9533077d01d2d65a4efdb41129a91e', user_pwd_salt='6ea18d595773ccc2beacce26' where id=1\n")),(0,i.kt)("p",null,"After that, you could login to the console and then change the password to what you really want."),(0,i.kt)("h2",{id:"system-settings"},"System Settings"),(0,i.kt)("p",null,"You could customize system to make it easier to use by leverage of ",(0,i.kt)("inlineCode",{parentName:"p"},"System setting"),". Here is an example below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'dockerSetting:\n  registryForPull: "docker-registry.starwhale.cn/star-whale"\n  registryForPush: ""\n  userName: ""\n  password: ""\n  insecure: true\npypiSetting:\n  indexUrl: ""\n  extraIndexUrl: ""\n  trustedHost: ""\n  retries: 10\n  timeout: 90\nimageBuild:\n  resourcePool: ""\n  image: ""\n  clientVersion: ""\n  pythonVersion: ""\ndatasetBuild:\n  resourcePool: ""\n  image: ""\n  clientVersion: ""\n  pythonVersion: ""\nresourcePoolSetting:\n- name: "default"\n  nodeSelector: null\n  resources:\n  - name: "cpu"\n    max: null\n    min: null\n    defaults: 5.0\n  - name: "memory"\n    max: null\n    min: null\n    defaults: 3145728.0\n  - name: "nvidia.com/gpu"\n    max: null\n    min: null\n    defaults: null\n  tolerations: null\n  metadata: null\n  isPrivate: null\n  visibleUserIds: null\nstorageSetting:\n- type: "minio"\n  tokens:\n    bucket: "users"\n    ak: "starwhale"\n    sk: "starwhale"\n    endpoint: "http://10.131.0.1:9000"\n    region: "local"\n    hugeFileThreshold: "10485760"\n    hugeFilePartSize: "5242880"\n- type: "s3"\n  tokens:\n    bucket: "users"\n    ak: "starwhale"b\n    sk: "starwhale"\n    endpoint: "http://10.131.0.1:9000"\n    region: "local"\n    hugeFileThreshold: "10485760"\n    hugeFilePartSize: "5242880"\n')),(0,i.kt)("h3",{id:"image-registry"},"Image Registry"),(0,i.kt)("p",null,"Tasks dispatched by the server are based on docker images. Pulling these images could be slow if your internet is not working well. Starwhale Server supports the custom image registries, includes ",(0,i.kt)("inlineCode",{parentName:"p"},"dockerSetting.registryForPush")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"dockerSetting.registryForPull"),"."),(0,i.kt)("h3",{id:"resource-pool"},"Resource Pool"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"resourcePoolSetting")," allows you to manage your cluster in a group manner. It is currently implemented by K8S ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeSelector"),", you could label your machines in K8S cluster and make them a ",(0,i.kt)("inlineCode",{parentName:"p"},"resourcePool")," in Starwhale."),(0,i.kt)("h3",{id:"remote-storage"},"Remote Storage"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"storageSetting")," allows you to manage the storages the server could access."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"storageSetting:\n  - type: s3\n    tokens:\n      - bucket: starwhale # required\n        ak: access_key # required\n        sk: scret_key # required\n        endpoint: http://s3.region.amazonaws.com # optional\n        region: region of the service # required when endpoint is empty\n        hugeFileThreshold: 10485760 #  bigger than 10MB will use multiple part upload\n        hugeFilePartSize: 5242880 # MB part size for multiple part upload\n  - type: minio\n    tokens:\n      - bucket: starwhale # required\n        ak: access_key # required\n        sk: scret_key # required\n        endpoint: http://10.131.0.1:9000 # required\n        region: local # optional\n        hugeFileThreshold: 10485760 #  bigger than 10MB will use multiple part upload\n        hugeFilePartSize: 5242880 # MB part size for multiple part upload\n  - type: aliyun\n    tokens:\n      - bucket: starwhale # required\n        ak: access_key # required\n        sk: scret_key # required\n        endpoint: http://10.131.0.2:9000 # required\n        region: local # optional\n        hugeFileThreshold: 10485760 #  bigger than 10MB will use multiple part upload\n        hugeFilePartSize: 5242880 # MB part size for multiple part upload\n\n")),(0,i.kt)("p",null,"Every ",(0,i.kt)("inlineCode",{parentName:"p"},"storageSetting")," item has a corresponding implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageAccessService")," interface. Starwhale has four build-in implementations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StorageAccessServiceAliyun")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," in (",(0,i.kt)("inlineCode",{parentName:"li"},"aliyun"),",",(0,i.kt)("inlineCode",{parentName:"li"},"oss"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StorageAccessServiceMinio")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," in (",(0,i.kt)("inlineCode",{parentName:"li"},"minio"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StorageAccessServiceS3")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," in (",(0,i.kt)("inlineCode",{parentName:"li"},"s3"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StorageAccessServiceFile")," matches ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," in (",(0,i.kt)("inlineCode",{parentName:"li"},"fs"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"file"),")")),(0,i.kt)("p",null,"Each of the implementations has different requirements for ",(0,i.kt)("inlineCode",{parentName:"p"},"tokens"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint")," is required when ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," in (",(0,i.kt)("inlineCode",{parentName:"p"},"aliyun"),",",(0,i.kt)("inlineCode",{parentName:"p"},"minio"),"), ",(0,i.kt)("inlineCode",{parentName:"p"},"region")," is required when ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"s3")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint")," is empty. While ",(0,i.kt)("inlineCode",{parentName:"p"},"fs/file")," type requires tokens has name ",(0,i.kt)("inlineCode",{parentName:"p"},"rootDir")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceProvider"),".\nPlease refer the code for more details."))}d.isMDXComponent=!0}}]);