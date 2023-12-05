"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[3992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(83117),a=(n(67294),n(3905));const l={title:"Virtual Kubelet as Kubernetes nodes"},o=void 0,i={unversionedId:"evaluation/heterogeneous/virtual-node",id:"version-0.6.6/evaluation/heterogeneous/virtual-node",title:"Virtual Kubelet as Kubernetes nodes",description:"Introduction",source:"@site/versioned_docs/version-0.6.6/evaluation/heterogeneous/virtual-node.md",sourceDirName:"evaluation/heterogeneous",slug:"/evaluation/heterogeneous/virtual-node",permalink:"/evaluation/heterogeneous/virtual-node",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.6/evaluation/heterogeneous/virtual-node.md",tags:[],version:"0.6.6",frontMatter:{title:"Virtual Kubelet as Kubernetes nodes"},sidebar:"mainSidebar",previous:{title:"Devices as Kubernetes nodes",permalink:"/evaluation/heterogeneous/node-able"},next:{title:"Overview",permalink:"/reference/swcli/"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Principles",id:"principles",level:2},{value:"Adding Devices to the Cluster",id:"adding-devices-to-the-cluster",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://virtual-kubelet.io/"},"Virtual Kubelet")," is an open source framework that can simulate a K8s node by mimicking the communication between kubelet and the K8s cluster."),(0,a.kt)("p",null,"This solution is widely used by major cloud vendors for serverless container cluster solutions, such as Alibaba Cloud's ASK, Amazon's AWS Fargate, etc."),(0,a.kt)("h2",{id:"principles"},"Principles"),(0,a.kt)("p",null,"The virtual kubelet framework implements the related interfaces of kubelet for Node. With simple configuration, it can simulate a node."),(0,a.kt)("p",null,"We only need to implement the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/virtual-kubelet/virtual-kubelet/blob/704b01eac6bdf0472b9c93173e4cb64bd6e53e94/node/podcontroller.go#L47"},"PodLifecycleHandler")," interface to support:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create, update, delete Pod"),(0,a.kt)("li",{parentName:"ul"},"Get Pod status"),(0,a.kt)("li",{parentName:"ul"},"Get Container logs")),(0,a.kt)("h2",{id:"adding-devices-to-the-cluster"},"Adding Devices to the Cluster"),(0,a.kt)("p",null,"If our device cannot serve as a K8s node due to resource constraints or other situations, we can manage these devices by using virtual kubelet to simulate a proxy node."),(0,a.kt)("p",null,"The control flow between Starwhale Controller and the device is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\n \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510      \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510     \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502 Starwhale Controller \u251c\u2500\u2500\u2500\u2500\u2500\u25ba\u2502 K8s API Server \u251c\u2500\u2500\u2500\u2500\u25ba\u2502 virtual kubelet \u251c\u2500\u2500\u2500\u2500\u25ba\u2502 Our device \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518      \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n")),(0,a.kt)("p",null,"Virtual kubelet converts the Pod orchestration information sent by Starwhale Controller into control behaviors for the device, such as executing a command via ssh on the device, or sending a message via USB or serial port."),(0,a.kt)("p",null,"Below is an example of using virtual kubelet to control a device not joined to the cluster that is SSH-enabled:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Prepare certificates")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create file vklet.csr with the following content:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[req]\nreq_extensions = v3_req\ndistinguished_name = req_distinguished_name\n\n[req_distinguished_name]\n\n[v3_req]\nbasicConstraints = CA:FALSE\nkeyUsage = digitalSignature, keyEncipherment\nextendedKeyUsage = serverAuth\nsubjectAltName = @alt_names\n\n[alt_names]\nIP = 1.2.3.4\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Generate the certificate:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"openssl genrsa -out vklet-key.pem 2048\nopenssl req -new -key vklet-key.pem -out vklet.csr -subj '/CN=system:node:1.2.3.4;/C=US/O=system:nodes' -config ./csr.conf\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Submit the certificate:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'cat vklet.csr| base64 | tr -d "\\n" # output as content of spec.request in csr.yaml\n')),(0,a.kt)("p",null,"csr.yaml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: certificates.k8s.io/v1\nkind: CertificateSigningRequest\nmetadata:\n  name: vklet\nspec:\n  request: ******************\n  signerName: kubernetes.io/kube-apiserver-client\n  expirationSeconds: 1086400\n  usages:\n    - client auth\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f csr.yaml\nkubectl certificate approve vklet\nkubectl get csr vklet -o jsonpath='{.status.certificate}'| base64 -d > vklet-cert.pem\n")),(0,a.kt)("p",null,"Now we have vklet-cert.pem."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Compile virtual kubelet:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/virtual-kubelet/virtual-kubelet\ncd virtual-kubelet && make build\n")),(0,a.kt)("p",null,"Create the node configuration file mock.json:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "virtual-kubelet":\n  {\n    "cpu": "100",\n    "memory": "100Gi",\n    "pods": "100"\n  }\n}\n')),(0,a.kt)("p",null,"Start virtual kubelet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"export APISERVER_CERT_LOCATION=/path/to/vklet-cert.pem\nexport APISERVER_KEY_LOCATION=/path/to/vklet-key.pem\nexport KUBECONFIG=/path/to/kubeconfig\nvirtual-kubelet --provider mock --provider-config /path/to/mock.json\n")),(0,a.kt)("p",null,"Now we have simulated a node with 100 cores + 100GB memory using virtual kubelet."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"PodLifecycleHandler")," implementation to convert important information in Pod orchestration into ssh command execution, and collect logs for Starwhale Controller to collect.")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jialeicui/remote-provider/tree/master/cmd/virtual-kubelet/internal/provider/mock"},"ssh executor")," for a concrete implementation."))}p.isMDXComponent=!0}}]);