"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[2934],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=s(t),d=l,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||r;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=h;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},60393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(83117),l=(t(67294),t(3905));const r={title:"\u5b89\u88c5\u6307\u5357"},i=void 0,o={unversionedId:"swcli/installation",id:"version-0.6.4/swcli/installation",title:"\u5b89\u88c5\u6307\u5357",description:"swcli \u547d\u4ee4\u884c\u5de5\u5177\u80fd\u591f\u5bf9\u5404\u79cd\u5b9e\u4f8b\u5b8c\u6210\u51e0\u4e4e\u6240\u6709\u7684\u64cd\u4f5c\uff0c\u7531\u4e8e\u662f\u7531\u7eaf Python3 \u7f16\u5199\uff0c\u53ef\u4ee5\u4f7f\u7528 pip \u547d\u4ee4\u5b8c\u6210\u5b89\u88c5\uff0c\u672c\u6587\u4f1a\u63d0\u4f9b\u4e00\u4e9b\u5b89\u88c5\u5efa\u8bae\uff0c\u5e2e\u52a9\u60a8\u83b7\u5f97\u4e00\u4e2a\u5e72\u51c0\u7684\u3001\u65e0\u4f9d\u8d56\u51b2\u7a81\u7684 swcli Python \u73af\u5883\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.4/swcli/installation.md",sourceDirName:"swcli",slug:"/swcli/installation",permalink:"/zh/0.6.4/swcli/installation",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.4/swcli/installation.md",tags:[],version:"0.6.4",frontMatter:{title:"\u5b89\u88c5\u6307\u5357"},sidebar:"mainSidebar",previous:{title:"Starwhale Client (swcli) \u7528\u6237\u6307\u5357",permalink:"/zh/0.6.4/swcli/"},next:{title:"Starwhale \u8d44\u6e90URI",permalink:"/zh/0.6.4/swcli/uri"}},p={},s=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5b89\u88c5 swcli",id:"\u5b89\u88c5-swcli",level:2},{value:"\u4f7f\u7528venv\u5b89\u88c5",id:"\u4f7f\u7528venv\u5b89\u88c5",level:3},{value:"\u4f7f\u7528conda\u5b89\u88c5",id:"\u4f7f\u7528conda\u5b89\u88c5",level:3},{value:"swcli \u7684\u7279\u5b9a\u573a\u666f\u4f9d\u8d56\u5b89\u88c5",id:"swcli-\u7684\u7279\u5b9a\u573a\u666f\u4f9d\u8d56\u5b89\u88c5",level:3},{value:"\u66f4\u65b0 swcli",id:"\u66f4\u65b0-swcli",level:2},{value:"\u5378\u8f7dswcli",id:"\u5378\u8f7dswcli",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," \u547d\u4ee4\u884c\u5de5\u5177\u80fd\u591f\u5bf9\u5404\u79cd\u5b9e\u4f8b\u5b8c\u6210\u51e0\u4e4e\u6240\u6709\u7684\u64cd\u4f5c\uff0c\u7531\u4e8e\u662f\u7531\u7eaf Python3 \u7f16\u5199\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"pip")," \u547d\u4ee4\u5b8c\u6210\u5b89\u88c5\uff0c\u672c\u6587\u4f1a\u63d0\u4f9b\u4e00\u4e9b\u5b89\u88c5\u5efa\u8bae\uff0c\u5e2e\u52a9\u60a8\u83b7\u5f97\u4e00\u4e2a\u5e72\u51c0\u7684\u3001\u65e0\u4f9d\u8d56\u51b2\u7a81\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," Python \u73af\u5883\u3002"),(0,l.kt)("admonition",{title:"\u5b89\u88c5\u5efa\u8bae",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u975e\u5e38\u4e0d\u5efa\u8bae\u5c06 Starwhale \u5b89\u88c5\u5728\u7cfb\u7edf\u7684\u5168\u5c40 Python \u73af\u5883\u4e2d\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4 Python \u7684\u4f9d\u8d56\u51b2\u7a81\u95ee\u9898\u3002\u4f7f\u7528 venv \u6216 conda \u521b\u5efa\u4e00\u4e2a\u9694\u79bb\u7684 Python \u73af\u5883\uff0c\u5e76\u5728\u5176\u4e2d\u5b89\u88c5 Starwhale\uff0c\u662f Python \u63a8\u8350\u7684\u505a\u6cd5\u3002")),(0,l.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python3.7 ~ 3.11"),(0,l.kt)("li",{parentName:"ul"},"Linux \u6216 macOS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://conda.io/"},"Conda"),"\uff08\u53ef\u9009\uff09")),(0,l.kt)("p",null,"\u5728Ubuntu\u7cfb\u7edf\u4e2d\uff0c\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install python3 python3-venv python3-pip\n\n#\u5982\u679c\u60a8\u60f3\u5b89\u88c5\u591a\u4e2apython\u7248\u672c\nsudo add-apt-repository -y ppa:deadsnakes/ppa\nsudo apt-get update\nsudo apt-get install -y python3.7 python3.8 python3.9 python3-pip python3-venv python3.8-venv python3.7-venv python3.9-venv\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," \u53ef\u4ee5\u5728 macOS \u4e0b\u5de5\u4f5c\uff0c\u5305\u62ec arm(M1 Chip) \u548c x86(Intel Chip) \u4e24\u79cd\u4f53\u7cfb\u7ed3\u6784\u3002\u4f46 macOS \u4e0b\u81ea\u5e26\u7684 Python3 \u53ef\u80fd\u4f1a\u9047\u5230\u4e00\u4e9b Python \u81ea\u8eab\u7684\u95ee\u9898\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"homebrew")," \u8fdb\u884c\u5b89\u88c5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install python3\n")),(0,l.kt)("h2",{id:"\u5b89\u88c5-swcli"},"\u5b89\u88c5 swcli"),(0,l.kt)("h3",{id:"\u4f7f\u7528venv\u5b89\u88c5"},"\u4f7f\u7528venv\u5b89\u88c5"),(0,l.kt)("p",null,"venv \u73af\u5883\u5373\u53ef\u4ee5\u4f7f\u7528 Python3 \u81ea\u5e26\u7684 venv\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 virtualenv \u5de5\u5177\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'python3 -m venv ~/.cache/venv/starwhale\nsource ~/.cache/venv/starwhale/bin/activate\npython3 -m pip install starwhale\n\nswcli --version\n\nsudo ln -sf "$(which swcli)" /usr/local/bin/\n')),(0,l.kt)("h3",{id:"\u4f7f\u7528conda\u5b89\u88c5"},"\u4f7f\u7528conda\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'conda create --name starwhale --yes  python=3.9\nconda activate starwhale\npython3 -m pip install starwhale\n\nswcli --version\n\nsudo ln -sf "$(which swcli)" /usr/local/bin/\n')),(0,l.kt)("p",null,"\ud83d\udc4f \u73b0\u5728\uff0c\u60a8\u53ef\u4ee5\u5728\u5168\u5c40\u73af\u5883\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," \u4e86\u3002"),(0,l.kt)("h3",{id:"swcli-\u7684\u7279\u5b9a\u573a\u666f\u4f9d\u8d56\u5b89\u88c5"},"swcli \u7684\u7279\u5b9a\u573a\u666f\u4f9d\u8d56\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9488\u5bf9Audio\u5904\u7406, \u4e3b\u8981\u5305\u542bsoundfile\u5e93\u7b49\npython -m pip install starwhale[audio]\n\n# \u9488\u5bf9Image\u5904\u7406\uff0c\u4e3b\u8981\u5305\u542bpillow\u5e93\u7b49\npython -m pip install starwhale[pillow]\n\n# \u9488\u5bf9swcli model server\u547d\u4ee4\npython -m pip install starwhale[server]\n\n# \u9488\u5bf9\u5185\u5efa\u7684Online Serving\npython -m pip install starwhale[online-serve]\n\n# \u5b89\u88c5\u5168\u90e8\u4f9d\u8d56\npython -m pip install starwhale[all]\n")),(0,l.kt)("h2",{id:"\u66f4\u65b0-swcli"},"\u66f4\u65b0 swcli"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#\u9002\u7528\u4e8evenv\u73af\u5883\npython3 -m pip install --upgrade starwhale\n\n#\u9002\u7528\u4e8econda\u73af\u5883\nconda run -n starwhale python3 -m pip install --upgrade starwhale\n")),(0,l.kt)("h2",{id:"\u5378\u8f7dswcli"},"\u5378\u8f7dswcli"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip remove starwhale\n\nrm -rf ~/.config/starwhale\nrm -rf ~/.starwhale\n")))}u.isMDXComponent=!0}}]);