"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[2139],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(3117),a=(t(7294),t(3905));const i={title:".swignore\u6587\u4ef6"},o=void 0,l={unversionedId:"instances/standalone/guides/swignore",id:"version-0.5.0/instances/standalone/guides/swignore",title:".swignore\u6587\u4ef6",description:"\u7528\u9014",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.0/instances/standalone/guides/swignore.md",sourceDirName:"instances/standalone/guides",slug:"/instances/standalone/guides/swignore",permalink:"/zh/docs/instances/standalone/guides/swignore",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.0/instances/standalone/guides/swignore.md",tags:[],version:"0.5.0",frontMatter:{title:".swignore\u6587\u4ef6"},sidebar:"mainSidebar",previous:{title:"\u914d\u7f6e\u6587\u4ef6",permalink:"/zh/docs/instances/standalone/guides/config"},next:{title:"Instance\u547d\u4ee4",permalink:"/zh/docs/instances/standalone/api/instance_cli"}},s={},c=[{value:"\u7528\u9014",id:"\u7528\u9014",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7528\u9014"},"\u7528\u9014"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".swignore")," \u6587\u4ef6\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".dockerignore")," \u7b49\u6587\u4ef6\u7c7b\u4f3c\uff0c\u90fd\u662f\u7528\u6765\u5b9a\u4e49\u5ffd\u7565\u67d0\u4e9b\u6587\u4ef6\u6216\u6587\u4ef6\u5939\u3002",(0,a.kt)("inlineCode",{parentName:"p"},".swignore")," \u6587\u4ef6\u4e3b\u8981\u5e94\u7528\u5728Starwhale\u7684\u6784\u5efa\u8fc7\u7a0b\u4e2d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Starwhale Dataset\u6784\u5efa\uff1a\u5f53 ",(0,a.kt)("inlineCode",{parentName:"li"},".swignore")," \u76ee\u5f55\u4e0e ",(0,a.kt)("inlineCode",{parentName:"li"},"dataset.yaml")," \u5728\u76f8\u540c\u76ee\u5f55\u4e2d\uff0c\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"swcli dataset build")," \u547d\u4ee4\u5236\u4f5cswds\u865a\u62df\u5305\u65f6\uff0c\u53ef\u4ee5\u5ffd\u7565\u67d0\u4e9b\u6587\u4ef6\u7684\u62f7\u8d1d\u3002\u9ed8\u8ba4\u6784\u5efa\u6570\u636e\u96c6\uff0c\u4f1a\u62f7\u8d1d ",(0,a.kt)("inlineCode",{parentName:"li"},".py/.sh/.yaml")," \u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"Starwhale Model\u6784\u5efa\uff1a\u5f53 ",(0,a.kt)("inlineCode",{parentName:"li"},".swignore")," \u76ee\u5f55\u4e0e ",(0,a.kt)("inlineCode",{parentName:"li"},"model.yaml")," \u5728\u76f8\u540c\u76ee\u5f55\u4e2d\uff0c\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"swcli model build")," \u547d\u4ee4\u5236\u4f5cswmp\u5305\u6587\u4ef6\u65f6\uff0c\u53ef\u4ee5\u5ffd\u7565\u67d0\u4e9b\u6587\u4ef6\u7684\u62f7\u8d1d\u3002\u9ed8\u8ba4\u6784\u5efa\u6a21\u578b\u5305\uff0c\u4f1a\u62f7\u8d1d ",(0,a.kt)("inlineCode",{parentName:"li"},".py/.sh/.yaml"),"\u548cmodel.yaml\u4e2d\u5b9a\u4e49\u7684model\u3001config\u5b57\u6bb5\u5305\u542b\u7684\u6587\u4ef6\u3002")),(0,a.kt)("p",null,"Starwhale Runtime \u6784\u5efa\u6682\u4e0d\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},".swignore")," \u6587\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("p",null,"mnist\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".swignore")," \u6587\u4ef6\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"venv\n.git\n.history\n.vscode\n.venv\n")),(0,a.kt)("p",null,"\u652f\u6301\u6ce8\u91ca\uff0c\u5728\u884c\u9996\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"#")," \u6807\u8bc6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"# this is a comment\n")),(0,a.kt)("p",null,"\u652f\u6301wildcard\u7684\u8868\u8fbe\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"*.jpg\n*.png\n")))}d.isMDXComponent=!0}}]);