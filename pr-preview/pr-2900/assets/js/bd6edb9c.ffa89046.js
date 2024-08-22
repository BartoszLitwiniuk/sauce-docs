"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[78564],{5887:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=t(74848),r=t(28453);t(86025),t(11470),t(19365);const a={id:"readiness-checks",title:"Sauce Connect Proxy Readiness Checks",sidebar_label:"Readiness Checks"},o=void 0,c={id:"secure-connections/sauce-connect-5/operation/readiness-checks",title:"Sauce Connect Proxy Readiness Checks",description:"To run tests using an ephemeral tunnel, it's important to be sure the tunnel is ready to accept jobs.",source:"@site/docs/secure-connections/sauce-connect-5/operation/readiness-checks.md",sourceDirName:"secure-connections/sauce-connect-5/operation",slug:"/secure-connections/sauce-connect-5/operation/readiness-checks",permalink:"/sauce-docs/pr-preview/pr-2900/secure-connections/sauce-connect-5/operation/readiness-checks",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5/operation/readiness-checks.md",tags:[],version:"current",lastUpdatedBy:"Micha\u0142 Matczuk",lastUpdatedAt:1710926972e3,frontMatter:{id:"readiness-checks",title:"Sauce Connect Proxy Readiness Checks",sidebar_label:"Readiness Checks"},sidebar:"docs",previous:{title:"API Server",permalink:"/sauce-docs/pr-preview/pr-2900/secure-connections/sauce-connect-5/operation/api-server"},next:{title:"Architecture",permalink:"/sauce-docs/pr-preview/pr-2900/secure-connections/sauce-connect-5/advanced/architecture"}},i={},l=[{value:"Containers",id:"containers",level:2},{value:"Docker Compose",id:"docker-compose",level:3},{value:"General",id:"general",level:2},{value:"Using sc readiness endpoint",id:"using-sc-readiness-endpoint",level:3},{value:"Using the tunnel REST API",id:"using-the-tunnel-rest-api",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"To run tests using an ephemeral tunnel, it's important to be sure the tunnel is ready to accept jobs.\nJobs that run when the tunnel is still in a booting state could fail because the tunnel is not available."}),"\n",(0,s.jsx)(n.p,{children:"When the tunnel is ready to accept jobs, the SC client will print a message to console (or log file):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"[control] [INFO] Sauce Connect is up, you may start your tests\n"})}),"\n",(0,s.jsx)(n.p,{children:"This document provides several methods to check if the tunnel is ready to accept jobs."}),"\n",(0,s.jsx)(n.h2,{id:"containers",children:"Containers"}),"\n",(0,s.jsxs)(n.p,{children:["If running Sauce Connect Proxy in a container, you can use the container health check feature to ensure the tunnel is ready to accept jobs.\nYou should see the container status as ",(0,s.jsx)(n.code,{children:"healthy"})," when the tunnel is ready."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ docker ps\nCONTAINER ID  IMAGE                              COMMAND     CREATED         STATUS                   PORTS       NAMES\n7ee92986fd77  docker.io/saucelabs/sauce-connect  run         15 seconds ago  Up 16 seconds (healthy)              sc_container\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The following script will wait for the container ",(0,s.jsx)(n.code,{children:"sc_container"})," to be healthy."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'until [ "$(docker inspect --format=\'{{.State.Health.Status}}\' sc_container)" == "healthy" ]\ndo\n    sleep 1\ndone\n'})}),"\n",(0,s.jsx)(n.h3,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,s.jsxs)(n.p,{children:["If you are using Docker Compose, you can use the ",(0,s.jsx)(n.code,{children:"depends_on"})," option to wait for the sc container to be healthy before starting the test container."]}),"\n",(0,s.jsx)(n.p,{children:"Example compose file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"version: '3.8'\nservices:\n  sc:\n    image: saucelabs/sauce-connect\n    environment:\n      SAUCE_USERNAME: ${SAUCE_USERNAME}\n      SAUCE_ACCESS_KEY: ${SAUCE_ACCESS_KEY}\n      SAUCE_REGION: ${SAUCE_REGION}\n      SAUCE_TUNNEL_NAME: ${SAUCE_TUNNEL_NAME}\n  test:\n    image: ubuntu\n    command: echo \"Hello, World!\"\n    depends_on:\n      sc:\n        condition: service_healthy\n"})}),"\n",(0,s.jsx)(n.p,{children:"Start the containers with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker compose up\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see the following output:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sc-1    | [tunnel] [INFO] established connection to Sauce Connect server active=1/2\nsc-1    | [control] [INFO] Sauce Connect is up, you may start your tests\ntest-1  | Hello, World!\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Another option using Docker Compose is to use the ",(0,s.jsx)(n.code,{children:"wait"})," command to wait for the sc container to be healthy before starting the test container."]}),"\n",(0,s.jsx)(n.p,{children:"Using the same compose file as above, you can start the containers with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker compose up -d --wait sc\n"})}),"\n",(0,s.jsx)(n.p,{children:"to wait for the sc container to be healthy before starting the test container."}),"\n",(0,s.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,s.jsx)(n.h3,{id:"using-sc-readiness-endpoint",children:"Using sc readiness endpoint"}),"\n",(0,s.jsxs)(n.p,{children:["Sauce Connect provides a local ",(0,s.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/operation/api-server",children:"API server"})," that contains readiness and liveness endpoints.\nThe readiness endpoint ",(0,s.jsx)(n.code,{children:"/readyz"})," returns a 200 response code when Sauce Connect Proxy is ready, and 503 otherwise."]}),"\n",(0,s.jsxs)(n.p,{children:["To use the API server, you need to start Sauce Connect with the ",(0,s.jsx)(n.code,{children:"--api-address"})," option or set the ",(0,s.jsx)(n.code,{children:"SC_API_ADDRESS"})," environment variable."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sc --api-address :8032 \u2026\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can then use the following script to wait for the readiness endpoint to return a 200 response code."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'until [ "$(curl -s -o /dev/null -w \'\'%{http_code}\'\' localhost:8032/readyz)" == "200" ]\ndo\n    sleep 1\ndone\necho "Sauce Connect Proxy is ready"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"using-the-tunnel-rest-api",children:"Using the tunnel REST API"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/dev/api/connect/#get-tunnels-for-a-user",children:"Sauce Connect REST API"})," provides metadata on tunnels.\nOne of the keys ",(0,s.jsx)(n.code,{children:"is_ready"})," is a boolean that tracks the state of the tunnel.\nThis method can be used for jobs that don't have access to the tunnel's filesystem or network.\nIt will need some logic to find the right tunnel, since the ",(0,s.jsx)(n.code,{children:"tunnel_id"})," is probably not known when the request is sent."]}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"/tunnels?full=true"})," call is made, an array of tunnel objects is sent back with metadata. Each item could be checked for a matching ",(0,s.jsx)(n.code,{children:"tunnel_identifier"}),", and once the correct tunnel is found, the ",(0,s.jsx)(n.code,{children:"is_ready"})," flag could be checked."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl --user ${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY} https://api.us-west-1.saucelabs.com/rest/v1/${SAUCE_USERNAME}/tunnels?full=true\n\n[\n  {\n    ...\n    "id": "674442d71ffe446aa854a24a4c1c8bdd",\n    "is_ready": true,\n    ...\n    "tunnel_identifier": "jenkins-job-1234"\n    ...\n  }\n]\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var s=t(18215);const r={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var s=t(96540),r=t(18215),a=t(23104),o=t(56347),c=t(205),i=t(57485),l=t(31682),u=t(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[l,d]=b({queryString:t,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,u.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),v=(()=>{const e=l??m;return p({value:e,tabValues:a})?e:null})();(0,c.A)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function g(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=c[t].value;r!==s&&(l(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function S(e){const n=(0,f.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);