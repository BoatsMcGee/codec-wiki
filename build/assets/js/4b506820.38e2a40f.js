"use strict";(self.webpackChunkav_1_wiki=self.webpackChunkav_1_wiki||[]).push([[837],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return r?o.createElement(f,a(a({ref:t},c),{},{components:r})):o.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<n;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3376:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=r(7462),i=(r(7294),r(3905));const n={label:"MKVToolNix",order:198},a="MKVToolNix",l={unversionedId:"utilities/MKVToolNix",id:"utilities/MKVToolNix",title:"MKVToolNix",description:"Your average MKVToolNix workload.",source:"@site/docs/utilities/MKVToolNix.md",sourceDirName:"utilities",slug:"/utilities/MKVToolNix",permalink:"/av1-wiki.github.io/docs/utilities/MKVToolNix",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/utilities/MKVToolNix.md",tags:[],version:"current",frontMatter:{label:"MKVToolNix",order:198},sidebar:"tutorialSidebar",previous:{title:"FFMetrics",permalink:"/av1-wiki.github.io/docs/utilities/FFMetrics"},next:{title:"YUView",permalink:"/av1-wiki.github.io/docs/utilities/YUView"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Tips and tricks",id:"tips-and-tricks",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mkvtoolnix"},"MKVToolNix"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/778167033401049098/1104704457096306758/mkvtoolnix-gui_7lzrlaJwOp.png",alt:"Your average MKVToolNix workload."})),(0,i.kt)("p",null,"MKVToolNix is FOSS GUI frontend to set of tools to create, alter and inspect Matroska files under Linux, other Unices and Windows (mkvmerge, mkvinfo, mkvpropedit, mkvextract)."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Fortunately, Moritz Bunkus (Creator) is sane enough to provide downloads for pretty much all desktop operating system normal people use which can be found ",(0,i.kt)("a",{parentName:"p",href:"https://mkvtoolnix.download/downloads.html"},"here"),". If not available, check your local package manager."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,'Drag and drop media files (or use "Add source files") to the application and modify, remux, demux, add streams, drop streams, anything and when done set your output destination and click "Start multiplexing" to start writing the output.'),(0,i.kt)("h2",{id:"tips-and-tricks"},"Tips and tricks"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can import unencrypted BDMV (",(0,i.kt)("inlineCode",{parentName:"li"},"index.bdmv"),") or Blu-ray playlist files into MKVToolNix and it will prompt you to select which stream you would want to import."),(0,i.kt)("li",{parentName:"ol"},'You can set a WebM output in Output > Miscellaneous > "Create WebM compliant file"'),(0,i.kt)("li",{parentName:"ol"},"You can split videos in multiple ways in Output > Splitting. Best of all? No crappy freeze frames unlike in FFmpeg and no re-encoding required.")))}d.isMDXComponent=!0}}]);