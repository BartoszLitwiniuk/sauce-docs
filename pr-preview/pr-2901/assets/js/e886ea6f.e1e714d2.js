"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[43400],{21045:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(74848),r=t(28453);t(86025),t(11470),t(19365);const s={id:"webhooks",title:"Webhooks",sidebar_label:"Webhooks"},o=void 0,l={id:"testfairy/api-reference/webhooks",title:"Webhooks",description:"Webhooks allow integration between TestFairy and your backend. Using these webhooks, you can subscribe for specific events and receive an HTTP POST request whenever such an event occurs.",source:"@site/docs/testfairy/api-reference/webhooks.md",sourceDirName:"testfairy/api-reference",slug:"/testfairy/api-reference/webhooks",permalink:"/sauce-docs/pr-preview/pr-2901/testfairy/api-reference/webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/api-reference/webhooks.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:1688991597e3,frontMatter:{id:"webhooks",title:"Webhooks",sidebar_label:"Webhooks"},sidebar:"docs",previous:{title:"Upload API",permalink:"/sauce-docs/pr-preview/pr-2901/testfairy/api-reference/upload-api"},next:{title:"Integrating Android SDK",permalink:"/sauce-docs/pr-preview/pr-2901/testfairy/sdk/android/integrating-android"}},i={},d=[{value:"Supported Events",id:"supported-events",level:2},{value:"Payload",id:"payload",level:2},{value:"Sample Payload for Upload Event",id:"sample-payload-for-upload-event",level:3},{value:"Sample Payload for Download Event",id:"sample-payload-for-download-event",level:3},{value:"Sample Payload for Crash Event",id:"sample-payload-for-crash-event",level:3},{value:"Sample Payload for Feedback Event",id:"sample-payload-for-feedback-event",level:3}];function c(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Webhooks allow integration between TestFairy and your backend. Using these webhooks, you can subscribe for specific events and receive an HTTP POST request whenever such an event occurs."}),"\n",(0,n.jsx)(a.p,{children:"You can use the webhooks when, for example, you'd like to receive a notification when a new build is uploaded and send it to the development team. Another example may be that you'd like to save the feedback received in your database or backend."}),"\n",(0,n.jsxs)(a.p,{children:["To configure webhooks, open the Webhooks tab in your ",(0,n.jsx)(a.a,{href:"https://app.testfairy.com/settings/",children:"User Preferences"})," page. You can configure more than one webhook, and each webhook applies to selected projects and selected events."]}),"\n",(0,n.jsxs)(a.p,{children:["TestFairy automatically detects Slack endpoints and sends an appropriate payload. Follow the ",(0,n.jsx)(a.a,{href:"/testfairy/integrations/slack",children:"Slack integration guide"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"supported-events",children:"Supported Events"}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Events"}),(0,n.jsx)(a.th,{children:"Description"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Upload"}),(0,n.jsx)(a.td,{children:"Every time a build is uploaded by one of the team members"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Download"}),(0,n.jsx)(a.td,{children:"Every time a tester downloads a build via invitation link"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Crash"}),(0,n.jsx)(a.td,{children:"Every time the app crashes"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Feedback"}),(0,n.jsx)(a.td,{children:"Every time a tester fills in feedback, whether it's in-app or web"})]})]})]}),"\n",(0,n.jsx)(a.h2,{id:"payload",children:"Payload"}),"\n",(0,n.jsxs)(a.p,{children:["The payload of the HTTP POST request is always JSON. The ",(0,n.jsx)(a.code,{children:"event"})," field specifies the type of event, and all the others are specific for that type. Review the payload examples below for more information about each event's key/value pairs."]}),"\n",(0,n.jsx)(a.h3,{id:"sample-payload-for-upload-event",children:"Sample Payload for Upload Event"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",metastring:"title='Sample Payload for Upload Event'",children:'{\n "event": "upload",\n "timestamp": "2015-07-01 13:37:54",\n "version": "1.0",\n "build": 1,\n "appName": "Demo App",\n "filesize": 563876,\n "iconUrl": "https://testfairy.s3.amazonaws.com/icons/4/68348e8d8265771d64636e2d57bb9a672f812e1a.png",\n "communityUrl": "https://tsfr.io/myapp"\n}\n'})}),"\n",(0,n.jsx)(a.h3,{id:"sample-payload-for-download-event",children:"Sample Payload for Download Event"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",metastring:"title='Sample Payload for Download Event'",children:'{\n "event": "download",\n "timestamp": "2015-07-01 13:37:54",\n "version": "1.0",\n "build": 1,\n "appName": "Demo App",\n "filesize": 563876,\n "buildUrl": "https://app.testfairy.com/projects/10-demoapp/builds/584120",\n "iconUrl": "https://testfairy.s3.amazonaws.com/icons/4/68348e8d8265771d64636e2d57bb9a672f812e1a.png",\n "testerEmail": "bob@corporation.com",\n "referer": "http://my.testfairy.com"\n}\n'})}),"\n",(0,n.jsx)(a.h3,{id:"sample-payload-for-crash-event",children:"Sample Payload for Crash Event"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",metastring:"title='Sample Payload for Crash Event'",children:'{\n "event": "crash",\n "timestamp": "2015-07-01 12:01:59",\n "version": "1.0",\n "build": 1,\n "appName": "Demo App",\n "filesize": 563876,\n "buildUrl": "https://app.testfairy.com/projects/10-demoapp/builds/584120",\n "iconUrl": "https://testfairy.s3.amazonaws.com/icons/4/68348e8d8265771d64636e2d57bb9a672f812e1a.png",\n "email": "felix@corporation.com",\n "deviceName": "Samsung Galaxy S2",\n "rawDeviceName": "samsung gt-i9100t",\n "crashMessage": "java.lang.NullPointerException",\n "ipAddress": "54.227.255.225"\n}\n'})}),"\n",(0,n.jsx)(a.h3,{id:"sample-payload-for-feedback-event",children:"Sample Payload for Feedback Event"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",metastring:"title='Sample Payload for Feedback Event'",children:'{\n "event": "feedback",\n "timestamp": "2015-07-01 17:21:00",\n "version": "1.0",\n "build": 1,\n "appName": "Demo App",\n "filesize": 563876,\n "buildUrl": "https://app.testfairy.com/projects/10-demoapp/builds/584120",\n "iconUrl": "https://testfairy.s3.amazonaws.com/icons/4/68348e8d8265771d64636e2d57bb9a672f812e1a.png",\n "sessionUrl": "https://app.testfairy.com/projects/10-demoapp/builds/584120/sessions/1",\n "screenshotUrl": "https://app.testfairy.com/projects/10-demoapp/builds/584120/sessions/1/screenshots/d64636e2d57672f812e1a348e8.jpg",\n "correlationId": "user-95",\n "email": "alice@corporation.com",\n "rawDeviceName": "samsung gt-i9100t",\n "ipAddress": "54.227.255.225",\n "text": "App doesn\'t render nicely in landscape"\n}\n'})})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19365:(e,a,t)=>{t.d(a,{A:()=>o});t(96540);var n=t(18215);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:a,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,o),hidden:t,children:a})}},11470:(e,a,t)=>{t.d(a,{A:()=>j});var n=t(96540),r=t(18215),s=t(23104),o=t(56347),l=t(205),i=t(57485),d=t(31682),c=t(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}(t);return function(e){const a=(0,d.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const r=(0,o.W6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})}),[s,r])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,s=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:s}))),[d,u]=m({queryString:t,groupId:r}),[f,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,c.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),v=(()=>{const e=d??f;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(74848);function g(e){let{className:a,block:t,selectedValue:n,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const a=e.currentTarget,t=i.indexOf(a),r=l[t].value;r!==n&&(d(a),o(r))},u=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;a=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;a=i[t]??i[i.length-1];break}}a?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a),children:l.map((e=>{let{value:a,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>i.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function x(e){let{lazy:a,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function w(e){const a=f(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,y.jsx)(g,{...e,...a}),(0,y.jsx)(x,{...e,...a})]})}function j(e){const a=(0,b.A)();return(0,y.jsx)(w,{...e,children:u(e.children)},String(a))}},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>l});var n=t(96540);const r={},s=n.createContext(r);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);