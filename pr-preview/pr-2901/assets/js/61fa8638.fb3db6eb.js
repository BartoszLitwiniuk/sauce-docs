"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[50516],{62360:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(74848),s=a(28453);a(86025),a(11470),a(19365);const r={id:"quickstart",title:"Appium Quickstart",sidebar_label:"Quickstart",description:"Use our demo scripts to quickly set up and run automated tests and view the results in Sauce Labs."},i=void 0,o={id:"mobile-apps/automated-testing/appium/quickstart",title:"Appium Quickstart",description:"Use our demo scripts to quickly set up and run automated tests and view the results in Sauce Labs.",source:"@site/docs/mobile-apps/automated-testing/appium/quickstart.md",sourceDirName:"mobile-apps/automated-testing/appium",slug:"/mobile-apps/automated-testing/appium/quickstart",permalink:"/sauce-docs/pr-preview/pr-2901/mobile-apps/automated-testing/appium/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/mobile-apps/automated-testing/appium/quickstart.md",tags:[],version:"current",lastUpdatedBy:"aoleszyn",lastUpdatedAt:1684155296e3,frontMatter:{id:"quickstart",title:"Appium Quickstart",sidebar_label:"Quickstart",description:"Use our demo scripts to quickly set up and run automated tests and view the results in Sauce Labs."},sidebar:"docs",previous:{title:"Appium 2 Migration",permalink:"/sauce-docs/pr-preview/pr-2901/mobile-apps/automated-testing/appium/appium-2-migration"},next:{title:"Real Devices",permalink:"/sauce-docs/pr-preview/pr-2901/mobile-apps/automated-testing/appium/real-devices"}},l={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Step 1: Clone the Sample Project",id:"step-1-clone-the-sample-project",level:2},{value:"Step 2: Link your Sauce Labs Account",id:"step-2-link-your-sauce-labs-account",level:2},{value:"Step 3: Upload the Sample App",id:"step-3-upload-the-sample-app",level:2},{value:"Step 4: Run the Tests",id:"step-4-run-the-tests",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"http://appium.io/",children:"Appium"})," is an automation testing framework that allows you to write tests using the ",(0,n.jsx)(t.a,{href:"https://www.selenium.dev",children:"Selenium"})," syntax that are for use in testing native, mobile web, and hybrid apps on iOS and Android devices. Run your Appium tests on Sauce Labs to benefit from speed, parallelization, clear test result history, failure analysis, issue tracking, and more."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Don't have Appium tests but want to try? The Appium Demo Repo includes a sample project structure, working configuration specifications, and sample Java tests so you can get up and running in less than 10 minutes using the instructions on this page."}),"\n",(0,n.jsx)(t.li,{children:"Already have Appium tests to run? Take advantage of the Sauce Labs library of real devices, Emulators and Simulators, and OS/browser combinations to maximize your digital confidence on every version of every device."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(t.p,{children:["The following list of prerequisites are specific to running tests written in Java, per this demonstration. For information about other supported languages, refer to the demo projects in the ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training",children:"Sauce Labs Training Repo"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["A Sauce Labs account (if you don't have one, start a ",(0,n.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Your Sauce Labs ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,n.jsxs)(t.li,{children:["The Sauce Labs ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training/quickstart-appium-java",children:"Appium Demo Project"})]}),"\n",(0,n.jsxs)(t.li,{children:["A ",(0,n.jsx)(t.a,{href:"https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home",children:"GitHub"})," account"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs/sample-app-mobile/releases",children:"Swag Labs iOS Real Device Sample App"})]}),"\n",(0,n.jsx)(t.li,{children:"Local installation of JDK, Maven, and an IDE such as IntelliJ."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-1-clone-the-sample-project",children:"Step 1: Clone the Sample Project"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs-training/quickstart-appium-java",children:"Appium Quickstart for Java"})," demo repository contains all the project files necessary to run a test against a mobile app or a web app accessed through a mobile browser. Clone the project in your local environment to get started."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"git clone https://github.com/saucelabs-training/quickstart-appium-java.git\n"})}),"\n",(0,n.jsx)(t.h2,{id:"step-2-link-your-sauce-labs-account",children:"Step 2: Link your Sauce Labs Account"}),"\n",(0,n.jsxs)(t.p,{children:["Set your ",(0,n.jsx)(t.code,{children:"SAUCE_USERNAME"})," and ",(0,n.jsx)(t.code,{children:"SAUCE_ACCESS_KEY"})," as environment variables to avoid having to enter them with each command and to protect them from exposure in your tests."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Check to see whether your credentials are already set using the following command:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="Check Environment Variables"',children:"echo $SAUCE_USERNAME\necho $SAUCE_ACCESS_KEY\n"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"If nothing is returned, use the following command to set your credentials:"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'export SAUCE_USERNAME="your Sauce username"\nexport SAUCE_ACCESS_KEY="your Sauce access key"\n'})}),"\n",(0,n.jsx)(t.h2,{id:"step-3-upload-the-sample-app",children:"Step 3: Upload the Sample App"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Download the iOS Real Device Swag Labs App from ",(0,n.jsx)(t.a,{href:"https://github.com/saucelabs/my-demo-app-rn/releases/",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Rename the app from ",(0,n.jsx)(t.code,{children:"iOS-Real-Device-MyRNDemoApp.*.*.*-*.ipa"})," to ",(0,n.jsx)(t.code,{children:"iOS-Real-Device-MyRNDemoApp.ipa"})," ."]}),"\n",(0,n.jsx)(t.li,{children:"Upload it to your Sauce Labs account, either through the Sauce Labs UI or by calling the API."}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Sauce Labs UI: From ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/app-management",children:"Sauce Labs > App Management"}),", select ",(0,n.jsx)(t.strong,{children:"Upload App"})," and browse to find the ",(0,n.jsx)(t.code,{children:"iOS-Real-Device-MyRNDemoApp.ipa"})," file you just downloaded and renamed."]}),"\n",(0,n.jsxs)(t.li,{children:["API: Use the ",(0,n.jsx)(t.a,{href:"/dev/api/storage/#upload-file-to-app-storage",children:"Upload File to App Storage"})," API request to upload the sample app to your account.","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:'language-title="Example',metastring:'API Upload Request"',children:"curl -u \"$SAUCE_USERNAME:$SAUCE_ACCESS_KEY\" --location \\\n--request POST 'https://api.us-west-1.saucelabs.com/v1/storage/upload' \\\n--form 'payload=@\"<path to the iOS file>/iOS-Real-Device-MyRNDemoApp.ipa\"' \\\n--form 'name=\"iOS-Real-Device-MyRNDemoApp.ipa\"'\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-4-run-the-tests",children:"Step 4: Run the Tests"}),"\n",(0,n.jsxs)(t.admonition,{type:"caution",children:[(0,n.jsxs)(t.p,{children:["You must have JDK and Maven installed to run this sample test, and you must have set their paths in your ",(0,n.jsx)(t.code,{children:".bash_profile"}),", for example:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"## Maven Variables\nexport M2_HOME=/Applications/apache-maven-3.8.2\nexport M2=$M2_HOME/bin\n\nexport PATH=$PATH:$M2:$JAVA_HOME/bin:$PATH\n"})})]}),"\n",(0,n.jsxs)(t.p,{children:["If you are using an IDE, such as IntelliJ, open the ",(0,n.jsx)(t.code,{children:"quickstart-appium-java"})," project you cloned in step 2, then right-click the ",(0,n.jsx)(t.code,{children:"src/test/java/tests/RDC/AppiumIosRdcAppTest"})," and choose ",(0,n.jsx)(t.code,{children:"Run"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Alternatively, you can run the following command in your terminal:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="Terminal Command"',children:"cd quickstart-appium-java\nmvn clean install -DtestngXmlFile=appium_ios_rdc_app_test.xml -Dregion=us\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Once your tests complete, you should be able to see the results in your Sauce Labs account under ",(0,n.jsx)(t.a,{href:"https://app.saucelabs.com/dashboard/tests/rdc",children:"Automated > Test Results > Real Devices"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>i});a(96540);var n=a(18215);const s={tabItem:"tabItem_Ymn6"};var r=a(74848);function i(e){let{children:t,hidden:a,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>S});var n=a(96540),s=a(18215),r=a(23104),i=a(56347),o=a(205),l=a(57485),u=a(31682),c=a(89466);function p(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const s=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,r=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[u,p]=m({queryString:a,groupId:s}),[b,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,c.Dv)(a);return[s,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),g=(()=>{const e=u??b;return h({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,r]),tabValues:r}}var f=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function x(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),s=o[a].value;s!==n&&(u(t),i(s))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:p,onClick:c,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function j(e){let{lazy:t,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function S(e){const t=(0,f.A)();return(0,v.jsx)(y,{...e,children:p(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var n=a(96540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);