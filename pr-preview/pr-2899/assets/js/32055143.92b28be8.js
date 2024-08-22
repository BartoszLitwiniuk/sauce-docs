"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[86712],{64472:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=s(74848),i=s(28453),a=s(86025);s(11470),s(19365);const r={id:"device-vitals",title:"Device Vitals",sidebar_label:"Device Vitals"},l=void 0,o={id:"mobile-apps/features/mobile-app-diagnostics/device-vitals",title:"Device Vitals",description:"Device Vitals is a functionality that allows you to debug and observe an app\u2019s performance during test execution for both, Live and Automated testing. With this feature, the app's performance is recorded during the test session and displayed for your test results.",source:"@site/docs/mobile-apps/features/mobile-app-diagnostics/device-vitals.md",sourceDirName:"mobile-apps/features/mobile-app-diagnostics",slug:"/mobile-apps/features/mobile-app-diagnostics/device-vitals",permalink:"/sauce-docs/pr-preview/pr-2899/mobile-apps/features/mobile-app-diagnostics/device-vitals",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/features/mobile-app-diagnostics/device-vitals.md",tags:[],version:"current",lastUpdatedBy:"Lysanne Pinto",lastUpdatedAt:1682464564e3,frontMatter:{id:"device-vitals",title:"Device Vitals",sidebar_label:"Device Vitals"},sidebar:"docs",previous:{title:"App Crash Logs",permalink:"/sauce-docs/pr-preview/pr-2899/mobile-apps/features/mobile-app-diagnostics/app-crash-logs"},next:{title:"Interactions",permalink:"/sauce-docs/pr-preview/pr-2899/mobile-apps/features/mobile-app-diagnostics/interactions"}},c={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Using Device Vitals for Real Devices",id:"using-device-vitals-for-real-devices",level:2},{value:"Device Vitals Metrics Overview",id:"device-vitals-metrics-overview",level:2},{value:"CPU Performance",id:"cpu-performance",level:3},{value:"Memory Performance",id:"memory-performance",level:3},{value:"Responsiveness",id:"responsiveness",level:3},{value:"Accessing Device Vitals Metrics",id:"accessing-device-vitals-metrics",level:2},{value:"Limitations",id:"limitations",level:2},{value:"More Information",id:"more-information",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Device Vitals is a functionality that allows you to debug and observe an app\u2019s performance during test execution for both, ",(0,n.jsx)(t.a,{href:"/mobile-apps/live-testing/live-mobile-app-testing/",children:"Live"})," and ",(0,n.jsx)(t.a,{href:"/mobile-apps/automated-testing/",children:"Automated"})," testing. With this feature, the app's performance is recorded during the test session and displayed for your test results."]}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (",(0,n.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,n.jsx)(t.li,{children:"A native Android, iOS, or iPadOS mobile app"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"using-device-vitals-for-real-devices",children:"Using Device Vitals for Real Devices"}),"\n",(0,n.jsx)(t.p,{children:"By default, Device Vitals is enabled if the instrumentation feature is enabled.\nTo enable device instrumentation:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["In Sauce Labs, from the left navigation, click ",(0,n.jsx)(t.strong,{children:"App Management"}),".","\n",(0,n.jsx)("img",{src:(0,a.A)("img/mobile-apps/app-logs5.png"),alt:"App Logs",width:"300"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Upload your mobile app.","\n",(0,n.jsx)("img",{src:(0,a.A)("img/mobile-apps/app-logs-8.png"),alt:"App Logs",width:"700"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["After you\u2019ve uploaded your app, hover your mouse over your app, then select ",(0,n.jsx)(t.strong,{children:"Settings"}),".","\n",(0,n.jsx)("img",{src:(0,a.A)("img/mobile-apps/app-logs-6.png"),alt:"App Logs",width:"700"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Under ",(0,n.jsx)(t.strong,{children:"Real Device Settings"})," toggle ",(0,n.jsx)(t.strong,{children:"Instrumentation"})," to ",(0,n.jsx)(t.strong,{children:"Enabled"}),".","\n",(0,n.jsx)("img",{src:(0,a.A)("img/mobile-apps/app-logs-7.png"),alt:"App Logs",width:"700"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Now you can start your live or automated testing session. Your Device Vitals will be captured and be part of your test results."}),"\n",(0,n.jsx)(t.h2,{id:"device-vitals-metrics-overview",children:"Device Vitals Metrics Overview"}),"\n",(0,n.jsx)(t.p,{children:"When enabled, Device Vitals functionality uses metrics to monitor resources and gives you valuable insight into app\u2019s current performance. The Device Vitals functionality exposes a number of metrics, including:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"CPU Performance"}),"\n",(0,n.jsx)(t.li,{children:"Memory Performance"}),"\n",(0,n.jsxs)(t.li,{children:["Responsiveness ",(0,n.jsx)("span",{className:"sauceGreen",children:"Android Only"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"cpu-performance",children:"CPU Performance"}),"\n",(0,n.jsx)(t.p,{children:"CPU Performance determines how quickly the CPU can retrieve and interpret instructions. It shows the average CPU utilization by computations of the app. This functionality detects CPU leaks and over-usage which lead to overheating, battery drains, crashes, and performance issues."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/mobile-apps/Device-vitals-screenshot-4.png"),alt:"Mobile app settings navigation",width:"600"}),"\n",(0,n.jsx)(t.h3,{id:"memory-performance",children:"Memory Performance"}),"\n",(0,n.jsx)(t.p,{children:"This metric determines the amount of physical memory allocated to the app\u2019s process. It allows you to track and analyze your memory footprint so you can reduce the memory leaks efficiently. You can also utilize the charts to identify the location of outliers."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/mobile-apps/Device-Vitals-screenshot-5.png"),alt:"Mobile app settings navigation",width:"600"}),"\n",(0,n.jsx)(t.h3,{id:"responsiveness",children:"Responsiveness"}),"\n",(0,n.jsx)("span",{className:"sauceGreen",children:"Android Only"}),"\n",(0,n.jsx)(t.p,{children:"The Responsiveness metric allows you to quickly assess the app\u2019s health by tracking how long it takes for an app to respond to action and monitoring the delay of the app\u2019s UI responsiveness. Currently, this metric is only available for Android devices."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/mobile-apps/Device-Vitals-screenshot-6.png"),alt:"Mobile app settings navigation",width:"600"}),"\n",(0,n.jsx)(t.h2,{id:"accessing-device-vitals-metrics",children:"Accessing Device Vitals Metrics"}),"\n",(0,n.jsxs)(t.p,{children:["You can access Device Vitals metrics from the ",(0,n.jsx)(t.a,{href:"/mobile-apps/live-testing/live-mobile-app-testing/",children:"Live Test Results"})," or ",(0,n.jsx)(t.a,{href:"/mobile-apps/automated-testing/",children:"Automated Test Results"})," page:"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/mobile-apps/DEvice-Vitals-screenshot-2.png"),alt:"Mobile app settings navigation",width:"200"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/mobile-apps/Device-Vitals-screenshot-7.png"),alt:"Mobile app settings navigation",width:"200"}),"\n",(0,n.jsx)(t.p,{children:"You will be able to compare your results and analyze the app performance:"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)("img",{src:(0,a.A)("img/mobile-apps/Device-Vitals-Screenshot-3.png"),alt:"Mobile app settings navigation",width:"800"}),"\n",(0,n.jsx)(t.p,{children:"You can also download the results using the API call below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:" curl --compressed \\\n-O https://{SAUCE_USERNAME}:{SAUCE_ACCESS_KEY}@{DATA_CENTER}.saucelabs.com/v1/rdc/jobs/{JOB_ID}/insights.json\n"})}),"\n",(0,n.jsx)(t.h2,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Emulators and Simulators are not supported."}),"\n",(0,n.jsx)(t.li,{children:"Cross-browser testing is not available."}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"more-information",children:"More Information"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/test-results",children:"Sauce Labs Test Results"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var n=s(18215);const i={tabItem:"tabItem_Ymn6"};var a=s(74848);function r(e){let{children:t,hidden:s,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,r),hidden:s,children:t})}},11470:(e,t,s)=>{s.d(t,{A:()=>w});var n=s(96540),i=s(18215),a=s(23104),r=s(56347),l=s(205),o=s(57485),c=s(31682),u=s(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:i}}=e;return{value:t,label:s,attributes:n,default:i}}))}(s);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const i=(0,r.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,o.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function v(e){const{defaultValue:t,queryString:s=!1,groupId:i}=e,a=p(e),[r,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:s,groupId:i}),[v,g]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Dv)(s);return[i,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:i}),b=(()=>{const e=c??v;return h({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=s(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(74848);function x(e){let{className:t,block:s,selectedValue:n,selectValue:r,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,s=o.indexOf(t),i=l[s].value;i!==n&&(c(t),r(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;t=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;t=o[s]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function j(e){let{lazy:t,children:s,selectedValue:i}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=v(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,f.jsx)(x,{...e,...t}),(0,f.jsx)(j,{...e,...t})]})}function w(e){const t=(0,g.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(t))}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var n=s(96540);const i={},a=n.createContext(i);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);