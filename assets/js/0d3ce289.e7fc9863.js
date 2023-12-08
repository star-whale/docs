"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[27551],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},60648:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const l={title:"Starwhale Job SDK"},i=void 0,o={unversionedId:"reference/sdk/job",id:"version-0.6.7/reference/sdk/job",title:"Starwhale Job SDK",description:"job",source:"@site/versioned_docs/version-0.6.7/reference/sdk/job.md",sourceDirName:"reference/sdk",slug:"/reference/sdk/job",permalink:"/reference/sdk/job",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.7/reference/sdk/job.md",tags:[],version:"0.6.7",frontMatter:{title:"Starwhale Job SDK"},sidebar:"mainSidebar",previous:{title:"Starwhale Model SDK",permalink:"/reference/sdk/model"},next:{title:"swcli server",permalink:"/reference/swcli/server"}},s={},p=[{value:"job",id:"job",level:2},{value:"Parameters",id:"job-func-params",level:3},{value:"Usage Example",id:"job-func-example",level:3},{value:"class starwhale.Job",id:"class-starwhalejob",level:2},{value:"list",id:"list",level:3},{value:"Parameters",id:"list-params",level:3},{value:"Usage Example",id:"list-example",level:3},{value:"get",id:"get",level:2},{value:"Usage Example",id:"get-example",level:3},{value:"summary",id:"summary",level:2},{value:"Usage Example",id:"summary-example",level:3},{value:"tables",id:"tables",level:3},{value:"Usage Example",id:"tables-example",level:3},{value:"get_table_rows",id:"get_table_rows",level:2},{value:"Parameters",id:"rows-params",level:3},{value:"Usage Example",id:"rows-example",level:3},{value:"status",id:"status",level:2},{value:"create",id:"create",level:2},{value:"Parameters",id:"create-params",level:3},{value:"Examples",id:"create-example",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"job"},"job"),(0,r.kt)("p",null,"Get a ",(0,r.kt)("inlineCode",{parentName:"p"},"starwhale.Job")," object through the Job URI parameter, which represents a Job on Standalone/Server/Cloud instances."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef job(\n    cls,\n    uri: str,\n) -> Job:\n")),(0,r.kt)("h3",{id:"job-func-params"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uri"),": (str, required)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Job URI format.")))),(0,r.kt)("h3",{id:"job-func-example"},"Usage Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import job\n\n# get job object of uri=https://server/job/1\nj1 = job("https://server/job/1")\n\n# get job from standalone instance\nj2 = job("local/project/self/job/xm5wnup")\nj3 = job("xm5wnup")\n')),(0,r.kt)("h2",{id:"class-starwhalejob"},"class starwhale.Job"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"starwhale.Job")," abstracts Starwhale Job and enables some information retrieval operations on the job."),(0,r.kt)("h3",{id:"list"},"list"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"list")," is a classmethod that can list the jobs under a project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@classmethod\ndef list(\n    cls,\n    project: str = "",\n    page_index: int = DEFAULT_PAGE_IDX,\n    page_size: int = DEFAULT_PAGE_SIZE,\n) -> Tuple[List[Job], Dict]:\n')),(0,r.kt)("h3",{id:"list-params"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project"),": (str, optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Project URI, can be projects on Standalone/Server/Cloud instances."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"project")," is not specified, the project selected by ",(0,r.kt)("inlineCode",{parentName:"li"},"swcli project selected")," will be used."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page_index"),": (int, optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When getting the jobs list from Server/Cloud instances, paging is supported. This parameter specifies the page number.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Default is 1."),(0,r.kt)("li",{parentName:"ul"},"Page numbers start from 1."))),(0,r.kt)("li",{parentName:"ul"},"Standalone instances do not support paging. This parameter has no effect."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page_size"),": (int, optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When getting the jobs list from Server/Cloud instances, paging is supported. This parameter specifies the number of jobs returned per page.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Default is 1."),(0,r.kt)("li",{parentName:"ul"},"Page numbers start from 1."))),(0,r.kt)("li",{parentName:"ul"},"Standalone instances do not support paging. This parameter has no effect.")))),(0,r.kt)("h3",{id:"list-example"},"Usage Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import Job\n\n# list jobs of current selected project\njobs, pagination_info = Job.list()\n\n# list jobs of starwhale/public project in the cloud.starwhale.cn instance\njobs, pagination_info = Job.list("https://cloud.starwhale.cn/project/starwhale:public")\n\n# list jobs of id=1 project in the server instance, page index is 2, page size is 10\njobs, pagination_info = Job.list("https://server/project/1", page_index=2, page_size=10)\n')),(0,r.kt)("h2",{id:"get"},"get"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"get")," is a classmethod that gets information about a specific job and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Starwhale.Job")," object. It has the same functionality and parameter definitions as the ",(0,r.kt)("inlineCode",{parentName:"p"},"starwhale.job")," function."),(0,r.kt)("h3",{id:"get-example"},"Usage Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import Job\n\n# get job object of uri=https://server/job/1\nj1 = Job.get("https://server/job/1")\n\n# get job from standalone instance\nj2 = Job.get("local/project/self/job/xm5wnup")\nj3 = Job.get("xm5wnup")\n')),(0,r.kt)("h2",{id:"summary"},"summary"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"summary")," is a property that returns the data written to the summary table during the job execution, in dict type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef summary(self) -> Dict[str, Any]:\n")),(0,r.kt)("h3",{id:"summary-example"},"Usage Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import jobs\n\nj1 = job("https://server/job/1")\n\nprint(j1.summary)\n')),(0,r.kt)("h3",{id:"tables"},"tables"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tables")," is a property that returns the names of tables created during the job execution (not including the summary table, which is created automatically at the project level), in list type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef tables(self) -> List[str]:\n")),(0,r.kt)("h3",{id:"tables-example"},"Usage Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import jobs\n\nj1 = job("https://server/job/1")\n\nprint(j1.tables)\n')),(0,r.kt)("h2",{id:"get_table_rows"},"get_table_rows"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"get_table_rows")," is a method that returns records from a data table according to the table name and other parameters, in iterator type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def get_table_rows(\n    self,\n    name: str,\n    start: Any = None,\n    end: Any = None,\n    keep_none: bool = False,\n    end_inclusive: bool = False,\n) -> Iterator[Dict[str, Any]]:\n")),(0,r.kt)("h3",{id:"rows-params"},"Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": (str, required)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Datastore table name. The one of table names obtained through the ",(0,r.kt)("inlineCode",{parentName:"li"},"tables")," property is ok."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start"),": (Any, optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The starting ID value of the returned records."),(0,r.kt)("li",{parentName:"ul"},"Default is None, meaning start from the beginning of the table."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"end"),": (Any, optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ending ID value of the returned records."),(0,r.kt)("li",{parentName:"ul"},"Default is None, meaning until the end of the table."),(0,r.kt)("li",{parentName:"ul"},"If both ",(0,r.kt)("inlineCode",{parentName:"li"},"start")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"end")," are None, all records in the table will be returned as an iterator."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keep_none"),": (bool, optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Whether to return records with ",(0,r.kt)("inlineCode",{parentName:"li"},"None")," values."),(0,r.kt)("li",{parentName:"ul"},"Default is False."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"end_inclusive"),": (bool, optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"end")," is set, whether the iteration includes the ",(0,r.kt)("inlineCode",{parentName:"li"},"end")," record."),(0,r.kt)("li",{parentName:"ul"},"Default is False.")))),(0,r.kt)("h3",{id:"rows-example"},"Usage Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from starwhale import job\n\nj = job(\"local/project/self/job/xm5wnup\")\n\ntable_name = j.tables[0]\n\nfor row in j.get_table_rows(table_name):\n  print(row)\n\nrows = list(j.get_table_rows(table_name, start=0, end=100))\n\n# return the first record from the results table\nresult = list(j.get_table_rows('results', start=0, end=1))[0]\n")),(0,r.kt)("h2",{id:"status"},"status"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"status")," is a property that returns the current real-time state of the Job as a string. The possible states are ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATED"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"READY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PAUSED"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"RUNNING"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CANCELLING"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CANCELED"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SUCCESS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"FAIL"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"UNKNOWN"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@property\ndef status(self) -> str:\n")),(0,r.kt)("h2",{id:"create"},"create"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"create")," is a classmethod that can create tasks on a Standalone instance or Server/Cloud instance, including tasks for Model Evaluation, Fine-tuning, Online Serving, and Developing. The function returns a Job object."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"create")," determines which instance the generated task runs on through the ",(0,r.kt)("inlineCode",{parentName:"li"},"project")," parameter, including Standalone and Server/Cloud instances."),(0,r.kt)("li",{parentName:"ul"},"On a Standalone instance, ",(0,r.kt)("inlineCode",{parentName:"li"},"create")," creates a synchronously executed task."),(0,r.kt)("li",{parentName:"ul"},"On a Server/Cloud instance, ",(0,r.kt)("inlineCode",{parentName:"li"},"create")," creates an asynchronously executed task.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@classmethod\ndef create(\n    cls,\n    project: Project | str,\n    model: Resource | str,\n    run_handler: str,\n    datasets: t.List[str | Resource] | None = None,\n    runtime: Resource | str | None = None,\n    resource_pool: str = DEFAULT_RESOURCE_POOL,\n    ttl: int = 0,\n    dev_mode: bool = False,\n    dev_mode_password: str = "",\n    dataset_head: int = 0,\n    overwrite_specs: t.Dict[str, t.Any] | None = None,\n) -> Job:\n')),(0,r.kt)("h3",{id:"create-params"},"Parameters"),(0,r.kt)("p",null,"Parameters apply to all instances:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project"),": (Project|str, required)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Project")," object or Project URI string."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"model"),": (Resource|str, required)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Model URI string or ",(0,r.kt)("inlineCode",{parentName:"li"},"Resource")," object of Model type, representing the Starwhale model package to run."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"run_handler"),": (str, required)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The name of the runnable handler in the Starwhale model package, e.g. the ",(0,r.kt)("inlineCode",{parentName:"li"},"evaluate")," handler of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/mnist"},"mnist"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"mnist.evaluator:MNISTInference.evaluate"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"datasets"),": (List","[str | Resource]",", optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Datasets required for the Starwhale model package to run, not required.")))),(0,r.kt)("p",null,"Parameters only effective for Standalone instances:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dataset_head"),": (int, optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Generally used for debugging scenarios, only uses the first N data in the dataset for the Starwhale model to consume.")))),(0,r.kt)("p",null,"Parameters only effective for Server/Cloud instances:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"runtime"),": (Resource | str, optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Runtime URI string or ",(0,r.kt)("inlineCode",{parentName:"li"},"Resource")," object of Runtime type, representing the Starwhale runtime required to run the task."),(0,r.kt)("li",{parentName:"ul"},"When not specified, it will try to use the built-in runtime of the Starwhale model package."),(0,r.kt)("li",{parentName:"ul"},"When creating tasks under a Standalone instance, the Python interpreter environment used by the Python script is used as its own runtime. Specifying a runtime via the ",(0,r.kt)("inlineCode",{parentName:"li"},"runtime")," parameter is not supported. If you need to specify a runtime, you can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"swcli model run")," command."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resource_pool"),": (str, optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Specify which resource pool the task runs in, default to the ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," resource pool."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ttl"),": (int, optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Maximum lifetime of the task, will be killed after timeout."),(0,r.kt)("li",{parentName:"ul"},"The unit is seconds."),(0,r.kt)("li",{parentName:"ul"},"By default, ttl is 0, meaning no timeout limit, and the task will run as expected."),(0,r.kt)("li",{parentName:"ul"},"When ttl is less than 0, it also means no timeout limit."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dev_mode"),": (bool, optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Whether to set debug mode. After turning on this mode, you can enter the related environment through VSCode Web."),(0,r.kt)("li",{parentName:"ul"},"Debug mode is off by default."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dev_mode_password"),": (str, optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Login password for VSCode Web in debug mode."),(0,r.kt)("li",{parentName:"ul"},"Default is empty, in which case the task's UUID will be used as the password, which can be obtained via ",(0,r.kt)("inlineCode",{parentName:"li"},"job.info().job.uuid"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"overwrite_specs"),": (Dict","[str, Any]",", optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Support setting the ",(0,r.kt)("inlineCode",{parentName:"li"},"replicas")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"resources")," fields of the handler."),(0,r.kt)("li",{parentName:"ul"},"If empty, use the values set in the corresponding handler of the model package."),(0,r.kt)("li",{parentName:"ul"},"The key of ",(0,r.kt)("inlineCode",{parentName:"li"},"overwrite_specs")," is the name of the handler, e.g. the ",(0,r.kt)("inlineCode",{parentName:"li"},"evaluate")," handler of ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example/mnist"},"mnist"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"mnist.evaluator:MNISTInference.evaluate"),"."),(0,r.kt)("li",{parentName:"ul"},"The value of ",(0,r.kt)("inlineCode",{parentName:"li"},"overwrite_specs")," is the set value, in dictionary format, supporting settings for ",(0,r.kt)("inlineCode",{parentName:"li"},"replicas")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"resources"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},'{"replicas": 1, "resources": {"memory": "1GiB"}}'),".")))),(0,r.kt)("h3",{id:"create-example"},"Examples"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create a Cloud Instance job")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import Job\nproject = "https://cloud.starwhale.cn/project/starwhale:public"\njob = Job.create(\n    project=project,\n    model=f"{project}/model/mnist/version/v0",\n    run_handler="mnist.evaluator:MNISTInference.evaluate",\n    datasets=[f"{project}/dataset/mnist/version/v0"],\n    runtime=f"{project}/runtime/pytorch",\n    overwrite_specs={"mnist.evaluator:MNISTInference.evaluate": {"resources": "4GiB"},\n                     "mnist.evaluator:MNISTInference.predict": {"resources": "8GiB", "replicas": 10}}\n)\nprint(job.status)\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"create a Standalone Instance job")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from starwhale import Job\njob = Job.create(\n    project="self",\n    model="mnist",\n    run_handler="mnist.evaluator:MNISTInference.evaluate",\n    datasets=["mnist"],\n)\nprint(job.status)\n')))}u.isMDXComponent=!0}}]);