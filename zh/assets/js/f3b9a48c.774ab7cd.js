"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[7389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),k=l,s=c["".concat(m,".").concat(k)]||c[k]||u[k]||r;return n?a.createElement(s,i(i({ref:t},d),{},{components:n})):a.createElement(s,i({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},78732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(83117),l=(n(67294),n(3905));const r={title:"model.yaml \u4f7f\u7528\u6307\u5357"},i=void 0,o={unversionedId:"model/yaml",id:"version-0.5.10/model/yaml",title:"model.yaml \u4f7f\u7528\u6307\u5357",description:"model.yaml \u5bf9\u4e8e swcli model build \u6784\u5efa\u6a21\u578b\u7684\u8fc7\u7a0b\u662f\u975e\u5fc5\u8981\u7684\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.5.10/model/yaml.md",sourceDirName:"model",slug:"/model/yaml",permalink:"/zh/model/yaml",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.5.10/model/yaml.md",tags:[],version:"0.5.10",frontMatter:{title:"model.yaml \u4f7f\u7528\u6307\u5357"},sidebar:"mainSidebar",previous:{title:"Starwhale \u6a21\u578b",permalink:"/zh/model/"},next:{title:"Starwhale \u8fd0\u884c\u65f6",permalink:"/zh/runtime/"}},m={},p=[{value:"YAML \u5b57\u6bb5\u63cf\u8ff0",id:"yaml-\u5b57\u6bb5\u63cf\u8ff0",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml")," \u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model build")," \u6784\u5efa\u6a21\u578b\u7684\u8fc7\u7a0b\u662f\u975e\u5fc5\u8981\u7684\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Starwhale Model")," \u6784\u5efa\u65f6\uff0c\u82e5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model build")," \u547d\u4ee4\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--model-yaml")," \u53c2\u6570\u6307\u5b9a\u7b26\u5408\u7279\u5b9a\u683c\u5f0f\u7684yaml\u6587\u4ef6\uff0c\u7b80\u5316\u6a21\u578b\u6784\u5efa\u7684\u53c2\u6570\u6307\u5b9a\u3002"),(0,l.kt)("p",null,"\u5373\u4f7f\u4e0d\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"--model-yaml")," \u53c2\u6570\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model build")," \u4e5f\u4f1a\u81ea\u52a8\u5bfb\u627e ",(0,l.kt)("inlineCode",{parentName:"p"},"${workdir}")," \u76ee\u5f55\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml")," \u6587\u4ef6\uff0c\u4f1a\u63d0\u53d6\u5176\u4e2d\u7684\u53c2\u6570\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model build")," \u547d\u4ee4\u884c\u4e2d\u6307\u5b9a\u53c2\u6570\u4f18\u5148\u7ea7\u5927\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml")," \u4e2d\u7684\u7b49\u4ef7\u914d\u7f6e\uff0c\u53ef\u4ee5\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," \u547d\u4ee4\u884c\u7684\u914d\u7f6e\u6587\u4ef6\u5316\u8868\u8ff0\u3002"),(0,l.kt)("p",null,"\u5f53\u4f7f\u7528 Python SDK \u65b9\u5f0f\u6784\u5efa Starwhale \u6a21\u578b\u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml")," \u6587\u4ef6\u4e0d\u751f\u6548\u3002"),(0,l.kt)("h2",{id:"yaml-\u5b57\u6bb5\u63cf\u8ff0"},"YAML \u5b57\u6bb5\u63cf\u8ff0"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u8981"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"Starwhale Model \u7684\u540d\u5b57\uff0c\u7b49\u4ef7\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"--name")," \u53c2\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"run.modules"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6a21\u578b\u6784\u5efa\u65f6\u641c\u7d22\u7684Python Moduels\uff0c\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u6a21\u578b\u8fd0\u884c\u7684\u5165\u53e3\u70b9\uff0c\u683c\u5f0f\u4e3a Python \u53ef Imported \u8def\u5f84\u3002\u7b49\u4ef7\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"--module")," \u53c2\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"List","[String]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"run.handler"),(0,l.kt)("td",{parentName:"tr",align:null},"run.modules\u7684\u66fe\u7528\u5199\u6cd5\uff0c\u53ea\u80fd\u6307\u5b9a\u4e00\u4e2a\u6a21\u578b\u8fd0\u884c\u7684\u5165\u53e3\u70b9\uff0c\u5df2\u5e9f\u5f03"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},"dataset.yaml\u683c\u5f0f\u7248\u672c\uff0c\u76ee\u524d\u4ec5\u652f\u6301\u586b\u5199 1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"desc"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u96c6\u63cf\u8ff0\u4fe1\u606f\uff0c\u7b49\u4ef7\u4e8e ",(0,l.kt)("inlineCode",{parentName:"td"},"--desc")," \u53c2\u6570\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'name: helloworld\nrun:\n  modules:\n    - src.evaluator\ndesc: "example yaml"\n')),(0,l.kt)("p",null,"\u540d\u79f0\u4e3a helloworld \u7684 Starwhale \u6a21\u578b\uff0c\u641c\u7d22 ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model build {WORKDIR}")," \u547d\u4ee4\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"${WORKDIR}")," \u76ee\u5f55\u76f8\u5bf9\u7684 src/evaluator.py \u6587\u4ef6\u4e2d\u88ab ",(0,l.kt)("inlineCode",{parentName:"p"},"@evaluation.predict"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"@evaluation.evaluate")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"@handler")," \u4fee\u9970\u7684\u51fd\u6570, \u6216\u7ee7\u627f\u81ea ",(0,l.kt)("inlineCode",{parentName:"p"},"PipelineHandler")," \u7684\u7c7b\uff0c\u8fd9\u4e9b\u51fd\u6570\u6216\u7c7b\u4f1a\u88ab\u52a0\u5165 Starwhale \u6a21\u578b\u53ef\u8fd0\u884c\u7684\u5165\u53e3\u70b9\u5217\u8868\u4e2d\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli model run")," \u6216 Web UI \u8fd0\u884c\u65f6\uff0c\u9009\u62e9\u5bf9\u5e94\u7684\u5165\u53e3\u70b9(handler)\u8fd0\u884c\u6a21\u578b\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"model.yaml")," \u662f\u975e\u5fc5\u8981\u7684\uff0cyaml \u4e2d\u5b9a\u4e49\u53c2\u6570\u53ef\u4ee5\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," \u547d\u4ee4\u884c\u53c2\u6570\u4e2d\u6307\u5b9a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model build . --model-yaml model.yaml\n")),(0,l.kt)("p",null,"\u7b49\u4ef7\u4e8e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'swcli model build . --name helloworld --module src.evaluator --desc "example yaml"\n')))}u.isMDXComponent=!0}}]);