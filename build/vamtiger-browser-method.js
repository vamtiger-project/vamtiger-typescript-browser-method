!function(){"use strict";var e,t,r,n,o,a,i,s,c,u,l,f,d,p,m,h,v,y,w;!function(e){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function r(e,r){return e!==t&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(t,n){return e[t]=r?r(t,n):n}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(n){e(r(t,r(n)))}):"object"==typeof module&&"object"==typeof module.exports?e(r(t,r(module.exports))):e(r(t))}(function(b){var g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};e=function(e,t){function r(){this.constructor=e}g(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},t=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r},n=function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i},o=function(e,t){return function(r,n){t(r,n,e)}},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,s)}c((n=n.apply(e,t||[])).next())})},s=function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},c=function(e,t){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])},u=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}},l=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},f=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]));return e},d=function(e){return this instanceof d?(this.v=e,this):new d(e)},p=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n={},i("next"),i("throw"),i("return"),n[Symbol.asyncIterator]=function(){return this},n;function i(e){o[e]&&(n[e]=function(t){return new Promise(function(r,n){a.push([e,t,r,n])>1||s(e,t)})})}function s(e,t){try{(r=o[e](t)).value instanceof d?Promise.resolve(r.value.v).then(c,u):l(a[0][2],r)}catch(e){l(a[0][3],e)}var r}function c(e){s("next",e)}function u(e){s("throw",e)}function l(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}},m=function(e){var t,r;return t={},n("next"),n("throw",function(e){throw e}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:d(e[n](t)),done:"return"===n}:o?o(t):t}:o}},h=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e="function"==typeof u?u(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,o){(function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)})(n,o,(t=e[r](t)).done,t.value)})}}},v=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},w=function(e){return e&&e.__esModule?e:{default:e}},b("__extends",e),b("__assign",t),b("__rest",r),b("__decorate",n),b("__param",o),b("__metadata",a),b("__awaiter",i),b("__generator",s),b("__exportStar",c),b("__values",u),b("__read",l),b("__spread",f),b("__await",d),b("__asyncGenerator",p),b("__asyncDelegator",m),b("__asyncValues",h),b("__makeTemplateObject",v),b("__importStar",y),b("__importDefault",w)});var b=Object.freeze({});const g=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};function j(e,t,r,n){return new(r||(r=Promise))(function(o,a){function i(e){try{c(n.next(e))}catch(e){a(e)}}function s(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(i,s)}c((n=n.apply(e,t)).next())})}var _,S,E,k,L,P,C,M,O,x,D,T,A,B,N,q,I,W,H,R,V,J,Q;Object.keys(b).forEach(function(e){self[e]||(self[e]=b[e])}),function(e){e.window="window",e.worker="worker"}(_||(_={})),function(e){e[e.webComponent=6e4]="webComponent",e[e.indexDbIsAccessible=100]="indexDbIsAccessible"}(S||(S={})),function(e){e.webComponent="webComponent"}(E||(E={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method",e.db="vamtiger-browser-method",e.messageIdWindow="vamtiger-browser-method-window",e.messageIdWorker="vamtiger-browser-method-worker"}(k||(k={})),function(e){e.nowhere="",e.everyWhere="*"}(L||(L={})),function(e){e.localHost="localhost"}(P||(P={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method.js"}(C||(C={})),function(e){e.js="text/javascript",e.json="application/json",e.jsonld="application/ld+json"}(M||(M={})),function(e){e.type="type"}(O||(O={})),function(e){e.vamtigerElementQuery="vamtigerLoadElementQueryCss",e.elementQueryCssLoaded="elementQueryCssLoaded"}(x||(x={})),function(e){e.failedToLoadScript="Failed to load script",e.windowPropertyNotSet="Window property not set",e.unsupportedFeature="Unsupported feature",e.customElementAreadyDefined="Custom element already defined",e.noElementName="No Element Name",e.noTemplateUrl="No Template URL",e.noElementSelector="No Template Selector",e.noTemplateForUrl="No Template for URL",e.noTemplate="No Template",e.noElementForSelector="No Element for Selector",e.noJsonLdParameter='No "jsonLd" property set'}(D||(D={})),function(e){e.nothing="",e.slash="/",e.dash="-",e.pipe="|",e.comma=",",e.backTick="`",e.doubleQuote='"',e.commaSpace=", "}(T||(T={})),function(e){e.div="div",e.template="template"}(A||(A={})),function(e){e.stylesheet="stylesheet"}(B||(B={})),function(e){e.script="script",e.link="link",e.style="style"}(N||(N={})),function(e){e.lastStylesheet="style:last-of-type",e.lastMetaElement="head > meta:last-of-type",e.webcomponentsjs='script[src*="@webcomponents/webcomponentsjs"]',e.style="style",e.stylesheet=' link[rel="stylesheet"]',e.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',e.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]',e.vamtigerBrowserMethod='[data-name$="vamtiger-browser-method.js"]',e.script="script",e.jsonScript='script[type="application/json"]',e.jsonLdScript='script[type="application/ld+json"]',e.a="a",e.linkedDataCaption="[data-linked-data-caption]",e.linkedDataCaptionElement="[data-linked-data-caption-element]"}(q||(q={})),function(e){e.loadElementQueryCss="vamtiger-load-element-query-css"}(I||(I={})),function(e){e.style="style",e.stylesheet="stylesheet"}(W||(W={})),function(e){e.ignore="ignore",e.removeRedundantScripts="removeRedundantScripts",e.setWorkerSupport="setWorkerSupport",e.saveWebComponentData="saveWebComponentData",e.getWebComponentData="getWebComponentData",e.dequeue="dequeue",e.loadWebComponentData="loadWebComponentData",e.saveSupport="saveSupport"}(H||(H={})),function(e){e.vamtigerBrowserSupport="vamtiger-browser-support"}(R||(R={})),function(e){e.support="support",e.webComponent="web-component"}(V||(V={})),function(e){e.readonly="readonly",e.readwrite="readwrite",e.versionchange="versionchange"}(J||(J={})),function(e){e.webComponent="url",e.support="environment"}(Q||(Q={}));var U=/:{1,2}host/gm,F=(new RegExp(T.dash,"g"),/\W+/g),G={worker:[q.vamtigerBrowserMethod].join(T.comma),redundantScripts:[q.vamtigerBrowserMethodJsonJs,q.vamtigerBrowserMethodJson,q.vamtigerBrowserMethod].join(T.comma)},$=postMessage,z=T.nothing;var K=T.nothing,X=F,Y=function(e){return e.split(X).map(function(e,t){return!t&&e.toLowerCase()||e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}).join(K)},Z=U,ee=T.nothing;function te(e){var t=e.css,r=e.stylesheetName,n=void 0===r?ee:r,o=e.hostName,a=void 0===o?ee:o,i=function(e){var t=e.selector,r=void 0===t?z:t,n=e.properties,o=void 0===n?{}:n,a=e.dataset,i=void 0===a?{}:a,s=e.attributes,c=void 0===s?{}:s,u=o.id,l=document.head,f=l.querySelector(q.lastMetaElement),d=Object.keys(c),p=u&&(window[u]||r&&l.querySelector(r)),m=!p&&document.createElement("meta"),h=p||m;return m&&(Object.assign(m,o),Object.assign(m.dataset,i),f&&f.nextElementSibling?l.insertBefore(m,f.nextElementSibling):l.appendChild(m)),d.forEach(function(e){return!h.hasAttribute(e)&&h.setAttribute(void 0,c[e])}),h}({properties:{id:I.loadElementQueryCss}}),s=Y(n),c=i.dataset,u=!c.hasOwnProperty(a)&&a&&t.replace(Z,a)||t,l=self.EQCSS;u&&l&&(l.register(l.parse(u)),s?c[s]=ee:a&&(c[a]=ee))}var re=D.failedToLoadScript,ne=B.stylesheet,oe=N.script,ae=N.link,ie=N.style,se=function(e){return new Promise(function(t,r){var n=document.head,o=document.body,a=e,i=a.js,s=a.name,c=a.jsonld,u=a.removeFromDom,l=e.src,f=e,d=f.css,p=f.name,m=e.href,h=e.json,v=e.hasOwnProperty("src")||e.hasOwnProperty("href"),y=(i||l)&&oe||d&&ie||m&&ae,w=l&&'script[src="'+l+'"]'||m&&'link[href="'+m+'"]'||i&&s&&'script[data-name="'+s+'"]'||d&&p&&'style[data-name="'+p+'"]',b=n.querySelector(w)||o.querySelector(w),g=w&&y&&document.createElement(y);function j(){g&&(S(),u&&n.removeChild(g),t(g))}function _(e){S(),console.error(e),r(new Error(""+re))}function S(){g&&(g.removeEventListener("load",j),g.removeEventListener("error",_))}g instanceof HTMLScriptElement?l?g.src=l:(h||i)&&(g.innerHTML=h||i,g.dataset.name=s,c?g.setAttribute(O.type,M.jsonld):h&&g.setAttribute(O.type,M.json)):g instanceof HTMLLinkElement?(g.rel=ne,g.href=m):g instanceof HTMLStyleElement&&(g.innerHTML=d,g.dataset.name=p,te({css:d,stylesheetName:p})),b?t(b):g&&(g.addEventListener("load",j),g.addEventListener("error",_),n.appendChild(g),v||j())})};var ce=D.unsupportedFeature,ue=D.customElementAreadyDefined;var le=T.dash;function fe(e){return new Promise(function(t,r){var n=self.requestIdleCallback;n?n(function(){return de(e,t)}):de(e,t)})}function de(e,t){return j(this,void 0,void 0,function(){var r,n,o,a,i;return __generator(this,function(s){switch(s.label){case 0:return r=e.container,n=e.name,o=Array.from(r.content.querySelectorAll(q.style)).map(function(e,t){return{name:[n,W.style,t++].join(le),css:e.innerHTML}}),a=Array.from(r.content.querySelectorAll(q.stylesheet)).map(function(e,t){return{name:[n,W.stylesheet,t++].join(le),href:e.href}}),[4,Promise.all(o.map(se).concat(a.map(se)))];case 1:return i=s.sent(),t(i),[2]}})})}var pe=D.noElementName,me=D.noTemplate,he=D.noElementForSelector;var ve=D.noElementName,ye=D.noElementSelector,we=D.noTemplateUrl,be=D.noTemplateForUrl,ge=D.noElementForSelector;function je(){return self.VamtigerBrowserMethod.environment===_.window}function _e(){return self.VamtigerBrowserMethod.environment===_.worker}var Se=JSON.stringify,Ee=new TextEncoder;function ke(e){var t=self.VamtigerBrowserMethod,r=t.worker,n=(t.support||{}).textEncoder,o=Se(e),a=n&&Ee.encode(o)||o;je()&&r&&r.postMessage(a),_e()&&$(a)}var Le=JSON.parse;function Pe(e){var t=e.script.innerHTML,r=!1;try{Le(t),r=!0}catch(e){console.warn(e),r=!1}return r}var Ce=self.requestIdleCallback,Me=T.dash,Oe=k.vamtigerBrowserMethod;function xe(e){return j(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return je()?[4,function(e){return j(this,void 0,void 0,function(){var t;return __generator(this,function(r){switch(r.label){case 0:return t=document.head,[4,De(g({},e,{parent:t}))];case 1:return r.sent(),[2]}})})}(e)]:[3,2];case 1:t.sent(),t.label=2;case 2:return _e()&&function(e){var t=e.selector;ke({action:H.removeRedundantScripts,params:{selector:t}})}(e),[2]}})})}function De(e){return new Promise(function(t,r){Ce?Ce(function(){return Ae(g({},e,{resolve:t,reject:r}))}):Ae(g({},e,{resolve:t,reject:r}))})}function Te(e){var t=e.resolve,r=(e.reject,e.selector),n=e.parent,o=Array.from(n.querySelectorAll(r));o.pop(),o.forEach(function(e){return n.removeChild(e)}),t&&t()}function Ae(e){var t=e.selector,r=e.parent,n=e.resolve,o=(e.reject,document.head),a=Array.from(r.querySelectorAll(t)),i=a.filter(function(e){var t=e.type;return e.src||!t||t===M.js}),s=a.filter(function(e){return e.type===M.json}).filter(function(e){return Pe({script:e})}),c=a.filter(function(e){return e.type===M.jsonld}).filter(function(e){return Pe({script:e})}),u=c.concat(s),l=(new Date).getTime(),f=s.length&&[Oe,M.json,l].join(Me),d=f&&'script[type="'+M.json+'"][data-name="'+f+'"]',p=c.length&&[Oe,M.jsonld,l].join(Me),m=p&&'script[type="'+M.jsonld+'"][data-name="'+p+'"]';i.length&&f&&i.forEach(function(e){return e.dataset.name=f||""}),c.length&&p&&m&&c.forEach(function(e){return e.dataset.name=p||""}),d&&r!==o&&(r.dataset.json=d),m&&r!==o&&(r.dataset.jsonLd=m),a.length&&(r.dataset.removedScripts=a.length.toString()),u.forEach(function(e){return o.appendChild(e)}),a.forEach(function(e){return r.removeChild(e)}),n&&n()}var Be=q.script;function Ne(e,t){return j(this,void 0,void 0,function(){var r;return __generator(this,function(n){switch(n.label){case 0:return e.url?[4,function(e){return j(this,void 0,void 0,function(){var t,r,n,o,a,i,s,c;return __generator(this,function(u){switch(u.label){case 0:return t=e.name,r=e.url,n=e.selector,o=e.loadStylesheets,document.head,(i=t&&n&&r)?[4,fetch(r).then(function(e){return e.text()})]:[3,2];case 1:i=u.sent(),u.label=2;case 2:if(s=(a=i)&&document.createElement(A.template),c=null,!t)throw new Error(ve);if(!n)throw new Error(ye);if(!r)throw new Error(we);if(!a)throw new Error(be);return s?(s.innerHTML=a,c=s.content.querySelector(n),o&&c?[4,fe(g({},e,{container:s}))]:[3,4]):[3,5];case 3:u.sent(),u.label=4;case 4:u.label=5;case 5:if(!c)throw new Error(ge);return c.setAttribute("dataset-name",t),[2,c]}})})}(e)]:[3,2];case 1:return r=n.sent(),[3,4];case 2:return[4,function(e){return j(this,void 0,void 0,function(){var t,r,n,o,a,i;return __generator(this,function(s){switch(s.label){case 0:if(t=e.name,r=e.template,n=e.loadStylesheets,o=e.selector,a=t&&r&&document.createElement(A.template),i=null,!t)throw new Error(pe);if(!r)throw new Error(me);return a?(a.innerHTML=r,i=o&&a.content.firstElementChild&&a.content.firstElementChild.querySelector(o)||a.content.firstElementChild,n&&i?[4,fe(g({},e,{container:a}))]:[3,2]):[3,3];case 1:s.sent(),s.label=2;case 2:s.label=3;case 3:if(!i)throw new Error(he);return i.dataset.name=t,[2,i]}})})}(e)];case 3:r=n.sent(),n.label=4;case 4:return r?[4,De({selector:Be,parent:r})]:[3,6];case 5:n.sent(),n.label=6;case 6:return t(r),[2]}})})}var qe=S.webComponent;function Ie(e){var t,r=e.key,n={resolve:e.resolve,reject:e.reject},o=self.VamtigerBrowserMethod.messageQueue;!o.has(r)&&o.set(r,new Set),(t=o.get(r))&&t.add(n),setTimeout(function(){return function(e){var t=e.key,r=e.queueEntry,n=self.VamtigerBrowserMethod.messageQueue,o=n.get(t);o&&(o.has(r)&&o.delete(r),!o.size&&n.delete(t))}({key:r,queueEntry:n})},qe)}var We=R.vamtigerBrowserSupport;function He(e){return j(this,void 0,void 0,function(){var t,r,n,o,a;return __generator(this,function(i){switch(i.label){case 0:return t=e.storeName,e.keyPath,r=e.mode,[4,new Promise(function(e,t){var r=indexedDB.open(We,1);r.addEventListener("error",t),r.addEventListener("upgradeneeded",function(){return e={db:r.result},t=e.db,void Object.keys(Q).forEach(function(e){return!t.objectStoreNames.contains(e)&&t.createObjectStore(V[e],{keyPath:Q[e]})});var e,t}),r.addEventListener("success",function(){return e(r.result)})})];case 1:return n=i.sent(),o=n&&n.transaction&&n.transaction(t,r),a=o&&o.objectStore&&o.objectStore(t),[2,{db:n,transaction:o,store:a}]}})})}var Re=J.readwrite,Ve=H.getWebComponentData;function Je(e){var t=e.storeName,r=e.keyPath,n=e.data,o=e.messageId;return j(this,void 0,void 0,function(){var e,a;return __generator(this,function(i){switch(i.label){case 0:return[4,He({storeName:t,keyPath:r,mode:Re})];case 1:return e=i.sent().store,(a=e.put(n)).addEventListener("error",Qe),a.addEventListener("success",function(){return function(e){var t=e.messageId,r=e.key,n=t&&{action:Ve,params:{messageId:t,key:r}};n&&ke(n)}({messageId:o,key:r})}),[2]}})})}function Qe(e){throw console.error(e),e}var Ue=J.readonly;function Fe(e){var t=e.storeName,r=e.keyPath,n=e.key;return j(this,void 0,Promise,function(){var e=this;return __generator(this,function(o){return[2,new Promise(function(o,a){return j(e,void 0,void 0,function(){var e,i;return __generator(this,function(s){switch(s.label){case 0:return[4,He({storeName:t,keyPath:r,mode:Ue})];case 1:return e=s.sent().store,(i=e.get(n)).addEventListener("error",a),i.addEventListener("success",function(){return o(i.result)}),[2]}})})})]})})}function Ge(e){var t=e.key,r=e.data,n=self.VamtigerBrowserMethod.messageQueue.get(t)||new Set;Array.from(n).forEach(function(e){e.resolve(r),n.delete(e)})}var $e=H.getWebComponentData;function ze(e){var t=self.VamtigerBrowserMethod,r=t.support,n=t.workerSupport;if(je()){if(n&&n.indexedDbIsAccessible)return function(e){var t=e.key;return j(this,void 0,void 0,function(){return __generator(this,function(e){return ke({action:$e,params:{key:t}}),[2]})})}(e);r&&r.indexedDbIsAccessible&&function(e){var t=e.key;j(this,void 0,void 0,function(){var e,r;return __generator(this,function(n){switch(n.label){case 0:return[4,Ke({key:t})];case 1:return e=n.sent(),(r=e&&{key:t,data:e})&&Ge(r),[2]}})})}(e)}else if(_e())return function(e){var t=e.key;return j(this,void 0,void 0,function(){var e;return __generator(this,function(r){switch(r.label){case 0:return[4,Ke({key:t})];case 1:return e=r.sent(),[2,e&&e.jsonLd&&e.jsonLd.length&&{action:H.dequeue,params:{key:t,data:{jsonLd:e.jsonLd,json:e.json}}}]}})})}(e)}function Ke(e){var t=e.key;return j(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,Fe({storeName:V.webComponent,keyPath:Q.webComponent,key:t})];case 1:return[2,e.sent()]}})})}var Xe=V.webComponent,Ye=Q.webComponent;function Ze(e){return je()?function(e){return j(this,void 0,void 0,function(){var t,r,n,o,a,i,s;return __generator(this,function(c){switch(c.label){case 0:return t=self.VamtigerBrowserMethod,r=t.support,n=t.workerSupport,o=e.url,a=rt({url:o}),i=tt(e),s=i&&{action:H.saveWebComponentData,params:i},n&&n.indexedDbIsAccessible?(s&&ke(s),[3,4]):[3,1];case 1:return r&&r.indexedDbIsAccessible?[4,et(e)]:[3,4];case 2:return c.sent(),[4,ze({key:o})];case 3:c.sent(),xe({selector:a}),c.label=4;case 4:return[2]}})})}(e):_e()?function(e){return j(this,void 0,void 0,function(){var t,r,n,o;return __generator(this,function(a){switch(a.label){case 0:return t=e.url,r=rt({url:t}),[4,et(e)];case 1:return a.sent(),n={action:H.getWebComponentData,params:{key:t}},o={action:H.removeRedundantScripts,params:{selector:r}},ke(n),ke(o),[2]}})})}(e):void 0}function et(e){return j(this,void 0,void 0,function(){var t,r;return __generator(this,function(n){switch(n.label){case 0:return t=tt(e),(r=t&&{storeName:Xe,keyPath:Ye,data:t})?[4,Je(r)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}function tt(e){var t=e.url,r=e.created,n=void 0===r?(new Date).getTime():r,o=e.json,a=e.jsonLd;return t&&a&&{url:t,created:n,jsonLd:a,json:o}}function rt(e){return'script[type="application/json"][data-json-ld="'+e.url+'"]'}var nt=JSON.parse,ot=JSON.stringify,at=T.comma,it={jsonLd:[],json:{}};function st(e){return j(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,je()&&function(e){var t=e.url;return j(this,void 0,void 0,function(){var e,r,n,o,a,i,s,c,u;return __generator(this,function(l){switch(l.label){case 0:return e=document.head,r='script[type="application/ld+json"][data-json-ld="'+t+'"]',[4,ut({url:t})];case 1:return n=l.sent(),o=n.jsonLd,a=n.json,(s=a&&Array.isArray(a.jsonLd))?[4,Promise.all(a.jsonLd.map(ct))]:[3,3];case 2:s=l.sent(),l.label=3;case 3:return i=s,c=o&&{url:t,created:(new Date).getTime(),jsonLd:o,json:a},u=e.querySelector(r),i&&(i.forEach(function(e){return e.forEach(function(e){var t=e.index,r=e.key,n=e.jsonLd;o&&Array.isArray(o)&&o[t]&&r&&!0===o[t][r]&&n&&(o[t][r]=n)})}),u&&o&&(e.removeChild(u),u.innerHTML=ot(o),e.appendChild(u))),c&&Ze(c),[2]}})})}(e)];case 1:return[2,t.sent()]}})})}function ct(e){var t=e.index,r=e.fields;return j(this,void 0,void 0,function(){var e;return __generator(this,function(n){switch(n.label){case 0:return e=Object.keys(r),[4,Promise.all(e.map(function(e){return function(e){var t=e.urls,r=e.key;return j(this,void 0,void 0,function(){var e,n,o,a;return __generator(this,function(i){switch(i.label){case 0:return e=!0,n=Array.isArray(t)&&t.filter(function(e){return"string"==typeof e})||[],[4,Promise.all(n.map(function(t){return ut({url:t,reload:e})}))];case 1:return o=i.sent(),a={key:r,jsonLd:[]},o.forEach(function(e){var t=e.jsonLd;return t&&t.forEach(function(e){return e&&a.jsonLd.push(e)})}),[2,a]}})})}({key:e,urls:r[e]}).then(function(e){return g({index:t},e)})}))];case 1:return[2,n.sent()]}})})}function ut(e){var t=e.url,r=e.reload,n=void 0!==r&&r;return j(this,void 0,void 0,function(){var e,r,o,a,i,s,c,u,l,f,d,p,m,h,v;return __generator(this,function(y){switch(y.label){case 0:return y.trys.push([0,9,,10]),e=document.head,r=q.script+'[src="'+t+'"]',o='script[type="application/ld+json"][data-json-ld="'+t+'"]',a='script[type="application/json"][data-json-ld="'+t+'"]',i=n&&[r,o,a].join(at),i?[4,De({selector:i,parent:e})]:[3,2];case 1:y.sent(),y.label=2;case 2:return s=e.querySelector(r),(u=!s)?[4,se({src:t})]:[3,4];case 3:u=y.sent(),y.label=4;case 4:return c=u,n?[4,(w={selector:o,parent:e},new Promise(function(e,t){Ce?Ce(function(){return Te(g({},w,{resolve:e,reject:t}))}):Te(g({},w,{resolve:e,reject:t}))}))]:[3,6];case 5:y.sent(),y.label=6;case 6:return(l=c)?[4,Promise.all([Array.from(e.querySelectorAll(o)).map(function(e){return e.innerHTML}),e.querySelector(a)])]:[3,8];case 7:l=y.sent(),y.label=8;case 8:return d=(f=l||[void 0,void 0])[0],p=f[1],m=d&&d.map(function(e){return nt(e)}),h=p&&nt(p.innerHTML)||{},[2,{jsonLd:m,json:h}];case 9:return v=y.sent(),console.error(v),[2,it];case 10:return[2]}var w})})}function lt(e){var t=this,r=e.jsonLd;return new Promise(function(e,n){return j(t,void 0,void 0,function(){var t;return __generator(this,function(o){switch(o.label){case 0:Ie({key:r,resolve:e,reject:n}),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,st({url:r})];case 2:return o.sent(),[3,4];case 3:return t=o.sent(),console.error(t),[3,4];case 4:return ze({key:r}),[2]}})})})}var ft=D.noJsonLdParameter;function dt(){return self.hasOwnProperty("WorkerGlobalScope")&&_.worker||_.window}var pt=JSON.parse,mt={action:H.ignore,params:{}},ht=new TextDecoder;function vt(e){var t;try{t=function(e){var t=e.data,r="string"==typeof t&&pt(t)||t instanceof Uint8Array&&pt(ht.decode(t));"string"==typeof r.params&&(r.params=pt(r.params));return r}(e)||mt}catch(e){t=mt}return t}var yt=V.support;function wt(e){return j(this,void 0,void 0,function(){return __generator(this,function(t){return je()&&function(e){var t=self.VamtigerBrowserMethod.workerSupport,r=t&&t.indexedDbIsAccessible&&{action:H.saveSupport,params:e};r?ke(r):bt(e)}(e),_e()&&function(e){bt(e)}(e),[2]})})}function bt(e){var t=e.environment,r=t&&{storeName:yt,keyPath:Q.support,data:g({environment:t},e)};r&&Je(r)}var gt=Q.support,jt=V.support;function _t(){return j(this,void 0,void 0,function(){var e,t,r,n,o;return __generator(this,function(a){switch(a.label){case 0:return e=self.VamtigerBrowserMethod,t=self.localStorage,r=self.indexedDB,[4,Promise.all([function(){var e=this;return new Promise(function(t,r){return j(e,void 0,void 0,function(){var e,r,n;return __generator(this,function(o){switch(o.label){case 0:return e=!1,r=!1,n=_.worker,setTimeout(function(){return!r&&t(e)},S.indexDbIsAccessible),[4,Fe({storeName:jt,keyPath:gt,key:n})];case 1:return o.sent(),r=!0,t(e=!0),[2]}})})})}()])];case 1:return n=a.sent()[0],o={localStorage:!!t,indexedDb:!!r,indexedDbIsAccessible:n,worker:!!self.hasOwnProperty("Worker"),sharedWorker:self.hasOwnProperty("SharedWorker"),textEncoder:self.hasOwnProperty("TextEncoder"),textDecoder:self.hasOwnProperty("TextDecoder")},e.support=o,_e()&&function(){var e=self.VamtigerBrowserMethod;ke({action:H.setWorkerSupport,params:e.support||{}})}(),[2]}})})}var St,Et="Message Ignored";var kt=((St={})[H.ignore]=function(e){console.log(Et),console.warn(e)},St[H.removeRedundantScripts]=xe,St[H.setWorkerSupport]=function(e){return j(this,void 0,void 0,function(){var t,r,n;return __generator(this,function(o){return t=self.VamtigerBrowserMethod,r=t.support,n=t.environment,t.workerSupport=e,r&&wt(g({environment:n},r)),e&&wt(g({environment:_.worker},e)),[2]})})},St[H.saveWebComponentData]=Ze,St[H.getWebComponentData]=ze,St[H.dequeue]=Ge,St[H.loadWebComponentData]=st,St[H.saveSupport]=wt,St);function Lt(e){return j(this,void 0,void 0,function(){var t,r,n,o;return __generator(this,function(a){switch(a.label){case 0:return t=vt(e)||{action:H.ignore,params:{}},r=t.action,n=t.params,[4,(0,kt[r])(n)];case 1:return(o=a.sent())&&ke(o),[2]}})})}var Pt=C.vamtigerBrowserMethod;function Ct(){return j(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return r=window.location,(e=P.localHost===r.hostname)?[4,fetch(Pt).then(function(e){return e.ok}).catch(function(e){return""})]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return[2,e&&Pt||""]}var r})})}var Mt,Ot=JSON.stringify,xt={type:M.js};function Dt(e){Object.keys(e).forEach(function(t){return console.error("string"==typeof e[t]||Ot(e[t]))})}function Tt(){je()&&function(){j(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:return e=self.VamtigerBrowserMethod,t=e,[4,function(){return j(this,void 0,void 0,function(){var e,t,r,n,o,a,i,s;return __generator(this,function(c){switch(c.label){case 0:return[4,Ct()];case 1:return e=c.sent(),t=document.head,r=URL.createObjectURL,n=!Mt&&G.worker,o=(n&&Array.from(t.querySelectorAll(n))||[]).map(function(e){return e.innerHTML}).filter(function(e){return e}),a=o&&o.length&&new Blob(o,xt),i=a&&r&&r(a),(s=i&&new Worker(e||i))&&(s.addEventListener("message",Lt),s.addEventListener("error",Dt)),[2,Mt=Mt||s]}})})}()];case 1:return t.worker=r.sent(),[2]}})})}()}function At(){_e()&&(addEventListener("message",Lt),xe({selector:G.redundantScripts}))}var Bt,Nt,qt=self.document,It=T.nothing;qt&&(Bt=qt.createElement("template"),Nt=["<figcaption data-linked-data-caption></figcaption> <span data-linked-data-caption-element></span> <a></a>"].join(It),Bt.innerHTML=Nt);var Wt=function(e){var t=e.selector,r=e.attributes,n=void 0===r?{}:r,o=e.properties,a=void 0===o?{}:o,i=Object.keys(n),s=Bt.content.querySelector(t),c=s&&s.cloneNode(!0);return c&&(Object.assign(c,a),i.forEach(function(e){return n[e]&&c.setAttribute(e,n[e]||"")})),c},Ht=T.nothing,Rt=T.slash;var Vt=dt(),Jt={loadScript:se,loadScripts:function(e){return Promise.all(e.map(se))},loadScriptsSequentially:function(e){return new Promise(function(t,r){var n=new Set,o=Promise.resolve();return e.forEach(function(e){o=o.then(function(){return j(void 0,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(se))];case 1:return[2,t.sent()]}})})}).then(function(e){return e.forEach(function(e){return n.add(e)})})}),o=o.then(function(){return t(Array.from(n))})})},loadShadowStylesheet:function(e){var t=e.css,r=e.element,n=r.shadowRoot,o=(r.localName,n&&n.querySelector(q.lastStylesheet)),a=n&&document.createElement("style");a&&n&&(a.innerHTML=t,o&&o.nextElementSibling?n.insertBefore(a,o.nextElementSibling):n.appendChild(a))},defineCustomElement:function e(t){var r=t.name,n=t.constructor,o=t.ignore,a=self.customElements,i=a&&a.define,s=i&&a.get&&a.get(r);if(i&&!s)a.define(r,n);else{if(s)throw new Error(ue+": "+r);if(o)throw new Error(ce+": Custom Elements - "+r);e({name:r,constructor:n,ignore:!0})}},pause:function(e){var t=e.milliseconds,r=void 0===t?1e3:t;return new Promise(function(e,t){return setTimeout(e,r)})},getElement:function(e){return j(this,void 0,void 0,function(){return __generator(this,function(t){return[2,new Promise(function(t,r){var n=self.requestIdleCallback;n?n(function(){return Ne(e,t)}):Ne(e,t)})]})})},getData:function(e){var t=e.jsonLd;return new Promise(function(e,r){var n=self.requestIdleCallback;t?n?n(function(){return lt({jsonLd:t}).then(e)}):lt({jsonLd:t}).then(e):r(new Error(ft))})},getEnvironment:dt,environment:Vt,messageQueue:new Map,getMicrodataCaption:function(e){var t,r,n=e.imageData,o=e.fieldKey,a=n[o],i=Array.isArray(a)&&a||[a]||[],s=a&&Wt({selector:q.linkedDataCaption,attributes:{itemprop:o}});return i.forEach(function(e){e&&(t=e["@context"]&&e["@type"]&&[e["@context"],e["@type"]].join(Rt),(r=Wt({selector:q.linkedDataCaption}))&&(r.setAttribute("itemscope",Ht),t&&r.setAttribute("itemtype",t),[e.name&&Wt({selector:q.linkedDataCaptionElement,properties:{innerHTML:e.name},attributes:{itemprop:"name"}}),e.description&&Wt({selector:q.linkedDataCaptionElement,properties:{innerHTML:e.description},attributes:{itemprop:"description"}}),e.url&&Wt({selector:q.a,properties:{innerHTML:e.name||e.url},attributes:{itemprop:"url",href:e.url}})].forEach(function(e){return e&&r&&r.appendChild(e)}),s&&s.appendChild(r)))}),s}};!function(){try{var e=self.VamtigerBrowserMethod;e||(self.VamtigerBrowserMethod=Jt,_t(),Tt(),At())}catch(e){!function(e){throw console.error(e),e}(e)}}()}();
//# sourceMappingURL=vamtiger-browser-method.js.map
