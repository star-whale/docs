"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[5875],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),v=a,h=u["".concat(l,".").concat(v)]||u[v]||d[v]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8549:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const o={title:"Resource versioning in Starwhale"},i=void 0,s={unversionedId:"concepts/versioning",id:"version-0.5.12/concepts/versioning",title:"Resource versioning in Starwhale",description:"- Starwhale manages the history of all models, datasets, and runtimes. Every update to a specific resource appends a new version of the history.",source:"@site/versioned_docs/version-0.5.12/concepts/versioning.md",sourceDirName:"concepts",slug:"/concepts/versioning",permalink:"/concepts/versioning",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.12/concepts/versioning.md",tags:[],version:"0.5.12",frontMatter:{title:"Resource versioning in Starwhale"},sidebar:"mainSidebar",previous:{title:"Roles and permissions in Starwhale",permalink:"/concepts/roles-permissions"},next:{title:"Starwhale Client (swcli) User Guide",permalink:"/swcli/"}},l={},c=[],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Starwhale manages the history of all models, datasets, and runtimes. Every update to a specific resource appends a new version of the history."),(0,a.kt)("li",{parentName:"ul"},"Versions are identified by a version id which is a random string generated automatically by Starwhale and are ordered by their creation time."),(0,a.kt)("li",{parentName:"ul"},'Versions can have tags. Starwhale uses version tags to provide a human-friendly representation of versions. By default, Starwhale attaches a default tag to each version. The default tag is the letter "v", followed by a number. For each versioned resource, the first version tag is always tagged with "v0", the second version is tagged with "v1", and so on. And there is a special tag "latest" that always points to the last version. When a version is removed, its default tag will not be reused. For example, there is a model with tags "v0, v1, v2". When "v2" is removed, tags will be "v0, v1". And the following tag will be "v3" instead of "v2" again. You can attach your own tags to any version and remove them at any time.'),(0,a.kt)("li",{parentName:"ul"},"Starwhale uses a linear history model. There is neither branch nor cycle in history."),(0,a.kt)("li",{parentName:"ul"},"History can not be rollback. When a version is to be reverted, Starwhale clones the version and appends it as a new version to the end of the history. Versions in history can be manually removed and recovered.")))}d.isMDXComponent=!0}}]);