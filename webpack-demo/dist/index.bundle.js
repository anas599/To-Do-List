"use strict";(self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[]).push([[826],{426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(716),t.b),d=i()(o()),p=s()(l);d.push([e.id,"body {\n  background-color: rgb(255, 255, 255);\n}\n\n.toDoList {\n  color: rgb(0, 0, 0);\n  border: 1px solid black;\n  filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.426));\n  background-color: white;\n  width: 500px;\n}\n\n.addPlaceHolder {\n  display: flex;\n  border: none;\n  font-size: 15px;\n  margin: 10px;\n  font-style: italic;\n}\n\n.todayHead {\n  display: flex;\n  border-bottom: 1px solid rgb(211, 211, 211);\n  width: 100%;\n  padding: 10px;\n  inline-size: 96%;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.oneTask {\n  display: flex;\n  flex-direction: row-reverse;\n  height: 50px;\n  align-items: center;\n  border-top: 1px solid rgb(211, 211, 211);\n  justify-content: flex-end;\n}\n\n.oneTaskID {\n  display: flex;\n  flex-direction: column;\n}\n\np {\n  width: max-content;\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\ninput[type='checkbox'] {\n  margin: 10px;\n}\n\n#indexNum {\n  display: none;\n}\n\n.clearAll {\n  display: flex;\n  background-color: #f6f6f6;\n  font-size: 20px;\n  color: #a2a2a2;\n  height: 50px;\n  flex-direction: row;\n  align-content: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.threeDots {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background: url("+p+");\n  background-repeat: no-repeat;\n  position: absolute;\n  right: 0;\n  margin: 20px;\n}\n",""]);const u=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},987:(e,n,t)=>{var r=t(379),o=t.n(r),a=t(795),i=t.n(a),c=t(569),s=t.n(c),l=t(565),d=t.n(l),p=t(216),u=t.n(p),f=t(589),h=t.n(f),m=t(426),x={};x.styleTagTransform=h(),x.setAttributes=d(),x.insert=s().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=u(),o()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals,document.body.appendChild(function(){const e=document.querySelector("#toDoList"),n=document.createElement("p"),t=document.createElement("input"),r=document.createElement("input"),o=document.createElement("div"),a=document.createElement("a");return n.innerHTML="Today's To Do",n.classList.add("todayHead"),r.classList.add("addPlaceHolder"),r.setAttribute("placeholder","Add to your list..."),a.innerHTML="Clear all completed",a.classList="clearAll",t.setAttribute("type","checkbox"),t.id="myInput",o.innerHTML=[{description:"Wash the car",completed:!0,index:2},{description:"Pay the bills",completed:!1,index:1},{description:"Go to the Gym",completed:!0,index:3}].map((e=>`\n      <li class='oneTask'>\n      <p id='indexNum'>${e.index} </p>\n      <p>${e.description} </p>\n      <label for="checkbox"> </label>\n      <input type='checkbox' id="checkbox">\n      <i class="threeDots"> .</i>\n    </li>\n    `)).sort().join(""),e.classList.add("toDoList"),e.appendChild(n),e.appendChild(r),e.appendChild(o),e.appendChild(a),e}())},716:(e,n,t)=>{e.exports=t.p+"2b9d327dccb65150ac7f.svg"}},e=>{e(e.s=987)}]);