if(!self.define){let e,n={};const s=(s,r)=>(s=new URL(s+".js",r).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let t={};const u=e=>s(e,o),c={module:{uri:o},exports:t,require:u};n[o]=Promise.all(r.map((e=>c[e]||u(e)))).then((e=>(i(...e),t)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hansungstd"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/Hansung-UBSP/css/app.bc7089f1.css",revision:null},{url:"/Hansung-UBSP/index.html",revision:"f9ec324f168fbd5f202041ad8ff6b127"},{url:"/Hansung-UBSP/js/app.9660d98a.js",revision:null},{url:"/Hansung-UBSP/js/chunk-vendors.71c5a584.js",revision:null},{url:"/Hansung-UBSP/manifest.json",revision:"395613ed598c1e342c285aec948c9035"},{url:"/Hansung-UBSP/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map