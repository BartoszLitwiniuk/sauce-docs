"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[65796],{38644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(74848),r=n(28453),s=(n(86025),n(11470)),i=n(19365);const l={id:"adding-tf-sdk",title:"Adding the TestFairy SDK to your App",sidebar_label:"Adding the TestFairy SDK"},o=void 0,d={id:"testfairy/sdk/adding-tf-sdk",title:"Adding the TestFairy SDK to your App",description:"The TestFairy SDK helps you understand how users interact with your app. It can handle problems like crashes and on-screen error messages and integrate with your current development workflow.",source:"@site/docs/testfairy/sdk/adding-tf-sdk.md",sourceDirName:"testfairy/sdk",slug:"/testfairy/sdk/adding-tf-sdk",permalink:"/sauce-docs/pr-preview/pr-2901/testfairy/sdk/adding-tf-sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/sdk/adding-tf-sdk.md",tags:[],version:"current",lastUpdatedBy:"Lysanne Pinto",lastUpdatedAt:1689186874e3,frontMatter:{id:"adding-tf-sdk",title:"Adding the TestFairy SDK to your App",sidebar_label:"Adding the TestFairy SDK"},sidebar:"docs",previous:{title:"Hiding Data",permalink:"/sauce-docs/pr-preview/pr-2901/testfairy/sdk/security/hiding-data"},next:{title:"Begin with Options",permalink:"/sauce-docs/pr-preview/pr-2901/testfairy/sdk/options"}},c={},u=[{value:"Supported Platforms",id:"supported-platforms",level:2},{value:"Adding Events",id:"adding-events",level:2},{value:"Attaching Files To Sessions",id:"attaching-files-to-sessions",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The TestFairy SDK helps you understand how users interact with your app. It can handle problems like crashes and on-screen error messages and integrate with your current development workflow."}),"\n",(0,a.jsx)(t.p,{children:"TestFairy SDK features include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Recording videos of how users interact with your apps."}),"\n",(0,a.jsx)(t.li,{children:"Handling crashes and exceptions."}),"\n",(0,a.jsx)(t.li,{children:"Sending logs to the TestFairy dashboard for later inspection."}),"\n",(0,a.jsx)(t.li,{children:"Identifying and tagging users for searching and custom reports."}),"\n",(0,a.jsx)(t.li,{children:"Auto updates to ensure your users are on the latest version."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"supported-platforms",children:"Supported Platforms"}),"\n",(0,a.jsx)(t.p,{children:"To add the TestFairy SDK to your app, see the instructions for the relevant development platform:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/testfairy/sdk/android/integrating-android",children:"Android"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/testfairy/sdk/ios/integrating-ios",children:"iOS"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/testfairy/platforms/cordova",children:"Cordova and PhoneGap"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/testfairy/platforms/ionic",children:"Ionic"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/testfairy/platforms/react-native",children:"React Native"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/testfairy/platforms/unity",children:"Unity"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/testfairy/platforms/xamarin",children:"Xamarin"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/testfairy/platforms/titanium",children:"Titanium"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/testfairy/platforms/nativescript",children:"Nativescript"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/testfairy/platforms/neptune",children:"Neptune Software"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/testfairy/platforms/flutter",children:"Flutter"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"adding-events",children:"Adding Events"}),"\n",(0,a.jsx)(t.p,{children:"Events are used to provide insights into how testers use your apps. They can help you track when a tester reaches key points in your app, such as visiting the in-app store."}),"\n",(0,a.jsx)(t.p,{children:"To add an event to your timeline:"}),"\n",(0,a.jsxs)(s.A,{groupId:"sdk",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"React Native",value:"react"}],children:[(0,a.jsxs)(i.A,{value:"android",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'TestFairy.addEvent("<event name>");\n'})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:'public class MyActivity extends Activity {\n    private void onPurchaseComplete() {\n        TestFairy.addEvent("Purchase OK");\n    }\n}\n'})})]}),(0,a.jsxs)(i.A,{value:"ios",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'[TestFairy addEvent:@"<event name>"];\n'})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'@implementation ViewController\n- (void)viewDidLoad {\n    [super viewDidLoad];\n    [TestFairy addEvent:@"Purchase OK"];\n    //...\n}\n// ...\n@end\n'})})]}),(0,a.jsxs)(i.A,{value:"react",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'TestFairy.addEvent("<event name>");\n'})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const TestFairy = require('react-native-testfairy');\nvar MyComponent = React.createClass({\n    componentDidMount: function() {\n        TestFairy.addEvent(\"Purchase OK\");\n    }\n});\n"})})]})]}),"\n",(0,a.jsx)(t.h2,{id:"attaching-files-to-sessions",children:"Attaching Files To Sessions"}),"\n",(0,a.jsx)(t.p,{children:"TestFairy allows developers to attach files to sessions. As a developer, you can upload up to five files to a given session, with a maximum size of 15MB per file. Files must be local to the device."}),"\n",(0,a.jsx)(t.p,{children:"Be sure to check the device logs for any problems uploading files. Only file extensions .jpeg, .jpg, .png, .txt, and .sqlite are supported."}),"\n",(0,a.jsxs)(t.p,{children:["To attach a file to a session, call the static instance method ",(0,a.jsx)(t.code,{children:"attachFile"})," in the ",(0,a.jsx)(t.code,{children:"TestFairy"})," class:"]}),"\n",(0,a.jsxs)(s.A,{groupId:"sdk",defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],children:[(0,a.jsxs)(i.A,{value:"android",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"File file = ...\nTestFairy.attachFile(file);\n"})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'File file = new File("/path/to/file.txt");\nTestFairy.attachFile(file);\n'})})]}),(0,a.jsxs)(i.A,{value:"ios",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"NSURL *file = ...\n[TestFairy attachFile:file];\n"})}),"Example",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'NSURL *file = [NSURL fileURLWithPath:"/path/to/file.txt"];\n[TestFairy attachFile:file];\n'})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(96540),r=n(18215),s=n(23104),i=n(56347),l=n(205),o=n(57485),d=n(31682),c=n(89466);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[d,u]=f({queryString:n,groupId:r}),[m,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),x=(()=>{const e=d??m;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),v(e)}),[u,v,s]),tabValues:s}}var v=n(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function y(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=l[n].value;r!==a&&(d(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function b(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function w(e){const t=(0,v.A)();return(0,g.jsx)(b,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var a=n(96540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);