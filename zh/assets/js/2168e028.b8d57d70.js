"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[1845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(3117),l=(n(7294),n(3905));const r={title:"\u5168\u5c40\u7ba1\u7406\u547d\u4ee4"},i=void 0,o={unversionedId:"instances/standalone/api/utilities_cli",id:"instances/standalone/api/utilities_cli",title:"\u5168\u5c40\u7ba1\u7406\u547d\u4ee4",description:"\u7ec8\u7aefUI",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/instances/standalone/api/utilities_cli.md",sourceDirName:"instances/standalone/api",slug:"/instances/standalone/api/utilities_cli",permalink:"/zh/next/instances/standalone/api/utilities_cli",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/instances/standalone/api/utilities_cli.md",tags:[],version:"current",frontMatter:{title:"\u5168\u5c40\u7ba1\u7406\u547d\u4ee4"}},s={},c=[{value:"\u7ec8\u7aefUI",id:"\u7ec8\u7aefui",level:2},{value:"\u5783\u573e\u56de\u6536",id:"\u5783\u573e\u56de\u6536",level:2},{value:"\u5feb\u901f\u6253\u5f00UI\u754c\u9762",id:"\u5feb\u901f\u6253\u5f00ui\u754c\u9762",level:2},{value:"\u547d\u4ee4\u63d0\u793a\u8865\u5168",id:"\u547d\u4ee4\u63d0\u793a\u8865\u5168",level:2},{value:"\u73af\u5883\u68c0\u67e5",id:"\u73af\u5883\u68c0\u67e5",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7ec8\u7aefui"},"\u7ec8\u7aefUI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli board\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"board")," \u547d\u4ee4\u63d0\u4f9b\u4e00\u79cd\u4ea4\u4e92\u5f0f\u7684\u7ec8\u7aefUI\uff0c\u8be5\u529f\u80fd\u76ee\u524d\u4ecd\u5904\u4e8ePreview\u9636\u6bb5\uff0c\u540e\u7eed\u4f1a\u9010\u6b65\u5b8c\u5584\u3002\u76ee\u524d\u652f\u6301\u7684\u952e\u76d8\u6620\u5c04\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"M")," -> Starwhale Model"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"D")," -> Starwhale Dataset"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"R")," -> Starwhale Runtime"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"J")," -> Evaluation Job"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl+C")," -> \u9000\u51faBoard\u754c\u9762")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"board.gif",src:n(2059).Z,width:"2522",height:"1368"})),(0,l.kt)("h2",{id:"\u5783\u573e\u56de\u6536"},"\u5783\u573e\u56de\u6536"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli gc [OPTIONS]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"gc")," \u547d\u4ee4\u80fd\u591f\u5bf9Standalone\u672c\u5730\u73af\u5883\u8fdb\u884c\u5783\u573e\u56de\u6536\uff0c\u76ee\u524d\u4e3b\u8981\u662f\u5bf9\u8f6f\u5220\u9664\u7684Model\u3001Runtime\u548cDataset\u505a\u8fdb\u4e00\u6b65\u6e05\u7406\u3002\u5176\u4ed6\u53c2\u6570\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u522b\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u8981\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--dry-run")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u505a\u771f\u6b63\u7684\u6e05\u7406\uff0c\u53ea\u662f\u5c06\u5f85\u6e05\u7406\u5185\u5bb9\u8f93\u51fa\u5230\u7ec8\u7aef\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--yes")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u5f85\u786e\u8ba4\u7684\u8f93\u5165\u90fd\u662fYes")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"gc.gif",src:n(2599).Z,width:"2521",height:"1368"})),(0,l.kt)("h2",{id:"\u5feb\u901f\u6253\u5f00ui\u754c\u9762"},"\u5feb\u901f\u6253\u5f00UI\u754c\u9762"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli ui [INSTANCE]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ui")," \u547d\u4ee4\u53ef\u4ee5\u62c9\u8d77\u672c\u5730\u6d4f\u89c8\u5668\u5e76\u8fdb\u5165\u5230\u5bf9\u5e94\u7684Cloud Instance Web\u9875\u9762\u4e2d\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"INSTANCE")," \u53c2\u6570\u4e3aInstance URI\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\uff0c\u5219\u4f1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli instance select")," \u9009\u5b9a\u7684\u9ed8\u8ba4instance\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"open-ui.gif",src:n(4710).Z,width:"2521",height:"1368"})),(0,l.kt)("h2",{id:"\u547d\u4ee4\u63d0\u793a\u8865\u5168"},"\u547d\u4ee4\u63d0\u793a\u8865\u5168"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli completion show [[bash|zsh|fish]]\nswcli completion install [[bash|zsh|fish]]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"completion show")," \u547d\u4ee4\u80fd\u8f93\u51fabash|zsh|fish\u7ec8\u7aef\u7684\u8865\u5168\u547d\u4ee4\uff0c\u4fbf\u4e8e\u505a\u68c0\u67e5\u3002\u5982\u679c\u4e0d\u6307\u5b9ashell\u7c7b\u578b\uff0c\u5219\u4f1a\u81ea\u52a8\u8bc6\u522b\u5f53\u524dshell\u73af\u5883\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f swcli completion show\neval "$(_SWCLI_COMPLETE=zsh_source swcli)"\n\u276f swcli completion show zsh\neval "$(_SWCLI_COMPLETE=zsh_source swcli)"\n\u276f swcli completion show bash\neval "$(_SWCLI_COMPLETE=bash_source swcli)"\n\u276f swcli completion show fish\neval (env _SWCLI_COMPLETE=fish_source swcli)\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"completion install")," \u547d\u4ee4\u80fd\u591f\u5bf9bash|zsh|fish\u7ec8\u7aef\u5b89\u88c5swcli\u7684\u8865\u5168\u547d\u4ee4\u3002\u5982\u679c\u4e0d\u6307\u5b9ashell\u7c7b\u578b\uff0c\u5219\u4f1a\u81ea\u52a8\u8bc6\u522b\u5f53\u524dshell\u73af\u5883\u3002\u6267\u884c\u5b8c\u547d\u4ee4\u540e\uff0c\u91cd\u65b0\u6253\u5f00shell\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528swcli\u7684\u547d\u4ee4\u8865\u5168\u529f\u80fd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli completion install\n\ud83d\udc4f swcli zsh completion installed in /home/liutianwei/.zshrc\n\ud83c\udf7a run exec zsh command to activate shell completion\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"completion.gif",src:n(2988).Z,width:"2521",height:"1368"})),(0,l.kt)("h2",{id:"\u73af\u5883\u68c0\u67e5"},"\u73af\u5883\u68c0\u67e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli check\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"check")," \u547d\u4ee4\u80fd\u591f\u68c0\u67e5swcli\u6240\u5728\u673a\u5668\u73af\u5883\u7684\u5916\u90e8\u4f9d\u8d56\u53ca\u5176\u7248\u672c\u662f\u5426\u6ee1\u8db3\u8981\u6c42\uff0c\u5982\u679c\u4e0d\u6ee1\u8db3\u4f1a\u63d0\u793a\u76f8\u5173\u9519\u8bef\u53ca\u89e3\u51b3\u65b9\u6cd5\u3002\u4e0b\u9762\u4f8b\u5b50\u4e2d\u68c0\u6d4b\u51fa\u6765\u672c\u5730Docker\u5e76\u6ca1\u6709\u8fd0\u884c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli check\n\u274c Docker\n         * \ud83d\udc49 Reason: exit code:1, command:b'20.10.13\\nCannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?\\n'\n         * \ud83d\udcd8 Min version: 19.03\n         * \ud83d\udc81 Advice: Docker is an open platform for developing, shipping, and running applications.Starwhale uses Docker to run jobs. You can visit https://docs.docker.com/get-docker/ for more details.\n\n\u2705 Conda 4.11.0\n")))}u.isMDXComponent=!0},2059:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/board-4b377d61a3937796d4b446d54a5c1891.gif"},2988:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/completion-b845bb97641b027ad100e7caa4deb52e.gif"},2599:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gc-92523d63a5d118a6b89d9c6a80c1a976.gif"},4710:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/open-ui-43790b2f53e2c9ba6b6ab6a074d9c94e.gif"}}]);