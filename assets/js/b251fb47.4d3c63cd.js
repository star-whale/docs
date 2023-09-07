"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[7983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,f=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},87824:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(83117),a=(r(67294),r(3905));const l={title:"Starwhale Model SDK"},i=void 0,o={unversionedId:"reference/sdk/model",id:"reference/sdk/model",title:"Starwhale Model SDK",description:"model.build",source:"@site/docs/reference/sdk/model.md",sourceDirName:"reference/sdk",slug:"/reference/sdk/model",permalink:"/next/reference/sdk/model",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/docs/reference/sdk/model.md",tags:[],version:"current",frontMatter:{title:"Starwhale Model SDK"},sidebar:"mainSidebar",previous:{title:"Starwhale Model Evaluation SDK",permalink:"/next/reference/sdk/evaluation"},next:{title:"Starwhale Task SDK",permalink:"/next/reference/sdk/job"}},d={},p=[{value:"model.build",id:"modelbuild",level:2},{value:"Parameters",id:"build-params",level:3},{value:"Examples",id:"build-example",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"modelbuild"},"model.build"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"model.build")," is a function that can build the Starwhale model, equivalent to the ",(0,a.kt)("inlineCode",{parentName:"p"},"swcli model build")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def build(\n    modules: t.Optional[t.List[t.Any]] = None,\n    workdir: t.Optional[_path_T] = None,\n    name: t.Optional[str] = None,\n    project_uri: str = "",\n    desc: str = "",\n    remote_project_uri: t.Optional[str] = None,\n    add_all: bool = False,\n    tags: t.List[str] | None = None,\n) -> None:\n')),(0,a.kt)("h3",{id:"build-params"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"modules"),": (List","[str|object]",", optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'The search modules supports object(function, class or module) or str(example: "to.path.module", "to.path.module:object").'),(0,a.kt)("li",{parentName:"ul"},"If the argument is not specified, the search modules are the imported modules."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": (str, optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Starwhale Model name."),(0,a.kt)("li",{parentName:"ul"},"The default is the current work dir (cwd) name."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"workdir"),": (str, Pathlib.Path, optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The path of the rootdir. The default workdir is the current working dir."),(0,a.kt)("li",{parentName:"ul"},"All files in the workdir will be packaged. If you want to ignore some files, you can add ",(0,a.kt)("inlineCode",{parentName:"li"},".swignore")," file in the workdir."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"project_uri"),": (str, optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The project uri of the Starwhale Model."),(0,a.kt)("li",{parentName:"ul"},"If the argument is not specified, the project_uri is the config value of ",(0,a.kt)("inlineCode",{parentName:"li"},"swcli project select")," command."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"desc"),": (str, optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The description of the Starwhale Model."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"remote_project_uri"),": (str, optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Project URI of another example instance. After the Starwhale model is built, it will be automatically copied to the remote instance."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"add_all"),": (bool, optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Add all files in the working directory to the model package(excludes python cache files and virtual environment files when disabled).The ",(0,a.kt)("inlineCode",{parentName:"li"},".swignore")," file still takes effect."),(0,a.kt)("li",{parentName:"ul"},"The default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"False"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tags"),": (List","[str]",", optional)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The tags for the model version."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"latest")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"^v\\d+$")," tags are reserved tags.")))),(0,a.kt)("h3",{id:"build-example"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import model\n\n# class search handlers\nfrom .user.code.evaluator import ExamplePipelineHandler\nmodel.build([ExamplePipelineHandler])\n\n# function search handlers\nfrom .user.code.evaluator import predict_image\nmodel.build([predict_image])\n\n# module handlers, @handler decorates function in this module\nfrom .user.code import evaluator\nmodel.build([evaluator])\n\n# str search handlers\nmodel.build(["user.code.evaluator:ExamplePipelineHandler"])\nmodel.build(["user.code1", "user.code2"])\n\n# no search handlers, use imported modules\nmodel.build()\n\n# add user custom tags\nmodel.build(tags=["t1", "t2"])\n')))}u.isMDXComponent=!0}}]);