"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[60865],{45282:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=o(74848),i=o(28453),r=o(86025);const a={id:"introduction-to-integration-testing",title:"Introduction to Integration Testing",sidebar_label:"Intro to Integration Testing",description:"Integration testing is a core feature of the API Fortress platform. Watch our video about how to write an Integration Test. Follow along with the demo video in the API Fortress platform here: Quick Integration Demo. Integration testing is critical to creating a strong API testing strategy. Microservices are built to work together."},s=void 0,l={id:"api-testing/on-prem/quick-start/introduction-to-integration-testing",title:"Introduction to Integration Testing",description:"Integration testing is a core feature of the API Fortress platform. Watch our video about how to write an Integration Test. Follow along with the demo video in the API Fortress platform here: Quick Integration Demo. Integration testing is critical to creating a strong API testing strategy. Microservices are built to work together.",source:"@site/docs/api-testing/on-prem/quick-start/introduction-to-integration-testing.md",sourceDirName:"api-testing/on-prem/quick-start",slug:"/api-testing/on-prem/quick-start/introduction-to-integration-testing",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/quick-start/introduction-to-integration-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/quick-start/introduction-to-integration-testing.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712352404e3,frontMatter:{id:"introduction-to-integration-testing",title:"Introduction to Integration Testing",sidebar_label:"Intro to Integration Testing",description:"Integration testing is a core feature of the API Fortress platform. Watch our video about how to write an Integration Test. Follow along with the demo video in the API Fortress platform here: Quick Integration Demo. Integration testing is critical to creating a strong API testing strategy. Microservices are built to work together."},sidebar:"apif",previous:{title:"Integrate with CI/CD",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/quick-start/integrate-with-your-cicd"},next:{title:"Adding a User",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/quick-start/adding-a-user"}},c={},d=[{value:"Getting Our Token",id:"getting-our-token",level:2},{value:"Setting a Variable",id:"setting-a-variable",level:2},{value:"Making Follow-up Calls",id:"making-follow-up-calls",level:2},{value:"Further Explanation",id:"further-explanation",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",strong:"strong",...(0,i.R)(),...e.components},{Head:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,n.jsxs)(t.p,{children:["Integration testing is a core feature of the API Fortress platform. Watch our video about how to write an ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=eQ8WFGFHq4I&feature=youtu.be",children:"Integration Test"}),"."]}),"\n",(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/eQ8WFGFHq4I",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Follow along with the demo video in the API Fortress platform here: ",(0,n.jsx)(t.a,{href:"https://mastiff.apifortress.com/app/web/composer/wiz?pid=238&wizardId=5ad4b72fbbb0fb20d15023ca",children:"Quick Integration Demo"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Integration testing is critical to creating a strong API testing strategy. Microservices are built to work together, and an integration test allows you to create end-to-end tests that resemble common user flows. While only testing individual endpoints is a good start, this method will miss a large number of problems that occur when all services need to work together."}),"\n",(0,n.jsx)(t.p,{children:"Let\u2019s consider an example that only a proper integration test could solve: Company A has an authentication server. This server, when given the proper user credentials, returns an authentication token. This token is required for all other calls throughout the platform\u2019s API environment. Without this first API call, none of the other API calls can work. API Fortress makes it easy to validate the integration, capturing the entire API flow from end to end."}),"\n",(0,n.jsx)(t.h2,{id:"getting-our-token",children:"Getting Our Token"}),"\n",(0,n.jsxs)(t.p,{children:["First, we need to make our ",(0,n.jsx)(t.code,{children:"POST"})," call to the authorization server."]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/Screen-Shot-2018-04-12-at-12.20.27-PM.png"),alt:"Get Token"}),"\n",(0,n.jsx)(t.p,{children:"In this case, the request body is the username and password. Given proper credentials, the authentication server will return a user token."}),"\n",(0,n.jsx)(t.p,{children:"Next, we need to use this token to make further calls to the application."}),"\n",(0,n.jsx)(t.h2,{id:"setting-a-variable",children:"Setting a Variable"}),"\n",(0,n.jsxs)(t.p,{children:["First, we need to assign the token to a variable. Variables are used to store data temporarily for a test. You can use the API Fortress Vault for more permanent variables (",(0,n.jsx)(t.a,{href:"/api-testing/on-prem/quick-start/the-vault#variable-section",children:"learn more about variables here"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["We do this so we don\u2019t have to manually invoke or set a variable every time it is needed. Next, add a ",(0,n.jsx)(t.code,{children:"\u201cSet\u201d"})," component, and enter the information as seen in the image below."]}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/Screen-Shot-2018-04-12-at-12.31.27-PM.png"),alt:"Set Variable"}),"\n",(0,n.jsxs)(t.p,{children:["Now, call the variable ",(0,n.jsx)(t.code,{children:"\u201caccess_token\u201d"})," and assign the value to ${payload.Token}. The response body from the original post call was saved to a variable called \u201cpayload.\u201d The key to access the token is named ",(0,n.jsx)(t.code,{children:"\u201cToken\u201d"}),", so you may find it by calling ",(0,n.jsx)(t.code,{children:"\u201cpayloadToken\u201d"}),". Be sure to wrap this all in ",(0,n.jsx)(t.code,{children:"${}"})," so that API Fortress knows to interpret what\u2019s between the brackets instead of using it literally."]}),"\n",(0,n.jsx)(t.h2,{id:"making-follow-up-calls",children:"Making Follow-up Calls"}),"\n",(0,n.jsxs)(t.p,{children:["We\u2019re nearly there. We\u2019ve made our authentication ",(0,n.jsx)(t.code,{children:"POST"})," call, and then we\u2019ve saved the token to a dynamic variable named \u201caccess_token.\u201d Now it is time for the third, and for this example, final step."]}),"\n",(0,n.jsx)(t.p,{children:"This API has a cart function that requires a user token in order to add items to a cart or view items currently in the cart. Use the access token granted by the authentication server to add items to a cart."}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/Screen-Shot-2018-04-12-at-12.38.22-PM.png"),alt:"Follow Up Calls"}),"\n",(0,n.jsxs)(t.p,{children:["Use a PUT request to the cart endpoint to update the cart. Set the ",(0,n.jsx)(t.code,{children:"\u201cusertoken\u201d"})," header to ",(0,n.jsx)(t.code,{children:"${access_token}"}),". This is the same notation as before. The request body is a JSON object that the server will recognize as items and quantities. That part isn\u2019t important for the purposes of this demonstration."]}),"\n",(0,n.jsx)(t.h2,{id:"further-explanation",children:"Further Explanation"}),"\n",(0,n.jsx)(t.p,{children:"As we stated at the start, it is imperative to not just exercise endpoints, but validate that an entire series of microservices are working. It\u2019s best to do that by writing tests that emulate common and uncommon user flows. A critical part of that work involves creating reusable variables to allow the test to work at any time, with any data."}),"\n",(0,n.jsx)(t.p,{children:"By making a request for a fresh token at the beginning of the sequence, and then assigning it to a variable, you will know that any time you run this test, you\u2019re doing so with a valid access token, which is automatically being passed to all follow-up calls."}),"\n",(0,n.jsx)(t.p,{children:"Feel free to keep using the same access token over and over as seen below."}),"\n",(0,n.jsx)("img",{src:(0,r.A)("img/api-fortress/2018/04/Screen-Shot-2018-04-12-at-12.39.20-PM.png"),alt:"Reuse Token"}),"\n",(0,n.jsx)(t.p,{children:"Please feel free to reach out to us should you have any questions, or take a look at the Examples project that contains other examples."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>s});var n=o(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);