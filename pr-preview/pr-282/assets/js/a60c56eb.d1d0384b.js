"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9649],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8561:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_label:"Create A Celestia Testnet"},s="Celestia App Network Instantiation Guide",p={unversionedId:"developers/instantiate-testnet",id:"developers/instantiate-testnet",title:"Celestia App Network Instantiation Guide",description:"This guide is for helping instantiate a new testnetwork and following the",source:"@site/docs/developers/instantiate-testnet.md",sourceDirName:"developers",slug:"/developers/instantiate-testnet",permalink:"/pr-preview/pr-282/developers/instantiate-testnet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/instantiate-testnet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Create A Celestia Testnet"},sidebar:"developers",previous:{title:"Creating A Wallet",permalink:"/pr-preview/pr-282/developers/wallet"},next:{title:"Helpful CLI commands",permalink:"/pr-preview/pr-282/developers/celestia-app-commands"}},d={},u=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Setup Dependencies",id:"setup-dependencies",level:2},{value:"Celestia App Installation",id:"celestia-app-installation",level:2},{value:"Spin Up A Celestia Testnet",id:"spin-up-a-celestia-testnet",level:2},{value:"Optional: Reset Working Directory",id:"optional-reset-working-directory",level:3},{value:"Initialize A Working Directory",id:"initialize-a-working-directory",level:3},{value:"Create A New Key",id:"create-a-new-key",level:3},{value:"Add Genesis Account KeyName",id:"add-genesis-account-keyname",level:3},{value:"Optional: Adding Other Validators",id:"optional-adding-other-validators",level:3},{value:"Create the Genesis Transaction For New Chain",id:"create-the-genesis-transaction-for-new-chain",level:3},{value:"Creating the Genesis JSON File",id:"creating-the-genesis-json-file",level:3},{value:"Modify Your Config File",id:"modify-your-config-file",level:3},{value:"Instantiate the Network",id:"instantiate-the-network",level:3}],c={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"celestia-app-network-instantiation-guide"},"Celestia App Network Instantiation Guide"),(0,r.kt)("p",null,"This guide is for helping instantiate a new testnetwork and following the\ncorrect steps to do so with Celestia-App. You should only follow this guide\nif you want to experiment with your own Celestia Testnetwork or if you want\nto test out new features to build as a core developer."),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("p",null,"You can follow hardware requirements ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-282/nodes/validator-node#hardware-requirements"},"here"),"."),(0,r.kt)("h2",{id:"setup-dependencies"},"Setup Dependencies"),(0,r.kt)("p",null,"You can setup dependencies by following the guide ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-282/developers/environment"},"here"),"."),(0,r.kt)("h2",{id:"celestia-app-installation"},"Celestia App Installation"),(0,r.kt)("p",null,"You can install Celestia App by following the guide ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-282/developers/celestia-app"},"here"),"."),(0,r.kt)("h2",{id:"spin-up-a-celestia-testnet"},"Spin Up A Celestia Testnet"),(0,r.kt)("p",null,"If you want to spin up a quick testnet with your friends, you can follow these steps.\nUnless otherwise noted, every step must be done by everyone who wants to\nparticipate in this testnet."),(0,r.kt)("h3",{id:"optional-reset-working-directory"},"Optional: Reset Working Directory"),(0,r.kt)("p",null,"If you have already initialized a working directory for ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-appd")," in the past,\nyou must clean up before reinitializing a new directory. You can do so by running\nthe following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tendermint unsafe-reset-all --home $HOME/.celestia-app\n")),(0,r.kt)("h3",{id:"initialize-a-working-directory"},"Initialize A Working Directory"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"VALIDATOR_NAME=validator1\nCHAIN_ID=testnet\ncelestia-appd init $VALIDATOR_NAME --chain-id $CHAIN_ID\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The value we will use for ",(0,r.kt)("inlineCode",{parentName:"li"},"$VALIDATOR_NAME")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"validator1")," but you should choose\nyour own node name."),(0,r.kt)("li",{parentName:"ul"},"The value we will use for ",(0,r.kt)("inlineCode",{parentName:"li"},"$CHAIN_ID")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"testnet"),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"$CHAIN_ID")," must\nremain the same for everyone participating in this network.")),(0,r.kt)("h3",{id:"create-a-new-key"},"Create A New Key"),(0,r.kt)("p",null,"Next, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"KEY_NAME=validator\ncelestia-appd keys add $KEY_NAME --keyring-backend test\n")),(0,r.kt)("p",null,"This will create a new key, with a name of your choosing.\nSave the output of this command somewhere; you'll need\nthe address generated here later. Here, we set the value of our\nkey ",(0,r.kt)("inlineCode",{parentName:"p"},"$KEY_NAME")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"validator")," for demonstration."),(0,r.kt)("h3",{id:"add-genesis-account-keyname"},"Add Genesis Account KeyName"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'CELES_AMOUNT="10000000000000000000000000utia"\ncelestia-appd add-genesis-account $KEY_NAME $CELES_AMOUNT --keyring-backend test\n')),(0,r.kt)("p",null,"Here ",(0,r.kt)("inlineCode",{parentName:"p"},"$VALIDATOR_NAME")," is the same key name as before; and ",(0,r.kt)("inlineCode",{parentName:"p"},"$AMOUNT"),"\nis something like ",(0,r.kt)("inlineCode",{parentName:"p"},"10000000000000000000000000utia"),"."),(0,r.kt)("h3",{id:"optional-adding-other-validators"},"Optional: Adding Other Validators"),(0,r.kt)("p",null,"If other participants in your testnet also want to be validators,\nrepeat the command above with the specific amount for their public keys."),(0,r.kt)("p",null,"Once all the validators are added, the ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file is created. You need\nto share it with all other validators in your testnet in order for everyone to\nproceed with the following step."),(0,r.kt)("p",null,"You can find the ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," at ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-app/config/genesis.json")),(0,r.kt)("h3",{id:"create-the-genesis-transaction-for-new-chain"},"Create the Genesis Transaction For New Chain"),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"STAKING_AMOUNT=1000000000utia\ncelestia-appd gentx $KEY_NAME $STAKING_AMOUNT --chain-id $CHAIN_ID \\\n  --keyring-backend test\n")),(0,r.kt)("p",null,"This will create the genesis transaction for your new chain.\nHere ",(0,r.kt)("inlineCode",{parentName:"p"},"$STAKING_AMOUNT")," should be at least ",(0,r.kt)("inlineCode",{parentName:"p"},"1000000000utia"),". If you\nprovide too much or too little, you will encounter an error\nwhen starting your node."),(0,r.kt)("p",null,"You will find the generated gentx JSON file inside ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-app/config/gentx/gentx-$KEY_NAME.json")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: If you have other validators in your network, they need to also\nrun the above command with the ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file you shared with\nthem in the previous step.")),(0,r.kt)("h3",{id:"creating-the-genesis-json-file"},"Creating the Genesis JSON File"),(0,r.kt)("p",null,"Once all participants have submitted their gentx JSON files to you,\nyou will pull all those gentx files inside the following directory:\n",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-appd/config/gentx")," and use them to create the final\n",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file."),(0,r.kt)("p",null,"Once you added the gentx files of all the particpants, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd collect-gentxs\n")),(0,r.kt)("p",null,"This command will look for the gentx files in this repo which should\nbe moved to the following directory ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-app/config/gentx"),"."),(0,r.kt)("p",null,"It will update the ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file after in this location\n",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-app/config/genesis.json")," which now includes the gentx\nof other participants."),(0,r.kt)("p",null,"You should then share this final ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file with all the\nother particpants who must add it to their ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-app/config")," directory."),(0,r.kt)("p",null,"Everyone must ensure that they replace their existing ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file with\nthis new one created."),(0,r.kt)("h3",{id:"modify-your-config-file"},"Modify Your Config File"),(0,r.kt)("p",null,"Open the following file ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-app/config/config.toml")," to modify it."),(0,r.kt)("p",null,"Inside the file, add the other participants by modifying the following line to\ninclude other participants as persistent peers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'# Comma separated list of nodes to keep persistent connections to\npersistent_peers = "[validator_address]@[ip_address]:[port],[validator_address]@[ip_address]:[port]"\n')),(0,r.kt)("p",null,"You can find ",(0,r.kt)("inlineCode",{parentName:"p"},"validator_address")," by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tendermint show-node-id\n")),(0,r.kt)("p",null,"The output will be the hex-encoded ",(0,r.kt)("inlineCode",{parentName:"p"},"validator_address"),". The default ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," is 26656."),(0,r.kt)("h3",{id:"instantiate-the-network"},"Instantiate the Network"),(0,r.kt)("p",null,"You can start your node by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd start\n")),(0,r.kt)("p",null,"Now you have a new Celestia Testnet to play around with!"))}h.isMDXComponent=!0}}]);