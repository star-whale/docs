"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[6603],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96496:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const l={title:"Contribute to Starwhale"},i=void 0,o={unversionedId:"community/contribute",id:"version-0.4.4/community/contribute",title:"Contribute to Starwhale",description:"Getting Involved/Contributing",source:"@site/versioned_docs/version-0.4.4/community/contribute.md",sourceDirName:"community",slug:"/community/contribute",permalink:"/docs/0.4.4/community/contribute",draft:!1,editUrl:"https://github.com/star-whale/starwhale/tree/main/docs/versioned_docs/version-0.4.4/community/contribute.md",tags:[],version:"0.4.4",frontMatter:{title:"Contribute to Starwhale"},sidebar:"mainSidebar",previous:{title:"Other SDK",permalink:"/docs/0.4.4/reference/sdk/other"}},s={},p=[{value:"Getting Involved/Contributing",id:"getting-involvedcontributing",level:2},{value:"Starwhale Resources",id:"starwhale-resources",level:2},{value:"Code Structure",id:"code-structure",level:2},{value:"Fork and clone the repository",id:"fork-and-clone-the-repository",level:2},{value:"Development environment for Standalone Instance",id:"development-environment-for-standalone-instance",level:2},{value:"Standalone development environment prerequisites",id:"standalone-development-environment-prerequisites",level:3},{value:"Building from source code",id:"building-from-source-code",level:3},{value:"Modifying the code",id:"modifying-the-code",level:3},{value:"Lint and Test",id:"lint-and-test",level:3},{value:"Development environment for Cloud Instance",id:"development-environment-for-cloud-instance",level:2},{value:"Development environment for Console",id:"development-environment-for-console",level:3},{value:"Development environment for Server",id:"development-environment-for-server",level:3},{value:"Server development environment prerequisites",id:"server-development-environment-prerequisites",level:4},{value:"Modify the code and add unit tests",id:"modify-the-code-and-add-unit-tests",level:4},{value:"Execute code check and run unit tests",id:"execute-code-check-and-run-unit-tests",level:4},{value:"Deploy the server at local machine",id:"deploy-the-server-at-local-machine",level:4}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getting-involvedcontributing"},"Getting Involved/Contributing"),(0,r.kt)("p",null,"We welcome and encourage all contributions to Starwhale, including and not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Describe the problems encountered during use."),(0,r.kt)("li",{parentName:"ul"},"Submit feature request."),(0,r.kt)("li",{parentName:"ul"},"Discuss in Slack and Github Issues."),(0,r.kt)("li",{parentName:"ul"},"Code Review."),(0,r.kt)("li",{parentName:"ul"},"Improve docs, tutorials and examples."),(0,r.kt)("li",{parentName:"ul"},"Fix Bug."),(0,r.kt)("li",{parentName:"ul"},"Add Test Case."),(0,r.kt)("li",{parentName:"ul"},"Code readability and code comments to import readability."),(0,r.kt)("li",{parentName:"ul"},"Develop new features."),(0,r.kt)("li",{parentName:"ul"},"Write enhancement proposal.")),(0,r.kt)("p",null,"You can get involved, get updates and contact Starwhale developers in the following ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://starwhale.slack.com/"},"Slack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/issues"},"Github Issues")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/starwhaleai"},"Twitter")),(0,r.kt)("li",{parentName:"ul"},"Email: ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("a",{parentName:"em",href:"mailto:developer@starwhale.ai"},"developer@starwhale.ai")))),(0,r.kt)("h2",{id:"starwhale-resources"},"Starwhale Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://starwhale.ai"},"Homepage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.starwhale.cn"},"Starwhale Cloud")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://doc.starwhale.ai"},"Official docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale"},"Github Repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://pypi.org/project/starwhale/"},"Python Package")),(0,r.kt)("li",{parentName:"ul"},"Docker Image\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/u/starwhaleai"},"Docker Hub"),"\uff0c",(0,r.kt)("a",{parentName:"li",href:"https://github.com/orgs/star-whale/packages"},"ghcr.io")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://artifacthub.io/packages/helm/starwhale/starwhale"},"Helm Charts"))),(0,r.kt)("h2",{id:"code-structure"},"Code Structure"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/client"},"client"),": swcli and Python SDK with Pure Python3, which includes all Standalone Instance features.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/client/starwhale/api"},"api"),": Python SDK."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/client/starwhale/cli"},"cli"),": Command Line Interface entrypoint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/client/starwhale/base"},"base"),": Python base abstract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/client/starwhale/core"},"core"),": Starwhale core concepts which includes Dataset,Model,Runtime,Project, job and Evaluation, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/client/starwhale/utils"},"utils"),": Python utilities lib."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/console"},"console"),": frontend with React + TypeScript."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/server"},"server"),"\uff1aStarwhale Controller with java, which includes all Starwhale Cloud Instance backend apis."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/docker"},"docker"),"\uff1aHelm Charts, dockerfile."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/docs"},"docs"),"\uff1aStarwhale official docs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/example"},"example"),"\uff1aExample code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/star-whale/starwhale/tree/main/scripts"},"scripts"),"\uff1aBash and Python scripts for E2E testing and software releases, etc.")),(0,r.kt)("h2",{id:"fork-and-clone-the-repository"},"Fork and clone the repository"),(0,r.kt)("p",null,"You will need to fork the code of Starwhale repository and clone it to your local machine."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fork Starwhale repository: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/fork"},"Fork Starwhale Github Repo"),",For more usage details, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"Fork a repo"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install Git-LFS:",(0,r.kt)("a",{parentName:"p",href:"https://github.com/git-lfs/git-lfs/blob/main/INSTALLING.md#installing-packages"},"Git-LFS")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," git lfs install\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clone code to local machine"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/${your username}/starwhale.git\n")))),(0,r.kt)("h2",{id:"development-environment-for-standalone-instance"},"Development environment for Standalone Instance"),(0,r.kt)("p",null,"Standalone Instance is written in Python3. When you want to modify swcli and sdk, you need to build the development environment."),(0,r.kt)("h3",{id:"standalone-development-environment-prerequisites"},"Standalone development environment prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OS: Linux or macOS."),(0,r.kt)("li",{parentName:"ul"},"Python: 3.7~3.10."),(0,r.kt)("li",{parentName:"ul"},"Docker: >=19.03(optional)."),(0,r.kt)("li",{parentName:"ul"},"Python isolated env tools\uff1aPython venv, virtualenv or conda, etc.")),(0,r.kt)("h3",{id:"building-from-source-code"},"Building from source code"),(0,r.kt)("p",null,"Based on the previous step, clone to the local directory: starwhale, and enter the client subdirectory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd starwhale/client\n")),(0,r.kt)("p",null,"Create an isolated python environment with conda:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"conda create -n starwhale-dev python=3.8 -y\nconda activate starwhale-dev\n")),(0,r.kt)("p",null,"Install client package and python dependencies into the starwhale-dev environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make install-sw\nmake install-dev-req\n")),(0,r.kt)("p",null,"Validate with the ",(0,r.kt)("inlineCode",{parentName:"p"},"swcli --version")," command. In the development environment, the version is ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.dev0"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f swcli --version\nswcli, version 0.0.0.dev0\n\n\u276f swcli --version\n/home/username/anaconda3/envs/starwhale-dev/bin/swcli\n")),(0,r.kt)("h3",{id:"modifying-the-code"},"Modifying the code"),(0,r.kt)("p",null,"When you modify the code, you need not to install python package(run ",(0,r.kt)("inlineCode",{parentName:"p"},"make install-sw")," command) again. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/blob/main/.editorconfig"},".editorconfig")," will be imported into the most IDE and code editors which helps maintain consistent coding styles for multiple developers."),(0,r.kt)("h3",{id:"lint-and-test"},"Lint and Test"),(0,r.kt)("p",null,"Run unit test, E2E test, mypy lint, flake lint and isort check in the ",(0,r.kt)("inlineCode",{parentName:"p"},"starwhale")," directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"make client-all-check\n")),(0,r.kt)("h2",{id:"development-environment-for-cloud-instance"},"Development environment for Cloud Instance"),(0,r.kt)("p",null,"Cloud Instance is written in Java(backend) and React+TypeScript(frontend)."),(0,r.kt)("h3",{id:"development-environment-for-console"},"Development environment for Console"),(0,r.kt)("h3",{id:"development-environment-for-server"},"Development environment for Server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Language: Java"),(0,r.kt)("li",{parentName:"ul"},"Build tool: Maven"),(0,r.kt)("li",{parentName:"ul"},"Development framework: Spring Boot+Mybatis"),(0,r.kt)("li",{parentName:"ul"},"Unit test framework\uff1aJunit5",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mockito used for mocking"),(0,r.kt)("li",{parentName:"ul"},"Hamcrest used for assertion"),(0,r.kt)("li",{parentName:"ul"},"Testcontainers used for providing lightweight, throwaway instances of common databases, Selenium web browsers that can run in a Docker container."))),(0,r.kt)("li",{parentName:"ul"},"Check style tool\uff1ause maven-checkstyle-plugin")),(0,r.kt)("h4",{id:"server-development-environment-prerequisites"},"Server development environment prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OS: Linux, macOS or Windows"),(0,r.kt)("li",{parentName:"ul"},"Docker: >=19.03"),(0,r.kt)("li",{parentName:"ul"},"JDK: >=11"),(0,r.kt)("li",{parentName:"ul"},"Maven: >=3.8.1"),(0,r.kt)("li",{parentName:"ul"},"Mysql: >=8.0.29"),(0,r.kt)("li",{parentName:"ul"},"Minio"),(0,r.kt)("li",{parentName:"ul"},"Kubernetes cluster/Minikube(If you don't have a k8s cluster, you can use Minikube as an alternative for development and debugging)")),(0,r.kt)("h4",{id:"modify-the-code-and-add-unit-tests"},"Modify the code and add unit tests"),(0,r.kt)("p",null,"Now you can enter the corresponding module to modify and adjust the code on the server side. The main business code directory is src/main/java, and the unit test directory is src/test/java."),(0,r.kt)("h4",{id:"execute-code-check-and-run-unit-tests"},"Execute code check and run unit tests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd starwhale/server\nmvn clean test\n")),(0,r.kt)("h4",{id:"deploy-the-server-at-local-machine"},"Deploy the server at local machine"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dependent services that need to be deployed"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Minikube\uff08Optional. Minikube can be used when there is no k8s cluster, there is the installation doc: ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube"),"\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"minikube start\nminikube addons enable ingress\nminikube addons enable ingress-dns\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mysql"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name sw-mysql -d \\\n-p 3306:3306 \\\n-e MYSQL_ROOT_PASSWORD=starwhale \\\n-e MYSQL_USER=starwhale \\\n-e MYSQL_PASSWORD=starwhale \\\n-e MYSQL_DATABASE=starwhale \\\nmysql:latest\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Minio"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --name minio -d \\\n-p 9000:9000  --publish 9001:9001 \\\n-e MINIO_DEFAULT_BUCKETS=\'starwhale\' \\\n-e MINIO_ROOT_USER="minioadmin" \\\n-e MINIO_ROOT_PASSWORD="minioadmin" \\\nbitnami/minio:latest\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Package server program"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"If you need to deploy the front-end at the same time when deploying the server, you can execute the build command of the front-end part first, and then execute 'mvn clean package', and the compiled front-end files will be automatically packaged.")),(0,r.kt)("p",{parentName:"li"},"Use the following command to package the program"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  cd starwhale/server\n  mvn clean package\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Specify the environment required for server startup"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Minio env\nexport SW_STORAGE_ENDPOINT=http://${Minio IP,default is:27.0.0.1}:9000\nexport SW_STORAGE_BUCKET=${Minio bucket,default is:starwhale}\nexport SW_STORAGE_ACCESSKEY=${Minio accessKey,default is:starwhale}\nexport SW_STORAGE_SECRETKEY=${Minio secretKey,default is:starwhale}\nexport SW_STORAGE_REGION=${Minio region,default is:local}\n# kubernetes env\nexport KUBECONFIG=${the '.kube' file path}\\.kube\\config\n\nexport SW_INSTANCE_URI=http://${Server IP}:8082\nexport SW_METADATA_STORAGE_IP=${Mysql IP,default: 127.0.0.1}\nexport SW_METADATA_STORAGE_PORT=${Mysql port,default: 3306}\nexport SW_METADATA_STORAGE_DB=${Mysql dbname,default: starwhale}\nexport SW_METADATA_STORAGE_USER=${Mysql user,default: starwhale}\nexport SW_METADATA_STORAGE_PASSWORD=${user password,default: starwhale}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy server service"),(0,r.kt)("p",{parentName:"li"},"You can use the IDE or the command to deploy."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar controller/target/starwhale-controller-0.1.0-SNAPSHOT.jar\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Debug"),(0,r.kt)("p",{parentName:"li"},"there are two ways to debug the modified function:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use swagger-ui for interface debugging, visit /swagger-ui/index.html to find the corresponding api"),(0,r.kt)("li",{parentName:"ul"},"Debug the corresponding function directly in the ui (provided that the front-end code has been built in advance according to the instructions when packaging)")))))}u.isMDXComponent=!0}}]);