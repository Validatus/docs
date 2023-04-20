"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4048],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(a),p=r,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),i=a(2466),s=a(6550),l=a(1980),c=a(7392),d=a(12);function h(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??h(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=u(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,c]=m({queryString:a,groupId:n}),[h,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=l??h;return p({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var f=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=d.indexOf(t),n=c[a].value;n!==s&&(h(t),l(n))},p=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:p,onClick:u},i,{className:(0,o.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},4685:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),i=a(5162);const s={sidebar_label:"The lifecycle of a Celestia App transaction"},l="The lifecycle of a Celestia App transaction",c={unversionedId:"concepts/how-celestia-works/transaction-lifecycle",id:"concepts/how-celestia-works/transaction-lifecycle",title:"The lifecycle of a Celestia App transaction",description:"Checking data availability",source:"@site/docs/concepts/how-celestia-works/transaction-lifecycle.md",sourceDirName:"concepts/how-celestia-works",slug:"/concepts/how-celestia-works/transaction-lifecycle",permalink:"/pr-preview/pr-678/fr/concepts/how-celestia-works/transaction-lifecycle",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/concepts/how-celestia-works/transaction-lifecycle.md",tags:[],version:"current",frontMatter:{sidebar_label:"The lifecycle of a Celestia App transaction"},sidebar:"concepts",previous:{title:"Celestia's data availability layer",permalink:"/pr-preview/pr-678/fr/concepts/how-celestia-works/data-availability-layer"},next:{title:"Data Availability FAQ",permalink:"/pr-preview/pr-678/fr/concepts/data-availability-faq"}},d={},h=[{value:"Checking data availability",id:"checking-data-availability",level:2}],u={toc:h},p="wrapper";function m(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-lifecycle-of-a-celestia-app-transaction"},"The lifecycle of a Celestia App transaction"),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,r.kt)("p",null,"Users request the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-app")," to make data available by\nsending ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transactions. Every such transaction consists\nof the identity of the sender, the data to be made available, also\nreferred to as the message, the data size, the namespace ID, and\na signature. Every block producer batches multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForBlob"),"\ntransactions into a block."),(0,r.kt)("p",null,"Before proposing the block though, the producer passes it to the\nstate machine via ABCI++, where each ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transaction is\nsplit into a namespaced message (denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"Msg")," in the figure below),\ni.e., the data together with the namespace ID, and an executable\ntransaction (denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"e-Tx")," in the figure below) that does not\ncontain the data, but only a commitment that can be used at a later\ntime to prove that the data was indeed made available."),(0,r.kt)("p",null,"Thus, the block data consists of data partitioned into namespaces\nand executable transactions. Note that only these transactions are\nexecuted by the Celestia state machine once the block is committed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Lifecycle of a `celestia-app` Transaction",src:a(1293).Z,width:"3000",height:"1203"})),(0,r.kt)("p",null,"Next, the block producer adds to the block header a commitment\nof the block data. As described ",(0,r.kt)("a",{parentName:"p",href:"../data-availability-layer"},"here"),",\nthe commitment is the Merkle root of the 4k intermediate Merkle roots\n(i.e., one for each row and column of the extended matrix).\nTo compute this commitment, the block producer performs the following operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It splits the executable transactions and the namespaced data\ninto shares. Every share consists of some bytes prefixed by a\nnamespace ID. To this end, the executable transactions are associated\nwith a reserved namespace."),(0,r.kt)("li",{parentName:"ul"},"It arranges these shares into a square matrix (row-wise). Note that\nthe shares are padded to the next power of two. The outcome square\nof size k \xd7 k is referred to as the original data."),(0,r.kt)("li",{parentName:"ul"},"It extends the original data to a 2k \xd7 2k square matrix using\nthe 2-dimensional Reed-Solomon encoding scheme described above.\nThe extended shares (i.e., containing erasure data) are associated\nwith another reserved namespace."),(0,r.kt)("li",{parentName:"ul"},"It computes a commitment for every row and column of the extended\nmatrix using the NMTs described above.")),(0,r.kt)("p",null,"Thus, the commitment of the block data is the root of a Merkle tree\nwith the leaves the roots of a forest of Namespaced Merkle subtrees,\none for every row and column of the extended matrix.")),(0,r.kt)(i.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("p",null,"Users request the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-app")," to make data available by\nsending ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForData")," transactions. Every such transaction consists\nof the identity of the sender, the data to be made available, also\nreferred to as the message, the data size, the namespace ID, and\na signature. Every block producer batches multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForData"),"\ntransactions into a block."),(0,r.kt)("p",null,"Before proposing the block though, the producer passes it to the\nstate machine via ABCI++, where each ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForData")," transaction is\nsplit into a namespaced message (denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"Msg")," in the figure below),\ni.e., the data together with the namespace ID, and an executable\ntransaction (denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"e-Tx")," in the figure below) that does not\ncontain the data, but only a commitment that can be used at a later\ntime to prove that the data was indeed made available."),(0,r.kt)("p",null,"Thus, the block data consists of data partitioned into namespaces\nand executable transactions. Note that only these transactions are\nexecuted by the Celestia state machine once the block is committed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Lifecycle of a `celestia-app` Transaction",src:a(1293).Z,width:"3000",height:"1203"})),(0,r.kt)("p",null,"Next, the block producer adds to the block header a commitment\nof the block data. As described ",(0,r.kt)("a",{parentName:"p",href:"../data-availability-layer"},"here"),",\nthe commitment is the Merkle root of the 4k intermediate Merkle roots\n(i.e., one for each row and column of the extended matrix).\nTo compute this commitment, the block producer performs the following operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It splits the executable transactions and the namespaced data\ninto shares. Every share consists of some bytes prefixed by a\nnamespace ID. To this end, the executable transactions are associated\nwith a reserved namespace."),(0,r.kt)("li",{parentName:"ul"},"It arranges these shares into a square matrix (row-wise). Note that\nthe shares are padded to the next power of two. The outcome square\nof size k \xd7 k is referred to as the original data."),(0,r.kt)("li",{parentName:"ul"},"It extends the original data to a 2k \xd7 2k square matrix using\nthe 2-dimensional Reed-Solomon encoding scheme described above.\nThe extended shares (i.e., containing erasure data) are associated\nwith another reserved namespace."),(0,r.kt)("li",{parentName:"ul"},"It computes a commitment for every row and column of the extended\nmatrix using the NMTs described above.")),(0,r.kt)("p",null,"Thus, the commitment of the block data is the root of a Merkle tree\nwith the leaves the roots of a forest of Namespaced Merkle subtrees,\none for every row and column of the extended matrix.")),(0,r.kt)(i.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,r.kt)("p",null,"Users request the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-app")," to make data available by\nsending ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transactions. Every such transaction consists\nof the identity of the sender, the data to be made available, also\nreferred to as the message, the data size, the namespace ID, and\na signature. Every block producer batches multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForBlob"),"\ntransactions into a block."),(0,r.kt)("p",null,"Before proposing the block though, the producer passes it to the\nstate machine via ABCI++, where each ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transaction is\nsplit into a namespaced message (denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"Msg")," in the figure below),\ni.e., the data together with the namespace ID, and an executable\ntransaction (denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"e-Tx")," in the figure below) that does not\ncontain the data, but only a commitment that can be used at a later\ntime to prove that the data was indeed made available."),(0,r.kt)("p",null,"Thus, the block data consists of data partitioned into namespaces\nand executable transactions. Note that only these transactions are\nexecuted by the Celestia state machine once the block is committed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Lifecycle of a `celestia-app` Transaction",src:a(1293).Z,width:"3000",height:"1203"})),(0,r.kt)("p",null,"Next, the block producer adds to the block header a commitment\nof the block data. As described ",(0,r.kt)("a",{parentName:"p",href:"../data-availability-layer"},"here"),",\nthe commitment is the Merkle root of the 4k intermediate Merkle roots\n(i.e., one for each row and column of the extended matrix).\nTo compute this commitment, the block producer performs the following operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It splits the executable transactions and the namespaced data\ninto shares. Every share consists of some bytes prefixed by a\nnamespace ID. To this end, the executable transactions are associated\nwith a reserved namespace."),(0,r.kt)("li",{parentName:"ul"},"It arranges these shares into a square matrix (row-wise). Note that\nthe shares are padded to the next power of two. The outcome square\nof size k \xd7 k is referred to as the original data."),(0,r.kt)("li",{parentName:"ul"},"It extends the original data to a 2k \xd7 2k square matrix using\nthe 2-dimensional Reed-Solomon encoding scheme described above.\nThe extended shares (i.e., containing erasure data) are associated\nwith another reserved namespace."),(0,r.kt)("li",{parentName:"ul"},"It computes a commitment for every row and column of the extended\nmatrix using the NMTs described above.")),(0,r.kt)("p",null,"Thus, the commitment of the block data is the root of a Merkle tree\nwith the leaves the roots of a forest of Namespaced Merkle subtrees,\none for every row and column of the extended matrix."))),(0,r.kt)("h2",{id:"checking-data-availability"},"Checking data availability"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"DA network",src:a(2693).Z,width:"3000",height:"1453"})),(0,r.kt)("p",null,"To enhance connectivity, the celestia-node augments the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-app"),"\nwith a separate libp2p network, i.e., the so-called ",(0,r.kt)("em",{parentName:"p"},"DA network"),",\nthat serves DAS requests."),(0,r.kt)("p",null,"Light nodes connect to a celestia-node in the DA network, listen to\nextended block headers (i.e., the block headers together with the\nrelevant DA metadata, such as the 4k intermediate Merkle roots), and\nperform DAS on the received headers (i.e., ask for random data chunks)."),(0,r.kt)("p",null,"Note that although it is recommended, performing DAS is optional -- light\nnodes could just trust that the data corresponding to the commitments in\nthe block headers was indeed made available by the Celestia DA layer.\nIn addition, light nodes can also submit transactions to the ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-app"),",\ni.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForData")," transactions."),(0,r.kt)("p",null,"While performing DAS for a block header, every light node queries Celestia\nNodes for a number of random data chunks from the extended matrix and the\ncorresponding Merkle proofs. If all the queries are successful, then the\nlight node accepts the block header as valid (from a DA perspective)."),(0,r.kt)("p",null,"If at least one of the queries fails (i.e., either the data chunk is not\nreceived or the Merkle proof is invalid), then the light node rejects the\nblock header and tries again later. The retrial is necessary to deal with\nfalse negatives, i.e., block headers being rejected although the block\ndata is available. This may happen due to network congestion for example."),(0,r.kt)("p",null,"Alternatively, light nodes may accept a block header although the data\nis not available, i.e., a ",(0,r.kt)("em",{parentName:"p"},"false positive"),". This is possible since the\nsoundness property (i.e., if an honest light node accepts a block as available,\nthen at least one honest full node will eventually have the entire block data)\nis probabilistically guaranteed (for more details, take a look at the\n",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1809.09044"},"original paper"),")."),(0,r.kt)("p",null,"By fine tuning Celestia's parameters (e.g., the number of data chunks sampled\nby each light node) the likelihood of false positives can be sufficiently\nreduced such that block producers have no incentive to withhold the block data."))}m.isMDXComponent=!0},2693:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/consensus-da-e09f663089be80daa0f62397bfc8fc78.png"},1293:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tx-lifecycle-e81f4ae904bbaae8628d9a848bacd509.png"}}]);