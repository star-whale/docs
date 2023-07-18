"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[7610],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(f,o(o({ref:n},u),{},{components:t})):a.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2336:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(3117),r=(t(7294),t(3905));const i={title:"Configuration"},o=void 0,s={unversionedId:"instances/standalone/guides/config",id:"version-0.4.6/instances/standalone/guides/config",title:"Configuration",description:"You could customize your swcli by swci config edit:",source:"@site/versioned_docs/version-0.4.6/instances/standalone/guides/config.md",sourceDirName:"instances/standalone/guides",slug:"/instances/standalone/guides/config",permalink:"/docs/0.4.6/instances/standalone/guides/config",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.6/instances/standalone/guides/config.md",tags:[],version:"0.4.6",frontMatter:{title:"Configuration"},sidebar:"mainSidebar",previous:{title:"Starwhale Resources URI",permalink:"/docs/0.4.6/instances/standalone/guides/uri"},next:{title:".swignore File",permalink:"/docs/0.4.6/instances/standalone/guides/swignore"}},l={},c=[{value:"link_auths",id:"link_auths",level:3}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You could customize your ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"swci config edit"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"swcli config edit\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"current_instance: local\ninstances:\n  local:\n    current_project: self\n    type: standalone\n    updated_at: 2022-12-29 15:16:10 CST\n    uri: local\n    user_name: renyanda\nlink_auths:\n  - ak: starwhale\n    bucket: users\n    connect_timeout: 10.0\n    endpoint: http://10.131.0.1:9000\n    read_timeout: 100.0\n    sk: starwhale\n    type: s3\nstorage:\n  root: /home/renyanda/.starwhale\nversion: '2.0'\n\n")),(0,r.kt)("h3",{id:"link_auths"},"link_auths"),(0,r.kt)("p",null,"You could put ",(0,r.kt)("inlineCode",{parentName:"p"},"starwhale.Link")," to your assets while the URI in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Link")," could be whatever(only s3 like or http is implemented) you need, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"s3://10.131.0.1:9000/users/path"),". However, ",(0,r.kt)("inlineCode",{parentName:"p"},"Link"),"s may need to be authed, you could config the auth info in ",(0,r.kt)("inlineCode",{parentName:"p"},"link_auths")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"link_auths:\n  - type: s3\n    ak: starwhale\n    bucket: users\n    region: local\n    connect_timeout: 10.0\n    endpoint: http://10.131.0.1:9000\n    read_timeout: 100.0\n    sk: starwhale\n")),(0,r.kt)("p",null,"Items in ",(0,r.kt)("inlineCode",{parentName:"p"},"link_auths")," will match the uri in ",(0,r.kt)("inlineCode",{parentName:"p"},"Link"),"s automatically. ",(0,r.kt)("inlineCode",{parentName:"p"},"s3")," typed link_auth matching ",(0,r.kt)("inlineCode",{parentName:"p"},"Link"),"s by looking up ",(0,r.kt)("inlineCode",{parentName:"p"},"bucket")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")))}p.isMDXComponent=!0}}]);