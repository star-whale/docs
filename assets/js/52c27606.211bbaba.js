"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[5558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),d=l,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(3117),l=(n(7294),n(3905));const r={title:"Installation"},o=void 0,i={unversionedId:"instances/standalone/install",id:"instances/standalone/install",title:"Installation",description:"We can use swcli to complete all tasks for Starwhale Standalone mode. swcli is written by pure python3, which can be installed easily by the pip command.",source:"@site/docs/instances/standalone/install.md",sourceDirName:"instances/standalone",slug:"/instances/standalone/install",permalink:"/next/instances/standalone/install",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/instances/standalone/install.md",tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"mainSidebar",previous:{title:"Getting Started",permalink:"/next/instances/standalone/getting_started"},next:{title:"Starwhale Resources URI",permalink:"/next/instances/standalone/guides/uri"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Starwhale with venv",id:"install-starwhale-with-venv",level:2},{value:"Install Starwhale with conda",id:"install-starwhale-with-conda",level:2},{value:"Upgrade Starwhale",id:"upgrade-starwhale",level:2},{value:"Remove Starwhale",id:"remove-starwhale",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"We can use ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," to complete all tasks for Starwhale Standalone mode. ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," is written by pure python3, which can be installed easily by the ",(0,l.kt)("inlineCode",{parentName:"p"},"pip")," command.\nHere are some installation tips that can help you get a cleaner, unambiguous, no dependency conflicts ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," python environment."),(0,l.kt)("admonition",{title:"Installing Advice",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"DO NOT install Starwhale in your system's global Python environment. It will cause a python dependency conflict problem.")),(0,l.kt)("p",null,"We recommend you build an independent virutalenv or conda environment to install Starwhale."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python 3.7+"),(0,l.kt)("li",{parentName:"ul"},"Linux or macOS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://conda.io/"},"Conda")," (optional)")),(0,l.kt)("p",null,"In the Ubuntu system, you can run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install python3 python3-venv python3-pip\n\n#If you want to install multi python versions\nsudo add-apt-repository -y ppa:deadsnakes/ppa\nsudo apt-get update\nsudo apt-get install -y python3.7 python3.8 python3.9 python3-pip python3-venv python3.8-venv python3.7-venv python3.9-venv\n")),(0,l.kt)("p",null,"Starwhale works on macOS. If you run into issues with the default system Python3 on macOS, try installing Python3 through the homebrew:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install python3\n")),(0,l.kt)("h2",{id:"install-starwhale-with-venv"},"Install Starwhale with venv"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv ~/.cache/venv/starwhale\nsource ~/.cache/venv/starwhale/bin/activate\npython3 -m pip install starwhale\n\nswcli --version\n\nsudo rm -rf /usr/local/bin/swcli\nsudo ln -s `which swcli` /usr/local/bin/\n")),(0,l.kt)("h2",{id:"install-starwhale-with-conda"},"Install Starwhale with conda"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"conda create --name starwhale --yes  python=3.9\nconda activate starwhale\npython3 -m pip install starwhale\n\nswcli --version\n\nsudo rm -rf /usr/local/bin/swcli\nsudo ln -s `which swcli` /usr/local/bin/\n")),(0,l.kt)("p",null,"\ud83d\udc4f Now, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," in the global environment."),(0,l.kt)("h2",{id:"upgrade-starwhale"},"Upgrade Starwhale"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#for venv\n~/.cache/venv/starwhale/bin/python3 -m pip install --upgrade starwhale\n\n#for conda\nconda run -n starwhale python3 -m pip install --upgrade starwhale\n")),(0,l.kt)("h2",{id:"remove-starwhale"},"Remove Starwhale"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip remove starwhale\n\nrm -rf ~/.config/starwhale\nrm -rf ~/.starwhale\n")))}u.isMDXComponent=!0}}]);