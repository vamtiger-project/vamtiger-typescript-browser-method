!function(){"use strict";var e,t,r,n,o,a,i,s,c,u,l,f,d,m,p,h,v,y,w;!function(e){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function r(e,r){return e!==t&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(t,n){return e[t]=r?r(t,n):n}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(n){e(r(t,r(n)))}):"object"==typeof module&&"object"==typeof module.exports?e(r(t,r(module.exports))):e(r(t))}(function(b){var g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};e=function(e,t){function r(){this.constructor=e}g(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},t=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r},n=function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},o=function(e,t){return function(r,n){t(r,n,e)}},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,s)}c((n=n.apply(e,t||[])).next())})},s=function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},c=function(e,t){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])},u=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}},l=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},f=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]));return e},d=function(e){return this instanceof d?(this.v=e,this):new d(e)},m=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(e){o[e]&&(n[e]=function(t){return new Promise(function(r,n){a.push([e,t,r,n])>1||s(e,t)})})}function s(e,t){try{(r=o[e](t)).value instanceof d?Promise.resolve(r.value.v).then(c,u):l(a[0][2],r)}catch(e){l(a[0][3],e)}var r}function c(e){s("next",e)}function u(e){s("throw",e)}function l(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}},p=function(e){var t,r;return t={},n("next"),n("throw",function(e){throw e}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:d(e[n](t)),done:"return"===n}:o?o(t):t}:o}},h=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e="function"==typeof u?u(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,o){(function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)})(n,o,(t=e[r](t)).done,t.value)})}}},v=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},w=function(e){return e&&e.__esModule?e:{default:e}},b("__extends",e),b("__assign",t),b("__rest",r),b("__decorate",n),b("__param",o),b("__metadata",a),b("__awaiter",i),b("__generator",s),b("__exportStar",c),b("__values",u),b("__read",l),b("__spread",f),b("__await",d),b("__asyncGenerator",m),b("__asyncDelegator",p),b("__asyncValues",h),b("__makeTemplateObject",v),b("__importStar",y),b("__importDefault",w)});var b=Object.freeze({});const g=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};function _(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,s)}c((n=n.apply(e,t)).next())})}var S,j,E,k,P,L,O,C,x,M,T,D,B,A,N,W,I,q,R,V,H,J,Q;Object.keys(b).forEach(function(e){self[e]||(self[e]=b[e])}),function(e){e.window="window",e.worker="worker"}(S||(S={})),function(e){e[e.webComponent=6e4]="webComponent",e[e.indexDbIsAccessible=100]="indexDbIsAccessible"}(j||(j={})),function(e){e.webComponent="webComponent"}(E||(E={})),function(e){e.db="vamtiger-browser-method",e.messageIdWindow="vamtiger-browser-method-window",e.messageIdWorker="vamtiger-browser-method-worker"}(k||(k={})),function(e){e.nowhere="",e.everyWhere="*"}(P||(P={})),function(e){e.localHost="localhost"}(L||(L={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method.js"}(O||(O={})),function(e){e.js="text/javascript",e.json="application/json",e.jsonld="application/ld+json"}(C||(C={})),function(e){e.type="type"}(x||(x={})),function(e){e.vamtigerElementQuery="vamtigerLoadElementQueryCss",e.elementQueryCssLoaded="elementQueryCssLoaded"}(M||(M={})),function(e){e.failedToLoadScript="Failed to load script",e.windowPropertyNotSet="Window property not set",e.unsupportedFeature="Unsupported feature",e.customElementAreadyDefined="Custom element already defined",e.noElementName="No Element Name",e.noTemplateUrl="No Template URL",e.noElementSelector="No Template Selector",e.noTemplateForUrl="No Template for URL",e.noTemplate="No Template",e.noElementForSelector="No Element for Selector",e.noJsonLdParameter='No "jsonLd" property set'}(T||(T={})),function(e){e.nothing="",e.slash="/",e.dash="-",e.pipe="|",e.comma=",",e.backTick="`",e.doubleQuote='"'}(D||(D={})),function(e){e.div="div",e.template="template"}(B||(B={})),function(e){e.stylesheet="stylesheet"}(A||(A={})),function(e){e.script="script",e.link="link",e.style="style"}(N||(N={})),function(e){e.lastStylesheet="style:last-of-type",e.lastMetaElement="head > meta:last-of-type",e.webcomponentsjs='script[src*="@webcomponents/webcomponentsjs"]',e.style="style",e.stylesheet=' link[rel="stylesheet"]',e.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',e.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]',e.vamtigerBrowserMethod='[data-name$="vamtiger-browser-method.js"]'}(W||(W={})),function(e){e.loadElementQueryCss="vamtiger-load-element-query-css"}(I||(I={})),function(e){e.style="style",e.stylesheet="stylesheet"}(q||(q={})),function(e){e.ignore="ignore",e.removeRedundantScripts="removeRedundantScripts",e.setWorkerSupport="setWorkerSupport",e.saveWebComponentData="saveWebComponentData",e.getWebComponentData="getWebComponentData",e.dequeue="dequeue",e.loadWebComponentData="loadWebComponentData",e.saveSupport="saveSupport"}(R||(R={})),function(e){e.vamtigerBrowserSupport="vamtiger-browser-support"}(V||(V={})),function(e){e.support="support",e.webComponent="web-component"}(H||(H={})),function(e){e.readonly="readonly",e.readwrite="readwrite",e.versionchange="versionchange"}(J||(J={})),function(e){e.webComponent="url",e.support="environment"}(Q||(Q={}));var U=/:{1,2}host/gm,F=(new RegExp(D.dash,"g"),/\W+/g),G={worker:[W.vamtigerBrowserMethod].join(D.comma),redundantScripts:[W.vamtigerBrowserMethodJsonJs,W.vamtigerBrowserMethodJson,W.vamtigerBrowserMethod].join(D.comma)},$=postMessage,z=D.nothing;var K=D.nothing,X=F,Y=function(e){return e.split(X).map(function(e,t){return!t&&e.toLowerCase()||e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}).join(K)},Z=U,ee=D.nothing;function te(e){var t=e.css,r=e.stylesheetName,n=void 0===r?ee:r,o=e.hostName,a=void 0===o?ee:o,i=function(e){var t=e.selector,r=void 0===t?z:t,n=e.properties,o=void 0===n?{}:n,a=e.dataset,i=void 0===a?{}:a,s=e.attributes,c=void 0===s?{}:s,u=o.id,l=document.head,f=l.querySelector(W.lastMetaElement),d=Object.keys(c),m=u&&(window[u]||r&&l.querySelector(r)),p=!m&&document.createElement("meta"),h=m||p;return p&&(Object.assign(p,o),Object.assign(p.dataset,i),f&&f.nextElementSibling?l.insertBefore(p,f.nextElementSibling):l.appendChild(p)),d.forEach(function(e){return!h.hasAttribute(e)&&h.setAttribute(void 0,c[e])}),h}({properties:{id:I.loadElementQueryCss}}),s=Y(n),c=i.dataset,u=!c.hasOwnProperty(a)&&a&&t.replace(Z,a)||t,l=self.EQCSS;u&&l&&(l.register(l.parse(u)),s?c[s]=ee:a&&(c[a]=ee))}var re=T.failedToLoadScript,ne=A.stylesheet,oe=N.script,ae=N.link,ie=N.style,se=function(e){return new Promise(function(t,r){var n=document.head,o=document.body,a=e,i=a.js,s=a.name,c=a.jsonld,u=a.removeFromDom,l=e.src,f=e,d=f.css,m=f.name,p=e.href,h=e.json,v=e.hasOwnProperty("src")||e.hasOwnProperty("href"),y=(i||l)&&oe||d&&ie||p&&ae,w=l&&'script[src="'+l+'"]'||p&&'link[href="'+p+'"]'||i&&s&&'script[data-name="'+s+'"]'||d&&m&&'style[data-name="'+m+'"]',b=n.querySelector(w)||o.querySelector(w),g=w&&y&&document.createElement(y);function _(){g&&(j(),u&&n.removeChild(g),t(g))}function S(e){j(),console.error(e),r(new Error(""+re))}function j(){g&&(g.removeEventListener("load",_),g.removeEventListener("error",S))}g instanceof HTMLScriptElement?l?g.src=l:(h||i)&&(g.innerHTML=h||i,g.dataset.name=s,c?g.setAttribute(x.type,C.jsonld):h&&g.setAttribute(x.type,C.json)):g instanceof HTMLLinkElement?(g.rel=ne,g.href=p):g instanceof HTMLStyleElement&&(g.innerHTML=d,g.dataset.name=m,te({css:d,stylesheetName:m})),b?t(b):g&&(g.addEventListener("load",_),g.addEventListener("error",S),n.appendChild(g),v||_())})};var ce=T.unsupportedFeature,ue=T.customElementAreadyDefined;var le=D.dash;function fe(e){return new Promise(function(t,r){var n=self.requestIdleCallback;n?n(function(){return de(e,t)}):de(e,t)})}function de(e,t){return _(this,void 0,void 0,function(){var r,n,o,a,i;return __generator(this,function(s){switch(s.label){case 0:return r=e.container,n=e.name,o=Array.from(r.content.querySelectorAll(W.style)).map(function(e,t){return{name:[n,q.style,t++].join(le),css:e.innerHTML}}),a=Array.from(r.content.querySelectorAll(W.stylesheet)).map(function(e,t){return{name:[n,q.stylesheet,t++].join(le),href:e.href}}),[4,Promise.all(o.map(se).concat(a.map(se)))];case 1:return i=s.sent(),t(i),[2]}})})}var me=T.noElementName,pe=T.noTemplate,he=T.noElementForSelector;var ve=T.noElementName,ye=T.noElementSelector,we=T.noTemplateUrl,be=T.noTemplateForUrl,ge=T.noElementForSelector;function _e(e,t){return _(this,void 0,void 0,function(){var r;return __generator(this,function(n){switch(n.label){case 0:return e.url?[4,function(e){return _(this,void 0,void 0,function(){var t,r,n,o,a,i,s,c;return __generator(this,function(u){switch(u.label){case 0:return t=e.name,r=e.url,n=e.selector,o=e.loadStylesheets,document.head,(i=t&&n&&r)?[4,fetch(r).then(function(e){return e.text()})]:[3,2];case 1:i=u.sent(),u.label=2;case 2:if(s=(a=i)&&document.createElement(B.template),c=null,!t)throw new Error(ve);if(!n)throw new Error(ye);if(!r)throw new Error(we);if(!a)throw new Error(be);return s?(s.innerHTML=a,c=s.content.querySelector(n),o&&c?[4,fe(g({},e,{container:s}))]:[3,4]):[3,5];case 3:u.sent(),u.label=4;case 4:u.label=5;case 5:if(!c)throw new Error(ge);return c.setAttribute("dataset-name",t),[2,c]}})})}(e)]:[3,2];case 1:return r=n.sent(),[3,4];case 2:return[4,function(e){return _(this,void 0,void 0,function(){var t,r,n,o,a,i;return __generator(this,function(s){switch(s.label){case 0:if(t=e.name,r=e.template,n=e.loadStylesheets,o=e.selector,a=t&&r&&document.createElement(B.template),i=null,!t)throw new Error(me);if(!r)throw new Error(pe);return a?(a.innerHTML=r,i=o&&a.content.firstElementChild&&a.content.firstElementChild.querySelector(o)||a.content.firstElementChild,n&&i?[4,fe(g({},e,{container:a}))]:[3,2]):[3,3];case 1:s.sent(),s.label=2;case 2:s.label=3;case 3:if(!i)throw new Error(he);return i.dataset.name=t,[2,i]}})})}(e)];case 3:r=n.sent(),n.label=4;case 4:return t(r),[2]}})})}var Se=j.webComponent;function je(e){var t,r=e.key,n={resolve:e.resolve,reject:e.reject},o=self.VamtigerBrowserMethod.messageQueue;!o.has(r)&&o.set(r,new Set),(t=o.get(r))&&t.add(n),setTimeout(function(){return function(e){var t=e.key,r=e.queueEntry,n=self.VamtigerBrowserMethod.messageQueue,o=n.get(t);o&&(o.has(r)&&o.delete(r),!o.size&&n.delete(t))}({key:r,queueEntry:n})},Se)}function Ee(){return self.VamtigerBrowserMethod.environment===S.window}function ke(){return self.VamtigerBrowserMethod.environment===S.worker}var Pe=V.vamtigerBrowserSupport;function Le(e){return _(this,void 0,void 0,function(){var t,r,n,o,a;return __generator(this,function(i){switch(i.label){case 0:return t=e.storeName,e.keyPath,r=e.mode,[4,new Promise(function(e,t){var r=indexedDB.open(Pe,1);r.addEventListener("error",t),r.addEventListener("upgradeneeded",function(){return e={db:r.result},t=e.db,void Object.keys(Q).forEach(function(e){return!t.objectStoreNames.contains(e)&&t.createObjectStore(H[e],{keyPath:Q[e]})});var e,t}),r.addEventListener("success",function(){return e(r.result)})})];case 1:return n=i.sent(),o=n&&n.transaction&&n.transaction(t,r),a=o&&o.objectStore&&o.objectStore(t),[2,{db:n,transaction:o,store:a}]}})})}var Oe=JSON.stringify,Ce=new TextEncoder;function xe(e){var t=self.VamtigerBrowserMethod,r=t.worker,n=(t.support||{}).textEncoder,o=Oe(e),a=n&&Ce.encode(o)||o;Ee()&&r&&r.postMessage(a),ke()&&$(a)}var Me=J.readwrite,Te=R.getWebComponentData;function De(e){var t=e.storeName,r=e.keyPath,n=e.data,o=e.messageId;return _(this,void 0,void 0,function(){var e,a;return __generator(this,function(i){switch(i.label){case 0:return[4,Le({storeName:t,keyPath:r,mode:Me})];case 1:return e=i.sent().store,(a=e.put(n)).addEventListener("error",Be),a.addEventListener("success",function(){return function(e){var t=e.messageId,r=e.key,n=t&&{action:Te,params:{messageId:t,key:r}};n&&xe(n)}({messageId:o,key:r})}),[2]}})})}function Be(e){throw console.error(e),e}var Ae=J.readonly;function Ne(e){var t=e.storeName,r=e.keyPath,n=e.key;return _(this,void 0,Promise,function(){var e=this;return __generator(this,function(o){return[2,new Promise(function(o,a){return _(e,void 0,void 0,function(){var e,i;return __generator(this,function(s){switch(s.label){case 0:return[4,Le({storeName:t,keyPath:r,mode:Ae})];case 1:return e=s.sent().store,(i=e.get(n)).addEventListener("error",a),i.addEventListener("success",function(){return o(i.result)}),[2]}})})})]})})}function We(e){var t=e.key,r=e.data,n=self.VamtigerBrowserMethod.messageQueue.get(t)||new Set;Array.from(n).forEach(function(e){e.resolve(r),n.delete(e)})}var Ie=R.getWebComponentData;function qe(e){var t=self.VamtigerBrowserMethod,r=t.support,n=t.workerSupport;if(Ee()){if(n&&n.indexedDbIsAccessible)return function(e){var t=e.key;return _(this,void 0,void 0,function(){return __generator(this,function(e){return xe({action:Ie,params:{key:t}}),[2]})})}(e);r&&r.indexedDbIsAccessible&&function(e){var t=e.key;_(this,void 0,void 0,function(){var e,r;return __generator(this,function(n){switch(n.label){case 0:return[4,Re({key:t})];case 1:return e=n.sent(),(r=e&&{key:t,data:e})&&We(r),[2]}})})}(e)}else if(ke())return function(e){var t=e.key;return _(this,void 0,void 0,function(){var e;return __generator(this,function(r){switch(r.label){case 0:return[4,Re({key:t})];case 1:return e=r.sent(),[2,e&&{action:R.dequeue,params:{key:t,data:{jsonLd:e.jsonLd,json:e.json}}}]}})})}(e)}function Re(e){var t=e.key;return _(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,Ne({storeName:H.webComponent,keyPath:Q.webComponent,key:t})];case 1:return[2,e.sent()]}})})}function Ve(e){var t,r;Ee()&&(t=e.selector,r=document.head,Array.from(r.querySelectorAll(t)).forEach(function(e){return r.removeChild(e)})),ke()&&function(e){var t=e.selector;xe({action:R.removeRedundantScripts,params:{selector:t}})}(e)}var He=H.webComponent,Je=Q.webComponent;function Qe(e){return Ee()?function(e){return _(this,void 0,void 0,function(){var t,r,n,o,a,i,s;return __generator(this,function(c){switch(c.label){case 0:return t=self.VamtigerBrowserMethod,r=t.support,n=t.workerSupport,o=e.url,a=Ge({url:o}),i=Fe(e),s=i&&{action:R.saveWebComponentData,params:i},n&&n.indexedDbIsAccessible?(s&&xe(s),[3,4]):[3,1];case 1:return r&&r.indexedDbIsAccessible?[4,Ue(e)]:[3,4];case 2:return c.sent(),[4,qe({key:o})];case 3:c.sent(),Ve({selector:a}),c.label=4;case 4:return[2]}})})}(e):ke()?function(e){return _(this,void 0,void 0,function(){var t,r,n,o;return __generator(this,function(a){switch(a.label){case 0:return t=e.url,r=Ge({url:t}),[4,Ue(e)];case 1:return a.sent(),n={action:R.getWebComponentData,params:{key:t}},o={action:R.removeRedundantScripts,params:{selector:r}},xe(n),xe(o),[2]}})})}(e):void 0}function Ue(e){return _(this,void 0,void 0,function(){var t,r;return __generator(this,function(n){switch(n.label){case 0:return t=Fe(e),(r=t&&{storeName:He,keyPath:Je,data:t})?[4,De(r)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}function Fe(e){var t=e.url,r=e.created,n=void 0===r?(new Date).getTime():r,o=e.json,a=e.jsonLd;return t&&a&&{url:t,created:n,jsonLd:a,json:o}}function Ge(e){return'script[type="application/json"][data-json-ld="'+e.url+'"]'}var $e=JSON.parse;function ze(e){return _(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,Ee()&&function(e){var t=e.url;return _(this,void 0,void 0,function(){var e,r,n,o,a,i,s,c;return __generator(this,function(u){switch(u.label){case 0:return e=document.head,[4,se({src:t})];case 1:return u.sent(),r='script[type="application/ld+json"][data-json-ld="'+t+'"]',n='script[type="application/json"][data-json-ld="'+t+'"]',[4,Promise.all([Array.from(e.querySelectorAll(r)).map(function(e){var t=e.innerHTML;return t}),e.querySelector(n)])];case 2:return o=u.sent(),a=o[0],i=o[1],s=a&&a.map(function(e){return $e(e)}),c=i&&$e(i.innerHTML)||{},Qe({url:t,created:(new Date).getTime(),jsonLd:s,json:c}),[2]}})})}(e)];case 1:return[2,t.sent()]}})})}function Ke(e){var t=this,r=e.jsonLd;return new Promise(function(e,n){return _(t,void 0,void 0,function(){var t;return __generator(this,function(o){switch(o.label){case 0:je({key:r,resolve:e,reject:n}),o.label=1;case 1:return o.trys.push([1,4,,5]),[4,qe({key:r})];case 2:return o.sent(),[4,ze({url:r})];case 3:return o.sent(),[3,5];case 4:return t=o.sent(),console.error(t),[3,5];case 5:return[2]}})})})}var Xe=T.noJsonLdParameter;function Ye(){return self.hasOwnProperty("WorkerGlobalScope")&&S.worker||S.window}var Ze=JSON.parse,et={action:R.ignore,params:{}},tt=new TextDecoder;function rt(e){var t;try{t=function(e){var t=e.data,r="string"==typeof t&&Ze(t)||t instanceof Uint8Array&&Ze(tt.decode(t));"string"==typeof r.params&&(r.params=Ze(r.params));return r}(e)||et}catch(e){t=et}return t}var nt=H.support;function ot(e){return _(this,void 0,void 0,function(){return __generator(this,function(t){return Ee()&&function(e){var t=self.VamtigerBrowserMethod.workerSupport,r=t&&t.indexedDbIsAccessible&&{action:R.saveSupport,params:e};r?xe(r):at(e)}(e),ke()&&function(e){at(e)}(e),[2]})})}function at(e){var t=e.environment,r=t&&{storeName:nt,keyPath:Q.support,data:g({environment:t},e)};r&&De(r)}var it=Q.support,st=H.support;function ct(){return _(this,void 0,void 0,function(){var e,t,r,n,o;return __generator(this,function(a){switch(a.label){case 0:return e=self.VamtigerBrowserMethod,t=self.localStorage,r=self.indexedDB,[4,Promise.all([function(){var e=this;return new Promise(function(t,r){return _(e,void 0,void 0,function(){var e,r,n;return __generator(this,function(o){switch(o.label){case 0:return e=!1,r=!1,n=S.worker,setTimeout(function(){return!r&&t(e)},j.indexDbIsAccessible),[4,Ne({storeName:st,keyPath:it,key:n})];case 1:return o.sent(),r=!0,t(e=!0),[2]}})})})}()])];case 1:return n=a.sent()[0],o={localStorage:!!t,indexedDb:!!r,indexedDbIsAccessible:n,worker:!!self.hasOwnProperty("Worker"),sharedWorker:self.hasOwnProperty("SharedWorker"),textEncoder:self.hasOwnProperty("TextEncoder"),textDecoder:self.hasOwnProperty("TextDecoder")},e.support=o,ke()&&function(){var e=self.VamtigerBrowserMethod;xe({action:R.setWorkerSupport,params:e.support||{}})}(),[2]}})})}var ut,lt="Message Ignored";var ft=((ut={})[R.ignore]=function(e){console.log(lt),console.warn(e)},ut[R.removeRedundantScripts]=Ve,ut[R.setWorkerSupport]=function(e){return _(this,void 0,void 0,function(){var t,r,n;return __generator(this,function(o){return t=self.VamtigerBrowserMethod,r=t.support,n=t.environment,t.workerSupport=e,r&&ot(g({environment:n},r)),e&&ot(g({environment:S.worker},e)),[2]})})},ut[R.saveWebComponentData]=Qe,ut[R.getWebComponentData]=qe,ut[R.dequeue]=We,ut[R.loadWebComponentData]=ze,ut[R.saveSupport]=ot,ut);function dt(e){return _(this,void 0,void 0,function(){var t,r,n,o;return __generator(this,function(a){switch(a.label){case 0:return t=rt(e)||{action:R.ignore,params:{}},r=t.action,n=t.params,[4,(0,ft[r])(n)];case 1:return(o=a.sent())&&xe(o),[2]}})})}var mt=O.vamtigerBrowserMethod;function pt(){return _(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return r=window.location,(e=L.localHost===r.hostname)?[4,fetch(mt).then(function(e){return e.ok}).catch(function(e){return""})]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return[2,e&&mt||""]}var r})})}var ht,vt=JSON.stringify,yt={type:C.js};function wt(e){Object.keys(e).forEach(function(t){return console.error("string"==typeof e[t]||vt(e[t]))})}function bt(){Ee()&&function(){_(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:return e=self.VamtigerBrowserMethod,t=e,[4,function(){return _(this,void 0,void 0,function(){var e,t,r,n,o,a,i,s;return __generator(this,function(c){switch(c.label){case 0:return[4,pt()];case 1:return e=c.sent(),t=document.head,r=URL.createObjectURL,n=!ht&&G.worker,o=(n&&Array.from(t.querySelectorAll(n))||[]).map(function(e){return e.innerHTML}).filter(function(e){return e}),a=o&&o.length&&new Blob(o,yt),i=a&&r&&r(a),(s=i&&new Worker(e||i))&&(s.addEventListener("message",dt),s.addEventListener("error",wt)),[2,ht=ht||s]}})})}()];case 1:return t.worker=r.sent(),[2]}})})}()}function gt(){ke()&&(addEventListener("message",dt),Ve({selector:G.redundantScripts}))}var _t=Ye(),St={loadScript:se,loadScripts:function(e){return Promise.all(e.map(se))},loadScriptsSequentially:function(e){return new Promise(function(t,r){var n=new Set,o=Promise.resolve();return e.forEach(function(e){o=o.then(function(){return _(void 0,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(se))];case 1:return[2,t.sent()]}})})}).then(function(e){return e.forEach(function(e){return n.add(e)})})}),o=o.then(function(){return t(Array.from(n))})})},loadShadowStylesheet:function(e){var t=e.css,r=e.element,n=r.shadowRoot,o=(r.localName,n&&n.querySelector(W.lastStylesheet)),a=n&&document.createElement("style");a&&n&&(a.innerHTML=t,o&&o.nextElementSibling?n.insertBefore(a,o.nextElementSibling):n.appendChild(a))},defineCustomElement:function e(t){var r=t.name,n=t.constructor,o=t.ignore,a=self.customElements,i=a&&a.define,s=i&&a.get&&a.get(r);if(i&&!s)a.define(r,n);else{if(s)throw new Error(ue+": "+r);if(o)throw new Error(ce+": Custom Elements - "+r);e({name:r,constructor:n,ignore:!0})}},pause:function(e){var t=e.milliseconds,r=void 0===t?1e3:t;return new Promise(function(e,t){return setTimeout(e,r)})},getElement:function(e){return _(this,void 0,void 0,function(){return __generator(this,function(t){return[2,new Promise(function(t,r){var n=self.requestIdleCallback;n?n(function(){return _e(e,t)}):_e(e,t)})]})})},getData:function(e){var t=e.jsonLd;return new Promise(function(e,r){var n=self.requestIdleCallback;t?n?n(function(){return Ke({jsonLd:t}).then(e)}):Ke({jsonLd:t}).then(e):r(new Error(Xe))})},getEnvironment:Ye,environment:_t,messageQueue:new Map};!function(){try{var e=self.VamtigerBrowserMethod;e||(self.VamtigerBrowserMethod=St,ct(),bt(),gt())}catch(e){!function(e){throw console.error(e),e}(e)}}()}();
//# sourceMappingURL=vamtiger-browser-method.js.map
