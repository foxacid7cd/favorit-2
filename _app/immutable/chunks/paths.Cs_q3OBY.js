import{n as b,l as v,r as q,s as k,m as x}from"./scheduler.BJ8SnJ-v.js";const u=[];function z(s,o){return{subscribe:A(s,o).subscribe}}function A(s,o=b){let r;const n=new Set;function c(t){if(k(s,t)&&(s=t,r)){const i=!u.length;for(const e of n)e[1](),u.push(e,s);if(i){for(let e=0;e<u.length;e+=2)u[e][0](u[e+1]);u.length=0}}}function l(t){c(t(s))}function f(t,i=b){const e=[t,i];return n.add(e),n.size===1&&(r=o(c,l)||b),t(s),()=>{n.delete(e),n.size===0&&r&&(r(),r=null)}}return{set:c,update:l,subscribe:f}}function E(s,o,r){const n=!Array.isArray(s),c=n?[s]:s;if(!c.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=o.length<2;return z(r,(f,t)=>{let i=!1;const e=[];let d=0,p=b;const g=()=>{if(d)return;p();const a=o(n?e[0]:e,f,t);l?f(a):p=x(a)?a:b},w=c.map((a,_)=>v(a,m=>{e[_]=m,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){q(w),p(),i=!1}})}function S(s){return{subscribe:s.subscribe.bind(s)}}var h;const T=((h=globalThis.__sveltekit_1b3f8c5)==null?void 0:h.base)??"/favorit-2-preview";var y;const j=((y=globalThis.__sveltekit_1b3f8c5)==null?void 0:y.assets)??T;export{z as a,T as b,j as c,E as d,S as r,A as w};
