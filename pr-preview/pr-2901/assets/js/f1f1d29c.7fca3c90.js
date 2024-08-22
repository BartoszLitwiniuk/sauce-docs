"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[42225],{55983:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(74848),a=t(28453),i=t(86025);t(11470),t(19365);const s={sidebar_label:"Continuous Integration"},o="Continuous Integration",l={id:"visual-testing/workflows/ci",title:"Continuous Integration",description:"To integrate Sauce Visual into your continuous integration workflow we recommend a two-step approach using the Sauce Visual CLI. Sauce Visual CLI will work with all major CI systems (GitHub, Gitlab, Jenkins, CircleCI).",source:"@site/docs/visual-testing/workflows/ci.md",sourceDirName:"visual-testing/workflows",slug:"/visual-testing/workflows/ci",permalink:"/sauce-docs/pr-preview/pr-2901/visual-testing/workflows/ci",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual-testing/workflows/ci.md",tags:[],version:"current",lastUpdatedBy:"Kerem Beygo",lastUpdatedAt:1721901411e3,frontMatter:{sidebar_label:"Continuous Integration"},sidebar:"docs",previous:{title:"Review",permalink:"/sauce-docs/pr-preview/pr-2901/visual-testing/workflows/review"},next:{title:"API Lifecycle",permalink:"/sauce-docs/pr-preview/pr-2901/visual-testing/workflows/api-lifecycle"}},u={},c=[];function d(e){const n={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"continuous-integration",children:"Continuous Integration"}),"\n",(0,r.jsxs)(n.p,{children:["To integrate Sauce Visual into your continuous integration workflow we recommend a two-step approach using the ",(0,r.jsx)(n.a,{href:"/sauce-docs/pr-preview/pr-2901/visual-testing/cli",children:"Sauce Visual CLI"}),". Sauce Visual CLI will work with all major CI systems (GitHub, Gitlab, Jenkins, CircleCI)."]}),"\n",(0,r.jsx)("img",{src:(0,i.A)("img/sauce-visual/workflow-ci.png"),alt:"Branch Review Pipeline"}),"\n",(0,r.jsx)(n.p,{children:"To implement a merge/pull request flow which blocks the given request from merging when visual diffs are detected and not approved do the following:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"trigger test execution in your CI the way you do it locally. Make sure to pass a custom build ID and do not fail your test when visual differences where detected."}),"\n",(0,r.jsx)(n.li,{children:"in a dedicated build step use the Sauce Visual CLI to fetch the current state of the Sauce Visual build using the custom build ID from step one. It will fail in case visual changes have been detected."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# make sure nodejs and npx is available\n\nnpx @saucelabs/visual build status -r us-west-1 --custom-id YOUR_CUSTOM_BUILD_ID\n"})}),"\n",(0,r.jsx)(n.h1,{id:"branching--merging-workflow",children:"Branching & Merging Workflow"}),"\n",(0,r.jsx)(n.p,{children:"The branching workflow starts by running a visual build on a new branch. Its purpose is to allow creating and editing baselines\nwithout impacting other builds. It can also be used to maintain baselines for different environments. E.g. dev staging and production."}),"\n",(0,r.jsx)(n.p,{children:"If you are familiar with git branching this workflow is similar but different to simplify the overall workflow."}),"\n",(0,r.jsx)("img",{src:(0,i.A)("img/sauce-visual/branching-merging.png"),alt:"Baseline Branching and Merging"}),"\n",(0,r.jsx)(n.h1,{id:"creating-new-branches",children:"Creating new branches"}),"\n",(0,r.jsxs)(n.p,{children:["To create a new branch pass the ",(0,r.jsx)(n.code,{children:"branch"})," config parameter to your build configuration. By default, a new branch doesn't have any baselines. Thus running a build on it would create diffs in state ",(0,r.jsx)(n.code,{children:"new"}),". To change the default behavior pass the config parameter ",(0,r.jsx)(n.code,{children:"defaultBranch"})," to your build config. This will make sure that a Diff will always pick the latest baseline from either the specified ",(0,r.jsx)(n.code,{children:"branch"})," or ",(0,r.jsx)(n.code,{children:"defaultBranch"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Please check the documentation for your integration to configure branches properly."}),"\n",(0,r.jsx)(n.h1,{id:"merging-a-branch",children:"Merging a branch"}),"\n",(0,r.jsx)(n.p,{children:"To merge baselines into your main branch we recommend at this point to merge your code changes in your source code repository and run a new build on the resulting main branch. This will prevent any merge issues and guarantees you don't miss any changes."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),a=t(18215),i=t(23104),s=t(56347),o=t(205),l=t(57485),u=t(31682),c=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[u,d]=f({queryString:t,groupId:a}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),m=(()=>{const e=u??b;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=t(74848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(u(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function x(e){const n=b(e);return(0,w.jsxs)("div",{className:(0,a.A)("tabs-container",m.tabList),children:[(0,w.jsx)(v,{...e,...n}),(0,w.jsx)(y,{...e,...n})]})}function k(e){const n=(0,g.A)();return(0,w.jsx)(x,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);