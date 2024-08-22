"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[51920],{97501:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=s(74848),i=s(28453);const r={id:"assert-valid-json-schema",title:"Assert Valid JSON Schema",sidebar_label:"Assert Valid JSON Schema",description:"This assertion is used to validate a JSON schema, based on the provided schema definition."},o=void 0,a={id:"api-testing/on-prem/assertion-components/assert-valid-json-schema",title:"Assert Valid JSON Schema",description:"This assertion is used to validate a JSON schema, based on the provided schema definition.",source:"@site/docs/api-testing/on-prem/assertion-components/assert-valid-json-schema.md",sourceDirName:"api-testing/on-prem/assertion-components",slug:"/api-testing/on-prem/assertion-components/assert-valid-json-schema",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/assertion-components/assert-valid-json-schema",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/assertion-components/assert-valid-json-schema.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"assert-valid-json-schema",title:"Assert Valid JSON Schema",sidebar_label:"Assert Valid JSON Schema",description:"This assertion is used to validate a JSON schema, based on the provided schema definition."},sidebar:"apif",previous:{title:"Assert Matches",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/assertion-components/assert-matches"},next:{title:"Introduction",permalink:"/sauce-docs/pr-preview/pr-2900/api-testing/on-prem/bloodhound"}},d={},c=[{value:"Parameters",id:"parameters",level:2},{value:"JSON Schema Example",id:"json-schema-example",level:2},{value:"Code View Example",id:"code-view-example",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s,{children:(0,t.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Legacy Documentation"}),(0,t.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,t.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Name"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Type/Value"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Required"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Expression"}),(0,t.jsx)(n.td,{children:"Expression"}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"JsonSchema"}),(0,t.jsx)(n.td,{children:"JSON schema definition"}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Comment"}),(0,t.jsx)(n.td,{children:"String"}),(0,t.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Expression"}),": The path to the element we want to operate on (e.g., ",(0,t.jsx)(n.code,{children:"payload.ProductID"}),"). See ",(0,t.jsx)(n.a,{href:"https://apifortress.com/doc/expression/",children:"Expression"})," for more details."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"JsonSchema"}),": The JSON schema definition. This will be used to validate the JSON passed in the expression field. See below for an example."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Comment"}),": Add comment messages in the form of a string data type."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"json-schema-example",children:"JSON Schema Example"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Sample JSON"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n"rectangle": {\n"a": 15,\n"b": 5\n}\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Sample Schema"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n"type": "object",\n"properties": {\n"rectangle": {\n"$ref": "#/definitions/Rectangle"\n}\n},\n"definitions": {\n"size": {\n"type": "number",\n"minimum": 0\n},\n"Rectangle": {\n"type": "object",\n"properties": {\n"a": {\n"$ref": "#/definitions/size"\n},\n"b": {\n"$ref": "#/definitions/size"\n}\n}\n}\n}\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"code-view-example",children:"Code View Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<set var="json_success" lang="template">\n<![CDATA[{ "rectangle" : { "a" : 15, "b" : 5 } }]]>\n</set>\n<assert-valid-jsonschema expression="json_success">\n<![CDATA[{ "type" : "object", "properties" : { "rectangle" : {"$ref" :\n"#/definitions/Rectangle" } }, "definitions" : { "size" : { "type" : "number",\n"minimum" : 0 }, "Rectangle" : { "type" : "object", "properties" : { "a" :\n{"$ref" : "#/definitions/size"}, "b" : {"$ref" : "#/definitions/size"} } } }\n}]]>\n</assert-valid-jsonschema>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);