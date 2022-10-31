"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4030],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3401:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=t(7462),o=t(3366),l=(t(7294),t(3905)),a=["components"],i={sidebar_label:"CosmWasm Dependencies"},s="CosmWasm Dependency Installations",p={unversionedId:"developers/cosmwasm-dependency",id:"developers/cosmwasm-dependency",title:"CosmWasm Dependency Installations",description:"Environment Setup",source:"@site/docs/developers/cosmwasm-dependency.md",sourceDirName:"developers",slug:"/developers/cosmwasm-dependency",permalink:"/pr-preview/pr-282/developers/cosmwasm-dependency",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-dependency.md",tags:[],version:"current",frontMatter:{sidebar_label:"CosmWasm Dependencies"},sidebar:"developers",previous:{title:"CosmWasm Overview",permalink:"/pr-preview/pr-282/developers/cosmwasm"},next:{title:"Setup Network Environment",permalink:"/pr-preview/pr-282/developers/cosmwasm-environment"}},u={},c=[{value:"Environment Setup",id:"environment-setup",level:2},{value:"Golang Dependency",id:"golang-dependency",level:2},{value:"Rust Installation",id:"rust-installation",level:2},{value:"Rustup",id:"rustup",level:3},{value:"Docker Installation",id:"docker-installation",level:2},{value:"wasmd Installation",id:"wasmd-installation",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cosmwasm-dependency-installations"},"CosmWasm Dependency Installations"),(0,l.kt)("h2",{id:"environment-setup"},"Environment Setup"),(0,l.kt)("p",null,"For this tutorial, we will be using ",(0,l.kt)("inlineCode",{parentName:"p"},"curl")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"jq")," as helpful\ntools."),(0,l.kt)("p",null,"You can follow the guide on installing them ",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-282/developers/environment#setting-up-dependencies"},"here"),"."),(0,l.kt)("h2",{id:"golang-dependency"},"Golang Dependency"),(0,l.kt)("p",null,"The Golang version used for this tutorial is v1.18+"),(0,l.kt)("p",null,"If you are using a Linux distribution, you can install Golang\nby following our tutorial ",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-282/developers/environment#install-golang"},"here"),"."),(0,l.kt)("h2",{id:"rust-installation"},"Rust Installation"),(0,l.kt)("h3",{id:"rustup"},"Rustup"),(0,l.kt)("p",null,"First, before installing Rust, you would need to install ",(0,l.kt)("inlineCode",{parentName:"p"},"rustup"),"."),(0,l.kt)("p",null,"On Mac/Linux systems, here are the commands for installing it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,l.kt)("p",null,"After installation, follow the commands here to setup Rust."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"rustup default stable\ncargo version\n\nrustup target list --installed\nrustup target add wasm32-unknown-unknown\n")),(0,l.kt)("h2",{id:"docker-installation"},"Docker Installation"),(0,l.kt)("p",null,"We will be using Docker later in this tutorial for compiling a smart contract\nto use a small footprint."),(0,l.kt)("p",null,"We recommend installing Docker on your machine."),(0,l.kt)("p",null,"Examples on how to install it on Linux are found ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/"},"here"),"."),(0,l.kt)("p",null,"Find the right instructions specific for your OS."),(0,l.kt)("h2",{id:"wasmd-installation"},"wasmd Installation"),(0,l.kt)("p",null,"Here, we are going to pull down the ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmd")," repository and replace Tendermint\nwith Rollmint. Rollmint is a drop-in replacement for Tendermint that allows\nCosmos-SDK applications to connect to Celestia's Data Availability network."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/CosmWasm/wasmd.git\ncd wasmd\ngit fetch --tags\ngit checkout v0.27.0\ngo mod edit -replace github.com/cosmos/cosmos-sdk=github.com/celestiaorg/cosmos-sdk-rollmint@v0.46.1-rollmint-v0.4.0\ngo mod tidy \ngo mod download\nmake install\n")))}m.isMDXComponent=!0}}]);