"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[13243],{51871:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var t=s(74848),r=s(28453),o=s(11470),i=s(19365),a=s(86025);const l={id:"setup",title:"Visual Component Testing Setup and Quickstart",sidebar_label:"Setup and Quickstart"},c=void 0,u={id:"visual/component-testing/setup",title:"Visual Component Testing Setup and Quickstart",description:"The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the integration steps.",source:"@site/docs/visual/component-testing/setup.md",sourceDirName:"visual/component-testing",slug:"/visual/component-testing/setup",permalink:"/sauce-docs/pr-preview/pr-2901/visual/component-testing/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual/component-testing/setup.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712351123e3,frontMatter:{id:"setup",title:"Visual Component Testing Setup and Quickstart",sidebar_label:"Setup and Quickstart"}},d={},h=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Integration with Existing Storybook Project",id:"integration-with-existing-storybook-project",level:2},{value:"Install Screener Package",id:"install-screener-package",level:3},{value:"Link Your Sauce Labs Account",id:"link-your-sauce-labs-account",level:3},{value:"Add Screener Script",id:"add-screener-script",level:3},{value:"Create Screener Config File",id:"create-screener-config-file",level:3},{value:"Run Test",id:"run-test",level:3},{value:"View Results",id:"view-results",level:3},{value:"Accept Baseline",id:"accept-baseline",level:3},{value:"Quickstart with Sample Storybook Project",id:"quickstart-with-sample-storybook-project",level:2},{value:"Install Screener Package",id:"install-screener-package-1",level:3},{value:"Link Your Sauce Labs Account",id:"link-your-sauce-labs-account-1",level:3},{value:"Add Screener Script",id:"add-screener-script-1",level:3},{value:"Create Screener Config File",id:"create-screener-config-file-1",level:3},{value:"Run Test",id:"run-test-1",level:3},{value:"View Results",id:"view-results-1",level:3},{value:"Accept Baseline",id:"accept-baseline-1",level:3},{value:"Optional Next Steps",id:"optional-next-steps",level:2}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.admonition,{title:"Screener End-of-life",type:"warning",children:[(0,t.jsxs)(n.p,{children:["The Screener visual testing solution is going to be discontinued on May 31st, 2024. You can migrate to the new Sauce Labs Visual Testing solution by following the ",(0,t.jsx)(n.a,{href:"/visual-testing/",children:"integration steps"}),"."]}),(0,t.jsx)(n.p,{children:"If you have any questions, please reach out to your Customer Success Manager or Sauce Labs Support."})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Screener Docs are Now Sauce Docs"}),(0,t.jsx)("br",{}),"\nAs part of our effort to bring you a single, unified documentation site, we've migrated all Visual Docs from Screener.io to Sauce Docs."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Follow the steps to integrate Sauce Labs Visual Component Testing with Storybook, a UI component development tool. The integration will run your existing Storybook stories as UI regression test cases in our automated visual testing platform."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Get detailed UI test results across your React, Vue, Angular, and HTML components"}),"\n",(0,t.jsx)(n.li,{children:"Facilitate accelerate debugging and shorten release cycles"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"https://saucelabs.com/pricing",children:"Sauce Labs self-serve or enterprise account"})," with access to Visual Testing. To request access, contact your CSM or Sauce Labs Support. Visual Testing is not available for free-trial accounts."]}),"\n",(0,t.jsxs)(n.li,{children:["Your Sauce Labs ",(0,t.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Your Visual Testing ",(0,t.jsx)(n.a,{href:"https://screener.io/v2/account/api-key",children:"Screener API Key"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.a,{href:"https://github.com/",children:"GitHub account"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Have ",(0,t.jsx)(n.a,{href:"https://nodejs.org",children:"Node.js installed"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Have Storybook installed, along with an existing ",(0,t.jsx)(n.a,{href:"https://storybook.js.org/basics/quick-start-guide/",children:"project"})," and set of ",(0,t.jsx)(n.a,{href:"https://storybook.js.org/basics/writing-stories/",children:"component stories"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"integration-with-existing-storybook-project",children:"Integration with Existing Storybook Project"}),"\n",(0,t.jsx)(n.p,{children:"Follow the steps below to add Visual Component Testing functionality to your Storybook project."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["New to Storybook? See ",(0,t.jsx)(n.a,{href:"#quickstart-with-sample-storybook-project",children:"Quickstart with Sample Storybook Project"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"install-screener-package",children:"Install Screener Package"}),"\n",(0,t.jsxs)(n.p,{children:["From your terminal, navigate to your Storybook project directory (e.g., ",(0,t.jsx)(n.code,{children:"cd my-storybook"}),"), then install our ",(0,t.jsx)(n.a,{href:"https://github.com/screener-io/screener-storybook",children:"screener-storybook package"})," as a dependency in your project:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install screener-storybook --save-dev\n"})}),"\n",(0,t.jsx)(n.h3,{id:"link-your-sauce-labs-account",children:"Link Your Sauce Labs Account"}),"\n",(0,t.jsxs)(n.p,{children:["In your terminal, set your Sauce Labs username, Sauce Labs access key, and Visual Testing Screener API key as ",(0,t.jsx)(n.a,{href:"/basics/environment-variables",children:"environment variables"})," to avoid having to enter them with each command and to protect them from exposure in your tests:"]}),"\n",(0,t.jsxs)(o.A,{defaultValue:"Mac/Linux",values:[{label:"Mac/Linux",value:"Mac/Linux"},{label:"Windows Powershell",value:"Windows Powershell"}],children:[(0,t.jsxs)(i.A,{value:"Mac/Linux",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export SAUCE_USERNAME="Replace with your Sauce Labs username"\n'})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export SAUCE_ACCESS_KEY="Replace with your Sauce Labs access key"\n'})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export SCREENER_API_KEY="Replace with your Screener API key"\n'})})]}),(0,t.jsxs)(i.A,{value:"Windows Powershell",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$Env:SAUCE_USERNAME = "Replace with your Sauce Labs username"\n'})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$Env:SAUCE_ACCESS_KEY = "Replace with your Sauce Labs access key"\n'})}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' $Env:SCREENER_API_KEY = "Replace with your Screener API key"\n'})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"add-screener-script",children:"Add Screener Script"}),"\n",(0,t.jsxs)(n.p,{children:["Open your Storybook project's ",(0,t.jsx)(n.strong,{children:"package.json"})," file and add the following npm script to your ",(0,t.jsx)(n.code,{children:'"scripts": {'})," section:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"test-storybook": "screener-storybook --conf screener.config.js"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"create-screener-config-file",children:"Create Screener Config File"}),"\n",(0,t.jsxs)(n.p,{children:["From a text editor or IDE, create a new JavaScript file called ",(0,t.jsx)(n.strong,{children:"screener.config.js"})," and paste in the below code snippet."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"module.exports = {\nprojectRepo: '<your-repo>',\nstorybookConfigDir: '<directory>',\nstorybookStaticDir: '<directory>',\napiKey: process.env.SCREENER_API_KEY,\nresolution: '<resolution>'\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Be sure to replace the placeholder values with your own."}),"\n",(0,t.jsx)(n.p,{children:'If you want to use sauce VMs on your screener tests, you\'ll need to add the sauce object to your screener config file, and all browsers that you want to run on Sauce must have a version with a "." (for example, "11.0", not "11"). For example:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"module.exports = {\nprojectRepo: '<your-repo>',\nstorybookConfigDir: '<directory>',\nstorybookStaticDir: '<directory>',\napiKey: process.env.SCREENER_API_KEY,\nresolution: '<resolution>',\nbrowsers: [\n{\nbrowserName: 'chrome',\nversion: '74.0'\n}\n],\nsauce: {\nusername: process.env.SAUCE_USERNAME,\naccessKey: process.env.SAUCE_ACCESS_KEY\n}\n}\n"})}),"\n",(0,t.jsxs)("table",{id:"table-api",children:[(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"projectRepo"})}),(0,t.jsx)("td",{children:'The name of your project\'s repository (e.g., GitHub repos are in the "owner/repository-name" format).'})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("code",{children:"resolution"})}),(0,t.jsx)("td",{children:"Your desired browser resolution."})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsxs)("td",{children:[(0,t.jsx)("code",{children:"storybookConfigDir"})," or ",(0,t.jsx)("code",{children:"storybookStaticDir"})]}),(0,t.jsxs)("td",{children:[(0,t.jsxs)("p",{children:["These are your Storybook server options. To determine whether you need ",(0,t.jsx)("code",{children:"storybookConfigDir"})," or ",(0,t.jsx)("code",{children:"storybookStaticDir"}),", go to your project directory and find the ",(0,t.jsx)("code",{children:"start-storybook"})," command, usually a script located in a ",(0,t.jsx)("strong",{children:"package.json"})," file."]}),(0,t.jsx)("br",{}),(0,t.jsxs)("p",{children:["If the ",(0,t.jsx)("code",{children:"-c"})," or ",(0,t.jsx)("code",{children:"--config-dir"})," option is set, use ",(0,t.jsx)("code",{children:"storybookConfigDir"})," and that value to your code snippet. If the ",(0,t.jsx)("code",{children:"-s"})," or ",(0,t.jsx)("code",{children:"--static-dir"})," option is set, use the ",(0,t.jsx)("code",{children:"storybookStaticDir"})," with its value."]})]})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["When you're done, save the ",(0,t.jsx)(n.strong,{children:"screener.config.js"})," file to your Storybook project's root folder."]}),"\n",(0,t.jsx)(n.h3,{id:"run-test",children:"Run Test"}),"\n",(0,t.jsx)(n.p,{children:"Run your test by issuing:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run test-storybook\n"})}),"\n",(0,t.jsx)(n.h3,{id:"view-results",children:"View Results"}),"\n",(0,t.jsxs)(n.p,{children:["Go your Visual Testing Dashboard (Sauce Labs > ",(0,t.jsx)(n.strong,{children:"Visual Testing"})," > ",(0,t.jsx)(n.strong,{children:"Log in to Visual"}),") to confirm that your test is running. Instead of ",(0,t.jsx)(n.strong,{children:"sb-6.1-test"}),", you'll see your own Storybook project name.",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,a.A)("img/visual/component-integration-results.png"),alt:"Visual E2E Quickstart running test",width:"300"})]}),"\n",(0,t.jsx)(n.p,{children:"It should take a few minutes to complete."}),"\n",(0,t.jsxs)(n.p,{children:["For each build, you should receive an ",(0,t.jsx)(n.a,{href:"/visual/notifications/",children:"email summary"})," indicating the pass/fail status, delivered to the address associated with your Sauce Labs account."]}),"\n",(0,t.jsx)(n.h3,{id:"accept-baseline",children:"Accept Baseline"}),"\n",(0,t.jsxs)(n.p,{children:['This first test will be labeled as "failed" because there\'s no existing baseline to compare it against. To resolve this, ',(0,t.jsx)(n.a,{href:"/visual/component-testing/workflow/review-workflow/",children:"review and accept"})," the new states as your baseline."]}),"\n",(0,t.jsx)(n.h2,{id:"quickstart-with-sample-storybook-project",children:"Quickstart with Sample Storybook Project"}),"\n",(0,t.jsx)(n.p,{children:"Don't have Storybook, but want to try? Follow the steps below to install our sample project and run your first Storybook test with Component Testing."}),"\n",(0,t.jsxs)(n.p,{children:["From your terminal, navigate to your machine's ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Home_directory",children:"home directory"}),", then run the following commands."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Install Storybook and create project folder called ",(0,t.jsx)(n.code,{children:"my-storybook"}),":"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx create-react-app my-storybook\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Navigate to Storybook project:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd my-storybook\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Add Storybook to project folder:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx -p @storybook/cli sb init\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Launch Storybook project and open localhost:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run storybook\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Once Storybook has been launched, you'll see a response like this in your terminal.",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,a.A)("img/visual/component-expected-response.png"),alt:"component testing expected-response",width:"400"})]}),"\n",(0,t.jsx)(n.h3,{id:"install-screener-package-1",children:"Install Screener Package"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open a new terminal window (separate from the one in the previous step), then navigate to your Storybook project directory:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd my-storybook\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Install the ",(0,t.jsx)(n.a,{href:"https://github.com/screener-io/screener-storybook",children:"screener-storybook package"})," as a dependency in your project:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install screener-storybook --save-dev\n"})}),"\n",(0,t.jsx)(n.h3,{id:"link-your-sauce-labs-account-1",children:"Link Your Sauce Labs Account"}),"\n",(0,t.jsxs)(n.p,{children:["In your terminal, set your Visual Testing Screener API key as an ",(0,t.jsx)(n.a,{href:"/basics/environment-variables",children:"environment variable"})," to avoid having to enter them with each command and to protect them from exposure in your tests:"]}),"\n",(0,t.jsxs)(o.A,{defaultValue:"Mac/Linux",values:[{label:"Mac/Linux",value:"Mac/Linux"},{label:"Windows Powershell",value:"Windows Powershell"}],children:[(0,t.jsx)(i.A,{value:"Mac/Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export SCREENER_API_KEY="<your Screener API key>"\n'})})}),(0,t.jsx)(i.A,{value:"Windows Powershell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$Env:SCREENER_API_KEY = "<your Screener API key>"\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"add-screener-script-1",children:"Add Screener Script"}),"\n",(0,t.jsxs)(n.p,{children:["Open your Storybook project's ",(0,t.jsx)(n.strong,{children:"package.json"})," file and add the following npm script to your ",(0,t.jsx)(n.code,{children:'"scripts": {'})," section:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"test-storybook": "screener-storybook --conf screener.config.js"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"create-screener-config-file-1",children:"Create Screener Config File"}),"\n",(0,t.jsxs)(n.p,{children:["From a text editor or IDE, create a new JavaScript file called ",(0,t.jsx)(n.strong,{children:"screener.config.js"}),", then paste in the below snippet:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"module.exports = {\nprojectRepo: 'sb-6.1-test',\nstorybookConfigDir: '.storybook',\napiKey: process.env.SCREENER_API_KEY,\nresolution: '1024x768'\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When you're done, save the ",(0,t.jsx)(n.strong,{children:"screener.config.js"})," file to your Storybook project's root folder (",(0,t.jsx)(n.strong,{children:"my-storybook"}),")."]}),"\n",(0,t.jsx)(n.h3,{id:"run-test-1",children:"Run Test"}),"\n",(0,t.jsx)(n.p,{children:"Run your test:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run test-storybook\n"})}),"\n",(0,t.jsx)(n.h3,{id:"view-results-1",children:"View Results"}),"\n",(0,t.jsxs)(n.p,{children:["Go your Visual Testing Dashboard (Sauce Labs ",(0,t.jsx)(n.strong,{children:"Visual Testing"})," > ",(0,t.jsx)(n.strong,{children:"Log in to Visual"}),") to confirm that your test is running."]}),"\n",(0,t.jsxs)(n.p,{children:["You'll see a new project under the name ",(0,t.jsx)(n.strong,{children:"sb-6.1-test"}),", plus a new ",(0,t.jsx)(n.a,{href:"/visual/e2e-testing/workflow/baseline-branch/",children:"branch"})," called ",(0,t.jsx)(n.strong,{children:"default"}),".",(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,a.A)("img/visual/component-quickstart-all-projects.png"),alt:"Visual E2E Quickstart running test",width:"500"})]}),"\n",(0,t.jsx)(n.p,{children:"The test should take a few minutes to complete."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(s,{children:[(0,t.jsxs)("summary",{children:["Click ",(0,t.jsx)("strong",{children:"Show Logs"})," > ",(0,t.jsx)("strong",{children:"View Logs on Sauce Labs"})," to see your ",(0,t.jsx)("a",{href:"/test-results",children:"test results"})," on Sauce Labs."]}),(0,t.jsx)("img",{src:(0,a.A)("img/visual/e2e-quickstart-view-logs.png"),alt:"Visual E2E Quickstart accept state",width:"205"}),(0,t.jsx)("br",{}),(0,t.jsx)("img",{src:(0,a.A)("img/visual/e2e-quickstart-view-on-sauce.png"),alt:"Visual E2E Quickstart accept state",width:"250"})]})}),"\n",(0,t.jsxs)(n.p,{children:["For each build, you should receive an ",(0,t.jsx)(n.a,{href:"/visual/notifications/",children:"email summary"})," indicating the pass/fail status, delivered to the address associated with your Sauce Labs account."]}),"\n",(0,t.jsx)(n.h3,{id:"accept-baseline-1",children:"Accept Baseline"}),"\n",(0,t.jsxs)(n.p,{children:['This first test will be labeled as "failed" because there\'s no existing baseline to compare it against. To resolve this, ',(0,t.jsx)(n.a,{href:"/visual/component-testing/workflow/review-workflow/",children:"review and accept"})," the new states as your baseline."]}),"\n",(0,t.jsx)(n.h2,{id:"optional-next-steps",children:"Optional Next Steps"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Learn more about the Visual Component Testing ",(0,t.jsx)(n.a,{href:"/visual/component-testing/workflow/review-workflow",children:"UI review workflow"}),", ",(0,t.jsx)(n.a,{href:"/visual/component-testing/storybook-static/",children:"testing static Storybook web apps"}),", and the concept of ",(0,t.jsx)(n.a,{href:"https://saucelabs.com/blog/what-is-automated-visual-regression-testing",children:"automated visual regression testing"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Add more ",(0,t.jsx)(n.a,{href:"https://github.com/screener-io/screener-storybook#config-options",children:"test configuration options"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Set up continuous visual testing by ",(0,t.jsx)(n.a,{href:"/visual/component-testing/integrations/continuous-integration",children:"integrating Visual E2E Testing into your CI"})]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},19365:(e,n,s)=>{s.d(n,{A:()=>i});s(96540);var t=s(18215);const r={tabItem:"tabItem_Ymn6"};var o=s(74848);function i(e){let{children:n,hidden:s,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:s,children:n})}},11470:(e,n,s)=>{s.d(n,{A:()=>w});var t=s(96540),r=s(18215),o=s(23104),i=s(56347),a=s(205),l=s(57485),c=s(31682),u=s(89466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l.aZ)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,o=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[c,d]=j({queryString:s,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Dv)(s);return[r,(0,t.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:r}),b=(()=>{const e=c??x;return p({value:e,tabValues:o})?e:null})();(0,a.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=s(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=s(74848);function y(e){let{className:n,block:s,selectedValue:t,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,s=l.indexOf(n),r=a[s].value;r!==t&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:o}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function f(e){let{lazy:n,children:s,selectedValue:r}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=x(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,m.jsx)(y,{...e,...n}),(0,m.jsx)(f,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,m.jsx)(v,{...e,children:d(e.children)},String(n))}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);