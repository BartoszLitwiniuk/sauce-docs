"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[23201],{87458:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=s(74848),i=s(28453),o=s(86025);const r={id:"import-export-tests",title:"Importing, Exporting, and Cloning Tests",sidebar_label:"Test Actions",description:"How to import, export, and clone Sauce Labs API Tests."},l=void 0,c={id:"api-testing/import-export-tests",title:"Importing, Exporting, and Cloning Tests",description:"How to import, export, and clone Sauce Labs API Tests.",source:"@site/docs/api-testing/import-export-tests.md",sourceDirName:"api-testing",slug:"/api-testing/import-export-tests",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/import-export-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/import-export-tests.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1691048477e3,frontMatter:{id:"import-export-tests",title:"Importing, Exporting, and Cloning Tests",sidebar_label:"Test Actions",description:"How to import, export, and clone Sauce Labs API Tests."},sidebar:"docs",previous:{title:"Importing HAR files",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/import-har-files"},next:{title:"Scheduling Tests",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/schedule-test"}},a={},d=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Importing API Tests to Sauce Labs",id:"importing-api-tests-to-sauce-labs",level:2},{value:"Exporting API Tests from Sauce Labs",id:"exporting-api-tests-from-sauce-labs",level:2},{value:"Cloning Tests",id:"cloning-tests",level:2}];function h(e){const t={a:"a",admonition:"admonition",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Importing, exporting, and cloning tests from within Sauce Labs API Testing can be useful for:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Moving tests from one Project to another"}),"\n",(0,n.jsx)(t.li,{children:"Sharing tests with Sauce Labs Support team for help"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For information on moving tests from API Fortress (our legacy platform) to Sauce Labs API Testing, see ",(0,n.jsx)(t.a,{href:"/api-testing/legacy",children:"API Fortress Legacy Migration Guide"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (",(0,n.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["An existing API Testing Project and Test. For details on how to create them, see ",(0,n.jsx)(t.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"importing-api-tests-to-sauce-labs",children:"Importing API Tests to Sauce Labs"}),"\n",(0,n.jsx)(t.p,{children:"To import a Sauce Labs API test:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Log in to Sauce Labs, then click ",(0,n.jsx)(t.strong,{children:"API Testing"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Click on one of your Projects to open it."}),"\n",(0,n.jsxs)(t.li,{children:["From the ",(0,n.jsx)(t.strong,{children:"Tests"})," tab, click ",(0,n.jsx)(t.strong,{children:"Create Test"})," > ",(0,n.jsx)(t.strong,{children:"APIF Test"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,o.A)("img/api-testing/import-tests/create-test.png"),alt:"Create test",width:"500"}),(0,n.jsx)("br",{}),"\nOr, if your Project has no Tests, select ",(0,n.jsx)("b",{children:"Upload Archive"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,o.A)("img/api-testing/import-tests/upload-archive.webp"),alt:"Upload archive",width:"650"})]}),"\n",(0,n.jsx)(t.li,{children:"On your local machine, click the zip file containing your exported test(s)."}),"\n",(0,n.jsxs)(t.li,{children:["Your test(s) will then populate in the ",(0,n.jsx)(t.strong,{children:"Tests"})," tab. It will be labeled ",(0,n.jsx)(t.strong,{children:"No data"})," because it's not been run yet. To run it, click ",(0,n.jsx)(t.strong,{children:"Run"})," (play icon). To rename the test, hover over your test name, then click ",(0,n.jsx)(t.strong,{children:"Edit Test"})," (pencil icon) > ",(0,n.jsx)(t.strong,{children:"Edit Details"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"exporting-api-tests-from-sauce-labs",children:"Exporting API Tests from Sauce Labs"}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Only ",(0,n.jsx)(t.strong,{children:"Published"})," tests can be exported."]})}),"\n",(0,n.jsx)(t.p,{children:"To export a Sauce Labs API test:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Log in to Sauce Labs, then click ",(0,n.jsx)(t.strong,{children:"API Testing"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"Click on any Project."}),"\n",(0,n.jsxs)(t.li,{children:["On the ",(0,n.jsx)(t.strong,{children:"Tests"})," tab, select one or more tests you'd like to export by clicking the checkboxes next to each test name."]}),"\n",(0,n.jsxs)(t.li,{children:["From the nav, click the ",(0,n.jsx)(t.strong,{children:"Export"})," button. This will generate a zip file containing the tests and automatically download it to your local machine."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"cloning-tests",children:"Cloning Tests"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Clone Test"})," feature allows you to clone one or more tests from a Project into the same Project (to move tests between Projects, see ",(0,n.jsx)(t.a,{href:"/api-testing/import-export-tests/",children:"Importing and Exporting API Tests"}),")."]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Only ",(0,n.jsx)(t.strong,{children:"Published"})," tests can be cloned."]})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Log in to Sauce Labs, then click ",(0,n.jsx)(t.strong,{children:"API Testing"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Click on any Project, then click the ",(0,n.jsx)(t.strong,{children:"Tests"})," tab."]}),"\n",(0,n.jsxs)(t.li,{children:["Select the checkbox(es) next to the published Tests that you want to clone.",(0,n.jsx)("br",{}),(0,n.jsx)("img",{src:(0,o.A)("img/api-testing/import-tests/clone.png"),alt:"API Test cloning",width:"500",width:"400"})]}),"\n",(0,n.jsxs)(t.li,{children:["Click the ",(0,n.jsx)(t.strong,{children:"Clone"})," button and wait for the system to clone it."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:'Cloned Tests will be named "[original name] + (n)". For example, if you clone \u201cMy Test\u201d, the clone will be titled \u201cMy Test (1)\u201d. If you clone it again, it would be \u201cMy Test (2)\u201d.'})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>l});var n=s(96540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);