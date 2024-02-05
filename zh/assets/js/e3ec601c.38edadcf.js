"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[11104],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var r=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),m=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(a),c=l,d=u["".concat(p,".").concat(c)]||u[c]||h[c]||n;return a?r.createElement(d,i(i({ref:t},s),{},{components:a})):r.createElement(d,i({ref:t},s))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<n;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},45681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>m});var r=a(83117),l=(a(67294),a(3905));const n={title:"\u4f7f\u7528\u793a\u4f8b"},i=void 0,o={unversionedId:"examples/index",id:"version-0.6.10/examples/index",title:"\u4f7f\u7528\u793a\u4f8b",description:"- \ud83d\udd25 Helloworld \u793a\u4f8b\uff1a Cloud, Code",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.10/examples/index.md",sourceDirName:"examples",slug:"/examples/",permalink:"/zh/examples/",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.10/examples/index.md",tags:[],version:"0.6.10",frontMatter:{title:"\u4f7f\u7528\u793a\u4f8b"},sidebar:"mainSidebar",previous:{title:"Starwhale Cloud\u5165\u95e8\u6307\u5357",permalink:"/zh/getting-started/cloud"},next:{title:"Starwhale\u7684 Helloworld \u4f8b\u5b50-\u8bc4\u6d4bKNN\u7b97\u6cd5\u5728\u624b\u5199\u4f53\u6570\u5b57\u8bc6\u522b\u4efb\u52a1\u4e0a\u7684\u6548\u679c",permalink:"/zh/examples/helloworld"}},p={},m=[],s={toc:m};function h(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud83d\udd25 Helloworld \u793a\u4f8b\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://cloud.starwhale.cn/projects/15/evaluations"},"Cloud"),", ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/helloworld"},"Code"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud83d\ude80 \u5927\u8bed\u8a00\u6a21\u578b\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc0a \u5f00\u6e90\u5927\u8bed\u8a00\u6a21\u578b\u8bc4\u6d4b\u699c\u5355\uff1a ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn/projects/349/evaluations"},"Evaluation"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/llm-leaderboard"},"Code")),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc22 Llama2: ",(0,l.kt)("a",{parentName:"li",href:"https://starwhale.cn/docs/en/blog/run-llama2-chat-in-five-minutes/"},"Run llama2 chat in five minutes"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/LLM/llama2"},"Code")),(0,l.kt)("li",{parentName:"ul"},"\ud83e\udd8e \u6587\u751f\u56fe\uff1a ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn/projects/374/models"},"Cloud Demo"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/stable-diffusion-webui"},"Code")),(0,l.kt)("li",{parentName:"ul"},"\ud83e\udd99 LLAMA ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/LLM/llama"},"evaluation and fine-tune")),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udfb9 \u6587\u751f\u97f3\u4e50\uff1a ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn/projects/400/overview"},"Cloud Demo"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/LLM/musicgen"},"Code")),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udf4f \u4ee3\u7801\u751f\u6210\uff1a ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn/projects/404/overview"},"Cloud Demo"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/code-generation/code-llama"},"Code")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud83c\udf0b \u5927\u8bed\u8a00\u6a21\u578b\u5fae\u8c03\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc0f \u767e\u5ddd2\uff1a ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn/projects/401/overview"},"Cloud Demo"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/llm-finetune/models/baichuan2"},"Code")),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc2b ChatGLM3\uff1a ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn/projects/401/overview"},"Cloud Demo"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/llm-finetune/models/chatglm3"},"Code")),(0,l.kt)("li",{parentName:"ul"},"\ud83e\udd8f Stable Diffusion\uff1a ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn/projects/374/spaces/3/fine-tune-runs"},"Cloud Demo"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/stable-diffusion/txt2img-ft"},"Code")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud83e\udda6 \u56fe\u50cf\u5206\u7c7b\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc3b\u200d\u2744\ufe0f MNIST\u624b\u5199\u4f53\u8bc6\u522b\uff1a ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn/projects/392/evaluations"},"Cloud Demo"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/mnist"},"Code")),(0,l.kt)("li",{parentName:"ul"},"\ud83e\uddab ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/cifar10"},"CIFAR10")),(0,l.kt)("li",{parentName:"ul"},"\ud83e\udd93 Vision Transformer(ViT)\uff1a ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn/projects/399/overview"},"Cloud Demo"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/image-classification"},"Code")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud83d\udc03 \u56fe\u50cf\u5206\u5272\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Segment Anything(SAM): ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn/projects/398/overview"},"Cloud Demo"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/image-segmentation"},"Code")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud83d\udc26 \u76ee\u6807\u68c0\u6d4b\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud83e\udd8a YOLO\uff1a ",(0,l.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn/projects/397/overview"},"Cloud Demo"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/object-detection"},"Code")),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udc2f ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/PennFudanPed"},"Pedestrian Detection")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud83d\udcfd\ufe0f \u89c6\u9891\u8bc6\u522b\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/ucf101"},"UCF101"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud83e\udd8b \u673a\u5668\u7ffb\u8bd1\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/nmt"},"Neural machine translation"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud83d\udc1c \u6587\u672c\u5206\u7c7b\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/text_cls_AG_NEWS"},"AG News"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ud83c\udf99\ufe0f \u8bed\u97f3\u8bc6\u522b\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/tree/main/example/speech_command"},"Speech Command")))))}h.isMDXComponent=!0}}]);