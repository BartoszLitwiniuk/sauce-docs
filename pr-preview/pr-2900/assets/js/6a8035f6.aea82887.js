"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[2208],{11775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var n=r(74848),s=r(28453),i=r(11470),d=r(19365);r(86025);const a={id:"attributes",title:"Unreal Engine Attributes",sidebar_label:"Attributes",description:"Attributes reference for Unreal Engine."},c=void 0,l={id:"error-reporting/platform-integrations/unreal/attributes",title:"Unreal Engine Attributes",description:"Attributes reference for Unreal Engine.",source:"@site/docs/error-reporting/platform-integrations/unreal/attributes.md",sourceDirName:"error-reporting/platform-integrations/unreal",slug:"/error-reporting/platform-integrations/unreal/attributes",permalink:"/sauce-docs/pr-preview/pr-2900/error-reporting/platform-integrations/unreal/attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/unreal/attributes.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"attributes",title:"Unreal Engine Attributes",sidebar_label:"Attributes",description:"Attributes reference for Unreal Engine."},sidebar:"backtrace",previous:{title:"Setup",permalink:"/sauce-docs/pr-preview/pr-2900/error-reporting/platform-integrations/unreal/setup"},next:{title:"Troubleshooting",permalink:"/sauce-docs/pr-preview/pr-2900/error-reporting/platform-integrations/unreal/troubleshooting"}},o={},h=[{value:"Attributes list",id:"attributes-list",level:2},{value:"Add Custom Attributes",id:"add-custom-attributes",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This page defines the attributes that are available to customize error and crash reports for Unreal Engine."}),"\n",(0,n.jsx)(t.h2,{id:"attributes-list",children:"Attributes list"}),"\n",(0,n.jsx)(t.p,{children:"Attributes are additional metadata that can be attached to error and crash reports. You can use attributes to filter, aggregate, analyze, and debug errors in the Backtrace console."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Unreal Property"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Format"}),(0,n.jsx)(t.th,{children:"Type"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"application"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The name of the crashing object."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"String"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"callstack"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The callstack in fault."}),(0,n.jsx)(t.td,{children:"Callstack"}),(0,n.jsx)(t.td,{children:"String"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"classifiers"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The minidump exception codes."}),(0,n.jsx)(t.td,{children:"Label"}),(0,n.jsx)(t.td,{children:"String"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"cpu.count"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The number of processors on the system."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"64-bit"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"error.message"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ErrorMessage"})}),(0,n.jsx)(t.td,{children:"The error message associated with the event."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"String"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"fault.address"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The memory address being accessed at the time of crash."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"fingerprint"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The signature of the primary fault."}),(0,n.jsx)(t.td,{children:"SHA-256"}),(0,n.jsx)(t.td,{children:"String"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"guid"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"MachineId"})}),(0,n.jsx)(t.td,{children:"The machine identifier."}),(0,n.jsx)(t.td,{children:"Bytes"}),(0,n.jsx)(t.td,{children:"64-bit"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hostname"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The hostname of the system in fault."}),(0,n.jsx)(t.td,{children:"Hostname"}),(0,n.jsx)(t.td,{children:"String"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"process.age"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"SecondsSinceStart"})}),(0,n.jsx)(t.td,{children:"The number of seconds that the application has been running for."}),(0,n.jsx)(t.td,{children:"Seconds"}),(0,n.jsx)(t.td,{children:"64-bit"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"uname.machine"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The processor architecture."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"String"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"uname.sysname"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The operating system name."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"String"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"uname.version"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"The version of the operating system."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"String"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"vm.rss.available"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"MemoryStats.TotalPhysical"})}),(0,n.jsx)(t.td,{children:"Available physical memory."}),(0,n.jsx)(t.td,{children:"Kilobytes"}),(0,n.jsx)(t.td,{children:"64-bit"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"vm.rss.peak"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"MemoryStats.PeakUsedPhysical"})}),(0,n.jsx)(t.td,{children:"Peak resident memory usage."}),(0,n.jsx)(t.td,{children:"Kilobytes"}),(0,n.jsx)(t.td,{children:"64-bit"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"vm.rss.size"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"MemoryStats.UsedPhysical"})}),(0,n.jsx)(t.td,{children:"Resident memory usage."}),(0,n.jsx)(t.td,{children:"Kilobytes"}),(0,n.jsx)(t.td,{children:"64-bit"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"vm.vma.available"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"MemoryStats.TotalVirtual"})}),(0,n.jsx)(t.td,{children:"Available virtual memory."}),(0,n.jsx)(t.td,{children:"Kilobytes"}),(0,n.jsx)(t.td,{children:"64-bit"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"vm.vma.peak"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"MemoryStats.PeakUsedVirtual"})}),(0,n.jsx)(t.td,{children:"Peak virtual memory usage."}),(0,n.jsx)(t.td,{children:"Kilobytes"}),(0,n.jsx)(t.td,{children:"64-bit"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"vm.vma.size"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"MemoryStats.UsedVirtual"})}),(0,n.jsx)(t.td,{children:"Virtual memory usage."}),(0,n.jsx)(t.td,{children:"Kilobytes"}),(0,n.jsx)(t.td,{children:"64-bit"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"bAllowToBeContacted"})}),(0,n.jsx)(t.td,{children:"Indicates whether the user wants to be contacted about the error."}),(0,n.jsx)(t.td,{children:"Bitmap"}),(0,n.jsx)(t.td,{children:"Boolean"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"CrashDumpMode"})}),(0,n.jsx)(t.td,{children:"Indicates whether the crash dump is a full dump or a partial dump."}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"uint8"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"DescriptionCrashGuid"})}),(0,n.jsx)(t.td,{children:"The unique identifier associated for the crash report."}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Dictionary"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ExecutableName"})}),(0,n.jsx)(t.td,{children:"The name of the game's executable file."}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Dictionary"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"GameName"})}),(0,n.jsx)(t.td,{children:"The name of the Unreal game."}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Dictionary"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"IsAssert"})}),(0,n.jsx)(t.td,{children:"Indicates whether the crash was caused by an assert failure."}),(0,n.jsx)(t.td,{children:"Bitmap"}),(0,n.jsx)(t.td,{children:"Boolean"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"IsEnsure"})}),(0,n.jsx)(t.td,{children:"Indicates whether the crash was caused by an ensure failure."}),(0,n.jsx)(t.td,{children:"Bitmap"}),(0,n.jsx)(t.td,{children:"Boolean"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"IsInternalBuild"})}),(0,n.jsx)(t.td,{children:"Indicates whether the error occurred in an internal engine build."}),(0,n.jsx)(t.td,{children:"Bitmap"}),(0,n.jsx)(t.td,{children:"Boolean"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"IsPerforceBuild"})}),(0,n.jsx)(t.td,{children:"Indicates whether the error occurred in a Perforce engine build."}),(0,n.jsx)(t.td,{children:"Bitmap"}),(0,n.jsx)(t.td,{children:"Boolean"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ProcessId"})}),(0,n.jsx)(t.td,{children:"The process identifier."}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"uint64"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"UserActivityHint"})}),(0,n.jsx)(t.td,{children:"The user's activity when the error occurred, if available."}),(0,n.jsx)(t.td,{children:"String"}),(0,n.jsx)(t.td,{children:"Dictionary"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"add-custom-attributes",children:"Add Custom Attributes"}),"\n",(0,n.jsx)(t.p,{children:"To add custom crash properties to be included in your error and crash reports, you must add them as custom attributes for each individual platform."}),"\n",(0,n.jsxs)(t.p,{children:["Custom attributes are not indexed by default and therefore cannot be used in queries until they've been indexed. For more information about indexing, see ",(0,n.jsx)(t.a,{href:"/error-reporting/project-setup/attributes/",children:"Indexing Attributes"}),"."]}),"\n",(0,n.jsxs)(i.A,{children:[(0,n.jsxs)(d.A,{value:"windowslinux",label:"Windows and Linux",default:!0,children:["You can add custom attributes with the Unreal Engine C++ API, by using ",(0,n.jsx)(t.code,{children:"FGenericCrashContext::SetGameData"})," to add metadata to the crash context.",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-c++",children:"static void SetGameData\n(\n    const FString & Key,\n    const FString & Value\n)\n"})}),"For more information, see ",(0,n.jsx)(t.a,{href:"https://docs.unrealengine.com/4.27/en-US/API/Runtime/Core/GenericPlatform/FGenericCrashContext/SetGameData/",children:"SetGameData"}),"."]}),(0,n.jsxs)(d.A,{value:"android",label:"Android",children:["Add the following to your initialization code:",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'TMap<FString, FString> BacktraceAttributes;\nBacktraceAttributes.Add("key", "value");\n\nBacktraceIO::FInitializeBacktraceClient(BacktraceAttributes, Attachments);\n'})})]}),(0,n.jsxs)(d.A,{value:"ios",label:"iOS",children:[(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Swift:","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-swift",children:'BacktraceClient.shared?.attributes = ["foo": "bar", "testing": true]\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Objective-C:","\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-objc",children:'BacktraceClient.shared.attributes = @{@"foo": @"bar", @"testing": YES};\n'})}),"\n"]}),"\n"]}),"You can also specify unique sets of attributes for a specific report with the ",(0,n.jsx)(t.code,{children:"willSend"})," method of ",(0,n.jsx)(t.code,{children:"BacktraceDelegate"}),". For more information, see ",(0,n.jsx)(t.a,{href:"https://github.com/backtrace-labs/backtrace-cocoa#documentation-events-handling",children:"Events Handling"}),"."]})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(18215);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>A});var n=r(96540),s=r(18215),i=r(23104),d=r(56347),a=r(205),c=r(57485),l=r(31682),o=r(89466);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,d.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=u(e),[d,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,h]=j({queryString:r,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),p=(()=>{const e=l??m;return x({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{p&&c(p)}),[p]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=r(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:d,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),o=e=>{const t=e.currentTarget,r=c.indexOf(t),s=a[r].value;s!==n&&(l(t),d(s))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:h,onClick:o,...i,className:(0,s.A)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",p.tabList),children:[(0,f.jsx)(g,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function A(e){const t=(0,b.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);