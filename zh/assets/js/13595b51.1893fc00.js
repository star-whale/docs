"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[1119],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=l,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11046:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(83117),l=(a(67294),a(3905));const r={title:"\u6838\u5fc3\u6982\u5ff5"},i=void 0,o={unversionedId:"evaluation/concepts",id:"version-0.4.5/evaluation/concepts",title:"\u6838\u5fc3\u6982\u5ff5",description:"\u8bbe\u8ba1\u6982\u8ff0",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.5/evaluation/concepts.md",sourceDirName:"evaluation",slug:"/evaluation/concepts",permalink:"/zh/docs/evaluation/concepts",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.5/evaluation/concepts.md",tags:[],version:"0.4.5",frontMatter:{title:"\u6838\u5fc3\u6982\u5ff5"}},p={},s=[{value:"\u8bbe\u8ba1\u6982\u8ff0",id:"\u8bbe\u8ba1\u6982\u8ff0",level:2},{value:"Starwhale Evaluation \u5b9a\u4f4d",id:"starwhale-evaluation-\u5b9a\u4f4d",level:3},{value:"\u6838\u5fc3\u529f\u80fd",id:"\u6838\u5fc3\u529f\u80fd",level:3},{value:"\u5173\u952e\u5143\u7d20",id:"\u5173\u952e\u5143\u7d20",level:3},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",level:2},{value:"\u547d\u4ee4\u884c\u5206\u7ec4",id:"\u547d\u4ee4\u884c\u5206\u7ec4",level:3},{value:"\u5178\u578b\u5de5\u4f5c\u6d41\u7a0b",id:"\u5178\u578b\u5de5\u4f5c\u6d41\u7a0b",level:3},{value:"job-step-task \u62bd\u8c61",id:"job-step-task-\u62bd\u8c61",level:2},{value:"\u5728\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u8bc4\u6d4b\u4efb\u52a1",id:"\u5728\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u8bc4\u6d4b\u4efb\u52a1",level:2},{value:"\u8986\u76d6step\u914d\u7f6e",id:"\u8986\u76d6step\u914d\u7f6e",level:3}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u8bbe\u8ba1\u6982\u8ff0"},"\u8bbe\u8ba1\u6982\u8ff0"),(0,l.kt)("h3",{id:"starwhale-evaluation-\u5b9a\u4f4d"},"Starwhale Evaluation \u5b9a\u4f4d"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Starwhale Evaluation")," \u76ee\u6807\u662f\u5bf9\u6a21\u578b\u8bc4\u6d4b\u8fdb\u884c\u5168\u6d41\u7a0b\u7ba1\u7406\uff0c\u5305\u62ec\u521b\u5efaJob\u3001\u5206\u53d1Task\u3001\u67e5\u770b\u6a21\u578b\u8bc4\u6d4b\u62a5\u544a\u548c\u57fa\u672c\u7ba1\u7406\u7b49\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Starwhale Evaluation")," \u662fStarwhale\u6784\u5efa\u7684MLOps\u5de5\u5177\u94fe\uff0c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Starwhale Model"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Starwhale Dataset"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Starwhale Runtime")," \u4e09\u4e2a\u57fa\u7840\u5143\u7d20\uff0c\u5728\u6a21\u578b\u8bc4\u6d4b\u8fd9\u4e2a\u573a\u666f\u4e0a\u7684\u5177\u4f53\u5e94\u7528\uff0c\u540e\u7eed\u8fd8\u4f1a\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"Starwhale ModelServing"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Starwhale Training")," \u7b49\u5e94\u7528\u573a\u666f\u3002"),(0,l.kt)("h3",{id:"\u6838\u5fc3\u529f\u80fd"},"\u6838\u5fc3\u529f\u80fd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u53ef\u89c6\u5316\u5c55\u793a"),"\uff1aCLI\u548cWeb UI\u90fd\u63d0\u4f9b\u5bf9\u6a21\u578b\u8bc4\u6d4b\u7ed3\u679c\u7684\u53ef\u89c6\u5316\u5c55\u793a\uff0c\u652f\u6301\u591a\u4e2a\u7ed3\u679c\u7684\u5bf9\u6bd4\u7b49\u529f\u80fd\uff0c\u540c\u65f6\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8bb0\u5f55\u8bc4\u6d4b\u4e2d\u95f4\u8fc7\u7a0b\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u591a\u573a\u666f\u9002\u914d"),"\uff1a\u4e0d\u7ba1\u662f\u5728\u7b14\u8bb0\u672c\u7684\u5355\u673a\u73af\u5883\uff0c\u8fd8\u662f\u5728\u5206\u5e03\u5f0f\u670d\u52a1\u5668\u96c6\u7fa4\u73af\u5883\uff0c\u90fd\u80fd\u4f7f\u7528\u7edf\u4e00\u7684\u547d\u4ee4\u3001Python\u811a\u672c\u3001\u5236\u54c1\u548c\u64cd\u4f5c\u65b9\u6cd5\u8fdb\u884c\u6a21\u578b\u8bc4\u6d4b\uff0c\u6ee1\u8db3\u4e0d\u540c\u7b97\u529b\u3001\u4e0d\u540c\u6570\u636e\u91cf\u7684\u5916\u90e8\u73af\u5883\u8981\u6c42\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Starwhale\u65e0\u7f1d\u96c6\u6210"),"\uff1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"Starwhale Runtime"),"\u63d0\u4f9b\u7684\u8fd0\u884c\u73af\u5883\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"li"},"Starwhale Dataset")," \u4f5c\u4e3a\u6570\u636e\u8f93\u5165\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"Starwhale Model")," \u4e2d\u8fd0\u884c\u6a21\u578b\u8bc4\u6d4b\u4efb\u52a1\uff0c\u4e0d\u7ba1\u662f\u5728CLI\u3001Python SDK\u8fd8\u662fCloud Instance Web UI\u4e2d\uff0c\u90fd\u80fd\u975e\u5e38\u7b80\u5355\u8fdb\u884c\u914d\u7f6e\u3002")),(0,l.kt)("h3",{id:"\u5173\u952e\u5143\u7d20"},"\u5173\u952e\u5143\u7d20"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli eval")," \u547d\u4ee4\u884c\uff1a\u4e00\u7ec4\u6a21\u578b\u8bc4\u6d4b\u7684\u76f8\u5173\u547d\u4ee4\uff0c\u53ef\u4ee5\u89e6\u53d1\u4efb\u52a1\u3001\u7ed3\u679c\u5c55\u793a\u548c\u57fa\u672c\u7ba1\u7406\u7b49\uff0c\u5177\u4f53\u8bf4\u660e\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"/zh/docs/evaluation/api/cli"},"CLI Reference"),"\u3002")),(0,l.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,l.kt)("h3",{id:"\u547d\u4ee4\u884c\u5206\u7ec4"},"\u547d\u4ee4\u884c\u5206\u7ec4"),(0,l.kt)("p",null,"\u4ece\u5b8c\u6210 ",(0,l.kt)("inlineCode",{parentName:"p"},"Starwhale Evaluation")," \u5168\u6d41\u7a0b\u4efb\u52a1\u7684\u89d2\u5ea6\uff0c\u53ef\u4ee5\u5c06\u6240\u6d89\u53ca\u7684\u547d\u4ee4\u5206\u7ec4\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u57fa\u7840\u51c6\u5907\u9636\u6bb5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli dataset build")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli model build")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli runtime build")))),(0,l.kt)("li",{parentName:"ul"},"\u8bc4\u6d4b\u9636\u6bb5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli model eval")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli eval run")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli eval cancel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli eval pause")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli eval resume")))),(0,l.kt)("li",{parentName:"ul"},"\u7ed3\u679c\u5c55\u793a\u9636\u6bb5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli eval info")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli eval compare")))),(0,l.kt)("li",{parentName:"ul"},"\u57fa\u672c\u7ba1\u7406",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli eval list")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli eval remove")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"swcli eval recover"))))),(0,l.kt)("h3",{id:"\u5178\u578b\u5de5\u4f5c\u6d41\u7a0b"},"\u5178\u578b\u5de5\u4f5c\u6d41\u7a0b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"eval-workflow.jpg",src:a(63526).Z,width:"2428",height:"788"})),(0,l.kt)("h2",{id:"job-step-task-\u62bd\u8c61"},"job-step-task \u62bd\u8c61"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"job\uff1a\u4e00\u6b21\u6a21\u578b\u8bc4\u6d4b\u4efb\u52a1\u5c31\u662f\u4e00\u4e2ajob\uff0c\u4e00\u4e2ajob\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2astep\u3002"),(0,l.kt)("li",{parentName:"ul"},"step\uff1astep\u5bf9\u5e94\u8bc4\u6d4b\u8fc7\u7a0b\u4e2d\u7684\u67d0\u4e2a\u9636\u6bb5\u3002\u4f7f\u7528PipelineHandler\u7684\u9ed8\u8ba4\u8bc4\u6d4b\u8fc7\u7a0b\uff0cstep\u5c31\u662fppl\u548ccmp\uff1b\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u8bc4\u6d4b\u8fc7\u7a0b\uff0cstep\u5c31\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"@step")," \u4fee\u9970\u7684\u51fd\u6570\u3002step\u4e4b\u95f4\u53ef\u4ee5\u6709\u4f9d\u8d56\u5173\u7cfb\uff0c\u5f62\u6210\u4e00\u4e2aDAG\u3002\u4e00\u4e2astep\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2atask\u3002\u540c\u4e00step\u4e2d\u7684\u4e0d\u540ctask\uff0c\u6267\u884c\u903b\u8f91\u662f\u4e00\u81f4\u7684\uff0c\u53ea\u662f\u8f93\u5165\u53c2\u6570\u4e0d\u540c\uff0c\u5e38\u89c1\u505a\u6cd5\u662f\u5c06\u6570\u636e\u96c6\u5206\u5272\u6210\u82e5\u5e72\u90e8\u5206\uff0c\u7136\u540e\u4f20\u5165\u6bcf\u4e2atask\u4e2d\uff0ctask\u53ef\u4ee5\u5e76\u884c\u6267\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},"task\uff1atask\u662f\u6700\u7ec8\u8fd0\u884c\u7684\u5b9e\u4f53\u3002\u5728Cloud Instance\u4e2d\uff0c\u4e00\u4e2atask\u5c31\u662f\u4e00\u4e2aPod\u7684container\uff1b\u5728Standalone Instance\u4e2d\uff0c\u4e00\u4e2atask\u5c31\u662f\u4e00\u4e2aPython Thread\u3002")),(0,l.kt)("p",null,"job-step-task \u7684\u62bd\u8c61\u662f\u5b9e\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"Starwhale Evaluation")," \u5206\u5e03\u5f0f\u8fd0\u884c\u7684\u57fa\u7840\u3002"),(0,l.kt)("h2",{id:"\u5728\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u8bc4\u6d4b\u4efb\u52a1"},"\u5728\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u8bc4\u6d4b\u4efb\u52a1"),(0,l.kt)("h3",{id:"\u8986\u76d6step\u914d\u7f6e"},"\u8986\u76d6step\u914d\u7f6e"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728\u521b\u5efajob\u7684\u65f6\u5019\u63d0\u4ea4\u4e00\u4e2ayaml\u6765\u8986\u76d6\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"swmp"),"\u4e2d\u786c\u7f16\u7801\u7684step\u914d\u7f6e\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"resources"),"\u5b57\u6bb5\u7684\u884c\u4e3a\u4e0e",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"K8S\u5bb9\u5668\u4e0epod\u7684\u8d44\u6e90\u7ba1\u7406"),"\u4e2d\u63cf\u8ff0\u7684\u4e00\u6837\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  - job_name: default\n    needs: [ ]\n    resources:\n      - type: cpu # nvidia.com/gpu, memory\n        request: 1 # float\n        limit: 1 # float\n    name: ppl\n    task_num: 2\n  - job_name: default\n    needs:\n      - ppl\n    resources:\n      - type: cpu\n        request: 1\n        limit: 1\n    name: cmp\n    task_num: 1\n")))}c.isMDXComponent=!0},63526:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/eval-workflow-8e9cd6e738141f26de77cc99780a6d82.jpg"}}]);