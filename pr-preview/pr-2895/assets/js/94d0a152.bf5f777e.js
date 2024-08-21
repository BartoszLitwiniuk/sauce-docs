"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[85495],{75761:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var o=t(74848),r=t(28453),s=t(86025);const i={id:"alerts-thresholds-using-json-connector",title:"Alert Thresholds (Using JSON Connector",sidebar_label:"Alert Thresholds",keywords:["api-testing","integrations","alerts","json","connector"]},a=void 0,c={id:"api-testing/on-prem/integrations/alerts-thresholds-using-json-connector",title:"Alert Thresholds (Using JSON Connector",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/integrations/alerts-thresholds-using-json-connector.md",sourceDirName:"api-testing/on-prem/integrations",slug:"/api-testing/on-prem/integrations/alerts-thresholds-using-json-connector",permalink:"/api-testing/on-prem/integrations/alerts-thresholds-using-json-connector",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/integrations/alerts-thresholds-using-json-connector.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"alerts-thresholds-using-json-connector",title:"Alert Thresholds (Using JSON Connector",sidebar_label:"Alert Thresholds",keywords:["api-testing","integrations","alerts","json","connector"]},sidebar:"apif",previous:{title:"Add New Connector",permalink:"/api-testing/on-prem/integrations/add-new-connector"},next:{title:"Bamboo",permalink:"/api-testing/on-prem/ci/connecting-with-bamboo"}},l={},h=[{value:"Configure the Connector",id:"configure-the-connector",level:2},{value:"Behavior",id:"behavior",level:2},{value:"Typical Use Cases",id:"typical-use-cases",level:2},{value:"Zapier - Webhook to Email",id:"zapier---webhook-to-email",level:3},{value:"IFTTT - Webhook to Email",id:"ifttt---webhook-to-email",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,o.jsx)(n.p,{children:"The JSON Alert Connector sends information about a failure in JSON format and posts it to a given WebHook URL."}),"\n",(0,o.jsxs)(n.p,{children:["The JSON connector with the threshold variation does the same thing with a twist - rather than posting every event, it does so when the error rate exceeds a certain threshold. The connector has been designed to be used with services like ",(0,o.jsx)(n.a,{href:"https://zapier.com/",children:"Zapier"})," or ",(0,o.jsx)(n.a,{href:"https://ifttt.com/",children:"IFTTT"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"It can also work with other similar services, but those are two of the most popular ones."}),"\n",(0,o.jsx)(n.h2,{id:"configure-the-connector",children:"Configure the Connector"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Access the company dashboard by clicking the gear icon in the top right corner"}),"\n",(0,o.jsx)(n.li,{children:'Select "Alert groups"'}),"\n",(0,o.jsx)(n.li,{children:"Create a new alert group if you don't have already one for this purpose"}),"\n",(0,o.jsx)(n.li,{children:"Select the socket icon"}),"\n",(0,o.jsx)(n.li,{children:'Select "+ Connector to this group"'}),"\n",(0,o.jsx)(n.li,{children:'Select "JSON Alert /w threshold" from the list'}),"\n",(0,o.jsxs)(n.li,{children:["Enter the required settings","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"URL:"})," The URL of the WebHook the alert should be sent to."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Counter:"})," The number of ",(0,o.jsx)(n.strong,{children:"errors per specific test in a period"})," before the alert is actually sent out."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"TTL"}),": The time frame, expressed in seconds. (Ex. 3 errors over a TTL of 600sec ",(0,o.jsx)(n.code,{children:"[10 min]"}),")"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Save"}),"\n",(0,o.jsx)(n.li,{children:'From the main dashboard, edit the "Settings" the project(s) you want to assign the alert group to if the group has not been assigned yet'}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"behavior",children:"Behavior"}),"\n",(0,o.jsxs)(n.p,{children:["The connector will collect errors for each specific test. When the first error occurs, the timer expressed by the TTL starts. When the error reaches the ",(0,o.jsx)(n.em,{children:"counter"})," number, the alert is sent and the timer resets."]}),"\n",(0,o.jsx)(n.p,{children:"The JSON sent will look like the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n"date": "2017-12-29T14:36:31+0000",\n"eventId": "5a4aa0a1-d071-4a05-981d-ff57e4ff3897",\n"test": {\n"name": "book",\n"id": "123a"\n},\n"value2": "fake project",\n"value1": "book",\n"companyName": "fake company",\n"eventType": "failure",\n"criticalFailures": [\n{\n"action": "get",\n"expression": "get http://www.example.com",\n"status": "Generic Failure",\n"failureType": "MissingPropertyException",\n"extra": "Error parsing URL. Missing variable yay"\n}\n],\n"companyId": 1,\n"failuresCount": 1,\n"location": "Ashburn,Virginia",\n"projectName": "fake project",\n"projectId": 1\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"typical-use-cases",children:"Typical Use Cases"}),"\n",(0,o.jsx)(n.h3,{id:"zapier---webhook-to-email",children:"Zapier - Webhook to Email"}),"\n",(0,o.jsx)(n.p,{children:"Configure a Zap triggered by a WebHook:"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/12/zapier_1-1.png"),alt:"zapier_1-1.png"}),"\n",(0,o.jsx)(n.p,{children:"That URL is the one that needs to be used in the connector configuration screen."}),"\n",(0,o.jsx)(n.p,{children:'Add a "Send Email" step, and configure it to use the retrieved data:'}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/12/zapier_2.png"),alt:"zapier_2.png"}),"\n",(0,o.jsx)(n.p,{children:"For this example, we used a template like this:"}),"\n",(0,o.jsxs)(n.p,{children:["The test ",(0,o.jsx)(n.code,{children:'"{{30468424__test__name}}"'})," for the project ",(0,o.jsx)(n.code,{children:'"{{30468424__projectName}}"'})," Hit the maxium error threshold."]}),"\n",(0,o.jsx)(n.p,{children:"See a sample event by accessing:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-http",metastring:"request",children:"https://mastiff.apifortress.com/app/web/events/details/{{30468424__eventId}}?cid={{30468424__companyId}}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Where ",(0,o.jsx)(n.code,{children:"30468424"})," is the Zap ID."]}),"\n",(0,o.jsx)(n.h3,{id:"ifttt---webhook-to-email",children:"IFTTT - Webhook to Email"}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2017/12/ifttt_1.png"),alt:"ifttt_1.png"}),"\n",(0,o.jsx)(n.p,{children:"Create an Applet that gets triggered by a WebHook and configure it to send an email."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);