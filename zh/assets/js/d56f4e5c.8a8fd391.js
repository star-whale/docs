"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[2528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,S=p["".concat(l,".").concat(d)]||p[d]||u[d]||s;return n?r.createElement(S,o(o({ref:t},h),{},{components:n})):r.createElement(S,o({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const s={title:"Starwhale \u73af\u5883\u53d8\u91cf\u6587\u4ef6\u793a\u4f8b"},o=void 0,i={unversionedId:"server/installation/starwhale_env",id:"server/installation/starwhale_env",title:"Starwhale \u73af\u5883\u53d8\u91cf\u6587\u4ef6\u793a\u4f8b",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/server/installation/starwhale_env.md",sourceDirName:"server/installation",slug:"/server/installation/starwhale_env",permalink:"/zh/next/server/installation/starwhale_env",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/server/installation/starwhale_env.md",tags:[],version:"current",frontMatter:{title:"Starwhale \u73af\u5883\u53d8\u91cf\u6587\u4ef6\u793a\u4f8b"},sidebar:"mainSidebar",previous:{title:"\u4f7f\u7528 Docker \u5b89\u88c5 Starwhale Server",permalink:"/zh/next/server/installation/docker"},next:{title:"\u4f7f\u7528Docker Compose\u5b89\u88c5Starwhale",permalink:"/zh/next/server/installation/docker-compose"}},l={},c=[],h={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"################################################################################\n# *** Required ***\n# The external Starwhale server URL. For example: https://cloud.starwhale.ai\nSW_INSTANCE_URI=\n\n# The listening port of Starwhale Server\nSW_CONTROLLER_PORT=8082\n\n# The maximum upload file size. This setting affects datasets and models uploading when copied from outside.\nSW_UPLOAD_MAX_FILE_SIZE=20480MB\n################################################################################\n# The base URL of the Python Package Index to use when creating a runtime environment.\nSW_PYPI_INDEX_URL=http://10.131.0.1/repository/pypi-hosted/simple/ \n\n# Extra URLs of package indexes to use in addition to the base url.\nSW_PYPI_EXTRA_INDEX_URL=\n\n# Space separated hostnames. When any host specified in the base URL or extra URLs does not have a valid SSL \n# certification, use this option to trust it anyway.\nSW_PYPI_TRUSTED_HOST=\n################################################################################\n# The JWT token expiration time. When the token expires, the server will request the user to login again.\nSW_JWT_TOKEN_EXPIRE_MINUTES=43200\n\n# *** Required ***\n# The JWT secret key. All strings are valid, but we strongly recommend you to use a random string with at least 16 characters.\nSW_JWT_SECRET=\n################################################################################\n# The scheduler controller to use. Valid values are:\n# docker: Controller schedule jobs by leveraging docker\n# k8s: Controller schedule jobs by leveraging Kubernetes\nSW_SCHEDULER=k8s\n\n# The Kubernetes namespace to use when running a task when SW_SCHEDULER is k8s\nSW_K8S_NAME_SPACE=default\n\n# The path on the Kubernetes host node's filesystem to cache Python packages. Use the setting only if you have\n# the permission to use host node's filesystem. The runtime environment setup process may be accelerated when the host\n# path cache is used. Leave it blank if you do not want to use it.\nSW_K8S_HOST_PATH_FOR_CACHE=\n\n# The ip for the containers created by Controller when SW_SCHEDULER is docker\nSW_DOCKER_CONTAINER_NODE_IP=127.0.0.1\n###############################################################################\n# *** Required ***\n# The object storage system type. Valid values are:\n# s3: [AWS S3](https://aws.amazon.com/s3) or other s3-compatible object storage systems\n# aliyun: [Aliyun OSS](https://www.alibabacloud.com/product/object-storage-service)\n# minio: [MinIO](https://min.io)\n# file: Local filesystem\nSW_STORAGE_TYPE=\n\n# The path prefix for all data saved on the storage system.\nSW_STORAGE_PREFIX=\n################################################################################\n# The following settings are only used when SW_STORAGE_TYPE is file.\n\n# The root directory to save data.\n# This setting is only used when SW_STORAGE_TYPE is file. \nSW_STORAGE_FS_ROOT_DIR=/usr/local/starwhale\n################################################################################\n# The following settings are only used when SW_STORAGE_TYPE is not file.\n\n# *** Required ***\n# The name of the bucket to save data.\nSW_STORAGE_BUCKET=\n\n# *** Required ***\n# The endpoint URL of the object storage service. \n# This setting is only used when SW_STORAGE_TYPE is s3 or aliyun.\nSW_STORAGE_ENDPOINT=\n\n# *** Required ***\n# The access key used to access the object storage system.\nSW_STORAGE_ACCESSKEY=\n\n# *** Required ***\n# The secret access key used to access the object storage system.\nSW_STORAGE_SECRETKEY=\n\n# *** Optional ***\n# The region of the object storage system.\nSW_STORAGE_REGION=\n\n# Starwhale Server will use multipart upload when uploading a large file. This setting specifies the part size.\nSW_STORAGE_PART_SIZE=5MB\n################################################################################\n# MySQL settings\n\n# *** Required ***\n# The hostname/IP of the MySQL server.\nSW_METADATA_STORAGE_IP=\n\n# The port of the MySQL server.\nSW_METADATA_STORAGE_PORT=3306\n\n# *** Required ***\n# The database used by Starwhale Server\nSW_METADATA_STORAGE_DB=starwhale\n\n# *** Required ***\n# The username of the MySQL server.\nSW_METADATA_STORAGE_USER=\n\n# *** Required ***\n# The password of the MySQL server.\nSW_METADATA_STORAGE_PASSWORD=\n################################################################################\n")))}u.isMDXComponent=!0}}]);