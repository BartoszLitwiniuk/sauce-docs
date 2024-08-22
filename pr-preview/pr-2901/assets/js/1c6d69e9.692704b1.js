"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[85280],{5201:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(74848),o=t(28453);const i={id:"local-downloader-setup",title:"Local Downloader Setup (Self-Hosted)",sidebar_label:"Local Downloader Setup (Self-Hosted)",keywords:["api","api-fortress","local","downloader","selfhosted"]},r=void 0,l={id:"api-testing/on-prem/self-hosted/local-downloader-setup",title:"Local Downloader Setup (Self-Hosted)",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/self-hosted/local-downloader-setup.md",sourceDirName:"api-testing/on-prem/self-hosted",slug:"/api-testing/on-prem/self-hosted/local-downloader-setup",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/self-hosted/local-downloader-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/self-hosted/local-downloader-setup.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"local-downloader-setup",title:"Local Downloader Setup (Self-Hosted)",sidebar_label:"Local Downloader Setup (Self-Hosted)",keywords:["api","api-fortress","local","downloader","selfhosted"]},sidebar:"apif",previous:{title:"Load Agent Deployment",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/how-to/load-agent-deployment"},next:{title:"Multiple Client-Cert Downloader",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/self-hosted/multiple-client-cert-downloader"}},a={},d=[{value:"What it Does",id:"what-it-does",level:2},{value:"General Requirements",id:"general-requirements",level:2},{value:"Cloud Requirements",id:"cloud-requirements",level:3},{value:"Installation**",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Running the Agent - NIX",id:"running-the-agent---nix",level:3},{value:"Running the Agent - Windows",id:"running-the-agent---windows",level:3},{value:"Tuning",id:"tuning",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Legacy Documentation"}),(0,s.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,s.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"what-it-does",children:"What it Does"}),"\n",(0,s.jsx)(n.p,{children:"The API Fortress Remote Download Agent sits inside of your infrastructure to allow the platform to test systems that are not exposed externally."}),"\n",(0,s.jsx)(n.p,{children:"It will listen to an HTTPS port for jobs requested by an API Fortress engine. The agent will perform an HTTP(S) request to an endpoint as described in the job, and once completed will serialize the data back to the engine, adding contextual information such as the metrics."}),"\n",(0,s.jsxs)(n.p,{children:["No data is retained in the agent memory after job completion. The agent will use the DNS settings provided by the machine it\u2019s installed on. Click here to learn more about the ",(0,s.jsx)(n.a,{href:"/api-testing/on-prem/learn-more/downloader-101",children:"Downloaders"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"general-requirements",children:"General Requirements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Software:"})," Java JRE 1.8 or greater"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Network:"})," the agent should be reachable by the designated API Fortress engine(s)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Network:"})," the default inbound port is 8819"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cloud-requirements",children:"Cloud Requirements"}),"\n",(0,s.jsx)(n.p,{children:"If the agent is meant to be contacted by the API Fortress cloud, the connection will happen from the following sources:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"dashboard-aws01-1.apifortress.com - 52.0.5.117"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"dashboard-aws01-2.apifortress.com - 52.2.216.188"})})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation**"}),"\n",(0,s.jsx)(n.p,{children:"Unzip the provided package in a location of your choice."}),"\n",(0,s.jsx)(n.p,{children:"The package should contain the following files:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["*",(0,s.jsx)(n.strong,{children:"*RemoteDownloadAgent-complete.jar"})," : the agent**"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"config.properties"})," : the configuration file"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LICENSE.md"})," : \xa0the license file"]}),"\n",(0,s.jsxs)(n.li,{children:["*",(0,s.jsx)(n.strong,{children:"*VERSION.md"})," : the version file**"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"bin/start.sh"})," : \xa0the start script for *NIX systems"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"bin/shutdown.sh"})," : the stop script for *NIX systems"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"bin/java_opts.sh"})," : java related settings for *NIX systems"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"bin/start.bat"})," : the start script for Windows"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"bin/java_opts.bat"})," : java related settings for Windows"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"We will preconfigure the config.properties based on your needs."}),"\n",(0,s.jsx)(n.p,{children:"Here the main items:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"serviceName:"})," a human readable identifier of the downloader."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"apikey:"})," unique to every downloader. Used by the API Fortress engine to authenticate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"secret:"})," used by the API Fortress engine to authenticate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"use_http (true)"}),": enables the HTTP server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"use_ssl (true):"})," enables the SSL encryption for the HTTP server."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"running-the-agent---nix",children:"Running the Agent - NIX"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Run the ",(0,s.jsx)(n.code,{children:"bin/start.sh"})," script to start the agent which will run in the background."]}),"\n",(0,s.jsxs)(n.li,{children:["Run the ",(0,s.jsx)(n.code,{children:"bin/shutdown.sh"})," script to stop the service."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"running-the-agent---windows",children:"Running the Agent - Windows"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Run the ",(0,s.jsx)(n.code,{children:"bin/start.bat"})," script to start the agent which will run in foreground."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"tuning",children:"Tuning"}),"\n",(0,s.jsx)(n.p,{children:"Even though the agent does not require relevant system resources, it is a good practice to allow the agent to use as much memory as available. By editing the java_opts script (.bat or .sh, depending on the platform) you can tweak the heap memory settings."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Remember that heap memory is not the only type of memory Java uses. Raising the heap to the system limits is not advised, and it will not work. If you are not familiar with these settings, the default will likely meet your requirements."})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);