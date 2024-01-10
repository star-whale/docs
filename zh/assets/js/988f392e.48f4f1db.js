"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[92235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=l,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},89484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(83117),l=(n(67294),n(3905));const a={title:"Starwhale \u6a21\u578b SDK"},i=void 0,o={unversionedId:"reference/sdk/model",id:"version-0.6.8/reference/sdk/model",title:"Starwhale \u6a21\u578b SDK",description:"model.build",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.8/reference/sdk/model.md",sourceDirName:"reference/sdk",slug:"/reference/sdk/model",permalink:"/zh/0.6.8/reference/sdk/model",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.8/reference/sdk/model.md",tags:[],version:"0.6.8",frontMatter:{title:"Starwhale \u6a21\u578b SDK"},sidebar:"mainSidebar",previous:{title:"Starwhale \u6a21\u578b\u8bc4\u6d4b SDK",permalink:"/zh/0.6.8/reference/sdk/evaluation"},next:{title:"Starwhale \u4efb\u52a1 SDK",permalink:"/zh/0.6.8/reference/sdk/job"}},p={},d=[{value:"model.build",id:"modelbuild",level:2},{value:"\u53c2\u6570",id:"build-params",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"build-example",level:3}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"modelbuild"},"model.build"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model.build")," \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u80fd\u591f\u6784\u5efa Starwhale \u6a21\u578b\uff0c\u7b49\u4ef7\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model build")," \u547d\u4ee4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def build(\n    modules: t.Optional[t.List[t.Any]] = None,\n    workdir: t.Optional[_path_T] = None,\n    name: t.Optional[str] = None,\n    project_uri: str = "",\n    desc: str = "",\n    remote_project_uri: t.Optional[str] = None,\n    add_all: bool = False,\n    tags: t.List[str] | None = None,\n) -> None:\n')),(0,l.kt)("h3",{id:"build-params"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"modules"),": (List","[str|object]",", optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6784\u5efa\u65f6\u5bfc\u5165\u7684\u6a21\u5757\uff0c\u4e3a\u5217\u8868\u7c7b\u578b\uff0c\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u6a21\u5757\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6a21\u5757\u7c7b\u578b\u5305\u542b\u4e24\u79cd\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'\u5b57\u7b26\u4e32\u7c7b\u578b\uff1a Python \u53ef Import \u7684\u8def\u5f84\uff0c\u6bd4\u5982 "to.path.module", "to.path.module:object" \u3002'),(0,l.kt)("li",{parentName:"ul"},"Python \u5bf9\u8c61\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"model.build")," \u51fd\u6570\u4f1a\u81ea\u52a8\u89e3\u6790\u6240\u5bf9\u5e94\u7684\u6a21\u5757\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u4f1a\u641c\u7d22\u5f53\u524d\u5df2\u7ecf\u5bfc\u5165\u7684\u6a21\u5757\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),": (str, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Starwhale \u6a21\u578b\u7684\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u82e5\u4e0d\u6307\u5b9a\uff0c\u5219\u4f1a\u4f7f\u7528 cwd \u76ee\u5f55\u540d\u4f5c\u4e3a Starwhale \u6a21\u578b\u7684\u540d\u79f0\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"workdir"),": (str, Pathlib.Path, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Starwhale \u6a21\u578b\u6253\u5305\u7684\u6839\u76ee\u5f55\uff0c\u6b64\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u4f1a\u88ab\u6253\u5305\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"project_uri"),": (str, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Project URI\uff0c\u8868\u793a\u8be5\u6a21\u578b\u5c5e\u4e8e\u54ea\u4e2a\u9879\u76ee\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"swcli project select")," \u9009\u62e9\u7684\u9879\u76ee\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"desc"),": (str, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\u4fe1\u606f\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"remote_project_uri"),": (str, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u793a\u4f8b\u7684\u9879\u76ee URI\uff0c\u6784\u5efa\u5b8cStarwhale \u6a21\u578b\u540e\uff0c\u4f1a\u88ab\u81ea\u52a8\u590d\u5236\u5230\u8fdc\u7aef\u5b9e\u4f8b\u4e2d\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"add_all"),": (bool, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Starwhale \u6a21\u578b\u6253\u5305\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u5ffd\u7565\u4e00\u4e9b\u7c7b\u4f3c pyc/venv/conda \u6784\u5efa\u76ee\u5f55\u7b49\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u53c2\u6570\u5c06\u8fd9\u4e9b\u6587\u4ef6\u4e5f\u8fdb\u884c\u6253\u5305\u3002\u5373\u4f7f\u8be5\u53c2\u6570\u4f7f\u7528\uff0c\u4e5f\u4e0d\u5f71\u54cd ",(0,l.kt)("inlineCode",{parentName:"li"},".swignore")," \u6587\u4ef6\u7684\u9884\u671f\u4f5c\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"False"),"\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tags"),": (List","[str]",", optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u81ea\u5b9a\u4e49\u6807\u7b7e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"li"},"latest")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"^v\\d+$")," \u8fd9\u4e24\u4e2a Starwhale \u7cfb\u7edf\u5185\u5efa\u6807\u7b7e\u3002")))),(0,l.kt)("h3",{id:"build-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import model\n\n# class search handlers\nfrom .user.code.evaluator import ExamplePipelineHandler\nmodel.build([ExamplePipelineHandler])\n\n# function search handlers\nfrom .user.code.evaluator import predict_image\nmodel.build([predict_image])\n\n# module handlers, @handler decorates function in this module\nfrom .user.code import evaluator\nmodel.build([evaluator])\n\n# str search handlers\nmodel.build(["user.code.evaluator:ExamplePipelineHandler"])\nmodel.build(["user.code1", "user.code2"])\n\n# no search handlers, use imported modules\nmodel.build()\n\n# add user custom tags\nmodel.build(tags=["t1", "t2"])\n')))}m.isMDXComponent=!0}}]);