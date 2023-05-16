"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[3089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(83117),a=(n(67294),n(3905));const i={title:"Overview"},l=void 0,o={unversionedId:"reference/swcli/index",id:"version-0.4.4/reference/swcli/index",title:"Overview",description:"Usage",source:"@site/versioned_docs/version-0.4.4/reference/swcli/index.md",sourceDirName:"reference/swcli",slug:"/reference/swcli/",permalink:"/docs/0.4.4/reference/swcli/",draft:!1,editUrl:"https://github.com/star-whale/starwhale/tree/main/docs/versioned_docs/version-0.4.4/reference/swcli/index.md",tags:[],version:"0.4.4",frontMatter:{title:"Overview"},sidebar:"mainSidebar",previous:{title:"Starwhale Runtime User Guide",permalink:"/docs/0.4.4/userguide/runtime"},next:{title:"swcli instance",permalink:"/docs/0.4.4/reference/swcli/instance"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Global Options",id:"global-option",level:2},{value:"Commands",id:"commands",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [OPTIONS] <COMMAND> [ARGS]...\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"sw")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"starwhale")," are aliases for ",(0,a.kt)("inlineCode",{parentName:"p"},"swcli"),".")),(0,a.kt)("h2",{id:"global-option"},"Global Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--version")),(0,a.kt)("td",{parentName:"tr",align:null},"Show the Starwhale Client version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"-v")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"--verbose")),(0,a.kt)("td",{parentName:"tr",align:null},"Show verbose log, support multi counts for ",(0,a.kt)("inlineCode",{parentName:"td"},"-v")," args. More ",(0,a.kt)("inlineCode",{parentName:"td"},"-v")," args, more logs.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"--help")),(0,a.kt)("td",{parentName:"tr",align:null},"Show the help message.")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Global options must be put immediately after ",(0,a.kt)("inlineCode",{parentName:"p"},"swcli"),", and before any command.")),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.4.4/reference/swcli/instance"},(0,a.kt)("inlineCode",{parentName:"a"},"swcli instance"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.4.4/reference/swcli/project"},(0,a.kt)("inlineCode",{parentName:"a"},"swcli project"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.4.4/reference/swcli/model"},(0,a.kt)("inlineCode",{parentName:"a"},"swcli model"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.4.4/reference/swcli/dataset"},(0,a.kt)("inlineCode",{parentName:"a"},"swcli dataset"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.4.4/reference/swcli/runtime"},(0,a.kt)("inlineCode",{parentName:"a"},"swcli runtime"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.4.4/reference/swcli/job"},(0,a.kt)("inlineCode",{parentName:"a"},"swcli job"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.4.4/reference/swcli/utilities#gc"},(0,a.kt)("inlineCode",{parentName:"a"},"swcli gc")))))}m.isMDXComponent=!0}}]);