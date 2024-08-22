"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[63698],{69586:(e,n,i)=>{i.d(n,{Ay:()=>r,RM:()=>a});var s=i(74848),t=i(28453);const a=[];function l(e){const n={code:"code",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["You can clip to a specific element on the page by using the ",(0,s.jsx)(n.code,{children:"clipSelector"})," option when calling Sauce visual."]}),"\n",(0,s.jsx)(n.p,{children:"Notes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Clipping is done by taking a screenshot of the page then clipping it to the location of the requested element."}),"\n",(0,s.jsx)(n.li,{children:"We will attempt to scroll the element into view before taking the snapshot."}),"\n",(0,s.jsx)(n.li,{children:"We can only take a screenshot of what is visible in the current viewport, however, this can be combined with full page option to enable clipping large vertical elements."}),"\n"]})]})}function r(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8254:(e,n,i)=>{i.d(n,{Ay:()=>r,RM:()=>a});var s=i(74848),t=i(28453);const a=[];function l(e){const n={a:"a",code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Variable Name"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_USERNAME"})}),(0,s.jsx)(n.td,{children:"required"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Your Sauce Labs username. You can get this from the header of app.saucelabs.com"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_ACCESS_KEY"})}),(0,s.jsx)(n.td,{children:"required"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Your Sauce Labs access key. You can get this from the header of app.saucelabs.com"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_REGION"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["The region you'd like to run your Visual tests in. Defaults to ",(0,s.jsx)(n.code,{children:"us-west-1"})," if not supplied. Can be one of the following: ",(0,s.jsx)("br",{})," ",(0,s.jsx)(n.code,{children:"'eu-central-1'"}),", ",(0,s.jsx)(n.code,{children:"'us-west-1'"})," or ",(0,s.jsx)(n.code,{children:"'us-east-4'"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_VISUAL_BUILD_NAME"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"The name you would like to appear in the Sauce Visual dashboard."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_VISUAL_BRANCH"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"The branch name you would like to associate this build with. We recommend using your current VCS branch in CI."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_VISUAL_DEFAULT_BRANCH"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["The main branch name you would like to associate this build with. Usually ",(0,s.jsx)(n.code,{children:"main"})," or ",(0,s.jsx)(n.code,{children:"master"})," or alternatively the branch name your current branch was derived from. ",(0,s.jsx)(n.a,{href:"/sauce-docs/pr-preview/pr-2900/visual-testing/workflows/ci",children:"Follow me to learn more"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_VISUAL_PROJECT"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"The label / project you would like to associate this build with."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_VISUAL_BUILD_ID"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["For advanced users, a user-supplied SauceLabs Visual build ID. Can be used to create builds in advance using the GraphQL API. This can be used to parallelize tests with multiple browsers, shard, or more. ",(0,s.jsx)("br",{})," By default, this is not set and we create / finish a build during setup / teardown."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"SAUCE_VISUAL_CUSTOM_ID"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"For advanced users, a user-supplied custom ID to identify this build. Can be used in CI to identify / check / re-check the status of a single build. Usage suggestions: CI pipeline ID."})]})]})]})}function r(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},62443:(e,n,i)=>{i.d(n,{Ay:()=>r,RM:()=>a});var s=i(74848),t=i(28453);const a=[];function l(e){const n={admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"The maximum number of scrolls and stitches in a full page screenshot is 10."})})}function r(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},32309:(e,n,i)=>{i.d(n,{Ay:()=>r,RM:()=>a});var s=i(74848),t=i(28453);const a=[];function l(e){const n={p:"p",...(0,t.R)(),...e.components};return(0,s.jsx)(n.p,{children:"Sauce Visual Binding allows to configure which kinds of changes should be effective on snapshot."})}function r(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},12758:(e,n,i)=>{i.d(n,{Ay:()=>r,RM:()=>a});var s=i(74848),t=i(28453);const a=[];function l(e){const n={p:"p",...(0,t.R)(),...e.components};return(0,s.jsx)(n.p,{children:"Sauce Visual Binding allows to configure which kinds of changes should be effective specific regions of the snapshot."})}function r(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},59697:(e,n,i)=>{i.d(n,{Ay:()=>r,RM:()=>a});var s=i(74848),t=i(28453);const a=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Sauce Visual allows selective diffing that permits to ignore changes from a certain kind (",(0,s.jsxs)(n.em,{children:["more information ",(0,s.jsx)(n.a,{href:"/visual-testing/selective-diffing/",children:"here"})]}),")."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Selective diffing is only available with ",(0,s.jsx)(n.code,{children:"Balanced"})," diffing method ",(0,s.jsx)(n.strong,{children:"AND"})," with DOM capture enabled."]})})]})}function r(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},17666:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>f,contentTitle:()=>g,default:()=>v,frontMatter:()=>p,metadata:()=>x,toc:()=>m});var s=i(74848),t=i(28453),a=i(11470),l=i(19365),r=i(69586),o=i(62443),c=i(8254),d=i(59697),u=i(32309),h=i(12758);const p={sidebar_label:"Java"},g="Java WebDriver Integration",x={id:"visual-testing/integrations/java",title:"Java WebDriver Integration",description:"Introduction",source:"@site/docs/visual-testing/integrations/java.md",sourceDirName:"visual-testing/integrations",slug:"/visual-testing/integrations/java",permalink:"/sauce-docs/pr-preview/pr-2900/visual-testing/integrations/java",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/visual-testing/integrations/java.md",tags:[],version:"current",lastUpdatedBy:"Kerem Beygo",lastUpdatedAt:1722005627e3,frontMatter:{sidebar_label:"Java"},sidebar:"docs",previous:{title:"C#/.Net",permalink:"/sauce-docs/pr-preview/pr-2900/visual-testing/integrations/csharp"},next:{title:"Nightwatch",permalink:"/sauce-docs/pr-preview/pr-2900/visual-testing/integrations/nightwatch"}},f={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Step 1: Add Sauce Visual dependency",id:"step-1-add-sauce-visual-dependency",level:3},{value:"Step 2: Configure Visual Testing integration",id:"step-2-configure-visual-testing-integration",level:3},{value:"Step 3: Add visual tests in your tests",id:"step-3-add-visual-tests-in-your-tests",level:3},{value:"Step 4: Configure your Sauce Labs credentials",id:"step-4-configure-your-sauce-labs-credentials",level:3},{value:"Step 5: Run the test",id:"step-5-run-the-test",level:3},{value:"Advanced usage",id:"advanced-usage",level:2},{value:"Customizing Your Builds (Environment Variables)",id:"customizing-your-builds-environment-variables",level:3},...c.RM,{value:"Test results summary",id:"test-results-summary",level:3},{value:"Build attributes",id:"build-attributes",level:3},{value:"Ignored regions",id:"ignored-regions",level:3},{value:"Component-based ignored region",id:"component-based-ignored-region",level:4},{value:"User-specified ignored region",id:"user-specified-ignored-region",level:4},{value:"Selective Diffing",id:"selective-diffing",level:3},...d.RM,{value:"Screenshot-wide configuration",id:"screenshot-wide-configuration",level:4},...u.RM,{value:"Area-specific configuration",id:"area-specific-configuration",level:4},...h.RM,{value:"Capturing the DOM snapshot",id:"capturing-the-dom-snapshot",level:3},{value:"Full page screenshots",id:"full-page-screenshots",level:3},...o.RM,{value:"Clip to an element",id:"clip-to-an-element",level:3},...r.RM,{value:"Examples",id:"examples",level:2}];function j(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"java-webdriver-integration",children:"Java WebDriver Integration"}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["This guide requires an existing Java JUnit / TestNG setup.",(0,s.jsx)("br",{}),"\nYou can alternatively take a look to our ",(0,s.jsx)(n.a,{href:"#examples",children:"example repository"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Sauce Visual provides a library allowing integration with ",(0,s.jsx)(n.a,{href:"https://www.selenium.dev/documentation/webdriver/",children:"WebDriver"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Sauce Visual plugin provides a library exposing a ",(0,s.jsx)(n.code,{children:"VisualApi"})," object that provides actions:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"visual.sauceVisualCheck()"}),": Takes a screenshot and send it to Sauce Visual for comparison."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"visual.sauceVisualResults()"}),": Waits for all diff calculations to complete and returns a summary of results.\nSee ",(0,s.jsx)(n.a,{href:"#test-results-summary",children:"Test results summary"})," for more details about summary format and sample usage."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,s.jsx)(n.h3,{id:"step-1-add-sauce-visual-dependency",children:"Step 1: Add Sauce Visual dependency"}),"\n",(0,s.jsxs)(n.p,{children:["Add ",(0,s.jsx)(n.a,{href:"https://central.sonatype.com/artifact/com.saucelabs.visual/java-client",children:"Sauce Visual"})," dependency to your pom.xml"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-xml",metastring:"reference",children:"https://github.com/saucelabs/visual-examples/blob/main/wd-java-testng/pom.xml#L18-L23\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Note: You can find the latest versions available ",(0,s.jsx)(n.a,{href:"https://central.sonatype.com/search?q=com.saucelabs.visual",children:"here"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"step-2-configure-visual-testing-integration",children:"Step 2: Configure Visual Testing integration"}),"\n",(0,s.jsx)(n.p,{children:"Declare a RemoteWebDriver and a VisualApi instance as class variables"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import org.openqa.selenium.remote.RemoteWebDriver;\nimport com.saucelabs.visual.VisualApi;\n\nprivate static VisualApi visual;\nprivate static RemoteWebDriver driver;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Initialize ",(0,s.jsx)(n.code,{children:"RemoteWebDriver"})," and ",(0,s.jsx)(n.code,{children:"VisualApi"})]}),"\n",(0,s.jsxs)(a.A,{defaultValue:"JUnit",values:[{label:"JUnit",value:"JUnit"},{label:"TestNG",value:"TestNG"}],children:[(0,s.jsx)(l.A,{value:"JUnit",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import org.junit.jupiter.api.BeforeAll;\n\n@BeforeAll\npublic static void init() {\n    driver = new RemoteWebDriver(webDriverUrl, capabilities);\n    visual = new VisualApi.Builder(driver, sauceUsername, sauceAccessKey, DataCenter.US_WEST_1).build();\n}\n"})})}),(0,s.jsx)(l.A,{value:"TestNG",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import org.testng.annotations.BeforeSuite;\n\n@BeforeSuite\npublic static void init() {\n    driver = new RemoteWebDriver(webDriverUrl, capabilities);\n    visual = new VisualApi.Builder(driver, sauceUsername, sauceAccessKey, DataCenter.US_WEST_1).build();\n}\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"To enhance efficiency in managing tests, it's important to provide a specific test name and suite name for each test. This practice allows Sauce Visual to effectively organize snapshots into coherent groups. As a result, it simplifies the review process, saving time and effort in navigating through test results and understanding the context of each snapshot."}),"\n",(0,s.jsx)(n.p,{children:"Moreover, our Java Binding offers an automated solution to this process. By integrating the following code snippets into your tests, the Java Binding can automatically assign appropriate test names and suite names, streamlining your testing workflow."}),"\n",(0,s.jsxs)(a.A,{defaultValue:"JUnit",values:[{label:"JUnit",value:"JUnit"},{label:"TestNG",value:"TestNG"}],children:[(0,s.jsx)(l.A,{value:"JUnit",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import com.saucelabs.visual.junit5.TestMetaInfoExtension;\nimport org.junit.jupiter.api.extension.ExtendWith;\n\n@ExtendWith({TestMetaInfoExtension.class})\npublic class MyJunitTestClass {\n    ...\n}\n"})})}),(0,s.jsx)(l.A,{value:"TestNG",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import com.saucelabs.visual.testng.TestMetaInfoListener;\nimport org.testng.annotations.Listeners;\n\n@Listeners({TestMetaInfoListener.class})\npublic class MyTestNGTestClass {\n    ...\n}\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Don't forget to quit the WebDriver"}),"\n",(0,s.jsxs)(a.A,{defaultValue:"JUnit",values:[{label:"JUnit",value:"JUnit"},{label:"TestNG",value:"TestNG"}],children:[(0,s.jsx)(l.A,{value:"JUnit",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import org.junit.jupiter.api.AfterAll;\n\n@AfterAll\npublic static void tearDown() {\n    if (driver != null) {\n        driver.quit();\n    }\n}\n"})})}),(0,s.jsx)(l.A,{value:"TestNG",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import org.testng.annotations.AfterSuite;\n\n@AfterSuite\npublic static void tearDown() {\n    if (driver != null) {\n        driver.quit();\n    }\n}\n"})})})]}),"\n",(0,s.jsx)(n.h3,{id:"step-3-add-visual-tests-in-your-tests",children:"Step 3: Add visual tests in your tests"}),"\n",(0,s.jsx)(n.p,{children:"Add a check to one of your tests:"}),"\n",(0,s.jsxs)(a.A,{defaultValue:"JUnit",values:[{label:"JUnit",value:"JUnit"},{label:"TestNG",value:"TestNG"}],children:[(0,s.jsx)(l.A,{value:"JUnit",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'import org.junit.jupiter.api.Test;\n\n@Test\nvoid checkLoginLooksTheSame() {\n    var loginPage = new LoginPage(driver);\n    loginPage.open();\n\n    visual.sauceVisualCheck("Before Login");\n}\n'})})}),(0,s.jsx)(l.A,{value:"TestNG",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'import org.testng.annotations.Test;\n\n@Test\nvoid checkLoginLooksTheSame() {\n    var loginPage = new LoginPage(driver);\n    loginPage.open();\n\n    visual.sauceVisualCheck("Before Login");\n}\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"step-4-configure-your-sauce-labs-credentials",children:"Step 4: Configure your Sauce Labs credentials"}),"\n",(0,s.jsxs)(n.p,{children:["Sauce Visual relies on environment variables for authentications.",(0,s.jsx)("br",{}),"\nBoth ",(0,s.jsx)(n.code,{children:"SAUCE_USERNAME"})," and ",(0,s.jsx)(n.code,{children:"SAUCE_ACCESS_KEY"})," need to be set prior starting your Java job."]}),"\n",(0,s.jsxs)(n.p,{children:["Username and Access Key can be retrieved from ",(0,s.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"https://app.saucelabs.com/user-settings"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"export SAUCE_USERNAME=__YOUR_SAUCE_USER_NAME__\nexport SAUCE_ACCESS_KEY=__YOUR_SAUCE_ACCESS_KEY__\n"})}),"\n",(0,s.jsx)(n.h3,{id:"step-5-run-the-test",children:"Step 5: Run the test"}),"\n",(0,s.jsxs)(n.p,{children:["Upon executing your tests for the first time under this step, a visual baseline is automatically created in our system. This baseline serves as the standard for all subsequent WebDriver tests. As new tests are run, they are compared to this original baseline, with any deviations highlighted to signal visual changes. These comparisons are integral for detecting any unintended visual modifications early in your development cycle. All test builds, including the initial baseline and subsequent runs, can be monitored and managed through the Sauce Labs platform at ",(0,s.jsx)(n.a,{href:"https://app.saucelabs.com/visual/builds",children:"Sauce Visual Builds"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Remember, the baseline is established during the initial run, and any subsequent visual differences detected will be marked for review."}),"\n",(0,s.jsx)(n.h2,{id:"advanced-usage",children:"Advanced usage"}),"\n",(0,s.jsx)(n.h3,{id:"customizing-your-builds-environment-variables",children:"Customizing Your Builds (Environment Variables)"}),"\n",(0,s.jsxs)(n.p,{children:["Below are the environment variables available in the Sauce Visual Java plugin. Keep in mind that the variables defined in ",(0,s.jsx)(n.code,{children:"CheckOptions"})," configuration have precedence over these."]}),"\n",(0,s.jsx)(c.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"test-results-summary",children:"Test results summary"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"VisualApi#sauceVisualResults()"})," returns a summary of test results in ",(0,s.jsx)(n.code,{children:"Map<DiffStatus, Integer>"})," format where ",(0,s.jsx)(n.code,{children:"DiffStatus"})," is one of the following:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DiffStatus.QUEUED"}),": Diffs that are pending for processing. Should be 0 in case the test is completed without any timeouts"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DiffStatus.EQUAL"}),": Diffs that have no changes detected"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DiffStatus.UNAPPROVED"}),": Diffs that have detected changes and waiting for action"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DiffStatus.APPROVED"}),": Diffs that have detected changes and have been approved"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DiffStatus.REJECTED"}),": Diffs that have detected changes and have been rejected"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Sample usage:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"var EXPECTED_TOTAL_UNAPPROVED_DIFFS = 0;\n\nassertEquals(visual.sauceVisualResults().get(DiffStatus.UNAPPROVED), EXPECTED_TOTAL_UNAPPROVED_DIFFS);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"build-attributes",children:"Build attributes"}),"\n",(0,s.jsxs)(n.p,{children:["When creating the service in ",(0,s.jsx)(n.code,{children:"VisualApi"}),", extra fields can be set to define the context, thus acting on which baselines new snapshots will be compared to. (",(0,s.jsx)(n.a,{href:"/sauce-docs/pr-preview/pr-2900/visual-testing#baseline-matching",children:"More info on baseline matching"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["It needs to be defined through the ",(0,s.jsx)(n.code,{children:"VisualApi.Builder"})," object."]}),"\n",(0,s.jsx)(n.p,{children:"Methods available:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"withBuild(String build)"}),": Sets the name of the build"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"withProject(String project)"}),": Sets the name of the project"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"withBranch(String branch)"}),": Sets the name of the branch"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"withDefaultBranch(String defaultBranch)"}),": Sets the name of the default branch"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'import com.saucelabs.visual.VisualApi;\nimport com.saucelabs.visual.DataCenter;\n\nvisual = new VisualApi.Builder(driver, username, accessKey, DataCenter.US_WEST_1)\n          .withBuild("Sauce Demo Test")\n          .withBranch("main")\n          .withProject("Java examples")\n          .build();\n'})}),"\n",(0,s.jsx)(n.h3,{id:"ignored-regions",children:"Ignored regions"}),"\n",(0,s.jsx)(n.h4,{id:"component-based-ignored-region",children:"Component-based ignored region"}),"\n",(0,s.jsx)(n.p,{children:"Sauce Visual provides a way to ignore a list of components."}),"\n",(0,s.jsx)(n.p,{children:"An ignored component can be a specific element from the page."}),"\n",(0,s.jsx)(n.p,{children:"Those ignored components are specified when requesting a new snapshot."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'import com.saucelabs.visual.CheckOptions;\n\nCheckOptions options = new CheckOptions();\noptions.setIgnoreElements(List.of(\n  // AddBackpackToCartButton will be ignored\n  inventoryPage.getAddBackpackToCartButton()\n));\nvisual.sauceVisualCheck("Inventory Page", options);\n'})}),"\n",(0,s.jsx)(n.h4,{id:"user-specified-ignored-region",children:"User-specified ignored region"}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, ignored regions can be user-specified areas. A region is defined by four elements."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"x"}),", ",(0,s.jsx)(n.code,{children:"y"}),": The location of the top-left corner of the ignored region"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"width"}),": The width of the region to ignore"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"height"}),": The height of the region to ignore"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Note: all values are pixels"})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'import com.saucelabs.visual.CheckOptions;\nimport com.saucelabs.visual.model.IgnoreRegion;\n\nCheckOptions options = new CheckOptions();\nIgnoreRegion ignoreRegion = new IgnoreRegion(\n  100, // x\n  100,  // y\n  200, // width\n  200, // height\n);\noptions.setIgnoreRegions(List.of(ignoreRegion));\nvisual.sauceVisualCheck("Before Login", options);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"selective-diffing",children:"Selective Diffing"}),"\n",(0,s.jsx)(d.Ay,{}),"\n",(0,s.jsx)(n.h4,{id:"screenshot-wide-configuration",children:"Screenshot-wide configuration"}),"\n",(0,s.jsx)(u.Ay,{}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.p,{children:"Ignoring only one kind:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'    visual.sauceVisualCheck(\n        "login-page",\n        new CheckOptions.Builder()\n            .withDiffingMethod(DiffingMethod.BALANCED)\n            .withCaptureDom(true)\n            // Every content change will be ignored\n            .disableOnly(EnumSet.of(DiffingFlag.Content))\n            .build());\n'})}),"\n",(0,s.jsx)(n.p,{children:"Ignoring all kinds except one:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'    visual.sauceVisualCheck(\n        "login-page",\n        new CheckOptions.Builder()\n            .withDiffingMethod(DiffingMethod.BALANCED)\n            .withCaptureDom(true)\n            // Only style changes will be considered as a diff\n            .enableOnly(EnumSet.of(DiffingFlag.Style))\n            .build());\n'})}),"\n",(0,s.jsx)(n.h4,{id:"area-specific-configuration",children:"Area-specific configuration"}),"\n",(0,s.jsx)(h.Ay,{}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'  WebElement usernameInput = driver.findElement(By.id("user-name"));\n  WebElement passwordInput = driver.findElement(By.id("password"));\n\n  visual.sauceVisualCheck(\n      "login-page",\n      new CheckOptions.Builder()\n          .withDiffingMethod(DiffingMethod.BALANCED)\n          .withCaptureDom(true)\n          // Ignore all kind of changes for element #user-name\n          .enableOnly(EnumSet.noneOf(DiffingFlag.class), usernameInput)\n          // Ignore only style changes for element #password\n          .enableOnly(EnumSet.of(DiffingFlag.Style), passwordInput)\n          .build());\n'})}),"\n",(0,s.jsx)(n.h3,{id:"capturing-the-dom-snapshot",children:"Capturing the DOM snapshot"}),"\n",(0,s.jsx)(n.p,{children:"Sauce Visual does not capture dom snapshot by default. It can be changed in options."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'import com.saucelabs.visual.CheckOptions;\n\nCheckOptions options = new CheckOptions();\noptions.setCaptureDom(true);\nvisual.sauceVisualCheck("Inventory Page", options);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"full-page-screenshots",children:"Full page screenshots"}),"\n",(0,s.jsxs)(n.p,{children:["By default, only the current viewport is captured when ",(0,s.jsx)(n.code,{children:".sauceVisualCheck"})," is used. You can opt in to capturing the entire page by using the ",(0,s.jsx)(n.code,{children:"enableFullPageScreenshots"})," option. It will capture everything by scrolling and stitching multiple screenshots together."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["It's recommended to use the ",(0,s.jsx)(n.code,{children:"withHideAfterFirstScroll"})," method for fixed or sticky position elements such as sticky headers or consent banners."]})}),"\n",(0,s.jsxs)(n.p,{children:["Configuration should be specified using the ",(0,s.jsx)(n.code,{children:"FullPageScreenshotConfig.Builder"})," object."]}),"\n",(0,s.jsx)(n.p,{children:"Methods available:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"withDelayAfterScrollMs(int delayAfterScrollMs)"}),": Delay in ms after scrolling and before taking screenshots. The default value is 0. We recommend using this option for lazy loading content."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"withDisableCSSAnimation(Boolean disableCSSAnimation)"}),": Disable CSS animations and the input caret in the app. The default value is true."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"withHideAfterFirstScroll(String... hideAfterFirstScroll)"}),": One or more CSS selectors that we should remove from the page after the first scroll. Useful for hiding fixed elements such as headers, cookie banners, etc."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"withHideScrollBars(Boolean hideScrollBars)"}),": Hide all scrollbars in the app. The default value is true."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"withScrollLimit(int scrollLimit)"}),": Limit the number of screenshots taken for scrolling and stitching. The default value is 10. The value needs to be between 1 and 10."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'import com.saucelabs.visual.CheckOptions;\n\nCheckOptions options = new CheckOptions();\noptions.enableFullPageScreenshots();\nvisual.sauceVisualCheck("Long content page", options);\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'import com.saucelabs.visual.CheckOptions;\nimport com.saucelabs.visual.model.FullPageScreenshotConfig;\n\nCheckOptions options = new CheckOptions();\nFullPageScreenshotConfig config = new FullPageScreenshotConfig.Builder()\n        .withDelayAfterScrollMs(500)\n        .withDisableCSSAnimation(false)\n        .withHideAfterFirstScroll("#header")\n        .withHideScrollBars(false)\n        .withScrollLimit(5)\n        .build();\noptions.enableFullPageScreenshots(config);\nvisual.sauceVisualCheck("Long content page", options);\n'})}),"\n",(0,s.jsx)(o.Ay,{}),"\n",(0,s.jsx)(n.h3,{id:"clip-to-an-element",children:"Clip to an element"}),"\n",(0,s.jsx)(r.Ay,{}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'import com.saucelabs.visual.CheckOptions;\n\nCheckOptions options = new CheckOptions();\noptions.setClipSelector(".your-css-selector");\nvisual.sauceVisualCheck("Visible Sale Banner", options);\n'})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Two examples are available:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An example project ",(0,s.jsx)(n.a,{href:"https://github.com/saucelabs/visual-examples/tree/main/wd-java",children:"using Junit"})]}),"\n",(0,s.jsxs)(n.li,{children:["An example project ",(0,s.jsx)(n.a,{href:"https://github.com/saucelabs/visual-examples/tree/main/wd-java-testng",children:"using TestNG"})]}),"\n"]})]})}function v(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>l});i(96540);var s=i(18215);const t={tabItem:"tabItem_Ymn6"};var a=i(74848);function l(e){let{children:n,hidden:i,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,l),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>w});var s=i(96540),t=i(18215),a=i(23104),l=i(56347),r=i(205),o=i(57485),c=i(31682),d=i(89466);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:i}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:i,attributes:s,default:t}}=e;return{value:n,label:i,attributes:s,default:t}}))}(i);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:i}=e;const t=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})}),[a,t])]}function x(e){const{defaultValue:n,queryString:i=!1,groupId:t}=e,a=h(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=i.find((e=>e.default))??i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,u]=g({queryString:i,groupId:t}),[x,f]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,a]=(0,d.Dv)(i);return[t,(0,s.useCallback)((e=>{i&&a.set(e)}),[i,a])]}({groupId:t}),m=(()=>{const e=c??x;return p({value:e,tabValues:a})?e:null})();(0,r.A)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=i(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=i(74848);function v(e){let{className:n,block:i,selectedValue:s,selectValue:l,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,i=o.indexOf(n),t=r[i].value;t!==s&&(c(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=o.indexOf(e.currentTarget)+1;n=o[i]??o[0];break}case"ArrowLeft":{const i=o.indexOf(e.currentTarget)-1;n=o[i]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":i},n),children:r.map((e=>{let{value:n,label:i,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,t.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":s===n}),children:i??n},n)}))})}function b(e){let{lazy:n,children:i,selectedValue:t}=e;const a=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,t.A)("tabs-container",m.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function w(e){const n=(0,f.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var s=i(96540);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);