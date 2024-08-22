"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[59001],{3622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(74848),s=n(28453),o=(n(11470),n(19365),n(86025));const i={id:"submission-actions",title:"Submission Actions",sidebar_label:"Submission Actions",description:"Submission Actions allow customers to configure Backtrace to perform actions in response to incoming traffic."},a=void 0,l={id:"error-reporting/project-setup/submission-actions",title:"Submission Actions",description:"Submission Actions allow customers to configure Backtrace to perform actions in response to incoming traffic.",source:"@site/docs/error-reporting/project-setup/submission-actions.md",sourceDirName:"error-reporting/project-setup",slug:"/error-reporting/project-setup/submission-actions",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/project-setup/submission-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/project-setup/submission-actions.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1692688198e3,frontMatter:{id:"submission-actions",title:"Submission Actions",sidebar_label:"Submission Actions",description:"Submission Actions allow customers to configure Backtrace to perform actions in response to incoming traffic."},sidebar:"backtrace",previous:{title:"Customizing Deduplication Rules",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/project-setup/deduplication-rules"},next:{title:"Object Reprocessing",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/project-setup/object-reprocessing"}},u={},c=[{value:"Supported Actions",id:"supported-actions",level:2},{value:"Reject Submission",id:"reject-submission",level:3},{value:"Drop Object and Index Only",id:"drop-object-and-index-only",level:3},{value:"Probability Sampling",id:"probability-sampling",level:3},{value:"Set Values and Auto Assignment",id:"set-values-and-auto-assignment",level:3},{value:"Union Values",id:"union-values",level:3}];function d(e){const t={h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Submission Actions allow you to configure Backtrace to perform actions in response to incoming traffic. Actions can be performed based on a flexible rule system that can match strings or regex to modules, callstacks, or attributes and decide how to proceed. Highlights of the actions provided include: dropping traffic, automated assignment, setting classifiers and more."}),"\n",(0,r.jsx)(t.h2,{id:"supported-actions",children:"Supported Actions"}),"\n",(0,r.jsxs)(t.p,{children:["Submission actions can be configured under ",(0,r.jsx)(t.strong,{children:"Project Settings"})," > ",(0,r.jsx)(t.strong,{children:"Submission actions"}),":"]}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/project-settings/submission-actions.webp"),alt:"Shows the available submission actions in the Project Settings."}),"\n",(0,r.jsx)(t.p,{children:"The following actions are supported:"}),"\n",(0,r.jsx)(t.h3,{id:"reject-submission",children:"Reject Submission"}),"\n",(0,r.jsx)(t.p,{children:"This action will reject and never store the error. This is useful if you want to throw away crashes for specific noisy users, old versions, unsupported platforms, hacked games, etc."}),"\n",(0,r.jsx)(t.h3,{id:"drop-object-and-index-only",children:"Drop Object and Index Only"}),"\n",(0,r.jsx)(t.p,{children:"This action will process (index) the minidump and any other error object (including file attachments) and then delete (drop) it so it is not counted towards storage quota. This is useful if you don't need to retain the object for storage and external analysis."}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/project-settings/submission-actions-drop-object-and-index-only.png"),alt:"Shows an example configuration for the Drop objects and index only submission action."}),"\n",(0,r.jsx)(t.h3,{id:"probability-sampling",children:"Probability Sampling"}),"\n",(0,r.jsxs)(t.p,{children:["Both ",(0,r.jsx)(t.strong,{children:"Reject submission"})," and ",(0,r.jsx)(t.strong,{children:"Drop objects and index only"})," allow you to create a sampling rule based on a percentage. In the example below, the rule would filter out 20% of error reports where the error message equals ",(0,r.jsx)(t.strong,{children:"Test Error"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/project-settings/sampling-example.png"),alt:"Shows an example configuration of a probability sampling rule for Reject submission."}),"\n",(0,r.jsx)(t.h3,{id:"set-values-and-auto-assignment",children:"Set Values and Auto Assignment"}),"\n",(0,r.jsx)(t.p,{children:"This action can be used for automated assignment or to set specific attribute values."}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/project-settings/submission-action-set-value.webp"),width:"500",alt:"Shows an example configuration for the Set values submission action."}),"\n",(0,r.jsx)(t.h3,{id:"union-values",children:"Union Values"}),"\n",(0,r.jsxs)(t.p,{children:["This action is like ",(0,r.jsx)(t.strong,{children:"Set value"})," , but for label types, like Tags or Classifiers, where instead of setting a value, the system is adding a value to the field, so it can contain multiple values."]}),"\n",(0,r.jsx)("img",{src:(0,o.A)("img/error-reporting/project-settings/submission-action-union-values.webp"),width:"500",alt:"Shows an example configuration for the Union values submission action."})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(18215);const s={tabItem:"tabItem_Ymn6"};var o=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(96540),s=n(18215),o=n(23104),i=n(56347),a=n(205),l=n(57485),u=n(31682),c=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=b({queryString:n,groupId:s}),[h,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),g=(()=>{const e=u??h;return m({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),s=a[n].value;s!==r&&(u(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,s.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=h(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function y(e){const t=(0,f.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);