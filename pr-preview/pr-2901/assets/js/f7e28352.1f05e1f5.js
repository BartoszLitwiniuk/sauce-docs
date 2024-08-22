"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[14025],{72127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(74848),i=n(28453);n(86025),n(11470),n(19365);const a={id:"nativescript",title:"Nativescript",sidebar_label:"Nativescript"},s=void 0,o={id:"testfairy/platforms/nativescript",title:"Nativescript",description:"TestFairy for Nativescript is a bridge to the TestFairy SDK. Integrating the TestFairy SDK into your app enables you to better understand how your app performs on real devices. It provides insights into user behavior, session recording, and metrics to optimize your user experience and code.",source:"@site/docs/testfairy/platforms/nativescript.md",sourceDirName:"testfairy/platforms",slug:"/testfairy/platforms/nativescript",permalink:"/sauce-docs/pr-preview/pr-2901/testfairy/platforms/nativescript",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/platforms/nativescript.md",tags:[],version:"current",lastUpdatedBy:"aoleszyn",lastUpdatedAt:1689096934e3,frontMatter:{id:"nativescript",title:"Nativescript",sidebar_label:"Nativescript"},sidebar:"docs",previous:{title:"Lumberyard",permalink:"/sauce-docs/pr-preview/pr-2901/testfairy/platforms/lumberyard"},next:{title:"Neptune Software",permalink:"/sauce-docs/pr-preview/pr-2901/testfairy/platforms/neptune"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Enabling Session Recording",id:"enabling-session-recording",level:2},{value:"User ID and Session Attributes",id:"user-id-and-session-attributes",level:2},{value:"Remote Logging",id:"remote-logging",level:2},{value:"Hiding Views",id:"hiding-views",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"TestFairy for Nativescript is a bridge to the TestFairy SDK. Integrating the TestFairy SDK into your app enables you to better understand how your app performs on real devices. It provides insights into user behavior, session recording, and metrics to optimize your user experience and code."}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"To install the Nativescript TestFairy plugin, run the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"tns plugin add nativescript-testfairy\n"})}),"\n",(0,r.jsx)(t.h2,{id:"enabling-session-recording",children:"Enabling Session Recording"}),"\n",(0,r.jsx)(t.p,{children:"Once the native library is added to your project, you can now enable session recording with TestFairy:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Obtain an app token from your TestFairy account. You can find the app token on the ",(0,r.jsx)(t.a,{href:"http://app.testfairy.com/settings/",children:"Preferences"})," page on your TestFairy account."]}),"\n",(0,r.jsx)(t.li,{children:"Import the TestFairy bridge  from your JavaScript file (app.js or app.ts) into you project."}),"\n",(0,r.jsxs)(t.li,{children:["Invoke the ",(0,r.jsx)(t.code,{children:"begin"}),"  passing in the app token. The best time to invoke ",(0,r.jsx)(t.code,{children:"begin"})," is usually during the ",(0,r.jsx)(t.code,{children:"launchEvent"})," of your application."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Here's an example of how to start your recording in TypeScript:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"import * as application from 'tns-core-modules/application';\nimport { TestFairySDK } from 'nativescript-testfairy';\n\napplication.on(application.launchEvent, (args) => {\n    TestFairySDK.begin(<insert ios app token here>);\n});\n\napplication.start({ moduleName: \"main-page\" });\n"})}),"\n",(0,r.jsx)(t.p,{children:"Here's the same example of starting your recording in JavaScript:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'require("./bundle-config");\nvar application = require("application");\nvar TestFairySDK = require(\'nativescript-testfairy\').TestFairySDK;\n\napplication.on(application.launchEvent, (args) => {\n    TestFairySDK.begin(<insert ios app token here>);\n});\n\napplication.start({ moduleName: "main-page" });\n'})}),"\n",(0,r.jsx)(t.p,{children:"Here's a final sample of starting your recording using Angular:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'import { Component } from "@angular/core";\nimport { TestFairySDK } from \'nativescript-testfairy\';\n\n@Component({\n    moduleId: module.id,\n    selector: "ns-app",\n    templateUrl: "app.component.html"\n})\nexport class AppComponent {\n\tconstructor() {\n\t\tTestFairySDK.begin(<insert ios app token here>);\n\t}\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You can now log in to your ",(0,r.jsx)(t.a,{href:"http://app.testfairy.com",children:"account"})," and view your sessions. For more information regarding available APIs, see the ",(0,r.jsx)(t.a,{href:"https://github.com/testfairy/react-native-testfairy/blob/master/index.js",children:"documentation"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"user-id-and-session-attributes",children:"User ID and Session Attributes"}),"\n",(0,r.jsxs)(t.p,{children:["To learn how to identify users and set session attributes using the TestFairy SDK in Nativescript, refer to the ",(0,r.jsx)(t.a,{href:"/testfairy/sdk/identifying-users/",children:"identifying users section"})," in the SDK Documentation."]}),"\n",(0,r.jsx)(t.h2,{id:"remote-logging",children:"Remote Logging"}),"\n",(0,r.jsxs)(t.p,{children:["To understand how to perform remote logging with the TestFairy SDK in Nativescript, refer to the ",(0,r.jsx)(t.a,{href:"/testfairy/sdk/remote-logging/",children:"remote logging section"})," in the SDK Documentation."]}),"\n",(0,r.jsx)(t.h2,{id:"hiding-views",children:"Hiding Views"}),"\n",(0,r.jsxs)(t.p,{children:["If you want to hide certain views from session recordings, check the ",(0,r.jsx)(t.a,{href:"/testfairy/sdk/identifying-users/",children:"Nativescript section"})," in the SDK Documentation for instructions."]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{}),(0,r.jsxs)(t.p,{children:["To stay updated on the project, report bugs, or contribute to the Nativescript TestFairy plugin, visit the ",(0,r.jsx)(t.a,{href:"https://github.com/testfairy/nativescript-testfairy",children:"GitHub"})," repository."]})]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(18215);const i={tabItem:"tabItem_Ymn6"};var a=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>T});var r=n(96540),i=n(18215),a=n(23104),s=n(56347),o=n(205),l=n(57485),c=n(31682),u=n(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:i}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),v=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(74848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(c(t),s(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function j(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,i.A)("tabs-container",v.tabList),children:[(0,b.jsx)(y,{...e,...t}),(0,b.jsx)(x,{...e,...t})]})}function T(e){const t=(0,g.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);