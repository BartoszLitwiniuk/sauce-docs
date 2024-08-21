"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[17483],{87615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var i=n(74848),s=n(28453),o=n(86025);const a={id:"tweaking-stateful-email-notifications",title:"Email Notification Adjustments (Environments, Thresholds, Disable)",sidebar_label:"Email Notification Adjustments",keywords:["api-testing","how-to","stateful-email-notifications"]},r=void 0,l={id:"api-testing/on-prem/how-to/tweaking-stateful-email-notifications",title:"Email Notification Adjustments (Environments, Thresholds, Disable)",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/tweaking-stateful-email-notifications.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/tweaking-stateful-email-notifications",permalink:"/api-testing/on-prem/how-to/tweaking-stateful-email-notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/tweaking-stateful-email-notifications.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712351123e3,frontMatter:{id:"tweaking-stateful-email-notifications",title:"Email Notification Adjustments (Environments, Thresholds, Disable)",sidebar_label:"Email Notification Adjustments",keywords:["api-testing","how-to","stateful-email-notifications"]},sidebar:"apif",previous:{title:"Dynamic Dates",permalink:"/api-testing/on-prem/how-to/dynamic-dates"},next:{title:"Executing from Cucumber",permalink:"/api-testing/on-prem/how-to/executing-from-cucumber"}},c={},h=[{value:"Preamble",id:"preamble",level:2},{value:"The FACT Component",id:"the-fact-component",level:2},{value:"Use a FACT to Set Alert Environments",id:"use-a-fact-to-set-alert-environments",level:2},{value:"Use a FACT to Disable Emails Alerts",id:"use-a-fact-to-disable-emails-alerts",level:2},{value:"Use a FACT to Set Email Alert Thresholds",id:"use-a-fact-to-set-email-alert-thresholds",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Head:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Legacy Documentation"}),(0,i.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,i.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,i.jsx)(t.h2,{id:"preamble",children:"Preamble"}),"\n",(0,i.jsx)(t.p,{children:"With the introduction of stateful email notifications (version=2) the API Fortress mailer will notify you when a test starts failing, and notify you again when the test is back in full working order. The identifier of the incident that allows the system to track the events is the ID of the test itself."}),"\n",(0,i.jsx)(t.p,{children:"However, in a multi-environment testing strategy, the ID of the test may not be sufficient anymore, as an incident may relate to different environments. Therefore, the test needs to inform the mailer which environment the execution relates too, so that the incident signature will carry the environment as well."}),"\n",(0,i.jsx)(t.h2,{id:"the-fact-component",children:"The FACT Component"}),"\n",(0,i.jsx)(t.p,{children:"The Fact component can be added to any test, and is meant to add some extra information (facts) about the nature of the execution, and can contain static or dynamic data."}),"\n",(0,i.jsx)(t.p,{children:"A FACT has an ID (which should be unique within the test), a label (to help the understanding of the fact), and a value (that is a string supporting the template language ${...})."}),"\n",(0,i.jsx)(t.p,{children:"A specific FACT can be used to control the incident behavior previously discussed."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The FACT component should be set as high up in the test as possible, as if the test reaches its fail limit before the FACT then it will not be set."})}),"\n",(0,i.jsx)(t.h2,{id:"use-a-fact-to-set-alert-environments",children:"Use a FACT to Set Alert Environments"}),"\n",(0,i.jsxs)(t.p,{children:["Assume that in the variable scope of your test you have a variable called ",(0,i.jsx)(t.em,{children:"env"})," that contains your environment string (",(0,i.jsx)(t.em,{children:"production, staging, qa"})," etc.)."]}),"\n",(0,i.jsx)(t.p,{children:"By configuring a FACT in the following way, you can add the environment value to the incident signature:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"FACT id: environment\nlabel: The current environment\nvalue: ${env}\n"})}),"\n",(0,i.jsx)("img",{src:(0,o.A)("img/api-fortress/2019/11/Screen-Shot-2019-11-11-at-11.21.50-AM.png"),alt:"screenshot.png"}),"\n",(0,i.jsxs)(t.p,{children:["From this moment on, the signature of the incident will be ",(0,i.jsx)(t.code,{children:"id_of_the_test"})," + ",(0,i.jsx)(t.code,{children:"value_of_environment"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, you will receive start/end incidents for ",(0,i.jsx)(t.code,{children:"test123"})," in the production environment, and start/end incidents for ",(0,i.jsx)(t.code,{children:"test123"})," in the staging environment, as separate flow of events."]}),"\n",(0,i.jsx)(t.p,{children:"You can use anything as value of the environment, such as domain names, IDs etc."}),"\n",(0,i.jsx)(t.h2,{id:"use-a-fact-to-disable-emails-alerts",children:"Use a FACT to Disable Emails Alerts"}),"\n",(0,i.jsx)(t.p,{children:"A second use-case is disabling email notifications for the test from within the test:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"FACT id: disable_alerts\nlabel: whatever you want here\nvalue: true\n"})}),"\n",(0,i.jsx)("img",{src:(0,o.A)("img/api-fortress/2019/11/Screen-Shot-2019-11-11-at-11.22.02-AM.png"),alt:"screenshot.png"}),"\n",(0,i.jsx)(t.p,{children:"You can use logic within the test to set the FACT component and use that to alter the email notification."}),"\n",(0,i.jsx)(t.p,{children:'As an example, you could say "IF the env is development, then disable emails for this test":'}),"\n",(0,i.jsx)("img",{src:(0,o.A)("img/api-fortress/2019/11/Screen-Shot-2019-11-11-at-11.33.57-AM.png"),alt:"screenshot.png"}),"\n",(0,i.jsx)(t.h2,{id:"use-a-fact-to-set-email-alert-thresholds",children:"Use a FACT to Set Email Alert Thresholds"}),"\n",(0,i.jsxs)(t.p,{children:["Another use-case of the fact component is set an email alert threshold. If you want a test to fail more than once before an email is sent, a FACT called ",(0,i.jsx)(t.code,{children:"mail_threshold"})," can be set in the test:"]}),"\n",(0,i.jsx)("img",{src:(0,o.A)("img/api-fortress/2020/07/Screen-Shot-2020-07-07-at-12.56.25-PM.png"),alt:"screenshot.png"}),"\n",(0,i.jsx)(t.p,{children:"This means the test will need to fail twice in a row before an email alert is sent."}),"\n",(0,i.jsx)(t.p,{children:"Given that this can be configured within the test, it offers all the flexibility provided by conditional statements, such as an IF condition on the environment the test is running upon:"}),"\n",(0,i.jsx)("img",{src:(0,o.A)("img/api-fortress/2020/07/Screen-Shot-2020-07-07-at-12.59.24-PM.png"),alt:"screenshot.png"})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);