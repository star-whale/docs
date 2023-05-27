"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[31],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40990:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(83117),o=(r(67294),r(3905));const a={title:"Project in Starwhale"},c=void 0,s={unversionedId:"concepts/project",id:"version-0.4.6/concepts/project",title:"Project in Starwhale",description:'"Project" is the basic unit for organizing different resources like models, datasets, etc.',source:"@site/versioned_docs/version-0.4.6/concepts/project.md",sourceDirName:"concepts",slug:"/concepts/project",permalink:"/docs/concepts/project",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.6/concepts/project.md",tags:[],version:"0.4.6",frontMatter:{title:"Project in Starwhale"},sidebar:"mainSidebar",previous:{title:"Names in Starwhale",permalink:"/docs/concepts/names"},next:{title:"Roles and permissions in Starwhale",permalink:"/docs/concepts/roles-permissions"}},i={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'"Project" is the basic unit for organizing different resources like models, datasets, etc.'),(0,o.kt)("p",null,"You may use projects for different purposes. For example, you can create a project for a data scientist team, a product line, or a specific model. Users usually work on one or more projects in their daily lives."),(0,o.kt)("p",null,"Starwhale Server/Cloud projects are grouped by ",(0,o.kt)("a",{parentName:"p",href:"account"},"accounts"),". Starwhale Standalone does not have accounts. So you will not see any account name prefix in Starwhale Standalone projects."),(0,o.kt)("p",null,'Starwhale Server/Cloud projects can be either "public" or "private". Public projects means all users on the same instance are assigned a "guest" role to the project by default. For more information about roles, see ',(0,o.kt)("a",{parentName:"p",href:"roles-permissions"},"Roles and permissions in Starwhale")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"self")," project is created automatically and configured as the default project in Starwhale Standalone."))}u.isMDXComponent=!0}}]);