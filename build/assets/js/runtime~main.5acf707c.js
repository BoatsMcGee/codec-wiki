(()=>{"use strict";var e,a,d,c,f,b={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var d=t[e]={id:e,loaded:!1,exports:{}};return b[e].call(d.exports,d,d.exports,r),d.loaded=!0,d.exports}r.m=b,r.c=t,e=[],r.O=(a,d,c,f)=>{if(!d){var b=1/0;for(i=0;i<e.length;i++){d=e[i][0],c=e[i][1],f=e[i][2];for(var t=!0,o=0;o<d.length;o++)(!1&f||b>=f)&&Object.keys(r.O).every((e=>r.O[e](d[o])))?d.splice(o--,1):(t=!1,f<b&&(b=f));if(t){e.splice(i--,1);var n=c();void 0!==n&&(a=n)}}return a}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[d,c,f]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},d=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,c){if(1&c&&(e=this(e)),8&c)return e;if("object"==typeof e&&e){if(4&c&&e.__esModule)return e;if(16&c&&"function"==typeof e.then)return e}var f=Object.create(null);r.r(f);var b={};a=a||[null,d({}),d([]),d(d)];for(var t=2&c&&e;"object"==typeof t&&!~a.indexOf(t);t=d(t))Object.getOwnPropertyNames(t).forEach((a=>b[a]=()=>e[a]));return b.default=()=>e,r.d(f,b),f},r.d=(e,a)=>{for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,d)=>(r.f[d](e,a),a)),[])),r.u=e=>"assets/js/"+({17:"7574d07a",53:"935f2afb",537:"9b4bf0ad",837:"4b506820",948:"8717b14a",1034:"46e4c4c4",1056:"311c973b",1062:"5dfd82d3",1088:"3e2aba88",1239:"a5c5f566",1369:"fae0ffdd",1437:"68385a82",1444:"6f58bdf2",1606:"cce01883",1702:"ed0663ce",1746:"7680a4d5",1810:"16a2ecb1",1914:"d9f32620",1923:"8c5da4da",2e3:"a07c3f26",2210:"442d39bc",2267:"59362658",2325:"5bc226cb",2362:"e273c56f",2510:"1dba1ecf",2535:"814f3328",2711:"c7a0e1e8",2798:"d92a3c43",2859:"18c41134",2902:"f98cc194",2984:"f8ac8e95",3085:"1f391b9e",3089:"a6aa9e1f",3146:"13d564a8",3155:"6eaa2e58",3173:"729fe1da",3241:"7ecaa93b",3416:"ec2b09d3",3514:"73664a40",3599:"b31956d8",3608:"9e4087bc",3722:"87861d43",3792:"dff1c289",3847:"4faca80f",3899:"1cb05ddd",4002:"cd1d8cd3",4013:"01a85c17",4193:"f55d3e7a",4195:"c4f5d8e4",4288:"ad895e75",4485:"f8f72b9f",4607:"533a09ca",5279:"f3f5d5be",5302:"1d129381",5589:"5c868d36",5676:"68768e4f",5797:"8e385c6f",6031:"aea4c9a8",6103:"ccc49370",6204:"56ce417d",6504:"822bd8ab",6691:"5a75d36c",6755:"e44a2883",6761:"26a4d598",6997:"50cc20ba",7061:"a0887d39",7066:"9c7aee58",7116:"5518d211",7305:"ebfee794",7363:"56ac595f",7414:"393be207",7671:"b0d95fb7",7918:"17896441",8007:"4f425cbc",8305:"3ef35d20",8606:"f594c766",8610:"6875c492",8636:"f4f34a3a",8685:"96daa04a",8708:"d7def884",8818:"1e4232ab",8833:"a5eab855",9003:"925b3f96",9060:"c177ddec",9140:"0e272b0d",9514:"1be78505",9612:"2c0077b9",9642:"7661071f",9671:"0e384e19",9768:"3ca2a0fe",9817:"14eb3368"}[e]||e)+"."+{17:"8233e037",53:"4a7b1795",210:"a5718c50",537:"3f3817fe",837:"38e2a40f",948:"b24464e1",1034:"5b9d6cc0",1056:"4a4c7128",1062:"aa1b2580",1088:"f3fea429",1239:"9d828f2f",1369:"0d5aae80",1437:"b8fac6ec",1444:"5f9d972f",1606:"e054e104",1702:"3ab1fa86",1746:"6d2abc87",1810:"80428ab1",1914:"44c5b4b4",1923:"79212b0c",2e3:"462b8cd0",2210:"290c64e5",2267:"8f9dfe3d",2325:"458088bf",2362:"b6633f52",2510:"5bcb9e9b",2529:"cc86763f",2535:"cf57578e",2711:"0205ff17",2798:"4409b684",2859:"db1f7bdd",2902:"851b31dc",2984:"76f38dfb",3085:"ce8470db",3089:"623b1d50",3146:"fdf6baee",3155:"7646287e",3173:"4e9c28a6",3241:"3dd28956",3416:"b5d6e7b5",3514:"8a63e5d9",3599:"3dceddb3",3608:"6e6893a9",3722:"cb2e1c4f",3792:"00034baf",3847:"36795b82",3899:"0e6db7c8",4002:"08294b7f",4013:"36c9a6f9",4193:"37bdeecf",4195:"1d688811",4288:"d30edb06",4485:"9c8db0f9",4607:"a14363e3",4972:"f195599e",5279:"0bcbba50",5302:"d61f3f36",5589:"7a4a22b9",5676:"ebe105de",5797:"438ac251",6031:"cfa0dcb6",6103:"c4bc4215",6204:"81ce1666",6504:"0c4f916d",6691:"8cd38657",6755:"82f71fda",6761:"a8fe51ba",6997:"862b2681",7061:"3faedfa5",7066:"8e1af822",7116:"d2c5014b",7305:"bc6bd734",7363:"700be9b8",7414:"f039ef35",7671:"5f45cc21",7918:"c0c74026",8007:"9e0bfa22",8305:"2df9a5a5",8606:"7ec15140",8610:"194e0329",8636:"af7eb6f7",8685:"c72bceec",8708:"7fe450b8",8818:"c78cc216",8833:"da2efc53",9003:"05824b0f",9060:"674440ec",9140:"8c8a5308",9514:"bb0e9f7f",9612:"b88246c6",9642:"f7199200",9671:"749f6560",9768:"fa2fd147",9817:"23726322"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),c={},f="av-1-wiki:",r.l=(e,a,d,b)=>{if(c[e])c[e].push(a);else{var t,o;if(void 0!==d)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+d){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",f+d),t.src=e),c[e]=[a];var l=(a,d)=>{t.onerror=t.onload=null,clearTimeout(s);var f=c[e];if(delete c[e],t.parentNode&&t.parentNode.removeChild(t),f&&f.forEach((e=>e(d))),a)return a(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/av1-wiki.github.io/",r.gca=function(e){return e={17896441:"7918",59362658:"2267","7574d07a":"17","935f2afb":"53","9b4bf0ad":"537","4b506820":"837","8717b14a":"948","46e4c4c4":"1034","311c973b":"1056","5dfd82d3":"1062","3e2aba88":"1088",a5c5f566:"1239",fae0ffdd:"1369","68385a82":"1437","6f58bdf2":"1444",cce01883:"1606",ed0663ce:"1702","7680a4d5":"1746","16a2ecb1":"1810",d9f32620:"1914","8c5da4da":"1923",a07c3f26:"2000","442d39bc":"2210","5bc226cb":"2325",e273c56f:"2362","1dba1ecf":"2510","814f3328":"2535",c7a0e1e8:"2711",d92a3c43:"2798","18c41134":"2859",f98cc194:"2902",f8ac8e95:"2984","1f391b9e":"3085",a6aa9e1f:"3089","13d564a8":"3146","6eaa2e58":"3155","729fe1da":"3173","7ecaa93b":"3241",ec2b09d3:"3416","73664a40":"3514",b31956d8:"3599","9e4087bc":"3608","87861d43":"3722",dff1c289:"3792","4faca80f":"3847","1cb05ddd":"3899",cd1d8cd3:"4002","01a85c17":"4013",f55d3e7a:"4193",c4f5d8e4:"4195",ad895e75:"4288",f8f72b9f:"4485","533a09ca":"4607",f3f5d5be:"5279","1d129381":"5302","5c868d36":"5589","68768e4f":"5676","8e385c6f":"5797",aea4c9a8:"6031",ccc49370:"6103","56ce417d":"6204","822bd8ab":"6504","5a75d36c":"6691",e44a2883:"6755","26a4d598":"6761","50cc20ba":"6997",a0887d39:"7061","9c7aee58":"7066","5518d211":"7116",ebfee794:"7305","56ac595f":"7363","393be207":"7414",b0d95fb7:"7671","4f425cbc":"8007","3ef35d20":"8305",f594c766:"8606","6875c492":"8610",f4f34a3a:"8636","96daa04a":"8685",d7def884:"8708","1e4232ab":"8818",a5eab855:"8833","925b3f96":"9003",c177ddec:"9060","0e272b0d":"9140","1be78505":"9514","2c0077b9":"9612","7661071f":"9642","0e384e19":"9671","3ca2a0fe":"9768","14eb3368":"9817"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,d)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var f=new Promise(((d,f)=>c=e[a]=[d,f]));d.push(c[2]=f);var b=r.p+r.u(a),t=new Error;r.l(b,(d=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var f=d&&("load"===d.type?"missing":d.type),b=d&&d.target&&d.target.src;t.message="Loading chunk "+a+" failed.\n("+f+": "+b+")",t.name="ChunkLoadError",t.type=f,t.request=b,c[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,d)=>{var c,f,b=d[0],t=d[1],o=d[2],n=0;if(b.some((a=>0!==e[a]))){for(c in t)r.o(t,c)&&(r.m[c]=t[c]);if(o)var i=o(r)}for(a&&a(d);n<b.length;n++)f=b[n],r.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return r.O(i)},d=self.webpackChunkav_1_wiki=self.webpackChunkav_1_wiki||[];d.forEach(a.bind(null,0)),d.push=a.bind(null,d.push.bind(d))})()})();