"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[16894],{12749:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=t(74848),i=t(28453),s=t(86025);const a={id:"multipart-upload",title:"POST: Multipart Upload",sidebar_label:"POST: Multipart Upload",keywords:["api-testing","io-components","multipart-upload","upload","post"]},r=void 0,l={id:"api-testing/on-prem/io-components/multipart-upload",title:"POST: Multipart Upload",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/io-components/multipart-upload.md",sourceDirName:"api-testing/on-prem/io-components",slug:"/api-testing/on-prem/io-components/multipart-upload",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/io-components/multipart-upload",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/io-components/multipart-upload.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"multipart-upload",title:"POST: Multipart Upload",sidebar_label:"POST: Multipart Upload",keywords:["api-testing","io-components","multipart-upload","upload","post"]},sidebar:"apif",previous:{title:"Databases \u2013 JDBC (direct)",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/io-components/jdbc"},next:{title:"Update Input",permalink:"/sauce-docs/pr-preview/pr-2901/api-testing/on-prem/how-to/update-input"}},c={},d=[{value:"Mounting a Volume",id:"mounting-a-volume",level:2},{value:"Make a Multipart POST Call",id:"make-a-multipart-post-call",level:2}];function p(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Head:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Legacy Documentation"}),(0,o.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,o.jsx)(n.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n","\n",(0,o.jsxs)(n.p,{children:["The following instructions are to show how to make a ",(0,o.jsx)(n.code,{children:"POST"})," call with an entire file included in the data."]}),"\n",(0,o.jsx)(n.admonition,{title:"On-Premises Only!",type:"warning",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["This feature is ",(0,o.jsx)(n.strong,{children:"only available on-premises"})," as of API Fortress version 20.2.0."]}),"\n",(0,o.jsxs)(n.li,{children:["This feature also requires that you update the ",(0,o.jsx)(n.code,{children:"remotedownloadagent"})," to the latest version as well."]}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"mounting-a-volume",children:"Mounting a Volume"}),"\n",(0,o.jsxs)(n.p,{children:["For multipart, API Fortress will look for files in the ",(0,o.jsx)(n.code,{children:"/data"})," directory, so you'll have to mount a volume to the ",(0,o.jsx)(n.code,{children:"/data"})," directory. For example, if you're using ",(0,o.jsx)(n.code,{children:"docker-compose"}),", it's done like this:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Navigate to the ",(0,o.jsx)(n.code,{children:"/core/"})," directory."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Stop ",(0,o.jsx)(n.code,{children:"apifortress"})," by issuing the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo docker-compose stop apifortress\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Open the ",(0,o.jsx)(n.code,{children:"docker-compose.yml"})," file."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["There is a section labeled \u201c#APIFORTRESS DASHBOARD\u201d, at the bottom of this section there will be a ",(0,o.jsx)(n.code,{children:"volumes"})," section."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Here you will see ",(0,o.jsx)(n.code,{children:"# - ./data:/data"})," you can uncomment this line by getting rid of the ",(0,o.jsx)(n.code,{children:"#"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["This will create a folder called ",(0,o.jsx)(n.code,{children:"data"})," in the ",(0,o.jsx)(n.code,{children:"/core/"})," directory."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"volumes:\n- ./tomcat_conf/conf:/usr/local/tomcat/conf\n# - ./bin:/usr/local/tomcat/bin\n- ./data:/data\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Now start the ",(0,o.jsx)(n.code,{children:"apifortress"})," service again by issuing the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo docker-compose up -d apifortress\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"make-a-multipart-post-call",children:"Make a Multipart POST Call"}),"\n",(0,o.jsxs)(n.p,{children:["Now that we have a directory mounted we can make the ",(0,o.jsx)(n.code,{children:"POST"})," call using a file from the ",(0,o.jsx)(n.code,{children:"/data/"})," folder."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["You can add a \u201cpost parameter\u201d to your ",(0,o.jsx)(n.code,{children:"POST"})," call to load the file into."]}),"\n",(0,o.jsxs)(n.li,{children:["Give the post parameter a name and craft the value using the following notation: ",(0,o.jsx)(n.code,{children:"@file:filename.extension"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["If the name matches a file in the ",(0,o.jsx)(n.code,{children:"/data/"})," directory, then the whole form becomes a ",(0,o.jsx)(n.code,{children:"form-data"})," type, and the file will be uploaded as a multipart."]}),"\n"]}),"\n",(0,o.jsx)("img",{src:(0,s.A)("img/api-fortress/2020/09/Screen-Shot-2020-09-11-at-10.51.47-AM.png"),alt:"screenshot.jpg"})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var o=t(96540);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);