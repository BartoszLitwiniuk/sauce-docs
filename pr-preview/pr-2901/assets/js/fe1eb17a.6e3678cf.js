"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[96833],{71482:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var c=a(74848),s=a(28453),t=(a(86025),a(11470)),l=a(19365);const r={id:"linux",title:"Install Sauce Connect on Linux",sidebar_label:"Linux"},u=void 0,o={id:"secure-connections/sauce-connect-5/installation/linux",title:"Install Sauce Connect on Linux",description:"Debian/Ubuntu",source:"@site/docs/secure-connections/sauce-connect-5/installation/linux.md",sourceDirName:"secure-connections/sauce-connect-5/installation",slug:"/secure-connections/sauce-connect-5/installation/linux",permalink:"/sauce-docs/pr-preview/pr-2901/secure-connections/sauce-connect-5/installation/linux",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5/installation/linux.md",tags:[],version:"current",lastUpdatedBy:"Micha\u0142 Matczuk",lastUpdatedAt:1723645308e3,frontMatter:{id:"linux",title:"Install Sauce Connect on Linux",sidebar_label:"Linux"},sidebar:"docs",previous:{title:"Installation",permalink:"/sauce-docs/pr-preview/pr-2901/secure-connections/sauce-connect-5/installation"},next:{title:"macOS",permalink:"/sauce-docs/pr-preview/pr-2901/secure-connections/sauce-connect-5/installation/macos"}},i={},d=[{value:"Debian/Ubuntu",id:"debianubuntu",level:2},{value:"Install package",id:"install-package",level:3},{value:"Edit config file",id:"edit-config-file",level:3},{value:"Enable and start Sauce Connect service",id:"enable-and-start-sauce-connect-service",level:3},{value:"Check Sauce Connect Status",id:"check-sauce-connect-status",level:3},{value:"Access logs",id:"access-logs",level:3},{value:"RedHat/CentOS/Fedora",id:"redhatcentosfedora",level:2},{value:"Install package",id:"install-package-1",level:3},{value:"Edit config file",id:"edit-config-file-1",level:3},{value:"Enable and start Sauce Connect service",id:"enable-and-start-sauce-connect-service-1",level:3},{value:"Check Sauce Connect Status",id:"check-sauce-connect-status-1",level:3},{value:"Access logs",id:"access-logs-1",level:3},{value:"Generic",id:"generic",level:2},{value:"Unpack the tarball",id:"unpack-the-tarball",level:3},{value:"Link the binary",id:"link-the-binary",level:3},{value:"Add bash completion",id:"add-bash-completion",level:3},{value:"Edit config file",id:"edit-config-file-2",level:3},{value:"Start Sauce Connect",id:"start-sauce-connect",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"debianubuntu",children:"Debian/Ubuntu"}),"\n",(0,c.jsxs)(n.p,{children:["Sauce Connect provides ",(0,c.jsx)(n.code,{children:".deb"})," package with Systemd service for ",(0,c.jsx)(n.a,{href:"/sauce-docs/pr-preview/pr-2901/dev/cli/sauce-connect-5/run",children:"Sauce Connect run"})," command.\nOther commands are available as well, but you will need to start them manually."]}),"\n",(0,c.jsx)(n.h3,{id:"install-package",children:"Install package"}),"\n",(0,c.jsxs)(t.A,{defaultValue:"ARM64",values:[{label:"ARM64",value:"ARM64"},{label:"x86-64",value:"x86-64"}],children:[(0,c.jsx)(l.A,{value:"ARM64",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"curl -L -o sauce-connect.deb https://saucelabs.com/downloads/sauce-connect/5.1.3/sauce-connect_5.1.3.linux_arm64.deb\nsudo dpkg -i sauce-connect.deb\n"})})}),(0,c.jsx)(l.A,{value:"x86-64",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"curl -L -o sauce-connect.deb https://saucelabs.com/downloads/sauce-connect/5.1.3/sauce-connect_5.1.3.linux_amd64.deb\nsudo dpkg -i sauce-connect.deb\n"})})})]}),"\n",(0,c.jsx)(n.h3,{id:"edit-config-file",children:"Edit config file"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo vim /etc/sauce-connect/sauce-connect.yaml\n"})}),"\n",(0,c.jsx)(n.h3,{id:"enable-and-start-sauce-connect-service",children:"Enable and start Sauce Connect service"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable sauce-connect\nsudo systemctl start sauce-connect\n"})}),"\n",(0,c.jsx)(n.h3,{id:"check-sauce-connect-status",children:"Check Sauce Connect Status"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status sauce-connect\n"})}),"\n",(0,c.jsx)(n.h3,{id:"access-logs",children:"Access logs"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"journalctl -u sauce-connect\n"})}),"\n",(0,c.jsx)(n.h2,{id:"redhatcentosfedora",children:"RedHat/CentOS/Fedora"}),"\n",(0,c.jsxs)(n.p,{children:["Sauce Connect provides ",(0,c.jsx)(n.code,{children:".rpm"})," package with Systemd service for ",(0,c.jsx)(n.a,{href:"/sauce-docs/pr-preview/pr-2901/dev/cli/sauce-connect-5/run",children:"Sauce Connect run"})," command.\nOther commands are available as well, but you will need to start them manually."]}),"\n",(0,c.jsx)(n.h3,{id:"install-package-1",children:"Install package"}),"\n",(0,c.jsxs)(t.A,{defaultValue:"ARM64",values:[{label:"ARM64",value:"ARM64"},{label:"x86-64",value:"x86-64"}],children:[(0,c.jsx)(l.A,{value:"ARM64",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo rpm -i https://saucelabs.com/downloads/sauce-connect/5.1.3/sauce-connect-5.1.3_linux.aarch64.rpm\n"})})}),(0,c.jsx)(l.A,{value:"x86-64",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo rpm -i https://saucelabs.com/downloads/sauce-connect/5.1.3/sauce-connect-5.1.3_linux.x86_64.rpm\n"})})})]}),"\n",(0,c.jsx)(n.h3,{id:"edit-config-file-1",children:"Edit config file"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo vim /etc/sauce-connect/sauce-connect.yaml\n"})}),"\n",(0,c.jsx)(n.h3,{id:"enable-and-start-sauce-connect-service-1",children:"Enable and start Sauce Connect service"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo systemctl enable sauce-connect\nsudo systemctl start sauce-connect\n"})}),"\n",(0,c.jsx)(n.h3,{id:"check-sauce-connect-status-1",children:"Check Sauce Connect Status"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status sauce-connect\n"})}),"\n",(0,c.jsx)(n.h3,{id:"access-logs-1",children:"Access logs"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"journalctl -u sauce-connect\n"})}),"\n",(0,c.jsx)(n.h2,{id:"generic",children:"Generic"}),"\n",(0,c.jsx)(n.h3,{id:"unpack-the-tarball",children:"Unpack the tarball"}),"\n",(0,c.jsxs)(t.A,{defaultValue:"ARM64",values:[{label:"ARM64",value:"ARM64"},{label:"x86-64",value:"x86-64"}],children:[(0,c.jsx)(l.A,{value:"ARM64",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"curl -L -o sauce-connect.tar.gz https://saucelabs.com/downloads/sauce-connect/5.1.3/sauce-connect-5.1.3_linux.aarch64.tar.gz\nsudo mkdir -p /opt/sauce-connect\nsudo tar -C /opt/sauce-connect -xzf sauce-connect.tar.gz\n"})})}),(0,c.jsx)(l.A,{value:"x86-64",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"curl -L -o sauce-connect.tar.gz https://saucelabs.com/downloads/sauce-connect/5.1.3/sauce-connect-5.1.3_linux.x86_64.tar.gz\nsudo mkdir -p /opt/sauce-connect\nsudo tar -C /opt/sauce-connect -xzf sauce-connect.tar.gz\n"})})})]}),"\n",(0,c.jsx)(n.h3,{id:"link-the-binary",children:"Link the binary"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo ln -s /opt/sauce-connect/sc /usr/local/bin/sc\n"})}),"\n",(0,c.jsx)(n.h3,{id:"add-bash-completion",children:"Add bash completion"}),"\n",(0,c.jsxs)(t.A,{defaultValue:"User",values:[{label:"User",value:"User"},{label:"System",value:"System"}],children:[(0,c.jsx)(l.A,{value:"User",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"echo 'source <(sc completion bash)' >>~/.bash_profile\n"})})}),(0,c.jsx)(l.A,{value:"System",children:(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo mkdir -p /etc/bash_completion.d\nsudo ln -s /opt/sauce-connect/completions/sc.bash /etc/bash_completion.d/sc\n"})})})]}),"\n",(0,c.jsx)(n.h3,{id:"edit-config-file-2",children:"Edit config file"}),"\n",(0,c.jsxs)(n.p,{children:["This step is optional. You can use default configuration or configure Sauce Connect with flags or environment variables.\nSee ",(0,c.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/",children:"CLI reference"})," for more details."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"vim /opt/sauce-connect/sauce-connect.yaml\n"})}),"\n",(0,c.jsx)(n.h3,{id:"start-sauce-connect",children:"Start Sauce Connect"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sc run --config-file /opt/sauce-connect/sauce-connect.yaml\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},19365:(e,n,a)=>{a.d(n,{A:()=>l});a(96540);var c=a(18215);const s={tabItem:"tabItem_Ymn6"};var t=a(74848);function l(e){let{children:n,hidden:a,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,c.A)(s.tabItem,l),hidden:a,children:n})}},11470:(e,n,a)=>{a.d(n,{A:()=>y});var c=a(96540),s=a(18215),t=a(23104),l=a(56347),r=a(205),u=a(57485),o=a(31682),i=a(89466);function d(e){return c.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,c.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,c.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:c,default:s}}=e;return{value:n,label:a,attributes:c,default:s}}))}(a);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:a}=e;const s=(0,l.W6)(),t=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,u.aZ)(t),(0,c.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(s.location.search);n.set(t,e),s.replace({...s.location,search:n.toString()})}),[t,s])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,t=h(e),[l,u]=(0,c.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const c=a.find((e=>e.default))??a[0];if(!c)throw new Error("Unexpected error: 0 tabValues");return c.value}({defaultValue:n,tabValues:t}))),[o,d]=b({queryString:a,groupId:s}),[m,v]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,t]=(0,i.Dv)(a);return[s,(0,c.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:s}),x=(()=>{const e=o??m;return p({value:e,tabValues:t})?e:null})();(0,r.A)((()=>{x&&u(x)}),[x]);return{selectedValue:l,selectValue:(0,c.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),v(e)}),[d,v,t]),tabValues:t}}var v=a(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(74848);function g(e){let{className:n,block:a,selectedValue:c,selectValue:l,tabValues:r}=e;const u=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.a_)(),i=e=>{const n=e.currentTarget,a=u.indexOf(n),s=r[a].value;s!==c&&(o(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;n=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;n=u[a]??u[u.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:r.map((e=>{let{value:n,label:a,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:c===n?0:-1,"aria-selected":c===n,ref:e=>u.push(e),onKeyDown:d,onClick:i,...t,className:(0,s.A)("tabs__item",x.tabItem,t?.className,{"tabs__item--active":c===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:s}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===s));return e?(0,c.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,c.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(j,{...e,...n})]})}function y(e){const n=(0,v.A)();return(0,f.jsx)(k,{...e,children:d(e.children)},String(n))}},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>r});var c=a(96540);const s={},t=c.createContext(s);function l(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);