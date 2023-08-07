"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[1368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(83117),i=(n(67294),n(3905));const a={title:"About the .swignore file"},l=void 0,o={unversionedId:"swcli/swignore",id:"version-0.5.10/swcli/swignore",title:"About the .swignore file",description:"The .swignore file is similar to .gitignore, .dockerignore, and other files used to define ignored files or dirs. The .swignore files mainly used in the Starwhale Model building process. By default, the swcli model build command or starwhale.model.build() Python SDK will traverse all files in the specified directory and automatically exclude certain known files or directories that are not suitable for inclusion in the model package.",source:"@site/versioned_docs/version-0.5.10/swcli/swignore.md",sourceDirName:"swcli",slug:"/swcli/swignore",permalink:"/swcli/swignore",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.10/swcli/swignore.md",tags:[],version:"0.5.10",frontMatter:{title:"About the .swignore file"},sidebar:"mainSidebar",previous:{title:"Starwhale Resources URI",permalink:"/swcli/uri"},next:{title:"Configuration",permalink:"/swcli/config"}},s={},c=[{value:"PATTERN FORMAT",id:"pattern-format",level:2},{value:"Auto Ingored files or dirs",id:"auto-ingored-files-or-dirs",level:2},{value:"Example",id:"example",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},".swignore")," file is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore"),", ",(0,i.kt)("inlineCode",{parentName:"p"},".dockerignore"),", and other files used to define ignored files or dirs. The ",(0,i.kt)("inlineCode",{parentName:"p"},".swignore")," files mainly used in the Starwhale Model building process. By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"swcli model build")," command or ",(0,i.kt)("inlineCode",{parentName:"p"},"starwhale.model.build()")," Python SDK will traverse all files in the specified directory and automatically exclude certain known files or directories that are not suitable for inclusion in the model package."),(0,i.kt)("h2",{id:"pattern-format"},"PATTERN FORMAT"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each line in a swignore file specifies a pattern, which matches files and directories."),(0,i.kt)("li",{parentName:"ul"},"A blank line matches no files, so it can serve as a separator for readability."),(0,i.kt)("li",{parentName:"ul"},"An asterisk ",(0,i.kt)("inlineCode",{parentName:"li"},"*")," matches anything except a slash."),(0,i.kt)("li",{parentName:"ul"},"A line starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"#")," serves as a comment."),(0,i.kt)("li",{parentName:"ul"},"Support wildcard expression, for example: ",(0,i.kt)("inlineCode",{parentName:"li"},"*.jpg"),", ",(0,i.kt)("inlineCode",{parentName:"li"},".png"),".")),(0,i.kt)("h2",{id:"auto-ingored-files-or-dirs"},"Auto Ingored files or dirs"),(0,i.kt)("p",null,"If you want to include the auto ingored files or dirs, you can add ",(0,i.kt)("inlineCode",{parentName:"p"},"--add-all")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"swcli model build")," command."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__pycache__/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*.py[cod]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"*$py.class")),(0,i.kt)("li",{parentName:"ul"},"venv installation dir"),(0,i.kt)("li",{parentName:"ul"},"conda installation dir")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Here is the .swignore file used in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/mnist"},"MNIST")," example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"venv/*\n.git/*\n.history*\n.vscode/*\n.venv/*\ndata/*\n.idea/*\n*.py[cod]\n")))}p.isMDXComponent=!0}}]);