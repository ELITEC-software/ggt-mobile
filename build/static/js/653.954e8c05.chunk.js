/*! For license information please see 653.954e8c05.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkggt_mobile=self.webpackChunkggt_mobile||[]).push([[653],{653:(e,t,s)=>{s.r(t),s.d(t,{scopeCss:()=>A});var r="-shadowcsshost",n="-shadowcssslotted",o="-shadowcsscontext",c=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+r+c,"gim"),i=new RegExp("("+o+c,"gim"),p=new RegExp("("+n+c,"gim"),a=r+"-no-combinator",g=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],u=/-shadowcsshost/gim,d=e=>new RegExp(`((?<!(^@supports(.*)))|(?<={.*))(${e}\\b)`,"gim"),m=d("::slotted"),f=d(":host"),$=d(":host-context"),x=/\/\*\s*[\s\S]*?\*\//g,w=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,S=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,b=/([{}])/g,_=/(^.*?[^\\])??((:+)(.*)|$)/,v="%BLOCK%",k=e=>{const t=e.split(b),s=[],r=[];let n=0,o=[];for(let c=0;c<t.length;c++){const e=t[c];"}"===e&&n--,n>0?o.push(e):(o.length>0&&(r.push(o.join("")),s.push(v),o=[]),s.push(e)),"{"===e&&n++}o.length>0&&(r.push(o.join("")),s.push(v));return{escapedString:s.join(""),blocks:r}},E=(e,t,s)=>e.replace(t,(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];if(t[2]){const e=t[2].split(","),r=[];for(let n=0;n<e.length;n++){const o=e[n].trim();if(!o)break;r.push(s(a,o,t[3]))}return r.join(",")}return a+t[3]})),O=(e,t,s)=>e+t.replace(r,"")+s,R=(e,t,s)=>t.indexOf(r)>-1?O(e,t,s):e+t+s+", "+t+" "+e+s,j=(e,t)=>{const s=(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t);return!s.test(e)},C=(e,t)=>e.replace(_,(function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"")+t+(arguments.length>3&&void 0!==arguments[3]?arguments[3]:"")+(arguments.length>4&&void 0!==arguments[4]?arguments[4]:"")})),W=(e,t,s)=>{const r="."+(t=t.replace(/\[is=([^\]]*)\]/g,(function(e){return arguments.length<=1?void 0:arguments[1]}))),n=e=>{let n=e.trim();if(!n)return"";if(e.indexOf(a)>-1)n=((e,t,s)=>{if(u.lastIndex=0,u.test(e)){const t=`.${s}`;return e.replace(g,((e,s)=>C(s,t))).replace(u,t+" ")}return t+" "+e})(e,t,s);else{const t=e.replace(u,"");t.length>0&&(n=C(t,r))}return n},o=(e=>{const t=[];let s=0;return{content:(e=e.replace(/(\[[^\]]*\])/g,((e,r)=>{const n=`__ph-${s}__`;return t.push(r),s++,n}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,r,n)=>{const o=`__ph-${s}__`;return t.push(n),s++,r+o})),placeholders:t}})(e);let c,l="",i=0;const p=/( |>|\+|~(?!=))\s*/g;let h=!((e=o.content).indexOf(a)>-1);for(;null!==(c=p.exec(e));){const t=c[1],s=e.slice(i,c.index).trim();h=h||s.indexOf(a)>-1;l+=`${h?n(s):s} ${t} `,i=p.lastIndex}const d=e.substring(i);return h=h||d.indexOf(a)>-1,l+=h?n(d):d,m=o.placeholders,l.replace(/__ph-(\d+)__/g,((e,t)=>m[+t]));var m},T=(e,t,s,r)=>((e,t)=>{const s=k(e);let r=0;return s.escapedString.replace(S,(function(){const e=arguments.length<=2?void 0:arguments[2];let n="",o=arguments.length<=4?void 0:arguments[4],c="";o&&o.startsWith("{"+v)&&(n=s.blocks[r++],o=o.substring(8),c="{");const l=t({selector:e,content:n});return`${arguments.length<=1?void 0:arguments[1]}${l.selector}${arguments.length<=3?void 0:arguments[3]}${c}${l.content}${o}`}))})(e,(e=>{let n=e.selector,o=e.content;"@"!==e.selector[0]?n=((e,t,s,r)=>e.split(",").map((e=>r&&e.indexOf("."+r)>-1?e.trim():j(e,t)?W(e,t,s).trim():e.trim())).join(", "))(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=T(e.content,t,s,r));return{selector:n.replace(/\s{2,}/g," ").trim(),content:o}})),L=(e,t,s,c)=>{const g=((e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(p,(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t[2]){const e=t[2].trim(),n=t[3],o=s+e+n;let c="";for(let s=t[4]-1;s>=0;s--){const e=t[5][s];if("}"===e||","===e)break;c=e+c}const l=(c+o).trim(),i=`${c.trimEnd()}${o.trim()}`.trim();if(l!==i){const e=`${i}, ${l}`;r.push({orgSelector:l,updatedSelector:e})}return o}return a+t[3]})),{selectors:r,cssText:e}})(e=(e=>E(e,i,R))(e=(e=>E(e,l,O))(e=(e=>e.replace($,`$1${o}`).replace(f,`$1${r}`).replace(m,`$1${n}`))(e))),c);return e=(e=>h.reduce(((e,t)=>e.replace(t," ")),e))(e=g.cssText),t&&(e=T(e,t,s,c)),{cssText:(e=(e=y(e,s)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:g.selectors.map((e=>({orgSelector:y(e.orgSelector,s),updatedSelector:y(e.updatedSelector,s)})))}},y=(e,t)=>e.replace(/-shadowcsshost-no-combinator/g,`.${t}`),A=(e,t)=>{const s=t+"-h",r=t+"-s",n=e.match(w)||[];e=(e=>e.replace(x,""))(e);const o=L(e,t,s,r);return e=[o.cssText,...n].join("\n"),o.slottedSelectors.forEach((t=>{const s=new RegExp(t.orgSelector.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g");e=e.replace(s,t.updatedSelector)})),e}}}]);
//# sourceMappingURL=653.954e8c05.chunk.js.map