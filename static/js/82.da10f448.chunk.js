/*! For license information please see 82.da10f448.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkggt_mobile=self.webpackChunkggt_mobile||[]).push([[82],{721:(e,t,o)=>{o.d(t,{a:()=>d,c:()=>u,g:()=>a,s:()=>c});var n=o(384);const i="ion-content",r=".ion-content-scroll-host",s=`${i}, ${r}`,l=e=>"ION-CONTENT"===e.tagName,a=async e=>l(e)?(await new Promise((t=>(0,n.c)(e,t))),e.getScrollElement()):e,d=e=>e.closest(s),c=(e,t)=>{if(l(e)){return e.scrollToTop(t)}return Promise.resolve(e.scrollTo({top:0,left:0,behavior:t>0?"smooth":"auto"}))},u=(e,t,o,n)=>{if(l(e)){return e.scrollByPoint(t,o,n)}return Promise.resolve(e.scrollBy({top:o,left:t,behavior:n>0?"smooth":"auto"}))}},82:(e,t,o)=>{o.r(t),o.d(t,{startInputShims:()=>b});var n=o(286),i=o(721),r=o(384),s=o(793);const l=new WeakMap,a=function(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];l.has(e)!==o&&(o?d(e,t,n,i):c(e,t))},d=function(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,n&&(r.disabled=!0),i.appendChild(r),l.set(e,r);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${s}px,${o}px,0) scale(0)`},c=(e,t)=>{const o=l.get(e);o&&(l.delete(e),o.remove()),e.style.pointerEvents="",t.style.transform=""},u="input, textarea, [no-blur], [contenteditable]",v=(e,t,o,n)=>{const i=e.top,r=e.bottom,s=t.top,l=s+15,a=Math.min(t.bottom,n-o)-50-r,d=l-i,c=Math.round(a<0?-a:d>0?-d:0),u=Math.min(c,i-s),v=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,v)),scrollPadding:o,inputSafeY:4-(i-l)}},m="$ionPaddingTimer",w=(e,t,o)=>{const n=e[m];n&&clearTimeout(n),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[m]=setTimeout((()=>{e.style.setProperty("--keyboard-offset","0px"),o&&o()}),120)},f=(e,t,o)=>{e.addEventListener("focusout",(()=>{t&&w(t,0,o)}),{once:!0})};let h=0;const g="data-ionic-skip-scroll-assist",p=e=>{document.activeElement!==e&&(e.setAttribute(g,"true"),e.focus())},y=async function(e,t,o,n,s,l){let d=arguments.length>6&&void 0!==arguments[6]&&arguments[6],c=!(arguments.length>8&&void 0!==arguments[8])||arguments[8];if(!o&&!n)return;const u=((e,t,o,n)=>{var i;const r=null!==(i=e.closest("ion-item,[ion-item]"))&&void 0!==i?i:e;return v(r.getBoundingClientRect(),t.getBoundingClientRect(),o,n)})(e,o||n,s,arguments.length>7&&void 0!==arguments[7]?arguments[7]:0);if(o&&Math.abs(u.scrollAmount)<4)return p(t),void(l&&null!==o&&(w(o,h),f(t,o,(()=>h=0))));if(a(e,t,!0,u.inputSafeY,d),p(t),(0,r.r)((()=>e.click())),l&&o&&(h=u.scrollPadding,w(o,h)),"undefined"!==typeof window){let n;const r=async()=>{void 0!==n&&clearTimeout(n),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",r),o&&await(0,i.c)(o,0,u.scrollAmount,u.scrollDuration),a(e,t,!1,u.inputSafeY),p(t),l&&f(t,o,(()=>h=0))},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",r)};if(o){const e=await(0,i.g)(o),l=e.scrollHeight-e.clientHeight;if(c&&u.scrollAmount>l-e.scrollTop)return"password"===t.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",r),void(n=setTimeout(r,1e3))}r()}},b=async(e,t)=>{if(void 0===n.d)return;const o="ios"===t,l="android"===t,d=e.getNumber("keyboardHeight",290),c=e.getBoolean("scrollAssist",!0),v=e.getBoolean("hideCaretOnScroll",o),m=e.getBoolean("inputBlurring",!1),w=e.getBoolean("scrollPadding",!0),f=Array.from(n.d.querySelectorAll("ion-input, ion-textarea")),h=new WeakMap,p=new WeakMap,b=await s.K.getResizeMode(),E=async e=>{await new Promise((t=>(0,r.c)(e,t)));const t=e.shadowRoot||e,o=t.querySelector("input")||t.querySelector("textarea"),u=(0,i.a)(e),m=u?null:e.closest("ion-footer");if(!o)return;if(u&&v&&!h.has(e)){const t=((e,t,o)=>{if(!o||!t)return()=>{};const n=o=>{var n;(n=t)===n.getRootNode().activeElement&&a(e,t,o)},i=()=>a(e,t,!1),s=()=>n(!0),l=()=>n(!1);return(0,r.a)(o,"ionScrollStart",s),(0,r.a)(o,"ionScrollEnd",l),t.addEventListener("blur",i),()=>{(0,r.b)(o,"ionScrollStart",s),(0,r.b)(o,"ionScrollEnd",l),t.removeEventListener("blur",i)}})(e,o,u);h.set(e,t)}if(!("date"===o.type||"datetime-local"===o.type)&&(u||m)&&c&&!p.has(e)){const t=function(e,t,o,i,r,l,a){let d=arguments.length>7&&void 0!==arguments[7]&&arguments[7];const c=l&&(void 0===a||a.mode===s.a.None);let u=!1;const v=void 0!==n.w?n.w.innerHeight:0,m=n=>{!1!==u?y(e,t,o,i,n.detail.keyboardHeight,c,d,v,!1):u=!0},w=()=>{u=!1,null===n.w||void 0===n.w||n.w.removeEventListener("ionKeyboardDidShow",m),e.removeEventListener("focusout",w)},f=async()=>{t.hasAttribute(g)?t.removeAttribute(g):(y(e,t,o,i,r,c,d,v),null===n.w||void 0===n.w||n.w.addEventListener("ionKeyboardDidShow",m),e.addEventListener("focusout",w))};return e.addEventListener("focusin",f),()=>{e.removeEventListener("focusin",f),null===n.w||void 0===n.w||n.w.removeEventListener("ionKeyboardDidShow",m),e.removeEventListener("focusout",w)}}(e,o,u,m,d,w,b,l);p.set(e,t)}};m&&(()=>{let e=!0,t=!1;const o=document,n=()=>{t=!0},i=()=>{e=!0},s=n=>{if(t)return void(t=!1);const i=o.activeElement;if(!i)return;if(i.matches(u))return;const r=n.target;r!==i&&(r.matches(u)||r.closest(u)||(e=!1,setTimeout((()=>{e||i.blur()}),50)))};(0,r.a)(o,"ionScrollStart",n),o.addEventListener("focusin",i,!0),o.addEventListener("touchend",s,!1)})();for(const n of f)E(n);n.d.addEventListener("ionInputDidLoad",(e=>{E(e.detail)})),n.d.addEventListener("ionInputDidUnload",(e=>{(e=>{if(v){const t=h.get(e);t&&t(),h.delete(e)}if(c){const t=p.get(e);t&&t(),p.delete(e)}})(e.detail)}))}}}]);
//# sourceMappingURL=82.da10f448.chunk.js.map