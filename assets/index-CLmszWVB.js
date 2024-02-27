var Zd=Object.defineProperty;var Xd=(e,t,n)=>t in e?Zd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _e=(e,t,n)=>(Xd(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function La(e,t){const n=new Set(e.split(","));return t?o=>n.has(o.toLowerCase()):o=>n.has(o)}const Ze={},to=[],At=()=>{},ep=()=>!1,nr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),za=e=>e.startsWith("onUpdate:"),pt=Object.assign,Ra=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},tp=Object.prototype.hasOwnProperty,$e=(e,t)=>tp.call(e,t),Me=Array.isArray,no=e=>Yo(e)==="[object Map]",go=e=>Yo(e)==="[object Set]",$i=e=>Yo(e)==="[object Date]",Ie=e=>typeof e=="function",ot=e=>typeof e=="string",vn=e=>typeof e=="symbol",Ke=e=>e!==null&&typeof e=="object",Su=e=>(Ke(e)||Ie(e))&&Ie(e.then)&&Ie(e.catch),Tu=Object.prototype.toString,Yo=e=>Tu.call(e),np=e=>Yo(e).slice(8,-1),Au=e=>Yo(e)==="[object Object]",ja=e=>ot(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Po=La(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),or=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},op=/-(\w)/g,Wt=or(e=>e.replace(op,(t,n)=>n?n.toUpperCase():"")),sp=/\B([A-Z])/g,$n=or(e=>e.replace(sp,"-$1").toLowerCase()),sr=or(e=>e.charAt(0).toUpperCase()+e.slice(1)),Lr=or(e=>e?`on${sr(e)}`:""),yn=(e,t)=>!Object.is(e,t),As=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$s=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Bo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ni;const _u=()=>Ni||(Ni=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Nn(e){if(Me(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=ot(o)?lp(o):Nn(o);if(s)for(const r in s)t[r]=s[r]}return t}else if(ot(e)||Ke(e))return e}const rp=/;(?![^(]*\))/g,ap=/:([^]+)/,ip=/\/\*[^]*?\*\//g;function lp(e){const t={};return e.replace(ip,"").split(rp).forEach(n=>{if(n){const o=n.split(ap);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function L(e){let t="";if(ot(e))t=e;else if(Me(e))for(let n=0;n<e.length;n++){const o=L(e[n]);o&&(t+=o+" ")}else if(Ke(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function io(e){if(!e)return null;let{class:t,style:n}=e;return t&&!ot(t)&&(e.class=L(t)),n&&(e.style=Nn(n)),e}const up="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cp=La(up);function Mu(e){return!!e||e===""}function dp(e,t){if(e.length!==t.length)return!1;let n=!0;for(let o=0;n&&o<e.length;o++)n=Rn(e[o],t[o]);return n}function Rn(e,t){if(e===t)return!0;let n=$i(e),o=$i(t);if(n||o)return n&&o?e.getTime()===t.getTime():!1;if(n=vn(e),o=vn(t),n||o)return e===t;if(n=Me(e),o=Me(t),n||o)return n&&o?dp(e,t):!1;if(n=Ke(e),o=Ke(t),n||o){if(!n||!o)return!1;const s=Object.keys(e).length,r=Object.keys(t).length;if(s!==r)return!1;for(const a in e){const l=e.hasOwnProperty(a),i=t.hasOwnProperty(a);if(l&&!i||!l&&i||!Rn(e[a],t[a]))return!1}}return String(e)===String(t)}function Va(e,t){return e.findIndex(n=>Rn(n,t))}const te=e=>ot(e)?e:e==null?"":Me(e)||Ke(e)&&(e.toString===Tu||!Ie(e.toString))?JSON.stringify(e,Pu,2):String(e),Pu=(e,t)=>t&&t.__v_isRef?Pu(e,t.value):no(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,s],r)=>(n[zr(o,r)+" =>"]=s,n),{})}:go(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>zr(n))}:vn(t)?zr(t):Ke(t)&&!Me(t)&&!Au(t)?String(t):t,zr=(e,t="")=>{var n;return vn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lt;class pp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Lt,!t&&Lt&&(this.index=(Lt.scopes||(Lt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Lt;try{return Lt=this,t()}finally{Lt=n}}}on(){Lt=this}off(){Lt=this.parent}stop(t){if(this._active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function fp(e,t=Lt){t&&t.active&&t.effects.push(e)}function hp(){return Lt}let Ln;class Oa{constructor(t,n,o,s){this.fn=t,this.trigger=n,this.scheduler=o,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,fp(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Fn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(mp(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Un()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=hn,n=Ln;try{return hn=!0,Ln=this,this._runnings++,Fi(this),this.fn()}finally{Ui(this),this._runnings--,Ln=n,hn=t}}stop(){var t;this.active&&(Fi(this),Ui(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function mp(e){return e.value}function Fi(e){e._trackId++,e._depsLength=0}function Ui(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Eu(e.deps[t],e);e.deps.length=e._depsLength}}function Eu(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let hn=!0,Yr=0;const Iu=[];function Fn(){Iu.push(hn),hn=!1}function Un(){const e=Iu.pop();hn=e===void 0?!0:e}function Ba(){Yr++}function Da(){for(Yr--;!Yr&&Zr.length;)Zr.shift()()}function Lu(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const o=e.deps[e._depsLength];o!==t?(o&&Eu(o,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Zr=[];function zu(e,t,n){Ba();for(const o of e.keys()){let s;o._dirtyLevel<t&&(s??(s=e.get(o)===o._trackId))&&(o._shouldSchedule||(o._shouldSchedule=o._dirtyLevel===0),o._dirtyLevel=t),o._shouldSchedule&&(s??(s=e.get(o)===o._trackId))&&(o.trigger(),(!o._runnings||o.allowRecurse)&&o._dirtyLevel!==2&&(o._shouldSchedule=!1,o.scheduler&&Zr.push(o.scheduler)))}Da()}const Ru=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Xr=new WeakMap,zn=Symbol(""),ea=Symbol("");function wt(e,t,n){if(hn&&Ln){let o=Xr.get(e);o||Xr.set(e,o=new Map);let s=o.get(n);s||o.set(n,s=Ru(()=>o.delete(n))),Lu(Ln,s)}}function Xt(e,t,n,o,s,r){const a=Xr.get(e);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(n==="length"&&Me(e)){const i=Number(o);a.forEach((u,c)=>{(c==="length"||!vn(c)&&c>=i)&&l.push(u)})}else switch(n!==void 0&&l.push(a.get(n)),t){case"add":Me(e)?ja(n)&&l.push(a.get("length")):(l.push(a.get(zn)),no(e)&&l.push(a.get(ea)));break;case"delete":Me(e)||(l.push(a.get(zn)),no(e)&&l.push(a.get(ea)));break;case"set":no(e)&&l.push(a.get(zn));break}Ba();for(const i of l)i&&zu(i,4);Da()}const gp=La("__proto__,__v_isRef,__isVue"),ju=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(vn)),Wi=vp();function vp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=We(this);for(let r=0,a=this.length;r<a;r++)wt(o,"get",r+"");const s=o[t](...n);return s===-1||s===!1?o[t](...n.map(We)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Fn(),Ba();const o=We(this)[t].apply(this,n);return Da(),Un(),o}}),e}function yp(e){const t=We(this);return wt(t,"has",e),t.hasOwnProperty(e)}class Vu{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,o){const s=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return o===(s?r?Ip:Hu:r?Du:Bu).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(o)?t:void 0;const a=Me(t);if(!s){if(a&&$e(Wi,n))return Reflect.get(Wi,n,o);if(n==="hasOwnProperty")return yp}const l=Reflect.get(t,n,o);return(vn(n)?ju.has(n):gp(n))||(s||wt(t,"get",n),r)?l:ht(l)?a&&ja(n)?l:l.value:Ke(l)?s?Nu(l):ar(l):l}}class Ou extends Vu{constructor(t=!1){super(!1,t)}set(t,n,o,s){let r=t[n];if(!this._shallow){const i=lo(r);if(!Ns(o)&&!lo(o)&&(r=We(r),o=We(o)),!Me(t)&&ht(r)&&!ht(o))return i?!1:(r.value=o,!0)}const a=Me(t)&&ja(n)?Number(n)<t.length:$e(t,n),l=Reflect.set(t,n,o,s);return t===We(s)&&(a?yn(o,r)&&Xt(t,"set",n,o):Xt(t,"add",n,o)),l}deleteProperty(t,n){const o=$e(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&o&&Xt(t,"delete",n,void 0),s}has(t,n){const o=Reflect.has(t,n);return(!vn(n)||!ju.has(n))&&wt(t,"has",n),o}ownKeys(t){return wt(t,"iterate",Me(t)?"length":zn),Reflect.ownKeys(t)}}class bp extends Vu{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const wp=new Ou,kp=new bp,xp=new Ou(!0),Ha=e=>e,rr=e=>Reflect.getPrototypeOf(e);function cs(e,t,n=!1,o=!1){e=e.__v_raw;const s=We(e),r=We(t);n||(yn(t,r)&&wt(s,"get",t),wt(s,"get",r));const{has:a}=rr(s),l=o?Ha:n?Fa:Do;if(a.call(s,t))return l(e.get(t));if(a.call(s,r))return l(e.get(r));e!==s&&e.get(t)}function ds(e,t=!1){const n=this.__v_raw,o=We(n),s=We(e);return t||(yn(e,s)&&wt(o,"has",e),wt(o,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function ps(e,t=!1){return e=e.__v_raw,!t&&wt(We(e),"iterate",zn),Reflect.get(e,"size",e)}function qi(e){e=We(e);const t=We(this);return rr(t).has.call(t,e)||(t.add(e),Xt(t,"add",e,e)),this}function Gi(e,t){t=We(t);const n=We(this),{has:o,get:s}=rr(n);let r=o.call(n,e);r||(e=We(e),r=o.call(n,e));const a=s.call(n,e);return n.set(e,t),r?yn(t,a)&&Xt(n,"set",e,t):Xt(n,"add",e,t),this}function Ji(e){const t=We(this),{has:n,get:o}=rr(t);let s=n.call(t,e);s||(e=We(e),s=n.call(t,e)),o&&o.call(t,e);const r=t.delete(e);return s&&Xt(t,"delete",e,void 0),r}function Qi(){const e=We(this),t=e.size!==0,n=e.clear();return t&&Xt(e,"clear",void 0,void 0),n}function fs(e,t){return function(o,s){const r=this,a=r.__v_raw,l=We(a),i=t?Ha:e?Fa:Do;return!e&&wt(l,"iterate",zn),a.forEach((u,c)=>o.call(s,i(u),i(c),r))}}function hs(e,t,n){return function(...o){const s=this.__v_raw,r=We(s),a=no(r),l=e==="entries"||e===Symbol.iterator&&a,i=e==="keys"&&a,u=s[e](...o),c=n?Ha:t?Fa:Do;return!t&&wt(r,"iterate",i?ea:zn),{next(){const{value:p,done:f}=u.next();return f?{value:p,done:f}:{value:l?[c(p[0]),c(p[1])]:c(p),done:f}},[Symbol.iterator](){return this}}}}function rn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Cp(){const e={get(r){return cs(this,r)},get size(){return ps(this)},has:ds,add:qi,set:Gi,delete:Ji,clear:Qi,forEach:fs(!1,!1)},t={get(r){return cs(this,r,!1,!0)},get size(){return ps(this)},has:ds,add:qi,set:Gi,delete:Ji,clear:Qi,forEach:fs(!1,!0)},n={get(r){return cs(this,r,!0)},get size(){return ps(this,!0)},has(r){return ds.call(this,r,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:fs(!0,!1)},o={get(r){return cs(this,r,!0,!0)},get size(){return ps(this,!0)},has(r){return ds.call(this,r,!0)},add:rn("add"),set:rn("set"),delete:rn("delete"),clear:rn("clear"),forEach:fs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=hs(r,!1,!1),n[r]=hs(r,!0,!1),t[r]=hs(r,!1,!0),o[r]=hs(r,!0,!0)}),[e,n,t,o]}const[Sp,Tp,Ap,_p]=Cp();function $a(e,t){const n=t?e?_p:Ap:e?Tp:Sp;return(o,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?o:Reflect.get($e(n,s)&&s in o?n:o,s,r)}const Mp={get:$a(!1,!1)},Pp={get:$a(!1,!0)},Ep={get:$a(!0,!1)},Bu=new WeakMap,Du=new WeakMap,Hu=new WeakMap,Ip=new WeakMap;function Lp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zp(e){return e.__v_skip||!Object.isExtensible(e)?0:Lp(np(e))}function ar(e){return lo(e)?e:Na(e,!1,wp,Mp,Bu)}function $u(e){return Na(e,!1,xp,Pp,Du)}function Nu(e){return Na(e,!0,kp,Ep,Hu)}function Na(e,t,n,o,s){if(!Ke(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=s.get(e);if(r)return r;const a=zp(e);if(a===0)return e;const l=new Proxy(e,a===2?o:n);return s.set(e,l),l}function oo(e){return lo(e)?oo(e.__v_raw):!!(e&&e.__v_isReactive)}function lo(e){return!!(e&&e.__v_isReadonly)}function Ns(e){return!!(e&&e.__v_isShallow)}function Fu(e){return oo(e)||lo(e)}function We(e){const t=e&&e.__v_raw;return t?We(t):e}function Uu(e){return Object.isExtensible(e)&&$s(e,"__v_skip",!0),e}const Do=e=>Ke(e)?ar(e):e,Fa=e=>Ke(e)?Nu(e):e;class Wu{constructor(t,n,o,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Oa(()=>t(this._value),()=>_s(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=o}get value(){const t=We(this);return(!t._cacheable||t.effect.dirty)&&yn(t._value,t._value=t.effect.run())&&_s(t,4),qu(t),t.effect._dirtyLevel>=2&&_s(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Rp(e,t,n=!1){let o,s;const r=Ie(e);return r?(o=e,s=At):(o=e.get,s=e.set),new Wu(o,s,r||!s,n)}function qu(e){var t;hn&&Ln&&(e=We(e),Lu(Ln,(t=e.dep)!=null?t:e.dep=Ru(()=>e.dep=void 0,e instanceof Wu?e:void 0)))}function _s(e,t=4,n){e=We(e);const o=e.dep;o&&zu(o,t)}function ht(e){return!!(e&&e.__v_isRef===!0)}function Y(e){return Gu(e,!1)}function jp(e){return Gu(e,!0)}function Gu(e,t){return ht(e)?e:new Vp(e,t)}class Vp{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:We(t),this._value=n?t:Do(t)}get value(){return qu(this),this._value}set value(t){const n=this.__v_isShallow||Ns(t)||lo(t);t=n?t:We(t),yn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Do(t),_s(this,4))}}function me(e){return ht(e)?e.value:e}const Op={get:(e,t,n)=>me(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const s=e[t];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(e,t,n,o)}};function Ju(e){return oo(e)?e:new Proxy(e,Op)}/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mn(e,t,n,o){try{return o?e(...o):e()}catch(s){Zo(s,t,n)}}function Rt(e,t,n,o){if(Ie(e)){const r=mn(e,t,n,o);return r&&Su(r)&&r.catch(a=>{Zo(a,t,n)}),r}const s=[];for(let r=0;r<e.length;r++)s.push(Rt(e[r],t,n,o));return s}function Zo(e,t,n,o=!0){const s=t?t.vnode:null;if(t){let r=t.parent;const a=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,a,l)===!1)return}r=r.parent}const i=t.appContext.config.errorHandler;if(i){mn(i,null,10,[e,a,l]);return}}Bp(e,n,s,o)}function Bp(e,t,n,o=!0){console.error(e)}let Ho=!1,ta=!1;const ft=[];let Ft=0;const so=[];let cn=null,Mn=0;const Qu=Promise.resolve();let Ua=null;function jt(e){const t=Ua||Qu;return e?t.then(this?e.bind(this):e):t}function Dp(e){let t=Ft+1,n=ft.length;for(;t<n;){const o=t+n>>>1,s=ft[o],r=$o(s);r<e||r===e&&s.pre?t=o+1:n=o}return t}function ir(e){(!ft.length||!ft.includes(e,Ho&&e.allowRecurse?Ft+1:Ft))&&(e.id==null?ft.push(e):ft.splice(Dp(e.id),0,e),Ku())}function Ku(){!Ho&&!ta&&(ta=!0,Ua=Qu.then(Zu))}function Hp(e){const t=ft.indexOf(e);t>Ft&&ft.splice(t,1)}function $p(e){Me(e)?so.push(...e):(!cn||!cn.includes(e,e.allowRecurse?Mn+1:Mn))&&so.push(e),Ku()}function Ki(e,t,n=Ho?Ft+1:0){for(;n<ft.length;n++){const o=ft[n];if(o&&o.pre){if(e&&o.id!==e.uid)continue;ft.splice(n,1),n--,o()}}}function Yu(e){if(so.length){const t=[...new Set(so)].sort((n,o)=>$o(n)-$o(o));if(so.length=0,cn){cn.push(...t);return}for(cn=t,Mn=0;Mn<cn.length;Mn++)cn[Mn]();cn=null,Mn=0}}const $o=e=>e.id==null?1/0:e.id,Np=(e,t)=>{const n=$o(e)-$o(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Zu(e){ta=!1,Ho=!0,ft.sort(Np);try{for(Ft=0;Ft<ft.length;Ft++){const t=ft[Ft];t&&t.active!==!1&&mn(t,null,14)}}finally{Ft=0,ft.length=0,Yu(),Ho=!1,Ua=null,(ft.length||so.length)&&Zu()}}function Fp(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Ze;let s=n;const r=t.startsWith("update:"),a=r&&t.slice(7);if(a&&a in o){const c=`${a==="modelValue"?"model":a}Modifiers`,{number:p,trim:f}=o[c]||Ze;f&&(s=n.map(m=>ot(m)?m.trim():m)),p&&(s=n.map(Bo))}let l,i=o[l=Lr(t)]||o[l=Lr(Wt(t))];!i&&r&&(i=o[l=Lr($n(t))]),i&&Rt(i,e,6,s);const u=o[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Rt(u,e,6,s)}}function Xu(e,t,n=!1){const o=t.emitsCache,s=o.get(e);if(s!==void 0)return s;const r=e.emits;let a={},l=!1;if(!Ie(e)){const i=u=>{const c=Xu(u,t,!0);c&&(l=!0,pt(a,c))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!r&&!l?(Ke(e)&&o.set(e,null),null):(Me(r)?r.forEach(i=>a[i]=null):pt(a,r),Ke(e)&&o.set(e,a),a)}function lr(e,t){return!e||!nr(t)?!1:(t=t.slice(2).replace(/Once$/,""),$e(e,t[0].toLowerCase()+t.slice(1))||$e(e,$n(t))||$e(e,t))}let at=null,ur=null;function Fs(e){const t=at;return at=e,ur=e&&e.type.__scopeId||null,t}function d6(e){ur=e}function p6(){ur=null}function He(e,t=at,n){if(!t||e._n)return e;const o=(...s)=>{o._d&&il(-1);const r=Fs(t);let a;try{a=e(...s)}finally{Fs(r),o._d&&il(1)}return a};return o._n=!0,o._c=!0,o._d=!0,o}function Rr(e){const{type:t,vnode:n,proxy:o,withProxy:s,props:r,propsOptions:[a],slots:l,attrs:i,emit:u,render:c,renderCache:p,data:f,setupState:m,ctx:v,inheritAttrs:w}=e;let S,z;const $=Fs(e);try{if(n.shapeFlag&4){const N=s||o,B=N;S=Nt(c.call(B,N,p,r,m,f,v)),z=i}else{const N=t;S=Nt(N.length>1?N(r,{attrs:i,slots:l,emit:u}):N(r,null)),z=t.props?i:Up(i)}}catch(N){zo.length=0,Zo(N,e,1),S=Ae(bn)}let A=S;if(z&&w!==!1){const N=Object.keys(z),{shapeFlag:B}=A;N.length&&B&7&&(a&&N.some(za)&&(z=Wp(z,a)),A=uo(A,z))}return n.dirs&&(A=uo(A),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&(A.transition=n.transition),S=A,Fs($),S}const Up=e=>{let t;for(const n in e)(n==="class"||n==="style"||nr(n))&&((t||(t={}))[n]=e[n]);return t},Wp=(e,t)=>{const n={};for(const o in e)(!za(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function qp(e,t,n){const{props:o,children:s,component:r}=e,{props:a,children:l,patchFlag:i}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&i>=0){if(i&1024)return!0;if(i&16)return o?Yi(o,a,u):!!a;if(i&8){const c=t.dynamicProps;for(let p=0;p<c.length;p++){const f=c[p];if(a[f]!==o[f]&&!lr(u,f))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:o===a?!1:o?a?Yi(o,a,u):!0:!!a;return!1}function Yi(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let s=0;s<o.length;s++){const r=o[s];if(t[r]!==e[r]&&!lr(n,r))return!0}return!1}function Gp({vnode:e,parent:t},n){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.el=e.el),o===e)(e=t.vnode).el=n,t=t.parent;else break}}const Wa="components",Jp="directives";function ye(e,t){return Ga(Wa,e,!0,t)||e}const ec=Symbol.for("v-ndc");function qa(e){return ot(e)?Ga(Wa,e,!1)||e:e||ec}function Qp(e){return Ga(Jp,e)}function Ga(e,t,n=!0,o=!1){const s=at||ut;if(s){const r=s.type;if(e===Wa){const l=Bf(r,!1);if(l&&(l===t||l===Wt(t)||l===sr(Wt(t))))return r}const a=Zi(s[e]||r[e],t)||Zi(s.appContext[e],t);return!a&&o?r:a}}function Zi(e,t){return e&&(e[t]||e[Wt(t)]||e[sr(Wt(t))])}const Kp=e=>e.__isSuspense;function Yp(e,t){t&&t.pendingBranch?Me(e)?t.effects.push(...e):t.effects.push(e):$p(e)}const Zp=Symbol.for("v-scx"),Xp=()=>qe(Zp);function No(e,t){return Ja(e,null,t)}const ms={};function _t(e,t,n){return Ja(e,t,n)}function Ja(e,t,{immediate:n,deep:o,flush:s,once:r,onTrack:a,onTrigger:l}=Ze){if(t&&r){const D=t;t=(...P)=>{D(...P),B()}}const i=ut,u=D=>o===!0?D:En(D,o===!1?1:void 0);let c,p=!1,f=!1;if(ht(e)?(c=()=>e.value,p=Ns(e)):oo(e)?(c=()=>u(e),p=!0):Me(e)?(f=!0,p=e.some(D=>oo(D)||Ns(D)),c=()=>e.map(D=>{if(ht(D))return D.value;if(oo(D))return u(D);if(Ie(D))return mn(D,i,2)})):Ie(e)?t?c=()=>mn(e,i,2):c=()=>(m&&m(),Rt(e,i,3,[v])):c=At,t&&o){const D=c;c=()=>En(D())}let m,v=D=>{m=A.onStop=()=>{mn(D,i,4),m=A.onStop=void 0}},w;if(es)if(v=At,t?n&&Rt(t,i,3,[c(),f?[]:void 0,v]):c(),s==="sync"){const D=Xp();w=D.__watcherHandles||(D.__watcherHandles=[])}else return At;let S=f?new Array(e.length).fill(ms):ms;const z=()=>{if(!(!A.active||!A.dirty))if(t){const D=A.run();(o||p||(f?D.some((P,ne)=>yn(P,S[ne])):yn(D,S)))&&(m&&m(),Rt(t,i,3,[D,S===ms?void 0:f&&S[0]===ms?[]:S,v]),S=D)}else A.run()};z.allowRecurse=!!t;let $;s==="sync"?$=z:s==="post"?$=()=>bt(z,i&&i.suspense):(z.pre=!0,i&&(z.id=i.uid),$=()=>ir(z));const A=new Oa(c,At,$),N=hp(),B=()=>{A.stop(),N&&Ra(N.effects,A)};return t?n?z():S=A.run():s==="post"?bt(A.run.bind(A),i&&i.suspense):A.run(),w&&w.push(B),B}function ef(e,t,n){const o=this.proxy,s=ot(e)?e.includes(".")?tc(o,e):()=>o[e]:e.bind(o,o);let r;Ie(t)?r=t:(r=t.handler,n=t);const a=Xo(this),l=Ja(s,r.bind(o),n);return a(),l}function tc(e,t){const n=t.split(".");return()=>{let o=e;for(let s=0;s<n.length&&o;s++)o=o[n[s]];return o}}function En(e,t,n=0,o){if(!Ke(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(o=o||new Set,o.has(e))return e;if(o.add(e),ht(e))En(e.value,t,n,o);else if(Me(e))for(let s=0;s<e.length;s++)En(e[s],t,n,o);else if(go(e)||no(e))e.forEach(s=>{En(s,t,n,o)});else if(Au(e))for(const s in e)En(e[s],t,n,o);return e}function jn(e,t){if(at===null)return e;const n=hr(at)||at.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[r,a,l,i=Ze]=t[s];r&&(Ie(r)&&(r={mounted:r,updated:r}),r.deep&&En(a),o.push({dir:r,instance:n,value:a,oldValue:void 0,arg:l,modifiers:i}))}return e}function An(e,t,n,o){const s=e.dirs,r=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];r&&(l.oldValue=r[a].value);let i=l.dir[o];i&&(Fn(),Rt(i,n,8,[e.el,l,e,t]),Un())}}/*! #__NO_SIDE_EFFECTS__ */function Ce(e,t){return Ie(e)?pt({name:e.name},t,{setup:e}):e}const Eo=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function tf(e){Ie(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:o,delay:s=200,timeout:r,suspensible:a=!0,onError:l}=e;let i=null,u,c=0;const p=()=>(c++,i=null,f()),f=()=>{let m;return i||(m=i=t().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),l)return new Promise((w,S)=>{l(v,()=>w(p()),()=>S(v),c+1)});throw v}).then(v=>m!==i&&i?i:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),u=v,v)))};return Ce({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return u},setup(){const m=ut;if(u)return()=>jr(u,m);const v=$=>{i=null,Zo($,m,13,!o)};if(a&&m.suspense||es)return f().then($=>()=>jr($,m)).catch($=>(v($),()=>o?Ae(o,{error:$}):null));const w=Y(!1),S=Y(),z=Y(!!s);return s&&setTimeout(()=>{z.value=!1},s),r!=null&&setTimeout(()=>{if(!w.value&&!S.value){const $=new Error(`Async component timed out after ${r}ms.`);v($),S.value=$}},r),f().then(()=>{w.value=!0,m.parent&&Qa(m.parent.vnode)&&(m.parent.effect.dirty=!0,ir(m.parent.update))}).catch($=>{v($),S.value=$}),()=>{if(w.value&&u)return jr(u,m);if(S.value&&o)return Ae(o,{error:S.value});if(n&&!z.value)return Ae(n)}}})}function jr(e,t){const{ref:n,props:o,children:s,ce:r}=t.vnode,a=Ae(e,o,s);return a.ref=n,a.ce=r,delete t.vnode.ce,a}const Qa=e=>e.type.__isKeepAlive;function nc(e,t){sc(e,"a",t)}function oc(e,t){sc(e,"da",t)}function sc(e,t,n=ut){const o=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(cr(t,o,n),n){let s=n.parent;for(;s&&s.parent;)Qa(s.parent.vnode)&&nf(o,t,n,s),s=s.parent}}function nf(e,t,n,o){const s=cr(t,e,o,!0);xn(()=>{Ra(o[t],s)},n)}function cr(e,t,n=ut,o=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Fn();const l=Xo(n),i=Rt(t,n,e,a);return l(),Un(),i});return o?s.unshift(r):s.push(r),r}}const nn=e=>(t,n=ut)=>(!es||e==="sp")&&cr(e,(...o)=>t(...o),n),of=nn("bm"),Ct=nn("m"),sf=nn("bu"),rf=nn("u"),rc=nn("bum"),xn=nn("um"),af=nn("sp"),lf=nn("rtg"),uf=nn("rtc");function cf(e,t=ut){cr("ec",e,t)}function Qe(e,t,n,o){let s;const r=n&&n[o];if(Me(e)||ot(e)){s=new Array(e.length);for(let a=0,l=e.length;a<l;a++)s[a]=t(e[a],a,void 0,r&&r[a])}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,r&&r[a])}else if(Ke(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>t(a,l,void 0,r&&r[l]));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,i=a.length;l<i;l++){const u=a[l];s[l]=t(e[u],u,l,r&&r[l])}}else s=[];return n&&(n[o]=s),s}function Ka(e,t){for(let n=0;n<t.length;n++){const o=t[n];if(Me(o))for(let s=0;s<o.length;s++)e[o[s].name]=o[s].fn;else o&&(e[o.name]=o.key?(...s)=>{const r=o.fn(...s);return r&&(r.key=o.key),r}:o.fn)}return e}function he(e,t,n={},o,s){if(at.isCE||at.parent&&Eo(at.parent)&&at.parent.isCE)return t!=="default"&&(n.name=t),Ae("slot",n,o&&o());let r=e[t];r&&r._c&&(r._d=!1),h();const a=r&&ac(r(n)),l=we(Re,{key:n.key||a&&a.key||`_${t}`},a||(o?o():[]),a&&e._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function ac(e){return e.some(t=>Ws(t)?!(t.type===bn||t.type===Re&&!ac(t.children)):!0)?e:null}const na=e=>e?bc(e)?hr(e)||e.proxy:na(e.parent):null,Io=pt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>na(e.parent),$root:e=>na(e.root),$emit:e=>e.emit,$options:e=>Za(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,ir(e.update)}),$nextTick:e=>e.n||(e.n=jt.bind(e.proxy)),$watch:e=>ef.bind(e)}),Vr=(e,t)=>e!==Ze&&!e.__isScriptSetup&&$e(e,t),df={get({_:e},t){const{ctx:n,setupState:o,data:s,props:r,accessCache:a,type:l,appContext:i}=e;let u;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(Vr(o,t))return a[t]=1,o[t];if(s!==Ze&&$e(s,t))return a[t]=2,s[t];if((u=e.propsOptions[0])&&$e(u,t))return a[t]=3,r[t];if(n!==Ze&&$e(n,t))return a[t]=4,n[t];oa&&(a[t]=0)}}const c=Io[t];let p,f;if(c)return t==="$attrs"&&wt(e,"get",t),c(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==Ze&&$e(n,t))return a[t]=4,n[t];if(f=i.config.globalProperties,$e(f,t))return f[t]},set({_:e},t,n){const{data:o,setupState:s,ctx:r}=e;return Vr(s,t)?(s[t]=n,!0):o!==Ze&&$e(o,t)?(o[t]=n,!0):$e(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:s,propsOptions:r}},a){let l;return!!n[a]||e!==Ze&&$e(e,a)||Vr(t,a)||(l=r[0])&&$e(l,a)||$e(o,a)||$e(Io,a)||$e(s.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$e(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ya(){return ic().slots}function pf(){return ic().attrs}function ic(){const e=Xe();return e.setupContext||(e.setupContext=kc(e))}function Xi(e){return Me(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let oa=!0;function ff(e){const t=Za(e),n=e.proxy,o=e.ctx;oa=!1,t.beforeCreate&&el(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:a,watch:l,provide:i,inject:u,created:c,beforeMount:p,mounted:f,beforeUpdate:m,updated:v,activated:w,deactivated:S,beforeDestroy:z,beforeUnmount:$,destroyed:A,unmounted:N,render:B,renderTracked:D,renderTriggered:P,errorCaptured:ne,serverPrefetch:Z,expose:ge,inheritAttrs:re,components:se,directives:ve,filters:pe}=t;if(u&&hf(u,o,null),a)for(const M in a){const U=a[M];Ie(U)&&(o[M]=U.bind(n))}if(s){const M=s.call(n,n);Ke(M)&&(e.data=ar(M))}if(oa=!0,r)for(const M in r){const U=r[M],X=Ie(U)?U.bind(n,n):Ie(U.get)?U.get.bind(n,n):At,_=!Ie(U)&&Ie(U.set)?U.set.bind(n):At,H=C({get:X,set:_});Object.defineProperty(o,M,{enumerable:!0,configurable:!0,get:()=>H.value,set:de=>H.value=de})}if(l)for(const M in l)lc(l[M],o,n,M);if(i){const M=Ie(i)?i.call(n):i;Reflect.ownKeys(M).forEach(U=>{en(U,M[U])})}c&&el(c,e,"c");function ie(M,U){Me(U)?U.forEach(X=>M(X.bind(n))):U&&M(U.bind(n))}if(ie(of,p),ie(Ct,f),ie(sf,m),ie(rf,v),ie(nc,w),ie(oc,S),ie(cf,ne),ie(uf,D),ie(lf,P),ie(rc,$),ie(xn,N),ie(af,Z),Me(ge))if(ge.length){const M=e.exposed||(e.exposed={});ge.forEach(U=>{Object.defineProperty(M,U,{get:()=>n[U],set:X=>n[U]=X})})}else e.exposed||(e.exposed={});B&&e.render===At&&(e.render=B),re!=null&&(e.inheritAttrs=re),se&&(e.components=se),ve&&(e.directives=ve)}function hf(e,t,n=At){Me(e)&&(e=sa(e));for(const o in e){const s=e[o];let r;Ke(s)?"default"in s?r=qe(s.from||o,s.default,!0):r=qe(s.from||o):r=qe(s),ht(r)?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):t[o]=r}}function el(e,t,n){Rt(Me(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function lc(e,t,n,o){const s=o.includes(".")?tc(n,o):()=>n[o];if(ot(e)){const r=t[e];Ie(r)&&_t(s,r)}else if(Ie(e))_t(s,e.bind(n));else if(Ke(e))if(Me(e))e.forEach(r=>lc(r,t,n,o));else{const r=Ie(e.handler)?e.handler.bind(n):t[e.handler];Ie(r)&&_t(s,r,e)}}function Za(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=e.appContext,l=r.get(t);let i;return l?i=l:!s.length&&!n&&!o?i=t:(i={},s.length&&s.forEach(u=>Us(i,u,a,!0)),Us(i,t,a)),Ke(t)&&r.set(t,i),i}function Us(e,t,n,o=!1){const{mixins:s,extends:r}=t;r&&Us(e,r,n,!0),s&&s.forEach(a=>Us(e,a,n,!0));for(const a in t)if(!(o&&a==="expose")){const l=mf[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const mf={data:tl,props:nl,emits:nl,methods:Ao,computed:Ao,beforeCreate:gt,created:gt,beforeMount:gt,mounted:gt,beforeUpdate:gt,updated:gt,beforeDestroy:gt,beforeUnmount:gt,destroyed:gt,unmounted:gt,activated:gt,deactivated:gt,errorCaptured:gt,serverPrefetch:gt,components:Ao,directives:Ao,watch:vf,provide:tl,inject:gf};function tl(e,t){return t?e?function(){return pt(Ie(e)?e.call(this,this):e,Ie(t)?t.call(this,this):t)}:t:e}function gf(e,t){return Ao(sa(e),sa(t))}function sa(e){if(Me(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function gt(e,t){return e?[...new Set([].concat(e,t))]:t}function Ao(e,t){return e?pt(Object.create(null),e,t):t}function nl(e,t){return e?Me(e)&&Me(t)?[...new Set([...e,...t])]:pt(Object.create(null),Xi(e),Xi(t??{})):t}function vf(e,t){if(!e)return t;if(!t)return e;const n=pt(Object.create(null),e);for(const o in t)n[o]=gt(e[o],t[o]);return n}function uc(){return{app:null,config:{isNativeTag:ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yf=0;function bf(e,t){return function(o,s=null){Ie(o)||(o=pt({},o)),s!=null&&!Ke(s)&&(s=null);const r=uc(),a=new WeakSet;let l=!1;const i=r.app={_uid:yf++,_component:o,_props:s,_container:null,_context:r,_instance:null,version:xc,get config(){return r.config},set config(u){},use(u,...c){return a.has(u)||(u&&Ie(u.install)?(a.add(u),u.install(i,...c)):Ie(u)&&(a.add(u),u(i,...c))),i},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),i},component(u,c){return c?(r.components[u]=c,i):r.components[u]},directive(u,c){return c?(r.directives[u]=c,i):r.directives[u]},mount(u,c,p){if(!l){const f=Ae(o,s);return f.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),c&&t?t(f,u):e(f,u,p),l=!0,i._container=u,u.__vue_app__=i,hr(f.component)||f.component.proxy}},unmount(){l&&(e(null,i._container),delete i._container.__vue_app__)},provide(u,c){return r.provides[u]=c,i},runWithContext(u){const c=Lo;Lo=i;try{return u()}finally{Lo=c}}};return i}}let Lo=null;function en(e,t){if(ut){let n=ut.provides;const o=ut.parent&&ut.parent.provides;o===n&&(n=ut.provides=Object.create(o)),n[e]=t}}function qe(e,t,n=!1){const o=ut||at;if(o||Lo){const s=o?o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides:Lo._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Ie(t)?t.call(o&&o.proxy):t}}function wf(e,t,n,o=!1){const s={},r={};$s(r,pr,1),e.propsDefaults=Object.create(null),cc(e,t,s,r);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);n?e.props=o?s:$u(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function kf(e,t,n,o){const{props:s,attrs:r,vnode:{patchFlag:a}}=e,l=We(s),[i]=e.propsOptions;let u=!1;if((o||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let p=0;p<c.length;p++){let f=c[p];if(lr(e.emitsOptions,f))continue;const m=t[f];if(i)if($e(r,f))m!==r[f]&&(r[f]=m,u=!0);else{const v=Wt(f);s[v]=ra(i,l,v,m,e,!1)}else m!==r[f]&&(r[f]=m,u=!0)}}}else{cc(e,t,s,r)&&(u=!0);let c;for(const p in l)(!t||!$e(t,p)&&((c=$n(p))===p||!$e(t,c)))&&(i?n&&(n[p]!==void 0||n[c]!==void 0)&&(s[p]=ra(i,l,p,void 0,e,!0)):delete s[p]);if(r!==l)for(const p in r)(!t||!$e(t,p))&&(delete r[p],u=!0)}u&&Xt(e,"set","$attrs")}function cc(e,t,n,o){const[s,r]=e.propsOptions;let a=!1,l;if(t)for(let i in t){if(Po(i))continue;const u=t[i];let c;s&&$e(s,c=Wt(i))?!r||!r.includes(c)?n[c]=u:(l||(l={}))[c]=u:lr(e.emitsOptions,i)||(!(i in o)||u!==o[i])&&(o[i]=u,a=!0)}if(r){const i=We(n),u=l||Ze;for(let c=0;c<r.length;c++){const p=r[c];n[p]=ra(s,i,p,u[p],e,!$e(u,p))}}return a}function ra(e,t,n,o,s,r){const a=e[n];if(a!=null){const l=$e(a,"default");if(l&&o===void 0){const i=a.default;if(a.type!==Function&&!a.skipFactory&&Ie(i)){const{propsDefaults:u}=s;if(n in u)o=u[n];else{const c=Xo(s);o=u[n]=i.call(null,t),c()}}else o=i}a[0]&&(r&&!l?o=!1:a[1]&&(o===""||o===$n(n))&&(o=!0))}return o}function dc(e,t,n=!1){const o=t.propsCache,s=o.get(e);if(s)return s;const r=e.props,a={},l=[];let i=!1;if(!Ie(e)){const c=p=>{i=!0;const[f,m]=dc(p,t,!0);pt(a,f),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!i)return Ke(e)&&o.set(e,to),to;if(Me(r))for(let c=0;c<r.length;c++){const p=Wt(r[c]);ol(p)&&(a[p]=Ze)}else if(r)for(const c in r){const p=Wt(c);if(ol(p)){const f=r[c],m=a[p]=Me(f)||Ie(f)?{type:f}:pt({},f);if(m){const v=al(Boolean,m.type),w=al(String,m.type);m[0]=v>-1,m[1]=w<0||v<w,(v>-1||$e(m,"default"))&&l.push(p)}}}const u=[a,l];return Ke(e)&&o.set(e,u),u}function ol(e){return e[0]!=="$"&&!Po(e)}function sl(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function rl(e,t){return sl(e)===sl(t)}function al(e,t){return Me(t)?t.findIndex(n=>rl(n,e)):Ie(t)&&rl(t,e)?0:-1}const pc=e=>e[0]==="_"||e==="$stable",Xa=e=>Me(e)?e.map(Nt):[Nt(e)],xf=(e,t,n)=>{if(t._n)return t;const o=He((...s)=>Xa(t(...s)),n);return o._c=!1,o},fc=(e,t,n)=>{const o=e._ctx;for(const s in e){if(pc(s))continue;const r=e[s];if(Ie(r))t[s]=xf(s,r,o);else if(r!=null){const a=Xa(r);t[s]=()=>a}}},hc=(e,t)=>{const n=Xa(t);e.slots.default=()=>n},Cf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=We(t),$s(t,"_",n)):fc(t,e.slots={})}else e.slots={},t&&hc(e,t);$s(e.slots,pr,1)},Sf=(e,t,n)=>{const{vnode:o,slots:s}=e;let r=!0,a=Ze;if(o.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:(pt(s,t),!n&&l===1&&delete s._):(r=!t.$stable,fc(t,s)),a=t}else t&&(hc(e,t),a={default:1});if(r)for(const l in s)!pc(l)&&a[l]==null&&delete s[l]};function aa(e,t,n,o,s=!1){if(Me(e)){e.forEach((f,m)=>aa(f,t&&(Me(t)?t[m]:t),n,o,s));return}if(Eo(o)&&!s)return;const r=o.shapeFlag&4?hr(o.component)||o.component.proxy:o.el,a=s?null:r,{i:l,r:i}=e,u=t&&t.r,c=l.refs===Ze?l.refs={}:l.refs,p=l.setupState;if(u!=null&&u!==i&&(ot(u)?(c[u]=null,$e(p,u)&&(p[u]=null)):ht(u)&&(u.value=null)),Ie(i))mn(i,l,12,[a,c]);else{const f=ot(i),m=ht(i);if(f||m){const v=()=>{if(e.f){const w=f?$e(p,i)?p[i]:c[i]:i.value;s?Me(w)&&Ra(w,r):Me(w)?w.includes(r)||w.push(r):f?(c[i]=[r],$e(p,i)&&(p[i]=c[i])):(i.value=[r],e.k&&(c[e.k]=i.value))}else f?(c[i]=a,$e(p,i)&&(p[i]=a)):m&&(i.value=a,e.k&&(c[e.k]=a))};a?(v.id=-1,bt(v,n)):v()}}}const bt=Yp;function Tf(e){return Af(e)}function Af(e,t){const n=_u();n.__VUE__=!0;const{insert:o,remove:s,patchProp:r,createElement:a,createText:l,createComment:i,setText:u,setElementText:c,parentNode:p,nextSibling:f,setScopeId:m=At,insertStaticContent:v}=e,w=(g,b,T,k=null,x=null,V=null,Q=void 0,K=null,ee=!!b.dynamicChildren)=>{if(g===b)return;g&&!Co(g,b)&&(k=E(g),de(g,x,V,!0),g=null),b.patchFlag===-2&&(ee=!1,b.dynamicChildren=null);const{type:G,ref:oe,shapeFlag:fe}=b;switch(G){case dr:S(g,b,T,k);break;case bn:z(g,b,T,k);break;case Ms:g==null&&$(b,T,k,Q);break;case Re:se(g,b,T,k,x,V,Q,K,ee);break;default:fe&1?B(g,b,T,k,x,V,Q,K,ee):fe&6?ve(g,b,T,k,x,V,Q,K,ee):(fe&64||fe&128)&&G.process(g,b,T,k,x,V,Q,K,ee,I)}oe!=null&&x&&aa(oe,g&&g.ref,V,b||g,!b)},S=(g,b,T,k)=>{if(g==null)o(b.el=l(b.children),T,k);else{const x=b.el=g.el;b.children!==g.children&&u(x,b.children)}},z=(g,b,T,k)=>{g==null?o(b.el=i(b.children||""),T,k):b.el=g.el},$=(g,b,T,k)=>{[g.el,g.anchor]=v(g.children,b,T,k,g.el,g.anchor)},A=({el:g,anchor:b},T,k)=>{let x;for(;g&&g!==b;)x=f(g),o(g,T,k),g=x;o(b,T,k)},N=({el:g,anchor:b})=>{let T;for(;g&&g!==b;)T=f(g),s(g),g=T;s(b)},B=(g,b,T,k,x,V,Q,K,ee)=>{b.type==="svg"?Q="svg":b.type==="math"&&(Q="mathml"),g==null?D(b,T,k,x,V,Q,K,ee):Z(g,b,x,V,Q,K,ee)},D=(g,b,T,k,x,V,Q,K)=>{let ee,G;const{props:oe,shapeFlag:fe,transition:ce,dirs:ke}=g;if(ee=g.el=a(g.type,V,oe&&oe.is,oe),fe&8?c(ee,g.children):fe&16&&ne(g.children,ee,null,k,x,Or(g,V),Q,K),ke&&An(g,null,k,"created"),P(ee,g,g.scopeId,Q,k),oe){for(const je in oe)je!=="value"&&!Po(je)&&r(ee,je,null,oe[je],V,g.children,k,x,ue);"value"in oe&&r(ee,"value",null,oe.value,V),(G=oe.onVnodeBeforeMount)&&Dt(G,k,g)}ke&&An(g,null,k,"beforeMount");const Ee=_f(x,ce);Ee&&ce.beforeEnter(ee),o(ee,b,T),((G=oe&&oe.onVnodeMounted)||Ee||ke)&&bt(()=>{G&&Dt(G,k,g),Ee&&ce.enter(ee),ke&&An(g,null,k,"mounted")},x)},P=(g,b,T,k,x)=>{if(T&&m(g,T),k)for(let V=0;V<k.length;V++)m(g,k[V]);if(x){let V=x.subTree;if(b===V){const Q=x.vnode;P(g,Q,Q.scopeId,Q.slotScopeIds,x.parent)}}},ne=(g,b,T,k,x,V,Q,K,ee=0)=>{for(let G=ee;G<g.length;G++){const oe=g[G]=K?dn(g[G]):Nt(g[G]);w(null,oe,b,T,k,x,V,Q,K)}},Z=(g,b,T,k,x,V,Q)=>{const K=b.el=g.el;let{patchFlag:ee,dynamicChildren:G,dirs:oe}=b;ee|=g.patchFlag&16;const fe=g.props||Ze,ce=b.props||Ze;let ke;if(T&&_n(T,!1),(ke=ce.onVnodeBeforeUpdate)&&Dt(ke,T,b,g),oe&&An(b,g,T,"beforeUpdate"),T&&_n(T,!0),G?ge(g.dynamicChildren,G,K,T,k,Or(b,x),V):Q||U(g,b,K,null,T,k,Or(b,x),V,!1),ee>0){if(ee&16)re(K,b,fe,ce,T,k,x);else if(ee&2&&fe.class!==ce.class&&r(K,"class",null,ce.class,x),ee&4&&r(K,"style",fe.style,ce.style,x),ee&8){const Ee=b.dynamicProps;for(let je=0;je<Ee.length;je++){const Ge=Ee[je],et=fe[Ge],kt=ce[Ge];(kt!==et||Ge==="value")&&r(K,Ge,et,kt,x,g.children,T,k,ue)}}ee&1&&g.children!==b.children&&c(K,b.children)}else!Q&&G==null&&re(K,b,fe,ce,T,k,x);((ke=ce.onVnodeUpdated)||oe)&&bt(()=>{ke&&Dt(ke,T,b,g),oe&&An(b,g,T,"updated")},k)},ge=(g,b,T,k,x,V,Q)=>{for(let K=0;K<b.length;K++){const ee=g[K],G=b[K],oe=ee.el&&(ee.type===Re||!Co(ee,G)||ee.shapeFlag&70)?p(ee.el):T;w(ee,G,oe,null,k,x,V,Q,!0)}},re=(g,b,T,k,x,V,Q)=>{if(T!==k){if(T!==Ze)for(const K in T)!Po(K)&&!(K in k)&&r(g,K,T[K],null,Q,b.children,x,V,ue);for(const K in k){if(Po(K))continue;const ee=k[K],G=T[K];ee!==G&&K!=="value"&&r(g,K,G,ee,Q,b.children,x,V,ue)}"value"in k&&r(g,"value",T.value,k.value,Q)}},se=(g,b,T,k,x,V,Q,K,ee)=>{const G=b.el=g?g.el:l(""),oe=b.anchor=g?g.anchor:l("");let{patchFlag:fe,dynamicChildren:ce,slotScopeIds:ke}=b;ke&&(K=K?K.concat(ke):ke),g==null?(o(G,T,k),o(oe,T,k),ne(b.children||[],T,oe,x,V,Q,K,ee)):fe>0&&fe&64&&ce&&g.dynamicChildren?(ge(g.dynamicChildren,ce,T,x,V,Q,K),(b.key!=null||x&&b===x.subTree)&&mc(g,b,!0)):U(g,b,T,oe,x,V,Q,K,ee)},ve=(g,b,T,k,x,V,Q,K,ee)=>{b.slotScopeIds=K,g==null?b.shapeFlag&512?x.ctx.activate(b,T,k,Q,ee):pe(b,T,k,x,V,Q,ee):J(g,b,ee)},pe=(g,b,T,k,x,V,Q)=>{const K=g.component=Rf(g,k,x);if(Qa(g)&&(K.ctx.renderer=I),jf(K),K.asyncDep){if(x&&x.registerDep(K,ie),!g.el){const ee=K.subTree=Ae(bn);z(null,ee,b,T)}}else ie(K,g,b,T,x,V,Q)},J=(g,b,T)=>{const k=b.component=g.component;if(qp(g,b,T))if(k.asyncDep&&!k.asyncResolved){M(k,b,T);return}else k.next=b,Hp(k.update),k.effect.dirty=!0,k.update();else b.el=g.el,k.vnode=b},ie=(g,b,T,k,x,V,Q)=>{const K=()=>{if(g.isMounted){let{next:oe,bu:fe,u:ce,parent:ke,vnode:Ee}=g;{const sn=gc(g);if(sn){oe&&(oe.el=Ee.el,M(g,oe,Q)),sn.asyncDep.then(()=>{g.isUnmounted||K()});return}}let je=oe,Ge;_n(g,!1),oe?(oe.el=Ee.el,M(g,oe,Q)):oe=Ee,fe&&As(fe),(Ge=oe.props&&oe.props.onVnodeBeforeUpdate)&&Dt(Ge,ke,oe,Ee),_n(g,!0);const et=Rr(g),kt=g.subTree;g.subTree=et,w(kt,et,p(kt.el),E(kt),g,x,V),oe.el=et.el,je===null&&Gp(g,et.el),ce&&bt(ce,x),(Ge=oe.props&&oe.props.onVnodeUpdated)&&bt(()=>Dt(Ge,ke,oe,Ee),x)}else{let oe;const{el:fe,props:ce}=b,{bm:ke,m:Ee,parent:je}=g,Ge=Eo(b);if(_n(g,!1),ke&&As(ke),!Ge&&(oe=ce&&ce.onVnodeBeforeMount)&&Dt(oe,je,b),_n(g,!0),fe&&Se){const et=()=>{g.subTree=Rr(g),Se(fe,g.subTree,g,x,null)};Ge?b.type.__asyncLoader().then(()=>!g.isUnmounted&&et()):et()}else{const et=g.subTree=Rr(g);w(null,et,T,k,g,x,V),b.el=et.el}if(Ee&&bt(Ee,x),!Ge&&(oe=ce&&ce.onVnodeMounted)){const et=b;bt(()=>Dt(oe,je,et),x)}(b.shapeFlag&256||je&&Eo(je.vnode)&&je.vnode.shapeFlag&256)&&g.a&&bt(g.a,x),g.isMounted=!0,b=T=k=null}},ee=g.effect=new Oa(K,At,()=>ir(G),g.scope),G=g.update=()=>{ee.dirty&&ee.run()};G.id=g.uid,_n(g,!0),G()},M=(g,b,T)=>{b.component=g;const k=g.vnode.props;g.vnode=b,g.next=null,kf(g,b.props,k,T),Sf(g,b.children,T),Fn(),Ki(g),Un()},U=(g,b,T,k,x,V,Q,K,ee=!1)=>{const G=g&&g.children,oe=g?g.shapeFlag:0,fe=b.children,{patchFlag:ce,shapeFlag:ke}=b;if(ce>0){if(ce&128){_(G,fe,T,k,x,V,Q,K,ee);return}else if(ce&256){X(G,fe,T,k,x,V,Q,K,ee);return}}ke&8?(oe&16&&ue(G,x,V),fe!==G&&c(T,fe)):oe&16?ke&16?_(G,fe,T,k,x,V,Q,K,ee):ue(G,x,V,!0):(oe&8&&c(T,""),ke&16&&ne(fe,T,k,x,V,Q,K,ee))},X=(g,b,T,k,x,V,Q,K,ee)=>{g=g||to,b=b||to;const G=g.length,oe=b.length,fe=Math.min(G,oe);let ce;for(ce=0;ce<fe;ce++){const ke=b[ce]=ee?dn(b[ce]):Nt(b[ce]);w(g[ce],ke,T,null,x,V,Q,K,ee)}G>oe?ue(g,x,V,!0,!1,fe):ne(b,T,k,x,V,Q,K,ee,fe)},_=(g,b,T,k,x,V,Q,K,ee)=>{let G=0;const oe=b.length;let fe=g.length-1,ce=oe-1;for(;G<=fe&&G<=ce;){const ke=g[G],Ee=b[G]=ee?dn(b[G]):Nt(b[G]);if(Co(ke,Ee))w(ke,Ee,T,null,x,V,Q,K,ee);else break;G++}for(;G<=fe&&G<=ce;){const ke=g[fe],Ee=b[ce]=ee?dn(b[ce]):Nt(b[ce]);if(Co(ke,Ee))w(ke,Ee,T,null,x,V,Q,K,ee);else break;fe--,ce--}if(G>fe){if(G<=ce){const ke=ce+1,Ee=ke<oe?b[ke].el:k;for(;G<=ce;)w(null,b[G]=ee?dn(b[G]):Nt(b[G]),T,Ee,x,V,Q,K,ee),G++}}else if(G>ce)for(;G<=fe;)de(g[G],x,V,!0),G++;else{const ke=G,Ee=G,je=new Map;for(G=Ee;G<=ce;G++){const Ye=b[G]=ee?dn(b[G]):Nt(b[G]);Ye.key!=null&&je.set(Ye.key,G)}let Ge,et=0;const kt=ce-Ee+1;let sn=!1,as=0;const Jt=new Array(kt);for(G=0;G<kt;G++)Jt[G]=0;for(G=ke;G<=fe;G++){const Ye=g[G];if(et>=kt){de(Ye,x,V,!0);continue}let St;if(Ye.key!=null)St=je.get(Ye.key);else for(Ge=Ee;Ge<=ce;Ge++)if(Jt[Ge-Ee]===0&&Co(Ye,b[Ge])){St=Ge;break}St===void 0?de(Ye,x,V,!0):(Jt[St-Ee]=G+1,St>=as?as=St:sn=!0,w(Ye,b[St],T,null,x,V,Q,K,ee),et++)}const yo=sn?Mf(Jt):to;for(Ge=yo.length-1,G=kt-1;G>=0;G--){const Ye=Ee+G,St=b[Ye],bo=Ye+1<oe?b[Ye+1].el:k;Jt[G]===0?w(null,St,T,bo,x,V,Q,K,ee):sn&&(Ge<0||G!==yo[Ge]?H(St,T,bo,2):Ge--)}}},H=(g,b,T,k,x=null)=>{const{el:V,type:Q,transition:K,children:ee,shapeFlag:G}=g;if(G&6){H(g.component.subTree,b,T,k);return}if(G&128){g.suspense.move(b,T,k);return}if(G&64){Q.move(g,b,T,I);return}if(Q===Re){o(V,b,T);for(let fe=0;fe<ee.length;fe++)H(ee[fe],b,T,k);o(g.anchor,b,T);return}if(Q===Ms){A(g,b,T);return}if(k!==2&&G&1&&K)if(k===0)K.beforeEnter(V),o(V,b,T),bt(()=>K.enter(V),x);else{const{leave:fe,delayLeave:ce,afterLeave:ke}=K,Ee=()=>o(V,b,T),je=()=>{fe(V,()=>{Ee(),ke&&ke()})};ce?ce(V,Ee,je):je()}else o(V,b,T)},de=(g,b,T,k=!1,x=!1)=>{const{type:V,props:Q,ref:K,children:ee,dynamicChildren:G,shapeFlag:oe,patchFlag:fe,dirs:ce}=g;if(K!=null&&aa(K,null,T,g,!0),oe&256){b.ctx.deactivate(g);return}const ke=oe&1&&ce,Ee=!Eo(g);let je;if(Ee&&(je=Q&&Q.onVnodeBeforeUnmount)&&Dt(je,b,g),oe&6)R(g.component,T,k);else{if(oe&128){g.suspense.unmount(T,k);return}ke&&An(g,null,b,"beforeUnmount"),oe&64?g.type.remove(g,b,T,x,I,k):G&&(V!==Re||fe>0&&fe&64)?ue(G,b,T,!1,!0):(V===Re&&fe&384||!x&&oe&16)&&ue(ee,b,T),k&&W(g)}(Ee&&(je=Q&&Q.onVnodeUnmounted)||ke)&&bt(()=>{je&&Dt(je,b,g),ke&&An(g,null,b,"unmounted")},T)},W=g=>{const{type:b,el:T,anchor:k,transition:x}=g;if(b===Re){be(T,k);return}if(b===Ms){N(g);return}const V=()=>{s(T),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(g.shapeFlag&1&&x&&!x.persisted){const{leave:Q,delayLeave:K}=x,ee=()=>Q(T,V);K?K(g.el,V,ee):ee()}else V()},be=(g,b)=>{let T;for(;g!==b;)T=f(g),s(g),g=T;s(b)},R=(g,b,T)=>{const{bum:k,scope:x,update:V,subTree:Q,um:K}=g;k&&As(k),x.stop(),V&&(V.active=!1,de(Q,g,b,T)),K&&bt(K,b),bt(()=>{g.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},ue=(g,b,T,k=!1,x=!1,V=0)=>{for(let Q=V;Q<g.length;Q++)de(g[Q],b,T,k,x)},E=g=>g.shapeFlag&6?E(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el);let q=!1;const O=(g,b,T)=>{g==null?b._vnode&&de(b._vnode,null,null,!0):w(b._vnode||null,g,b,null,null,null,T),q||(q=!0,Ki(),Yu(),q=!1),b._vnode=g},I={p:w,um:de,m:H,r:W,mt:pe,mc:ne,pc:U,pbc:ge,n:E,o:e};let ae,Se;return t&&([ae,Se]=t(I)),{render:O,hydrate:ae,createApp:bf(O,ae)}}function Or({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function _n({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function _f(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function mc(e,t,n=!1){const o=e.children,s=t.children;if(Me(o)&&Me(s))for(let r=0;r<o.length;r++){const a=o[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=dn(s[r]),l.el=a.el),n||mc(a,l)),l.type===dr&&(l.el=a.el)}}function Mf(e){const t=e.slice(),n=[0];let o,s,r,a,l;const i=e.length;for(o=0;o<i;o++){const u=e[o];if(u!==0){if(s=n[n.length-1],e[s]<u){t[o]=s,n.push(o);continue}for(r=0,a=n.length-1;r<a;)l=r+a>>1,e[n[l]]<u?r=l+1:a=l;u<e[n[r]]&&(r>0&&(t[o]=n[r-1]),n[r]=o)}}for(r=n.length,a=n[r-1];r-- >0;)n[r]=a,a=t[a];return n}function gc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:gc(t)}const Pf=e=>e.__isTeleport,Re=Symbol.for("v-fgt"),dr=Symbol.for("v-txt"),bn=Symbol.for("v-cmt"),Ms=Symbol.for("v-stc"),zo=[];let zt=null;function h(e=!1){zo.push(zt=e?null:[])}function Ef(){zo.pop(),zt=zo[zo.length-1]||null}let Fo=1;function il(e){Fo+=e}function vc(e){return e.dynamicChildren=Fo>0?zt||to:null,Ef(),Fo>0&&zt&&zt.push(e),e}function y(e,t,n,o,s,r){return vc(d(e,t,n,o,s,r,!0))}function we(e,t,n,o,s){return vc(Ae(e,t,n,o,s,!0))}function Ws(e){return e?e.__v_isVNode===!0:!1}function Co(e,t){return e.type===t.type&&e.key===t.key}const pr="__vInternal",yc=({key:e})=>e??null,Ps=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ot(e)||ht(e)||Ie(e)?{i:at,r:e,k:t,f:!!n}:e:null);function d(e,t=null,n=null,o=0,s=null,r=e===Re?0:1,a=!1,l=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&yc(t),ref:t&&Ps(t),scopeId:ur,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:at};return l?(ei(i,n),r&128&&e.normalize(i)):n&&(i.shapeFlag|=ot(n)?8:16),Fo>0&&!a&&zt&&(i.patchFlag>0||r&6)&&i.patchFlag!==32&&zt.push(i),i}const Ae=If;function If(e,t=null,n=null,o=0,s=null,r=!1){if((!e||e===ec)&&(e=bn),Ws(e)){const l=uo(e,t,!0);return n&&ei(l,n),Fo>0&&!r&&zt&&(l.shapeFlag&6?zt[zt.indexOf(e)]=l:zt.push(l)),l.patchFlag|=-2,l}if(Df(e)&&(e=e.__vccOpts),t){t=Uo(t);let{class:l,style:i}=t;l&&!ot(l)&&(t.class=L(l)),Ke(i)&&(Fu(i)&&!Me(i)&&(i=pt({},i)),t.style=Nn(i))}const a=ot(e)?1:Kp(e)?128:Pf(e)?64:Ke(e)?4:Ie(e)?2:0;return d(e,t,n,o,s,a,r,!0)}function Uo(e){return e?Fu(e)||pr in e?pt({},e):e:null}function uo(e,t,n=!1){const{props:o,ref:s,patchFlag:r,children:a}=e,l=t?Ue(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&yc(l),ref:t&&t.ref?n&&s?Me(s)?s.concat(Ps(t)):[s,Ps(t)]:Ps(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Re?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&uo(e.ssContent),ssFallback:e.ssFallback&&uo(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Be(e=" ",t=0){return Ae(dr,null,e,t)}function fr(e,t){const n=Ae(Ms,null,e);return n.staticCount=t,n}function F(e="",t=!1){return t?(h(),we(bn,null,e)):Ae(bn,null,e)}function Nt(e){return e==null||typeof e=="boolean"?Ae(bn):Me(e)?Ae(Re,null,e.slice()):typeof e=="object"?dn(e):Ae(dr,null,String(e))}function dn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:uo(e)}function ei(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(Me(t))n=16;else if(typeof t=="object")if(o&65){const s=t.default;s&&(s._c&&(s._d=!1),ei(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(pr in t)?t._ctx=at:s===3&&at&&(at.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Ie(t)?(t={default:t,_ctx:at},n=32):(t=String(t),o&64?(n=16,t=[Be(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ue(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const s in o)if(s==="class")t.class!==o.class&&(t.class=L([t.class,o.class]));else if(s==="style")t.style=Nn([t.style,o.style]);else if(nr(s)){const r=t[s],a=o[s];a&&r!==a&&!(Me(r)&&r.includes(a))&&(t[s]=r?[].concat(r,a):a)}else s!==""&&(t[s]=o[s])}return t}function Dt(e,t,n,o=null){Rt(e,t,7,[n,o])}const Lf=uc();let zf=0;function Rf(e,t,n){const o=e.type,s=(t?t.appContext:e.appContext)||Lf,r={uid:zf++,vnode:e,type:o,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new pp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dc(o,s),emitsOptions:Xu(o,s),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:o.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Fp.bind(null,r),e.ce&&e.ce(r),r}let ut=null;const Xe=()=>ut||at;let qs,ia;{const e=_u(),t=(n,o)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(o),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};qs=t("__VUE_INSTANCE_SETTERS__",n=>ut=n),ia=t("__VUE_SSR_SETTERS__",n=>es=n)}const Xo=e=>{const t=ut;return qs(e),e.scope.on(),()=>{e.scope.off(),qs(t)}},ll=()=>{ut&&ut.scope.off(),qs(null)};function bc(e){return e.vnode.shapeFlag&4}let es=!1;function jf(e,t=!1){t&&ia(t);const{props:n,children:o}=e.vnode,s=bc(e);wf(e,n,s,t),Cf(e,o);const r=s?Vf(e,t):void 0;return t&&ia(!1),r}function Vf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Uu(new Proxy(e.ctx,df));const{setup:o}=n;if(o){const s=e.setupContext=o.length>1?kc(e):null,r=Xo(e);Fn();const a=mn(o,e,0,[e.props,s]);if(Un(),r(),Su(a)){if(a.then(ll,ll),t)return a.then(l=>{ul(e,l,t)}).catch(l=>{Zo(l,e,0)});e.asyncDep=a}else ul(e,a,t)}else wc(e,t)}function ul(e,t,n){Ie(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ke(t)&&(e.setupState=Ju(t)),wc(e,n)}let cl;function wc(e,t,n){const o=e.type;if(!e.render){if(!t&&cl&&!o.render){const s=o.template||Za(e).template;if(s){const{isCustomElement:r,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:i}=o,u=pt(pt({isCustomElement:r,delimiters:l},a),i);o.render=cl(s,u)}}e.render=o.render||At}{const s=Xo(e);Fn();try{ff(e)}finally{Un(),s()}}}function Of(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return wt(e,"get","$attrs"),t[n]}}))}function kc(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Of(e)},slots:e.slots,emit:e.emit,expose:t}}function hr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ju(Uu(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Io)return Io[n](e)},has(t,n){return n in t||n in Io}}))}function Bf(e,t=!0){return Ie(e)?e.displayName||e.name:e.name||t&&e.__name}function Df(e){return Ie(e)&&"__vccOpts"in e}const C=(e,t)=>Rp(e,t,es);function Tt(e,t,n){const o=arguments.length;return o===2?Ke(t)&&!Me(t)?Ws(t)?Ae(e,null,[t]):Ae(e,t):Ae(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Ws(n)&&(n=[n]),Ae(e,t,n))}const xc="3.4.19";/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Hf="http://www.w3.org/2000/svg",$f="http://www.w3.org/1998/Math/MathML",pn=typeof document<"u"?document:null,dl=pn&&pn.createElement("template"),Nf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const s=t==="svg"?pn.createElementNS(Hf,e):t==="mathml"?pn.createElementNS($f,e):pn.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&s.setAttribute("multiple",o.multiple),s},createText:e=>pn.createTextNode(e),createComment:e=>pn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,o,s,r){const a=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{dl.innerHTML=o==="svg"?`<svg>${e}</svg>`:o==="mathml"?`<math>${e}</math>`:e;const l=dl.content;if(o==="svg"||o==="mathml"){const i=l.firstChild;for(;i.firstChild;)l.appendChild(i.firstChild);l.removeChild(i)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ff=Symbol("_vtc");function Uf(e,t,n){const o=e[Ff];o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const pl=Symbol("_vod"),Wf=Symbol(""),qf=/(^|;)\s*display\s*:/;function Gf(e,t,n){const o=e.style,s=ot(n),r=o.display;let a=!1;if(n&&!s){if(t&&!ot(t))for(const l in t)n[l]==null&&la(o,l,"");for(const l in n)l==="display"&&(a=!0),la(o,l,n[l])}else if(s){if(t!==n){const l=o[Wf];l&&(n+=";"+l),o.cssText=n,a=qf.test(n)}}else t&&e.removeAttribute("style");pl in e&&(e[pl]=a?o.display:"",o.display=r)}const fl=/\s*!important$/;function la(e,t,n){if(Me(n))n.forEach(o=>la(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Jf(e,t);fl.test(n)?e.setProperty($n(o),n.replace(fl,""),"important"):e[o]=n}}const hl=["Webkit","Moz","ms"],Br={};function Jf(e,t){const n=Br[t];if(n)return n;let o=Wt(t);if(o!=="filter"&&o in e)return Br[t]=o;o=sr(o);for(let s=0;s<hl.length;s++){const r=hl[s]+o;if(r in e)return Br[t]=r}return t}const ml="http://www.w3.org/1999/xlink";function Qf(e,t,n,o,s){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ml,t.slice(6,t.length)):e.setAttributeNS(ml,t,n);else{const r=cp(t);n==null||r&&!Mu(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function Kf(e,t,n,o,s,r,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,s,r),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const u=l==="OPTION"?e.getAttribute("value"):e.value,c=n??"";u!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let i=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Mu(n):n==null&&u==="string"?(n="",i=!0):u==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}function Zt(e,t,n,o){e.addEventListener(t,n,o)}function Yf(e,t,n,o){e.removeEventListener(t,n,o)}const gl=Symbol("_vei");function Zf(e,t,n,o,s=null){const r=e[gl]||(e[gl]={}),a=r[t];if(o&&a)a.value=o;else{const[l,i]=Xf(t);if(o){const u=r[t]=nh(o,s);Zt(e,l,u,i)}else a&&(Yf(e,l,a,i),r[t]=void 0)}}const vl=/(?:Once|Passive|Capture)$/;function Xf(e){let t;if(vl.test(e)){t={};let o;for(;o=e.match(vl);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$n(e.slice(2)),t]}let Dr=0;const eh=Promise.resolve(),th=()=>Dr||(eh.then(()=>Dr=0),Dr=Date.now());function nh(e,t){const n=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=n.attached)return;Rt(oh(o,n.value),t,5,[o])};return n.value=e,n.attached=th(),n}function oh(e,t){if(Me(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>s=>!s._stopped&&o&&o(s))}else return t}const yl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,sh=(e,t,n,o,s,r,a,l,i)=>{const u=s==="svg";t==="class"?Uf(e,o,u):t==="style"?Gf(e,n,o):nr(t)?za(t)||Zf(e,t,n,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rh(e,t,o,u))?Kf(e,t,o,r,a,l,i):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Qf(e,t,o,u))};function rh(e,t,n,o){if(o)return!!(t==="innerHTML"||t==="textContent"||t in e&&yl(t)&&Ie(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return yl(t)&&ot(n)?!1:t in e}const wn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Me(t)?n=>As(t,n):t};function ah(e){e.target.composing=!0}function bl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Mt=Symbol("_assign"),ua={created(e,{modifiers:{lazy:t,trim:n,number:o}},s){e[Mt]=wn(s);const r=o||s.props&&s.props.type==="number";Zt(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;n&&(l=l.trim()),r&&(l=Bo(l)),e[Mt](l)}),n&&Zt(e,"change",()=>{e.value=e.value.trim()}),t||(Zt(e,"compositionstart",ah),Zt(e,"compositionend",bl),Zt(e,"change",bl))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:s}},r){if(e[Mt]=wn(r),e.composing)return;const a=s||e.type==="number"?Bo(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===l)||(e.value=l))}},mr={deep:!0,created(e,t,n){e[Mt]=wn(n),Zt(e,"change",()=>{const o=e._modelValue,s=co(e),r=e.checked,a=e[Mt];if(Me(o)){const l=Va(o,s),i=l!==-1;if(r&&!i)a(o.concat(s));else if(!r&&i){const u=[...o];u.splice(l,1),a(u)}}else if(go(o)){const l=new Set(o);r?l.add(s):l.delete(s),a(l)}else a(Sc(e,r))})},mounted:wl,beforeUpdate(e,t,n){e[Mt]=wn(n),wl(e,t,n)}};function wl(e,{value:t,oldValue:n},o){e._modelValue=t,Me(t)?e.checked=Va(t,o.props.value)>-1:go(t)?e.checked=t.has(o.props.value):t!==n&&(e.checked=Rn(t,Sc(e,!0)))}const ih={created(e,{value:t},n){e.checked=Rn(t,n.props.value),e[Mt]=wn(n),Zt(e,"change",()=>{e[Mt](co(e))})},beforeUpdate(e,{value:t,oldValue:n},o){e[Mt]=wn(o),t!==n&&(e.checked=Rn(t,o.props.value))}},Cc={deep:!0,created(e,{value:t,modifiers:{number:n}},o){const s=go(t);Zt(e,"change",()=>{const r=Array.prototype.filter.call(e.options,a=>a.selected).map(a=>n?Bo(co(a)):co(a));e[Mt](e.multiple?s?new Set(r):r:r[0]),e._assigning=!0,jt(()=>{e._assigning=!1})}),e[Mt]=wn(o)},mounted(e,{value:t,oldValue:n,modifiers:{number:o}}){kl(e,t,n,o)},beforeUpdate(e,t,n){e[Mt]=wn(n)},updated(e,{value:t,oldValue:n,modifiers:{number:o}}){e._assigning||kl(e,t,n,o)}};function kl(e,t,n,o){const s=e.multiple,r=Me(t);if(!(s&&!r&&!go(t))){for(let a=0,l=e.options.length;a<l;a++){const i=e.options[a],u=co(i);if(s)if(r){const c=typeof u;c==="string"||c==="number"?i.selected=t.includes(o?Bo(u):u):i.selected=Va(t,u)>-1}else i.selected=t.has(u);else if(Rn(co(i),t)){e.selectedIndex!==a&&(e.selectedIndex=a);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function co(e){return"_value"in e?e._value:e.value}function Sc(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const lh={created(e,t,n){gs(e,t,n,null,"created")},mounted(e,t,n){gs(e,t,n,null,"mounted")},beforeUpdate(e,t,n,o){gs(e,t,n,o,"beforeUpdate")},updated(e,t,n,o){gs(e,t,n,o,"updated")}};function uh(e,t){switch(e){case"SELECT":return Cc;case"TEXTAREA":return ua;default:switch(t){case"checkbox":return mr;case"radio":return ih;default:return ua}}}function gs(e,t,n,o,s){const a=uh(e.tagName,n.props&&n.props.type)[s];a&&a(e,t,n,o)}const ch=["ctrl","shift","alt","meta"],dh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>ch.some(n=>e[`${n}Key`]&&!t.includes(n))},ct=(e,t)=>{const n=e._withMods||(e._withMods={}),o=t.join(".");return n[o]||(n[o]=(s,...r)=>{for(let a=0;a<t.length;a++){const l=dh[t[a]];if(l&&l(s,t))return}return e(s,...r)})},ph={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Tc=(e,t)=>{const n=e._withKeys||(e._withKeys={}),o=t.join(".");return n[o]||(n[o]=s=>{if(!("key"in s))return;const r=$n(s.key);if(t.some(a=>a===r||ph[a]===r))return e(s)})},fh=pt({patchProp:sh},Nf);let xl;function hh(){return xl||(xl=Tf(fh))}const mh=(...e)=>{const t=hh().createApp(...e),{mount:n}=t;return t.mount=o=>{const s=vh(o);if(!s)return;const r=t._component;!Ie(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,gh(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},t};function gh(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function vh(e){return ot(e)?document.querySelector(e):e}function ca(e,t={},n){for(const o in e){const s=e[o],r=n?`${n}:${o}`:o;typeof s=="object"&&s!==null?ca(s,t,r):typeof s=="function"&&(t[r]=s)}return t}const yh={run:e=>e()},bh=()=>yh,Ac=typeof console.createTask<"u"?console.createTask:bh;function wh(e,t){const n=t.shift(),o=Ac(n);return e.reduce((s,r)=>s.then(()=>o.run(()=>r(...t))),Promise.resolve())}function kh(e,t){const n=t.shift(),o=Ac(n);return Promise.all(e.map(s=>o.run(()=>s(...t))))}function Hr(e,t){for(const n of[...e])n(t)}class xh{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,o={}){if(!t||typeof n!="function")return()=>{};const s=t;let r;for(;this._deprecatedHooks[t];)r=this._deprecatedHooks[t],t=r.to;if(r&&!o.allowDeprecated){let a=r.message;a||(a=`${s} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(a)||(console.warn(a),this._deprecatedMessages.add(a))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let o,s=(...r)=>(typeof o=="function"&&o(),o=void 0,s=void 0,n(...r));return o=this.hook(t,s),o}removeHook(t,n){if(this._hooks[t]){const o=this._hooks[t].indexOf(n);o!==-1&&this._hooks[t].splice(o,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const o=this._hooks[t]||[];delete this._hooks[t];for(const s of o)this.hook(t,s)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=ca(t),o=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of o.splice(0,o.length))s()}}removeHooks(t){const n=ca(t);for(const o in n)this.removeHook(o,n[o])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(wh,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(kh,t,...n)}callHookWith(t,n,...o){const s=this._before||this._after?{name:n,args:o,context:{}}:void 0;this._before&&Hr(this._before,s);const r=t(n in this._hooks?[...this._hooks[n]]:[],o);return r instanceof Promise?r.finally(()=>{this._after&&s&&Hr(this._after,s)}):(this._after&&s&&Hr(this._after,s),r)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Ch(){return new xh}function Sh(e){return Array.isArray(e)?e:[e]}const Th=["title","titleTemplate","script","style","noscript"],Es=["base","meta","link","style","script","noscript"],Ah=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],_h=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],_c=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],Mh=typeof window<"u";function ti(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Cl(e){return e._h||ti(e._d?e._d:`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function Mc(e,t){const{props:n,tag:o}=e;if(_h.includes(o))return o;if(o==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];o==="meta"&&s.push("name","property","http-equiv");for(const r of s)if(typeof n[r]<"u"){const a=String(n[r]);return t&&!t(a)?!1:`${o}:${r}:${a}`}return!1}function Sl(e,t){return e==null?t||null:typeof e=="function"?e(t):e}async function Ph(e,t,n){const o={tag:e,props:await Pc(typeof t=="object"&&typeof t!="function"&&!(t instanceof Promise)?{...t}:{[["script","noscript","style"].includes(e)?"innerHTML":"textContent"]:t},["templateParams","titleTemplate"].includes(e))};return _c.forEach(s=>{const r=typeof o.props[s]<"u"?o.props[s]:n[s];typeof r<"u"&&((!["innerHTML","textContent","children"].includes(s)||Th.includes(o.tag))&&(o[s==="children"?"innerHTML":s]=r),delete o.props[s])}),o.props.body&&(o.tagPosition="bodyClose",delete o.props.body),o.tag==="script"&&typeof o.innerHTML=="object"&&(o.innerHTML=JSON.stringify(o.innerHTML),o.props.type=o.props.type||"application/json"),Array.isArray(o.props.content)?o.props.content.map(s=>({...o,props:{...o.props,content:s}})):o}function Eh(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function Pc(e,t){for(const n of Object.keys(e)){if(n==="class"){e[n]=Eh(e[n]);continue}if(e[n]instanceof Promise&&(e[n]=await e[n]),!t&&!_c.includes(n)){const o=String(e[n]),s=n.startsWith("data-");o==="true"||o===""?e[n]=s?"true":!0:e[n]||(s&&o==="false"?e[n]="false":delete e[n])}}return e}const Ih=10;async function Lh(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,o])=>typeof o<"u"&&Ah.includes(n)).forEach(([n,o])=>{const s=Sh(o);t.push(...s.map(r=>Ph(n,r,e)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,o)=>(n._e=e._i,e.mode&&(n._m=e.mode),n._p=(e._i<<Ih)+o,n))}const Tl={base:-10,title:10},Al={critical:-80,high:-10,low:20};function Gs(e){let t=100;const n=e.tagPriority;return typeof n=="number"?n:(e.tag==="meta"?(e.props["http-equiv"]==="content-security-policy"&&(t=-30),e.props.charset&&(t=-20),e.props.name==="viewport"&&(t=-15)):e.tag==="link"&&e.props.rel==="preconnect"?t=20:e.tag in Tl&&(t=Tl[e.tag]),typeof n=="string"&&n in Al?t+Al[n]:t)}const zh=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Ec=["onload","onerror","onabort","onprogress","onloadstart"],an="%separator";function Is(e,t,n){if(typeof e!="string"||!e.includes("%"))return e;function o(a){let l;return["s","pageTitle"].includes(a)?l=t.pageTitle:a.includes(".")?l=a.split(".").reduce((i,u)=>i&&i[u]||void 0,t):l=t[a],typeof l<"u"?(l||"").replace(/"/g,'\\"'):!1}let s=e;try{s=decodeURI(e)}catch{}return(s.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(a=>{const l=o(a.slice(1));typeof l=="string"&&(e=e.replace(new RegExp(`\\${a}(\\W|$)`,"g"),(i,u)=>`${l}${u}`).trim())}),e.includes(an)&&(e.endsWith(an)&&(e=e.slice(0,-an.length).trim()),e.startsWith(an)&&(e=e.slice(an.length).trim()),e=e.replace(new RegExp(`\\${an}\\s*\\${an}`,"g"),an),e=Is(e,{separator:n},n)),e}async function Rh(e){const t={tag:e.tagName.toLowerCase(),props:await Pc(e.getAttributeNames().reduce((n,o)=>({...n,[o]:e.getAttribute(o)}),{})),innerHTML:e.innerHTML};return t._d=Mc(t),t}async function jh(e,t={}){var c;const n=t.document||e.resolvedOptions.document;if(!n)return;const o={shouldRender:e.dirty,tags:[]};if(await e.hooks.callHook("dom:beforeRender",o),!o.shouldRender)return;const s=(await e.resolveTags()).map(p=>({tag:p,id:Es.includes(p.tag)?Cl(p):p.tag,shouldRender:!0}));let r=e._dom;if(!r){r={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const p of["body","head"]){const f=(c=n==null?void 0:n[p])==null?void 0:c.children;for(const m of[...f].filter(v=>Es.includes(v.tagName.toLowerCase())))r.elMap[m.getAttribute("data-hid")||Cl(await Rh(m))]=m}}r.pendingSideEffects={...r.sideEffects||{}},r.sideEffects={};function a(p,f,m){const v=`${p}:${f}`;r.sideEffects[v]=m,delete r.pendingSideEffects[v]}function l({id:p,$el:f,tag:m}){const v=m.tag.endsWith("Attrs");r.elMap[p]=f,v||(["textContent","innerHTML"].forEach(w=>{m[w]&&m[w]!==f[w]&&(f[w]=m[w])}),a(p,"el",()=>{r.elMap[p].remove(),delete r.elMap[p]})),Object.entries(m.props).forEach(([w,S])=>{const z=`attr:${w}`;if(w==="class")for(const $ of(S||"").split(" ").filter(Boolean))v&&a(p,`${z}:${$}`,()=>f.classList.remove($)),!f.classList.contains($)&&f.classList.add($);else f.getAttribute(w)!==S&&f.setAttribute(w,S===!0?"":String(S)),v&&a(p,z,()=>f.removeAttribute(w))})}const i=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const p of s){const{tag:f,shouldRender:m,id:v}=p;if(m){if(f.tag==="title"){n.title=f.textContent;continue}p.$el=p.$el||r.elMap[v],p.$el?l(p):Es.includes(f.tag)&&i.push(p)}}for(const p of i){const f=p.tag.tagPosition||"head";p.$el=n.createElement(p.tag.tag),l(p),u[f]=u[f]||n.createDocumentFragment(),u[f].appendChild(p.$el)}for(const p of s)await e.hooks.callHook("dom:renderTag",p,n,a);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose),Object.values(r.pendingSideEffects).forEach(p=>p()),e._dom=r,e.dirty=!1,await e.hooks.callHook("dom:rendered",{renders:s})}async function Vh(e,t={}){const n=t.delayFn||(o=>setTimeout(o,10));return e._domUpdatePromise=e._domUpdatePromise||new Promise(o=>n(async()=>{await jh(e,t),delete e._domUpdatePromise,o()}))}function Oh(e){return t=>{var o,s;const n=((s=(o=t.resolvedOptions.document)==null?void 0:o.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&t.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(r){Vh(r,e)}}}}}const Bh=["templateParams","htmlAttrs","bodyAttrs"],Dh={hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(o=>{e.props[o]&&(e.key=e.props[o],delete e.props[o])});const n=Mc(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(o=>{const s=(o.key?`${o.tag}:${o.key}`:o._d)||o._p,r=t[s];if(r){let l=o==null?void 0:o.tagDuplicateStrategy;if(!l&&Bh.includes(o.tag)&&(l="merge"),l==="merge"){const i=r.props;["class","style"].forEach(u=>{i[u]&&(o.props[u]?(u==="style"&&!i[u].endsWith(";")&&(i[u]+=";"),o.props[u]=`${i[u]} ${o.props[u]}`):o.props[u]=i[u])}),t[s].props={...i,...o.props};return}else if(o._e===r._e){r._duped=r._duped||[],o._d=`${r._d}:${r._duped.length+1}`,r._duped.push(o);return}else if(Gs(o)>Gs(r))return}const a=Object.keys(o.props).length+(o.innerHTML?1:0)+(o.textContent?1:0);if(Es.includes(o.tag)&&a===0){delete t[s];return}t[s]=o});const n=[];Object.values(t).forEach(o=>{const s=o._duped;delete o._duped,n.push(o),s&&n.push(...s)}),e.tags=n,e.tags=e.tags.filter(o=>!(o.tag==="meta"&&(o.props.name||o.props.property)&&!o.props.content))}}},Hh={mode:"server",hooks:{"tags:resolve":function(e){const t={};e.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{t[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(t).length&&e.tags.push({tag:"script",innerHTML:JSON.stringify(t),props:{id:"unhead:payload",type:"application/json"}})}}},$h=["script","link","bodyAttrs"];function Nh(e){const t={},n={};return Object.entries(e.props).forEach(([o,s])=>{o.startsWith("on")&&typeof s=="function"?(Ec.includes(o)&&(t[o]=`this.dataset.${o} = true`),n[o]=s):t[o]=s}),{props:t,eventHandlers:n}}const Fh=e=>({hooks:{"tags:resolve":function(t){for(const n of t.tags)if($h.includes(n.tag)){const{props:o,eventHandlers:s}=Nh(n);n.props=o,Object.keys(s).length&&((n.props.src||n.props.href)&&(n.key=n.key||ti(n.props.src||n.props.href)),n._eventHandlers=s)}},"dom:renderTag":function(t,n,o){if(!t.tag._eventHandlers)return;const s=t.tag.tag==="bodyAttrs"?n.defaultView:t.$el;Object.entries(t.tag._eventHandlers).forEach(([r,a])=>{const l=`${t.tag._d||t.tag._p}:${r}`,i=r.slice(2).toLowerCase(),u=`data-h-${i}`;if(o(t.id,l,()=>{}),t.$el.hasAttribute(u))return;t.$el.setAttribute(u,"");let c;const p=f=>{a(f),c==null||c.disconnect()};r in t.$el.dataset?p(new Event(r.replace("on",""))):Ec.includes(r)&&typeof MutationObserver<"u"?(c=new MutationObserver(f=>{f.some(v=>v.attributeName===`data-${r}`)&&(p(new Event(r.replace("on",""))),c==null||c.disconnect())}),c.observe(t.$el,{attributes:!0})):s.addEventListener(i,p),o(t.id,l,()=>{c==null||c.disconnect(),s.removeEventListener(i,p),t.$el.removeAttribute(u)})})}}}),Uh=["link","style","script","noscript"],Wh={hooks:{"tag:normalise":({tag:e})=>{e.key&&Uh.includes(e.tag)&&(e.props["data-hid"]=e._h=ti(e.key))}}},qh={hooks:{"tags:resolve":e=>{const t=n=>{var o;return(o=e.tags.find(s=>s._d===n))==null?void 0:o._p};for(const{prefix:n,offset:o}of zh)for(const s of e.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(n))){const r=t(s.tagPriority.replace(n,""));typeof r<"u"&&(s._p=r+o)}e.tags.sort((n,o)=>n._p-o._p).sort((n,o)=>Gs(n)-Gs(o))}}},Gh={meta:"content",link:"href",htmlAttrs:"lang"},Jh=e=>({hooks:{"tags:resolve":t=>{var l;const{tags:n}=t,o=(l=n.find(i=>i.tag==="title"))==null?void 0:l.textContent,s=n.findIndex(i=>i.tag==="templateParams"),r=s!==-1?n[s].props:{},a=r.separator||"|";delete r.separator,r.pageTitle=Is(r.pageTitle||o||"",r,a);for(const i of n.filter(u=>u.processTemplateParams!==!1)){const u=Gh[i.tag];u&&typeof i.props[u]=="string"?i.props[u]=Is(i.props[u],r,a):(i.processTemplateParams===!0||["titleTemplate","title"].includes(i.tag))&&["innerHTML","textContent"].forEach(c=>{typeof i[c]=="string"&&(i[c]=Is(i[c],r,a))})}e._templateParams=r,e._separator=a,t.tags=n.filter(i=>i.tag!=="templateParams")}}}),Qh={hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(s=>s.tag==="titleTemplate");const o=t.findIndex(s=>s.tag==="title");if(o!==-1&&n!==-1){const s=Sl(t[n].textContent,t[o].textContent);s!==null?t[o].textContent=s||t[o].textContent:delete t[o]}else if(n!==-1){const s=Sl(t[n].textContent);s!==null&&(t[n].textContent=s,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}},Kh={hooks:{"tags:afterResolve":function(e){for(const t of e.tags)typeof t.innerHTML=="string"&&(t.innerHTML&&["application/ld+json","application/json"].includes(t.props.type)?t.innerHTML=t.innerHTML.replace(/</g,"\\u003C"):t.innerHTML=t.innerHTML.replace(new RegExp(`</${t.tag}`,"g"),`<\\/${t.tag}`))}}};let Ic;function Yh(e={}){const t=Zh(e);return t.use(Oh()),Ic=t}function _l(e,t){return!e||e==="server"&&t||e==="client"&&!t}function Zh(e={}){const t=Ch();t.addHooks(e.hooks||{}),e.document=e.document||(Mh?document:void 0);const n=!e.document,o=()=>{l.dirty=!0,t.callHook("entries:updated",l)};let s=0,r=[];const a=[],l={plugins:a,dirty:!1,resolvedOptions:e,hooks:t,headEntries(){return r},use(i){const u=typeof i=="function"?i(l):i;(!u.key||!a.some(c=>c.key===u.key))&&(a.push(u),_l(u.mode,n)&&t.addHooks(u.hooks||{}))},push(i,u){u==null||delete u.head;const c={_i:s++,input:i,...u};return _l(c.mode,n)&&(r.push(c),o()),{dispose(){r=r.filter(p=>p._i!==c._i),t.callHook("entries:updated",l),o()},patch(p){r=r.map(f=>(f._i===c._i&&(f.input=c.input=p),f)),o()}}},async resolveTags(){const i={tags:[],entries:[...r]};await t.callHook("entries:resolve",i);for(const u of i.entries){const c=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(c):c),u.resolvedInput)for(const p of await Lh(u)){const f={tag:p,entry:u,resolvedOptions:l.resolvedOptions};await t.callHook("tag:normalise",f),i.tags.push(f.tag)}}return await t.callHook("tags:beforeResolve",i),await t.callHook("tags:resolve",i),await t.callHook("tags:afterResolve",i),i.tags},ssr:n};return[Dh,Hh,Fh,Wh,qh,Jh,Qh,Kh,...(e==null?void 0:e.plugins)||[]].forEach(i=>l.use(i)),l.hooks.callHook("init",l),l}function Xh(){return Ic}const em=xc.startsWith("3");function tm(e){return typeof e=="function"?e():me(e)}function Js(e,t=""){if(e instanceof Promise)return e;const n=tm(e);return!e||!n?n:Array.isArray(n)?n.map(o=>Js(o,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([o,s])=>o==="titleTemplate"||o.startsWith("on")?[o,me(s)]:[o,Js(s,o)])):n}const nm={hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Js(t.input)}}},Lc="usehead";function om(e){return{install(n){em&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Lc,e))}}.install}function sm(e={}){e.domDelayFn=e.domDelayFn||(n=>jt(()=>setTimeout(()=>n(),0)));const t=Yh(e);return t.use(nm),t.install=om(t),t}const Ml=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Pl="__unhead_injection_handler__";function rm(){if(Pl in Ml)return Ml[Pl]();const e=qe(Lc);return e||Xh()}function am(e,t={}){const n=t.head||rm();if(n)return n.ssr?n.push(e,t):im(n,e,t)}function im(e,t,n={}){const o=Y(!1),s=Y({});No(()=>{s.value=o.value?{}:Js(t)});const r=e.push(s.value,n);return _t(s,l=>{r.patch(l)}),Xe()&&(rc(()=>{r.dispose()}),oc(()=>{o.value=!0}),nc(()=>{o.value=!1})),r}const lm=Ce({__name:"App",setup(e){return am({title:"MyApp",meta:[{name:"description",content:"Vue SPA Starter Template"}],script:[{src:"/default.js"}],bodyAttrs:{class:"bg-white dark:bg-black dark:text-white"}}),(t,n)=>{const o=ye("RouterView");return h(),we(o)}}}),um="modulepreload",cm=function(e){return"/"+e},El={},Ve=function(t,n,o){let s=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link");s=Promise.all(n.map(a=>{if(a=cm(a),a in El)return;El[a]=!0;const l=a.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!o)for(let p=r.length-1;p>=0;p--){const f=r[p];if(f.href===a&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${i}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":um,l||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),l)return new Promise((p,f)=>{c.addEventListener("load",p),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>t()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};class ro{constructor(t){_e(this,"errorCode");_e(this,"message");_e(this,"stackTrace");_e(this,"errors");_e(this,"meta");Object.assign(this,t)}}class da{constructor(t){_e(this,"errorCode");_e(this,"fieldName");_e(this,"message");_e(this,"meta");Object.assign(this,t)}}class dm{constructor(t){_e(this,"type");_e(this,"responseStatus");Object.assign(this,t)}}class Il{constructor(t){_e(this,"responseStatus");Object.assign(this,t)}}var Ll;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSED=2]="CLOSED"})(Ll||(Ll={}));class Ne{}_e(Ne,"Get","GET"),_e(Ne,"Post","POST"),_e(Ne,"Put","PUT"),_e(Ne,"Delete","DELETE"),_e(Ne,"Patch","PATCH"),_e(Ne,"Head","HEAD"),_e(Ne,"Options","OPTIONS"),_e(Ne,"hasRequestBody",t=>!(t==="GET"||t==="DELETE"||t==="HEAD"||t==="OPTIONS"));class pm{constructor(t){_e(this,"refreshToken");_e(this,"useTokenCookie");Object.assign(this,t)}createResponse(){return new fm}getTypeName(){return"GetAccessToken"}getMethod(){return"POST"}}class fm{constructor(){_e(this,"accessToken");_e(this,"responseStatus")}}const $t=class $t{constructor(t="/"){_e(this,"baseUrl");_e(this,"replyBaseUrl");_e(this,"oneWayBaseUrl");_e(this,"mode");_e(this,"credentials");_e(this,"headers");_e(this,"userName");_e(this,"password");_e(this,"bearerToken");_e(this,"refreshToken");_e(this,"refreshTokenUri");_e(this,"useTokenCookie");_e(this,"enableAutoRefreshToken");_e(this,"requestFilter");_e(this,"responseFilter");_e(this,"exceptionFilter");_e(this,"urlFilter");_e(this,"onAuthenticationRequired");_e(this,"manageCookies");_e(this,"cookies");_e(this,"parseJson");this.baseUrl=t,this.mode="cors",this.credentials="include",this.headers=new Headers,this.headers.set("Content-Type","application/json"),this.manageCookies=typeof document>"u",this.cookies={},this.enableAutoRefreshToken=!0,this.basePath="api"}setCredentials(t,n){this.userName=t,this.password=n}useBasePath(t){return this.basePath=t,this}set basePath(t){t?(this.replyBaseUrl=It(this.baseUrl,t)+"/",this.oneWayBaseUrl=It(this.baseUrl,t)+"/"):(this.replyBaseUrl=It(this.baseUrl,"json","reply")+"/",this.oneWayBaseUrl=It(this.baseUrl,"json","oneway")+"/")}apply(t){return t(this),this}get(t,n){return typeof t!="string"?this.fetch(Ne.Get,t,n):this.fetch(Ne.Get,null,n,this.toAbsoluteUrl(t))}delete(t,n){return typeof t!="string"?this.fetch(Ne.Delete,t,n):this.fetch(Ne.Delete,null,n,this.toAbsoluteUrl(t))}post(t,n){return this.fetch(Ne.Post,t,n)}postToUrl(t,n,o){return this.fetch(Ne.Post,n,o,this.toAbsoluteUrl(t))}postBody(t,n,o){return this.fetchBody(Ne.Post,t,n,o)}put(t,n){return this.fetch(Ne.Put,t,n)}putToUrl(t,n,o){return this.fetch(Ne.Put,n,o,this.toAbsoluteUrl(t))}putBody(t,n,o){return this.fetchBody(Ne.Put,t,n,o)}patch(t,n){return this.fetch(Ne.Patch,t,n)}patchToUrl(t,n,o){return this.fetch(Ne.Patch,n,o,this.toAbsoluteUrl(t))}patchBody(t,n,o){return this.fetchBody(Ne.Patch,t,n,o)}publish(t,n){return this.sendOneWay(t,n)}sendOneWay(t,n){const o=It(this.oneWayBaseUrl,Qn(t));return this.fetch(Ne.Post,t,null,o)}sendAll(t){if(t.length==0)return Promise.resolve([]);const n=It(this.replyBaseUrl,Qn(t[0])+"[]");return this.fetch(Ne.Post,t,null,n)}sendAllOneWay(t){if(t.length==0)return Promise.resolve(void 0);const n=It(this.oneWayBaseUrl,Qn(t[0])+"[]");return this.fetch(Ne.Post,t,null,n).then(o=>{})}createUrlFromDto(t,n){let o=It(this.replyBaseUrl,Qn(n));return Ne.hasRequestBody(t)||(o=tn(o,n)),o}toAbsoluteUrl(t){return t.startsWith("http://")||t.startsWith("https://")?t:It(this.baseUrl,t)}deleteCookie(t){this.manageCookies?delete this.cookies[t]:document&&(document.cookie=t+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/")}createRequest({method:t,request:n,url:o,args:s,body:r}){if(o||(o=this.createUrlFromDto(t,n)),s&&(o=tn(o,s)),this.bearerToken!=null?this.headers.set("Authorization","Bearer "+this.bearerToken):this.userName!=null&&this.headers.set("Authorization","Basic "+$t.toBase64(`${this.userName}:${this.password}`)),this.manageCookies){let u=Object.keys(this.cookies).map(c=>{let p=this.cookies[c];return p.expires&&p.expires<new Date?null:`${p.name}=${encodeURIComponent(p.value)}`}).filter(c=>!!c);u.length>0?this.headers.set("Cookie",u.join("; ")):this.headers.delete("Cookie")}let a=new Headers(this.headers),l=Ne.hasRequestBody(t),i={url:o,method:t,mode:this.mode,credentials:this.credentials,headers:a,compress:!1};return l&&(i.body=r||JSON.stringify(n),zl(r)&&(i.body=Hm(r),a.delete("Content-Type"))),this.requestFilter!=null&&this.requestFilter(i),$t.globalRequestFilter!=null&&$t.globalRequestFilter(i),i}json(t){return this.parseJson?this.parseJson(t):t.text().then(n=>n.length>0?JSON.parse(n):null)}applyResponseFilters(t){this.responseFilter!=null&&this.responseFilter(t),$t.globalResponseFilter!=null&&$t.globalResponseFilter(t)}createResponse(t,n){if(!t.ok)throw this.applyResponseFilters(t),t;if(this.manageCookies){let l=[];t.headers.forEach((i,u)=>{switch(u.toLowerCase()){case"set-cookie":i.split(",").forEach(p=>l.push(p));break}}),l.forEach(i=>{let u=Mm(i);u&&(this.cookies[u.name]=u)})}t.headers.forEach((l,i)=>{switch(i.toLowerCase()){case"x-cookies":l.split(",").indexOf("ss-reftok")>=0&&(this.useTokenCookie=!0);break}}),this.applyResponseFilters(t);let o=n&&typeof n!="string"&&typeof n.createResponse=="function"?n.createResponse():null;if(typeof o=="string")return t.text().then(l=>l);let s=t.headers.get("content-type"),r=s&&s.indexOf("application/json")!==-1;if(r)return this.json(t).then(l=>l);if(typeof Uint8Array<"u"&&o instanceof Uint8Array){if(typeof t.arrayBuffer!="function")throw new Error("This fetch polyfill does not implement 'arrayBuffer'");return t.arrayBuffer().then(l=>new Uint8Array(l))}else if(typeof Blob=="function"&&o instanceof Blob){if(typeof t.blob!="function")throw new Error("This fetch polyfill does not implement 'blob'");return t.blob().then(l=>l)}let a=t.headers.get("content-length");return a==="0"||a==null&&!r?t.text().then(l=>o):this.json(t).then(l=>l)}handleError(t,n,o=null){if(n instanceof Error)throw this.raiseError(t,n);if(n.bodyUsed)throw this.raiseError(n,$r(n.status,n.statusText,o));return typeof n.json>"u"&&n.responseStatus?new Promise((r,a)=>a(this.raiseError(null,n))):this.json(n).then(r=>{let a=Vn(r);throw a.responseStatus?(o!=null&&(a.type=o),a):$r(n.status,n.statusText,o)}).catch(r=>{throw r instanceof Error||typeof window<"u"&&window.DOMException&&r instanceof window.DOMException?this.raiseError(n,$r(n.status,n.statusText,o)):this.raiseError(n,r)})}fetch(t,n,o,s){return this.sendRequest({method:t,request:n,args:o,url:s})}fetchBody(t,n,o,s){let r=It(this.replyBaseUrl,Qn(n));return this.sendRequest({method:t,request:o,body:typeof o=="string"||zl(o)?o:JSON.stringify(o),url:tn(r,n),args:s,returns:n})}sendRequest(t){const n=this.createRequest(t),o=t.returns||t.request;let s=null;const r=()=>{const a=this.createRequest(t);return this.urlFilter&&this.urlFilter(a.url),fetch(a.url,a).then(l=>this.createResponse(l,o)).catch(l=>this.handleError(s,l))};return this.urlFilter&&this.urlFilter(n.url),fetch(n.url,n).then(a=>(s=a,this.createResponse(a,o))).catch(a=>{if(a.status===401){if(this.enableAutoRefreshToken&&(this.refreshToken||this.useTokenCookie||this.cookies["ss-reftok"]!=null)){const l=new pm({refreshToken:this.refreshToken,useTokenCookie:!!this.useTokenCookie});let i=this.refreshTokenUri||this.createUrlFromDto(Ne.Post,l);this.useTokenCookie&&(this.bearerToken=null,this.headers.delete("Authorization"));let u=this.createRequest({method:Ne.Post,request:l,args:null,url:i});return fetch(i,u).then(c=>this.createResponse(c,l).then(p=>(this.bearerToken=(p==null?void 0:p.accessToken)||null,r()))).catch(c=>this.onAuthenticationRequired?this.onAuthenticationRequired().then(r).catch(p=>this.handleError(s,p,"RefreshTokenException")):this.handleError(s,c,"RefreshTokenException"))}else if(this.onAuthenticationRequired)return this.onAuthenticationRequired().then(r)}return this.handleError(s,a)})}raiseError(t,n){return this.exceptionFilter!=null&&this.exceptionFilter(t,n),n}send(t,n,o){return this.sendRequest({method:Jn(t),request:t,args:n,url:o})}sendVoid(t,n,o){return this.sendRequest({method:Jn(t),request:t,args:n,url:o})}async api(t,n,o){try{const s=await this.fetch(Jn(t,o),t,n);return new nt({response:s})}catch(s){return new nt({error:vs(s)})}}async apiVoid(t,n,o){try{const s=await this.fetch(Jn(t,o),t,n);return new nt({response:s??new Il})}catch(s){return new nt({error:vs(s)})}}async apiForm(t,n,o,s){try{const r=await this.fetchBody(Jn(t,s),t,n,o);return new nt({response:r})}catch(r){return new nt({error:vs(r)})}}async apiFormVoid(t,n,o,s){try{const r=await this.fetchBody(Jn(t,s),t,n,o);return new nt({response:r??new Il})}catch(r){return new nt({error:vs(r)})}}};_e($t,"globalRequestFilter"),_e($t,"globalResponseFilter"),_e($t,"toBase64");let pa=$t;function Jn(e,t){return t??(typeof e.getMethod=="function"?e.getMethod():Ne.Post)}function vs(e){return e.responseStatus??e.ResponseStatus??(e.errorCode?e:e.message?hm(e.message,e.errorCode):null)}class nt{constructor(t){_e(this,"response");_e(this,"error");Object.assign(this,t)}get completed(){return this.response!=null||this.error!=null}get failed(){var t,n;return((t=this.error)==null?void 0:t.errorCode)!=null||((n=this.error)==null?void 0:n.message)!=null}get succeeded(){return!this.failed&&this.response!=null}get errorMessage(){var t;return(t=this.error)==null?void 0:t.message}get errorCode(){var t;return(t=this.error)==null?void 0:t.errorCode}get errors(){var t;return((t=this.error)==null?void 0:t.errors)??[]}get errorSummary(){return this.error!=null&&this.errors.length==0?this.errorMessage:null}fieldError(t){var o;let n=t.toLowerCase();return(o=this.errors)==null?void 0:o.find(s=>s.fieldName.toLowerCase()==n)}fieldErrorMessage(t){var n;return(n=this.fieldError(t))==null?void 0:n.message}hasFieldError(t){return this.fieldError(t)!=null}showSummary(t=[]){return this.failed?t.every(n=>!this.hasFieldError(n)):!1}summaryMessage(t=[]){if(this.showSummary(t)){let n=t.map(s=>s.toLowerCase());return n.find(s=>n.indexOf(s.toLowerCase())==-1)??this.errorMessage}}addFieldError(t,n,o="Exception"){this.error||(this.error=new ro);const s=this.fieldError(t);s!=null?(s.errorCode=o,s.message=n):this.error.errors.push(new da({fieldName:t,errorCode:o,message:n}))}}function hm(e,t="Exception"){return new ro({errorCode:t,message:e})}function zl(e){return typeof window<"u"&&e instanceof FormData}function $r(e,t,n=null){return Vl(new dm,s=>{n!=null&&(s.type=n),s.responseStatus=Vl(new ro,r=>{r.errorCode=e&&e.toString(),r.message=t})})}function zc(e){return e&&e.charAt(0).toLowerCase()+e.substring(1)}function Et(e){return e&&e.charAt(0).toUpperCase()+e.substring(1)}function Rl(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function dt(e,t){return e==null?null:t(e)}function fa(e){if(!e||!(e instanceof Object)||Array.isArray(e))return e;let t={};for(let n in e)if(e.hasOwnProperty(n)){const o=zc(n),s=e[n];Array.isArray(s)?t[o]=s.map(r=>fa(r)):s instanceof Object?t[o]=fa(s):t[o]=s}return t}function Vn(e){return Vn&&(e.responseStatus||e.errors?e:fa(e))}function Qn(e){if(!e)return"null";if(typeof e.getTypeName=="function")return e.getTypeName();let t=e&&e.constructor;if(t==null)throw`${e} doesn't have constructor`;if(t.name)return t.name;let n=t.toString();return n.substring(9,n.indexOf("("))}function Kn(e,t){if(!e)return[e];let n=e.indexOf(t);return n>=0?[e.substring(0,n),e.substring(n+1)]:[e]}function ts(e,t){if(e==null)return null;let n=e.indexOf(t);return n==-1?e:e.substring(0,n)}function Ro(e,t){if(e==null)return null;let n=e.indexOf(t);return n==-1?e:e.substring(n+t.length)}function mm(e,t){if(e==null)return null;let n=e.lastIndexOf(t);return n==-1?e:e.substring(0,n)}function On(e,t){if(e==null)return null;let n=e.lastIndexOf(t);return n==-1?e:e.substring(n+t.length)}function gm(e,t=1){return t=Math.abs(t),e&&(t<e.length?e.substring(0,e.length-t):"")}function vm(e){return typeof e!="string"?e:e.replace(/([A-Z]|[0-9]+)/g," $1").replace(/_/g," ").trim()}function it(e){return!e||e.indexOf(" ")>=0?e:vm(Et(e))}const ym=e=>e.charAt(0).toUpperCase()+e.substring(1),bm=e=>e>="A"&&e<="Z",wm=e=>e>="0"&&e<="9",Nr=e=>bm(e)||wm(e);function km(e){let t=[];if(typeof e!="string")return t;let n=0;for(let o=0;o<e.length;o++){let s=e[o],r=o>0?e[o-1]:null,a=o+1<e.length?e[o+1]:null;Nr(s)&&(!Nr(r)||!Nr(a))&&(t.push(e.substring(n,o)),n=o)}return t.push(e.substring(n,e.length)),t.filter(o=>!!o)}function Rc(e){return!e||e.indexOf(" ")>=0?e:ym(km(e).join(" "))}function Qs(e){if(!e||e.indexOf("?")===-1)return{};let t=Ro(e,"?").split("&"),n={};for(let o=0;o<t.length;++o){let s=t[o].split("=");n[s[0]]=s.length>1?decodeURIComponent(s[1].replace(/\+/g," ")):null}return n}function It(...e){let t=[],n,o;for(n=0,o=e.length;n<o;n++){let r=e[n];t=r.indexOf("://")===-1?t.concat(r.split("/")):t.concat(r.lastIndexOf("/")===r.length-1?r.substring(0,r.length-1):r)}let s=[];for(n=0,o=t.length;n<o;n++){let r=t[n];!r||r==="."||(r===".."?s.pop():s.push(r))}return t[0]===""&&s.unshift(""),s.join("/")||(s.length?"/":".")}function tn(e,t){for(let n in t)if(t.hasOwnProperty(n)){let o=t[n];if(typeof o>"u"||typeof o=="function"||typeof o=="symbol")continue;e+=e.indexOf("?")>=0?"&":"?",e+=n+(o===null?"":"="+Cm(o))}return e}function xm(e,t){const n=ts(e,"?"),o=Object.assign(Qs(e),t);return tn(n,o)}function Cm(e){return e==null?"":typeof Uint8Array<"u"&&e instanceof Uint8Array?Sm(e):encodeURIComponent(e)||""}function Sm(e){let t=(3-e.length%3)%3,n="";for(let o,s=e.length,r=0,a=0;a<s;a++)o=a%3,r|=e[a]<<(16>>>o&24),(o===2||e.length-a===1)&&(n+=String.fromCharCode(ys(r>>>18&63),ys(r>>>12&63),ys(r>>>6&63),ys(r&63)),r=0);return t===0?n:n.substring(0,n.length-t)+(t===1?"=":"==")}function ys(e){return e<26?e+65:e<52?e+71:e<62?e-4:e===62?43:e===63?47:65}function Tm(e){return typeof btoa=="function"?btoa(e):Buffer.from(e).toString("base64")}pa.toBase64=e=>Tm(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(t,n)=>String.fromCharCode(new Number("0x"+n).valueOf())));function Am(e){return e&&e[0]=='"'&&e[e.length]=='"'?e.slice(1,-1):e}function _m(e){try{return decodeURIComponent(e)}catch{return e}}function Mm(e){if(!e)return null;let t=null,n=e.split(/; */);for(let o=0;o<n.length;o++){let s=n[o],r=Kn(s,"="),a=r[0].trim(),l=r.length>1?_m(Am(r[1].trim())):null;if(o==0)t={name:a,value:l,path:"/"};else{let i=a.toLowerCase();i=="httponly"?t.httpOnly=!0:i=="secure"?t.secure=!0:i=="expires"?(t.expires=new Date(l),t.expires.toString()==="Invalid Date"&&(t.expires=new Date(l.replace(/-/g," ")))):t[a]=l}}return t}function Pm(e){return Object.prototype.toString.call(e)==="[object Array]"}function Em(){const e=this.responseStatus||this.ResponseStatus;if(e==null)return;const t=e.ErrorCode?Vn(e):e;return!t.errors||t.errors.length==0?t.message||t.errorCode:void 0}function Im(e){const t=this.responseStatus||this.ResponseStatus;if(t==null)return;const n=t.ErrorCode?Vn(t):t,o=Dm(e);if(o&&!(n.errors==null||n.errors.length==0)){const s=o.map(r=>(r||"").toLowerCase());for(let r of n.errors)if(s.indexOf((r.fieldName||"").toLowerCase())!==-1)return;for(let r of n.errors)if(s.indexOf((r.fieldName||"").toLowerCase())===-1)return r.message||r.errorCode}return n.message||n.errorCode||void 0}function on(e){if(e==null)return Em.call(this);const t=this.responseStatus||this.ResponseStatus;if(t==null)return;const n=t.ErrorCode?Vn(t):t;if(n.errors==null||n.errors.length==0)return;const o=n.errors.find(s=>(s.fieldName||"").toLowerCase()==e.toLowerCase());return o?o.message||o.errorCode:void 0}function ns(e){return e&&Object.prototype.toString.call(e)==="[object Date]"&&!isNaN(e)}function Cn(e){return e?ns(e)?e:e[0]=="/"?new Date(parseFloat(/Date\(([^)]+)\)/.exec(e)[1])):new Date(e):null}function gn(e){return e<10?"0"+e:e}function jc(e=new Date){return e.getFullYear()+"/"+gn(e.getMonth()+1)+"/"+gn(e.getDate())}function Lm(e=new Date){return gn((e.getHours()+24)%12||12)+":"+gn(e.getMinutes())+":"+gn(e.getSeconds())+" "+(e.getHours()>12?"PM":"AM")}function zm(e){if(typeof e=="string"&&e.indexOf(":")>=0)return e;const t=e instanceof Date?e.getTime():typeof e=="string"?ni(e)*1e3:e;return Rm(t)}function Rm(e){const t=e%1e3;e=(e-t)/1e3;const n=e%60;e=(e-n)/60;const o=e%60,s=(e-o)/60;let r=gn(s)+":"+gn(o)+":"+gn(n);return t>0?r+"."+jm(`${t}`,3,"0").substring(0,3):r}function jm(e,t,n){if(t=Math.floor(t)||0,t<e.length)return e;n=n?String(n):" ";let o="",s=t-e.length,r=0;for(;o.length<s;)n[r]||(r=0),o+=n[r],r++;return o+e.slice(0)}function Vm(e,t,n){return e.setAttribute(t,n)}function Om(e,t){const n={className:"class",htmlFor:"for"},o=document.createElement(e);if(t!=null&&t.attrs)for(const s in t.attrs)Vm(o,n[s]||s,t.attrs[s]);return t!=null&&t.events&&Bm(o,t.events),t&&t.insertAfter&&t.insertAfter.parentNode.insertBefore(o,t.insertAfter.nextSibling),o}function Ks(e,t){return typeof e=="string"?(t||document).querySelector(e):e||null}function Vc(e,t){var n;return typeof e=="string"?Array.from(((n=t||typeof document<"u"?document:null)==null?void 0:n.querySelectorAll(e))??[]):Array.isArray(e)?e.flatMap(o=>Vc(o,t)):[e]}function Bm(e,t){return Vc(e).forEach(n=>{Object.keys(t).forEach(function(o){let s=t[o];typeof o=="string"&&typeof s=="function"&&n.addEventListener(o,t[o]=s.bind(n))})}),t}function f6(e){return new Promise((t,n)=>{document.body.appendChild(Om("script",{attrs:{src:e},events:{load:t,error:n}}))})}function Oc(e,t){let n=t&&t.duration||300,o=setTimeout(()=>e(!0),n);return()=>{clearTimeout(o),e(!1)}}typeof window<"u"&&window.Element!==void 0&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){let t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(t!==null&&t.nodeType===1);return null}));var jl;(function(e){e.MultiPart="multipart/form-data",e.UrlEncoded="application/x-www-form-urlencoded",e.Json="application/json"})(jl||(jl={}));function Dm(e){return e?Pm(e)?e:e.split(",").map(t=>t.trim()):[]}function Hm(e){for(let[t,n]of e)typeof n=="object"&&n.size===0&&e.delete(t);return e}function $m(e,t){let n=e.length;for(;n>0&&e[n-1]===t;)--n;return n<e.length?e.substring(0,n):e}function Gt(e,t){const n={};for(const o in e)e.hasOwnProperty(o)&&t.indexOf(o)<0&&(n[o]=e[o]);return n}function Nm(e){const t={};for(const n in e){const o=e[n];o!=null&&o!==""&&(t[n]=o)}return t}function Vl(e,t){return t(e),e}function Fm(e,t,n){return e.reduce((o,s)=>(t(o,s),o),n||{})}function Oe(e,t){if(!e||!t)return null;let n=e[t];if(n)return n;if(typeof e=="object"){let o=t.toLowerCase(),s=Object.keys(e).find(r=>r.toLowerCase()===o);return s?e[s]:null}return null}function Um(e){return e==null?"":typeof e=="string"?e.substring(0,6)==="/Date("?Cn(e):e.trim():e}function ni(e){let t=0,n=0,o=0,s=0,r=0,a=Kn(e.substring(1),"T"),l=a.length==2,i=Kn(a[0],"D");if(i.length==2&&(t=parseInt(i[0],10)||0),l){let c=Kn(a[1],"H");c.length==2&&(n=parseInt(c[0],10)||0);let p=Kn(c[c.length-1],"M");p.length==2&&(o=parseInt(p[0],10)||0);let f=Kn(p[p.length-1],"S");f.length==2&&(r=parseFloat(f[0])),s=r|0,r-=s}return t*24*60*60+n*60*60+o*60+s+r}function ha(e){return e==null?null:typeof e=="string"?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&#34;"):`${e}`}function Wm(e,t){for(let n=0,o=t.length;n<o;n++){let s=e.indexOf(t[n]);if(s>=0)return s}return-1}function qm(e){return`/Date(${e.getTime()})/`}function ma(e){let t=[];return e.forEach(n=>Object.keys(n).forEach(o=>{t.indexOf(o)===-1&&t.push(o)})),t}function Gm(){let e={};function t(o,s){let r=Symbol("id");return e[o]||(e[o]={}),e[o][r]=s,{unsubscribe:function(){delete e[o][r],Object.getOwnPropertySymbols(e[o]).length===0&&delete e[o]}}}function n(o,s){e[o]&&Object.getOwnPropertySymbols(e[o]).forEach(r=>e[o][r](s))}return{subscribe:t,publish:n}}var Jm=Object.defineProperty,Qm=(e,t,n)=>t in e?Jm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fe=(e,t,n)=>(Qm(e,typeof t!="symbol"?t+"":t,n),n);const Km={class:"flex items-center"},Ym={key:0,class:"flex-shrink-0 mr-3"},Zm={key:0,class:"h-5 w-5 text-yellow-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Xm=d("path",{"fill-rule":"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"},null,-1),eg=[Xm],tg={key:1,class:"h-5 w-5 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},ng=d("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"},null,-1),og=[ng],sg={key:2,class:"h-5 w-5 text-blue-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},rg=d("path",{"fill-rule":"evenodd",d:"M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"},null,-1),ag=[rg],ig={key:3,class:"h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},lg=d("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z","clip-rule":"evenodd"},null,-1),ug=[lg],cg=Ce({__name:"Alert",props:{type:{default:"warn"},hideIcon:{type:Boolean}},setup(e){const t=e,n=C(()=>t.type=="info"?"bg-blue-50 dark:bg-blue-200":t.type=="error"?"bg-red-50 dark:bg-red-200":t.type=="success"?"bg-green-50 dark:bg-green-200":"bg-yellow-50 dark:bg-yellow-200"),o=C(()=>t.type=="info"?"border-blue-400":t.type=="error"?"border-red-400":t.type=="success"?"border-green-400":"border-yellow-400"),s=C(()=>t.type=="info"?"text-blue-700":t.type=="error"?"text-red-700":t.type=="success"?"text-green-700":"text-yellow-700");return(r,a)=>(h(),y("div",{class:L([n.value,o.value,"border-l-4 p-4"])},[d("div",Km,[r.hideIcon?F("",!0):(h(),y("div",Ym,[r.type=="warn"?(h(),y("svg",Zm,eg)):r.type=="error"?(h(),y("svg",tg,og)):r.type=="info"?(h(),y("svg",sg,ag)):r.type=="success"?(h(),y("svg",ig,ug)):F("",!0)])),d("div",null,[d("p",{class:L([s.value,"text-sm"])},[he(r.$slots,"default")],2)])])],2))}}),dg={key:0,class:"rounded-md bg-green-50 dark:bg-green-200 p-4",role:"alert"},pg={class:"flex"},fg=d("div",{class:"flex-shrink-0"},[d("svg",{class:"h-5 w-5 text-green-400 dark:text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})])],-1),hg={class:"ml-3"},mg={class:"text-sm font-medium text-green-800"},gg={key:0},vg={class:"ml-auto pl-3"},yg={class:"-mx-1.5 -my-1.5"},bg=d("span",{class:"sr-only"},"Dismiss",-1),wg=d("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})],-1),kg=[bg,wg],xg=Ce({__name:"AlertSuccess",props:{message:{}},setup(e){const t=Y(!1);return(n,o)=>t.value?F("",!0):(h(),y("div",dg,[d("div",pg,[fg,d("div",hg,[d("h3",mg,[n.message?(h(),y("span",gg,te(n.message),1)):he(n.$slots,"default",{key:1})])]),d("div",vg,[d("div",yg,[d("button",{type:"button",class:"inline-flex rounded-md bg-green-50 dark:bg-green-200 p-1.5 text-green-500 dark:text-green-600 hover:bg-green-100 dark:hover:bg-green-700 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 dark:ring-offset-green-200",onClick:o[0]||(o[0]=s=>t.value=!0)},kg)])])])]))}}),Cg={class:"flex"},Sg=d("div",{class:"flex-shrink-0"},[d("svg",{class:"h-5 w-5 text-red-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{fill:"currentColor",d:"M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"})])],-1),Tg={class:"ml-3"},Ag={class:"text-sm text-red-700 dark:text-red-200"},_g=Ce({__name:"ErrorSummary",props:{status:{},except:{},class:{}},setup(e){const t=e;let n=qe("ApiState",void 0);const o=C(()=>t.status||n!=null&&n.error.value?Im.call({responseStatus:t.status??(n==null?void 0:n.error.value)},t.except??[]):null);return(s,r)=>o.value?(h(),y("div",{key:0,class:L(`bg-red-50 dark:bg-red-900 border-l-4 border-red-400 p-4 ${s.$props.class}`)},[d("div",Cg,[Sg,d("div",Tg,[d("p",Ag,te(o.value),1)])])],2)):F("",!0)}}),Mg=["id","aria-describedby"],Pg=Ce({__name:"InputDescription",props:{id:{},description:{}},setup(e){return(t,n)=>t.description?(h(),y("div",{key:"description",class:"mt-2 text-sm text-gray-500",id:`${t.id}-description`,"aria-describedby":`${t.id}-description`},[d("div",null,te(t.description),1)],8,Mg)):F("",!0)}});function oi(e){return jc(e).replace(/\//g,"-")}function Bc(e){return e==null?"":zm(e)}function Dc(e,t){e.value=null,jt(()=>e.value=t)}function Yn(e){return Object.keys(e).forEach(t=>{const n=e[t];e[t]=ht(n)?me(n):n}),e}function Bn(e,t,n){n?(t.value=e.entering.cls+" "+e.entering.from,setTimeout(()=>t.value=e.entering.cls+" "+e.entering.to,0)):(t.value=e.leaving.cls+" "+e.leaving.from,setTimeout(()=>t.value=e.leaving.cls+" "+e.leaving.to,0))}function Ls(e){if(typeof document>"u")return;let t=(e==null?void 0:e.after)||document.activeElement,n=t&&t.form;if(n){let o=':not([disabled]):not([tabindex="-1"])',s=n.querySelectorAll(`a:not([disabled]), button${o}, input[type=text]${o}, [tabindex]${o}`),r=Array.prototype.filter.call(s,l=>l.offsetWidth>0||l.offsetHeight>0||l===t),a=r.indexOf(t);a>-1&&(r[a+1]||r[0]).focus()}}function vo(e){if(!e)return null;if(typeof e=="string")return e;const t=typeof e=="function"?new e:typeof e=="object"?e:null;if(!t)throw new Error(`Invalid DTO Type '${typeof e}'`);if(typeof t.getTypeName!="function")throw new Error(`${JSON.stringify(t)} is not a Request DTO`);const n=t.getTypeName();if(!n)throw new Error("DTO Required");return n}function qt(e,t,n){n||(n={});let o=n.cls||n.className||n.class;return o&&(n=Gt(n,["cls","class","className"]),n.class=o),t==null?`<${e}`+ga(n)+"/>":`<${e}`+ga(n)+`>${t||""}</${e}>`}function ga(e){return Object.keys(e).reduce((t,n)=>`${t} ${n}="${ha(e[n])}"`,"")}function gr(e){return Object.assign({target:"_blank",rel:"noopener",class:"text-blue-600"},e)}function ao(e){return hi(e)}let Eg=["string","number","boolean","null","undefined"];function Dn(e){return Eg.indexOf(typeof e)>=0||e instanceof Date}function Wo(e){return!Dn(e)}class Hc{get length(){return typeof localStorage>"u"?0:localStorage.length}getItem(t){return typeof localStorage>"u"?null:localStorage.getItem(t)}setItem(t,n){typeof localStorage>"u"||localStorage.setItem(t,n)}removeItem(t){typeof localStorage>"u"||localStorage.removeItem(t)}clear(){typeof localStorage>"u"||localStorage.clear()}key(t){return typeof localStorage>"u"?null:localStorage.key(t)}}function Ys(e){return typeof e=="string"?JSON.parse(e):null}function si(e){if(typeof history<"u"){const t=xm(location.href,e);history.pushState({},"",t)}}function ri(e,t){if(["function","Function","eval","=>",";"].some(o=>e.includes(o)))throw new Error(`Unsafe script: '${e}'`);const n=Object.assign(Object.keys(globalThis).reduce((o,s)=>(o[s]=void 0,o),{}),t);return new Function("with(this) { return ("+e+") }").call(n)}function va(e){typeof navigator<"u"&&navigator.clipboard.writeText(e)}function ai(e){const t=xe.config.storage.getItem(e);return t?JSON.parse(t):null}function vr(e,t){return tn(`swr.${Qn(e)}`,t?Object.assign({},e,t):e)}function Ig(e){if(e.request){const t=vr(e.request,e.args);xe.config.storage.removeItem(t)}}async function $c(e,t,n,o,s){const r=vr(t,o);n(new nt({response:ai(r)}));const a=await e.api(t,o,s);if(a.succeeded&&a.response){a.response._date=new Date().valueOf();const l=JSON.stringify(a.response);xe.config.storage.setItem(r,l),n(a)}return a}function Nc(e,t){let n=null;return(...o)=>{n&&clearTimeout(n),n=setTimeout(()=>{e(...o)},t||100)}}function Pn(e){return typeof e=="string"?e.split(","):e||[]}function In(e,t){const n=Pn(t);return e.reduce((o,s)=>(o[s]=!n.includes(s),o),{})}function Fc(){return{LocalStore:Hc,dateInputFormat:oi,timeInputFormat:Bc,setRef:Dc,unRefs:Yn,transition:Bn,focusNextElement:Ls,getTypeName:vo,htmlTag:qt,htmlAttrs:ga,linkAttrs:gr,toAppUrl:ao,isPrimitive:Dn,isComplexType:Wo,pushState:si,scopedExpr:ri,copyText:va,fromCache:ai,swrCacheKey:vr,swrClear:Ig,swrApi:$c,asStrings:Pn,asOptions:In,createDebounce:Nc}}const Uc="png,jpg,jpeg,jfif,gif,svg,webp".split(","),Wc={img:"png,jpg,jpeg,gif,svg,webp,png,jpg,jpeg,gif,bmp,tif,tiff,webp,ai,psd,ps".split(","),vid:"avi,m4v,mov,mp4,mpg,mpeg,wmv,webm".split(","),aud:"mp3,mpa,ogg,wav,wma,mid,webm".split(","),ppt:"key,odp,pps,ppt,pptx".split(","),xls:"xls,xlsm,xlsx,ods,csv,tsv".split(","),doc:"doc,docx,pdf,rtf,tex,txt,md,rst,xls,xlsm,xlsx,ods,key,odp,pps,ppt,pptx".split(","),zip:"zip,tar,gz,7z,rar,gzip,deflate,br,iso,dmg,z,lz,lz4,lzh,s7z,apl,arg,jar,war".split(","),exe:"exe,bat,sh,cmd,com,app,msi,run,vb,vbs,js,ws,wsh".split(","),att:"bin,oct,dat".split(",")},Ol=Object.keys(Wc),Kt=(e,t)=>`<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' preserveAspectRatio='xMidYMid meet' viewBox='${e}'>${t}</svg>`,zs={img:Kt("4 4 16 16","<path fill='currentColor' d='M20 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 0H6v6.38l2.19-2.19l5.23 5.23l1-1a1.59 1.59 0 0 1 2.11.11L18 16V6zm-5 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0z'/>"),vid:Kt("0 0 24 24","<path fill='currentColor' d='m14 2l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8m4 18V9h-5V4H6v16h12m-2-2l-2.5-1.7V18H8v-5h5.5v1.7L16 13v5Z'/>"),aud:Kt("0 0 24 24","<path fill='currentColor' d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3v-2z'/>"),ppt:Kt("0 0 48 48","<g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'><path d='M4 8h40'/><path d='M8 8h32v26H8V8Z' clip-rule='evenodd'/><path d='m22 16l5 5l-5 5m-6 16l8-8l8 8'/></g>"),xls:Kt("0 0 256 256","<path fill='currentColor' d='M200 26H72a14 14 0 0 0-14 14v26H40a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h18v26a14 14 0 0 0 14 14h128a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14Zm-42 76h44v52h-44Zm44-62v50h-44V80a14 14 0 0 0-14-14h-2V38h58a2 2 0 0 1 2 2ZM70 40a2 2 0 0 1 2-2h58v28H70ZM38 176V80a2 2 0 0 1 2-2h104a2 2 0 0 1 2 2v96a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2Zm32 40v-26h60v28H72a2 2 0 0 1-2-2Zm130 2h-58v-28h2a14 14 0 0 0 14-14v-10h44v50a2 2 0 0 1-2 2ZM69.2 148.4L84.5 128l-15.3-20.4a6 6 0 1 1 9.6-7.2L92 118l13.2-17.6a6 6 0 0 1 9.6 7.2L99.5 128l15.3 20.4a6 6 0 0 1-9.6 7.2L92 138l-13.2 17.6a6 6 0 1 1-9.6-7.2Z'/>"),doc:Kt("0 0 32 32","<path fill='currentColor' d='M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z'/><path fill='currentColor' d='M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z'/>"),zip:Kt("0 0 16 16","<g fill='currentColor'><path d='M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598l.93.62l.93-.62l-.4-1.598a1 1 0 0 1-.03-.243V7.5z'/><path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z'/></g>"),exe:Kt("0 0 16 16","<path fill='currentColor' fill-rule='evenodd' d='M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM2.575 15.202H.785v-1.073H2.47v-.606H.785v-1.025h1.79v-.648H0v3.999h2.575v-.647ZM6.31 11.85h-.893l-.823 1.439h-.036l-.832-1.439h-.931l1.227 1.983l-1.239 2.016h.861l.853-1.415h.035l.85 1.415h.908l-1.254-1.992L6.31 11.85Zm1.025 3.352h1.79v.647H6.548V11.85h2.576v.648h-1.79v1.025h1.684v.606H7.334v1.073Z'/>"),att:Kt("0 0 24 24","<path fill='currentColor' d='M14 0a5 5 0 0 1 5 5v12a7 7 0 1 1-14 0V9h2v8a5 5 0 0 0 10 0V5a3 3 0 1 0-6 0v12a1 1 0 1 0 2 0V6h2v11a3 3 0 1 1-6 0V5a5 5 0 0 1 5-5Z'/>")},Lg=/[\r\n%#()<>?[\\\]^`{|}]/g,Bl=1024,zg=["Bytes","KB","MB","GB","TB"],Rg=(()=>{const e="application/",t=e+"vnd.openxmlformats-officedocument.",n="image/",o="text/",s="audio/",r="video/",a={jpg:n+"jpeg",tif:n+"tiff",svg:n+"svg+xml",ico:n+"x-icon",ts:o+"typescript",py:o+"x-python",sh:o+"x-sh",mp3:s+"mpeg3",mpg:r+"mpeg",ogv:r+"ogg",xlsx:t+"spreadsheetml.sheet",xltx:t+"spreadsheetml.template",docx:t+"wordprocessingml.document",dotx:t+"wordprocessingml.template",pptx:t+"presentationml.presentation",potx:t+"presentationml.template",ppsx:t+"presentationml.slideshow",mdb:e+"vnd.ms-access"};function l(u,c){u.split(",").forEach(p=>a[p]=c)}function i(u,c){u.split(",").forEach(p=>a[p]=c(p))}return i("jpeg,gif,png,tiff,bmp,webp",u=>n+u),i("jsx,csv,css",u=>o+u),i("aac,ac3,aiff,m4a,m4b,m4p,mid,midi,wav",u=>s+u),i("3gpp,avi,dv,divx,ogg,mp4,webm",u=>r+u),i("rtf,pdf",u=>e+u),l("htm,html,shtm",o+"html"),l("js,mjs,cjs",o+"javascript"),l("yml,yaml",e+"yaml"),l("bat,cmd",e+"bat"),l("xml,csproj,fsproj,vbproj",o+"xml"),l("txt,ps1",o+"plain"),l("qt,mov",r+"quicktime"),l("doc,dot",e+"msword"),l("xls,xlt,xla",e+"excel"),l("ppt,oit,pps,ppa",e+"vnd.ms-powerpoint"),l("cer,crt,der",e+"x-x509-ca-cert"),l("gz,tgz,zip,rar,lzh,z",e+"x-compressed"),l("aaf,aca,asd,bin,cab,chm,class,cur,db,dat,deploy,dll,dsp,exe,fla,ics,inf,mix,msi,mso,obj,ocx,prm,prx,psd,psp,qxd,sea,snp,so,sqlite,toc,ttf,u32,xmp,xsn,xtp",e+"octet-stream"),a})();let ya=[];function jg(e){return e=e.replace(/"/g,"'"),e=e.replace(/>\s+</g,"><"),e=e.replace(/\s{2,}/g," "),e.replace(Lg,encodeURIComponent)}function qc(e){return"data:image/svg+xml;utf8,"+jg(e)}function Vg(e){let t=URL.createObjectURL(e);return ya.push(t),t}function Og(){ya.forEach(e=>{try{URL.revokeObjectURL(e)}catch(t){console.error("URL.revokeObjectURL",t)}}),ya=[]}function Gc(e){if(!e)return null;let t=ts(e,"?");return On(t,"/")}function yr(e){let t=Gc(e);return t==null||t.indexOf(".")===-1?null:On(t,".").toLowerCase()}function Bg(e){let t=yr(e.name);return t&&Uc.indexOf(t)>=0?Vg(e):Zn(e.name)}function Jc(e){if(!e)return!1;if(e.startsWith("blob:")||e.startsWith("data:"))return!0;let t=yr(e);return t&&Uc.indexOf(t)>=0||!1}function Zn(e){if(!e)return null;let t=yr(e);return t==null||Jc(e)?e:Rs(t)||qc(zs.doc)}function Rs(e){let t=Dg(e);return t&&qc(t)||null}function Dg(e){if(zs[e])return zs[e];for(let t=0;t<Ol.length;t++){let n=Ol[t];if(Wc[n].indexOf(e)>=0)return zs[n]}return null}function Qc(e,t=2){if(e===0)return"0 Bytes";const n=t<0?0:t,o=Math.floor(Math.log(e)/Math.log(Bl));return parseFloat((e/Math.pow(Bl,o)).toFixed(n))+" "+zg[o]}function Kc(e,t){e.onerror=null,e.src=Yc(e.src,t)||""}function Yc(e,t){return Rs(On(e,".").toLowerCase())||(t?Rs(t)||t:null)||Rs("doc")}function Dl(e){if(!e)throw new Error("fileNameOrExt required");const t=On(e,".").toLowerCase();return Rg[t]||"application/"+t}class Hg{constructor(t){Fe(this,"view"),Fe(this,"includeTypes"),Object.assign(this,t)}getTypeName(){return"MetadataApp"}getMethod(){return"GET"}createResponse(){return{}}}const po="/metadata/app.json",$g={Boolean:"checkbox",DateTime:"date",DateOnly:"date",DateTimeOffset:"date",TimeSpan:"time",TimeOnly:"time",Byte:"number",Short:"number",Int64:"number",Int32:"number",UInt16:"number",UInt32:"number",UInt64:"number",Single:"number",Double:"number",Decimal:"number",String:"text",Guid:"text",Uri:"text"},Ng={number:"Int32",checkbox:"Boolean",date:"DateTime","datetime-local":"DateTime",time:"TimeSpan"},ba={Byte:"byte",Int16:"short",Int32:"int",Int64:"long",UInt16:"ushort",Unt32:"uint",UInt64:"ulong",Single:"float",Double:"double",Decimal:"decimal"};[...Object.keys(ba),...Object.values(ba)];const Fg={String:"string",Boolean:"bool",...ba};function bs(e){return Fg[e]||e}function Zc(e,t){return e?(t||(t=[]),e==="Nullable`1"?bs(t[0])+"?":e.endsWith("[]")?`List<${bs(e.substring(0,e.length-2))}>`:t.length===0?bs(e):ts(bs(e),"`")+"<"+t.join(",")+">"):""}function Ug(e){return e&&Zc(e.name,e.genericArgs)}class fo{constructor(){Fe(this,"Query"),Fe(this,"QueryInto"),Fe(this,"Create"),Fe(this,"Update"),Fe(this,"Patch"),Fe(this,"Delete")}get AnyQuery(){return this.Query||this.QueryInto}get AnyUpdate(){return this.Patch||this.Update}toArray(){return[this.Query,this.QueryInto,this.Create,this.Update,this.Patch,this.Delete].filter(t=>!!t).map(t=>t)}get empty(){return!this.Query&&!this.QueryInto&&!this.Create&&!this.Update&&!this.Patch&&!this.Delete}add(t){lt.isQueryInto(t)&&!this.QueryInto?this.QueryInto=t:lt.isQuery(t)&&!this.Query?this.Query=t:lt.isCreate(t)&&!this.Create?this.Create=t:lt.isUpdate(t)&&!this.Update?this.Update=t:lt.isPatch(t)&&!this.Patch?this.Patch=t:lt.isDelete(t)&&!this.Delete&&(this.Delete=t)}static from(t){const n=new fo;return t.forEach(o=>{n.add(o)}),n}static forType(t,n){var o;let s=new fo;return t&&(n??(n=(o=xe.metadata.value)==null?void 0:o.api),n==null||n.operations.forEach(r=>{var a;((a=r.dataModel)==null?void 0:a.name)==t&&s.add(r)})),s}}const lt={Create:"ICreateDb`1",Update:"IUpdateDb`1",Patch:"IPatchDb`1",Delete:"IDeleteDb`1",AnyRead:["QueryDb`1","QueryDb`2"],AnyWrite:["ICreateDb`1","IUpdateDb`1","IPatchDb`1","IDeleteDb`1"],isAnyQuery:e=>dt(e.request.inherits,t=>lt.AnyRead.indexOf(t.name)>=0),isQuery:e=>dt(e.request.inherits,t=>t.name==="QueryDb`1"),isQueryInto:e=>dt(e.request.inherits,t=>t.name==="QueryDb`2"),isCrud:e=>{var t;return(t=e.request.implements)==null?void 0:t.some(n=>lt.AnyWrite.indexOf(n.name)>=0)},isCreate:e=>ws(e,lt.Create),isUpdate:e=>ws(e,lt.Update),isPatch:e=>ws(e,lt.Patch),isDelete:e=>ws(e,lt.Delete),model:e=>{var t,n,o;return e?dt(e.inherits,s=>lt.AnyRead.indexOf(s.name)>=0)?(t=e.inherits)==null?void 0:t.genericArgs[0]:(o=(n=e.implements)==null?void 0:n.find(s=>lt.AnyWrite.indexOf(s.name)>=0))==null?void 0:o.genericArgs[0]:null}};function Wg(e){var t;return((t=e.input)==null?void 0:t.type)||br(ii(e))}function Xc(e){return e.endsWith("?")?gm(e,1):e}function br(e){return $g[Xc(e)]}function qg(e){return e&&Ng[e]||"String"}function ii(e){return e.type==="Nullable`1"?e.genericArgs[0]:e.type}function wa(e){return e&&br(e)=="number"||!1}function ed(e){return e&&e.toLowerCase()=="string"||!1}function Gg(e){return e=="List`1"||e.startsWith("List<")||e.endsWith("[]")}function td(e){if(!(e!=null&&e.type))return!1;const t=ii(e);return e.isValueType&&t.indexOf("`")==-1||e.isEnum?!1:br(e.type)==null}function nd(e){var t,n,o,s;if(!(e!=null&&e.type))return!1;const r=ii(e);return e.isValueType&&r.indexOf("`")==-1||e.isEnum||((t=e.input)==null?void 0:t.type)=="hidden"||((n=e.input)==null?void 0:n.type)=="file"||((o=e.input)==null?void 0:o.type)=="tag"||((s=e.input)==null?void 0:s.type)=="combobox"?!0:br(e.type)!=null}function qo(e,t){let n=typeof e=="string"?wr(e):e;n||(console.warn(`Metadata not found for: ${e}`),n={request:{name:e}});let o=function(){return function(r){Object.assign(this,r)}}(),s=function(){function r(a){Object.assign(this,a)}return r.prototype.createResponse=function(){return n.returnsVoid?void 0:new o},r.prototype.getTypeName=function(){return n.request.name},r.prototype.getMethod=function(){return n.method||"POST"},r}();return new s(t)}function Jg(e,t,n={}){let o=function(){return function(r){Object.assign(this,r)}}(),s=function(){function r(a){Object.assign(this,a)}return r.prototype.createResponse=function(){return typeof n.createResponse=="function"?n.createResponse():new o},r.prototype.getTypeName=function(){return e},r.prototype.getMethod=function(){return n.method||"POST"},r}();return new s(t)}function js(e,t){return e?(Object.keys(e).forEach(n=>{let o=e[n];typeof o=="string"?o.startsWith("/Date")&&(e[n]=oi(Cn(o))):o!=null&&typeof o=="object"&&(Array.isArray(o)?e[n]=Array.from(o):e[n]=Object.assign({},o))}),e):{}}function Qg(e,t){let n={};return Array.from(e.elements).forEach(o=>{var s;let r=o;if(!r.id||r.value==null||r.value==="")return;const a=r.id.toLowerCase(),l=t&&t.find(p=>p.name.toLowerCase()==a);let i=l==null?void 0:l.type,u=(s=l==null?void 0:l.genericArgs)==null?void 0:s[0],c=r.type==="checkbox"?r.checked:r.value;wa(i)?c=Number(c):i==="List`1"&&typeof c=="string"&&(c=c.split(",").map(p=>wa(u)?Number(p):p)),n[r.id]=c}),n}function li(e){var t;return((t=e==null?void 0:e.api)==null?void 0:t.operations)&&e.api.operations.length>0}function Kg(e){if(!ui()&&e!=null&&e.assert&&!xe.metadata.value)throw new Error("useMetadata() not configured, see: https://docs.servicestack.net/vue/use-metadata");return xe.metadata.value}function Go(e){return e&&li(e)?(e.date=qm(new Date),xe.metadata.value=e,typeof localStorage<"u"&&localStorage.setItem(po,JSON.stringify(e)),!0):!1}function Yg(){xe.metadata.value=null,typeof localStorage<"u"&&localStorage.removeItem(po)}function ui(){if(xe.metadata.value!=null)return!0;let e=globalThis.Server;if(li(e))Go(e);else{const t=typeof localStorage<"u"?localStorage.getItem(po):null;if(t)try{Go(JSON.parse(t))}catch{console.error(`Could not JSON.parse ${po} from localStorage`)}}return xe.metadata.value!=null}async function Hl(e,t){let n=t?await t():await fetch(e);if(n.ok){let o=await n.text();Go(JSON.parse(o))}else console.error(`Could not download ${t?"AppMetadata":e}: ${n.statusText}`);li(xe.metadata.value)||console.warn("AppMetadata is not available")}async function Zg(e){var t;const{olderThan:n,resolvePath:o,resolve:s}=e||{};let r=ui()&&n!==0;if(r&&n){let a=Cn((t=xe.metadata.value)==null?void 0:t.date);(!a||new Date().getTime()-a.getTime()>n)&&(r=!1)}if(!r){if((o||s)&&(await Hl(o||po,s),xe.metadata.value!=null))return;const a=qe("client");if(a!=null){const l=await a.api(new Hg);l.succeeded&&Go(l.response)}if(xe.metadata.value!=null)return;await Hl(po)}return xe.metadata.value}function Ot(e,t){var n;let o=(n=xe.metadata.value)==null?void 0:n.api;if(!o||!e)return null;let s=o.types.find(l=>l.name.toLowerCase()===e.toLowerCase()&&(!t||l.namespace==t));if(s)return s;let r=wr(e);if(r)return r.request;let a=o.operations.find(l=>l.response&&l.response.name.toLowerCase()===e.toLowerCase()&&(!t||l.response.namespace==t));return a?a.response:null}function wr(e){var t;let n=(t=xe.metadata.value)==null?void 0:t.api;return n?n.operations.find(o=>o.request.name.toLowerCase()===e.toLowerCase()):null}function Xg({dataModel:e}){var t;const n=(t=xe.metadata.value)==null?void 0:t.api;if(!n)return[];let o=n.operations;if(e){const s=typeof e=="string"?Ot(e):e;o=o.filter(r=>od(r.dataModel,s))}return o}function ci(e){return e?Ot(e.name,e.namespace):null}function od(e,t){return e&&t&&e.name===t.name&&(!e.namespace||!t.namespace||e.namespace===t.namespace)}function e0(e,t){let n=Ot(e);return n&&n.properties&&n.properties.find(o=>o.name.toLowerCase()===t.toLowerCase())}function sd(e){return rd(Ot(e))}function rd(e){if(e&&e.isEnum&&e.enumNames!=null){let t={};for(let n=0;n<e.enumNames.length;n++){const o=(e.enumDescriptions?e.enumDescriptions[n]:null)||e.enumNames[n],s=(e.enumValues!=null?e.enumValues[n]:null)||e.enumNames[n];t[s]=o}return t}return null}function ad(e){if(!e)return null;let t={},n=e.input&&e.input.allowableEntries;if(n){for(let s=0;s<n.length;s++){let r=n[s];t[r.key]=r.value}return t}let o=e.allowableValues||(e.input?e.input.allowableValues:null);if(o){for(let s=0;s<o.length;s++){let r=o[s];t[r]=r}return t}if(e.isEnum){const s=e.genericArgs&&e.genericArgs.length==1?e.genericArgs[0]:e.type,r=Ot(s);if(r)return rd(r)}return null}function di(e){if(!e)return;const t=[];return Object.keys(e).forEach(n=>t.push({key:n,value:e[n]})),t}function t0(e,t){const n=((o,s)=>Object.assign({id:o,name:o,type:s},t))(e.name,(t==null?void 0:t.type)||Wg(e)||"text");return e.isEnum&&(n.type="select",n.allowableEntries=di(ad(e))),n}function n0(e){let t=[];if(e){const n=Pt(e),o=wr(e.name),s=ci(o==null?void 0:o.dataModel);n.forEach(r=>{var a,l,i;if(!nd(r))return;const u=t0(r,r.input);if(u.id=zc(u.id),u.type=="file"&&r.uploadTo&&!u.accept){const c=(l=(a=xe.metadata.value)==null?void 0:a.plugins.filesUpload)==null?void 0:l.locations.find(p=>p.name==r.uploadTo);c&&!u.accept&&c.allowExtensions&&(u.accept=c.allowExtensions.map(p=>p.startsWith(".")?p:`.${p}`).join(","))}if(s){const c=(i=s.properties)==null?void 0:i.find(p=>p.name==r.name);r.ref||(r.ref=c==null?void 0:c.ref)}if(u.options)try{const c={input:u,$typeFields:n.map(f=>f.name),$dataModelFields:s?Pt(s).map(f=>f.name):[],...xe.config.scopeWhitelist},p=ri(u.options,c);Object.keys(p).forEach(f=>{u[f]=p[f]})}catch{console.error(`failed to evaluate '${u.options}'`)}t.push(u)})}return t}function pi(e,t){var n,o;if(!t.type)return console.error("enumDescriptions missing {type:'EnumType'} options"),[`${e}`];const s=Ot(t.type);if(!(s!=null&&s.enumValues))return console.error(`Could not find metadata for ${t.type}`),[`${e}`];const r=[];for(let a=0;a<s.enumValues.length;a++){const l=parseInt(s.enumValues[a]);l>0&&(l&e)===l&&r.push(((n=s.enumDescriptions)==null?void 0:n[a])||((o=s.enumNames)==null?void 0:o[a])||`${e}`)}return r}function id(e){return t=>typeof t=="number"?pi(t,{type:e}):t}function Pt(e){if(!e)return[];let t=[],n={};function o(s){s.forEach(r=>{n[r.name]||(n[r.name]=1,t.push(r))})}for(;e;)e.properties&&o(e.properties),e=e.inherits?ci(e.inherits):null;return t.map(s=>s.type.endsWith("[]")?{...s,type:"List`1",genericArgs:[s.type.substring(0,s.type.length-2)]}:s)}function ws(e,t){var n;return((n=e.request.implements)==null?void 0:n.some(o=>o.name===t))||!1}function os(e){return e?ld(e,Pt(e)):null}function ld(e,t){let n=t.find(s=>s.name.toLowerCase()==="id");if(n&&n.isPrimaryKey)return n;let o=t.find(s=>s.isPrimaryKey)||n;if(!o){let s=lt.model(e);if(s)return dt(Ot(s),r=>os(r));console.error(`Primary Key not found in ${e.name}`)}return o||null}function o0(e,t){return dt(os(e),n=>Oe(t,n.name))}function ud(e,t,n){return e&&e.valueType==="none"?"":n.key==="%In"||n.key==="%Between"?`(${n.value})`:s0(t,n.value)}function s0(e,t){return e?(e=Xc(e),wa(e)||e==="Boolean"?t:Gg(e)?`[${t}]`:`'${t}'`):t}function Bt(){const e=C(()=>{var o;return((o=xe.metadata.value)==null?void 0:o.app)||null}),t=C(()=>{var o;return((o=xe.metadata.value)==null?void 0:o.api)||null}),n=C(()=>{var o;return((o=xe.metadata.value)==null?void 0:o.plugins.autoQuery.viewerConventions)||[]});return ui(),{loadMetadata:Zg,getMetadata:Kg,setMetadata:Go,clearMetadata:Yg,metadataApp:e,metadataApi:t,filterDefinitions:n,typeOf:Ot,typeOfRef:ci,typeEquals:od,apiOf:wr,findApis:Xg,typeName:Ug,typeName2:Zc,property:e0,enumOptions:sd,propertyOptions:ad,createFormLayout:n0,typeProperties:Pt,supportsProp:nd,Crud:lt,Apis:fo,getPrimaryKey:os,getPrimaryKeyByProps:ld,getId:o0,createDto:qo,makeDto:Jg,toFormValues:js,formValues:Qg,isComplexProp:td,asKvps:di,expandEnumFlags:pi,enumFlagsConverter:id}}const cd=class Ht{static async getOrFetchValue(t,n,o,s,r,a,l){return Ht.getValue(o,l,r)??(await Ht.fetchLookupIds(t,n,o,s,r,a,[l]),Ht.getValue(o,l,r))}static getValue(t,n,o){const s=Ht.Lookup[t];if(s){const r=s[n];if(r)return o=o.toLowerCase(),r[o]}}static setValue(t,n,o,s){const r=Ht.Lookup[t]??(Ht.Lookup[t]={}),a=r[n]??(r[n]={});o=o.toLowerCase(),a[o]=s}static setRefValue(t,n){const o=Oe(n,t.refId);if(o==null||t.refLabel==null)return null;const s=Oe(n,t.refLabel);return Ht.setValue(t.model,o,t.refLabel,s),s}static async fetchLookupIds(t,n,o,s,r,a,l){const i=n.operations.find(u=>{var c;return lt.isAnyQuery(u)&&((c=u.dataModel)==null?void 0:c.name)==o});if(i){const u=Ht.Lookup[o]??(Ht.Lookup[o]={}),c=[];Object.keys(u).forEach(S=>{const z=u[S];Oe(z,r)&&c.push(S)});const p=l.filter(S=>!c.includes(S));if(p.length==0)return;const f=a?null:`${s},${r}`,m={[s+"In"]:p.join(",")};f&&(m.fields=f);const v=qo(i,m),w=await t.api(v,{jsconfig:"edv,eccn"});if(w.succeeded)(Oe(w.response,"results")||[]).forEach(S=>{if(!Oe(S,s)){console.error(`result[${s}] == null`,S);return}const z=`${Oe(S,s)}`,$=Oe(S,r);r=r.toLowerCase();const A=u[z]??(u[z]={});A[r]=`${$}`});else{console.error(`Failed to call ${i.request.name}`);return}}}};Fe(cd,"Lookup",{});let ks=cd,$l=()=>new Date().getTime(),r0=["/","T",":","-"],kn={assumeUtc:!0,date:{method:"Intl.DateTimeFormat",options:"{dateStyle:'medium'}"},maxFieldLength:150,maxNestedFields:2,maxNestedFieldLength:30},a0=new Intl.RelativeTimeFormat(kn.locale,{}),Nl=24*60*60*1e3*365,Fr={year:Nl,month:Nl/12,day:24*60*60*1e3,hour:60*60*1e3,minute:60*1e3,second:1e3},Xn={currency:l0,bytes:u0,link:c0,linkTel:d0,linkMailTo:p0,icon:f0,iconRounded:h0,attachment:m0,hidden:g0,time:v0,relativeTime:fd,relativeTimeFromMs:pd,enumFlags:w0,formatDate:rs,formatNumber:dd};"iconOnError"in globalThis||(globalThis.iconOnError=Kc);class mt{}Fe(mt,"currency",{method:"currency"}),Fe(mt,"bytes",{method:"bytes"}),Fe(mt,"link",{method:"link"}),Fe(mt,"linkTel",{method:"linkTel"}),Fe(mt,"linkMailTo",{method:"linkMailTo"}),Fe(mt,"icon",{method:"icon"}),Fe(mt,"iconRounded",{method:"iconRounded"}),Fe(mt,"attachment",{method:"attachment"}),Fe(mt,"time",{method:"time"}),Fe(mt,"relativeTime",{method:"relativeTime"}),Fe(mt,"relativeTimeFromMs",{method:"relativeTimeFromMs"}),Fe(mt,"date",{method:"formatDate"}),Fe(mt,"number",{method:"formatNumber"}),Fe(mt,"hidden",{method:"hidden"}),Fe(mt,"enumFlags",{method:"enumFlags"});function i0(){return Xn}function ss(e,t){return t?qt("span",e,t):e}function l0(e,t){const n=Gt(t,["currency"]);return ss(new Intl.NumberFormat(void 0,{style:"currency",currency:(t==null?void 0:t.currency)||"USD"}).format(e),n)}function u0(e,t){return ss(Qc(e),t)}function c0(e,t){return qt("a",e,gr({...t,href:e}))}function d0(e,t){return qt("a",e,gr({...t,href:`tel:${e}`}))}function p0(e,t){t||(t={});let{subject:n,body:o}=t,s=Gt(t,["subject","body"]),r={};return n&&(r.subject=n),o&&(r.body=o),qt("a",e,gr({...s,href:`mailto:${tn(e,r)}`}))}function f0(e,t){return qt("img",void 0,Object.assign({class:"w-6 h-6",title:e,src:ao(e),onerror:"iconOnError(this)"},t))}function h0(e,t){return qt("img",void 0,Object.assign({class:"w-8 h-8 rounded-full",title:e,src:ao(e),onerror:"iconOnError(this)"},t))}function m0(e,t){let n=Gc(e),o=yr(n)==null||Jc(e)?ao(e):Yc(e);const s=ao(o);let r=t&&(t["icon-class"]||t.iconClass),a=qt("img",void 0,Object.assign({class:"w-6 h-6",src:s,onerror:"iconOnError(this,'att')"},r?{class:r}:null)),l=`<span class="pl-1">${n}</span>`;return qt("a",a+l,Object.assign({class:"flex",href:ao(e),title:e},t?Gt(t,["icon-class","iconClass"]):null))}function g0(e){return""}function v0(e,t){let n=typeof e=="string"?new Date(ni(e)*1e3):ns(e)?Cn(e):null;return ss(n?Lm(n):e,t)}function rs(e,t){if(e==null)return"";let n=typeof e=="number"?new Date(e):typeof e=="string"?Cn(e):e;if(!ns(n))return console.warn(`${n} is not a Date value`),e==null?"":`${e}`;let o=kn.date?fi(kn.date):null;return ss(typeof o=="function"?o(n):jc(n),t)}function dd(e,t){if(typeof e!="number")return e;let n=kn.number?fi(kn.number):null,o=typeof n=="function"?n(e):`${e}`;return o===""&&(console.warn(`formatNumber(${e}) => ${o}`,n),o=`${e}`),ss(o,t)}function y0(e,t,n){let o=Um(e),s=t?fi(t):null;if(typeof s=="function"){let a=n;if(t!=null&&t.options)try{a=ri(t.options,n)}catch(l){console.error(`Could not evaluate '${t.options}'`,l,", with scope:",n)}return s(e,a)}return(o!=null?ns(o)?rs(o,n):typeof o=="number"?dd(o,n):o:null)??""}function Zs(e,t,n){return Dn(e)?y0(e,t,n):T0(e,t,n)}function b0(e){if(e==null)return NaN;if(typeof e=="number")return e;if(ns(e))return e.getTime()-$l();if(typeof e=="string"){let t=Number(e);if(!isNaN(t))return t;if(e[0]==="P"||e.startsWith("-P"))return ni(e)*1e3*-1;if(Wm(e,r0)>=0)return Cn(e).getTime()-$l()}return NaN}function pd(e,t){for(let n in Fr)if(Math.abs(e)>Fr[n]||n==="second")return(t||a0).format(Math.round(e/Fr[n]),n)}function fd(e,t){let n=b0(e);return isNaN(n)?"":pd(n,t)}function w0(e,t){return pi(e,t).join(", ")}function fi(e){if(!e)return null;let{method:t,options:n}=e,o=`${t}(${n})`,s=Xn[o]||Xn[t];if(typeof s=="function")return s;let r=e.locale||kn.locale;if(t.startsWith("Intl.")){let a=r?`'${r}'`:"undefined",l=`return new ${t}(${a},${n||"undefined"})`;try{let i=Function(l)();return s=t==="Intl.DateTimeFormat"?u=>i.format(Cn(u)):t==="Intl.NumberFormat"?u=>i.format(Number(u)):t==="Intl.RelativeTimeFormat"?u=>fd(u,i):u=>i.format(u),Xn[o]=s}catch(i){console.error(`Invalid format: ${l}`,i)}}else{let a=globalThis[t];if(typeof a=="function"){let l=n!=null?Function("return "+n)():void 0;return s=i=>a(i,l,r),Xn[o]=s}console.error(`No '${t}' function exists`,Object.keys(Xn))}return null}function k0(e,t){return e?e.length>t?e.substring(0,t)+"...":e:""}function hd(e){return e.substring(0,6)==="/Date("?rs(Cn(e)):e}function x0(e){return S0(Xs(e)).replace(/"/g,"")}function C0(e){if(e==null||e==="")return"";if(typeof e=="string")try{return JSON.parse(e)}catch{console.warn("couldn't parse as JSON",e)}return e}function S0(e,t=4){return e=C0(e),typeof e!="object"?typeof e=="string"?e:`${e}`:JSON.stringify(e,void 0,t)}function Xs(e){if(e==null)return null;if(typeof e=="string")return hd(e);if(Dn(e))return e;if(e instanceof Date)return rs(e);if(Array.isArray(e))return e.map(Xs);if(typeof e=="object"){let t={};return Object.keys(e).forEach(n=>{n!="__type"&&(t[n]=Xs(e[n]))}),t}return e}function T0(e,t,n){let o=e;if(Array.isArray(e)){if(Dn(e[0]))return o.join(",");e[0]!=null&&(o=e[0])}if(o==null)return"";if(o instanceof Date)return rs(o,n);let s=Object.keys(o),r=[];for(let a=0;a<Math.min(kn.maxNestedFields,s.length);a++){let l=s[a],i=`${Xs(o[l])}`;r.push(`<b class="font-medium">${l}</b>: ${ha(k0(hd(i),kn.maxNestedFieldLength))}`)}return s.length>2&&r.push("..."),qt("span","{ "+r.join(", ")+" }",Object.assign({title:ha(x0(e))},n))}const A0=["title"],_0=Ce({__name:"RouterLink",props:{to:{}},setup(e){const t=e,{config:n}=Wn(),o=()=>n.value.navigate(t.to??"/");return(s,r)=>(h(),y("a",Ue({onClick:ct(o,["prevent"]),title:s.to,href:"javascript:void(0)"},s.$attrs),[he(s.$slots,"default")],16,A0))}});class M0{constructor(){Fe(this,"callbacks",{})}register(t,n){this.callbacks[t]=n}has(t){return!!this.callbacks[t]}invoke(t,n){const o=this.callbacks[t];typeof o=="function"&&o(t,n)}}const un=class Vs{static component(t){const n=Vs.components[t];if(n)return n;const o=Rl(t),s=Object.keys(Vs.components).find(r=>Rl(r)===o);return s&&Vs.components[s]||null}};Fe(un,"config",{redirectSignIn:"/signin",redirectSignOut:"/auth/logout",navigate:e=>location.href=e,assetsPathResolver:e=>e,fallbackPathResolver:e=>e,storage:new Hc,tableIcon:{svg:"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' stroke-width='1.5'><path d='M5 12v6s0 3 7 3s7-3 7-3v-6'/><path d='M5 6v6s0 3 7 3s7-3 7-3V6'/><path d='M12 3c7 0 7 3 7 3s0 3-7 3s-7-3-7-3s0-3 7-3Z'/></g></svg>"},scopeWhitelist:{enumFlagsConverter:id,...i0()}}),Fe(un,"autoQueryGridDefaults",{deny:[],hide:[],toolbarButtonClass:void 0,tableStyle:"stripedRows",take:25,maxFieldLength:150}),Fe(un,"events",Gm()),Fe(un,"user",Y(null)),Fe(un,"metadata",Y(null)),Fe(un,"components",{RouterLink:_0}),Fe(un,"interceptors",new M0);let xe=un;function P0(e){xe.config=Object.assign(xe.config,e)}function E0(e){xe.autoQueryGridDefaults=Object.assign(xe.autoQueryGridDefaults,e)}function hi(e){return e&&xe.config.assetsPathResolver?xe.config.assetsPathResolver(e):e}function I0(e){return e&&xe.config.fallbackPathResolver?xe.config.fallbackPathResolver(e):e}function L0(e,t){xe.interceptors.register(e,t)}function Wn(){const e=C(()=>xe.config),t=C(()=>xe.autoQueryGridDefaults),n=xe.events;return{config:e,setConfig:P0,events:n,autoQueryGridDefaults:t,setAutoQueryGridDefaults:E0,assetsPathResolver:hi,fallbackPathResolver:I0,registerInterceptor:L0}}const md=Ce({inheritAttrs:!1,props:{image:Object,svg:String,src:String,alt:String,type:String},setup(e,{attrs:t}){return()=>{let n=e.image;if(e.type){const{typeOf:s}=Bt(),r=s(e.type);r||console.warn(`Type ${e.type} does not exist`),r!=null&&r.icon?n=r==null?void 0:r.icon:console.warn(`Type ${e.type} does not have a [Svg] icon`)}let o=e.svg||(n==null?void 0:n.svg)||"";if(o.startsWith("<svg ")){let s=ts(o,">").indexOf("class="),r=`${(n==null?void 0:n.cls)||""} ${t.class||""}`;if(s==-1)o=`<svg class="${r}" ${o.substring(4)}`;else{const a=s+6+1;o=`${o.substring(0,a)+r} ${o.substring(a)}`}return Tt("span",{innerHTML:o})}else return Tt("img",{class:[n==null?void 0:n.cls,t.class],src:hi(e.src||(n==null?void 0:n.uri)),onError:s=>Kc(s.target)})}}}),z0={class:"text-2xl font-semibold text-gray-900 dark:text-gray-300"},R0={class:"flex"},j0=d("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"},null,-1),V0=d("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"},null,-1),O0=[j0,V0],B0=Ce({__name:"Loading",props:{imageClass:{default:"w-6 h-6"}},setup(e){return(t,n)=>(h(),y("div",z0,[d("div",R0,[(h(),y("svg",{class:L(["self-center inline mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",t.imageClass]),role:"status",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},O0,2)),d("span",null,[he(t.$slots,"default")])])]))}}),D0=["href","onClick"],H0=["type"],Fl="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 disabled:text-gray-400 bg-white dark:bg-black hover:bg-gray-50 hover:dark:bg-gray-900 disabled:hover:bg-white dark:disabled:hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black",$0=Ce({__name:"OutlineButton",props:{type:{default:"submit"},href:{}},setup(e){return(t,n)=>{const o=ye("router-link");return t.href?(h(),we(o,{key:0,to:t.href},{default:He(({navigate:s})=>[d("button",{class:L(Fl),href:t.href,onClick:s},[he(t.$slots,"default")],8,D0)]),_:3},8,["to"])):(h(),y("button",Ue({key:1,type:t.type,class:Fl},t.$attrs),[he(t.$slots,"default")],16,H0))}}}),N0=["href","onClick"],F0=["type"],U0=Ce({__name:"PrimaryButton",props:{type:{default:"submit"},href:{},color:{default:"indigo"}},setup(e){const t=e,n={blue:"text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:hover:bg-blue-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",purple:"text-white bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:hover:bg-purple-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",red:"focus:ring-red-500 text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400 disabled:hover:bg-red-400 focus:ring-red-500 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500",green:"focus:ring-green-300 text-white bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:hover:bg-green-400 focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500",sky:"focus:ring-sky-300 text-white bg-sky-600 hover:bg-sky-700 disabled:bg-sky-400 disabled:hover:bg-sky-400 focus:ring-sky-500 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-500",cyan:"focus:ring-cyan-300 text-white bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-400 disabled:hover:bg-cyan-400 focus:ring-cyan-500 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-500",indigo:"focus:ring-2 focus:ring-offset-2 text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 disabled:hover:bg-indigo-400 focus:ring-indigo-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},o=C(()=>"inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-black "+(n[t.color]||n.indigo));return(s,r)=>{const a=ye("router-link");return s.href?(h(),we(a,{key:0,to:s.href},{default:He(({navigate:l})=>[d("button",{class:L(o.value),href:s.href,onClick:l},[he(s.$slots,"default")],10,N0)]),_:3},8,["to"])):(h(),y("button",Ue({key:1,type:s.type,class:o.value},s.$attrs),[he(s.$slots,"default")],16,F0))}}}),W0=["type","href","onClick"],q0=["type"],Ul="inline-flex justify-center rounded-md border border-gray-300 py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-black",G0=Ce({__name:"SecondaryButton",props:{type:{},href:{}},setup(e){return(t,n)=>{const o=ye("router-link");return t.href?(h(),we(o,{key:0,to:t.href},{default:He(({navigate:s})=>[d("button",{type:t.type??"button",class:L(Ul),href:t.href,onClick:s},[he(t.$slots,"default")],8,W0)]),_:3},8,["to"])):(h(),y("button",Ue({key:1,type:t.type??"button",class:Ul},t.$attrs),[he(t.$slots,"default")],16,q0))}}});function yt(e,t){return Array.isArray(e)?e.indexOf(t)>=0:e==t||e.includes(t)}const ka={blue:"text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200",purple:"text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200",red:"text-red-700 dark:text-red-400 hover:text-red-900 dark:hover:text-red-200",green:"text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200",sky:"text-sky-600 dark:text-sky-400 hover:text-sky-800 dark:hover:text-sky-200",cyan:"text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200",indigo:"text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200"},Ut={base:"block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",invalid:"pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",valid:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:border-gray-600"},xs={panelClass:"shadow sm:rounded-md",formClass:"space-y-6 bg-white dark:bg-black py-6 px-4 sm:p-6",headingClass:"text-lg font-medium leading-6 text-gray-900 dark:text-gray-100",subHeadingClass:"mt-1 text-sm text-gray-500 dark:text-gray-400"},_o={panelClass:"pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",formClass:"flex h-full flex-col divide-y divide-gray-200 dark:divide-gray-700 shadow-xl bg-white dark:bg-black",titlebarClass:"bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6",headingClass:"text-lg font-medium text-gray-900 dark:text-gray-100",subHeadingClass:"mt-1 text-sm text-gray-500 dark:text-gray-400",closeButtonClass:"rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"},Wl={modalClass:"relative transform overflow-hidden rounded-lg bg-white dark:bg-black text-left shadow-xl transition-all sm:my-8",sizeClass:"sm:max-w-prose lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl sm:w-full"},vt={panelClass(e="slideOver"){return e=="card"?xs.panelClass:_o.panelClass},formClass(e="slideOver"){return e=="card"?xs.formClass:_o.formClass},headingClass(e="slideOver"){return e=="card"?xs.headingClass:_o.headingClass},subHeadingClass(e="slideOver"){return e=="card"?xs.subHeadingClass:_o.subHeadingClass},buttonsClass:"mt-4 px-4 py-3 bg-gray-50 dark:bg-gray-900 sm:px-6 flex flex-wrap justify-between",legendClass:"text-base font-medium text-gray-900 dark:text-gray-100 text-center mb-4"},Le={getGridClass(e="stripedRows"){return Le.gridClass},getGrid2Class(e="stripedRows"){return yt(e,"fullWidth")?"overflow-x-auto":Le.grid2Class},getGrid3Class(e="stripedRows"){return yt(e,"fullWidth")?"inline-block min-w-full py-2 align-middle":Le.grid3Class},getGrid4Class(e="stripedRows"){return yt(e,"whiteBackground")?"":yt(e,"fullWidth")?"overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5":Le.grid4Class},getTableClass(e="stripedRows"){return yt(e,"fullWidth")||yt(e,"verticalLines")?"min-w-full divide-y divide-gray-300":Le.tableClass},getTheadClass(e="stripedRows"){return yt(e,"whiteBackground")?"":Le.theadClass},getTheadRowClass(e="stripedRows"){return Le.theadRowClass+(yt(e,"verticalLines")?" divide-x divide-gray-200 dark:divide-gray-700":"")},getTheadCellClass(e="stripedRows"){return Le.theadCellClass+(yt(e,"uppercaseHeadings")?" uppercase":"")},getTbodyClass(e="stripedRows"){return(yt(e,"whiteBackground")||yt(e,"verticalLines")?"divide-y divide-gray-200 dark:divide-gray-800":Le.tableClass)+(yt(e,"verticalLines")?" bg-white":"")},getTableRowClass(e="stripedRows",t,n,o){return(o?"cursor-pointer ":"")+(n?"bg-indigo-100 dark:bg-blue-800":(o?"hover:bg-yellow-50 dark:hover:bg-blue-900 ":"")+(yt(e,"stripedRows")?t%2==0?"bg-white dark:bg-black":"bg-gray-50 dark:bg-gray-800":"bg-white dark:bg-black"))+(yt(e,"verticalLines")?" divide-x divide-gray-200 dark:divide-gray-700":"")},gridClass:"flex flex-col",grid2Class:"",grid3Class:"inline-block min-w-full py-2 align-middle",grid4Class:"overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",tableClass:"min-w-full divide-y divide-gray-200 dark:divide-gray-700",theadClass:"bg-gray-50 dark:bg-gray-900",tableCellClass:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400",theadRowClass:"select-none",theadCellClass:"px-6 py-4 text-left text-sm font-medium tracking-wider whitespace-nowrap",toolbarButtonClass:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded text-gray-700 dark:text-gray-300 bg-white dark:bg-black hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"},J0=Ce({__name:"TextLink",props:{color:{default:"blue"}},setup(e){const t=pf(),n=e,o=C(()=>(ka[n.color]||ka.blue)+(t.href?"":" cursor-pointer"));return(s,r)=>(h(),y("a",{class:L(o.value)},[he(s.$slots,"default")],2))}}),Q0={class:"flex","aria-label":"Breadcrumb"},K0={role:"list",class:"flex items-center space-x-4"},Y0=["href","title"],Z0=d("svg",{class:"h-6 w-6 flex-shrink-0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z","clip-rule":"evenodd"})],-1),X0={class:"sr-only"},ev=Ce({__name:"Breadcrumbs",props:{homeHref:{default:"/"},homeLabel:{default:"Home"}},setup(e){return(t,n)=>(h(),y("nav",Q0,[d("ol",K0,[d("li",null,[d("div",null,[d("a",{href:t.homeHref,class:"text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400",title:t.homeLabel},[Z0,d("span",X0,te(t.homeLabel),1)],8,Y0)])]),he(t.$slots,"default")])]))}}),tv={class:"flex items-center"},nv=d("svg",{class:"h-6 w-6 flex-shrink-0 text-gray-400 dark:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"})],-1),ov=["href","title"],sv=["title"],rv=Ce({__name:"Breadcrumb",props:{href:{},title:{}},setup(e){return(t,n)=>(h(),y("li",null,[d("div",tv,[nv,t.href?(h(),y("a",{key:0,href:t.href,class:"ml-4 text-lg font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",title:t.title},[he(t.$slots,"default")],8,ov)):(h(),y("span",{key:1,class:"ml-4 text-lg font-medium text-gray-700 dark:text-gray-300",title:t.title},[he(t.$slots,"default")],8,sv))])]))}}),av={key:0,class:"text-base font-semibold text-gray-500 dark:text-gray-400"},iv={role:"list",class:"mt-4 divide-y divide-gray-200 dark:divide-gray-800 border-t border-b border-gray-200 dark:border-gray-800"},lv=Ce({__name:"NavList",props:{title:{}},setup(e){return(t,n)=>(h(),y("div",null,[t.title?(h(),y("h2",av,te(t.title),1)):F("",!0),d("ul",iv,[he(t.$slots,"default")])]))}}),uv={class:"relative flex items-start space-x-4 py-6"},cv={class:"flex-shrink-0"},dv={class:"flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900"},pv={class:"min-w-0 flex-1"},fv={class:"text-base font-medium text-gray-900 dark:text-gray-100"},hv={class:"rounded-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2"},mv=["href"],gv=d("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),vv={class:"text-base text-gray-500"},yv=d("div",{class:"flex-shrink-0 self-center"},[d("svg",{class:"h-5 w-5 text-gray-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z","clip-rule":"evenodd"})])],-1),bv=Ce({__name:"NavListItem",props:{title:{},href:{},icon:{},iconSvg:{},iconSrc:{},iconAlt:{}},setup(e){return(t,n)=>{const o=ye("Icon");return h(),y("li",uv,[d("div",cv,[d("span",dv,[Ae(o,{class:"w-6 h-6 text-indigo-700 dark:text-indigo-300",image:t.icon,src:t.iconSrc,svg:t.iconSvg,alt:t.iconAlt},null,8,["image","src","svg","alt"])])]),d("div",pv,[d("h3",fv,[d("span",hv,[d("a",{href:t.href,class:"focus:outline-none"},[gv,Be(" "+te(t.title),1)],8,mv)])]),d("p",vv,[he(t.$slots,"default")])]),yv])}}});function gd(e){return e&&e.SessionId?Vn(e):e}function wv(e){xe.user.value=gd(e),xe.events.publish("signIn",e)}function kv(){xe.user.value=null,xe.events.publish("signOut",null)}const mi=e=>(e==null?void 0:e.roles)||[],gi=e=>(e==null?void 0:e.permissions)||[];function vd(e){return mi(xe.user.value).indexOf(e)>=0}function xv(e){return gi(xe.user.value).indexOf(e)>=0}function vi(){return vd("Admin")}function Os(e){if(!e)return!1;if(!e.requiresAuth)return!0;const t=xe.user.value;if(!t)return!1;if(vi())return!0;let[n,o]=[mi(t),gi(t)],[s,r,a,l]=[e.requiredRoles||[],e.requiredPermissions||[],e.requiresAnyRole||[],e.requiresAnyPermission||[]];return!(!s.every(i=>n.indexOf(i)>=0)||a.length>0&&!a.some(i=>n.indexOf(i)>=0)||!r.every(i=>o.indexOf(i)>=0)||l.length>0&&!l.every(i=>o.indexOf(i)>=0))}function Cv(e){if(!e||!e.requiresAuth)return null;const t=xe.user.value;if(!t)return`<b>${e.request.name}</b> requires Authentication`;if(vi())return null;let[n,o]=[mi(t),gi(t)],[s,r,a,l]=[e.requiredRoles||[],e.requiredPermissions||[],e.requiresAnyRole||[],e.requiresAnyPermission||[]],i=s.filter(c=>n.indexOf(c)<0);if(i.length>0)return`Requires ${i.map(c=>"<b>"+c+"</b>").join(", ")} Role`+(i.length>1?"s":"");let u=r.filter(c=>o.indexOf(c)<0);return u.length>0?`Requires ${u.map(c=>"<b>"+c+"</b>").join(", ")} Permission`+(u.length>1?"s":""):a.length>0&&!a.some(c=>n.indexOf(c)>=0)?`Requires any ${a.filter(c=>n.indexOf(c)<0).map(c=>"<b>"+c+"</b>").join(", ")} Role`+(i.length>1?"s":""):l.length>0&&!l.every(c=>o.indexOf(c)>=0)?`Requires any ${l.filter(c=>o.indexOf(c)<0).map(c=>"<b>"+c+"</b>").join(", ")} Permission`+(u.length>1?"s":""):null}function yi(){const e=C(()=>xe.user.value||null),t=C(()=>xe.user.value!=null);return{signIn:wv,signOut:kv,user:e,toAuth:gd,isAuthenticated:t,hasRole:vd,hasPermission:xv,isAdmin:vi,canAccess:Os,invalidAccessMessage:Cv}}const Sv={key:0},Tv={class:"md:p-4"},yd=Ce({__name:"EnsureAccess",props:{invalidAccess:{},alertClass:{}},emits:["done"],setup(e){const{isAuthenticated:t}=yi(),{config:n}=Wn(),o=()=>{let r=location.href.substring(location.origin.length)||"/";const a=tn(n.value.redirectSignIn,{redirect:r});n.value.navigate(a)},s=()=>{let r=location.href.substring(location.origin.length)||"/";const a=tn(n.value.redirectSignOut,{ReturnUrl:r});n.value.navigate(a)};return(r,a)=>{const l=ye("Alert"),i=ye("SecondaryButton");return r.invalidAccess?(h(),y("div",Sv,[Ae(l,{class:L(r.alertClass),innerHTML:r.invalidAccess},null,8,["class","innerHTML"]),d("div",Tv,[me(t)?(h(),we(i,{key:1,onClick:s},{default:He(()=>[Be("Sign Out")]),_:1})):(h(),we(i,{key:0,onClick:o},{default:He(()=>[Be("Sign In")]),_:1}))])])):F("",!0)}}}),Av={class:"absolute top-0 right-0 bg-white dark:bg-black border dark:border-gray-800 rounded normal-case text-sm shadow w-80"},_v={class:"p-4"},Mv=d("h3",{class:"text-base font-medium mb-3 dark:text-gray-100"},"Sort",-1),Pv={class:"flex w-full justify-center"},Ev=d("svg",{class:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},[d("g",{fill:"currentColor"},[d("path",{"fill-rule":"evenodd",d:"M10.082 5.629L9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"}),d("path",{d:"M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zm-8.46-.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999l.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"})])],-1),Iv=d("span",null,"ASC",-1),Lv=[Ev,Iv],zv=fr('<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="currentColor"><path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z"></path><path fill-rule="evenodd" d="M10.082 12.629L9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"></path><path d="M4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999l.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"></path></g></svg><span>DESC</span>',2),Rv=[zv],jv=d("h3",{class:"text-base font-medium mt-4 mb-2"}," Filter ",-1),Vv={key:0},Ov=["id","value"],Bv=["for"],Dv={key:1},Hv={class:"mb-2"},$v={class:"inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700"},Nv=["onClick"],Fv=d("svg",{class:"h-2 w-2",stroke:"currentColor",fill:"none",viewBox:"0 0 8 8"},[d("path",{"stroke-linecap":"round","stroke-width":"1.5",d:"M1 1l6 6m0-6L1 7"})],-1),Uv=[Fv],Wv={class:"flex"},qv=d("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})],-1),Gv=[qv],Jv={class:"bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},bi=Ce({__name:"FilterColumn",props:{definitions:{},column:{},topLeft:{}},emits:["done","save"],setup(e,{emit:t}){const n=e,o=t,s=Y(),r=Y(""),a=Y(""),l=Y([]),i=C(()=>n.column.meta.isEnum==!0),u=C(()=>Ot(n.column.meta.type==="Nullable`1"?n.column.meta.genericArgs[0]:n.column.meta.type)),c=C(()=>n.column.meta.isEnum==!0?di(sd(u.value.name)):[]),p=C(()=>{var P;return((P=v(n.column.type))==null?void 0:P.map(ne=>({key:ne.value,value:ne.name})))||[]}),f=Y({filters:[]}),m=C(()=>f.value.filters);No(()=>f.value=Object.assign({},n.column.settings,{filters:Array.from(n.column.settings.filters)})),No(()=>{var P,ne,Z,ge,re;let se=((Z=(ne=(P=n.column.settings.filters)==null?void 0:P[0])==null?void 0:ne.value)==null?void 0:Z.split(","))||[];if(se.length>0&&(ge=u.value)!=null&&ge.isEnumInt){const ve=parseInt(se[0]);se=((re=u.value.enumValues)==null?void 0:re.filter(pe=>(ve&parseInt(pe))>0))||[]}l.value=se});function v(P){let ne=n.definitions;return ed(P)||(ne=ne.filter(Z=>Z.types!=="string")),ne}function w(P,ne){return v(P).find(Z=>Z.value===ne)}function S(){var P;if(!r.value)return;let ne=(P=w(n.column.type,r.value))==null?void 0:P.name;ne&&(f.value.filters.push({key:r.value,name:ne,value:a.value}),r.value=a.value="")}function z(P){f.value.filters.splice(P,1)}function $(P){return ud(w(n.column.type,P.key),n.column.type,P)}function A(){o("done")}function N(){var P;r.value="%",(P=s.value)==null||P.focus()}function B(){var P;if(a.value&&S(),i.value){let ne=Object.values(l.value).filter(Z=>Z);f.value.filters=ne.length>0?(P=u.value)!=null&&P.isEnumInt?[{key:"%HasAny",name:"HasAny",value:ne.map(Z=>parseInt(Z)).reduce((Z,ge)=>Z+ge,0).toString()}]:[{key:"%In",name:"In",value:ne.join(",")}]:[]}o("save",f.value),o("done")}function D(P){f.value.sort=P===f.value.sort?void 0:P,jt(B)}return(P,ne)=>{var Z;const ge=ye("SelectInput"),re=ye("TextInput"),se=ye("PrimaryButton"),ve=ye("SecondaryButton");return h(),y("div",{class:"fixed z-20 inset-0 overflow-y-auto",onClick:A,onVnodeMounted:N},[d("div",{class:"absolute",style:Nn(`top:${P.topLeft.y}px;left:${P.topLeft.x}px`),onClick:ne[5]||(ne[5]=ct(()=>{},["stop"]))},[d("div",Av,[d("div",_v,[Mv,d("div",Pv,[d("button",{type:"button",title:"Sort Ascending",onClick:ne[0]||(ne[0]=pe=>D("ASC")),class:L(`${f.value.sort==="ASC"?"bg-indigo-100 border-indigo-500":"bg-white hover:bg-gray-50 border-gray-300"} mr-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)},Lv,2),d("button",{type:"button",title:"Sort Descending",onClick:ne[1]||(ne[1]=pe=>D("DESC")),class:L(`${f.value.sort==="DESC"?"bg-indigo-100 border-indigo-500":"bg-white hover:bg-gray-50 border-gray-300"} ml-1 inline-flex items-center px-2.5 py-1.5 border shadow-sm text-sm font-medium rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`)},Rv,2)]),jv,i.value?(h(),y("div",Vv,[(h(!0),y(Re,null,Qe(c.value,pe=>(h(),y("div",{key:pe.key,class:"flex items-center"},[jn(d("input",{type:"checkbox",id:pe.key,value:pe.key,"onUpdate:modelValue":ne[2]||(ne[2]=J=>l.value=J),class:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"},null,8,Ov),[[mr,l.value]]),d("label",{for:pe.key,class:"ml-3"},te(pe.value),9,Bv)]))),128))])):(h(),y("div",Dv,[(h(!0),y(Re,null,Qe(m.value,(pe,J)=>(h(),y("div",Hv,[d("span",$v,[Be(te(P.column.name)+" "+te(pe.name)+" "+te($(pe))+" ",1),d("button",{type:"button",onClick:ie=>z(J),class:"flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"},Uv,8,Nv)])]))),256)),d("div",Wv,[Ae(ge,{id:"filterRule",class:"w-32 mr-1",modelValue:r.value,"onUpdate:modelValue":ne[3]||(ne[3]=pe=>r.value=pe),entries:p.value,label:"",placeholder:""},null,8,["modelValue","entries"]),((Z=w(P.column.type,r.value))==null?void 0:Z.valueType)!=="none"?(h(),we(re,{key:0,ref_key:"txtFilter",ref:s,id:"filterValue",class:"w-32 mr-1",type:"text",modelValue:a.value,"onUpdate:modelValue":ne[4]||(ne[4]=pe=>a.value=pe),onKeyup:Tc(S,["enter"]),label:"",placeholder:""},null,8,["modelValue"])):F("",!0),d("div",{class:"pt-1"},[d("button",{type:"button",onClick:S,class:"inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},Gv)])])]))]),d("div",Jv,[Ae(se,{onClick:B,color:"red",class:"ml-2"},{default:He(()=>[Be(" Save ")]),_:1}),Ae(ve,{onClick:A},{default:He(()=>[Be(" Cancel ")]),_:1})])])],4)],512)}}}),Qv={class:"px-4 sm:px-6 lg:px-8 text-sm"},Kv={class:"flex flex-wrap"},Yv={class:"group pr-4 sm:pr-6 lg:pr-8"},Zv={class:"flex justify-between w-full font-medium"},Xv={class:"w-6 flex justify-end"},ey={class:"hidden group-hover:inline"},ty=["onClick","title"],ny=d("svg",{class:"h-2 w-2",stroke:"currentColor",fill:"none",viewBox:"0 0 8 8"},[d("path",{"stroke-linecap":"round","stroke-width":"1.5",d:"M1 1l6 6m0-6L1 7"})],-1),oy=[ny],sy={key:0,class:"pt-2"},ry={class:"ml-2"},ay={key:1},iy={class:"pt-2"},ly={class:"inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 text-indigo-700"},uy=["onClick"],cy=d("svg",{class:"h-2 w-2",stroke:"currentColor",fill:"none",viewBox:"0 0 8 8"},[d("path",{"stroke-linecap":"round","stroke-width":"1.5",d:"M1 1l6 6m0-6L1 7"})],-1),dy=[cy],py=d("span",null,"Clear All",-1),fy=[py],wi=Ce({__name:"FilterViews",props:{definitions:{},columns:{}},emits:["done","change"],setup(e,{emit:t}){const n=e,o=t,s=C(()=>n.columns.filter(f=>f.settings.filters.length>0));function r(f){var m,v;return(v=(m=f==null?void 0:f[0])==null?void 0:m.value)==null?void 0:v.split(",")}function a(f){let m=n.definitions;return ed(f)||(m=m.filter(v=>v.types!=="string")),m}function l(f,m){return a(f).find(v=>v.value===m)}function i(f,m){return ud(l(f.type,m.value),f.type,m)}function u(f){f.settings.filters=[],o("change",f)}function c(f,m){f.settings.filters.splice(m,1),o("change",f)}function p(){n.columns.forEach(f=>{f.settings.filters=[],o("change",f)}),o("done")}return(f,m)=>(h(),y("div",Qv,[d("div",Kv,[(h(!0),y(Re,null,Qe(s.value,v=>(h(),y("fieldset",Yv,[d("legend",Zv,[d("span",null,te(me(it)(v.name)),1),d("span",Xv,[d("span",ey,[d("button",{onClick:w=>u(v),title:`Clear all ${me(it)(v.name)} filters`,class:"flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-red-600 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"},oy,8,ty)])])]),v.meta.isEnum?(h(),y("div",sy,[(h(!0),y(Re,null,Qe(r(v.settings.filters),w=>(h(),y("div",{key:w,class:"flex items-center"},[d("label",ry,te(w),1)]))),128))])):(h(),y("div",ay,[(h(!0),y(Re,null,Qe(v.settings.filters,(w,S)=>(h(),y("div",iy,[d("span",ly,[Be(te(v.name)+" "+te(w.name)+" "+te(i(v,w))+" ",1),d("button",{type:"button",onClick:z=>c(v,S),class:"flex-shrink-0 ml-0.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"},dy,8,uy)])]))),256))]))]))),256))]),d("div",{class:"flex justify-center pt-4"},[d("button",{type:"button",onClick:p,class:"inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},fy)])]))}}),hy={class:"bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4"},my={class:""},gy={class:"mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left"},vy=d("h3",{class:"text-lg leading-6 font-medium text-gray-900 dark:text-gray-100"},"Query Preferences",-1),yy={class:"mt-4"},by=["for"],wy=["id"],ky=["value","selected"],xy={class:"mt-4 flex items-center py-4 border-b border-gray-200 dark:border-gray-800"},Cy=["id","checked"],Sy=["for"],Ty={class:"mt-4"},Ay={class:"pb-2 px-4"},_y={class:""},My=["id","value"],Py=["for"],Ey={class:"bg-gray-50 dark:bg-gray-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"},ki=Ce({__name:"QueryPrefs",props:{id:{default:"QueryPrefs"},columns:{},prefs:{},maxLimit:{}},emits:["done","save"],setup(e,{emit:t}){const{autoQueryGridDefaults:n}=Wn(),o=e,s=t,r=Y({});No(()=>r.value=Object.assign({take:n.value.take,selectedColumns:[]},o.prefs));const a=[10,25,50,100,250,500,1e3];function l(){s("done")}function i(){s("save",r.value)}return(u,c)=>{const p=ye("PrimaryButton"),f=ye("SecondaryButton"),m=ye("ModalDialog");return h(),we(m,{id:u.id,onDone:l,"size-class":"w-full sm:max-w-prose"},{default:He(()=>[d("div",hy,[d("div",my,[d("div",gy,[vy,d("div",yy,[d("label",{for:`${u.id}-take`,class:"block text-sm font-medium text-gray-700 dark:text-gray-300"},"Results per page",8,by),jn(d("select",{id:`${u.id}-take`,"onUpdate:modelValue":c[0]||(c[0]=v=>r.value.take=v),class:"mt-1 block w-full pl-3 pr-10 py-2 text-base bg-white dark:bg-black border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"},[(h(!0),y(Re,null,Qe(a.filter(v=>o.maxLimit==null||v<=o.maxLimit),v=>(h(),y("option",{value:v,selected:v===r.value.take},te(v),9,ky))),256))],8,wy),[[Cc,r.value.take]])]),d("div",xy,[d("input",{type:"radio",id:`${u.id}-allColumns`,onClick:c[1]||(c[1]=v=>r.value.selectedColumns=[]),checked:r.value.selectedColumns.length===0,class:"focus:ring-indigo-500 h-4 w-4 bg-white dark:bg-black text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-700"},null,8,Cy),d("label",{class:"ml-3 block text-gray-700 dark:text-gray-300",for:`${u.id}-allColumns`},"View all columns",8,Sy)]),d("div",Ty,[d("div",Ay,[d("div",_y,[(h(!0),y(Re,null,Qe(u.columns,v=>(h(),y("div",{key:v.name,class:"flex items-center"},[jn(d("input",{type:"checkbox",id:v.name,value:v.name,"onUpdate:modelValue":c[2]||(c[2]=w=>r.value.selectedColumns=w),class:"h-4 w-4 bg-white dark:bg-black border-gray-300 dark:border-gray-700 rounded text-indigo-600 dark:text-indigo-400 focus:ring-indigo-500"},null,8,My),[[mr,r.value.selectedColumns]]),d("label",{for:v.name,class:"ml-3"},te(v.name),9,Py)]))),128))])])])])])]),d("div",Ey,[Ae(p,{onClick:i,color:"red",class:"ml-2"},{default:He(()=>[Be(" Save ")]),_:1}),Ae(f,{onClick:l},{default:He(()=>[Be(" Cancel ")]),_:1})])]),_:1},8,["id"])}}}),Iy={key:0},Ly={key:1},zy={key:2,class:"pt-1"},Ry={key:0},jy={key:1},Vy={key:3},Oy={class:"pl-1 pt-1 flex flex-wrap"},By={class:"flex mt-1"},Dy=["title"],Hy=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("g",{"stroke-width":"1.5",fill:"none"},[d("path",{d:"M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",stroke:"currentColor"})])],-1),$y=[Hy],Ny=["disabled"],Fy=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",fill:"currentColor"})],-1),Uy=[Fy],Wy=["disabled"],qy=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",fill:"currentColor"})],-1),Gy=[qy],Jy=["disabled"],Qy=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",fill:"currentColor"})],-1),Ky=[Qy],Yy=["disabled"],Zy=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",fill:"currentColor"})],-1),Xy=[Zy],eb={key:0,class:"flex mt-1"},tb={class:"px-4 text-lg text-black dark:text-white"},nb={key:0},ob={key:1},sb=d("span",{class:"hidden xl:inline"}," Showing Results ",-1),rb={key:2},ab={class:"flex flex-wrap"},ib={key:0,class:"pl-2 mt-1"},lb=d("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 20v-5h-5M4 4v5h5m10.938 2A8.001 8.001 0 0 0 5.07 8m-1.008 5a8.001 8.001  0 0 0 14.868 3"})],-1),ub=[lb],cb={key:1,class:"pl-2 mt-1"},db=fr('<svg class="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M28.781 4.405h-10.13V2.018L2 4.588v22.527l16.651 2.868v-3.538h10.13A1.162 1.162 0 0 0 30 25.349V5.5a1.162 1.162 0 0 0-1.219-1.095zm.16 21.126H18.617l-.017-1.889h2.487v-2.2h-2.506l-.012-1.3h2.518v-2.2H18.55l-.012-1.3h2.549v-2.2H18.53v-1.3h2.557v-2.2H18.53v-1.3h2.557v-2.2H18.53v-2h10.411z" fill="#20744a" fill-rule="evenodd"></path><path fill="#20744a" d="M22.487 7.439h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 10.94h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 14.441h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 17.942h4.323v2.2h-4.323z"></path><path fill="#20744a" d="M22.487 21.443h4.323v2.2h-4.323z"></path><path fill="#fff" fill-rule="evenodd" d="M6.347 10.673l2.146-.123l1.349 3.709l1.594-3.862l2.146-.123l-2.606 5.266l2.606 5.279l-2.269-.153l-1.532-4.024l-1.533 3.871l-2.085-.184l2.422-4.663l-2.238-4.993z"></path></svg><span class="text-green-900 dark:text-green-100">Excel</span>',2),pb=[db],fb={key:2,class:"pl-2 mt-1"},hb={key:0,class:"w-5 h-5 mr-1 text-green-600 dark:text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},mb=d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),gb=[mb],vb={key:1,class:"w-5 h-5 mr-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},yb=d("g",{fill:"none"},[d("path",{d:"M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),d("path",{d:"M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),bb=[yb],wb=d("span",{class:"whitespace-nowrap"},"Copy URL",-1),kb={key:3,class:"pl-2 mt-1"},xb=d("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 24 24"},[d("path",{fill:"currentColor",d:"M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"})],-1),Cb=[xb],Sb={key:4,class:"pl-2 mt-1"},Tb=d("svg",{class:"flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[d("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z","clip-rule":"evenodd"})],-1),Ab={class:"mr-1"},_b={key:0,class:"h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Mb=d("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"},null,-1),Pb=[Mb],Eb={key:1,class:"h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Ib=d("path",{"fill-rule":"evenodd",d:"M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z","clip-rule":"evenodd"},null,-1),Lb=[Ib],zb={key:5,class:"pl-2 mt-1"},Rb=["title"],jb=d("svg",{class:"w-5 h-5 mr-1 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:"currentColor"})],-1),Vb={class:"whitespace-nowrap"},Ob={key:7},Bb={key:0,class:"cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"},Db={class:"mr-1 select-none"},Hb={key:1,class:"flex justify-between items-center"},$b={class:"mr-1 select-none"},Cs=25,Nb=Ce({__name:"AutoQueryGrid",props:{filterDefinitions:{},id:{default:"AutoQueryGrid"},apis:{},type:{},prefs:{},deny:{},hide:{},selectedColumns:{},toolbarButtonClass:{},tableStyle:{},gridClass:{},grid2Class:{},grid3Class:{},grid4Class:{},tableClass:{},theadClass:{},tbodyClass:{},theadRowClass:{},theadCellClass:{},headerTitle:{},headerTitles:{},visibleFrom:{},rowClass:{},rowStyle:{},apiPrefs:{},canFilter:{},disableKeyBindings:{},configureField:{},skip:{default:0},create:{type:Boolean},edit:{},filters:{}},emits:["headerSelected","rowSelected"],setup(e,{expose:t,emit:n}){const{config:o,autoQueryGridDefaults:s}=Wn(),r=s,a=qe("client"),l=o.value.storage,i=e,u=n,c="filtering,queryString,queryFilters".split(","),p="copyApiUrl,downloadCsv,filtersView,newItem,pagingInfo,pagingNav,preferences,refresh,resetPreferences,toolbar".split(","),f=C(()=>i.deny?In(c,i.deny):In(c,r.value.deny)),m=C(()=>i.hide?In(p,i.hide):In(p,r.value.hide));function v(j){return f.value[j]}function w(j){return m.value[j]}const S=C(()=>i.tableStyle??r.value.tableStyle),z=C(()=>i.gridClass??Le.getGridClass(S.value)),$=C(()=>i.grid2Class??Le.getGrid2Class(S.value)),A=C(()=>i.grid3Class??Le.getGrid3Class(S.value)),N=C(()=>i.grid4Class??Le.getGrid4Class(S.value)),B=C(()=>i.tableClass??Le.getTableClass(S.value)),D=C(()=>i.theadClass??Le.getTheadClass(S.value)),P=C(()=>i.theadRowClass??Le.getTheadRowClass(S.value)),ne=C(()=>i.theadCellClass??Le.getTheadCellClass(S.value)),Z=C(()=>i.toolbarButtonClass??Le.toolbarButtonClass);function ge(j,le){var Te;if(i.rowClass)return i.rowClass(j,le);const Pe=!!De.value.AnyUpdate,ze=((Te=g.value)!=null&&Te.name?Oe(j,g.value.name):null)==de.value;return Le.getTableRowClass(i.tableStyle,le,ze,Pe)}const re=Ya(),se=C(()=>{var j;return Pr(((j=De.value.AnyQuery.viewModel)==null?void 0:j.name)||De.value.AnyQuery.dataModel.name)}),ve=C(()=>{const j=Object.keys(re).map(le=>le.toLowerCase());return Pt(se.value).filter(le=>j.includes(le.name.toLowerCase())||j.includes(le.name.toLowerCase()+"-header")).map(le=>le.name)});function pe(){let j=Pn(i.selectedColumns);return j.length>0?j:ve.value.length>0?ve.value:[]}const J=C(()=>{let j=pe().map(Te=>Te.toLowerCase());const le=Pt(se.value);return j.length>0?j.map(Te=>le.find(Pe=>Pe.name.toLowerCase()===Te)).filter(Te=>Te!=null):le}),ie=C(()=>{let j=J.value.map(Te=>Te.name),le=Pn(q.value.selectedColumns).map(Te=>Te.toLowerCase());return le.length>0?j.filter(Te=>le.includes(Te.toLowerCase())):j}),M=Y([]),U=Y(new nt),X=Y(new nt),_=Y(),H=Y(!1),de=Y(),W=Y(),be=Y(!1),R=Y(),ue=Y(i.skip),E=Y(!1),q=Y({take:Cs}),O=Y(!1),I=C(()=>M.value.some(j=>j.settings.filters.length>0||!!j.settings.sort)||q.value.selectedColumns),ae=C(()=>M.value.map(j=>j.settings.filters.length).reduce((j,le)=>j+le,0)),Se=C(()=>{var j;return Pt(Pr(qn.value||((j=De.value.AnyQuery)==null?void 0:j.dataModel.name)))}),g=C(()=>{var j;return os(Pr(qn.value||((j=De.value.AnyQuery)==null?void 0:j.dataModel.name)))}),b=C(()=>q.value.take??Cs),T=C(()=>U.value.response?Oe(U.value.response,"results"):[]),k=C(()=>{var j;return((j=U.value.response)==null?void 0:j.total)??T.value.length??0}),x=C(()=>ue.value>0),V=C(()=>ue.value>0),Q=C(()=>T.value.length>=b.value),K=C(()=>T.value.length>=b.value),ee=Y(),G=Y(),oe={NoQuery:"No Query API was found"};t({update:Ye,search:bo,createRequestArgs:_r,reset:Di,createDone:ko,createSave:Ir,editDone:wo,editSave:us,forceUpdate:yo,setEdit:Jt,edit:W}),xe.interceptors.has("AutoQueryGrid.new")&&xe.interceptors.invoke("AutoQueryGrid.new",{props:i});function fe(j){if(j){if(i.canFilter)return i.canFilter(j);const le=Se.value.find(Te=>Te.name.toLowerCase()==j.toLowerCase());if(le)return!td(le)}return!1}function ce(j){v("queryString")&&si(j)}async function ke(j){ue.value+=j,ue.value<0&&(ue.value=0);const le=Math.floor(k.value/b.value)*b.value;ue.value>le&&(ue.value=le),ce({skip:ue.value||void 0}),await Ye()}async function Ee(j,le){var Te,Pe;if(W.value=null,de.value=le,!j||!le)return;let ze=qo(De.value.AnyQuery,{[j]:le});const tt=await a.api(ze);if(tt.succeeded){let st=(Te=Oe(tt.response,"results"))==null?void 0:Te[0];st||console.warn(`API ${(Pe=De.value.AnyQuery)==null?void 0:Pe.request.name}(${j}:${le}) returned no results`),W.value=st}}async function je(j,le){var Te;u("rowSelected",j,le);const Pe=(Te=g.value)==null?void 0:Te.name,ze=Pe?Oe(j,Pe):null;!Pe||!ze||(ce({edit:ze}),Ee(Pe,ze))}function Ge(j,le){var Te;if(!v("filtering"))return;let Pe=le.target;if(fe(j)&&(Pe==null?void 0:Pe.tagName)!=="TD"){let ze=(Te=Pe==null?void 0:Pe.closest("TABLE"))==null?void 0:Te.getBoundingClientRect(),tt=M.value.find(st=>st.name.toLowerCase()==j.toLowerCase());if(tt&&ze){let st=318,Gn=ze.x+st+10;R.value={column:tt,topLeft:{x:Math.max(Math.floor(le.clientX+st/2),Gn),y:ze.y+45}}}}u("headerSelected",j,le)}function et(){R.value=null}async function kt(j){var le;let Te=(le=R.value)==null?void 0:le.column;Te&&(Te.settings=j,l.setItem(is(Te.name),JSON.stringify(Te.settings)),await Ye()),R.value=null}async function sn(j){l.setItem(is(j.name),JSON.stringify(j.settings)),await Ye()}async function as(j){be.value=!1,q.value=j,l.setItem(Mr(),JSON.stringify(j)),await Ye()}function Jt(j){Object.assign(W.value,j),yo()}function yo(){var j,le,Te;(j=ee.value)==null||j.forceUpdate(),(le=G.value)==null||le.forceUpdate();const Pe=Xe();(Te=Pe==null?void 0:Pe.proxy)==null||Te.$forceUpdate()}async function Ye(){await bo(_r())}async function St(){await Ye()}async function bo(j){const le=De.value.AnyQuery;if(!le){console.error(oe.NoQuery);return}let Te=qo(le,j),Pe=Oc(st=>{U.value.response=U.value.error=void 0,O.value=st}),ze=await a.api(Te);Pe(),jt(()=>U.value=ze);let tt=Oe(ze.response,"results")||[];!ze.succeeded||tt.label==0}function _r(){let j={include:"total",take:b.value},le=Pn(q.value.selectedColumns||i.selectedColumns);if(le.length>0){let Pe=g.value;Pe&&!le.includes(Pe.name)&&(le=[Pe.name,...le]);const ze=Se.value,tt=[];le.forEach(st=>{var Gn;const xo=ze.find(Sn=>Sn.name.toLowerCase()==st.toLowerCase());(Gn=xo==null?void 0:xo.ref)!=null&&Gn.selfId&&tt.push(xo.ref.selfId),Oe(re,st)&&tt.push(...ze.filter(Sn=>{var rt,Tn;return((Tn=(rt=Sn.ref)==null?void 0:rt.selfId)==null?void 0:Tn.toLowerCase())==st.toLowerCase()}).map(Sn=>Sn.name))}),tt.forEach(st=>{le.includes(st)||le.push(st)}),j.fields=le.join(",")}let Te=[];if(M.value.forEach(Pe=>{Pe.settings.sort&&Te.push((Pe.settings.sort==="DESC"?"-":"")+Pe.name),Pe.settings.filters.forEach(ze=>{let tt=ze.key.replace("%",Pe.name);j[tt]=ze.value})}),i.filters&&Object.keys(i.filters).forEach(Pe=>{j[Pe]=i.filters[Pe]}),v("queryString")&&v("queryFilters")){const Pe=location.search?location.search:location.hash.includes("?")?"?"+Ro(location.hash,"?"):"";let ze=Qs(Pe);if(Object.keys(ze).forEach(tt=>{J.value.find(st=>st.name.toLowerCase()===tt.toLowerCase())&&(j[tt]=ze[tt])}),typeof ze.skip<"u"){const tt=parseInt(ze.skip);isNaN(tt)||(ue.value=j.skip=tt)}}return typeof j.skip>"u"&&ue.value>0&&(j.skip=ue.value),Te.length>0&&(j.orderBy=Te.join(",")),j}function Wd(){const j=Ei("csv");va(j),typeof window<"u"&&window.open(j)}function qd(){const j=Ei("json");va(j),E.value=!0,setTimeout(()=>E.value=!1,3e3)}function Ei(j="json"){var le;const Te=_r(),Pe=`/api/${(le=De.value.AnyQuery)==null?void 0:le.request.name}`,ze=It(a.baseUrl,tn(Pe,{...Te,jsconfig:"edv"}));return ze.indexOf("?")>=0?ts(ze,"?")+"."+j+"?"+Ro(ze,"?"):ze+".json"}async function Gd(){M.value.forEach(j=>{j.settings={filters:[]},l.removeItem(is(j.name))}),q.value={take:Cs},l.removeItem(Mr()),await Ye()}function Jd(){H.value=!0,ce({create:null})}const qn=C(()=>vo(i.type)),Qt=C(()=>{var j;return qn.value||((j=De.value.AnyQuery)==null?void 0:j.dataModel.name)}),Mr=()=>{var j;return`${i.id}/ApiPrefs/${qn.value||((j=De.value.AnyQuery)==null?void 0:j.dataModel.name)}`},is=j=>{var le;return`Column/${i.id}:${qn.value||((le=De.value.AnyQuery)==null?void 0:le.dataModel.name)}.${j}`},{metadataApi:Ii,typeOf:Pr,apiOf:Li,filterDefinitions:Qd}=Bt(),{invalidAccessMessage:Er}=yi(),zi=C(()=>i.filterDefinitions||Qd.value),De=C(()=>{let j=Pn(i.apis);return j.length>0?fo.from(j.map(le=>Li(le)).filter(le=>le!=null).map(le=>le)):fo.forType(qn.value,Ii.value)}),ls=j=>`<span class="text-yellow-700">${j}</span>`,Ri=C(()=>{if(!Ii.value)return ls(`AppMetadata not loaded, see <a class="${ka.blue}" href="https://docs.servicestack.net/vue/use-metadata" target="_blank">useMetadata()</a>`);let j=Pn(i.apis).map(Te=>Li(Te)==null?Te:null).filter(Te=>Te!=null);if(j.length>0)return ls(`Unknown API${j.length>1?"s":""}: ${j.join(", ")}`);let le=De.value;return le.empty?ls("Mising DataModel in property 'type' or AutoQuery APIs to use in property 'apis'"):le.AnyQuery?null:ls(oe.NoQuery)}),ji=C(()=>De.value.AnyQuery&&Er(De.value.AnyQuery)),Vi=C(()=>De.value.Create&&Er(De.value.Create)),Oi=C(()=>De.value.AnyUpdate&&Er(De.value.AnyUpdate)),Kd=C(()=>Os(De.value.Create));C(()=>Os(De.value.AnyUpdate));const Bi=C(()=>Os(De.value.Delete));function wo(){W.value=null,de.value=null,ce({edit:void 0})}function ko(){H.value=!1,ce({create:void 0})}async function us(){await Ye(),wo()}async function Ir(){await Ye(),ko()}function Di(){var j;U.value=new nt,X.value=new nt,H.value=!1,de.value=null,W.value=null,be.value=!1,R.value=null,ue.value=i.skip,E.value=!1,q.value={take:Cs},O.value=!1;const le=i.prefs||Ys(l.getItem(Mr()));le&&(q.value=le),M.value=J.value.map(Pe=>({name:Pe.name,type:Pe.type,meta:Pe,settings:Object.assign({filters:[]},Ys(l.getItem(is(Pe.name))))})),isNaN(i.skip)||(ue.value=i.skip);let Te=(j=g.value)==null?void 0:j.name;if(v("queryString")){const Pe=location.search?location.search:location.hash.includes("?")?"?"+Ro(location.hash,"?"):"";let ze=Qs(Pe);typeof ze.create<"u"?H.value=typeof ze.create<"u":Te&&(typeof ze.edit=="string"||typeof ze.edit=="number")&&Ee(Te,ze.edit)}i.create===!0&&(H.value=!0),Te&&i.edit!=null&&Ee(Te,i.edit)}return Ct(async()=>{Di(),await Ye()}),(j,le)=>{const Te=ye("Alert"),Pe=ye("EnsureAccessDialog"),ze=ye("AutoCreateForm"),tt=ye("AutoEditForm"),st=ye("ErrorSummary"),Gn=ye("Loading"),xo=ye("SettingsIcons"),Sn=ye("DataGrid");return Ri.value?(h(),y("div",Iy,[Ae(Te,{innerHTML:Ri.value},null,8,["innerHTML"])])):ji.value?(h(),y("div",Ly,[Ae(yd,{"invalid-access":ji.value},null,8,["invalid-access"])])):(h(),y("div",zy,[H.value&&De.value.Create?(h(),y("div",Ry,[Vi.value?(h(),we(Pe,{key:0,title:`Create ${Qt.value}`,"invalid-access":Vi.value,"alert-class":"text-yellow-700",onDone:ko},null,8,["title","invalid-access"])):me(re).createform?he(j.$slots,"createform",{key:1,type:De.value.Create.request.name,configure:j.configureField,done:ko,save:Ir}):(h(),we(ze,{key:2,ref_key:"createForm",ref:ee,type:De.value.Create.request.name,configure:j.configureField,onDone:ko,onSave:Ir},{header:He(()=>[he(j.$slots,"formheader",{form:"create",formInstance:ee.value,apis:De.value,type:Qt.value})]),footer:He(()=>[he(j.$slots,"formfooter",{form:"create",formInstance:ee.value,apis:De.value,type:Qt.value})]),_:3},8,["type","configure"]))])):W.value&&De.value.AnyUpdate?(h(),y("div",jy,[Oi.value?(h(),we(Pe,{key:0,title:`Update ${Qt.value}`,"invalid-access":Oi.value,"alert-class":"text-yellow-700",onDone:wo},null,8,["title","invalid-access"])):me(re).editform?he(j.$slots,"editform",{key:1,model:W.value,type:De.value.AnyUpdate.request.name,deleteType:Bi.value?De.value.Delete.request.name:null,configure:j.configureField,done:wo,save:us}):(h(),we(tt,{key:2,ref_key:"editForm",ref:G,modelValue:W.value,"onUpdate:modelValue":le[0]||(le[0]=rt=>W.value=rt),type:De.value.AnyUpdate.request.name,deleteType:Bi.value?De.value.Delete.request.name:null,configure:j.configureField,onDone:wo,onSave:us,onDelete:us},{header:He(()=>[he(j.$slots,"formheader",{form:"edit",formInstance:G.value,apis:De.value,type:Qt.value,model:W.value,id:de.value,updateModel:Jt})]),footer:He(()=>[he(j.$slots,"formfooter",{form:"edit",formInstance:G.value,apis:De.value,type:Qt.value,model:W.value,id:de.value,updateModel:Jt})]),_:3},8,["modelValue","type","deleteType","configure"]))])):F("",!0),me(re).toolbar?he(j.$slots,"toolbar",{key:2}):w("toolbar")?(h(),y("div",Vy,[be.value?(h(),we(ki,{key:0,columns:J.value,prefs:q.value,onDone:le[1]||(le[1]=rt=>be.value=!1),onSave:as},null,8,["columns","prefs"])):F("",!0),d("div",Oy,[d("div",By,[w("preferences")?(h(),y("button",{key:0,type:"button",class:"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",title:`${Qt.value} Preferences`,onClick:le[2]||(le[2]=rt=>be.value=!be.value)},$y,8,Dy)):F("",!0),w("pagingNav")?(h(),y("button",{key:1,type:"button",class:L(["pl-2",x.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"First page",disabled:!x.value,onClick:le[3]||(le[3]=rt=>ke(-k.value))},Uy,10,Ny)):F("",!0),w("pagingNav")?(h(),y("button",{key:2,type:"button",class:L(["pl-2",V.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"Previous page",disabled:!V.value,onClick:le[4]||(le[4]=rt=>ke(-b.value))},Gy,10,Wy)):F("",!0),w("pagingNav")?(h(),y("button",{key:3,type:"button",class:L(["pl-2",Q.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"Next page",disabled:!Q.value,onClick:le[5]||(le[5]=rt=>ke(b.value))},Ky,10,Jy)):F("",!0),w("pagingNav")?(h(),y("button",{key:4,type:"button",class:L(["pl-2",K.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"Last page",disabled:!K.value,onClick:le[6]||(le[6]=rt=>ke(k.value))},Xy,10,Yy)):F("",!0)]),w("pagingInfo")?(h(),y("div",eb,[d("div",tb,[O.value?(h(),y("span",nb,"Querying...")):F("",!0),T.value.length?(h(),y("span",ob,[sb,Be(" "+te(ue.value+1)+" - "+te(Math.min(ue.value+T.value.length,k.value))+" ",1),d("span",null," of "+te(k.value),1)])):U.value.completed?(h(),y("span",rb,"No Results")):F("",!0)])])):F("",!0),d("div",ab,[w("refresh")?(h(),y("div",ib,[d("button",{type:"button",onClick:St,title:"Refresh",class:L(Z.value)},ub,2)])):F("",!0),w("downloadCsv")?(h(),y("div",cb,[d("button",{type:"button",onClick:Wd,title:"Download CSV",class:L(Z.value)},pb,2)])):F("",!0),w("copyApiUrl")?(h(),y("div",fb,[d("button",{type:"button",onClick:qd,title:"Copy API URL",class:L(Z.value)},[E.value?(h(),y("svg",hb,gb)):(h(),y("svg",vb,bb)),wb],2)])):F("",!0),I.value&&w("resetPreferences")?(h(),y("div",kb,[d("button",{type:"button",onClick:Gd,title:"Reset Preferences & Filters",class:L(Z.value)},Cb,2)])):F("",!0),w("filtersView")&&ae.value>0?(h(),y("div",Sb,[d("button",{type:"button",onClick:le[7]||(le[7]=rt=>_.value=_.value=="filters"?null:"filters"),class:L(Z.value),"aria-expanded":"false"},[Tb,d("span",Ab,te(ae.value)+" "+te(ae.value==1?"Filter":"Filters"),1),_.value!="filters"?(h(),y("svg",_b,Pb)):(h(),y("svg",Eb,Lb))],2)])):F("",!0),w("newItem")&&De.value.Create&&Kd.value?(h(),y("div",zb,[d("button",{type:"button",onClick:Jd,title:Qt.value,class:L(Z.value)},[jb,d("span",Vb,"New "+te(Qt.value),1)],10,Rb)])):F("",!0),me(re).toolbarbuttons?he(j.$slots,"toolbarbuttons",{key:6,toolbarButtonClass:Z.value}):F("",!0)])])])):F("",!0),_.value=="filters"?(h(),we(wi,{key:4,class:"border-y border-gray-200 dark:border-gray-800 py-8 my-2",definitions:zi.value,columns:M.value,onDone:le[8]||(le[8]=rt=>_.value=null),onChange:sn},null,8,["definitions","columns"])):F("",!0),X.value.error??U.value.error?(h(),we(st,{key:5,status:X.value.error??U.value.error},null,8,["status"])):O.value?(h(),we(Gn,{key:6,class:"p-2"})):F("",!0),R.value?(h(),y("div",Ob,[Ae(bi,{definitions:zi.value,column:R.value.column,"top-left":R.value.topLeft,onDone:et,onSave:kt},null,8,["definitions","column","top-left"])])):F("",!0),T.value.length?(h(),we(Sn,{key:8,id:j.id,items:T.value,type:j.type,"selected-columns":ie.value,class:"mt-1",onFiltersChanged:Ye,tableStyle:S.value,gridClass:z.value,grid2Class:$.value,grid3Class:A.value,grid4Class:N.value,tableClass:B.value,theadClass:D.value,theadRowClass:P.value,theadCellClass:ne.value,tbodyClass:j.tbodyClass,rowClass:ge,onRowSelected:je,rowStyle:j.rowStyle,headerTitle:j.headerTitle,headerTitles:j.headerTitles,visibleFrom:j.visibleFrom,onHeaderSelected:Ge},Ka({header:He(({column:rt,label:Tn})=>{var Hi;return[v("filtering")&&fe(rt)?(h(),y("div",Bb,[d("span",Db,te(Tn),1),Ae(xo,{column:M.value.find(Yd=>Yd.name.toLowerCase()===rt.toLowerCase()),"is-open":((Hi=R.value)==null?void 0:Hi.column.name)===rt},null,8,["column","is-open"])])):(h(),y("div",Hb,[d("span",$b,te(Tn),1)]))]}),_:2},[Qe(Object.keys(me(re)),rt=>({name:rt,fn:He(Tn=>[he(j.$slots,rt,io(Uo(Tn)))])}))]),1032,["id","items","type","selected-columns","tableStyle","gridClass","grid2Class","grid3Class","grid4Class","tableClass","theadClass","theadRowClass","theadCellClass","tbodyClass","rowStyle","headerTitle","headerTitles","visibleFrom"])):F("",!0)]))}}}),Fb={class:"flex"},Ub={key:0,class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Wb=d("g",{fill:"none"},[d("path",{d:"M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4 4v-6.586a1 1 0 0 0-.293-.707L3.293 7.293A1 1 0 0 1 3 6.586V4z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),qb=[Wb],Gb=d("path",{d:"M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.8-5.3 0-12.7-6.5-12.7H643c-10.2 0-19.9 4.9-25.9 13.2L512 558.6L406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z",fill:"currentColor"},null,-1),Jb=d("path",{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z",fill:"currentColor"},null,-1),Qb=[Gb,Jb],Kb={key:2,class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},Yb=d("g",{fill:"none"},[d("path",{d:"M8.998 4.71L6.354 7.354a.5.5 0 1 1-.708-.707L9.115 3.18A.499.499 0 0 1 9.498 3H9.5a.5.5 0 0 1 .354.147l.01.01l3.49 3.49a.5.5 0 1 1-.707.707l-2.65-2.649V16.5a.5.5 0 0 1-1 0V4.71z",fill:"currentColor"})],-1),Zb=[Yb],Xb={key:3,class:"w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e1=d("g",{fill:"none"},[d("path",{d:"M10.002 15.29l2.645-2.644a.5.5 0 0 1 .707.707L9.886 16.82a.5.5 0 0 1-.384.179h-.001a.5.5 0 0 1-.354-.147l-.01-.01l-3.49-3.49a.5.5 0 1 1 .707-.707l2.648 2.649V3.5a.5.5 0 0 1 1 0v11.79z",fill:"currentColor"})],-1),t1=[e1],n1=Ce({__name:"SettingsIcons",props:{column:{},isOpen:{type:Boolean}},setup(e){return(t,n)=>{var o,s,r,a,l,i,u;return h(),y("div",Fb,[(r=(s=(o=t.column)==null?void 0:o.settings)==null?void 0:s.filters)!=null&&r.length?(h(),y("svg",Ub,qb)):(h(),y("svg",{key:1,class:L(["w-4 h-4 transition-transform",t.isOpen?"rotate-180":""]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},Qb,2)),((l=(a=t.column)==null?void 0:a.settings)==null?void 0:l.sort)==="ASC"?(h(),y("svg",Kb,Zb)):((u=(i=t.column)==null?void 0:i.settings)==null?void 0:u.sort)==="DESC"?(h(),y("svg",Xb,t1)):F("",!0)])}}}),o1=Ce({__name:"EnsureAccessDialog",props:{title:{},subtitle:{},invalidAccess:{},alertClass:{}},emits:["done"],setup(e){return(t,n)=>{const o=ye("EnsureAccess"),s=ye("SlideOver");return t.invalidAccess?(h(),we(s,{key:0,title:t.title,onDone:n[0]||(n[0]=r=>t.$emit("done")),"content-class":"relative flex-1"},Ka({default:He(()=>[Ae(o,{alertClass:t.alertClass,invalidAccess:t.invalidAccess},null,8,["alertClass","invalidAccess"])]),_:2},[t.subtitle?{name:"subtitle",fn:He(()=>[Be(te(t.subtitle),1)]),key:"0"}:void 0]),1032,["title"])):F("",!0)}}}),s1=["for"],r1={class:"mt-1 relative rounded-md shadow-sm"},a1=["type","name","id","placeholder","value","aria-invalid","aria-describedby"],i1={key:0,class:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},l1=d("svg",{class:"h-5 w-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),u1=[l1],c1=["id"],d1=["id"],p1={inheritAttrs:!1},f1=Ce({...p1,__name:"TextInput",props:{status:{},id:{},type:{},inputClass:{},label:{},labelClass:{},help:{},placeholder:{},modelValue:{}},setup(e,{expose:t}){const n=f=>f.value,o=e;t({focus:r});const s=Y();function r(){var f;(f=s.value)==null||f.focus()}const a=C(()=>o.type||"text"),l=C(()=>o.label??it(Et(o.id))),i=C(()=>o.placeholder??l.value);let u=qe("ApiState",void 0);const c=C(()=>on.call({responseStatus:o.status??(u==null?void 0:u.error.value)},o.id)),p=C(()=>[Ut.base,c.value?Ut.invalid:Ut.valid,o.inputClass]);return(f,m)=>(h(),y("div",{class:L([f.$attrs.class])},[he(f.$slots,"header",Ue({inputElement:s.value,id:f.id,modelValue:f.modelValue,status:f.status},f.$attrs)),l.value?(h(),y("label",{key:0,for:f.id,class:L(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${f.labelClass??""}`)},te(l.value),11,s1)):F("",!0),d("div",r1,[d("input",Ue({ref_key:"inputElement",ref:s,type:a.value,name:f.id,id:f.id,class:p.value,placeholder:i.value,value:f.modelValue,onInput:m[0]||(m[0]=v=>f.$emit("update:modelValue",n(v.target))),"aria-invalid":c.value!=null,"aria-describedby":`${f.id}-error`,step:"any"},me(Gt)(f.$attrs,["class"])),null,16,a1),c.value?(h(),y("div",i1,u1)):F("",!0)]),c.value?(h(),y("p",{key:1,class:"mt-2 text-sm text-red-500",id:`${f.id}-error`},te(c.value),9,c1)):f.help?(h(),y("p",{key:2,class:"mt-2 text-sm text-gray-500",id:`${f.id}-description`},te(f.help),9,d1)):F("",!0),he(f.$slots,"footer",Ue({inputElement:s.value,id:f.id,modelValue:f.modelValue,status:f.status},f.$attrs))],2))}}),h1=["for"],m1={class:"mt-1 relative rounded-md shadow-sm"},g1=["name","id","placeholder","aria-invalid","aria-describedby"],v1=["id"],y1=["id"],b1={inheritAttrs:!1},w1=Ce({...b1,__name:"TextareaInput",props:{status:{},id:{},inputClass:{},label:{},labelClass:{},help:{},placeholder:{},modelValue:{}},setup(e){const t=i=>i.value,n=e,o=C(()=>n.label??it(Et(n.id))),s=C(()=>n.placeholder??o.value);let r=qe("ApiState",void 0);const a=C(()=>on.call({responseStatus:n.status??(r==null?void 0:r.error.value)},n.id)),l=C(()=>["shadow-sm "+Ut.base,a.value?"text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300":"text-gray-900 "+Ut.valid,n.inputClass]);return(i,u)=>(h(),y("div",{class:L([i.$attrs.class])},[o.value?(h(),y("label",{key:0,for:i.id,class:L(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${i.labelClass??""}`)},te(o.value),11,h1)):F("",!0),d("div",m1,[d("textarea",Ue({name:i.id,id:i.id,class:l.value,placeholder:s.value,onInput:u[0]||(u[0]=c=>i.$emit("update:modelValue",t(c.target))),"aria-invalid":a.value!=null,"aria-describedby":`${i.id}-error`},me(Gt)(i.$attrs,["class"])),te(i.modelValue),17,g1)]),a.value?(h(),y("p",{key:1,class:"mt-2 text-sm text-red-500",id:`${i.id}-error`},te(a.value),9,v1)):i.help?(h(),y("p",{key:2,class:"mt-2 text-sm text-gray-500",id:`${i.id}-description`},te(i.help),9,y1)):F("",!0)],2))}}),k1=["for"],x1=["id","name","value","aria-invalid","aria-describedby"],C1=["value"],S1=["id"],T1={inheritAttrs:!1},A1=Ce({...T1,__name:"SelectInput",props:{status:{},id:{},modelValue:{},inputClass:{},label:{},labelClass:{},options:{},values:{},entries:{}},setup(e){const t=l=>l.value,n=e,o=C(()=>n.label??it(Et(n.id)));let s=qe("ApiState",void 0);const r=C(()=>on.call({responseStatus:n.status??(s==null?void 0:s.error.value)},n.id)),a=C(()=>n.entries||(n.values?n.values.map(l=>({key:l,value:l})):n.options?Object.keys(n.options).map(l=>({key:l,value:n.options[l]})):[]));return(l,i)=>(h(),y("div",{class:L([l.$attrs.class])},[o.value?(h(),y("label",{key:0,for:l.id,class:L(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${l.labelClass??""}`)},te(o.value),11,k1)):F("",!0),d("select",Ue({id:l.id,name:l.id,class:["mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none sm:text-sm rounded-md dark:text-white dark:bg-gray-900 dark:border-gray-600",r.value?"border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500":"border-gray-300 text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",l.inputClass],value:l.modelValue,onInput:i[0]||(i[0]=u=>l.$emit("update:modelValue",t(u.target))),"aria-invalid":r.value!=null,"aria-describedby":`${l.id}-error`},me(Gt)(l.$attrs,["class"])),[(h(!0),y(Re,null,Qe(a.value,u=>(h(),y("option",{value:u.key},te(u.value),9,C1))),256))],16,x1),r.value?(h(),y("p",{key:1,class:"mt-2 text-sm text-red-500",id:`${l.id}-error`},te(r.value),9,S1)):F("",!0)],2))}}),_1={class:"flex items-center h-5"},M1=["id","name","checked"],P1={class:"ml-3 text-sm"},E1=["for"],I1={key:0,class:"mt-2 text-sm text-red-500",id:"`${id}-error`"},L1={key:1,class:"mt-2 text-sm text-gray-500",id:"`${id}-description`"},z1={inheritAttrs:!1},R1=Ce({...z1,__name:"CheckboxInput",props:{modelValue:{type:Boolean},status:{},id:{},inputClass:{},label:{},labelClass:{},help:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=C(()=>n.label??it(Et(n.id)));let s=qe("ApiState",void 0);const r=C(()=>on.call({responseStatus:n.status??(s==null?void 0:s.error.value)},n.id));return(a,l)=>(h(),y("div",{class:L(["relative flex items-start",a.$attrs.class])},[d("div",_1,[d("input",Ue({id:a.id,name:a.id,type:"checkbox",checked:a.modelValue,onInput:l[0]||(l[0]=i=>a.$emit("update:modelValue",i.target.checked)),class:["focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800",a.inputClass]},me(Gt)(a.$attrs,["class"])),null,16,M1)]),d("div",P1,[d("label",{for:a.id,class:L(`font-medium text-gray-700 dark:text-gray-300 ${a.labelClass??""}`)},te(o.value),11,E1),r.value?(h(),y("p",I1,te(r.value),1)):a.help?(h(),y("p",L1,te(a.help),1)):F("",!0)])],2))}}),j1=["id"],V1=["for"],O1={class:"mt-1 relative rounded-md shadow-sm"},B1=["id","name","value"],D1={class:"flex flex-wrap pb-1.5"},H1={class:"pt-1.5 pl-1"},$1={class:"inline-flex rounded-full items-center py-0.5 pl-2.5 pr-1 text-sm font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300"},N1=["onClick"],F1=d("svg",{class:"h-2 w-2",stroke:"currentColor",fill:"none",viewBox:"0 0 8 8"},[d("path",{"stroke-linecap":"round","stroke-width":"1.5",d:"M1 1l6 6m0-6L1 7"})],-1),U1=[F1],W1={class:"pt-1.5 pl-1 shrink"},q1=["type","name","id","aria-invalid","aria-describedby"],G1=["id"],J1=["onMouseover","onClick"],Q1={class:"block truncate"},K1={key:1,class:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},Y1=d("svg",{class:"h-5 w-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),Z1=[Y1],X1=["id"],ew=["id"],tw={inheritAttrs:!1},nw=Ce({...tw,__name:"TagInput",props:{status:{},id:{},type:{},inputClass:{},label:{},labelClass:{},help:{},modelValue:{default:()=>[]},delimiters:{default:()=>[","]},allowableValues:{},string:{type:Boolean},converter:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=t;function s(M){return n.converter?n.converter(M):M}const r=C(()=>dt(s(n.modelValue),M=>typeof M=="string"?M.trim().length==0?[]:M.split(","):M)||[]),a=Y(),l=Y(!1),i=C(()=>!n.allowableValues||n.allowableValues.length==0?[]:n.allowableValues.filter(M=>!r.value.includes(M)&&M.toLowerCase().includes(p.value.toLowerCase())));function u(M){a.value=M}const c=Y(null),p=Y(""),f=C(()=>n.type||"text"),m=C(()=>n.label??it(Et(n.id)));let v=qe("ApiState",void 0);const w=C(()=>on.call({responseStatus:n.status??(v==null?void 0:v.error.value)},n.id)),S=C(()=>["w-full cursor-text flex flex-wrap sm:text-sm rounded-md dark:text-white dark:bg-gray-900 border focus-within:border-transparent focus-within:ring-1 focus-within:outline-none",w.value?"pr-10 border-red-300 text-red-900 placeholder-red-300 focus-within:outline-none focus-within:ring-red-500 focus-within:border-red-500":"shadow-sm border-gray-300 dark:border-gray-600 focus-within:ring-indigo-500 focus-within:border-indigo-500",n.inputClass]),z=M=>P(r.value.filter(U=>U!=M));function $(M){var U;document.activeElement===M.target&&((U=c.value)==null||U.focus())}const A=Y();function N(){l.value=!0,A.value=!0}function B(){N()}function D(){pe(Z()),A.value=!1,setTimeout(()=>{A.value||(l.value=!1)},200)}function P(M){const U=n.string?M.join(","):M;o("update:modelValue",U)}function ne(M){if(M.key=="Backspace"&&p.value.length==0&&r.value.length>0&&z(r.value[r.value.length-1]),!(!n.allowableValues||n.allowableValues.length==0))if(M.code=="Escape"||M.code=="Tab")l.value=!1;else if(M.code=="Home")a.value=i.value[0],se();else if(M.code=="End")a.value=i.value[i.value.length-1],se();else if(M.code=="ArrowDown"){if(l.value=!0,!a.value)a.value=i.value[0];else{const U=i.value.indexOf(a.value);a.value=U+1<i.value.length?i.value[U+1]:i.value[0]}ve()}else if(M.code=="ArrowUp"){if(!a.value)a.value=i.value[i.value.length-1];else{const U=i.value.indexOf(a.value);a.value=U-1>=0?i.value[U-1]:i.value[i.value.length-1]}ve()}else M.code=="Enter"?a.value&&l.value?(pe(a.value),M.preventDefault()):l.value=!1:l.value=i.value.length>0}function Z(){if(p.value.length==0)return"";let M=$m(p.value.trim(),",");return M[0]==","&&(M=M.substring(1)),M=M.trim(),M.length==0&&l.value&&i.value.length>0?a.value:M}function ge(M){const U=Z();if(U.length>0){const X=n.delimiters.some(_=>_==M.key);if(X&&M.preventDefault(),M.key=="Enter"||M.key=="NumpadEnter"||M.key.length==1&&X){pe(U);return}}}const re={behavior:"smooth",block:"nearest",inline:"nearest",scrollMode:"if-needed"};function se(){setTimeout(()=>{let M=Ks(`#${n.id}-tag li.active`);M&&M.scrollIntoView(re)},0)}function ve(){setTimeout(()=>{let M=Ks(`#${n.id}-tag li.active`);M&&("scrollIntoViewIfNeeded"in M?M.scrollIntoViewIfNeeded(re):M.scrollIntoView(re))},0)}function pe(M){if(M.length===0)return;const U=Array.from(r.value);U.indexOf(M)==-1&&U.push(M),P(U),p.value="",l.value=!1}function J(M){var U;const X=(U=M.clipboardData)==null?void 0:U.getData("Text");ie(X)}function ie(M){if(!M)return;const U=new RegExp(`\\n|\\t|${n.delimiters.join("|")}`),X=Array.from(r.value);M.split(U).map(_=>_.trim()).forEach(_=>{X.indexOf(_)==-1&&X.push(_)}),P(X),p.value=""}return(M,U)=>(h(),y("div",{class:L([M.$attrs.class]),id:`${M.id}-tag`,onmousemove:"cancelBlur=true"},[m.value?(h(),y("label",{key:0,for:M.id,class:L(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${M.labelClass??""}`)},te(m.value),11,V1)):F("",!0),d("div",O1,[d("input",{type:"hidden",id:M.id,name:M.id,value:r.value.join(",")},null,8,B1),d("button",{class:L(S.value),onClick:ct($,["prevent"]),onFocus:U[2]||(U[2]=X=>l.value=!0),tabindex:"-1"},[d("div",D1,[(h(!0),y(Re,null,Qe(r.value,X=>(h(),y("div",H1,[d("span",$1,[Be(te(X)+" ",1),d("button",{type:"button",onClick:_=>z(X),class:"flex-shrink-0 ml-1 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 dark:text-indigo-500 hover:bg-indigo-200 dark:hover:bg-indigo-800 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none focus:bg-indigo-500 focus:text-white dark:focus:text-black"},U1,8,N1)])]))),256)),d("div",W1,[jn(d("input",Ue({ref_key:"txtInput",ref:c,type:f.value,role:"combobox","aria-controls":"options","aria-expanded":"false",autocomplete:"off",spellcheck:"false",name:`${M.id}-txt`,id:`${M.id}-txt`,class:"p-0 dark:bg-transparent rounded-md border-none focus:!border-none focus:!outline-none",style:`box-shadow:none !important;width:${p.value.length+1}ch`,"onUpdate:modelValue":U[0]||(U[0]=X=>p.value=X),"aria-invalid":w.value!=null,"aria-describedby":`${M.id}-error`,onKeydown:ne,onKeypress:ge,onPaste:ct(J,["prevent","stop"]),onFocus:B,onBlur:D,onClick:U[1]||(U[1]=X=>l.value=!0)},me(Gt)(M.$attrs,["class","required"])),null,16,q1),[[lh,p.value]])])])],34),l.value&&i.value.length?(h(),y("ul",{key:0,class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",onKeydown:ne,id:`${M.id}-options`,role:"listbox"},[(h(!0),y(Re,null,Qe(i.value,X=>(h(),y("li",{class:L([X===a.value?"active bg-indigo-600 text-white":"text-gray-900 dark:text-gray-100","relative cursor-default select-none py-2 pl-3 pr-9"]),onMouseover:_=>u(X),onClick:_=>pe(X),role:"option",tabindex:"-1"},[d("span",Q1,te(X),1)],42,J1))),256))],40,G1)):F("",!0),w.value?(h(),y("div",K1,Z1)):F("",!0)]),w.value?(h(),y("p",{key:1,class:"mt-2 text-sm text-red-500",id:`${M.id}-error`},te(w.value),9,X1)):M.help?(h(),y("p",{key:2,class:"mt-2 text-sm text-gray-500",id:`${M.id}-description`},te(M.help),9,ew)):F("",!0)],10,j1))}}),ow={class:"relative flex-grow mr-2 sm:mr-4"},sw=["for"],rw={class:"block mt-2"},aw={class:"sr-only"},iw=["multiple","name","id","placeholder","aria-invalid","aria-describedby"],lw={key:0,class:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"},uw=d("svg",{class:"h-5 w-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),cw=[uw],dw=["id"],pw=["id"],fw={key:0},hw=["title"],mw=["alt","src"],gw={key:1,class:"mt-3"},vw={class:"w-full"},yw={class:"pr-6 align-bottom pb-2"},bw=["title"],ww=["src","onError"],kw=["href"],xw={key:1,class:"overflow-hidden"},Cw={class:"align-top pb-2 whitespace-nowrap"},Sw={key:0,class:"text-gray-500 dark:text-gray-400 text-sm bg-white dark:bg-black"},Tw=Ce({__name:"FileInput",props:{multiple:{type:Boolean},status:{},id:{},inputClass:{},label:{},labelClass:{},help:{},placeholder:{},modelValue:{},values:{},files:{}},setup(e){var t;const n=e,o=Y(null),{assetsPathResolver:s,fallbackPathResolver:r}=Wn(),a={},l=Y(),i=Y(((t=n.files)==null?void 0:t.map(u))||[]);function u(B){return B.filePath=s(B.filePath),B}n.values&&n.values.length>0&&(i.value=n.values.map(B=>{let D=B.replace(/\\/g,"/");return{fileName:mm(On(D,"/"),"."),filePath:D,contentType:Dl(D)}}).map(u));const c=C(()=>n.label??it(Et(n.id))),p=C(()=>n.placeholder??c.value);let f=qe("ApiState",void 0);const m=C(()=>on.call({responseStatus:n.status??(f==null?void 0:f.error.value)},n.id)),v=C(()=>["block w-full sm:text-sm rounded-md dark:text-white dark:bg-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 dark:file:bg-violet-900 file:text-violet-700 dark:file:text-violet-200 hover:file:bg-violet-100 dark:hover:file:bg-violet-800",m.value?"pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500":"text-slate-500 dark:text-slate-400",n.inputClass]),w=B=>{let D=B.target;l.value="",i.value=Array.from(D.files||[]).map(P=>({fileName:P.name,filePath:Bg(P),contentLength:P.size,contentType:P.type||Dl(P.name)}))},S=()=>{var B;return(B=o.value)==null?void 0:B.click()},z=B=>B==null?!1:B.startsWith("data:")||B.startsWith("blob:"),$=C(()=>{if(i.value.length>0)return i.value[0].filePath;let B=typeof n.modelValue=="string"?n.modelValue:n.values&&n.values[0];return B&&Zn(s(B))||null}),A=B=>!B||B.startsWith("data:")||B.endsWith(".svg")?"":"rounded-full object-cover";function N(B){l.value=r($.value)}return xn(Og),(B,D)=>(h(),y("div",{class:L(["flex",B.multiple?"flex-col":"justify-between"])},[d("div",ow,[c.value?(h(),y("label",{key:0,for:B.id,class:L(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${B.labelClass??""}`)},te(c.value),11,sw)):F("",!0),d("div",rw,[d("span",aw,te(B.help??c.value),1),d("input",Ue({ref_key:"input",ref:o,type:"file",multiple:B.multiple,name:B.id,id:B.id,class:v.value,placeholder:p.value,"aria-invalid":m.value!=null,"aria-describedby":`${B.id}-error`},B.$attrs,{onChange:w}),null,16,iw),m.value?(h(),y("div",lw,cw)):F("",!0)]),m.value?(h(),y("p",{key:1,class:"mt-2 text-sm text-red-500",id:`${B.id}-error`},te(m.value),9,dw)):B.help?(h(),y("p",{key:2,class:"mt-2 text-sm text-gray-500",id:`${B.id}-description`},te(B.help),9,pw)):F("",!0)]),B.multiple?(h(),y("div",gw,[d("table",vw,[(h(!0),y(Re,null,Qe(i.value,P=>(h(),y("tr",null,[d("td",yw,[d("div",{class:"flex w-full",title:z(P.filePath)?"":P.filePath},[d("img",{src:a[me(Zn)(P.filePath)]||me(s)(me(Zn)(P.filePath)),class:L(["mr-2 h-8 w-8",A(P.filePath)]),onError:ne=>a[me(Zn)(P.filePath)]=me(r)(me(Zn)(P.filePath))},null,42,ww),z(P.filePath)?(h(),y("span",xw,te(P.fileName),1)):(h(),y("a",{key:0,href:me(s)(P.filePath||""),target:"_blank",class:"overflow-hidden"},te(P.fileName),9,kw))],8,bw)]),d("td",Cw,[P.contentLength&&P.contentLength>0?(h(),y("span",Sw,te(me(Qc)(P.contentLength)),1)):F("",!0)])]))),256))])])):(h(),y("div",fw,[$.value?(h(),y("div",{key:0,class:"shrink-0 cursor-pointer",title:z($.value)?"":$.value},[d("img",{onClick:S,class:L(["h-16 w-16",A($.value)]),alt:`Current ${c.value??""}`,src:l.value||me(s)($.value),onError:N},null,42,mw)],8,hw)):F("",!0)]))],2))}}),Aw=["id"],_w=["for"],Mw={class:"relative mt-1"},Pw=["id","placeholder"],Ew=d("svg",{class:"h-5 w-5 text-gray-400 dark:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z","clip-rule":"evenodd"})],-1),Iw=[Ew],Lw=["id"],zw=["onMouseover","onClick"],Rw=d("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z","clip-rule":"evenodd"})],-1),jw=[Rw],Vw={key:2,class:"absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none",tabindex:"-1"},Ow=d("svg",{class:"h-5 w-5 text-red-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1),Bw=[Ow],Dw=["id"],Hw=["id"],$w=Ce({__name:"Autocomplete",props:{status:{},id:{},type:{},label:{},help:{},placeholder:{},multiple:{type:Boolean,default:!1},required:{type:Boolean},options:{default:()=>[]},modelValue:{},match:{},viewCount:{default:100},pageSize:{default:8}},emits:["update:modelValue"],setup(e,{expose:t,emit:n}){const o=Y(!1),s=e,r=n;t({toggle:re});function a(J){return Array.isArray(s.modelValue)&&s.modelValue.indexOf(J)>=0}const l=C(()=>s.label??it(Et(s.id)));let i=qe("ApiState",void 0);const u=C(()=>on.call({responseStatus:s.status??(i==null?void 0:i.error.value)},s.id)),c=C(()=>[Ut.base,u.value?Ut.invalid:Ut.valid]),p=Y(null),f=Y(""),m=Y(null),v=Y(s.viewCount),w=Y([]),S=C(()=>f.value?s.options.filter(J=>s.match(J,f.value)).slice(0,v.value):s.options),z=["Tab","Escape","ArrowDown","ArrowUp","Enter","PageUp","PageDown","Home","End"];function $(J){m.value=J,w.value.indexOf(J)>Math.floor(v.value*.9)&&(v.value+=s.viewCount,pe())}const A=[",",`
`,"	"];function N(J){var ie;const M=(ie=J.clipboardData)==null?void 0:ie.getData("Text");B(M)}function B(J){if(!J)return;const ie=A.some(M=>J.includes(M));if(!s.multiple||!ie){const M=s.options.filter(U=>s.match(U,J));M.length==1&&(ve(M[0]),o.value=!1,Ls())}else if(ie){const M=new RegExp("\\r|\\n|\\t|,"),U=J.split(M).filter(X=>X.trim()).map(X=>s.options.find(_=>s.match(_,X))).filter(X=>!!X);if(U.length>0){f.value="",o.value=!1,m.value=null;let X=Array.from(s.modelValue||[]);U.forEach(_=>{a(_)?X=X.filter(H=>H!=_):X.push(_)}),r("update:modelValue",X),Ls()}}}function D(J){z.indexOf(J.code)||se()}function P(J){if(!(J.shiftKey||J.ctrlKey||J.altKey)){if(!o.value){J.code=="ArrowDown"&&(o.value=!0,m.value=w.value[0]);return}if(J.code=="Escape")o.value&&(J.stopPropagation(),o.value=!1);else if(J.code=="Tab")o.value=!1;else if(J.code=="Home")m.value=w.value[0],Z();else if(J.code=="End")m.value=w.value[w.value.length-1],Z();else if(J.code=="ArrowDown"){if(!m.value)m.value=w.value[0];else{const ie=w.value.indexOf(m.value);m.value=ie+1<w.value.length?w.value[ie+1]:w.value[0]}ge()}else if(J.code=="ArrowUp"){if(!m.value)m.value=w.value[w.value.length-1];else{const ie=w.value.indexOf(m.value);m.value=ie-1>=0?w.value[ie-1]:w.value[w.value.length-1]}ge()}else J.code=="Enter"&&(m.value?(ve(m.value),s.multiple||(J.preventDefault(),Ls())):o.value=!1)}}const ne={behavior:"smooth",block:"nearest",inline:"nearest",scrollMode:"if-needed"};function Z(){setTimeout(()=>{let J=Ks(`#${s.id}-autocomplete li.active`);J&&J.scrollIntoView(ne)},0)}function ge(){setTimeout(()=>{let J=Ks(`#${s.id}-autocomplete li.active`);J&&("scrollIntoViewIfNeeded"in J?J.scrollIntoViewIfNeeded(ne):J.scrollIntoView(ne))},0)}function re(J){var ie;o.value=J,J&&(se(),(ie=p.value)==null||ie.focus())}function se(){o.value=!0,pe()}function ve(J){if(f.value="",o.value=!1,s.multiple){let ie=Array.from(s.modelValue||[]);a(J)?ie=ie.filter(M=>M!=J):ie.push(J),m.value=null,r("update:modelValue",ie)}else{let ie=J;s.modelValue==J&&(ie=null),r("update:modelValue",ie)}}function pe(){w.value=S.value}return _t(f,pe),(J,ie)=>(h(),y("div",{id:`${J.id}-autocomplete`},[l.value?(h(),y("label",{key:0,for:`${J.id}-text`,class:"block text-sm font-medium text-gray-700 dark:text-gray-300"},te(l.value),9,_w)):F("",!0),d("div",Mw,[jn(d("input",Ue({ref_key:"txtInput",ref:p,id:`${J.id}-text`,type:"text",role:"combobox","aria-controls":"options","aria-expanded":"false",autocomplete:"off",spellcheck:"false","onUpdate:modelValue":ie[0]||(ie[0]=M=>f.value=M),class:c.value,placeholder:J.multiple||!J.modelValue?J.placeholder:"",onFocus:se,onKeydown:P,onKeyup:D,onClick:se,onPaste:N,required:!1},J.$attrs),null,16,Pw),[[ua,f.value]]),d("button",{type:"button",onClick:ie[1]||(ie[1]=M=>re(!o.value)),class:"absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",tabindex:"-1"},Iw),o.value?(h(),y("ul",{key:0,class:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",onKeydown:P,id:`${J.id}-options`,role:"listbox"},[(h(!0),y(Re,null,Qe(w.value,M=>(h(),y("li",{class:L([M===m.value?"active bg-indigo-600 text-white":"text-gray-900 dark:text-gray-100","relative cursor-default select-none py-2 pl-3 pr-9"]),onMouseover:U=>$(M),onClick:U=>ve(M),role:"option",tabindex:"-1"},[he(J.$slots,"item",io(Uo(M))),a(M)?(h(),y("span",{key:0,class:L(["absolute inset-y-0 right-0 flex items-center pr-4",M===m.value?"text-white":"text-indigo-600"])},jw,2)):F("",!0)],42,zw))),256))],40,Lw)):!J.multiple&&J.modelValue?(h(),y("div",{key:1,onKeydown:P,onClick:ie[2]||(ie[2]=M=>re(!o.value)),class:"h-8 -mt-8 ml-3 pt-0.5"},[he(J.$slots,"item",io(Uo(J.modelValue)))],32)):F("",!0),u.value?(h(),y("div",Vw,Bw)):F("",!0)]),u.value?(h(),y("p",{key:1,class:"mt-2 text-sm text-red-500",id:`${J.id}-error`},te(u.value),9,Dw)):J.help?(h(),y("p",{key:2,class:"mt-2 text-sm text-gray-500",id:`${J.id}-description`},te(J.help),9,Hw)):F("",!0)],8,Aw))}}),Nw=["id","name","value"],Fw={class:"block truncate"},Uw=Ce({__name:"Combobox",props:{id:{},modelValue:{},multiple:{type:Boolean},options:{},values:{},entries:{}},emits:["update:modelValue"],setup(e,{expose:t,emit:n}){const o=e;t({toggle(m){var v;(v=l.value)==null||v.toggle(m)}});const s=n;function r(m){s("update:modelValue",m)}const a=C(()=>o.multiple!=null?o.multiple:Array.isArray(o.modelValue)),l=Y();function i(m,v){return!v||m.value.toLowerCase().includes(v.toLowerCase())}const u=C(()=>o.entries||(o.values?o.values.map(m=>({key:m,value:m})):o.options?Object.keys(o.options).map(m=>({key:m,value:o.options[m]})):[])),c=Y(a.value?[]:null);function p(){let m=o.modelValue&&typeof o.modelValue=="object"?o.modelValue.key:o.modelValue;m==null||m===""?c.value=a.value?[]:null:typeof m=="string"?c.value=u.value.find(v=>v.key===m)||null:Array.isArray(m)&&(c.value=u.value.filter(v=>m.includes(v.key)))}Ct(p);const f=C(()=>c.value==null?"":Array.isArray(c.value)?c.value.map(m=>encodeURIComponent(m.key)).join(","):c.value.key);return(m,v)=>{const w=ye("Autocomplete");return h(),y(Re,null,[d("input",{type:"hidden",id:m.id,name:m.id,value:f.value},null,8,Nw),Ae(w,Ue({ref_key:"input",ref:l,id:m.id,options:u.value,match:i,multiple:a.value},m.$attrs,{modelValue:c.value,"onUpdate:modelValue":[v[0]||(v[0]=S=>c.value=S),r]}),{item:He(({key:S,value:z})=>[d("span",Fw,te(z),1)]),_:1},16,["id","options","multiple","modelValue"])],64)}}}),Ww=Ce({__name:"DynamicInput",props:{input:{},modelValue:{},api:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,o=t,s=C(()=>n.input.type||"text"),r="ignore,css,options,meta,allowableValues,allowableEntries,op,prop,type,id,name".split(","),a=C(()=>Gt(n.input,r)),l=Y(dt(n.modelValue[n.input.id],u=>n.input.type==="file"?null:n.input.type==="date"&&u instanceof Date?oi(u):n.input.type==="time"?Bc(u):u));_t(l,()=>{n.modelValue[n.input.id]=l.value,o("update:modelValue",n.modelValue)});const i=C(()=>{const u=n.modelValue[n.input.id];if(n.input.type!=="file"||!u)return[];if(typeof u=="string")return[{filePath:u,fileName:On(u,"/")}];if(!Array.isArray(u)&&typeof u=="object")return u;if(Array.isArray(u)){const c=[];return u.forEach(p=>{typeof p=="string"?c.push({filePath:p,fileName:On(p,"/")}):typeof p=="object"&&c.push(p)}),c}});return(u,c)=>{var p,f,m,v,w,S,z,$,A,N,B,D,P,ne,Z,ge,re,se,ve,pe,J,ie,M,U,X,_,H,de;const W=ye("SelectInput"),be=ye("CheckboxInput"),R=ye("TagInput"),ue=ye("Combobox"),E=ye("FileInput"),q=ye("TextareaInput"),O=ye("MarkdownInput"),I=ye("TextInput");return me(xe).component(s.value)?(h(),we(qa(me(xe).component(s.value)),Ue({key:0,id:u.input.id,modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=ae=>l.value=ae),status:(p=u.api)==null?void 0:p.error,"input-class":(f=u.input.css)==null?void 0:f.input,"label-class":(m=u.input.css)==null?void 0:m.label},a.value),null,16,["id","modelValue","status","input-class","label-class"])):s.value=="select"?(h(),we(W,Ue({key:1,id:u.input.id,modelValue:l.value,"onUpdate:modelValue":c[1]||(c[1]=ae=>l.value=ae),status:(v=u.api)==null?void 0:v.error,"input-class":(w=u.input.css)==null?void 0:w.input,"label-class":(S=u.input.css)==null?void 0:S.label,entries:u.input.allowableEntries,values:u.input.allowableValues},a.value),null,16,["id","modelValue","status","input-class","label-class","entries","values"])):s.value=="checkbox"?(h(),we(be,Ue({key:2,id:u.input.id,modelValue:l.value,"onUpdate:modelValue":c[2]||(c[2]=ae=>l.value=ae),status:(z=u.api)==null?void 0:z.error,"input-class":($=u.input.css)==null?void 0:$.input,"label-class":(A=u.input.css)==null?void 0:A.label},a.value),null,16,["id","modelValue","status","input-class","label-class"])):s.value=="tag"?(h(),we(R,Ue({key:3,id:u.input.id,modelValue:l.value,"onUpdate:modelValue":c[3]||(c[3]=ae=>l.value=ae),status:(N=u.api)==null?void 0:N.error,"input-class":(B=u.input.css)==null?void 0:B.input,"label-class":(D=u.input.css)==null?void 0:D.label,allowableValues:u.input.allowableValues,string:((P=u.input.prop)==null?void 0:P.type)=="String"},a.value),null,16,["id","modelValue","status","input-class","label-class","allowableValues","string"])):s.value=="combobox"?(h(),we(ue,Ue({key:4,id:u.input.id,modelValue:l.value,"onUpdate:modelValue":c[4]||(c[4]=ae=>l.value=ae),status:(ne=u.api)==null?void 0:ne.error,"input-class":(Z=u.input.css)==null?void 0:Z.input,"label-class":(ge=u.input.css)==null?void 0:ge.label,entries:u.input.allowableEntries,values:u.input.allowableValues},a.value),null,16,["id","modelValue","status","input-class","label-class","entries","values"])):s.value=="file"?(h(),we(E,Ue({key:5,id:u.input.id,status:(re=u.api)==null?void 0:re.error,modelValue:l.value,"onUpdate:modelValue":c[5]||(c[5]=ae=>l.value=ae),"input-class":(se=u.input.css)==null?void 0:se.input,"label-class":(ve=u.input.css)==null?void 0:ve.label,files:i.value},a.value),null,16,["id","status","modelValue","input-class","label-class","files"])):s.value=="textarea"?(h(),we(q,Ue({key:6,id:u.input.id,modelValue:l.value,"onUpdate:modelValue":c[6]||(c[6]=ae=>l.value=ae),status:(pe=u.api)==null?void 0:pe.error,"input-class":(J=u.input.css)==null?void 0:J.input,"label-class":(ie=u.input.css)==null?void 0:ie.label},a.value),null,16,["id","modelValue","status","input-class","label-class"])):s.value=="MarkdownInput"?(h(),we(O,Ue({key:7,id:u.input.id,modelValue:l.value,"onUpdate:modelValue":c[7]||(c[7]=ae=>l.value=ae),status:(M=u.api)==null?void 0:M.error,"input-class":(U=u.input.css)==null?void 0:U.input,"label-class":(X=u.input.css)==null?void 0:X.label},a.value),null,16,["id","modelValue","status","input-class","label-class"])):(h(),we(I,Ue({key:8,type:s.value,id:u.input.id,modelValue:l.value,"onUpdate:modelValue":c[8]||(c[8]=ae=>l.value=ae),status:(_=u.api)==null?void 0:_.error,"input-class":(H=u.input.css)==null?void 0:H.input,"label-class":(de=u.input.css)==null?void 0:de.label},a.value),null,16,["type","id","modelValue","status","input-class","label-class"]))}}}),qw={class:"lookup-field"},Gw=["name","value"],Jw={key:0,class:"flex justify-between"},Qw=["for"],Kw={key:0,class:"flex items-center"},Yw={class:"text-sm text-gray-500 dark:text-gray-400 pr-1"},Zw=d("span",{class:"sr-only"},"Clear",-1),Xw=d("svg",{class:"h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),e2=[Zw,Xw],t2={key:1,class:"mt-1 relative"},n2={class:"w-full inline-flex truncate"},o2={class:"text-blue-700 dark:text-blue-300 flex cursor-pointer"},s2=d("span",{class:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},[d("svg",{class:"h-5 w-5 text-gray-400 dark:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[d("path",{"fill-rule":"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1),r2=["id"],a2=["id"],i2=Ce({__name:"LookupInput",props:{id:{},status:{},input:{},metadataType:{},modelValue:{},label:{},labelClass:{},help:{}},emits:["update:modelValue"],setup(e,{emit:t}){const{config:n}=Wn(),{metadataApi:o}=Bt(),s=e,r=t,a=C(()=>s.id||s.input.id),l=C(()=>s.label??it(Et(a.value)));let i=qe("ApiState",void 0);const u=qe("client"),c=C(()=>on.call({responseStatus:s.status??(i==null?void 0:i.error.value)},a.value)),p=Y(""),f=Y(""),m=C(()=>Oe(s.modelValue,a.value)),v=C(()=>Pt(s.metadataType).find(A=>A.name.toLowerCase()==a.value.toLowerCase())),w=C(()=>{var A,N,B;return((B=Ot((N=(A=v.value)==null?void 0:A.ref)==null?void 0:N.model))==null?void 0:B.icon)||n.value.tableIcon});let S;function z(A){if(A){if(S==null){console.warn("No ModalProvider required by LookupInput");return}S.openModal({name:"ModalLookup",ref:A},N=>{if(console.debug("openModal",p.value," -> ",N,ks.setRefValue(A,N),A),N){const B=Oe(N,A.refId);p.value=ks.setRefValue(A,N)||B;const D=me(s.modelValue);D[a.value]=B,r("update:modelValue",D)}})}}function $(){s.modelValue[a.value]=null,p.value=""}return Ct(async()=>{var A,N;S=qe("ModalProvider",void 0);const B=s.modelValue;s.modelValue[a.value]||(s.modelValue[a.value]=null);const D=v.value,P=D==null?void 0:D.ref;if(!P){console.warn(`No RefInfo for property '${a.value}'`);return}p.value="";let ne=P.selfId==null?Oe(B,D.name):Oe(B,P.selfId);if(Wo(ne)&&(ne=Oe(B,P.refId)),ne!=null&&((A=o.value)==null?void 0:A.operations.find(Z=>{var ge;return((ge=Z.dataModel)==null?void 0:ge.name)==P.model}))!=null){const Z=Oe(B,D.name);if(Wo(Z))return;if(p.value=`${Z}`,f.value=D.name,P.refLabel!=null){const ge=Pt(s.metadataType).find(se=>se.type==P.model);ge==null&&console.warn(`Could not find ${P.model} Property on ${s.metadataType.name}`);const re=ge!=null?Oe(B,ge.name):null;if(re!=null){let se=Oe(re,P.refLabel);se&&(p.value=`${se}`,ks.setValue(P.model,ne,P.refLabel,se))}else{const se=((N=D.attributes)==null?void 0:N.some(pe=>pe.name=="Computed"))==!0;let ve=await ks.getOrFetchValue(u,o.value,P.model,P.refId,P.refLabel,se,ne);p.value=ve||`${P.model}: ${p.value}`}}}}),(A,N)=>{var B;const D=ye("Icon");return h(),y("div",qw,[d("input",{type:"hidden",name:a.value,value:m.value},null,8,Gw),l.value?(h(),y("div",Jw,[d("label",{for:a.value,class:L(`block text-sm font-medium text-gray-700 dark:text-gray-300 ${A.labelClass??""}`)},te(l.value),11,Qw),m.value?(h(),y("div",Kw,[d("span",Yw,te(m.value),1),d("button",{onClick:$,type:"button",title:"clear",class:"mr-1 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:ring-offset-black"},e2)])):F("",!0)])):F("",!0),(B=v.value)!=null&&B.ref?(h(),y("div",t2,[d("button",{type:"button",class:"lookup flex relative w-full bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",onClick:N[0]||(N[0]=P=>z(v.value.ref)),"aria-haspopup":"listbox","aria-expanded":"true","aria-labelledby":"listbox-label"},[d("span",n2,[d("span",o2,[Ae(D,{class:"mr-1 w-5 h-5",image:w.value},null,8,["image"]),d("span",null,te(p.value),1)])]),s2])])):F("",!0),c.value?(h(),y("p",{key:2,class:"mt-2 text-sm text-red-500",id:`${a.value}-error`},te(c.value),9,r2)):A.help?(h(),y("p",{key:3,class:"mt-2 text-sm text-gray-500",id:`${a.value}-description`},te(A.help),9,a2)):F("",!0)])}}}),l2=Ce({__name:"AutoFormFields",props:{modelValue:{},type:{},api:{},formLayout:{},configureField:{},configureFormLayout:{},hideSummary:{type:Boolean},flexClass:{default:"flex flex-1 flex-col justify-between"},divideClass:{default:"divide-y divide-gray-200 px-4 sm:px-6"},spaceClass:{default:"space-y-6 pt-6 pb-5"},fieldsetClass:{default:"grid grid-cols-12 gap-6"}},emits:["update:modelValue"],setup(e,{expose:t,emit:n}){const o=e,s=n;t({forceUpdate:r,props:o,updateValue:l});function r(){var A;const N=Xe();(A=N==null?void 0:N.proxy)==null||A.$forceUpdate()}function a(A,N){l(A.id,Oe(N,A.id))}function l(A,N){o.modelValue[A]=N,s("update:modelValue",o.modelValue),r()}const{metadataApi:i,apiOf:u,typeOf:c,typeOfRef:p,createFormLayout:f,Crud:m}=Bt(),v=C(()=>o.type||vo(o.modelValue)),w=C(()=>c(v.value)),S=C(()=>{var A,N;return p((N=(A=i.value)==null?void 0:A.operations.find(B=>B.request.name==v.value))==null?void 0:N.dataModel)||w.value}),z=C(()=>{const A=w.value;if(!A){if(o.formLayout){const Z=o.formLayout.map(ge=>{const re={name:ge.id,type:qg(ge.type)},se=Object.assign({prop:re},ge);return o.configureField&&o.configureField(se),se});return o.configureFormLayout&&o.configureFormLayout(Z),Z}throw new Error(`MetadataType for ${v.value} not found`)}const N=Pt(A),B=S.value,D=o.formLayout?o.formLayout:f(A),P=[],ne=u(A.name);return D.forEach(Z=>{var ge;const re=N.find(pe=>pe.name==Z.name);if(Z.ignore)return;const se=((ge=B==null?void 0:B.properties)==null?void 0:ge.find(pe=>{var J;return pe.name.toLowerCase()==((J=Z.name)==null?void 0:J.toLowerCase())}))??re,ve=Object.assign({prop:se,op:ne},Z);o.configureField&&o.configureField(ve),P.push(ve)}),o.configureFormLayout&&o.configureFormLayout(P),P}),$=C(()=>z.value.filter(A=>A.type!="hidden").map(A=>A.id));return(A,N)=>{var B;const D=ye("ErrorSummary"),P=ye("LookupInput"),ne=ye("DynamicInput");return h(),y(Re,null,[A.hideSummary?F("",!0):(h(),we(D,{key:0,status:(B=A.api)==null?void 0:B.error,except:$.value},null,8,["status","except"])),d("div",{class:L(A.flexClass)},[d("div",{class:L(A.divideClass)},[d("div",{class:L(A.spaceClass)},[d("fieldset",{class:L(A.fieldsetClass)},[(h(!0),y(Re,null,Qe(z.value,Z=>{var ge,re,se;return h(),y("div",{key:Z.id,class:L(["w-full",((ge=Z.css)==null?void 0:ge.field)??(Z.type=="textarea"?"col-span-12":"col-span-12 xl:col-span-6"+(Z.type=="checkbox"?" flex items-center":"")),Z.type=="hidden"?"hidden":""])},[((re=Z.prop)==null?void 0:re.ref)!=null&&Z.type!="file"&&!Z.prop.isPrimaryKey?(h(),we(P,{key:0,metadataType:S.value,input:Z,modelValue:A.modelValue,"onUpdate:modelValue":ve=>a(Z,ve),status:(se=A.api)==null?void 0:se.error},null,8,["metadataType","input","modelValue","onUpdate:modelValue","status"])):(h(),we(ne,{key:1,input:Z,modelValue:A.modelValue,"onUpdate:modelValue":N[0]||(N[0]=ve=>A.$emit("update:modelValue",ve)),api:A.api},null,8,["input","modelValue","api"]))],2)}),128))],2)],2)],2)],2)],64)}}});function kr(){const e=Y(!1),t=Y(),n=Y(),o=qe("client");function s({message:m,errorCode:v,fieldName:w,errors:S}){return v||(v="Exception"),S||(S=[]),t.value=w?new ro({errorCode:v,message:m,errors:[new da({fieldName:w,errorCode:v,message:m})]}):new ro({errorCode:v,message:m,errors:S})}function r({fieldName:m,message:v,errorCode:w}){if(w||(w="Exception"),!t.value)s({fieldName:m,message:v,errorCode:w});else{let S=new ro(t.value);S.errors=[...(S.errors||[]).filter(z=>{var $;return(($=z.fieldName)==null?void 0:$.toLowerCase())!==(m==null?void 0:m.toLowerCase())}),new da({fieldName:m,message:v,errorCode:w})],t.value=S}}async function a(m,v,w){e.value=!0;let S=await o.api(Yn(m),v,w);return e.value=!1,n.value=S.response,t.value=S.error,S}async function l(m,v,w){e.value=!0;let S=await o.apiVoid(Yn(m),v,w);return e.value=!1,n.value=S.response,t.value=S.error,S}async function i(m,v,w,S){e.value=!0;let z=await o.apiForm(Yn(m),v,w,S);return e.value=!1,n.value=z.response,t.value=z.error,z}async function u(m,v,w,S){e.value=!0;let z=await o.apiFormVoid(Yn(m),v,w,S);return e.value=!1,n.value=z.response,t.value=z.error,z}async function c(m,v,w,S){return $c(o,m,v,w,S)}function p(m,v){const w=Y(new nt),S=Nc(async z=>{w.value=await o.api(z)},v==null?void 0:v.delayMs);return No(async()=>{const z=m(),$=ai(vr(z));$&&(w.value=new nt({response:$})),(v==null?void 0:v.delayMs)===0?w.value=await o.api(z):S(z)}),(async()=>w.value=await o.api(m(),v==null?void 0:v.args,v==null?void 0:v.method))(),w}let f={setError:s,addFieldError:r,loading:e,error:t,api:a,apiVoid:l,apiForm:i,apiFormVoid:u,swr:c,swrEffect:p,unRefs:Yn,setRef:Dc};return en("ApiState",f),f}const u2={key:0},c2={class:"text-red-700"},d2=d("b",null,"type",-1),p2={key:0},f2={key:2},h2=["innerHTML"],m2=d("input",{type:"submit",class:"hidden"},null,-1),g2={class:"flex justify-end"},v2=d("div",null,null,-1),y2={key:2,class:"relative z-10","aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"},b2=d("div",{class:"fixed inset-0"},null,-1),w2={class:"fixed inset-0 overflow-hidden"},k2={class:"flex min-h-0 flex-1 flex-col overflow-auto"},x2={class:"flex-1"},C2={class:"bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6"},S2={class:"flex items-start justify-between space-x-3"},T2={class:"space-y-1"},A2={key:0},_2={key:2},M2=["innerHTML"],P2={class:"flex h-7 items-center"},E2={class:"flex justify-end"},I2=Ce({__name:"AutoForm",props:{type:{},modelValue:{},heading:{},subHeading:{},showLoading:{type:Boolean,default:!0},jsconfig:{default:"eccn,edv"},formStyle:{default:"card"},configureField:{},configureFormLayout:{},panelClass:{},bodyClass:{},formClass:{},innerFormClass:{},headerClass:{default:"p-6"},buttonsClass:{},headingClass:{},subHeadingClass:{},submitLabel:{default:"Submit"},allowSubmit:{}},emits:["success","error","update:modelValue","done"],setup(e,{expose:t,emit:n}){const o=e,s=n,r=Y(),a=Y(1),l=Y();t({forceUpdate:i,props:o,setModel:u,formFields:r,submit:M,close:W});function i(){var R;a.value++,se.value=re();const ue=Xe();(R=ue==null?void 0:ue.proxy)==null||R.$forceUpdate()}async function u(R){Object.assign(se.value,R),i(),await jt(()=>null)}en("ModalProvider",{openModal:f});const c=Y(),p=Y();function f(R,ue){c.value=R,p.value=ue}async function m(R){p.value&&p.value(R),c.value=void 0,p.value=void 0}const v=kr(),{getTypeName:w}=Fc(),{typeOf:S,Crud:z,createDto:$}=Bt(),A=Y(new nt),N=C(()=>o.panelClass||vt.panelClass(o.formStyle)),B=C(()=>o.formClass||o.formStyle=="card"?"shadow sm:rounded-md":_o.formClass),D=C(()=>o.headingClass||vt.headingClass(o.formStyle)),P=C(()=>o.subHeadingClass||vt.subHeadingClass(o.formStyle)),ne=C(()=>typeof o.buttonsClass=="string"?o.buttonsClass:vt.buttonsClass),Z=C(()=>{var R;return o.type?w(o.type):(R=o.modelValue)!=null&&R.getTypeName?o.modelValue.getTypeName():null}),ge=C(()=>S(Z.value)),re=()=>o.modelValue||J(),se=Y(re()),ve=C(()=>v.loading.value),pe=C(()=>{var R;return o.heading||((R=S(Z.value))==null?void 0:R.description)||it(Z.value)});function J(){return typeof o.type=="string"?$(o.type):o.type?new o.type:o.modelValue}async function ie(R){if(!R||R.tagName!="FORM"){console.error("Not a valid form",R);return}const ue=J();let E=dt(ue==null?void 0:ue.getMethod,I=>typeof I=="function"?I():null)||"POST",q=dt(ue==null?void 0:ue.createResponse,I=>typeof I=="function"?I():null)==null;const O=o.jsconfig;if(Ne.hasRequestBody(E)){let I=new ue.constructor,ae=new FormData(R);console.debug("AutoForm.submitForm",I,ae),q?A.value=await v.apiFormVoid(I,ae,{jsconfig:O}):A.value=await v.apiForm(I,ae,{jsconfig:O})}else{let I=new ue.constructor(Nm(se.value));console.debug("AutoForm.submit",I),q?A.value=await v.apiVoid(I,{jsconfig:O}):A.value=await v.api(I,{jsconfig:O})}A.value.succeeded?(s("success",A.value.response),W()):s("error",A.value.error)}async function M(){ie(l.value)}function U(R){s("update:modelValue",R)}function X(){s("done")}const _=Y(!1),H=Y(""),de={entering:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-full",to:"translate-x-0"},leaving:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-0",to:"translate-x-full"}};_t(_,()=>{Bn(de,H,_.value),_.value||setTimeout(X,700)}),_.value=!0;function W(){o.formStyle=="slideOver"?_.value=!1:X()}const be=R=>{R.key==="Escape"&&W()};return Ct(()=>window.addEventListener("keydown",be)),xn(()=>window.removeEventListener("keydown",be)),(R,ue)=>{var E,q,O,I,ae,Se,g,b,T,k,x;const V=ye("AutoFormFields"),Q=ye("FormLoading"),K=ye("PrimaryButton"),ee=ye("CloseButton"),G=ye("SecondaryButton"),oe=ye("ModalLookup");return h(),y("div",null,[ge.value?R.formStyle=="card"?(h(),y("div",{key:1,class:L(N.value)},[d("form",{ref_key:"elForm",ref:l,onSubmit:ue[0]||(ue[0]=ct(fe=>ie(fe.target),["prevent"])),autocomplete:"off",class:L(R.innerFormClass)},[d("div",{class:L(R.bodyClass)},[d("div",{class:L(R.headerClass)},[R.$slots.heading?(h(),y("div",p2,[he(R.$slots,"heading")])):(h(),y("h3",{key:1,class:L(D.value)},te(pe.value),3)),R.$slots.subheading?(h(),y("div",f2,[he(R.$slots,"subheading")])):R.subHeading?(h(),y("p",{key:3,class:L(P.value)},te(R.subHeading),3)):(E=ge.value)!=null&&E.notes?(h(),y("p",{key:4,class:L(["notes",P.value]),innerHTML:(q=ge.value)==null?void 0:q.notes},null,10,h2)):F("",!0)],2),he(R.$slots,"header",{instance:(O=Xe())==null?void 0:O.exposed,model:se.value}),m2,(h(),we(V,{ref_key:"formFields",ref:r,key:a.value,type:R.type,modelValue:se.value,"onUpdate:modelValue":U,api:A.value,configureField:R.configureField,configureFormLayout:R.configureFormLayout},null,8,["type","modelValue","api","configureField","configureFormLayout"])),he(R.$slots,"footer",{instance:(I=Xe())==null?void 0:I.exposed,model:se.value})],2),he(R.$slots,"buttons",{},()=>{var fe,ce;return[d("div",{class:L(ne.value)},[d("div",null,[he(R.$slots,"leftbuttons",{instance:(fe=Xe())==null?void 0:fe.exposed,model:se.value})]),d("div",null,[R.showLoading&&ve.value?(h(),we(Q,{key:0})):F("",!0)]),d("div",g2,[v2,Ae(K,{disabled:R.allowSubmit?!R.allowSubmit(se.value):!1},{default:He(()=>[Be(te(R.submitLabel),1)]),_:1},8,["disabled"]),he(R.$slots,"rightbuttons",{instance:(ce=Xe())==null?void 0:ce.exposed,model:se.value})])],2)]})],34)],2)):(h(),y("div",y2,[b2,d("div",w2,[d("div",{onMousedown:W,class:"absolute inset-0 overflow-hidden"},[d("div",{onMousedown:ue[2]||(ue[2]=ct(()=>{},["stop"])),class:"pointer-events-none fixed inset-y-0 right-0 flex pl-10"},[d("div",{class:L(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",H.value])},[d("form",{ref_key:"elForm",ref:l,class:L(B.value),onSubmit:ue[1]||(ue[1]=ct(fe=>ie(fe.target),["prevent"]))},[d("div",k2,[d("div",x2,[d("div",C2,[d("div",S2,[d("div",T2,[R.$slots.heading?(h(),y("div",A2,[he(R.$slots,"heading")])):(h(),y("h3",{key:1,class:L(D.value)},te(pe.value),3)),R.$slots.subheading?(h(),y("div",_2,[he(R.$slots,"subheading")])):R.subHeading?(h(),y("p",{key:3,class:L(P.value)},te(R.subHeading),3)):(ae=ge.value)!=null&&ae.notes?(h(),y("p",{key:4,class:L(["notes",P.value]),innerHTML:(Se=ge.value)==null?void 0:Se.notes},null,10,M2)):F("",!0)]),d("div",P2,[Ae(ee,{"button-class":"bg-gray-50 dark:bg-gray-900",onClose:W})])])]),he(R.$slots,"header",{instance:(g=Xe())==null?void 0:g.exposed,model:se.value}),(h(),we(V,{ref_key:"formFields",ref:r,key:a.value,type:R.type,modelValue:se.value,"onUpdate:modelValue":U,api:A.value,configureField:R.configureField,configureFormLayout:R.configureFormLayout},null,8,["type","modelValue","api","configureField","configureFormLayout"])),he(R.$slots,"footer",{instance:(b=Xe())==null?void 0:b.exposed,model:se.value})])]),d("div",{class:L(ne.value)},[d("div",null,[he(R.$slots,"leftbuttons",{instance:(T=Xe())==null?void 0:T.exposed,model:se.value})]),d("div",null,[R.showLoading&&ve.value?(h(),we(Q,{key:0})):F("",!0)]),d("div",E2,[Ae(G,{onClick:W,disabled:ve.value},{default:He(()=>[Be("Cancel")]),_:1},8,["disabled"]),Ae(K,{class:"ml-4",disabled:R.allowSubmit?!R.allowSubmit(se.value):!1},{default:He(()=>[Be(te(R.submitLabel),1)]),_:1},8,["disabled"]),he(R.$slots,"rightbuttons",{instance:(k=Xe())==null?void 0:k.exposed,model:se.value})])],2)],34)],2)],32)],32)])])):(h(),y("div",u2,[d("p",c2,[Be("Could not create form for unknown "),d2,Be(" "+te(Z.value),1)])])),((x=c.value)==null?void 0:x.name)=="ModalLookup"&&c.value.ref?(h(),we(oe,{key:3,"ref-info":c.value.ref,onDone:m},null,8,["ref-info"])):F("",!0)])}}}),L2={key:0},z2={class:"text-red-700"},R2=d("b",null,"type",-1),j2={key:0},V2={key:2},O2=["innerHTML"],B2={class:"flex justify-end"},D2={key:2,class:"relative z-10","aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"},H2=d("div",{class:"fixed inset-0"},null,-1),$2={class:"fixed inset-0 overflow-hidden"},N2={class:"flex min-h-0 flex-1 flex-col overflow-auto"},F2={class:"flex-1"},U2={class:"bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6"},W2={class:"flex items-start justify-between space-x-3"},q2={class:"space-y-1"},G2={key:0},J2={key:2},Q2=["innerHTML"],K2={class:"flex h-7 items-center"},Y2={class:"flex justify-end"},Z2=Ce({__name:"AutoCreateForm",props:{type:{},formStyle:{default:"slideOver"},panelClass:{},formClass:{},headingClass:{},subHeadingClass:{},buttonsClass:{},heading:{},subHeading:{},autosave:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},showCancel:{type:Boolean,default:!0},configureField:{},configureFormLayout:{}},emits:["done","save","error"],setup(e,{expose:t,emit:n}){const o=e,s=n,r=Y(),a=Y(1);t({forceUpdate:l,props:o,setModel:i,formFields:r});function l(){var W,be;a.value++,(W=r.value)==null||W.forceUpdate();const R=Xe();(be=R==null?void 0:R.proxy)==null||be.$forceUpdate()}function i(W){Object.assign(B.value,W),l()}function u(W){}en("ModalProvider",{openModal:f});const c=Y(),p=Y();function f(W,be){c.value=W,p.value=be}async function m(W){p.value&&p.value(W),c.value=void 0,p.value=void 0}const{typeOf:v,typeProperties:w,Crud:S,createDto:z,formValues:$}=Bt(),A=C(()=>vo(o.type)),N=C(()=>v(A.value)),B=Y(typeof o.type=="string"?z(o.type):o.type?new o.type:null),D=C(()=>o.panelClass||vt.panelClass(o.formStyle)),P=C(()=>o.formClass||vt.formClass(o.formStyle)),ne=C(()=>o.headingClass||vt.headingClass(o.formStyle)),Z=C(()=>o.subHeadingClass||vt.subHeadingClass(o.formStyle)),ge=C(()=>o.buttonsClass||vt.buttonsClass),re=C(()=>S.model(N.value)),se=C(()=>{var W;return o.heading||((W=v(A.value))==null?void 0:W.description)||(re.value?`New ${it(re.value)}`:it(A.value))}),ve=Y(new nt);let pe=kr(),J=C(()=>pe.loading.value);xe.interceptors.has("AutoCreateForm.new")&&xe.interceptors.invoke("AutoCreateForm.new",{props:o,model:B});async function ie(W){var be,R;let ue=W.target;if(!o.autosave){s("save",new B.value.constructor($(ue,w(N.value))));return}let E=dt((be=B.value)==null?void 0:be.getMethod,O=>typeof O=="function"?O():null)||"POST",q=dt((R=B.value)==null?void 0:R.createResponse,O=>typeof O=="function"?O():null)==null;if(Ne.hasRequestBody(E)){let O=new B.value.constructor,I=new FormData(ue);q?ve.value=await pe.apiFormVoid(O,I,{jsconfig:"eccn"}):ve.value=await pe.apiForm(O,I,{jsconfig:"eccn"})}else{let O=$(ue,w(N.value)),I=new B.value.constructor(O);q?ve.value=await pe.apiVoid(I,{jsconfig:"eccn"}):ve.value=await pe.api(I,{jsconfig:"eccn"})}ve.value.succeeded?(ue.reset(),s("save",ve.value.response)):s("error",ve.value.error)}function M(){s("done")}const U=Y(!1),X=Y(""),_={entering:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-full",to:"translate-x-0"},leaving:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-0",to:"translate-x-full"}};_t(U,()=>{Bn(_,X,U.value),U.value||setTimeout(M,700)}),U.value=!0;function H(){o.formStyle=="slideOver"?U.value=!1:M()}const de=W=>{W.key==="Escape"&&H()};return Ct(()=>window.addEventListener("keydown",de)),xn(()=>window.removeEventListener("keydown",de)),(W,be)=>{var R,ue,E,q,O,I,ae,Se,g;const b=ye("AutoFormFields"),T=ye("FormLoading"),k=ye("SecondaryButton"),x=ye("PrimaryButton"),V=ye("CloseButton"),Q=ye("ModalLookup");return h(),y("div",null,[N.value?W.formStyle=="card"?(h(),y("div",{key:1,class:L(D.value)},[d("form",{onSubmit:ct(ie,["prevent"])},[d("div",{class:L(P.value)},[d("div",null,[W.$slots.heading?(h(),y("div",j2,[he(W.$slots,"heading")])):(h(),y("h3",{key:1,class:L(ne.value)},te(se.value),3)),W.$slots.subheading?(h(),y("div",V2,[he(W.$slots,"subheading")])):W.subHeading?(h(),y("p",{key:3,class:L(Z.value)},te(W.subHeading),3)):(R=N.value)!=null&&R.notes?(h(),y("p",{key:4,class:L(["notes",Z.value]),innerHTML:(ue=N.value)==null?void 0:ue.notes},null,10,O2)):F("",!0)]),he(W.$slots,"header",{formInstance:(E=Xe())==null?void 0:E.exposed,model:B.value}),(h(),we(b,{ref_key:"formFields",ref:r,key:a.value,modelValue:B.value,"onUpdate:modelValue":u,api:ve.value,configureField:W.configureField,configureFormLayout:W.configureFormLayout},null,8,["modelValue","api","configureField","configureFormLayout"])),he(W.$slots,"footer",{formInstance:(q=Xe())==null?void 0:q.exposed,model:B.value})],2),d("div",{class:L(ge.value)},[d("div",null,[W.showLoading&&me(J)?(h(),we(T,{key:0})):F("",!0)]),d("div",B2,[W.showCancel?(h(),we(k,{key:0,onClick:H,disabled:me(J)},{default:He(()=>[Be("Cancel")]),_:1},8,["disabled"])):F("",!0),Ae(x,{type:"submit",class:"ml-4",disabled:me(J)},{default:He(()=>[Be("Save")]),_:1},8,["disabled"])])],2)],32)],2)):(h(),y("div",D2,[H2,d("div",$2,[d("div",{onMousedown:H,class:"absolute inset-0 overflow-hidden"},[d("div",{onMousedown:be[0]||(be[0]=ct(()=>{},["stop"])),class:"pointer-events-none fixed inset-y-0 right-0 flex pl-10"},[d("div",{class:L(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",X.value])},[d("form",{class:L(P.value),onSubmit:ct(ie,["prevent"])},[d("div",N2,[d("div",F2,[d("div",U2,[d("div",W2,[d("div",q2,[W.$slots.heading?(h(),y("div",G2,[he(W.$slots,"heading")])):(h(),y("h3",{key:1,class:L(ne.value)},te(se.value),3)),W.$slots.subheading?(h(),y("div",J2,[he(W.$slots,"subheading")])):W.subHeading?(h(),y("p",{key:3,class:L(Z.value)},te(W.subHeading),3)):(O=N.value)!=null&&O.notes?(h(),y("p",{key:4,class:L(["notes",Z.value]),innerHTML:(I=N.value)==null?void 0:I.notes},null,10,Q2)):F("",!0)]),d("div",K2,[Ae(V,{"button-class":"bg-gray-50 dark:bg-gray-900",onClose:H})])])]),he(W.$slots,"header",{formInstance:(ae=Xe())==null?void 0:ae.exposed,model:B.value}),(h(),we(b,{ref_key:"formFields",ref:r,key:a.value,modelValue:B.value,"onUpdate:modelValue":u,api:ve.value,configureField:W.configureField,configureFormLayout:W.configureFormLayout},null,8,["modelValue","api","configureField","configureFormLayout"])),he(W.$slots,"footer",{formInstance:(Se=Xe())==null?void 0:Se.exposed,model:B.value})])]),d("div",{class:L(ge.value)},[d("div",null,[W.showLoading&&me(J)?(h(),we(T,{key:0})):F("",!0)]),d("div",Y2,[W.showCancel?(h(),we(k,{key:0,onClick:H,disabled:me(J)},{default:He(()=>[Be("Cancel")]),_:1},8,["disabled"])):F("",!0),Ae(x,{type:"submit",class:"ml-4",disabled:me(J)},{default:He(()=>[Be("Save")]),_:1},8,["disabled"])])],2)],34)],2)],32)],32)])])):(h(),y("div",L2,[d("p",z2,[Be("Could not create form for unknown "),R2,Be(" "+te(A.value),1)])])),((g=c.value)==null?void 0:g.name)=="ModalLookup"&&c.value.ref?(h(),we(Q,{key:3,"ref-info":c.value.ref,onDone:m},null,8,["ref-info"])):F("",!0)])}}}),X2={key:0},ek={class:"text-red-700"},tk=d("b",null,"type",-1),nk={key:0},ok={key:2},sk=["innerHTML"],rk={class:"flex justify-end"},ak={key:2,class:"relative z-10","aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"},ik=d("div",{class:"fixed inset-0"},null,-1),lk={class:"fixed inset-0 overflow-hidden"},uk={class:"flex min-h-0 flex-1 flex-col overflow-auto"},ck={class:"flex-1"},dk={class:"bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6"},pk={class:"flex items-start justify-between space-x-3"},fk={class:"space-y-1"},hk={key:0},mk={key:2},gk=["innerHTML"],vk={class:"flex h-7 items-center"},yk={class:"flex justify-end"},bk=Ce({__name:"AutoEditForm",props:{modelValue:{},type:{},deleteType:{},formStyle:{default:"slideOver"},panelClass:{},formClass:{},headingClass:{},subHeadingClass:{},heading:{},subHeading:{},autosave:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},configureField:{},configureFormLayout:{}},emits:["done","save","delete","error"],setup(e,{expose:t,emit:n}){const o=e,s=n,r=Y(),a=Y(1);t({forceUpdate:l,props:o,setModel:i,formFields:r});function l(){var I;a.value++,Z.value=ne();const ae=Xe();(I=ae==null?void 0:ae.proxy)==null||I.$forceUpdate()}function i(I){Object.assign(Z.value,I)}function u(I){}en("ModalProvider",{openModal:f});const c=Y(),p=Y();function f(I,ae){c.value=I,p.value=ae}async function m(I){p.value&&p.value(I),c.value=void 0,p.value=void 0}const{typeOf:v,apiOf:w,typeProperties:S,createFormLayout:z,getPrimaryKey:$,Crud:A,createDto:N,formValues:B}=Bt(),D=C(()=>vo(o.type)),P=C(()=>v(D.value)),ne=()=>typeof o.type=="string"?N(o.type,js(o.modelValue)):o.type?new o.type(js(o.modelValue)):null,Z=Y(ne()),ge=C(()=>o.panelClass||vt.panelClass(o.formStyle)),re=C(()=>o.formClass||vt.formClass(o.formStyle)),se=C(()=>o.headingClass||vt.headingClass(o.formStyle)),ve=C(()=>o.subHeadingClass||vt.subHeadingClass(o.formStyle)),pe=C(()=>A.model(P.value)),J=C(()=>{var I;return o.heading||((I=v(D.value))==null?void 0:I.description)||(pe.value?`Update ${it(pe.value)}`:it(D.value))}),ie=Y(new nt);let M=Object.assign({},js(o.modelValue));xe.interceptors.has("AutoEditForm.new")&&xe.interceptors.invoke("AutoEditForm.new",{props:o,model:Z,origModel:M});let U=kr(),X=C(()=>U.loading.value);const _=()=>dt(v(A.model(P.value)),I=>$(I));function H(I){const{op:ae,prop:Se}=I;ae&&(A.isPatch(ae)||A.isUpdate(ae))&&(I.disabled=Se==null?void 0:Se.isPrimaryKey),o.configureField&&o.configureField(I)}async function de(I){var ae,Se;let g=I.target;if(!o.autosave){s("save",new Z.value.constructor(B(g,S(P.value))));return}let b=dt((ae=Z.value)==null?void 0:ae.getMethod,x=>typeof x=="function"?x():null)||"POST",T=dt((Se=Z.value)==null?void 0:Se.createResponse,x=>typeof x=="function"?x():null)==null,k=_();if(Ne.hasRequestBody(b)){let x=new Z.value.constructor,V=Oe(o.modelValue,k.name),Q=new FormData(g);k&&!Array.from(Q.keys()).some(oe=>oe.toLowerCase()==k.name.toLowerCase())&&Q.append(k.name,V);let K=[];const ee=D.value&&w(D.value);if(ee&&A.isPatch(ee)){let oe=z(P.value),fe={};if(k&&(fe[k.name]=V),oe.forEach(ce=>{let ke=ce.id,Ee=Oe(M,ke);if(k&&k.name.toLowerCase()===ke.toLowerCase())return;let je=Q.get(ke);xe.interceptors.has("AutoEditForm.save.formLayout")&&xe.interceptors.invoke("AutoEditForm.save.formLayout",{origValue:Ee,formLayout:oe,input:ce,newValue:je});let Ge=je!=null,et=ce.type==="checkbox"?Ge!==!!Ee:ce.type==="file"?Ge:je!=Ee;!je&&!Ee&&(et=!1),et&&(je?fe[ke]=je:ce.type!=="file"&&K.push(ke))}),xe.interceptors.has("AutoEditForm.save")&&xe.interceptors.invoke("AutoEditForm.save",{origModel:M,formLayout:oe,dirtyValues:fe}),Array.from(Q.keys()).filter(ce=>!fe[ce]).forEach(ce=>Q.delete(ce)),Array.from(Q.keys()).filter(ce=>ce.toLowerCase()!=k.name.toLowerCase()).length==0&&K.length==0){q();return}}const G=K.length>0?{jsconfig:"eccn",reset:K}:{jsconfig:"eccn"};T?ie.value=await U.apiFormVoid(x,Q,G):ie.value=await U.apiForm(x,Q,G)}else{let x=B(g,S(P.value));k&&!Oe(x,k.name)&&(x[k.name]=Oe(o.modelValue,k.name));let V=new Z.value.constructor(x);T?ie.value=await U.apiVoid(V,{jsconfig:"eccn"}):ie.value=await U.api(V,{jsconfig:"eccn"})}ie.value.succeeded?(g.reset(),s("save",ie.value.response)):s("error",ie.value.error)}async function W(I){let ae=_();const Se=ae?Oe(o.modelValue,ae.name):null;if(!Se){console.error(`Could not find Primary Key for Type ${D.value} (${pe.value})`);return}const g={[ae.name]:Se},b=typeof o.deleteType=="string"?N(o.deleteType,g):o.deleteType?new o.deleteType(g):null;dt(b.createResponse,T=>typeof T=="function"?T():null)==null?ie.value=await U.apiVoid(b):ie.value=await U.api(b),ie.value.succeeded?s("delete",ie.value.response):s("error",ie.value.error)}function be(){s("done")}const R=Y(!1),ue=Y(""),E={entering:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-full",to:"translate-x-0"},leaving:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-0",to:"translate-x-full"}};_t(R,()=>{Bn(E,ue,R.value),R.value||setTimeout(be,700)}),R.value=!0;function q(){o.formStyle=="slideOver"?R.value=!1:be()}const O=I=>{I.key==="Escape"&&q()};return Ct(()=>window.addEventListener("keydown",O)),xn(()=>window.removeEventListener("keydown",O)),(I,ae)=>{var Se,g,b,T,k,x,V,Q,K;const ee=ye("AutoFormFields"),G=ye("ConfirmDelete"),oe=ye("FormLoading"),fe=ye("SecondaryButton"),ce=ye("PrimaryButton"),ke=ye("CloseButton"),Ee=ye("ModalLookup");return h(),y("div",null,[P.value?I.formStyle=="card"?(h(),y("div",{key:1,class:L(ge.value)},[d("form",{onSubmit:ct(de,["prevent"])},[d("div",{class:L(re.value)},[d("div",null,[I.$slots.heading?(h(),y("div",nk,[he(I.$slots,"heading")])):(h(),y("h3",{key:1,class:L(se.value)},te(J.value),3)),I.$slots.subheading?(h(),y("div",ok,[he(I.$slots,"subheading")])):I.subHeading?(h(),y("p",{key:3,class:L(ve.value)},te(I.subHeading),3)):(Se=P.value)!=null&&Se.notes?(h(),y("p",{key:4,class:L(["notes",ve.value]),innerHTML:(g=P.value)==null?void 0:g.notes},null,10,sk)):F("",!0)]),he(I.$slots,"header",{formInstance:(b=Xe())==null?void 0:b.exposed,model:Z.value}),(h(),we(ee,{ref_key:"formFields",ref:r,key:a.value,modelValue:Z.value,"onUpdate:modelValue":u,api:ie.value,configureField:I.configureField,configureFormLayout:I.configureFormLayout},null,8,["modelValue","api","configureField","configureFormLayout"])),he(I.$slots,"footer",{formInstance:(T=Xe())==null?void 0:T.exposed,model:Z.value})],2),d("div",{class:L(me(vt).buttonsClass)},[d("div",null,[I.deleteType?(h(),we(G,{key:0,onDelete:W})):F("",!0)]),d("div",null,[I.showLoading&&me(X)?(h(),we(oe,{key:0})):F("",!0)]),d("div",rk,[Ae(fe,{onClick:q,disabled:me(X)},{default:He(()=>[Be("Cancel")]),_:1},8,["disabled"]),Ae(ce,{type:"submit",class:"ml-4",disabled:me(X)},{default:He(()=>[Be("Save")]),_:1},8,["disabled"])])],2)],32)],2)):(h(),y("div",ak,[ik,d("div",lk,[d("div",{onMousedown:q,class:"absolute inset-0 overflow-hidden"},[d("div",{onMousedown:ae[0]||(ae[0]=ct(()=>{},["stop"])),class:"pointer-events-none fixed inset-y-0 right-0 flex pl-10"},[d("div",{class:L(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",ue.value])},[d("form",{class:L(re.value),onSubmit:ct(de,["prevent"])},[d("div",uk,[d("div",ck,[d("div",dk,[d("div",pk,[d("div",fk,[I.$slots.heading?(h(),y("div",hk,[he(I.$slots,"heading")])):(h(),y("h3",{key:1,class:L(se.value)},te(J.value),3)),I.$slots.subheading?(h(),y("div",mk,[he(I.$slots,"subheading")])):I.subHeading?(h(),y("p",{key:3,class:L(ve.value)},te(I.subHeading),3)):(k=P.value)!=null&&k.notes?(h(),y("p",{key:4,class:L(["notes",ve.value]),innerHTML:(x=P.value)==null?void 0:x.notes},null,10,gk)):F("",!0)]),d("div",vk,[Ae(ke,{"button-class":"bg-gray-50 dark:bg-gray-900",onClose:q})])])]),he(I.$slots,"header",{formInstance:(V=Xe())==null?void 0:V.exposed,model:Z.value}),(h(),we(ee,{ref_key:"formFields",ref:r,key:a.value,modelValue:Z.value,"onUpdate:modelValue":u,api:ie.value,configureField:H,configureFormLayout:I.configureFormLayout},null,8,["modelValue","api","configureFormLayout"])),he(I.$slots,"footer",{formInstance:(Q=Xe())==null?void 0:Q.exposed,model:Z.value})])]),d("div",{class:L(me(vt).buttonsClass)},[d("div",null,[I.deleteType?(h(),we(G,{key:0,onDelete:W})):F("",!0)]),d("div",null,[I.showLoading&&me(X)?(h(),we(oe,{key:0})):F("",!0)]),d("div",yk,[Ae(fe,{onClick:q,disabled:me(X)},{default:He(()=>[Be("Cancel")]),_:1},8,["disabled"]),Ae(ce,{type:"submit",class:"ml-4",disabled:me(X)},{default:He(()=>[Be("Save")]),_:1},8,["disabled"])])],2)],34)],2)],32)],32)])])):(h(),y("div",X2,[d("p",ek,[Be("Could not create form for unknown "),tk,Be(" "+te(D.value),1)])])),((K=c.value)==null?void 0:K.name)=="ModalLookup"&&c.value.ref?(h(),we(Ee,{key:3,"ref-info":c.value.ref,onDone:m},null,8,["ref-info"])):F("",!0)])}}}),wk=d("label",{for:"confirmDelete",class:"ml-2 mr-2 select-none"},"confirm",-1),kk=Ce({__name:"ConfirmDelete",emits:["delete"],setup(e,{emit:t}){let n=Y(!1);const o=t,s=()=>{n.value&&o("delete")},r=C(()=>["select-none inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white",n.value?"cursor-pointer bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500":"bg-red-400"]);return(a,l)=>(h(),y(Re,null,[jn(d("input",{id:"confirmDelete",type:"checkbox",class:"focus:ring-indigo-500 h-4 w-4 text-indigo-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-black","onUpdate:modelValue":l[0]||(l[0]=i=>ht(n)?n.value=i:n=i)},null,512),[[mr,me(n)]]),wk,d("span",Ue({onClick:ct(s,["prevent"]),class:r.value},a.$attrs),[he(a.$slots,"default",{},()=>[Be("Delete")])],16)],64))}}),xk={class:"flex",title:"loading..."},Ck={key:0,xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"24px",height:"30px",viewBox:"0 0 24 30"},Sk=fr('<rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',3),Tk=[Sk],Ak={class:"ml-2 mt-1 text-gray-400"},_k=Ce({__name:"FormLoading",props:{icon:{type:Boolean,default:!0},text:{default:"loading..."}},setup(e){return qe("ApiState",void 0),(t,n)=>(h(),y("div",xk,[t.icon?(h(),y("svg",Ck,Tk)):F("",!0),d("span",Ak,te(t.text),1)]))}}),Mk=["onClick"],Pk={key:3,class:"flex justify-between items-center"},Ek={class:"mr-1 select-none"},Ik=["onClick"],Lk=Ce({__name:"DataGrid",props:{items:{default:()=>[]},id:{default:"DataGrid"},type:{},tableStyle:{default:"stripedRows"},selectedColumns:{},gridClass:{},grid2Class:{},grid3Class:{},grid4Class:{},tableClass:{},theadClass:{},tbodyClass:{},theadRowClass:{},theadCellClass:{},isSelected:{},headerTitle:{},headerTitles:{},visibleFrom:{},rowClass:{},rowStyle:{}},emits:["headerSelected","rowSelected"],setup(e,{emit:t}){const n=e,o=t,s=Y(),r=Y(null),a=X=>r.value===X,l=Ya(),i=X=>Object.keys(l).find(_=>_.toLowerCase()==X.toLowerCase()+"-header"),u=X=>Object.keys(l).find(_=>_.toLowerCase()==X.toLowerCase()),c=C(()=>ma(n.items).filter(X=>!!(l[X]||l[X+"-header"]))),{typeOf:p,typeProperties:f}=Bt(),m=C(()=>vo(n.type)),v=C(()=>p(m.value)),w=C(()=>f(v.value));function S(X){const _=n.headerTitles&&Oe(n.headerTitles,X)||X;return n.headerTitle?n.headerTitle(_):Rc(_)}function z(X){const _=X.toLowerCase();return w.value.find(H=>H.name.toLowerCase()==_)}function $(X){const _=z(X);return _!=null&&_.format?_.format:(_==null?void 0:_.type)=="TimeSpan"||(_==null?void 0:_.type)=="TimeOnly"?{method:"time"}:null}const A={xs:"xs:table-cell",sm:"sm:table-cell",md:"md:table-cell",lg:"lg:table-cell",xl:"xl:table-cell","2xl":"2xl:table-cell",never:""};function N(X){const _=n.visibleFrom&&Oe(n.visibleFrom,X);return _&&dt(A[_],H=>`hidden ${H}`)}const B=C(()=>n.gridClass??Le.getGridClass(n.tableStyle)),D=C(()=>n.grid2Class??Le.getGrid2Class(n.tableStyle)),P=C(()=>n.grid3Class??Le.getGrid3Class(n.tableStyle)),ne=C(()=>n.grid4Class??Le.getGrid4Class(n.tableStyle)),Z=C(()=>n.tableClass??Le.getTableClass(n.tableStyle)),ge=C(()=>n.tbodyClass??Le.getTbodyClass(n.tbodyClass)),re=C(()=>n.theadClass??Le.getTheadClass(n.tableStyle)),se=C(()=>n.theadRowClass??Le.getTheadRowClass(n.tableStyle)),ve=C(()=>n.theadCellClass??Le.getTheadCellClass(n.tableStyle));function pe(X,_){return n.rowClass?n.rowClass(X,_):Le.getTableRowClass(n.tableStyle,_,!!(n.isSelected&&n.isSelected(X)),n.isSelected!=null)}function J(X,_){return n.rowStyle?n.rowStyle(X,_):void 0}const ie=C(()=>{const X=(typeof n.selectedColumns=="string"?n.selectedColumns.split(","):n.selectedColumns)||(c.value.length>0?c.value:ma(n.items)),_=w.value.reduce((H,de)=>(H[de.name.toLowerCase()]=de.format,H),{});return X.filter(H=>{var de;return((de=_[H.toLowerCase()])==null?void 0:de.method)!="hidden"})});function M(X,_){o("headerSelected",_,X)}function U(X,_,H){o("rowSelected",H,X)}return(X,_)=>{const H=ye("CellFormat"),de=ye("PreviewFormat");return X.items.length?(h(),y("div",{key:0,ref_key:"refResults",ref:s,class:L(B.value)},[d("div",{class:L(D.value)},[d("div",{class:L(P.value)},[d("div",{class:L(ne.value)},[d("table",{class:L(Z.value)},[d("thead",{class:L(re.value)},[d("tr",{class:L(se.value)},[(h(!0),y(Re,null,Qe(ie.value,W=>(h(),y("td",{class:L([N(W),ve.value,a(W)?"text-gray-900 dark:text-gray-50":"text-gray-500 dark:text-gray-400"])},[d("div",{onClick:be=>M(be,W)},[me(l)[W+"-header"]?he(X.$slots,W+"-header",{key:0,column:W}):i(W)?he(X.$slots,i(W),{key:1,column:W}):me(l).header?he(X.$slots,"header",{key:2,column:W,label:S(W)}):(h(),y("div",Pk,[d("span",Ek,te(S(W)),1)]))],8,Mk)],2))),256))],2)],2),d("tbody",{class:L(ge.value)},[(h(!0),y(Re,null,Qe(X.items,(W,be)=>(h(),y("tr",{class:L(pe(W,be)),style:Nn(J(W,be)),onClick:R=>U(R,be,W)},[(h(!0),y(Re,null,Qe(ie.value,R=>(h(),y("td",{class:L([N(R),me(Le).tableCellClass])},[me(l)[R]?he(X.$slots,R,io(Ue({key:0},W))):u(R)?he(X.$slots,u(R),io(Ue({key:1},W))):z(R)?(h(),we(H,{key:2,type:v.value,propType:z(R),modelValue:W},null,8,["type","propType","modelValue"])):(h(),we(de,{key:3,value:me(Oe)(W,R),format:$(R)},null,8,["value","format"]))],2))),256))],14,Ik))),256))],2)],2)],2)],2)],2)],2)):F("",!0)}}}),zk=Ce({props:{type:Object,propType:Object,modelValue:Object},setup(e,{attrs:t}){const{typeOf:n}=Bt();function o(s){return s!=null&&s.format?s.format:(s==null?void 0:s.type)=="TimeSpan"||(s==null?void 0:s.type)=="TimeOnly"?{method:"time"}:null}return()=>{var s;const r=o(e.propType),a=Oe(e.modelValue,e.propType.name),l=Object.assign({},e,t),i=Tt("span",{innerHTML:Zs(a,r,l)}),u=Wo(a)&&Array.isArray(a)?Tt("span",{},[Tt("span",{class:"mr-2"},`${a.length}`),i]):i,c=(s=e.propType)==null?void 0:s.ref;if(!c)return u;const p=Pt(e.type).find(z=>z.type===c.model);if(!p)return u;const f=Oe(e.modelValue,p.name),m=f&&c.refLabel&&Oe(f,c.refLabel);if(!m)return u;const v=n(c.model),w=v==null?void 0:v.icon,S=w?Tt(md,{image:w,class:"w-5 h-5 mr-1"}):null;return Tt("span",{class:"flex",title:`${c.model} ${a}`},[S,m])}}}),Rk={key:0},jk={key:0,class:"mr-2"},Vk=["innerHTML"],Ok=["innerHTML"],Bk={inheritAttrs:!1},Dk=Ce({...Bk,__name:"PreviewFormat",props:{value:{},format:{},includeIcon:{type:Boolean,default:!0},includeCount:{type:Boolean,default:!0},maxFieldLength:{default:150},maxNestedFields:{default:2},maxNestedFieldLength:{default:30}},setup(e){const t=e,n=C(()=>Array.isArray(t.value));return(o,s)=>me(Wo)(o.value)?(h(),y("span",Rk,[o.includeCount&&n.value?(h(),y("span",jk,te(o.value.length),1)):F("",!0),d("span",{innerHTML:me(Zs)(o.value,o.format,o.$attrs)},null,8,Vk)])):(h(),y("span",{key:1,innerHTML:me(Zs)(o.value,o.format,o.$attrs)},null,8,Ok))}}),Hk=["innerHTML"],$k={key:0},Nk=d("b",null,null,-1),Fk={key:2},Uk=Ce({__name:"HtmlFormat",props:{value:{},depth:{default:0},fieldAttrs:{},classes:{type:Function,default:(e,t,n,o,s)=>o}},setup(e){const t=e,n=C(()=>Dn(t.value)),o=C(()=>Array.isArray(t.value)),s=i=>Rc(i),r=i=>t.fieldAttrs?t.fieldAttrs(i):null,a=C(()=>ma(t.value)),l=i=>i?Object.keys(i).map(u=>({key:s(u),val:i[u]})):[];return(i,u)=>{const c=ye("HtmlFormat",!0);return h(),y("div",{class:L(i.depth==0?"prose html-format":"")},[n.value?(h(),y("div",{key:0,innerHTML:me(Zs)(i.value)},null,8,Hk)):o.value?(h(),y("div",{key:1,class:L(i.classes("array","div",i.depth,me(Le).gridClass))},[me(Dn)(i.value[0])?(h(),y("div",$k,"[ "+te(i.value.join(", "))+" ]",1)):(h(),y("div",{key:1,class:L(i.classes("array","div",i.depth,me(Le).grid2Class))},[d("div",{class:L(i.classes("array","div",i.depth,me(Le).grid3Class))},[d("div",{class:L(i.classes("array","div",i.depth,me(Le).grid4Class))},[d("table",{class:L(i.classes("object","table",i.depth,me(Le).tableClass))},[d("thead",{class:L(i.classes("array","thead",i.depth,me(Le).theadClass))},[d("tr",null,[(h(!0),y(Re,null,Qe(a.value,p=>(h(),y("th",{class:L(i.classes("array","th",i.depth,me(Le).theadCellClass+" whitespace-nowrap"))},[Nk,Be(te(s(p)),1)],2))),256))])],2),d("tbody",null,[(h(!0),y(Re,null,Qe(i.value,(p,f)=>(h(),y("tr",{class:L(i.classes("array","tr",i.depth,f%2==0?"bg-white":"bg-gray-50",f))},[(h(!0),y(Re,null,Qe(a.value,m=>(h(),y("td",{class:L(i.classes("array","td",i.depth,me(Le).tableCellClass))},[Ae(c,Ue({value:p[m],"field-attrs":i.fieldAttrs,depth:i.depth+1,classes:i.classes},r(m)),null,16,["value","field-attrs","depth","classes"])],2))),256))],2))),256))])],2)],2)],2)],2))],2)):(h(),y("div",Fk,[d("table",{class:L(i.classes("object","table",i.depth,"table-object"))},[(h(!0),y(Re,null,Qe(l(i.value),p=>(h(),y("tr",{class:L(i.classes("object","tr",i.depth,""))},[d("th",{class:L(i.classes("object","th",i.depth,"align-top py-2 px-4 text-left text-sm font-medium tracking-wider whitespace-nowrap"))},te(p.key),3),d("td",{class:L(i.classes("object","td",i.depth,"align-top py-2 px-4 text-sm"))},[Ae(c,Ue({value:p.val,"field-attrs":i.fieldAttrs,depth:i.depth+1,classes:i.classes},r(p.key)),null,16,["value","field-attrs","depth","classes"])],2)],2))),256))],2)]))],2)}}}),Wk={class:"absolute top-0 right-0 pt-4 pr-4"},qk=d("span",{class:"sr-only"},"Close",-1),Gk=d("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),Jk=[qk,Gk],Qk=Ce({__name:"CloseButton",props:{buttonClass:{default:"bg-white dark:bg-black"}},emits:["close"],setup(e,{emit:t}){return(n,o)=>(h(),y("div",Wk,[d("button",{type:"button",onClick:o[0]||(o[0]=s=>n.$emit("close")),class:L([n.buttonClass,"rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"])},Jk,2)]))}}),Kk=["id","aria-labelledby"],Yk=d("div",{class:"fixed inset-0"},null,-1),Zk={class:"fixed inset-0 overflow-hidden"},Xk={class:"flex h-full flex-col bg-white dark:bg-black shadow-xl"},ex={class:"flex min-h-0 flex-1 flex-col overflow-auto"},tx={class:"flex-1"},nx={class:"bg-gray-50 dark:bg-gray-900 px-4 py-6 sm:px-6"},ox={class:"flex items-start justify-between space-x-3"},sx={class:"space-y-1"},rx=["id"],ax={key:1,class:"text-sm text-gray-500"},ix={class:"flex h-7 items-center"},lx={class:"flex-shrink-0 border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6"},ux=Ce({__name:"SlideOver",props:{id:{default:"SlideOver"},title:{},contentClass:{default:"relative mt-6 flex-1 px-4 sm:px-6"}},emits:["done"],setup(e,{emit:t}){const n=t,o=Y(!1),s=Y(""),r={entering:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-full",to:"translate-x-0"},leaving:{cls:"transform transition ease-in-out duration-500 sm:duration-700",from:"translate-x-0",to:"translate-x-full"}};_t(o,()=>{Bn(r,s,o.value),o.value||setTimeout(()=>n("done"),700)}),o.value=!0;const a=()=>o.value=!1,l=i=>{i.key==="Escape"&&a()};return Ct(()=>window.addEventListener("keydown",l)),xn(()=>window.removeEventListener("keydown",l)),(i,u)=>{const c=ye("CloseButton");return h(),y("div",{id:i.id,class:"relative z-10","aria-labelledby":i.id+"-title",role:"dialog","aria-modal":"true"},[Yk,d("div",Zk,[d("div",{onMousedown:a,class:"absolute inset-0 overflow-hidden"},[d("div",{onMousedown:u[0]||(u[0]=ct(()=>{},["stop"])),class:"pointer-events-none fixed inset-y-0 right-0 flex pl-10"},[d("div",{class:L(["pointer-events-auto w-screen xl:max-w-3xl md:max-w-xl max-w-lg",s.value])},[d("div",Xk,[d("div",ex,[d("div",tx,[d("div",nx,[d("div",ox,[d("div",sx,[i.title?(h(),y("h2",{key:0,class:"text-lg font-medium text-gray-900 dark:text-gray-50",id:i.id+"-title"},te(i.title),9,rx)):F("",!0),i.$slots.subtitle?(h(),y("p",ax,[he(i.$slots,"subtitle")])):F("",!0)]),d("div",ix,[Ae(c,{"button-class":"bg-gray-50 dark:bg-gray-900",onClose:a})])])]),d("div",{class:L(i.contentClass)},[he(i.$slots,"default")],2)])]),d("div",lx,[he(i.$slots,"footer")])])],2)],32)],32)])],8,Kk)}}}),cx=["id","data-transition-for","aria-labelledby"],dx={class:"fixed inset-0 z-10 overflow-y-auto"},px={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},fx=d("span",{class:"sr-only"},"Close",-1),hx=d("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),mx=[fx,hx],gx=Ce({__name:"ModalDialog",props:{id:{default:"ModalDialog"},modalClass:{default:Wl.modalClass},sizeClass:{default:Wl.sizeClass}},emits:["done"],setup(e,{emit:t}){const n=t,o=Y(!1),s=Y(""),r={entering:{cls:"ease-out duration-300",from:"opacity-0",to:"opacity-100"},leaving:{cls:"ease-in duration-200",from:"opacity-100",to:"opacity-0"}},a=Y(""),l={entering:{cls:"ease-out duration-300",from:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",to:"opacity-100 translate-y-0 sm:scale-100"},leaving:{cls:"ease-in duration-200",from:"opacity-100 translate-y-0 sm:scale-100",to:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}};_t(o,()=>{Bn(r,s,o.value),Bn(l,a,o.value),o.value||setTimeout(()=>n("done"),200)}),o.value=!0;const i=()=>o.value=!1;en("ModalProvider",{openModal:p});const u=Y(),c=Y();function p(v,w){u.value=v,c.value=w}async function f(v){c.value&&c.value(v),u.value=void 0,c.value=void 0}const m=v=>{v.key==="Escape"&&i()};return Ct(()=>window.addEventListener("keydown",m)),xn(()=>window.removeEventListener("keydown",m)),(v,w)=>{var S;const z=ye("ModalLookup");return h(),y("div",{id:v.id,"data-transition-for":v.id,onMousedown:i,class:"relative z-10","aria-labelledby":`${v.id}-title`,role:"dialog","aria-modal":"true"},[d("div",{class:L(["fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",s.value])},null,2),d("div",dx,[d("div",px,[d("div",{class:L([v.modalClass,v.sizeClass,a.value]),onMousedown:w[0]||(w[0]=ct(()=>{},["stop"]))},[d("div",null,[d("div",{class:"hidden sm:block absolute top-0 right-0 pt-4 pr-4 z-10"},[d("button",{type:"button",onClick:i,class:"bg-white dark:bg-black rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black"},mx)]),he(v.$slots,"default")])],34)])]),((S=u.value)==null?void 0:S.name)=="ModalLookup"&&u.value.ref?(h(),we(z,{key:0,"ref-info":u.value.ref,onDone:f},null,8,["ref-info"])):F("",!0)],40,cx)}}}),vx={class:"pt-2 overflow-auto",style:{"min-height":"620px"}},yx={class:"mt-3 pl-5 flex flex-wrap items-center"},bx={class:"hidden sm:block text-xl leading-6 font-medium text-gray-900 dark:text-gray-50 mr-3"},wx={class:"hidden md:inline"},kx={class:"flex pb-1 sm:pb-0"},xx=["title"],Cx=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("g",{"stroke-width":"1.5",fill:"none"},[d("path",{d:"M9 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6H9M9 3v18M9 3h6M9 21h6m0-18h5.4a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H15m0-18v18",stroke:"currentColor"})])],-1),Sx=[Cx],Tx=["disabled"],Ax=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z",fill:"currentColor"})],-1),_x=[Ax],Mx=["disabled"],Px=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z",fill:"currentColor"})],-1),Ex=[Px],Ix=["disabled"],Lx=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z",fill:"currentColor"})],-1),zx=[Lx],Rx=["disabled"],jx=d("svg",{class:"w-8 h-8",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[d("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z",fill:"currentColor"})],-1),Vx=[jx],Ox={key:0,class:"flex pb-1 sm:pb-0"},Bx={class:"px-4 text-lg text-black dark:text-white"},Dx={key:0},Hx={key:1},$x=d("span",{class:"hidden xl:inline"}," Showing Results ",-1),Nx={key:2},Fx={key:1,class:"pl-2"},Ux=d("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",viewBox:"0 0 24 24"},[d("path",{fill:"currentColor",d:"M6.78 2.72a.75.75 0 0 1 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75a.75.75 0 0 1 1.5 0a6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 0Z"})],-1),Wx=[Ux],qx={class:"flex pb-1 sm:pb-0"},Gx={key:0,class:"pl-2"},Jx=d("svg",{class:"flex-none w-5 h-5 mr-2 text-gray-400 dark:text-gray-500 group-hover:text-gray-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[d("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z","clip-rule":"evenodd"})],-1),Qx={class:"mr-1"},Kx={key:0,class:"h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},Yx=d("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"},null,-1),Zx=[Yx],Xx={key:1,class:"h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-gray-500",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},eC=d("path",{"fill-rule":"evenodd",d:"M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z","clip-rule":"evenodd"},null,-1),tC=[eC],nC={key:1},oC={key:4},sC={key:0},rC={key:0,class:"cursor-pointer flex justify-between items-center hover:text-gray-900 dark:hover:text-gray-50"},aC={class:"mr-1 select-none"},iC={key:1,class:"flex justify-between items-center"},lC={class:"mr-1 select-none"},ql=25,uC=Ce({__name:"ModalLookup",props:{id:{default:"ModalLookup"},refInfo:{},skip:{default:0},prefs:{},selectedColumns:{},allowFiltering:{type:[Boolean,null],default:!0},showPreferences:{type:[Boolean,null],default:!0},showPagingNav:{type:[Boolean,null],default:!0},showPagingInfo:{type:[Boolean,null],default:!0},showResetPreferences:{type:[Boolean,null],default:!0},showFiltersView:{type:[Boolean,null],default:!0},toolbarButtonClass:{},canFilter:{}},emits:["done"],setup(e,{emit:t}){const n=e,o=t,s=Ya(),{config:r}=Wn(),{metadataApi:a,filterDefinitions:l}=Bt(),i=qe("client"),u=r.value.storage,c=C(()=>n.toolbarButtonClass??Le.toolbarButtonClass),p=C(()=>l.value),f=Y({take:ql}),m=Y(new nt),v=Y(n.skip),w=Y(!1),S=Y(),z=k=>typeof k=="string"?k.split(","):k||[];function $(k,x){return Le.getTableRowClass("fullWidth",x,!1,!0)}function A(){let k=z(n.selectedColumns);return k.length>0?k:[]}const N=C(()=>Ot(n.refInfo.model)),B=C(()=>{let k=A().map(V=>V.toLowerCase());const x=Pt(N.value);return k.length>0?k.map(V=>x.find(Q=>Q.name.toLowerCase()===V)).filter(V=>V!=null):x}),D=C(()=>{let k=B.value.map(V=>V.name),x=z(f.value.selectedColumns).map(V=>V.toLowerCase());return x.length>0?k.filter(V=>x.includes(V.toLowerCase())):k}),P=C(()=>f.value.take??ql),ne=C(()=>m.value.response?Oe(m.value.response,"results"):[]),Z=C(()=>{var k;return((k=m.value.response)==null?void 0:k.total)??ne.value.length??0}),ge=C(()=>v.value>0),re=C(()=>v.value>0),se=C(()=>ne.value.length>=P.value),ve=C(()=>ne.value.length>=P.value),pe=Y([]),J=C(()=>pe.value.some(k=>k.settings.filters.length>0||!!k.settings.sort)),ie=C(()=>pe.value.map(k=>k.settings.filters.length).reduce((k,x)=>k+x,0)),M=C(()=>os(N.value)),U=C(()=>{var k;return(k=a.value)==null?void 0:k.operations.find(x=>{var V;return((V=x.dataModel)==null?void 0:V.name)==n.refInfo.model&&lt.isAnyQuery(x)})}),X=Y(),_=Y(!1),H=Y(),de=()=>`${n.id}/ApiPrefs/${n.refInfo.model}`,W=k=>`Column/${n.id}:${n.refInfo.model}.${k}`;async function be(k){v.value+=k,v.value<0&&(v.value=0);var x=Math.floor(Z.value/P.value)*P.value;v.value>x&&(v.value=x),await Se()}async function R(k,x){o("done",k)}function ue(){o("done",null)}function E(k,x){var V,Q,K;let ee=x.target;if((ee==null?void 0:ee.tagName)!=="TD"){let G=(V=ee==null?void 0:ee.closest("TABLE"))==null?void 0:V.getBoundingClientRect(),oe=pe.value.find(fe=>fe.name.toLowerCase()==k.toLowerCase());if(oe&&G){let fe=318,ce=(((Q=x.target)==null?void 0:Q.tagName)==="DIV"?x.target:(K=x.target)==null?void 0:K.closest("DIV")).getBoundingClientRect(),ke=fe+25;H.value={column:oe,topLeft:{x:Math.max(Math.floor(ce.x+25),ke),y:Math.floor(115)}}}}}function q(){H.value=null}async function O(k){var x;let V=(x=H.value)==null?void 0:x.column;V&&(V.settings=k,u.setItem(W(V.name),JSON.stringify(V.settings)),await Se()),H.value=null}async function I(k){u.setItem(W(k.name),JSON.stringify(k.settings)),await Se()}async function ae(k){_.value=!1,f.value=k,u.setItem(de(),JSON.stringify(k)),await Se()}async function Se(){await g(b())}async function g(k){const x=U.value;if(!x){console.error(`No Query API was found for ${n.refInfo.model}`);return}let V=qo(x,k),Q=Oc(G=>{m.value.response=m.value.error=void 0,w.value=G}),K=await i.api(V);Q(),jt(()=>m.value=K);let ee=Oe(K.response,"results")||[];!K.succeeded||ee.label==0}function b(){let k={include:"total",take:P.value},x=z(f.value.selectedColumns||n.selectedColumns);if(x.length>0){let Q=M.value;Q&&x.includes(Q.name)&&(x=[Q.name,...x]),k.fields=x.join(",")}let V=[];return pe.value.forEach(Q=>{Q.settings.sort&&V.push((Q.settings.sort==="DESC"?"-":"")+Q.name),Q.settings.filters.forEach(K=>{let ee=K.key.replace("%",Q.name);k[ee]=K.value})}),typeof k.skip>"u"&&v.value>0&&(k.skip=v.value),V.length>0&&(k.orderBy=V.join(",")),k}async function T(){pe.value.forEach(k=>{k.settings={filters:[]},u.removeItem(W(k.name))}),await Se()}return Ct(async()=>{const k=n.prefs||Ys(u.getItem(de()));k&&(f.value=k),pe.value=B.value.map(x=>({name:x.name,type:x.type,meta:x,settings:Object.assign({filters:[]},Ys(u.getItem(W(x.name))))})),isNaN(n.skip)||(v.value=n.skip),await Se()}),(k,x)=>{const V=ye("ErrorSummary"),Q=ye("Loading"),K=ye("SettingsIcons"),ee=ye("DataGrid"),G=ye("ModalDialog");return h(),y(Re,null,[k.refInfo?(h(),we(G,{key:0,ref_key:"modalDialog",ref:X,id:k.id,onDone:ue},{default:He(()=>[d("div",vx,[d("div",yx,[d("h3",bx,[Be(" Select "),d("span",wx,te(me(it)(k.refInfo.model)),1)]),d("div",kx,[k.showPreferences?(h(),y("button",{key:0,type:"button",class:"pl-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",title:`${k.refInfo.model} Preferences`,onClick:x[0]||(x[0]=oe=>_.value=!_.value)},Sx,8,xx)):F("",!0),k.showPagingNav?(h(),y("button",{key:1,type:"button",class:L(["pl-2",ge.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"First page",disabled:!ge.value,onClick:x[1]||(x[1]=oe=>be(-Z.value))},_x,10,Tx)):F("",!0),k.showPagingNav?(h(),y("button",{key:2,type:"button",class:L(["pl-2",re.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"Previous page",disabled:!re.value,onClick:x[2]||(x[2]=oe=>be(-P.value))},Ex,10,Mx)):F("",!0),k.showPagingNav?(h(),y("button",{key:3,type:"button",class:L(["pl-2",se.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"Next page",disabled:!se.value,onClick:x[3]||(x[3]=oe=>be(P.value))},zx,10,Ix)):F("",!0),k.showPagingNav?(h(),y("button",{key:4,type:"button",class:L(["pl-2",ve.value?"text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400":"text-gray-400 dark:text-gray-500"]),title:"Last page",disabled:!ve.value,onClick:x[4]||(x[4]=oe=>be(Z.value))},Vx,10,Rx)):F("",!0)]),k.showPagingInfo?(h(),y("div",Ox,[d("div",Bx,[w.value?(h(),y("span",Dx,"Querying...")):F("",!0),ne.value.length?(h(),y("span",Hx,[$x,Be(" "+te(v.value+1)+" - "+te(Math.min(v.value+ne.value.length,Z.value))+" ",1),d("span",null," of "+te(Z.value),1)])):m.value.completed?(h(),y("span",Nx,"No Results")):F("",!0)])])):F("",!0),J.value&&k.showResetPreferences?(h(),y("div",Fx,[d("button",{type:"button",onClick:T,title:"Reset Preferences & Filters",class:L(c.value)},Wx,2)])):F("",!0),d("div",qx,[k.showFiltersView&&ie.value>0?(h(),y("div",Gx,[d("button",{type:"button",onClick:x[5]||(x[5]=oe=>S.value=S.value=="filters"?null:"filters"),class:L(c.value),"aria-expanded":"false"},[Jx,d("span",Qx,te(ie.value)+" "+te(ie.value==1?"Filter":"Filters"),1),S.value!="filters"?(h(),y("svg",Kx,Zx)):(h(),y("svg",Xx,tC))],2)])):F("",!0)])]),S.value=="filters"?(h(),we(wi,{key:0,class:"border-y border-gray-200 dark:border-gray-800 py-8 my-2",definitions:p.value,columns:pe.value,onDone:x[6]||(x[6]=oe=>S.value=null),onChange:I},null,8,["definitions","columns"])):F("",!0),H.value?(h(),y("div",nC,[Ae(bi,{definitions:p.value,column:H.value.column,"top-left":H.value.topLeft,onDone:q,onSave:O},null,8,["definitions","column","top-left"])])):F("",!0),m.value.error?(h(),we(V,{key:2,status:m.value.error},null,8,["status"])):w.value?(h(),we(Q,{key:3})):(h(),y("div",oC,[ne.value.length?(h(),y("div",sC,[Ae(ee,{id:k.id,items:ne.value,type:k.refInfo.model,"selected-columns":D.value,onFiltersChanged:Se,tableStyle:"fullWidth",rowClass:$,onRowSelected:R,onHeaderSelected:E},Ka({header:He(({column:oe,label:fe})=>{var ce;return[k.allowFiltering&&(!n.canFilter||n.canFilter(oe))?(h(),y("div",rC,[d("span",aC,te(fe),1),Ae(K,{column:pe.value.find(ke=>ke.name.toLowerCase()===oe.toLowerCase()),"is-open":((ce=H.value)==null?void 0:ce.column.name)===oe},null,8,["column","is-open"])])):(h(),y("div",iC,[d("span",lC,te(fe),1)]))]}),_:2},[Qe(Object.keys(me(s)),oe=>({name:oe,fn:He(fe=>[he(k.$slots,oe,io(Uo(fe)))])}))]),1032,["id","items","type","selected-columns"])])):F("",!0)]))])]),_:3},8,["id"])):F("",!0),_.value?(h(),we(ki,{key:1,columns:B.value,prefs:f.value,onDone:x[7]||(x[7]=oe=>_.value=!1),onSave:ae},null,8,["columns","prefs"])):F("",!0)],64)}}}),cC={class:"sm:hidden"},dC=["for"],pC=["id","name"],fC=["value"],hC={class:"hidden sm:block"},mC={class:"border-b border-gray-200"},gC={class:"-mb-px flex","aria-label":"Tabs"},vC=["onClick"],yC=Ce({__name:"Tabs",props:{tabs:{},id:{default:"tabs"},param:{default:"tab"},label:{type:Function,default:e=>it(e)},selected:{},tabClass:{},bodyClass:{default:"p-4"},url:{type:Boolean,default:!0}},setup(e){const t=e,n=C(()=>Object.keys(t.tabs)),o=c=>t.label?t.label(c):it(c),s=C(()=>t.id||"tabs"),r=C(()=>t.param||"tab"),a=Y();function l(c){if(a.value=c,t.url){const p=n.value[0];si({tab:c===p?void 0:c})}}function i(c){return a.value===c}const u=C(()=>`${100/Object.keys(t.tabs).length}%`);return Ct(()=>{if(a.value=t.selected||Object.keys(t.tabs)[0],t.url){const c=location.search?location.search:location.hash.includes("?")?"?"+Ro(location.hash,"?"):"",p=Qs(c)[r.value];p&&(a.value=p)}}),(c,p)=>(h(),y("div",null,[d("div",cC,[d("label",{for:s.value,class:"sr-only"},"Select a tab",8,dC),d("select",{id:s.value,name:s.value,class:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",onChange:p[0]||(p[0]=f=>{var m;return l((m=f.target)==null?void 0:m.value)})},[(h(!0),y(Re,null,Qe(n.value,f=>(h(),y("option",{key:f,value:f},te(o(f)),9,fC))),128))],40,pC)]),d("div",hC,[d("div",mC,[d("nav",gC,[(h(!0),y(Re,null,Qe(n.value,f=>(h(),y("a",{href:"#",onClick:ct(m=>l(f),["prevent"]),style:Nn({width:u.value}),class:L([i(f)?"border-indigo-500 text-indigo-600 py-4 px-1 text-center border-b-2 font-medium text-sm":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 text-center border-b-2 font-medium text-sm",c.tabClass])},te(o(f)),15,vC))),256))])])]),d("div",{class:L(c.bodyClass)},[(h(),we(qa(c.tabs[a.value])))],2)]))}}),bC=d("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-gray-400",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},[d("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"})],-1),wC=[bC],kC=d("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-indigo-600",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},[d("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"})],-1),xC=[kC],CC=Ce({__name:"DarkModeToggle",setup(e){const t=typeof document<"u"?document.documentElement:null,n=()=>!!(t!=null&&t.classList.contains("dark")),o=Y(localStorage.getItem("color-scheme")=="dark");function s(){n()?t==null||t.classList.remove("dark"):t==null||t.classList.add("dark"),o.value=n(),localStorage.setItem("color-scheme",o.value?"dark":"light")}return(r,a)=>(h(),y("button",{type:"button",class:"bg-gray-200 dark:bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:ring-offset-black",role:"switch","aria-checked":"false",onClick:a[0]||(a[0]=l=>s())},[d("span",{class:L(`${o.value?"translate-x-0":"translate-x-5"} pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white dark:bg-black shadow transform ring-0 transition ease-in-out duration-200`)},[d("span",{class:L(`${o.value?"opacity-100 ease-in duration-200":"opacity-0 ease-out duration-100"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),"aria-hidden":"true"},wC,2),d("span",{class:L(`${o.value?"opacity-0 ease-out duration-100":"opacity-100 ease-in duration-200"} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`),"aria-hidden":"true"},xC,2)],2)]))}}),SC={key:0},TC={key:1,class:"min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"},AC={class:"sm:mx-auto sm:w-full sm:max-w-md"},_C={class:"mt-6 text-center text-3xl font-extrabold text-gray-900"},MC={key:0,class:"mt-4 text-center text-sm text-gray-600"},PC={class:"relative z-0 inline-flex shadow-sm rounded-md"},EC=["onClick"],IC={class:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},LC={class:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},zC={class:"mt-8"},RC={key:1,class:"mt-6"},jC=fr('<div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-gray-500"> Or continue with </span></div></div>',1),VC={class:"mt-6 grid grid-cols-3 gap-3"},OC=["href","title"],BC={key:1,class:"h-5 w-5 text-gray-700",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},DC=d("path",{d:"M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z",fill:"currentColor"},null,-1),HC=d("path",{d:"M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z",fill:"currentColor"},null,-1),$C=[DC,HC],NC=Ce({__name:"SignIn",props:{provider:{},title:{default:"Sign In"},tabs:{type:[Boolean,String],default:!0},oauth:{type:[Boolean,String],default:!0}},emits:["login"],setup(e,{emit:t}){const n=e,o=t,{getMetadata:s,createDto:r}=Bt(),a=kr(),l=qe("client"),{signIn:i}=yi(),u=s({assert:!0}),c=u.plugins.auth,p=document.baseURI,f=u.app.baseUrl,m=Y(r("Authenticate")),v=Y(new nt),w=Y(n.provider);Ct(()=>{c==null||c.authProviders.map(re=>re.formLayout).filter(re=>re).forEach(re=>re.forEach(se=>m.value[se.id]=se.type==="checkbox"?!1:""))});const S=C(()=>(c==null?void 0:c.authProviders.filter(re=>re.formLayout))||[]),z=C(()=>S.value[0]||{}),$=C(()=>S.value[Math.max(S.value.length-1,0)]||{}),A=C(()=>(w.value?c==null?void 0:c.authProviders.find(re=>re.name===w.value):null)??z.value),N=re=>re===!1||re==="false";function B(re){return re.label||re.navItem&&re.navItem.label}const D=C(()=>{var re;return(((re=A.value)==null?void 0:re.formLayout)||[]).map(se=>{var ve,pe;return Object.assign({},se,{type:(ve=se.type)==null?void 0:ve.toLowerCase(),autocomplete:se.autocomplete||(((pe=se.type)==null?void 0:pe.toLowerCase())==="password"?"current-password":void 0)||(se.id.toLowerCase()==="username"?"username":void 0),css:Object.assign({field:"col-span-12"},se.css)})})}),P=C(()=>N(n.oauth)?[]:(c==null?void 0:c.authProviders.filter(re=>re.type==="oauth"))||[]),ne=C(()=>{let re=Fm(c==null?void 0:c.authProviders.filter(ve=>ve.formLayout&&ve.formLayout.length>0),(ve,pe)=>{let J=B(pe)||Et(pe.name);ve[J]=pe.name===z.value.name?"":pe.name});const se=A.value;return se&&N(n.tabs)&&(re={[B(se)||Et(se.name)]:se}),re}),Z=C(()=>{let re=D.value.map(se=>se.id).filter(se=>se);return v.value.summaryMessage(re)});async function ge(){if(m.value.provider=A.value.name,A.value.name==="authsecret"?(l.headers.set("authsecret",m.value.authsecret),m.value=r("Authenticate")):A.value.name==="basic"?(l.setCredentials(m.value.UserName,m.value.Password),m.value=r("Authenticate"),m.value.UserName=null,m.value.Password=null):A.value.name==="jwt"&&(l.bearerToken=m.value.BearerToken,m.value=r("Authenticate")),v.value=await a.api(m.value),v.value.succeeded){const re=v.value.response;i(re),o("login",re),v.value=new nt,m.value=r("Authenticate")}}return(re,se)=>{const ve=ye("ErrorSummary"),pe=ye("AutoFormFields"),J=ye("PrimaryButton"),ie=ye("Icon"),M=Qp("href");return me(c)?(h(),y("div",TC,[d("div",AC,[d("h2",_C,te(re.title),1),Object.keys(ne.value).length>1?(h(),y("p",MC,[d("span",PC,[(h(!0),y(Re,null,Qe(ne.value,(U,X)=>jn((h(),y("a",{onClick:_=>w.value=U,class:L([U===""||U===z.value.name?"rounded-l-md":U===$.value.name?"rounded-r-md -ml-px":"-ml-px",w.value===U?"z-10 outline-none ring-1 ring-indigo-500 border-indigo-500":"","cursor-pointer relative inline-flex items-center px-4 py-1 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"])},[Be(te(X),1)],10,EC)),[[M,{provider:U}]])),256))])])):F("",!0)]),d("div",IC,[Z.value?(h(),we(ve,{key:0,class:"mb-3",errorSummary:Z.value},null,8,["errorSummary"])):F("",!0),d("div",LC,[D.value.length?(h(),y("form",{key:0,onSubmit:ct(ge,["prevent"])},[Ae(pe,{modelValue:m.value,formLayout:D.value,api:v.value,hideSummary:!0,"divide-class":"","space-class":"space-y-6"},null,8,["modelValue","formLayout","api"]),d("div",zC,[Ae(J,{class:"w-full"},{default:He(()=>[Be("Sign In")]),_:1})])],32)):F("",!0),P.value.length?(h(),y("div",RC,[jC,d("div",VC,[(h(!0),y(Re,null,Qe(P.value,U=>(h(),y("div",null,[d("a",{href:me(f)+U.navItem.href+"?continue="+me(p),title:B(U),class:"w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"},[U.icon?(h(),we(ie,{key:0,image:U.icon,class:"h-5 w-5 text-gray-700"},null,8,["image"])):(h(),y("svg",BC,$C))],8,OC)]))),256))])])):F("",!0)])])])):(h(),y("div",SC,"No Auth Plugin"))}}}),FC=["for"],UC={key:1,class:"border border-gray-200 flex justify-between"},WC={class:"p-2 flex flex-wrap gap-x-4"},qC=d("title",null,"Bold text (CTRL+B)",-1),GC=d("path",{fill:"currentColor",d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79c0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79c0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"},null,-1),JC=[qC,GC],QC=d("title",null,"Italics (CTRL+I)",-1),KC=d("path",{fill:"currentColor",d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z"},null,-1),YC=[QC,KC],ZC=d("title",null,"Insert Link (CTRL+K)",-1),XC=d("path",{fill:"currentColor",d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0-5 5a5 5 0 0 0 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8v2m9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1c0 1.71-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5Z"},null,-1),e5=[ZC,XC],t5=d("title",null,"Blockquote (CTRL+Q)",-1),n5=d("path",{fill:"currentColor",d:"m15 17l2-4h-4V6h7v7l-2 4h-3Zm-9 0l2-4H4V6h7v7l-2 4H6Z"},null,-1),o5=[t5,n5],s5=d("title",null,"Insert Image (CTRL+SHIFT+L)",-1),r5=d("path",{fill:"currentColor",d:"M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992ZM20 15V5H4v14L14 9l6 6Zm0 2.828l-6-6L6.828 19H20v-1.172ZM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"},null,-1),a5=[s5,r5],i5=d("title",null,"Insert Code (CTRL+<)",-1),l5=d("path",{fill:"currentColor",d:"m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6L8 18Zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6l-6 6Z"},null,-1),u5=[i5,l5],c5=d("title",null,"H2 Heading (CTRL+H)",-1),d5=d("path",{fill:"currentColor",d:"M7 20V7H2V4h13v3h-5v13H7Zm9 0v-8h-3V9h9v3h-3v8h-3Z"},null,-1),p5=[c5,d5],f5=d("title",null,"Numbered List (ALT+1)",-1),h5=d("path",{fill:"currentColor",d:"M3 22v-1.5h2.5v-.75H4v-1.5h1.5v-.75H3V16h3q.425 0 .713.288T7 17v1q0 .425-.288.713T6 19q.425 0 .713.288T7 20v1q0 .425-.288.713T6 22H3Zm0-7v-2.75q0-.425.288-.713T4 11.25h1.5v-.75H3V9h3q.425 0 .713.288T7 10v1.75q0 .425-.288.713T6 12.75H4.5v.75H7V15H3Zm1.5-7V3.5H3V2h3v6H4.5ZM9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9Z"},null,-1),m5=[f5,h5],g5=d("title",null,"Bulleted List (ALT+-)",-1),v5=d("path",{fill:"currentColor",d:"M9 19v-2h12v2H9Zm0-6v-2h12v2H9Zm0-6V5h12v2H9ZM5 20q-.825 0-1.413-.588T3 18q0-.825.588-1.413T5 16q.825 0 1.413.588T7 18q0 .825-.588 1.413T5 20Zm0-6q-.825 0-1.413-.588T3 12q0-.825.588-1.413T5 10q.825 0 1.413.588T7 12q0 .825-.588 1.413T5 14Zm0-6q-.825 0-1.413-.588T3 6q0-.825.588-1.413T5 4q.825 0 1.413.588T7 6q0 .825-.588 1.413T5 8Z"},null,-1),y5=[g5,v5],b5=d("title",null,"Strike Through (ALT+S)",-1),w5=d("path",{fill:"currentColor",d:"M10 19h4v-3h-4v3zM5 4v3h5v3h4V7h5V4H5zM3 14h18v-2H3v2z"},null,-1),k5=[b5,w5],x5=d("title",null,"Undo (CTRL+Z)",-1),C5=d("path",{fill:"currentColor",d:"M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88c3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"},null,-1),S5=[x5,C5],T5=d("title",null,"Redo (CTRL+SHIFT+Z)",-1),A5=d("path",{fill:"currentColor",d:"M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"},null,-1),_5=[T5,A5],M5={key:0,class:"p-2 flex flex-wrap gap-x-4"},P5=["href"],E5=d("path",{fill:"currentColor",d:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5c0-2.21-1.79-4-4-4z"},null,-1),I5=[E5],L5={class:""},z5=["name","id","label","value","rows","disabled"],R5=["id"],j5=["id"],xt="w-5 h-5 cursor-pointer select-none text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400",V5=Ce({__name:"MarkdownInput",props:{status:{},id:{},inputClass:{},label:{},labelClass:{},help:{},placeholder:{},modelValue:{},counter:{type:Boolean},rows:{},errorMessages:{},lang:{},autoFocus:{type:Boolean},disabled:{type:Boolean},helpUrl:{default:"https://guides.github.com/features/mastering-markdown/"},hide:{}},emits:["update:modelValue","close"],setup(e,{expose:t,emit:n}){const o=e,s=n;let r=[],a=[],l=qe("ApiState",void 0);const i=C(()=>on.call({responseStatus:o.status??(l==null?void 0:l.error.value)},o.id)),u=C(()=>o.label??it(Et(o.id))),c="bold,italics,link,image,blockquote,code,heading,orderedList,unorderedList,strikethrough,undo,redo,help".split(","),p=C(()=>o.hide?In(c,o.hide):In(c,[]));function f(_){return p.value[_]}const m=C(()=>["shadow-sm font-mono"+Ut.base.replace("rounded-md",""),i.value?"text-red-900 focus:ring-red-500 focus:border-red-500 border-red-300":"text-gray-900 "+Ut.valid,o.inputClass]),v=Y();t({props:o,textarea:v,updateModelValue:w,selection:z,hasSelection:S,selectionInfo:$,insert:N,replace:A});function w(_){s("update:modelValue",_)}function S(){return v.value.selectionStart!==v.value.selectionEnd}function z(){const _=v.value;return _.value.substring(_.selectionStart,_.selectionEnd)||""}function $(){const _=v.value,H=_.value,de=_.selectionStart,W=H.substring(de,_.selectionEnd)||"",be=H.substring(0,de),R=be.lastIndexOf(`
`);return{value:H,sel:W,selPos:de,beforeSel:be,afterSel:H.substring(de),prevCRPos:R,beforeCR:R>=0?be.substring(0,R+1):"",afterCR:R>=0?be.substring(R+1):""}}function A({value:_,selectionStart:H,selectionEnd:de}){de==null&&(de=H),w(_),jt(()=>{v.value.focus(),v.value.setSelectionRange(H,de)})}function N(_,H,de="",{selectionAtEnd:W,offsetStart:be,offsetEnd:R,filterValue:ue,filterSelection:E}={}){const q=v.value;let O=q.value,I=q.selectionEnd;r.push({value:O,selectionStart:q.selectionStart,selectionEnd:q.selectionEnd}),a=[];const ae=q.selectionStart,Se=q.selectionEnd;let g=O.substring(0,ae),b=O.substring(Se);const T=_&&g.endsWith(_)&&b.startsWith(H);if(ae==Se){if(T?(O=g.substring(0,g.length-_.length)+b.substring(H.length),I+=-H.length):(O=g+_+de+H+b,I+=_.length,be=0,R=(de==null?void 0:de.length)||0,W&&(I+=R,R=0)),ue){var k={pos:I};O=ue(O,k),I=k.pos}}else{var x=O.substring(ae,Se);E&&(x=E(x)),T?(O=g.substring(0,g.length-_.length)+x+b.substring(H.length),be=-x.length-_.length,R=x.length):(O=g+_+x+H+b,be?I+=(_+H).length:(I=ae,be=_.length,R=x.length))}w(O),jt(()=>{q.focus(),be=I+(be||0),R=(be||0)+(R||0),q.setSelectionRange(be,R)})}const B=()=>N("**","**","bold"),D=()=>N("_","_","italics"),P=()=>N("~~","~~","strikethrough"),ne=()=>N("[","](https://)","",{offsetStart:-9,offsetEnd:8}),Z=()=>N(`
> `,`
`,"Blockquote",{}),ge=()=>N("![](",")");function re(_){const H=z();if(H&&!_.shiftKey)N("`","`","code");else{const de=o.lang||"js";H.indexOf(`
`)===-1?N("\n```"+de+`
`,"\n```\n","// code"):N("```"+de+`
`,"```\n","")}}function se(){if(S()){let{sel:_,selPos:H,beforeSel:de,afterSel:W,prevCRPos:be,beforeCR:R,afterCR:ue}=$();if(_.indexOf(`
`)===-1)N(`
 1. `,`
`);else if(_.startsWith(" 1. "))N("","","",{filterValue:(E,q)=>{if(be>=0){let O=ue.replace(/^ - /,"");de=R+O,q.pos-=ue.length-O.length}return de+W},filterSelection:E=>E.replace(/^ 1. /g,"").replace(/\n \d+. /g,`
`)});else{let E=1;N("",""," - ",{selectionAtEnd:!0,filterSelection:q=>" 1. "+q.replace(/\n$/,"").replace(/\n/g,O=>`
 ${++E}. `)+`
`})}}else N(`
 1. `,`
`,"List Item",{offsetStart:-10,offsetEnd:9})}function ve(){if(S()){let{sel:_,selPos:H,beforeSel:de,afterSel:W,prevCRPos:be,beforeCR:R,afterCR:ue}=$();_.indexOf(`
`)===-1?N(`
 - `,`
`):_.startsWith(" - ")?N("","","",{filterValue:(E,q)=>{if(be>=0){let O=ue.replace(/^ - /,"");de=R+O,q.pos-=ue.length-O.length}return de+W},filterSelection:E=>E.replace(/^ - /g,"").replace(/\n - /g,`
`)}):N("",""," - ",{selectionAtEnd:!0,filterSelection:E=>" - "+E.replace(/\n$/,"").replace(/\n/g,`
 - `)+`
`})}else N(`
 - `,`
`,"List Item",{offsetStart:-10,offsetEnd:9})}function pe(){const _=z(),H=_.indexOf(`
`)===-1;_?H?N(`
## `,`
`,""):N("## ","",""):N(`
## `,`
`,"Heading",{offsetStart:-8,offsetEnd:7})}function J(){let{sel:_,selPos:H,beforeSel:de,afterSel:W,prevCRPos:be,beforeCR:R,afterCR:ue}=$();!_.startsWith("//")&&!ue.startsWith("//")?_?N("","","//",{selectionAtEnd:!0,filterSelection:E=>"//"+E.replace(/\n$/,"").replace(/\n/g,`
//`)+`
`}):A({value:R+"//"+ue+W,selectionStart:H+2}):N("","","",{filterValue:(E,q)=>{if(be>=0){let O=ue.replace(/^\/\//,"");de=R+O,q.pos-=ue.length-O.length}return de+W},filterSelection:E=>E.replace(/^\/\//g,"").replace(/\n\/\//g,`
`)})}const ie=()=>N(`/*
`,`*/
`,"");function M(){if(r.length===0)return!1;const _=v.value,H=r.pop();return a.push({value:_.value,selectionStart:_.selectionStart,selectionEnd:_.selectionEnd}),A(H),!0}function U(){if(a.length===0)return!1;const _=v.value,H=a.pop();return r.push({value:_.value,selectionStart:_.selectionStart,selectionEnd:_.selectionEnd}),A(H),!0}const X=()=>null;return Ct(()=>{r=[],a=[];const _=v.value;_.onkeydown=H=>{if(H.key==="Escape"||H.keyCode===27){s("close");return}const de=String.fromCharCode(H.keyCode).toLowerCase();de==="	"?(H.shiftKey?N("","","",{filterValue:(W,be)=>{let{selPos:R,beforeSel:ue,afterSel:E,prevCRPos:q,beforeCR:O,afterCR:I}=$();if(q>=0){let ae=I.replace(/\t/g,"    ").replace(/^ ? ? ? ?/,"");ue=O+ae,be.pos-=I.length-ae.length}return ue+E},filterSelection:W=>W.replace(/\t/g,"    ").replace(/^ ? ? ? ?/g,"").replace(/\n    /g,`
`)}):N("","","    ",{selectionAtEnd:!0,filterSelection:W=>"    "+W.replace(/\n$/,"").replace(/\n/g,`
    `)+`
`}),H.preventDefault()):H.ctrlKey?de==="z"?H.shiftKey?U()&&H.preventDefault():M()&&H.preventDefault():de==="b"&&!H.shiftKey?(B(),H.preventDefault()):de==="h"&&!H.shiftKey?(pe(),H.preventDefault()):de==="i"&&!H.shiftKey?(D(),H.preventDefault()):de==="q"&&!H.shiftKey?(Z(),H.preventDefault()):de==="k"?H.shiftKey?(ge(),H.preventDefault()):(ne(),H.preventDefault()):de===","||H.key==="<"||H.key===">"||H.keyCode===188?(re(H),H.preventDefault()):de==="/"||H.key==="/"?(J(),H.preventDefault()):(de==="?"||H.key==="?")&&H.shiftKey&&(ie(),H.preventDefault()):H.altKey&&(H.key==="1"||H.key==="0"?(se(),H.preventDefault()):H.key==="-"?(ve(),H.preventDefault()):H.key==="s"&&(P(),H.preventDefault()))}}),(_,H)=>{var de;return h(),y("div",null,[he(_.$slots,"header",Ue({inputElement:v.value,id:_.id,modelValue:_.modelValue,status:_.status},_.$attrs)),u.value?(h(),y("label",{key:0,for:_.id,class:L(`mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300 ${_.labelClass??""}`)},te(u.value),11,FC)):F("",!0),_.disabled?F("",!0):(h(),y("div",UC,[d("div",WC,[f("bold")?(h(),y("svg",{key:0,class:L(xt),onClick:B,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},JC)):F("",!0),f("italics")?(h(),y("svg",{key:1,class:L(xt),onClick:D,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},YC)):F("",!0),f("link")?(h(),y("svg",{key:2,class:L(xt),onClick:ne,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},e5)):F("",!0),f("blockquote")?(h(),y("svg",{key:3,class:L(xt),onClick:Z,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},o5)):F("",!0),f("image")?(h(),y("svg",{key:4,class:L(xt),onClick:ge,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a5)):F("",!0),f("code")?(h(),y("svg",{key:5,class:L(xt),onClick:re,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},u5)):F("",!0),f("heading")?(h(),y("svg",{key:6,class:L(xt),onClick:pe,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},p5)):F("",!0),f("orderedList")?(h(),y("svg",{key:7,class:L(xt),icon:"",onClick:se,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},m5)):F("",!0),f("unorderedList")?(h(),y("svg",{key:8,class:L(xt),onClick:ve,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},y5)):F("",!0),f("strikethrough")?(h(),y("svg",{key:9,class:L(xt),onClick:P,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},k5)):F("",!0),f("undo")?(h(),y("svg",{key:10,class:L(xt),onClick:M,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},S5)):F("",!0),f("redo")?(h(),y("svg",{key:11,class:L(xt),onClick:U,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},_5)):F("",!0),he(_.$slots,"toolbarbuttons",{instance:(de=Xe())==null?void 0:de.exposed})]),f("help")&&_.helpUrl?(h(),y("div",M5,[d("a",{title:"formatting help",target:"_blank",href:_.helpUrl,tabindex:"-1"},[(h(),y("svg",{class:L(xt),xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},I5))],8,P5)])):F("",!0)])),d("div",L5,[d("textarea",{ref_key:"txt",ref:v,name:_.id,id:_.id,class:L(m.value),label:_.label,value:_.modelValue,rows:_.rows||6,disabled:_.disabled,onInput:H[0]||(H[0]=W=>{var be;return w(((be=W.target)==null?void 0:be.value)||"")}),onKeydown:Tc(X,["tab"])},null,42,z5)]),i.value?(h(),y("p",{key:2,class:"mt-2 text-sm text-red-500",id:`${_.id}-error`},te(i.value),9,R5)):_.help?(h(),y("p",{key:3,class:"mt-2 text-sm text-gray-500",id:`${_.id}-description`},te(_.help),9,j5)):F("",!0),he(_.$slots,"footer",Ue({inputElement:v.value,id:_.id,modelValue:_.modelValue,status:_.status},_.$attrs))])}}}),O5={key:0,class:"relative z-10 lg:hidden",role:"dialog","aria-modal":"true"},B5={class:"fixed inset-0 flex"},D5=d("span",{class:"sr-only"},"Close sidebar",-1),H5=d("svg",{class:"h-6 w-6 text-white dark:text-black",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),$5=[D5,H5],N5={class:"flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-black px-6 pb-2"},F5={class:"hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col"},U5={class:"flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-black px-6"},W5={class:L(["sticky top-0 flex items-center gap-x-6 bg-white dark:bg-black px-4 py-4 shadow-sm sm:px-6 lg:hidden"])},q5=d("span",{class:"sr-only"},"Open sidebar",-1),G5=d("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[d("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})],-1),J5=[q5,G5],Q5=Ce({__name:"SidebarLayout",setup(e,{expose:t}){const{transition:n}=Fc(),o=Y(!0),s=Y(""),r={entering:{cls:"transition-opacity ease-linear duration-300",from:"opacity-0",to:"opacity-100"},leaving:{cls:"transition-opacity ease-linear duration-300",from:"opacity-100",to:"opacity-0"}},a=Y(""),l={entering:{cls:"transition ease-in-out duration-300 transform",from:"-translate-x-full",to:"translate-x-0"},leaving:{cls:"transition ease-in-out duration-300 transform",from:"translate-x-0",to:"-translate-x-full"}},i=Y(""),u={entering:{cls:"ease-in-out duration-300",from:"opacity-0",to:"opacity-100"},leaving:{cls:"ease-in-out duration-300",from:"opacity-100",to:"opacity-0"}};function c(m){n(r,s,m),n(l,a,m),n(u,i,m),setTimeout(()=>o.value=m,300)}function p(){c(!0)}function f(){c(!1)}return t({show:p,hide:f,toggle:c}),(m,v)=>(h(),y("div",null,[o.value?(h(),y("div",O5,[d("div",{class:L(["fixed inset-0 bg-gray-900/80",s.value])},null,2),d("div",B5,[d("div",{class:L(["relative mr-16 flex w-full max-w-xs flex-1",a.value])},[d("div",{class:L(["absolute left-full top-0 flex w-16 justify-center pt-5",i.value])},[d("button",{type:"button",onClick:f,class:"-m-2.5 p-2.5"},$5)],2),d("div",N5,[he(m.$slots,"default")])],2)])])):F("",!0),d("div",F5,[d("div",U5,[he(m.$slots,"default")])]),d("div",W5,[d("button",{type:"button",onClick:p,class:"-m-2.5 p-2.5 text-gray-700 dark:text-gray-200 lg:hidden"},J5),he(m.$slots,"mobiletitlebar")])]))}}),K5={Alert:cg,AlertSuccess:xg,ErrorSummary:_g,InputDescription:Pg,Icon:md,Loading:B0,OutlineButton:$0,PrimaryButton:U0,SecondaryButton:G0,TextLink:J0,Breadcrumbs:ev,Breadcrumb:rv,NavList:lv,NavListItem:bv,AutoQueryGrid:Nb,SettingsIcons:n1,FilterViews:wi,FilterColumn:bi,QueryPrefs:ki,EnsureAccess:yd,EnsureAccessDialog:o1,TextInput:f1,TextareaInput:w1,SelectInput:A1,CheckboxInput:R1,TagInput:nw,FileInput:Tw,Autocomplete:$w,Combobox:Uw,DynamicInput:Ww,LookupInput:i2,AutoFormFields:l2,AutoForm:I2,AutoCreateForm:Z2,AutoEditForm:bk,ConfirmDelete:kk,FormLoading:_k,DataGrid:Lk,CellFormat:zk,PreviewFormat:Dk,HtmlFormat:Uk,CloseButton:Qk,SlideOver:ux,ModalDialog:gx,ModalLookup:uC,Tabs:yC,DarkModeToggle:CC,SignIn:NC,MarkdownInput:V5,SidebarLayout:Q5},Ur=K5,Y5={install(e){Object.keys(Ur).forEach(n=>{e.component(n,Ur[n])});function t(n){const o=Object.keys(n).filter(s=>n[s]).map(s=>`${encodeURIComponent(s)}=${encodeURIComponent(n[s])}`).join("&");return o?"?"+o:"./"}e.directive("href",function(n,o){n.href=t(o.value),n.onclick=s=>{s.preventDefault(),history.pushState(o.value,"",t(o.value))}})},component(e,t){return e?t?xe.components[e]=t:xe.components[e]||Ur[e]||null:null}},Gl=[{path:"/",name:"/",component:()=>Ve(()=>import("./index-D_LJ_dhU.js"),__vite__mapDeps([0,1,2,3,4,5]))},{path:"/:all(.*)",name:"/[...all]",component:()=>Ve(()=>import("./_...all_-B3L-3jG3.js"),__vite__mapDeps([])),meta:{layout:"empty"}},{path:"/about",name:"/about",component:()=>Ve(()=>import("./about--6RK47-D.js"),__vite__mapDeps([6,7])),meta:{crumbs:[],frontmatter:{title:"About this Template"}}},{path:"/blog",name:"/blog",component:()=>Ve(()=>import("./blog-oRobbo9_.js"),__vite__mapDeps([8,1,9,10,5]))},{path:"/counter",name:"/counter",component:()=>Ve(()=>import("./counter-D1ElbAkI.js"),__vite__mapDeps([11,1]))},{path:"/posts",children:[{path:"",name:"/posts/",component:()=>Ve(()=>import("./index-7WEGfD5Y.js"),__vite__mapDeps([12,1,13,5]))},{path:":slug",name:"/posts/[slug]",component:()=>Ve(()=>import("./_slug_-HNAesmnn.js"),__vite__mapDeps([14,3,5]))},{path:"author",children:[{path:":name",name:"/posts/author/[name]",component:()=>Ve(()=>import("./_name_-DjzXeEtl.js"),__vite__mapDeps([15,13,5]))}]},{path:"tagged",children:[{path:":tag",name:"/posts/tagged/[tag]",component:()=>Ve(()=>import("./_tag_-DJ5WpiOO.js"),__vite__mapDeps([16,13,5]))}]},{path:"year",children:[{path:":year",name:"/posts/year/[year]",component:()=>Ve(()=>import("./_year_-ZQ7ykxae.js"),__vite__mapDeps([17,13,5]))}]}]},{path:"/privacy",name:"/privacy",component:()=>Ve(()=>import("./privacy-Dd7uvJjM.js"),__vite__mapDeps([18,7])),meta:{crumbs:[],frontmatter:{title:"Privacy Policy"}}},{path:"/videos",name:"/videos",component:()=>Ve(()=>import("./videos-BtDhJf7W.js"),__vite__mapDeps([19,1,2,3]))},{path:"/whatsnew",name:"/whatsnew",component:()=>Ve(()=>import("./whatsnew-BOkl_Dqs.js"),__vite__mapDeps([20,3,9,21]))}];/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const eo=typeof window<"u";function Z5(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Je=Object.assign;function Wr(e,t){const n={};for(const o in t){const s=t[o];n[o]=Vt(s)?s.map(e):e(s)}return n}const jo=()=>{},Vt=Array.isArray,X5=/\/$/,e3=e=>e.replace(X5,"");function qr(e,t,n="/"){let o,s={},r="",a="";const l=t.indexOf("#");let i=t.indexOf("?");return l<i&&l>=0&&(i=-1),i>-1&&(o=t.slice(0,i),r=t.slice(i+1,l>-1?l:t.length),s=e(r)),l>-1&&(o=o||t.slice(0,l),a=t.slice(l,t.length)),o=s3(o??t,n),{fullPath:o+(r&&"?")+r+a,path:o,query:s,hash:a}}function t3(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Jl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function n3(e,t,n){const o=t.matched.length-1,s=n.matched.length-1;return o>-1&&o===s&&ho(t.matched[o],n.matched[s])&&bd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ho(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function bd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!o3(e[n],t[n]))return!1;return!0}function o3(e,t){return Vt(e)?Ql(e,t):Vt(t)?Ql(t,e):e===t}function Ql(e,t){return Vt(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function s3(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/"),s=o[o.length-1];(s===".."||s===".")&&o.push("");let r=n.length-1,a,l;for(a=0;a<o.length;a++)if(l=o[a],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(a-(a===o.length?1:0)).join("/")}var Jo;(function(e){e.pop="pop",e.push="push"})(Jo||(Jo={}));var Vo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Vo||(Vo={}));function r3(e){if(!e)if(eo){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),e3(e)}const a3=/^[^#]+#/;function i3(e,t){return e.replace(a3,"#")+t}function l3(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const xr=()=>({left:window.pageXOffset,top:window.pageYOffset});function u3(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=l3(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Kl(e,t){return(history.state?history.state.position-t:-1)+e}const xa=new Map;function c3(e,t){xa.set(e,t)}function d3(e){const t=xa.get(e);return xa.delete(e),t}let p3=()=>location.protocol+"//"+location.host;function wd(e,t){const{pathname:n,search:o,hash:s}=t,r=e.indexOf("#");if(r>-1){let l=s.includes(e.slice(r))?e.slice(r).length:1,i=s.slice(l);return i[0]!=="/"&&(i="/"+i),Jl(i,"")}return Jl(n,e)+o+s}function f3(e,t,n,o){let s=[],r=[],a=null;const l=({state:f})=>{const m=wd(e,location),v=n.value,w=t.value;let S=0;if(f){if(n.value=m,t.value=f,a&&a===v){a=null;return}S=w?f.position-w.position:0}else o(m);s.forEach(z=>{z(n.value,v,{delta:S,type:Jo.pop,direction:S?S>0?Vo.forward:Vo.back:Vo.unknown})})};function i(){a=n.value}function u(f){s.push(f);const m=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return r.push(m),m}function c(){const{history:f}=window;f.state&&f.replaceState(Je({},f.state,{scroll:xr()}),"")}function p(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:i,listen:u,destroy:p}}function Yl(e,t,n,o=!1,s=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:s?xr():null}}function h3(e){const{history:t,location:n}=window,o={value:wd(e,n)},s={value:t.state};s.value||r(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(i,u,c){const p=e.indexOf("#"),f=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+i:p3()+e+i;try{t[c?"replaceState":"pushState"](u,"",f),s.value=u}catch(m){console.error(m),n[c?"replace":"assign"](f)}}function a(i,u){const c=Je({},t.state,Yl(s.value.back,i,s.value.forward,!0),u,{position:s.value.position});r(i,c,!0),o.value=i}function l(i,u){const c=Je({},s.value,t.state,{forward:i,scroll:xr()});r(c.current,c,!0);const p=Je({},Yl(o.value,i,null),{position:c.position+1},u);r(i,p,!1),o.value=i}return{location:o,state:s,push:l,replace:a}}function m3(e){e=r3(e);const t=h3(e),n=f3(e,t.state,t.location,t.replace);function o(r,a=!0){a||n.pauseListeners(),history.go(r)}const s=Je({location:"",base:e,go:o,createHref:i3.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function g3(e){return typeof e=="string"||e&&typeof e=="object"}function kd(e){return typeof e=="string"||typeof e=="symbol"}const ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},xd=Symbol("");var Zl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Zl||(Zl={}));function mo(e,t){return Je(new Error,{type:e,[xd]:!0},t)}function Yt(e,t){return e instanceof Error&&xd in e&&(t==null||!!(e.type&t))}const Xl="[^/]+?",v3={sensitive:!1,strict:!1,start:!0,end:!0},y3=/[.+*?^${}()[\]/\\]/g;function b3(e,t){const n=Je({},v3,t),o=[];let s=n.start?"^":"";const r=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const f=u[p];let m=40+(n.sensitive?.25:0);if(f.type===0)p||(s+="/"),s+=f.value.replace(y3,"\\$&"),m+=40;else if(f.type===1){const{value:v,repeatable:w,optional:S,regexp:z}=f;r.push({name:v,repeatable:w,optional:S});const $=z||Xl;if($!==Xl){m+=10;try{new RegExp(`(${$})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${v}" (${$}): `+N.message)}}let A=w?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(A=S&&u.length<2?`(?:/${A})`:"/"+A),S&&(A+="?"),s+=A,m+=20,S&&(m+=-8),w&&(m+=-20),$===".*"&&(m+=-50)}c.push(m)}o.push(c)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(u){const c=u.match(a),p={};if(!c)return null;for(let f=1;f<c.length;f++){const m=c[f]||"",v=r[f-1];p[v.name]=m&&v.repeatable?m.split("/"):m}return p}function i(u){let c="",p=!1;for(const f of e){(!p||!c.endsWith("/"))&&(c+="/"),p=!1;for(const m of f)if(m.type===0)c+=m.value;else if(m.type===1){const{value:v,repeatable:w,optional:S}=m,z=v in u?u[v]:"";if(Vt(z)&&!w)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const $=Vt(z)?z.join("/"):z;if(!$)if(S)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):p=!0);else throw new Error(`Missing required param "${v}"`);c+=$}}return c||"/"}return{re:a,score:o,keys:r,parse:l,stringify:i}}function w3(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function k3(e,t){let n=0;const o=e.score,s=t.score;for(;n<o.length&&n<s.length;){const r=w3(o[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-o.length)===1){if(eu(o))return 1;if(eu(s))return-1}return s.length-o.length}function eu(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const x3={type:0,value:""},C3=/[a-zA-Z0-9_]/;function S3(e){if(!e)return[[]];if(e==="/")return[[x3]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,o=n;const s=[];let r;function a(){r&&s.push(r),r=[]}let l=0,i,u="",c="";function p(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:c,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=i}for(;l<e.length;){if(i=e[l++],i==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:i==="/"?(u&&p(),a()):i===":"?(p(),n=1):f();break;case 4:f(),n=o;break;case 1:i==="("?n=2:C3.test(i)?f():(p(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&l--);break;case 2:i===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+i:n=3:c+=i;break;case 3:p(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&l--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),p(),a(),s}function T3(e,t,n){const o=b3(S3(e.path),n),s=Je(o,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function A3(e,t){const n=[],o=new Map;t=ou({strict:!1,end:!0,sensitive:!1},t);function s(c){return o.get(c)}function r(c,p,f){const m=!f,v=_3(c);v.aliasOf=f&&f.record;const w=ou(t,c),S=[v];if("alias"in c){const A=typeof c.alias=="string"?[c.alias]:c.alias;for(const N of A)S.push(Je({},v,{components:f?f.record.components:v.components,path:N,aliasOf:f?f.record:v}))}let z,$;for(const A of S){const{path:N}=A;if(p&&N[0]!=="/"){const B=p.record.path,D=B[B.length-1]==="/"?"":"/";A.path=p.record.path+(N&&D+N)}if(z=T3(A,p,w),f?f.alias.push(z):($=$||z,$!==z&&$.alias.push(z),m&&c.name&&!nu(z)&&a(c.name)),v.children){const B=v.children;for(let D=0;D<B.length;D++)r(B[D],z,f&&f.children[D])}f=f||z,(z.record.components&&Object.keys(z.record.components).length||z.record.name||z.record.redirect)&&i(z)}return $?()=>{a($)}:jo}function a(c){if(kd(c)){const p=o.get(c);p&&(o.delete(c),n.splice(n.indexOf(p),1),p.children.forEach(a),p.alias.forEach(a))}else{const p=n.indexOf(c);p>-1&&(n.splice(p,1),c.record.name&&o.delete(c.record.name),c.children.forEach(a),c.alias.forEach(a))}}function l(){return n}function i(c){let p=0;for(;p<n.length&&k3(c,n[p])>=0&&(c.record.path!==n[p].record.path||!Cd(c,n[p]));)p++;n.splice(p,0,c),c.record.name&&!nu(c)&&o.set(c.record.name,c)}function u(c,p){let f,m={},v,w;if("name"in c&&c.name){if(f=o.get(c.name),!f)throw mo(1,{location:c});w=f.record.name,m=Je(tu(p.params,f.keys.filter($=>!$.optional).map($=>$.name)),c.params&&tu(c.params,f.keys.map($=>$.name))),v=f.stringify(m)}else if("path"in c)v=c.path,f=n.find($=>$.re.test(v)),f&&(m=f.parse(v),w=f.record.name);else{if(f=p.name?o.get(p.name):n.find($=>$.re.test(p.path)),!f)throw mo(1,{location:c,currentLocation:p});w=f.record.name,m=Je({},p.params,c.params),v=f.stringify(m)}const S=[];let z=f;for(;z;)S.unshift(z.record),z=z.parent;return{name:w,path:v,params:m,matched:S,meta:P3(S)}}return e.forEach(c=>r(c)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:l,getRecordMatcher:s}}function tu(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function _3(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:M3(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function M3(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="object"?n[o]:n;return t}function nu(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function P3(e){return e.reduce((t,n)=>Je(t,n.meta),{})}function ou(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function Cd(e,t){return t.children.some(n=>n===e||Cd(e,n))}const Sd=/#/g,E3=/&/g,I3=/\//g,L3=/=/g,z3=/\?/g,Td=/\+/g,R3=/%5B/g,j3=/%5D/g,Ad=/%5E/g,V3=/%60/g,_d=/%7B/g,O3=/%7C/g,Md=/%7D/g,B3=/%20/g;function xi(e){return encodeURI(""+e).replace(O3,"|").replace(R3,"[").replace(j3,"]")}function D3(e){return xi(e).replace(_d,"{").replace(Md,"}").replace(Ad,"^")}function Ca(e){return xi(e).replace(Td,"%2B").replace(B3,"+").replace(Sd,"%23").replace(E3,"%26").replace(V3,"`").replace(_d,"{").replace(Md,"}").replace(Ad,"^")}function H3(e){return Ca(e).replace(L3,"%3D")}function $3(e){return xi(e).replace(Sd,"%23").replace(z3,"%3F")}function N3(e){return e==null?"":$3(e).replace(I3,"%2F")}function er(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function F3(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<o.length;++s){const r=o[s].replace(Td," "),a=r.indexOf("="),l=er(a<0?r:r.slice(0,a)),i=a<0?null:er(r.slice(a+1));if(l in t){let u=t[l];Vt(u)||(u=t[l]=[u]),u.push(i)}else t[l]=i}return t}function su(e){let t="";for(let n in e){const o=e[n];if(n=H3(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Vt(o)?o.map(r=>r&&Ca(r)):[o&&Ca(o)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function U3(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Vt(o)?o.map(s=>s==null?null:""+s):o==null?o:""+o)}return t}const W3=Symbol(""),ru=Symbol(""),Cr=Symbol(""),Ci=Symbol(""),Sa=Symbol("");function So(){let e=[];function t(o){return e.push(o),()=>{const s=e.indexOf(o);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function fn(e,t,n,o,s){const r=o&&(o.enterCallbacks[s]=o.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const i=p=>{p===!1?l(mo(4,{from:n,to:t})):p instanceof Error?l(p):g3(p)?l(mo(2,{from:t,to:p})):(r&&o.enterCallbacks[s]===r&&typeof p=="function"&&r.push(p),a())},u=e.call(o&&o.instances[s],t,n,i);let c=Promise.resolve(u);e.length<3&&(c=c.then(i)),c.catch(p=>l(p))})}function Gr(e,t,n,o){const s=[];for(const r of e)for(const a in r.components){let l=r.components[a];if(!(t!=="beforeRouteEnter"&&!r.instances[a]))if(q3(l)){const u=(l.__vccOpts||l)[t];u&&s.push(fn(u,n,o,r,a))}else{let i=l();s.push(()=>i.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const c=Z5(u)?u.default:u;r.components[a]=c;const f=(c.__vccOpts||c)[t];return f&&fn(f,n,o,r,a)()}))}}return s}function q3(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function au(e){const t=qe(Cr),n=qe(Ci),o=C(()=>t.resolve(me(e.to))),s=C(()=>{const{matched:i}=o.value,{length:u}=i,c=i[u-1],p=n.matched;if(!c||!p.length)return-1;const f=p.findIndex(ho.bind(null,c));if(f>-1)return f;const m=iu(i[u-2]);return u>1&&iu(c)===m&&p[p.length-1].path!==m?p.findIndex(ho.bind(null,i[u-2])):f}),r=C(()=>s.value>-1&&K3(n.params,o.value.params)),a=C(()=>s.value>-1&&s.value===n.matched.length-1&&bd(n.params,o.value.params));function l(i={}){return Q3(i)?t[me(e.replace)?"replace":"push"](me(e.to)).catch(jo):Promise.resolve()}return{route:o,href:C(()=>o.value.href),isActive:r,isExactActive:a,navigate:l}}const G3=Ce({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:au,setup(e,{slots:t}){const n=ar(au(e)),{options:o}=qe(Cr),s=C(()=>({[lu(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[lu(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:Tt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),J3=G3;function Q3(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function K3(e,t){for(const n in t){const o=t[n],s=e[n];if(typeof o=="string"){if(o!==s)return!1}else if(!Vt(s)||s.length!==o.length||o.some((r,a)=>r!==s[a]))return!1}return!0}function iu(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const lu=(e,t,n)=>e??t??n,Y3=Ce({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=qe(Sa),s=C(()=>e.route||o.value),r=qe(ru,0),a=C(()=>{let u=me(r);const{matched:c}=s.value;let p;for(;(p=c[u])&&!p.components;)u++;return u}),l=C(()=>s.value.matched[a.value]);en(ru,C(()=>a.value+1)),en(W3,l),en(Sa,s);const i=Y();return _t(()=>[i.value,l.value,e.name],([u,c,p],[f,m,v])=>{c&&(c.instances[p]=u,m&&m!==c&&u&&u===f&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!ho(c,m)||!f)&&(c.enterCallbacks[p]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=s.value,c=e.name,p=l.value,f=p&&p.components[c];if(!f)return uu(n.default,{Component:f,route:u});const m=p.props[c],v=m?m===!0?u.params:typeof m=="function"?m(u):m:null,S=Tt(f,Je({},v,t,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(p.instances[c]=null)},ref:i}));return uu(n.default,{Component:S,route:u})||S}}});function uu(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Z3=Y3;function X3(e){const t=A3(e.routes,e),n=e.parseQuery||F3,o=e.stringifyQuery||su,s=e.history,r=So(),a=So(),l=So(),i=jp(ln);let u=ln;eo&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Wr.bind(null,E=>""+E),p=Wr.bind(null,N3),f=Wr.bind(null,er);function m(E,q){let O,I;return kd(E)?(O=t.getRecordMatcher(E),I=q):I=E,t.addRoute(I,O)}function v(E){const q=t.getRecordMatcher(E);q&&t.removeRoute(q)}function w(){return t.getRoutes().map(E=>E.record)}function S(E){return!!t.getRecordMatcher(E)}function z(E,q){if(q=Je({},q||i.value),typeof E=="string"){const b=qr(n,E,q.path),T=t.resolve({path:b.path},q),k=s.createHref(b.fullPath);return Je(b,T,{params:f(T.params),hash:er(b.hash),redirectedFrom:void 0,href:k})}let O;if("path"in E)O=Je({},E,{path:qr(n,E.path,q.path).path});else{const b=Je({},E.params);for(const T in b)b[T]==null&&delete b[T];O=Je({},E,{params:p(b)}),q.params=p(q.params)}const I=t.resolve(O,q),ae=E.hash||"";I.params=c(f(I.params));const Se=t3(o,Je({},E,{hash:D3(ae),path:I.path})),g=s.createHref(Se);return Je({fullPath:Se,hash:ae,query:o===su?U3(E.query):E.query||{}},I,{redirectedFrom:void 0,href:g})}function $(E){return typeof E=="string"?qr(n,E,i.value.path):Je({},E)}function A(E,q){if(u!==E)return mo(8,{from:q,to:E})}function N(E){return P(E)}function B(E){return N(Je($(E),{replace:!0}))}function D(E){const q=E.matched[E.matched.length-1];if(q&&q.redirect){const{redirect:O}=q;let I=typeof O=="function"?O(E):O;return typeof I=="string"&&(I=I.includes("?")||I.includes("#")?I=$(I):{path:I},I.params={}),Je({query:E.query,hash:E.hash,params:"path"in I?{}:E.params},I)}}function P(E,q){const O=u=z(E),I=i.value,ae=E.state,Se=E.force,g=E.replace===!0,b=D(O);if(b)return P(Je($(b),{state:typeof b=="object"?Je({},ae,b.state):ae,force:Se,replace:g}),q||O);const T=O;T.redirectedFrom=q;let k;return!Se&&n3(o,I,O)&&(k=mo(16,{to:T,from:I}),H(I,I,!0,!1)),(k?Promise.resolve(k):ge(T,I)).catch(x=>Yt(x)?Yt(x,2)?x:_(x):U(x,T,I)).then(x=>{if(x){if(Yt(x,2))return P(Je({replace:g},$(x.to),{state:typeof x.to=="object"?Je({},ae,x.to.state):ae,force:Se}),q||T)}else x=se(T,I,!0,g,ae);return re(T,I,x),x})}function ne(E,q){const O=A(E,q);return O?Promise.reject(O):Promise.resolve()}function Z(E){const q=be.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(E):E()}function ge(E,q){let O;const[I,ae,Se]=e4(E,q);O=Gr(I.reverse(),"beforeRouteLeave",E,q);for(const b of I)b.leaveGuards.forEach(T=>{O.push(fn(T,E,q))});const g=ne.bind(null,E,q);return O.push(g),ue(O).then(()=>{O=[];for(const b of r.list())O.push(fn(b,E,q));return O.push(g),ue(O)}).then(()=>{O=Gr(ae,"beforeRouteUpdate",E,q);for(const b of ae)b.updateGuards.forEach(T=>{O.push(fn(T,E,q))});return O.push(g),ue(O)}).then(()=>{O=[];for(const b of Se)if(b.beforeEnter)if(Vt(b.beforeEnter))for(const T of b.beforeEnter)O.push(fn(T,E,q));else O.push(fn(b.beforeEnter,E,q));return O.push(g),ue(O)}).then(()=>(E.matched.forEach(b=>b.enterCallbacks={}),O=Gr(Se,"beforeRouteEnter",E,q),O.push(g),ue(O))).then(()=>{O=[];for(const b of a.list())O.push(fn(b,E,q));return O.push(g),ue(O)}).catch(b=>Yt(b,8)?b:Promise.reject(b))}function re(E,q,O){l.list().forEach(I=>Z(()=>I(E,q,O)))}function se(E,q,O,I,ae){const Se=A(E,q);if(Se)return Se;const g=q===ln,b=eo?history.state:{};O&&(I||g?s.replace(E.fullPath,Je({scroll:g&&b&&b.scroll},ae)):s.push(E.fullPath,ae)),i.value=E,H(E,q,O,g),_()}let ve;function pe(){ve||(ve=s.listen((E,q,O)=>{if(!R.listening)return;const I=z(E),ae=D(I);if(ae){P(Je(ae,{replace:!0}),I).catch(jo);return}u=I;const Se=i.value;eo&&c3(Kl(Se.fullPath,O.delta),xr()),ge(I,Se).catch(g=>Yt(g,12)?g:Yt(g,2)?(P(g.to,I).then(b=>{Yt(b,20)&&!O.delta&&O.type===Jo.pop&&s.go(-1,!1)}).catch(jo),Promise.reject()):(O.delta&&s.go(-O.delta,!1),U(g,I,Se))).then(g=>{g=g||se(I,Se,!1),g&&(O.delta&&!Yt(g,8)?s.go(-O.delta,!1):O.type===Jo.pop&&Yt(g,20)&&s.go(-1,!1)),re(I,Se,g)}).catch(jo)}))}let J=So(),ie=So(),M;function U(E,q,O){_(E);const I=ie.list();return I.length?I.forEach(ae=>ae(E,q,O)):console.error(E),Promise.reject(E)}function X(){return M&&i.value!==ln?Promise.resolve():new Promise((E,q)=>{J.add([E,q])})}function _(E){return M||(M=!E,pe(),J.list().forEach(([q,O])=>E?O(E):q()),J.reset()),E}function H(E,q,O,I){const{scrollBehavior:ae}=e;if(!eo||!ae)return Promise.resolve();const Se=!O&&d3(Kl(E.fullPath,0))||(I||!O)&&history.state&&history.state.scroll||null;return jt().then(()=>ae(E,q,Se)).then(g=>g&&u3(g)).catch(g=>U(g,E,q))}const de=E=>s.go(E);let W;const be=new Set,R={currentRoute:i,listening:!0,addRoute:m,removeRoute:v,hasRoute:S,getRoutes:w,resolve:z,options:e,push:N,replace:B,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:r.add,beforeResolve:a.add,afterEach:l.add,onError:ie.add,isReady:X,install(E){const q=this;E.component("RouterLink",J3),E.component("RouterView",Z3),E.config.globalProperties.$router=q,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>me(i)}),eo&&!W&&i.value===ln&&(W=!0,N(s.location).catch(ae=>{}));const O={};for(const ae in ln)Object.defineProperty(O,ae,{get:()=>i.value[ae],enumerable:!0});E.provide(Cr,q),E.provide(Ci,$u(O)),E.provide(Sa,i);const I=E.unmount;be.add(E),E.unmount=function(){be.delete(E),be.size<1&&(u=ln,ve&&ve(),ve=null,i.value=ln,W=!1,M=!1),I()}}};function ue(E){return E.reduce((q,O)=>q.then(()=>Z(O)),Promise.resolve())}return R}function e4(e,t){const n=[],o=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let a=0;a<r;a++){const l=t.matched[a];l&&(e.matched.find(u=>ho(u,l))?o.push(l):n.push(l));const i=e.matched[a];i&&(t.matched.find(u=>ho(u,i))||s.push(i))}return[n,o,s]}function h6(){return qe(Cr)}function m6(){return qe(Ci)}function t4(e){const{extendRoutes:t}=e;return X3(Object.assign(e,{routes:typeof t=="function"?t(Gl):Gl}))}const n4=e=>{const t={};Object.entries(Object.assign({"/src/layouts/default.vue":()=>Ve(()=>import("./default-B08z9VzJ.js"),__vite__mapDeps([22,10,9])),"/src/layouts/empty.vue":()=>Ve(()=>import("./empty-B7NxOaDY.js"),__vite__mapDeps([23,9]))})).forEach(([s,r])=>{let a=s.replace("/src/layouts/","").replace(".vue","");t[a]=r});function o(s,r=!0){return s.map(a=>{var l,i,u,c,p,f;if(((l=a.children)==null?void 0:l.length)>0&&(a.children=o(a.children,!1)),r){if(!a.component&&((i=a.children)==null?void 0:i.find(v=>{var w;return(v.path===""||v.path==="/")&&((w=v.meta)==null?void 0:w.isLayout)})))return a;if(((u=a.meta)==null?void 0:u.layout)!==!1)return{path:a.path,component:t[((c=a.meta)==null?void 0:c.layout)||"default"],children:a.path==="/"?[a]:[{...a,path:""}],meta:{isLayout:!0}}}return(p=a.meta)!=null&&p.layout?{path:a.path,component:t[(f=a.meta)==null?void 0:f.layout],children:[{...a,path:""}],meta:{isLayout:!0}}:a})}return o(e)},o4={blog:{config:{localBaseUrl:"http://localhost:5173",publicBaseUrl:"https://press-vue.servicestack.net",siteTwitter:"@Vue",blogTitle:"From the blog",blogDescription:"Writing on software design and aerospace industry.",blogEmail:"email@example.org (Vue)",blogImageUrl:"https://servicestack.net/img/logo.png"},authors:[{name:"Lucy Bates",email:"lucy@email.org",bio:"Works in software design, company building, and the aerospace industry.",profileUrl:"/img/profiles/user1.svg",twitterUrl:"https://twitter.com/lucy",threadsUrl:"https://threads.net/@lucy",gitHubUrl:"https://github.com/lucy"},{name:"Gayle Smith",email:"gayle@email.org",bio:"Gayle is an author, consultant, and founder focusing on improving tech.",profileUrl:"/img/profiles/user2.svg",twitterUrl:"https://twitter.com/gayle",mastodonUrl:"https://mastodon.social/@gayle"},{name:"Brandon Foley",email:"brandon@email.org",bio:"I am a programmer at heart. I like to tinker with code and build generic coding structures.",profileUrl:"/img/profiles/user3.svg",gitHubUrl:"https://github.com/brandon"}],posts:[{slug:"vite-press-plugin",path:"src/_posts/2024-03-01_vite-press-plugin.md",fileName:"vite-press-plugin.md",content:`The Vite Press Plugin is an alternative to [VitePress](https://vitepress.dev) for adding Markdown features 
to existing Vite Vue or React projects. It's a non-intrusive plugin for Vue and React Vite apps that want to 
add markdown powered content features without needing to adopt an opinionated framework for their entire App.

## Universal Markdown Features

A goal for **vite-press-plugin** is to implement a suite of universal markdown-powered features that can be
reused across all our Vue, React and .NET Razor and Blazor project templates, allowing you to freely copy and 
incorporate same set of markdown feature folders to power markdown content features across a range of 
websites built with different technologies.

### Vite Apps with vite-press-plugin

The **vite-press-plugin** currently powers the markdown features in the following Vite Vue and React templates:

#### Vite Templates with vite-press-plugin

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

#### .NET 8 API backend with Vite Vue & React SPA frontend

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

The **vite-press-plugin** makes the Markdown features available to the Vite App, whilst the markdown rendering itself is optimally
implemented in:

 - Vue Templates - with [markdown-it](https://github.com/markdown-it/markdown-it) in [Vue SFC](https://vuejs.org/guide/scaling-up/sfc.html) Components
 - React Templates - with [remark](https://github.com/remarkjs/remark) and [MDX](https://mdxjs.com) in [React](https://react.dev) Components

### .NET Templates with C# and Markdig

Whilst the same Markdown feature folders are [implemented in C#](https://razor-ssg.web-templates.io/posts/razor-ssg)
and rendered with [Markdig](https://github.com/xoofx/markdig) and either Razor Pages or Blazor Components:

#### .NET 8 Razor SSG and Blazor SSR Templates

 - [razor-ssg](https://razor-ssg.web-templates.io) - .NET Razor SSG Blog and Marketing Website with **Markdig**
 - [blazor-vue](https://blazor-vue.web-templates.io) - .NET 8 Blazor Server Rendered Website with **Markdig**
 - [razor-press](https://razor-press.web-templates.io) - .NET Razor SSG Documentation Website with **Markdig**

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

`,date:"2024-03-01",tags:["docs","markdown"],wordCount:2368,lineCount:525,minutesToRead:11,title:"Vite Press Plugin",summary:"Introducing the Vite Press Plugin for Vite Vue & React Apps",author:"Lucy Bates",image:"https://images.unsplash.com/photo-1524668951403-d44b28200ce0?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/vite-press-plugin"},{slug:"markdown-components-in-vue",path:"src/_posts/2024-02-28_markdown-components-in-vue.md",fileName:"markdown-components-in-vue.md",content:`<script setup>
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

`,date:"2022-09-06",tags:["dev","hosting","devops"],wordCount:2832,lineCount:220,minutesToRead:13,title:"In pursuit of the best value US cloud provider",summary:"We've been using AWS at ServiceStack for 10+ years, it's served us well but suffers from complex & expensive pricing",author:"Brandon Foley",image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&fit=crop&h=1000&w=2000",url:"/posts/hetzner-cloud"}],authorSlugs:{"lucy-bates":{name:"Lucy Bates",email:"lucy@email.org",bio:"Works in software design, company building, and the aerospace industry.",profileUrl:"/img/profiles/user1.svg",twitterUrl:"https://twitter.com/lucy",threadsUrl:"https://threads.net/@lucy",gitHubUrl:"https://github.com/lucy"},"gayle-smith":{name:"Gayle Smith",email:"gayle@email.org",bio:"Gayle is an author, consultant, and founder focusing on improving tech.",profileUrl:"/img/profiles/user2.svg",twitterUrl:"https://twitter.com/gayle",mastodonUrl:"https://mastodon.social/@gayle"},"brandon-foley":{name:"Brandon Foley",email:"brandon@email.org",bio:"I am a programmer at heart. I like to tinker with code and build generic coding structures.",profileUrl:"/img/profiles/user3.svg",gitHubUrl:"https://github.com/brandon"}},tagSlugs:{dev:"dev",hosting:"hosting",devops:"devops",tailwind:"tailwind",markdown:"markdown","github-actions":"github-actions",c:"c#",js:"js",razor:"razor",blog:"blog",dotnet:"dotnet",blazor:"blazor",templates:"templates",servicestack:"servicestack",docs:"docs"}},videos:{vue:[{slug:"autoquerygrid",path:"src/_videos/vue/autoquerygrid.md",fileName:"autoquerygrid.md",content:`This walkthrough explores the ServiceStack Vue 3 library and the functionality of the AutoQueryGrid component. The AutoQueryGrid component simplifies the integration of AutoQuery services by generating a customizable UI. 

By following this guide, you'll learn how to effectively utilize these tools to enhance your application's user interface and overall user experience.
`,date:"2023-03-16",tags:["vue","autoquery"],wordCount:51,lineCount:4,minutesToRead:0,title:"Instantly Manage your data using AutoQueryGrid Vue",url:"https://youtu.be/znCoC-Ct0Ps",order:1,group:"vue"},{slug:"components",path:"src/_videos/vue/components.md",fileName:"components.md",content:"In this video, we demonstrate using the @servicestack/vue components library for Vue.js 3 Multipage Apps (MPAs) along with the `vue-mjs` template. \n\nThe template illustrates building content-heavy or complex sites while avoiding the intricacies of Single Page Apps (SPAs) through the use of JavaScript Modules, Tailwind, Vue.js, Razor Pages, and ServiceStack.",date:"2023-02-14",tags:["vue","autoquery"],wordCount:53,lineCount:3,minutesToRead:0,title:"Vue 3 Tailwind Components Library",url:"https://youtu.be/YIa0w6whe2U",order:2,group:"vue"},{slug:"admin",path:"src/_videos/vue/admin.md",fileName:"admin.md",content:`In this video we explore the Server Multi Razor Page and Client rendered Admin UI Pages in the latest 
.NET blazor-vue and razor-vue project templates to see how to use the new SidebarLayout and 
AutoQueryGrid Vue Tailwind components to build beautiful Admin UI Pages within minutes.
`,date:"2023-06-14",tags:["vue","autoquery"],wordCount:46,lineCount:4,minutesToRead:0,title:"Build beautiful custom .NET Admin UIs in minutes",url:"https://youtu.be/wlRA4_owEsc",order:3,group:"vue"},{slug:"modern",path:"src/_videos/vue/modern.md",fileName:"modern.md",content:`ServiceStack templates provide a wide range of options when it comes to using Razor Pages in your .NET application

These templates come with Tailwind, JS Modules, and Vue components already built-in, making it easy to build 
hybrid apps containing both Server-Side Rendering (SSR) and static resources`,date:"2023-02-08",tags:["vue","razor"],wordCount:46,lineCount:4,minutesToRead:0,title:"Modern Razor Pages & MVC .NET Tailwind templates",url:"https://youtu.be/SyppvQB7IPs",order:4,group:"vue"}]},whatsNew:{"2023-03-28_Planetaria":[{slug:"feature1",path:"src/_whatsnew/2023-03-28_Planetaria/feature1.md",fileName:"feature1.md",content:`Welcome to the world of Planetaria, a groundbreaking new product that is poised to revolutionize the way we explore space. 
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
complex animations that would otherwise be time-consuming and challenging to build.`,date:"2023-03-08",tags:[],wordCount:86,lineCount:7,minutesToRead:0,title:"Animaginary",url:"/blog",image:"/img/whatsnew/animaginary.svg",group:"Animaginary"}]},components:{blog:{"vite-press-plugin":()=>Ve(()=>import("./2024-03-01_vite-press-plugin-CBp9HquJ.js"),__vite__mapDeps([24,7])),"markdown-components-in-vue":()=>Ve(()=>import("./2024-02-28_markdown-components-in-vue-DtLYOrcI.js"),__vite__mapDeps([25,7,4,26,27,28])),"net8-best-blazor":()=>Ve(()=>import("./2023-11-22_net8-best-blazor-HvBNIbcJ.js"),__vite__mapDeps([29,7,27,30])),"net8-blazor-template":()=>Ve(()=>import("./2023-11-20_net8-blazor-template-BcIwNOUK.js"),__vite__mapDeps([31,7,30])),"razor-ssg-new-blog-features":()=>Ve(()=>import("./2023-08-23_razor-ssg-new-blog-features-CsaHpJX8.js"),__vite__mapDeps([32,7,4,28])),"razor-ssg":()=>Ve(()=>import("./2023-03-30_razor-ssg-CjDsh4SH.js"),__vite__mapDeps([33,7,4])),javascript:()=>Ve(()=>import("./2023-02-01_javascript-G72Jo_zh.js"),__vite__mapDeps([34,7,26,27])),start:()=>Ve(()=>import("./2023-01-21_start-DrCU4Lc7.js"),__vite__mapDeps([35,7])),rider:()=>Ve(()=>import("./2023-01-11_rider-DvFEv2iT.js"),__vite__mapDeps([36,7])),vs:()=>Ve(()=>import("./2023-01-10_vs-_jxEqXJh.js"),__vite__mapDeps([37,7])),deploy:()=>Ve(()=>import("./2023-01-01_deploy-DhfaaszT.js"),__vite__mapDeps([38,7])),typography:()=>Ve(()=>import("./2022-12-31_typography-B-FtD7TM.js"),__vite__mapDeps([39,7])),"hetzner-cloud":()=>Ve(()=>import("./2022-09-06_hetzner-cloud-0acrmTve.js"),__vite__mapDeps([40,7,41]))},videos:{vue:{autoquerygrid:()=>Ve(()=>import("./autoquerygrid-vgDf7cIF.js"),__vite__mapDeps([42,7])),components:()=>Ve(()=>import("./components-BG-YZYmn.js"),__vite__mapDeps([43,7])),admin:()=>Ve(()=>import("./admin-DqzmDsTW.js"),__vite__mapDeps([44,7])),modern:()=>Ve(()=>import("./modern-C0zc8RKe.js"),__vite__mapDeps([45,7]))}},whatsNew:{"2023-03-28_Planetaria":{feature1:()=>Ve(()=>import("./feature1-g8jk_wyq.js"),__vite__mapDeps([46,7]))},"2023-03-18_OpenShuttle":{feature1:()=>Ve(()=>import("./feature1-jrVz6guy.js"),__vite__mapDeps([47,7]))},"2023-03-08_Animaginary":{feature1:()=>Ve(()=>import("./feature1-DKHGxl-E.js"),__vite__mapDeps([48,7]))}},includes:{"component-links.md":()=>Ve(()=>import("./component-links-CECtA3kf.js"),__vite__mapDeps([49,7])),"features.md":()=>Ve(()=>import("./features-k3ijqSMC.js"),__vite__mapDeps([50,7]))}}},Oo=/^[a-z0-9]+(-[a-z0-9]+)*$/,Sr=(e,t,n,o="")=>{const s=e.split(":");if(e.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;o=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const l=s.pop(),i=s.pop(),u={provider:s.length>0?s[0]:o,prefix:i,name:l};return t&&!Bs(u)?null:u}const r=s[0],a=r.split("-");if(a.length>1){const l={provider:o,prefix:a.shift(),name:a.join("-")};return t&&!Bs(l)?null:l}if(n&&o===""){const l={provider:o,prefix:"",name:r};return t&&!Bs(l,n)?null:l}return null},Bs=(e,t)=>e?!!((e.provider===""||e.provider.match(Oo))&&(t&&e.prefix===""||e.prefix.match(Oo))&&e.name.match(Oo)):!1,Pd=Object.freeze({left:0,top:0,width:16,height:16}),tr=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Tr=Object.freeze({...Pd,...tr}),Ta=Object.freeze({...Tr,body:"",hidden:!1});function s4(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const o=((e.rotate||0)+(t.rotate||0))%4;return o&&(n.rotate=o),n}function cu(e,t){const n=s4(e,t);for(const o in Ta)o in tr?o in e&&!(o in n)&&(n[o]=tr[o]):o in t?n[o]=t[o]:o in e&&(n[o]=e[o]);return n}function r4(e,t){const n=e.icons,o=e.aliases||Object.create(null),s=Object.create(null);function r(a){if(n[a])return s[a]=[];if(!(a in s)){s[a]=null;const l=o[a]&&o[a].parent,i=l&&r(l);i&&(s[a]=[l].concat(i))}return s[a]}return(t||Object.keys(n).concat(Object.keys(o))).forEach(r),s}function a4(e,t,n){const o=e.icons,s=e.aliases||Object.create(null);let r={};function a(l){r=cu(o[l]||s[l],r)}return a(t),n.forEach(a),cu(e,r)}function Ed(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(s=>{t(s,null),n.push(s)});const o=r4(e);for(const s in o){const r=o[s];r&&(t(s,a4(e,s,r)),n.push(s))}return n}const i4={provider:"",aliases:{},not_found:{},...Pd};function Jr(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Id(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!Jr(e,i4))return null;const n=t.icons;for(const s in n){const r=n[s];if(!s.match(Oo)||typeof r.body!="string"||!Jr(r,Ta))return null}const o=t.aliases||Object.create(null);for(const s in o){const r=o[s],a=r.parent;if(!s.match(Oo)||typeof a!="string"||!n[a]&&!o[a]||!Jr(r,Ta))return null}return t}const du=Object.create(null);function l4(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function Hn(e,t){const n=du[e]||(du[e]=Object.create(null));return n[t]||(n[t]=l4(e,t))}function Si(e,t){return Id(t)?Ed(t,(n,o)=>{o?e.icons[n]=o:e.missing.add(n)}):[]}function u4(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let Qo=!1;function Ld(e){return typeof e=="boolean"&&(Qo=e),Qo}function c4(e){const t=typeof e=="string"?Sr(e,!0,Qo):e;if(t){const n=Hn(t.provider,t.prefix),o=t.name;return n.icons[o]||(n.missing.has(o)?null:void 0)}}function d4(e,t){const n=Sr(e,!0,Qo);if(!n)return!1;const o=Hn(n.provider,n.prefix);return u4(o,n.name,t)}function p4(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),Qo&&!t&&!e.prefix){let s=!1;return Id(e)&&(e.prefix="",Ed(e,(r,a)=>{a&&d4(r,a)&&(s=!0)})),s}const n=e.prefix;if(!Bs({provider:t,prefix:n,name:"a"}))return!1;const o=Hn(t,n);return!!Si(o,e)}const zd=Object.freeze({width:null,height:null}),Rd=Object.freeze({...zd,...tr}),f4=/(-?[0-9.]*[0-9]+[0-9.]*)/g,h4=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function pu(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const o=e.split(f4);if(o===null||!o.length)return e;const s=[];let r=o.shift(),a=h4.test(r);for(;;){if(a){const l=parseFloat(r);isNaN(l)?s.push(r):s.push(Math.ceil(l*t*n)/n)}else s.push(r);if(r=o.shift(),r===void 0)return s.join("");a=!a}}const m4=e=>e==="unset"||e==="undefined"||e==="none";function g4(e,t){const n={...Tr,...e},o={...Rd,...t},s={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,o].forEach(v=>{const w=[],S=v.hFlip,z=v.vFlip;let $=v.rotate;S?z?$+=2:(w.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),w.push("scale(-1 1)"),s.top=s.left=0):z&&(w.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),w.push("scale(1 -1)"),s.top=s.left=0);let A;switch($<0&&($-=Math.floor($/4)*4),$=$%4,$){case 1:A=s.height/2+s.top,w.unshift("rotate(90 "+A.toString()+" "+A.toString()+")");break;case 2:w.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:A=s.width/2+s.left,w.unshift("rotate(-90 "+A.toString()+" "+A.toString()+")");break}$%2===1&&(s.left!==s.top&&(A=s.left,s.left=s.top,s.top=A),s.width!==s.height&&(A=s.width,s.width=s.height,s.height=A)),w.length&&(r='<g transform="'+w.join(" ")+'">'+r+"</g>")});const a=o.width,l=o.height,i=s.width,u=s.height;let c,p;a===null?(p=l===null?"1em":l==="auto"?u:l,c=pu(p,i/u)):(c=a==="auto"?i:a,p=l===null?pu(c,u/i):l==="auto"?u:l);const f={},m=(v,w)=>{m4(w)||(f[v]=w.toString())};return m("width",c),m("height",p),f.viewBox=s.left.toString()+" "+s.top.toString()+" "+i.toString()+" "+u.toString(),{attributes:f,body:r}}const v4=/\sid="(\S+)"/g,y4="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let b4=0;function w4(e,t=y4){const n=[];let o;for(;o=v4.exec(e);)n.push(o[1]);if(!n.length)return e;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(r=>{const a=typeof t=="function"?t(r):t+(b4++).toString(),l=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+a+s+"$3")}),e=e.replace(new RegExp(s,"g"),""),e}const Aa=Object.create(null);function k4(e,t){Aa[e]=t}function _a(e){return Aa[e]||Aa[""]}function Ti(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Ai=Object.create(null),To=["https://api.simplesvg.com","https://api.unisvg.com"],Ds=[];for(;To.length>0;)To.length===1||Math.random()>.5?Ds.push(To.shift()):Ds.push(To.pop());Ai[""]=Ti({resources:["https://api.iconify.design"].concat(Ds)});function x4(e,t){const n=Ti(t);return n===null?!1:(Ai[e]=n,!0)}function _i(e){return Ai[e]}const C4=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let fu=C4();function S4(e,t){const n=_i(e);if(!n)return 0;let o;if(!n.maxURL)o=0;else{let s=0;n.resources.forEach(a=>{s=Math.max(s,a.length)});const r=t+".json?icons=";o=n.maxURL-s-n.path.length-r.length}return o}function T4(e){return e===404}const A4=(e,t,n)=>{const o=[],s=S4(e,t),r="icons";let a={type:r,provider:e,prefix:t,icons:[]},l=0;return n.forEach((i,u)=>{l+=i.length+1,l>=s&&u>0&&(o.push(a),a={type:r,provider:e,prefix:t,icons:[]},l=i.length),a.icons.push(i)}),o.push(a),o};function _4(e){if(typeof e=="string"){const t=_i(e);if(t)return t.path}return"/"}const M4=(e,t,n)=>{if(!fu){n("abort",424);return}let o=_4(t.provider);switch(t.type){case"icons":{const r=t.prefix,l=t.icons.join(","),i=new URLSearchParams({icons:l});o+=r+".json?"+i.toString();break}case"custom":{const r=t.uri;o+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let s=503;fu(e+o).then(r=>{const a=r.status;if(a!==200){setTimeout(()=>{n(T4(a)?"abort":"next",a)});return}return s=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",s)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",s)})},P4={prepare:A4,send:M4};function E4(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((s,r)=>s.provider!==r.provider?s.provider.localeCompare(r.provider):s.prefix!==r.prefix?s.prefix.localeCompare(r.prefix):s.name.localeCompare(r.name));let o={provider:"",prefix:"",name:""};return e.forEach(s=>{if(o.name===s.name&&o.prefix===s.prefix&&o.provider===s.provider)return;o=s;const r=s.provider,a=s.prefix,l=s.name,i=n[r]||(n[r]=Object.create(null)),u=i[a]||(i[a]=Hn(r,a));let c;l in u.icons?c=t.loaded:a===""||u.missing.has(l)?c=t.missing:c=t.pending;const p={provider:r,prefix:a,name:l};c.push(p)}),t}function jd(e,t){e.forEach(n=>{const o=n.loaderCallbacks;o&&(n.loaderCallbacks=o.filter(s=>s.id!==t))})}function I4(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const o=e.provider,s=e.prefix;t.forEach(r=>{const a=r.icons,l=a.pending.length;a.pending=a.pending.filter(i=>{if(i.prefix!==s)return!0;const u=i.name;if(e.icons[u])a.loaded.push({provider:o,prefix:s,name:u});else if(e.missing.has(u))a.missing.push({provider:o,prefix:s,name:u});else return n=!0,!0;return!1}),a.pending.length!==l&&(n||jd([e],r.id),r.callback(a.loaded.slice(0),a.missing.slice(0),a.pending.slice(0),r.abort))})}))}let L4=0;function z4(e,t,n){const o=L4++,s=jd.bind(null,n,o);if(!t.pending.length)return s;const r={id:o,icons:t,callback:e,abort:s};return n.forEach(a=>{(a.loaderCallbacks||(a.loaderCallbacks=[])).push(r)}),s}function R4(e,t=!0,n=!1){const o=[];return e.forEach(s=>{const r=typeof s=="string"?Sr(s,t,n):s;r&&o.push(r)}),o}var j4={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function V4(e,t,n,o){const s=e.resources.length,r=e.random?Math.floor(Math.random()*s):e.index;let a;if(e.random){let D=e.resources.slice(0);for(a=[];D.length>1;){const P=Math.floor(Math.random()*D.length);a.push(D[P]),D=D.slice(0,P).concat(D.slice(P+1))}a=a.concat(D)}else a=e.resources.slice(r).concat(e.resources.slice(0,r));const l=Date.now();let i="pending",u=0,c,p=null,f=[],m=[];typeof o=="function"&&m.push(o);function v(){p&&(clearTimeout(p),p=null)}function w(){i==="pending"&&(i="aborted"),v(),f.forEach(D=>{D.status==="pending"&&(D.status="aborted")}),f=[]}function S(D,P){P&&(m=[]),typeof D=="function"&&m.push(D)}function z(){return{startTime:l,payload:t,status:i,queriesSent:u,queriesPending:f.length,subscribe:S,abort:w}}function $(){i="failed",m.forEach(D=>{D(void 0,c)})}function A(){f.forEach(D=>{D.status==="pending"&&(D.status="aborted")}),f=[]}function N(D,P,ne){const Z=P!=="success";switch(f=f.filter(ge=>ge!==D),i){case"pending":break;case"failed":if(Z||!e.dataAfterTimeout)return;break;default:return}if(P==="abort"){c=ne,$();return}if(Z){c=ne,f.length||(a.length?B():$());return}if(v(),A(),!e.random){const ge=e.resources.indexOf(D.resource);ge!==-1&&ge!==e.index&&(e.index=ge)}i="completed",m.forEach(ge=>{ge(ne)})}function B(){if(i!=="pending")return;v();const D=a.shift();if(D===void 0){if(f.length){p=setTimeout(()=>{v(),i==="pending"&&(A(),$())},e.timeout);return}$();return}const P={status:"pending",resource:D,callback:(ne,Z)=>{N(P,ne,Z)}};f.push(P),u++,p=setTimeout(B,e.rotate),n(D,t,P.callback)}return setTimeout(B),z}function Vd(e){const t={...j4,...e};let n=[];function o(){n=n.filter(l=>l().status==="pending")}function s(l,i,u){const c=V4(t,l,i,(p,f)=>{o(),u&&u(p,f)});return n.push(c),c}function r(l){return n.find(i=>l(i))||null}return{query:s,find:r,setIndex:l=>{t.index=l},getIndex:()=>t.index,cleanup:o}}function hu(){}const Qr=Object.create(null);function O4(e){if(!Qr[e]){const t=_i(e);if(!t)return;const n=Vd(t),o={config:t,redundancy:n};Qr[e]=o}return Qr[e]}function B4(e,t,n){let o,s;if(typeof e=="string"){const r=_a(e);if(!r)return n(void 0,424),hu;s=r.send;const a=O4(e);a&&(o=a.redundancy)}else{const r=Ti(e);if(r){o=Vd(r);const a=e.resources?e.resources[0]:"",l=_a(a);l&&(s=l.send)}}return!o||!s?(n(void 0,424),hu):o.query(t,s,n)().abort}const mu="iconify2",Ko="iconify",Od=Ko+"-count",gu=Ko+"-version",Bd=36e5,D4=168;function Ma(e,t){try{return e.getItem(t)}catch{}}function Mi(e,t,n){try{return e.setItem(t,n),!0}catch{}}function vu(e,t){try{e.removeItem(t)}catch{}}function Pa(e,t){return Mi(e,Od,t.toString())}function Ea(e){return parseInt(Ma(e,Od))||0}const Ar={local:!0,session:!0},Dd={local:new Set,session:new Set};let Pi=!1;function H4(e){Pi=e}let Ss=typeof window>"u"?{}:window;function Hd(e){const t=e+"Storage";try{if(Ss&&Ss[t]&&typeof Ss[t].length=="number")return Ss[t]}catch{}Ar[e]=!1}function $d(e,t){const n=Hd(e);if(!n)return;const o=Ma(n,gu);if(o!==mu){if(o){const l=Ea(n);for(let i=0;i<l;i++)vu(n,Ko+i.toString())}Mi(n,gu,mu),Pa(n,0);return}const s=Math.floor(Date.now()/Bd)-D4,r=l=>{const i=Ko+l.toString(),u=Ma(n,i);if(typeof u=="string"){try{const c=JSON.parse(u);if(typeof c=="object"&&typeof c.cached=="number"&&c.cached>s&&typeof c.provider=="string"&&typeof c.data=="object"&&typeof c.data.prefix=="string"&&t(c,l))return!0}catch{}vu(n,i)}};let a=Ea(n);for(let l=a-1;l>=0;l--)r(l)||(l===a-1?(a--,Pa(n,a)):Dd[e].add(l))}function Nd(){if(!Pi){H4(!0);for(const e in Ar)$d(e,t=>{const n=t.data,o=t.provider,s=n.prefix,r=Hn(o,s);if(!Si(r,n).length)return!1;const a=n.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,a):a,!0})}}function $4(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const o in Ar)$d(o,s=>{const r=s.data;return s.provider!==e.provider||r.prefix!==e.prefix||r.lastModified===t});return!0}function N4(e,t){Pi||Nd();function n(o){let s;if(!Ar[o]||!(s=Hd(o)))return;const r=Dd[o];let a;if(r.size)r.delete(a=Array.from(r).shift());else if(a=Ea(s),!Pa(s,a+1))return;const l={cached:Math.floor(Date.now()/Bd),provider:e.provider,data:t};return Mi(s,Ko+a.toString(),JSON.stringify(l))}t.lastModified&&!$4(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function yu(){}function F4(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,I4(e)}))}function U4(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:o}=e,s=e.iconsToLoad;delete e.iconsToLoad;let r;if(!s||!(r=_a(n)))return;r.prepare(n,o,s).forEach(l=>{B4(n,l,i=>{if(typeof i!="object")l.icons.forEach(u=>{e.missing.add(u)});else try{const u=Si(e,i);if(!u.length)return;const c=e.pendingIcons;c&&u.forEach(p=>{c.delete(p)}),N4(e,i)}catch(u){console.error(u)}F4(e)})})}))}const W4=(e,t)=>{const n=R4(e,!0,Ld()),o=E4(n);if(!o.pending.length){let i=!0;return t&&setTimeout(()=>{i&&t(o.loaded,o.missing,o.pending,yu)}),()=>{i=!1}}const s=Object.create(null),r=[];let a,l;return o.pending.forEach(i=>{const{provider:u,prefix:c}=i;if(c===l&&u===a)return;a=u,l=c,r.push(Hn(u,c));const p=s[u]||(s[u]=Object.create(null));p[c]||(p[c]=[])}),o.pending.forEach(i=>{const{provider:u,prefix:c,name:p}=i,f=Hn(u,c),m=f.pendingIcons||(f.pendingIcons=new Set);m.has(p)||(m.add(p),s[u][c].push(p))}),r.forEach(i=>{const{provider:u,prefix:c}=i;s[u][c].length&&U4(i,s[u][c])}),t?z4(t,o,r):yu};function q4(e,t){const n={...e};for(const o in t){const s=t[o],r=typeof s;o in zd?(s===null||s&&(r==="string"||r==="number"))&&(n[o]=s):r===typeof n[o]&&(n[o]=o==="rotate"?s%4:s)}return n}const G4=/[\s,]+/;function J4(e,t){t.split(G4).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Q4(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function o(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(e);return isNaN(s)?0:o(s)}else if(n!==e){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r=r/s,r%1===0?o(r):0)}}return t}function K4(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in t)n+=" "+o+'="'+t[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Y4(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Z4(e){return"data:image/svg+xml,"+Y4(e)}function X4(e){return'url("'+Z4(e)+'")'}const bu={...Rd,inline:!1},e6={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},t6={display:"inline-block"},Ia={backgroundColor:"currentColor"},Fd={backgroundColor:"transparent"},wu={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},ku={webkitMask:Ia,mask:Ia,background:Fd};for(const e in ku){const t=ku[e];for(const n in wu)t[e+n]=wu[n]}const Hs={};["horizontal","vertical"].forEach(e=>{const t=e.slice(0,1)+"Flip";Hs[e+"-flip"]=t,Hs[e.slice(0,1)+"-flip"]=t,Hs[e+"Flip"]=t});function xu(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const Cu=(e,t)=>{const n=q4(bu,t),o={...e6},s=t.mode||"svg",r={},a=t.style,l=typeof a=="object"&&!(a instanceof Array)?a:{};for(let w in t){const S=t[w];if(S!==void 0)switch(w){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[w]=S===!0||S==="true"||S===1;break;case"flip":typeof S=="string"&&J4(n,S);break;case"color":r.color=S;break;case"rotate":typeof S=="string"?n[w]=Q4(S):typeof S=="number"&&(n[w]=S);break;case"ariaHidden":case"aria-hidden":S!==!0&&S!=="true"&&delete o["aria-hidden"];break;default:{const z=Hs[w];z?(S===!0||S==="true"||S===1)&&(n[z]=!0):bu[w]===void 0&&(o[w]=S)}}}const i=g4(e,n),u=i.attributes;if(n.inline&&(r.verticalAlign="-0.125em"),s==="svg"){o.style={...r,...l},Object.assign(o,u);let w=0,S=t.id;return typeof S=="string"&&(S=S.replace(/-/g,"_")),o.innerHTML=w4(i.body,S?()=>S+"ID"+w++:"iconifyVue"),Tt("svg",o)}const{body:c,width:p,height:f}=e,m=s==="mask"||(s==="bg"?!1:c.indexOf("currentColor")!==-1),v=K4(c,{...u,width:p+"",height:f+""});return o.style={...r,"--svg":X4(v),width:xu(u.width),height:xu(u.height),...t6,...m?Ia:Fd,...l},Tt("span",o)};Ld(!0);k4("",P4);if(typeof document<"u"&&typeof window<"u"){Nd();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!p4(o))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const o="IconifyProviders["+n+"] is invalid.";try{const s=t[n];if(typeof s!="object"||!s||s.resources===void 0)continue;x4(n,s)||console.error(o)}catch{console.error(o)}}}}const n6={...Tr,body:""},o6=Ce({inheritAttrs:!1,data(){return{iconMounted:!1,counter:0}},mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,t){if(typeof e=="object"&&e!==null&&typeof e.body=="string")return this._name="",this.abortLoading(),{data:e};let n;if(typeof e!="string"||(n=Sr(e,!1,!0))===null)return this.abortLoading(),null;const o=c4(n);if(!o)return(!this._loadingIcon||this._loadingIcon.name!==e)&&(this.abortLoading(),this._name="",o!==null&&(this._loadingIcon={name:e,abort:W4([n],()=>{this.counter++})})),null;this.abortLoading(),this._name!==e&&(this._name=e,t&&t(e));const s=["iconify"];return n.prefix!==""&&s.push("iconify--"+n.prefix),n.provider!==""&&s.push("iconify--"+n.provider),{data:o,classes:s}}},render(){this.counter;const e=this.$attrs,t=this.iconMounted?this.getIcon(e.icon,e.onLoad):null;if(!t)return Cu(n6,e);let n=e;return t.classes&&(n={...e,class:(typeof e.class=="string"?e.class+" ":"")+t.classes.join(" ")}),Cu({...Tr,...t.data},n)}});/*!
 * Original code by Ibrahim Cesar
 * MIT Licensed, Copyright 2022 Ibrahim Cesar, see https://github.com/ibrahimcesar/react-lite-youtube-embed/blob/main/LICENSE for details
 *
 * Credits to the team:
 * https://github.com/ibrahimcesar/react-lite-youtube-embed/blob/main/src/lib/index.tsx
 */function Kr(e,t){var n;if(e===null)throw new Error("iframe element not instantiated.");(n=e.contentWindow)==null||n.postMessage(`{"event":"command","func":"${t}","args":""}`,"*")}function Ts(e){return Mo("link",{attrs:{rel:"preconnect",href:e}})}const s6=e=>e?Object.entries(e).reduce((t,[n,o])=>(n=n.charAt(0).toUpperCase()+n.slice(1),n=`on${n}`,{...t,[n]:o}),{}):null,Mo=(e,t={},n)=>{const{props:o,domProps:s,on:r,attrs:a,...l}=t,i=s6(r),u={...l,...o,...s,...i,...a};return Tt(e,u,n)},r6=Ce({props:{announce:{type:String,required:!1,default:"Watch"},id:{type:String,required:!0},title:{type:String,required:!1},activatedClass:{type:String,required:!1,default:"lyt-activated"},adNetwork:{type:Boolean,required:!1,default:!0},iframeClass:{type:String,required:!1,default:""},cookie:{type:Boolean,required:!1,default:!1},params:{type:String,required:!1,default:""},playerClass:{type:String,required:!1,default:"lty-playbtn"},playlist:{type:Boolean,required:!1,default:!1},playlistCoverId:{type:String,required:!1,default:""},poster:{type:String,required:!1,default:"maxresdefault"},wrapperClass:{type:String,required:!1,default:"yt-lite"},muted:{type:Boolean,required:!1,default:!1},thumbnail:{type:String,required:!1},webp:{type:Boolean,required:!1,default:!1},rel:{type:String,required:!1,default:"preload"},aspectHeight:{type:Number,required:!1,default:9},aspectWidth:{type:Number,required:!1,default:16}},emits:["iframeAdded"],setup(e,{emit:t,expose:n}){const o=Y(!1),s=Y(!1),r=Y(null),a=C(()=>encodeURIComponent(e.id)),l=C(()=>`&${e.params}`||""),i=C(()=>e.muted?"&mute=1":""),u=C(()=>e.webp?"webp":"jpg"),c=C(()=>e.webp?"vi_webp":"vi"),p=C(()=>typeof e.playlistCoverId=="string"?encodeURIComponent(e.playlistCoverId):null),f=C(()=>e.thumbnail||(e.playlist?`https://i.ytimg.com/${c.value}/${p.value}/${e.poster}.${u.value}`:`https://i.ytimg.com/${c.value}/${a.value}/${e.poster}.${u.value}`)),m=C(()=>e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com"),v=C(()=>e.playlist?`${m.value}/embed/videoseries?autoplay=1&enablejsapi=1&list=${a.value}${i.value}${l.value}`:`${m.value}/embed/${a.value}?autoplay=1&enablejsapi=1&state=1${i.value}${l.value}`);function w(){s.value||(s.value=!0,t("iframeAdded"))}function S(){o.value||(o.value=!0)}n({getPlayerInstance(){return r.value},stopVideo(){Kr(r.value,"stopVideo")},pauseVideo(){Kr(r.value,"pauseVideo")},playVideo(){Kr(r.value,"playVideo")},warmConnections:S,addIframe:w});const z=()=>[Mo("link",{attrs:{rel:e.rel,href:f.value,as:"image"}}),o.value?Ts(m.value):null,o.value?Ts("https://www.google.com"):null,e.adNetwork?Ts("https://static.doubleclick.net"):null,e.adNetwork?Ts("https://googleads.g.doubleclick.net"):null,Mo("article",{on:{pointerover:S,click:w},class:`${e.wrapperClass} ${s.value?e.activatedClass:""}`,attrs:{"data-title":e.title},style:{backgroundImage:`url(${f.value})`,"--aspect-ratio":`${e.aspectHeight/e.aspectWidth*100}%`}},[Mo("button",{class:e.playerClass,attrs:{type:"button","aria-label":`${e.announce} ${e.title}`}}),s.value?Mo("iframe",{ref:r,class:e.iframeClass,attrs:{title:e.title,width:560,height:315,frameborder:0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0,src:v.value}}):null])];return()=>z()}}),a6={key:1},i6=Ce({__name:"Include",props:{src:{}},setup(e){const t=e,s=(qe("press").components.includes||{})[t.src],r=s?tf(s):null;return(a,l)=>me(r)?(h(),we(qa(me(r)),{key:0,name:a.src,frontmatter:{nowrap:!0}},null,8,["name"])):(h(),y("div",a6,"Include not found: "+te(a.src),1))}}),l6=mh(lm),u6=sm(),Ud=t4({history:m3(),scrollBehavior(e,t,n){if(n)return n;if(e.hash)return{el:e.hash,behavior:"smooth"};setTimeout(()=>{window.scrollTo(0,0)},1)},extendRoutes(e){return e.forEach(t=>{t.path.startsWith("/admin")&&(t.children??[]).forEach(n=>{n.meta??(n.meta={}),n.meta.layout="admin"})}),n4(e)}});Ud.beforeEach((e,t,n)=>{e.path.startsWith("/http")?location.href=e.path.substring(1):n()});l6.use(u6).use(Ud).use(Y5).provide("press",o4).component("LiteYouTube",r6).component("Iconify",o6).component("Include",i6).mount("#app");export{m6 as A,On as B,It as C,qa as D,tf as E,Re as F,ts as G,Ro as H,d6 as I,pa as J,p6 as K,i6 as _,d as a,Ae as b,y as c,Ce as d,Be as e,fr as f,Qe as g,we as h,am as i,Y as j,C as k,jn as l,F as m,L as n,h as o,f6 as p,Ct as q,ye as r,Tt as s,te as t,me as u,ua as v,He as w,qe as x,he as y,h6 as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D_LJ_dhU.js","assets/SrcPage.vue_vue_type_script_setup_true_lang-DfSp0-gK.js","assets/VideoGroup.vue_vue_type_script_setup_true_lang-wVKokvDa.js","assets/MarkdownComponent.vue_vue_type_script_setup_true_lang-BL-IUw54.js","assets/GettingStarted.vue_vue_type_script_setup_true_lang-BetqeAWy.js","assets/utils-C8n5x8YU.js","assets/about--6RK47-D.js","assets/MarkdownPage.vue_vue_type_script_setup_true_lang-BZqqfLRe.js","assets/blog-oRobbo9_.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/logo-B7mEEm0i.js","assets/counter-D1ElbAkI.js","assets/index-7WEGfD5Y.js","assets/BlogTitle.vue_vue_type_script_setup_true_lang-DIJSI7HD.js","assets/_slug_-HNAesmnn.js","assets/_name_-DjzXeEtl.js","assets/_tag_-DJ5WpiOO.js","assets/_year_-ZQ7ykxae.js","assets/privacy-Dd7uvJjM.js","assets/videos-BtDhJf7W.js","assets/whatsnew-BOkl_Dqs.js","assets/whatsnew-edl9V2YA.css","assets/default-B08z9VzJ.js","assets/empty-B7NxOaDY.js","assets/2024-03-01_vite-press-plugin-CBp9HquJ.js","assets/2024-02-28_markdown-components-in-vue-DtLYOrcI.js","assets/HelloApi.vue_vue_type_script_setup_true_lang-yE_9BDVl.js","assets/Counter.vue_vue_type_script_setup_true_lang-BxS2Vq0U.js","assets/ChartJs-CzsmkTOF.js","assets/2023-11-22_net8-best-blazor-HvBNIbcJ.js","assets/Templates.vue_vue_type_script_setup_true_lang-DfSlxt7D.js","assets/2023-11-20_net8-blazor-template-BcIwNOUK.js","assets/2023-08-23_razor-ssg-new-blog-features-CsaHpJX8.js","assets/2023-03-30_razor-ssg-CjDsh4SH.js","assets/2023-02-01_javascript-G72Jo_zh.js","assets/2023-01-21_start-DrCU4Lc7.js","assets/2023-01-11_rider-DvFEv2iT.js","assets/2023-01-10_vs-_jxEqXJh.js","assets/2023-01-01_deploy-DhfaaszT.js","assets/2022-12-31_typography-B-FtD7TM.js","assets/2022-09-06_hetzner-cloud-0acrmTve.js","assets/2022-09-06_hetzner-cloud-DQ1ZL1Ux.css","assets/autoquerygrid-vgDf7cIF.js","assets/components-BG-YZYmn.js","assets/admin-DqzmDsTW.js","assets/modern-C0zc8RKe.js","assets/feature1-g8jk_wyq.js","assets/feature1-jrVz6guy.js","assets/feature1-DKHGxl-E.js","assets/component-links-CECtA3kf.js","assets/features-k3ijqSMC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
