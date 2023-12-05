"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[8443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(83117),l=(n(67294),n(3905));const r={title:"Configuration"},i=void 0,o={unversionedId:"swcli/config",id:"version-0.6.6/swcli/config",title:"Configuration",description:"Standalone Instance is installed on the user's laptop or development server, providing isolation at the level of Linux/macOX users. Users can install the Starwhale Python package using the pip command and execute any swcli command. After that, they can view their Starwhale configuration in ~/.config/starwhale/config.yaml. In the vast majority of cases, users do not need to manually modify the config.yaml file.",source:"@site/versioned_docs/version-0.6.6/swcli/config.md",sourceDirName:"swcli",slug:"/swcli/config",permalink:"/swcli/config",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.6/swcli/config.md",tags:[],version:"0.6.6",frontMatter:{title:"Configuration"},sidebar:"mainSidebar",previous:{title:"About the .swignore file",permalink:"/swcli/swignore"},next:{title:"Starwhale Server User Guide",permalink:"/server/"}},s={},d=[{value:"config.yaml example",id:"configyaml-example",level:2},{value:"config.yaml definition",id:"configyaml-definition",level:2},{value:"link_auths definition",id:"link_auths-definition",level:3}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Standalone Instance is installed on the user's laptop or development server, providing isolation at the level of Linux/macOX users. Users can install the Starwhale Python package using the pip command and execute any swcli command. After that, they can view their Starwhale configuration in ~/.config/starwhale/config.yaml. In the vast majority of cases, users do not need to manually modify the config.yaml file."),(0,l.kt)("p",null,"The ~/.config/starwhale/config.yaml file has permissions set to 0o600 to ensure security, as it contains sensitive information such as encryption keys. Users are advised not to change the file permissions.You could customize your ",(0,l.kt)("inlineCode",{parentName:"p"},"swcli")," by ",(0,l.kt)("inlineCode",{parentName:"p"},"swci config edit"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"swcli config edit\n")),(0,l.kt)("h2",{id:"configyaml-example"},"config.yaml example"),(0,l.kt)("p",null,"The typical ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml")," file is as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The default instance is local."),(0,l.kt)("li",{parentName:"ul"},"cloud-cn/cloud-k8s/pre-k8s are the server/cloud instances, local is the standalone instance."),(0,l.kt)("li",{parentName:"ul"},"The local storage root directory for the Standalone Instance is set to /home/liutianwei/.starwhale.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"current_instance: local\ninstances:\n  cloud-cn:\n    sw_token: ${TOKEN}\n    type: cloud\n    updated_at: 2022-09-28 18:41:05 CST\n    uri: https://cloud.starwhale.cn\n    user_name: starwhale\n    user_role: normal\n  cloud-k8s:\n    sw_token: ${TOKEN}\n    type: cloud\n    updated_at: 2022-09-19 16:10:01 CST\n    uri: http://cloud.pre.intra.starwhale.ai\n    user_name: starwhale\n    user_role: normal\n  local:\n    current_project: self\n    type: standalone\n    updated_at: 2022-06-09 16:14:02 CST\n    uri: local\n    user_name: liutianwei\n  pre-k8s:\n    sw_token: ${TOKEN}\n    type: cloud\n    updated_at: 2022-09-19 18:06:50 CST\n    uri: http://console.pre.intra.starwhale.ai\n    user_name: starwhale\n    user_role: normal\nlink_auths:\n  - ak: starwhale\n    bucket: users\n    connect_timeout: 10.0\n    endpoint: http://10.131.0.1:9000\n    read_timeout: 100.0\n    sk: starwhale\n    type: s3\nstorage:\n  root: /home/liutianwei/.starwhale\nversion: '2.0'\n")),(0,l.kt)("h2",{id:"configyaml-definition"},"config.yaml definition"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"current_instance")),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the default instance to use. It is usually set using the ",(0,l.kt)("inlineCode",{parentName:"td"},"swcli instance select")," command."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"self"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"instances")),(0,l.kt)("td",{parentName:"tr",align:null},'Managed instances, including Standalone, Server and Cloud Instances. There must be at least one Standalone Instance named "local" and one or more Server/Cloud Instances. You can log in to a new instance with ',(0,l.kt)("inlineCode",{parentName:"td"},"swcli instance login")," and log out from an instance with ",(0,l.kt)("inlineCode",{parentName:"td"},"swcli instance logout"),"."),(0,l.kt)("td",{parentName:"tr",align:null},"Dict"),(0,l.kt)("td",{parentName:"tr",align:null},'Standalone Instance named "local"'),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"instances.{instance-alias-name}.sw_token")),(0,l.kt)("td",{parentName:"tr",align:null},"Login token for Server/Cloud Instances. It is only effective for Server/Cloud Instances. Subsequent ",(0,l.kt)("inlineCode",{parentName:"td"},"swcli")," operations on Server/Cloud Instances will use this token. Note that tokens have an expiration time, typically set to one month, which can be configured within the Server/Cloud Instance."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Cloud - Yes, Standalone - No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"instances.{instance-alias-name}.type")),(0,l.kt)("td",{parentName:"tr",align:null},'Type of the instance, currently can only be "cloud" or "standalone".'),(0,l.kt)("td",{parentName:"tr",align:null},"Choice","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"instances.{instance-alias-name}.uri")),(0,l.kt)("td",{parentName:"tr",align:null},'For Server/Cloud Instances, the URI is an http/https address. For Standalone Instances, the URI is set to "local".'),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"instances.{instance-alias-name}.user_name")),(0,l.kt)("td",{parentName:"tr",align:null},"User's name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"instances.{instance-alias-name}.current_project")),(0,l.kt)("td",{parentName:"tr",align:null},'Default Project under the current instance. It will be used to fill the "project" field in the URI representation by default. You can set it using the ',(0,l.kt)("inlineCode",{parentName:"td"},"swcli project select")," command."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"instances.{instance-alias-name}.user_role")),(0,l.kt)("td",{parentName:"tr",align:null},"User's role."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"normal"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"instances.{instance-alias-name}.updated_at")),(0,l.kt)("td",{parentName:"tr",align:null},"The last updated time for this instance configuration."),(0,l.kt)("td",{parentName:"tr",align:null},"Time format string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"storage")),(0,l.kt)("td",{parentName:"tr",align:null},"Settings related to local storage."),(0,l.kt)("td",{parentName:"tr",align:null},"Dict"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"storage.root")),(0,l.kt)("td",{parentName:"tr",align:null},"The root directory for Standalone Instance's local storage. Typically, if there is insufficient space in the home directory and you manually move data files to another location, you can modify this field."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"~/.starwhale")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"version")),(0,l.kt)("td",{parentName:"tr",align:null},"The version of config.yaml, currently only supports 2.0."),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"2.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("h3",{id:"link_auths-definition"},"link_auths definition"),(0,l.kt)("p",null,"You could put ",(0,l.kt)("inlineCode",{parentName:"p"},"starwhale.Link")," to your assets while the URI in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Link")," could be whatever(only s3 like or http is implemented) you need, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"s3://10.131.0.1:9000/users/path"),". However, ",(0,l.kt)("inlineCode",{parentName:"p"},"Link"),"s may need to be authed, you could config the auth info in ",(0,l.kt)("inlineCode",{parentName:"p"},"link_auths"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"link_auths:\n  - type: s3\n    ak: starwhale\n    bucket: users\n    region: local\n    connect_timeout: 10.0\n    endpoint: http://10.131.0.1:9000\n    read_timeout: 100.0\n    sk: starwhale\n")),(0,l.kt)("p",null,"Items in ",(0,l.kt)("inlineCode",{parentName:"p"},"link_auths")," will match the uri in ",(0,l.kt)("inlineCode",{parentName:"p"},"Link"),"s automatically. ",(0,l.kt)("inlineCode",{parentName:"p"},"s3")," typed link_auth matching ",(0,l.kt)("inlineCode",{parentName:"p"},"Link"),"s by looking up ",(0,l.kt)("inlineCode",{parentName:"p"},"bucket")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"endpoint"),"."))}c.isMDXComponent=!0}}]);