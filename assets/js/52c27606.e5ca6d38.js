"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[5558],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(t),d=l,m=h["".concat(i,".").concat(d)]||h[d]||u[d]||r;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=h;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},76334:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(83117),l=(t(67294),t(3905));const r={title:"Installation"},o=void 0,s={unversionedId:"instances/standalone/install",id:"instances/standalone/install",title:"Installation",description:"We can use swcli to complete all tasks for Starwhale Standalone mode. swcli is written by pure python3, which can be installed easily by the pip command.",source:"@site/docs/instances/standalone/install.md",sourceDirName:"instances/standalone",slug:"/instances/standalone/install",permalink:"/docs/next/instances/standalone/install",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/instances/standalone/install.md",tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"mainSidebar",previous:{title:"Concepts",permalink:"/docs/next/instances/standalone/concepts"},next:{title:"Starwhale Resources URI",permalink:"/docs/next/instances/standalone/guides/uri"}},i={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Starwhale with venv",id:"install-starwhale-with-venv",level:2},{value:"Install Starwhale with conda",id:"install-starwhale-with-conda",level:2},{value:"Upgrade Starwhale",id:"upgrade-starwhale",level:2},{value:"Remove Starwhale",id:"remove-starwhale",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"We can use ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," to complete all tasks for Starwhale Standalone mode. ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," is written by pure python3, which can be installed easily by the ",(0,l.kt)("inlineCode",{parentName:"p"},"pip")," command.\nHere are some installation tips that can help you get a cleaner, unambiguous, no dependency conflicts ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," python environment."),(0,l.kt)("admonition",{title:"Installing Advice",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"DO NOT install Starwhale in your system's global Python environment. It will cause a python dependency conflict problem.")),(0,l.kt)("p",null,"We recommend you build an independent virutalenv or conda environment to install Starwhale."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python 3.7+"),(0,l.kt)("li",{parentName:"ul"},"Linux or macOS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://conda.io/"},"Conda")," (optional)")),(0,l.kt)("p",null,"In the Ubuntu system, you can run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install python3 python3-venv python3-pip\n\n#If you want to install multi python versions\nsudo add-apt-repository -y ppa:deadsnakes/ppa\nsudo apt-get update\nsudo apt-get install -y python3.7 python3.8 python3.9 python3-pip python3-venv python3.8-venv python3.7-venv python3.9-venv\n")),(0,l.kt)("p",null,"Starwhale works on macOS. If you run into issues with the default system Python3 on macOS, try installing Python3 through the homebrew:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install python3\n")),(0,l.kt)("h2",{id:"install-starwhale-with-venv"},"Install Starwhale with venv"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv ~/.cache/venv/starwhale\nsource ~/.cache/venv/starwhale/bin/activate\npython3 -m pip install starwhale\n\nswcli --version\n\nsudo rm -rf /usr/local/bin/swcli\nsudo ln -s `which swcli` /usr/local/bin/\n")),(0,l.kt)("h2",{id:"install-starwhale-with-conda"},"Install Starwhale with conda"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"conda create --name starwhale --yes  python=3.9\nconda activate starwhale\npython3 -m pip install starwhale\n\nswcli --version\n\nsudo rm -rf /usr/local/bin/swcli\nsudo ln -s `which swcli` /usr/local/bin/\n")),(0,l.kt)("p",null,"\ud83d\udc4f Now, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," in the global environment."),(0,l.kt)("h2",{id:"upgrade-starwhale"},"Upgrade Starwhale"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#for venv\n~/.cache/venv/starwhale/bin/python3 -m pip install --upgrade starwhale\n\n#for conda\nconda run -n starwhale python3 -m pip install --upgrade starwhale\n")),(0,l.kt)("h2",{id:"remove-starwhale"},"Remove Starwhale"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip remove starwhale\n\nrm -rf ~/.config/starwhale\nrm -rf ~/.starwhale\n")))}u.isMDXComponent=!0}}]);