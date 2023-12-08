"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[44230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||n;return r?o.createElement(h,i(i({ref:t},p),{},{components:r})):o.createElement(h,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},63668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=r(83117),a=(r(67294),r(3905));const n={title:"How to Organize and Manage Resources with Starwhale Projects"},i=void 0,l={unversionedId:"server/project",id:"version-0.6.0/server/project",title:"How to Organize and Manage Resources with Starwhale Projects",description:"Project is the basic unit for organizing and managing resources (such as models, datasets, runtime environments, etc.). You can create and manage projects based on your needs. For example, you can create projects by business team, product line, or models. One user can create and participate in one or more projects.",source:"@site/versioned_docs/version-0.6.0/server/project.md",sourceDirName:"server",slug:"/server/project",permalink:"/0.6.0/server/project",draft:!1,editUrl:"https://github.com/star-whale/docs/tree/main/versioned_docs/version-0.6.0/server/project.md",tags:[],version:"0.6.0",frontMatter:{title:"How to Organize and Manage Resources with Starwhale Projects"},sidebar:"mainSidebar",previous:{title:"Controller Admin Settings",permalink:"/0.6.0/server/guides/server_admin"},next:{title:"Starwhale Cloud User Guide",permalink:"/0.6.0/cloud/"}},s={},c=[{value:"Project type",id:"project-type",level:2},{value:"Create a project",id:"create-a-project",level:2},{value:"Edit a project",id:"edit-a-project",level:2},{value:"View a project",id:"view-a-project",level:2},{value:"My projects",id:"my-projects",level:3},{value:"Project sorting",id:"project-sorting",level:3},{value:"Delete a project",id:"delete-a-project",level:2},{value:"Manage project member",id:"manage-project-member",level:2},{value:"Add a member",id:"add-a-member",level:3},{value:"Remove a member",id:"remove-a-member",level:3},{value:"Edit a member&#39;s role",id:"edit-a-members-role",level:3}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Project is the basic unit for organizing and managing resources (such as models, datasets, runtime environments, etc.). You can create and manage projects based on your needs. For example, you can create projects by business team, product line, or models. One user can create and participate in one or more projects."),(0,a.kt)("h2",{id:"project-type"},"Project type"),(0,a.kt)("p",null,"There are two types of projects\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Private project"),": The project (and related resources in the project) is only visible to project members with permission. Project members can view or edit the project (as well as associated resources in the project). For more information on roles, please take a look at ",(0,a.kt)("a",{parentName:"p",href:"roles-permissions"},"Roles and permissions in Starwhale"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Public project"),": The project (and related resources in the project) is visible to all Starwhale users. Project members can view or edit the project (as well as associated resources in the project). For more information on roles, please take a look at ",(0,a.kt)("a",{parentName:"p",href:"roles-permissions"},"Roles and permissions in Starwhale"),"."))),(0,a.kt)("h2",{id:"create-a-project"},"Create a project"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Create")," button in the upper right corner of the project list page;"),(0,a.kt)("li",{parentName:"ol"},"Enter a name for the project. Pay attention to avoiding duplicate names. For more information, please see ",(0,a.kt)("a",{parentName:"li",href:"https://doc.starwhale.ai/docs/concepts/names"},"Names in Starwhale")),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"Project Type"),", which is defaulted to private project and can be selected as public according to needs;"),(0,a.kt)("li",{parentName:"ol"},"Fill in the description content;"),(0,a.kt)("li",{parentName:"ol"},"To finish, Click the ",(0,a.kt)("strong",{parentName:"li"},"Submit")," button.")),(0,a.kt)("h2",{id:"edit-a-project"},"Edit a project"),(0,a.kt)("p",null,"The name, privacy and description  of a project can be edited."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the project list page and find the project that needs to be edited by searching for the project name, then click the ",(0,a.kt)("strong",{parentName:"li"},"Edit Project")," button;"),(0,a.kt)("li",{parentName:"ol"},"Edit the items that need to be edited;"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Submit")," to save the edited content;"),(0,a.kt)("li",{parentName:"ol"},"If you're editing multiple projects, repeat steps 1 through 3.")),(0,a.kt)("h2",{id:"view-a-project"},"View a project"),(0,a.kt)("h3",{id:"my-projects"},"My projects"),(0,a.kt)("p",null,"On the project list page, only my projects are displayed by default. My projects refer to the projects participated in by the current users as project members or project owners."),(0,a.kt)("h3",{id:"project-sorting"},"Project sorting"),(0,a.kt)("p",null,'On the project list page, all projects are supported to be sorted by "Recently visited", "Project creation time from new to old", and "Project creation time from old to new", which can be selected according to your needs.'),(0,a.kt)("h2",{id:"delete-a-project"},"Delete a project"),(0,a.kt)("p",null,"Once a project is deleted, all related resources (such as datasets, models, runtimes, evaluations, etc.) will be deleted and cannot be restored."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enter the project list page and search for the project name to find the project that needs to be deleted. Hover your mouse over the project you want to delete, then click the ",(0,a.kt)("strong",{parentName:"li"},"Delete")," button;"),(0,a.kt)("li",{parentName:"ol"},"Follow the prompts, enter the relevant information, click ",(0,a.kt)("strong",{parentName:"li"},"Confirm")," to delete the project, or click ",(0,a.kt)("strong",{parentName:"li"},"Cancel")," to cancel the deletion;"),(0,a.kt)("li",{parentName:"ol"},"If you are deleting multiple projects, repeat the above steps.")),(0,a.kt)("h2",{id:"manage-project-member"},"Manage project member"),(0,a.kt)("p",null,"Only users with the admin role can assign people to the project. The project owner defaulted to having the project owner role."),(0,a.kt)("h3",{id:"add-a-member"},"Add a member"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Manage Members")," to go to the project member list page;"),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Add Member")," button in the upper right corner."),(0,a.kt)("li",{parentName:"ol"},"Enter the ",(0,a.kt)("strong",{parentName:"li"},"Username")," you want to add, select a ",(0,a.kt)("strong",{parentName:"li"},"project role")," for the user in the project."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"submit")," to complete."),(0,a.kt)("li",{parentName:"ol"},"If you're adding multiple members, repeat steps 1 through 4.")),(0,a.kt)("h3",{id:"remove-a-member"},"Remove a member"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"On the project list page or project overview tab, click ",(0,a.kt)("strong",{parentName:"li"},"Manage Members")," to go to the project member list page."),(0,a.kt)("li",{parentName:"ol"},"Search for the username you want to delete, then click the ",(0,a.kt)("strong",{parentName:"li"},"Delete")," button."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Yes")," to delete the user from this project, click ",(0,a.kt)("strong",{parentName:"li"},"No")," to cancel the deletion."),(0,a.kt)("li",{parentName:"ol"},"If you're removing multiple members, repeat steps 1 through 3.")),(0,a.kt)("h3",{id:"edit-a-members-role"},"Edit a member's role"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Hover your mouse over the project you want to edit, then click ",(0,a.kt)("strong",{parentName:"li"},"Manage Members")," to go to the project member list page."),(0,a.kt)("li",{parentName:"ol"},"Find the username you want to adjust through searching, click the ",(0,a.kt)("strong",{parentName:"li"},"Project Role")," drop-down menu, and select a new project role. For more information on roles, please take a look at ",(0,a.kt)("a",{parentName:"li",href:"roles-permissions"},"Roles and permissions in Starwhale"),".")))}m.isMDXComponent=!0}}]);