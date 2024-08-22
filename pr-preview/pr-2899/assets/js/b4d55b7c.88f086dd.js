"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[9467],{18712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(74848),a=t(28453),s=t(86025);t(11470),t(19365);const r={id:"private-device-mgmt",title:"Managing Private Devices",sidebar_label:"Managing Private Devices"},l=void 0,c={id:"basics/acct-team-mgmt/private-device-mgmt",title:"Managing Private Devices",description:"Private Devices Only",source:"@site/docs/basics/acct-team-mgmt/private-device-mgmt.md",sourceDirName:"basics/acct-team-mgmt",slug:"/basics/acct-team-mgmt/private-device-mgmt",permalink:"/sauce-docs/pr-preview/pr-2899/basics/acct-team-mgmt/private-device-mgmt",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/basics/acct-team-mgmt/private-device-mgmt.md",tags:[],version:"current",lastUpdatedBy:"kristofmuhi",lastUpdatedAt:1720515853e3,frontMatter:{id:"private-device-mgmt",title:"Managing Private Devices",sidebar_label:"Managing Private Devices"},sidebar:"docs",previous:{title:"Sharing Sauce Connect Proxy Tunnels",permalink:"/sauce-docs/pr-preview/pr-2899/basics/acct-team-mgmt/sauce-connect-proxy-tunnels"},next:{title:"Setting Up SSO",permalink:"/sauce-docs/pr-preview/pr-2899/basics/sso/setting-up-sso"}},o={},d=[{value:"Viewing an Organization\u2019s Private Devices",id:"viewing-an-organizations-private-devices",level:2},{value:"Assigning a Private Device to a Team",id:"assigning-a-private-device-to-a-team",level:2},{value:"App Allow List",id:"app-allow-list",level:2},{value:"System App Allow List (iOS)",id:"system-app-allow-list-ios",level:2},{value:"Account Allow List",id:"account-allow-list",level:2},{value:"Retain folders/filepath (Android)",id:"retain-foldersfilepath-android",level:2},{value:"Enable Apple Pay",id:"enable-apple-pay",level:2},{value:"Private Device Management API",id:"private-device-management-api",level:2}];function p(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),"\n",(0,i.jsx)("p",{children:(0,i.jsx)("span",{className:"sauceGreen",children:"Private Devices Only"})}),"\n",(0,i.jsxs)(n.p,{children:["Private device management allows an organization admin to view and manage the private devices in an organization via the ",(0,i.jsx)(n.a,{href:"https://app.saucelabs.com/team-management/devices",children:"Private Device Management"})," panel. These features can improve device availability and optimize manual and automation workflows."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Assign a private device to a team."}),"\n",(0,i.jsx)(n.li,{children:"Customize a private device to allow apps, system apps, and accounts to persist between sessions."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["By assigning a private device to a team, you restrict access to that device to that team. ",(0,i.jsx)(n.strong,{children:"Note:"})," organization admins are not affected by this. Organization admins have access to all devices of their organization."]})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["For more information about managing teams, see ",(0,i.jsx)(n.a,{href:"/basics/acct-team-mgmt/adding-deleting-teams",children:"Adding and Deleting Teams"}),"."]}),(0,i.jsxs)(n.p,{children:["Private devices are not included in VM or RDC concurrency limits.",(0,i.jsx)(n.br,{}),"\n","For more details, please see ",(0,i.jsx)(n.a,{href:"/basics/acct-team-mgmt/concurrency/managing-concurrency",children:"Managing Concurrency"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"viewing-an-organizations-private-devices",children:"Viewing an Organization\u2019s Private Devices"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["On Sauce Labs, click ",(0,i.jsx)(n.strong,{children:"ACCOUNT"})," and then click ",(0,i.jsx)(n.strong,{children:"Organization Management"}),".","\n",(0,i.jsx)("img",{src:(0,s.A)("img/team-mgmt/team-mgmt-nav.png"),alt:"Organization management navigation",width:"450"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click the ",(0,i.jsx)(n.strong,{children:"DEVICES"})," tab. The devices assigned to your organization will be listed.","\n",(0,i.jsx)("img",{src:(0,s.A)("img/team-mgmt/device-mgmt-devices-tab.png"),alt:"Devices tab",width:"600"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"assigning-a-private-device-to-a-team",children:"Assigning a Private Device to a Team"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"A device can be assigned to only 1 team at a time."})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["On Sauce Labs, click ",(0,i.jsx)(n.strong,{children:"ACCOUNT"})," and then click ",(0,i.jsx)(n.strong,{children:"Organization Management"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["On the ",(0,i.jsx)(n.strong,{children:"DEVICES"})," tab, in the ",(0,i.jsx)(n.strong,{children:"Team"})," dropdown, select a team to assign the device to.","\n",(0,i.jsx)("img",{src:(0,s.A)("img/team-mgmt/device-mgmt-assign-team.png"),alt:"Assign a team",width:"600"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"customizing-private-devices",children:"Customizing Private devices:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["On Sauce Labs, click ",(0,i.jsx)(n.strong,{children:"ACCOUNT"})," and then click ",(0,i.jsx)(n.strong,{children:"Organization Management"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["On the ",(0,i.jsx)(n.strong,{children:"DEVICES"})," tab, click on the Pencil icon under Action column."]}),"\n",(0,i.jsx)(n.li,{children:"Under the Action column, click the Pencil icon to edit a device."}),"\n",(0,i.jsx)(n.li,{children:"In the new device modal, you can configure your private device: App Allow List, Account Allow List, System App Allow List, Retain folders, Enable Apple Pay"}),"\n"]}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/team-mgmt/private-device-management-edit.png"),alt:"Private device management edit",width:"450"}),"\n",(0,i.jsx)("img",{src:(0,s.A)("img/team-mgmt/private-device-management-modal.png"),alt:"Private device management modal view",width:"450"}),"\n",(0,i.jsx)(n.h2,{id:"app-allow-list",children:"App Allow List"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/mobile-apps/real-device-cleaning",children:"device cleaning process"})," will remove apps installed from ",(0,i.jsx)(n.a,{href:"/mobile-apps/app-storage",children:"Sauce Storage"})," and the App Store/Play Store between sessions. To have installed apps and app data persist between sessions, update this setting for each of the application identifiers. This might be the app you are testing or dependent apps, e.g. MFA app, Microsoft Authenticator, etc."]}),"\n",(0,i.jsxs)(n.admonition,{type:"important",children:[(0,i.jsxs)(n.p,{children:["This setting does ",(0,i.jsx)(n.strong,{children:"NOT"})," install the app. You must manually or via automation install the desired version of the matching app."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For iOS devices, use the Bundle ID.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/basics/acct-team-mgmt/private-device-mgmt-find-bundle-id",children:"How to find the bundle ID on a Sauce Labs device"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"For Android devices, use the package name."}),"\n"]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"com.google.chrome.ios"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"com.apps.app1"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"com.ios.app2"})]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Multiple entries must be comma-separated."})})]}),"\n",(0,i.jsx)(n.h2,{id:"system-app-allow-list-ios",children:"System App Allow List (iOS)"}),"\n",(0,i.jsx)(n.p,{children:"Certain iOS preinstalled apps are hidden by default, e.g. Messages, Mail, Notes. To access iOS preinstalled applications, add the bundle ID for each app."}),"\n",(0,i.jsxs)(n.admonition,{type:"important",children:[(0,i.jsxs)(n.p,{children:["For a list of native iPhone and iPad apps and their corresponding bundle IDs, please follow the reference link below.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://support.apple.com/en-gb/guide/deployment/depece748c41/web",children:"https://support.apple.com/en-gb/guide/deployment/depece748c41/web"})]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"com.apple.MobileSMS"}),"\n",(0,i.jsx)(n.code,{children:"com.apple.mobilenotes"})]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Multiple entries must be comma-separated."})})]}),"\n",(0,i.jsx)(n.h2,{id:"account-allow-list",children:"Account Allow List"}),"\n",(0,i.jsx)(n.p,{children:"Update this setting for each account email to preserve store and payment account sign-ins between sessions."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Google accounts signed into the Play Store/Google Pay/In-App Purchase can be preserved between sessions."}),"\n",(0,i.jsx)(n.li,{children:"Apple IDs signed into the device and App Store/TestFlight/Apple Pay/In-App Purchase can be preserved between sessions."}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"important",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"account1@mydomain.com"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"account2@mydomain.com"})]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Multiple entries must be comma-separated."})})]}),"\n",(0,i.jsx)(n.h2,{id:"retain-foldersfilepath-android",children:"Retain folders/filepath (Android)"}),"\n",(0,i.jsx)(n.p,{children:"You have the option to retain specific filepaths or folders on your private Android devices between sessions.\nThis feature ensures that selected data remains intact during the device cleaning process."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Filepaths or folders associated with specific applications can be retained."}),"\n",(0,i.jsx)(n.li,{children:"This is especially useful for retaining data that is crucial for continuous testing or for maintaining certain app states."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"By default, the following folders are not cleaned on your private Android devices, ensuring that their contents are retained between sessions (iOS/Android):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Documents"}),"\n",(0,i.jsx)(n.li,{children:"Pictures"}),"\n",(0,i.jsx)(n.li,{children:"Downloads"}),"\n",(0,i.jsx)(n.li,{children:"DCIM"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You can only retain specific folders created inside tmp. You cannot retain the whole tmp folder.\nValid: ",(0,i.jsx)(n.code,{children:"/data/local/tmp/retain"}),"\nInvalid path: ",(0,i.jsx)(n.code,{children:"/data/local/tmp/"})]})}),"\n",(0,i.jsxs)(n.admonition,{type:"important",children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"/data/com.wavelink.velocity/files"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"/com.my.app/data/temp/folder"})]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Multiple entries must be comma-separated."})})]}),"\n",(0,i.jsx)(n.h2,{id:"enable-apple-pay",children:"Enable Apple Pay"}),"\n",(0,i.jsx)(n.p,{children:"Enable this setting to test Apple Pay. This will persist assistive touch on the device, which is required to confirm payment.\nPlease send us a support ticket to set up Confirm with AssistiveTouch on your device. This requires manual intervention from our side."}),"\n",(0,i.jsx)(n.admonition,{type:"important",children:(0,i.jsxs)(n.p,{children:["This feature ",(0,i.jsx)(n.strong,{children:"requires"})," setting the Account Allow List.",(0,i.jsx)(n.br,{}),"\n","Please see ",(0,i.jsx)(n.a,{href:"/mobile-apps/live-testing/testing-apple-pay",children:"Testing Apple Pay"})," for more information."]})}),"\n",(0,i.jsx)(n.h2,{id:"private-device-management-api",children:"Private Device Management API"}),"\n",(0,i.jsxs)(n.p,{children:["Easily manage your private real devices with our ",(0,i.jsx)(n.a,{href:"/dev/api/rdc/#private-real-device-management",children:"Device Management API endpoints"}),"\nto obtain device information, assign devices to a specific team, and update device settings efficiently."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var i=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(96540),a=t(18215),s=t(23104),r=t(56347),l=t(205),c=t(57485),o=t(31682),d=t(89466);function p(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:a}}=e;return{value:n,label:t,attributes:i,default:a}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=u(e),[r,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[o,p]=h({queryString:t,groupId:a}),[v,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),x=(()=>{const e=o??v;return m({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&c(x)}),[x]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),g(e)}),[p,g,s]),tabValues:s}}var g=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function f(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=l[t].value;a!==i&&(o(n),r(a))},p=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:p,onClick:d,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=v(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,b.jsx)(f,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,b.jsx)(y,{...e,children:p(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);