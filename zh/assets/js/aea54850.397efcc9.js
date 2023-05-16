"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[3594],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=o(a),d=r,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},54663:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(83117),r=(a(67294),a(3905));const l={title:"Starwhale Standalone\u5165\u95e8\u6307\u5357"},i=void 0,s={unversionedId:"getting-started/standalone",id:"version-0.4.3/getting-started/standalone",title:"Starwhale Standalone\u5165\u95e8\u6307\u5357",description:"\u5f53Starwhale Client\uff08SWCLI\uff09\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u4f7f\u7528Starwhale Standalone\u4e86\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.3/getting-started/standalone.md",sourceDirName:"getting-started",slug:"/getting-started/standalone",permalink:"/zh/docs/0.4.3/getting-started/standalone",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.3/getting-started/standalone.md",tags:[],version:"0.4.3",frontMatter:{title:"Starwhale Standalone\u5165\u95e8\u6307\u5357"},sidebar:"mainSidebar",previous:{title:"\u5165\u95e8\u6307\u5357",permalink:"/zh/docs/0.4.3/getting-started/"},next:{title:"Starwhale Server\u5165\u95e8\u6307\u5357",permalink:"/zh/docs/0.4.3/getting-started/server"}},p={},o=[{value:"\u4e0b\u8f7d\u4f8b\u5b50",id:"\u4e0b\u8f7d\u4f8b\u5b50",level:2},{value:"\u6784\u5efa Pytorch \u8fd0\u884c\u65f6",id:"\u6784\u5efa-pytorch-\u8fd0\u884c\u65f6",level:2},{value:"\u5efa\u7acb\u6a21\u578b",id:"\u5efa\u7acb\u6a21\u578b",level:2},{value:"\u6784\u5efa\u6570\u636e\u96c6",id:"\u6784\u5efa\u6570\u636e\u96c6",level:2},{value:"\u8fd0\u884c\u8bc4\u4f30\u4f5c\u4e1a",id:"\u8fd0\u884c\u8bc4\u4f30\u4f5c\u4e1a",level:2}],m={toc:o};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5f53",(0,r.kt)("a",{parentName:"p",href:"../swcli"},"Starwhale Client\uff08SWCLI\uff09"),"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u60a8\u5c31\u53ef\u4ee5\u4f7f\u7528Starwhale Standalone\u4e86\u3002"),(0,r.kt)("h2",{id:"\u4e0b\u8f7d\u4f8b\u5b50"},"\u4e0b\u8f7d\u4f8b\u5b50"),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u514b\u9686Starwhale\u9879\u76ee\u6765\u4e0b\u8f7dStarwhale\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/star-whale/starwhale.git\ncd starwhale\n")),(0,r.kt)("p",null,"\u6211\u4eec\u5c06\u4f7f\u7528 MNIST \u548c PyTorch \u6765\u5f00\u59cb\u60a8\u7684 Starwhale \u4e4b\u65c5\u3002 \u4ee5\u4e0b\u6b65\u9aa4\u5747\u5728 starwhale \u76ee\u5f55\u4e0b\u8fdb\u884c\u3002\n",(0,r.kt)("img",{alt:"\u6838\u5fc3\u5de5\u4f5c\u6d41\u7a0b",src:a(73130).Z,width:"3036",height:"1741"})),(0,r.kt)("h2",{id:"\u6784\u5efa-pytorch-\u8fd0\u884c\u65f6"},"\u6784\u5efa Pytorch \u8fd0\u884c\u65f6"),(0,r.kt)("p",null,"\u8fd0\u884c\u65f6\u793a\u4f8b\u4ee3\u7801\u4f4d\u4e8eexample/runtime/pytorch\u76ee\u5f55\u4e2d\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6784\u5efaStarwhale\u8fd0\u884c\u65f6\u5305\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli runtime build example/runtime/pytorch\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u67e5\u60a8\u672c\u5730\u7684Starwhale\u8fd0\u884c\u65f6\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli runtime list\nswcli runtime info pytorch/version/latest\n")))),(0,r.kt)("h2",{id:"\u5efa\u7acb\u6a21\u578b"},"\u5efa\u7acb\u6a21\u578b"),(0,r.kt)("p",null,"\u6a21\u578b\u793a\u4f8b\u4ee3\u7801\u4f4d\u4e8e example/mnist \u76ee\u5f55\u4e2d\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7d\u9884\u8bad\u7ec3\u6a21\u578b\u6587\u4ef6\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p example/mnist/models\nwget -O example/mnist/models/mnist_cnn.pt https://starwhale-examples.s3.us-west-1.amazonaws.com/mnist_cnn.pt\n\n# \u4e2d\u56fd\u5927\u9646\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7f51\u5740\u63d0\u9ad8\u4e0b\u8f7d\u901f\u5ea6\uff1a\n# wget -O example/mnist/models/mnist_cnn.pt https://starwhale-examples.oss-cn-beijing.aliyuncs.com/mnist_cnn.pt\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5efa\u7acb\u4e00\u4e2aStarwhale\u6a21\u578b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model build example/mnist\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u67e5\u60a8\u672c\u5730\u7684Starwhale\u6a21\u578b\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli model list\nswcli model info mnist/version/latest\n")))),(0,r.kt)("h2",{id:"\u6784\u5efa\u6570\u636e\u96c6"},"\u6784\u5efa\u6570\u636e\u96c6"),(0,r.kt)("p",null,"\u6570\u636e\u96c6\u793a\u4f8b\u4ee3\u7801\u4f4d\u4e8eexample/mnist\u76ee\u5f55\u4e2d\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0b\u8f7dMNIST\u539f\u59cb\u6570\u636e\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p example/mnist/data\nwget -O example/mnist/data/t10k-images-idx3-ubyte.gz http://yann.lecun.com/exdb/mnist/t10k-images-idx3-ubyte.gz\nwget -O example/mnist/data/t10k-labels-idx1-ubyte.gz http://yann.lecun.com/exdb/mnist/t10k-labels-idx1-ubyte.gz\ngzip -d example/mnist/data/*.gz\nls -lah example/mnist/data/*\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6784\u5efaStarwhale\u6570\u636e\u96c6\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli dataset build example/mnist\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u67e5\u60a8\u672c\u5730\u7684Starwhale\u6570\u636e\u96c6\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli dataset list\nswcli dataset info mnist/version/latest\n")))),(0,r.kt)("h2",{id:"\u8fd0\u884c\u8bc4\u4f30\u4f5c\u4e1a"},"\u8fd0\u884c\u8bc4\u4f30\u4f5c\u4e1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u8bc4\u4f30\u5de5\u4f5c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli -vvv eval run --model mnist/version/latest --dataset mnist/version/latest --runtime pytorch/version/latest\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u67e5\u8bc4\u4f30\u7ed3\u679c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swcli eval list\nswcli eval info ${version}\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u5728eval run\u547d\u4ee4\u4e2d\u4f7f\u7528\u4e86\u65b0\u7684\u8fd0\u884c\u65f6\uff0c\u53ef\u80fd\u9700\u8981\u82b1\u8d39\u5927\u91cf\u65f6\u95f4\u6765\u4e0b\u8f7dpython\u4f9d\u8d56\u9879\u3002\u6211\u4eec\u5efa\u8bae\u60a8\u5728 ~/.pip/pip.conf\u6587\u4ef6\u4e2d\u8bbe\u7f6e\u5408\u9002\u7684 PyPI \u955c\u50cf\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u606d\u559c\uff01 \u60a8\u5df2\u5b8c\u6210Starwhale Standalone\u7684\u5165\u95e8\u6307\u5357\u3002")))}c.isMDXComponent=!0},73130:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/standalone-core-workflow-270ac0f0cb5b20dbe5ccd11727e2620b.gif"}}]);