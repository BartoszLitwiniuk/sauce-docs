"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[78792],{94513:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=n(74848),i=n(28453),a=n(86025);const r={id:"dynamic-dates",title:"Generating Dynamic Dates in Your Tests",sidebar_label:"Generating Dynamic Dates",description:"How to generate dynamic dates in your test"},d=void 0,o={id:"api-testing/use-cases/dynamic-dates",title:"Generating Dynamic Dates in Your Tests",description:"How to generate dynamic dates in your test",source:"@site/docs/api-testing/use-cases/dynamic-dates.md",sourceDirName:"api-testing/use-cases",slug:"/api-testing/use-cases/dynamic-dates",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/use-cases/dynamic-dates",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/use-cases/dynamic-dates.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:167941608e4,frontMatter:{id:"dynamic-dates",title:"Generating Dynamic Dates in Your Tests",sidebar_label:"Generating Dynamic Dates",description:"How to generate dynamic dates in your test"},sidebar:"docs",previous:{title:"Exchanging Token",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/use-cases/auth-token"},next:{title:"Generating Test Data",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/use-cases/generate-test-data"}},l={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Create a Future Date",id:"create-a-future-date",level:2},{value:"Create a Past Date",id:"create-a-past-date",level:2},{value:"Create a Date with a Time Zone",id:"create-a-date-with-a-time-zone",level:2},{value:"Convert a Timestamp in Unix Time in Milliseconds",id:"convert-a-timestamp-in-unix-time-in-milliseconds",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"You might need to create past or future dates inside your tests, like when you are testing a check-in or check-out date.\nInstead of entering dates as static values, which may need to be updated periodically, you can create dynamic dates."}),"\n",(0,t.jsx)(s.p,{children:"Creating a dynamic date in API Testing is a simple solution for this sort of situation."}),"\n",(0,t.jsx)(s.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["A Sauce Labs account (",(0,t.jsx)(s.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,t.jsx)(s.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")."]}),"\n",(0,t.jsxs)(s.li,{children:["An existing API Testing Project. For details on how to create one, see ",(0,t.jsx)(s.a,{href:"/api-testing/quickstart/",children:"API Testing Quickstart"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"create-a-future-date",children:"Create a Future Date"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Open the Composer and add a ",(0,t.jsx)(s.strong,{children:"Set"})," component."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Enter/select the following:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Variable (the variable name) - for example ",(0,t.jsx)(s.code,{children:"futureDate"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Mode (the variable type) - for example ",(0,t.jsx)(s.code,{children:"String"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Value - for example ",(0,t.jsx)(s.code,{children:"${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-DD')}"})]}),"\n",(0,t.jsx)("img",{src:(0,a.A)("/img/api-testing/create-future-date-variable.png"),alt:"The SET Variable window"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Here's the meaning of the expression written in the Value field:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-DD')}\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"D.nowMillis()"})," - Returns the current Unix epoch in milliseconds."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"D.plusDays()"})," - Returns the provided milliseconds, plus the provided number of days (in the example, 35 days were added to today's date)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"D.format()"})," - Creates a timestamp with the given format, using the current timezone (in the example, ",(0,t.jsx)(s.code,{children:"yyyy-MM-DD"}),")."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Now, you can invoke the variable in your test."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"create-a-past-date",children:"Create a Past Date"}),"\n",(0,t.jsxs)(s.p,{children:["In the same way, you can also create a Past Date (starting from today's date). Follow the steps for ",(0,t.jsx)(s.a,{href:"#create-a-future-date",children:"Create a Future Date"}),", but replace the string ",(0,t.jsx)(s.code,{children:"D.plusDays()"})," with ",(0,t.jsx)(s.code,{children:"D.minusDays()"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"${D.format(D.minusDays(D.nowMillis(),35), 'yyyy-MM-DD')}\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"D.minusDays()"})," - Returns the provided milliseconds, minus the provided number of days (in the example, 35 days were subtracted from today's date)."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"create-a-date-with-a-time-zone",children:"Create a Date with a Time Zone"}),"\n",(0,t.jsx)(s.p,{children:"If you need to create a date based on a specified time zone:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"${D.format(D.plusDays(D.nowMillis(),35), 'yyyy-MM-DD','America/New_York')}\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"D.format()"})," - Creates a timestamp with the given format, based on the provided time zone ID (the example uses the same date as before, but uses ",(0,t.jsx)(s.code,{children:"New York"})," as the time zone)."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"convert-a-timestamp-in-unix-time-in-milliseconds",children:"Convert a Timestamp in Unix Time in Milliseconds"}),"\n",(0,t.jsx)(s.p,{children:"To convert a timestamp from a payload response to milliseconds:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"${D.parse(1649094357)}\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"D.parse()"})," - Parses the provided timestamp and converts it to milliseconds."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For more information about how to play with dates, see the ",(0,t.jsx)(s.a,{href:"/api-testing/composer/expressions/#d",children:"D Extension"})," and ",(0,t.jsx)(s.a,{href:"/api-testing/composer/expressions/#expression-language-extensions",children:"Expression Language Extensions"})," to see the whole extension library."]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>d});var t=n(96540);const i={},a=t.createContext(i);function r(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);