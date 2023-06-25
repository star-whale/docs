"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[16225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const i={title:"\u6982\u8ff0"},l=void 0,o={unversionedId:"reference/swcli/index",id:"version-0.4.6/reference/swcli/index",title:"\u6982\u8ff0",description:"\u4f7f\u7528\u65b9\u5f0f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.6/reference/swcli/index.md",sourceDirName:"reference/swcli",slug:"/reference/swcli/",permalink:"/zh/docs/0.4.6/reference/swcli/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.6/reference/swcli/index.md",tags:[],version:"0.4.6",frontMatter:{title:"\u6982\u8ff0"},sidebar:"mainSidebar",previous:{title:"Starwhale Runtime User Guide",permalink:"/zh/docs/0.4.6/userguide/runtime"},next:{title:"swcli instance",permalink:"/zh/docs/0.4.6/reference/swcli/instance"}},c={},p=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u5168\u5c40\u9009\u9879",id:"global-option",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u9009\u9879] <COMMAND> [\u53c2\u6570]...\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"swcli"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"sw"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"starwhale"),"\u4e09\u4e2a\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u4e00\u6837\u7684\u3002")),(0,a.kt)("h2",{id:"global-option"},"\u5168\u5c40\u9009\u9879"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--version")),(0,a.kt)("td",{parentName:"tr",align:null},"\u663e\u793aswcli\u7684\u7248\u672c\u4fe1\u606f\u3002"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--verbose"),"\u6216",(0,a.kt)("inlineCode",{parentName:"td"},"-v")),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u4e2d\u8f93\u51fa\u66f4\u591a\u4fe1\u606f\uff0c\u5f53 ",(0,a.kt)("inlineCode",{parentName:"td"},"-v")," \u53c2\u6570\u8d8a\u591a\uff0c\u5448\u73b0\u4fe1\u606f\u8d8a\u591a\uff0c\u6700\u591a\u652f\u63014\u4e2a ",(0,a.kt)("inlineCode",{parentName:"td"},"-v")," \u53c2\u6570\u3002"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--help")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f93\u51fa\u547d\u4ee4\u5e2e\u52a9\u4fe1\u606f\u3002"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5168\u5c40\u53c2\u6570\u9700\u8981\u8ddf\u5728swcli\u4e4b\u540e\uff0c\u547d\u4ee4\u4e4b\u524d\u3002")),(0,a.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/0.4.6/reference/swcli/instance"},(0,a.kt)("inlineCode",{parentName:"a"},"swcli instance"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/0.4.6/reference/swcli/project"},(0,a.kt)("inlineCode",{parentName:"a"},"swcli project"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/0.4.6/reference/swcli/model"},(0,a.kt)("inlineCode",{parentName:"a"},"swcli model"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/0.4.6/reference/swcli/dataset"},(0,a.kt)("inlineCode",{parentName:"a"},"swcli dataset"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/0.4.6/reference/swcli/runtime"},(0,a.kt)("inlineCode",{parentName:"a"},"swcli runtime"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/0.4.6/reference/swcli/job"},(0,a.kt)("inlineCode",{parentName:"a"},"swcli job"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/0.4.6/reference/swcli/utilities#gc"},(0,a.kt)("inlineCode",{parentName:"a"},"swcli gc")))))}d.isMDXComponent=!0}}]);