"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[7631],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),h=l,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1747:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(3117),l=(t(7294),t(3905));const r={title:"SWCLI Installation Guide"},i=void 0,o={unversionedId:"swcli/installation",id:"version-0.5.6/swcli/installation",title:"SWCLI Installation Guide",description:"Installing SWCLI in your system's global Python environment may cause a python dependency conflict. We recommend you build an independent virutalenv or conda environment to install SWCLI.",source:"@site/versioned_docs/version-0.5.6/swcli/installation.md",sourceDirName:"swcli",slug:"/swcli/installation",permalink:"/0.5.6/swcli/installation",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.6/swcli/installation.md",tags:[],version:"0.5.6",frontMatter:{title:"SWCLI Installation Guide"},sidebar:"mainSidebar",previous:{title:"Starwhale Client (SWCLI) User Guide",permalink:"/0.5.6/swcli/"},next:{title:"Starwhale Resources URI",permalink:"/0.5.6/swcli/uri"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install SWCLI",id:"install-swcli",level:2},{value:"Install with venv",id:"install-with-venv",level:3},{value:"Install with conda",id:"install-with-conda",level:3},{value:"Update SWCLI",id:"update-swcli",level:2},{value:"Uninstall SWCLI",id:"uninstall-swcli",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Installing SWCLI in your system's global Python environment may cause a python dependency conflict. We recommend you build an independent virutalenv or conda environment to install SWCLI."),(0,l.kt)("p",null,"Here are some installation tips that can help you get a cleaner, unambiguous, no dependency conflicts ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," python environment."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python 3.7+"),(0,l.kt)("li",{parentName:"ul"},"Linux or macOS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://conda.io/"},"Conda")," (optional)")),(0,l.kt)("p",null,"In the Ubuntu system, you can run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install python3 python3-venv python3-pip\n\n#If you want to install multi python versions\nsudo add-apt-repository -y ppa:deadsnakes/ppa\nsudo apt-get update\nsudo apt-get install -y python3.7 python3.8 python3.9 python3-pip python3-venv python3.8-venv python3.7-venv python3.9-venv\n")),(0,l.kt)("p",null,"SWCLI works on macOS. If you run into issues with the default system Python3 on macOS, try installing Python3 through the homebrew:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install python3\n")),(0,l.kt)("h2",{id:"install-swcli"},"Install SWCLI"),(0,l.kt)("h3",{id:"install-with-venv"},"Install with venv"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv ~/.cache/venv/starwhale\nsource ~/.cache/venv/starwhale/bin/activate\npython3 -m pip install starwhale\n\nswcli --version\n\nsudo rm -rf /usr/local/bin/swcli\nsudo ln -s `which swcli` /usr/local/bin/\n")),(0,l.kt)("h3",{id:"install-with-conda"},"Install with conda"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"conda create --name starwhale --yes  python=3.9\nconda activate starwhale\npython3 -m pip install starwhale\n\nswcli --version\n\nsudo rm -rf /usr/local/bin/swcli\nsudo ln -s `which swcli` /usr/local/bin/\n")),(0,l.kt)("p",null,"\ud83d\udc4f Now, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," in the global environment."),(0,l.kt)("h2",{id:"update-swcli"},"Update SWCLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#for venv\npython3 -m pip install --upgrade starwhale\n\n#for conda\nconda run -n starwhale python3 -m pip install --upgrade starwhale\n")),(0,l.kt)("h2",{id:"uninstall-swcli"},"Uninstall SWCLI"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip remove starwhale\n\nrm -rf ~/.config/starwhale\nrm -rf ~/.starwhale\n")))}u.isMDXComponent=!0}}]);