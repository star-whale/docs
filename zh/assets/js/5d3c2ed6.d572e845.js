"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[1342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(o,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,p(p({ref:t},d),{},{components:n})):a.createElement(k,p({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(83117),r=(n(67294),n(3905));const l={title:"\u6a21\u578b\u8bc4\u6d4b"},p=void 0,i={unversionedId:"evaluation/api/sdk",id:"version-0.4.5/evaluation/api/sdk",title:"\u6a21\u578b\u8bc4\u6d4b",description:"starwhale.PipelineHandler",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.4.5/evaluation/api/sdk.md",sourceDirName:"evaluation/api",slug:"/evaluation/api/sdk",permalink:"/zh/docs/evaluation/api/sdk",draft:!1,editUrl:"https://github.com/star-whale/starwhale/tree/main/docs/versioned_docs/version-0.4.5/evaluation/api/sdk.md",tags:[],version:"0.4.5",frontMatter:{title:"\u6a21\u578b\u8bc4\u6d4b"},sidebar:"mainSidebar",previous:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/zh/docs/dataset/api/data_type"},next:{title:"\u5176\u4ed6SDK",permalink:"/zh/docs/reference/sdk/other"}},o={},s=[{value:"starwhale.PipelineHandler",id:"starwhalepipelinehandler",level:2},{value:"starwhale.Context",id:"starwhalecontext",level:2},{value:"starwhale.multi_classification",id:"starwhalemulti_classification",level:2},{value:"starwhale.step",id:"starwhalestep",level:2},{value:"starwhale.api.service.Service",id:"starwhaleapiserviceservice",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"starwhalepipelinehandler"},"starwhale.PipelineHandler"),(0,r.kt)("p",null,"\u63d0\u4f9b\u9ed8\u8ba4\u7684\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b\u5b9a\u4e49\uff0c\u9700\u8981\u7528\u6237\u5b9e\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"ppl")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," \u51fd\u6570\u3002Github\u4e0a\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/dc6e6fdeae2f7c5bd0e72ccd8fb50768b1ce0826/client/starwhale/api/_impl/model.py"},"\u4ee3\u7801\u94fe\u63a5"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from typing import Any, Iterator\nfrom abc import ABCMeta, abstractmethod\n\nclass PipelineHandler(metaclass=ABCMeta):\n    def __init__(self,\n        ignore_annotations: bool = False,\n        ignore_error: bool = False,\n    ) -> None:\n        ...\n\n    @abstractmethod\n    def ppl(self, data: Any, **kw: Any) -> Any:\n        raise NotImplementedError\n\n    @abstractmethod\n    def cmp(self, ppl_result: Iterator) -> Any\n        raise NotImplementedError\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PipelineHandler")," \u7c7b\u5b9e\u4f8b\u5316\u65f6\u53ef\u4ee5\u5b9a\u4e49\u4e24\u4e2a\u53c2\u6570\uff1a\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"ignore_annotations"),"\u4e3aFalse\u65f6\uff0c\u81ea\u52a8\u8bb0\u5f55\u6570\u636e\u4e2d\u4f1a\u643a\u5e26\u6570\u636e\u96c6\u6240\u5bf9\u5e94\u7684 annotations\u4fe1\u606f\uff0c\u4fdd\u8bc1index\u4e0a\u4e0e\u63a8\u7406\u7ed3\u679c\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\uff1b\u5f53 ",(0,r.kt)("inlineCode",{parentName:"p"},"ignore_error"),"\u4e3aTrue\u662f\uff0c\u4f1a\u5ffd\u7565ppl\u8fc7\u7a0b\u4e2d\u7684\u9519\u8bef\uff0c\u53ef\u4ee5\u89e3\u51b3\u6bd4\u8f83\u5927\u7684\u6570\u636e\u96c6\u6837\u672c\u4e2d\uff0c\u6709\u4e2a\u522b\u6570\u636e\u9519\u8bef\u5bfc\u81f4ppl\u5931\u8d25\uff0c\u8fdb\u800c\u5bfc\u81f4\u65e0\u6cd5\u5b8c\u6210\u8bc4\u6d4b\u7684\u95ee\u9898\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ppl")," \u51fd\u6570\u7528\u6765\u8fdb\u884c\u63a8\u7406\uff0c\u8f93\u5165\u53c2\u6570\u4e3a data\u548ckw\u3002data\u8868\u793a\u6570\u636e\u96c6\u4e2d\u67d0\u4e2a\u6837\u672c\uff0ckw\u4e3a\u4e00\u4e2a\u5b57\u5178\uff0c\u76ee\u524d\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"annotations")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"index"),"\u3002\u6bcf\u6761\u6570\u636e\u96c6\u6837\u672c\u90fd\u4f1a\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ppl"),"\u51fd\u6570\uff0c\u8f93\u51fa\u4e3a\u6a21\u578b\u63a8\u7406\u503c\uff0c\u4f1a\u81ea\u52a8\u88ab\u8bb0\u5f55\u548c\u5b58\u50a8\uff0c\u53ef\u4ee5\u5728cmp\u51fd\u6570\u4e2d\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"ppl_result")," \u53c2\u6570\u83b7\u53d6\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," \u51fd\u6570\u4e00\u822c\u7528\u6765\u8fdb\u884c\u63a8\u7406\u7ed3\u679c\u7684\u6c47\u603b\uff0c\u5e76\u4ea7\u751f\u6700\u7ec8\u7684\u8bc4\u6d4b\u62a5\u544a\u6570\u636e\uff0c\u53ea\u4f1a\u8c03\u7528\u4e00\u6b21\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"cmp")," \u51fd\u6570\u7684\u53c2\u6570\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ppl_result")," \uff0c\u53ef\u4ee5\u88ab\u8fed\u4ee3\u3002\u8fed\u4ee3\u51fa\u6765\u7684\u5bf9\u8c61\u4e3a\u4e00\u4e2a\u5b57\u5178\uff0c\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"output"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"data_id")," \u4e09\u4e2a\u5143\u7d20\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"output")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ppl")," \u8fd4\u56de\u7684\u5143\u7d20\uff0c\u7531\u4e8e\u4f7f\u7528\u4e86 pickle\u505a\u5e8f\u5217\u5316-\u53cd\u5e8f\u5217\u5316\uff0cdata",'["output"]'," \u53d8\u91cf\u76f4\u63a5\u80fd\u83b7\u53d6ppl\u51fd\u6570return\u7684\u503c\uff1b",(0,r.kt)("inlineCode",{parentName:"p"},"input")," \u4e3a\u6784\u5efa\u6570\u636e\u96c6\u65f6\u5199\u5165\u7684\uff0c\u6b64\u9636\u6bb5\u7684result",'["input"]',"\u4e3a\u4e00\u4e2adict\u7c7b\u578b\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"data_id")," \u8868\u793a\u6570\u636e\u96c6\u5bf9\u5e94\u7684index\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\uff0c\u5728PipelineHandler\u53ca\u5176\u5b50\u7c7b\u4e2d\u53ef\u4ee5\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"self.context")," \u83b7\u53d6 ",(0,r.kt)("inlineCode",{parentName:"p"},"starwhale.Context")," \u7c7b\u578b\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u5e38\u89c1\u7684\u4f7f\u7528\u65b9\u6cd5\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nclass Example(PipelineHandler):\n    def __init__(self) -> None:\n        super().__init__()\n        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")\n        self.model = self._load_model(self.device)\n\n    def ppl(self, img: Image, **kw):\n        data_tensor = self._pre(img)\n        output = self.model(data_tensor)\n        return self._post(output)\n\n    def cmp(self, ppl_result):\n        result, label, pr = [], [], []\n        for _data in ppl_result:\n            label.append(_data["input"]["label"])\n            result.extend(_data["output"][0])\n            pr.extend(_data["output"][1])\n        return label, result, pr\n\n    def _pre(self, input: Image) -> torch.Tensor:\n        ...\n\n    def _post(self, input):\n        ...\n\n    def _load_model(self, device):\n        ...\n')),(0,r.kt)("h2",{id:"starwhalecontext"},"starwhale.Context"),(0,r.kt)("p",null,"\u6267\u884c\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b\u4e2d\u4f20\u5165\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\uff0c\u5305\u62ecProject\u3001Task ID\u7b49\u3002Github\u4e0a\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/dc6e6fdeae2f7c5bd0e72ccd8fb50768b1ce0826/client/starwhale/api/_impl/job.py"},"\u4ee3\u7801\u94fe\u63a5"),"\u3002Context\u7684\u5185\u5bb9\u662f\u81ea\u52a8\u6ce8\u5165\u7684\uff0c\u7528\u6237\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"@pass_context")," \u4f7f\u7528context\uff0c\u6216\u5728 \u7ee7\u627f ",(0,r.kt)("inlineCode",{parentName:"p"},"PipelineHandler")," \u7c7b\u5185\u4f7f\u7528\uff0c\u76ee\u524dContext\u53ef\u4ee5\u83b7\u5f97\u5982\u4e0b\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\n@pass_context\ndef func(context: Context):\n    ...\n    print(context.project)\n    print(context.version)\n    print(context.step)\n    ...\n\nContext(\n    workdir: Path,\n    step: str = "",\n    total: int = 1,\n    index: int = 0,\n    dataset_uris: t.List[str] = [],\n    version: str = "",\n    project: str = "",\n)\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project"),(0,r.kt)("td",{parentName:"tr",align:null},"project\u540d\u5b57")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"Evaluation \u7248\u672c\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"step"),(0,r.kt)("td",{parentName:"tr",align:null},"step\u540d\u5b57")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"total"),(0,r.kt)("td",{parentName:"tr",align:null},"step\u4e0b\u6240\u6709\u7684task\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"index"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524dtask\u7684\u7d22\u5f15\u7f16\u53f7\uff0c\u4ece\u96f6\u5f00\u59cb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataset_uris"),(0,r.kt)("td",{parentName:"tr",align:null},"dataset uri\u5b57\u7b26\u4e32\u7684\u5217\u8868")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"workdir"),(0,r.kt)("td",{parentName:"tr",align:null},"model.yaml\u6240\u5728\u76ee\u5f55")))),(0,r.kt)("h2",{id:"starwhalemulti_classification"},"starwhale.multi_classification"),(0,r.kt)("p",null,"\u4fee\u9970\u5668\uff0c\u9002\u7528\u4e8e\u591a\u5206\u7c7b\u95ee\u9898\uff0c\u7528\u6765\u7b80\u5316cmp\u7ed3\u679c\u7684\u8fdb\u4e00\u6b65\u8ba1\u7b97\u548c\u7ed3\u679c\u5b58\u50a8\uff0c\u80fd\u66f4\u597d\u7684\u5448\u73b0\u8bc4\u6d4b\u7ed3\u679c\u3002Github\u4e0a\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/dc6e6fdeae2f7c5bd0e72ccd8fb50768b1ce0826/client/starwhale/api/_impl/metric.py"},"\u4ee3\u7801\u94fe\u63a5"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\n@multi_classification(\n    confusion_matrix_normalize="all",\n    show_hamming_loss=True,\n    show_cohen_kappa_score=True,\n    show_roc_auc=True,\n    all_labels=[i for i in range(0, 10)],\n)\ndef cmp(ppl_result) -> t.Tuple[t.List[int], t.List[int], t.List[t.List[float]]]:\n    label, result, probability_matrix = [], [], []\n    return label, result, probability_matrix\n\n@multi_classification(\n    confusion_matrix_normalize="all",\n    show_hamming_loss=True,\n    show_cohen_kappa_score=True,\n    show_roc_auc=False,\n    all_labels=[i for i in range(0, 10)],\n)\ndef cmp(ppl_result) -> t.Tuple[t.List[int], t.List[int], t.List[t.List[float]]]:\n    label, result = [], [], []\n    return label, result\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"confusion_matrix_normalize")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"),"(rows), ",(0,r.kt)("inlineCode",{parentName:"td"},"pred"),"(columns) \u6216 ",(0,r.kt)("inlineCode",{parentName:"td"},"all"),"(rows+columns)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"show_hamming_loss")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8ba1\u7b97hamming loss")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"show_cohen_kappa_score")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8ba1\u7b97 cohen kappa score")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"show_roc_auc")),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u8ba1\u7b97roc/auc, \u8ba1\u7b97\u7684\u65f6\u5019\uff0c\u9700\u8981\u51fd\u6570\u8fd4\u56de(label\uff0cresult, probability_matrix) \u4e09\u5143\u7ec4\uff0c\u5426\u5219\u53ea\u9700\u8fd4\u56de(label, result) \u4e24\u5143\u7ec4\u5373\u53ef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all_labels"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6240\u6709\u7684labels")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"multi_classification")," \u4fee\u9970\u5668\u4f7f\u7528sklearn lib\u5bf9\u591a\u5206\u7c7b\u95ee\u9898\u8fdb\u884c\u7ed3\u679c\u5206\u6790\uff0c\u8f93\u51faconfusion matrix, roc, auc\u7b49\u503c\uff0c\u5e76\u4e14\u4f1a\u5199\u5165\u5230 starwhale\u7684 DataStore \u4e2d\u3002\u4f7f\u7528\u7684\u65f6\u5019\u9700\u8981\u5bf9\u6240\u4fee\u9970\u7684\u51fd\u6570\u8fd4\u56de\u503c\u6709\u4e00\u5b9a\u8981\u6c42\uff0c\u8fd4\u56de(label, result, probability_matrix) \u6216 (label, result)\u3002"),(0,r.kt)("h2",{id:"starwhalestep"},"starwhale.step"),(0,r.kt)("p",null,"\u4fee\u9970\u5668\uff0c\u53ef\u4ee5\u6307\u5b9aDAG\u7684\u4f9d\u8d56\u5173\u7cfb\u548cTask\u6570\u91cf\u3001\u8d44\u6e90\u7b49\u914d\u7f6e\uff0c\u5b9e\u73b0\u7528\u6237\u81ea\u5b9a\u4e49\u8bc4\u6d4b\u8fc7\u7a0b\u3002Github\u4e0a\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/dc6e6fdeae2f7c5bd0e72ccd8fb50768b1ce0826/client/starwhale/api/_impl/job.py"},"\u4ee3\u7801\u94fe\u63a5"),"\u3002\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"step")," \u53ef\u4ee5\u5b8c\u5168\u4e0d\u4f9d\u8d56\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"PipelineHandler")," \u9884\u5b9a\u4e49\u7684\u57fa\u672c\u6a21\u578b\u8bc4\u6d4b\u8fc7\u7a0b\uff0c\u53ef\u4ee5\u81ea\u884c\u5b9a\u4e49\u591a\u9636\u6bb5\u548c\u6bcf\u4e2a\u9636\u6bb5\u7684\u4f9d\u8d56\u3001\u8d44\u6e90\u548c\u4efb\u52a1\u5e76\u53d1\u6570\u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@step(\n    resources: Optional[t.Dict[str, Any]] = None,\n    concurrency: int = 1,\n    task_num: int = 1,\n    needs: Optional[List[str]] = None,\n)\ndef func():\n    ...\n\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources")),(0,r.kt)("td",{parentName:"tr",align:null},"\u8be5step\u4e2d\u6bcf\u4e2atask\u6240\u4f9d\u8d56\u7684\u8d44\u6e90\u60c5\u51b5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"concurrency")),(0,r.kt)("td",{parentName:"tr",align:null},"task\u6267\u884c\u7684\u5e76\u53d1\u5ea6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"task_num")),(0,r.kt)("td",{parentName:"tr",align:null},"step\u4f1a\u88ab\u5206\u6210task\u7684\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"needs")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f9d\u8d56\u7684step\u5217\u8868")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"resources")," \u683c\u5f0f\u4e3a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b80\u5316\u8868\u8fbe\u65b9\u5f0f\uff1a\u4ee3\u8868request\u548climit\u540c\u65f6\u8bbe\u7f6e\uff0c\u4e14\u503c\u76f8\u540c\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"{\n  {\u540d\u79f0}:{\u6570\u91cf},\n  ...\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b8c\u5168\u8868\u8fbe\u65b9\u5f0f\uff1a\u4ee3\u8868\u5206\u522b\u5bf9limit\u548crequest\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  {\u540d\u79f0}:{"request": {\u6570\u91cf},"limit": {\u6570\u91cf}},\n  ...\n}\n')))),(0,r.kt)("p",null,"\u5176\u4e2d\uff0c\u540d\u79f0\u4e3a\u8d44\u6e90\u7684\u79cd\u7c7b\uff0c\u76ee\u524d\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"cpu"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"gpu")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"memory"),"\u3002\u5f53\u79cd\u7c7b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"cpu")," \u65f6\uff0c\u6570\u91cf\u7684\u7c7b\u578b\u4e3afloat, \u6ca1\u6709\u5355\u4f4d\uff0c1\u8868\u793a1\u4e2acpu core\uff0c\u5bf9\u5e94Kubernetes resource\u7684request\u548climit\uff1b\u5f53\u79cd\u7c7b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"gpu")," \u65f6\uff0c\u6570\u91cf\u7684\u7c7b\u578b\u4e3aint\uff0c\u6ca1\u6709\u5355\u4f4d\uff0c1\u8868\u793a1\u4e2agpu\uff0c\u5bf9\u5e94Kubernetes resource\u7684request\u548climit\uff1b\u5f53\u79cd\u7c7b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"memory"),"\u65f6\uff0c\u6570\u91cf\u7684\u7c7b\u578b\u4e3afloat\uff0c\u6ca1\u6709\u5355\u4f4d\uff0c1\u8868\u793a1MB\u5185\u5b58\uff0c\u5bf9\u5e94Kubernetes resource\u7684request\u548climit\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," \u4f7f\u7528\u5217\u8868\u7684\u65b9\u5f0f\u652f\u6301\u6307\u5b9a\u591a\u4e2a\u8d44\u6e90\uff0c\u4e14\u8fd9\u4e9b\u8d44\u6e90\u90fd\u6ee1\u8db3\u65f6\u624d\u4f1a\u8fdb\u884c\u8c03\u5ea6\u3002\u5f53\u4e0d\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," \u65f6\uff0c\u4f1a\u4f7f\u7528\u6240\u5728Kubernetes\u7684cpu\u3001memory\u9ed8\u8ba4\u503c\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," \u8868\u793a\u7684\u662f\u4e00\u4e2atask\u6267\u884c\u65f6\u6240\u9700\u8981\u7684\u8d44\u6e90\u60c5\u51b5\uff0c\u5e76\u4e0d\u662fstep\u6240\u6709task\u7684\u8d44\u6e90\u603b\u548c\u9650\u5236\u3002",(0,r.kt)("strong",{parentName:"p"},"\u76ee\u524d ",(0,r.kt)("inlineCode",{parentName:"strong"},"resources")," \u53ea\u5728Cloud Instance\u4e2d\u751f\u6548"),"\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"resources")," \u4f7f\u7528\u4f8b\u5b50\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@step()\n@step(resources={"cpu":1})\n@step(resources={"gpu":1})\n@step(resources={"memory":100})\n@step(resources={"cpu": 0.1, "gpu": 1, "memory": 100})\n@step(resources={"cpu": {"request": 0.1, "limit": 0.2}, "gpu": {"request": 1, "limit": 1}, "memory": {"request": 100, "limit": 200}})\n')),(0,r.kt)("h2",{id:"starwhaleapiserviceservice"},"starwhale.api.service.Service"),(0,r.kt)("p",null,"\u7528\u4e8e model serve \u7684\u57fa\u7840\u7c7b, \u6700\u5e38\u7528\u7684\u7528\u6cd5\u662f"),(0,r.kt)("p",null,"5.1. \u4f7f\u7528 decorator \u6dfb\u52a0 handler"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from starwhale.api.service import api\n\n@api(...)\ndef handler(data):\n    ...\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u65b9\u6cd5\u5b9a\u4e49\u7684\u6a21\u578b\u652f\u6301\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli model serve")," \u547d\u4ee4\u542f\u52a8\u4e00\u4e2a web service \u63a5\u6536\u5916\u90e8\u8bf7\u6c42, \u5e76\u5c06\u63a8\u7406\u7ed3\u679c\u8fd4\u56de\u7ed9\u7528\u6237"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u8bf7\u6c42 example/mnist model serving \u7684\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# curl 127.0.0.1:8080/handler -X POST -H 'Content-Type: application/json' -d 'json payload ...'\n[\n  [\n    9\n  ],\n  [\n    [\n      3.3270520369869727e-09,\n      1.2171811490062852e-10,\n      1.2030677147728627e-09,\n      1.7674896093116236e-09,\n      9.050932806073548e-05,\n      6.260229311866706e-08,\n      4.511245851157581e-10,\n      4.308102983942366e-06,\n      1.1480706309613537e-05,\n      0.999893676619871\n    ]\n  ]\n]\n")),(0,r.kt)("p",null,"5.2. \u4f7f\u7528\u57fa\u7c7b\u51fd\u6570\u6dfb\u52a0 handler"),(0,r.kt)("p",null,"\u5982\u679c model \u662f\u7ee7\u627f\u81ea ",(0,r.kt)("inlineCode",{parentName:"p"},"PipelineHandler"),", \u4e5f\u53ef\u4ee5\u4e0d\u5b9e\u4f8b\u5316 ",(0,r.kt)("inlineCode",{parentName:"p"},"Service"),", \u8c03\u7528\u57fa\u7c7b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"add_api")," \u65b9\u6cd5\u624b\u52a8\u6dfb\u52a0 handler, \u4f8b\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class MyDefaultClass(PipelineHandler):\n    def __init__(self) -> None:\n        super().__init__()\n        for func in [self.ppl, self.handler_foo]:\n            self.add_api(Input(), Output(), func, func.__name__)\n\n    def ppl(self, data: bytes, **kw: t.Any) -> t.Any:\n        return data\n\n    def handler_foo(self, data: t.Any) -> t.Any:\n        return\n\n    def cmp(self, ppl_result) -> t.Any:\n        pass\n")),(0,r.kt)("p",null,"5.3. \u81ea\u5b9a\u4e49 Service"),(0,r.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u81ea\u5b9a\u4e49 web service \u7684\u5b9e\u73b0, \u53ef\u4ee5\u7ee7\u627f ",(0,r.kt)("inlineCode",{parentName:"p"},"Service")," \u5e76\u91cd\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"serve")," \u51fd\u6570\u5373\u53ef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"class CustomService(Service):\n    def serve(self, addr: str, port: int, handler_list: t.List[str] = None) -> None:\n        ...\n\nsvc = CustomService()\n\n@svc.api(...)\ndef handler(data):\n    ...\n")),(0,r.kt)("p",null,"\u8bf4\u660e:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"PipelineHandler.add_api")," \u51fd\u6570\u6dfb\u52a0\u7684 handler \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"api")," \u4ee5\u53ca\u5b9e\u4f8b\u5316\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Service.api")," decorator \u6dfb\u52a0\u7684 handler \u53ef\u4ee5\u540c\u65f6\u751f\u6548"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"Service"),", \u9700\u8981\u5728 model \u4e2d\u5b9e\u4f8b\u5316\u81ea\u5b9a\u4e49\u7684 Service \u7c7b")),(0,r.kt)("p",null,"5.4. \u81ea\u5b9a\u4e49 Request \u548c Response"),(0,r.kt)("p",null,"Request \u548c Response \u5206\u522b\u662f\u7528\u4e8e\u63a5\u6536\u7528\u6237\u8bf7\u6c42\u548c\u8fd4\u56de\u7ed9\u7528\u6237\u7ed3\u679c\u7684\u5904\u7406\u7c7b, \u53ef\u4ee5\u7b80\u5355\u7684\u7406\u89e3\u6210\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"handler")," \u7684\u524d\u5904\u7406\u548c\u540e\u5904\u7406\u903b\u8f91"),(0,r.kt)("p",null,"Starwhale \u5c06\u652f\u6301 Dataset \u5185\u7f6e\u7c7b\u578b\u7684 Request \u5b9e\u73b0\u4ee5\u53ca Json Response \u7684\u5b9e\u73b0, \u540c\u65f6\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5904\u7406\u903b\u8f91\u6765\u4f7f\u7528, \u81ea\u5b9a\u4e49\u7684\u793a\u4f8b\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import typing as t\n\nfrom starwhale.api.service import (\n    Request,\n    Service,\n    Response,\n)\n\n\nclass CustomInput(Request):\n    def load(self, req: t.Any) -> t.Any:\n        return req\n\n\nclass CustomOutput(Response):\n    def __init__(self, prefix: str) -> None:\n        self.prefix = prefix\n\n    def dump(self, req: str) -> bytes:\n        return f"{self.prefix} {req}".encode("utf-8")\n\nsvc = Service()\n\n@svc.api(request=CustomInput(), response=CustomOutput("hello"))\ndef foo(data: t.Any) -> t.Any:\n    ...\n')))}u.isMDXComponent=!0}}]);