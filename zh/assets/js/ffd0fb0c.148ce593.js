"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[9075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),k=s(n),m=l,d=k["".concat(i,".").concat(m)]||k[m]||p[m]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=k;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},37490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=n(83117),l=(n(67294),n(3905));const a={title:"\u57fa\u4e8e Virtual Kubelet \u7ba1\u7406\u65e0\u6cd5\u4f5c\u4e3aK8s\u8282\u70b9\u7684\u8bbe\u5907"},o=void 0,u={unversionedId:"evaluation/heterogeneous/virtual-node",id:"version-0.6.6/evaluation/heterogeneous/virtual-node",title:"\u57fa\u4e8e Virtual Kubelet \u7ba1\u7406\u65e0\u6cd5\u4f5c\u4e3aK8s\u8282\u70b9\u7684\u8bbe\u5907",description:"\u7b80\u4ecb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-0.6.6/evaluation/heterogeneous/virtual-node.md",sourceDirName:"evaluation/heterogeneous",slug:"/evaluation/heterogeneous/virtual-node",permalink:"/zh/evaluation/heterogeneous/virtual-node",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.6/evaluation/heterogeneous/virtual-node.md",tags:[],version:"0.6.6",frontMatter:{title:"\u57fa\u4e8e Virtual Kubelet \u7ba1\u7406\u65e0\u6cd5\u4f5c\u4e3aK8s\u8282\u70b9\u7684\u8bbe\u5907"},sidebar:"mainSidebar",previous:{title:"\u53ef\u4ee5\u4f5c\u4e3aK8s\u8282\u70b9\u7684\u8bbe\u5907",permalink:"/zh/evaluation/heterogeneous/node-able"},next:{title:"\u6982\u8ff0",permalink:"/zh/reference/swcli/"}},i={},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u5c06\u8bbe\u5907\u52a0\u5165\u96c6\u7fa4",id:"\u5c06\u8bbe\u5907\u52a0\u5165\u96c6\u7fa4",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://virtual-kubelet.io/"},"Virtual Kubelet")," \u662f\u4e00\u4e2a\u5f00\u6e90\u7684\u6846\u67b6, \u53ef\u4ee5\u901a\u8fc7\u6a21\u62df kubelet \u548c K8s \u96c6\u7fa4\u901a\u4fe1\u7684\u65b9\u5f0f\u4f2a\u88c5\u6210\u4e00\u4e2a K8s \u8282\u70b9.\n\u6b64\u65b9\u6848\u88ab\u5404\u4e91\u5382\u5546\u5e7f\u6cdb\u7528\u4e8e serverless \u5bb9\u5668\u96c6\u7fa4\u65b9\u6848, \u6bd4\u5982\u963f\u91cc\u4e91\u7684 ASK, Amazon \u7684 AWS Fargate \u7b49."),(0,l.kt)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,l.kt)("p",null,"virtual kubelet \u6846\u67b6\u5c06 kubelet \u5bf9\u4e8e Node \u7684\u76f8\u5173\u63a5\u53e3\u8fdb\u884c\u5b9e\u73b0, \u53ea\u9700\u8981\u7b80\u5355\u7684\u914d\u7f6e\u5373\u53ef\u6a21\u62df\u4e00\u4e2a\u8282\u70b9.\n\u6211\u4eec\u53ea\u9700\u8981\u5b9e\u73b0 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/virtual-kubelet/virtual-kubelet/blob/704b01eac6bdf0472b9c93173e4cb64bd6e53e94/node/podcontroller.go#L47"},"PodLifecycleHandler")," \u63a5\u53e3\u5373\u53ef\u652f\u6301:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa, \u66f4\u65b0, \u5220\u9664 Pod"),(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6 Pod \u72b6\u6001"),(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6 Container \u65e5\u5fd7")),(0,l.kt)("h2",{id:"\u5c06\u8bbe\u5907\u52a0\u5165\u96c6\u7fa4"},"\u5c06\u8bbe\u5907\u52a0\u5165\u96c6\u7fa4"),(0,l.kt)("p",null,"\u5982\u679c\u6211\u4eec\u7684\u8bbe\u5907\u7531\u4e8e\u8d44\u6e90\u9650\u5236\u7b49\u60c5\u51b5\u65e0\u6cd5\u4f5c\u4e3a K8s \u7684\u4e00\u4e2a\u8282\u70b9\u8fdb\u884c\u670d\u52a1, \u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 virtual kubelet \u6a21\u62df\u4e00\u4e2a\u4ee3\u7406\u8282\u70b9\u7684\u65b9\u5f0f\u5bf9\u8fd9\u4e9b\u8bbe\u5907\u8fdb\u884c\u7ba1\u7406,\nStarwhale Controller \u548c\u8bbe\u5907\u7684\u63a7\u5236\u6d41\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502 Starwhale Controller \u251c\u2500\u2500\u2500\u2500\u2500\u25ba\u2502 K8s API Server \u251c\u2500\u2500\u2500\u2500\u25ba\u2502 virtual kubelet \u251c\u2500\u2500\u2500\u2500\u25ba\u2502 Our device \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,l.kt)("p",null,"virtual kubelet \u5c06 Starwhale Controller \u4e0b\u53d1\u4e0b\u6765\u7684 Pod \u7f16\u6392\u4fe1\u606f\u8f6c\u5316\u4e3a\u5bf9\u8bbe\u5907\u7684\u63a7\u5236\u884c\u4e3a, \u6bd4\u5982 ssh \u5230\u8bbe\u5907\u4e0a\u6267\u884c\u4e00\u6bb5\u547d\u4ee4, \u6216\u8005\u901a\u8fc7 USB \u6216\u8005\u4e32\u53e3\u53d1\u9001\u4e00\u6bb5\u6d88\u606f\u7b49.  "),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4f7f\u7528 virtual kubelet \u7684\u65b9\u5f0f\u6765\u5bf9\u4e00\u4e2a\u672a\u52a0\u5165\u96c6\u7fa4\u7684\u53ef\u4ee5 ssh \u7684\u8bbe\u5907\u8fdb\u884c\u63a7\u5236\u7684\u793a\u4f8b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u51c6\u5907\u8bc1\u4e66")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u6587\u4ef6 vklet.csr, \u5185\u5bb9\u5982\u4e0b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"[req]\nreq_extensions = v3_req\ndistinguished_name = req_distinguished_name\n[req_distinguished_name]\n[v3_req]\nbasicConstraints = CA:FALSE\nkeyUsage = digitalSignature, keyEncipherment\nextendedKeyUsage = serverAuth\nsubjectAltName = @alt_names\n[alt_names]\nIP = 1.2.3.4\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210\u8bc1\u4e66")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"openssl genrsa -out vklet-key.pem 2048\nopenssl req -new -key vklet-key.pem -out vklet.csr -subj '/CN=system:node:1.2.3.4;/C=US/O=system:nodes' -config ./csr.conf \n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u63d0\u4ea4\u8bc1\u4e66")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'cat vklet.csr| base64 | tr -d "\\n" # \u8f93\u51fa\u5185\u5bb9\u4f5c\u4e3a csr.yaml \u6587\u4ef6\u4e2d spec.request \u7684\u5185\u5bb9\n')),(0,l.kt)("p",null,"csr.yaml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: certificates.k8s.io/v1\nkind: CertificateSigningRequest\nmetadata:\n  name: vklet\nspec:\n  request: ******************************************************\n  signerName: kubernetes.io/kube-apiserver-client\n  expirationSeconds: 1086400\n  usages:\n  - client auth\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"}," kubectl apply -f csr.yaml\n kubectl certificate approve vklet\n kubectl get csr vklet -o jsonpath='{.status.certificate}'| base64 -d > vklet-cert.pem\n")),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5f97\u5230\u4e86 vklet-cert.pem"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f16\u8bd1 virtual kubelet")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/virtual-kubelet/virtual-kubelet\ncd virtual-kubelet && make build\n")),(0,l.kt)("p",null,"\u521b\u5efa\u8282\u70b9\u7684\u914d\u7f6e\u6587\u4ef6 mock.json"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "virtual-kubelet":\n    {\n        "cpu": "100",\n        "memory": "100Gi",\n        "pods": "100"\n    }\n}\n')),(0,l.kt)("p",null,"\u542f\u52a8 virtual kubelet"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"export APISERVER_CERT_LOCATION=/path/to/vklet-cert.pem\nexport APISERVER_KEY_LOCATION=/path/to/vklet-key.pem\nexport KUBECONFIG=/path/to/kubeconfig\n\nvirtual-kubelet --provider mock --provider-config /path/to/mock.json\n")),(0,l.kt)("p",null,"\u81f3\u6b64, \u6211\u4eec\u4f7f\u7528 virtual kubelet \u6a21\u62df\u4e86\u4e00\u4e2a 100 core + 100G \u5185\u5b58\u7684\u8282\u70b9."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u589e\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"PodLifecycleHandler")," \u7684\u5b9e\u73b0, \u5c06 Pod \u7f16\u6392\u4e2d\u7684\u91cd\u8981\u4fe1\u606f\u8f6c\u5316\u4e3a ssh \u547d\u4ee4\u6267\u884c, \u5e76\u4e14\u6536\u96c6\u65e5\u5fd7\u5f85 Starwhale Controller \u6536\u96c6")),(0,l.kt)("p",null,"\u5177\u4f53\u5b9e\u73b0\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jialeicui/remote-provider/tree/master/cmd/virtual-kubelet/internal/provider/mock"},"ssh executor"),"\u3002"))}p.isMDXComponent=!0}}]);