"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9641],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(g,r(r({ref:n},p),{},{components:t})):a.createElement(g,r({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(7294),i=t(4334),l="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(3117),i=t(7294),l=t(4334),r=t(2389),o=t(7392),s=t(7094),c=t(2466),p="tabList__CuJ",d="tabItem_LNqP";function u(e){var n;const{lazy:t,block:r,defaultValue:u,values:m,groupId:g,className:k}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),v=(0,o.l)(b,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===u?u:u??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[w,T]=(0,i.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:I}=(0,c.o5)();if(null!=g){const e=y[g];null!=e&&e!==w&&b.some((n=>n.value===e))&&T(e)}const O=e=>{const n=e.currentTarget,t=C.indexOf(n),a=b[t].value;a!==w&&(I(n),T(a),null!=g&&N(g,String(a)))},E=e=>{var n;let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},k)},b.map((e=>{let{value:n,label:t,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>C.push(e),onKeyDown:E,onClick:O},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":w===n})}),t??n)}))),t?(0,i.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(n)},e))}},7245:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=t(3117),i=(t(7294),t(3905)),l=t(5488),r=t(5162);const o={sidebar_label:"Installing Celestia Node"},s="Celestia Node",c={unversionedId:"nodes/celestia-node",id:"nodes/celestia-node",title:"Celestia Node",description:"This tutorial goes over building and installing celestia-node. This",source:"@site/docs/nodes/celestia-node.mdx",sourceDirName:"nodes",slug:"/nodes/celestia-node",permalink:"/pr-preview/pr-387/nodes/celestia-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/celestia-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Installing Celestia Node"},sidebar:"nodes",previous:{title:"Setting Up Environment",permalink:"/pr-preview/pr-387/nodes/environment"},next:{title:"Docker Images",permalink:"/pr-preview/pr-387/nodes/docker-images"}},p={},d=[{value:"Install Celestia Node",id:"install-celestia-node",level:2},{value:"Network Selection",id:"network-selection",level:2},{value:"Errors",id:"errors",level:3},{value:"Errors",id:"errors-1",level:3}],u={toc:d};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"celestia-node"},"Celestia Node"),(0,i.kt)("p",null,"This tutorial goes over building and installing ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node"),". This\ntutorial assumes you completed the steps in setting up your development\nenvironment ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-387/nodes/environment"},"here"),"."),(0,i.kt)("h2",{id:"install-celestia-node"},"Install Celestia Node"),(0,i.kt)(l.Z,{groupId:"network",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,i.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,i.kt)("p",null,"Installing ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.6.1\nmake install\nmake cel-key\n")),(0,i.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-output"},"celestia version\nSemantic version: v0.6.1\nCommit: 3a58679ed84da966d01173f32780134c7b830594\nBuild Date: Thu Dec 15 10:19:22 PM UTC 2022\nSystem version: amd64/linux\nGolang version: go1.19.1\n"))),(0,i.kt)(r.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,i.kt)("p",null,"Installing ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.6.1\nmake install\nmake cel-key\n")),(0,i.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-output"},"celestia version\nSemantic version: v0.6.1\nCommit: 3a58679ed84da966d01173f32780134c7b830594\nBuild Date: Thu Dec 15 10:19:22 PM UTC 2022\nSystem version: amd64/linux\nGolang version: go1.19.1\n"))),(0,i.kt)(r.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,i.kt)("p",null,"Installing ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.6.1\nmake go-install\nmake cel-key\n")),(0,i.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-output"},"celestia version\nSemantic version: v0.6.1\nCommit: 3a58679ed84da966d01173f32780134c7b830594\nBuild Date: Thu Dec 15 10:19:22 PM UTC 2022\nSystem version: amd64/linux\nGolang version: go1.19.1\n"))),(0,i.kt)(r.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,i.kt)("p",null,"Installing ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.6.1\nmake go-install\nmake cel-key\n")),(0,i.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-output"},"celestia version\nSemantic version: v0.6.1\nCommit: 3a58679ed84da966d01173f32780134c7b830594\nBuild Date: Thu Dec 15 10:19:22 PM UTC 2022\nSystem version: amd64/linux\nGolang version: go1.19.1\n"))))),(0,i.kt)(r.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,i.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,i.kt)("p",null,"Installing ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.6.1\nmake install\nmake cel-key\n")),(0,i.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ celestia version\nSemantic version: v0.6.1\nCommit: 3a58679ed84da966d01173f32780134c7b830594\nBuild Date: Thu Dec 15 10:19:22 PM UTC 2022\nSystem version: amd64/linux\nGolang version: go1.19.1\n"))),(0,i.kt)(r.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,i.kt)("p",null,"Installing ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.6.1\nmake install\nmake cel-key\n")),(0,i.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ celestia version\nSemantic version: v0.6.1\nCommit: 3a58679ed84da966d01173f32780134c7b830594\nBuild Date: Thu Dec 15 10:19:22 PM UTC 2022\nSystem version: amd64/linux\nGolang version: go1.19.1\n"))),(0,i.kt)(r.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,i.kt)("p",null,"Installing ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.6.1\nmake go-install\nmake cel-key\n")),(0,i.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ celestia version\nSemantic version: v0.6.1\nCommit: 3a58679ed84da966d01173f32780134c7b830594\nBuild Date: Thu Dec 15 10:19:22 PM UTC 2022\nSystem version: amd64/linux\nGolang version: go1.19.1\n"))),(0,i.kt)(r.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,i.kt)("p",null,"Installing ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\ngit checkout tags/v0.6.1\nmake go-install\nmake cel-key\n")),(0,i.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ celestia version\nSemantic version: v0.6.1\nCommit: 3a58679ed84da966d01173f32780134c7b830594\nBuild Date: Thu Dec 15 10:19:22 PM UTC 2022\nSystem version: amd64/linux\nGolang version: go1.19.1\n")))))),(0,i.kt)("h2",{id:"network-selection"},"Network Selection"),(0,i.kt)("p",null,"Note: If you do not select a network, the default network will be 'Mocha'."),(0,i.kt)(l.Z,{groupId:"network",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,i.kt)("p",null,"You can perform network selection in ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node")," between Arabica and\nMocha. However, you should note that networks work best on the ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-node"),"\nversions mentioned above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init --p2p.network arabica\ncelestia light start --p2p.network arabica --core.ip <address> --core.grpc.port <port> --gateway --gateway.addr <ip-address> --gateway.port <port>\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: It is advised before switching networks to reinitialize\nyour node via ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," command. This is due to an old config being present.\nRe-initialisation will reset the config.")),(0,i.kt)("h3",{id:"errors"},"Errors"),(0,i.kt)("p",null,"If you an encounter an error, it is likely that an old config file is present:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Error: nodebuilder/share: interval must be positive; nodebuilder/core: invalid IP addr given:\n\n# or\n\nError: nodebuilder/share: interval must be positive\n")),(0,i.kt)("p",null,"You can re-initialize your node with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~./<path-to-node-store> && celestia light init --p2p.network <network-name>\n")),(0,i.kt)("p",null,"Here's an example for Arabica:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~./celestia-light-arabica-2 && celestia light init --p2p.network arabica\n")),(0,i.kt)("p",null,"Your output will look similar to below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'2022-11-01T22:23:19.581+0100    INFO    node    nodebuilder/init.go:20  Initializing Light Node Store over \'/Users/joshstein/.celestia-light-arabica-2\'\n2022-11-01T22:23:19.582+0100    INFO    node    nodebuilder/init.go:51  Saving config   {"path": "/Users/joshstein/.celestia-light-arabica-2/config.toml"}\n2022-11-01T22:23:19.582+0100    INFO    node    nodebuilder/init.go:52  Node Store initialized\n')),(0,i.kt)("p",null,"Then start your node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --p2p.network arabica --core.ip <address> --core.grpc.port <port> --gateway --gateway.addr <ip-address> --gateway.port <port>\n"))),(0,i.kt)(r.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init --p2p.network mocha \ncelestia light start --p2p.network mocha --core.ip <address> --core.grpc.port <port> --gateway --gateway.addr <ip-address> --gateway.port <port>\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: It is advised before switching networks to reinitialize\nyour node via ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," command. This is due to an old config being present.\nRe-initialisation will reset the config.")),(0,i.kt)("h3",{id:"errors-1"},"Errors"),(0,i.kt)("p",null,"If you an encounter an error, it is likely that an old config file is present:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"Error: nodebuilder/share: interval must be positive; nodebuilder/core: invalid IP addr given:\n\n# or\n\nError: nodebuilder/share: interval must be positive\n")),(0,i.kt)("p",null,"You can re-initialize your node with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~./<path-to-node-store> && celestia light init --p2p.network <network-name>\n")),(0,i.kt)("p",null,"Here's an example for Arabica:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~./celestia-light-mocha && celestia light init --p2p.network mocha\n")),(0,i.kt)("p",null,"Your output will look similar to below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'2022-11-01T22:23:19.581+0100    INFO    node    nodebuilder/init.go:20  Initializing Light Node Store over \'/Users/joshstein/.celestia-light\'\n2022-11-01T22:23:19.582+0100    INFO    node    nodebuilder/init.go:51  Saving config   {"path": "/Users/joshstein/.celestia-light/config.toml"}\n2022-11-01T22:23:19.582+0100    INFO    node    nodebuilder/init.go:52  Node Store initialized\n')),(0,i.kt)("p",null,"Then start your node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --p2p.network mocha --core.ip <address> --core.grpc.port <port> --gateway --gateway.addr <ip-address> --gateway.port <port>\n")))))}m.isMDXComponent=!0}}]);