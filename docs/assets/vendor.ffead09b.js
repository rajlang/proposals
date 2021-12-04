function e(){}const t=e=>e;function i(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(i)}function a(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let o;function c(e,t){return o||(o=document.createElement("a")),o.href=t,e===o.href}const u="undefined"!=typeof window;let l=u?()=>window.performance.now():()=>Date.now(),d=u?e=>requestAnimationFrame(e):e;const h=new Set;function f(e){h.forEach((t=>{t.c(e)||(h.delete(t),t.f())})),0!==h.size&&d(f)}function p(e,t){e.appendChild(t)}function m(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function g(e){const t=y("style");return function(e,t){p(e.head||e,t)}(m(e),t),t}function v(e,t,i){e.insertBefore(t,i||null)}function b(e){e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function I(){return w(" ")}function _(e,t,i,n){return e.addEventListener(t,i,n),()=>e.removeEventListener(t,i,n)}function E(e,t,i){null==i?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}const S=new Set;let C,T=0;function A(e,t,i,n,r,a,s,o=0){const c=16.666/n;let u="{\n";for(let m=0;m<=1;m+=c){const e=t+(i-t)*a(m);u+=100*m+`%{${s(e,1-e)}}\n`}const l=u+`100% {${s(i,1-i)}}\n}`,d=`__svelte_${function(e){let t=5381,i=e.length;for(;i--;)t=(t<<5)-t^e.charCodeAt(i);return t>>>0}(l)}_${o}`,h=m(e);S.add(h);const f=h.__svelte_stylesheet||(h.__svelte_stylesheet=g(e).sheet),p=h.__svelte_rules||(h.__svelte_rules={});p[d]||(p[d]=!0,f.insertRule(`@keyframes ${d} ${l}`,f.cssRules.length));const v=e.style.animation||"";return e.style.animation=`${v?`${v}, `:""}${d} ${n}ms linear ${r}ms 1 both`,T+=1,d}function R(e,t){const i=(e.style.animation||"").split(", "),n=i.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=i.length-n.length;r&&(e.style.animation=n.join(", "),T-=r,T||d((()=>{T||(S.forEach((e=>{const t=e.__svelte_stylesheet;let i=t.cssRules.length;for(;i--;)t.deleteRule(i);e.__svelte_rules={}})),S.clear())})))}function P(e){C=e}const O=[],N=[],L=[],D=[],M=Promise.resolve();let x=!1;function U(e){L.push(e)}let F=!1;const j=new Set;function B(){if(!F){F=!0;do{for(let e=0;e<O.length;e+=1){const t=O[e];P(t),V(t.$$)}for(P(null),O.length=0;N.length;)N.pop()();for(let e=0;e<L.length;e+=1){const t=L[e];j.has(t)||(j.add(t),t())}L.length=0}while(O.length);for(;D.length;)D.pop()();x=!1,F=!1,j.clear()}}function V(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}let H;function W(e,t,i){e.dispatchEvent(function(e,t,i=!1){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,i,!1,t),n}(`${t?"intro":"outro"}${i}`))}const G=new Set;let z;function K(){z={r:0,c:[],p:z}}function q(){z.r||r(z.c),z=z.p}function $(e,t){e&&e.i&&(G.delete(e),e.i(t))}function Y(e,t,i,n){if(e&&e.o){if(G.has(e))return;G.add(e),z.c.push((()=>{G.delete(e),n&&(i&&e.d(1),n())})),e.o(t)}}const J={duration:0};function X(i,n,s,o){let c=n(i,s),u=o?0:1,p=null,m=null,g=null;function v(){g&&R(i,g)}function b(e,t){const i=e.b-u;return t*=Math.abs(i),{a:u,b:e.b,d:i,duration:t,start:e.start,end:e.start+t,group:e.group}}function y(n){const{delay:a=0,duration:s=300,easing:o=t,tick:y=e,css:w}=c||J,I={start:l()+a,b:n};n||(I.group=z,z.r+=1),p||m?m=I:(w&&(v(),g=A(i,u,n,s,a,o,w)),n&&y(0,1),p=b(I,s),U((()=>W(i,n,"start"))),function(e){let t;0===h.size&&d(f),new Promise((i=>{h.add(t={c:e,f:i})}))}((e=>{if(m&&e>m.start&&(p=b(m,s),m=null,W(i,p.b,"start"),w&&(v(),g=A(i,u,p.b,p.duration,0,o,c.css))),p)if(e>=p.end)y(u=p.b,1-u),W(i,p.b,"end"),m||(p.b?v():--p.group.r||r(p.group.c)),p=null;else if(e>=p.start){const t=e-p.start;u=p.a+p.d*o(t/p.duration),y(u,1-u)}return!(!p&&!m)})))}return{run(e){a(c)?(H||(H=Promise.resolve(),H.then((()=>{H=null}))),H).then((()=>{c=c(),y(e)})):y(e)},end(){v(),p=m=null}}}function Z(e){e&&e.c()}function Q(e,t,n,s){const{fragment:o,on_mount:c,on_destroy:u,after_update:l}=e.$$;o&&o.m(t,n),s||U((()=>{const t=c.map(i).filter(a);u?u.push(...t):r(t),e.$$.on_mount=[]})),l.forEach(U)}function ee(e,t){const i=e.$$;null!==i.fragment&&(r(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function te(e,t){-1===e.$$.dirty[0]&&(O.push(e),x||(x=!0,M.then(B)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(t,i,a,s,o,c,u,l=[-1]){const d=C;P(t);const h=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:o,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:n(),dirty:l,skip_bound:!1,root:i.target||d.$$.root};u&&u(h.root);let f=!1;if(h.ctx=a?a(t,i.props||{},((e,i,...n)=>{const r=n.length?n[0]:i;return h.ctx&&o(h.ctx[e],h.ctx[e]=r)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](r),f&&te(t,e)),i})):[],h.update(),f=!0,r(h.before_update),h.fragment=!!s&&s(h.ctx),i.target){if(i.hydrate){const e=(p=i.target,Array.from(p.childNodes));h.fragment&&h.fragment.l(e),e.forEach(b)}else h.fragment&&h.fragment.c();i.intro&&$(t.$$.fragment),Q(t,i.target,i.anchor,i.customElement),B()}var p;P(d)}class ne{$destroy(){ee(this,1),this.$destroy=e}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const e=i.indexOf(t);-1!==e&&i.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function re(e,{delay:i=0,duration:n=400,easing:r=t}={}){const a=+getComputedStyle(e).opacity;return{delay:i,duration:n,easing:r,css:e=>"opacity: "+e*a}}
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
 */const ae={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<e.length;r+=3){const t=e[r],a=r+1<e.length,s=a?e[r+1]:0,o=r+2<e.length,c=o?e[r+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,h=63&c;o||(h=64,a||(d=64)),n.push(i[u],i[l],i[d],i[h])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){const t=[];let i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:r<2048?(t[i++]=r>>6|192,t[i++]=63&r|128):55296==(64512&r)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128,t[i++]=r>>6&63|128,t[i++]=63&r|128):(t[i++]=r>>12|224,t[i++]=r>>6&63|128,t[i++]=63&r|128)}return t}(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let i=0,n=0;for(;i<e.length;){const r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const a=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&a)}else if(r>239&&r<365){const a=((7&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{const a=e[i++],s=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&a)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<e.length;){const t=i[e.charAt(r++)],a=r<e.length?i[e.charAt(r)]:0;++r;const s=r<e.length?i[e.charAt(r)]:64;++r;const o=r<e.length?i[e.charAt(r)]:64;if(++r,null==t||null==a||null==s||null==o)throw Error();const c=t<<2|a>>4;if(n.push(c),64!==s){const e=a<<4&240|s>>2;if(n.push(e),64!==o){const e=s<<6&192|o;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};function se(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const i in t)t.hasOwnProperty(i)&&"__proto__"!==i&&(e[i]=se(e[i],t[i]));return e}
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
class oe{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,i))}}}
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
 */function ce(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ue(){try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}function le(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function de(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function he(){const e=ce();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function fe(){return"object"==typeof indexedDB}
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
 */class pe extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,me.prototype.create)}}class me{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],a=r?function(e,t){return e.replace(ge,((e,i)=>{const n=t[i];return null!=n?String(n):`<${i}?>`}))}(r,i):"Error",s=`${this.serviceName}: ${a} (${n}).`;return new pe(n,s,i)}}const ge=/\{\$([^}]+)}/g;
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
 */function ve(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function be(e,t){if(e===t)return!0;const i=Object.keys(e),n=Object.keys(t);for(const r of i){if(!n.includes(r))return!1;const i=e[r],a=t[r];if(ye(i)&&ye(a)){if(!be(i,a))return!1}else if(i!==a)return!1}for(const r of n)if(!i.includes(r))return!1;return!0}function ye(e){return null!==e&&"object"==typeof e}
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
 */function we(e){const t=[];for(const[i,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function Ie(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}})),t}function _e(e){const t=e.indexOf("?");if(!t)return"";const i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}function Ee(e,t){const i=new ke(e,t);return i.subscribe.bind(i)}class ke{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:i},void 0===n.next&&(n.next=Se),void 0===n.error&&(n.error=Se),void 0===n.complete&&(n.complete=Se);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(i){}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Se(){}
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
 */function Ce(e){return e&&e._delegate?e._delegate:e}class Te{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
class Ae{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new oe;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[e,i]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});i.resolve(e)}catch(t){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,a]of this.instancesDeferred.entries()){i===this.normalizeInstanceIdentifier(r)&&a.resolve(n)}return n}onInit(e,t){var i;const n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);const a=this.instances.get(n);return a&&e(a,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch(n){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,"[DEFAULT]"===n?void 0:n),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(r){}var n;return i||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Re{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ae(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */const Pe=[];var Oe,Ne;(Ne=Oe||(Oe={}))[Ne.DEBUG=0]="DEBUG",Ne[Ne.VERBOSE=1]="VERBOSE",Ne[Ne.INFO=2]="INFO",Ne[Ne.WARN=3]="WARN",Ne[Ne.ERROR=4]="ERROR",Ne[Ne.SILENT=5]="SILENT";const Le={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},De=Oe.INFO,Me={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},xe=(e,t,...i)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),r=Me[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${n}]  ${e.name}:`,...i)};class Ue{constructor(e){this.name=e,this._logLevel=De,this._logHandler=xe,this._userLogHandler=null,Pe.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Le[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}
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
class Fe{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const je="@firebase/app",Be=new Ue("@firebase/app"),Ve={[je]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},He=new Map,We=new Map;function Ge(e,t){try{e.container.addComponent(t)}catch(i){Be.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}function ze(e,t){e.container.addOrOverwriteComponent(t)}function Ke(e){const t=e.name;if(We.has(t))return Be.debug(`There were multiple attempts to register component ${t}.`),!1;We.set(t,e);for(const i of He.values())Ge(i,e);return!0}function qe(e,t){return e.container.getProvider(t)}
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
const $e=new me("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class Ye{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Te("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $e.create("app-deleted",{appName:this._name})}}
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
 */function Je(e,t={}){if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),n=i.name;if("string"!=typeof n||!n)throw $e.create("bad-app-name",{appName:String(n)});const r=He.get(n);if(r){if(be(e,r.options)&&be(i,r.config))return r;throw $e.create("duplicate-app",{appName:n})}const a=new Re(n);for(const o of We.values())a.addComponent(o);const s=new Ye(e,i,a);return He.set(n,s),s}function Xe(e="[DEFAULT]"){const t=He.get(e);if(!t)throw $e.create("no-app",{appName:e});return t}async function Ze(e){const t=e.name;He.has(t)&&(He.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Qe(e,t,i){var n;let r=null!==(n=Ve[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);const a=r.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${r}" with version "${t}":`];return a&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Be.warn(e.join(" "))}Ke(new Te(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}function et(e,t){if(null!==e&&"function"!=typeof e)throw $e.create("invalid-log-argument");!function(e,t){for(const i of Pe){let n=null;t&&t.level&&(n=Le[t.level]),i.userLogHandler=null===e?null:(t,i,...r)=>{const a=r.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");i>=(null!=n?n:t.logLevel)&&e({level:Oe[i].toLowerCase(),message:a,args:r,type:t.name})}}}(e,t)}function tt(e){var t;t=e,Pe.forEach((e=>{e.setLogLevel(t)}))}
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
 */var it;it="",Ke(new Te("platform-logger",(e=>new Fe(e)),"PRIVATE")),Qe(je,"0.7.10",it),Qe(je,"0.7.10","esm2017"),Qe("fire-js","");var nt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:"9.6.0",_DEFAULT_ENTRY_NAME:"[DEFAULT]",_addComponent:Ge,_addOrOverwriteComponent:ze,_apps:He,_clearComponents:function(){We.clear()},_components:We,_getProvider:qe,_registerComponent:Ke,_removeServiceInstance:function(e,t,i="[DEFAULT]"){qe(e,t).clearInstance(i)},deleteApp:Ze,getApp:Xe,getApps:function(){return Array.from(He.values())},initializeApp:Je,onLog:et,registerVersion:Qe,setLogLevel:tt,FirebaseError:pe});
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
function rt(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i}
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
Qe("firebase","9.6.0","app");const at="facebook.com",st="github.com",ot="google.com",ct="password",ut="twitter.com",lt="EMAIL_SIGNIN",dt="PASSWORD_RESET",ht="RECOVER_EMAIL",ft="REVERT_SECOND_FACTOR_ADDITION",pt="VERIFY_AND_CHANGE_EMAIL",mt="VERIFY_EMAIL";function gt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vt=
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
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}},bt=gt,yt=new me("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),wt=new Ue("@firebase/auth");function It(e,...t){wt.logLevel<=Oe.ERROR&&wt.error(`Auth (9.6.0): ${e}`,...t)}
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
 */function _t(e,...t){throw Ct(e,...t)}function Et(e,...t){return Ct(e,...t)}function kt(e,t,i){const n=Object.assign(Object.assign({},bt()),{[t]:i});return new me("auth","Firebase",n).create(t,{appName:e.name})}function St(e,t,i){if(!(t instanceof i))throw i.name!==t.constructor.name&&_t(e,"argument-error"),kt(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ct(e,...t){if("string"!=typeof e){const i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return yt.create(e,...t)}function Tt(e,t,...i){if(!e)throw Ct(t,...i)}function At(e){const t="INTERNAL ASSERTION FAILED: "+e;throw It(t),new Error(t)}function Rt(e,t){e||At(t)}
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
 */const Pt=new Map;function Ot(e){Rt(e instanceof Function,"Expected a class definition");let t=Pt.get(e);return t?(Rt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Pt.set(e,t),t)}
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
function Nt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Lt(){return"http:"===Dt()||"https:"===Dt()}function Dt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class Mt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rt(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ce())||de()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Lt()||le()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
 */function xt(e,t){Rt(e.emulator,"Emulator should always be set here");const{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}
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
 */class Ut{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Ft={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},jt=new Mt(3e4,6e4);
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
 */function Bt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Vt(e,t,i,n,r={}){return Ht(e,r,(()=>{let r={},a={};n&&("GET"===t?a=n:r={body:JSON.stringify(n)});const s=we(Object.assign({key:e.config.apiKey},a)).slice(1),o=new(Ut.headers());return o.set("Content-Type","application/json"),o.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&o.set("X-Firebase-Locale",e.languageCode),Ut.fetch()(Gt(e,e.config.apiHost,i,s),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},r))}))}async function Ht(e,t,i){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},Ft),t);try{const t=new zt(e),r=await Promise.race([i(),t.promise]);t.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Kt(e,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const t=r.ok?a.errorMessage:a.error.message,[i,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw Kt(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===i)throw Kt(e,"email-already-in-use",a);const o=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw kt(e,o,s);_t(e,o)}}catch(r){if(r instanceof pe)throw r;_t(e,"network-request-failed")}}async function Wt(e,t,i,n,r={}){const a=await Vt(e,t,i,n,r);return"mfaPendingCredential"in a&&_t(e,"multi-factor-auth-required",{_serverResponse:a}),a}function Gt(e,t,i,n){const r=`${t}${i}?${n}`;return e.config.emulator?xt(e.config,r):`${e.config.apiScheme}://${r}`}class zt{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Et(this.auth,"timeout"))),jt.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kt(e,t,i){const n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);const r=Et(e,t,n);return r.customData._tokenResponse=i,r}
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
function qt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function $t(e){return 1e3*Number(e)}function Yt(e){const[t,i,n]=e.split(".");if(void 0===t||void 0===i||void 0===n)return It("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return ae.decodeString(e,!0)}catch(t){}return null}(i);return e?JSON.parse(e):(It("Failed to decode base64 JWT payload"),null)}catch(r){return It("Caught error parsing JWT payload as JSON",r),null}}
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
async function Jt(e,t,i=!1){if(i)return t;try{return await t}catch(n){throw n instanceof pe&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(n)&&e.auth.currentUser===e&&await e.auth.signOut(),n}}class Xt{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
 */class Zt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qt(this.lastLoginAt),this.creationTime=qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Qt(e){var t;const i=e.auth,n=await e.getIdToken(),r=await Jt(e,async function(e,t){return Vt(e,"POST","/v1/accounts:lookup",t)}(i,{idToken:n}));Tt(null==r?void 0:r.users.length,i,"internal-error");const a=r.users[0];e._notifyReloadListener(a);const s=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?a.providerUserInfo.map((e=>{var{providerId:t}=e,i=rt(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})):[];const o=(c=e.providerData,u=s,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const l=e.isAnonymous,d=!(e.email&&a.passwordHash||(null==o?void 0:o.length)),h=!!l&&d,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new Zt(a.createdAt,a.lastLoginAt),isAnonymous:h};Object.assign(e,f)}
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
class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Tt(e.idToken,"internal-error"),Tt(void 0!==e.idToken,"internal-error"),Tt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Yt(e);return Tt(t,"internal-error"),Tt(void 0!==t.exp,"internal-error"),Tt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Tt(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:n,expiresIn:r}=await
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
async function(e,t){const i=await Ht(e,{},(()=>{const i=we({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,a=Gt(e,n,"/v1/token",`key=${r}`);return Ut.fetch()(a,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){const{refreshToken:i,accessToken:n,expirationTime:r}=t,a=new ei;return i&&(Tt("string"==typeof i,"internal-error",{appName:e}),a.refreshToken=i),n&&(Tt("string"==typeof n,"internal-error",{appName:e}),a.accessToken=n),r&&(Tt("number"==typeof r,"internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return At("not implemented")}}
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
 */function ti(e,t){Tt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ii{constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=rt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Xt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new Zt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Jt(this,this.stsTokenManager.getToken(this.auth,e));return Tt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const i=Ce(e),n=await i.getIdToken(t),r=Yt(n);Tt(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");const a="object"==typeof r.firebase?r.firebase:void 0,s=null==a?void 0:a.sign_in_provider;return{claims:r,token:n,authTime:qt($t(r.auth_time)),issuedAtTime:qt($t(r.iat)),expirationTime:qt($t(r.exp)),signInProvider:s||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ce(e);await Qt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Tt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Tt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Qt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jt(this,async function(e,t){return Vt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,a,s,o,c,u;const l=null!==(i=t.displayName)&&void 0!==i?i:void 0,d=null!==(n=t.email)&&void 0!==n?n:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(a=t.photoURL)&&void 0!==a?a:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:y,isAnonymous:w,providerData:I,stsTokenManager:_}=t;Tt(b&&_,e,"internal-error");const E=ei.fromJSON(this.name,_);Tt("string"==typeof b,e,"internal-error"),ti(l,e.name),ti(d,e.name),Tt("boolean"==typeof y,e,"internal-error"),Tt("boolean"==typeof w,e,"internal-error"),ti(h,e.name),ti(f,e.name),ti(p,e.name),ti(m,e.name),ti(g,e.name),ti(v,e.name);const k=new ii({uid:b,auth:e,email:d,emailVerified:y,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:v});return I&&Array.isArray(I)&&(k.providerData=I.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,i=!1){const n=new ei;n.updateFromServerResponse(t);const r=new ii({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return await Qt(r),r}}
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
 */class ni{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ni.type="NONE";const ri=ni;
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
 */function ai(e,t,i){return`firebase:${e}:${t}:${i}`}class si{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:n,name:r}=this.auth;this.fullUserKey=ai(this.userKey,n.apiKey,r),this.fullPersistenceKey=ai("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ii._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new si(Ot(ri),e,i);const n=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=n[0]||Ot(ri);const a=ai(i,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(a);if(t){const i=ii._fromJSON(e,t);u!==r&&(s=i),r=u;break}}catch(c){}const o=n.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&o.length?(r=o[0],s&&await r._set(a,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(a)}catch(c){}}))),new si(r,e,i)):new si(r,e,i)}}
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
 */function oi(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(di(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ci(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(fi(t))return"Blackberry";if(pi(t))return"Webos";if(ui(t))return"Safari";if((t.includes("chrome/")||li(t))&&!t.includes("edge/"))return"Chrome";if(hi(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(t);if(2===(null==i?void 0:i.length))return i[1]}return"Other"}function ci(e=ce()){return/firefox\//i.test(e)}function ui(e=ce()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function li(e=ce()){return/crios\//i.test(e)}function di(e=ce()){return/iemobile/i.test(e)}function hi(e=ce()){return/android/i.test(e)}function fi(e=ce()){return/blackberry/i.test(e)}function pi(e=ce()){return/webos/i.test(e)}function mi(e=ce()){return/iphone|ipad|ipod/i.test(e)}function gi(e=ce()){return mi(e)||hi(e)||pi(e)||fi(e)||/windows phone/i.test(e)||di(e)}
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
function vi(e,t=[]){let i;switch(e){case"Browser":i=oi(ce());break;case"Worker":i=`${oi(ce())}-${e}`;break;default:i=e}return`${i}/JsCore/9.6.0/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class bi{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wi(this),this.idTokenSubscription=new wi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ot(t)),this._initializationPromise=this.queue((async()=>{var i,n;this._deleted||(this.persistenceManager=await si.create(this,e),this._deleted||((null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==r||!(null==a?void 0:a.user)||(i=a.user)}return i?i._redirectEventId?(Tt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(i){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qt(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ce(e):null;return t&&Tt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Tt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ot(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new me("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ot(e)||this._popupRedirectResolver;Tt(t,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[Ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return Tt(a,this,"internal-error"),a.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,i,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Tt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function yi(e){return Ce(e)}class wi{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ee((e=>this.observer=e))}get next(){return Tt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ii(e,t,i){const n=yi(e);Tt(n._canInitEmulator,n,"emulator-config-failed"),Tt(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const r=!!(null==i?void 0:i.disableWarnings),a=_i(t),{host:s,port:o}=function(e){const t=_i(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};const n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const e=r[1];return{host:e,port:Ei(n.substr(e.length+1))}}{const[e,t]=n.split(":");return{host:e,port:Ei(t)}}}(t),c=null===o?"":`:${o}`;n.config.emulator={url:`${a}//${s}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:o,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function _i(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ei(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ki{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,t){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}
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
 */async function Si(e,t){return Vt(e,"POST","/v1/accounts:resetPassword",Bt(e,t))}async function Ci(e,t){return Vt(e,"POST","/v1/accounts:update",t)}async function Ti(e,t){return Vt(e,"POST","/v1/accounts:sendOobCode",Bt(e,t))}
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
class Ai extends ki{constructor(e,t,i,n=null){super("password",i),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new Ai(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ai(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return Wt(e,"POST","/v1/accounts:signInWithPassword",Bt(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return Wt(e,"POST","/v1/accounts:signInWithEmailLink",Bt(e,t))}(e,{email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ci(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Wt(e,"POST","/v1/accounts:signInWithEmailLink",Bt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:_t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Ri(e,t){return Wt(e,"POST","/v1/accounts:signInWithIdp",Bt(e,t))}
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
 */class Pi extends ki{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_t("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=rt(t,["providerId","signInMethod"]);if(!i||!n)return null;const a=new Pi(i,n);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){return Ri(e,this.buildRequest())}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ri(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ri(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=we(t)}return e}}
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
 */const Oi={USER_NOT_FOUND:"user-not-found"};
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
class Ni extends ki{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ni({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ni({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Wt(e,"POST","/v1/accounts:signInWithPhoneNumber",Bt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const i=await Wt(e,"POST","/v1/accounts:signInWithPhoneNumber",Bt(e,t));if(i.temporaryProof)throw Kt(e,"account-exists-with-different-credential",i);return i}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Wt(e,"POST","/v1/accounts:signInWithPhoneNumber",Bt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Oi)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}=e;return i||t||n||r?new Ni({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}}
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
 */class Li{constructor(e){var t,i,n,r,a,s;const o=Ie(_e(e)),c=null!==(t=o.apiKey)&&void 0!==t?t:null,u=null!==(i=o.oobCode)&&void 0!==i?i:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=o.mode)&&void 0!==n?n:null);Tt(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(r=o.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(a=o.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(s=o.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=Ie(_e(e)).link,i=t?Ie(_e(t)).deep_link_id:null,n=Ie(_e(e)).deep_link_id;return(n?Ie(_e(n)).link:null)||n||i||t||e}(e);try{return new Li(t)}catch(i){return null}}}
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
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,t){return Ai._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Li.parseLink(t);return Tt(i,"argument-error"),Ai._fromEmailAndCode(e,i.code,i.tenantId)}}Di.PROVIDER_ID="password",Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Mi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class xi extends Mi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ui extends xi{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return Tt("providerId"in t&&"signInMethod"in t,"argument-error"),Pi._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return Tt(e.idToken||e.accessToken,"argument-error"),Pi._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ui.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ui.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:n,pendingToken:r,nonce:a,providerId:s}=e;if(!(i||n||t||r))return null;if(!s)return null;try{return new Ui(s)._credential({idToken:t,accessToken:i,nonce:a,pendingToken:r})}catch(o){return null}}}
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
 */class Fi extends xi{constructor(){super("facebook.com")}static credential(e){return Pi._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Fi.credential(e.oauthAccessToken)}catch(t){return null}}}Fi.FACEBOOK_SIGN_IN_METHOD="facebook.com",Fi.PROVIDER_ID="facebook.com";
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
class ji extends xi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pi._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ji.credential(t,i)}catch(n){return null}}}ji.GOOGLE_SIGN_IN_METHOD="google.com",ji.PROVIDER_ID="google.com";
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
class Bi extends xi{constructor(){super("github.com")}static credential(e){return Pi._fromParams({providerId:Bi.PROVIDER_ID,signInMethod:Bi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bi.credentialFromTaggedObject(e)}static credentialFromError(e){return Bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Bi.credential(e.oauthAccessToken)}catch(t){return null}}}Bi.GITHUB_SIGN_IN_METHOD="github.com",Bi.PROVIDER_ID="github.com";class Vi extends ki{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return Ri(e,this.buildRequest())}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ri(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ri(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n,pendingToken:r}=t;return i&&n&&r&&i===n?new Vi(i,r):null}static _create(e,t){return new Vi(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
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
 */class Hi extends Mi{constructor(e){Tt(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return Hi.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Hi.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Vi.fromJSON(e);return Tt(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return Vi._create(i,t)}catch(n){return null}}}
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
 */class Wi extends xi{constructor(){super("twitter.com")}static credential(e,t){return Pi._fromParams({providerId:Wi.PROVIDER_ID,signInMethod:Wi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wi.credentialFromTaggedObject(e)}static credentialFromError(e){return Wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Wi.credential(t,i)}catch(n){return null}}}
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
async function Gi(e,t){return Wt(e,"POST","/v1/accounts:signUp",Bt(e,t))}
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
 */Wi.TWITTER_SIGN_IN_METHOD="twitter.com",Wi.PROVIDER_ID="twitter.com";class zi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,n=!1){const r=await ii._fromIdTokenResponse(e,i,n),a=Ki(i);return new zi({user:r,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const n=Ki(i);return new zi({user:e,providerId:n,_tokenResponse:i,operationType:t})}}function Ki(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class qi extends pe{constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,qi.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,n){return new qi(e,t,i,n)}}function $i(e,t,i,n){return("reauthenticate"===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e)).catch((i=>{if("auth/multi-factor-auth-required"===i.code)throw qi._fromErrorAndOperation(e,i,t,n);throw i}))}
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
 */function Yi(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
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
 */async function Ji(e,t){const i=Ce(e);await Zi(!0,i,t);const{providerUserInfo:n}=await async function(e,t){return Vt(e,"POST","/v1/accounts:update",t)}(i.auth,{idToken:await i.getIdToken(),deleteProvider:[t]}),r=Yi(n||[]);return i.providerData=i.providerData.filter((e=>r.has(e.providerId))),r.has("phone")||(i.phoneNumber=null),await i.auth._persistUserIfCurrent(i),i}async function Xi(e,t,i=!1){const n=await Jt(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return zi._forOperation(e,"link",n)}async function Zi(e,t,i){await Qt(t);const n=!1===e?"provider-already-linked":"no-such-provider";Tt(Yi(t.providerData).has(i)===e,t.auth,n)}
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
 */async function Qi(e,t,i=!1){const{auth:n}=e,r="reauthenticate";try{const a=await Jt(e,$i(n,r,t,e),i);Tt(a.idToken,n,"internal-error");const s=Yt(a.idToken);Tt(s,n,"internal-error");const{sub:o}=s;return Tt(e.uid===o,n,"user-mismatch"),zi._forOperation(e,r,a)}catch(a){throw"auth/user-not-found"===(null==a?void 0:a.code)&&_t(n,"user-mismatch"),a}}
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
 */async function en(e,t,i=!1){const n="signIn",r=await $i(e,n,t),a=await zi._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(a.user),a}async function tn(e,t){return en(yi(e),t)}async function nn(e,t){const i=Ce(e);return await Zi(!1,i,t.providerId),Xi(i,t)}async function rn(e,t){return Qi(Ce(e),t)}
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
async function an(e,t){const i=yi(e),n=await async function(e,t){return Wt(e,"POST","/v1/accounts:signInWithCustomToken",Bt(e,t))}(i,{token:t,returnSecureToken:!0}),r=await zi._fromIdTokenResponse(i,"signIn",n);return await i._updateCurrentUser(r.user),r}
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
 */class sn{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?on._fromServerResponse(e,t):_t(e,"internal-error")}}class on extends sn{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new on(t)}}
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
 */function cn(e,t,i){var n;Tt((null===(n=i.url)||void 0===n?void 0:n.length)>0,e,"invalid-continue-uri"),Tt(void 0===i.dynamicLinkDomain||i.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=i.url,t.dynamicLinkDomain=i.dynamicLinkDomain,t.canHandleCodeInApp=i.handleCodeInApp,i.iOS&&(Tt(i.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=i.iOS.bundleId),i.android&&(Tt(i.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=i.android.installApp,t.androidMinimumVersionCode=i.android.minimumVersion,t.androidPackageName=i.android.packageName)}
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
 */async function un(e,t,i){const n=Ce(e),r={requestType:"PASSWORD_RESET",email:t};i&&cn(n,r,i),await async function(e,t){return Ti(e,t)}(n,r)}async function ln(e,t){await async function(e,t){return Vt(e,"POST","/v1/accounts:update",Bt(e,t))}(Ce(e),{oobCode:t})}async function dn(e,t){const i=Ce(e),n=await Si(i,{oobCode:t}),r=n.requestType;switch(Tt(r,i,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":Tt(n.newEmail,i,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":Tt(n.mfaInfo,i,"internal-error");default:Tt(n.email,i,"internal-error")}let a=null;return n.mfaInfo&&(a=sn._fromServerResponse(yi(i),n.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.newEmail:n.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.email:n.newEmail)||null,multiFactorInfo:a},operation:r}}
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
async function hn(e,t,i){const n=Ce(e),r={requestType:"EMAIL_SIGNIN",email:t};Tt(i.handleCodeInApp,n,"argument-error"),i&&cn(n,r,i),await async function(e,t){return Ti(e,t)}(n,r)}
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
async function fn(e,t){const i={identifier:t,continueUri:Lt()?Nt():"http://localhost"},{signinMethods:n}=await
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
async function(e,t){return Vt(e,"POST","/v1/accounts:createAuthUri",Bt(e,t))}(Ce(e),i);return n||[]}async function pn(e,t){const i=Ce(e),n={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&cn(i.auth,n,t);const{email:r}=await async function(e,t){return Ti(e,t)}(i.auth,n);r!==e.email&&await e.reload()}async function mn(e,t,i){const n=Ce(e),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};i&&cn(n.auth,r,i);const{email:a}=await async function(e,t){return Ti(e,t)}(n.auth,r);a!==e.email&&await e.reload()}
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
async function gn(e,{displayName:t,photoURL:i}){if(void 0===t&&void 0===i)return;const n=Ce(e),r={idToken:await n.getIdToken(),displayName:t,photoUrl:i,returnSecureToken:!0},a=await Jt(n,async function(e,t){return Vt(e,"POST","/v1/accounts:update",t)}(n.auth,r));n.displayName=a.displayName||null,n.photoURL=a.photoUrl||null;const s=n.providerData.find((({providerId:e})=>"password"===e));s&&(s.displayName=n.displayName,s.photoURL=n.photoURL),await n._updateTokensIfNecessary(a)}function vn(e,t){return bn(Ce(e),t,null)}async function bn(e,t,i){const{auth:n}=e,r={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(r.email=t),i&&(r.password=i);const a=await Jt(e,Ci(n,r));await e._updateTokensIfNecessary(a,!0)}
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
 */class yn{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class wn extends yn{constructor(e,t,i,n){super(e,t,i),this.username=n}}class In extends yn{constructor(e,t){super(e,"facebook.com",t)}}class _n extends wn{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class En extends yn{constructor(e,t){super(e,"google.com",t)}}class kn extends wn{constructor(e,t,i){super(e,"twitter.com",t,i)}}function Sn(e){const{user:t,_tokenResponse:i}=e;return t.isAnonymous&&!i?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,i;if(!e)return null;const{providerId:n}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},a=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!n&&(null==e?void 0:e.idToken)){const n=null===(i=null===(t=Yt(e.idToken))||void 0===t?void 0:t.firebase)||void 0===i?void 0:i.sign_in_provider;if(n)return new yn(a,"anonymous"!==n&&"custom"!==n?n:null)}if(!n)return null;switch(n){case"facebook.com":return new In(a,r);case"github.com":return new _n(a,r);case"google.com":return new En(a,r);case"twitter.com":return new kn(a,r,e.screenName||null);case"custom":case"anonymous":return new yn(a,null);default:return new yn(a,n,r)}}(i)}function Cn(e,t,i,n){return Ce(e).onAuthStateChanged(t,i,n)}class Tn{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new Tn("enroll",e)}static _fromMfaPendingCredential(e){return new Tn("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Tn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(i=e.multiFactorSession)||void 0===i?void 0:i.idToken)return Tn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
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
 */class An{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=yi(e),n=t.customData._serverResponse,r=(n.mfaInfo||[]).map((e=>sn._fromServerResponse(i,e)));Tt(n.mfaPendingCredential,i,"internal-error");const a=Tn._fromMfaPendingCredential(n.mfaPendingCredential);return new An(a,r,(async e=>{const r=await e._process(i,a);delete n.mfaInfo,delete n.mfaPendingCredential;const s=Object.assign(Object.assign({},n),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await zi._fromIdTokenResponse(i,t.operationType,s);return await i._updateCurrentUser(e.user),e;case"reauthenticate":return Tt(t.user,i,"internal-error"),zi._forOperation(t.user,t.operationType,s);default:_t(i,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}class Rn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>sn._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Rn(e)}async getSession(){return Tn._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const i=e,n=await this.getSession(),r=await Jt(this.user,i._process(this.user.auth,n,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,i=await this.user.getIdToken(),n=await Jt(this.user,(r=this.user.auth,a={idToken:i,mfaEnrollmentId:t},Vt(r,"POST","/v2/accounts/mfaEnrollment:withdraw",Bt(r,a))));var r,a;this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(n);try{await this.user.reload()}catch(s){if("auth/user-token-expired"!==s.code)throw s}}}const Pn=new WeakMap;
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
class On{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class Nn extends On{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=ce();return ui(e)||mi(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=gi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,i)=>{this.notifyListeners(e,i)}));const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(i);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},r=this.storage.getItem(i);he()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const n of Array.from(i))n(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nn.type="LOCAL";const Ln=Nn;
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
 */class Dn extends On{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dn.type="SESSION";const Mn=Dn;
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
class xn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const i=new xn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:n,data:r}=t.data,a=this.handlersMap[n];if(!(null==a?void 0:a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const s=Array.from(a).map((async e=>e(t.origin,r))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(s);t.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Un(e="",t=10){let i="";for(let n=0;n<t;n++)i+=Math.floor(10*Math.random());return e+i}
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
 */xn.receivers=[];class Fn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,a;return new Promise(((s,o)=>{const c=Un("",20);n.port1.start();const u=setTimeout((()=>{o(new Error("unsupported_event"))}),i);a={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),s(t.data.response);break;default:clearTimeout(u),clearTimeout(r),o(new Error("invalid_response"))}}},this.handlers.add(a),n.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[n.port2])})).finally((()=>{a&&this.removeMessageHandler(a)}))}}
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
 */function jn(){return window}
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
function Bn(){return void 0!==jn().WorkerGlobalScope&&"function"==typeof jn().importScripts}
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
const Vn="firebaseLocalStorageDb";class Hn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Wn(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Gn(){const e=indexedDB.open(Vn,1);return new Promise(((t,i)=>{e.addEventListener("error",(()=>{i(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(n){i(n)}})),e.addEventListener("success",(async()=>{const i=e.result;i.objectStoreNames.contains("firebaseLocalStorage")?t(i):(i.close(),await function(){const e=indexedDB.deleteDatabase(Vn);return new Hn(e).toPromise()}(),t(await Gn()))}))}))}async function zn(e,t,i){const n=Wn(e,!0).put({fbase_key:t,value:i});return new Hn(n).toPromise()}function Kn(e,t){const i=Wn(e,!0).delete(t);return new Hn(i).toPromise()}class qn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Gn()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(i){if(t++>3)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xn._getInstance(Bn()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Fn(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gn();return await zn(e,"__sak","1"),await Kn(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((i=>zn(i,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const i=Wn(e,!1).get(t),n=await new Hn(i).toPromise();return void 0===n?null:n.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Kn(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Wn(e,!1).getAll();return new Hn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],i=new Set;for(const{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!i.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const n of Array.from(i))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}qn.type="LOCAL";const $n=qn;
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
 */function Yn(e){return new Promise(((t,i)=>{const n=document.createElement("script");
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
var r,a;n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=Et("internal-error");t.customData=e,i(t)},n.type="text/javascript",n.charset="UTF-8",(null!==(a=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==a?a:document).appendChild(n)}))}function Jn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
 */class Xn{constructor(e){this.auth=e,this.counter=1e12,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new Zn(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||1e12;null===(t=this._widgets.get(i))||void 0===t||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||1e12;return(null===(t=this._widgets.get(i))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const i=e||1e12;return null===(t=this._widgets.get(i))||void 0===t||t.execute(),""}}class Zn{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const n="string"==typeof e?document.getElementById(e):e;Tt(n,"argument-error",{appName:t}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],i="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<e;n++)t.push(i.charAt(Math.floor(Math.random()*i.length)));return t.join("")}
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
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(i){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(i){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const Qn=Jn("rcb"),er=new Mt(3e4,6e4);class tr{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!jn().grecaptcha}load(e,t=""){return Tt(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(jn().grecaptcha):new Promise(((i,n)=>{const r=jn().setTimeout((()=>{n(Et(e,"network-request-failed"))}),er.get());jn()[Qn]=()=>{jn().clearTimeout(r),delete jn()[Qn];const a=jn().grecaptcha;if(!a)return void n(Et(e,"internal-error"));const s=a.render;a.render=(e,t)=>{const i=s(e,t);return this.counter++,i},this.hostLanguage=t,i(a)};Yn(`https://www.google.com/recaptcha/api.js??${we({onload:Qn,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(r),n(Et(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!jn().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class ir{async load(e){return new Xn(e)}clearedOneInstance(){}}
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
 */const nr={theme:"light",type:"image"};class rr{constructor(e,t=Object.assign({},nr),i){this.parameters=t,this.type="recaptcha",this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=yi(i),this.isInvisible="invisible"===this.parameters.size,Tt("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const n="string"==typeof e?document.getElementById(e):e;Tt(n,this.auth,"argument-error"),this.container=n,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ir:new tr,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise((i=>{const n=e=>{e&&(this.tokenChangeListeners.delete(n),i(e))};this.tokenChangeListeners.add(n),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){Tt(!this.parameters.sitekey,this.auth,"argument-error"),Tt(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),Tt("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const i=jn()[e];"function"==typeof i&&i(t)}}}assertNotDestroyed(){Tt(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){Tt(Lt()&&!Bn(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
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
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await
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
async function(e){return(await Vt(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);Tt(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return Tt(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class ar{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Ni._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function sr(e,t,i){var n;const r=await i.verify();try{let a;if(Tt("string"==typeof r,e,"argument-error"),Tt("recaptcha"===i.type,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){const t=a.session;if("phoneNumber"in a){Tt("enroll"===t.type,e,"internal-error");const i=await
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
function(e,t){return Vt(e,"POST","/v2/accounts/mfaEnrollment:start",Bt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:r}});return i.phoneSessionInfo.sessionInfo}{Tt("signin"===t.type,e,"internal-error");const i=(null===(n=a.multiFactorHint)||void 0===n?void 0:n.uid)||a.multiFactorUid;Tt(i,e,"missing-multi-factor-info");const s=await function(e,t){return Vt(e,"POST","/v2/accounts/mfaSignIn:start",Bt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:r}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Vt(e,"POST","/v1/accounts:sendVerificationCode",Bt(e,t))}(e,{phoneNumber:a.phoneNumber,recaptchaToken:r});return t}}finally{i._reset()}}
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
class or{constructor(e){this.providerId=or.PROVIDER_ID,this.auth=yi(e)}verifyPhoneNumber(e,t){return sr(this.auth,e,Ce(t))}static credential(e,t){return Ni._fromVerification(e,t)}static credentialFromResult(e){const t=e;return or.credentialFromTaggedObject(t)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?Ni._fromTokenResponse(t,i):null}}
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
function cr(e,t){return t?Ot(t):(Tt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */or.PROVIDER_ID="phone",or.PHONE_SIGN_IN_METHOD="phone";class ur extends ki{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ri(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lr(e){return en(e.auth,new ur(e),e.bypassAuthState)}function dr(e){const{auth:t,user:i}=e;return Tt(i,t,"internal-error"),Qi(i,new ur(e),e.bypassAuthState)}async function hr(e){const{auth:t,user:i}=e;return Tt(i,t,"internal-error"),Xi(i,new ur(e),e.bypassAuthState)}
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
 */class fr{constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:a,type:s}=e;if(a)return void this.reject(a);const o={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(o))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lr;case"linkViaPopup":case"linkViaRedirect":return hr;case"reauthViaPopup":case"reauthViaRedirect":return dr;default:_t(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const pr=new Mt(2e3,1e4);class mr extends fr{constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Tt(e,this.auth,"internal-error"),e}async onExecution(){Rt(1===this.filter.length,"Popup operations only handle one event");const e=Un();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Et(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,pr.get())};e()}}mr.currentPopupAction=null;
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
const gr=new Map;class vr extends fr{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=gr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const i=wr(t),n=yr(e);if(!(await n._isAvailable()))return!1;const r="true"===await n._get(i);return await n._remove(i),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}gr.set(this.auth._key(),e)}return this.bypassAuthState||gr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function br(e,t){return yr(e)._set(wr(t),"true")}function yr(e){return Ot(e._redirectPersistence)}function wr(e){return ai("pendingRedirect",e.config.apiKey,e.name)}
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
 */function Ir(e,t,i){return async function(e,t,i){const n=yi(e);St(e,t,Mi);const r=cr(n,i);return await br(r,n),r._openRedirect(n,t,"signInViaRedirect")}(e,t,i)}function _r(e,t,i){return async function(e,t,i){const n=Ce(e);St(n.auth,t,Mi);const r=cr(n.auth,i);await br(r,n.auth);const a=await Sr(n);return r._openRedirect(n.auth,t,"reauthViaRedirect",a)}(e,t,i)}function Er(e,t,i){return async function(e,t,i){const n=Ce(e);St(n.auth,t,Mi);const r=cr(n.auth,i);await Zi(!1,n,t.providerId),await br(r,n.auth);const a=await Sr(n);return r._openRedirect(n.auth,t,"linkViaRedirect",a)}(e,t,i)}async function kr(e,t,i=!1){const n=yi(e),r=cr(n,t),a=new vr(n,r,i),s=await a.execute();return s&&!i&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,t)),s}async function Sr(e){const t=Un(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
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
 */class Cr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ar(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ar(e)){const n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(Et(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tr(e))}saveEventToCache(e){this.cachedEventUids.add(Tr(e)),this.lastProcessedEventTime=Date.now()}}function Tr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ar({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function Rr(e,t={}){return Vt(e,"GET","/v1/projects",t)}
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
 */const Pr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Or=/^https?/;function Nr(e){const t=Nt(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!Or.test(i))return!1;if(Pr.test(e))return n===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}
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
 */const Lr=new Mt(3e4,6e4);function Dr(){const e=jn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let i=0;i<e.CP.length;i++)e.CP[i]=null}let Mr=null;function xr(e){return Mr=Mr||function(e){return new Promise(((t,i)=>{var n,r,a;function s(){Dr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Dr(),i(Et(e,"network-request-failed"))},timeout:Lr.get()})}if(null===(r=null===(n=jn().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=jn().gapi)||void 0===a?void 0:a.load)){const t=Jn("iframefcb");return jn()[t]=()=>{gapi.load?s():i(Et(e,"network-request-failed"))},Yn(`https://apis.google.com/js/api.js?onload=${t}`)}s()}})).catch((e=>{throw Mr=null,e}))}(e),Mr}
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
 */const Ur=new Mt(5e3,15e3),Fr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Br(e){const t=e.config;Tt(t.authDomain,e,"auth-domain-config-required");const i=t.emulator?xt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:"9.6.0"},r=jr.get(e.config.apiHost);r&&(n.eid=r);const a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),`${i}?${we(n).slice(1)}`}
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
const Vr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Hr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Wr(e,t,i,n=500,r=600){const a=Math.max((window.screen.availHeight-r)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const c=Object.assign(Object.assign({},Vr),{width:n.toString(),height:r.toString(),top:a,left:s}),u=ce().toLowerCase();i&&(o=li(u)?"_blank":i),ci(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,i])=>`${e}${t}=${i},`),"");if(function(e=ce()){var t;return mi(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==o)return function(e,t){const i=document.createElement("a");i.href=e,i.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}
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
 */(t||"",o),new Hr(null);const d=window.open(t||"",o,l);Tt(d,e,"popup-blocked");try{d.focus()}catch(h){}return new Hr(d)}function Gr(e,t,i,n,r,a){Tt(e.config.authDomain,e,"auth-domain-config-required"),Tt(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:"9.6.0",eventId:r};if(t instanceof Mi){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))s[e]=t}if(t instanceof xi){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const o=s;for(const c of Object.keys(o))void 0===o[c]&&delete o[c];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return xt(e,"emulator/auth/handler")}
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
 */(e)}?${we(o).slice(1)}`}const zr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mn,this._completeRedirectFn=kr}async _openPopup(e,t,i,n){var r;Rt(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Wr(e,Gr(e,t,i,Nt(),n),Un())}async _openRedirect(e,t,i,n){var r;return await this._originValidation(e),r=Gr(e,t,i,Nt(),n),jn().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(Rt(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i}async initAndGetManager(e){const t=await async function(e){const t=await xr(e),i=jn().gapi;return Tt(i,e,"internal-error"),t.open({where:document.body,url:Br(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fr,dontclear:!0},(t=>new Promise((async(i,n)=>{await t.restyle({setHideOnLeave:!1});const r=Et(e,"network-request-failed"),a=jn().setTimeout((()=>{n(r)}),Ur.get());function s(){jn().clearTimeout(a),i(t)}t.ping(s).then(s,(()=>{n(r)}))}))))}(e),i=new Cr(e);return t.register("authEvent",(t=>{Tt(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:i.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(i=>{var n;const r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n.webStorageSupport;void 0!==r&&t(!!r),_t(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Rr(e);for(const n of t)try{if(Nr(n))return}catch(i){}_t(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gi()||ui()||mi()}};class Kr extends class{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return At("unexpected MultiFactorSessionType")}}}{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Kr(e)}_finalizeEnroll(e,t,i){return function(e,t){return Vt(e,"POST","/v2/accounts/mfaEnrollment:finalize",Bt(e,t))}(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return Vt(e,"POST","/v2/accounts/mfaSignIn:finalize",Bt(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class qr{constructor(){}static assertion(e){return Kr._fromCredential(e)}}qr.FACTOR_ID="phone";var $r;
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
class Yr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var i;e((null===(i=t)||void 0===i?void 0:i.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Tt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
function Jr(e=Xe()){const t=qe(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const i=qe(e,"auth");if(i.isInitialized()){const e=i.getImmediate();if(be(i.getOptions(),null!=t?t:{}))return e;_t(e,"already-initialized")}return i.initialize({options:t})}(e,{popupRedirectResolver:zr,persistence:[$n,Ln,Mn]})}$r="Browser",Ke(new Te("auth",((e,{options:t})=>{const i=e.getProvider("app").getImmediate(),{apiKey:n,authDomain:r}=i.options;return(e=>{Tt(n&&!n.includes(":"),"invalid-api-key",{appName:e.name}),Tt(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const i={apiKey:n,authDomain:r,clientPlatform:$r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vi($r)},a=new bi(e,i);return function(e,t){const i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(Ot);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,i)=>{e.getProvider("auth-internal").initialize()}))),Ke(new Te("auth-internal",(e=>{const t=yi(e.getProvider("auth").getImmediate());return new Yr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Qe("@firebase/auth","0.19.3",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}($r)),Qe("@firebase/auth","0.19.3","esm2017");
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
class Xr{constructor(e,t){this._delegate=e,this.firebase=t,Ge(e,new Te("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),Ze(this._delegate))))}_getService(e,t="[DEFAULT]"){var i;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null===(i=n.getComponent())||void 0===i?void 0:i.instantiationMode)||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t="[DEFAULT]"){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Ge(this._delegate,e)}_addOrOverwriteComponent(e){ze(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
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
 */const Zr=new me("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});const Qr=
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
function e(){const t=
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
function(e){const t={},i={__esModule:!0,initializeApp:function(n,r={}){const a=Je(n,r);if(ve(t,a.name))return t[a.name];const s=new e(a,i);return t[a.name]=s,s},app:n,registerVersion:Qe,setLogLevel:tt,onLog:et,apps:null,SDK_VERSION:"9.6.0",INTERNAL:{registerComponent:function(t){const r=t.name,a=r.replace("-compat","");if(Ke(t)&&"PUBLIC"===t.type){const s=(e=n())=>{if("function"!=typeof e[a])throw Zr.create("invalid-app-argument",{appName:r});return e[a]()};void 0!==t.serviceProps&&se(s,t.serviceProps),i[a]=s,e.prototype[a]=function(...e){return this._getService.bind(this,r).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?i[a]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:nt}};function n(e){if(!ve(t,e=e||"[DEFAULT]"))throw Zr.create("no-app",{appName:e});return t[e]}return i.default=i,Object.defineProperty(i,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),n.App=e,i}(Xr);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){se(t,e)},createSubscribe:Ee,ErrorFactory:me,deepExtend:se}),t}(),ea=new Ue("@firebase/app-compat");
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
if("object"==typeof self&&self.self===self&&void 0!==self.firebase){ea.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&ea.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const ta=Qr;!
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
function(e){Qe("@firebase/app-compat","0.1.11",e)}();
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
function ia(){return window}
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
ta.registerVersion("firebase","9.6.0","app-compat");async function na(e,t,i){var n;const{BuildInfo:r}=ia();Rt(t.sessionId,"AuthEvent did not contain a session ID");const a=await async function(e){const t=function(e){if(Rt(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),i=new Uint8Array(t);for(let n=0;n<e.length;n++)i[n]=e.charCodeAt(n);return i}
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
 */(e),i=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(i)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),s={};return mi()?s.ibi=r.packageName:hi()?s.apn=r.packageName:_t(e,"operation-not-supported-in-this-environment"),r.displayName&&(s.appDisplayName=r.displayName),s.sessionId=a,Gr(e,i,t.type,void 0,null!==(n=t.eventId)&&void 0!==n?n:void 0,s)}function ra(e){const{cordova:t}=ia();return new Promise((i=>{t.plugins.browsertab.isAvailable((n=>{let r=null;n?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,function(e=ce()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}()?"_blank":"_system","location=yes"),i(r)}))}))}class aa extends Cr{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}async function sa(e){const t=await ua()._get(la(e));return t&&await ua()._remove(la(e)),t}function oa(e,t){var i,n;const r=function(e){const t=da(e),i=t.link?decodeURIComponent(t.link):void 0,n=da(i).link,r=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return da(r).link||r||n||i||e}(t);if(r.includes("/__/auth/callback")){const t=da(r),a=t.firebaseError?function(e){try{return JSON.parse(e)}catch(t){return null}}(decodeURIComponent(t.firebaseError)):null,s=null===(n=null===(i=null==a?void 0:a.code)||void 0===i?void 0:i.split("auth/"))||void 0===n?void 0:n[1],o=s?Et(s):null;return o?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:o,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}function ca(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<20;i++){const i=Math.floor(Math.random()*t.length);e.push(t.charAt(i))}return e.join("")}function ua(){return Ot(Ln)}function la(e){return ai("authEvent",e.config.apiKey,e.name)}function da(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...i]=e.split("?");return Ie(i.join("?"))}
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
 */const ha=class{constructor(){this._redirectPersistence=Mn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=kr}async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new aa(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){_t(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,n){!function(e){var t,i,n,r,a,s,o,c,u,l;const d=ia();Tt("function"==typeof(null===(t=null==d?void 0:d.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),Tt(void 0!==(null===(i=null==d?void 0:d.BuildInfo)||void 0===i?void 0:i.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),Tt("function"==typeof(null===(a=null===(r=null===(n=null==d?void 0:d.cordova)||void 0===n?void 0:n.plugins)||void 0===r?void 0:r.browsertab)||void 0===a?void 0:a.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Tt("function"==typeof(null===(c=null===(o=null===(s=null==d?void 0:d.cordova)||void 0===s?void 0:s.plugins)||void 0===o?void 0:o.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Tt("function"==typeof(null===(l=null===(u=null==d?void 0:d.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),gr.clear(),await this._originValidation(e);const a=function(e,t,i=null){return{type:t,eventId:i,urlResponse:null,sessionId:ca(),postBody:null,tenantId:e.tenantId,error:Et(e,"no-auth-event")}}(e,i,n);await function(e,t){return ua()._set(la(e),t)}(e,a);const s=await na(e,a,t);return async function(e,t,i){const{cordova:n}=ia();let r=()=>{};try{await new Promise(((a,s)=>{let o=null;function c(){var e;a();const t=null===(e=n.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==i?void 0:i.close)&&i.close()}function u(){o||(o=window.setTimeout((()=>{s(Et(e,"redirect-cancelled-by-user"))}),2e3))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),hi()&&document.addEventListener("visibilitychange",l,!1),r=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),o&&window.clearTimeout(o)}}))}finally{r()}}(e,r,await ra(s))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=ia(),i={};mi()?i.iosBundleId=t.packageName:hi()?i.androidPackageName=t.packageName:_t(e,"operation-not-supported-in-this-environment"),await Rr(e,i)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:n,BuildInfo:r}=ia(),a=setTimeout((async()=>{await sa(e),t.onEvent(fa())}),500),s=async i=>{clearTimeout(a);const n=await sa(e);let r=null;n&&(null==i?void 0:i.url)&&(r=oa(n,i.url)),t.onEvent(r||fa())};void 0!==i&&"function"==typeof i.subscribe&&i.subscribe(null,s);const o=n,c=`${r.packageName.toLowerCase()}://`;ia().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&s({url:e}),"function"==typeof o)try{o(e)}catch(t){}}}};function fa(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Et("no-auth-event")}}
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
 */function pa(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function ma(e=ce()){return!("file:"!==pa()&&"ionic:"!==pa()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function ga(e=ce()){return he()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=ce()){return/Edge\/\d+/.test(e)}(e)}function va(){try{const e=self.localStorage,t=Un();if(e)return e.setItem(t,"1"),e.removeItem(t),!ga()||fe()}catch(e){return ba()&&fe()}return!1}function ba(){return"undefined"!=typeof global&&"WorkerGlobalScope"in global&&"importScripts"in global}function ya(){return("http:"===pa()||"https:"===pa()||le()||ma())&&!(de()||ue())&&va()&&!ba()}function wa(){return ma()&&"undefined"!=typeof document}
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
const Ia={LOCAL:"local",NONE:"none",SESSION:"session"},_a=Tt;async function Ea(e){await e._initializationPromise;const t=ka(),i=ai("persistence",e.config.apiKey,e.name);(null==t?void 0:t.sessionStorage)&&t.sessionStorage.setItem(i,e._getPersistence())}function ka(){return"undefined"!=typeof window?window:null}
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
 */const Sa=Tt;class Ca{constructor(){this.browserResolver=Ot(zr),this.cordovaResolver=Ot(ha),this.underlyingResolver=null,this._redirectPersistence=Mn,this._completeRedirectFn=kr}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,n)}async _openRedirect(e,t,i,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,n)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return wa()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Sa(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!wa()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
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
 */function Ta(e){return e.unwrap()}function Aa(e,t){var i;const n=null===(i=t.customData)||void 0===i?void 0:i._tokenResponse;if("auth/multi-factor-auth-required"===t.code){t.resolver=new Na(e,function(e,t){var i;const n=Ce(e),r=t;return Tt(t.customData.operationType,n,"argument-error"),Tt(null===(i=r.customData._serverResponse)||void 0===i?void 0:i.mfaPendingCredential,n,"argument-error"),An._fromError(n,r)}(e,t))}else if(n){const e=Ra(t),i=t;e&&(i.credential=e,i.tenantId=n.tenantId||void 0,i.email=n.email||void 0,i.phoneNumber=n.phoneNumber||void 0)}}function Ra(e){const{_tokenResponse:t}=e instanceof pe?e.customData:e;if(!t)return null;if(!(e instanceof pe)&&"temporaryProof"in t&&"phoneNumber"in t)return or.credentialFromResult(e);const i=t.providerId;if(!i||i===ct)return null;let n;switch(i){case ot:n=ji;break;case at:n=Fi;break;case st:n=Bi;break;case ut:n=Wi;break;default:const{oauthIdToken:e,oauthAccessToken:r,oauthTokenSecret:a,pendingToken:s,nonce:o}=t;return r||a||e||s?s?i.startsWith("saml.")?Vi._create(i,s):Pi._fromParams({providerId:i,signInMethod:i,pendingToken:s,idToken:e,accessToken:r}):new Ui(i).credential({idToken:e,accessToken:r,rawNonce:o}):null}return e instanceof pe?n.credentialFromError(e):n.credentialFromResult(e)}function Pa(e,t){return t.catch((t=>{throw t instanceof pe&&Aa(e,t),t})).then((e=>{const t=e.operationType,i=e.user;return{operationType:t,credential:(n=e,Ra(n)),additionalUserInfo:Sn(e),user:La.getOrCreate(i)};
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
var n}))}async function Oa(e,t){const i=await t;return{verificationId:i.verificationId,confirm:t=>Pa(e,i.confirm(t))}}class Na{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Pa(Ta(this.auth),this.resolver.resolveSignIn(e))}}
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
 */class La{constructor(e){this._delegate=e,this.multiFactor=function(e){const t=Ce(e);return Pn.has(t)||Pn.set(t,Rn._fromUser(t)),Pn.get(t)}(e)}static getOrCreate(e){return La.USER_MAP.has(e)||La.USER_MAP.set(e,new La(e)),La.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Pa(this.auth,nn(this._delegate,e))}async linkWithPhoneNumber(e,t){return Oa(this.auth,async function(e,t,i){const n=Ce(e);await Zi(!1,n,"phone");const r=await sr(n.auth,t,Ce(i));return new ar(r,(e=>nn(n,e)))}(this._delegate,e,t))}async linkWithPopup(e){return Pa(this.auth,async function(e,t,i){const n=Ce(e);St(n.auth,t,Mi);const r=cr(n.auth,i);return new mr(n.auth,"linkViaPopup",t,r,n).executeNotNull()}(this._delegate,e,Ca))}async linkWithRedirect(e){return await Ea(yi(this.auth)),Er(this._delegate,e,Ca)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Pa(this.auth,rn(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Oa(this.auth,async function(e,t,i){const n=Ce(e),r=await sr(n.auth,t,Ce(i));return new ar(r,(e=>rn(n,e)))}(this._delegate,e,t))}reauthenticateWithPopup(e){return Pa(this.auth,async function(e,t,i){const n=Ce(e);St(n.auth,t,Mi);const r=cr(n.auth,i);return new mr(n.auth,"reauthViaPopup",t,r,n).executeNotNull()}(this._delegate,e,Ca))}async reauthenticateWithRedirect(e){return await Ea(yi(this.auth)),_r(this._delegate,e,Ca)}sendEmailVerification(e){return pn(this._delegate,e)}async unlink(e){return await Ji(this._delegate,e),this}updateEmail(e){return vn(this._delegate,e)}updatePassword(e){return function(e,t){return bn(Ce(e),null,t)}(this._delegate,e)}updatePhoneNumber(e){return async function(e,t){await Xi(Ce(e),t)}(this._delegate,e)}updateProfile(e){return gn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return mn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}La.USER_MAP=new WeakMap;
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
const Da=Tt;class Ma{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:i}=e.options;Da(i,"invalid-api-key",{appName:e.name});let n=[ri];if("undefined"!=typeof window){n=function(e,t){const i=ka();if(!(null==i?void 0:i.sessionStorage))return[];const n=ai("persistence",e,t);switch(i.sessionStorage.getItem(n)){case Ia.NONE:return[ri];case Ia.LOCAL:return[$n,Mn];case Ia.SESSION:return[Mn];default:return[]}}(i,e.name);for(const e of[$n,Ln,Mn])n.includes(e)||n.push(e)}Da(i,"invalid-api-key",{appName:e.name});const r="undefined"!=typeof window?Ca:void 0;this._delegate=t.initialize({options:{persistence:n,popupRedirectResolver:r}}),this._delegate._updateErrorMap(vt),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?La.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Ii(this._delegate,e,t)}applyActionCode(e){return ln(this._delegate,e)}checkActionCode(e){return dn(this._delegate,e)}confirmPasswordReset(e,t){return async function(e,t,i){await Si(Ce(e),{oobCode:t,newPassword:i})}(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Pa(this._delegate,async function(e,t,i){const n=yi(e),r=await Gi(n,{returnSecureToken:!0,email:t,password:i}),a=await zi._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(a.user),a}(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return fn(this._delegate,e)}isSignInWithEmailLink(e){return function(e,t){const i=Li.parseLink(t);return"EMAIL_SIGNIN"===(null==i?void 0:i.operation)}(this._delegate,e)}async getRedirectResult(){Da(ya(),this._delegate,"operation-not-supported-in-this-environment");const e=await async function(e,t){return await yi(e)._initializationPromise,kr(e,t,!1)}(this._delegate,Ca);return e?Pa(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!function(e,t){yi(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:n,error:r,complete:a}=xa(e,t,i);return this._delegate.onAuthStateChanged(n,r,a)}onIdTokenChanged(e,t,i){const{next:n,error:r,complete:a}=xa(e,t,i);return this._delegate.onIdTokenChanged(n,r,a)}sendSignInLinkToEmail(e,t){return hn(this._delegate,e,t)}sendPasswordResetEmail(e,t){return un(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){_a(Object.values(Ia).includes(t),e,"invalid-persistence-type"),de()?_a(t!==Ia.SESSION,e,"unsupported-persistence-type"):ue()?_a(t===Ia.NONE,e,"unsupported-persistence-type"):ba()?_a(t===Ia.NONE||t===Ia.LOCAL&&fe(),e,"unsupported-persistence-type"):_a(t===Ia.NONE||va(),e,"unsupported-persistence-type")}(this._delegate,e),e){case Ia.SESSION:t=Mn;break;case Ia.LOCAL:t=await Ot($n)._isAvailable()?$n:Ln;break;case Ia.NONE:t=ri;break;default:return _t("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Pa(this._delegate,async function(e){var t;const i=yi(e);if(await i._initializationPromise,null===(t=i.currentUser)||void 0===t?void 0:t.isAnonymous)return new zi({user:i.currentUser,providerId:null,operationType:"signIn"});const n=await Gi(i,{returnSecureToken:!0}),r=await zi._fromIdTokenResponse(i,"signIn",n,!0);return await i._updateCurrentUser(r.user),r}(this._delegate))}signInWithCredential(e){return Pa(this._delegate,tn(this._delegate,e))}signInWithCustomToken(e){return Pa(this._delegate,an(this._delegate,e))}signInWithEmailAndPassword(e,t){return Pa(this._delegate,function(e,t,i){return tn(Ce(e),Di.credential(t,i))}(this._delegate,e,t))}signInWithEmailLink(e,t){return Pa(this._delegate,async function(e,t,i){const n=Ce(e),r=Di.credentialWithLink(t,i||Nt());return Tt(r._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),tn(n,r)}(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Oa(this._delegate,async function(e,t,i){const n=yi(e),r=await sr(n,t,Ce(i));return new ar(r,(e=>tn(n,e)))}(this._delegate,e,t))}async signInWithPopup(e){return Da(ya(),this._delegate,"operation-not-supported-in-this-environment"),Pa(this._delegate,async function(e,t,i){const n=yi(e);St(e,t,Mi);const r=cr(n,i);return new mr(n,"signInViaPopup",t,r).executeNotNull()}(this._delegate,e,Ca))}async signInWithRedirect(e){return Da(ya(),this._delegate,"operation-not-supported-in-this-environment"),await Ea(this._delegate),Ir(this._delegate,e,Ca)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return async function(e,t){const{data:i}=await dn(Ce(e),t);return i.email}(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function xa(e,t,i){let n=e;"function"!=typeof e&&({next:n,error:t,complete:i}=e);const r=n;return{next:e=>r(e&&La.getOrCreate(e)),error:t,complete:i}}
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
 */Ma.Persistence=Ia;class Ua{constructor(){this.providerId="phone",this._delegate=new or(Ta(ta.auth()))}static credential(e,t){return or.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Ua.PHONE_SIGN_IN_METHOD=or.PHONE_SIGN_IN_METHOD,Ua.PROVIDER_ID=or.PROVIDER_ID;
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
const Fa=Tt;class ja{constructor(e,t,i=ta.app()){var n;Fa(null===(n=i.options)||void 0===n?void 0:n.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new rr(e,t,i.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
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
 */var Ba;(Ba=ta).INTERNAL.registerComponent(new Te("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new Ma(t,i)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:lt,PASSWORD_RESET:dt,RECOVER_EMAIL:ht,REVERT_SECOND_FACTOR_ADDITION:ft,VERIFY_AND_CHANGE_EMAIL:pt,VERIFY_EMAIL:mt}},EmailAuthProvider:Di,FacebookAuthProvider:Fi,GithubAuthProvider:Bi,GoogleAuthProvider:ji,OAuthProvider:Ui,SAMLAuthProvider:Hi,PhoneAuthProvider:Ua,PhoneMultiFactorGenerator:qr,RecaptchaVerifier:ja,TwitterAuthProvider:Wi,Auth:Ma,AuthCredential:ki,Error:pe}).setInstantiationMode("LAZY").setMultipleInstances(!1)),Ba.registerVersion("@firebase/auth-compat","0.2.3");var Va,Ha={exports:{}};Va=Ha,function(){var e=window.CustomEvent;function t(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function i(e){e&&e.blur&&e!==document.body&&e.blur()}function n(e,t){for(var i=0;i<e.length;++i)if(e[i]===t)return!0;return!1}function r(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function a(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window)new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]});else{var t,i=!1,n=function(){i?this.downgradeModal():this.maybeHideModal(),i=!1}.bind(this),r=function(r){if(r.target===e){var a="DOMNodeRemoved";i|=r.type.substr(0,a.length)===a,window.clearTimeout(t),t=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,r)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}e&&"object"!=typeof e||((e=function(e,t){t=t||{};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),i}).prototype=window.Event.prototype),a.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),s.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var i=document.createEvent("MouseEvents");i.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(i),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}i(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!s.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");!function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),i=function(e,i){return!(void 0===t[e]||t[e]===i)};if(t.opacity<1||i("zIndex","auto")||i("transform","none")||i("mixBlendMode","normal")||i("filter","none")||i("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}}(this.dialog_.parentElement),this.setOpen(!0),this.openAsModal_=!0,s.needsCentering(this.dialog_)?(s.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(t){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==t&&(this.dialog_.returnValue=t);var i=new e("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(i)}};var s={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,i=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,i)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var i=document.styleSheets[t],r=null;try{r=i.cssRules}catch(l){}if(r)for(var a=0;a<r.length;++a){var s=r[a],o=null;try{o=document.querySelectorAll(s.selectorText)}catch(l){}if(o&&n(o,e)){var c=s.style.getPropertyValue("top"),u=s.style.getPropertyValue("bottom");if(c&&"auto"!==c||u&&"auto"!==u)return!0}}}return!1},needsCentering:function(e){return!("absolute"!==window.getComputedStyle(e).position||"auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom||s.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if(window.HTMLDialogElement||e.showModal,"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new a(e)},registerDialog:function(e){e.showModal||s.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var i=[];t.forEach((function(e){for(var t,n=0;t=e.removedNodes[n];++n)t instanceof Element&&("dialog"===t.localName&&i.push(t),i=i.concat(t.querySelectorAll("dialog")))})),i.length&&e(i)})))}};if(s.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},s.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},s.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,i=0;e=this.pendingDialogStack[i];++i)e.updateZIndex(--t,--t),0===i&&(this.overlay.style.zIndex=--t);var n=this.pendingDialogStack[0];n?(n.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},s.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=t(e);){for(var i,n=0;i=this.pendingDialogStack[n];++n)if(i.dialog===e)return 0===n;e=e.parentElement}return!1},s.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),i(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},s.DialogManager.prototype.handleKey_=function(t){if(this.forwardTab_=void 0,27===t.keyCode){t.preventDefault(),t.stopPropagation();var i=new e("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&n.dialog.dispatchEvent(i)&&n.dialog.close()}else 9===t.keyCode&&(this.forwardTab_=!t.shiftKey)},s.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},s.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t||(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),0))},s.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},s.dm=new s.DialogManager,s.formSubmitter=null,s.useValue=null,void 0===window.HTMLDialogElement){var o=document.createElement("form");if(o.setAttribute("method","dialog"),"dialog"!==o.method){var c=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(c){var u=c.get;c.get=function(){return r(this)?"dialog":u.call(this)};var l=c.set;c.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):l.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",c)}}document.addEventListener("click",(function(e){if(s.formSubmitter=null,s.useValue=null,!e.defaultPrevented){var i=e.target;if(i&&r(i.form)){if(!("submit"===i.type&&["button","input"].indexOf(i.localName)>-1)){if("input"!==i.localName||"image"!==i.type)return;s.useValue=e.offsetX+","+e.offsetY}t(i)&&(s.formSubmitter=i)}}}),!1);var d=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!r(this))return d.call(this);var e=t(this);e&&e.close()},document.addEventListener("submit",(function(e){var i=e.target;if(r(i)){e.preventDefault();var n=t(i);if(n){var a=s.formSubmitter;a&&a.form===i?n.close(s.useValue||a.value):n.close(),s.formSubmitter=null}}}),!0)}s.forceRegisterDialog=s.forceRegisterDialog,s.registerDialog=s.registerDialog,"object"==typeof Va.exports?Va.exports=s:window.dialogPolyfill=s}();var Wa,Ga,za,Ka,qa=Ha.exports,$a={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$a=function(){var e=[],t=[],i="mdlComponentConfigInternal_";function n(t,i){for(var n=0;n<e.length;n++)if(e[n].className===t)return void 0!==i&&(e[n]=i),e[n];return!1}function r(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function a(e,t){return-1!==r(e).indexOf(t)}function s(e,t,i){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:i});var n=document.createEvent("Events");return n.initEvent(e,t,i),n}function o(t,i){if(void 0===t&&void 0===i)for(var r=0;r<e.length;r++)o(e[r].className,e[r].cssClass);else{var a=t;if(void 0===i){var s=n(a);s&&(i=s.cssClass)}for(var u=document.querySelectorAll("."+i),l=0;l<u.length;l++)c(u[l],a)}}function c(o,c){if(!("object"==typeof o&&o instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var u=s("mdl-componentupgrading",!0,!0);if(o.dispatchEvent(u),!u.defaultPrevented){var l=r(o),d=[];if(c)a(o,c)||d.push(n(c));else{var h=o.classList;e.forEach((function(e){h.contains(e.cssClass)&&-1===d.indexOf(e)&&!a(o,e.className)&&d.push(e)}))}for(var f,p=0,m=d.length;p<m;p++){if(!(f=d[p]))throw new Error("Unable to find a registered component for the given class.");l.push(f.className),o.setAttribute("data-upgraded",l.join(","));var g=new f.classConstructor(o);g[i]=f,t.push(g);for(var v=0,b=f.callbacks.length;v<b;v++)f.callbacks[v](o);f.widget&&(o[f.className]=g);var y=s("mdl-componentupgraded",!0,!1);o.dispatchEvent(y)}}}function u(e){if(e){var n=t.indexOf(e);t.splice(n,1);var r=e.element_.getAttribute("data-upgraded").split(","),a=r.indexOf(e[i].classAsString);r.splice(a,1),e.element_.setAttribute("data-upgraded",r.join(","));var o=s("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(o)}}return{upgradeDom:o,upgradeElement:c,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var i,n=0,r=t.length;n<r;n++)(i=t[n])instanceof HTMLElement&&(c(i),i.children.length>0&&e(i.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)o(e[t].className)},registerUpgradedCallback:function(e,t){var i=n(e);i&&i.callbacks.push(t)},register:function(t){var r=!0;void 0===t.widget&&void 0===t.widget||(r=t.widget||t.widget);var a={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:r,callbacks:[]};if(e.forEach((function(e){if(e.cssClass===a.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===a.className)throw new Error("The provided className has already been registered")})),t.constructor.prototype.hasOwnProperty(i))throw new Error("MDL component classes must not have mdlComponentConfigInternal_ defined as a property.");n(t.classAsString,a)||e.push(a)},downgradeElements:function(e){var i=function(e){t.filter((function(t){return t.element_===e})).forEach(u)};if(e instanceof Array||e instanceof NodeList)for(var n=0;n<e.length;n++)i(e[n]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");i(e)}}}}(),$a.ComponentConfigPublic,$a.ComponentConfig,$a.Component,$a.upgradeDom=$a.upgradeDom,$a.upgradeElement=$a.upgradeElement,$a.upgradeElements=$a.upgradeElements,$a.upgradeAllRegistered=$a.upgradeAllRegistered,$a.registerUpgradedCallback=$a.registerUpgradedCallback,$a.register=$a.register,$a.downgradeElements=$a.downgradeElements,window.componentHandler=$a,window.componentHandler=$a,window.addEventListener("load",(function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),$a.upgradeAllRegistered()):($a.upgradeElement=function(){},$a.register=function(){})})),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Wa=function(e){this.element_=e,this.init()},window.MaterialButton=Wa,Wa.prototype.Constant_={},Wa.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},Wa.prototype.blurHandler_=function(e){e&&this.element_.blur()},Wa.prototype.disable=function(){this.element_.disabled=!0},Wa.prototype.disable=Wa.prototype.disable,Wa.prototype.enable=function(){this.element_.disabled=!1},Wa.prototype.enable=Wa.prototype.enable,Wa.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:Wa,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0}),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ga=function(e){this.element_=e,this.init()},window.MaterialProgress=Ga,Ga.prototype.Constant_={},Ga.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},Ga.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},Ga.prototype.setProgress=Ga.prototype.setProgress,Ga.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},Ga.prototype.setBuffer=Ga.prototype.setBuffer,Ga.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,(e=document.createElement("div")).className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,(e=document.createElement("div")).className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:Ga,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0}),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
za=function(e){this.element_=e,this.init()},window.MaterialSpinner=za,za.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},za.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},za.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),i.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),r.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var a=[i,n,r],s=0;s<a.length;s++){var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),a[s].appendChild(o)}t.appendChild(i),t.appendChild(n),t.appendChild(r),this.element_.appendChild(t)},za.prototype.createLayer=za.prototype.createLayer,za.prototype.stop=function(){this.element_.classList.remove("is-active")},za.prototype.stop=za.prototype.stop,za.prototype.start=function(){this.element_.classList.add("is-active")},za.prototype.start=za.prototype.start,za.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:za,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0}),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ka=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()},window.MaterialTextfield=Ka,Ka.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},Ka.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},Ka.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},Ka.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},Ka.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},Ka.prototype.onReset_=function(e){this.updateClasses_()},Ka.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},Ka.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},Ka.prototype.checkDisabled=Ka.prototype.checkDisabled,Ka.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},Ka.prototype.checkFocus=Ka.prototype.checkFocus,Ka.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},Ka.prototype.checkValidity=Ka.prototype.checkValidity,Ka.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},Ka.prototype.checkDirty=Ka.prototype.checkDirty,Ka.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},Ka.prototype.disable=Ka.prototype.disable,Ka.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},Ka.prototype.enable=Ka.prototype.enable,Ka.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},Ka.prototype.change=Ka.prototype.change,Ka.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:Ka,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0}),function(){(function(){var e,t,i="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t};if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var n;e:{var r={};try{r.__proto__={xb:!0},n=r.xb;break e}catch(Je){}n=!1}t=n?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var a=t;function s(e,t){if(e.prototype=i(t.prototype),e.prototype.constructor=e,a)a(e,t);else for(var n in t)if("prototype"!=n)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r)}else e[n]=t[n];e.K=t.prototype}var o="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,i){e!=Array.prototype&&e!=Object.prototype&&(e[t]=i.value)},c="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function u(e,t){if(t){var i=c;e=e.split(".");for(var n=0;n<e.length-1;n++){var r=e[n];r in i||(i[r]={}),i=i[r]}(t=t(n=i[e=e[e.length-1]]))!=n&&null!=t&&o(i,e,{configurable:!0,writable:!0,value:t})}}u("Object.is",(function(e){return e||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}})),u("Array.prototype.includes",(function(e){return e||function(e,t){var i=this;i instanceof String&&(i=String(i));var n=i.length;for(0>(t=t||0)&&(t=Math.max(t+n,0));t<n;t++){var r=i[t];if(r===e||Object.is(r,e))return!0}return!1}}));var l=this;function d(e){return void 0!==e}function h(e){return"string"==typeof e}var f=/^[\w+/_-]+[=]{0,2}$/,p=null;function m(){}function g(e){e.W=void 0,e.Xa=function(){return e.W?e.W:e.W=new e}}function v(e){var t=typeof e;if("object"==t){if(!e)return"null";if(e instanceof Array)return"array";if(e instanceof Object)return t;var i=Object.prototype.toString.call(e);if("[object Window]"==i)return"object";if("[object Array]"==i||"number"==typeof e.length&&void 0!==e.splice&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("splice"))return"array";if("[object Function]"==i||void 0!==e.call&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("call"))return"function"}else if("function"==t&&void 0===e.call)return"object";return t}function b(e){return"array"==v(e)}function y(e){var t=v(e);return"array"==t||"object"==t&&"number"==typeof e.length}function w(e){return"function"==v(e)}function I(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var _="closure_uid_"+(1e9*Math.random()>>>0),E=0;function k(e,t,i){return e.call.apply(e.bind,arguments)}function S(e,t,i){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function C(e,t,i){return(C=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?k:S).apply(null,arguments)}function T(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function A(e,t){for(var i in t)e[i]=t[i]}var R,P=Date.now||function(){return+new Date};function O(e,t){e=e.split(".");var i,n=l;e[0]in n||void 0===n.execScript||n.execScript("var "+e[0]);for(;e.length&&(i=e.shift());)!e.length&&d(t)?n[i]=t:n=n[i]&&n[i]!==Object.prototype[i]?n[i]:n[i]={}}function N(e,t){function i(){}i.prototype=t.prototype,e.K=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.vc=function(e,i,n){for(var r=Array(arguments.length-2),a=2;a<arguments.length;a++)r[a-2]=arguments[a];return t.prototype[i].apply(e,r)}}function L(e){if(Error.captureStackTrace)Error.captureStackTrace(this,L);else{var t=Error().stack;t&&(this.stack=t)}e&&(this.message=String(e))}function D(e,t){for(var i="",n=(e=e.split("%s")).length-1,r=0;r<n;r++)i+=e[r]+(r<t.length?t[r]:"%s");L.call(this,i+e[n])}function M(e,t){throw new D("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1))}N(L,Error),L.prototype.name="CustomError",N(D,L),D.prototype.name="AssertionError";var x=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(h(e))return h(t)&&1==t.length?e.indexOf(t,0):-1;for(var i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return-1},U=Array.prototype.forEach?function(e,t,i){Array.prototype.forEach.call(e,t,i)}:function(e,t,i){for(var n=e.length,r=h(e)?e.split(""):e,a=0;a<n;a++)a in r&&t.call(i,r[a],a,e)};var F=Array.prototype.filter?function(e,t){return Array.prototype.filter.call(e,t,void 0)}:function(e,t){for(var i=e.length,n=[],r=0,a=h(e)?e.split(""):e,s=0;s<i;s++)if(s in a){var o=a[s];t.call(void 0,o,s,e)&&(n[r++]=o)}return n},j=Array.prototype.map?function(e,t){return Array.prototype.map.call(e,t,void 0)}:function(e,t){for(var i=e.length,n=Array(i),r=h(e)?e.split(""):e,a=0;a<i;a++)a in r&&(n[a]=t.call(void 0,r[a],a,e));return n},B=Array.prototype.some?function(e,t){return Array.prototype.some.call(e,t,void 0)}:function(e,t){for(var i=e.length,n=h(e)?e.split(""):e,r=0;r<i;r++)if(r in n&&t.call(void 0,n[r],r,e))return!0;return!1};function V(e,t){return 0<=x(e,t)}function H(e,t){var i;return(i=0<=(t=x(e,t)))&&W(e,t),i}function W(e,t){return 1==Array.prototype.splice.call(e,t,1).length}function G(e,t){!function(e,t){for(var i=h(e)?e.split(""):e,n=e.length-1;0<=n;--n)n in i&&t.call(void 0,i[n],n,e)}(e,(function(i,n){t.call(void 0,i,n,e)&&W(e,n)&&0}))}function z(e){return Array.prototype.concat.apply([],arguments)}function K(e){var t=e.length;if(0<t){for(var i=Array(t),n=0;n<t;n++)i[n]=e[n];return i}return[]}function q(e,t,i){return 2>=arguments.length?Array.prototype.slice.call(e,t):Array.prototype.slice.call(e,t,i)}var $=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]},Y=/&/g,J=/</g,X=/>/g,Z=/"/g,Q=/'/g,ee=/\x00/g,te=/[\x00&<>"']/;function ie(e,t){return e<t?-1:e>t?1:0}function ne(e){return te.test(e)&&(-1!=e.indexOf("&")&&(e=e.replace(Y,"&amp;")),-1!=e.indexOf("<")&&(e=e.replace(J,"&lt;")),-1!=e.indexOf(">")&&(e=e.replace(X,"&gt;")),-1!=e.indexOf('"')&&(e=e.replace(Z,"&quot;")),-1!=e.indexOf("'")&&(e=e.replace(Q,"&#39;")),-1!=e.indexOf("\0")&&(e=e.replace(ee,"&#0;"))),e}function re(e,t,i){for(var n in e)t.call(i,e[n],n,e)}function ae(e){var t,i={};for(t in e)i[t]=e[t];return i}var se="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oe(e,t){for(var i,n,r=1;r<arguments.length;r++){for(i in n=arguments[r])e[i]=n[i];for(var a=0;a<se.length;a++)i=se[a],Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}}var ce="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""};function ue(){}function le(e){if(e instanceof ue)return e;if("function"==typeof e.ha)return e.ha(!1);if(y(e)){var t=0,i=new ue;return i.next=function(){for(;;){if(t>=e.length)throw ce;if(t in e)return e[t++];t++}},i}throw Error("Not implemented")}function de(e){if(y(e))return K(e);e=le(e);var t=[];return function(e,t){if(y(e))try{U(e,t,void 0)}catch(Lt){if(Lt!==ce)throw Lt}else{e=le(e);try{for(;;)t.call(void 0,e.next(),void 0,e)}catch(i){if(i!==ce)throw i}}}(e,(function(e){t.push(e)})),t}function he(e,t){this.g={},this.a=[],this.j=this.h=0;var i=arguments.length;if(1<i){if(i%2)throw Error("Uneven number of arguments");for(var n=0;n<i;n+=2)this.set(arguments[n],arguments[n+1])}else if(e)if(e instanceof he)for(i=e.ja(),n=0;n<i.length;n++)this.set(i[n],e.get(i[n]));else for(n in e)this.set(n,e[n])}function fe(e){if(e.h!=e.a.length){for(var t=0,i=0;t<e.a.length;){var n=e.a[t];pe(e.g,n)&&(e.a[i++]=n),t++}e.a.length=i}if(e.h!=e.a.length){var r={};for(i=t=0;t<e.a.length;)pe(r,n=e.a[t])||(e.a[i++]=n,r[n]=1),t++;e.a.length=i}}function pe(e,t){return Object.prototype.hasOwnProperty.call(e,t)}ue.prototype.next=function(){throw ce},ue.prototype.ha=function(){return this},(e=he.prototype).la=function(){fe(this);for(var e=[],t=0;t<this.a.length;t++)e.push(this.g[this.a[t]]);return e},e.ja=function(){return fe(this),this.a.concat()},e.clear=function(){this.g={},this.j=this.h=this.a.length=0},e.get=function(e,t){return pe(this.g,e)?this.g[e]:t},e.set=function(e,t){pe(this.g,e)||(this.h++,this.a.push(e),this.j++),this.g[e]=t},e.forEach=function(e,t){for(var i=this.ja(),n=0;n<i.length;n++){var r=i[n],a=this.get(r);e.call(t,a,r,this)}},e.ha=function(e){fe(this);var t=0,i=this.j,n=this,r=new ue;return r.next=function(){if(i!=n.j)throw Error("The map has changed since the iterator was created");if(t>=n.a.length)throw ce;var r=n.a[t++];return e?r:n.g[r]},r};var me=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ge(e,t,i,n){for(var r=i.length;0<=(t=e.indexOf(i,t))&&t<n;){var a=e.charCodeAt(t-1);if(!(38!=a&&63!=a||(a=e.charCodeAt(t+r))&&61!=a&&38!=a&&35!=a))return t;t+=r+1}return-1}var ve=/#|$/;function be(e,t){var i=e.search(ve),n=ge(e,0,t,i);if(0>n)return null;var r=e.indexOf("&",n);return(0>r||r>i)&&(r=i),n+=t.length+1,decodeURIComponent(e.substr(n,r-n).replace(/\+/g," "))}var ye=/[?&]($|#)/;function we(e,t){var i;this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1,e instanceof we?(this.i=d(t)?t:e.i,Ie(this,e.j),this.A=e.A,this.h=e.h,_e(this,e.C),this.g=e.g,Ee(this,Ue(e.a)),this.s=e.s):e&&(i=String(e).match(me))?(this.i=!!t,Ie(this,i[1]||"",!0),this.A=Se(i[2]||""),this.h=Se(i[3]||"",!0),_e(this,i[4]),this.g=Se(i[5]||"",!0),Ee(this,i[6]||"",!0),this.s=Se(i[7]||"")):(this.i=!!t,this.a=new Le(null,this.i))}function Ie(e,t,i){e.j=i?Se(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function _e(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.C=t}else e.C=null}function Ee(e,t,i){t instanceof Le?(e.a=t,function(e,t){t&&!e.j&&(De(e),e.h=null,e.a.forEach((function(e,t){var i=t.toLowerCase();t!=i&&(Me(this,t),Me(this,i),0<e.length&&(this.h=null,this.a.set(Fe(this,i),K(e)),this.g+=e.length))}),e)),e.j=t}(e.a,e.i)):(i||(t=Ce(t,Oe)),e.a=new Le(t,e.i))}function ke(e){return e instanceof we?new we(e):new we(e,void 0)}function Se(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ce(e,t,i){return h(e)?(e=encodeURI(e).replace(t,Te),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Te(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}we.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ce(t,Ae,!0),":");var i=this.h;return(i||"file"==t)&&(e.push("//"),(t=this.A)&&e.push(Ce(t,Ae,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.C)&&e.push(":",String(i))),(i=this.g)&&(this.h&&"/"!=i.charAt(0)&&e.push("/"),e.push(Ce(i,"/"==i.charAt(0)?Pe:Re,!0))),(i=this.a.toString())&&e.push("?",i),(i=this.s)&&e.push("#",Ce(i,Ne)),e.join("")};var Ae=/[#\/\?@]/g,Re=/[#\?:]/g,Pe=/[#\?]/g,Oe=/[#\?@]/g,Ne=/#/g;function Le(e,t){this.g=this.a=null,this.h=e||null,this.j=!!t}function De(e){e.a||(e.a=new he,e.g=0,e.h&&function(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var n=e[i].indexOf("="),r=null;if(0<=n){var a=e[i].substring(0,n);r=e[i].substring(n+1)}else a=e[i];t(a,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.h,(function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)})))}function Me(e,t){De(e),t=Fe(e,t),pe(e.a.g,t)&&(e.h=null,e.g-=e.a.get(t).length,pe((e=e.a).g,t)&&(delete e.g[t],e.h--,e.j++,e.a.length>2*e.h&&fe(e)))}function xe(e,t){return De(e),t=Fe(e,t),pe(e.a.g,t)}function Ue(e){var t=new Le;return t.h=e.h,e.a&&(t.a=new he(e.a),t.g=e.g),t}function Fe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function je(e){this.a=ke(e)}function Be(e){return e.a.a.get(We.Pa)||null}function Ve(e,t){t?e.a.a.set(We.PROVIDER_ID,t):Me(e.a.a,We.PROVIDER_ID)}(e=Le.prototype).add=function(e,t){De(this),this.h=null,e=Fe(this,e);var i=this.a.get(e);return i||this.a.set(e,i=[]),i.push(t),this.g+=1,this},e.clear=function(){this.a=this.h=null,this.g=0},e.forEach=function(e,t){De(this),this.a.forEach((function(i,n){U(i,(function(i){e.call(t,i,n,this)}),this)}),this)},e.ja=function(){De(this);for(var e=this.a.la(),t=this.a.ja(),i=[],n=0;n<t.length;n++)for(var r=e[n],a=0;a<r.length;a++)i.push(t[n]);return i},e.la=function(e){De(this);var t=[];if(h(e))xe(this,e)&&(t=z(t,this.a.get(Fe(this,e))));else{e=this.a.la();for(var i=0;i<e.length;i++)t=z(t,e[i])}return t},e.set=function(e,t){return De(this),this.h=null,xe(this,e=Fe(this,e))&&(this.g-=this.a.get(e).length),this.a.set(e,[t]),this.g+=1,this},e.get=function(e,t){return e&&0<(e=this.la(e)).length?String(e[0]):t},e.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var e=[],t=this.a.ja(),i=0;i<t.length;i++){var n=t[i],r=encodeURIComponent(String(n));n=this.la(n);for(var a=0;a<n.length;a++){var s=r;""!==n[a]&&(s+="="+encodeURIComponent(String(n[a]))),e.push(s)}}return this.h=e.join("&")},je.prototype.toString=function(){return this.a.toString()};var He,We={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"};e:{var Ge=l.navigator;if(Ge){var ze=Ge.userAgent;if(ze){He=ze;break e}}He=""}function Ke(e){return-1!=He.indexOf(e)}function qe(){return(Ke("Chrome")||Ke("CriOS"))&&!Ke("Edge")}function $e(e){return $e[" "](e),e}$e[" "]=m;var Ye,Je,Xe=Ke("Opera"),Ze=Ke("Trident")||Ke("MSIE"),Qe=Ke("Edge"),et=Qe||Ze,tt=Ke("Gecko")&&!(-1!=He.toLowerCase().indexOf("webkit")&&!Ke("Edge"))&&!(Ke("Trident")||Ke("MSIE"))&&!Ke("Edge"),it=-1!=He.toLowerCase().indexOf("webkit")&&!Ke("Edge"),nt=it&&Ke("Mobile"),rt=Ke("Macintosh");function at(){var e=l.document;return e?e.documentMode:void 0}e:{var st="",ot=(Je=He,tt?/rv:([^\);]+)(\)|;)/.exec(Je):Qe?/Edge\/([\d\.]+)/.exec(Je):Ze?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Je):it?/WebKit\/(\S+)/.exec(Je):Xe?/(?:Version)[ \/]?(\S+)/.exec(Je):void 0);if(ot&&(st=ot?ot[1]:""),Ze){var ct=at();if(null!=ct&&ct>parseFloat(st)){Ye=String(ct);break e}}Ye=st}var ut,lt={};function dt(e){return function(e,t){var i=lt;return Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=t(e)}(e,(function(){for(var t=0,i=$(String(Ye)).split("."),n=$(String(e)).split("."),r=Math.max(i.length,n.length),a=0;0==t&&a<r;a++){var s=i[a]||"",o=n[a]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;t=ie(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||ie(0==s[2].length,0==o[2].length)||ie(s[2],o[2]),s=s[3],o=o[3]}while(0==t)}return 0<=t}))}var ht=l.document;function ft(e,t){this.a=e===mt&&t||"",this.g=pt}ut=ht&&Ze?at()||("CSS1Compat"==ht.compatMode?parseInt(Ye,10):5):void 0,ft.prototype.ma=!0,ft.prototype.ka=function(){return this.a},ft.prototype.toString=function(){return"Const{"+this.a+"}"};var pt={},mt={};function gt(){this.a="",this.h=bt}function vt(e){return e instanceof gt&&e.constructor===gt&&e.h===bt?e.a:(M("expected object of type TrustedResourceUrl, got '"+e+"' of type "+v(e)),"type_error:TrustedResourceUrl")}gt.prototype.ma=!0,gt.prototype.ka=function(){return this.a.toString()},gt.prototype.g=function(){return 1},gt.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var bt={};function yt(){this.a="",this.h=kt}function wt(e){return e instanceof yt&&e.constructor===yt&&e.h===kt?e.a:(M("expected object of type SafeUrl, got '"+e+"' of type "+v(e)),"type_error:SafeUrl")}yt.prototype.ma=!0,yt.prototype.ka=function(){return this.a.toString()},yt.prototype.g=function(){return 1},yt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};var It=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function _t(e){return e instanceof yt?e:(e="object"==typeof e&&e.ma?e.ka():String(e),It.test(e)||(e="about:invalid#zClosurez"),St(e))}function Et(e){return e instanceof yt?e:(e="object"==typeof e&&e.ma?e.ka():String(e),It.test(e)||(e="about:invalid#zClosurez"),St(e))}var kt={};function St(e){var t=new yt;return t.a=e,t}function Ct(){this.a="",this.g=Tt}St("about:blank"),Ct.prototype.ma=!0;var Tt={};function At(){this.a="",this.j=Pt,this.h=null}function Rt(e){return e instanceof At&&e.constructor===At&&e.j===Pt?e.a:(M("expected object of type SafeHtml, got '"+e+"' of type "+v(e)),"type_error:SafeHtml")}Ct.prototype.ka=function(){return this.a},Ct.prototype.toString=function(){return"SafeStyle{"+this.a+"}"},At.prototype.g=function(){return this.h},At.prototype.ma=!0,At.prototype.ka=function(){return this.a.toString()},At.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Pt={};function Ot(e,t){var i=new At;return i.a=e,i.h=t,i}Ot("<!DOCTYPE html>",0);var Nt=Ot("",0);Ot("<br>",0);var Lt,Dt,Mt=(Dt=!1,function(){return Dt||(Lt=function(){if("undefined"==typeof document)return!1;var e=document.createElement("div"),t=document.createElement("div");return t.appendChild(document.createElement("div")),e.appendChild(t),!!e.firstChild&&(t=e.firstChild.firstChild,e.innerHTML=Rt(Nt),!t.parentElement)}(),Dt=!0),Lt});function xt(e,t){t=t instanceof yt?t:Et(t),e.assign(wt(t))}function Ut(e,t){this.a=d(e)?e:0,this.g=d(t)?t:0}function Ft(e,t){this.width=e,this.height=t}function jt(e){return e?new Yt(Kt(e)):R||(R=new Yt)}function Bt(e,t){var i=t||document;return i.querySelectorAll&&i.querySelector?i.querySelectorAll("."+e):Ht(document,e,t)}function Vt(e,t){var i=t||document;if(i.getElementsByClassName)e=i.getElementsByClassName(e)[0];else{i=document;var n=t||i;e=n.querySelectorAll&&n.querySelector&&e?n.querySelector(e?"."+e:""):Ht(i,e,t)[0]||null}return e||null}function Ht(e,t,i){var n;if((e=i||e).querySelectorAll&&e.querySelector&&t)return e.querySelectorAll(t?"."+t:"");if(t&&e.getElementsByClassName){var r=e.getElementsByClassName(t);return r}if(r=e.getElementsByTagName("*"),t){var a={};for(i=n=0;e=r[i];i++){var s=e.className;"function"==typeof s.split&&V(s.split(/\s+/),t)&&(a[n++]=e)}return a.length=n,a}return r}Ut.prototype.toString=function(){return"("+this.a+", "+this.g+")"},Ut.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},Ut.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},Ut.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this},(e=Ft.prototype).toString=function(){return"("+this.width+" x "+this.height+")"},e.aspectRatio=function(){return this.width/this.height},e.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},e.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},e.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};var Wt={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Gt(e){return e.scrollingElement?e.scrollingElement:(it||"CSS1Compat"!=e.compatMode)&&e.body||e.documentElement}function zt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Kt(e){return 9==e.nodeType?e:e.ownerDocument||e.document}function qt(e,t){if("textContent"in e)e.textContent=t;else if(3==e.nodeType)e.data=String(t);else if(e.firstChild&&3==e.firstChild.nodeType){for(;e.lastChild!=e.firstChild;)e.removeChild(e.lastChild);e.firstChild.data=String(t)}else{for(var i;i=e.firstChild;)e.removeChild(i);e.appendChild(Kt(e).createTextNode(String(t)))}}function $t(e,t){return t?function(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}(e,(function(e){return!t||h(e.className)&&V(e.className.split(/\s+/),t)})):null}function Yt(e){this.a=e||l.document||document}Yt.prototype.N=function(){return h(void 0)?this.a.getElementById(void 0):void 0};var Jt={Fc:!0},Xt={Hc:!0},Zt={Ec:!0},Qt={Gc:!0};function ei(){throw Error("Do not instantiate directly")}function ti(e,t,i,n){if(e=e(t||ni,void 0,i),n=(n||jt()).a.createElement("DIV"),(e=function(e){if(!I(e))return ne(String(e));if(e instanceof ei){if(e.fa===Jt)return e.content;if(e.fa===Qt)return ne(e.content)}return M("Soy template output is unsafe for use as HTML: "+e),"zSoyz"}(e)).match(ii),e=Ot(e,null),Mt())for(;n.lastChild;)n.removeChild(n.lastChild);return n.innerHTML=Rt(e),1==n.childNodes.length&&(1==(e=n.firstChild).nodeType&&(n=e)),n}ei.prototype.va=null,ei.prototype.toString=function(){return this.content};var ii=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,ni={};function ri(){ei.call(this)}function ai(e){return null!=e&&e.fa===Jt?e:e instanceof At?ui(Rt(e).toString(),e.g()):ui(ne(String(String(e))),function(e){if(null!=e)switch(e.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}(e))}function si(){ei.call(this)}function oi(e,t){this.content=String(e),this.va=null!=t?t:null}function ci(e){return new oi(e,void 0)}N(ri,ei),ri.prototype.fa=Jt,N(si,ei),si.prototype.fa=Xt,si.prototype.va=1,N(oi,ei),oi.prototype.fa=Qt;var ui=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,i){return e=new t(String(e)),void 0!==i&&(e.va=i),e}}(ri),li=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e){return new t(String(e))}}(si);function di(e){return(e=String(e))?new oi(e,void 0):""}var hi=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,i){return(e=String(e))?(e=new t(e),void 0!==i&&(e.va=i),e):""}}(ri);function fi(e){return null!=e&&e.fa===Jt?String(String(e.content).replace(ki,"").replace(Si,"&lt;")).replace(wi,vi):ne(String(e))}function pi(e){return null!=e&&e.fa===Xt?e=String(e).replace(Ii,yi):e instanceof yt?e=String(wt(e).toString()).replace(Ii,yi):(e=String(e),Ei.test(e)?e=e.replace(Ii,yi):(M("Bad value `%s` for |filterNormalizeUri",[e]),e="#zSoyz")),e}function mi(e){return null!=e&&e.fa===Zt?e=e.content:null==e?e="":e instanceof Ct?e instanceof Ct&&e.constructor===Ct&&e.g===Tt?e=e.a:(M("expected object of type SafeStyle, got '"+e+"' of type "+v(e)),e="type_error:SafeStyle"):(e=String(e),_i.test(e)||(M("Bad value `%s` for |filterCssValue",[e]),e="zSoyz")),e}var gi={"\0":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function vi(e){return gi[e]}var bi={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","":"%7F","":"%C2%85"," ":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","！":"%EF%BC%81","＃":"%EF%BC%83","＄":"%EF%BC%84","＆":"%EF%BC%86","＇":"%EF%BC%87","（":"%EF%BC%88","）":"%EF%BC%89","＊":"%EF%BC%8A","＋":"%EF%BC%8B","，":"%EF%BC%8C","／":"%EF%BC%8F","：":"%EF%BC%9A","；":"%EF%BC%9B","＝":"%EF%BC%9D","？":"%EF%BC%9F","＠":"%EF%BC%A0","［":"%EF%BC%BB","］":"%EF%BC%BD"};function yi(e){return bi[e]}var wi=/[\x00\x22\x27\x3c\x3e]/g,Ii=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,_i=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,Ei=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,ki=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Si=/</g;function Ci(){return ci("Enter a valid phone number")}function Ti(){return ci("Unable to send password reset code to specified email")}function Ai(){return ci("Something went wrong. Please try again.")}function Ri(){return ci("This email already exists without any means of sign-in. Please reset the password to recover.")}function Pi(e){var t="";switch((e=e||{}).code){case"invalid-argument":t+="Client specified an invalid argument.";break;case"invalid-configuration":t+="Client specified an invalid project configuration.";break;case"failed-precondition":t+="Request can not be executed in the current system state.";break;case"out-of-range":t+="Client specified an invalid range.";break;case"unauthenticated":t+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":t+="Client does not have sufficient permission.";break;case"not-found":t+="Specified resource is not found.";break;case"aborted":t+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":t+="The resource that a client tried to create already exists.";break;case"resource-exhausted":t+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":t+="Request cancelled by the client.";break;case"data-loss":t+="Unrecoverable data loss or data corruption.";break;case"unknown":t+="Unknown server error.";break;case"internal":t+="Internal server error.";break;case"not-implemented":t+="API method not implemented by the server.";break;case"unavailable":t+="Service unavailable.";break;case"deadline-exceeded":t+="Request deadline exceeded.";break;case"auth/user-disabled":t+="The user account has been disabled by an administrator.";break;case"auth/timeout":t+="The operation has timed out.";break;case"auth/too-many-requests":t+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":t+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":t+="A network error has occurred. Try again later.";break;case"restart-process":t+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":t+="No sign-in provider is available for the given email, please try with a different email."}return ci(t)}function Oi(){return ci("Please login again to perform this operation")}function Ni(e,t,i){var n=Error.call(this);if(this.message=n.message,"stack"in n&&(this.stack=n.stack),this.code=Li+e,!(e=t)){if(e="","firebaseui/merge-conflict"===this.code)e+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";else e+=Ai();e=ci(e).toString()}this.message=e||"",this.credential=i||null}s(Ni,Error),Ni.prototype.toJSON=function(){return{code:this.code,message:this.message}};var Li="firebaseui/";function Di(){this.T=this.T,this.C=this.C}var Mi={};function xi(e,t){e.T?d(void 0)?t.call(void 0):t():(e.C||(e.C=[]),e.C.push(d(void 0)?C(t,void 0):t))}function Ui(e){e&&"function"==typeof e.m&&e.m()}Di.prototype.T=!1,Di.prototype.m=function(){if(!this.T&&(this.T=!0,this.o(),0)){var e=this[_]||(this[_]=++E);delete Mi[e]}},Di.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};var Fi=Object.freeze||function(e){return e},ji=!Ze||9<=Number(ut),Bi=Ze&&!dt("9"),Vi=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{l.addEventListener("test",m,t),l.removeEventListener("test",m,t)}catch(Lt){}return e}();function Hi(e,t){this.type=e,this.g=this.target=t,this.h=!1,this.qb=!0}function Wi(e,t){if(Hi.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,e){var i=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(tt){e:{try{$e(t.nodeName);var r=!0;break e}catch(a){}r=!1}r||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.keyCode=e.keyCode||0,this.key=e.key||"",this.j=e.charCode||("keypress"==i?e.keyCode:0),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=h(e.pointerType)?e.pointerType:Gi[e.pointerType]||"",this.a=e,e.defaultPrevented&&this.preventDefault()}}Hi.prototype.stopPropagation=function(){this.h=!0},Hi.prototype.preventDefault=function(){this.qb=!1},N(Wi,Hi);var Gi=Fi({2:"touch",3:"pen",4:"mouse"});Wi.prototype.stopPropagation=function(){Wi.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},Wi.prototype.preventDefault=function(){Wi.K.preventDefault.call(this);var e=this.a;if(e.preventDefault)e.preventDefault();else if(e.returnValue=!1,Bi)try{(e.ctrlKey||112<=e.keyCode&&123>=e.keyCode)&&(e.keyCode=-1)}catch(Dt){}};var zi="closure_listenable_"+(1e6*Math.random()|0),Ki=0;function qi(e,t,i,n,r){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!n,this.La=r,this.key=++Ki,this.sa=this.Ia=!1}function $i(e){e.sa=!0,e.listener=null,e.proxy=null,e.src=null,e.La=null}function Yi(e){this.src=e,this.a={},this.g=0}function Ji(e,t){var i=t.type;i in e.a&&H(e.a[i],t)&&($i(t),0==e.a[i].length&&(delete e.a[i],e.g--))}function Xi(e,t,i,n){for(var r=0;r<e.length;++r){var a=e[r];if(!a.sa&&a.listener==t&&a.capture==!!i&&a.La==n)return r}return-1}Yi.prototype.add=function(e,t,i,n,r){var a=e.toString();(e=this.a[a])||(e=this.a[a]=[],this.g++);var s=Xi(e,t,n,r);return-1<s?(t=e[s],i||(t.Ia=!1)):((t=new qi(t,this.src,a,!!n,r)).Ia=i,e.push(t)),t};var Zi="closure_lm_"+(1e6*Math.random()|0),Qi={};function en(e,t,i,n,r){if(n&&n.once)return nn(e,t,i,n,r);if(b(t)){for(var a=0;a<t.length;a++)en(e,t[a],i,n,r);return null}return i=hn(i),e&&e[zi]?e.J.add(String(t),i,!1,I(n)?!!n.capture:!!n,r):tn(e,t,i,!1,n,r)}function tn(e,t,i,n,r,a){if(!t)throw Error("Invalid event type");var s=I(r)?!!r.capture:!!r,o=ln(e);if(o||(e[Zi]=o=new Yi(e)),(i=o.add(t,i,n,s,a)).proxy)return i;if(n=function(){var e=un,t=ji?function(i){return e.call(t.src,t.listener,i)}:function(i){if(!(i=e.call(t.src,t.listener,i)))return i};return t}(),i.proxy=n,n.src=e,n.listener=i,e.addEventListener)Vi||(r=s),void 0===r&&(r=!1),e.addEventListener(t.toString(),n,r);else if(e.attachEvent)e.attachEvent(sn(t.toString()),n);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(n)}return i}function nn(e,t,i,n,r){if(b(t)){for(var a=0;a<t.length;a++)nn(e,t[a],i,n,r);return null}return i=hn(i),e&&e[zi]?e.J.add(String(t),i,!0,I(n)?!!n.capture:!!n,r):tn(e,t,i,!0,n,r)}function rn(e,t,i,n,r){if(b(t))for(var a=0;a<t.length;a++)rn(e,t[a],i,n,r);else n=I(n)?!!n.capture:!!n,i=hn(i),e&&e[zi]?(e=e.J,(t=String(t).toString())in e.a&&(-1<(i=Xi(a=e.a[t],i,n,r))&&($i(a[i]),W(a,i),0==a.length&&(delete e.a[t],e.g--)))):e&&(e=ln(e))&&(t=e.a[t.toString()],e=-1,t&&(e=Xi(t,i,n,r)),(i=-1<e?t[e]:null)&&an(i))}function an(e){if("number"!=typeof e&&e&&!e.sa){var t=e.src;if(t&&t[zi])Ji(t.J,e);else{var i=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(i,n,e.capture):t.detachEvent?t.detachEvent(sn(i),n):t.addListener&&t.removeListener&&t.removeListener(n),(i=ln(t))?(Ji(i,e),0==i.g&&(i.src=null,t[Zi]=null)):$i(e)}}}function sn(e){return e in Qi?Qi[e]:Qi[e]="on"+e}function on(e,t,i,n){var r=!0;if((e=ln(e))&&(t=e.a[t.toString()]))for(t=t.concat(),e=0;e<t.length;e++){var a=t[e];a&&a.capture==i&&!a.sa&&(a=cn(a,n),r=r&&!1!==a)}return r}function cn(e,t){var i=e.listener,n=e.La||e.src;return e.Ia&&an(e),i.call(n,t)}function un(e,t){if(e.sa)return!0;if(!ji){if(!t)e:{t=["window","event"];for(var i=l,n=0;n<t.length;n++)if(null==(i=i[t[n]])){t=null;break e}t=i}if(t=new Wi(n=t,this),i=!0,!(0>n.keyCode||null!=n.returnValue)){e:{var r=!1;if(0==n.keyCode)try{n.keyCode=-1;break e}catch(s){r=!0}(r||null==n.returnValue)&&(n.returnValue=!0)}for(n=[],r=t.g;r;r=r.parentNode)n.push(r);for(e=e.type,r=n.length-1;!t.h&&0<=r;r--){t.g=n[r];var a=on(n[r],e,!0,t);i=i&&a}for(r=0;!t.h&&r<n.length;r++)t.g=n[r],a=on(n[r],e,!1,t),i=i&&a}return i}return cn(e,new Wi(t,this))}function ln(e){return(e=e[Zi])instanceof Yi?e:null}var dn="__closure_events_fn_"+(1e9*Math.random()>>>0);function hn(e){return w(e)?e:(e[dn]||(e[dn]=function(t){return e.handleEvent(t)}),e[dn])}function fn(){Di.call(this),this.J=new Yi(this),this.wb=this,this.Ha=null}function pn(e,t){var i,n=e.Ha;if(n)for(i=[];n;n=n.Ha)i.push(n);if(e=e.wb,n=t.type||t,h(t))t=new Hi(t,e);else if(t instanceof Hi)t.target=t.target||e;else{var r=t;oe(t=new Hi(n,e),r)}if(r=!0,i)for(var a=i.length-1;!t.h&&0<=a;a--){var s=t.g=i[a];r=mn(s,n,!0,t)&&r}if(t.h||(r=mn(s=t.g=e,n,!0,t)&&r,t.h||(r=mn(s,n,!1,t)&&r)),i)for(a=0;!t.h&&a<i.length;a++)r=mn(s=t.g=i[a],n,!1,t)&&r;return r}function mn(e,t,i,n){if(!(t=e.J.a[String(t)]))return!0;t=t.concat();for(var r=!0,a=0;a<t.length;++a){var s=t[a];if(s&&!s.sa&&s.capture==i){var o=s.listener,c=s.La||s.src;s.Ia&&Ji(e.J,s),r=!1!==o.call(c,n)&&r}}return r&&0!=n.qb}N(fn,Di),fn.prototype[zi]=!0,fn.prototype.Za=function(e){this.Ha=e},fn.prototype.removeEventListener=function(e,t,i,n){rn(this,e,t,i,n)},fn.prototype.o=function(){if(fn.K.o.call(this),this.J){var e,t=this.J;for(e in t.a){for(var i=t.a[e],n=0;n<i.length;n++)$i(i[n]);delete t.a[e],t.g--}}this.Ha=null};var gn={},vn=0;function bn(e,t){if(!e)throw Error("Event target element must be provided!");if(e=wn(e),gn[e]&&gn[e].length)for(var i=0;i<gn[e].length;i++)pn(gn[e][i],t)}function yn(e){var t=wn(e.N());gn[t]&&gn[t].length&&(function(e,t){e:{for(var i=e.length,n=h(e)?e.split(""):e,r=0;r<i;r++)if(r in n&&t.call(void 0,n[r],r,e)){t=r;break e}t=-1}0<=t&&W(e,t)}(gn[t],(function(t){return t==e})),gn[t].length||delete gn[t])}function wn(e){return void 0===e.a&&(e.a=vn,vn++),e.a}function In(e){if(!e)throw Error("Event target element must be provided!");fn.call(this),this.a=e}function _n(e){if(!e)return!1;try{return!!e.$goog_Thenable}catch(Dt){return!1}}function En(e,t){this.h=e,this.j=t,this.g=0,this.a=null}function kn(e,t){e.j(t),100>e.g&&(e.g++,t.next=e.a,e.a=t)}function Sn(){this.g=this.a=null}s(In,fn),In.prototype.N=function(){return this.a},In.prototype.register=function(){var e=wn(this.N());gn[e]?V(gn[e],this)||gn[e].push(this):gn[e]=[this]},En.prototype.get=function(){if(0<this.g){this.g--;var e=this.a;this.a=e.next,e.next=null}else e=this.h();return e};var Cn,Tn,An=new En((function(){return new Pn}),(function(e){e.reset()}));function Rn(){var e=Dn,t=null;return e.a&&(t=e.a,e.a=e.a.next,e.a||(e.g=null),t.next=null),t}function Pn(){this.next=this.g=this.a=null}function On(e){l.setTimeout((function(){throw e}),0)}function Nn(e,t){Tn||function(){if(l.Promise&&l.Promise.resolve){var e=l.Promise.resolve(void 0);Tn=function(){e.then(Mn)}}else Tn=function(){var e=Mn;!w(l.setImmediate)||l.Window&&l.Window.prototype&&!Ke("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(Cn||(Cn=function(){var e=l.MessageChannel;if(void 0===e&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!Ke("Presto")&&(e=function(){var e=document.createElement("IFRAME");e.style.display="none",e.src="",document.documentElement.appendChild(e);var t=e.contentWindow;(e=t.document).open(),e.write(""),e.close();var i="callImmediate"+Math.random(),n="file:"==t.location.protocol?"*":t.location.protocol+"//"+t.location.host;e=C((function(e){"*"!=n&&e.origin!=n||e.data!=i||this.port1.onmessage()}),this),t.addEventListener("message",e,!1),this.port1={},this.port2={postMessage:function(){t.postMessage(i,n)}}}),void 0!==e&&!Ke("Trident")&&!Ke("MSIE")){var t=new e,i={},n=i;return t.port1.onmessage=function(){if(d(i.next)){var e=(i=i.next).gb;i.gb=null,e()}},function(e){n.next={gb:e},n=n.next,t.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var t=document.createElement("SCRIPT");t.onreadystatechange=function(){t.onreadystatechange=null,t.parentNode.removeChild(t),t=null,e(),e=null},document.documentElement.appendChild(t)}:function(e){l.setTimeout(e,0)}}()),Cn(e)):l.setImmediate(e)}}(),Ln||(Tn(),Ln=!0),Dn.add(e,t)}Sn.prototype.add=function(e,t){var i=An.get();i.set(e,t),this.g?this.g.next=i:this.a=i,this.g=i},Pn.prototype.set=function(e,t){this.a=e,this.g=t,this.next=null},Pn.prototype.reset=function(){this.next=this.g=this.a=null};var Ln=!1,Dn=new Sn;function Mn(){for(var e;e=Rn();){try{e.a.call(e.g)}catch(Dt){On(Dt)}kn(An,e)}Ln=!1}function xn(e){if(this.a=Un,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,e!=m)try{var t=this;e.call(void 0,(function(e){$n(t,Fn,e)}),(function(e){if(!(e instanceof er))try{if(e instanceof Error)throw e;throw Error("Promise rejected.")}catch(i){}$n(t,jn,e)}))}catch(Lt){$n(this,jn,Lt)}}var Un=0,Fn=2,jn=3;function Bn(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}Bn.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var Vn=new En((function(){return new Bn}),(function(e){e.reset()}));function Hn(e,t,i){var n=Vn.get();return n.s=e,n.g=t,n.j=i,n}function Wn(e){if(e instanceof xn)return e;var t=new xn(m);return $n(t,Fn,e),t}function Gn(e){return new xn((function(t,i){i(e)}))}function zn(e,t){if(e.a==Un)if(e.h){var i=e.h;if(i.g){for(var n=0,r=null,a=null,s=i.g;s&&(s.h||(n++,s.a==e&&(r=s),!(r&&1<n)));s=s.next)r||(a=s);r&&(i.a==Un&&1==n?zn(i,t):(a?((n=a).next==i.j&&(i.j=n),n.next=n.next.next):Jn(i),Xn(i,r,jn,t)))}e.h=null}else $n(e,jn,t)}function Kn(e,t){e.g||e.a!=Fn&&e.a!=jn||Yn(e),e.j?e.j.next=t:e.g=t,e.j=t}function qn(e,t,i,n){var r=Hn(null,null,null);return r.a=new xn((function(e,a){r.s=t?function(i){try{var r=t.call(n,i);e(r)}catch(s){a(s)}}:e,r.g=i?function(t){try{var r=i.call(n,t);!d(r)&&t instanceof er?a(t):e(r)}catch(s){a(s)}}:a})),r.a.h=e,Kn(e,r),r.a}function $n(e,t,i){if(e.a==Un){e===i&&(t=jn,i=new TypeError("Promise cannot resolve to itself")),e.a=1;e:{var n=i,r=e.hc,a=e.ic;if(n instanceof xn){Kn(n,Hn(r||m,a||null,e));var s=!0}else if(_n(n))n.then(r,a,e),s=!0;else{if(I(n))try{var o=n.then;if(w(o)){!function(e,t,i,n,r){function a(e){o||(o=!0,n.call(r,e))}function s(e){o||(o=!0,i.call(r,e))}var o=!1;try{t.call(e,s,a)}catch(c){a(c)}}(n,o,r,a,e),s=!0;break e}}catch(c){a.call(e,c),s=!0;break e}s=!1}}s||(e.A=i,e.a=t,e.h=null,Yn(e),t!=jn||i instanceof er||function(e,t){e.s=!0,Nn((function(){e.s&&Qn.call(null,t)}))}(e,i))}}function Yn(e){e.i||(e.i=!0,Nn(e.Hb,e))}function Jn(e){var t=null;return e.g&&(t=e.g,e.g=t.next,t.next=null),e.g||(e.j=null),t}function Xn(e,t,i,n){if(i==jn&&t.g&&!t.h)for(;e&&e.s;e=e.h)e.s=!1;if(t.a)t.a.h=null,Zn(t,i,n);else try{t.h?t.s.call(t.j):Zn(t,i,n)}catch(r){Qn.call(null,r)}kn(Vn,t)}function Zn(e,t,i){t==Fn?e.s.call(e.j,i):e.g&&e.g.call(e.j,i)}xn.prototype.then=function(e,t,i){return qn(this,w(e)?e:null,w(t)?t:null,i)},xn.prototype.$goog_Thenable=!0,(e=xn.prototype).fc=function(e,t){return(e=Hn(e,e,t)).h=!0,Kn(this,e),this},e.Ca=function(e,t){return qn(this,null,e,t)},e.cancel=function(e){this.a==Un&&Nn((function(){zn(this,new er(e))}),this)},e.hc=function(e){this.a=Un,$n(this,Fn,e)},e.ic=function(e){this.a=Un,$n(this,jn,e)},e.Hb=function(){for(var e;e=Jn(this);)Xn(this,e,this.a,this.A);this.i=!1};var Qn=On;function er(e){L.call(this,e)}function tr(e,t,i){t||(t={}),i=i||window;var n=e instanceof yt?e:_t(void 0!==e.href?e.href:String(e));e=t.target||e.target;var r=[];for(a in t)switch(a){case"width":case"height":case"top":case"left":r.push(a+"="+t[a]);break;case"target":case"noopener":case"noreferrer":break;default:r.push(a+"="+(t[a]?1:0))}var a=r.join(",");return(Ke("iPhone")&&!Ke("iPod")&&!Ke("iPad")||Ke("iPad")||Ke("iPod"))&&i.navigator&&i.navigator.standalone&&e&&"_self"!=e?(a=i.document.createElement("A"),n=n instanceof yt?n:Et(n),a.href=wt(n),a.setAttribute("target",e),t.noreferrer&&a.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,i,1),a.dispatchEvent(t),i={}):t.noreferrer?(i=i.open("",e,a),t=wt(n).toString(),i&&(et&&-1!=t.indexOf(";")&&(t="'"+t.replace(/'/g,"%27")+"'"),i.opener=null,t=Ot('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+ne(t)+'">',null),i.document.write(Rt(t)),i.document.close())):(i=i.open(wt(n).toString(),e,a))&&t.noopener&&(i.opener=null),i}function ir(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch(e){}return!1}function nr(e){tr(e,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function rr(e,t){if(null==(e=I(e)&&1==e.nodeType?e:document.querySelector(String(e))))throw Error(t||"Cannot find element.");return e}function ar(){return window.location.href}function sr(e){var t=vr;this.s=[],this.T=t,this.O=e||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}function or(e,t,i){e.a=!0,e.h=i,e.j=!t,dr(e)}function cr(e){if(e.a){if(!e.J)throw new hr(e);e.J=!1}}function ur(e,t,i){e.s.push([t,i,void 0]),e.a&&dr(e)}function lr(e){return B(e.s,(function(e){return w(e[1])}))}function dr(e){if(e.i&&e.a&&lr(e)){var t=e.i,i=mr[t];i&&(l.clearTimeout(i.a),delete mr[t]),e.i=0}e.g&&(e.g.C--,delete e.g),t=e.h;for(var n=i=!1;e.s.length&&!e.A;){var r=e.s.shift(),a=r[0],s=r[1];if(r=r[2],a=e.j?s:a)try{var o=a.call(r||e.O,t);d(o)&&(e.j=e.j&&(o==t||o instanceof Error),e.h=t=o),(_n(t)||"function"==typeof l.Promise&&t instanceof l.Promise)&&(n=!0,e.A=!0)}catch(c){t=c,e.j=!0,lr(e)||(i=!0)}}e.h=t,n&&(o=C(e.L,e,!0),n=C(e.L,e,!1),t instanceof sr?(ur(t,o,n),t.l=!0):t.then(o,n)),i&&(t=new pr(t),mr[t.a]=t,e.i=t.a)}function hr(){L.call(this)}function fr(){L.call(this)}function pr(e){this.a=l.setTimeout(C(this.h,this),0),this.g=e}N(er,L),er.prototype.name="cancel",sr.prototype.cancel=function(e){if(this.a)this.h instanceof sr&&this.h.cancel();else{if(this.g){var t=this.g;delete this.g,e?t.cancel(e):(t.C--,0>=t.C&&t.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(e=new fr(this),cr(this),or(this,!1,e))}},sr.prototype.L=function(e,t){this.A=!1,or(this,e,t)},sr.prototype.callback=function(e){cr(this),or(this,!0,e)},sr.prototype.then=function(e,t,i){var n,r,a=new xn((function(e,t){n=e,r=t}));return ur(this,n,(function(e){e instanceof fr?a.cancel():r(e)})),a.then(e,t,i)},sr.prototype.$goog_Thenable=!0,N(hr,L),hr.prototype.message="Deferred has already fired",hr.prototype.name="AlreadyCalledError",N(fr,L),fr.prototype.message="Deferred was canceled",fr.prototype.name="CanceledError",pr.prototype.h=function(){throw delete mr[this.a],this.g};var mr={};function gr(e){var t,i=document,n=vt(e).toString(),r=document.createElement("SCRIPT"),a={rb:r,sb:void 0},s=new sr(a);return t=window.setTimeout((function(){br(r,!0);var e=new Ir(wr,"Timeout reached for loading script "+n);cr(s),or(s,!1,e)}),5e3),a.sb=t,r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(br(r,!1,t),s.callback(null))},r.onerror=function(){br(r,!0,t);var e=new Ir(yr,"Error while loading script "+n);cr(s),or(s,!1,e)},oe(a={},{type:"text/javascript",charset:"UTF-8"}),function(e,t){re(t,(function(t,i){t&&"object"==typeof t&&t.ma&&(t=t.ka()),"style"==i?e.style.cssText=t:"class"==i?e.className=t:"for"==i?e.htmlFor=t:Wt.hasOwnProperty(i)?e.setAttribute(Wt[i],t):0==i.lastIndexOf("aria-",0)||0==i.lastIndexOf("data-",0)?e.setAttribute(i,t):e[i]=t}))}(r,a),function(e,t){e.src=vt(t),null===p&&(p=(t=(t=l.document).querySelector&&t.querySelector("script[nonce]"))&&(t=t.nonce||t.getAttribute("nonce"))&&f.test(t)?t:""),(t=p)&&e.setAttribute("nonce",t)}(r,e),function(e){var t=(e||document).getElementsByTagName("HEAD");return t&&0!=t.length?t[0]:e.documentElement}(i).appendChild(r),s}function vr(){if(this&&this.rb){var e=this.rb;e&&"SCRIPT"==e.tagName&&br(e,!0,this.sb)}}function br(e,t,i){null!=i&&l.clearTimeout(i),e.onload=m,e.onerror=m,e.onreadystatechange=m,t&&window.setTimeout((function(){zt(e)}),0)}var yr=0,wr=1;function Ir(e,t){var i="Jsloader error (code #"+e+")";t&&(i+=": "+t),L.call(this,i),this.code=e}function _r(){return l.google&&l.google.accounts&&l.google.accounts.id||null}function Er(e){this.a=e||_r(),this.h=!1,this.g=null}function kr(e,t,i){return e.a&&t?(e.h=!0,new xn((function(n){e.g=n,e.a.initialize({client_id:t,callback:n,auto_select:!i}),e.a.prompt()}))):Wn(t?Cr.Xa().load().then((function(){return e.a=_r(),kr(e,t,i)})).Ca((function(){return null})):null)}N(Ir,L),Er.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())},g(Er);var Sr=new ft(mt,"https://accounts.google.com/gsi/client");function Cr(){this.a=null}function Tr(e,t){this.a=e,this.g=t||function(e){throw e}}function Ar(e,t,i){this.reset(e,t,i,void 0,void 0)}function Rr(e){this.s=e,this.a=this.h=this.j=this.g=null}function Pr(e,t){this.name=e,this.value=t}Cr.prototype.load=function(){var e=this;if(this.a)return this.a;var t=function(){var e=Sr;e instanceof ft&&e.constructor===ft&&e.g===pt?e=e.a:(M("expected object of type Const, got '"+e+"'"),e="type_error:Const");var t=new gt;return t.a=e,t}();return _r()?Wn():this.a=function(){var e=null;return new xn((function(t){"complete"==l.document.readyState?t():(e=function(){t()},nn(window,"load",e))})).Ca((function(t){throw rn(window,"load",e),t}))}().then((function(){if(!_r())return new xn((function(i,n){var r=setTimeout((function(){e.a=null,n(Error("Network error!"))}),1e4);l.onGoogleLibraryLoad=function(){clearTimeout(r),i()},Wn(gr(t)).then((function(){_r()&&i()})).Ca((function(t){clearTimeout(r),e.a=null,n(t)}))}))}))},g(Cr),Tr.prototype.confirm=function(e){return Wn(this.a.confirm(e)).Ca(this.g)},Ar.prototype.a=null,Ar.prototype.reset=function(e,t,i,n,r){this.h=n||P(),this.j=e,this.s=t,this.g=i,delete this.a},Pr.prototype.toString=function(){return this.name};var Or=new Pr("SEVERE",1e3),Nr=new Pr("WARNING",900),Lr=new Pr("CONFIG",700);function Dr(e){return e.j?e.j:e.g?Dr(e.g):(M("Root logger has no level set."),null)}Rr.prototype.log=function(e,t,i){if(e.value>=Dr(this).value)for(w(t)&&(t=t()),e=new Ar(e,String(t),this.s),i&&(e.a=i),i=this;i;){var n=i,r=e;if(n.a)for(var a=0;t=n.a[a];a++)t(r);i=i.g}};var Mr={},xr=null;function Ur(){xr||(xr=new Rr(""),Mr[""]=xr,xr.j=Lr)}function Fr(){this.a=P()}var jr=null;function Br(e){this.j=e||"",jr||(jr=new Fr),this.s=jr}function Vr(e){return 10>e?"0"+e:String(e)}function Hr(e){Br.call(this,e)}function Wr(){this.s=C(this.h,this),this.a=new Hr,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}Fr.prototype.set=function(e){this.a=e},Fr.prototype.reset=function(){this.set(P())},Fr.prototype.get=function(){return this.a},Br.prototype.a=!0,Br.prototype.g=!0,Br.prototype.h=!1,N(Hr,Br),Wr.prototype.h=function(e){if(!this.j[e.g]){var t=function(e,t){var i=[];if(i.push(e.j," "),e.g){var n=new Date(t.h);i.push("[",Vr(n.getFullYear()-2e3)+Vr(n.getMonth()+1)+Vr(n.getDate())+" "+Vr(n.getHours())+":"+Vr(n.getMinutes())+":"+Vr(n.getSeconds())+"."+Vr(Math.floor(n.getMilliseconds()/10)),"] ")}return i.push("[",function(e,t){t=(e=(e.h-t)/1e3).toFixed(3);var i=0;if(1>e)i=2;else for(;100>e;)i++,e*=10;for(;0<i--;)t=" "+t;return t}(t,e.s.get()),"s] "),i.push("[",t.g,"] "),i.push(t.s),e.h&&(t=t.a)&&i.push("\n",t instanceof Error?t.message:t.toString()),e.a&&i.push("\n"),i.join("")}(this.a,e);if(zr)!function(e,t,i,n){e[t]?e[t](i,n||""):e.log(i,n||"")}(zr,function(e){if(e){if(e.value>=Or.value)return"error";if(e.value>=Nr.value)return"warn";if(e.value>=Lr.value)return"log"}return"debug"}(e.j),t,e.a)}};var Gr,zr=l.console;function Kr(e,t){Gr&&Gr.log(Or,e,t)}Gr=function e(t){var i;if(Ur(),!(i=Mr[t])){i=new Rr(t);var n=t.lastIndexOf("."),r=t.substr(n+1);(n=e(t.substr(0,n))).h||(n.h={}),n.h[r]=i,i.g=n,Mr[t]=i}return i}("firebaseui");var qr=new Wr;if(1!=qr.g){var $r;Ur(),$r=xr;var Yr=qr.s;$r.a||($r.a=[]),$r.a.push(Yr),qr.g=!0}function Jr(e){Gr&&Gr.log(Nr,e,void 0)}function Xr(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}function Zr(e){e=(e.a.cookie||"").split(";");for(var t,i,n=[],r=[],a=0;a<e.length;a++)-1==(t=(i=$(e[a])).indexOf("="))?(n.push(""),r.push(i)):(n.push(i.substring(0,t)),r.push(i.substring(t+1)));return{keys:n,values:r}}(e=Xr.prototype).set=function(e,t,i,n,r,a){if(/[;=\s]/.test(e))throw Error('Invalid cookie name "'+e+'"');if(/[;\r\n]/.test(t))throw Error('Invalid cookie value "'+t+'"');d(i)||(i=-1),r=r?";domain="+r:"",n=n?";path="+n:"",a=a?";secure":"",i=0>i?"":0==i?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(P()+1e3*i).toUTCString(),this.a.cookie=e+"="+t+r+n+i+a},e.get=function(e,t){for(var i,n=e+"=",r=(this.a.cookie||"").split(";"),a=0;a<r.length;a++){if(0==(i=$(r[a])).lastIndexOf(n,0))return i.substr(n.length);if(i==e)return""}return t},e.ja=function(){return Zr(this).keys},e.la=function(){return Zr(this).values},e.clear=function(){for(var e=Zr(this).keys,t=e.length-1;0<=t;t--){var i=e[t];this.get(i),this.set(i,"",0,void 0,void 0)}};var Qr=new Xr;function ea(){}function ia(e,t,i,n){this.h=null!=e?e:-1,this.g=t||null,this.a=i||null,this.j=!!n}function na(e,t){this.g=e,this.a=t||null}function ra(e){return{email:e.g,credential:e.a&&e.a.toJSON()}}function aa(e){if(e&&e.email){var t=e.credential&&ta.auth.AuthCredential.fromJSON(e.credential);return new na(e.email,t)}return null}function sa(e){this.a=e||null}function oa(e){for(var t=[],i=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);255<r&&(t[i++]=255&r,r>>=8),t[i++]=r}return t}function ca(e){return j(e,(function(e){return 1<(e=e.toString(16)).length?e:"0"+e})).join("")}function ua(e){for(this.i=e,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(la*(this.j+1)),e=0;e<this.g;e++)this.a[e]=[this.i[4*e],this.i[4*e+1],this.i[4*e+2],this.i[4*e+3]];var t=Array(4);for(e=this.g;e<la*(this.j+1);e++){if(t[0]=this.a[e-1][0],t[1]=this.a[e-1][1],t[2]=this.a[e-1][2],t[3]=this.a[e-1][3],e%this.g==0){var i=t,n=i[0];i[0]=i[1],i[1]=i[2],i[2]=i[3],i[3]=n,va(t),t[0]^=wa[e/this.g][0],t[1]^=wa[e/this.g][1],t[2]^=wa[e/this.g][2],t[3]^=wa[e/this.g][3]}else 6<this.g&&e%this.g==4&&va(t);this.a[e]=Array(4),this.a[e][0]=this.a[e-this.g][0]^t[0],this.a[e][1]=this.a[e-this.g][1]^t[1],this.a[e][2]=this.a[e-this.g][2]^t[2],this.a[e][3]=this.a[e-this.g][3]^t[3]}}s(ia,ea),ia.prototype.set=function(e,t){Qr.set(e,t,this.h,this.g,this.a,this.j)},ia.prototype.get=function(e){return Qr.get(e)||null},ia.prototype.ra=function(e){var t=this.g,i=this.a;Qr.get(e),Qr.set(e,"",0,t,i)},ua.prototype.A=16;var la=ua.prototype.A/4;function da(e,t){for(var i,n=0;n<la;n++)for(var r=0;4>r;r++)i=t[i=4*r+n],e.h[n][r]=i}function ha(e){for(var t=[],i=0;i<la;i++)for(var n=0;4>n;n++)t[4*n+i]=e.h[i][n];return t}function fa(e,t){for(var i=0;4>i;i++)for(var n=0;4>n;n++)e.h[i][n]^=e.a[4*t+n][i]}function pa(e,t){for(var i=0;4>i;i++)for(var n=0;4>n;n++)e.h[i][n]=t[e.h[i][n]]}function ma(e){for(var t=1;4>t;t++)for(var i=0;4>i;i++)e.s[t][i]=e.h[t][i];for(t=1;4>t;t++)for(i=0;4>i;i++)e.h[t][i]=e.s[t][(i+t)%la]}function ga(e){for(var t=1;4>t;t++)for(var i=0;4>i;i++)e.s[t][(i+t)%la]=e.h[t][i];for(t=1;4>t;t++)for(i=0;4>i;i++)e.h[t][i]=e.s[t][i]}function va(e){e[0]=ba[e[0]],e[1]=ba[e[1]],e[2]=ba[e[2]],e[3]=ba[e[3]]}var ba=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],ya=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],wa=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],Ia=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],_a=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],Ea=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],ka=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],Sa=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],Ca=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function Ta(e,t){e=new ua(Ra(e));for(var i,n=(t=oa(t)).splice(0,16),r="";n.length;){i=16-n.length;for(var a=0;a<i;a++)n.push(0);for(da(i=e,n),fa(i,0),n=1;n<i.j;++n){pa(i,ba),ma(i),a=i.h;for(var s=i.s[0],o=0;4>o;o++)s[0]=a[0][o],s[1]=a[1][o],s[2]=a[2][o],s[3]=a[3][o],a[0][o]=Ia[s[0]]^_a[s[1]]^s[2]^s[3],a[1][o]=s[0]^Ia[s[1]]^_a[s[2]]^s[3],a[2][o]=s[0]^s[1]^Ia[s[2]]^_a[s[3]],a[3][o]=_a[s[0]]^s[1]^s[2]^Ia[s[3]];fa(i,n)}pa(i,ba),ma(i),fa(i,i.j),r+=ca(ha(i)),n=t.splice(0,16)}return r}function Aa(e,t){e=new ua(Ra(e));for(var i=[],n=0;n<t.length;n+=2)i.push(parseInt(t.substring(n,n+2),16));var r=i.splice(0,16);for(t="";r.length;){for(da(n=e,r),fa(n,n.j),r=1;r<n.j;++r){ga(n),pa(n,ya),fa(n,n.j-r);for(var a=n.h,s=n.s[0],o=0;4>o;o++)s[0]=a[0][o],s[1]=a[1][o],s[2]=a[2][o],s[3]=a[3][o],a[0][o]=Ca[s[0]]^ka[s[1]]^Sa[s[2]]^Ea[s[3]],a[1][o]=Ea[s[0]]^Ca[s[1]]^ka[s[2]]^Sa[s[3]],a[2][o]=Sa[s[0]]^Ea[s[1]]^Ca[s[2]]^ka[s[3]],a[3][o]=ka[s[0]]^Sa[s[1]]^Ea[s[2]]^Ca[s[3]]}if(ga(n),pa(n,ya),fa(n,0),8192>=(n=ha(n)).length)n=String.fromCharCode.apply(null,n);else{for(r="",a=0;a<n.length;a+=8192)r+=String.fromCharCode.apply(null,q(n,a,a+8192));n=r}t+=n,r=i.splice(0,16)}return t.replace(/(\x00)+$/,"")}function Ra(e){for(var t=32-(e=oa(e.substring(0,32))).length,i=0;i<t;i++)e.push(0);return e}function Pa(e){var t=[];return Na(new Oa,e,t),t.join("")}function Oa(){}function Na(e,t,i){if(null==t)i.push("null");else{if("object"==typeof t){if(b(t)){var n=t;t=n.length,i.push("[");for(var r="",a=0;a<t;a++)i.push(r),Na(e,n[a],i),r=",";return void i.push("]")}if(!(t instanceof String||t instanceof Number||t instanceof Boolean)){for(n in i.push("{"),r="",t)Object.prototype.hasOwnProperty.call(t,n)&&("function"!=typeof(a=t[n])&&(i.push(r),Ma(n,i),i.push(":"),Na(e,a,i),r=","));return void i.push("}")}t=t.valueOf()}switch(typeof t){case"string":Ma(t,i);break;case"number":i.push(isFinite(t)&&!isNaN(t)?String(t):"null");break;case"boolean":i.push(String(t));break;case"function":i.push("null");break;default:throw Error("Unknown type: "+typeof t)}}}var La={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Da=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ma(e,t){t.push('"',e.replace(Da,(function(e){var t=La[e];return t||(t="\\u"+(65536|e.charCodeAt(0)).toString(16).substr(1),La[e]=t),t})),'"')}function xa(e){this.a=e}function Ua(){}function Fa(e){this.a=e}function ja(e){if(!e.a)return!1;try{return e.a.setItem("__sak","1"),e.a.removeItem("__sak"),!0}catch(Dt){return!1}}function Ba(){var e=null;try{e=window.localStorage||null}catch(Dt){}this.a=e}function Va(){var e=null;try{e=window.sessionStorage||null}catch(Dt){}this.a=e}function Ha(e,t){this.g=e,this.a=t+"::"}xa.prototype.set=function(e,t){d(t)?this.a.set(e,Pa(t)):this.a.ra(e)},xa.prototype.get=function(e){try{var t=this.a.get(e)}catch(Lt){return}if(null!==t)try{return JSON.parse(t)}catch(i){throw"Storage: Invalid value was encountered"}},N(Ua,ea),Ua.prototype.clear=function(){var e=de(this.ha(!0)),t=this;U(e,(function(e){t.ra(e)}))},N(Fa,Ua),(e=Fa.prototype).set=function(e,t){try{this.a.setItem(e,t)}catch(Lt){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded"}},e.get=function(e){if(!h(e=this.a.getItem(e))&&null!==e)throw"Storage mechanism: Invalid value was encountered";return e},e.ra=function(e){this.a.removeItem(e)},e.ha=function(e){var t=0,i=this.a,n=new ue;return n.next=function(){if(t>=i.length)throw ce;var n=i.key(t++);if(e)return n;if(!h(n=i.getItem(n)))throw"Storage mechanism: Invalid value was encountered";return n},n},e.clear=function(){this.a.clear()},e.key=function(e){return this.a.key(e)},N(Ba,Fa),N(Va,Fa),N(Ha,Ua),Ha.prototype.set=function(e,t){this.g.set(this.a+e,t)},Ha.prototype.get=function(e){return this.g.get(this.a+e)},Ha.prototype.ra=function(e){this.g.ra(this.a+e)},Ha.prototype.ha=function(e){var t=this.g.ha(!0),i=this,n=new ue;return n.next=function(){for(var n=t.next();n.substr(0,i.a.length)!=i.a;)n=t.next();return e?n.substr(i.a.length):i.g.get(n)},n},ja(new Ba);var Wa=new Va,Ga=new xa(ja(Wa)?new Ha(Wa,"firebaseui"):null),za={name:"pendingEmailCredential",storage:Ga},Ka={name:"redirectStatus",storage:Ga},qa={name:"redirectUrl",storage:Ga},$a={name:"emailForSignIn",storage:new xa(new ia(3600,"/"))},Ya={name:"pendingEncryptedCredential",storage:new xa(new ia(3600,"/"))};function Ja(e,t){return e.storage.get(t?e.name+":"+t:e.name)}function Xa(e,t){e.storage.a.ra(t?e.name+":"+t:e.name)}function Za(e,t,i){e.storage.set(i?e.name+":"+i:e.name,t)}function Qa(e){return Ja(qa,e)||null}function es(e){return aa(e=Ja(za,e)||null)}function ts(e){Xa(za,e)}function is(e,t){Za(za,ra(e),t)}function ns(e){return(e=Ja(Ka,e)||null)&&void 0!==e.tenantId?new sa(e.tenantId):null}function rs(){this.W={}}function as(e,t,i){if(t.toLowerCase()in e.W)throw Error("Configuration "+t+" has already been defined.");e.W[t.toLowerCase()]=i}function ss(e,t,i){if(!(t.toLowerCase()in e.W))throw Error("Configuration "+t+" is not defined.");e.W[t.toLowerCase()]=i}function os(e,t){if(!(e=e.get(t)))throw Error("Configuration "+t+" is required.");return e}function cs(){this.g=void 0,this.a={}}function us(e,t,i,n){for(var r=0;r<t.length;r++){var a=t.charAt(r);e.a[a]||(e.a[a]=new cs),e=e.a[a]}if(n&&void 0!==e.g)throw Error('The collection already contains the key "'+t+'"');e.g=i}function ls(e,t){for(var i in void 0!==e.g&&t.push(e.g),e.a)ls(e.a[i],t)}function ds(e,t,i){for(var n in void 0!==e.g&&i.push(t),e.a)ds(e.a[n],t+n,i)}function hs(e){for(this.a=e,this.g=new cs,e=0;e<this.a.length;e++){var t=this.g.get("+"+this.a[e].b);t?t.push(this.a[e]):this.g.add("+"+this.a[e].b,[this.a[e]])}}function fs(e,t){var i={},n=0;for(void 0!==(e=e.g).g&&(i[n]=e.g);n<t.length;n++){var r=t.charAt(n);if(!(r in e.a))break;void 0!==(e=e.a[r]).g&&(i[n]=e.g)}for(var a in i)if(i.hasOwnProperty(a))return i[a];return[]}function ps(e){for(var t=0;t<bs.length;t++)if(bs[t].c===e)return bs[t];return null}function ms(e){e=e.toUpperCase();for(var t=[],i=0;i<bs.length;i++)bs[i].f===e&&t.push(bs[i]);return t}function gs(e){if(0<e.length&&"+"==e.charAt(0)){e=e.substring(1);for(var t=[],i=0;i<bs.length;i++)bs[i].b==e&&t.push(bs[i]);e=t}else e=ms(e);return e}function vs(e){e.sort((function(e,t){return e.name.localeCompare(t.name,"en")}))}rs.prototype.get=function(e){if(!(e.toLowerCase()in this.W))throw Error("Configuration "+e+" is not defined.");return this.W[e.toLowerCase()]},(e=cs.prototype).set=function(e,t){us(this,e,t,!1)},e.add=function(e,t){us(this,e,t,!0)},e.get=function(e){e:{for(var t=this,i=0;i<e.length;i++)if(!(t=t.a[e.charAt(i)])){e=void 0;break e}e=t}return e?e.g:void 0},e.la=function(){var e=[];return ls(this,e),e},e.ja=function(){var e=[];return ds(this,"",e),e},e.clear=function(){this.a={},this.g=void 0};var bs=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"Åland Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"Côte d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Curaçao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"Réunion",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barthélemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"São Tomé and Príncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];vs(bs);var ys=new hs(bs);function ws(e,t){this.a=e,this.Aa=t}function Is(e){e=$(e);var t=fs(ys,e);return 0<t.length?new ws("1"==t[0].b?"1-US-0":t[0].c,$(e.substr(t[0].b.length+1))):null}function _s(e){var t=ps(e.a);if(!t)throw Error("Country ID "+e.a+" not found.");return"+"+t.b+e.Aa}function Es(e,t){for(var i=0;i<e.length;i++)if(!V(ks,e[i])&&(null!==Ss&&e[i]in Ss||V(t,e[i])))return e[i];return null}var ks=["emailLink","password","phone"],Ss={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function Cs(){this.a=new rs,as(this.a,"autoUpgradeAnonymousUsers"),as(this.a,"callbacks"),as(this.a,"credentialHelper",to),as(this.a,"immediateFederatedRedirect",!1),as(this.a,"popupMode",!1),as(this.a,"privacyPolicyUrl"),as(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),as(this.a,"queryParameterForWidgetMode","mode"),as(this.a,"signInFlow"),as(this.a,"signInOptions"),as(this.a,"signInSuccessUrl"),as(this.a,"siteName"),as(this.a,"tosUrl"),as(this.a,"widgetUrl"),as(this.a,"adminRestrictedOperation")}function Ts(e){var t=!!e.a.get("autoUpgradeAnonymousUsers");return t&&!$s(e)&&Kr('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),t}function As(e){e=e.a.get("signInOptions")||[];for(var t=[],i=0;i<e.length;i++){var n=e[i];(n=I(n)?n:{provider:n}).provider&&t.push(n)}return t}function Rs(e,t){e=As(e);for(var i=0;i<e.length;i++)if(e[i].provider===t)return e[i];return null}function Ps(e){return As(e).map((function(e){return e.provider}))}function Os(e,t){e=Ns(e);for(var i=0;i<e.length;i++)if(e[i].providerId===t)return e[i];return null}function Ns(e){return As(e).map((function(e){if(Ss[e.provider]||V(so,e.provider)){for(var t in e={providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?wt(_t(e.iconUrl)).toString():null})null===e[t]&&delete e[t];return e}return{providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?wt(_t(e.iconUrl)).toString():null,Ob:e.loginHintKey||null}}))}function Ls(e){var t,i=Rs(e,ta.auth.GoogleAuthProvider.PROVIDER_ID);if(t=i&&i.clientId){e:{if("http:"===(window.location&&window.location.protocol)||"https:"===(window.location&&window.location.protocol))for(n in e=e.a.get("credentialHelper"),io)if(io[n]===e){var n=io[n];break e}n=to}t=n===eo}return t&&i.clientId||null}function Ds(e){return!!((e=Rs(e,ta.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.status)}function Ms(e){return!(!(e=e.a.get("adminRestrictedOperation")||null)||!e.status)}function xs(e,t){return e=(e=Rs(e,t))&&e.scopes,Array.isArray(e)?e:[]}function Us(e,t){return I(e=(e=Rs(e,t))&&e.customParameters)?(e=ae(e),t===ta.auth.GoogleAuthProvider.PROVIDER_ID&&delete e.login_hint,t===ta.auth.GithubAuthProvider.PROVIDER_ID&&delete e.login,e):null}function Fs(e){if(!(e=Rs(e,ta.auth.PhoneAuthProvider.PROVIDER_ID)))return null;var t=e.whitelistedCountries,i=e.blacklistedCountries;if(void 0!==t&&(!Array.isArray(t)||0==t.length))throw Error("WhitelistedCountries must be a non-empty array.");if(void 0!==i&&!Array.isArray(i))throw Error("BlacklistedCountries must be an array.");if(t&&i)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!t&&!i)return bs;if(e=[],t){i={};for(var n=0;n<t.length;n++)for(var r=gs(t[n]),a=0;a<r.length;a++)i[r[a].c]=r[a];for(var s in i)i.hasOwnProperty(s)&&e.push(i[s])}else{for(s={},t=0;t<i.length;t++)for(r=gs(i[t]),n=0;n<r.length;n++)s[r[n].c]=r[n];for(r=0;r<bs.length;r++)null!==s&&bs[r].c in s||e.push(bs[r])}return e}function js(e){return os(e.a,"queryParameterForWidgetMode")}function Bs(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Jr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){nr(t)}}return null}function Vs(e){var t=e.a.get("tosUrl")||null,i=e.a.get("privacyPolicyUrl")||null;if(i&&!t&&Jr("Term of Service URL is missing, the link will not be displayed."),t&&i){if("function"==typeof i)return i;if("string"==typeof i)return function(){nr(i)}}return null}function Hs(e){return!(e=Rs(e,ta.auth.EmailAuthProvider.PROVIDER_ID))||void 0===e.requireDisplayName||!!e.requireDisplayName}function Ws(e){return!(!(e=Rs(e,ta.auth.EmailAuthProvider.PROVIDER_ID))||e.signInMethod!==ta.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function Gs(e){var t=!!e.a.get("immediateFederatedRedirect"),i=Ps(e);return e=zs(e),t&&1==i.length&&!V(ks,i[0])&&e==no}function zs(e){for(var t in e=e.a.get("signInFlow"),ro)if(ro[t]==e)return ro[t];return no}function Ks(e){return Ys(e).signInSuccess||null}function qs(e){return Ys(e).signInSuccessWithAuthResult||null}function $s(e){return Ys(e).signInFailure||null}function Ys(e){return e.a.get("callbacks")||{}}var Js,Xs,Zs,Qs,eo="googleyolo",to="none",io={nc:eo,NONE:to},no="redirect",ro={qc:"popup",rc:no},ao={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},so=["anonymous"],oo=["sitekey","tabindex","callback","expired-callback"],co={};function uo(e,t,i,n){co[e].apply(null,Array.prototype.slice.call(arguments,1))}function lo(e){return e.classList?e.classList:h(e=e.className)&&e.match(/\S+/g)||[]}function ho(e,t){return e.classList?e.classList.contains(t):V(lo(e),t)}function fo(e,t){e.classList?e.classList.add(t):ho(e,t)||(e.className+=0<e.className.length?" "+t:t)}function po(e,t){e.classList?e.classList.remove(t):ho(e,t)&&(e.className=F(lo(e),(function(e){return e!=t})).join(" "))}function mo(e){var t=e.type;switch(h(t)&&t.toLowerCase()){case"checkbox":case"radio":return e.checked?e.value:null;case"select-one":return 0<=(t=e.selectedIndex)?e.options[t].value:null;case"select-multiple":t=[];for(var i,n=0;i=e.options[n];n++)i.selected&&t.push(i.value);return t.length?t:null;default:return null!=e.value?e.value:null}}function go(e,t){var i=e.type;switch(h(i)&&i.toLowerCase()){case"checkbox":case"radio":e.checked=t;break;case"select-one":if(e.selectedIndex=-1,h(t))for(var n=0;i=e.options[n];n++)if(i.value==t){i.selected=!0;break}break;case"select-multiple":for(h(t)&&(t=[t]),n=0;i=e.options[n];n++)if(i.selected=!1,t)for(var r,a=0;r=t[a];a++)i.value==r&&(i.selected=!0);break;default:e.value=null!=t?t:""}}function vo(e,t,i,n,r,a){if(it&&!dt("525"))return!0;if(rt&&r)return bo(e);if(r&&!n)return!1;if(!tt&&("number"==typeof t&&(t=yo(t)),(!i||rt)&&(17==t||18==t||rt&&91==t)||rt&&16==t&&(n||a)))return!1;if((it||Qe)&&n&&i)switch(e){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(Ze&&n&&t==e)return!1;switch(e){case 13:return!tt||!a&&!r&&!(i&&n);case 27:return!(it||Qe||tt)}return(!tt||!(n||r||a))&&bo(e)}function bo(e){if(48<=e&&57>=e||96<=e&&106>=e||65<=e&&90>=e||(it||Qe)&&0==e)return!0;switch(e){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return tt;default:return!1}}function yo(e){if(tt)e=function(e){switch(e){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return e}}(e);else if(rt&&it&&93===e)e=91;return e}function wo(e){fn.call(this),this.a=e,en(e,"keydown",this.g,!1,this),en(e,"click",this.h,!1,this)}function Io(e,t){var i=new Eo(t);if(pn(e,i)){i=new _o(t);try{pn(e,i)}finally{t.stopPropagation()}}}function _o(e){Wi.call(this,e.a),this.type="action"}function Eo(e){Wi.call(this,e.a),this.type="beforeaction"}function ko(e){fn.call(this),this.a=e,e=Ze?"focusout":"blur",this.g=en(this.a,Ze?"focusin":"focus",this,!Ze),this.h=en(this.a,e,this,!Ze)}function So(e,t){fn.call(this),this.g=e||1,this.a=t||l,this.h=C(this.gc,this),this.j=P()}function Co(e){e.Ka=!1,e.aa&&(e.a.clearTimeout(e.aa),e.aa=null)}function To(e){Di.call(this),this.g=e,this.a={}}N(wo,fn),wo.prototype.g=function(e){(13==e.keyCode||it&&3==e.keyCode)&&Io(this,e)},wo.prototype.h=function(e){Io(this,e)},wo.prototype.o=function(){wo.K.o.call(this),rn(this.a,"keydown",this.g,!1,this),rn(this.a,"click",this.h,!1,this),delete this.a},N(_o,Wi),N(Eo,Wi),N(ko,fn),ko.prototype.handleEvent=function(e){var t=new Wi(e.a);t.type="focusin"==e.type||"focus"==e.type?"focusin":"focusout",pn(this,t)},ko.prototype.o=function(){ko.K.o.call(this),an(this.g),an(this.h),delete this.a},N(So,fn),(e=So.prototype).Ka=!1,e.aa=null,e.gc=function(){if(this.Ka){var e=P()-this.j;0<e&&e<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-e):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),pn(this,"tick"),this.Ka&&(Co(this),this.start()))}},e.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=P())},e.o=function(){So.K.o.call(this),Co(this),delete this.a},N(To,Di);var Ao=[];function Ro(e,t,i,n){b(i)||(i&&(Ao[0]=i.toString()),i=Ao);for(var r=0;r<i.length;r++){var a=en(t,i[r],n||e.handleEvent,!1,e.g||e);if(!a)break;e.a[a.key]=a}}function Po(e){re(e.a,(function(e,t){this.a.hasOwnProperty(t)&&an(e)}),e),e.a={}}function Oo(e){fn.call(this),this.a=null,this.g=e,e=Ze||Qe||it&&!dt("531")&&"TEXTAREA"==e.tagName,this.h=new To(this),Ro(this.h,this.g,e?["keydown","paste","cut","drop","input"]:"input",this)}function No(e){null!=e.a&&(l.clearTimeout(e.a),e.a=null)}function Lo(e){return(e=new Wi(e.a)).type="input",e}function Do(e,t){fn.call(this),e&&(this.Oa&&jo(this),this.qa=e,this.Na=en(this.qa,"keypress",this,t),this.Ya=en(this.qa,"keydown",this.Jb,t,this),this.Oa=en(this.qa,"keyup",this.Kb,t,this))}To.prototype.o=function(){To.K.o.call(this),Po(this)},To.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},N(Oo,fn),Oo.prototype.handleEvent=function(e){if("input"==e.type)Ze&&dt(10)&&0==e.keyCode&&0==e.j||(No(this),pn(this,Lo(e)));else if("keydown"!=e.type||function(e){if(e.altKey&&!e.ctrlKey||e.metaKey||112<=e.keyCode&&123>=e.keyCode)return!1;if(bo(e.keyCode))return!0;switch(e.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!tt;default:return 166>e.keyCode||183<e.keyCode}}(e)){var t="keydown"==e.type?this.g.value:null;Ze&&229==e.keyCode&&(t=null);var i=Lo(e);No(this),this.a=function(e,t){if(w(e))t&&(e=C(e,t));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=C(e.handleEvent,e)}return 2147483647<Number(0)?-1:l.setTimeout(e,0)}((function(){this.a=null,this.g.value!=t&&pn(this,i)}),this)}},Oo.prototype.o=function(){Oo.K.o.call(this),this.h.m(),No(this),delete this.g},N(Do,fn),(e=Do.prototype).qa=null,e.Na=null,e.Ya=null,e.Oa=null,e.R=-1,e.X=-1,e.Ua=!1;var Mo={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},xo={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Uo=!it||dt("525"),Fo=rt&&tt;function jo(e){e.Na&&(an(e.Na),an(e.Ya),an(e.Oa),e.Na=null,e.Ya=null,e.Oa=null),e.qa=null,e.R=-1,e.X=-1}function Bo(e,t,i,n){Wi.call(this,n),this.type="key",this.keyCode=e,this.j=t,this.repeat=i}function Vo(e,t,i,n){this.top=e,this.right=t,this.bottom=i,this.left=n}function Ho(e,t){var i=Kt(e);return i.defaultView&&i.defaultView.getComputedStyle&&(e=i.defaultView.getComputedStyle(e,null))&&(e[t]||e.getPropertyValue(t))||""}function Wo(e){try{var t=e.getBoundingClientRect()}catch(Lt){return{left:0,top:0,right:0,bottom:0}}return Ze&&e.ownerDocument.body&&(e=e.ownerDocument,t.left-=e.documentElement.clientLeft+e.body.clientLeft,t.top-=e.documentElement.clientTop+e.body.clientTop),t}function Go(e){var t=Kt(e),i=new Ut(0,0),n=t?Kt(t):document;return e==(n=!Ze||9<=Number(ut)||"CSS1Compat"==jt(n).a.compatMode?n.documentElement:n.body)||(e=Wo(e),t=Gt(n=jt(t).a),n=n.parentWindow||n.defaultView,t=Ze&&dt("10")&&n.pageYOffset!=t.scrollTop?new Ut(t.scrollLeft,t.scrollTop):new Ut(n.pageXOffset||t.scrollLeft,n.pageYOffset||t.scrollTop),i.a=e.left+t.a,i.g=e.top+t.g),i}(e=Do.prototype).Jb=function(e){(it||Qe)&&(17==this.R&&!e.ctrlKey||18==this.R&&!e.altKey||rt&&91==this.R&&!e.metaKey)&&(this.X=this.R=-1),-1==this.R&&(e.ctrlKey&&17!=e.keyCode?this.R=17:e.altKey&&18!=e.keyCode?this.R=18:e.metaKey&&91!=e.keyCode&&(this.R=91)),Uo&&!vo(e.keyCode,this.R,e.shiftKey,e.ctrlKey,e.altKey,e.metaKey)?this.handleEvent(e):(this.X=yo(e.keyCode),Fo&&(this.Ua=e.altKey))},e.Kb=function(e){this.X=this.R=-1,this.Ua=e.altKey},e.handleEvent=function(e){var t=e.a,i=t.altKey;if(Ze&&"keypress"==e.type)var n=this.X,r=13!=n&&27!=n?t.keyCode:0;else(it||Qe)&&"keypress"==e.type?(n=this.X,r=0<=t.charCode&&63232>t.charCode&&bo(n)?t.charCode:0):Xe&&!it?r=bo(n=this.X)?t.keyCode:0:("keypress"==e.type?(Fo&&(i=this.Ua),t.keyCode==t.charCode?32>t.keyCode?(n=t.keyCode,r=0):(n=this.X,r=t.charCode):(n=t.keyCode||this.X,r=t.charCode||0)):(n=t.keyCode||this.X,r=t.charCode||0),rt&&63==r&&224==n&&(n=191));var a=n=yo(n);n?63232<=n&&n in Mo?a=Mo[n]:25==n&&e.shiftKey&&(a=9):t.keyIdentifier&&t.keyIdentifier in xo&&(a=xo[t.keyIdentifier]),tt&&Uo&&"keypress"==e.type&&!vo(a,this.R,e.shiftKey,e.ctrlKey,i,e.metaKey)||(e=a==this.R,this.R=a,(t=new Bo(a,r,e,t)).altKey=i,pn(this,t))},e.N=function(){return this.qa},e.o=function(){Do.K.o.call(this),jo(this)},N(Bo,Wi),Vo.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},Vo.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},Vo.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},Vo.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};var zo={thin:2,medium:4,thick:6};function Ko(e,t){if("none"==(e.currentStyle?e.currentStyle[t+"Style"]:null))return 0;var i=e.currentStyle?e.currentStyle[t+"Width"]:null;if(i in zo)e=zo[i];else if(/^\d+px?$/.test(i))e=parseInt(i,10);else{t=e.style.left;var n=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,e.style.left=i,i=e.style.pixelLeft,e.style.left=t,e.runtimeStyle.left=n,e=+i}return e}function qo(){}function $o(e){fn.call(this),this.s=e||jt(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}function Yo(e,t){return e.g?Vt(t,e.g||e.s.a):null}function Jo(e){return e.L||(e.L=new To(e)),e.L}function Xo(e,t){e.Ea&&U(e.Ea,t,void 0)}function Zo(e,t){var i=$t(e,"firebaseui-textfield");t?(po(e,"firebaseui-input-invalid"),fo(e,"firebaseui-input"),i&&po(i,"firebaseui-textfield-invalid")):(po(e,"firebaseui-input"),fo(e,"firebaseui-input-invalid"),i&&fo(i,"firebaseui-textfield-invalid"))}function Qo(e,t,i){xi(e,T(Ui,t=new Oo(t))),Ro(Jo(e),t,"input",i)}function ec(e,t,i){xi(e,T(Ui,t=new Do(t))),Ro(Jo(e),t,"key",(function(e){13==e.keyCode&&(e.stopPropagation(),e.preventDefault(),i(e))}))}function tc(e,t,i){xi(e,T(Ui,t=new wo(t))),Ro(Jo(e),t,"action",(function(e){e.stopPropagation(),e.preventDefault(),i(e)}))}function ic(e){fo(e,"firebaseui-hidden")}function nc(e,t){t&&qt(e,t),po(e,"firebaseui-hidden")}function rc(e){return!ho(e,"firebaseui-hidden")&&"none"!=e.style.display}function ac(e){var t=(e=e||{}).email,i=e.disabled,n='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return n=e.wc?n+"Enter new email address":n+"Email",n+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+fi(null!=t?t:"")+'"'+(i?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',ui(n)}function sc(e){var t='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return t=(e=(e=e||{}).label)?t+ai(e):t+"Next",ui(t+"</button>")}function oc(){var e=""+sc({label:di("Sign In")});return ui(e)}function cc(){var e=""+sc({label:di("Save")});return ui(e)}function uc(){var e=""+sc({label:di("Continue")});return ui(e)}function lc(e){var t='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return t=(e=(e=e||{}).label)?t+ai(e):t+"Choose password",ui(t+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function dc(){var e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return ui((e+="Password")+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function hc(){return ui('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function fc(e){var t='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return t=(e=(e=e||{}).label)?t+ai(e):t+"Cancel",ui(t+"</button>")}function pc(e){var t="";return e.F&&e.D&&(t+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),ui(t)}function mc(e){var t="";return e.F&&e.D&&(t+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),ui(t)}function gc(e){return e='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+ai(e.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',ui(e)}function vc(e){var t=e.content;return e=e.Ab,ui('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(e?" "+fi(e):"")+'">'+ai(t)+"</dialog>")}function bc(e){var t=e.message;return ui(vc({content:hi('<div class="firebaseui-dialog-icon-wrapper"><div class="'+fi(e.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+ai(t)+"</div>")}))}function yc(e){for(var t='<div class="firebaseui-list-box-actions">',i=(e=e.items).length,n=0;n<i;n++){var r=e[n];t+='<button type="button" data-listboxid="'+fi(r.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(r.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+fi(r.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+ai(r.label)+"</div></button>"}return t=""+vc({Ab:di("firebaseui-list-box-dialog"),content:hi(t+"</div>")}),ui(t)}function wc(e){return ui((e=e||{}).tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}function Ic(e,t){return ci((e=(e=e||{}).ga).S?e.S:t.hb[e.providerId]?""+t.hb[e.providerId]:e.providerId&&0==e.providerId.indexOf("saml.")||e.providerId&&0==e.providerId.indexOf("oidc.")?e.providerId.substring(5):""+e.providerId)}function _c(e){Sc(e,"upgradeElement")}function Ec(e){Sc(e,"downgradeElements")}g(qo),qo.prototype.a=0,N($o,fn),(e=$o.prototype).Lb=qo.Xa(),e.N=function(){return this.g},e.Za=function(e){if(this.Y&&this.Y!=e)throw Error("Method not supported");$o.K.Za.call(this,e)},e.kb=function(){this.g=this.s.a.createElement("DIV")},e.render=function(e){if(this.na)throw Error("Component already rendered");this.g||this.kb(),e?e.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},e.v=function(){this.na=!0,Xo(this,(function(e){!e.na&&e.N()&&e.v()}))},e.ya=function(){Xo(this,(function(e){e.na&&e.ya()})),this.L&&Po(this.L),this.na=!1},e.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Xo(this,(function(e){e.m()})),this.g&&zt(this.g),this.Y=this.g=this.oa=this.Ea=null,$o.K.o.call(this)},e.removeChild=function(e,t){if(e){var i=h(e)?e:e.cb||(e.cb=":"+(e.Lb.a++).toString(36));if(this.oa&&i?e=(null!==(e=this.oa)&&i in e?e[i]:void 0)||null:e=null,i&&e){var n=this.oa;if(i in n&&delete n[i],H(this.Ea,e),t&&(e.ya(),e.g&&zt(e.g)),null==(t=e))throw Error("Unable to set parent component");t.Y=null,$o.K.Za.call(t,null)}}if(!e)throw Error("Child is not in parent component");return e},gc.a="firebaseui.auth.soy2.element.infoBar",bc.a="firebaseui.auth.soy2.element.progressDialog",yc.a="firebaseui.auth.soy2.element.listBoxDialog",wc.a="firebaseui.auth.soy2.element.busyIndicator";var kc=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function Sc(e,t){e&&window.componentHandler&&window.componentHandler[t]&&kc.forEach((function(i){ho(e,i)&&window.componentHandler[t](e),U(Bt(i,e),(function(e){window.componentHandler[t](e)}))}))}function Cc(e,t,i){if(Tc.call(this),document.body.appendChild(e),e.showModal||window.dialogPolyfill.registerDialog(e),e.showModal(),_c(e),t&&tc(this,e,(function(t){var i=e.getBoundingClientRect();(t.clientX<i.left||i.left+i.width<t.clientX||t.clientY<i.top||i.top+i.height<t.clientY)&&Tc.call(this)})),!i){var n=this.N().parentElement||this.N().parentNode;if(n){var r=this;this.da=function(){if(e.open){var t=e.getBoundingClientRect().height,i=n.getBoundingClientRect().height,a=n.getBoundingClientRect().top-document.body.getBoundingClientRect().top,s=n.getBoundingClientRect().left-document.body.getBoundingClientRect().left,o=e.getBoundingClientRect().width,c=n.getBoundingClientRect().width;e.style.top=(a+(i-t)/2).toString()+"px",t=s+(c-o)/2,e.style.left=t.toString()+"px",e.style.right=(document.body.getBoundingClientRect().width-t-o).toString()+"px"}else window.removeEventListener("resize",r.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Tc(){var e=Ac.call(this);e&&(Ec(e),e.open&&e.close(),zt(e),this.da&&window.removeEventListener("resize",this.da))}function Ac(){return Vt("firebaseui-id-dialog")}function Rc(){zt(Pc.call(this))}function Pc(){return Yo(this,"firebaseui-id-info-bar")}function Oc(){return Yo(this,"firebaseui-id-dismiss-info-bar")}var Nc={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function Lc(e,t,i){for(var n in Hi.call(this,e,t),i)this[n]=i[n]}function Dc(e,t,i,n,r){$o.call(this,i),this.fb=e,this.eb=t,this.Fa=!1,this.Ga=n||null,this.A=this.ca=null,this.Z=ae(Nc),oe(this.Z,r||{})}function Mc(e){return e.N().parentElement||e.N().parentNode}function xc(e,t,i){ec(e,t,(function(){i.focus()}))}function Uc(e,t,i){ec(e,t,(function(){i()}))}function Fc(e,t,i){t=(e=e||{}).Va;var n=e.ia;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+ac(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?fc(null):"")+sc(null)+'</div></div><div class="firebaseui-card-footer">'+(n?mc(i):pc(i))+"</div></form></div>",ui(e)}function jc(e,t,i){return t=(e=e||{}).ia,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+ac(e)+dc()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+hc()+'</div><div class="firebaseui-form-actions">'+oc()+'</div></div><div class="firebaseui-card-footer">'+(t?mc(i):pc(i))+"</div></form></div>",ui(e)}function Bc(e,t,i){var n=(e=e||{}).Tb;t=e.Ta;var r=e.ia,a='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+ac(e);return n?(e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+fi(null!=(e=(e=e||{}).name)?e:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',e=ui(e)):e="",i=a+e+lc(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?fc(null):"")+cc()+'</div></div><div class="firebaseui-card-footer">'+(r?mc(i):pc(i))+"</div></form></div>",ui(i)}function Vc(e,t,i){return t=(e=e||{}).Ta,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+ac(e)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?fc(null):"")+sc({label:di("Send")})+'</div></div><div class="firebaseui-card-footer">'+pc(i)+"</div></form></div>",ui(e)}function Hc(e,t,i){t=e.G;var n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Follow the instructions sent to <strong>"+ai(e.email)+"</strong> to recover your password")+'</p></div><div class="firebaseui-card-actions">',t&&(n+='<div class="firebaseui-form-actions">'+sc({label:di("Done")})+"</div>"),n+='</div><div class="firebaseui-card-footer">'+pc(i)+"</div></div>",ui(n)}function Wc(e,t,i){return ui('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+wc(null)+"</div></div>")}function Gc(e,t,i){return ui('<div class="firebaseui-container firebaseui-id-page-spinner">'+wc({tb:!0})+"</div>")}function zc(){return ui('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}function Kc(e,t,i){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+(e="A sign-in email with additional instructions was sent to <strong>"+ai(e.email)+"</strong>. Check your email to complete sign-in.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+ui('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>')+'</div><div class="firebaseui-form-actions">'+fc({label:di("Back")})+'</div></div><div class="firebaseui-card-footer">'+pc(i)+"</div></form></div>",ui(t)}function qc(e,t,i){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+ui('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+fc({label:di("Back")})+'</div></div><div class="firebaseui-card-footer">'+pc(i)+"</div></form></div>",ui(e)}function $c(e,t,i){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+ac(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+fc(null)+sc(null)+'</div></div><div class="firebaseui-card-footer">'+pc(i)+"</div></form></div>",ui(e)}function Yc(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+fc({label:di("Dismiss")})+"</div></div></div>";return ui(e)}function Jc(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+fc({label:di("Dismiss")})+"</div></div></div>";return ui(e)}function Xc(e,t,i){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(e="You’ve already used <strong>"+ai(e.email)+"</strong> to sign in. Enter your password for that account.")+"</p>"+dc()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+hc()+'</div><div class="firebaseui-form-actions">'+oc()+'</div></div><div class="firebaseui-card-footer">'+pc(i)+"</div></form></div>",ui(t)}function Zc(e,t,i){var n=e.email;return t="",e=di(e=""+Ic(e,i)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+(n="You’ve already used <strong>"+ai(n)+"</strong>. You can connect your <strong>"+ai(e)+"</strong> account with <strong>"+ai(n)+"</strong> by signing in with email link below.")+'<p class="firebaseui-text firebaseui-text-justify">'+(e="For this flow to successfully connect your "+ai(e)+" account with this email, you have to open the link on the same device or browser.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+oc()+'</div></div><div class="firebaseui-card-footer">'+pc(i)+"</div></form></div>",ui(t)}function Qc(e,t,i){t="";var n=""+Ic(e,i);return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+(e="You originally intended to connect <strong>"+ai(n=di(n))+"</strong> to your email account but have opened the link on a different device where you are not signed in.")+'</p><p class="firebaseui-text firebaseui-text-justify">'+(n="If you still want to connect your <strong>"+ai(n)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uc()+'</div></div><div class="firebaseui-card-footer">'+pc(i)+"</div></form></div>",ui(t)}function eu(e,t,i){var n=e.email;return t="",e=di(e=""+Ic(e,i)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(n="You’ve already used <strong>"+ai(n)+"</strong>. Sign in with "+ai(e)+" to continue.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+sc({label:di("Sign in with "+e)})+'</div></div><div class="firebaseui-card-footer">'+pc(i)+"</div></form></div>",ui(t)}function tu(e,t,i){var n=(e=e||{}).kc;t=e.yb,e=e.Eb;var r='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return n?r+=n="<strong>"+ai(n)+"</strong> is not authorized to view the requested page.":r+="User is not authorized to view the requested page.",r+="</p>",t&&(r+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+(t="Please contact <strong>"+ai(t)+"</strong> for authorization.")+"</p>"),r+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',e&&(r+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),r+='</div><div class="firebaseui-form-actions">'+fc({label:di("Back")})+'</div></div><div class="firebaseui-card-footer">'+pc(i)+"</div></form></div>",ui(r)}function iu(e,t,i){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="To continue sign in with <strong>"+ai(e.email)+"</strong> on this device, you have to recover the password.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+fc(null)+sc({label:di("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+pc(i)+"</div></form></div>",ui(t)}function nu(e){var t="";return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+('<p class="firebaseui-text">for <strong>'+ai(e.email)+"</strong></p>")+lc(function(e){function t(){}var i={label:di("New password")};for(var n in t.prototype=e,e=new t,i)e[n]=i[n];return e}(e))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+cc()+"</div></div></form></div>",ui(t)}function ru(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",ui(e)}function au(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",ui(e)}function su(e){var t=e.G,i="";return i+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Your sign-in email address has been changed back to <strong>"+ai(e.email)+"</strong>.")+'</p><p class="firebaseui-text">If you didn’t ask to change your sign-in email, it’s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></form></div>",ui(i)}function ou(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can’t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",ui(e)}function cu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",ui(e)}function uu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",ui(e)}function lu(e){var t=e.G,i="";return i+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="You can now sign in with your new email <strong>"+ai(e.email)+"</strong>.")+'</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",ui(i)}function du(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",ui(e)}function hu(e){var t=e.factorId,i=e.phoneNumber;e=e.G;var n='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';if("phone"===t)n+=t="The <strong>"+ai(t)+" "+ai(i)+"</strong> was removed as a second authentication step.";else n+="The device or app was removed as a second authentication step.";return n+='</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(e?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></form></div>",ui(n)}function fu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+uc()+"</div>":"")+"</div></div>",ui(e)}function pu(e){var t=e.zb;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+ai(e.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',t&&(e+=sc({label:di("Retry")})),ui(e+"</div></div></div>")}function mu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+ai(e.errorMessage)+"</p></div></div>",ui(e)}function gu(e,t,i){var n=e.Qb;return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+(e="Continue with "+ai(e.jc)+"?")+'</h2><p class="firebaseui-text">'+(n="You originally wanted to sign in with "+ai(n))+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+fc(null)+sc({label:di("Continue")})+'</div></div><div class="firebaseui-card-footer">'+pc(i)+"</div></form></div>",ui(t)}function vu(e,t,i){var n='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';t=(e=e.Sb).length;for(var r=0;r<t;r++){var a={ga:e[r]},s=i,o=(a=a||{}).ga,c=a,u="";switch((c=c||{}).ga.providerId){case"google.com":u+="firebaseui-idp-google";break;case"github.com":u+="firebaseui-idp-github";break;case"facebook.com":u+="firebaseui-idp-facebook";break;case"twitter.com":u+="firebaseui-idp-twitter";break;case"phone":u+="firebaseui-idp-phone";break;case"anonymous":u+="firebaseui-idp-anonymous";break;case"password":u+="firebaseui-idp-password";break;default:u+="firebaseui-idp-generic"}c=(c='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+fi(ci(u))+' firebaseui-id-idp-button" data-provider-id="'+fi(o.providerId)+'" style="background-color:')+fi(mi(ci((u=(u=(u=a)||{}).ga).ta?u.ta:s.wa[u.providerId]?""+s.wa[u.providerId]:0==u.providerId.indexOf("saml.")?""+s.wa.saml:0==u.providerId.indexOf("oidc.")?""+s.wa.oidc:""+s.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var l=a;u=s,l=(l=l||{}).ga,u=li(l.za?pi(l.za):u.xa[l.providerId]?pi(u.xa[l.providerId]):0==l.providerId.indexOf("saml.")?pi(u.xa.saml):0==l.providerId.indexOf("oidc.")?pi(u.xa.oidc):pi(u.xa.password)),c=c+fi(pi(u))+'"></span>',"password"==o.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=ai(o.V):o.S?c+=a="Sign in with "+ai(Ic(a,s)):c+="Sign in with email",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=o.S?c+ai(o.S):c+"Email",c+="</span>"):"phone"==o.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=ai(o.V):o.S?c+=a="Sign in with "+ai(Ic(a,s)):c+="Sign in with phone",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=o.S?c+ai(o.S):c+"Phone",c+="</span>"):"anonymous"==o.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=ai(o.V):o.S?c+=a="Sign in with "+ai(Ic(a,s)):c+="Continue as guest",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=o.S?c+ai(o.S):c+"Guest",c+="</span>"):(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=ai(o.V):c+=u="Sign in with "+ai(Ic(a,s)),c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(o.S?ai(o.S):ai(Ic(a,s)))+"</span>"),n+='<li class="firebaseui-list-item">'+(o=ui(c+"</button>"))+"</li>"}return n+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+mc(i)+"</div></div>",ui(n)}function bu(e,t,i){var n,r=(e=e||{}).Gb,a=e.Va;return t=e.ia,e='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+fi(null!=(e=(e=e||{}).Aa)?e:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',n=(e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+ui(e))+(n=r?ui('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):"")+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(a?fc(null):"")+sc({label:di("Verify")})+'</div></div><div class="firebaseui-card-footer">',t?(t='<p class="firebaseui-tos firebaseui-phone-tos">',t=i.F&&i.D?t+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':t+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",i=ui(t+"</p>")):i=ui('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+pc(i),ui(n+i+"</div></form></div>")}function yu(e,t,i){var n="";return e='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+ai(t=(e=e||{}).phoneNumber)+"</a>",ai(t),t=n,i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+"</p>"+(n=ui('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+fc(null)+sc({label:di("Continue")})+'</div></div><div class="firebaseui-card-footer">'+pc(i)+"</div></form>",e=ui('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),ui(t+(i+e+"</div>"))}function wu(){return ui('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}function Iu(e,t,i){var n='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';t=(e=e.ec).length;for(var r=0;r<t;r++){var a=e[r],s="",o=ai(a.displayName),c=a.tenantId?a.tenantId:"top-level-project";s+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+fi(c=di(c))+' firebaseui-id-tenant-selection-button"'+(a.tenantId?'data-tenant-id="'+fi(a.tenantId)+'"':"")+'style="background-color:'+fi(mi(a.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+fi(pi(a.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',a.V?s+=ai(a.V):s+=a="Sign in to "+ai(a.displayName),n+='<li class="firebaseui-list-item">'+(s=ui(s+'</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+o+"</span></button>"))+"</li>"}return n+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+mc(i)+"</div></div>",ui(n)}function _u(e,t,i){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+ac(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+sc(null)+'</div></div><div class="firebaseui-card-footer">'+mc(i)+"</div></form></div>",ui(e)}function Eu(){return Yo(this,"firebaseui-id-submit")}function ku(){return Yo(this,"firebaseui-id-secondary-link")}function Su(e,t){tc(this,Eu.call(this),(function(t){e(t)}));var i=ku.call(this);i&&t&&tc(this,i,(function(e){t(e)}))}function Cu(){return Yo(this,"firebaseui-id-password")}function Tu(){return Yo(this,"firebaseui-id-password-error")}function Au(){var e=Cu.call(this),t=Tu.call(this);Qo(this,e,(function(){rc(t)&&(Zo(e,!0),ic(t))}))}function Ru(){var e=Cu.call(this),t=Tu.call(this);return mo(e)?(Zo(e,!0),ic(t),t=!0):(Zo(e,!1),nc(t,ci("Enter your password").toString()),t=!1),t?mo(e):null}function Pu(e,t,i,n,r,a){Dc.call(this,Xc,{email:e},a,"passwordLinking",{F:n,D:r}),this.w=t,this.H=i}N(Lc,Hi),N(Dc,$o),(e=Dc.prototype).kb=function(){var e=ti(this.fb,this.eb,this.Z,this.s);_c(e),this.g=e},e.v=function(){if(Dc.K.v.call(this),bn(Mc(this),new Lc("pageEnter",Mc(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var e=this.Z.F;tc(this,this.bb(),(function(){e()}))}if(this.ab()&&this.Z.D){var t=this.Z.D;tc(this,this.ab(),(function(){t()}))}},e.ya=function(){bn(Mc(this),new Lc("pageExit",Mc(this),{pageId:this.Ga})),Dc.K.ya.call(this)},e.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,Ec(this.N()),Dc.K.o.call(this)},e.I=function(e,t,i,n){function r(){if(a.T)return null;a.Fa=!1,window.clearTimeout(a.ca),a.ca=null,a.A&&(Ec(a.A),zt(a.A),a.A=null)}var a=this;return a.Fa?null:(function(e){e.Fa=!0;var t=ho(e.N(),"firebaseui-use-spinner");e.ca=window.setTimeout((function(){e.N()&&null===e.A&&(e.A=ti(wc,{tb:t},null,e.s),e.N().appendChild(e.A),_c(e.A))}),500)}(a),e.apply(null,t).then(i,n).then(r,r))},A(Dc.prototype,{a:function(e){Rc.call(this);var t=ti(gc,{message:e},null,this.s);this.N().appendChild(t),tc(this,Oc.call(this),(function(){zt(t)}))},yc:Rc,Ac:Pc,zc:Oc,$:function(e,t){e=ti(bc,{Ma:e,message:t},null,this.s),Cc.call(this,e)},h:Tc,Cb:Ac,Cc:function(){return Yo(this,"firebaseui-tos")},bb:function(){return Yo(this,"firebaseui-tos-link")},ab:function(){return Yo(this,"firebaseui-pp-link")},Dc:function(){return Yo(this,"firebaseui-tos-list")}}),Fc.a="firebaseui.auth.soy2.page.signIn",jc.a="firebaseui.auth.soy2.page.passwordSignIn",Bc.a="firebaseui.auth.soy2.page.passwordSignUp",Vc.a="firebaseui.auth.soy2.page.passwordRecovery",Hc.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent",Wc.a="firebaseui.auth.soy2.page.callback",Gc.a="firebaseui.auth.soy2.page.spinner",zc.a="firebaseui.auth.soy2.page.blank",Kc.a="firebaseui.auth.soy2.page.emailLinkSignInSent",qc.a="firebaseui.auth.soy2.page.emailNotReceived",$c.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation",Yc.a="firebaseui.auth.soy2.page.differentDeviceError",Jc.a="firebaseui.auth.soy2.page.anonymousUserMismatch",Xc.a="firebaseui.auth.soy2.page.passwordLinking",Zc.a="firebaseui.auth.soy2.page.emailLinkSignInLinking",Qc.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice",eu.a="firebaseui.auth.soy2.page.federatedLinking",tu.a="firebaseui.auth.soy2.page.unauthorizedUser",iu.a="firebaseui.auth.soy2.page.unsupportedProvider",nu.a="firebaseui.auth.soy2.page.passwordReset",ru.a="firebaseui.auth.soy2.page.passwordResetSuccess",au.a="firebaseui.auth.soy2.page.passwordResetFailure",su.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess",ou.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure",cu.a="firebaseui.auth.soy2.page.emailVerificationSuccess",uu.a="firebaseui.auth.soy2.page.emailVerificationFailure",lu.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess",du.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure",hu.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess",fu.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure",pu.a="firebaseui.auth.soy2.page.recoverableError",mu.a="firebaseui.auth.soy2.page.unrecoverableError",gu.a="firebaseui.auth.soy2.page.emailMismatch",vu.a="firebaseui.auth.soy2.page.providerSignIn",bu.a="firebaseui.auth.soy2.page.phoneSignInStart",yu.a="firebaseui.auth.soy2.page.phoneSignInFinish",wu.a="firebaseui.auth.soy2.page.signOut",Iu.a="firebaseui.auth.soy2.page.selectTenant",_u.a="firebaseui.auth.soy2.page.providerMatchByEmail",s(Pu,Dc),Pu.prototype.v=function(){this.P(),this.M(this.w,this.H),Uc(this,this.i(),this.w),this.i().focus(),Dc.prototype.v.call(this)},Pu.prototype.o=function(){this.w=null,Dc.prototype.o.call(this)},Pu.prototype.j=function(){return mo(Yo(this,"firebaseui-id-email"))},A(Pu.prototype,{i:Cu,B:Tu,P:Au,u:Ru,ea:Eu,ba:ku,M:Su});var Ou=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function Nu(){return Yo(this,"firebaseui-id-email")}function Lu(){return Yo(this,"firebaseui-id-email-error")}function Du(e){var t=Nu.call(this),i=Lu.call(this);Qo(this,t,(function(){rc(i)&&(Zo(t,!0),ic(i))})),e&&ec(this,t,(function(){e()}))}function Mu(){return $(mo(Nu.call(this))||"")}function xu(){var e=Nu.call(this),t=Lu.call(this),i=mo(e)||"";return i?Ou.test(i)?(Zo(e,!0),ic(t),t=!0):(Zo(e,!1),nc(t,ci("That email address isn't correct").toString()),t=!1):(Zo(e,!1),nc(t,ci("Enter your email address to continue").toString()),t=!1),t?$(mo(e)):null}function Uu(e,t,i,n,r,a,s){Dc.call(this,jc,{email:i,ia:!!a},s,"passwordSignIn",{F:n,D:r}),this.w=e,this.H=t}function Fu(e,t,i,n,r,a){Dc.call(this,e,t,n,r||"notice",a),this.i=i||null}function ju(e,t,i,n,r){Fu.call(this,Hc,{email:e,G:!!t},t,r,"passwordRecoveryEmailSent",{F:i,D:n})}function Bu(e,t){Fu.call(this,cu,{G:!!e},e,t,"emailVerificationSuccess")}function Vu(e,t){Fu.call(this,uu,{G:!!e},e,t,"emailVerificationFailure")}function Hu(e,t,i){Fu.call(this,lu,{email:e,G:!!t},t,i,"verifyAndChangeEmailSuccess")}function Wu(e,t){Fu.call(this,du,{G:!!e},e,t,"verifyAndChangeEmailFailure")}function Gu(e,t){Fu.call(this,fu,{G:!!e},e,t,"revertSecondFactorAdditionFailure")}function zu(e){Fu.call(this,wu,void 0,void 0,e,"signOut")}function Ku(e,t){Fu.call(this,ru,{G:!!e},e,t,"passwordResetSuccess")}function qu(e,t){Fu.call(this,au,{G:!!e},e,t,"passwordResetFailure")}function $u(e,t){Fu.call(this,ou,{G:!!e},e,t,"emailChangeRevokeFailure")}function Yu(e,t,i){Fu.call(this,pu,{errorMessage:e,zb:!!t},t,i,"recoverableError")}function Ju(e,t){Fu.call(this,mu,{errorMessage:e},void 0,t,"unrecoverableError")}function Xu(e){if("auth/invalid-credential"===e.code&&e.message&&-1!==e.message.indexOf("error=consent_required"))return{code:"auth/user-cancelled"};if(e.message&&-1!==e.message.indexOf("HTTP Cloud Function returned an error:")){var t=JSON.parse(e.message.substring(e.message.indexOf("{"),e.message.lastIndexOf("}")+1));return{code:e.code,message:t&&t.error&&t.error.message||e.message}}return e}function Zu(e,t,i,n){function r(i){if(!i.name||"cancel"!=i.name){e:{var n=i.message;try{var r=((JSON.parse(n).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(r&&r.length){var a=!0;break e}}catch(s){}a=!1}if(a)i=Mc(t),t.m(),al(e,i,void 0,ci("Your sign-in session has expired. Please try again.").toString());else{if(a=i&&i.message||"",i.code){if("auth/email-already-in-use"==i.code||"auth/credential-already-in-use"==i.code)return;a=tl(i)}t.a(a)}}}if(Pd(e),n)return Qu(e,i),Wn();if(!i.credential)throw Error("No credential found!");if(!wd(e).currentUser&&!i.user)throw Error("User not logged in.");try{var a=function(e,t){return Ld(e),Td(e,(function(i){if(e.j&&!e.j.isAnonymous&&Ts(Nd(e))&&!wd(e).currentUser)return Md(e).then((function(){return"password"==t.credential.providerId&&(t.credential=null),t}));if(i)return Md(e).then((function(){return i.linkWithCredential(t.credential)})).then((function(e){return t.user=e.user,t.credential=e.credential,t.operationType=e.operationType,t.additionalUserInfo=e.additionalUserInfo,t}),(function(i){if(i&&"auth/email-already-in-use"==i.code&&i.email&&i.credential)throw i;return xd(e,i,t.credential)}));if(!t.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return Md(e).then((function(){return Id(e).updateCurrentUser(t.user)})).then((function(){return t.user=Id(e).currentUser,t.operationType="signIn",t.credential&&t.credential.providerId&&"password"==t.credential.providerId&&(t.credential=null),t}))}))}(e,i)}catch(s){return Kr(s.code||s.message,s),t.a(s.code||s.message),Wn()}return i=a.then((function(t){Qu(e,t)}),r).then(void 0,r),Rd(e,a),Wn(i)}function Qu(e,t){if(!t.user)throw Error("No user found");var i=qs(Nd(e));if(Ks(Nd(e))&&i&&Jr("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),i){i=qs(Nd(e));var n=Qa(_d(e))||void 0;Xa(qa,_d(e));var r=!1;ir()?(i&&!i(t,n)||(r=!0,xt(window.opener.location,el(e,n))),i||window.close()):i&&!i(t,n)||(r=!0,xt(window.location,el(e,n))),r||e.reset()}else{i=t.user,t=t.credential,n=Ks(Nd(e)),r=Qa(_d(e))||void 0,Xa(qa,_d(e));var a=!1;ir()?(n&&!n(i,t,r)||(a=!0,xt(window.opener.location,el(e,r))),n||window.close()):n&&!n(i,t,r)||(a=!0,xt(window.location,el(e,r))),a||e.reset()}}function el(e,t){if(!(e=t||Nd(e).a.get("signInSuccessUrl")))throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return e}function tl(e){var t={code:e.code},i="";switch((t=t||{}).code){case"auth/email-already-in-use":i+="The email address is already used by another account";break;case"auth/requires-recent-login":case"auth/user-token-expired":i+=Oi();break;case"auth/too-many-requests":i+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":i+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":i+="That email address doesn't match an existing account";break;case"auth/weak-password":i+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":i+="The email and password you entered don't match";break;case"auth/network-request-failed":i+="A network error has occurred";break;case"auth/invalid-phone-number":i+=Ci();break;case"auth/invalid-verification-code":i+=ci("Wrong code. Try again.");break;case"auth/code-expired":i+="This code is no longer valid";break;case"auth/expired-action-code":i+="This code has expired.";break;case"auth/invalid-action-code":i+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(t=ci(i).toString())return t;try{return JSON.parse(e.message),Kr("Internal error: "+e.message,void 0),Ai().toString()}catch(n){return e.message}}function il(e,t,i,n){function r(){!function(e,t){Za(Ka,{tenantId:e.a},t)}(new sa(e.h.tenantId||null),_d(e)),Rd(e,t.I(C(e.dc,e),[c],(function(){if("file:"===(window.location&&window.location.protocol))return Rd(e,vd(e).then((function(i){t.m(),Xa(Ka,_d(e)),uo("callback",e,o,Wn(i))}),a))}),s))}function a(n){if(Xa(Ka,_d(e)),!n.name||"cancel"!=n.name)switch(n=Xu(n),n.code){case"auth/popup-blocked":r();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":t.a(tl(n));break;case"auth/admin-restricted-operation":t.m(),Ms(Nd(e))?uo("handleUnauthorizedUser",e,o,null,i):uo("callback",e,o,Gn(n));break;default:t.m(),uo("callback",e,o,Gn(n))}}function s(i){Xa(Ka,_d(e)),i.name&&"cancel"==i.name||(Kr("signInWithRedirect: "+i.code,void 0),i=tl(i),"blank"==t.Ga&&Gs(Nd(e))?(t.m(),uo("providerSignIn",e,o,i)):t.a(i))}var o=Mc(t),c=function(e,t,i){var n=Ss[t]&&ta.auth[Ss[t]]?new ta.auth[Ss[t]]:0==t.indexOf("saml.")?new ta.auth.SAMLAuthProvider(t):new ta.auth.OAuthProvider(t);if(!n)throw Error("Invalid Firebase Auth provider!");var r=xs(Nd(e),t);if(n.addScope)for(var a=0;a<r.length;a++)n.addScope(r[a]);return r=Us(Nd(e),t)||{},i&&(e=t==ta.auth.GoogleAuthProvider.PROVIDER_ID?"login_hint":t==ta.auth.GithubAuthProvider.PROVIDER_ID?"login":(e=Os(Nd(e),t))&&e.Ob)&&(r[e]=i),n.setCustomParameters&&n.setCustomParameters(r),n}(e,i,n);zs(Nd(e))==no?r():Rd(e,function(e,t){return Ld(e),Td(e,(function(i){return i&&!es(_d(e))?i.linkWithPopup(t).then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return xd(e,t)})):wd(e).signInWithPopup(t)}))}(e,c).then((function(i){t.m(),uo("callback",e,o,Wn(i))}),a))}function nl(e){return 1==(e=Ps(Nd(e))).length&&e[0]==ta.auth.EmailAuthProvider.PROVIDER_ID}function rl(e){return 1==(e=Ps(Nd(e))).length&&e[0]==ta.auth.PhoneAuthProvider.PROVIDER_ID}function al(e,t,i,n){nl(e)?n?uo("signIn",e,t,i,n):ul(e,t,i):e&&rl(e)&&!n?uo("phoneSignInStart",e,t):e&&Gs(Nd(e))&&!n?uo("federatedRedirect",e,t,i):uo("providerSignIn",e,t,n,i)}function sl(e,t,i,n){var r=Mc(t);Rd(e,t.I(C(wd(e).fetchSignInMethodsForEmail,wd(e)),[i],(function(a){t.m(),ol(e,r,a,i,n)}),(function(e){e=tl(e),t.a(e)})))}function ol(e,t,i,n,r,a){i.length||Ws(Nd(e))&&!Ws(Nd(e))?V(i,ta.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?uo("passwordSignIn",e,t,n,a):1==i.length&&i[0]===ta.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?Ws(Nd(e))?uo("sendEmailLinkForSignIn",e,t,n,(function(){uo("signIn",e,t)})):uo("unsupportedProvider",e,t,n):(i=Es(i,Ps(Nd(e))))?(is(new na(n),_d(e)),uo("federatedSignIn",e,t,n,i,r)):uo("unsupportedProvider",e,t,n):Ds(Nd(e))?uo("handleUnauthorizedUser",e,t,n,ta.auth.EmailAuthProvider.PROVIDER_ID):Ws(Nd(e))?uo("sendEmailLinkForSignIn",e,t,n,(function(){uo("signIn",e,t)})):uo("passwordSignUp",e,t,n,void 0,void 0,a)}function cl(e,t,i,n,r,a){var s=Mc(t);Rd(e,t.I(C(e.Ib,e),[i,a],(function(){t.m(),uo("emailLinkSignInSent",e,s,i,n,a)}),r))}function ul(e,t,i){i?uo("prefilledEmailSignIn",e,t,i):uo("signIn",e,t)}function ll(){return be(ar(),"oobCode")}function dl(){var e=be(ar(),"continueUrl");return e?function(){xt(window.location,e)}:null}function hl(e,t){Dc.call(this,Jc,void 0,t,"anonymousUserMismatch"),this.i=e}function fl(e){Dc.call(this,Wc,void 0,e,"callback")}function pl(e,t,i){if(i.user){var n={user:i.user,credential:i.credential,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo},r=es(_d(e)),a=r&&r.g;if(a&&!function(e,t){if(t==e.email)return!0;if(e.providerData)for(var i=0;i<e.providerData.length;i++)if(t==e.providerData[i].email)return!0;return!1}(i.user,a))!function(e,t,i){var n=Mc(t);Rd(e,Md(e).then((function(){t.m(),uo("emailMismatch",e,n,i)}),(function(e){e.name&&"cancel"==e.name||(e=tl(e.code),t.a(e))})))}(e,t,n);else{var s=r&&r.a;s?Rd(e,i.user.linkWithCredential(s).then((function(i){n={user:i.user,credential:s,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo},ml(e,t,n)}),(function(i){gl(e,t,i)}))):ml(e,t,n)}}else i=Mc(t),t.m(),ts(_d(e)),al(e,i)}function ml(e,t,i){ts(_d(e)),Zu(e,t,i)}function gl(e,t,i){var n=Mc(t);ts(_d(e)),i=tl(i),t.m(),al(e,n,void 0,i)}function vl(e,t,i,n){var r=Mc(t);Rd(e,wd(e).fetchSignInMethodsForEmail(i).then((function(a){t.m(),a.length?V(a,ta.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?uo("passwordLinking",e,r,i):1==a.length&&a[0]===ta.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?uo("emailLinkSignInLinking",e,r,i):(a=Es(a,Ps(Nd(e))))?uo("federatedLinking",e,r,i,a,n):(ts(_d(e)),uo("unsupportedProvider",e,r,i)):(ts(_d(e)),uo("passwordRecovery",e,r,i,!1,Ri().toString()))}),(function(i){gl(e,t,i)})))}function bl(e,t){Dc.call(this,Yc,void 0,t,"differentDeviceError"),this.i=e}function yl(e,t,i,n){Dc.call(this,su,{email:e,G:!!i},n,"emailChangeRevoke"),this.l=t,this.i=i||null}function wl(){return Yo(this,"firebaseui-id-new-password")}function Il(){return Yo(this,"firebaseui-id-password-toggle")}function _l(){this.Ra=!this.Ra;var e=Il.call(this),t=wl.call(this);this.Ra?(t.type="text",fo(e,"firebaseui-input-toggle-off"),po(e,"firebaseui-input-toggle-on")):(t.type="password",fo(e,"firebaseui-input-toggle-on"),po(e,"firebaseui-input-toggle-off")),t.focus()}function El(){return Yo(this,"firebaseui-id-new-password-error")}function kl(){this.Ra=!1;var e=wl.call(this);e.type="password";var t=El.call(this);Qo(this,e,(function(){rc(t)&&(Zo(e,!0),ic(t))}));var i=Il.call(this);fo(i,"firebaseui-input-toggle-on"),po(i,"firebaseui-input-toggle-off"),function(e,t,i){xi(e,T(Ui,t=new ko(t))),Ro(Jo(e),t,"focusin",i)}(this,e,(function(){fo(i,"firebaseui-input-toggle-focus"),po(i,"firebaseui-input-toggle-blur")})),function(e,t,i){xi(e,T(Ui,t=new ko(t))),Ro(Jo(e),t,"focusout",i)}(this,e,(function(){fo(i,"firebaseui-input-toggle-blur"),po(i,"firebaseui-input-toggle-focus")})),tc(this,i,C(_l,this))}function Sl(){var e=wl.call(this),t=El.call(this);return mo(e)?(Zo(e,!0),ic(t),t=!0):(Zo(e,!1),nc(t,ci("Enter your password").toString()),t=!1),t?mo(e):null}function Cl(e,t,i){Dc.call(this,nu,{email:e},i,"passwordReset"),this.l=t}function Tl(e,t,i,n,r){Dc.call(this,hu,{factorId:e,phoneNumber:i||null,G:!!n},r,"revertSecondFactorAdditionSuccess"),this.l=t,this.i=n||null}function Al(e,t,i,n){"auth/weak-password"==(n&&n.code)?(e=tl(n),Zo(i.i(),!1),nc(i.w(),e),i.i().focus()):(i&&i.m(),(i=new qu).render(t),bd(e,i))}function Rl(e,t){try{var i="number"==typeof e.selectionStart}catch(n){i=!1}i?(e.selectionStart=t,e.selectionEnd=t):Ze&&!dt("9")&&("textarea"==e.type&&(t=e.value.substring(0,t).replace(/(\r\n|\r|\n)/g,"\n").length),(e=e.createTextRange()).collapse(!0),e.move("character",t),e.select())}function Pl(e,t,i,n,r,a){Dc.call(this,$c,{email:i},a,"emailLinkSignInConfirmation",{F:n,D:r}),this.l=e,this.u=t}function Ol(e,t,i,n,r){Dc.call(this,Qc,{ga:e},r,"emailLinkSignInLinkingDifferentDevice",{F:i,D:n}),this.i=t}function Nl(e){Dc.call(this,zc,void 0,e,"blank")}function Ll(e,t,i,n,r){var a=new Nl,s=new je(i),o=s.a.a.get(We.$a)||"",c=s.a.a.get(We.Sa)||"",u="1"===s.a.a.get(We.Qa),l=Be(s),d=s.a.a.get(We.PROVIDER_ID)||null;s=s.a.a.get(We.vb)||null,Od(e,s);var h=!Ja($a,_d(e)),f=n||function(e,t){var i=null;if(t=Ja($a,t))try{var n=Aa(e,t),r=JSON.parse(n);i=r&&r.email||null}catch(a){}return i}(c,_d(e)),p=(n=function(e,t){var i=null;if(t=Ja(Ya,t))try{var n=Aa(e,t);i=JSON.parse(n)}catch(r){}return aa(i||null)}(c,_d(e)))&&n.a;d&&p&&p.providerId!==d&&(p=null),a.render(t),bd(e,a),Rd(e,a.I((function(){var t=Wn(null);t=l&&h||h&&u?Gn(Error("anonymous-user-not-found")):function(e,t){var i=Be(new je(t));return i?(t=new xn((function(t,n){var r=Id(e).onAuthStateChanged((function(e){r(),e&&e.isAnonymous&&e.uid===i?t(e):e&&e.isAnonymous&&e.uid!==i?n(Error("anonymous-user-mismatch")):n(Error("anonymous-user-not-found"))}));Rd(e,r)})),Rd(e,t),t):Wn(null)}(e,i).then((function(e){if(d&&!p)throw Error("pending-credential-not-found");return e}));var n=null;return t.then((function(t){return n=t,r?null:wd(e).checkActionCode(o)})).then((function(){return n}))}),[],(function(n){f?function(e,t,i,n,r,a){var s=Mc(t);t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",ci("Signing in...").toString());var o=null;r=(a?function(e,t,i,n,r){Ld(e);var a=r||null,s=ta.auth.EmailAuthProvider.credentialWithLink(i,n);return i=a?wd(e).signInWithEmailLink(i,n).then((function(e){return e.user.linkWithCredential(a)})).then((function(){return Md(e)})).then((function(){return xd(e,{code:"auth/email-already-in-use"},a)})):wd(e).fetchSignInMethodsForEmail(i).then((function(i){return i.length?xd(e,{code:"auth/email-already-in-use"},s):t.linkWithCredential(s)})),Rd(e,i),i}(e,a,i,n,r):function(e,t,i,n){Ld(e);var r,a=n||null;return t=wd(e).signInWithEmailLink(t,i).then((function(e){if(r={user:e.user,credential:null,operationType:e.operationType,additionalUserInfo:e.additionalUserInfo},a)return e.user.linkWithCredential(a).then((function(e){r={user:e.user,credential:a,operationType:r.operationType,additionalUserInfo:e.additionalUserInfo}}))})).then((function(){Md(e)})).then((function(){return Id(e).updateCurrentUser(r.user)})).then((function(){return r.user=Id(e).currentUser,r})),Rd(e,t),t}(e,i,n,r)).then((function(i){Xa(Ya,_d(e)),Xa($a,_d(e)),t.h(),t.$("firebaseui-icon-done",ci("Signed in!").toString()),o=setTimeout((function(){t.h(),Zu(e,t,i,!0)}),1e3),Rd(e,(function(){t&&(t.h(),t.m()),clearTimeout(o)}))}),(function(r){if(t.h(),t.m(),!r.name||"cancel"!=r.name){var a=tl(r=Xu(r));"auth/email-already-in-use"==r.code||"auth/credential-already-in-use"==r.code?(Xa(Ya,_d(e)),Xa($a,_d(e))):"auth/invalid-email"==r.code?(a=ci("The email provided does not match the current sign-in session.").toString(),uo("emailLinkConfirmation",e,s,n,Dl,null,a)):al(e,s,i,a)}})),Rd(e,r)}(e,a,f,i,p,n):u?(a.m(),uo("differentDeviceError",e,t)):(a.m(),uo("emailLinkConfirmation",e,t,i,Dl))}),(function(n){var r=void 0;if(!n||!n.name||"cancel"!=n.name)switch(a.m(),n&&n.message){case"anonymous-user-not-found":uo("differentDeviceError",e,t);break;case"anonymous-user-mismatch":uo("anonymousUserMismatch",e,t);break;case"pending-credential-not-found":uo("emailLinkNewDeviceLinking",e,t,i,Ml);break;default:n&&(r=tl(n)),al(e,t,void 0,r)}})))}function Dl(e,t,i,n){Ll(e,t,n,i,!0)}function Ml(e,t,i){Ll(e,t,i)}function xl(e,t,i,n,r,a){Dc.call(this,Zc,{email:e,ga:t},a,"emailLinkSignInLinking",{F:n,D:r}),this.i=i}function Ul(e,t,i,n,r,a){Dc.call(this,Kc,{email:e},a,"emailLinkSignInSent",{F:n,D:r}),this.u=t,this.i=i}function Fl(e,t,i,n,r,a,s){Dc.call(this,gu,{jc:e,Qb:t},s,"emailMismatch",{F:r,D:a}),this.l=i,this.i=n}function jl(e,t,i,n,r){Dc.call(this,qc,void 0,r,"emailNotReceived",{F:i,D:n}),this.l=e,this.i=t}function Bl(e,t,i,n,r,a){Dc.call(this,eu,{email:e,ga:t},a,"federatedLinking",{F:n,D:r}),this.i=i}function Vl(e,t,i,n,r,a){Dc.call(this,Vc,{email:i,Ta:!!t},a,"passwordRecovery",{F:n,D:r}),this.l=e,this.u=t}function Hl(){return Yo(this,"firebaseui-id-name")}function Wl(){return Yo(this,"firebaseui-id-name-error")}function Gl(e,t,i,n,r,a,s,o,c){Dc.call(this,Bc,{email:n,Tb:e,name:r,Ta:!!i,ia:!!o},c,"passwordSignUp",{F:a,D:s}),this.w=t,this.H=i,this.B=e}function zl(e,t){var i=Hs(Nd(e)),n=t.j(),r=null;i&&(r=t.M());var a=t.P();if(n){if(i){if(!r)return void t.u().focus();r=ne(r)}if(a){var s=ta.auth.EmailAuthProvider.credential(n,a);Rd(e,t.I(C(e.Yb,e),[n,a],(function(n){var a={user:n.user,credential:s,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo};return i?(n=n.user.updateProfile({displayName:r}).then((function(){return Zu(e,t,a)})),Rd(e,n),n):Zu(e,t,a)}),(function(i){if(!i.name||"cancel"!=i.name){var r=Xu(i);switch(i=tl(r),r.code){case"auth/email-already-in-use":return function(e,t,i,n){function r(){var e=tl(n);Zo(t.i(),!1),nc(t.U(),e),t.i().focus()}var a=wd(e).fetchSignInMethodsForEmail(i).then((function(n){n.length?r():(n=Mc(t),t.m(),uo("passwordRecovery",e,n,i,!1,Ri().toString()))}),(function(){r()}));return Rd(e,a),a}(e,t,n,r);case"auth/too-many-requests":i=ci("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":Zo(t.l(),!1),nc(t.ba(),i);break;case"auth/admin-restricted-operation":Ms(Nd(e))?(i=Mc(t),t.m(),uo("handleUnauthorizedUser",e,i,n,ta.auth.EmailAuthProvider.PROVIDER_ID)):t.a(i);break;default:Kr(r="setAccountInfo: "+Pa(r),void 0),t.a(i)}}})))}else t.l().focus()}else t.i().focus()}function Kl(){return Yo(this,"firebaseui-id-phone-confirmation-code")}function ql(){return Yo(this,"firebaseui-id-phone-confirmation-code-error")}function $l(){return Yo(this,"firebaseui-id-resend-countdown")}function Yl(e,t,i,n,r,a,s,o,c){Dc.call(this,yu,{phoneNumber:r},c,"phoneSignInFinish",{F:s,D:o}),this.jb=a,this.i=new So(1e3),this.B=a,this.P=e,this.l=t,this.H=i,this.M=n}s(Uu,Dc),Uu.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),xc(this,this.l(),this.i()),Uc(this,this.i(),this.w),mo(this.l())?this.i().focus():this.l().focus(),Dc.prototype.v.call(this)},Uu.prototype.o=function(){this.H=this.w=null,Dc.prototype.o.call(this)},A(Uu.prototype,{l:Nu,U:Lu,P:Du,M:Mu,j:xu,i:Cu,B:Tu,ea:Au,u:Ru,ua:Eu,pa:ku,ba:Su}),N(Fu,Dc),Fu.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),Fu.K.v.call(this)},Fu.prototype.o=function(){this.i=null,Fu.K.o.call(this)},A(Fu.prototype,{l:Eu,w:ku,u:Su}),N(ju,Fu),N(Bu,Fu),N(Vu,Fu),N(Hu,Fu),N(Wu,Fu),N(Gu,Fu),N(zu,Fu),N(Ku,Fu),N(qu,Fu),N($u,Fu),N(Yu,Fu),N(Ju,Fu),s(hl,Dc),hl.prototype.v=function(){var e=this;tc(this,this.l(),(function(){e.i()})),this.l().focus(),Dc.prototype.v.call(this)},hl.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A(hl.prototype,{l:ku}),co.anonymousUserMismatch=function(e,t){var i=new hl((function(){i.m(),al(e,t)}));i.render(t),bd(e,i)},s(fl,Dc),fl.prototype.I=function(e,t,i,n){return e.apply(null,t).then(i,n)},co.callback=function(e,t,i){var n=new fl;n.render(t),bd(e,n),i=i||vd(e),Rd(e,i.then((function(t){pl(e,n,t)}),(function(i){if((i=Xu(i))&&("auth/account-exists-with-different-credential"==i.code||"auth/email-already-in-use"==i.code)&&i.email&&i.credential)is(new na(i.email,i.credential),_d(e)),vl(e,n,i.email);else if(i&&"auth/user-cancelled"==i.code){var r=es(_d(e)),a=tl(i);r&&r.a?vl(e,n,r.g,a):r?sl(e,n,r.g,a):gl(e,n,i)}else i&&"auth/credential-already-in-use"==i.code||(i&&"auth/operation-not-supported-in-this-environment"==i.code&&nl(e)?pl(e,n,{user:null,credential:null}):i&&"auth/admin-restricted-operation"==i.code&&Ms(Nd(e))?(n.m(),ts(_d(e)),uo("handleUnauthorizedUser",e,t,null,null)):gl(e,n,i))})))},s(bl,Dc),bl.prototype.v=function(){var e=this;tc(this,this.l(),(function(){e.i()})),this.l().focus(),Dc.prototype.v.call(this)},bl.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A(bl.prototype,{l:ku}),co.differentDeviceError=function(e,t){var i=new bl((function(){i.m(),al(e,t)}));i.render(t),bd(e,i)},s(yl,Dc),yl.prototype.v=function(){var e=this;tc(this,Yo(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Dc.prototype.v.call(this)},yl.prototype.o=function(){this.l=this.i=null,Dc.prototype.o.call(this)},A(yl.prototype,{u:Eu,B:ku,w:Su}),s(Cl,Dc),Cl.prototype.v=function(){this.H(),this.B(this.l),Uc(this,this.i(),this.l),this.i().focus(),Dc.prototype.v.call(this)},Cl.prototype.o=function(){this.l=null,Dc.prototype.o.call(this)},A(Cl.prototype,{i:wl,w:El,M:Il,H:kl,u:Sl,U:Eu,P:ku,B:Su}),s(Tl,Dc),Tl.prototype.v=function(){var e=this;tc(this,Yo(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Dc.prototype.v.call(this)},Tl.prototype.o=function(){this.l=this.i=null,Dc.prototype.o.call(this)},A(Tl.prototype,{u:Eu,B:ku,w:Su}),co.passwordReset=function(e,t,i,n){Rd(e,wd(e).verifyPasswordResetCode(i).then((function(r){var a=new Cl(r,(function(){!function(e,t,i,n,r){var a=i.u();a&&Rd(e,i.I(C(wd(e).confirmPasswordReset,wd(e)),[n,a],(function(){i.m();var n=new Ku(r);n.render(t),bd(e,n)}),(function(n){Al(e,t,i,n)})))}(e,t,a,i,n)}));a.render(t),bd(e,a)}),(function(){Al(e,t)})))},co.emailChangeRevocation=function(e,t,i){var n=null;Rd(e,wd(e).checkActionCode(i).then((function(t){return n=t.data.email,wd(e).applyActionCode(i)})).then((function(){!function(e,t,i){var n=new yl(i,(function(){Rd(e,n.I(C(wd(e).sendPasswordResetEmail,wd(e)),[i],(function(){n.m(),(n=new ju(i,void 0,Bs(Nd(e)),Vs(Nd(e)))).render(t),bd(e,n)}),(function(){n.a(Ti().toString())})))}));n.render(t),bd(e,n)}(e,t,n)}),(function(){var i=new $u;i.render(t),bd(e,i)})))},co.emailVerification=function(e,t,i,n){Rd(e,wd(e).applyActionCode(i).then((function(){var i=new Bu(n);i.render(t),bd(e,i)}),(function(){var i=new Vu;i.render(t),bd(e,i)})))},co.revertSecondFactorAddition=function(e,t,i){var n=null,r=null;Rd(e,wd(e).checkActionCode(i).then((function(t){return n=t.data.email,r=t.data.multiFactorInfo,wd(e).applyActionCode(i)})).then((function(){!function(e,t,i,n){var r=new Tl(n.factorId,(function(){r.I(C(wd(e).sendPasswordResetEmail,wd(e)),[i],(function(){r.m(),(r=new ju(i,void 0,Bs(Nd(e)),Vs(Nd(e)))).render(t),bd(e,r)}),(function(){r.a(Ti().toString())}))}),n.phoneNumber);r.render(t),bd(e,r)}(e,t,n,r)}),(function(){var i=new Gu;i.render(t),bd(e,i)})))},co.verifyAndChangeEmail=function(e,t,i,n){var r=null;Rd(e,wd(e).checkActionCode(i).then((function(t){return r=t.data.email,wd(e).applyActionCode(i)})).then((function(){var i=new Hu(r,n);i.render(t),bd(e,i)}),(function(){var i=new Wu;i.render(t),bd(e,i)})))},s(Pl,Dc),Pl.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),Rl(this.i(),(this.i().value||"").length),Dc.prototype.v.call(this)},Pl.prototype.o=function(){this.u=this.l=null,Dc.prototype.o.call(this)},A(Pl.prototype,{i:Nu,M:Lu,w:Du,H:Mu,j:xu,U:Eu,P:ku,B:Su}),co.emailLinkConfirmation=function(e,t,i,n,r,a){var s=new Pl((function(){var r=s.j();r?(s.m(),n(e,t,r,i)):s.i().focus()}),(function(){s.m(),al(e,t,r||void 0)}),r||void 0,Bs(Nd(e)),Vs(Nd(e)));s.render(t),bd(e,s),a&&s.a(a)},s(Ol,Dc),Ol.prototype.v=function(){this.u(this.i),this.l().focus(),Dc.prototype.v.call(this)},Ol.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A(Ol.prototype,{l:Eu,u:Su}),co.emailLinkNewDeviceLinking=function(e,t,i,n){var r=new je(i);if(i=r.a.a.get(We.PROVIDER_ID)||null,Ve(r,null),i){var a=new Ol(Os(Nd(e),i),(function(){a.m(),n(e,t,r.toString())}),Bs(Nd(e)),Vs(Nd(e)));a.render(t),bd(e,a)}else al(e,t)},s(Nl,Dc),co.emailLinkSignInCallback=Ll,s(xl,Dc),xl.prototype.v=function(){this.u(this.i),this.l().focus(),Dc.prototype.v.call(this)},xl.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A(xl.prototype,{l:Eu,u:Su}),co.emailLinkSignInLinking=function(e,t,i){var n=es(_d(e));if(ts(_d(e)),n){var r=n.a.providerId,a=new xl(i,Os(Nd(e),r),(function(){!function(e,t,i,n){var r=Mc(t);cl(e,t,i,(function(){al(e,r,i)}),(function(n){if(!n.name||"cancel"!=n.name){var a=tl(n);n&&"auth/network-request-failed"==n.code?t.a(a):(t.m(),al(e,r,i,a))}}),n)}(e,a,i,n)}),Bs(Nd(e)),Vs(Nd(e)));a.render(t),bd(e,a)}else al(e,t)},s(Ul,Dc),Ul.prototype.v=function(){var e=this;tc(this,this.l(),(function(){e.i()})),tc(this,Yo(this,"firebaseui-id-trouble-getting-email-link"),(function(){e.u()})),this.l().focus(),Dc.prototype.v.call(this)},Ul.prototype.o=function(){this.i=this.u=null,Dc.prototype.o.call(this)},A(Ul.prototype,{l:ku}),co.emailLinkSignInSent=function(e,t,i,n,r){var a=new Ul(i,(function(){a.m(),uo("emailNotReceived",e,t,i,n,r)}),(function(){a.m(),n()}),Bs(Nd(e)),Vs(Nd(e)));a.render(t),bd(e,a)},s(Fl,Dc),Fl.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Dc.prototype.v.call(this)},Fl.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A(Fl.prototype,{u:Eu,B:ku,w:Su}),co.emailMismatch=function(e,t,i){var n=es(_d(e));if(n){var r=new Fl(i.user.email,n.g,(function(){var t=r;ts(_d(e)),Zu(e,t,i)}),(function(){var t=i.credential.providerId,a=Mc(r);r.m(),n.a?uo("federatedLinking",e,a,n.g,t):uo("federatedSignIn",e,a,n.g,t)}),Bs(Nd(e)),Vs(Nd(e)));r.render(t),bd(e,r)}else al(e,t)},s(jl,Dc),jl.prototype.v=function(){var e=this;tc(this,this.u(),(function(){e.i()})),tc(this,this.Da(),(function(){e.l()})),this.u().focus(),Dc.prototype.v.call(this)},jl.prototype.Da=function(){return Yo(this,"firebaseui-id-resend-email-link")},jl.prototype.o=function(){this.i=this.l=null,Dc.prototype.o.call(this)},A(jl.prototype,{u:ku}),co.emailNotReceived=function(e,t,i,n,r){var a=new jl((function(){cl(e,a,i,n,(function(e){e=tl(e),a.a(e)}),r)}),(function(){a.m(),al(e,t,i)}),Bs(Nd(e)),Vs(Nd(e)));a.render(t),bd(e,a)},s(Bl,Dc),Bl.prototype.v=function(){this.u(this.i),this.l().focus(),Dc.prototype.v.call(this)},Bl.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A(Bl.prototype,{l:Eu,u:Su}),co.federatedLinking=function(e,t,i,n,r){var a=es(_d(e));if(a&&a.a){var s=new Bl(i,Os(Nd(e),n),(function(){il(e,s,n,i)}),Bs(Nd(e)),Vs(Nd(e)));s.render(t),bd(e,s),r&&s.a(r)}else al(e,t)},co.federatedRedirect=function(e,t,i){var n=new Nl;n.render(t),bd(e,n),il(e,n,t=Ps(Nd(e))[0],i)},co.federatedSignIn=function(e,t,i,n,r){var a=new Bl(i,Os(Nd(e),n),(function(){il(e,a,n,i)}),Bs(Nd(e)),Vs(Nd(e)));a.render(t),bd(e,a),r&&a.a(r)},co.passwordLinking=function(e,t,i){var n=es(_d(e));ts(_d(e));var r=n&&n.a;if(r){var a=new Pu(i,(function(){!function(e,t,i,n){var r=t.u();r?Rd(e,t.I(C(e.Xb,e),[i,r],(function(i){return i=i.user.linkWithCredential(n).then((function(i){return Zu(e,t,{user:i.user,credential:n,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo})})),Rd(e,i),i}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/wrong-password":Zo(t.i(),!1),nc(t.B(),tl(e));break;case"auth/too-many-requests":t.a(tl(e));break;default:Kr("signInWithEmailAndPassword: "+e.message,void 0),t.a(tl(e))}}))):t.i().focus()}(e,a,i,r)}),(function(){a.m(),uo("passwordRecovery",e,t,i)}),Bs(Nd(e)),Vs(Nd(e)));a.render(t),bd(e,a)}else al(e,t)},s(Vl,Dc),Vl.prototype.v=function(){this.B(),this.H(this.l,this.u),mo(this.i())||this.i().focus(),Uc(this,this.i(),this.l),Dc.prototype.v.call(this)},Vl.prototype.o=function(){this.u=this.l=null,Dc.prototype.o.call(this)},A(Vl.prototype,{i:Nu,w:Lu,B:Du,M:Mu,j:xu,U:Eu,P:ku,H:Su}),co.passwordRecovery=function(e,t,i,n,r){var a=new Vl((function(){!function(e,t){var i=t.j();if(i){var n=Mc(t);Rd(e,t.I(C(wd(e).sendPasswordResetEmail,wd(e)),[i],(function(){t.m();var r=new ju(i,(function(){r.m(),al(e,n)}),Bs(Nd(e)),Vs(Nd(e)));r.render(n),bd(e,r)}),(function(e){Zo(t.i(),!1),nc(t.w(),tl(e))})))}else t.i().focus()}(e,a)}),n?void 0:function(){a.m(),al(e,t)},i,Bs(Nd(e)),Vs(Nd(e)));a.render(t),bd(e,a),r&&a.a(r)},co.passwordSignIn=function(e,t,i,n){var r=new Uu((function(){!function(e,t){var i=t.j(),n=t.u();if(i)if(n){var r=ta.auth.EmailAuthProvider.credential(i,n);Rd(e,t.I(C(e.bc,e),[i,n],(function(i){return Zu(e,t,{user:i.user,credential:r,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo})}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/email-already-in-use":break;case"auth/email-exists":Zo(t.l(),!1),nc(t.U(),tl(e));break;case"auth/too-many-requests":case"auth/wrong-password":Zo(t.i(),!1),nc(t.B(),tl(e));break;default:Kr("verifyPassword: "+e.message,void 0),t.a(tl(e))}})))}else t.i().focus();else t.l().focus()}(e,r)}),(function(){var i=r.M();r.m(),uo("passwordRecovery",e,t,i)}),i,Bs(Nd(e)),Vs(Nd(e)),n);r.render(t),bd(e,r)},s(Gl,Dc),Gl.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(xc(this,this.i(),this.u()),xc(this,this.u(),this.l())):xc(this,this.i(),this.l()),this.w&&Uc(this,this.l(),this.w),mo(this.i())?this.B&&!mo(this.u())?this.u().focus():this.l().focus():this.i().focus(),Dc.prototype.v.call(this)},Gl.prototype.o=function(){this.H=this.w=null,Dc.prototype.o.call(this)},A(Gl.prototype,{i:Nu,U:Lu,ea:Du,jb:Mu,j:xu,u:Hl,Bc:Wl,Ja:function(){var e=Hl.call(this),t=Wl.call(this);Qo(this,e,(function(){rc(t)&&(Zo(e,!0),ic(t))}))},M:function(){var e=Hl.call(this),t=Wl.call(this),i=mo(e);return Zo(e,i=!/^[\s\xa0]*$/.test(null==i?"":String(i))),i?(ic(t),t=!0):(nc(t,ci("Enter your account name").toString()),t=!1),t?$(mo(e)):null},l:wl,ba:El,lb:Il,ua:kl,P:Sl,Nb:Eu,Mb:ku,pa:Su}),co.passwordSignUp=function(e,t,i,n,r,a){var s=new Gl(Hs(Nd(e)),(function(){zl(e,s)}),r?void 0:function(){s.m(),al(e,t)},i,n,Bs(Nd(e)),Vs(Nd(e)),a);s.render(t),bd(e,s)},s(Yl,Dc),Yl.prototype.v=function(){var e=this;this.U(this.jb),en(this.i,"tick",this.w,!1,this),this.i.start(),tc(this,Yo(this,"firebaseui-id-change-phone-number-link"),(function(){e.P()})),tc(this,this.Da(),(function(){e.M()})),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),Dc.prototype.v.call(this)},Yl.prototype.o=function(){this.M=this.H=this.l=this.P=null,Co(this.i),rn(this.i,"tick",this.w),this.i=null,Dc.prototype.o.call(this)},Yl.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(Co(this.i),rn(this.i,"tick",this.w),this.ua(),this.lb())},A(Yl.prototype,{u:Kl,pa:ql,Ja:function(e){var t=Kl.call(this),i=ql.call(this);Qo(this,t,(function(){rc(i)&&(Zo(t,!0),ic(i))})),e&&ec(this,t,(function(){e()}))},ba:function(){var e=$(mo(Kl.call(this))||"");return/^\d{6}$/.test(e)?e:null},Fb:$l,U:function(e){qt($l.call(this),ci("Resend code in "+(9<e?"0:":"0:0")+e).toString())},ua:function(){ic(this.Fb())},Da:function(){return Yo(this,"firebaseui-id-resend-link")},lb:function(){nc(this.Da())},Nb:Eu,Mb:ku,ea:Su}),co.phoneSignInFinish=function(e,t,i,n,r,a){var s=new Yl((function(){s.m(),uo("phoneSignInStart",e,t,i)}),(function(){!function(e,t,i,n){function r(e){t.u().focus(),Zo(t.u(),!1),nc(t.pa(),e)}var a=t.ba();a?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",ci("Verifying...").toString()),Rd(e,t.I(C(n.confirm,n),[a],(function(i){t.h(),t.$("firebaseui-icon-done",ci("Verified!").toString());var n=setTimeout((function(){t.h(),t.m();var n={user:Id(e).currentUser,credential:null,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo};Zu(e,t,n,!0)}),1e3);Rd(e,(function(){t&&t.h(),clearTimeout(n)}))}),(function(n){if(n.name&&"cancel"==n.name)t.h();else{var a=Xu(n);switch(n=tl(a),a.code){case"auth/credential-already-in-use":t.h();break;case"auth/code-expired":a=Mc(t),t.h(),t.m(),uo("phoneSignInStart",e,a,i,n);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":t.h(),r(n);break;default:t.h(),t.a(n)}}})))):r(ci("Wrong code. Try again.").toString())}(e,s,i,r)}),(function(){s.m(),al(e,t)}),(function(){s.m(),uo("phoneSignInStart",e,t,i)}),_s(i),n,Bs(Nd(e)),Vs(Nd(e)));s.render(t),bd(e,s),a&&s.a(a)};var Jl=!(Ze||Ke("Safari")&&!(qe()||Ke("Coast")||Ke("Opera")||Ke("Edge")||Ke("Firefox")||Ke("FxiOS")||Ke("Silk")||Ke("Android")));function Xl(e,t){return/-[a-z]/.test(t)?null:Jl&&e.dataset?!Ke("Android")||qe()||Ke("Firefox")||Ke("FxiOS")||Ke("Opera")||Ke("Silk")||t in e.dataset?void 0===(e=e.dataset[t])?null:e:null:e.getAttribute("data-"+String(t).replace(/([A-Z])/g,"-$1").toLowerCase())}function Zl(e,t,i){var n=this;e=ti(yc,{items:e},null,this.s),Cc.call(this,e,!0,!0),i&&(i=function(e,t){e=(e||document).getElementsByTagName("BUTTON");for(var i=0;i<e.length;i++)if(Xl(e[i],"listboxid")===t)return e[i];return null}(e,i))&&(i.focus(),function(e,t){var i=(t=t||Gt(document))||Gt(document),n=Go(e),r=Go(i);if(!Ze||9<=Number(ut)){s=Ho(i,"borderLeftWidth");var a=Ho(i,"borderRightWidth");o=Ho(i,"borderTopWidth"),c=Ho(i,"borderBottomWidth"),a=new Vo(parseFloat(o),parseFloat(a),parseFloat(c),parseFloat(s))}else{var s=Ko(i,"borderLeft");a=Ko(i,"borderRight");var o=Ko(i,"borderTop"),c=Ko(i,"borderBottom");a=new Vo(o,a,c,s)}i==Gt(document)?(s=n.a-i.scrollLeft,n=n.g-i.scrollTop,!Ze||10<=Number(ut)||(s+=a.left,n+=a.top)):(s=n.a-r.a-a.left,n=n.g-r.g-a.top),r=e.offsetWidth,a=e.offsetHeight,o=it&&!r&&!a,e=d(r)&&!o||!e.getBoundingClientRect?new Ft(r,a):new Ft((e=Wo(e)).right-e.left,e.bottom-e.top),r=i.clientHeight-e.height,a=i.scrollLeft,o=i.scrollTop,i=new Ut(a+=Math.min(s,Math.max(s-(i.clientWidth-e.width),0)),o+=Math.min(n,Math.max(n-r,0))),t.scrollLeft=i.a,t.scrollTop=i.g}(i,e)),tc(this,e,(function(e){(e=(e=$t(e.target,"firebaseui-id-list-box-dialog-button"))&&Xl(e,"listboxid"))&&(Tc.call(n),t(e))}))}function Ql(){return Yo(this,"firebaseui-id-phone-number")}function ed(){return Yo(this,"firebaseui-id-country-selector")}function td(){return Yo(this,"firebaseui-id-phone-number-error")}function id(e,t){var i=e.a,n=nd("1-US-0",i),r=null;if(!(r=t&&nd(t,i)?t:n?"1-US-0":0<i.length?i[0].c:null))throw Error("No available default country");sd.call(this,r,e)}function nd(e,t){return!(!(e=ps(e))||!V(t,e))}function rd(e){return"firebaseui-flag-"+e.f}function ad(e){var t=this;Zl.call(this,function(e){return e.map((function(e){return{id:e.c,Ma:"firebaseui-flag "+rd(e),label:e.name+" ‎+"+e.b}}))}(e.a),(function(i){sd.call(t,i,e,!0),t.O().focus()}),this.Ba)}function sd(e,t,i){var n=ps(e);n&&(i&&((t=fs(t,i=$(mo(Ql.call(this))||""))).length&&t[0].b!=n.b&&(i="+"+n.b+i.substr(t[0].b.length+1),go(Ql.call(this),i))),t=ps(this.Ba),this.Ba=e,e=Yo(this,"firebaseui-id-country-selector-flag"),t&&po(e,rd(t)),fo(e,rd(n)),qt(Yo(this,"firebaseui-id-country-selector-code"),"‎+"+n.b))}function od(e,t,i,n,r,a,s,o,c,u){Dc.call(this,bu,{Gb:t,Aa:c||null,Va:!!i,ia:!!a},u,"phoneSignInStart",{F:n,D:r}),this.H=o||null,this.M=t,this.l=e,this.w=i||null,this.pa=s||null}function cd(e,t,i,n){try{var r=t.U(Zs)}catch(a){return}r?Js?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",ci("Verifying...").toString()),Rd(e,t.I(C(e.cc,e),[_s(r),i],(function(i){var n=Mc(t);t.$("firebaseui-icon-done",ci("Code sent!").toString());var a=setTimeout((function(){t.h(),t.m(),uo("phoneSignInFinish",e,n,r,15,i)}),1e3);Rd(e,(function(){t&&t.h(),clearTimeout(a)}))}),(function(i){if(t.h(),!i.name||"cancel"!=i.name){grecaptcha.reset(Qs),Js=null;var n=i&&i.message||"";if(i.code)switch(i.code){case"auth/too-many-requests":n=ci("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":return t.O().focus(),void nc(t.B(),Ci().toString());case"auth/admin-restricted-operation":if(Ms(Nd(e)))return i=Mc(t),t.m(),void uo("handleUnauthorizedUser",e,i,_s(r),ta.auth.PhoneAuthProvider.PROVIDER_ID);n=tl(i);break;default:n=tl(i)}t.a(n)}})))):Xs?nc(t.u(),ci("Solve the reCAPTCHA").toString()):!Xs&&n&&t.i().click():(t.O().focus(),nc(t.B(),Ci().toString()))}function ud(e,t,i,n,r){Dc.call(this,vu,{Sb:t},r,"providerSignIn",{F:i,D:n}),this.i=e}function ld(e,t,i,n,r,a,s){Dc.call(this,Fc,{email:i,Va:!!t,ia:!!a},s,"signIn",{F:n,D:r}),this.i=e,this.u=t}function dd(e,t,i,n,r,a,s){Dc.call(this,tu,{kc:e,yb:i,Eb:!!n},s,"unauthorizedUser",{F:r,D:a}),this.l=t,this.i=n}function hd(e,t,i,n,r,a){Dc.call(this,iu,{email:e},a,"unsupportedProvider",{F:n,D:r}),this.l=t,this.i=i}function fd(e,t){this.$=!1;var i=gd(t);if(md[i])throw Error('An AuthUI instance already exists for the key "'+i+'"');md[i]=this,this.a=e,this.u=null,this.Y=!1,pd(this.a),this.h=ta.initializeApp({apiKey:e.app.options.apiKey,authDomain:e.app.options.authDomain},e.app.name+"-firebaseui-temp").auth(),(e=e.emulatorConfig)&&(i=e.port,this.h.useEmulator(e.protocol+"://"+e.host+(null===i?"":":"+i),e.options)),pd(this.h),this.h.setPersistence&&this.h.setPersistence(ta.auth.Auth.Persistence.SESSION),this.oa=t,this.ca=new Cs,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=Er.Xa(),this.j=this.C=null,this.da=this.A=!1}function pd(e){e&&e.INTERNAL&&e.INTERNAL.logFramework&&e.INTERNAL.logFramework("FirebaseUI-web")}s(od,Dc),od.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||xc(this,this.O(),this.i()),Uc(this,this.i(),this.l),this.O().focus(),Rl(this.O(),(this.O().value||"").length),Dc.prototype.v.call(this)},od.prototype.o=function(){this.w=this.l=null,Dc.prototype.o.call(this)},A(od.prototype,{Cb:Ac,O:Ql,B:td,ea:function(e,t,i){var n=this,r=Ql.call(this),a=ed.call(this),s=td.call(this),o=e||ys,c=o.a;if(0==c.length)throw Error("No available countries provided.");id.call(n,o,t),tc(this,a,(function(){ad.call(n,o)})),Qo(this,r,(function(){rc(s)&&(Zo(r,!0),ic(s));var e=$(mo(r)||""),t=ps(this.Ba),i=fs(o,e);e=nd("1-US-0",c),i.length&&i[0].b!=t.b&&(t=i[0],sd.call(n,"1"==t.b&&e?"1-US-0":t.c,o))})),i&&ec(this,r,(function(){i()}))},U:function(e){var t=$(mo(Ql.call(this))||""),i=(e=e||ys).a,n=fs(ys,t);if(n.length&&!V(i,n[0]))throw go(Ql.call(this)),Ql.call(this).focus(),nc(td.call(this),ci("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return i=ps(this.Ba),n.length&&n[0].b!=i.b&&sd.call(this,n[0].c,e),n.length&&(t=t.substr(n[0].b.length+1)),t?new ws(this.Ba,t):null},Ja:ed,ba:function(){return Yo(this,"firebaseui-recaptcha-container")},u:function(){return Yo(this,"firebaseui-id-recaptcha-error")},i:Eu,ua:ku,P:Su}),co.phoneSignInStart=function(e,t,i,n){var r=function(e){var t=null;if(As(e).forEach((function(e){e.provider==ta.auth.PhoneAuthProvider.PROVIDER_ID&&I(e.recaptchaParameters)&&!Array.isArray(e.recaptchaParameters)&&(t=ae(e.recaptchaParameters))})),t){var i=[];oo.forEach((function(e){void 0!==t[e]&&(i.push(e),delete t[e])})),i.length&&Jr('The following provided "recaptchaParameters" keys are not allowed: '+i.join(", "))}return t}(Nd(e))||{};Js=null,Xs=!(r&&"invisible"===r.size);var a=rl(e),s=function(e){var t=(e=Rs(e,ta.auth.PhoneAuthProvider.PROVIDER_ID))&&e.defaultCountry||null;t=t&&ms(t);var i=null;return e&&"string"==typeof e.loginHint&&(i=Is(e.loginHint)),t&&t[0]||i&&ps(i.a)||null}(Nd(e)),o=a?function(e){var t=null;return(e=Rs(e,ta.auth.PhoneAuthProvider.PROVIDER_ID))&&"string"==typeof e.loginHint&&(t=Is(e.loginHint)),e&&e.defaultNationalNumber||t&&t.Aa||null}(Nd(e)):null;s=i&&i.a||s&&s.c||null,i=i&&i.Aa||o,(o=Fs(Nd(e)))&&vs(o),Zs=o?new hs(Fs(Nd(e))):ys;var c=new od((function(t){cd(e,c,u,!(!t||!t.keyCode))}),Xs,a?null:function(){u.clear(),c.m(),al(e,t)},Bs(Nd(e)),Vs(Nd(e)),a,Zs,s,i);c.render(t),bd(e,c),n&&c.a(n),r.callback=function(t){c.u()&&ic(c.u()),Js=t,Xs||cd(e,c,u)},r["expired-callback"]=function(){Js=null};var u=new ta.auth.RecaptchaVerifier(Xs?c.ba():c.i(),r,Id(e).app);Rd(e,c.I(C(u.render,u),[],(function(e){Qs=e}),(function(i){i.name&&"cancel"==i.name||(i=tl(i),c.m(),al(e,t,void 0,i))})))},co.prefilledEmailSignIn=function(e,t,i){var n=new Nl;n.render(t),bd(e,n),Rd(e,n.I(C(wd(e).fetchSignInMethodsForEmail,wd(e)),[i],(function(r){n.m();var a=!(!nl(e)||!Ed(e));ol(e,t,r,i,void 0,a)}),(function(r){r=tl(r),n.m(),uo("signIn",e,t,i,r)})))},s(ud,Dc),ud.prototype.v=function(){this.l(this.i),Dc.prototype.v.call(this)},ud.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A(ud.prototype,{l:function(e){function t(t){e(t)}for(var i=this.g?Bt("firebaseui-id-idp-button",this.g||this.s.a):[],n=0;n<i.length;n++){var r=i[n];tc(this,r,T(t,Xl(r,"providerId")))}}}),co.providerSignIn=function(e,t,i,n){var r=new ud((function(i){i==ta.auth.EmailAuthProvider.PROVIDER_ID?(r.m(),ul(e,t,n)):i==ta.auth.PhoneAuthProvider.PROVIDER_ID?(r.m(),uo("phoneSignInStart",e,t)):"anonymous"==i?function(e,t){Rd(e,t.I(C(e.$b,e),[],(function(i){return t.m(),Zu(e,t,i,!0)}),(function(e){e.name&&"cancel"==e.name||(Kr("ContinueAsGuest: "+e.code,void 0),e=tl(e),t.a(e))})))}(e,r):il(e,r,i,n),Ld(e),e.l.cancel()}),Ns(Nd(e)),Bs(Nd(e)),Vs(Nd(e)));r.render(t),bd(e,r),i&&r.a(i),function(e){Ld(e);try{kr(e.l,Ls(Nd(e)),function(e){var t;return Ld(e),(t=e.Z)||(e=Us(e=Nd(e),ta.auth.GoogleAuthProvider.PROVIDER_ID),t=!(!e||"select_account"!==e.prompt)),t}(e)).then((function(t){return!!e.g&&function(e,t,i){if(i&&i.credential&&i.clientId===Ls(Nd(e))){if(xs(Nd(e),ta.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var n=JSON.parse(atob(i.credential.split(".")[1])).email}catch(r){}return il(e,t,ta.auth.GoogleAuthProvider.PROVIDER_ID,n),Wn(!0)}return r=ta.auth.GoogleAuthProvider.credential(i.credential),a=!1,r=t.I(C(e.ac,e),[r],(function(i){var n=Mc(t);t.m(),uo("callback",e,n,Wn(i)),a=!0}),(function(i){if(!(i.name&&"cancel"==i.name||i&&"auth/credential-already-in-use"==i.code))if(i&&"auth/email-already-in-use"==i.code&&i.email&&i.credential){var n=Mc(t);t.m(),uo("callback",e,n,Gn(i))}else i&&"auth/admin-restricted-operation"==i.code&&Ms(Nd(e))?(i=Mc(t),t.m(),uo("handleUnauthorizedUser",e,i,null,ta.auth.GoogleAuthProvider.PROVIDER_ID)):(i=tl(i),t.a(i))})),Rd(e,r),r.then((function(){return a}),(function(){return!1}))}var r,a;return i&&t.a(ci("The selected credential for the authentication provider is not supported!").toString()),Wn(!1)}(e,e.g,t)}))}catch(t){}}(e)},co.sendEmailLinkForSignIn=function(e,t,i,n){var r=new fl;r.render(t),bd(e,r),cl(e,r,i,n,(function(n){r.m(),n&&"auth/admin-restricted-operation"==n.code&&Ms(Nd(e))?uo("handleUnauthorizedUser",e,t,i,ta.auth.EmailAuthProvider.PROVIDER_ID):(n=tl(n),uo("signIn",e,t,i,n))}))},s(ld,Dc),ld.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),Rl(this.l(),(this.l().value||"").length),Dc.prototype.v.call(this)},ld.prototype.o=function(){this.u=this.i=null,Dc.prototype.o.call(this)},A(ld.prototype,{l:Nu,M:Lu,w:Du,H:Mu,j:xu,U:Eu,P:ku,B:Su}),co.signIn=function(e,t,i,n){var r=nl(e),a=new ld((function(){var t=a,i=t.j()||"";i&&sl(e,t,i)}),r?null:function(){a.m(),al(e,t,i)},i,Bs(Nd(e)),Vs(Nd(e)),r);a.render(t),bd(e,a),n&&a.a(n)},s(dd,Dc),dd.prototype.v=function(){var e=this,t=Yo(this,"firebaseui-id-unauthorized-user-help-link");this.i&&t&&tc(this,t,(function(){e.i()})),tc(this,this.u(),(function(){e.l()})),this.u().focus(),Dc.prototype.v.call(this)},dd.prototype.o=function(){this.i=this.l=null,Dc.prototype.o.call(this)},A(dd.prototype,{u:ku}),co.handleUnauthorizedUser=function(e,t,i,n){function r(){al(e,t)}n===ta.auth.EmailAuthProvider.PROVIDER_ID?r=function(){ul(e,t)}:n===ta.auth.PhoneAuthProvider.PROVIDER_ID&&(r=function(){uo("phoneSignInStart",e,t)});var a=null,s=null;n===ta.auth.EmailAuthProvider.PROVIDER_ID&&Ds(Nd(e))?(a=function(e){return(e=Rs(e,ta.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.adminEmail||null}(Nd(e)),s=function(e){if((e=Rs(e,ta.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp){var t=e.disableSignUp.helpLink||null;if(t&&"string"==typeof t)return function(){nr(t)}}return null}(Nd(e))):Ms(Nd(e))&&(a=function(e){return(e=e.a.get("adminRestrictedOperation"))&&e.adminEmail?e.adminEmail:null}(Nd(e)),s=function(e){if(e=e.a.get("adminRestrictedOperation")||null){var t=e.helpLink||null;if(t&&"string"==typeof t)return function(){nr(t)}}return null}(Nd(e)));var o=new dd(i,(function(){o.m(),r()}),a,s,Bs(Nd(e)),Vs(Nd(e)));o.render(t),bd(e,o)},s(hd,Dc),hd.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Dc.prototype.v.call(this)},hd.prototype.o=function(){this.i=this.l=null,Dc.prototype.o.call(this)},A(hd.prototype,{u:Eu,B:ku,w:Su}),co.unsupportedProvider=function(e,t,i){var n=new hd(i,(function(){n.m(),uo("passwordRecovery",e,t,i)}),(function(){n.m(),al(e,t,i)}),Bs(Nd(e)),Vs(Nd(e)));n.render(t),bd(e,n)};var md={};function gd(e){return e||"[DEFAULT]"}function vd(e){return Ld(e),e.i||(e.i=Td(e,(function(t){return t&&!es(_d(e))?Wn(Id(e).getRedirectResult().then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return xd(e,t)}))):Wn(wd(e).getRedirectResult().then((function(t){return Ts(Nd(e))&&!t.user&&e.j&&!e.j.isAnonymous?Id(e).getRedirectResult():t})))}))),e.i}function bd(e,t){Ld(e),e.g=t}var yd=null;function wd(e){return Ld(e),e.h}function Id(e){return Ld(e),e.a}function _d(e){return Ld(e),e.oa}function Ed(e){return Ld(e),e.O?e.O.emailHint:void 0}function kd(e){return"signIn"===((e=new je(e)).a.a.get(We.ub)||null)&&!!e.a.a.get(We.$a)}function Sd(e,t,i,n){Ld(e),void 0!==e.a.languageCode&&(e.u=e.a.languageCode);var r="en".replace(/_/g,"-");e.a.languageCode=r,e.h.languageCode=r,e.Y=!0,void 0!==e.a.tenantId&&(e.h.tenantId=e.a.tenantId),e.ib(i),e.O=n||null;var a=l.document;e.C?e.C.then((function(){"complete"==a.readyState?Cd(e,t):nn(window,"load",(function(){Cd(e,t)}))})):"complete"==a.readyState?Cd(e,t):nn(window,"load",(function(){Cd(e,t)}))}function Cd(e,t){var i=rr(t,"Could not find the FirebaseUI widget element on the page.");if(i.setAttribute("lang","en".replace(/_/g,"-")),yd){var n=yd;Ld(n),es(_d(n))&&Jr("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),yd.reset()}if(yd=e,e.T=i,function(e,t){e.L=null,e.J=new In(t),e.J.register(),en(e.J,"pageEnter",(function(t){if(t=t&&t.pageId,e.L!=t){var i=Nd(e);(i=Ys(i).uiChanged||null)&&i(e.L,t),e.L=t}}))}(e,i),ja(new Ba)&&ja(new Va)){t=rr(t,"Could not find the FirebaseUI widget element on the page."),i=(i=be(i=ar(),n=os(Nd(e).a,"queryParameterForSignInSuccessUrl")))?wt(_t(i)).toString():null;e:{n=ar();var r=js(Nd(e));for(a in n=be(n,r)||"",ao)if(ao[a].toLowerCase()==n.toLowerCase()){var a=ao[a];break e}a="callback"}switch(a){case"callback":i&&(a=_d(e),Za(qa,i,a)),e.nb()?uo("callback",e,t):al(e,t,Ed(e));break;case"resetPassword":uo("passwordReset",e,t,ll(),dl());break;case"recoverEmail":uo("emailChangeRevocation",e,t,ll());break;case"revertSecondFactorAddition":uo("revertSecondFactorAddition",e,t,ll());break;case"verifyEmail":uo("emailVerification",e,t,ll(),dl());break;case"verifyAndChangeEmail":uo("verifyAndChangeEmail",e,t,ll(),dl());break;case"signIn":uo("emailLinkSignInCallback",e,t,ar()),Dd();break;case"select":i&&(a=_d(e),Za(qa,i,a)),al(e,t);break;default:throw Error("Unhandled widget operation.")}(t=Ys(t=Nd(e)).uiShown||null)&&t()}else t=rr(t,"Could not find the FirebaseUI widget element on the page."),(a=new Ju(ci("The browser you are using does not support Web Storage. Please try again in a different browser.").toString())).render(t),bd(e,a);t=e.g&&"blank"==e.g.Ga&&Gs(Nd(e)),ns(_d(e))&&!t&&(Od(e,(t=ns(_d(e))).a),Xa(Ka,_d(e)))}function Td(e,t){if(e.A)return t(Ad(e));if(Rd(e,(function(){e.A=!1})),Ts(Nd(e))){var i=new xn((function(i){Rd(e,e.a.onAuthStateChanged((function(n){e.j=n,e.A||(e.A=!0,i(t(Ad(e))))})))}));return Rd(e,i),i}return e.A=!0,t(null)}function Ad(e){return Ld(e),Ts(Nd(e))&&e.j&&e.j.isAnonymous?e.j:null}function Rd(e,t){if(Ld(e),t){e.s.push(t);var i=function(){G(e.s,(function(e){return e==t}))};"function"!=typeof t&&t.then(i,i)}}function Pd(e){void 0!==e.a.languageCode&&e.Y&&(e.Y=!1,e.a.languageCode=e.u)}function Od(e,t){e.a.tenantId=t,e.h.tenantId=t}function Nd(e){return Ld(e),e.ca}function Ld(e){if(e.$)throw Error("AuthUI instance is deleted!")}function Dd(){var e=ar();if(kd(e)){for(var t in e=new je(e),We)We.hasOwnProperty(t)&&Me(e.a.a,We[t]);t={state:"signIn",mode:"emailLink",operation:"clear"};var i=l.document.title;l.history&&l.history.replaceState&&l.history.replaceState(t,i,e.toString())}}function Md(e){return Ld(e),wd(e).signOut()}function xd(e,t,i){if(Ld(e),t&&t.code&&("auth/email-already-in-use"==t.code||"auth/credential-already-in-use"==t.code)){var n=$s(Nd(e));return Wn().then((function(){return n(new Ni("anonymous-upgrade-merge-conflict",null,i||t.credential))})).then((function(){throw e.g&&(e.g.m(),e.g=null),t}))}return Gn(t)}function Ud(e,t,i,n){Dc.call(this,_u,void 0,n,"providerMatchByEmail",{F:t,D:i}),this.i=e}function Fd(e,t,i,n,r){Dc.call(this,Iu,{ec:t},r,"selectTenant",{F:i,D:n}),this.i=e}function jd(e){Dc.call(this,Gc,void 0,e,"spinner")}function Bd(e){for(var t in this.a=new rs,as(this.a,"authDomain"),as(this.a,"displayMode",$d),as(this.a,"tenants"),as(this.a,"callbacks"),as(this.a,"tosUrl"),as(this.a,"privacyPolicyUrl"),e)if(e.hasOwnProperty(t))try{ss(this.a,t,e[t])}catch(Lt){Kr('Invalid config: "'+t+'"',void 0)}}function Vd(e){return e.a.get("callbacks")||{}}function Hd(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Jr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){nr(t)}}return null}function Wd(e){var t=e.a.get("tosUrl")||null,i=e.a.get("privacyPolicyUrl")||null;if(i&&!t&&Jr("Terms of Service URL is missing, the link will not be displayed."),t&&i){if("function"==typeof i)return i;if("string"==typeof i)return function(){nr(i)}}return null}function Gd(e,t){if(!(e=e.a.get("tenants"))||!e.hasOwnProperty(t)&&!e.hasOwnProperty(Jd))throw Error("Invalid tenant configuration!")}function zd(e,t,i){if(!(e=e.a.get("tenants")))throw Error("Invalid tenant configuration!");var n=[];if(!(e=e[t]||e[Jd]))return Kr("Invalid tenant configuration: "+t+" is not configured!",void 0),n;if(!(t=e.signInOptions))throw Error("Invalid tenant configuration: signInOptions are invalid!");return t.forEach((function(e){if("string"==typeof e)n.push(e);else if("string"==typeof e.provider){var t=e.hd;t&&i?(t instanceof RegExp?t:new RegExp("@"+t.replace(".","\\.")+"$")).test(i)&&n.push(e.provider):n.push(e.provider)}else Kr(e="Invalid tenant configuration: signInOption "+JSON.stringify(e)+" is invalid!",void 0)})),n}function Kd(e,t,i){return e=function(e,t){var i=qd,n=void 0===n?{}:n;return Gd(e,t),function(e,t,i){return i=void 0===i?{}:i,Object.keys(e).filter((function(e){return t.includes(e)})).reduce((function(t,i){return t[i]=e[i],t}),i)}((e=e.a.get("tenants"))[t]||e[Jd],i,n)}(e,t),(t=e.signInOptions)&&i&&(t=t.filter((function(e){return"string"==typeof e?i.includes(e):i.includes(e.provider)})),e.signInOptions=t),e}(e=fd.prototype).nb=function(){return Ld(this),!!ns(_d(this))||kd(ar())},e.start=function(e,t){Sd(this,e,t)},e.Db=function(){Ld(this),this.Z=!0},e.reset=function(){Ld(this);var e=this;this.T&&this.T.removeAttribute("lang"),this.J&&yn(this.J),Pd(this),this.O=null,Dd(),Xa(Ka,_d(this)),Ld(this),this.l.cancel(),this.i=Wn({user:null,credential:null}),yd==this&&(yd=null),this.T=null;for(var t=0;t<this.s.length;t++)"function"==typeof this.s[t]?this.s[t]():this.s[t].cancel&&this.s[t].cancel();this.s=[],ts(_d(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=Md(this).then((function(){e.C=null}),(function(){e.C=null})))},e.ib=function(e){Ld(this);var t,i=this.ca;for(t in e)try{ss(i.a,t,e[t])}catch(n){Kr('Invalid config: "'+t+'"',void 0)}nt&&ss(i.a,"popupMode",!1),Fs(i),!this.da&&Ks(Nd(this))&&(Jr("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)},e.Wb=function(){Ld(this);var e=Nd(this),t=os(e.a,"widgetUrl");e=js(e);for(var i,n=t.search(ve),r=0,a=[];0<=(i=ge(t,r,e,n));)a.push(t.substring(r,i)),r=Math.min(t.indexOf("&",i)+1||n,n);a.push(t.substr(r)),t=a.join("").replace(ye,"$1"),(e+=n="="+encodeURIComponent("select"))?(0>(n=t.indexOf("#"))&&(n=t.length),0>(r=t.indexOf("?"))||r>n?(r=n,i=""):i=t.substring(r+1,n),n=(t=[t.substr(0,r),i,t.substr(n)])[1],t[1]=e?n?n+"&"+e:e:n,n=t[0]+(t[1]?"?"+t[1]:"")+t[2]):n=t,Nd(this).a.get("popupMode")?(n=n||"about:blank",(e={width:500,height:600,top:0<(e=(window.screen.availHeight-600)/2)?e:0,left:0<(t=(window.screen.availWidth-500)/2)?t:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1}).target=e.target||n.target||"google_popup",e.width=e.width||690,e.height=e.height||500,(e=tr(n,e))&&e.focus()):xt(window.location,n)},e.Wa=function(){var e=this;return Ld(this),this.h.app.delete().then((function(){var t=gd(_d(e));delete md[t],e.reset(),e.$=!0}))},e.Ib=function(e,t){Ld(this);var i=this,n=function(){for(var e=32,t=[];0<e;)t.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),e--;return t.join("")}();if(!Ws(Nd(this)))return Gn(Error("Email link sign-in should be enabled to trigger email sending."));var r=function(e){if(Ws(e)){var t={url:ar(),handleCodeInApp:!0};(e=Rs(e,ta.auth.EmailAuthProvider.PROVIDER_ID))&&"function"==typeof e.emailLinkSignIn&&oe(t,e.emailLinkSignIn()),e=t.url;var i=ar();i instanceof we||(i=ke(i)),e instanceof we||(e=ke(e));var n=i;i=new we(n);var r=!!e.j;r?Ie(i,e.j):r=!!e.A,r?i.A=e.A:r=!!e.h,r?i.h=e.h:r=null!=e.C;var a=e.g;if(r)_e(i,e.C);else if(r=!!e.g)if("/"!=a.charAt(0)&&(n.h&&!n.g?a="/"+a:-1!=(n=i.g.lastIndexOf("/"))&&(a=i.g.substr(0,n+1)+a)),".."==a||"."==a)a="";else if(-1!=a.indexOf("./")||-1!=a.indexOf("/.")){n=0==a.lastIndexOf("/",0),a=a.split("/");for(var s=[],o=0;o<a.length;){var c=a[o++];"."==c?n&&o==a.length&&s.push(""):".."==c?((1<s.length||1==s.length&&""!=s[0])&&s.pop(),n&&o==a.length&&s.push("")):(s.push(c),n=!0)}a=s.join("/")}return r?i.g=a:r=""!==e.a.toString(),r?Ee(i,Ue(e.a)):r=!!e.s,r&&(i.s=e.s),t.url=i.toString(),t}return null}(Nd(this)),a=new je(r.url);return function(e,t){t?e.a.a.set(We.Sa,t):Me(e.a.a,We.Sa)}(a,n),t&&t.a&&(function(e,t,i){Za(Ya,Ta(e,JSON.stringify(ra(t))),i)}(n,t,_d(this)),Ve(a,t.a.providerId)),function(e,t){null!==t?e.a.a.set(We.Qa,t?"1":"0"):Me(e.a.a,We.Qa)}(a,function(e){return!(!(e=Rs(e,ta.auth.EmailAuthProvider.PROVIDER_ID))||!e.forceSameDevice)}(Nd(this))),Td(this,(function(t){return t&&((t=t.uid)?a.a.a.set(We.Pa,t):Me(a.a.a,We.Pa)),r.url=a.toString(),wd(i).sendSignInLinkToEmail(e,r)})).then((function(){var t=_d(i),r={};r.email=e,Za($a,Ta(n,JSON.stringify(r)),t)}),(function(e){throw Xa(Ya,_d(i)),Xa($a,_d(i)),e}))},e.bc=function(e,t){Ld(this);var i=this;return wd(this).signInWithEmailAndPassword(e,t).then((function(n){return Td(i,(function(r){return r?Md(i).then((function(){return xd(i,{code:"auth/email-already-in-use"},ta.auth.EmailAuthProvider.credential(e,t))})):n}))}))},e.Yb=function(e,t){Ld(this);var i=this;return Td(this,(function(n){if(n){var r=ta.auth.EmailAuthProvider.credential(e,t);return n.linkWithCredential(r)}return wd(i).createUserWithEmailAndPassword(e,t)}))},e.ac=function(e){Ld(this);var t=this;return Td(this,(function(i){return i?i.linkWithCredential(e).then((function(e){return e}),(function(i){if(i&&"auth/email-already-in-use"==i.code&&i.email&&i.credential)throw i;return xd(t,i,e)})):wd(t).signInWithCredential(e)}))},e.dc=function(e){Ld(this);var t=this,i=this.i;return this.i=null,Td(this,(function(i){return i&&!es(_d(t))?i.linkWithRedirect(e):wd(t).signInWithRedirect(e)})).then((function(){}),(function(e){throw t.i=i,e}))},e.cc=function(e,t){Ld(this);var i=this;return Td(this,(function(n){return n?n.linkWithPhoneNumber(e,t).then((function(e){return new Tr(e,(function(e){if("auth/credential-already-in-use"==e.code)return xd(i,e);throw e}))})):Id(i).signInWithPhoneNumber(e,t).then((function(e){return new Tr(e)}))}))},e.$b=function(){return Ld(this),Id(this).signInAnonymously()},e.Xb=function(e,t){return Ld(this),wd(this).signInWithEmailAndPassword(e,t)},s(Ud,Dc),Ud.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),Rl(this.l(),(this.l().value||"").length),Dc.prototype.v.call(this)},Ud.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},A(Ud.prototype,{l:Nu,H:Lu,u:Du,B:Mu,j:xu,M:Eu,w:Su}),s(Fd,Dc),Fd.prototype.v=function(){!function(e,t){function i(e){t(e)}for(var n=e.g?Bt("firebaseui-id-tenant-selection-button",e.g||e.s.a):[],r=0;r<n.length;r++){var a=n[r];tc(e,a,T(i,Xl(a,"tenantId")))}}(this,this.i),Dc.prototype.v.call(this)},Fd.prototype.o=function(){this.i=null,Dc.prototype.o.call(this)},s(jd,Dc);var qd=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],$d="optionFirst",Yd={pc:$d,oc:"identifierFirst"},Jd="*";function Xd(e,t){var i=this;this.s=rr(e),this.a={},Object.keys(t).forEach((function(e){i.a[e]=new Bd(t[e])})),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(e){this.ob=e||null},enumerable:!1})}function Zd(e){e.j&&e.j.reset(),e.mb(),e.g&&e.g.m()}(e=Xd.prototype).Ub=function(e,t){var i=this;Zd(this);var n=e.apiKey;return new xn((function(e,r){if(i.a.hasOwnProperty(n)){var a=Vd(i.a[n]).selectTenantUiHidden||null;if(function(e){for(var t in e=e.a.get("displayMode"),Yd)if(Yd[t]===e)return Yd[t];return $d}(i.a[n])===$d){var s=[];t.forEach((function(e){e=e||"_";var t=i.a[n].a.get("tenants");if(!t)throw Error("Invalid tenant configuration!");(t=t[e]||t[Jd])?e={tenantId:"_"!==e?e:null,V:t.fullLabel||null,displayName:t.displayName,za:t.iconUrl,ta:t.buttonColor}:(Kr("Invalid tenant configuration: "+e+" is not configured!",void 0),e=null),e&&s.push(e)}));var o=function(t){t={tenantId:t,providerIds:zd(i.a[n],t||"_")},e(t)};if(1===s.length)return void o(s[0].tenantId);i.g=new Fd((function(e){Zd(i),a&&a(),o(e)}),s,Hd(i.a[n]),Wd(i.a[n]))}else i.g=new Ud((function(){var r=i.g.j();if(r){for(var s=0;s<t.length;s++){var o=zd(i.a[n],t[s]||"_",r);if(0!==o.length)return r={tenantId:t[s],providerIds:o,email:r},Zd(i),a&&a(),void e(r)}i.g.a(Pi({code:"no-matching-tenant-for-email"}).toString())}}),Hd(i.a[n]),Wd(i.a[n]));i.g.render(i.s),(r=Vd(i.a[n]).selectTenantUiShown||null)&&r()}else{var c=Error("Invalid project configuration: API key is invalid!");c.code="invalid-configuration",i.pb(c),r(c)}}))},e.Pb=function(e,t){if(!this.a.hasOwnProperty(e))throw Error("Invalid project configuration: API key is invalid!");var i=t||void 0;Gd(this.a[e],t||"_");try{this.i=ta.app(i).auth()}catch(r){var n=this.a[e].a.get("authDomain");if(!n)throw Error("Invalid project configuration: authDomain is required!");(e=ta.initializeApp({apiKey:e,authDomain:n},i)).auth().tenantId=t,this.i=e.auth()}return this.i},e.Zb=function(e,t){var i=this;return new xn((function(n,r){function a(t,n){i.j=new fd(e),Sd(i.j,i.s,t,n)}var s=e.app.options.apiKey;i.a.hasOwnProperty(s)||r(Error("Invalid project configuration: API key is invalid!"));var o=Kd(i.a[s],e.tenantId||"_",t&&t.providerIds);Zd(i),r={signInSuccessWithAuthResult:function(e){return n(e),!1}};var c,u=Vd(i.a[s]).signInUiShown||null,l=!1;r.uiChanged=function(t,n){null===t&&"callback"===n?((t=Vt("firebaseui-id-page-callback",i.s))&&ic(t),i.h=new jd,i.h.render(i.s)):l||null===t&&"spinner"===n||"blank"===n||(i.h&&(i.h.m(),i.h=null),l=!0,u&&u(e.tenantId))},o.callbacks=r,o.credentialHelper="none",t&&t.email&&(c={emailHint:t.email}),i.j?i.j.Wa().then((function(){a(o,c)})):a(o,c)}))},e.reset=function(){var e=this;return Wn().then((function(){e.j&&e.j.Wa()})).then((function(){e.j=null,Zd(e)}))},e.Vb=function(){var e=this;this.h||this.A||(this.A=window.setTimeout((function(){Zd(e),e.h=new jd,e.g=e.h,e.h.render(e.s),e.A=null}),500))},e.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},e.Bb=function(){return Zd(this),this.g=new zu,this.g.render(this.s),Wn()},e.pb=function(e){var t,i=this,n=Pi({code:e.code}).toString()||e.message;Zd(this),e.retry&&"function"==typeof e.retry&&(t=function(){i.reset(),e.retry()}),this.g=new Yu(n,t),this.g.render(this.s)},e.Rb=function(e){var t=this;return Wn().then((function(){var i=t.i&&t.i.app.options.apiKey;if(!t.a.hasOwnProperty(i))throw Error("Invalid project configuration: API key is invalid!");if(Gd(t.a[i],e.tenantId||"_"),!t.i.currentUser||t.i.currentUser.uid!==e.uid)throw Error("The user being processed does not match the signed in user!");return(i=Vd(t.a[i]).beforeSignInSuccess||null)?i(e):e})).then((function(t){if(t.uid!==e.uid)throw Error("User with mismatching UID returned.");return t}))},O("firebaseui.auth.FirebaseUiHandler",Xd),O("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Xd.prototype.Ub),O("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Xd.prototype.Pb),O("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Xd.prototype.Zb),O("firebaseui.auth.FirebaseUiHandler.prototype.reset",Xd.prototype.reset),O("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Xd.prototype.Vb),O("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Xd.prototype.mb),O("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Xd.prototype.Bb),O("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Xd.prototype.pb),O("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Xd.prototype.Rb),O("firebaseui.auth.AuthUI",fd),O("firebaseui.auth.AuthUI.getInstance",(function(e){return e=gd(e),md[e]?md[e]:null})),O("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",fd.prototype.Db),O("firebaseui.auth.AuthUI.prototype.start",fd.prototype.start),O("firebaseui.auth.AuthUI.prototype.setConfig",fd.prototype.ib),O("firebaseui.auth.AuthUI.prototype.signIn",fd.prototype.Wb),O("firebaseui.auth.AuthUI.prototype.reset",fd.prototype.reset),O("firebaseui.auth.AuthUI.prototype.delete",fd.prototype.Wa),O("firebaseui.auth.AuthUI.prototype.isPendingRedirect",fd.prototype.nb),O("firebaseui.auth.AuthUIError",Ni),O("firebaseui.auth.AuthUIError.prototype.toJSON",Ni.prototype.toJSON),O("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",eo),O("firebaseui.auth.CredentialHelper.NONE",to),O("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),xn.prototype.catch=xn.prototype.Ca,xn.prototype.finally=xn.prototype.fc}).apply("undefined"!=typeof global?global:"undefined"!=typeof self?self:window)}.apply("undefined"!=typeof global?global:"undefined"!=typeof self?self:window),"undefined"!=typeof window&&(window.dialogPolyfill=qa);var Ya=firebaseui.auth;export{vn as A,gn as B,Z as C,Q as D,ee as E,c as F,r as G,ne as S,Ya as a,E as b,v as c,b as d,y as e,ta as f,I as g,p as h,ie as i,k as j,U as k,_ as l,X as m,e as n,K as o,Y as p,q,$ as r,s,w as t,Je as u,Jr as v,Cn as w,re as x,pn as y,un as z};
