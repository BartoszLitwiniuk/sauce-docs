"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[6174],{16190:(e,s,c)=>{c.r(s),c.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>r});var n=c(74848),l=c(28453);const i={id:"completion",title:"sc completion",sidebar_label:"sc completion"},o=void 0,t={id:"dev/cli/sauce-connect-5/completion",title:"sc completion",description:"Generate an autocompletion script for bash, zsh, fish and powershell shells. See each sub-command's help for details on how to use the generated script.",source:"@site/docs/dev/cli/sauce-connect-5/completion.md",sourceDirName:"dev/cli/sauce-connect-5",slug:"/dev/cli/sauce-connect-5/completion",permalink:"/dev/cli/sauce-connect-5/completion",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/sauce-connect-5/completion.md",tags:[],version:"current",lastUpdatedBy:"Dan Slov",lastUpdatedAt:1698862601e3,frontMatter:{id:"completion",title:"sc completion",sidebar_label:"sc completion"},sidebar:"dev",previous:{title:"sc legacy",permalink:"/dev/cli/sauce-connect-5/legacy"},next:{title:"Sauce Connect Proxy 4 CLI",permalink:"/dev/cli/sauce-connect-proxy"}},a={},r=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:'<span class="cli">bash</span>',id:"bash",level:3},{value:"Linux",id:"linux",level:4},{value:"macOS",id:"macos",level:4},{value:'<span class="cli">zsh</span>',id:"zsh",level:3},{value:'<span class="cli">fish</span>',id:"fish",level:3},{value:'<span class="cli">Powershell</span>',id:"powershell",level:3},{value:"Additional Resources",id:"additional-resources",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Generate an autocompletion script for ",(0,n.jsx)(s.code,{children:"bash"}),", ",(0,n.jsx)(s.code,{children:"zsh"}),", ",(0,n.jsx)(s.code,{children:"fish"})," and ",(0,n.jsx)(s.code,{children:"powershell"})," shells. See each sub-command's help for details on how to use the generated script."]}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$ sc completion [OPTIONS]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(s.h3,{id:"bash",children:(0,n.jsx)("span",{className:"cli",children:"bash"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)(s.h4,{id:"linux",children:"Linux"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"sc completion bash > /etc/bash_completion.d/sc\n"})}),(0,n.jsx)(s.h4,{id:"macos",children:"macOS"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"sc completion bash > /usr/local/etc/bash_completion.d/sc\n"})})]}),"\n",(0,n.jsx)(s.h3,{id:"zsh",children:(0,n.jsx)("span",{className:"cli",children:"zsh"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"If shell completion is not already enabled in your environment, enable it by executing the following once:"}),"\n"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'echo "autoload -U compinit; compinit" >> ~/.zshrc\n'})}),(0,n.jsxs)(s.ol,{start:"2",children:["\n",(0,n.jsx)(s.li,{children:"To load completions for each session, execute once:"}),"\n"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'sc completion zsh > "${fpath[1]}/_sc"\n'})}),(0,n.jsxs)(s.ol,{start:"3",children:["\n",(0,n.jsx)(s.li,{children:"Start a new shell to apply this setup."}),"\n"]})]}),"\n",(0,n.jsx)(s.h3,{id:"fish",children:(0,n.jsx)("span",{className:"cli",children:"fish"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"sc completion fish | source\n"})}),"To load completions for each session, execute once:",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"sc completion fish > ~/.config/fish/completions/sc.fish\n"})})]}),"\n",(0,n.jsx)(s.h3,{id:"powershell",children:(0,n.jsx)("span",{className:"cli",children:"Powershell"})}),"\n",(0,n.jsxs)("div",{className:"cli-desc",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"sc completion powershell | Out-String | Invoke-Expression\n"})}),"To load completions for every new session, run the following and then source this file from your Powershell profile:",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"sc completion powershell > sc.ps1\n"})})]}),"\n",(0,n.jsx)(s.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/secure-connections/sauce-connect-5/installation/",children:"Sauce Connect Proxy Basic Setup"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,c)=>{c.d(s,{R:()=>o,x:()=>t});var n=c(96540);const l={},i=n.createContext(l);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);