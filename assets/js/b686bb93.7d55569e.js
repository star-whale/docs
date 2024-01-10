"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(83117),l=(n(67294),n(3905));const a={title:"Utility Commands"},i=void 0,c={unversionedId:"reference/swcli/utilities",id:"version-0.6.9/reference/swcli/utilities",title:"Utility Commands",description:"swcli gc",source:"@site/versioned_docs/version-0.6.9/reference/swcli/utilities.md",sourceDirName:"reference/swcli",slug:"/reference/swcli/utilities",permalink:"/reference/swcli/utilities",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.9/reference/swcli/utilities.md",tags:[],version:"0.6.9",frontMatter:{title:"Utility Commands"},sidebar:"mainSidebar",previous:{title:"swcli server",permalink:"/reference/swcli/server"},next:{title:"Python SDK Overview",permalink:"/reference/sdk/overview"}},o={},s=[{value:"swcli gc",id:"gc",level:2},{value:"swcli check",id:"check",level:2},{value:"swcli completion install",id:"c-install",level:2},{value:"swcli config edit",id:"config-edit",level:2},{value:"swcli ui",id:"ui",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"gc"},"swcli gc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] gc [OPTIONS]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gc")," clears removed projects, models, datasets, and runtimes according to the internal garbage collection policy."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--dry-run")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"If true, outputs objects to be removed instead of clearing them.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--yes")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"Bypass confirmation prompts.")))),(0,l.kt)("h2",{id:"check"},"swcli check"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] check\n")),(0,l.kt)("p",null,"Check if the external dependencies of the ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," command meet the requirements. Currently mainly checks Docker and Conda."),(0,l.kt)("h2",{id:"c-install"},"swcli completion install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] completion install <SHELL_NAME>\n")),(0,l.kt)("p",null,"Install autocompletion for ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," commands. Currently supports bash, zsh and fish. If SHELL_NAME is not specified, it will try to automatically detect the current shell type."),(0,l.kt)("h2",{id:"config-edit"},"swcli config edit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] config edit\n")),(0,l.kt)("p",null,"Edit the Starwhale configuration file at ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/starwhale/config.yaml"),"."),(0,l.kt)("h2",{id:"ui"},"swcli ui"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] ui <INSTANCE>\n")),(0,l.kt)("p",null,"Open the web page for the corresponding instance."))}u.isMDXComponent=!0}}]);