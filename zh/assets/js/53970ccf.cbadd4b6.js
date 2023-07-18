"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9697],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,v=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(v,c(c({ref:t},p),{},{components:r})):n.createElement(v,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},209:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(3117),o=(r(7294),r(3905));const a={title:"Starwhale\u4e2d\u7684\u8d44\u6e90\u7248\u672c\u63a7\u5236"},c=void 0,i={unversionedId:"concepts/versioning",id:"concepts/versioning",title:"Starwhale\u4e2d\u7684\u8d44\u6e90\u7248\u672c\u63a7\u5236",description:"Starwhale\u7ba1\u7406\u6240\u6709\u6a21\u578b\u3001\u6570\u636e\u96c6\u548c\u8fd0\u884c\u65f6\u7684\u5386\u53f2\u8bb0\u5f55\u3002\u5bf9\u7279\u5b9a\u8d44\u6e90\u7684\u6bcf\u6b21\u66f4\u65b0\u90fd\u4f1a\u9644\u52a0\u4e00\u4e2a\u65b0\u7248\u672c\u7684\u5386\u53f2\u8bb0\u5f55\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/concepts/versioning.md",sourceDirName:"concepts",slug:"/concepts/versioning",permalink:"/zh/docs/next/concepts/versioning",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/concepts/versioning.md",tags:[],version:"current",frontMatter:{title:"Starwhale\u4e2d\u7684\u8d44\u6e90\u7248\u672c\u63a7\u5236"},sidebar:"mainSidebar",previous:{title:"Starwhale\u4e2d\u7684\u89d2\u8272\u548c\u6743\u9650",permalink:"/zh/docs/next/concepts/roles-permissions"},next:{title:"index",permalink:"/zh/docs/next/instances/standalone/"}},l={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Starwhale\u7ba1\u7406\u6240\u6709\u6a21\u578b\u3001\u6570\u636e\u96c6\u548c\u8fd0\u884c\u65f6\u7684\u5386\u53f2\u8bb0\u5f55\u3002\u5bf9\u7279\u5b9a\u8d44\u6e90\u7684\u6bcf\u6b21\u66f4\u65b0\u90fd\u4f1a\u9644\u52a0\u4e00\u4e2a\u65b0\u7248\u672c\u7684\u5386\u53f2\u8bb0\u5f55\u3002"),(0,o.kt)("p",null,"\u7248\u672c\u7531version id\u6807\u8bc6\u3002version id\u662f\u7531 Starwhale\u81ea\u52a8\u751f\u6210\u7684\u968f\u673a\u5b57\u7b26\u4e32\uff0c\u5e76\u6309\u5176\u521b\u5efa\u65f6\u95f4\u6392\u5e8f\u3002"),(0,o.kt)("p",null,"\u7248\u672c\u53ef\u4ee5\u6709\u6807\u7b7e\u3002Starwhale\u4f7f\u7528\u7248\u672c\u6807\u7b7e\u6765\u63d0\u4f9b\u4eba\u6027\u5316\u7684\u7248\u672c\u8868\u793a\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cStarwhale\u4f1a\u4e3a\u6bcf\u4e2a\u7248\u672c\u9644\u52a0\u4e00\u4e2a\u9ed8\u8ba4\u6807\u7b7e\u3002\u9ed8\u8ba4\u6807\u8bb0\u662f\u5b57\u6bcd\u201cv\u201d\u540e\u8ddf\u4e00\u4e2a\u6570\u5b57\u3002\u5bf9\u4e8e\u6bcf\u4e2a\u7248\u672c\u5316\u7684\u8d44\u6e90\uff0c\u7b2c\u4e00\u4e2a\u7248\u672c\u6807\u7b7e\u59cb\u7ec8\u6807\u8bb0\u4e3a\u201cv0\u201d\uff0c\u7b2c\u4e8c\u4e2a\u7248\u672c\u6807\u8bb0\u4e3a\u201cv1\u201d\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002\u6709\u4e00\u4e2a\u7279\u6b8a\u7684\u6807\u7b7e\u201clatest\u201d\u603b\u662f\u6307\u5411\u6700\u65b0\u7684\u7248\u672c\u3002\u5220\u9664\u7248\u672c\u540e\uff0c\u5c06\u4e0d\u4f1a\u91cd\u590d\u4f7f\u7528\u5176\u9ed8\u8ba4\u6807\u7b7e\u3002\u4f8b\u5982\uff0c\u6709\u4e00\u4e2a\u5e26\u6709\u6807\u7b7e\u201cv0\u3001v1\u3001v2\u201d\u7684\u6a21\u578b\u3002 \u5220\u9664\u201cv2\u201d\u540e\uff0c\u6807\u7b7e\u5c06\u4e3a\u201cv0\u3001v1\u201d\u3002 \u63a5\u4e0b\u6765\u4e00\u4e2a\u6807\u7b7e\u5c06\u662f\u201cv3\u201d\u800c\u4e0d\u662f\u201cv2\u201d\u3002\u60a8\u53ef\u4ee5\u5c06\u81ea\u5df1\u5b9a\u4e49\u7684\u6807\u7b7e\u9644\u52a0\u5230\u4efb\u4f55\u7248\u672c\u5e76\u968f\u65f6\u5220\u9664\u5b83\u4eec\u3002"),(0,o.kt)("p",null,"Starwhale\u4f7f\u7528\u7ebf\u6027\u5386\u53f2\uff0c\u4e0d\u63d0\u4f9b\u5206\u652f\u3002"),(0,o.kt)("p",null,"Starwhale\u8d44\u6e90\u65e0\u6cd5\u771f\u6b63\u56de\u6eda\u3002\u5f53\u8981\u6062\u590d\u67d0\u4e2a\u5386\u53f2\u7248\u672c\u65f6\uff0cStarwhale\u4f1a\u590d\u5236\u8be5\u7248\u672c\u6570\u636e\u5e76\u5c06\u5176\u4f5c\u4e3a\u65b0\u7248\u672c\u8ffd\u52a0\u5230\u5386\u53f2\u8bb0\u5f55\u7684\u672b\u5c3e\u3002\u60a8\u53ef\u4ee5\u624b\u52a8\u5220\u9664\u548c\u6062\u590d\u5386\u53f2\u7248\u672c\u3002"))}u.isMDXComponent=!0}}]);