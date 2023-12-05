"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(h,i(i({ref:t},m),{},{components:n})):a.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const o={title:"Names in Starwhale"},i=void 0,l={unversionedId:"concepts/names",id:"version-0.6.5/concepts/names",title:"Names in Starwhale",description:"Names mean project names, model names, dataset names, runtime names, and tag names.",source:"@site/versioned_docs/version-0.6.5/concepts/names.md",sourceDirName:"concepts",slug:"/concepts/names",permalink:"/0.6.5/concepts/names",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.5/concepts/names.md",tags:[],version:"0.6.5",frontMatter:{title:"Names in Starwhale"},sidebar:"mainSidebar",previous:{title:"Starwhale Common Concepts",permalink:"/0.6.5/concepts/"},next:{title:"Project in Starwhale",permalink:"/0.6.5/concepts/project"}},s={},c=[{value:"Names Limitation",id:"names-limitation",level:2},{value:"Names uniqueness requirement",id:"names-uniqueness-requirement",level:2}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Names mean project names, model names, dataset names, runtime names, and tag names."),(0,r.kt)("h2",{id:"names-limitation"},"Names Limitation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Names are case-insensitive."),(0,r.kt)("li",{parentName:"ul"},"A name MUST only consist of letters ",(0,r.kt)("inlineCode",{parentName:"li"},"A-Z a-z"),", digits ",(0,r.kt)("inlineCode",{parentName:"li"},"0-9"),", the hyphen character ",(0,r.kt)("inlineCode",{parentName:"li"},"-"),", the dot character ",(0,r.kt)("inlineCode",{parentName:"li"},"."),", and the underscore character ",(0,r.kt)("inlineCode",{parentName:"li"},"_"),"."),(0,r.kt)("li",{parentName:"ul"},"A name should always start with a letter or the ",(0,r.kt)("inlineCode",{parentName:"li"},"_")," character."),(0,r.kt)("li",{parentName:"ul"},"The maximum length of a name is 80.")),(0,r.kt)("h2",{id:"names-uniqueness-requirement"},"Names uniqueness requirement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The resource name should be a unique string within its owner"),". For example, the project name should be unique in the owner instance, and the model name should be unique in the owner project."),(0,r.kt)("li",{parentName:"ul"},'The resource name can not be used by any other resource of the same kind in their owner, including those removed ones. For example, Project "apple" can not have two models named "Alice", even if one of them is already removed.'),(0,r.kt)("li",{parentName:"ul"},'Different kinds of resources can have the same name. For example, a project and a model can be called "Alice" simultaneously.'),(0,r.kt)("li",{parentName:"ul"},'Resources with different owners can have the same name. For example, a model in project "Apple" and a model in project "Banana" can have the same name "Alice".'),(0,r.kt)("li",{parentName:"ul"},'Garbage-collected resources\' names can be reused. For example, after the model with the name "Alice" in project "Apple" is removed and garbage collected, the project can have a new model with the same name "Alice".')))}p.isMDXComponent=!0}}]);