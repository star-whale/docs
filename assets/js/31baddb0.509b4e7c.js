"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[2635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),o=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(n),m=r,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(83117),r=(n(67294),n(3905));const l={title:"swcli instance"},i=void 0,s={unversionedId:"reference/swcli/instance",id:"version-0.4.3/reference/swcli/instance",title:"swcli instance",description:"Overview",source:"@site/versioned_docs/version-0.4.3/reference/swcli/instance.md",sourceDirName:"reference/swcli",slug:"/reference/swcli/instance",permalink:"/docs/0.4.3/reference/swcli/instance",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.3/reference/swcli/instance.md",tags:[],version:"0.4.3",frontMatter:{title:"swcli instance"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/docs/0.4.3/reference/swcli/"},next:{title:"swcli project",permalink:"/docs/0.4.3/reference/swcli/project"}},c={},o=[{value:"Overview",id:"overview",level:2},{value:"swcli instance info",id:"info",level:2},{value:"swcli instance list",id:"list",level:2},{value:"swcli instance login",id:"login",level:2},{value:"swcli instance logout",id:"logout",level:2},{value:"swcli instance use",id:"use",level:2}],p={toc:o};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] instance [OPTIONS] <SUBCOMMAND> [ARGS]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"instance")," command includes the following subcommands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"login")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"logout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"use"))),(0,r.kt)("h2",{id:"info"},"swcli instance info"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] instance info [OPTIONS] <INSTANCE>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"instance info")," outputs detailed information about the specified Starwhale Instance."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"INSTANCE")," is an ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.4.3/swcli/uri#instance"},"instance URI"),"."),(0,r.kt)("h2",{id:"list"},"swcli instance list"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] instance list [OPTIONS]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"instance list")," shows all Starwhale Instances."),(0,r.kt)("h2",{id:"login"},"swcli instance login"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] instance login [OPTIONS] <INSTANCE>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"instance login")," connects to a Server/Cloud instance and makes the specified instance ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.4.3/swcli/uri#defaultInstance"},"default"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"INSTANCE")," is an ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.4.3/swcli/uri#instance"},"instance URI"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Defaults"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--username")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The login username.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--password")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The login password.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--token")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The login token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--alias")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The alias of the instance. You can use it anywhere that requires an instance URI.")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--password")," can not be used together with ",(0,r.kt)("inlineCode",{parentName:"p"},"--token"),"."),(0,r.kt)("h2",{id:"logout"},"swcli instance logout"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] instance logout [INSTANCE]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"instance logout")," disconnects from the Server/Cloud instance, and clears information stored in the local storage."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"INSTANCE")," is an ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.4.3/swcli/uri#instance"},"instance URI"),". If it is omiited, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.4.3/swcli/uri#defaultInstance"},"default instance")," is used instead."),(0,r.kt)("h2",{id:"use"},"swcli instance use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli [GLOBAL OPTIONS] instance use <INSTANCE>\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"instance use")," make the specified instance ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.4.3/swcli/uri#defaultInstance"},"default"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"INSTANCE")," is an ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.4.3/swcli/uri#instance"},"instance URI"),"."))}u.isMDXComponent=!0}}]);