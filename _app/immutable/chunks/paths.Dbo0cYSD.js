import{n as b,l as m,r as q,s as k,m as x}from"./scheduler.Sv_J0zEE.js";const c=[];function z(s,o){return{subscribe:A(s,o).subscribe}}function A(s,o=b){let n;const r=new Set;function a(t){if(k(s,t)&&(s=t,n)){const i=!c.length;for(const e of r)e[1](),c.push(e,s);if(i){for(let e=0;e<c.length;e+=2)c[e][0](c[e+1]);c.length=0}}}function l(t){a(t(s))}function f(t,i=b){const e=[t,i];return r.add(e),r.size===1&&(n=o(a,l)||b),t(s),()=>{r.delete(e),r.size===0&&n&&(n(),n=null)}}return{set:a,update:l,subscribe:f}}function E(s,o,n){const r=!Array.isArray(s),a=r?[s]:s;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=o.length<2;return z(n,(f,t)=>{let i=!1;const e=[];let d=0,p=b;const g=()=>{if(d)return;p();const u=o(r?e[0]:e,f,t);l?f(u):p=x(u)?u:b},v=a.map((u,_)=>m(u,w=>{e[_]=w,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){q(v),p(),i=!1}})}function S(s){return{subscribe:s.subscribe.bind(s)}}var h;const T=((h=globalThis.__sveltekit_vegh4r)==null?void 0:h.base)??"/favorit-2-preview";var y;const j=((y=globalThis.__sveltekit_vegh4r)==null?void 0:y.assets)??T;export{z as a,T as b,j as c,E as d,S as r,A as w};
