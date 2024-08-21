"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[48784],{29643:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=i(74848),o=i(28453);const t={id:"basic-configuration",title:"Bloodhound: Basic Configuration",sidebar_label:"Basic Configuration",description:"The default Bloodhound configuration module is file driven. All configuration files are located in the etc directory."},r=void 0,d={id:"api-testing/on-prem/bloodhound/basic-configuration",title:"Bloodhound: Basic Configuration",description:"The default Bloodhound configuration module is file driven. All configuration files are located in the etc directory.",source:"@site/docs/api-testing/on-prem/bloodhound/basic-configuration.md",sourceDirName:"api-testing/on-prem/bloodhound",slug:"/api-testing/on-prem/bloodhound/basic-configuration",permalink:"/api-testing/on-prem/bloodhound/basic-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/bloodhound/basic-configuration.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"basic-configuration",title:"Bloodhound: Basic Configuration",sidebar_label:"Basic Configuration",description:"The default Bloodhound configuration module is file driven. All configuration files are located in the etc directory."},sidebar:"apif",previous:{title:"Introduction",permalink:"/api-testing/on-prem/bloodhound"},next:{title:"Flows",permalink:"/api-testing/on-prem/bloodhound/flows"}},l={},c=[{value:"System configuration",id:"system-configuration",level:2},{value:"<code>bloodhound.yml</code>",id:"bloodhoundyml",level:3},{value:"<code>application.properties</code>",id:"applicationproperties",level:3},{value:"<code>ehcache.xml</code>",id:"ehcachexml",level:3},{value:"<code>logback.xml</code>",id:"logbackxml",level:3},{value:"Proxy configuration",id:"proxy-configuration",level:2},{value:"<code>implementers.yml</code>",id:"implementersyml",level:3},{value:"<code>backends.yml</code>",id:"backendsyml",level:3},{value:"Additional Topics",id:"additional-topics",level:2}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The default Bloodhound configuration module is file driven. All configuration files are located in the ",(0,s.jsx)(n.code,{children:"etc"})," directory."]}),"\n",(0,s.jsx)(n.h2,{id:"system-configuration",children:"System configuration"}),"\n",(0,s.jsx)(n.h3,{id:"bloodhoundyml",children:(0,s.jsx)(n.code,{children:"bloodhound.yml"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"config_loader"})," section describes which configuration loading mechanism needs to be used. Modules can be created to store and load configuration in other locations and systems, such as databases."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"mime.text_content_types_contain"})," array contains a list of substrings meant to help the system detecting which content types are meant to represent textual content."]}),"\n",(0,s.jsx)(n.h3,{id:"applicationproperties",children:(0,s.jsx)(n.code,{children:"application.properties"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/api-testing/on-prem/bloodhound/fine-tuning",children:"Fine tuning"})," for more settings."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"logging.config=etc/logback.xml"})}),(0,s.jsx)(n.td,{children:"describes where the logging configuration file is located"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"server.port"})}),(0,s.jsxs)(n.td,{children:["tells the Bloodhound web server which port it should bind to (default is ",(0,s.jsx)(n.code,{children:"8080"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"server.compression.enabled"})}),(0,s.jsxs)(n.td,{children:["true if the web server needs to compress its output (default is ",(0,s.jsx)(n.code,{children:"false"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"server.compression.mime-types"})}),(0,s.jsx)(n.td,{children:"a comma-separated list of mime types that should undergo compression"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"server.compression.min-response-size"})}),(0,s.jsx)(n.td,{children:"the smallest stream of that should trigger compression"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"server.ssl.key-store-type"})}),(0,s.jsxs)(n.td,{children:["to configure secure connections, the key-store type (default is ",(0,s.jsx)(n.code,{children:"PKCS12"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"server.ssl.key-store"})}),(0,s.jsxs)(n.td,{children:["the location of the ",(0,s.jsx)(n.code,{children:"key-store"})," in the file system"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"server.ssl.key-store-password"})}),(0,s.jsxs)(n.td,{children:["the password of the ",(0,s.jsx)(n.code,{children:"key-store"})]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"ehcachexml",children:(0,s.jsx)(n.code,{children:"ehcache.xml"})}),"\n",(0,s.jsx)(n.p,{children:"Certain operations may require some short lived caching. This is where that caching happens."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"configs"})," is a cache meant to store the system configuration, so that it doesn't need to be read multiple times in a short period of time."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"expressions"})," is a cache meant to store the interpreted version of Spring SpEL scripts."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"api_keys"})," is a cache used by the default ApiKeysFilterActor to store API keys in memory."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"http_routers"})," is a cache used by the load-balancing functionality."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"New caches can be introduced to support other modules if necessary."}),"\n",(0,s.jsx)(n.h3,{id:"logbackxml",children:(0,s.jsx)(n.code,{children:"logback.xml"})}),"\n",(0,s.jsx)(n.p,{children:"The configuration of the logging system."}),"\n",(0,s.jsx)(n.h2,{id:"proxy-configuration",children:"Proxy configuration"}),"\n",(0,s.jsx)(n.h3,{id:"implementersyml",children:(0,s.jsx)(n.code,{children:"implementers.yml"})}),"\n",(0,s.jsx)(n.p,{children:"This is where all actors involved in flows get listed and configured. If an actor is going to be used in a flow, it needs to appear here."}),"\n",(0,s.jsx)(n.p,{children:"A typical implementer is configured like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- id: request\n  class: com.apifortress.Bloodhound.actors.proxy.RequestActor\n  type: proxy\n  instances: 2\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"})," the ID of the actor"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"class"})," the class implementing the actor"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"})," a type among ",(0,s.jsx)(n.code,{children:"proxy"})," ",(0,s.jsx)(n.code,{children:"filter"})," ",(0,s.jsx)(n.code,{children:"transformer"})," and ",(0,s.jsx)(n.code,{children:"sidecar"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"instances"})," (optional) the number of instances of the actor to be instantiated"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"thread_pool"})," (optional) the name of the thread pool assigned to this actor"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This file also defines thread pools in the ",(0,s.jsx)(n.code,{children:"thread_pools"})," section. Thread pools describe pools of threads to be assigned to actors. A typical thread pool looks like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"default:\nmin: 1\nmax: 2\nfactor: 1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The key of the thread pool (in this case ",(0,s.jsx)(n.code,{children:"default"}),") is a single word that identifies the thread pool. A ",(0,s.jsx)(n.code,{children:"default"})," thread pool is always required."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"min"})," is the minimum number of threads created for this thread pool."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"max"})," is the maximum number of threads created for this thread pool (the threads exceeding ",(0,s.jsx)(n.code,{children:"min"})," get decommissioned when not in use)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"factor"})," is a multiplier that depends on the server Bloodhound is operating on and it works like this ",(0,s.jsx)(n.code,{children:"factor*cpu=n_of_threads"}),". A way to make the system more adaptive to the context."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Fine Tuning",type:"tip",children:(0,s.jsxs)(n.p,{children:["Check out the ",(0,s.jsx)(n.a,{href:"/api-testing/on-prem/bloodhound/fine-tuning#thread-pools",children:"Fine Tuning Guide"})," for further readings on this topic."]})}),"\n",(0,s.jsx)(n.h3,{id:"backendsyml",children:(0,s.jsx)(n.code,{children:"backends.yml"})}),"\n",(0,s.jsx)(n.p,{children:"This file connects the inbound requests to the outbound destinations."}),"\n",(0,s.jsx)(n.p,{children:"A typical backend looks like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"  - prefix: '127.0.0.1/any'\n  upstream: 'https://httpbin.org/anything'\n  flow\\_id: default\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prefix"})," how the inbound request will look like, without protocol and port."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"upstream"})," where to send the request to. If this field is omitted, the full request URL will be used (useful in conjunction with a forward proxy)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"flow_id"})," which flow needs to be used."]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Everything exceeding prefix on the right side"})," will be passed over to the upstream."]}),(0,s.jsx)(n.p,{children:"In this example, a request sent to:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",metastring:"request",children:"http://127.0.0.1:8080/any/whatever\n"})}),(0,s.jsx)(n.p,{children:"is then forwarded to:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-http",metastring:"request",children:"https://httpbin.org/anything/whatever\n"})})]}),"\n",(0,s.jsxs)(n.p,{children:["Optionally, a ",(0,s.jsx)(n.code,{children:"headers"})," filter can also be applied. For example:"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example 1"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- prefix: '\\[^/\\]\\*/only/with/header'\n  headers:\n  x-my-header: anything\n  upstream: 'https://httpbin.org/anything'\n  flow\\_id: default\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example 2"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- prefix: '\\[^/\\]\\*/only/with/header'\n  headers:\n  x-my-header: mastiff\n  upstream: 'https://mastiff.apifortress.com/app/api/rest/relay'\n  flow\\_id: default\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"x-my-header"})," header is present and is equal to ",(0,s.jsx)(n.code,{children:"anything"}),", the first configuration will be chosen. If the given header is equal to ",(0,s.jsx)(n.code,{children:"mastiff"}),", the second configuration will be chosen."]}),"\n",(0,s.jsx)(n.p,{children:"It is also possible to pass extra meta-variables to the flow when a specific flow is picked up. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"- prefix: '\\[^/\\]\\*/with/meta'\n  meta:\n  special\\_var: my\\_meta\n  upstream: 'https://httpbin.org/anything'\n  flow\\_id: default\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The meta variables can be retrieved in ",(0,s.jsx)(n.code,{children:"evaluated"})," fields by using the following syntax:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"#msg.meta().get('special_var').get()\n"})}),"\n",(0,s.jsx)(n.h2,{id:"additional-topics",children:"Additional Topics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Flows"}),": the number of steps (",(0,s.jsx)(n.a,{href:"/api-testing/on-prem/bloodhound/base-actors",children:"actors"}),") performed between inbound requests and responses to outbound requests, are discussed in the ",(0,s.jsx)(n.a,{href:"/api-testing/on-prem/bloodhound/flows",children:"Flows guide"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Load Balancing"}),": load balancing functionality is available. Please refer to the ",(0,s.jsx)(n.a,{href:"/api-testing/on-prem/bloodhound/load-balancing/",children:"load balancing guide"})," to learn more"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var s=i(96540);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);