"use strict";(self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[]).push([[830,826],{138:(e,t,o)=>{o.d(t,{$:()=>r});var n=o(994);const c=document.createElement("div");c.classList.add("add-container");const d=document.querySelector("#toDoList"),l=document.createElement("p"),a=document.createElement("input"),r=document.createElement("div"),i=document.createElement("button");i.id="addTask1",i.innerHTML="",(0,n.oS)(),document.body.appendChild(function(){l.innerHTML="Today's To Do",l.classList.add("todayHead"),a.classList.add("addPlaceHolder"),a.setAttribute("placeholder","Add to your list...."),a.setAttribute("type","text");const e=document.createElement("button");return e.id="clearCompleted",e.innerHTML="Clear all completed",e.classList="clearAll",d.classList.add("toDoList"),d.appendChild(l),c.appendChild(a),c.appendChild(i),d.appendChild(c),d.appendChild(r),d.appendChild(e),document.querySelector("#addTask1").addEventListener("click",(()=>{(0,n.gI)(document.querySelector(".addPlaceHolder").value)})),document.querySelector("#clearCompleted").addEventListener("click",n.N8),d}())},994:(e,t,o)=>{o.d(t,{N8:()=>l,gI:()=>a,oS:()=>d});var n=o(138);let c=void 0!==localStorage.toDoStorage?JSON.parse(localStorage.toDoStorage):[];function d(){n.$.innerHTML="",c.forEach(((e,t)=>{const o=document.createElement("li");o.classList.add("oneTask");const l=document.createElement("p");l.id="indexNum",l.innerText=e.index,o.appendChild(l);const a=document.createElement("p");a.innerText=e.description,o.appendChild(a);const r=document.createElement("label");r.setAttribute("for","checkbox"),o.appendChild(r);const i=document.createElement("input");i.type="checkbox",i.id="checkbox",e.completed&&(i.setAttribute("checked",!0),o.classList.add("completed")),o.appendChild(i),i.addEventListener("click",(()=>{!function(e){const t=document.querySelectorAll("#checkbox")[e];c[e].completed=!c[e].completed,c[e].completed=t.checked;const o=document.querySelectorAll(".oneTask")[e];c[e].completed?o.classList.add("completed"):o.classList.remove("completed"),localStorage.setItem("toDoStorage",JSON.stringify(c))}(t)}));const s=document.createElement("button");s.classList.add("threeDots"),s.innerText="__",o.appendChild(s),s.addEventListener("click",(()=>{!function(e){document.querySelector(`#removeButton-${e}`).classList.toggle("showDelete");const t=document.querySelectorAll(".oneTask")[e],o=t.querySelector("p:nth-of-type(2)");t.style.backgroundColor="#f8f692";const n=document.createElement("input");n.setAttribute("type","text"),n.value=c[e].description,o.parentNode.replaceChild(n,o),n.onblur=function(){c[e].description=this.value,localStorage.setItem("toDoStorage",JSON.stringify(c)),d()}}(t)})),n.$.appendChild(o);const p=document.createElement("button");p.id=`removeButton-${t}`,p.innerHTML=".",o.appendChild(p),p.addEventListener("click",(()=>{!function(e){c.splice(e,1);for(let e=0;e<c.length;e+=1)c[e].index=e+1;const t=JSON.stringify(c);localStorage.setItem("toDoStorage",t),d()}(t)}))}))}function l(){c=c.filter((e=>!e.completed));const e=JSON.stringify(c);localStorage.setItem("toDoStorage",e),d()}function a(e){const t={description:e,completed:!1,index:c.length+1};c.push(t);const o=JSON.stringify(c);localStorage.setItem("toDoStorage",o),d()}}},e=>{e(e.s=994)}]);