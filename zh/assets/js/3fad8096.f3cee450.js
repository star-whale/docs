"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[12463],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2183:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=t(83117),a=(t(67294),t(3905));const l={title:"\u5176\u4ed6 SDK"},i=void 0,o={unversionedId:"reference/sdk/other",id:"version-0.6.5/reference/sdk/other",title:"\u5176\u4ed6 SDK",description:"\\version",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.5/reference/sdk/other.md",sourceDirName:"reference/sdk",slug:"/reference/sdk/other",permalink:"/zh/0.6.5/reference/sdk/other",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.5/reference/sdk/other.md",tags:[],version:"0.6.5",frontMatter:{title:"\u5176\u4ed6 SDK"},sidebar:"mainSidebar",previous:{title:"Starwhale \u4efb\u52a1 SDK",permalink:"/zh/0.6.5/reference/sdk/job"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh/0.6.5/faq/"}},p={},s=[{value:"__version__",id:"__version__",level:2},{value:"init_logger",id:"init_logger",level:2},{value:"login",id:"login",level:2},{value:"\u53c2\u6570",id:"login-params",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"login-example",level:3},{value:"logout",id:"logout",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"logout-example",level:3}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"__version__"},"_","_version__"),(0,a.kt)("p",null,"Starwhale Python SDK \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"swcli")," \u7248\u672c\uff0c\u662f\u5b57\u7b26\u4e32\u5e38\u91cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},">>> from starwhale import __version__\n>>> print(__version__)\n0.5.7\n")),(0,a.kt)("h2",{id:"init_logger"},"init_logger"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"init_logger")," \u7528\u6765\u8bbe\u7f6e\u65e5\u5fd7\u8f93\u51fa\u7ea7\u522b\u3002\u9ed8\u8ba4\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"0")," \u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0"),": \u8f93\u51fa ",(0,a.kt)("inlineCode",{parentName:"li"},"errors")," \u4fe1\u606f\uff0ctraceback \u5448\u73b0\u6700\u8fd1\u76841\u4e2a\u5806\u6808\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1"),": \u8f93\u51fa ",(0,a.kt)("inlineCode",{parentName:"li"},"errors")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"warnings")," \u4fe1\u606f\uff0ctraceback \u5448\u73b0\u6700\u8fd1\u76845\u4e2a\u5806\u6808\u5185\u5bb9\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"2"),": \u8f93\u51fa ",(0,a.kt)("inlineCode",{parentName:"li"},"errors")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"warnings")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"info")," \u4fe1\u606f\uff0ctrackback \u5448\u73b0\u6700\u591a10\u4e2a\u5806\u6808\u5185\u5bb9\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3"),": \u8f93\u51fa ",(0,a.kt)("inlineCode",{parentName:"li"},"errors")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"warnings")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"info")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"debug")," \u4fe1\u606f\uff0ctrackback \u5448\u73b0\u6700\u591a100\u4e2a\u5806\u6808\u5185\u5bb9\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">=4"),": \u8f93\u51fa ",(0,a.kt)("inlineCode",{parentName:"li"},"errors")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"warnings")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"info")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"debug")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"trace")," \u4fe1\u606f\uff0ctrackback \u5448\u73b0\u6700\u591a1000\u4e2a\u5806\u6808\u5185\u5bb9\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def init_logger(verbose: int = 0) -> None:\n")),(0,a.kt)("h2",{id:"login"},"login"),(0,a.kt)("p",null,"\u767b\u5f55 server/cloud \u5b9e\u4f8b\uff0c\u7b49\u4ef7\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"swcli instance login")," \u547d\u4ee4\u3002\u767b\u5f55 Standalone \u5b9e\u4f8b\u662f\u65e0\u610f\u4e49\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def login(\n    instance: str,\n    alias: str = "",\n    username: str = "",\n    password: str = "",\n    token: str = "",\n) -> None:\n')),(0,a.kt)("h3",{id:"login-params"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"instance"),": (str, required)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"server/cloud \u5b9e\u4f8b\u7684 http url\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"alias"),": (str, optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u7684\u522b\u540d\uff0c\u53ef\u4ee5\u7b80\u5316 Starwhale URI \u4e2d instance\u90e8\u5206\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u82e5\u4e0d\u6307\u5b9a\uff0c\u5219\u4f7f\u7528\u5b9e\u4f8b\u7684 http url \u4e2d hostname \u90e8\u5206\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"username"),": (str, optional)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password"),": (str, optional)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"token"),": (str, optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"username")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"password")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"token")," \u53ea\u80fd\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u767b\u5f55\u5b9e\u4f8b\u3002")))),(0,a.kt)("h3",{id:"login-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import login\n\n# login to Starwhale Cloud instance by token\nlogin(instance="https://cloud.starwhale.cn", alias="cloud-cn", token="xxx")\n\n# login to Starwhale Server instance by username and password\nlogin(instance="http://controller.starwhale.svc", alias="dev", username="starwhale", password="abcd1234")\n')),(0,a.kt)("h2",{id:"logout"},"logout"),(0,a.kt)("p",null,"\u767b\u51fa server/cloud \u5b9e\u4f8b\uff0c \u7b49\u4ef7\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"swcli isntance logout")," \u547d\u4ee4\u3002\u767b\u51fa Standalone \u5b9e\u4f8b\u662f\u65e0\u610f\u4e49\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def logout(instance: str) -> None:\n")),(0,a.kt)("h3",{id:"logout-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import login, logout\n\nlogin(instance="https://cloud.starwhale.cn", alias="cloud-cn", token="xxx")\n# logout by the alias\nlogout("cloud-cn")\n\nlogin(instance="http://controller.starwhale.svc", alias="dev", username="starwhale", password="abcd1234")\n# logout by the instance http url\nlogout("http://controller.starwhale.svc")\n')))}u.isMDXComponent=!0}}]);