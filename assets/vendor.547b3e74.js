function t(){}const e=t=>t;function n(t){return t()}function s(){return Object.create(null)}function i(t){t.forEach(n)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}const h="undefined"!=typeof window;let u=h?()=>window.performance.now():()=>Date.now(),l=h?t=>requestAnimationFrame(t):t;const d=new Set;function f(t){d.forEach((e=>{e.c(t)||(d.delete(e),e.f())})),0!==d.size&&l(f)}function p(t){let e;return 0===d.size&&l(f),{promise:new Promise((n=>{d.add(e={c:t,f:n})})),abort(){d.delete(e)}}}function g(t,e){t.appendChild(e)}function m(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function y(t){const e=T("style");return function(t,e){g(t.head||t,e)}(m(t),e),e}function v(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function T(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function I(){return E(" ")}function _(){return E("")}function b(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function S(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function A(t,e){t.value=null==e?"":e}const C=new Set;let N,R=0;function D(t,e,n,s,i,r,o,a=0){const c=16.666/s;let h="{\n";for(let m=0;m<=1;m+=c){const t=e+(n-e)*r(m);h+=100*m+`%{${o(t,1-t)}}\n`}const u=h+`100% {${o(n,1-n)}}\n}`,l=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${a}`,d=m(t);C.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=y(t).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[l]||(p[l]=!0,f.insertRule(`@keyframes ${l} ${u}`,f.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${l} ${s}ms linear ${i}ms 1 both`,R+=1,l}function O(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-s.length;i&&(t.style.animation=s.join(", "),R-=i,R||l((()=>{R||(C.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),C.clear())})))}function L(t){N=t}const P=[],M=[],U=[],x=[],V=Promise.resolve();let F=!1;function j(t){U.push(t)}let q=!1;const B=new Set;function $(){if(!q){q=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];L(e),H(e.$$)}for(L(null),P.length=0;M.length;)M.pop()();for(let t=0;t<U.length;t+=1){const e=U[t];B.has(e)||(B.add(e),e())}U.length=0}while(P.length);for(;x.length;)x.pop()();F=!1,q=!1,B.clear()}}function H(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}let K;function z(){return K||(K=Promise.resolve(),K.then((()=>{K=null}))),K}function G(t,e,n){t.dispatchEvent(function(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}(`${e?"intro":"outro"}${n}`))}const W=new Set;let J;function Q(){J={r:0,c:[],p:J}}function X(){J.r||i(J.c),J=J.p}function Y(t,e){t&&t.i&&(W.delete(t),t.i(e))}function Z(t,e,n,s){if(t&&t.o){if(W.has(t))return;W.add(t),J.c.push((()=>{W.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}const tt={duration:0};function et(n,s,i){let o,a,c=s(n,i),h=!1,l=0;function d(){o&&O(n,o)}function f(){const{delay:s=0,duration:i=300,easing:r=e,tick:f=t,css:g}=c||tt;g&&(o=D(n,0,1,i,s,r,g,l++)),f(0,1);const m=u()+s,y=m+i;a&&a.abort(),h=!0,j((()=>G(n,!0,"start"))),a=p((t=>{if(h){if(t>=y)return f(1,0),G(n,!0,"end"),d(),h=!1;if(t>=m){const e=r((t-m)/i);f(e,1-e)}}return h}))}let g=!1;return{start(){g||(g=!0,O(n),r(c)?(c=c(),z().then(f)):f())},invalidate(){g=!1},end(){h&&(d(),h=!1)}}}function nt(n,s,o,a){let c=s(n,o),h=a?0:1,l=null,d=null,f=null;function g(){f&&O(n,f)}function m(t,e){const n=t.b-h;return e*=Math.abs(n),{a:h,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function y(s){const{delay:r=0,duration:o=300,easing:a=e,tick:y=t,css:v}=c||tt,w={start:u()+r,b:s};s||(w.group=J,J.r+=1),l||d?d=w:(v&&(g(),f=D(n,h,s,o,r,a,v)),s&&y(0,1),l=m(w,o),j((()=>G(n,s,"start"))),p((t=>{if(d&&t>d.start&&(l=m(d,o),d=null,G(n,l.b,"start"),v&&(g(),f=D(n,h,l.b,l.duration,0,a,c.css))),l)if(t>=l.end)y(h=l.b,1-h),G(n,l.b,"end"),d||(l.b?g():--l.group.r||i(l.group.c)),l=null;else if(t>=l.start){const e=t-l.start;h=l.a+l.d*a(e/l.duration),y(h,1-h)}return!(!l&&!d)})))}return{run(t){r(c)?z().then((()=>{c=c(),y(t)})):y(t)},end(){g(),l=d=null}}}function st(t){t&&t.c()}function it(t,e,s,o){const{fragment:a,on_mount:c,on_destroy:h,after_update:u}=t.$$;a&&a.m(e,s),o||j((()=>{const e=c.map(n).filter(r);h?h.push(...e):i(e),t.$$.on_mount=[]})),u.forEach(j)}function rt(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){-1===t.$$.dirty[0]&&(P.push(t),F||(F=!0,V.then($)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function at(e,n,r,o,a,c,h,u=[-1]){const l=N;L(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(l?l.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||l.$$.root};h&&h(d.root);let f=!1;if(d.ctx=r?r(e,n.props||{},((t,n,...s)=>{const i=s.length?s[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),f&&ot(e,t)),n})):[],d.update(),f=!0,i(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const t=(p=n.target,Array.from(p.childNodes));d.fragment&&d.fragment.l(t),t.forEach(w)}else d.fragment&&d.fragment.c();n.intro&&Y(e.$$.fragment),it(e,n.target,n.anchor,n.customElement),$()}var p;L(l)}class ct{$destroy(){rt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ht(t,{delay:n=0,duration:s=400,easing:i=e}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:s,easing:i,css:t=>"opacity: "+t*r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const e=t[i],r=i+1<t.length,o=r?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,h=e>>2,u=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),s.push(n[h],n[u],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e}(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(r>>10)),e[s++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],r=i<t.length?n[t.charAt(i)]:0;++i;const o=i<t.length?n[t.charAt(i)]:64;++i;const a=i<t.length?n[t.charAt(i)]:64;if(++i,null==e||null==r||null==o||null==a)throw Error();const c=e<<2|r>>4;if(s.push(c),64!==o){const t=r<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ft(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function pt(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function gt(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function mt(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}class yt extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vt.prototype.create)}}class vt{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(wt,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new yt(s,o,n)}}const wt=/\{\$([^}]+)}/g;function Tt(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(Et(n)&&Et(r)){if(!Tt(n,r))return!1}else if(n!==r)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Et(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _t(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,s]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(s)}})),e}function bt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}class St{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let s;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");s=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===s.next&&(s.next=kt),void 0===s.error&&(s.error=kt),void 0===s.complete&&(s.complete=kt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(t){}})),this.observers.push(s),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function kt(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){return t&&t._delegate?t._delegate:t}class Ct{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new lt;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:s});n.resolve(t)}catch(e){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,r]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&r.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(s){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,"[DEFAULT]"===s?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Rt{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Nt(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,Ot;(Ot=Dt||(Dt={}))[Ot.DEBUG=0]="DEBUG",Ot[Ot.VERBOSE=1]="VERBOSE",Ot[Ot.INFO=2]="INFO",Ot[Ot.WARN=3]="WARN",Ot[Ot.ERROR=4]="ERROR",Ot[Ot.SILENT=5]="SILENT";const Lt={debug:Dt.DEBUG,verbose:Dt.VERBOSE,info:Dt.INFO,warn:Dt.WARN,error:Dt.ERROR,silent:Dt.SILENT},Pt=Dt.INFO,Mt={[Dt.DEBUG]:"log",[Dt.VERBOSE]:"log",[Dt.INFO]:"info",[Dt.WARN]:"warn",[Dt.ERROR]:"error"},Ut=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=Mt[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class xt{constructor(t){this.name=t,this._logLevel=Pt,this._logHandler=Ut,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Dt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Lt[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Dt.DEBUG,...t),this._logHandler(this,Dt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Dt.VERBOSE,...t),this._logHandler(this,Dt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Dt.INFO,...t),this._logHandler(this,Dt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Dt.WARN,...t),this._logHandler(this,Dt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Dt.ERROR,...t),this._logHandler(this,Dt.ERROR,...t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Ft="@firebase/app",jt=new xt("@firebase/app"),qt={[Ft]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Bt=new Map,$t=new Map;function Ht(t,e){try{t.container.addComponent(e)}catch(n){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kt(t){const e=t.name;if($t.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;$t.set(e,t);for(const n of Bt.values())Ht(n,t);return!0}function zt(t,e){return t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new vt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ct("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!=typeof s||!s)throw Gt.create("bad-app-name",{appName:String(s)});const i=Bt.get(s);if(i){if(Tt(t,i.options)&&Tt(n,i.config))return i;throw Gt.create("duplicate-app",{appName:s})}const r=new Rt(s);for(const a of $t.values())r.addComponent(a);const o=new Wt(t,n,r);return Bt.set(s,o),o}function Qt(t="[DEFAULT]"){const e=Bt.get(t);if(!e)throw Gt.create("no-app",{appName:t});return e}function Xt(t,e,n){var s;let i=null!==(s=qt[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void jt.warn(t.join(" "))}Kt(new Ct(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt;Yt="",Kt(new Ct("platform-logger",(t=>new Vt(t)),"PRIVATE")),Xt(Ft,"0.7.10",Yt),Xt(Ft,"0.7.10","esm2017"),Xt("fire-js","");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Zt(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]])}return n}function te(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Xt("firebase","9.6.0","app");const ee=te,ne=new vt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),se=new xt("@firebase/auth");function ie(t,...e){se.logLevel<=Dt.ERROR&&se.error(`Auth (9.6.0): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t,...e){throw ce(t,...e)}function oe(t,...e){return ce(t,...e)}function ae(t,e,n){const s=Object.assign(Object.assign({},ee()),{[e]:n});return new vt("auth","Firebase",s).create(e,{appName:t.name})}function ce(t,...e){if("string"!=typeof t){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return ne.create(t,...e)}function he(t,e,...n){if(!t)throw ce(e,...n)}function ue(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ie(e),new Error(e)}function le(t,e){t||ue(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=new Map;function fe(t){le(t instanceof Function,"Expected a class definition");let e=de.get(t);return e?(le(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,de.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pe(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function ge(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==ge()&&"https:"!==ge()&&!pt()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(t,e){this.shortDelay=t,this.longDelay=e,le(e>t,"Short delay should be less than long delay!"),this.isMobile=ft()||gt()}get(){return me()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t,e){le(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ue("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ue("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ue("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ee=new ye(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _e(t,e,n,s,i={}){return be(t,i,(()=>{let i={},r={};s&&("GET"===e?r=s:i={body:JSON.stringify(s)});const o=It(Object.assign({key:t.config.apiKey},r)).slice(1),a=new(we.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&a.set("X-Firebase-Locale",t.languageCode),we.fetch()(ke(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))}))}async function be(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Te),e);try{const e=new Ae(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw Ce(t,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const e=i.ok?r.errorMessage:r.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ce(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw Ce(t,"email-already-in-use",r);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ae(t,a,o);re(t,a)}}catch(i){if(i instanceof yt)throw i;re(t,"network-request-failed")}}async function Se(t,e,n,s,i={}){const r=await _e(t,e,n,s,i);return"mfaPendingCredential"in r&&re(t,"multi-factor-auth-required",{_serverResponse:r}),r}function ke(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ve(t.config,i):`${t.config.apiScheme}://${i}`}class Ae{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(oe(this.auth,"timeout"))),Ee.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ce(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=oe(t,e,s);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ne(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function Re(t){return 1e3*Number(t)}function De(t){const[e,n,s]=t.split(".");if(void 0===e||void 0===n||void 0===s)return ie("JWT malformed, contained fewer than 3 sections"),null;try{const t=function(t){try{return ut.decodeString(t,!0)}catch(e){}return null}(n);return t?JSON.parse(t):(ie("Failed to decode base64 JWT payload"),null)}catch(i){return ie("Caught error parsing JWT payload as JSON",i),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Oe(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof yt&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}class Le{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ne(this.lastLoginAt),this.creationTime=Ne(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Oe(t,async function(t,e){return _e(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:s}));he(null==i?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?r.providerUserInfo.map((t=>{var{providerId:e}=t,n=Zt(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,h=o,[...c.filter((t=>!h.some((e=>e.providerId===t.providerId)))),...h]);var c,h;const u=t.isAnonymous,l=!(t.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!u&&l,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Pe(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ue{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){he(t.idToken,"internal-error"),he(void 0!==t.idToken,"internal-error"),he(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=De(t);return he(e,"internal-error"),he(void 0!==e.exp,"internal-error"),he(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return he(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:s,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await be(t,{},(()=>{const n=It({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,r=ke(t,s,"/v1/token",`key=${i}`);return we.fetch()(r,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:s,expirationTime:i}=e,r=new Ue;return n&&(he("string"==typeof n,"internal-error",{appName:t}),r.refreshToken=n),s&&(he("string"==typeof s,"internal-error",{appName:t}),r.accessToken=s),i&&(he("number"==typeof i,"internal-error",{appName:t}),r.expirationTime=i),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ue,this.toJSON())}_performRefresh(){return ue("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,e){he("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Ve{constructor(t){var{uid:e,auth:n,stsTokenManager:s}=t,i=Zt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Le(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Pe(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await Oe(this,this.stsTokenManager.getToken(this.auth,t));return he(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=At(t),s=await n.getIdToken(e),i=De(s);he(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r="object"==typeof i.firebase?i.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ne(Re(i.auth_time)),issuedAtTime:Ne(Re(i.iat)),expirationTime:Ne(Re(i.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=At(t);await Me(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(he(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Ve(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Me(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Oe(this,async function(t,e){return _e(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,s,i,r,o,a,c,h;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,l=null!==(s=e.email)&&void 0!==s?s:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(r=e.photoURL)&&void 0!==r?r:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(h=e.lastLoginAt)&&void 0!==h?h:void 0,{uid:v,emailVerified:w,isAnonymous:T,providerData:E,stsTokenManager:I}=e;he(v&&I,t,"internal-error");const _=Ue.fromJSON(this.name,I);he("string"==typeof v,t,"internal-error"),xe(u,t.name),xe(l,t.name),he("boolean"==typeof w,t,"internal-error"),he("boolean"==typeof T,t,"internal-error"),xe(d,t.name),xe(f,t.name),xe(p,t.name),xe(g,t.name),xe(m,t.name),xe(y,t.name);const b=new Ve({uid:v,auth:t,email:l,emailVerified:w,displayName:u,isAnonymous:T,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:_,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(b.providerData=E.map((t=>Object.assign({},t)))),g&&(b._redirectEventId=g),b}static async _fromIdTokenResponse(t,e,n=!1){const s=new Ue;s.updateFromServerResponse(e);const i=new Ve({uid:e.localId,auth:t,stsTokenManager:s,isAnonymous:n});return await Me(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Fe.type="NONE";const je=Fe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t,e,n){return`firebase:${t}:${e}:${n}`}class Be{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=qe(this.userKey,s.apiKey,i),this.fullPersistenceKey=qe("persistence",s.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ve._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Be(fe(je),t,n);const s=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=s[0]||fe(je);const r=qe(n,t.config.apiKey,t.name);let o=null;for(const h of e)try{const e=await h._get(r);if(e){const n=Ve._fromJSON(t,e);h!==i&&(o=n),i=h;break}}catch(c){}const a=s.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(r,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(r)}catch(c){}}))),new Be(i,t,n)):new Be(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ge(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(He(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Je(e))return"Blackberry";if(Qe(e))return"Webos";if(Ke(e))return"Safari";if((e.includes("chrome/")||ze(e))&&!e.includes("edge/"))return"Chrome";if(We(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function He(t=dt()){return/firefox\//i.test(t)}function Ke(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ze(t=dt()){return/crios\//i.test(t)}function Ge(t=dt()){return/iemobile/i.test(t)}function We(t=dt()){return/android/i.test(t)}function Je(t=dt()){return/blackberry/i.test(t)}function Qe(t=dt()){return/webos/i.test(t)}function Xe(t=dt()){return/iphone|ipad|ipod/i.test(t)}function Ye(t=dt()){return Xe(t)||We(t)||Qe(t)||Je(t)||/windows phone/i.test(t)||Ge(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ze(t,e=[]){let n;switch(t){case"Browser":n=$e(dt());break;case"Worker":n=`${$e(dt())}-${t}`;break;default:n=t}return`${n}/JsCore/9.6.0/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nn(this),this.idTokenSubscription=new nn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ne,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=fe(e)),this._initializationPromise=this.queue((async()=>{var n,s;this._deleted||(this.persistenceManager=await Be.create(this,t),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(s=this.currentUser)||void 0===s?void 0:s.uid)||null,this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(t)):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,i=null==n?void 0:n._redirectEventId,r=await this.tryRedirectSignIn(t);s&&s!==i||!(null==r?void 0:r.user)||(n=r.user)}return n?n._redirectEventId?(he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Me(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?At(t):null;return e&&he(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&he(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(fe(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new vt("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&fe(t)||this._popupRedirectResolver;he(e,this,"argument-error"),this.redirectPersistenceManager=await Be.create(this,[fe(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,s){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return he(r,this,"internal-error"),r.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,s):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ze(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function en(t){return At(t)}class nn{constructor(t){this.auth=t,this.observer=null,this.addObserver=function(t,e){const n=new St(t,e);return n.subscribe.bind(n)}((t=>this.observer=t))}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ue("not implemented")}_getIdTokenResponse(t){return ue("not implemented")}_linkToIdToken(t,e){return ue("not implemented")}_getReauthenticationResolver(t){return ue("not implemented")}}async function rn(t,e){return _e(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(t,e){return _e(t,"POST","/v1/accounts:sendOobCode",Ie(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class an extends sn{constructor(t,e,n,s=null){super("password",n),this._email=t,this._password=e,this._tenantId=s}static _fromEmailAndPassword(t,e){return new an(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new an(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return async function(t,e){return Se(t,"POST","/v1/accounts:signInWithPassword",Ie(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return Se(t,"POST","/v1/accounts:signInWithEmailLink",Ie(t,e))}(t,{email:this._email,oobCode:this._password});default:re(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return rn(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Se(t,"POST","/v1/accounts:signInWithEmailLink",Ie(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:re(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(t,e){return Se(t,"POST","/v1/accounts:signInWithIdp",Ie(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends sn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new hn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):re("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:s}=e,i=Zt(e,["providerId","signInMethod"]);if(!n||!s)return null;const r=new hn(n,s);return r.idToken=i.idToken||void 0,r.accessToken=i.accessToken||void 0,r.secret=i.secret,r.nonce=i.nonce,r.pendingToken=i.pendingToken||null,r}_getIdTokenResponse(t){return cn(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,cn(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,cn(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=It(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t){var e,n,s,i,r,o;const a=_t(bt(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,h=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(s=a.mode)&&void 0!==s?s:null);he(c&&h&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=h,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=_t(bt(t)).link,n=e?_t(bt(e)).deep_link_id:null,s=_t(bt(t)).deep_link_id;return(s?_t(bt(s)).link:null)||s||n||e||t}(t);try{return new un(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.providerId=ln.PROVIDER_ID}static credential(t,e){return an._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=un.parseLink(e);return he(n,"argument-error"),an._fromEmailAndCode(t,n.code,n.tenantId)}}ln.PROVIDER_ID="password",ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dn{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends dn{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends fn{constructor(){super("facebook.com")}static credential(t){return hn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pn.credentialFromTaggedObject(t)}static credentialFromError(t){return pn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return pn.credential(t.oauthAccessToken)}catch(e){return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com",pn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gn extends fn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return hn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return gn.credentialFromTaggedObject(t)}static credentialFromError(t){return gn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return gn.credential(e,n)}catch(s){return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com",gn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mn extends fn{constructor(){super("github.com")}static credential(t){return hn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return mn.credentialFromTaggedObject(t)}static credentialFromError(t){return mn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return mn.credential(t.oauthAccessToken)}catch(e){return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com",mn.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yn extends fn{constructor(){super("twitter.com")}static credential(t,e){return hn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return yn.credentialFromTaggedObject(t)}static credentialFromError(t){return yn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return yn.credential(e,n)}catch(s){return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com",yn.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,s=!1){const i=await Ve._fromIdTokenResponse(t,n,s),r=wn(n);return new vn({user:i,providerId:r,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const s=wn(n);return new vn({user:t,providerId:s,_tokenResponse:n,operationType:e})}}function wn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends yt{constructor(t,e,n,s){var i;super(e.code,e.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Tn.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,s){return new Tn(t,e,n,s)}}function En(t,e,n,s){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Tn._fromErrorAndOperation(t,n,e,s);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function In(t,e,n=!1){const s="signIn",i=await En(t,s,e),r=await vn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _n(t,e,n){var s;he((null===(s=n.url)||void 0===s?void 0:s.length)>0,t,"invalid-continue-uri"),he(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(he(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(he(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(t,e,n){const s=At(t),i={requestType:"PASSWORD_RESET",email:e};n&&_n(s,i,n),await async function(t,e){return on(t,e)}(s,i)}async function Sn(t,e,n){const s=en(t),i=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){return Se(t,"POST","/v1/accounts:signUp",Ie(t,e))}(s,{returnSecureToken:!0,email:e,password:n}),r=await vn._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function kn(t,e,n){return async function(t,e){return In(en(t),e)}(At(t),ln.credential(e,n))}async function An(t,e){const n=At(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&_n(n.auth,s,e);const{email:i}=await async function(t,e){return on(t,e)}(n.auth,s);i!==t.email&&await t.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Cn(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const s=At(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},r=await Oe(s,async function(t,e){return _e(t,"POST","/v1/accounts:update",e)}(s.auth,i));s.displayName=r.displayName||null,s.photoURL=r.photoUrl||null;const o=s.providerData.find((({providerId:t})=>"password"===t));o&&(o.displayName=s.displayName,o.photoURL=s.photoURL),await s._updateTokensIfNecessary(r)}function Nn(t,e){return async function(t,e,n){const{auth:s}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e);n&&(i.password=n);const r=await Oe(t,rn(s,i));await t._updateTokensIfNecessary(r,!0)}(At(t),e,null)}function Rn(t,e,n,s){return At(t).onAuthStateChanged(e,n,s)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dn{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Dn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=dt();return Ke(t)||Xe(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Ye(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),s=this.localCache[e];n!==s&&t(e,s,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(t.newValue!==s)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const s=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);mt()&&10===document.documentMode&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(s,10):s()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const s of Array.from(n))s(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}On.type="LOCAL";const Ln=On;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Dn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Pn.type="SESSION";const Mn=Pn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Un{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Un(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:s,data:i}=e.data,r=this.handlersMap[s];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const o=Array.from(r).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xn(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un.receivers=[];class Vn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,r;return new Promise(((o,a)=>{const c=xn("",20);s.port1.start();const h=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:s,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(h),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(h),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[s.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jn(){return void 0!==Fn().WorkerGlobalScope&&"function"==typeof Fn().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qn="firebaseLocalStorageDb";class Bn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function $n(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Hn(){const t=indexedDB.open(qn,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(s){n(s)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains("firebaseLocalStorage")?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(qn);return new Bn(t).toPromise()}(),e(await Hn()))}))}))}async function Kn(t,e,n){const s=$n(t,!0).put({fbase_key:e,value:n});return new Bn(s).toPromise()}function zn(t,e){const n=$n(t,!0).delete(e);return new Bn(n).toPromise()}class Gn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Hn()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Un._getInstance(jn()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Vn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Hn();return await Kn(t,"__sak","1"),await zn(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Kn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=$n(t,!1).get(e),s=await new Bn(n).toPromise();return void 0===s?null:s.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>zn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=$n(t,!1).getAll();return new Bn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:s,value:i}of t)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),e.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),e.push(s));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const s of Array.from(n))s(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Gn.type="LOCAL";const Wn=Gn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t){return new Promise(((e,n)=>{const s=document.createElement("script");var i,r;s.setAttribute("src",t),s.onload=e,s.onerror=t=>{const e=oe("internal-error");e.customData=t,n(e)},s.type="text/javascript",s.charset="UTF-8",(null!==(r=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==r?r:document).appendChild(s)}))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qn(t,e){return e?fe(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ye(3e4,6e4);class Xn extends sn{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return cn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return cn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return cn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Yn(t){return In(t.auth,new Xn(t),t.bypassAuthState)}function Zn(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Oe(t,En(s,i,e,t),n);he(r.idToken,s,"internal-error");const o=De(r.idToken);he(o,s,"internal-error");const{sub:a}=o;return he(t.uid===a,s,"user-mismatch"),vn._forOperation(t,i,r)}catch(r){throw"auth/user-not-found"===(null==r?void 0:r.code)&&re(s,"user-mismatch"),r}}(n,new Xn(t),t.bypassAuthState)}async function ts(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),async function(t,e,n=!1){const s=await Oe(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vn._forOperation(t,"link",s)}(n,new Xn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,e,n,s,i=!1){this.auth=t,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:s,tenantId:i,error:r,type:o}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Yn;case"linkViaPopup":case"linkViaRedirect":return ts;case"reauthViaPopup":case"reauthViaRedirect":return Zn;default:re(this.auth,"internal-error")}}resolve(t){le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){le(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new ye(2e3,1e4);async function ss(t,e,n){const s=en(t);!function(t,e,n){if(!(e instanceof n))throw n.name!==e.constructor.name&&re(t,"argument-error"),ae(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(t,e,dn);const i=Qn(s,n);return new is(s,"signInViaPopup",e,i).executeNotNull()}class is extends es{constructor(t,e,n,s,i){super(t,e,s,i),this.provider=n,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return he(t,this.auth,"internal-error"),t}async onExecution(){le(1===this.filter.length,"Popup operations only handle one event");const t=xn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(oe(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(oe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(oe(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,ns.get())};t()}}is.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rs=new Map;class os extends es{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=rs.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=function(t){return qe("pendingRedirect",t.config.apiKey,t.name)}(e),s=function(t){return fe(t._redirectPersistence)}(t);if(!(await s._isAvailable()))return!1;const i="true"===await s._get(n);return await s._remove(n),i}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}rs.set(this.auth._key(),t)}return this.bypassAuthState||rs.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function as(t,e,n=!1){const s=en(t),i=Qn(s,e),r=new os(s,i,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return us(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!us(t)){const s=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(oe(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(hs(t))}saveEventToCache(t){this.cachedEventUids.add(hs(t)),this.lastProcessedEventTime=Date.now()}}function hs(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function us({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ls=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ds=/^https?/;async function fs(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return _e(t,"GET","/v1/projects",e)}(t);for(const s of e)try{if(ps(s))return}catch(n){}re(t,"unauthorized-domain")}function ps(t){const e=pe(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===s?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===s}if(!ds.test(n))return!1;if(ls.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new ye(3e4,6e4);function ms(){const t=Fn().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function ys(t){return new Promise(((e,n)=>{var s,i,r;function o(){ms(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ms(),n(oe(t,"network-request-failed"))},timeout:gs.get()})}if(null===(i=null===(s=Fn().gapi)||void 0===s?void 0:s.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=Fn().gapi)||void 0===r?void 0:r.load)){const e=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Fn()[e]=()=>{gapi.load?o():n(oe(t,"network-request-failed"))},Jn(`https://apis.google.com/js/api.js?onload=${e}`)}o()}})).catch((t=>{throw vs=null,t}))}let vs=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ws=new ye(5e3,15e3),Ts={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Es=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Is(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ve(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,s={apiKey:e.apiKey,appName:t.name,v:"9.6.0"},i=Es.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${It(s).slice(1)}`}async function _s(t){const e=await function(t){return vs=vs||ys(t),vs}(t),n=Fn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:Is(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ts,dontclear:!0},(e=>new Promise((async(n,s)=>{await e.restyle({setHideOnLeave:!1});const i=oe(t,"network-request-failed"),r=Fn().setTimeout((()=>{s(i)}),ws.get());function o(){Fn().clearTimeout(r),n(e)}e.ping(o).then(o,(()=>{s(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ss{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function ks(t,e,n,s=500,i=600){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},bs),{width:s.toString(),height:i.toString(),top:r,left:o}),h=dt().toLowerCase();n&&(a=ze(h)?"_blank":n),He(h)&&(e=e||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=dt()){var e;return Xe(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(h)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new Ss(null);const l=window.open(e||"",a,u);he(l,t,"popup-blocked");try{l.focus()}catch(d){}return new Ss(l)}function As(t,e,n,s,i,r){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:"9.6.0",eventId:i};if(e instanceof dn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(r||{}))o[t]=e}if(e instanceof fn){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${function({config:t}){if(!t.emulator)return`https://${t.authDomain}/__/auth/handler`;return ve(t,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${It(a).slice(1)}`}const Cs=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mn,this._completeRedirectFn=as}async _openPopup(t,e,n,s){var i;le(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return ks(t,As(t,e,n,pe(),s),xn())}async _openRedirect(t,e,n,s){var i;return await this._originValidation(t),i=As(t,e,n,pe(),s),Fn().location.href=i,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(le(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n}async initAndGetManager(t){const e=await _s(t),n=new cs(t);return e.register("authEvent",(e=>{he(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var s;const i=null===(s=null==n?void 0:n[0])||void 0===s?void 0:s.webStorageSupport;void 0!==i&&e(!!i),re(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=fs(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ye()||Ke()||Xe()}};var Ns,Rs="@firebase/auth";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ds{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Os(t=Qt()){const e=zt(t,"auth");return e.isInitialized()?e.getImmediate():function(t,e){const n=zt(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(Tt(n.getOptions(),null!=e?e:{}))return t;re(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Cs,persistence:[Wn,Ln,Mn]})}Ns="Browser",Kt(new Ct("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),{apiKey:s,authDomain:i}=n.options;return(t=>{he(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),he(!(null==i?void 0:i.includes(":")),"argument-error",{appName:t.name});const n={apiKey:s,authDomain:i,clientPlatform:Ns,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ze(Ns)},r=new tn(t,n);return function(t,e){const n=(null==e?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(fe);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,null==e?void 0:e.popupRedirectResolver)}(r,e),r})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Kt(new Ct("auth-internal",(t=>{const e=en(t.getProvider("auth").getImmediate());return new Ds(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(Rs,"0.19.3",function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ns)),Xt(Rs,"0.19.3","esm2017");var Ls,Ps="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Ms=Ms||{},Us=Ps||self;function xs(){}function Vs(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Fs(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var js="closure_uid_"+(1e9*Math.random()>>>0),qs=0;function Bs(t,e,n){return t.call.apply(t.bind,arguments)}function $s(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Hs(t,e,n){return(Hs=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Bs:$s).apply(null,arguments)}function Ks(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function zs(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function Gs(){this.s=this.s,this.o=this.o}var Ws={};Gs.prototype.s=!1,Gs.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,js)&&t[js]||(t[js]=++qs)}(this);delete Ws[t]}},Gs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Js=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Qs=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function Xs(t){return Array.prototype.concat.apply([],arguments)}function Ys(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Zs(t){return/^[\s\xa0]*$/.test(t)}var ti,ei=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ni(t,e){return-1!=t.indexOf(e)}function si(t,e){return t<e?-1:t>e?1:0}t:{var ii=Us.navigator;if(ii){var ri=ii.userAgent;if(ri){ti=ri;break t}}ti=""}function oi(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function ai(t){const e={};for(const n in t)e[n]=t[n];return e}var ci="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hi(t,e){let n,s;for(let i=1;i<arguments.length;i++){for(n in s=arguments[i],s)t[n]=s[n];for(let e=0;e<ci.length;e++)n=ci[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ui(t){return ui[" "](t),t}ui[" "]=xs;var li,di,fi=ni(ti,"Opera"),pi=ni(ti,"Trident")||ni(ti,"MSIE"),gi=ni(ti,"Edge"),mi=gi||pi,yi=ni(ti,"Gecko")&&!(ni(ti.toLowerCase(),"webkit")&&!ni(ti,"Edge"))&&!(ni(ti,"Trident")||ni(ti,"MSIE"))&&!ni(ti,"Edge"),vi=ni(ti.toLowerCase(),"webkit")&&!ni(ti,"Edge");function wi(){var t=Us.document;return t?t.documentMode:void 0}t:{var Ti="",Ei=(di=ti,yi?/rv:([^\);]+)(\)|;)/.exec(di):gi?/Edge\/([\d\.]+)/.exec(di):pi?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(di):vi?/WebKit\/(\S+)/.exec(di):fi?/(?:Version)[ \/]?(\S+)/.exec(di):void 0);if(Ei&&(Ti=Ei?Ei[1]:""),pi){var Ii=wi();if(null!=Ii&&Ii>parseFloat(Ti)){li=String(Ii);break t}}li=Ti}var _i,bi={};function Si(){return function(t){var e=bi;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=ei(String(li)).split("."),n=ei("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=si(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||si(0==i[2].length,0==r[2].length)||si(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(Us.document&&pi){var ki=wi();_i=ki||(parseInt(li,10)||void 0)}else _i=void 0;var Ai=_i,Ci=function(){if(!Us.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Us.addEventListener("test",xs,e),Us.removeEventListener("test",xs,e)}catch(n){}return t}();function Ni(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Ri(t,e){if(Ni.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(yi){t:{try{ui(e.nodeName);var i=!0;break t}catch(r){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Di[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ri.Z.h.call(this)}}Ni.prototype.h=function(){this.defaultPrevented=!0},zs(Ri,Ni);var Di={2:"touch",3:"pen",4:"mouse"};Ri.prototype.h=function(){Ri.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Oi="closure_listenable_"+(1e6*Math.random()|0),Li=0;function Pi(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++Li,this.ca=this.fa=!1}function Mi(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Ui(t){this.src=t,this.g={},this.h=0}function xi(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=Js(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Mi(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Vi(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}Ui.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=Vi(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Pi(e,this.src,r,!!s,i)).fa=n,t.push(e)),e};var Fi="closure_lm_"+(1e6*Math.random()|0),ji={};function qi(t,e,n,s,i){if(s&&s.once)return $i(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)qi(t,e[r],n,s,i);return null}return n=Qi(n),t&&t[Oi]?t.N(e,n,Fs(s)?!!s.capture:!!s,i):Bi(t,e,n,!1,s,i)}function Bi(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Fs(i)?!!i.capture:!!i,a=Wi(t);if(a||(t[Fi]=a=new Ui(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Gi;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Ci||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(zi(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function $i(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)$i(t,e[r],n,s,i);return null}return n=Qi(n),t&&t[Oi]?t.O(e,n,Fs(s)?!!s.capture:!!s,i):Bi(t,e,n,!0,s,i)}function Hi(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Hi(t,e[r],n,s,i);else s=Fs(s)?!!s.capture:!!s,n=Qi(n),t&&t[Oi]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Vi(r=t.g[e],n,s,i))&&(Mi(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Wi(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vi(e,n,s,i)),(n=-1<t?e[t]:null)&&Ki(n))}function Ki(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Oi])xi(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(zi(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Wi(e))?(xi(n,t),0==n.h&&(n.src=null,e[Fi]=null)):Mi(t)}}}function zi(t){return t in ji?ji[t]:ji[t]="on"+t}function Gi(t,e){if(t.ca)t=!0;else{e=new Ri(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&Ki(t),t=n.call(s,e)}return t}function Wi(t){return(t=t[Fi])instanceof Ui?t:null}var Ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qi(t){return"function"==typeof t?t:(t[Ji]||(t[Ji]=function(e){return t.handleEvent(e)}),t[Ji])}function Xi(){Gs.call(this),this.i=new Ui(this),this.P=this,this.I=null}function Yi(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new Ni(e,t);else if(e instanceof Ni)e.target=e.target||t;else{var i=e;hi(e=new Ni(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Zi(o,s,!0,e)&&i}if(i=Zi(o=e.g=t,s,!0,e)&&i,i=Zi(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=Zi(o=e.g=n[r],s,!1,e)&&i}function Zi(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&xi(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}zs(Xi,Gs),Xi.prototype[Oi]=!0,Xi.prototype.removeEventListener=function(t,e,n,s){Hi(this,t,e,n,s)},Xi.prototype.M=function(){if(Xi.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Mi(n[s]);delete e.g[t],e.h--}}this.I=null},Xi.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Xi.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var tr=Us.JSON.stringify;function er(){var t=cr;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var nr,sr=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new ir),(t=>t.reset()));class ir{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function rr(t){Us.setTimeout((()=>{throw t}),0)}function or(t,e){nr||function(){var t=Us.Promise.resolve(void 0);nr=function(){t.then(hr)}}(),ar||(nr(),ar=!0),cr.add(t,e)}var ar=!1,cr=new class{constructor(){this.h=this.g=null}add(t,e){const n=sr.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function hr(){for(var t;t=er();){try{t.h.call(t.g)}catch(n){rr(n)}var e=sr;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ar=!1}function ur(t,e){Xi.call(this),this.h=t||1,this.g=e||Us,this.j=Hs(this.kb,this),this.l=Date.now()}function lr(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function dr(t,e,n){if("function"==typeof t)n&&(t=Hs(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Hs(t.handleEvent,t)}return 2147483647<Number(e)?-1:Us.setTimeout(t,e||0)}function fr(t){t.g=dr((()=>{t.g=null,t.i&&(t.i=!1,fr(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}zs(ur,Xi),(Ls=ur.prototype).da=!1,Ls.S=null,Ls.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Yi(this,"tick"),this.da&&(lr(this),this.start()))}},Ls.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Ls.M=function(){ur.Z.M.call(this),lr(this),delete this.g};class pr extends Gs{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:fr(this)}M(){super.M(),this.g&&(Us.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gr(t){Gs.call(this),this.h=t,this.g={}}zs(gr,Gs);var mr=[];function yr(t,e,n,s){Array.isArray(n)||(n&&(mr[0]=n.toString()),n=mr);for(var i=0;i<n.length;i++){var r=qi(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function vr(t){oi(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ki(t)}),t),t.g={}}function wr(){this.g=!0}function Tr(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return tr(n)}catch(a){return e}}(t,n)+(s?" "+s:"")}))}gr.prototype.M=function(){gr.Z.M.call(this),vr(this)},gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},wr.prototype.Aa=function(){this.g=!1},wr.prototype.info=function(){};var Er={},Ir=null;function _r(){return Ir=Ir||new Xi}function br(t){Ni.call(this,Er.Ma,t)}function Sr(t){const e=_r();Yi(e,new br(e,t))}function kr(t,e){Ni.call(this,Er.STAT_EVENT,t),this.stat=e}function Ar(t){const e=_r();Yi(e,new kr(e,t))}function Cr(t,e){Ni.call(this,Er.Na,t),this.size=e}function Nr(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Us.setTimeout((function(){t()}),e)}Er.Ma="serverreachability",zs(br,Ni),Er.STAT_EVENT="statevent",zs(kr,Ni),Er.Na="timingevent",zs(Cr,Ni);var Rr={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Dr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Or(){}function Lr(t){return t.h||(t.h=t.i())}function Pr(){}Or.prototype.h=null;var Mr,Ur={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function xr(){Ni.call(this,"d")}function Vr(){Ni.call(this,"c")}function Fr(){}function jr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new gr(this),this.P=Br,t=mi?125:void 0,this.W=new ur(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new qr}function qr(){this.i=null,this.g="",this.h=!1}zs(xr,Ni),zs(Vr,Ni),zs(Fr,Or),Fr.prototype.g=function(){return new XMLHttpRequest},Fr.prototype.i=function(){return{}},Mr=new Fr;var Br=45e3,$r={},Hr={};function Kr(t,e,n){t.K=1,t.v=go(co(e)),t.s=n,t.U=!0,zr(t,null)}function zr(t,e){t.F=Date.now(),Qr(t),t.A=co(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Co(n.h,"t",s),t.C=0,n=t.l.H,t.h=new qr,t.g=Ca(t.l,n?e:null,!t.s),0<t.O&&(t.L=new pr(Hs(t.Ia,t,t.g),t.O)),yr(t.V,t.g,"readystatechange",t.gb),e=t.H?ai(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Sr(1),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Gr(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Wr(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=Jr(t,n),s==Hr){4==e&&(t.o=4,Ar(14),i=!1),Tr(t.j,t.m,null,"[Incomplete Response]");break}if(s==$r){t.o=4,Ar(15),Tr(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Tr(t.j,t.m,s,null),eo(t,s)}Gr(t)&&s!=Hr&&s!=$r&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Ar(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ta(e),e.L=!0,Ar(11))):(Tr(t.j,t.m,n,"[Invalid Chunked Response]"),to(t),Zr(t))}function Jr(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Hr:(n=Number(e.substring(n,s)),isNaN(n)?$r:(s+=1)+n>e.length?Hr:(e=e.substr(s,n),t.C=s+n,e))}function Qr(t){t.Y=Date.now()+t.P,Xr(t,t.P)}function Xr(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Nr(Hs(t.eb,t),e)}function Yr(t){t.B&&(Us.clearTimeout(t.B),t.B=null)}function Zr(t){0==t.l.G||t.I||_a(t.l,t)}function to(t){Yr(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,lr(t.W),vr(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function eo(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Po(n.i,t)))if(n.I=t.N,!t.J&&Po(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(h){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ia(n),la(n)}wa(n),Ar(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Nr(Hs(n.ab,n),6e3));if(1>=Lo(n.i)&&n.ka){try{n.ka()}catch(h){}n.ka=void 0}}else Sa(n,11)}else if((t.J||n.g==t)&&Ia(n),!Zs(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let h=i[e];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const e=h[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=h[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=h[5];null!=u&&"number"==typeof u&&0<u&&(s=1.5*u,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(ni(t,"spdy")||ni(t,"quic")||ni(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Mo(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,po(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((s=n).oa=Aa(s,s.H?s.la:null,s.W),o.J){Uo(s.i,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(Yr(a),Qr(a)),s.g=o}else va(s);0<n.l.length&&pa(n)}else"stop"!=h[0]&&"close"!=h[0]||Sa(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Sa(n,7):ua(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}Sr(4)}catch(h){}}function no(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Vs(t)||"string"==typeof t)Qs(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(Vs(t)||"string"==typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(Vs(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function so(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof so)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function io(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];ro(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)ro(i,s=t.g[e])||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function ro(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(Ls=jr.prototype).setTimeout=function(t){this.P=t},Ls.gb=function(t){t=t.target;const e=this.L;e&&3==ra(t)?e.l():this.Ia(t)},Ls.Ia=function(t){try{if(t==this.g)t:{const u=ra(this.g);var e=this.g.Da();const l=this.g.ba();if(!(3>u)&&(3!=u||mi||this.g&&(this.h.h||this.g.ga()||oa(this.g)))){this.I||4!=u||7==e||Sr(8==e||0>=l?3:2),Yr(this);var n=this.g.ba();this.N=n;e:if(Gr(this)){var s=oa(this.g);t="";var i=s.length,r=4==ra(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){to(this),Zr(this);var o="";break e}this.h.i=new Us.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zs(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,Ar(12),to(this),Zr(this);break t}Tr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,eo(this,n)}this.U?(Wr(this,u,o),mi&&this.i&&3==u&&(yr(this.V,this.W,"tick",this.fb),this.W.start())):(Tr(this.j,this.m,o,null),eo(this,o)),4==u&&to(this),this.i&&!this.I&&(4==u?_a(this.l,this):(this.i=!1,Qr(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ar(12)):(this.o=0,Ar(13)),to(this),Zr(this)}}}catch(u){}},Ls.fb=function(){if(this.g){var t=ra(this.g),e=this.g.ga();this.C<e.length&&(Yr(this),Wr(this,t,e),this.i&&4!=t&&Qr(this))}},Ls.cancel=function(){this.I=!0,to(this)},Ls.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Sr(3),Ar(17)),to(this),this.o=2,Zr(this)):Xr(this,this.Y-t)},(Ls=so.prototype).R=function(){io(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},Ls.T=function(){return io(this),this.g.concat()},Ls.get=function(t,e){return ro(this.h,t)?this.h[t]:e},Ls.set=function(t,e){ro(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},Ls.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var oo=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ao(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ao){this.g=void 0!==e?e:t.g,ho(this,t.j),this.s=t.s,uo(this,t.i),lo(this,t.m),this.l=t.l,e=t.h;var n=new bo;n.i=e.i,e.g&&(n.g=new so(e.g),n.h=e.h),fo(this,n),this.o=t.o}else t&&(n=String(t).match(oo))?(this.g=!!e,ho(this,n[1]||"",!0),this.s=mo(n[2]||""),uo(this,n[3]||"",!0),lo(this,n[4]),this.l=mo(n[5]||"",!0),fo(this,n[6]||"",!0),this.o=mo(n[7]||"")):(this.g=!!e,this.h=new bo(null,this.g))}function co(t){return new ao(t)}function ho(t,e,n){t.j=n?mo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function uo(t,e,n){t.i=n?mo(e,!0):e}function lo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function fo(t,e,n){e instanceof bo?(t.h=e,function(t,e){e&&!t.j&&(So(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ko(this,e),Co(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=yo(e,Io)),t.h=new bo(e,t.g))}function po(t,e,n){t.h.set(e,n)}function go(t){return po(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function mo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function yo(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,vo),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function vo(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ao.prototype.toString=function(){var t=[],e=this.j;e&&t.push(yo(e,wo,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(yo(e,wo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(yo(n,"/"==n.charAt(0)?Eo:To,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",yo(n,_o)),t.join("")};var wo=/[#\/\?@]/g,To=/[#\?:]/g,Eo=/[#\?]/g,Io=/[#\?@]/g,_o=/#/g;function bo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function So(t){t.g||(t.g=new so,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ko(t,e){So(t),e=No(t,e),ro(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,ro((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&io(t)))}function Ao(t,e){return So(t),e=No(t,e),ro(t.g.h,e)}function Co(t,e,n){ko(t,e),0<n.length&&(t.i=null,t.g.set(No(t,e),Ys(n)),t.h+=n.length)}function No(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Ls=bo.prototype).add=function(t,e){So(this),this.i=null,t=No(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Ls.forEach=function(t,e){So(this),this.g.forEach((function(n,s){Qs(n,(function(n){t.call(e,n,s,this)}),this)}),this)},Ls.T=function(){So(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},Ls.R=function(t){So(this);var e=[];if("string"==typeof t)Ao(this,t)&&(e=Xs(e,this.g.get(No(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Xs(e,t[n])}return e},Ls.set=function(t,e){return So(this),this.i=null,Ao(this,t=No(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Ls.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},Ls.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function Ro(t){this.l=t||Do,Us.PerformanceNavigationTiming?t=0<(t=Us.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Us.g&&Us.g.Ea&&Us.g.Ea()&&Us.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Do=10;function Oo(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Lo(t){return t.h?1:t.g?t.g.size:0}function Po(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Mo(t,e){t.g?t.g.add(e):t.h=e}function Uo(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function xo(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Ys(t.i)}function Vo(){}function Fo(){this.g=new Vo}function jo(t,e,n){const s=n||"";try{no(t,(function(t,n){let i=t;Fs(t)&&(i=tr(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function qo(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(r){}}function Bo(t){this.l=t.$b||null,this.j=t.ib||!1}function $o(t,e){Xi.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ho,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ro.prototype.cancel=function(){if(this.i=xo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Vo.prototype.stringify=function(t){return Us.JSON.stringify(t,void 0)},Vo.prototype.parse=function(t){return Us.JSON.parse(t,void 0)},zs(Bo,Or),Bo.prototype.g=function(){return new $o(this.l,this.j)},Bo.prototype.i=function(t){return function(){return t}}({}),zs($o,Xi);var Ho=0;function Ko(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function zo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Go(t)}function Go(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Ls=$o.prototype).open=function(t,e){if(this.readyState!=Ho)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Go(this)},Ls.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Us).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},Ls.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,zo(this)),this.readyState=Ho},Ls.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Go(this)),this.g&&(this.readyState=3,Go(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Us.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ko(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},Ls.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zo(this):Go(this),3==this.readyState&&Ko(this)}},Ls.Ua=function(t){this.g&&(this.response=this.responseText=t,zo(this))},Ls.Ta=function(t){this.g&&(this.response=t,zo(this))},Ls.ha=function(){this.g&&zo(this)},Ls.setRequestHeader=function(t,e){this.v.append(t,e)},Ls.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Ls.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty($o.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Wo=Us.JSON.parse;function Jo(t){Xi.call(this),this.headers=new so,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Qo,this.K=this.L=!1}zs(Jo,Xi);var Qo="",Xo=/^https?$/i,Yo=["POST","PUT"];function Zo(t){return"content-type"==t.toLowerCase()}function ta(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ea(t),sa(t)}function ea(t){t.D||(t.D=!0,Yi(t,"complete"),Yi(t,"error"))}function na(t){if(t.h&&void 0!==Ms&&(!t.C[1]||4!=ra(t)||2!=t.ba()))if(t.v&&4==ra(t))dr(t.Fa,0,t);else if(Yi(t,"readystatechange"),4==ra(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===c){var i=String(t.H).match(oo)[1]||null;if(!i&&Us.self&&Us.self.location){var r=Us.self.location.protocol;i=r.substr(0,r.length-1)}s=!Xo.test(i?i.toLowerCase():"")}n=s}if(n)Yi(t,"complete"),Yi(t,"success");else{t.m=6;try{var o=2<ra(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",ea(t)}}finally{sa(t)}}}function sa(t,e){if(t.g){ia(t);const s=t.g,i=t.C[0]?xs:null;t.g=null,t.C=null,e||Yi(t,"ready");try{s.onreadystatechange=i}catch(n){}}}function ia(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Us.clearTimeout(t.A),t.A=null)}function ra(t){return t.g?t.g.readyState:0}function oa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Qo:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function aa(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=function(t){let e="";return oi(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):po(t,e,n))}function ca(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ha(t){this.za=0,this.l=[],this.h=new wr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ca("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ca("baseRetryDelayMs",5e3,t),this.$a=ca("retryDelaySeedMs",1e4,t),this.Ya=ca("forwardChannelMaxRetries",2,t),this.ra=ca("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Ro(t&&t.concurrentRequestLimit),this.Ca=new Fo,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ua(t){if(da(t),3==t.G){var e=t.V++,n=co(t.F);po(n,"SID",t.J),po(n,"RID",e),po(n,"TYPE","terminate"),ma(t,n),(e=new jr(t,t.h,e,void 0)).K=2,e.v=go(co(n)),n=!1,Us.navigator&&Us.navigator.sendBeacon&&(n=Us.navigator.sendBeacon(e.v.toString(),"")),!n&&Us.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ca(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Qr(e)}ka(t)}function la(t){t.g&&(Ta(t),t.g.cancel(),t.g=null)}function da(t){la(t),t.u&&(Us.clearTimeout(t.u),t.u=null),Ia(t),t.i.cancel(),t.m&&("number"==typeof t.m&&Us.clearTimeout(t.m),t.m=null)}function fa(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&pa(t)}function pa(t){Oo(t.i)||t.m||(t.m=!0,or(t.Ha,t),t.C=0)}function ga(t,e){var n;n=e?e.m:t.V++;const s=co(t.F);po(s,"SID",t.J),po(s,"RID",n),po(s,"AID",t.U),ma(t,s),t.o&&t.s&&aa(s,t.o,t.s),n=new jr(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ya(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Mo(t.i,n),Kr(n,s,e)}function ma(t,e){t.j&&no({},(function(t,n){po(e,n,t)}))}function ya(t,e,n){n=Math.min(t.l.length,n);var s=t.j?Hs(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),o=!1;else try{jo(c,t,"req"+n+"_")}catch(r){s&&s(c)}}if(o){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function va(t){t.g||t.u||(t.Y=1,or(t.Ga,t),t.A=0)}function wa(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Nr(Hs(t.Ga,t),ba(t,t.A)),t.A++,!0)}function Ta(t){null!=t.B&&(Us.clearTimeout(t.B),t.B=null)}function Ea(t){t.g=new jr(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=co(t.oa);po(e,"RID","rpc"),po(e,"SID",t.J),po(e,"CI",t.N?"0":"1"),po(e,"AID",t.U),ma(t,e),po(e,"TYPE","xmlhttp"),t.o&&t.s&&aa(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=go(co(e)),n.s=null,n.U=!0,zr(n,t)}function Ia(t){null!=t.v&&(Us.clearTimeout(t.v),t.v=null)}function _a(t,e){var n=null;if(t.g==e){Ia(t),Ta(t),t.g=null;var s=2}else{if(!Po(t.i,e))return;n=e.D,Uo(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;Yi(s=_r(),new Cr(s,n,e,i)),pa(t)}else va(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==s&&function(t,e){return!(Lo(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Nr(Hs(t.Ha,t,e),ba(t,t.C)),t.C++,0)))}(t,e)||2==s&&wa(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Sa(t,5);break;case 4:Sa(t,10);break;case 3:Sa(t,6);break;default:Sa(t,2)}}function ba(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Sa(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=Hs(t.jb,t);n||(n=new ao("//www.google.com/images/cleardot.gif"),Us.location&&"http"==Us.location.protocol||ho(n,"https"),go(n)),function(t,e){const n=new wr;if(Us.Image){const s=new Image;s.onload=Ks(qo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ks(qo,n,s,"TestLoadImage: error",!1,e),s.onabort=Ks(qo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ks(qo,n,s,"TestLoadImage: timeout",!1,e),Us.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Ar(2);t.G=0,t.j&&t.j.va(e),ka(t),da(t)}function ka(t){t.G=0,t.I=-1,t.j&&(0==xo(t.i).length&&0==t.l.length||(t.i.i.length=0,Ys(t.l),t.l.length=0),t.j.ua())}function Aa(t,e,n){let s=function(t){return t instanceof ao?co(t):new ao(t,void 0)}(n);if(""!=s.i)e&&uo(s,e+"."+s.i),lo(s,s.m);else{const t=Us.location;s=function(t,e,n,s){var i=new ao(null,void 0);return t&&ho(i,t),e&&uo(i,e),n&&lo(i,n),s&&(i.l=s),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&oi(t.aa,(function(t,e){po(s,e,t)})),e=t.D,n=t.sa,e&&n&&po(s,e,n),po(s,"VER",t.ma),ma(t,s),s}function Ca(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Jo(new Bo({ib:!0})):new Jo(t.qa)).L=t.H,e}function Na(){}function Ra(){if(pi&&!(10<=Number(Ai)))throw Error("Environmental error: no available transport.")}function Da(t,e){Xi.call(this),this.g=new ha(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Zs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zs(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Pa(this)}function Oa(t){xr.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function La(){Vr.call(this),this.status=1}function Pa(t){this.g=t}(Ls=Jo.prototype).ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Mr.g(),this.C=this.u?Lr(this.u):Lr(Mr),this.g.onreadystatechange=Hs(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){return void ta(this,r)}t=n||"";const i=new so(this.headers);s&&no(s,(function(t,e){i.set(e,t)})),s=function(t){t:{var e=Zo;const n=t.length,s="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=Us.FormData&&t instanceof Us.FormData,!(0<=Js(Yo,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ia(this),0<this.B&&((this.K=function(t){return pi&&Si()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Hs(this.pa,this)):this.A=dr(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){ta(this,r)}},Ls.pa=function(){void 0!==Ms&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Yi(this,"timeout"),this.abort(8))},Ls.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Yi(this,"complete"),Yi(this,"abort"),sa(this))},Ls.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sa(this,!0)),Jo.Z.M.call(this)},Ls.Fa=function(){this.s||(this.F||this.v||this.l?na(this):this.cb())},Ls.cb=function(){na(this)},Ls.ba=function(){try{return 2<ra(this)?this.g.status:-1}catch(di){return-1}},Ls.ga=function(){try{return this.g?this.g.responseText:""}catch(di){return""}},Ls.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Wo(e)}},Ls.Da=function(){return this.m},Ls.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Ls=ha.prototype).ma=8,Ls.G=1,Ls.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},Ls.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new jr(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=ai(r),hi(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ya(this,i,e),po(n=co(this.F),"RID",t),po(n,"CVER",22),this.D&&po(n,"X-HTTP-Session-Id",this.D),ma(this,n),this.o&&r&&aa(n,this.o,r),Mo(this.i,i),this.Ra&&po(n,"TYPE","init"),this.ja?(po(n,"$req",e),po(n,"SID","null"),i.$=!0,Kr(i,n,null)):Kr(i,n,e),this.G=2}}else 3==this.G&&(t?ga(this,t):0==this.l.length||Oo(this.i)||ga(this))},Ls.Ga=function(){if(this.u=null,Ea(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Nr(Hs(this.bb,this),t)}},Ls.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ar(10),la(this),Ea(this))},Ls.ab=function(){null!=this.v&&(this.v=null,la(this),wa(this),Ar(19))},Ls.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ar(2)):(this.h.info("Failed to ping google.com"),Ar(1))},(Ls=Na.prototype).xa=function(){},Ls.wa=function(){},Ls.va=function(){},Ls.ua=function(){},Ls.Oa=function(){},Ra.prototype.g=function(t,e){return new Da(t,e)},zs(Da,Xi),Da.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),or(Hs(t.hb,t,e))),Ar(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Aa(t,null,t.W),pa(t)},Da.prototype.close=function(){ua(this.g)},Da.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,fa(this.g,e)}else this.v?((e={}).__data__=tr(t),fa(this.g,e)):fa(this.g,t)},Da.prototype.M=function(){this.g.j=null,delete this.j,ua(this.g),delete this.g,Da.Z.M.call(this)},zs(Oa,xr),zs(La,Vr),zs(Pa,Na),Pa.prototype.xa=function(){Yi(this.g,"a")},Pa.prototype.wa=function(t){Yi(this.g,new Oa(t))},Pa.prototype.va=function(t){Yi(this.g,new La(t))},Pa.prototype.ua=function(){Yi(this.g,"b")},Ra.prototype.createWebChannel=Ra.prototype.g,Da.prototype.send=Da.prototype.u,Da.prototype.open=Da.prototype.m,Da.prototype.close=Da.prototype.close,Rr.NO_ERROR=0,Rr.TIMEOUT=8,Rr.HTTP_ERROR=6,Dr.COMPLETE="complete",Pr.EventType=Ur,Ur.OPEN="a",Ur.CLOSE="b",Ur.ERROR="c",Ur.MESSAGE="d",Xi.prototype.listen=Xi.prototype.N,Jo.prototype.listenOnce=Jo.prototype.O,Jo.prototype.getLastError=Jo.prototype.La,Jo.prototype.getLastErrorCode=Jo.prototype.Da,Jo.prototype.getStatus=Jo.prototype.ba,Jo.prototype.getResponseJson=Jo.prototype.Qa,Jo.prototype.getResponseText=Jo.prototype.ga,Jo.prototype.send=Jo.prototype.ea;var Ma=Rr,Ua=Dr,xa=Er,Va=10,Fa=11,ja=Bo,qa=Pr,Ba=Jo;const $a="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ha.UNAUTHENTICATED=new Ha(null),Ha.GOOGLE_CREDENTIALS=new Ha("google-credentials-uid"),Ha.FIRST_PARTY=new Ha("first-party-uid"),Ha.MOCK_USER=new Ha("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ka="9.6.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new xt("@firebase/firestore");function Ga(){return za.logLevel}function Wa(t,...e){if(za.logLevel<=Dt.DEBUG){const n=e.map(Xa);za.debug(`Firestore (${Ka}): ${t}`,...n)}}function Ja(t,...e){if(za.logLevel<=Dt.ERROR){const n=e.map(Xa);za.error(`Firestore (${Ka}): ${t}`,...n)}}function Qa(t,...e){if(za.logLevel<=Dt.WARN){const n=e.map(Xa);za.warn(`Firestore (${Ka}): ${t}`,...n)}}function Xa(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(n){return t}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t="Unexpected state"){const e=`FIRESTORE (${Ka}) INTERNAL ASSERTION FAILED: `+t;throw Ja(e),new Error(e)}function Za(t,e){t||Ya()}function tc(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class nc extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class rc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ha.UNAUTHENTICATED)))}shutdown(){}}class oc{constructor(t){this.t=t,this.currentUser=Ha.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new sc;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new sc,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Wa("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Wa("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new sc)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Wa("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Za("string"==typeof e.accessToken),new ic(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Za(null===t||"string"==typeof t),new Ha(t)}}class ac{constructor(t,e,n){this.type="FirstParty",this.user=Ha.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class cc{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ac(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Ha.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class hc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uc{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable((()=>{return null!=(t=n).error&&Wa("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`),e(t.token);var t}))};const n=t=>{Wa("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>n(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):Wa("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Za("string"==typeof t.token),new hc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lc.I=-1;class fc{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=dc(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function pc(t,e){return t<e?-1:t>e?1:0}function gc(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new nc(ec.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new nc(ec.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new nc(ec.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new nc(ec.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return mc.fromMillis(Date.now())}static fromDate(t){return mc.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new mc(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?pc(this.nanoseconds,t.nanoseconds):pc(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t){this.timestamp=t}static fromTimestamp(t){return new yc(t)}static min(){return new yc(new mc(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wc(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Tc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ya(),void 0===n?n=t.length-e:n>t.length-e&&Ya(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ec.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ec?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ic extends Ec{construct(t,e,n){return new Ic(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new nc(ec.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ic(e)}static emptyPath(){return new Ic([])}}const _c=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bc extends Ec{construct(t,e,n){return new bc(t,e,n)}static isValidIdentifier(t){return _c.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bc.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new bc(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new nc(ec.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new nc(ec.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new nc(ec.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new nc(ec.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new bc(e)}static emptyPath(){return new bc([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t){this.fields=t,t.sort(bc.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return gc(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new kc(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new kc(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return pc(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}kc.EMPTY_BYTE_STRING=new kc("");const Ac=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cc(t){if(Za(!!t),"string"==typeof t){let e=0;const n=Ac.exec(t);if(Za(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Nc(t.seconds),nanos:Nc(t.nanos)}}function Nc(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Rc(t){return"string"==typeof t?kc.fromBase64String(t):kc.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Oc(t){const e=t.mapValue.fields.__previous_value__;return Dc(e)?Oc(e):e}function Lc(t){const e=Cc(t.mapValue.fields.__local_write_time__.timestampValue);return new mc(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t){return null==t}function Mc(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uc{constructor(t){this.path=t}static fromPath(t){return new Uc(Ic.fromString(t))}static fromName(t){return new Uc(Ic.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===Ic.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ic.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Uc(new Ic(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dc(t)?4:10:Ya()}function Vc(t,e){const n=xc(t);if(n!==xc(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Lc(t).isEqual(Lc(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Cc(t.timestampValue),s=Cc(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return s=e,Rc(t.bytesValue).isEqual(Rc(s.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Nc(t.geoPointValue.latitude)===Nc(e.geoPointValue.latitude)&&Nc(t.geoPointValue.longitude)===Nc(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Nc(t.integerValue)===Nc(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Nc(t.doubleValue),s=Nc(e.doubleValue);return n===s?Mc(n)===Mc(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return gc(t.arrayValue.values||[],e.arrayValue.values||[],Vc);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(vc(n)!==vc(s))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===s[i]||!Vc(n[i],s[i])))return!1;return!0}(t,e);default:return Ya()}var s}function Fc(t,e){return void 0!==(t.values||[]).find((t=>Vc(t,e)))}function jc(t,e){const n=xc(t),s=xc(e);if(n!==s)return pc(n,s);switch(n){case 0:return 0;case 1:return pc(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Nc(t.integerValue||t.doubleValue),s=Nc(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return qc(t.timestampValue,e.timestampValue);case 4:return qc(Lc(t),Lc(e));case 5:return pc(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Rc(t),s=Rc(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let i=0;i<n.length&&i<s.length;i++){const t=pc(n[i],s[i]);if(0!==t)return t}return pc(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=pc(Nc(t.latitude),Nc(e.latitude));return 0!==n?n:pc(Nc(t.longitude),Nc(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let i=0;i<n.length&&i<s.length;++i){const t=jc(n[i],s[i]);if(t)return t}return pc(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let o=0;o<s.length&&o<r.length;++o){const t=pc(s[o],r[o]);if(0!==t)return t;const e=jc(n[s[o]],i[r[o]]);if(0!==e)return e}return pc(s.length,r.length)}(t.mapValue,e.mapValue);default:throw Ya()}}function qc(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return pc(t,e);const n=Cc(t),s=Cc(e),i=pc(n.seconds,s.seconds);return 0!==i?i:pc(n.nanos,s.nanos)}function Bc(t){return $c(t)}function $c(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Cc(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Rc(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Uc.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=$c(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${$c(t.fields[i])}`;return n+"}"}(t.mapValue):Ya();var e,n}function Hc(t){return!!t&&"integerValue"in t}function Kc(t){return!!t&&"arrayValue"in t}function zc(t){return!!t&&"nullValue"in t}function Gc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wc(t){return!!t&&"mapValue"in t}function Jc(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wc(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Jc(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jc(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t){this.value=t}static empty(){return new Qc({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Wc(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Jc(e)}setAll(t){let e=bc.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Jc(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Wc(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Vc(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Wc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){wc(e,((e,n)=>t[e]=n));for(const s of n)delete t[s]}clone(){return new Qc(Jc(this.value))}}function Xc(t){const e=[];return wc(t.fields,((t,n)=>{const s=new bc([t]);if(Wc(n)){const t=Xc(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Sc(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Yc{constructor(t,e,n,s,i){this.key=t,this.documentType=e,this.version=n,this.data=s,this.documentState=i}static newInvalidDocument(t){return new Yc(t,0,yc.min(),Qc.empty(),0)}static newFoundDocument(t,e,n){return new Yc(t,1,e,n,0)}static newNoDocument(t,e){return new Yc(t,2,e,Qc.empty(),0)}static newUnknownDocument(t,e){return new Yc(t,3,e,Qc.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Qc.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Qc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Yc&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new Yc(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.R=null}}function th(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Zc(t,e,n,s,i,r,o)}function eh(t){const e=tc(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>function(t){return t.field.canonicalString()+t.op.toString()+Bc(t.value)}(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Pc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=ph(e.startAt)),e.endAt&&(t+="|ub:",t+=ph(e.endAt)),e.R=t}return e.R}function nh(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!mh(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Vc(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vh(t.startAt,e.startAt)&&vh(t.endAt,e.endAt)}function sh(t){return Uc.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class ih extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new rh(t,e,n):"array-contains"===e?new hh(t,n):"in"===e?new uh(t,n):"not-in"===e?new lh(t,n):"array-contains-any"===e?new dh(t,n):new ih(t,e,n)}static P(t,e,n){return"in"===e?new oh(t,n):new ah(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(jc(e,this.value)):null!==e&&xc(this.value)===xc(e)&&this.v(jc(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ya()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class rh extends ih{constructor(t,e,n){super(t,e,n),this.key=Uc.fromName(n.referenceValue)}matches(t){const e=Uc.comparator(t.key,this.key);return this.v(e)}}class oh extends ih{constructor(t,e){super(t,"in",e),this.keys=ch("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ah extends ih{constructor(t,e){super(t,"not-in",e),this.keys=ch("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ch(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Uc.fromName(t.referenceValue)))}class hh extends ih{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Kc(e)&&Fc(e.arrayValue,this.value)}}class uh extends ih{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Fc(this.value.arrayValue,e)}}class lh extends ih{constructor(t,e){super(t,"not-in",e)}matches(t){if(Fc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Fc(this.value.arrayValue,e)}}class dh extends ih{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Kc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Fc(this.value.arrayValue,t)))}}class fh{constructor(t,e){this.position=t,this.before=e}}function ph(t){return`${t.before?"b":"a"}:${t.position.map((t=>Bc(t))).join(",")}`}class gh{constructor(t,e="asc"){this.field=t,this.dir=e}}function mh(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function yh(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?Uc.comparator(Uc.fromName(o.referenceValue),n.key):jc(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return t.before?s<=0:s<0}function vh(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vc(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Th(t){return new wh(t)}function Eh(t){return!Pc(t.limit)&&"F"===t.limitType}function Ih(t){return!Pc(t.limit)&&"L"===t.limitType}function _h(t){const e=tc(t);if(null===e.S){e.S=[];const t=function(t){for(const e of t.filters)if(e.V())return e.field;return null}(e),n=function(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new gh(t)),e.S.push(new gh(bc.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new gh(bc.keyField(),t))}}}return e.S}function bh(t){const e=tc(t);if(!e.D)if("F"===e.limitType)e.D=th(e.path,e.collectionGroup,_h(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of _h(e)){const e="desc"===i.dir?"asc":"desc";t.push(new gh(i.field,e))}const n=e.endAt?new fh(e.endAt.position,!e.endAt.before):null,s=e.startAt?new fh(e.startAt.position,!e.startAt.before):null;e.D=th(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.D}function Sh(t,e){return nh(bh(t),bh(e))&&t.limitType===e.limitType}function kh(t){return`${eh(bh(t))}|lt:${t.limitType}`}function Ah(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${Bc(e.value)}`;var e})).join(", ")}]`),Pc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: "+ph(t.startAt)),t.endAt&&(e+=", endAt: "+ph(t.endAt)),`Target(${e})`}(bh(t))}; limitType=${t.limitType})`}function Ch(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Uc.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(s=e,!((n=t).startAt&&!yh(n.startAt,_h(n),s)||n.endAt&&yh(n.endAt,_h(n),s)));var n,s}function Nh(t){return(e,n)=>{let s=!1;for(const i of _h(t)){const t=Rh(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Rh(t,e,n){const s=t.field.isKeyField()?Uc.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?jc(s,i):Ya()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Ya()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mc(e)?"-0":e}}function Oh(t){return{integerValue:""+t}}function Lh(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Mc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?Oh(e):Dh(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this._=void 0}}function Mh(t,e,n){return t instanceof Vh?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Fh?jh(t,e):t instanceof qh?Bh(t,e):function(t,e){const n=xh(t,e),s=Hh(n)+Hh(t.N);return Hc(n)&&Hc(t.N)?Oh(s):Dh(t.k,s)}(t,e)}function Uh(t,e,n){return t instanceof Fh?jh(t,e):t instanceof qh?Bh(t,e):n}function xh(t,e){return t instanceof $h?Hc(s=e)||(n=s)&&"doubleValue"in n?e:{integerValue:0}:null;var n,s}class Vh extends Ph{}class Fh extends Ph{constructor(t){super(),this.elements=t}}function jh(t,e){const n=Kh(e);for(const s of t.elements)n.some((t=>Vc(t,s)))||n.push(s);return{arrayValue:{values:n}}}class qh extends Ph{constructor(t){super(),this.elements=t}}function Bh(t,e){let n=Kh(e);for(const s of t.elements)n=n.filter((t=>!Vc(t,s)));return{arrayValue:{values:n}}}class $h extends Ph{constructor(t,e){super(),this.k=t,this.N=e}}function Hh(t){return Nc(t.integerValue||t.doubleValue)}function Kh(t){return Kc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}class zh{constructor(t,e){this.version=t,this.transformResults=e}}class Gh{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Gh}static exists(t){return new Gh(void 0,t)}static updateTime(t){return new Gh(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Wh(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Jh{}function Qh(t,e,n){var s;t instanceof eu?function(t,e,n){const s=t.value.clone(),i=iu(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof nu?function(t,e,n){if(!Wh(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=iu(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(su(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(s=n,e.convertToNoDocument(s.version).setHasCommittedMutations())}function Xh(t,e,n){var s;t instanceof eu?function(t,e,n){if(!Wh(t.precondition,e))return;const s=t.value.clone(),i=ru(t.fieldTransforms,n,e);s.setAll(i),e.convertToFoundDocument(tu(e),s).setHasLocalMutations()}(t,e,n):t instanceof nu?function(t,e,n){if(!Wh(t.precondition,e))return;const s=ru(t.fieldTransforms,n,e),i=e.data;i.setAll(su(t)),i.setAll(s),e.convertToFoundDocument(tu(e),i).setHasLocalMutations()}(t,e,n):(s=e,Wh(t.precondition,s)&&s.convertToNoDocument(yc.min()))}function Yh(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=xh(s.transform,t||null);null!=i&&(null==n&&(n=Qc.empty()),n.set(s.field,i))}return n||null}function Zh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,s=e.fieldTransforms,!!(void 0===n&&void 0===s||n&&s&&gc(n,s,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,s=e.transform,n instanceof Fh&&s instanceof Fh||n instanceof qh&&s instanceof qh?gc(n.elements,s.elements,Vc):n instanceof $h&&s instanceof $h?Vc(n.N,s.N):n instanceof Vh&&s instanceof Vh);var n,s}(t,e))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask)));var n,s}function tu(t){return t.isFoundDocument()?t.version:yc.min()}class eu extends Jh{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class nu extends Jh{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function su(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function iu(t,e,n){const s=new Map;Za(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Uh(o,a,n[i]))}return s}function ru(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,Mh(t,r,e))}return s}class ou extends Jh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class au extends Jh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hu,uu;function lu(t){if(void 0===t)return Ja("GRPC error has no .code"),ec.UNKNOWN;switch(t){case hu.OK:return ec.OK;case hu.CANCELLED:return ec.CANCELLED;case hu.UNKNOWN:return ec.UNKNOWN;case hu.DEADLINE_EXCEEDED:return ec.DEADLINE_EXCEEDED;case hu.RESOURCE_EXHAUSTED:return ec.RESOURCE_EXHAUSTED;case hu.INTERNAL:return ec.INTERNAL;case hu.UNAVAILABLE:return ec.UNAVAILABLE;case hu.UNAUTHENTICATED:return ec.UNAUTHENTICATED;case hu.INVALID_ARGUMENT:return ec.INVALID_ARGUMENT;case hu.NOT_FOUND:return ec.NOT_FOUND;case hu.ALREADY_EXISTS:return ec.ALREADY_EXISTS;case hu.PERMISSION_DENIED:return ec.PERMISSION_DENIED;case hu.FAILED_PRECONDITION:return ec.FAILED_PRECONDITION;case hu.ABORTED:return ec.ABORTED;case hu.OUT_OF_RANGE:return ec.OUT_OF_RANGE;case hu.UNIMPLEMENTED:return ec.UNIMPLEMENTED;case hu.DATA_LOSS:return ec.DATA_LOSS;default:return Ya()}}(uu=hu||(hu={}))[uu.OK=0]="OK",uu[uu.CANCELLED=1]="CANCELLED",uu[uu.UNKNOWN=2]="UNKNOWN",uu[uu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",uu[uu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",uu[uu.NOT_FOUND=5]="NOT_FOUND",uu[uu.ALREADY_EXISTS=6]="ALREADY_EXISTS",uu[uu.PERMISSION_DENIED=7]="PERMISSION_DENIED",uu[uu.UNAUTHENTICATED=16]="UNAUTHENTICATED",uu[uu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",uu[uu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",uu[uu.ABORTED=10]="ABORTED",uu[uu.OUT_OF_RANGE=11]="OUT_OF_RANGE",uu[uu.UNIMPLEMENTED=12]="UNIMPLEMENTED",uu[uu.INTERNAL=13]="INTERNAL",uu[uu.UNAVAILABLE=14]="UNAVAILABLE",uu[uu.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class du{constructor(t,e){this.comparator=t,this.root=e||pu.EMPTY}insert(t,e){return new du(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pu.BLACK,null,null))}remove(t){return new du(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pu.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fu(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fu(this.root,t,this.comparator,!1)}getReverseIterator(){return new fu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fu(this.root,t,this.comparator,!0)}}class fu{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pu{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:pu.RED,this.left=null!=s?s:pu.EMPTY,this.right=null!=i?i:pu.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new pu(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pu.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return pu.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pu.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ya();if(this.right.isRed())throw Ya();const t=this.left.check();if(t!==this.right.check())throw Ya();return t+(this.isRed()?0:1)}}pu.EMPTY=null,pu.RED=!0,pu.BLACK=!1,pu.EMPTY=new class{constructor(){this.size=0}get key(){throw Ya()}get value(){throw Ya()}get color(){throw Ya()}get left(){throw Ya()}get right(){throw Ya()}copy(t,e,n,s,i){return this}insert(t,e,n){return new pu(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gu{constructor(t){this.comparator=t,this.data=new du(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new mu(this.data.getIterator())}getIteratorFrom(t){return new mu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof gu))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new gu(this.comparator);return e.data=t,e}}class mu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=new du(Uc.comparator);function vu(){return yu}const wu=new du(Uc.comparator);function Tu(){return wu}const Eu=new du(Uc.comparator);const Iu=new gu(Uc.comparator);function _u(...t){let e=Iu;for(const n of t)e=e.add(n);return e}const bu=new gu(pc);function Su(){return bu}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Au.createSynthesizedTargetChangeForCurrentChange(t,e)),new ku(yc.min(),n,Su(),vu(),_u())}}class Au{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Au(kc.EMPTY_BYTE_STRING,e,_u(),_u(),_u())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t,e,n,s){this.$=t,this.removedTargetIds=e,this.key=n,this.F=s}}class Nu{constructor(t,e){this.targetId=t,this.O=e}}class Ru{constructor(t,e,n=kc.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Du{constructor(){this.M=0,this.L=Pu(),this.B=kc.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=_u(),e=_u(),n=_u();return this.L.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Ya()}})),new Au(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=Pu()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Ou{constructor(t){this.et=t,this.nt=new Map,this.st=vu(),this.it=Lu(),this.rt=new gu(pc)}ot(t){for(const e of t.$)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ut(t){this.forEachTarget(t,(e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:Ya()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach(((t,n)=>{this.lt(n)&&e(n)}))}dt(t){const e=t.targetId,n=t.O.count,s=this.wt(e);if(s){const t=s.target;if(sh(t))if(0===n){const n=new Uc(t.path);this.ct(e,n,Yc.newNoDocument(n,yc.min()))}else Za(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach(((n,s)=>{const i=this.wt(s);if(i){if(n.current&&sh(i.target)){const e=new Uc(i.target.path);null!==this.st.get(e)||this.yt(s,e)||this.ct(s,e,Yc.newNoDocument(e,t))}n.j&&(e.set(s,n.G()),n.H())}}));let n=_u();this.it.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))}));const s=new ku(t,e,this.rt,this.st,n);return this.st=vu(),this.it=Lu(),this.rt=new gu(pc),s}at(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.lt(t))return;const s=this.ht(t);this.yt(t,e)?s.J(e,1):s.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new Du,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new gu(pc),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||Wa("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new Du),this.et.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function Lu(){return new du(Uc.comparator)}function Pu(){return new du(Uc.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu={asc:"ASCENDING",desc:"DESCENDING"},Uu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class xu{constructor(t,e){this.databaseId=t,this.C=e}}function Vu(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fu(t,e){return t.C?e.toBase64():e.toUint8Array()}function ju(t,e){return Vu(t,e.toTimestamp())}function qu(t){return Za(!!t),yc.fromTimestamp(function(t){const e=Cc(t);return new mc(e.seconds,e.nanos)}(t))}function Bu(t,e){return(n=t,new Ic(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function $u(t){const e=Ic.fromString(t);return Za(hl(e)),e}function Hu(t,e){return Bu(t.databaseId,e.path)}function Ku(t,e){const n=$u(e);if(n.get(1)!==t.databaseId.projectId)throw new nc(ec.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new nc(ec.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Uc(Wu(n))}function zu(t,e){return Bu(t.databaseId,e)}function Gu(t){return new Ic(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wu(t){return Za(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ju(t,e,n){return{name:Hu(t,e),fields:n.value.mapValue.fields}}function Qu(t,e){return{documents:[zu(t,e.path)]}}function Xu(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=zu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=zu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Gc(t.value))return{unaryFilter:{field:il(t.field),op:"IS_NAN"}};if(zc(t.value))return{unaryFilter:{field:il(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Gc(t.value))return{unaryFilter:{field:il(t.field),op:"IS_NOT_NAN"}};if(zc(t.value))return{unaryFilter:{field:il(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:il(t.field),op:sl(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>{return{field:il((e=t).field),direction:nl(e.dir)};var e}))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=(a=t,c=e.limit,a.C||Pc(c)?c:{value:c});var a,c;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=tl(e.startAt)),e.endAt&&(n.structuredQuery.endAt=tl(e.endAt)),n}function Yu(t){let e=function(t){const e=$u(t);return 4===e.length?Ic.emptyPath():Wu(e)}(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Za(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Zu(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new gh(rl((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Pc(e)?null:e}(n.limit));let c=null;n.startAt&&(c=el(n.startAt));let h=null;return n.endAt&&(h=el(n.endAt)),function(t,e,n,s,i,r,o,a){return new wh(t,e,n,s,i,r,o,a)}(e,i,o,r,a,"F",c,h)}function Zu(t){return t?void 0!==t.unaryFilter?[al(t)]:void 0!==t.fieldFilter?[ol(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Zu(t))).reduce(((t,e)=>t.concat(e))):Ya():[]}function tl(t){return{before:t.before,values:t.position}}function el(t){const e=!!t.before,n=t.values||[];return new fh(n,e)}function nl(t){return Mu[t]}function sl(t){return Uu[t]}function il(t){return{fieldPath:t.canonicalString()}}function rl(t){return bc.fromServerFormat(t.fieldPath)}function ol(t){return ih.create(rl(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ya()}}(t.fieldFilter.op),t.fieldFilter.value)}function al(t){switch(t.unaryFilter.op){case"IS_NAN":const e=rl(t.unaryFilter.field);return ih.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=rl(t.unaryFilter.field);return ih.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=rl(t.unaryFilter.field);return ih.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=rl(t.unaryFilter.field);return ih.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ya()}}function cl(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function hl(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ya(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ul(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ul?e:ul.resolve(e)}catch(e){return ul.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ul.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ul.reject(e)}static resolve(t){return new ul(((e,n)=>{e(t)}))}static reject(t){return new ul(((e,n)=>{n(t)}))}static waitFor(t){return new ul(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=ul.resolve(!1);for(const n of t)e=e.next((t=>t?ul.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}}function ll(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const e=this.mutations[s];e.key.isEqual(t.key)&&Qh(e,t,n[s])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Xh(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Xh(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(yc.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),_u())}isEqual(t){return this.batchId===t.batchId&&gc(this.mutations,t.mutations,((t,e)=>Zh(t,e)))&&gc(this.baseMutations,t.baseMutations,((t,e)=>Zh(t,e)))}}class fl{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){Za(t.mutations.length===n.length);let s=Eu;const i=t.mutations;for(let r=0;r<i.length;r++)s=s.insert(i[r].key,n[r].version);return new fl(t,e,n,s)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,e,n,s,i=yc.min(),r=yc.min(),o=kc.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new pl(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new pl(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new pl(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t){this.Gt=t}}function ml(t){const e=Yu({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?function(t,e,n){return new wh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.zt=new vl}addToCollectionParentIndex(t,e){return this.zt.add(e),ul.resolve()}getCollectionParents(t,e){return ul.resolve(this.zt.getEntries(e))}}class vl{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new gu(Ic.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new gu(Ic.comparator)).toArray()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new wl(0)}static re(){return new wl(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tl(t){if(t.code!==ec.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;Wa("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[s,i]of n)if(this.equalsFn(s,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0!==s){for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),!0;return!1}forEach(t){wc(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return Tc(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Il{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Pn(t,e,n)))}Pn(t,e,n){return this.Je.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}bn(t,e){t.forEach(((t,n)=>{for(const s of e)s.applyToLocalView(n)}))}vn(t,e){return this.Je.getEntries(t,e).next((e=>this.Vn(t,e).next((()=>e))))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.bn(e,t)))}getDocumentsMatchingQuery(t,e,n){return s=e,Uc.isDocumentKey(s.path)&&null===s.collectionGroup&&0===s.filters.length?this.Sn(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.Dn(t,e,n):this.Cn(t,e,n);var s}Sn(t,e){return this.Rn(t,new Uc(e)).next((t=>{let e=Tu();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Dn(t,e,n){const s=e.collectionGroup;let i=Tu();return this.Jt.getCollectionParents(t,s).next((r=>ul.forEach(r,(r=>{const o=(a=e,c=r.child(s),new wh(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.Cn(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}Cn(t,e,n){let s,i;return this.Je.getDocumentsMatchingQuery(t,e,n).next((n=>(s=n,this.An.getAllMutationBatchesAffectingQuery(t,e)))).next((e=>(i=e,this.Nn(t,i,s).next((t=>{s=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=s.get(n);null==i&&(i=Yc.newInvalidDocument(n),s=s.insert(n,i)),Xh(t,i,e.localWriteTime),i.isFoundDocument()||(s=s.remove(n))}}))))).next((()=>(s.forEach(((t,n)=>{Ch(e,n)||(s=s.remove(t))})),s)))}Nn(t,e,n){let s=_u();for(const r of e)for(const t of r.mutations)t instanceof nu&&null===n.get(t.key)&&(s=s.add(t.key));let i=n;return this.Je.getEntries(t,s).next((t=>(t.forEach(((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))})),i)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=s}static $n(t,e){let n=_u(),s=_u();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new _l(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{Fn(t){this.On=t}getDocumentsMatchingQuery(t,e,n,s){return 0===(i=e).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(yc.min())?this.Mn(t,e):this.On.vn(t,s).next((i=>{const r=this.Ln(e,i);return(Eh(e)||Ih(e))&&this.Bn(e.limitType,r,s,n)?this.Mn(t,e):(Ga()<=Dt.DEBUG&&Wa("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Ah(e)),this.On.getDocumentsMatchingQuery(t,e,n).next((t=>(r.forEach((e=>{t=t.insert(e.key,e)})),t))))}));var i}Ln(t,e){let n=new gu(Nh(t));return e.forEach(((e,s)=>{Ch(t,s)&&(n=n.add(s))})),n}Bn(t,e,n,s){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mn(t,e){return Ga()<=Dt.DEBUG&&Wa("QueryEngine","Using full collection scan to execute query:",Ah(e)),this.On.getDocumentsMatchingQuery(t,e,yc.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t,e,n,s){this.persistence=t,this.Un=e,this.k=s,this.qn=new du(pc),this.Kn=new El((t=>eh(t)),nh),this.jn=yc.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Il(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qn)))}}async function kl(t,e){const n=tc(t);let s=n.An,i=n.Wn;const r=await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.An.getAllMutationBatches(t).next((o=>(r=o,s=n.persistence.getMutationQueue(e),i=new Il(n.Qn,s,n.persistence.getIndexManager()),s.getAllMutationBatches(t)))).next((e=>{const n=[],s=[];let o=_u();for(const t of r){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.vn(t,o).next((t=>({Gn:t,removedBatchIds:n,addedBatchIds:s})))}))}));return n.An=s,n.Wn=i,n.Un.Fn(n.Wn),r}function Al(t){const e=tc(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.He.getLastRemoteSnapshotVersion(t)))}function Cl(t,e){const n=tc(t),s=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];e.targetChanges.forEach(((e,r)=>{const a=i.get(r);if(!a)return;o.push(n.He.removeMatchingKeys(t,e.removedDocuments,r).next((()=>n.He.addMatchingKeys(t,e.addedDocuments,r))));const c=e.resumeToken;if(c.approximateByteSize()>0){const d=a.withResumeToken(c,s).withSequenceNumber(t.currentSequenceNumber);i=i.insert(r,d),h=a,l=e,Za((u=d).resumeToken.approximateByteSize()>0),(0===h.resumeToken.approximateByteSize()||u.snapshotVersion.toMicroseconds()-h.snapshotVersion.toMicroseconds()>=3e8||l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size>0)&&o.push(n.He.updateTargetData(t,d))}var h,u,l}));let a=vu();if(e.documentUpdates.forEach(((s,i)=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(function(t,e,n,s,i){let r=_u();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=vu();return n.forEach(((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||s;o.isNoDocument()&&o.version.isEqual(yc.min())?(e.removeEntry(n,c),r=r.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),r=r.insert(n,o)):Wa("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),r}))}(t,r,e.documentUpdates,s,void 0).next((t=>{a=t}))),!s.isEqual(yc.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next((e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return ul.waitFor(o).next((()=>r.apply(t))).next((()=>n.Wn.Vn(t,a))).next((()=>a))})).then((t=>(n.qn=i,t)))}function Nl(t,e){const n=tc(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.An.getNextMutationBatchAfterBatchId(t,e))))}async function Rl(t,e,n){const s=tc(t),i=s.qn.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(o){if(!ll(o))throw o;Wa("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qn=s.qn.remove(e),s.Kn.delete(i.target)}function Dl(t,e,n){const s=tc(t);let i=yc.min(),r=_u();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=tc(t),i=s.Kn.get(n);return void 0!==i?ul.resolve(s.qn.get(i)):s.He.getTargetData(e,n)}(s,t,bh(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.He.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Un.getDocumentsMatchingQuery(t,e,n?i:yc.min(),n?r:_u()))).next((t=>({documents:t,zn:r})))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return ul.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:qu(n.createTime)}),ul.resolve()}getNamedQuery(t,e){return ul.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,{name:(n=e).name,query:ml(n.bundledQuery),readTime:qu(n.readTime)}),ul.resolve();var n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.ts=new gu(Pl.es),this.ns=new gu(Pl.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new Pl(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.os(new Pl(t,e))}cs(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new Uc(new Ic([])),n=new Pl(e,t),s=new Pl(e,t+1),i=[];return this.ns.forEachInRange([n,s],(t=>{this.os(t),i.push(t.key)})),i}hs(){this.ts.forEach((t=>this.os(t)))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new Uc(new Ic([])),n=new Pl(e,t),s=new Pl(e,t+1);let i=_u();return this.ns.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Pl(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Pl{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return Uc.comparator(t.key,e.key)||pc(t.fs,e.fs)}static ss(t,e){return pc(t.fs,e.fs)||Uc.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new gu(Pl.es)}checkEmpty(t){return ul.resolve(0===this.An.length)}addMutationBatch(t,e,n,s){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const r=new dl(i,e,n,s);this.An.push(r);for(const o of s)this.ws=this.ws.add(new Pl(o.key,i)),this.Jt.addToCollectionParentIndex(t,o.key.path.popLast());return ul.resolve(r)}lookupMutationBatch(t,e){return ul.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.gs(n),i=s<0?0:s;return ul.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return ul.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return ul.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Pl(e,0),s=new Pl(e,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,s],(t=>{const e=this._s(t.fs);i.push(e)})),ul.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new gu(pc);return e.forEach((t=>{const e=new Pl(t,0),s=new Pl(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,s],(t=>{n=n.add(t.fs)}))})),ul.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;Uc.isDocumentKey(i)||(i=i.child(""));const r=new Pl(new Uc(i),0);let o=new gu(pc);return this.ws.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.fs)),!0)}),r),ul.resolve(this.ys(o))}ys(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Za(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return ul.forEach(e.mutations,(s=>{const i=new Pl(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ws=n}))}ee(t){}containsKey(t,e){const n=new Pl(e,0),s=this.ws.firstAfterOrEqual(n);return ul.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.An.length,ul.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new du(Uc.comparator),this.size=0}addEntry(t,e,n){const s=e.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(e);return this.docs=this.docs.insert(s,{document:e.clone(),size:o,readTime:n}),this.size+=o-r,this.Jt.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ul.resolve(n?n.document.clone():Yc.newInvalidDocument(e))}getEntries(t,e){let n=vu();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():Yc.newInvalidDocument(t))})),ul.resolve(n)}getDocumentsMatchingQuery(t,e,n){let s=vu();const i=new Uc(e.path.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i,readTime:o}}=r.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Ch(e,i)&&(s=s.insert(i.key,i.clone()))}return ul.resolve(s)}Es(t,e){return ul.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new xl(this)}getSize(t){return ul.resolve(this.size)}}class xl extends class{constructor(){this.changes=new El((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:yc.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:Yc.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ul.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.document.isValidDocument()?e.push(this.De.addEntry(t,s.document,this.getReadTime(n))):this.De.removeEntry(n)})),ul.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t){this.persistence=t,this.Is=new El((t=>eh(t)),nh),this.lastRemoteSnapshotVersion=yc.min(),this.highestTargetId=0,this.As=0,this.Rs=new Ll,this.targetCount=0,this.Ps=wl.ie()}forEachTarget(t,e){return this.Is.forEach(((t,n)=>e(n))),ul.resolve()}getLastRemoteSnapshotVersion(t){return ul.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ul.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.Ps.next(),ul.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),ul.resolve()}ce(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ps=new wl(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,ul.resolve()}updateTargetData(t,e){return this.ce(e),ul.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,ul.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Is.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),ul.waitFor(i).next((()=>s))}getTargetCount(t){return ul.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return ul.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),ul.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),ul.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),ul.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return ul.resolve(n)}containsKey(t,e){return ul.resolve(this.Rs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,e){var n,s;this.bs={},this.Be=new lc(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new Vl(this),this.Jt=new yl,this.Je=(n=this.Jt,s=t=>this.referenceDelegate.vs(t),new Ul(n,s)),this.k=new gl(e),this.Ye=new Ol(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Ml(this.Jt,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){Wa("MemoryPersistence","Starting transaction:",t);const s=new jl(this.Be.next());return this.referenceDelegate.Vs(),n(s).next((t=>this.referenceDelegate.Ss(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Ds(t,e){return ul.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class jl extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}{constructor(t){super(),this.currentSequenceNumber=t}}class ql{constructor(t){this.persistence=t,this.Cs=new Ll,this.Ns=null}static ks(t){return new ql(t)}get xs(){if(this.Ns)return this.Ns;throw Ya()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),ul.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),ul.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),ul.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach((t=>this.xs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.xs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ul.forEach(this.xs,(n=>{const s=Uc.fromPath(n);return this.$s(t,s).next((t=>{t||e.removeEntry(s)}))})).next((()=>(this.Ns=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())}))}vs(t){return 0}$s(t,e){return ul.or([()=>ul.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}class Bl{constructor(){this.activeTargetIds=Su()}Ms(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $l{constructor(){this.pi=new Bl,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Ms(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new Bl,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){Wa("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Pi(){Wa("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Fi(t){this.ki(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Mi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,s,i){const r=this.Ui(t,e);Wa("RestConnection","Sending: ",r,n);const o={};return this.qi(o,s,i),this.Ki(t,r,o,n).then((t=>(Wa("RestConnection","Received: ",t),t)),(e=>{throw Qa("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ji(t,e,n,s,i){return this.Bi(t,e,n,s,i)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ka,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}Ui(t,e){const n=zl[t];return`${this.Mi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,s){return new Promise(((i,r)=>{const o=new Ba;o.listenOnce(Ua.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ma.NO_ERROR:const e=o.getResponseJson();Wa("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Ma.TIMEOUT:Wa("Connection",'RPC "'+t+'" timed out'),r(new nc(ec.DEADLINE_EXCEEDED,"Request time out"));break;case Ma.HTTP_ERROR:const n=o.getStatus();if(Wa("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ec).indexOf(e)>=0?e:ec.UNKNOWN}(t.status);r(new nc(e,t.message))}else r(new nc(ec.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new nc(ec.UNAVAILABLE,"Connection failed."));break;default:Ya()}}finally{Wa("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}Qi(t,e,n){const s=[this.Mi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=new Ra,r=_r(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ja({})),this.qi(o.initMessageHeaders,e,n),ft()||gt()||dt().indexOf("Electron/")>=0||mt()||dt().indexOf("MSAppHost/")>=0||pt()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=s.join("");Wa("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let h=!1,u=!1;const l=new Gl({Vi:t=>{u?Wa("Connection","Not sending because WebChannel is closed:",t):(h||(Wa("Connection","Opening WebChannel transport."),c.open(),h=!0),Wa("Connection","WebChannel sending:",t),c.send(t))},Si:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,qa.EventType.OPEN,(()=>{u||Wa("Connection","WebChannel transport opened.")})),d(c,qa.EventType.CLOSE,(()=>{u||(u=!0,Wa("Connection","WebChannel transport closed"),l.Fi())})),d(c,qa.EventType.ERROR,(t=>{u||(u=!0,Qa("Connection","WebChannel transport errored:",t),l.Fi(new nc(ec.UNAVAILABLE,"The operation could not be completed")))})),d(c,qa.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];Za(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){Wa("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=hu[t];if(void 0!==e)return lu(e)}(t),n=i.message;void 0===e&&(e=ec.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,l.Fi(new nc(e,n)),c.close()}else Wa("Connection","WebChannel received:",n),l.Oi(n)}})),d(r,xa.STAT_EVENT,(t=>{t.stat===Va?Wa("Connection","Detected buffering proxy"):t.stat===Fa&&Wa("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.$i()}),0),l}}function Jl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t){return new xu(t,!0)}class Xl{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Wi=n,this.Gi=s,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),s=Math.max(0,e-n);s>0&&Wa("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,s,(()=>(this.Yi=Date.now(),t()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,e,n,s,i,r,o,a){this.Oe=t,this.nr=n,this.sr=s,this.ir=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Xl(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===ec.RESOURCE_EXHAUSTED?(Ja(e.toString()),Ja("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===ec.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.rr===e&&this.Ir(t,n)}),(e=>{t((()=>{const t=new nc(ec.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)}))}))}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di((()=>{n((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((t=>{n((()=>this.Ar(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(t){return Wa("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Oe.enqueueAndForget((()=>this.rr===t?e():(Wa("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Zl extends Yl{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.k=i}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(s=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===s?1:"REMOVE"===s?2:"CURRENT"===s?3:"RESET"===s?4:Ya(),r=e.targetChange.targetIds||[],o=function(t,e){return t.C?(Za(void 0===e||"string"==typeof e),kc.fromBase64String(e||"")):(Za(void 0===e||e instanceof Uint8Array),kc.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?ec.UNKNOWN:lu(t.code);return new nc(e,t.message||"")}(a);n=new Ru(i,r,o,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Ku(t,s.document.name),r=qu(s.document.updateTime),o=new Qc({mapValue:{fields:s.document.fields}}),a=Yc.newFoundDocument(i,r,o),c=s.targetIds||[],h=s.removedTargetIds||[];n=new Cu(c,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Ku(t,s.document),r=s.readTime?qu(s.readTime):yc.min(),o=Yc.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Cu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Ku(t,s.document),r=s.removedTargetIds||[];n=new Cu([],r,i,null)}else{if(!("filter"in e))return Ya();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new cu(s),r=t.targetId;n=new Nu(r,i)}}var s;return n}(this.k,t),n=function(t){if(!("targetChange"in t))return yc.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?yc.min():e.readTime?qu(e.readTime):yc.min()}(t);return this.listener.Pr(e,n)}br(t){const e={};e.database=Gu(this.k),e.addTarget=function(t,e){let n;const s=e.target;return n=sh(s)?{documents:Qu(t,s)}:{query:Xu(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Fu(t,e.resumeToken):e.snapshotVersion.compareTo(yc.min())>0&&(n.readTime=Vu(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ya()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=Gu(this.k),e.removeTarget=t,this.gr(e)}}class td extends Yl{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,e){return this.ir.Qi("Write",t,e)}onMessage(t){if(Za(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const e=function(t,e){return t&&t.length>0?(Za(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?qu(t.updateTime):qu(e);return n.isEqual(yc.min())&&(n=qu(e)),new zh(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=qu(t.commitTime);return this.listener.Cr(n,e)}return Za(!t.writeResults||0===t.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=Gu(this.k),this.gr(t)}Dr(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof eu)n={update:Ju(t,e.key,e.value)};else if(e instanceof ou)n={delete:Hu(t,e.key)};else if(e instanceof nu)n={update:Ju(t,e.key,e.data),updateMask:cl(e.fieldMask)};else{if(!(e instanceof au))return Ya();n={verify:Hu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Vh)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Fh)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof qh)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof $h)return{fieldPath:e.field.canonicalString(),increment:n.N};throw Ya()}(0,t)))),e.precondition.isNone||(n.currentDocument=(s=t,void 0!==(i=e.precondition).updateTime?{updateTime:ju(s,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Ya())),n;var s,i}(this.k,t)))};this.gr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=s,this.$r=!1}Fr(){if(this.$r)throw new nc(ec.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.ir.Bi(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ec.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new nc(ec.UNKNOWN,t.toString())}))}ji(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.ir.ji(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ec.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new nc(ec.UNKNOWN,t.toString())}))}terminate(){this.$r=!0}}class nd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.Ur("Offline")))}set(t){this.jr(),this.Or=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Ja(e),this.Lr=!1):Wa("OnlineStateTracker",e)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((t=>{n.enqueueAndForget((async()=>{dd(this)&&(Wa("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=tc(t);e.Gr.add(4),await rd(e),e.Jr.set("Unknown"),e.Gr.delete(4),await id(e)}(this))}))})),this.Jr=new nd(n,s)}}async function id(t){if(dd(t))for(const e of t.zr)await e(!0)}async function rd(t){for(const e of t.zr)await e(!1)}function od(t,e){const n=tc(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),ld(n)?ud(n):Cd(n).lr()&&cd(n,e))}function ad(t,e){const n=tc(t),s=Cd(n);n.Wr.delete(e),s.lr()&&hd(n,e),0===n.Wr.size&&(s.lr()?s._r():dd(n)&&n.Jr.set("Unknown"))}function cd(t,e){t.Yr.X(e.targetId),Cd(t).br(e)}function hd(t,e){t.Yr.X(e),Cd(t).vr(e)}function ud(t){t.Yr=new Ou({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),Cd(t).start(),t.Jr.Br()}function ld(t){return dd(t)&&!Cd(t).hr()&&t.Wr.size>0}function dd(t){return 0===tc(t).Gr.size}function fd(t){t.Yr=void 0}async function pd(t){t.Wr.forEach(((e,n)=>{cd(t,e)}))}async function gd(t,e){fd(t),ld(t)?(t.Jr.Kr(e),ud(t)):t.Jr.set("Unknown")}async function md(t,e,n){if(t.Jr.set("Online"),e instanceof Ru&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.Wr.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.Wr.delete(s),t.Yr.removeTarget(s))}(t,e)}catch(s){Wa("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await yd(t,s)}else if(e instanceof Cu?t.Yr.ot(e):e instanceof Nu?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(yc.min()))try{const e=await Al(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Wr.get(s);i&&t.Wr.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(kc.EMPTY_BYTE_STRING,n.snapshotVersion)),hd(t,e);const s=new pl(n.target,e,1,n.sequenceNumber);cd(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(i){Wa("RemoteStore","Failed to raise snapshot:",i),await yd(t,i)}}async function yd(t,e,n){if(!ll(e))throw e;t.Gr.add(1),await rd(t),t.Jr.set("Offline"),n||(n=()=>Al(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Wa("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await id(t)}))}function vd(t,e){return e().catch((n=>yd(t,n,e)))}async function wd(t){const e=tc(t),n=Nd(e);let s=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;Td(e);)try{const t=await Nl(e.localStore,s);if(null===t){0===e.Qr.length&&n._r();break}s=t.batchId,Ed(e,t)}catch(i){await yd(e,i)}Id(e)&&_d(e)}function Td(t){return dd(t)&&t.Qr.length<10}function Ed(t,e){t.Qr.push(e);const n=Nd(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function Id(t){return dd(t)&&!Nd(t).hr()&&t.Qr.length>0}function _d(t){Nd(t).start()}async function bd(t){Nd(t).kr()}async function Sd(t){const e=Nd(t);for(const n of t.Qr)e.Dr(n.mutations)}async function kd(t,e,n){const s=t.Qr.shift(),i=fl.from(s,e,n);await vd(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await wd(t)}async function Ad(t,e){e&&Nd(t).Sr&&await async function(t,e){if(function(t){switch(t){default:return Ya();case ec.CANCELLED:case ec.UNKNOWN:case ec.DEADLINE_EXCEEDED:case ec.RESOURCE_EXHAUSTED:case ec.INTERNAL:case ec.UNAVAILABLE:case ec.UNAUTHENTICATED:return!1;case ec.INVALID_ARGUMENT:case ec.NOT_FOUND:case ec.ALREADY_EXISTS:case ec.PERMISSION_DENIED:case ec.FAILED_PRECONDITION:case ec.ABORTED:case ec.OUT_OF_RANGE:case ec.UNIMPLEMENTED:case ec.DATA_LOSS:return!0}}(n=e.code)&&n!==ec.ABORTED){const n=t.Qr.shift();Nd(t).wr(),await vd(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await wd(t)}var n}(t,e),Id(t)&&_d(t)}function Cd(t){return t.Xr||(t.Xr=function(t,e,n){const s=tc(t);return s.Fr(),new Zl(e,s.ir,s.authCredentials,s.appCheckCredentials,s.k,n)}(t.datastore,t.asyncQueue,{Di:pd.bind(null,t),Ni:gd.bind(null,t),Pr:md.bind(null,t)}),t.zr.push((async e=>{e?(t.Xr.wr(),ld(t)?ud(t):t.Jr.set("Unknown")):(await t.Xr.stop(),fd(t))}))),t.Xr}function Nd(t){return t.Zr||(t.Zr=function(t,e,n){const s=tc(t);return s.Fr(),new td(e,s.ir,s.authCredentials,s.appCheckCredentials,s.k,n)}(t.datastore,t.asyncQueue,{Di:bd.bind(null,t),Ni:Ad.bind(null,t),Nr:Sd.bind(null,t),Cr:kd.bind(null,t)}),t.zr.push((async e=>{e?(t.Zr.wr(),await wd(t)):(await t.Zr.stop(),t.Qr.length>0&&(Wa("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))}))),t.Zr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Rd{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new sc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Rd(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new nc(ec.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dd(t,e){if(Ja("AsyncQueue",`${e}: ${t}`),ll(t))return new nc(ec.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Uc.comparator(e.key,n.key):(t,e)=>Uc.comparator(t.key,e.key),this.keyedMap=Tu(),this.sortedSet=new du(this.comparator)}static emptySet(t){return new Od(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Od))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Od;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.eo=new du(Uc.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):Ya():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Pd{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Pd(t,e,Od.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Sh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.so=void 0,this.listeners=[]}}class Ud{constructor(){this.queries=new El((t=>kh(t)),Sh),this.onlineState="Unknown",this.io=new Set}}function xd(t,e){const n=tc(t);let s=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.oo(i)&&(s=!0);e.so=i}}s&&Fd(n)}function Vd(t,e,n){const s=tc(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Fd(t){t.io.forEach((t=>{t.next()}))}class jd{constructor(t,e,n){this.query=t,this.ao=e,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Pd(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.ho(t)&&(this.ao.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.ao.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.co&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.wo&&n||t.docs.isEmpty()&&"Offline"!==e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=Pd.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.ao.next(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t){this.key=t}}class Bd{constructor(t){this.key=t}}class $d{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=_u(),this.mutatedKeys=_u(),this.Ao=Nh(t),this.Ro=new Od(this.Ao)}get Po(){return this.To}bo(t,e){const n=e?e.vo:new Ld,s=e?e.Ro:this.Ro;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a=Eh(this.query)&&s.size===this.query.limit?s.last():null,c=Ih(this.query)&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const h=s.get(t),u=Ch(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;h&&u?h.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(h,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||c&&this.Ao(u,c)<0)&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),Eh(this.query)||Ih(this.query))for(;r.size>this.query.limit;){const t=Eh(this.query)?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ro:r,vo:n,Bn:o,mutatedKeys:i}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const i=t.vo.no();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ya()}};return n(t)-n(e)}(t.type,e.type)||this.Ao(t.doc,e.doc))),this.So(n);const r=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new Pd(this.query,t.Ro,s,i,t.mutatedKeys,0===o,a,!1),Co:r}:{Co:r}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new Ld,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach((t=>this.To=this.To.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.To=this.To.delete(t))),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=_u(),this.Ro.forEach((t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))}));const e=[];return t.forEach((t=>{this.Io.has(t)||e.push(new Bd(t))})),this.Io.forEach((n=>{t.has(n)||e.push(new qd(n))})),e}ko(t){this.To=t.zn,this.Io=_u();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return Pd.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Hd{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Kd{constructor(t){this.key=t,this.$o=!1}}class zd{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.Fo={},this.Oo=new El((t=>kh(t)),Sh),this.Mo=new Map,this.Lo=new Set,this.Bo=new du(Uc.comparator),this.Uo=new Map,this.qo=new Ll,this.Ko={},this.jo=new Map,this.Qo=wl.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Gd(t,e){const n=function(t){const e=tc(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lf.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Yd.bind(null,e),e.Fo.Pr=xd.bind(null,e.eventManager),e.Fo.zo=Vd.bind(null,e.eventManager),e}(t);let s,i;const r=n.Oo.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.xo();else{const t=await function(t,e){const n=tc(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.He.getTargetData(t,e).next((i=>i?(s=i,ul.resolve(s)):n.He.allocateTargetId(t).next((i=>(s=new pl(e,i,0,t.currentSequenceNumber),n.He.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.qn.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t}))}(n.localStore,bh(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await async function(t,e,n,s){t.Go=(e,n,s)=>async function(t,e,n,s){let i=e.view.bo(n);i.Bn&&(i=await Dl(t.localStore,e.query,!1).then((({documents:t})=>e.view.bo(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return of(t,e.targetId,o.Co),o.snapshot}(t,e,n,s);const i=await Dl(t.localStore,e,!0),r=new $d(e,i.zn),o=r.bo(i.documents),a=Au.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);of(t,n,c.Co);const h=new Hd(e,n,r);return t.Oo.set(e,h),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),c.snapshot}(n,e,s,"current"===r),n.isPrimaryClient&&od(n.remoteStore,t)}return i}async function Wd(t,e){const n=tc(t),s=n.Oo.get(e),i=n.Mo.get(s.targetId);if(i.length>1)return n.Mo.set(s.targetId,i.filter((t=>!Sh(t,e)))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Rl(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),ad(n.remoteStore,s.targetId),sf(n,s.targetId)})).catch(Tl)):(sf(n,s.targetId),await Rl(n.localStore,s.targetId,!0))}async function Jd(t,e,n){const s=function(t){const e=tc(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zd.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tf.bind(null,e),e}(t);try{const t=await function(t,e){const n=tc(t),s=mc.now(),i=e.reduce(((t,e)=>t.add(e.key)),_u());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.Wn.vn(t,i).next((i=>{r=i;const o=[];for(const t of e){const e=Yh(t,r.get(t.key));null!=e&&o.push(new nu(t.key,e,Xc(e.value.mapValue),Gh.exists(!0)))}return n.An.addMutationBatch(t,s,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.Ko[t.currentUser.toKey()];s||(s=new du(pc)),s=s.insert(e,n),t.Ko[t.currentUser.toKey()]=s}(s,t.batchId,n),await hf(s,t.changes),await wd(s.remoteStore)}catch(i){const t=Dd(i,"Failed to persist write");n.reject(t)}}async function Qd(t,e){const n=tc(t);try{const t=await Cl(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.Uo.get(e);s&&(Za(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.$o=!0:t.modifiedDocuments.size>0?Za(s.$o):t.removedDocuments.size>0&&(Za(s.$o),s.$o=!1))})),await hf(n,t,e)}catch(s){await Tl(s)}}function Xd(t,e,n){const s=tc(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.Oo.forEach(((n,s)=>{const i=s.view.ro(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=tc(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.ro(e)&&(s=!0)})),s&&Fd(n)}(s.eventManager,e),t.length&&s.Fo.Pr(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Yd(t,e,n){const s=tc(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.Uo.get(e),r=i&&i.key;if(r){let t=new du(Uc.comparator);t=t.insert(r,Yc.newNoDocument(r,yc.min()));const n=_u().add(r),i=new ku(yc.min(),new Map,new gu(pc),t,n);await Qd(s,i),s.Bo=s.Bo.remove(r),s.Uo.delete(e),cf(s)}else await Rl(s.localStore,e,!1).then((()=>sf(s,e,n))).catch(Tl)}async function Zd(t,e){const n=tc(t),s=e.batch.batchId;try{const t=await function(t,e){const n=tc(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=ul.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Za(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&s.addEntry(e,n.commitVersion))}))})),o.next((()=>t.An.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.An.performConsistencyCheck(t))).next((()=>n.Wn.vn(t,s)))}))}(n.localStore,e);nf(n,s,null),ef(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await hf(n,t)}catch(i){await Tl(i)}}async function tf(t,e,n){const s=tc(t);try{const t=await function(t,e){const n=tc(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.An.lookupMutationBatch(t,e).next((e=>(Za(null!==e),s=e.keys(),n.An.removeMutationBatch(t,e)))).next((()=>n.An.performConsistencyCheck(t))).next((()=>n.Wn.vn(t,s)))}))}(s.localStore,e);nf(s,e,n),ef(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await hf(s,t)}catch(i){await Tl(i)}}function ef(t,e){(t.jo.get(e)||[]).forEach((t=>{t.resolve()})),t.jo.delete(e)}function nf(t,e,n){const s=tc(t);let i=s.Ko[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.Ko[s.currentUser.toKey()]=i}}function sf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Mo.get(e))t.Oo.delete(s),n&&t.Fo.zo(s,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach((e=>{t.qo.containsKey(e)||rf(t,e)}))}function rf(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(ad(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),cf(t))}function of(t,e,n){for(const s of n)s instanceof qd?(t.qo.addReference(s.key,e),af(t,s)):s instanceof Bd?(Wa("SyncEngine","Document no longer in limbo: "+s.key),t.qo.removeReference(s.key,e),t.qo.containsKey(s.key)||rf(t,s.key)):Ya()}function af(t,e){const n=e.key,s=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(s)||(Wa("SyncEngine","New document in limbo: "+n),t.Lo.add(s),cf(t))}function cf(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new Uc(Ic.fromString(e)),s=t.Qo.next();t.Uo.set(s,new Kd(n)),t.Bo=t.Bo.insert(n,s),od(t.remoteStore,new pl(bh(Th(n.path)),s,2,lc.I))}}async function hf(t,e,n){const s=tc(t),i=[],r=[],o=[];s.Oo.isEmpty()||(s.Oo.forEach(((t,a)=>{o.push(s.Go(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=_l.$n(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.Fo.Pr(i),await async function(t,e){const n=tc(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ul.forEach(e,(e=>ul.forEach(e.kn,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>ul.forEach(e.xn,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(s){if(!ll(s))throw s;Wa("LocalStore","Failed to update sequence numbers: "+s)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.qn.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.qn=n.qn.insert(t,i)}}}(s.localStore,r))}async function uf(t,e){const n=tc(t);if(!n.currentUser.isEqual(e)){Wa("SyncEngine","User change. New user:",e.toKey());const t=await kl(n.localStore,e);n.currentUser=e,(s=n).jo.forEach((t=>{t.forEach((t=>{t.reject(new nc(ec.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),s.jo.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await hf(n,t.Gn)}var s}function lf(t,e){const n=tc(t),s=n.Uo.get(e);if(s&&s.$o)return _u().add(s.key);{let t=_u();const s=n.Mo.get(e);if(!s)return t;for(const e of s){const s=n.Oo.get(e);t=t.unionWith(s.view.Po)}return t}}class df{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Ql(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return function(t,e,n,s){return new Sl(t,e,n,s)}(this.persistence,new bl,t.initialUser,this.k)}Yo(t){return new Fl(ql.ks,this.k)}Jo(t){return new $l}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ff{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Xd(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=uf.bind(null,this.syncEngine),await async function(t,e){const n=tc(t);e?(n.Gr.delete(2),await id(n)):e||(n.Gr.add(2),await rd(n),n.Jr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ud}createDatastore(t){const e=Ql(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Wl(s));var s,i,r;return i=t.authCredentials,r=t.appCheckCredentials,new ed(i,r,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Xd(this.syncEngine,t,0),r=Kl.bt()?new Kl:new Hl,new sd(e,n,s,i,r);var e,n,s,i,r}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new zd(t,e,n,s,i,r);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=tc(t);Wa("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await rd(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ea(this.observer.next,t)}error(t){this.observer.error&&this.ea(this.observer.error,t)}na(){this.muted=!0}ea(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Ha.UNAUTHENTICATED,this.clientId=fc.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Wa("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new nc(ec.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new sc;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Dd(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function mf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){return t.offlineComponents||(Wa("FirestoreClient","Using default OfflineComponentProvider"),await async function(t,e){t.asyncQueue.verifyOperationInProgress(),Wa("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await kl(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}(t,new df)),t.offlineComponents}(t);Wa("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>async function(t,e){const n=tc(t);n.asyncQueue.verifyOperationInProgress(),Wa("RemoteStore","RemoteStore received new credentials");const s=dd(n);n.Gr.add(3),await rd(n),s&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await id(n)}(e.remoteStore,t))),t.onlineComponents=e}async function yf(t){return t.onlineComponents||(Wa("FirestoreClient","Using default OnlineComponentProvider"),await mf(t,new ff)),t.onlineComponents}async function vf(t){const e=await yf(t),n=e.eventManager;return n.onListen=Gd.bind(null,e.syncEngine),n.onUnlisten=Wd.bind(null,e.syncEngine),n}function wf(t,e,n={}){const s=new sc;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new pf({next:r=>{e.enqueueAndForget((()=>async function(t,e){const n=tc(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}(t,o)));const a=r.docs.has(n);!a&&r.fromCache?i.reject(new nc(ec.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&s&&"server"===s.source?i.reject(new nc(ec.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:t=>i.reject(t)}),o=new jd(Th(n.path),r,{includeMetadataChanges:!0,wo:!0});return async function(e,n){const s=tc(e),i=n.query;let r=!1,o=s.queries.get(i);if(o||(r=!0,o=new Md),r)try{o.so=await s.onListen(i)}catch(t){const s=Dd(t,`Initialization of query '${Ah(n.query)}' failed`);return void n.onError(s)}s.queries.set(i,o),o.listeners.push(n),n.ro(s.onlineState),o.so&&n.oo(o.so)&&Fd(s)}(t,o)}(await vf(t),t.asyncQueue,e,n,s))),s.promise}class Tf{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ef{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ef&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(t,e,n){if(!n)throw new nc(ec.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bf(t){if(!Uc.isDocumentKey(t))throw new nc(ec.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Ya()}function kf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new nc(ec.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sf(t);throw new nc(ec.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new nc(ec.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new nc(ec.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new nc(ec.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Af({}),this._settingsFrozen=!1,t instanceof Ef?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new nc(ec.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ef(t.options.projectId)}(t))}get app(){if(!this._app)throw new nc(ec.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new nc(ec.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Af(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new rc;switch(t.type){case"gapi":const e=t.client;return Za(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new cc(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new nc(ec.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=If.get(t);e&&(Wa("ComponentProvider","Removing Datastore"),If.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Df(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Nf(this.firestore,t,this._key)}}class Rf{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Rf(this.firestore,t,this._query)}}class Df extends Rf{constructor(t,e,n){super(t,e,Th(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Nf(this.firestore,null,new Uc(t))}withConverter(t){return new Df(this.firestore,t,this._path)}}function Of(t,e,...n){if(t=At(t),1===arguments.length&&(e=fc.A()),_f("doc","path",e),t instanceof Cf){const s=Ic.fromString(e,...n);return bf(s),new Nf(t,null,new Uc(s))}{if(!(t instanceof Nf||t instanceof Df))throw new nc(ec.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ic.fromString(e,...n));return bf(s),new Nf(t.firestore,t instanceof Df?t.converter:null,new Uc(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Xl(this,"async_queue_retry"),this.Ra=()=>{const t=Jl();t&&Wa("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=Jl();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pa(),this.ba(t)}enterRestrictedMode(t){if(!this.ya){this.ya=!0,this.Ia=t||!1;const e=Jl();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ra)}}enqueue(t){if(this.Pa(),this.ya)return new Promise((()=>{}));const e=new sc;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.ga.push(t),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(t){if(!ll(t))throw t;Wa("AsyncQueue","Operation failed with retryable error: "+t)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(t){const e=this.ma.then((()=>(this.Ea=!0,t().catch((t=>{this.Ta=t,this.Ea=!1;throw Ja("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Ea=!1,t))))));return this.ma=e,e}enqueueAfterDelay(t,e,n){this.Pa(),this.Aa.indexOf(t)>-1&&(e=0);const s=Rd.createAndSchedule(this,t,e,n,(t=>this.Va(t)));return this.pa.push(s),s}Pa(){this.Ta&&Ya()}verifyOperationInProgress(){}async Sa(){let t;do{t=this.ma,await t}while(t!==this.ma)}Da(t){for(const e of this.pa)if(e.timerId===t)return!0;return!1}Ca(t){return this.Sa().then((()=>{this.pa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.pa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sa()}))}Na(t){this.Aa.push(t)}Va(t){const e=this.pa.indexOf(t);this.pa.splice(e,1)}}class Pf extends Cf{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Lf,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||xf(this),this._firestoreClient.terminate()}}function Mf(t=Qt()){return zt(t,"firestore").getImmediate()}function Uf(t){return t._firestoreClient||xf(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xf(t){var e;const n=t._freezeSettings(),s=(i=t._databaseId,r=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new Tf(i,r,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,r,o,a;t._firestoreClient=new gf(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new nc(ec.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bc(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ff(kc.fromBase64String(t))}catch(e){throw new nc(ec.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ff(kc.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new nc(ec.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new nc(ec.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return pc(this._lat,t._lat)||pc(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=/^__.*__$/;class $f{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new nu(t,this.data,this.fieldMask,e,this.fieldTransforms):new eu(t,this.data,e,this.fieldTransforms)}}function Hf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ya()}}class Kf{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.k=n,this.ignoreUndefinedProperties=s,void 0===i&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(t){return new Kf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.$a({path:n,Oa:!1});return s.Ma(t),s}La(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.$a({path:n,Oa:!1});return s.ka(),s}Ba(t){return this.$a({path:void 0,Oa:!0})}Ua(t){return np(t,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ka(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ma(this.path.get(t))}Ma(t){if(0===t.length)throw this.Ua("Document fields must not be empty");if(Hf(this.xa)&&Bf.test(t))throw this.Ua('Document fields cannot begin and end with "__"')}}class zf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=n||Ql(t)}ja(t,e,n,s=!1){return new Kf({xa:t,methodName:e,Ka:n,path:bc.emptyPath(),Oa:!1,qa:s},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Gf(t){const e=t._freezeSettings(),n=Ql(t._databaseId);return new zf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Wf(t,e,n,s,i,r={}){const o=t.ja(r.merge||r.mergeFields?2:0,e,n,i);Yf("Data must be an object, but it was:",o,s);const a=Qf(s,o);let c,h;if(r.merge)c=new Sc(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=Zf(e,s,n);if(!o.contains(i))throw new nc(ec.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);sp(t,i)||t.push(i)}c=new Sc(t),h=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,h=o.fieldTransforms;return new $f(new Qc(a),c,h)}function Jf(t,e){if(Xf(t=At(t)))return Yf("Unsupported field value:",e,t),Qf(t,e);if(t instanceof jf)return function(t,e){if(!Hf(e.xa))throw e.Ua(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Ua(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&4!==e.xa)throw e.Ua("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=Jf(i,e.Ba(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=At(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Lh(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=mc.fromDate(t);return{timestampValue:Vu(e.k,n)}}if(t instanceof mc){const n=new mc(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Vu(e.k,n)}}if(t instanceof qf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ff)return{bytesValue:Fu(e.k,t._byteString)};if(t instanceof Nf){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.Ua(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Bu(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Ua(`Unsupported field value: ${Sf(t)}`)}(t,e)}function Qf(t,e){const n={};return Tc(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wc(t,((t,s)=>{const i=Jf(s,e.Fa(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Xf(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof mc||t instanceof qf||t instanceof Ff||t instanceof Nf||t instanceof jf)}function Yf(t,e,n){if(!Xf(n)||("object"!=typeof(s=n)||null===s||Object.getPrototypeOf(s)!==Object.prototype&&null!==Object.getPrototypeOf(s))){const s=Sf(n);throw"an object"===s?e.Ua(t+" a custom object"):e.Ua(t+" "+s)}var s}function Zf(t,e,n){if((e=At(e))instanceof Vf)return e._internalPath;if("string"==typeof e)return ep(t,e);throw np("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const tp=new RegExp("[~\\*/\\[\\]]");function ep(t,e,n){if(e.search(tp)>=0)throw np(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vf(...e.split("."))._internalPath}catch(s){throw np(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function np(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new nc(ec.INVALID_ARGUMENT,a+t+c)}function sp(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Nf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new rp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(op("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class rp extends ip{data(){return super.data()}}function op(t,e){return"string"==typeof e?ep(t,e):e instanceof Vf?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class cp extends ip{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new hp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(op("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class hp extends cp{data(t={}){return super.data(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function up(t){t=kf(t,Nf);const e=kf(t.firestore,Pf);return wf(Uf(e),t._key).then((n=>function(t,e,n){const s=n.docs.get(e._key),i=new lp(t);return new cp(t,i,e._key,s,new ap(n.hasPendingWrites,n.fromCache),e.converter)}(e,t,n)))}class lp extends class{convertValue(t,e="none"){switch(xc(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Nc(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Rc(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ya()}}convertObject(t,e){const n={};return wc(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new qf(Nc(t.latitude),Nc(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Oc(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Lc(t));default:return null}}convertTimestamp(t){const e=Cc(t);return new mc(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ic.fromString(t);Za(hl(n));const s=new Ef(n.get(1),n.get(3)),i=new Uc(n.popFirst(5));return s.isEqual(e)||Ja(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ff(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Nf(this.firestore,null,e)}}function dp(t,e,n){t=kf(t,Nf);const s=kf(t.firestore,Pf),i=function(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}(t.converter,e,n);return function(t,e){return function(t,e){const n=new sc;return t.asyncQueue.enqueueAndForget((async()=>Jd(await function(t){return yf(t).then((t=>t.syncEngine))}(t),e,n))),n.promise}(Uf(t),e)}(s,[Wf(Gf(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Gh.none())])}!function(t,e=!0){Ka="9.6.0",Kt(new Ct("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new Pf(s,new oc(t.getProvider("auth-internal")),new uc(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),Xt($a,"3.4.0",t),Xt($a,"3.4.0","esm2017")}();export{E as A,k as B,nt as C,Of as D,Q as E,Z as F,gn as G,X as H,Rn as I,An as J,Nn as K,Mf as L,st as M,it as N,rt as O,c as P,ct as S,v as a,kn as b,ss as c,w as d,_ as e,bn as f,Os as g,T as h,at as i,I as j,S as k,g as l,A as m,t as n,b as o,j as p,et as q,i as r,o as s,Y as t,Sn as u,Cn as v,ht as w,Jt as x,dp as y,up as z};
