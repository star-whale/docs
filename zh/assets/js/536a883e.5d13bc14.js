"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[48013],{3905:(t,n,e)=>{e.d(n,{Zo:()=>o,kt:()=>m});var a=e(67294);function l(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){l(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,a,l=function(t,n){if(null==t)return{};var e,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||(l[e]=t[e]);return l}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var p=a.createContext({}),c=function(t){var n=a.useContext(p),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},o=function(t){var n=c(t.components);return a.createElement(p.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(t,n){var e=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,o=s(t,["components","mdxType","originalType","parentName"]),u=c(e),m=l,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return e?a.createElement(k,i(i({ref:n},o),{},{components:e})):a.createElement(k,i({ref:n},o))}));function m(t,n){var e=arguments,l=n&&n.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=t,s.mdxType="string"==typeof t?t:l,i[1]=s;for(var c=2;c<r;c++)i[c]=e[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}u.displayName="MDXCreateElement"},71105:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=e(83117),l=(e(67294),e(3905));const r={title:"Instance\u547d\u4ee4"},i=void 0,s={unversionedId:"instances/standalone/api/instance_cli",id:"version-0.4.5/instances/standalone/api/instance_cli",title:"Instance\u547d\u4ee4",description:"\u57fa\u672c\u4fe1\u606f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.5/instances/standalone/api/instance_cli.md",sourceDirName:"instances/standalone/api",slug:"/instances/standalone/api/instance_cli",permalink:"/zh/docs/0.4.5/instances/standalone/api/instance_cli",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.5/instances/standalone/api/instance_cli.md",tags:[],version:"0.4.5",frontMatter:{title:"Instance\u547d\u4ee4"},sidebar:"mainSidebar",previous:{title:".swignore\u6587\u4ef6",permalink:"/zh/docs/0.4.5/instances/standalone/guides/swignore"},next:{title:"Project\u547d\u4ee4",permalink:"/zh/docs/0.4.5/instances/standalone/api/project_cli"}},p={},c=[{value:"\u57fa\u672c\u4fe1\u606f",id:"\u57fa\u672c\u4fe1\u606f",level:2},{value:"\u767b\u9646Instance",id:"\u767b\u9646instance",level:2},{value:"\u767b\u51faInstance",id:"\u767b\u51fainstance",level:2},{value:"\u67e5\u770bInstance\u8be6\u7ec6\u4fe1\u606f",id:"\u67e5\u770binstance\u8be6\u7ec6\u4fe1\u606f",level:2},{value:"\u5c55\u793aInstance\u5217\u8868",id:"\u5c55\u793ainstance\u5217\u8868",level:2},{value:"\u9009\u62e9\u9ed8\u8ba4Instance",id:"\u9009\u62e9\u9ed8\u8ba4instance",level:2}],o={toc:c};function d(t){let{components:n,...r}=t;return(0,l.kt)("wrapper",(0,a.Z)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u57fa\u672c\u4fe1\u606f"},"\u57fa\u672c\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli instance [OPTIONS] COMMAND [ARGS]\n")),(0,l.kt)("p",null,"instance\u547d\u4ee4\u63d0\u4f9b\u57fa\u672c\u7684Instance\u7ba1\u7406\uff0c\u5305\u62ec\u767b\u9646\u3001\u67e5\u770b\u672c\u5730Instance\u5217\u8868\u7b49\u64cd\u4f5c\u3002\u5df2\u7ecf\u767b\u9646\u7684Instance\u4fe1\u606f\u4f1a\u5b58\u50a8\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/starwhale/config.yaml")," \u6587\u4ef6\u4e2d\u3002Cloud Instance\u7684\u6240\u6709\u64cd\u4f5c\u90fd\u9700\u8981\u5148\u8fdb\u884c\u767b\u5f55\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Instance URI"),"\u683c\u5f0f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"local"),"\uff1astandalone instance."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[http(s)://]<hostname or ip>[:<port>]"),"\uff1a\u901a\u8fc7http/https\u534f\u8bae\u6307\u5b9a\u7684Cloud Instance\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[cloud://]<cloud alias>"),"\uff1a\u901a\u8fc7\u767b\u9646\u9636\u6bb5\u6307\u5b9a\u7684alias\u540d\u5b57\u8bbf\u95eeCloud Instance\u3002")),(0,l.kt)("p",null,"instance\u5305\u542b\u5982\u4e0b\u5b50\u547d\u4ee4\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u522b\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"Standalone"),(0,l.kt)("th",{parentName:"tr",align:null},"Cloud"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"login"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logout"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"select"),(0,l.kt)("td",{parentName:"tr",align:null},"use"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"list"),(0,l.kt)("td",{parentName:"tr",align:null},"ls"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"info"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,l.kt)("h2",{id:"\u767b\u9646instance"},"\u767b\u9646Instance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli instance login [OPTIONS] [INSTANCE]\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli instance login --username starwhale --password abcd1234 http://console.pre.intra.starwhale.ai --alias pre-k8s\n\ud83d\udc68\u200d\ud83c\udf73 login http://console.pre.intra.starwhale.ai successfully!\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"instance login")," \u547d\u4ee4\u7528\u6765\u767b\u9646\u8fdc\u7aef\u7684Cloud Instance\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"INSTANCE")," \u53c2\u6570\u4e3aInstance URI\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u4f7f\u7528\u9ed8\u8ba4\u9009\u62e9\u7684Instance\u3002\u767b\u9646\u7684\u65f6\u5019\u4efb\u610f\u9009\u62e9\u7528\u6237\u540d+\u5bc6\u7801\u6216Token\u4e00\u79cd\u65b9\u5f0f\u5373\u53ef\u3002\u6210\u529f\u767b\u9646\u540e\uff0c\u4f1a\u5c06\u767b\u9646\u4fe1\u606f\u5199\u5165\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/starwhale/config.yaml")," \u6587\u4ef6\u4e2d\u3002\u767b\u9646\u8fc7\u671f\u65f6\u95f4\u9ed8\u8ba4\u4e3a1\u4e2a\u6708\uff0c\u53ef\u4ee5\u5728Cloud Instance\u4e2d\u8fdb\u884c\u8bbe\u7f6e\u3002\u9700\u8981\u6ce8\u610f\u7684\u65f6\uff0cStandalone Instance\u65e0\u9700\u767b\u9646\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u522b\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u8981\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--username")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u9646\u7528\u6237\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--password")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u9646\u5bc6\u7801")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--token")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u767b\u9646Token\uff0c\u53ef\u4ee5\u5728Cloud Instance\u7684Web\u9875\u9762\u4e2d\u83b7\u53d6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--alias")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"\u767b\u51fainstance"},"\u767b\u51faInstance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli instance logout [INSTANCE]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"instance logout")," \u547d\u4ee4\u7528\u6765\u9000\u51fa\u5df2\u767b\u5f55\u7684Instance\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"INSTANCE")," \u53c2\u6570\u662fInstance URI\u3002\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSTANCE")," \u53c2\u6570\u4e0d\u6307\u5b9a\u65f6\uff0c\u4f1a\u9000\u51fa\u9ed8\u8ba4\u9009\u5b9a\u7684Instance\u3002\u9700\u8981\u6ce8\u610f\u7684\u65f6\uff0cStandalone Instance\u65e0\u9700\u767b\u51fa\u3002"),(0,l.kt)("h2",{id:"\u67e5\u770binstance\u8be6\u7ec6\u4fe1\u606f"},"\u67e5\u770bInstance\u8be6\u7ec6\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli instance info [INSTANCE]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"instance info")," \u547d\u4ee4\u8f93\u51faInstance\u7684\u8be6\u7ec6\u4fe1\u606f\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"INSTANCE")," \u53c2\u6570\u662fInstance URI\u3002\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSTANCE")," \u53c2\u6570\u4e0d\u6307\u5b9a\u65f6\uff0c\u4f1a\u9000\u51fa\u9ed8\u8ba4\u9009\u5b9a\u7684Instance\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"instance-info.png",src:e(63156).Z,width:"2541",height:"488"})),(0,l.kt)("h2",{id:"\u5c55\u793ainstance\u5217\u8868"},"\u5c55\u793aInstance\u5217\u8868"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli instance list\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"instance list")," \u547d\u4ee4\u5c55\u793aStandalone Instance\u548c\u6240\u6709\u5df2\u7ecf\u767b\u9646\u7684Cloud Instance\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"instance-list.png",src:e(71037).Z,width:"2549",height:"313"})),(0,l.kt)("h2",{id:"\u9009\u62e9\u9ed8\u8ba4instance"},"\u9009\u62e9\u9ed8\u8ba4Instance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli instance select INSTANCE\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"instance select")," \u547d\u4ee4\u9009\u62e9\u672c\u673a\u9ed8\u8ba4\u7684Instance\u3002\u5728\u5176\u4ed6\u79cd\u7c7b\u7684URI\u4e2d\uff0c\u5982\u679c\u7701\u7565instance\u5b57\u6bb5\uff0c\u5c31\u4f1a\u6839\u636e\u6b64\u5904select\u7684instance\u8fdb\u884c\u586b\u5145\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"INSTANCE")," \u53c2\u6570\u4e3aInstance URI\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli instance select local\n\ud83d\udc4f select local instance\n\u276f swcli instance select pre-k8s\n\ud83d\udc4f select pre-k8s instance\n")))}d.isMDXComponent=!0},63156:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/instance-info-dff1c8f64ee21519a178d1179dd054e5.png"},71037:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/instance-list-76847201e900469d6192c0e23baf055d.png"}}]);