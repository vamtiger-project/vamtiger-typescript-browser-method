!function(){"use strict";var e,t,n,r,o,a,i,s,c,u,l,f,d,m,p,h,v,y,w;!function(e){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function n(e,n){return e!==t&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(t,r){return e[t]=n?n(t,r):r}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(r){e(n(t,n(r)))}):"object"==typeof module&&"object"==typeof module.exports?e(n(t,n(module.exports))):e(n(t))}(function(b){var g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};e=function(e,t){function n(){this.constructor=e}g(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},r=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=function(e,t){return function(n,r){t(n,r,e)}},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,s)}c((r=r.apply(e,t||[])).next())})},s=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},c=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},u=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},l=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},f=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]));return e},d=function(e){return this instanceof d?(this.v=e,this):new d(e)},m=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise(function(n,r){a.push([e,t,n,r])>1||s(e,t)})})}function s(e,t){try{(n=o[e](t)).value instanceof d?Promise.resolve(n.value.v).then(c,u):l(a[0][2],n)}catch(e){l(a[0][3],e)}var n}function c(e){s("next",e)}function u(e){s("throw",e)}function l(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}},p=function(e){var t,n;return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:d(e[r](t)),done:"return"===r}:o?o(t):t}:o}},h=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof u?u(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){(function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)})(r,o,(t=e[n](t)).done,t.value)})}}},v=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},w=function(e){return e&&e.__esModule?e:{default:e}},b("__extends",e),b("__assign",t),b("__rest",n),b("__decorate",r),b("__param",o),b("__metadata",a),b("__awaiter",i),b("__generator",s),b("__exportStar",c),b("__values",u),b("__read",l),b("__spread",f),b("__await",d),b("__asyncGenerator",m),b("__asyncDelegator",p),b("__asyncValues",h),b("__makeTemplateObject",v),b("__importStar",y),b("__importDefault",w)});var b=Object.freeze({});const g=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};function _(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,s)}c((r=r.apply(e,t)).next())})}var S,j,E,k,P,L,O,C,x,M,T,D,B,A,N,W,I,q,R,V,H,J,Q;Object.keys(b).forEach(function(e){self[e]||(self[e]=b[e])}),function(e){e.window="window",e.worker="worker"}(S||(S={})),function(e){e[e.webComponent=6e4]="webComponent",e[e.indexDbIsAccessible=100]="indexDbIsAccessible"}(j||(j={})),function(e){e.webComponent="webComponent"}(E||(E={})),function(e){e.db="vamtiger-browser-method",e.messageIdWindow="vamtiger-browser-method-window",e.messageIdWorker="vamtiger-browser-method-worker"}(k||(k={})),function(e){e.nowhere="",e.everyWhere="*"}(P||(P={})),function(e){e.localHost="localhost"}(L||(L={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method.js"}(O||(O={})),function(e){e.js="text/javascript",e.json="application/json",e.jsonld="application/ld+json"}(C||(C={})),function(e){e.type="type"}(x||(x={})),function(e){e.vamtigerElementQuery="vamtigerLoadElementQueryCss",e.elementQueryCssLoaded="elementQueryCssLoaded"}(M||(M={})),function(e){e.failedToLoadScript="Failed to load script",e.windowPropertyNotSet="Window property not set",e.unsupportedFeature="Unsupported feature",e.customElementAreadyDefined="Custom element already defined",e.noElementName="No Element Name",e.noTemplateUrl="No Template URL",e.noElementSelector="No Template Selector",e.noTemplateForUrl="No Template for URL",e.noTemplate="No Template",e.noElementForSelector="No Element for Selector",e.noJsonLdParameter='No "jsonLd" property set'}(T||(T={})),function(e){e.nothing="",e.slash="/",e.dash="-",e.pipe="|",e.comma=",",e.backTick="`",e.doubleQuote='"'}(D||(D={})),function(e){e.div="div",e.template="template"}(B||(B={})),function(e){e.stylesheet="stylesheet"}(A||(A={})),function(e){e.script="script",e.link="link",e.style="style"}(N||(N={})),function(e){e.lastStylesheet="style:last-of-type",e.lastMetaElement="head > meta:last-of-type",e.webcomponentsjs='script[src*="@webcomponents/webcomponentsjs"]',e.style="style",e.stylesheet=' link[rel="stylesheet"]',e.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',e.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]',e.vamtigerBrowserMethod='[data-name$="vamtiger-browser-method.js"]'}(W||(W={})),function(e){e.loadElementQueryCss="vamtiger-load-element-query-css"}(I||(I={})),function(e){e.style="style",e.stylesheet="stylesheet"}(q||(q={})),function(e){e.ignore="ignore",e.removeRedundantScripts="removeRedundantScripts",e.setWorkerSupport="setWorkerSupport",e.saveWebComponentData="saveWebComponentData",e.getWebComponentData="getWebComponentData",e.dequeue="dequeue",e.loadWebComponentData="loadWebComponentData",e.saveSupport="saveSupport"}(R||(R={})),function(e){e.vamtigerBrowserSupport="vamtiger-browser-support"}(V||(V={})),function(e){e.support="support",e.webComponent="web-component"}(H||(H={})),function(e){e.readonly="readonly",e.readwrite="readwrite",e.versionchange="versionchange"}(J||(J={})),function(e){e.webComponent="url",e.support="environment"}(Q||(Q={}));var U=/:{1,2}host/gm,F=(new RegExp(D.dash,"g"),/\W+/g),G={worker:[W.vamtigerBrowserMethod].join(D.comma),redundantScripts:[W.vamtigerBrowserMethodJsonJs,W.vamtigerBrowserMethodJson,W.vamtigerBrowserMethod].join(D.comma)},$=postMessage,z=D.nothing;var K=D.nothing,X=F,Y=function(e){return e.split(X).map(function(e,t){return!t&&e.toLowerCase()||e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}).join(K)},Z=U,ee=D.nothing;function te(e){var t=e.css,n=e.stylesheetName,r=void 0===n?ee:n,o=e.hostName,a=void 0===o?ee:o,i=function(e){var t=e.selector,n=void 0===t?z:t,r=e.properties,o=void 0===r?{}:r,a=e.dataset,i=void 0===a?{}:a,s=e.attributes,c=void 0===s?{}:s,u=o.id,l=document.head,f=l.querySelector(W.lastMetaElement),d=Object.keys(c),m=u&&(window[u]||n&&l.querySelector(n)),p=!m&&document.createElement("meta"),h=m||p;return p&&(Object.assign(p,o),Object.assign(p.dataset,i),f&&f.nextElementSibling?l.insertBefore(p,f.nextElementSibling):l.appendChild(p)),d.forEach(function(e){return!h.hasAttribute(e)&&h.setAttribute(void 0,c[e])}),h}({properties:{id:I.loadElementQueryCss}}),s=Y(r),c=i.dataset,u=!c.hasOwnProperty(a)&&a&&t.replace(Z,a)||t,l=self.EQCSS;u&&l&&(l.register(l.parse(u)),s?c[s]=ee:a&&(c[a]=ee))}var ne=T.failedToLoadScript,re=A.stylesheet,oe=N.script,ae=N.link,ie=N.style,se=function(e){return new Promise(function(t,n){var r=document.head,o=document.body,a=e,i=a.js,s=a.name,c=a.jsonld,u=a.removeFromDom,l=e.src,f=e,d=f.css,m=f.name,p=e.href,h=e.json,v=e.hasOwnProperty("src")||e.hasOwnProperty("href"),y=(i||l)&&oe||d&&ie||p&&ae,w=l&&'script[src="'+l+'"]'||p&&'link[href="'+p+'"]'||i&&s&&'script[data-name="'+s+'"]'||d&&m&&'style[data-name="'+m+'"]',b=r.querySelector(w)||o.querySelector(w),g=w&&y&&document.createElement(y);function _(){g&&(j(),u&&r.removeChild(g),t(g))}function S(e){j(),console.error(e),n(new Error(""+ne))}function j(){g&&(g.removeEventListener("load",_),g.removeEventListener("error",S))}g instanceof HTMLScriptElement?l?g.src=l:(h||i)&&(g.innerHTML=h||i,g.dataset.name=s,c?g.setAttribute(x.type,C.jsonld):h&&g.setAttribute(x.type,C.json)):g instanceof HTMLLinkElement?(g.rel=re,g.href=p):g instanceof HTMLStyleElement&&(g.innerHTML=d,g.dataset.name=m,te({css:d,stylesheetName:m})),b?t(b):g&&(g.addEventListener("load",_),g.addEventListener("error",S),r.appendChild(g),v||_())})};var ce=T.unsupportedFeature,ue=T.customElementAreadyDefined;var le=D.dash;function fe(e){return new Promise(function(t,n){var r=self.requestIdleCallback;r?r(function(){return de(e,t)}):de(e,t)})}function de(e,t){return _(this,void 0,void 0,function(){var n,r,o,a,i;return __generator(this,function(s){switch(s.label){case 0:return n=e.container,r=e.name,o=Array.from(n.content.querySelectorAll(W.style)).map(function(e,t){return{name:[r,q.style,t++].join(le),css:e.innerHTML}}),a=Array.from(n.content.querySelectorAll(W.stylesheet)).map(function(e,t){return{name:[r,q.stylesheet,t++].join(le),href:e.href}}),[4,Promise.all(o.map(se).concat(a.map(se)))];case 1:return i=s.sent(),t(i),[2]}})})}var me=T.noElementName,pe=T.noTemplate,he=T.noElementForSelector;var ve=T.noElementName,ye=T.noElementSelector,we=T.noTemplateUrl,be=T.noTemplateForUrl,ge=T.noElementForSelector;function _e(e,t){return _(this,void 0,void 0,function(){var n;return __generator(this,function(r){switch(r.label){case 0:return e.url?[4,function(e){return _(this,void 0,void 0,function(){var t,n,r,o,a,i,s,c;return __generator(this,function(u){switch(u.label){case 0:return t=e.name,n=e.url,r=e.selector,o=e.loadStylesheets,document.head,(i=t&&r&&n)?[4,fetch(n).then(function(e){return e.text()})]:[3,2];case 1:i=u.sent(),u.label=2;case 2:if(s=(a=i)&&document.createElement(B.template),c=null,!t)throw new Error(ve);if(!r)throw new Error(ye);if(!n)throw new Error(we);if(!a)throw new Error(be);return s?(s.innerHTML=a,c=s.content.querySelector(r),o&&c?[4,fe(g({},e,{container:s}))]:[3,4]):[3,5];case 3:u.sent(),u.label=4;case 4:u.label=5;case 5:if(!c)throw new Error(ge);return c.setAttribute("dataset-name",t),[2,c]}})})}(e)]:[3,2];case 1:return n=r.sent(),[3,4];case 2:return[4,function(e){return _(this,void 0,void 0,function(){var t,n,r,o,a,i;return __generator(this,function(s){switch(s.label){case 0:if(t=e.name,n=e.template,r=e.loadStylesheets,o=e.selector,a=t&&n&&document.createElement(B.template),i=null,!t)throw new Error(me);if(!n)throw new Error(pe);return a?(a.innerHTML=n,i=o&&a.content.firstElementChild&&a.content.firstElementChild.querySelector(o)||a.content.firstElementChild,r&&i?[4,fe(g({},e,{container:a}))]:[3,2]):[3,3];case 1:s.sent(),s.label=2;case 2:s.label=3;case 3:if(!i)throw new Error(he);return i.dataset.name=t,[2,i]}})})}(e)];case 3:n=r.sent(),r.label=4;case 4:return t(n),[2]}})})}var Se=j.webComponent;function je(e){var t,n=e.key,r={resolve:e.resolve,reject:e.reject},o=self.VamtigerBrowserMethod.messageQueue;!o.has(n)&&o.set(n,new Set),(t=o.get(n))&&t.add(r),setTimeout(function(){return function(e){var t=e.key,n=e.queueEntry,r=self.VamtigerBrowserMethod.messageQueue,o=r.get(t);o&&(o.has(n)&&o.delete(n),!o.size&&r.delete(t))}({key:n,queueEntry:r})},Se)}function Ee(){return self.VamtigerBrowserMethod.environment===S.window}function ke(){return self.VamtigerBrowserMethod.environment===S.worker}var Pe=V.vamtigerBrowserSupport;function Le(e){return _(this,void 0,void 0,function(){var t,n,r,o,a;return __generator(this,function(i){switch(i.label){case 0:return t=e.storeName,e.keyPath,n=e.mode,[4,new Promise(function(e,t){var n=indexedDB.open(Pe,1);n.addEventListener("error",t),n.addEventListener("upgradeneeded",function(){return e={db:n.result},t=e.db,void Object.keys(Q).forEach(function(e){return!t.objectStoreNames.contains(e)&&t.createObjectStore(H[e],{keyPath:Q[e]})});var e,t}),n.addEventListener("success",function(){return e(n.result)})})];case 1:return r=i.sent(),o=r&&r.transaction&&r.transaction(t,n),a=o&&o.objectStore&&o.objectStore(t),[2,{db:r,transaction:o,store:a}]}})})}var Oe=JSON.stringify,Ce=new TextEncoder;function xe(e){var t=self.VamtigerBrowserMethod,n=t.worker,r=(t.support||{}).textEncoder,o=Oe(e),a=r&&Ce.encode(o)||o;Ee()&&n&&n.postMessage(a),ke()&&$(a)}var Me=J.readwrite,Te=R.getWebComponentData;function De(e){var t=e.storeName,n=e.keyPath,r=e.data,o=e.messageId;return _(this,void 0,void 0,function(){var e,a;return __generator(this,function(i){switch(i.label){case 0:return[4,Le({storeName:t,keyPath:n,mode:Me})];case 1:return e=i.sent().store,(a=e.put(r)).addEventListener("error",Be),a.addEventListener("success",function(){return function(e){var t=e.messageId,n=e.key,r=t&&{action:Te,params:{messageId:t,key:n}};r&&xe(r)}({messageId:o,key:n})}),[2]}})})}function Be(e){throw console.error(e),e}var Ae=J.readonly;function Ne(e){var t=e.storeName,n=e.keyPath,r=e.key;return _(this,void 0,Promise,function(){var e=this;return __generator(this,function(o){return[2,new Promise(function(o,a){return _(e,void 0,void 0,function(){var e,i;return __generator(this,function(s){switch(s.label){case 0:return[4,Le({storeName:t,keyPath:n,mode:Ae})];case 1:return e=s.sent().store,(i=e.get(r)).addEventListener("error",a),i.addEventListener("success",function(){return o(i.result)}),[2]}})})})]})})}function We(e){var t=e.key,n=e.data,r=self.VamtigerBrowserMethod.messageQueue.get(t)||new Set;Array.from(r).forEach(function(e){e.resolve(n),r.delete(e)})}var Ie=R.getWebComponentData;function qe(e){var t=self.VamtigerBrowserMethod,n=t.support,r=t.workerSupport;if(Ee()){if(r&&r.indexedDbIsAccessible)return function(e){var t=e.key;return _(this,void 0,void 0,function(){return __generator(this,function(e){return xe({action:Ie,params:{key:t}}),[2]})})}(e);n&&n.indexedDbIsAccessible&&function(e){var t=e.key;_(this,void 0,void 0,function(){var e,n;return __generator(this,function(r){switch(r.label){case 0:return[4,Re({key:t})];case 1:return e=r.sent(),(n=e&&{key:t,data:e})&&We(n),[2]}})})}(e)}else if(ke())return function(e){var t=e.key;return _(this,void 0,void 0,function(){var e;return __generator(this,function(n){switch(n.label){case 0:return[4,Re({key:t})];case 1:return e=n.sent(),[2,e&&e.jsonLd.length&&{action:R.dequeue,params:{key:t,data:{jsonLd:e.jsonLd,json:e.json}}}]}})})}(e)}function Re(e){var t=e.key;return _(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,Ne({storeName:H.webComponent,keyPath:Q.webComponent,key:t})];case 1:return[2,e.sent()]}})})}function Ve(e){var t,n;Ee()&&(t=e.selector,n=document.head,Array.from(n.querySelectorAll(t)).forEach(function(e){return n.removeChild(e)})),ke()&&function(e){var t=e.selector;xe({action:R.removeRedundantScripts,params:{selector:t}})}(e)}var He=H.webComponent,Je=Q.webComponent;function Qe(e){return Ee()?function(e){return _(this,void 0,void 0,function(){var t,n,r,o,a,i,s;return __generator(this,function(c){switch(c.label){case 0:return t=self.VamtigerBrowserMethod,n=t.support,r=t.workerSupport,o=e.url,a=Ge({url:o}),i=Fe(e),s=i&&{action:R.saveWebComponentData,params:i},r&&r.indexedDbIsAccessible?(s&&xe(s),[3,4]):[3,1];case 1:return n&&n.indexedDbIsAccessible?[4,Ue(e)]:[3,4];case 2:return c.sent(),[4,qe({key:o})];case 3:c.sent(),Ve({selector:a}),c.label=4;case 4:return[2]}})})}(e):ke()?function(e){return _(this,void 0,void 0,function(){var t,n,r,o;return __generator(this,function(a){switch(a.label){case 0:return t=e.url,n=Ge({url:t}),[4,Ue(e)];case 1:return a.sent(),r={action:R.getWebComponentData,params:{key:t}},o={action:R.removeRedundantScripts,params:{selector:n}},xe(r),xe(o),[2]}})})}(e):void 0}function Ue(e){return _(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:return t=Fe(e),(n=t&&{storeName:He,keyPath:Je,data:t})?[4,De(n)]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})}function Fe(e){var t=e.url,n=e.created,r=void 0===n?(new Date).getTime():n,o=e.json,a=e.jsonLd;return t&&a&&{url:t,created:r,jsonLd:a,json:o}}function Ge(e){return'script[type="application/json"][data-json-ld="'+e.url+'"]'}var $e=JSON.parse;function ze(e){return _(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,Ee()&&function(e){var t=e.url;return _(this,void 0,void 0,function(){var e,n,r,o,a,i,s,c;return __generator(this,function(u){switch(u.label){case 0:return e=document.head,[4,se({src:t})];case 1:return u.sent(),n='script[type="application/ld+json"][data-json-ld="'+t+'"]',r='script[type="application/json"][data-json-ld="'+t+'"]',[4,Promise.all([Array.from(e.querySelectorAll(n)).map(function(e){var t=e.innerHTML;return t}),e.querySelector(r)])];case 2:return o=u.sent(),a=o[0],i=o[1],s=a&&a.map(function(e){return $e(e)}),c=i&&$e(i.innerHTML)||{},Qe({url:t,created:(new Date).getTime(),jsonLd:s,json:c}),[2]}})})}(e)];case 1:return[2,t.sent()]}})})}function Ke(e){var t=this,n=e.jsonLd;return new Promise(function(e,r){return _(t,void 0,void 0,function(){return __generator(this,function(t){je({key:n,resolve:e,reject:r});try{ze({url:n})}catch(e){console.error(e),qe({key:n})}return[2]})})})}var Xe=T.noJsonLdParameter;function Ye(){return self.hasOwnProperty("WorkerGlobalScope")&&S.worker||S.window}var Ze=JSON.parse,et={action:R.ignore,params:{}},tt=new TextDecoder;function nt(e){var t;try{t=function(e){var t=e.data,n="string"==typeof t&&Ze(t)||t instanceof Uint8Array&&Ze(tt.decode(t));"string"==typeof n.params&&(n.params=Ze(n.params));return n}(e)||et}catch(e){t=et}return t}var rt=H.support;function ot(e){return _(this,void 0,void 0,function(){return __generator(this,function(t){return Ee()&&function(e){var t=self.VamtigerBrowserMethod.workerSupport,n=t&&t.indexedDbIsAccessible&&{action:R.saveSupport,params:e};n?xe(n):at(e)}(e),ke()&&function(e){at(e)}(e),[2]})})}function at(e){var t=e.environment,n=t&&{storeName:rt,keyPath:Q.support,data:g({environment:t},e)};n&&De(n)}var it=Q.support,st=H.support;function ct(){return _(this,void 0,void 0,function(){var e,t,n,r,o;return __generator(this,function(a){switch(a.label){case 0:return e=self.VamtigerBrowserMethod,t=self.localStorage,n=self.indexedDB,[4,Promise.all([function(){var e=this;return new Promise(function(t,n){return _(e,void 0,void 0,function(){var e,n,r;return __generator(this,function(o){switch(o.label){case 0:return e=!1,n=!1,r=S.worker,setTimeout(function(){return!n&&t(e)},j.indexDbIsAccessible),[4,Ne({storeName:st,keyPath:it,key:r})];case 1:return o.sent(),n=!0,t(e=!0),[2]}})})})}()])];case 1:return r=a.sent()[0],o={localStorage:!!t,indexedDb:!!n,indexedDbIsAccessible:r,worker:!!self.hasOwnProperty("Worker"),sharedWorker:self.hasOwnProperty("SharedWorker"),textEncoder:self.hasOwnProperty("TextEncoder"),textDecoder:self.hasOwnProperty("TextDecoder")},e.support=o,ke()&&function(){var e=self.VamtigerBrowserMethod;xe({action:R.setWorkerSupport,params:e.support||{}})}(),[2]}})})}var ut,lt="Message Ignored";var ft=((ut={})[R.ignore]=function(e){console.log(lt),console.warn(e)},ut[R.removeRedundantScripts]=Ve,ut[R.setWorkerSupport]=function(e){return _(this,void 0,void 0,function(){var t,n,r;return __generator(this,function(o){return t=self.VamtigerBrowserMethod,n=t.support,r=t.environment,t.workerSupport=e,n&&ot(g({environment:r},n)),e&&ot(g({environment:S.worker},e)),[2]})})},ut[R.saveWebComponentData]=Qe,ut[R.getWebComponentData]=qe,ut[R.dequeue]=We,ut[R.loadWebComponentData]=ze,ut[R.saveSupport]=ot,ut);function dt(e){return _(this,void 0,void 0,function(){var t,n,r,o;return __generator(this,function(a){switch(a.label){case 0:return t=nt(e)||{action:R.ignore,params:{}},n=t.action,r=t.params,[4,(0,ft[n])(r)];case 1:return(o=a.sent())&&xe(o),[2]}})})}var mt=O.vamtigerBrowserMethod;function pt(){return _(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return n=window.location,(e=L.localHost===n.hostname)?[4,fetch(mt).then(function(e){return e.ok}).catch(function(e){return""})]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return[2,e&&mt||""]}var n})})}var ht,vt=JSON.stringify,yt={type:C.js};function wt(e){Object.keys(e).forEach(function(t){return console.error("string"==typeof e[t]||vt(e[t]))})}function bt(){Ee()&&function(){_(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return e=self.VamtigerBrowserMethod,t=e,[4,function(){return _(this,void 0,void 0,function(){var e,t,n,r,o,a,i,s;return __generator(this,function(c){switch(c.label){case 0:return[4,pt()];case 1:return e=c.sent(),t=document.head,n=URL.createObjectURL,r=!ht&&G.worker,o=(r&&Array.from(t.querySelectorAll(r))||[]).map(function(e){return e.innerHTML}).filter(function(e){return e}),a=o&&o.length&&new Blob(o,yt),i=a&&n&&n(a),(s=i&&new Worker(e||i))&&(s.addEventListener("message",dt),s.addEventListener("error",wt)),[2,ht=ht||s]}})})}()];case 1:return t.worker=n.sent(),[2]}})})}()}function gt(){ke()&&(addEventListener("message",dt),Ve({selector:G.redundantScripts}))}var _t=Ye(),St={loadScript:se,loadScripts:function(e){return Promise.all(e.map(se))},loadScriptsSequentially:function(e){return new Promise(function(t,n){var r=new Set,o=Promise.resolve();return e.forEach(function(e){o=o.then(function(){return _(void 0,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(se))];case 1:return[2,t.sent()]}})})}).then(function(e){return e.forEach(function(e){return r.add(e)})})}),o=o.then(function(){return t(Array.from(r))})})},loadShadowStylesheet:function(e){var t=e.css,n=e.element,r=n.shadowRoot,o=(n.localName,r&&r.querySelector(W.lastStylesheet)),a=r&&document.createElement("style");a&&r&&(a.innerHTML=t,o&&o.nextElementSibling?r.insertBefore(a,o.nextElementSibling):r.appendChild(a))},defineCustomElement:function e(t){var n=t.name,r=t.constructor,o=t.ignore,a=self.customElements,i=a&&a.define,s=i&&a.get&&a.get(n);if(i&&!s)a.define(n,r);else{if(s)throw new Error(ue+": "+n);if(o)throw new Error(ce+": Custom Elements - "+n);e({name:n,constructor:r,ignore:!0})}},pause:function(e){var t=e.milliseconds,n=void 0===t?1e3:t;return new Promise(function(e,t){return setTimeout(e,n)})},getElement:function(e){return _(this,void 0,void 0,function(){return __generator(this,function(t){return[2,new Promise(function(t,n){var r=self.requestIdleCallback;r?r(function(){return _e(e,t)}):_e(e,t)})]})})},getData:function(e){var t=e.jsonLd;return new Promise(function(e,n){var r=self.requestIdleCallback;t?r?r(function(){return Ke({jsonLd:t}).then(e)}):Ke({jsonLd:t}).then(e):n(new Error(Xe))})},getEnvironment:Ye,environment:_t,messageQueue:new Map};!function(){try{var e=self.VamtigerBrowserMethod;e||(self.VamtigerBrowserMethod=St,ct(),bt(),gt())}catch(e){!function(e){throw console.error(e),e}(e)}}()}();
//# sourceMappingURL=vamtiger-browser-method.js.map
