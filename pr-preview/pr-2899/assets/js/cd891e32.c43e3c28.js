"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[50970],{98168:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(74848),n=t(28453);t(86025);const a={id:"getting-started",title:"Error and Crash Reporting",sidebar_label:"Getting Started",description:"Capture error and crash reports from your games and mobile apps with Backtrace."},i=void 0,s={id:"error-reporting/getting-started",title:"Error and Crash Reporting",description:"Capture error and crash reports from your games and mobile apps with Backtrace.",source:"@site/docs/error-reporting/getting-started.md",sourceDirName:"error-reporting",slug:"/error-reporting/getting-started",permalink:"/sauce-docs/pr-preview/pr-2899/error-reporting/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Lysanne Pinto",lastUpdatedAt:1689285256e3,frontMatter:{id:"getting-started",title:"Error and Crash Reporting",sidebar_label:"Getting Started",description:"Capture error and crash reports from your games and mobile apps with Backtrace."},sidebar:"backtrace",next:{title:"What's New",permalink:"/sauce-docs/pr-preview/pr-2899/error-reporting/whats-new"}},d={},c=[{value:"Set Up A Project",id:"set-up-a-project",level:2},{value:"Upload Symbols",id:"upload-symbols",level:2},{value:"Submit Errors",id:"submit-errors",level:2},{value:"Add Attributes",id:"add-attributes",level:2},{value:"Add a Workflow Integration",id:"add-a-workflow-integration",level:2},{value:"Invite Team Members",id:"invite-team-members",level:2},{value:"View and Analyze Errors",id:"view-and-analyze-errors",level:2}];function l(e){const r={a:"a",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"The following provides the steps and best practices for integrating your project with Backtrace."}),"\n",(0,o.jsx)(r.h2,{id:"set-up-a-project",children:"Set Up A Project"}),"\n",(0,o.jsx)(r.p,{children:"You must first create a project in your Backtrace instance. A project is a container that lets you organize your errors. You have to create at least one project to submit your errors to."}),"\n",(0,o.jsx)(r.p,{children:"Best practice is to create one project for each application you wish to capture errors for. Each project has its own workflow integrations, attributes, symbol archives, and submission tokens."}),"\n",(0,o.jsx)(r.h2,{id:"upload-symbols",children:"Upload Symbols"}),"\n",(0,o.jsx)(r.p,{children:"If you are using a minidump-based integration, which includes Breakpad, Crashpad, Unreal and C#, you will need to upload your symbol files to see full debug info on your errors."}),"\n",(0,o.jsx)(r.p,{children:"For Windows users, make sure that you upload both the symbol file (.sym or .pdb format) as well as the corresponding .exe or .dll file. We recommend that you upload these together in a .zip file."}),"\n",(0,o.jsxs)(r.p,{children:["For more information about working with symbols, see ",(0,o.jsx)(r.a,{href:"/error-reporting/project-setup/symbolication/",children:"Symbolication"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"submit-errors",children:"Submit Errors"}),"\n",(0,o.jsx)(r.p,{children:"Submit one or more errors to your instance to verify that your integration is set up properly."}),"\n",(0,o.jsx)(r.p,{children:"The way to do this varies depending on your integration type. Make sure you have the correct submission token and submission URL."}),"\n",(0,o.jsxs)(r.p,{children:["For more information about submitting errors, see our ",(0,o.jsx)(r.a,{href:"/error-reporting/platform-integrations/overview",children:"Integration Guides"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"add-attributes",children:"Add Attributes"}),"\n",(0,o.jsx)(r.p,{children:"We highly recommend that you add attributes to your project and your errors - the more the better. Attributes are important because they allow you to aggregate and filter on important data in the query builder."}),"\n",(0,o.jsx)(r.p,{children:"Make sure to attach the attributes to your errors, as well as declare those attributes in the Backtrace UI."}),"\n",(0,o.jsxs)(r.p,{children:["For more information, see ",(0,o.jsx)(r.a,{href:"/error-reporting/project-setup/attributes/",children:"Attributes"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"add-a-workflow-integration",children:"Add a Workflow Integration"}),"\n",(0,o.jsx)(r.p,{children:"Workflow integrations allow you to have Backtrace automatically alert users of new errors via a popular collaboration platform such as Slack, or a ticketing system like Jira."}),"\n",(0,o.jsxs)(r.p,{children:["We recommend setting up an integration to any third-party service you use that we support. For more information, see ",(0,o.jsx)(r.a,{href:"/error-reporting/workflow-integrations/overview/",children:"Workflow Integrations"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"invite-team-members",children:"Invite Team Members"}),"\n",(0,o.jsx)(r.p,{children:"Backtrace makes it easy to add additional engineers to the system. For Backtrace-hosted instances, you can invite team members to join your projects. You also can allow team members to request an invitation from the login page by adding a whitelisted domain."}),"\n",(0,o.jsxs)(r.p,{children:["For enterprise users who are hosting their own instance, you'll also need to ",(0,o.jsx)(r.a,{href:"/error-reporting/advanced/coroner/server-setup/",children:"set up SMTP in coronerd"})," before users can receive invitations."]}),"\n",(0,o.jsxs)(r.p,{children:["For more information, see ",(0,o.jsx)(r.a,{href:"/error-reporting/org-settings/user-mgmnt/",children:"Account Management"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"view-and-analyze-errors",children:"View and Analyze Errors"}),"\n",(0,o.jsx)(r.p,{children:"View and analyze error and crash data in the web console so you can triage, prioritize, and resolve each error."}),"\n",(0,o.jsxs)(r.p,{children:["For more information, see ",(0,o.jsx)(r.a,{href:"/error-reporting/web-console/getting-started/",children:"Web Console Getting Started"}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>s});var o=t(96540);const n={},a=o.createContext(n);function i(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);