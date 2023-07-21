"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var i=2;i<l;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=n(83117),r=(n(67294),n(3905));const l={title:"Project\u547d\u4ee4"},p=void 0,o={unversionedId:"instances/standalone/api/project_cli",id:"version-0.5.0/instances/standalone/api/project_cli",title:"Project\u547d\u4ee4",description:"\u57fa\u672c\u4fe1\u606f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.0/instances/standalone/api/project_cli.md",sourceDirName:"instances/standalone/api",slug:"/instances/standalone/api/project_cli",permalink:"/zh/0.5.0/instances/standalone/api/project_cli",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.0/instances/standalone/api/project_cli.md",tags:[],version:"0.5.0",frontMatter:{title:"Project\u547d\u4ee4"},sidebar:"mainSidebar",previous:{title:"Instance\u547d\u4ee4",permalink:"/zh/0.5.0/instances/standalone/api/instance_cli"},next:{title:"\u5168\u5c40\u7ba1\u7406\u547d\u4ee4",permalink:"/zh/0.5.0/instances/standalone/api/utilities_cli"}},c={},i=[{value:"\u57fa\u672c\u4fe1\u606f",id:"\u57fa\u672c\u4fe1\u606f",level:2},{value:"\u521b\u5efaProject",id:"\u521b\u5efaproject",level:2},{value:"\u67e5\u770bProject\u8be6\u7ec6\u4fe1\u606f",id:"\u67e5\u770bproject\u8be6\u7ec6\u4fe1\u606f",level:2},{value:"\u5c55\u793aProject\u5217\u8868",id:"\u5c55\u793aproject\u5217\u8868",level:2},{value:"\u5220\u9664Project",id:"\u5220\u9664project",level:2},{value:"\u6062\u590d\u8f6f\u5220\u9664\u7684Project",id:"\u6062\u590d\u8f6f\u5220\u9664\u7684project",level:2},{value:"\u9009\u62e9\u5f53\u524dInstance\u4e0b\u9ed8\u8ba4\u7684Project",id:"\u9009\u62e9\u5f53\u524dinstance\u4e0b\u9ed8\u8ba4\u7684project",level:2}],s={toc:i};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u57fa\u672c\u4fe1\u606f"},"\u57fa\u672c\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli project [OPTIONS] COMMAND [ARGS]...\n")),(0,r.kt)("p",null,"project\u547d\u4ee4\u63d0\u4f9b\u9002\u7528\u4e8eStandalone Instance\u548cCloud Instance\u7684Starwhale Project\u5168\u751f\u547d\u5468\u671f\u7684\u7ba1\u7406\uff0c\u5305\u62ec\u521b\u5efa\u3001\u67e5\u770b\u3001\u9009\u62e9\u9ed8\u8ba4Project\u7b49\u529f\u80fd\u3002\u5728Standalone Instance\u4e2d\uff0cproject \u4ee3\u8868\u5728 ROOTDIR\u4e0b\u7684\u4e00\u4e2a\u76ee\u5f55\uff0c\u91cc\u9762\u5b58\u50a8Runtime\u3001Model\u3001Dataset\u3001Job\u7b49\u4fe1\u606f\uff0cROOTDIR\u9ed8\u8ba4\u8def\u5f84\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.starwhale")," \u3002project\u547d\u4ee4\u901a\u8fc7HTTP API\u5bf9Cloud Instance\u5bf9\u8c61\u8fdb\u884c\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Project URI"),"\u683c\u5f0f: ",(0,r.kt)("inlineCode",{parentName:"p"},"[<Instance URI>/project]<project name>"),"\u3002"),(0,r.kt)("p",null,"project\u5305\u542b\u5982\u4e0b\u5b50\u547d\u4ee4\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u522b\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"Standalone"),(0,r.kt)("th",{parentName:"tr",align:null},"Cloud"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create"),(0,r.kt)("td",{parentName:"tr",align:null},"new,add"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"ls"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remove"),(0,r.kt)("td",{parentName:"tr",align:null},"rm"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recover"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"select"),(0,r.kt)("td",{parentName:"tr",align:null},"use"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,r.kt)("h2",{id:"\u521b\u5efaproject"},"\u521b\u5efaProject"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli project create PROJECT\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"project create")," \u547d\u4ee4\u80fd\u591f\u521b\u5efa\u4e00\u4e2a\u65b0\u7684Project\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT")," \u53c2\u6570\u4e3aProject URI\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli project create myproject\n\ud83d\udc4f do successfully\n\u276f swcli project create myproject\n\ud83e\udd3f failed to run, reason:/home/liutianwei/.cache/starwhale/myproject was already existed\n")),(0,r.kt)("h2",{id:"\u67e5\u770bproject\u8be6\u7ec6\u4fe1\u606f"},"\u67e5\u770bProject\u8be6\u7ec6\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli project info PROJECT\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"project info")," \u547d\u4ee4\u8f93\u51faProject\u8be6\u7ec6\u4fe1\u606f\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT")," \u53c2\u6570\u4e3aProject URI\u3002"),(0,r.kt)("h2",{id:"\u5c55\u793aproject\u5217\u8868"},"\u5c55\u793aProject\u5217\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli project list [OPTIONS]\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"project list")," \u547d\u4ee4\u8f93\u51fa\u5f53\u524d\u9009\u5b9aInstance\u7684Project\u5217\u8868\uff0c\u547d\u4ee4\u53c2\u6570\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u522b\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u8981\u6027"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--instance")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-i")),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"swcli instance select")," \u9009\u5b9a\u7684Instance"),(0,r.kt)("td",{parentName:"tr",align:null},"Instance URI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--page")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Cloud Instance\u4e2d\u5206\u9875\u663e\u793a\u4e2dpage\u5e8f\u53f7\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--size")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"Cloud Instance\u4e2d\u5206\u9875\u663e\u793a\u4e2d\u6bcf\u9875\u6570\u91cf\u3002")))),(0,r.kt)("h2",{id:"\u5220\u9664project"},"\u5220\u9664Project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli project remove PROJECT\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"project remove")," \u547d\u4ee4\u8f6f\u5220\u9664Project\uff0c\u5728\u6ca1\u6709GC\u4e4b\u524d\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli project recover")," \u547d\u4ee4\u8fdb\u884c\u6062\u590d\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT")," \u53c2\u6570\u4e3aProject URI\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli project remove myproject\n\ud83d\udc36 remove project myproject. You can recover it, don't panic.\n")),(0,r.kt)("h2",{id:"\u6062\u590d\u8f6f\u5220\u9664\u7684project"},"\u6062\u590d\u8f6f\u5220\u9664\u7684Project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli project recover PROJECT\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"project recover")," \u547d\u4ee4\u6062\u590d\u8f6f\u5220\u9664\u7684Project\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT")," \u53c2\u6570\u4e3aProject URI\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli project recover myproject\n\ud83d\udc4f recover project myproject\n")),(0,r.kt)("h2",{id:"\u9009\u62e9\u5f53\u524dinstance\u4e0b\u9ed8\u8ba4\u7684project"},"\u9009\u62e9\u5f53\u524dInstance\u4e0b\u9ed8\u8ba4\u7684Project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli project select PROJECT\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"project select")," \u547d\u4ee4\u9009\u62e9\u5f53\u524dInstance\u4e0b\u9ed8\u8ba4\u7684Project\uff0c\u8bbe\u7f6e\u540e\u5982\u679c\u7701\u7565Model URI\u3001Runtime URI\u3001Dataset URI\u4e2d\u7684project \u5b57\u6bb5\uff0c\u5c31\u4f1a\u6839\u636eInstance\u5bf9\u5e94\u7684\u9ed8\u8ba4Project\u8fdb\u884c\u586b\u5145\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"PROJECT")," \u53c2\u6570\u4e3aProject URI\u3002\u5bf9\u4e8eCloud Instance\uff0c\u9700\u8981\u9996\u9009\u767b\u9646Instance\u624d\u80fd\u8fdb\u884cproject select\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli project select local/project/self\n\ud83d\udc4f select instance:local, project:self successfully\n")))}d.isMDXComponent=!0}}]);