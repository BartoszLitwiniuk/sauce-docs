"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[96693],{71573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(74848),s=n(28453),a=n(86025);n(11470),n(19365);const i={id:"github",title:"Connecting Your GitHub Issues",sidebar_label:"GitHub"},u="Connecting Your GitHub Issues",o={id:"testfairy/sdk/bug-tracking/github",title:"Connecting Your GitHub Issues",description:"1. Go to your account Preferences under your account email and select Integrations.",source:"@site/docs/testfairy/sdk/bug-tracking/github.md",sourceDirName:"testfairy/sdk/bug-tracking",slug:"/testfairy/sdk/bug-tracking/github",permalink:"/sauce-docs/pr-preview/pr-2901/testfairy/sdk/bug-tracking/github",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/bug-tracking/github.md",tags:[],version:"current",lastUpdatedBy:"Gil Megidish",lastUpdatedAt:1718189769e3,frontMatter:{id:"github",title:"Connecting Your GitHub Issues",sidebar_label:"GitHub"},sidebar:"docs",previous:{title:"Using Bug Tracking",permalink:"/sauce-docs/pr-preview/pr-2901/testfairy/sdk/bug-tracking/using-bug-tracking"},next:{title:"Jira Cloud",permalink:"/sauce-docs/pr-preview/pr-2901/testfairy/sdk/bug-tracking/jira-cloud"}},l={},c=[];function d(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"connecting-your-github-issues",children:"Connecting Your GitHub Issues"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Go to your account ",(0,r.jsx)(t.strong,{children:"Preferences"})," under your account email and select ",(0,r.jsx)(t.strong,{children:"Integrations"}),"."]}),"\n",(0,r.jsx)("img",{src:(0,a.A)("/img/testfairy/testing-an-app/bug-tracking/Github1.png"),alt:"Select Integrations"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Scroll to ",(0,r.jsx)(t.strong,{children:"GitHub Issues"})," and press ",(0,r.jsx)(t.strong,{children:"Add integration"})," to start the ",(0,r.jsx)(t.strong,{children:"OAuth"})," process."]}),"\n",(0,r.jsx)("img",{src:(0,a.A)("/img/testfairy/testing-an-app/bug-tracking/Github2_1.png"),alt:"Add integration button"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Press ",(0,r.jsx)(t.strong,{children:"Authorize GitHub via OAuth"})," and wait for the ",(0,r.jsx)(t.code,{children:"OAuth"})," process to finish."]}),"\n",(0,r.jsx)("img",{src:(0,a.A)("/img/testfairy/testing-an-app/bug-tracking/Github2.png"),alt:"Authorize GitHub via OAuth"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"After connecting to your GitHub account, you can select a repository for each app."}),"\n",(0,r.jsx)("img",{src:(0,a.A)("/img/testfairy/testing-an-app/bug-tracking/Github3.png"),alt:"Select repository"}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["Press the ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"Update GitHub Settings"})})," when you choose or update a repository."]})}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(18215);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>j});var r=n(96540),s=n(18215),a=n(23104),i=n(56347),u=n(205),o=n(57485),l=n(31682),c=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=g(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,d]=b({queryString:n,groupId:s}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),m=(()=>{const e=l??p;return h({value:e,tabValues:a})?e:null})();(0,u.A)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),s=u[n].value;s!==r&&(l(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function k(e){const t=p(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(x,{...e,...t})]})}function j(e){const t=(0,f.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>u});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);