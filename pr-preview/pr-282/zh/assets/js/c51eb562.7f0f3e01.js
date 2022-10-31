"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1379],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),y=o,k=u["".concat(s,".").concat(y)]||u[y]||c[y]||a;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4283:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={sidebar_label:"Keys"},s="Using the cel-key utility",p={unversionedId:"nodes/keys",id:"nodes/keys",title:"Using the cel-key utility",description:"Inside the celestia-node repository is a utility called cel-key that uses",source:"@site/docs/nodes/keys.md",sourceDirName:"nodes",slug:"/nodes/keys",permalink:"/pr-preview/pr-282/zh/nodes/keys",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/keys.md",tags:[],version:"current",frontMatter:{sidebar_label:"Keys"},sidebar:"nodes",previous:{title:"SystemD",permalink:"/pr-preview/pr-282/zh/nodes/systemd"},next:{title:"Devops Resources",permalink:"/pr-preview/pr-282/zh/nodes/devops-resources"}},d={},c=[{value:"Installation",id:"installation",level:2},{value:"Steps for generating <strong>bridge</strong> node keys",id:"steps-for-generating-bridge-node-keys",level:2},{value:"Steps for generating <strong>full</strong> node keys",id:"steps-for-generating-full-node-keys",level:2},{value:"Steps for generating <strong>light</strong> node keys",id:"steps-for-generating-light-node-keys",level:2},{value:"Steps for exporting <strong>light</strong> node keys",id:"steps-for-exporting-light-node-keys",level:2}],u={toc:c};function y(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-the-cel-key-utility"},"Using the cel-key utility"),(0,a.kt)("p",null,"Inside the celestia-node repository is a utility called ",(0,a.kt)("inlineCode",{parentName:"p"},"cel-key")," that uses\nthe key utility provided by Cosmos-SDK under the hood. The utility can be\nused to ",(0,a.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),", and manage keys for any DA node\ntype ",(0,a.kt)("inlineCode",{parentName:"p"},"(bridge || full || light)"),", or just keys in general."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"You need to first pull down the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\n")),(0,a.kt)("p",null,"It can be built using either of the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# dumps binary in current working directory, accessible via `./cel-key`\nmake cel-key\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# installs binary in GOBIN path, accessible via `cel-key`\nmake install-key\n")),(0,a.kt)("p",null,"For the purpose of this guide, we will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"make cel-key")," command."),(0,a.kt)("h2",{id:"steps-for-generating-bridge-node-keys"},"Steps for generating ",(0,a.kt)("strong",{parentName:"h2"},"bridge")," node keys"),(0,a.kt)("p",null,"To generate a key for a Celestia bridge node, do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key_name> --keyring-backend test --node.type bridge\n")),(0,a.kt)("p",null,"This will load the key <key_name> into the directory of the bridge node."),(0,a.kt)("h2",{id:"steps-for-generating-full-node-keys"},"Steps for generating ",(0,a.kt)("strong",{parentName:"h2"},"full")," node keys"),(0,a.kt)("p",null,"To generate a key for a Celestia full node, do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key_name> --keyring-backend test --node.type full\n")),(0,a.kt)("p",null,"This will load the key <key_name> into the directory of the full node."),(0,a.kt)("h2",{id:"steps-for-generating-light-node-keys"},"Steps for generating ",(0,a.kt)("strong",{parentName:"h2"},"light")," node keys"),(0,a.kt)("p",null,"To generate a key for a Celestia light node, do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key_name> --keyring-backend test --node.type light\n")),(0,a.kt)("p",null,"This will load the key <key_name> into the directory of the light node."),(0,a.kt)("h2",{id:"steps-for-exporting-light-node-keys"},"Steps for exporting ",(0,a.kt)("strong",{parentName:"h2"},"light")," node keys"),(0,a.kt)("p",null,"You can export a private key from the local keyring in encrypted and\nASCII-armored format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --node.type light\n")),(0,a.kt)("p",null,"You can then import your key with ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-appd"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys import <new-key-name> <key-file-location>\n")))}y.isMDXComponent=!0}}]);