"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[1493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:l,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(83117),l=(n(67294),n(3905));const a={title:"\u5176\u4ed6\u547d\u4ee4"},i=void 0,c={unversionedId:"reference/swcli/utilities",id:"version-0.6.0/reference/swcli/utilities",title:"\u5176\u4ed6\u547d\u4ee4",description:"swcli gc",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.0/reference/swcli/utilities.md",sourceDirName:"reference/swcli",slug:"/reference/swcli/utilities",permalink:"/zh/0.6.0/reference/swcli/utilities",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.0/reference/swcli/utilities.md",tags:[],version:"0.6.0",frontMatter:{title:"\u5176\u4ed6\u547d\u4ee4"},sidebar:"mainSidebar",previous:{title:"swcli job",permalink:"/zh/0.6.0/reference/swcli/job"},next:{title:"Python SDK \u6982\u89c8",permalink:"/zh/0.6.0/reference/sdk/overview"}},o={},s=[{value:"swcli gc",id:"gc",level:2},{value:"swcli check",id:"check",level:2},{value:"swcli completion install",id:"c-install",level:2},{value:"swcli config edit",id:"config-edit",level:2},{value:"swcli ui",id:"ui",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"gc"},"swcli gc"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] gc [\u9009\u9879]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gc"),"\u6839\u636e\u5185\u90e8\u7684\u5783\u573e\u56de\u6536\u7b56\u7565\u6e05\u7406\u5df2\u7ecf\u88ab\u5220\u9664\u7684\u9879\u76ee\u3001\u6a21\u578b\u3001\u6570\u636e\u96c6\u548c\u8fd0\u884c\u65f6\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u586b\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--dry-run")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e3a\u771f\uff0c\u4ec5\u8f93\u51fa\u5c06\u88ab\u5220\u9664\u7684\u5bf9\u8c61\u800c\u4e0d\u6e05\u7406\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--yes")),(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8df3\u8fc7\u6240\u6709\u9700\u8981\u786e\u8ba4\u7684\u9879\u76ee\u3002")))),(0,l.kt)("h2",{id:"check"},"swcli check"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] check\n")),(0,l.kt)("p",null,"\u68c0\u67e5 ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," \u547d\u4ee4\u7684\u5916\u90e8\u4f9d\u8d56\u662f\u5426\u6ee1\u8db3\u6761\u4ef6\uff0c\u76ee\u524d\u4e3b\u8981\u68c0\u67e5 Docker \u548c Conda\u3002"),(0,l.kt)("h2",{id:"c-install"},"swcli completion install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] completion install <SHELL_NAME>\n")),(0,l.kt)("p",null,"\u5b89\u88c5 ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," \u547d\u4ee4\u8865\u5168\uff0c\u76ee\u524d\u652f\u6301 bash, zsh \u548c fish\u3002\u5982\u679c\u4e0d\u6307\u5b9a SHELL_NAME\uff0c\u5219\u5c1d\u8bd5\u4e3b\u52a8\u63a2\u6d4b\u5f53\u524dshell\u7c7b\u578b\u3002"),(0,l.kt)("h2",{id:"config-edit"},"swcli config edit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] config edit\n")),(0,l.kt)("p",null,"\u7f16\u8f91 Starwhale \u914d\u7f6e\u6587\u4ef6\uff0c\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/starwhale/config.yaml")," \u3002"),(0,l.kt)("h2",{id:"ui"},"swcli ui"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [\u5168\u5c40\u9009\u9879] ui <INSTANCE>\n")),(0,l.kt)("p",null,"\u6253\u5f00\u5bf9\u5e94\u5b9e\u4f8b\u7684Web\u9875\u9762\u3002"))}u.isMDXComponent=!0}}]);