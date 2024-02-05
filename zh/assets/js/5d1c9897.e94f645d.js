"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[52150],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=l,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74888:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(83117),l=(a(67294),a(3905));const r={title:"Starwhale Standalone\u5165\u95e8\u6307\u5357"},i=void 0,o={unversionedId:"getting-started/standalone",id:"version-0.6.9/getting-started/standalone",title:"Starwhale Standalone\u5165\u95e8\u6307\u5357",description:"\u6211\u4eec\u4e5f\u63d0\u4f9b\u5bf9\u5e94\u7684Jupyter Notebook\u4f8b\u5b50\uff0c\u53ef\u4ee5\u5728 Google Colab \u6216\u672c\u5730\u7684 vscode/jupyterlab \u4e2d\u8bd5\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.9/getting-started/standalone.md",sourceDirName:"getting-started",slug:"/getting-started/standalone",permalink:"/zh/0.6.9/getting-started/standalone",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.9/getting-started/standalone.md",tags:[],version:"0.6.9",frontMatter:{title:"Starwhale Standalone\u5165\u95e8\u6307\u5357"},sidebar:"mainSidebar",previous:{title:"\u5165\u95e8\u6307\u5357",permalink:"/zh/0.6.9/getting-started/"},next:{title:"Starwhale Server\u5165\u95e8\u6307\u5357",permalink:"/zh/0.6.9/getting-started/server"}},p={},s=[{value:"\u5b89\u88c5 Starwhale Client",id:"\u5b89\u88c5-starwhale-client",level:2},{value:"\u4e0b\u8f7d\u4f8b\u5b50",id:"\u4e0b\u8f7d\u4f8b\u5b50",level:2},{value:"\u6784\u5efa Starwhale \u8fd0\u884c\u65f6",id:"\u6784\u5efa-starwhale-\u8fd0\u884c\u65f6",level:2},{value:"\u6784\u5efa\u6a21\u578b",id:"\u6784\u5efa\u6a21\u578b",level:2},{value:"\u6784\u5efa\u6570\u636e\u96c6",id:"\u6784\u5efa\u6570\u636e\u96c6",level:2},{value:"\u8fd0\u884c\u8bc4\u4f30\u4f5c\u4e1a",id:"\u8fd0\u884c\u8bc4\u4f30\u4f5c\u4e1a",level:2}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6211\u4eec\u4e5f\u63d0\u4f9b\u5bf9\u5e94\u7684Jupyter Notebook\u4f8b\u5b50\uff0c\u53ef\u4ee5\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/star-whale/starwhale/blob/main/example/notebooks/quickstart-standalone.ipynb"},"Google Colab")," \u6216\u672c\u5730\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/main/example/notebooks/quickstart-standalone.ipynb"},"vscode/jupyterlab")," \u4e2d\u8bd5\u7528\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5-starwhale-client"},"\u5b89\u88c5 Starwhale Client"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m pip install starwhale\n")),(0,l.kt)("p",null,"\u8be6\u7ec6\u6587\u6863\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"swcli/installation"},"Starwhale Client \u5b89\u88c5\u6307\u5357"),"\u3002"),(0,l.kt)("h2",{id:"\u4e0b\u8f7d\u4f8b\u5b50"},"\u4e0b\u8f7d\u4f8b\u5b50"),(0,l.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u514b\u9686Starwhale\u9879\u76ee\u6765\u4e0b\u8f7dStarwhale\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"GIT_LFS_SKIP_SMUDGE=1 git clone https://github.com/star-whale/starwhale.git --depth 1\ncd starwhale\n")),(0,l.kt)("p",null,"\u4e3a\u4e86\u8282\u7701\u4f8b\u5b50\u7684\u4e0b\u8f7d\u65f6\u95f4\uff0c\u6211\u4eec\u6267\u884cgit clone\u547d\u4ee4\u65f6\uff0c\u5ffd\u7565\u4e86git-lfs\uff0c\u5e76\u53ea\u4fdd\u7559\u6700\u8fd1\u4e00\u6b21\u7684commit\u4fe1\u606f\u3002\u6211\u4eec\u9009\u7528ML/DL\u9886\u57df\u7684HelloWorld\u7a0b\u5e8f-MNIST\u6765\u4ecb\u7ecd\u5982\u4f55\u4ece\u96f6\u5f00\u59cb\u6784\u5efa\u6570\u636e\u96c6\u3001\u6a21\u578b\u5305\u548c\u8fd0\u884c\u73af\u5883\uff0c\u5e76\u6700\u7ec8\u5b8c\u6210\u6a21\u578b\u8bc4\u6d4b\u3002\u63a5\u4e0b\u6765\u7684\u64cd\u4f5c\u90fd\u5728 starwhale \u76ee\u5f55\u4e2d\u8fdb\u884c\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/standalone-core-workflow.gif",alt:"\u6838\u5fc3\u5de5\u4f5c\u6d41\u7a0b"})),(0,l.kt)("h2",{id:"\u6784\u5efa-starwhale-\u8fd0\u884c\u65f6"},"\u6784\u5efa Starwhale \u8fd0\u884c\u65f6"),(0,l.kt)("p",null,"\u8fd0\u884c\u65f6\u793a\u4f8b\u4ee3\u7801\u4f4d\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"example/helloworld"),"\u76ee\u5f55\u4e2d\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6784\u5efaStarwhale\u8fd0\u884c\u65f6\u5305\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli -vvv runtime build --yaml example/helloworld/runtime.yaml\n")),(0,l.kt)("admonition",{parentName:"li",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5f53\u9996\u6b21\u6784\u5efaStarwhale Runtime\u65f6\uff0c\u7531\u4e8e\u9700\u8981\u521b\u5efavenv\u6216conda\u9694\u79bb\u73af\u5883\uff0c\u5e76\u4e0b\u8f7d\u76f8\u5173\u7684Python\u4f9d\u8d56\uff0c\u547d\u4ee4\u6267\u884c\u9700\u8981\u82b1\u8d39\u4e00\u6bb5\u65f6\u95f4\u3002\u65f6\u95f4\u957f\u77ed\u53d6\u51b3\u4e0e\u6240\u5728\u673a\u5668\u7684\u7f51\u7edc\u60c5\u51b5\u548cruntime.yaml\u4e2dPython\u4f9d\u8d56\u7684\u6570\u91cf\u3002\u5efa\u8bae\u5408\u7406\u8bbe\u7f6e\u673a\u5668\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.pip/pip.conf")," \u6587\u4ef6\uff0c\u586b\u5199\u7f13\u5b58\u8def\u5f84\u548c\u9002\u5408\u5f53\u524d\u7f51\u7edc\u73af\u5883\u7684pypi mirror\u5730\u5740\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5904\u4e8e\u4e2d\u56fd\u5927\u9646\u7f51\u7edc\u73af\u5883\u4e2d\u7684\u7528\u6237\uff0c\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"[global]\ncache-dir = ~/.cache/pip\nindex-url = https://pypi.tuna.tsinghua.edu.cn/simple\nextra-index-url = https://mirrors.aliyun.com/pypi/simple/\n")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u68c0\u67e5\u60a8\u672c\u5730\u7684Starwhale\u8fd0\u884c\u65f6\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli runtime list\nswcli runtime info helloworld\n")))),(0,l.kt)("h2",{id:"\u6784\u5efa\u6a21\u578b"},"\u6784\u5efa\u6a21\u578b"),(0,l.kt)("p",null,"\u6a21\u578b\u793a\u4f8b\u4ee3\u7801\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"example/helloworld")," \u76ee\u5f55\u4e2d\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6784\u5efa\u4e00\u4e2aStarwhale\u6a21\u578b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli -vvv model build example/helloworld --name helloworld -m evaluation --runtime helloworld\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u68c0\u67e5\u60a8\u672c\u5730\u7684Starwhale\u6a21\u578b\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model list\nswcli model info helloworld\n")))),(0,l.kt)("h2",{id:"\u6784\u5efa\u6570\u636e\u96c6"},"\u6784\u5efa\u6570\u636e\u96c6"),(0,l.kt)("p",null,"\u6570\u636e\u96c6\u793a\u4f8b\u4ee3\u7801\u4f4d\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"example/helloworld")," \u76ee\u5f55\u4e2d\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6784\u5efaStarwhale\u6570\u636e\u96c6\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli runtime activate helloworld\npython3 example/helloworld/dataset.py\ndeactivate\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u68c0\u67e5\u60a8\u672c\u5730\u7684Starwhale\u6570\u636e\u96c6\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli dataset list\nswcli dataset info mnist64\nswcli dataset head mnist64\n")))),(0,l.kt)("h2",{id:"\u8fd0\u884c\u8bc4\u4f30\u4f5c\u4e1a"},"\u8fd0\u884c\u8bc4\u4f30\u4f5c\u4e1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521b\u5efa\u8bc4\u4f30\u5de5\u4f5c"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli -vvv model run --uri helloworld --dataset mnist64 --runtime helloworld\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u68c0\u67e5\u8bc4\u4f30\u7ed3\u679c"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"swcli job list\nswcli job info $(swcli job list | grep mnist | grep success | awk '{print $1}' | head -n 1)\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u606d\u559c\uff01 \u60a8\u5df2\u5b8c\u6210Starwhale Standalone\u7684\u5165\u95e8\u6307\u5357\u3002")))}m.isMDXComponent=!0}}]);