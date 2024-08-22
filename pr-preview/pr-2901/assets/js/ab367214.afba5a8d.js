"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[52873],{44569:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=t(74848),a=t(28453);t(86025),t(11470),t(19365);const s={id:"sauce-connect",title:"Using Sauce Connect Tunnels with Sauce Orchestrate",sidebar_label:"Using Sauce Connect",description:"Get a Sauce Connect tunnel up and running quickly for your Sauce Orchestrate tests."},o=void 0,c={id:"orchestrate/sauce-connect",title:"Using Sauce Connect Tunnels with Sauce Orchestrate",description:"Get a Sauce Connect tunnel up and running quickly for your Sauce Orchestrate tests.",source:"@site/docs/orchestrate/sauce-connect.md",sourceDirName:"orchestrate",slug:"/orchestrate/sauce-connect",permalink:"/sauce-docs/pr-preview/pr-2901/orchestrate/sauce-connect",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/orchestrate/sauce-connect.md",tags:[],version:"current",lastUpdatedBy:"seb vincent",lastUpdatedAt:1695488096e3,frontMatter:{id:"sauce-connect",title:"Using Sauce Connect Tunnels with Sauce Orchestrate",sidebar_label:"Using Sauce Connect",description:"Get a Sauce Connect tunnel up and running quickly for your Sauce Orchestrate tests."},sidebar:"docs",previous:{title:"Best Practices",permalink:"/sauce-docs/pr-preview/pr-2901/orchestrate/best-practices"},next:{title:"SauceLabs Container Registry",permalink:"/sauce-docs/pr-preview/pr-2901/orchestrate/saucelabs-private-registry"}},i={},u=[{value:"Configure a Sauce Connect Tunnel with Access to the Management Services",id:"configure-a-sauce-connect-tunnel-with-access-to-the-management-services",level:2},{value:"Configure the Sauce Orchestrate Runner to Use This Management Tunnel",id:"configure-the-sauce-orchestrate-runner-to-use-this-management-tunnel",level:2},{value:"Container Configuration",id:"container-configuration",level:2},{value:"Standard Proxy Configuration",id:"standard-proxy-configuration",level:3},{value:"Java",id:"java",level:3},{value:"More Information",id:"more-information",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Sauce Orchestrate fully integrates with Sauce Connect. If the service or site you are testing is already accessed via Sauce Connect, no change to your code is needed.\nIf your code makes direct calls to any backend service, such as an API or database that is behind a firewall on your private network, follow the steps below to launch a secure trusted connection between your network and the Sauce Orchestrate runner."}),"\n",(0,r.jsx)(n.h2,{id:"configure-a-sauce-connect-tunnel-with-access-to-the-management-services",children:"Configure a Sauce Connect Tunnel with Access to the Management Services"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The specific configuration needed for Sauce Orchestrate is setting the ",(0,r.jsx)(n.code,{children:"vm-version"})," to the fixed value listed below and adding the domains of backend services to the ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--tunnel-domains",children:(0,r.jsx)(n.code,{children:"tunnel-domains"})})," list."]}),"\n",(0,r.jsxs)(n.li,{children:["All other steps and configuration are the same. Refer to the ",(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/quickstart/",children:"Sauce Connect Proxy Quickstart"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"---\nvm-version: 'v2alpha2'\ntunnel-domains: [ ]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configure-the-sauce-orchestrate-runner-to-use-this-management-tunnel",children:"Configure the Sauce Orchestrate Runner to Use This Management Tunnel"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Add the ",(0,r.jsx)(n.a,{href:"/orchestrate/saucectl-configuration/#tunnel",children:(0,r.jsx)(n.code,{children:"tunnel"})})," key to the runner configuration."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"container-configuration",children:"Container Configuration"}),"\n",(0,r.jsx)(n.p,{children:"When a Sauce Orchestrate container starts with Sauce Connect enabled, the following\nenvironment variables are set:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Reference (for manual configuration)\nno_proxy=host.sauceconnect.internal,saucelabs.com,*.saucelabs.com\nproxy_port=1080\n\n# Java Opts (for manual configuration)\nSAUCE_JAVA_OPTS=-Dhttp.proxyHost=host.sauceconnect.internal -Dhttp.proxyPort=1080 -Dhttps.proxyHost=host.sauceconnect.internal -Dhttps.proxyPort=1080 -Dhttp.nonProxyHosts=host.sauceconnect.internal|saucelabs.com|*.saucelabs.com\n\n# Standard Proxy \nhttps_proxy=http://host.sauceconnect.internal:1080\nproxy_host=host.sauceconnect.internal\nNO_PROXY=host.sauceconnect.internal,saucelabs.com,*.saucelabs.com\nHTTPS_PROXY=http://host.sauceconnect.internal:1080\nHTTP_PROXY=http://host.sauceconnect.internal:1080\nhttp_proxy=http://host.sauceconnect.internal:1080\n"})}),"\n",(0,r.jsx)(n.h3,{id:"standard-proxy-configuration",children:"Standard Proxy Configuration"}),"\n",(0,r.jsx)(n.p,{children:"In most programing language (Go, Python, Node.js...) the standard proxy environment\nvariables are supported, and there is no extra step to configure the\nSauce Connect."}),"\n",(0,r.jsx)(n.h3,{id:"java",children:"Java"}),"\n",(0,r.jsxs)(n.p,{children:["Java is a notable exception. The standard proxy environment variable are not\nsupported, and system properties must be used instead. One way to configure\nthe system properties is to pass the ",(0,r.jsx)(n.code,{children:"SAUCE_JAVA_OPTS"})," options when starting\na Java VM."]}),"\n",(0,r.jsx)(n.p,{children:"In Maven this may be done in several place"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For the main maven process setting ",(0,r.jsx)(n.code,{children:"MAVEN_OPTS=$SAUCE_JAVA_OPTS"}),", or alternatively\nin ",(0,r.jsx)(n.code,{children:"settings.xml"})]}),"\n",(0,r.jsx)(n.li,{children:"For the Surefire processes in  pom.xml as below:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    ...\n    <properties>\n        ...\n        <argLine>${env.SAUCE_JAVA_OPTS}</argLine>\n    </properties>\n'})}),"\n",(0,r.jsx)(n.p,{children:"This should me enough for libraries using the standard Java HTTP client. Some libraries\nhowever differ from the standard and require the proxy configuration to be implemented\nwithin code."}),"\n",(0,r.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect",children:"Using Sauce Connect Proxy"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/additional-proxies",children:"Using Additional Proxies with Sauce Connect Setups"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>j});var r=t(96540),a=t(18215),s=t(23104),o=t(56347),c=t(205),i=t(57485),u=t(31682),l=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=m({queryString:t,groupId:a}),[f,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,l.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),l=e=>{const n=e.currentTarget,t=i.indexOf(n),a=c[t].value;a!==r&&(u(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:l,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function S(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(y,{...e,...n})]})}function j(e){const n=(0,v.A)();return(0,b.jsx)(S,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);