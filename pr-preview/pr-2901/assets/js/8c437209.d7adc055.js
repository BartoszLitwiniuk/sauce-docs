"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[6001],{56968:(e,s,c)=>{c.r(s),c.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>r});var l=c(74848),n=c(28453);const i={id:"completion",title:"saucectl completion",sidebar_label:"saucectl completion"},o=void 0,t={id:"dev/cli/saucectl/completion",title:"saucectl completion",description:"Generate a completion script for bash, zsh, fish and powershell shells.",source:"@site/docs/dev/cli/saucectl/completion.md",sourceDirName:"dev/cli/saucectl",slug:"/dev/cli/saucectl/completion",permalink:"/sauce-docs/pr-preview/pr-2901/dev/cli/saucectl/completion",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/completion.md",tags:[],version:"current",lastUpdatedBy:"Lysanne Pinto",lastUpdatedAt:1688681034e3,frontMatter:{id:"completion",title:"saucectl completion",sidebar_label:"saucectl completion"},sidebar:"dev",previous:{title:"upload",permalink:"/sauce-docs/pr-preview/pr-2901/dev/cli/saucectl/artifacts/upload"},next:{title:"configure",permalink:"/sauce-docs/pr-preview/pr-2901/dev/cli/saucectl/configure/configure/"}},a={},r=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:'<span class="cli">bash</span>',id:"bash",level:3},{value:"Linux",id:"linux",level:4},{value:"macOS",id:"macos",level:4},{value:'<span class="cli">zsh</span>',id:"zsh",level:3},{value:'<span class="cli">fish</span>',id:"fish",level:3},{value:'<span class="cli">Powershell</span>',id:"powershell",level:3}];function d(e){const s={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.p,{children:["Generate a completion script for ",(0,l.jsx)(s.code,{children:"bash"}),", ",(0,l.jsx)(s.code,{children:"zsh"}),", ",(0,l.jsx)(s.code,{children:"fish"})," and ",(0,l.jsx)(s.code,{children:"powershell"})," shells."]}),"\n",(0,l.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"$ saucectl completion [OPTIONS]\n"})}),"\n",(0,l.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,l.jsx)(s.h3,{id:"bash",children:(0,l.jsx)("span",{className:"cli",children:"bash"})}),"\n",(0,l.jsxs)("div",{className:"cli-desc",children:[(0,l.jsx)(s.h4,{id:"linux",children:"Linux"}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"saucectl completion bash > /etc/bash_completion.d/saucectl\n"})}),(0,l.jsx)(s.h4,{id:"macos",children:"macOS"}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"saucectl completion bash > /usr/local/etc/bash_completion.d/saucectl\n"})})]}),"\n",(0,l.jsx)(s.h3,{id:"zsh",children:(0,l.jsx)("span",{className:"cli",children:"zsh"})}),"\n",(0,l.jsxs)("div",{className:"cli-desc",children:[(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"If shell completion is not already enabled in your environment, enable it by executing the following once:"}),"\n"]}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:'echo "autoload -U compinit; compinit" >> ~/.zshrc\n'})}),(0,l.jsxs)(s.ol,{start:"2",children:["\n",(0,l.jsx)(s.li,{children:"To load completions for each session, execute once:"}),"\n"]}),(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:'saucectl completion zsh > "${fpath[1]}/_saucectl"\n'})}),(0,l.jsxs)(s.ol,{start:"3",children:["\n",(0,l.jsx)(s.li,{children:"Start a new shell to apply this setup."}),"\n"]})]}),"\n",(0,l.jsx)(s.h3,{id:"fish",children:(0,l.jsx)("span",{className:"cli",children:"fish"})}),"\n",(0,l.jsxs)("div",{className:"cli-desc",children:[(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"saucectl completion fish | source\n"})}),"To load completions for each session, execute once:",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"saucectl completion fish > ~/.config/fish/completions/saucectl.fish\n"})})]}),"\n",(0,l.jsx)(s.h3,{id:"powershell",children:(0,l.jsx)("span",{className:"cli",children:"Powershell"})}),"\n",(0,l.jsxs)("div",{className:"cli-desc",children:[(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"saucectl completion powershell | Out-String | Invoke-Expression\n"})}),"To load completions for every new session, run the following and then source this file from your Powershell profile:",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{children:"saucectl completion powershell > saucectl.ps1\n"})})]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,s,c)=>{c.d(s,{R:()=>o,x:()=>t});var l=c(96540);const n={},i=l.createContext(n);function o(e){const s=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),l.createElement(i.Provider,{value:s},e.children)}}}]);