"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[7902],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(k,o(o({ref:n},c),{},{components:t})):r.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(83117),i=(t(67294),t(3905));const a={title:"Starwhale Server\u7cfb\u7edf\u8bbe\u7f6e"},o=void 0,l={unversionedId:"instances/server/guides/server_admin",id:"version-0.4.4/instances/server/guides/server_admin",title:"Starwhale Server\u7cfb\u7edf\u8bbe\u7f6e",description:"\u8d85\u7ea7\u7ba1\u7406\u5458\u5bc6\u7801\u91cd\u7f6e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.4/instances/server/guides/server_admin.md",sourceDirName:"instances/server/guides",slug:"/instances/server/guides/server_admin",permalink:"/zh/docs/0.4.4/instances/server/guides/server_admin",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.4/instances/server/guides/server_admin.md",tags:[],version:"0.4.4",frontMatter:{title:"Starwhale Server\u7cfb\u7edf\u8bbe\u7f6e"},sidebar:"mainSidebar",previous:{title:"\u4f7f\u7528Helm\u5b89\u88c5Starwhale Server",permalink:"/zh/docs/0.4.4/instances/server/installation/helm-charts"},next:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/zh/docs/0.4.4/instances/cloud/getting_started"}},s={},p=[{value:"\u8d85\u7ea7\u7ba1\u7406\u5458\u5bc6\u7801\u91cd\u7f6e",id:"\u8d85\u7ea7\u7ba1\u7406\u5458\u5bc6\u7801\u91cd\u7f6e",level:2},{value:"\u7cfb\u7edf\u8bbe\u7f6e",id:"\u7cfb\u7edf\u8bbe\u7f6e",level:2},{value:"runtime\u955c\u50cf\u6e90\u8bbe\u7f6e\uff1a<code>dockerSetting.registry</code>",id:"runtime\u955c\u50cf\u6e90\u8bbe\u7f6edockersettingregistry",level:3},{value:"\u8d44\u6e90\u6c60\u8bbe\u7f6e\uff1a<code>resourcePoolSetting</code>",id:"\u8d44\u6e90\u6c60\u8bbe\u7f6eresourcepoolsetting",level:3},{value:"\u5b58\u50a8\u8bbe\u7f6e\uff1a <code>storageSetting</code>",id:"\u5b58\u50a8\u8bbe\u7f6e-storagesetting",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u8d85\u7ea7\u7ba1\u7406\u5458\u5bc6\u7801\u91cd\u7f6e"},"\u8d85\u7ea7\u7ba1\u7406\u5458\u5bc6\u7801\u91cd\u7f6e"),(0,i.kt)("p",null,"\u4e00\u65e6\u60a8\u5fd8\u8bb0\u4e86\u8d85\u7ea7\u7ba1\u7406\u5458\u7684\u5bc6\u7801, \u60a8\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684SQL\u8bed\u53e5\u5c06\u5bc6\u7801\u91cd\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"abcd1234")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"update user_info set user_pwd='ee9533077d01d2d65a4efdb41129a91e', user_pwd_salt='6ea18d595773ccc2beacce26' where id=1\n")),(0,i.kt)("p",null,"\u91cd\u7f6e\u540e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4e0a\u8ff0\u5bc6\u7801\u767b\u5f55\u5230console\u3002 \u7136\u540e\u518d\u6b21\u4fee\u6539\u5bc6\u7801\u4e3a\u60a8\u60f3\u8981\u7684\u5bc6\u7801\u3002"),(0,i.kt)("h2",{id:"\u7cfb\u7edf\u8bbe\u7f6e"},"\u7cfb\u7edf\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728console\u4e0a\u5bf9\u7cfb\u7edf\u8bbe\u7f6e\u8fdb\u884c\u66f4\u6539\uff0c\u76ee\u524d\u652f\u6301runtime\u7684docker\u955c\u50cf\u6e90\u4fee\u6539\u4ee5\u53ca\u8d44\u6e90\u6c60\u7684\u5212\u5206\u3002\u4e0b\u9762\u662f\u7cfb\u7edf\u8bbe\u7f6e\u7684\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\ndockerSetting:\n  registry: "docker-registry.starwhale.cn"\nresourcePoolSetting:\n  - name: pool1\n    nodeSelector:\n      kubernetes.io/hostname: host003-bj01\n    resources:\n      - name: nvidia.com/gpu # the resource name the cluster supported\n        max: 2 # maximu request per task\n        min: 1 # minium request per task\n        defaults: 1 # the default value for the task\n      - name: memory # the resource name the cluster supported\n        max: 10240 # maximu request per task\n        min: 1024 # minium request per task\n        defaults: 2048 # the default value for the task\n  - name: pool2\n    nodeSelector:\n      kubernetes.io/hostname: host005-bj01\n    resources:\n      - name: cpu\n        max: 2\n        min: 1\n        defaults:\nstorageSetting:\n  - type: s3\n    tokens:\n      - bucket: starwhale\n        ak: access_key\n        sk: scret_key\n        endpoint: http://mybucket.s3.region.amazonaws.com\n        region: region of the service\n        hugeFileThreshold: 10485760\n        hugeFilePartSize: 5242880\n  - type: minio\n    tokens:\n      - bucket: starwhale\n        ak: access_key\n        sk: scret_key\n        endpoint: http://10.131.0.1:9000\n        region: local\n        hugeFileThreshold: 10485760\n        hugeFilePartSize: 5242880\n\n')),(0,i.kt)("h3",{id:"runtime\u955c\u50cf\u6e90\u8bbe\u7f6edockersettingregistry"},"runtime\u955c\u50cf\u6e90\u8bbe\u7f6e\uff1a",(0,i.kt)("inlineCode",{parentName:"h3"},"dockerSetting.registry")),(0,i.kt)("p",null,"Server\u4e0b\u53d1\u7684Tasks\u90fd\u662f\u57fa\u4e8edocker\u955c\u50cf\u5b9e\u73b0\u7684\u3002\u5982\u679c\u60a8\u7684\u7f51\u7edc\u4e0d\u592a\u597d\uff0c\u53ef\u80fd\u62c9\u955c\u50cf\u975e\u5e38\u6162\u3002\u6211\u4eec\u63d0\u4f9b\u4e86\u5728console\u4e2d\u8bbe\u7f6e\u955c\u50cf\u6e90\u7684\u754c\u9762\u3002\u628a\u4e0b\u9762\u7684YAML\u653e\u5230\u7cfb\u7edf\u8bbe\u7f6e\u4e2d\uff0cruntime\u7684\u955c\u50cf\u6e90\u5c31\u4f1a\u5728\u8fd0\u884c\u65f6\u88ab\u8986\u76d6\u3002"),(0,i.kt)("p",null,"\u7cfb\u7edf\u8bbe\u7f6e\u4e2d\u7684\u955c\u50cf\u6e90\u662f\u6700\u9ad8\u4f18\u5148\u7ea7\u7684\u3002\u76ee\u524d\u8fd8\u6ca1\u6709\u63d0\u4f9b\u66f4\u7ec6\u7c92\u5ea6\u7684\u955c\u50cf\u6e90\u8bbe\u7f6e\u3002"),(0,i.kt)("h3",{id:"\u8d44\u6e90\u6c60\u8bbe\u7f6eresourcepoolsetting"},"\u8d44\u6e90\u6c60\u8bbe\u7f6e\uff1a",(0,i.kt)("inlineCode",{parentName:"h3"},"resourcePoolSetting")),(0,i.kt)("p",null,"\u8d44\u6e90\u6c60\u5b9e\u73b0\u4e86\u96c6\u7fa4\u673a\u5668\u5206\u7ec4\u7684\u529f\u80fd\u3002\u7528\u6237\u5728\u521b\u5efa\u4efb\u52a1\u65f6\u53ef\u4ee5\u901a\u8fc7\u9009\u62e9\u8d44\u6e90\u6c60\u5c06\u81ea\u5df1\u7684\u4efb\u52a1\u4e0b\u53d1\u5230\u60f3\u8981\u7684\u673a\u5668\u7ec4\u4e2d\u3002\u8d44\u6e90\u6c60\u53ef\u4ee5\u7406\u89e3\u4e3aK8S\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"nodeSelector"),"\uff08\u5f53\u524d\u4e5f\u662f\u8fd9\u4e48\u5b9e\u73b0\u7684\uff09\u3002\u6240\u4ee5\u5f53\u60a8\u5728K8S\u96c6\u7fa4\u4e2d\u7ed9\u673a\u5668\u6253\u4e0a\u6807\u7b7e\u540e\uff0c\u5c31\u53ef\u4ee5\u5728\u8fd9\u91cc\u914d\u7f6e\u60a8\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"resourcePool"),"\u4e86\u3002"),(0,i.kt)("h3",{id:"\u5b58\u50a8\u8bbe\u7f6e-storagesetting"},"\u5b58\u50a8\u8bbe\u7f6e\uff1a ",(0,i.kt)("inlineCode",{parentName:"h3"},"storageSetting")),(0,i.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b58\u50a8\u8bbe\u7f6e\u6765\u914d\u7f6eStarwhale server\u53ef\u4ee5\u8bbf\u95ee\u90a3\u4e9b\u5b58\u50a8\u4ecb\u8d28."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"storageSetting:\n  - type: s3\n    tokens:\n      - bucket: starwhale # required\n        ak: access_key # required\n        sk: scret_key # required\n        endpoint: http://s3.region.amazonaws.com # optional\n        region: region of the service # required when endpoint is empty\n        hugeFileThreshold: 10485760 #  bigger than 10MB will use multiple part upload\n        hugeFilePartSize: 5242880 # MB part size for multiple part upload\n  - type: minio\n    tokens:\n      - bucket: starwhale # required\n        ak: access_key # required\n        sk: scret_key # required\n        endpoint: http://10.131.0.1:9000 # required\n        region: local # optional\n        hugeFileThreshold: 10485760 #  bigger than 10MB will use multiple part upload\n        hugeFilePartSize: 5242880 # MB part size for multiple part upload\n  - type: aliyun\n    tokens:\n      - bucket: starwhale # required\n        ak: access_key # required\n        sk: scret_key # required\n        endpoint: http://10.131.0.2:9000 # required\n        region: local # optional\n        hugeFileThreshold: 10485760 #  bigger than 10MB will use multiple part upload\n        hugeFilePartSize: 5242880 # MB part size for multiple part upload\n\n")),(0,i.kt)("p",null,"\u6bcf\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"storageSetting")," \u6761\u76ee\u90fd\u5e94\u8be5\u6709\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"StorageAccessService"),"\u63a5\u53e3\u7684\u5b9e\u73b0. Starwhale\u76ee\u524d\u6709\u56db\u4e2a\u5185\u7f6e\u7684\u5b9e\u73b0:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StorageAccessServiceAliyun")," \u53ef\u4ee5\u5904\u7406 ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," \u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"aliyun")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"li"},"oss")," \u7684\u6761\u76ee"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StorageAccessServiceMinio")," \u53ef\u4ee5\u5904\u7406",(0,i.kt)("inlineCode",{parentName:"li"},"type")," \u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"minio")," \u7684\u6761\u76ee"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StorageAccessServiceS3")," \u53ef\u4ee5\u5904\u7406 ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," \u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"s3")," \u7684\u6761\u76ee"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StorageAccessServiceFile")," \u53ef\u4ee5\u5904\u7406 ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," \u662f ",(0,i.kt)("inlineCode",{parentName:"li"},"fs")," \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"li"},"file")," \u7684\u6761\u76ee")),(0,i.kt)("p",null,"\u4e0d\u540c\u7684\u5b9e\u73b0\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"tokens")," \u7684\u8981\u6c42\u662f\u4e0d\u4e00\u6837\u7684. \u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"aliyun"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"minio"),"\u6216\u8005",(0,i.kt)("inlineCode",{parentName:"p"},"oss"),"\u7684\u65f6\u5019 ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint")," \u662f \u5fc5\u586b\u7684\u3002 \u5f53 ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint")," \u4e3a\u7a7a\u5e76\u4e14  ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," \u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"s3")," \u7684\u65f6\u5019 ",(0,i.kt)("inlineCode",{parentName:"p"},"region")," \u5fc5\u586b\u7684\u3002 \u800c ",(0,i.kt)("inlineCode",{parentName:"p"},"fs/file")," \u7c7b\u578b\u7684\u5b58\u50a8\u5219\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"rootDir")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"serviceProvider")," \u4f5c\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"tokens"),"\u7684key.\n\u66f4\u591a\u7ec6\u8282\u8bf7\u53c2\u9605\u4ee3\u7801\u3002"))}u.isMDXComponent=!0}}]);