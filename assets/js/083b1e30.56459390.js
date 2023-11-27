"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[8098],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=t(3117),r=(t(7294),t(3905));const l={title:"Other SDK"},o=void 0,i={unversionedId:"reference/sdk/other",id:"version-0.6.5/reference/sdk/other",title:"Other SDK",description:"\\version",source:"@site/versioned_docs/version-0.6.5/reference/sdk/other.md",sourceDirName:"reference/sdk",slug:"/reference/sdk/other",permalink:"/reference/sdk/other",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.5/reference/sdk/other.md",tags:[],version:"0.6.5",frontMatter:{title:"Other SDK"},sidebar:"mainSidebar",previous:{title:"Starwhale Job SDK",permalink:"/reference/sdk/job"},next:{title:"FAQs",permalink:"/faq/"}},s={},p=[{value:"__version__",id:"__version__",level:2},{value:"init_logger",id:"init_logger",level:2},{value:"login",id:"login",level:2},{value:"Parameters",id:"login-params",level:3},{value:"Examples",id:"login-example",level:3},{value:"logout",id:"logout",level:2},{value:"Examples",id:"logout-example",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"__version__"},"_","_version__"),(0,r.kt)("p",null,"Version of Starwhale Python SDK and ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli"),", string constant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},">>> from starwhale import __version__\n>>> print(__version__)\n0.5.7\n")),(0,r.kt)("h2",{id:"init_logger"},"init_logger"),(0,r.kt)("p",null,"Initialize Starwhale logger and traceback. The default value is 0."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0"),": show only ",(0,r.kt)("inlineCode",{parentName:"li"},"errors"),", traceback only shows 1 frame."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1"),": show ",(0,r.kt)("inlineCode",{parentName:"li"},"errors")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"warnings"),", traceback shows 5 frames."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"2"),": show ",(0,r.kt)("inlineCode",{parentName:"li"},"errors")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"warnings")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"info"),", traceback shows 10 frames."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3"),": show ",(0,r.kt)("inlineCode",{parentName:"li"},"errors")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"warnings")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"info")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"debug"),", traceback shows 100 frames."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},">=4"),": show ",(0,r.kt)("inlineCode",{parentName:"li"},"errors")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"warnings")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"info")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"debug")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"trace"),", traceback shows 1000 frames.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def init_logger(verbose: int = 0) -> None:\n")),(0,r.kt)("h2",{id:"login"},"login"),(0,r.kt)("p",null,"Log in to a server/cloud instance. It is equivalent to running the ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli instance login")," command. Log in to the Standalone instance is meaningless."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def login(\n    instance: str,\n    alias: str = "",\n    username: str = "",\n    password: str = "",\n    token: str = "",\n) -> None:\n')),(0,r.kt)("h3",{id:"login-params"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"instance"),": (str, required)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The http url of the server/cloud instance."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alias"),": (str, optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"An alias for the instance to simplify the instance part of the Starwhale URI."),(0,r.kt)("li",{parentName:"ul"},"If not specified, the hostname part of the instance http url will be used."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"username"),": (str, optional)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password"),": (str, optional)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"token"),": (str, optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You can only choose one of ",(0,r.kt)("inlineCode",{parentName:"li"},"username")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"password")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"token")," to login to the instance.")))),(0,r.kt)("h3",{id:"login-example"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import login\n\n# login to Starwhale Cloud instance by token\nlogin(instance="https://cloud.starwhale.cn", alias="cloud-cn", token="xxx")\n\n# login to Starwhale Server instance by username and password\nlogin(instance="http://controller.starwhale.svc", alias="dev", username="starwhale", password="abcd1234")\n')),(0,r.kt)("h2",{id:"logout"},"logout"),(0,r.kt)("p",null,"Log out of a server/cloud instance. It is equivalent to running the ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli instance logout")," command. Log out of the Standalone instance is meaningless."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def logout(instance: str) -> None:\n")),(0,r.kt)("h3",{id:"logout-example"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import login, logout\n\nlogin(instance="https://cloud.starwhale.cn", alias="cloud-cn", token="xxx")\n# logout by the alias\nlogout("cloud-cn")\n\nlogin(instance="http://controller.starwhale.svc", alias="dev", username="starwhale", password="abcd1234")\n# logout by the instance http url\nlogout("http://controller.starwhale.svc")\n')))}u.isMDXComponent=!0}}]);