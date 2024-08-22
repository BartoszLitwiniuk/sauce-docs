"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[39723],{79689:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=t(74848),i=t(28453);t(11470),t(19365),t(86025);const r={id:"diffing-engines",title:"Diffing Engines",sidebar_label:"Diffing Engines"},s=void 0,l={id:"visual-testing/diffing-engines",title:"Diffing Engines",description:"Sauce Visual Testing supports the various diffing engines, which are described below.",source:"@site/docs/visual-testing/diffing-engines.md",sourceDirName:"visual-testing",slug:"/visual-testing/diffing-engines",permalink:"/sauce-docs/pr-preview/pr-2901/visual-testing/diffing-engines",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual-testing/diffing-engines.md",tags:[],version:"current",lastUpdatedBy:"Benjamin Karran",lastUpdatedAt:1723042089e3,frontMatter:{id:"diffing-engines",title:"Diffing Engines",sidebar_label:"Diffing Engines"},sidebar:"docs",previous:{title:"Mobile Native Testing (BETA)",permalink:"/sauce-docs/pr-preview/pr-2901/visual-testing/mobile-native-testing"},next:{title:"FAQ",permalink:"/sauce-docs/pr-preview/pr-2901/visual-testing/faq"}},o={},u=[{value:"Balanced",id:"balanced",level:2},{value:"Simple",id:"simple",level:2},{value:"(Experimental)",id:"experimental",level:2}];function c(e){const n={h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Sauce Visual Testing supports the various diffing engines, which are described below.\nOur SDKs give you the ability to select a specific engine for each snapshot, if you don't want to rely on the default engine."}),"\n",(0,a.jsx)(n.h2,{id:"balanced",children:"Balanced"}),"\n",(0,a.jsx)(n.p,{children:"The Balanced engine will soon be our default engine.\nIt support all features like selective diffing and provides great all around performance.\nIt is able to detect single pixel changes while ignoring barely visible rendering artifacts such as anti-aliasing or small color inaccuracies."}),"\n",(0,a.jsx)(n.h2,{id:"simple",children:"Simple"}),"\n",(0,a.jsx)(n.p,{children:"Our first engine. It is similar to the Balanced engine, but we specifically developed the Balanced engine to address some corner cases that the Simple engine didn't handle well.\nWe will support the Simple engine for the forseeable future, but we won't backport new features to it.\nIn particular, selective diffing is not available for the Simple engine."}),"\n",(0,a.jsx)(n.p,{children:"We recommend using the Balanced engine instead of the Simple engine."}),"\n",(0,a.jsx)(n.h2,{id:"experimental",children:"(Experimental)"}),"\n",(0,a.jsx)(n.p,{children:"We have am Experimental engine that is constantly changing and used for showcasing and troubleshooting.\nPlease don't use this engine in production."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>s});t(96540);var a=t(18215);const i={tabItem:"tabItem_Ymn6"};var r=t(74848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,s),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var a=t(96540),i=t(18215),r=t(23104),s=t(56347),l=t(205),o=t(57485),u=t(31682),c=t(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=f(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=g({queryString:t,groupId:i}),[h,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Dv)(t);return[i,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),m=(()=>{const e=u??h;return p({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{m&&o(m)}),[m]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function w(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==a&&(u(n),s(i))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...r,className:(0,i.A)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=h(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",m.tabList),children:[(0,v.jsx)(w,{...e,...n}),(0,v.jsx)(x,{...e,...n})]})}function j(e){const n=(0,b.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var a=t(96540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);