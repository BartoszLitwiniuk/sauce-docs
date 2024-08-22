"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[2992],{23222:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(74848),s=r(28453),a=(r(11470),r(19365),r(86025));const o={id:"access-control",title:"Access Control",sidebar_label:"Access Control",description:"Project Administrators can use Project Settings to restrict access to a given project to a defined set of Users or Teams."},c=void 0,i={id:"error-reporting/project-setup/access-control",title:"Access Control",description:"Project Administrators can use Project Settings to restrict access to a given project to a defined set of Users or Teams.",source:"@site/docs/error-reporting/project-setup/access-control.md",sourceDirName:"error-reporting/project-setup",slug:"/error-reporting/project-setup/access-control",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/project-setup/access-control",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/project-setup/access-control.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1691068473e3,frontMatter:{id:"access-control",title:"Access Control",sidebar_label:"Access Control",description:"Project Administrators can use Project Settings to restrict access to a given project to a defined set of Users or Teams."},sidebar:"backtrace",previous:{title:"Storage Sampling",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/project-setup/storage-sampling"},next:{title:"Account Management",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/org-settings/user-mgmnt"}},l={},u=[{value:"Overview",id:"overview",level:2},{value:"Adding a Team or User",id:"adding-a-team-or-user",level:2}];function d(e){const t={h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"Project Administrators can use Project Settings to restrict access to a given project to a defined set of Users or Teams."}),"\n",(0,n.jsx)(t.p,{children:"By default, Projects are available for access by all users of the Backtrace Instance. A Project Administrator can modify access control for a Project to limit which Users or Teams have access to it."}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/error-reporting/project-settings/access-control.webp"),alt:""}),"\n",(0,n.jsx)(t.h2,{id:"adding-a-team-or-user",children:"Adding a Team or User"}),"\n",(0,n.jsx)(t.p,{children:"Project Admins can easily search through the list of existing users or teams to restrict project access to them. One of three roles can be assigned:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Guest - Read Only access to be able to search and view all errors in the project"}),"\n",(0,n.jsx)(t.li,{children:"Member - Can interact with the project by assigning, commenting, tagging, linking to Jira tickets, and more"}),"\n",(0,n.jsx)(t.li,{children:"Admin - Can edit Project Settings."}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/error-reporting/project-settings/access-control-add-user.png"),alt:""})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(18215);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),s=r(18215),a=r(23104),o=r(56347),c=r(205),i=r(57485),l=r(31682),u=r(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[l,d]=f({queryString:r,groupId:s}),[h,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),b=(()=>{const e=l??h;return m({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),s=c[r].value;s!==n&&(l(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:c.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=h(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function y(e){const t=(0,g.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(96540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);