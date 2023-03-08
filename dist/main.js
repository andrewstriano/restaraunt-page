(()=>{"use strict";var e={192:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),s=n.n(c),d=new URL(n(943),n.b),l=new URL(n(744),n.b),u=i()(o()),m=s()(d),p=s()(l);u.push([e.id,"@font-face{font-family:Lato;src:url("+m+")}#content{padding-bottom:80px}body{font-family:Lato,sans-serif;position:relative;padding:0;margin:0;min-height:100vh}.header{display:flex;justify-content:space-between;background-color:rgba(254,254,254,.95);position:sticky;top:0;padding:15px}.header img{height:75px}.header .headerLinksContainer{display:flex;gap:10px;justify-content:space-evenly;align-items:center;max-width:400px}.header .headerLinksContainer a{height:100%;display:flex;align-items:center;justify-content:center;width:80px;flex:1;border-radius:5px;transition:all .2s}.header .headerLinksContainer a:hover{transform:scale(1.1);background-color:#cd3333}.currentPage{background-color:#2a60a2;color:#fff}.menuContainer{display:flex;flex-direction:column;align-items:center;font-size:1.5rem;font-size:1.5rem;max-width:2000px;margin:auto}.menuContainer img{width:90%;max-width:800px}.formContainer{width:100%;display:flex;justify-content:center}.formContainer ul{width:100%;list-style:none;display:flex;flex-direction:column;align-items:center;padding:0}.formContainer ul li{width:100%;display:flex;flex-direction:column;align-items:center}.formContainer ul li label{display:block;font-size:2rem;margin:2rem}.formContainer ul li input{height:60px}.formContainer ul li textarea{height:600px}.formContainer ul li input,.formContainer ul li textarea{border:1px solid #d3d3d3;border-radius:5px;width:90%;max-width:800px;font-size:1.5rem}.formContainer ul li input:focus-visible,.formContainer ul li textarea:focus-visible{outline:none;box-shadow:1px 1px 3px rgba(0,0,0,.25)}.formContainer ul li .submitButton{max-width:200px;margin:2rem;color:#cd3333;background-color:#fff;transition:all .2s}.formContainer ul li .submitButton:hover{transform:scale(1.1);box-shadow:1px 1px 3px rgba(0,0,0,.25);background-color:#cd3333;color:#fff}.formContainer ul li .submitButton:active{transform:scale(0.9);background-color:#a72929}.homeContainer{width:100%;height:100vh}.homeContainer .heroContainer{background-image:url("+p+");background-repeat:no-repeat;background-size:cover;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.homeContainer .heroContainer .heroText{color:#fff;font-size:4rem}.homeContainer .heroContainer .heroButton{color:#fff;font-size:3rem;padding:8px 16px;border:none;border-radius:15px;background-color:#2a60a2;transition:all .2s;margin-bottom:25vh}.homeContainer .heroContainer .heroButton:hover{background-color:#1e4573;transform:scale(1.2);cursor:pointer}.footerContainer{display:flex;justify-content:center;align-items:center;background-color:gray;position:absolute;bottom:0;left:0;right:0;height:80px;margin:0}.footerContainer .footerText{font-size:1.5rem;color:#fff}.footerContainer .footerText a{text-decoration:none;color:#cd3333}.footerContainer .footerText a:hover{text-decoration:underline}",""]);const f=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var m=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},943:(e,t,n)=>{e.exports=n.p+"9d883d540ee2b4de8024.ttf"},744:(e,t,n)=>{e.exports=n.p+"44812053393ba2e6f17f.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),m=n.n(u),p=n(192),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const h=n.p+"6a167539f8914c21f1f2.svg",g=document.querySelector("#content"),b=document.createElement("div");b.classList.add("header");const v=document.createElement("div");v.classList.add("headerLinksContainer");const x=new Image;x.src=h;const y=document.createElement("a"),C=document.createElement("a"),L=document.createElement("a");y.classList.add("navLinks"),y.innerHTML="HOME",C.classList.add("navLinks"),C.innerText="CONTACT",L.classList.add("navLinks"),L.innerText="MENU";const E=n.p+"8c117adc6c9fa93f61e7.jpg",w=n.p+"01f6f1f0bce2af293f48.jpg",T=n.p+"2ed1def3ff9407a07f0f.jpg",k=document.createElement("footer");k.classList.add("footerContainer");const A=document.createElement("p");function M(){g.append(k)}A.classList.add("footerText"),A.innerHTML='Created by <a href="https://github.com/andrewstriano">Andrew Striano</a>',k.append(A);const j=document.createElement("div");j.classList.add("menuContainer");const P=document.createElement("h2");P.classList.add("menuHeader"),P.innerText="Breakfast Menu";const S=new Image;S.src=E,j.append(P,S);const B=document.createElement("div");B.classList.add("menuContainer");const H=document.createElement("h2");H.classList.add("menuHeader"),H.innerText="Lunch Menu";const I=new Image;I.src=w,B.append(H,I);const N=document.createElement("div");N.classList.add("menuContainer");const z=document.createElement("h2");z.classList.add("menuHeader"),z.innerText="Dinner Menu";const O=new Image;function R(){g.innerHTML="",y.classList.remove("currentPage"),C.classList.remove("currentPage"),L.classList.add("currentPage"),g.append(j,B,N),M()}O.src=T,N.append(z,O),L.addEventListener("click",R);const U=document.createElement("div");U.classList.add("formContainer"),document.createElement("form").setAttribute("action","someServer");const Z=document.createElement("ul"),$=document.createElement("li"),_=document.createElement("li"),F=document.createElement("li"),q=document.createElement("li"),D=document.createElement("label");D.setAttribute("for","name"),D.innerText="Name";const J=document.createElement("input");J.setAttribute("type","text"),J.setAttribute("id","name"),J.setAttribute("name","name"),$.append(D,J);const Q=document.createElement("label");Q.innerText="Phone Number",Q.setAttribute("for","phone");const G=document.createElement("input");G.setAttribute("type","tel"),G.setAttribute("id","phone"),G.setAttribute("name","phone"),_.append(Q,G);const K=document.createElement("label");K.innerText="Comment",K.setAttribute("for","comment");const V=document.createElement("textarea");V.setAttribute("name","comment"),V.setAttribute("id","comment"),V.setAttribute("cols","30"),V.setAttribute("rows","10"),V.setAttribute("placeholder","Comment"),F.append(K,V);const W=document.createElement("input");function X(){g.innerHTML="",y.classList.remove("currentPage"),L.classList.remove("currentPage"),C.classList.add("currentPage"),g.append(U),M()}W.setAttribute("type","submit"),W.classList.add("submitButton"),q.append(W),Z.append($,_,F,q),U.append(Z),C.addEventListener("click",X),W.addEventListener("click",X);const Y=document.createElement("div");Y.classList.add("heroContainer");const ee=document.createElement("p");ee.classList.add("heroText"),ee.innerText="Route 99 Brooks, Oregon";const te=document.createElement("button");te.classList.add("heroButton"),te.innerText="Check out our Menu!",te.addEventListener("click",R),Y.append(ee,te);const ne=document.createElement("div");function re(){g.innerHTML="",g.append(ne),y.classList.add("currentPage"),C.classList.remove("currentPage"),L.classList.remove("currentPage"),M()}ne.classList.add("homeContainer"),ne.append(Y),y.addEventListener("click",re),v.append(y,C,L),b.append(x,v),document.body.insertBefore(b,g),re(),M()})()})();