"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[78140],{96220:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=i(74848),a=i(28453),n=i(86025);const r={id:"setting-up-sso-special-cases",title:"Setting Up SSO - Special Cases",sidebar_label:"Setting Up SSO - Special Cases"},o=void 0,l={id:"basics/sso/setting-up-sso-special-cases",title:"Setting Up SSO - Special Cases",description:"Enterprise Plans only",source:"@site/docs/basics/sso/setting-up-sso-special-cases.md",sourceDirName:"basics/sso",slug:"/basics/sso/setting-up-sso-special-cases",permalink:"/sauce-docs/pr-preview/pr-2901/basics/sso/setting-up-sso-special-cases",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/sso/setting-up-sso-special-cases.md",tags:[],version:"current",lastUpdatedBy:"Przemyslaw Zukowski",lastUpdatedAt:1718369115e3,frontMatter:{id:"setting-up-sso-special-cases",title:"Setting Up SSO - Special Cases",sidebar_label:"Setting Up SSO - Special Cases"},sidebar:"docs",previous:{title:"Setting Up SSO",permalink:"/sauce-docs/pr-preview/pr-2901/basics/sso/setting-up-sso"},next:{title:"Migration From The Deprecated SSO",permalink:"/sauce-docs/pr-preview/pr-2901/basics/sso/migration-from-deprecated-sso"}},c={},d=[{value:"NameID is not a real email address but a user identifier",id:"nameid-is-not-a-real-email-address-but-a-user-identifier",level:2},{value:"Problem Description",id:"problem-description",level:3},{value:"Solution",id:"solution",level:3},{value:"Single Identity Provider and Multiple Organizations at Sauce Labs",id:"single-identity-provider-and-multiple-organizations-at-sauce-labs",level:2},{value:"Problem Description",id:"problem-description-1",level:3},{value:"Solution",id:"solution-1",level:3},{value:"Multiple Organizations with the Same Email Domain at Sauce Labs",id:"multiple-organizations-with-the-same-email-domain-at-sauce-labs",level:2},{value:"Problem Description",id:"problem-description-2",level:3},{value:"Solution",id:"solution-2",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:(0,t.jsx)("span",{className:"sauceGreen",children:"Enterprise Plans only"})}),"\n",(0,t.jsx)(s.h2,{id:"nameid-is-not-a-real-email-address-but-a-user-identifier",children:"NameID is not a real email address but a user identifier"}),"\n",(0,t.jsx)(s.h3,{id:"problem-description",children:"Problem Description"}),"\n",(0,t.jsx)(s.p,{children:"In some cases, the NameID in the SAML assertion is not a real email address but an identifier. This user identifier is immutable. Users in your Identity Provider have also been assigned email addresses that can change at any time."}),"\n",(0,t.jsx)(s.p,{children:"You want to use this user identifier to match users in Sauce Labs, but you also want to provide the real email address to Sauce Labs."}),"\n",(0,t.jsx)(s.h3,{id:"solution",children:"Solution"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["If the user identifier is not an email address, ensure to send it in the NameID field as an email address. ",(0,t.jsx)(s.a,{href:"/basics/sso/setting-up-sso/#name-id",children:"This format"})," is required by the Sauce Labs Service Provider. Simply put the user identifier in the NameID field and add your company's dummy domain to it. For example, if the user identifier is ",(0,t.jsx)(s.code,{children:"john.doe"}),", the NameID should be ",(0,t.jsx)(s.code,{children:"john.doe@your.company.domain"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Send the real email address in the SAML claim ",(0,t.jsx)(s.code,{children:"contact_email"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Keep in mind that the value of ",(0,t.jsx)(s.code,{children:"contact_email"})," will be used as the primary email address for the user in Sauce Labs. If the ",(0,t.jsx)(s.code,{children:"contact_email"})," changes and the user logs in to Sauce Labs, the email address in Sauce Labs will be updated."]}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"contact_email"})," must be an email address not used by any other user in Sauce Labs."]}),"\n",(0,t.jsx)(s.h2,{id:"single-identity-provider-and-multiple-organizations-at-sauce-labs",children:"Single Identity Provider and Multiple Organizations at Sauce Labs"}),"\n",(0,t.jsx)(s.h3,{id:"problem-description-1",children:"Problem Description"}),"\n",(0,t.jsx)(s.p,{children:"Some identity providers do not allow creating more than one SAML integration with the same service provider. In other words, they require one unique entity ID for a service provider.\nIf your Identity Provider has this limitation and you have two organizations at Sauce Labs to integrate with SAML SSO for that Identity Provider, follow the setup steps below:"}),"\n",(0,t.jsx)(s.h3,{id:"solution-1",children:"Solution"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In your Identity Provider set up the first SAML SSO integration/application in the ",(0,t.jsx)(s.a,{href:"/basics/sso/setting-up-sso/#setting-up-identity-provider",children:"standard way"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/basics/sso/setting-up-sso/#integrating-with-sauce-labs-service-provider",children:"Integrate the SAML SSO application"})," that you created in the previous step with one of your Sauce Labs organizations."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"In your Identity Provider set up another SAML SSO integration/application with the auxiliary Sauce Labs Service Provider. You cannot use a preconfigured Sauce Labs SAML application from your identity provider's catalog for this purpose. Instead, you must create a custom SAML application, as it requires different metadata than the preconfigured one."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"You have to use different Sauce Labs metadata. Sauce Labs provides four auxiliary Service Providers with different entity IDs. You can find the metadata for each auxiliary Service Provider below:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp1",children:"sp1 metadata"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp2",children:"sp2 metadata"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp3",children:"sp3 metadata"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://accounts.saucelabs.com/am/sso/metadata/https%3A%2F%2Faccounts.saucelabs.com%2Fsp4",children:"sp4 metadata"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The metadata contains different entity ID and different ACS URLs (",(0,t.jsx)(s.code,{children:"spX"})," instead of ",(0,t.jsx)(s.code,{children:"sp"}),"), where ",(0,t.jsx)(s.code,{children:"X"})," is a number from 1 to 4."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In this tutorial we will use the metadata for the auxiliary SP with entity ID ",(0,t.jsx)(s.code,{children:"sp1"}),". But if you for example want to use the auxiliary ",(0,t.jsxs)(s.strong,{children:["SP3, remember to put ",(0,t.jsx)(s.code,{children:"sp3"})," in all places in the configuration in your IdP instead of ",(0,t.jsx)(s.code,{children:"sp1"})]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Here is an example of the attributes for the auxiliary Sauce Labs SP with entity ID ",(0,t.jsx)(s.code,{children:"sp1"})," that differ from the standard setup with ",(0,t.jsx)(s.code,{children:"sp"}),":"]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Setting"}),(0,t.jsx)(s.th,{children:"Value"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Entity ID"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"https://accounts.saucelabs.com/sp1"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Audience URI"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"https://accounts.saucelabs.com/sp1"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Assertion Consumer Service"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp1"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Recipient URL"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp1"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Destination URL"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp1"})})]})]})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["All other settings are the same as in the ",(0,t.jsx)(s.a,{href:"/basics/sso/setting-up-sso/#setting-up-identity-provider",children:"standard service provider"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Keep in mind that the SAML SSO application that you have created in the previous step has to have ",(0,t.jsx)(s.strong,{children:"different Identity Provider Entity ID ("}),(0,t.jsx)(s.code,{children:"issuer"}),(0,t.jsx)(s.strong,{children:") than the first one"}),". This is mandatory because Sauce Labs Service Provider does not allow duplicate IdP entity IDs. This is an issue in standard setup with a single tenant in some identity providers, such as Azure Active Directory or Auth0. Every SAML app that you create within the same tenant will have the same entity ID in metadata and in the SAMLRequest. Follow the steps below for your identity provider:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Azure Active Directory"})," provides a ",(0,t.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/azure/active-directory/develop/reference-app-multi-instancing",children:"solution for this multi-instancing setup"}),". Follow the below steps to set up multiple Sauce Labs SAML applications within the single Azure tenant:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Once you set up successfully the new SAML app in Azure in the step #3, Go to ",(0,t.jsx)(s.strong,{children:"Single sign-on"})," settings of your Azure app and click ",(0,t.jsx)(s.strong,{children:"Edit"})," in the section ",(0,t.jsx)(s.strong,{children:"Attributes & Claims"}),".","\n",(0,t.jsx)("img",{src:(0,n.A)("img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/azure/edit-attributes-and-claims.png"),alt:"Azure: Edit Attributes&Claims",width:"1100"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["In ",(0,t.jsx)(s.strong,{children:"Advanced settings"})," edit ",(0,t.jsx)(s.strong,{children:"Advanced SAML claims options"})," and select the checkbox ",(0,t.jsx)(s.strong,{children:"Append application ID to issuer"}),".","\n",(0,t.jsx)("img",{src:(0,n.A)("img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/azure/append-app-id-to-issuer.png"),alt:"Azure: Append app ID to issuer",width:"1100"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Download the metadata file of your Azure app.","\n",(0,t.jsx)("img",{src:(0,n.A)("img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/azure/download-metadata.png"),alt:"Azure: Download metadata",width:"1100"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Next, before you upload metadata in Sauce Labs UI (step #5), you have to append Azure application ID to entity ID in metadata. Copy the application ID in the tab ",(0,t.jsx)(s.strong,{children:"Overview"}),".","\n",(0,t.jsx)("img",{src:(0,n.A)("img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/azure/app-id.png"),alt:"Azure: App ID",width:"1100"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Open the metadata file in a text editor, append the app ID to the attribute ",(0,t.jsx)(s.code,{children:"entityID"})," and save the file. You will upload this modified metadata file in Sauce Labs UI in the step #5.","\n",(0,t.jsx)("img",{src:(0,n.A)("img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/azure/edit-metadata.png"),alt:"Azure: Append app ID in metadata",width:"1100"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Auth0"})," requires adding a custom attribute (",(0,t.jsx)(s.code,{children:"issuer"}),") to the ",(0,t.jsx)(s.a,{href:"https://auth0.com/docs/authenticate/protocols/saml/saml-configuration/customize-saml-assertions#saml-assertion-attributes",children:"SAML assertion configuration"}),". Follow the below steps to set up multiple Sauce Labs SAML applications within the single Auth0 tenant:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Once you set up successfully the new SAML app in Auth0 in the step #3, go to ",(0,t.jsx)(s.strong,{children:"Addons"})," tab of your Auth0 app and click ",(0,t.jsx)(s.strong,{children:"SAML2 WEB APP"}),"."]}),"\n",(0,t.jsx)("img",{src:(0,n.A)("img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/auth0/edit-app.png"),alt:"Auth0: Edit SAML App",width:"1100"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Go to ",(0,t.jsx)(s.strong,{children:"Settings"})," tab and fill in the following fields:"]}),"\n",(0,t.jsx)("img",{src:(0,n.A)("img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/auth0/saml-configuration.png"),alt:"Auth0: Edit SAML Configuration",width:"600"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Application Callback URL"}),":","\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp1\n"})}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Settings"}),":","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The extra attribute, compared to the standard setup, is issuer. This attribute's value must be a unique entity ID for this SAML application, distinct from the entity ID used in the first SAML application created in step #1."}),"\n",(0,t.jsxs)(s.li,{children:["Please note that the Service Provider entity ID for this application is ",(0,t.jsx)(s.code,{children:"sp1"}),", different from the ",(0,t.jsx)(s.code,{children:"sp"})," used in the first SAML application."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n   "audience": "https://accounts.saucelabs.com/sp1",\n   "issuer": "<CUSTOM-SAML-APP-ENTITY-ID>",\n   "recipient": "https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp1",\n   "destination": "https://accounts.saucelabs.com/am/AuthConsumer/metaAlias/authtree/sp1",\n   "signResponse": true,\n   "nameIdentifierFormat": "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress",\n   "nameIdentifierProbes": [\n      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"\n   ],\n   "binding": "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST",\n   "mappings": {}\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Go to the ",(0,t.jsx)(s.strong,{children:"Usage"})," tab and download the metadata file of this Auth0 app."]}),"\n",(0,t.jsx)("img",{src:(0,n.A)("img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/auth0/download-metadata.png"),alt:"Auth0: Download metadata",width:"600"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Next, before you upload metadata in Sauce Labs UI (step #5), you have to set the custom entity ID in metadata. Copy the issuer value (",(0,t.jsx)(s.code,{children:"<CUSTOM-SAML-APP-ENTITY-ID>"}),") from the SAML app settings. Open the metadata file in a text editor, paste the custom issuer value to the attribute ",(0,t.jsx)(s.code,{children:"entityID"})," and save the file. You will upload this modified metadata file in Sauce Labs UI in the step #5."]}),"\n",(0,t.jsx)("img",{src:(0,n.A)("img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/auth0/edit-metadata.png"),alt:"Auth0: Set custom issuer in metadata",width:"1100"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/basics/sso/setting-up-sso/#integrating-with-sauce-labs-service-provider",children:"Integrate the SAML SSO application"})," that you created using the auxiliary metadata (",(0,t.jsx)(s.code,{children:"sp1"}),") with the other Sauce Labs organization."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Upload the SAML metadata file in the Sauce Labs Organization Management UI provided by your IdP."}),"\n",(0,t.jsxs)(s.li,{children:["The only additional action that you need to do, while you are in the Single Sign-On Configuration in Sauce Labs Organization Management, is to expand the section ",(0,t.jsx)(s.strong,{children:"Advanced SSO Settings"})," and in the dropdown list ",(0,t.jsx)(s.strong,{children:"Service Provider"})," select ",(0,t.jsx)(s.strong,{children:"Auxiliary SP1"}),".","\n",(0,t.jsx)("img",{src:(0,n.A)("img/basics/sso/setup-special-cases/multiple-saucelabs-orgs/saucelabs-auxiliary-sp.png"),alt:"Auxiliary Service Provider",width:"1100"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"multiple-organizations-with-the-same-email-domain-at-sauce-labs",children:"Multiple Organizations with the Same Email Domain at Sauce Labs"}),"\n",(0,t.jsx)(s.h3,{id:"problem-description-2",children:"Problem Description"}),"\n",(0,t.jsx)(s.p,{children:"In some cases, your company may have multiple organizations set up within Sauce Labs, which is a recommended configuration by the Sauce Labs support team. However, a problem arises when you have a single common email domain that is used across multiple Sauce Labs organizations."}),"\n",(0,t.jsx)(s.p,{children:"The issue originates from the fact that you can only assign your company email domains to a single organization within Sauce Labs. Consequently, new users from other organizations within your company are unable to sign up through the Sauce Labs login page using Service Provider initiated SSO."}),"\n",(0,t.jsx)(s.h3,{id:"solution-2",children:"Solution"}),"\n",(0,t.jsx)(s.p,{children:"To resolve this issue, new users must initially log into Sauce Labs using the Identity Provider initiated flow. This involves starting the login process within your Identity Provider by clicking the Sauce Labs app tile. For example, in the Okta dashboard, it appears as follows:"}),"\n",(0,t.jsx)("img",{src:(0,n.A)("img/basics/sso/login-sso-okta-dashboard.png"),alt:"Okta Dashboard",width:"500"}),"\n",(0,t.jsxs)(s.p,{children:["Once the user is successfully authenticated, a new account is created at Sauce Labs. Subsequently, these users can use the SP-initiated SSO flow and log in through the ",(0,t.jsx)(s.a,{href:"https://accounts.saucelabs.com",children:"Sauce Labs login page"})," by clicking the SSO button and providing their email address."]}),"\n",(0,t.jsx)("img",{src:(0,n.A)("img/basics/sso/login-sso-btn.png"),alt:"SSO Login Button",width:"400"})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>o});var t=i(96540);const a={},n=t.createContext(a);function r(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);