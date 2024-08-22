"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[49306],{33424:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(74848),a=t(28453);t(11470),t(19365),t(86025);const s={id:"breakpad",title:"Integrating Breakpad",sidebar_label:"Breakpad",description:"Integrate Breakpad in your Backtrace project."},o=void 0,i={id:"error-reporting/platform-integrations/breakpad",title:"Integrating Breakpad",description:"Integrate Breakpad in your Backtrace project.",source:"@site/docs/error-reporting/platform-integrations/breakpad.md",sourceDirName:"error-reporting/platform-integrations",slug:"/error-reporting/platform-integrations/breakpad",permalink:"/sauce-docs/pr-preview/pr-2899/error-reporting/platform-integrations/breakpad",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/error-reporting/platform-integrations/breakpad.md",tags:[],version:"current",lastUpdatedBy:"Loredana",lastUpdatedAt:1692688198e3,frontMatter:{id:"breakpad",title:"Integrating Breakpad",sidebar_label:"Breakpad",description:"Integrate Breakpad in your Backtrace project."},sidebar:"backtrace",previous:{title:"Visual Studio",permalink:"/sauce-docs/pr-preview/pr-2899/error-reporting/platform-integrations/visual-studio"},next:{title:"HTTP Submission",permalink:"/sauce-docs/pr-preview/pr-2899/error-reporting/platform-integrations/http-submission"}},l={},c=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Initial Integration",id:"initial-integration",level:2},{value:"Upload Methods",id:"upload-methods",level:2},{value:"Linux",id:"linux",level:3},{value:"Mac OS",id:"mac-os",level:3},{value:"Windows",id:"windows",level:3},{value:"Settings",id:"settings",level:2},{value:"URL",id:"url",level:3},{value:"Attributes",id:"attributes",level:3},{value:"File Path",id:"file-path",level:3},{value:"Example",id:"example",level:3},{value:"Manage Symbols",id:"manage-symbols",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Breakpad is an open source library initially developed by Google for cross-platform C/C++ crash reporting. It is used in popular software such as Google Chrome and by companies such as Valve. For existing users of Breakpad, Backtrace has plug-and-play support."}),"\n",(0,n.jsx)(r.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["A Backtrace account (",(0,n.jsx)(r.a,{href:"https://backtrace.io/login",children:"log in"}),"\xa0or sign up for a\xa0",(0,n.jsx)(r.a,{href:"https://backtrace.io/sign-up",children:"free trial license"}),")."]}),"\n",(0,n.jsxs)(r.li,{children:["Your subdomain name (used to connect to your Backtrace instance). For example, ",(0,n.jsx)(r.code,{children:"https://example-subdomain.sp.backtrace.io"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["A Backtrace project and a ",(0,n.jsx)(r.a,{href:"/error-reporting/project-setup/submission-url",children:"submission token"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"initial-integration",children:"Initial Integration"}),"\n",(0,n.jsxs)(r.p,{children:["If you have yet to integrate Breakpad into your application, we recommend incorporating ",(0,n.jsx)(r.a,{href:"/error-reporting/platform-integrations/crashpad",children:"Crashpad"}),". Crashpad is the successor to Breakpad, with many improvements and up-to-date integration instructions.\nYou can check ",(0,n.jsx)(r.a,{href:"https://chromium.googlesource.com/breakpad/breakpad/+/master/docs/getting_started_with_breakpad.md#Integration-overview",children:"Breakpad's official integration instructions"})," for more information. If you would like additional assistance, you can reach out to us at ",(0,n.jsx)(r.a,{href:"mailto:support@saucelabs.com",children:"support@saucelabs.com"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"upload-methods",children:"Upload Methods"}),"\n",(0,n.jsxs)(r.p,{children:["The rest of this guide assumes that you have Breakpad integrated into your application and can generate minidump files. See ",(0,n.jsx)(r.a,{href:"https://chromium.googlesource.com/breakpad/breakpad/+/master/docs/getting_started_with_breakpad.md#Integration-overview",children:"Breakpad's official integration instructions"})," to get to this point."]}),"\n",(0,n.jsx)(r.p,{children:"Uploading Breakpad crash reports in your application differs across operating systems."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#linux",children:"Linux"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#mac-os",children:"Mac OS"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#windows",children:"Windows"})}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Have your method to upload generated minidumps? Skip ahead to Upload Settings."}),"\n",(0,n.jsx)(r.h3,{id:"linux",children:"Linux"}),"\n",(0,n.jsxs)(r.p,{children:["On Linux, ",(0,n.jsx)(r.code,{children:"google_breakpad::HTTPUpload::SendRequest()"})," can be used to upload generated minidumps to Backtrace. This method's declaration is in ",(0,n.jsx)(r.code,{children:"src/common/linux/http_upload.h"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Other convenience methods are provided for Linux users of Breakpad, but ",(0,n.jsx)(r.code,{children:"HTTPUpload::SendRequest()"})," is recommended for use with Backtrace."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"  static bool SendRequest(const string &url,\n     const map\n"})}),"\n",(0,n.jsx)(r.h3,{id:"mac-os",children:"Mac OS"}),"\n",(0,n.jsxs)(r.p,{children:["We highly recommend using ",(0,n.jsx)(r.a,{href:"/error-reporting/platform-integrations/crashpad",children:"Crashpad"})," for crash reporting on Mac OS."]}),"\n",(0,n.jsxs)(r.p,{children:["On Mac OS, ",(0,n.jsx)(r.code,{children:"HTTPMultipartUpload()"})," interface is provided for Objective-C users in:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-objective-c",children:"src/common/mac/HTTPUploadMultipartUpload.m\n\n@interface HTTPMultipartUpload : NSObject {\n  @protected\n  NSURL *url_;                  // Submission URL (STRONG)\n  NSDictionary *parameters_;    // Crash attributes (STRONG)\n  NSMutableDictionary *files_;  // Files to send (STRONG)\n  NSString *boundary_;          // The boundary string (STRONG)\n  NSHTTPURLResponse *response_; // Server reponse (STRONG)\n}\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Otherwise, ",(0,n.jsx)(r.code,{children:"google_breakpad::LaunchReporter()"})," is provided as a mechanism to launch a child process to upload the generated minidump file."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"void LaunchReporter(const char *reporter_executable_path,\n                    const char *config_file_path);\n"})}),"\n",(0,n.jsx)(r.h3,{id:"windows",children:"Windows"}),"\n",(0,n.jsxs)(r.p,{children:["On Windows, ",(0,n.jsx)(r.code,{children:"google_breakpad::HTTPUpload::SendRequest()"})," can be used to upload generated minidumps to Backtrace. The method's declaration is in ",(0,n.jsx)(r.code,{children:"src/common/windows/http_upload.h"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"static bool SendRequest(const wstring &url,\n const map\n"})}),"\n",(0,n.jsx)(r.p,{children:"It sends the parameters and files to the specified URL as a multipart POST request. Each key in |files| is the name of the file part of the request (that is, it corresponds to the name=attribute on an ``)."}),"\n",(0,n.jsx)(r.p,{children:"Parameter names must contain only printable ASCII characters and may not have a quote character. Only HTTP(S) URLs are currently supported. Returns true on success. If the request is successful and response_body is non-NULL, the response body will be returned in response_body. If response_code is non-NULL, it will be set to the HTTP response code received (or 0 if the request failed before getting an HTTP response)."}),"\n",(0,n.jsx)(r.h2,{id:"settings",children:"Settings"}),"\n",(0,n.jsx)(r.p,{children:"Once you have a method to upload generated minidumps, you can configure your upload settings to send data to Backtrace."}),"\n",(0,n.jsx)(r.h3,{id:"url",children:"URL"}),"\n",(0,n.jsxs)(r.p,{children:["Change your call's ",(0,n.jsx)(r.code,{children:"url"})," parameter to point to your server dump submission port (labeled as ",(0,n.jsx)(r.code,{children:"http/writer"})," in the listener configuration pane). Preferably, you should use the SSL-enabled port. If Backtrace is hosting your instance, the default port will be 6098."]}),"\n",(0,n.jsx)(r.p,{children:"The URL parameter for the methods above follows the format:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"<protocol>://<instance_url>:<port>/post?format=minidump&token=<project_token>\n"})}),"\n",(0,n.jsxs)(r.p,{children:["For example, if Backtrace is hosting your instance at ",(0,n.jsx)(r.code,{children:"team.sp.backtrace.io"})," and your project token is ",(0,n.jsx)(r.code,{children:"7c102b2432f6c57eb879db2008820a88031fefc08d8e7faccabc23a917e7db08"})," then set the ",(0,n.jsx)(r.code,{children:"url"})," argument to:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"https://team.sp.backtrace.io:6098/post?format=minidump&token=7c102b2432f6c57eb879db2008820a88031fefc08d8e7faccabc23a917e7db08\n"})}),"\n",(0,n.jsx)(r.h3,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"parameters"})," parameter specifies a set of key-value pairs that map directly to Backtrace's flexible key-value attribute system. You can use Backtrace's key-value attribute system in searches, which can be represented visually in graphical form."]}),"\n",(0,n.jsx)(r.p,{children:"Some example attributes are:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"application"}),"\n",(0,n.jsx)(r.li,{children:"version"}),"\n",(0,n.jsx)(r.li,{children:"client_id/hostname"}),"\n",(0,n.jsx)(r.li,{children:"resolution"}),"\n",(0,n.jsx)(r.li,{children:"operating_system"}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Parameters must contain only printable ASCII characters and may not contain a quote ",(0,n.jsx)(r.code,{children:'"'})," character. To have your attributes searchable by the Backtrace object store, refer to ",(0,n.jsx)(r.a,{href:"/error-reporting/project-setup/attributes/",children:"the product guide"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"The methods above all use a multipart POST request. Parameters are pushed as input forms."}),"\n",(0,n.jsx)(r.h3,{id:"file-path",children:"File Path"}),"\n",(0,n.jsxs)(r.p,{children:["You can use the ",(0,n.jsx)(r.code,{children:"files"})," parameter to specify a set of names and file paths that the method will upload."]}),"\n",(0,n.jsxs)(r.p,{children:["Set the ",(0,n.jsx)(r.code,{children:"upload_file_minidump"})," key to the path of the generated minidump. The path of the generated minidump can be retrieved from ",(0,n.jsx)(r.code,{children:"google_breakpad::MinidumpDescriptor"})," parameter in your ",(0,n.jsx)(r.code,{children:"google_breakpad::ExceptionHandler()"})," callback function."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'files["upload_file_minidump"] = descriptor.path();\n'})}),"\n",(0,n.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.p,{children:"The following code example demonstrates how to upload Breakpad reports from your application on a Linux system."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:'#include <breakpad/client/linux/handler/exception_handler.h>\n#include "common/linux/http_upload.h"\n\nstatic bool\ndumpCallback(const google_breakpad::MinidumpDescriptor& descriptor,\n    void* context, bool succeeded)\n{\n\n    (void) context;\n    if (succeeded == true) {\n        std::map<string, string> parameters;\n        std::map<string, string> files;\n        std::string proxy_host;\n        std::string proxy_userpasswd;\n        std::string url("http://yourcompany.sp.backtrace.io:6097/post?format=minidump&token=57f2126dcef18bb0d2af35ec1d813f3775ee8228d1d886de522b2aedceff8b87");\n\n        // Add any attributes to the parameters map.\n        // Note that several attributes are automatically extracted.\n        parameters["product_name"] = "foo";\n        parameters["version"] = "0.1.0";\n        files["upload_file_minidump"] = descriptor.path();\n\n        std::string response, error;\n        bool success = HTTPUpload::SendRequest(url,\n                                               parameters,\n                                               files,\n                                               proxy_host,\n                                               proxy_userpasswd,\n                                               "",\n                                               &response,\n                                               NULL,\n                                               &error);\n    }\n\n    return succeeded;\n}\n'})}),"\n",(0,n.jsx)(r.h2,{id:"manage-symbols",children:"Manage Symbols"}),"\n",(0,n.jsx)(r.p,{children:"You must upload symbols to have Backtrace determine the source-code mapping of incoming crashes, including source file and line number. For Backtrace to effectively group and analyze your incoming crashes, you must provide application debug symbols."}),"\n",(0,n.jsxs)(r.p,{children:["To learn more about how to upload and manage symbols with Backtrace, see ",(0,n.jsx)(r.a,{href:"/error-reporting/project-setup/symbolication/",children:"Symbolication"}),"."]})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>o});t(96540);var n=t(18215);const a={tabItem:"tabItem_Ymn6"};var s=t(74848);function o(e){let{children:r,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:t,children:r})}},11470:(e,r,t)=>{t.d(r,{A:()=>k});var n=t(96540),a=t(18215),s=t(23104),o=t(56347),i=t(205),l=t(57485),c=t(31682),d=t(89466);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,c.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const a=(0,o.W6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[c,u]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,d.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function j(e){let{className:r,block:t,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const r=e.currentTarget,t=l.indexOf(r),a=i[t].value;a!==n&&(c(r),o(a))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...e,...r}),(0,x.jsx)(v,{...e,...r})]})}function k(e){const r=(0,b.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>i});var n=t(96540);const a={},s=n.createContext(a);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);