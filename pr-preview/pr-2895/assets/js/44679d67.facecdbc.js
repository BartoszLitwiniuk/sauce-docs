"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[18644],{420:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=i(74848),s=i(28453);const r={id:"certificate-based-mutual-ssl-tls-authentication",title:"Certificate-based (mutual) SSL/TLS Authentication",sidebar_label:"Certificate-based (mutual) SSL/TLS Authentication",keywords:["api","api-fortress","self-hosted","SSL/TLS"]},o=void 0,a={id:"api-testing/on-prem/self-hosted/certificate-based-mutual-ssl-tls-authentication",title:"Certificate-based (mutual) SSL/TLS Authentication",description:"Legacy DocumentationYou're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress &#8212; now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) &#8212; see API Testing on the Sauce Labs Cloud.",source:"@site/docs/api-testing/on-prem/self-hosted/certificate-based-mutual-ssl-tls-authentication.md",sourceDirName:"api-testing/on-prem/self-hosted",slug:"/api-testing/on-prem/self-hosted/certificate-based-mutual-ssl-tls-authentication",permalink:"/api-testing/on-prem/self-hosted/certificate-based-mutual-ssl-tls-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/api-testing/on-prem/self-hosted/certificate-based-mutual-ssl-tls-authentication.md",tags:[],version:"current",lastUpdatedBy:"Jame Tacker",lastUpdatedAt:1670984e6,frontMatter:{id:"certificate-based-mutual-ssl-tls-authentication",title:"Certificate-based (mutual) SSL/TLS Authentication",sidebar_label:"Certificate-based (mutual) SSL/TLS Authentication",keywords:["api","api-fortress","self-hosted","SSL/TLS"]},sidebar:"apif",previous:{title:"Best Practices for Disaster Recovery (Self-Hosted)",permalink:"/api-testing/on-prem/self-hosted/best-practices-for-disaster-recovery"},next:{title:"Deployment \u2013 Configure the DNS for the Mocking Service",permalink:"/api-testing/on-prem/self-hosted/deployment-configure-the-dns-for-the-mocking-service"}},c={},l=[{value:"Install the servers certificates on the downloader&#39;s trust store",id:"install-the-servers-certificates-on-the-downloaders-trust-store",level:2},{value:"Create the client-side certificate",id:"create-the-client-side-certificate",level:2},{value:"Update the configuration file",id:"update-the-configuration-file",level:2},{value:"Mandatory steps",id:"mandatory-steps",level:3}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{children:(0,n.jsx)("meta",{name:"robots",content:"noindex"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Legacy Documentation"}),(0,n.jsx)("br",{}),"You're viewing legacy documentation for API Fortress (deployed via an on-premises container). To view documentation for the new SaaS version of API Fortress \u2014 now known as Sauce Labs API Testing and Monitoring (with Sauce Connect tunnels) \u2014 see ",(0,n.jsx)(t.a,{href:"/api-testing/",children:"API Testing on the Sauce Labs Cloud"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Definition:"})," Mutual SSL authentication or certificate-based mutual authentication, or client-side SSL authentication refers to two parties authenticating each other through verifying the provided digital certificate so that both parties are assured of the others' identity"]}),"\n",(0,n.jsx)(t.p,{children:"In API Fortress, the component in charge of registering thecertificateis the downloader. If your deployment has mixed auth/unauth endpoints, we suggest you create a specific downloader for each one scenario."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"This feature is experimental and only available on a self-hosted instance."})}),"\n",(0,n.jsx)(t.h2,{id:"install-the-servers-certificates-on-the-downloaders-trust-store",children:"Install the servers certificates on the downloader's trust store"}),"\n",(0,n.jsx)(t.p,{children:"This step may be not necessary based on the nature of the certificate and implementation. If the certificate is signed by an internal CA, this step is certainly mandatory."}),"\n",(0,n.jsx)(t.p,{children:"To trust the server certificate, you will need to create a derivative image of the downloader."}),"\n",(0,n.jsx)(t.p,{children:"Dockerfile example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"FROM apifortress/remotedownloadagent:latest\nCOPY ca.crt /ca.crt\nCOPY cert.crt /cert.crt\nRUN /usr/java/latest/bin/keytool -import -trustcacerts -keystore /usr/java/latest/jre/lib/security/cacerts -storepass changeit -alias localca -import -file /ca.crt -noprompt\nRUN /usr/java/latest/bin/keytool -import -trustcacerts -keystore /usr/java/latest/jre/lib/security/cacerts -storepass changeit -alias localcrt -import -file /cert.crt -noprompt\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Where ",(0,n.jsx)(t.code,{children:"ca.crt"})," and ",(0,n.jsx)(t.code,{children:"cert.crt"})," are the certification authority certificate and the server certificate itself."]}),"\n",(0,n.jsxs)(t.p,{children:["If you're unsure of what a Dockerfile file is, please refer to the ",(0,n.jsx)(t.a,{href:"https://docs.docker.com/engine/reference/builder/",children:"Docker guide"})," or contact us."]}),"\n",(0,n.jsx)(t.p,{children:"To trigger the build of the image, simply issue:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"sudo docker build -t ssldownloader\n"})}),"\n",(0,n.jsx)(t.p,{children:'from the directory where the Dockerfile is "ssldownloader" is the name of the derivate image. You can name it whatever you want or match it to your own Docker registry.'}),"\n",(0,n.jsx)(t.h2,{id:"create-the-client-side-certificate",children:"Create the client-side certificate"}),"\n",(0,n.jsx)(t.p,{children:"Assuming you have a client certificate file and a key file, you will need to create a Java Key Store file from them (JKS)."}),"\n",(0,n.jsx)(t.p,{children:"Steps:"}),"\n",(0,n.jsx)(t.p,{children:"a) Convert the certificate to PKCS#12 format using openssl, as in:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"openssl pkcs12 -export -in client.crt -inkey client.key -out client.p12\n"})}),"\n",(0,n.jsx)(t.p,{children:"b) Import the p12 to a JKS:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"keytool -importkeystore -srckeystore client.p12 \\\n        -srcstoretype PKCS12 \\\n        -destkeystore client.jks \\\n        -deststoretype JKS\n"})}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"Keytool is a program that is part of the default Java distribution. You will need at least a JRE to use it."}),(0,n.jsxs)(t.p,{children:["Other tools, some of which visual, exist to perform this kind of operations, such as ",(0,n.jsx)(t.a,{href:"https://keystore-explorer.org/",children:"Keystore Explorer"})]})]}),"\n",(0,n.jsx)(t.h2,{id:"update-the-configuration-file",children:"Update the configuration file"}),"\n",(0,n.jsx)(t.p,{children:"Position the client.jks file in the same directory as the docker-compose.yml file."}),"\n",(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.code,{children:"docker-compose.yml"})," file:"]}),"\n",(0,n.jsx)(t.p,{children:"If you had to go through step 1, you will need to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["change the image name from apifortress/remotedownloadagent",":latest"," to the name of the derivate image you created, as in:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"image: ssldownloader`\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"mandatory-steps",children:"Mandatory steps"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"add a volume to mount the client.jks file, as in:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"volumes:\n    - ./client.jks:/client.jks\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"add an environment variable to configure the client certificate as in:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'client_cert_configuration: \'{"keystorePath":"/client.jks","keystorePassword":"foobar"}\'\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["the ",(0,n.jsx)(t.code,{children:"disable_ssl_validation"})," must be set to false. Certificate validation needs to be active."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You can now restart the downloader."}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.p,{children:["If you are using .pfx files you can follow this ",(0,n.jsx)(t.a,{href:"https://www.digicert.com/kb/ssl-support/jks-import-export-java.htm",children:"digicert guide"})," to convert them to .jks files."]}),(0,n.jsxs)(t.p,{children:["You can also bind multiple certificates to a single downloader, ",(0,n.jsx)(t.a,{href:"https://apifortress.com/doc/multiple-client-cert-downloader/",children:"click here to learn how"}),"."]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var n=i(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);