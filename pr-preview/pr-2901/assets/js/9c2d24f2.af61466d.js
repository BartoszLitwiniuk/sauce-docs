"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[89811],{51457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(74848),n=r(28453);r(11470),r(19365),r(86025);const i={id:"limitations",title:"Limitations for Playwright",sidebar_label:"Limitations"},s=void 0,o={id:"web-apps/automated-testing/playwright/limitations",title:"Limitations for Playwright",description:"Special Characters in Test Names",source:"@site/docs/web-apps/automated-testing/playwright/limitations.md",sourceDirName:"web-apps/automated-testing/playwright",slug:"/web-apps/automated-testing/playwright/limitations",permalink:"/sauce-docs/pr-preview/pr-2901/web-apps/automated-testing/playwright/limitations",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/web-apps/automated-testing/playwright/limitations.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:1721432255e3,frontMatter:{id:"limitations",title:"Limitations for Playwright",sidebar_label:"Limitations"},sidebar:"docs",previous:{title:"Advanced Configuration",permalink:"/sauce-docs/pr-preview/pr-2901/web-apps/automated-testing/playwright/advanced"},next:{title:"Quickstart",permalink:"/sauce-docs/pr-preview/pr-2901/web-apps/automated-testing/cucumberjs-playwright/quickstart"}},l={},c=[{value:"Special Characters in Test Names",id:"special-characters-in-test-names",level:3},{value:"Playwright 1.31.1 + Webkit + Sauce-Connect",id:"playwright-1311--webkit--sauce-connect",level:3},{value:"macOS 12 + Playwright 1.44+ + Webkit",id:"macos-12--playwright-144--webkit",level:3},{value:"macOS 11 + Playwright 1.29+ + Webkit",id:"macos-11--playwright-129--webkit",level:3},{value:"Playwright HTML Reporter + Trace Viewer",id:"playwright-html-reporter--trace-viewer",level:3},{value:"Chrome launchOptions",id:"chrome-launchoptions",level:3},{value:"Webkit + Windows",id:"webkit--windows",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"special-characters-in-test-names",children:"Special Characters in Test Names"}),"\n",(0,a.jsx)(t.p,{children:"We recommend that you avoid the use of special characters when naming your tests. If your test name contains any special characters, your test may not run or its artifacts may not be visible in our platform."}),"\n",(0,a.jsx)(t.h3,{id:"playwright-1311--webkit--sauce-connect",children:"Playwright 1.31.1 + Webkit + Sauce-Connect"}),"\n",(0,a.jsx)(t.p,{children:"When using Sauce-Connect, Webkit browser is unable to load any website that is hosted on the Internet.\nLocal websites can still be loaded."}),"\n",(0,a.jsx)(t.h3,{id:"macos-12--playwright-144--webkit",children:"macOS 12 + Playwright 1.44+ + Webkit"}),"\n",(0,a.jsx)(t.p,{children:"Webkit is not working on macOS 12 since Playwright 1.44.0."}),"\n",(0,a.jsx)(t.h3,{id:"macos-11--playwright-129--webkit",children:"macOS 11 + Playwright 1.29+ + Webkit"}),"\n",(0,a.jsx)(t.p,{children:"Webkit is not working on macOS 11 since Playwright 1.29.0."}),"\n",(0,a.jsx)(t.h3,{id:"playwright-html-reporter--trace-viewer",children:"Playwright HTML Reporter + Trace Viewer"}),"\n",(0,a.jsxs)(t.p,{children:["Because of a limitation in how assets are stored on our platform, configuring your tests to use the built-in ",(0,a.jsx)(t.a,{href:"https://playwright.dev/docs/test-reporters#html-reporter",children:"HTML reporter"})," and Playwright's ",(0,a.jsx)(t.a,{href:"https://playwright.dev/docs/trace-viewer-intro",children:"Trace Viewer"})," feature will not work as expected."]}),"\n",(0,a.jsx)(t.h3,{id:"chrome-launchoptions",children:"Chrome launchOptions"}),"\n",(0,a.jsxs)(t.p,{children:["If you use project specific ",(0,a.jsx)(t.code,{children:"launchOptions"})," along with setting Chrome as the browser, you'll encounter the following error:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"browserType.launch: Chromium distribution 'chrome' is not found at C:\\Users\\sauce\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This is because playwright's project specific settings override the global configuration that Sauce Labs provides during runtime. In this case, the location of the browser binary. Make sure that ",(0,a.jsx)(t.code,{children:"launchOptions"})," are not set when running on a Sauce VM."]}),"\n",(0,a.jsx)(t.h3,{id:"webkit--windows",children:"Webkit + Windows"}),"\n",(0,a.jsxs)(t.p,{children:["There is a ",(0,a.jsx)(t.a,{href:"https://github.com/microsoft/playwright/issues/24512",children:"known issue"})," in Playwright that prevents some sites from loading in Webkit on Windows with the error ",(0,a.jsx)(t.code,{children:"SSL peer certificate or SSH remote key was not OK"}),". We recommend running your Playwright + Webkit tests on our Mac VMs by setting the ",(0,a.jsx)(t.a,{href:"https://docs.saucelabs.com/web-apps/automated-testing/playwright/yaml/#platformname",children:"platformName"})," to either ",(0,a.jsx)(t.code,{children:"macOS 13"})," or ",(0,a.jsx)(t.code,{children:"macOS 12"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Tests running through Sauce Tunnels are unaffected."})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(18215);const n={tabItem:"tabItem_Ymn6"};var i=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>k});var a=r(96540),n=r(18215),i=r(23104),s=r(56347),o=r(205),l=r(57485),c=r(31682),u=r(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,i=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,d]=m({queryString:r,groupId:n}),[b,w]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:n}),f=(()=>{const e=c??b;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),w(e)}),[d,w,i]),tabValues:i}}var w=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function y(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),n=o[r].value;n!==a&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,n.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function x(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function k(e){const t=(0,w.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var a=r(96540);const n={},i=a.createContext(n);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);