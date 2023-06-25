"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[6100],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8419:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(83117),n=(a(67294),a(3905));const o={title:"Starwhale Dataset User Guide"},i=void 0,s={unversionedId:"dataset/index",id:"version-0.4.6/dataset/index",title:"Starwhale Dataset User Guide",description:"Starwhale organizes data into datasets. A Starwhale dataset is composed by data elements. Each element has its own ID that uniquely identifies itself. Starwhale supports the following data elements types:",source:"@site/versioned_docs/version-0.4.6/dataset/index.md",sourceDirName:"dataset",slug:"/dataset/",permalink:"/zh/docs/0.4.6/dataset/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.6/dataset/index.md",tags:[],version:"0.4.6",frontMatter:{title:"Starwhale Dataset User Guide"}},l={},c=[],d={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Starwhale organizes data into datasets. A Starwhale dataset is composed by data elements. Each element has its own ID that uniquely identifies itself. Starwhale supports the following data elements types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Image"),(0,n.kt)("li",{parentName:"ul"},"Audio"),(0,n.kt)("li",{parentName:"ul"},"Video"),(0,n.kt)("li",{parentName:"ul"},"Text"),(0,n.kt)("li",{parentName:"ul"},"Binary")),(0,n.kt)("p",null,"Data elements can have annotations that store additional information of data elements. For example, labels are stored in annotations."),(0,n.kt)("p",null,"You can go throught all data elements in a Starwhale dataset by scanning with Starwhale SDK. Model evaluation in Starwhale is implemented in this way. Another typical scenario is to process all data with a specific model to generate some labels. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"scan"},"Scan a Starwhale dataset"),"."),(0,n.kt)("p",null,"You can view, sort, and filter a Starwhale dataset in the web UI. All element types are supported by the default dataset viewer in Starwhale Server/Cloud. To learn how to do it, See ","[TODO]","."),(0,n.kt)("p",null,"To create/update a dataset, see ",(0,n.kt)("a",{parentName:"p",href:"creation"},"Create/update a Starwhale dataset")," for details."),(0,n.kt)("p",null,"Starwhale datasets are versioned. This feature helps you to keep track of all modifications of a dataset. And you can always run your model evaluation by specifying a specific dataset version, regardless of any future changes to the dataset. In this way, model evaluations in Starwhale are stable and comparatable. For more information about versioning in Starwhale, see ",(0,n.kt)("a",{parentName:"p",href:"../common/versioning"},"Resource versioning in Starwhale"),"."),(0,n.kt)("p",null,"The Starwhale Client (SWCLI) provides dataset related commands. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"../references/swcli/dataset"},"SWCLI reference guide"),"."))}p.isMDXComponent=!0}}]);