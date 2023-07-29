"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[1533],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(3117),i=(t(7294),t(3905));const a={title:"\u5176\u4ed6 SDK"},o=void 0,l={unversionedId:"reference/sdk/other",id:"reference/sdk/other",title:"\u5176\u4ed6 SDK",description:"\\version",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference/sdk/other.md",sourceDirName:"reference/sdk",slug:"/reference/sdk/other",permalink:"/zh/next/reference/sdk/other",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/reference/sdk/other.md",tags:[],version:"current",frontMatter:{title:"\u5176\u4ed6 SDK"},sidebar:"mainSidebar",previous:{title:"Starwhale \u6a21\u578b SDK",permalink:"/zh/next/reference/sdk/model"},next:{title:"Starwhale \u5f00\u6e90\u8d21\u732e\u6307\u5357",permalink:"/zh/next/community/contribute"}},c={},p=[{value:"__version__",id:"__version__",level:2},{value:"init_logger",id:"init_logger",level:2}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"__version__"},"_","_version__"),(0,i.kt)("p",null,"Starwhale Python SDK \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"swcli")," \u7248\u672c\uff0c\u662f\u5b57\u7b26\u4e32\u5e38\u91cf\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},">>> from starwhale import __version__\n>>> print(__version__)\n0.5.7\n")),(0,i.kt)("h2",{id:"init_logger"},"init_logger"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"init_logger")," \u7528\u6765\u8bbe\u7f6e\u65e5\u5fd7\u8f93\u51fa\u7ea7\u522b\u3002\u9ed8\u8ba4\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"0")," \u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0"),": \u8f93\u51fa ",(0,i.kt)("inlineCode",{parentName:"li"},"errors")," \u4fe1\u606f\uff0ctraceback \u5448\u73b0\u6700\u8fd1\u76841\u4e2a\u5806\u6808\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1"),": \u8f93\u51fa ",(0,i.kt)("inlineCode",{parentName:"li"},"errors")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"warnings")," \u4fe1\u606f\uff0ctraceback \u5448\u73b0\u6700\u8fd1\u76845\u4e2a\u5806\u6808\u5185\u5bb9\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2"),": \u8f93\u51fa ",(0,i.kt)("inlineCode",{parentName:"li"},"errors")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"warnings")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"info")," \u4fe1\u606f\uff0ctrackback \u5448\u73b0\u6700\u591a10\u4e2a\u5806\u6808\u5185\u5bb9\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"3"),": \u8f93\u51fa ",(0,i.kt)("inlineCode",{parentName:"li"},"errors")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"warnings")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"info")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"debug")," \u4fe1\u606f\uff0ctrackback \u5448\u73b0\u6700\u591a100\u4e2a\u5806\u6808\u5185\u5bb9\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},">=4"),": \u8f93\u51fa ",(0,i.kt)("inlineCode",{parentName:"li"},"errors")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"warnings")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"info")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"debug")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"trace")," \u4fe1\u606f\uff0ctrackback \u5448\u73b0\u6700\u591a1000\u4e2a\u5806\u6808\u5185\u5bb9\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def init_logger(verbose: int = 0) -> None:\n")))}u.isMDXComponent=!0}}]);