"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5232],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=o,m=c["".concat(s,".").concat(f)]||c[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3842:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_label:"Config.toml Guide"},s="Config.toml breakdown",d={unversionedId:"nodes/config-toml",id:"nodes/config-toml",title:"Config.toml breakdown",description:"- Config.toml breakdown",source:"@site/docs/nodes/config-toml.md",sourceDirName:"nodes",slug:"/nodes/config-toml",permalink:"/pr-preview/pr-282/nodes/config-toml",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/config-toml.md",tags:[],version:"current",frontMatter:{sidebar_label:"Config.toml Guide"},sidebar:"nodes",previous:{title:"Devops Resources",permalink:"/pr-preview/pr-282/nodes/devops-resources"}},u={},p=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Understanding config.toml",id:"understanding-configtoml",level:2},{value:"Core",id:"core",level:3},{value:"P2P",id:"p2p",level:3},{value:"Bootstrap",id:"bootstrap",level:4},{value:"Mutual peers",id:"mutual-peers",level:4},{value:"Services",id:"services",level:3},{value:"TrustedHash and TrustedPeer",id:"trustedhash-and-trustedpeer",level:4}],c={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configtoml-breakdown"},"Config.toml breakdown"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configtoml-breakdown"},"Config.toml breakdown"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#pre-requisites"},"Pre-Requisites")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#understanding-configtoml"},"Understanding config.toml"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#core"},"[Core]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#p2p"},"[P2P]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#bootstrap"},"Bootstrap")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#mutual-peers"},"Mutual Peers")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#services"},"[Services]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#trustedhash-and-trustedpeer"},"TrustedHash and TrustedPeer"))))))))),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("p",null,"Please, make sure that you have installed and initialized celestia node"),(0,a.kt)("h2",{id:"understanding-configtoml"},"Understanding config.toml"),(0,a.kt)("p",null,"After initialization, for any type of node, you will find a\n",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," in the following path (default location):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.celestia-bridge/config.toml")," for bridge node"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.celestia-light/config.toml")," for light node")),(0,a.kt)("p",null,"Let's break down some of the most used sections."),(0,a.kt)("h3",{id:"core"},"[Core]"),(0,a.kt)("p",null,"This section is needed for the Celestia Bridge Node.\nBy default, ",(0,a.kt)("inlineCode",{parentName:"p"},"Remote = false"),". Still for devnet, we are going\nto use the remote core option and this can also be set\nby the command line flag ",(0,a.kt)("inlineCode",{parentName:"p"},"--core.remote"),"."),(0,a.kt)("h3",{id:"p2p"},"[P2P]"),(0,a.kt)("h4",{id:"bootstrap"},"Bootstrap"),(0,a.kt)("p",null,"Bootstrappers help new nodes to find peers faster in the network.\nBy default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bootstrapper = false")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"BootstrapPeers")," is empty.\nIf you want your node to be a bootstrapper, then activate ",(0,a.kt)("inlineCode",{parentName:"p"},"Bootstrapper = true"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"BootstrapPeers")," are already provided by default during initialisation.\nIf you want to add your own manually, you need to provide the\nmultiaddresses of the peers."),(0,a.kt)("h4",{id:"mutual-peers"},"Mutual peers"),(0,a.kt)("p",null,"The purpose of this config is to set up a bidirectional communication.\nThis is usually the case for Celestia Bridge Nodes. In addition, you\nneed to change the field ",(0,a.kt)("inlineCode",{parentName:"p"},"PeerExchange")," from false to true."),(0,a.kt)("h3",{id:"services"},"[Services]"),(0,a.kt)("h4",{id:"trustedhash-and-trustedpeer"},"TrustedHash and TrustedPeer"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TrustedHash")," is needed to properly initialize a Celestia Bridge\nNode with an already-running ",(0,a.kt)("inlineCode",{parentName:"p"},"Remote")," Celestia Core node. Celestia\nLight Node will take a genesis hash as the trusted one, if no hash\nis manually provided during initialization phase."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TrustedPeers")," is the array of Bridge Nodes' peers that Celestia\nLight Node trusts. By default, bootstrap peers becomes trusted peers\nfor Celestia Light Nodes if a user is not setting the trusted peer params\nin config file."),(0,a.kt)("p",null,"Any Celestia Bridge Node can be a trusted peer for the Light one. However,\nthe Light node by design can not be a trusted peer for another Light Node."))}f.isMDXComponent=!0}}]);