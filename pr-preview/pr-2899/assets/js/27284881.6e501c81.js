"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[22497],{57534:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=i(74848),t=i(28453);i(86025);const o={id:"mdm-support",title:"Mobile Device Management (MDM) Support on iOS Real Devices",sidebar_label:"MDM Support on iOS Real Devices"},l=void 0,r={id:"mobile-apps/mdm-support",title:"Mobile Device Management (MDM) Support on iOS Real Devices",description:"Real Devices Only",source:"@site/docs/mobile-apps/mdm-support.md",sourceDirName:"mobile-apps",slug:"/mobile-apps/mdm-support",permalink:"/sauce-docs/pr-preview/pr-2899/mobile-apps/mdm-support",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/mdm-support.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1699984866e3,frontMatter:{id:"mdm-support",title:"Mobile Device Management (MDM) Support on iOS Real Devices",sidebar_label:"MDM Support on iOS Real Devices"},sidebar:"docs",previous:{title:"Real Device Cleaning Process",permalink:"/sauce-docs/pr-preview/pr-2899/mobile-apps/real-device-cleaning"},next:{title:"Appium Inspector",permalink:"/sauce-docs/pr-preview/pr-2899/mobile-apps/features/appium-inspector"}},a={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Installing MDM",id:"installing-mdm",level:2},{value:"Restrictions and Recommendations",id:"restrictions-and-recommendations",level:2}];function d(e){const n={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("br",{}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("span",{className:"sauceGreen",children:"Real Devices Only"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("p",{children:(0,s.jsx)("span",{className:"sauceGreen",children:"Private Devices Only"})}),"\n",(0,s.jsx)(n.p,{children:"With our MDM support, you gain the ability to install your internal application through MDM onto our private devices, enabling seamless policy enforcement and application management."}),"\n",(0,s.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A Sauce Labs account (",(0,s.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,s.jsx)(n.li,{children:"Access to private devices."}),"\n",(0,s.jsx)(n.li,{children:"Service account to access your MDM(Intune) account."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"MDM Profile Application"}),"\nYou can seamlessly apply and download the MDM profile to our private iOS devices. This ensures centralized management and control over the testing environment."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"App Policy Enforcement"}),"\nSauce Labs supports the enforcement of app policies, allowing you to define and apply specific policies for each testing session. These policies are consistently reapplied to maintain a consistent testing environment."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"App VPN Support"}),"\nSetting up App VPNs is made easy, enabling you to connect to your internal firewalls without the need for Sauce Connect. Certain applications, like Edge, will automatically configure VPN extensions."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"App, System App, and Account Allow List"}),"\nSee ",(0,s.jsx)(n.a,{href:"/basics/acct-team-mgmt/private-device-mgmt",children:"Private Device Management"})," for information on customizing app and account allow lists."]}),"\n",(0,s.jsx)(n.h2,{id:"installing-mdm",children:"Installing MDM"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Start any Live Testing session with the private device where you want to install your MDM."}),"\n",(0,s.jsx)(n.li,{children:"Sign in with your AppleID and download Intune or install your MDM using a specific link."}),"\n",(0,s.jsx)(n.li,{children:"Login with your service account to your MDM/Intune portal."}),"\n",(0,s.jsxs)(n.li,{children:["After successful login, download and install the MDM profile through ",(0,s.jsx)(n.strong,{children:"Settings"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.strong,{children:"Settings > VPN and Device Management"}),", click on ",(0,s.jsx)(n.strong,{children:"Management Profile"}),", and install the MDM."]}),"\n",(0,s.jsxs)(n.li,{children:["Once installed, click on the ",(0,s.jsx)(n.strong,{children:"Home Screen"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Confirm that all the apps related to your company-managed profile have been successfully downloaded."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"restrictions-and-recommendations",children:"Restrictions and Recommendations"}),"\n",(0,s.jsx)(n.p,{children:"While our MDM support offers a robust framework for device management, certain limitations and recommendations should be considered during implementation:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sauce-Specific MDM Policy"})," - You should create a Sauce-specific MDM policy, emphasizing different requirements to be lowered or disabled."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"The following restrictions need to be removed"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"USB drives not accessible in Files app (remove)"}),"\n",(0,s.jsx)(n.li,{children:"Phone auto unlock not allowed (remove)"}),"\n",(0,s.jsx)(n.li,{children:"USB accessories while locked not allowed (remove)"}),"\n",(0,s.jsx)(n.li,{children:"Remote screen observation not allowed (remove)"}),"\n",(0,s.jsx)(n.li,{children:"Installing apps from device not allowed (remove)"}),"\n",(0,s.jsx)(n.li,{children:"Installing configuration profiles not allowed (remove)"}),"\n",(0,s.jsx)(n.li,{children:"Changing account settings not allowed (remove)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Passcode Lock and Setup"})," - Enforcing passcode lock or device setup is not supported."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Supervised device mode"})," - Enabling supervised mode on the devices is not supported."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"USB Data Transfer"}),"- USB file and data transfer needs to be enabled."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Screen Recording"}),"- Allowing screen-recording and screenshots need to be enabled."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Application Installation"})," - Enable installation of applications to the device."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var s=i(96540);const t={},o=s.createContext(t);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);