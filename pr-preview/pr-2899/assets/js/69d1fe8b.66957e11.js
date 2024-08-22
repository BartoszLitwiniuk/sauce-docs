"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[14028],{23105:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=t(74848),s=t(28453),r=t(86025);const i={id:"splunk",title:"Connectors: Splunk",sidebar_label:"Splunk",keywords:["api-testing","integrations","splunk","connectors"]},c=void 0,a={id:"api-testing/on-prem/integrations/connectors/splunk",title:"Connectors: Splunk",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/integrations/connectors/splunk.md",sourceDirName:"api-testing/on-prem/integrations/connectors",slug:"/api-testing/on-prem/integrations/connectors/splunk",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/integrations/connectors/splunk",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/integrations/connectors/splunk.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"splunk",title:"Connectors: Splunk",sidebar_label:"Splunk",keywords:["api-testing","integrations","splunk","connectors"]},sidebar:"apif",previous:{title:"xMatters",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/integrations/connectors/xmatters"},next:{title:"Helper \u2013 Connect to Any Database",permalink:"/sauce-docs/pr-preview/pr-2899/api-testing/on-prem/integrations/helper-databases-jdbc"}},l={},p=[{value:"Configure the Connector",id:"configure-the-connector",level:2},{value:"Example Use Case",id:"example-use-case",level:2},{value:"Video Example",id:"video-example",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,o.jsx)(n.p,{children:"Using the connector, you can send test execution information to Splunk then use that data to create visualizations."}),"\n",(0,o.jsx)(n.p,{children:"Below is a quick guide to setting up and using the Splunk connector."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["This connector does not come pre-loaded out of the box for self-hosted/on-premises, and will need to be loaded separately. To learn how to load the connector into your API Fortress instance ",(0,o.jsx)(n.a,{href:"/api-testing/on-prem/integrations/add-new-connector",children:"click here."})]})}),"\n",(0,o.jsx)(n.h2,{id:"configure-the-connector",children:"Configure the Connector"}),"\n",(0,o.jsx)(n.p,{children:"Note: You can click on the screenshots to zoom in."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Access the company dashboard by clicking the gear icon in the top right corner"}),"\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/04/1.-splunk-settings.png"),alt:"1.-splunk-settings.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Click on \u201cAlert Groups\u201d"}),"\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/04/2.-splunk-alert-groups.png"),alt:"2.-splunk-alert-groups.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Create a new group or add a connector to an existing alert group"}),"\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/04/3.-splunk-add-connector-to-group.png"),alt:"3.-splunk-add-connector-to-group.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add a new connector"}),"\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/04/4.-add-new-connector-1.png"),alt:"4.-add-new-connector-1.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Choose the Splunk connector"}),"\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/04/5.-choose-splunk.png"),alt:"5.-choose-splunk.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Configure the connector"}),"\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/04/6.-configure-splunk-connector.png"),alt:"6.-configure-splunk-connector.png"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"url"}),' - this is the url for "http event collector" generated in ',(0,o.jsx)(n.a,{href:"https://docs.splunk.com/Documentation/SplunkCloud/8.0.2003/Data/UsetheHTTPEventCollector#Configure_HTTP_Event_Collector_on_self-service_Splunk_Cloud",children:"Splunk platform"}),". Please include the port number in the url, but do not include the endpoint."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"hec_token"}),' - this is the token generated for the "http event collector"']}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Go into project settings for a project you would like Splunk connector set up for"}),"\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/04/7.-splunk-project-settings.png"),alt:"7.-splunk-project-settings.png"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add the alert group that contains your Splunk connector to this project"}),"\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/04/8.-splunk-add-alert-group-to-proj.png"),alt:"8.-splunk-add-alert-group-to-proj.png"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example-use-case",children:"Example Use Case"}),"\n",(0,o.jsx)(n.p,{children:"You can create a dataset table of your executions like so:"}),"\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/04/9.-dataset-table.png"),alt:"9.-dataset-table.png"}),"\n",(0,o.jsx)(n.p,{children:"You can also use the data to create visualizations like below:"}),"\n",(0,o.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/04/9.-dashboard-chart.png"),alt:"9.-dashboard-chart.png"}),"\n",(0,o.jsx)(n.p,{children:'In this example, you can see all the tests executed, and the "blue" bar is the total number of successful runs whereas the "green" bar shows the total number of failed runs.'}),"\n",(0,o.jsx)(n.h3,{id:"video-example",children:"Video Example"}),"\n",(0,o.jsx)(n.p,{children:"You can also watch a video walk through of the integration below."}),"\n",(0,o.jsx)(n.a,{href:"https://player.vimeo.com/video/414869023",title:"Splunk Video - Click to Watch!",children:(0,o.jsx)(n.img,{src:"https://i.imgur.com/Qx7hMPk.png",alt:"Splunk Video"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(96540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);