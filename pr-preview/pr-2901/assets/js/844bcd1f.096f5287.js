"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[13197],{85875:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var s=t(74848),o=t(28453),i=(t(11470),t(19365),t(86025));const n={id:"releases",title:"Releases",sidebar_label:"Releases",description:"Monitor stability across released versions of your app with the Releases page."},a=void 0,l={id:"error-reporting/web-console/releases",title:"Releases",description:"Monitor stability across released versions of your app with the Releases page.",source:"@site/docs/error-reporting/web-console/releases.md",sourceDirName:"error-reporting/web-console",slug:"/error-reporting/web-console/releases",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/web-console/releases",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/web-console/releases.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712352404e3,frontMatter:{id:"releases",title:"Releases",sidebar_label:"Releases",description:"Monitor stability across released versions of your app with the Releases page."},sidebar:"backtrace",previous:{title:"Overview",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/web-console/overview"},next:{title:"Triage",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/web-console/triage"}},c={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Set the Version Attribute",id:"set-the-version-attribute",level:3},{value:"Select Versions to Compare",id:"select-versions-to-compare",level:3},{value:"Release Health Metrics",id:"release-health-metrics",level:2},{value:"Through Time Monitoring",id:"through-time-monitoring",level:3},{value:"Stability Metrics Table",id:"stability-metrics-table",level:3},{value:"View Release Details",id:"view-release-details",level:4},{value:"Global Filter",id:"global-filter",level:2}];function h(e){const r={h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"The Backtrace Web Console's Release view gives team leads, project managers, and developers an easy way to monitor and compare release stability, user adoption, and other health metrics."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Monitor an important release as it is launched to quickly identify and prioritize impactful issues"}),"\n",(0,s.jsx)(r.li,{children:"Retroactively compare and explore release stability to learn and improve your processes going forward"}),"\n",(0,s.jsx)(r.li,{children:"Quickly understand the state of your application across versions"}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/error-reporting/console-views/new_releases_page.png"),alt:"The Releases view allows you to monitor release stability."}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/error-reporting/console-views/new_health-metrics-table.png"),alt:"Shows the stability metrics for your project's releases."}),"\n",(0,s.jsx)(r.p,{children:"You can see the user adoption of the versions, the error-free application launches, errors over time, and new errors over time. Additionally, there are quick toggles for error types (crashes, hangs, exceptions) and platforms (iOS, Android, ps4, Nintendo Switch, Xbox, Windows, Linux). The quick toggles are also available in the Overview section."}),"\n",(0,s.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(r.h3,{id:"set-the-version-attribute",children:"Set the Version Attribute"}),"\n",(0,s.jsx)(r.p,{children:'You will want to ensure the Release Comparison View\'s concept of a "Release" is represented by the attribute most relevant to you. Use the pencil icon next to the "Comparing by {attribute}" text at the top of the view to set this as desired.'}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/error-reporting/console-views/edit-version-attribute.png"),alt:"Shows how to set the version attribute for the Releases view."}),"\n",(0,s.jsx)(r.p,{children:"This will bring up a dialogue box that will let you change the attribute which underlies the view. If you are using a custom attribute, make sure that it is properly configured and indexed or it won't show up as an option here."}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/error-reporting/console-views/version-attribute-dialog.png"),alt:"Shows the dialog to set the version attribute for the Releases view."}),"\n",(0,s.jsx)(r.h3,{id:"select-versions-to-compare",children:"Select Versions to Compare"}),"\n",(0,s.jsx)(r.p,{children:'To edit which release versions are being compared on the page, use the pencil icon next to the version numbers towards the top of the page. Note that you can also press the "x" icon next to each version number to quickly exclude it from the list.'}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/error-reporting/console-views/edit-compare-versions.png"),alt:"Shows the dialog to set the version attribute for the Releases view."}),"\n",(0,s.jsx)(r.p,{children:"Pressing the pencil icon will bring up the following dialogue box which can be used to include / exclude versions. Note that you can compare up to 4 versions at a time."}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/error-reporting/console-views/select-versions-dialog.png"),alt:"Shows the dialog to set the version attribute for the Releases view."}),"\n",(0,s.jsx)(r.h2,{id:"release-health-metrics",children:"Release Health Metrics"}),"\n",(0,s.jsx)(r.p,{children:"The Release Comparison View offers a number of metrics + visualizations. Note that every metric on the page is responsive to updates in the global filter bar at the top of the page (as with other Backtrace views)."}),"\n",(0,s.jsx)(r.h3,{id:"through-time-monitoring",children:"Through Time Monitoring"}),"\n",(0,s.jsx)(r.p,{children:"The top section of the page provides a view into the error rates of your project's releases through time, a great way to track the evolution of a release's stability through a launch window and beyond."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Errors over time: Shows your project's error count through time, broken down by release."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"New Errors over time: Shows the count of errors never before seen through time, broken down by release. Great for distinguishing errors introduced by a new release from existing errors / backlog items."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"To see a quick breakdown of errors by release at a given point in time, hover your mouse over the charts."}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/error-reporting/console-views/errors-over-time-by-version.png"),alt:"Shows errors over time by version."}),"\n",(0,s.jsx)(r.p,{children:"Note that as of October 2021, the Backtrace team is planning to add metrics to the page over the coming month including a visualization of user adoption through time and session stability through time."}),"\n",(0,s.jsx)(r.h3,{id:"stability-metrics-table",children:"Stability Metrics Table"}),"\n",(0,s.jsx)(r.p,{children:"The bottom of the page lays out each release with aggregated health / stability metrics. This includes:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"User adoption %"}),"\n",(0,s.jsx)(r.li,{children:"Error-free sessions (% of sessions in which there were no errors)"}),"\n",(0,s.jsx)(r.li,{children:"Error-free users (% of users who have not experienced an error)"}),"\n",(0,s.jsx)(r.li,{children:"New errors"}),"\n",(0,s.jsx)(r.li,{children:"Unique errors"}),"\n",(0,s.jsx)(r.li,{children:"Total errors"}),"\n",(0,s.jsx)(r.li,{children:"Triage status (distribution %)"}),"\n"]}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/error-reporting/console-views/new_health-metrics-table.png"),alt:"Shows the stability metrics for your project's releases."}),"\n",(0,s.jsx)(r.p,{children:"Note that you can see more information for each of the % metrics by hovering over it with your mouse. For example, by hovering over one of the error-free sessions metrics, you can see the number of error-free sessions and total number of sessions."}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/error-reporting/console-views/health-metrics-hover-details.png"),alt:"Shows hover over details for error-free sessions in the stability metrics table."}),"\n",(0,s.jsx)(r.h4,{id:"view-release-details",children:"View Release Details"}),"\n",(0,s.jsx)(r.p,{children:"If you want to drill into a release's details, you can use the button next to the release's name in the health metrics table to quickly open the Triage view, filtered to the selected release."}),"\n",(0,s.jsx)("img",{src:(0,i.A)("img/error-reporting/console-views/view-release-details.png"),alt:"Drills into the release's details in the Triage view."}),"\n",(0,s.jsx)(r.h2,{id:"global-filter",children:"Global Filter"}),"\n",(0,s.jsx)(r.p,{children:"Every widget / health metric on the Release Comparison View is responsive to filters via the global filter bar. Use this in combination with the other features on the page to get the most value out of the page"}),"\n",(0,s.jsx)(r.p,{children:"Example use cases:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Time frame: Filter to only the most recent couple days / errors to carefully monitor a release during the launch window."}),"\n",(0,s.jsx)(r.li,{children:'Logs vs. Errors vs. Crashes: Add the filter "error.type = Crash" to compare crashes only. This can be especially helpful in identifying and prioritizing the most problematic errors'}),"\n",(0,s.jsx)(r.li,{children:"Filter Out Irrelevant Builds: If your release attribute has a pattern that makes it easy to identify development builds vs. production builds, you can filter out non-production builds to reduce noise on the page to focus on what you really care about."}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>n});t(96540);var s=t(18215);const o={tabItem:"tabItem_Ymn6"};var i=t(74848);function n(e){let{children:r,hidden:t,className:n}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,n),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>j});var s=t(96540),o=t(18215),i=t(23104),n=t(56347),a=t(205),l=t(57485),c=t(31682),u=t(89466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:o}}=e;return{value:r,label:t,attributes:s,default:o}}))}(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const o=(0,n.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(o.location.search);r.set(i,e),o.replace({...o.location,search:r.toString()})}),[i,o])]}function g(e){const{defaultValue:r,queryString:t=!1,groupId:o}=e,i=d(e),[n,l]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:i}))),[c,h]=m({queryString:t,groupId:o}),[g,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[o,i]=(0,u.Dv)(t);return[o,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),v=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{v&&l(v)}),[v]);return{selectedValue:n,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function w(e){let{className:r,block:t,selectedValue:s,selectValue:n,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const r=e.currentTarget,t=l.indexOf(r),o=a[t].value;o!==s&&(c(r),n(o))},h=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},r),children:a.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>l.push(e),onKeyDown:h,onClick:u,...i,className:(0,o.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function x(e){const r=g(e);return(0,f.jsxs)("div",{className:(0,o.A)("tabs-container",v.tabList),children:[(0,f.jsx)(w,{...e,...r}),(0,f.jsx)(y,{...e,...r})]})}function j(e){const r=(0,b.A)();return(0,f.jsx)(x,{...e,children:h(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>a});var s=t(96540);const o={},i=s.createContext(o);function n(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);