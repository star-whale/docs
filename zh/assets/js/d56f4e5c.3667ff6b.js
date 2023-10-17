"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[2528],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},h=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,S=p["".concat(l,".").concat(d)]||p[d]||u[d]||s;return t?r.createElement(S,o(o({ref:n},h),{},{components:t})):r.createElement(S,o({ref:n},h))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},36269:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(83117),a=(t(67294),t(3905));const s={title:"Starwhale \u73af\u5883\u53d8\u91cf\u6587\u4ef6\u793a\u4f8b"},o=void 0,i={unversionedId:"server/installation/starwhale_env",id:"server/installation/starwhale_env",title:"Starwhale \u73af\u5883\u53d8\u91cf\u6587\u4ef6\u793a\u4f8b",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/server/installation/starwhale_env.md",sourceDirName:"server/installation",slug:"/server/installation/starwhale_env",permalink:"/zh/next/server/installation/starwhale_env",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/server/installation/starwhale_env.md",tags:[],version:"current",frontMatter:{title:"Starwhale \u73af\u5883\u53d8\u91cf\u6587\u4ef6\u793a\u4f8b"},sidebar:"mainSidebar",previous:{title:"\u4f7f\u7528 Docker \u5b89\u88c5 Starwhale Server",permalink:"/zh/next/server/installation/docker"},next:{title:"\u4f7f\u7528Docker Compose\u5b89\u88c5Starwhale",permalink:"/zh/next/server/installation/docker-compose"}},l={},c=[],h={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"################################################################################\n# *** Required ***\n# The external Starwhale server URL. For example: https://cloud.starwhale.ai\nSW_INSTANCE_URI=\n\n# The listening port of Starwhale Server\nSW_CONTROLLER_PORT=8082\n\n# The maximum upload file size. This setting affects datasets and models uploading when copied from outside.\nSW_UPLOAD_MAX_FILE_SIZE=20480MB\n################################################################################\n# The base URL of the Python Package Index to use when creating a runtime environment.\nSW_PYPI_INDEX_URL=http://10.131.0.1/repository/pypi-hosted/simple/ \n\n# Extra URLs of package indexes to use in addition to the base url.\nSW_PYPI_EXTRA_INDEX_URL=\n\n# Space separated hostnames. When any host specified in the base URL or extra URLs does not have a valid SSL \n# certification, use this option to trust it anyway.\nSW_PYPI_TRUSTED_HOST=\n################################################################################\n# The JWT token expiration time. When the token expires, the server will request the user to login again.\nSW_JWT_TOKEN_EXPIRE_MINUTES=43200\n\n# *** Required ***\n# The JWT secret key. All strings are valid, but we strongly recommend you to use a random string with at least 16 characters.\nSW_JWT_SECRET=\n################################################################################\n# The scheduler controller to use. Valid values are:\n# docker: Controller schedule jobs by leveraging docker\n# k8s: Controller schedule jobs by leveraging Kubernetes\nSW_SCHEDULER=k8s\n\n# The Kubernetes namespace to use when running a task when SW_SCHEDULER is k8s\nSW_K8S_NAME_SPACE=default\n\n# The path on the Kubernetes host node's filesystem to cache Python packages. Use the setting only if you have\n# the permission to use host node's filesystem. The runtime environment setup process may be accelerated when the host\n# path cache is used. Leave it blank if you do not want to use it.\nSW_K8S_HOST_PATH_FOR_CACHE=\n\n# The ip for the containers created by Controller when SW_SCHEDULER is docker\nSW_DOCKER_CONTAINER_NODE_IP=127.0.0.1\n###############################################################################\n# *** Required ***\n# The object storage system type. Valid values are:\n# s3: [AWS S3](https://aws.amazon.com/s3) or other s3-compatible object storage systems\n# aliyun: [Aliyun OSS](https://www.alibabacloud.com/product/object-storage-service)\n# minio: [MinIO](https://min.io)\n# file: Local filesystem\nSW_STORAGE_TYPE=\n\n# The path prefix for all data saved on the storage system.\nSW_STORAGE_PREFIX=\n################################################################################\n# The following settings are only used when SW_STORAGE_TYPE is file.\n\n# The root directory to save data.\n# This setting is only used when SW_STORAGE_TYPE is file. \nSW_STORAGE_FS_ROOT_DIR=/usr/local/starwhale\n################################################################################\n# The following settings are only used when SW_STORAGE_TYPE is not file.\n\n# *** Required ***\n# The name of the bucket to save data.\nSW_STORAGE_BUCKET=\n\n# *** Required ***\n# The endpoint URL of the object storage service. \n# This setting is only used when SW_STORAGE_TYPE is s3 or aliyun.\nSW_STORAGE_ENDPOINT=\n\n# *** Required ***\n# The access key used to access the object storage system.\nSW_STORAGE_ACCESSKEY=\n\n# *** Required ***\n# The secret access key used to access the object storage system.\nSW_STORAGE_SECRETKEY=\n\n# *** Optional ***\n# The region of the object storage system.\nSW_STORAGE_REGION=\n\n# Starwhale Server will use multipart upload when uploading a large file. This setting specifies the part size.\nSW_STORAGE_PART_SIZE=5MB\n################################################################################\n# MySQL settings\n\n# *** Required ***\n# The hostname/IP of the MySQL server.\nSW_METADATA_STORAGE_IP=\n\n# The port of the MySQL server.\nSW_METADATA_STORAGE_PORT=3306\n\n# *** Required ***\n# The database used by Starwhale Server\nSW_METADATA_STORAGE_DB=starwhale\n\n# *** Required ***\n# The username of the MySQL server.\nSW_METADATA_STORAGE_USER=\n\n# *** Required ***\n# The password of the MySQL server.\nSW_METADATA_STORAGE_PASSWORD=\n################################################################################\n\n# \u7528\u4e8e\u7f13\u5b58WAL\u6587\u4ef6\u7684\u76ee\u5f55\u3002\u8bf7\u5c06\u5176\u6307\u5411\u4e00\u4e2a\u6709\u8db3\u591f\u7a7a\u95f4\u7684\u6302\u8f7d\u5377\u6216\u4e3b\u673a\u8def\u5f84\u3002\n# \u5982\u679c\u4e0d\u8bbe\u7f6e\uff0cWAL\u6587\u4ef6\u5c06\u4fdd\u5b58\u5728docker\u8fd0\u884c\u65f6\u5c42\uff0c\u5f53\u5bb9\u5668\u91cd\u542f\u65f6cache\u6570\u636e\u5c06\u4e22\u5931\u3002\nSW_DATASTORE_WAL_LOCAL_CACHE_DIR=\n")))}u.isMDXComponent=!0}}]);