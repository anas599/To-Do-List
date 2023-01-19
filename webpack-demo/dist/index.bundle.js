"use strict";(self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[]).push([[826,830],{426:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(716),t.b),l=i()(r()),p=d()(s);l.push([e.id,"body {\n  background-color: rgb(255, 255, 255);\n}\n\n.toDoList {\n  color: rgb(0, 0, 0);\n  border: 1px solid black;\n  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.426));\n  background-color: white;\n  width: 500px;\n}\n\n.addPlaceHolder {\n  display: flex;\n  border: none;\n  font-size: 15px;\n  margin: 10px;\n  font-style: italic;\n}\n\n.todayHead {\n  display: flex;\n  border-bottom: 1px solid rgb(211, 211, 211);\n  width: 100%;\n  padding: 10px;\n  inline-size: 96%;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.oneTask {\n  display: flex;\n  flex-direction: row-reverse;\n  height: 50px;\n  align-items: center;\n  border-top: 1px solid rgb(211, 211, 211);\n  justify-content: flex-end;\n}\n\n.oneTaskID {\n  display: flex;\n  flex-direction: column;\n}\n\np {\n  width: max-content;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\ninput[type='checkbox'] {\n  margin: 10px;\n}\n\n#indexNum {\n  display: none;\n}\n\n.clearAll {\n  display: flex;\n  background-color: #f6f6f6;\n  font-size: 20px;\n  color: #a2a2a2;\n  height: 50px;\n  flex-direction: row;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.threeDots {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: url("+p+");\n  background-repeat: no-repeat;\n  position: absolute;\n  right: 0;\n  margin: 20px;\n}\n.add-container{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=r(f,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},987:(e,n,t)=>{t.d(n,{$:()=>k});var o=t(379),r=t.n(o),a=t(795),i=t.n(a),c=t(569),d=t.n(c),s=t(565),l=t.n(s),p=t(216),u=t.n(p),f=t(589),m=t.n(f),h=t(426),x={};x.styleTagTransform=m(),x.setAttributes=l(),x.insert=d().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=u(),r()(h.Z,x),h.Z&&h.Z.locals&&h.Z.locals;var b=t(994);const v=document.createElement("div");v.classList.add("add-container");const y=document.querySelector("#toDoList"),g=document.createElement("p"),C=document.createElement("input"),k=document.createElement("div"),T=document.createElement("a"),w=document.createElement("button");w.id="addTask1",w.innerHTML="Add1",document.body.appendChild((g.innerHTML="Today's To Do",g.classList.add("todayHead"),C.classList.add("addPlaceHolder"),C.setAttribute("placeholder","Add to your list..."),C.setAttribute("type","text"),T.innerHTML="Clear all completed",T.classList="clearAll",y.classList.add("toDoList"),y.appendChild(g),v.appendChild(C),v.appendChild(w),y.appendChild(v),y.appendChild(k),y.appendChild(T),document.querySelector("#addTask1").addEventListener("click",(()=>{(0,b.gI)(document.querySelector(".addPlaceHolder").value)})),y))},994:(e,n,t)=>{t.d(n,{gI:()=>i});var o=t(987);const r=[{description:"Wash the car",completed:!0,index:2},{description:"Pay the all bills",completed:!1,index:1},{description:"Go to the Gym",completed:!0,index:3}];function a(){o.$.innerHTML="",r.forEach(((e,n)=>{const t=document.createElement("li");t.classList.add("oneTask");const i=document.createElement("p");i.id="indexNum",i.innerText=e.index,t.appendChild(i);const c=document.createElement("p");c.innerText=e.description,t.appendChild(c);const d=document.createElement("label");d.setAttribute("for","checkbox"),t.appendChild(d);const s=document.createElement("input");s.type="checkbox",s.id="checkbox",t.appendChild(s);const l=document.createElement("i");l.classList.add("threeDots"),l.innerText=".",t.appendChild(l),o.$.appendChild(t);const p=document.createElement("button");p.id="removeButton",p.innerHTML="testbb",t.appendChild(p),p.addEventListener("click",(()=>{!function(e){r.splice(e,1),r.forEach(((e,n)=>e.index=n+1)),a()}(n)}))}))}function i(e){const n={description:e,completed:!1,index:r.length+1};r.push(n),a()}},716:(e,n,t)=>{e.exports=t.p+"2b9d327dccb65150ac7f.svg"}},e=>{e(e.s=987)}]);