"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[82363],{16553:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var i=t(74848),o=t(28453),s=t(86025);const r={id:"mocking-services",title:"Creating a Mocked API",sidebar_label:"Creating a Mocked API",description:"The Mocking tool is a great way to test and define new endpoints."},a=void 0,c={id:"api-testing/on-prem/quick-start/mocking-services",title:"Creating a Mocked API",description:"The Mocking tool is a great way to test and define new endpoints.",source:"@site/docs/api-testing/on-prem/quick-start/mocking-services.md",sourceDirName:"api-testing/on-prem/quick-start",slug:"/api-testing/on-prem/quick-start/mocking-services",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/quick-start/mocking-services",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/quick-start/mocking-services.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"mocking-services",title:"Creating a Mocked API",sidebar_label:"Creating a Mocked API",description:"The Mocking tool is a great way to test and define new endpoints."},sidebar:"apif",previous:{title:"Load Testing",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/quick-start/load-testing"},next:{title:"Easy Monitoring",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/quick-start/easy-monitoring"}},d={},p=[{value:"Step 1 - Access the Mocking Tool",id:"step-1---access-the-mocking-tool",level:2},{value:"Step 2 - Create a New Mock Endpoint",id:"step-2---create-a-new-mock-endpoint",level:2},{value:"Step 4 - Define the Response",id:"step-4---define-the-response",level:2},{value:"Step 5 - Test the Endpoint",id:"step-5---test-the-endpoint",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,o.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Legacy Documentation"}),(0,i.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,i.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,i.jsx)(n.p,{children:"The Mocking Tool is a great way to test and define new endpoints."}),"\n",(0,i.jsx)(n.h2,{id:"step-1---access-the-mocking-tool",children:"Step 1 - Access the Mocking Tool"}),"\n",(0,i.jsx)(n.p,{children:'The Mocking Tool is accessed by clicking on the "Tools" menu in the top navigation bar and clicking "Mocking."'}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2018/06/0-1024x640.png"),alt:"Access Mocking Tool"}),"\n",(0,i.jsx)(n.h2,{id:"step-2---create-a-new-mock-endpoint",children:"Step 2 - Create a New Mock Endpoint"}),"\n",(0,i.jsx)(n.p,{children:'Click either the green "New Endpoint" button or the "+ New Endpoint" button highlighted in the image below to create a new endpoint.'}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2018/06/1-1024x640.png"),alt:"Create a Mock Endpoint"}),"\n",(0,i.jsx)(n.h1,{id:"step-3---define-the-new-endpoint",children:"Step 3 - Define the New Endpoint"}),"\n",(0,i.jsx)(n.p,{children:'Use the "Create Entry" modal to define the domain and path for the mock endpoint.'}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2018/06/2-1024x640.png"),alt:"Define a New Endpoint"}),"\n",(0,i.jsx)(n.p,{children:'Click "Continue", and your new endpoint will be populated in the Domains List.'}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2018/06/3-1024x640.png"),alt:"Populate Domain Lists"}),"\n",(0,i.jsx)(n.h2,{id:"step-4---define-the-response",children:"Step 4 - Define the Response"}),"\n",(0,i.jsx)(n.p,{children:'Click "+Add Response Case" highlighted below.'}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2018/06/4-1024x640.png"),alt:"Define the Response"}),"\n",(0,i.jsx)(n.p,{children:'Choose the method (REST verb), define any parameters, choose the content type, status code and enter an optional description. You can define any necessary key/value header pairs in the "Headers" section.'}),"\n",(0,i.jsx)(n.p,{children:"Finally, define the response payload in the provided space."}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2018/06/5-1024x640.png"),alt:"Define the Payload"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE"}),": To learn more about the Expressions field ",(0,i.jsx)(n.a,{href:"https://apifortress.com/doc/expressions-in-mocked-apis/",children:"click here"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"step-5---test-the-endpoint",children:"Step 5 - Test the Endpoint"}),"\n",(0,i.jsx)(n.p,{children:"Switch to the HTTP client of your choice and enter the address for the endpoint you just created. The response should match the response you set up when you created the mock endpoint. This endpoint is now prepared for use."}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/api-fortress/2018/06/6-1024x640.png"),alt:"Define the Payload"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);