"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[5672],{3905:(a,t,e)=>{e.d(t,{Zo:()=>i,kt:()=>u});var l=e(7294);function n(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function r(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,l)}return e}function s(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){n(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function o(a,t){if(null==a)return{};var e,l,n=function(a,t){if(null==a)return{};var e,l,n={},r=Object.keys(a);for(l=0;l<r.length;l++)e=r[l],t.indexOf(e)>=0||(n[e]=a[e]);return n}(a,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(l=0;l<r.length;l++)e=r[l],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(n[e]=a[e])}return n}var p=l.createContext({}),m=function(a){var t=l.useContext(p),e=t;return a&&(e="function"==typeof a?a(t):s(s({},t),a)),e},i=function(a){var t=m(a.components);return l.createElement(p.Provider,{value:t},a.children)},c={inlineCode:"code",wrapper:function(a){var t=a.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(a,t){var e=a.components,n=a.mdxType,r=a.originalType,p=a.parentName,i=o(a,["components","mdxType","originalType","parentName"]),h=m(e),u=n,g=h["".concat(p,".").concat(u)]||h[u]||c[u]||r;return e?l.createElement(g,s(s({ref:t},i),{},{components:e})):l.createElement(g,s({ref:t},i))}));function u(a,t){var e=arguments,n=t&&t.mdxType;if("string"==typeof a||n){var r=e.length,s=new Array(r);s[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=a,o.mdxType="string"==typeof a?a:n,s[1]=o;for(var m=2;m<r;m++)s[m]=e[m];return l.createElement.apply(null,s)}return l.createElement.apply(null,e)}h.displayName="MDXCreateElement"},3303:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var l=e(3117),n=(e(7294),e(3905));const r={title:"5\u5206\u949f\u5feb\u901f\u8fd0\u884cLlama 2-Chat",description:"5\u5206\u949f\u5feb\u901f\u8fd0\u884cLlama 2-Chat",slug:"run-llama2-chat-in-five-minutes",authors:[{name:"Starwhale"}],tags:["\u6a21\u578b","llama2"],image:"https://starwhale.cn/assets/images/banner-9c279049eb74ef96a8c1eb6ac3636360.jpg",hide_table_of_contents:!1},s=void 0,o={permalink:"/zh/blog/run-llama2-chat-in-five-minutes",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2023-07-24-run-llama-2-chat-in-five-minutes.md",title:"5\u5206\u949f\u5feb\u901f\u8fd0\u884cLlama 2-Chat",description:"5\u5206\u949f\u5feb\u901f\u8fd0\u884cLlama 2-Chat",date:"2023-07-24T00:00:00.000Z",formattedDate:"2023\u5e747\u670824\u65e5",tags:[{label:"\u6a21\u578b",permalink:"/zh/blog/tags/\u6a21\u578b"},{label:"llama2",permalink:"/zh/blog/tags/llama-2"}],readingTime:5.135,hasTruncateMarker:!1,authors:[{name:"Starwhale"}],frontMatter:{title:"5\u5206\u949f\u5feb\u901f\u8fd0\u884cLlama 2-Chat",description:"5\u5206\u949f\u5feb\u901f\u8fd0\u884cLlama 2-Chat",slug:"run-llama2-chat-in-five-minutes",authors:[{name:"Starwhale"}],tags:["\u6a21\u578b","llama2"],image:"https://starwhale.cn/assets/images/banner-9c279049eb74ef96a8c1eb6ac3636360.jpg",hide_table_of_contents:!1},nextItem:{title:"Starwhale\u662f\u4ec0\u4e48\uff1f",permalink:"/zh/blog/intro-starwhale"}},p={authorsImageUrls:[void 0]},m=[{value:"\u4ec0\u4e48\u662f Llama 2",id:"\u4ec0\u4e48\u662f-llama-2",level:2},{value:"\u4ec0\u4e48\u662f Starwhale",id:"\u4ec0\u4e48\u662f-starwhale",level:2},{value:"\u5982\u4f55\u4f7f\u7528 Starwhale Cloud \u8fd0\u884c Llama 2-Chat",id:"\u5982\u4f55\u4f7f\u7528-starwhale-cloud-\u8fd0\u884c-llama-2-chat",level:2},{value:"<strong>\u4e00. \u767b\u5f55</strong>",id:"\u4e00-\u767b\u5f55",level:3},{value:"<strong>\u4e8c. \u521b\u5efa\u9879\u76ee</strong>",id:"\u4e8c-\u521b\u5efa\u9879\u76ee",level:3},{value:"<strong>\u4e09. \u8fd0\u884c\u6a21\u578b</strong>",id:"\u4e09-\u8fd0\u884c\u6a21\u578b",level:3},{value:"<strong>\u56db. \u67e5\u770b\u8fd0\u884c\u7ed3\u679c\u548c\u65e5\u5fd7</strong>",id:"\u56db-\u67e5\u770b\u8fd0\u884c\u7ed3\u679c\u548c\u65e5\u5fd7",level:4}],i={toc:m};function c(a){let{components:t,...e}=a;return(0,n.kt)("wrapper",(0,l.Z)({},i,e,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Meta Llama 2 \u4e00\u7ecf\u53d1\u5e03\u5c31\u5438\u5f15\u4e86\u5168\u4e16\u754c\u7684\u76ee\u5149\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://starwhale.cn/"},"Starwhale")," \u7279\u522b\u5236\u4f5c\u4e86 Llama 2-Chat \u548c Llama 2-7b\u6a21\u578b\u5305\u3002\u53ea\u97005\u5206\u949f\uff0c\u60a8\u5c31\u53ef\u4ee5\u5728 ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.starwhale.cn"},"https://cloud.starwhale.cn")," \u4e0a\u548c Llama 2-Chat \u8fdb\u884c\u5bf9\u8bdd\u3002"),(0,n.kt)("p",null,"\u540e\u7eed\u6211\u4eec\u4e5f\u5c06\u63d0\u4f9bLlama 2-13b \u548c Llama 2-70b \u7684\u6a21\u578b\u5305\uff0c\u611f\u5174\u8da3\u7684\u670b\u53cb\u4eec\u8bf7\u6301\u7eed\u5173\u6ce8\uff01"),(0,n.kt)("p",null,"\u4e0b\u6587\u5c06\u4e3a\u5927\u5bb6\u8be6\u7ec6\u4ecb\u7ecd\u4ec0\u4e48\u662f Llama 2\uff0c\u4ec0\u4e48\u662f Starwhale \u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Starwhale \u8fd0\u884c Llama 2-Chat\u3002"),(0,n.kt)("h2",{id:"\u4ec0\u4e48\u662f-llama-2"},"\u4ec0\u4e48\u662f Llama 2"),(0,n.kt)("p",null,"Llama 2 \u7cfb\u5217\u6a21\u578b\u662f\u4e00\u7ec4\u4f7f\u7528\u4e86\u4f18\u5316\u7684\u81ea\u56de\u5f52 Transformer \u67b6\u6784\u7684\u5927\u8bed\u8a00\u6a21\u578b\uff0c\u7ecf\u8fc7\u4e86\u9884\u8bad\u7ec3\u548c\u5fae\u8c03\uff0c\u5305\u542b70\u4ebf\u3001130\u4ebf\u548c700\u4ebf\u4e09\u79cd\u53c2\u6570\u7248\u672c\u3002\u6b64\u5916\uff0cMeta\u8fd8\u8bad\u7ec3\u4e86 340\u4ebf\u53c2\u6570\u7248\u672c\uff0c\u4f46\u5e76\u672a\u53d1\u5e03\uff0c\u76f8\u5173\u6570\u636e\u5728\u8bba\u6587\u4e2d\u6709\u4f53\u73b0\u3002"),(0,n.kt)("p",null,"\u9884\u8bad\u7ec3\uff1a\u76f8\u6bd4 Llama 1, Llama 2 \u7684\u8bad\u7ec3\u6570\u636e\u591a\u4e8640%\uff0c\u7528\u4e862\u4e07\u4ebf\u4e2atokens\u8fdb\u884c\u8bad\u7ec3\uff0c\u800c\u4e14\u4e0a\u4e0b\u6587\u957f\u5ea6\u662f Llama 1 \u7684\u4e24\u500d\uff0c\u8fbe\u52304096\u3002Llama 2 \u9002\u5408\u7528\u4e8e\u5404\u79cd\u81ea\u7136\u8bed\u8a00\u751f\u6210\u4efb\u52a1\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/cmp1-2.png",alt:"image"})),(0,n.kt)("p",null,"Meta\u5c06 Llama 2-70b \u7684\u7ed3\u679c\u4e0e\u95ed\u6e90\u6a21\u578b\u8fdb\u884c\u4e86\u6bd4\u8f83\uff0c\u5728 MMLU \u548c GSM8K \u4e0a\u7684\u8868\u73b0\u63a5\u8fd1 GPT-3.5, \u4f46\u5728\u7f16\u7801\u57fa\u51c6\u4e0a\u5b58\u5728\u663e\u8457\u5dee\u5f02\u3002\u6b64\u5916\uff0c\u51e0\u4e4e\u6240\u6709\u57fa\u51c6\u4e0a\uff0c Llama 2-70b \u7684\u7ed3\u679c\u4e0e\u8c37\u6b4c PaLM-540 b \u6301\u5e73\u6216\u8868\u73b0\u66f4\u597d\uff0c\u4e0e GPT-4 \u548c PaLM-2-L \u7684\u6027\u80fd\u4ecd\u5b58\u5728\u8f83\u5927\u5dee\u8ddd\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/evaluation.png",alt:"image"})),(0,n.kt)("p",null,"\u5fae\u8c03\uff1aLlama 2-Chat \u662f\u57fa\u4e8eLlama 2 \u9488\u5bf9\u804a\u5929\u5bf9\u8bdd\u573a\u666f\u5fae\u8c03\u7684\u7248\u672c\uff0c\u4f7f\u7528 SFT (\u76d1\u7763\u5fae\u8c03) \u548c RLHF (\u4eba\u7c7b\u53cd\u9988\u5f3a\u5316\u5b66\u4e60)\u8fdb\u884c\u8fed\u4ee3\u4f18\u5316\uff0c\u4ee5\u4fbf\u66f4\u597d\u7684\u548c\u4eba\u7c7b\u504f\u597d\u4fdd\u6301\u4e00\u81f4\uff0c\u63d0\u9ad8\u5b89\u5168\u6027\u3002\u5fae\u8c03\u6570\u636e\u4f7f\u7528\u4e86\u5305\u62ec\u516c\u5f00\u53ef\u7528\u7684\u6307\u4ee4\u6570\u636e\u96c6\uff0c\u4ee5\u53ca\u4e00\u767e\u591a\u4e07\u65b0\u7684\u4eba\u5de5\u6807\u6ce8\u6837\u672c\u3002Llama 2-Chat \u53ef\u7528\u4e8e\u7c7b\u4f3c\u52a9\u7406\u7684\u804a\u5929\u3002\u4e0b\u56fe\u5c55\u793a\u4e86\u5355\u8f6e\u548c\u591a\u8f6e\u5bf9\u8bdd\u7684\u8fdd\u89c4\u767e\u5206\u6bd4\uff0c\u4e0e\u57fa\u7ebf\u76f8\u6bd4\uff0cLlama 2-Chat \u5728\u591a\u8f6e\u5bf9\u8bdd\u4e2d\u8868\u73b0\u5c24\u5176\u826f\u597d\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/voliation.png",alt:"image"})),(0,n.kt)("h2",{id:"\u4ec0\u4e48\u662f-starwhale"},"\u4ec0\u4e48\u662f Starwhale"),(0,n.kt)("p",null,"Starwhale\u662f\u4e00\u4e2aMLOps\u5e73\u53f0\uff0c\u63d0\u4f9bMLOps\u5168\u6d41\u7a0b\u89e3\u51b3\u65b9\u6848\uff0c\u80fd\u591f\u8ba9\u5f00\u53d1\u8005\u548c\u4f01\u4e1a\u9ad8\u6548\u4fbf\u6377\u5730\u8fdb\u884c\u6a21\u578b\u6258\u7ba1\u3001\u8fd0\u884c\u3001\u8bc4\u6d4b\u3001\u90e8\u7f72\u53ca\u6570\u636e\u96c6\u7ba1\u7406\u7b49\u3002\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u8981\uff0c\u9009\u62e9 Standalone\u3001Server \u6216\u8005 Cloud \u4efb\u610f\u4e00\u7248\u4f7f\u7528\uff0c\u8be6\u7ec6\u8bf4\u660e\u53ef\u53c2\u8003\u6587\u6863",(0,n.kt)("a",{parentName:"p",href:"https://starwhale.cn/docs/"},"\u4ec0\u4e48\u662fStarwhale"),"\u3002"),(0,n.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528-starwhale-cloud-\u8fd0\u884c-llama-2-chat"},"\u5982\u4f55\u4f7f\u7528 Starwhale Cloud \u8fd0\u884c Llama 2-Chat"),(0,n.kt)("p",null,"\u57fa\u672c\u6d41\u7a0b\uff1a\u767b\u5f55\u8d26\u53f7 \u2192 \u521b\u5efa\u9879\u76ee \u2192 \u8fd0\u884c\u6a21\u578b \u2192 \u8fdb\u884c\u5bf9\u8bdd"),(0,n.kt)("h3",{id:"\u4e00-\u767b\u5f55"},(0,n.kt)("strong",{parentName:"h3"},"\u4e00. \u767b\u5f55")),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u767b\u5f55Starwhale\u5e73\u53f0\uff0c\u70b9\u51fb\u8df3\u8f6c",(0,n.kt)("a",{parentName:"p",href:"https://cloud.starwhale.cn/login?lang=zh"},"\u767b\u5f55\u5165\u53e3"),"\u3002\u5982\u60a8\u5c1a\u672a\u6ce8\u518c\uff0c\u53ef\u70b9\u51fb ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.starwhale.cn/signup"},"\u6ce8\u518c\u5165\u53e3")," \u8fdb\u884c\u6ce8\u518c\u3002"),(0,n.kt)("h3",{id:"\u4e8c-\u521b\u5efa\u9879\u76ee"},(0,n.kt)("strong",{parentName:"h3"},"\u4e8c. \u521b\u5efa\u9879\u76ee")),(0,n.kt)("p",null,"\u6210\u529f\u767b\u5f55\u540e\u8fdb\u5165\u9879\u76ee\u5217\u8868\u9875\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684",(0,n.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u9879\u76ee\u6309\u94ae\uff0c\u8f93\u5165\u9879\u76ee\u540d\u79f0,\u70b9\u51fb \u63d0\u4ea4 \u6309\u94ae\u5373\u53ef\u65b0\u5efa\u4e00\u4e2a\u9879\u76ee\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/project-list.png",alt:"image"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/project-create.png",alt:"image"})),(0,n.kt)("h3",{id:"\u4e09-\u8fd0\u884c\u6a21\u578b"},(0,n.kt)("strong",{parentName:"h3"},"\u4e09. \u8fd0\u884c\u6a21\u578b")),(0,n.kt)("p",null,"\u8fdb\u5165\u4f5c\u4e1a\u5217\u8868\u9875\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684",(0,n.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u4efb\u52a1\u6309\u94ae\u3002"),(0,n.kt)("p",null," 1) \u9009\u62e9\u8fd0\u884c\u8d44\u6e90\uff0c\u53ef\u4ee5\u9009\u62e9 A100 80G",(0,n.kt)("em",{parentName:"p"},"1\uff08\u63a8\u8350\uff09 \u6216\u8005 A10 24G"),"1\n2) \u9009\u62e9\u6a21\u578b\uff1astarwhale/public/llama2-7b-chat/ki72ulaf(latest)\n3) \u9009\u62e9handler\uff1a\u8fd0\u884c\u5bf9\u8bdd\u6a21\u578b\uff0c\u9009\u62e9\u9ed8\u8ba4\u9879\uff1aevaluation:chatbot\n4) \u9009\u62e9\u8fd0\u884c\u65f6\uff1a\u9009\u62e9\u9ed8\u8ba4\u9879\uff0c\u5185\u7f6e\n5) \u9ad8\u7ea7\u914d\u7f6e\uff0c\u6253\u5f00\u81ea\u52a8\u91ca\u653e\u5f00\u5173\uff1a\u53ef\u8bbe\u7f6e\u4efb\u52a1\u81ea\u52a8\u91ca\u653e\u65f6\u957f\uff0c\u8fbe\u5230\u8bbe\u7f6e\u65f6\u957f\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u53d6\u6d88\u4efb\u52a1\u8fd0\u884c\u3002\u5982\u4e0d\u8bbe\u7f6e\u81ea\u52a8\u91ca\u653e\uff0c\u60a8\u53ef\u4ee5\u5728\u4f53\u9a8c\u5b8c\u6210\u540e\u624b\u52a8\u53d6\u6d88\u4efb\u52a1\u3002"),(0,n.kt)("p",null,"\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u63d0\u4ea4"),"\u5373\u53ef\u8fd0\u884c\u6a21\u578b"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/evaluation-create.png",alt:"image"})),(0,n.kt)("h4",{id:"\u56db-\u67e5\u770b\u8fd0\u884c\u7ed3\u679c\u548c\u65e5\u5fd7"},(0,n.kt)("strong",{parentName:"h4"},"\u56db. \u67e5\u770b\u8fd0\u884c\u7ed3\u679c\u548c\u65e5\u5fd7")),(0,n.kt)("p",null,"\u4f5c\u4e1a\u5217\u8868\u9875\u53ef\u4ee5\u67e5\u770b\u9879\u76ee\u4e2d\u7684\u6240\u6709\u4f5c\u4e1a\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/job-list.png",alt:"image"})),(0,n.kt)("p",null,"\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u4f5c\u4e1aID")," \uff0c\u8fdb\u5165\u4efb\u52a1\u8be6\u60c5\u9875\uff0c\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u67e5\u770b\u65e5\u5fd7"),"\u53ef\u67e5\u770b"),(0,n.kt)("p",null,"\u4ece\u4efb\u52a1\u63d0\u4ea4\u5230\u6a21\u578b\u8fd0\u884c\u8d77\u6765\uff0c\u603b\u8ba1\u7528\u65f65\u520604\u79d2"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/log.png",alt:"image"})),(0,n.kt)("p",null,"\u8fd0\u884c\u6210\u529f\u540e\u8fd4\u56de\u4efb\u52a1\u5217\u8868\uff0c\u70b9\u51fb",(0,n.kt)("strong",{parentName:"p"},"\u7ec8\u7aef"),"\u6309\u94ae\uff0c\u53ef\u6253\u5f00 chatbox \u9875\u9762\uff0c\u5728 chatbox \u9875\u9762\u548c Llama 2-Chat \u5bf9\u8bdd"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/job-list.png",alt:"image"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/chatbot.png",alt:"image"})),(0,n.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u5173\u4e8e\u5982\u4f55\u4f7f\u7528 Starwhale Cloud \u8fd0\u884c Llama 2-Chat \u7684\u8bf4\u660e\uff0c\u5982\u679c\u60a8\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u6709\u4efb\u4f55\u95ee\u9898\u6b22\u8fce\u79c1\u4fe1\u7559\u8a00\u3002\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,n.kt)("a",{parentName:"p",href:"https://starwhale.cn/"},"Starwhale\u5b98\u7f51"),"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u611f\u8c22\u60a8\u7684\u5173\u6ce8\u548c\u652f\u6301\u3002"))}c.isMDXComponent=!0}}]);