"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[50848],{52024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=n(74848),r=n(28453),a=n(86025);n(11470),n(19365);const i={id:"github-actions",title:"saucectl with GitHub Actions",sidebar_label:"GitHub Actions"},l=void 0,c={id:"dev/cli/saucectl/usage/ci/github-actions",title:"saucectl with GitHub Actions",description:"These examples can apply to virtually any GitHub deployment, provided that you already have some existing automated tests, and are either the maintainer or an admin of the target repository.",source:"@site/docs/dev/cli/saucectl/usage/ci/github-actions.md",sourceDirName:"dev/cli/saucectl/usage/ci",slug:"/dev/cli/saucectl/usage/ci/github-actions",permalink:"/dev/cli/saucectl/usage/ci/github-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/dev/cli/saucectl/usage/ci/github-actions.md",tags:[],version:"current",lastUpdatedBy:"Tian Feng",lastUpdatedAt:170846651e4,frontMatter:{id:"github-actions",title:"saucectl with GitHub Actions",sidebar_label:"GitHub Actions"},sidebar:"dev",previous:{title:"CircleCI",permalink:"/dev/cli/saucectl/usage/ci/circleci"},next:{title:"GitLab",permalink:"/dev/cli/saucectl/usage/ci/gitlab"}},o={},u=[{value:"What You&#39;ll Need",id:"what-youll-need",level:2},{value:"Create GitHub Secrets",id:"create-github-secrets",level:2},{value:"Configure the GitHub Action",id:"configure-the-github-action",level:2},{value:"Create the Test Job",id:"create-the-test-job",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"These examples can apply to virtually any GitHub deployment, provided that you already have some existing automated tests, and are either the maintainer or an admin of the target repository."}),"\n",(0,s.jsx)(t.h2,{id:"what-youll-need",children:"What You'll Need"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A Sauce Labs account (",(0,s.jsx)(t.a,{href:"https://accounts.saucelabs.com/am/XUI/#login/",children:"Log in"})," or sign up for a ",(0,s.jsx)(t.a,{href:"https://saucelabs.com/sign-up",children:"free trial license"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["Your Sauce Labs ",(0,s.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Username and Access Key"})]}),"\n",(0,s.jsxs)(t.li,{children:["A ",(0,s.jsx)(t.a,{href:"https://github.com/join",children:"GitHub Account"})]}),"\n",(0,s.jsxs)(t.li,{children:["The following permissions in GitHub:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"ability to create and manage workflows"}),"\n",(0,s.jsxs)(t.li,{children:["ability to create and store ",(0,s.jsx)(t.a,{href:"https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets",children:"GitHub secrets"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"create-github-secrets",children:"Create GitHub Secrets"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Export your ",(0,s.jsx)(t.a,{href:"https://app.saucelabs.com/user-settings",children:"Sauce Labs account credentials"})," and store them as GitHub Secrets."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Follow the GitHub Docs to ",(0,s.jsx)(t.a,{href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository",children:"create the secrets for your repository"}),", and add the following:"]}),"\n",(0,s.jsx)(t.p,{children:"Your Sauce Username:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Name: ",(0,s.jsx)(t.code,{children:"SAUCE_USERNAME"})]}),"\n",(0,s.jsx)(t.li,{children:"Value: 'your-sauce-username'"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Your Sauce Access Key:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Name: ",(0,s.jsx)(t.code,{children:"SAUCE_ACCESS_KEY"})]}),"\n",(0,s.jsx)(t.li,{children:"Value: 'your-sauce-access-key'"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"configure-the-github-action",children:"Configure the GitHub Action"}),"\n",(0,s.jsxs)(t.p,{children:["In your root project directory, create the following directory tree: ",(0,s.jsx)(t.code,{children:".github/workflows"}),". In the ",(0,s.jsx)(t.code,{children:"workflows"})," directory create a file called ",(0,s.jsx)(t.code,{children:"actions.yml"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Add the following to the top of your file:"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Setting ",(0,s.jsx)(t.code,{children:"env"})," at the top of the file enables it globally in this workflow, so all jobs have access to these variables."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"env:\n  SAUCE_USERNAME: ${{secrets.SAUCE_USERNAME}}\n  SAUCE_ACCESS_KEY: ${{secrets.SAUCE_ACCESS_KEY}}\n  GITHUB_TOKEN: ${{ github.token }}\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/saucelabs/saucectl-cypress-example/blob/main/.github/workflows/test-v1.yml",children:"See full example on GitHub"})}),"\n",(0,s.jsx)(t.h2,{id:"create-the-test-job",children:"Create the Test Job"}),"\n",(0,s.jsxs)(t.p,{children:["In the examples below, we illustrate how ",(0,s.jsx)(t.code,{children:"saucectl"})," executes tests on Sauce Cloud (i.e., Sauce Labs infrastructure).\nYou will likely require a tunnel back to where your app is running. A tunnel enables the remote browser to access your local network. For this, you'll need to use ",(0,s.jsx)(t.a,{href:"/secure-connections/sauce-connect",children:"Sauce Connect"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["For more detailed information on setting event-driven actions and jobs, visit the ",(0,s.jsx)(t.a,{href:"https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#the-components-of-github-actions",children:"GitHub Action documentation"}),"."]})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"jobs:\n  main:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v4\n\n      - name: Saucectl RUN\n        uses: saucelabs/saucectl-run-action@v4\n        with:\n          working-directory: v1\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/saucelabs/saucectl-cypress-example/blob/main/.github/workflows/test-v1.yml",children:"See full example on GitHub"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["You can reference our example workflows ",(0,s.jsxs)(t.a,{href:"https://github.com/saucelabs/saucectl-cypress-example/tree/main/.github/workflows",children:["in the ",(0,s.jsx)(t.code,{children:"saucectl"})," Cypress example repository"]}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["Now when you commit these files, GitHub will detect the new workflow actions and launch ",(0,s.jsx)(t.code,{children:"saucectl"})," to run your tests."]}),"\n",(0,s.jsx)(t.p,{children:"To see the output:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Log in to GitHub."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Navigate to your repository page."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.strong,{children:"Actions"}),"."]}),"\n",(0,s.jsx)("img",{src:(0,a.A)("img/stt/github-actions.png"),alt:"GitHub Actions",width:"500"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Your output may look something like this:"}),"\n",(0,s.jsx)("img",{src:(0,a.A)("img/stt/github-workflow.png"),alt:"GitHub Workflow",width:"800"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(18215);const r={tabItem:"tabItem_Ymn6"};var a=n(74848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,i),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var s=n(96540),r=n(18215),a=n(23104),i=n(56347),l=n(205),c=n(57485),o=n(31682),u=n(89466);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,o.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[o,d]=b({queryString:n,groupId:r}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=o??m;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(74848);function j(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.a_)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),r=l[n].value;r!==s&&(o(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...e,...t}),(0,x.jsx)(y,{...e,...t})]})}function w(e){const t=(0,f.A)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);