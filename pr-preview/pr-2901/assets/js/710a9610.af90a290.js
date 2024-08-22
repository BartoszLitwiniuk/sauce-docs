"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[72564],{47141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(74848),s=t(28453);const i={id:"bloodhound",title:"Introduction",sidebar_label:"Introduction",description:"Bloodhound is an HTTP API microgateway that acts like a reverse proxy to capture, forward, measure, transform, filter and simulate API calls."},r=void 0,a={id:"api-testing/on-prem/bloodhound",title:"Introduction",description:"Bloodhound is an HTTP API microgateway that acts like a reverse proxy to capture, forward, measure, transform, filter and simulate API calls.",source:"@site/docs/api-testing/on-prem/bloodhound.md",sourceDirName:"api-testing/on-prem",slug:"/api-testing/on-prem/bloodhound",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/bloodhound",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/bloodhound.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"bloodhound",title:"Introduction",sidebar_label:"Introduction",description:"Bloodhound is an HTTP API microgateway that acts like a reverse proxy to capture, forward, measure, transform, filter and simulate API calls."},sidebar:"apif",previous:{title:"Assert Valid JSON Schema",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/assertion-components/assert-valid-json-schema"},next:{title:"Basic Configuration",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/bloodhound/basic-configuration"}},c={},l=[{value:"The Stack",id:"the-stack",level:2},{value:"Conventions",id:"conventions",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Bloodhound is an HTTP API microgateway that acts like a reverse proxy to capture, forward, measure, transform, filter and simulate API calls."}),"\n",(0,o.jsx)(n.p,{children:"The pillars of the project are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Modularity"}),": the system should be expandable by the creation of modules. The activation of modules should not require recompilation of repackaging the software. The act of the creation of modules should require the very little knowledge of the inner workings of the software, according to our ",(0,o.jsx)(n.em,{children:"No Esoteric Bullshit"})," policy."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Customization"}),": the user should be able to create various pipelines by connecting different steps from different modules, in order to achieve a certain goal without special boundaries dictated by the modules. If it's not illogical, it should be possible."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Fine tuning"}),": the system performance and resource usage should be fine-tunable by the user, according to their needs and knowledge of how the APIs they're proxying work."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"With developers in mind"}),": the development process should always consider the ability to capture, debug and transform APIs the ",(0,o.jsx)(n.em,{children:"main goal"})," of the project. The tool should be a valuable companion in the process of identifying flaws and weaknesses."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"the-stack",children:"The Stack"}),"\n",(0,o.jsxs)(n.p,{children:["The Bloodhound Microgateway is entirely written in ",(0,o.jsx)(n.strong,{children:"Scala/Akka"}),", and requires ",(0,o.jsx)(n.strong,{children:"Java JRE 8"}),". The technology serving the inbound requests is ",(0,o.jsx)(n.strong,{children:"Apache Tomcat"})," via ",(0,o.jsx)(n.strong,{children:"Spring Boot"}),". The outbound requests are performed by the ",(0,o.jsx)(n.strong,{children:"Apache Async Http Client"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The modules can be written in either Scala or Java."}),"\n",(0,o.jsx)(n.h2,{id:"conventions",children:"Conventions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Upstream"})," is a URL to the original API"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Backend"})," is a configuration that logically connect the characteristics of an inbound request to the ",(0,o.jsx)(n.em,{children:"upstream"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Flow"})," describes a pipeline of actions happening between the inbound request and the ",(0,o.jsx)(n.em,{children:"upstream"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Actor"})," every action in a flow is called an actor, mainly because it's implemented as an Akka Actor"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Sidecar"})," a special type of Actor that will not alter the course of the flow or the content message, and is executed in parallel"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Probe"}),": a special object that is meant to verify whether a certain upstram is available or not, according to a number of preconditions"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Durations"}),": most configuration keys needing to express a certain duration in time can leverage the ",(0,o.jsx)(n.em,{children:"duration notation"}),", a human readable way to express time, as in ",(0,o.jsx)(n.em,{children:"10 seconds"}),", ",(0,o.jsx)(n.em,{children:"1 minute"}),", ",(0,o.jsx)(n.em,{children:"100 milliseconds"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);