"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[71553],{69833:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var a=t(74848),n=t(28453);t(11470),t(19365),t(86025);const o={id:"setup",title:"Hydra Setup",sidebar_label:"Setup",description:"Add Hydra in your Backtrace project."},s=void 0,u={id:"error-reporting/advanced/hydra/setup",title:"Hydra Setup",description:"Add Hydra in your Backtrace project.",source:"@site/docs/error-reporting/advanced/hydra/setup.md",sourceDirName:"error-reporting/advanced/hydra",slug:"/error-reporting/advanced/hydra/setup",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/advanced/hydra/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/hydra/setup.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:168907436e4,frontMatter:{id:"setup",title:"Hydra Setup",sidebar_label:"Setup",description:"Add Hydra in your Backtrace project."},sidebar:"backtrace",previous:{title:"Plugins for ptrace",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/advanced/ptrace"},next:{title:"Usage",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/advanced/hydra/usage"}},c={},l=[];function i(e){const r={code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["By default, Hydra looks for a configuration file at ",(0,a.jsx)(r.code,{children:"~/.hydra.cf"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"Below is a sample configuration for the crash application:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-shell",children:"[scm]\ncrash.map=/home/user/projects/crash/src\ncrash.map=object:^libck[\\.-],/home/user/projects/ck\ncrash.map=function:^ck_,/home/user/projects/ck\ncrash.trigger=/home/user/projects/crash,version,git -C %s checkout -q %0\n\neditor=vim +%l %s\n\n[general]\nalias_detection=true\ncollapse_threshold=3\n"})})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var a=t(18215);const n={tabItem:"tabItem_Ymn6"};var o=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>j});var a=t(96540),n=t(18215),o=t(23104),s=t(56347),u=t(205),c=t(57485),l=t(31682),i=t(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}(t);return function(e){const r=(0,l.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const n=(0,s.W6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,c.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(n.location.search);r.set(o,e),n.replace({...n.location,search:r.toString()})}),[o,n])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,o=p(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:o}))),[l,d]=f({queryString:t,groupId:n}),[m,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,o]=(0,i.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),v=(()=>{const e=l??m;return h({value:e,tabValues:o})?e:null})();(0,u.A)((()=>{v&&c(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function y(e){let{className:r,block:t,selectedValue:a,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),i=e=>{const r=e.currentTarget,t=c.indexOf(r),n=u[t].value;n!==a&&(l(r),s(n))},d=e=>{let r=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:u.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>c.push(e),onKeyDown:d,onClick:i,...o,className:(0,n.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function k(e){let{lazy:r,children:t,selectedValue:n}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function x(e){const r=m(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...e,...r}),(0,g.jsx)(k,{...e,...r})]})}function j(e){const r=(0,b.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>u});var a=t(96540);const n={},o=a.createContext(n);function s(e){const r=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function u(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);