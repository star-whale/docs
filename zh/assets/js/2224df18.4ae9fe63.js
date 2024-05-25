"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[73383],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),k=l,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||r;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},49217:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(83117),l=(a(67294),a(3905));const r={title:"Starwhale \u4efb\u52a1 SDK"},i=void 0,o={unversionedId:"reference/sdk/job",id:"version-0.6.11/reference/sdk/job",title:"Starwhale \u4efb\u52a1 SDK",description:"job",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.11/reference/sdk/job.md",sourceDirName:"reference/sdk",slug:"/reference/sdk/job",permalink:"/zh/0.6.11/reference/sdk/job",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.11/reference/sdk/job.md",tags:[],version:"0.6.11",frontMatter:{title:"Starwhale \u4efb\u52a1 SDK"},sidebar:"mainSidebar",previous:{title:"Starwhale \u6a21\u578b SDK",permalink:"/zh/0.6.11/reference/sdk/model"},next:{title:"\u5176\u4ed6 SDK",permalink:"/zh/0.6.11/reference/sdk/other"}},p={},s=[{value:"job",id:"job",level:2},{value:"\u53c2\u6570",id:"job-func-params",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"job-func-example",level:3},{value:"class starwhale.Job",id:"class-starwhalejob",level:2},{value:"list",id:"list",level:3},{value:"\u53c2\u6570",id:"list-params",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"list-example",level:3},{value:"get",id:"get",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"get-example",level:3},{value:"summary",id:"summary",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"summary-example",level:3},{value:"tables",id:"tables",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"tables-example",level:3},{value:"get_table_rows",id:"get_table_rows",level:2},{value:"\u53c2\u6570",id:"rows-params",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"rows-example",level:3},{value:"status",id:"status",level:2},{value:"create",id:"create",level:2},{value:"\u53c2\u6570",id:"create-params",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"create-example",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"job"},"job"),(0,l.kt)("p",null,"\u901a\u8fc7Job URI\u53c2\u6570\u83b7\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"starwhale.Job")," \u5bf9\u8c61\uff0c\u53ef\u4ee5\u83b7\u5f97 Standalone/Server/Cloud \u5b9e\u4f8b\u4e0a\u7684\u4efb\u52a1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef job(\n    cls,\n    uri: str,\n) -> Job:\n")),(0,l.kt)("h3",{id:"job-func-params"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"uri"),": (str, required)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Job URI\u683c\u5f0f\u7684\u5b57\u7b26\u4e32\u3002")))),(0,l.kt)("h3",{id:"job-func-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import job\n# get job object of uri=https://server/job/1\nj1 = job("https://server/job/1")\n# get job from standalone instance\nj2 = job("local/project/self/job/xm5wnup")\nj3 = job("xm5wnup")\n')),(0,l.kt)("h2",{id:"class-starwhalejob"},"class starwhale.Job"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"starwhale.Job")," \u5b9e\u73b0\u5bf9 Starwhale \u4efb\u52a1\u7684\u62bd\u8c61\uff0c\u80fd\u591f\u5bf9 Standalone/Server/Cloud \u5b9e\u4f8b\u4e0a\u7684\u4efb\u52a1\u8fdb\u884c\u4e00\u4e9b\u4fe1\u606f\u83b7\u53d6\u7c7b\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("h3",{id:"list"},"list"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"list")," \u662f\u4e00\u4e2a classmethod \u65b9\u6cd5\uff0c\u80fd\u591f\u5217\u51fa\u67d0\u4e2a\u9879\u76ee\u4e0b\u7684\u4efb\u52a1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'@classmethod\ndef list(\n    cls,\n    project: str = "",\n    page_index: int = DEFAULT_PAGE_IDX,\n    page_size: int = DEFAULT_PAGE_SIZE,\n) -> t.Tuple[t.List[Job], t.Dict]:\n')),(0,l.kt)("h3",{id:"list-params"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"project"),": (str, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Project URI\uff0cStandalone/Server/Cloud \u5b9e\u4f8b\u4e0a\u7684\u9879\u76ee\u90fd\u53ef\u4ee5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u82e5\u4e0d\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"li"},"project")," \u53c2\u6570\uff0c\u5219\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"swcli project selected")," \u547d\u4ee4\u9009\u5b9a\u7684\u9879\u76ee\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"page_index"),": (int, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f53\u83b7\u53d6 Server/Cloud \u5b9e\u4f8b\u7684\u9879\u76ee\u5217\u8868\u65f6\uff0c\u652f\u6301\u7ffb\u9875\u64cd\u4f5c\uff0c\u8be5\u53c2\u6570\u53ef\u4ee5\u6307\u5b9a\u9875\u9762\u5e8f\u53f7\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\u4e3a 1\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9875\u9762\u8d77\u59cb\u5e8f\u53f7\u4e3a 1\u3002"))),(0,l.kt)("li",{parentName:"ul"},"Standalone \u5b9e\u4f8b\u4e0d\u652f\u6301\u7ffb\u9875\u64cd\u4f5c\uff0c\u8bbe\u7f6e\u8be5\u53c2\u6570\u65e0\u6548\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"page_size"),": (int, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f53\u83b7\u53d6 Server/Cloud \u5b9e\u4f8b\u7684\u9879\u76ee\u5217\u8868\u65f6\uff0c\u652f\u6301\u7ffb\u9875\u64cd\u4f5c\uff0c\u8be5\u53c2\u6570\u53ef\u4ee5\u6307\u5b9a\u6bcf\u9875\u8fd4\u56de\u7684\u4efb\u52a1\u6570\u91cf\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\u4e3a 1\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9875\u9762\u8d77\u59cb\u5e8f\u53f7\u4e3a 1\u3002"))),(0,l.kt)("li",{parentName:"ul"},"Standalone \u5b9e\u4f8b\u4e0d\u652f\u6301\u7ffb\u9875\u64cd\u4f5c\uff0c\u8bbe\u7f6e\u8be5\u53c2\u6570\u65e0\u6548\u3002")))),(0,l.kt)("h3",{id:"list-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import Job\n# list jobs of current selected project\njobs, pagination_info = Job.list()\n# list jobs of starwhale/public project in the cloud.starwhale.cn instance\njobs, pagination_info = Job.list("https://cloud.starwhale.cn/project/starwhale:public")\n# list jobs of id=1 project in the server instance, page index is 2, page size is 10\njobs, pagination_info = Job.list("https://server/project/1", page_index=2, page_size=10)\n')),(0,l.kt)("h2",{id:"get"},"get"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"get")," \u662f\u4e00\u4e2a classmethod \u65b9\u6cd5\uff0c\u80fd\u591f\u83b7\u5f97\u67d0\u4e2a\u7279\u5b9a\u4efb\u52a1\u7684\u4fe1\u606f\uff0c\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"Starwhale.Job")," \u5bf9\u8c61\uff0c\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"starwhale.job")," \u51fd\u6570\u529f\u80fd\u548c\u53c2\u6570\u5b9a\u4e49\u4e0a\u5b8c\u5168\u4e00\u81f4\u3002"),(0,l.kt)("h3",{id:"get-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import Job\n# get job object of uri=https://server/job/1\nj1 = Job.get("https://server/job/1")\n# get job from standalone instance\nj2 = Job.get("local/project/self/job/xm5wnup")\nj3 = Job.get("xm5wnup")\n')),(0,l.kt)("h2",{id:"summary"},"summary"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"summary")," \u662f\u4e00\u4e2a property \u5c5e\u6027\uff0c\u8fd4\u56de\u4efb\u52a1\u8fd0\u884c\u4e2d\u5199\u5165 summary \u8868\u4e2d\u7684\u6570\u636e\uff0c\u5b57\u5178\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\n    def summary(self) -> t.Dict[str, t.Any]:\n")),(0,l.kt)("h3",{id:"summary-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import jobs\nj1 = job("https://server/job/1")\nprint(j1.summary)\n')),(0,l.kt)("h3",{id:"tables"},"tables"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tables")," \u662f\u4e00\u4e2a property \u5c5e\u6027\uff0c\u8fd4\u56de\u4efb\u52a1\u8fd0\u884c\u4e2d\u521b\u5efa\u7684\u8868\u540d\uff08\u4e0d\u5305\u62ec summary \u8868\uff0c\u4ee5\u4e3a summary \u8868\u662f\u9879\u76ee\u7ea7\u522b\u81ea\u52a8\u521b\u5efa\u7684\uff09\uff0c\u5217\u8868\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\n    def tables(self) -> t.List[str]:\n")),(0,l.kt)("h3",{id:"tables-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import jobs\nj1 = job("https://server/job/1")\nprint(j1.tables)\n')),(0,l.kt)("h2",{id:"get_table_rows"},"get_table_rows"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"get_table_rows")," \u662f\u4e00\u4e2a method \u65b9\u6cd5\uff0c\u53ef\u4ee5\u6839\u636e\u8868\u540d\u7b49\u53c2\u6570\u8fd4\u56de\u6570\u636e\u8868\u7684\u8bb0\u5f55\uff0c\u8fed\u4ee3\u5668\u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_table_rows(\n    self,\n    name: str,\n    start: t.Any = None,\n    end: t.Any = None,\n    keep_none: bool = False,\n    end_inclusive: bool = False,\n) -> t.Iterator[t.Dict[str, t.Any]]:\n")),(0,l.kt)("h3",{id:"rows-params"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),": (str, required)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"datastore \u8868\u540d\u3002\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"tables")," \u5c5e\u6027\u83b7\u5f97\u7684\u8868\u540d\uff0c\u53ef\u4ee5\u4f20\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," \u53c2\u6570\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"start"),": (Any, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u8bb0\u5f55\u4e2d\uff0cID\u7684\u8d77\u59cb\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\u4e3a None\uff0c\u8868\u793a\u4ece\u5934\u5f00\u59cb\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"end"),": (Any, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u8bb0\u5f55\u4e2d\uff0cID\u7684\u7ed3\u675f\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"None")," \uff0c\u8868\u793a\u4e00\u76f4\u5230\u8868\u672b\u5c3e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u82e5 ",(0,l.kt)("inlineCode",{parentName:"li"},"start")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"end")," \u90fd\u4e3a None\uff0c\u5219\u4f1a\u4ee5\u8fed\u4ee3\u5668\u65b9\u5f0f\u8fd4\u56de\u6574\u4e2a\u8868\u7684\u6570\u636e\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"keep_none"),": (bool, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u662f\u5426\u8fd4\u56de\u503c\u4e3a None\u7684\u8bb0\u5f55\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3a False\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"end_inclusive"),": (bool, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"li"},"end")," \u53c2\u6570\u8bbe\u7f6e\u65f6\uff0c\u8fed\u4ee3\u8bb0\u5f55\u7684\u65f6\u5019\uff0c\u662f\u5426\u5305\u542b",(0,l.kt)("inlineCode",{parentName:"li"},"end"),"\u8bb0\u5f55\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3a False\u3002")))),(0,l.kt)("h3",{id:"rows-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from starwhale import job\nj = job(\"local/project/self/job/xm5wnup\")\ntable_name = j.tables[0]\nfor row in j.get_table_rows(table_name):\n    print(row)\nrows = list(j.get_table_rows(table_name, start=0, end=100))\n# return the first record from the results table\nresult = list(j.get_table_rows('results', start=0, end=1))[0]\n")),(0,l.kt)("h2",{id:"status"},"status"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"status")," \u662f\u4e00\u4e2a property \u5c5e\u6027\uff0c\u8fd4\u56de\u5f53\u524dJob\u7684\u5b9e\u65f6\u72b6\u6001\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u72b6\u6001\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"CREATED"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"READY"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"PAUSED"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"RUNNING"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"CANCELLING"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"CANCELED"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"SUCCESS"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"FAIL")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"UNKNOWN")," \u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef status(self) -> str:\n")),(0,l.kt)("h2",{id:"create"},"create"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"create")," \u662f\u4e00\u4e2a classmethod \u65b9\u6cd5\uff0c\u80fd\u591f\u521b\u5efa Standalone \u5b9e\u4f8b\u6216 Server/Cloud \u5b9e\u4f8b\u4e0a\u7684\u4efb\u52a1\uff0c\u5305\u62ecModel Evluation, Fine-tuning, Online Serving \u548c Developing \u7b49\u7c7b\u578b\u7684\u4efb\u52a1\u3002\u51fd\u6570\u8fd4\u56de Job \u7c7b\u578b\u7684\u5bf9\u8c61\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"create")," \u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"project")," \u53c2\u6570\u51b3\u5b9a\u751f\u6210\u7684\u4efb\u52a1\u8fd0\u884c\u5728\u4f55\u79cd\u5b9e\u4f8b\u4e0a\uff0c\u5305\u62ec Standalone \u548c Server/Cloud \u5b9e\u4f8b\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 Standalone \u5b9e\u4f8b\u4e0b\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"create")," \u521b\u5efa\u4e00\u4e2a\u540c\u6b65\u6267\u884c\u7684\u4efb\u52a1\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728 Server/Cloud \u5b9e\u4f8b\u4e0b\uff0c ",(0,l.kt)("inlineCode",{parentName:"li"},"create")," \u521b\u5efa\u4e00\u4e2a\u5f02\u6b65\u6267\u884c\u7684\u4efb\u52a1\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'@classmethod\ndef create(\n    cls,\n    project: Project | str,\n    model: Resource | str,\n    run_handler: str,\n    datasets: t.List[str | Resource] | None = None,\n    runtime: Resource | str | None = None,\n    resource_pool: str = DEFAULT_RESOURCE_POOL,\n    ttl: int = 0,\n    dev_mode: bool = False,\n    dev_mode_password: str = "",\n    dataset_head: int = 0,\n    overwrite_specs: t.Dict[str, t.Any] | None = None,\n) -> Job:\n')),(0,l.kt)("h3",{id:"create-params"},"\u53c2\u6570"),(0,l.kt)("p",null,"\u5bf9\u6240\u6709\u5b9e\u4f8b\u90fd\u751f\u6548\u7684\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"project"),": (Project|str, required)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Project")," \u5bf9\u8c61\u6216 Project URI \u5b57\u7b26\u4e32\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"model"),": (Resource|str, required)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Model URI \u5b57\u7b26\u4e32\u6216 Model \u7c7b\u578b\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"Resource")," \u5bf9\u8c61\uff0c\u8868\u793a\u8981\u8fd0\u884c\u7684 Starwhale \u6a21\u578b\u5305\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"run_handler"),": (str, required)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Starwhale \u6a21\u578b\u5305\u4e2d\u5bf9\u5e94\u7684\u53ef\u8fd0\u884c\u7684 handler \u540d\u79f0\uff0c\u6bd4\u5982 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/mnist"},"mnist")," \u7684 evaluate handler: ",(0,l.kt)("inlineCode",{parentName:"li"},"mnist.evaluator:MNISTInference.evaluate")," \u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"datasets"),": (List","[str | Resource]",", optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Starwhale \u6a21\u578b\u5305\u8fd0\u884c\u6240\u9700\u8981\u7684\u6570\u636e\u96c6\uff0c\u975e\u5fc5\u9700\u3002")))),(0,l.kt)("p",null,"\u4ec5\u5bf9 Standalone \u5b9e\u4f8b\u751f\u6548\u7684\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dataset_head"),": (int, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u7528\u4e8e\u8c03\u8bd5\u573a\u666f\uff0c\u53ea\u4f7f\u7528\u6570\u636e\u96c6\u524d N \u6761\u6570\u636e\u6765\u4f9b Starwhale \u6a21\u578b\u6765\u6d88\u8d39\u3002")))),(0,l.kt)("p",null,"\u4ec5\u5bf9 Server/Cloud \u5b9e\u4f8b\u751f\u6548\u7684\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"runtime"),": (Resource | str, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Runtime URI \u5b57\u7b26\u4e32\u6216 Runtime \u7c7b\u578b\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"Resource")," \u5bf9\u8c61\uff0c\u8868\u793a\u8981\u8fd0\u884c\u4efb\u52a1\u6240\u9700\u8981\u7684 Starwhale \u8fd0\u884c\u65f6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u4e0d\u6307\u5b9a\u8be5\u53c2\u6570\u65f6\uff0c\u4f1a\u5c1d\u8bd5\u4f7f\u7528 Starwhale \u6a21\u578b\u5305\u7684\u5185\u5efa\u8fd0\u884c\u65f6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa Standalone \u5b9e\u4f8b\u4e0b\u7684\u4efb\u52a1\uff0c\u4f7f\u7528 Python \u811a\u672c\u6240\u7528\u7684 Python \u89e3\u91ca\u5668\u73af\u5883\u4f5c\u4e3a\u81ea\u5df1\u7684\u8fd0\u884c\u65f6\uff0c\u4e0d\u652f\u6301\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"runtime")," \u53c2\u6570\u6307\u5b9a\u8fd0\u884c\u65f6\u3002\u82e5\u6709\u6307\u5b9a\u8fd0\u884c\u65f6\u7684\u9700\u8981\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"swcli model run")," \u547d\u4ee4\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"resource_pool"),": (str, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u4efb\u52a1\u8fd0\u884c\u5728\u54ea\u4e2a\u8d44\u6e90\u6c60\u4e2d\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"default")," \u8d44\u6e90\u6c60\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ttl"),": (int, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4efb\u52a1\u6700\u5927\u5b58\u6d3b\u65f6\u95f4\uff0c\u8d85\u65f6\u540e\u4f1a\u88ab\u6740\u6389\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u6570\u5355\u4f4d\u4e3a\u79d2\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cttl\u4e3a0\uff0c\u8868\u793a\u6ca1\u6709\u8d85\u65f6\u9650\u5236\uff0c\u4efb\u52a1\u4f1a\u6309\u9884\u671f\u8fd0\u884c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53ttl\u5c0f\u4e8e0\u65f6\uff0c\u4e5f\u8868\u793a\u6ca1\u6709\u8d85\u65f6\u9650\u5236\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dev_mode"),": (bool, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u662f\u5426\u8bbe\u7f6e\u4e3a\u8c03\u8bd5\u6a21\u5f0f\u3002\u5f00\u542f\u6b64\u6a21\u5f0f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7VSCode Web\u8fdb\u5165\u5230\u76f8\u5173\u73af\u5883\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u8fdb\u5165\u8c03\u8bd5\u6a21\u5f0f\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dev_mode_password"),": (str, optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8c03\u8bd5\u6a21\u5f0f\u4e0bVSCode Web\u7684\u767b\u5f55\u5bc6\u7801\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e3a\u7a7a\uff0c\u6b64\u65f6\u4f1a\u7528\u4efb\u52a1\u7684UUID\u4f5c\u4e3a\u5bc6\u7801\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"job.info().job.uuid")," \u83b7\u5f97\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"overwrite_specs"),": (Dict","[str, Any]",", optional)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u8bbe\u7f6e handler \u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"replicas")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"resources")," \u5b57\u6bb5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u82e5\u4e3a\u7a7a\uff0c\u5219\u4f7f\u7528\u6a21\u578b\u5305\u4e2d\u5bf9\u5e94 handler \u8bbe\u7f6e\u7684\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"overwrite_specs")," \u7684 key \u4e3a handler \u7684\u540d\u5b57\uff0c\u6bd4\u5982 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/mnist"},"mnist")," \u7684 evaluate handler: ",(0,l.kt)("inlineCode",{parentName:"li"},"mnist.evaluator:MNISTInference.evaluate"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"overwrite_specs")," \u7684 value \u4e3a\u8bbe\u7f6e\u7684\u503c\uff0c\u5b57\u5178\u683c\u5f0f\uff0c\u652f\u6301\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"replicas")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"resources")," , \u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},'{"replicas": 1, "resources": {"memory": "1GiB"}}'),"\u3002")))),(0,l.kt)("h3",{id:"create-example"},"\u4f7f\u7528\u793a\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a Cloud \u5b9e\u4f8b\u7684\u4efb\u52a1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import Job\nproject = "https://cloud.starwhale.cn/project/starwhale:public"\njob = Job.create(\n    project=project,\n    model=f"{project}/model/mnist/version/v0",\n    run_handler="mnist.evaluator:MNISTInference.evaluate",\n    datasets=[f"{project}/dataset/mnist/version/v0"],\n    runtime=f"{project}/runtime/pytorch",\n    overwrite_specs={"mnist.evaluator:MNISTInference.evaluate": {"resources": "4GiB"},\n                     "mnist.evaluator:MNISTInference.predict": {"resources": "8GiB", "replicas": 10}}\n)\nprint(job.status)\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u4e00\u4e2a Standalone \u5b9e\u4f8b\u7684\u4efb\u52a1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import Job\njob = Job.create(\n    project="self",\n    model="mnist",\n    run_handler="mnist.evaluator:MNISTInference.evaluate",\n    datasets=["mnist"],\n)\nprint(job.status)\n')))}u.isMDXComponent=!0}}]);