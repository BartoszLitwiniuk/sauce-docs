"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[94251],{99516:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(74848),r=a(28453),s=a(86025);a(11470),a(19365);const l={id:"gitlab",title:"Gitlab",sidebar_label:"Gitlab"},o=void 0,i={id:"testfairy/ci-tools/gitlab",title:"Gitlab",description:"To automatically deply your Android or iOS Apps to TestFairy by using GitLab, follow the steps below:",source:"@site/docs/testfairy/ci-tools/gitlab.md",sourceDirName:"testfairy/ci-tools",slug:"/testfairy/ci-tools/gitlab",permalink:"/testfairy/ci-tools/gitlab",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/testfairy/ci-tools/gitlab.md",tags:[],version:"current",lastUpdatedBy:"Laura Thomas",lastUpdatedAt:1688692121e3,frontMatter:{id:"gitlab",title:"Gitlab",sidebar_label:"Gitlab"},sidebar:"docs",previous:{title:"Fastlane",permalink:"/testfairy/ci-tools/fastlane"},next:{title:"MS App Center",permalink:"/testfairy/ci-tools/ms-app-ctr"}},u={},c=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["To automatically deply your Android or iOS Apps to ",(0,n.jsx)(t.a,{href:"https://www.testfairy.com/",children:"TestFairy"})," by using GitLab, follow the steps below:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["On the TestFairy dashboard, navigate to ",(0,n.jsx)(t.strong,{children:"Preferences"})," > ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://app.testfairy.com/settings/api-key",children:"Upload API Key"})}),"."]}),"\n",(0,n.jsx)("img",{src:(0,s.A)("/img/testfairy/ci-tools/testfairy_upload_key.png"),alt:"testfairy upload key"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Copy your API key and go to your application's project ",(0,n.jsx)(t.strong,{children:"Settings"})," > ",(0,n.jsx)(t.strong,{children:"CI/CD"})," > ",(0,n.jsx)(t.strong,{children:"Variables"})," in GitLab."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Add a variable called ",(0,n.jsx)(t.code,{children:"TESTFAIRY_API_KEY"})," to the list with the value of your ",(0,n.jsx)(t.strong,{children:"Upload API key"}),"."]}),"\n",(0,n.jsx)("img",{src:(0,s.A)("/img/testfairy/ci-tools/gitlab_secret_keys.png"),alt:"gitlab secret keys"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["To deploy, add a job to your ",(0,n.jsx)(t.code,{children:".gitlab-ci.yml"})," configuration using ",(0,n.jsx)(t.a,{href:"https://docs.fastlane.tools/getting-started/ios/beta-deployment/",children:"fastlane"})," or ",(0,n.jsx)(t.code,{children:"curl"})," (example below)."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'stages:\n- deploy\n\ndeploy:\nstage: deploy\nonly:\n- master\nscript:\n- |\n      curl \\\n      -A "GitLab CI" \\\n      -F api_key="${TESTFAIRY_API_KEY}" \\\n      -F comment="GitLab Pipeline build ${CI_COMMIT_SHA}" \\\n      -F file=@android.apk \\\n      https://upload.testfairy.com/api/upload/\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Replace the ",(0,n.jsx)(t.code,{children:"-F file=@android.apk"})," argument with a path to your APK or IPA."]})}),"\n",(0,n.jsx)(t.p,{children:"For a complete list of available options, visit the Upload API reference guide /testfairy/api-reference/upload-api."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var n=a(18215);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>A});var n=a(96540),r=a(18215),s=a(23104),l=a(56347),o=a(205),i=a(57485),u=a(31682),c=a(89466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:a,groupId:r}),[b,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),y=(()=>{const e=u??b;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=a(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(74848);function x(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),r=o[a].value;r!==n&&(u(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function v(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function A(e){const t=(0,m.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>o});var n=a(96540);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);