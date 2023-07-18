"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9492],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(3117),i=(r(7294),r(3905));const a={title:"About the .swignore file"},o=void 0,l={unversionedId:"swcli/swignore",id:"version-0.4.6/swcli/swignore",title:"About the .swignore file",description:"The .swignore file is used to ignore some files during the build process of Starwhale datasets and models.",source:"@site/versioned_docs/version-0.4.6/swcli/swignore.md",sourceDirName:"swcli",slug:"/swcli/swignore",permalink:"/docs/0.4.6/swcli/swignore",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.6/swcli/swignore.md",tags:[],version:"0.4.6",frontMatter:{title:"About the .swignore file"},sidebar:"mainSidebar",previous:{title:"Starwhale Resources URI",permalink:"/docs/0.4.6/swcli/uri"},next:{title:"Starwhale Model User Guide",permalink:"/docs/0.4.6/userguide/model"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},".swignore")," file is used to ignore some files during the build process of Starwhale datasets and models."),(0,i.kt)("p",null,"By default, SWCLI will traverse the directory tree and include all ",(0,i.kt)("inlineCode",{parentName:"p"},".py/.sh/.yaml")," files. For models, SWCLI will also include those specified in the model.yaml. If some files should be excluded, for example, files under ",(0,i.kt)("inlineCode",{parentName:"p"},".git"),", you need to put their patterns in ",(0,i.kt)("inlineCode",{parentName:"p"},".swignore"),"."),(0,i.kt)("h1",{id:"pattern-format"},"PATTERN FORMAT"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each line in a swignore file specifies a pattern, which matches files and directories."),(0,i.kt)("li",{parentName:"ul"},"A blank line matches no files, so it can serve as a separator for readability."),(0,i.kt)("li",{parentName:"ul"},"An asterisk ",(0,i.kt)("inlineCode",{parentName:"li"},"*")," matches anything except a slash."),(0,i.kt)("li",{parentName:"ul"},"A line starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"#")," serves as a comment.")),(0,i.kt)("h1",{id:"example"},"Example"),(0,i.kt)("p",null,"Here is the .swignore file used in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.4.6/examples/mnist"},"MNIST")," example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"venv\n.git\n.history\n.vscode\n.venv\n")))}u.isMDXComponent=!0}}]);