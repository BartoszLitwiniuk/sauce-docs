"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[40367],{84830:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=o(74848),t=o(28453);const i={id:"apf-local-engine",title:"Using the Local Engine (APIF-Local)",sidebar_label:"Using the Local Engine",keywords:["api-testing","how-to","local-engine","apif"]},s=void 0,l={id:"api-testing/on-prem/how-to/apf-local-engine",title:"Using the Local Engine (APIF-Local)",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/how-to/apf-local-engine.md",sourceDirName:"api-testing/on-prem/how-to",slug:"/api-testing/on-prem/how-to/apf-local-engine",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/how-to/apf-local-engine",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/how-to/apf-local-engine.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"apf-local-engine",title:"Using the Local Engine (APIF-Local)",sidebar_label:"Using the Local Engine",keywords:["api-testing","how-to","local-engine","apif"]}},r={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>apif-local</code> - Download",id:"apif-local---download",level:2},{value:"<code>apif-local</code> - Run",id:"apif-local---run",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Head:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Legacy Documentation"}),(0,a.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,a.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"apif-local-Local"})," is the API Fortress local engine."]}),"\n",(0,a.jsx)(n.p,{children:"The objective of this program is to allow developers to run API Fortress tests on their computers, and to validate the tests being developed locally."}),"\n",(0,a.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A modern Linux/Mac/Windows computer"}),"\n",(0,a.jsx)(n.li,{children:"Make sure Java 8 is installed and is present in the command line path"}),"\n",(0,a.jsx)(n.li,{children:"Unzip the file provided by our team in a location that is convenient to you"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsx)(n.p,{children:"The only essential key in the configuration is the license. Everything else can be provided on the command line. We do, however, suggest you configure the tool properly once you get accustomed to it and start using it\xa0regularly."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"license: 'abcabcabc'\nhooks:\n- key: examples\n  url: https://mastiff.apifortress.com/app/api/rest/v3/abcabc-123-123-123\n  credentials:\n  username: info@example.com\n  password: password1\n\n- key: local\n  url: http://mydeployment.com:8080/app/api/rest/v3/abcabcabc-123-123-123\n  credentials:\n  username: john@doe.com\n  password: password1\n"})}),"\n",(0,a.jsx)(n.p,{children:"In this example, we configured two different hooks, related to two different API Fortress instances. The value of the \u201ckey\u201d can be used to reference a profile without the need to explicitly introduce the hook URL and credentials every time in the command line."}),"\n",(0,a.jsx)(n.p,{children:"The configuration file can be placed in multiple locations, based on your preferences."}),"\n",(0,a.jsx)(n.p,{children:"The priority check is the following:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"A path provided in the command line"}),"\n",(0,a.jsx)(n.li,{children:"The current working directory"}),"\n",(0,a.jsx)(n.li,{children:"The directory where apif-local.jar resides"}),"\n",(0,a.jsx)(n.li,{children:"A .apifortress sub-directory in the user\u2019s home directory"}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"apif-local---download",children:[(0,a.jsx)(n.code,{children:"apif-local"})," - Download"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"java -jar apif-local.jar download [hook] <options>\n"})}),"\n",(0,a.jsx)(n.p,{children:"This mode allows you to download full projects, or, selectively, tests, vault and environments, from an API Fortress platform instance."}),"\n",(0,a.jsxs)(n.admonition,{title:"Use the Help feature",type:"tip",children:[(0,a.jsx)(n.p,{children:"Use the following command to access details about the possible switches:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"java -jar apif-local.jar help\n"})})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Examples"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"java -jar apif-local.jar download examples -l /tmp/stuff\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Will download the full project represented by they key \u201cexamples\u201d in the directory /tmp/stuff."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"java -jar apif-local.jar download examples -l /tmp/stuff -v\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Will download just the project\u2019s vault."})}),"\n",(0,a.jsxs)(n.h2,{id:"apif-local---run",children:[(0,a.jsx)(n.code,{children:"apif-local"})," - Run"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"java -jar apif-local.jar run [path] <options>\n"})}),"\n",(0,a.jsx)(n.p,{children:"Runs an API Fortress test, located in the local file system. See apif-local.jar help for details about the possible switches."}),"\n",(0,a.jsx)(n.p,{children:"The expected file system should look like the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\\\\any_directory\n  \\\\api_fortress_tests\n    \\\\simple_test_1\n        | unit.xml\n        | input.xml\n    \\\\advanced_test_2\n        | unit.xml\n        | input.xml\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Every test is represented by a directory, containing an ",(0,a.jsx)(n.code,{children:"input.xml"})," and a ",(0,a.jsx)(n.code,{children:"unit.xml"})," file. This exact format is also followed by ",(0,a.jsx)(n.code,{children:"apif-local"})," - Download."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Examples"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"java -jar apif-local.jar run any_directory/api_fortress_tests/simple_test_1\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Will run the test ",(0,a.jsx)(n.code,{children:"simple_test_1"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"java -jar apif-local.jar run any_directory/api_fortress_tests -r\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Will run all the tests contained in the ",(0,a.jsx)(n.code,{children:"api_fortress_tests"})," directory."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>l});var a=o(96540);const t={},i=a.createContext(t);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);