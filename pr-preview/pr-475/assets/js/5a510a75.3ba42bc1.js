"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1739],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),i=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(n),c=a,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?l.createElement(g,o(o({ref:t},p),{},{components:n})):l.createElement(g,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var i=2;i<r;i++)o[i]=n[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var l=n(7294),a=n(4334),r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(3117),a=n(7294),r=n(4334),o=n(2389),u=n(7392),s=n(7094),i=n(2466),p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:c,groupId:g,className:b}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??k.map((e=>{let{props:{value:t,label:n,attributes:l}}=e;return{value:t,label:n,attributes:l}})),h=(0,u.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,s.U)(),[T,x]=(0,a.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:I}=(0,i.o5)();if(null!=g){const e=w[g];null!=e&&e!==T&&v.some((t=>t.value===e))&&x(e)}const Z=e=>{const t=e.currentTarget,n=N.indexOf(t),l=v[n].value;l!==T&&(I(t),x(l),null!=g&&y(g,String(l)))},$=e=>{var t;let n=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},b)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:$,onClick:Z},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,a.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,o.Z)();return a.createElement(m,(0,l.Z)({key:String(t)},e))}},578:function(e,t){const n=Object.freeze({golangNode:"1.19.1",golangApp:"1.19.1",golangCore:"1.19.1",golang:"1.19.1",arabicaChainId:"arabica-6"});t.Z=n},2409:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var l=n(3117),a=(n(7294),n(3905)),r=n(578),o=n(5488),u=n(5162);const s={sidebar_label:"Setting Up Environment"},i="Development Environment",p={unversionedId:"nodes/environment",id:"nodes/environment",title:"Development Environment",description:"This tutorial will go over setting up your development environment to run",source:"@site/docs/nodes/environment.mdx",sourceDirName:"nodes",slug:"/nodes/environment",permalink:"/pr-preview/pr-475/nodes/environment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/environment.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Setting Up Environment"},sidebar:"nodes",previous:{title:"Quick Start",permalink:"/pr-preview/pr-475/nodes/quick-start"},next:{title:"Installing Celestia Node",permalink:"/pr-preview/pr-475/nodes/celestia-node"}},d={},m=[{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"\ud83c\udf7a Installing Homebrew",id:"-installing-homebrew",level:4},{value:"\ud83d\uddc4 Install wget and jq",id:"-install-wget-and-jq",level:4},{value:"\ud83c\udf7a Installing Homebrew",id:"-installing-homebrew-1",level:4},{value:"\ud83d\uddc4 Install wget and jq",id:"-install-wget-and-jq-1",level:4},{value:"Install Golang",id:"install-golang",level:3}],c={toc:m};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"development-environment"},"Development Environment"),(0,a.kt)("p",null,"This tutorial will go over setting up your development environment to run\nCelestia software. This environment can be used for development, building\nbinaries, and running nodes."),(0,a.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,a.kt)("p",null,"Once you have setup your instance, ssh into the instance to begin installing the\ndependencies needed to run a node."),(0,a.kt)("p",null,"First, make sure to update and upgrade the OS:"),(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"apt",label:"APT",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update && sudo apt upgrade -y\n"))),(0,a.kt)(u.Z,{value:"yum",label:"YUM",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum update\n")))),(0,a.kt)("p",null,"These are essential packages that are necessary to execute many tasks like\ndownloading files, compiling, and monitoring the node:"),(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"apt",label:"APT",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n"))),(0,a.kt)(u.Z,{value:"yum",label:"YUM",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n"))),(0,a.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("h4",{id:"-installing-homebrew"},"\ud83c\udf7a Installing Homebrew"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," is a package manager for macOS and Linux and will\nallow you to install your dependencies. Install it by running this command in\nyour terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,a.kt)("p",null,"Be sure to run the commands in the output that are similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,a.kt)("h4",{id:"-install-wget-and-jq"},"\ud83d\uddc4 Install wget and jq"),(0,a.kt)("p",null,"Using Homebrew, in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew install wget && brew install jq\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget")," is an internet file retriever and\n",(0,a.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq"},"jq")," is a lightweight command-line JSON\nprocessor.")),(0,a.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("h4",{id:"-installing-homebrew-1"},"\ud83c\udf7a Installing Homebrew"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," is a package manager for macOS and Linux and will\nallow you to install your dependencies. Install it by running this command in\nyour terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,a.kt)("p",null,"Be sure to run the commands in the output that are similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,a.kt)("h4",{id:"-install-wget-and-jq-1"},"\ud83d\uddc4 Install wget and jq"),(0,a.kt)("p",null,"Using Homebrew, in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"brew install wget && brew install jq\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget")," is an internet file retriever and\n",(0,a.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq"},"jq")," is a lightweight command-line JSON\nprocessor."))),(0,a.kt)("h3",{id:"install-golang"},"Install Golang"),(0,a.kt)("p",null,"Celestia-app and celestia-node are written in ",(0,a.kt)("a",{parentName:"p",href:"https://go.dev"},"Golang"),"\nso we must install Golang to build and run them."),(0,a.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.linux-amd64.tar.gz" ',(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-arm64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.linux-arm64.tar.gz" ',(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.darwin-arm64.tar.gz" ',(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.darwin-amd64.tar.gz" ',(0,a.kt)("br",null))))),(0,a.kt)("p",null,"Now we need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,a.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,a.kt)(u.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,a.kt)("p",null,"To check if Go was installed correctly run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,a.kt)("p",null,"The output should be the version installed:"),(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," linux/amd64"))),(0,a.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," linux/arm64"))),(0,a.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," darwin/arm64"))),(0,a.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," darwin/amd64"))))),(0,a.kt)(u.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-amd64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.linux-amd64.tar.gz" ',(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.linux-arm64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.linux-arm64.tar.gz" ',(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.darwin-arm64.tar.gz" ',(0,a.kt)("br",null)))),(0,a.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,'ver="',r.Z.golang,'" ',(0,a.kt)("br",null),"cd $HOME ",(0,a.kt)("br",null),'wget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz" ',(0,a.kt)("br",null),"sudo rm -rf /usr/local/go ",(0,a.kt)("br",null),'sudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz" ',(0,a.kt)("br",null),'rm "go$ver.darwin-amd64.tar.gz" ',(0,a.kt)("br",null))))),(0,a.kt)("p",null,"Now we need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,a.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,a.kt)(u.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,a.kt)("p",null,"To check if Go was installed correctly run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,a.kt)("p",null,"The output should be the version installed:"),(0,a.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," linux/amd64"))),(0,a.kt)(u.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," linux/arm64"))),(0,a.kt)(u.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," darwin/arm64"))),(0,a.kt)(u.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",null,"go version go",r.Z.golang," darwin/amd64")))))))}g.isMDXComponent=!0}}]);