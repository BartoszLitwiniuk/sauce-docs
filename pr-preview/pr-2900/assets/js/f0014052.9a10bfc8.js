"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[11065],{78459:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=s(74848),i=s(28453),t=s(86025);const r={id:"expressions-in-mocked-apis",title:"Expressions in Mocked APIs",sidebar_label:"Expressions in Mocked APIs",keywords:["api-testing","mocking","servicevirtualization","expressions"]},o=void 0,c={id:"api-testing/on-prem/mocking/expressions-in-mocked-apis",title:"Expressions in Mocked APIs",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/mocking/expressions-in-mocked-apis.md",sourceDirName:"api-testing/on-prem/mocking",slug:"/api-testing/on-prem/mocking/expressions-in-mocked-apis",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/mocking/expressions-in-mocked-apis",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/mocking/expressions-in-mocked-apis.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"expressions-in-mocked-apis",title:"Expressions in Mocked APIs",sidebar_label:"Expressions in Mocked APIs",keywords:["api-testing","mocking","servicevirtualization","expressions"]},sidebar:"apif",previous:{title:"While",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/logical-components/while"},next:{title:"Mock Recording with Kong (Deprecated)",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/mocking/mock-recording-with-kong"}},l={},d=[{value:"Evaluate a Query",id:"evaluate-a-query",level:2},{value:"Evaluate a Header",id:"evaluate-a-header",level:2},{value:"Multiple Queries",id:"multiple-queries",level:2},{value:"Evaluate a POST body",id:"evaluate-a-post-body",level:2},{value:"Evaluate the URL",id:"evaluate-the-url",level:2},{value:"Use Wildcards",id:"use-wildcards",level:2}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Legacy Documentation"}),(0,a.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,a.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,a.jsx)("img",{src:(0,t.A)("img/api-fortress/2020/01/Screen-Shot-2020-01-28-at-11.36.48-AM.png"),alt:"screeenshot"}),"\n",(0,a.jsx)(n.p,{children:"The expression field in mocking can evaluate multiple fields:"}),"\n",(0,a.jsx)(n.h2,{id:"evaluate-a-query",children:"Evaluate a Query"}),"\n",(0,a.jsx)(n.p,{children:"To evaluate query or post parameters use the following syntax:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"request.params[parameter_name] == 'parameter_value'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"evaluate-a-header",children:"Evaluate a Header"}),"\n",(0,a.jsx)(n.p,{children:"To evaluate a header use the following syntax:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'request.headers[\u2018header_name\u2019]=="header_value"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"multiple-queries",children:"Multiple Queries"}),"\n",(0,a.jsx)(n.p,{children:"You can string multiple queries together using standard Groovy expression language like below:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"AND:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"request.params[parameter_name] == 'parameter_value' &&\nrequest.params[parameter_name] == 'parameter_value'\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"OR:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'request.headers[\u2018header_name\u2019]=="header_value"||request.headers[\u2018header_name\u2019]=="header_value"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"evaluate-a-post-body",children:"Evaluate a POST body"}),"\n",(0,a.jsxs)(n.p,{children:["To evaluate a POST body use the following syntax (this only works with JSON, so content type must be set to ",(0,a.jsx)(n.code,{children:"application/json"}),"):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"request.payload.\u201dleft_side_JSON\u201d==\u201dright_side_JSON\u201d\n"})}),"\n",(0,a.jsx)(n.h2,{id:"evaluate-the-url",children:"Evaluate the URL"}),"\n",(0,a.jsxs)(n.p,{children:["You can also evaluate parts of the mocked url itself, if your mocked URL is ",(0,a.jsx)(n.code,{children:"https://m1-test.apif.apifortress.com/api/users/info"})]}),"\n",(0,a.jsxs)(n.p,{children:["Starting after the ",(0,a.jsx)(n.code,{children:'".com"'})," you have ",(0,a.jsx)(n.code,{children:"\u201capi\u201d=0"}),", ",(0,a.jsx)(n.code,{children:"\u201cusers\u201d=1"}),", ",(0,a.jsx)(n.code,{children:"\u201cinfo\u201d=2"})]}),"\n",(0,a.jsx)(n.p,{children:"Using the following syntax you can evaluate parts of the URL:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"request.pattern[1]==\u201dusers\u201d\n"})}),"\n",(0,a.jsx)(n.h2,{id:"use-wildcards",children:"Use Wildcards"}),"\n",(0,a.jsx)(n.p,{children:"The url can use wildcards like so:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-http",metastring:"request",children:"https://m1-test.apif.apifortress.com/api/users/\\[a-zA-Z0-9\\]\\*\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Which means the last part of the URL can be any string containing a lowercase, uppercase, or number. Then using the ",(0,a.jsx)(n.code,{children:"\u201crequest.pattern\\[2\\]\u201d"})," you can evaluate the last part."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Any manipulation needed in the expression field can be done using Groovy language."})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var a=s(96540);const i={},t=a.createContext(i);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);