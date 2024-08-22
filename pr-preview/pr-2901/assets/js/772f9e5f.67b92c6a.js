"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[5238],{81703:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var i=n(74848),a=n(28453);const c={id:"connect-session",title:"Virtual USB CLI: Connect to Existing Session",sidebar_label:"Connect to Session"},l=void 0,t={id:"dev/cli/virtual-usb/connect-session",title:"Virtual USB CLI: Connect to Existing Session",description:"Connect to an existing Virtual USB (vUSB) session in lieu of launching a new vUSB session.",source:"@site/docs/dev/cli/virtual-usb/connect-session.md",sourceDirName:"dev/cli/virtual-usb",slug:"/dev/cli/virtual-usb/connect-session",permalink:"/sauce-docs/pr-preview/pr-2901/dev/cli/virtual-usb/connect-session",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/virtual-usb/connect-session.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:168733218e4,frontMatter:{id:"connect-session",title:"Virtual USB CLI: Connect to Existing Session",sidebar_label:"Connect to Session"},sidebar:"dev",previous:{title:"Start Session",permalink:"/sauce-docs/pr-preview/pr-2901/dev/cli/virtual-usb/start-session"},next:{title:"Disconnect Session",permalink:"/sauce-docs/pr-preview/pr-2901/dev/cli/virtual-usb/disconnect-session"}},r={},o=[{value:"Usage",id:"usage",level:2},{value:"Options Details",id:"options-details",level:2},{value:'<span class="cli">--sessionId</span>',id:"--sessionid",level:3},{value:'<span class="cli">--username</span>',id:"--username",level:3},{value:'<span class="cli">--accessKey</span>',id:"--accesskey",level:3},{value:'<span class="cli">--serverHost</span>',id:"--serverhost",level:3},{value:'<span class="cli">--serverPort</span>',id:"--serverport",level:3},{value:"Examples",id:"examples",level:2},{value:"Basic Example with Required Flags",id:"basic-example-with-required-flags",level:3},{value:"Full Example with Optional Flags",id:"full-example-with-optional-flags",level:3}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Connect to an existing Virtual USB (vUSB) session in lieu of launching a new vUSB session."}),"\n",(0,i.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"$ <main class> [OPTIONS] connect [OPTIONS]\n"})}),"\n",(0,i.jsx)(s.h2,{id:"options-details",children:"Options Details"}),"\n",(0,i.jsx)(s.h3,{id:"--sessionid",children:(0,i.jsx)("span",{className:"cli",children:"--sessionId"})}),"\n",(0,i.jsxs)("div",{className:"cli-desc",children:[(0,i.jsx)("p",{children:(0,i.jsx)("small",{children:"| REQUIRED | STRING |"})}),"The unique identifier of your test session. You can retrieve the session ID of an active session using the ",(0,i.jsxs)(s.a,{href:"/dev/cli/virtual-usb/find-sessionid",children:[(0,i.jsx)(s.code,{children:"sessions"})," command"]}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"--username",children:(0,i.jsx)("span",{className:"cli",children:"--username"})}),"\n",(0,i.jsxs)("div",{className:"cli-desc",children:[(0,i.jsx)("p",{children:(0,i.jsx)("small",{children:"| REQUIRED | STRING |"})}),"A valid Sauce Labs user account. You can find your username on the Sauce Labs ",(0,i.jsx)(s.a,{href:"https://app.saucelabs.com/user-settings",children:"User Settings page"}),". This option supports environment variable values."]}),"\n",(0,i.jsx)(s.h3,{id:"--accesskey",children:(0,i.jsx)("span",{className:"cli",children:"--accessKey"})}),"\n",(0,i.jsxs)("div",{className:"cli-desc",children:[(0,i.jsx)("p",{children:(0,i.jsx)("small",{children:"| REQUIRED | STRING |"})}),"The authentication access key associated with your Sauce Labs user account. You can find your access key on the Sauce Labs ",(0,i.jsx)(s.a,{href:"https://app.saucelabs.com/user-settings",children:"User Settings page"}),". This option supports environment variable values."]}),"\n",(0,i.jsx)(s.h3,{id:"--serverhost",children:(0,i.jsx)("span",{className:"cli",children:"--serverHost"})}),"\n",(0,i.jsxs)("div",{className:"cli-desc",children:[(0,i.jsx)("p",{children:(0,i.jsx)("small",{children:"| OPTIONAL | URL ADDRESS |"})}),"A specific vUSB server host address. The default value, if not specified, is ",(0,i.jsx)(s.code,{children:"http://127.0.0.1"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"--serverport",children:(0,i.jsx)("span",{className:"cli",children:"--serverPort"})}),"\n",(0,i.jsxs)("div",{className:"cli-desc",children:[(0,i.jsx)("p",{children:(0,i.jsx)("small",{children:"| OPTIONAL | STRING |"})}),"A specific vUSB server port. The default value, if not specified, is ",(0,i.jsx)(s.code,{children:"33657"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(s.h3,{id:"basic-example-with-required-flags",children:"Basic Example with Required Flags"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",metastring:'title="Connection Request"',children:"java -jar virtual-usb-client.jar connect --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 --username $SAUCE_USERNAME --accessKey $SAUCE_ACCESS_KEY\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",metastring:'title="Sample Response"',children:"07:51:46.814 [main] INFO com.saucelabs.vusb.client.Runner - Runner Version 2.0.0\nlocalhost:7000  online\n"})}),"\n",(0,i.jsx)(s.h3,{id:"full-example-with-optional-flags",children:"Full Example with Optional Flags"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"java -jar virtual-usb-client.jar connect \\\n    --sessionId d03a1b81-158d-4bb4-bcc9-074e43dd8465 \\\n    --username $SAUCE_USERNAME \\\n    --accessKey $SAUCE_ACCESS_KEY \\\n    --serverHost http://127.0.0.1 \\\n    --serverPort 8080 \\\n"})})]})}function u(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>t});var i=n(96540);const a={},c=i.createContext(a);function l(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);