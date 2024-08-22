"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[53440],{77310:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(74848),o=t(28453);const i={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting",description:"Troubleshooting reference for Unreal Engine crash reports."},s=void 0,a={id:"error-reporting/platform-integrations/unreal/troubleshooting",title:"Troubleshooting",description:"Troubleshooting reference for Unreal Engine crash reports.",source:"@site/docs/error-reporting/platform-integrations/unreal/troubleshooting.md",sourceDirName:"error-reporting/platform-integrations/unreal",slug:"/error-reporting/platform-integrations/unreal/troubleshooting",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/platform-integrations/unreal/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/unreal/troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"Rick Foster",lastUpdatedAt:1713393573e3,frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting",description:"Troubleshooting reference for Unreal Engine crash reports."},sidebar:"backtrace",previous:{title:"Attributes",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/platform-integrations/unreal/attributes"},next:{title:"CryEngine",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/platform-integrations/cryengine"}},l={},c=[{value:"How can I troubleshoot failures in crash reporting?",id:"how-can-i-troubleshoot-failures-in-crash-reporting",level:2},{value:"Cooked Builds",id:"cooked-builds",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"how-can-i-troubleshoot-failures-in-crash-reporting",children:"How can I troubleshoot failures in crash reporting?"}),"\n",(0,n.jsx)(r.p,{children:"Please refer to your crash reporting client logs."}),"\n",(0,n.jsxs)(r.p,{children:["Make sure the ",(0,n.jsx)(r.code,{children:"DefaultEngine.ini"})," (for crashes in packaged builds) and ",(0,n.jsx)(r.code,{children:"UserEngine.ini"})," files (for crashes within the editor) have the correct settings. For more information, see ",(0,n.jsx)(r.a,{href:"/error-reporting/platform-integrations/unreal/setup/#initialize-the-backtrace-client",children:"Initialize the Backtrace Client"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"cooked-builds",children:"Cooked Builds"}),"\n",(0,n.jsxs)(r.p,{children:["When ",(0,n.jsx)(r.a,{href:"https://docs.unrealengine.com/4.27/en-US/SharingAndReleasing/Deployment/Cooking/",children:"creating cooked"})," builds, the contents of ",(0,n.jsx)(r.code,{children:"[ENGINE_DIR]\\Engine\\Programs\\CrashReportClient\\Config\\DefaultEngine.ini"})," gets included as ",(0,n.jsx)(r.code,{children:"Engine\\Programs\\CrashReportClient\\Config\\DefaultEngine.ini"})," in the cooked build's path."]}),"\n",(0,n.jsxs)(r.p,{children:["Even though the ",(0,n.jsx)(r.code,{children:"CrashReportClient.ini"})," files generated in the Saved directory have the Backtrace URL, they appear to be using the file from the Unreal Base directory instead."]}),"\n",(0,n.jsxs)(r.p,{children:["When you replace the contents of the ",(0,n.jsx)(r.code,{children:"CrashReportClient.ini"})," file with the Backtrace version, the reporter works as expected."]}),"\n",(0,n.jsx)(r.admonition,{type:"tip",children:(0,n.jsxs)(r.p,{children:["You can use networking tools like ",(0,n.jsx)(r.a,{href:"https://www.tcpdump.org/",children:"tcpdump"})," or ",(0,n.jsx)(r.a,{href:"https://www.telerik.com/download/fiddler-everywhere",children:"FiddlerEverywhere"})," to verify that the CrashReporter is submitting to the correct host."]})})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>a});var n=t(96540);const o={},i=n.createContext(o);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);