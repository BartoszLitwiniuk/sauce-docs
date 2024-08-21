"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[20121],{77091:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var r=t(74848),a=t(28453),s=t(86025),o=t(11470),i=t(19365);const c={id:"transitions",title:"Measuring Page Transitions with Scripts",sidebar_label:"Page Transitions",description:"Use Sauce Performance in an automation scripts to test page load performance during typical interaction with your app."},l=void 0,u={id:"performance/transitions",title:"Measuring Page Transitions with Scripts",description:"Use Sauce Performance in an automation scripts to test page load performance during typical interaction with your app.",source:"@site/docs/performance/transitions.md",sourceDirName:"performance",slug:"/performance/transitions",permalink:"/performance/transitions",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/performance/transitions.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"transitions",title:"Measuring Page Transitions with Scripts",sidebar_label:"Page Transitions",description:"Use Sauce Performance in an automation scripts to test page load performance during typical interaction with your app."},sidebar:"docs",previous:{title:"Single Page Statistics",permalink:"/performance/one-page"},next:{title:"Page Motion",permalink:"/performance/motion"}},d={},p=[{value:"What You&#39;ll Learn",id:"what-youll-learn",level:2},{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Setting Performance Capabilities",id:"setting-performance-capabilities",level:2},{value:"Implementing the Performance Command Assertion",id:"implementing-the-performance-command-assertion",level:2},{value:"Command",id:"command",level:3},{value:"Arguments",id:"arguments",level:3},{value:"Script Examples",id:"script-examples",level:3},{value:"Target Specific URLs in a Script",id:"target-specific-urls-in-a-script",level:2},{value:"Example",id:"example",level:3},{value:"Defining a Performance Budget",id:"defining-a-performance-budget",level:2},{value:"Handling Regressions",id:"handling-regressions",level:2},{value:"Sample Response",id:"sample-response",level:4},{value:"Logging Performance Results",id:"logging-performance-results",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Capturing page load performance for a specific URL is a great start to detect opportunities to improve performance, but some performance testing requires user interaction to facilitate, such as page load following a successful login or submission of a form. The Sauce Labs custom WebDriver command allows you to trigger performance capturing within an automation script at a precise point of interaction, ensuring you can isolate any issues related to the current app state."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Using automation to test performance after targeted interaction with your app in no way implies that you should integrate performance testing in your existing functional test suite. Testing function and performance in the same test is likely to result in compromised results for both objectives and can obscure failure troubleshooting."})}),"\n",(0,r.jsx)(n.h2,{id:"what-youll-learn",children:"What You'll Learn"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"How to enable performance in your automation script"}),"\n",(0,r.jsx)(n.li,{children:"How to measure performance as the automation runs"}),"\n",(0,r.jsx)(n.li,{children:"How to detect regressions"}),"\n",(0,r.jsx)(n.li,{children:"How to write the performance results to a log"}),"\n",(0,r.jsx)(n.li,{children:"How to view your results"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A Sauce Labs account (",(0,r.jsx)(n.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,r.jsx)(n.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Your Sauce Labs ",(0,r.jsx)(n.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"}),".","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Have your SAUCE_USERNAME and SAUCE_ACCESS_KEY defined for your environment."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Google Chrome (no older than 3 versions from latest) as the test browser."}),"\n",(0,r.jsx)(n.li,{children:"An automation script that performs the interaction with your app during which you want to measure performance."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setting-performance-capabilities",children:"Setting Performance Capabilities"}),"\n",(0,r.jsxs)(n.p,{children:["Before you configure your script to capture performance metrics as it executes, you must update your capabilities configuration file to enable performance actions. To do this, set the ",(0,r.jsx)(n.code,{children:"extendedDebugging"})," and ",(0,r.jsx)(n.code,{children:"capturePerformance"})," sauce",":options"," attributes to ",(0,r.jsx)(n.code,{children:"True"}),". The following excerpts show you the Webdriver.io ",(0,r.jsx)(n.code,{children:"sauce:options"})," code samples for a variety of supported languages."]}),"\n",(0,r.jsxs)(o.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"JavaScript",value:"js"},{label:"Ruby",value:"ruby"}],children:[(0,r.jsx)(i.A,{value:"python",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",metastring:"{8,9}",children:"def driver(request):\n    sauceOptions = {\n        \"screenResolution\": \"1280x768\",\n        \"platformName\": \"Windows 10\",\n        \"browserVersion\": \"61.0\",\n        \"seleniumVersion\": \"3.11.0\",\n        'name': 'Pytest Chrome W3C Sample',\n        'extendedDebugging': 'true',\n        'capturePerformance': 'true'\n    }\n    chromeOpts =  {\n        'platformName':\"Windows 10\",\n        'browserName': \"chrome\",\n        'browserVersion': '61.0',\n        'goog:chromeOptions': {'w3c': True},\n        'sauce:options': sauceOptions\n    }\n"})})}),(0,r.jsx)(i.A,{value:"js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"{5,6}",children:"const { config } = require('./wdio.shared.conf')\nconst defaultBrowserSauceOptions = {\nbuild: `WebdriverIO-V6 Front-End Performance-${new Date().getTime()}`,\nname: `WebdriverIO-V6 Front-End Performance-${new Date().getTime()}`,\nextendedDebugging: true,\ncapturePerformance: true\n}\n"})})}),(0,r.jsx)(i.A,{value:"ruby",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ruby",metastring:"{10,11}",children:"browser_name = ENV['BROWSER_NAME'] || 'chrome'\n\noptions = {browser_name: browser_name,\n           platform_name: ENV['PLATFORM_NAME'] || 'Windows 10',\n           browser_version: ENV['BROWSER_VERSION'] || 'latest',\n           'sauce:options': {name: \"#{scenario.feature.name} - #{scenario.name}\",\n                             build: build_name,\n                             username: ENV['SAUCE_USERNAME'],\n                             access_key: ENV['SAUCE_ACCESS_KEY'],\n                             extended_debugging: true,\n                             capture_performance: true }}\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"implementing-the-performance-command-assertion",children:"Implementing the Performance Command Assertion"}),"\n",(0,r.jsxs)(n.p,{children:["The custom ",(0,r.jsx)(n.code,{children:"sauce:performance"})," command measures the performance output against a baseline of previously accepted performance values. If no baseline has been set, the Performance test will create one by measuring performance output 10 times to get an aggregate baseline. The command returns ",(0,r.jsx)(n.code,{children:"pass"})," when the current results are within the baseline allowances or ",(0,r.jsx)(n.code,{children:"fail"})," when the results fall outside the baseline. A fail result gives you the option to handle ",(0,r.jsx)(n.a,{href:"#handle-regressions",children:"regressions"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Enabling performance capturing can add up to 60 seconds per URL change in a test. We, therefore, advise separating your performance tests from your functional tests. See our ",(0,r.jsx)(n.a,{href:"https://docs.saucelabs.com/performance/about/#sauce-performance-requirements-and-recommendations",children:"Performance Requirements and Recommendations"})," for more advice on optimizing your performance test results."]})}),"\n",(0,r.jsx)(n.h3,{id:"command",children:"Command"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"sauce:performance"})}),"\n",(0,r.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Argument"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"name"}),(0,r.jsx)("br",{}),(0,r.jsx)("font",{size:"2",children:"Required"})]}),(0,r.jsx)(n.td,{children:"A name of the test as it would appear on Sauce Labs."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"metrics"}),(0,r.jsx)("br",{}),(0,r.jsx)("font",{size:"2",children:"Optional"})]}),(0,r.jsxs)(n.td,{children:["Specifies one or more specific metrics you want to assert. If not specified, the test defaults to score, which automatically tests all metrics that currently make up a Lighthouse Performance Score.",(0,r.jsx)("br",{}),"See ",(0,r.jsx)(n.a,{href:"/performance/one-page#metric-values",children:"Metric Values"})," for the list of supported metric values."]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"script-examples",children:"Script Examples"}),"\n",(0,r.jsxs)(n.p,{children:["The following samples are excerpts that show the ",(0,r.jsx)(n.code,{children:"sauce:performance"})," assertion used in a Selenium test script."]}),"\n",(0,r.jsxs)(o.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"JavaScript",value:"js"}],children:[(0,r.jsxs)(i.A,{value:"python",children:["See the complete ",(0,r.jsx)(n.a,{href:"https://github.com/saucelabs/performance-python-examples",children:"Python performance demo"}),".",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",metastring:"reference",children:"https://github.com/saucelabs/performance-python-examples/blob/main/tests/test_performance.py\n"})})]}),(0,r.jsxs)(i.A,{value:"js",children:["See the complete ",(0,r.jsx)(n.a,{href:"https://github.com/saucelabs/performance-js-examples/blob/main/WebDriver.io/tests/performance.js",children:"JavaScript performance demo"}),".",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"describe('Sauce Labs Front-End Performance', () => {\nbeforeEach(() => {\n//\n// Adding extra logs to the Sauce Commands Dashboard\nbrowser.execute('sauce:context=########## Start beforeEach ##########')\n//\n// Now load the url and wait for it to be displayed\nbrowser.url('')\n\n//\n// Adding extra logs to the Sauce Commands Dashboard\nbrowser.execute('sauce:context=########## End beforeEach ##########')\n})\n\nafterEach(() => {\n//\n// Adding extra logs to the Sauce Commands Dashboard\nbrowser.execute('sauce:context=########## Enf of test ##########')\n})\n\nit('logs (sauce:performance) should check if all metrics were captured', () => {\n//\n// The expected metrics\nconst metrics = [\n'load',\n'speedIndex',\n'firstInteractive',\n'firstVisualChange',\n'lastVisualChange',\n'firstMeaningfulPaint',\n'firstCPUIdle',\n'timeToFirstByte',\n'firstPaint',\n'estimatedInputLatency',\n'firstContentfulPaint',\n'totalBlockingTime',\n'score',\n'domContentLoaded',\n'cumulativeLayoutShift',\n'serverResponseTime',\n'largestContentfulPaint'\n]\n//\n// Get the performance logs\nconst performance = browser.execute('sauce:log', { type: 'sauce:performance' })\n\n//\n// Verify that all logs have been captured\nmetrics.forEach((metric) =>\nexpect(metric in performance, `${metric} metric is missing`)\n)\n})\n\nit('(sauce:performance) should validate speedIndex', () => {\n//\n// Get the performance logs\nconst performance = browser.execute('sauce:log', { type: 'sauce:performance' })\n\n//\n// Verify that all logs have been captured\nexpect(\nperformance.speedIndex < 1000,\n`${performance.speedIndex} is equal or bigger than 100`\n)\n})\n})\n"})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"target-specific-urls-in-a-script",children:"Target Specific URLs in a Script"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"sauce:performanceDisable"})," and ",(0,r.jsx)(n.code,{children:"sauce:performanceEnable"})," commands to limit the collection of performance metrics to specific URL pages. Implementing these pauses in metrics collection allows you to bypass navigational pages such as login so your tests are faster and more efficient, and your performance results are more relevant."]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="JS Performance Pause Sample"',children:"browser.execute('sauce:performanceDisable')\nbrowser.url('https://www.json.org/json-en.html')\nbrowser.execute('sauce:performanceEnable')\nbrowser.url('https://example.com')\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the preceding example, performance metrics will only be collected for ",(0,r.jsx)(n.code,{children:"https://example.com"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"defining-a-performance-budget",children:"Defining a Performance Budget"}),"\n",(0,r.jsx)(n.p,{children:"Rather than letting a baseline determine the acceptable metric values for your pages, you can define your own metric value limits for individual pages in your app and then assert against those values to ensure your performance results are always within the range that your deem optimal."}),"\n",(0,r.jsx)(n.p,{children:"First, create a separate file in which you define your target metric limits, as in the following example."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="budget.json"',children:'{\n"https://saucelabs.com/": {\n"speedIndex": 2300,\n"lastVisualChange": 2200,\n"load": 4200\n},\n"https://saucelabs.com/platform/analytics-performance/sauce-performance": {\n"score": 0.78\n}\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Then, import your budget file in your test script and assert your performance call against the values in your budget, as shown in the following sample."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"{1,9,19,11}",children:"const budgets = require('./budget.json')\n\nfor (const [url, budget] of Object.entries(budgets)) {\nawait browser.url(url)\nconst performanceLogs = await browser.execute('sauce:log', {\ntype: 'sauce:performance'\n})\n\nfor (const [metric, value] of Object.keys(budget)) {\nassert.ok(\nperformanceLogs[metric] < value`metric ${metric} is over the performance budget`\n)\n}\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"handling-regressions",children:"Handling Regressions"}),"\n",(0,r.jsxs)(n.p,{children:["When one or more metric evaluations fail because the result falls outside the established baseline, it is considered a regression and the tester has an option to either troubleshoot and resolve the source of the regression to get the test back into the baseline range or ",(0,r.jsx)(n.a,{href:"/performance/analyze#reset-baselines-for-a-failed-test",children:"update the baseline"})," with the new performance values. If new baselines are accepted, the command will measure performance against those new values until another regression is detected, when you will again have the option to troubleshoot or update the baselines."]}),"\n",(0,r.jsx)(n.p,{children:"Since the command can be called throughout the test script, create tests that check for performance regressions across core business flows and screens. For example, evaluate pages that load following a successful login event or require multiple steps to trigger."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"sauce:performance"})," is only aware of the performance metrics of the get URL command that was called before it and not able to capture metrics for views that were navigated via webdriver actions (e.g button clicks). In this example, the custom command returns performance metrics for the ",(0,r.jsx)(n.code,{children:"/inventory.html"})," URL."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"describe('Performance Demo Test', function () {\n    const { title } = this;\n\n    it('Asserts for regressions on the inventory page', () => {\n        // log into the app\n        browser.url('https://www.saucedemo.com');\n        const username = $('[data-test=\"username\"]');\n        username.setValue('standard_user');\n        const password = $('[data-test=\"password\"]');\n        password.setValue('secret_sauce');\n        const loginButton = $('.login-button');\n        loginButton.click();\n        browser.url('/inventory.html');\n        // assert performance of pageLoad has not regressed.\n        const performanceOutput = browser.execute('sauce:performance', {\n        name: title,\n        metrics: ['load'] });\n        assert.equal(performanceOutput.result, 'pass', performanceOutput.reason);\n    });\n});\n"})}),"\n",(0,r.jsx)(n.h4,{id:"sample-response",children:"Sample Response"}),"\n",(0,r.jsx)(n.p,{children:"The following response is returned when the Page Load metric is above the expected baseline."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"reason": "Metrics [load] are significantly out of the baseline",\n"result": "fail",\n"details": {\n "load": {\n   "actual": 12178,\n   "lowerLimit": 813.6839391929948,\n   "upperLimit": 2910.759098781689\n }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"logging-performance-results",children:"Logging Performance Results"}),"\n",(0,r.jsx)(n.p,{children:"You can also send your performance results to the log that is viewable from the Sauce Labs test result page."}),"\n",(0,r.jsx)("img",{src:(0,s.A)("img/performance/full-rpt-log.png"),alt:"View Logs",width:"900"}),"\n",(0,r.jsx)("p",{}),"\n",(0,r.jsxs)(n.p,{children:["To enable this, configure ",(0,r.jsx)(n.code,{children:"sauce:performance"})," within the ",(0,r.jsx)(n.code,{children:"sauce:log"})," command. Set the ",(0,r.jsx)(n.code,{children:"fullReport"})," option to ",(0,r.jsx)(n.code,{children:"true"})," in the configuration to capture extended details about the performance configuration, aside from just the metrics output."]}),"\n",(0,r.jsxs)(o.A,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"JavaScript",value:"js"}],children:[(0,r.jsxs)(i.A,{value:"python",children:["See the complete ",(0,r.jsx)(n.a,{href:"https://github.com/saucelabs/performance-python-examples/blob/main/tests/test_performance.py",children:"Python performance demo"}),".",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",metastring:"{5}",children:'def test_speed_index(self, driver):\n    self.setUpClass(driver)\n    metrics = ["load", "speedIndex", "pageWeight", "pageWeightEncoded", "timeToFirstByte",\n               "timeToFirstInteractive", "firstContentfulPaint", "perceptualSpeedIndex", "domContentLoaded"]\n    performance = driver.execute_script("sauce:log", {"type": "sauce:performance", options: {fullReport: true}})\n    for metric in metrics:\n        assert performance["speedIndex"] < 1000\n'})})]}),(0,r.jsxs)(i.A,{value:"js",children:["See the complete ",(0,r.jsx)(n.a,{href:"https://github.com/saucelabs/performance-js-examples/blob/main/WebDriver.io/tests/performance.js",children:"JavaScript performance demo"}),".",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:"{2}",children:"// Get the performance logs\nconst performance = browser.execute('sauce:log', {\ntype: 'sauce:performance',\noptions: { fullReport: true }\n})\n"})})]})]}),"\n",(0,r.jsx)(n.p,{children:"In addition to reviewing the log in Sauce Labs, you can retrieve the log locally by calling:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"driver.execute('sauce:log', {type: 'sauce:performance'});"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/insights/debug",children:"Using Extended Debugging"})," for additional network and logging options enabled with extended debugging."]})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(96540),a=t(18215),s=t(23104),o=t(56347),i=t(205),c=t(57485),l=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=p(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[l,d]=h({queryString:t,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=l??f;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=t(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==r&&(l(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(96540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);