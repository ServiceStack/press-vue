const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D0Aquiur.js","assets/SrcPage.vue_vue_type_script_setup_true_lang-a6jd6O9E.js","assets/VideoGroup.vue_vue_type_script_setup_true_lang-DhpIGZ0y.js","assets/MarkdownComponent.vue_vue_type_script_setup_true_lang-Q69MJm3w.js","assets/GettingStarted.vue_vue_type_script_setup_true_lang-Drdl05xZ.js","assets/utils-CvDbha7Z.js","assets/about-DZEC4J8j.js","assets/MarkdownPage.vue_vue_type_script_setup_true_lang-fOuqJh0r.js","assets/blog-CCj4ilRs.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/logo-C-Zbn0Gp.js","assets/counter-Bn2fHmPx.js","assets/index-IYGy7FLn.js","assets/BlogTitle.vue_vue_type_script_setup_true_lang-CjPajLIC.js","assets/_slug_-B-07aiyw.js","assets/_name_-5TVcZ_2g.js","assets/_tag_-CZeLH135.js","assets/_year_-DGldcvIO.js","assets/privacy-BmXmRbEQ.js","assets/videos-CM8T1Jxt.js","assets/whatsnew-4i5za0gK.js","assets/whatsnew-smX3c2kX.css","assets/default-DrjoizYt.js","assets/empty-C9TE8qYs.js","assets/2024-03-01_vite-press-plugin-DAIRl2SQ.js","assets/2024-02-28_markdown-components-in-vue--e-Jxir6.js","assets/HelloApi.vue_vue_type_script_setup_true_lang-BTi4T7ZZ.js","assets/Counter.vue_vue_type_script_setup_true_lang-DAgM7lDR.js","assets/ChartJs-CBriic7b.js","assets/2023-11-22_net8-best-blazor-BQoM-3B6.js","assets/Templates.vue_vue_type_script_setup_true_lang-BY2dofpu.js","assets/2023-11-20_net8-blazor-template-ClSgFBuK.js","assets/2023-08-23_razor-ssg-new-blog-features-DKc5ETtz.js","assets/2023-03-30_razor-ssg-DsA-sEft.js","assets/2023-02-01_javascript-7UaN8rDJ.js","assets/2023-01-21_start-BEuFJb4f.js","assets/2023-01-11_rider-OGJm7b87.js","assets/2023-01-10_vs-udgk4NKy.js","assets/2023-01-01_deploy-HkOyxpss.js","assets/2022-12-31_typography-BHsnYxY8.js","assets/2022-09-06_hetzner-cloud-DiinOsMu.js","assets/2022-09-06_hetzner-cloud-oCAhSh5x.css","assets/press-vue-DKwtDlFC.js","assets/autoquerygrid-D8mliKBA.js","assets/components-BLjsHr0E.js","assets/admin-DVwKssEo.js","assets/modern-BRTsawzF.js","assets/feature1-B9HzpoWQ.js","assets/feature1-BJN2Rxr9.js","assets/feature1-qKGAJVyU.js","assets/component-links-CUHGkbkY.js","assets/features-C_ENahc3.js"])))=>i.map(i=>d[i]);
var op=Object.defineProperty;var rp=(e,t,n)=>t in e?op(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Pe=(e,t,n)=>rp(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Oa(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const et={},ds=[],Yt=()=>{},ap=()=>!1,ur=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Da=e=>e.startsWith("onUpdate:"),Ct=Object.assign,Ba=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ip=Object.prototype.hasOwnProperty,Ye=(e,t)=>ip.call(e,t),Ee=Array.isArray,ps=e=>po(e)==="[object Map]",As=e=>po(e)==="[object Set]",Gi=e=>po(e)==="[object Date]",Re=e=>typeof e=="function",lt=e=>typeof e=="string",$t=e=>typeof e=="symbol",nt=e=>e!==null&&typeof e=="object",Cu=e=>(nt(e)||Re(e))&&Re(e.then)&&Re(e.catch),Su=Object.prototype.toString,po=e=>Su.call(e),lp=e=>po(e).slice(8,-1),Tu=e=>po(e)==="[object Object]",Fa=e=>lt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Hs=Oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},up=/-(\w)/g,Bt=cr(e=>e.replace(up,(t,n)=>n?n.toUpperCase():"")),cp=/\B([A-Z])/g,En=cr(e=>e.replace(cp,"-$1").toLowerCase()),dr=cr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Or=cr(e=>e?`on${dr(e)}`:""),Sn=(e,t)=>!Object.is(e,t),Bo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Au=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Jo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Qi;const pr=()=>Qi||(Qi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kn(e){if(Ee(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=lt(s)?hp(s):Kn(s);if(o)for(const r in o)t[r]=o[r]}return t}else if(lt(e)||nt(e))return e}const dp=/;(?![^(]*\))/g,pp=/:([^]+)/,fp=/\/\*[^]*?\*\//g;function hp(e){const t={};return e.replace(fp,"").split(dp).forEach(n=>{if(n){const s=n.split(pp);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function _(e){let t="";if(lt(e))t=e;else if(Ee(e))for(let n=0;n<e.length;n++){const s=_(e[n]);s&&(t+=s+" ")}else if(nt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function ys(e){if(!e)return null;let{class:t,style:n}=e;return t&&!lt(t)&&(e.class=_(t)),n&&(e.style=Kn(n)),e}const mp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gp=Oa(mp);function Mu(e){return!!e||e===""}function vp(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=$n(e[s],t[s]);return n}function $n(e,t){if(e===t)return!0;let n=Gi(e),s=Gi(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=$t(e),s=$t(t),n||s)return e===t;if(n=Ee(e),s=Ee(t),n||s)return n&&s?vp(e,t):!1;if(n=nt(e),s=nt(t),n||s){if(!n||!s)return!1;const o=Object.keys(e).length,r=Object.keys(t).length;if(o!==r)return!1;for(const a in e){const i=e.hasOwnProperty(a),l=t.hasOwnProperty(a);if(i&&!l||!i&&l||!$n(e[a],t[a]))return!1}}return String(e)===String(t)}function Ha(e,t){return e.findIndex(n=>$n(n,t))}const _u=e=>!!(e&&e.__v_isRef===!0),X=e=>lt(e)?e:e==null?"":Ee(e)||nt(e)&&(e.toString===Su||!Re(e.toString))?_u(e)?X(e.value):JSON.stringify(e,Pu,2):String(e),Pu=(e,t)=>_u(t)?Pu(e,t.value):ps(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],r)=>(n[Dr(s,r)+" =>"]=o,n),{})}:As(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Dr(n))}:$t(t)?Dr(t):nt(t)&&!Ee(t)&&!Tu(t)?String(t):t,Dr=(e,t="")=>{var n;return $t(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class yp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=It,!t&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=It;try{return It=this,t()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function bp(){return It}let tt;const Br=new WeakSet;class Eu{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,It&&It.active&&It.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Br.has(this)&&(Br.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Lu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ji(this),Ru(this);const t=tt,n=Nt;tt=this,Nt=!0;try{return this.fn()}finally{zu(this),tt=t,Nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ua(t);this.deps=this.depsTail=void 0,Ji(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Br.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){oa(this)&&this.run()}get dirty(){return oa(this)}}let Iu=0,Ns,$s;function Lu(e,t=!1){if(e.flags|=8,t){e.next=$s,$s=e;return}e.next=Ns,Ns=e}function Na(){Iu++}function $a(){if(--Iu>0)return;if($s){let t=$s;for($s=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Ns;){let t=Ns;for(Ns=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Ru(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function zu(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),Ua(s),wp(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function oa(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ju(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ju(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ys))return;e.globalVersion=Ys;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!oa(e)){e.flags&=-3;return}const n=tt,s=Nt;tt=e,Nt=!0;try{Ru(e);const o=e.fn(e._value);(t.version===0||Sn(o,e._value))&&(e._value=o,t.version++)}catch(o){throw t.version++,o}finally{tt=n,Nt=s,zu(e),e.flags&=-3}}function Ua(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ua(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function wp(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Nt=!0;const Vu=[];function In(){Vu.push(Nt),Nt=!1}function Ln(){const e=Vu.pop();Nt=e===void 0?!0:e}function Ji(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=tt;tt=void 0;try{t()}finally{tt=n}}}let Ys=0;class kp{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Wa{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!tt||!Nt||tt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==tt)n=this.activeLink=new kp(tt,this),tt.deps?(n.prevDep=tt.depsTail,tt.depsTail.nextDep=n,tt.depsTail=n):tt.deps=tt.depsTail=n,Ou(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=tt.depsTail,n.nextDep=void 0,tt.depsTail.nextDep=n,tt.depsTail=n,tt.deps===n&&(tt.deps=s)}return n}trigger(t){this.version++,Ys++,this.notify(t)}notify(t){Na();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{$a()}}}function Ou(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Ou(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ra=new WeakMap,Hn=Symbol(""),aa=Symbol(""),Xs=Symbol("");function kt(e,t,n){if(Nt&&tt){let s=ra.get(e);s||ra.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new Wa),o.map=s,o.key=n),o.track()}}function dn(e,t,n,s,o,r){const a=ra.get(e);if(!a){Ys++;return}const i=l=>{l&&l.trigger()};if(Na(),t==="clear")a.forEach(i);else{const l=Ee(e),c=l&&Fa(n);if(l&&n==="length"){const u=Number(s);a.forEach((p,g)=>{(g==="length"||g===Xs||!$t(g)&&g>=u)&&i(p)})}else switch((n!==void 0||a.has(void 0))&&i(a.get(n)),c&&i(a.get(Xs)),t){case"add":l?c&&i(a.get("length")):(i(a.get(Hn)),ps(e)&&i(a.get(aa)));break;case"delete":l||(i(a.get(Hn)),ps(e)&&i(a.get(aa)));break;case"set":ps(e)&&i(a.get(Hn));break}}$a()}function ss(e){const t=Ze(e);return t===e?t:(kt(t,"iterate",Xs),Ot(e)?t:t.map(xt))}function fr(e){return kt(e=Ze(e),"iterate",Xs),e}const xp={__proto__:null,[Symbol.iterator](){return Fr(this,Symbol.iterator,xt)},concat(...e){return ss(this).concat(...e.map(t=>Ee(t)?ss(t):t))},entries(){return Fr(this,"entries",e=>(e[1]=xt(e[1]),e))},every(e,t){return an(this,"every",e,t,void 0,arguments)},filter(e,t){return an(this,"filter",e,t,n=>n.map(xt),arguments)},find(e,t){return an(this,"find",e,t,xt,arguments)},findIndex(e,t){return an(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return an(this,"findLast",e,t,xt,arguments)},findLastIndex(e,t){return an(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return an(this,"forEach",e,t,void 0,arguments)},includes(...e){return Hr(this,"includes",e)},indexOf(...e){return Hr(this,"indexOf",e)},join(e){return ss(this).join(e)},lastIndexOf(...e){return Hr(this,"lastIndexOf",e)},map(e,t){return an(this,"map",e,t,void 0,arguments)},pop(){return Ls(this,"pop")},push(...e){return Ls(this,"push",e)},reduce(e,...t){return Ki(this,"reduce",e,t)},reduceRight(e,...t){return Ki(this,"reduceRight",e,t)},shift(){return Ls(this,"shift")},some(e,t){return an(this,"some",e,t,void 0,arguments)},splice(...e){return Ls(this,"splice",e)},toReversed(){return ss(this).toReversed()},toSorted(e){return ss(this).toSorted(e)},toSpliced(...e){return ss(this).toSpliced(...e)},unshift(...e){return Ls(this,"unshift",e)},values(){return Fr(this,"values",xt)}};function Fr(e,t,n){const s=fr(e),o=s[t]();return s!==e&&!Ot(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.value&&(r.value=n(r.value)),r}),o}const Cp=Array.prototype;function an(e,t,n,s,o,r){const a=fr(e),i=a!==e&&!Ot(e),l=a[t];if(l!==Cp[t]){const p=l.apply(e,r);return i?xt(p):p}let c=n;a!==e&&(i?c=function(p,g){return n.call(this,xt(p),g,e)}:n.length>2&&(c=function(p,g){return n.call(this,p,g,e)}));const u=l.call(a,c,s);return i&&o?o(u):u}function Ki(e,t,n,s){const o=fr(e);let r=n;return o!==e&&(Ot(e)?n.length>3&&(r=function(a,i,l){return n.call(this,a,i,l,e)}):r=function(a,i,l){return n.call(this,a,xt(i),l,e)}),o[t](r,...s)}function Hr(e,t,n){const s=Ze(e);kt(s,"iterate",Xs);const o=s[t](...n);return(o===-1||o===!1)&&Qa(n[0])?(n[0]=Ze(n[0]),s[t](...n)):o}function Ls(e,t,n=[]){In(),Na();const s=Ze(e)[t].apply(e,n);return $a(),Ln(),s}const Sp=Oa("__proto__,__v_isRef,__isVue"),Du=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($t));function Tp(e){$t(e)||(e=String(e));const t=Ze(this);return kt(t,"has",e),t.hasOwnProperty(e)}class Bu{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(o?r?jp:$u:r?Nu:Hu).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const a=Ee(t);if(!o){let l;if(a&&(l=xp[n]))return l;if(n==="hasOwnProperty")return Tp}const i=Reflect.get(t,n,mt(t)?t:s);return($t(n)?Du.has(n):Sp(n))||(o||kt(t,"get",n),r)?i:mt(i)?a&&Fa(n)?i:i.value:nt(i)?o?Wu(i):hr(i):i}}class Fu extends Bu{constructor(t=!1){super(!1,t)}set(t,n,s,o){let r=t[n];if(!this._isShallow){const l=Un(r);if(!Ot(s)&&!Un(s)&&(r=Ze(r),s=Ze(s)),!Ee(t)&&mt(r)&&!mt(s))return l?!1:(r.value=s,!0)}const a=Ee(t)&&Fa(n)?Number(n)<t.length:Ye(t,n),i=Reflect.set(t,n,s,mt(t)?t:o);return t===Ze(o)&&(a?Sn(s,r)&&dn(t,"set",n,s):dn(t,"add",n,s)),i}deleteProperty(t,n){const s=Ye(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&dn(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!$t(n)||!Du.has(n))&&kt(t,"has",n),s}ownKeys(t){return kt(t,"iterate",Ee(t)?"length":Hn),Reflect.ownKeys(t)}}class Ap extends Bu{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Mp=new Fu,_p=new Ap,Pp=new Fu(!0);const ia=e=>e,Mo=e=>Reflect.getPrototypeOf(e);function Ep(e,t,n){return function(...s){const o=this.__v_raw,r=Ze(o),a=ps(r),i=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=o[e](...s),u=n?ia:t?la:xt;return!t&&kt(r,"iterate",l?aa:Hn),{next(){const{value:p,done:g}=c.next();return g?{value:p,done:g}:{value:i?[u(p[0]),u(p[1])]:u(p),done:g}},[Symbol.iterator](){return this}}}}function _o(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ip(e,t){const n={get(o){const r=this.__v_raw,a=Ze(r),i=Ze(o);e||(Sn(o,i)&&kt(a,"get",o),kt(a,"get",i));const{has:l}=Mo(a),c=t?ia:e?la:xt;if(l.call(a,o))return c(r.get(o));if(l.call(a,i))return c(r.get(i));r!==a&&r.get(o)},get size(){const o=this.__v_raw;return!e&&kt(Ze(o),"iterate",Hn),Reflect.get(o,"size",o)},has(o){const r=this.__v_raw,a=Ze(r),i=Ze(o);return e||(Sn(o,i)&&kt(a,"has",o),kt(a,"has",i)),o===i?r.has(o):r.has(o)||r.has(i)},forEach(o,r){const a=this,i=a.__v_raw,l=Ze(i),c=t?ia:e?la:xt;return!e&&kt(l,"iterate",Hn),i.forEach((u,p)=>o.call(r,c(u),c(p),a))}};return Ct(n,e?{add:_o("add"),set:_o("set"),delete:_o("delete"),clear:_o("clear")}:{add(o){!t&&!Ot(o)&&!Un(o)&&(o=Ze(o));const r=Ze(this);return Mo(r).has.call(r,o)||(r.add(o),dn(r,"add",o,o)),this},set(o,r){!t&&!Ot(r)&&!Un(r)&&(r=Ze(r));const a=Ze(this),{has:i,get:l}=Mo(a);let c=i.call(a,o);c||(o=Ze(o),c=i.call(a,o));const u=l.call(a,o);return a.set(o,r),c?Sn(r,u)&&dn(a,"set",o,r):dn(a,"add",o,r),this},delete(o){const r=Ze(this),{has:a,get:i}=Mo(r);let l=a.call(r,o);l||(o=Ze(o),l=a.call(r,o)),i&&i.call(r,o);const c=r.delete(o);return l&&dn(r,"delete",o,void 0),c},clear(){const o=Ze(this),r=o.size!==0,a=o.clear();return r&&dn(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Ep(o,e,t)}),n}function qa(e,t){const n=Ip(e,t);return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(Ye(n,o)&&o in s?n:s,o,r)}const Lp={get:qa(!1,!1)},Rp={get:qa(!1,!0)},zp={get:qa(!0,!1)};const Hu=new WeakMap,Nu=new WeakMap,$u=new WeakMap,jp=new WeakMap;function Vp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Op(e){return e.__v_skip||!Object.isExtensible(e)?0:Vp(lp(e))}function hr(e){return Un(e)?e:Ga(e,!1,Mp,Lp,Hu)}function Uu(e){return Ga(e,!1,Pp,Rp,Nu)}function Wu(e){return Ga(e,!0,_p,zp,$u)}function Ga(e,t,n,s,o){if(!nt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const a=Op(e);if(a===0)return e;const i=new Proxy(e,a===2?s:n);return o.set(e,i),i}function fs(e){return Un(e)?fs(e.__v_raw):!!(e&&e.__v_isReactive)}function Un(e){return!!(e&&e.__v_isReadonly)}function Ot(e){return!!(e&&e.__v_isShallow)}function Qa(e){return e?!!e.__v_raw:!1}function Ze(e){const t=e&&e.__v_raw;return t?Ze(t):e}function Dp(e){return!Ye(e,"__v_skip")&&Object.isExtensible(e)&&Au(e,"__v_skip",!0),e}const xt=e=>nt(e)?hr(e):e,la=e=>nt(e)?Wu(e):e;function mt(e){return e?e.__v_isRef===!0:!1}function K(e){return Gu(e,!1)}function qu(e){return Gu(e,!0)}function Gu(e,t){return mt(e)?e:new Bp(e,t)}class Bp{constructor(t,n){this.dep=new Wa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Ze(t),this._value=n?t:xt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ot(t)||Un(t);t=s?t:Ze(t),Sn(t,n)&&(this._rawValue=t,this._value=s?t:xt(t),this.dep.trigger())}}function ge(e){return mt(e)?e.value:e}function Fp(e){return Re(e)?e():ge(e)}const Hp={get:(e,t,n)=>t==="__v_raw"?e:ge(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return mt(o)&&!mt(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Qu(e){return fs(e)?e:new Proxy(e,Hp)}class Np{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Wa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ys-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&tt!==this)return Lu(this,!0),!0}get value(){const t=this.dep.track();return ju(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function $p(e,t,n=!1){let s,o;return Re(e)?s=e:(s=e.get,o=e.set),new Np(s,o,n)}const Po={},Ko=new WeakMap;let On;function Up(e,t=!1,n=On){if(n){let s=Ko.get(n);s||Ko.set(n,s=[]),s.push(e)}}function Wp(e,t,n=et){const{immediate:s,deep:o,once:r,scheduler:a,augmentJob:i,call:l}=n,c=E=>o?E:Ot(E)||o===!1||o===0?pn(E,1):pn(E);let u,p,g,f,v=!1,m=!1;if(mt(e)?(p=()=>e.value,v=Ot(e)):fs(e)?(p=()=>c(e),v=!0):Ee(e)?(m=!0,v=e.some(E=>fs(E)||Ot(E)),p=()=>e.map(E=>{if(mt(E))return E.value;if(fs(E))return c(E);if(Re(E))return l?l(E,2):E()})):Re(e)?t?p=l?()=>l(e,2):e:p=()=>{if(g){In();try{g()}finally{Ln()}}const E=On;On=u;try{return l?l(e,3,[f]):e(f)}finally{On=E}}:p=Yt,t&&o){const E=p,M=o===!0?1/0:o;p=()=>pn(E(),M)}const k=bp(),S=()=>{u.stop(),k&&k.active&&Ba(k.effects,u)};if(r&&t){const E=t;t=(...M)=>{E(...M),S()}}let C=m?new Array(e.length).fill(Po):Po;const A=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(t){const M=u.run();if(o||v||(m?M.some((q,I)=>Sn(q,C[I])):Sn(M,C))){g&&g();const q=On;On=u;try{const I=[M,C===Po?void 0:m&&C[0]===Po?[]:C,f];l?l(t,3,I):t(...I),C=M}finally{On=q}}}else u.run()};return i&&i(A),u=new Eu(p),u.scheduler=a?()=>a(A,!1):A,f=E=>Up(E,!1,u),g=u.onStop=()=>{const E=Ko.get(u);if(E){if(l)l(E,4);else for(const M of E)M();Ko.delete(u)}},t?s?A(!0):C=u.run():a?a(A.bind(null,!0),!0):u.run(),S.pause=u.pause.bind(u),S.resume=u.resume.bind(u),S.stop=S,S}function pn(e,t=1/0,n){if(t<=0||!nt(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,mt(e))pn(e.value,t,n);else if(Ee(e))for(let s=0;s<e.length;s++)pn(e[s],t,n);else if(As(e)||ps(e))e.forEach(s=>{pn(s,t,n)});else if(Tu(e)){for(const s in e)pn(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&pn(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function fo(e,t,n,s){try{return s?e(...s):e()}catch(o){ho(o,t,n)}}function tn(e,t,n,s){if(Re(e)){const o=fo(e,t,n,s);return o&&Cu(o)&&o.catch(r=>{ho(r,t,n)}),o}if(Ee(e)){const o=[];for(let r=0;r<e.length;r++)o.push(tn(e[r],t,n,s));return o}}function ho(e,t,n,s=!0){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||et;if(t){let i=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,l,c)===!1)return}i=i.parent}if(r){In(),fo(r,null,10,[e,l,c]),Ln();return}}qp(e,n,o,s,a)}function qp(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const At=[];let Jt=-1;const hs=[];let kn=null,rs=0;const Ju=Promise.resolve();let Zo=null;function Ut(e){const t=Zo||Ju;return e?t.then(this?e.bind(this):e):t}function Gp(e){let t=Jt+1,n=At.length;for(;t<n;){const s=t+n>>>1,o=At[s],r=eo(o);r<e||r===e&&o.flags&2?t=s+1:n=s}return t}function Ja(e){if(!(e.flags&1)){const t=eo(e),n=At[At.length-1];!n||!(e.flags&2)&&t>=eo(n)?At.push(e):At.splice(Gp(t),0,e),e.flags|=1,Ku()}}function Ku(){Zo||(Zo=Ju.then(Yu))}function Qp(e){Ee(e)?hs.push(...e):kn&&e.id===-1?kn.splice(rs+1,0,e):e.flags&1||(hs.push(e),e.flags|=1),Ku()}function Zi(e,t,n=Jt+1){for(;n<At.length;n++){const s=At[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;At.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Zu(e){if(hs.length){const t=[...new Set(hs)].sort((n,s)=>eo(n)-eo(s));if(hs.length=0,kn){kn.push(...t);return}for(kn=t,rs=0;rs<kn.length;rs++){const n=kn[rs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}kn=null,rs=0}}const eo=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Yu(e){try{for(Jt=0;Jt<At.length;Jt++){const t=At[Jt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),fo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Jt<At.length;Jt++){const t=At[Jt];t&&(t.flags&=-2)}Jt=-1,At.length=0,Zu(),Zo=null,(At.length||hs.length)&&Yu()}}let ht=null,Xu=null;function Yo(e){const t=ht;return ht=e,Xu=e&&e.type.__scopeId||null,t}function $e(e,t=ht,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&ll(-1);const r=Yo(t);let a;try{a=e(...o)}finally{Yo(r),s._d&&ll(1)}return a};return s._n=!0,s._c=!0,s._d=!0,s}function Wn(e,t){if(ht===null)return e;const n=wr(ht),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[r,a,i,l=et]=t[o];r&&(Re(r)&&(r={mounted:r,updated:r}),r.deep&&pn(a),s.push({dir:r,instance:n,value:a,oldValue:void 0,arg:i,modifiers:l}))}return e}function jn(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let a=0;a<o.length;a++){const i=o[a];r&&(i.oldValue=r[a].value);let l=i.dir[s];l&&(In(),tn(l,n,8,[e.el,i,e,t]),Ln())}}const Jp=Symbol("_vte"),Kp=e=>e.__isTeleport;function Ka(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ka(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Te(e,t){return Re(e)?Ct({name:e.name},t,{setup:e}):e}function Za(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Xo(e,t,n,s,o=!1){if(Ee(e)){e.forEach((v,m)=>Xo(v,t&&(Ee(t)?t[m]:t),n,s,o));return}if(ms(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Xo(e,t,n,s.component.subTree);return}const r=s.shapeFlag&4?wr(s.component):s.el,a=o?null:r,{i,r:l}=e,c=t&&t.r,u=i.refs===et?i.refs={}:i.refs,p=i.setupState,g=Ze(p),f=p===et?()=>!1:v=>Ye(g,v);if(c!=null&&c!==l&&(lt(c)?(u[c]=null,f(c)&&(p[c]=null)):mt(c)&&(c.value=null)),Re(l))fo(l,i,12,[a,u]);else{const v=lt(l),m=mt(l);if(v||m){const k=()=>{if(e.f){const S=v?f(l)?p[l]:u[l]:l.value;o?Ee(S)&&Ba(S,r):Ee(S)?S.includes(r)||S.push(r):v?(u[l]=[r],f(l)&&(p[l]=u[l])):(l.value=[r],e.k&&(u[e.k]=l.value))}else v?(u[l]=a,f(l)&&(p[l]=a)):m&&(l.value=a,e.k&&(u[e.k]=a))};a?(k.id=-1,Et(k,n)):k()}}}const Yi=e=>e.nodeType===8;pr().requestIdleCallback;pr().cancelIdleCallback;function Zp(e,t){if(Yi(e)&&e.data==="["){let n=1,s=e.nextSibling;for(;s;){if(s.nodeType===1){if(t(s)===!1)break}else if(Yi(s))if(s.data==="]"){if(--n===0)break}else s.data==="["&&n++;s=s.nextSibling}}else t(e)}const ms=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Yp(e){Re(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:s,delay:o=200,hydrate:r,timeout:a,suspensible:i=!0,onError:l}=e;let c=null,u,p=0;const g=()=>(p++,c=null,f()),f=()=>{let v;return c||(v=c=t().catch(m=>{if(m=m instanceof Error?m:new Error(String(m)),l)return new Promise((k,S)=>{l(m,()=>k(g()),()=>S(m),p+1)});throw m}).then(m=>v!==c&&c?c:(m&&(m.__esModule||m[Symbol.toStringTag]==="Module")&&(m=m.default),u=m,m)))};return Te({name:"AsyncComponentWrapper",__asyncLoader:f,__asyncHydrate(v,m,k){const S=r?()=>{const C=r(k,A=>Zp(v,A));C&&(m.bum||(m.bum=[])).push(C)}:k;u?S():f().then(()=>!m.isUnmounted&&S())},get __asyncResolved(){return u},setup(){const v=ft;if(Za(v),u)return()=>Nr(u,v);const m=A=>{c=null,ho(A,v,13,!s)};if(i&&v.suspense||ws)return f().then(A=>()=>Nr(A,v)).catch(A=>(m(A),()=>s?Ae(s,{error:A}):null));const k=K(!1),S=K(),C=K(!!o);return o&&setTimeout(()=>{C.value=!1},o),a!=null&&setTimeout(()=>{if(!k.value&&!S.value){const A=new Error(`Async component timed out after ${a}ms.`);m(A),S.value=A}},a),f().then(()=>{k.value=!0,v.parent&&Ya(v.parent.vnode)&&v.parent.update()}).catch(A=>{m(A),S.value=A}),()=>{if(k.value&&u)return Nr(u,v);if(S.value&&s)return Ae(s,{error:S.value});if(n&&!C.value)return Ae(n)}}})}function Nr(e,t){const{ref:n,props:s,children:o,ce:r}=t.vnode,a=Ae(e,s,o);return a.ref=n,a.ce=r,delete t.vnode.ce,a}const Ya=e=>e.type.__isKeepAlive;function ec(e,t){nc(e,"a",t)}function tc(e,t){nc(e,"da",t)}function nc(e,t,n=ft){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(mr(t,s,n),n){let o=n.parent;for(;o&&o.parent;)Ya(o.parent.vnode)&&Xp(s,t,n,o),o=o.parent}}function Xp(e,t,n,s){const o=mr(t,e,s,!0);sn(()=>{Ba(s[t],o)},n)}function mr(e,t,n=ft,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...a)=>{In();const i=mo(n),l=tn(t,n,e,a);return i(),Ln(),l});return s?o.unshift(r):o.push(r),r}}const mn=e=>(t,n=ft)=>{(!ws||e==="sp")&&mr(e,(...s)=>t(...s),n)},ef=mn("bm"),Mt=mn("m"),tf=mn("bu"),nf=mn("u"),sc=mn("bum"),sn=mn("um"),sf=mn("sp"),of=mn("rtg"),rf=mn("rtc");function af(e,t=ft){mr("ec",e,t)}const Xa="components",lf="directives";function ye(e,t){return ti(Xa,e,!0,t)||e}const oc=Symbol.for("v-ndc");function ei(e){return lt(e)?ti(Xa,e,!1)||e:e||oc}function uf(e){return ti(lf,e)}function ti(e,t,n=!0,s=!1){const o=ht||ft;if(o){const r=o.type;if(e===Xa){const i=Qf(r,!1);if(i&&(i===t||i===Bt(t)||i===dr(Bt(t))))return r}const a=Xi(o[e]||r[e],t)||Xi(o.appContext[e],t);return!a&&s?r:a}}function Xi(e,t){return e&&(e[t]||e[Bt(t)]||e[dr(Bt(t))])}function Xe(e,t,n,s){let o;const r=n,a=Ee(e);if(a||lt(e)){const i=a&&fs(e);let l=!1;i&&(l=!Ot(e),e=fr(e)),o=new Array(e.length);for(let c=0,u=e.length;c<u;c++)o[c]=t(l?xt(e[c]):e[c],c,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,r)}else if(nt(e))if(e[Symbol.iterator])o=Array.from(e,(i,l)=>t(i,l,void 0,r));else{const i=Object.keys(e);o=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const u=i[l];o[l]=t(e[u],u,l,r)}}else o=[];return o}function ni(e,t){for(let n=0;n<t.length;n++){const s=t[n];if(Ee(s))for(let o=0;o<s.length;o++)e[s[o].name]=s[o].fn;else s&&(e[s.name]=s.key?(...o)=>{const r=s.fn(...o);return r&&(r.key=s.key),r}:s.fn)}return e}function he(e,t,n={},s,o){if(ht.ce||ht.parent&&ms(ht.parent)&&ht.parent.ce)return t!=="default"&&(n.name=t),h(),ke(ze,null,[Ae("slot",n,s&&s())],64);let r=e[t];r&&r._c&&(r._d=!1),h();const a=r&&rc(r(n)),i=n.key||a&&a.key,l=ke(ze,{key:(i&&!$t(i)?i:`_${t}`)+(!a&&s?"_fb":"")},a||(s?s():[]),a&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function rc(e){return e.some(t=>so(t)?!(t.type===An||t.type===ze&&!rc(t.children)):!0)?e:null}const ua=e=>e?Ac(e)?wr(e):ua(e.parent):null,Us=Ct(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ua(e.parent),$root:e=>ua(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>lc(e),$forceUpdate:e=>e.f||(e.f=()=>{Ja(e.update)}),$nextTick:e=>e.n||(e.n=Ut.bind(e.proxy)),$watch:e=>Lf.bind(e)}),$r=(e,t)=>e!==et&&!e.__isScriptSetup&&Ye(e,t),cf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:r,accessCache:a,type:i,appContext:l}=e;let c;if(t[0]!=="$"){const f=a[t];if(f!==void 0)switch(f){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if($r(s,t))return a[t]=1,s[t];if(o!==et&&Ye(o,t))return a[t]=2,o[t];if((c=e.propsOptions[0])&&Ye(c,t))return a[t]=3,r[t];if(n!==et&&Ye(n,t))return a[t]=4,n[t];ca&&(a[t]=0)}}const u=Us[t];let p,g;if(u)return t==="$attrs"&&kt(e.attrs,"get",""),u(e);if((p=i.__cssModules)&&(p=p[t]))return p;if(n!==et&&Ye(n,t))return a[t]=4,n[t];if(g=l.config.globalProperties,Ye(g,t))return g[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return $r(o,t)?(o[t]=n,!0):s!==et&&Ye(s,t)?(s[t]=n,!0):Ye(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r}},a){let i;return!!n[a]||e!==et&&Ye(e,a)||$r(t,a)||(i=r[0])&&Ye(i,a)||Ye(s,a)||Ye(Us,a)||Ye(o.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Ye(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function gr(){return ac().slots}function df(){return ac().attrs}function ac(){const e=st();return e.setupContext||(e.setupContext=_c(e))}function el(e){return Ee(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ca=!0;function pf(e){const t=lc(e),n=e.proxy,s=e.ctx;ca=!1,t.beforeCreate&&tl(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:a,watch:i,provide:l,inject:c,created:u,beforeMount:p,mounted:g,beforeUpdate:f,updated:v,activated:m,deactivated:k,beforeDestroy:S,beforeUnmount:C,destroyed:A,unmounted:E,render:M,renderTracked:q,renderTriggered:I,errorCaptured:U,serverPrefetch:G,expose:re,inheritAttrs:Z,components:pe,directives:ve,filters:ue}=t;if(c&&ff(c,s,null),a)for(const P in a){const F=a[P];Re(F)&&(s[P]=F.bind(n))}if(o){const P=o.call(n,n);nt(P)&&(e.data=hr(P))}if(ca=!0,r)for(const P in r){const F=r[P],ee=Re(F)?F.bind(n,n):Re(F.get)?F.get.bind(n,n):Yt,L=!Re(F)&&Re(F.set)?F.set.bind(n):Yt,W=x({get:ee,set:L});Object.defineProperty(s,P,{enumerable:!0,configurable:!0,get:()=>W.value,set:ce=>W.value=ce})}if(i)for(const P in i)ic(i[P],s,n,P);if(l){const P=Re(l)?l.call(n):l;Reflect.ownKeys(P).forEach(F=>{hn(F,P[F])})}u&&tl(u,e,"c");function ne(P,F){Ee(F)?F.forEach(ee=>P(ee.bind(n))):F&&P(F.bind(n))}if(ne(ef,p),ne(Mt,g),ne(tf,f),ne(nf,v),ne(ec,m),ne(tc,k),ne(af,U),ne(rf,q),ne(of,I),ne(sc,C),ne(sn,E),ne(sf,G),Ee(re))if(re.length){const P=e.exposed||(e.exposed={});re.forEach(F=>{Object.defineProperty(P,F,{get:()=>n[F],set:ee=>n[F]=ee})})}else e.exposed||(e.exposed={});M&&e.render===Yt&&(e.render=M),Z!=null&&(e.inheritAttrs=Z),pe&&(e.components=pe),ve&&(e.directives=ve),G&&Za(e)}function ff(e,t,n=Yt){Ee(e)&&(e=da(e));for(const s in e){const o=e[s];let r;nt(o)?"default"in o?r=Je(o.from||s,o.default,!0):r=Je(o.from||s):r=Je(o),mt(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[s]=r}}function tl(e,t,n){tn(Ee(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function ic(e,t,n,s){let o=s.includes(".")?kc(n,s):()=>n[s];if(lt(e)){const r=t[e];Re(r)&&Rt(o,r)}else if(Re(e))Rt(o,e.bind(n));else if(nt(e))if(Ee(e))e.forEach(r=>ic(r,t,n,s));else{const r=Re(e.handler)?e.handler.bind(n):t[e.handler];Re(r)&&Rt(o,r,e)}}function lc(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,i=r.get(t);let l;return i?l=i:!o.length&&!n&&!s?l=t:(l={},o.length&&o.forEach(c=>er(l,c,a,!0)),er(l,t,a)),nt(t)&&r.set(t,l),l}function er(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&er(e,r,n,!0),o&&o.forEach(a=>er(e,a,n,!0));for(const a in t)if(!(s&&a==="expose")){const i=hf[a]||n&&n[a];e[a]=i?i(e[a],t[a]):t[a]}return e}const hf={data:nl,props:sl,emits:sl,methods:Ds,computed:Ds,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Ds,directives:Ds,watch:gf,provide:nl,inject:mf};function nl(e,t){return t?e?function(){return Ct(Re(e)?e.call(this,this):e,Re(t)?t.call(this,this):t)}:t:e}function mf(e,t){return Ds(da(e),da(t))}function da(e){if(Ee(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Tt(e,t){return e?[...new Set([].concat(e,t))]:t}function Ds(e,t){return e?Ct(Object.create(null),e,t):t}function sl(e,t){return e?Ee(e)&&Ee(t)?[...new Set([...e,...t])]:Ct(Object.create(null),el(e),el(t??{})):t}function gf(e,t){if(!e)return t;if(!t)return e;const n=Ct(Object.create(null),e);for(const s in t)n[s]=Tt(e[s],t[s]);return n}function uc(){return{app:null,config:{isNativeTag:ap,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vf=0;function yf(e,t){return function(s,o=null){Re(s)||(s=Ct({},s)),o!=null&&!nt(o)&&(o=null);const r=uc(),a=new WeakSet,i=[];let l=!1;const c=r.app={_uid:vf++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:Kf,get config(){return r.config},set config(u){},use(u,...p){return a.has(u)||(u&&Re(u.install)?(a.add(u),u.install(c,...p)):Re(u)&&(a.add(u),u(c,...p))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,p){return p?(r.components[u]=p,c):r.components[u]},directive(u,p){return p?(r.directives[u]=p,c):r.directives[u]},mount(u,p,g){if(!l){const f=c._ceVNode||Ae(s,o);return f.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),e(f,u,g),l=!0,c._container=u,u.__vue_app__=c,wr(f.component)}},onUnmount(u){i.push(u)},unmount(){l&&(tn(i,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,p){return r.provides[u]=p,c},runWithContext(u){const p=Nn;Nn=c;try{return u()}finally{Nn=p}}};return c}}let Nn=null;function hn(e,t){if(ft){let n=ft.provides;const s=ft.parent&&ft.parent.provides;s===n&&(n=ft.provides=Object.create(s)),n[e]=t}}function Je(e,t,n=!1){const s=ft||ht;if(s||Nn){const o=Nn?Nn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Re(t)?t.call(s&&s.proxy):t}}function bf(){return!!(ft||ht||Nn)}const cc={},dc=()=>Object.create(cc),pc=e=>Object.getPrototypeOf(e)===cc;function wf(e,t,n,s=!1){const o={},r=dc();e.propsDefaults=Object.create(null),fc(e,t,o,r);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);n?e.props=s?o:Uu(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function kf(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:a}}=e,i=Ze(o),[l]=e.propsOptions;let c=!1;if((s||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let g=u[p];if(vr(e.emitsOptions,g))continue;const f=t[g];if(l)if(Ye(r,g))f!==r[g]&&(r[g]=f,c=!0);else{const v=Bt(g);o[v]=pa(l,i,v,f,e,!1)}else f!==r[g]&&(r[g]=f,c=!0)}}}else{fc(e,t,o,r)&&(c=!0);let u;for(const p in i)(!t||!Ye(t,p)&&((u=En(p))===p||!Ye(t,u)))&&(l?n&&(n[p]!==void 0||n[u]!==void 0)&&(o[p]=pa(l,i,p,void 0,e,!0)):delete o[p]);if(r!==i)for(const p in r)(!t||!Ye(t,p))&&(delete r[p],c=!0)}c&&dn(e.attrs,"set","")}function fc(e,t,n,s){const[o,r]=e.propsOptions;let a=!1,i;if(t)for(let l in t){if(Hs(l))continue;const c=t[l];let u;o&&Ye(o,u=Bt(l))?!r||!r.includes(u)?n[u]=c:(i||(i={}))[u]=c:vr(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,a=!0)}if(r){const l=Ze(n),c=i||et;for(let u=0;u<r.length;u++){const p=r[u];n[p]=pa(o,l,p,c[p],e,!Ye(c,p))}}return a}function pa(e,t,n,s,o,r){const a=e[n];if(a!=null){const i=Ye(a,"default");if(i&&s===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Re(l)){const{propsDefaults:c}=o;if(n in c)s=c[n];else{const u=mo(o);s=c[n]=l.call(null,t),u()}}else s=l;o.ce&&o.ce._setProp(n,s)}a[0]&&(r&&!i?s=!1:a[1]&&(s===""||s===En(n))&&(s=!0))}return s}const xf=new WeakMap;function hc(e,t,n=!1){const s=n?xf:t.propsCache,o=s.get(e);if(o)return o;const r=e.props,a={},i=[];let l=!1;if(!Re(e)){const u=p=>{l=!0;const[g,f]=hc(p,t,!0);Ct(a,g),f&&i.push(...f)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return nt(e)&&s.set(e,ds),ds;if(Ee(r))for(let u=0;u<r.length;u++){const p=Bt(r[u]);ol(p)&&(a[p]=et)}else if(r)for(const u in r){const p=Bt(u);if(ol(p)){const g=r[u],f=a[p]=Ee(g)||Re(g)?{type:g}:Ct({},g),v=f.type;let m=!1,k=!0;if(Ee(v))for(let S=0;S<v.length;++S){const C=v[S],A=Re(C)&&C.name;if(A==="Boolean"){m=!0;break}else A==="String"&&(k=!1)}else m=Re(v)&&v.name==="Boolean";f[0]=m,f[1]=k,(m||Ye(f,"default"))&&i.push(p)}}const c=[a,i];return nt(e)&&s.set(e,c),c}function ol(e){return e[0]!=="$"&&!Hs(e)}const mc=e=>e[0]==="_"||e==="$stable",si=e=>Ee(e)?e.map(Zt):[Zt(e)],Cf=(e,t,n)=>{if(t._n)return t;const s=$e((...o)=>si(t(...o)),n);return s._c=!1,s},gc=(e,t,n)=>{const s=e._ctx;for(const o in e){if(mc(o))continue;const r=e[o];if(Re(r))t[o]=Cf(o,r,s);else if(r!=null){const a=si(r);t[o]=()=>a}}},vc=(e,t)=>{const n=si(t);e.slots.default=()=>n},yc=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},Sf=(e,t,n)=>{const s=e.slots=dc();if(e.vnode.shapeFlag&32){const o=t._;o?(yc(s,t,n),n&&Au(s,"_",o,!0)):gc(t,s)}else t&&vc(e,t)},Tf=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,a=et;if(s.shapeFlag&32){const i=t._;i?n&&i===1?r=!1:yc(o,t,n):(r=!t.$stable,gc(t,o)),a=t}else t&&(vc(e,t),a={default:1});if(r)for(const i in o)!mc(i)&&a[i]==null&&delete o[i]},Et=Bf;function Af(e){return Mf(e)}function Mf(e,t){const n=pr();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:a,createText:i,createComment:l,setText:c,setElementText:u,parentNode:p,nextSibling:g,setScopeId:f=Yt,insertStaticContent:v}=e,m=(b,w,T,V=null,j=null,z=null,ae=void 0,se=null,oe=!!w.dynamicChildren)=>{if(b===w)return;b&&!Rs(b,w)&&(V=R(b),ce(b,j,z,!0),b=null),w.patchFlag===-2&&(oe=!1,w.dynamicChildren=null);const{type:Y,ref:Se,shapeFlag:le}=w;switch(Y){case yr:k(b,w,T,V);break;case An:S(b,w,T,V);break;case Fo:b==null&&C(w,T,V,ae);break;case ze:pe(b,w,T,V,j,z,ae,se,oe);break;default:le&1?M(b,w,T,V,j,z,ae,se,oe):le&6?ve(b,w,T,V,j,z,ae,se,oe):(le&64||le&128)&&Y.process(b,w,T,V,j,z,ae,se,oe,D)}Se!=null&&j&&Xo(Se,b&&b.ref,z,w||b,!w)},k=(b,w,T,V)=>{if(b==null)s(w.el=i(w.children),T,V);else{const j=w.el=b.el;w.children!==b.children&&c(j,w.children)}},S=(b,w,T,V)=>{b==null?s(w.el=l(w.children||""),T,V):w.el=b.el},C=(b,w,T,V)=>{[b.el,b.anchor]=v(b.children,w,T,V,b.el,b.anchor)},A=({el:b,anchor:w},T,V)=>{let j;for(;b&&b!==w;)j=g(b),s(b,T,V),b=j;s(w,T,V)},E=({el:b,anchor:w})=>{let T;for(;b&&b!==w;)T=g(b),o(b),b=T;o(w)},M=(b,w,T,V,j,z,ae,se,oe)=>{w.type==="svg"?ae="svg":w.type==="math"&&(ae="mathml"),b==null?q(w,T,V,j,z,ae,se,oe):G(b,w,j,z,ae,se,oe)},q=(b,w,T,V,j,z,ae,se)=>{let oe,Y;const{props:Se,shapeFlag:le,transition:xe,dirs:be}=b;if(oe=b.el=a(b.type,z,Se&&Se.is,Se),le&8?u(oe,b.children):le&16&&U(b.children,oe,null,V,j,Ur(b,z),ae,se),be&&jn(b,null,V,"created"),I(oe,b,b.scopeId,ae,V),Se){for(const Oe in Se)Oe!=="value"&&!Hs(Oe)&&r(oe,Oe,null,Se[Oe],z,V);"value"in Se&&r(oe,"value",null,Se.value,z),(Y=Se.onVnodeBeforeMount)&&Gt(Y,V,b)}be&&jn(b,null,V,"beforeMount");const Ie=_f(j,xe);Ie&&xe.beforeEnter(oe),s(oe,w,T),((Y=Se&&Se.onVnodeMounted)||Ie||be)&&Et(()=>{Y&&Gt(Y,V,b),Ie&&xe.enter(oe),be&&jn(b,null,V,"mounted")},j)},I=(b,w,T,V,j)=>{if(T&&f(b,T),V)for(let z=0;z<V.length;z++)f(b,V[z]);if(j){let z=j.subTree;if(w===z||Cc(z.type)&&(z.ssContent===w||z.ssFallback===w)){const ae=j.vnode;I(b,ae,ae.scopeId,ae.slotScopeIds,j.parent)}}},U=(b,w,T,V,j,z,ae,se,oe=0)=>{for(let Y=oe;Y<b.length;Y++){const Se=b[Y]=se?xn(b[Y]):Zt(b[Y]);m(null,Se,w,T,V,j,z,ae,se)}},G=(b,w,T,V,j,z,ae)=>{const se=w.el=b.el;let{patchFlag:oe,dynamicChildren:Y,dirs:Se}=w;oe|=b.patchFlag&16;const le=b.props||et,xe=w.props||et;let be;if(T&&Vn(T,!1),(be=xe.onVnodeBeforeUpdate)&&Gt(be,T,w,b),Se&&jn(w,b,T,"beforeUpdate"),T&&Vn(T,!0),(le.innerHTML&&xe.innerHTML==null||le.textContent&&xe.textContent==null)&&u(se,""),Y?re(b.dynamicChildren,Y,se,T,V,Ur(w,j),z):ae||F(b,w,se,null,T,V,Ur(w,j),z,!1),oe>0){if(oe&16)Z(se,le,xe,T,j);else if(oe&2&&le.class!==xe.class&&r(se,"class",null,xe.class,j),oe&4&&r(se,"style",le.style,xe.style,j),oe&8){const Ie=w.dynamicProps;for(let Oe=0;Oe<Ie.length;Oe++){const Ve=Ie[Oe],te=le[Ve],me=xe[Ve];(me!==te||Ve==="value")&&r(se,Ve,te,me,j,T)}}oe&1&&b.children!==w.children&&u(se,w.children)}else!ae&&Y==null&&Z(se,le,xe,T,j);((be=xe.onVnodeUpdated)||Se)&&Et(()=>{be&&Gt(be,T,w,b),Se&&jn(w,b,T,"updated")},V)},re=(b,w,T,V,j,z,ae)=>{for(let se=0;se<w.length;se++){const oe=b[se],Y=w[se],Se=oe.el&&(oe.type===ze||!Rs(oe,Y)||oe.shapeFlag&70)?p(oe.el):T;m(oe,Y,Se,null,V,j,z,ae,!0)}},Z=(b,w,T,V,j)=>{if(w!==T){if(w!==et)for(const z in w)!Hs(z)&&!(z in T)&&r(b,z,w[z],null,j,V);for(const z in T){if(Hs(z))continue;const ae=T[z],se=w[z];ae!==se&&z!=="value"&&r(b,z,se,ae,j,V)}"value"in T&&r(b,"value",w.value,T.value,j)}},pe=(b,w,T,V,j,z,ae,se,oe)=>{const Y=w.el=b?b.el:i(""),Se=w.anchor=b?b.anchor:i("");let{patchFlag:le,dynamicChildren:xe,slotScopeIds:be}=w;be&&(se=se?se.concat(be):be),b==null?(s(Y,T,V),s(Se,T,V),U(w.children||[],T,Se,j,z,ae,se,oe)):le>0&&le&64&&xe&&b.dynamicChildren?(re(b.dynamicChildren,xe,T,j,z,ae,se),(w.key!=null||j&&w===j.subTree)&&bc(b,w,!0)):F(b,w,T,Se,j,z,ae,se,oe)},ve=(b,w,T,V,j,z,ae,se,oe)=>{w.slotScopeIds=se,b==null?w.shapeFlag&512?j.ctx.activate(w,T,V,ae,oe):ue(w,T,V,j,z,ae,oe):J(b,w,oe)},ue=(b,w,T,V,j,z,ae)=>{const se=b.component=Uf(b,V,j);if(Ya(b)&&(se.ctx.renderer=D),Wf(se,!1,ae),se.asyncDep){if(j&&j.registerDep(se,ne,ae),!b.el){const oe=se.subTree=Ae(An);S(null,oe,w,T)}}else ne(se,b,w,T,j,z,ae)},J=(b,w,T)=>{const V=w.component=b.component;if(Of(b,w,T))if(V.asyncDep&&!V.asyncResolved){P(V,w,T);return}else V.next=w,V.update();else w.el=b.el,V.vnode=w},ne=(b,w,T,V,j,z,ae)=>{const se=()=>{if(b.isMounted){let{next:le,bu:xe,u:be,parent:Ie,vnode:Oe}=b;{const Ge=wc(b);if(Ge){le&&(le.el=Oe.el,P(b,le,ae)),Ge.asyncDep.then(()=>{b.isUnmounted||se()});return}}let Ve=le,te;Vn(b,!1),le?(le.el=Oe.el,P(b,le,ae)):le=Oe,xe&&Bo(xe),(te=le.props&&le.props.onVnodeBeforeUpdate)&&Gt(te,Ie,le,Oe),Vn(b,!0);const me=al(b),Le=b.subTree;b.subTree=me,m(Le,me,p(Le.el),R(Le),b,j,z),le.el=me.el,Ve===null&&Df(b,me.el),be&&Et(be,j),(te=le.props&&le.props.onVnodeUpdated)&&Et(()=>Gt(te,Ie,le,Oe),j)}else{let le;const{el:xe,props:be}=w,{bm:Ie,m:Oe,parent:Ve,root:te,type:me}=b,Le=ms(w);Vn(b,!1),Ie&&Bo(Ie),!Le&&(le=be&&be.onVnodeBeforeMount)&&Gt(le,Ve,w),Vn(b,!0);{te.ce&&te.ce._injectChildStyle(me);const Ge=b.subTree=al(b);m(null,Ge,T,V,b,j,z),w.el=Ge.el}if(Oe&&Et(Oe,j),!Le&&(le=be&&be.onVnodeMounted)){const Ge=w;Et(()=>Gt(le,Ve,Ge),j)}(w.shapeFlag&256||Ve&&ms(Ve.vnode)&&Ve.vnode.shapeFlag&256)&&b.a&&Et(b.a,j),b.isMounted=!0,w=T=V=null}};b.scope.on();const oe=b.effect=new Eu(se);b.scope.off();const Y=b.update=oe.run.bind(oe),Se=b.job=oe.runIfDirty.bind(oe);Se.i=b,Se.id=b.uid,oe.scheduler=()=>Ja(Se),Vn(b,!0),Y()},P=(b,w,T)=>{w.component=b;const V=b.vnode.props;b.vnode=w,b.next=null,kf(b,w.props,V,T),Tf(b,w.children,T),In(),Zi(b),Ln()},F=(b,w,T,V,j,z,ae,se,oe=!1)=>{const Y=b&&b.children,Se=b?b.shapeFlag:0,le=w.children,{patchFlag:xe,shapeFlag:be}=w;if(xe>0){if(xe&128){L(Y,le,T,V,j,z,ae,se,oe);return}else if(xe&256){ee(Y,le,T,V,j,z,ae,se,oe);return}}be&8?(Se&16&&Ce(Y,j,z),le!==Y&&u(T,le)):Se&16?be&16?L(Y,le,T,V,j,z,ae,se,oe):Ce(Y,j,z,!0):(Se&8&&u(T,""),be&16&&U(le,T,V,j,z,ae,se,oe))},ee=(b,w,T,V,j,z,ae,se,oe)=>{b=b||ds,w=w||ds;const Y=b.length,Se=w.length,le=Math.min(Y,Se);let xe;for(xe=0;xe<le;xe++){const be=w[xe]=oe?xn(w[xe]):Zt(w[xe]);m(b[xe],be,T,null,j,z,ae,se,oe)}Y>Se?Ce(b,j,z,!0,!1,le):U(w,T,V,j,z,ae,se,oe,le)},L=(b,w,T,V,j,z,ae,se,oe)=>{let Y=0;const Se=w.length;let le=b.length-1,xe=Se-1;for(;Y<=le&&Y<=xe;){const be=b[Y],Ie=w[Y]=oe?xn(w[Y]):Zt(w[Y]);if(Rs(be,Ie))m(be,Ie,T,null,j,z,ae,se,oe);else break;Y++}for(;Y<=le&&Y<=xe;){const be=b[le],Ie=w[xe]=oe?xn(w[xe]):Zt(w[xe]);if(Rs(be,Ie))m(be,Ie,T,null,j,z,ae,se,oe);else break;le--,xe--}if(Y>le){if(Y<=xe){const be=xe+1,Ie=be<Se?w[be].el:V;for(;Y<=xe;)m(null,w[Y]=oe?xn(w[Y]):Zt(w[Y]),T,Ie,j,z,ae,se,oe),Y++}}else if(Y>xe)for(;Y<=le;)ce(b[Y],j,z,!0),Y++;else{const be=Y,Ie=Y,Oe=new Map;for(Y=Ie;Y<=xe;Y++){const ot=w[Y]=oe?xn(w[Y]):Zt(w[Y]);ot.key!=null&&Oe.set(ot.key,Y)}let Ve,te=0;const me=xe-Ie+1;let Le=!1,Ge=0;const ct=new Array(me);for(Y=0;Y<me;Y++)ct[Y]=0;for(Y=be;Y<=le;Y++){const ot=b[Y];if(te>=me){ce(ot,j,z,!0);continue}let dt;if(ot.key!=null)dt=Oe.get(ot.key);else for(Ve=Ie;Ve<=xe;Ve++)if(ct[Ve-Ie]===0&&Rs(ot,w[Ve])){dt=Ve;break}dt===void 0?ce(ot,j,z,!0):(ct[dt-Ie]=Y+1,dt>=Ge?Ge=dt:Le=!0,m(ot,w[dt],T,null,j,z,ae,se,oe),te++)}const wt=Le?Pf(ct):ds;for(Ve=wt.length-1,Y=me-1;Y>=0;Y--){const ot=Ie+Y,dt=w[ot],Ue=ot+1<Se?w[ot+1].el:V;ct[Y]===0?m(null,dt,T,Ue,j,z,ae,se,oe):Le&&(Ve<0||Y!==wt[Ve]?W(dt,T,Ue,2):Ve--)}}},W=(b,w,T,V,j=null)=>{const{el:z,type:ae,transition:se,children:oe,shapeFlag:Y}=b;if(Y&6){W(b.component.subTree,w,T,V);return}if(Y&128){b.suspense.move(w,T,V);return}if(Y&64){ae.move(b,w,T,D);return}if(ae===ze){s(z,w,T);for(let le=0;le<oe.length;le++)W(oe[le],w,T,V);s(b.anchor,w,T);return}if(ae===Fo){A(b,w,T);return}if(V!==2&&Y&1&&se)if(V===0)se.beforeEnter(z),s(z,w,T),Et(()=>se.enter(z),j);else{const{leave:le,delayLeave:xe,afterLeave:be}=se,Ie=()=>s(z,w,T),Oe=()=>{le(z,()=>{Ie(),be&&be()})};xe?xe(z,Ie,Oe):Oe()}else s(z,w,T)},ce=(b,w,T,V=!1,j=!1)=>{const{type:z,props:ae,ref:se,children:oe,dynamicChildren:Y,shapeFlag:Se,patchFlag:le,dirs:xe,cacheIndex:be}=b;if(le===-2&&(j=!1),se!=null&&Xo(se,null,T,b,!0),be!=null&&(w.renderCache[be]=void 0),Se&256){w.ctx.deactivate(b);return}const Ie=Se&1&&xe,Oe=!ms(b);let Ve;if(Oe&&(Ve=ae&&ae.onVnodeBeforeUnmount)&&Gt(Ve,w,b),Se&6)de(b.component,T,V);else{if(Se&128){b.suspense.unmount(T,V);return}Ie&&jn(b,null,w,"beforeUnmount"),Se&64?b.type.remove(b,w,T,D,V):Y&&!Y.hasOnce&&(z!==ze||le>0&&le&64)?Ce(Y,w,T,!1,!0):(z===ze&&le&384||!j&&Se&16)&&Ce(oe,w,T),V&&Q(b)}(Oe&&(Ve=ae&&ae.onVnodeUnmounted)||Ie)&&Et(()=>{Ve&&Gt(Ve,w,b),Ie&&jn(b,null,w,"unmounted")},T)},Q=b=>{const{type:w,el:T,anchor:V,transition:j}=b;if(w===ze){H(T,V);return}if(w===Fo){E(b);return}const z=()=>{o(T),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(b.shapeFlag&1&&j&&!j.persisted){const{leave:ae,delayLeave:se}=j,oe=()=>ae(T,z);se?se(b.el,z,oe):oe()}else z()},H=(b,w)=>{let T;for(;b!==w;)T=g(b),o(b),b=T;o(w)},de=(b,w,T)=>{const{bum:V,scope:j,job:z,subTree:ae,um:se,m:oe,a:Y}=b;rl(oe),rl(Y),V&&Bo(V),j.stop(),z&&(z.flags|=8,ce(ae,b,w,T)),se&&Et(se,w),Et(()=>{b.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&b.asyncDep&&!b.asyncResolved&&b.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},Ce=(b,w,T,V=!1,j=!1,z=0)=>{for(let ae=z;ae<b.length;ae++)ce(b[ae],w,T,V,j)},R=b=>{if(b.shapeFlag&6)return R(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const w=g(b.anchor||b.el),T=w&&w[Jp];return T?g(T):w};let $=!1;const O=(b,w,T)=>{b==null?w._vnode&&ce(w._vnode,null,null,!0):m(w._vnode||null,b,w,null,null,null,T),w._vnode=b,$||($=!0,Zi(),Zu(),$=!1)},D={p:m,um:ce,m:W,r:Q,mt:ue,mc:U,pc:F,pbc:re,n:R,o:e};return{render:O,hydrate:void 0,createApp:yf(O)}}function Ur({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Vn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function _f(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function bc(e,t,n=!1){const s=e.children,o=t.children;if(Ee(s)&&Ee(o))for(let r=0;r<s.length;r++){const a=s[r];let i=o[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=o[r]=xn(o[r]),i.el=a.el),!n&&i.patchFlag!==-2&&bc(a,i)),i.type===yr&&(i.el=a.el)}}function Pf(e){const t=e.slice(),n=[0];let s,o,r,a,i;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(o=n[n.length-1],e[o]<c){t[s]=o,n.push(s);continue}for(r=0,a=n.length-1;r<a;)i=r+a>>1,e[n[i]]<c?r=i+1:a=i;c<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,a=n[r-1];r-- >0;)n[r]=a,a=t[a];return n}function wc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:wc(t)}function rl(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ef=Symbol.for("v-scx"),If=()=>Je(Ef);function to(e,t){return oi(e,null,t)}function Rt(e,t,n){return oi(e,t,n)}function oi(e,t,n=et){const{immediate:s,deep:o,flush:r,once:a}=n,i=Ct({},n),l=t&&s||!t&&r!=="post";let c;if(ws){if(r==="sync"){const f=If();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Yt,f.resume=Yt,f.pause=Yt,f}}const u=ft;i.call=(f,v,m)=>tn(f,u,v,m);let p=!1;r==="post"?i.scheduler=f=>{Et(f,u&&u.suspense)}:r!=="sync"&&(p=!0,i.scheduler=(f,v)=>{v?f():Ja(f)}),i.augmentJob=f=>{t&&(f.flags|=4),p&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const g=Wp(e,t,i);return ws&&(c?c.push(g):l&&g()),g}function Lf(e,t,n){const s=this.proxy,o=lt(e)?e.includes(".")?kc(s,e):()=>s[e]:e.bind(s,s);let r;Re(t)?r=t:(r=t.handler,n=t);const a=mo(this),i=oi(o,r.bind(s),n);return a(),i}function kc(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const Rf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Bt(t)}Modifiers`]||e[`${En(t)}Modifiers`];function zf(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||et;let o=n;const r=t.startsWith("update:"),a=r&&Rf(s,t.slice(7));a&&(a.trim&&(o=n.map(u=>lt(u)?u.trim():u)),a.number&&(o=n.map(Jo)));let i,l=s[i=Or(t)]||s[i=Or(Bt(t))];!l&&r&&(l=s[i=Or(En(t))]),l&&tn(l,e,6,o);const c=s[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,tn(c,e,6,o)}}function xc(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let a={},i=!1;if(!Re(e)){const l=c=>{const u=xc(c,t,!0);u&&(i=!0,Ct(a,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!i?(nt(e)&&s.set(e,null),null):(Ee(r)?r.forEach(l=>a[l]=null):Ct(a,r),nt(e)&&s.set(e,a),a)}function vr(e,t){return!e||!ur(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ye(e,t[0].toLowerCase()+t.slice(1))||Ye(e,En(t))||Ye(e,t))}function al(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[r],slots:a,attrs:i,emit:l,render:c,renderCache:u,props:p,data:g,setupState:f,ctx:v,inheritAttrs:m}=e,k=Yo(e);let S,C;try{if(n.shapeFlag&4){const E=o||s,M=E;S=Zt(c.call(M,E,u,p,f,g,v)),C=i}else{const E=t;S=Zt(E.length>1?E(p,{attrs:i,slots:a,emit:l}):E(p,null)),C=t.props?i:jf(i)}}catch(E){Ws.length=0,ho(E,e,1),S=Ae(An)}let A=S;if(C&&m!==!1){const E=Object.keys(C),{shapeFlag:M}=A;E.length&&M&7&&(r&&E.some(Da)&&(C=Vf(C,r)),A=bs(A,C,!1,!0))}return n.dirs&&(A=bs(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&Ka(A,n.transition),S=A,Yo(k),S}const jf=e=>{let t;for(const n in e)(n==="class"||n==="style"||ur(n))&&((t||(t={}))[n]=e[n]);return t},Vf=(e,t)=>{const n={};for(const s in e)(!Da(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Of(e,t,n){const{props:s,children:o,component:r}=e,{props:a,children:i,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?il(s,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const g=u[p];if(a[g]!==s[g]&&!vr(c,g))return!0}}}else return(o||i)&&(!i||!i.$stable)?!0:s===a?!1:s?a?il(s,a,c):!0:!!a;return!1}function il(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!vr(n,r))return!0}return!1}function Df({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const Cc=e=>e.__isSuspense;function Bf(e,t){t&&t.pendingBranch?Ee(e)?t.effects.push(...e):t.effects.push(e):Qp(e)}const ze=Symbol.for("v-fgt"),yr=Symbol.for("v-txt"),An=Symbol.for("v-cmt"),Fo=Symbol.for("v-stc"),Ws=[];let Lt=null;function h(e=!1){Ws.push(Lt=e?null:[])}function Ff(){Ws.pop(),Lt=Ws[Ws.length-1]||null}let no=1;function ll(e,t=!1){no+=e,e<0&&Lt&&t&&(Lt.hasOnce=!0)}function Sc(e){return e.dynamicChildren=no>0?Lt||ds:null,Ff(),no>0&&Lt&&Lt.push(e),e}function y(e,t,n,s,o,r){return Sc(d(e,t,n,s,o,r,!0))}function ke(e,t,n,s,o){return Sc(Ae(e,t,n,s,o,!0))}function so(e){return e?e.__v_isVNode===!0:!1}function Rs(e,t){return e.type===t.type&&e.key===t.key}const Tc=({key:e})=>e??null,Ho=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?lt(e)||mt(e)||Re(e)?{i:ht,r:e,k:t,f:!!n}:e:null);function d(e,t=null,n=null,s=0,o=null,r=e===ze?0:1,a=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Tc(t),ref:t&&Ho(t),scopeId:Xu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ht};return i?(ri(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=lt(n)?8:16),no>0&&!a&&Lt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Lt.push(l),l}const Ae=Hf;function Hf(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===oc)&&(e=An),so(e)){const i=bs(e,t,!0);return n&&ri(i,n),no>0&&!r&&Lt&&(i.shapeFlag&6?Lt[Lt.indexOf(e)]=i:Lt.push(i)),i.patchFlag=-2,i}if(Jf(e)&&(e=e.__vccOpts),t){t=oo(t);let{class:i,style:l}=t;i&&!lt(i)&&(t.class=_(i)),nt(l)&&(Qa(l)&&!Ee(l)&&(l=Ct({},l)),t.style=Kn(l))}const a=lt(e)?1:Cc(e)?128:Kp(e)?64:nt(e)?4:Re(e)?2:0;return d(e,t,n,s,o,a,r,!0)}function oo(e){return e?Qa(e)||pc(e)?Ct({},e):e:null}function bs(e,t,n=!1,s=!1){const{props:o,ref:r,patchFlag:a,children:i,transition:l}=e,c=t?Qe(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Tc(c),ref:t&&t.ref?n&&r?Ee(r)?r.concat(Ho(t)):[r,Ho(t)]:Ho(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ze?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&bs(e.ssContent),ssFallback:e.ssFallback&&bs(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&Ka(u,l.clone(u)),u}function Fe(e=" ",t=0){return Ae(yr,null,e,t)}function br(e,t){const n=Ae(Fo,null,e);return n.staticCount=t,n}function N(e="",t=!1){return t?(h(),ke(An,null,e)):Ae(An,null,e)}function Zt(e){return e==null||typeof e=="boolean"?Ae(An):Ee(e)?Ae(ze,null,e.slice()):so(e)?xn(e):Ae(yr,null,String(e))}function xn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:bs(e)}function ri(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(Ee(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),ri(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!pc(t)?t._ctx=ht:o===3&&ht&&(ht.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Re(t)?(t={default:t,_ctx:ht},n=32):(t=String(t),s&64?(n=16,t=[Fe(t)]):n=8);e.children=t,e.shapeFlag|=n}function Qe(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=_([t.class,s.class]));else if(o==="style")t.style=Kn([t.style,s.style]);else if(ur(o)){const r=t[o],a=s[o];a&&r!==a&&!(Ee(r)&&r.includes(a))&&(t[o]=r?[].concat(r,a):a)}else o!==""&&(t[o]=s[o])}return t}function Gt(e,t,n,s=null){tn(e,t,7,[n,s])}const Nf=uc();let $f=0;function Uf(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Nf,r={uid:$f++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hc(s,o),emitsOptions:xc(s,o),emit:null,emitted:null,propsDefaults:et,inheritAttrs:s.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=zf.bind(null,r),e.ce&&e.ce(r),r}let ft=null;const st=()=>ft||ht;let tr,fa;{const e=pr(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),r=>{o.length>1?o.forEach(a=>a(r)):o[0](r)}};tr=t("__VUE_INSTANCE_SETTERS__",n=>ft=n),fa=t("__VUE_SSR_SETTERS__",n=>ws=n)}const mo=e=>{const t=ft;return tr(e),e.scope.on(),()=>{e.scope.off(),tr(t)}},ul=()=>{ft&&ft.scope.off(),tr(null)};function Ac(e){return e.vnode.shapeFlag&4}let ws=!1;function Wf(e,t=!1,n=!1){t&&fa(t);const{props:s,children:o}=e.vnode,r=Ac(e);wf(e,s,r,t),Sf(e,o,n);const a=r?qf(e,t):void 0;return t&&fa(!1),a}function qf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,cf);const{setup:s}=n;if(s){In();const o=e.setupContext=s.length>1?_c(e):null,r=mo(e),a=fo(s,e,0,[e.props,o]),i=Cu(a);if(Ln(),r(),(i||e.sp)&&!ms(e)&&Za(e),i){if(a.then(ul,ul),t)return a.then(l=>{cl(e,l)}).catch(l=>{ho(l,e,0)});e.asyncDep=a}else cl(e,a)}else Mc(e)}function cl(e,t,n){Re(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:nt(t)&&(e.setupState=Qu(t)),Mc(e)}function Mc(e,t,n){const s=e.type;e.render||(e.render=s.render||Yt);{const o=mo(e);In();try{pf(e)}finally{Ln(),o()}}}const Gf={get(e,t){return kt(e,"get",""),e[t]}};function _c(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Gf),slots:e.slots,emit:e.emit,expose:t}}function wr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Qu(Dp(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Us)return Us[n](e)},has(t,n){return n in t||n in Us}})):e.proxy}function Qf(e,t=!0){return Re(e)?e.displayName||e.name:e.name||t&&e.__name}function Jf(e){return Re(e)&&"__vccOpts"in e}const x=(e,t)=>$p(e,t,ws);function Vt(e,t,n){const s=arguments.length;return s===2?nt(t)&&!Ee(t)?so(t)?Ae(e,null,[t]):Ae(e,t):Ae(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&so(n)&&(n=[n]),Ae(e,t,n))}const Kf="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ha;const dl=typeof window<"u"&&window.trustedTypes;if(dl)try{ha=dl.createPolicy("vue",{createHTML:e=>e})}catch{}const Pc=ha?e=>ha.createHTML(e):e=>e,Zf="http://www.w3.org/2000/svg",Yf="http://www.w3.org/1998/Math/MathML",cn=typeof document<"u"?document:null,pl=cn&&cn.createElement("template"),Xf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?cn.createElementNS(Zf,e):t==="mathml"?cn.createElementNS(Yf,e):n?cn.createElement(e,{is:n}):cn.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>cn.createTextNode(e),createComment:e=>cn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>cn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const a=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{pl.innerHTML=Pc(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const i=pl.content;if(s==="svg"||s==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},eh=Symbol("_vtc");function th(e,t,n){const s=e[eh];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const fl=Symbol("_vod"),nh=Symbol("_vsh"),sh=Symbol(""),oh=/(^|;)\s*display\s*:/;function rh(e,t,n){const s=e.style,o=lt(n);let r=!1;if(n&&!o){if(t)if(lt(t))for(const a of t.split(";")){const i=a.slice(0,a.indexOf(":")).trim();n[i]==null&&No(s,i,"")}else for(const a in t)n[a]==null&&No(s,a,"");for(const a in n)a==="display"&&(r=!0),No(s,a,n[a])}else if(o){if(t!==n){const a=s[sh];a&&(n+=";"+a),s.cssText=n,r=oh.test(n)}}else t&&e.removeAttribute("style");fl in e&&(e[fl]=r?s.display:"",e[nh]&&(s.display="none"))}const hl=/\s*!important$/;function No(e,t,n){if(Ee(n))n.forEach(s=>No(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=ah(e,t);hl.test(n)?e.setProperty(En(s),n.replace(hl,""),"important"):e[s]=n}}const ml=["Webkit","Moz","ms"],Wr={};function ah(e,t){const n=Wr[t];if(n)return n;let s=Bt(t);if(s!=="filter"&&s in e)return Wr[t]=s;s=dr(s);for(let o=0;o<ml.length;o++){const r=ml[o]+s;if(r in e)return Wr[t]=r}return t}const gl="http://www.w3.org/1999/xlink";function vl(e,t,n,s,o,r=gp(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(gl,t.slice(6,t.length)):e.setAttributeNS(gl,t,n):n==null||r&&!Mu(n)?e.removeAttribute(t):e.setAttribute(t,r?"":$t(n)?String(n):n)}function yl(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Pc(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(i!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=Mu(n):n==null&&i==="string"?(n="",a=!0):i==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(o||t)}function fn(e,t,n,s){e.addEventListener(t,n,s)}function ih(e,t,n,s){e.removeEventListener(t,n,s)}const bl=Symbol("_vei");function lh(e,t,n,s,o=null){const r=e[bl]||(e[bl]={}),a=r[t];if(s&&a)a.value=s;else{const[i,l]=uh(t);if(s){const c=r[t]=ph(s,o);fn(e,i,c,l)}else a&&(ih(e,i,a,l),r[t]=void 0)}}const wl=/(?:Once|Passive|Capture)$/;function uh(e){let t;if(wl.test(e)){t={};let s;for(;s=e.match(wl);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):En(e.slice(2)),t]}let qr=0;const ch=Promise.resolve(),dh=()=>qr||(ch.then(()=>qr=0),qr=Date.now());function ph(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;tn(fh(s,n.value),t,5,[s])};return n.value=e,n.attached=dh(),n}function fh(e,t){if(Ee(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const kl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,hh=(e,t,n,s,o,r)=>{const a=o==="svg";t==="class"?th(e,s,a):t==="style"?rh(e,n,s):ur(t)?Da(t)||lh(e,t,n,s,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mh(e,t,s,a))?(yl(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&vl(e,t,s,a,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!lt(s))?yl(e,Bt(t),s,r,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),vl(e,t,s,a))};function mh(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&kl(t)&&Re(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return kl(t)&&lt(n)?!1:t in e}const Mn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Ee(t)?n=>Bo(t,n):t};function gh(e){e.target.composing=!0}function xl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Dt=Symbol("_assign"),ma={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[Dt]=Mn(o);const r=s||o.props&&o.props.type==="number";fn(e,t?"change":"input",a=>{if(a.target.composing)return;let i=e.value;n&&(i=i.trim()),r&&(i=Jo(i)),e[Dt](i)}),n&&fn(e,"change",()=>{e.value=e.value.trim()}),t||(fn(e,"compositionstart",gh),fn(e,"compositionend",xl),fn(e,"change",xl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:r}},a){if(e[Dt]=Mn(a),e.composing)return;const i=(r||e.type==="number")&&!/^0\d/.test(e.value)?Jo(e.value):e.value,l=t??"";i!==l&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||o&&e.value.trim()===l)||(e.value=l))}},kr={deep:!0,created(e,t,n){e[Dt]=Mn(n),fn(e,"change",()=>{const s=e._modelValue,o=ks(e),r=e.checked,a=e[Dt];if(Ee(s)){const i=Ha(s,o),l=i!==-1;if(r&&!l)a(s.concat(o));else if(!r&&l){const c=[...s];c.splice(i,1),a(c)}}else if(As(s)){const i=new Set(s);r?i.add(o):i.delete(o),a(i)}else a(Ic(e,r))})},mounted:Cl,beforeUpdate(e,t,n){e[Dt]=Mn(n),Cl(e,t,n)}};function Cl(e,{value:t,oldValue:n},s){e._modelValue=t;let o;if(Ee(t))o=Ha(t,s.props.value)>-1;else if(As(t))o=t.has(s.props.value);else{if(t===n)return;o=$n(t,Ic(e,!0))}e.checked!==o&&(e.checked=o)}const vh={created(e,{value:t},n){e.checked=$n(t,n.props.value),e[Dt]=Mn(n),fn(e,"change",()=>{e[Dt](ks(e))})},beforeUpdate(e,{value:t,oldValue:n},s){e[Dt]=Mn(s),t!==n&&(e.checked=$n(t,s.props.value))}},Ec={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=As(t);fn(e,"change",()=>{const r=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>n?Jo(ks(a)):ks(a));e[Dt](e.multiple?o?new Set(r):r:r[0]),e._assigning=!0,Ut(()=>{e._assigning=!1})}),e[Dt]=Mn(s)},mounted(e,{value:t}){Sl(e,t)},beforeUpdate(e,t,n){e[Dt]=Mn(n)},updated(e,{value:t}){e._assigning||Sl(e,t)}};function Sl(e,t){const n=e.multiple,s=Ee(t);if(!(n&&!s&&!As(t))){for(let o=0,r=e.options.length;o<r;o++){const a=e.options[o],i=ks(a);if(n)if(s){const l=typeof i;l==="string"||l==="number"?a.selected=t.some(c=>String(c)===String(i)):a.selected=Ha(t,i)>-1}else a.selected=t.has(i);else if($n(ks(a),t)){e.selectedIndex!==o&&(e.selectedIndex=o);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function ks(e){return"_value"in e?e._value:e.value}function Ic(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const yh={created(e,t,n){Eo(e,t,n,null,"created")},mounted(e,t,n){Eo(e,t,n,null,"mounted")},beforeUpdate(e,t,n,s){Eo(e,t,n,s,"beforeUpdate")},updated(e,t,n,s){Eo(e,t,n,s,"updated")}};function bh(e,t){switch(e){case"SELECT":return Ec;case"TEXTAREA":return ma;default:switch(t){case"checkbox":return kr;case"radio":return vh;default:return ma}}}function Eo(e,t,n,s,o){const a=bh(e.tagName,n.props&&n.props.type)[o];a&&a(e,t,n,s)}const wh=["ctrl","shift","alt","meta"],kh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>wh.some(n=>e[`${n}Key`]&&!t.includes(n))},gt=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(o,...r)=>{for(let a=0;a<t.length;a++){const i=kh[t[a]];if(i&&i(o,t))return}return e(o,...r)})},xh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Lc=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=o=>{if(!("key"in o))return;const r=En(o.key);if(t.some(a=>a===r||xh[a]===r))return e(o)})},Ch=Ct({patchProp:hh},Xf);let Tl;function Sh(){return Tl||(Tl=Af(Ch))}const Th=(...e)=>{const t=Sh().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Mh(s);if(!o)return;const r=t._component;!Re(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=n(o,!1,Ah(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t};function Ah(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Mh(e){return lt(e)?document.querySelector(e):e}function ga(e,t={},n){for(const s in e){const o=e[s],r=n?`${n}:${s}`:s;typeof o=="object"&&o!==null?ga(o,t,r):typeof o=="function"&&(t[r]=o)}return t}const _h={run:e=>e()},Ph=()=>_h,Rc=typeof console.createTask<"u"?console.createTask:Ph;function Eh(e,t){const n=t.shift(),s=Rc(n);return e.reduce((o,r)=>o.then(()=>s.run(()=>r(...t))),Promise.resolve())}function Ih(e,t){const n=t.shift(),s=Rc(n);return Promise.all(e.map(o=>s.run(()=>o(...t))))}function Gr(e,t){for(const n of[...e])n(t)}class Lh{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,s={}){if(!t||typeof n!="function")return()=>{};const o=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!s.allowDeprecated){let a=r.message;a||(a=`${o} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let s,o=(...r)=>(typeof s=="function"&&s(),s=void 0,o=void 0,n(...r));return s=this.hook(t,o),s}removeHook(t,n){if(this._hooks[t]){const s=this._hooks[t].indexOf(n);s!==-1&&this._hooks[t].splice(s,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const s=this._hooks[t]||[];delete this._hooks[t];for(const o of s)this.hook(t,o)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=ga(t),s=Object.keys(n).map(o=>this.hook(o,n[o]));return()=>{for(const o of s.splice(0,s.length))o()}}removeHooks(t){const n=ga(t);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(Eh,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Ih,t,...n)}callHookWith(t,n,...s){const o=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&Gr(this._before,o);const r=t(n in this._hooks?[...this._hooks[n]]:[],s);return r instanceof Promise?r.finally(()=>{this._after&&o&&Gr(this._after,o)}):(this._after&&o&&Gr(this._after,o),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Rh(){return new Lh}const zh=new Set(["link","style","script","noscript"]),jh=new Set(["title","titleTemplate","script","style","noscript"]),Al=new Set(["base","meta","link","style","script","noscript"]),Vh=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Oh=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Dh=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),Bh=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Fh=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),Hh=["name","property","http-equiv"];function zc(e){const t=e.split(":")[1];return Fh.has(t)}function va(e){const{props:t,tag:n}=e;if(Oh.has(n))return n;if(n==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";if(e.tag==="meta"){for(const s of Hh)if(t[s]!==void 0)return`${n}:${t[s]}`}if(e.key)return`${n}:key:${e.key}`;if(t.id)return`${n}:id:${t.id}`;if(jh.has(n)){const s=e.textContent||e.innerHTML;if(s)return`${n}:content:${s}`}}function Ml(e){const t=e._h||e._d;if(t)return t;const n=e.textContent||e.innerHTML;return n||`${e.tag}:${Object.entries(e.props).map(([s,o])=>`${s}:${String(o)}`).join(",")}`}function nr(e,t,n){typeof e==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(e=e());let o;if(t&&(o=t(n,e)),Array.isArray(o))return o.map(r=>nr(r,t));if((o==null?void 0:o.constructor)===Object){const r={};for(const a of Object.keys(o))r[a]=nr(o[a],t,a);return r}return o}function Nh(e,t){const n=e==="style"?new Map:new Set;function s(o){const r=o.trim();if(r)if(e==="style"){const[a,...i]=r.split(":").map(l=>l.trim());a&&i.length&&n.set(a,i.join(":"))}else r.split(" ").filter(Boolean).forEach(a=>n.add(a))}return typeof t=="string"?e==="style"?t.split(";").forEach(s):s(t):Array.isArray(t)?t.forEach(o=>s(o)):t&&typeof t=="object"&&Object.entries(t).forEach(([o,r])=>{r&&r!=="false"&&(e==="style"?n.set(o.trim(),r):s(o))}),n}function jc(e,t){return e.props=e.props||{},t&&Object.entries(t).forEach(([n,s])=>{if(s===null){e.props[n]=null;return}if(n==="class"||n==="style"){e.props[n]=Nh(n,s);return}if(Dh.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof s=="object"){let a=t.type;if(t.type||(a="application/json"),!(a!=null&&a.endsWith("json"))&&a!=="speculationrules")return;t.type=a,e.props.type=a,e[n]=JSON.stringify(s)}else e[n]=s;return}const o=String(s),r=n.startsWith("data-");o==="true"||o===""?e.props[n]=r?o:!0:!s&&r&&o==="false"?e.props[n]="false":s!==void 0&&(e.props[n]=s)}),e}function $h(e,t){const n=typeof t=="object"&&typeof t!="function"?t:{[e==="script"||e==="noscript"||e==="style"?"innerHTML":"textContent"]:t},s=jc({tag:e,props:{}},n);return s.key&&zh.has(s.tag)&&(s.props["data-hid"]=s._h=s.key),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s}function Uh(e,t){if(!e)return[];typeof e=="function"&&(e=e());const n=(o,r)=>{for(let a=0;a<t.length;a++)r=t[a](o,r);return r};e=n(void 0,e);const s=[];return e=nr(e,n),Object.entries(e||{}).forEach(([o,r])=>{if(r!==void 0)for(const a of Array.isArray(r)?r:[r])s.push($h(o,a))}),s.flat()}const _l=(e,t)=>e._w===t._w?e._p-t._p:e._w-t._w,Pl={base:-10,title:10},Wh={critical:-8,high:-1,low:2},El={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},qh=/@import/,zs=e=>e===""||e===!0;function Gh(e,t){var r;if(typeof t.tagPriority=="number")return t.tagPriority;let n=100;const s=Wh[t.tagPriority]||0,o=e.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:El;if(t.tag in Pl)n=Pl[t.tag];else if(t.tag==="meta"){const a=t.props["http-equiv"]==="content-security-policy"?"content-security-policy":t.props.charset?"charset":t.props.name==="viewport"?"viewport":null;a&&(n=El.meta[a])}else t.tag==="link"&&t.props.rel?n=o.link[t.props.rel]:t.tag==="script"?zs(t.props.async)?n=o.script.async:t.props.src&&!zs(t.props.defer)&&!zs(t.props.async)&&t.props.type!=="module"&&!((r=t.props.type)!=null&&r.endsWith("json"))?n=o.script.sync:zs(t.props.defer)&&t.props.src&&!zs(t.props.async)&&(n=o.script.defer):t.tag==="style"&&(n=t.innerHTML&&qh.test(t.innerHTML)?o.style.imported:o.style.sync);return(n||100)+s}function Il(e,t){const n=typeof t=="function"?t(e):t,s=n.key||String(e.plugins.size+1);e.plugins.get(s)||(e.plugins.set(s,n),e.hooks.addHooks(n.hooks||{}))}function Qh(e={}){var i;const t=Rh();t.addHooks(e.hooks||{});const n=!e.document,s=new Map,o=new Map,r=[],a={_entryCount:1,plugins:o,dirty:!1,resolvedOptions:e,hooks:t,ssr:n,entries:s,headEntries(){return[...s.values()]},use:l=>Il(a,l),push(l,c){const u={...c||{}};delete u.head;const p=u._index??a._entryCount++,g={_i:p,input:l,options:u},f={_poll(v=!1){a.dirty=!0,!v&&r.push(p),t.callHook("entries:updated",a)},dispose(){s.delete(p)&&f._poll(!0)},patch(v){(!u.mode||u.mode==="server"&&n||u.mode==="client"&&!n)&&(g.input=v,s.set(p,g),f._poll())}};return f.patch(l),f},async resolveTags(){var f;const l={tagMap:new Map,tags:[],entries:[...a.entries.values()]};for(await t.callHook("entries:resolve",l);r.length;){const v=r.shift(),m=s.get(v);if(m){const k={tags:Uh(m.input,e.propResolvers||[]).map(S=>Object.assign(S,m.options)),entry:m};await t.callHook("entries:normalize",k),m._tags=k.tags.map((S,C)=>(S._w=Gh(a,S),S._p=(m._i<<10)+C,S._d=va(S),S))}}let c=!1;l.entries.flatMap(v=>(v._tags||[]).map(m=>({...m,props:{...m.props}}))).sort(_l).reduce((v,m)=>{const k=String(m._d||m._p);if(!v.has(k))return v.set(k,m);const S=v.get(k);if(((m==null?void 0:m.tagDuplicateStrategy)||(Bh.has(m.tag)?"merge":null)||(m.key&&m.key===S.key?"merge":null))==="merge"){const A={...S.props};Object.entries(m.props).forEach(([E,M])=>A[E]=E==="style"?new Map([...S.props.style||new Map,...M]):E==="class"?new Set([...S.props.class||new Set,...M]):M),v.set(k,{...m,props:A})}else m._p>>10===S._p>>10&&zc(m._d)?(v.set(k,Object.assign([...Array.isArray(S)?S:[S],m],m)),c=!0):(m._w===S._w?m._p>S._p:(m==null?void 0:m._w)<(S==null?void 0:S._w))&&v.set(k,m);return v},l.tagMap);const u=l.tagMap.get("title"),p=l.tagMap.get("titleTemplate");if(a._title=u==null?void 0:u.textContent,p){const v=p==null?void 0:p.textContent;if(a._titleTemplate=v,v){let m=typeof v=="function"?v(u==null?void 0:u.textContent):v;typeof m=="string"&&!a.plugins.has("template-params")&&(m=m.replace("%s",(u==null?void 0:u.textContent)||"")),u?m===null?l.tagMap.delete("title"):l.tagMap.set("title",{...u,textContent:m}):(p.tag="title",p.textContent=m)}}l.tags=Array.from(l.tagMap.values()),c&&(l.tags=l.tags.flat().sort(_l)),await t.callHook("tags:beforeResolve",l),await t.callHook("tags:resolve",l),await t.callHook("tags:afterResolve",l);const g=[];for(const v of l.tags){const{innerHTML:m,tag:k,props:S}=v;if(Vh.has(k)&&!(Object.keys(S).length===0&&!v.innerHTML&&!v.textContent)&&!(k==="meta"&&!S.content&&!S["http-equiv"]&&!S.charset)){if(k==="script"&&m){if((f=S.type)!=null&&f.endsWith("json")){const C=typeof m=="string"?m:JSON.stringify(m);v.innerHTML=C.replace(/</g,"\\u003C")}else typeof m=="string"&&(v.innerHTML=m.replace(new RegExp(`</${k}`,"g"),`<\\/${k}`));v._d=va(v)}g.push(v)}}return g}};return((e==null?void 0:e.plugins)||[]).forEach(l=>Il(a,l)),a.hooks.callHook("init",a),(i=e.init)==null||i.forEach(l=>l&&a.push(l)),a}async function Vc(e,t={}){const n=t.document||e.resolvedOptions.document;if(!n||!e.dirty)return;const s={shouldRender:!0,tags:[]};if(await e.hooks.callHook("dom:beforeRender",s),!!s.shouldRender)return e._domUpdatePromise||(e._domUpdatePromise=new Promise(async o=>{var f;const r=new Map,a=new Promise(v=>{e.resolveTags().then(m=>{v(m.map(k=>{const S=r.get(k._d)||0,C={tag:k,id:(S?`${k._d}:${S}`:k._d)||Ml(k),shouldRender:!0};return k._d&&zc(k._d)&&r.set(k._d,S+1),C}))})});let i=e._dom;if(!i){i={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const v of["body","head"]){const m=(f=n[v])==null?void 0:f.children;for(const k of m){const S=k.tagName.toLowerCase();if(!Al.has(S))continue;const C=jc({tag:S,props:{}},{innerHTML:k.innerHTML,...k.getAttributeNames().reduce((A,E)=>(A[E]=k.getAttribute(E),A),{})||{}});if(C.key=k.getAttribute("data-hid")||void 0,C._d=va(C)||Ml(C),i.elMap.has(C._d)){let A=1,E=C._d;for(;i.elMap.has(E);)E=`${C._d}:${A++}`;i.elMap.set(E,k)}else i.elMap.set(C._d,k)}}}i.pendingSideEffects={...i.sideEffects},i.sideEffects={};function l(v,m,k){const S=`${v}:${m}`;i.sideEffects[S]=k,delete i.pendingSideEffects[S]}function c({id:v,$el:m,tag:k}){const S=k.tag.endsWith("Attrs");i.elMap.set(v,m),S||(k.textContent&&k.textContent!==m.textContent&&(m.textContent=k.textContent),k.innerHTML&&k.innerHTML!==m.innerHTML&&(m.innerHTML=k.innerHTML),l(v,"el",()=>{m==null||m.remove(),i.elMap.delete(v)}));for(const C in k.props){if(!Object.prototype.hasOwnProperty.call(k.props,C))continue;const A=k.props[C];if(C.startsWith("on")&&typeof A=="function"){const M=m==null?void 0:m.dataset;if(M&&M[`${C}fired`]){const q=C.slice(0,-5);A.call(m,new Event(q.substring(2)))}m.getAttribute(`data-${C}`)!==""&&((k.tag==="bodyAttrs"?n.defaultView:m).addEventListener(C.substring(2),A.bind(m)),m.setAttribute(`data-${C}`,""));continue}const E=`attr:${C}`;if(C==="class"){if(!A)continue;for(const M of A)S&&l(v,`${E}:${M}`,()=>m.classList.remove(M)),!m.classList.contains(M)&&m.classList.add(M)}else if(C==="style"){if(!A)continue;for(const[M,q]of A)l(v,`${E}:${M}`,()=>{m.style.removeProperty(M)}),m.style.setProperty(M,q)}else A!==!1&&A!==null&&(m.getAttribute(C)!==A&&m.setAttribute(C,A===!0?"":String(A)),S&&l(v,E,()=>m.removeAttribute(C)))}}const u=[],p={bodyClose:void 0,bodyOpen:void 0,head:void 0},g=await a;for(const v of g){const{tag:m,shouldRender:k,id:S}=v;if(k){if(m.tag==="title"){n.title=m.textContent,l("title","",()=>n.title=i.title);continue}v.$el=v.$el||i.elMap.get(S),v.$el?c(v):Al.has(m.tag)&&u.push(v)}}for(const v of u){const m=v.tag.tagPosition||"head";v.$el=n.createElement(v.tag.tag),c(v),p[m]=p[m]||n.createDocumentFragment(),p[m].appendChild(v.$el)}for(const v of g)await e.hooks.callHook("dom:renderTag",v,n,l);p.head&&n.head.appendChild(p.head),p.bodyOpen&&n.body.insertBefore(p.bodyOpen,n.body.firstChild),p.bodyClose&&n.body.appendChild(p.bodyClose);for(const v in i.pendingSideEffects)i.pendingSideEffects[v]();e._dom=i,await e.hooks.callHook("dom:rendered",{renders:g}),o()}).finally(()=>{e._domUpdatePromise=void 0,e.dirty=!1})),e._domUpdatePromise}function Jh(e={}){var s,o,r;const t=((s=e.domOptions)==null?void 0:s.render)||Vc;e.document=e.document||(typeof window<"u"?document:void 0);const n=((r=(o=e.document)==null?void 0:o.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return Qh({...e,plugins:[...e.plugins||[],{key:"client",hooks:{"entries:updated":t}}],init:[n?JSON.parse(n):!1,...e.init||[]]})}function Kh(e,t){let n=0;return()=>{const s=++n;t(()=>{n===s&&e()})}}const Zh=(e,t)=>mt(t)?Fp(t):t,Oc="usehead";function Yh(e){return{install(n){n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Oc,e)}}.install}function Xh(){if(bf()){const e=Je(Oc);if(!e)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return e}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function em(e,t={}){const n=t.head||Xh();return n.ssr?n.push(e||{},t):tm(n,e,t)}function tm(e,t,n={}){const s=K(!1);let o;return to(()=>{const a=s.value?{}:nr(t,Zh);o?o.patch(a):o=e.push(a,n)}),st()&&(sc(()=>{o.dispose()}),tc(()=>{s.value=!0}),ec(()=>{s.value=!1})),o}function nm(e={}){const t=Jh({domOptions:{render:Kh(()=>Vc(t),n=>setTimeout(n,0))},...e});return t.install=Yh(t),t}const sm=Te({__name:"App",setup(e){return em({title:"MyApp",meta:[{name:"description",content:"Vue SPA Starter Template"}],script:[{src:"/default.js"}],bodyAttrs:{class:"bg-white dark:bg-black dark:text-white"}}),(t,n)=>{const s=ye("RouterView");return h(),ke(s)}}});class gs{constructor(t){Pe(this,"errorCode");Pe(this,"message");Pe(this,"stackTrace");Pe(this,"errors");Pe(this,"meta");Object.assign(this,t)}}class ya{constructor(t){Pe(this,"errorCode");Pe(this,"fieldName");Pe(this,"message");Pe(this,"meta");Object.assign(this,t)}}class om{constructor(t){Pe(this,"type");Pe(this,"responseStatus");Object.assign(this,t)}}class Ll{constructor(t){Pe(this,"responseStatus");Object.assign(this,t)}}var Rl;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSED=2]="CLOSED"})(Rl||(Rl={}));class We{}Pe(We,"Get","GET"),Pe(We,"Post","POST"),Pe(We,"Put","PUT"),Pe(We,"Delete","DELETE"),Pe(We,"Patch","PATCH"),Pe(We,"Head","HEAD"),Pe(We,"Options","OPTIONS"),Pe(We,"hasRequestBody",t=>!(t==="GET"||t==="DELETE"||t==="HEAD"||t==="OPTIONS"));class rm{constructor(t){Pe(this,"refreshToken");Pe(this,"useTokenCookie");Object.assign(this,t)}createResponse(){return new am}getTypeName(){return"GetAccessToken"}getMethod(){return"POST"}}class am{constructor(){Pe(this,"accessToken");Pe(this,"responseStatus")}}const Kt=class Kt{constructor(t="/"){Pe(this,"baseUrl");Pe(this,"replyBaseUrl");Pe(this,"oneWayBaseUrl");Pe(this,"mode");Pe(this,"credentials");Pe(this,"headers");Pe(this,"userName");Pe(this,"password");Pe(this,"bearerToken");Pe(this,"refreshToken");Pe(this,"refreshTokenUri");Pe(this,"useTokenCookie");Pe(this,"enableAutoRefreshToken");Pe(this,"requestFilter");Pe(this,"responseFilter");Pe(this,"exceptionFilter");Pe(this,"urlFilter");Pe(this,"onAuthenticationRequired");Pe(this,"manageCookies");Pe(this,"cookies");Pe(this,"parseJson");this.baseUrl=t,this.mode="cors",this.credentials="include",this.headers=new Headers,this.headers.set("Content-Type","application/json"),this.manageCookies=typeof document>"u",this.cookies={},this.enableAutoRefreshToken=!0,this.basePath="api"}setCredentials(t,n){this.userName=t,this.password=n}useBasePath(t){return this.basePath=t,this}set basePath(t){t?(this.replyBaseUrl=Ht(this.baseUrl,t)+"/",this.oneWayBaseUrl=Ht(this.baseUrl,t)+"/"):(this.replyBaseUrl=Ht(this.baseUrl,"json","reply")+"/",this.oneWayBaseUrl=Ht(this.baseUrl,"json","oneway")+"/")}apply(t){return t(this),this}get(t,n){return typeof t!="string"?this.fetch(We.Get,t,n):this.fetch(We.Get,null,n,this.toAbsoluteUrl(t))}delete(t,n){return typeof t!="string"?this.fetch(We.Delete,t,n):this.fetch(We.Delete,null,n,this.toAbsoluteUrl(t))}post(t,n){return this.fetch(We.Post,t,n)}postToUrl(t,n,s){return this.fetch(We.Post,n,s,this.toAbsoluteUrl(t))}postBody(t,n,s){return this.fetchBody(We.Post,t,n,s)}put(t,n){return this.fetch(We.Put,t,n)}putToUrl(t,n,s){return this.fetch(We.Put,n,s,this.toAbsoluteUrl(t))}putBody(t,n,s){return this.fetchBody(We.Put,t,n,s)}patch(t,n){return this.fetch(We.Patch,t,n)}patchToUrl(t,n,s){return this.fetch(We.Patch,n,s,this.toAbsoluteUrl(t))}patchBody(t,n,s){return this.fetchBody(We.Patch,t,n,s)}publish(t,n){return this.sendOneWay(t,n)}sendOneWay(t,n){const s=Ht(this.oneWayBaseUrl,as(t));return this.fetch(We.Post,t,null,s)}sendAll(t){if(t.length==0)return Promise.resolve([]);const n=Ht(this.replyBaseUrl,as(t[0])+"[]");return this.fetch(We.Post,t,null,n)}sendAllOneWay(t){if(t.length==0)return Promise.resolve(void 0);const n=Ht(this.oneWayBaseUrl,as(t[0])+"[]");return this.fetch(We.Post,t,null,n).then(s=>{})}createUrlFromDto(t,n){let s=Ht(this.replyBaseUrl,as(n));return We.hasRequestBody(t)||(s=Xt(s,n)),s}toAbsoluteUrl(t){return t.startsWith("http://")||t.startsWith("https://")?t:Ht(this.baseUrl,t)}deleteCookie(t){this.manageCookies?delete this.cookies[t]:document&&(document.cookie=t+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/")}createRequest({method:t,request:n,url:s,args:o,body:r}){if(s||(s=this.createUrlFromDto(t,n)),o&&(s=Xt(s,o)),this.bearerToken!=null?this.headers.set("Authorization","Bearer "+this.bearerToken):this.userName!=null&&this.headers.set("Authorization","Basic "+Kt.toBase64(`${this.userName}:${this.password}`)),this.manageCookies){let c=Object.keys(this.cookies).map(u=>{let p=this.cookies[u];return p.expires&&p.expires<new Date?null:`${p.name}=${encodeURIComponent(p.value)}`}).filter(u=>!!u);c.length>0?this.headers.set("Cookie",c.join("; ")):this.headers.delete("Cookie")}let a=new Headers(this.headers),i=We.hasRequestBody(t),l={url:s,method:t,mode:this.mode,credentials:this.credentials,headers:a,compress:!1};return i&&(l.body=r||JSON.stringify(n),zl(r)&&(l.body=Rm(r),a.delete("Content-Type"))),this.requestFilter!=null&&this.requestFilter(l),Kt.globalRequestFilter!=null&&Kt.globalRequestFilter(l),l}json(t){return this.parseJson?this.parseJson(t):t.text().then(n=>n.length>0?JSON.parse(n):null)}applyResponseFilters(t){this.responseFilter!=null&&this.responseFilter(t),Kt.globalResponseFilter!=null&&Kt.globalResponseFilter(t)}createResponse(t,n){if(!t.ok)throw this.applyResponseFilters(t),t;if(this.manageCookies){let i=[];t.headers.forEach((l,c)=>{switch(c.toLowerCase()){case"set-cookie":l.split(",").forEach(p=>i.push(p));break}}),i.forEach(l=>{let c=wm(l);c&&(this.cookies[c.name]=c)})}t.headers.forEach((i,l)=>{switch(l.toLowerCase()){case"x-cookies":i.split(",").indexOf("ss-reftok")>=0&&(this.useTokenCookie=!0);break}}),this.applyResponseFilters(t);let s=n&&typeof n!="string"&&typeof n.createResponse=="function"?n.createResponse():null;if(typeof s=="string")return t.text().then(i=>i);let o=t.headers.get("content-type"),r=o&&o.indexOf("application/json")!==-1;if(r)return this.json(t).then(i=>i);if(typeof Uint8Array<"u"&&s instanceof Uint8Array){if(typeof t.arrayBuffer!="function")throw new Error("This fetch polyfill does not implement 'arrayBuffer'");return t.arrayBuffer().then(i=>new Uint8Array(i))}else if(typeof Blob=="function"&&s instanceof Blob){if(typeof t.blob!="function")throw new Error("This fetch polyfill does not implement 'blob'");return t.blob().then(i=>i)}let a=t.headers.get("content-length");return a==="0"||a==null&&!r?t.text().then(i=>s):this.json(t).then(i=>i)}handleError(t,n,s=null){if(n instanceof Error)throw this.raiseError(t,n);if(n.bodyUsed)throw this.raiseError(n,Qr(n.status,n.statusText,s));return typeof n.json>"u"&&n.responseStatus?new Promise((r,a)=>a(this.raiseError(null,n))):this.json(n).then(r=>{let a=qn(r);throw a.responseStatus?(s!=null&&(a.type=s),a):Qr(n.status,n.statusText,s)}).catch(r=>{throw r instanceof Error||typeof window<"u"&&window.DOMException&&r instanceof window.DOMException?this.raiseError(n,Qr(n.status,n.statusText,s)):this.raiseError(n,r)})}fetch(t,n,s,o){return this.sendRequest({method:t,request:n,args:s,url:o})}fetchBody(t,n,s,o){let r=Ht(this.replyBaseUrl,as(n));return this.sendRequest({method:t,request:s,body:typeof s=="string"||zl(s)?s:JSON.stringify(s),url:Xt(r,n),args:o,returns:n})}sendRequest(t){const n=this.createRequest(t),s=t.returns||t.request;let o=null;const r=()=>{const a=this.createRequest(t);return this.urlFilter&&this.urlFilter(a.url),fetch(a.url,a).then(i=>this.createResponse(i,s)).catch(i=>this.handleError(o,i))};return this.urlFilter&&this.urlFilter(n.url),fetch(n.url,n).then(a=>(o=a,this.createResponse(a,s))).catch(a=>{if(a.status===401){if(this.enableAutoRefreshToken&&(this.refreshToken||this.useTokenCookie||this.cookies["ss-reftok"]!=null)){const i=new rm({refreshToken:this.refreshToken,useTokenCookie:!!this.useTokenCookie});let l=this.refreshTokenUri||this.createUrlFromDto(We.Post,i);this.useTokenCookie&&(this.bearerToken=null,this.headers.delete("Authorization"));let c=this.createRequest({method:We.Post,request:i,args:null,url:l});return fetch(l,c).then(u=>this.createResponse(u,i).then(p=>(this.bearerToken=(p==null?void 0:p.accessToken)||null,r()))).catch(u=>this.onAuthenticationRequired?this.onAuthenticationRequired().then(r).catch(p=>this.handleError(o,p,"RefreshTokenException")):this.handleError(o,u,"RefreshTokenException"))}else if(this.onAuthenticationRequired)return this.onAuthenticationRequired().then(r)}return this.handleError(o,a)})}raiseError(t,n){return this.exceptionFilter!=null&&this.exceptionFilter(t,n),n}send(t,n,s){return this.sendRequest({method:os(t),request:t,args:n,url:s})}sendVoid(t,n,s){return this.sendRequest({method:os(t),request:t,args:n,url:s})}async api(t,n,s){try{const o=await this.fetch(os(t,s),t,n);return new it({response:o})}catch(o){return new it({error:Io(o)})}}async apiVoid(t,n,s){try{const o=await this.fetch(os(t,s),t,n);return new it({response:o??new Ll})}catch(o){return new it({error:Io(o)})}}async apiForm(t,n,s,o){try{const r=await this.fetchBody(os(t,o),t,n,s);return new it({response:r})}catch(r){return new it({error:Io(r)})}}async apiFormVoid(t,n,s,o){try{const r=await this.fetchBody(os(t,o),t,n,s);return new it({response:r??new Ll})}catch(r){return new it({error:Io(r)})}}};Pe(Kt,"globalRequestFilter"),Pe(Kt,"globalResponseFilter"),Pe(Kt,"toBase64");let ba=Kt;function os(e,t){return t??(typeof e.getMethod=="function"?e.getMethod():We.Post)}function Io(e){return e.responseStatus??e.ResponseStatus??(e.errorCode?e:e.message?im(e.message,e.errorCode):null)}class it{constructor(t){Pe(this,"response");Pe(this,"error");Object.assign(this,t)}get completed(){return this.response!=null||this.error!=null}get failed(){var t,n;return((t=this.error)==null?void 0:t.errorCode)!=null||((n=this.error)==null?void 0:n.message)!=null}get succeeded(){return!this.failed&&this.response!=null}get errorMessage(){var t;return(t=this.error)==null?void 0:t.message}get errorCode(){var t;return(t=this.error)==null?void 0:t.errorCode}get errors(){var t;return((t=this.error)==null?void 0:t.errors)??[]}get errorSummary(){return this.error!=null&&this.errors.length==0?this.errorMessage:null}fieldError(t){var s;let n=t.toLowerCase();return(s=this.errors)==null?void 0:s.find(o=>o.fieldName.toLowerCase()==n)}fieldErrorMessage(t){var n;return(n=this.fieldError(t))==null?void 0:n.message}hasFieldError(t){return this.fieldError(t)!=null}showSummary(t=[]){return this.failed?t.every(n=>!this.hasFieldError(n)):!1}summaryMessage(t=[]){if(this.showSummary(t)){let n=t.map(o=>o.toLowerCase());return n.find(o=>n.indexOf(o.toLowerCase())==-1)??this.errorMessage}}addFieldError(t,n,s="Exception"){this.error||(this.error=new gs);const o=this.fieldError(t);o!=null?(o.errorCode=s,o.message=n):this.error.errors.push(new ya({fieldName:t,errorCode:s,message:n}))}}function im(e,t="Exception"){return new gs({errorCode:t,message:e})}function zl(e){return e instanceof FormData}function Qr(e,t,n=null){return Ol(new om,o=>{n!=null&&(o.type=n),o.responseStatus=Ol(new gs,r=>{r.errorCode=e&&e.toString(),r.message=t})})}function jt(e){return e?e.match(/^[A-Z0-9_]+$/)?e.split("_").map(s=>s[0].toUpperCase()+s.substring(1).toLowerCase()).join(""):e.includes("_")?e.split("_").filter(n=>n[0]).map(n=>n[0].toUpperCase()+n.substring(1)).join(""):e.charAt(0).toUpperCase()+e.substring(1):""}function Dc(e){return e=jt(e),e?e.charAt(0).toLowerCase()+e.substring(1):""}function jl(e){return!e||e.length<=1?e.toLowerCase():e.replace(/([A-Z0-9])/g,"-$1").toLowerCase().replace(/^-/,"").replace(/-+/g,"-")}function bt(e,t){return e==null?null:t(e)}function wa(e){if(!e||!(e instanceof Object)||Array.isArray(e))return e;let t={};for(let n in e)if(e.hasOwnProperty(n)){const s=Dc(n),o=e[n];Array.isArray(o)?t[s]=o.map(r=>wa(r)):o instanceof Object?t[s]=wa(o):t[s]=o}return t}function qn(e){return qn&&(e.responseStatus||e.errors?e:wa(e))}function as(e){if(!e)return"null";if(typeof e.getTypeName=="function")return e.getTypeName();let t=e&&e.constructor;if(t==null)throw`${e} doesn't have constructor`;if(t.name)return t.name;let n=t.toString();return n.substring(9,n.indexOf("("))}function is(e,t){if(!e)return[e];let n=e.indexOf(t);return n>=0?[e.substring(0,n),e.substring(n+1)]:[e]}function go(e,t){if(e==null)return null;let n=e.indexOf(t);return n==-1?e:e.substring(0,n)}function qs(e,t){if(e==null)return null;let n=e.indexOf(t);return n==-1?e:e.substring(n+t.length)}function Bc(e,t){if(e==null)return null;let n=e.lastIndexOf(t);return n==-1?e:e.substring(0,n)}function Gn(e,t){if(e==null)return null;let n=e.lastIndexOf(t);return n==-1?e:e.substring(n+t.length)}function lm(e,t=1){return t=Math.abs(t),e&&(t<e.length?e.substring(0,e.length-t):"")}function um(e){return typeof e!="string"?e:e.replace(/([A-Z]|[0-9]+)/g," $1").replace(/_/g," ").trim()}function rt(e){return!e||e.indexOf(" ")>=0?e:um(jt(e))}const cm=e=>e.charAt(0).toUpperCase()+e.substring(1),dm=e=>e>="A"&&e<="Z",pm=e=>e>="0"&&e<="9",Jr=e=>dm(e)||pm(e);function fm(e){let t=[];if(typeof e!="string")return t;let n=0;for(let s=0;s<e.length;s++){let o=e[s],r=s>0?e[s-1]:null,a=s+1<e.length?e[s+1]:null;Jr(o)&&(!Jr(r)||!Jr(a))&&(t.push(e.substring(n,s)),n=s)}return t.push(e.substring(n,e.length)),t.filter(s=>!!s)}function Fc(e){return!e||$c(e,[" ",",",".",":","-"])>=0?e:cm(fm(e).join(" "))}function sr(e){if(!e||e.indexOf("?")===-1)return{};let t=qs(e,"?").split("&"),n={};for(let s=0;s<t.length;++s){let o=t[s].split("=");n[o[0]]=o.length>1?decodeURIComponent(o[1].replace(/\+/g," ")):null}return n}function Ht(...e){let t=[],n,s;for(n=0,s=e.length;n<s;n++){let r=e[n];t=r.indexOf("://")===-1?t.concat(r.split("/")):t.concat(r.lastIndexOf("/")===r.length-1?r.substring(0,r.length-1):r)}let o=[];for(n=0,s=t.length;n<s;n++){let r=t[n];!r||r==="."||(r===".."?o.pop():o.push(r))}return t[0]===""&&o.unshift(""),o.join("/")||(o.length?"/":".")}function Xt(e,t){for(let n in t)if(t.hasOwnProperty(n)){let s=t[n];if(typeof s>"u"||typeof s=="function"||typeof s=="symbol")continue;e+=e.indexOf("?")>=0?"&":"?",e+=n+(s===null?"":"="+mm(s))}return e}function hm(e,t){const n=go(e,"?"),s=Object.assign(sr(e),t);return Xt(n,s)}function mm(e){return e==null?"":typeof Uint8Array<"u"&&e instanceof Uint8Array?gm(e):encodeURIComponent(e)||""}function gm(e){let t=(3-e.length%3)%3,n="";for(let s,o=e.length,r=0,a=0;a<o;a++)s=a%3,r|=e[a]<<(16>>>s&24),(s===2||e.length-a===1)&&(n+=String.fromCharCode(Lo(r>>>18&63),Lo(r>>>12&63),Lo(r>>>6&63),Lo(r&63)),r=0);return t===0?n:n.substring(0,n.length-t)+(t===1?"=":"==")}function Lo(e){return e<26?e+65:e<52?e+71:e<62?e-4:e===62?43:e===63?47:65}function vm(e){return typeof btoa=="function"?btoa(e):Buffer.from(e).toString("base64")}ba.toBase64=e=>vm(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(t,n)=>String.fromCharCode(new Number("0x"+n).valueOf())));function ym(e){return e&&e[0]=='"'&&e[e.length]=='"'?e.slice(1,-1):e}function bm(e){try{return decodeURIComponent(e)}catch{return e}}function wm(e){if(!e)return null;let t=null,n=e.split(/; */);for(let s=0;s<n.length;s++){let o=n[s],r=is(o,"="),a=r[0].trim(),i=r.length>1?bm(ym(r[1].trim())):null;if(s==0)t={name:a,value:i,path:"/"};else{let l=a.toLowerCase();l=="httponly"?t.httpOnly=!0:l=="secure"?t.secure=!0:l=="expires"?(t.expires=new Date(i),t.expires.toString()==="Invalid Date"&&(t.expires=new Date(i.replace(/-/g," ")))):t[a]=i}}return t}function km(e){return Object.prototype.toString.call(e)==="[object Array]"}function xm(){const e=this.responseStatus||this.ResponseStatus;if(e==null)return;const t=e.ErrorCode?qn(e):e;return!t.errors||t.errors.length==0?t.message||t.errorCode:void 0}function Cm(e){const t=this.responseStatus||this.ResponseStatus;if(t==null)return;const n=t.ErrorCode?qn(t):t,s=Lm(e);if(s&&!(n.errors==null||n.errors.length==0)){const o=s.map(r=>(r||"").toLowerCase());for(let r of n.errors)if(o.indexOf((r.fieldName||"").toLowerCase())!==-1)return;for(let r of n.errors)if(o.indexOf((r.fieldName||"").toLowerCase())===-1)return r.message||r.errorCode}return n.message||n.errorCode||void 0}function gn(e){if(e==null)return xm.call(this);const t=this.responseStatus||this.ResponseStatus;if(t==null)return;const n=t.ErrorCode?qn(t):t;if(n.errors==null||n.errors.length==0)return;const s=n.errors.find(o=>(o.fieldName||"").toLowerCase()==e.toLowerCase());return s?s.message||s.errorCode:void 0}function vo(e){return e&&Object.prototype.toString.call(e)==="[object Date]"&&!isNaN(e)}function on(e){return e?vo(e)?e:e[0]=="/"?new Date(parseFloat(/Date\(([^)]+)\)/.exec(e)[1])):new Date(e):null}function Tn(e){return e<10?"0"+e:e}function Sm(e=new Date){return e.getFullYear()+"/"+Tn(e.getMonth()+1)+"/"+Tn(e.getDate())}function Tm(e=new Date){return Tn((e.getHours()+24)%12||12)+":"+Tn(e.getMinutes())+":"+Tn(e.getSeconds())+" "+(e.getHours()>12?"PM":"AM")}function Am(e){if(typeof e=="string"&&e.indexOf(":")>=0)return e;const t=e instanceof Date?e.getTime():typeof e=="string"?ai(e)*1e3:e;return Mm(t)}function Mm(e){const t=e%1e3;e=(e-t)/1e3;const n=e%60;e=(e-n)/60;const s=e%60,o=(e-s)/60;let r=Tn(o)+":"+Tn(s)+":"+Tn(n);return t>0?r+"."+_m(`${t}`,3,"0").substring(0,3):r}function _m(e,t,n){if(t=Math.floor(t)||0,t<e.length)return e;n=n?String(n):" ";let s="",o=t-e.length,r=0;for(;s.length<o;)n[r]||(r=0),s+=n[r],r++;return s+e.slice(0)}function Pm(e,t,n){return e.setAttribute(t,n)}function Em(e,t){const n={className:"class",htmlFor:"for"},s=document.createElement(e);if(t!=null&&t.attrs)for(const o in t.attrs)Pm(s,n[o]||o,t.attrs[o]);return t!=null&&t.events&&Im(s,t.events),t&&t.insertAfter&&t.insertAfter.parentNode.insertBefore(s,t.insertAfter.nextSibling),s}function or(e,t){return typeof e=="string"?document.querySelector(e):e||null}function Hc(e,t){var n;return typeof e=="string"?Array.from(((n=typeof document<"u"?document:null)==null?void 0:n.querySelectorAll(e))??[]):Array.isArray(e)?e.flatMap(s=>Hc(s)):[e]}function Im(e,t){return Hc(e).forEach(n=>{Object.keys(t).forEach(function(s){let o=t[s];typeof s=="string"&&typeof o=="function"&&n.addEventListener(s,t[s]=o.bind(n))})}),t}function NS(e){return new Promise((t,n)=>{document.body.appendChild(Em("script",{attrs:{src:e},events:{load:t,error:n}}))})}function Nc(e,t){let s=setTimeout(()=>e(!0),300);return()=>{clearTimeout(s),e(!1)}}typeof window<"u"&&window.Element!==void 0&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){let t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(t!==null&&t.nodeType===1);return null}));var Vl;(function(e){e.MultiPart="multipart/form-data",e.UrlEncoded="application/x-www-form-urlencoded",e.Json="application/json"})(Vl||(Vl={}));function Lm(e){return e?km(e)?e:e.split(",").map(t=>t.trim()):[]}function Rm(e){for(let[t,n]of e)typeof n=="object"&&n.size===0&&e.delete(t);return e}function zm(e,t){let n=e.length;for(;n>0&&e[n-1]===t;)--n;return n<e.length?e.substring(0,n):e}function rn(e,t){const n={};return e&&Object.keys(e).forEach(s=>{t.indexOf(s)<0&&(n[s]=e[s])}),n}function jm(e){const t={};return e&&Object.keys(e).forEach(n=>{const s=e[n];s!=null&&s!==""&&(t[n]=s)}),t}function Ol(e,t){return t(e),e}function Vm(e,t,n){return e.reduce((s,o)=>(t(s,o),s),{})}function Ne(e,t){if(!e||!t)return null;let n=e[t];if(n)return n;if(typeof e=="object"){let s=t.toLowerCase(),o=Object.keys(e).find(r=>r.toLowerCase()===s);return o?e[o]:null}return null}function Om(e){return e==null?"":typeof e=="string"?e.substring(0,6)==="/Date("?on(e):e.trim():e}function ai(e){let t=0,n=0,s=0,o=0,r=0,a=is(e.substring(1),"T"),i=a.length==2,l=is(a[0],"D");if(l.length==2&&(t=parseInt(l[0],10)||0),i){let u=is(a[1],"H");u.length==2&&(n=parseInt(u[0],10)||0);let p=is(u[u.length-1],"M");p.length==2&&(s=parseInt(p[0],10)||0);let g=is(p[p.length-1],"S");g.length==2&&(r=parseFloat(g[0])),o=r|0,r-=o}return t*24*60*60+n*60*60+s*60+o+r}function ka(e){return e==null?null:typeof e=="string"?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&#34;"):`${e}`}function $c(e,t){for(let n=0,s=t.length;n<s;n++){let o=e.indexOf(t[n]);if(o>=0)return o}return-1}function Dm(e){return`/Date(${e.getTime()})/`}function xa(e){let t=[];return e.forEach(n=>Object.keys(n).forEach(s=>{t.indexOf(s)===-1&&t.push(s)})),t}function Bm(){let e={};function t(s,o){let r=Symbol("id");return e[s]||(e[s]={}),e[s][r]=o,{unsubscribe:function(){delete e[s][r],Object.getOwnPropertySymbols(e[s]).length===0&&delete e[s]}}}function n(s,o){e[s]&&Object.getOwnPropertySymbols(e[s]).forEach(r=>e[s][r](o))}return{subscribe:t,publish:n}}var Fm=Object.defineProperty,Hm=(e,t,n)=>t in e?Fm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qe=(e,t,n)=>(Hm(e,typeof t!="symbol"?t+"":t,n),n);const Nm={class:"flex items-center"},$m={key:0,class:"flex-shrink-0 mr-3"},Um={key:0,class:"h-5 w-5 text-yellow-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Wm=d("path",{"fill-rule":"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"},null,-1),qm=[Wm],Gm={key:1,class:"h-5 w-5 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Qm=d("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"},null,-1),Jm=[Qm],Km={key:2,class:"h-5 w-5 text-blue-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Zm=d("path",{"fill-rule":"evenodd",d:"M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"},null,-1),Ym=[Zm],Xm={key:3,class:"h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},eg=d("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z","clip-rule":"evenodd"},null,-1),tg=[eg],ng=Te({__name:"Alert",props:{type:{default:"warn"},hideIcon:{type:Boolean}},setup(e){const t=e,n=x(()=>t.type=="info"?"bg-blue-50 dark:bg-blue-200":t.type=="error"?"bg-red-50 dark:bg-red-200":t.type=="success"?"bg-green-50 dark:bg-green-200":"bg-yellow-50 dark:bg-yellow-200"),s=x(()=>t.type=="info"?"border-blue-400":t.type=="error"?"border-red-400":t.type=="success"?"border-green-400":"border-yellow-400"),o=x(()=>t.type=="info"?"text-blue-700":t.type=="error"?"text-red-700":t.type=="success"?"text-green-700":"text-yellow-700");return(r,a)=>(h(),y("div",{class:_([n.value,s.value,"border-l-4 p-4"])},[d("div",Nm,[r.hideIcon?N("",!0):(h(),y("div",$m,[r.type=="warn"?(h(),y("svg",Um,qm)):r.type=="error"?(h(),y("svg",Gm,Jm)):r.type=="info"?(h(),y("svg",Km,Ym)):r.type=="success"?(h(),y("svg",Xm,tg)):N("",!0)])),d("div",null,[d("p",{class:_([o.value,"text-sm"])},[he(r.$slots,"default")],2)])])],2))}}),sg={key:0,class:"rounded-md bg-green-50 dark:bg-green-200 p-4",role:"alert"},og={class:"flex"},rg=d("div",{class:"flex-shrink-0"},[d("svg",{class:"h-5 w-5 text-green-400 dark:text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})])],-1),ag={class:"ml-3"},ig={class:"text-sm font-medium text-green-800"},lg={key:0},ug={class:"ml-auto pl-3"},cg={class:"-mx-1.5 -my-1.5"},dg=d("span",{class:"sr-only"},"Dismiss",-1),pg=d("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})],-1),fg=[dg,pg],hg=Te({__name:"AlertSuccess",props:{message:{}},setup(e){const t=K(!1);return(n,s)=>t.value?N("",!0):(h(),y("div",sg,[d("div",og,[rg,d("div",ag,[d("h3",ig,[n.message?(h(),y("span",lg,X(n.message),1)):he(n.$slots,"default",{key:1})])]),d("div",ug,[d("div",cg,[d("button",{type:"button",class:"inline-flex rounded-md bg-green-50 dark:bg-green-200 p-1.5 text-green-500 dark:text-green-600 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:ring-offset-green-200",onClick:s[0]||(s[0]=o=>t.value=!0)},fg)])])])]))}}),mg={class:"flex"},gg=d("div",{class:"flex-shrink-0"},[d("svg",{class:"h-5 w-5 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{fill:"currentColor",d:"M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"})])],-1),vg={class:"ml-3"},yg={class:"text-sm text-red-700 dark:text-red-200"},bg=Te({__name:"ErrorSummary",props:{status:{},except:{},class:{}},setup(e){const t=e;let n=Je("ApiState",void 0);const s=x(()=>t.status||n!=null&&n.error.value?Cm.call({responseStatus:t.status??(n==null?void 0:n.error.value)},t.except??[]):null);return(o,r)=>s.value?(h(),y("div",{key:0,class:_(`bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 ${o.$props.class}`)},[d("div",mg,[gg,d("div",vg,[d("p",yg,X(s.value),1)])])],2)):N("",!0)}}),wg=["id","aria-describedby"],kg=Te({__name:"InputDescription",props:{id:{},description:{}},setup(e){return(t,n)=>t.description?(h(),y("div",{key:"description",class:"mt-2 text-sm text-gray-500",id:`${t.id}-description`,"aria-describedby":`${t.id}-description`},[d("div",null,X(t.description),1)],8,wg)):N("",!0)}});function ii(e){if(e==null||typeof e=="object")return"";const t=on(e);return t==null||t.toString()=="Invalid Date"?"":t.toISOString().substring(0,10)??""}function Uc(e){if(e==null||typeof e=="object")return"";const t=on(e);return t==null||t.toString()=="Invalid Date"?"":t.toISOString().substring(0,19)??""}function Wc(e){return e==null?"":Am(e)}function qc(e,t){if(we.config.inputValue)return we.config.inputValue(e,t);let n=e==="date"?ii(t):e==="datetime-local"?Uc(t):e==="time"?Wc(t):t;const s=typeof n;return n=n==null?"":s=="boolean"||s=="number"?`${n}`:n,n}function Gc(e,t){e.value=null,Ut(()=>e.value=t)}function ls(e){return Object.keys(e).forEach(t=>{const n=e[t];e[t]=mt(n)?ge(n):n}),e}function _n(e,t,n){n?(t.value=e.entering.cls+" "+e.entering.from,setTimeout(()=>t.value=e.entering.cls+" "+e.entering.to,0)):(t.value=e.leaving.cls+" "+e.leaving.from,setTimeout(()=>t.value=e.leaving.cls+" "+e.leaving.to,0))}function $o(e){if(typeof document>"u")return;let t=(e==null?void 0:e.after)||document.activeElement,n=t&&t.form;if(n){let s=':not([disabled]):not([tabindex="-1"])',o=n.querySelectorAll(`a:not([disabled]), button${s}, input[type=text]${s}, [tabindex]${s}`),r=Array.prototype.filter.call(o,i=>i.offsetWidth>0||i.offsetHeight>0||i===t),a=r.indexOf(t);a>-1&&(r[a+1]||r[0]).focus()}}function Zn(e){if(!e)return null;if(typeof e=="string")return e;const t=typeof e=="function"?new e:typeof e=="object"?e:null;if(!t)throw new Error(`Invalid DTO Type '${typeof e}'`);if(typeof t.getTypeName!="function")throw new Error(`${JSON.stringify(t)} is not a Request DTO`);const n=t.getTypeName();if(!n)throw new Error("DTO Required");return n}function nn(e,t,n){n||(n={});let s=n.cls||n.className||n.class;return s&&(n=rn(n,["cls","class","className"]),n.class=s),t==null?`<${e}`+Ca(n)+"/>":`<${e}`+Ca(n)+`>${t||""}</${e}>`}function Ca(e){return Object.keys(e).reduce((t,n)=>`${t} ${n}="${ka(e[n])}"`,"")}function xr(e){return Object.assign({target:"_blank",rel:"noopener",class:"text-blue-600"},e)}function vs(e){return Si(e)}let xg=["string","number","boolean","null","undefined"];function Qn(e){return xg.indexOf(typeof e)>=0||e instanceof Date}function ro(e){return!Qn(e)}class Qc{get length(){return typeof localStorage>"u"?0:localStorage.length}getItem(t){return typeof localStorage>"u"?null:localStorage.getItem(t)}setItem(t,n){typeof localStorage>"u"||localStorage.setItem(t,n)}removeItem(t){typeof localStorage>"u"||localStorage.removeItem(t)}clear(){typeof localStorage>"u"||localStorage.clear()}key(t){return typeof localStorage>"u"?null:localStorage.key(t)}}function rr(e){return typeof e=="string"?JSON.parse(e):null}function li(e,t){if(typeof history<"u"){const n=t?Xt(Bc(location.href,"?"),e):hm(location.href,e);history.pushState({},"",n)}}function Cr(e,t){if(["function","Function","eval","=>",";"].some(s=>e.includes(s)))throw new Error(`Unsafe script: '${e}'`);const n=Object.assign(Object.keys(globalThis).reduce((s,o)=>(s[o]=void 0,s),{}),t);return new Function("with(this) { return ("+e+") }").call(n)}function Sa(e){typeof navigator<"u"&&navigator.clipboard.writeText(e)}function ui(e){const t=we.config.storage.getItem(e);return t?JSON.parse(t):null}function Sr(e,t){return Xt(`swr.${as(e)}`,t?Object.assign({},e,t):e)}function Cg(e){if(e.request){const t=Sr(e.request,e.args);we.config.storage.removeItem(t)}}async function Jc(e,t,n,s,o){const r=Sr(t,s);n(new it({response:ui(r)}));const a=await e.api(t,s,o);if(a.succeeded&&a.response){a.response._date=new Date().valueOf();const i=JSON.stringify(a.response);we.config.storage.setItem(r,i),n(a)}return a}function Kc(e,t){let n=null;return(...s)=>{n&&clearTimeout(n),n=setTimeout(()=>{e(...s)},t||100)}}function Dn(e){return typeof e=="string"?e.split(","):e||[]}function Fn(e,t){const n=Dn(t);return e.reduce((s,o)=>(s[o]=!n.includes(o),s),{})}function Sg(e){return new Promise(t=>setTimeout(t,e))}function Zc(){return{LocalStore:Qc,dateInputFormat:ii,dateTimeInputFormat:Uc,timeInputFormat:Wc,textInputValue:qc,setRef:Gc,unRefs:ls,transition:_n,focusNextElement:$o,getTypeName:Zn,htmlTag:nn,htmlAttrs:Ca,linkAttrs:xr,toAppUrl:vs,isPrimitive:Qn,isComplexType:ro,pushState:li,scopedExpr:Cr,copyText:Sa,fromCache:ui,swrCacheKey:Sr,swrClear:Cg,swrApi:Jc,asStrings:Dn,asOptions:Fn,createDebounce:Kc,delay:Sg}}const Yc="png,jpg,jpeg,jfif,gif,svg,webp".split(","),Xc={img:"png,jpg,jpeg,gif,svg,webp,png,jpg,jpeg,gif,bmp,tif,tiff,webp,ai,psd,ps".split(","),vid:"avi,m4v,mov,mp4,mpg,mpeg,wmv,webm".split(","),aud:"mp3,mpa,ogg,wav,wma,mid,webm".split(","),ppt:"key,odp,pps,ppt,pptx".split(","),xls:"xls,xlsm,xlsx,ods,csv,tsv".split(","),doc:"doc,docx,pdf,rtf,tex,txt,md,rst,xls,xlsm,xlsx,ods,key,odp,pps,ppt,pptx".split(","),zip:"zip,tar,gz,7z,rar,gzip,deflate,br,iso,dmg,z,lz,lz4,lzh,s7z,apl,arg,jar,war".split(","),exe:"exe,bat,sh,cmd,com,app,msi,run,vb,vbs,js,ws,wsh".split(","),att:"bin,oct,dat".split(",")},Dl=Object.keys(Xc),ln=(e,t)=>`<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='${e}'>${t}</svg>`,Uo={img:ln("4 4 16 16","<path fill='currentColor' d='M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 0H6v6.38l2.19-2.19l5.23 5.23l1-1a1.59 1.59 0 0 1 2.11.11L18 16V6zm-5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z'/>"),vid:ln("0 0 24 24","<path fill='currentColor' d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5Z'/>"),aud:ln("0 0 24 24","<path fill='currentColor' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2z'/>"),ppt:ln("0 0 48 48","<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'><path d='M4 8h40'/><path d='M8 8h32v26H8V8Z' clip-rule='evenodd'/><path d='m22 16l5 5l-5 5m-6 16l8-8l8 8'/></g>"),xls:ln("0 0 256 256","<path fill='currentColor' d='M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2ZM70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32 40v-26h60v28H72a2 2 0 0 1-2-2Zm130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2ZM69.2 148.4L84.5 128l-15.3-20.4a6 6 0 1 1 9.6-7.2L92 118l13.2-17.6a6 6 0 0 1 9.6 7.2L99.5 128l15.3 20.4a6 6 0 0 1-9.6 7.2L92 138l-13.2 17.6a6 6 0 1 1-9.6-7.2Z'/>"),doc:ln("0 0 32 32","<path fill='currentColor' d='M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z'/><path fill='currentColor' d='M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z'/>"),zip:ln("0 0 16 16","<g fill='currentColor'><path d='M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598l.93.62l.93-.62l-.4-1.598a1 1 0 0 1-.03-.243V7.5z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z'/></g>"),exe:ln("0 0 16 16","<path fill='currentColor' fill-rule='evenodd' d='M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983l-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z'/>"),att:ln("0 0 24 24","<path fill='currentColor' d='M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z'/>")},Tg=/[\r\n%#()<>?[\\\]^`{|}]/g,Bl=1024,Ag=["Bytes","KB","MB","GB","TB"],Mg=(()=>{const e="application/",t=e+"vnd.openxmlformats-officedocument.",n="image/",s="text/",o="audio/",r="video/",a={jpg:n+"jpeg",tif:n+"tiff",svg:n+"svg+xml",ico:n+"x-icon",ts:s+"typescript",py:s+"x-python",sh:s+"x-sh",mp3:o+"mpeg3",mpg:r+"mpeg",ogv:r+"ogg",xlsx:t+"spreadsheetml.sheet",xltx:t+"spreadsheetml.template",docx:t+"wordprocessingml.document",dotx:t+"wordprocessingml.template",pptx:t+"presentationml.presentation",potx:t+"presentationml.template",ppsx:t+"presentationml.slideshow",mdb:e+"vnd.ms-access"};function i(c,u){c.split(",").forEach(p=>a[p]=u)}function l(c,u){c.split(",").forEach(p=>a[p]=u(p))}return l("jpeg,gif,png,tiff,bmp,webp",c=>n+c),l("jsx,csv,css",c=>s+c),l("aac,ac3,aiff,m4a,m4b,m4p,mid,midi,wav",c=>o+c),l("3gpp,avi,dv,divx,ogg,mp4,webm",c=>r+c),l("rtf,pdf",c=>e+c),i("htm,html,shtm",s+"html"),i("js,mjs,cjs",s+"javascript"),i("yml,yaml",e+"yaml"),i("bat,cmd",e+"bat"),i("xml,csproj,fsproj,vbproj",s+"xml"),i("txt,ps1",s+"plain"),i("qt,mov",r+"quicktime"),i("doc,dot",e+"msword"),i("xls,xlt,xla",e+"excel"),i("ppt,oit,pps,ppa",e+"vnd.ms-powerpoint"),i("cer,crt,der",e+"x-x509-ca-cert"),i("gz,tgz,zip,rar,lzh,z",e+"x-compressed"),i("aaf,aca,asd,bin,cab,chm,class,cur,db,dat,deploy,dll,dsp,exe,fla,ics,inf,mix,msi,mso,obj,ocx,prm,prx,psd,psp,qxd,sea,snp,so,sqlite,toc,ttf,u32,xmp,xsn,xtp",e+"octet-stream"),a})();let Ta=[];function ed(e){return e=e.replace(/"/g,"'"),e=e.replace(/>\s+</g,"><"),e=e.replace(/\s{2,}/g," "),e.replace(Tg,encodeURIComponent)}function ci(e){return"data:image/svg+xml;utf8,"+ed(e)}function td(e){let t=URL.createObjectURL(e);return Ta.push(t),t}function nd(){Ta.forEach(e=>{try{URL.revokeObjectURL(e)}catch(t){console.error("URL.revokeObjectURL",t)}}),Ta=[]}function di(e){if(!e)return null;let t=go(e,"?");return Gn(t,"/")}function yo(e){let t=di(e);return t==null||t.indexOf(".")===-1?null:Gn(t,".").toLowerCase()}function pi(e){let t=yo(e.name);return t&&Yc.indexOf(t)>=0?td(e):Bn(e.name)}function fi(e){if(!e)return!1;if(e.startsWith("blob:")||e.startsWith("data:"))return!0;let t=yo(e);return t&&Yc.indexOf(t)>=0||!1}function Bn(e){if(!e)return null;let t=yo(e);return t==null||fi(e)?e:Gs(t)||ci(Uo.doc)}function Gs(e){let t=sd(e);return t&&ci(t)||null}function sd(e){if(Uo[e])return Uo[e];for(let t=0;t<Dl.length;t++){let n=Dl[t];if(Xc[n].indexOf(e)>=0)return Uo[n]}return null}function hi(e,t=2){if(e===0)return"0 Bytes";const n=t<0?0:t,s=Math.floor(Math.log(e)/Math.log(Bl));return parseFloat((e/Math.pow(Bl,s)).toFixed(n))+" "+Ag[s]}function _g(e){return e.files&&Array.from(e.files).map(t=>({fileName:t.name,contentLength:t.size,filePath:pi(t)}))}function mi(e,t){e.onerror=null,e.src=gi(e.src,t)||""}function gi(e,t){return Gs(Gn(e,".").toLowerCase())||(t?Gs(t)||t:null)||Gs("doc")}function Aa(e){if(!e)throw new Error("fileNameOrExt required");const t=Gn(e,".").toLowerCase();return Mg[t]||"application/"+t}function Pg(){return{extSvg:sd,extSrc:Gs,getExt:yo,encodeSvg:ed,canPreview:fi,getFileName:di,getMimeType:Aa,formatBytes:hi,filePathUri:Bn,svgToDataUri:ci,fileImageUri:pi,objectUrl:td,flush:nd,inputFiles:_g,iconOnError:mi,iconFallbackSrc:gi}}class Eg{constructor(t){qe(this,"view"),qe(this,"includeTypes"),Object.assign(this,t)}getTypeName(){return"MetadataApp"}getMethod(){return"GET"}createResponse(){return{}}}const xs="/metadata/app.json",Ig={Boolean:"checkbox",DateTime:"date",DateOnly:"date",DateTimeOffset:"date",TimeSpan:"time",TimeOnly:"time",Byte:"number",Short:"number",Int64:"number",Int32:"number",UInt16:"number",UInt32:"number",UInt64:"number",Single:"number",Double:"number",Decimal:"number",String:"text",Guid:"text",Uri:"text"},Lg={number:"Int32",checkbox:"Boolean",date:"DateTime","datetime-local":"DateTime",time:"TimeSpan"},Ma={Byte:"byte",Int16:"short",Int32:"int",Int64:"long",UInt16:"ushort",Unt32:"uint",UInt64:"ulong",Single:"float",Double:"double",Decimal:"decimal"};[...Object.keys(Ma),...Object.values(Ma)];const Rg={String:"string",Boolean:"bool",...Ma};function Ro(e){return Rg[e]||e}function od(e,t){return e?(t||(t=[]),e==="Nullable`1"?Ro(t[0])+"?":e.endsWith("[]")?`List<${Ro(e.substring(0,e.length-2))}>`:t.length===0?Ro(e):go(Ro(e),"`")+"<"+t.join(",")+">"):""}function zg(e){return e&&od(e.name,e.genericArgs)}class Jn{constructor(){qe(this,"Query"),qe(this,"QueryInto"),qe(this,"Create"),qe(this,"Update"),qe(this,"Patch"),qe(this,"Delete")}get AnyQuery(){return this.Query||this.QueryInto}get AnyUpdate(){return this.Patch||this.Update}get dataModel(){var t;return(t=this.AnyQuery)==null?void 0:t.dataModel}toArray(){return[this.Query,this.QueryInto,this.Create,this.Update,this.Patch,this.Delete].filter(t=>!!t).map(t=>t)}get empty(){return!this.Query&&!this.QueryInto&&!this.Create&&!this.Update&&!this.Patch&&!this.Delete}add(t){yt.isQueryInto(t)&&!this.QueryInto?this.QueryInto=t:yt.isQuery(t)&&!this.Query?this.Query=t:yt.isCreate(t)&&!this.Create?this.Create=t:yt.isUpdate(t)&&!this.Update?this.Update=t:yt.isPatch(t)&&!this.Patch?this.Patch=t:yt.isDelete(t)&&!this.Delete&&(this.Delete=t)}static from(t){const n=new Jn;return t.forEach(s=>{n.add(s)}),n}static forType(t,n){var s;let o=new Jn;if(we.config.apisResolver&&t){const r=we.config.apisResolver(t,n);r&&(o.Query=r.Query,o.QueryInto=r.QueryInto,o.Create=r.Create,o.Update=r.Update,o.Patch=r.Patch,o.Delete=r.Delete)}return t&&(n??(n=(s=we.metadata.value)==null?void 0:s.api),n==null||n.operations.forEach(r=>{var a;((a=r.dataModel)==null?void 0:a.name)==t&&o.add(r)})),o}}const yt={Create:"ICreateDb`1",Update:"IUpdateDb`1",Patch:"IPatchDb`1",Delete:"IDeleteDb`1",AnyRead:["QueryDb`1","QueryDb`2"],AnyWrite:["ICreateDb`1","IUpdateDb`1","IPatchDb`1","IDeleteDb`1"],isAnyQuery:e=>bt(e.request.inherits,t=>yt.AnyRead.indexOf(t.name)>=0),isQuery:e=>bt(e.request.inherits,t=>t.name==="QueryDb`1"),isQueryInto:e=>bt(e.request.inherits,t=>t.name==="QueryDb`2"),isCrud:e=>{var t;return(t=e.request.implements)==null?void 0:t.some(n=>yt.AnyWrite.indexOf(n.name)>=0)},isCreate:e=>zo(e,yt.Create),isUpdate:e=>zo(e,yt.Update),isPatch:e=>zo(e,yt.Patch),isDelete:e=>zo(e,yt.Delete),model:e=>{var t,n,s;return e?bt(e.inherits,o=>yt.AnyRead.indexOf(o.name)>=0)?(t=e.inherits)==null?void 0:t.genericArgs[0]:(s=(n=e.implements)==null?void 0:n.find(o=>yt.AnyWrite.indexOf(o.name)>=0))==null?void 0:s.genericArgs[0]:null}};function jg(e){var t;return((t=e.input)==null?void 0:t.type)||Tr(vi(e))}function rd(e){return e.endsWith("?")?lm(e,1):e}function Tr(e){return Ig[rd(e)]}function Vg(e){return e&&Lg[e]||"String"}function vi(e){return e.type==="Nullable`1"?e.genericArgs[0]:e.type}function _a(e){return e&&Tr(e)=="number"||!1}function ad(e){return e&&e.toLowerCase()=="string"||!1}function Og(e){return e=="List`1"||e.startsWith("List<")||e.endsWith("[]")}function id(e){if(!(e!=null&&e.type))return!1;const t=vi(e);return e.isValueType&&t.indexOf("`")==-1||e.isEnum?!1:Tr(e.type)==null}function ld(e){var t,n,s,o;if(!(e!=null&&e.type))return!1;const r=vi(e);return e.isValueType&&r.indexOf("`")==-1||e.isEnum||((t=e.input)==null?void 0:t.type)=="hidden"||((n=e.input)==null?void 0:n.type)=="file"||((s=e.input)==null?void 0:s.type)=="tag"||((o=e.input)==null?void 0:o.type)=="combobox"?!0:Tr(e.type)!=null}function ao(e,t){let n=typeof e=="string"?Ar(e):e;n||(console.warn(`Metadata not found for: ${e}`),n={request:{name:e}});let s=function(){return function(r){Object.assign(this,r)}}(),o=function(){function r(a){Object.assign(this,a)}return r.prototype.createResponse=function(){return n.returnsVoid?void 0:new s},r.prototype.getTypeName=function(){return n.request.name},r.prototype.getMethod=function(){return n.method||"POST"},r}();return new o(t)}function Dg(e,t,n={}){let s=function(){return function(r){Object.assign(this,r)}}(),o=function(){function r(a){Object.assign(this,a)}return r.prototype.createResponse=function(){return typeof n.createResponse=="function"?n.createResponse():new s},r.prototype.getTypeName=function(){return e},r.prototype.getMethod=function(){return n.method||"POST"},r}();return new o(t)}function Qs(e,t){return e?(Object.keys(e).forEach(n=>{let s=e[n];typeof s=="string"?s.startsWith("/Date")&&(e[n]=ii(on(s))):s!=null&&typeof s=="object"&&(Array.isArray(s)?e[n]=Array.from(s):e[n]=Object.assign({},s))}),e):{}}function Bg(e,t){let n={};return Array.from(e.elements).forEach(s=>{var o;let r=s;if(!r.id||r.value==null||r.value==="")return;const a=r.id.toLowerCase(),i=t&&t.find(p=>p.name.toLowerCase()==a);let l=i==null?void 0:i.type,c=(o=i==null?void 0:i.genericArgs)==null?void 0:o[0],u=r.type==="checkbox"?r.checked:r.value;_a(l)?u=Number(u):l==="List`1"&&typeof u=="string"&&(u=u.split(",").map(p=>_a(c)?Number(p):p)),n[r.id]=u}),n}function yi(e){var t;return((t=e==null?void 0:e.api)==null?void 0:t.operations)&&e.api.operations.length>0}function Fg(e){if(!bi()&&e!=null&&e.assert&&!we.metadata.value)throw new Error("useMetadata() not configured, see: https://docs.servicestack.net/vue/use-metadata");return we.metadata.value}function io(e){return e&&yi(e)?(e.date=Dm(new Date),we.metadata.value=e,typeof localStorage<"u"&&localStorage.setItem(xs,JSON.stringify(e)),!0):!1}function Hg(){we.metadata.value=null,typeof localStorage<"u"&&localStorage.removeItem(xs)}function bi(){if(we.metadata.value!=null)return!0;let e=globalThis.Server;if(yi(e))io(e);else{const t=typeof localStorage<"u"?localStorage.getItem(xs):null;if(t)try{io(JSON.parse(t))}catch{console.error(`Could not JSON.parse ${xs} from localStorage`)}}return we.metadata.value!=null}async function Fl(e,t){let n=t?await t():await fetch(e);if(n.ok){let s=await n.text();io(JSON.parse(s))}else console.error(`Could not download ${t?"AppMetadata":e}: ${n.statusText}`);yi(we.metadata.value)||console.warn("AppMetadata is not available")}async function Ng(e){var t;const{olderThan:n,resolvePath:s,resolve:o}=e||{};let r=bi()&&n!==0;if(r&&n){let a=on((t=we.metadata.value)==null?void 0:t.date);(!a||new Date().getTime()-a.getTime()>n)&&(r=!1)}if(!r){if((s||o)&&(await Fl(s||xs,o),we.metadata.value!=null))return;const a=Je("client");if(a!=null){const i=await a.api(new Eg);i.succeeded&&io(i.response)}if(we.metadata.value!=null)return;await Fl(xs)}return we.metadata.value}function qt(e,t){var n;if(we.config.typeResolver){let i=we.config.typeResolver(e,t);if(i)return i}let s=(n=we.metadata.value)==null?void 0:n.api;if(!s||!e)return null;let o=s.types.find(i=>i.name.toLowerCase()===e.toLowerCase()&&(!t||i.namespace==t));if(o)return o;let r=Ar(e);if(r)return r.request;let a=s.operations.find(i=>i.response&&i.response.name.toLowerCase()===e.toLowerCase()&&(!t||i.response.namespace==t));return a?a.response:null}function Ar(e){var t;if(we.config.apiResolver){const s=we.config.apiResolver(e);if(s)return s}let n=(t=we.metadata.value)==null?void 0:t.api;return n?n.operations.find(s=>s.request.name.toLowerCase()===e.toLowerCase()):null}function $g({dataModel:e}){var t;const n=(t=we.metadata.value)==null?void 0:t.api;if(!n)return[];let s=n.operations;if(e){const o=typeof e=="string"?qt(e):e;s=s.filter(r=>ud(r.dataModel,o))}return s}function wi(e){return e?qt(e.name,e.namespace):null}function ud(e,t){return e&&t&&e.name===t.name&&(!e.namespace||!t.namespace||e.namespace===t.namespace)}function Ug(e,t){let n=qt(e);return n&&n.properties&&n.properties.find(s=>s.name.toLowerCase()===t.toLowerCase())}function cd(e){return dd(qt(e))}function dd(e){if(e&&e.isEnum&&e.enumNames!=null){let t={};for(let n=0;n<e.enumNames.length;n++){const s=(e.enumDescriptions?e.enumDescriptions[n]:null)||e.enumNames[n],o=(e.enumValues!=null?e.enumValues[n]:null)||e.enumNames[n];t[o]=s}return t}return null}function pd(e){if(!e)return null;let t={},n=e.input&&e.input.allowableEntries;if(n){for(let o=0;o<n.length;o++){let r=n[o];t[r.key]=r.value}return t}let s=e.allowableValues||(e.input?e.input.allowableValues:null);if(s){for(let o=0;o<s.length;o++){let r=s[o];t[r]=r}return t}if(e.isEnum){const o=e.genericArgs&&e.genericArgs.length==1?e.genericArgs[0]:e.type,r=qt(o);if(r)return dd(r)}return null}function ki(e){if(!e)return;const t=[];return Object.keys(e).forEach(n=>t.push({key:n,value:e[n]})),t}function Wg(e,t){const n=((s,o)=>Object.assign({id:s,name:s,type:o},t))(e.name,(t==null?void 0:t.type)||jg(e)||"text");return e.isEnum&&(n.type="select",n.allowableEntries=ki(pd(e))),n}function qg(e){let t=[];if(e){const n=zt(e),s=Ar(e.name),o=wi(s==null?void 0:s.dataModel);n.forEach(r=>{var a,i,l;if(!ld(r))return;const c=Wg(r,r.input);if(c.id=Dc(c.id),c.type=="file"&&r.uploadTo&&!c.accept){const u=(i=(a=we.metadata.value)==null?void 0:a.plugins.filesUpload)==null?void 0:i.locations.find(p=>p.name==r.uploadTo);u&&!c.accept&&u.allowExtensions&&(c.accept=u.allowExtensions.map(p=>p.startsWith(".")?p:`.${p}`).join(","))}if(o){const u=(l=o.properties)==null?void 0:l.find(p=>p.name==r.name);r.ref||(r.ref=u==null?void 0:u.ref)}if(c.options)try{const u={input:c,$typeFields:n.map(g=>g.name),$dataModelFields:o?zt(o).map(g=>g.name):[],...we.config.scopeWhitelist},p=Cr(c.options,u);Object.keys(p).forEach(g=>{c[g]=p[g]})}catch{console.error(`failed to evaluate '${c.options}'`)}t.push(c)})}return t}function xi(e,t){var n,s;if(!t.type)return console.error("enumDescriptions missing {type:'EnumType'} options"),[`${e}`];const o=qt(t.type);if(!(o!=null&&o.enumValues))return console.error(`Could not find metadata for ${t.type}`),[`${e}`];const r=[];for(let a=0;a<o.enumValues.length;a++){const i=parseInt(o.enumValues[a]);i>0&&(i&e)===i&&r.push(((n=o.enumDescriptions)==null?void 0:n[a])||((s=o.enumNames)==null?void 0:s[a])||`${e}`)}return r}function fd(e){return t=>typeof t=="number"?xi(t,{type:e}):t}function zt(e){if(!e)return[];let t=[],n={};function s(o){o.forEach(r=>{n[r.name]||(n[r.name]=1,t.push(r))})}for(;e;)e.properties&&s(e.properties),e=e.inherits?wi(e.inherits):null;return t.map(o=>o.type.endsWith("[]")?{...o,type:"List`1",genericArgs:[o.type.substring(0,o.type.length-2)]}:o)}function zo(e,t){var n;return((n=e.request.implements)==null?void 0:n.some(s=>s.name===t))||!1}function Ms(e){return e?hd(e,zt(e)):null}function hd(e,t){let n=t.find(o=>o.name.toLowerCase()==="id");if(n&&n.isPrimaryKey)return n;let s=t.find(o=>o.isPrimaryKey)||n;if(!s){let o=yt.model(e);if(o)return bt(qt(o),r=>Ms(r));console.error(`Primary Key not found in ${e.name}`)}return s||null}function Gg(e,t){return bt(Ms(e),n=>Ne(t,n.name))}function md(e,t,n){return e&&e.valueType==="none"?"":n.key==="%In"||n.key==="%Between"?`(${n.value})`:Qg(t,n.value)}function Qg(e,t){return e?(e=rd(e),_a(e)||e==="Boolean"?t:Og(e)?`[${t}]`:`'${t}'`):t}function yn(e,t){return{name:e,value:t}}const Jg=[yn("=","%"),yn("!=","%!"),yn(">=",">%"),yn(">","%>"),yn("<=","%<"),yn("<","<%"),yn("In","%In"),yn("Between","%Between"),{name:"Starts With",value:"%StartsWith",types:"string"},{name:"Contains",value:"%Contains",types:"string"},{name:"Ends With",value:"%EndsWith",types:"string"},{name:"Exists",value:"%IsNotNull",valueType:"none"},{name:"Not Exists",value:"%IsNull",valueType:"none"}];function Ft(){const e=x(()=>{var s;return((s=we.metadata.value)==null?void 0:s.app)||null}),t=x(()=>{var s;return((s=we.metadata.value)==null?void 0:s.api)||null}),n=x(()=>{var s,o,r;return((r=(o=(s=we.metadata.value)==null?void 0:s.plugins)==null?void 0:o.autoQuery)==null?void 0:r.viewerConventions)||Jg});return bi(),{loadMetadata:Ng,getMetadata:Fg,setMetadata:io,clearMetadata:Hg,metadataApp:e,metadataApi:t,filterDefinitions:n,typeOf:qt,typeOfRef:wi,typeEquals:ud,apiOf:Ar,findApis:$g,typeName:zg,typeName2:od,property:Ug,enumOptions:cd,propertyOptions:pd,createFormLayout:qg,typeProperties:zt,supportsProp:ld,Crud:yt,Apis:Jn,getPrimaryKey:Ms,getPrimaryKeyByProps:hd,getId:Gg,createDto:ao,makeDto:Dg,toFormValues:Qs,formValues:Bg,isComplexProp:id,asKvps:ki,expandEnumFlags:xi,enumFlagsConverter:fd}}const gd=class Qt{static async getOrFetchValue(t,n,s,o,r,a,i){return Qt.getValue(s,i,r)??(await Qt.fetchLookupIds(t,n,s,o,r,a,[i]),Qt.getValue(s,i,r))}static getValue(t,n,s){const o=Qt.Lookup[t];if(o){const r=o[n];if(r)return s=s.toLowerCase(),r[s]}}static setValue(t,n,s,o){const r=Qt.Lookup[t]??(Qt.Lookup[t]={}),a=r[n]??(r[n]={});s=s.toLowerCase(),a[s]=o}static setRefValue(t,n){const s=Ne(n,t.refId);if(s==null||t.refLabel==null)return null;const o=Ne(n,t.refLabel);return Qt.setValue(t.model,s,t.refLabel,o),o}static async fetchLookupIds(t,n,s,o,r,a,i){const l=n.operations.find(c=>{var u;return yt.isAnyQuery(c)&&((u=c.dataModel)==null?void 0:u.name)==s});if(l){const c=Qt.Lookup[s]??(Qt.Lookup[s]={}),u=[];Object.keys(c).forEach(k=>{const S=c[k];Ne(S,r)&&u.push(k)});const p=i.filter(k=>!u.includes(k));if(p.length==0)return;const g=a?null:`${o},${r}`,f={[o+"In"]:p.join(",")};g&&(f.fields=g);const v=ao(l,f),m=await t.api(v,{jsconfig:"edv,eccn"});if(m.succeeded)(Ne(m.response,"results")||[]).forEach(k=>{if(!Ne(k,o)){console.error(`result[${o}] == null`,k);return}const S=`${Ne(k,o)}`,C=Ne(k,r);r=r.toLowerCase();const A=c[S]??(c[S]={});A[r]=`${C}`});else{console.error(`Failed to call ${l.request.name}`);return}}}};qe(gd,"Lookup",{});let jo=gd,Hl=()=>new Date().getTime(),Kg=["/","T",":","-"],Pn={date:{method:"Intl.DateTimeFormat",options:"{dateStyle:'medium'}"},maxNestedFields:2,maxNestedFieldLength:30},Zg=new Intl.RelativeTimeFormat(Pn.locale,{}),Nl=24*60*60*1e3*365,Kr={year:Nl,month:Nl/12,day:24*60*60*1e3,hour:60*60*1e3,minute:60*1e3,second:1e3},us={currency:Xg,bytes:e0,link:t0,linkTel:n0,linkMailTo:s0,icon:o0,iconRounded:r0,attachment:a0,hidden:i0,time:l0,relativeTime:bd,relativeTimeFromMs:yd,enumFlags:d0,formatDate:wo,formatNumber:vd};"iconOnError"in globalThis||(globalThis.iconOnError=mi);class St{}qe(St,"currency",{method:"currency"}),qe(St,"bytes",{method:"bytes"}),qe(St,"link",{method:"link"}),qe(St,"linkTel",{method:"linkTel"}),qe(St,"linkMailTo",{method:"linkMailTo"}),qe(St,"icon",{method:"icon"}),qe(St,"iconRounded",{method:"iconRounded"}),qe(St,"attachment",{method:"attachment"}),qe(St,"time",{method:"time"}),qe(St,"relativeTime",{method:"relativeTime"}),qe(St,"relativeTimeFromMs",{method:"relativeTimeFromMs"}),qe(St,"date",{method:"formatDate"}),qe(St,"number",{method:"formatNumber"}),qe(St,"hidden",{method:"hidden"}),qe(St,"enumFlags",{method:"enumFlags"});function Yg(){return us}function bo(e,t){return t?nn("span",e,t):e}function Xg(e,t){const n=rn(t,["currency"]);return bo(new Intl.NumberFormat(void 0,{style:"currency",currency:(t==null?void 0:t.currency)||"USD"}).format(e),n)}function e0(e,t){return bo(hi(e),t)}function t0(e,t){return nn("a",e,xr({...t,href:e}))}function n0(e,t){return nn("a",e,xr({...t,href:`tel:${e}`}))}function s0(e,t){t||(t={});let{subject:n,body:s}=t,o=rn(t,["subject","body"]),r={};return n&&(r.subject=n),s&&(r.body=s),nn("a",e,xr({...o,href:`mailto:${Xt(e,r)}`}))}function o0(e,t){return nn("img",void 0,Object.assign({class:"w-6 h-6",title:e,src:vs(e),onerror:"iconOnError(this)"},t))}function r0(e,t){return nn("img",void 0,Object.assign({class:"w-8 h-8 rounded-full",title:e,src:vs(e),onerror:"iconOnError(this)"},t))}function a0(e,t){let n=di(e),s=yo(n)==null||fi(e)?vs(e):gi(e);const o=vs(s);let r=t&&(t["icon-class"]||t.iconClass),a=nn("img",void 0,Object.assign({class:"w-6 h-6",src:o,onerror:"iconOnError(this,'att')"},r?{class:r}:null)),i=`<span class="pl-1">${n}</span>`;return nn("a",a+i,Object.assign({class:"flex",href:vs(e),title:e},t?rn(t,["icon-class","iconClass"]):null))}function i0(e){return""}function l0(e,t){let n=typeof e=="string"?new Date(ai(e)*1e3):vo(e)?on(e):null;return bo(n?Tm(n):e,t)}function wo(e,t){if(e==null)return"";let n=typeof e=="number"?new Date(e):typeof e=="string"?on(e):e;if(!vo(n))return console.warn(`${n} is not a Date value`),e==null?"":`${e}`;let s=Pn.date?Ci(Pn.date):null;return bo(typeof s=="function"?s(n):Sm(n),t)}function vd(e,t){if(typeof e!="number")return e;let n=Pn.number?Ci(Pn.number):null,s=typeof n=="function"?n(e):`${e}`;return s===""&&(console.warn(`formatNumber(${e}) => ${s}`,n),s=`${e}`),bo(s,t)}function u0(e,t,n){let s=Om(e),o=t?Ci(t):null;if(typeof o=="function"){let a=n;if(t!=null&&t.options)try{a=Cr(t.options,n)}catch(i){console.error(`Could not evaluate '${t.options}'`,i,", with scope:",n)}return o(e,a)}return(s!=null?vo(s)?wo(s,n):typeof s=="number"?vd(s,n):s:null)??""}function ar(e,t,n){return Qn(e)?u0(e,t,n):g0(e,t,n)}function c0(e){if(e==null)return NaN;if(typeof e=="number")return e;if(vo(e))return e.getTime()-Hl();if(typeof e=="string"){let t=Number(e);if(!isNaN(t))return t;if(e[0]==="P"||e.startsWith("-P"))return ai(e)*1e3*-1;if($c(e,Kg)>=0)return on(e).getTime()-Hl()}return NaN}function yd(e,t){for(let n in Kr)if(Math.abs(e)>Kr[n]||n==="second")return(t||Zg).format(Math.round(e/Kr[n]),n)}function bd(e,t){let n=c0(e);return isNaN(n)?"":yd(n,t)}function d0(e,t){return xi(e,t).join(", ")}function Ci(e){if(!e)return null;let{method:t,options:n}=e,s=`${t}(${n})`,o=us[s]||us[t];if(typeof o=="function")return o;let r=e.locale||Pn.locale;if(t.startsWith("Intl.")){let a=r?`'${r}'`:"undefined",i=`return new ${t}(${a},${n||"undefined"})`;try{let l=Function(i)();return o=t==="Intl.DateTimeFormat"?c=>l.format(on(c)):t==="Intl.NumberFormat"?c=>l.format(Number(c)):t==="Intl.RelativeTimeFormat"?c=>bd(c,l):c=>l.format(c),us[s]=o}catch(l){console.error(`Invalid format: ${i}`,l)}}else{let a=globalThis[t];if(typeof a=="function"){let i=n!=null?Function("return "+n)():void 0;return o=l=>a(l,i,r),us[s]=o}console.error(`No '${t}' function exists`,Object.keys(us))}return null}function p0(e,t){return e?e.length>t?e.substring(0,t)+"...":e:""}function wd(e){return e.substring(0,6)==="/Date("?wo(on(e)):e}function f0(e){return m0(ir(e)).replace(/"/g,"")}function h0(e){if(e==null||e==="")return"";if(typeof e=="string")try{return JSON.parse(e)}catch{console.warn("couldn't parse as JSON",e)}return e}function m0(e,t=4){return e=h0(e),typeof e!="object"?typeof e=="string"?e:`${e}`:JSON.stringify(e,void 0,t)}function ir(e){if(e==null)return null;if(typeof e=="string")return wd(e);if(Qn(e))return e;if(e instanceof Date)return wo(e);if(Array.isArray(e))return e.map(ir);if(typeof e=="object"){let t={};return Object.keys(e).forEach(n=>{n!="__type"&&(t[n]=ir(e[n]))}),t}return e}function g0(e,t,n){let s=e;if(Array.isArray(e)){if(Qn(e[0]))return s.join(",");e[0]!=null&&(s=e[0])}if(s==null)return"";if(s instanceof Date)return wo(s,n);let o=Object.keys(s),r=[];for(let a=0;a<Math.min(Pn.maxNestedFields,o.length);a++){let i=o[a],l=`${ir(s[i])}`;r.push(`<b class="font-medium">${i}</b>: ${ka(p0(wd(l),Pn.maxNestedFieldLength))}`)}return o.length>2&&r.push("..."),nn("span","{ "+r.join(", ")+" }",Object.assign({title:ka(f0(e))},n))}const v0=["title"],y0=Te({__name:"RouterLink",props:{to:{}},setup(e){const t=e,{config:n}=Yn(),s=()=>n.value.navigate(t.to??"/");return(o,r)=>(h(),y("a",Qe({onClick:gt(s,["prevent"]),title:o.to,href:"javascript:void(0)"},o.$attrs),[he(o.$slots,"default")],16,v0))}});class b0{constructor(){qe(this,"callbacks",{})}register(t,n){this.callbacks[t]=n}has(t){return!!this.callbacks[t]}invoke(t,n){const s=this.callbacks[t];typeof s=="function"&&s(t,n)}}const wn=class Wo{static component(t){const n=Wo.components[t];if(n)return n;const s=jl(t),o=Object.keys(Wo.components).find(r=>jl(r)===s);return o&&Wo.components[o]||null}};qe(wn,"config",{redirectSignIn:"/signin",redirectSignOut:"/auth/logout",navigate:e=>location.href=e,assetsPathResolver:e=>e,fallbackPathResolver:e=>e,storage:new Qc,tableIcon:{svg:"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M5 12v6s0 3 7 3s7-3 7-3v-6'/><path d='M5 6v6s0 3 7 3s7-3 7-3V6'/><path d='M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z'/></g></svg>"},scopeWhitelist:{enumFlagsConverter:fd,...Yg()}}),qe(wn,"autoQueryGridDefaults",{deny:[],hide:[],toolbarButtonClass:void 0,tableStyle:"stripedRows",take:25,maxFieldLength:150}),qe(wn,"events",Bm()),qe(wn,"user",K(null)),qe(wn,"metadata",K(null)),qe(wn,"components",{RouterLink:y0}),qe(wn,"interceptors",new b0);let we=wn;function w0(e){we.config=Object.assign(we.config,e)}function k0(e){we.autoQueryGridDefaults=Object.assign(we.autoQueryGridDefaults,e)}function Si(e){return e&&we.config.assetsPathResolver?we.config.assetsPathResolver(e):e}function x0(e){return e&&we.config.fallbackPathResolver?we.config.fallbackPathResolver(e):e}function C0(e,t){we.interceptors.register(e,t)}function Yn(){const e=x(()=>we.config),t=x(()=>we.autoQueryGridDefaults),n=we.events;return{config:e,setConfig:w0,events:n,autoQueryGridDefaults:t,setAutoQueryGridDefaults:k0,assetsPathResolver:Si,fallbackPathResolver:x0,registerInterceptor:C0}}const kd=Te({inheritAttrs:!1,props:{image:Object,svg:String,src:String,alt:String,type:String},setup(e,{attrs:t}){return()=>{let n=e.image;if(e.type){const{typeOf:o}=Ft(),r=o(e.type);r||console.warn(`Type ${e.type} does not exist`),r!=null&&r.icon?n=r==null?void 0:r.icon:console.warn(`Type ${e.type} does not have a [Svg] icon`)}let s=e.svg||(n==null?void 0:n.svg)||"";if(s.startsWith("<svg ")){let o=go(s,">").indexOf("class="),r=`${(n==null?void 0:n.cls)||""} ${t.class||""}`;if(o==-1)s=`<svg class="${r}" ${s.substring(4)}`;else{const a=o+6+1;s=`${s.substring(0,a)+r} ${s.substring(a)}`}return Vt("span",{innerHTML:s})}else return Vt("img",{class:[n==null?void 0:n.cls,t.class],src:Si(e.src||(n==null?void 0:n.uri)),onError:o=>mi(o.target)})}}}),S0={class:"text-2xl font-semibold text-gray-900 dark:text-gray-300"},T0={class:"flex"},A0=d("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),M0=d("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),_0=[A0,M0],P0=Te({__name:"Loading",props:{imageClass:{default:"w-6 h-6"}},setup(e){return(t,n)=>(h(),y("div",S0,[d("div",T0,[(h(),y("svg",{class:_(["self-center inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",t.imageClass]),role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_0,2)),d("span",null,[he(t.$slots,"default")])])]))}}),E0=["href","onClick"],I0=["type"],$l="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 disabled:text-gray-400 bg-white dark:bg-black hover:bg-gray-50 hover:dark:bg-gray-900 disabled:hover:bg-white dark:disabled:hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black",L0=Te({__name:"OutlineButton",props:{type:{default:"submit"},href:{}},setup(e){return(t,n)=>{const s=ye("router-link");return t.href?(h(),ke(s,{key:0,to:t.href},{default:$e(({navigate:o})=>[d("button",{class:_($l),href:t.href,onClick:o},[he(t.$slots,"default")],8,E0)]),_:3},8,["to"])):(h(),y("button",Qe({key:1,type:t.type,class:$l},t.$attrs),[he(t.$slots,"default")],16,I0))}}}),R0=["href","onClick"],z0=["type"],j0=Te({__name:"PrimaryButton",props:{type:{default:"submit"},href:{},color:{default:"indigo"}},setup(e){const t=e,n={blue:"focus:ring-indigo-500 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:hover:bg-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",purple:"focus:ring-indigo-500 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:hover:bg-purple-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",red:"focus:ring-red-500 bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:hover:bg-red-400 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500",green:"focus:ring-green-500 bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:hover:bg-green-400 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500",sky:"focus:ring-sky-500 bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 disabled:hover:bg-sky-400 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-500",cyan:"focus:ring-cyan-500 bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 disabled:hover:bg-cyan-400 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-500",indigo:"focus:ring-indigo-500 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:hover:bg-indigo-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},s=x(()=>"inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black text-white "+(n[t.color]||n.indigo));return(o,r)=>{const a=ye("router-link");return o.href?(h(),ke(a,{key:0,to:o.href},{default:$e(({navigate:i})=>[d("button",{class:_(s.value),href:o.href,onClick:i},[he(o.$slots,"default")],10,R0)]),_:3},8,["to"])):(h(),y("button",Qe({key:1,type:o.type,class:s.value},o.$attrs),[he(o.$slots,"default")],16,z0))}}}),V0=["type","href","onClick"],O0=["type"],Ul="inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-black",D0=Te({__name:"SecondaryButton",props:{type:{},href:{}},setup(e){return(t,n)=>{const s=ye("router-link");return t.href?(h(),ke(s,{key:0,to:t.href},{default:$e(({navigate:o})=>[d("button",{type:t.type??"button",class:_(Ul),href:t.href,onClick:o},[he(t.$slots,"default")],8,V0)]),_:3},8,["to"])):(h(),y("button",Qe({key:1,type:t.type??"button",class:Ul},t.$attrs),[he(t.$slots,"default")],16,O0))}}});function _t(e,t){return Array.isArray(e)?e.indexOf(t)>=0:e==t||e.includes(t)}const Pa={blue:"text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200",purple:"text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200",red:"text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-200",green:"text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200",sky:"text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200",cyan:"text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200",indigo:"text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"},en={base:"block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 disabled:bg-slate-50 dark:disabled:bg-slate-900 disabled:text-slate-500 disabled:border-slate-200 dark:disabled:border-slate-700 disabled:shadow-none",invalid:"pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",valid:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600"},Vo={panelClass:"shadow sm:rounded-md",formClass:"space-y-6 bg-white dark:bg-black py-6 px-4 sm:p-6",headingClass:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",subHeadingClass:"mt-1 text-sm text-gray-500 dark:text-gray-400"},Bs={panelClass:"pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",formClass:"flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700 shadow-xl bg-white dark:bg-black",headingClass:"text-lg font-medium text-gray-900 dark:text-gray-100",subHeadingClass:"mt-1 text-sm text-gray-500 dark:text-gray-400"},Wl={modalClass:"relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8",sizeClass:"sm:max-w-prose lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl sm:w-full"},ut={panelClass(e="slideOver"){return e=="card"?Vo.panelClass:Bs.panelClass},formClass(e="slideOver"){return e=="card"?Vo.formClass:Bs.formClass},headingClass(e="slideOver"){return e=="card"?Vo.headingClass:Bs.headingClass},subHeadingClass(e="slideOver"){return e=="card"?Vo.subHeadingClass:Bs.subHeadingClass},buttonsClass:"px-4 py-3 bg-gray-50 dark:bg-gray-900 sm:px-6 flex flex-wrap justify-between",legendClass:"text-base font-medium text-gray-900 dark:text-gray-100 text-center mb-4"},je={getGridClass(e="stripedRows"){return je.gridClass},getGrid2Class(e="stripedRows"){return _t(e,"fullWidth")?"overflow-x-auto":je.grid2Class},getGrid3Class(e="stripedRows"){return _t(e,"fullWidth")?"inline-block min-w-full py-2 align-middle":je.grid3Class},getGrid4Class(e="stripedRows"){return _t(e,"whiteBackground")?"":_t(e,"fullWidth")?"overflow-hidden shadow-sm ring-1 ring-black/5":je.grid4Class},getTableClass(e="stripedRows"){return _t(e,"fullWidth")||_t(e,"verticalLines")?"min-w-full divide-y divide-gray-300":je.tableClass},getTheadClass(e="stripedRows"){return _t(e,"whiteBackground")?"":je.theadClass},getTheadRowClass(e="stripedRows"){return je.theadRowClass+(_t(e,"verticalLines")?" divide-x divide-gray-200 dark:divide-gray-700":"")},getTheadCellClass(e="stripedRows"){return je.theadCellClass+(_t(e,"uppercaseHeadings")?" uppercase":"")},getTbodyClass(e="stripedRows"){return(_t(e,"whiteBackground")||_t(e,"verticalLines")?"divide-y divide-gray-200 dark:divide-gray-800":je.tableClass)+(_t(e,"verticalLines")?" bg-white":"")},getTableRowClass(e="stripedRows",t,n,s){return(s?"cursor-pointer ":"")+(n?"bg-indigo-100 dark:bg-blue-800":(s?"hover:bg-yellow-50 dark:hover:bg-blue-900 ":"")+(_t(e,"stripedRows")?t%2==0?"bg-white dark:bg-black":"bg-gray-50 dark:bg-gray-800":"bg-white dark:bg-black"))+(_t(e,"verticalLines")?" divide-x divide-gray-200 dark:divide-gray-700":"")},gridClass:"flex flex-col",grid2Class:"",grid3Class:"inline-block min-w-full py-2 align-middle",grid4Class:"overflow-hidden shadow ring-1 ring-black/5 md:rounded-lg",tableClass:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",theadClass:"bg-gray-50 dark:bg-gray-900",tableCellClass:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",theadRowClass:"select-none",theadCellClass:"px-6 py-4 text-left text-sm font-medium tracking-wider whitespace-nowrap",toolbarButtonClass:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"},B0=Te({__name:"TextLink",props:{color:{default:"blue"}},setup(e){const t=df(),n=e,s=x(()=>(Pa[n.color]||Pa.blue)+(t.href?"":" cursor-pointer"));return(o,r)=>(h(),y("a",{class:_(s.value)},[he(o.$slots,"default")],2))}}),F0={class:"flex","aria-label":"Breadcrumb"},H0={role:"list",class:"flex items-center space-x-4"},N0=["href","title"],$0=d("svg",{class:"h-6 w-6 flex-shrink-0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z","clip-rule":"evenodd"})],-1),U0={class:"sr-only"},W0=Te({__name:"Breadcrumbs",props:{homeHref:{default:"/"},homeLabel:{default:"Home"}},setup(e){return(t,n)=>(h(),y("nav",F0,[d("ol",H0,[d("li",null,[d("div",null,[d("a",{href:t.homeHref,class:"text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",title:t.homeLabel},[$0,d("span",U0,X(t.homeLabel),1)],8,N0)])]),he(t.$slots,"default")])]))}}),q0={class:"flex items-center"},G0=d("svg",{class:"h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"})],-1),Q0=["href","title"],J0=["title"],K0=Te({__name:"Breadcrumb",props:{href:{},title:{}},setup(e){return(t,n)=>(h(),y("li",null,[d("div",q0,[G0,t.href?(h(),y("a",{key:0,href:t.href,class:"ml-4 text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",title:t.title},[he(t.$slots,"default")],8,Q0)):(h(),y("span",{key:1,class:"ml-4 text-lg font-medium text-gray-700 dark:text-gray-300",title:t.title},[he(t.$slots,"default")],8,J0))])]))}}),Z0={key:0,class:"text-base font-semibold text-gray-500 dark:text-gray-400"},Y0={role:"list",class:"mt-4 divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800"},X0=Te({__name:"NavList",props:{title:{}},setup(e){return(t,n)=>(h(),y("div",null,[t.title?(h(),y("h2",Z0,X(t.title),1)):N("",!0),d("ul",Y0,[he(t.$slots,"default")])]))}}),ev={class:"relative flex items-start space-x-4 py-6"},tv={class:"flex-shrink-0"},nv={class:"flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900"},sv={class:"min-w-0 flex-1"},ov={class:"text-base font-medium text-gray-900 dark:text-gray-100"},rv={class:"rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2"},av=["href"],iv=d("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),lv={class:"text-base text-gray-500"},uv=d("div",{class:"flex-shrink-0 self-center"},[d("svg",{class:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"})])],-1),cv=Te({__name:"NavListItem",props:{title:{},href:{},icon:{},iconSvg:{},iconSrc:{},iconAlt:{}},setup(e){return(t,n)=>{const s=ye("Icon");return h(),y("li",ev,[d("div",tv,[d("span",nv,[Ae(s,{class:"w-6 h-6 text-indigo-700 dark:text-indigo-300",image:t.icon,src:t.iconSrc,svg:t.iconSvg,alt:t.iconAlt},null,8,["image","src","svg","alt"])])]),d("div",sv,[d("h3",ov,[d("span",rv,[d("a",{href:t.href,class:"focus:outline-none"},[iv,Fe(" "+X(t.title),1)],8,av)])]),d("p",lv,[he(t.$slots,"default")])]),uv])}}});function xd(e){return e&&e.SessionId?qn(e):e}function dv(e){we.user.value=xd(e),we.events.publish("signIn",e)}function pv(){we.user.value=null,we.events.publish("signOut",null)}const Ti=e=>(e==null?void 0:e.roles)||[],Ai=e=>(e==null?void 0:e.permissions)||[];function Cd(e){return Ti(we.user.value).indexOf(e)>=0}function fv(e){return Ai(we.user.value).indexOf(e)>=0}function Mi(){return Cd("Admin")}function Js(e){if(!e)return!1;if(!e.requiresAuth)return!0;const t=we.user.value;if(!t)return!1;if(Mi())return!0;let[n,s]=[Ti(t),Ai(t)],[o,r,a,i]=[e.requiredRoles||[],e.requiredPermissions||[],e.requiresAnyRole||[],e.requiresAnyPermission||[]];return!(!o.every(l=>n.indexOf(l)>=0)||a.length>0&&!a.some(l=>n.indexOf(l)>=0)||!r.every(l=>s.indexOf(l)>=0)||i.length>0&&!i.every(l=>s.indexOf(l)>=0))}function hv(e){if(!e||!e.requiresAuth)return null;const t=we.user.value;if(!t)return`<b>${e.request.name}</b> requires Authentication`;if(Mi())return null;let[n,s]=[Ti(t),Ai(t)],[o,r,a,i]=[e.requiredRoles||[],e.requiredPermissions||[],e.requiresAnyRole||[],e.requiresAnyPermission||[]],l=o.filter(u=>n.indexOf(u)<0);if(l.length>0)return`Requires ${l.map(u=>"<b>"+u+"</b>").join(", ")} Role`+(l.length>1?"s":"");let c=r.filter(u=>s.indexOf(u)<0);return c.length>0?`Requires ${c.map(u=>"<b>"+u+"</b>").join(", ")} Permission`+(c.length>1?"s":""):a.length>0&&!a.some(u=>n.indexOf(u)>=0)?`Requires any ${a.filter(u=>n.indexOf(u)<0).map(u=>"<b>"+u+"</b>").join(", ")} Role`+(l.length>1?"s":""):i.length>0&&!i.every(u=>s.indexOf(u)>=0)?`Requires any ${i.filter(u=>s.indexOf(u)<0).map(u=>"<b>"+u+"</b>").join(", ")} Permission`+(c.length>1?"s":""):null}function _i(){const e=x(()=>we.user.value||null),t=x(()=>we.user.value!=null);return{signIn:dv,signOut:pv,user:e,toAuth:xd,isAuthenticated:t,hasRole:Cd,hasPermission:fv,isAdmin:Mi,canAccess:Js,invalidAccessMessage:hv}}const mv={key:0},gv={class:"md:p-4"},Sd=Te({__name:"EnsureAccess",props:{invalidAccess:{},alertClass:{}},emits:["done"],setup(e){const{isAuthenticated:t}=_i(),{config:n}=Yn(),s=()=>{let r=location.href.substring(location.origin.length)||"/";const a=Xt(n.value.redirectSignIn,{redirect:r});n.value.navigate(a)},o=()=>{let r=location.href.substring(location.origin.length)||"/";const a=Xt(n.value.redirectSignOut,{ReturnUrl:r});n.value.navigate(a)};return(r,a)=>{const i=ye("Alert"),l=ye("SecondaryButton");return r.invalidAccess?(h(),y("div",mv,[Ae(i,{class:_(r.alertClass),innerHTML:r.invalidAccess},null,8,["class","innerHTML"]),d("div",gv,[ge(t)?(h(),ke(l,{key:1,onClick:o},{default:$e(()=>[Fe("Sign Out")]),_:1})):(h(),ke(l,{key:0,onClick:s},{default:$e(()=>[Fe("Sign In")]),_:1}))])])):N("",!0)}}}),vv={class:"absolute top-0 right-0 bg-white dark:bg-black border dark:border-gray-800 rounded normal-case text-sm shadow w-80"},yv={class:"p-4"},bv=d("h3",{class:"text-base font-medium mb-3 dark:text-gray-100"},"Sort",-1),wv={class:"flex w-full justify-center"},kv=d("svg",{class:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},[d("g",{fill:"currentColor"},[d("path",{"fill-rule":"evenodd",d:"M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"}),d("path",{d:"M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999l.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"})])],-1),xv=d("span",null,"ASC",-1),Cv=[kv,xv],Sv=br('<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"></path><path fill-rule="evenodd" d="M10.082 12.629L9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"></path><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path></g></svg><span>DESC</span>',2),Tv=[Sv],Av=d("h3",{class:"text-base font-medium mt-4 mb-2"}," Filter ",-1),Mv={key:0},_v=["id","value"],Pv=["for"],Ev={key:1},Iv={class:"mb-2"},Lv={class:"inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700"},Rv=["onClick"],zv=d("svg",{class:"h-2 w-2",stroke:"currentColor",fill:"none",viewBox:"0 0 8 8"},[d("path",{"stroke-linecap":"round","stroke-width":"1.5",d:"M1 1l6 6m0-6L1 7"})],-1),jv=[zv],Vv={class:"flex"},Ov=d("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1),Dv=[Ov],Bv={class:"bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},Pi=Te({__name:"FilterColumn",props:{definitions:{},column:{},topLeft:{}},emits:["done","save"],setup(e,{emit:t}){const n=e,s=t,o=K(),r=K(""),a=K(""),i=K([]),l=x(()=>n.column.meta.isEnum==!0),c=x(()=>qt(n.column.meta.type==="Nullable`1"?n.column.meta.genericArgs[0]:n.column.meta.type)),u=x(()=>n.column.meta.isEnum==!0?ki(cd(c.value.name)):[]),p=x(()=>{var I;return((I=v(n.column.type))==null?void 0:I.map(U=>({key:U.value,value:U.name})))||[]}),g=K({filters:[]}),f=x(()=>g.value.filters);to(()=>g.value=Object.assign({},n.column.settings,{filters:Array.from(n.column.settings.filters)})),to(()=>{var I,U,G,re,Z;let pe=((G=(U=(I=n.column.settings.filters)==null?void 0:I[0])==null?void 0:U.value)==null?void 0:G.split(","))||[];if(pe.length>0&&(re=c.value)!=null&&re.isEnumInt){const ve=parseInt(pe[0]);pe=((Z=c.value.enumValues)==null?void 0:Z.filter(ue=>(ve&parseInt(ue))>0))||[]}i.value=pe});function v(I){let U=n.definitions;return ad(I)||(U=U.filter(G=>G.types!=="string")),U}function m(I,U){return v(I).find(G=>G.value===U)}function k(){var I;if(!r.value)return;let U=(I=m(n.column.type,r.value))==null?void 0:I.name;U&&(g.value.filters.push({key:r.value,name:U,value:a.value}),r.value=a.value="")}function S(I){g.value.filters.splice(I,1)}function C(I){return md(m(n.column.type,I.key),n.column.type,I)}function A(){s("done")}function E(){var I;r.value="%",(I=o.value)==null||I.focus()}function M(){var I;if(a.value&&k(),l.value){let U=Object.values(i.value).filter(G=>G);g.value.filters=U.length>0?(I=c.value)!=null&&I.isEnumInt?[{key:"%HasAny",name:"HasAny",value:U.map(G=>parseInt(G)).reduce((G,re)=>G+re,0).toString()}]:[{key:"%In",name:"In",value:U.join(",")}]:[]}s("save",g.value),s("done")}function q(I){g.value.sort=I===g.value.sort?void 0:I,Ut(M)}return(I,U)=>{var G;const re=ye("SelectInput"),Z=ye("TextInput"),pe=ye("PrimaryButton"),ve=ye("SecondaryButton");return h(),y("div",{class:"fixed z-20 inset-0 overflow-y-auto",onClick:A,onVnodeMounted:E},[d("div",{class:"absolute",style:Kn(`top:${I.topLeft.y}px;left:${I.topLeft.x}px`),onClick:U[5]||(U[5]=gt(()=>{},["stop"]))},[d("div",vv,[d("div",yv,[bv,d("div",wv,[d("button",{type:"button",title:"Sort Ascending",onClick:U[0]||(U[0]=ue=>q("ASC")),class:_(`${g.value.sort==="ASC"?"bg-indigo-100 border-indigo-500":"bg-white hover:bg-gray-50 border-gray-300"} mr-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)},Cv,2),d("button",{type:"button",title:"Sort Descending",onClick:U[1]||(U[1]=ue=>q("DESC")),class:_(`${g.value.sort==="DESC"?"bg-indigo-100 border-indigo-500":"bg-white hover:bg-gray-50 border-gray-300"} ml-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)},Tv,2)]),Av,l.value?(h(),y("div",Mv,[(h(!0),y(ze,null,Xe(u.value,ue=>(h(),y("div",{key:ue.key,class:"flex items-center"},[Wn(d("input",{type:"checkbox",id:ue.key,value:ue.key,"onUpdate:modelValue":U[2]||(U[2]=J=>i.value=J),class:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"},null,8,_v),[[kr,i.value]]),d("label",{for:ue.key,class:"ml-3"},X(ue.value),9,Pv)]))),128))])):(h(),y("div",Ev,[(h(!0),y(ze,null,Xe(f.value,(ue,J)=>(h(),y("div",Iv,[d("span",Lv,[Fe(X(I.column.name)+" "+X(ue.name)+" "+X(C(ue))+" ",1),d("button",{type:"button",onClick:ne=>S(J),class:"flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"},jv,8,Rv)])]))),256)),d("div",Vv,[Ae(re,{id:"filterRule",class:"w-32 mr-1",modelValue:r.value,"onUpdate:modelValue":U[3]||(U[3]=ue=>r.value=ue),entries:p.value,label:"",placeholder:""},null,8,["modelValue","entries"]),((G=m(I.column.type,r.value))==null?void 0:G.valueType)!=="none"?(h(),ke(Z,{key:0,ref_key:"txtFilter",ref:o,id:"filterValue",class:"w-32 mr-1",type:"text",modelValue:a.value,"onUpdate:modelValue":U[4]||(U[4]=ue=>a.value=ue),onKeyup:Lc(k,["enter"]),label:"",placeholder:""},null,8,["modelValue"])):N("",!0),d("div",{class:"pt-1"},[d("button",{type:"button",onClick:k,class:"inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},Dv)])])]))]),d("div",Bv,[Ae(pe,{onClick:M,color:"red",class:"ml-2"},{default:$e(()=>[Fe(" Save ")]),_:1}),Ae(ve,{onClick:A},{default:$e(()=>[Fe(" Cancel ")]),_:1})])])],4)],512)}}}),Fv={class:"px-4 sm:px-6 lg:px-8 text-sm"},Hv={class:"flex flex-wrap"},Nv={class:"group pr-4 sm:pr-6 lg:pr-8"},$v={class:"flex justify-between w-full font-medium"},Uv={class:"w-6 flex justify-end"},Wv={class:"hidden group-hover:inline"},qv=["onClick","title"],Gv=d("svg",{class:"h-2 w-2",stroke:"currentColor",fill:"none",viewBox:"0 0 8 8"},[d("path",{"stroke-linecap":"round","stroke-width":"1.5",d:"M1 1l6 6m0-6L1 7"})],-1),Qv=[Gv],Jv={key:0,class:"pt-2"},Kv={class:"ml-2"},Zv={key:1},Yv={class:"pt-2"},Xv={class:"inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700"},ey=["onClick"],ty=d("svg",{class:"h-2 w-2",stroke:"currentColor",fill:"none",viewBox:"0 0 8 8"},[d("path",{"stroke-linecap":"round","stroke-width":"1.5",d:"M1 1l6 6m0-6L1 7"})],-1),ny=[ty],sy=d("span",null,"Clear All",-1),oy=[sy],Ei=Te({__name:"FilterViews",props:{definitions:{},columns:{}},emits:["done","change"],setup(e,{emit:t}){const n=e,s=t,o=x(()=>n.columns.filter(g=>g.settings.filters.length>0));function r(g){var f,v;return(v=(f=g==null?void 0:g[0])==null?void 0:f.value)==null?void 0:v.split(",")}function a(g){let f=n.definitions;return ad(g)||(f=f.filter(v=>v.types!=="string")),f}function i(g,f){return a(g).find(v=>v.value===f)}function l(g,f){return md(i(g.type,f.value),g.type,f)}function c(g){g.settings.filters=[],s("change",g)}function u(g,f){g.settings.filters.splice(f,1),s("change",g)}function p(){n.columns.forEach(g=>{g.settings.filters=[],s("change",g)}),s("done")}return(g,f)=>(h(),y("div",Fv,[d("div",Hv,[(h(!0),y(ze,null,Xe(o.value,v=>(h(),y("fieldset",Nv,[d("legend",$v,[d("span",null,X(ge(rt)(v.name)),1),d("span",Uv,[d("span",Wv,[d("button",{onClick:m=>c(v),title:`Clear all ${ge(rt)(v.name)} filters`,class:"flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"},Qv,8,qv)])])]),v.meta.isEnum?(h(),y("div",Jv,[(h(!0),y(ze,null,Xe(r(v.settings.filters),m=>(h(),y("div",{key:m,class:"flex items-center"},[d("label",Kv,X(m),1)]))),128))])):(h(),y("div",Zv,[(h(!0),y(ze,null,Xe(v.settings.filters,(m,k)=>(h(),y("div",Yv,[d("span",Xv,[Fe(X(v.name)+" "+X(m.name)+" "+X(l(v,m))+" ",1),d("button",{type:"button",onClick:S=>u(v,k),class:"flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"},ny,8,ey)])]))),256))]))]))),256))]),d("div",{class:"flex justify-center pt-4"},[d("button",{type:"button",onClick:p,class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},oy)])]))}}),ry={class:"bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},ay={class:""},iy={class:"mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left"},ly=d("h3",{class:"text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"},"Query Preferences",-1),uy={class:"mt-4"},cy=["for"],dy=["id"],py=["value","selected"],fy={class:"mt-4 flex items-center py-4 border-b border-gray-200 dark:border-gray-800"},hy=["id","checked"],my=["for"],gy={class:"mt-4"},vy={class:"pb-2 px-4"},yy={class:""},by=["id","value"],wy=["for"],ky={class:"bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},Ii=Te({__name:"QueryPrefs",props:{id:{default:"QueryPrefs"},columns:{},prefs:{},maxLimit:{}},emits:["done","save"],setup(e,{emit:t}){const{autoQueryGridDefaults:n}=Yn(),s=e,o=t,r=K({});to(()=>r.value=Object.assign({take:n.value.take,selectedColumns:[]},s.prefs));const a=[10,25,50,100,250,500,1e3];function i(){o("done")}function l(){o("save",r.value)}return(c,u)=>{const p=ye("PrimaryButton"),g=ye("SecondaryButton"),f=ye("ModalDialog");return h(),ke(f,{id:c.id,onDone:i,"size-class":"w-full sm:max-w-prose"},{default:$e(()=>[d("div",ry,[d("div",ay,[d("div",iy,[ly,d("div",uy,[d("label",{for:`${c.id}-take`,class:"block text-sm font-medium text-gray-700 dark:text-gray-300"},"Results per page",8,cy),Wn(d("select",{id:`${c.id}-take`,"onUpdate:modelValue":u[0]||(u[0]=v=>r.value.take=v),class:"mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-black border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"},[(h(!0),y(ze,null,Xe(a.filter(v=>s.maxLimit==null||v<=s.maxLimit),v=>(h(),y("option",{value:v,selected:v===r.value.take},X(v),9,py))),256))],8,dy),[[Ec,r.value.take]])]),d("div",fy,[d("input",{type:"radio",id:`${c.id}-allColumns`,onClick:u[1]||(u[1]=v=>r.value.selectedColumns=[]),checked:r.value.selectedColumns.length===0,class:"focus:ring-indigo-500 h-4 w-4 bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-700"},null,8,hy),d("label",{class:"ml-3 block text-gray-700 dark:text-gray-300",for:`${c.id}-allColumns`},"View all columns",8,my)]),d("div",gy,[d("div",vy,[d("div",yy,[(h(!0),y(ze,null,Xe(c.columns,v=>(h(),y("div",{key:v.name,class:"flex items-center"},[Wn(d("input",{type:"checkbox",id:v.name,value:v.name,"onUpdate:modelValue":u[2]||(u[2]=m=>r.value.selectedColumns=m),class:"h-4 w-4 bg-white dark:bg-black border-gray-300 dark:border-gray-700 rounded text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"},null,8,by),[[kr,r.value.selectedColumns]]),d("label",{for:v.name,class:"ml-3"},X(v.name),9,wy)]))),128))])])])])])]),d("div",ky,[Ae(p,{onClick:l,color:"red",class:"ml-2"},{default:$e(()=>[Fe(" Save ")]),_:1}),Ae(g,{onClick:i},{default:$e(()=>[Fe(" Cancel ")]),_:1})])]),_:1},8,["id"])}}}),xy={key:0},Cy={key:1},Sy={key:2,class:"pt-1"},Ty={key:0},Ay={key:1},My={key:2},_y={key:4},Py={class:"pl-1 pt-1 flex flex-wrap"},Ey={class:"flex mt-1"},Iy=["title"],Ly=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("g",{"stroke-width":"1.5",fill:"none"},[d("path",{d:"M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",stroke:"currentColor"})])],-1),Ry=[Ly],zy=["disabled"],jy=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",fill:"currentColor"})],-1),Vy=[jy],Oy=["disabled"],Dy=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",fill:"currentColor"})],-1),By=[Dy],Fy=["disabled"],Hy=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",fill:"currentColor"})],-1),Ny=[Hy],$y=["disabled"],Uy=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",fill:"currentColor"})],-1),Wy=[Uy],qy={key:0,class:"flex mt-1"},Gy={class:"px-4 text-lg text-black dark:text-white"},Qy={key:0},Jy={key:1},Ky=d("span",{class:"hidden xl:inline"}," Showing Results ",-1),Zy={key:2},Yy={class:"flex flex-wrap"},Xy={key:0,class:"pl-2 mt-1"},eb=d("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 20v-5h-5M4 4v5h5m10.938 2A8.001 8.001 0 0 0 5.07 8m-1.008 5a8.001 8.001  0 0 0 14.868 3"})],-1),tb=[eb],nb={key:1,class:"pl-2 mt-1"},sb=br('<svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.781 4.405h-10.13V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.162 1.162 0 0 0 30 25.349V5.5a1.162 1.162 0 0 0-1.219-1.095zm.16 21.126H18.617l-.017-1.889h2.487v-2.2h-2.506l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2h10.411z" fill="#20744a" fill-rule="evenodd"></path><path fill="#20744a" d="M22.487 7.439h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 10.94h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 14.441h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 17.942h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 21.443h4.323v2.2h-4.323z"></path><path fill="#fff" fill-rule="evenodd" d="M6.347 10.673l2.146-.123l1.349 3.709l1.594-3.862l2.146-.123l-2.606 5.266l2.606 5.279l-2.269-.153l-1.532-4.024l-1.533 3.871l-2.085-.184l2.422-4.663l-2.238-4.993z"></path></svg><span class="text-green-900 dark:text-green-100">Excel</span>',2),ob=[sb],rb={key:2,class:"pl-2 mt-1"},ab={key:0,class:"w-5 h-5 mr-1 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},ib=d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),lb=[ib],ub={key:1,class:"w-5 h-5 mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},cb=d("g",{fill:"none"},[d("path",{d:"M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),d("path",{d:"M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),db=[cb],pb=d("span",{class:"whitespace-nowrap"},"Copy URL",-1),fb={key:3,class:"pl-2 mt-1"},hb=d("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 24 24"},[d("path",{fill:"currentColor",d:"M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"})],-1),mb=[hb],gb={key:4,class:"pl-2 mt-1"},vb=d("svg",{class:"flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[d("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z","clip-rule":"evenodd"})],-1),yb={class:"mr-1"},bb={key:0,class:"h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},wb=d("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"},null,-1),kb=[wb],xb={key:1,class:"h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Cb=d("path",{"fill-rule":"evenodd",d:"M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z","clip-rule":"evenodd"},null,-1),Sb=[Cb],Tb={key:5,class:"pl-2 mt-1"},Ab=["title"],Mb=d("svg",{class:"w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:"currentColor"})],-1),_b={class:"whitespace-nowrap"},Pb={key:8},Eb={key:0,class:"cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"},Ib={class:"mr-1 select-none"},Lb={key:1,class:"flex justify-between items-center"},Rb={class:"mr-1 select-none"},Oo=25,zb=Te({__name:"AutoQueryGrid",props:{filterDefinitions:{},id:{default:"AutoQueryGrid"},apis:{},type:{},prefs:{},deny:{},hide:{},selectedColumns:{},toolbarButtonClass:{},tableStyle:{},gridClass:{},grid2Class:{},grid3Class:{},grid4Class:{},tableClass:{},theadClass:{},tbodyClass:{},theadRowClass:{},theadCellClass:{},headerTitle:{},headerTitles:{},visibleFrom:{},rowClass:{},rowStyle:{},modelTitle:{},newButtonLabel:{},apiPrefs:{},canFilter:{},disableKeyBindings:{},configureField:{},skip:{default:0},create:{type:Boolean},edit:{},filters:{}},emits:["headerSelected","rowSelected","nav"],setup(e,{expose:t,emit:n}){const{config:s,autoQueryGridDefaults:o}=Yn(),r=o,a=s.value.storage,i=e,l=n,c=Je("client"),u="filtering,queryString,queryFilters".split(","),p="copyApiUrl,downloadCsv,filtersView,newItem,pagingInfo,pagingNav,preferences,refresh,resetPreferences,toolbar,forms".split(","),g=x(()=>i.deny?Fn(u,i.deny):Fn(u,r.value.deny)),f=x(()=>i.hide?Fn(p,i.hide):Fn(p,r.value.hide));function v(B){return g.value[B]}function m(B){return f.value[B]}const k=x(()=>i.tableStyle??r.value.tableStyle),S=x(()=>i.gridClass??je.getGridClass(k.value)),C=x(()=>i.grid2Class??je.getGrid2Class(k.value)),A=x(()=>i.grid3Class??je.getGrid3Class(k.value)),E=x(()=>i.grid4Class??je.getGrid4Class(k.value)),M=x(()=>i.tableClass??je.getTableClass(k.value)),q=x(()=>i.theadClass??je.getTheadClass(k.value)),I=x(()=>i.theadRowClass??je.getTheadRowClass(k.value)),U=x(()=>i.theadCellClass??je.getTheadCellClass(k.value)),G=x(()=>i.toolbarButtonClass??je.toolbarButtonClass);function re(B,ie){var Me;if(i.rowClass)return i.rowClass(B,ie);const _e=!!De.value.AnyUpdate,He=((Me=w.value)!=null&&Me.name?Ne(B,w.value.name):null)==ce.value;return je.getTableRowClass(i.tableStyle,ie,He,_e)}const Z=gr(),pe=x(()=>{var B;return Rr(((B=De.value.AnyQuery.viewModel)==null?void 0:B.name)||De.value.AnyQuery.dataModel.name)}),ve=x(()=>{const B=Object.keys(Z).map(ie=>ie.toLowerCase());return zt(pe.value).filter(ie=>B.includes(ie.name.toLowerCase())||B.includes(ie.name.toLowerCase()+"-header")).map(ie=>ie.name)});function ue(){let B=Dn(i.selectedColumns);return B.length>0?B:ve.value.length>0?ve.value:[]}const J=x(()=>{let B=ue().map(Me=>Me.toLowerCase());const ie=zt(pe.value);return B.length>0?B.map(Me=>ie.find(_e=>_e.name.toLowerCase()===Me)).filter(Me=>Me!=null):ie}),ne=x(()=>{let B=J.value.map(Me=>Me.name),ie=Dn($.value.selectedColumns).map(Me=>Me.toLowerCase());return ie.length>0?B.filter(Me=>ie.includes(Me.toLowerCase())):B}),P=K([]),F=K(new it),ee=K(new it),L=K(),W=K(!1),ce=K(),Q=K(),H=K(!1),de=K(),Ce=K(i.skip),R=K(!1),$=K({take:Oo}),O=K(!1),D=x(()=>P.value.some(B=>B.settings.filters.length>0||!!B.settings.sort)||$.value.selectedColumns),fe=x(()=>P.value.map(B=>B.settings.filters.length).reduce((B,ie)=>B+ie,0)),b=x(()=>{var B;return zt(Rr(es.value||((B=De.value.AnyQuery)==null?void 0:B.dataModel.name)))}),w=x(()=>{var B;return Ms(Rr(es.value||((B=De.value.AnyQuery)==null?void 0:B.dataModel.name)))}),T=x(()=>$.value.take??Oo),V=x(()=>F.value.response?Ne(F.value.response,"results"):[]),j=x(()=>{var B;return(((B=F.value.response)==null?void 0:B.total)||V.value.length)??0}),z=x(()=>Ce.value>0),ae=x(()=>Ce.value>0),se=x(()=>V.value.length>=T.value),oe=x(()=>V.value.length>=T.value),Y=K(),Se=K(),le={NoQuery:"No Query API was found"};t({update:Ue,search:xo,createRequestArgs:Ir,reset:Wi,createDone:Es,createSave:Vr,editDone:Rn,editSave:ts,forceUpdate:dt,setEdit:ot,edit:Q,createForm:Y,editForm:Se,apiPrefs:$,results:V,skip:Ce,take:T,total:j}),we.interceptors.has("AutoQueryGrid.new")&&we.interceptors.invoke("AutoQueryGrid.new",{props:i});function xe(B){if(B){if(i.canFilter)return i.canFilter(B);const ie=b.value.find(Me=>Me.name.toLowerCase()==B.toLowerCase());if(ie)return!id(ie)}return!1}function be(B){l("nav",B),v("queryString")&&li(B)}async function Ie(B){Ce.value+=B,Ce.value<0&&(Ce.value=0);const ie=Math.floor(j.value/T.value)*T.value;Ce.value>ie&&(Ce.value=ie),be({skip:Ce.value||void 0}),await Ue()}async function Oe(B,ie){var Me,_e;if(Q.value=null,ce.value=ie,!B||!ie)return;let He=ao(De.value.AnyQuery,{[B]:ie});const at=await c.api(He);if(at.succeeded){let vt=(Me=Ne(at.response,"results"))==null?void 0:Me[0];vt||console.warn(`API ${(_e=De.value.AnyQuery)==null?void 0:_e.request.name}(${B}:${ie}) returned no results`),Q.value=vt}}async function Ve(B,ie){var Me;l("rowSelected",B,ie);const _e=(Me=w.value)==null?void 0:Me.name,He=_e?Ne(B,_e):null;!_e||!He||(be({edit:He}),Oe(_e,He))}function te(B,ie){var Me;if(!v("filtering"))return;let _e=ie.target;if(xe(B)&&(_e==null?void 0:_e.tagName)!=="TD"){let He=(Me=_e==null?void 0:_e.closest("TABLE"))==null?void 0:Me.getBoundingClientRect(),at=P.value.find(vt=>vt.name.toLowerCase()==B.toLowerCase());if(at&&He){let vt=318,ns=He.x+vt+10;de.value={column:at,topLeft:{x:Math.max(Math.floor(ie.clientX+vt/2),ns),y:He.y+45}}}}l("headerSelected",B,ie)}function me(){de.value=null}async function Le(B){var ie;let Me=(ie=de.value)==null?void 0:ie.column;Me&&(Me.settings=B,a.setItem(Co(Me.name),JSON.stringify(Me.settings)),await Ue()),de.value=null}async function Ge(B){a.setItem(Co(B.name),JSON.stringify(B.settings)),await Ue()}async function ct(B){H.value=!1,$.value=B,a.setItem(Lr(),JSON.stringify(B)),await Ue()}function wt(B){var ie;Y.value&&(Object.assign((ie=Y.value)==null?void 0:ie.model,B),dt())}function ot(B){Object.assign(Q.value,B),dt()}function dt(){var B,ie,Me;(B=Y.value)==null||B.forceUpdate(),(ie=Se.value)==null||ie.forceUpdate();const _e=st();(Me=_e==null?void 0:_e.proxy)==null||Me.$forceUpdate()}async function Ue(){await xo(Ir())}async function vn(){await Ue()}const Xn=/iPad|iPhone|iPod/.test(navigator.userAgent);async function xo(B){const ie=De.value.AnyQuery;if(!ie){console.error(le.NoQuery);return}let Me=ao(ie,B),_e=await c.api(Me);Nc(at=>{F.value.response=F.value.error=void 0,O.value=at,Xn?Ut(()=>F.value=_e):F.value=_e})();let He=Ne(_e.response,"results")||[];!_e.succeeded||He.label==0}function Ir(){let B={include:"total",take:T.value},ie=Dn($.value.selectedColumns||i.selectedColumns);if(ie.length>0){let _e=w.value;_e&&!ie.includes(_e.name)&&(ie=[_e.name,...ie]);const He=b.value,at=[];ie.forEach(vt=>{var ns;const Is=He.find(zn=>zn.name.toLowerCase()==vt.toLowerCase());(ns=Is==null?void 0:Is.ref)!=null&&ns.selfId&&at.push(Is.ref.selfId),Ne(Z,vt)&&at.push(...He.filter(zn=>{var To,pt;return((pt=(To=zn.ref)==null?void 0:To.selfId)==null?void 0:pt.toLowerCase())==vt.toLowerCase()}).map(zn=>zn.name))}),at.forEach(vt=>{ie.includes(vt)||ie.push(vt)}),B.fields=ie.join(",")}let Me=[];if(P.value.forEach(_e=>{_e.settings.sort&&Me.push((_e.settings.sort==="DESC"?"-":"")+_e.name),_e.settings.filters.forEach(He=>{let at=He.key.replace("%",_e.name);B[at]=He.value})}),i.filters&&Object.keys(i.filters).forEach(_e=>{B[_e]=i.filters[_e]}),v("queryString")&&v("queryFilters")){const _e=location.search?location.search:location.hash.includes("?")?"?"+qs(location.hash,"?"):"";let He=sr(_e);if(Object.keys(He).forEach(at=>{J.value.find(vt=>vt.name.toLowerCase()===at.toLowerCase())&&(B[at]=He[at])}),typeof He.skip<"u"){const at=parseInt(He.skip);isNaN(at)||(Ce.value=B.skip=at)}}return typeof B.skip>"u"&&Ce.value>0&&(B.skip=Ce.value),Me.length>0&&(B.orderBy=Me.join(",")),B}function Kd(){const B=Oi("csv");Sa(B),typeof window<"u"&&window.open(B)}function Zd(){const B=Oi("json");Sa(B),R.value=!0,setTimeout(()=>R.value=!1,3e3)}function Oi(B="json"){var ie;const Me=Ir(),_e=`/api/${(ie=De.value.AnyQuery)==null?void 0:ie.request.name}`,He=Ht(c.baseUrl,Xt(_e,{...Me,jsconfig:"edv"}));return He.indexOf("?")>=0?go(He,"?")+"."+B+"?"+qs(He,"?"):He+".json"}async function Yd(){P.value.forEach(B=>{B.settings={filters:[]},a.removeItem(Co(B.name))}),$.value={take:Oo},a.removeItem(Lr()),await Ue()}function Xd(){W.value=!0,be({create:null})}const es=x(()=>Zn(i.type)),_s=x(()=>{var B;return es.value||((B=De.value.AnyQuery)==null?void 0:B.dataModel.name)}),Ps=x(()=>i.modelTitle||_s.value),ep=x(()=>i.newButtonLabel||`New ${Ps.value}`),Lr=()=>{var B;return`${i.id}/ApiPrefs/${es.value||((B=De.value.AnyQuery)==null?void 0:B.dataModel.name)}`},Co=B=>{var ie;return`Column/${i.id}:${es.value||((ie=De.value.AnyQuery)==null?void 0:ie.dataModel.name)}.${B}`},{metadataApi:Di,typeOf:Rr,apiOf:Bi,filterDefinitions:tp}=Ft(),{invalidAccessMessage:zr}=_i(),Fi=x(()=>i.filterDefinitions||tp.value),De=x(()=>{let B=Dn(i.apis);return B.length>0?Jn.from(B.map(ie=>Bi(ie)).filter(ie=>ie!=null).map(ie=>ie)):Jn.forType(es.value,Di.value)}),So=B=>`<span class="text-yellow-700">${B}</span>`,Hi=x(()=>{if(!Di.value)return So(`AppMetadata not loaded, see <a class="${Pa.blue}" href="https://docs.servicestack.net/vue/use-metadata" target="_blank">useMetadata()</a>`);let B=Dn(i.apis).map(Me=>Bi(Me)==null?Me:null).filter(Me=>Me!=null);if(B.length>0)return So(`Unknown API${B.length>1?"s":""}: ${B.join(", ")}`);let ie=De.value;return ie.empty?So("Mising DataModel in property 'type' or AutoQuery APIs to use in property 'apis'"):ie.AnyQuery?null:So(le.NoQuery)}),Ni=x(()=>De.value.AnyQuery&&zr(De.value.AnyQuery)),$i=x(()=>De.value.Create&&zr(De.value.Create)),Ui=x(()=>De.value.AnyUpdate&&zr(De.value.AnyUpdate)),np=x(()=>Js(De.value.Create));x(()=>Js(De.value.AnyUpdate));const jr=x(()=>Js(De.value.Delete));function Rn(){Q.value=null,ce.value=null,be({edit:void 0})}function Es(){W.value=!1,be({create:void 0})}async function ts(){await Ue(),Rn()}async function Vr(){await Ue(),Es()}function Wi(){var B;F.value=new it,ee.value=new it,W.value=!1,ce.value=null,Q.value=null,H.value=!1,de.value=null,Ce.value=i.skip,R.value=!1,$.value={take:Oo},O.value=!1;const ie=i.prefs||rr(a.getItem(Lr()));ie&&($.value=ie),P.value=J.value.map(_e=>({name:_e.name,type:_e.type,meta:_e,settings:Object.assign({filters:[]},rr(a.getItem(Co(_e.name))))})),isNaN(i.skip)||(Ce.value=i.skip);let Me=(B=w.value)==null?void 0:B.name;if(v("queryString")){const _e=location.search?location.search:location.hash.includes("?")?"?"+qs(location.hash,"?"):"";let He=sr(_e);typeof He.create<"u"?W.value=typeof He.create<"u":Me&&(typeof He.edit=="string"||typeof He.edit=="number")&&Oe(Me,He.edit)}i.create===!0&&(W.value=!0),Me&&i.edit!=null&&Oe(Me,i.edit)}return Mt(async()=>{Wi(),await Ue()}),(B,ie)=>{const Me=ye("Alert"),_e=ye("EnsureAccessDialog"),He=ye("AutoCreateForm"),at=ye("AutoEditForm"),vt=ye("AutoViewForm"),ns=ye("ErrorSummary"),Is=ye("Loading"),zn=ye("SettingsIcons"),To=ye("DataGrid");return Hi.value?(h(),y("div",xy,[Ae(Me,{innerHTML:Hi.value},null,8,["innerHTML"])])):Ni.value?(h(),y("div",Cy,[Ae(Sd,{"invalid-access":Ni.value},null,8,["invalid-access"])])):(h(),y("div",Sy,[m("forms")&&W.value&&De.value.Create?(h(),y("div",Ty,[$i.value?(h(),ke(_e,{key:0,title:`Create ${Ps.value}`,"invalid-access":$i.value,"alert-class":"text-yellow-700",onDone:Es},null,8,["title","invalid-access"])):ge(Z).createform?he(B.$slots,"createform",{key:1,type:De.value.Create.request.name,configure:B.configureField,done:Es,save:Vr}):(h(),ke(He,{key:2,ref_key:"createForm",ref:Y,type:De.value.Create.request.name,configure:B.configureField,onDone:Es,onSave:Vr},{header:$e(()=>[he(B.$slots,"formheader",{form:"create",formInstance:Y.value,apis:De.value,type:_s.value,updateModel:wt})]),footer:$e(()=>[he(B.$slots,"formfooter",{form:"create",formInstance:Y.value,apis:De.value,type:_s.value,updateModel:wt})]),_:3},8,["type","configure"]))])):m("forms")&&Q.value&&De.value.AnyUpdate?(h(),y("div",Ay,[Ui.value?(h(),ke(_e,{key:0,title:`Update ${Ps.value}`,"invalid-access":Ui.value,"alert-class":"text-yellow-700",onDone:Rn},null,8,["title","invalid-access"])):ge(Z).editform?he(B.$slots,"editform",{key:1,model:Q.value,type:De.value.AnyUpdate.request.name,deleteType:jr.value?De.value.Delete.request.name:null,configure:B.configureField,done:Rn,save:ts}):(h(),ke(at,{key:2,ref_key:"editForm",ref:Se,modelValue:Q.value,"onUpdate:modelValue":ie[0]||(ie[0]=pt=>Q.value=pt),type:De.value.AnyUpdate.request.name,deleteType:jr.value?De.value.Delete.request.name:null,configure:B.configureField,onDone:Rn,onSave:ts,onDelete:ts},{header:$e(()=>[he(B.$slots,"formheader",{form:"edit",formInstance:Se.value,apis:De.value,type:_s.value,model:Q.value,id:ce.value,updateModel:ot})]),footer:$e(()=>[he(B.$slots,"formfooter",{form:"edit",formInstance:Se.value,apis:De.value,type:_s.value,model:Q.value,id:ce.value,updateModel:ot})]),_:3},8,["modelValue","type","deleteType","configure"]))])):m("forms")&&Q.value?(h(),y("div",My,[ge(Z).viewform?he(B.$slots,"viewform",{key:0,model:Q.value,apis:De.value,done:Rn}):(h(),ke(vt,{key:1,model:Q.value,apis:De.value,deleteType:jr.value?De.value.Delete.request.name:null,done:Rn,onSave:ts,onDelete:ts},null,8,["model","apis","deleteType"]))])):N("",!0),ge(Z).toolbar?he(B.$slots,"toolbar",{key:3}):m("toolbar")?(h(),y("div",_y,[H.value?(h(),ke(Ii,{key:0,columns:J.value,prefs:$.value,onDone:ie[1]||(ie[1]=pt=>H.value=!1),onSave:ct},null,8,["columns","prefs"])):N("",!0),d("div",Py,[d("div",Ey,[m("preferences")?(h(),y("button",{key:0,type:"button",class:"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",title:`${Ps.value} Preferences`,onClick:ie[2]||(ie[2]=pt=>H.value=!H.value)},Ry,8,Iy)):N("",!0),m("pagingNav")?(h(),y("button",{key:1,type:"button",class:_(["pl-2",z.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"First page",disabled:!z.value,onClick:ie[3]||(ie[3]=pt=>Ie(-j.value))},Vy,10,zy)):N("",!0),m("pagingNav")?(h(),y("button",{key:2,type:"button",class:_(["pl-2",ae.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"Previous page",disabled:!ae.value,onClick:ie[4]||(ie[4]=pt=>Ie(-T.value))},By,10,Oy)):N("",!0),m("pagingNav")?(h(),y("button",{key:3,type:"button",class:_(["pl-2",se.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"Next page",disabled:!se.value,onClick:ie[5]||(ie[5]=pt=>Ie(T.value))},Ny,10,Fy)):N("",!0),m("pagingNav")?(h(),y("button",{key:4,type:"button",class:_(["pl-2",oe.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"Last page",disabled:!oe.value,onClick:ie[6]||(ie[6]=pt=>Ie(j.value))},Wy,10,$y)):N("",!0)]),m("pagingInfo")?(h(),y("div",qy,[d("div",Gy,[O.value?(h(),y("span",Qy,"Querying...")):N("",!0),V.value.length?(h(),y("span",Jy,[Ky,Fe(" "+X(Ce.value+1)+" - "+X(Math.min(Ce.value+V.value.length,j.value))+" ",1),d("span",null," of "+X(j.value),1)])):F.value.completed?(h(),y("span",Zy,"No Results")):N("",!0)])])):N("",!0),d("div",Yy,[m("refresh")?(h(),y("div",Xy,[d("button",{type:"button",onClick:vn,title:"Refresh",class:_(G.value)},tb,2)])):N("",!0),m("downloadCsv")?(h(),y("div",nb,[d("button",{type:"button",onClick:Kd,title:"Download CSV",class:_(G.value)},ob,2)])):N("",!0),m("copyApiUrl")?(h(),y("div",rb,[d("button",{type:"button",onClick:Zd,title:"Copy API URL",class:_(G.value)},[R.value?(h(),y("svg",ab,lb)):(h(),y("svg",ub,db)),pb],2)])):N("",!0),D.value&&m("resetPreferences")?(h(),y("div",fb,[d("button",{type:"button",onClick:Yd,title:"Reset Preferences & Filters",class:_(G.value)},mb,2)])):N("",!0),m("filtersView")&&fe.value>0?(h(),y("div",gb,[d("button",{type:"button",onClick:ie[7]||(ie[7]=pt=>L.value=L.value=="filters"?null:"filters"),class:_(G.value),"aria-expanded":"false"},[vb,d("span",yb,X(fe.value)+" "+X(fe.value==1?"Filter":"Filters"),1),L.value!="filters"?(h(),y("svg",bb,kb)):(h(),y("svg",xb,Sb))],2)])):N("",!0),m("newItem")&&De.value.Create&&np.value?(h(),y("div",Tb,[d("button",{type:"button",onClick:Xd,title:Ps.value,class:_(G.value)},[Mb,d("span",_b,X(ep.value),1)],10,Ab)])):N("",!0),ge(Z).toolbarbuttons?he(B.$slots,"toolbarbuttons",{key:6,toolbarButtonClass:G.value}):N("",!0)])])])):N("",!0),L.value=="filters"?(h(),ke(Ei,{key:5,class:"border-y border-gray-200 dark:border-gray-800 py-8 my-2",definitions:Fi.value,columns:P.value,onDone:ie[8]||(ie[8]=pt=>L.value=null),onChange:Ge},null,8,["definitions","columns"])):N("",!0),ee.value.error??F.value.error?(h(),ke(ns,{key:6,status:ee.value.error??F.value.error},null,8,["status"])):O.value?(h(),ke(Is,{key:7,class:"p-2"})):N("",!0),de.value?(h(),y("div",Pb,[Ae(Pi,{definitions:Fi.value,column:de.value.column,"top-left":de.value.topLeft,onDone:me,onSave:Le},null,8,["definitions","column","top-left"])])):N("",!0),V.value.length?(h(),ke(To,{key:9,id:B.id,items:V.value,type:B.type,"selected-columns":ne.value,class:"mt-1",onFiltersChanged:Ue,tableStyle:k.value,gridClass:S.value,grid2Class:C.value,grid3Class:A.value,grid4Class:E.value,tableClass:M.value,theadClass:q.value,theadRowClass:I.value,theadCellClass:U.value,tbodyClass:B.tbodyClass,rowClass:re,onRowSelected:Ve,rowStyle:B.rowStyle,headerTitle:B.headerTitle,headerTitles:B.headerTitles,visibleFrom:B.visibleFrom,onHeaderSelected:te},ni({header:$e(({column:pt,label:Ao})=>{var qi;return[v("filtering")&&xe(pt)?(h(),y("div",Eb,[d("span",Ib,X(Ao),1),Ae(zn,{column:P.value.find(sp=>sp.name.toLowerCase()===pt.toLowerCase()),"is-open":((qi=de.value)==null?void 0:qi.column.name)===pt},null,8,["column","is-open"])])):(h(),y("div",Lb,[d("span",Rb,X(Ao),1)]))]}),_:2},[Xe(Object.keys(ge(Z)),pt=>({name:pt,fn:$e(Ao=>[he(B.$slots,pt,ys(oo(Ao)))])}))]),1032,["id","items","type","selected-columns","tableStyle","gridClass","grid2Class","grid3Class","grid4Class","tableClass","theadClass","theadRowClass","theadCellClass","tbodyClass","rowStyle","headerTitle","headerTitles","visibleFrom"])):N("",!0)]))}}}),jb={class:"flex"},Vb={key:0,class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ob=d("g",{fill:"none"},[d("path",{d:"M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Db=[Ob],Bb=d("path",{d:"M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z",fill:"currentColor"},null,-1),Fb=d("path",{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",fill:"currentColor"},null,-1),Hb=[Bb,Fb],Nb={key:2,class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},$b=d("g",{fill:"none"},[d("path",{d:"M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",fill:"currentColor"})],-1),Ub=[$b],Wb={key:3,class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},qb=d("g",{fill:"none"},[d("path",{d:"M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",fill:"currentColor"})],-1),Gb=[qb],Qb=Te({__name:"SettingsIcons",props:{column:{},isOpen:{type:Boolean}},setup(e){return(t,n)=>{var s,o,r,a,i,l,c;return h(),y("div",jb,[(r=(o=(s=t.column)==null?void 0:s.settings)==null?void 0:o.filters)!=null&&r.length?(h(),y("svg",Vb,Db)):(h(),y("svg",{key:1,class:_(["w-4 h-4 transition-transform",t.isOpen?"rotate-180":""]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Hb,2)),((i=(a=t.column)==null?void 0:a.settings)==null?void 0:i.sort)==="ASC"?(h(),y("svg",Nb,Ub)):((c=(l=t.column)==null?void 0:l.settings)==null?void 0:c.sort)==="DESC"?(h(),y("svg",Wb,Gb)):N("",!0)])}}}),Jb=Te({__name:"EnsureAccessDialog",props:{title:{},subtitle:{},invalidAccess:{},alertClass:{}},emits:["done"],setup(e){return(t,n)=>{const s=ye("EnsureAccess"),o=ye("SlideOver");return t.invalidAccess?(h(),ke(o,{key:0,title:t.title,onDone:n[0]||(n[0]=r=>t.$emit("done")),"content-class":"relative flex-1"},ni({default:$e(()=>[Ae(s,{alertClass:t.alertClass,invalidAccess:t.invalidAccess},null,8,["alertClass","invalidAccess"])]),_:2},[t.subtitle?{name:"subtitle",fn:$e(()=>[Fe(X(t.subtitle),1)]),key:"0"}:void 0]),1032,["title"])):N("",!0)}}}),Kb=["for"],Zb=["type","name","id","placeholder","value","aria-invalid","aria-describedby"],Yb={key:0,class:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},Xb=d("svg",{class:"h-5 w-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),e1=[Xb],t1=["id"],n1=["id"],s1={inheritAttrs:!1},o1=Te({...s1,__name:"TextInput",props:{status:{},id:{},type:{},inputClass:{},label:{},labelClass:{},help:{},placeholder:{},modelValue:{}},setup(e,{expose:t}){const n=f=>f.value,s=e;t({focus:r});const o=K();function r(){var f;(f=o.value)==null||f.focus()}const a=x(()=>s.type||"text"),i=x(()=>s.label??rt(jt(s.id))),l=x(()=>s.placeholder??i.value);function c(f){return s.type==="range"?f.replace("shadow-sm ",""):f}let u=Je("ApiState",void 0);const p=x(()=>gn.call({responseStatus:s.status??(u==null?void 0:u.error.value)},s.id)),g=x(()=>[en.base,p.value?en.invalid:c(en.valid),s.inputClass]);return(f,v)=>(h(),y("div",{class:_([f.$attrs.class])},[he(f.$slots,"header",Qe({inputElement:o.value,id:f.id,modelValue:f.modelValue,status:f.status},f.$attrs)),i.value?(h(),y("label",{key:0,for:f.id,class:_(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${f.labelClass??""}`)},X(i.value),11,Kb)):N("",!0),d("div",{class:_(c("mt-1 relative"))},[d("input",Qe({ref_key:"inputElement",ref:o,type:a.value,name:f.id,id:f.id,class:g.value,placeholder:l.value,value:ge(qc)(a.value,f.modelValue),onInput:v[0]||(v[0]=m=>f.$emit("update:modelValue",n(m.target))),"aria-invalid":p.value!=null,"aria-describedby":`${f.id}-error`,step:"any"},ge(rn)(f.$attrs,["class","value"])),null,16,Zb),p.value?(h(),y("div",Yb,e1)):N("",!0)],2),p.value?(h(),y("p",{key:1,class:"mt-2 text-sm text-red-500",id:`${f.id}-error`},X(p.value),9,t1)):f.help?(h(),y("p",{key:2,class:"mt-2 text-sm text-gray-500",id:`${f.id}-description`},X(f.help),9,n1)):N("",!0),he(f.$slots,"footer",Qe({inputElement:o.value,id:f.id,modelValue:f.modelValue,status:f.status},f.$attrs))],2))}}),r1=["for"],a1={class:"mt-1 relative"},i1=["name","id","placeholder","aria-invalid","aria-describedby"],l1=["id"],u1=["id"],c1={inheritAttrs:!1},d1=Te({...c1,__name:"TextareaInput",props:{status:{},id:{},inputClass:{},label:{},labelClass:{},help:{},placeholder:{},modelValue:{}},setup(e){const t=l=>l.value,n=e,s=x(()=>n.label??rt(jt(n.id))),o=x(()=>n.placeholder??s.value);let r=Je("ApiState",void 0);const a=x(()=>gn.call({responseStatus:n.status??(r==null?void 0:r.error.value)},n.id)),i=x(()=>["shadow-sm "+en.base,a.value?"text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300":"text-gray-900 "+en.valid,n.inputClass]);return(l,c)=>(h(),y("div",{class:_([l.$attrs.class])},[s.value?(h(),y("label",{key:0,for:l.id,class:_(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${l.labelClass??""}`)},X(s.value),11,r1)):N("",!0),d("div",a1,[d("textarea",Qe({name:l.id,id:l.id,class:i.value,placeholder:o.value,onInput:c[0]||(c[0]=u=>l.$emit("update:modelValue",t(u.target))),"aria-invalid":a.value!=null,"aria-describedby":`${l.id}-error`},ge(rn)(l.$attrs,["class"])),X(l.modelValue),17,i1)]),a.value?(h(),y("p",{key:1,class:"mt-2 text-sm text-red-500",id:`${l.id}-error`},X(a.value),9,l1)):l.help?(h(),y("p",{key:2,class:"mt-2 text-sm text-gray-500",id:`${l.id}-description`},X(l.help),9,u1)):N("",!0)],2))}}),p1=["for"],f1=["id","name","value","aria-invalid","aria-describedby"],h1=["value"],m1=["id"],g1={inheritAttrs:!1},v1=Te({...g1,__name:"SelectInput",props:{status:{},id:{},modelValue:{},inputClass:{},label:{},labelClass:{},options:{},values:{},entries:{}},setup(e){const t=i=>i.value,n=e,s=x(()=>n.label??rt(jt(n.id)));let o=Je("ApiState",void 0);const r=x(()=>gn.call({responseStatus:n.status??(o==null?void 0:o.error.value)},n.id)),a=x(()=>n.entries||(n.values?n.values.map(i=>({key:i,value:i})):n.options?Object.keys(n.options).map(i=>({key:i,value:n.options[i]})):[]));return(i,l)=>(h(),y("div",{class:_([i.$attrs.class])},[s.value?(h(),y("label",{key:0,for:i.id,class:_(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${i.labelClass??""}`)},X(s.value),11,p1)):N("",!0),d("select",Qe({id:i.id,name:i.id,class:["mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md dark:text-white dark:bg-gray-900 dark:border-gray-600 disabled:bg-slate-50 dark:disabled:bg-slate-900 disabled:text-slate-500 disabled:border-slate-200 dark:disabled:border-slate-700 disabled:shadow-none",r.value?"border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500":"shadow-sm border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",i.inputClass],value:i.modelValue,onInput:l[0]||(l[0]=c=>i.$emit("update:modelValue",t(c.target))),"aria-invalid":r.value!=null,"aria-describedby":`${i.id}-error`},ge(rn)(i.$attrs,["class"])),[(h(!0),y(ze,null,Xe(a.value,c=>(h(),y("option",{value:c.key},X(c.value),9,h1))),256))],16,f1),r.value?(h(),y("p",{key:1,class:"mt-2 text-sm text-red-500",id:`${i.id}-error`},X(r.value),9,m1)):N("",!0)],2))}}),y1={class:"flex items-center h-5"},b1=["id","name","checked"],w1={class:"ml-3 text-sm"},k1=["for"],x1={key:0,class:"mt-2 text-sm text-red-500",id:"`${id}-error`"},C1={key:1,class:"mt-2 text-sm text-gray-500",id:"`${id}-description`"},S1={inheritAttrs:!1},T1=Te({...S1,__name:"CheckboxInput",props:{modelValue:{type:Boolean},status:{},id:{},inputClass:{},label:{},labelClass:{},help:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,s=x(()=>n.label??rt(jt(n.id)));let o=Je("ApiState",void 0);const r=x(()=>gn.call({responseStatus:n.status??(o==null?void 0:o.error.value)},n.id));return(a,i)=>(h(),y("div",{class:_(["relative flex items-start",a.$attrs.class])},[d("div",y1,[d("input",Qe({id:a.id,name:a.id,type:"checkbox",checked:a.modelValue,onInput:i[0]||(i[0]=l=>a.$emit("update:modelValue",l.target.checked)),class:["focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800",a.inputClass]},ge(rn)(a.$attrs,["class"])),null,16,b1)]),d("div",w1,[d("label",{for:a.id,class:_(`font-medium text-gray-700 dark:text-gray-300 ${a.labelClass??""}`)},X(s.value),11,k1),r.value?(h(),y("p",x1,X(r.value),1)):a.help?(h(),y("p",C1,X(a.help),1)):N("",!0)])],2))}}),A1=["id"],M1=["for"],_1={class:"mt-1 relative"},P1=["id","name","value"],E1={class:"flex flex-wrap pb-1.5"},I1={class:"pt-1.5 pl-1"},L1={class:"inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300"},R1=["onClick"],z1=d("svg",{class:"h-2 w-2",stroke:"currentColor",fill:"none",viewBox:"0 0 8 8"},[d("path",{"stroke-linecap":"round","stroke-width":"1.5",d:"M1 1l6 6m0-6L1 7"})],-1),j1=[z1],V1={class:"pt-1.5 pl-1 shrink"},O1=["type","name","id","aria-invalid","aria-describedby"],D1=["id"],B1=["onMouseover","onClick"],F1={class:"block truncate"},H1={key:1,class:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},N1=d("svg",{class:"h-5 w-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),$1=[N1],U1=["id"],W1=["id"],q1={inheritAttrs:!1},G1=Te({...q1,__name:"TagInput",props:{status:{},id:{},type:{},inputClass:{},label:{},labelClass:{},help:{},modelValue:{default:()=>[]},delimiters:{default:()=>[","]},allowableValues:{},string:{type:Boolean},maxVisibleItems:{default:300},converter:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,s=t;function o(P){return n.converter?n.converter(P):P}const r=x(()=>bt(o(n.modelValue),P=>typeof P=="string"?P.trim().length==0?[]:P.split(","):P)||[]),a=K(),i=K(!1),l=x(()=>{const P=p.value.toLowerCase();return!n.allowableValues||n.allowableValues.length==0?[]:n.allowableValues.length<1e3?n.allowableValues.filter(F=>!r.value.includes(F)&&F.toLowerCase().includes(P)):n.allowableValues.filter(F=>!r.value.includes(F)&&F.startsWith(P))});function c(P){a.value=P}const u=K(null),p=K(""),g=x(()=>n.type||"text"),f=x(()=>n.label??rt(jt(n.id)));let v=Je("ApiState",void 0);const m=x(()=>gn.call({responseStatus:n.status??(v==null?void 0:v.error.value)},n.id)),k=x(()=>["w-full cursor-text flex flex-wrap sm:text-sm rounded-md dark:text-white dark:bg-gray-900 border focus-within:border-transparent focus-within:ring-1 focus-within:outline-none",m.value?"pr-10 border-red-300 text-red-900 placeholder-red-300 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500":"shadow-sm border-gray-300 dark:border-gray-600 focus-within:ring-indigo-500 focus-within:border-indigo-500",n.inputClass]),S=P=>I(r.value.filter(F=>F!=P));function C(P){var F;document.activeElement===P.target&&((F=u.value)==null||F.focus())}const A=K();function E(){i.value=!0,A.value=!0}function M(){E()}function q(){ue(G()),A.value=!1,setTimeout(()=>{A.value||(i.value=!1)},200)}function I(P){const F=n.string?P.join(","):P;s("update:modelValue",F)}function U(P){if(P.key=="Backspace"&&p.value.length==0&&r.value.length>0&&S(r.value[r.value.length-1]),!(!n.allowableValues||n.allowableValues.length==0))if(P.code=="Escape"||P.code=="Tab")i.value=!1;else if(P.code=="Home")a.value=l.value[0],pe();else if(P.code=="End")a.value=l.value[l.value.length-1],pe();else if(P.code=="ArrowDown"){if(i.value=!0,!a.value)a.value=l.value[0];else{const F=l.value.indexOf(a.value);a.value=F+1<l.value.length?l.value[F+1]:l.value[0]}ve()}else if(P.code=="ArrowUp"){if(!a.value)a.value=l.value[l.value.length-1];else{const F=l.value.indexOf(a.value);a.value=F-1>=0?l.value[F-1]:l.value[l.value.length-1]}ve()}else P.code=="Enter"?a.value&&i.value?(ue(a.value),P.preventDefault()):i.value=!1:i.value=l.value.length>0}function G(){if(p.value.length==0)return"";let P=zm(p.value.trim(),",");return P[0]==","&&(P=P.substring(1)),P=P.trim(),P.length==0&&i.value&&l.value.length>0?a.value:P}function re(P){const F=G();if(F.length>0){const ee=n.delimiters.some(L=>L==P.key);if(ee&&P.preventDefault(),P.key=="Enter"||P.key=="NumpadEnter"||P.key.length==1&&ee){ue(F);return}}}const Z={behavior:"smooth",block:"nearest",inline:"nearest",scrollMode:"if-needed"};function pe(){setTimeout(()=>{let P=or(`#${n.id}-tag li.active`);P&&P.scrollIntoView(Z)},0)}function ve(){setTimeout(()=>{let P=or(`#${n.id}-tag li.active`);P&&("scrollIntoViewIfNeeded"in P?P.scrollIntoViewIfNeeded(Z):P.scrollIntoView(Z))},0)}function ue(P){if(P.length===0)return;const F=Array.from(r.value);F.indexOf(P)==-1&&F.push(P),I(F),p.value="",i.value=!1}function J(P){var F;const ee=(F=P.clipboardData)==null?void 0:F.getData("Text");ne(ee)}function ne(P){if(!P)return;const F=new RegExp(`\\n|\\t|${n.delimiters.join("|")}`),ee=Array.from(r.value);P.split(F).map(L=>L.trim()).forEach(L=>{ee.indexOf(L)==-1&&ee.push(L)}),I(ee),p.value=""}return(P,F)=>(h(),y("div",{class:_([P.$attrs.class]),id:`${P.id}-tag`,onmousemove:"cancelBlur=true"},[f.value?(h(),y("label",{key:0,for:P.id,class:_(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${P.labelClass??""}`)},X(f.value),11,M1)):N("",!0),d("div",_1,[d("input",{type:"hidden",id:P.id,name:P.id,value:r.value.join(",")},null,8,P1),d("button",{class:_(k.value),onClick:gt(C,["prevent"]),onFocus:F[2]||(F[2]=ee=>i.value=!0),tabindex:"-1"},[d("div",E1,[(h(!0),y(ze,null,Xe(r.value,ee=>(h(),y("div",I1,[d("span",L1,[Fe(X(ee)+" ",1),d("button",{type:"button",onClick:L=>S(ee),class:"flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black"},j1,8,R1)])]))),256)),d("div",V1,[Wn(d("input",Qe({ref_key:"txtInput",ref:u,type:g.value,role:"combobox","aria-controls":"options","aria-expanded":"false",autocomplete:"off",spellcheck:"false",name:`${P.id}-txt`,id:`${P.id}-txt`,class:"p-0 dark:bg-transparent rounded-md border-none focus:!border-none focus:!outline-none",style:`box-shadow:none !important;width:${p.value.length+1}ch`,"onUpdate:modelValue":F[0]||(F[0]=ee=>p.value=ee),"aria-invalid":m.value!=null,"aria-describedby":`${P.id}-error`,onKeydown:U,onKeypress:re,onPaste:gt(J,["prevent","stop"]),onFocus:M,onBlur:q,onClick:F[1]||(F[1]=ee=>i.value=!0)},ge(rn)(P.$attrs,["class","required"])),null,16,O1),[[yh,p.value]])])])],34),i.value&&l.value.length?(h(),y("ul",{key:0,class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",onKeydown:U,id:`${P.id}-options`,role:"listbox"},[(h(!0),y(ze,null,Xe(l.value.slice(0,P.maxVisibleItems),ee=>(h(),y("li",{class:_([ee===a.value?"active bg-indigo-600 text-white":"text-gray-900 dark:text-gray-100","relative cursor-default select-none py-2 pl-3 pr-9"]),onMouseover:L=>c(ee),onClick:L=>ue(ee),role:"option",tabindex:"-1"},[d("span",F1,X(ee),1)],42,B1))),256))],40,D1)):N("",!0),m.value?(h(),y("div",H1,$1)):N("",!0)]),m.value?(h(),y("p",{key:1,class:"mt-2 text-sm text-red-500",id:`${P.id}-error`},X(m.value),9,U1)):P.help?(h(),y("p",{key:2,class:"mt-2 text-sm text-gray-500",id:`${P.id}-description`},X(P.help),9,W1)):N("",!0)],10,A1))}}),Q1={class:"relative flex-grow mr-2 sm:mr-4"},J1=["for"],K1={class:"block mt-2"},Z1={class:"sr-only"},Y1=["multiple","name","id","placeholder","aria-invalid","aria-describedby"],X1={key:0,class:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},ew=d("svg",{class:"h-5 w-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),tw=[ew],nw=["id"],sw=["id"],ow={key:0},rw=["title"],aw=["alt","src"],iw={key:1,class:"mt-3"},lw={class:"w-full"},uw={class:"pr-6 align-bottom pb-2"},cw=["title"],dw=["src","onError"],pw=["href"],fw={key:1,class:"overflow-hidden"},hw={class:"align-top pb-2 whitespace-nowrap"},mw={key:0,class:"text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-black"},gw=Te({__name:"FileInput",props:{multiple:{type:Boolean},status:{},id:{},inputClass:{},label:{},labelClass:{},help:{},placeholder:{},modelValue:{},values:{},files:{}},setup(e){var t;const n=e,s=K(null),{assetsPathResolver:o,fallbackPathResolver:r}=Yn(),a={},i=K(),l=K(((t=n.files)==null?void 0:t.map(c))||[]);function c(M){return M.filePath=o(M.filePath),M}n.values&&n.values.length>0&&(l.value=n.values.map(M=>{let q=M.replace(/\\/g,"/");return{fileName:Bc(Gn(q,"/"),"."),filePath:q,contentType:Aa(q)}}).map(c));const u=x(()=>n.label??rt(jt(n.id))),p=x(()=>n.placeholder??u.value);let g=Je("ApiState",void 0);const f=x(()=>gn.call({responseStatus:n.status??(g==null?void 0:g.error.value)},n.id)),v=x(()=>["block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900 file:text-violet-700 dark:file:text-violet-200 hover:file:bg-violet-100 dark:hover:file:bg-violet-800",f.value?"pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500":"text-slate-500 dark:text-slate-400",n.inputClass]),m=M=>{let q=M.target;i.value="",l.value=Array.from(q.files||[]).map(I=>({fileName:I.name,filePath:pi(I),contentLength:I.size,contentType:I.type||Aa(I.name)}))},k=()=>{var M;return(M=s.value)==null?void 0:M.click()},S=M=>M==null?!1:M.startsWith("data:")||M.startsWith("blob:"),C=x(()=>{if(l.value.length>0)return l.value[0].filePath;let M=typeof n.modelValue=="string"?n.modelValue:n.values&&n.values[0];return M&&Bn(o(M))||null}),A=M=>!M||M.startsWith("data:")||M.endsWith(".svg")?"":"rounded-full object-cover";function E(M){i.value=r(C.value)}return sn(nd),(M,q)=>(h(),y("div",{class:_(["flex",M.multiple?"flex-col":"justify-between"])},[d("div",Q1,[u.value?(h(),y("label",{key:0,for:M.id,class:_(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${M.labelClass??""}`)},X(u.value),11,J1)):N("",!0),d("div",K1,[d("span",Z1,X(M.help??u.value),1),d("input",Qe({ref_key:"input",ref:s,type:"file",multiple:M.multiple,name:M.id,id:M.id,class:v.value,placeholder:p.value,"aria-invalid":f.value!=null,"aria-describedby":`${M.id}-error`},M.$attrs,{onChange:m}),null,16,Y1),f.value?(h(),y("div",X1,tw)):N("",!0)]),f.value?(h(),y("p",{key:1,class:"mt-2 text-sm text-red-500",id:`${M.id}-error`},X(f.value),9,nw)):M.help?(h(),y("p",{key:2,class:"mt-2 text-sm text-gray-500",id:`${M.id}-description`},X(M.help),9,sw)):N("",!0)]),M.multiple?(h(),y("div",iw,[d("table",lw,[(h(!0),y(ze,null,Xe(l.value,I=>(h(),y("tr",null,[d("td",uw,[d("div",{class:"flex w-full",title:S(I.filePath)?"":I.filePath},[d("img",{src:a[ge(Bn)(I.filePath)]||ge(o)(ge(Bn)(I.filePath)),class:_(["mr-2 h-8 w-8",A(I.filePath)]),onError:U=>a[ge(Bn)(I.filePath)]=ge(r)(ge(Bn)(I.filePath))},null,42,dw),S(I.filePath)?(h(),y("span",fw,X(I.fileName),1)):(h(),y("a",{key:0,href:ge(o)(I.filePath||""),target:"_blank",class:"overflow-hidden"},X(I.fileName),9,pw))],8,cw)]),d("td",hw,[I.contentLength&&I.contentLength>0?(h(),y("span",mw,X(ge(hi)(I.contentLength)),1)):N("",!0)])]))),256))])])):(h(),y("div",ow,[C.value?(h(),y("div",{key:0,class:"shrink-0 cursor-pointer",title:S(C.value)?"":C.value},[d("img",{onClick:k,class:_(["h-16 w-16",A(C.value)]),alt:`Current ${u.value??""}`,src:i.value||ge(o)(C.value),onError:E},null,42,aw)],8,rw)):N("",!0)]))],2))}}),vw=["id"],yw=["for"],bw={class:"relative mt-1"},ww=["id","placeholder"],kw=d("svg",{class:"h-5 w-5 text-gray-400 dark:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z","clip-rule":"evenodd"})],-1),xw=[kw],Cw=["id"],Sw=["onMouseover","onClick"],Tw=d("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z","clip-rule":"evenodd"})],-1),Aw=[Tw],Mw={key:2,class:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",tabindex:"-1"},_w=d("svg",{class:"h-5 w-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),Pw=[_w],Ew=["id"],Iw=["id"],Lw=Te({__name:"Autocomplete",props:{status:{},id:{},type:{},label:{},help:{},placeholder:{},multiple:{type:Boolean,default:!1},required:{type:Boolean},options:{default:()=>[]},modelValue:{},match:{},viewCount:{default:100},pageSize:{default:8}},emits:["update:modelValue"],setup(e,{expose:t,emit:n}){const s=K(!1),o=e,r=n;t({toggle:Z});function a(J){return Array.isArray(o.modelValue)&&o.modelValue.indexOf(J)>=0}const i=x(()=>o.label??rt(jt(o.id)));let l=Je("ApiState",void 0);const c=x(()=>gn.call({responseStatus:o.status??(l==null?void 0:l.error.value)},o.id)),u=x(()=>[en.base,c.value?en.invalid:en.valid]),p=K(null),g=K(""),f=K(null),v=K(o.viewCount),m=K([]),k=x(()=>g.value?o.options.filter(J=>o.match(J,g.value)).slice(0,v.value):o.options),S=["Tab","Escape","ArrowDown","ArrowUp","Enter","PageUp","PageDown","Home","End"];function C(J){f.value=J,m.value.indexOf(J)>Math.floor(v.value*.9)&&(v.value+=o.viewCount,ue())}const A=[",",`
`,"	"];function E(J){var ne;const P=(ne=J.clipboardData)==null?void 0:ne.getData("Text");M(P)}function M(J){if(!J)return;const ne=A.some(P=>J.includes(P));if(!o.multiple||!ne){const P=o.options.filter(F=>o.match(F,J));P.length==1&&(ve(P[0]),s.value=!1,$o())}else if(ne){const P=new RegExp("\\r|\\n|\\t|,"),F=J.split(P).filter(ee=>ee.trim()).map(ee=>o.options.find(L=>o.match(L,ee))).filter(ee=>!!ee);if(F.length>0){g.value="",s.value=!1,f.value=null;let ee=Array.from(o.modelValue||[]);F.forEach(L=>{a(L)?ee=ee.filter(W=>W!=L):ee.push(L)}),r("update:modelValue",ee),$o()}}}function q(J){S.indexOf(J.code)||pe()}function I(J){if(!(J.shiftKey||J.ctrlKey||J.altKey)){if(!s.value){J.code=="ArrowDown"&&(s.value=!0,f.value=m.value[0]);return}if(J.code=="Escape")s.value&&(J.stopPropagation(),s.value=!1);else if(J.code=="Tab")s.value=!1;else if(J.code=="Home")f.value=m.value[0],G();else if(J.code=="End")f.value=m.value[m.value.length-1],G();else if(J.code=="ArrowDown"){if(!f.value)f.value=m.value[0];else{const ne=m.value.indexOf(f.value);f.value=ne+1<m.value.length?m.value[ne+1]:m.value[0]}re()}else if(J.code=="ArrowUp"){if(!f.value)f.value=m.value[m.value.length-1];else{const ne=m.value.indexOf(f.value);f.value=ne-1>=0?m.value[ne-1]:m.value[m.value.length-1]}re()}else J.code=="Enter"&&(f.value?(ve(f.value),o.multiple||(J.preventDefault(),$o())):s.value=!1)}}const U={behavior:"smooth",block:"nearest",inline:"nearest",scrollMode:"if-needed"};function G(){setTimeout(()=>{let J=or(`#${o.id}-autocomplete li.active`);J&&J.scrollIntoView(U)},0)}function re(){setTimeout(()=>{let J=or(`#${o.id}-autocomplete li.active`);J&&("scrollIntoViewIfNeeded"in J?J.scrollIntoViewIfNeeded(U):J.scrollIntoView(U))},0)}function Z(J){var ne;s.value=J,J&&(pe(),(ne=p.value)==null||ne.focus())}function pe(){s.value=!0,ue()}function ve(J){if(g.value="",s.value=!1,o.multiple){let ne=Array.from(o.modelValue||[]);a(J)?ne=ne.filter(P=>P!=J):ne.push(J),f.value=null,r("update:modelValue",ne)}else{let ne=J;o.modelValue==J&&(ne=null),r("update:modelValue",ne)}}function ue(){m.value=k.value}return Rt(g,ue),(J,ne)=>(h(),y("div",{id:`${J.id}-autocomplete`},[i.value?(h(),y("label",{key:0,for:`${J.id}-text`,class:"block text-sm font-medium text-gray-700 dark:text-gray-300"},X(i.value),9,yw)):N("",!0),d("div",bw,[Wn(d("input",Qe({ref_key:"txtInput",ref:p,id:`${J.id}-text`,type:"text",role:"combobox","aria-controls":"options","aria-expanded":"false",autocomplete:"off",spellcheck:"false","onUpdate:modelValue":ne[0]||(ne[0]=P=>g.value=P),class:u.value,placeholder:J.multiple||!J.modelValue?J.placeholder:"",onFocus:pe,onKeydown:I,onKeyup:q,onClick:pe,onPaste:E,required:!1},J.$attrs),null,16,ww),[[ma,g.value]]),d("button",{type:"button",onClick:ne[1]||(ne[1]=P=>Z(!s.value)),class:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",tabindex:"-1"},xw),s.value?(h(),y("ul",{key:0,class:"absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",onKeydown:I,id:`${J.id}-options`,role:"listbox"},[(h(!0),y(ze,null,Xe(m.value,P=>(h(),y("li",{class:_([P===f.value?"active bg-indigo-600 text-white":"text-gray-900 dark:text-gray-100","relative cursor-default select-none py-2 pl-3 pr-9"]),onMouseover:F=>C(P),onClick:F=>ve(P),role:"option",tabindex:"-1"},[he(J.$slots,"item",ys(oo(P))),a(P)?(h(),y("span",{key:0,class:_(["absolute inset-y-0 right-0 flex items-center pr-4",P===f.value?"text-white":"text-indigo-600"])},Aw,2)):N("",!0)],42,Sw))),256))],40,Cw)):!J.multiple&&J.modelValue?(h(),y("div",{key:1,onKeydown:I,onClick:ne[2]||(ne[2]=P=>Z(!s.value)),class:"h-8 -mt-8 ml-3 pt-0.5"},[he(J.$slots,"item",ys(oo(J.modelValue)))],32)):N("",!0),c.value?(h(),y("div",Mw,Pw)):N("",!0)]),c.value?(h(),y("p",{key:1,class:"mt-2 text-sm text-red-500",id:`${J.id}-error`},X(c.value),9,Ew)):J.help?(h(),y("p",{key:2,class:"mt-2 text-sm text-gray-500",id:`${J.id}-description`},X(J.help),9,Iw)):N("",!0)],8,vw))}}),Rw=["id","name","value"],zw={class:"block truncate"},jw=Te({__name:"Combobox",props:{id:{},modelValue:{},multiple:{type:Boolean},options:{},values:{},entries:{}},emits:["update:modelValue"],setup(e,{expose:t,emit:n}){const s=e;t({toggle(f){var v;(v=i.value)==null||v.toggle(f)}});const o=n;function r(f){o("update:modelValue",f)}const a=x(()=>s.multiple!=null?s.multiple:Array.isArray(s.modelValue)),i=K();function l(f,v){return!v||f.value.toLowerCase().includes(v.toLowerCase())}const c=x(()=>s.entries||(s.values?s.values.map(f=>({key:f,value:f})):s.options?Object.keys(s.options).map(f=>({key:f,value:s.options[f]})):[])),u=K(a.value?[]:null);function p(){let f=s.modelValue&&typeof s.modelValue=="object"&&!Array.isArray(s.modelValue)?s.modelValue.key:s.modelValue;f==null||f===""?u.value=a.value?[]:null:typeof f=="string"?u.value=c.value.find(v=>v.key===f)||null:Array.isArray(f)&&(u.value=c.value.filter(v=>f.includes(v.key)))}Mt(p);const g=x(()=>u.value==null?"":Array.isArray(u.value)?u.value.map(f=>encodeURIComponent(f.key)).join(","):u.value.key);return(f,v)=>{const m=ye("Autocomplete");return h(),y(ze,null,[d("input",{type:"hidden",id:f.id,name:f.id,value:g.value},null,8,Rw),Ae(m,Qe({ref_key:"input",ref:i,id:f.id,options:c.value,match:l,multiple:a.value},f.$attrs,{modelValue:u.value,"onUpdate:modelValue":[v[0]||(v[0]=k=>u.value=k),r]}),{item:$e(({key:k,value:S})=>[d("span",zw,X(S),1)]),_:1},16,["id","options","multiple","modelValue"])],64)}}}),Vw=Te({__name:"DynamicInput",props:{input:{},modelValue:{},api:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,s=t,o=x(()=>n.input.type||"text"),r="ignore,css,options,meta,allowableValues,allowableEntries,op,prop,type,id,name".split(","),a=x(()=>rn(n.input,r)),i=K(o.value==="file"?null:n.modelValue[n.input.id]);Rt(i,()=>{n.modelValue[n.input.id]=i.value,s("update:modelValue",n.modelValue)});const l=x(()=>{const c=n.modelValue[n.input.id];if(n.input.type!=="file"||!c)return[];if(typeof c=="string")return[{filePath:c,fileName:Gn(c,"/")}];if(!Array.isArray(c)&&typeof c=="object")return c;if(Array.isArray(c)){const u=[];return c.forEach(p=>{typeof p=="string"?u.push({filePath:p,fileName:Gn(p,"/")}):typeof p=="object"&&u.push(p)}),u}});return(c,u)=>{var p,g,f,v,m,k,S,C,A,E,M,q,I,U,G,re,Z,pe,ve,ue,J,ne,P,F,ee,L,W,ce;const Q=ye("SelectInput"),H=ye("CheckboxInput"),de=ye("TagInput"),Ce=ye("Combobox"),R=ye("FileInput"),$=ye("TextareaInput"),O=ye("MarkdownInput"),D=ye("TextInput");return ge(we).component(o.value)?(h(),ke(ei(ge(we).component(o.value)),Qe({key:0,id:c.input.id,modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=fe=>i.value=fe),status:(p=c.api)==null?void 0:p.error,"input-class":(g=c.input.css)==null?void 0:g.input,"label-class":(f=c.input.css)==null?void 0:f.label},a.value),null,16,["id","modelValue","status","input-class","label-class"])):o.value=="select"?(h(),ke(Q,Qe({key:1,id:c.input.id,modelValue:i.value,"onUpdate:modelValue":u[1]||(u[1]=fe=>i.value=fe),status:(v=c.api)==null?void 0:v.error,"input-class":(m=c.input.css)==null?void 0:m.input,"label-class":(k=c.input.css)==null?void 0:k.label,entries:c.input.allowableEntries,values:c.input.allowableValues},a.value),null,16,["id","modelValue","status","input-class","label-class","entries","values"])):o.value=="checkbox"?(h(),ke(H,Qe({key:2,id:c.input.id,modelValue:i.value,"onUpdate:modelValue":u[2]||(u[2]=fe=>i.value=fe),status:(S=c.api)==null?void 0:S.error,"input-class":(C=c.input.css)==null?void 0:C.input,"label-class":(A=c.input.css)==null?void 0:A.label},a.value),null,16,["id","modelValue","status","input-class","label-class"])):o.value=="tag"?(h(),ke(de,Qe({key:3,id:c.input.id,modelValue:i.value,"onUpdate:modelValue":u[3]||(u[3]=fe=>i.value=fe),status:(E=c.api)==null?void 0:E.error,"input-class":(M=c.input.css)==null?void 0:M.input,"label-class":(q=c.input.css)==null?void 0:q.label,allowableValues:c.input.allowableValues,string:((I=c.input.prop)==null?void 0:I.type)=="String"},a.value),null,16,["id","modelValue","status","input-class","label-class","allowableValues","string"])):o.value=="combobox"?(h(),ke(Ce,Qe({key:4,id:c.input.id,modelValue:i.value,"onUpdate:modelValue":u[4]||(u[4]=fe=>i.value=fe),status:(U=c.api)==null?void 0:U.error,"input-class":(G=c.input.css)==null?void 0:G.input,"label-class":(re=c.input.css)==null?void 0:re.label,entries:c.input.allowableEntries,values:c.input.allowableValues},a.value),null,16,["id","modelValue","status","input-class","label-class","entries","values"])):o.value=="file"?(h(),ke(R,Qe({key:5,id:c.input.id,status:(Z=c.api)==null?void 0:Z.error,modelValue:i.value,"onUpdate:modelValue":u[5]||(u[5]=fe=>i.value=fe),"input-class":(pe=c.input.css)==null?void 0:pe.input,"label-class":(ve=c.input.css)==null?void 0:ve.label,files:l.value},a.value),null,16,["id","status","modelValue","input-class","label-class","files"])):o.value=="textarea"?(h(),ke($,Qe({key:6,id:c.input.id,modelValue:i.value,"onUpdate:modelValue":u[6]||(u[6]=fe=>i.value=fe),status:(ue=c.api)==null?void 0:ue.error,"input-class":(J=c.input.css)==null?void 0:J.input,"label-class":(ne=c.input.css)==null?void 0:ne.label},a.value),null,16,["id","modelValue","status","input-class","label-class"])):o.value=="MarkdownInput"?(h(),ke(O,Qe({key:7,id:c.input.id,modelValue:i.value,"onUpdate:modelValue":u[7]||(u[7]=fe=>i.value=fe),status:(P=c.api)==null?void 0:P.error,"input-class":(F=c.input.css)==null?void 0:F.input,"label-class":(ee=c.input.css)==null?void 0:ee.label},a.value),null,16,["id","modelValue","status","input-class","label-class"])):(h(),ke(D,Qe({key:8,type:o.value,id:c.input.id,modelValue:i.value,"onUpdate:modelValue":u[8]||(u[8]=fe=>i.value=fe),status:(L=c.api)==null?void 0:L.error,"input-class":(W=c.input.css)==null?void 0:W.input,"label-class":(ce=c.input.css)==null?void 0:ce.label},a.value),null,16,["type","id","modelValue","status","input-class","label-class"]))}}}),Ow={class:"lookup-field"},Dw=["name","value"],Bw={key:0,class:"flex justify-between"},Fw=["for"],Hw={key:0,class:"flex items-center"},Nw={class:"text-sm text-gray-500 dark:text-gray-400 pr-1"},$w=d("span",{class:"sr-only"},"Clear",-1),Uw=d("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),Ww=[$w,Uw],qw={key:1,class:"mt-1 relative"},Gw={class:"w-full inline-flex truncate"},Qw={class:"text-blue-700 dark:text-blue-300 flex cursor-pointer"},Jw=d("span",{class:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},[d("svg",{class:"h-5 w-5 text-gray-400 dark:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1),Kw=["id"],Zw=["id"],Yw=Te({__name:"LookupInput",props:{id:{},status:{},input:{},metadataType:{},modelValue:{},label:{},labelClass:{},help:{}},emits:["update:modelValue"],setup(e,{emit:t}){const{config:n}=Yn(),{metadataApi:s}=Ft(),o=e,r=t,a=x(()=>o.id||o.input.id),i=x(()=>o.label??rt(jt(a.value)));let l=Je("ApiState",void 0);const c=Je("client"),u=x(()=>gn.call({responseStatus:o.status??(l==null?void 0:l.error.value)},a.value)),p=K(""),g=K(""),f=x(()=>Ne(o.modelValue,a.value)),v=x(()=>zt(o.metadataType).find(M=>M.name.toLowerCase()==a.value.toLowerCase())),m=x(()=>{var M,q,I;return((I=qt((q=(M=v.value)==null?void 0:M.ref)==null?void 0:q.model))==null?void 0:I.icon)||n.value.tableIcon});function k(M){return M?o.input.options?Object.assign({},M,Cr(o.input.options,{input:o.input,$typeFields:zt(o.metadataType).map(q=>q.name),...we.config.scopeWhitelist})):M:null}const S=x(()=>{var M,q,I,U;return k(((M=v.value)==null?void 0:M.ref)??(o.input.type=="lookup"?{model:o.metadataType.name,refId:((q=Ms(o.metadataType))==null?void 0:q.name)??"id",refLabel:(U=(I=o.metadataType.properties)==null?void 0:I.find(G=>G.type=="String"&&!G.isPrimaryKey))==null?void 0:U.name}:null))});let C;function A(M){if(M){if(C==null){console.warn("No ModalProvider required by LookupInput");return}C.openModal({name:"ModalLookup",ref:M},q=>{if(console.debug("openModal",p.value," -> ",q,jo.setRefValue(M,q),M),q){const I=Ne(q,M.refId);p.value=jo.setRefValue(M,q)||I;const U=ge(o.modelValue);U[a.value]=I,r("update:modelValue",U)}})}}function E(){o.modelValue[a.value]=null,p.value=""}return Mt(async()=>{var M,q;C=Je("ModalProvider",void 0);const I=o.modelValue;o.modelValue[a.value]||(o.modelValue[a.value]=null);const U=v.value,G=S.value;if(!U||!G){console.warn(`No RefInfo for property '${a.value}'`);return}p.value="";let re=G.selfId==null?Ne(I,U.name):Ne(I,G.selfId);if(ro(re)&&(re=Ne(I,G.refId)),re==null)return;const Z=(M=s.value)==null?void 0:M.operations.find(pe=>{var ve;return((ve=pe.dataModel)==null?void 0:ve.name)==G.model});if(console.debug("LookupInput queryOp",Z),Z!=null){const pe=Ne(I,U.name);if(ro(pe))return;if(p.value=`${pe}`,g.value=U.name,G.refLabel!=null){const ve=zt(o.metadataType).filter(ne=>ne.type==G.model);ve.length||console.warn(`Could not find ${G.model} Property on ${o.metadataType.name}`);const ue=ve.map(ne=>Ne(I,ne.name)).filter(ne=>!!ne),J=ue.length<=1?ue[0]:ue.find(ne=>ne[G.refId??"id"]==re);if(J!=null){let ne=Ne(J,G.refLabel);ne&&(p.value=`${ne}`,jo.setValue(G.model,re,G.refLabel,ne))}else{const ne=((q=U.attributes)==null?void 0:q.some(F=>F.name=="Computed"))==!0;let P=await jo.getOrFetchValue(c,s.value,G.model,G.refId,G.refLabel,ne,re);p.value=P||`${G.model}: ${p.value}`}}}}),(M,q)=>{const I=ye("Icon");return h(),y("div",Ow,[d("input",{type:"hidden",name:a.value,value:f.value},null,8,Dw),i.value?(h(),y("div",Bw,[d("label",{for:a.value,class:_(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${M.labelClass??""}`)},X(i.value),11,Fw),f.value?(h(),y("div",Hw,[d("span",Nw,X(f.value),1),d("button",{onClick:E,type:"button",title:"clear",class:"mr-1 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"},Ww)])):N("",!0)])):N("",!0),S.value?(h(),y("div",qw,[d("button",{type:"button",class:"lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",onClick:q[0]||(q[0]=U=>A(S.value)),"aria-haspopup":"listbox","aria-expanded":"true","aria-labelledby":"listbox-label"},[d("span",Gw,[d("span",Qw,[Ae(I,{class:"mr-1 w-5 h-5",image:m.value},null,8,["image"]),d("span",null,X(p.value),1)])]),Jw])])):N("",!0),u.value?(h(),y("p",{key:2,class:"mt-2 text-sm text-red-500",id:`${a.value}-error`},X(u.value),9,Kw)):M.help?(h(),y("p",{key:3,class:"mt-2 text-sm text-gray-500",id:`${a.value}-description`},X(M.help),9,Zw)):N("",!0)])}}}),Xw=Te({__name:"AutoFormFields",props:{modelValue:{},type:{},metaType:{},api:{},formLayout:{},configureField:{},configureFormLayout:{},hideSummary:{type:Boolean},flexClass:{default:"flex flex-1 flex-col justify-between"},divideClass:{default:"divide-y divide-gray-200 px-4 sm:px-6"},spaceClass:{default:"space-y-6 pt-6 pb-5"},fieldsetClass:{default:"grid grid-cols-12 gap-6"}},emits:["update:modelValue"],setup(e,{expose:t,emit:n}){const s=e,o=n;t({forceUpdate:r,props:s,updateValue:i});function r(){var C;const A=st();(C=A==null?void 0:A.proxy)==null||C.$forceUpdate()}function a(C,A){i(C.id,Ne(A,C.id))}function i(C,A){s.modelValue[C]=A,o("update:modelValue",s.modelValue),r()}const{metadataApi:l,apiOf:c,typeOf:u,typeOfRef:p,createFormLayout:g}=Ft(),f=x(()=>s.type||Zn(s.modelValue)),v=x(()=>s.metaType??u(f.value)),m=x(()=>{var C,A;return p((A=(C=l.value)==null?void 0:C.operations.find(E=>E.request.name==f.value))==null?void 0:A.dataModel)||v.value});function k(){const C=v.value;if(!C){if(s.formLayout){const U=s.formLayout.map(G=>{const re={name:G.id,type:Vg(G.type)},Z=Object.assign({prop:re},G);return s.configureField&&s.configureField(Z),Z});return s.configureFormLayout&&s.configureFormLayout(U),U}throw new Error(`MetadataType for ${f.value} not found`)}const A=zt(C),E=m.value,M=s.formLayout?Array.from(s.formLayout):g(C),q=[],I=c(C.name);return M.forEach(U=>{var G;const re=A.find(ve=>ve.name==U.name);if(U.ignore)return;const Z=((G=E==null?void 0:E.properties)==null?void 0:G.find(ve=>{var ue;return ve.name.toLowerCase()==((ue=U.name)==null?void 0:ue.toLowerCase())}))??re,pe=Object.assign({prop:Z,op:I},U);s.configureField&&s.configureField(pe),q.push(pe)}),s.configureFormLayout&&s.configureFormLayout(q),q}const S=()=>k().filter(C=>C.type!="hidden").map(C=>C.id);return(C,A)=>{var E;const M=ye("ErrorSummary"),q=ye("LookupInput"),I=ye("DynamicInput");return h(),y(ze,null,[C.hideSummary?N("",!0):(h(),ke(M,{key:0,status:(E=C.api)==null?void 0:E.error,except:S()},null,8,["status","except"])),d("div",{class:_(C.flexClass)},[d("div",{class:_(C.divideClass)},[d("div",{class:_(C.spaceClass)},[d("fieldset",{class:_(C.fieldsetClass)},[(h(!0),y(ze,null,Xe(k(),U=>{var G,re,Z;return h(),y("div",{key:U.id,class:_(["w-full",((G=U.css)==null?void 0:G.field)??(U.type=="textarea"?"col-span-12":"col-span-12 xl:col-span-6"+(U.type=="checkbox"?" flex items-center":"")),U.type=="hidden"?"hidden":""])},[U.type==="lookup"||((re=U.prop)==null?void 0:re.ref)!=null&&U.type!="file"&&!U.prop.isPrimaryKey?(h(),ke(q,{key:0,metadataType:m.value,input:U,modelValue:C.modelValue,"onUpdate:modelValue":pe=>a(U,pe),status:(Z=C.api)==null?void 0:Z.error},null,8,["metadataType","input","modelValue","onUpdate:modelValue","status"])):(h(),ke(I,{key:1,input:U,modelValue:C.modelValue,"onUpdate:modelValue":A[0]||(A[0]=pe=>C.$emit("update:modelValue",pe)),api:C.api},null,8,["input","modelValue","api"]))],2)}),128))],2)],2)],2)],2)],64)}}});function ko(e){const t=K(!1),n=K(),s=K(),o=Je("client");function r({message:v,errorCode:m,fieldName:k,errors:S}){return m||(m="Exception"),S||(S=[]),n.value=k?new gs({errorCode:m,message:v,errors:[new ya({fieldName:k,errorCode:m,message:v})]}):new gs({errorCode:m,message:v,errors:S})}function a({fieldName:v,message:m,errorCode:k}){if(k||(k="Exception"),!n.value)r({fieldName:v,message:m,errorCode:k});else{let S=new gs(n.value);S.errors=[...(S.errors||[]).filter(C=>{var A;return((A=C.fieldName)==null?void 0:A.toLowerCase())!==(v==null?void 0:v.toLowerCase())}),new ya({fieldName:v,message:m,errorCode:k})],n.value=S}}async function i(v,m,k){t.value=!0;let S=await o.api(ls(v),m,k);return t.value=!1,s.value=S.response,n.value=S.error,S}async function l(v,m,k){t.value=!0;let S=await o.apiVoid(ls(v),m,k);return t.value=!1,s.value=S.response,n.value=S.error,S}async function c(v,m,k,S){t.value=!0;let C=await o.apiForm(ls(v),m,k,S);return t.value=!1,s.value=C.response,n.value=C.error,C}async function u(v,m,k,S){t.value=!0;let C=await o.apiFormVoid(ls(v),m,k,S);return t.value=!1,s.value=C.response,n.value=C.error,C}async function p(v,m,k,S){return Jc(o,v,m,k,S)}function g(v,m){const k=K(new it),S=Kc(async C=>{k.value=await o.api(C)},m==null?void 0:m.delayMs);return to(async()=>{const C=v(),A=ui(Sr(C));A&&(k.value=new it({response:A})),(m==null?void 0:m.delayMs)===0?k.value=await o.api(C):S(C)}),(async()=>k.value=await o.api(v(),m==null?void 0:m.args,m==null?void 0:m.method))(),k}let f={setError:r,addFieldError:a,loading:t,error:n,api:i,apiVoid:l,apiForm:c,apiFormVoid:u,swr:p,swrEffect:g,unRefs:ls,setRef:Gc};return hn("ApiState",f),f}const ek={key:0},tk={class:"text-red-700"},nk=d("b",null,"type",-1),sk={key:0},ok={key:2},rk=["innerHTML"],ak=d("input",{type:"submit",class:"hidden"},null,-1),ik={class:"flex justify-end"},lk=d("div",null,null,-1),uk={key:2,class:"relative z-10","aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"},ck=d("div",{class:"fixed inset-0"},null,-1),dk={class:"fixed inset-0 overflow-hidden"},pk={class:"flex min-h-0 flex-1 flex-col overflow-auto"},fk={class:"flex-1"},hk={class:"bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6"},mk={class:"flex items-start justify-between space-x-3"},gk={class:"space-y-1"},vk={key:0},yk={key:2},bk=["innerHTML"],wk={class:"flex h-7 items-center"},kk={class:"flex justify-end"},xk=Te({__name:"AutoForm",props:{type:{},modelValue:{},heading:{},subHeading:{},showLoading:{type:Boolean,default:!0},jsconfig:{default:"eccn,edv"},formStyle:{default:"card"},metaType:{},configureField:{},configureFormLayout:{},panelClass:{},bodyClass:{},formClass:{},innerFormClass:{},headerClass:{default:"p-6"},buttonsClass:{},headingClass:{},subHeadingClass:{},submitLabel:{default:"Submit"},allowSubmit:{}},emits:["success","error","update:modelValue","done"],setup(e,{expose:t,emit:n}){const s=e,o=n,r=K(),a=K(1),i=K();function l(){var H;a.value++,Z.value=re();const de=st();(H=de==null?void 0:de.proxy)==null||H.$forceUpdate()}async function c(H){Object.assign(Z.value,H),l(),await Ut(()=>null)}hn("ModalProvider",{openModal:g});const u=K(),p=K();function g(H,de){u.value=H,p.value=de}async function f(H){p.value&&p.value(H),u.value=void 0,p.value=void 0}const v=ko(),{getTypeName:m}=Zc(),{typeOf:k,createDto:S}=Ft(),C=K(new it),A=x(()=>s.panelClass||ut.panelClass(s.formStyle)),E=x(()=>s.formClass||s.formStyle=="card"?"shadow sm:rounded-md":Bs.formClass),M=x(()=>s.headingClass||ut.headingClass(s.formStyle)),q=x(()=>s.subHeadingClass||ut.subHeadingClass(s.formStyle)),I=x(()=>typeof s.buttonsClass=="string"?s.buttonsClass:ut.buttonsClass),U=x(()=>{var H;return s.type?m(s.type):(H=s.modelValue)!=null&&H.getTypeName?s.modelValue.getTypeName():null}),G=x(()=>s.metaType??k(U.value)),re=()=>s.modelValue||ue(),Z=K(re()),pe=x(()=>v.loading.value),ve=x(()=>{var H;return s.heading!=null?s.heading:((H=G.value)==null?void 0:H.description)||rt(U.value)});t({forceUpdate:l,props:s,setModel:c,formFields:r,submit:ne,close:ce,model:Z});function ue(){return typeof s.type=="string"?S(s.type):s.type?new s.type:s.modelValue}async function J(H){if(!H||H.tagName!="FORM"){console.error("Not a valid form",H);return}const de=ue();let Ce=bt(de==null?void 0:de.getMethod,O=>typeof O=="function"?O():null)||"POST",R=bt(de==null?void 0:de.createResponse,O=>typeof O=="function"?O():null)==null;const $=s.jsconfig;if(We.hasRequestBody(Ce)){let O=new de.constructor,D=new FormData(H);R?C.value=await v.apiFormVoid(O,D,{jsconfig:$}):C.value=await v.apiForm(O,D,{jsconfig:$})}else{let O=new de.constructor(jm(Z.value));console.debug("AutoForm.submit",O),R?C.value=await v.apiVoid(O,{jsconfig:$}):C.value=await v.api(O,{jsconfig:$})}C.value.succeeded?(o("success",C.value.response),ce()):o("error",C.value.error)}async function ne(){J(i.value)}function P(H){o("update:modelValue",H)}function F(){o("done")}const ee=K(!1),L=K(""),W={entering:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-full",to:"translate-x-0"},leaving:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-0",to:"translate-x-full"}};Rt(ee,()=>{_n(W,L,ee.value),ee.value||setTimeout(F,700)}),ee.value=!0;function ce(){s.formStyle=="slideOver"?ee.value=!1:F()}const Q=H=>{H.key==="Escape"&&ce()};return Mt(()=>window.addEventListener("keydown",Q)),sn(()=>window.removeEventListener("keydown",Q)),(H,de)=>{var Ce,R,$,O,D,fe,b,w,T,V,j;const z=ye("AutoFormFields"),ae=ye("FormLoading"),se=ye("PrimaryButton"),oe=ye("CloseButton"),Y=ye("SecondaryButton"),Se=ye("ModalLookup");return h(),y("div",null,[G.value?H.formStyle=="card"?(h(),y("div",{key:1,class:_(A.value)},[d("form",{ref_key:"elForm",ref:i,onSubmit:de[0]||(de[0]=gt(le=>J(le.target),["prevent"])),autocomplete:"off",class:_(H.innerFormClass)},[d("div",{class:_(H.bodyClass)},[d("div",{class:_(H.headerClass)},[H.$slots.heading?(h(),y("div",sk,[he(H.$slots,"heading")])):(h(),y("h3",{key:1,class:_(M.value)},X(ve.value),3)),H.$slots.subheading?(h(),y("div",ok,[he(H.$slots,"subheading")])):H.subHeading?(h(),y("p",{key:3,class:_(q.value)},X(H.subHeading),3)):(Ce=G.value)!=null&&Ce.notes?(h(),y("p",{key:4,class:_(["notes",q.value]),innerHTML:(R=G.value)==null?void 0:R.notes},null,10,rk)):N("",!0)],2),he(H.$slots,"header",{instance:($=st())==null?void 0:$.exposed,model:Z.value}),ak,(h(),ke(z,{ref_key:"formFields",ref:r,key:a.value,type:H.type,modelValue:Z.value,"onUpdate:modelValue":P,api:C.value,configureField:H.configureField,configureFormLayout:H.configureFormLayout},null,8,["type","modelValue","api","configureField","configureFormLayout"])),he(H.$slots,"footer",{instance:(O=st())==null?void 0:O.exposed,model:Z.value})],2),he(H.$slots,"buttons",{},()=>{var le,xe;return[d("div",{class:_(I.value)},[d("div",null,[he(H.$slots,"leftbuttons",{instance:(le=st())==null?void 0:le.exposed,model:Z.value})]),d("div",null,[H.showLoading&&pe.value?(h(),ke(ae,{key:0})):N("",!0)]),d("div",ik,[lk,Ae(se,{disabled:pe.value||(H.allowSubmit?!H.allowSubmit(Z.value):!1)},{default:$e(()=>[Fe(X(H.submitLabel),1)]),_:1},8,["disabled"]),he(H.$slots,"rightbuttons",{instance:(xe=st())==null?void 0:xe.exposed,model:Z.value})])],2)]})],34)],2)):(h(),y("div",uk,[ck,d("div",dk,[d("div",{onMousedown:ce,class:"absolute inset-0 overflow-hidden"},[d("div",{onMousedown:de[2]||(de[2]=gt(()=>{},["stop"])),class:"pointer-events-none fixed inset-y-0 right-0 flex pl-10"},[d("div",{class:_(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",L.value])},[d("form",{ref_key:"elForm",ref:i,class:_(E.value),onSubmit:de[1]||(de[1]=gt(le=>J(le.target),["prevent"]))},[d("div",pk,[d("div",fk,[d("div",hk,[d("div",mk,[d("div",gk,[H.$slots.heading?(h(),y("div",vk,[he(H.$slots,"heading")])):(h(),y("h3",{key:1,class:_(M.value)},X(ve.value),3)),H.$slots.subheading?(h(),y("div",yk,[he(H.$slots,"subheading")])):H.subHeading?(h(),y("p",{key:3,class:_(q.value)},X(H.subHeading),3)):(D=G.value)!=null&&D.notes?(h(),y("p",{key:4,class:_(["notes",q.value]),innerHTML:(fe=G.value)==null?void 0:fe.notes},null,10,bk)):N("",!0)]),d("div",wk,[Ae(oe,{"button-class":"bg-gray-50 dark:bg-gray-900",onClose:ce})])])]),he(H.$slots,"header",{instance:(b=st())==null?void 0:b.exposed,model:Z.value}),(h(),ke(z,{ref_key:"formFields",ref:r,key:a.value,type:H.type,modelValue:Z.value,"onUpdate:modelValue":P,api:C.value,configureField:H.configureField,configureFormLayout:H.configureFormLayout},null,8,["type","modelValue","api","configureField","configureFormLayout"])),he(H.$slots,"footer",{instance:(w=st())==null?void 0:w.exposed,model:Z.value})])]),d("div",{class:_(I.value)},[d("div",null,[he(H.$slots,"leftbuttons",{instance:(T=st())==null?void 0:T.exposed,model:Z.value})]),d("div",null,[H.showLoading&&pe.value?(h(),ke(ae,{key:0})):N("",!0)]),d("div",kk,[Ae(Y,{onClick:ce,disabled:pe.value},{default:$e(()=>[Fe("Cancel")]),_:1},8,["disabled"]),Ae(se,{class:"ml-4",disabled:pe.value||(H.allowSubmit?!H.allowSubmit(Z.value):!1)},{default:$e(()=>[Fe(X(H.submitLabel),1)]),_:1},8,["disabled"]),he(H.$slots,"rightbuttons",{instance:(V=st())==null?void 0:V.exposed,model:Z.value})])],2)],34)],2)],32)],32)])])):(h(),y("div",ek,[d("p",tk,[Fe("Could not create form for unknown "),nk,Fe(" "+X(U.value),1)])])),((j=u.value)==null?void 0:j.name)=="ModalLookup"&&u.value.ref?(h(),ke(Se,{key:3,"ref-info":u.value.ref,onDone:f,configureField:H.configureField},null,8,["ref-info","configureField"])):N("",!0)])}}}),Ck={key:0},Sk={class:"text-red-700"},Tk=d("b",null,"type",-1),Ak={key:0},Mk={key:2},_k=["innerHTML"],Pk={class:"flex justify-end"},Ek={key:2,class:"relative z-10","aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"},Ik=d("div",{class:"fixed inset-0"},null,-1),Lk={class:"fixed inset-0 overflow-hidden"},Rk={class:"flex min-h-0 flex-1 flex-col overflow-auto"},zk={class:"flex-1"},jk={class:"bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6"},Vk={class:"flex items-start justify-between space-x-3"},Ok={class:"space-y-1"},Dk={key:0},Bk={key:2},Fk=["innerHTML"],Hk={class:"flex h-7 items-center"},Nk={class:"flex justify-end"},$k=Te({__name:"AutoCreateForm",props:{type:{},formStyle:{default:"slideOver"},panelClass:{},formClass:{},headingClass:{},subHeadingClass:{},buttonsClass:{},heading:{},subHeading:{},autosave:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},showCancel:{type:Boolean,default:!0},configureField:{},configureFormLayout:{}},emits:["done","save","error"],setup(e,{expose:t,emit:n}){const s=e,o=n,r=K(),a=K(1);function i(){var Q,H;a.value++,(Q=r.value)==null||Q.forceUpdate();const de=st();(H=de==null?void 0:de.proxy)==null||H.$forceUpdate()}function l(Q){Object.assign(M.value,Q),i()}function c(Q){}hn("ModalProvider",{openModal:g});const u=K(),p=K();function g(Q,H){u.value=Q,p.value=H}async function f(Q){p.value&&p.value(Q),u.value=void 0,p.value=void 0}const{typeOf:v,typeProperties:m,Crud:k,createDto:S,formValues:C}=Ft(),A=x(()=>Zn(s.type)),E=x(()=>v(A.value)),M=K(typeof s.type=="string"?S(s.type):s.type?new s.type:null);t({forceUpdate:i,props:s,setModel:l,formFields:r,model:M});const q=x(()=>s.panelClass||ut.panelClass(s.formStyle)),I=x(()=>s.formClass||ut.formClass(s.formStyle)),U=x(()=>s.headingClass||ut.headingClass(s.formStyle)),G=x(()=>s.subHeadingClass||ut.subHeadingClass(s.formStyle)),re=x(()=>s.buttonsClass||ut.buttonsClass),Z=x(()=>k.model(E.value)),pe=x(()=>{var Q;return s.heading||((Q=v(A.value))==null?void 0:Q.description)||(Z.value?`New ${rt(Z.value)}`:rt(A.value))}),ve=K(new it);let ue=ko(),J=x(()=>ue.loading.value);we.interceptors.has("AutoCreateForm.new")&&we.interceptors.invoke("AutoCreateForm.new",{props:s,model:M});async function ne(Q){var H,de;let Ce=Q.target;if(!s.autosave){o("save",new M.value.constructor(C(Ce,m(E.value))));return}let R=bt((H=M.value)==null?void 0:H.getMethod,O=>typeof O=="function"?O():null)||"POST",$=bt((de=M.value)==null?void 0:de.createResponse,O=>typeof O=="function"?O():null)==null;if(We.hasRequestBody(R)){let O=new M.value.constructor,D=new FormData(Ce);$?ve.value=await ue.apiFormVoid(O,D,{jsconfig:"eccn"}):ve.value=await ue.apiForm(O,D,{jsconfig:"eccn"})}else{let O=C(Ce,m(E.value)),D=new M.value.constructor(O);$?ve.value=await ue.apiVoid(D,{jsconfig:"eccn"}):ve.value=await ue.api(D,{jsconfig:"eccn"})}ve.value.succeeded?(Ce.reset(),o("save",ve.value.response)):o("error",ve.value.error)}function P(){o("done")}const F=K(!1),ee=K(""),L={entering:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-full",to:"translate-x-0"},leaving:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-0",to:"translate-x-full"}};Rt(F,()=>{_n(L,ee,F.value),F.value||setTimeout(P,700)}),F.value=!0;function W(){s.formStyle=="slideOver"?F.value=!1:P()}const ce=Q=>{Q.key==="Escape"&&W()};return Mt(()=>window.addEventListener("keydown",ce)),sn(()=>window.removeEventListener("keydown",ce)),(Q,H)=>{var de,Ce,R,$,O,D,fe,b,w;const T=ye("AutoFormFields"),V=ye("FormLoading"),j=ye("SecondaryButton"),z=ye("PrimaryButton"),ae=ye("CloseButton"),se=ye("ModalLookup");return h(),y("div",null,[E.value?Q.formStyle=="card"?(h(),y("div",{key:1,class:_(q.value)},[d("form",{onSubmit:gt(ne,["prevent"])},[d("div",{class:_(I.value)},[d("div",null,[Q.$slots.heading?(h(),y("div",Ak,[he(Q.$slots,"heading")])):(h(),y("h3",{key:1,class:_(U.value)},X(pe.value),3)),Q.$slots.subheading?(h(),y("div",Mk,[he(Q.$slots,"subheading")])):Q.subHeading?(h(),y("p",{key:3,class:_(G.value)},X(Q.subHeading),3)):(de=E.value)!=null&&de.notes?(h(),y("p",{key:4,class:_(["notes",G.value]),innerHTML:(Ce=E.value)==null?void 0:Ce.notes},null,10,_k)):N("",!0)]),he(Q.$slots,"header",{formInstance:(R=st())==null?void 0:R.exposed,model:M.value}),(h(),ke(T,{ref_key:"formFields",ref:r,key:a.value,modelValue:M.value,"onUpdate:modelValue":c,api:ve.value,configureField:Q.configureField,configureFormLayout:Q.configureFormLayout},null,8,["modelValue","api","configureField","configureFormLayout"])),he(Q.$slots,"footer",{formInstance:($=st())==null?void 0:$.exposed,model:M.value})],2),d("div",{class:_(re.value)},[d("div",null,[Q.showLoading&&ge(J)?(h(),ke(V,{key:0})):N("",!0)]),d("div",Pk,[Q.showCancel?(h(),ke(j,{key:0,onClick:W,disabled:ge(J)},{default:$e(()=>[Fe("Cancel")]),_:1},8,["disabled"])):N("",!0),Ae(z,{type:"submit",class:"ml-4",disabled:ge(J)},{default:$e(()=>[Fe("Save")]),_:1},8,["disabled"])])],2)],32)],2)):(h(),y("div",Ek,[Ik,d("div",Lk,[d("div",{onMousedown:W,class:"absolute inset-0 overflow-hidden"},[d("div",{onMousedown:H[0]||(H[0]=gt(()=>{},["stop"])),class:"pointer-events-none fixed inset-y-0 right-0 flex pl-10"},[d("div",{class:_(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",ee.value])},[d("form",{class:_(I.value),onSubmit:gt(ne,["prevent"])},[d("div",Rk,[d("div",zk,[d("div",jk,[d("div",Vk,[d("div",Ok,[Q.$slots.heading?(h(),y("div",Dk,[he(Q.$slots,"heading")])):(h(),y("h3",{key:1,class:_(U.value)},X(pe.value),3)),Q.$slots.subheading?(h(),y("div",Bk,[he(Q.$slots,"subheading")])):Q.subHeading?(h(),y("p",{key:3,class:_(G.value)},X(Q.subHeading),3)):(O=E.value)!=null&&O.notes?(h(),y("p",{key:4,class:_(["notes",G.value]),innerHTML:(D=E.value)==null?void 0:D.notes},null,10,Fk)):N("",!0)]),d("div",Hk,[Ae(ae,{"button-class":"bg-gray-50 dark:bg-gray-900",onClose:W})])])]),he(Q.$slots,"header",{formInstance:(fe=st())==null?void 0:fe.exposed,model:M.value}),(h(),ke(T,{ref_key:"formFields",ref:r,key:a.value,modelValue:M.value,"onUpdate:modelValue":c,api:ve.value,configureField:Q.configureField,configureFormLayout:Q.configureFormLayout},null,8,["modelValue","api","configureField","configureFormLayout"])),he(Q.$slots,"footer",{formInstance:(b=st())==null?void 0:b.exposed,model:M.value})])]),d("div",{class:_(re.value)},[d("div",null,[Q.showLoading&&ge(J)?(h(),ke(V,{key:0})):N("",!0)]),d("div",Nk,[Q.showCancel?(h(),ke(j,{key:0,onClick:W,disabled:ge(J)},{default:$e(()=>[Fe("Cancel")]),_:1},8,["disabled"])):N("",!0),Ae(z,{type:"submit",class:"ml-4",disabled:ge(J)},{default:$e(()=>[Fe("Save")]),_:1},8,["disabled"])])],2)],34)],2)],32)],32)])])):(h(),y("div",Ck,[d("p",Sk,[Fe("Could not create form for unknown "),Tk,Fe(" "+X(A.value),1)])])),((w=u.value)==null?void 0:w.name)=="ModalLookup"&&u.value.ref?(h(),ke(se,{key:3,"ref-info":u.value.ref,onDone:f,configureField:Q.configureField},null,8,["ref-info","configureField"])):N("",!0)])}}}),Uk={key:0},Wk={class:"text-red-700"},qk=d("b",null,"type",-1),Gk={key:0},Qk={key:2},Jk=["innerHTML"],Kk={class:"flex justify-end"},Zk={key:2,class:"relative z-10","aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"},Yk=d("div",{class:"fixed inset-0"},null,-1),Xk={class:"fixed inset-0 overflow-hidden"},e2={class:"flex min-h-0 flex-1 flex-col overflow-auto"},t2={class:"flex-1"},n2={class:"bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6"},s2={class:"flex items-start justify-between space-x-3"},o2={class:"space-y-1"},r2={key:0},a2={key:2},i2=["innerHTML"],l2={class:"flex h-7 items-center"},u2={class:"flex justify-end"},c2=Te({__name:"AutoEditForm",props:{modelValue:{},type:{},deleteType:{},formStyle:{default:"slideOver"},panelClass:{},formClass:{},headingClass:{},subHeadingClass:{},heading:{},subHeading:{},autosave:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},configureField:{},configureFormLayout:{}},emits:["done","save","delete","error"],setup(e,{expose:t,emit:n}){const s=e,o=n,r=K(),a=K(1);function i(){var D;a.value++,G.value=U();const fe=st();(D=fe==null?void 0:fe.proxy)==null||D.$forceUpdate()}function l(D){Object.assign(G.value,D)}function c(D){}hn("ModalProvider",{openModal:g});const u=K(),p=K();function g(D,fe){u.value=D,p.value=fe}async function f(D){p.value&&p.value(D),u.value=void 0,p.value=void 0}const{typeOf:v,apiOf:m,typeProperties:k,createFormLayout:S,getPrimaryKey:C,Crud:A,createDto:E,formValues:M}=Ft(),q=x(()=>Zn(s.type)),I=x(()=>v(q.value)),U=()=>typeof s.type=="string"?E(s.type,Qs(s.modelValue)):s.type?new s.type(Qs(s.modelValue)):null,G=K(U());t({forceUpdate:i,props:s,setModel:l,formFields:r,model:G});const re=x(()=>s.panelClass||ut.panelClass(s.formStyle)),Z=x(()=>s.formClass||ut.formClass(s.formStyle)),pe=x(()=>s.headingClass||ut.headingClass(s.formStyle)),ve=x(()=>s.subHeadingClass||ut.subHeadingClass(s.formStyle)),ue=x(()=>A.model(I.value)),J=x(()=>{var D;return s.heading||((D=v(q.value))==null?void 0:D.description)||(ue.value?`Update ${rt(ue.value)}`:rt(q.value))}),ne=K(new it);let P=Object.assign({},Qs(s.modelValue));we.interceptors.has("AutoEditForm.new")&&we.interceptors.invoke("AutoEditForm.new",{props:s,model:G,origModel:P});let F=ko(),ee=x(()=>F.loading.value);const L=()=>bt(v(A.model(I.value)),D=>C(D));function W(D){const{op:fe,prop:b}=D;fe&&(A.isPatch(fe)||A.isUpdate(fe))&&(D.disabled=b==null?void 0:b.isPrimaryKey),s.configureField&&s.configureField(D)}async function ce(D){var fe,b;let w=D.target;if(!s.autosave){o("save",new G.value.constructor(M(w,k(I.value))));return}let T=bt((fe=G.value)==null?void 0:fe.getMethod,z=>typeof z=="function"?z():null)||"POST",V=bt((b=G.value)==null?void 0:b.createResponse,z=>typeof z=="function"?z():null)==null,j=L();if(We.hasRequestBody(T)){let z=new G.value.constructor,ae=Ne(s.modelValue,j.name),se=new FormData(w);j&&!Array.from(se.keys()).some(le=>le.toLowerCase()==j.name.toLowerCase())&&se.append(j.name,ae);let oe=[];const Y=q.value&&m(q.value);if(Y&&A.isPatch(Y)){let le=S(I.value),xe={};if(j&&(xe[j.name]=ae),le.forEach(be=>{let Ie=be.id,Oe=Ne(P,Ie);if(j&&j.name.toLowerCase()===Ie.toLowerCase())return;let Ve=se.get(Ie);we.interceptors.has("AutoEditForm.save.formLayout")&&we.interceptors.invoke("AutoEditForm.save.formLayout",{origValue:Oe,formLayout:le,input:be,newValue:Ve});let te=Ve!=null,me=be.type==="checkbox"?te!==!!Oe:be.type==="file"?te:Ve!=Oe;!Ve&&!Oe&&(me=!1),me&&(Ve?xe[Ie]=Ve:be.type!=="file"&&oe.push(Ie))}),we.interceptors.has("AutoEditForm.save")&&we.interceptors.invoke("AutoEditForm.save",{origModel:P,formLayout:le,dirtyValues:xe}),Array.from(se.keys()).filter(be=>!xe[be]).forEach(be=>se.delete(be)),Array.from(se.keys()).filter(be=>be.toLowerCase()!=j.name.toLowerCase()).length==0&&oe.length==0){$();return}}const Se=oe.length>0?{jsconfig:"eccn",reset:oe}:{jsconfig:"eccn"};V?ne.value=await F.apiFormVoid(z,se,Se):ne.value=await F.apiForm(z,se,Se)}else{let z=M(w,k(I.value));j&&!Ne(z,j.name)&&(z[j.name]=Ne(s.modelValue,j.name));let ae=new G.value.constructor(z);V?ne.value=await F.apiVoid(ae,{jsconfig:"eccn"}):ne.value=await F.api(ae,{jsconfig:"eccn"})}ne.value.succeeded?(w.reset(),o("save",ne.value.response)):o("error",ne.value.error)}async function Q(D){let fe=L();const b=fe?Ne(s.modelValue,fe.name):null;if(!b){console.error(`Could not find Primary Key for Type ${q.value} (${ue.value})`);return}const w={[fe.name]:b},T=typeof s.deleteType=="string"?E(s.deleteType,w):s.deleteType?new s.deleteType(w):null;bt(T.createResponse,V=>typeof V=="function"?V():null)==null?ne.value=await F.apiVoid(T):ne.value=await F.api(T),ne.value.succeeded?o("delete",ne.value.response):o("error",ne.value.error)}function H(){o("done")}const de=K(!1),Ce=K(""),R={entering:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-full",to:"translate-x-0"},leaving:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-0",to:"translate-x-full"}};Rt(de,()=>{_n(R,Ce,de.value),de.value||setTimeout(H,700)}),de.value=!0;function $(){s.formStyle=="slideOver"?de.value=!1:H()}const O=D=>{D.key==="Escape"&&$()};return Mt(()=>window.addEventListener("keydown",O)),sn(()=>window.removeEventListener("keydown",O)),(D,fe)=>{var b,w,T,V,j,z,ae,se,oe;const Y=ye("AutoFormFields"),Se=ye("ConfirmDelete"),le=ye("FormLoading"),xe=ye("SecondaryButton"),be=ye("PrimaryButton"),Ie=ye("CloseButton"),Oe=ye("ModalLookup");return h(),y("div",null,[I.value?D.formStyle=="card"?(h(),y("div",{key:1,class:_(re.value)},[d("form",{onSubmit:gt(ce,["prevent"])},[d("div",{class:_(Z.value)},[d("div",null,[D.$slots.heading?(h(),y("div",Gk,[he(D.$slots,"heading")])):(h(),y("h3",{key:1,class:_(pe.value)},X(J.value),3)),D.$slots.subheading?(h(),y("div",Qk,[he(D.$slots,"subheading")])):D.subHeading?(h(),y("p",{key:3,class:_(ve.value)},X(D.subHeading),3)):(b=I.value)!=null&&b.notes?(h(),y("p",{key:4,class:_(["notes",ve.value]),innerHTML:(w=I.value)==null?void 0:w.notes},null,10,Jk)):N("",!0)]),he(D.$slots,"header",{formInstance:(T=st())==null?void 0:T.exposed,model:G.value}),(h(),ke(Y,{ref_key:"formFields",ref:r,key:a.value,modelValue:G.value,"onUpdate:modelValue":c,api:ne.value,configureField:D.configureField,configureFormLayout:D.configureFormLayout},null,8,["modelValue","api","configureField","configureFormLayout"])),he(D.$slots,"footer",{formInstance:(V=st())==null?void 0:V.exposed,model:G.value})],2),d("div",{class:_(ge(ut).buttonsClass)},[d("div",null,[D.deleteType?(h(),ke(Se,{key:0,onDelete:Q})):N("",!0)]),d("div",null,[D.showLoading&&ge(ee)?(h(),ke(le,{key:0})):N("",!0)]),d("div",Kk,[Ae(xe,{onClick:$,disabled:ge(ee)},{default:$e(()=>[Fe("Cancel")]),_:1},8,["disabled"]),Ae(be,{type:"submit",class:"ml-4",disabled:ge(ee)},{default:$e(()=>[Fe("Save")]),_:1},8,["disabled"])])],2)],32)],2)):(h(),y("div",Zk,[Yk,d("div",Xk,[d("div",{onMousedown:$,class:"absolute inset-0 overflow-hidden"},[d("div",{onMousedown:fe[0]||(fe[0]=gt(()=>{},["stop"])),class:"pointer-events-none fixed inset-y-0 right-0 flex pl-10"},[d("div",{class:_(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",Ce.value])},[d("form",{class:_(Z.value),onSubmit:gt(ce,["prevent"])},[d("div",e2,[d("div",t2,[d("div",n2,[d("div",s2,[d("div",o2,[D.$slots.heading?(h(),y("div",r2,[he(D.$slots,"heading")])):(h(),y("h3",{key:1,class:_(pe.value)},X(J.value),3)),D.$slots.subheading?(h(),y("div",a2,[he(D.$slots,"subheading")])):D.subHeading?(h(),y("p",{key:3,class:_(ve.value)},X(D.subHeading),3)):(j=I.value)!=null&&j.notes?(h(),y("p",{key:4,class:_(["notes",ve.value]),innerHTML:(z=I.value)==null?void 0:z.notes},null,10,i2)):N("",!0)]),d("div",l2,[Ae(Ie,{"button-class":"bg-gray-50 dark:bg-gray-900",onClose:$})])])]),he(D.$slots,"header",{formInstance:(ae=st())==null?void 0:ae.exposed,model:G.value}),(h(),ke(Y,{ref_key:"formFields",ref:r,key:a.value,modelValue:G.value,"onUpdate:modelValue":c,api:ne.value,configureField:W,configureFormLayout:D.configureFormLayout},null,8,["modelValue","api","configureFormLayout"])),he(D.$slots,"footer",{formInstance:(se=st())==null?void 0:se.exposed,model:G.value})])]),d("div",{class:_(ge(ut).buttonsClass)},[d("div",null,[D.deleteType?(h(),ke(Se,{key:0,onDelete:Q})):N("",!0)]),d("div",null,[D.showLoading&&ge(ee)?(h(),ke(le,{key:0})):N("",!0)]),d("div",u2,[Ae(xe,{onClick:$,disabled:ge(ee)},{default:$e(()=>[Fe("Cancel")]),_:1},8,["disabled"]),Ae(be,{type:"submit",class:"ml-4",disabled:ge(ee)},{default:$e(()=>[Fe("Save")]),_:1},8,["disabled"])])],2)],34)],2)],32)],32)])])):(h(),y("div",Uk,[d("p",Wk,[Fe("Could not create form for unknown "),qk,Fe(" "+X(q.value),1)])])),((oe=u.value)==null?void 0:oe.name)=="ModalLookup"&&u.value.ref?(h(),ke(Oe,{key:3,"ref-info":u.value.ref,onDone:f,configureField:D.configureField},null,8,["ref-info","configureField"])):N("",!0)])}}}),d2={key:0},p2={class:"text-red-700"},f2=d("b",null,"type",-1),h2={key:0},m2={key:2},g2=["innerHTML"],v2={key:2,class:"relative z-10","aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"},y2=d("div",{class:"fixed inset-0"},null,-1),b2={class:"fixed inset-0 overflow-hidden"},w2={class:"flex min-h-0 flex-1 flex-col overflow-auto"},k2={class:"flex-1"},x2={class:"bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6"},C2={class:"flex items-start justify-between space-x-3"},S2={class:"space-y-1"},T2={key:0},A2={key:2},M2=["innerHTML"],_2={class:"flex h-7 items-center"},P2=d("div",{class:"flex justify-end"},null,-1),E2=Te({__name:"AutoViewForm",props:{model:{},apis:{},typeName:{},done:{},formStyle:{default:"slideOver"},panelClass:{},formClass:{},headingClass:{},subHeadingClass:{},heading:{},subHeading:{},showLoading:{type:Boolean},deleteType:{}},emits:["done","save","delete","error"],setup(e,{emit:t}){const n=e,s=t,{typeOf:o,getPrimaryKey:r,createDto:a}=Ft(),i=x(()=>n.typeName??n.apis.dataModel.name),l=x(()=>o(i.value)),c=x(()=>n.panelClass||ut.panelClass(n.formStyle)),u=x(()=>n.formClass||ut.formClass(n.formStyle)),p=x(()=>n.headingClass||ut.headingClass(n.formStyle)),g=x(()=>n.subHeadingClass||ut.subHeadingClass(n.formStyle)),f=x(()=>{var re,Z;return n.heading||((re=o(i.value))==null?void 0:re.description)||((Z=n.model)!=null&&Z.id?`${rt(i.value)} ${n.model.id}`:"View "+rt(i.value))}),v=K(new it);Object.assign({},Qs(n.model)),we.interceptors.has("AutoViewForm.new")&&we.interceptors.invoke("AutoViewForm.new",{props:n});let m=ko(),k=x(()=>m.loading.value);const S=()=>bt(l.value,re=>r(re)),C=x(()=>l.value);async function A(re){let Z=S();const pe=Z?Ne(n.model,Z.name):null;if(!pe){console.error(`Could not find Primary Key for Type ${i.value} (${C.value})`);return}const ve={[Z.name]:pe},ue=typeof n.deleteType=="string"?a(n.deleteType,ve):n.deleteType?new n.deleteType(ve):null;bt(ue.createResponse,J=>typeof J=="function"?J():null)==null?v.value=await m.apiVoid(ue):v.value=await m.api(ue),v.value.succeeded?s("delete",v.value.response):s("error",v.value.error)}function E(){n.done&&n.done()}const M=K(!1),q=K(""),I={entering:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-full",to:"translate-x-0"},leaving:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-0",to:"translate-x-full"}};Rt(M,()=>{_n(I,q,M.value),M.value||setTimeout(E,700)}),M.value=!0;function U(){n.formStyle=="slideOver"?M.value=!1:E()}const G=re=>{re.key==="Escape"&&U()};return Mt(()=>window.addEventListener("keydown",G)),sn(()=>window.removeEventListener("keydown",G)),(re,Z)=>{var pe,ve,ue,J;const ne=ye("MarkupModel"),P=ye("CloseButton"),F=ye("ConfirmDelete"),ee=ye("FormLoading");return h(),y("div",null,[i.value?re.formStyle=="card"?(h(),y("div",{key:1,class:_(c.value)},[d("div",{class:_(u.value)},[d("div",null,[re.$slots.heading?(h(),y("div",h2,[he(re.$slots,"heading")])):(h(),y("h3",{key:1,class:_(p.value)},X(f.value),3)),re.$slots.subheading?(h(),y("div",m2,[he(re.$slots,"subheading")])):re.subHeading?(h(),y("p",{key:3,class:_(g.value)},X(re.subHeading),3)):(pe=l.value)!=null&&pe.notes?(h(),y("p",{key:4,class:_(["notes",g.value]),innerHTML:(ve=l.value)==null?void 0:ve.notes},null,10,g2)):N("",!0)]),Ae(ne,{value:re.model},null,8,["value"])],2)],2)):(h(),y("div",v2,[y2,d("div",b2,[d("div",{onMousedown:U,class:"absolute inset-0 overflow-hidden"},[d("div",{onMousedown:Z[0]||(Z[0]=gt(()=>{},["stop"])),class:"pointer-events-none fixed inset-y-0 right-0 flex pl-10"},[d("div",{class:_(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",q.value])},[d("div",{class:_(u.value)},[d("div",w2,[d("div",k2,[d("div",x2,[d("div",C2,[d("div",S2,[re.$slots.heading?(h(),y("div",T2,[he(re.$slots,"heading")])):(h(),y("h3",{key:1,class:_(p.value)},X(f.value),3)),re.$slots.subheading?(h(),y("div",A2,[he(re.$slots,"subheading")])):re.subHeading?(h(),y("p",{key:3,class:_(g.value)},X(re.subHeading),3)):(ue=l.value)!=null&&ue.notes?(h(),y("p",{key:4,class:_(["notes",g.value]),innerHTML:(J=l.value)==null?void 0:J.notes},null,10,M2)):N("",!0)]),d("div",_2,[Ae(P,{"button-class":"bg-gray-50 dark:bg-gray-900",onClose:U})])])]),Ae(ne,{value:re.model},null,8,["value"])])]),d("div",{class:_(ge(ut).buttonsClass)},[d("div",null,[re.deleteType?(h(),ke(F,{key:0,onDelete:A})):N("",!0)]),d("div",null,[re.showLoading&&ge(k)?(h(),ke(ee,{key:0})):N("",!0)]),P2],2)],2)],2)],32)],32)])])):(h(),y("div",d2,[d("p",p2,[Fe("Could not create view for unknown "),f2,Fe(" "+X(i.value),1)])]))])}}}),I2=d("label",{for:"confirmDelete",class:"ml-2 mr-2 select-none"},"confirm",-1),L2=Te({__name:"ConfirmDelete",emits:["delete"],setup(e,{emit:t}){let n=K(!1);const s=t,o=()=>{n.value&&s("delete")},r=x(()=>["select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",n.value?"cursor-pointer bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500":"bg-red-400"]);return(a,i)=>(h(),y(ze,null,[Wn(d("input",{id:"confirmDelete",type:"checkbox",class:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-black","onUpdate:modelValue":i[0]||(i[0]=l=>mt(n)?n.value=l:n=l)},null,512),[[kr,ge(n)]]),I2,d("span",Qe({onClick:gt(o,["prevent"]),class:r.value},a.$attrs),[he(a.$slots,"default",{},()=>[Fe("Delete")])],16)],64))}}),R2={class:"flex",title:"loading..."},z2={key:0,xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24px",height:"30px",viewBox:"0 0 24 30"},j2=br('<rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',3),V2=[j2],O2={class:"ml-2 mt-1 text-gray-400"},D2=Te({__name:"FormLoading",props:{icon:{type:Boolean,default:!0},text:{default:"loading..."}},setup(e){return Je("ApiState",void 0),(t,n)=>(h(),y("div",R2,[t.icon?(h(),y("svg",z2,V2)):N("",!0),d("span",O2,X(t.text),1)]))}}),B2=["onClick"],F2={key:3,class:"flex justify-between items-center"},H2={class:"mr-1 select-none"},N2=["onClick"],$2=Te({__name:"DataGrid",props:{items:{default:()=>[]},id:{default:"DataGrid"},type:{},tableStyle:{default:"stripedRows"},selectedColumns:{},gridClass:{},grid2Class:{},grid3Class:{},grid4Class:{},tableClass:{},theadClass:{},tbodyClass:{},theadRowClass:{},theadCellClass:{},isSelected:{},headerTitle:{},headerTitles:{},visibleFrom:{},rowClass:{},rowStyle:{}},emits:["headerSelected","rowSelected"],setup(e,{emit:t}){const n=e,s=t,o=K(),r=K(null),a=ee=>r.value===ee,i=gr(),l=ee=>Object.keys(i).find(L=>L.toLowerCase()==ee.toLowerCase()+"-header"),c=ee=>Object.keys(i).find(L=>L.toLowerCase()==ee.toLowerCase()),u=x(()=>xa(n.items).filter(ee=>!!(i[ee]||i[ee+"-header"]))),{typeOf:p,typeProperties:g}=Ft(),f=x(()=>Zn(n.type)),v=x(()=>p(f.value)),m=x(()=>g(v.value));function k(ee){const L=n.headerTitles&&Ne(n.headerTitles,ee)||ee;return n.headerTitle?n.headerTitle(L):Fc(L)}function S(ee){const L=ee.toLowerCase();return m.value.find(W=>W.name.toLowerCase()==L)}function C(ee){const L=S(ee);return L!=null&&L.format?L.format:(L==null?void 0:L.type)=="TimeSpan"||(L==null?void 0:L.type)=="TimeOnly"?{method:"time"}:null}const A={xs:"xs:table-cell",sm:"sm:table-cell",md:"md:table-cell",lg:"lg:table-cell",xl:"xl:table-cell","2xl":"2xl:table-cell",never:""};function E(ee){const L=n.visibleFrom&&Ne(n.visibleFrom,ee);return L&&bt(A[L],W=>`hidden ${W}`)}const M=x(()=>n.gridClass??je.getGridClass(n.tableStyle)),q=x(()=>n.grid2Class??je.getGrid2Class(n.tableStyle)),I=x(()=>n.grid3Class??je.getGrid3Class(n.tableStyle)),U=x(()=>n.grid4Class??je.getGrid4Class(n.tableStyle)),G=x(()=>n.tableClass??je.getTableClass(n.tableStyle)),re=x(()=>n.tbodyClass??je.getTbodyClass(n.tbodyClass)),Z=x(()=>n.theadClass??je.getTheadClass(n.tableStyle)),pe=x(()=>n.theadRowClass??je.getTheadRowClass(n.tableStyle)),ve=x(()=>n.theadCellClass??je.getTheadCellClass(n.tableStyle));function ue(ee,L){return n.rowClass?n.rowClass(ee,L):je.getTableRowClass(n.tableStyle,L,!!(n.isSelected&&n.isSelected(ee)),n.isSelected!=null)}function J(ee,L){return n.rowStyle?n.rowStyle(ee,L):void 0}const ne=x(()=>{const ee=(typeof n.selectedColumns=="string"?n.selectedColumns.split(","):n.selectedColumns)||(u.value.length>0?u.value:xa(n.items)),L=m.value.reduce((W,ce)=>(W[ce.name.toLowerCase()]=ce.format,W),{});return ee.filter(W=>{var ce;return((ce=L[W.toLowerCase()])==null?void 0:ce.method)!="hidden"})});function P(ee,L){s("headerSelected",L,ee)}function F(ee,L,W){s("rowSelected",W,ee)}return(ee,L)=>{const W=ye("CellFormat"),ce=ye("PreviewFormat");return ee.items.length?(h(),y("div",{key:0,ref_key:"refResults",ref:o,class:_(M.value)},[d("div",{class:_(q.value)},[d("div",{class:_(I.value)},[d("div",{class:_(U.value)},[d("table",{class:_(G.value)},[d("thead",{class:_(Z.value)},[d("tr",{class:_(pe.value)},[(h(!0),y(ze,null,Xe(ne.value,Q=>(h(),y("td",{class:_([E(Q),ve.value,a(Q)?"text-gray-900 dark:text-gray-50":"text-gray-500 dark:text-gray-400"])},[d("div",{onClick:H=>P(H,Q)},[ge(i)[Q+"-header"]?he(ee.$slots,Q+"-header",{key:0,column:Q}):l(Q)?he(ee.$slots,l(Q),{key:1,column:Q}):ge(i).header?he(ee.$slots,"header",{key:2,column:Q,label:k(Q)}):(h(),y("div",F2,[d("span",H2,X(k(Q)),1)]))],8,B2)],2))),256))],2)],2),d("tbody",{class:_(re.value)},[(h(!0),y(ze,null,Xe(ee.items,(Q,H)=>(h(),y("tr",{class:_(ue(Q,H)),style:Kn(J(Q,H)),onClick:de=>F(de,H,Q)},[(h(!0),y(ze,null,Xe(ne.value,de=>(h(),y("td",{class:_([E(de),ge(je).tableCellClass])},[ge(i)[de]?he(ee.$slots,de,ys(Qe({key:0},Q))):c(de)?he(ee.$slots,c(de),ys(Qe({key:1},Q))):S(de)?(h(),ke(W,{key:2,type:v.value,propType:S(de),modelValue:Q},null,8,["type","propType","modelValue"])):(h(),ke(ce,{key:3,value:ge(Ne)(Q,de),format:C(de)},null,8,["value","format"]))],2))),256))],14,N2))),256))],2)],2)],2)],2)],2)],2)):N("",!0)}}}),U2=Te({props:{type:Object,propType:Object,modelValue:Object},setup(e,{attrs:t}){const{typeOf:n}=Ft();function s(o){return o!=null&&o.format?o.format:(o==null?void 0:o.type)=="TimeSpan"||(o==null?void 0:o.type)=="TimeOnly"?{method:"time"}:null}return()=>{var o;const r=s(e.propType),a=Ne(e.modelValue,e.propType.name),i=Object.assign({},e,t),l=Vt("span",{innerHTML:ar(a,r,i)}),c=ro(a)&&Array.isArray(a)?Vt("span",{},[Vt("span",{class:"mr-2"},`${a.length}`),l]):l,u=(o=e.propType)==null?void 0:o.ref;if(!u)return c;const p=zt(e.type).find(S=>S.type===u.model);if(!p)return c;const g=Ne(e.modelValue,p.name),f=g&&u.refLabel&&Ne(g,u.refLabel);if(!f)return c;const v=n(u.model),m=v==null?void 0:v.icon,k=m?Vt(kd,{image:m,class:"w-5 h-5 mr-1"}):null;return Vt("span",{class:"flex",title:`${u.model} ${a}`},[k,f])}}}),W2={key:0},q2={key:0,class:"mr-2"},G2=["innerHTML"],Q2=["innerHTML"],J2={inheritAttrs:!1},K2=Te({...J2,__name:"PreviewFormat",props:{value:{},format:{},includeIcon:{type:Boolean,default:!0},includeCount:{type:Boolean,default:!0},maxFieldLength:{default:150},maxNestedFields:{default:2},maxNestedFieldLength:{default:30}},setup(e){const t=e,n=x(()=>Array.isArray(t.value));return(s,o)=>ge(ro)(s.value)?(h(),y("span",W2,[s.includeCount&&n.value?(h(),y("span",q2,X(s.value.length),1)):N("",!0),d("span",{innerHTML:ge(ar)(s.value,s.format,s.$attrs)},null,8,G2)])):(h(),y("span",{key:1,innerHTML:ge(ar)(s.value,s.format,s.$attrs)},null,8,Q2))}}),Z2=["innerHTML"],Y2={key:0},X2=d("b",null,null,-1),ex={key:2},tx=Te({__name:"HtmlFormat",props:{value:{},depth:{default:0},fieldAttrs:{},classes:{type:Function,default:(e,t,n,s,o)=>s}},setup(e){const t=e,n=x(()=>Qn(t.value)),s=x(()=>Array.isArray(t.value)),o=l=>Fc(l),r=l=>t.fieldAttrs?t.fieldAttrs(l):null,a=x(()=>xa(t.value)),i=l=>l?Object.keys(l).map(c=>({key:o(c),val:l[c]})):[];return(l,c)=>{const u=ye("HtmlFormat",!0);return h(),y("div",{class:_(l.depth==0?"prose html-format":"")},[n.value?(h(),y("div",{key:0,innerHTML:ge(ar)(l.value)},null,8,Z2)):s.value?(h(),y("div",{key:1,class:_(l.classes("array","div",l.depth,ge(je).gridClass))},[ge(Qn)(l.value[0])?(h(),y("div",Y2,"[ "+X(l.value.join(", "))+" ]",1)):(h(),y("div",{key:1,class:_(l.classes("array","div",l.depth,ge(je).grid2Class))},[d("div",{class:_(l.classes("array","div",l.depth,ge(je).grid3Class))},[d("div",{class:_(l.classes("array","div",l.depth,ge(je).grid4Class))},[d("table",{class:_(l.classes("object","table",l.depth,ge(je).tableClass))},[d("thead",{class:_(l.classes("array","thead",l.depth,ge(je).theadClass))},[d("tr",null,[(h(!0),y(ze,null,Xe(a.value,p=>(h(),y("th",{class:_(l.classes("array","th",l.depth,ge(je).theadCellClass+" whitespace-nowrap"))},[X2,Fe(X(o(p)),1)],2))),256))])],2),d("tbody",null,[(h(!0),y(ze,null,Xe(l.value,(p,g)=>(h(),y("tr",{class:_(l.classes("array","tr",l.depth,g%2==0?"bg-white":"bg-gray-50",g))},[(h(!0),y(ze,null,Xe(a.value,f=>(h(),y("td",{class:_(l.classes("array","td",l.depth,ge(je).tableCellClass))},[Ae(u,Qe({value:p[f],"field-attrs":l.fieldAttrs,depth:l.depth+1,classes:l.classes},r(f)),null,16,["value","field-attrs","depth","classes"])],2))),256))],2))),256))])],2)],2)],2)],2))],2)):(h(),y("div",ex,[d("table",{class:_(l.classes("object","table",l.depth,"table-object"))},[(h(!0),y(ze,null,Xe(i(l.value),p=>(h(),y("tr",{class:_(l.classes("object","tr",l.depth,""))},[d("th",{class:_(l.classes("object","th",l.depth,"align-top py-2 px-4 text-left text-sm font-medium tracking-wider whitespace-nowrap"))},X(p.key),3),d("td",{class:_(l.classes("object","td",l.depth,"align-top py-2 px-4 text-sm"))},[Ae(u,Qe({value:p.val,"field-attrs":l.fieldAttrs,depth:l.depth+1,classes:l.classes},r(p.key)),null,16,["value","field-attrs","depth","classes"])],2)],2))),256))],2)]))],2)}}}),nx=["href"],sx=["href","title"],ox=Te({__name:"MarkupFormat",props:{value:{},imageClass:{default:"w-8 h-8"}},setup(e){const t=e,{getMimeType:n}=Pg(),s=t.value;let o=typeof t.value;const r=o==="string"&&s.length?n(s):null;if(o==="string"&&s.length){const a=s.startsWith("https://")||s.startsWith("http://");(a||s[0]==="/")&&r!=null&&r.startsWith("image/")?o="image":a&&(o="link")}return(a,i)=>{const l=ye("Icon"),c=ye("HtmlFormat");return ge(o)=="link"?(h(),y("a",{key:0,href:a.value,class:"text-indigo-600"},X(a.value),9,nx)):ge(o)=="image"?(h(),y("a",{key:1,href:a.value,title:a.value,class:"inline-block"},[Ae(l,{src:a.value,class:_(a.imageClass)},null,8,["src","class"])],8,sx)):(h(),ke(c,{key:2,value:a.value},null,8,["value"]))}}}),rx={class:"my-2 w-full"},ax={class:"leading-7"},ix={class:"px-2 text-left align-top"},lx={colspan:"align-top"},ux={class:"my-2 leading-7"},cx={colspan:"2",class:"px-2 bg-indigo-700 text-white"},dx={class:"leading-7"},px={colspan:"2",class:"px-2 align-top"},fx=Te({__name:"MarkupModel",props:{value:{},imageClass:{}},setup(e){const t=e,n=Object.keys(t.value),s={},o={};return n.forEach(r=>{const a=t.value[r],i=typeof a;a==null||i==="function"||i==="symbol"?s[r]=`(${a==null?"null":"t"})`:i==="object"?o[r]=a:s[r]=a}),(r,a)=>{const i=ye("MarkupFormat");return h(),y("table",rx,[(h(),y(ze,null,Xe(s,(l,c)=>d("tr",ax,[d("th",ix,X(ge(rt)(c)),1),d("td",lx,[Ae(i,{value:l},null,8,["value"])])])),64)),(h(),y(ze,null,Xe(o,(l,c)=>(h(),y(ze,null,[d("tr",ux,[d("td",cx,X(ge(rt)(c)),1)]),d("tr",dx,[d("td",px,[Ae(i,{value:l},null,8,["value"])])])],64))),64))])}}}),hx={class:"absolute top-0 right-0 pt-4 pr-4"},mx=["title"],gx=d("span",{class:"sr-only"},"Close",-1),vx=d("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),yx=[gx,vx],bx=Te({__name:"CloseButton",props:{buttonClass:{default:"bg-white dark:bg-black"},title:{default:"Close"}},emits:["close"],setup(e,{emit:t}){return(n,s)=>(h(),y("div",hx,[d("button",{type:"button",onClick:s[0]||(s[0]=o=>n.$emit("close")),title:n.title,class:_([n.buttonClass,"cursor-pointer rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"])},yx,10,mx)]))}}),wx=["id","aria-labelledby"],kx=d("div",{class:"fixed inset-0"},null,-1),xx={class:"fixed inset-0 overflow-hidden"},Cx={class:"flex h-full flex-col bg-white dark:bg-black shadow-xl"},Sx={class:"flex min-h-0 flex-1 flex-col overflow-auto"},Tx={class:"flex-1"},Ax={class:"relative bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6"},Mx={class:"flex items-start justify-between space-x-3"},_x={class:"space-y-1"},Px={key:0},Ex=["id"],Ix={key:2,class:"text-sm text-gray-500"},Lx={class:"flex h-7 items-center"},Rx={key:0,class:"flex-shrink-0 border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6"},zx=Te({__name:"SlideOver",props:{id:{default:"SlideOver"},title:{},contentClass:{default:"relative mt-6 flex-1 px-4 sm:px-6"}},emits:["done"],setup(e,{emit:t}){const n=t,s=K(!1),o=K(""),r={entering:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-full",to:"translate-x-0"},leaving:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-0",to:"translate-x-full"}};Rt(s,()=>{_n(r,o,s.value),s.value||setTimeout(()=>n("done"),700)}),s.value=!0;const a=()=>s.value=!1,i=l=>{l.key==="Escape"&&a()};return Mt(()=>window.addEventListener("keydown",i)),sn(()=>window.removeEventListener("keydown",i)),(l,c)=>{const u=ye("CloseButton");return h(),y("div",{id:l.id,class:"relative z-10","aria-labelledby":l.id+"-title",role:"dialog","aria-modal":"true"},[kx,d("div",xx,[d("div",{onMousedown:a,class:"absolute inset-0 overflow-hidden"},[d("div",{onMousedown:c[0]||(c[0]=gt(()=>{},["stop"])),class:"pointer-events-none fixed inset-y-0 right-0 flex pl-10"},[d("div",{class:_(["panel pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",o.value])},[d("div",Cx,[d("div",Sx,[d("div",Tx,[d("div",Ax,[d("div",Mx,[d("div",_x,[l.$slots.title?(h(),y("div",Px,[he(l.$slots,"title")])):N("",!0),l.title?(h(),y("h2",{key:1,class:"text-lg font-medium text-gray-900 dark:text-gray-50",id:l.id+"-title"},X(l.title),9,Ex)):N("",!0),l.$slots.subtitle?(h(),y("p",Ix,[he(l.$slots,"subtitle")])):N("",!0)]),d("div",Lx,[Ae(u,{"button-class":"bg-gray-50 dark:bg-gray-900",onClose:a})])])]),d("div",{class:_(l.contentClass)},[he(l.$slots,"default")],2)])]),l.$slots.footer?(h(),y("div",Rx,[he(l.$slots,"footer")])):N("",!0)])],2)],32)],32)])],8,wx)}}}),jx=["id","data-transition-for","aria-labelledby"],Vx={class:"fixed inset-0 z-10 overflow-y-auto"},Ox={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},Dx={key:1,class:"hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10"},Bx=d("span",{class:"sr-only"},"Close",-1),Fx=d("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),Hx=[Bx,Fx],Nx=Te({__name:"ModalDialog",props:{id:{default:"ModalDialog"},modalClass:{default:Wl.modalClass},sizeClass:{default:Wl.sizeClass},closeButtonClass:{default:"bg-white dark:bg-black cursor-pointer rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"},configureField:{}},emits:["done"],setup(e,{emit:t}){const n=gr(),s=t,o=K(!1),r=K(""),a={entering:{cls:"ease-out duration-300",from:"opacity-0",to:"opacity-100"},leaving:{cls:"ease-in duration-200",from:"opacity-100",to:"opacity-0"}},i=K(""),l={entering:{cls:"ease-out duration-300",from:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",to:"opacity-100 translate-y-0 sm:scale-100"},leaving:{cls:"ease-in duration-200",from:"opacity-100 translate-y-0 sm:scale-100",to:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}};Rt(o,()=>{_n(a,r,o.value),_n(l,i,o.value),o.value||setTimeout(()=>s("done"),200)}),o.value=!0;const c=()=>o.value=!1;hn("ModalProvider",{openModal:g});const u=K(),p=K();function g(m,k){u.value=m,p.value=k}async function f(m){p.value&&p.value(m),u.value=void 0,p.value=void 0}const v=m=>{m.key==="Escape"&&c()};return Mt(()=>window.addEventListener("keydown",v)),sn(()=>window.removeEventListener("keydown",v)),(m,k)=>{var S;const C=ye("ModalLookup");return h(),y("div",{id:m.id,"data-transition-for":m.id,onMousedown:c,class:"relative z-10","aria-labelledby":`${m.id}-title`,role:"dialog","aria-modal":"true"},[d("div",{class:_(["fixed inset-0 bg-gray-500/75 transition-opacity",r.value])},null,2),d("div",Vx,[d("div",Ox,[d("div",{class:_([m.modalClass,m.sizeClass,i.value]),onMousedown:k[0]||(k[0]=gt(()=>{},["stop"]))},[d("div",null,[ge(n).closebutton?he(m.$slots,"createform",{key:0}):(h(),y("div",Dx,[d("button",{type:"button",onClick:c,class:_(m.closeButtonClass),title:"Close"},Hx,2)])),he(m.$slots,"default")])],34),he(m.$slots,"bottom")])]),((S=u.value)==null?void 0:S.name)=="ModalLookup"&&u.value.ref?(h(),ke(C,{key:0,"ref-info":u.value.ref,onDone:f,configureField:m.configureField},null,8,["ref-info","configureField"])):N("",!0)],40,jx)}}}),$x={class:"pt-2 overflow-auto",style:{"min-height":"620px"}},Ux={class:"mt-3 pl-5 flex flex-wrap items-center"},Wx={class:"hidden sm:block text-xl leading-6 font-medium text-gray-900 dark:text-gray-50 mr-3"},qx={class:"hidden md:inline"},Gx={class:"flex pb-1 sm:pb-0"},Qx=["title"],Jx=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("g",{"stroke-width":"1.5",fill:"none"},[d("path",{d:"M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",stroke:"currentColor"})])],-1),Kx=[Jx],Zx=["disabled"],Yx=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",fill:"currentColor"})],-1),Xx=[Yx],eC=["disabled"],tC=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",fill:"currentColor"})],-1),nC=[tC],sC=["disabled"],oC=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",fill:"currentColor"})],-1),rC=[oC],aC=["disabled"],iC=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",fill:"currentColor"})],-1),lC=[iC],uC={key:0,class:"flex pb-1 sm:pb-0"},cC={class:"px-4 text-lg text-black dark:text-white"},dC={key:0},pC={key:1},fC=d("span",{class:"hidden xl:inline"}," Showing Results ",-1),hC={key:2},mC={key:1,class:"pl-2 mt-1"},gC=d("svg",{class:"w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:"currentColor"})],-1),vC={class:"whitespace-nowrap"},yC={key:2,class:"pl-2"},bC=d("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 24 24"},[d("path",{fill:"currentColor",d:"M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"})],-1),wC=[bC],kC={class:"flex pb-1 sm:pb-0"},xC={key:0,class:"pl-2"},CC=d("svg",{class:"flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[d("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z","clip-rule":"evenodd"})],-1),SC={class:"mr-1"},TC={key:0,class:"h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},AC=d("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"},null,-1),MC=[AC],_C={key:1,class:"h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},PC=d("path",{"fill-rule":"evenodd",d:"M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z","clip-rule":"evenodd"},null,-1),EC=[PC],IC={key:1},LC={key:4},RC={key:0},zC={key:0,class:"cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"},jC={class:"mr-1 select-none"},VC={key:1,class:"flex justify-between items-center"},OC={class:"mr-1 select-none"},ql=25,DC=Te({__name:"ModalLookup",props:{id:{default:"ModalLookup"},refInfo:{},skip:{default:0},prefs:{},selectedColumns:{},allowFiltering:{type:[Boolean,null],default:!0},showPreferences:{type:[Boolean,null],default:!0},showPagingNav:{type:[Boolean,null],default:!0},showPagingInfo:{type:[Boolean,null],default:!0},showResetPreferences:{type:[Boolean,null],default:!0},showFiltersView:{type:[Boolean,null],default:!0},toolbarButtonClass:{},canFilter:{},type:{},modelTitle:{},newButtonLabel:{},configureField:{}},emits:["done"],setup(e,{emit:t}){const n=e,s=t,o=gr(),{config:r}=Yn(),{metadataApi:a,filterDefinitions:i}=Ft(),l=Je("client"),c=r.value.storage,u=x(()=>n.toolbarButtonClass??je.toolbarButtonClass),p=x(()=>i.value),g=K({take:ql}),f=K(new it),v=K(n.skip),m=K(!1),k=K(),S=te=>typeof te=="string"?te.split(","):te||[];function C(te,me){return je.getTableRowClass("fullWidth",me,!1,!0)}function A(){let te=S(n.selectedColumns);return te.length>0?te:[]}const E=x(()=>qt(n.refInfo.model)),M=x(()=>{let te=A().map(Le=>Le.toLowerCase());const me=zt(E.value);return te.length>0?te.map(Le=>me.find(Ge=>Ge.name.toLowerCase()===Le)).filter(Le=>Le!=null):me}),q=x(()=>{let te=M.value.map(Le=>Le.name),me=S(g.value.selectedColumns).map(Le=>Le.toLowerCase());return me.length>0?te.filter(Le=>me.includes(Le.toLowerCase())):te}),I=x(()=>g.value.take??ql),U=x(()=>f.value.response?Ne(f.value.response,"results"):[]),G=x(()=>{var te;return((te=f.value.response)==null?void 0:te.total)??U.value.length??0}),re=x(()=>v.value>0),Z=x(()=>v.value>0),pe=x(()=>U.value.length>=I.value),ve=x(()=>U.value.length>=I.value),ue=K([]),J=x(()=>ue.value.some(te=>te.settings.filters.length>0||!!te.settings.sort)),ne=x(()=>ue.value.map(te=>te.settings.filters.length).reduce((te,me)=>te+me,0)),P=x(()=>Ms(E.value)),F=x(()=>{var te;return(te=a.value)==null?void 0:te.operations.find(me=>{var Le;return((Le=me.dataModel)==null?void 0:Le.name)==n.refInfo.model&&yt.isAnyQuery(me)})}),ee=K(),L=K(!1),W=K(),ce=x(()=>Zn(n.refInfo.model)),Q=x(()=>Jn.forType(ce.value,a.value)),H=x(()=>{var te;return ce.value||((te=F.value)==null?void 0:te.dataModel.name)}),de=x(()=>n.modelTitle||H.value),Ce=x(()=>n.newButtonLabel||`New ${de.value}`),R=x(()=>Js(Q.value.Create)),$=K(),O=K(!1);function D(){O.value=!0}function fe(){O.value=!1}async function b(te){fe(),s("done",te)}function w(te){var me;$.value&&(Object.assign((me=$.value)==null?void 0:me.model,te),console.log("setCreate",JSON.stringify(te,null,2)),T())}function T(){var te,me;(te=$.value)==null||te.forceUpdate();const Le=st();(me=Le==null?void 0:Le.proxy)==null||me.$forceUpdate()}const V=()=>`${n.id}/ApiPrefs/${n.refInfo.model}`,j=te=>`Column/${n.id}:${n.refInfo.model}.${te}`;async function z(te){v.value+=te,v.value<0&&(v.value=0);var me=Math.floor(G.value/I.value)*I.value;v.value>me&&(v.value=me),await be()}async function ae(te,me){s("done",te)}function se(){s("done",null)}function oe(te,me){var Le,Ge,ct;let wt=me.target;if((wt==null?void 0:wt.tagName)!=="TD"){let ot=(Le=wt==null?void 0:wt.closest("TABLE"))==null?void 0:Le.getBoundingClientRect(),dt=ue.value.find(Ue=>Ue.name.toLowerCase()==te.toLowerCase());if(dt&&ot){let Ue=318,vn=(((Ge=me.target)==null?void 0:Ge.tagName)==="DIV"?me.target:(ct=me.target)==null?void 0:ct.closest("DIV")).getBoundingClientRect(),Xn=Ue+25;W.value={column:dt,topLeft:{x:Math.max(Math.floor(vn.x+25),Xn),y:Math.floor(115)}}}}}function Y(){W.value=null}async function Se(te){var me;let Le=(me=W.value)==null?void 0:me.column;Le&&(Le.settings=te,c.setItem(j(Le.name),JSON.stringify(Le.settings)),await be()),W.value=null}async function le(te){c.setItem(j(te.name),JSON.stringify(te.settings)),await be()}async function xe(te){L.value=!1,g.value=te,c.setItem(V(),JSON.stringify(te)),await be()}async function be(){await Ie(Oe())}async function Ie(te){const me=F.value;if(!me){console.error(`No Query API was found for ${n.refInfo.model}`);return}let Le=ao(me,te),Ge=Nc(ot=>{f.value.response=f.value.error=void 0,m.value=ot}),ct=await l.api(Le);Ge(),Ut(()=>f.value=ct);let wt=Ne(ct.response,"results")||[];!ct.succeeded||wt.label==0}function Oe(){let te={include:"total",take:I.value},me=S(g.value.selectedColumns||n.selectedColumns);if(me.length>0){let Ge=P.value;Ge&&me.includes(Ge.name)&&(me=[Ge.name,...me]),te.fields=me.join(",")}let Le=[];return ue.value.forEach(Ge=>{Ge.settings.sort&&Le.push((Ge.settings.sort==="DESC"?"-":"")+Ge.name),Ge.settings.filters.forEach(ct=>{let wt=ct.key.replace("%",Ge.name);te[wt]=ct.value})}),typeof te.skip>"u"&&v.value>0&&(te.skip=v.value),Le.length>0&&(te.orderBy=Le.join(",")),te}async function Ve(){ue.value.forEach(te=>{te.settings={filters:[]},c.removeItem(j(te.name))}),await be()}return Mt(async()=>{const te=n.prefs||rr(c.getItem(V()));te&&(g.value=te),ue.value=M.value.map(me=>({name:me.name,type:me.type,meta:me,settings:Object.assign({filters:[]},rr(c.getItem(j(me.name))))})),isNaN(n.skip)||(v.value=n.skip),await be()}),(te,me)=>{const Le=ye("AutoCreateForm"),Ge=ye("ErrorSummary"),ct=ye("Loading"),wt=ye("SettingsIcons"),ot=ye("DataGrid"),dt=ye("ModalDialog");return h(),y(ze,null,[te.refInfo?(h(),ke(dt,{key:0,ref_key:"modalDialog",ref:ee,id:te.id,onDone:se},{default:$e(()=>[d("div",$x,[d("div",Ux,[d("h3",Wx,[Fe(" Select "),d("span",qx,X(ge(rt)(te.refInfo.model)),1)]),d("div",Gx,[te.showPreferences?(h(),y("button",{key:0,type:"button",class:"pl-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",title:`${te.refInfo.model} Preferences`,onClick:me[0]||(me[0]=Ue=>L.value=!L.value)},Kx,8,Qx)):N("",!0),te.showPagingNav?(h(),y("button",{key:1,type:"button",class:_(["pl-2",re.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"First page",disabled:!re.value,onClick:me[1]||(me[1]=Ue=>z(-G.value))},Xx,10,Zx)):N("",!0),te.showPagingNav?(h(),y("button",{key:2,type:"button",class:_(["pl-2",Z.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"Previous page",disabled:!Z.value,onClick:me[2]||(me[2]=Ue=>z(-I.value))},nC,10,eC)):N("",!0),te.showPagingNav?(h(),y("button",{key:3,type:"button",class:_(["pl-2",pe.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"Next page",disabled:!pe.value,onClick:me[3]||(me[3]=Ue=>z(I.value))},rC,10,sC)):N("",!0),te.showPagingNav?(h(),y("button",{key:4,type:"button",class:_(["pl-2",ve.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"Last page",disabled:!ve.value,onClick:me[4]||(me[4]=Ue=>z(G.value))},lC,10,aC)):N("",!0)]),te.showPagingInfo?(h(),y("div",uC,[d("div",cC,[m.value?(h(),y("span",dC,"Querying...")):N("",!0),U.value.length?(h(),y("span",pC,[fC,Fe(" "+X(v.value+1)+" - "+X(Math.min(v.value+U.value.length,G.value))+" ",1),d("span",null," of "+X(G.value),1)])):f.value.completed?(h(),y("span",hC,"No Results")):N("",!0)])])):N("",!0),Q.value.Create&&R.value?(h(),y("div",mC,[d("button",{type:"button",onClick:me[5]||(me[5]=Ue=>D()),title:"modelTitle",class:_(ge(je).toolbarButtonClass)},[gC,d("span",vC,X(Ce.value),1)],2),O.value?(h(),ke(Le,{key:0,ref_key:"createForm",ref:$,type:Q.value.Create.request.name,configure:te.configureField,onDone:fe,onSave:b},{header:$e(()=>[he(te.$slots,"formheader",{form:"create",formInstance:$.value,apis:Q.value,type:H.value,updateModel:w})]),footer:$e(()=>[he(te.$slots,"formfooter",{form:"create",formInstance:$.value,apis:Q.value,type:H.value,updateModel:w})]),_:3},8,["type","configure"])):N("",!0)])):N("",!0),J.value&&te.showResetPreferences?(h(),y("div",yC,[d("button",{type:"button",onClick:Ve,title:"Reset Preferences & Filters",class:_(u.value)},wC,2)])):N("",!0),d("div",kC,[te.showFiltersView&&ne.value>0?(h(),y("div",xC,[d("button",{type:"button",onClick:me[6]||(me[6]=Ue=>k.value=k.value=="filters"?null:"filters"),class:_(u.value),"aria-expanded":"false"},[CC,d("span",SC,X(ne.value)+" "+X(ne.value==1?"Filter":"Filters"),1),k.value!="filters"?(h(),y("svg",TC,MC)):(h(),y("svg",_C,EC))],2)])):N("",!0)])]),k.value=="filters"?(h(),ke(Ei,{key:0,class:"border-y border-gray-200 dark:border-gray-800 py-8 my-2",definitions:p.value,columns:ue.value,onDone:me[7]||(me[7]=Ue=>k.value=null),onChange:le},null,8,["definitions","columns"])):N("",!0),W.value?(h(),y("div",IC,[Ae(Pi,{definitions:p.value,column:W.value.column,"top-left":W.value.topLeft,onDone:Y,onSave:Se},null,8,["definitions","column","top-left"])])):N("",!0),f.value.error?(h(),ke(Ge,{key:2,status:f.value.error},null,8,["status"])):m.value?(h(),ke(ct,{key:3})):(h(),y("div",LC,[U.value.length?(h(),y("div",RC,[Ae(ot,{id:te.id,items:U.value,type:te.refInfo.model,"selected-columns":q.value,onFiltersChanged:be,tableStyle:"fullWidth",rowClass:C,onRowSelected:ae,onHeaderSelected:oe},ni({header:$e(({column:Ue,label:vn})=>{var Xn;return[te.allowFiltering&&(!n.canFilter||n.canFilter(Ue))?(h(),y("div",zC,[d("span",jC,X(vn),1),Ae(wt,{column:ue.value.find(xo=>xo.name.toLowerCase()===Ue.toLowerCase()),"is-open":((Xn=W.value)==null?void 0:Xn.column.name)===Ue},null,8,["column","is-open"])])):(h(),y("div",VC,[d("span",OC,X(vn),1)]))]}),_:2},[Xe(Object.keys(ge(o)),Ue=>({name:Ue,fn:$e(vn=>[he(te.$slots,Ue,ys(oo(vn)))])}))]),1032,["id","items","type","selected-columns"])])):N("",!0)]))])]),_:3},8,["id"])):N("",!0),L.value?(h(),ke(Ii,{key:1,columns:M.value,prefs:g.value,onDone:me[8]||(me[8]=Ue=>L.value=!1),onSave:xe},null,8,["columns","prefs"])):N("",!0)],64)}}}),BC={class:"sm:hidden"},FC=["for"],HC=["id","name"],NC=["value"],$C={class:"hidden sm:block"},UC={class:"border-b border-gray-200"},WC={class:"-mb-px flex","aria-label":"Tabs"},qC=["onClick"],GC=Te({__name:"Tabs",props:{tabs:{},id:{default:"tabs"},param:{default:"tab"},label:{type:Function,default:e=>rt(e)},selected:{},tabClass:{},bodyClass:{default:"p-4"},url:{type:Boolean,default:!0},clearQuery:{type:Boolean,default:!1}},setup(e){const t=e,n=x(()=>Object.keys(t.tabs)),s=u=>t.label?t.label(u):rt(u),o=x(()=>t.id||"tabs"),r=x(()=>t.param||"tab"),a=K();function i(u){if(a.value=u,t.url){const p=n.value[0];li({tab:u===p?void 0:u},t.clearQuery)}}function l(u){return a.value===u}const c=x(()=>`${100/Object.keys(t.tabs).length}%`);return Mt(()=>{if(a.value=t.selected||Object.keys(t.tabs)[0],t.url){const u=location.search?location.search:location.hash.includes("?")?"?"+qs(location.hash,"?"):"",p=sr(u)[r.value];p&&(a.value=p)}}),(u,p)=>(h(),y("div",null,[d("div",BC,[d("label",{for:o.value,class:"sr-only"},"Select a tab",8,FC),d("select",{id:o.value,name:o.value,class:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",onChange:p[0]||(p[0]=g=>{var f;return i((f=g.target)==null?void 0:f.value)})},[(h(!0),y(ze,null,Xe(n.value,g=>(h(),y("option",{key:g,value:g},X(s(g)),9,NC))),128))],40,HC)]),d("div",$C,[d("div",UC,[d("nav",WC,[(h(!0),y(ze,null,Xe(n.value,g=>(h(),y("a",{href:"#",onClick:gt(f=>i(g),["prevent"]),style:Kn({width:c.value}),class:_([l(g)?"border-indigo-500 text-indigo-600 py-4 px-1 text-center border-b-2 font-medium text-sm":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm",u.tabClass])},X(s(g)),15,qC))),256))])])]),d("div",{class:_(u.bodyClass)},[(h(),ke(ei(u.tabs[a.value])))],2)]))}}),QC=d("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-gray-400",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},[d("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"})],-1),JC=[QC],KC=d("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-indigo-600",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},[d("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"})],-1),ZC=[KC],YC=Te({__name:"DarkModeToggle",setup(e){const t=typeof document<"u"?document.documentElement:null,n=()=>!!(t!=null&&t.classList.contains("dark")),s=K(localStorage.getItem("color-scheme")=="dark");function o(){n()?t==null||t.classList.remove("dark"):t==null||t.classList.add("dark"),s.value=n(),localStorage.setItem("color-scheme",s.value?"dark":"light")}return(r,a)=>(h(),y("button",{type:"button",class:"bg-gray-200 dark:bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black",role:"switch","aria-checked":"false",onClick:a[0]||(a[0]=i=>o())},[d("span",{class:_(`${s.value?"translate-x-0":"translate-x-5"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-black shadow transform ring-0 transition ease-in-out duration-200`)},[d("span",{class:_(`${s.value?"opacity-100 ease-in duration-200":"opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),"aria-hidden":"true"},JC,2),d("span",{class:_(`${s.value?"opacity-0 ease-out duration-100":"opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),"aria-hidden":"true"},ZC,2)],2)]))}}),XC={key:0},e5={key:1,class:"min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"},t5={class:"sm:mx-auto sm:w-full sm:max-w-md"},n5={class:"mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-50"},s5={key:0,class:"mt-4 text-center text-sm text-gray-600 dark:text-gray-300"},o5={class:"relative z-0 inline-flex shadow-sm rounded-md"},r5=["onClick"],a5={class:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},i5={class:"bg-white dark:bg-black py-8 px-4 shadow sm:rounded-lg sm:px-10"},l5={class:"mt-8"},u5={key:1,class:"mt-6"},c5=br('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300 dark:border-gray-600"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500 dark:text-gray-400"> Or continue with </span></div></div>',1),d5={class:"mt-6 grid grid-cols-3 gap-3"},p5=["href","title"],f5={key:1,class:"h-5 w-5 text-gray-700 dark:text-gray-200",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},h5=d("path",{d:"M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z",fill:"currentColor"},null,-1),m5=d("path",{d:"M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",fill:"currentColor"},null,-1),g5=[h5,m5],v5=Te({__name:"SignIn",props:{provider:{},title:{default:"Sign In"},tabs:{type:[Boolean,String],default:!0},oauth:{type:[Boolean,String],default:!0}},emits:["login"],setup(e,{emit:t}){const n=e,s=t,{getMetadata:o,createDto:r}=Ft(),a=ko(),i=Je("client"),{signIn:l}=_i(),c=o({assert:!0}),u=c.plugins.auth,p=document.baseURI,g=c.app.baseUrl,f=K(r("Authenticate")),v=K(new it),m=K(n.provider);Mt(()=>{u==null||u.authProviders.map(Z=>Z.formLayout).filter(Z=>Z).forEach(Z=>Z.forEach(pe=>f.value[pe.id]=pe.type==="checkbox"?!1:""))});const k=x(()=>(u==null?void 0:u.authProviders.filter(Z=>Z.formLayout))||[]),S=x(()=>k.value[0]||{}),C=x(()=>k.value[Math.max(k.value.length-1,0)]||{}),A=x(()=>(m.value?u==null?void 0:u.authProviders.find(Z=>Z.name===m.value):null)??S.value),E=Z=>Z===!1||Z==="false";function M(Z){return Z.label||Z.navItem&&Z.navItem.label}const q=x(()=>{var Z;return(((Z=A.value)==null?void 0:Z.formLayout)||[]).map(pe=>{var ve,ue;return Object.assign({},pe,{type:(ve=pe.type)==null?void 0:ve.toLowerCase(),autocomplete:pe.autocomplete||(((ue=pe.type)==null?void 0:ue.toLowerCase())==="password"?"current-password":void 0)||(pe.id.toLowerCase()==="username"?"username":void 0),css:Object.assign({field:"col-span-12"},pe.css)})})}),I=x(()=>E(n.oauth)?[]:(u==null?void 0:u.authProviders.filter(Z=>Z.type==="oauth"))||[]),U=x(()=>{let Z=Vm(u==null?void 0:u.authProviders.filter(ve=>ve.formLayout&&ve.formLayout.length>0),(ve,ue)=>{let J=M(ue)||jt(ue.name);ve[J]=ue.name===S.value.name?"":ue.name});const pe=A.value;return pe&&E(n.tabs)&&(Z={[M(pe)||jt(pe.name)]:pe}),Z}),G=x(()=>{let Z=q.value.map(pe=>pe.id).filter(pe=>pe);return v.value.summaryMessage(Z)});async function re(){if(f.value.provider=A.value.name,A.value.name==="authsecret"?(i.headers.set("authsecret",f.value.authsecret),f.value=r("Authenticate")):A.value.name==="basic"?(i.setCredentials(f.value.UserName,f.value.Password),f.value=r("Authenticate"),f.value.UserName=null,f.value.Password=null):(A.value.type==="Bearer"||A.value.name==="jwt")&&(i.bearerToken=f.value.BearerToken,f.value=r("Authenticate")),v.value=await a.api(f.value),v.value.succeeded){const Z=v.value.response;l(Z),s("login",Z),v.value=new it,f.value=r("Authenticate")}}return(Z,pe)=>{const ve=ye("ErrorSummary"),ue=ye("AutoFormFields"),J=ye("PrimaryButton"),ne=ye("Icon"),P=uf("href");return ge(u)?(h(),y("div",e5,[d("div",t5,[d("h2",n5,X(Z.title),1),Object.keys(U.value).length>1?(h(),y("p",s5,[d("span",o5,[(h(!0),y(ze,null,Xe(U.value,(F,ee)=>Wn((h(),y("a",{onClick:L=>m.value=F,class:_([F===""||F===S.value.name?"rounded-l-md":F===C.value.name?"rounded-r-md -ml-px":"-ml-px",m.value===F?"z-10 outline-none ring-1 ring-indigo-500 border-indigo-500":"","cursor-pointer relative inline-flex items-center px-4 py-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900"])},[Fe(X(ee),1)],10,r5)),[[P,{provider:F}]])),256))])])):N("",!0)]),d("div",a5,[G.value?(h(),ke(ve,{key:0,class:"mb-3",errorSummary:G.value},null,8,["errorSummary"])):N("",!0),d("div",i5,[q.value.length?(h(),y("form",{key:0,onSubmit:gt(re,["prevent"])},[Ae(ue,{modelValue:f.value,formLayout:q.value,api:v.value,hideSummary:!0,"divide-class":"","space-class":"space-y-6"},null,8,["modelValue","formLayout","api"]),d("div",l5,[Ae(J,{class:"w-full"},{default:$e(()=>[Fe("Sign In")]),_:1})])],32)):N("",!0),I.value.length?(h(),y("div",u5,[c5,d("div",d5,[(h(!0),y(ze,null,Xe(I.value,F=>(h(),y("div",null,[d("a",{href:ge(g)+F.navItem.href+"?continue="+ge(p),title:M(F),class:"w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-black text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"},[F.icon?(h(),ke(ne,{key:0,image:F.icon,class:"h-5 w-5 text-gray-700 dark:text-gray-200"},null,8,["image"])):(h(),y("svg",f5,g5))],8,p5)]))),256))])])):N("",!0)])])])):(h(),y("div",XC,"No Auth Plugin"))}}}),y5=["for"],b5={key:1,class:"border border-gray-200 flex justify-between"},w5={class:"p-2 flex flex-wrap gap-x-4"},k5=d("title",null,"Bold text (CTRL+B)",-1),x5=d("path",{fill:"currentColor",d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79c0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79c0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"},null,-1),C5=[k5,x5],S5=d("title",null,"Italics (CTRL+I)",-1),T5=d("path",{fill:"currentColor",d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"},null,-1),A5=[S5,T5],M5=d("title",null,"Insert Link (CTRL+K)",-1),_5=d("path",{fill:"currentColor",d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8v2m9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"},null,-1),P5=[M5,_5],E5=d("title",null,"Blockquote (CTRL+Q)",-1),I5=d("path",{fill:"currentColor",d:"m15 17l2-4h-4V6h7v7l-2 4h-3Zm-9 0l2-4H4V6h7v7l-2 4H6Z"},null,-1),L5=[E5,I5],R5=d("title",null,"Insert Image (CTRL+SHIFT+L)",-1),z5=d("path",{fill:"currentColor",d:"M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992ZM20 15V5H4v14L14 9l6 6Zm0 2.828l-6-6L6.828 19H20v-1.172ZM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"},null,-1),j5=[R5,z5],V5=d("title",null,"Insert Code (CTRL+<)",-1),O5=d("path",{fill:"currentColor",d:"m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6L8 18Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6l-6 6Z"},null,-1),D5=[V5,O5],B5=d("title",null,"H2 Heading (CTRL+H)",-1),F5=d("path",{fill:"currentColor",d:"M7 20V7H2V4h13v3h-5v13H7Zm9 0v-8h-3V9h9v3h-3v8h-3Z"},null,-1),H5=[B5,F5],N5=d("title",null,"Numbered List (ALT+1)",-1),$5=d("path",{fill:"currentColor",d:"M3 22v-1.5h2.5v-.75H4v-1.5h1.5v-.75H3V16h3q.425 0 .713.288T7 17v1q0 .425-.288.713T6 19q.425 0 .713.288T7 20v1q0 .425-.288.713T6 22H3Zm0-7v-2.75q0-.425.288-.713T4 11.25h1.5v-.75H3V9h3q.425 0 .713.288T7 10v1.75q0 .425-.288.713T6 12.75H4.5v.75H7V15H3Zm1.5-7V3.5H3V2h3v6H4.5ZM9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9Z"},null,-1),U5=[N5,$5],W5=d("title",null,"Bulleted List (ALT+-)",-1),q5=d("path",{fill:"currentColor",d:"M9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Z"},null,-1),G5=[W5,q5],Q5=d("title",null,"Strike Through (ALT+S)",-1),J5=d("path",{fill:"currentColor",d:"M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"},null,-1),K5=[Q5,J5],Z5=d("title",null,"Undo (CTRL+Z)",-1),Y5=d("path",{fill:"currentColor",d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"},null,-1),X5=[Z5,Y5],e3=d("title",null,"Redo (CTRL+SHIFT+Z)",-1),t3=d("path",{fill:"currentColor",d:"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"},null,-1),n3=[e3,t3],s3={key:0,class:"p-2 flex flex-wrap gap-x-4"},o3=["href"],r3=d("path",{fill:"currentColor",d:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4z"},null,-1),a3=[r3],i3={class:""},l3=["name","id","label","value","rows","disabled"],u3=["id"],c3=["id"],Pt="w-5 h-5 cursor-pointer select-none text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",d3=Te({__name:"MarkdownInput",props:{status:{},id:{},inputClass:{},label:{},labelClass:{},help:{},placeholder:{},modelValue:{},counter:{type:Boolean},rows:{},errorMessages:{},lang:{},autoFocus:{type:Boolean},disabled:{type:Boolean},helpUrl:{default:"https://guides.github.com/features/mastering-markdown/"},hide:{}},emits:["update:modelValue","close"],setup(e,{expose:t,emit:n}){const s=e,o=n;let r=[],a=[],i=Je("ApiState",void 0);const l=x(()=>gn.call({responseStatus:s.status??(i==null?void 0:i.error.value)},s.id)),c=x(()=>s.label??rt(jt(s.id))),u="bold,italics,link,image,blockquote,code,heading,orderedList,unorderedList,strikethrough,undo,redo,help".split(","),p=x(()=>s.hide?Fn(u,s.hide):Fn(u,[]));function g(L){return p.value[L]}const f=x(()=>["shadow-sm font-mono"+en.base.replace("rounded-md",""),l.value?"text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300":"text-gray-900 "+en.valid,s.inputClass]),v=K();t({props:s,textarea:v,updateModelValue:m,selection:S,hasSelection:k,selectionInfo:C,insert:E,replace:A});function m(L){o("update:modelValue",L)}function k(){return v.value.selectionStart!==v.value.selectionEnd}function S(){const L=v.value;return L.value.substring(L.selectionStart,L.selectionEnd)||""}function C(){const L=v.value,W=L.value,ce=L.selectionStart,Q=W.substring(ce,L.selectionEnd)||"",H=W.substring(0,ce),de=H.lastIndexOf(`
`);return{value:W,sel:Q,selPos:ce,beforeSel:H,afterSel:W.substring(ce),prevCRPos:de,beforeCR:de>=0?H.substring(0,de+1):"",afterCR:de>=0?H.substring(de+1):""}}function A({value:L,selectionStart:W,selectionEnd:ce}){ce==null&&(ce=W),m(L),Ut(()=>{v.value.focus(),v.value.setSelectionRange(W,ce)})}function E(L,W,ce="",{selectionAtEnd:Q,offsetStart:H,offsetEnd:de,filterValue:Ce,filterSelection:R}={}){const $=v.value;let O=$.value,D=$.selectionEnd;r.push({value:O,selectionStart:$.selectionStart,selectionEnd:$.selectionEnd}),a=[];const fe=$.selectionStart,b=$.selectionEnd;let w=O.substring(0,fe),T=O.substring(b);const V=L&&w.endsWith(L)&&T.startsWith(W);if(fe==b){if(V?(O=w.substring(0,w.length-L.length)+T.substring(W.length),D+=-W.length):(O=w+L+ce+W+T,D+=L.length,H=0,de=(ce==null?void 0:ce.length)||0,Q&&(D+=de,de=0)),Ce){var j={pos:D};O=Ce(O,j),D=j.pos}}else{var z=O.substring(fe,b);R&&(z=R(z)),V?(O=w.substring(0,w.length-L.length)+z+T.substring(W.length),H=-z.length-L.length,de=z.length):(O=w+L+z+W+T,H?D+=(L+W).length:(D=fe,H=L.length,de=z.length))}m(O),Ut(()=>{$.focus(),H=D+(H||0),de=(H||0)+(de||0),$.setSelectionRange(H,de)})}const M=()=>E("**","**","bold"),q=()=>E("_","_","italics"),I=()=>E("~~","~~","strikethrough"),U=()=>E("[","](https://)","",{offsetStart:-9,offsetEnd:8}),G=()=>E(`
> `,`
`,"Blockquote",{}),re=()=>E("![](",")");function Z(L){const W=S();if(W&&!L.shiftKey)E("`","`","code");else{const ce=s.lang||"js";W.indexOf(`
`)===-1?E("\n```"+ce+`
`,"\n```\n","// code"):E("```"+ce+`
`,"```\n","")}}function pe(){if(k()){let{sel:L,selPos:W,beforeSel:ce,afterSel:Q,prevCRPos:H,beforeCR:de,afterCR:Ce}=C();if(L.indexOf(`
`)===-1)E(`
 1. `,`
`);else if(L.startsWith(" 1. "))E("","","",{filterValue:(R,$)=>{if(H>=0){let O=Ce.replace(/^ - /,"");ce=de+O,$.pos-=Ce.length-O.length}return ce+Q},filterSelection:R=>R.replace(/^ 1. /g,"").replace(/\n \d+. /g,`
`)});else{let R=1;E("",""," - ",{selectionAtEnd:!0,filterSelection:$=>" 1. "+$.replace(/\n$/,"").replace(/\n/g,O=>`
 ${++R}. `)+`
`})}}else E(`
 1. `,`
`,"List Item",{offsetStart:-10,offsetEnd:9})}function ve(){if(k()){let{sel:L,selPos:W,beforeSel:ce,afterSel:Q,prevCRPos:H,beforeCR:de,afterCR:Ce}=C();L.indexOf(`
`)===-1?E(`
 - `,`
`):L.startsWith(" - ")?E("","","",{filterValue:(R,$)=>{if(H>=0){let O=Ce.replace(/^ - /,"");ce=de+O,$.pos-=Ce.length-O.length}return ce+Q},filterSelection:R=>R.replace(/^ - /g,"").replace(/\n - /g,`
`)}):E("",""," - ",{selectionAtEnd:!0,filterSelection:R=>" - "+R.replace(/\n$/,"").replace(/\n/g,`
 - `)+`
`})}else E(`
 - `,`
`,"List Item",{offsetStart:-10,offsetEnd:9})}function ue(){const L=S(),W=L.indexOf(`
`)===-1;L?W?E(`
## `,`
`,""):E("## ","",""):E(`
## `,`
`,"Heading",{offsetStart:-8,offsetEnd:7})}function J(){let{sel:L,selPos:W,beforeSel:ce,afterSel:Q,prevCRPos:H,beforeCR:de,afterCR:Ce}=C();!L.startsWith("//")&&!Ce.startsWith("//")?L?E("","","//",{selectionAtEnd:!0,filterSelection:R=>"//"+R.replace(/\n$/,"").replace(/\n/g,`
//`)+`
`}):A({value:de+"//"+Ce+Q,selectionStart:W+2}):E("","","",{filterValue:(R,$)=>{if(H>=0){let O=Ce.replace(/^\/\//,"");ce=de+O,$.pos-=Ce.length-O.length}return ce+Q},filterSelection:R=>R.replace(/^\/\//g,"").replace(/\n\/\//g,`
`)})}const ne=()=>E(`/*
`,`*/
`,"");function P(){if(r.length===0)return!1;const L=v.value,W=r.pop();return a.push({value:L.value,selectionStart:L.selectionStart,selectionEnd:L.selectionEnd}),A(W),!0}function F(){if(a.length===0)return!1;const L=v.value,W=a.pop();return r.push({value:L.value,selectionStart:L.selectionStart,selectionEnd:L.selectionEnd}),A(W),!0}const ee=()=>null;return Mt(()=>{r=[],a=[];const L=v.value;L.onkeydown=W=>{if(W.key==="Escape"||W.keyCode===27){o("close");return}const ce=String.fromCharCode(W.keyCode).toLowerCase();ce==="	"?(W.shiftKey?E("","","",{filterValue:(Q,H)=>{let{selPos:de,beforeSel:Ce,afterSel:R,prevCRPos:$,beforeCR:O,afterCR:D}=C();if($>=0){let fe=D.replace(/\t/g,"    ").replace(/^ ? ? ? ?/,"");Ce=O+fe,H.pos-=D.length-fe.length}return Ce+R},filterSelection:Q=>Q.replace(/\t/g,"    ").replace(/^ ? ? ? ?/g,"").replace(/\n    /g,`
`)}):E("","","    ",{selectionAtEnd:!0,filterSelection:Q=>"    "+Q.replace(/\n$/,"").replace(/\n/g,`
    `)+`
`}),W.preventDefault()):W.ctrlKey?ce==="z"?W.shiftKey?F()&&W.preventDefault():P()&&W.preventDefault():ce==="b"&&!W.shiftKey?(M(),W.preventDefault()):ce==="h"&&!W.shiftKey?(ue(),W.preventDefault()):ce==="i"&&!W.shiftKey?(q(),W.preventDefault()):ce==="q"&&!W.shiftKey?(G(),W.preventDefault()):ce==="k"?W.shiftKey?(re(),W.preventDefault()):(U(),W.preventDefault()):ce===","||W.key==="<"||W.key===">"||W.keyCode===188?(Z(W),W.preventDefault()):ce==="/"||W.key==="/"?(J(),W.preventDefault()):(ce==="?"||W.key==="?")&&W.shiftKey&&(ne(),W.preventDefault()):W.altKey&&(W.key==="1"||W.key==="0"?(pe(),W.preventDefault()):W.key==="-"?(ve(),W.preventDefault()):W.key==="s"&&(I(),W.preventDefault()))}}),(L,W)=>{var ce;return h(),y("div",null,[he(L.$slots,"header",Qe({inputElement:v.value,id:L.id,modelValue:L.modelValue,status:L.status},L.$attrs)),c.value?(h(),y("label",{key:0,for:L.id,class:_(`mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300 ${L.labelClass??""}`)},X(c.value),11,y5)):N("",!0),L.disabled?N("",!0):(h(),y("div",b5,[d("div",w5,[g("bold")?(h(),y("svg",{key:0,class:_(Pt),onClick:M,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},C5)):N("",!0),g("italics")?(h(),y("svg",{key:1,class:_(Pt),onClick:q,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},A5)):N("",!0),g("link")?(h(),y("svg",{key:2,class:_(Pt),onClick:U,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},P5)):N("",!0),g("blockquote")?(h(),y("svg",{key:3,class:_(Pt),onClick:G,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},L5)):N("",!0),g("image")?(h(),y("svg",{key:4,class:_(Pt),onClick:re,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},j5)):N("",!0),g("code")?(h(),y("svg",{key:5,class:_(Pt),onClick:Z,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},D5)):N("",!0),g("heading")?(h(),y("svg",{key:6,class:_(Pt),onClick:ue,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},H5)):N("",!0),g("orderedList")?(h(),y("svg",{key:7,class:_(Pt),icon:"",onClick:pe,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},U5)):N("",!0),g("unorderedList")?(h(),y("svg",{key:8,class:_(Pt),onClick:ve,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},G5)):N("",!0),g("strikethrough")?(h(),y("svg",{key:9,class:_(Pt),onClick:I,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},K5)):N("",!0),g("undo")?(h(),y("svg",{key:10,class:_(Pt),onClick:P,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},X5)):N("",!0),g("redo")?(h(),y("svg",{key:11,class:_(Pt),onClick:F,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},n3)):N("",!0),he(L.$slots,"toolbarbuttons",{instance:(ce=st())==null?void 0:ce.exposed})]),g("help")&&L.helpUrl?(h(),y("div",s3,[d("a",{title:"formatting help",target:"_blank",href:L.helpUrl,tabindex:"-1"},[(h(),y("svg",{class:_(Pt),xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a3))],8,o3)])):N("",!0)])),d("div",i3,[d("textarea",{ref_key:"txt",ref:v,name:L.id,id:L.id,class:_(f.value),label:L.label,value:L.modelValue,rows:L.rows||6,disabled:L.disabled,onInput:W[0]||(W[0]=Q=>{var H;return m(((H=Q.target)==null?void 0:H.value)||"")}),onKeydown:Lc(ee,["tab"])},null,42,l3)]),l.value?(h(),y("p",{key:2,class:"mt-2 text-sm text-red-500",id:`${L.id}-error`},X(l.value),9,u3)):L.help?(h(),y("p",{key:3,class:"mt-2 text-sm text-gray-500",id:`${L.id}-description`},X(L.help),9,c3)):N("",!0),he(L.$slots,"footer",Qe({inputElement:v.value,id:L.id,modelValue:L.modelValue,status:L.status},L.$attrs))])}}}),p3={key:0,class:"relative z-10 lg:hidden",role:"dialog","aria-modal":"true"},f3={class:"fixed inset-0 flex"},h3=d("span",{class:"sr-only"},"Close sidebar",-1),m3=d("svg",{class:"h-6 w-6 text-white dark:text-black",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),g3=[h3,m3],v3={class:"flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-black px-6 pb-2"},y3={class:"hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col"},b3={class:"flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-black px-6"},w3={class:_(["sticky top-0 flex items-center gap-x-6 bg-white dark:bg-black px-4 py-4 shadow-sm sm:px-6 lg:hidden"])},k3=d("span",{class:"sr-only"},"Open sidebar",-1),x3=d("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})],-1),C3=[k3,x3],S3=Te({__name:"SidebarLayout",setup(e,{expose:t}){const{transition:n}=Zc(),s=K(!0),o=K(""),r={entering:{cls:"transition-opacity ease-linear duration-300",from:"opacity-0",to:"opacity-100"},leaving:{cls:"transition-opacity ease-linear duration-300",from:"opacity-100",to:"opacity-0"}},a=K(""),i={entering:{cls:"transition ease-in-out duration-300 transform",from:"-translate-x-full",to:"translate-x-0"},leaving:{cls:"transition ease-in-out duration-300 transform",from:"translate-x-0",to:"-translate-x-full"}},l=K(""),c={entering:{cls:"ease-in-out duration-300",from:"opacity-0",to:"opacity-100"},leaving:{cls:"ease-in-out duration-300",from:"opacity-100",to:"opacity-0"}};function u(f){n(r,o,f),n(i,a,f),n(c,l,f),setTimeout(()=>s.value=f,300)}function p(){u(!0)}function g(){u(!1)}return t({show:p,hide:g,toggle:u}),(f,v)=>(h(),y("div",null,[s.value?(h(),y("div",p3,[d("div",{class:_(["fixed inset-0 bg-gray-900/80",o.value])},null,2),d("div",f3,[d("div",{class:_(["relative mr-16 flex w-full max-w-xs flex-1",a.value])},[d("div",{class:_(["absolute left-full top-0 flex w-16 justify-center pt-5",l.value])},[d("button",{type:"button",onClick:g,class:"-m-2.5 p-2.5"},g3)],2),d("div",v3,[he(f.$slots,"default")])],2)])])):N("",!0),d("div",y3,[d("div",b3,[he(f.$slots,"default")])]),d("div",w3,[d("button",{type:"button",onClick:p,class:"-m-2.5 p-2.5 text-gray-700 dark:text-gray-200 lg:hidden"},C3),he(f.$slots,"mobiletitlebar")])]))}}),T3={Alert:ng,AlertSuccess:hg,ErrorSummary:bg,InputDescription:kg,Icon:kd,Loading:P0,OutlineButton:L0,PrimaryButton:j0,SecondaryButton:D0,TextLink:B0,Breadcrumbs:W0,Breadcrumb:K0,NavList:X0,NavListItem:cv,AutoQueryGrid:zb,SettingsIcons:Qb,FilterViews:Ei,FilterColumn:Pi,QueryPrefs:Ii,EnsureAccess:Sd,EnsureAccessDialog:Jb,TextInput:o1,TextareaInput:d1,SelectInput:v1,CheckboxInput:T1,TagInput:G1,FileInput:gw,Autocomplete:Lw,Combobox:jw,DynamicInput:Vw,LookupInput:Yw,AutoFormFields:Xw,AutoForm:xk,AutoCreateForm:$k,AutoEditForm:c2,AutoViewForm:E2,ConfirmDelete:L2,FormLoading:D2,DataGrid:$2,CellFormat:U2,PreviewFormat:K2,HtmlFormat:tx,MarkupFormat:ox,MarkupModel:fx,CloseButton:bx,SlideOver:zx,ModalDialog:Nx,ModalLookup:DC,Tabs:GC,DarkModeToggle:YC,SignIn:v5,MarkdownInput:d3,SidebarLayout:S3},Zr=T3,A3={install(e){Object.keys(Zr).forEach(n=>{e.component(n,Zr[n])});function t(n){const s=Object.keys(n).filter(o=>n[o]).map(o=>`${encodeURIComponent(o)}=${encodeURIComponent(n[o])}`).join("&");return s?"?"+s:"./"}e.directive("href",function(n,s){n.href=t(s.value),n.onclick=o=>{o.preventDefault(),history.pushState(s.value,"",t(s.value))}})},component(e,t){return e?t?we.components[e]=t:we.components[e]||Zr[e]||null:null}};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const cs=typeof document<"u";function Td(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function M3(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Td(e.default)}const Ke=Object.assign;function Yr(e,t){const n={};for(const s in t){const o=t[s];n[s]=Wt(o)?o.map(e):e(o)}return n}const Ks=()=>{},Wt=Array.isArray,Ad=/#/g,_3=/&/g,P3=/\//g,E3=/=/g,I3=/\?/g,Md=/\+/g,L3=/%5B/g,R3=/%5D/g,_d=/%5E/g,z3=/%60/g,Pd=/%7B/g,j3=/%7C/g,Ed=/%7D/g,V3=/%20/g;function Li(e){return encodeURI(""+e).replace(j3,"|").replace(L3,"[").replace(R3,"]")}function O3(e){return Li(e).replace(Pd,"{").replace(Ed,"}").replace(_d,"^")}function Ea(e){return Li(e).replace(Md,"%2B").replace(V3,"+").replace(Ad,"%23").replace(_3,"%26").replace(z3,"`").replace(Pd,"{").replace(Ed,"}").replace(_d,"^")}function D3(e){return Ea(e).replace(E3,"%3D")}function B3(e){return Li(e).replace(Ad,"%23").replace(I3,"%3F")}function F3(e){return e==null?"":B3(e).replace(P3,"%2F")}function lo(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const H3=/\/$/,N3=e=>e.replace(H3,"");function Xr(e,t,n="/"){let s,o={},r="",a="";const i=t.indexOf("#");let l=t.indexOf("?");return i<l&&i>=0&&(l=-1),l>-1&&(s=t.slice(0,l),r=t.slice(l+1,i>-1?i:t.length),o=e(r)),i>-1&&(s=s||t.slice(0,i),a=t.slice(i,t.length)),s=q3(s??t,n),{fullPath:s+(r&&"?")+r+a,path:s,query:o,hash:lo(a)}}function $3(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Gl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function U3(e,t,n){const s=t.matched.length-1,o=n.matched.length-1;return s>-1&&s===o&&Cs(t.matched[s],n.matched[o])&&Id(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Cs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Id(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!W3(e[n],t[n]))return!1;return!0}function W3(e,t){return Wt(e)?Ql(e,t):Wt(t)?Ql(t,e):e===t}function Ql(e,t){return Wt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function q3(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),o=s[s.length-1];(o===".."||o===".")&&s.push("");let r=n.length-1,a,i;for(a=0;a<s.length;a++)if(i=s[a],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(a).join("/")}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var uo;(function(e){e.pop="pop",e.push="push"})(uo||(uo={}));var Zs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Zs||(Zs={}));function G3(e){if(!e)if(cs){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),N3(e)}const Q3=/^[^#]+#/;function J3(e,t){return e.replace(Q3,"#")+t}function K3(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Mr=()=>({left:window.scrollX,top:window.scrollY});function Z3(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=K3(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Jl(e,t){return(history.state?history.state.position-t:-1)+e}const Ia=new Map;function Y3(e,t){Ia.set(e,t)}function X3(e){const t=Ia.get(e);return Ia.delete(e),t}let e4=()=>location.protocol+"//"+location.host;function Ld(e,t){const{pathname:n,search:s,hash:o}=t,r=e.indexOf("#");if(r>-1){let i=o.includes(e.slice(r))?e.slice(r).length:1,l=o.slice(i);return l[0]!=="/"&&(l="/"+l),Gl(l,"")}return Gl(n,e)+s+o}function t4(e,t,n,s){let o=[],r=[],a=null;const i=({state:g})=>{const f=Ld(e,location),v=n.value,m=t.value;let k=0;if(g){if(n.value=f,t.value=g,a&&a===v){a=null;return}k=m?g.position-m.position:0}else s(f);o.forEach(S=>{S(n.value,v,{delta:k,type:uo.pop,direction:k?k>0?Zs.forward:Zs.back:Zs.unknown})})};function l(){a=n.value}function c(g){o.push(g);const f=()=>{const v=o.indexOf(g);v>-1&&o.splice(v,1)};return r.push(f),f}function u(){const{history:g}=window;g.state&&g.replaceState(Ke({},g.state,{scroll:Mr()}),"")}function p(){for(const g of r)g();r=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:p}}function Kl(e,t,n,s=!1,o=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:o?Mr():null}}function n4(e){const{history:t,location:n}=window,s={value:Ld(e,n)},o={value:t.state};o.value||r(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const p=e.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+l:e4()+e+l;try{t[u?"replaceState":"pushState"](c,"",g),o.value=c}catch(f){console.error(f),n[u?"replace":"assign"](g)}}function a(l,c){const u=Ke({},t.state,Kl(o.value.back,l,o.value.forward,!0),c,{position:o.value.position});r(l,u,!0),s.value=l}function i(l,c){const u=Ke({},o.value,t.state,{forward:l,scroll:Mr()});r(u.current,u,!0);const p=Ke({},Kl(s.value,l,null),{position:u.position+1},c);r(l,p,!1),s.value=l}return{location:s,state:o,push:i,replace:a}}function s4(e){e=G3(e);const t=n4(e),n=t4(e,t.state,t.location,t.replace);function s(r,a=!0){a||n.pauseListeners(),history.go(r)}const o=Ke({location:"",base:e,go:s,createHref:J3.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function o4(e){return typeof e=="string"||e&&typeof e=="object"}function Rd(e){return typeof e=="string"||typeof e=="symbol"}const zd=Symbol("");var Zl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Zl||(Zl={}));function Ss(e,t){return Ke(new Error,{type:e,[zd]:!0},t)}function un(e,t){return e instanceof Error&&zd in e&&(t==null||!!(e.type&t))}const Yl="[^/]+?",r4={sensitive:!1,strict:!1,start:!0,end:!0},a4=/[.+*?^${}()[\]/\\]/g;function i4(e,t){const n=Ke({},r4,t),s=[];let o=n.start?"^":"";const r=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(o+="/");for(let p=0;p<c.length;p++){const g=c[p];let f=40+(n.sensitive?.25:0);if(g.type===0)p||(o+="/"),o+=g.value.replace(a4,"\\$&"),f+=40;else if(g.type===1){const{value:v,repeatable:m,optional:k,regexp:S}=g;r.push({name:v,repeatable:m,optional:k});const C=S||Yl;if(C!==Yl){f+=10;try{new RegExp(`(${C})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${v}" (${C}): `+E.message)}}let A=m?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;p||(A=k&&c.length<2?`(?:/${A})`:"/"+A),k&&(A+="?"),o+=A,f+=20,k&&(f+=-8),m&&(f+=-20),C===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function i(c){const u=c.match(a),p={};if(!u)return null;for(let g=1;g<u.length;g++){const f=u[g]||"",v=r[g-1];p[v.name]=f&&v.repeatable?f.split("/"):f}return p}function l(c){let u="",p=!1;for(const g of e){(!p||!u.endsWith("/"))&&(u+="/"),p=!1;for(const f of g)if(f.type===0)u+=f.value;else if(f.type===1){const{value:v,repeatable:m,optional:k}=f,S=v in c?c[v]:"";if(Wt(S)&&!m)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const C=Wt(S)?S.join("/"):S;if(!C)if(k)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):p=!0);else throw new Error(`Missing required param "${v}"`);u+=C}}return u||"/"}return{re:a,score:s,keys:r,parse:i,stringify:l}}function l4(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function jd(e,t){let n=0;const s=e.score,o=t.score;for(;n<s.length&&n<o.length;){const r=l4(s[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-s.length)===1){if(Xl(s))return 1;if(Xl(o))return-1}return o.length-s.length}function Xl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const u4={type:0,value:""},c4=/[a-zA-Z0-9_]/;function d4(e){if(!e)return[[]];if(e==="/")return[[u4]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const o=[];let r;function a(){r&&o.push(r),r=[]}let i=0,l,c="",u="";function p(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function g(){c+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&p(),a()):l===":"?(p(),n=1):g();break;case 4:g(),n=s;break;case 1:l==="("?n=2:c4.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&i--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),p(),a(),o}function p4(e,t,n){const s=i4(d4(e.path),n),o=Ke(s,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function f4(e,t){const n=[],s=new Map;t=su({strict:!1,end:!0,sensitive:!1},t);function o(p){return s.get(p)}function r(p,g,f){const v=!f,m=tu(p);m.aliasOf=f&&f.record;const k=su(t,p),S=[m];if("alias"in p){const E=typeof p.alias=="string"?[p.alias]:p.alias;for(const M of E)S.push(tu(Ke({},m,{components:f?f.record.components:m.components,path:M,aliasOf:f?f.record:m})))}let C,A;for(const E of S){const{path:M}=E;if(g&&M[0]!=="/"){const q=g.record.path,I=q[q.length-1]==="/"?"":"/";E.path=g.record.path+(M&&I+M)}if(C=p4(E,g,k),f?f.alias.push(C):(A=A||C,A!==C&&A.alias.push(C),v&&p.name&&!nu(C)&&a(p.name)),Vd(C)&&l(C),m.children){const q=m.children;for(let I=0;I<q.length;I++)r(q[I],C,f&&f.children[I])}f=f||C}return A?()=>{a(A)}:Ks}function a(p){if(Rd(p)){const g=s.get(p);g&&(s.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&s.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function i(){return n}function l(p){const g=g4(p,n);n.splice(g,0,p),p.record.name&&!nu(p)&&s.set(p.record.name,p)}function c(p,g){let f,v={},m,k;if("name"in p&&p.name){if(f=s.get(p.name),!f)throw Ss(1,{location:p});k=f.record.name,v=Ke(eu(g.params,f.keys.filter(A=>!A.optional).concat(f.parent?f.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),p.params&&eu(p.params,f.keys.map(A=>A.name))),m=f.stringify(v)}else if(p.path!=null)m=p.path,f=n.find(A=>A.re.test(m)),f&&(v=f.parse(m),k=f.record.name);else{if(f=g.name?s.get(g.name):n.find(A=>A.re.test(g.path)),!f)throw Ss(1,{location:p,currentLocation:g});k=f.record.name,v=Ke({},g.params,p.params),m=f.stringify(v)}const S=[];let C=f;for(;C;)S.unshift(C.record),C=C.parent;return{name:k,path:m,params:v,matched:S,meta:m4(S)}}e.forEach(p=>r(p));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:i,getRecordMatcher:o}}function eu(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function tu(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:h4(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function h4(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function nu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function m4(e){return e.reduce((t,n)=>Ke(t,n.meta),{})}function su(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function g4(e,t){let n=0,s=t.length;for(;n!==s;){const r=n+s>>1;jd(e,t[r])<0?s=r:n=r+1}const o=v4(e);return o&&(s=t.lastIndexOf(o,s-1)),s}function v4(e){let t=e;for(;t=t.parent;)if(Vd(t)&&jd(e,t)===0)return t}function Vd({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function y4(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<s.length;++o){const r=s[o].replace(Md," "),a=r.indexOf("="),i=lo(a<0?r:r.slice(0,a)),l=a<0?null:lo(r.slice(a+1));if(i in t){let c=t[i];Wt(c)||(c=t[i]=[c]),c.push(l)}else t[i]=l}return t}function ou(e){let t="";for(let n in e){const s=e[n];if(n=D3(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Wt(s)?s.map(r=>r&&Ea(r)):[s&&Ea(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function b4(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Wt(s)?s.map(o=>o==null?null:""+o):s==null?s:""+s)}return t}const w4=Symbol(""),ru=Symbol(""),_r=Symbol(""),Ri=Symbol(""),La=Symbol("");function js(){let e=[];function t(s){return e.push(s),()=>{const o=e.indexOf(s);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Cn(e,t,n,s,o,r=a=>a()){const a=s&&(s.enterCallbacks[o]=s.enterCallbacks[o]||[]);return()=>new Promise((i,l)=>{const c=g=>{g===!1?l(Ss(4,{from:n,to:t})):g instanceof Error?l(g):o4(g)?l(Ss(2,{from:t,to:g})):(a&&s.enterCallbacks[o]===a&&typeof g=="function"&&a.push(g),i())},u=r(()=>e.call(s&&s.instances[o],t,n,c));let p=Promise.resolve(u);e.length<3&&(p=p.then(c)),p.catch(g=>l(g))})}function ea(e,t,n,s,o=r=>r()){const r=[];for(const a of e)for(const i in a.components){let l=a.components[i];if(!(t!=="beforeRouteEnter"&&!a.instances[i]))if(Td(l)){const u=(l.__vccOpts||l)[t];u&&r.push(Cn(u,n,s,a,i,o))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${i}" at "${a.path}"`);const p=M3(u)?u.default:u;a.mods[i]=u,a.components[i]=p;const f=(p.__vccOpts||p)[t];return f&&Cn(f,n,s,a,i,o)()}))}}return r}function au(e){const t=Je(_r),n=Je(Ri),s=x(()=>{const l=ge(e.to);return t.resolve(l)}),o=x(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],p=n.matched;if(!u||!p.length)return-1;const g=p.findIndex(Cs.bind(null,u));if(g>-1)return g;const f=iu(l[c-2]);return c>1&&iu(u)===f&&p[p.length-1].path!==f?p.findIndex(Cs.bind(null,l[c-2])):g}),r=x(()=>o.value>-1&&T4(n.params,s.value.params)),a=x(()=>o.value>-1&&o.value===n.matched.length-1&&Id(n.params,s.value.params));function i(l={}){if(S4(l)){const c=t[ge(e.replace)?"replace":"push"](ge(e.to)).catch(Ks);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:x(()=>s.value.href),isActive:r,isExactActive:a,navigate:i}}function k4(e){return e.length===1?e[0]:e}const x4=Te({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:au,setup(e,{slots:t}){const n=hr(au(e)),{options:s}=Je(_r),o=x(()=>({[lu(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[lu(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&k4(t.default(n));return e.custom?r:Vt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),C4=x4;function S4(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function T4(e,t){for(const n in t){const s=t[n],o=e[n];if(typeof s=="string"){if(s!==o)return!1}else if(!Wt(o)||o.length!==s.length||s.some((r,a)=>r!==o[a]))return!1}return!0}function iu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const lu=(e,t,n)=>e??t??n,A4=Te({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=Je(La),o=x(()=>e.route||s.value),r=Je(ru,0),a=x(()=>{let c=ge(r);const{matched:u}=o.value;let p;for(;(p=u[c])&&!p.components;)c++;return c}),i=x(()=>o.value.matched[a.value]);hn(ru,x(()=>a.value+1)),hn(w4,i),hn(La,o);const l=K();return Rt(()=>[l.value,i.value,e.name],([c,u,p],[g,f,v])=>{u&&(u.instances[p]=c,f&&f!==u&&c&&c===g&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Cs(u,f)||!g)&&(u.enterCallbacks[p]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=o.value,u=e.name,p=i.value,g=p&&p.components[u];if(!g)return uu(n.default,{Component:g,route:c});const f=p.props[u],v=f?f===!0?c.params:typeof f=="function"?f(c):f:null,k=Vt(g,Ke({},v,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(p.instances[u]=null)},ref:l}));return uu(n.default,{Component:k,route:c})||k}}});function uu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const M4=A4;function _4(e){const t=f4(e.routes,e),n=e.parseQuery||y4,s=e.stringifyQuery||ou,o=e.history,r=js(),a=js(),i=js(),l=qu(bn);let c=bn;cs&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Yr.bind(null,R=>""+R),p=Yr.bind(null,F3),g=Yr.bind(null,lo);function f(R,$){let O,D;return Rd(R)?(O=t.getRecordMatcher(R),D=$):D=R,t.addRoute(D,O)}function v(R){const $=t.getRecordMatcher(R);$&&t.removeRoute($)}function m(){return t.getRoutes().map(R=>R.record)}function k(R){return!!t.getRecordMatcher(R)}function S(R,$){if($=Ke({},$||l.value),typeof R=="string"){const T=Xr(n,R,$.path),V=t.resolve({path:T.path},$),j=o.createHref(T.fullPath);return Ke(T,V,{params:g(V.params),hash:lo(T.hash),redirectedFrom:void 0,href:j})}let O;if(R.path!=null)O=Ke({},R,{path:Xr(n,R.path,$.path).path});else{const T=Ke({},R.params);for(const V in T)T[V]==null&&delete T[V];O=Ke({},R,{params:p(T)}),$.params=p($.params)}const D=t.resolve(O,$),fe=R.hash||"";D.params=u(g(D.params));const b=$3(s,Ke({},R,{hash:O3(fe),path:D.path})),w=o.createHref(b);return Ke({fullPath:b,hash:fe,query:s===ou?b4(R.query):R.query||{}},D,{redirectedFrom:void 0,href:w})}function C(R){return typeof R=="string"?Xr(n,R,l.value.path):Ke({},R)}function A(R,$){if(c!==R)return Ss(8,{from:$,to:R})}function E(R){return I(R)}function M(R){return E(Ke(C(R),{replace:!0}))}function q(R){const $=R.matched[R.matched.length-1];if($&&$.redirect){const{redirect:O}=$;let D=typeof O=="function"?O(R):O;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=C(D):{path:D},D.params={}),Ke({query:R.query,hash:R.hash,params:D.path!=null?{}:R.params},D)}}function I(R,$){const O=c=S(R),D=l.value,fe=R.state,b=R.force,w=R.replace===!0,T=q(O);if(T)return I(Ke(C(T),{state:typeof T=="object"?Ke({},fe,T.state):fe,force:b,replace:w}),$||O);const V=O;V.redirectedFrom=$;let j;return!b&&U3(s,D,O)&&(j=Ss(16,{to:V,from:D}),W(D,D,!0,!1)),(j?Promise.resolve(j):re(V,D)).catch(z=>un(z)?un(z,2)?z:L(z):F(z,V,D)).then(z=>{if(z){if(un(z,2))return I(Ke({replace:w},C(z.to),{state:typeof z.to=="object"?Ke({},fe,z.to.state):fe,force:b}),$||V)}else z=pe(V,D,!0,w,fe);return Z(V,D,z),z})}function U(R,$){const O=A(R,$);return O?Promise.reject(O):Promise.resolve()}function G(R){const $=H.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(R):R()}function re(R,$){let O;const[D,fe,b]=P4(R,$);O=ea(D.reverse(),"beforeRouteLeave",R,$);for(const T of D)T.leaveGuards.forEach(V=>{O.push(Cn(V,R,$))});const w=U.bind(null,R,$);return O.push(w),Ce(O).then(()=>{O=[];for(const T of r.list())O.push(Cn(T,R,$));return O.push(w),Ce(O)}).then(()=>{O=ea(fe,"beforeRouteUpdate",R,$);for(const T of fe)T.updateGuards.forEach(V=>{O.push(Cn(V,R,$))});return O.push(w),Ce(O)}).then(()=>{O=[];for(const T of b)if(T.beforeEnter)if(Wt(T.beforeEnter))for(const V of T.beforeEnter)O.push(Cn(V,R,$));else O.push(Cn(T.beforeEnter,R,$));return O.push(w),Ce(O)}).then(()=>(R.matched.forEach(T=>T.enterCallbacks={}),O=ea(b,"beforeRouteEnter",R,$,G),O.push(w),Ce(O))).then(()=>{O=[];for(const T of a.list())O.push(Cn(T,R,$));return O.push(w),Ce(O)}).catch(T=>un(T,8)?T:Promise.reject(T))}function Z(R,$,O){i.list().forEach(D=>G(()=>D(R,$,O)))}function pe(R,$,O,D,fe){const b=A(R,$);if(b)return b;const w=$===bn,T=cs?history.state:{};O&&(D||w?o.replace(R.fullPath,Ke({scroll:w&&T&&T.scroll},fe)):o.push(R.fullPath,fe)),l.value=R,W(R,$,O,w),L()}let ve;function ue(){ve||(ve=o.listen((R,$,O)=>{if(!de.listening)return;const D=S(R),fe=q(D);if(fe){I(Ke(fe,{replace:!0,force:!0}),D).catch(Ks);return}c=D;const b=l.value;cs&&Y3(Jl(b.fullPath,O.delta),Mr()),re(D,b).catch(w=>un(w,12)?w:un(w,2)?(I(Ke(C(w.to),{force:!0}),D).then(T=>{un(T,20)&&!O.delta&&O.type===uo.pop&&o.go(-1,!1)}).catch(Ks),Promise.reject()):(O.delta&&o.go(-O.delta,!1),F(w,D,b))).then(w=>{w=w||pe(D,b,!1),w&&(O.delta&&!un(w,8)?o.go(-O.delta,!1):O.type===uo.pop&&un(w,20)&&o.go(-1,!1)),Z(D,b,w)}).catch(Ks)}))}let J=js(),ne=js(),P;function F(R,$,O){L(R);const D=ne.list();return D.length?D.forEach(fe=>fe(R,$,O)):console.error(R),Promise.reject(R)}function ee(){return P&&l.value!==bn?Promise.resolve():new Promise((R,$)=>{J.add([R,$])})}function L(R){return P||(P=!R,ue(),J.list().forEach(([$,O])=>R?O(R):$()),J.reset()),R}function W(R,$,O,D){const{scrollBehavior:fe}=e;if(!cs||!fe)return Promise.resolve();const b=!O&&X3(Jl(R.fullPath,0))||(D||!O)&&history.state&&history.state.scroll||null;return Ut().then(()=>fe(R,$,b)).then(w=>w&&Z3(w)).catch(w=>F(w,R,$))}const ce=R=>o.go(R);let Q;const H=new Set,de={currentRoute:l,listening:!0,addRoute:f,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:k,getRoutes:m,resolve:S,options:e,push:E,replace:M,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:r.add,beforeResolve:a.add,afterEach:i.add,onError:ne.add,isReady:ee,install(R){const $=this;R.component("RouterLink",C4),R.component("RouterView",M4),R.config.globalProperties.$router=$,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>ge(l)}),cs&&!Q&&l.value===bn&&(Q=!0,E(o.location).catch(fe=>{}));const O={};for(const fe in bn)Object.defineProperty(O,fe,{get:()=>l.value[fe],enumerable:!0});R.provide(_r,$),R.provide(Ri,Uu(O)),R.provide(La,l);const D=R.unmount;H.add(R),R.unmount=function(){H.delete(R),H.size<1&&(c=bn,ve&&ve(),ve=null,l.value=bn,Q=!1,P=!1),D()}}};function Ce(R){return R.reduce(($,O)=>$.then(()=>G(O)),Promise.resolve())}return de}function P4(e,t){const n=[],s=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let a=0;a<r;a++){const i=t.matched[a];i&&(e.matched.find(c=>Cs(c,i))?s.push(i):n.push(i));const l=e.matched[a];l&&(t.matched.find(c=>Cs(c,l))||o.push(l))}return[n,s,o]}function $S(){return Je(_r)}function US(e){return Je(Ri)}function E4(e){const{extendRoutes:t,routes:n}=e;return t&&console.warn('"extendRoutes()" is deprecated, please modify the routes directly. See https://uvr.esm.is/guide/extending-routes.html#extending-routes-at-runtime for an alternative.'),_4(Object.assign(e,{routes:typeof t=="function"&&t(n)||n}))}const I4="modulepreload",L4=function(e){return"/"+e},cu={},Be=function(t,n,s){let o=Promise.resolve();if(n&&n.length>0){let a=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=a(n.map(c=>{if(c=L4(c),c in cu)return;cu[c]=!0;const u=c.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":I4,u||(g.as="script"),g.crossOrigin="",g.href=c,l&&g.setAttribute("nonce",l),document.head.appendChild(g),u)return new Promise((f,v)=>{g.addEventListener("load",f),g.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return o.then(a=>{for(const i of a||[])i.status==="rejected"&&r(i.reason);return t().catch(r)})},Od=[{path:"/",name:"/",component:()=>Be(()=>import("./index-D0Aquiur.js"),__vite__mapDeps([0,1,2,3,4,5]))},{path:"/:all(.*)",name:"/[...all]",component:()=>Be(()=>import("./_...all_-DncBvGUq.js"),[]),meta:{layout:"empty"}},{path:"/about",name:"/about",component:()=>Be(()=>import("./about-DZEC4J8j.js"),__vite__mapDeps([6,7])),meta:{crumbs:[],frontmatter:{title:"About this Template"}}},{path:"/blog",name:"/blog",component:()=>Be(()=>import("./blog-CCj4ilRs.js"),__vite__mapDeps([8,1,9,10,5]))},{path:"/counter",name:"/counter",component:()=>Be(()=>import("./counter-Bn2fHmPx.js"),__vite__mapDeps([11,1]))},{path:"/posts",children:[{path:"",name:"/posts/",component:()=>Be(()=>import("./index-IYGy7FLn.js"),__vite__mapDeps([12,1,13,5]))},{path:":slug",name:"/posts/[slug]",component:()=>Be(()=>import("./_slug_-B-07aiyw.js"),__vite__mapDeps([14,3,5]))},{path:"author",children:[{path:":name",name:"/posts/author/[name]",component:()=>Be(()=>import("./_name_-5TVcZ_2g.js"),__vite__mapDeps([15,13,5]))}]},{path:"tagged",children:[{path:":tag",name:"/posts/tagged/[tag]",component:()=>Be(()=>import("./_tag_-CZeLH135.js"),__vite__mapDeps([16,13,5]))}]},{path:"year",children:[{path:":year",name:"/posts/year/[year]",component:()=>Be(()=>import("./_year_-DGldcvIO.js"),__vite__mapDeps([17,13,5]))}]}]},{path:"/privacy",name:"/privacy",component:()=>Be(()=>import("./privacy-BmXmRbEQ.js"),__vite__mapDeps([18,7])),meta:{crumbs:[],frontmatter:{title:"Privacy Policy"}}},{path:"/videos",name:"/videos",component:()=>Be(()=>import("./videos-CM8T1Jxt.js"),__vite__mapDeps([19,1,2,3]))},{path:"/whatsnew",name:"/whatsnew",component:()=>Be(()=>import("./whatsnew-4i5za0gK.js"),__vite__mapDeps([20,3,9,21]))}],R4=e=>{const t={};Object.entries(Object.assign({"/src/layouts/default.vue":()=>Be(()=>import("./default-DrjoizYt.js"),__vite__mapDeps([22,10,9])),"/src/layouts/empty.vue":()=>Be(()=>import("./empty-C9TE8qYs.js"),__vite__mapDeps([23,9]))})).forEach(([o,r])=>{let a=o.replace("/src/layouts/","").replace(".vue","");t[a]=r});function s(o,r=!0){return o.map(a=>{var i,l,c,u,p,g;if(((i=a.children)==null?void 0:i.length)>0&&(a.children=s(a.children,!1)),r){if(!a.component&&((l=a.children)==null?void 0:l.find(v=>{var m;return(v.path===""||v.path==="/")&&((m=v.meta)==null?void 0:m.isLayout)})))return a;if(((c=a.meta)==null?void 0:c.layout)!==!1)return{path:a.path,component:t[((u=a.meta)==null?void 0:u.layout)||"default"],children:a.path==="/"?[a]:[{...a,path:""}],meta:{isLayout:!0}}}return(p=a.meta)!=null&&p.layout?{path:a.path,component:t[(g=a.meta)==null?void 0:g.layout],children:[{...a,path:""}],meta:{isLayout:!0}}:a})}return s(e)},z4={blog:{config:{localBaseUrl:"http://localhost:5173",publicBaseUrl:"https://press-vue.servicestack.net",siteTwitter:"@Vue",blogTitle:"From the blog",blogDescription:"Writing on software design and aerospace industry.",blogEmail:"email@example.org (Vue)",blogImageUrl:"https://servicestack.net/img/logo.png"},authors:[{name:"Lucy Bates",email:"lucy@email.org",bio:"Works in software design, company building, and the aerospace industry.",profileUrl:"/img/profiles/user1.svg",twitterUrl:"https://twitter.com/lucy",threadsUrl:"https://threads.net/@lucy",gitHubUrl:"https://github.com/lucy"},{name:"Gayle Smith",email:"gayle@email.org",bio:"Gayle is an author, consultant, and founder focusing on improving tech.",profileUrl:"/img/profiles/user2.svg",twitterUrl:"https://twitter.com/gayle",mastodonUrl:"https://mastodon.social/@gayle"},{name:"Brandon Foley",email:"brandon@email.org",bio:"I am a programmer at heart. I like to tinker with code and build generic coding structures.",profileUrl:"/img/profiles/user3.svg",gitHubUrl:"https://github.com/brandon"}],posts:[{slug:"vite-press-plugin",path:"src/_posts/2024-03-01_vite-press-plugin.md",fileName:"vite-press-plugin.md",content:`The Vite Press Plugin is an alternative to [VitePress](https://vitepress.dev) for adding Markdown features 
to existing Vite Vue or React projects. It's a non-intrusive plugin for Vue and React Vite apps that want to 
add markdown powered content features without needing to adopt an opinionated framework for their entire App.

## Universal Markdown Features

A goal for **vite-press-plugin** is to implement a suite of universal markdown-powered features that can be reused across 
Vue, React and .NET Razor and Blazor projects, allowing you to incorporate same set of markdown feature 
folders to power markdown content features across a range of websites built with different technologies.

### Vite Apps with vite-press-plugin

The **vite-press-plugin** currently powers the markdown features in the static Vite Vue and React templates which are
ideal for creating static websites, blogs, documentation and marketing websites that can be hosted FREE on [GitHub Pages CDN](https://pages.github.com):

#### Static Vite Templates with vite-press-plugin

- [press-vue](https://press-vue.servicestack.net) - Vite Vue App
- [press-react](https://press-react.servicestack.net) - Vite React App

<div class="not-prose mt-8 grid grid-cols-2 gap-4">
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://press-vue.servicestack.net">
        <img class="p-2" src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/press-vue.png" />
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">press-vue.servicestack.net</div>
    </a>
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://press-react.servicestack.net">
        <img class="p-2" src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/press-react.png" />
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">press-react.servicestack.net</div>
    </a>
</div>

The **vite-press-plugin** makes the Markdown features available to the Vite App, whilst the markdown rendering itself is optimally
implemented in:

- Vue Templates - with [markdown-it](https://github.com/markdown-it/markdown-it) in [Vue SFC](https://vuejs.org/guide/scaling-up/sfc.html) Components
- React Templates - with [remark](https://github.com/remarkjs/remark) and [MDX](https://mdxjs.com) in [React](https://react.dev) Components

#### .NET 8 API backend with Vite Vue & React SPA frontend

When more capabilities are required and you want a .NET API backend to your Vite Vue or React SPA frontend, 
you can use one of our integrated .NET 8 SPA templates:

 - [vue-spa](https://vue-spa.web-templates.io) - .NET 8 API with Vite Vue SPA frontend
 - [react-spa](https://react-spa.web-templates.io) - .NET 8 API with Vite React SPA frontend

<div class="not-prose mt-8 grid grid-cols-2 gap-4">
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://vue-spa.web-templates.io">
        <img class="p-2" src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/vue-spa.png" />
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">vue-spa.web-templates.io</div>
    </a>
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://react-spa.web-templates.io">
        <img class="p-2" src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/react-spa.png" />
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">react-spa.web-templates.io</div>
    </a>
</div>

### .NET Templates with C# and Markdig

Whilst the same Markdown feature folders are [implemented in C#](https://razor-ssg.web-templates.io/posts/razor-ssg)
and rendered with [Markdig](https://github.com/xoofx/markdig) and either Razor Pages or Blazor Components:

#### .NET 8 Razor SSG and Blazor SSR Templates

 - [razor-ssg](https://razor-ssg.web-templates.io) - .NET Razor SSG Blog and Marketing Website with **Markdig**
 - [razor-press](https://razor-press.web-templates.io) - .NET Razor SSG Documentation Website with **Markdig**
 - [blazor-vue](https://blazor-vue.web-templates.io) - .NET 8 Blazor Server Rendered Website with **Markdig**

<div class="not-prose mt-8 grid grid-cols-2 gap-4">
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://razor-ssg.web-templates.io">
        <img class="p-2" src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/razor-ssg.png" />
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">razor-ssg.web-templates.io</div>
    </a>
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://blazor-vue.web-templates.io">
        <img class="p-2" src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/blazor-vue.png" />
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">blazor-vue.web-templates.io</div>
    </a>
</div>

### Markdown Feature Folders

The content for each Markdown feature is maintained within its own feature folder with a \`_\` prefix:

\`\`\`files
/_includes
/_posts
/_videos
/_whatsnew
\`\`\`

#### Markdown Document Structure

Additional metadata for each markdown page is maintained in the frontmatter of each markdown page, e.g.
the front matter for this blog post contains:

\`\`\`md
---
title:   Vite Press Plugin
summary: Introducing the Vite Press Plugin
author:  Lucy Bates
tags:    [docs,markdown]
image:   https://source.unsplash.com/random/2000x1000/?stationary
---
\`\`\`

The frontmatter is used in combination with file attributes to populate the document metadata.
The schema used to support the current markdown features include:

\`\`\`ts
type Doc = {
    title: string     // title of Markdown page (frontmatter)
    slug: string      // slug to page (populated)
    path: string      // path to page (populated)
    fileName: string  // filename of markdown file (populated)
    content: string   // markdown content (populated)
    date: string      // date of page (frontmatter)
    tags: string[]    // related tags (frontmatter)
    order?: number    // explicit page ordering (frontmatter)
    group?: string    // which group page belongs to (populated)
    draft?: boolean   // make visible in production (frontmatter)
    wordCount: number      // (populated)
    lineCount: number      // (populated)
    minutesToRead: number  // (populated)
}

type Post = Doc & {
    summary: string // short summary of blog post (frontmatter)
    author: string  // author of blog post (frontmatter)
    image: string   // hero image of blog post (frontmatter)
}

type Video = Doc & {
    url: string // URL of YouTube Video
}

type WhatsNew = Doc & {
    url: string    // URL of YouTube Video
    image: string  // Image to display for feature
}
\`\`\`

Markdown files can contain additional frontmatter which is also merged with the document metadata.

### Accessing Markdown Metadata

In Vue App's the Metadata is available as an injected dependency that's navigable with the typed \`VirtualPress\` schema, e.g:

\`\`\`ts
import type { VirtualPress } from "vite-plugin-press"

const press:VirtualPress = inject('press')!
\`\`\`

In React App's it's available via an injected context:

\`\`\`ts
import { PressContext } from "@/contexts"

const press = useContext(PressContext)
\`\`\`

Which is defined as:

\`\`\`ts
import { createContext } from 'react'
import type { VirtualPress } from 'vite-plugin-press'

export const PressContext = createContext<VirtualPress>({} as VirtualPress)
\`\`\`

This \`VirtualPress\` metadata is used to power all markdown features.

### Blog

The blog maintains its markdown posts in a flat  [/_posts](https://github.com/NetCoreTemplates/vue-spa/tree/main/MyApp.Client/src/_posts) 
folder which each Markdown post containing its publish date and URL slug it should be published under, e.g:

\`\`\`files
/_posts
  2023-01-21_start.md
  2024-02-11_jwt-identity-auth.md
  2024-03-01_vite-press-plugin.md
\`\`\`

Supporting all Blog features requires several different pages to render each of its view:

| Description | Example | Vue | React | 
| - | - | - | - |
| Main Blog layout | [/blog](/blog) | [blog.vue](https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/blog.vue) | [blog.tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/blog.tsx) |
| Navigable Archive of Posts | [/posts](/posts) | [index.vue](https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/index.vue) | [index.tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/index.tsx) |
| Individual Blog Post (like this!) | [/posts/vite-press-plugin](/posts/vite-press-plugin) | [\\[slug\\].vue](https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/%5Bslug%5D.vue) | [\\[slug\\].tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/%5Bslug%5D.tsx) |
| Display Posts by Author | [/posts/author/lucy-bates](/posts/author/lucy-bates) | [\\[name\\].vue](https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/author/%5Bname%5D.vue) | [\\[name\\].tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/author/%5Bname%5D.tsx) |
| Display Posts by Tag | [/posts/tagged/markdown](/posts/tagged/markdown) | [\\[tag\\].vue](https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/tagged/%5Btag%5D.vue) | [\\[tag\\].tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/tagged/%5Btag%5D.tsx) |
| Display Posts by Year | [/posts/year/2024](/posts/year/2024) | [\\[year\\].vue](https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/posts/year/%5Byear%5D.vue) | [\\[year\\].tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/posts/year/%5Byear%5D.tsx) |

#### Configuration

Additional information about the Website Blog is maintained in \`_posts/config.json\`

\`\`\`json
{
  "localBaseUrl": "http://localhost:5173",
  "publicBaseUrl": "https://press-vue.servicestack.net",
  "siteTwitter": "@Vue",
  "blogTitle": "From the blog",
  "blogDescription": "Writing on software design and aerospace industry.",
  "blogEmail": "email@example.org (Vue)",
  "blogImageUrl": "https://servicestack.net/img/logo.png"
}
\`\`\`

#### Authors

Whilst information about Post Authors are maintained in \`_posts/authors.json\`

\`\`\`json
[
  {
    "name": "Lucy Bates",
    "email": "lucy@email.org",
    "bio": "Writing on software design and aerospace industry.",
    "profileUrl": "/img/profiles/user1.svg",
    "twitterUrl": "https://twitter.com/lucy",
    "threadsUrl": "https://threads.net/@lucy",
    "gitHubUrl": "https://github.com/lucy"
  },
]
\`\`\`

To associate an Author the **name** property is used to match a posts frontmatter **author**.

### General Features

Most unique markdown features are captured in their Markdown's frontmatter metadata, but in general these features
are broadly available for all features:

 - **Live Reload** - Latest Markdown content is displayed during **Development** 
 - **Drafts** - Prevent posts being worked on from being published with \`draft: true\`
 - **Future Dates** - Posts with a future date wont be published until that date

### What's New Feature

The [/whatsnew](/whatsnew) page is an example of creating a custom Markdown feature to implement a portfolio or a product releases page
where a new folder is created per release, containing both release date and release or project name, with all features in that release 
maintained markdown content sorted in alphabetical order:

\`\`\`files
/_whatsnew
  /2023-03-08_Animaginary
    feature1.md
  /2023-03-18_OpenShuttle
    feature1.md
  /2023-03-28_Planetaria
    feature1.md
\`\`\`

What's New follows the same structure as Pages feature which is rendered in:

 - [whatsnew.vue](https://github.com/NetCoreTemplates/vue-spa/blob/main/MyApp.Client/src/pages/whatsnew.vue)
 - [whatsnew.tsx](https://github.com/NetCoreTemplates/react-spa/blob/main/MyApp.Client/src/pages/whatsnew.tsx)
 
### Videos Feature

The videos feature maintained in the \`_videos\` folder allows grouping of related videos into different folder groups, e.g:

\`\`\`files
/_videos
  /vue
    admin.md
    autoquerygrid.md
    components.md
  /react
    locode.md
    bookings.md
    nextjs.md
\`\`\`

These can then be rendered as UI fragments using the \`<VideoGroup>\` component, e.g:

\`\`\`tsx
<VideoGroup
  title="Vue Components"
  summary="Learn about productive features in Vue Component Library"
  group="vue"
  learnMore="https://docs.servicestack.net/vue/" />
\`\`\`

### Includes Feature

The includes feature allows maintaining reusable markdown fragments in the \`_includes\` folder, e.g:

\`\`\`files
/_includes
  /features
    videos.md
    whatsnew.md
  privacy.md
\`\`\`

Which can be included in other Markdown files with:

\`\`\`md
:::include privacy.md:::

:::include features/include.md:::
\`\`\`

Alternatively they can be included in other Vue, React or Markdown pages with the \`<Include>\` component, e.g:

\`\`\`tsx
<Include src="privacy.md" />

<Include src="features/include.md" />
\`\`\`

### Metadata APIs Feature

To support external clients from querying static markdown metadata you can export it to pre-rendered static \`*.json\` 
data structures by configuring \`metadataPath\` to the location you the \`*.json\` files published to, e.g:

\`\`\`ts
export default defineConfig({
    plugins: [
        Press({
            metadataPath: 'public/api',
        }),
    ]
})
\`\`\`

This will publish all the content of each content type in the year they were published in, along with an \`all.json\` containing
all content published in that year as well aso for all time, e.g:

\`\`\`files
/meta
  /2022
    all.json
    posts.json
    videos.json
  /2023
    all.json
    posts.json
  /2024
    all.json
    posts.json
    videos.json
    whatsnew.json
  all.json
  index.json
\`\`\`

With this you can fetch the metadata of all the new **Blog Posts** added in **2023** from:

[/api/2024/blog.json](/api/2024/blog.json)

Or all the website content added in **2024** from:

[/api/2024/all.json](/api/2024/all.json)

Or **ALL** the website metadata content from:

[/api/all.json](/api/all.json)

This feature makes it possible to support use-cases like CreatorKit's
[Generating Newsletters](https://servicestack.net/creatorkit/portal-mailruns#generating-newsletters) feature which generates 
a Monthly Newsletter Email with all new content added within a specified period.

## Markdown Containers

Most of [VitePress Containers](https://vitepress.dev/guide/markdown#custom-containers) are also implemented, enabling
rich markup to enhance markdown content and documentation universally across all Markdown App implementations:

#### Input

    :::info
    This is an info box.
    :::

    :::tip
    This is a tip.
    :::

    :::warning
    This is a warning.
    :::

    :::danger
    This is a dangerous warning.
    :::

#### Output

:::info
This is an info box.
:::

:::tip
This is a tip.
:::

:::warning
This is a warning.
:::

:::danger
This is a dangerous warning.
:::

### Custom Title

You can specify a custom title by appending the text right after the container type:

#### Input

    :::danger STOP
    Danger zone, do not proceed
    :::

#### Output

:::danger STOP
Danger zone, do not proceed
:::


### copy

The **copy** container is ideal for displaying text snippets in a component that allows for easy copying:

#### Input

    :::copy
    Copy Me!
    :::

#### Output

:::copy
Copy Me!
:::

HTML or XML fragments can also be copied by escaping them first:

#### Input

\`\`\`md
:::copy
\`<PackageReference Include="ServiceStack" Version="8.*" />\`
:::
\`\`\`

#### Output

:::copy
\`<PackageReference Include="ServiceStack" Version="8.*" />\`
:::

### sh

Similarly the **sh** container is ideal for displaying and copying shell commands:

#### Input

    :::sh
    npm run dev
    :::

#### Output

:::sh
npm run dev
:::

### YouTube

For embedding YouTube Videos, optimally rendered using the \`<LiteYouTube>\` component, e.g:

#### Input

    :::youtube YIa0w6whe2U:::

#### Output

:::youtube YIa0w6whe2U:::

## Markdown Fenced Code Blocks

For more flexibility you can utilize custom fenced components like the \`files\` fenced code block which can 
be used to capture ascii representation of a structured documentation like a folder & file structure, e.g:

    \`\`\`files
    /_videos
      /vue
        admin.md
        autoquerygrid.md
        components.md
      /react
        locode.md
        bookings.md
        nextjs.md
    \`\`\`

That we can render into a more UX-friendly representation by calling the \`Files\` component with the body
of the code-block to convert the structured ascii layout into a more familiar GUI layout:

\`\`\`files
/_videos
  /vue
    admin.md
    autoquerygrid.md
    components.md
  /react
    locode.md
    bookings.md
    nextjs.md
\`\`\`

The benefit of this approach of marking up documentation is that the markdown content still remains in an optimal 
human-readable form even when the markdown renderer lacks the custom fenced components to render the richer UI.

## Components In Markdown

Up till now all above features will let you render the same markdown content in all available Vue, React, Razor or Blazor
templates. At the cost of reduced portability, you're also able to embed rich Interactive Vue or React components directly in 
markdown.

:::include component-links.md:::

`,date:"2024-03-01",tags:["docs","markdown"],wordCount:2419,lineCount:528,minutesToRead:11,title:"Vite Press Plugin",summary:"Introducing the Vite Press Plugin for Vite Vue & React Apps",author:"Lucy Bates",image:"https://images.unsplash.com/photo-1524668951403-d44b28200ce0?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/vite-press-plugin"},{slug:"markdown-components-in-vue",path:"src/_posts/2024-02-28_markdown-components-in-vue.md",fileName:"markdown-components-in-vue.md",content:`<script setup>
import Hello from "./components/Hello.vue"
import Counter from "./components/Counter.vue"
import Plugin from "./components/Plugin.vue"
import HelloApi from "./components/HelloApi.vue"
import ChartJs from "./components/ChartJs"
<\/script>

## Vue Components in Markdown Pages

Thanks to the [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import) plugin, App Components in
[/src/components](https://github.com/ServiceStack/press-vue/tree/main/src/components) are automatically imported
and can immediately referenced in \`*.md\` Markdown pages using normal Vue SFC syntax, e.g:

\`\`\`tsx
<GettingStarted template="press-vue" />
\`\`\`

<div class="py-20 not-prose flex justify-center">
  <GettingStarted template="press-vue" />
</div>

Additional Global Components can be registered in [main.ts](https://github.com/ServiceStack/press-vue/blob/main/src/main.ts)
when creating the Vue App where you can register entire Component libraries, Aliases and TypeScript Vue components, e.g

\`\`\`ts
import ServiceStackVue from "@servicestack/vue"
import { Icon } from '@iconify/vue'
import LiteYouTube from "@/components/LiteYouTube"

app
    .use(ServiceStackVue)        // @servicestack/vue library
    .component('Iconify', Icon)  // Alias
    .component('LiteYouTube', LiteYouTube) // .ts Vue Component
\`\`\`

Which can also be referenced inside \`*.md\` Markdown files without importing them:

\`\`\`tsx
<div class="py-20 flex justify-evenly">
  <Iconify class="w-28 h-28" icon="logos:vue" />
  <Iconify class="w-28 h-28" icon="logos:vitejs" />
  <Iconify class="w-28 h-28" icon="logos:react" />
</div>
\`\`\`

<div class="py-20 flex justify-evenly">
  <Iconify class="w-28 h-28" icon="logos:vue" />
  <Iconify class="w-28 h-28" icon="logos:vitejs" />
  <Iconify class="w-28 h-28" icon="logos:react" />
</div>

## Importing Vue Components

Any other components you want to use in the markdown pages will need to imported right at the top of the page using standard 
import syntax inside a \`<script setup>\` block, e.g:

\`\`\`tsx
<script setup>
import Hello from "./components/Hello.vue"
import Counter from "./components/Counter.vue"
import Plugin from "./components/Plugin.vue"
import HelloApi from "./components/HelloApi.vue"
import ChartJs from "./components/ChartJs"
<\/script>
\`\`\`

Which is recommended to use for any components only used in Markdown content, by maintaining them in the relative \`./components/\` 
folder to reference components in [/_posts/components/](https://github.com/ServiceStack/press-vue/tree/main/src/_posts/components),

Like the minimal [Hello.vue](https://github.com/ServiceStack/press-vue/blob/main/src/_posts/components/Hello.vue):

\`\`\`tsx
<template>
  <b>Hello, {{name}}!</b>
</template>

<script setup lang="ts">
defineProps<{ name:string }>()
<\/script>
\`\`\`

That can be referenced using normal Vue SFC component syntax, e.g:

\`\`\`tsx
<Hello name="Vue 3" />
\`\`\`

<div class="text-center text-2xl py-2">
    <Hello name="Vue 3" />
</div>

Since Markdown pages are eventually converted into Vue components themselves, there's no restriction into what
components can be referenced, from simple Reactive components:

\`\`\`tsx
<template>
  <b @click="count++">Counter {{count}}</b>
</template>

<script setup lang="ts">
import { ref } from "vue"
const count = ref(1)
<\/script>
\`\`\`

\`\`\`tsx
<Counter />
\`\`\`

<div class="text-center text-2xl py-2 cursor-pointer select-none">
    <Counter />
</div>

To components like [Plugin.vue](https://github.com/ServiceStack/press-vue/blob/main/src/_posts/components/Plugin.vue) that
make use of external Vue component libraries:

\`\`\`html
<template>
  <div>
    <PrimaryButton @click="show=true">Open Modal</PrimaryButton>
    <ModalDialog v-if="show" @done="show=false">
      <div class="p-8">Hello @servicestack/vue!</div>
    </ModalDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const show = ref(false)
<\/script>
\`\`\`

\`\`\`tsx
<Plugin />
\`\`\`

<div class="text-center">
    <Plugin id="plugin" class="text-2xl py-4" />
</div>

Or components that use Ajax to invoke JSON Server APIs like 
[HelloApi.vue](https://github.com/ServiceStack/press-vue/blob/main/src/_posts/components/HelloApi.vue):

\`\`\`html
<template>
  <div class="flex flex-wrap justify-center">
    <TextInput v-model="name" @keyup="update" />
    <div class="ml-3 mt-2 text-lg">{{ result }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { JsonServiceClient } from "@servicestack/client"
import { Hello } from "@/dtos"

const props = defineProps<{ value:string }>()

const name = ref(props.value)
const result = ref('')
const client = new JsonServiceClient('https://blazor-gallery.jamstacks.net')

async function update() {
  let api = await client.api(new Hello({ name:name.value }))
  if (api.succeeded) {
    result.value = api.response!.result
  }
}
update()
<\/script>
\`\`\`

\`\`\`tsx
<HelloApi value="Vue" />
\`\`\`

<HelloApi value="Vue" />

Or components relying on dynamically loading external CDN scripts like [Chart.JS](https://www.chartjs.org):

\`\`\`ts
import { ref, onMounted, defineComponent, h } from "vue"
import { addScript } from "@servicestack/client"

const loadJs = addScript('https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js')

declare var Chart:any

export default defineComponent({
    props:['type','data','options'],
    setup(props) {
        const chart = ref()
        onMounted(async () => {
            await loadJs

            const options = props.options || {
                responsive: true,
                legend: {
                    position: "top"
                }
            }
            new Chart(chart.value, {
                type: props.type || "bar",
                data: props.data,
                options,
            })

        })
        //<div><canvas ref="chart"></canvas></div>
        return () => h('div', {}, [h('canvas', { ref: chart })])
    }
})
\`\`\`

Which can be called with complex nested object graph properties:

\`\`\`tsx
<ChartJs :data="{
    labels: [
        '10,000 Rows',
        '100,000 Rows'
    ],
    datasets: [
    {
        label: 'SQLite Memory',
        backgroundColor: 'rgba(201, 203, 207, 0.2)',
        borderColor: 'rgb(201, 203, 207)',
        borderWidth: 1,
        data: [17.066, 166.747]
    },
    {
        label: 'SQLite Disk',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: [20.224, 199.697]
    },
    //...
]}" />
\`\`\`

To embed beautiful interactive charts directly within your Markdown documentation:

<ChartJs :data="{
    labels: [
        '10,000 Rows',
        '100,000 Rows'
    ],
    datasets: [
    {
        label: 'SQLite Memory',
        backgroundColor: 'rgba(201, 203, 207, 0.2)',
        borderColor: 'rgb(201, 203, 207)',
        borderWidth: 1,
        data: [17.066, 166.747]
    },
    {
        label: 'SQLite Disk',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: [20.224, 199.697]
    },
    {
        label: 'PostgreSQL',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgb(153, 102, 255)',
        borderWidth: 1,
        data: [14.389, 115.645]
    },
    {
        label: 'MySQL',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        borderWidth: 1,
        data: [64.389, 310.966]
    },
    {
        label: 'MySqlConnector',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgb(255, 159, 64)',
        borderWidth: 1,
        data: [64.427, 308.574]
    },
    {
        label: 'SQL Server',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: [89.821, 835.181]
    }]
}" />`,date:"2024-02-28",tags:["docs","markdown"],wordCount:971,lineCount:293,minutesToRead:4,title:"Vue Components in Markdown",summary:"How to reference and Import Vue Components in Markdown",author:"Lucy Bates",image:"https://images.unsplash.com/photo-1700427296131-0cc4c4610fc6?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/markdown-components-in-vue"},{slug:"net8-best-blazor",path:"src/_posts/2023-11-22_net8-best-blazor.md",fileName:"net8-best-blazor.md",content:`<script setup>
import Counter from "./components/Counter.vue";
import BlazorVueTemplate from "./components/BlazorVueTemplate.vue";
<\/script>

The best way to find out what's new in .NET 8 Blazor is to watch the excellent 
[Full stack web UI with Blazor in .NET 8](https://www.youtube.com/watch?v=QD2-DwuOfKM) presentation by Daniel Roth and Steve Sanderson, 
which covers how Blazor has become a Full Stack UI Web Technology for developing any kind of .NET Web App.

<LiteYouTube id="YwZdtLEtROA" title="Full stack web UI with Blazor in .NET 8 | .NET Conf 2023" />

## Your first .NET 8 Blazor App

You don't get to appreciate what this means until you create your first .NET 8 Blazor App where you'll be pleasantly
surprised that Blazor Apps render fast, clean HTML without needing to load large Web Assembly assets needed for 
Blazor WebAssembly Apps or starting a stateful Web Socket connection required for Blazor Server Interactive Apps.

This is because the **default rendering mode** for Blazor uses neither of these technologies, instead it returns to 
traditional Web App development where Blazor Pages now return clean, glorious HTML - courtesy of Blazor's 
[Static render mode](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes).

[![](https://servicestack.net/img/posts/net8-best-blazor/blazor-ssr.png)](https://learn.microsoft.com/en-us/aspnet/core/blazor/components/render-modes)

## Choose your compromise

Previously we were forced to choose upfront whether we wanted to build a Blazor Web Assembly App or a Blazor Server App and
the compromises that came with them, which for public Internet Web Apps wasn't even a choice as Blazor Server Apps perform poorly
over high latency Internet connections. 

This meant choosing Blazor Web Assembly Apps which required downloading a large Web Assembly runtime 
with users experiencing a long delay before the App was functional. To minimize this impact our Blazor WebAssembly Tailwind template 
included [built-in prerendering](https://blazor-tailwind.jamstacks.net/docs/prerender) where as part of deployment would 
generate **static .html pages** that were deployed with the Blazor Web Assembly front-end UI that can be hosted on CDN 
edge networks to further improve load times. 

Whilst this meant the App's UI would be rendered immediately, it still wouldn't be functional until the Web Assembly runtime was 
downloaded and initialized, which would flicker as the static UI was replaced with Blazor's WASM rendered UI, then later 
Authenticated users would experience further delay and UI jank whilst the App signs in the Authenticated User. 
Whilst prerendering is an improvement over Blazor WASM's default blank loading screen, it's still not ideal for public facing Web Apps.

## .NET 8 Blazor is a Game Changer

The situation has greatly improved in .NET 8 where your entire App no longer needs to be bound to a single Interactivity mode.
Even better, Blazor's default **static rendering** mode results in the best UX where the Website Layout and important 
landing pages can be rendered instantly.

### Interactive only when you need it

Only pages that need Blazor's interactivity features can opt-in to whichever Blazor interactive rendering mode makes 
the most sense, either on a page-by-page or component basis, or by choosing \`RenderMode.InteractiveAuto\` which uses
**InteractiveWebAssembly** if the WASM runtime is loaded or **InteractiveServer** if it isn't.

### Enhanced Navigation FTW

Ultimately I expect Blazor's new **Enhanced Navigation** is likely the feature that will deliver the biggest UX improvement 
users will experience given it's enabled by default and gives traditional statically rendered Web Apps instant SPA-like 
navigation responsiveness where new pages are swapped in without needing to perform expensive full page reloads.

It's beauty lies in being able to do this as a mostly transparent detail without the traditional SPA complexity of needing 
to manage complex state or client-side routing. It's a smart implementation that's able to perform fine-grained
DOM updates to only parts of pages that have changed, providing the ultimate UX of preserving page state,
like populated form fields and scroll position, to deliver a fast and responsive UX that previously wasn't attainable
from the simplicity of a Server Rendered App.

Its implementation does pose some challenges in implementing certain features, but we'll cover some approaches 
below we've used to overcome them below.

### Full Stack Web UI

Blazor's static rendering with enhanced navigation and its opt-in flexibility makes .NET 8 Blazor a game changer,
expanding it from a very niche set of use-cases that weren't too adversely affected by its Interactivity mode downsides,
to becoming a viable solution for developing any kind of .NET Web App, especially as it can also be utilized within
existing ASP.NET MVC and Razor Pages Apps.

### Benefits over MVC and Razor Pages

In addition, Blazor's superior component model allows building better encapsulated, more reusable and easier-to-use UI components
which has enabled Blazor's rich 3rd Party library ecosystem to flourish, that we ourselves utilize to develop
the high productivity Tailwind Components in the [ServiceStack.Blazor](https://blazor-gallery.servicestack.net) component library.

So far there's only upsides for .NET Web App development, the compromises only kick in when you need Blazor's interactivity features,
luckily these can now be scoped to just the Pages and Components that need them. But how often do we need them?

### When do you need Blazor's Interactivity features?

It ultimately depends on what App your building, but a lot of Websites can happily display dynamic content, navigate quickly 
with enhanced navigation, fill out and submit forms - all in Blazor's default static rendering mode.

Not even advanced features like **Streaming Rendering** used in Blazor Template's
[Weather.razor](https://github.com/dotnet/aspnetcore/blob/v8.0.0-rc.2.23480.2/src/ProjectTemplates/Web.ProjectTemplates/content/BlazorWeb-CSharp/BlazorWeb-CSharp/Components/Pages/Weather.razor)
page require interactivity, as its progressive rendered UI updates are achieved in a single request without interactivity.

In fact the only time \`@rendermode InteractiveServer\` is needed in the default Blazor template is in the 
[Counter.razor](https://github.com/dotnet/aspnetcore/blob/v8.0.0-rc.2.23480.2/src/ProjectTemplates/Web.ProjectTemplates/content/BlazorWeb-CSharp/BlazorWeb-CSharp/Components/Pages/Counter.razor#L3)
page whose C# Event Handling require it.

Ultimately some form of Interactivity is going to be required in order to add behavior or client-side functionality that 
runs after pages have been rendered, but you still have some options left before being forced to opt into an Interactive Blazor solution.

### Interactive Feature Options

We can see some of these options utilized in the Blazor Template 
[NavMenu.razor](https://github.com/dotnet/aspnetcore/blob/v8.0.0-rc.2.23480.2/src/ProjectTemplates/Web.ProjectTemplates/content/BlazorWeb-CSharp/BlazorWeb-CSharp/Components/Layout/NavMenu.razor)
component which uses JavaScript \`onclick\` event handlers to add client-side behavior to simulate mouse clicks to toggle UI elements:

\`\`\`html
<div class="nav-scrollable" onclick="document.querySelector('.navbar-toggler').click()">
\`\`\`

and submitting forms to Logout users:

\`\`\`html
<LogoutForm id="logout-form" />
<NavLink class="nav-link" onclick="document.getElementById('logout-form').submit(); return false;">
    <span class="bi bi-arrow-bar-left" aria-hidden="true"></span> Logout
</NavLink>
\`\`\`

Effectively adding interactivity to Blazor static rendered pages with client-side JavaScript to avoid paying Blazor's Interactivity tax.

#### Avoid using Interactivity in Layouts

This is especially important for any features you want to add to the Websites Layout or Chrome UI which you'll always want to be
statically rendered so landing pages can load fast and render SEO-friendly server rendered content. 

This meant we couldn't use ServiceStack.Blazor's existing [DarkModeToggle.razor](https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.Blazor/src/ServiceStack.Blazor/Components/Tailwind/DarkModeToggle.razor)
component for toggling on/off DarkMode since its statically rendered inside the Websites Layout and requires Interactivity to work.

### Vanilla JS Blazor Components

Fortunately utilizing simple element JavaScript callbacks was enough to be able to re-implement its functionality with Vanilla JS 
in the new [DarkModeToggleLite.razor](https://github.com/ServiceStack/ServiceStack/blob/main/ServiceStack.Blazor/src/ServiceStack.Blazor/Components/Tailwind/DarkModeToggleLite.razor)
component which works in all Blazor rendering modes, in both full-page or enhanced navigation loads:

\`\`\`html
<button type="button" onclick="toggleDarkMode()" class=@ClassNames(DarkModeToggle.ButtonClasses, Class) role="switch" aria-checked="false" @attributes="AdditionalAttributes">
    <span class="@DarkModeToggle.InnerClasses" data-class-light="translate-x-5" data-class-dark="translate-x-0">
        <span class="@DarkModeToggle.IconClasses" data-class-light="opacity-0 ease-out duration-100" data-class-dark="opacity-100 ease-in duration-200" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z" /></svg>
        </span>
        <span class="@DarkModeToggle.IconClasses" data-class-light="opacity-100 ease-in duration-200" data-class-dark="opacity-0 ease-out duration-100" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-600" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z" /></svg>
        </span>
    </span>
</button>

<script>
window.toggleDarkMode = (function() {
    let isDark = localStorage.getItem('color-scheme') === 'dark'
    const html = document.documentElement
    function renderDarkMode() {
        html.style.setProperty('color-scheme', isDark ? 'dark' : null)
        html.classList.toggle('dark', isDark)
        document.querySelectorAll('[data-class-light]').forEach(el => {
            const removeClasses = isDark
                    ? el.dataset.classLight
                    : el.dataset.classDark
            const addClasses = isDark
                    ? el.dataset.classDark
                    : el.dataset.classLight

            removeClasses.split(' ').forEach(c => el.classList.remove(c))
            addClasses.split(' ').forEach(c => el.classList.add(c))
        })
    }
    renderDarkMode()

    document.addEventListener('DOMContentLoaded', () =>
            Blazor.addEventListener('enhancedload', () => {
                isDark = localStorage.getItem('color-scheme') === 'dark'
                html.classList.toggle('dark', isDark)
                renderDarkMode()
            }))

    return function() {
        isDark = !isDark
        localStorage.setItem('color-scheme', isDark ? 'dark' : 'light')
        renderDarkMode()
    }
})()
<\/script>
\`\`\`

To support enhanced navigation you'll need to be aware that \`<script>\` tags are **only executed once** on initial page load.
You'll instead need to register a callback with Blazor's \`enhancedload\` event for any startup logic that needs re-executing, 
which is fired after Blazor merges the new page's DOM with the existing DOM, and is where the \`<DarkModeToggleLite>\` 
component re-renders itself with the correct state.

When using callbacks to invoke global functions like this it's recommended to wrap them in an [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) 
for better encapsulation of internal component state and functionality to avoid polluting the global namespace. 

### Try it out!

With that it's ready for action, try it out in a new [blazor](https://github.com/NetCoreTemplates/blazor) Project 
or from its Live Demo by toggling on/off Dark Mode Component in the top right corner:

<div class="not-prose mt-8 grid grid-cols-2 gap-4">
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://blazor-vue.web-templates.io/?light">
        <img class="p-2" src="https://servicestack.net/img/posts/net8-best-blazor/blazor-light.webp">
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">blazor-vue.web-templates.io?light</div>
    </a>
    <a class="block group border dark:border-gray-800 hover:border-indigo-700 dark:hover:border-indigo-700 flex flex-col justify-between" href="https://blazor-vue.web-templates.io/?dark">
        <img class="p-2" src="https://servicestack.net/img/posts/net8-best-blazor/blazor-dark.webp">
        <div class="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-semibold group-hover:bg-indigo-700 group-hover:text-white text-center py-2">blazor-vue.web-templates.io?dark</div>
    </a>
</div>

### Declarative JavaScript Modules  

Unfortunately a lot of other approaches won't work with Blazor's Enhanced Navigation, for example whilst the built-in 
ASP.NET Identity Pages all work without Blazor's Interactivity, the [EnableAuthenticator.razor](https://github.com/NetCoreTemplates/blazor/blob/main/MyApp/Components/Pages/Account/Manage/EnableAuthenticator.razor)
page doesn't actually include a solution for providing a visual QR Code barcode which mobile phones can easily scan to 
setup 2FA Authentication.

Whilst the placeholders are there, that implementation detail is left to us to workout how we best want to implement it 
within our Apps, perhaps because they don't want to force an Interactivity rendering mode in the default template.

To avoid a degraded UX with Blazor Interactivity you'll naturally want to implement this with JavaScript using the popular 
[qrcodejs](https://davidshimjs.github.io/qrcodejs/) library by following its instructions and adding a simple inline script to the page:

\`\`\`html
<div data-permanent id="qrCode"></div>
<div id="qrCodeData" data-url="@_authenticatorUri"></div>

<script src="lib/js/qrcode.min.js"><\/script>
<script>
new QRCode(document.getElementById('qrCode'), 
    document.getElementById('qrCodeData').dataset.url)
<\/script>
\`\`\`

Whilst this works as expected in full page reloads, it doesn't work in Blazor's Enhanced Navigation as the \`<script>\` tag
is only executed once on initial page load and not re-executed when the page is loaded with enhanced navigation.

Your options are to change all links to that page with \`data-enhance-nav="false"\` to turn off enhanced navigation 
to that page, or we need to find another way.

The solution that worked best for us is to use declarative instructions to specify which JavaScript modules should be loaded
for any page, which we can do by adding a \`data-module\` attribute to any element, e.g:

\`\`\`html
<div data-module="pages/Account/Manage/EnableAuthenticator.mjs">
\`\`\`

These instructions are then handled by [app.mjs](https://github.com/NetCoreTemplates/blazor/blob/main/MyApp/wwwroot/mjs/app.mjs)
on each navigation which loads the specified JavaScript module and calls its \`load()\` function if it exists:

\`\`\`js
export async function remount() {
    document.querySelectorAll('[data-module]').forEach(async el => {
        let modulePath = el.dataset.module
        if (!modulePath) return
        if (!modulePath.startsWith('/') && !modulePath.startsWith('.')) {
            modulePath = \`../\${modulePath}\`
        }
        try {
            const module = await import(modulePath)
            if (typeof module.default?.load == 'function') {
                module.default.load()
            }
        } catch (e) {
            console.error(\`Couldn't load module \${el.dataset.module}\`, e)
        }
    })
}

document.addEventListener('DOMContentLoaded', () =>
    Blazor.addEventListener('enhancedload', remount))
\`\`\`

Which for \`EnableAuthenticator.razor\` page loads the 
[EnableAuthenticator.mjs](https://github.com/NetCoreTemplates/blazor/blob/main/MyApp/wwwroot/pages/Account/Manage/EnableAuthenticator.mjs)
JavaScript Module which dynamically loads the \`qrcode.min.js\` library and initializes the QR Code on its exported \`load()\` function:

\`\`\`js
import { addScript, $1 } from "@servicestack/client"
const loadJs = addScript('lib/js/qrcode.min.js')

export default {
    async load() {
        await loadJs
        new QRCode($1("#qrCode"), $1('#qrCodeData').dataset.url)
    }
}
\`\`\`

Which now works as expected in both full page reloads and Blazor's Enhanced Navigation:

[![](https://servicestack.net/img/posts/net8-best-blazor/blazor-identityauth-qrcode.png)](https://blazor.web-templates.io/Account/Manage/EnableAuthenticator)

## Blazor without Blazor Interactivity

So right now we have a Blazor App that's predominantly statically rendered, with fast and SEO-friendly without any downsides 
of the Blazor's Interactivity options, but how much of our App's functionality can we implement without Blazor Interactivity?

### What doesn't work with Enhanced Navigation

As of now we've managed to implement most of the required functionality with Vanilla JS, however for any moderately complex
UI you'll likely want to use one of the popular JavaScript UI libraries, of which we believe [Vue.js](https://vuejs.org) 
is the best library for progressively enhancing statically rendered content which offers the best balance of features, 
performance and size.

The problem being that the natural way to use Vue.js to progressively enhance HTML content doesn't work with Blazor's 
Enhanced Navigation.

E.g the natural way to implement Blazor's [Counter.razor](https://github.com/NetCoreTemplates/blazor/blob/main/MyApp/Components/Pages/Counter.razor)
page in Vue is to [implement its UI](https://vuejs.org/guide/essentials/template-syntax.html) in HTML and use JavaScript 
to mount the component with the element:

\`\`\`html
<div id="content">
    <p class="my-4">Current count: {{currentCount}}</p>

    <primary-button v-on:click="incrementCount">Click me</primary-button>
</div>
<script type="module">
import { ref } from 'vue'
import { mount } from 'app.mjs'

const App = {
    setup() {
        const currentCount = ref(0)
        const incrementCount = () => currentCount.value++

        return { currentCount, incrementCount }
    }
}
mount('#content', App)
<\/script>
\`\`\`

Which as you'd expect works in full page reloads, but not with Enhanced Navigation, where no JavaScript
is re-executed upon navigation, leaving it as inert HTML.

## Declarative Vue Components

Thankfully we can use the same approach we used for loading JavaScript modules to load Vue.js components, by using the 
\`data-component\` attribute to specify which **global** Vue component to mount with any properties optionally
specified in the\`data-props\` attribute, e.g:

\`\`\`html
<div data-component="GettingStarted" data-props="{template:'blazor'}"></div> 
\`\`\`

This does require ensuring all components loaded this way are registered as a global component, as done in:

\`\`\`js
import GettingStarted from "./components/GettingStarted.mjs"

/** Shared Global Components */
const Components = {
    GettingStarted,
}

export function mount(sel, component, props) {
    const app = createApp(component, props)
    Object.keys(Components).forEach(name => {
        app.component(name, Components[name])
    })
    app.mount(document.querySelector(sel))
}
\`\`\`

However this also means that all global components would need to be downloaded before any Vue Components can be rendered
the first time a website is accessed. Which wont be an issue after the first page is loaded after the browser caches all 
its JS Module dependencies, but we can do better.

### Lazy Loading Vue Components

To avoid this we can instead use the \`data-component\` attribute to specify the path to the Vue component to load,
ensuring that only the Vue components required for the current page is loaded, e.g:

\`\`\`html
<div data-component="pages/Counter.mjs"></div> 
\`\`\`

Which is how we can implement Vue Components that work in both statically rendered and enhanced navigation pages:

\`\`\`js
import { ref } from 'vue'

export default {
    template: \`
        <p class="my-4">Current count: {{currentCount}}</p>

        <PrimaryButton @click="incrementCount">Click me</PrimaryButton>
    \`,
    setup() {
        const currentCount = ref(0)
        const incrementCount = () => currentCount.value++

        return { currentCount, incrementCount }
    }
}
\`\`\`

:::{.text-center}
#### Blazor Counter in Vue.js

<counter></counter>
:::

## The new Blazor Vue Template 

This ends up being how the Interactive features in the new [blazor-vue](https://github.com/NetCoreTemplates/blazor-vue/) template 
are implemented - ideal for building fast, SEO-friendly statically rendered Blazor Web Apps where all its dynamic functionally
uses Vue.js to progressively enhance its static rendered content - eliminating Blazor's current limitations of being able to 
use Blazor static SSR to implement an entire App with:

![](https://servicestack.net/img/posts/net8-best-blazor/blazor-ssr-advantages.webp)

### Blazor Vue Tailwind Template

The new [blazor-vue](https://github.com/NetCoreTemplates/blazor-vue) template implements all the features of the
[blazor](https://github.com/NetCoreTemplates/blazor) template but reimplements all its interactive features with
Vue.js to and the [Vue Components](/vue/) library.

<div class="not-prose mt-16 flex flex-col items-center">
   <div class="flex">
      <svg class="w-28 h-28 text-purple-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M23.834 8.101a13.912 13.912 0 0 1-13.643 11.72a10.105 10.105 0 0 1-1.994-.12a6.111 6.111 0 0 1-5.082-5.761a5.934 5.934 0 0 1 11.867-.084c.025.983-.401 1.846-1.277 1.871c-.936 0-1.374-.668-1.374-1.567v-2.5a1.531 1.531 0 0 0-1.52-1.533H8.715a3.648 3.648 0 1 0 2.695 6.08l.073-.11l.074.121a2.58 2.58 0 0 0 2.2 1.048a2.909 2.909 0 0 0 2.695-3.04a7.912 7.912 0 0 0-.217-1.933a7.404 7.404 0 0 0-14.64 1.603a7.497 7.497 0 0 0 7.308 7.405s.549.05 1.167.035a15.803 15.803 0 0 0 8.475-2.528c.036-.025.072.025.048.061a12.44 12.44 0 0 1-9.69 3.963a8.744 8.744 0 0 1-8.9-8.972a9.049 9.049 0 0 1 3.635-7.247a8.863 8.863 0 0 1 5.229-1.726h2.813a7.915 7.915 0 0 0 5.839-2.578a.11.11 0 0 1 .059-.034a.112.112 0 0 1 .12.053a.113.113 0 0 1 .015.067a7.934 7.934 0 0 1-1.227 3.549a.107.107 0 0 0-.014.06a.11.11 0 0 0 .073.095a.109.109 0 0 0 .062.004a8.505 8.505 0 0 0 5.913-4.876a.155.155 0 0 1 .055-.053a.15.15 0 0 1 .147 0a.153.153 0 0 1 .054.053A10.779 10.779 0 0 1 23.834 8.1zM8.895 11.628a2.188 2.188 0 1 0 2.188 2.188v-2.042a.158.158 0 0 0-.15-.15Z"></path></svg>
   </div>
</div>
<div class="not-prose mt-4 px-4 sm:px-6">
<div class="text-center"><h3 id="blazor-vue-template" class="text-4xl sm:text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900">
    Blazor Vue Template
</h3></div>
<div class="py-8 max-w-7xl mx-auto px-4 sm:px-6">
    <LiteYouTube id="ujbTGn4IwFs" title="Blazor Vue Template" />    
</div>
</div>

<div class="not-prose relative bg-white dark:bg-black py-4">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">Create a new Blazor Vue Tailwind App</p>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500"> 
            Create a new Blazor Vue Tailwind project with your preferred project name:
        </p>
    </div>
    <BlazorVueTemplate repo="NetCoreTemplates/blazor-vue" name="Blazor Vue" />
</div>

#### Faster iterative development

Other benefits of using Vue for Interactivity is the fast iterative feedback loop during development that even applies 
to its [Markdown-powered Blog](https://blazor-vue.web-templates.io/blog) which itself can embed rich interactive Vue Components and rich JavaScript UIs 
like Chart.js in its [Markdown Blog Posts](https://blazor-vue.web-templates.io/posts/razor-ssg-new-blog-features) thanks to its unapologetic, complexity-free 
[#NoBuild](https://world.hey.com/dhh/you-can-t-get-faster-than-no-build-7a44131c) solution.

### Blazor App Tailwind Template

Alternatively the [Blazor Project Template](/posts/net8-blazor-template) is for C# Developers who prefer 
to use Blazor end-to-end for all App functionality, which uses Blazor Server and 
[ServiceStack.Blazor Components](https://blazor-gallery.jamstacks.net/) on its Pages requiring Interactivity:

<div class="not-prose shadow rounded-sm p-4">
    <a href="/posts/net8-blazor-template">
        <img src="https://raw.githubusercontent.com/ServiceStack/Assets/master/csharp-templates/blazor.png" alt=""></a>
</div>

Whilst Blazor Interactivity may remain the predominant solution amongst .NET developers we believe .NET 8 Blazor opens the doors
for progressively enhanced statically-rendered Blazor Apps which has now become our preferred solution for developing
most .NET Web Apps.

It overcomes our biggest gripe with Blazor Web Assembly, that we were unsuccessful in
[prerendering away](https://blazor-tailwind.jamstacks.net/docs/prerender) its poor startup performance and UI jank
in Internet Apps.

## Blazor Vue Diffusion

So when we learned about .NET 8's static default rendering mode and enhanced navigation we jumped at the opportunity to
create the Blazor Vue template which was used to re-implement Blazor Diffusion with Blazor SSR and Vue.js - a statically 
rendered Blazor App that uses Vue.js for all its functionality.

<h3 class="not-prose text-center pb-8">
    <a class="text-4xl text-blue-600 hover:underline" href="https://blazordiffusion.com">https://blazordiffusion.com</a>
</h3>

[Blazor Diffusion](https://github.com/NetCoreApps/BlazorDiffusion) is our Blazor Demo App we used to showcase how you 
could use [Universal API Components](https://youtu.be/66DgLHExC9E) to build Blazor Components and entire Blazor Apps
whose source code runs in both Blazor Server and Blazor Web Assembly Interactive modes, which was first 
developed with [Blazor Server](https://github.com/NetCoreApps/BlazorDiffusion) then used a 
[sync.bat](https://github.com/NetCoreApps/BlazorDiffusionWasm/blob/main/sync.bat) script to export its source code into 
a [Blazor Web Assembly](https://github.com/NetCoreApps/BlazorDiffusionWasm) project that was deployed instead.

The Blazor Vue version starts from a clean slate, utilizing statically rendered Blazor for faster page loads and generating 
SEO-friendly content:

[![](https://servicestack.net/img/posts/net8-best-blazor/blazordiffusionvue.webp)](https://blazordiffusion.com/)

We're very pleased with the results, much faster loading times, enhanced navigation, no UI jankiness, better SEO - essentially 
a better UX overall, despite not needing any prerendering solution - all whilst enjoying a faster iterative development experience 
where all Vue component changes were immediately visible after save.

You can compare the differences of each Blazor Solution from the Live Demos below:

|                     | Live Demo                                                        | Source Code                                                               |
|---------------------|------------------------------------------------------------------|---------------------------------------------------------------------------|
| Blazor Vue          | [blazordiffusion.com](https://blazordiffusion.com)               | [BlazorDiffusionVue](https://github.com/NetCoreApps/BlazorDiffusionVue)   |
| Blazor Web Assembly | [api.blazordiffusion.com](https://api.blazordiffusion.com)       | [BlazorDiffusionWasm](https://github.com/NetCoreApps/BlazorDiffusionWasm) |
| Blazor Server       | [server.blazordiffusion.com](https://server.blazordiffusion.com) | [BlazorDiffusion](https://github.com/NetCoreApps/BlazorDiffusion)         |

> All Live Demos are hosted on a shared [Hetzner Cloud VM](http://cloud.hetzner.com) using SQLite that's replicated to [Cloudflare R2](https://developers.cloudflare.com/r2/) with [Litestream](https://docs.servicestack.net/ormlite/litestream)
`,date:"2023-11-22",tags:["c#","blazor","servicestack"],wordCount:4094,lineCount:503,minutesToRead:18,title:".NET 8's Best Blazor is not Blazor as we know it",summary:"We explore the exciting new potential of Blazor in .NET 8 to develop fast, interactive Web Apps without compromise",image:"https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?crop=entropy&fit=crop&h=1000&w=2000",author:"Gayle Smith",url:"/posts/net8-best-blazor"},{slug:"net8-blazor-template",path:"src/_posts/2023-11-20_net8-blazor-template.md",fileName:"net8-blazor-template.md",content:`<script setup>
import BlazorTemplate from "./components/BlazorTemplate.vue";
<\/script>

With the release of **.NET 8**, we're happy to announce ServiceStack's new [Blazor](https://blazor.web-templates.io/)
Tailwind project template that takes advantage of .NET 8 Blazor's new features that redefines modern Web Development in C#.

In this video overview we'll explore how the template, adopts Blazor's familiar **ASP.NET Core Identity** 
for its authentication, utilizes the modern [Tailwind CSS](https://tailwindcss.com) framework for beautiful responsive design
and adopts .NET's best-practice
[Docker Containerization](https://learn.microsoft.com/en-us/dotnet/core/docker/publish-as-container) support for its built-in
[GitHub Action Deployments](https://blazor.web-templates.io/deploy) which enables a simple ready-made CI solution for deployment to any
Linux Host via SSH and Docker compose.

We’ll also discuss the project's structure, usage of **ASP.NET Core Identity** for Authorization and utilizing
**ServiceStack Blazor Components** for data handling, all integrated to maximize developer efficiency in building Web Applications.

<div class="not-prose mt-16 flex flex-col items-center">
   <div class="flex">
      <svg class="w-28 h-28 text-purple-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M23.834 8.101a13.912 13.912 0 0 1-13.643 11.72a10.105 10.105 0 0 1-1.994-.12a6.111 6.111 0 0 1-5.082-5.761a5.934 5.934 0 0 1 11.867-.084c.025.983-.401 1.846-1.277 1.871c-.936 0-1.374-.668-1.374-1.567v-2.5a1.531 1.531 0 0 0-1.52-1.533H8.715a3.648 3.648 0 1 0 2.695 6.08l.073-.11l.074.121a2.58 2.58 0 0 0 2.2 1.048a2.909 2.909 0 0 0 2.695-3.04a7.912 7.912 0 0 0-.217-1.933a7.404 7.404 0 0 0-14.64 1.603a7.497 7.497 0 0 0 7.308 7.405s.549.05 1.167.035a15.803 15.803 0 0 0 8.475-2.528c.036-.025.072.025.048.061a12.44 12.44 0 0 1-9.69 3.963a8.744 8.744 0 0 1-8.9-8.972a9.049 9.049 0 0 1 3.635-7.247a8.863 8.863 0 0 1 5.229-1.726h2.813a7.915 7.915 0 0 0 5.839-2.578a.11.11 0 0 1 .059-.034a.112.112 0 0 1 .12.053a.113.113 0 0 1 .015.067a7.934 7.934 0 0 1-1.227 3.549a.107.107 0 0 0-.014.06a.11.11 0 0 0 .073.095a.109.109 0 0 0 .062.004a8.505 8.505 0 0 0 5.913-4.876a.155.155 0 0 1 .055-.053a.15.15 0 0 1 .147 0a.153.153 0 0 1 .054.053A10.779 10.779 0 0 1 23.834 8.1zM8.895 11.628a2.188 2.188 0 1 0 2.188 2.188v-2.042a.158.158 0 0 0-.15-.15Z"></path></svg>
   </div>
</div>
<div class="not-prose mt-4 px-4 sm:px-6">
<div class="text-center"><h3 id="blazor-template" class="text-4xl sm:text-5xl md:text-6xl tracking-tight font-extrabold text-gray-900">
    Blazor Tailwind Template
</h3></div>
<div class="py-8 max-w-7xl mx-auto px-4 sm:px-6">
    <LiteYouTube id="hqyozHSL0Nk" title=".NET 8 Blazor Tailwind Template" />
</div>
</div>

<div class="not-prose relative bg-white dark:bg-black py-4">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">Create a new Blazor Tailwind App</p>
        <p class="mx-auto mt-5 max-w-prose text-xl text-gray-500"> 
            Create a new Blazor Tailwind project with your preferred project name:
        </p>
    </div>
    <BlazorTemplate />
</div>

## ASP.NET Core Identity Integration

In terms of security, the template integrates ASP.NET Core Identity, offering a structured approach to authentication,
including support for email confirmation, two-factor authentication and GDPR compliance features.

Integrating ASP.NET Core Identity doesn't complicate securing ServiceStack services which can still be secured with
[Declarative Validation Attributes](https://docs.servicestack.net/auth/authentication-and-authorization#declarative-validation-attributes)
for role-based access control, e.g. using \`[ValidateHasRole("Employee")]\` directly on Request DTOs, bringing any 
existing knowledge and experience with ServiceStack Authentication to securing UIs and APIs with Identity Auth.

The template includes a pre-baked solution for sending general and Identity Auth Emails with your configured SMTP Server
in managed background workers with [Background MQ](https://docs.servicestack.net/background-mq) and an enhanced version of the default 
ASP.NET Core Blazor Identity UI, with all pages upgraded to use a beautiful Tailwind CSS theme as well as integration with 
[qrcode.js](https://davidshimjs.github.io/qrcodejs/) 
for providing a visual QR Code barcode which mobile phone users can easily scan to setup 2FA Authentication:

![](https://servicestack.net/img/posts/net8-best-blazor/blazor-identityauth-qrcode.png)

## Responsive and Interactive UIs with Tailwind CSS

With responsive UI out-of-the-box, thanks to Tailwind CSS, Developers can style their Blazor Apps with the modern 
popular utility-first CSS framework for creating beautiful, maintainable **Responsive UIs** with **DarkMode** support

It also takes full advantage of Blazor’s static rendering for its Website layout for optimal performance and SEO,
so only Pages and Components that require interactivity need to opt-in for Blazor Server Interactive rendering modes.

## ServiceStack.Blazor Tailwind Components

The [ServiceStack.Blazor Components](https://blazor-gallery.jamstacks.net), updated for .NET 8 enables you to rapidly
develop beautiful Blazor Apps integrated with Rich high-productivity UI Tailwind Components like
[AutoQueryGrid](https://blazor-gallery.servicestack.net/gallery/autoquerygrid) and
[AutoForms](https://blazor-gallery.servicestack.net/gallery/autoform) which interface with
[AutoQuery services](https://docs.servicestack.net/autoquery/) to provide a full CRUD data management UI with minimal effort.

## Enhanced Containerization

.NET 8 simplifies Docker integration. Using \`dotnet publish\`, developers can now automate the creation of Docker images 
that adhere to best security practices, such as running as a non-root user in containers that can utilize the built-in 
GitHub Actions to effortlessly deploy their containerized Blazor Apps with Docker and GitHub Registry via SSH to any Linux Server.

## Other Template Features

Other features that enhances the default ASP.NET Blazor App templates with several modern, high-productivity features, include:

- [Entity Framework](https://learn.microsoft.com/ef/) & [OrmLite](https://docs.servicestack.net/ormlite/) - Choose the best ORM for each App feature, with a unified solution that sees [OrmLite's DB Migrations](https://docs.servicestack.net/ormlite/db-migrations) run both EF and OrmLite migrations, inc. Seed Data with a single command at Development or Deployment
- [SQLite Database](https://www.sqlite.org) - Set up as the default database, it allows developers to start immediately without configuring a separate database server
- [AutoQuery](https://docs.servicestack.net/autoquery/) - Rapidly developing data-driven APIs, UIs and CRUD Apps
- [Auto Admin Pages](https://www.youtube.com/watch?v=tt0ytzVVjEY) - Quickly develop your back-office CRUD Admin UIs to manage your App's Database tables at [/admin](https://blazor.web-templates.io/admin)
- [Markdown](https://docs.servicestack.net/razor-press/syntax) - Maintain SEO-friendly documentation and content-rich pages like this one with just Markdown, beautifully styled with [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [Built-in UIs](https://servicestack.net/auto-ui) - Use ServiceStack's Auto UIs to [Explore your APIs](https://docs.servicestack.net/api-explorer) at [/ui](https://blazor.web-templates.io/ui/)
  or Query your [App's Database Tables](https://docs.servicestack.net/admin-ui-database) at [/admin-ui/database](https://blazor.web-templates.io/admin-ui/database)
- [Universal API Components](https://youtu.be/66DgLHExC9E) - Effortlessly create reusable, maximally performant universal Blazor API Components that works in Blazor Server and Web Assembly Interactivity modes
- [Organized Project Structure](https://docs.servicestack.net/physical-project-structure) - Divided into AppHost, Service Interface, Service Model, and Tests projects to promote separation of concerns and maintainability.`,date:"2023-11-20",tags:["dotnet","blazor","templates"],wordCount:1263,lineCount:94,minutesToRead:6,title:"New .NET 8 Blazor Tailwind Template",summary:"The new Blazor for .NET 8 template streamlines web UI development in C#.",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&fit=crop&h=1000&w=2000",author:"Lucy Bates",url:"/posts/net8-blazor-template"},{slug:"razor-ssg-new-blog-features",path:"src/_posts/2023-08-23_razor-ssg-new-blog-features.md",fileName:"razor-ssg-new-blog-features.md",content:`<script setup>
import ChartJs from "./components/ChartJs";
import FileLayout from "./components/FileLayout.vue";
<\/script>

## New Blogging features in Razor SSG

[Razor SSG](https://razor-ssg.web-templates.io) is our Free Project Template for creating fast, statically generated Websites and Blogs with
Markdown & C# Razor Pages. A benefit of using Razor SSG to maintain this
[servicestack.net(github)](https://github.com/ServiceStack/servicestack.net) website is that any improvements added
to our website end up being rolled into the Razor SSG Project Template for everyone else to enjoy.

This latest release brings a number of features and enhancements to improve Razor SSG usage as a Blogging Platform -
a primary use-case we're focused on as we pen our [22nd Blog Post for the year](https://servicestack.net/posts/year/2023) with improvements
in both discoverability and capability of blog posts:

### RSS Feed

Razor SSG websites now generates a valid RSS Feed for its blog to support their readers who'd prefer to read blog posts
and notify them as they're published with their favorite RSS reader:

<div class="not-prose my-8">
   <a href="https://razor-ssg.web-templates.io/feed.xml">
      <div class="block flex justify-center shadow hover:shadow-lg rounded overflow-hidden">
         <img class="max-w-3xl py-8" src="https://servicestack.net/img/posts/razor-ssg/valid-rss.png">
      </div>
   </a>
    <div class="mt-4 flex justify-center">
        <a class="text-indigo-600 hover:text-indigo-800" href="https://razor-ssg.web-templates.io/feed.xml">https://razor-ssg.web-templates.io/feed.xml</a>
        <a class="ml-4 text-indigo-600 hover:text-indigo-800" href="https://servicestack.net/feed.xml">https://servicestack.net/feed.xml</a>
    </div>
</div>

### Meta Headers support for Twitter cards and SEO

Blog Posts and Pages now include additional \`<meta>\` HTML Headers to enable support for
[Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards) in both
Twitter and Meta's new [threads.net](https://threads.net), e.g:

<div class="not-prose my-8 flex justify-center">
   <a class="block max-w-2xl" href="https://www.threads.net/@servicestack/post/CvIFobPBs5h">
      <div class="block flex justify-center shadow hover:shadow-lg rounded overflow-hidden">
         <img class="py-8" src="https://servicestack.net/img/posts/razor-ssg/twitter-cards.png">
      </div>
   </a>
</div>

### Improved Discoverability

To improve discoverability and increase site engagement, bottom of blog posts now include links to other posts by
the same Blog Author, including links to connect to their preferred social networks and contact preferences:

![](https://servicestack.net/img/posts/razor-ssg/other-author-posts.png)

### Posts can include Vue Components

Blog Posts can now embed any global Vue Components directly in its Markdown, e.g:

\`\`\`html
<getting-started template="razor-ssg"></getting-started>
\`\`\`

#### [/mjs/components/GettingStarted.mjs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/mjs/components/GettingStarted.mjs)

<div class="not-prose my-20 flex justify-center">
    <getting-started template="razor-ssg"></getting-started>
</div>

#### Individual Blog Post dependencies

Just like Pages and Docs they can also include specific JavaScript **.mjs** or **.css** in the \`/wwwroot/posts\` folder
which will only be loaded for that post:

<FileLayout :files="{
    wwwroot: {
        posts: { _: ['<slug>.mjs','<slug>.css'] },
    }
}"/>

Now posts that need it can dynamically load large libraries like [Chart.js](https://www.chartjs.org) and use it
inside a custom Vue component by creating a custom \`/posts/<slug>.mjs\` that exports what components and features
your blog post needs, e.g:

#### [/posts/new-blog-features.mjs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/posts/new-blog-features.mjs)

\`\`\`js
import ChartJs from './components/ChartJs.mjs'

export default {
    components: { ChartJs }
}
\`\`\`

In this case it enables support for [Chart.js](https://www.chartjs.org) by including a custom Vue component that makes it
easy to create charts from Vue Components embedded in markdown:

#### [/posts/components/ChartJs.mjs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/posts/components/ChartJs.mjs)

\`\`\`js
import { ref, onMounted } from "vue"
import { addScript } from "@servicestack/client"

let loadJs = addScript('https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js')

export default {
    template:\`<div><canvas ref="chart"></canvas></div>\`,
    props:['type','data','options'],
    setup(props) {
        const chart = ref()
        onMounted(async () => {
            await loadJs

            const options = props.options || {
                responsive: true,
                legend: {
                    position: "top"
                }
            }
            new Chart(chart.value, {
                type: props.type || "bar",
                data: props.data,
                options,
            })

        })
        return { chart }
    }
}
\`\`\`

Which allows this post to embed Chart.js charts using the above custom \`<chart-js>\` Vue component and a JS Object literal, e.g:

\`\`\`html
<chart-js :data="{
    labels: [
        //...
    ],
    datasets: [
        //...
    ]
}"></chart-js>
\`\`\`

Which the [Bulk Insert Performance](https://servicestack.net/posts/bulk-insert-performance) Blog Post uses extensively to embeds its
Chart.js Bar charts:

<chart-js :data="{
labels: [
'10,000 Rows',
'100,000 Rows'
],
datasets: [
{
label: 'SQLite Memory',
backgroundColor: 'rgba(201, 203, 207, 0.2)',
borderColor: 'rgb(201, 203, 207)',
borderWidth: 1,
data: [17.066, 166.747]
},
{
label: 'SQLite Disk',
backgroundColor: 'rgba(255, 99, 132, 0.2)',
borderColor: 'rgb(255, 99, 132)',
borderWidth: 1,
data: [20.224, 199.697]
},
{
label: 'PostgreSQL',
backgroundColor: 'rgba(153, 102, 255, 0.2)',
borderColor: 'rgb(153, 102, 255)',
borderWidth: 1,
data: [14.389, 115.645]
},
{
label: 'MySQL',
backgroundColor: 'rgba(54, 162, 235, 0.2)',
borderColor: 'rgb(54, 162, 235)',
borderWidth: 1,
data: [64.389, 310.966]
},
{
label: 'MySqlConnector',
backgroundColor: 'rgba(255, 159, 64, 0.2)',
borderColor: 'rgb(255, 159, 64)',
borderWidth: 1,
data: [64.427, 308.574]
},
{
label: 'SQL Server',
backgroundColor: 'rgba(255, 99, 132, 0.2)',
borderColor: 'rgb(255, 99, 132)',
borderWidth: 1,
data: [89.821, 835.181]
}
]
}"></chart-js>

### New Markdown Containers

[Custom Containers](https://github.com/xoofx/markdig/blob/master/src/Markdig.Tests/Specs/CustomContainerSpecs.md)
are a popular method for implementing Markdown Extensions for enabling rich, wrist-friendly consistent
content in your Markdown documents.

Most of [VitePress Markdown Containers](https://vitepress.dev/guide/markdown#custom-containers)
are also available in Razor SSG websites for enabling rich, wrist-friendly consistent markup in your Markdown pages, e.g:

\`\`\`md
:::info
This is an info box.
:::

:::tip
This is a tip.
:::

:::warning
This is a warning.
:::

:::danger
This is a dangerous warning.
:::

:::copy
Copy Me!
:::
\`\`\`

:::info
This is an info box.
:::

:::tip
This is a tip.
:::

:::warning
This is a warning.
:::

:::danger
This is a dangerous warning.
:::

:::copy
Copy Me!
:::

See Razor Press's [Markdown Containers docs](https://razor-press.web-templates.io/containers) for the complete list of available containers and examples on how to
implement your own [Custom Markdown containers](https://razor-press.web-templates.io/containers#implementing-block-containers).

### Support for Includes

Markdown fragments can be added to \`_pages/_include\` - a special folder rendered with
[Pages/Includes.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Includes.cshtml) using
an [Empty Layout](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Shared/_LayoutEmpty.cshtml)
which can be included in other Markdown and Razor Pages or fetched on demand with Ajax.

Markdown Fragments can be then included inside other markdown documents with the \`::include\` inline container, e.g:

:::pre
::include vue/formatters.md::
:::

Where it will be replaced with the HTML rendered markdown contents of fragments maintained in \`_pages/_include\`.

### Include Markdown in Razor Pages

Markdown Fragments can also be included in Razor Pages using the custom \`MarkdownTagHelper.cs\` \`<markdown/>\` tag:

\`\`\`html
<markdown include="vue/formatters.md"></markdown>
\`\`\`

### Inline Markdown in Razor Pages

Alternatively markdown can be rendered inline with:

\`\`\`html
<markdown>
## Using Formatters

Your App and custom templates can also utilize @servicestack/vue's
[built-in formatting functions](href="/vue/use-formatters).
</markdown>
\`\`\`

### Light and Dark Mode Query Params

You can link to Dark and Light modes of your Razor SSG website with the \`?light\` and \`?dark\` query string params:

- [https://razor-ssg.web-templates.io/?dark](https://razor-ssg.web-templates.io/?dark)
- [https://razor-ssg.web-templates.io/?light](https://razor-ssg.web-templates.io/?light)

### Blog Post Authors threads.net and Mastodon links

The social links for Blog Post Authors can now include [threads.net](https://threads.net) and [mastodon.social](https://mastodon.social) links, e.g:

\`\`\`json
{
  "AppConfig": {
    "BlogImageUrl": "https://servicestack.net/img/logo.png",
    "Authors": [
      {
        "Name": "Lucy Bates",
        "Email": "lucy@email.org",
        "ProfileUrl": "img/authors/author1.svg",
        "TwitterUrl": "https://twitter.com/lucy",
        "ThreadsUrl": "https://threads.net/@lucy",
        "GitHubUrl": "https://github.com/lucy",
        "MastodonUrl": "https://mastodon.social/@lucy"
      }
    ]
  }
}
\`\`\`

## Feature Requests Welcome

Most of Razor SSG's features are currently being driven by requirements from the new
[Websites built with Razor SSG](https://razor-ssg.web-templates.io/#showcase) and features we want available in our Blogs,
we welcome any requests for missing features in other popular Blogging Platforms you'd like to see in Razor SSG to help
make it a high quality blogging solution built with our preferred C#/.NET Technology Stack, by submitting them to:

:::{.text-indigo-600 .text-3xl .text-center}
[https://servicestack.net/ideas](https://servicestack.net/ideas)
:::

### SSG or Dynamic Features

Whilst statically generated websites and blogs are generally limited to features that can be generated at build time, we're able to
add any dynamic features we need in [CreatorKit](https://servicestack.net/creatorkit/) - a Free companion self-host .NET App Mailchimp and Disqus
alternative which powers any dynamic functionality in Razor SSG Apps like the blogs comments and Mailing List features
in this Blog Post.
`,date:"2023-08-23",tags:["razor","markdown","blog","dev"],wordCount:1469,lineCount:335,minutesToRead:7,title:"New Blogging features in Razor SSG",summary:"Explore the new Blogging Features in Razor SSG",image:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&fit=crop&h=1000&w=2000",author:"Lucy Bates",url:"/posts/razor-ssg-new-blog-features"},{slug:"razor-ssg",path:"src/_posts/2023-03-30_razor-ssg.md",fileName:"razor-ssg.md",content:`Razor SSG is a Razor Pages powered Markdown alternative to [Ruby's Jekyll](https://jekyllrb.com/) & 
[Next.js](https://nextjs.org) that's ideal for generating static websites & blogs using C#, Razor Pages & Markdown. 

### GitHub Codespaces Friendly

In addition to having a pure Razor + .NET solution to create fast, CDN-hostable static websites, it also aims to provide a
great experience from GitHub Codespaces, where you can create, modify, preview & check-in changes before the included GitHub Actions
auto deploy changes to its GitHub Pages CDN - all from your iPad!

[![](https://servicestack.net/img/posts/razor-ssg/codespaces.png)](https://github.com/features/codespaces)

To see this in action, we walk through the entire workflow of creating, updating and adding features to a custom Razor SSG website 
from just a browser using Codespaces, that auto publishes changes to your GitHub Repo's **gh-pages** branch where it's hosted for 
free on GitHub Pages CDN:

<iframe class="youtube" src="https://www.youtube.com/embed/MRQMBrXi5Sc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

### Enhance with simple, modern JavaScript

For enhanced interactivity, static markdown content can be [progressively enhanced](https://servicestack.net/posts/javascript) with Vue 3 components,
as done in this example that embed's the 
[GettingStarted.mjs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/wwwroot/mjs/components/GettingStarted.mjs) Vue Component to create new Razor SSG App's below with:

\`\`\`html
<getting-started template="razor-ssg"></getting-started>
\`\`\`

<div class="py-8 not-prose text-base flex justify-center">
  <getting-started template="razor-ssg"></getting-started>
</div>

Although with full control over the websites \`_Layout.cshtml\`, you're free to use any preferred JS Module or Web Component you prefer.

## Razor Pages

Your website can be built using either Markdown \`.md\` or Razor \`.cshtml\` pages, although it's generally recommended to 
use Markdown to capture the static content for your website for improved productivity and ease of maintenance.

### Content in Markdown, Functionality in Razor Pages

The basic premise behind most built-in features is to capture static content in markdown using a combination of 
folder structure & file name conventions in addition to each markdown page's frontmatter & content. This information
is then used to power each feature using Razor pages for precise layout and functionality.

The template includes the source code for each website feature, enabling full customization that also serves as good examples
for how to implement your own custom markdown-powered website features.

### Markdown Feature Structure

All markdown features are effectively implemented in the same way, starting with a **_folder** for maintaining its static markdown
content, a **.cs** class to load the markdown and a **.cshtml** Razor Page to render it: 

| Location | Description |
| - | - |
| \`/_{Feature}\` | Maintains the static markdown for the feature |
| \`Markdown.{Feature}.cs\` | Functionality to read the feature's markdown into logical collections |
| \`{Feature}.cshtml\` | Functionality to Render the feature |
| [Configure.Ssg.cs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Configure.Ssg.cs) | Initializes and registers the feature with ASP .NET's IOC |

Lets see what this looks like in practice by walking through the "Pages" feature: 

## Pages Feature

The pages feature simply makes all pages in the **_pages** folder, available from \`/{filename}\`.

Where the included pages:

### [/_pages](https://github.com/NetCoreTemplates/razor-ssg/tree/main/MyApp/_pages)
 - privacy.md
 - speaking.md
 - uses.md
 
Are made available from:

 - [/privacy](https://razor-ssg.web-templates.io/privacy)
 - [/speaking](https://razor-ssg.web-templates.io/speaking)
 - [/uses](https://razor-ssg.web-templates.io/uses)

### Loading Pages Markdown

The code that loads the Pages feature markdown content is in [Markdown.Pages.cs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Markdown.Pages.cs):

\`\`\`csharp
public class MarkdownPages : MarkdownPagesBase<MarkdownFileInfo>
{
    public MarkdownPages(ILogger<MarkdownPages> log, IWebHostEnvironment env) 
        : base(log,env) {}
    
    List<MarkdownFileInfo> Pages { get; set; } = new();
    public List<MarkdownFileInfo> VisiblePages => Pages.Where(IsVisible).ToList();

    public MarkdownFileInfo? GetBySlug(string slug) => 
        Fresh(VisiblePages.FirstOrDefault(x => x.Slug == slug));

    public void LoadFrom(string fromDirectory)
    {
        Pages.Clear();
        var fs = AssertVirtualFiles();
        var files = fs.GetDirectory(fromDirectory).GetAllFiles().ToList();
        var log = LogManager.GetLogger(GetType());
        log.InfoFormat("Found {0} pages", files.Count);

        var pipeline = CreatePipeline();

        foreach (var file in files)
        {
            var doc = Load(file.VirtualPath, pipeline);
            if (doc == null)
                continue;

            Pages.Add(doc);
        }
    }
}
\`\`\`

Which ultimately just loads Markdown files using the configured [Markdig](https://github.com/xoofx/markdig) pipeline in its \`Pages\` 
collection which is made available via its \`VisiblePages\` property which returns all documents in development whilst hiding
**Draft** and content published at a **Future Date** from production builds.

### Rendering Markdown Pages

The pages are then rendered in [Page.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Page.cshtml) Razor Page
that's available from \`/{slug}\`

\`\`\`csharp
@page "/{slug}"
@model MyApp.Page
@inject MarkdownPages Markdown

@implements IRenderStatic<MyApp.Page>
@functions {
    public List<Page> GetStaticProps(RenderContext ctx)
    {
        var markdown = ctx.Resolve<MarkdownPages>();
        return markdown.VisiblePages.Map(page => new Page { Slug = page.Slug! });
    }
}

@{
    var doc = Markdown.GetBySlug(Model.Slug);
    if (doc.Layout != null) 
        Layout = doc.Layout == "none"
            ? null
            : doc.Layout;
    ViewData["Title"] = doc.Title;
}

<link rel="stylesheet" href="css/typography.css">
<section class="flex-col md:flex-row flex justify-center mt-16 mb-16 md:mb-12">
    <h1 class="text-4xl tracking-tight font-extrabold text-gray-900">
        @doc.Title
    </h1>
</section>    
<div class="mx-auto">
    <div class="mx-auto prose lg:prose-xl mb-24">
        @Html.Raw(doc.Preview)
    </div>
</div>

@await Html.PartialAsync("HighlightIncludes")
<script>hljs.highlightAll()<\/script>
\`\`\`

Which uses a custom layout if one is defined in its frontmatter which 
[speaking.md](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/_pages/speaking.md) utilizes in its **layout** frontmatter:

\`\`\`yaml
---
title: Speaking
layout: _LayoutContent
---
\`\`\`

To render the page using [_LayoutContent.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Shared/_LayoutContent.cshtml)
visible by the background backdrop in its [/speaking](https://razor-ssg.web-templates.io/speaking) page.

## What's New Feature

The [/whatsnew](https://razor-ssg.web-templates.io/whatsnew) page is an example of creating a custom Markdown feature to implement a portfolio or a product releases page
where a new folder is created per release, containing both release date and release or project name, with all features in that release 
maintained markdown content sorted in alphabetical order:

### [/_whatsnew](https://github.com/NetCoreTemplates/razor-ssg/tree/main/MyApp/_whatsnew)

- **/2023-03-08_Animaginary**
  - feature1.md 
- **/2023-03-18_OpenShuttle**
   - feature1.md
- **/2023-03-28_Planetaria**
   - feature1.md 

What's New follows the same structure as Pages feature which is loaded in:

 - [Markdown.WhatsNew.cs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Markdown.WhatsNew.cs)

and rendered in:
- [WhatsNew.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/WhatsNew.cshtml)

## Blog Feature

The blog maintains its markdown posts in a flat folder which each Markdown post containing its publish date and URL slug it 
should be published under:

### [/_posts](https://github.com/NetCoreTemplates/razor-ssg/tree/main/MyApp/_posts)

 - ...
 - 2023-01-21_start.md
 - 2023-03-21_javascript.md
 - 2023-03-28_razor-ssg.md

As the Blog has more features it requires a larger [Markdown.Blog.cs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Markdown.Blog.cs)
to load its Markdown posts that is rendered in several different Razor Pages for each of its Views:

| Page | Description | Example |
| - | - | - |
| [Blog.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Blog.cshtml) | Main Blog layout | [/blog](https://razor-ssg.web-templates.io/blog) | 
| [Posts/Index.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Index.cshtml) | Navigable Archive grid of Posts | [/posts](https://razor-ssg.web-templates.io/posts) | 
| [Posts/Post.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Post.cshtml) | Individual Blog Post (like this!) | [/posts/razor-ssg](https://razor-ssg.web-templates.io/posts/razor-ssg) |
| [Author.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Author.cshtml) | Display Posts by Author | [/posts/author/lucy-bates](https://razor-ssg.web-templates.io/posts/author/lucy-bates) | 
| [Tagged.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Tagged.cshtml) | Display Posts by Tag | [/posts/tagged/markdown](https://razor-ssg.web-templates.io/posts/tagged/markdown) |
| [Year.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Year.cshtml) | Display Posts by Year | [/posts/year/2023](https://razor-ssg.web-templates.io/posts/year/2023) |

### General Features

Most unique markdown features are captured in their Markdown's frontmatter metadata, but in general these features
are broadly available for all features:

 - **Live Reload** - Latest Markdown content is displayed during **Development** 
 - **Custom Layouts** - Render post in custom Razor Layout with \`layout: _LayoutAlt\`
 - **Drafts** - Prevent posts being worked on from being published with \`draft: true\`
 - **Future Dates** - Posts with a future date wont be published until that date

### Initializing and Loading Markdown Features

All markdown features are initialized in the same way in [Configure.Ssg.cs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Configure.Ssg.cs)
where they're registered in ASP.NET Core's IOC and initialized after the App's plugins are loaded
by injecting with the App's [Virtual Files provider](https://docs.servicestack.net/virtual-file-system)
before using it to read from the directory where the markdown content for each feature is maintained: 

\`\`\`csharp
public class ConfigureSsg : IHostingStartup
{
    public void Configure(IWebHostBuilder builder) => builder
        .ConfigureServices(services =>
        {
            services.AddSingleton<RazorPagesEngine>();
            services.AddSingleton<MarkdownPages>();
            services.AddSingleton<MarkdownWhatsNew>();
            services.AddSingleton<MarkdownBlog>();
        })
        .ConfigureAppHost(afterPluginsLoaded: appHost => {
            var pages = appHost.Resolve<MarkdownPages>();
            var whatsNew = appHost.Resolve<MarkdownWhatsNew>();
            var blogPosts = appHost.Resolve<MarkdownBlog>();
            
            var features = new IMarkdownPages[] { pages, whatsNew, blogPosts }; 
            features.Each(x => x.VirtualFiles = appHost.VirtualFiles);

            // Custom initialization
            blogPosts.Authors = Authors;

            // Load feature markdown content
            pages.LoadFrom("_pages");
            whatsNew.LoadFrom("_whatsnew");
            blogPosts.LoadFrom("_posts");
        });
    });
    //...
}
\`\`\`

These dependencies are then injected in the feature's Razor Pages to query and render the loaded markdown content.

### Custom Frontmatter

You can extend the \`MarkdownFileInfo\` type used to maintain the markdown content and metadata of each loaded Markdown file
by adding any additional metadata you want included as C# properties on:

\`\`\`csharp
// Add additional frontmatter info to include
public class MarkdownFileInfo : MarkdownFileBase
{
}
\`\`\`

Any additional properties are automatically populated using ServiceStack's 
[built-in Automapping](https://docs.servicestack.net/auto-mapping) which includes rich support for converting string frontmatter 
values into native .NET types.

### Updating to latest versions

You can easily update all the JavaScript dependencies used in 
[postinstall.js](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/postinstall.js) by running:

:::sh
node postinstall.js
:::

This will also update the Markdown features \`*.cs\` implementations which is delivered as source files instead of an external
NuGet package to enable full customization, easier debugging whilst supporting easy upgrades. 

If you do customize any of the \`.cs\` files, you'll want to exclude them from being updated by removing them from:

\`\`\`js
const hostFiles = [
    'Markdown.Blog.cs',
    'Markdown.Pages.cs',
    'Markdown.WhatsNew.cs',
    'MarkdownPagesBase.cs',
]
\`\`\`

### Markdown Tag Helper

The included [MarkdownTagHelper.cs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/MarkdownTagHelper.cs) can be used
in hybrid Razor Pages like [About.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/About.cshtml) 
to render the [/about](https://razor-ssg.web-templates.io/about) page which requires the flexibility of Razor Pages with a static content component which you 
prefer to maintain inline with Markdown.

The \`<markdown />\` tag helper renders plain HTML, which you can apply [Tailwind's @typography](https://tailwindcss.com/docs/typography-plugin) 
styles by including **typography.css** and annotating it with your preferred \`prose\` variant, e.g:

\`\`\`html
<link rel="stylesheet" href="css/typography.css">
<markdown class="prose">
  Markdown content...
</markdown>
\`\`\`

## Static Static Generation (SSG)

All features up till now describes how this template implements a Markdown powered Razor Pages .NET application, where this template
differs in its published output, where instead of a .NET App deployed to a VM or App server it generates static \`*.html\` files that's
bundled together with \`/wwwroot\` static assets in the \`/dist\` folder that can be previewed by launching a HTTP Server from that
folder with the built-in npm script:

:::sh
npm run serve
:::

To run **npx http-server** on \`http://localhost:8080\` that you can open in a browser to preview the published version of your 
site as it would be when hosted on a CDN.

### Static Razor Pages

The static generation functionality works by scanning all your Razor Pages and prerendering the pages with prerendering instructions.

### Pages with Static Routes

Pages with static routes can be marked to be prerendered by annotating it with the \`[RenderStatic]\` attribute as done in
[About.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/About.cshtml):

\`\`\`csharp
@page "/about"
@attribute [RenderStatic]
\`\`\`

Which saves the pre-rendered page using the pages route with a .html suffix, e.g: \`/{@page route}.html\` whilst pages with static
routes with a trailing \`/\` are saved to \`/{@page route}/index.html\` as done for 
[Posts/Index.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Index.cshtml):

\`\`\`csharp
@page "/posts/"
@attribute [RenderStatic]
\`\`\`

#### Explicit generated paths

To keep the generated pages in-sync with using the same routes as your Razor Pages in development it's recommended to use the implied
rendered paths, but if preferred you can specify which path the page should be rendered to instead with:

\`\`\`csharp
@page "/posts/"
@attribute [RenderStatic("/posts/index.html")]
\`\`\`

### Pages with Dynamic Routes

Prerendering dynamic pages follows [Next.js getStaticProps](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) 
convention which you can implement using \`IRenderStatic<PageModel>\` by returning a Page Model for each page that should be generated
as done in [Posts/Post.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Post.cshtml) and
[Page.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Page.cshtml):

\`\`\`csharp
@page "/{slug}"
@model MyApp.Page

@implements IRenderStatic<MyApp.Page>
@functions {
    public List<Page> GetStaticProps(RenderContext ctx)
    {
        var markdown = ctx.Resolve<MarkdownPages>();
        return markdown.VisiblePages.Map(page => new Page { Slug = page.Slug! });
    }
}
...
\`\`\`

In this case it returns a Page Model for every **Visible** markdown page in 
[/_pages](https://github.com/NetCoreTemplates/razor-ssg/tree/main/MyApp/_pages) that ends up rendering the following pages in \`/dist\`:

 - \`/privacy.html\`
 - \`/speaking.html\`
 - \`/uses.html\`

### Limitations

The primary limitations for developing statically generated Apps is that a **snapshot** of entire App is generated at deployment, 
which prohibits being able to render different content **per request**, e.g. for Authenticated users which would require executing
custom JavaScript after the page loads to dynamically alter the page's initial content.

Otherwise in practice you'll be able develop your Razor Pages utilizing Razor's full feature-set, the primary concessions stem
from Pages being executed in a static context which prohibits pages from returning dynamic content per request, instead any
"different views" should be maintained in separate pages.

#### No QueryString Params

As the generated pages should adopt the same routes as your Razor Pages you'll need to avoid relying on **?QueryString** params
and instead capture all required parameters for a page in its **@page route** as done for:

[Posts/Author.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Author.cshtml)

\`\`\`csharp
@page "/posts/author/{slug}"
@model AuthorModel
@inject MarkdownBlog Blog

@implements IRenderStatic<AuthorModel>
@functions {
    public List<AuthorModel> GetStaticProps(RenderContext ctx) => ctx.Resolve<MarkdownBlog>()
        .AuthorSlugMap.Keys.Map(x => new AuthorModel { Slug = x });
}
...
\`\`\`

Which lists all posts by an Author, e.g: [/posts/author/lucy-bates](https://razor-ssg.web-templates.io/posts/author/lucy-bates), likewise required for:

[Posts/Tagged.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Tagged.cshtml)

\`\`\`csharp
@page "/posts/tagged/{slug}"
@model TaggedModel
@inject MarkdownBlog Blog

@implements IRenderStatic<TaggedModel>
@functions {
    public List<TaggedModel> GetStaticProps(RenderContext ctx) => ctx.Resolve<MarkdownBlog>()
        .TagSlugMap.Keys.Map(x => new TaggedModel { Slug = x });
}
...
\`\`\`

Which lists all related posts with a specific tag, e.g: [/posts/tagged/markdown](https://razor-ssg.web-templates.io/posts/tagged/markdown), and for:

[Posts/Year.cshtml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Pages/Posts/Year.cshtml)

\`\`\`csharp
@page "/posts/year/{year}"
@model YearModel
@inject MarkdownBlog Blog

@implements IRenderStatic<YearModel>
@functions {
    public List<YearModel> GetStaticProps(RenderContext ctx) => ctx.Resolve<MarkdownBlog>()
        .VisiblePosts.Select(x => x.Date.GetValueOrDefault().Year)
            .Distinct().Map(x => new YearModel { Year = x });
}

...
\`\`\`

Which lists all posts published in a specific year, e.g: [/posts/year/2023](https://razor-ssg.web-templates.io/posts/year/2023).

Conceivably these "different views" could've been implemented by the same page with different \`?author\`, \`?tag\` and \`?year\`
QueryString params, but are instead extracted into different pages to support its statically generated \`*.html\` outputs.

## Prerendering Task

The **prerender** [AppTask](https://docs.servicestack.net/app-tasks) that pre-renders the entire website is also registered in
[Configure.Ssg.cs](https://github.com/NetCoreTemplates/razor-ssg/blob/main/MyApp/Configure.Ssg.cs):

\`\`\`csharp
  .ConfigureAppHost(afterAppHostInit: appHost =>
  {
      // prerender with: \`$ npm run prerender\` 
      AppTasks.Register("prerender", args =>
      {
          var distDir = appHost.ContentRootDirectory.RealPath.CombineWith("dist");
          if (Directory.Exists(distDir))
              FileSystemVirtualFiles.DeleteDirectory(distDir);
          FileSystemVirtualFiles.CopyAll(
              new DirectoryInfo(appHost.ContentRootDirectory.RealPath.CombineWith("wwwroot")),
              new DirectoryInfo(distDir));
          var razorFiles = appHost.VirtualFiles.GetAllMatchingFiles("*.cshtml");
          RazorSsg.PrerenderAsync(appHost, razorFiles, distDir).GetAwaiter().GetResult();
      });
  });
  //...
\`\`\`

Which we can see:
1. Deletes \`/dist\` folder
2. Copies \`/wwwroot\` contents into \`/dist\`
3. Passes all App's Razor \`*.cshtml\` files to \`RazorSsg\` to do the pre-rendering

Where it processes all pages with \`[RenderStatic]\` and \`IRenderStatic<PageModel>\` prerendering instructions to the 
specified \`/dist\` folder.

### Previewing prerendered site

To preview your SSG website, run the prerendered task with:  

:::sh
npm run prerender
:::

Which renders your site to \`/_dist\` which you can run a HTTP Server from with:

:::sh
npm run serve
:::

That you can preview with your browser at \`http://localhost:8080\`.

### Publishing

The included [build.yml](https://github.com/NetCoreTemplates/razor-ssg/blob/main/.github/workflows/build.yml) GitHub Action
takes care of running the prerendered task and deploying it to your Repo's GitHub Pages where it will be available at:

    https://$org_name.github.io/$repo/

Alternatively you can use a [Custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
by registering a CNAME DNS entry for your preferred Custom Domain, e.g:

| Record | Type | Value | TTL|
| - | - | - | - |
| **mydomain.org** | CNAME | **org_name**.github.io | 3600 |

That you can either [configure in your Repo settings](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)
or if you prefer to maintain it with your code-base, save the domain name to \`/wwwroot/CNAME\`, e.g:

\`\`\`
www.mydomain.org
\`\`\`

### Benefits after migrating from Jekyll

Whilst still only at **v1** release, we found it already had a number of advantages over the existing Jekyll static website:

 - Faster live reloads
 - C#/Razor more type-save & productive than Ruby/Liquid
 - Greater flexibility in implementing new features
 - Better IDE support (from Rider)
 - Ability to reuse our .NET libraries
 - Better development experience

The last point ultimately prompted seeking an alternative solution as previously Jekyll was used from Windows/WSL which 
was awkward to manage from a different filesystem with Jekyll upgrades breaking RubyMine support forcing the use of 
text editors to maintain its code-base and content.

### Used by the new [servicestack.net](https://servicestack.net)

Deterred by the growing complexity of current SSG solutions, we decided to create a new solution using C#/Razor 
(our preferred technology for generating server HTML) with a clean implementation that allowed full control
with an **npm dependency-free** solution letting us adopt our preferred approach to 
[Simple, Modern JavaScript](https://servicestack.net/posts/javascript) without any build-tooling or SPA complexity.

We're happy with the results of [https://servicestack.net](https://servicestack.net) new Razor SSG website:

[![](https://servicestack.net/img/posts/razor-ssg/servicestack.net.png)](https://servicestack.net)

A clean, crisp code-base utilizing simple JS Module Vue 3 components, the source code of which is publicly maintained at:

- [https://github.com/servicestack/servicestack.net](https://github.com/servicestack/servicestack.net)

Which serves as a good example at how well this template scales for larger websites.

#### Markdown Videos Feature

It only needed one new Markdown feature to display our growing video library:

 - [/_videos](https://github.com/ServiceStack/servicestack.net/tree/main/MyApp/_videos) - Directory of Markdown Video collections 
 - [Markdown.Videos.cs](https://github.com/ServiceStack/servicestack.net/blob/main/MyApp/Markdown.Videos.cs) - Loading Video feature markdown content
 - [Shared/VideoGroup.cshtml](https://github.com/ServiceStack/servicestack.net/blob/main/MyApp/Pages/Shared/VideoGroup.cshtml) - Razor Page for displaying Video Collection

Which you're free to reuse in your own websites needing a similar feature.

#### Feedback & Feature Requests Welcome

In future we'll look at expanding this template with generic Markdown features suitable for websites, blogs & portfolios, 
or maintain a shared community collection if there ends up being community contributions of Razor SSG & Markdown features.

In the meantime, we welcome any feedback or new feature requests at:

### [https://servicestack.net/ideas](https://servicestack.net/ideas)
`,date:"2023-03-30",tags:["razor","markdown","blog","dev"],wordCount:3362,lineCount:597,minutesToRead:15,layout:"_LayoutContent",title:"Introducing Razor SSG",summary:"Create fast, beautiful statically rendered Razor Websites & Blogs",image:"https://images.unsplash.com/photo-1579767684138-a57e917d30aa?crop=entropy&fit=crop&h=1000&w=2000",author:"Lucy Bates",url:"/posts/razor-ssg"},{slug:"javascript",path:"src/_posts/2023-02-01_javascript.md",fileName:"javascript.md",content:`<script setup>
import Hello from "./components/Hello.vue";
import Counter from "./components/Counter.vue";
import Plugin from "./components/Plugin.vue";
import HelloApi from "./components/HelloApi.vue";
import VueComponentGallery from "./components/VueComponentGallery.vue";
import VueComponentLibrary from "./components/VueComponentLibrary.vue";
<\/script>

<Iconify class="sm:float-left mr-4 w-28 h-28" style="margin-top:-4px" icon="vscode-icons:file-type-js-official" />

JavaScript has progressed significantly in recent times where many of the tooling & language enhancements
that we used to rely on external tools for is now available in modern browsers alleviating the need for
complex tooling and npm dependencies that have historically plagued modern web development.

The good news is that the complex npm tooling that was previously considered mandatory in modern JavaScript App
development can be considered optional as we can now utilize modern browser features like
[async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function),
[JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules),
[dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import),
[import maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap)
and [modern language features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) for a
sophisticated development workflow without the need for any npm build tools.

### Bringing Simplicity Back

The [razor](https://github.com/NetCoreTemplates/razor) template focuses on simplicity and eschews many aspects that has
complicated modern JavaScript development,
specifically:

- No npm node_modules or build tools
- No client side routing
- No heavy client state

Effectively abandoning the traditional SPA approach in lieu of a simpler [MPA](https://docs.astro.build/en/concepts/mpa-vs-spa/)
development model using Razor Pages for Server Rendered content with any interactive UIs progressively enhanced with JavaScript.

#### Freedom to use any JS library

Avoiding the SPA route ends up affording more flexibility on which JS libraries each page can use as without heavy bundled JS
blobs of all JS used in the entire App, it's free to only load the required JS each page needs to best implement its
required functionality, which can be any JS library, preferably utilizing ESM builds that can be referenced from a
[JavaScript Module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), taking advantage of the module system
native to modern browsers able to efficiently download the declarative matrix of dependencies each script needs.

### Best libraries for progressive Multi Page Apps

It includes a collection of libraries we believe offers the best modern development experience in Progressive
MPA Web Apps, specifically:

#### [Tailwind CLI](https://tailwindcss.com/docs/installation)
Tailwind enables a responsive, utility-first CSS framework for creating maintainable CSS at scale without the need for any CSS
preprocessors like Sass, which is configured to run from an npx script to avoid needing any node_module dependencies.

#### [Vue 3](https://vuejs.org/guide/introduction.html)
Vue is a popular Progressive JavaScript Framework that makes it easy to create interactive Reactive Components whose
[Composition API](https://vuejs.org/api/composition-api-setup.html) offers a nice development model without requiring any
pre-processors like JSX.

Where creating a component is as simple as:

\`\`\`js
const Hello = {
    template: \`<b>Hello, {{name}}!</b>\`,
    props: { name:String }
}
\`\`\`
<div class="text-center text-2xl py-2">
    <hello name="Vue 3"></hello>
</div>

Or a simple reactive example:

\`\`\`js
import { ref } from "vue"

const Counter = {
    template: \`<b @click="count++">Counter {{count}}</b>\`,
    setup() {
        let count = ref(1)
        return { count }
    }
}
\`\`\`

<div class="text-center text-2xl py-2 cursor-pointer select-none">
    <counter></counter>
</div>

### Vue Components in Markdown

Inside \`.md\` Markdown pages Vue Components can be embedded using Vue's progressive
[HTML Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html):

\`\`\`html
<hello name="Vue 3"></hello>
<counter></counter>
\`\`\`

### Vue Components in Razor Pages

Inside \`.cshtml\` Razor Pages these components can be mounted using the standard [Vue 3 mount](https://vuejs.org/api/application.html#app-mount) API, but to
make it easier we've added additional APIs for declaratively mounting components to pages using \`data-component\` and \`data-props\`
attributes:

\`\`\`html
<div data-component="Hello" data-props="{ name: 'Vue 3' }"></div>
\`\`\`

Alternatively they can be programatically added using the custom \`mount\` method in \`api.mjs\`:

\`\`\`js
import { mount } from "/mjs/api.mjs"
mount('#counter', Counter)
\`\`\`

Both methods create components with access to all your Shared Components and any 3rd Party Plugins which
we can preview in this example that uses **@servicestack/vue**'s
[PrimaryButton](https://docs.servicestack.net/vue/navigation#primarybutton)
and [ModalDialog](https://docs.servicestack.net/vue/modals):


\`\`\`js
const Plugin = {
    template:\`<div>
        <PrimaryButton @click="show=true">Open Modal</PrimaryButton>
        <ModalDialog v-if="show" @done="show=false">
            <div class="p-8">Hello @servicestack/vue!</div>
        </ModalDialog>
    </div>\`,
    setup() {
        const show = ref(false)
        return { show }
    }
}
\`\`\`

\`\`\`html
<plugin></plugin>
\`\`\`

<div class="text-center">
    <plugin id="plugin" class="text-2xl py-4"></plugin>
</div>

### Vue HTML Templates

An alternative progressive approach for creating Reactive UIs with Vue is by embedding its HTML markup directly in \`.html\` pages using
[HTML Template Syntax](https://vuejs.org/guide/essentials/template-syntax.html) which is both great for performance
as the DOM UI can be rendered before the Vue Component is initialized. UI elements you want hidden can use Vue's
[v-cloak](https://vuejs.org/api/built-in-directives.html#v-cloak) attribute where they'll be hidden until components are initialized.

It's also great for development as it lets you cohesively maintain most pages functionality need in the HTML page itself - in
isolation with the rest of the website, i.e. instead of spread across multiple external \`.js\` source files that for
SPAs unnecessarily increases the payload sizes of JS bundles with functionality that no other pages need.

With Vue's HTML syntax you can maintain the Vue template in HTML and just use embedded JavaScript for the Reactive UI's functionality, e.g:

\`\`\`html
<div id="app">
    <primary-button v-on:click="show=true">Open Modal</primary-button>
    <modal-dialog v-if="show" v-on:done="show=false">
        <div class="p-8">Hello @servicestack/vue!</div>
    </modal-dialog>
</div>
<script>
const App = {
    setup() {
        const show = ref(false)
        return { show }
    }
}
mount('#app', App)
<\/script>
\`\`\`

This is the approach used to develop [Vue Stable Diffusion](/posts/vue-stable-diffusion) where all functionality specific
to the page is maintained in the page itself, whilst any common functionality is maintained in external JS Modules loaded
on-demand by the Browser when needed.

### @servicestack/vue
[@servicestack/vue](https://github.com/ServiceStack/servicestack-vue) is our growing Vue 3 Tailwind component library with a number of rich Tailwind components useful
in .NET Web Apps, including Input Components with auto form validation binding which is used by all HTML forms in
the [razor](https://github.com/NetCoreTemplates/razor) template.

<vue-component-gallery></vue-component-gallery>

### @servicestack/client
[@servicestack/client](https://docs.servicestack.net/javascript-client) is our generic JS/TypeScript client library
which enables a terse, typed API for using your App's typed DTOs from the built-in
[JavaScript ES6 Classes](https://docs.servicestack.net/javascript-add-servicestack-reference) support to enable an effortless
end-to-end Typed development model for calling your APIs **without any build steps**, e.g:

\`\`\`html
<input type="text" id="txtName">
<div id="result"></div>

<script type="module">
import { JsonApiClient, $1, on } from '@servicestack/client'
import { Hello } from '/types/mjs'

on('#txtName', {
    async keyup(el) {
        const client = JsonApiClient.create()
        const api = await client.api(new Hello({ name:el.target.value }))
        $1('#result').innerHTML = api.response.result
    }
})
<\/script>
\`\`\`

For better IDE intelli-sense during development, save the annotated Typed DTOs to disk with:

:::sh
npm run dtos
:::

That can be referenced instead to unlock your IDE's static analysis type-checking and intelli-sense benefits during development:

\`\`\`js
import { Hello } from '/js/dtos.mjs'
client.api(new Hello({ name }))
\`\`\`

You'll typically use all these libraries in your **API-enabled** components as seen in the
[HelloApi.mjs](https://github.com/NetCoreTemplates/razor/blob/main/MyApp/wwwroot/mjs/components/HelloApi.mjs)
component on the home page which calls the [Hello](/ui/Hello) API on each key press:

\`\`\`js
import { ref } from "vue"
import { useClient } from "@servicestack/vue"
import { Hello } from "../dtos.mjs"

export default {
    template:/*html*/\`<div class="flex flex-wrap justify-center">
        <TextInput v-model="name" @keyup="update" />
        <div class="ml-3 mt-2 text-lg">{{ result }}</div>
    </div>\`,
    props:['value'],
    setup(props) {
        let name = ref(props.value)
        let result = ref('')
        let client = useClient()

        async function update() {
            let api = await client.api(new Hello({ name }))
            if (api.succeeded) {
                result.value = api.response.result
            }
        }
        update()

        return { name, update, result }
    }
}
\`\`\`

Which we can also mount below:

\`\`\`html
<hello-api value="Vue 3"></hello-api>
\`\`\`

<hello-api value="Vue 3" class="w-full font-semibold"></hello-api>

We'll also go through and explain other features used in this component:

#### \`/*html*/\`

Although not needed in [Rider](rider) (which can automatically infer HTML in strings), the \`/*html*/\` type hint can be used
to instruct tooling like the [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)
VS Code extension to provide syntax highlighting and an enhanced authoring experience for HTML content in string literals.

### useClient

[useClient()](https://docs.servicestack.net/vue/use-client) provides managed APIs around the \`JsonServiceClient\`
instance registered in Vue App's with:

\`\`\`js
let client = JsonApiClient.create()
app.provide('client', client)
\`\`\`

Which maintains contextual information around your API calls like **loading** and **error** states, used by \`@servicestack/vue\` components to
enable its auto validation binding. Other functionality in this provider include:

\`\`\`js
let { 
    api, apiVoid, apiForm, apiFormVoid, // Managed Typed ServiceClient APIs
    loading, error,                     // Maintains 'loading' and 'error' states
    setError, addFieldError,            // Add custom errors in client
    unRefs                              // Returns a dto with all Refs unwrapped
} = useClient()
\`\`\`

Typically you would need to unwrap \`ref\` values when calling APIs, i.e:

\`\`\`js
let client = JsonApiClient.create()
let api = await client.api(new Hello({ name:name.value }))
\`\`\`

#### useClient - api

This is unnecessary in useClient \`api*\` methods which automatically unwraps ref values, allowing for the more pleasant API call:

\`\`\`js
let api = await client.api(new Hello({ name }))
\`\`\`

#### useClient - unRefs

But as DTOs are typed, passing reference values will report a type annotation warning in IDEs with type-checking enabled,
which can be resolved by explicitly unwrapping DTO ref values with \`unRefs\`:

\`\`\`js
let api = await client.api(new Hello(unRefs({ name })))
\`\`\`

#### useClient - setError

\`setError\` can be used to populate client-side validation errors which the
[SignUp.mjs](https://github.com/NetCoreTemplates/vue-mjs/blob/main/MyApp/wwwroot/Pages/SignUp.mjs)
component uses to report an invalid submissions when passwords don't match:

\`\`\`js
const { api, setError } = useClient()
async function onSubmit() {
    if (password.value !== confirmPassword.value) {
        setError({ fieldName:'confirmPassword', message:'Passwords do not match' })
        return
    }
    //...
}
\`\`\`

### Form Validation

All \`@servicestack/vue\` Input Components support contextual validation binding that's typically populated from API
[Error Response DTOs](https://docs.servicestack.net/error-handling) but can also be populated from client-side validation
as done above.

#### Explicit Error Handling

This populated \`ResponseStatus\` DTO can either be manually passed into each component's **status** property as done in [/TodoMvc](/TodoMvc):

\`\`\`html
<template id="TodoMvc-template">
    <div class="mb-3">
        <text-input :status="store.error" id="text" label="" placeholder="What needs to be done?"
                    v-model="store.newTodo" v-on:keyup.enter.stop="store.addTodo()"></text-input>
    </div>
    <!-- ... -->
</template>
\`\`\`

Where if you try adding an empty Todo the \`CreateTodo\` API will fail and populate its \`store.error\` reactive property with the
APIs Error Response DTO which the \`<TextInput />\` component checks to display any field validation errors adjacent to the HTML Input
with matching \`id\` fields:

\`\`\`js
let store = {
    /** @type {Todo[]} */
    todos: [],
    newTodo:'',
    error:null,
    async addTodo() {
        this.todos.push(new Todo({ text:this.newTodo }))
        let api = await client.api(new CreateTodo({ text:this.newTodo }))
        if (api.succeeded)
            this.newTodo = ''
        else
            this.error = api.error
    },
    //...
}
\`\`\`

#### Implicit Error Handling

More often you'll want to take advantage of the implicit validation support in \`useClient()\` which makes its state available to child
components, alleviating the need to explicitly pass it in each component as seen in razor's
[Contacts.mjs](https://github.com/NetCoreTemplates/razor/blob/net6/MyApp/wwwroot/Pages/Contacts.mjs) \`Edit\` component for its
Contacts page which doesn't do any manual error handling:

\`\`\`js
const Edit = {
    template:/*html*/\`<SlideOver @done="close" title="Edit Contact">
    <form @submit.prevent="submit">
      <input type="submit" class="hidden">
      <fieldset>
        <ErrorSummary except="title,name,color,filmGenres,age,agree" class="mb-4" />
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <SelectInput id="title" v-model="request.title" :options="enumOptions('Title')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput id="name" v-model="request.name" required placeholder="Contact Name" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <SelectInput id="color" v-model="request.color" :options="colorOptions" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <SelectInput id="favoriteGenre" v-model="request.favoriteGenre" :options="enumOptions('FilmGenre')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput type="number" id="age" v-model="request.age" />
          </div>
        </div>
      </fieldset>
    </form>
    <template #footer>
      <div class="flex justify-between space-x-3">
        <div><ConfirmDelete @delete="onDelete">Delete</ConfirmDelete></div>
        <div><PrimaryButton @click="submit">Update Contact</PrimaryButton></div>
      </div>
    </template>
  </SlideOver>\`,
    props:['contact'],
    emits:['done'],
    setup(props, { emit }) {
        const client = useClient()
        const request = ref(new UpdateContact(props.contact))
        const colorOptions = propertyOptions(getProperty('UpdateContact','Color'))

        async function submit() {
            const api = await client.api(request.value)
            if (api.succeeded) close()
        }

        async function onDelete () {
            const api = await client.apiVoid(new DeleteContact({ id:props.id }))
            if (api.succeeded) close()
        }

        const close = () => emit('done')

        return { request, enumOptions, colorOptions, submit, onDelete, close }
    }
}
\`\`\`

Effectively making form validation binding a transparent detail where all \`@servicestack/vue\`
Input Components are able to automatically apply contextual validation errors next to the fields they apply to:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/scripts/edit-contact-validation.png)

### AutoForm Components

We can elevate our productivity even further with
[Auto Form Components](https://docs.servicestack.net/vue/autoform) that can automatically generate an
instant API-enabled form with validation binding by just specifying the Request DTO you want to create the form of, e.g:

\`\`\`html
<AutoCreateForm type="CreateBooking" formStyle="card" />
\`\`\`

<div class="not-prose">
    <auto-create-form type="CreateBooking" form-style="card"></auto-create-form>
</div>

The AutoForm components are powered by your [App Metadata](https://docs.servicestack.net/vue/use-appmetadata) which allows creating
highly customized UIs from [declarative C# attributes](https://docs.servicestack.net/locode/declarative) whose customizations are
reused across all ServiceStack Auto UIs, including:

- [API Explorer](https://docs.servicestack.net/api-explorer)
- [Locode](https://docs.servicestack.net/locode/)
- [Blazor Tailwind Components](https://docs.servicestack.net/templates-blazor-components)

### Form Input Components

In addition to including Tailwind versions of the standard [HTML Form Inputs](https://docs.servicestack.net/vue/form-inputs) controls to create beautiful Tailwind Forms,
it also contains a variety of integrated high-level components:

- [FileInput](https://docs.servicestack.net/vue/fileinput)
- [TagInput](https://docs.servicestack.net/vue/taginput)
- [Autocomplete](https://docs.servicestack.net/vue/autocomplete)

### useAuth

Your Vue.js code can access Authenticated Users using [useAuth()](https://docs.servicestack.net/vue/use-auth)
which can also be populated without the overhead of an Ajax request by embedding the response of the built-in
[Authenticate API](/ui/Authenticate?tab=details) inside \`_Layout.cshtml\` with:

\`\`\`html
<script type="module">
import { useAuth } from "@@servicestack/vue"
const { signIn } = useAuth()
signIn(@await Html.ApiAsJsonAsync(new Authenticate()))
<\/script>
\`\`\`

Where it enables access to the below [useAuth()](https://docs.servicestack.net/vue/use-auth) utils for inspecting the
current authenticated user:

\`\`\`js
const { 
    signIn,           // Sign In the currently Authenticated User
    signOut,          // Sign Out currently Authenticated User
    user,             // Access Authenticated User info in a reactive Ref<AuthenticateResponse>
    isAuthenticated,  // Check if the current user is Authenticated in a reactive Ref<boolean>
    hasRole,          // Check if the Authenticated User has a specific role
    hasPermission,    // Check if the Authenticated User has a specific permission
    isAdmin           // Check if the Authenticated User has the Admin role
} = useAuth()
\`\`\`

This is used in [Bookings.mjs](https://github.com/NetCoreTemplates/razor/blob/main/MyApp/wwwroot/pages/Bookings.mjs)
to control whether the \`<AutoEditForm>\` component should enable its delete functionality:

\`\`\`js
export default {
    template/*html*/:\`
    <AutoEditForm type="UpdateBooking" :deleteType="canDelete ? 'DeleteBooking' : null" />
    \`,
    setup(props) {
        const { hasRole } = useAuth()
        const canDelete = computed(() => hasRole('Manager'))
        return { canDelete }
    }
}
\`\`\`

#### [JSDoc](https://jsdoc.app)

We get great value from using [TypeScript](https://www.typescriptlang.org) to maintain our libraries typed code bases, however it
does mandate using an external tool to convert it to valid JS before it can be run, something the new Razor Vue.js templates expressly avoids.

Instead it adds JSDoc type annotations to code where it adds value, which at the cost of slightly more verbose syntax enables much of the
same static analysis and intelli-sense benefits of TypeScript, but without needing any tools to convert it to valid JavaScript, e.g:

\`\`\`js
/** @param {KeyboardEvent} e */
function validateSafeName(e) {
    if (e.key.match(/[\\W]+/g)) {
        e.preventDefault()
        return false
    }
}
\`\`\`

#### TypeScript Language Service

Whilst the code-base doesn't use TypeScript syntax in its code base directly, it still benefits from TypeScript's language services
in IDEs for the included libraries from the TypeScript definitions included in \`/lib/typings\`, downloaded in
[postinstall.js](https://github.com/NetCoreTemplates/razor/blob/main/MyApp/postinstall.js) after **npm install**.

### Import Maps

[Import Maps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap) is a useful browser feature that allows
specifying optimal names for modules, that can be used to map package names to the implementation it should use, e.g:

\`\`\`csharp
@Html.StaticImportMap(new() {
    ["vue"]                  = "/lib/mjs/vue.mjs",
    ["@servicestack/client"] = "/lib/mjs/servicestack-client.mjs",
    ["@servicestack/vue"]    = "/lib/mjs/servicestack-vue.mjs",
})
\`\`\`

Where they can be freely maintained in one place without needing to update any source code references.
This allows source code to be able to import from the package name instead of its physical location:

\`\`\`js
import { ref } from "vue"
import { useClient } from "@servicestack/vue"
import { JsonApiClient, $1, on } from "@servicestack/client"
\`\`\`

It's a great solution for specifying using local unminified debug builds during **Development**, and more optimal CDN hosted
production builds when running in **Production**, alleviating the need to rely on complex build tools to perform this code transformation for us:

\`\`\`csharp
@Html.ImportMap(new()
{
    ["vue"]                  = ("/lib/mjs/vue.mjs",                 "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js"),
    ["@servicestack/client"] = ("/lib/mjs/servicestack-client.mjs", "https://unpkg.com/@servicestack/client@2/dist/servicestack-client.min.mjs"),
    ["@servicestack/vue"]    = ("/lib/mjs/servicestack-vue.mjs",    "https://unpkg.com/@servicestack/vue@3/dist/servicestack-vue.min.mjs")
})
\`\`\`

Note: Specifying exact versions of each dependency improves initial load times by eliminating latency from redirects.

Or if you don't want your Web App to reference any external dependencies, have the ImportMap reference local minified production builds instead:

\`\`\`csharp
@Html.ImportMap(new()
{
    ["vue"]                  = ("/lib/mjs/vue.mjs",                 "/lib/mjs/vue.min.mjs"),
    ["@servicestack/client"] = ("/lib/mjs/servicestack-client.mjs", "/lib/mjs/servicestack-client.min.mjs"),
    ["@servicestack/vue"]    = ("/lib/mjs/servicestack-vue.mjs",    "/lib/mjs/servicestack-vue.min.mjs")
})
\`\`\`

#### Polyfill for Safari

Unfortunately Safari is the last modern browser to [support import maps](https://caniuse.com/import-maps) which is only now in
Technical Preview. Luckily this feature can be polyfilled with the [ES Module Shims](https://github.com/guybedford/es-module-shims):

\`\`\`html
@if (Context.Request.Headers.UserAgent.Any(x => x.Contains("Safari") && !x.Contains("Chrome")))
{
    <script async src="https://ga.jspm.io/npm:es-module-shims@1.6.3/dist/es-module-shims.js"><\/script>
}
\`\`\`

### Fast Component Loading

SPAs are notorious for being slow to load due to needing to download large blobs of JavaScript bundles that it needs to initialize
with their JS framework to mount their App component before it starts fetching the data from the server it needs to render its components.

A complex solution to this problem is to server render the initial HTML content then re-render it again on the client after the page loads.
A simpler solution is to avoid unnecessary ajax calls by embedding the JSON data the component needs in the page that loads it, which is what
[/TodoMvc](/TodoMvc) does to load its initial list of todos using the [Service Gateway](https://docs.servicestack.net/service-gateway)
to invoke APIs in process and embed its JSON response with:

\`\`\`html
<script>todos = @await ApiResultsAsJsonAsync(new QueryTodos())<\/script>
<script type="module">
import TodoMvc from "/Pages/TodoMvc.mjs"
import { mount } from "/mjs/app.mjs"
mount('#todomvc', TodoMvc, { todos })
<\/script>
\`\`\`

Where \`ApiResultsAsJsonAsync\` is a simplified helper that uses the \`Gateway\` to call your API and returns its unencoded JSON response:

\`\`\`csharp
(await Gateway.ApiAsync(new QueryTodos())).Response?.Results.AsRawJson();
\`\`\`

The result of which should render the List of Todos instantly when the page loads since it doesn't need to perform any additional Ajax requests
after the component is loaded.

### Fast Page Loading

We can get SPA-like page loading performance using htmx's [Boosting](https://htmx.org/docs/#boosting) feature which avoids full page reloads
by converting all anchor tags to use Ajax to load page content into the page body, improving perceived performance from needing to reload
scripts and CSS in \`<head>\`.

This is used in [Header.cshtml](https://github.com/NetCoreTemplates/razor/blob/main/MyApp/Pages/Shared/Header.cshtml) to **boost** all
main navigation links:

\`\`\`html
<nav hx-boost="true">
    <ul>
        <li><a href="/Blog">Blog</a></li>
    </ul>
</nav>
\`\`\`

htmx has lots of useful [real world examples](https://htmx.org/examples/) that can be activated with declarative attributes,
another useful feature is the [class-tools](https://htmx.org/extensions/class-tools/) extension to hide elements from
appearing until after the page is loaded:

\`\`\`html
<div id="signin"></div>
<div class="hidden mt-5 flex justify-center" classes="remove hidden:load">
    @Html.SrcPage("SignIn.mjs")
</div>
\`\`\`

Which is used to reduce UI yankiness from showing server rendered content before JS components have loaded.

### @servicestack/vue Library

[@servicestack/vue](https://docs.servicestack.net/vue/) is our cornerstone library for enabling a highly productive
Vue.js development model across our [Vue Tailwind Project templates](https://docs.servicestack.net/templates-vue) which
we'll continue to significantly invest in to unlock even greater productivity benefits in all Vue Tailwind Apps.

In addition to a variety of high-productive components, it also contains a core library of functionality
underpinning the Vue Components that most Web Apps should also find useful:

<vue-component-library class="mt-4"></vue-component-library>
`,date:"2023-02-01",tags:["js","dev"],wordCount:3576,lineCount:675,minutesToRead:16,title:"Simple, Modern JavaScript",summary:"Learn about JS Modules, Vue 3 and available rich UI Components",image:"https://images.unsplash.com/photo-1497515114629-f71d768fd07c?crop=entropy&fit=crop&h=1000&w=2000",author:"Brandon Foley",url:"/posts/javascript"},{slug:"start",path:"src/_posts/2023-01-21_start.md",fileName:"start.md",content:`### Setup 

If project wasn't created with [x new](https://docs.servicestack.net/dotnet-new), ensure postinstall tasks are run with:

\`\`\`bash
$ npm install
\`\`\`

### Tailwind Configuration

This template is configured with a stand-alone [Tailwind CSS CLI](https://tailwindcss.com/docs/installation)
installation with a modified **tailwind.input.css** that includes [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
and [@tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio) plugins so that no **node_modules** dependencies are needed.

The [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) plugin css is contained in \`css/typography.css\` which
applies a beautiful default style to unstyled HTML, ideal for Markdown content like this.

### Running Tailwind during development

Run tailwind in a new terminal during development to auto update your **app.css**:

\`\`\`bash
$ npm run ui:dev
\`\`\`

For an optimal development experience run it together with \`dotnet watch\` to preview changes on each save.

Or if using JetBrains Rider, **ui:dev** can be run directly from Rider in **package.json**:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/servicestack-reference/scripts-tailwind.png)

### Using JsonServiceClient in Web Pages

Easiest way to call APIs is to use [@servicestack/client](https://docs.servicestack.net/javascript-client) with
the built-in [/types/mjs](https://vue-mjs.web-templates.io/types/mjs) which returns your APIs annotated typed JS DTOs that can be used immediately
(i.e. without any build steps):

\`\`\`html
<input type="text" id="txtName">
<div id="result"></div>
\`\`\`

\`\`\`html
<script type="module">
import { JsonApiClient, $1, on } from '@servicestack/client'
import { Hello } from '/types/mjs'

on('#txtName', {
    async keyup(el) {
        const client = JsonApiClient.create()
        const api = await client.api(new Hello({ name:el.target.value }))
        $1('#result').innerHTML = api.response.result
    }
})
<\/script>
\`\`\`

For better IDE intelli-sense during development, save the annotated Typed DTOs to disk with:

\`\`\`bash
$ npm run dtos
\`\`\`

Where it will enable IDE static analysis when calling Typed APIs from JavaScript:

\`\`\`js
import { Hello } from '/mjs/dtos.mjs'
client.api(new Hello({ name }))
\`\`\`
`,date:"2023-01-21",tags:["js","dev","tailwind"],wordCount:321,lineCount:70,minutesToRead:1,title:"Getting Started",summary:"Found out how to use these template features",author:"Gayle Smith",image:"https://images.unsplash.com/photo-1533090161767-e6ffed986c88?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/start"},{slug:"rider",path:"src/_posts/2023-01-11_rider.md",fileName:"rider.md",content:`<a href="https://www.jetbrains.com/rider/">
<img src="https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/svg/rider.svg" 
     class="sm:float-left mr-8 w-24 h-24" style="margin-top:0"></a>

[JetBrains Rider](https://www.jetbrains.com/rider/) is our recommended IDE for any C# + JavaScript development as it 
offers a great development UX for both, including excellent support 
for TypeScript and popular JavaScript Framework SPA assets like [Vue SFC's](https://v3.vuejs.org/guide/single-file-component.html).

#### Setup Rider IDE

As Rider already understands and provides excellent HTML/JS/TypeScript support you'll be immediately productive out-of-the-box,
we can further improve the development experience for Vue.js Apps by adding an empty **vue** dependency to **package.json**:

\`\`\`json
{
  "devDependencies": {
    "vue": ""
  }
}
\`\`\`

As this is just a heuristic Rider looks for to enable its Vue support, installing the dependency itself isn't used or required.

Other than that the only plugin we recommend adding is:

<a href="https://plugins.jetbrains.com/plugin/15321-tailwind-css" class="text-2xl flex items-center" style="text-decoration:none">
     <svg class="sm:float-left w-12 h-12" style="margin:0 .5rem 0 0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#44a8b3" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1Z"/></svg>
     <span class="">Tailwind CSS Plugin</span>
</a>

Which provides provides intelli-sense support for [Tailwind CSS](https://tailwindcss.com).

### Start both dotnet and Tailwind

The only additional development workflow requirement to use tailwind is to start it running in the background 
which can be done from a new Terminal:

\`\`\`bash
$ npm run ui:dev
\`\`\`

We find \`dotnet watch\` offers the most productive iterative development workflow for .NET which refreshes on save 
which works great with Tailwind which rewrites your \`app.css\` on save.

How you want to run them is largely a matter of preference, our personal preference is to run the **dev** and **ui:dev**
npm scripts in your **package.json**:

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/scripts/dotnet-tailwind.png)


### Rider's Task Runner

Where they will appear in Rider's useful task runner widget where you'll be able to easily, stop and rerun all project tasks:

![](https://github.com/ServiceStack/docs/raw/master/docs/images/spa/rider-run-widget.png)

### Running from the terminal

These GUI tasks are just managing running CLI commands behind-the-scenes, which if you prefer you can use JetBrains
excellent multi-terminal support to run \`$ dotnet watch\` and \`$ npm run ui:dev\` from separate or split Terminal windows.

### Deploying to Production

This template also includes the necessary GitHub Actions to deploy this Apps production static assets to GitHub Pages CDN, 
for more info, checkout [GitHub Actions Deployments](deploy).

### Get Started

If you're new to Vue 3 a good place to start is [Vue 3 Composition API](https://vuejs.org/api/composition-api-setup.html).
`,date:"2023-01-11",tags:["c#","dev"],wordCount:524,lineCount:70,minutesToRead:2,layout:"_LayoutContent",title:"Develop using JetBrains Rider",summary:"Setting up & exploring development workflow in Rider",author:"Gayle Smith",image:"https://images.unsplash.com/photo-1472289065668-ce650ac443d2?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/rider"},{slug:"vs",path:"src/_posts/2023-01-10_vs.md",fileName:"vs.md",content:`A popular alternative development environment to our preferred [JetBrains Rider](rider) IDE is to use
Visual Studio, the primary issue with this is that VS Code is a better IDE with richer support for JavaScript and npm
projects whilst Visual Studio is a better IDE for C# Projects. 

Essentially this is why we recommend Rider where it's best at both, where both C# and JS/TypeScript projects can 
be developed from within the same solution.

### Developing with just VS Code

<a href="https://visualstudio.microsoft.com/" title="VS Code" class="sm:float-left mr-8">
    <svg class="w-24 h-24" style="margin-top:1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 254"><defs><linearGradient id="logosVisualStudioCode0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FFF"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient><path id="logosVisualStudioCode1" d="M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.507 91.695a15.853 15.853 0 0 0 5.464 3.571Zm10.464-183.649l-76.262 57.889l76.262 57.888V68.956Z"/></defs><mask id="logosVisualStudioCode2" fill="#fff"><use href="#logosVisualStudioCode1"/></mask><path fill="#0065A9" d="M246.135 26.873L193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36Z" mask="url(#logosVisualStudioCode2)"/><path fill="#007ACC" d="m246.135 226.816l-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36Z" mask="url(#logosVisualStudioCode2)"/><path fill="#1F9CF0" d="M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363l-52.533 25.262Z" mask="url(#logosVisualStudioCode2)"/><path fill="url(#logosVisualStudioCode0)" fill-opacity=".25" d="M180.828 252.605a15.874 15.874 0 0 0 12.65-.486l52.5-25.263a15.938 15.938 0 0 0 9.026-14.363V41.197a15.939 15.939 0 0 0-9.025-14.363L193.477 1.57a15.877 15.877 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.506 91.695a15.857 15.857 0 0 0 5.465 3.571Zm10.464-183.65l-76.262 57.89l76.262 57.888V68.956Z" mask="url(#logosVisualStudioCode2)"/></svg>
</a>

If you prefer the dev UX of a lightweight text editor or your C# project isn't large, than VS Code on its own
can provide a great development UX which is also what [Vue recommends themselves](https://v3.vuejs.org/api/sfc-tooling.html#ide-support),
to be used together with the [Volar extension](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar).

VSCode's [Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal) has great multi-terminal 
support you can toggle between the editor and terminal with \`Ctrl+\` or open a new Terminal Window with
<code>Ctrl+Shift+\`</code> to run Tailwind with:

\`\`\`bash
$ npm run ui:dev
\`\`\`

Then in a new Terminal Window, start a new watched .NET App with:

\`\`\`bash
$ dotnet watch
\`\`\`

With both projects started you can open a browser tab running at \`https://localhost:5001\` where it 
will automatically reload itself at every \`Ctrl+S\` save point.

#### Useful VS Code extensions

We recommend these extensions below to enhance the development experience of this template:

 - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Add Intellisense for Tailwind classes
 - [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) - Add HTML Syntax Highlighting in string literals 

### Using Visual Studio

<a href="https://code.visualstudio.com/" title="Visual Studio" class="sm:float-left mr-8">
    <svg class="w-24 h-24" style="margin-top:1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><defs><linearGradient id="logosVisualStudio0" x1="50%" x2="50%" y1=".002%" y2="100%"><stop offset="0%" stop-color="#FFF"/><stop offset="100%" stop-color="#FFF" stop-opacity="0"/></linearGradient></defs><path fill="#52218A" d="M36.987 200.406a10.667 10.667 0 0 1-11.04 1.734L6.56 194.006A10.667 10.667 0 0 1 0 184.22V70.46a10.667 10.667 0 0 1 6.56-9.787l19.387-8a10.667 10.667 0 0 1 11.04 1.733l4.346 3.6a5.893 5.893 0 0 0-9.333 4.8v129.067a5.893 5.893 0 0 0 9.333 4.8l-4.346 3.733Z"/><path fill="#6C33AF" d="M6.56 194.006A10.667 10.667 0 0 1 0 184.22v-.88a6.16 6.16 0 0 0 10.667 4.133L176 4.673a16 16 0 0 1 18.187-3.093l52.746 25.386A16 16 0 0 1 256 41.393v.613a10.107 10.107 0 0 0-16.507-7.813l-198.16 162.48l-4.346 3.733a10.667 10.667 0 0 1-11.04 1.734L6.56 194.006Z"/><path fill="#854CC7" d="M6.56 60.673A10.667 10.667 0 0 0 0 70.46v.88a6.16 6.16 0 0 1 10.667-4.134L176 250.006a16 16 0 0 0 18.187 3.094l52.746-25.387A16 16 0 0 0 256 213.286v-.613a10.107 10.107 0 0 1-16.507 7.813L41.333 58.006l-4.346-3.733a10.667 10.667 0 0 0-11.04-1.6l-19.387 8Z"/><path fill="#B179F1" d="M194.187 253.1A16 16 0 0 1 176 250.006a9.387 9.387 0 0 0 16-6.64v-232a9.387 9.387 0 0 0-16-6.693a16 16 0 0 1 18.187-3.093l52.746 25.36A16 16 0 0 1 256 41.366v171.947a16 16 0 0 1-9.067 14.427l-52.746 25.36Z"/><path fill="url(#logosVisualStudio0)" fill-opacity=".25" d="M183.707 254.273a16 16 0 0 0 10.48-1.173l52.746-25.36A16 16 0 0 0 256 213.313V41.366a16 16 0 0 0-9.067-14.426L194.187 1.58A16 16 0 0 0 182.24.806A16 16 0 0 0 176 4.673L90.987 98.7L41.333 58.006l-4.346-3.733a10.667 10.667 0 0 0-9.627-2.213a6.8 6.8 0 0 0-1.413.48L6.56 60.673A10.667 10.667 0 0 0 0 69.66v115.36a10.664 10.664 0 0 0 6.56 8.986l19.387 8a6.8 6.8 0 0 0 1.413.48c3.378.882 6.973.056 9.627-2.213l4.346-3.6l49.654-40.693L176 250.006a16 16 0 0 0 7.707 4.267ZM192 73.153l-66.107 54.187L192 181.526V73.153ZM32 90.726l33.093 36.614L32 163.953V90.726Z"/></svg>
</a>

As your C# project grows you'll want to consider running the back-end C# Solution with Visual Studio .NET with its
much improved intelli-sense, navigation, tests runner & debug capabilities. 

As we've never had a satisfactory experience trying develop npm or JS/TypeScript projects with VS.NET, we'd recommend only
using VS.NET for C# and Razor and continuing to use VSCode for everything else. 

If you'd prefer to use Visual Studio for front-end development we recommend moving all JS to external files for a better
Dev UX, e.g:

\`\`\`html
<script type="module" src="./pages/SignIn.mjs"><\/script>
\`\`\`

### Deploying to Production

This template also includes the necessary GitHub Actions to deploy this Apps production static assets to GitHub Pages CDN,
for more info, checkout [GitHub Actions Deployments](deploy).

### Get Started

If you're new to Vue 3 a good place to start is [Vue 3 Composition API](https://vuejs.org/api/composition-api-setup.html).
`,date:"2023-01-10",tags:["c#","dev"],wordCount:1445,lineCount:69,minutesToRead:6,title:"Develop using Visual Studio",summary:"Exploring development workflow in VS Code and Visual Studio .NET",author:"Lucy Bates",image:"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/vs"},{slug:"deploy",path:"src/_posts/2023-01-01_deploy.md",fileName:"deploy.md",content:`# ServiceStack GitHub Action Deployments

The [release.yml](https://github.com/NetCoreTemplates/razor-tailwind/blob/main/.github/workflows/release.yml) 
in this template enables GitHub Actions CI deployment to a dedicated server with SSH access.

## Overview
\`release.yml\` is designed to work with a ServiceStack app deploying directly to a single server via SSH. A docker image is built and stored on GitHub's \`ghcr.io\` docker registry when a GitHub Release is created.

GitHub Actions specified in \`release.yml\` then copy files remotely via scp and use \`docker-compose\` to run the app remotely via SSH.

## What's the process of \`release.yml\`?

![](https://raw.githubusercontent.com/ServiceStack/docs/master/docs/images/mix/release-ghr-vanilla-diagram.png)

## Deployment server setup

To get this working, a server needs to be setup with the following:

- SSH access
- docker
- docker-compose
- ports 443 and 80 for web access of your hosted application

This can be your own server or any cloud hosted server like Digital Ocean, AWS, Azure etc. We use [Hetzner Cloud](http://cloud.hetzner.com/)
to deploy all ServiceStack's [GitHub Project Templates]( https://github.com/NetCoreTemplates/) as it was the 
[best value US cloud provider](https://servicestack.net/blog/finding-best-us-value-cloud-provider) we've found.

When setting up your server, you'll want to use a dedicated SSH key for access to be used by GitHub Actions. GitHub Actions will need the *private* SSH key within a GitHub Secret to authenticate. This can be done via ssh-keygen and copying the public key to the authorized clients on the server.

To let your server handle multiple ServiceStack applications and automate the generation and management of TLS certificates, an additional docker-compose file is provided in this template, \`nginx-proxy-compose.yml\`. This docker-compose file is ready to run and can be copied to the deployment server.

For example, once copied to remote \`~/nginx-proxy-compose.yml\`, the following command can be run on the remote server.

\`\`\`
docker-compose -f ~/nginx-proxy-compose.yml up -d
\`\`\`

This will run an nginx reverse proxy along with a companion container that will watch for additional containers in the same docker network and attempt to initialize them with valid TLS certificates.

### GitHub Actions secrets

The \`release.yml\` uses the following secrets.

| Required Secrets | Description |
| -- | -- |
| \`DEPLOY_HOST\` | Hostname used to SSH deploy .NET App to, this can either be an IP address or subdomain with A record pointing to the server |
| \`DEPLOY_USERNAME\` | Username to log in with via SSH e.g, **ubuntu**, **ec2-user**, **root** |
| \`DEPLOY_KEY\` | SSH private key used to remotely access deploy .NET App |
| \`LETSENCRYPT_EMAIL\` | Email required for Let's Encrypt automated TLS certificates |

These secrets can use the [GitHub CLI](https://cli.github.com/manual/gh_secret_set) for ease of creation. Eg, using the GitHub CLI the following can be set.

\`\`\`bash
gh secret set DEPLOY_HOST -b"<DEPLOY_HOST>"
gh secret set DEPLOY_USERNAME -b"<DEPLOY_USERNAME>"
gh secret set DEPLOY_KEY < key.pem # DEPLOY_KEY
gh secret set LETSENCRYPT_EMAIL -b"<LETSENCRYPT_EMAIL>"
\`\`\`

These secrets are used to populate variables within GitHub Actions and other configuration files.

## Deployments

A published version of your .NET App created with the standard dotnet publish tool:

\`\`\`yaml
dotnet publish -c Release
\`\`\`

is used to build a production build of your .NET App inside the standard \`Dockerfile\` for dockerizing .NET Applications.

Additional custom deployment tasks can be added to your project's package.json **postinstall** script which also gets run at deployment. 

If preferred additional MS Build tasks can be run by passing in custom parameters in the publish command, e.g:

\`\`\`yaml
dotnet publish -c Release /p:APP_TASKS=prerender
\`\`\`

Which your \`MyApp.csproj\` can detect with a target that checks for it:

\`\`\`xml
<!-- Prerender tasks run in release.yml -->
<Target Name="AppTasks" AfterTargets="Build" Condition="$(APP_TASKS) != ''">
    <CallTarget Targets="Prerender" Condition="$(APP_TASKS.Contains('prerender'))" />
</Target>
<Target Name="Prerender">
    <Message Text="Prerender..." />
</Target>
\`\`\`

## Pushing updates and rollbacks

By default, deployments occur on commit to your main branch. A new Docker image for your ServiceStack API is produced, pushed to GHCR.io and hosted on your Linux server with Docker Compose.

The template also will run the release process on the creation of a GitHub Release making it easier to switch to manual production releases.

Additionally, the \`release.yml\` workflow can be run manually specifying a version. This enables production rollbacks based on previously tagged releases.
A release must have already been created for the rollback build to work, it doesn't create a new Docker build based on previous code state, only redeploys as existing Docker image.
`,date:"2023-01-01",tags:["github-actions","devops"],wordCount:735,lineCount:100,minutesToRead:3,title:"Deployment with GitHub Actions",summary:"Configuring your GitHub repo for SSH and CDN deployments",author:"Gayle Smith",image:"https://images.unsplash.com/photo-1485841890310-6a055c88698a?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/deploy"},{slug:"typography",path:"src/_posts/2022-12-31_typography.md",fileName:"typography.md",content:`<p class="lead">
  Until now, trying to style an article, document, or blog post with Tailwind has been a tedious
  task that required a keen eye for typography and a lot of complex custom CSS.
</p>

By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you _really are_ just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive.

We get lots of complaints about it actually, with people regularly asking us things like:

> Why is Tailwind removing the default styles on my \`h1\` elements? How do I disable this? What do you mean I lose all the other base styles too?

We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a \`p\` element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look _awesome_, not awful.

The \`@tailwindcss/typography\` plugin is our attempt to give you what you _actually_ want, without any of the downsides of doing something stupid like disabling our base styles.

It adds a new \`prose\` class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:

\`\`\`html
<article class="prose">
  <h1>Garlic bread with cheese: What the science tells us</h1>
  <p>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  </p>
  <p>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  </p>
  <!-- ... -->
</article>
\`\`\`

For more information about how to use the plugin and the features it includes, [read the documentation](https://github.com/tailwindcss/typography/blob/master/README.md).

---

## What to expect from here on out

What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like **bold text**, unordered lists, ordered lists, code blocks, block quotes, _and even italics_.

It's important to cover all of these use cases for a few reasons:

1. We want everything to look good out of the box.
2. Really just the first reason, that's the whole point of the plugin.
3. Here's a third pretend reason though a list with three items looks more realistic than a list with two items.

Now we're going to try out another header style.

### Typography should be easy

So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable.

Something a wise person once told me about typography is:

> Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad.

It's probably important that images look okay here by default as well:

<figure>
  <img
    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
    alt=""
  />
  <figcaption>
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
    classical Latin literature from 45 BC, making it over 2000 years old.
  </figcaption>
</figure>

Now I'm going to show you an example of an unordered list to make sure that looks good, too:

- So here is the first item in this list.
- In this example we're keeping the items short.
- Later, we'll use longer, more complex list items.

And that's the end of this section.
`,date:"2022-12-31",tags:["tailwind","markdown"],wordCount:666,lineCount:78,minutesToRead:3,title:"Tailwind Typography",summary:"tailwindcss/typography enabled for Markdown pages",author:"Lucy Bates",image:"https://images.unsplash.com/photo-1497250681960-ef046c08a56e?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/typography"},{slug:"hetzner-cloud",path:"src/_posts/2022-09-06_hetzner-cloud.md",fileName:"hetzner-cloud.md",content:`At <a href="./">ServiceStack</a>, we have been using AWS for hosting for over 10 years. It has served us well, but it suffers from complex pricing and possibility of bill shock due to its fractured pay-as-you-go design.

Thankfully, more and more companies are providing simpler offerings for hosting needs, and AWS themselves launched [Lightsail](https://aws.amazon.com/lightsail) as their answer to market demands for simple hosting options that package everything you need for basic hosting.

These simpler hosting options tend to bundle several things together as one fixed monthly price. A VM with a specific compute and memory allocation, as well as data transfer, and storage.

## Looking at different US offerings

Something we wanted to do was to host our [live demo applications](https://github.com/ServiceStackApps/LiveDemos) on a US based host. We were using [Hetzner dedicated servers](https://www.hetzner.com/dedicated-rootserver) in the past for non-latency sensitive use cases like our build server and [Gist.Cafe (our interactive playground for multiple platforms)](https://gist.cafe) but we also wanted our demo applications to be snappy for US users.

[DigitalOcean](https://www.digitalocean.com/pricing) provides ["Droplets"](https://www.digitalocean.com/pricing/droplets) with this fixed pricing model with a nice and simple interface. Their pricing was quite good and we realized we could run all 20+ of our demo applications on a single droplet for $40/month.

For deployment, [we also like to keep things as simple as we can, whilst keeping portability](https://docs.servicestack.net/do-github-action-mix-deployment). Since all our projects are public and on GitHub, we use [GitHub Actions](https://docs.servicestack.net/do-github-action-mix-deployment#github-repository-setup) heavily along with a pattern that deploys our applications using Docker Compose via SSH.
Each application runs in its own container behind an [NGINX proxy](https://docs.servicestack.net/do-github-action-mix-deployment#get-nginx-reverse-proxy-and-letsencrypt-companion-running) with a side car that handles renewing LetsEncrypt certificates. Below is an example of this pattern with Blazor and Litestream.

<iframe class="youtube" src="https://www.youtube.com/embed/fY50dWszpw4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

A nice side effect of this approach is moving servers is relatively painless. We change the DNS entry for the application to point to our new server, update the GitHub Action Secrets if needed and run our Release workflow.

A minute or so later, the application is back running again. Since their were 20+ of these repositories we took advantage of the [GitHub Organization Secrets](https://cli.github.com/manual/gh_secret_set) so we only needed to update values in one place, and [running the workflows again](https://cli.github.com/manual/gh_workflow_run) can also be done programmatically through the GitHub CLI.

## DigitalOcean Price Increase

In June of 2022, we got a notification that [prices for droplets would be increasing](https://www.digitalocean.com/try/new-pricing), and for our droplet it would be going from **$40 to $48**. While this is a small amount of money, it prompted us to have a wider look into this market.

Something we try to do at ServiceStack is to not only provide a comprehensive .NET Framework for building API first systems, but also seek out great value hosting options we can recommend in this ever change space which we're happy to share, like this blog post, that might be useful to our users and others.

Not everyone builds massively distributed systems, and as hardware performance increases, and platforms like [.NET are becoming even more optimized](https://devblogs.microsoft.com/dotnet/performance-improvements-in-aspnet-core-6), a setup with just a server or two can manage larger loads and use cases.

Our research and evaluations ended up right back at [Hetzner but this time with their Cloud offering](https://www.hetzner.com/cloud). For less than **$15 USD** per month, you can get a **4 vCPU, 8GB RAM, 160GB storage and 20TB** of data transfer **hosted in the US**.

We found this was by far the cheapest offering for a simple fixed monthly hosting, and looked to compare how well it performed against the more traditional cloud hosting setups.

## Litestream and SQLite

Our demo applications use [SQLite](https://www.sqlite.org) as a simple way to host the database storage and application together, taking advantage of SQLite's embedded nature.
We were also testing out [Litestream](https://litestream.io) as a possible solution to the lack of data backups and safety when using SQLite for more production like workloads.

<div class="mx-auto mt-4 mb-4">
  <a href="https://litestream.io">
      <div class="inline-flex justify-center w-full">
        <img src="https://servicestack.net/img/posts/hetzner-cloud/litestream.svg" alt="">
      </div>
      <div class="text-gray-500 text-center">litestream.io</div>
  </a>
</div>

Litestream runs as a separate process and watches your SQLite file for changes and replicates them to storage options like AWS S3, Azure Blob storage and SFTP.
[We created several templates to make this easier](https://docs.servicestack.net/ormlite/litestream) and provide a way to bake in automated disaster recovery using Litestream when used with GitHub Actions and our SSH with Docker Compose deployment.

With some basic load testing, we noticed that SQLite performed pretty well without any effort on our part, and decided we should see how this compares to the commonly suggested hosting patterns provided by the large cloud providers of AWS and Azure.

We used the recommended "Production" setups provided by AWS RDS and Azure SQL Database wizards along with 2 vCPU application server to provide the basis on our comparison.
The reason we chose to use the suggested defaults from these providers was to illustrate the power of defaults when offered by market leaders. When compared to a simple SQLite setup, and providers that offer fixed monthly pricing like Hetzner and DigitalOcean, which is often enough to small companies selling Business to Business (B2B) solutions, AWS and Azure recommended "Production" environments can look extremely over priced.

One of the main reasons managed database solutions are chosen is the fact that they take care of automated backups and restore if things go wrong. There are other nice features that definitely have a lot of value, but managed disaster recovery is probably the most commonly cited one I've come across for why services like RDS are chosen during early development.

Litestream provides this kind of data safety and disaster recovery functionality by targeting cost effective and robust storage solutions like AWS S3 and other cloud provided object stores, and making the backup process close to real-time, and accessible via their CLI.
And the embedded nature of SQLite removes the uncertainty of the process of upgrading your database.

## The Test

To get a clearer idea how each of these hosting options perform with a fairly modest workload, we used a [Gatling](https://gatling.io) test to simulate a user logging into our sample Bookings application, browsing around and creating a booking.

These series of steps had 2 write requests and 8 read, separated by 2 seconds per step. We then setup a Gatling simulation that ramped up adding new users to our system from 5 per second to 15 per second, to add a growing number of users over 10 minutes, then sustained over another 10 minutes.

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/aws-gatling-result.png" alt="">
    </div>
<div class="text-gray-500 text-center">AWS Gatling Result.</div>
</div>

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/azure-gatling-result.png" alt="">
    </div>
<div class="text-gray-500 text-center">Azure Gatling Result.</div>
</div>

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/hetzner-gatling-result.png" alt="">
    </div>
<div class="text-gray-500 text-center">Hetzner Gatling Result.</div>
</div>

All 3 setups could handle this rate of requests without issue, and though the "Recommended" AWS and Azure setups would have more headroom, the price difference is far too large to ignore, especially as the difference is paid every month.
The requests throughput of that this test illustrated ~100rps can suit many many use cases, and SQLite is [really only limited by its single writer design](https://www.sqlite.org/whentouse.html#:~:text=An%20SQLite%20database%20is%20limited,to%20something%20less%20than%20this.). We did previous tests of upto 250rps on the same Hetzner Cloud instance with SQLite, but this was starting to reach the maximum throughput, again purely to do with the single writer limitation.

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/litestream-costs.svg" alt="">
    </div>
<div class="text-gray-500 text-center">Previous test result price comparison without AWS using Provisioned IOPS.</div>
</div>

This level of throughput is enough to service many kinds of businesses with a drastically more simple system to manage, with large cost savings. Also, with the use of an ORM like [OrmLite](https://docs.servicestack.net/ormlite), switching to another database provider can be migrated if and when the traditional offerings like Postgres are needed.

## The Setups
<style>
    table {
        width: 100%;
        margin-top: 4em;
        margin-bottom: 4em;
    }
</style>

The original setup for tests we did in June didn't default to provisioned IOPs for AWS, but when repeating the tests AWS costs blow out due to this feature being enabled by default. 

Without provisioned IOPs, it drops to around **$132/month** as an estimated cost. The **$300/month** default feature for a "Production" database is very hard for AWS to justify, and I think more of a sign of their poor performing GP2 storage option. Although this will only impact very "chatty" types of applications that need higher IOPs throughput, the difference in performance from RDS vs providers like DigitalOcean and Hetzner can be quite stark.

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/aws-rds-with-provisioned-iops.png" alt="">
    </div>
<div class="text-gray-500 text-center">AWS RDS now defaults to provisioned IOPs for a Production setup, drastically increasing costs.</div>
</div>

|              | AWS (DB)          | AWS (App) | Azure (DB) | Azure (App) | DigitalOcean | Hetzner Cloud |
|--------------|-------------------|-----------|------------|-------------|--------------|---------------|
| vCPU         | 2                 | 2         | 4          | 2           | 4            | 4             |
| Memory  (GB) | 8                 | 4         | 10         | 8           | 8            | 8             |
| Storage (GB) | 100 (provisioned) | 16        | 32         | 30          | 160          | 160           |
| Cost         | $442              | $34       | $373       | $70         | $48          | $15           |

The above specs were provided as "Production" defaults when using a single database instance. Azure SQL Database defaults to costing $373, during the load test, the database CPU hit ~25%.

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/azure-db-cpu-during-test.png" alt="">
    </div>
<div class="text-gray-500 text-center">Azure SQL database without tuning performs poorly for cost, likely due to lack of indexes</div>
</div>


|           | AWS (DB) | AWS (App) | Azure (DB) | Azure (App) | Hetzner Cloud |
|-----------|----------|-----------|------------|-------------|---------------|
| Max CPU % | 8        | 35        | 25         | 45          | 40            |


This is without any tuning on any of the databases, so while you like more performance out of the recommended setups, it is still clear SQLite performs well by default, and it is well worth considering not only Hetzner Cloud for value for money, but if your use can only needs a single host with SQLite.

## Hetzner Cloud

While we were primarily looking for one of the lowest cost options with simplified pricing, Hetzner Cloud pleasantly surprised us with a few features the larger providers could learn from.

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/hetzner-cloud-buy.png" alt="">
    </div>
<div class="text-gray-500 text-center">Hetzner Cloud Pricing.</div>
</div>

### Creating a new instance is fast 
Most of the time if will be ready to remote to before you can open your terminal. Not sure if this is due to some kind of pre-creation process on Hetzner part during the creation screen, but everything is very responsive.
In my testing from the time the "Create" button was clicked, my SSH commands would succeed within **20 seconds**.

### Live Graphs
Another part of the responsiveness is their "Live" graphs for monitoring. It is surprisingly low latency and an extremely stark difference between AWS charging extra for "Detailed" monitoring on EC2 instances. The graphs update every 3-5 seconds in the browser and look to be over a few seconds behind real-time.

<div class="mx-auto mt-4 mb-4">
    <div class="inline-flex justify-center w-full">
      <img src="https://servicestack.net/img/posts/hetzner-cloud/hetzner-cloud-live-graphs.gif" alt="">
    </div>
<div class="text-gray-500 text-center">Live monitoring updates every 3-5 seconds.</div>
</div>

CloudWatch is a major value add for AWS, and Hetzner's offering is very very basic in comparison, but it is nice to see live updating stats right in your web browser, and something hopefully the other providers can also offer in the future.

### Price
This is the biggest draw card by a long way. The AWS and Azure "recommended" setups are extremely expensive for the hardware and performance they offer. Yes they are mature cloud offerings with a large array of features, but their **pricing scales with hardware resources**.
Products like **Provisioned IOPs** are extremely expensive, and when other cloud providers are offering far more performant and competitive storage with their instances, it can feel like AWS is using it's market share and their defaults to upsell very expensive products.

### Transfer costs
It's been long known that one of the ways large cloud providers keep customers in their network is by charging [excessively large and complex data egress costs](https://aws.amazon.com/blogs/architecture/overview-of-data-transfer-costs-for-common-architectures). Something attractive about simplified pricing from Hetzner Cloud (and DigitalOcean to a lesser degree) is the included data transfer of 20TB a month.

Not only is AWS data transfer pricing extremely complicated (inter region vs cross region vs CloudFront vs Transit Gateway and so on), but if your application was sending a lot of data to clients, that same **20TB** you get for free with a **$15 server**, would cost **$1,791 just for data** when coming from AWS. Azure pricing also confusing, and in some ways more expensive.

## Defaults are powerful
Both AWS and Azure "recommended" defaults are there not because the software selected (SQL Server and Postgres) need that amount of resources just to operate, but more as an upsell.
Lots of projects and applications absolutely do not need features like "Provisioned IOPs", despite GP2 storage of AWS being incredibly slow.

Performing disk speed check using the Linux utility \`fio\` an AWS EC2 instance with 100GB GP2 storage can do ~2250 IOPS and 9MB/s read, and ~750 IOPs at 3MB/s write.
In contrast, Digital Ocean $48 instance, this is not even paying the extra $8/month for the faster storage can do 35.2k IOPS at 144MB/s read, and 11.8k IOPS at 48MB/s write.

Hetzner again is the stand out, with the $15 instance tests resulting in 50.8k IOPS at 207MB/s read, and 16.9k IOPS at 69MB/s write.

|               | Read IOPS | Write IOPs | Read MBs  | Write MBs |
|---------------|-----------|------------|-----------|-----------|
| AWS           | 2.3k      | 0.8k       | 9.2 MB/s  | 3.1 MB/s  |
| Azure         | 3.0k      | 1.0k       | 12.5 MB/s | 4.2 MB/s  |
| DigitalOcean  | 35.2k     | 11.8k      | 144 MB/s  | 48.2 MB/s |
| Hetzner Cloud | 50.5k     | 16.9k      | 207 MB/s  | 69.2 MB/s |


All tests used the following \`fio\` command.

\`\`\`shell
fio --randrepeat=1 --ioengine=libaio --direct=1 --gtod_reduce=1 --name=test \\
--filename=test --bs=4k --iodepth=64 --size=4G --readwrite=randrw --rwmixread=75
\`\`\`

## SQLite

Part of the resurgence in popularity of using SQLite is not only the simplicity of a single server, but also as hardware is getting faster, issues surrounding limitations of a single writer are becoming less of an issue for a wider number of use cases.

Litestream's elegant solution for streaming backups to cheap replica storage is definitely adding to that popularity as well since it was a sticking point for a lot of use cases that need that simple data redundancy functionality.

Other solutions for Postgres like \`pgbackrest\` are similar, but the ease of use is another big part of what makes SQLite and Litestream a great combination.
One command to watch and replicate, another to restore, and it runs completely independent of your application using the SQLite file.

## Hetzner Cloud is hard to beat on price

We're going to keep testing Hetzner Cloud with new applications and use cases going into the future. While they are a very new player in the crowded Cloud Provider market, and their offerings are much more limited, the pricing is a breath of fresh air from the large three providers.

More competition in this space is a great thing, and for those that can use solutions like SQLite for their projects, checking out some of the smaller players like DigitalOcean and Hetzner Cloud is well worth your time.
The early signs from Hetzner Cloud is they not only have an amazing value product, but the features they do have improve on the equivalents from likes of AWS and Azure, which is hopefully a sign of things to come from them.

`,date:"2022-09-06",tags:["dev","hosting","devops"],wordCount:2832,lineCount:220,minutesToRead:13,title:"In pursuit of the best value US cloud provider",summary:"We've been using AWS at ServiceStack for 10+ years, it's served us well but suffers from complex & expensive pricing",author:"Brandon Foley",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/hetzner-cloud"}],authorSlugs:{"lucy-bates":{name:"Lucy Bates",email:"lucy@email.org",bio:"Works in software design, company building, and the aerospace industry.",profileUrl:"/img/profiles/user1.svg",twitterUrl:"https://twitter.com/lucy",threadsUrl:"https://threads.net/@lucy",gitHubUrl:"https://github.com/lucy"},"gayle-smith":{name:"Gayle Smith",email:"gayle@email.org",bio:"Gayle is an author, consultant, and founder focusing on improving tech.",profileUrl:"/img/profiles/user2.svg",twitterUrl:"https://twitter.com/gayle",mastodonUrl:"https://mastodon.social/@gayle"},"brandon-foley":{name:"Brandon Foley",email:"brandon@email.org",bio:"I am a programmer at heart. I like to tinker with code and build generic coding structures.",profileUrl:"/img/profiles/user3.svg",gitHubUrl:"https://github.com/brandon"}},tagSlugs:{dev:"dev",hosting:"hosting",devops:"devops",tailwind:"tailwind",markdown:"markdown","github-actions":"github-actions",c:"c#",js:"js",razor:"razor",blog:"blog",dotnet:"dotnet",blazor:"blazor",templates:"templates",servicestack:"servicestack",docs:"docs"}},videos:{vue:[{slug:"press-vue",path:"src/_videos/vue/press-vue.md",fileName:"press-vue.md",content:`We dive deep into the Vite Press Plugin, an alternative to VitePress for adding Markdown features to existing Vite Vue projects. We explore the templates productive components including Tailwind CSS, Vue Router, dynamic Layouts, Iconify and Auto Component Imports, that work together with Vite Press Plugin universal Markdown powered features to create beautiful Website Blogs, Product Releases and Video Gallery Pages that can be reused across Vue, React, and even .NET Razor and Blazor projects.
`,date:"2023-03-06",tags:["vue","vite","markdown"],wordCount:75,lineCount:2,minutesToRead:0,title:"Vite Vue Markdown Websites with Vite Press Plugin",url:"https://youtu.be/u3FcgWlack4",order:1,group:"vue"},{slug:"autoquerygrid",path:"src/_videos/vue/autoquerygrid.md",fileName:"autoquerygrid.md",content:`This walkthrough explores the ServiceStack Vue 3 library and the functionality of the AutoQueryGrid component. The AutoQueryGrid component simplifies the integration of AutoQuery services by generating a customizable UI. 

By following this guide, you'll learn how to effectively utilize these tools to enhance your application's user interface and overall user experience.
`,date:"2023-03-16",tags:["vue","autoquery"],wordCount:51,lineCount:4,minutesToRead:0,title:"Instantly Manage your data using AutoQueryGrid Vue",url:"https://youtu.be/znCoC-Ct0Ps",order:2,group:"vue"},{slug:"components",path:"src/_videos/vue/components.md",fileName:"components.md",content:"In this video, we demonstrate using the @servicestack/vue components library for Vue.js 3 Multipage Apps (MPAs) along with the `vue-mjs` template. \n\nThe template illustrates building content-heavy or complex sites while avoiding the intricacies of Single Page Apps (SPAs) through the use of JavaScript Modules, Tailwind, Vue.js, Razor Pages, and ServiceStack.",date:"2023-02-14",tags:["vue","autoquery"],wordCount:53,lineCount:3,minutesToRead:0,title:"Vue 3 Tailwind Components Library",url:"https://youtu.be/YIa0w6whe2U",order:3,group:"vue"},{slug:"admin",path:"src/_videos/vue/admin.md",fileName:"admin.md",content:`In this video we explore the Server Multi Razor Page and Client rendered Admin UI Pages in the latest 
.NET blazor-vue and razor-vue project templates to see how to use the new SidebarLayout and 
AutoQueryGrid Vue Tailwind components to build beautiful Admin UI Pages within minutes.
`,date:"2023-06-14",tags:["vue","autoquery"],wordCount:46,lineCount:4,minutesToRead:0,title:"Build beautiful custom .NET Admin UIs in minutes",url:"https://youtu.be/wlRA4_owEsc",order:4,group:"vue"},{slug:"modern",path:"src/_videos/vue/modern.md",fileName:"modern.md",content:`ServiceStack templates provide a wide range of options when it comes to using Razor Pages in your .NET application

These templates come with Tailwind, JS Modules, and Vue components already built-in, making it easy to build 
hybrid apps containing both Server-Side Rendering (SSR) and static resources`,date:"2023-02-08",tags:["vue","razor"],wordCount:46,lineCount:4,minutesToRead:0,title:"Modern Razor Pages & MVC .NET Tailwind templates",url:"https://youtu.be/SyppvQB7IPs",order:5,group:"vue"}]},whatsNew:{"2023-03-28_Planetaria":[{slug:"feature1",path:"src/_whatsnew/2023-03-28_Planetaria/feature1.md",fileName:"feature1.md",content:`Welcome to the world of Planetaria, a groundbreaking new product that is poised to revolutionize the way we explore space. 
At Planetaria, we believe that the wonders of space should be accessible to everyone, not just a privileged few. 
That's why we've created technology that empowers civilians to explore space on their own terms, without needing to rely 
on government agencies or billionaire entrepreneurs.

Our mission is to democratize space exploration and enable people from all walks of life to experience the thrill of 
venturing beyond our planet. With Planetaria, you'll have the tools and resources you need to embark on your own space missions, 
whether you're a hobbyist, a scientist, or an adventurer. From designing and building your own spacecraft to conducting experiments 
in microgravity, the possibilities are endless.`,date:"2023-03-28",tags:[],wordCount:130,lineCount:9,minutesToRead:1,title:"Planetaria",url:"http://planetaria.tech",image:"/img/whatsnew/planetaria.svg",group:"Planetaria"}],"2023-03-18_OpenShuttle":[{slug:"feature1",path:"src/_whatsnew/2023-03-18_OpenShuttle/feature1.md",fileName:"feature1.md",content:`Introducing OpenShuttle, the revolutionary new product that is set to change the space industry forever. OpenShuttle is a cutting-edge
platform that provides detailed schematics for the very first rocket designed by me, which successfully made it to orbit. 
This incredible product is designed to give space enthusiasts and professionals alike access to the groundbreaking technology that 
was used to achieve this monumental feat.

OpenShuttle is the result of years of hard work and dedication, and I am thrilled to finally be able to share it with the world. 
With its detailed schematics, OpenShuttle provides an unprecedented level of insight into the inner workings of the rocket, 
allowing users to explore the technology that made history.`,date:"2023-03-18",tags:[],wordCount:115,lineCount:8,minutesToRead:1,title:"OpenShuttle",url:"https://example.org",image:"/img/whatsnew/open-shuttle.svg",group:"OpenShuttle"}],"2023-03-08_Animaginary":[{slug:"feature1",path:"src/_whatsnew/2023-03-08_Animaginary/feature1.md",fileName:"feature1.md",content:`Introducing Animaginary, the next generation web animation library that's taking the world by storm. 
Animaginary is a high performance library that's hand-written in optimized WebAssembly (WASM), 
making it one of the fastest and most efficient animation tools available today.

Built with performance in mind, Animaginary delivers stunning animations that are both smooth and seamless, even on lower-end devices. 
The library is designed to provide developers with a powerful toolset that makes it easy to create 
complex animations that would otherwise be time-consuming and challenging to build.`,date:"2023-03-08",tags:[],wordCount:86,lineCount:7,minutesToRead:0,title:"Animaginary",url:"/blog",image:"/img/whatsnew/animaginary.svg",group:"Animaginary"}]},components:{blog:{"vite-press-plugin":()=>Be(()=>import("./2024-03-01_vite-press-plugin-DAIRl2SQ.js"),__vite__mapDeps([24,7])),"markdown-components-in-vue":()=>Be(()=>import("./2024-02-28_markdown-components-in-vue--e-Jxir6.js"),__vite__mapDeps([25,7,4,26,27,28])),"net8-best-blazor":()=>Be(()=>import("./2023-11-22_net8-best-blazor-BQoM-3B6.js"),__vite__mapDeps([29,7,27,30])),"net8-blazor-template":()=>Be(()=>import("./2023-11-20_net8-blazor-template-ClSgFBuK.js"),__vite__mapDeps([31,7,30])),"razor-ssg-new-blog-features":()=>Be(()=>import("./2023-08-23_razor-ssg-new-blog-features-DKc5ETtz.js"),__vite__mapDeps([32,7,4,28])),"razor-ssg":()=>Be(()=>import("./2023-03-30_razor-ssg-DsA-sEft.js"),__vite__mapDeps([33,7,4])),javascript:()=>Be(()=>import("./2023-02-01_javascript-7UaN8rDJ.js"),__vite__mapDeps([34,7,26,27])),start:()=>Be(()=>import("./2023-01-21_start-BEuFJb4f.js"),__vite__mapDeps([35,7])),rider:()=>Be(()=>import("./2023-01-11_rider-OGJm7b87.js"),__vite__mapDeps([36,7])),vs:()=>Be(()=>import("./2023-01-10_vs-udgk4NKy.js"),__vite__mapDeps([37,7])),deploy:()=>Be(()=>import("./2023-01-01_deploy-HkOyxpss.js"),__vite__mapDeps([38,7])),typography:()=>Be(()=>import("./2022-12-31_typography-BHsnYxY8.js"),__vite__mapDeps([39,7])),"hetzner-cloud":()=>Be(()=>import("./2022-09-06_hetzner-cloud-DiinOsMu.js"),__vite__mapDeps([40,7,41]))},videos:{vue:{"press-vue":()=>Be(()=>import("./press-vue-DKwtDlFC.js"),__vite__mapDeps([42,7])),autoquerygrid:()=>Be(()=>import("./autoquerygrid-D8mliKBA.js"),__vite__mapDeps([43,7])),components:()=>Be(()=>import("./components-BLjsHr0E.js"),__vite__mapDeps([44,7])),admin:()=>Be(()=>import("./admin-DVwKssEo.js"),__vite__mapDeps([45,7])),modern:()=>Be(()=>import("./modern-BRTsawzF.js"),__vite__mapDeps([46,7]))}},whatsNew:{"2023-03-28_Planetaria":{feature1:()=>Be(()=>import("./feature1-B9HzpoWQ.js"),__vite__mapDeps([47,7]))},"2023-03-18_OpenShuttle":{feature1:()=>Be(()=>import("./feature1-BJN2Rxr9.js"),__vite__mapDeps([48,7]))},"2023-03-08_Animaginary":{feature1:()=>Be(()=>import("./feature1-qKGAJVyU.js"),__vite__mapDeps([49,7]))}},includes:{"component-links.md":()=>Be(()=>import("./component-links-CUHGkbkY.js"),__vite__mapDeps([50,7])),"features.md":()=>Be(()=>import("./features-C_ENahc3.js"),__vite__mapDeps([51,7]))}}},Dd=/^[a-z0-9]+(-[a-z0-9]+)*$/,Pr=(e,t,n,s="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;s=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const i=o.pop(),l=o.pop(),c={provider:o.length>0?o[0]:s,prefix:l,name:i};return t&&!qo(c)?null:c}const r=o[0],a=r.split("-");if(a.length>1){const i={provider:s,prefix:a.shift(),name:a.join("-")};return t&&!qo(i)?null:i}if(n&&s===""){const i={provider:s,prefix:"",name:r};return t&&!qo(i,n)?null:i}return null},qo=(e,t)=>e?!!((t&&e.prefix===""||e.prefix)&&e.name):!1,Bd=Object.freeze({left:0,top:0,width:16,height:16}),lr=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Er=Object.freeze({...Bd,...lr}),Ra=Object.freeze({...Er,body:"",hidden:!1});function j4(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const s=((e.rotate||0)+(t.rotate||0))%4;return s&&(n.rotate=s),n}function du(e,t){const n=j4(e,t);for(const s in Ra)s in lr?s in e&&!(s in n)&&(n[s]=lr[s]):s in t?n[s]=t[s]:s in e&&(n[s]=e[s]);return n}function V4(e,t){const n=e.icons,s=e.aliases||Object.create(null),o=Object.create(null);function r(a){if(n[a])return o[a]=[];if(!(a in o)){o[a]=null;const i=s[a]&&s[a].parent,l=i&&r(i);l&&(o[a]=[i].concat(l))}return o[a]}return Object.keys(n).concat(Object.keys(s)).forEach(r),o}function O4(e,t,n){const s=e.icons,o=e.aliases||Object.create(null);let r={};function a(i){r=du(s[i]||o[i],r)}return a(t),n.forEach(a),du(e,r)}function Fd(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),n.push(o)});const s=V4(e);for(const o in s){const r=s[o];r&&(t(o,O4(e,o,r)),n.push(o))}return n}const D4={provider:"",aliases:{},not_found:{},...Bd};function ta(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Hd(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!ta(e,D4))return null;const n=t.icons;for(const o in n){const r=n[o];if(!o||typeof r.body!="string"||!ta(r,Ra))return null}const s=t.aliases||Object.create(null);for(const o in s){const r=s[o],a=r.parent;if(!o||typeof a!="string"||!n[a]&&!s[a]||!ta(r,Ra))return null}return t}const pu=Object.create(null);function B4(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function Ts(e,t){const n=pu[e]||(pu[e]=Object.create(null));return n[t]||(n[t]=B4(e,t))}function Nd(e,t){return Hd(t)?Fd(t,(n,s)=>{s?e.icons[n]=s:e.missing.add(n)}):[]}function F4(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let co=!1;function $d(e){return typeof e=="boolean"&&(co=e),co}function H4(e){const t=typeof e=="string"?Pr(e,!0,co):e;if(t){const n=Ts(t.provider,t.prefix),s=t.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function N4(e,t){const n=Pr(e,!0,co);if(!n)return!1;const s=Ts(n.provider,n.prefix);return t?F4(s,n.name,t):(s.missing.add(n.name),!0)}function $4(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),co&&!t&&!e.prefix){let o=!1;return Hd(e)&&(e.prefix="",Fd(e,(r,a)=>{N4(r,a)&&(o=!0)})),o}const n=e.prefix;if(!qo({prefix:n,name:"a"}))return!1;const s=Ts(t,n);return!!Nd(s,e)}const Ud=Object.freeze({width:null,height:null}),Wd=Object.freeze({...Ud,...lr}),U4=/(-?[0-9.]*[0-9]+[0-9.]*)/g,W4=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function fu(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const s=e.split(U4);if(s===null||!s.length)return e;const o=[];let r=s.shift(),a=W4.test(r);for(;;){if(a){const i=parseFloat(r);isNaN(i)?o.push(r):o.push(Math.ceil(i*t*n)/n)}else o.push(r);if(r=s.shift(),r===void 0)return o.join("");a=!a}}function q4(e,t="defs"){let n="";const s=e.indexOf("<"+t);for(;s>=0;){const o=e.indexOf(">",s),r=e.indexOf("</"+t);if(o===-1||r===-1)break;const a=e.indexOf(">",r);if(a===-1)break;n+=e.slice(o+1,r).trim(),e=e.slice(0,s).trim()+e.slice(a+1)}return{defs:n,content:e}}function G4(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Q4(e,t,n){const s=q4(e);return G4(s.defs,t+s.content+n)}const J4=e=>e==="unset"||e==="undefined"||e==="none";function K4(e,t){const n={...Er,...e},s={...Wd,...t},o={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,s].forEach(m=>{const k=[],S=m.hFlip,C=m.vFlip;let A=m.rotate;S?C?A+=2:(k.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),k.push("scale(-1 1)"),o.top=o.left=0):C&&(k.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),k.push("scale(1 -1)"),o.top=o.left=0);let E;switch(A<0&&(A-=Math.floor(A/4)*4),A=A%4,A){case 1:E=o.height/2+o.top,k.unshift("rotate(90 "+E.toString()+" "+E.toString()+")");break;case 2:k.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:E=o.width/2+o.left,k.unshift("rotate(-90 "+E.toString()+" "+E.toString()+")");break}A%2===1&&(o.left!==o.top&&(E=o.left,o.left=o.top,o.top=E),o.width!==o.height&&(E=o.width,o.width=o.height,o.height=E)),k.length&&(r=Q4(r,'<g transform="'+k.join(" ")+'">',"</g>"))});const a=s.width,i=s.height,l=o.width,c=o.height;let u,p;a===null?(p=i===null?"1em":i==="auto"?c:i,u=fu(p,l/c)):(u=a==="auto"?l:a,p=i===null?fu(u,c/l):i==="auto"?c:i);const g={},f=(m,k)=>{J4(k)||(g[m]=k.toString())};f("width",u),f("height",p);const v=[o.left,o.top,l,c];return g.viewBox=v.join(" "),{attributes:g,viewBox:v,body:r}}const Z4=/\sid="(\S+)"/g,Y4="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let X4=0;function eS(e,t=Y4){const n=[];let s;for(;s=Z4.exec(e);)n.push(s[1]);if(!n.length)return e;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(r=>{const a=typeof t=="function"?t(r):t+(X4++).toString(),i=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+i+')([")]|\\.[a-z])',"g"),"$1"+a+o+"$3")}),e=e.replace(new RegExp(o,"g"),""),e}const za=Object.create(null);function tS(e,t){za[e]=t}function ja(e){return za[e]||za[""]}function zi(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const ji=Object.create(null),Vs=["https://api.simplesvg.com","https://api.unisvg.com"],Go=[];for(;Vs.length>0;)Vs.length===1||Math.random()>.5?Go.push(Vs.shift()):Go.push(Vs.pop());ji[""]=zi({resources:["https://api.iconify.design"].concat(Go)});function nS(e,t){const n=zi(t);return n===null?!1:(ji[e]=n,!0)}function Vi(e){return ji[e]}const sS=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let hu=sS();function oS(e,t){const n=Vi(e);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let o=0;n.resources.forEach(a=>{o=Math.max(o,a.length)});const r=t+".json?icons=";s=n.maxURL-o-n.path.length-r.length}return s}function rS(e){return e===404}const aS=(e,t,n)=>{const s=[],o=oS(e,t),r="icons";let a={type:r,provider:e,prefix:t,icons:[]},i=0;return n.forEach((l,c)=>{i+=l.length+1,i>=o&&c>0&&(s.push(a),a={type:r,provider:e,prefix:t,icons:[]},i=l.length),a.icons.push(l)}),s.push(a),s};function iS(e){if(typeof e=="string"){const t=Vi(e);if(t)return t.path}return"/"}const lS=(e,t,n)=>{if(!hu){n("abort",424);return}let s=iS(t.provider);switch(t.type){case"icons":{const r=t.prefix,i=t.icons.join(","),l=new URLSearchParams({icons:i});s+=r+".json?"+l.toString();break}case"custom":{const r=t.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let o=503;hu(e+s).then(r=>{const a=r.status;if(a!==200){setTimeout(()=>{n(rS(a)?"abort":"next",a)});return}return o=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",o)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",o)})},uS={prepare:aS,send:lS};function cS(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((o,r)=>o.provider!==r.provider?o.provider.localeCompare(r.provider):o.prefix!==r.prefix?o.prefix.localeCompare(r.prefix):o.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return e.forEach(o=>{if(s.name===o.name&&s.prefix===o.prefix&&s.provider===o.provider)return;s=o;const r=o.provider,a=o.prefix,i=o.name,l=n[r]||(n[r]=Object.create(null)),c=l[a]||(l[a]=Ts(r,a));let u;i in c.icons?u=t.loaded:a===""||c.missing.has(i)?u=t.missing:u=t.pending;const p={provider:r,prefix:a,name:i};u.push(p)}),t}function qd(e,t){e.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(o=>o.id!==t))})}function dS(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const s=e.provider,o=e.prefix;t.forEach(r=>{const a=r.icons,i=a.pending.length;a.pending=a.pending.filter(l=>{if(l.prefix!==o)return!0;const c=l.name;if(e.icons[c])a.loaded.push({provider:s,prefix:o,name:c});else if(e.missing.has(c))a.missing.push({provider:s,prefix:o,name:c});else return n=!0,!0;return!1}),a.pending.length!==i&&(n||qd([e],r.id),r.callback(a.loaded.slice(0),a.missing.slice(0),a.pending.slice(0),r.abort))})}))}let pS=0;function fS(e,t,n){const s=pS++,o=qd.bind(null,n,s);if(!t.pending.length)return o;const r={id:s,icons:t,callback:e,abort:o};return n.forEach(a=>{(a.loaderCallbacks||(a.loaderCallbacks=[])).push(r)}),o}function hS(e,t=!0,n=!1){const s=[];return e.forEach(o=>{const r=typeof o=="string"?Pr(o,t,n):o;r&&s.push(r)}),s}var mS={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function gS(e,t,n,s){const o=e.resources.length,r=e.random?Math.floor(Math.random()*o):e.index;let a;if(e.random){let q=e.resources.slice(0);for(a=[];q.length>1;){const I=Math.floor(Math.random()*q.length);a.push(q[I]),q=q.slice(0,I).concat(q.slice(I+1))}a=a.concat(q)}else a=e.resources.slice(r).concat(e.resources.slice(0,r));const i=Date.now();let l="pending",c=0,u,p=null,g=[],f=[];typeof s=="function"&&f.push(s);function v(){p&&(clearTimeout(p),p=null)}function m(){l==="pending"&&(l="aborted"),v(),g.forEach(q=>{q.status==="pending"&&(q.status="aborted")}),g=[]}function k(q,I){I&&(f=[]),typeof q=="function"&&f.push(q)}function S(){return{startTime:i,payload:t,status:l,queriesSent:c,queriesPending:g.length,subscribe:k,abort:m}}function C(){l="failed",f.forEach(q=>{q(void 0,u)})}function A(){g.forEach(q=>{q.status==="pending"&&(q.status="aborted")}),g=[]}function E(q,I,U){const G=I!=="success";switch(g=g.filter(re=>re!==q),l){case"pending":break;case"failed":if(G||!e.dataAfterTimeout)return;break;default:return}if(I==="abort"){u=U,C();return}if(G){u=U,g.length||(a.length?M():C());return}if(v(),A(),!e.random){const re=e.resources.indexOf(q.resource);re!==-1&&re!==e.index&&(e.index=re)}l="completed",f.forEach(re=>{re(U)})}function M(){if(l!=="pending")return;v();const q=a.shift();if(q===void 0){if(g.length){p=setTimeout(()=>{v(),l==="pending"&&(A(),C())},e.timeout);return}C();return}const I={status:"pending",resource:q,callback:(U,G)=>{E(I,U,G)}};g.push(I),c++,p=setTimeout(M,e.rotate),n(q,t,I.callback)}return setTimeout(M),S}function Gd(e){const t={...mS,...e};let n=[];function s(){n=n.filter(i=>i().status==="pending")}function o(i,l,c){const u=gS(t,i,l,(p,g)=>{s(),c&&c(p,g)});return n.push(u),u}function r(i){return n.find(l=>i(l))||null}return{query:o,find:r,setIndex:i=>{t.index=i},getIndex:()=>t.index,cleanup:s}}function mu(){}const na=Object.create(null);function vS(e){if(!na[e]){const t=Vi(e);if(!t)return;const n=Gd(t),s={config:t,redundancy:n};na[e]=s}return na[e]}function yS(e,t,n){let s,o;if(typeof e=="string"){const r=ja(e);if(!r)return n(void 0,424),mu;o=r.send;const a=vS(e);a&&(s=a.redundancy)}else{const r=zi(e);if(r){s=Gd(r);const a=e.resources?e.resources[0]:"",i=ja(a);i&&(o=i.send)}}return!s||!o?(n(void 0,424),mu):s.query(t,o,n)().abort}function gu(){}function bS(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,dS(e)}))}function wS(e){const t=[],n=[];return e.forEach(s=>{(s.match(Dd)?t:n).push(s)}),{valid:t,invalid:n}}function Os(e,t,n){function s(){const o=e.pendingIcons;t.forEach(r=>{o&&o.delete(r),e.icons[r]||e.missing.add(r)})}if(n&&typeof n=="object")try{if(!Nd(e,n).length){s();return}}catch(o){console.error(o)}s(),bS(e)}function vu(e,t){e instanceof Promise?e.then(n=>{t(n)}).catch(()=>{t(null)}):t(e)}function kS(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:s}=e,o=e.iconsToLoad;if(delete e.iconsToLoad,!o||!o.length)return;const r=e.loadIcon;if(e.loadIcons&&(o.length>1||!r)){vu(e.loadIcons(o,s,n),u=>{Os(e,o,u)});return}if(r){o.forEach(u=>{const p=r(u,s,n);vu(p,g=>{const f=g?{prefix:s,icons:{[u]:g}}:null;Os(e,[u],f)})});return}const{valid:a,invalid:i}=wS(o);if(i.length&&Os(e,i,null),!a.length)return;const l=s.match(Dd)?ja(n):null;if(!l){Os(e,a,null);return}l.prepare(n,s,a).forEach(u=>{yS(n,u,p=>{Os(e,u.icons,p)})})}))}const xS=(e,t)=>{const n=hS(e,!0,$d()),s=cS(n);if(!s.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(s.loaded,s.missing,s.pending,gu)}),()=>{l=!1}}const o=Object.create(null),r=[];let a,i;return s.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===i&&c===a)return;a=c,i=u,r.push(Ts(c,u));const p=o[c]||(o[c]=Object.create(null));p[u]||(p[u]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:u,name:p}=l,g=Ts(c,u),f=g.pendingIcons||(g.pendingIcons=new Set);f.has(p)||(f.add(p),o[c][u].push(p))}),r.forEach(l=>{const c=o[l.provider][l.prefix];c.length&&kS(l,c)}),t?fS(t,s,r):gu};function CS(e,t){const n={...e};for(const s in t){const o=t[s],r=typeof o;s in Ud?(o===null||o&&(r==="string"||r==="number"))&&(n[s]=o):r===typeof n[s]&&(n[s]=s==="rotate"?o%4:o)}return n}const SS=/[\s,]+/;function TS(e,t){t.split(SS).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function AS(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function s(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(e);return isNaN(o)?0:s(o)}else if(n!==e){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r=r/o,r%1===0?s(r):0)}}return t}function MS(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)n+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function _S(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function PS(e){return"data:image/svg+xml,"+_S(e)}function ES(e){return'url("'+PS(e)+'")'}const yu={...Wd,inline:!1},IS={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},LS={display:"inline-block"},Va={backgroundColor:"currentColor"},Qd={backgroundColor:"transparent"},bu={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},wu={webkitMask:Va,mask:Va,background:Qd};for(const e in wu){const t=wu[e];for(const n in bu)t[e+n]=bu[n]}const Qo={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";Qo[e+"-flip"]=t,Qo[e.slice(0,1)+"-flip"]=t,Qo[e+"Flip"]=t});function ku(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const xu=(e,t)=>{const n=CS(yu,t),s={...IS},o=t.mode||"svg",r={},a=t.style,i=typeof a=="object"&&!(a instanceof Array)?a:{};for(let m in t){const k=t[m];if(k!==void 0)switch(m){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[m]=k===!0||k==="true"||k===1;break;case"flip":typeof k=="string"&&TS(n,k);break;case"color":r.color=k;break;case"rotate":typeof k=="string"?n[m]=AS(k):typeof k=="number"&&(n[m]=k);break;case"ariaHidden":case"aria-hidden":k!==!0&&k!=="true"&&delete s["aria-hidden"];break;default:{const S=Qo[m];S?(k===!0||k==="true"||k===1)&&(n[S]=!0):yu[m]===void 0&&(s[m]=k)}}}const l=K4(e,n),c=l.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),o==="svg"){s.style={...r,...i},Object.assign(s,c);let m=0,k=t.id;return typeof k=="string"&&(k=k.replace(/-/g,"_")),s.innerHTML=eS(l.body,k?()=>k+"ID"+m++:"iconifyVue"),Vt("svg",s)}const{body:u,width:p,height:g}=e,f=o==="mask"||(o==="bg"?!1:u.indexOf("currentColor")!==-1),v=MS(u,{...c,width:p+"",height:g+""});return s.style={...r,"--svg":ES(v),width:ku(c.width),height:ku(c.height),...LS,...f?Va:Qd,...i},Vt("span",s)};$d(!0);tS("",uS);if(typeof document<"u"&&typeof window<"u"){const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!$4(s))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const s="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;nS(n,o)||console.error(s)}catch{console.error(s)}}}}const RS={...Er,body:""},zS=Te((e,{emit:t})=>{const n=K(null);function s(){var c,u;n.value&&((u=(c=n.value).abort)==null||u.call(c),n.value=null)}const o=K(!!e.ssr),r=K(""),a=qu(null);function i(){const c=e.icon;if(typeof c=="object"&&c!==null&&typeof c.body=="string")return r.value="",{data:c};let u;if(typeof c!="string"||(u=Pr(c,!1,!0))===null)return null;let p=H4(u);if(!p){const v=n.value;return(!v||v.name!==c)&&(p===null?n.value={name:c}:n.value={name:c,abort:xS([u],l)}),null}s(),r.value!==c&&(r.value=c,Ut(()=>{t("load",c)}));const g=e.customise;if(g){p=Object.assign({},p);const v=g(p.body,u.name,u.prefix,u.provider);typeof v=="string"&&(p.body=v)}const f=["iconify"];return u.prefix!==""&&f.push("iconify--"+u.prefix),u.provider!==""&&f.push("iconify--"+u.provider),{data:p,classes:f}}function l(){var u;const c=i();c?c.data!==((u=a.value)==null?void 0:u.data)&&(a.value=c):a.value=null}return o.value?l():Mt(()=>{o.value=!0,l()}),Rt(()=>e.icon,l),sn(s),()=>{const c=a.value;if(!c)return xu(RS,e);let u=e;return c.classes&&(u={...e,class:c.classes.join(" ")}),xu({...Er,...c.data},u)}},{props:["icon","mode","ssr","width","height","style","color","inline","rotate","hFlip","horizontalFlip","vFlip","verticalFlip","flip","id","ariaHidden","customise","title"],emits:["load"]});/*!
 * Original code by Ibrahim Cesar
 * MIT Licensed, Copyright 2022 Ibrahim Cesar, see https://github.com/ibrahimcesar/react-lite-youtube-embed/blob/main/LICENSE for details
 *
 * Credits to the team:
 * https://github.com/ibrahimcesar/react-lite-youtube-embed/blob/main/src/lib/index.tsx
 */function sa(e,t){var n;if(e===null)throw new Error("iframe element not instantiated.");(n=e.contentWindow)==null||n.postMessage(`{"event":"command","func":"${t}","args":""}`,"*")}function Do(e){return Fs("link",{attrs:{rel:"preconnect",href:e}})}const jS=e=>e?Object.entries(e).reduce((t,[n,s])=>(n=n.charAt(0).toUpperCase()+n.slice(1),n=`on${n}`,{...t,[n]:s}),{}):null,Fs=(e,t={},n)=>{const{props:s,domProps:o,on:r,attrs:a,...i}=t,l=jS(r),c={...i,...s,...o,...l,...a};return Vt(e,c,n)},VS=Te({props:{announce:{type:String,required:!1,default:"Watch"},id:{type:String,required:!0},title:{type:String,required:!1},activatedClass:{type:String,required:!1,default:"lyt-activated"},adNetwork:{type:Boolean,required:!1,default:!0},iframeClass:{type:String,required:!1,default:""},cookie:{type:Boolean,required:!1,default:!1},params:{type:String,required:!1,default:""},playerClass:{type:String,required:!1,default:"lty-playbtn"},playlist:{type:Boolean,required:!1,default:!1},playlistCoverId:{type:String,required:!1,default:""},poster:{type:String,required:!1,default:"maxresdefault"},wrapperClass:{type:String,required:!1,default:"yt-lite"},muted:{type:Boolean,required:!1,default:!1},thumbnail:{type:String,required:!1},webp:{type:Boolean,required:!1,default:!1},rel:{type:String,required:!1,default:"preload"},aspectHeight:{type:Number,required:!1,default:9},aspectWidth:{type:Number,required:!1,default:16}},emits:["iframeAdded"],setup(e,{emit:t,expose:n}){const s=K(!1),o=K(!1),r=K(null),a=x(()=>encodeURIComponent(e.id)),i=x(()=>`&${e.params}`||""),l=x(()=>e.muted?"&mute=1":""),c=x(()=>e.webp?"webp":"jpg"),u=x(()=>e.webp?"vi_webp":"vi"),p=x(()=>typeof e.playlistCoverId=="string"?encodeURIComponent(e.playlistCoverId):null),g=x(()=>e.thumbnail||(e.playlist?`https://i.ytimg.com/${u.value}/${p.value}/${e.poster}.${c.value}`:`https://i.ytimg.com/${u.value}/${a.value}/${e.poster}.${c.value}`)),f=x(()=>e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com"),v=x(()=>e.playlist?`${f.value}/embed/videoseries?autoplay=1&enablejsapi=1&list=${a.value}${l.value}${i.value}`:`${f.value}/embed/${a.value}?autoplay=1&enablejsapi=1&state=1${l.value}${i.value}`);function m(){o.value||(o.value=!0,t("iframeAdded"))}function k(){s.value||(s.value=!0)}n({getPlayerInstance(){return r.value},stopVideo(){sa(r.value,"stopVideo")},pauseVideo(){sa(r.value,"pauseVideo")},playVideo(){sa(r.value,"playVideo")},warmConnections:k,addIframe:m});const S=()=>[Fs("link",{attrs:{rel:e.rel,href:g.value,as:"image"}}),s.value?Do(f.value):null,s.value?Do("https://www.google.com"):null,e.adNetwork?Do("https://static.doubleclick.net"):null,e.adNetwork?Do("https://googleads.g.doubleclick.net"):null,Fs("article",{on:{pointerover:k,click:m},class:`${e.wrapperClass} ${o.value?e.activatedClass:""}`,attrs:{"data-title":e.title},style:{backgroundImage:`url(${g.value})`,"--aspect-ratio":`${e.aspectHeight/e.aspectWidth*100}%`}},[Fs("button",{class:e.playerClass,attrs:{type:"button","aria-label":`${e.announce} ${e.title}`}}),o.value?Fs("iframe",{ref:r,class:e.iframeClass,attrs:{title:e.title,width:560,height:315,frameborder:0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,src:v.value}}):null])];return()=>S()}}),OS={key:1},DS=Te({__name:"Include",props:{src:{}},setup(e){const t=e,o=(Je("press").components.includes||{})[t.src],r=o?Yp(o):null;return(a,i)=>ge(r)?(h(),ke(ei(ge(r)),{key:0,name:a.src,frontmatter:{nowrap:!0}},null,8,["name"])):(h(),y("div",OS,"Include not found: "+X(a.src),1))}}),BS=Th(sm),FS=nm();Od.forEach(e=>{e.path.startsWith("/admin")&&(e.children??[]).forEach(t=>{t.meta??(t.meta={}),t.meta.layout="admin"})});const Jd=E4({history:s4(),scrollBehavior(e,t,n){if(n)return n;if(e.hash)return{el:e.hash,behavior:"smooth"};setTimeout(()=>{window.scrollTo(0,0)},1)},routes:R4(Od)});Jd.beforeEach((e,t,n)=>{e.path.startsWith("/http")?location.href=e.path.substring(1):n()});BS.use(FS).use(Jd).use(A3).provide("press",z4).component("LiteYouTube",VS).component("Iconify",zS).component("Include",DS).mount("#app");export{qs as A,ei as B,Yp as C,Wn as D,ma as E,ze as F,NS as G,Vt as H,ba as J,DS as _,br as a,d as b,y as c,Te as d,Ae as e,N as f,ke as g,Fe as h,Je as i,$S as j,em as k,Xe as l,K as m,x as n,h as o,Mt as p,US as q,ye as r,_ as s,X as t,ge as u,Gn as v,$e as w,Ht as x,he as y,go as z};
