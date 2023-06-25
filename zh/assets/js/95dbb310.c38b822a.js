"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[14726],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),g=n,d=u["".concat(c,".").concat(g)]||u[g]||l[g]||p;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,i=new Array(p);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<p;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81458:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var r=a(83117),n=(a(67294),a(3905));const p={title:"Project in Starwhale"},i=void 0,o={unversionedId:"instances/server/project",id:"version-0.4.6/instances/server/project",title:"Project in Starwhale",description:"Project type",source:"@site/versioned_docs/version-0.4.6/instances/server/project.md",sourceDirName:"instances/server",slug:"/instances/server/project",permalink:"/zh/docs/0.4.6/instances/server/project",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.4.6/instances/server/project.md",tags:[],version:"0.4.6",frontMatter:{title:"Project in Starwhale"}},c={},s=[{value:"Project type",id:"project-type",level:2},{value:"Create a project",id:"create-a-project",level:2},{value:"Edit a project",id:"edit-a-project",level:2},{value:"Edit name",id:"edit-name",level:3},{value:"Edit privacy",id:"edit-privacy",level:3},{value:"Edit description",id:"edit-description",level:3},{value:"Delete a project",id:"delete-a-project",level:2},{value:"Manage project member",id:"manage-project-member",level:2},{value:"Add a member to the project",id:"add-a-member-to-the-project",level:3},{value:"Remove a member",id:"remove-a-member",level:3}],m={toc:s};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"project-type"},"Project type"),(0,n.kt)("p",null,"There are two types of projects\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Public"),": Visible to anyone. Everyone on the internet can find and see public projects.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Private"),": Visible to users specified in the project member settings. Private projects can only be seen by project owners and project members. The project owner can manage access in the project setting of Manage Member."))),(0,n.kt)("h2",{id:"create-a-project"},"Create a project"),(0,n.kt)("p",null,"1 Sign in to Starwhale, click ",(0,n.kt)("strong",{parentName:"p"},"Create Project"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234524179-43ed6154-7379-4cae-8be4-471f95fd7c14.PNG",alt:"creat"})),(0,n.kt)("p",null,"2 Type a name for the project."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234500891-50baad51-1b52-4164-91e2-b14a2fec6b7a.png",alt:"image"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Avoid duplicate project names.For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://doc.starwhale.ai/docs/concepts/names"},"Names in Starwhale"))),(0,n.kt)("p",null,"3 Select project visibility to decide who can find and see the project."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234525424-e83b40e2-81f1-4ca0-bcac-85996980de70.png",alt:"image"})),(0,n.kt)("p",null,"4 Type a description. It is optional."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234525839-60012e61-d0a3-40f2-afb6-7133265be678.png",alt:"image"})),(0,n.kt)("p",null,"5 To finish, click ",(0,n.kt)("strong",{parentName:"p"},"Submit"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234525918-6085832b-041c-41ba-9d8d-3293a38d4eda.png",alt:"image"})),(0,n.kt)("h2",{id:"edit-a-project"},"Edit a project"),(0,n.kt)("p",null,"The name, privacy and description  of a project can be edited."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Users with the project owner or maintainer role can edit a project. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://doc.starwhale.ai/docs/concepts/roles-permissions"},"Roles and permissions"))),(0,n.kt)("h3",{id:"edit-name"},"Edit name"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are on the project list page:"),(0,n.kt)("p",{parentName:"li"},"1 Hover your mouse over the project you want to edit, then click the ",(0,n.kt)("strong",{parentName:"p"},"Edit")," button."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234529708-6e0cb61a-c0a7-47ee-bd75-faa37e3de0f7.png",alt:"image"})),(0,n.kt)("p",{parentName:"li"},"2 Enter a new name for the project."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234529767-7c8e6e3d-2593-46b3-b7fa-783f35c3fc3a.png",alt:"image"})),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Avoid duplicate project names. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://doc.starwhale.ai/docs/concepts/names"},"Names in Starwhale"))),(0,n.kt)("p",{parentName:"li"},"3 Click ",(0,n.kt)("strong",{parentName:"p"},"Submit")," to save changes."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234529893-b024a6dd-1538-4f91-a972-c5e3985836e8.png",alt:"image"})),(0,n.kt)("p",{parentName:"li"},"4 If you're editing multiple projects, repeat steps 1 through 3.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are on a specific project:"),(0,n.kt)("p",{parentName:"li"},"1 Select ",(0,n.kt)("strong",{parentName:"p"},"Overview")," on the left navigation, and click ",(0,n.kt)("strong",{parentName:"p"},"Edit"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234533083-6abdef2a-d6f1-41d2-861b-9f4c908b49a5.png",alt:"image"})),(0,n.kt)("p",{parentName:"li"},"2 Enter a new name for the project."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234533339-dbd923f1-9ec1-4377-86f4-20aedf737c89.png",alt:"image"})),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Avoid duplicate project names. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://doc.starwhale.ai/docs/concepts/names"},"Names in Starwhale"))),(0,n.kt)("p",{parentName:"li"},"3 Click ",(0,n.kt)("strong",{parentName:"p"},"Submit")," to save changes."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234533711-4cb6c94b-bfab-4578-9ba6-42bcbeebe5f7.png",alt:"image"})))),(0,n.kt)("h3",{id:"edit-privacy"},"Edit privacy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are on the project list page:"),(0,n.kt)("p",{parentName:"li"},"1 Hover your mouse over the project you want to edit, then click the ",(0,n.kt)("strong",{parentName:"p"},"Edit")," button."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234533934-c2233d95-034b-46dc-99d3-d636b9c5d69f.png",alt:"image"})),(0,n.kt)("p",{parentName:"li"},"2 Click the Public or Private by your command. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/new/main/docs/docs/instances/server#project"},"Project types"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234534713-b565fb4f-24e4-4f8d-8f33-eb75f9b20637.png",alt:"image"})),(0,n.kt)("p",{parentName:"li"},"3 Click ",(0,n.kt)("strong",{parentName:"p"},"Submit")," to save changes."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234534833-4d3b9f03-dbcc-41d2-a7cd-646cc4febf63.png",alt:"image"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are on a specific project"),(0,n.kt)("p",{parentName:"li"},"1 Select ",(0,n.kt)("strong",{parentName:"p"},"Overview")," on the left navigation, and click ",(0,n.kt)("strong",{parentName:"p"},"Edit"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234535207-3da5c9f9-e369-429c-80a7-3baeb78fea94.png",alt:"image"})),(0,n.kt)("p",{parentName:"li"},"2 Click the Public or Private by your command. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/star-whale/starwhale/new/main/docs/docs/instances/server#project"},"Project types"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234535597-e9b43c84-973b-4c20-93a7-49a910d3556d.png",alt:"image"})),(0,n.kt)("p",{parentName:"li"},"3 Click ",(0,n.kt)("strong",{parentName:"p"},"Submit")," to save changes."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234535726-e512fb49-7581-44e4-bb96-2a807b614313.png",alt:"image"})))),(0,n.kt)("h3",{id:"edit-description"},"Edit description"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are on the project list page:"),(0,n.kt)("p",{parentName:"li"},"1 Hover your mouse over the project you want to edit, then click the ",(0,n.kt)("strong",{parentName:"p"},"Edit")," button."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234536039-91af427a-d598-41f9-ba02-f41a6dcdfb78.png",alt:"image"})),(0,n.kt)("p",{parentName:"li"},"2 Enter any description you want to describe the project."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234536251-7bb5b9a9-8b44-41f6-b4f0-fb44afa931be.png",alt:"image"})),(0,n.kt)("p",{parentName:"li"},"3 Click ",(0,n.kt)("strong",{parentName:"p"},"Submit")," to save changes."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234536372-760fffcd-9c85-413f-a4dd-f6708b65e6ab.png",alt:"image"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are on a specific project"),(0,n.kt)("p",{parentName:"li"},"1 Select Overview on the left navigation, and click ",(0,n.kt)("strong",{parentName:"p"},"Edit"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234536611-aed1e46e-ef90-4c03-887d-9354df09c300.png",alt:"image"})),(0,n.kt)("p",{parentName:"li"},"2 Enter any description you want to describe the project."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234536766-149cf0d1-2c0c-4fdf-89b0-83fc122131a5.png",alt:"image"})),(0,n.kt)("p",{parentName:"li"},"3 Click ",(0,n.kt)("strong",{parentName:"p"},"Submit")," to save changes."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234536876-30a7ca20-f9b2-40a4-85a9-f12829aed4d6.png",alt:"image"})))),(0,n.kt)("h2",{id:"delete-a-project"},"Delete a project"),(0,n.kt)("p",null,"1 Hover your mouse over the project you want to delete, then click the ",(0,n.kt)("strong",{parentName:"p"},"Delete")," button."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234537210-73ef26df-ffdb-4e53-bafa-c1a5b8b04dc5.png",alt:"image"})),(0,n.kt)("p",null,"2 If you are sure to delete, type the exact name of the project and then click ",(0,n.kt)("strong",{parentName:"p"},"Confirm")," to delete the project."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234537332-410aee89-6324-4fa1-8d6a-882d2ac20cd7.png",alt:"image"})),(0,n.kt)("p",null,":::Important:\nWhen you delete a project, all the models, datasets, evaluations and runtimes belonging to the project will also be deleted and can not be restored. Be careful about the action.\n:::"),(0,n.kt)("h2",{id:"manage-project-member"},"Manage project member"),(0,n.kt)("p",null,"Only users with the admin role can assign people to the project. The project owner defaulted to having the project owner role."),(0,n.kt)("h3",{id:"add-a-member-to-the-project"},"Add a member to the project"),(0,n.kt)("p",null,"1 On the project list page or overview tab, click the ",(0,n.kt)("strong",{parentName:"p"},"Manage Member")," button, then ",(0,n.kt)("strong",{parentName:"p"},"Add Member"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234537971-e2578085-f83c-48a5-b82f-50e57f7efb95.png",alt:"image"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234538048-d361a268-e33d-45c0-bc88-2527b04712dd.png",alt:"image"})),(0,n.kt)("p",null,"2 Type the username you want to add to the project, then click a name in the list of matches."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234538143-f5423d13-3255-42cd-89f8-723fe6281222.png",alt:"image"})),(0,n.kt)("p",null,"3 Select a project role for the member from the drop-down menu.For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://doc.starwhale.ai/docs/concepts/roles-permissions"},"Roles and permissions")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234538239-bd9cf299-0861-4579-a30a-adbe5d9a18b9.png",alt:"image"})),(0,n.kt)("p",null,"4 To finish, click ",(0,n.kt)("strong",{parentName:"p"},"Submit"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234538410-98212746-005c-4ba9-950a-3b2ee137e210.png",alt:"image"})),(0,n.kt)("h3",{id:"remove-a-member"},"Remove a member"),(0,n.kt)("p",null,"1 On the project list page or project overview tab, click the ",(0,n.kt)("strong",{parentName:"p"},"Manage Member")," button."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234538761-4de0b42b-3ebe-4c6e-9b2a-585665d003e7.png",alt:"image"})),(0,n.kt)("p",null,"2 Find the username you want to remove in the search box, click ",(0,n.kt)("strong",{parentName:"p"},"Remove"),", then ",(0,n.kt)("strong",{parentName:"p"},"Yes"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/101299635/234538825-c29efbe8-7b17-47d1-bcea-9bc53b145b21.png",alt:"image"})))}l.isMDXComponent=!0}}]);