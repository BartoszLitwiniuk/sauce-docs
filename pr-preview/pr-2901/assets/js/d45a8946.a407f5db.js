"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[94562],{86439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=a(74848),i=a(28453),n=(a(11470),a(19365),a(86025));const s={id:"deduplication",title:"Deduplication",sidebar_label:"Deduplication",description:"This guide provides a brief overview of the advantages and internals of the deduplication feature."},o=void 0,l={id:"error-reporting/project-setup/deduplication",title:"Deduplication",description:"This guide provides a brief overview of the advantages and internals of the deduplication feature.",source:"@site/docs/error-reporting/project-setup/deduplication.md",sourceDirName:"error-reporting/project-setup",slug:"/error-reporting/project-setup/deduplication",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/project-setup/deduplication",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/project-setup/deduplication.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1692688198e3,frontMatter:{id:"deduplication",title:"Deduplication",sidebar_label:"Deduplication",description:"This guide provides a brief overview of the advantages and internals of the deduplication feature."},sidebar:"backtrace",previous:{title:"Indexing Attributes",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/project-setup/attributes"},next:{title:"Customizing Deduplication Rules",permalink:"/sauce-docs/pr-preview/pr-2901/error-reporting/project-setup/deduplication-rules"}},c={},u=[{value:"Capabilities",id:"capabilities",level:2},{value:"Backtrace Versus Conventional Deduplication",id:"backtrace-versus-conventional-deduplication",level:2},{value:"Group By First Application Frame",id:"group-by-first-application-frame",level:3},{value:"Group By Callstack",id:"group-by-callstack",level:3},{value:"Group By Error Type or Exception Message",id:"group-by-error-type-or-exception-message",level:3},{value:"Signature Lists",id:"signature-lists",level:3},{value:"How Are Rules Improved?",id:"how-are-rules-improved",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Backtrace automatically groups errors and crashes together according to similarity. This grouping allows you to effectively determine which bugs have the highest impact on users, revenue and other important factors. This guide provides a brief overview of the advantages and internals of the deduplication feature."}),"\n",(0,r.jsx)(t.p,{children:"Depending on your application, crash reports may come in from a few to many thousands a day. Triage and prioritization relies on determining which users are affected by a crash as well as the potential ramifications. Backtrace solves both of these problems through deduplication and classification."}),"\n",(0,r.jsx)(t.p,{children:"Backtrace automatically groups crashes using a heuristic algorithm (built on a state machine) so that identical crashes are matched together. By default, this grouping allows you to determine the number of impacted hosts or users. With the help of attributes, it is possible to attach other metadata in order to triage by such things as application load, number of impacted versions and more."}),"\n",(0,r.jsx)(t.p,{children:'The deduplication mechanism itself greatly reduces the surface area of bugs that engineers have to comb through for purposes of triage. Below are some examples from production workloads ranging from operating system kernels to real-time servers. The crashes column represents the raw number of crashes and the "Deduplicated Crashes" column represents the number of deduplicated crashes with Backtrace.'}),"\n",(0,r.jsx)("img",{src:(0,n.A)("img/error-reporting/project-settings/deduplicated-crashes.png"),alt:""}),"\n",(0,r.jsx)(t.p,{children:"Deduplication is only one facet of triage. If there is a memory corruption bug or security hole, then a bug may be a ticking time bomb that will eventually manifest as a major denial of service. Backtrace analyzes the memory and executable code of a crash to classify the fault."}),"\n",(0,r.jsx)(t.p,{children:"Other systems rely on simplistic callstack-based grouping algorithms for determining the uniqueness of a fault. These systems are either too fine-grained or too coarse-grained. If deduplication is too fine-grained, the same bug impacting a large number of users may manifest as many unique bugs impacting a small set of users. If deduplication is too coarse-grained, then the impact of bugs will be inflated leading to incorrect prioritization."}),"\n",(0,r.jsx)(t.p,{children:"Core to the Backtrace deduplication algorithm is a state machine that is driven by a domain-specific language that allows for transformations of an input callstack for the purposes of both pretty-printing and signature generation. These callstacks are different, one is optimized for human-readability while the other is optimized for grouping purposes. Enterprise customers are able to modify these rule sets for their applications. Otherwise, both cloud and enterprise customers benefit from frequent updates of these rules to better improve out-of-the-box grouping capabilities."}),"\n",(0,r.jsx)(t.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,r.jsx)(t.p,{children:"Backtrace uses a dynamic system that intelligently determines which portions of the callstack should be used, ignored and the level of information to be used for any given frame (line numbers, shared library, etc.)."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Library, platform, error handling functions and other boiler-plate are ignored or short-circuit signature generation. This ensures the same bugs are grouped together according to root-cause without being affected by run-time non-determinism unrelated to the crash."}),"\n",(0,r.jsx)(t.li,{children:"Compiler-generated names are normalized. This ensures that the same bugs are grouped together across compilation."}),"\n",(0,r.jsx)(t.li,{children:"Functions subject to dynamic dispatch on platform features are normalized. This ensures bugs are grouped accurately even in the presence of different processor features."}),"\n",(0,r.jsx)(t.li,{children:"Event dispatchers are normalized. This ensures that event-based systems or systems making use of advanced C++ features are grouped accurately according to the deterministic portions of the callstack related to the crash."}),"\n",(0,r.jsx)(t.li,{children:"Platform specialization. Backtrace includes advanced rulesets for C++, C, Linux, Windows, Mac OS and popular application frameworks so that only the relevant portions of the callstack are used."}),"\n",(0,r.jsx)(t.li,{children:"Object bypass for callback-based systems. Backtrace is able to detect callback-based interfaces and appropriately ignore boiler-plate leading to callback execution."}),"\n",(0,r.jsx)(t.li,{children:"The mechanism is extremely configurable and expressive enough that a few simple rules are sufficient for new application frameworks."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"backtrace-versus-conventional-deduplication",children:"Backtrace Versus Conventional Deduplication"}),"\n",(0,r.jsx)(t.h3,{id:"group-by-first-application-frame",children:"Group By First Application Frame"}),"\n",(0,r.jsx)(t.p,{children:"Some systems will group according to the first application frame. This quickly starts to fall apart for many reasons including internal application error handling, faults in external libraries and more. More likely than not, such a system is too coarse-grained to be useful."}),"\n",(0,r.jsxs)(t.p,{children:["Take the following example for a program called ",(0,r.jsx)(t.code,{children:"program.exe"}),". The callstack of the crashing thread is ",(0,r.jsx)(t.code,{children:"abort \u2192 application_abort \u2192 a \u2192 b"})," where ",(0,r.jsx)(t.code,{children:"application_abort"})," is the first application frame. Competing systems will group by ",(0,r.jsx)(t.code,{children:"application_abort"}),". This function is invoked in almost all cases where the application is explicitly aborted, leading to grossly ineffective deduplication."]}),"\n",(0,r.jsx)(t.p,{children:"This mechanism breaks down for any commonly-used functions, not just error handling functions. For example, let's say a bug was introduced that leads to a fault in a commonly called utility function. These systems would group these faults by the utility function rather than the caller."}),"\n",(0,r.jsx)(t.p,{children:"Last but not least, these mechanisms disable the ability of doing callstack-analysis for non-deterministic bugs. There may be hundreds of different callstacks for the same bug. Backtrace retains relevant portions of the stack which enables advanced statistical analysis and visualizations on faulting callstacks."}),"\n",(0,r.jsx)(t.p,{children:"Backtrace intelligently determines which frames to use to avoid situations like this."}),"\n",(0,r.jsx)(t.h3,{id:"group-by-callstack",children:"Group By Callstack"}),"\n",(0,r.jsx)(t.p,{children:"On the other end of the spectrum is pure callstack-based grouping. This mechanism tends to be too fine-grained, leading to inaccurate aggregation of faults. Modern applications have a high degree of non-determinism both in their surrounding platform libraries as well as application code. In an event-based system, the same function could be invoked by an event loop processor in many different ways. If there is a hang condition, there are many different locations the hang may manifest."}),"\n",(0,r.jsx)(t.p,{children:"Some systems attempt to improve on this through restrictions such as only considering application frames. This also starts to break down as crucial application libraries end up being completely ignored for the purposes of fault aggregation."}),"\n",(0,r.jsx)(t.p,{children:"Backtrace intelligently determines which frames to use to avoid situations like this."}),"\n",(0,r.jsx)(t.h3,{id:"group-by-error-type-or-exception-message",children:"Group By Error Type or Exception Message"}),"\n",(0,r.jsx)(t.p,{children:'Some systems will group simply by the type of error condition or an exception message. It goes without saying that this is insufficient for a vast majority of real-world faults. An exception message may be as generic as "failed to complete user action". Since the grouping is too coarse-grained, triage and prioritization is ineffective on these systems.'}),"\n",(0,r.jsx)(t.h3,{id:"signature-lists",children:"Signature Lists"}),"\n",(0,r.jsx)(t.p,{children:"Other systems approach this problem by using callstack-based grouping with giant lists of functions to include or exclude for the purposes of deduplication. Unfortunately, these systems are not flexible enough to handle compiler-generated names, non-deterministic callback interfaces and more. Backtrace has flexibility built in that allows a few simple rules that will fit a majority of use-cases without resorting to giant lists that require frequent maintenance."}),"\n",(0,r.jsx)(t.h3,{id:"how-are-rules-improved",children:"How Are Rules Improved?"}),"\n",(0,r.jsx)(t.p,{children:"The system has generic rules that have been extrapolated from hundreds of thousands of crashes from complex real-world applications such as highly-multithreaded servers with event dispatch (50000+ threads) and complex desktop applications such as Firefox and Chrome. Whenever a new customer is on-boarded, our engineers will perform anonymized statistical analysis on faults so we constantly improve the core deduplication algorithm and surrounding rulesets."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var r=a(18215);const i={tabItem:"tabItem_Ymn6"};var n=a(74848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>k});var r=a(96540),i=a(18215),n=a(23104),s=a(56347),o=a(205),l=a(57485),c=a(31682),u=a(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:i}}=e;return{value:t,label:a,attributes:r,default:i}}))}(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const i=(0,s.W6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(i.location.search);t.set(n,e),i.replace({...i.location,search:t.toString()})}),[n,i])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:i}=e,n=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[c,d]=m({queryString:a,groupId:i}),[f,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,n]=(0,u.Dv)(a);return[i,(0,r.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:i}),b=(()=>{const e=c??f;return h({value:e,tabValues:n})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,n]),tabValues:n}}var g=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(74848);function v(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),i=o[a].value;i!==r&&(c(t),s(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...n,className:(0,i.A)("tabs__item",b.tabItem,n?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:i}=e;const n=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,i.A)("tabs-container",b.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(x,{...e,...t})]})}function k(e){const t=(0,g.A)();return(0,y.jsx)(w,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var r=a(96540);const i={},n=r.createContext(i);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);