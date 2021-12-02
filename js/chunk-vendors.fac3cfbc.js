(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"034d":function(t,e,n){"use strict";function r(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=!1;function s(){i||(i=!0,t.$nextTick((function(){i=!1,n()})))}var o=!0,a=!1,c=void 0;try{for(var u,l=e[Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var h=u.value;t.$watch(h,s,{immediate:r})}}catch(d){a=!0,c=d}finally{try{!o&&l.return&&l.return()}finally{if(a)throw c}}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Nu})),n.d(e,"b",(function(){return Oc})),n.d(e,"c",(function(){return dc})),n.d(e,"d",(function(){return ec})),n.d(e,"e",(function(){return ou})),n.d(e,"f",(function(){return Ac})),n.d(e,"g",(function(){return T})),n.d(e,"h",(function(){return Cc})),n.d(e,"i",(function(){return au})),n.d(e,"j",(function(){return cu})),n.d(e,"k",(function(){return M})),n.d(e,"l",(function(){return Pu})),n.d(e,"m",(function(){return Ba})),n.d(e,"n",(function(){return st})),n.d(e,"o",(function(){return K})),n.d(e,"p",(function(){return Xa})),n.d(e,"q",(function(){return w})),n.d(e,"r",(function(){return G})),n.d(e,"s",(function(){return g})),n.d(e,"t",(function(){return Ha})),n.d(e,"u",(function(){return Hu})),n.d(e,"v",(function(){return nl})),n.d(e,"w",(function(){return el})),n.d(e,"x",(function(){return bc})),n.d(e,"y",(function(){return ic})),n.d(e,"z",(function(){return sc})),n.d(e,"A",(function(){return tc})),n.d(e,"B",(function(){return Ku})),n.d(e,"C",(function(){return Zu})),n.d(e,"D",(function(){return Ec})),n.d(e,"E",(function(){return oc})),n.d(e,"F",(function(){return gc})),n.d(e,"G",(function(){return yc})),n.d(e,"H",(function(){return _c})),n.d(e,"I",(function(){return Au})),n.d(e,"J",(function(){return Su})),n.d(e,"K",(function(){return pc})),n.d(e,"L",(function(){return Qu})),n.d(e,"M",(function(){return ju})),n.d(e,"N",(function(){return $u})),n.d(e,"O",(function(){return Fu})),n.d(e,"P",(function(){return Uu})),n.d(e,"Q",(function(){return Vu})),n.d(e,"R",(function(){return qu})),n.d(e,"S",(function(){return rl})),n.d(e,"T",(function(){return bu})),n.d(e,"U",(function(){return wu})),n.d(e,"V",(function(){return Tc})),n.d(e,"W",(function(){return Ic})),n.d(e,"X",(function(){return Gu})),n.d(e,"Y",(function(){return Wu})),n.d(e,"Z",(function(){return yu})),n.d(e,"ab",(function(){return fu})),n.d(e,"bb",(function(){return cc})),n.d(e,"cb",(function(){return ac})),n.d(e,"db",(function(){return Ju})),n.d(e,"eb",(function(){return tl})),n.d(e,"fb",(function(){return Bu})),n.d(e,"gb",(function(){return f})),n.d(e,"hb",(function(){return lu})),n.d(e,"ib",(function(){return Tu})),n.d(e,"jb",(function(){return Eu})),n.d(e,"kb",(function(){return zu})),n.d(e,"lb",(function(){return wc})),n.d(e,"mb",(function(){return mu}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
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
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
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
let l="9.5.0";
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
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(t){h.setLogLevel(t)}function p(t,...e){if(h.logLevel<=s["a"].DEBUG){const n=e.map(y);h.debug(`Firestore (${l}): ${t}`,...n)}}function m(t,...e){if(h.logLevel<=s["a"].ERROR){const n=e.map(y);h.error(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=s["a"].WARN){const n=e.map(y);h.warn(`Firestore (${l}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function v(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw m(e),new Error(e)}function b(t,e){t||v()}function w(t,e){t||v()}function _(t,e){return t}
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class I{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
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
 */class S{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class O{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class k{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new I;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new I,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{p("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new I)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(p("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(b("string"==typeof e.accessToken),new S(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(null===t||"string"==typeof t),new u(t)}}class C{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=u.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class x{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new C(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
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
 */class N{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
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
 */function D(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */N.T=-1;class R{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=D(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function P(t,e){return t<e?-1:t>e?1:0}function L(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}function j(t){return t+"\0"}
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
 */class M{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return M.fromMillis(Date.now())}static fromDate(t){return M.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new M(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?P(this.nanoseconds,t.nanoseconds):P(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class ${constructor(t){this.timestamp=t}static fromTimestamp(t){return new $(t)}static min(){return new $(new M(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function F(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function U(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function V(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */class q{constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===q.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof q?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class B extends q{construct(t,e,n){return new B(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new B(e)}static emptyPath(){return new B([])}}const z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends q{construct(t,e,n){return new K(t,e,n)}static isValidIdentifier(t){return z.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new K(e)}static emptyPath(){return new K([])}}
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
 */class H{constructor(t){this.fields=t,t.sort(K.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return L(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
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
 */function G(){return"undefined"!=typeof atob}
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
 */class W{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new W(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new W(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return P(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}W.EMPTY_BYTE_STRING=new W("");const Q=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function X(t){if(b(!!t),"string"==typeof t){let e=0;const n=Q.exec(t);if(b(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Y(t.seconds),nanos:Y(t.nanos)}}function Y(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function J(t){return"string"==typeof t?W.fromBase64String(t):W.fromUint8Array(t)}
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
 */function Z(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function tt(t){const e=t.mapValue.fields.__previous_value__;return Z(e)?tt(e):e}function et(t){const e=X(t.mapValue.fields.__local_write_time__.timestampValue);return new M(e.seconds,e.nanos)}
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
 */function nt(t){return null==t}function rt(t){return 0===t&&1/t==-1/0}function it(t){return"number"==typeof t&&Number.isInteger(t)&&!rt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */class st{constructor(t){this.path=t}static fromPath(t){return new st(B.fromString(t))}static fromName(t){return new st(B.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===B.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return B.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new st(new B(t.slice()))}}
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
 */function ot(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Z(t)?4:10:v()}function at(t,e){const n=ot(t);if(n!==ot(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return et(t).isEqual(et(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=X(t.timestampValue),r=X(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return J(t.bytesValue).isEqual(J(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Y(t.geoPointValue.latitude)===Y(e.geoPointValue.latitude)&&Y(t.geoPointValue.longitude)===Y(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Y(t.integerValue)===Y(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Y(t.doubleValue),r=Y(e.doubleValue);return n===r?rt(n)===rt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return L(t.arrayValue.values||[],e.arrayValue.values||[],at);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(F(n)!==F(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!at(n[i],r[i])))return!1;return!0}(t,e);default:return v()}}function ct(t,e){return void 0!==(t.values||[]).find(t=>at(t,e))}function ut(t,e){const n=ot(t),r=ot(e);if(n!==r)return P(n,r);switch(n){case 0:return 0;case 1:return P(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Y(t.integerValue||t.doubleValue),r=Y(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return lt(t.timestampValue,e.timestampValue);case 4:return lt(et(t),et(e));case 5:return P(t.stringValue,e.stringValue);case 6:return function(t,e){const n=J(t),r=J(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=P(n[i],r[i]);if(0!==t)return t}return P(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=P(Y(t.latitude),Y(e.latitude));return 0!==n?n:P(Y(t.longitude),Y(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=ut(n[i],r[i]);if(t)return t}return P(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=P(r[o],s[o]);if(0!==t)return t;const e=ut(n[r[o]],i[s[o]]);if(0!==e)return e}return P(r.length,s.length)}(t.mapValue,e.mapValue);default:throw v()}}function lt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return P(t,e);const n=X(t),r=X(e),i=P(n.seconds,r.seconds);return 0!==i?i:P(n.nanos,r.nanos)}function ht(t){return dt(t)}function dt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=X(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?J(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,st.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=dt(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${dt(t.fields[i])}`;return n+"}"}(t.mapValue):v();var e,n}function ft(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function pt(t){return!!t&&"integerValue"in t}function mt(t){return!!t&&"arrayValue"in t}function gt(t){return!!t&&"nullValue"in t}function yt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vt(t){return!!t&&"mapValue"in t}function bt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return U(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=bt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
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
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!vt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=bt(e)}setAll(t){let e=K.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=bt(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());vt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return at(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];vt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){U(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new wt(bt(this.value))}}function _t(t){const e=[];return U(t.fields,(t,n)=>{const r=new K([t]);if(vt(n)){const t=_t(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new H(e)
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
 */}class Et{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new Et(t,0,$.min(),wt.empty(),0)}static newFoundDocument(t,e,n){return new Et(t,1,e,n,0)}static newNoDocument(t,e){return new Et(t,2,e,wt.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,wt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new Et(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Tt{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function It(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Tt(t,e,n,r,i,s,o)}function St(t){const e=_(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>xt(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),nt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Ut(e.startAt)),e.endAt&&(t+="|ub:",t+=Ut(e.endAt)),e.A=t}return e.A}function At(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ht(e.value)}`;var e}).join(", ")}]`),nt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Ut(t.startAt)),t.endAt&&(e+=", endAt: "+Ut(t.endAt)),`Target(${e})`}function Ot(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!qt(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!at(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zt(t.startAt,e.startAt)&&zt(t.endAt,e.endAt)}function kt(t){return st.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Ct extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new Nt(t,e,n):"array-contains"===e?new Lt(t,n):"in"===e?new jt(t,n):"not-in"===e?new Mt(t,n):"array-contains-any"===e?new $t(t,n):new Ct(t,e,n)}static R(t,e,n){return"in"===e?new Dt(t,n):new Rt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(ut(e,this.value)):null!==e&&ot(this.value)===ot(e)&&this.P(ut(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function xt(t){return t.field.canonicalString()+t.op.toString()+ht(t.value)}class Nt extends Ct{constructor(t,e,n){super(t,e,n),this.key=st.fromName(n.referenceValue)}matches(t){const e=st.comparator(t.key,this.key);return this.P(e)}}class Dt extends Ct{constructor(t,e){super(t,"in",e),this.keys=Pt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Rt extends Ct{constructor(t,e){super(t,"not-in",e),this.keys=Pt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Pt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>st.fromName(t.referenceValue))}class Lt extends Ct{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return mt(e)&&ct(e.arrayValue,this.value)}}class jt extends Ct{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ct(this.value.arrayValue,e)}}class Mt extends Ct{constructor(t,e){super(t,"not-in",e)}matches(t){if(ct(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ct(this.value.arrayValue,e)}}class $t extends Ct{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!mt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>ct(this.value.arrayValue,t))}}class Ft{constructor(t,e){this.position=t,this.before=e}}function Ut(t){return`${t.before?"b":"a"}:${t.position.map(t=>ht(t)).join(",")}`}class Vt{constructor(t,e="asc"){this.field=t,this.dir=e}}function qt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Bt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?st.comparator(st.fromName(o.referenceValue),n.key):ut(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function zt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!at(t.position[n],e.position[n]))return!1;return!0}
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
 */class Kt{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Ht(t,e,n,r,i,s,o,a){return new Kt(t,e,n,r,i,s,o,a)}function Gt(t){return new Kt(t)}function Wt(t){return!nt(t.limit)&&"F"===t.limitType}function Qt(t){return!nt(t.limit)&&"L"===t.limitType}function Xt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Yt(t){for(const e of t.filters)if(e.v())return e.field;return null}function Jt(t){return null!==t.collectionGroup}function Zt(t){const e=_(t);if(null===e.V){e.V=[];const t=Yt(e),n=Xt(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new Vt(t)),e.V.push(new Vt(K.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new Vt(K.keyField(),t))}}}return e.V}function te(t){const e=_(t);if(!e.S)if("F"===e.limitType)e.S=It(e.path,e.collectionGroup,Zt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Zt(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Vt(i.field,e))}const n=e.endAt?new Ft(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Ft(e.startAt.position,!e.startAt.before):null;e.S=It(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function ee(t,e,n){return new Kt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ne(t,e){return Ot(te(t),te(e))&&t.limitType===e.limitType}function re(t){return`${St(te(t))}|lt:${t.limitType}`}function ie(t){return`Query(target=${At(te(t))}; limitType=${t.limitType})`}function se(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):st.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Bt(t.startAt,Zt(t),e))&&(!t.endAt||!Bt(t.endAt,Zt(t),e))}(t,e)}function oe(t){return(e,n)=>{let r=!1;for(const i of Zt(t)){const t=ae(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function ae(t,e,n){const r=t.field.isKeyField()?st.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ut(r,i):v()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
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
 */function ce(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rt(e)?"-0":e}}function ue(t){return{integerValue:""+t}}function le(t,e){return it(e)?ue(e):ce(t,e)}
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
 */class he{constructor(){this._=void 0}}function de(t,e,n){return t instanceof me?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ge?ye(t,e):t instanceof ve?be(t,e):function(t,e){const n=pe(t,e),r=_e(n)+_e(t.C);return pt(n)&&pt(t.C)?ue(r):ce(t.N,r)}(t,e)}function fe(t,e,n){return t instanceof ge?ye(t,e):t instanceof ve?be(t,e):n}function pe(t,e){return t instanceof we?pt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class me extends he{}class ge extends he{constructor(t){super(),this.elements=t}}function ye(t,e){const n=Ee(e);for(const r of t.elements)n.some(t=>at(t,r))||n.push(r);return{arrayValue:{values:n}}}class ve extends he{constructor(t){super(),this.elements=t}}function be(t,e){let n=Ee(e);for(const r of t.elements)n=n.filter(t=>!at(t,r));return{arrayValue:{values:n}}}class we extends he{constructor(t,e){super(),this.N=t,this.C=e}}function _e(t){return Y(t.integerValue||t.doubleValue)}function Ee(t){return mt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class Te{constructor(t,e){this.field=t,this.transform=e}}function Ie(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ge&&e instanceof ge||t instanceof ve&&e instanceof ve?L(t.elements,e.elements,at):t instanceof we&&e instanceof we?at(t.C,e.C):t instanceof me&&e instanceof me}(t.transform,e.transform)}class Se{constructor(t,e){this.version=t,this.transformResults=e}}class Ae{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ae}static exists(t){return new Ae(void 0,t)}static updateTime(t){return new Ae(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Oe(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class ke{}function Ce(t,e,n){t instanceof Pe?function(t,e,n){const r=t.value.clone(),i=Me(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Le?function(t,e,n){if(!Oe(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Me(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(je(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function xe(t,e,n){t instanceof Pe?function(t,e,n){if(!Oe(t.precondition,e))return;const r=t.value.clone(),i=$e(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Re(e),r).setHasLocalMutations()}(t,e,n):t instanceof Le?function(t,e,n){if(!Oe(t.precondition,e))return;const r=$e(t.fieldTransforms,n,e),i=e.data;i.setAll(je(t)),i.setAll(r),e.convertToFoundDocument(Re(e),i).setHasLocalMutations()}(t,e,n):function(t,e){Oe(t.precondition,e)&&e.convertToNoDocument($.min())}(t,e)}function Ne(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=pe(r.transform,t||null);null!=i&&(null==n&&(n=wt.empty()),n.set(r.field,i))}return n||null}function De(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&L(t,e,(t,e)=>Ie(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Re(t){return t.isFoundDocument()?t.version:$.min()}class Pe extends ke{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Le extends ke{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function je(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Me(t,e,n){const r=new Map;b(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,fe(o,a,n[i]))}return r}function $e(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,de(t,s,e))}return r}class Fe extends ke{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Ue extends ke{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
 */class Ve{constructor(t){this.count=t}}
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
 */var qe,Be;function ze(t){switch(t){default:return v();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Ke(t){if(void 0===t)return m("GRPC error has no .code"),E.UNKNOWN;switch(t){case qe.OK:return E.OK;case qe.CANCELLED:return E.CANCELLED;case qe.UNKNOWN:return E.UNKNOWN;case qe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case qe.INTERNAL:return E.INTERNAL;case qe.UNAVAILABLE:return E.UNAVAILABLE;case qe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case qe.NOT_FOUND:return E.NOT_FOUND;case qe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case qe.ABORTED:return E.ABORTED;case qe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case qe.DATA_LOSS:return E.DATA_LOSS;default:return v()}}(Be=qe||(qe={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";
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
class He{constructor(t,e){this.comparator=t,this.root=e||We.EMPTY}insert(t,e){return new He(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,We.BLACK,null,null))}remove(t){return new He(this.comparator,this.root.remove(t,this.comparator).copy(null,null,We.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ge(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ge(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ge(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ge(this.root,t,this.comparator,!0)}}class Ge{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class We{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:We.RED,this.left=null!=r?r:We.EMPTY,this.right=null!=i?i:We.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new We(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return We.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1,We.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new We(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Qe{constructor(t){this.comparator=t,this.data=new He(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xe(this.data.getIterator())}getIteratorFrom(t){return new Xe(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Qe))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Qe(this.comparator);return e.data=t,e}}class Xe{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */const Ye=new He(st.comparator);function Je(){return Ye}const Ze=new He(st.comparator);function tn(){return Ze}const en=new He(st.comparator);function nn(){return en}const rn=new Qe(st.comparator);function sn(...t){let e=rn;for(const n of t)e=e.add(n);return e}const on=new Qe(P);function an(){return on}
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
 */class cn{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,un.createSynthesizedTargetChangeForCurrentChange(t,e)),new cn($.min(),n,an(),Je(),sn())}}class un{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new un(W.EMPTY_BYTE_STRING,e,sn(),sn(),sn())}}
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
 */class ln{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class hn{constructor(t,e){this.targetId=t,this.O=e}}class dn{constructor(t,e,n=W.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class fn{constructor(){this.F=0,this.M=gn(),this.L=W.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=sn(),e=sn(),n=sn();return this.M.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}}),new un(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=gn()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class pn{constructor(t){this.tt=t,this.et=new Map,this.nt=Je(),this.st=mn(),this.it=new Qe(P)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.ct(e,t.key,t.$);for(const e of t.removedTargetIds)this.ct(e,t.key,t.$)}at(t){this.forEachTarget(t,e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:v()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,n)=>{this.ht(n)&&e(n)})}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(kt(t))if(0===n){const n=new st(t.path);this.ct(e,n,Et.newNoDocument(n,$.min()))}else b(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((n,r)=>{const i=this.dt(r);if(i){if(n.current&&kt(i.target)){const e=new st(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.ct(r,e,Et.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}});let n=sn();this.st.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new cn(t,e,this.it,this.nt,n);return this.nt=Je(),this.st=mn(),this.it=new Qe(P),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}ct(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new fn,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Qe(P),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Tt(t)}lt(t){this.et.set(t,new fn),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function mn(){return new He(st.comparator)}function gn(){return new He(st.comparator)}
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
 */const yn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),vn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class bn{constructor(t,e){this.databaseId=t,this.D=e}}function wn(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _n(t,e){return t.D?e.toBase64():e.toUint8Array()}function En(t,e){return wn(t,e.toTimestamp())}function Tn(t){return b(!!t),$.fromTimestamp(function(t){const e=X(t);return new M(e.seconds,e.nanos)}(t))}function In(t,e){return function(t){return new B(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Sn(t){const e=B.fromString(t);return b(Zn(e)),e}function An(t,e){return In(t.databaseId,e.path)}function On(t,e){const n=Sn(e);if(n.get(1)!==t.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new st(Nn(n))}function kn(t,e){return In(t.databaseId,e)}function Cn(t){const e=Sn(t);return 4===e.length?B.emptyPath():Nn(e)}function xn(t){return new B(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nn(t){return b(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Dn(t,e,n){return{name:An(t,e),fields:n.value.mapValue.fields}}function Rn(t,e,n){const r=On(t,e.name),i=Tn(e.updateTime),s=new wt({mapValue:{fields:e.fields}}),o=Et.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Pn(t,e){return"found"in e?function(t,e){b(!!e.found),e.found.name,e.found.updateTime;const n=On(t,e.found.name),r=Tn(e.found.updateTime),i=new wt({mapValue:{fields:e.found.fields}});return Et.newFoundDocument(n,r,i)}(t,e):"missing"in e?function(t,e){b(!!e.missing),b(!!e.readTime);const n=On(t,e.missing),r=Tn(e.readTime);return Et.newNoDocument(n,r)}(t,e):v()}function Ln(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:v()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.D?(b(void 0===e||"string"==typeof e),W.fromBase64String(e||"")):(b(void 0===e||e instanceof Uint8Array),W.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?E.UNKNOWN:Ke(t.code);return new T(e,t.message||"")}(o);n=new dn(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=On(t,r.document.name),s=Tn(r.document.updateTime),o=new wt({mapValue:{fields:r.document.fields}}),a=Et.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new ln(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=On(t,r.document),s=r.readTime?Tn(r.readTime):$.min(),o=Et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ln([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=On(t,r.document),s=r.removedTargetIds||[];n=new ln([],s,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Ve(r),s=t.targetId;n=new hn(s,i)}}return n}function jn(t,e){let n;if(e instanceof Pe)n={update:Dn(t,e.key,e.value)};else if(e instanceof Fe)n={delete:An(t,e.key)};else if(e instanceof Le)n={update:Dn(t,e.key,e.data),updateMask:Jn(e.fieldMask)};else{if(!(e instanceof Ue))return v();n={verify:An(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof me)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ge)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ve)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof we)return{fieldPath:e.field.canonicalString(),increment:n.C};throw v()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:En(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:v()}(t,e.precondition)),n}function Mn(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?Ae.updateTime(Tn(t.updateTime)):void 0!==t.exists?Ae.exists(t.exists):Ae.none()}(e.currentDocument):Ae.none(),r=e.updateTransforms?e.updateTransforms.map(e=>function(t,e){let n=null;if("setToServerValue"in e)b("REQUEST_TIME"===e.setToServerValue),n=new me;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new ge(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new ve(t)}else"increment"in e?n=new we(t,e.increment):v();const r=K.fromServerFormat(e.fieldPath);return new Te(r,n)}(t,e)):[];if(e.update){e.update.name;const i=On(t,e.update.name),s=new wt({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new H(e.map(t=>K.fromServerFormat(t)))}(e.updateMask);return new Le(i,s,t,n,r)}return new Pe(i,s,n,r)}if(e.delete){const r=On(t,e.delete);return new Fe(r,n)}if(e.verify){const r=On(t,e.verify);return new Ue(r,n)}return v()}function $n(t,e){return t&&t.length>0?(b(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?Tn(t.updateTime):Tn(e);return n.isEqual($.min())&&(n=Tn(e)),new Se(n,t.transformResults||[])}(t,e))):[]}function Fn(t,e){return{documents:[kn(t,e.path)]}}function Un(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=kn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=kn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(yt(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NAN"}};if(gt(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(yt(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NAN"}};if(gt(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wn(t.field),op:Gn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Wn(t.field),direction:Hn(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.D||nt(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=zn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=zn(e.endAt)),n}function Vn(t){let e=Cn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){b(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Bn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Vt(Qn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,nt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Kn(n.startAt));let u=null;return n.endAt&&(u=Kn(n.endAt)),Ht(e,i,o,s,a,"F",c,u)}function qn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Bn(t){return t?void 0!==t.unaryFilter?[Yn(t)]:void 0!==t.fieldFilter?[Xn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Bn(t)).reduce((t,e)=>t.concat(e)):v():[]}function zn(t){return{before:t.before,values:t.position}}function Kn(t){const e=!!t.before,n=t.values||[];return new Ft(n,e)}function Hn(t){return yn[t]}function Gn(t){return vn[t]}function Wn(t){return{fieldPath:t.canonicalString()}}function Qn(t){return K.fromServerFormat(t.fieldPath)}function Xn(t){return Ct.create(Qn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value)}function Yn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Qn(t.unaryFilter.field);return Ct.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Qn(t.unaryFilter.field);return Ct.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Qn(t.unaryFilter.field);return Ct.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Qn(t.unaryFilter.field);return Ct.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function Jn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Zn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */function tr(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=nr(e)),e=er(t.get(n),e);return nr(e)}function er(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function nr(t){return t+""}function rr(t){const e=t.length;if(b(e>=2),2===e)return b(""===t.charAt(0)&&""===t.charAt(1)),B.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const e=t.indexOf("",s);switch((e<0||e>n)&&v(),t.charAt(e+1)){case"":const n=t.substring(s,e);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=t.substring(s,e),i+="\0";break;case"":i+=t.substring(s,e+1);break;default:v()}s=e+2}return new B(r)}
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
 */class ir{constructor(t,e){this.seconds=t,this.nanoseconds=e}}class sr{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}sr.store="owner",sr.key="owner";class or{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}or.store="mutationQueues",or.keyPath="userId";class ar{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}ar.store="mutations",ar.keyPath="batchId",ar.userMutationsIndex="userMutationsIndex",ar.userMutationsKeyPath=["userId","batchId"];class cr{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,tr(e)]}static key(t,e,n){return[t,tr(e),n]}}cr.store="documentMutations",cr.PLACEHOLDER=new cr;class ur{constructor(t,e){this.path=t,this.readTime=e}}class lr{constructor(t,e){this.path=t,this.version=e}}class hr{constructor(t,e,n,r,i,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}hr.store="remoteDocuments",hr.readTimeIndex="readTimeIndex",hr.readTimeIndexPath="readTime",hr.collectionReadTimeIndex="collectionReadTimeIndex",hr.collectionReadTimeIndexPath=["parentPath","readTime"];class dr{constructor(t){this.byteSize=t}}dr.store="remoteDocumentGlobal",dr.key="remoteDocumentGlobalKey";class fr{constructor(t,e,n,r,i,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}fr.store="targets",fr.keyPath="targetId",fr.queryTargetsIndexName="queryTargetsIndex",fr.queryTargetsKeyPath=["canonicalId","targetId"];class pr{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}pr.store="targetDocuments",pr.keyPath=["targetId","path"],pr.documentTargetsIndex="documentTargetsIndex",pr.documentTargetsKeyPath=["path","targetId"];class mr{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}mr.key="targetGlobalKey",mr.store="targetGlobal";class gr{constructor(t,e){this.collectionId=t,this.parent=e}}gr.store="collectionParents",gr.keyPath=["collectionId","parent"];class yr{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}yr.store="clientMetadata",yr.keyPath="clientId";class vr{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}vr.store="bundles",vr.keyPath="bundleId";class br{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}br.store="namedQueries",br.keyPath="name";const wr=[or.store,ar.store,cr.store,hr.store,fr.store,sr.store,mr.store,pr.store,yr.store,dr.store,gr.store,vr.store,br.store],_r="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Er{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
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
 */class Tr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Tr((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Tr?e:Tr.resolve(e)}catch(t){return Tr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Tr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Tr.reject(e)}static resolve(t){return new Tr((e,n)=>{e(t)})}static reject(t){return new Tr((e,n)=>{n(t)})}static waitFor(t){return new Tr((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=Tr.resolve(!1);for(const n of t)e=e.next(t=>t?Tr.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
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
 */class Ir{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.Et=new I,this.transaction.oncomplete=()=>{this.Et.resolve()},this.transaction.onabort=()=>{e.error?this.Et.reject(new Or(t,e.error)):this.Et.resolve()},this.transaction.onerror=e=>{const n=Dr(e.target.error);this.Et.reject(new Or(t,n))}}static open(t,e,n,r){try{return new Ir(e,t.transaction(r,n))}catch(t){throw new Or(e,t)}}get It(){return this.Et.promise}abort(t){t&&this.Et.reject(t),this.aborted||(p("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(t){const e=this.transaction.objectStore(t);return new Cr(e)}}class Sr{constructor(t,e,n){this.name=t,this.version=e,this.At=n,12.2===Sr.Rt(Object(o["j"])())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return p("SimpleDb","Removing database:",t),xr(window.indexedDB.deleteDatabase(t)).toPromise()}static bt(){if(!Object(o["o"])())return!1;if(Sr.Pt())return!0;const t=Object(o["j"])(),e=Sr.Rt(t),n=0<e&&e<10,r=Sr.vt(t),i=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static Pt(){var e;return"undefined"!=typeof t&&"YES"===(null===(e=Object({NODE_ENV:"production",BASE_URL:"/familyfarm_final/"}))||void 0===e?void 0:e.Vt)}static St(t,e){return t.store(e)}static Rt(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static vt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Dt(t){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=t=>{const n=t.target.result;e(n)},r.onblocked=()=>{n(new Or(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=e=>{const r=e.target.error;"VersionError"===r.name?n(new T(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new T(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Or(t,r))},r.onupgradeneeded=t=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.At.Ct(e,r.transaction,t.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=t=>this.Nt(t)),this.db}xt(t){this.Nt=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,r){const i="readonly"===e;let s=0;for(;;){++s;try{this.db=await this.Dt(t);const e=Ir.open(this.db,t,i?"readonly":"readwrite",n),s=r(e).catch(t=>(e.abort(t),Tr.reject(t))).toPromise();return s.catch(()=>{}),await e.It,s}catch(t){const e="FirebaseError"!==t.name&&s<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Ar{constructor(t){this.kt=t,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(t){this.kt=t}done(){this.$t=!0}Mt(t){this.Ot=t}delete(){return xr(this.kt.delete())}}class Or extends T{constructor(t,e){super(E.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function kr(t){return"IndexedDbTransactionError"===t.name}class Cr{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(p("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),xr(n)}add(t){return p("SimpleDb","ADD",this.store.name,t,t),xr(this.store.add(t))}get(t){return xr(this.store.get(t)).next(e=>(void 0===e&&(e=null),p("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return p("SimpleDb","DELETE",this.store.name,t),xr(this.store.delete(t))}count(){return p("SimpleDb","COUNT",this.store.name),xr(this.store.count())}Lt(t,e){const n=this.cursor(this.options(t,e)),r=[];return this.Bt(n,(t,e)=>{r.push(e)}).next(()=>r)}Ut(t,e){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.qt=!1;const r=this.cursor(n);return this.Bt(r,(t,e,n)=>n.delete())}Kt(t,e){let n;e?n=t:(n={},e=t);const r=this.cursor(n);return this.Bt(r,e)}jt(t){const e=this.cursor({});return new Tr((n,r)=>{e.onerror=t=>{const e=Dr(t.target.error);r(e)},e.onsuccess=e=>{const r=e.target.result;r?t(r.primaryKey,r.value).next(t=>{t?r.continue():n()}):n()}})}Bt(t,e){const n=[];return new Tr((r,i)=>{t.onerror=t=>{i(t.target.error)},t.onsuccess=t=>{const i=t.target.result;if(!i)return void r();const s=new Ar(i),o=e(i.primaryKey,i.value,s);if(o instanceof Tr){const t=o.catch(t=>(s.done(),Tr.reject(t)));n.push(t)}s.isDone?r():null===s.Ft?i.continue():i.continue(s.Ft)}}).next(()=>Tr.waitFor(n))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.qt?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function xr(t){return new Tr((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=Dr(t.target.error);n(e)}})}let Nr=!1;function Dr(t){const e=Sr.Rt(Object(o["j"])());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Nr||(Nr=!0,setTimeout(()=>{throw t},0)),t}}return t}
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
 */class Rr extends Er{constructor(t,e){super(),this.Qt=t,this.currentSequenceNumber=e}}function Pr(t,e){const n=_(t);return Sr.St(n.Qt,e)}
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
 */class Lr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Ce(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&xe(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&xe(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument($.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),sn())}isEqual(t){return this.batchId===t.batchId&&L(this.mutations,t.mutations,(t,e)=>De(t,e))&&L(this.baseMutations,t.baseMutations,(t,e)=>De(t,e))}}class jr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){b(t.mutations.length===n.length);let r=nn();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new jr(t,e,n,r)}}
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
 */class Mr{constructor(t,e,n,r,i=$.min(),s=$.min(),o=W.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Mr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class $r{constructor(t){this.Wt=t}}function Fr(t,e){if(e.document)return Rn(t.Wt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const t=st.fromSegments(e.noDocument.path),n=zr(e.noDocument.readTime),r=Et.newNoDocument(t,n);return e.hasCommittedMutations?r.setHasCommittedMutations():r}if(e.unknownDocument){const t=st.fromSegments(e.unknownDocument.path),n=zr(e.unknownDocument.version);return Et.newUnknownDocument(t,n)}return v()}function Ur(t,e,n){const r=Vr(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const n=function(t,e){return{name:An(t,e.key),fields:e.data.value.mapValue.fields,updateTime:wn(t,e.version.toTimestamp())}}(t.Wt,e),s=e.hasCommittedMutations;return new hr(null,null,n,s,r,i)}if(e.isNoDocument()){const t=e.key.path.toArray(),n=Br(e.version),s=e.hasCommittedMutations;return new hr(null,new ur(t,n),null,s,r,i)}if(e.isUnknownDocument()){const t=e.key.path.toArray(),n=Br(e.version);return new hr(new lr(t,n),null,null,!0,r,i)}return v()}function Vr(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function qr(t){const e=new M(t[0],t[1]);return $.fromTimestamp(e)}function Br(t){const e=t.toTimestamp();return new ir(e.seconds,e.nanoseconds)}function zr(t){const e=new M(t.seconds,t.nanoseconds);return $.fromTimestamp(e)}function Kr(t,e){const n=(e.baseMutations||[]).map(e=>Mn(t.Wt,e));for(let s=0;s<e.mutations.length-1;++s){const t=e.mutations[s];if(s+1<e.mutations.length&&void 0!==e.mutations[s+1].transform){const n=e.mutations[s+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(e=>Mn(t.Wt,e)),i=M.fromMillis(e.localWriteTimeMs);return new Lr(e.batchId,i,n,r)}function Hr(t){const e=zr(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?zr(t.lastLimboFreeSnapshotVersion):$.min();let r;var i;return void 0!==t.query.documents?(b(1===(i=t.query).documents.length),r=te(Gt(Cn(i.documents[0])))):r=function(t){return te(Vn(t))}(t.query),new Mr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,W.fromBase64String(t.resumeToken))}function Gr(t,e){const n=Br(e.snapshotVersion),r=Br(e.lastLimboFreeSnapshotVersion);let i;i=kt(e.target)?Fn(t.Wt,e.target):Un(t.Wt,e.target);const s=e.resumeToken.toBase64();return new fr(e.targetId,St(e.target),n,s,e.sequenceNumber,r,i)}function Wr(t){const e=Vn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ee(e,e.limit,"L"):e}
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
 */class Qr{getBundleMetadata(t,e){return Xr(t).get(e).next(t=>{if(t)return{id:(e=t).bundleId,createTime:zr(e.createTime),version:e.version};var e})}saveBundleMetadata(t,e){return Xr(t).put({bundleId:(n=e).id,createTime:Br(Tn(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return Yr(t).get(e).next(t=>{if(t)return{name:(e=t).name,query:Wr(e.bundledQuery),readTime:zr(e.readTime)};var e})}saveNamedQuery(t,e){return Yr(t).put(function(t){return{name:t.name,readTime:Br(Tn(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function Xr(t){return Pr(t,vr.store)}function Yr(t){return Pr(t,br.store)}
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
 */class Jr{constructor(){this.Gt=new Zr}addToCollectionParentIndex(t,e){return this.Gt.add(e),Tr.resolve()}getCollectionParents(t,e){return Tr.resolve(this.Gt.getEntries(e))}}class Zr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Qe(B.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Qe(B.comparator)).toArray()}}
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
 */class ti{constructor(){this.zt=new Zr}addToCollectionParentIndex(t,e){if(!this.zt.has(e)){const n=e.lastSegment(),r=e.popLast();t.addOnCommittedListener(()=>{this.zt.add(e)});const i={collectionId:n,parent:tr(r)};return ei(t).put(i)}return Tr.resolve()}getCollectionParents(t,e){const n=[],r=IDBKeyRange.bound([e,""],[j(e),""],!1,!0);return ei(t).Lt(r).next(t=>{for(const r of t){if(r.collectionId!==e)break;n.push(rr(r.parent))}return n})}}function ei(t){return Pr(t,gr.store)}
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
 */const ni={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ri{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new ri(t,ri.DEFAULT_COLLECTION_PERCENTILE,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */function ii(t,e,n){const r=t.store(ar.store),i=t.store(cr.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Kt({range:o},(t,e,n)=>(a++,n.delete()));s.push(c.next(()=>{b(1===a)}));const u=[];for(const l of n.mutations){const t=cr.key(e,l.key.path,n.batchId);s.push(i.delete(t)),u.push(l.key)}return Tr.waitFor(s).next(()=>u)}function si(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw v();e=t.noDocument}return JSON.stringify(e).length}
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
 */ri.DEFAULT_COLLECTION_PERCENTILE=10,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ri.DEFAULT=new ri(41943040,ri.DEFAULT_COLLECTION_PERCENTILE,ri.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ri.DISABLED=new ri(-1,0,0);class oi{constructor(t,e,n,r){this.userId=t,this.N=e,this.Ht=n,this.referenceDelegate=r,this.Jt={}}static Yt(t,e,n,r){b(""!==t.uid);const i=t.isAuthenticated()?t.uid:"";return new oi(i,e,n,r)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ci(t).Kt({index:ar.userMutationsIndex,range:n},(t,n,r)=>{e=!1,r.done()}).next(()=>e)}addMutationBatch(t,e,n,r){const i=ui(t),s=ci(t);return s.add({}).next(o=>{b("number"==typeof o);const a=new Lr(o,e,n,r),c=function(t,e,n){const r=n.baseMutations.map(e=>jn(t.Wt,e)),i=n.mutations.map(e=>jn(t.Wt,e));return new ar(e,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.N,this.userId,a),u=[];let l=new Qe((t,e)=>P(t.canonicalString(),e.canonicalString()));for(const t of r){const e=cr.key(this.userId,t.key.path,o);l=l.add(t.key.path.popLast()),u.push(s.put(c)),u.push(i.put(e,cr.PLACEHOLDER))}return l.forEach(e=>{u.push(this.Ht.addToCollectionParentIndex(t,e))}),t.addOnCommittedListener(()=>{this.Jt[o]=a.keys()}),Tr.waitFor(u).next(()=>a)})}lookupMutationBatch(t,e){return ci(t).get(e).next(t=>t?(b(t.userId===this.userId),Kr(this.N,t)):null)}Xt(t,e){return this.Jt[e]?Tr.resolve(this.Jt[e]):this.lookupMutationBatch(t,e).next(t=>{if(t){const n=t.keys();return this.Jt[e]=n,n}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ci(t).Kt({index:ar.userMutationsIndex,range:r},(t,e,r)=>{e.userId===this.userId&&(b(e.batchId>=n),i=Kr(this.N,e)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return ci(t).Kt({index:ar.userMutationsIndex,range:e,reverse:!0},(t,e,r)=>{n=e.batchId,r.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ci(t).Lt(ar.userMutationsIndex,e).next(t=>t.map(t=>Kr(this.N,t)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=cr.prefixForPath(this.userId,e.path),r=IDBKeyRange.lowerBound(n),i=[];return ui(t).Kt({range:r},(n,r,s)=>{const[o,a,c]=n,u=rr(a);if(o===this.userId&&e.path.isEqual(u))return ci(t).get(c).next(t=>{if(!t)throw v();b(t.userId===this.userId),i.push(Kr(this.N,t))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Qe(P);const r=[];return e.forEach(e=>{const i=cr.prefixForPath(this.userId,e.path),s=IDBKeyRange.lowerBound(i),o=ui(t).Kt({range:s},(t,r,i)=>{const[s,o,a]=t,c=rr(o);s===this.userId&&e.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),Tr.waitFor(r).next(()=>this.Zt(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1,i=cr.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Qe(P);return ui(t).Kt({range:s},(t,e,i)=>{const[s,a,c]=t,u=rr(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.Zt(t,o))}Zt(t,e){const n=[],r=[];return e.forEach(e=>{r.push(ci(t).get(e).next(t=>{if(null===t)throw v();b(t.userId===this.userId),n.push(Kr(this.N,t))}))}),Tr.waitFor(r).next(()=>n)}removeMutationBatch(t,e){return ii(t.Qt,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.te(e.batchId)}),Tr.forEach(n,e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))}te(t){delete this.Jt[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return Tr.resolve();const n=IDBKeyRange.lowerBound(cr.prefixForUser(this.userId)),r=[];return ui(t).Kt({range:n},(t,e,n)=>{if(t[0]===this.userId){const e=rr(t[1]);r.push(e)}else n.done()}).next(()=>{b(0===r.length)})})}containsKey(t,e){return ai(t,this.userId,e)}ee(t){return li(t).get(this.userId).next(t=>t||new or(this.userId,-1,""))}}function ai(t,e,n){const r=cr.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ui(t).Kt({range:s,qt:!0},(t,n,r)=>{const[s,a,c]=t;s===e&&a===i&&(o=!0),r.done()}).next(()=>o)}function ci(t){return Pr(t,ar.store)}function ui(t){return Pr(t,cr.store)}function li(t){return Pr(t,or.store)}
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
 */class hi{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new hi(0)}static ie(){return new hi(-1)}}
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
 */class di{constructor(t,e){this.referenceDelegate=t,this.N=e}allocateTargetId(t){return this.re(t).next(e=>{const n=new hi(e.highestTargetId);return e.highestTargetId=n.next(),this.oe(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.re(t).next(t=>$.fromTimestamp(new M(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.re(t).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.re(t).next(r=>(r.highestListenSequenceNumber=e,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),e>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e),this.oe(t,r)))}addTargetData(t,e){return this.ce(t,e).next(()=>this.re(t).next(n=>(n.targetCount+=1,this.ae(e,n),this.oe(t,n))))}updateTargetData(t,e){return this.ce(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>fi(t).delete(e.targetId)).next(()=>this.re(t)).next(e=>(b(e.targetCount>0),e.targetCount-=1,this.oe(t,e)))}removeTargets(t,e,n){let r=0;const i=[];return fi(t).Kt((s,o)=>{const a=Hr(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(t,a)))}).next(()=>Tr.waitFor(i)).next(()=>r)}forEachTarget(t,e){return fi(t).Kt((t,n)=>{const r=Hr(n);e(r)})}re(t){return pi(t).get(mr.key).next(t=>(b(null!==t),t))}oe(t,e){return pi(t).put(mr.key,e)}ce(t,e){return fi(t).put(Gr(this.N,e))}ae(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.re(t).next(t=>t.targetCount)}getTargetData(t,e){const n=St(e),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return fi(t).Kt({range:r,index:fr.queryTargetsIndexName},(t,n,r)=>{const s=Hr(n);Ot(e,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(t,e,n){const r=[],i=mi(t);return e.forEach(e=>{const s=tr(e.path);r.push(i.put(new pr(n,s))),r.push(this.referenceDelegate.addReference(t,n,e))}),Tr.waitFor(r)}removeMatchingKeys(t,e,n){const r=mi(t);return Tr.forEach(e,e=>{const i=tr(e.path);return Tr.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(t,n,e)])})}removeMatchingKeysForTargetId(t,e){const n=mi(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),r=mi(t);let i=sn();return r.Kt({range:n,qt:!0},(t,e,n)=>{const r=rr(t[1]),s=new st(r);i=i.add(s)}).next(()=>i)}containsKey(t,e){const n=tr(e.path),r=IDBKeyRange.bound([n],[j(n)],!1,!0);let i=0;return mi(t).Kt({index:pr.documentTargetsIndex,qt:!0,range:r},([t,e],n,r)=>{0!==t&&(i++,r.done())}).next(()=>i>0)}Tt(t,e){return fi(t).get(e).next(t=>t?Hr(t):null)}}function fi(t){return Pr(t,fr.store)}function pi(t){return Pr(t,mr.store)}function mi(t){return Pr(t,pr.store)}
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
 */async function gi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==_r)throw t;p("LocalStore","Unexpectedly lost primary lease")}
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
 */function yi([t,e],[n,r]){const i=P(t,n);return 0===i?P(e,r):i}class vi{constructor(t){this.ue=t,this.buffer=new Qe(yi),this.he=0}le(){return++this.he}fe(t){const e=[t,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();yi(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class bi{constructor(t,e){this.garbageCollector=t,this.asyncQueue=e,this.de=!1,this.we=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this._e(t)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return null!==this.we}_e(t){const e=this.de?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.we=null,this.de=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){kr(t)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await gi(t)}await this._e(t)})}}class wi{constructor(t,e){this.me=t,this.params=e}calculateTargetCount(t,e){return this.me.ge(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return Tr.resolve(N.T);const n=new vi(e);return this.me.forEachTarget(t,t=>n.fe(t.sequenceNumber)).next(()=>this.me.ye(t,t=>n.fe(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.me.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.me.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),Tr.resolve(ni)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ni):this.pe(t,e))}getCacheSize(t){return this.me.getCacheSize(t)}pe(t,e){let n,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,o=Date.now(),this.nthSequenceNumber(t,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(t,n,e))).next(e=>(i=e,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(u=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${t} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Tr.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t})))}}
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
 */class _i{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new wi(t,e)}(this,e)}ge(t){const e=this.Te(t);return this.db.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}Te(t){let e=0;return this.ye(t,t=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}ye(t,e){return this.Ee(t,(t,n)=>e(n))}addReference(t,e,n){return Ei(t,n)}removeReference(t,e,n){return Ei(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Ei(t,e)}Ie(t,e){return function(t,e){let n=!1;return li(t).jt(r=>ai(t,r,e).next(t=>(t&&(n=!0),Tr.resolve(!t)))).next(()=>n)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Ee(t,(s,o)=>{if(o<=e){const e=this.Ie(t,s).next(e=>{if(!e)return i++,n.getEntry(t,s).next(()=>(n.removeEntry(s),mi(t).delete([0,tr(s.path)])))});r.push(e)}}).next(()=>Tr.waitFor(r)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Ei(t,e)}Ee(t,e){const n=mi(t);let r,i=N.T;return n.Kt({index:pr.documentTargetsIndex},([t,n],{path:s,sequenceNumber:o})=>{0===t?(i!==N.T&&e(new st(rr(r)),i),i=o,r=s):i=N.T}).next(()=>{i!==N.T&&e(new st(rr(r)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Ei(t,e){return mi(t).put(function(t,e){return new pr(0,tr(t.path),e)}(e,t.currentSequenceNumber))}
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
 */class Ti{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){U(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return V(this.inner)}}
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
 */class Ii{constructor(){this.changes=new Ti(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:$.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:Et.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Tr.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
 */class Si{constructor(t,e){this.N=t,this.Ht=e}addEntry(t,e,n){return ki(t).put(Ci(e),n)}removeEntry(t,e){const n=ki(t),r=Ci(e);return n.delete(r)}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Ae(t,n)))}getEntry(t,e){return ki(t).get(Ci(e)).next(t=>this.Re(e,t))}be(t,e){return ki(t).get(Ci(e)).next(t=>({document:this.Re(e,t),size:si(t)}))}getEntries(t,e){let n=Je();return this.Pe(t,e,(t,e)=>{const r=this.Re(t,e);n=n.insert(t,r)}).next(()=>n)}ve(t,e){let n=Je(),r=new He(st.comparator);return this.Pe(t,e,(t,e)=>{const i=this.Re(t,e);n=n.insert(t,i),r=r.insert(t,si(e))}).next(()=>({documents:n,Ve:r}))}Pe(t,e,n){if(e.isEmpty())return Tr.resolve();const r=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),i=e.getIterator();let s=i.getNext();return ki(t).Kt({range:r},(t,e,r)=>{const o=st.fromSegments(t);for(;s&&st.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,e),s=i.hasNext()?i.getNext():null),s?r.Mt(s.path.toArray()):r.done()}).next(()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(t,e,n){let r=Je();const i=e.path.length+1,s={};if(n.isEqual($.min())){const t=e.path.toArray();s.range=IDBKeyRange.lowerBound(t)}else{const t=e.path.toArray(),r=Vr(n);s.range=IDBKeyRange.lowerBound([t,r],!0),s.index=hr.collectionReadTimeIndex}return ki(t).Kt(s,(t,n,s)=>{if(t.length!==i)return;const o=Fr(this.N,n);e.path.isPrefixOf(o.key.path)?se(e,o)&&(r=r.insert(o.key,o)):s.done()}).next(()=>r)}newChangeBuffer(t){return new Ai(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(t=>t.byteSize)}getMetadata(t){return Oi(t).get(dr.key).next(t=>(b(!!t),t))}Ae(t,e){return Oi(t).put(dr.key,e)}Re(t,e){if(e){const t=Fr(this.N,e);if(!t.isNoDocument()||!t.version.isEqual($.min()))return t}return Et.newInvalidDocument(t)}}class Ai extends Ii{constructor(t,e){super(),this.Se=t,this.trackRemovals=e,this.De=new Ti(t=>t.toString(),(t,e)=>t.isEqual(e))}applyChanges(t){const e=[];let n=0,r=new Qe((t,e)=>P(t.canonicalString(),e.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.De.get(i);if(s.document.isValidDocument()){const a=Ur(this.Se.N,s.document,this.getReadTime(i));r=r.add(i.path.popLast());const c=si(a);n+=c-o,e.push(this.Se.addEntry(t,i,a))}else if(n-=o,this.trackRemovals){const n=Ur(this.Se.N,Et.newNoDocument(i,$.min()),this.getReadTime(i));e.push(this.Se.addEntry(t,i,n))}else e.push(this.Se.removeEntry(t,i))}),r.forEach(n=>{e.push(this.Se.Ht.addToCollectionParentIndex(t,n))}),e.push(this.Se.updateMetadata(t,n)),Tr.waitFor(e)}getFromCache(t,e){return this.Se.be(t,e).next(t=>(this.De.set(e,t.size),t.document))}getAllFromCache(t,e){return this.Se.ve(t,e).next(({documents:t,Ve:e})=>(e.forEach((t,e)=>{this.De.set(t,e)}),t))}}function Oi(t){return Pr(t,dr.store)}function ki(t){return Pr(t,hr.store)}function Ci(t){return t.path.toArray()}
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
 */class xi{constructor(t){this.N=t}Ct(t,e,n,r){b(n<r&&n>=0&&r<=11);const i=new Ir("createOrUpgrade",e);n<1&&r>=1&&(function(t){t.createObjectStore(sr.store)}(t),function(t){t.createObjectStore(or.store,{keyPath:or.keyPath}),t.createObjectStore(ar.store,{keyPath:ar.keyPath,autoIncrement:!0}).createIndex(ar.userMutationsIndex,ar.userMutationsKeyPath,{unique:!0}),t.createObjectStore(cr.store)}(t),Ni(t),function(t){t.createObjectStore(hr.store)}(t));let s=Tr.resolve();return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore(pr.store),t.deleteObjectStore(fr.store),t.deleteObjectStore(mr.store)}(t),Ni(t)),s=s.next(()=>function(t){const e=t.store(mr.store),n=new mr(0,0,$.min().toTimestamp(),0);return e.put(mr.key,n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(t,e){return e.store(ar.store).Lt().next(n=>{t.deleteObjectStore(ar.store),t.createObjectStore(ar.store,{keyPath:ar.keyPath,autoIncrement:!0}).createIndex(ar.userMutationsIndex,ar.userMutationsKeyPath,{unique:!0});const r=e.store(ar.store),i=n.map(t=>r.put(t));return Tr.waitFor(i)})}(t,i))),s=s.next(()=>{!function(t){t.createObjectStore(yr.store,{keyPath:yr.keyPath})}(t)})),n<5&&r>=5&&(s=s.next(()=>this.Ce(i))),n<6&&r>=6&&(s=s.next(()=>(function(t){t.createObjectStore(dr.store)}(t),this.Ne(i)))),n<7&&r>=7&&(s=s.next(()=>this.xe(i))),n<8&&r>=8&&(s=s.next(()=>this.ke(t,i))),n<9&&r>=9&&(s=s.next(()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){const e=t.objectStore(hr.store);e.createIndex(hr.readTimeIndex,hr.readTimeIndexPath,{unique:!1}),e.createIndex(hr.collectionReadTimeIndex,hr.collectionReadTimeIndexPath,{unique:!1})}(e)})),n<10&&r>=10&&(s=s.next(()=>this.$e(i))),n<11&&r>=11&&(s=s.next(()=>{!function(t){t.createObjectStore(vr.store,{keyPath:vr.keyPath})}(t),function(t){t.createObjectStore(br.store,{keyPath:br.keyPath})}
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
 */(t)})),s}Ne(t){let e=0;return t.store(hr.store).Kt((t,n)=>{e+=si(n)}).next(()=>{const n=new dr(e);return t.store(dr.store).put(dr.key,n)})}Ce(t){const e=t.store(or.store),n=t.store(ar.store);return e.Lt().next(e=>Tr.forEach(e,e=>{const r=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.Lt(ar.userMutationsIndex,r).next(n=>Tr.forEach(n,n=>{b(n.userId===e.userId);const r=Kr(this.N,n);return ii(t,e.userId,r).next(()=>{})}))}))}xe(t){const e=t.store(pr.store),n=t.store(hr.store);return t.store(mr.store).get(mr.key).next(t=>{const r=[];return n.Kt((n,i)=>{const s=new B(n),o=function(t){return[0,tr(t)]}(s);r.push(e.get(o).next(n=>n?Tr.resolve():(n=>e.put(new pr(0,tr(n),t.highestListenSequenceNumber)))(s)))}).next(()=>Tr.waitFor(r))})}ke(t,e){t.createObjectStore(gr.store,{keyPath:gr.keyPath});const n=e.store(gr.store),r=new Zr,i=t=>{if(r.add(t)){const e=t.lastSegment(),r=t.popLast();return n.put({collectionId:e,parent:tr(r)})}};return e.store(hr.store).Kt({qt:!0},(t,e)=>{const n=new B(t);return i(n.popLast())}).next(()=>e.store(cr.store).Kt({qt:!0},([t,e,n],r)=>{const s=rr(e);return i(s.popLast())}))}$e(t){const e=t.store(fr.store);return e.Kt((t,n)=>{const r=Hr(n),i=Gr(this.N,r);return e.put(i)})}}function Ni(t){t.createObjectStore(pr.store,{keyPath:pr.keyPath}).createIndex(pr.documentTargetsIndex,pr.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(fr.store,{keyPath:fr.keyPath}).createIndex(fr.queryTargetsIndexName,fr.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(mr.store)}const Di="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ri{constructor(t,e,n,r,i,s,o,a,c,u){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Oe=i,this.window=s,this.document=o,this.Fe=c,this.Me=u,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=t=>Promise.resolve(),!Ri.bt())throw new T(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new _i(this,r),this.We=e+"main",this.N=new $r(a),this.Ge=new Sr(this.We,11,new xi(this.N)),this.ze=new di(this.referenceDelegate,this.N),this.Ht=new ti,this.He=function(t,e){return new Si(t,e)}(this.N,this.Ht),this.Je=new Qr,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,Di);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.ze.getHighestSequenceNumber(t))}).then(t=>{this.Le=new N(t,this.Fe)}).then(()=>{this.Be=!0}).catch(t=>(this.Ge&&this.Ge.close(),Promise.reject(t)))}nn(t){return this.Qe=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ge.xt(async e=>{null===e.newVersion&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Li(t).put(new yr(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(t).next(t=>{t||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(t)).next(e=>this.isPrimary&&!e?this.on(t).next(()=>!1):!!e&&this.cn(t).next(()=>!0))).catch(t=>{if(kr(t))return p("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Oe.enqueueRetryable(()=>this.Qe(t)),this.isPrimary=t})}sn(t){return Pi(t).get(sr.key).next(t=>Tr.resolve(this.an(t)))}un(t){return Li(t).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const e=Pr(t,yr.store);return e.Lt().next(t=>{const n=this.fn(t,18e5),r=t.filter(t=>-1===n.indexOf(t));return Tr.forEach(r,t=>e.delete(t.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ye)for(const e of t)this.Ye.removeItem(this.dn(e.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}an(t){return!!t&&t.ownerId===this.clientId}rn(t){return this.Me?Tr.resolve(!0):Pi(t).get(sr.key).next(e=>{if(null!==e&&this.ln(e.leaseTimestampMs,5e3)&&!this.wn(e.ownerId)){if(this.an(e)&&this.networkEnabled)return!0;if(!this.an(e)){if(!e.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,Di);return!1}}return!(!this.networkEnabled||!this.inForeground)||Li(t).Lt().next(t=>void 0===this.fn(t,5e3).find(t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,r=this.networkEnabled===t.networkEnabled;if(e||n&&r)return!0}return!1}))}).next(t=>(this.isPrimary!==t&&p("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[sr.store,yr.store],t=>{const e=new Rr(t,N.T);return this.on(e).next(()=>this.un(e))}),this.Ge.close(),this.yn()}fn(t,e){return t.filter(t=>this.ln(t.updateTimeMs,e)&&!this.wn(t.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",t=>Li(t).Lt().next(t=>this.fn(t,18e5).map(t=>t.clientId)))}get started(){return this.Be}getMutationQueue(t){return oi.Yt(t,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(t,e,n){p("IndexedDbPersistence","Starting transaction:",t);const r="readonly"===e?"readonly":"readwrite";let i;return this.Ge.runTransaction(t,r,wr,r=>(i=new Rr(r,this.Le?this.Le.next():N.T),"readwrite-primary"===e?this.sn(i).next(t=>!!t||this.rn(i)).next(e=>{if(!e)throw m(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new T(E.FAILED_PRECONDITION,_r);return n(i)}).next(t=>this.cn(i).next(()=>t)):this.Tn(i).next(()=>n(i)))).then(t=>(i.raiseOnCommittedEvent(),t))}Tn(t){return Pi(t).get(sr.key).next(t=>{if(null!==t&&this.ln(t.leaseTimestampMs,5e3)&&!this.wn(t.ownerId)&&!this.an(t)&&!(this.Me||this.allowTabSynchronization&&t.allowTabSynchronization))throw new T(E.FAILED_PRECONDITION,Di)})}cn(t){const e=new sr(this.clientId,this.allowTabSynchronization,Date.now());return Pi(t).put(sr.key,e)}static bt(){return Sr.bt()}on(t){const e=Pi(t);return e.get(sr.key).next(t=>this.an(t)?(p("IndexedDbPersistence","Releasing primary lease."),e.delete(sr.key)):Tr.resolve())}ln(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(m(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Ze(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground="visible"===this.document.visibilityState)}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.Ue=()=>{this._n(),Object(o["r"])()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(t){var e;try{const n=null!==(null===(e=this.Ye)||void 0===e?void 0:e.getItem(this.dn(t)));return p("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return m("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(t){m("Failed to set zombie client id.",t)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(t){}}dn(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Pi(t){return Pr(t,sr.store)}function Li(t){return Pr(t,yr.store)}function ji(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
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
 */}class Mi{constructor(t,e){this.progress=t,this.En=e}}
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
 */class $i{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}Pn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return st.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):Jt(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new st(e)).next(t=>{let e=tn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const r=e.collectionGroup;let i=tn();return this.Ht.getCollectionParents(t,r).next(s=>Tr.forEach(s,s=>{const o=function(t,e){return new Kt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Dn(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Cn(t,i,r).next(t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=Et.newInvalidDocument(n),r=r.insert(n,i)),xe(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{se(e,n)||(r=r.remove(t))}),r))}Cn(t,e,n){let r=sn();for(const s of e)for(const t of s.mutations)t instanceof Le&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.He.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
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
 */class Fi{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=sn(),r=sn();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Fi(t,e.fromCache,n,r)}}
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
 */class Ui{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual($.min())?this.Fn(t,e):this.On.Pn(t,r).next(i=>{const o=this.Mn(e,i);return(Wt(e)||Qt(e))&&this.Ln(e.limitType,o,r,n)?this.Fn(t,e):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),ie(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new Qe(oe(t));return e.forEach((e,r)=>{se(t,r)&&(n=n.add(r))}),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",ie(e)),this.On.getDocumentsMatchingQuery(t,e,$.min())}}
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
 */class Vi{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new He(P),this.qn=new Ti(t=>St(t),Ot),this.Kn=$.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new $i(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function qi(t,e,n,r){return new Vi(t,e,n,r)}async function Bi(t,e){const n=_(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.In.getAllMutationBatches(t).next(o=>(s=o,r=n.persistence.getMutationQueue(e),i=new $i(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=sn();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.Pn(t,o).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function zi(t,e){const n=_(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Tr.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);b(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),o.next(()=>t.In.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}function Ki(t){const e=_(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function Hi(t,e){const n=_(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];e.targetChanges.forEach((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,s).next(()=>n.ze.addMatchingKeys(t,e.addedDocuments,s)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,u),function(t,e,n){return b(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.ze.updateTargetData(t,u))}});let a=Je();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Gi(t,s,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual($.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next(e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return Tr.waitFor(o).next(()=>s.apply(t)).next(()=>n.Qn.vn(t,a)).next(()=>a)}).then(t=>(n.Un=i,t))}function Gi(t,e,n,r,i){let s=sn();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=Je();return n.forEach((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual($.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Wi(t,e){const n=_(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e)))}function Qi(t,e){const n=_(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.ze.getTargetData(t,e).next(i=>i?(r=i,Tr.resolve(r)):n.ze.allocateTargetId(t).next(i=>(r=new Mr(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t})}async function Xi(t,e,n){const r=_(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!kr(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Yi(t,e,n){const r=_(t);let i=$.min(),s=sn();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=_(t),i=r.qn.get(n);return void 0!==i?Tr.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,te(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:$.min(),n?s:sn())).next(t=>({documents:t,Gn:s})))}function Ji(t,e){const n=_(t),r=_(n.ze),i=n.Un.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",t=>r.Tt(t,e).next(t=>t?t.target:null))}function Zi(t){const e=_(t);return e.persistence.runTransaction("Get new document changes","readonly",t=>function(t,e,n){const r=_(t);let i=Je(),s=Vr(n);const o=ki(e),a=IDBKeyRange.lowerBound(s,!0);return o.Kt({index:hr.readTimeIndex,range:a},(t,e)=>{const n=Fr(r.N,e);i=i.insert(n.key,n),s=e.readTime}).next(()=>({En:i,readTime:qr(s)}))}(e.jn,t,e.Kn)).then(({En:t,readTime:n})=>(e.Kn=n,t))}async function ts(t){const e=_(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",t=>function(t){const e=ki(t);let n=$.min();return e.Kt({index:hr.readTimeIndex,reverse:!0},(t,e,r)=>{e.readTime&&(n=qr(e.readTime)),r.done()}).next(()=>n)}(t)).then(t=>{e.Kn=t})}async function es(t,e,n,r){const i=_(t);let s=sn(),o=Je(),a=nn();for(const l of n){const t=e.zn(l.metadata.name);l.document&&(s=s.add(t)),o=o.insert(t,e.Hn(l)),a=a.insert(t,e.Jn(l.metadata.readTime))}const c=i.jn.newChangeBuffer({trackRemovals:!0}),u=await Qi(i,function(t){return te(Gt(B.fromString("__bundle__/docs/"+t)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",t=>Gi(t,c,o,$.min(),a).next(e=>(c.apply(t),e)).next(e=>i.ze.removeMatchingKeysForTargetId(t,u.targetId).next(()=>i.ze.addMatchingKeys(t,s,u.targetId)).next(()=>i.Qn.vn(t,e)).next(()=>e)))}async function ns(t,e,n=sn()){const r=await Qi(t,te(Wr(e.bundledQuery))),i=_(t);return i.persistence.runTransaction("Save named query","readwrite",t=>{const s=Tn(e.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Je.saveNamedQuery(t,e);const o=r.withResumeToken(W.EMPTY_BYTE_STRING,s);return i.Un=i.Un.insert(o.targetId,o),i.ze.updateTargetData(t,o).next(()=>i.ze.removeMatchingKeysForTargetId(t,r.targetId)).next(()=>i.ze.addMatchingKeys(t,n,r.targetId)).next(()=>i.Je.saveNamedQuery(t,e))})}
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
 */class rs{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return Tr.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:Tn(n.createTime)}),Tr.resolve()}getNamedQuery(t,e){return Tr.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:Wr(t.bundledQuery),readTime:Tn(t.readTime)}}(e)),Tr.resolve()}}
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
 */class is{constructor(){this.Zn=new Qe(ss.ts),this.es=new Qe(ss.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new ss(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new ss(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new st(new B([])),n=new ss(e,t),r=new ss(e,t+1),i=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),i.push(t.key)}),i}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new st(new B([])),n=new ss(e,t),r=new ss(e,t+1);let i=sn();return this.es.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new ss(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ss{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return st.comparator(t.key,e.key)||P(t.ls,e.ls)}static ns(t,e){return P(t.ls,e.ls)||st.comparator(t.key,e.key)}}
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
 */class os{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Qe(ss.ts)}checkEmpty(t){return Tr.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new Lr(i,e,n,r);this.In.push(s);for(const o of r)this.ds=this.ds.add(new ss(o.key,i)),this.Ht.addToCollectionParentIndex(t,o.key.path.popLast());return Tr.resolve(s)}lookupMutationBatch(t,e){return Tr.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return Tr.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return Tr.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return Tr.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ss(e,0),r=new ss(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],t=>{const e=this.ws(t.ls);i.push(e)}),Tr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Qe(P);return e.forEach(t=>{const e=new ss(t,0),r=new ss(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),Tr.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;st.isDocumentKey(i)||(i=i.child(""));const s=new ss(new st(i),0);let o=new Qe(P);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)},s),Tr.resolve(this.gs(o))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){b(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return Tr.forEach(e.mutations,r=>{const i=new ss(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new ss(e,0),r=this.ds.firstAfterOrEqual(n);return Tr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,Tr.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
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
 */class as{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new He(st.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Tr.resolve(n?n.document.clone():Et.newInvalidDocument(e))}getEntries(t,e){let n=Je();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():Et.newInvalidDocument(t))}),Tr.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Je();const i=new st(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||se(e,i)&&(r=r.insert(i.key,i.clone()))}return Tr.resolve(r)}Ts(t,e){return Tr.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new cs(this)}getSize(t){return Tr.resolve(this.size)}}class cs extends Ii{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),Tr.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
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
 */class us{constructor(t){this.persistence=t,this.Es=new Ti(t=>St(t),Ot),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Is=0,this.As=new is,this.targetCount=0,this.Rs=hi.se()}forEachTarget(t,e){return this.Es.forEach((t,n)=>e(n)),Tr.resolve()}getLastRemoteSnapshotVersion(t){return Tr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Tr.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Tr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),Tr.resolve()}ce(t){this.Es.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new hi(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,Tr.resolve()}updateTargetData(t,e){return this.ce(e),Tr.resolve()}removeTargetData(t,e){return this.Es.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,Tr.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Es.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Es.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Tr.waitFor(i).next(()=>r)}getTargetCount(t){return Tr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Es.get(e)||null;return Tr.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Tr.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),Tr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),Tr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Tr.resolve(n)}containsKey(t,e){return Tr.resolve(this.As.containsKey(e))}}
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
 */class ls{constructor(t,e){this.bs={},this.Le=new N(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new us(this),this.Ht=new Jr,this.He=function(t,e){return new as(t,e)}(this.Ht,t=>this.referenceDelegate.Ps(t)),this.N=new $r(e),this.Je=new rs(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new os(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const r=new hs(this.Le.next());return this.referenceDelegate.vs(),n(r).next(t=>this.referenceDelegate.Vs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ss(t,e){return Tr.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class hs extends Er{constructor(t){super(),this.currentSequenceNumber=t}}class ds{constructor(t){this.persistence=t,this.Ds=new is,this.Cs=null}static Ns(t){return new ds(t)}get xs(){if(this.Cs)return this.Cs;throw v()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),Tr.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),Tr.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Tr.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Tr.forEach(this.xs,n=>{const r=st.fromPath(n);return this.ks(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}Ps(t){return 0}ks(t,e){return Tr.or([()=>Tr.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
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
 */function fs(t,e){return`firestore_clients_${t}_${e}`}function ps(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+="_"+e.uid),r}function ms(t,e){return`firestore_targets_${t}_${e}`}class gs{constructor(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}static $s(t,e,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new T(r.error.code,r.error.message))),s?new gs(t,e,r.state,i):(m("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class ys{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static $s(t,e){const n=JSON.parse(e);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new T(n.error.code,n.error.message))),i?new ys(t,n.state,r):(m("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class vs{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static $s(t,e){const n=JSON.parse(e);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=an();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=it(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new vs(t,i):(m("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class bs{constructor(t,e){this.clientId=t,this.onlineState=e}static $s(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new bs(e.clientId,e.onlineState):(m("SharedClientState","Failed to parse online state: "+t),null)}}class ws{constructor(){this.activeTargetIds=an()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _s{constructor(t,e,n,r,i){this.window=t,this.Oe=e,this.persistenceKey=n,this.Ls=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new He(P),this.started=!1,this.Ks=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.js=fs(this.persistenceKey,this.Ls),this.Qs=function(t){return"firestore_sequence_number_"+t}
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
 */(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new ws),this.Ws=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Hs=function(t){return"firestore_online_state_"+t}(this.persistenceKey),this.Js=function(t){return"firestore_bundle_loaded_"+t}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.pn();for(const n of t){if(n===this.Ls)continue;const t=this.getItem(fs(this.persistenceKey,n));if(t){const e=vs.$s(n,t);e&&(this.qs=this.qs.insert(e.clientId,e))}}this.Ys();const e=this.storage.getItem(this.Hs);if(e){const t=this.Xs(e);t&&this.Zs(t)}for(const n of this.Ks)this.Us(n);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Qs,JSON.stringify(t))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(t){let e=!1;return this.qs.forEach((n,r)=>{r.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.ei(t,"pending")}updateMutationState(t,e,n){this.ei(t,e,n),this.ni(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(ms(this.persistenceKey,t));if(n){const r=ys.$s(t,n);r&&(e=r.state)}}return this.si.Fs(t),this.Ys(),e}removeLocalQueryTarget(t){this.si.Ms(t),this.Ys()}isLocalQueryTarget(t){return this.si.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(ms(this.persistenceKey,t))}updateQueryState(t,e,n){this.ii(t,e,n)}handleUserChange(t,e,n){e.forEach(t=>{this.ni(t)}),this.currentUser=t,n.forEach(t=>{this.addPendingMutation(t)})}setOnlineState(t){this.ri(t)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return p("SharedClientState","READ",t,e),e}setItem(t,e){p("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){p("SharedClientState","REMOVE",t),this.storage.removeItem(t)}Us(t){const e=t;if(e.storageArea===this.storage){if(p("SharedClientState","EVENT",e.key,e.newValue),e.key===this.js)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(null!==e.key)if(this.Ws.test(e.key)){if(null==e.newValue){const t=this.ci(e.key);return this.ai(t,null)}{const t=this.ui(e.key,e.newValue);if(t)return this.ai(t.clientId,t)}}else if(this.Gs.test(e.key)){if(null!==e.newValue){const t=this.hi(e.key,e.newValue);if(t)return this.li(t)}}else if(this.zs.test(e.key)){if(null!==e.newValue){const t=this.fi(e.key,e.newValue);if(t)return this.di(t)}}else if(e.key===this.Hs){if(null!==e.newValue){const t=this.Xs(e.newValue);if(t)return this.Zs(t)}}else if(e.key===this.Qs){const t=function(t){let e=N.T;if(null!=t)try{const n=JSON.parse(t);b("number"==typeof n),e=n}catch(t){m("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==N.T&&this.sequenceNumberHandler(t)}else if(e.key===this.Js)return this.syncEngine.wi()}else this.Ks.push(e)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(t,e,n){const r=new gs(this.currentUser,t,e,n),i=ps(this.persistenceKey,this.currentUser,t);this.setItem(i,r.Os())}ni(t){const e=ps(this.persistenceKey,this.currentUser,t);this.removeItem(e)}ri(t){const e={clientId:this.Ls,onlineState:t};this.storage.setItem(this.Hs,JSON.stringify(e))}ii(t,e,n){const r=ms(this.persistenceKey,t),i=new ys(t,e,n);this.setItem(r,i.Os())}oi(){this.setItem(this.Js,"value-not-used")}ci(t){const e=this.Ws.exec(t);return e?e[1]:null}ui(t,e){const n=this.ci(t);return vs.$s(n,e)}hi(t,e){const n=this.Gs.exec(t),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return gs.$s(new u(i),r,e)}fi(t,e){const n=this.zs.exec(t),r=Number(n[1]);return ys.$s(r,e)}Xs(t){return bs.$s(t)}async li(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine._i(t.batchId,t.state,t.error);p("SharedClientState","Ignoring mutation for non-active user "+t.user.uid)}di(t){return this.syncEngine.mi(t.targetId,t.state,t.error)}ai(t,e){const n=e?this.qs.insert(t,e):this.qs.remove(t),r=this.ti(this.qs),i=this.ti(n),s=[],o=[];return i.forEach(t=>{r.has(t)||s.push(t)}),r.forEach(t=>{i.has(t)||o.push(t)}),this.syncEngine.gi(s,o).then(()=>{this.qs=n})}Zs(t){this.qs.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}ti(t){let e=an();return t.forEach((t,n)=>{e=e.unionWith(n.activeTargetIds)}),e}}class Es{constructor(){this.yi=new ws,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new ws,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
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
 */class Ts{Ti(t){}shutdown(){}}
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
 */class Is{constructor(){this.Ei=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ti(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ei),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ei),window.addEventListener("offline",this.Ai)}Ii(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const Ss={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class As{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
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
 */class Os extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);p("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(t,i,s,n).then(t=>(p("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=Ss[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),s(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(e)>=0?e:E.UNKNOWN}(t.status);s(new T(e,t.message))}else s(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new T(E.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),i=Object(a["i"])(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new a["d"]({})),this.Ui(s.initMessageHeaders,e),Object(o["p"])()||Object(o["q"])()||Object(o["m"])()||Object(o["n"])()||Object(o["s"])()||Object(o["l"])()||(s.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");p("Connection","Creating WebChannel: "+c,s);const u=r.createWebChannel(c,s);let l=!1,h=!1;const d=new As({vi:t=>{h?p("Connection","Not sending because WebChannel is closed:",t):(l||(p("Connection","Opening WebChannel transport."),u.open(),l=!0),p("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),f=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return f(u,a["f"].EventType.OPEN,()=>{h||p("Connection","WebChannel transport opened.")}),f(u,a["f"].EventType.CLOSE,()=>{h||(h=!0,p("Connection","WebChannel transport closed"),d.$i())}),f(u,a["f"].EventType.ERROR,t=>{h||(h=!0,g("Connection","WebChannel transport errored:",t),d.$i(new T(E.UNAVAILABLE,"The operation could not be completed")))}),f(u,a["f"].EventType.MESSAGE,t=>{var e;if(!h){const n=t.data[0];b(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){p("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=qe[t];if(void 0!==e)return Ke(e)}(t),n=i.message;void 0===e&&(e=E.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,d.$i(new T(e,n)),u.close()}else p("Connection","WebChannel received:",n),d.Oi(n)}}),f(i,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
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
 */function ks(){return"undefined"!=typeof window?window:null}function Cs(){return"undefined"!=typeof document?document:null}
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
 */function xs(t){return new bn(t,!0)}class Ns{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
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
 */class Ds{constructor(t,e,n,r,i,s,o){this.Oe=t,this.er=n,this.nr=r,this.sr=i,this.credentialsProvider=s,this.listener=o,this.state=0,this.ir=0,this.rr=null,this.cr=null,this.stream=null,this.ar=new Ns(t,e)}ur(){return 1===this.state||5===this.state||this.hr()}hr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.lr()}async stop(){this.ur()&&await this.close(0)}dr(){this.state=0,this.ar.reset()}wr(){this.hr()&&null===this.rr&&(this.rr=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this._r()))}mr(t){this.gr(),this.stream.send(t)}async _r(){if(this.hr())return this.close(0)}gr(){this.rr&&(this.rr.cancel(),this.rr=null)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.gr(),this.yr(),this.ar.cancel(),this.ir++,4!==t?this.ar.reset():e&&e.code===E.RESOURCE_EXHAUSTED?(m(e.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.ar.Yi()):e&&e.code===E.UNAUTHENTICATED&&3!==this.state&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.pr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}pr(){}auth(){this.state=1;const t=this.Tr(this.ir),e=this.ir;this.credentialsProvider.getToken().then(t=>{this.ir===e&&this.Er(t)},e=>{t(()=>{const t=new T(E.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ir(t)})})}Er(t){const e=this.Tr(this.ir);this.stream=this.Ar(t),this.stream.Si(()=>{e(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.nr,1e4,()=>(this.hr()&&(this.state=3),Promise.resolve())),this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.Ir(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}lr(){this.state=5,this.ar.Xi(async()=>{this.state=0,this.start()})}Ir(t){return p("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Tr(t){return e=>{this.Oe.enqueueAndForget(()=>this.ir===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rs extends Ds{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i),this.N=r}Ar(t){return this.sr.ji("Listen",t)}onMessage(t){this.ar.reset();const e=Ln(this.N,t),n=function(t){if(!("targetChange"in t))return $.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?$.min():e.readTime?Tn(e.readTime):$.min()}(t);return this.listener.Rr(e,n)}br(t){const e={};e.database=xn(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=kt(r)?{documents:Fn(t,r)}:{query:Un(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=_n(t,e.resumeToken):e.snapshotVersion.compareTo($.min())>0&&(n.readTime=wn(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=qn(this.N,t);n&&(e.labels=n),this.mr(e)}Pr(t){const e={};e.database=xn(this.N),e.removeTarget=t,this.mr(e)}}class Ps extends Ds{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i),this.N=r,this.vr=!1}get Vr(){return this.vr}start(){this.vr=!1,this.lastStreamToken=void 0,super.start()}pr(){this.vr&&this.Sr([])}Ar(t){return this.sr.ji("Write",t)}onMessage(t){if(b(!!t.streamToken),this.lastStreamToken=t.streamToken,this.vr){this.ar.reset();const e=$n(t.writeResults,t.commitTime),n=Tn(t.commitTime);return this.listener.Dr(n,e)}return b(!t.writeResults||0===t.writeResults.length),this.vr=!0,this.listener.Cr()}Nr(){const t={};t.database=xn(this.N),this.mr(t)}Sr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>jn(this.N,t))};this.mr(e)}}
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
 */class Ls extends class{}{constructor(t,e,n){super(),this.credentials=t,this.sr=e,this.N=n,this.kr=!1}$r(){if(this.kr)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.$r(),this.credentials.getToken().then(r=>this.sr.Li(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new T(E.UNKNOWN,t.toString())})}Ki(t,e,n){return this.$r(),this.credentials.getToken().then(r=>this.sr.Ki(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new T(E.UNKNOWN,t.toString())})}terminate(){this.kr=!0}}class js{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Fr=null,this.Mr=!0}Lr(){0===this.Or&&(this.Br("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.Ur("Backend didn't respond within 10 seconds."),this.Br("Offline"),Promise.resolve())))}qr(t){"Online"===this.state?this.Br("Unknown"):(this.Or++,this.Or>=1&&(this.Kr(),this.Ur("Connection failed 1 times. Most recent error: "+t.toString()),this.Br("Offline")))}set(t){this.Kr(),this.Or=0,"Online"===t&&(this.Mr=!1),this.Br(t)}Br(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Ur(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Mr?(m(e),this.Mr=!1):p("OnlineStateTracker",e)}Kr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
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
 */class Ms{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.jr=[],this.Qr=new Map,this.Wr=new Set,this.Gr=[],this.zr=i,this.zr.Ti(t=>{n.enqueueAndForget(async()=>{Hs(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=_(t);e.Wr.add(4),await Fs(e),e.Hr.set("Unknown"),e.Wr.delete(4),await $s(e)}(this))})}),this.Hr=new js(n,r)}}async function $s(t){if(Hs(t))for(const e of t.Gr)await e(!0)}async function Fs(t){for(const e of t.Gr)await e(!1)}function Us(t,e){const n=_(t);n.Qr.has(e.targetId)||(n.Qr.set(e.targetId,e),Ks(n)?zs(n):uo(n).hr()&&qs(n,e))}function Vs(t,e){const n=_(t),r=uo(n);n.Qr.delete(e),r.hr()&&Bs(n,e),0===n.Qr.size&&(r.hr()?r.wr():Hs(n)&&n.Hr.set("Unknown"))}function qs(t,e){t.Jr.Y(e.targetId),uo(t).br(e)}function Bs(t,e){t.Jr.Y(e),uo(t).Pr(e)}function zs(t){t.Jr=new pn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Tt:e=>t.Qr.get(e)||null}),uo(t).start(),t.Hr.Lr()}function Ks(t){return Hs(t)&&!uo(t).ur()&&t.Qr.size>0}function Hs(t){return 0===_(t).Wr.size}function Gs(t){t.Jr=void 0}async function Ws(t){t.Qr.forEach((e,n)=>{qs(t,e)})}async function Qs(t,e){Gs(t),Ks(t)?(t.Hr.qr(e),zs(t)):t.Hr.set("Unknown")}async function Xs(t,e,n){if(t.Hr.set("Online"),e instanceof dn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Qr.delete(r),t.Jr.removeTarget(r))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ys(t,n)}else if(e instanceof ln?t.Jr.rt(e):e instanceof hn?t.Jr.ft(e):t.Jr.at(e),!n.isEqual($.min()))try{const e=await Ki(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Jr._t(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Qr.get(r);i&&t.Qr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Qr.get(e);if(!n)return;t.Qr.set(e,n.withResumeToken(W.EMPTY_BYTE_STRING,n.snapshotVersion)),Bs(t,e);const r=new Mr(n.target,e,1,n.sequenceNumber);qs(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await Ys(t,e)}}async function Ys(t,e,n){if(!kr(e))throw e;t.Wr.add(1),await Fs(t),t.Hr.set("Offline"),n||(n=()=>Ki(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t.Wr.delete(1),await $s(t)})}function Js(t,e){return e().catch(n=>Ys(t,n,e))}async function Zs(t){const e=_(t),n=lo(e);let r=e.jr.length>0?e.jr[e.jr.length-1].batchId:-1;for(;to(e);)try{const t=await Wi(e.localStore,r);if(null===t){0===e.jr.length&&n.wr();break}r=t.batchId,eo(e,t)}catch(t){await Ys(e,t)}no(e)&&ro(e)}function to(t){return Hs(t)&&t.jr.length<10}function eo(t,e){t.jr.push(e);const n=lo(t);n.hr()&&n.Vr&&n.Sr(e.mutations)}function no(t){return Hs(t)&&!lo(t).ur()&&t.jr.length>0}function ro(t){lo(t).start()}async function io(t){lo(t).Nr()}async function so(t){const e=lo(t);for(const n of t.jr)e.Sr(n.mutations)}async function oo(t,e,n){const r=t.jr.shift(),i=jr.from(r,e,n);await Js(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Zs(t)}async function ao(t,e){e&&lo(t).Vr&&await async function(t,e){if(n=e.code,ze(n)&&n!==E.ABORTED){const n=t.jr.shift();lo(t).dr(),await Js(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Zs(t)}var n}(t,e),no(t)&&ro(t)}async function co(t,e){const n=_(t);e?(n.Wr.delete(2),await $s(n)):e||(n.Wr.add(2),await Fs(n),n.Hr.set("Unknown"))}function uo(t){return t.Yr||(t.Yr=function(t,e,n){const r=_(t);return r.$r(),new Rs(e,r.sr,r.credentials,r.N,n)
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
 */}(t.datastore,t.asyncQueue,{Si:Ws.bind(null,t),Ci:Qs.bind(null,t),Rr:Xs.bind(null,t)}),t.Gr.push(async e=>{e?(t.Yr.dr(),Ks(t)?zs(t):t.Hr.set("Unknown")):(await t.Yr.stop(),Gs(t))})),t.Yr}function lo(t){return t.Xr||(t.Xr=function(t,e,n){const r=_(t);return r.$r(),new Ps(e,r.sr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:io.bind(null,t),Ci:ao.bind(null,t),Cr:so.bind(null,t),Dr:oo.bind(null,t)}),t.Gr.push(async e=>{e?(t.Xr.dr(),await Zs(t)):(await t.Xr.stop(),t.jr.length>0&&(p("RemoteStore",`Stopping write stream with ${t.jr.length} pending writes`),t.jr=[]))})),t.Xr
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
 */}class ho{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new ho(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fo(t,e){if(m("AsyncQueue",`${e}: ${t}`),kr(t))return new T(E.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class po{constructor(t){this.comparator=t?(e,n)=>t(e,n)||st.comparator(e.key,n.key):(t,e)=>st.comparator(t.key,e.key),this.keyedMap=tn(),this.sortedSet=new He(this.comparator)}static emptySet(t){return new po(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof po))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new po;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class mo{constructor(){this.Zr=new He(st.comparator)}track(t){const e=t.doc.key,n=this.Zr.get(e);n?0!==t.type&&3===n.type?this.Zr=this.Zr.insert(e,t):3===t.type&&1!==n.type?this.Zr=this.Zr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Zr=this.Zr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Zr=this.Zr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Zr=this.Zr.remove(e):1===t.type&&2===n.type?this.Zr=this.Zr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Zr=this.Zr.insert(e,{type:2,doc:t.doc}):v():this.Zr=this.Zr.insert(e,t)}eo(){const t=[];return this.Zr.inorderTraversal((e,n)=>{t.push(n)}),t}}class go{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new go(t,e,po.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ne(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class yo{constructor(){this.no=void 0,this.listeners=[]}}class vo{constructor(){this.queries=new Ti(t=>re(t),ne),this.onlineState="Unknown",this.so=new Set}}async function bo(t,e){const n=_(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new yo),i)try{s.no=await n.onListen(r)}catch(t){const n=fo(t,`Initialization of query '${ie(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.io(n.onlineState),s.no&&e.ro(s.no)&&To(n)}async function wo(t,e){const n=_(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _o(t,e){const n=_(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.ro(i)&&(r=!0);e.no=i}}r&&To(n)}function Eo(t,e,n){const r=_(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function To(t){t.so.forEach(t=>{t.next()})}class Io{constructor(t,e,n){this.query=t,this.oo=e,this.co=!1,this.ao=null,this.onlineState="Unknown",this.options=n||{}}ro(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new go(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.uo(t)&&(this.oo.next(t),e=!0):this.ho(t,this.onlineState)&&(this.lo(t),e=!0),this.ao=t,e}onError(t){this.oo.error(t)}io(t){this.onlineState=t;let e=!1;return this.ao&&!this.co&&this.ho(this.ao,t)&&(this.lo(this.ao),e=!0),e}ho(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.fo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}uo(t){if(t.docChanges.length>0)return!0;const e=this.ao&&this.ao.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}lo(t){t=go.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.oo.next(t)}}
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
 */class So{constructor(t,e){this.payload=t,this.byteLength=e}wo(){return"metadata"in this.payload}}
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
 */class Ao{constructor(t){this.N=t}zn(t){return On(this.N,t)}Hn(t){return t.metadata.exists?Rn(this.N,t.document,!1):Et.newNoDocument(this.zn(t.metadata.name),this.Jn(t.metadata.readTime))}Jn(t){return Tn(t)}}class Oo{constructor(t,e,n){this._o=t,this.localStore=e,this.N=n,this.queries=[],this.documents=[],this.progress=ko(t)}mo(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;return t.payload.namedQuery?this.queries.push(t.payload.namedQuery):t.payload.documentMetadata?(this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e):t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e),e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}yo(t){const e=new Map,n=new Ao(this.N);for(const r of t)if(r.metadata.queries){const t=n.zn(r.metadata.name);for(const n of r.metadata.queries){const r=(e.get(n)||sn()).add(t);e.set(n,r)}}return e}async complete(){const t=await es(this.localStore,new Ao(this.N),this.documents,this._o.id),e=this.yo(this.documents);for(const n of this.queries)await ns(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",new Mi(Object.assign({},this.progress),t)}}function ko(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
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
 */class Co{constructor(t){this.key=t}}class xo{constructor(t){this.key=t}}class No{constructor(t,e){this.query=t,this.po=e,this.To=null,this.current=!1,this.Eo=sn(),this.mutatedKeys=sn(),this.Io=oe(t),this.Ao=new po(this.Io)}get Ro(){return this.po}bo(t,e){const n=e?e.Po:new mo,r=e?e.Ao:this.Ao;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Wt(this.query)&&r.size===this.query.limit?r.last():null,c=Qt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=se(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.vo(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Io(l,a)>0||c&&this.Io(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),Wt(this.query)||Qt(this.query))for(;s.size>this.query.limit;){const t=Wt(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ao:s,Po:n,Ln:o,mutatedKeys:i}}vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Ao;this.Ao=t.Ao,this.mutatedKeys=t.mutatedKeys;const i=t.Po.eo();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}
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
 */(t.type,e.type)||this.Io(t.doc,e.doc)),this.Vo(n);const s=e?this.So():[],o=0===this.Eo.size&&this.current?1:0,a=o!==this.To;return this.To=o,0!==i.length||a?{snapshot:new go(this.query,t.Ao,r,i,t.mutatedKeys,0===o,a,!1),Do:s}:{Do:s}}io(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ao:this.Ao,Po:new mo,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{Do:[]}}Co(t){return!this.po.has(t)&&!!this.Ao.has(t)&&!this.Ao.get(t).hasLocalMutations}Vo(t){t&&(t.addedDocuments.forEach(t=>this.po=this.po.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.po=this.po.delete(t)),this.current=t.current)}So(){if(!this.current)return[];const t=this.Eo;this.Eo=sn(),this.Ao.forEach(t=>{this.Co(t.key)&&(this.Eo=this.Eo.add(t.key))});const e=[];return t.forEach(t=>{this.Eo.has(t)||e.push(new xo(t))}),this.Eo.forEach(n=>{t.has(n)||e.push(new Co(n))}),e}No(t){this.po=t.Gn,this.Eo=sn();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return go.fromInitialDocuments(this.query,this.Ao,this.mutatedKeys,0===this.To)}}class Do{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ro{constructor(t){this.key=t,this.ko=!1}}class Po{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.$o={},this.Oo=new Ti(t=>re(t),ne),this.Fo=new Map,this.Mo=new Set,this.Lo=new He(st.comparator),this.Bo=new Map,this.Uo=new is,this.qo={},this.Ko=new Map,this.jo=hi.ie(),this.onlineState="Unknown",this.Qo=void 0}get isPrimaryClient(){return!0===this.Qo}}async function Lo(t,e){const n=la(t);let r,i;const s=n.Oo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const t=await Qi(n.localStore,te(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await jo(n,e,r,"current"===s),n.isPrimaryClient&&Us(n.remoteStore,t)}return i}async function jo(t,e,n,r){t.Wo=(e,n,r)=>async function(t,e,n,r){let i=e.view.bo(n);i.Ln&&(i=await Yi(t.localStore,e.query,!1).then(({documents:t})=>e.view.bo(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Qo(t,e.targetId,o.Do),o.snapshot}(t,e,n,r);const i=await Yi(t.localStore,e,!0),s=new No(e,i.Gn),o=s.bo(i.documents),a=un.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Qo(t,n,c.Do);const u=new Do(e,n,s);return t.Oo.set(e,u),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function Mo(t,e){const n=_(t),r=n.Oo.get(e),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter(t=>!ne(t,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Vs(n.remoteStore,r.targetId),Go(n,r.targetId)}).catch(gi)):(Go(n,r.targetId),await Xi(n.localStore,r.targetId,!0))}async function $o(t,e,n){const r=ha(t);try{const t=await function(t,e){const n=_(t),r=M.now(),i=e.reduce((t,e)=>t.add(e.key),sn());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Qn.Pn(t,i).next(i=>{s=i;const o=[];for(const t of e){const e=Ne(t,s.get(t.key));null!=e&&o.push(new Le(t.key,e,_t(e.value.mapValue),Ae.exists(!0)))}return n.In.addMutationBatch(t,r,o,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.qo[t.currentUser.toKey()];r||(r=new He(P)),r=r.insert(e,n),t.qo[t.currentUser.toKey()]=r}(r,t.batchId,n),await Jo(r,t.changes),await Zs(r.remoteStore)}catch(t){const e=fo(t,"Failed to persist write");n.reject(e)}}async function Fo(t,e){const n=_(t);try{const t=await Hi(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Bo.get(e);r&&(b(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.ko=!0:t.modifiedDocuments.size>0?b(r.ko):t.removedDocuments.size>0&&(b(r.ko),r.ko=!1))}),await Jo(n,t,e)}catch(t){await gi(t)}}function Uo(t,e,n){const r=_(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Oo.forEach((n,r)=>{const i=r.view.io(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=_(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.io(e)&&(r=!0)}),r&&To(n)}(r.eventManager,e),t.length&&r.$o.Rr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Vo(t,e,n){const r=_(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Bo.get(e),s=i&&i.key;if(s){let t=new He(st.comparator);t=t.insert(s,Et.newNoDocument(s,$.min()));const n=sn().add(s),i=new cn($.min(),new Map,new Qe(P),t,n);await Fo(r,i),r.Lo=r.Lo.remove(s),r.Bo.delete(e),Yo(r)}else await Xi(r.localStore,e,!1).then(()=>Go(r,e,n)).catch(gi)}async function qo(t,e){const n=_(t),r=e.batch.batchId;try{const t=await zi(n.localStore,e);Ho(n,r,null),Ko(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Jo(n,t)}catch(t){await gi(t)}}async function Bo(t,e,n){const r=_(t);try{const t=await function(t,e){const n=_(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.In.lookupMutationBatch(t,e).next(e=>(b(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e))).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}(r.localStore,e);Ho(r,e,n),Ko(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Jo(r,t)}catch(n){await gi(n)}}async function zo(t,e){const n=_(t);Hs(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=_(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>e.In.getHighestUnacknowledgedBatchId(t))}(n.localStore);if(-1===t)return void e.resolve();const r=n.Ko.get(t)||[];r.push(e),n.Ko.set(t,r)}catch(t){const n=fo(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function Ko(t,e){(t.Ko.get(e)||[]).forEach(t=>{t.resolve()}),t.Ko.delete(e)}function Ho(t,e,n){const r=_(t);let i=r.qo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.qo[r.currentUser.toKey()]=i}}function Go(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Oo.delete(r),n&&t.$o.Go(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.Uo.cs(e).forEach(e=>{t.Uo.containsKey(e)||Wo(t,e)})}function Wo(t,e){t.Mo.delete(e.path.canonicalString());const n=t.Lo.get(e);null!==n&&(Vs(t.remoteStore,n),t.Lo=t.Lo.remove(e),t.Bo.delete(n),Yo(t))}function Qo(t,e,n){for(const r of n)r instanceof Co?(t.Uo.addReference(r.key,e),Xo(t,r)):r instanceof xo?(p("SyncEngine","Document no longer in limbo: "+r.key),t.Uo.removeReference(r.key,e),t.Uo.containsKey(r.key)||Wo(t,r.key)):v()}function Xo(t,e){const n=e.key,r=n.path.canonicalString();t.Lo.get(n)||t.Mo.has(r)||(p("SyncEngine","New document in limbo: "+n),t.Mo.add(r),Yo(t))}function Yo(t){for(;t.Mo.size>0&&t.Lo.size<t.maxConcurrentLimboResolutions;){const e=t.Mo.values().next().value;t.Mo.delete(e);const n=new st(B.fromString(e)),r=t.jo.next();t.Bo.set(r,new Ro(n)),t.Lo=t.Lo.insert(n,r),Us(t.remoteStore,new Mr(te(Gt(n.path)),r,2,N.T))}}async function Jo(t,e,n){const r=_(t),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((t,a)=>{o.push(r.Wo(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Fi.kn(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.$o.Rr(i),await async function(t,e){const n=_(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Tr.forEach(e,e=>Tr.forEach(e.Nn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Tr.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!kr(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Un.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(t,i)}}}(r.localStore,s))}async function Zo(t,e){const n=_(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await Bi(n.localStore,e);n.currentUser=e,function(t,e){t.Ko.forEach(t=>{t.forEach(t=>{t.reject(new T(E.CANCELLED,e))})}),t.Ko.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Jo(n,t.Wn)}}function ta(t,e){const n=_(t),r=n.Bo.get(e);if(r&&r.ko)return sn().add(r.key);{let t=sn();const r=n.Fo.get(e);if(!r)return t;for(const e of r){const r=n.Oo.get(e);t=t.unionWith(r.view.Ro)}return t}}async function ea(t,e){const n=_(t),r=await Yi(n.localStore,e.query,!0),i=e.view.No(r);return n.isPrimaryClient&&Qo(n,e.targetId,i.Do),i}async function na(t){const e=_(t);return Zi(e.localStore).then(t=>Jo(e,t))}async function ra(t,e,n,r){const i=_(t),s=await function(t,e){const n=_(t),r=_(n.In);return n.persistence.runTransaction("Lookup mutation documents","readonly",t=>r.Xt(t,e).next(e=>e?n.Qn.Pn(t,e):Tr.resolve(null)))}(i.localStore,e);null!==s?("pending"===n?await Zs(i.remoteStore):"acknowledged"===n||"rejected"===n?(Ho(i,e,r||null),Ko(i,e),function(t,e){_(_(t).In).te(e)}(i.localStore,e)):v(),await Jo(i,s)):p("SyncEngine","Cannot apply mutation batch with id: "+e)}async function ia(t,e){const n=_(t);if(la(n),ha(n),!0===e&&!0!==n.Qo){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await sa(n,t.toArray());n.Qo=!0,await co(n.remoteStore,!0);for(const r of e)Us(n.remoteStore,r)}else if(!1===e&&!1!==n.Qo){const t=[];let e=Promise.resolve();n.Fo.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?t.push(i):e=e.then(()=>(Go(n,i),Xi(n.localStore,i,!0))),Vs(n.remoteStore,i)}),await e,await sa(n,t),function(t){const e=_(t);e.Bo.forEach((t,n)=>{Vs(e.remoteStore,n)}),e.Uo.us(),e.Bo=new Map,e.Lo=new He(st.comparator)}(n),n.Qo=!1,await co(n.remoteStore,!1)}}async function sa(t,e,n){const r=_(t),i=[],s=[];for(const o of e){let t;const e=r.Fo.get(o);if(e&&0!==e.length){t=await Qi(r.localStore,te(e[0]));for(const t of e){const e=r.Oo.get(t),n=await ea(r,e);n.snapshot&&s.push(n.snapshot)}}else{const e=await Ji(r.localStore,o);t=await Qi(r.localStore,e),await jo(r,oa(e),o,!1)}i.push(t)}return r.$o.Rr(s),i}function oa(t){return Ht(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function aa(t){const e=_(t);return _(_(e.localStore).persistence).pn()}async function ca(t,e,n,r){const i=_(t);if(i.Qo)p("SyncEngine","Ignoring unexpected query state notification.");else if(i.Fo.has(e))switch(n){case"current":case"not-current":{const t=await Zi(i.localStore),r=cn.createSynthesizedRemoteEventForCurrentChange(e,"current"===n);await Jo(i,t,r);break}case"rejected":await Xi(i.localStore,e,!0),Go(i,e,r);break;default:v()}}async function ua(t,e,n){const r=la(t);if(r.Qo){for(const t of e){if(r.Fo.has(t)){p("SyncEngine","Adding an already active target "+t);continue}const e=await Ji(r.localStore,t),n=await Qi(r.localStore,e);await jo(r,oa(e),n.targetId,!1),Us(r.remoteStore,n)}for(const t of n)r.Fo.has(t)&&await Xi(r.localStore,t,!1).then(()=>{Vs(r.remoteStore,t),Go(r,t)}).catch(gi)}}function la(t){const e=_(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ta.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vo.bind(null,e),e.$o.Rr=_o.bind(null,e.eventManager),e.$o.Go=Eo.bind(null,e.eventManager),e}function ha(t){const e=_(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qo.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Bo.bind(null,e),e}function da(t,e,n){const r=_(t);(async function(t,e,n){try{const r=await e.getMetadata();if(await function(t,e){const n=_(t),r=Tn(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",t=>n.Je.getBundleMetadata(t,e.id)).then(t=>!!t&&t.createTime.compareTo(r)>=0)}(t.localStore,r))return await e.close(),void n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(r));n._updateProgress(ko(r));const i=new Oo(r,t.localStore,e.N);let s=await e.zo();for(;s;){const t=await i.mo(s);t&&n._updateProgress(t),s=await e.zo()}const o=await i.complete();await Jo(t,o.En,void 0),await function(t,e){const n=_(t);return n.persistence.runTransaction("Save bundle","readwrite",t=>n.Je.saveBundleMetadata(t,e))}(t.localStore,r),n._completeWith(o.progress)}catch(t){g("SyncEngine","Loading bundle failed with "+t),n._failWith(t)}}
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
 */)(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class fa{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=xs(t.databaseInfo.databaseId),this.sharedClientState=this.Ho(t),this.persistence=this.Jo(t),await this.persistence.start(),this.gcScheduler=this.Yo(t),this.localStore=this.Xo(t)}Yo(t){return null}Xo(t){return qi(this.persistence,new Ui,t.initialUser,this.N)}Jo(t){return new ls(ds.Ns,this.N)}Ho(t){return new Es}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pa extends fa{constructor(t,e,n){super(),this.Zo=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await ts(this.localStore),await this.Zo.initialize(this,t),await ha(this.Zo.syncEngine),await Zs(this.Zo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Xo(t){return qi(this.persistence,new Ui,t.initialUser,this.N)}Yo(t){const e=this.persistence.referenceDelegate.garbageCollector;return new bi(e,t.asyncQueue)}Jo(t){const e=ji(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?ri.withCacheSize(this.cacheSizeBytes):ri.DEFAULT;return new Ri(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,ks(),Cs(),this.N,this.sharedClientState,!!this.forceOwnership)}Ho(t){return new Es}}class ma extends pa{constructor(t,e){super(t,e,!1),this.Zo=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Zo.syncEngine;this.sharedClientState instanceof _s&&(this.sharedClientState.syncEngine={_i:ra.bind(null,e),mi:ca.bind(null,e),gi:ua.bind(null,e),pn:aa.bind(null,e),wi:na.bind(null,e)},await this.sharedClientState.start()),await this.persistence.nn(async t=>{await ia(this.Zo.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):t||this.gcScheduler.stop())})}Ho(t){const e=ks();if(!_s.bt(e))throw new T(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=ji(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new _s(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class ga{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Uo(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zo.bind(null,this.syncEngine),await co(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new vo}createDatastore(t){const e=xs(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Os(r));var r;return function(t,e,n){return new Ls(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Uo(this.syncEngine,t,0),s=Is.bt()?new Is:new Ts,new Ms(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Po(t,e,n,r,i,s);return o&&(a.Qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=_(t);p("RemoteStore","RemoteStore shutting down."),e.Wr.add(5),await Fs(e),e.zr.shutdown(),e.Hr.set("Unknown")}(this.remoteStore)}}
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
 */function ya(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
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
 */class va{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.tc(this.observer.next,t)}error(t){this.observer.error?this.tc(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}ec(){this.muted=!0}tc(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
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
 */class ba{constructor(t,e){this.nc=t,this.N=e,this.metadata=new I,this.buffer=new Uint8Array,this.sc=new TextDecoder("utf-8"),this.ic().then(t=>{t&&t.wo()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==t?void 0:t.payload)))},t=>this.metadata.reject(t))}close(){return this.nc.cancel()}async getMetadata(){return this.metadata.promise}async zo(){return await this.getMetadata(),this.ic()}async ic(){const t=await this.rc();if(null===t)return null;const e=this.sc.decode(t),n=Number(e);isNaN(n)&&this.oc(`length string (${e}) is not valid number`);const r=await this.cc(n);return new So(JSON.parse(r),t.length+n)}ac(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async rc(){for(;this.ac()<0;)if(await this.uc())break;if(0===this.buffer.length)return null;const t=this.ac();t<0&&this.oc("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async cc(t){for(;this.buffer.length<t;)await this.uc()&&this.oc("Reached the end of bundle when more is expected.");const e=this.sc.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}oc(t){throw this.nc.cancel(),new Error("Invalid bundle format: "+t)}async uc(){const t=await this.nc.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
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
 */class wa{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=_(t),r=xn(n.N)+"/documents",i={documents:e.map(t=>An(n.N,t))},s=await n.Ki("BatchGetDocuments",r,i),o=new Map;s.forEach(t=>{const e=Pn(n.N,t);o.set(e.key.toString(),e)});const a=[];return e.forEach(t=>{const e=o.get(t.toString());b(!!e),a.push(e)}),a}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Fe(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=st.fromPath(e);this.mutations.push(new Ue(n,this.precondition(n)))}),await async function(t,e){const n=_(t),r=xn(n.N)+"/documents",i={writes:e.map(t=>jn(n.N,t))};await n.Li("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw v();e=$.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new T(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?Ae.updateTime(e):Ae.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual($.min()))throw new T(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ae.updateTime(e)}return Ae.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
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
 */class _a{constructor(t,e,n,r){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=r,this.hc=5,this.ar=new Ns(this.asyncQueue,"transaction_retry")}run(){this.hc-=1,this.lc()}lc(){this.ar.Xi(async()=>{const t=new wa(this.datastore),e=this.fc(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.dc(t)}))}).catch(t=>{this.dc(t)})})}fc(t){try{const e=this.updateFunction(t);return!nt(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}dc(t){this.hc>0&&this.wc(t)?(this.hc-=1,this.asyncQueue.enqueueAndForget(()=>(this.lc(),Promise.resolve()))):this.deferred.reject(t)}wc(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!ze(e)}return!1}}
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
 */class Ea{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=u.UNAUTHENTICATED,this.clientId=R.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{p("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=fo(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ta(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Bi(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Ia(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Sa(t);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=_(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Hs(n);n.Wr.add(3),await Fs(n),r&&n.Hr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Wr.delete(3),await $s(n)}(e.remoteStore,t)),t.onlineComponents=e}async function Sa(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Ta(t,new fa)),t.offlineComponents}async function Aa(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Ia(t,new ga)),t.onlineComponents}function Oa(t){return Sa(t).then(t=>t.persistence)}function ka(t){return Sa(t).then(t=>t.localStore)}function Ca(t){return Aa(t).then(t=>t.remoteStore)}function xa(t){return Aa(t).then(t=>t.syncEngine)}async function Na(t){const e=await Aa(t),n=e.eventManager;return n.onListen=Lo.bind(null,e.syncEngine),n.onUnlisten=Mo.bind(null,e.syncEngine),n}function Da(t){return t.asyncQueue.enqueue(async()=>{const e=await Oa(t),n=await Ca(t);return e.setNetworkEnabled(!0),function(t){const e=_(t);return e.Wr.delete(0),$s(e)}(n)})}function Ra(t){return t.asyncQueue.enqueue(async()=>{const e=await Oa(t),n=await Ca(t);return e.setNetworkEnabled(!1),async function(t){const e=_(t);e.Wr.add(0),await Fs(e),e.Hr.set("Offline")}(n)})}function Pa(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await function(t,e){const n=_(t);return n.persistence.runTransaction("read document","readonly",t=>n.Qn.An(t,e))}(t,e);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new T(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const r=fo(t,`Failed to get document '${e} from cache`);n.reject(r)}}(await ka(t),e,n)),n.promise}function La(t,e,n={}){const r=new I;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new va({next:s=>{e.enqueueAndForget(()=>wo(t,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new Io(Gt(n.path),s,{includeMetadataChanges:!0,fo:!0});return bo(t,o)}(await Na(t),t.asyncQueue,e,n,r)),r.promise}function ja(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await Yi(t,e,!0),i=new No(e,r.Gn),s=i.bo(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(t){const r=fo(t,`Failed to execute query '${e} against cache`);n.reject(r)}}(await ka(t),e,n)),n.promise}function Ma(t,e,n={}){const r=new I;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new va({next:n=>{e.enqueueAndForget(()=>wo(t,o)),n.fromCache&&"server"===r.source?i.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Io(n,s,{includeMetadataChanges:!0,fo:!0});return bo(t,o)}(await Na(t),t.asyncQueue,e,n,r)),r.promise}function $a(t,e){const n=new va(e);return t.asyncQueue.enqueueAndForget(async()=>function(t,e){_(t).so.add(e),e.next()}(await Na(t),n)),()=>{n.ec(),t.asyncQueue.enqueueAndForget(async()=>function(t,e){_(t).so.delete(e)}(await Na(t),n))}}function Fa(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(t){return Aa(t).then(t=>t.datastore)}(t);new _a(t.asyncQueue,r,e,n).run()}),n.promise}function Ua(t,e,n,r){const i=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new ba(t,e)}(function(t,e){if(t instanceof Uint8Array)return ya(t,e);if(t instanceof ArrayBuffer)return ya(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
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
 */(n,xs(e));t.asyncQueue.enqueueAndForget(async()=>{da(await xa(t),i,r)})}function Va(t,e){return t.asyncQueue.enqueue(async()=>function(t,e){const n=_(t);return n.persistence.runTransaction("Get named query","readonly",t=>n.Je.getNamedQuery(t,e))}(await ka(t),e))}class qa{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ba{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ba&&t.projectId===this.projectId&&t.database===this.database}}
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
 */const za=new Map;
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
 */function Ka(t,e,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ha(t,e,n,r){if(!0===e&&!0===r)throw new T(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ga(t){if(!st.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wa(t){if(st.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qa(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":v()}function Xa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qa(t);throw new T(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Ya(t,e){if(e<=0)throw new T(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
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
 */class Ja{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ha("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class Za{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ja({}),this._settingsFrozen=!1,t instanceof Ba?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ba(t.options.projectId)}(t))}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ja(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new A;switch(t.type){case"gapi":const e=t.client;return b(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new x(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new T(E.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=za.get(t);e&&(p("ComponentProvider","Removing Datastore"),za.delete(t),e.terminate())}(this),Promise.resolve()}}function tc(t,e,n,r={}){var i;const s=(t=Xa(t,Za))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=u.MOCK_USER;else{e=Object(o["e"])(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}t._credentials=new O(new S(e,n))}}
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
 */class ec{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ec(this.firestore,t,this._key)}}class nc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new nc(this.firestore,t,this._query)}}class rc extends nc{constructor(t,e,n){super(t,e,Gt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ec(this.firestore,null,new st(t))}withConverter(t){return new rc(this.firestore,t,this._path)}}function ic(t,e,...n){if(t=Object(o["i"])(t),Ka("collection","path",e),t instanceof Za){const r=B.fromString(e,...n);return Wa(r),new rc(t,null,r)}{if(!(t instanceof ec||t instanceof rc))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Wa(r),new rc(t.firestore,null,r)}}function sc(t,e){if(t=Xa(t,Za),Ka("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new nc(t,null,function(t){return new Kt(B.emptyPath(),t)}(e))}function oc(t,e,...n){if(t=Object(o["i"])(t),1===arguments.length&&(e=R.I()),Ka("doc","path",e),t instanceof Za){const r=B.fromString(e,...n);return Ga(r),new ec(t,null,new st(r))}{if(!(t instanceof ec||t instanceof rc))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(B.fromString(e,...n));return Ga(r),new ec(t.firestore,t instanceof rc?t.converter:null,new st(r))}}function ac(t,e){return t=Object(o["i"])(t),e=Object(o["i"])(e),(t instanceof ec||t instanceof rc)&&(e instanceof ec||e instanceof rc)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function cc(t,e){return t=Object(o["i"])(t),e=Object(o["i"])(e),t instanceof nc&&e instanceof nc&&t.firestore===e.firestore&&ne(t._query,e._query)&&t.converter===e.converter
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
 */}class uc{constructor(){this._c=Promise.resolve(),this.mc=[],this.gc=!1,this.yc=[],this.Tc=null,this.Ec=!1,this.Ic=!1,this.Ac=[],this.ar=new Ns(this,"async_queue_retry"),this.Rc=()=>{const t=Cs();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ar.tr()};const t=Cs();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Rc)}get isShuttingDown(){return this.gc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.bc(),this.Pc(t)}enterRestrictedMode(t){if(!this.gc){this.gc=!0,this.Ic=t||!1;const e=Cs();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Rc)}}enqueue(t){if(this.bc(),this.gc)return new Promise(()=>{});const e=new I;return this.Pc(()=>this.gc&&this.Ic?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.mc.push(t),this.vc()))}async vc(){if(0!==this.mc.length){try{await this.mc[0](),this.mc.shift(),this.ar.reset()}catch(t){if(!kr(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.mc.length>0&&this.ar.Xi(()=>this.vc())}}Pc(t){const e=this._c.then(()=>(this.Ec=!0,t().catch(t=>{this.Tc=t,this.Ec=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw m("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ec=!1,t))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.bc(),this.Ac.indexOf(t)>-1&&(e=0);const r=ho.createAndSchedule(this,t,e,n,t=>this.Vc(t));return this.yc.push(r),r}bc(){this.Tc&&v()}verifyOperationInProgress(){}async Sc(){let t;do{t=this._c,await t}while(t!==this._c)}Dc(t){for(const e of this.yc)if(e.timerId===t)return!0;return!1}Cc(t){return this.Sc().then(()=>{this.yc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.yc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sc()})}Nc(t){this.Ac.push(t)}Vc(t){const e=this.yc.indexOf(t);this.yc.splice(e,1)}}function lc(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
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
 */(t,["next","error","complete"])}class hc{constructor(){this._progressObserver={},this._taskCompletionResolver=new I,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
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
 */const dc=-1;class fc extends Za{constructor(t,e){super(t,e),this.type="firestore",this._queue=new uc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||mc(this),this._firestoreClient.terminate()}}function pc(t){return t._firestoreClient||mc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function mc(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new qa(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ea(t._credentials,t._queue,r)}function gc(t,e){Sc(t=Xa(t,fc));const n=pc(t),r=t._freezeSettings(),i=new ga;return vc(n,i,new pa(i,r.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function yc(t){Sc(t=Xa(t,fc));const e=pc(t),n=t._freezeSettings(),r=new ga;return vc(e,r,new ma(r,n.cacheSizeBytes))}function vc(t,e,n){const r=new I;return t.asyncQueue.enqueue(async()=>{try{await Ta(t,n),await Ia(t,e),r.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.reject(t)}}).then(()=>r.promise)}function bc(t){if(t._initialized&&!t._terminated)throw new T(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new I;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Sr.bt())return Promise.resolve();const e=t+"main";await Sr.delete(e)}(ji(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function wc(t){return function(t){const e=new I;return t.asyncQueue.enqueueAndForget(async()=>zo(await xa(t),e)),e.promise}(pc(t=Xa(t,fc)))}function _c(t){return Da(pc(t=Xa(t,fc)))}function Ec(t){return Ra(pc(t=Xa(t,fc)))}function Tc(t,e){const n=pc(t=Xa(t,fc)),r=new hc;return Ua(n,t._databaseId,e,r),r}function Ic(t,e){return Va(pc(t=Xa(t,fc)),e).then(e=>e?new nc(t,null,e.query):null)}function Sc(t){if(t._initialized||t._terminated)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
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
 */class Ac{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class Oc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Oc(W.fromBase64String(t))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Oc(W.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class kc{constructor(t){this._methodName=t}}
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
 */class Cc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return P(this._lat,t._lat)||P(this._long,t._long)}}
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
 */const xc=/^__.*__$/;class Nc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Le(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pe(t,this.data,e,this.fieldTransforms)}}class Dc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Le(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Rc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Pc{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get kc(){return this.settings.kc}$c(t){return new Pc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Oc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$c({path:n,Fc:!1});return r.Mc(t),r}Lc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$c({path:n,Fc:!1});return r.xc(),r}Bc(t){return this.$c({path:void 0,Fc:!0})}Uc(t){return tu(t,this.settings.methodName,this.settings.qc||!1,this.path,this.settings.Kc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Mc(this.path.get(t))}Mc(t){if(0===t.length)throw this.Uc("Document fields must not be empty");if(Rc(this.kc)&&xc.test(t))throw this.Uc('Document fields cannot begin and end with "__"')}}class Lc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.N=n||xs(t)}jc(t,e,n,r=!1){return new Pc({kc:t,methodName:e,Kc:n,path:K.emptyPath(),Fc:!1,qc:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function jc(t){const e=t._freezeSettings(),n=xs(t._databaseId);return new Lc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Mc(t,e,n,r,i,s={}){const o=t.jc(s.merge||s.mergeFields?2:0,e,n,i);Xc("Data must be an object, but it was:",o,r);const a=Wc(r,o);let c,u;if(s.merge)c=new H(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Yc(e,r,n);if(!o.contains(i))throw new T(E.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);eu(t,i)||t.push(i)}c=new H(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new Nc(new wt(a),c,u)}class $c extends kc{_toFieldTransform(t){if(2!==t.kc)throw 1===t.kc?t.Uc(this._methodName+"() can only appear at the top level of your update data"):t.Uc(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof $c}}function Fc(t,e,n){return new Pc({kc:3,Kc:e.settings.Kc,methodName:t._methodName,Fc:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class Uc extends kc{_toFieldTransform(t){return new Te(t.path,new me)}isEqual(t){return t instanceof Uc}}class Vc extends kc{constructor(t,e){super(t),this.Qc=e}_toFieldTransform(t){const e=Fc(this,t,!0),n=this.Qc.map(t=>Gc(t,e)),r=new ge(n);return new Te(t.path,r)}isEqual(t){return this===t}}class qc extends kc{constructor(t,e){super(t),this.Qc=e}_toFieldTransform(t){const e=Fc(this,t,!0),n=this.Qc.map(t=>Gc(t,e)),r=new ve(n);return new Te(t.path,r)}isEqual(t){return this===t}}class Bc extends kc{constructor(t,e){super(t),this.Wc=e}_toFieldTransform(t){const e=new we(t.N,le(t.N,this.Wc));return new Te(t.path,e)}isEqual(t){return this===t}}function zc(t,e,n,r){const i=t.jc(1,e,n);Xc("Data must be an object, but it was:",i,r);const s=[],a=wt.empty();U(r,(t,r)=>{const c=Zc(e,t,n);r=Object(o["i"])(r);const u=i.Lc(c);if(r instanceof $c)s.push(c);else{const t=Gc(r,u);null!=t&&(s.push(c),a.set(c,t))}});const c=new H(s);return new Dc(a,c,i.fieldTransforms)}function Kc(t,e,n,r,i,s){const a=t.jc(1,e,n),c=[Yc(e,r,n)],u=[i];if(s.length%2!=0)throw new T(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Yc(e,s[o])),u.push(s[o+1]);const l=[],h=wt.empty();for(let f=c.length-1;f>=0;--f)if(!eu(l,c[f])){const t=c[f];let e=u[f];e=Object(o["i"])(e);const n=a.Lc(t);if(e instanceof $c)l.push(t);else{const r=Gc(e,n);null!=r&&(l.push(t),h.set(t,r))}}const d=new H(l);return new Dc(h,d,a.fieldTransforms)}function Hc(t,e,n,r=!1){return Gc(n,t.jc(r?4:3,e))}function Gc(t,e){if(Qc(t=Object(o["i"])(t)))return Xc("Unsupported field value:",e,t),Wc(t,e);if(t instanceof kc)return function(t,e){if(!Rc(e.kc))throw e.Uc(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Uc(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&4!==e.kc)throw e.Uc("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Gc(i,e.Bc(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return le(e.N,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=M.fromDate(t);return{timestampValue:wn(e.N,n)}}if(t instanceof M){const n=new M(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:wn(e.N,n)}}if(t instanceof Cc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Oc)return{bytesValue:_n(e.N,t._byteString)};if(t instanceof ec){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Uc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:In(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Uc("Unsupported field value: "+Qa(t))}(t,e)}function Wc(t,e){const n={};return V(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):U(t,(t,r)=>{const i=Gc(r,e.Oc(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function Qc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof M||t instanceof Cc||t instanceof Oc||t instanceof ec||t instanceof kc)}function Xc(t,e,n){if(!Qc(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Qa(n);throw"an object"===r?e.Uc(t+" a custom object"):e.Uc(t+" "+r)}}function Yc(t,e,n){if((e=Object(o["i"])(e))instanceof Ac)return e._internalPath;if("string"==typeof e)return Zc(t,e);throw tu("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const Jc=new RegExp("[~\\*/\\[\\]]");function Zc(t,e,n){if(e.search(Jc)>=0)throw tu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ac(...e.split("."))._internalPath}catch(r){throw tu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new T(E.INVALID_ARGUMENT,a+t+c)}function eu(t,e){return t.some(t=>t.isEqual(e))}
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
 */class nu{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ec(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new ru(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(iu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class ru extends nu{data(){return super.data()}}function iu(t,e){return"string"==typeof e?Zc(t,e):e instanceof Ac?e._internalPath:e._delegate._internalPath}
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
 */class su{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ou extends nu{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(iu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class au extends ou{data(t={}){return super.data(t)}}class cu{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new su(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new au(this._firestore,this._userDataWriter,n.key,n,new su(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new au(t._firestore,t._userDataWriter,n.doc.key,n.doc,new su(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new au(t._firestore,t._userDataWriter,e.doc.key,e.doc,new su(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:uu(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function uu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}function lu(t,e){return t instanceof ou&&e instanceof ou?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof cu&&e instanceof cu&&t._firestore===e._firestore&&cc(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
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
 */function hu(t){if(Qt(t)&&0===t.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class du{}function fu(t,...e){for(const n of e)t=n._apply(t);return t}class pu extends du{constructor(t,e,n){super(),this.Gc=t,this.zc=e,this.Hc=n,this.type="where"}_apply(t){const e=jc(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new T(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){Cu(o,s);const e=[];for(const n of o)e.push(ku(r,t,n));a={arrayValue:{values:e}}}else a=ku(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Cu(o,s),a=Hc(n,e,o,"in"===s||"not-in"===s);const c=Ct.create(i,s,a);return function(t,e){if(e.v()){const n=Yt(t);if(null!==n&&!n.isEqual(e.field))throw new T(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Xt(t);null!==r&&xu(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Gc,this.zc,this.Hc);return new nc(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Kt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function mu(t,e,n){const r=e,i=iu("where",t);return new pu(i,r,n)}class gu extends du{constructor(t,e){super(),this.Gc=t,this.Jc=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Vt(e,n);return function(t,e){if(null===Xt(t)){const n=Yt(t);null!==n&&xu(t,n,e.field)}}(t,r),r}(t._query,this.Gc,this.Jc);return new nc(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Kt(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function yu(t,e="asc"){const n=e,r=iu("orderBy",t);return new gu(r,n)}class vu extends du{constructor(t,e,n){super(),this.type=t,this.Yc=e,this.Xc=n}_apply(t){return new nc(t.firestore,t.converter,ee(t._query,this.Yc,this.Xc))}}function bu(t){return Ya("limit",t),new vu("limit",t,"F")}function wu(t){return Ya("limitToLast",t),new vu("limitToLast",t,"L")}class _u extends du{constructor(t,e,n){super(),this.type=t,this.Zc=e,this.ta=n}_apply(t){const e=Ou(t,this.type,this.Zc,this.ta);return new nc(t.firestore,t.converter,function(t,e){return new Kt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Eu(...t){return new _u("startAt",t,!0)}function Tu(...t){return new _u("startAfter",t,!1)}class Iu extends du{constructor(t,e,n){super(),this.type=t,this.Zc=e,this.ta=n}_apply(t){const e=Ou(t,this.type,this.Zc,this.ta);return new nc(t.firestore,t.converter,function(t,e){return new Kt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function Su(...t){return new Iu("endBefore",t,!0)}function Au(...t){return new Iu("endAt",t,!1)}function Ou(t,e,n,r){if(n[0]=Object(o["i"])(n[0]),n[0]instanceof nu)return function(t,e,n,r,i){if(!r)throw new T(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Zt(t))if(o.field.isKeyField())s.push(ft(e,r.key));else{const t=r.data.field(o.field);if(Z(t))throw new T(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new T(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new Ft(s,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=jc(t.firestore);return function(t,e,n,r,i,s){const o=t.explicitOrderBy;if(i.length>o.length)throw new T(E.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new T(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!Jt(t)&&-1!==s.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=t.path.child(B.fromString(s));if(!st.isDocumentKey(n))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new st(n);a.push(ft(e,i))}else{const t=Hc(n,r,s);a.push(t)}}return new Ft(a,s)}(t._query,t.firestore._databaseId,i,e,n,r)}}function ku(t,e,n){if("string"==typeof(n=Object(o["i"])(n))){if(""===n)throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Jt(e)&&-1!==n.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(B.fromString(n));if(!st.isDocumentKey(r))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ft(t,new st(r))}if(n instanceof ec)return ft(t,n._key);throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qa(n)}.`)}function Cu(t,e){if(!Array.isArray(t)||0===t.length)throw new T(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new T(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function xu(t,e,n){if(!n.isEqual(e))throw new T(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
 */class Nu{convertValue(t,e="none"){switch(ot(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Y(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(J(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return U(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new Cc(Y(t.latitude),Y(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=tt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(et(t));default:return null}}convertTimestamp(t){const e=X(t);return new M(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=B.fromString(t);b(Zn(n));const r=new Ba(n.get(1),n.get(3)),i=new st(n.popFirst(5));return r.isEqual(e)||m(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
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
 */function Du(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ru extends Nu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Oc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ec(this.firestore,null,e)}}
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
 */class Pu{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=jc(t)}set(t,e,n){this._verifyNotCommitted();const r=Lu(t,this._firestore),i=Du(r.converter,e,n),s=Mc(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,Ae.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const i=Lu(t,this._firestore);let s;return s="string"==typeof(e=Object(o["i"])(e))||e instanceof Ac?Kc(this._dataReader,"WriteBatch.update",i._key,e,n,r):zc(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(s.toMutation(i._key,Ae.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Lu(t,this._firestore);return this._mutations=this._mutations.concat(new Fe(e._key,Ae.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Lu(t,e){if((t=Object(o["i"])(t)).firestore!==e)throw new T(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
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
 */function ju(t){t=Xa(t,ec);const e=Xa(t.firestore,fc);return La(pc(e),t._key).then(n=>Xu(e,t,n))}class Mu extends Nu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Oc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ec(this.firestore,null,e)}}function $u(t){t=Xa(t,ec);const e=Xa(t.firestore,fc),n=pc(e),r=new Mu(e);return Pa(n,t._key).then(n=>new ou(e,r,t._key,n,new su(null!==n&&n.hasLocalMutations,!0),t.converter))}function Fu(t){t=Xa(t,ec);const e=Xa(t.firestore,fc);return La(pc(e),t._key,{source:"server"}).then(n=>Xu(e,t,n))}function Uu(t){t=Xa(t,nc);const e=Xa(t.firestore,fc),n=pc(e),r=new Mu(e);return hu(t._query),Ma(n,t._query).then(n=>new cu(e,r,t,n))}function Vu(t){t=Xa(t,nc);const e=Xa(t.firestore,fc),n=pc(e),r=new Mu(e);return ja(n,t._query).then(n=>new cu(e,r,t,n))}function qu(t){t=Xa(t,nc);const e=Xa(t.firestore,fc),n=pc(e),r=new Mu(e);return Ma(n,t._query,{source:"server"}).then(n=>new cu(e,r,t,n))}function Bu(t,e,n){t=Xa(t,ec);const r=Xa(t.firestore,fc),i=Du(t.converter,e,n);return Qu(r,[Mc(jc(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Ae.none())])}function zu(t,e,n,...r){t=Xa(t,ec);const i=Xa(t.firestore,fc),s=jc(i);let a;return a="string"==typeof(e=Object(o["i"])(e))||e instanceof Ac?Kc(s,"updateDoc",t._key,e,n,r):zc(s,"updateDoc",t._key,e),Qu(i,[a.toMutation(t._key,Ae.exists(!0))])}function Ku(t){return Qu(Xa(t.firestore,fc),[new Fe(t._key,Ae.none())])}function Hu(t,e){const n=Xa(t.firestore,fc),r=oc(t),i=Du(t.converter,e);return Qu(n,[Mc(jc(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Ae.exists(!1))]).then(()=>r)}function Gu(t,...e){var n,r,i;t=Object(o["i"])(t);let s={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||lc(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(lc(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof ec)l=Xa(t.firestore,fc),h=Gt(t._key.path),u={next:n=>{e[a]&&e[a](Xu(l,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Xa(t,nc);l=Xa(n.firestore,fc),h=n._query;const r=new Mu(l);u={next:t=>{e[a]&&e[a](new cu(l,r,n,t))},error:e[a+1],complete:e[a+2]},hu(t._query)}return function(t,e,n,r){const i=new va(r),s=new Io(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>bo(await Na(t),s)),()=>{i.ec(),t.asyncQueue.enqueueAndForget(async()=>wo(await Na(t),s))}}(pc(l),h,c,u)}function Wu(t,e){return $a(pc(t=Xa(t,fc)),lc(e)?e:{next:e})}function Qu(t,e){return function(t,e){const n=new I;return t.asyncQueue.enqueueAndForget(async()=>$o(await xa(t),e,n)),n.promise}(pc(t),e)}function Xu(t,e,n){const r=n.docs.get(e._key),i=new Mu(t);return new ou(t,i,e._key,r,new su(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */class Yu extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=jc(t)}get(t){const e=Lu(t,this._firestore),n=new Ru(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return v();const r=t[0];if(r.isFoundDocument())return new nu(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new nu(this._firestore,n,e._key,null,e.converter);throw v()})}set(t,e,n){const r=Lu(t,this._firestore),i=Du(r.converter,e,n),s=Mc(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(t,e,n,...r){const i=Lu(t,this._firestore);let s;return s="string"==typeof(e=Object(o["i"])(e))||e instanceof Ac?Kc(this._dataReader,"Transaction.update",i._key,e,n,r):zc(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,s),this}delete(t){const e=Lu(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Lu(t,this._firestore),n=new Mu(this._firestore);return super.get(t).then(t=>new ou(this._firestore,n,e._key,t._document,new su(!1,!1),e.converter))}}function Ju(t,e){return Fa(pc(t=Xa(t,fc)),n=>e(new Yu(t,n)))}
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
 */function Zu(){return new $c("deleteField")}function tl(){return new Uc("serverTimestamp")}function el(...t){return new Vc("arrayUnion",t)}function nl(...t){return new qc("arrayRemove",t)}function rl(t){return new Bc("increment",t)}
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
 */!function(t,e=!0){!function(t){l=t}(r["SDK_VERSION"]),Object(r["_registerComponent"])(new i["a"]("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new fc(r,new k(t.getProvider("auth-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),Object(r["registerVersion"])(c,"3.3.1",t),Object(r["registerVersion"])(c,"3.3.1","esm2017")}()}).call(this,n("4362"))},"0a78":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("7a03"),s=p(i),o=n("2adb"),a=n("ce18"),c=p(a),u=n("5836"),l=p(u),h=n("034d"),d=p(h),f=n("b7d9");function p(t){return t&&t.__esModule?t:{default:t}}var m={zoom:{twoWay:!0,type:Number},pov:{twoWay:!0,type:Object,trackProperties:["pitch","heading"]},position:{twoWay:!0,type:Object,noBind:!0},pano:{twoWay:!0,type:String},motionTracking:{twoWay:!1,type:Boolean},visible:{twoWay:!0,type:Boolean,default:!0},options:{twoWay:!1,type:Object,default:function(){return{}}}},g=["closeclick","status_changed"];e.default={mixins:[c.default],props:(0,f.mappedPropsToVueProps)(m),replace:!1,methods:{resize:function(){this.$panoObject&&google.maps.event.trigger(this.$panoObject,"resize")}},provide:function(){var t=this,e=new Promise((function(e,n){t.$panoPromiseDeferred={resolve:e,reject:n}}));return{$panoPromise:e,$mapPromise:e}},computed:{finalLat:function(){return this.position&&"function"===typeof this.position.lat?this.position.lat():this.position.lat},finalLng:function(){return this.position&&"function"===typeof this.position.lng?this.position.lng():this.position.lng},finalLatLng:function(){return{lat:this.finalLat,lng:this.finalLng}}},watch:{zoom:function(t){this.$panoObject&&this.$panoObject.setZoom(t)}},mounted:function(){var t=this;return this.$gmapApiPromiseLazy().then((function(){var e=t.$refs["vue-street-view-pano"],n=r({},t.options,(0,o.getPropsValues)(t,m));return delete n.options,t.$panoObject=new google.maps.StreetViewPanorama(e,n),(0,o.bindProps)(t,t.$panoObject,m),(0,s.default)(t,t.$panoObject,g),(0,l.default)((function(e,n,r){e(),t.$panoObject.addListener("position_changed",(function(){r()&&t.$emit("position_changed",t.$panoObject.getPosition()),n()})),(0,d.default)(t,["finalLat","finalLng"],(function(){e(),t.$panoObject.setPosition(t.finalLatLng)}))})),t.$panoPromiseDeferred.resolve(t.$panoObject),t.$panoPromise})).catch((function(t){throw t}))}}},"0c5e":function(t,e,n){"use strict";n.r(e);var r=n("0c5ed"),i=n.n(r);for(var s in r)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(s);e["default"]=i.a},"0c5ed":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("2adb"),i=n("108f"),s=o(i);function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}var c={bounds:{type:Object},defaultPlace:{type:String,default:""},componentRestrictions:{type:Object,default:null},types:{type:Array,default:function(){return[]}},placeholder:{required:!1,type:String},className:{required:!1,type:String},label:{required:!1,type:String,default:null},selectFirstOnEnter:{require:!1,type:Boolean,default:!1}};e.default={mounted:function(){var t=this,e=this.$refs.input;e.value=this.defaultPlace,this.$watch("defaultPlace",(function(){e.value=t.defaultPlace})),this.$gmapApiPromiseLazy().then((function(){var e=(0,r.getPropsValues)(t,c);if(t.selectFirstOnEnter&&(0,s.default)(t.$refs.input),"function"!==typeof google.maps.places.Autocomplete)throw new Error("google.maps.places.Autocomplete is undefined. Did you add 'places' to libraries when loading Google Maps?");t.autoCompleter=new google.maps.places.Autocomplete(t.$refs.input,e);c.placeholder,c.place,c.defaultPlace,c.className,c.label,c.selectFirstOnEnter;var n=a(c,["placeholder","place","defaultPlace","className","label","selectFirstOnEnter"]);(0,r.bindProps)(t,t.autoCompleter,n),t.autoCompleter.addListener("place_changed",(function(){t.$emit("place_changed",t.autoCompleter.getPlace())}))}))},created:function(){console.warn("The PlaceInput class is deprecated! Please consider using the Autocomplete input instead")},props:c}},"0ff2":function(t,e,n){"use strict";
/*!
  * vuefire v2.2.5
  * (c) 2020 Eduardo San Martin Morote
  * @license MIT
  */
function r(t,e){return e.split(".").reduce((function(t,e){return t[e]}),t)}function i(t,e,n){var r=(""+e).split("."),i=r.pop(),s=r.reduce((function(t,e){return t[e]}),t);return Array.isArray(s)?s.splice(Number(i),1,n):s[i]=n}function s(t){return t&&"object"===typeof t}function o(t){return t.toDate}function a(t){return t&&t.onSnapshot}function c(t,e){var n=!1;return function(){if(!n)return n=!0,t(e())}}function u(t){var e=t.val(),n=s(e)?e:Object.defineProperty({},".value",{value:e});return Object.defineProperty(n,".key",{value:t.key}),n}n.d(e,"a",(function(){return T}));var l={reset:!0,serialize:u,wait:!1};function h(t){return Object.defineProperty(t.data()||{},"id",{value:t.id})}function d(t,e,n){var r=[{},{}],i=Object.keys(n).reduce((function(t,e){var r=n[e];return t[r.path]=r.data(),t}),{});function c(t,e,n,r){e=e||{};var u=r[0],l=r[1];for(var h in Object.getOwnPropertyNames(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);n&&!n.enumerable&&Object.defineProperty(u,e,n)})),t){var d=t[h];if(null==d||d instanceof Date||o(d)||d.longitude&&d.latitude)u[h]=d;else if(a(d))u[h]="object"===typeof e&&h in e&&"string"!=typeof e[h]?e[h]:d.path,l[n+h]=d;else if(Array.isArray(d)){u[h]=Array(d.length);for(var f=0;f<d.length;f++){var p=d[f];p&&p.path in i&&(u[h][f]=i[p.path])}c(d,e[h]||u[h],n+h+".",[u[h],l])}else s(d)?(u[h]={},c(d,e[h],n+h+".",[u[h],l])):u[h]=d}}return c(t,e,"",r),r}var f={maxRefDepth:2,reset:!0,serialize:h,wait:!1};function p(t){for(var e in t)t[e].unsub()}function m(t,e,n,i,s,o,a,c){var u=d(t.serialize(i),r(e,n),s),l=u[0],h=u[1];o.set(e,n,l),y(t,e,n,s,h,o,a,c)}function g(t,e){var n=t.ref,r=t.target,i=t.path,s=t.depth,o=t.resolve,a=t.ops,c=Object.create(null),u=n.onSnapshot((function(t){t.exists?m(e,r,i,t,c,a,s,o):(a.set(r,i,null),o())}));return function(){u(),p(c)}}function y(t,e,n,i,s,o,a,c){var u=Object.keys(s),l=Object.keys(i).filter((function(t){return u.indexOf(t)<0}));if(l.forEach((function(t){i[t].unsub(),delete i[t]})),!u.length||++a>t.maxRefDepth)return c(n);var h=0,d=u.length,f=Object.create(null);function p(t){t in f&&++h>=d&&c(n)}u.forEach((function(c){var u=i[c],l=s[c],h=n+"."+c;if(f[h]=!0,u){if(u.path===l.path)return;u.unsub()}i[c]={data:function(){return r(e,h)},unsub:g({ref:l,target:e,path:h,depth:a,ops:o,resolve:p.bind(null,h)},t),path:l.path}}))}function v(t,e){var n=t.vm,r=t.key,i=t.collection,s=t.ops,o=t.resolve,a=t.reject;void 0===e&&(e=f);var c,u=Object.assign({},f,e),l=u.wait?[]:s.set(n,r,[]),h=o,m=[],g={added:function(t){var e=t.newIndex,n=t.doc;m.splice(e,0,Object.create(null));var r=m[e],i=d(u.serialize(n),void 0,r),a=i[0],c=i[1];s.add(l,e,a),y(u,l,e,r,c,s,0,o.bind(null,n))},modified:function(t){var e=t.oldIndex,n=t.newIndex,r=t.doc,i=m[e],a=l[e],c=d(u.serialize(r),a,i),h=c[0],f=c[1];m.splice(n,0,i),s.remove(l,e),s.add(l,n,h),y(u,l,n,i,f,s,0,o)},removed:function(t){var e=t.oldIndex;s.remove(l,e),p(m.splice(e,1)[0])}},v=i.onSnapshot((function(t){var e="function"===typeof t.docChanges?t.docChanges():t.docChanges;if(!c&&e.length){c=!0;for(var i=0,a=e.length,d=Object.create(null),f=0;f<a;f++)d[e[f].doc.id]=!0;o=function(t){var e=t.id;e in d&&++i>=a&&(u.wait&&s.set(n,r,l),h(n[r]),o=function(){})}}e.forEach((function(t){g[t.type](t)})),e.length||(u.wait&&s.set(n,r,l),o(l))}),a);return function(t){if(v(),!1!==t){var e="function"===typeof t?t():[];s.set(n,r,e)}m.forEach(p)}}function b(t,e){var n=t.vm,i=t.key,s=t.document,o=t.resolve,a=t.reject,u=t.ops;void 0===e&&(e=f);var l=Object.assign({},f,e),h=Object.create(null);o=c(o,(function(){return r(n,i)}));var d=s.onSnapshot((function(t){t.exists?m(l,n,i,t,h,u,0,o):(u.set(n,i,null),o(null))}),a);return function(t){if(d(),!1!==t){var e="function"===typeof t?t():null;u.set(n,i,e)}p(h)}}l.serialize,l.reset,l.wait;var w={set:function(t,e,n){return i(t,e,n)},add:function(t,e,n){return t.splice(e,0,n)},remove:function(t,e){return t.splice(e,1)}};function _(t,e,n,r,i){return new Promise((function(s,o){var a;a="where"in n?v({vm:t,key:e,ops:r,collection:n,resolve:s,reject:o},i):b({vm:t,key:e,ops:r,document:n,resolve:s,reject:o},i),t._firestoreUnbinds[e]=a}))}var E={bindName:"$bind",unbindName:"$unbind",serialize:f.serialize,reset:f.reset,wait:f.wait},T=function(t,e){void 0===e&&(e=E);var n=t.config.optionMergeStrategies;n.firestore=n.provide;var r=Object.assign({},E,e),i=r.bindName,s=r.unbindName;t.prototype[s]=function(t,e){this._firestoreUnbinds[t](e),delete this._firestoreUnbinds[t],delete this.$firestoreRefs[t]},t.prototype[i]=function(t,e,n){var i=Object.assign({},r,n);this._firestoreUnbinds[t]&&this[s](t,i.wait?"function"===typeof i.reset&&i.reset:i.reset);var o=_(this,t,e,w,i);return this.$firestoreRefs[t]=e,o},t.mixin({beforeCreate:function(){this._firestoreUnbinds=Object.create(null),this.$firestoreRefs=Object.create(null)},created:function(){var t=this.$options.firestore,e="function"===typeof t?t.call(this):t;if(e)for(var n in e)this[i](n,e[n],r)},beforeDestroy:function(){for(var t in this._firestoreUnbinds)this._firestoreUnbinds[t]();this._firestoreUnbinds=null,this.$firestoreRefs=null}})}},"108f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.addEventListener?t.addEventListener:t.attachEvent;function n(n,r){if("keydown"===n){var i=r;r=function(e){var n=document.getElementsByClassName("pac-item-selected").length>0;if(13===e.which&&!n){var r=document.createEvent("Event");r.keyCode=40,r.which=40,i.apply(t,[r])}i.apply(t,[e])}}e.apply(t,[n,r])}t.addEventListener=n,t.attachEvent=n}},1862:function(t,e,n){"use strict";var r=n("7ded"),i=n("0829"),s=n("1fd5"),o=n("22e5");const a="@firebase/firestore-compat",c="0.1.8";
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
function u(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new i["g"]("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
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
 */function l(){if("undefined"===typeof Uint8Array)throw new i["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(i["r"])())throw new i["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(t){this._delegate=t}static fromBase64String(t){return h(),new d(i["b"].fromBase64String(t))}static fromUint8Array(t){return l(),new d(i["b"].fromUint8Array(t))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
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
 */function f(t){return p(t,["next","error","complete"])}function p(t,e){if("object"!==typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"===typeof n[r])return!0;return!1}
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
 */class m{enableIndexedDbPersistence(t,e){return Object(i["F"])(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Object(i["G"])(t._delegate)}clearIndexedDbPersistence(t){return Object(i["x"])(t._delegate)}}class g{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof i["m"]||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||Object(i["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,n={}){Object(i["A"])(this._delegate,t,e,n)}enableNetwork(){return Object(i["H"])(this._delegate)}disableNetwork(){return Object(i["D"])(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,Object(i["t"])("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(i["lb"])(this._delegate)}onSnapshotsInSync(t){return Object(i["Y"])(this._delegate,t)}get app(){if(!this._appCompat)throw new i["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new N(this,Object(i["y"])(this._delegate,t))}catch(e){throw T(e,"collection()","Firestore.collection()")}}doc(t){try{return new E(this,Object(i["E"])(this._delegate,t))}catch(e){throw T(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new k(this,Object(i["z"])(this._delegate,t))}catch(e){throw T(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return Object(i["db"])(this._delegate,e=>t(new b(this,e)))}batch(){return Object(i["K"])(this._delegate),new w(new i["l"](this._delegate,t=>Object(i["L"])(this._delegate,t)))}loadBundle(t){return Object(i["V"])(this._delegate,t)}namedQuery(t){return Object(i["W"])(this._delegate,t).then(t=>t?new k(this,t):null)}}class y extends i["a"]{constructor(t){super(),this.firestore=t}convertBytes(t){return new d(new i["b"](t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return E.forKey(e,this.firestore,null)}}function v(t){Object(i["gb"])(t)}class b{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new y(t)}get(t){const e=D(t);return this._delegate.get(e).then(t=>new A(this._firestore,new i["e"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter)))}set(t,e,n){const r=D(t);return n?(u("Transaction.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const i=D(t);return 2===arguments.length?this._delegate.update(i,e):this._delegate.update(i,e,n,...r),this}delete(t){const e=D(t);return this._delegate.delete(e),this}}class w{constructor(t){this._delegate=t}set(t,e,n){const r=D(t);return n?(u("WriteBatch.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const i=D(t);return 2===arguments.length?this._delegate.update(i,e):this._delegate.update(i,e,n,...r),this}delete(t){const e=D(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class _{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new i["i"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new O(this._firestore,n),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=_.INSTANCES;let r=n.get(t);r||(r=new WeakMap,n.set(t,r));let i=r.get(e);return i||(i=new _(t,new y(t),e),r.set(e,i)),i}}_.INSTANCES=new WeakMap;class E{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new y(t)}static forPath(t,e,n){if(t.length%2!==0)throw new i["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new E(e,new i["d"](e._delegate,n,new i["n"](t)))}static forKey(t,e,n){return new E(e,new i["d"](e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new N(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new N(this.firestore,Object(i["y"])(this._delegate,t))}catch(e){throw T(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=Object(s["i"])(t),t instanceof i["d"]&&Object(i["cb"])(this._delegate,t)}set(t,e){e=u("DocumentReference.set",e);try{return e?Object(i["fb"])(this._delegate,t,e):Object(i["fb"])(this._delegate,t)}catch(n){throw T(n,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?Object(i["kb"])(this._delegate,t):Object(i["kb"])(this._delegate,t,e,...n)}catch(r){throw T(r,"updateDoc()","DocumentReference.update()")}}delete(){return Object(i["B"])(this._delegate)}onSnapshot(...t){const e=I(t),n=S(t,t=>new A(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)));return Object(i["X"])(this._delegate,e,n)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(i["N"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(i["O"])(this._delegate):Object(i["M"])(this._delegate),e.then(t=>new A(this.firestore,new i["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)))}withConverter(t){return new E(this.firestore,t?this._delegate.withConverter(_.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function T(t,e,n){return t.message=t.message.replace(e,n),t}function I(t){for(const e of t)if("object"===typeof e&&!f(e))return e;return{}}function S(t,e){var n,r;let i;return i=f(t[0])?t[0]:f(t[1])?t[1]:"function"===typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{i.next&&i.next(e(t))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class A{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new E(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return Object(i["hb"])(this._delegate,t._delegate)}}class O extends A{data(t){const e=this._delegate.data(t);return Object(i["q"])(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class k{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new y(t)}where(t,e,n){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["mb"])(t,e,n)))}catch(r){throw T(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["Z"])(t,e)))}catch(n){throw T(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["T"])(t)))}catch(e){throw T(e,"limit()","Query.limit()")}}limitToLast(t){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["U"])(t)))}catch(e){throw T(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["jb"])(...t)))}catch(e){throw T(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["ib"])(...t)))}catch(e){throw T(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["J"])(...t)))}catch(e){throw T(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new k(this.firestore,Object(i["ab"])(this._delegate,Object(i["I"])(...t)))}catch(e){throw T(e,"endAt()","Query.endAt()")}}isEqual(t){return Object(i["bb"])(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(i["Q"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(i["R"])(this._delegate):Object(i["P"])(this._delegate),e.then(t=>new x(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)))}onSnapshot(...t){const e=I(t),n=S(t,t=>new x(this.firestore,new i["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)));return Object(i["X"])(this._delegate,e,n)}withConverter(t){return new k(this.firestore,t?this._delegate.withConverter(_.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class C{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new O(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class x{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new k(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(t=>new O(this._firestore,t))}docChanges(t){return this._delegate.docChanges(t).map(t=>new C(this._firestore,t))}forEach(t,e){this._delegate.forEach(n=>{t.call(e,new O(this._firestore,n))})}isEqual(t){return Object(i["hb"])(this._delegate,t._delegate)}}class N extends k{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new E(this.firestore,t):null}doc(t){try{return new E(this.firestore,void 0===t?Object(i["E"])(this._delegate):Object(i["E"])(this._delegate,t))}catch(e){throw T(e,"doc()","CollectionReference.doc()")}}add(t){return Object(i["u"])(this._delegate,t).then(t=>new E(this.firestore,t))}isEqual(t){return Object(i["cb"])(this._delegate,t._delegate)}withConverter(t){return new N(this.firestore,t?this._delegate.withConverter(_.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function D(t){return Object(i["p"])(t,i["d"])}
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
 */class R{constructor(...t){this._delegate=new i["f"](...t)}static documentId(){return new R(i["o"].keyField().canonicalString())}isEqual(t){return t=Object(s["i"])(t),t instanceof i["f"]&&this._delegate._internalPath.isEqual(t._internalPath)}}
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
 */class P{constructor(t){this._delegate=t}static serverTimestamp(){const t=Object(i["eb"])();return t._methodName="FieldValue.serverTimestamp",new P(t)}static delete(){const t=Object(i["C"])();return t._methodName="FieldValue.delete",new P(t)}static arrayUnion(...t){const e=Object(i["w"])(...t);return e._methodName="FieldValue.arrayUnion",new P(e)}static arrayRemove(...t){const e=Object(i["v"])(...t);return e._methodName="FieldValue.arrayRemove",new P(e)}static increment(t){const e=Object(i["S"])(t);return e._methodName="FieldValue.increment",new P(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
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
 */const L={Firestore:g,GeoPoint:i["h"],Timestamp:i["k"],Blob:d,Transaction:b,WriteBatch:w,DocumentReference:E,DocumentSnapshot:A,Query:k,QueryDocumentSnapshot:O,QuerySnapshot:x,CollectionReference:N,FieldPath:R,FieldValue:P,setLogLevel:v,CACHE_SIZE_UNLIMITED:i["c"]};function j(t,e){t.INTERNAL.registerComponent(new o["a"]("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("firestore").getImmediate();return e(n,r)},"PUBLIC").setServiceProps(Object.assign({},L)))}
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
 */function M(t){j(t,(t,e)=>new g(t,e,new m)),t.registerVersion(a,c)}M(r["a"])},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return I})),n.d(e,"d",(function(){return k})),n.d(e,"e",(function(){return h})),n.d(e,"f",(function(){return N})),n.d(e,"g",(function(){return C})),n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return L})),n.d(e,"j",(function(){return d})),n.d(e,"k",(function(){return m})),n.d(e,"l",(function(){return g})),n.d(e,"m",(function(){return v})),n.d(e,"n",(function(){return b})),n.d(e,"o",(function(){return E})),n.d(e,"p",(function(){return f})),n.d(e,"q",(function(){return y})),n.d(e,"r",(function(){return _})),n.d(e,"s",(function(){return w}));
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
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,l=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==l){const t=c<<6&192|l;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
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
 */function c(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&u(n)&&(t[n]=c(t[n],e[n]));return t}function u(t){return"__proto__"!==t}
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
 */class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
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
 */function h(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
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
 */function d(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())}function p(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function m(){return"object"===typeof self&&self.self===self}function g(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function v(){return d().indexOf("Electron/")>=0}function b(){const t=d();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function w(){return d().indexOf("MSAppHost/")>=0}function _(){return!p()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function E(){return"object"===typeof indexedDB}
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
const T="FirebaseError";class I extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=T,Object.setPrototypeOf(this,I.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?A(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new I(r,o,n);return a}}function A(t,e){return t.replace(O,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const O=/\{\$([^}]+)}/g;
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
function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function C(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(x(n)&&x(s)){if(!C(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function x(t){return null!==t&&"object"===typeof t}
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
 */function N(t,e){const n=new D(t,e);return n.subscribe.bind(n)}class D{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=R(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function R(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function P(){}
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
function L(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("1fd5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const s="[DEFAULT]";
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"24ee":function(t,e,n){"use strict";var r=n("7ded"),i=n("589b"),s=n("1fd5"),o=n("22e5");
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
const a="firebasestorage.googleapis.com",c="storageBucket",u=12e4,l=6e5;class h extends s["c"]{constructor(t,e){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(t){return"storage/"+t}function f(){const t="An unknown error occurred, please check the error payload for server response.";return new h("unknown",t)}function p(t){return new h("object-not-found","Object '"+t+"' does not exist.")}function m(t){return new h("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",t)}function y(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(t){return new h("unauthorized","User does not have permission to access '"+t+"'.")}function b(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w(){return new h("canceled","User canceled the upload/download.")}function _(t){return new h("invalid-url","Invalid URL '"+t+"'.")}function E(t){return new h("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function T(){return new h("no-default-bucket","No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function I(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function S(){return new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function A(){return new h("no-download-url","The given file does not have any download URLs.")}function O(t){return new h("invalid-argument",t)}function k(){return new h("app-deleted","The Firebase app was deleted.")}function C(t){return new h("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function x(t,e){return new h("invalid-format","String does not match format '"+t+"': "+e)}function N(t){throw new h("internal-error","Internal error: "+t)}
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
 */class D{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=D.makeFromUrl(t,e)}catch(r){return new D(t,"")}if(""===n.path)return n;throw E(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=e===a?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",y=new RegExp(`^https?://${m}/${r}/${g}`,"i"),v={bucket:1,path:2},b=[{regex:o,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:y,indices:v,postModify:u}];for(let a=0;a<b.length;a++){const e=b[a],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new D(t,i),e.postModify(n);break}}if(null==n)throw _(t);return n}}class R{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function P(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout(()=>{i=null,t(f,c())},e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(u)return void d();if(t)return d(),void l.call(null,t,...e);const n=c()||o;if(n)return d(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(t){p||(p=!0,d(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function L(t){t(!1)}
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
 */function j(t){return void 0!==t}function M(t){return"function"===typeof t}function $(t){return"object"===typeof t&&!Array.isArray(t)}function F(t){return"string"===typeof t||t instanceof String}function U(t){return V()&&t instanceof Blob}function V(){return"undefined"!==typeof Blob}function q(t,e,n,r){if(r<e)throw O(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw O(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function B(t,e,n){let r=e;return null==n&&(r="https://"+e),`${n}://${r}/v0${t}`}function z(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
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
 */var K;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(K||(K={}));
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
class H{constructor(t,e,n,r,i,s,o,a,c,u,l){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=(t,e)=>{if(e)return void t(!1,new G(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===K.NO_ERROR,i=n.getStatus();if(!e||this.isRetryStatusCode_(i)){const e=n.getErrorCode()===K.ABORT;return void t(!1,new G(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new G(s,n))})},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());j(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=f();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?k():w();r(t)}else{const t=b();r(t)}};this.canceled_?e(!1,new G(!1,null,!0)):this.backoffId_=P(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&L(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],r=-1!==n.indexOf(t),i=-1!==this.additionalRetryCodes_.indexOf(t);return e||r||i}}class G{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function W(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function Q(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function X(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Y(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function J(t,e,n,r,i,s){const o=z(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return X(c,e),W(c,n),Q(c,s),Y(c,r),new H(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}
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
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=Z();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(V())return new Blob(t);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
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
 */function nt(t){return atob(t)}
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
 */const rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class it{constructor(t,e){this.data=t,this.contentType=e||null}}function st(t,e){switch(t){case rt.RAW:return new it(ot(e));case rt.BASE64:case rt.BASE64URL:return new it(ct(t,e));case rt.DATA_URL:return new it(lt(e),ht(e))}throw f()}function ot(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(i){const i=r,s=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320===(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function at(t){let e;try{e=decodeURIComponent(t)}catch(n){throw x(rt.DATA_URL,"Malformed data URL.")}return ot(e)}function ct(t,e){switch(t){case rt.BASE64:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){const e=n?"-":"_";throw x(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case rt.BASE64URL:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){const e=n?"+":"/";throw x(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nt(e)}catch(i){throw x(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class ut{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw x(rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=dt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function lt(t){const e=new ut(t);return e.base64?ct(rt.BASE64,e.rest):at(e.rest)}function ht(t){const e=new ut(t);return e.contentType}function dt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
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
 */class ft{constructor(t,e){let n=0,r="";U(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(U(this.data_)){const n=this.data_,r=et(n,t,e);return null===r?null:new ft(r)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ft(n,!0)}}static getBlob(...t){if(V()){const e=t.map(t=>t instanceof ft?t.data_:t);return new ft(tt.apply(null,e))}{const e=t.map(t=>F(t)?st(rt.RAW,t).data:t.data_);let n=0;e.forEach(t=>{n+=t.byteLength});const r=new Uint8Array(n);let i=0;return e.forEach(t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]}),new ft(r,!0)}}uploadData(){return this.data_}}
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
 */function pt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return $(e)?e:null}
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
 */function mt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function gt(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}function yt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
 */function vt(t,e){return e}class bt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||vt}}let wt=null;function _t(t){return!F(t)||t.length<2?t:yt(t)}function Et(){if(wt)return wt;const t=[];function e(t,e){return _t(e)}t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));const n=new bt("name");function r(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const i=new bt("size");return i.xform=r,t.push(i),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),wt=t,wt}function Tt(t,e){function n(){const n=t["bucket"],r=t["fullPath"],i=new D(n,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function It(t,e,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const t=n[s];r[t.local]=t.xform(r,e[t.server])}return Tt(r,t),r}function St(t,e,n){const r=pt(e);if(null===r)return null;const i=r;return It(t,i,n)}function At(t,e,n,r){const i=pt(e);if(null===i)return null;if(!F(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map(e=>{const i=t["bucket"],s=t["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=B(a,n,r),u=z({alt:"media",token:e});return c+u});return c[0]}function Ot(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
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
 */const kt="prefixes",Ct="items";function xt(t,e,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[kt])for(const i of n[kt]){const n=i.replace(/\/$/,""),s=t._makeStorageReference(new D(e,n));r.prefixes.push(s)}if(n[Ct])for(const i of n[Ct]){const n=t._makeStorageReference(new D(e,i["name"]));r.items.push(n)}return r}function Nt(t,e,n){const r=pt(n);if(null===r)return null;const i=r;return xt(t,e,i)}class Dt{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function Rt(t){if(!t)throw f()}function Pt(t,e){function n(n,r){const i=St(t,r,e);return Rt(null!==i),i}return n}function Lt(t,e){function n(n,r){const i=Nt(t,e,r);return Rt(null!==i),i}return n}function jt(t,e){function n(n,r){const i=St(t,r,e);return Rt(null!==i),At(i,r,t.host,t._protocol)}return n}function Mt(t){function e(e,n){let r;return r=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?y():g():402===e.getStatus()?m(t.bucket):403===e.getStatus()?v(t.path):n,r.serverResponse=n.serverResponse,r}return e}function $t(t){const e=Mt(t);function n(n,r){let i=e(n,r);return 404===n.getStatus()&&(i=p(t.path)),i.serverResponse=r.serverResponse,i}return n}function Ft(t,e,n){const r=e.fullServerUrl(),i=B(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Dt(i,s,Pt(t,n),o);return a.errorHandler=$t(e),a}function Ut(t,e,n,r,i){const s={};e.isRoot?s["prefix"]="":s["prefix"]=e.path+"/",n&&n.length>0&&(s["delimiter"]=n),r&&(s["pageToken"]=r),i&&(s["maxResults"]=i);const o=e.bucketOnlyServerUrl(),a=B(o,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new Dt(a,c,Lt(t,e.bucket),u);return l.urlParams=s,l.errorHandler=Mt(e),l}function Vt(t,e,n){const r=e.fullServerUrl(),i=B(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Dt(i,s,jt(t,n),o);return a.errorHandler=$t(e),a}function qt(t,e,n,r){const i=e.fullServerUrl(),s=B(i,t.host,t._protocol),o="PATCH",a=Ot(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,l=new Dt(s,o,Pt(t,r),u);return l.headers=c,l.body=a,l.errorHandler=$t(e),l}function Bt(t,e){const n=e.fullServerUrl(),r=B(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(t,e){}const a=new Dt(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=$t(e),a}function zt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Kt(t,e,n){const r=Object.assign({},n);return r["fullPath"]=t.path,r["size"]=e.size(),r["contentType"]||(r["contentType"]=zt(null,e)),r}function Ht(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Kt(e,r,i),l=Ot(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=ft.getBlob(h,r,d);if(null===f)throw I();const p={name:u["fullPath"]},m=B(s,t.host,t._protocol),g="POST",y=t.maxUploadRetryTime,v=new Dt(m,g,Pt(t,n),y);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=Mt(e),v}class Gt{constructor(t,e,n,r){this.current=t,this.total=e,this.finalized=!!n,this.metadata=r||null}}function Wt(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(i){Rt(!1)}const r=e||["active"];return Rt(!!n&&-1!==r.indexOf(n)),n}function Qt(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=Kt(e,r,i),a={name:o["fullPath"]},c=B(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+r.size(),"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Ot(o,n),d=t.maxUploadRetryTime;function f(t){let e;Wt(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){Rt(!1)}return Rt(F(e)),e}const p=new Dt(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Mt(e),p}function Xt(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(t){const e=Wt(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){Rt(!1)}n||Rt(!1);const i=Number(n);return Rt(!isNaN(i)),new Gt(i,r.size(),"final"===e)}const o="POST",a=t.maxUploadRetryTime,c=new Dt(n,o,s,a);return c.headers=i,c.errorHandler=Mt(e),c}const Yt=262144;function Jt(t,e,n,r,i,s,o,a){const c=new Gt(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw S();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l,f=l===u?"upload, finalize":"upload",p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":""+c.current},m=r.slice(h,d);if(null===m)throw I();function g(t,n){const i=Wt(t,["active","final"]),o=c.current+l,a=r.size();let u;return u="final"===i?Pt(e,s)(t,n):null,new Gt(o,a,"final"===i,u)}const y="POST",v=e.maxUploadRetryTime,b=new Dt(n,y,g,v);return b.headers=p,b.body=m.uploadData(),b.progressCallback=a||null,b.errorHandler=Mt(t),b}
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
 */const Zt={STATE_CHANGED:"state_changed"},te={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ee(t){switch(t){case"running":case"pausing":case"canceling":return te.RUNNING;case"paused":return te.PAUSED;case"success":return te.SUCCESS;case"canceled":return te.CANCELED;case"error":return te.ERROR;default:return te.ERROR}}
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
 */class ne{constructor(t,e,n){const r=M(t)||null!=e||null!=n;if(r)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
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
 */function re(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}
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
 */let ie=null;class se{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=K.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=K.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=K.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,r){if(this.sent_)throw N("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw N("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw N("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw N("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw N("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class oe extends se{initXhr(){this.xhr_.responseType="text"}}function ae(){return ie?ie():new oe}
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
class ce{constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=Et(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{this._request=void 0,this._chunkMultiplier=1,t._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=t,this._transition("error"))},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals("canceled")?this.completeTransitions_():(this._error=t,this._transition("error"))},this._promise=new Promise((t,e)=>{this._resolve=t,this._reject=e,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const n=Qt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ae,t,e);this._request=r,r.getPromise().then(t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,n)=>{const r=Xt(this._ref.storage,this._ref._location,t,this._blob),i=this._ref.storage._makeRequest(r,ae,e,n);this._request=i,i.getPromise().then(t=>{t=t,this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Yt*this._chunkMultiplier,e=new Gt(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,i)=>{let s;try{s=Jt(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,ae,r,i);this._request=o,o.getPromise().then(t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){const t=Yt*this._chunkMultiplier;t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const n=Ft(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,ae,t,e);this._request=r,r.getPromise().then(t=>{this._request=void 0,this._metadata=t,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const n=Ht(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ae,t,e);this._request=r,r.getPromise().then(t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":this._state=t,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=t,void 0!==this._request&&this._request.cancel();break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=w(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=ee(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,r){const i=new ne(e||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(ee(this._state)){case te.SUCCESS:re(this._resolve.bind(null,this.snapshot))();break;case te.CANCELED:case te.ERROR:const e=this._reject;re(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=ee(this._state);switch(e){case te.RUNNING:case te.PAUSED:t.next&&re(t.next.bind(t,this.snapshot))();break;case te.SUCCESS:t.complete&&re(t.complete.bind(t))();break;case te.CANCELED:case te.ERROR:t.error&&re(t.error.bind(t,this._error))();break;default:t.error&&re(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
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
 */class ue{constructor(t,e){this._service=t,this._location=e instanceof D?e:D.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ue(t,e)}get root(){const t=new D(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return yt(this._location.path)}get storage(){return this._service}get parent(){const t=mt(this._location.path);if(null===t)return null;const e=new D(this._location.bucket,t);return new ue(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw C(t)}}function le(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new ce(t,new ft(e),n)}function he(t){const e={prefixes:[],items:[]};return de(t,e).then(()=>e)}async function de(t,e,n){const r={pageToken:n},i=await fe(t,r);e.prefixes.push(...i.prefixes),e.items.push(...i.items),null!=i.nextPageToken&&await de(t,e,i.nextPageToken)}function fe(t,e){null!=e&&"number"===typeof e.maxResults&&q("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=Ut(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,ae)}function pe(t){t._throwIfRoot("getMetadata");const e=Ft(t.storage,t._location,Et());return t.storage.makeRequestWithTokens(e,ae)}function me(t,e){t._throwIfRoot("updateMetadata");const n=qt(t.storage,t._location,e,Et());return t.storage.makeRequestWithTokens(n,ae)}function ge(t){t._throwIfRoot("getDownloadURL");const e=Vt(t.storage,t._location,Et());return t.storage.makeRequestWithTokens(e,ae).then(t=>{if(null===t)throw A();return t})}function ye(t){t._throwIfRoot("deleteObject");const e=Bt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ae)}function ve(t,e){const n=gt(t._location.path,e),r=new D(t._location.bucket,n);return new ue(t.storage,r)}
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
 */function be(t){return/^[A-Za-z]+:\/\//.test(t)}function we(t,e){return new ue(t,e)}function _e(t,e){if(t instanceof Se){const n=t;if(null==n._bucket)throw T();const r=new ue(n,n._bucket);return null!=e?_e(r,e):r}return void 0!==e?ve(t,e):t}function Ee(t,e){if(e&&be(e)){if(t instanceof Se)return we(t,e);throw O("To use ref(service, url), the first argument must be a Storage instance.")}return _e(t,e)}function Te(t,e){const n=null===e||void 0===e?void 0:e[c];return null==n?null:D.makeFromBucketSpec(n,t)}function Ie(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken="string"===typeof i?i:Object(s["e"])(i,t.app.options.projectId))}class Se{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=r?D.makeFromBucketSpec(r,this._host):Te(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=D.makeFromBucketSpec(this._url,t):this._bucket=Te(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){q("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){q("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ue(this,t)}_makeRequest(t,e,n,r){if(this._deleted)return new R(k());{const i=J(t,this._appId,n,r,e,this._firebaseVersion);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const Ae="@firebase/storage",Oe="0.9.0",ke="storage";function Ce(t,e,n){return t=Object(s["i"])(t),le(t,e,n)}function xe(t){return t=Object(s["i"])(t),pe(t)}function Ne(t,e){return t=Object(s["i"])(t),me(t,e)}function De(t,e){return t=Object(s["i"])(t),fe(t,e)}function Re(t){return t=Object(s["i"])(t),he(t)}function Pe(t){return t=Object(s["i"])(t),ge(t)}function Le(t){return t=Object(s["i"])(t),ye(t)}function je(t,e){return t=Object(s["i"])(t),Ee(t,e)}function Me(t,e){return ve(t,e)}function $e(t,e,n,r={}){Ie(t,e,n,r)}
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
 */function Fe(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Se(n,r,s,e,i["SDK_VERSION"])}function Ue(){Object(i["_registerComponent"])(new o["a"](ke,Fe,"PUBLIC").setMultipleInstances(!0)),Object(i["registerVersion"])(Ae,Oe,""),Object(i["registerVersion"])(Ae,Oe,"esm2017")}Ue();
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
class Ve{constructor(t,e,n){this._delegate=t,this.task=e,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
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
 */class qe{constructor(t,e){this._delegate=t,this._ref=e,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ve(this._delegate.snapshot,this,this._ref)}then(t,e){return this._delegate.then(e=>{if(t)return t(new Ve(e,this,this._ref))},e)}on(t,e,n,r){let i=void 0;return e&&(i="function"===typeof e?t=>e(new Ve(t,this,this._ref)):{next:e.next?t=>e.next(new Ve(t,this,this._ref)):void 0,complete:e.complete||void 0,error:e.error||void 0}),this._delegate.on(t,i,n||void 0,r||void 0)}}class Be{constructor(t,e){this._delegate=t,this._service=e}get prefixes(){return this._delegate.prefixes.map(t=>new ze(t,this._service))}get items(){return this._delegate.items.map(t=>new ze(t,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e){this._delegate=t,this.storage=e}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(t){const e=Me(this._delegate,t);return new ze(e,this.storage)}get root(){return new ze(this._delegate.root,this.storage)}get parent(){const t=this._delegate.parent;return null==t?null:new ze(t,this.storage)}put(t,e){return this._throwIfRoot("put"),new qe(Ce(this._delegate,t,e),this)}putString(t,e=rt.RAW,n){this._throwIfRoot("putString");const r=st(e,t),i=Object.assign({},n);return null==i["contentType"]&&null!=r.contentType&&(i["contentType"]=r.contentType),new qe(new ce(this._delegate,new ft(r.data,!0),i),this)}listAll(){return Re(this._delegate).then(t=>new Be(t,this.storage))}list(t){return De(this._delegate,t||void 0).then(t=>new Be(t,this.storage))}getMetadata(){return xe(this._delegate)}updateMetadata(t){return Ne(this._delegate,t)}getDownloadURL(){return Pe(this._delegate)}delete(){return this._throwIfRoot("delete"),Le(this._delegate)}_throwIfRoot(t){if(""===this._delegate._location.path)throw C(t)}}
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
 */class Ke{constructor(t,e){this.app=t,this._delegate=e}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(t){if(He(t))throw O("ref() expected a child path but got a URL, use refFromURL instead.");return new ze(je(this._delegate,t),this)}refFromURL(t){if(!He(t))throw O("refFromURL() expected a full URL but got a child path, use ref() instead.");try{D.makeFromUrl(t,this._delegate.host)}catch(e){throw O("refFromUrl() expected a valid full URL but got an invalid one.")}return new ze(je(this._delegate,t),this)}setMaxUploadRetryTime(t){this._delegate.maxUploadRetryTime=t}setMaxOperationRetryTime(t){this._delegate.maxOperationRetryTime=t}useEmulator(t,e,n={}){$e(this._delegate,t,e,n)}}function He(t){return/^[A-Za-z]+:\/\//.test(t)}const Ge="@firebase/storage-compat",We="0.1.8",Qe="storage-compat";function Xe(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e}),i=new Ke(n,r);return i}function Ye(t){const e={TaskState:te,TaskEvent:Zt,StringFormat:rt,Storage:Ke,Reference:ze};t.INTERNAL.registerComponent(new o["a"](Qe,Xe,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(Ge,We)}Ye(r["a"])},2789:function(t,e,n){"use strict";n("fe81")},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,s,o,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=a?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return r}))},"2adb":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getPropsValues=a,e.bindProps=c;var r=n("034d"),i=s(r);function s(t){return t&&t.__esModule?t:{default:t}}function o(t){return t.charAt(0).toUpperCase()+t.slice(1)}function a(t,e){return Object.keys(e).reduce((function(e,n){return void 0!==t[n]&&(e[n]=t[n]),e}),{})}function c(t,e,n){var r=function(r){var s=n[r],a=s.twoWay,c=s.type,u=s.trackProperties,l=s.noBind;if(l)return"continue";var h="set"+o(r),d="get"+o(r),f=r.toLowerCase()+"_changed",p=t[r];if("undefined"===typeof e[h])throw new Error(h+" is not a method of (the Maps object corresponding to) "+t.$options._componentTag);c===Object&&u?(0,i.default)(t,u.map((function(t){return r+"."+t})),(function(){e[h](t[r])}),void 0!==t[r]):t.$watch(r,(function(){var n=t[r];e[h](n)}),{immediate:"undefined"!==typeof p,deep:c===Object}),a&&(t.$gmapOptions.autobindAllEvents||t.$listeners[f])&&e.addListener(f,(function(){t.$emit(f,e[d]())}))};for(var s in n)r(s)}},"2b0e":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function s(t){return!0===t}function o(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function l(t){return"[object Object]"===u.call(t)}function h(t){return"[object RegExp]"===u.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function m(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function v(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function w(t,e){return b.call(t,e)}function _(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var E=/-(\w)/g,T=_((function(t){return t.replace(E,(function(t,e){return e?e.toUpperCase():""}))})),I=_((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),S=/\B([A-Z])/g,A=_((function(t){return t.replace(S,"-$1").toLowerCase()}));function O(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function k(t,e){return t.bind(e)}var C=Function.prototype.bind?k:O;function x(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function N(t,e){for(var n in e)t[n]=e[n];return t}function D(t){for(var e={},n=0;n<t.length;n++)t[n]&&N(e,t[n]);return e}function R(t,e,n){}var P=function(t,e,n){return!1},L=function(t){return t};function j(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),s=Array.isArray(e);if(i&&s)return t.length===e.length&&t.every((function(t,n){return j(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return j(t[n],e[n])}))}catch(u){return!1}}function M(t,e){for(var n=0;n<t.length;n++)if(j(t[n],e))return n;return-1}function $(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var F="data-server-rendered",U=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:P,isReservedAttr:P,isUnknownElement:P,getTagNamespace:R,parsePlatformTagName:L,mustUseProp:P,async:!0,_lifecycleHooks:V},B=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function K(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=new RegExp("[^"+B.source+".$_\\d]");function G(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var W,Q="__proto__"in{},X="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,J=Y&&WXEnvironment.platform.toLowerCase(),Z=X&&window.navigator.userAgent.toLowerCase(),tt=Z&&/msie|trident/.test(Z),et=Z&&Z.indexOf("msie 9.0")>0,nt=Z&&Z.indexOf("edge/")>0,rt=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===J),it=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),st={}.watch,ot=!1;if(X)try{var at={};Object.defineProperty(at,"passive",{get:function(){ot=!0}}),window.addEventListener("test-passive",null,at)}catch(Io){}var ct=function(){return void 0===W&&(W=!X&&!Y&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),W},ut=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function lt(t){return"function"===typeof t&&/native code/.test(t.toString())}var ht,dt="undefined"!==typeof Symbol&&lt(Symbol)&&"undefined"!==typeof Reflect&&lt(Reflect.ownKeys);ht="undefined"!==typeof Set&&lt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ft=R,pt=0,mt=function(){this.id=pt++,this.subs=[]};mt.prototype.addSub=function(t){this.subs.push(t)},mt.prototype.removeSub=function(t){v(this.subs,t)},mt.prototype.depend=function(){mt.target&&mt.target.addDep(this)},mt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},mt.target=null;var gt=[];function yt(t){gt.push(t),mt.target=t}function vt(){gt.pop(),mt.target=gt[gt.length-1]}var bt=function(t,e,n,r,i,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},wt={child:{configurable:!0}};wt.child.get=function(){return this.componentInstance},Object.defineProperties(bt.prototype,wt);var _t=function(t){void 0===t&&(t="");var e=new bt;return e.text=t,e.isComment=!0,e};function Et(t){return new bt(void 0,void 0,void 0,String(t))}function Tt(t){var e=new bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var It=Array.prototype,St=Object.create(It),At=["push","pop","shift","unshift","splice","sort","reverse"];At.forEach((function(t){var e=It[t];K(St,t,(function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),s}))}));var Ot=Object.getOwnPropertyNames(St),kt=!0;function Ct(t){kt=t}var xt=function(t){this.value=t,this.dep=new mt,this.vmCount=0,K(t,"__ob__",this),Array.isArray(t)?(Q?Nt(t,St):Dt(t,St,Ot),this.observeArray(t)):this.walk(t)};function Nt(t,e){t.__proto__=e}function Dt(t,e,n){for(var r=0,i=n.length;r<i;r++){var s=n[r];K(t,s,e[s])}}function Rt(t,e){var n;if(c(t)&&!(t instanceof bt))return w(t,"__ob__")&&t.__ob__ instanceof xt?n=t.__ob__:kt&&!ct()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new xt(t)),e&&n&&n.vmCount++,n}function Pt(t,e,n,r,i){var s=new mt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!i&&Rt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return mt.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Mt(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||a&&!c||(c?c.call(t,e):n=e,u=!i&&Rt(e),s.notify())}})}}function Lt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Pt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function jt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function Mt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Mt(e)}xt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Pt(t,e[n])},xt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Rt(t[e])};var $t=q.optionMergeStrategies;function Ft(t,e){if(!e)return t;for(var n,r,i,s=dt?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(r=t[n],i=e[n],w(t,n)?r!==i&&l(r)&&l(i)&&Ft(r,i):Lt(t,n,i));return t}function Ut(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?Ft(r,i):i}:e?t?function(){return Ft("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Vt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?qt(n):n}function qt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Bt(t,e,n,r){var i=Object.create(t||null);return e?N(i,e):i}$t.data=function(t,e,n){return n?Ut(t,e,n):e&&"function"!==typeof e?t:Ut(t,e)},V.forEach((function(t){$t[t]=Vt})),U.forEach((function(t){$t[t+"s"]=Bt})),$t.watch=function(t,e,n,r){if(t===st&&(t=void 0),e===st&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var s in N(i,t),e){var o=i[s],a=e[s];o&&!Array.isArray(o)&&(o=[o]),i[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return i},$t.props=$t.methods=$t.inject=$t.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return N(i,t),e&&N(i,e),i},$t.provide=Ut;var zt=function(t,e){return void 0===e?t:e};function Kt(t,e){var n=t.props;if(n){var r,i,s,o={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(s=T(i),o[s]={type:null})}else if(l(n))for(var a in n)i=n[a],s=T(a),o[s]=l(i)?i:{type:i};else 0;t.props=o}}function Ht(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var s in n){var o=n[s];r[s]=l(o)?N({from:s},o):{from:o}}else 0}}function Gt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Wt(t,e,n){if("function"===typeof e&&(e=e.options),Kt(e,n),Ht(e,n),Gt(e),!e._base&&(e.extends&&(t=Wt(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Wt(t,e.mixins[r],n);var s,o={};for(s in t)a(s);for(s in e)w(t,s)||a(s);function a(r){var i=$t[r]||zt;o[r]=i(t[r],e[r],n,r)}return o}function Qt(t,e,n,r){if("string"===typeof n){var i=t[e];if(w(i,n))return i[n];var s=T(n);if(w(i,s))return i[s];var o=I(s);if(w(i,o))return i[o];var a=i[n]||i[s]||i[o];return a}}function Xt(t,e,n,r){var i=e[t],s=!w(n,t),o=n[t],a=ee(Boolean,i.type);if(a>-1)if(s&&!w(i,"default"))o=!1;else if(""===o||o===A(t)){var c=ee(String,i.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Yt(r,i,t);var u=kt;Ct(!0),Rt(o),Ct(u)}return o}function Yt(t,e,n){if(w(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Zt(e.type)?r.call(t):r}}var Jt=/^\s*function (\w+)/;function Zt(t){var e=t&&t.toString().match(Jt);return e?e[1]:""}function te(t,e){return Zt(t)===Zt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(te(e[n],t))return n;return-1}function ne(t,e,n){yt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var s=0;s<i.length;s++)try{var o=!1===i[s].call(r,t,e,n);if(o)return}catch(Io){ie(Io,r,"errorCaptured hook")}}}ie(t,e,n)}finally{vt()}}function re(t,e,n,r,i){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&f(s)&&!s._handled&&(s.catch((function(t){return ne(t,r,i+" (Promise/async)")})),s._handled=!0)}catch(Io){ne(Io,r,i)}return s}function ie(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(Io){Io!==t&&se(Io,null,"config.errorHandler")}se(t,e,n)}function se(t,e,n){if(!X&&!Y||"undefined"===typeof console)throw t;console.error(t)}var oe,ae=!1,ce=[],ue=!1;function le(){ue=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&lt(Promise)){var he=Promise.resolve();oe=function(){he.then(le),rt&&setTimeout(R)},ae=!0}else if(tt||"undefined"===typeof MutationObserver||!lt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())oe="undefined"!==typeof setImmediate&&lt(setImmediate)?function(){setImmediate(le)}:function(){setTimeout(le,0)};else{var de=1,fe=new MutationObserver(le),pe=document.createTextNode(String(de));fe.observe(pe,{characterData:!0}),oe=function(){de=(de+1)%2,pe.data=String(de)},ae=!0}function me(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(Io){ne(Io,e,"nextTick")}else n&&n(e)})),ue||(ue=!0,oe()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ge=new ht;function ye(t){ve(t,ge),ge.clear()}function ve(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof bt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(i){n=t.length;while(n--)ve(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)ve(t[r[n]],e)}}}var be=_((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}));function we(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return re(r,null,arguments,e,"v-on handler");for(var i=r.slice(),s=0;s<i.length;s++)re(i[s],null,t,e,"v-on handler")}return n.fns=t,n}function _e(t,e,n,i,o,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=be(c),r(u)||(r(l)?(r(u.fns)&&(u=t[c]=we(u,a)),s(h.once)&&(u=t[c]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)r(t[c])&&(h=be(c),i(h.name,e[c],h.capture))}function Ee(t,e,n){var o;t instanceof bt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),v(o.fns,c)}r(a)?o=we([c]):i(a.fns)&&s(a.merged)?(o=a,o.fns.push(c)):o=we([a,c]),o.merged=!0,t[e]=o}function Te(t,e,n){var s=e.options.props;if(!r(s)){var o={},a=t.attrs,c=t.props;if(i(a)||i(c))for(var u in s){var l=A(u);Ie(o,c,u,l,!0)||Ie(o,a,u,l,!1)}return o}}function Ie(t,e,n,r,s){if(i(e)){if(w(e,n))return t[n]=e[n],s||delete e[n],!0;if(w(e,r))return t[n]=e[r],s||delete e[r],!0}return!1}function Se(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Ae(t){return a(t)?[Et(t)]:Array.isArray(t)?ke(t):void 0}function Oe(t){return i(t)&&i(t.text)&&o(t.isComment)}function ke(t,e){var n,o,c,u,l=[];for(n=0;n<t.length;n++)o=t[n],r(o)||"boolean"===typeof o||(c=l.length-1,u=l[c],Array.isArray(o)?o.length>0&&(o=ke(o,(e||"")+"_"+n),Oe(o[0])&&Oe(u)&&(l[c]=Et(u.text+o[0].text),o.shift()),l.push.apply(l,o)):a(o)?Oe(u)?l[c]=Et(u.text+o):""!==o&&l.push(Et(o)):Oe(o)&&Oe(u)?l[c]=Et(u.text+o.text):(s(t._isVList)&&i(o.tag)&&r(o.key)&&i(e)&&(o.key="__vlist"+e+"_"+n+"__"),l.push(o)));return l}function Ce(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function xe(t){var e=Ne(t.$options.inject,t);e&&(Ct(!1),Object.keys(e).forEach((function(n){Pt(t,n,e[n])})),Ct(!0))}function Ne(t,e){if(t){for(var n=Object.create(null),r=dt?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var s=r[i];if("__ob__"!==s){var o=t[s].from,a=e;while(a){if(a._provided&&w(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in t[s]){var c=t[s].default;n[s]="function"===typeof c?c.call(e):c}else 0}}return n}}function De(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var s=t[r],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Re)&&delete n[u];return n}function Re(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Pe(t){return t.isComment&&t.asyncFactory}function Le(t,e,r){var i,s=Object.keys(e).length>0,o=t?!!t.$stable:!s,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&r&&r!==n&&a===r.$key&&!s&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=je(e,c,t[c]))}else i={};for(var u in e)u in i||(i[u]=Me(e,u));return t&&Object.isExtensible(t)&&(t._normalized=i),K(i,"$stable",o),K(i,"$key",a),K(i,"$hasNormal",s),i}function je(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Ae(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Pe(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Me(t,e){return function(){return t[e]}}function $e(t,e){var n,r,s,o,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,s=t.length;r<s;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(dt&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)n.push(e(l.value,n.length)),l=u.next()}else for(o=Object.keys(t),n=new Array(o.length),r=0,s=o.length;r<s;r++)a=o[r],n[r]=e(t[a],a,r);return i(n)||(n=[]),n._isVList=!0,n}function Fe(t,e,n,r){var i,s=this.$scopedSlots[t];s?(n=n||{},r&&(n=N(N({},r),n)),i=s(n)||("function"===typeof e?e():e)):i=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function Ue(t){return Qt(this.$options,"filters",t,!0)||L}function Ve(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function qe(t,e,n,r,i){var s=q.keyCodes[e]||n;return i&&r&&!q.keyCodes[e]?Ve(i,r):s?Ve(s,t):r?A(r)!==e:void 0===t}function Be(t,e,n,r,i){if(n)if(c(n)){var s;Array.isArray(n)&&(n=D(n));var o=function(o){if("class"===o||"style"===o||y(o))s=t;else{var a=t.attrs&&t.attrs.type;s=r||q.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=T(o),u=A(o);if(!(c in s)&&!(u in s)&&(s[o]=n[o],i)){var l=t.on||(t.on={});l["update:"+o]=function(t){n[o]=t}}};for(var a in n)o(a)}else;return t}function ze(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e||(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),He(r,"__static__"+t,!1)),r}function Ke(t,e,n){return He(t,"__once__"+e+(n?"_"+n:""),!0),t}function He(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ge(t[r],e+"_"+r,n);else Ge(t,e,n)}function Ge(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function We(t,e){if(e)if(l(e)){var n=t.on=t.on?N({},t.on):{};for(var r in e){var i=n[r],s=e[r];n[r]=i?[].concat(i,s):s}}else;return t}function Qe(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var s=t[i];Array.isArray(s)?Qe(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return r&&(e.$key=r),e}function Xe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ye(t,e){return"string"===typeof t?e+t:t}function Je(t){t._o=Ke,t._n=m,t._s=p,t._l=$e,t._t=Fe,t._q=j,t._i=M,t._m=ze,t._f=Ue,t._k=qe,t._b=Be,t._v=Et,t._e=_t,t._u=Qe,t._g=We,t._d=Xe,t._p=Ye}function Ze(t,e,r,i,o){var a,c=this,u=o.options;w(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var l=s(u._compiled),h=!l;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=Ne(u.inject,i),this.slots=function(){return c.$slots||Le(t.scopedSlots,c.$slots=De(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Le(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Le(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var s=fn(a,t,e,n,r,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=i),s}:this._c=function(t,e,n,r){return fn(a,t,e,n,r,h)}}function tn(t,e,r,s,o){var a=t.options,c={},u=a.props;if(i(u))for(var l in u)c[l]=Xt(l,u,e||n);else i(r.attrs)&&nn(c,r.attrs),i(r.props)&&nn(c,r.props);var h=new Ze(r,c,o,s,t),d=a.render.call(null,h._c,h);if(d instanceof bt)return en(d,r,h.parent,a,h);if(Array.isArray(d)){for(var f=Ae(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=en(f[m],r,h.parent,a,h);return p}}function en(t,e,n,r,i){var s=Tt(t);return s.fnContext=n,s.fnOptions=r,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function nn(t,e){for(var n in e)t[T(n)]=e[n]}Je(Ze.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var r=t.componentInstance=an(t,Nn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;jn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Un(n,"mounted")),t.data.keepAlive&&(e._isMounted?Zn(n):$n(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Fn(e,!0):e.$destroy())}},sn=Object.keys(rn);function on(t,e,n,o,a){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=Tn(l,u),void 0===t))return En(l,e,n,o,a);e=e||{},Er(t),i(e.model)&&ln(t.options,e);var h=Te(e,t,a);if(s(t.options.functional))return tn(t,h,e,n,o);var d=e.on;if(e.on=e.nativeOn,s(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}cn(e);var p=t.options.name||a,m=new bt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:a,children:o},l);return m}}}function an(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<sn.length;n++){var r=sn[n],i=e[r],s=rn[r];i===s||i&&i._merged||(e[r]=i?un(s,i):s)}}function un(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),o=s[r],a=e.model.callback;i(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(s[r]=[a].concat(o)):s[r]=a}var hn=1,dn=2;function fn(t,e,n,r,i,o){return(Array.isArray(n)||a(n))&&(i=r,r=n,n=void 0),s(o)&&(i=dn),pn(t,e,n,r,i)}function pn(t,e,n,r,s){if(i(n)&&i(n.__ob__))return _t();if(i(n)&&i(n.is)&&(e=n.is),!e)return _t();var o,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),s===dn?r=Ae(r):s===hn&&(r=Se(r)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),o=q.isReservedTag(e)?new bt(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(c=Qt(t.$options,"components",e))?new bt(e,n,r,void 0,void 0,t):on(c,n,t,r,e)):o=on(e,n,t,r);return Array.isArray(o)?o:i(o)?(i(a)&&mn(o,a),i(n)&&gn(n),o):_t()}function mn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var o=0,a=t.children.length;o<a;o++){var c=t.children[o];i(c.tag)&&(r(c.ns)||s(n)&&"svg"!==c.tag)&&mn(c,e,n)}}function gn(t){c(t.style)&&ye(t.style),c(t.class)&&ye(t.class)}function yn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=De(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return fn(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return fn(t,e,n,r,i,!0)};var s=r&&r.data;Pt(t,"$attrs",s&&s.attrs||n,null,!0),Pt(t,"$listeners",e._parentListeners||n,null,!0)}var vn,bn=null;function wn(t){Je(t.prototype),t.prototype.$nextTick=function(t){return me(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Le(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{bn=e,t=r.call(e._renderProxy,e.$createElement)}catch(Io){ne(Io,e,"render"),t=e._vnode}finally{bn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof bt||(t=_t()),t.parent=i,t}}function _n(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function En(t,e,n,r,i){var s=_t();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:r,tag:i},s}function Tn(t,e){if(s(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=bn;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),s(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var o=t.owners=[n],a=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return v(o,n)}));var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},d=$((function(n){t.resolved=_n(n,e),a?o.length=0:h(!0)})),p=$((function(e){i(t.errorComp)&&(t.error=!0,h(!0))})),m=t(d,p);return c(m)&&(f(m)?r(t.resolved)&&m.then(d,p):f(m.component)&&(m.component.then(d,p),i(m.error)&&(t.errorComp=_n(m.error,e)),i(m.loading)&&(t.loadingComp=_n(m.loading,e),0===m.delay?t.loading=!0:u=setTimeout((function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,h(!1))}),m.delay||200)),i(m.timeout)&&(l=setTimeout((function(){l=null,r(t.resolved)&&p(null)}),m.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function In(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||Pe(n)))return n}}function Sn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Cn(t,e)}function An(t,e){vn.$on(t,e)}function On(t,e){vn.$off(t,e)}function kn(t,e){var n=vn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function Cn(t,e,n){vn=t,_e(e,n||{},An,On,kn,t),vn=void 0}function xn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,s=t.length;i<s;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var s,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var a=o.length;while(a--)if(s=o[a],s===e||s.fn===e){o.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?x(n):n;for(var r=x(arguments,1),i='event handler for "'+t+'"',s=0,o=n.length;s<o;s++)re(n[s],e,r,e,i)}return e}}var Nn=null;function Dn(t){var e=Nn;return Nn=t,function(){Nn=e}}function Rn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Pn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,s=Dn(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),s(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Un(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||v(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Un(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Ln(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=_t),Un(t,"beforeMount"),r=function(){t._update(t._render(),n)},new rr(t,r,R,{before:function(){t._isMounted&&!t._isDestroyed&&Un(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Un(t,"mounted")),t}function jn(t,e,r,i,s){var o=i.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==n&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),u=!!(s||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=s,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Ct(!1);for(var l=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;l[f]=Xt(f,p,e,t)}Ct(!0),t.$options.propsData=e}r=r||n;var m=t.$options._parentListeners;t.$options._parentListeners=r,Cn(t,r,m),u&&(t.$slots=De(s,i.context),t.$forceUpdate())}function Mn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function $n(t,e){if(e){if(t._directInactive=!1,Mn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)$n(t.$children[n]);Un(t,"activated")}}function Fn(t,e){if((!e||(t._directInactive=!0,!Mn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Un(t,"deactivated")}}function Un(t,e){yt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,s=n.length;i<s;i++)re(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),vt()}var Vn=[],qn=[],Bn={},zn=!1,Kn=!1,Hn=0;function Gn(){Hn=Vn.length=qn.length=0,Bn={},zn=Kn=!1}var Wn=0,Qn=Date.now;if(X&&!tt){var Xn=window.performance;Xn&&"function"===typeof Xn.now&&Qn()>document.createEvent("Event").timeStamp&&(Qn=function(){return Xn.now()})}function Yn(){var t,e;for(Wn=Qn(),Kn=!0,Vn.sort((function(t,e){return t.id-e.id})),Hn=0;Hn<Vn.length;Hn++)t=Vn[Hn],t.before&&t.before(),e=t.id,Bn[e]=null,t.run();var n=qn.slice(),r=Vn.slice();Gn(),tr(n),Jn(r),ut&&q.devtools&&ut.emit("flush")}function Jn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Un(r,"updated")}}function Zn(t){t._inactive=!1,qn.push(t)}function tr(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,$n(t[e],!0)}function er(t){var e=t.id;if(null==Bn[e]){if(Bn[e]=!0,Kn){var n=Vn.length-1;while(n>Hn&&Vn[n].id>t.id)n--;Vn.splice(n+1,0,t)}else Vn.push(t);zn||(zn=!0,me(Yn))}}var nr=0,rr=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++nr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ht,this.newDepIds=new ht,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};rr.prototype.get=function(){var t;yt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Io){if(!this.user)throw Io;ne(Io,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ye(t),vt(),this.cleanupDeps()}return t},rr.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},rr.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},rr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():er(this)},rr.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';re(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},rr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},rr.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},rr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||v(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ir={enumerable:!0,configurable:!0,get:R,set:R};function sr(t,e,n){ir.get=function(){return this[e][n]},ir.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ir)}function or(t){t._watchers=[];var e=t.$options;e.props&&ar(t,e.props),e.methods&&mr(t,e.methods),e.data?cr(t):Rt(t._data={},!0),e.computed&&hr(t,e.computed),e.watch&&e.watch!==st&&gr(t,e.watch)}function ar(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],s=!t.$parent;s||Ct(!1);var o=function(s){i.push(s);var o=Xt(s,e,n,t);Pt(r,s,o),s in t||sr(t,"_props",s)};for(var a in e)o(a);Ct(!0)}function cr(t){var e=t.$options.data;e=t._data="function"===typeof e?ur(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var s=n[i];0,r&&w(r,s)||z(s)||sr(t,"_data",s)}Rt(e,!0)}function ur(t,e){yt();try{return t.call(e,e)}catch(Io){return ne(Io,e,"data()"),{}}finally{vt()}}var lr={lazy:!0};function hr(t,e){var n=t._computedWatchers=Object.create(null),r=ct();for(var i in e){var s=e[i],o="function"===typeof s?s:s.get;0,r||(n[i]=new rr(t,o||R,R,lr)),i in t||dr(t,i,s)}}function dr(t,e,n){var r=!ct();"function"===typeof n?(ir.get=r?fr(e):pr(n),ir.set=R):(ir.get=n.get?r&&!1!==n.cache?fr(e):pr(n.get):R,ir.set=n.set||R),Object.defineProperty(t,e,ir)}function fr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),mt.target&&e.depend(),e.value}}function pr(t){return function(){return t.call(this,this)}}function mr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?R:C(e[n],t)}function gr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)yr(t,n,r[i]);else yr(t,n,r)}}function yr(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function vr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Lt,t.prototype.$delete=jt,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return yr(r,t,e,n);n=n||{},n.user=!0;var i=new rr(r,t,e,n);if(n.immediate){var s='callback for immediate watcher "'+i.expression+'"';yt(),re(e,r,[i.value],r,s),vt()}return function(){i.teardown()}}}var br=0;function wr(t){t.prototype._init=function(t){var e=this;e._uid=br++,e._isVue=!0,t&&t._isComponent?_r(e,t):e.$options=Wt(Er(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Rn(e),Sn(e),yn(e),Un(e,"beforeCreate"),xe(e),or(e),Ce(e),Un(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function _r(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Er(t){var e=t.options;if(t.super){var n=Er(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=Tr(t);i&&N(t.extendOptions,i),e=t.options=Wt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Tr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function Ir(t){this._init(t)}function Sr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=x(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Ar(t){t.mixin=function(t){return this.options=Wt(this.options,t),this}}function Or(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var s=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Wt(n.options,t),o["super"]=n,o.options.props&&kr(o),o.options.computed&&Cr(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,U.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=N({},o.options),i[r]=o,o}}function kr(t){var e=t.options.props;for(var n in e)sr(t.prototype,"_props",n)}function Cr(t){var e=t.options.computed;for(var n in e)dr(t.prototype,n,e[n])}function xr(t){U.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function Nr(t){return t&&(t.Ctor.options.name||t.tag)}function Dr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Rr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&Pr(n,s,r,i)}}}function Pr(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,v(n,e)}wr(Ir),vr(Ir),xn(Ir),Pn(Ir),wn(Ir);var Lr=[String,RegExp,Array],jr={name:"keep-alive",abstract:!0,props:{include:Lr,exclude:Lr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,r=t.vnodeToCache,i=t.keyToCache;if(r){var s=r.tag,o=r.componentInstance,a=r.componentOptions;e[i]={name:Nr(a),tag:s,componentInstance:o},n.push(i),this.max&&n.length>parseInt(this.max)&&Pr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Pr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Rr(t,(function(t){return Dr(e,t)}))})),this.$watch("exclude",(function(e){Rr(t,(function(t){return!Dr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=In(t),n=e&&e.componentOptions;if(n){var r=Nr(n),i=this,s=i.include,o=i.exclude;if(s&&(!r||!Dr(s,r))||o&&r&&Dr(o,r))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,v(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},Mr={KeepAlive:jr};function $r(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:ft,extend:N,mergeOptions:Wt,defineReactive:Pt},t.set=Lt,t.delete=jt,t.nextTick=me,t.observable=function(t){return Rt(t),t},t.options=Object.create(null),U.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,N(t.options.components,Mr),Sr(t),Ar(t),Or(t),xr(t)}$r(Ir),Object.defineProperty(Ir.prototype,"$isServer",{get:ct}),Object.defineProperty(Ir.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ir,"FunctionalRenderContext",{value:Ze}),Ir.version="2.6.14";var Fr=g("style,class"),Ur=g("input,textarea,option,select,progress"),Vr=function(t,e,n){return"value"===n&&Ur(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},qr=g("contenteditable,draggable,spellcheck"),Br=g("events,caret,typing,plaintext-only"),zr=function(t,e){return Qr(e)||"false"===e?"false":"contenteditable"===t&&Br(e)?e:"true"},Kr=g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Hr="http://www.w3.org/1999/xlink",Gr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Wr=function(t){return Gr(t)?t.slice(6,t.length):""},Qr=function(t){return null==t||!1===t};function Xr(t){var e=t.data,n=t,r=t;while(i(r.componentInstance))r=r.componentInstance._vnode,r&&r.data&&(e=Yr(r.data,e));while(i(n=n.parent))n&&n.data&&(e=Yr(e,n.data));return Jr(e.staticClass,e.class)}function Yr(t,e){return{staticClass:Zr(t.staticClass,e.staticClass),class:i(t.class)?[t.class,e.class]:e.class}}function Jr(t,e){return i(t)||i(e)?Zr(t,ti(e)):""}function Zr(t,e){return t?e?t+" "+e:t:e||""}function ti(t){return Array.isArray(t)?ei(t):c(t)?ni(t):"string"===typeof t?t:""}function ei(t){for(var e,n="",r=0,s=t.length;r<s;r++)i(e=ti(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function ni(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ri={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},ii=g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),si=g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),oi=function(t){return ii(t)||si(t)};function ai(t){return si(t)?"svg":"math"===t?"math":void 0}var ci=Object.create(null);function ui(t){if(!X)return!0;if(oi(t))return!1;if(t=t.toLowerCase(),null!=ci[t])return ci[t];var e=document.createElement(t);return t.indexOf("-")>-1?ci[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:ci[t]=/HTMLUnknownElement/.test(e.toString())}var li=g("text,number,password,search,email,tel,url");function hi(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function di(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fi(t,e){return document.createElementNS(ri[t],e)}function pi(t){return document.createTextNode(t)}function mi(t){return document.createComment(t)}function gi(t,e,n){t.insertBefore(e,n)}function yi(t,e){t.removeChild(e)}function vi(t,e){t.appendChild(e)}function bi(t){return t.parentNode}function wi(t){return t.nextSibling}function _i(t){return t.tagName}function Ei(t,e){t.textContent=e}function Ti(t,e){t.setAttribute(e,"")}var Ii=Object.freeze({createElement:di,createElementNS:fi,createTextNode:pi,createComment:mi,insertBefore:gi,removeChild:yi,appendChild:vi,parentNode:bi,nextSibling:wi,tagName:_i,setTextContent:Ei,setStyleScope:Ti}),Si={create:function(t,e){Ai(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Ai(t,!0),Ai(e))},destroy:function(t){Ai(t,!0)}};function Ai(t,e){var n=t.data.ref;if(i(n)){var r=t.context,s=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?v(o[n],s):o[n]===s&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(s)<0&&o[n].push(s):o[n]=[s]:o[n]=s}}var Oi=new bt("",{},[]),ki=["create","activate","update","remove","destroy"];function Ci(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&xi(t,e)||s(t.isAsyncPlaceholder)&&r(e.asyncFactory.error))}function xi(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,s=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===s||li(r)&&li(s)}function Ni(t,e,n){var r,s,o={};for(r=e;r<=n;++r)s=t[r].key,i(s)&&(o[s]=r);return o}function Di(t){var e,n,o={},c=t.modules,u=t.nodeOps;for(e=0;e<ki.length;++e)for(o[ki[e]]=[],n=0;n<c.length;++n)i(c[n][ki[e]])&&o[ki[e]].push(c[n][ki[e]]);function l(t){return new bt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function f(t,e,n,r,o,a,c){if(i(t.elm)&&i(a)&&(t=a[c]=Tt(t)),t.isRootInsert=!o,!p(t,e,n,r)){var l=t.data,h=t.children,d=t.tag;i(d)?(t.elm=t.ns?u.createElementNS(t.ns,d):u.createElement(d,t),E(t),b(t,h,e),i(l)&&_(t,e),v(n,t.elm,r)):s(t.isComment)?(t.elm=u.createComment(t.text),v(n,t.elm,r)):(t.elm=u.createTextNode(t.text),v(n,t.elm,r))}}function p(t,e,n,r){var o=t.data;if(i(o)){var a=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1),i(t.componentInstance))return m(t,e),v(n,t.elm,r),s(a)&&y(t,e,n,r),!0}}function m(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(_(t,e),E(t)):(Ai(t),e.push(t))}function y(t,e,n,r){var s,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,i(s=a.data)&&i(s=s.transition)){for(s=0;s<o.activate.length;++s)o.activate[s](Oi,a);e.push(a);break}v(n,t.elm,r)}function v(t,e,n){i(t)&&(i(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function b(t,e,n){if(Array.isArray(e)){0;for(var r=0;r<e.length;++r)f(e[r],n,t.elm,null,!0,e,r)}else a(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function _(t,n){for(var r=0;r<o.create.length;++r)o.create[r](Oi,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(Oi,t),i(e.insert)&&n.push(t))}function E(t){var e;if(i(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}i(e=Nn)&&e!==t.context&&e!==t.fnContext&&i(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function T(t,e,n,r,i,s){for(;r<=i;++r)f(n[r],s,t,e,!1,n,r)}function I(t){var e,n,r=t.data;if(i(r))for(i(e=r.hook)&&i(e=e.destroy)&&e(t),e=0;e<o.destroy.length;++e)o.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)I(t.children[n])}function S(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(i(r.tag)?(A(r),I(r)):d(r.elm))}}function A(t,e){if(i(e)||i(t.data)){var n,r=o.remove.length+1;for(i(e)?e.listeners+=r:e=h(t.elm,r),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&A(n,e),n=0;n<o.remove.length;++n)o.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else d(t.elm)}function O(t,e,n,s,o){var a,c,l,h,d=0,p=0,m=e.length-1,g=e[0],y=e[m],v=n.length-1,b=n[0],w=n[v],_=!o;while(d<=m&&p<=v)r(g)?g=e[++d]:r(y)?y=e[--m]:Ci(g,b)?(C(g,b,s,n,p),g=e[++d],b=n[++p]):Ci(y,w)?(C(y,w,s,n,v),y=e[--m],w=n[--v]):Ci(g,w)?(C(g,w,s,n,v),_&&u.insertBefore(t,g.elm,u.nextSibling(y.elm)),g=e[++d],w=n[--v]):Ci(y,b)?(C(y,b,s,n,p),_&&u.insertBefore(t,y.elm,g.elm),y=e[--m],b=n[++p]):(r(a)&&(a=Ni(e,d,m)),c=i(b.key)?a[b.key]:k(b,e,d,m),r(c)?f(b,s,t,g.elm,!1,n,p):(l=e[c],Ci(l,b)?(C(l,b,s,n,p),e[c]=void 0,_&&u.insertBefore(t,l.elm,g.elm)):f(b,s,t,g.elm,!1,n,p)),b=n[++p]);d>m?(h=r(n[v+1])?null:n[v+1].elm,T(t,h,n,p,v,s)):p>v&&S(e,d,m)}function k(t,e,n,r){for(var s=n;s<r;s++){var o=e[s];if(i(o)&&Ci(t,o))return s}}function C(t,e,n,a,c,l){if(t!==e){i(e.elm)&&i(a)&&(e=a[c]=Tt(e));var h=e.elm=t.elm;if(s(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?D(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(s(e.isStatic)&&s(t.isStatic)&&e.key===t.key&&(s(e.isCloned)||s(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;i(f)&&i(d=f.hook)&&i(d=d.prepatch)&&d(t,e);var p=t.children,m=e.children;if(i(f)&&w(e)){for(d=0;d<o.update.length;++d)o.update[d](t,e);i(d=f.hook)&&i(d=d.update)&&d(t,e)}r(e.text)?i(p)&&i(m)?p!==m&&O(h,p,m,n,l):i(m)?(i(t.text)&&u.setTextContent(h,""),T(h,null,m,0,m.length-1,n)):i(p)?S(p,0,p.length-1):i(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),i(f)&&i(d=f.hook)&&i(d=d.postpatch)&&d(t,e)}}}function x(t,e,n){if(s(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var N=g("attrs,class,staticClass,staticStyle,key");function D(t,e,n,r){var o,a=e.tag,c=e.data,u=e.children;if(r=r||c&&c.pre,e.elm=t,s(e.isComment)&&i(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(o=c.hook)&&i(o=o.init)&&o(e,!0),i(o=e.componentInstance)))return m(e,n),!0;if(i(a)){if(i(u))if(t.hasChildNodes())if(i(o=c)&&i(o=o.domProps)&&i(o=o.innerHTML)){if(o!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,d=0;d<u.length;d++){if(!h||!D(h,u[d],n,r)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(e,u,n);if(i(c)){var f=!1;for(var p in c)if(!N(p)){f=!0,_(e,n);break}!f&&c["class"]&&ye(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!r(e)){var c=!1,h=[];if(r(t))c=!0,f(e,h);else{var d=i(t.nodeType);if(!d&&Ci(t,e))C(t,e,h,null,null,a);else{if(d){if(1===t.nodeType&&t.hasAttribute(F)&&(t.removeAttribute(F),n=!0),s(n)&&D(t,e,h))return x(e,h,!0),t;t=l(t)}var p=t.elm,m=u.parentNode(p);if(f(e,h,p._leaveCb?null:m,u.nextSibling(p)),i(e.parent)){var g=e.parent,y=w(e);while(g){for(var v=0;v<o.destroy.length;++v)o.destroy[v](g);if(g.elm=e.elm,y){for(var b=0;b<o.create.length;++b)o.create[b](Oi,g);var _=g.data.hook.insert;if(_.merged)for(var E=1;E<_.fns.length;E++)_.fns[E]()}else Ai(g);g=g.parent}}i(m)?S([t],0,0):i(t.tag)&&I(t)}}return x(e,h,c),e.elm}i(t)&&I(t)}}var Ri={create:Pi,update:Pi,destroy:function(t){Pi(t,Oi)}};function Pi(t,e){(t.data.directives||e.data.directives)&&Li(t,e)}function Li(t,e){var n,r,i,s=t===Oi,o=e===Oi,a=Mi(t.data.directives,t.context),c=Mi(e.data.directives,e.context),u=[],l=[];for(n in c)r=a[n],i=c[n],r?(i.oldValue=r.value,i.oldArg=r.arg,Fi(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(Fi(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Fi(u[n],"inserted",e,t)};s?Ee(e,"insert",h):h()}if(l.length&&Ee(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Fi(l[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||Fi(a[n],"unbind",t,t,o)}var ji=Object.create(null);function Mi(t,e){var n,r,i=Object.create(null);if(!t)return i;for(n=0;n<t.length;n++)r=t[n],r.modifiers||(r.modifiers=ji),i[$i(r)]=r,r.def=Qt(e.$options,"directives",r.name,!0);return i}function $i(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Fi(t,e,n,r,i){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,r,i)}catch(Io){ne(Io,n.context,"directive "+t.name+" "+e+" hook")}}var Ui=[Si,Ri];function Vi(t,e){var n=e.componentOptions;if((!i(n)||!1!==n.Ctor.options.inheritAttrs)&&(!r(t.data.attrs)||!r(e.data.attrs))){var s,o,a,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(s in i(l.__ob__)&&(l=e.data.attrs=N({},l)),l)o=l[s],a=u[s],a!==o&&qi(c,s,o,e.data.pre);for(s in(tt||nt)&&l.value!==u.value&&qi(c,"value",l.value),u)r(l[s])&&(Gr(s)?c.removeAttributeNS(Hr,Wr(s)):qr(s)||c.removeAttribute(s))}}function qi(t,e,n,r){r||t.tagName.indexOf("-")>-1?Bi(t,e,n):Kr(e)?Qr(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):qr(e)?t.setAttribute(e,zr(e,n)):Gr(e)?Qr(n)?t.removeAttributeNS(Hr,Wr(e)):t.setAttributeNS(Hr,e,n):Bi(t,e,n)}function Bi(t,e,n){if(Qr(n))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var zi={create:Vi,update:Vi};function Ki(t,e){var n=e.elm,s=e.data,o=t.data;if(!(r(s.staticClass)&&r(s.class)&&(r(o)||r(o.staticClass)&&r(o.class)))){var a=Xr(e),c=n._transitionClasses;i(c)&&(a=Zr(a,ti(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Hi,Gi={create:Ki,update:Ki},Wi="__r",Qi="__c";function Xi(t){if(i(t[Wi])){var e=tt?"change":"input";t[e]=[].concat(t[Wi],t[e]||[]),delete t[Wi]}i(t[Qi])&&(t.change=[].concat(t[Qi],t.change||[]),delete t[Qi])}function Yi(t,e,n){var r=Hi;return function i(){var s=e.apply(null,arguments);null!==s&&ts(t,i,n,r)}}var Ji=ae&&!(it&&Number(it[1])<=53);function Zi(t,e,n,r){if(Ji){var i=Wn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=i||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}Hi.addEventListener(t,e,ot?{capture:n,passive:r}:n)}function ts(t,e,n,r){(r||Hi).removeEventListener(t,e._wrapper||e,n)}function es(t,e){if(!r(t.data.on)||!r(e.data.on)){var n=e.data.on||{},i=t.data.on||{};Hi=e.elm,Xi(n),_e(n,i,Zi,ts,Yi,e.context),Hi=void 0}}var ns,rs={create:es,update:es};function is(t,e){if(!r(t.data.domProps)||!r(e.data.domProps)){var n,s,o=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in i(c.__ob__)&&(c=e.data.domProps=N({},c)),a)n in c||(o[n]="");for(n in c){if(s=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),s===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=s;var u=r(s)?"":String(s);ss(o,u)&&(o.value=u)}else if("innerHTML"===n&&si(o.tagName)&&r(o.innerHTML)){ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+s+"</svg>";var l=ns.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(l.firstChild)o.appendChild(l.firstChild)}else if(s!==a[n])try{o[n]=s}catch(Io){}}}}function ss(t,e){return!t.composing&&("OPTION"===t.tagName||os(t,e)||as(t,e))}function os(t,e){var n=!0;try{n=document.activeElement!==t}catch(Io){}return n&&t.value!==e}function as(t,e){var n=t.value,r=t._vModifiers;if(i(r)){if(r.number)return m(n)!==m(e);if(r.trim)return n.trim()!==e.trim()}return n!==e}var cs={create:is,update:is},us=_((function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function ls(t){var e=hs(t.style);return t.staticStyle?N(t.staticStyle,e):e}function hs(t){return Array.isArray(t)?D(t):"string"===typeof t?us(t):t}function ds(t,e){var n,r={};if(e){var i=t;while(i.componentInstance)i=i.componentInstance._vnode,i&&i.data&&(n=ls(i.data))&&N(r,n)}(n=ls(t.data))&&N(r,n);var s=t;while(s=s.parent)s.data&&(n=ls(s.data))&&N(r,n);return r}var fs,ps=/^--/,ms=/\s*!important$/,gs=function(t,e,n){if(ps.test(e))t.style.setProperty(e,n);else if(ms.test(n))t.style.setProperty(A(e),n.replace(ms,""),"important");else{var r=vs(e);if(Array.isArray(n))for(var i=0,s=n.length;i<s;i++)t.style[r]=n[i];else t.style[r]=n}},ys=["Webkit","Moz","ms"],vs=_((function(t){if(fs=fs||document.createElement("div").style,t=T(t),"filter"!==t&&t in fs)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<ys.length;n++){var r=ys[n]+e;if(r in fs)return r}}));function bs(t,e){var n=e.data,s=t.data;if(!(r(n.staticStyle)&&r(n.style)&&r(s.staticStyle)&&r(s.style))){var o,a,c=e.elm,u=s.staticStyle,l=s.normalizedStyle||s.style||{},h=u||l,d=hs(e.data.style)||{};e.data.normalizedStyle=i(d.__ob__)?N({},d):d;var f=ds(e,!0);for(a in h)r(f[a])&&gs(c,a,"");for(a in f)o=f[a],o!==h[a]&&gs(c,a,null==o?"":o)}}var ws={create:bs,update:bs},_s=/\s+/;function Es(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(_s).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ts(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(_s).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";while(n.indexOf(r)>=0)n=n.replace(r," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Is(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&N(e,Ss(t.name||"v")),N(e,t),e}return"string"===typeof t?Ss(t):void 0}}var Ss=_((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),As=X&&!et,Os="transition",ks="animation",Cs="transition",xs="transitionend",Ns="animation",Ds="animationend";As&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Cs="WebkitTransition",xs="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ns="WebkitAnimation",Ds="webkitAnimationEnd"));var Rs=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Ps(t){Rs((function(){Rs(t)}))}function Ls(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Es(t,e))}function js(t,e){t._transitionClasses&&v(t._transitionClasses,e),Ts(t,e)}function Ms(t,e,n){var r=Fs(t,e),i=r.type,s=r.timeout,o=r.propCount;if(!i)return n();var a=i===Os?xs:Ds,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),t.addEventListener(a,l)}var $s=/\b(transform|all)(,|$)/;function Fs(t,e){var n,r=window.getComputedStyle(t),i=(r[Cs+"Delay"]||"").split(", "),s=(r[Cs+"Duration"]||"").split(", "),o=Us(i,s),a=(r[Ns+"Delay"]||"").split(", "),c=(r[Ns+"Duration"]||"").split(", "),u=Us(a,c),l=0,h=0;e===Os?o>0&&(n=Os,l=o,h=s.length):e===ks?u>0&&(n=ks,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?Os:ks:null,h=n?n===Os?s.length:c.length:0);var d=n===Os&&$s.test(r[Cs+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function Us(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Vs(e)+Vs(t[n])})))}function Vs(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function qs(t,e){var n=t.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var s=Is(t.data.transition);if(!r(s)&&!i(n._enterCb)&&1===n.nodeType){var o=s.css,a=s.type,u=s.enterClass,l=s.enterToClass,h=s.enterActiveClass,d=s.appearClass,f=s.appearToClass,p=s.appearActiveClass,g=s.beforeEnter,y=s.enter,v=s.afterEnter,b=s.enterCancelled,w=s.beforeAppear,_=s.appear,E=s.afterAppear,T=s.appearCancelled,I=s.duration,S=Nn,A=Nn.$vnode;while(A&&A.parent)S=A.context,A=A.parent;var O=!S._isMounted||!t.isRootInsert;if(!O||_||""===_){var k=O&&d?d:u,C=O&&p?p:h,x=O&&f?f:l,N=O&&w||g,D=O&&"function"===typeof _?_:y,R=O&&E||v,P=O&&T||b,L=m(c(I)?I.enter:I);0;var j=!1!==o&&!et,M=Ks(D),F=n._enterCb=$((function(){j&&(js(n,x),js(n,C)),F.cancelled?(j&&js(n,k),P&&P(n)):R&&R(n),n._enterCb=null}));t.data.show||Ee(t,"insert",(function(){var e=n.parentNode,r=e&&e._pending&&e._pending[t.key];r&&r.tag===t.tag&&r.elm._leaveCb&&r.elm._leaveCb(),D&&D(n,F)})),N&&N(n),j&&(Ls(n,k),Ls(n,C),Ps((function(){js(n,k),F.cancelled||(Ls(n,x),M||(zs(L)?setTimeout(F,L):Ms(n,a,F)))}))),t.data.show&&(e&&e(),D&&D(n,F)),j||M||F()}}}function Bs(t,e){var n=t.elm;i(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var s=Is(t.data.transition);if(r(s)||1!==n.nodeType)return e();if(!i(n._leaveCb)){var o=s.css,a=s.type,u=s.leaveClass,l=s.leaveToClass,h=s.leaveActiveClass,d=s.beforeLeave,f=s.leave,p=s.afterLeave,g=s.leaveCancelled,y=s.delayLeave,v=s.duration,b=!1!==o&&!et,w=Ks(f),_=m(c(v)?v.leave:v);0;var E=n._leaveCb=$((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(js(n,l),js(n,h)),E.cancelled?(b&&js(n,u),g&&g(n)):(e(),p&&p(n)),n._leaveCb=null}));y?y(T):T()}function T(){E.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),b&&(Ls(n,u),Ls(n,h),Ps((function(){js(n,u),E.cancelled||(Ls(n,l),w||(zs(_)?setTimeout(E,_):Ms(n,a,E)))}))),f&&f(n,E),b||w||E())}}function zs(t){return"number"===typeof t&&!isNaN(t)}function Ks(t){if(r(t))return!1;var e=t.fns;return i(e)?Ks(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Hs(t,e){!0!==e.data.show&&qs(e)}var Gs=X?{create:Hs,activate:Hs,remove:function(t,e){!0!==t.data.show?Bs(t,e):e()}}:{},Ws=[zi,Gi,rs,cs,ws,Gs],Qs=Ws.concat(Ui),Xs=Di({nodeOps:Ii,modules:Qs});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&io(t,"input")}));var Ys={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Ee(n,"postpatch",(function(){Ys.componentUpdated(t,e,n)})):Js(t,e,n.context),t._vOptions=[].map.call(t.options,eo)):("textarea"===n.tag||li(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",no),t.addEventListener("compositionend",ro),t.addEventListener("change",ro),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Js(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,eo);if(i.some((function(t,e){return!j(t,r[e])}))){var s=t.multiple?e.value.some((function(t){return to(t,i)})):e.value!==e.oldValue&&to(e.value,i);s&&io(t,"change")}}}};function Js(t,e,n){Zs(t,e,n),(tt||nt)&&setTimeout((function(){Zs(t,e,n)}),0)}function Zs(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],i)s=M(r,eo(o))>-1,o.selected!==s&&(o.selected=s);else if(j(eo(o),r))return void(t.selectedIndex!==a&&(t.selectedIndex=a));i||(t.selectedIndex=-1)}}function to(t,e){return e.every((function(e){return!j(e,t)}))}function eo(t){return"_value"in t?t._value:t.value}function no(t){t.target.composing=!0}function ro(t){t.target.composing&&(t.target.composing=!1,io(t.target,"input"))}function io(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function so(t){return!t.componentInstance||t.data&&t.data.transition?t:so(t.componentInstance._vnode)}var oo={bind:function(t,e,n){var r=e.value;n=so(n);var i=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,qs(n,(function(){t.style.display=s}))):t.style.display=r?s:"none"},update:function(t,e,n){var r=e.value,i=e.oldValue;if(!r!==!i){n=so(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,r?qs(n,(function(){t.style.display=t.__vOriginalDisplay})):Bs(n,(function(){t.style.display="none"}))):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}},ao={model:Ys,show:oo},co={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function uo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?uo(In(e.children)):t}function lo(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var s in i)e[T(s)]=i[s];return e}function ho(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function fo(t){while(t=t.parent)if(t.data.transition)return!0}function po(t,e){return e.key===t.key&&e.tag===t.tag}var mo=function(t){return t.tag||Pe(t)},go=function(t){return"show"===t.name},yo={name:"transition",props:co,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(mo),n.length)){0;var r=this.mode;0;var i=n[0];if(fo(this.$vnode))return i;var s=uo(i);if(!s)return i;if(this._leaving)return ho(t,i);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:a(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var c=(s.data||(s.data={})).transition=lo(this),u=this._vnode,l=uo(u);if(s.data.directives&&s.data.directives.some(go)&&(s.data.show=!0),l&&l.data&&!po(s,l)&&!Pe(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=N({},c);if("out-in"===r)return this._leaving=!0,Ee(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),ho(t,i);if("in-out"===r){if(Pe(s))return u;var d,f=function(){d()};Ee(c,"afterEnter",f),Ee(c,"enterCancelled",f),Ee(h,"delayLeave",(function(t){d=t}))}}return i}}},vo=N({tag:String,moveClass:String},co);delete vo.mode;var bo={props:vo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,r){var i=Dn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,i(),e.call(t,n,r)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],s=this.children=[],o=lo(this),a=0;a<i.length;a++){var c=i[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(r){for(var u=[],l=[],h=0;h<r.length;h++){var d=r[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=t(e,null,u),this.removed=l}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(wo),t.forEach(_o),t.forEach(Eo),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,r=n.style;Ls(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(xs,n._moveCb=function t(r){r&&r.target!==n||r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(xs,t),n._moveCb=null,js(n,e))})}})))},methods:{hasMove:function(t,e){if(!As)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Ts(n,t)})),Es(n,e),n.style.display="none",this.$el.appendChild(n);var r=Fs(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}};function wo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function _o(t){t.data.newPos=t.elm.getBoundingClientRect()}function Eo(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+r+"px,"+i+"px)",s.transitionDuration="0s"}}var To={Transition:yo,TransitionGroup:bo};Ir.config.mustUseProp=Vr,Ir.config.isReservedTag=oi,Ir.config.isReservedAttr=Fr,Ir.config.getTagNamespace=ai,Ir.config.isUnknownElement=ui,N(Ir.options.directives,ao),N(Ir.options.components,To),Ir.prototype.__patch__=X?Xs:R,Ir.prototype.$mount=function(t,e){return t=t&&X?hi(t):void 0,Ln(this,t,e)},X&&setTimeout((function(){q.devtools&&ut&&ut.emit("init",Ir)}),0),e["a"]=Ir}).call(this,n("c8ba"))},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"4c95":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("6e55").default();function s(t,e,n){var i=r({},t,e);return n&&(n.reset&&(i.reset=!0),n.nomobile&&(i.mobile=!1),n.nodesktop&&(i.desktop=!1)),i}var o={install:function(t,e){t.directive("scroll-reveal",{inserted:function(t,n){var r=s(e,n.value,n.modifiers);"string"===typeof r.class&&(t.classList.add(r.class),delete r.class),i.reveal(t,r)},update:function(t,n){if(n.value!=n.oldValue){var r=s(e,n.value,n.modifiers);i.reveal(t,r)}}});var n={isSupported:function(){return i.isSupported()},sync:function(){i.sync()},reveal:function(t,n,r,o){s(e,n);i.reveal(t,n,r,o)}};Object.defineProperty(t.prototype,"$sr",{get:function(){return n}})}};e.default=o},"4f60":function(t,e,n){"use strict";var r=n("7ded");n.d(e,"a",(function(){return r["a"]}));var i="firebase",s="9.5.0";
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
r["a"].registerVersion(i,s,"app-compat")},5054:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("b7d9"),i=s(r);function s(t){return t&&t.__esModule?t:{default:t}}var o={options:{type:Object,required:!1,default:function(){return{}}},position:{type:Object,twoWay:!0},zIndex:{type:Number,twoWay:!0}},a=["domready","closeclick","content_changed"];e.default=(0,i.default)({mappedProps:o,events:a,name:"infoWindow",ctr:function(){return google.maps.InfoWindow},props:{opened:{type:Boolean,default:!0}},inject:{$markerPromise:{default:null}},mounted:function(){var t=this.$refs.flyaway;t.parentNode.removeChild(t)},beforeCreate:function(t){var e=this;if(t.content=this.$refs.flyaway,this.$markerPromise)return delete t.position,this.$markerPromise.then((function(t){return e.$markerObject=t,t}))},methods:{_openInfoWindow:function(){this.opened?null!==this.$markerObject?this.$infoWindowObject.open(this.$map,this.$markerObject):this.$infoWindowObject.open(this.$map):this.$infoWindowObject.close()}},afterCreate:function(){var t=this;this._openInfoWindow(),this.$watch("opened",(function(){t._openInfoWindow()}))}})},"51a8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("2adb"),s=n("108f"),o=c(s),a=n("b7d9");function c(t){return t&&t.__esModule?t:{default:t}}var u={bounds:{type:Object},componentRestrictions:{type:Object,noBind:!0},types:{type:Array,default:function(){return[]}}},l={selectFirstOnEnter:{required:!1,type:Boolean,default:!1},options:{type:Object}};e.default={mounted:function(){var t=this;this.$gmapApiPromiseLazy().then((function(){if(t.selectFirstOnEnter&&(0,o.default)(t.$refs.input),"function"!==typeof google.maps.places.Autocomplete)throw new Error("google.maps.places.Autocomplete is undefined. Did you add 'places' to libraries when loading Google Maps?");var e=r({},(0,i.getPropsValues)(t,u),t.options);t.$autocomplete=new google.maps.places.Autocomplete(t.$refs.input,e),(0,i.bindProps)(t,t.$autocomplete,u),t.$watch("componentRestrictions",(function(e){void 0!==e&&t.$autocomplete.setComponentRestrictions(e)})),t.$autocomplete.addListener("place_changed",(function(){t.$emit("place_changed",t.$autocomplete.getPlace())}))}))},props:r({},(0,a.mappedPropsToVueProps)(u),l)}},"54f9":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"flyaway"},[t._t("default")],2)])},i=[],s=function(t){return t.default||t}(n("5054")),o=s,a=n("2877"),c=Object(a["a"])(o,r,i,!1,null,null,null);e["default"]=c.exports},5836:function(t,e,n){"use strict";function r(t){var e=0;t((function(){e+=1}),(function(){e=Math.max(0,e-1)}),(function(){return 0===e}))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"589b":function(t,e,n){"use strict";n.r(e),n.d(e,"SDK_VERSION",(function(){return Q})),n.d(e,"_DEFAULT_ENTRY_NAME",(function(){return j})),n.d(e,"_addComponent",(function(){return U})),n.d(e,"_addOrOverwriteComponent",(function(){return V})),n.d(e,"_apps",(function(){return $})),n.d(e,"_clearComponents",(function(){return K})),n.d(e,"_components",(function(){return F})),n.d(e,"_getProvider",(function(){return B})),n.d(e,"_registerComponent",(function(){return q})),n.d(e,"_removeServiceInstance",(function(){return z})),n.d(e,"deleteApp",(function(){return Z})),n.d(e,"getApp",(function(){return Y})),n.d(e,"getApps",(function(){return J})),n.d(e,"initializeApp",(function(){return X})),n.d(e,"onLog",(function(){return et})),n.d(e,"registerVersion",(function(){return tt})),n.d(e,"setLogLevel",(function(){return nt}));var r=n("22e5"),i=n("e691"),s=n("1fd5");n.d(e,"FirebaseError",(function(){return s["c"]}));
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
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.9",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",y="@firebase/auth-compat",v="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",E="@firebase/installations",T="@firebase/installations-compat",I="@firebase/messaging",S="@firebase/messaging-compat",A="@firebase/performance",O="@firebase/performance-compat",k="@firebase/remote-config",C="@firebase/remote-config-compat",x="@firebase/storage",N="@firebase/storage-compat",D="@firebase/firestore",R="@firebase/firestore-compat",P="firebase",L="9.5.0",j="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[y]:"fire-auth-compat",[v]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[E]:"fire-iid",[T]:"fire-iid-compat",[I]:"fire-fcm",[S]:"fire-fcm-compat",[A]:"fire-perf",[O]:"fire-perf-compat",[k]:"fire-rc",[C]:"fire-rc-compat",[x]:"fire-gcs",[N]:"fire-gcs-compat",[D]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[P]:"fire-js-all"},$=new Map,F=new Map;function U(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function V(t,e){t.container.addOrOverwriteComponent(e)}function q(t){const e=t.name;if(F.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;F.set(e,t);for(const n of $.values())U(n,t);return!0}function B(t,e){return t.container.getProvider(e)}function z(t,e,n=j){B(t,e).clearInstance(n)}function K(){F.clear()}
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
 */const H={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new s["b"]("app","Firebase",H);
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
class W{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
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
 */const Q=L;function X(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:j,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw G.create("bad-app-name",{appName:String(i)});const o=$.get(i);if(o){if(Object(s["g"])(t,o.options)&&Object(s["g"])(n,o.config))return o;throw G.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of F.values())a.addComponent(r);const c=new W(t,n,a);return $.set(i,c),c}function Y(t=j){const e=$.get(t);if(!e)throw G.create("no-app",{appName:t});return e}function J(){return Array.from($.values())}async function Z(t){const e=t.name;$.has(e)&&($.delete(e),await Promise.all(t.container.getProviders().map(t=>t.delete())),t.isDeleted=!0)}function tt(t,e,n){var i;let s=null!==(i=M[t])&&void 0!==i?i:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}q(new r["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}function et(t,e){if(null!==t&&"function"!==typeof t)throw G.create("invalid-log-argument");Object(i["d"])(t,e)}function nt(t){Object(i["c"])(t)}
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
 */function rt(t){q(new r["a"]("platform-logger",t=>new o(t),"PRIVATE")),tt(c,u,t),tt(c,u,"esm2017"),tt("fire-js","")}rt("")},"5eac":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("b7d9"),i=s(r);function s(t){return t&&t.__esModule?t:{default:t}}var o={center:{type:Object,twoWay:!0,required:!0},radius:{type:Number,twoWay:!0},draggable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},options:{type:Object,twoWay:!1}},a=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];e.default=(0,i.default)({mappedProps:o,name:"circle",ctr:function(){return google.maps.Circle},events:a})},"61b8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){i=!0,s=c}finally{try{!r&&a["return"]&&a["return"]()}finally{if(i)throw s}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=n("b7d9"),s=o(i);function o(t){return t&&t.__esModule?t:{default:t}}var a={draggable:{type:Boolean},editable:{type:Boolean},options:{twoWay:!1,type:Object},path:{type:Array,twoWay:!0}},c=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];e.default=(0,s.default)({mappedProps:a,props:{deepWatch:{type:Boolean,default:!1}},events:c,name:"polyline",ctr:function(){return google.maps.Polyline},afterCreate:function(){var t=this,e=function(){};this.$watch("path",(function(n){if(n){e(),t.$polylineObject.setPath(n);var i=t.$polylineObject.getPath(),s=[],o=function(){t.$emit("path_changed",t.$polylineObject.getPath())};s.push([i,i.addListener("insert_at",o)]),s.push([i,i.addListener("remove_at",o)]),s.push([i,i.addListener("set_at",o)]),e=function(){s.map((function(t){var e=r(t,2),n=(e[0],e[1]);return google.maps.event.removeListener(n)}))}}}),{deep:this.deepWatch,immediate:!0})}})},"6e55":function(t,e,n){"use strict";
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
function r(t){return"object"===typeof window.Node?t instanceof window.Node:null!==t&&"object"===typeof t&&"number"===typeof t.nodeType&&"string"===typeof t.nodeName}n.r(e);var i=r;
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function s(t){var e=Object.prototype.toString.call(t),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"===typeof window.NodeList?t instanceof window.NodeList:null!==t&&"object"===typeof t&&"number"===typeof t.length&&n.test(e)&&(0===t.length||i(t[0]))}var o=s;
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function a(t,e){if(void 0===e&&(e=document),t instanceof Array)return t.filter(i);if(i(t))return[t];if(o(t))return Array.prototype.slice.call(t);if("string"===typeof t)try{var n=e.querySelectorAll(t);return Array.prototype.slice.call(n)}catch(r){return[]}return[]}var c=a;
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function u(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(16===t.length)return t;if(6===t.length){var e=l();return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}throw new RangeError("Expected array with either 6 or 16 values.")}function l(){for(var t=[],e=0;e<16;e++)e%5==0?t.push(1):t.push(0);return t}function h(t,e){for(var n=u(t),r=u(e),i=[],s=0;s<4;s++)for(var o=[n[s],n[s+4],n[s+8],n[s+12]],a=0;a<4;a++){var c=4*a,l=[r[c],r[c+1],r[c+2],r[c+3]],h=o[0]*l[0]+o[1]*l[1]+o[2]*l[2]+o[3]*l[3];i[s+c]=h}return i}function d(t){if("string"===typeof t){var e=t.match(/matrix(3d)?\(([^)]+)\)/);if(e){var n=e[2].split(", ").map(parseFloat);return u(n)}}return l()}function f(t){var e=Math.PI/180*t,n=l();return n[5]=n[10]=Math.cos(e),n[6]=n[9]=Math.sin(e),n[9]*=-1,n}function p(t){var e=Math.PI/180*t,n=l();return n[0]=n[10]=Math.cos(e),n[2]=n[8]=Math.sin(e),n[2]*=-1,n}function m(t){var e=Math.PI/180*t,n=l();return n[0]=n[5]=Math.cos(e),n[1]=n[4]=Math.sin(e),n[4]*=-1,n}function g(t,e){var n=l();return n[0]=t,n[5]="number"===typeof e?e:t,n}function y(t){var e=l();return e[12]=t,e}function v(t){var e=l();return e[13]=t,e}
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var b=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout((function(){return b(e)}),0)}}(),w=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||b,_=w,E={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function T(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function I(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",(function(){document.body.style.height="100%"}))}var S={success:I,failure:T};function A(t){return null!==t&&t instanceof Object&&(t.constructor===Object||"[object Object]"===Object.prototype.toString.call(t))}function O(t,e){if(A(t)){var n=Object.keys(t);return n.forEach((function(n){return e(t[n],n,t)}))}if(t instanceof Array)return t.forEach((function(n,r){return e(n,r,t)}));throw new TypeError("Expected either an array or object literal.")}function k(t){var e=[],n=arguments.length-1;while(n-- >0)e[n]=arguments[n+1];if(this.constructor.debug&&console){var r="%cScrollReveal: "+t;e.forEach((function(t){return r+="\n — "+t})),console.log(r,"color: #ea654b;")}}function C(){var t=this,e=function(){return{active:[],stale:[]}},n=e(),r=e(),i=e();try{O(c("[data-sr-id]"),(function(t){var e=parseInt(t.getAttribute("data-sr-id"));n.active.push(e)}))}catch(s){throw s}O(this.store.elements,(function(t){-1===n.active.indexOf(t.id)&&n.stale.push(t.id)})),O(n.stale,(function(e){return delete t.store.elements[e]})),O(this.store.elements,(function(t){-1===i.active.indexOf(t.containerId)&&i.active.push(t.containerId),t.hasOwnProperty("sequence")&&-1===r.active.indexOf(t.sequence.id)&&r.active.push(t.sequence.id)})),O(this.store.containers,(function(t){-1===i.active.indexOf(t.id)&&i.stale.push(t.id)})),O(i.stale,(function(e){var n=t.store.containers[e].node;n.removeEventListener("scroll",t.delegate),n.removeEventListener("resize",t.delegate),delete t.store.containers[e]})),O(this.store.sequences,(function(t){-1===r.active.indexOf(t.id)&&r.stale.push(t.id)})),O(r.stale,(function(e){return delete t.store.sequences[e]}))}var x=function(){var t={},e=document.documentElement.style;function n(n,r){if(void 0===r&&(r=e),n&&"string"===typeof n){if(t[n])return t[n];if("string"===typeof r[n])return t[n]=n;if("string"===typeof r["-webkit-"+n])return t[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return t={}},n}();function N(t){var e=window.getComputedStyle(t.node),n=e.position,r=t.config,i={},s=t.node.getAttribute("style")||"",o=s.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];i.computed=o?o.map((function(t){return t.trim()})).join("; ")+";":"",i.generated=o.some((function(t){return t.match(/visibility\s?:\s?visible/i)}))?i.computed:o.concat(["visibility: visible"]).map((function(t){return t.trim()})).join("; ")+";";var a=parseFloat(e.opacity),c=isNaN(parseFloat(r.opacity))?parseFloat(e.opacity):parseFloat(r.opacity),u={computed:a!==c?"opacity: "+a+";":"",generated:a!==c?"opacity: "+c+";":""},l=[];if(parseFloat(r.distance)){var b="top"===r.origin||"bottom"===r.origin?"Y":"X",w=r.distance;"top"!==r.origin&&"left"!==r.origin||(w=/^-/.test(w)?w.substr(1):"-"+w);var _=w.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),E=_[0],T=_[1];switch(T){case"em":w=parseInt(e.fontSize)*E;break;case"px":w=E;break;case"%":w="Y"===b?t.node.getBoundingClientRect().height*E/100:t.node.getBoundingClientRect().width*E/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===b?l.push(v(w)):l.push(y(w))}r.rotate.x&&l.push(f(r.rotate.x)),r.rotate.y&&l.push(p(r.rotate.y)),r.rotate.z&&l.push(m(r.rotate.z)),1!==r.scale&&(0===r.scale?l.push(g(2e-4)):l.push(g(r.scale)));var I={};if(l.length){I.property=x("transform"),I.computed={raw:e[I.property],matrix:d(e[I.property])},l.unshift(I.computed.matrix);var S=l.reduce(h);I.generated={initial:I.property+": matrix3d("+S.join(", ")+");",final:I.property+": matrix3d("+I.computed.matrix.join(", ")+");"}}else I.generated={initial:"",final:""};var A={};if(u.generated||I.generated.initial){A.property=x("transition"),A.computed=e[A.property],A.fragments=[];var O=r.delay,k=r.duration,C=r.easing;u.generated&&A.fragments.push({delayed:"opacity "+k/1e3+"s "+C+" "+O/1e3+"s",instant:"opacity "+k/1e3+"s "+C+" 0s"}),I.generated.initial&&A.fragments.push({delayed:I.property+" "+k/1e3+"s "+C+" "+O/1e3+"s",instant:I.property+" "+k/1e3+"s "+C+" 0s"});var N=A.computed&&!A.computed.match(/all 0s|none 0s/);N&&A.fragments.unshift({delayed:A.computed,instant:A.computed});var D=A.fragments.reduce((function(t,e,n){return t.delayed+=0===n?e.delayed:", "+e.delayed,t.instant+=0===n?e.instant:", "+e.instant,t}),{delayed:"",instant:""});A.generated={delayed:A.property+": "+D.delayed+";",instant:A.property+": "+D.instant+";"}}else A.generated={delayed:"",instant:""};return{inline:i,opacity:u,position:n,transform:I,transition:A}}function D(t,e){e.split(";").forEach((function(e){var n=e.split(":"),r=n[0],i=n.slice(1);r&&i&&(t.style[r.trim()]=i.join(":"))}))}function R(t){var e,n=this;try{O(c(t),(function(t){var r=t.getAttribute("data-sr-id");if(null!==r){e=!0;var i=n.store.elements[r];i.callbackTimer&&window.clearTimeout(i.callbackTimer.clock),D(i.node,i.styles.inline.generated),t.removeAttribute("data-sr-id"),delete n.store.elements[r]}}))}catch(r){return k.call(this,"Clean failed.",r.message)}if(e)try{C.call(this)}catch(r){return k.call(this,"Clean failed.",r.message)}}function P(){var t=this;O(this.store.elements,(function(t){D(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")})),O(this.store.containers,(function(e){var n=e.node===document.documentElement?window:e.node;n.removeEventListener("scroll",t.delegate),n.removeEventListener("resize",t.delegate)})),this.store={containers:{},elements:{},history:[],sequences:{}}}function L(t){var e=[],n=arguments.length-1;while(n-- >0)e[n]=arguments[n+1];if(A(t))return O(e,(function(e){O(e,(function(e,n){A(e)?(t[n]&&A(t[n])||(t[n]={}),L(t[n],e)):t[n]=e}))})),t;throw new TypeError("Target must be an object literal.")}function j(t){return void 0===t&&(t=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(t)}var M=function(){var t=0;return function(){return t++}}();function $(){var t=this;C.call(this),O(this.store.elements,(function(t){var e=[t.styles.inline.generated];t.visible?(e.push(t.styles.opacity.computed),e.push(t.styles.transform.generated.final),t.revealed=!0):(e.push(t.styles.opacity.generated),e.push(t.styles.transform.generated.initial),t.revealed=!1),D(t.node,e.filter((function(t){return""!==t})).join(" "))})),O(this.store.containers,(function(e){var n=e.node===document.documentElement?window:e.node;n.addEventListener("scroll",t.delegate),n.addEventListener("resize",t.delegate)})),this.delegate(),this.initTimeout=null}function F(t,e){void 0===e&&(e={});var n=e.pristine||this.pristine,r="always"===t.config.useDelay||"onload"===t.config.useDelay&&n||"once"===t.config.useDelay&&!t.seen,i=t.visible&&!t.revealed,s=!t.visible&&t.revealed&&t.config.reset;return e.reveal||i?U.call(this,t,r):e.reset||s?V.call(this,t):void 0}function U(t,e){var n=[t.styles.inline.generated,t.styles.opacity.computed,t.styles.transform.generated.final];e?n.push(t.styles.transition.generated.delayed):n.push(t.styles.transition.generated.instant),t.revealed=t.seen=!0,D(t.node,n.filter((function(t){return""!==t})).join(" ")),q.call(this,t,e)}function V(t){var e=[t.styles.inline.generated,t.styles.opacity.generated,t.styles.transform.generated.initial,t.styles.transition.generated.instant];t.revealed=!1,D(t.node,e.filter((function(t){return""!==t})).join(" ")),q.call(this,t)}function q(t,e){var n=this,r=e?t.config.duration+t.config.delay:t.config.duration,i=t.revealed?t.config.beforeReveal:t.config.beforeReset,s=t.revealed?t.config.afterReveal:t.config.afterReset,o=0;t.callbackTimer&&(o=Date.now()-t.callbackTimer.start,window.clearTimeout(t.callbackTimer.clock)),i(t.node),t.callbackTimer={start:Date.now(),clock:window.setTimeout((function(){s(t.node),t.callbackTimer=null,t.revealed&&!t.config.reset&&t.config.cleanup&&R.call(n,t.node)}),r-o)}}function B(t,e){if(void 0===e&&(e=this.pristine),!t.visible&&t.revealed&&t.config.reset)return F.call(this,t,{reset:!0});var n=this.store.sequences[t.sequence.id],r=t.sequence.index;if(n){var i=new K(n,"visible",this.store),s=new K(n,"revealed",this.store);if(n.models={visible:i,revealed:s},!s.body.length){var o=n.members[i.body[0]],a=this.store.elements[o];if(a)return H.call(this,n,i.body[0],-1,e),H.call(this,n,i.body[0],1,e),F.call(this,a,{reveal:!0,pristine:e})}if(!n.blocked.head&&r===[].concat(s.head).pop()&&r>=[].concat(i.body).shift())return H.call(this,n,r,-1,e),F.call(this,t,{reveal:!0,pristine:e});if(!n.blocked.foot&&r===[].concat(s.foot).shift()&&r<=[].concat(i.body).pop())return H.call(this,n,r,1,e),F.call(this,t,{reveal:!0,pristine:e})}}function z(t){var e=Math.abs(t);if(isNaN(e))throw new RangeError("Invalid sequence interval.");this.id=M(),this.interval=Math.max(e,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function K(t,e,n){var r=this;this.head=[],this.body=[],this.foot=[],O(t.members,(function(t,i){var s=n.elements[t];s&&s[e]&&r.body.push(i)})),this.body.length&&O(t.members,(function(t,i){var s=n.elements[t];s&&!s[e]&&(i<r.body[0]?r.head.push(i):r.foot.push(i))}))}function H(t,e,n,r){var i=this,s=["head",null,"foot"][1+n],o=t.members[e+n],a=this.store.elements[o];t.blocked[s]=!0,setTimeout((function(){t.blocked[s]=!1,a&&B.call(i,a,r)}),t.interval)}function G(t,e,n){var r=this;void 0===e&&(e={}),void 0===n&&(n=!1);var i,s=[],o=e.interval||E.interval;try{o&&(i=new z(o));var a=c(t);if(!a.length)throw new Error("Invalid reveal target.");var u=a.reduce((function(t,n){var o={},a=n.getAttribute("data-sr-id");a?(L(o,r.store.elements[a]),D(o.node,o.styles.inline.computed)):(o.id=M(),o.node=n,o.seen=!1,o.revealed=!1,o.visible=!1);var u=L({},o.config||r.defaults,e);if(!u.mobile&&j()||!u.desktop&&!j())return a&&R.call(r,o),t;var l,h=c(u.container)[0];if(!h)throw new Error("Invalid container.");return h.contains(n)?(l=W(h,s,r.store.containers),null===l&&(l=M(),s.push({id:l,node:h})),o.config=u,o.containerId=l,o.styles=N(o),i&&(o.sequence={id:i.id,index:i.members.length},i.members.push(o.id)),t.push(o),t):t}),[]);O(u,(function(t){r.store.elements[t.id]=t,t.node.setAttribute("data-sr-id",t.id)}))}catch(l){return k.call(this,"Reveal failed.",l.message)}O(s,(function(t){r.store.containers[t.id]={id:t.id,node:t.node}})),i&&(this.store.sequences[i.id]=i),!0!==n&&(this.store.history.push({target:t,options:e}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout($.bind(this),0))}function W(t){var e=[],n=arguments.length-1;while(n-- >0)e[n]=arguments[n+1];var r=null;return O(e,(function(e){O(e,(function(e){null===r&&e.node===t&&(r=e.id)}))})),r}function Q(){var t=this;O(this.store.history,(function(e){G.call(t,e.target,e.options,!0)})),$.call(this)}var X=function(t){return(t>0)-(t<0)||+t},Y=Math.sign||X;function J(t,e){var n=e?t.node.clientHeight:t.node.offsetHeight,r=e?t.node.clientWidth:t.node.offsetWidth,i=0,s=0,o=t.node;do{isNaN(o.offsetTop)||(i+=o.offsetTop),isNaN(o.offsetLeft)||(s+=o.offsetLeft),o=o.offsetParent}while(o);return{bounds:{top:i,right:s+r,bottom:i+n,left:s},height:n,width:r}}function Z(t){var e,n;return t.node===document.documentElement?(e=window.pageYOffset,n=window.pageXOffset):(e=t.node.scrollTop,n=t.node.scrollLeft),{top:e,left:n}}function tt(t){void 0===t&&(t={});var e=this.store.containers[t.containerId];if(e){var n=Math.max(0,Math.min(1,t.config.viewFactor)),r=t.config.viewOffset,i={top:t.geometry.bounds.top+t.geometry.height*n,right:t.geometry.bounds.right-t.geometry.width*n,bottom:t.geometry.bounds.bottom-t.geometry.height*n,left:t.geometry.bounds.left+t.geometry.width*n},s={top:e.geometry.bounds.top+e.scroll.top+r.top,right:e.geometry.bounds.right+e.scroll.left-r.right,bottom:e.geometry.bounds.bottom+e.scroll.top-r.bottom,left:e.geometry.bounds.left+e.scroll.left+r.left};return i.top<s.bottom&&i.right>s.left&&i.bottom>s.top&&i.left<s.right||"fixed"===t.styles.position}}function et(t,e){var n=this;void 0===t&&(t={type:"init"}),void 0===e&&(e=this.store.elements),_((function(){var r="init"===t.type||"resize"===t.type;O(n.store.containers,(function(t){r&&(t.geometry=J.call(n,t,!0));var e=Z.call(n,t);t.scroll&&(t.direction={x:Y(e.left-t.scroll.left),y:Y(e.top-t.scroll.top)}),t.scroll=e})),O(e,(function(t){(r||void 0===t.geometry)&&(t.geometry=J.call(n,t)),t.visible=tt.call(n,t)})),O(e,(function(t){t.sequence?B.call(n,t):F.call(n,t)})),n.pristine=!1}))}function nt(){var t=document.documentElement.style;return"transform"in t||"WebkitTransform"in t}function rt(){var t=document.documentElement.style;return"transition"in t||"WebkitTransition"in t}var it,st,ot,at,ct,ut,lt,ht,dt="4.0.9";function ft(t){void 0===t&&(t={});var e,n="undefined"===typeof this||Object.getPrototypeOf(this)!==ft.prototype;if(n)return new ft(t);if(!ft.isSupported())return k.call(this,"Instantiation failed.","This browser is not supported."),S.failure();try{e=L({},ut||E,t)}catch(i){return k.call(this,"Invalid configuration.",i.message),S.failure()}try{var r=c(e.container)[0];if(!r)throw new Error("Invalid container.")}catch(i){return k.call(this,i.message),S.failure()}return ut=e,!ut.mobile&&j()||!ut.desktop&&!j()?(k.call(this,"This device is disabled.","desktop: "+ut.desktop,"mobile: "+ut.mobile),S.failure()):(S.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,it=it||et.bind(this),st=st||P.bind(this),ot=ot||G.bind(this),at=at||R.bind(this),ct=ct||Q.bind(this),Object.defineProperty(this,"delegate",{get:function(){return it}}),Object.defineProperty(this,"destroy",{get:function(){return st}}),Object.defineProperty(this,"reveal",{get:function(){return ot}}),Object.defineProperty(this,"clean",{get:function(){return at}}),Object.defineProperty(this,"sync",{get:function(){return ct}}),Object.defineProperty(this,"defaults",{get:function(){return ut}}),Object.defineProperty(this,"version",{get:function(){return dt}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),ht||(ht=this))}ft.isSupported=function(){return nt()&&rt()},Object.defineProperty(ft,"debug",{get:function(){return lt||!1},set:function(t){return lt="boolean"===typeof t?t:lt}}),ft();e["default"]=ft},"755e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.StreetViewPanorama=e.MountableMixin=e.Autocomplete=e.MapElementFactory=e.MapElementMixin=e.PlaceInput=e.Map=e.InfoWindow=e.Rectangle=e.Cluster=e.Circle=e.Polygon=e.Polyline=e.Marker=e.loadGmapApi=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.install=j,e.gmapApi=$;var i=n("f4a0"),s=R(i),o=n("b7b1"),a=n("82e1"),c=R(a),u=n("61b8"),l=R(u),h=n("f656"),d=R(h),f=n("5eac"),p=R(f),m=n("d75b"),g=R(m),y=n("54f9"),v=R(y),b=n("9cb5"),w=R(b),_=n("f895"),E=R(_),T=n("bc7a"),I=R(T),S=n("7bdd"),A=R(S),O=n("a8b4"),k=R(O),C=n("b7d9"),x=R(C),N=n("ce18"),D=R(N);function R(t){return t&&t.__esModule?t:{default:t}}var P=void 0,L=null;function j(t,e){e=r({installComponents:!0,autobindAllEvents:!1},e),L=new t({data:{gmapApi:null}});var n=new t,i=M(e);t.mixin({created:function(){this.$gmapDefaultResizeBus=n,this.$gmapOptions=e,this.$gmapApiPromiseLazy=i}}),t.$gmapDefaultResizeBus=n,t.$gmapApiPromiseLazy=i,e.installComponents&&(t.component("GmapMap",w.default),t.component("GmapMarker",c.default),t.component("GmapInfoWindow",v.default),t.component("GmapPolyline",l.default),t.component("GmapPolygon",d.default),t.component("GmapCircle",p.default),t.component("GmapRectangle",g.default),t.component("GmapAutocomplete",A.default),t.component("GmapPlaceInput",I.default),t.component("GmapStreetViewPanorama",E.default))}function M(t){function e(){return L.gmapApi={},window.google}if(t.load)return(0,s.default)((function(){return"undefined"===typeof window?new Promise((function(){})).then(e):new Promise((function(e,n){try{window["vueGoogleMapsInit"]=e,(0,o.loadGmapApi)(t.load,t.loadCn)}catch(r){n(r)}})).then(e)}));var n=new Promise((function(t){"undefined"!==typeof window&&(window["vueGoogleMapsInit"]=t)})).then(e);return(0,s.default)((function(){return n}))}function $(){return L.gmapApi&&window.google}e.loadGmapApi=o.loadGmapApi,e.Marker=c.default,e.Polyline=l.default,e.Polygon=d.default,e.Circle=p.default,e.Cluster=P,e.Rectangle=g.default,e.InfoWindow=v.default,e.Map=w.default,e.PlaceInput=I.default,e.MapElementMixin=k.default,e.MapElementFactory=x.default,e.Autocomplete=A.default,e.MountableMixin=D.default,e.StreetViewPanorama=E.default},"7a03":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){var r=function(n){(t.$gmapOptions.autobindAllEvents||t.$listeners[n])&&e.addListener(n,(function(e){t.$emit(n,e)}))},i=!0,s=!1,o=void 0;try{for(var a,c=n[Symbol.iterator]();!(i=(a=c.next()).done);i=!0){var u=a.value;r(u)}}catch(l){s=!0,o=l}finally{try{!i&&c.return&&c.return()}finally{if(s)throw o}}}},"7bdd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",t._g(t._b({ref:"input"},"input",t.$attrs,!1),t.$listeners))},i=[],s=function(t){return t.default||t}(n("51a8")),o=s,a=n("2877"),c=Object(a["a"])(o,r,i,!1,null,null,null);e["default"]=c.exports},"7ded":function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n("1fd5"),i=n("22e5"),s=n("589b"),o=n("e691");
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
class a{constructor(t,e){this._delegate=t,this.firebase=e,Object(s["_addComponent"])(t,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(t,e=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(t);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:e})}_removeServiceInstance(t,e=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){Object(s["_addComponent"])(this._delegate,t)}_addOrOverwriteComponent(t){Object(s["_addOrOverwriteComponent"])(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
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
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r["b"]("app-compat","Firebase",c);
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
function l(t){const e={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(t){delete e[t]}function o(t){if(t=t||s["_DEFAULT_ENTRY_NAME"],!Object(r["d"])(e,t))throw u.create("no-app",{appName:t});return e[t]}function a(i,o={}){const a=s["initializeApp"](i,o);if(Object(r["d"])(e,a.name))return e[a.name];const c=new t(a,n);return e[a.name]=c,c}function c(){return Object.keys(e).map(t=>e[t])}function l(e){const i=e.name,a=i.replace("-compat","");if(s["_registerComponent"](e)&&"PUBLIC"===e.type){const s=(t=o())=>{if("function"!==typeof t[a])throw u.create("invalid-app-argument",{appName:i});return t[a]()};void 0!==e.serviceProps&&Object(r["h"])(s,e.serviceProps),n[a]=s,t.prototype[a]=function(...t){const n=this._getService.bind(this,i);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[a]:null}function h(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=t,n}
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
 */function h(){const t=l(a);function e(e){Object(r["h"])(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:h,extendNamespace:e,createSubscribe:r["f"],ErrorFactory:r["b"],deepExtend:r["h"]}),t}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.10";
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
function g(t){Object(s["registerVersion"])(p,m,t)}
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
 */if(Object(r["k"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;g()},"82e1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("b7d9"),i=s(r);function s(t){return t&&t.__esModule?t:{default:t}}var o={animation:{twoWay:!0,type:Number},attribution:{type:Object},clickable:{type:Boolean,twoWay:!0,default:!0},cursor:{type:String,twoWay:!0},draggable:{type:Boolean,twoWay:!0,default:!1},icon:{twoWay:!0},label:{},opacity:{type:Number,default:1},options:{type:Object},place:{type:Object},position:{type:Object,twoWay:!0},shape:{type:Object,twoWay:!0},title:{type:String,twoWay:!0},zIndex:{type:Number,twoWay:!0},visible:{twoWay:!0,default:!0}},a=["click","rightclick","dblclick","drag","dragstart","dragend","mouseup","mousedown","mouseover","mouseout"];e.default=(0,i.default)({mappedProps:o,events:a,name:"marker",ctr:function(){return google.maps.Marker},inject:{$clusterPromise:{default:null}},render:function(t){return this.$slots.default&&0!==this.$slots.default.length?1===this.$slots.default.length?this.$slots.default[0]:t("div",this.$slots.default):""},destroyed:function(){this.$markerObject&&(this.$clusterObject?this.$clusterObject.removeMarker(this.$markerObject,!0):this.$markerObject.setMap(null))},beforeCreate:function(t){return this.$clusterPromise&&(t.map=null),this.$clusterPromise},afterCreate:function(t){var e=this;this.$clusterPromise&&this.$clusterPromise.then((function(n){n.addMarker(t),e.$clusterObject=n}))}})},"8c4f":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.2
  * (c) 2021 Evan You
  * @license MIT
  */function r(t,e){0}function i(t,e){for(var n in e)t[n]=e[n];return t}var s=/[!'()*]/g,o=function(t){return"%"+t.charCodeAt(0).toString(16)},a=/%2C/g,c=function(t){return encodeURIComponent(t).replace(s,o).replace(a,",")};function u(t){try{return decodeURIComponent(t)}catch(e){0}return t}function l(t,e,n){void 0===e&&(e={});var r,i=n||d;try{r=i(t||"")}catch(a){r={}}for(var s in e){var o=e[s];r[s]=Array.isArray(o)?o.map(h):h(o)}return r}var h=function(t){return null==t||"object"===typeof t?t:String(t)};function d(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=u(n.shift()),i=n.length>0?u(n.join("=")):null;void 0===e[r]?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return c(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(c(e)):r.push(c(e)+"="+c(t)))})),r.join("&")}return c(e)+"="+c(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var p=/\/?$/;function m(t,e,n,r){var i=r&&r.options.stringifyQuery,s=e.query||{};try{s=g(s)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:b(e,i),matched:t?v(t):[]};return n&&(o.redirectedFrom=b(n,i)),Object.freeze(o)}function g(t){if(Array.isArray(t))return t.map(g);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=g(t[n]);return e}return t}var y=m(null,{path:"/"});function v(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function b(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var i=t.hash;void 0===i&&(i="");var s=e||f;return(n||"/")+s(r)+i}function w(t,e,n){return e===y?t===e:!!e&&(t.path&&e.path?t.path.replace(p,"")===e.path.replace(p,"")&&(n||t.hash===e.hash&&_(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&_(t.query,e.query)&&_(t.params,e.params))))}function _(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,i){var s=t[n],o=r[i];if(o!==n)return!1;var a=e[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?_(s,a):String(s)===String(a)}))}function E(t,e){return 0===t.path.replace(p,"/").indexOf(e.path.replace(p,"/"))&&(!e.hash||t.hash===e.hash)&&T(t.query,e.query)}function T(t,e){for(var n in e)if(!(n in t))return!1;return!0}function I(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var i=n.instances[r],s=n.enteredCbs[r];if(i&&s){delete n.enteredCbs[r];for(var o=0;o<s.length;o++)i._isBeingDestroyed||s[o](i)}}}}var S={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,s=e.parent,o=e.data;o.routerView=!0;var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&A(m,o,p.route,p.configProps),a(m,o,r)):a()}var g=u.matched[h],y=g&&g.components[c];if(!g||!y)return l[c]=null,a();l[c]={component:y},o.registerRouteInstance=function(t,e){var n=g.instances[c];(e&&n!==t||!e&&n===t)&&(g.instances[c]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){g.instances[c]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==g.instances[c]&&(g.instances[c]=t.componentInstance),I(u)};var v=g.props&&g.props[c];return v&&(i(l[c],{route:u,configProps:v}),A(y,o,u,v)),a(y,o,r)}};function A(t,e,n,r){var s=e.props=O(n,r);if(s){s=e.props=i({},s);var o=e.attrs=e.attrs||{};for(var a in s)t.props&&a in t.props||(o[a]=s[a],delete s[a])}}function O(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function k(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?i.pop():"."!==a&&i.push(a)}return""!==i[0]&&i.unshift(""),i.join("/")}function C(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var i=t.indexOf("?");return i>=0&&(n=t.slice(i+1),t=t.slice(0,i)),{path:t,query:n,hash:e}}function x(t){return t.replace(/\/\//g,"/")}var N=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},D=Y,R=$,P=F,L=q,j=X,M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function $(t,e){var n,r=[],i=0,s=0,o="",a=e&&e.delimiter||"/";while(null!=(n=M.exec(t))){var c=n[0],u=n[1],l=n.index;if(o+=t.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=t[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],y=n[7];o&&(r.push(o),o="");var v=null!=d&&null!=h&&h!==d,b="+"===g||"*"===g,w="?"===g||"*"===g,_=n[2]||a,E=p||m;r.push({name:f||i++,prefix:d||"",delimiter:_,optional:w,repeat:b,partial:v,asterisk:!!y,pattern:E?z(E):y?".*":"[^"+B(_)+"]+?"})}}return s<t.length&&(o+=t.substr(s)),o&&r.push(o),r}function F(t,e){return q($(t,e),e)}function U(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function q(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"===typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",H(e)));return function(e,r){for(var i="",s=e||{},o=r||{},a=o.pretty?U:encodeURIComponent,c=0;c<t.length;c++){var u=t[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(i+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(N(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");i+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?V(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');i+=u.prefix+l}}else i+=u}return i}}function B(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function K(t,e){return t.keys=e,t}function H(t){return t&&t.sensitive?"":"i"}function G(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return K(t,e)}function W(t,e,n){for(var r=[],i=0;i<t.length;i++)r.push(Y(t[i],e,n).source);var s=new RegExp("(?:"+r.join("|")+")",H(n));return K(s,e)}function Q(t,e,n){return X($(t,n),e,n)}function X(t,e,n){N(e)||(n=e||n,e=[]),n=n||{};for(var r=n.strict,i=!1!==n.end,s="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)s+=B(a);else{var c=B(a.prefix),u="(?:"+a.pattern+")";e.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=B(n.delimiter||"/"),h=s.slice(-l.length)===l;return r||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+l+"|$)",K(new RegExp("^"+s,H(n)),e)}function Y(t,e,n){return N(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?G(t,e):N(t)?W(t,e,n):Q(t,e,n)}D.parse=R,D.compile=P,D.tokensToFunction=L,D.tokensToRegExp=j;var J=Object.create(null);function Z(t,e,n){e=e||{};try{var r=J[t]||(J[t]=D.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(i){return""}finally{delete e[0]}}function tt(t,e,n,r){var s="string"===typeof t?{path:t}:t;if(s._normalized)return s;if(s.name){s=i({},t);var o=s.params;return o&&"object"===typeof o&&(s.params=i({},o)),s}if(!s.path&&s.params&&e){s=i({},s),s._normalized=!0;var a=i(i({},e.params),s.params);if(e.name)s.name=e.name,s.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;s.path=Z(c,a,"path "+e.path)}else 0;return s}var u=C(s.path||""),h=e&&e.path||"/",d=u.path?k(u.path,h,n||s.append):h,f=l(u.query,s.query,r&&r.options.parseQuery),p=s.hash||u.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var et,nt=[String,Object],rt=[String,Array],it=function(){},st={name:"RouterLink",props:{to:{type:nt,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:rt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,s=n.resolve(this.to,r,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,p=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?f:this.exactActiveClass,y=a.redirectedFrom?m(null,tt(a.redirectedFrom),null,n):a;u[g]=w(r,y,this.exactPath),u[p]=this.exact||this.exactPath?u[g]:E(r,y);var v=u[g]?this.ariaCurrentValue:null,b=function(t){ot(t)&&(e.replace?n.replace(o,it):n.push(o,it))},_={click:ot};Array.isArray(this.event)?this.event.forEach((function(t){_[t]=b})):_[this.event]=b;var T={class:u},I=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:b,isActive:u[p],isExactActive:u[g]});if(I){if(1===I.length)return I[0];if(I.length>1||!I.length)return 0===I.length?t():t("span",{},I)}if("a"===this.tag)T.on=_,T.attrs={href:c,"aria-current":v};else{var S=at(this.$slots.default);if(S){S.isStatic=!1;var A=S.data=i({},S.data);for(var O in A.on=A.on||{},A.on){var k=A.on[O];O in _&&(A.on[O]=Array.isArray(k)?k:[k])}for(var C in _)C in A.on?A.on[C].push(_[C]):A.on[C]=b;var x=S.data.attrs=i({},S.data.attrs);x.href=c,x["aria-current"]=v}else T.on=_}return t(this.tag,T,this.$slots.default)}};function ot(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function at(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=at(e.children)))return e}}function ct(t){if(!ct.installed||et!==t){ct.installed=!0,et=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",S),t.component("RouterLink",st);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var ut="undefined"!==typeof window;function lt(t,e,n,r,i){var s=e||[],o=n||Object.create(null),a=r||Object.create(null);t.forEach((function(t){ht(s,o,a,t,i)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function ht(t,e,n,r,i,s){var o=r.path,a=r.name;var c=r.pathToRegexpOptions||{},u=ft(o,i,c.strict);"boolean"===typeof r.caseSensitive&&(c.sensitive=r.caseSensitive);var l={path:u,regex:dt(u,c),components:r.components||{default:r.component},alias:r.alias?"string"===typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:a,parent:i,matchAs:s,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var i=s?x(s+"/"+r.path):void 0;ht(t,e,n,r,l,i)})),e[l.path]||(t.push(l.path),e[l.path]=l),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:r.children};ht(t,e,n,p,i,l.path||"/")}a&&(n[a]||(n[a]=l))}function dt(t,e){var n=D(t,[],e);return n}function ft(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:x(e.path+"/"+t)}function pt(t,e){var n=lt(t),r=n.pathList,i=n.pathMap,s=n.nameMap;function o(t){lt(t,r,i,s)}function a(t,e){var n="object"!==typeof t?s[t]:void 0;lt([e||t],r,i,s,n),n&&n.alias.length&&lt(n.alias.map((function(t){return{path:t,children:[e]}})),r,i,s,n)}function c(){return r.map((function(t){return i[t]}))}function u(t,n,o){var a=tt(t,n,!1,e),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Z(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var f=0;f<r.length;f++){var p=r[f],m=i[p];if(mt(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function l(t,n){var r=t.redirect,i="function"===typeof r?r(m(t,n,null,e)):r;if("string"===typeof i&&(i={path:i}),!i||"object"!==typeof i)return d(null,n);var o=i,a=o.name,c=o.path,l=n.query,h=n.hash,f=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var p=gt(c,t),g=Z(p,f,'redirect route with path "'+p+'"');return u({_normalized:!0,path:g,query:l,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var r=Z(n,e.params,'aliased route with path "'+n+'"'),i=u({_normalized:!0,path:r});if(i){var s=i.matched,o=s[s.length-1];return e.params=i.params,d(o,e)}return d(null,e)}function d(t,n,r){return t&&t.redirect?l(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):m(t,n,r,e)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function mt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var i=1,s=r.length;i<s;++i){var o=t.keys[i-1];o&&(n[o.name||"pathMatch"]="string"===typeof r[i]?u(r[i]):r[i])}return!0}function gt(t,e){return k(t,e.parent?e.parent.path:"/",!0)}var yt=ut&&window.performance&&window.performance.now?window.performance:Date;function vt(){return yt.now().toFixed(3)}var bt=vt();function wt(){return bt}function _t(t){return bt=t}var Et=Object.create(null);function Tt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=i({},window.history.state);return n.key=wt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",At),function(){window.removeEventListener("popstate",At)}}function It(t,e,n,r){if(t.app){var i=t.options.scrollBehavior;i&&t.app.$nextTick((function(){var s=Ot(),o=i.call(t,e,n,r?s:null);o&&("function"===typeof o.then?o.then((function(t){Pt(t,s)})).catch((function(t){0})):Pt(o,s))}))}}function St(){var t=wt();t&&(Et[t]={x:window.pageXOffset,y:window.pageYOffset})}function At(t){St(),t.state&&t.state.key&&_t(t.state.key)}function Ot(){var t=wt();if(t)return Et[t]}function kt(t,e){var n=document.documentElement,r=n.getBoundingClientRect(),i=t.getBoundingClientRect();return{x:i.left-r.left-e.x,y:i.top-r.top-e.y}}function Ct(t){return Dt(t.x)||Dt(t.y)}function xt(t){return{x:Dt(t.x)?t.x:window.pageXOffset,y:Dt(t.y)?t.y:window.pageYOffset}}function Nt(t){return{x:Dt(t.x)?t.x:0,y:Dt(t.y)?t.y:0}}function Dt(t){return"number"===typeof t}var Rt=/^#\d/;function Pt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var r=Rt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var i=t.offset&&"object"===typeof t.offset?t.offset:{};i=Nt(i),e=kt(r,i)}else Ct(t)&&(e=xt(t))}else n&&Ct(t)&&(e=xt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Lt=ut&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function jt(t,e){St();var n=window.history;try{if(e){var r=i({},n.state);r.key=wt(),n.replaceState(r,"",t)}else n.pushState({key:_t(vt())},"",t)}catch(s){window.location[e?"replace":"assign"](t)}}function Mt(t){jt(t,!0)}function $t(t,e,n){var r=function(i){i>=t.length?n():t[i]?e(t[i],(function(){r(i+1)})):r(i+1)};r(0)}var Ft={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ut(t,e){return zt(t,e,Ft.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Ht(e)+'" via a navigation guard.')}function Vt(t,e){var n=zt(t,e,Ft.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function qt(t,e){return zt(t,e,Ft.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Bt(t,e){return zt(t,e,Ft.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function zt(t,e,n,r){var i=new Error(r);return i._isRouter=!0,i.from=t,i.to=e,i.type=n,i}var Kt=["params","query","hash"];function Ht(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return Kt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Gt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Wt(t,e){return Gt(t)&&t._isRouter&&(null==e||t.type===e)}function Qt(t){return function(e,n,r){var i=!1,s=0,o=null;Xt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){i=!0,s++;var c,u=te((function(e){Zt(e)&&(e=e.default),t.resolved="function"===typeof e?e:et.extend(e),n.components[a]=e,s--,s<=0&&r()})),l=te((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=Gt(t)?t:new Error(e),r(o))}));try{c=t(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),i||r()}}function Xt(t,e){return Yt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Yt(t){return Array.prototype.concat.apply([],t)}var Jt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Zt(t){return t.__esModule||Jt&&"Module"===t[Symbol.toStringTag]}function te(t){var e=!1;return function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var ee=function(t,e){this.router=t,this.base=ne(e),this.current=y,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ne(t){if(!t)if(ut){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function re(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ie(t,e,n,r){var i=Xt(t,(function(t,r,i,s){var o=se(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,r,i,s)})):n(o,r,i,s)}));return Yt(r?i.reverse():i)}function se(t,e){return"function"!==typeof t&&(t=et.extend(t)),t.options[e]}function oe(t){return ie(t,"beforeRouteLeave",ce,!0)}function ae(t){return ie(t,"beforeRouteUpdate",ce)}function ce(t,e){if(e)return function(){return t.apply(e,arguments)}}function ue(t){return ie(t,"beforeRouteEnter",(function(t,e,n,r){return le(t,n,r)}))}function le(t,e,n){return function(r,i,s){return t(r,i,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),s(t)}))}}ee.prototype.listen=function(t){this.cb=t},ee.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},ee.prototype.onError=function(t){this.errorCbs.push(t)},ee.prototype.transitionTo=function(t,e,n){var r,i=this;try{r=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var s=this.current;this.confirmTransition(r,(function(){i.updateRoute(r),e&&e(r),i.ensureURL(),i.router.afterHooks.forEach((function(t){t&&t(r,s)})),i.ready||(i.ready=!0,i.readyCbs.forEach((function(t){t(r)})))}),(function(t){n&&n(t),t&&!i.ready&&(Wt(t,Ft.redirected)&&s===y||(i.ready=!0,i.readyErrorCbs.forEach((function(e){e(t)}))))}))},ee.prototype.confirmTransition=function(t,e,n){var i=this,s=this.current;this.pending=t;var o=function(t){!Wt(t)&&Gt(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):(r(!1,"uncaught error during route navigation:"),console.error(t))),n&&n(t)},a=t.matched.length-1,c=s.matched.length-1;if(w(t,s)&&a===c&&t.matched[a]===s.matched[c])return this.ensureURL(),o(Vt(s,t));var u=re(this.current.matched,t.matched),l=u.updated,h=u.deactivated,d=u.activated,f=[].concat(oe(h),this.router.beforeHooks,ae(l),d.map((function(t){return t.beforeEnter})),Qt(d)),p=function(e,n){if(i.pending!==t)return o(qt(s,t));try{e(t,s,(function(e){!1===e?(i.ensureURL(!0),o(Bt(s,t))):Gt(e)?(i.ensureURL(!0),o(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(o(Ut(s,t)),"object"===typeof e&&e.replace?i.replace(e):i.push(e)):n(e)}))}catch(r){o(r)}};$t(f,p,(function(){var n=ue(d),r=n.concat(i.router.resolveHooks);$t(r,p,(function(){if(i.pending!==t)return o(qt(s,t));i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){I(t)}))}))}))},ee.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},ee.prototype.setupListeners=function(){},ee.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=y,this.pending=null};var he=function(t){function e(e,n){t.call(this,e,n),this._startLocation=de(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(Tt());var i=function(){var n=t.current,i=de(t.base);t.current===y&&i===t._startLocation||t.transitionTo(i,(function(t){r&&It(e,t,n,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){jt(x(r.base+t.fullPath)),It(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){Mt(x(r.base+t.fullPath)),It(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(de(this.base)!==this.current.fullPath){var e=x(this.base+this.current.fullPath);t?jt(e):Mt(e)}},e.prototype.getCurrentLocation=function(){return de(this.base)},e}(ee);function de(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(x(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var fe=function(t){function e(e,n,r){t.call(this,e,n),r&&pe(this.base)||me()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,r=Lt&&n;r&&this.listeners.push(Tt());var i=function(){var e=t.current;me()&&t.transitionTo(ge(),(function(n){r&&It(t.router,n,e,!0),Lt||be(n.fullPath)}))},s=Lt?"popstate":"hashchange";window.addEventListener(s,i),this.listeners.push((function(){window.removeEventListener(s,i)}))}},e.prototype.push=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){ve(t.fullPath),It(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this,i=this,s=i.current;this.transitionTo(t,(function(t){be(t.fullPath),It(r.router,t,s,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ge()!==e&&(t?ve(e):be(e))},e.prototype.getCurrentLocation=function(){return ge()},e}(ee);function pe(t){var e=de(t);if(!/^\/#/.test(e))return window.location.replace(x(t+"/#"+e)),!0}function me(){var t=ge();return"/"===t.charAt(0)||(be("/"+t),!1)}function ge(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ye(t){var e=window.location.href,n=e.indexOf("#"),r=n>=0?e.slice(0,n):e;return r+"#"+t}function ve(t){Lt?jt(ye(t)):window.location.hash=t}function be(t){Lt?Mt(ye(t)):window.location.replace(ye(t))}var we=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index+1).concat(t),r.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var r=this;this.transitionTo(t,(function(t){r.stack=r.stack.slice(0,r.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var r=this.stack[n];this.confirmTransition(r,(function(){var t=e.current;e.index=n,e.updateRoute(r),e.router.afterHooks.forEach((function(e){e&&e(r,t)}))}),(function(t){Wt(t,Ft.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(ee),_e=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=pt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!Lt&&!1!==t.fallback,this.fallback&&(e="hash"),ut||(e="abstract"),this.mode=e,e){case"history":this.history=new he(this,t.base);break;case"hash":this.history=new fe(this,t.base,this.fallback);break;case"abstract":this.history=new we(this,t.base);break;default:0}},Ee={currentRoute:{configurable:!0}};function Te(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ie(t,e,n){var r="hash"===n?"#"+e:e;return t?x(t+"/"+r):r}_e.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},Ee.currentRoute.get=function(){return this.history&&this.history.current},_e.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof he||n instanceof fe){var r=function(t){var r=n.current,i=e.options.scrollBehavior,s=Lt&&i;s&&"fullPath"in t&&It(e,t,r,!1)},i=function(t){n.setupListeners(),r(t)};n.transitionTo(n.getCurrentLocation(),i,i)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},_e.prototype.beforeEach=function(t){return Te(this.beforeHooks,t)},_e.prototype.beforeResolve=function(t){return Te(this.resolveHooks,t)},_e.prototype.afterEach=function(t){return Te(this.afterHooks,t)},_e.prototype.onReady=function(t,e){this.history.onReady(t,e)},_e.prototype.onError=function(t){this.history.onError(t)},_e.prototype.push=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.push(t,e,n)}));this.history.push(t,e,n)},_e.prototype.replace=function(t,e,n){var r=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){r.history.replace(t,e,n)}));this.history.replace(t,e,n)},_e.prototype.go=function(t){this.history.go(t)},_e.prototype.back=function(){this.go(-1)},_e.prototype.forward=function(){this.go(1)},_e.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},_e.prototype.resolve=function(t,e,n){e=e||this.history.current;var r=tt(t,e,n,this),i=this.match(r,e),s=i.redirectedFrom||i.fullPath,o=this.history.base,a=Ie(o,s,this.mode);return{location:r,route:i,href:a,normalizedTo:r,resolved:i}},_e.prototype.getRoutes=function(){return this.matcher.getRoutes()},_e.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==y&&this.history.transitionTo(this.history.getCurrentLocation())},_e.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==y&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(_e.prototype,Ee),_e.install=ct,_e.version="3.5.2",_e.isNavigationFailure=Wt,_e.NavigationFailureType=Ft,_e.START_LOCATION=y,ut&&window.Vue&&window.Vue.use(_e),e["a"]=_e},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return kr})),n.d(e,"b",(function(){return xr})),n.d(e,"c",(function(){return Cr})),n.d(e,"d",(function(){return Dr})),n.d(e,"e",(function(){return Nr})),n.d(e,"f",(function(){return Rr})),n.d(e,"g",(function(){return Pr})),n.d(e,"h",(function(){return Ar})),n.d(e,"i",(function(){return Or}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function m(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function g(t,e,n){return g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m,g.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var w=0,_={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=w)){var t=h(this);delete _[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function I(t){t:{var e=qn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function S(t){return Array.prototype.concat.apply([],arguments)}function A(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function O(t){return/^[\s\xa0]*$/.test(t)}var k,C=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function x(t,e){return-1!=t.indexOf(e)}function N(t,e){return t<e?-1:t>e?1:0}t:{var D=a.navigator;if(D){var R=D.userAgent;if(R){k=R;break t}}k=""}function P(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<j.length;e++)n=j[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $(t){return $[" "](t),t}function F(t){var e=J;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}$[" "]=c;var U,V=x(k,"Opera"),q=x(k,"Trident")||x(k,"MSIE"),B=x(k,"Edge"),z=B||q,K=x(k,"Gecko")&&!(x(k.toLowerCase(),"webkit")&&!x(k,"Edge"))&&!(x(k,"Trident")||x(k,"MSIE"))&&!x(k,"Edge"),H=x(k.toLowerCase(),"webkit")&&!x(k,"Edge");function G(){var t=a.document;return t?t.documentMode:void 0}t:{var W="",Q=function(){var t=k;return K?/rv:([^\);]+)(\)|;)/.exec(t):B?/Edge\/([\d\.]+)/.exec(t):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):H?/WebKit\/(\S+)/.exec(t):V?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(W=Q?Q[1]:""),q){var X=G();if(null!=X&&X>parseFloat(W)){U=String(X);break t}}U=W}var Y,J={};function Z(){return F((function(){let t=0;const e=C(String(U)).split("."),n=C("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=N(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||N(0==i[2].length,0==s[2].length)||N(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&q){var tt=G();Y=tt||(parseInt(U,10)||void 0)}else Y=void 0;var et=Y,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(K){t:{try{$(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},v(it,rt);var st={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function lt(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=E(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}lt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=dt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),pt={};function mt(t,e,n,r,i){if(r&&r.once)return vt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)mt(t,e[s],n,r,i);return null}return n=St(n),t&&t[ot]?t.N(e,n,l(r)?!!r.capture:!!r,i):gt(t,e,n,!1,r,i)}function gt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=Tt(t);if(a||(t[ft]=a=new lt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=yt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(_t(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=Et;return t}function vt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)vt(t,e[s],n,r,i);return null}return n=St(n),t&&t[ot]?t.O(e,n,l(r)?!!r.capture:!!r,i):gt(t,e,n,!0,r,i)}function bt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)bt(t,e[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=St(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=dt(s,n,r,i),-1<n&&(ut(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,r,i)),(n=-1<t?e[t]:null)&&wt(n))}function wt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])ht(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(_t(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tt(e))?(ht(n,t),0==n.h&&(n.src=null,e[ft]=null)):ut(t)}}}function _t(t){return t in pt?pt[t]:pt[t]="on"+t}function Et(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&wt(t),t=n.call(r,e)}return t}function Tt(t){return t=t[ft],t instanceof lt?t:null}var It="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[It]||(t[It]=function(e){return t.handleEvent(e)}),t[It])}function At(){b.call(this),this.i=new lt(this),this.P=this,this.I=null}function Ot(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),M(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=kt(o,r,!0,e)&&i}if(o=e.g=t,i=kt(o,r,!0,e)&&i,i=kt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=kt(o,r,!1,e)&&i}function kt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ht(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(At,b),At.prototype[ot]=!0,At.prototype.removeEventListener=function(t,e,n,r){bt(this,t,e,n,r)},At.prototype.M=function(){if(At.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},At.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},At.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var Ct=a.JSON.stringify;function xt(){var t=Ft;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nt{constructor(){this.h=this.g=null}add(t,e){const n=Rt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Dt,Rt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Pt,t=>t.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Lt(t){a.setTimeout(()=>{throw t},0)}function jt(t,e){Dt||Mt(),$t||(Dt(),$t=!0),Ft.add(t,e)}function Mt(){var t=a.Promise.resolve(void 0);Dt=function(){t.then(Ut)}}var $t=!1,Ft=new Nt;function Ut(){for(var t;t=xt();){try{t.h.call(t.g)}catch(n){Lt(n)}var e=Rt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$t=!1}function Vt(t,e){At.call(this),this.h=t||1,this.g=e||a,this.j=g(this.kb,this),this.l=Date.now()}function qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Bt(t,e,n){if("function"===typeof t)n&&(t=g(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=g(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function zt(t){t.g=Bt(()=>{t.g=null,t.i&&(t.i=!1,zt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Vt,At),r=Vt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ot(this,"tick"),this.da&&(qt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Vt.Z.M.call(this),qt(this),delete this.g};class Kt extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ht(t){b.call(this),this.h=t,this.g={}}v(Ht,b);var Gt=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(Gt[0]=n.toString()),n=Gt);for(var i=0;i<n.length;i++){var s=mt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qt(t){P(t.g,(function(t,e){this.g.hasOwnProperty(e)&&wt(t)}),t),t.g={}}function Xt(){this.g=!0}function Yt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Jt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ct(n)}catch(a){return e}}Ht.prototype.M=function(){Ht.Z.M.call(this),Qt(this)},Ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xt.prototype.Aa=function(){this.g=!1},Xt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new At}function se(t){rt.call(this,ne.Ma,t)}function oe(t){const e=ie();Ot(e,new se(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();Ot(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function le(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",v(se,rt),ne.STAT_EVENT="statevent",v(ae,rt),ne.Na="timingevent",v(ue,rt);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function pe(t){return t.h||(t.h=t.i())}function me(){}fe.prototype.h=null;var ge,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ve(){rt.call(this,"d")}function be(){rt.call(this,"c")}function we(){}function _e(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ht(this),this.P=Te,t=z?125:void 0,this.W=new Vt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ee}function Ee(){this.i=null,this.g="",this.h=!1}v(ve,rt),v(be,rt),v(we,fe),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},ge=new we;var Te=45e3,Ie={},Se={};function Ae(t,e,n){t.K=1,t.v=Ye(Ke(e)),t.s=n,t.U=!0,Oe(t,null)}function Oe(t,e){t.F=Date.now(),Ne(t),t.A=Ke(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ee,t.g=br(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Kt(g(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?L(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Yt(t.j,t.u,t.A,t.m,t.X,t.s)}function ke(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ce(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=xe(t,n),r==Se){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==Ie){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),je(t,r)}ke(t)&&r!=Se&&r!=Ie&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Le(t),Pe(t))}function xe(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Se:(n=Number(e.substring(n,r)),isNaN(n)?Ie:(r+=1,r+n>e.length?Se:(e=e.substr(r,n),t.C=r+n,e)))}function Ne(t){t.Y=Date.now()+t.P,De(t,t.P)}function De(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=le(g(t.eb,t),e)}function Re(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Pe(t){0==t.l.G||t.I||pr(t.l,t)}function Le(t){Re(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function je(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||_n(n.i,t)))if(n.I=t.N,!t.J&&_n(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fr(n),er(n)}lr(n),ce(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=le(g(n.ab,n),6e3));if(1>=wn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else gr(n,11)}else if((t.J||n.g==t)&&fr(n),!O(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(x(t,"spdy")||x(t,"quic")||x(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(En(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Xe(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=vr(r,r.H?r.la:null,r.W),o.J){Tn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Re(a),Ne(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||gr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?gr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function Me(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function $e(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)T(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Me(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Fe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Fe)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ue(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Ve(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Ve(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Ve(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=_e.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Wn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const h=Wn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||z||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=h||7==e||oe(8==e||0>=d?3:2),Re(this);var n=this.g.ba();this.N=n;e:if(ke(this)){var r=Qn(this.g);t="";var i=r.length,s=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Le(this),Pe(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Jt(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(c)){var l=c;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,ce(12),Le(this),Pe(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,je(this,n)}this.U?(Ce(this,h,o),z&&this.i&&3==h&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),je(this,o)),4==h&&Le(this),this.i&&!this.I&&(4==h?pr(this.l,this):(this.i=!1,Ne(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Le(this),Pe(this)}}}catch(h){}},r.fb=function(){if(this.g){var t=Wn(this.g),e=this.g.ga();this.C<e.length&&(Re(this),Ce(this,t,e),this.i&&4!=t&&Ne(this))}},r.cancel=function(){this.I=!0,Le(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Le(this),this.o=2,Pe(this)):De(this,this.Y-t)},r=Fe.prototype,r.R=function(){Ue(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ue(this),this.g.concat()},r.get=function(t,e){return Ve(this.h,t)?this.h[t]:e},r.set=function(t,e){Ve(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Be(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ze(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ze){this.g=void 0!==e?e:t.g,He(this,t.j),this.s=t.s,Ge(this,t.i),We(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Fe(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(qe))?(this.g=!!e,He(this,n[1]||"",!0),this.s=tn(n[2]||""),Ge(this,n[3]||"",!0),We(this,n[4]),this.l=tn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function Ke(t){return new ze(t)}function He(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ge(t,e,n){t.i=n?tn(e,!0):e}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof un?(t.h=e,mn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Xe(t,e,n){t.h.set(e,n)}function Ye(t){return Xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Je(t){return t instanceof ze?Ke(t):new ze(t,void 0)}function Ze(t,e,n,r){var i=new ze(null,void 0);return t&&He(i,t),e&&Ge(i,e),n&&We(i,n),r&&(i.l=r),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}ze.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ln(t){t.g||(t.g=new Fe,t.h=0,t.i&&Be(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function hn(t,e){ln(t),e=pn(t,e),Ve(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ve(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ue(t)))}function dn(t,e){return ln(t),e=pn(t,e),Ve(t.g.h,e)}function fn(t,e,n){hn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),A(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mn(t,e){e&&!t.j&&(ln(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(hn(this,e),fn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){ln(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){ln(this),this.g.forEach((function(n,r){T(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){ln(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){ln(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=S(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=S(e,t[n])}return e},r.set=function(t,e){return ln(this),this.i=null,t=pn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var gn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||vn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var vn=10;function bn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function wn(t){return t.h?1:t.g?t.g.size:0}function _n(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function En(t,e){t.g?t.g.add(e):t.h=e}function Tn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function In(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function Sn(){}function An(){this.g=new Sn}function On(t,e,n){const r=n||"";try{$e(t,(function(t,n){let i=t;l(t)&&(i=Ct(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function kn(t,e){const n=new Xt;if(a.Image){const r=new Image;r.onload=y(Cn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(Cn,n,r,"TestLoadImage: error",!1,e),r.onabort=y(Cn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(Cn,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Cn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function xn(t){this.l=t.$b||null,this.j=t.ib||!1}function Nn(t,e){At.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Dn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=In(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Sn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Sn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},v(xn,fe),xn.prototype.g=function(){return new Nn(this.l,this.j)},xn.prototype.i=function(t){return function(){return t}}({}),v(Nn,At);var Dn=0;function Rn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Pn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ln(t)}function Ln(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Nn.prototype,r.open=function(t,e){if(this.readyState!=Dn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ln(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pn(this)),this.readyState=Dn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pn(this):Ln(this),3==this.readyState&&Rn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Pn(this))},r.Ta=function(t){this.g&&(this.response=t,Pn(this))},r.ha=function(){this.g&&Pn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Nn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var jn=a.JSON.parse;function Mn(t){At.call(this),this.headers=new Fe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$n,this.K=this.L=!1}v(Mn,At);var $n="",Fn=/^https?$/i,Un=["POST","PUT"];function Vn(t){return q&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function qn(t){return"content-type"==t.toLowerCase()}function Bn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zn(t),Hn(t)}function zn(t){t.D||(t.D=!0,Ot(t,"complete"),Ot(t,"error"))}function Kn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Wn(t)||2!=t.ba()))if(t.v&&4==Wn(t))Bt(t.Fa,0,t);else if(Ot(t,"readystatechange"),4==Wn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.H).match(qe)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Fn.test(i?i.toLowerCase():"")}n=r}if(n)Ot(t,"complete"),Ot(t,"success");else{t.m=6;try{var c=2<Wn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",zn(t)}}finally{Hn(t)}}}function Hn(t,e){if(t.g){Gn(t);const r=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||Ot(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Gn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $n:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xn(t){let e="";return P(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Yn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Xn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Xe(t,e,n))}function Jn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Xt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Jn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Jn("baseRetryDelayMs",5e3,t),this.$a=Jn("retryDelaySeedMs",1e4,t),this.Ya=Jn("forwardChannelMaxRetries",2,t),this.ra=Jn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new An,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=Ke(t.F);Xe(n,"SID",t.J),Xe(n,"RID",e),Xe(n,"TYPE","terminate"),ar(t,n),e=new _e(t,t.h,e,void 0),e.K=2,e.v=Ye(Ke(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=br(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ne(e)}yr(t)}function er(t){t.g&&(hr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),fr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new gn(t.Za++,e)),3==t.G&&ir(t)}function ir(t){bn(t.i)||t.m||(t.m=!0,jt(t.Ha,t),t.C=0)}function sr(t,e){return!(wn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=le(g(t.Ha,t,e),mr(t,t.C)),t.C++,!0))}function or(t,e){var n;n=e?e.m:t.V++;const r=Ke(t.F);Xe(r,"SID",t.J),Xe(r,"RID",n),Xe(r,"AID",t.U),ar(t,r),t.o&&t.s&&Yn(r,t.o,t.s),n=new _e(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),En(t.i,n),Ae(n,r,e)}function ar(t,e){t.j&&$e({},(function(t,n){Xe(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?g(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),o=!1;else try{On(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,jt(t.Ga,t),t.A=0)}function lr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=le(g(t.Ga,t),mr(t,t.A)),t.A++,!0)}function hr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function dr(t){t.g=new _e(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ke(t.oa);Xe(e,"RID","rpc"),Xe(e,"SID",t.J),Xe(e,"CI",t.N?"0":"1"),Xe(e,"AID",t.U),ar(t,e),Xe(e,"TYPE","xmlhttp"),t.o&&t.s&&Yn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ye(Ke(e)),n.s=null,n.U=!0,Oe(n,t)}function fr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){fr(t),hr(t),t.g=null;var r=2}else{if(!_n(t.i,e))return;n=e.D,Tn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),Ot(r,new ue(r,n,e,i)),ir(t)}else ur(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&sr(t,e)||2==r&&lr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:gr(t,5);break;case 4:gr(t,10);break;case 3:gr(t,6);break;default:gr(t,2)}}function mr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function gr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=g(t.jb,t);n||(n=new ze("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||He(n,"https"),Ye(n)),kn(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),yr(t),nr(t)}function yr(t){t.G=0,t.I=-1,t.j&&(0==In(t.i).length&&0==t.l.length||(t.i.i.length=0,A(t.l),t.l.length=0),t.j.ua())}function vr(t,e,n){let r=Je(n);if(""!=r.i)e&&Ge(r,e+"."+r.i),We(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&P(t.aa,(function(t,e){Xe(r,e,t)})),e=t.D,n=t.sa,e&&n&&Xe(r,e,n),Xe(r,"VER",t.ma),ar(t,r),r}function br(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Mn(new xn({ib:!0})):new Mn(t.qa),e.L=t.H,e}function wr(){}function _r(){if(q&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Er(t,e){At.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!O(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sr(this)}function Tr(t){ve.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ir(){be.call(this),this.status=1}function Sr(t){this.g=t}r=Mn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?pe(this.u):pe(ge),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Bn(this,s)}t=n||"";const i=new Fe(this.headers);r&&$e(r,(function(t,e){i.set(e,t)})),r=I(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=E(Un,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Gn(this),0<this.B&&((this.K=Vn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=Bt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Bn(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ot(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ot(this,"complete"),Ot(this,"abort"),Hn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hn(this,!0)),Mn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Kn(this):this.cb())},r.cb=function(){Kn(this)},r.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),jn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new _e(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=L(s),M(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,i,e),n=Ke(this.F),Xe(n,"RID",t),Xe(n,"CVER",22),this.D&&Xe(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Yn(n,this.o,s),En(this.i,i),this.Ra&&Xe(n,"TYPE","init"),this.ja?(Xe(n,"$req",e),Xe(n,"SID","null"),i.$=!0,Ae(i,n,null)):Ae(i,n,e),this.G=2}}else 3==this.G&&(t?or(this,t):0==this.l.length||bn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=le(g(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),lr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=wr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},_r.prototype.g=function(t,e){return new Er(t,e)},v(Er,At),Er.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),jt(g(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=vr(t,null,t.W),ir(t)},Er.prototype.close=function(){tr(this.g)},Er.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=Ct(t),rr(this.g,e)):rr(this.g,t)},Er.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Er.Z.M.call(this)},v(Tr,ve),v(Ir,be),v(Sr,wr),Sr.prototype.xa=function(){Ot(this.g,"a")},Sr.prototype.wa=function(t){Ot(this.g,new Tr(t))},Sr.prototype.va=function(t){Ot(this.g,new Ir(t))},Sr.prototype.ua=function(){Ot(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Er.prototype.send=Er.prototype.u,Er.prototype.open=Er.prototype.m,Er.prototype.close=Er.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,de.COMPLETE="complete",me.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",At.prototype.listen=At.prototype.N,Mn.prototype.listenOnce=Mn.prototype.O,Mn.prototype.getLastError=Mn.prototype.La,Mn.prototype.getLastErrorCode=Mn.prototype.Da,Mn.prototype.getStatus=Mn.prototype.ba,Mn.prototype.getResponseJson=Mn.prototype.Qa,Mn.prototype.getResponseText=Mn.prototype.ga,Mn.prototype.send=Mn.prototype.ea;var Ar=s.createWebChannelTransport=function(){return new _r},Or=s.getStatEventTarget=function(){return ie()},kr=s.ErrorCode=he,Cr=s.EventType=de,xr=s.Event=ne,Nr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Dr=s.FetchXmlHttpFactory=xn,Rr=s.WebChannel=me,Pr=s.XhrIo=Mn}).call(this,n("c8ba"))},"9cb5":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-map-container"},[n("div",{ref:"vue-map",staticClass:"vue-map"}),n("div",{staticClass:"vue-map-hidden"},[t._t("default")],2),t._t("visible")],2)},i=[],s=function(t){return t.default||t}(n("d092")),o=s,a=(n("2789"),n("2877")),c=Object(a["a"])(o,r,i,!1,null,null,null);e["default"]=c.exports},a8b4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={inject:{$mapPromise:{default:"abcdef"}},provide:function(){var t=this;return this.$mapPromise.then((function(e){t.$map=e})),{}}}},b7b1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=!1;e.loadGmapApi=function(t,e){if("undefined"!==typeof document){if(i)throw new Error("You already started the loading of google maps");i=!0;var n=document.createElement("SCRIPT");if("object"!==("undefined"===typeof t?"undefined":r(t)))throw new Error("options should  be an object");Array.prototype.isPrototypeOf(t.libraries)&&(t.libraries=t.libraries.join(",")),t["callback"]="vueGoogleMapsInit";var s="https://maps.googleapis.com/";"boolean"===typeof e&&!0===e&&(s="https://maps.google.cn/");var o=s+"maps/api/js?"+Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&");n.setAttribute("src",o),n.setAttribute("async",""),n.setAttribute("defer",""),document.head.appendChild(n)}}},b7d9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){i=!0,s=c}finally{try{!r&&a["return"]&&a["return"]()}finally{if(i)throw s}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=function(t){var e=t.mappedProps,n=t.name,r=t.ctr,s=t.ctrArgs,c=t.events,l=t.beforeCreate,g=t.afterCreate,y=t.props,v=f(t,["mappedProps","name","ctr","ctrArgs","events","beforeCreate","afterCreate","props"]),b="$"+n+"Promise",w="$"+n+"Object";return p(!(v.props instanceof Array),"`props` should be an object, not Array"),i({},"undefined"!==typeof GENERATE_DOC?{$vgmOptions:t}:{},{mixins:[u.default],props:i({},y,m(e)),render:function(){return""},provide:function(){var t=this,n=this.$mapPromise.then((function(n){t.$map=n;var r=i({},t.options,{map:n},(0,a.getPropsValues)(t,e));if(delete r.options,l){var s=l.bind(t)(r);if(s instanceof Promise)return s.then((function(){return{options:r}}))}return{options:r}})).then((function(n){var i,u=n.options,l=r();return t[w]=s?new((i=Function.prototype.bind).call.apply(i,[l,null].concat(d(s(u,(0,a.getPropsValues)(t,y||{})))))):new l(u),(0,a.bindProps)(t,t[w],e),(0,o.default)(t,t[w],c),g&&g.bind(t)(t[w]),t[w]}));return this[b]=n,h({},b,n)},destroyed:function(){this[w]&&this[w].setMap&&this[w].setMap(null)}},v)},e.mappedPropsToVueProps=m;var s=n("7a03"),o=l(s),a=n("2adb"),c=n("a8b4"),u=l(c);function l(t){return t&&t.__esModule?t:{default:t}}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function f(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function p(t,e){if(!t)throw new Error(e)}function m(t){return Object.entries(t).map((function(t){var e=r(t,2),n=e[0],i=e[1],s={};return"type"in i&&(s.type=i.type),"default"in i&&(s.default=i.default),"required"in i&&(s.required=i.required),[n,s]})).reduce((function(t,e){var n=r(e,2),i=n[0],s=n[1];return t[i]=s,t}),{})}},bc7a:function(t,e,n){"use strict";n.r(e);var r=n("fea1"),i=n("0c5e");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);var o=n("2877"),a=Object(o["a"])(i["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ce18:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["resizeBus"],data:function(){return{_actualResizeBus:null}},created:function(){"undefined"===typeof this.resizeBus?this.$data._actualResizeBus=this.$gmapDefaultResizeBus:this.$data._actualResizeBus=this.resizeBus},methods:{_resizeCallback:function(){this.resize()},_delayedResizeCallback:function(){var t=this;this.$nextTick((function(){return t._resizeCallback()}))}},watch:{resizeBus:function(t){this.$data._actualResizeBus=t},"$data._actualResizeBus":function(t,e){e&&e.$off("resize",this._delayedResizeCallback),t&&t.$on("resize",this._delayedResizeCallback)}},destroyed:function(){this.$data._actualResizeBus&&this.$data._actualResizeBus.$off("resize",this._delayedResizeCallback)}}},d092:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("7a03"),s=p(i),o=n("2adb"),a=n("ce18"),c=p(a),u=n("5836"),l=p(u),h=n("034d"),d=p(h),f=n("b7d9");function p(t){return t&&t.__esModule?t:{default:t}}var m={center:{required:!0,twoWay:!0,type:Object,noBind:!0},zoom:{required:!1,twoWay:!0,type:Number,noBind:!0},heading:{type:Number,twoWay:!0},mapTypeId:{twoWay:!0,type:String},tilt:{twoWay:!0,type:Number},options:{type:Object,default:function(){return{}}}},g=["bounds_changed","click","dblclick","drag","dragend","dragstart","idle","mousemove","mouseout","mouseover","resize","rightclick","tilesloaded"],y=["panBy","panTo","panToBounds","fitBounds"].reduce((function(t,e){return t[e]=function(){this.$mapObject&&this.$mapObject[e].apply(this.$mapObject,arguments)},t}),{}),v={resize:function(){this.$mapObject&&google.maps.event.trigger(this.$mapObject,"resize")},resizePreserveCenter:function(){if(this.$mapObject){var t=this.$mapObject.getCenter();google.maps.event.trigger(this.$mapObject,"resize"),this.$mapObject.setCenter(t)}},_resizeCallback:function(){this.resizePreserveCenter()}};e.default={mixins:[c.default],props:(0,f.mappedPropsToVueProps)(m),provide:function(){var t=this;return this.$mapPromise=new Promise((function(e,n){t.$mapPromiseDeferred={resolve:e,reject:n}})),{$mapPromise:this.$mapPromise}},computed:{finalLat:function(){return this.center&&"function"===typeof this.center.lat?this.center.lat():this.center.lat},finalLng:function(){return this.center&&"function"===typeof this.center.lng?this.center.lng():this.center.lng},finalLatLng:function(){return{lat:this.finalLat,lng:this.finalLng}}},watch:{zoom:function(t){this.$mapObject&&this.$mapObject.setZoom(t)}},mounted:function(){var t=this;return this.$gmapApiPromiseLazy().then((function(){var e=t.$refs["vue-map"],n=r({},t.options,(0,o.getPropsValues)(t,m));return delete n.options,t.$mapObject=new google.maps.Map(e,n),(0,o.bindProps)(t,t.$mapObject,m),(0,s.default)(t,t.$mapObject,g),(0,l.default)((function(e,n,r){t.$mapObject.addListener("center_changed",(function(){r()&&t.$emit("center_changed",t.$mapObject.getCenter()),n()})),(0,d.default)(t,["finalLat","finalLng"],(function(){e(),t.$mapObject.setCenter(t.finalLatLng)}))})),t.$mapObject.addListener("zoom_changed",(function(){t.$emit("zoom_changed",t.$mapObject.getZoom())})),t.$mapObject.addListener("bounds_changed",(function(){t.$emit("bounds_changed",t.$mapObject.getBounds())})),t.$mapPromiseDeferred.resolve(t.$mapObject),t.$mapObject})).catch((function(t){throw t}))},methods:r({},v,y)}},d75b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("b7d9"),i=s(r);function s(t){return t&&t.__esModule?t:{default:t}}var o={bounds:{type:Object,twoWay:!0},draggable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},options:{type:Object,twoWay:!1}},a=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];e.default=(0,i.default)({mappedProps:o,name:"rectangle",ctr:function(){return google.maps.Rectangle},events:a})},d865:function(t,e,n){"use strict";n("f671")},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!i){n=o+1;break}}return-1===e||-1===r||0===s||1===s&&e===r-1&&e===n+1?"":t.slice(e,r)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h}));
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
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function l(t){r.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of r){let r=null;e&&e.level&&(r=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}},f4a0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=!1,n=void 0;return function(){return e||(e=!0,n=t()),n}}},f656:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(c){i=!0,s=c}finally{try{!r&&a["return"]&&a["return"]()}finally{if(i)throw s}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=n("b7d9"),s=o(i);function o(t){return t&&t.__esModule?t:{default:t}}var a={draggable:{type:Boolean},editable:{type:Boolean},options:{type:Object},path:{type:Array,twoWay:!0,noBind:!0},paths:{type:Array,twoWay:!0,noBind:!0}},c=["click","dblclick","drag","dragend","dragstart","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];e.default=(0,s.default)({props:{deepWatch:{type:Boolean,default:!1}},events:c,mappedProps:a,name:"polygon",ctr:function(){return google.maps.Polygon},beforeCreate:function(t){t.path||delete t.path,t.paths||delete t.paths},afterCreate:function(t){var e=this,n=function(){};this.$watch("paths",(function(i){if(i){n(),t.setPaths(i);for(var s=function(){e.$emit("paths_changed",t.getPaths())},o=[],a=t.getPaths(),c=0;c<a.getLength();c++){var u=a.getAt(c);o.push([u,u.addListener("insert_at",s)]),o.push([u,u.addListener("remove_at",s)]),o.push([u,u.addListener("set_at",s)])}o.push([a,a.addListener("insert_at",s)]),o.push([a,a.addListener("remove_at",s)]),o.push([a,a.addListener("set_at",s)]),n=function(){o.map((function(t){var e=r(t,2),n=(e[0],e[1]);return google.maps.event.removeListener(n)}))}}}),{deep:this.deepWatch,immediate:!0}),this.$watch("path",(function(i){if(i){n(),t.setPaths(i);var s=t.getPath(),o=[],a=function(){e.$emit("path_changed",t.getPath())};o.push([s,s.addListener("insert_at",a)]),o.push([s,s.addListener("remove_at",a)]),o.push([s,s.addListener("set_at",a)]),n=function(){o.map((function(t){var e=r(t,2),n=(e[0],e[1]);return google.maps.event.removeListener(n)}))}}}),{deep:this.deepWatch,immediate:!0})}})},f671:function(t,e,n){},f895:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-street-view-pano-container"},[n("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),t._t("default")],2)},i=[],s=function(t){return t.default||t}(n("0a78")),o=s,a=(n("d865"),n("2877")),c=Object(a["a"])(o,r,i,!1,null,null,null);e["default"]=c.exports},fe81:function(t,e,n){},fea1:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",[n("span",{domProps:{textContent:t._s(t.label)}}),n("input",{ref:"input",class:t.className,attrs:{type:"text",placeholder:t.placeholder}})])},i=[]}}]);
//# sourceMappingURL=chunk-vendors.fac3cfbc.js.map