!function(){"use strict";var e,t,n,r,o,a,i,s,c,u,l,d,f,p,m,h,v,y,w;!function(e){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function n(e,n){return e!==t&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(t,r){return e[t]=n?n(t,r):r}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(r){e(n(t,n(r)))}):"object"==typeof module&&"object"==typeof module.exports?e(n(t,n(module.exports))):e(n(t))}(function(b){var g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};e=function(e,t){function n(){this.constructor=e}g(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},r=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=function(e,t){return function(n,r){t(n,r,e)}},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,s)}c((r=r.apply(e,t||[])).next())})},s=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},c=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},u=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},l=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},d=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]));return e},f=function(e){return this instanceof f?(this.v=e,this):new f(e)},p=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise(function(n,r){a.push([e,t,n,r])>1||s(e,t)})})}function s(e,t){try{(n=o[e](t)).value instanceof f?Promise.resolve(n.value.v).then(c,u):l(a[0][2],n)}catch(e){l(a[0][3],e)}var n}function c(e){s("next",e)}function u(e){s("throw",e)}function l(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}},m=function(e){var t,n;return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:f(e[r](t)),done:"return"===r}:o?o(t):t}:o}},h=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof u?u(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){(function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)})(r,o,(t=e[n](t)).done,t.value)})}}},v=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},w=function(e){return e&&e.__esModule?e:{default:e}},b("__extends",e),b("__assign",t),b("__rest",n),b("__decorate",r),b("__param",o),b("__metadata",a),b("__awaiter",i),b("__generator",s),b("__exportStar",c),b("__values",u),b("__read",l),b("__spread",d),b("__await",f),b("__asyncGenerator",p),b("__asyncDelegator",m),b("__asyncValues",h),b("__makeTemplateObject",v),b("__importStar",y),b("__importDefault",w)});var b=Object.freeze({});const g=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};function j(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,s)}c((r=r.apply(e,t)).next())})}var _,S,k,E,L,P,C,M,O,x,T,D,A,B,N,q,I,W,J,H,R,V,Q;Object.keys(b).forEach(function(e){self[e]||(self[e]=b[e])}),function(e){e.window="window",e.worker="worker"}(_||(_={})),function(e){e[e.webComponent=6e4]="webComponent",e[e.indexDbIsAccessible=100]="indexDbIsAccessible"}(S||(S={})),function(e){e.webComponent="webComponent"}(k||(k={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method",e.db="vamtiger-browser-method",e.messageIdWindow="vamtiger-browser-method-window",e.messageIdWorker="vamtiger-browser-method-worker"}(E||(E={})),function(e){e.nowhere="",e.everyWhere="*"}(L||(L={})),function(e){e.localHost="localhost"}(P||(P={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method.js"}(C||(C={})),function(e){e.js="text/javascript",e.json="application/json",e.jsonld="application/ld+json"}(M||(M={})),function(e){e.type="type"}(O||(O={})),function(e){e.vamtigerElementQuery="vamtigerLoadElementQueryCss",e.elementQueryCssLoaded="elementQueryCssLoaded"}(x||(x={})),function(e){e.failedToLoadScript="Failed to load script",e.windowPropertyNotSet="Window property not set",e.unsupportedFeature="Unsupported feature",e.customElementAreadyDefined="Custom element already defined",e.noElementName="No Element Name",e.noTemplateUrl="No Template URL",e.noElementSelector="No Template Selector",e.noTemplateForUrl="No Template for URL",e.noTemplate="No Template",e.noElementForSelector="No Element for Selector",e.noJsonLdParameter='No "jsonLd" property set'}(T||(T={})),function(e){e.nothing="",e.slash="/",e.dash="-",e.pipe="|",e.comma=",",e.backTick="`",e.doubleQuote='"',e.commaSpace=", "}(D||(D={})),function(e){e.div="div",e.template="template"}(A||(A={})),function(e){e.stylesheet="stylesheet"}(B||(B={})),function(e){e.script="script",e.link="link",e.style="style"}(N||(N={})),function(e){e.lastStylesheet="style:last-of-type",e.lastMetaElement="head > meta:last-of-type",e.webcomponentsjs='script[src*="@webcomponents/webcomponentsjs"]',e.style="style",e.stylesheet=' link[rel="stylesheet"]',e.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',e.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]',e.vamtigerBrowserMethod='[data-name$="vamtiger-browser-method.js"]',e.script="script",e.jsonScript='script[type="application/json"]',e.jsonLdScript='script[type="application/ld+json"]',e.a="a",e.linkedDataCaption="[data-linked-data-caption]",e.linkedDataCaptionElement="[data-linked-data-caption-element]"}(q||(q={})),function(e){e.loadElementQueryCss="vamtiger-load-element-query-css"}(I||(I={})),function(e){e.style="style",e.stylesheet="stylesheet"}(W||(W={})),function(e){e.ignore="ignore",e.removeRedundantScripts="removeRedundantScripts",e.setWorkerSupport="setWorkerSupport",e.saveWebComponentData="saveWebComponentData",e.getWebComponentData="getWebComponentData",e.dequeue="dequeue",e.loadWebComponentData="loadWebComponentData",e.saveSupport="saveSupport"}(J||(J={})),function(e){e.vamtigerBrowserSupport="vamtiger-browser-support"}(H||(H={})),function(e){e.support="support",e.webComponent="web-component"}(R||(R={})),function(e){e.readonly="readonly",e.readwrite="readwrite",e.versionchange="versionchange"}(V||(V={})),function(e){e.webComponent="url",e.support="environment"}(Q||(Q={}));var U=/:{1,2}host/gm,F=(new RegExp(D.dash,"g"),/\W+/g),G={worker:[q.vamtigerBrowserMethod].join(D.comma),redundantScripts:[q.vamtigerBrowserMethodJsonJs,q.vamtigerBrowserMethodJson,q.vamtigerBrowserMethod].join(D.comma)},$=postMessage,z=D.nothing;var K=D.nothing,X=F,Y=function(e){return e.split(X).map(function(e,t){return!t&&e.toLowerCase()||e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}).join(K)},Z=U,ee=D.nothing;function te(e){var t=e.css,n=e.stylesheetName,r=void 0===n?ee:n,o=e.hostName,a=void 0===o?ee:o,i=function(e){var t=e.selector,n=void 0===t?z:t,r=e.properties,o=void 0===r?{}:r,a=e.dataset,i=void 0===a?{}:a,s=e.attributes,c=void 0===s?{}:s,u=o.id,l=document.head,d=l.querySelector(q.lastMetaElement),f=Object.keys(c),p=u&&(window[u]||n&&l.querySelector(n)),m=!p&&document.createElement("meta"),h=p||m;return m&&(Object.assign(m,o),Object.assign(m.dataset,i),d&&d.nextElementSibling?l.insertBefore(m,d.nextElementSibling):l.appendChild(m)),f.forEach(function(e){return!h.hasAttribute(e)&&h.setAttribute(void 0,c[e])}),h}({properties:{id:I.loadElementQueryCss}}),s=Y(r),c=i.dataset,u=!c.hasOwnProperty(a)&&a&&t.replace(Z,a)||t,l=self.EQCSS;u&&l&&(l.register(l.parse(u)),s?c[s]=ee:a&&(c[a]=ee))}var ne=T.failedToLoadScript,re=B.stylesheet,oe=N.script,ae=N.link,ie=N.style,se=function(e){return new Promise(function(t,n){var r=document.head,o=document.body,a=e,i=a.js,s=a.name,c=a.jsonld,u=a.removeFromDom,l=e.src,d=e,f=d.css,p=d.name,m=e.href,h=e.json,v=e.hasOwnProperty("src")||e.hasOwnProperty("href"),y=(i||h||l)&&oe||f&&ie||m&&ae,w=l&&'script[src="'+l+'"]'||m&&'link[href="'+m+'"]'||i&&s&&'script[data-name="'+s+'"]'||c&&s&&'script[data-name="'+s+'"][type="'+M.jsonld+'"]'||f&&p&&'style[data-name="'+p+'"]',b=r.querySelector(w)||o.querySelector(w),g=w&&y&&document.createElement(y);function j(){g&&(S(),u&&r.removeChild(g),t(g))}function _(e){S(),console.error(e),n(new Error(""+ne))}function S(){g&&(g.removeEventListener("load",j),g.removeEventListener("error",_))}g instanceof HTMLScriptElement?l?g.src=l:(h||i)&&(g.innerHTML=h||i,g.dataset.name=s,c?(g.setAttribute(O.type,M.jsonld),g.dataset.jsonLd=g.dataset.name):h&&g.setAttribute(O.type,M.json)):g instanceof HTMLLinkElement?(g.rel=re,g.href=m):g instanceof HTMLStyleElement&&(g.innerHTML=f,g.dataset.name=p,te({css:f,stylesheetName:p})),b?t(b):g&&(g.addEventListener("load",j),g.addEventListener("error",_),r.appendChild(g),v||j())})};var ce=T.unsupportedFeature,ue=T.customElementAreadyDefined;var le=D.dash;function de(e){return new Promise(function(t,n){var r=self.requestIdleCallback;r?r(function(){return fe(e,t)}):fe(e,t)})}function fe(e,t){return j(this,void 0,void 0,function(){var n,r,o,a,i;return __generator(this,function(s){switch(s.label){case 0:return n=e.container,r=e.name,o=Array.from(n.content.querySelectorAll(q.style)).map(function(e,t){return{name:[r,W.style,t++].join(le),css:e.innerHTML}}),a=Array.from(n.content.querySelectorAll(q.stylesheet)).map(function(e,t){return{name:[r,W.stylesheet,t++].join(le),href:e.href}}),[4,Promise.all(o.map(se).concat(a.map(se)))];case 1:return i=s.sent(),t(i),[2]}})})}var pe=T.noElementName,me=T.noTemplate,he=T.noElementForSelector;var ve=T.noElementName,ye=T.noElementSelector,we=T.noTemplateUrl,be=T.noTemplateForUrl,ge=T.noElementForSelector;function je(){return self.VamtigerBrowserMethod.environment===_.window}function _e(){return self.VamtigerBrowserMethod.environment===_.worker}var Se=JSON.stringify,ke=new TextEncoder;function Ee(e){var t=self.VamtigerBrowserMethod,n=t.worker,r=(t.support||{}).textEncoder,o=Se(e),a=r&&ke.encode(o)||o;je()&&n&&n.postMessage(a),_e()&&$(a)}var Le=JSON.parse;function Pe(e){var t=e.script.innerHTML,n=!1;try{Le(t),n=!0}catch(e){console.warn(e),n=!1}return n}var Ce=self.requestIdleCallback,Me=D.dash,Oe=E.vamtigerBrowserMethod;function xe(e){return j(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return je()?[4,function(e){return j(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return t=document.head,[4,Te(g({},e,{parent:t}))];case 1:return n.sent(),[2]}})})}(e)]:[3,2];case 1:t.sent(),t.label=2;case 2:return _e()&&function(e){var t=e.selector;Ee({action:J.removeRedundantScripts,params:{selector:t}})}(e),[2]}})})}function Te(e){return new Promise(function(t,n){Ce?Ce(function(){return De(g({},e,{resolve:t,reject:n}))}):De(g({},e,{resolve:t,reject:n}))})}function De(e){var t=e.selector,n=e.parent,r=e.resolve,o=(e.reject,document.head),a=Array.from(n.querySelectorAll(t)),i=a.filter(function(e){var t=e.type;return e.src||!t||t===M.js}),s=a.filter(function(e){return e.type===M.json}).filter(function(e){return Pe({script:e})}),c=a.filter(function(e){return e.type===M.jsonld}).filter(function(e){return Pe({script:e})}),u=c.concat(s),l=(new Date).getTime(),d=s.length&&[Oe,M.json,l].join(Me),f=d&&'script[type="'+M.json+'"][data-name="'+d+'"]',p=c.length&&[Oe,M.jsonld,l].join(Me),m=p&&'script[type="'+M.jsonld+'"][data-name="'+p+'"]';i.length&&d&&i.forEach(function(e){return e.dataset.name=d||""}),c.length&&p&&m&&c.forEach(function(e){return e.dataset.name=p||""}),f&&n!==o&&(n.dataset.json=f),m&&n!==o&&(n.dataset.jsonLd=m),a.length&&(n.dataset.removedScripts=a.length.toString()),u.forEach(function(e){return o.appendChild(e)}),a.forEach(function(e){return n.removeChild(e)}),r&&r()}var Ae=q.script;function Be(e,t){return j(this,void 0,void 0,function(){var n;return __generator(this,function(r){switch(r.label){case 0:return e.url?[4,function(e){return j(this,void 0,void 0,function(){var t,n,r,o,a,i,s,c;return __generator(this,function(u){switch(u.label){case 0:return t=e.name,n=e.url,r=e.selector,o=e.loadStylesheets,document.head,(i=t&&r&&n)?[4,fetch(n).then(function(e){return e.text()})]:[3,2];case 1:i=u.sent(),u.label=2;case 2:if(s=(a=i)&&document.createElement(A.template),c=null,!t)throw new Error(ve);if(!r)throw new Error(ye);if(!n)throw new Error(we);if(!a)throw new Error(be);return s?(s.innerHTML=a,c=s.content.querySelector(r),o&&c?[4,de(g({},e,{container:s}))]:[3,4]):[3,5];case 3:u.sent(),u.label=4;case 4:u.label=5;case 5:if(!c)throw new Error(ge);return c.setAttribute("dataset-name",t),[2,c]}})})}(e)]:[3,2];case 1:return n=r.sent(),[3,4];case 2:return[4,function(e){return j(this,void 0,void 0,function(){var t,n,r,o,a,i;return __generator(this,function(s){switch(s.label){case 0:if(t=e.name,n=e.template,r=e.loadStylesheets,o=e.selector,a=t&&n&&document.createElement(A.template),i=null,!t)throw new Error(pe);if(!n)throw new Error(me);return a?(a.innerHTML=n,i=o&&a.content.firstElementChild&&a.content.firstElementChild.querySelector(o)||a.content.firstElementChild,r&&i?[4,de(g({},e,{container:a}))]:[3,2]):[3,3];case 1:s.sent(),s.label=2;case 2:s.label=3;case 3:if(!i)throw new Error(he);return i.dataset.name=t,[2,i]}})})}(e)];case 3:n=r.sent(),r.label=4;case 4:return n?[4,Te({selector:Ae,parent:n})]:[3,6];case 5:r.sent(),r.label=6;case 6:return t(n),[2]}})})}var Ne=S.webComponent;function qe(e){var t,n=e.key,r={resolve:e.resolve,reject:e.reject},o=self.VamtigerBrowserMethod.messageQueue;!o.has(n)&&o.set(n,new Set),(t=o.get(n))&&t.add(r),setTimeout(function(){return function(e){var t=e.key,n=e.queueEntry,r=self.VamtigerBrowserMethod.messageQueue,o=r.get(t);o&&(o.has(n)&&o.delete(n),!o.size&&r.delete(t))}({key:n,queueEntry:r})},Ne)}var Ie=H.vamtigerBrowserSupport;function We(e){return j(this,void 0,void 0,function(){var t,n,r,o,a;return __generator(this,function(i){switch(i.label){case 0:return t=e.storeName,e.keyPath,n=e.mode,[4,new Promise(function(e,t){var n=indexedDB.open(Ie,1);n.addEventListener("error",t),n.addEventListener("upgradeneeded",function(){return e={db:n.result},t=e.db,void Object.keys(Q).forEach(function(e){return!t.objectStoreNames.contains(e)&&t.createObjectStore(R[e],{keyPath:Q[e]})});var e,t}),n.addEventListener("success",function(){return e(n.result)})})];case 1:return r=i.sent(),o=r&&r.transaction&&r.transaction(t,n),a=o&&o.objectStore&&o.objectStore(t),[2,{db:r,transaction:o,store:a}]}})})}var Je=V.readwrite,He=J.getWebComponentData;function Re(e){var t=e.storeName,n=e.keyPath,r=e.data,o=e.messageId;return j(this,void 0,void 0,function(){var e,a;return __generator(this,function(i){switch(i.label){case 0:return[4,We({storeName:t,keyPath:n,mode:Je})];case 1:return e=i.sent().store,(a=e.put(r)).addEventListener("error",Ve),a.addEventListener("success",function(){return function(e){var t=e.messageId,n=e.key,r=t&&{action:He,params:{messageId:t,key:n}};r&&Ee(r)}({messageId:o,key:n})}),[2]}})})}function Ve(e){throw console.error(e),e}var Qe=V.readonly;function Ue(e){var t=e.storeName,n=e.keyPath,r=e.key;return j(this,void 0,Promise,function(){var e=this;return __generator(this,function(o){return[2,new Promise(function(o,a){return j(e,void 0,void 0,function(){var e,i;return __generator(this,function(s){switch(s.label){case 0:return[4,We({storeName:t,keyPath:n,mode:Qe})];case 1:return e=s.sent().store,(i=e.get(r)).addEventListener("error",a),i.addEventListener("success",function(){return o(i.result)}),[2]}})})})]})})}function Fe(e){var t=e.key,n=e.data,r=self.VamtigerBrowserMethod.messageQueue.get(t)||new Set;Array.from(r).forEach(function(e){e.resolve(n),r.delete(e)})}var Ge=J.getWebComponentData,$e=JSON.parse;function ze(e){var t,n,r,o,a,i,s,c,u=self.VamtigerBrowserMethod,l=u.support,d=u.workerSupport,f=u.worker;if(je()){if(f&&d&&d.indexedDbIsAccessible)return function(e){var t=e.key;return j(this,void 0,void 0,function(){return __generator(this,function(e){return Ee({action:Ge,params:{key:t}}),[2]})})}(e);f&&l&&l.indexedDbIsAccessible?function(e){var t=e.key;j(this,void 0,void 0,function(){var e,n;return __generator(this,function(r){switch(r.label){case 0:return[4,Ke({key:t})];case 1:return e=r.sent(),(n=e&&{key:t,data:e})&&Fe(n),[2]}})})}(e):(t=e.key,n=document.head,r='script[data-json-ld="'+t+'"][type="'+M.jsonld+'"]',o='script[data-json-ld="'+t+'"][type="'+M.json+'"]',a=Array.from(n.querySelectorAll(r)),i=n.querySelector(o),s=a.length&&{jsonLd:a.map(function(e){var t=e.innerHTML;return t&&$e(t)}),json:i&&i.innerHTML&&$e(i.innerHTML)||{}},(c=s&&{key:t,data:s})&&Fe(c))}else if(_e())return function(e){var t=e.key;return j(this,void 0,void 0,function(){var e;return __generator(this,function(n){switch(n.label){case 0:return[4,Ke({key:t})];case 1:return e=n.sent(),[2,e&&e.jsonLd&&e.jsonLd.length&&{action:J.dequeue,params:{key:t,data:{jsonLd:e.jsonLd,json:e.json}}}]}})})}(e)}function Ke(e){var t=e.key;return j(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,Ue({storeName:R.webComponent,keyPath:Q.webComponent,key:t})];case 1:return[2,e.sent()]}})})}var Xe=R.webComponent,Ye=Q.webComponent;function Ze(e){return je()?function(e){return j(this,void 0,void 0,function(){var t,n,r,o,a,i,s;return __generator(this,function(c){switch(c.label){case 0:return t=self.VamtigerBrowserMethod,n=t.support,r=t.workerSupport,o=e.url,a=nt({url:o}),i=tt(e),s=i&&{action:J.saveWebComponentData,params:i},r&&r.indexedDbIsAccessible?(s&&Ee(s),[3,4]):[3,1];case 1:return n&&n.indexedDbIsAccessible?[4,et(e)]:[3,4];case 2:return c.sent(),[4,ze({key:o})];case 3:c.sent(),xe({selector:a}),c.label=4;case 4:return[2]}})})}(e):_e()?function(e){return j(this,void 0,void 0,function(){var t,n,r,o;return __generator(this,function(a){switch(a.label){case 0:return t=e.url,n=nt({url:t}),[4,et(e)];case 1:return a.sent(),r={action:J.getWebComponentData,params:{key:t}},o={action:J.removeRedundantScripts,params:{selector:n}},Ee(r),Ee(o),[2]}})})}(e):void 0}function et(e){return j(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:return t=tt(e),(n=t&&{storeName:Xe,keyPath:Ye,data:t})?[4,Re(n)]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})}function tt(e){var t=e.url,n=e.created,r=void 0===n?(new Date).getTime():n,o=e.json,a=e.jsonLd;return t&&a&&{url:t,created:r,jsonLd:a,json:o}}function nt(e){return'script[type="application/json"][data-json-ld="'+e.url+'"]'}var rt=JSON.parse,ot=JSON.stringify,at={jsonLd:[],json:{}};function it(e){return j(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,je()&&function(e){var t=e.url,n=e.loadJsonJsonLd;return j(this,void 0,void 0,function(){var e,r,o,a,i,s,c,u,l,d,f;return __generator(this,function(p){switch(p.label){case 0:return e=self.VamtigerBrowserMethod,r=e.worker,o=document.head,a='script[type="application/ld+json"][data-json-ld="'+t+'"]',[4,function(e){var t=e.url;return j(this,void 0,void 0,function(){var e,n,r,o,a,i,s,c,u,l,d,f,p;return __generator(this,function(m){switch(m.label){case 0:return m.trys.push([0,5,,6]),e=document.head,n=q.script+'[src="'+t+'"]',r='script[type="application/ld+json"][data-json-ld="'+t+'"]',o='script[type="application/json"][data-json-ld="'+t+'"]',a=e.querySelector(n),(i=!a)?[4,se({src:t})]:[3,2];case 1:i=m.sent(),m.label=2;case 2:return(s=i)?[4,Promise.all([Array.from(e.querySelectorAll(r)).map(function(e){var t=e.innerHTML;return t}),e.querySelector(o)])]:[3,4];case 3:s=m.sent(),m.label=4;case 4:return u=(c=s||[void 0,void 0])[0],l=c[1],d=u&&u.map(function(e){return rt(e)}),f=l&&rt(l.innerHTML)||{},[2,{jsonLd:d,json:f}];case 5:return p=m.sent(),console.error(p),[2,at];case 6:return[2]}})})}({url:t})];case 1:return i=p.sent(),s=i.jsonLd,c=i.json,(l=n&&c&&Array.isArray(c.jsonLd))?[4,Promise.all(c.jsonLd.map(st))]:[3,3];case 2:l=p.sent(),p.label=3;case 3:return u=l,d=s&&{url:t,created:(new Date).getTime(),jsonLd:s,json:c},f=o.querySelector(a),u?(u.forEach(function(e){return e.forEach(function(e){var t=e.index,n=e.key,r=e.jsonLd;s&&Array.isArray(s)&&s[t]&&n&&!0===s[t][n]&&r&&(s[t][n]=r)})}),f&&s?(o.removeChild(f),[4,Promise.all(s.map(function(e){return se({name:t,json:ot(e),jsonld:!0})}))]):[3,5]):[3,5];case 4:p.sent(),p.label=5;case 5:return r&&d&&Ze(d),[2]}})})}(e)];case 1:return[2,t.sent()]}})})}function st(e){var t=e.index,n=e.fields;return j(this,void 0,void 0,function(){var e;return __generator(this,function(r){switch(r.label){case 0:return e=Object.keys(n),[4,Promise.all(e.map(function(e){return function(e){var t=e.urls,n=e.key;return j(this,void 0,void 0,function(){var e,r,o,a;return __generator(this,function(i){switch(i.label){case 0:return e=!1,r=Array.isArray(t)&&t.filter(function(e){return"string"==typeof e})||[],[4,Promise.all(r.map(function(t){return ct({jsonLd:t,loadJsonJsonLd:e})}))];case 1:return o=i.sent(),a={key:n,jsonLd:[]},o.forEach(function(e){var t=e.jsonLd;return t&&t.forEach(function(e){return e&&a.jsonLd.push(e)})}),[2,a]}})})}({key:e,urls:n[e]}).then(function(e){return g({index:t},e)})}))];case 1:return[2,r.sent()]}})})}function ct(e){var t=this,n=e.jsonLd,r=e.loadJsonJsonLd,o=void 0===r||r;return new Promise(function(e,r){return j(t,void 0,void 0,function(){var t;return __generator(this,function(a){switch(a.label){case 0:qe({key:n,resolve:e,reject:r}),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,it({url:n,loadJsonJsonLd:o})];case 2:return a.sent(),[3,4];case 3:return t=a.sent(),console.error(t),[3,4];case 4:return ze({key:n}),[2]}})})})}var ut=T.noJsonLdParameter;function lt(){return self.hasOwnProperty("WorkerGlobalScope")&&_.worker||_.window}var dt=JSON.parse,ft={action:J.ignore,params:{}},pt=new TextDecoder;function mt(e){var t;try{t=function(e){var t=e.data,n="string"==typeof t&&dt(t)||t instanceof Uint8Array&&dt(pt.decode(t));"string"==typeof n.params&&(n.params=dt(n.params));return n}(e)||ft}catch(e){t=ft}return t}var ht=R.support;function vt(e){return j(this,void 0,void 0,function(){return __generator(this,function(t){return je()&&function(e){var t=self.VamtigerBrowserMethod.workerSupport,n=t&&t.indexedDbIsAccessible&&{action:J.saveSupport,params:e};n?Ee(n):yt(e)}(e),_e()&&function(e){yt(e)}(e),[2]})})}function yt(e){var t=e.environment,n=t&&{storeName:ht,keyPath:Q.support,data:g({environment:t},e)};n&&Re(n)}var wt=Q.support,bt=R.support;function gt(){return j(this,void 0,void 0,function(){var e,t,n,r,o;return __generator(this,function(a){switch(a.label){case 0:return e=self.VamtigerBrowserMethod,t=self.localStorage,n=self.indexedDB,[4,Promise.all([function(){var e=this;return new Promise(function(t,n){return j(e,void 0,void 0,function(){var e,n,r;return __generator(this,function(o){switch(o.label){case 0:return e=!1,n=!1,r=_.worker,setTimeout(function(){return!n&&t(e)},S.indexDbIsAccessible),[4,Ue({storeName:bt,keyPath:wt,key:r})];case 1:return o.sent(),n=!0,t(e=!0),[2]}})})})}()])];case 1:return r=a.sent()[0],o={localStorage:!!t,indexedDb:!!n,indexedDbIsAccessible:r,worker:!!self.hasOwnProperty("Worker"),sharedWorker:self.hasOwnProperty("SharedWorker"),textEncoder:self.hasOwnProperty("TextEncoder"),textDecoder:self.hasOwnProperty("TextDecoder")},e.support=o,_e()&&function(){var e=self.VamtigerBrowserMethod;Ee({action:J.setWorkerSupport,params:e.support||{}})}(),[2]}})})}var jt,_t="Message Ignored";var St=((jt={})[J.ignore]=function(e){console.log(_t),console.warn(e)},jt[J.removeRedundantScripts]=xe,jt[J.setWorkerSupport]=function(e){return j(this,void 0,void 0,function(){var t,n,r;return __generator(this,function(o){return t=self.VamtigerBrowserMethod,n=t.support,r=t.environment,t.workerSupport=e,n&&vt(g({environment:r},n)),e&&vt(g({environment:_.worker},e)),[2]})})},jt[J.saveWebComponentData]=Ze,jt[J.getWebComponentData]=ze,jt[J.dequeue]=Fe,jt[J.loadWebComponentData]=it,jt[J.saveSupport]=vt,jt);function kt(e){return j(this,void 0,void 0,function(){var t,n,r,o;return __generator(this,function(a){switch(a.label){case 0:return t=mt(e)||{action:J.ignore,params:{}},n=t.action,r=t.params,[4,(0,St[n])(r)];case 1:return(o=a.sent())&&Ee(o),[2]}})})}var Et=C.vamtigerBrowserMethod;function Lt(){return j(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return n=window.location,(e=P.localHost===n.hostname)?[4,fetch(Et).then(function(e){return e.ok}).catch(function(e){return""})]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return[2,e&&Et||""]}var n})})}var Pt,Ct=JSON.stringify,Mt={type:M.js};function Ot(e){Object.keys(e).forEach(function(t){return console.error("string"==typeof e[t]||Ct(e[t]))})}function xt(){je()&&function(){j(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return e=self.VamtigerBrowserMethod,t=e,[4,function(){return j(this,void 0,void 0,function(){var e,t,n,r,o,a,i,s;return __generator(this,function(c){switch(c.label){case 0:return[4,Lt()];case 1:return e=c.sent(),t=document.head,n=URL.createObjectURL,r=!Pt&&G.worker,o=(r&&Array.from(t.querySelectorAll(r))||[]).map(function(e){return e.innerHTML}).filter(function(e){return e}),a=o&&o.length&&new Blob(o,Mt),i=a&&n&&n(a),(s=i&&new Worker(e||i))&&(s.addEventListener("message",kt),s.addEventListener("error",Ot)),[2,Pt=Pt||s]}})})}()];case 1:return t.worker=n.sent(),[2]}})})}()}function Tt(){_e()&&(addEventListener("message",kt),xe({selector:G.redundantScripts}))}var Dt,At,Bt=self.document,Nt=D.nothing;Bt&&(Dt=Bt.createElement("template"),At=["<figcaption data-linked-data-caption></figcaption> <span data-linked-data-caption-element></span> <a></a>"].join(Nt),Dt.innerHTML=At);var qt=function(e){var t=e.selector,n=e.attributes,r=void 0===n?{}:n,o=e.properties,a=void 0===o?{}:o,i=Object.keys(r),s=Dt.content.querySelector(t),c=s&&s.cloneNode(!0);return c&&(Object.assign(c,a),i.forEach(function(e){return r[e]&&c.setAttribute(e,r[e]||"")})),c},It=D.nothing,Wt=D.slash;var Jt=lt(),Ht={loadScript:se,loadScripts:function(e){return Promise.all(e.map(se))},loadScriptsSequentially:function(e){return new Promise(function(t,n){var r=new Set,o=Promise.resolve();return e.forEach(function(e){o=o.then(function(){return j(void 0,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(se))];case 1:return[2,t.sent()]}})})}).then(function(e){return e.forEach(function(e){return r.add(e)})})}),o=o.then(function(){return t(Array.from(r))})})},loadShadowStylesheet:function(e){var t=e.css,n=e.element,r=n.shadowRoot,o=(n.localName,r&&r.querySelector(q.lastStylesheet)),a=r&&document.createElement("style");a&&r&&(a.innerHTML=t,o&&o.nextElementSibling?r.insertBefore(a,o.nextElementSibling):r.appendChild(a))},defineCustomElement:function e(t){var n=t.name,r=t.constructor,o=t.ignore,a=self.customElements,i=a&&a.define,s=i&&a.get&&a.get(n);if(i&&!s)a.define(n,r);else{if(s)throw new Error(ue+": "+n);if(o)throw new Error(ce+": Custom Elements - "+n);e({name:n,constructor:r,ignore:!0})}},pause:function(e){var t=e.milliseconds,n=void 0===t?1e3:t;return new Promise(function(e,t){return setTimeout(e,n)})},getElement:function(e){return j(this,void 0,void 0,function(){return __generator(this,function(t){return[2,new Promise(function(t,n){var r=self.requestIdleCallback;r?r(function(){return Be(e,t)}):Be(e,t)})]})})},getData:function(e){var t=e.jsonLd;return new Promise(function(e,n){var r=self.requestIdleCallback;t?r?r(function(){return ct({jsonLd:t}).then(e)}):ct({jsonLd:t}).then(e):n(new Error(ut))})},getEnvironment:lt,environment:Jt,messageQueue:new Map,getMicrodataCaption:function(e){var t,n,r=e.imageData,o=e.fieldKey,a=r[o],i=Array.isArray(a)&&a||[a]||[],s=a&&qt({selector:q.linkedDataCaption,attributes:{itemprop:o}});return i.forEach(function(e){e&&(t=e["@context"]&&e["@type"]&&[e["@context"],e["@type"]].join(Wt),(n=qt({selector:q.linkedDataCaption}))&&(n.setAttribute("itemscope",It),t&&n.setAttribute("itemtype",t),[e.name&&qt({selector:q.linkedDataCaptionElement,properties:{innerHTML:e.name},attributes:{itemprop:"name"}}),e.description&&qt({selector:q.linkedDataCaptionElement,properties:{innerHTML:e.description},attributes:{itemprop:"description"}}),e.url&&qt({selector:q.a,properties:{innerHTML:e.name||e.url},attributes:{itemprop:"url",href:e.url}})].forEach(function(e){return e&&n&&n.appendChild(e)}),s&&s.appendChild(n)))}),s}};!function(){try{var e=self.VamtigerBrowserMethod;e||(self.VamtigerBrowserMethod=Ht,gt(),xt(),Tt())}catch(e){!function(e){throw console.error(e),e}(e)}}()}();
//# sourceMappingURL=vamtiger-browser-method.js.map
