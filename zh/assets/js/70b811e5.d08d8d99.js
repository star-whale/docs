"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[57350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const l={title:"\u5176\u4ed6SDK"},o=void 0,i={unversionedId:"reference/sdk/other",id:"version-0.5.0/reference/sdk/other",title:"\u5176\u4ed6SDK",description:"starwhale.\\version",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.0/reference/sdk/other.md",sourceDirName:"reference/sdk",slug:"/reference/sdk/other",permalink:"/zh/docs/reference/sdk/other",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.0/reference/sdk/other.md",tags:[],version:"0.5.0",frontMatter:{title:"\u5176\u4ed6SDK"},sidebar:"mainSidebar",previous:{title:"\u6a21\u578b\u8bc4\u6d4b",permalink:"/zh/docs/evaluation/api/sdk"},next:{title:"Starwhale\u5f00\u6e90\u8d21\u732e\u6307\u5357",permalink:"/zh/docs/community/contribute"}},s={},p=[{value:"starwhale.__version__",id:"starwhale__version__",level:2},{value:"starwhale.URI",id:"starwhaleuri",level:2},{value:"starwhale.URIType",id:"starwhaleuritype",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"starwhale__version__"},"starwhale.","_","_version__"),(0,a.kt)("p",null,"Starwhale SDK\u548cCli\u7248\u672c\uff0c\u662f\u5b57\u7b26\u4e32\u5e38\u91cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},">>> from starwhale import __version__\n>>> print(__version__)\n0.3.0rc10\n")),(0,a.kt)("h2",{id:"starwhaleuri"},"starwhale.URI"),(0,a.kt)("p",null,"starwhale uri\u7684\u7c7b\u5b9a\u4e49\uff0c\u53ef\u4ee5\u5c06\u5b57\u7b26\u4e32\u8f6c\u5316\u6210URI\u5bf9\u8c61\u3002Github\u4e0a\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/dc6e6fdeae2f7c5bd0e72ccd8fb50768b1ce0826/client/starwhale/base/uri.py"},"\u4ee3\u7801\u94fe\u63a5"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"URI(\n    raw: str,\n    expected_type: str = URIType.UNKNOWN\n)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"raw")),(0,a.kt)("td",{parentName:"tr",align:null},"starwhale uri\u7684\u5b57\u7b26\u4e32")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"expected_type")),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u5bf9\u6709\u6b67\u4e49\u7684uri\u5b57\u7b26\u4e32\u5f3a\u5236\u6307\u5b9a\u4e3a\u67d0\u79cd\u7c7b\u578b")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'>>> dataset_uri = URI("mnist/version/latest", expected_type=URIType.DATASET)\n>>> model_uri = URI("mnist/version/latest", expected_type=URIType.MODEL)\n>>> runtime_uri = URI("mnist/version/latest", expected_type=URIType.RUNTIME)\n>>> dataset_uri = URI("dataset/mnist/version/latest")\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u4f8b\u5b50\u4e2d\uff0curi\u7684\u539f\u59cb\u5b57\u7b26\u4e32\u90fd\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"mnist/version/latest"),"\uff0c\u8fd9\u662f\u4e00\u4e2a\u6709\u6b67\u4e49\u7684URI\uff0c\u4f46\u5f53\u6307\u5b9a\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"expected_type")," \u53c2\u6570\u540e\uff0c\u53ef\u4ee5\u660e\u786e\u6307\u5b9a\u4e3a\u9884\u671f\u7684URI\u3002"),(0,a.kt)("h2",{id:"starwhaleuritype"},"starwhale.URIType"),(0,a.kt)("p",null,"\u63cf\u8ff0 ",(0,a.kt)("inlineCode",{parentName:"p"},"starwhale.URI")," \u7c7b\u578b\uff0cGithub\u4e0a\u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/dc6e6fdeae2f7c5bd0e72ccd8fb50768b1ce0826/client/starwhale/base/type.py"},"\u4ee3\u7801\u94fe\u63a5"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'class URIType:\n    INSTANCE = "instance"\n    PROJECT = "project"\n    MODEL = "model"\n    DATASET = "dataset"\n    RUNTIME = "runtime"\n    EVALUATION = "evaluation"\n    UNKNOWN = "unknown"\n')))}u.isMDXComponent=!0}}]);