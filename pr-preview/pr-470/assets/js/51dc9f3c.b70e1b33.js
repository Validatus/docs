"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7136],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5348:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return p}});var r=n(3117),o=(n(7294),n(3905));const l={sidebar_label:"Installing Rollmint"},i="Setting Up Rollmint",a={unversionedId:"developers/install-rollmint",id:"developers/install-rollmint",title:"Setting Up Rollmint",description:"Before we continue with building our Wordle App, we need to set up",source:"@site/docs/developers/install-rollmint.md",sourceDirName:"developers",slug:"/developers/install-rollmint",permalink:"/pr-preview/pr-470/developers/install-rollmint",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/install-rollmint.md",tags:[],version:"current",frontMatter:{sidebar_label:"Installing Rollmint"},sidebar:"developers",previous:{title:"Run a Light Node",permalink:"/pr-preview/pr-470/developers/wordle-node"},next:{title:"Module",permalink:"/pr-preview/pr-470/developers/wordle-module"}},c={},p=[{value:"Installing Rollmint",id:"installing-rollmint",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-rollmint"},"Setting Up Rollmint"),(0,o.kt)("p",null,"Before we continue with building our Wordle App, we need to set up\nRollmint on our codebase."),(0,o.kt)("h2",{id:"installing-rollmint"},"Installing Rollmint"),(0,o.kt)("p",null,"Run the following command inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"wordle")," directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/rollkit/cosmos-sdk@v0.46.7-rollkit-v0.6.0-no-fraud-proofs\ngo mod edit -replace github.com/tendermint/tendermint=github.com/celestiaorg/tendermint@v0.34.22-0.20221202214355-3605c597500d\ngo mod tidy\ngo mod download\n")),(0,o.kt)("p",null,"With that, we have Rollmint changes added to the project directory. Now,\nlet's build the Wordle app!"))}s.isMDXComponent=!0}}]);