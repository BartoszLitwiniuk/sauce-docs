"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[85408],{96971:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=t(74848),i=t(28453),r=t(86025);const a={id:"expression",title:"Expression",sidebar_label:"Expression",keywords:["api","api-fortress","expression"]},o=void 0,c={id:"api-testing/on-prem/reference/expression",title:"Expression",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/reference/expression.md",sourceDirName:"api-testing/on-prem/reference",slug:"/api-testing/on-prem/reference/expression",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/reference/expression",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/reference/expression.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"expression",title:"Expression",sidebar_label:"Expression",keywords:["api","api-fortress","expression"]},sidebar:"apif",previous:{title:"Execution Context in API Fortress",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/reference/execution-context-in-api-fortress"},next:{title:"Expression Language Extensions",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/reference/expression-language-extensions"}},l={},d=[{value:"Basics",id:"basics",level:2},{value:"Special Characters",id:"special-characters",level:2},{value:"XML",id:"xml",level:2},{value:"Functions",id:"functions",level:2},{value:"Expressions &quot;everywhere&quot;",id:"expressions-everywhere",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,s.jsx)(n.h2,{id:"basics",children:"Basics"}),"\n",(0,s.jsx)(n.p,{children:"Expressions are fields referencing an item in the test scope. The item can be a variable or an inner value in a data structure, such as a JSON. Most expressions will start with the name of the variable the data is stored in."}),"\n",(0,s.jsx)(n.p,{children:'When working with structured data, expression is the path for\xa0reaching out a specific element using the Mastiff language. Most of the time, it\'s just "dot notation". In this example, we will assume the data has been assigned to a variable named "payload".'}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'"data":{\n  "created_time": "1453198835",\n  "images": {\n    "thumbnail": {\n      "width": 150,\n      "url": "https://domain.com/photos/9451802655724661601789699.jpg",\n      "height": 150\n      }\n   },\n  "Total-items": 1\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"If you want to reach the value of the 'created_time' attribute:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"payload.data.created_time\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you want to check the 'width' of the images:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"payload.data.images.thumbnail.width\n"})}),"\n",(0,s.jsx)(n.h2,{id:"special-characters",children:"Special Characters"}),"\n",(0,s.jsx)(n.p,{children:"The \"Total-items\" element is a bit tricky, because the minus sign ( - ) would be misunderstood by the Mastiff language and treated as a subtraction operation. For this reason, the 'Dot Notation' requires the square brackets, as in:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"data['Total-Items']\n"})}),"\n",(0,s.jsx)(n.h2,{id:"xml",children:"XML"}),"\n",(0,s.jsxs)(n.p,{children:["The above statements are valid for both JSON and XML. When you have to reference XML attributes, the 'Dot Notation' is valid but the attribute has to be written between the square brackets and preceded by the ",(0,s.jsx)(n.code,{children:"@"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"In XML, the root element is the variable itself so you won't need to reference it explicitly."})}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'<HotelList size="2">\n    <HotelSummary order="0">\n        <hotelId>20160502</hotelId>\n        <name>Hotel One</name>\n'})}),"\n",(0,s.jsx)(n.p,{children:"If we want to check the 'size' attribute, you have to write"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"payload['@size']\n"})}),"\n",(0,s.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(n.p,{children:"Expressions can also contain directives to transform the data you are willing to evaluate."}),"\n",(0,s.jsx)(n.p,{children:"For instance:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'<HotelList size="2">\n    <HotelSummary order="0">\n        <hotelId>20160502</hotelId>\n        <name>Hotel One</name>\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"payload.HotelSummary.size()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Will count the number of instances of ",(0,s.jsx)(n.code,{children:"HotelSummary"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"expressions-everywhere",children:'Expressions "everywhere"'}),"\n",(0,s.jsx)(n.p,{children:'Expressions are automatically evaluated in the "expression" fields, but can also be introduced in other fields, such as "value", with a specific notation.'}),"\n",(0,s.jsx)("img",{src:(0,r.A)("img/api-fortress/2020/13/equals-300x132.png"),alt:"equals-300x132.png"}),"\n",(0,s.jsxs)(n.p,{children:['In this example, we compare the actual size of the collection with the "size attribute", by enclosing the expression within ',(0,s.jsx)(n.code,{children:"${ .. }"}),'. The "type" attribute ensures the comparison will happen with a numeric comparator, rather than string.']}),"\n",(0,s.jsxs)(n.p,{children:["Further readings, see ",(0,s.jsx)(n.a,{href:"/api-testing/on-prem/reference/expression-language-extensions",children:"Expression extensions"})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);