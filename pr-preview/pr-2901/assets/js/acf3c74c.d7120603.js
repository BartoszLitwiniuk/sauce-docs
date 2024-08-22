"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[95807],{48184:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var t=i(74848),a=i(28453),s=i(86025);const r={id:"usage-report",title:"Concurrency Usage Report",sidebar_label:"Usage",description:"Presents the maximum concurrency usage for a given segment of time, aggregated by Month, Week, Day or Hour."},o=void 0,c={id:"insights/usage-report",title:"Concurrency Usage Report",description:"Presents the maximum concurrency usage for a given segment of time, aggregated by Month, Week, Day or Hour.",source:"@site/docs/insights/usage-report.md",sourceDirName:"insights",slug:"/insights/usage-report",permalink:"/sauce-docs/pr-preview/pr-2901/insights/usage-report",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/insights/usage-report.md",tags:[],version:"current",lastUpdatedBy:"adam-saucelabs",lastUpdatedAt:1716929833e3,frontMatter:{id:"usage-report",title:"Concurrency Usage Report",sidebar_label:"Usage",description:"Presents the maximum concurrency usage for a given segment of time, aggregated by Month, Week, Day or Hour."},sidebar:"docs",previous:{title:"Trends",permalink:"/sauce-docs/pr-preview/pr-2901/insights/trends"},next:{title:"Coverage",permalink:"/sauce-docs/pr-preview/pr-2901/insights/coverage"}},l={},u=[{value:"How it Works",id:"how-it-works",level:2},{value:"Available Views",id:"available-views",level:2},{value:"Total Concurrency Usage",id:"total-concurrency-usage",level:3},{value:"VM Concurrency Usage",id:"vm-concurrency-usage",level:3},{value:"Real Device Concurrency and Usage",id:"real-device-concurrency-and-usage",level:3},{value:"Public Device Concurrency",id:"public-device-concurrency",level:4},{value:"Private Device Usage",id:"private-device-usage",level:4},{value:"Usage Reporting Email Notifications",id:"usage-reporting-email-notifications",level:2},{value:"How it Works",id:"how-it-works-1",level:4},{value:"Opting Into Usage Report Emails",id:"opting-into-usage-report-emails",level:4},{value:"How often are emails sent?",id:"how-often-are-emails-sent",level:4}];function d(e){const n={admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Sauce Labs Usage provides you with an accurate view of your concurrency data and lets you compare it to your subscription limit. Your team can cull, filter, and break this data down to best suit your needs. Check your usage of both Virtual Devices and Real Devices to understand your teams' testing patterns. Finding the right cross-section of data is easy and intuitive with a few actions like:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Visualizing the concurrency usage at organization level or by team level."}),"\n",(0,t.jsx)(n.li,{children:"Compare concurrency usage between teams."}),"\n",(0,t.jsx)(n.li,{children:"Adjust date-range filters to understand usage across time."}),"\n",(0,t.jsx)(n.li,{children:"Visualize the maximum concurrency usage as it approaches the subscription limit."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Taking advantage of Suace Labs Usage data is simple. Log into Sauce Labs and from the left panel, expand the ",(0,t.jsx)(n.strong,{children:"Insights"})," section and select ",(0,t.jsx)(n.strong,{children:"Usage"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/insights/left_panel_usage.png"),alt:"Left panel navigation to Insights and Usage"}),"\n",(0,t.jsx)(n.h2,{id:"how-it-works",children:"How it Works"}),"\n",(0,t.jsx)(n.p,{children:"Sauce Labs Usage reporting calculates the maximum concurrency during a given interval of time broken down by Month, Week, Day or Hour for each team with usage greater than zero during that period and presents the information using stacked bars to show how much each team contributed to that usage."}),"\n",(0,t.jsx)(n.h2,{id:"available-views",children:"Available Views"}),"\n",(0,t.jsx)(n.h3,{id:"total-concurrency-usage",children:"Total Concurrency Usage"}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/insights/ccy-org-month-total.png"),alt:"Total concurrency usage at organization level"}),"\n",(0,t.jsx)(n.p,{children:"In this view, the chart shows the total concurrency usage at an organization level compared to the subscription concurrency limit for each month. Each bar shows the maximum number of concurrent executions and adds them up to create the total usage."}),"\n",(0,t.jsx)(n.p,{children:"It is possible that this chart shows values above the organization limit even when teams have not gone above their individual limit. To see the usage at team level, select the corresponding team in the dropdown from the filters."}),"\n",(0,t.jsx)(n.h3,{id:"vm-concurrency-usage",children:"VM Concurrency Usage"}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/insights/ccy-team-month-vms.png"),alt:"VM concurrency usage at team level"}),"\n",(0,t.jsx)(n.p,{children:"Shows the total concurrency, aggregating all devices grouped by team. This information can be broken down by:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"VM Concurrency: Shows the concurrent usage for tests executed on Linux Browsers, Windows Browsers and Android Emulators."}),"\n",(0,t.jsx)(n.li,{children:"Mac VM Concurrency: Shows the concurrent usage for tests executed on Mac OS, Mac OSX and iOS Emulators."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"real-device-concurrency-and-usage",children:"Real Device Concurrency and Usage"}),"\n",(0,t.jsx)(n.p,{children:"With Sauce Labs Real Device usage analytics your organization can get a view of both Public device concurrency usage as well as Private device usage to get the most of your Sauce Labs testing strategy. Our real dvice usage analytics give you many of the same benefits as our Virtual device usage reporting such as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Ability to visualize usage at organization level or by team level."}),"\n",(0,t.jsx)(n.li,{children:"Access to expanded date range data and granularity options."}),"\n",(0,t.jsx)(n.li,{children:"Comparison of usage between teams."}),"\n",(0,t.jsx)(n.li,{children:"Visualize the maximum Public device usage as it approaches the contractual limit."}),"\n",(0,t.jsx)(n.li,{children:"Visualize Private device usage to best utilize your organization's devices."}),"\n",(0,t.jsx)(n.li,{children:"Access to usage data via the Sauce Labs UI and API."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"public-device-concurrency",children:"Public Device Concurrency"}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/insights/ccy-org-month-rdc-public.png"),alt:"Public Real Device concurrency usage at organization level"}),"\n",(0,t.jsx)(n.h4,{id:"private-device-usage",children:"Private Device Usage"}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/insights/Private-usage-hourly.png"),alt:"Private Real Device usage at hourly granularity"}),"\n",(0,t.jsx)(n.h2,{id:"usage-reporting-email-notifications",children:"Usage Reporting Email Notifications"}),"\n",(0,t.jsx)(n.p,{children:"Get clear and consistent updates delivered directly to your inbox when your organization is reaching or approaching different limits of your concurrency subscription. All the benefits of our Usage reporting like visualizing the concurrency usage at an organization level or by team level, comparing concurrency usage between teams, and visualizing the maximum concurrency usage as it approaches the subscription limit are still present in the Usage tab, now with the added benefit of getting better visibility into your subscription usage on a consistent basis via email."}),"\n",(0,t.jsx)("img",{src:(0,s.A)("img/insights/usage-email.png"),alt:"Usage Email"}),"\n",(0,t.jsx)(n.admonition,{title:"Org Admins",type:"note",children:(0,t.jsx)(n.p,{children:"Org admins will be opted into the emails automatically but can choose to disable them via User Settings."})}),"\n",(0,t.jsx)(n.h4,{id:"how-it-works-1",children:"How it Works"}),"\n",(0,t.jsx)(n.p,{children:"There are two emails you may receive once opted into receiving Usage Reports via email."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Concurrency limit approaching: This email will be sent when concurrency limit has reached 95 - 99.9%"}),"\n",(0,t.jsx)(n.li,{children:"Concurrency limit exceeded: This email will be sent when concurrency limit has exceeded 100%"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"opting-into-usage-report-emails",children:"Opting Into Usage Report Emails"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Click Account in the top right of your Sauce Labs account on any page"}),"\n",(0,t.jsx)(n.li,{children:"Select User Settings"}),"\n",(0,t.jsx)(n.li,{children:"Scroll down to Email Settings and click the toggle to enable Usage Reports"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"how-often-are-emails-sent",children:"How often are emails sent?"}),"\n",(0,t.jsx)(n.p,{children:"Once opted in, Usage Reports will be sent once a week on Monday mornings."})]})}function g(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const a={},s=t.createContext(a);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);