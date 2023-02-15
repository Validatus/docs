"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1739],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var l=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),i=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return l.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?l.createElement(g,o(o({ref:t},c),{},{components:n})):l.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var i=2;i<a;i++)o[i]=n[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(7294),r=n(4334),a="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,o),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return T}});var l=n(3117),r=n(7294),a=n(4334),o=n(2466),u=n(6775),s=n(1980),i=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:r}}=e;return{value:t,label:n,attributes:l,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const l=(0,u.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(l.location.search);t.set(a,e),l.replace({...l.location,search:t.toString()})}),[a,l])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,a=d(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:a}))),[s,i]=g({queryString:n,groupId:l}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,a]=(0,c.Nk)(n);return[l,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:l}),k=(()=>{const e=s??p;return m({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),b(e)}),[i,b,a]),tabValues:a}}var k=n(2389),h="tabList__CuJ",v="tabItem_LNqP";function f(e){let{className:t,block:n,selectedValue:u,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),l=i[n].value;l!==u&&(p(t),s(l))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,a.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":u===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:l}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",h)},r.createElement(f,(0,l.Z)({},e,t)),r.createElement(w,(0,l.Z)({},e,t)))}function T(e){const t=(0,k.Z)();return r.createElement(y,(0,l.Z)({key:String(t)},e))}},578:function(e,t){const n=Object.freeze({golangNode:"1.19.1",golangApp:"1.19.1",golangCore:"1.19.1",golang:"1.19.1",arabicaChainId:"arabica-5"});t.Z=n},2409:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var l=n(3117),r=(n(7294),n(3905)),a=n(578),o=n(4866),u=n(5162);const s={sidebar_label:"Setting Up Environment"},i="Development Environment",c={unversionedId:"nodes/environment",id:"nodes/environment",title:"Development Environment",description:"This tutorial will go over setting up your development environment to run",source:"@site/docs/nodes/environment.mdx",sourceDirName:"nodes",slug:"/nodes/environment",permalink:"/pr-preview/pr-470/nodes/environment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/environment.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Setting Up Environment"},sidebar:"nodes",previous:{title:"Quick Start",permalink:"/pr-preview/pr-470/nodes/quick-start"},next:{title:"Installing Celestia Node",permalink:"/pr-preview/pr-470/nodes/celestia-node"}},p={},d=[{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"\ud83c\udf7a Installing Homebrew",id:"-installing-homebrew",level:4},{value:"\ud83d\uddc4 Install wget and jq",id:"-install-wget-and-jq",level:4},{value:"\ud83c\udf7a Installing Homebrew",id:"-installing-homebrew-1",level:4},{value:"\ud83d\uddc4 Install wget and jq",id:"-install-wget-and-jq-1",level:4},{value:"Install Golang",id:"install-golang",level:3}],m={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development-environment"},"Development Environment"),(0,r.kt)("p",null,"This tutorial will go over setting up your development environment to run\nCelestia software. This environment can be used for development, building\nbinaries, and running nodes."),(0,r.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,r.kt)("p",null,"Once you have setup your instance, ssh into the instance to begin installing the\ndependencies needed to run a node."),(0,r.kt)("p",null,"First, make sure to update and upgrade the OS:"),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"apt",label:"APT",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update && sudo apt upgrade -y\n"))),(0,r.kt)(u.Z,{value:"yum",label:"YUM",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum update\n")))),(0,r.kt)("p",null,"These are essential packages that are necessary to execute many tasks like\ndownloading files, compiling, and monitoring the node:"),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"apt",label:"APT",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n"))),(0,r.kt)(u.Z,{value:"yum",label:"YUM",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n"))),(0,r.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,r.kt)("h4",{id:"-installing-homebrew"},"\ud83c\udf7a Installing Homebrew"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," is a package manager for macOS and Linux and will\nallow you to install your dependencies. Install it by running this command in\nyour terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,r.kt)("p",null,"Be sure to run the commands in the output that are similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,r.kt)("h4",{id:"-install-wget-and-jq"},"\ud83d\uddc4 Install wget and jq"),(0,r.kt)("p",null,"Using Homebrew, in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install wget && brew install jq\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget")," is an internet file retriever and\n",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq"},"jq")," is a lightweight command-line JSON\nprocessor.")),(0,r.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,r.kt)("h4",{id:"-installing-homebrew-1"},"\ud83c\udf7a Installing Homebrew"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," is a package manager for macOS and Linux and will\nallow you to install your dependencies. Install it by running this command in\nyour terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,r.kt)("p",null,"Be sure to run the commands in the output that are similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,r.kt)("h4",{id:"-install-wget-and-jq-1"},"\ud83d\uddc4 Install wget and jq"),(0,r.kt)("p",null,"Using Homebrew, in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install wget && brew install jq\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget")," is an internet file retriever and\n",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq"},"jq")," is a lightweight command-line JSON\nprocessor."))),(0,r.kt)("h3",{id:"install-golang"},"Install Golang"),(0,r.kt)("p",null,"Celestia-app and celestia-node are written in ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev"},"Golang"),"\nso we must install Golang to build and run them."),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,'ver="',a.Z.golang,'" ',(0,r.kt)("br",null),"cd $HOME ",(0,r.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz" ',(0,r.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,r.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz" ',(0,r.kt)("br",null),'rm "go$ver.linux-amd64.tar.gz" ',(0,r.kt)("br",null)))),(0,r.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,'ver="',a.Z.golang,'" ',(0,r.kt)("br",null),"cd $HOME ",(0,r.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-arm64.tar.gz" ',(0,r.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,r.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz" ',(0,r.kt)("br",null),'rm "go$ver.linux-arm64.tar.gz" ',(0,r.kt)("br",null)))),(0,r.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,'ver="',a.Z.golang,'" ',(0,r.kt)("br",null),"cd $HOME ",(0,r.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz" ',(0,r.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,r.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz" ',(0,r.kt)("br",null),'rm "go$ver.darwin-arm64.tar.gz" ',(0,r.kt)("br",null)))),(0,r.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,'ver="',a.Z.golang,'" ',(0,r.kt)("br",null),"cd $HOME ",(0,r.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz" ',(0,r.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,r.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz" ',(0,r.kt)("br",null),'rm "go$ver.darwin-amd64.tar.gz" ',(0,r.kt)("br",null))))),(0,r.kt)("p",null,"Now we need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,r.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,r.kt)(u.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,r.kt)("p",null,"To check if Go was installed correctly run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,r.kt)("p",null,"The output should be the version installed:"),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"go version go",a.Z.golang," linux/amd64"))),(0,r.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"go version go",a.Z.golang," linux/arm64"))),(0,r.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"go version go",a.Z.golang," darwin/arm64"))),(0,r.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"go version go",a.Z.golang," darwin/amd64"))))),(0,r.kt)(u.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,'ver="',a.Z.golang,'" ',(0,r.kt)("br",null),"cd $HOME ",(0,r.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz" ',(0,r.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,r.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz" ',(0,r.kt)("br",null),'rm "go$ver.linux-amd64.tar.gz" ',(0,r.kt)("br",null)))),(0,r.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,'ver="',a.Z.golang,'" ',(0,r.kt)("br",null),"cd $HOME ",(0,r.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-arm64.tar.gz" ',(0,r.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,r.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz" ',(0,r.kt)("br",null),'rm "go$ver.linux-arm64.tar.gz" ',(0,r.kt)("br",null)))),(0,r.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,'ver="',a.Z.golang,'" ',(0,r.kt)("br",null),"cd $HOME ",(0,r.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz" ',(0,r.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,r.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz" ',(0,r.kt)("br",null),'rm "go$ver.darwin-arm64.tar.gz" ',(0,r.kt)("br",null)))),(0,r.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,'ver="',a.Z.golang,'" ',(0,r.kt)("br",null),"cd $HOME ",(0,r.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz" ',(0,r.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,r.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz" ',(0,r.kt)("br",null),'rm "go$ver.darwin-amd64.tar.gz" ',(0,r.kt)("br",null))))),(0,r.kt)("p",null,"Now we need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,r.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,r.kt)(u.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,r.kt)("p",null,"To check if Go was installed correctly run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,r.kt)("p",null,"The output should be the version installed:"),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"go version go",a.Z.golang," linux/amd64"))),(0,r.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"go version go",a.Z.golang," linux/arm64"))),(0,r.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"go version go",a.Z.golang," darwin/arm64"))),(0,r.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"go version go",a.Z.golang," darwin/amd64")))))))}g.isMDXComponent=!0}}]);