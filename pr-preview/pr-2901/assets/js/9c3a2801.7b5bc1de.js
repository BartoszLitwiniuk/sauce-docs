"use strict";(self.webpackChunksauce_docs=self.webpackChunksauce_docs||[]).push([[62192],{57179:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(74848),s=t(28453),i=(t(86025),t(11470)),o=t(19365);const a={id:"configuration",title:"Sauce Connect Proxy Configuration",sidebar_label:"Configuration"},c=void 0,l={id:"secure-connections/sauce-connect-5/operation/configuration",title:"Sauce Connect Proxy Configuration",description:"The explicit way to launch a Sauce Connect Proxy tunnel is to run a single command line comprised of all flags and any optional flags you want to use to customize tunnel behavior.",source:"@site/docs/secure-connections/sauce-connect-5/operation/configuration.md",sourceDirName:"secure-connections/sauce-connect-5/operation",slug:"/secure-connections/sauce-connect-5/operation/configuration",permalink:"/sauce-docs/pr-preview/pr-2901/secure-connections/sauce-connect-5/operation/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/saucelabs/sauce-docs/edit/main/docs/secure-connections/sauce-connect-5/operation/configuration.md",tags:[],version:"current",lastUpdatedBy:"Logan Graham",lastUpdatedAt:1712351123e3,frontMatter:{id:"configuration",title:"Sauce Connect Proxy Configuration",sidebar_label:"Configuration"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/sauce-docs/pr-preview/pr-2901/secure-connections/sauce-connect-5/operation/overview"},next:{title:"Additional Proxies",permalink:"/sauce-docs/pr-preview/pr-2901/secure-connections/sauce-connect-5/operation/proxies"}},d={},u=[{value:"Config File",id:"config-file",level:2},{value:"Config File Reference",id:"config-file-reference",level:3},{value:"Reference",id:"reference",level:4},{value:"Use Cases",id:"use-cases",level:3},{value:"Using the Config File",id:"using-the-config-file",level:3},{value:"Environment Variables",id:"environment-variables",level:2},{value:"Use Cases",id:"use-cases-1",level:3},{value:"Environment Variables For Security",id:"environment-variables-for-security",level:3},{value:"Running Sauce Connect Proxy With Environment Variables",id:"running-sauce-connect-proxy-with-environment-variables",level:3},{value:"More Information",id:"more-information",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["The explicit way to launch a Sauce Connect Proxy tunnel is to run a single command line comprised of all ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/",children:"flags"})," and any optional ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/",children:"flags"})," you want to use to customize tunnel behavior.\nIt's also possible to pass the same command-line arguments through a config file, and as environment variables.\nIf you pass the same argument through multiple methods, the order of precedence is as follows (from highest to lowest):"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"command-line option"}),"\n",(0,r.jsx)(n.li,{children:"environment variable"}),"\n",(0,r.jsx)(n.li,{children:"YAML config file"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"config-file",children:"Config File"}),"\n",(0,r.jsxs)(n.p,{children:["The Sauce Connect Proxy ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--config-file",children:"config file"})," may contain any CLI flag.\nIt may also contain comments that could help make its content more readable, for example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"---\nregion: 'us-west'\nusername: 'janedoe-sauce'\naccess-key: 'xxxx-xxx-xxx'\n# this is my log file for SC I use for Mac OS tests.\nlog-file: '/tmp/sc-mac.log'\n# this is the tunnel I use for Mac OS tests\ntunnel-name: 'my-macos'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"config-file-reference",children:"Config File Reference"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#configuration-file",children:(0,r.jsx)(n.code,{children:"sc run config-file"})})," command's output below contains all the available options and their usage."]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsxs)("summary",{children:[(0,r.jsx)(n.code,{children:"sc run config-file"})," output"]}),(0,r.jsx)(n.h4,{id:"reference",children:"Reference"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# --- Required ---\n\n# access-key <UUID>\n#\n# Sauce Labs Access Key, you can get it from the User Settings page. For\n# additional security, we recommend setting this as an environment variable.\n#access-key:\n\n# region <data center>\n#\n# Sauce Labs region name, ex. us-west or eu-central.\n#region:\n\n# tunnel-name <name>\n#\n# Name of the tunnel or tunnel pool. You can run tests using this tunnel by\n# specifying the tunnelName value in your test capabilities.\n#tunnel-name:\n\n# username <username>\n#\n# Sauce Labs username. For additional security, we recommend setting this as an\n# environment variable.\n#username:\n\n# --- Options ---\n\n# metadata <key=value>,...\n#\n# Custom metadata key-value pairs.\n#metadata:\n\n# shared <all>\n#\n# Share the tunnel within the same org unit. Only the \'all\' option is currently\n# supported.\n#shared:\n\n# tunnel-pool <value>\n#\n# Denotes a tunnel as part of a high availability tunnel pool.\n#tunnel-pool: false\n\n# --- Tunnel traffic ---\n\n# deny-domains [-]<regexp>,...\n#\n# Deny requests to the matching domains.\n#deny-domains:\n\n# direct-domains [-]<regexp>,...\n#\n# Forward matching requests to their origin server over the public internet.\n# Requests that don\'t match "direct domains" will be forwarded to customer-side\n# over the Sauce Connect Proxy connection. You can specify --direct-domains or\n# --tunnel-domains, but not both.\n#direct-domains:\n\n# tls-passthrough-domains [-]<regexp>,...\n#\n# Pass matching requests to their origin server without SSL/TLS re-encryption.\n# You can specify --tls-passthrough-domains or --tls-resign-domains, but not\n# both.\n#tls-passthrough-domains:\n\n# tls-resign-domains [-]<regexp>,...\n#\n# Resign SSL/TLS certificates for matching requests. You can specify\n# --tls-resign-domains or --tls-passthrough-domains, but not both.\n#tls-resign-domains:\n\n# tunnel-domains [-]<regexp>,...\n#\n# Forward matching requests over the Sauce Connect Proxy connection. Requests\n# not matching "tunnel domains" will be forwarded to their origin server over\n# the public internet. This is the recommended option for the best performance\n# since it minimizes the expensive tunnelled traffic and uses it only for\n# internal domains that are not publicly available. You can specify\n# --tunnel-domains or --direct-domains, but not both.\n#tunnel-domains:\n\n# --- Proxy ---\n\n# auth <username[:password]@host:port,...>\n#\n# Site or upstream proxy basic authentication credentials. The host and port can\n# be set to "*" to match all hosts and ports respectively. The flag can be\n# specified multiple times to add multiple credentials.\n#auth:\n\n# header <header>\n#\n# Add or remove HTTP request headers. Use the format "name: value" to add a\n# header, "name;" to set the header to empty value, "-name" to remove the\n# header, "-name*" to remove headers by prefix. The header name will be\n# normalized to canonical form. The header value should not contain any newlines\n# or carriage returns. The flag can be specified multiple times. Example: -H\n# "Host: example.com" -H "-User-Agent" -H "-X-*".\n#header:\n\n# pac <path or URL>\n#\n# Proxy Auto-Configuration file to use for upstream proxy selection. It can be a\n# local file or a URL, you can also use \'-\' to read from stdin. The data URI\n# scheme is supported, the format is data:base64,<encoded data>.\n#pac:\n\n# proxy [protocol://]host[:port]\n#\n# Upstream proxy to use for requests received from the Sauce Connect Server\n# only. The supported protocols are: http, https, socks, socks5. No protocol\n# specified will be interpreted as an HTTP proxy. If the port number is not\n# specified, it is assumed to be 1080. The basic authentication username and\n# password can be specified in the host string, e.g. user:pass@host:port.\n# Alternatively, you can specify the credentials using the -a, --auth flag.\n#proxy:\n\n# proxy-localhost <allow|deny|direct>\n#\n# Setting this to allow enables sending requests to localhost through the\n# upstream proxy. Setting this to direct sends requests to localhost directly\n# without using the upstream proxy. By default, requests to localhost are\n# denied.\n#proxy-localhost: deny\n\n# proxy-sauce [protocol://]host[:port]\n#\n# Proxy for requests to Sauce Labs REST API and Sauce Connect servers only. See\n# the -x, --proxy flag for more details on the format.\n#proxy-sauce:\n\n# --- DNS ---\n\n# dns-round-robin <value>\n#\n# If more than one DNS server is specified with the --dns-server flag, passing\n# this flag will enable round-robin selection.\n#dns-round-robin: false\n\n# dns-server <ip>[:<port>]\n#\n# DNS server(s) to use instead of system default. There are two execution\n# policies, when more then one server is specified. Fallback: the first server\n# in a list is used as primary, the rest are used as fallbacks. Round robin: the\n# servers are used in a round-robin fashion. The port is optional, if not\n# specified the default port is 53.\n#dns-server:\n\n# dns-timeout <duration>\n#\n# Timeout for dialing DNS servers. Only used if DNS servers are specified.\n#dns-timeout: 5s\n\n# --- HTTP client ---\n\n# cacert-file <path or base64>\n#\n# Add your own CA certificates to verify against. The system root certificates\n# will be used in addition to any certificates in this list. Can be a path to a\n# file or "data:" followed by base64 encoded certificate. Use this flag multiple\n# times to specify multiple CA certificate files.\n#cacert-file:\n\n# http-dial-timeout <duration>\n#\n# The maximum amount of time a dial will wait for a connect to complete. With or\n# without a timeout, the operating system may impose its own earlier timeout.\n# For instance, TCP timeouts are often around 3 minutes.\n#http-dial-timeout: 10s\n\n# http-idle-conn-timeout <duration>\n#\n# The maximum amount of time an idle (keep-alive) connection will remain idle\n# before closing itself. Zero means no limit.\n#http-idle-conn-timeout: 1m30s\n\n# http-response-header-timeout <duration>\n#\n# The amount of time to wait for a server\'s response headers after fully writing\n# the request (including its body, if any).This time does not include the time\n# to read the response body. Zero means no limit.\n#http-response-header-timeout: 0s\n\n# http-tls-handshake-timeout <duration>\n#\n# The maximum amount of time waiting to wait for a TLS handshake. Zero means no\n# limit.\n#http-tls-handshake-timeout: 10s\n\n# --- API server ---\n\n# api-address <host:port>\n#\n# The server address to listen on. If the host is empty, the server will listen\n# on all available interfaces.\n#api-address:\n\n# api-basic-auth <username[:password]>\n#\n# Basic authentication credentials to protect the server.\n#api-basic-auth:\n\n# --- Logging ---\n\n# log-file <path>\n#\n# Path to the log file, if empty, logs to stdout.\n#log-file:\n\n# log-http [api|proxy|control:]<none|short-url|url|headers|body|errors>,...\n#\n# HTTP request and response logging mode. Setting this to none disables logging.\n# The short-url mode logs [scheme://]host[/path] instead of the full URL. The\n# error mode logs request line and headers if status code is greater than or\n# equal to 500.\n#log-http:\n\n# log-level <error|info|debug>\n#\n# Log level.\n#log-level: info\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"use-cases",children:"Use Cases"}),"\n",(0,r.jsx)(n.p,{children:"We recommend using a configuration file in production environments."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Facilitates tracking tunnel configuration changes because they're all included in a single file."}),"\n",(0,r.jsx)(n.li,{children:"Facilitates management of potentially long CLI options such as tunnel-domains and direct-domains."}),"\n",(0,r.jsx)(n.li,{children:"Secures Sauce Connect Proxy credentials with tighter access control."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"using-the-config-file",children:"Using the Config File"}),"\n",(0,r.jsxs)(n.p,{children:["To launch a tunnel using a ",(0,r.jsx)(n.strong,{children:"config.yml"})," file option."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create Sauce Connect Proxy config file in any location, for example: ",(0,r.jsx)(n.code,{children:"$HOME/sc/config.yml"})," (",(0,r.jsx)(n.code,{children:"%HOMEPATH%\\sc\\config.yml"})," for Windows)."]}),"\n",(0,r.jsx)(n.li,{children:"Enter values for the properties you'd like to use."}),"\n",(0,r.jsxs)(n.li,{children:["Use the ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--config-file",children:"--config-file"})," flag to run Sauce Connect Proxy with your configuration file."]}),"\n"]}),"\n",(0,r.jsxs)(i.A,{defaultValue:"Mac/Linux",values:[{label:"Mac/Linux",value:"Mac/Linux"},{label:"Windows",value:"Windows"}],children:[(0,r.jsx)(o.A,{value:"Mac/Linux",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./sc run -c ~/sc/config.yml\n"})})}),(0,r.jsx)(o.A,{value:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sc.exe run -c %HOMEPATH%\\sc\\config.yml\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,r.jsxs)(n.p,{children:["You can set via environment variables all Sauce Connect Proxy ",(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/",children:"command-line options"}),".\nEach option description includes the corresponding environment variable."]}),"\n",(0,r.jsx)(n.h3,{id:"use-cases-1",children:"Use Cases"}),"\n",(0,r.jsx)(n.p,{children:"We recommend configuring options via environment variables in the following scenarios."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Sauce Connect Proxy command containing credentials may be exposed via process monitoring tools such as ",(0,r.jsx)(n.code,{children:"ps"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"When running Sauce Connect Proxy in CI/CD environment to avoid clear-text logging your credentials."}),"\n",(0,r.jsx)(n.li,{children:"Sauce Connect Proxy runs in a docker container, and a CI system (such as GitLab) supports secure environment variables."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"environment-variables-for-security",children:"Environment Variables For Security"}),"\n",(0,r.jsx)(n.p,{children:"The following flags may contain sensitive information:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--username",children:(0,r.jsx)(n.code,{children:"--username"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--access-key",children:(0,r.jsx)(n.code,{children:"--access-key"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--auth",children:(0,r.jsx)(n.code,{children:"--auth"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--proxy",children:(0,r.jsx)(n.code,{children:"--proxy"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--proxy-sauce",children:(0,r.jsx)(n.code,{children:"--proxy-sauce"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--header",children:(0,r.jsx)(n.code,{children:"--header"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--api-basic-auth",children:(0,r.jsx)(n.code,{children:"--api-basic-auth"})})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We recommend using environment variables for these flags."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Environment Variable"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Corresponding CLI Option"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SAUCE_USERNAME"})}),(0,r.jsx)(n.td,{children:"Sets your Sauce Labs username."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--username",children:(0,r.jsx)(n.code,{children:"--username"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SAUCE_ACCESS_KEY"})}),(0,r.jsx)(n.td,{children:"Sets your Sauce Labs access key."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--access-key",children:(0,r.jsx)(n.code,{children:"--access-key"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SAUCE_AUTH"})}),(0,r.jsx)(n.td,{children:"Sets site or upstream proxy basic authentication credentials."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--auth",children:(0,r.jsx)(n.code,{children:"--auth"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SAUCE_PROXY"})}),(0,r.jsxs)(n.td,{children:["The basic authentication username and password can be specified in the host string, e.g. user",":pass","@host",":port","."]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--proxy",children:(0,r.jsx)(n.code,{children:"--proxy"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SAUCE_PROXY_SAUCE"})}),(0,r.jsxs)(n.td,{children:["The basic authentication username and password can be specified in the host string, e.g. user",":pass","@host",":port","."]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--proxy-sauce",children:(0,r.jsx)(n.code,{children:"--proxy-sauce"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SAUCE_HEADER"})}),(0,r.jsx)(n.td,{children:"May contain headers with sensitive information."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--header",children:(0,r.jsx)(n.code,{children:"--header"})})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"SAUCE_API_BASIC_AUTH"})}),(0,r.jsx)(n.td,{children:"Contains an optional internal API server authentication."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/run/#--api-basic-auth",children:(0,r.jsx)(n.code,{children:"--api-basic-auth"})})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"running-sauce-connect-proxy-with-environment-variables",children:"Running Sauce Connect Proxy With Environment Variables"}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsxs)(o.A,{value:"macOS/Linux",label:"macOS and Linux",default:!0,children:["Follow the steps below to configure Sauce Connect Proxy using environment variables in your terminal.",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["In your terminal window, set the following environment variables","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'export SAUCE_USERNAME="your Sauce username"\nexport SAUCE_ACCESS_KEY="your Sauce access key"\nexport SAUCE_REGION="<us-west|eu-central>"\nexport SAUCE_TUNNEL_NAME="your tunnel name"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Starting a new Sauce Connect Proxy does not require adding required flags.","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sc\n"})}),"\n"]}),"\n"]}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You can persist Sauce Connect Proxy environment variables by adding them to one of your user environment configuration files, such as ",(0,r.jsx)(n.code,{children:".bash_profile"})," or ",(0,r.jsx)(n.code,{children:".zshrc"}),"."]})})]}),(0,r.jsx)(o.A,{value:"Windows",label:"Windows",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open the Control Panel and click the System icon to open the ",(0,r.jsx)(n.strong,{children:"System Properties"})," dialog."]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.strong,{children:"Environment Variables"})," to open the ",(0,r.jsx)(n.strong,{children:"Environment Variables"})," dialog."]}),"\n",(0,r.jsxs)(n.li,{children:["In the ",(0,r.jsx)(n.strong,{children:"User variables"})," section, click ",(0,r.jsx)(n.strong,{children:"New"})," to open the ",(0,r.jsx)(n.strong,{children:"New System Variable"})," dialog."]}),"\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.strong,{children:"Variable name"}),", enter ",(0,r.jsx)(n.strong,{children:"SAUCE_USERNAME"})," and for ",(0,r.jsx)(n.strong,{children:"Variable value"}),", enter your Sauce username and then click ",(0,r.jsx)(n.strong,{children:"OK"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Repeat 3-4 to set up the ",(0,r.jsx)(n.strong,{children:"SAUCE_ACCESS_KEY"}),", ",(0,r.jsx)(n.strong,{children:"SAUCE_REGION"}),", ",(0,r.jsx)(n.strong,{children:"SAUCE_TUNNEL_NAME"})," or any other environment variable."]}),"\n",(0,r.jsxs)(n.li,{children:["Confirm that your environment variables have been set by typing ",(0,r.jsx)(n.code,{children:"echo %SAUCE_USERNAME%"})," in your terminal. The response should be your username value. Then do the same for your access key."]}),"\n",(0,r.jsxs)(n.li,{children:["Starting a new Sauce Connect Proxy will not require adding required flags.","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sc.exe\n"})}),"\n"]}),"\n"]})})]}),"\n",(0,r.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/secure-connections/sauce-connect-5/quickstart",children:"Sauce Connect Proxy Quickstart"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/dev/cli/sauce-connect-5/",children:"Sauce Connect Proxy CLI"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>S});var r=t(96540),s=t(18215),i=t(23104),o=t(56347),a=t(205),c=t(57485),l=t(31682),d=t(89466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[l,u]=p({queryString:t,groupId:s}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),g=(()=>{const e=l??f;return m({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{g&&c(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=a[t].value;s!==r&&(l(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function S(e){const n=(0,x.A)();return(0,v.jsx)(j,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(96540);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);