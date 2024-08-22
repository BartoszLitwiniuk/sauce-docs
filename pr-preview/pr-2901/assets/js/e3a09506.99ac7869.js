"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[39168],{85144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(74848),i=a(28453),s=a(86025);a(11470),a(19365);const r={id:"tags",title:"Tags",sidebar_label:"Tags"},o=void 0,l={id:"testfairy/app-distribution/tags",title:"Tags",description:"Tags are text labels that can be attached to builds to aid in identification and search. They provide a convenient way to categorize and organize builds within your application.",source:"@site/docs/testfairy/app-distribution/tags.md",sourceDirName:"testfairy/app-distribution",slug:"/testfairy/app-distribution/tags",permalink:"/sauce-docs/pr-preview/pr-2901/testfairy/app-distribution/tags",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/app-distribution/tags.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:1688689169e3,frontMatter:{id:"tags",title:"Tags",sidebar_label:"Tags"},sidebar:"docs",previous:{title:"Managing Release Notes",permalink:"/sauce-docs/pr-preview/pr-2901/testfairy/app-distribution/release-notes"},next:{title:"Managing Testers",permalink:"/sauce-docs/pr-preview/pr-2901/testfairy/testers/managing-testers"}},u={},d=[{value:"Adding Tags Via Upload API",id:"adding-tags-via-upload-api",level:2},{value:"Adding and Editing Tags",id:"adding-and-editing-tags",level:2},{value:"Displaying Tags to Admins",id:"displaying-tags-to-admins",level:2},{value:"Displaying Tags to Testers",id:"displaying-tags-to-testers",level:2}];function c(e){const t={h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Tags are text labels that can be attached to builds to aid in identification and search. They provide a convenient way to categorize and organize builds within your application."}),"\n",(0,n.jsx)(t.h2,{id:"adding-tags-via-upload-api",children:"Adding Tags Via Upload API"}),"\n",(0,n.jsx)(t.p,{children:"When uploading a build using the Upload API /testfairy/api-reference/upload-api, you have the option to include tags using the 'tags' parameter. This allows you to assign relevant labels to the build during the upload process."}),"\n",(0,n.jsx)(t.h2,{id:"adding-and-editing-tags",children:"Adding and Editing Tags"}),"\n",(0,n.jsx)(t.p,{children:"Once a build is available on your dashboard, you can easily manage its tags. In the build settings menu, you have the ability to add, edit, or delete tags associated with the build. This flexibility ensures that your tags remain up-to-date and reflect the current state of your application."}),"\n",(0,n.jsx)(t.h2,{id:"displaying-tags-to-admins",children:"Displaying Tags to Admins"}),"\n",(0,n.jsx)(t.p,{children:"Tags are prominently displayed on project pages, providing administrators with a clear overview of the tags associated with each build. This visibility enables efficient management and tracking of different versions of your application.\nTags are also searchable on the dashboard, allowing admins to quickly find specific builds based on their assigned tags. This search functionality further streamlines the navigation and organization of your project:"}),"\n",(0,n.jsx)("img",{src:(0,s.A)("/img/testfairy/app-distribution/builds-table.png"),alt:"tags on project page"}),"\n",(0,n.jsx)(t.h2,{id:"displaying-tags-to-testers",children:"Displaying Tags to Testers"}),"\n",(0,n.jsx)(t.p,{children:"Testers can conveniently view the tags assigned to builds on their dashboard. By displaying tags in this location, testers gain insights into the categorization and characteristics of each build they are testing."}),"\n",(0,n.jsx)("img",{src:(0,s.A)("/img/testfairy/app-distribution/builds-my-view.png"),alt:"tags in testers dashboard"}),"\n",(0,n.jsx)(t.p,{children:"Tags are prominently displayed at the top of every landing page. This ensures that testers have easy access to the tags associated with the build they are currently testing, providing them with a quick reference and aiding in their testing efforts."}),"\n",(0,n.jsx)("img",{src:(0,s.A)("/img/testfairy/app-distribution/landing-page-tags.png"),alt:"tags on landing page"})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var n=a(18215);const i={tabItem:"tabItem_Ymn6"};var s=a(74848);function r(e){let{children:t,hidden:a,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,r),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>x});var n=a(96540),i=a(18215),s=a(23104),r=a(56347),o=a(205),l=a(57485),u=a(31682),d=a(89466);function c(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:i}}=e;return{value:t,label:a,attributes:n,default:i}}))}(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const i=(0,r.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,s=p(e),[r,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,c]=h({queryString:a,groupId:i}),[b,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,d.Dv)(a);return[i,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:i}),m=(()=>{const e=u??b;return g({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!g({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,s]),tabValues:s}}var f=a(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function y(e){let{className:t,block:a,selectedValue:n,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),d=e=>{const t=e.currentTarget,a=l.indexOf(t),i=o[a].value;i!==n&&(u(t),r(i))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:c,onClick:d,...s,className:(0,i.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function T(e){let{lazy:t,children:a,selectedValue:i}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(T,{...e,...t})]})}function x(e){const t=(0,f.A)();return(0,v.jsx)(w,{...e,children:c(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var n=a(96540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);