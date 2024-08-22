"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[14590],{90295:(s,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var e=i(74848),t=i(28453),a=i(86025);const o={id:"configuring-sso-in-okta",title:"Configuring SSO in Okta",sidebar_label:"Configuring Okta"},r=void 0,c={id:"basics/sso/configuring-sso-in-okta",title:"Configuring SSO in Okta",description:"Enterprise Plans only",source:"@site/docs/basics/sso/configuring-sso-in-okta.md",sourceDirName:"basics/sso",slug:"/basics/sso/configuring-sso-in-okta",permalink:"/sauce-docs/pr-preview/pr-2900/basics/sso/configuring-sso-in-okta",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/sso/configuring-sso-in-okta.md",tags:[],version:"current",lastUpdatedBy:"Adam Dabrowski",lastUpdatedAt:1712661506e3,frontMatter:{id:"configuring-sso-in-okta",title:"Configuring SSO in Okta",sidebar_label:"Configuring Okta"},sidebar:"docs",previous:{title:"Configuring MS Azure AD",permalink:"/sauce-docs/pr-preview/pr-2900/basics/sso/configuring-sso-in-ms-azure-ad"},next:{title:"Configuring OneLogin",permalink:"/sauce-docs/pr-preview/pr-2900/basics/sso/configuring-sso-in-onelogin"}},l={},d=[];function g(s){const n={a:"a",admonition:"admonition",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...s.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{children:(0,e.jsx)("span",{className:"sauceGreen",children:"Enterprise Plans only"})}),"\n",(0,e.jsx)(n.p,{children:"Sauce Labs app from the Okta catalog supports the following features:"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.a,{href:"/basics/sso/logging-in-via-sso/#service-provider-sp-initiated-sso",children:"SP-initiated SSO"}),"."]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.a,{href:"/basics/sso/logging-in-via-sso/#identity-provider-idp-initiated-sso",children:"IdP-initiated SSO"}),"."]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.a,{href:"/basics/sso/setting-up-sso/#just-in-time-jit-provisioning",children:"JIT (Just-In-Time) Provisioning"}),"."]}),"\n",(0,e.jsxs)(n.li,{children:[(0,e.jsx)(n.a,{href:"/basics/sso/setting-up-sso/#enforce-saml-sso---big-bang-configuration",children:"Big Bang configuration"}),"."]}),"\n"]}),"\n",(0,e.jsx)(n.p,{children:"Complete the following steps to set up SAML SSO integration between Okta and Sauce Labs:"}),"\n",(0,e.jsxs)(n.ol,{children:["\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Log into ",(0,e.jsx)(n.strong,{children:"Okta"})," administrator panel, go to ",(0,e.jsx)(n.strong,{children:"Applications"})," and click ",(0,e.jsx)(n.strong,{children:"Browse App Catalog"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,a.A)("img/basics/sso/idp-config/okta/browse-app-catalog.png"),alt:"Browse App Catalog",width:"850"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Search for ",(0,e.jsx)(n.strong,{children:"Sauce Labs"}),", then select the ",(0,e.jsx)(n.a,{href:"https://www.okta.com/integrations/sauce-labs-0/",children:(0,e.jsx)(n.strong,{children:"Sauce Labs"})})," app."]}),"\n",(0,e.jsx)(n.admonition,{type:"caution",children:(0,e.jsx)(n.p,{children:"Ensure that you install the new Sauce Labs app featuring the green logo. The app with the previous red logo is considered a legacy version and should not be used for new SSO integrations. It is integrated with the deprecated SSO implementation."})}),"\n",(0,e.jsx)("br",{}),"\n",(0,e.jsx)("img",{src:(0,a.A)("img/basics/sso/idp-config/okta/search-app.png"),alt:"Search For Sauce Labs",width:"800"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Click ",(0,e.jsx)(n.strong,{children:"Add Integration"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,a.A)("img/basics/sso/idp-config/okta/add-integration.png"),alt:"Add Integration",width:"600"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Change the name of the application or leave the default value and click ",(0,e.jsx)(n.strong,{children:"Done"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,a.A)("img/basics/sso/idp-config/okta/rename-app.png"),alt:"Rename App",width:"800"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Next, assign users to this application. Click ",(0,e.jsx)(n.strong,{children:"Assign"})," and assign specific accounts or groups."]}),"\n",(0,e.jsx)("img",{src:(0,a.A)("img/basics/sso/idp-config/okta/assign-people-groups.png"),alt:"Assign People or Groups",width:"650"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Open the ",(0,e.jsx)(n.strong,{children:"Sign On"})," tab."]}),"\n",(0,e.jsx)("img",{src:(0,a.A)("img/basics/sso/idp-config/okta/sign-on-tab.png"),alt:"Sign On Tab",width:"450"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["In the ",(0,e.jsx)(n.strong,{children:"Credentials Details"})," section, ensure that the value for ",(0,e.jsx)(n.strong,{children:"Application username format"})," is a ",(0,e.jsx)(n.a,{href:"/basics/sso/setting-up-sso/#name-id",children:"valid email address"}),". The default format for ",(0,e.jsx)(n.strong,{children:"Okta username"})," is an email address, unless it has been changed in Okta Admin Console."]}),"\n",(0,e.jsx)("img",{src:(0,a.A)("img/basics/sso/idp-config/okta/username-format.png"),alt:"Username Format",width:"650"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["In the ",(0,e.jsx)(n.strong,{children:"SAML Signing Certificates"})," section, click ",(0,e.jsx)(n.strong,{children:"Actions"}),", and then ",(0,e.jsx)(n.strong,{children:"View IdP metadata"}),". A new tab opens. Copy the content, and save it as an XML file. Use this metadata file to set up the SSO Integration at Sauce Labs in the ",(0,e.jsx)(n.a,{href:"/basics/sso/setting-up-sso#integrating-with-sauce-labs-service-provider",children:"Organization Management Panel"}),"."]}),"\n",(0,e.jsx)("img",{src:(0,a.A)("img/basics/sso/idp-config/okta/metadata.png"),alt:"Metadata",width:"650"}),"\n"]}),"\n",(0,e.jsxs)(n.li,{children:["\n",(0,e.jsxs)(n.p,{children:["Test the integration using the ",(0,e.jsx)(n.a,{href:"/basics/sso/logging-in-via-sso",children:"IdP-initiated and the SP-initiated login"}),"."]}),"\n"]}),"\n"]})]})}function p(s={}){const{wrapper:n}={...(0,t.R)(),...s.components};return n?(0,e.jsx)(n,{...s,children:(0,e.jsx)(g,{...s})}):g(s)}},28453:(s,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var e=i(96540);const t={},a=e.createContext(t);function o(s){const n=e.useContext(a);return e.useMemo((function(){return"function"==typeof s?s(n):{...n,...s}}),[n,s])}function r(s){let n;return n=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:o(s.components),e.createElement(a.Provider,{value:n},s.children)}}}]);