"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[7277],{2043:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=o(74848),i=o(28453),t=(o(11470),o(19365),o(86025));const s={id:"dwarf",title:"DWARF",sidebar_label:"DWARF",description:"Debug information is used by symbolic debuggers and the Backtrace platform to reconcile process executable state to the source-code form."},a=void 0,c={id:"error-reporting/advanced/dwarf",title:"DWARF",description:"Debug information is used by symbolic debuggers and the Backtrace platform to reconcile process executable state to the source-code form.",source:"@site/docs/error-reporting/advanced/dwarf.md",sourceDirName:"error-reporting/advanced",slug:"/error-reporting/advanced/dwarf",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/advanced/dwarf",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/advanced/dwarf.md",tags:[],version:"current",lastUpdatedBy:"gm4sl",lastUpdatedAt:1692799751e3,frontMatter:{id:"dwarf",title:"DWARF",sidebar_label:"DWARF",description:"Debug information is used by symbolic debuggers and the Backtrace platform to reconcile process executable state to the source-code form."},sidebar:"backtrace",previous:{title:"Client Tools for UNIX",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/advanced/client-tools-unix"},next:{title:"Snapshot Generation",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/advanced/snapshots"}},l={},d=[{value:"Background",id:"background",level:2},{value:"Performance Impact of Symbols",id:"performance-impact-of-symbols",level:2},{value:"Debug Information Does Not Impact Performance",id:"debug-information-does-not-impact-performance",level:3},{value:"Reducing the Size of Your Debug Information",id:"reducing-the-size-of-your-debug-information",level:2},{value:"Compression",id:"compression",level:3},{value:"Debug Fission",id:"debug-fission",level:3},{value:"Tools",id:"tools",level:3},{value:"Stand-Alone Debug Files",id:"stand-alone-debug-files",level:3},{value:"Removing Debug Information",id:"removing-debug-information",level:3},{value:"More Information",id:"more-information",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Debug information plays a crucial role in enabling symbolic debuggers and the Backtrace platform to reconcile the process executable state with the source-code form familiar to most software engineers. This information facilitates the mapping of memory addresses and register values to function names, source code locations, and variable descriptions."}),"\n",(0,r.jsx)(n.p,{children:"In some environments, debug information may be omitted for reasons such as disk utilization and intellectual property protection."}),"\n",(0,r.jsx)(n.p,{children:"This article serves as a pragmatic introduction to debug information, providing insights on how to manage and deploy it effectively."}),"\n",(0,r.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,r.jsx)(n.p,{children:"On systems like Linux, FreeBSD, IllumOS, and Mac OS, the underlying executable formats either reference external files containing debug information or directly embed the debug information. The debug information on these platforms is expressed through the following sections:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".debug_aranges"}),": A mapping from memory addresses to function compilation units in ",(0,r.jsx)(n.code,{children:".debug_info"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".debug_info"}),": The primary debug information section containing function names, types, variables, inline information, and more."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".debug_abbrev"}),": Describes the structure of debug information in ",(0,r.jsx)(n.code,{children:".debug_info"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".debug_line"}),": Source-code location information described as a state machine mapping memory addresses to files and line numbers."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".debug_line_str"}),": A section introduced in DWARF 5 that contains strings used by ",(0,r.jsx)(n.code,{children:".debug_line"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".debug_str"}),": Strings used by sections such as ",(0,r.jsx)(n.code,{children:".debug_info"})," and ",(0,r.jsx)(n.code,{children:".debug_line"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".debug_loc"}),": Location lists used to describe the location of values across memory address ranges."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".debug_loclists"}),": A more efficient representation of ",(0,r.jsx)(n.code,{children:".debug_loc"})," introduced in DWARF 5."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".debug_ranges"}),": A mapping from memory addresses to debug information."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".debug_rnglists"}),": A more efficient representation of ",(0,r.jsx)(n.code,{children:".debug_ranges"})," introduced in DWARF 5."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".debug_types"}),": Type specifications with pre-computed type signatures, allowing for efficient merging of common types and omission of unused type information. Introduced in DWARF 4, merged back into ",(0,r.jsx)(n.code,{children:".debug_info"})," with DWARF 5."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".debug_pubtypes"}),": Maps type names to compilation unit debug information."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".debug_pubnames"}),": Maps function names to compilation unit debug information, and more."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"To learn more about how these sections are used, refer to the additional reading section."}),"\n",(0,r.jsx)(n.h2,{id:"performance-impact-of-symbols",children:"Performance Impact of Symbols"}),"\n",(0,r.jsx)(n.h3,{id:"debug-information-does-not-impact-performance",children:"Debug Information Does Not Impact Performance"}),"\n",(0,r.jsx)(n.p,{children:"Some users may have concerns that directly embedding debug information can result in performance degradation. However, this is not true. Debug information does not impact executable code or the size of statically initialized memory. The size of your debug information generally does not impact the performance of your application. Your operating system only loads sections of the executable that are required for execution."}),"\n",(0,r.jsx)(n.p,{children:"For example, the following is a list of sections loaded from our object store server executable during execution. The total size of the executable is 19MB."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ pmap `pgrep coronerd|head -1`|egrep 'coronerd$'\n0000000000400000   3244K r-x-- coronerd\n000000000072c000     36K r---- coronerd\n0000000000735000    252K rw--- coronerd\n"})}),"\n",(0,r.jsx)(n.p,{children:"The graph below presents the size of different sections in the file. Over 80% of the 19MB executable consists of debug information. However, only approximately 3.6MB of the file is loaded, which corresponds to executable code, read-only data, and statically allocated data (including mappings that don't correspond to data on disk)."}),"\n",(0,r.jsx)("img",{src:(0,t.A)("/img/error-reporting/5e601cb6f2271.png"),alt:"size of different sections"}),"\n",(0,r.jsx)(n.p,{children:"Stripping the executable removes the debug information sections, symbol strings, and more. This results in an executable size of 3.5MB. A process launched from this executable has the same virtual memory mappings as the one loaded from the unstripped executable."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ pmap `pgrep coronerd|head -1`|egrep 'coronerd$'\n0000000000400000   3244K r-x-- coronerd\n000000000072c000     36K r---- coronerd\n0000000000735000    252K rw--- coronerd\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Some applications may explicitly wire pages of memory using facilities such as ",(0,r.jsx)(n.code,{children:"mlockall"}),". This also has no impact, as sections related to debug information are not loaded into memory."]}),"\n",(0,r.jsx)(n.h2,{id:"reducing-the-size-of-your-debug-information",children:"Reducing the Size of Your Debug Information"}),"\n",(0,r.jsx)(n.h3,{id:"compression",children:"Compression"}),"\n",(0,r.jsxs)(n.p,{children:["Many debuggers, including our own, support compressed debug sections. These sections are identified by a ",(0,r.jsx)(n.code,{children:".z"})," prefix to the debug section names. For example, ",(0,r.jsx)(n.code,{children:".zdebug_info"})," instead of ",(0,r.jsx)(n.code,{children:".debug_info"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If you are using gcc, you can enable this functionality by passing the ",(0,r.jsx)(n.code,{children:"-gz"})," flag. You can refer to ",(0,r.jsx)(n.a,{href:"https://gcc.gnu.org/onlinedocs/gcc/Debugging-Options.html",children:"Debugging Options"})," to learn more. For other compilers, your objcopy facility may also expose a ",(0,r.jsx)(n.code,{children:"--compress-debug-sections"})," option. Check out the ",(0,r.jsx)(n.a,{href:"https://sourceware.org/binutils/docs/binutils/objcopy.html",children:"objcopy documentation"})," to learn more."]}),"\n",(0,r.jsxs)(n.p,{children:["Below is an example of compressing the debug sections of the aforementioned ",(0,r.jsx)(n.code,{children:"coronerd"})," executable:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ objcopy coronerd --compress-debug-sections=zlib\n"})}),"\n",(0,r.jsx)(n.p,{children:"This reduces the size of the executable from 19MB to 8.9MB. Your compression ratio may vary. This compression has a performance impact on many debuggers but is usually a fraction of the cost compared to actually parsing the debug information."}),"\n",(0,r.jsx)(n.h3,{id:"debug-fission",children:"Debug Fission"}),"\n",(0,r.jsxs)(n.p,{children:["DWARF 5 and recent compilers support several extensions referred to as split dwarf or debug fission. For more details, check ",(0,r.jsx)(n.a,{href:"https://gcc.gnu.org/wiki/DebugFission",children:"https://gcc.gnu.org"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"tools",children:"Tools"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"dwz"})," tool can be used to further reduce the size of your debug information. It relies on uncompressed debug information and works by replacing DWARF information with an equivalent smaller representation where possible. Below, we invoke ",(0,r.jsx)(n.code,{children:"dwz"})," on the aforementioned ",(0,r.jsx)(n.code,{children:"coronerd"})," executable:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ dwz coronerd\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This reduces the size of the ",(0,r.jsx)(n.code,{children:"coronerd"})," file from 19MB to 16MB. This can be combined with compressed debug sections:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ objcopy coronerd --compress-debug-sections=zlib\n"})}),"\n",(0,r.jsx)(n.p,{children:"This results in an executable size of 7.6MB, down from 8.9MB."}),"\n",(0,r.jsxs)(n.p,{children:["It is also possible to utilize ",(0,r.jsx)(n.code,{children:"dwz"})," on multiple files to achieve significantly higher compression ratios with stand-alone debug files."]}),"\n",(0,r.jsx)(n.h3,{id:"stand-alone-debug-files",children:"Stand-Alone Debug Files"}),"\n",(0,r.jsxs)(n.p,{children:["On Linux systems or systems with GNU strip, pass the ",(0,r.jsx)(n.code,{children:"--only-keep-debug"})," flag to strip and use objcopy to add a debug link to the stand-alone file. This allows you to distribute your debug information independently of your executable. This has no impact on performance. Check the ",(0,r.jsx)(n.a,{href:"https://linux.die.net/man/1/strip",children:"Linux page"})," for more information."]}),"\n",(0,r.jsx)(n.h3,{id:"removing-debug-information",children:"Removing Debug Information"}),"\n",(0,r.jsxs)(n.p,{children:["Depending on your requirements, you may not need all of the debug information. For example, if you only require accurate unwinding, you can retain only ",(0,r.jsx)(n.code,{children:".debug_frame"})," and ",(0,r.jsx)(n.code,{children:".debug_line"}),". The following ",(0,r.jsx)(n.code,{children:"objcopy"})," invocation removes debug information unrelated to unwinding and source-code locations from the ",(0,r.jsx)(n.code,{children:"coronerd"})," executable:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ objcopy -R .debug_info -R .debug_abbrev -R .debug_aranges -R .debug_ranges -R .debug_loc -R .debug_str coronerd\n"})}),"\n",(0,r.jsx)(n.p,{children:"This results in a 4.6MB executable, down from 19MB. The debugger can still unwind correctly, but some inline functions and function names may be missing (specifically, if no symbol is omitted for the function). However, the source code locations themselves are accurate."}),"\n",(0,r.jsx)(n.p,{children:"You can utilize the other techniques mentioned in this article to further compress your debug information."}),"\n",(0,r.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://dwarfstd.org/index.html",children:"DWARF Debugging Standard"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"http://www.dwarfstd.org/doc/Debugging%20using%20DWARF-2012.pdf",children:"Introduction to the DWARF Debugging Format"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},19365:(e,n,o)=>{o.d(n,{A:()=>s});o(96540);var r=o(18215);const i={tabItem:"tabItem_Ymn6"};var t=o(74848);function s(e){let{children:n,hidden:o,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:o,children:n})}},11470:(e,n,o)=>{o.d(n,{A:()=>w});var r=o(96540),i=o(18215),t=o(23104),s=o(56347),a=o(205),c=o(57485),l=o(31682),d=o(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:o}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:o,attributes:r,default:i}}=e;return{value:n,label:o,attributes:r,default:i}}))}(o);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function m(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:o}=e;const i=(0,s.W6)(),t=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,c.aZ)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})}),[t,i])]}function f(e){const{defaultValue:n,queryString:o=!1,groupId:i}=e,t=h(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=o.find((e=>e.default))??o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[l,u]=p({queryString:o,groupId:i}),[f,g]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,t]=(0,d.Dv)(o);return[i,(0,r.useCallback)((e=>{o&&t.set(e)}),[o,t])]}({groupId:i}),b=(()=>{const e=l??f;return m({value:e,tabValues:t})?e:null})();(0,a.A)((()=>{b&&c(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,t]),tabValues:t}}var g=o(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=o(74848);function j(e){let{className:n,block:o,selectedValue:r,selectValue:s,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,t.a_)(),d=e=>{const n=e.currentTarget,o=c.indexOf(n),i=a[o].value;i!==r&&(l(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=c.indexOf(e.currentTarget)+1;n=c[o]??c[0];break}case"ArrowLeft":{const o=c.indexOf(e.currentTarget)-1;n=c[o]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":o},n),children:a.map((e=>{let{value:n,label:o,attributes:t}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...t,className:(0,i.A)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":r===n}),children:o??n},n)}))})}function y(e){let{lazy:n,children:o,selectedValue:i}=e;const t=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function w(e){const n=(0,g.A)();return(0,x.jsx)(v,{...e,children:u(e.children)},String(n))}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var r=o(96540);const i={},t=r.createContext(i);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);