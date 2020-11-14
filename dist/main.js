(()=>{var e={192:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var o=n(645),a=n.n(o),r=n(667),i=n.n(r),c=n(553),s=n.n(c),d=n(294),l=n.n(d),u=a()((function(e){return e[1]})),m=i()(s()),p=i()(l());u.push([e.id,"body{margin:0;padding:0;font-family:sans-serif}nav{padding:20px;display:flex;justify-content:center}nav a{display:block;text-decoration:none;padding:10px 15px;background-color:#130d22;color:#fff;font-size:30px;border:1px solid #130d22;margin:0 10px;transition:.4ms all ease-in}nav a:hover{background-color:#fff;color:#130d22}.title{text-align:center;font-size:45px}.img-container{display:grid;grid-template-columns:1fr 1fr;padding:30px}.img-container img{max-width:100%}.img-header{background-image:url("+m+");background-size:cover;background-position:center center;height:50vh;width:100%;position:relative}.img-header .img-title{position:absolute;top:50%;left:3rem;right:3rem;width:calc(100% - 6rem);transform:translateY(-50%);text-align:center}.img-header .img-title .title,.img-header .img-title p{color:#fff;text-transform:uppercase;font-weight:normal;font-family:serif;margin-bottom:0}.img-header .img-title p{margin-top:0;font-size:small;text-transform:none}.about-header{background-image:url("+p+")}.about-header .img-title .title,.about-header .img-title p{color:#000}.menu-section{padding:40px;text-align:center}.menu-section ul{list-style:none}.menu-section ul li{font-family:serif;letter-spacing:1px}.menu-section ul li span{font-weight:bold}",""]);const f=u},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(o)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},294:e=>{e.exports="images/about-header.f02b66.jpg"},237:e=>{e.exports="images/home.0ad310.jpg"},419:e=>{e.exports="images/imgprimary.9a625b.jpg"},806:e=>{e.exports="images/imgsec.a4f8ff.jpg"},553:e=>{e.exports="images/menu-header.e34318.jpg"},379:(e,t,n)=>{"use strict";var o,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function i(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],a=0;a<e.length;a++){var c=e[a],s=t.base?c[0]+t.base:c[0],d=n[s]||0,l="".concat(s," ").concat(d);n[s]=d+1;var u=i(l),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(r[u].references++,r[u].updater(m)):r.push({identifier:l,updater:g(m,t),references:1}),o.push(l)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,o){var a=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,a);else{var r=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function m(e,t,n){var o=n.css,a=n.media,r=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,f=0;function g(e,t){var n,o,a;if(t.singleton){var r=f++;n=p||(p=s(t)),o=u.bind(null,n,r,!1),a=u.bind(null,n,r,!0)}else n=s(t),o=m.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var a=i(n[o]);r[a].references--}for(var s=c(e,t),d=0;d<n.length;d++){var l=i(n[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=s}}}}},t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=document.querySelector("#content"),t=document.createElement("nav"),o=document.createElement("a");o.setAttribute("href","#"),o.id="home-page",o.textContent="Home";const a=document.createElement("a");a.setAttribute("href","#"),a.id="menu-page",a.textContent="Menu";const r=document.createElement("a");r.setAttribute("href","#"),r.id="about-page",r.textContent="About";const i=()=>{t.append(o,a,r),e.appendChild(t)};var c=n(379),s=n.n(c),d=n(192);s()(d.Z,{insert:"head",singleton:!1}),d.Z.locals;var l=n(237),u=n.n(l),m=n(419),p=n.n(m),f=n(806),g=n.n(f);const h=document.querySelector("#content"),v=document.createElement("div");v.classList.add("home-container");const b=document.createElement("div");b.classList.add("img-container");const E=document.createElement("div");E.classList.add("grid-1");const x=document.createElement("img");x.src=u(),E.append(x);const y=document.createElement("div");y.classList.add("grid-2");const C=document.createElement("img");C.src=p();const L=document.createElement("img");L.src=g(),y.append(C,L),b.append(E,y);const S=document.createElement("div"),w=document.createElement("h1");w.textContent="Welcome To Lazeez Restaurant!",w.classList.add("title"),S.append(w);const k=()=>{v.append(S,b),h.append(v)},j=document.querySelector("#content"),A=document.createElement("div");A.classList.add("menu-container");const T=document.createElement("div");T.classList.add("img-header");const M=document.createElement("div");M.classList.add("img-title");const O=document.createElement("h2");O.textContent="Menu",O.classList.add("title"),M.append(O),T.append(M);const q=document.createElement("section");q.classList.add("menu-section");const N=document.createElement("ul"),z=[2.75,3.75,3,4.5,2.75];["ESPRESSO","LATTE","HOT CHOCOLATE","ICED TEA","PECAN STICKY BUNS"].forEach(((e,t)=>{const n=document.createElement("li"),o=document.createElement("p"),a=document.createElement("span");o.textContent=e,a.textContent=z[t],n.append(o,a),N.append(n)})),q.append(N),A.append(T,q);const I=document.querySelector("#content"),H=document.createElement("div");H.classList.add("about-container");const B=document.createElement("div");B.classList.add("img-header","about-header");const P=document.createElement("div");P.classList.add("img-title");const R=document.createElement("h2");R.textContent="About",R.classList.add("title");const _=document.createElement("p");_.textContent="Fox in the Snow Cafe is a bakery, coffee shop serving up rustic-style baked goods and hand-poured drinks out of three quaint shops in the Italian Village, German Village and New Albany neighborhoods of Columbus, Ohio.",P.append(R,_),B.append(P),H.append(B);const F=()=>{const e=document.querySelector("#content");let t=e.firstElementChild;for(;t;)e.removeChild(t),t=e.firstElementChild};i(),k();const U=document.querySelector("#home-page"),Z=document.querySelector("#menu-page"),D=document.querySelector("#about-page");U.addEventListener("click",(()=>{F(),i(),k()})),Z.addEventListener("click",(()=>{F(),i(),j.append(A)})),D.addEventListener("click",(()=>{F(),i(),I.append(H)}))})()})();