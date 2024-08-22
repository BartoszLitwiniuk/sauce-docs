"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[4030],{15247:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=t(74848),i=t(28453),s=t(86025);const r={id:"following-redirects",title:"Following Redirects",sidebar_label:"Following Redirects",keywords:["api-testing","how-to","redirects"]},a=void 0,c={id:"api-testing/on-prem/how-to/following-redirects",title:"Following Redirects",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/following-redirects.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/following-redirects",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/how-to/following-redirects",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/following-redirects.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"following-redirects",title:"Following Redirects",sidebar_label:"Following Redirects",keywords:["api-testing","how-to","redirects"]},sidebar:"apif",previous:{title:"Executing from Cucumber",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/how-to/executing-from-cucumber"},next:{title:"Footprint",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/how-to/footprint"}},l={},d=[{value:"RFC Guidelines",id:"rfc-guidelines",level:2},{value:"Example",id:"example",level:3}];function p(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components},{Head:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(o.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,n.jsxs)(o.p,{children:["By default, API Fortress handles redirects as per RFC standard. So if you are performing a ",(0,n.jsx)(o.code,{children:"GET"})," and the response wants to redirect you somewhere else, you don't need to do anything since the redirect will be followed automatically."]}),"\n",(0,n.jsx)(o.h2,{id:"rfc-guidelines",children:"RFC Guidelines"}),"\n",(0,n.jsx)(o.p,{children:"Now, since the RFC says that a redirected I/O call should perform the same operation as the original call, and given that, say, re-posting, is a security threat, API Fortress will not automatically follow redirects for any other I/O operation."}),"\n",(0,n.jsx)(o.p,{children:"Boring, you may say, but following the exact RFC specifications is how you make sure that any client will not be caught off guard!"}),"\n",(0,n.jsx)(o.p,{children:"This specific scenario can be handled applying the following steps:"}),"\n",(0,n.jsx)(o.h3,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(o.p,{children:["Make the I/O operation (let's consider a ",(0,n.jsx)(o.code,{children:"POST"})," as an example)"]}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["The response header contains the ",(0,n.jsx)(o.strong,{children:"Location"})," field."]}),"\n",(0,n.jsx)("img",{src:(0,s.A)("img/api-fortress/2018/04/step1.jpg"),alt:"step1.jpg"}),"\n",(0,n.jsx)(o.p,{children:"Let's make sure it's there, by performing the call in our console tool."}),"\n",(0,n.jsx)("img",{src:(0,s.A)("img/api-fortress/2018/04/step2highlighted.jpg"),alt:"step2highlighted.jpg"}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["Craft a ",(0,n.jsx)(o.code,{children:"GET"})," to the ",(0,n.jsx)(o.code,{children:"'location'"})," retrieved in the response header of the previous call"]}),"\n",(0,n.jsxs)(o.p,{children:["(i.e. ",(0,n.jsx)(o.code,{children:"${payload_response.headers['location']}"}),")"]}),"\n",(0,n.jsx)("img",{src:(0,s.A)("img/api-fortress/2018/04/Post307.jpg"),alt:"Post307.jpg"}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>a});var n=t(96540);const i={},s=n.createContext(i);function r(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);