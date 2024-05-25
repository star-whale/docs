"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[37292],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(t),d=l,m=h["".concat(o,".").concat(d)]||h[d]||u[d]||i;return t?a.createElement(m,r(r({ref:n},c),{},{components:t})):a.createElement(m,r({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=h;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},82476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(83117),l=(t(67294),t(3905));const i={title:"Installation Guide"},r=void 0,s={unversionedId:"swcli/installation",id:"version-0.6.10/swcli/installation",title:"Installation Guide",description:"We can use swcli to complete all tasks for Starwhale Instances. swcli is written by pure python3, which can be installed easily by the pip command.Here are some installation tips that can help you get a cleaner, unambiguous, no dependency conflicts swcli python environment.",source:"@site/versioned_docs/version-0.6.10/swcli/installation.md",sourceDirName:"swcli",slug:"/swcli/installation",permalink:"/0.6.10/swcli/installation",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.10/swcli/installation.md",tags:[],version:"0.6.10",frontMatter:{title:"Installation Guide"},sidebar:"mainSidebar",previous:{title:"Starwhale Client (swcli) User Guide",permalink:"/0.6.10/swcli/"},next:{title:"Starwhale Resources URI",permalink:"/0.6.10/swcli/uri"}},o={},p=[{value:"Quick install",id:"quick-install",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install swcli",id:"install-swcli",level:2},{value:"Install with venv",id:"install-with-venv",level:3},{value:"Install with conda",id:"install-with-conda",level:3},{value:"Install for the special scenarios",id:"install-for-the-special-scenarios",level:3},{value:"Update swcli",id:"update-swcli",level:2},{value:"Uninstall swcli",id:"uninstall-swcli",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"We can use ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," to complete all tasks for Starwhale Instances. ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," is written by pure python3, which can be installed easily by the ",(0,l.kt)("inlineCode",{parentName:"p"},"pip")," command.Here are some installation tips that can help you get a cleaner, unambiguous, no dependency conflicts ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," python environment."),(0,l.kt)("admonition",{title:"Installing Advice",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"DO NOT install Starwhale in your system's global Python environment. It will cause a python dependency conflict problem.")),(0,l.kt)("h2",{id:"quick-install"},"Quick install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install starwhale\n")),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python 3.7 ~ 3.11"),(0,l.kt)("li",{parentName:"ul"},"Linux or macOS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://conda.io/"},"Conda")," (optional)")),(0,l.kt)("p",null,"In the Ubuntu system, you can run the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install python3 python3-venv python3-pip\n\n#If you want to install multi python versions\nsudo add-apt-repository -y ppa:deadsnakes/ppa\nsudo apt-get update\nsudo apt-get install -y python3.7 python3.8 python3.9 python3-pip python3-venv python3.8-venv python3.7-venv python3.9-venv\n")),(0,l.kt)("p",null,"swcli works on macOS. If you run into issues with the default system Python3 on macOS, try installing Python3 through the homebrew:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install python3\n")),(0,l.kt)("h2",{id:"install-swcli"},"Install swcli"),(0,l.kt)("h3",{id:"install-with-venv"},"Install with venv"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'python3 -m venv ~/.cache/venv/starwhale\nsource ~/.cache/venv/starwhale/bin/activate\npython3 -m pip install starwhale\n\nswcli --version\n\nsudo ln -sf "$(which swcli)" /usr/local/bin/\n')),(0,l.kt)("h3",{id:"install-with-conda"},"Install with conda"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'conda create --name starwhale --yes  python=3.9\nconda activate starwhale\npython3 -m pip install starwhale\n\nswcli --version\n\nsudo ln -sf "$(which swcli)" /usr/local/bin/\n')),(0,l.kt)("p",null,"\ud83d\udc4f Now, you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," in the global environment."),(0,l.kt)("h3",{id:"install-for-the-special-scenarios"},"Install for the special scenarios"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# for Audio processing\npython -m pip install starwhale[audio]\n\n# for Image processing\npython -m pip install starwhale[pillow]\n\n# for swcli model server command\npython -m pip install starwhale[server]\n\n# for built-in online serving\npython -m pip install starwhale[online-serve]\n\n# install all dependencies\npython -m pip install starwhale[all]\n")),(0,l.kt)("h2",{id:"update-swcli"},"Update swcli"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"#for venv\npython3 -m pip install --upgrade starwhale\n\n#for conda\nconda run -n starwhale python3 -m pip install --upgrade starwhale\n")),(0,l.kt)("h2",{id:"uninstall-swcli"},"Uninstall swcli"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip remove starwhale\n\nrm -rf ~/.config/starwhale\nrm -rf ~/.starwhale\n")))}u.isMDXComponent=!0}}]);