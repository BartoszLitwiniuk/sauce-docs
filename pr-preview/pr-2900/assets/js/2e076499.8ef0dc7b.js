"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[7643],{61805:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=t(74848),n=t(28453),r=t(86025);const i={id:"badges-browser-matrix",title:"Status Badges and the Browser Matrix Widget",sidebar_label:"Status Badges and the Browser Matrix Widget"},o=void 0,d={id:"test-results/badges-browser-matrix",title:"Status Badges and the Browser Matrix Widget",description:"Status badges and the Sauce Labs browser matrix widget help you keep track of the status of your latest test runs. All you have to do is add either markdown or HTML code to your GitHub README or project site that references your Sauce Labs username and access key, and annotate your tests with the REST API.",source:"@site/docs/test-results/badges-browser-matrix.md",sourceDirName:"test-results",slug:"/test-results/badges-browser-matrix",permalink:"/sauce-docs/pr-preview/pr-2900/test-results/badges-browser-matrix",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/test-results/badges-browser-matrix.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1688391867e3,frontMatter:{id:"badges-browser-matrix",title:"Status Badges and the Browser Matrix Widget",sidebar_label:"Status Badges and the Browser Matrix Widget"},sidebar:"docs",previous:{title:"Setting Test Statuses",permalink:"/sauce-docs/pr-preview/pr-2900/test-results/test-status"},next:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2900/insights"}},l={},c=[{value:"Open Sauce Accounts",id:"open-sauce-accounts",level:2},{value:"Build Status Badge Example",id:"build-status-badge-example",level:4},{value:"Browser Matrix Badge Example",id:"browser-matrix-badge-example",level:4},{value:"Setting Up Status Badges for Test Results",id:"setting-up-status-badges-for-test-results",level:3},{value:"Setting Up the Browser Matrix Widget",id:"setting-up-the-browser-matrix-widget",level:3},{value:"Private Accounts",id:"private-accounts",level:2},{value:"Example Demo",id:"example-demo",level:2}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Status badges and the Sauce Labs browser matrix widget help you keep track of the status of your latest test runs. All you have to do is add either markdown or HTML code to your GitHub README or project site that references your Sauce Labs username and access key, and annotate your tests with the REST API."}),"\n",(0,a.jsx)(s.h2,{id:"open-sauce-accounts",children:"Open Sauce Accounts"}),"\n",(0,a.jsxs)(s.p,{children:["Open Sauce accounts are public, meaning tests and build status can be viewed without authentication. To use badges with private accounts, see ",(0,a.jsx)(s.a,{href:"#private-accounts",children:"Private Accounts"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"There are four status badges that correspond to the three states of a finished test: Passing, Failed, Error, and Unknown."}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Badge"}),(0,a.jsx)(s.th,{children:"Status"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)("img",{src:(0,r.A)("img/test-results/browser-badges-passing.png"),alt:"Passing"})}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Passing"}),": All tests in the build passed"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)("img",{src:(0,r.A)("img/test-results/browser-badges-failing.png"),alt:"Failing"})}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Failing"}),": There are failing tests in the build"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)("img",{src:(0,r.A)("img/test-results/browser-badges-error.png"),alt:"Error"})}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Error"}),": This status is set if the build errors out due to an internal server error (one or more sessions have crashed)"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)("img",{src:(0,r.A)("img/test-results/browser-badges-unknown.png"),alt:"Unknown"})}),(0,a.jsxs)(s.td,{children:[(0,a.jsx)(s.strong,{children:"Unknown"}),": This status is set if one or more jobs of the latest build haven't been reported as passed or failed. This state is equivalent to Finished."]})]})]})]}),"\n",(0,a.jsx)(s.p,{children:"With the browser matrix, you can keep track of the test status of your project for various browser/platform/operating system combinations."}),"\n",(0,a.jsx)(s.h4,{id:"build-status-badge-example",children:"Build Status Badge Example"}),"\n",(0,a.jsx)("img",{src:(0,r.A)("img/test-results/build-status-badge.png"),alt:"Build status badge",width:"150"}),"\n",(0,a.jsx)(s.h4,{id:"browser-matrix-badge-example",children:"Browser Matrix Badge Example"}),"\n",(0,a.jsx)("img",{src:(0,r.A)("img/test-results/browser-matrix-badge.png"),alt:"Browser matrix badge",width:"450"}),"\n",(0,a.jsx)(s.h3,{id:"setting-up-status-badges-for-test-results",children:"Setting Up Status Badges for Test Results"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Copy the following markdown code into your GitHub README."}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"[![Sauce Test Status](https://app.saucelabs.com/buildstatus/YOUR_SAUCE_USERNAME)](https://app.saucelabs.com/u/YOUR_SAUCE_USERNAME)\n"})}),"\n",(0,a.jsx)(s.p,{children:"Alternatively, you can use this HTML code on your project site."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-html",children:'<a href="https://app.saucelabs.com/u/YOUR_SAUCE_USERNAME">\n  <img src="https://app.saucelabs.com/buildstatus/YOUR_SAUCE_USERNAME" alt="Sauce Test Status"/>\n</a>\n'})}),"\n",(0,a.jsx)(s.admonition,{title:"Multiple Projects, Multiple Accounts",type:"tip",children:(0,a.jsx)(s.p,{children:"If you just have one project, you can use your main Sauce Labs account name. If you have multiple projects, you should create a sub-account for each project."})}),"\n",(0,a.jsxs)(s.ol,{start:"2",children:["\n",(0,a.jsx)(s.li,{children:"Run your tests."}),"\n",(0,a.jsxs)(s.li,{children:["For every test that runs using the test configuration options:",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["Set a build name on your capabilities (see ",(0,a.jsx)(s.a,{href:"/basics/test-config-annotation/test-annotation/#use-build-ids-tags-and-names-to-identify-your-tests",children:"Use Build IDs, Tags, and Names to Identify Your Tests"}),")."]}),(0,a.jsxs)("li",{children:["Set pass/fail on your tests via some of our different options (see ",(0,a.jsx)(s.a,{href:"/basics/test-config-annotation/test-annotation/#setting-passfail",children:"Setting Pass/Fail"}),")."]}),(0,a.jsxs)("li",{children:["Set test visibility to public (see ",(0,a.jsx)(s.a,{href:"/dev/test-configuration-options/#public",children:"Test Configuration Options - public"}),"). If the visibility shouldn't be public, see ",(0,a.jsx)(s.a,{href:"#private-accounts",children:"Private Accounts"}),"."]})]}),"\nIf these are set correctly, your tests will display a ",(0,a.jsx)(s.strong,{children:"Pass"})," or ",(0,a.jsx)(s.strong,{children:"Failed"})," status instead of ",(0,a.jsx)(s.strong,{children:"Finished"})," on your dashboard, and a build number will also be displayed."]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"setting-up-the-browser-matrix-widget",children:"Setting Up the Browser Matrix Widget"}),"\n",(0,a.jsx)(s.p,{children:"Copy this markdown code into your project's GitHub README."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"[![Sauce Test Status](https://app.saucelabs.com/browser-matrix/YOUR_SAUCE_USERNAME)](https://app.saucelabs.com/u/YOUR_SAUCE_USERNAME)\n"})}),"\n",(0,a.jsx)(s.p,{children:"Alternatively, you can add this HTML to your project site."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-html",children:'<a href="https://app.saucelabs.com/u/YOUR_SAUCE_USERNAME">\n  <img src="https://app.saucelabs.com/browser-matrix/YOUR_SAUCE_USERNAME" alt="Sauce Test Status"/>\n</a>\n'})}),"\n",(0,a.jsx)(s.h2,{id:"private-accounts",children:"Private Accounts"}),"\n",(0,a.jsxs)(s.p,{children:["To display the build status of a private Sauce Labs account, including both status badges and browser matrix badges, you need to provide a ",(0,a.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Hash-based_message_authentication_code",children:"Hash-based Message Authentication Code (HMAC)"})," token generated from your username and access key."]}),"\n",(0,a.jsx)(s.p,{children:"This example shows how to generate an HMAC token using Python:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:'python3 -c \'from hashlib import md5;import hmac;print("?auth=" + hmac.new("YOUR_SAUCE_USERNAME:YOUR_SAUCE_ACCESSKEY".encode(), None, md5).hexdigest())\'\n'})}),"\n",(0,a.jsxs)(s.p,{children:["This is an example to show that the HMAC token should be generated using your Sauce Labs username and access key. You can find many examples of how to accomplish this in other languages with a quick web search, such as ",(0,a.jsx)(s.a,{href:"https://github.com/danharper/hmac-examples",children:"here"}),". As the above example shows, the HMAC token should be generated using the md5 cryptographic algorithm, and with no secret."]}),"\n",(0,a.jsx)(s.p,{children:"Once you have the token, append it to the badge URL:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"https://app.saucelabs.com/buildstatus/YOUR_SAUCE_USERNAME?auth=HMAC_TOKEN\n"})}),"\n",(0,a.jsx)(s.h2,{id:"example-demo",children:"Example Demo"}),"\n",(0,a.jsxs)(s.p,{children:["Follow the instructions below to run the sample demo that exists in the ",(0,a.jsx)(s.a,{href:"https://github.com/saucelabs-training/demo-sauce-status-badge",children:"saucelabs-training"})," GitHub organization:"]}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsx)(s.li,{children:"Clone this repository:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"git clone https://github.com/saucelabs-training/demo-sauce-status-badge.git\n"})}),"\n",(0,a.jsxs)(s.ol,{start:"2",children:["\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsxs)(s.p,{children:["Set your Sauce Labs Credentials as environment variables (for more information, see ",(0,a.jsx)(s.a,{href:"/basics/environment-variables",children:"Using Environment Variables"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["\n",(0,a.jsx)(s.p,{children:"Add the username for the badge and matrix URLs:"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["Build Status Badge Example URL:","\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"[![Build Status](https://app.saucelabs.com/buildstatus/SAUCE_USERNAME)](https://app.saucelabs.com/u/SAUCE_USERNAME)\n"})}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:["Browser Matrix Example URL:","\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"[![Browser Matrix](https://app.saucelabs.com/browser-matrix/SAUCE_USERNAME.svg)](https://app.saucelabs.com/u/SAUCE_USERNAME)\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.ol,{start:"4",children:["\n",(0,a.jsx)(s.li,{children:"Navigate to the project directory and run:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"npm install\n"})}),"\n",(0,a.jsxs)(s.ol,{start:"5",children:["\n",(0,a.jsx)(s.li,{children:"Run the tests with the following command:"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"npm test\n"})})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var a=t(96540);const n={},r=a.createContext(n);function i(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);