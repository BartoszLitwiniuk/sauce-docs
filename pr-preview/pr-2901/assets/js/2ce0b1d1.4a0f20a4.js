"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[13979],{88965:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=o(74848),s=o(28453);const c={id:"faq",title:"Frequently Asked Questions",sidebar_label:"FAQ"},a=void 0,i={id:"secure-connections/sauce-connect/faq",title:"Frequently Asked Questions",description:"If you're new to Sauce Connect Proxy or troubleshooting, this list of frequently asked questions can help you with what you need to know.",source:"@site/docs/secure-connections/sauce-connect/faq.md",sourceDirName:"secure-connections/sauce-connect",slug:"/secure-connections/sauce-connect/faq",permalink:"/sauce-docs/pr-preview/pr-2901/secure-connections/sauce-connect/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect/faq.md",tags:[],version:"current",lastUpdatedBy:"Lysanne Pinto",lastUpdatedAt:1683128929e3,frontMatter:{id:"faq",title:"Frequently Asked Questions",sidebar_label:"FAQ"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/sauce-docs/pr-preview/pr-2901/secure-connections/sauce-connect/troubleshooting"},next:{title:"Sauce IPSec Proxy",permalink:"/sauce-docs/pr-preview/pr-2901/secure-connections/ipsec-vpn"}},r={},l=[{value:"What outbound ports do I need open for Sauce Connect Proxy?",id:"what-outbound-ports-do-i-need-open-for-sauce-connect-proxy",level:2},{value:"When do I need to use Port 443 and how does it relate to the --proxy flag?",id:"when-do-i-need-to-use-port-443-and-how-does-it-relate-to-the---proxy-flag",level:2},{value:"How can I share a Sauce Connect Proxy tunnel between multiple accounts?",id:"how-can-i-share-a-sauce-connect-proxy-tunnel-between-multiple-accounts",level:2},{value:"How can I use Sauce Connect Proxy to test graceful degradation?",id:"how-can-i-use-sauce-connect-proxy-to-test-graceful-degradation",level:2},{value:"Can I access apps on localhost?",id:"can-i-access-apps-on-localhost",level:2},{value:"How can I improve tunnel performance?",id:"how-can-i-improve-tunnel-performance",level:2},{value:"Supported Browsers and Ports",id:"supported-browsers-and-ports",level:3},{value:"What are the optimal open file settings?",id:"what-are-the-optimal-open-file-settings",level:2},{value:"If we have five users, should we use five instances of Sauce Connect Proxy or set up one shared instance?",id:"if-we-have-five-users-should-we-use-five-instances-of-sauce-connect-proxy-or-set-up-one-shared-instance",level:2},{value:"Can I split testing traffic across multiple Sauce Connect Proxy tunnels?",id:"can-i-split-testing-traffic-across-multiple-sauce-connect-proxy-tunnels",level:2},{value:"Does Sauce Connect Proxy support running XCUITest and Espresso tests?",id:"does-sauce-connect-proxy-support-running-xcuitest-and-espresso-tests",level:2},{value:"How many Sauce Connect Proxy tunnels can I keep open simultaneously?",id:"how-many-sauce-connect-proxy-tunnels-can-i-keep-open-simultaneously",level:2},{value:"How many tests can I run in each Sauce Connect Proxy tunnel?",id:"how-many-tests-can-i-run-in-each-sauce-connect-proxy-tunnel",level:2},{value:"Are there restrictions on who can use Sauce Connect Proxy tunnels for real device testing?",id:"are-there-restrictions-on-who-can-use-sauce-connect-proxy-tunnels-for-real-device-testing",level:2},{value:"Can I run tests on Virtual Devices and Real Devices using the same Sauce Connect Proxy tunnel?",id:"can-i-run-tests-on-virtual-devices-and-real-devices-using-the-same-sauce-connect-proxy-tunnel",level:2},{value:"Are there any special parameters when using a PAC file in real device tests?",id:"are-there-any-special-parameters-when-using-a-pac-file-in-real-device-tests",level:2},{value:"Will Sauce Connect Proxy work with dynamic allocation of real devices?",id:"will-sauce-connect-proxy-work-with-dynamic-allocation-of-real-devices",level:2},{value:"Can you allowlist IP addresses instead of using Sauce Connect Proxy?",id:"can-you-allowlist-ip-addresses-instead-of-using-sauce-connect-proxy",level:2},{value:"Where can I get more in-depth information about Sauce Connect Proxy?",id:"where-can-i-get-more-in-depth-information-about-sauce-connect-proxy",level:2},{value:"What is KGP in Sauce Connect Proxy logs?",id:"what-is-kgp-in-sauce-connect-proxy-logs",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"If you're new to Sauce Connect Proxy or troubleshooting, this list of frequently asked questions can help you with what you need to know."}),"\n",(0,t.jsx)(n.h2,{id:"what-outbound-ports-do-i-need-open-for-sauce-connect-proxy",children:"What outbound ports do I need open for Sauce Connect Proxy?"}),"\n",(0,t.jsxs)(n.p,{children:["Sauce Connect Proxy can only communicate with Sauce Labs via ",(0,t.jsx)(n.code,{children:"port 443"}),". This is not configurable."]}),"\n",(0,t.jsxs)(n.p,{children:["Sauce Connect Proxy requires outbound access to several Sauce Labs REST API endpoints (over HTTPS) and the Sauce Connect Server (over TLS1.2-encrypted ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/advanced/kgp",children:"KGP"}),").\nFor more information, see ",(0,t.jsx)(n.a,{href:"/basics/data-center-endpoints",children:"Data Center Endpoints"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"when-do-i-need-to-use-port-443-and-how-does-it-relate-to-the---proxy-flag",children:"When do I need to use Port 443 and how does it relate to the --proxy flag?"}),"\n",(0,t.jsx)(n.p,{children:"Port 443 is the typical default port for HTTPS traffic. Sauce Connect will use port 443 when sending traffic to your network when trying to reach the site(s) under test."}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--proxy",children:(0,t.jsx)(n.code,{children:"--proxy"})})," command-line option to specify the ",(0,t.jsx)(n.code,{children:"hostname:port"})," of the proxy for all Sauce Connect Proxy traffic to the site(s) under test.\nSome companies have it setup where you MUST pass traffic through a proxy to reach the internet.\nSee also ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/additional-proxies",children:"Sauce Connect Proxy Setup with Additional Proxies"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"how-can-i-share-a-sauce-connect-proxy-tunnel-between-multiple-accounts",children:"How can I share a Sauce Connect Proxy tunnel between multiple accounts?"}),"\n",(0,t.jsxs)(n.p,{children:["To share a tunnel, start a tunnel with the ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--shared-tunnel",children:(0,t.jsx)(n.code,{children:"--shared-tunnel"})})," flag. For most Sauce Labs customers, your access to shared tunnels is determined by the permissions of the user who creates them. Organization admins can create tunnels that any user on any team can use. Team admins can create tunnels that any member of their team can use. Team members cannot share tunnels they create with any other team member."]}),"\n",(0,t.jsxs)(n.p,{children:["In order to use a tunnel that an admin or team member shares with you, you'll need to add ",(0,t.jsx)(n.a,{href:"https://docs.saucelabs.com/dev/test-configuration-options/#tunnelowner",children:(0,t.jsx)(n.code,{children:"tunnelOwner"})})," to your test capabilities and specify that person's username."]}),"\n",(0,t.jsx)(n.h2,{id:"how-can-i-use-sauce-connect-proxy-to-test-graceful-degradation",children:"How can I use Sauce Connect Proxy to test graceful degradation?"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.a,{href:"/dev/cli/sauce-connect-proxy",children:(0,t.jsx)(n.code,{children:"--fast-fail-regexps"})})," command-line option to drop requests that fit a description altogether. It can be used to simulate non-loading of scripts, styles, or other resources."]}),"\n",(0,t.jsx)(n.p,{children:"This flag can contain a list of regex that will match the domain that wants to be blocked. Example:"}),"\n",(0,t.jsxs)(n.p,{children:["Entering this code -- ",(0,t.jsx)(n.code,{children:"(www.)?google-analytics.com,(www.)?googletagmanager.com,([a-z0 9]+[.])*google.com,([a-z0-9]+[.])+facebook.com"})," -- will block the following domains:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"www.google-analytics.com"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"google-analytics.com"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"google.com"})," and any subdomain of ",(0,t.jsx)(n.code,{children:"google.com"})]}),"\n",(0,t.jsxs)(n.li,{children:["Any subdomain of ",(0,t.jsx)(n.code,{children:"facebook.com"}),", but not ",(0,t.jsx)(n.code,{children:"facebook.com"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"can-i-access-apps-on-localhost",children:"Can I access apps on localhost?"}),"\n",(0,t.jsxs)(n.p,{children:["You can access ",(0,t.jsx)(n.code,{children:"localhost"})," through Sauce Connect on Virtual Desktop Browser tests. However, you cannot proxy ",(0,t.jsx)(n.code,{children:"localhost"})," or 127.0.0.1 connections on any Mobile tests, whether they are Emulators, Simulators, or Real Devices."]}),"\n",(0,t.jsxs)(n.p,{children:["When using Sauce Connect Proxy, local websites running on commonly used ports are available to test at ",(0,t.jsx)(n.code,{children:"localhost"})," or 127.0.0.1 URLs. The exception is when testing on Real or Virtual Mobile Devices. Real and Virtual Mobile tests require changes to the ",(0,t.jsx)(n.code,{children:"/etc/hosts"})," file where Sauce Connect Proxy is hosted. For more information, see ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/specialized-environments/#testing-mobile-devices-against-localhost",children:"Testing Mobile Devices Against localhost"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For all platforms, tests may perform better when using a locally defined domain name (which can be set in your ",(0,t.jsxs)(n.a,{href:"http://en.wikipedia.org/wiki/Hosts_file",children:[(0,t.jsx)(n.code,{children:"hosts"})," file"]}),") rather than ",(0,t.jsx)(n.code,{children:"localhost"}),". Using a locally defined domain name also allows access to apps on any port. If you are using a parent proxy with Sauce Connect, you may need the ",(0,t.jsxs)(n.a,{href:"/dev/cli/sauce-connect-proxy/#--proxy-localhost",children:[(0,t.jsx)(n.code,{children:"--proxy-localhost"})," flag"]}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["See also ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/advanced/specifications/#supported-browsers-and-ports",children:"Supported Browsers and Ports Specification"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"how-can-i-improve-tunnel-performance",children:"How can I improve tunnel performance?"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/proxy-tunnels/#improving-sauce-connect-proxy-performance",children:"Improving Sauce Connect Proxy Performance"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"supported-browsers-and-ports",children:"Supported Browsers and Ports"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/advanced/specifications/#supported-browsers-and-ports",children:"Supported Browsers and Ports Specification"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"what-are-the-optimal-open-file-settings",children:"What are the optimal open file settings?"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://www.tecmint.com/increase-set-open-file-limits-in-linux/",children:"open file limit"})," on macOS and other Unix-based systems limits the number of open file descriptors. Since a file descriptor is opened for each network connection, the open file limit also restricts the number of open network connections. Under normal usage, Sauce Connect Proxy can easily reach the default limit (1024 in most cases). This causes each new connection to time out, and results in failed tests. Modern systems allow much higher limits without any visible impact on memory, so we ",(0,t.jsx)(n.strong,{children:"recommend setting the open file limit to 64000"})," in order to ensure the open file limit is never an issue for tunneled requests."]}),"\n",(0,t.jsx)(n.h2,{id:"if-we-have-five-users-should-we-use-five-instances-of-sauce-connect-proxy-or-set-up-one-shared-instance",children:"If we have five users, should we use five instances of Sauce Connect Proxy or set up one shared instance?"}),"\n",(0,t.jsx)(n.p,{children:"Feel free to do either, even if you only have one Sauce account."}),"\n",(0,t.jsxs)(n.p,{children:["If you do decide to use five separate instances, you'll need to create unique identifiers for each. More information: ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/high-availability",children:"High Availability Sauce Connect Proxy Setup"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"can-i-split-testing-traffic-across-multiple-sauce-connect-proxy-tunnels",children:"Can I split testing traffic across multiple Sauce Connect Proxy tunnels?"}),"\n",(0,t.jsxs)(n.p,{children:["Sauce Connect Proxy offers some options for high availability that enable multiple Sauce Connect Proxy tunnels to be grouped into a pool, which is treated like a single tunnel. This has several advantages, including the ability to distribute the load of test traffic. More information: ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/setup-configuration/high-availability",children:"High Availability Sauce Connect Proxy Setup"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"does-sauce-connect-proxy-support-running-xcuitest-and-espresso-tests",children:"Does Sauce Connect Proxy support running XCUITest and Espresso tests?"}),"\n",(0,t.jsxs)(n.p,{children:["Yes. More information: ",(0,t.jsx)(n.a,{href:"/mobile-apps/automated-testing/appium",children:"Mobile Testing Frameworks"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"how-many-sauce-connect-proxy-tunnels-can-i-keep-open-simultaneously",children:"How many Sauce Connect Proxy tunnels can I keep open simultaneously?"}),"\n",(0,t.jsxs)(n.p,{children:["Your options depend on your license type. More information: ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/system-requirements",children:"System and Network Requirements for Sauce Connect Proxy"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"how-many-tests-can-i-run-in-each-sauce-connect-proxy-tunnel",children:"How many tests can I run in each Sauce Connect Proxy tunnel?"}),"\n",(0,t.jsxs)(n.p,{children:["There are currently no limits on how many tests you can run in each tunnel, though we may eventually implement limitations to maintain service quality. More information: ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/system-requirements",children:"System and Network Requirements for Sauce Connect Proxy"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"are-there-restrictions-on-who-can-use-sauce-connect-proxy-tunnels-for-real-device-testing",children:"Are there restrictions on who can use Sauce Connect Proxy tunnels for real device testing?"}),"\n",(0,t.jsxs)(n.p,{children:["No, tunnels to the Real Device Cloud are automatically shared with all of your team members. More information: ",(0,t.jsx)(n.a,{href:"/basics/acct-team-mgmt/org-settings",children:"Security Settings for Organizations"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"can-i-run-tests-on-virtual-devices-and-real-devices-using-the-same-sauce-connect-proxy-tunnel",children:"Can I run tests on Virtual Devices and Real Devices using the same Sauce Connect Proxy tunnel?"}),"\n",(0,t.jsx)(n.p,{children:"Yes, you can use the same Sauce Connect Proxy tunnel and/or same machine to test with the Virtual Device Cloud (VDC) and Real Device Cloud (RDC)."}),"\n",(0,t.jsx)(n.h2,{id:"are-there-any-special-parameters-when-using-a-pac-file-in-real-device-tests",children:"Are there any special parameters when using a PAC file in real device tests?"}),"\n",(0,t.jsxs)(n.p,{children:["No, though you cannot use the ",(0,t.jsx)(n.code,{children:"localhost"})," address with iOS and Android."]}),"\n",(0,t.jsx)(n.h2,{id:"will-sauce-connect-proxy-work-with-dynamic-allocation-of-real-devices",children:"Will Sauce Connect Proxy work with dynamic allocation of real devices?"}),"\n",(0,t.jsx)(n.p,{children:"Yes."}),"\n",(0,t.jsx)(n.h2,{id:"can-you-allowlist-ip-addresses-instead-of-using-sauce-connect-proxy",children:"Can you allowlist IP addresses instead of using Sauce Connect Proxy?"}),"\n",(0,t.jsxs)(n.p,{children:["To create a secure connection, we strongly recommend using ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect",children:"Sauce Connect Proxy"})," or ",(0,t.jsx)(n.a,{href:"/secure-connections/ipsec-vpn",children:"Sauce IPSec Proxy"})," instead of allowlisting IP ranges.\nFor more information, see ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/#why-we-recommend-sauce-connect-proxy-over-allowlisting-ip-addresses",children:"Why Sauce Labs Recommends Sauce Connect Proxy Over Allowlisting IP Addresses"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"where-can-i-get-more-in-depth-information-about-sauce-connect-proxy",children:"Where can I get more in-depth information about Sauce Connect Proxy?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://saucelabs.com/resources/white-papers/sauce-connect-proxy-security-overview",children:"Sauce Connect Proxy white paper"})," contains an in-depth overview of the proxy and its security."]}),"\n",(0,t.jsx)(n.h2,{id:"what-is-kgp-in-sauce-connect-proxy-logs",children:"What is KGP in Sauce Connect Proxy logs?"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/secure-connections/sauce-connect/advanced/kgp",children:"Sauce Connect Tunneling Protocol"})," documentation."]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>i});var t=o(96540);const s={},c=t.createContext(s);function a(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);