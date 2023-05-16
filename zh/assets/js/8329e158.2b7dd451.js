"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[8957],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||l;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42453:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(83117),r=(t(67294),t(3905));const l={title:"SWCLI\u5b89\u88c5\u6307\u5357"},o=void 0,i={unversionedId:"swcli/installation",id:"swcli/installation",title:"SWCLI\u5b89\u88c5\u6307\u5357",description:"\u5728\u7cfb\u7edf\u7684\u5168\u5c40Python\u73af\u5883\u4e2d\u5b89\u88c5SWCLI\u53ef\u80fd\u4f1a\u5bfc\u81f4python\u4f9d\u8d56\u9879\u51b2\u7a81\u3002\u6211\u4eec\u5efa\u8bae\u60a8\u4f7f\u7528\u4e00\u4e2a\u72ec\u7acb\u7684virutalenv\u6216conda\u73af\u5883\u6765\u5b89\u88c5SWCLI\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/swcli/installation.md",sourceDirName:"swcli",slug:"/swcli/installation",permalink:"/zh/docs/next/swcli/installation",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/swcli/installation.md",tags:[],version:"current",frontMatter:{title:"SWCLI\u5b89\u88c5\u6307\u5357"},sidebar:"mainSidebar",previous:{title:"Starwhale Client\uff08SWCLI\uff09\u7528\u6237\u6307\u5357",permalink:"/zh/docs/next/swcli/"},next:{title:"Starwhale\u8d44\u6e90URI",permalink:"/zh/docs/next/swcli/uri"}},s={},c=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5b89\u88c5SWCLI",id:"\u5b89\u88c5swcli",level:2},{value:"\u4f7f\u7528venv\u5b89\u88c5",id:"\u4f7f\u7528venv\u5b89\u88c5",level:3},{value:"\u4f7f\u7528conda\u5b89\u88c5",id:"\u4f7f\u7528conda\u5b89\u88c5",level:3},{value:"\u66f4\u65b0 SWCLI",id:"\u66f4\u65b0-swcli",level:2},{value:"\u5378\u8f7dSWCLI",id:"\u5378\u8f7dswcli",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u7cfb\u7edf\u7684\u5168\u5c40Python\u73af\u5883\u4e2d\u5b89\u88c5SWCLI\u53ef\u80fd\u4f1a\u5bfc\u81f4python\u4f9d\u8d56\u9879\u51b2\u7a81\u3002\u6211\u4eec\u5efa\u8bae\u60a8\u4f7f\u7528\u4e00\u4e2a\u72ec\u7acb\u7684virutalenv\u6216conda\u73af\u5883\u6765\u5b89\u88c5SWCLI\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u6709\u4e00\u4e9b\u5b89\u88c5\u6280\u5de7\uff0c\u53ef\u4ee5\u5e2e\u52a9\u60a8\u83b7\u5f97\u4e00\u4e2a\u66f4\u5e72\u51c0\u3001\u660e\u786e\u3001\u6ca1\u6709\u4f9d\u8d56\u51b2\u7a81\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"swcli"),"python\u73af\u5883\u3002"),(0,r.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Python3.7+"),(0,r.kt)("li",{parentName:"ul"},"Linux\u6216macOS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://conda.io/"},"Conda"),"\uff08\u53ef\u9009\uff09")),(0,r.kt)("p",null,"\u5728Ubuntu\u7cfb\u7edf\u4e2d\uff0c\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install python3 python3-venv python3-pip\n\n#\u5982\u679c\u60a8\u60f3\u5b89\u88c5\u591a\u4e2apython\u7248\u672c\nsudo add-apt-repository -y ppa:deadsnakes/ppa\nsudo apt-get update\nsudo apt-get install -y python3.7 python3.8 python3.9 python3-pip python3-venv python3.8-venv python3.7-venv python3.9-venv\n")),(0,r.kt)("p",null,"SWCLI\u53ef\u4ee5\u7528\u5728macOS\u4e0a\u3002\u5982\u679c\u60a8\u5728macOS\u4e0a\u9047\u5230\u9ed8\u8ba4\u7cfb\u7edfPython3\u7684\u95ee\u9898\uff0c\u8bf7\u5c1d\u8bd5\u901a\u8fc7homebrew\u5b89\u88c5Python3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install python3\n")),(0,r.kt)("h2",{id:"\u5b89\u88c5swcli"},"\u5b89\u88c5SWCLI"),(0,r.kt)("h3",{id:"\u4f7f\u7528venv\u5b89\u88c5"},"\u4f7f\u7528venv\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv ~/.cache/venv/starwhale\nsource ~/.cache/venv/starwhale/bin/activate\npython3 -m pip install starwhale\n\nswcli --version\n\nsudo rm -rf /usr/local/bin/swcli\nsudo ln -s `which swcli` /usr/local/bin/\n")),(0,r.kt)("h3",{id:"\u4f7f\u7528conda\u5b89\u88c5"},"\u4f7f\u7528conda\u5b89\u88c5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"conda create --name starwhale --yes  python=3.9\nconda activate starwhale\npython3 -m pip install starwhale\n\nswcli --version\n\nsudo rm -rf /usr/local/bin/swcli\nsudo ln -s `which swcli` /usr/local/bin/\n")),(0,r.kt)("p",null,"\ud83d\udc4f \u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u5728\u5168\u5c40\u73af\u5883\u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"swcli"),"\u4e86\u3002"),(0,r.kt)("h2",{id:"\u66f4\u65b0-swcli"},"\u66f4\u65b0 SWCLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#\u9002\u7528\u4e8evenv\u73af\u5883\npython3 -m pip install --upgrade starwhale\n\n#\u9002\u7528\u4e8econda\u73af\u5883\nconda run -n starwhale python3 -m pip install --upgrade starwhale\n")),(0,r.kt)("h2",{id:"\u5378\u8f7dswcli"},"\u5378\u8f7dSWCLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip remove starwhale\n\nrm -rf ~/.config/starwhale\nrm -rf ~/.starwhale\n")))}u.isMDXComponent=!0}}]);