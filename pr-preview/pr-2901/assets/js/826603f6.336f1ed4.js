"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[474],{70850:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(74848),i=t(28453);const o={id:"config-okta",title:"Configuring Okta",sidebar_label:"Configuring Okta"},r=void 0,a={id:"basics/sso-deprecated/config-okta",title:"Configuring Okta",description:"Deprecated",source:"@site/docs/basics/sso-deprecated/config-okta.md",sourceDirName:"basics/sso-deprecated",slug:"/basics/sso-deprecated/config-okta",permalink:"/sauce-docs/pr-preview/pr-2901/basics/sso-deprecated/config-okta",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/sso-deprecated/config-okta.md",tags:[],version:"current",lastUpdatedBy:"Przemyslaw Zukowski",lastUpdatedAt:1683836928e3,frontMatter:{id:"config-okta",title:"Configuring Okta",sidebar_label:"Configuring Okta"},sidebar:"docs",previous:{title:"Configuring Active Directory Federation Services (AD FS)",permalink:"/sauce-docs/pr-preview/pr-2901/basics/sso-deprecated/config-adfs"},next:{title:"Test Configuration",permalink:"/sauce-docs/pr-preview/pr-2901/basics/test-config-annotation/test-config"}},c={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{children:(0,s.jsx)("span",{className:"sauceGold",children:"Deprecated"})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["This SSO flow has been ",(0,s.jsx)(n.code,{children:"deprecated"}),". Use this documentation only if your organization was not migrated to the new SSO."]}),(0,s.jsxs)(n.p,{children:["If you do not have any SSO integrations set up at Sauce Labs and you wish to establish a new integration, see ",(0,s.jsx)(n.a,{href:"/basics/sso/setting-up-sso",children:"Setting Up SSO"})," to get started."]}),(0,s.jsxs)(n.p,{children:["If you have previously implemented the deprecated SSO integration and wish to migrate to the new SSO implementation, see the ",(0,s.jsx)(n.a,{href:"/basics/sso/migration-from-deprecated-sso/",children:"step-by-step migration guide"}),"."]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Log in to ",(0,s.jsx)(n.strong,{children:"Okta"})," with administrator credentials."]}),"\n",(0,s.jsxs)(n.li,{children:["On the ",(0,s.jsx)(n.strong,{children:"Applications"})," tab, search for and select the ",(0,s.jsx)(n.strong,{children:"Sauce Labs"})," application."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Add"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["On the ",(0,s.jsx)(n.strong,{children:"General Settings"})," page of the setup wizard, enter an ",(0,s.jsx)(n.strong,{children:"Application label"}),", and next to ",(0,s.jsx)(n.strong,{children:"Browser plugin auto-submit"}),", select the ",(0,s.jsx)(n.strong,{children:"Automatically log in when user lands on login page"})," checkbox."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Next"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["On the ",(0,s.jsx)(n.strong,{children:"Sign-On Options"})," page of the setup wizard, in the SAML 2.0 section, click the ",(0,s.jsx)(n.strong,{children:"Identity Provider metadata"})," link to download the metadata file. You will need to upload this file to Sauce Labs when you configure single sign-on."]}),"\n",(0,s.jsxs)(n.li,{children:["Under ",(0,s.jsx)(n.strong,{children:"Credential Details"}),", next to ",(0,s.jsx)(n.strong,{children:"Application username format"}),", select ",(0,s.jsx)(n.strong,{children:"Email"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Done"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["On the application details page, in the ",(0,s.jsx)(n.strong,{children:"Assign"})," dropdown, click ",(0,s.jsx)(n.strong,{children:"Assign to People"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:"Assign Sauce Labs to People"})," window, next to the users or groups you want to give SSO access to, click ",(0,s.jsx)(n.strong,{children:"Assign"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Click ",(0,s.jsx)(n.strong,{children:"Done"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Follow the instructions in ",(0,s.jsx)(n.a,{href:"/basics/acct-team-mgmt/org-settings/#single-sign-on-settings-deprecated-flow",children:"Single Sign-On Settings (Deprecated Flow)"})," to complete the integration of Sauce Labs with your Okta instance."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The Sauce Labs app on the Okta Application Network only supports access to ",(0,s.jsx)(n.strong,{children:"us-west-1"}),". If you need to configure access for another data center, please follow the instructions for general setup of SSO."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);