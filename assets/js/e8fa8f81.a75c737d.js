"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[61231],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return t?r.createElement(h,i(i({ref:n},m),{},{components:t})):r.createElement(h,i({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},69308:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(83117),a=(t(67294),t(3905));const o={title:"Names in Starwhale"},i=void 0,s={unversionedId:"concepts/names",id:"version-0.4.3/concepts/names",title:"Names in Starwhale",description:"Names mean project names, model names, dataset names, runtime names, and tag names.",source:"@site/versioned_docs/version-0.4.3/concepts/names.md",sourceDirName:"concepts",slug:"/concepts/names",permalink:"/docs/0.4.3/concepts/names",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.3/concepts/names.md",tags:[],version:"0.4.3",frontMatter:{title:"Names in Starwhale"},sidebar:"mainSidebar",previous:{title:"Starwhale Common Concepts",permalink:"/docs/0.4.3/concepts/"},next:{title:"Project in Starwhale",permalink:"/docs/0.4.3/concepts/project"}},l={},c=[{value:"Names Limitation",id:"names-limitation",level:2},{value:"Names uniqueness requirement",id:"names-uniqueness-requirement",level:2}],m={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Names mean project names, model names, dataset names, runtime names, and tag names."),(0,a.kt)("h2",{id:"names-limitation"},"Names Limitation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Names are case-insensitive."),(0,a.kt)("li",{parentName:"ul"},"A name MUST only consist of letters ",(0,a.kt)("inlineCode",{parentName:"li"},"A-Z a-z"),", digits ",(0,a.kt)("inlineCode",{parentName:"li"},"0-9"),", the hyphen character ",(0,a.kt)("inlineCode",{parentName:"li"},"-"),", the dot character ",(0,a.kt)("inlineCode",{parentName:"li"},"."),", and the underscore character ",(0,a.kt)("inlineCode",{parentName:"li"},"_"),"."),(0,a.kt)("li",{parentName:"ul"},"A name should always start with a letter or the ",(0,a.kt)("inlineCode",{parentName:"li"},"_")," character."),(0,a.kt)("li",{parentName:"ul"},"The maximum length of a name is 80.")),(0,a.kt)("h2",{id:"names-uniqueness-requirement"},"Names uniqueness requirement"),(0,a.kt)("p",null,"The resource name should be a unique string within its owner. For example, the project name should be unique in the owner instance, and the model name should be unique in the owner project."),(0,a.kt)("p",null,'The resource name can not be used by any other resource of the same kind in their owner, including those removed ones. For example, Project "apple" can not have two models named "Alice", even if one of them is already removed.'),(0,a.kt)("p",null,'Different kinds of resources can have the same name. For example, a project and a model can be called "Alice" simultaneously.'),(0,a.kt)("p",null,'Resources with different owners can have the same name. For example, a model in project "Apple" and a model in project "Banana" can have the same name "Alice".'),(0,a.kt)("p",null,'Garbage-collected resources\' names can be reused. For example, after the model with the name "Alice" in project "Apple" is removed and garbage collected, the project can have a new model with the same name "Alice".'))}p.isMDXComponent=!0}}]);