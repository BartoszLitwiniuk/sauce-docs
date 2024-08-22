"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[90490],{10118:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>h,toc:()=>d});var i=s(74848),r=s(28453),n=s(86025);const o={id:"scope",title:"Customizing the Insights Scope",sidebar_label:"Customizing Scope",description:"Tailor the Sauce Labs Insights dashboard to zero in on the results that help you identify and solve your app imperfections."},a=void 0,h={id:"insights/scope",title:"Customizing the Insights Scope",description:"Tailor the Sauce Labs Insights dashboard to zero in on the results that help you identify and solve your app imperfections.",source:"@site/docs/insights/scope.md",sourceDirName:"insights",slug:"/insights/scope",permalink:"/sauce-docs/pr-preview/pr-2899/insights/scope",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/insights/scope.md",tags:[],version:"current",lastUpdatedBy:"Yu Yi",lastUpdatedAt:1718016835e3,frontMatter:{id:"scope",title:"Customizing the Insights Scope",sidebar_label:"Customizing Scope",description:"Tailor the Sauce Labs Insights dashboard to zero in on the results that help you identify and solve your app imperfections."},sidebar:"docs",previous:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2899/insights"},next:{title:"Job History",permalink:"/sauce-docs/pr-preview/pr-2899/insights/history"}},c={},d=[{value:"Touring the Interface",id:"touring-the-interface",level:2},{value:"Using Filters to Adjust the Scope of Your Data",id:"using-filters-to-adjust-the-scope-of-your-data",level:2}];function l(e){const t={a:"a",admonition:"admonition",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The Sauce Labs ",(0,i.jsx)(t.strong,{children:"Insights"})," section allows you to view your test data from a variety of different perspectives to ensure that you can see both the big picture of your testing effectiveness and the individual slices of test data that help you pinpoint failure causes and fix them."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Sauce Labs has also published an ",(0,i.jsx)(t.a,{href:"/dev/api/insights",children:"Insights API"})," so you can build a custom dashboard with views that are specific to your test strategy."]})}),"\n",(0,i.jsx)(t.h2,{id:"touring-the-interface",children:"Touring the Interface"}),"\n",(0,i.jsxs)(t.p,{children:["Access the ",(0,i.jsx)(t.strong,{children:"Insights"})," menu from the left-side navigation menu of our web app. From here, you have access to the six primary views of your test data."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Page"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Job Overview"}),(0,i.jsxs)(t.td,{children:["Shows a variety of views of the data related to all the tests executed that match the specified filter criteria broken into two focus tabs. ",(0,i.jsx)("br",{}),"The ",(0,i.jsx)(t.strong,{children:"Overview"})," tab shows test case health snapshot, test summary, and test breakdowns (browser, OS, Frameworks, Devices) and you can filter for ",(0,i.jsx)(t.strong,{children:"Virtual Cloud"})," (VDC) or ",(0,i.jsx)(t.strong,{children:"Real Devices"})," (RDC). ",(0,i.jsx)("br",{}),"The ",(0,i.jsx)(t.strong,{children:"Errors"})," tab shows the total number of errors across the execution of all tests in the filter for either ",(0,i.jsx)(t.strong,{children:"Virtual Cloud"})," or ",(0,i.jsx)(t.strong,{children:"Real Devices"}),", along with a graph depicting the error rate over time. Below, there is a breakdown of each error with the number of times it occurred in the period, and you can click any of them to see the list of tests in which it occurred."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Job History"}),(0,i.jsxs)(t.td,{children:["Shows a visual snapshot of the results for a specific test over time. See the ",(0,i.jsx)(t.a,{href:"/insights/history",children:"Test History"})," page for specific views and capabilities descriptions."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Trends"}),(0,i.jsxs)(t.td,{children:["Shows graphical visualizations of all tests. Applying filters to this view makes comparing test outcomes for different variables, such as the device browser version, manageable. See the ",(0,i.jsx)(t.a,{href:"/insights/trends",children:"Trends"})," page for detailed documentation."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Coverage"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("small",{children:(0,i.jsx)("span",{className:"sauceGreen",children:"Org Admin Only"})})," Shows the breakdown of browsers and devices against which you've run tests, giving you an idea of how comprehensively you are testing across different platforms so you can align your test strategy with your own market usage data."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"VM Concurrency"}),(0,i.jsxs)(t.td,{children:["Shows how many VM instances are in use simultaneously at any given time. See ",(0,i.jsx)(t.a,{href:"/basics/acct-team-mgmt/concurrency/managing-concurrency",children:"Team Concurrency"})," for information about how concurrency is allocated."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Failure Analysis"}),(0,i.jsxs)(t.td,{children:["Exposes the results of the Sauce Labs machine learning algorithms that comb through every command run in every test and each error thrown in those tests to determine emerging patterns. See the ",(0,i.jsx)(t.a,{href:"/insights/failure-analysis",children:"Failure Analysis"})," page for detailed documentation."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"using-filters-to-adjust-the-scope-of-your-data",children:"Using Filters to Adjust the Scope of Your Data"}),"\n",(0,i.jsxs)(t.p,{children:["At the top of each page in the ",(0,i.jsx)(t.strong,{children:"Insights"})," interface is a set of properties by which you can filter the data shown on that page. As you specify values for each property, the setting is shown below the filters bar and the data on the page refreshes to reflect the applied filters."]}),"\n",(0,i.jsx)("img",{src:(0,n.A)("img/insights/ins-filters.png"),alt:"Applied Filters",width:"750"}),"\n",(0,i.jsx)(t.p,{children:"The following table describes each of the filters available for customizing your test insights data."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Filter"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Owner"}),(0,i.jsx)(t.td,{children:"Show data for tests owned by one or more individuals, teams, or your whole organization. Depending on your access and role in your organization or team, you will see different options here."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Build"}),(0,i.jsx)(t.td,{children:"Show data for tests that are included in specified builds, or groups of related tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OS"}),(0,i.jsx)(t.td,{children:"Show data for tests run on the specified operating systems. The menu lists each OS version separately."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Browser"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("small",{children:(0,i.jsx)("span",{className:"sauceGreen",children:"VDC Only"})})," Show data for tests run on the specified browsers. The menu lists each browser version separately so you can compare versions of the same browser."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Device"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("small",{children:(0,i.jsx)("span",{className:"sauceGreen",children:"RDC Only"})})," Show data for tests run on a specified device. The menu lists each device version separately so you can compare versions of the same device."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Device Group"}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)("small",{children:(0,i.jsx)("span",{className:"sauceGreen",children:"RDC Only"})})," Show data for tests run on a ",(0,i.jsx)(t.strong,{children:"Private"})," or ",(0,i.jsx)(t.strong,{children:"Public"})," device."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Framework"}),(0,i.jsx)(t.td,{children:"Show data for tests run on specific framework."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Tag"}),(0,i.jsxs)(t.td,{children:["Show data for tests or builds that are categorized using the specified tag(s).The ",(0,i.jsx)(t.strong,{children:"Tag"})," filter is not available for all sections of the Insights interface."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Time Period"}),(0,i.jsxs)(t.td,{children:["Show data for tests that were executed in the specified time period. In the selection modal, choose the ",(0,i.jsx)(t.strong,{children:"Relative"})," tab to set a duration up through the current day and time. Choose the ",(0,i.jsx)(t.strong,{children:"Absolute"})," tab to set a specific window between start and end dates.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Times and dates are in the local time of the logged-in user. If you do not see the data you expect in that duration, consider whether the test was executed in a different time zone."]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Check out the individual sections of the Insights feature documentation for use cases illustrating how filtering your data view can help you pinpoint errors or inefficiencies in your tests so you can be confident that your app is functioning optimally."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var i=s(96540);const r={},n=i.createContext(r);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);