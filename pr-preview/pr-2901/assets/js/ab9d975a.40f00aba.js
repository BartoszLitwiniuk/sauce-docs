"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[7967],{73361:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var o=n(74848),s=n(28453);n(86025);const t={id:"setup",title:"Setting up coresnapd on FreeBSD",sidebar_label:"Setup for FreeBSD",description:"Add Backtrace to your Coresnap project."},a=void 0,c={id:"error-reporting/platform-integrations/coresnap/setup",title:"Setting up coresnapd on FreeBSD",description:"Add Backtrace to your Coresnap project.",source:"@site/docs/error-reporting/platform-integrations/coresnap/setup.md",sourceDirName:"error-reporting/platform-integrations/coresnap",slug:"/error-reporting/platform-integrations/coresnap/setup",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/platform-integrations/coresnap/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/coresnap/setup.md",tags:[],version:"current",lastUpdatedBy:"Lysanne Pinto",lastUpdatedAt:1689262934e3,frontMatter:{id:"setup",title:"Setting up coresnapd on FreeBSD",sidebar_label:"Setup for FreeBSD",description:"Add Backtrace to your Coresnap project."},sidebar:"backtrace",previous:{title:"Coresnap Integration Guide",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/platform-integrations/coresnap/integrating"},next:{title:"Integration Guide",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/platform-integrations/crashpad"}},i={},d=[{value:"Initial Configuration",id:"initial-configuration",level:2},{value:"Testing",id:"testing",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"To install Backtrace's package mirror, run the following command:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"# fetch https://packages.backtrace.io/LICENSE/stork/freebsd/RELEASE/backtrace.conf -o /etc/pkg/backtrace.conf\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Replace ",(0,o.jsx)(r.code,{children:"<LICENSE>"})," with your license number. If you haven't received your license number yet, contact us. Replace ",(0,o.jsx)(r.code,{children:"RELEASE"})," with the major version number (for example, 11, 12, etc.) that matches your FreeBSD installation. Tthe minimum required version for coresnap is 11.0."]}),"\n",(0,o.jsxs)(r.p,{children:["This command configures ",(0,o.jsx)(r.code,{children:"pkg"})," to pull from Backtrace's mirror. To verify proper ",(0,o.jsx)(r.code,{children:"pkg"})," configuration, run the following commands:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"# pkg update\n# pkg search -x '^backtrace-*'\n"})}),"\n",(0,o.jsx)(r.p,{children:"Once verified, you can proceed to install the required packages:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"# pkg install backtrace-coroner backtrace-coresnap backtrace-ptrace backtrace-libbt\n"})}),"\n",(0,o.jsx)(r.h2,{id:"initial-configuration",children:"Initial Configuration"}),"\n",(0,o.jsx)(r.p,{children:"After installing the packages, coresnapd requires a few configuration changes to start. Run the following commands:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:'# sysrc coresnapd_enable=YES\n# sysrc crashinfo_program="/opt/backtrace/sbin/kernel_coresnap"\n# sysrc local_startup="$(sysrc -n local_startup) /opt/backtrace/etc/rc.d"\n'})}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.code,{children:"coresnapd"})," uses ",(0,o.jsx)(r.code,{children:"coroner"})," to perform submissions of crashes. To configure it, edit the ",(0,o.jsx)(r.code,{children:"/usr/local/etc/coroner.cf"})," file. For more information, consult the ",(0,o.jsx)(r.a,{href:"/error-reporting/advanced/coroner/client-getting-started/",children:"coroner documentation"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Now you can start ",(0,o.jsx)(r.code,{children:"coresnapd"}),":"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"# service coresnapd start\n"})}),"\n",(0,o.jsx)(r.p,{children:"To check its status, use the following command:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"$ service coresnapd status\ncoresnapd is running as pid 613.\n"})}),"\n",(0,o.jsx)(r.h2,{id:"testing",children:"Testing"}),"\n",(0,o.jsxs)(r.p,{children:["Coresnapd leverages ",(0,o.jsx)(r.code,{children:"devd"})," on FreeBSD to get notified about userland crashes, which are automatically stored in ",(0,o.jsx)(r.code,{children:"/var/coresnap/archive/corefiles"}),". To test, simply run a program that crashes, and the crash information will be processed."]}),"\n",(0,o.jsxs)(r.p,{children:["Kernel crashes are processed by ",(0,o.jsx)(r.code,{children:"/opt/backtrace/sbin/kernel_coresnap"})," instead of the standard ",(0,o.jsx)(r.code,{children:"/usr/sbin/crashinfo"})," and may require configuring a dump device. To configure it, run the following command:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"# sysrc dumpdev=AUTO\n"})}),"\n",(0,o.jsxs)(r.p,{children:["or more information on configuring the dump device, refer to the ",(0,o.jsx)(r.a,{href:"https://www.freebsd.org/cgi/man.cgi?query=rc.conf&apropos=0&sektion=0&manpath=FreeBSD+12.1-RELEASE+and+Ports&arch=default&format=html",children:"rc.conf"})," documentation. To force a kernel crash for testing purposes, run the following command:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"# sysctl debug.kdb.panic=1\n"})}),"\n",(0,o.jsx)(r.p,{children:"When the system comes up again, it will process the kernel crash and deliver it to coresnapd to submit using coroner."})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>c});var o=n(96540);const s={},t=o.createContext(s);function a(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);