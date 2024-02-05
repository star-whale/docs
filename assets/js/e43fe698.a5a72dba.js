"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[40182],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(g,s(s({ref:t},c),{},{components:a})):n.createElement(g,s({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1484:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(83117),i=(a(67294),a(3905));const r={title:"Dataset Visualization"},s=void 0,o={unversionedId:"dataset/view",id:"dataset/view",title:"Dataset Visualization",description:"Starwhale Console provides visualization for datasets, supporting features such as search, filtering, data comparison, and data display, effectively displaying data such as video, audio, images, and text.",source:"@site/docs/dataset/view.md",sourceDirName:"dataset",slug:"/dataset/view",permalink:"/next/dataset/view",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/dataset/view.md",tags:[],version:"current",frontMatter:{title:"Dataset Visualization"},sidebar:"mainSidebar",previous:{title:"Dataset Loading",permalink:"/next/dataset/load"},next:{title:"Dataset Versioning",permalink:"/next/dataset/version"}},l={},p=[{value:"Video",id:"video",level:2},{value:"Images",id:"images",level:2},{value:"Audio",id:"audio",level:2},{value:"Text",id:"text",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Starwhale Console provides visualization for datasets, supporting features such as search, filtering, data comparison, and data display, effectively displaying data such as video, audio, images, and text."),(0,i.kt)("h2",{id:"video"},"Video"),(0,i.kt)("p",null,"Present ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale.Video")," objects, with playback capability."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/dataset-view/video.png",alt:"video"})),(0,i.kt)("h2",{id:"images"},"Images"),(0,i.kt)("p",null,"Present ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale.Image")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale.GrayscaleImage")," objects, and support ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale.BoundingBox")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale.COCOObjectAnnotation")," objects."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/dataset-view/image-simple.png",alt:"image-simple"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/dataset-view/image-bbox.png",alt:"image-bbox"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/dataset-view/image-mask.png",alt:"image-mask"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/dataset-view/image-mask2.png",alt:"image-mask2"})),(0,i.kt)("h2",{id:"audio"},"Audio"),(0,i.kt)("p",null,"Present ",(0,i.kt)("inlineCode",{parentName:"p"},"Starwhale.Audio")," objects, with playback capability."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/dataset-view/audio.png",alt:"audio"})),(0,i.kt)("h2",{id:"text"},"Text"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/dataset-view/text.png",alt:"text"})))}d.isMDXComponent=!0}}]);