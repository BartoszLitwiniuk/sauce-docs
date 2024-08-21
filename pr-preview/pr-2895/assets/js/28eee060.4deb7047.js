"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[14254],{74006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(74848),o=t(28453);const i={id:"using-rds-and-documentdb",title:"Using RDS and DocumentDB",sidebar_label:"Using RDS and DocumentDB",keywords:["api","api-fortress","rds","documentdb"]},r=void 0,a={id:"api-testing/on-prem/self-hosted/using-rds-and-documentdb",title:"Using RDS and DocumentDB",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/self-hosted/using-rds-and-documentdb.md",sourceDirName:"api-testing/on-prem/self-hosted",slug:"/api-testing/on-prem/self-hosted/using-rds-and-documentdb",permalink:"/api-testing/on-prem/self-hosted/using-rds-and-documentdb",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/self-hosted/using-rds-and-documentdb.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"using-rds-and-documentdb",title:"Using RDS and DocumentDB",sidebar_label:"Using RDS and DocumentDB",keywords:["api","api-fortress","rds","documentdb"]},sidebar:"apif",previous:{title:"Updating the API Fortress License Key",permalink:"/api-testing/on-prem/self-hosted/updating-the-api-fortress-license-key"}},d={},c=[{value:"RDS",id:"rds",level:2},{value:"DocumentDB",id:"documentdb",level:2},{value:"Premise",id:"premise",level:3},{value:"Steps on AWS",id:"steps-on-aws",level:3},{value:"Changes in the APIF Configuration",id:"changes-in-the-apif-configuration",level:3},{value:"Before you Deploy",id:"before-you-deploy",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"API Fortress supports the use of one or both RDS and DocumentDB instead of the default Postgres and MongoDB. Below we detail the steps needed to make the switch."}),"\n",(0,s.jsx)(n.h2,{id:"rds",children:"RDS"}),"\n",(0,s.jsx)(n.p,{children:"Once Deployed a PostgreSQL 9.5 series RDS instance, the configuration is straight forward. All that is required is to change the PostgreSQL settings in the configuration. Postgres is solely used by the dashboard service."}),"\n",(0,s.jsxs)(n.admonition,{title:"PostGres 9.5 EOL",type:"warning",children:[(0,s.jsx)(n.p,{children:"Amazon no longer supports PostGres 9.5, to use the current PostGres 12 in AWS you will need to change your API Fortress image to:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"apifortress/apifortress:20.2.0-POSTGRES-PATCH\n"})})]}),"\n",(0,s.jsx)(n.p,{children:"The involved configuration keys are:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"psqlhost\npsqlUsername\npsqlPassword\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"Database Name Requirement",type:"caution",children:(0,s.jsxs)(n.p,{children:["The database name MUST BE ",(0,s.jsx)(n.code,{children:"apipulse"})]})}),"\n",(0,s.jsx)(n.h2,{id:"documentdb",children:"DocumentDB"}),"\n",(0,s.jsx)(n.h3,{id:"premise",children:"Premise"}),"\n",(0,s.jsx)(n.p,{children:"We don't use DocumentDB internally. Keep in mind DocumentDB is not MongoDB as a Service, it's a clone developed by Amazon and there are differences. Some incompatibilities have been addressed by us in the software, but we have no data concerning the long term success of Amazon DocumentDB."}),"\n",(0,s.jsx)(n.h3,{id:"steps-on-aws",children:"Steps on AWS"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a DocumentDB cluster. A single instance is perfectly fine as long as backups are configured."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Change the preferences group to disable TLS. Currently, API Fortress does not support TLS transport to DocumentDB (and it would be superfluous as all internal communications in AWS are peer-encrypted)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Make sure you restart your instance once that is done (choose to restart immediately and not during a maintenance window, otherwise you'll wait quite a long time...)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Make sure to assign a security group that allows the communication between your EKS cluster and the DocumentDB cluster. We discovered that as a default, that is not the case."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"changes-in-the-apif-configuration",children:"Changes in the APIF Configuration"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Apply the following changes in the apifortress deployment section:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"set the dbHost key to reflect the DocumentDB endpoint"}),"\n",(0,s.jsx)(n.li,{children:"add the dbUsername key to reflect the DocumentDB username"}),"\n",(0,s.jsx)(n.li,{children:"add the dbPassword key to reflect the DocumentDB password"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Apply the following changes to the afscheduler section:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"set the mongoHost key to reflect the DocumentDB endpoint"}),"\n",(0,s.jsx)(n.li,{children:"add the mongoUsername key to reflect the DocumentDB username"}),"\n",(0,s.jsx)(n.li,{children:"add the mongoPassword key to reflect the DocumentDB password"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Apply the following changes to the afconnector section:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"set the mongoHost key to reflect the DocumentDB endpoint"}),"\n",(0,s.jsx)(n.li,{children:"add the mongoUsername key to reflect the DocumentDB username"}),"\n",(0,s.jsx)(n.li,{children:"add the mongoPassword key to reflect the DocumentDB password"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"before-you-deploy",children:"Before you Deploy"}),"\n",(0,s.jsx)(n.p,{children:"Make sure the Kubernetes or EC2 cluster and the MongoDB instance live in the same VPC"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);