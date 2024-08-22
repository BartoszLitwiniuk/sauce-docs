"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[44265],{60661:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(74848),a=r(28453),i=(r(11470),r(19365),r(86025));const o={id:"phabricator",title:"Phabricator Integration with Backtrace",sidebar_label:"Phabricator",description:"Integrate Backtrace with Phabricator."},s=void 0,l={id:"error-reporting/workflow-integrations/issue-tracking/phabricator",title:"Phabricator Integration with Backtrace",description:"Integrate Backtrace with Phabricator.",source:"@site/docs/error-reporting/workflow-integrations/issue-tracking/phabricator.md",sourceDirName:"error-reporting/workflow-integrations/issue-tracking",slug:"/error-reporting/workflow-integrations/issue-tracking/phabricator",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/workflow-integrations/issue-tracking/phabricator",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/workflow-integrations/issue-tracking/phabricator.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1690913171e3,frontMatter:{id:"phabricator",title:"Phabricator Integration with Backtrace",sidebar_label:"Phabricator",description:"Integrate Backtrace with Phabricator."},sidebar:"backtrace",previous:{title:"GitHub",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/workflow-integrations/issue-tracking/github"},next:{title:"Asana",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/workflow-integrations/issue-tracking/asana"}},c={},u=[{value:"Generate an API Token",id:"generate-an-api-token",level:2},{value:"Set Up the Integration",id:"set-up-the-integration",level:2},{value:"Synchronization",id:"synchronization",level:3}];function h(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This guide goes through the steps necessary to integrate Backtrace with Phabricator."}),"\n",(0,n.jsx)(t.p,{children:"The steps in this process are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Generate an API token"}),"\n",(0,n.jsx)(t.li,{children:"Set up the integration"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"generate-an-api-token",children:"Generate an API Token"}),"\n",(0,n.jsx)(t.p,{children:"To set up integration for Phabricator, you must generate an API token. To do this, go to the Settings menu in Phabricator and click Conduit API Tokens under Sessions and Logs, then Generate API Token in the upper-right."}),"\n",(0,n.jsx)(t.p,{children:"You will use this token in the next step."}),"\n",(0,n.jsx)(t.h2,{id:"set-up-the-integration",children:"Set Up the Integration"}),"\n",(0,n.jsxs)(t.p,{children:["To set up the integration, navigate to the integration settings through ",(0,n.jsx)(t.strong,{children:"Project Settings > Integrations > Issue Trackers > Phabricator"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["For Phabricator, the required settings are the name, the endpoint URL, and the API token. For the endpoint URL, you should use your Phabricator URL with /api appended (e.g. ",(0,n.jsx)(t.a,{href:"https://your.phabricator.url/api",children:"https://your.phabricator.url/api"}),")."]}),"\n",(0,n.jsx)("img",{src:(0,i.A)("img/error-reporting/workflow-integrations/phab-settings.png"),alt:""}),"\n",(0,n.jsx)(t.h3,{id:"synchronization",children:"Synchronization"}),"\n",(0,n.jsx)(t.p,{children:"To enable synchronization from Backtrace to Phabricator make sure yes is selected for it in the Setup Behavior step."}),"\n",(0,n.jsx)("img",{src:(0,i.A)("img/error-reporting/workflow-integrations/phab-sync.png"),alt:""}),"\n",(0,n.jsx)(t.p,{children:"To enable synchronization from Phabricator to Backtrace you will need to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Create a Herald webhook with an URL provided to you in Setup Behavior step."}),"\n",(0,n.jsx)(t.li,{children:'Create a global Herald rule for Maniphest Tasks which calls the webhook when description contains "View in Backtrace".'}),"\n"]}),"\n",(0,n.jsx)("img",{src:(0,i.A)("img/error-reporting/workflow-integrations/phab-set-herald-rule.webp"),alt:""})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var i=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>y});var n=r(96540),a=r(18215),i=r(23104),o=r(56347),s=r(205),l=r(57485),c=r(31682),u=r(89466);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=d(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,h]=g({queryString:r,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),m=(()=>{const e=c??b;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=r(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=r(74848);function w(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),a=s[r].value;a!==n&&(c(t),o(a))},h=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:h,onClick:u,...i,className:(0,a.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=b(e);return(0,k.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,k.jsx)(w,{...e,...t}),(0,k.jsx)(v,{...e,...t})]})}function y(e){const t=(0,f.A)();return(0,k.jsx)(x,{...e,children:h(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var n=r(96540);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);