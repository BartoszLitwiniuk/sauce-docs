"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[60454],{48298:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var s=t(74848),n=t(28453),o=(t(11470),t(19365),t(86025));const a={id:"object-reprocessing",title:"Object Reprocessing",sidebar_label:"Object Reprocessing",description:"Backtrace provides system administrators with the ability to Reprocess Objects they have stored in Backtrace."},i=void 0,c={id:"error-reporting/project-setup/object-reprocessing",title:"Object Reprocessing",description:"Backtrace provides system administrators with the ability to Reprocess Objects they have stored in Backtrace.",source:"@site/docs/error-reporting/project-setup/object-reprocessing.md",sourceDirName:"error-reporting/project-setup",slug:"/error-reporting/project-setup/object-reprocessing",permalink:"/sauce-docs/pr-preview/pr-2900/error-reporting/project-setup/object-reprocessing",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/project-setup/object-reprocessing.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1692688198e3,frontMatter:{id:"object-reprocessing",title:"Object Reprocessing",sidebar_label:"Object Reprocessing",description:"Backtrace provides system administrators with the ability to Reprocess Objects they have stored in Backtrace."},sidebar:"backtrace",previous:{title:"Submission Actions",permalink:"/sauce-docs/pr-preview/pr-2900/error-reporting/project-setup/submission-actions"},next:{title:"Symbolication",permalink:"/sauce-docs/pr-preview/pr-2900/error-reporting/project-setup/symbolication"}},l={},u=[{value:"How To Reprocess Objects",id:"how-to-reprocess-objects",level:2},{value:"Reprocess by Time",id:"reprocess-by-time",level:3},{value:"Reprocess by Fingerprint",id:"reprocess-by-fingerprint",level:3},{value:"Reprocess by Query",id:"reprocess-by-query",level:3},{value:"Reprocess Individual Errors",id:"reprocess-individual-errors",level:3}];function p(e){const r={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"Backtrace provides system administrators with the ability to Reprocess Objects they have stored in Backtrace. This is useful in cases where"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"They need to regenerate callstacks after debug symbols are uploaded."}),"\n",(0,s.jsx)(r.li,{children:"They need to index newly defined attributes."}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Note that the grouping of errors may change after reprocessing."}),"\n",(0,s.jsx)(r.h2,{id:"how-to-reprocess-objects",children:"How To Reprocess Objects"}),"\n",(0,s.jsxs)(r.p,{children:["There are a couple of ways for system administrators to reprocess objects. In this guide, we will discuss the capabilities available via the Web Console. Admins can also use the ",(0,s.jsx)(r.a,{href:"/error-reporting/advanced/morgue/",children:"morgue command line tool"})," to reprocess objects."]}),"\n",(0,s.jsx)(r.h3,{id:"reprocess-by-time",children:"Reprocess by Time"}),"\n",(0,s.jsxs)(r.p,{children:["Project Settings allows admins to reprocess all objects over a time span. You can select a time span in ",(0,s.jsx)(r.strong,{children:"Project Settings > Object Reprocessing"}),"."]}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/error-reporting/project-settings/reprocess-by-time.png"),alt:""}),"\n",(0,s.jsx)(r.h3,{id:"reprocess-by-fingerprint",children:"Reprocess by Fingerprint"}),"\n",(0,s.jsx)(r.p,{children:"In the Triage tool, admins can choose to reprocess all errors for a given fingerprint."}),"\n",(0,s.jsx)(r.h3,{id:"reprocess-by-query",children:"Reprocess by Query"}),"\n",(0,s.jsx)(r.p,{children:'The Explore tool gives admins a chance to query and group the objects they want to reprocess. In the Aggregate view, Admins can Group By whichever field they want and use the group actions dropdown to reprocess, If the admin sets "Group By" to None, then they can easily reprocess all object in the query. If the admin sets "Group By" to another attribute, they can reprocess all objects that are grouped under the selected value.'}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/error-reporting/project-settings/explore-reprocess.png"),alt:""}),"\n",(0,s.jsx)(r.h3,{id:"reprocess-individual-errors",children:"Reprocess Individual Errors"}),"\n",(0,s.jsx)(r.p,{children:"In the List view, admins can reprocess objects from the object ID column."}),"\n",(0,s.jsx)(r.p,{children:"In the Debugger view, admins can reprocess an object from the menu on the right."}),"\n",(0,s.jsx)("img",{src:(0,o.A)("img/error-reporting/project-settings/debug-reprocess.webp"),alt:""})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>a});t(96540);var s=t(18215);const n={tabItem:"tabItem_Ymn6"};var o=t(74848);function a(e){let{children:r,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,a),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>x});var s=t(96540),n=t(18215),o=t(23104),a=t(56347),i=t(205),c=t(57485),l=t(31682),u=t(89466);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return p(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:n}}=e;return{value:r,label:t,attributes:s,default:n}}))}(t);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function b(e){let{queryString:r=!1,groupId:t}=e;const n=(0,a.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(n.location.search);r.set(o,e),n.replace({...n.location,search:r.toString()})}),[o,n])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,o=d(e),[a,c]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:o}))),[l,p]=b({queryString:t,groupId:n}),[m,g]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,o]=(0,u.Dv)(t);return[n,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),f=(()=>{const e=l??m;return h({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{f&&c(f)}),[f]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var g=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function j(e){let{className:r,block:t,selectedValue:s,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{const r=e.currentTarget,t=c.indexOf(r),n=i[t].value;n!==s&&(l(r),a(n))},p=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>c.push(e),onKeyDown:p,onClick:u,...o,className:(0,n.A)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":s===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:n}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function w(e){const r=m(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...e,...r}),(0,v.jsx)(y,{...e,...r})]})}function x(e){const r=(0,g.A)();return(0,v.jsx)(w,{...e,children:p(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var s=t(96540);const n={},o=s.createContext(n);function a(e){const r=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);