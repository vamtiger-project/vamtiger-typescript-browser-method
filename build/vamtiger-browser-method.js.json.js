(function(){         const { stringify } = JSON;         const selector = 'script[type="application/json"][data-name="vamtiger-browser-method.js.json"]';         const existingScript = document.querySelector(selector);         const script = !existingScript && document.createElement('script');          if (script) {             script.type = 'application/json';             script.dataset.name = 'vamtiger-browser-method.js.json';             script.innerHTML = stringify({"name":"vamtiger-browser-method.js.json","text":"!function(){\"use strict\";var e,t,n,r,o,a,i,s,c,u,l,f,d,p,m,h,v,y,w;!function(e){var t=\"object\"==typeof global?global:\"object\"==typeof self?self:\"object\"==typeof this?this:{};function n(e,n){return e!==t&&(\"function\"==typeof Object.create?Object.defineProperty(e,\"__esModule\",{value:!0}):e.__esModule=!0),function(t,r){return e[t]=n?n(t,r):r}}\"function\"==typeof define&&define.amd?define(\"tslib\",[\"exports\"],function(r){e(n(t,n(r)))}):\"object\"==typeof module&&\"object\"==typeof module.exports?e(n(t,n(module.exports))):e(n(t))}(function(b){var g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};e=function(e,t){function n(){this.constructor=e}g(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&\"function\"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},r=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if(\"object\"==typeof Reflect&&\"function\"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},o=function(e,t){return function(n,r){t(n,r,e)}},a=function(e,t){if(\"object\"==typeof Reflect&&\"function\"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,s)}c((r=r.apply(e,t||[])).next())})},s=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},\"function\"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError(\"Generator is already executing.\");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},c=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},u=function(e){var t=\"function\"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},l=function(e,t){var n=\"function\"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},f=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(l(arguments[t]));return e},d=function(e){return this instanceof d?(this.v=e,this):new d(e)},p=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError(\"Symbol.asyncIterator is not defined.\");var r,o=n.apply(e,t||[]),a=[];return r={},i(\"next\"),i(\"throw\"),i(\"return\"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise(function(n,r){a.push([e,t,n,r])>1||s(e,t)})})}function s(e,t){try{(n=o[e](t)).value instanceof d?Promise.resolve(n.value.v).then(c,u):l(a[0][2],n)}catch(e){l(a[0][3],e)}var n}function c(e){s(\"next\",e)}function u(e){s(\"throw\",e)}function l(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}},m=function(e){var t,n;return t={},r(\"next\"),r(\"throw\",function(e){throw e}),r(\"return\"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:d(e[r](t)),done:\"return\"===r}:o?o(t):t}:o}},h=function(e){if(!Symbol.asyncIterator)throw new TypeError(\"Symbol.asyncIterator is not defined.\");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=\"function\"==typeof u?u(e):e[Symbol.iterator](),t={},r(\"next\"),r(\"throw\"),r(\"return\"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){(function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)})(r,o,(t=e[n](t)).done,t.value)})}}},v=function(e,t){return Object.defineProperty?Object.defineProperty(e,\"raw\",{value:t}):e.raw=t,e},y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},w=function(e){return e&&e.__esModule?e:{default:e}},b(\"__extends\",e),b(\"__assign\",t),b(\"__rest\",n),b(\"__decorate\",r),b(\"__param\",o),b(\"__metadata\",a),b(\"__awaiter\",i),b(\"__generator\",s),b(\"__exportStar\",c),b(\"__values\",u),b(\"__read\",l),b(\"__spread\",f),b(\"__await\",d),b(\"__asyncGenerator\",p),b(\"__asyncDelegator\",m),b(\"__asyncValues\",h),b(\"__makeTemplateObject\",v),b(\"__importStar\",y),b(\"__importDefault\",w)});var b=Object.freeze({});const g=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};function j(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,s)}c((r=r.apply(e,t)).next())})}var _,S,k,E,L,P,C,M,O,x,T,D,A,B,N,q,I,W,J,H,R,V,Q;Object.keys(b).forEach(function(e){self[e]||(self[e]=b[e])}),function(e){e.window=\"window\",e.worker=\"worker\"}(_||(_={})),function(e){e[e.webComponent=6e4]=\"webComponent\",e[e.indexDbIsAccessible=100]=\"indexDbIsAccessible\"}(S||(S={})),function(e){e.webComponent=\"webComponent\"}(k||(k={})),function(e){e.vamtigerBrowserMethod=\"vamtiger-browser-method\",e.db=\"vamtiger-browser-method\",e.messageIdWindow=\"vamtiger-browser-method-window\",e.messageIdWorker=\"vamtiger-browser-method-worker\"}(E||(E={})),function(e){e.nowhere=\"\",e.everyWhere=\"*\"}(L||(L={})),function(e){e.localHost=\"localhost\"}(P||(P={})),function(e){e.vamtigerBrowserMethod=\"vamtiger-browser-method.js\"}(C||(C={})),function(e){e.js=\"text/javascript\",e.babel=\"text/babel\",e.json=\"application/json\",e.jsonld=\"application/ld+json\"}(M||(M={})),function(e){e.type=\"type\"}(O||(O={})),function(e){e.vamtigerElementQuery=\"vamtigerLoadElementQueryCss\",e.elementQueryCssLoaded=\"elementQueryCssLoaded\"}(x||(x={})),function(e){e.failedToLoadScript=\"Failed to load script\",e.windowPropertyNotSet=\"Window property not set\",e.unsupportedFeature=\"Unsupported feature\",e.customElementAreadyDefined=\"Custom element already defined\",e.noElementName=\"No Element Name\",e.noTemplateUrl=\"No Template URL\",e.noElementSelector=\"No Template Selector\",e.noTemplateForUrl=\"No Template for URL\",e.noTemplate=\"No Template\",e.noElementForSelector=\"No Element for Selector\",e.noJsonLdParameter='No \"jsonLd\" property set'}(T||(T={})),function(e){e.nothing=\"\",e.slash=\"/\",e.dash=\"-\",e.pipe=\"|\",e.comma=\",\",e.backTick=\"`\",e.doubleQuote='\"',e.commaSpace=\", \"}(D||(D={})),function(e){e.div=\"div\",e.template=\"template\"}(A||(A={})),function(e){e.stylesheet=\"stylesheet\"}(B||(B={})),function(e){e.script=\"script\",e.link=\"link\",e.style=\"style\"}(N||(N={})),function(e){e.lastStylesheet=\"style:last-of-type\",e.lastMetaElement=\"head > meta:last-of-type\",e.webcomponentsjs='script[src*=\"@webcomponents/webcomponentsjs\"]',e.style=\"style\",e.stylesheet=' link[rel=\"stylesheet\"]',e.vamtigerBrowserMethodJsonJs='[src$=\"vamtiger-browser-method.js.json.js\"]',e.vamtigerBrowserMethodJson='[data-name$=\"vamtiger-browser-method.js.json\"]',e.vamtigerBrowserMethod='[data-name$=\"vamtiger-browser-method.js\"]',e.script=\"script\",e.jsonScript='script[type=\"application/json\"]',e.jsonLdScript='script[type=\"application/ld+json\"]',e.a=\"a\",e.linkedDataCaption=\"[data-linked-data-caption]\",e.linkedDataCaptionElement=\"[data-linked-data-caption-element]\"}(q||(q={})),function(e){e.loadElementQueryCss=\"vamtiger-load-element-query-css\"}(I||(I={})),function(e){e.style=\"style\",e.stylesheet=\"stylesheet\"}(W||(W={})),function(e){e.ignore=\"ignore\",e.removeRedundantScripts=\"removeRedundantScripts\",e.setWorkerSupport=\"setWorkerSupport\",e.saveWebComponentData=\"saveWebComponentData\",e.getWebComponentData=\"getWebComponentData\",e.dequeue=\"dequeue\",e.loadWebComponentData=\"loadWebComponentData\",e.saveSupport=\"saveSupport\"}(J||(J={})),function(e){e.vamtigerBrowserSupport=\"vamtiger-browser-support\"}(H||(H={})),function(e){e.support=\"support\",e.webComponent=\"web-component\"}(R||(R={})),function(e){e.readonly=\"readonly\",e.readwrite=\"readwrite\",e.versionchange=\"versionchange\"}(V||(V={})),function(e){e.webComponent=\"url\",e.support=\"environment\"}(Q||(Q={}));var U=/:{1,2}host/gm,F=(new RegExp(D.dash,\"g\"),/\\W+/g),G=/http(s)?/i,$={worker:[q.vamtigerBrowserMethod].join(D.comma),redundantScripts:[q.vamtigerBrowserMethodJsonJs,q.vamtigerBrowserMethodJson,q.vamtigerBrowserMethod].join(D.comma)},z=postMessage,K=D.nothing;var X=D.nothing,Y=F,Z=function(e){return e.split(Y).map(function(e,t){return!t&&e.toLowerCase()||e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}).join(X)},ee=U,te=D.nothing;function ne(e){var t=e.css,n=e.stylesheetName,r=void 0===n?te:n,o=e.hostName,a=void 0===o?te:o,i=function(e){var t=e.selector,n=void 0===t?K:t,r=e.properties,o=void 0===r?{}:r,a=e.dataset,i=void 0===a?{}:a,s=e.attributes,c=void 0===s?{}:s,u=o.id,l=document.head,f=l.querySelector(q.lastMetaElement),d=Object.keys(c),p=u&&(window[u]||n&&l.querySelector(n)),m=!p&&document.createElement(\"meta\"),h=p||m;return m&&(Object.assign(m,o),Object.assign(m.dataset,i),f&&f.nextElementSibling?l.insertBefore(m,f.nextElementSibling):l.appendChild(m)),d.forEach(function(e){return!h.hasAttribute(e)&&h.setAttribute(void 0,c[e])}),h}({properties:{id:I.loadElementQueryCss}}),s=Z(r),c=i.dataset,u=!c.hasOwnProperty(a)&&a&&t.replace(ee,a)||t,l=self.EQCSS;u&&l&&(l.register(l.parse(u)),s?c[s]=te:a&&(c[a]=te))}var re={presets:[\"es2015\"]};D.nothing;function oe(e){return console.warn(e.message),console.warn(e.stack),\"\"}var ae=T.failedToLoadScript,ie=B.stylesheet,se=N.script,ce=N.link,ue=N.style,le=G,fe=D.nothing,de=function(e){return new Promise(function(t,n){return j(void 0,void 0,void 0,function(){function r(){P&&(a(),d&&i.removeChild(P),t(P))}function o(e){a(),console.error(e),n(new Error(\"\"+ae))}function a(){P&&(P.removeEventListener(\"load\",r),P.removeEventListener(\"error\",o))}var i,s,c,u,l,f,d,p,m,h,v,y,w,b,g,_,S,k,E,L,P;return __generator(this,function(n){switch(n.label){case 0:return i=document.head,s=document.body,u=(c=e).js,l=c.name,f=c.jsonld,d=c.removeFromDom,p=c.transpileJs,m=e.src,(v=p&&(u||m&&!m.match(le)))?[4,function(e){var t=e.url,n=e.js;return j(this,void 0,void 0,function(){var e,r,o,a,i,s,c;return __generator(this,function(u){switch(u.label){case 0:return e=self.fetch,r=self.Babel,o=(r||{transform:void 0}).transform,(i=o)?(s=n)?[3,3]:(c=t)?[4,e(t).then(function(e){return e&&e.text()}).catch(oe)]:[3,2]:[3,4];case 1:c=u.sent(),u.label=2;case 2:s=c,u.label=3;case 3:i=s,u.label=4;case 4:return[2,((a=i)&&a.trim()&&o&&o(a,re)||{code:\"\"}).code||n]}})})}({js:u,url:m})]:[3,2];case 1:v=n.sent(),n.label=2;case 2:return h=v||\"\",w=(y=e).css,b=y.name,g=e.href,_=e.json,S=e.hasOwnProperty(\"src\")||e.hasOwnProperty(\"href\"),k=(u||_||m)&&se||w&&ue||g&&ce,E=m&&'script[src=\"'+m+'\"]'||g&&'link[href=\"'+g+'\"]'||u&&l&&'script[data-name=\"'+l+'\"]'||f&&l&&'script[data-name=\"'+l+'\"][type=\"'+M.jsonld+'\"]'||w&&b&&'style[data-name=\"'+b+'\"]',L=i.querySelector(E)||s.querySelector(E),(P=E&&k&&document.createElement(k))instanceof HTMLScriptElement?!h&&m?P.src=m:(_||h||u)&&(P.innerHTML=_||h||u,P.dataset.name=l||m,f?(P.setAttribute(O.type,M.jsonld),P.dataset.jsonLd=P.dataset.name):_?P.setAttribute(O.type,M.json):h&&(P.dataset.transpiledJs=fe)):P instanceof HTMLLinkElement?(P.rel=ie,P.href=g):P instanceof HTMLStyleElement&&(P.innerHTML=w,P.dataset.name=b,ne({css:w,stylesheetName:b})),L?t(L):P&&(P.addEventListener(\"load\",r),P.addEventListener(\"error\",o),i.appendChild(P),!p&&S||r()),[2]}})})})};var pe=T.unsupportedFeature,me=T.customElementAreadyDefined;var he=D.dash;function ve(e){return new Promise(function(t,n){var r=self.requestIdleCallback;r?r(function(){return ye(e,t)}):ye(e,t)})}function ye(e,t){return j(this,void 0,void 0,function(){var n,r,o,a,i;return __generator(this,function(s){switch(s.label){case 0:return n=e.container,r=e.name,o=Array.from(n.content.querySelectorAll(q.style)).map(function(e,t){return{name:[r,W.style,t++].join(he),css:e.innerHTML}}),a=Array.from(n.content.querySelectorAll(q.stylesheet)).map(function(e,t){return{name:[r,W.stylesheet,t++].join(he),href:e.href}}),[4,Promise.all(o.map(de).concat(a.map(de)))];case 1:return i=s.sent(),t(i),[2]}})})}var we=T.noElementName,be=T.noTemplate,ge=T.noElementForSelector;var je=T.noElementName,_e=T.noElementSelector,Se=T.noTemplateUrl,ke=T.noTemplateForUrl,Ee=T.noElementForSelector;function Le(){return self.VamtigerBrowserMethod.environment===_.window}function Pe(){return self.VamtigerBrowserMethod.environment===_.worker}var Ce=JSON.stringify,Me=new TextEncoder;function Oe(e){var t=self.VamtigerBrowserMethod,n=t.worker,r=(t.support||{}).textEncoder,o=Ce(e),a=r&&Me.encode(o)||o;Le()&&n&&n.postMessage(a),Pe()&&z(a)}var xe=JSON.parse;function Te(e){var t=e.script.innerHTML,n=!1;try{xe(t),n=!0}catch(e){console.warn(e),n=!1}return n}var De=self.requestIdleCallback,Ae=D.dash,Be=E.vamtigerBrowserMethod;function Ne(e){return j(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return Le()?[4,function(e){return j(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return t=document.head,[4,qe(g({},e,{parent:t}))];case 1:return n.sent(),[2]}})})}(e)]:[3,2];case 1:t.sent(),t.label=2;case 2:return Pe()&&function(e){var t=e.selector;Oe({action:J.removeRedundantScripts,params:{selector:t}})}(e),[2]}})})}function qe(e){return new Promise(function(t,n){De?De(function(){return Ie(g({},e,{resolve:t,reject:n}))}):Ie(g({},e,{resolve:t,reject:n}))})}function Ie(e){var t=e.selector,n=e.parent,r=e.resolve,o=(e.reject,document.head),a=Array.from(n.querySelectorAll(t)),i=a.filter(function(e){var t=e.type;return e.src||!t||t===M.js}),s=a.filter(function(e){return e.type===M.json}).filter(function(e){return Te({script:e})}),c=a.filter(function(e){return e.type===M.jsonld}).filter(function(e){return Te({script:e})}),u=c.concat(s),l=(new Date).getTime(),f=s.length&&[Be,M.json,l].join(Ae),d=f&&'script[type=\"'+M.json+'\"][data-name=\"'+f+'\"]',p=c.length&&[Be,M.jsonld,l].join(Ae),m=p&&'script[type=\"'+M.jsonld+'\"][data-name=\"'+p+'\"]';i.length&&f&&i.forEach(function(e){return e.dataset.name=f||\"\"}),c.length&&p&&m&&c.forEach(function(e){return e.dataset.name=p||\"\"}),d&&n!==o&&(n.dataset.json=d),m&&n!==o&&(n.dataset.jsonLd=m),a.length&&(n.dataset.removedScripts=a.length.toString()),u.forEach(function(e){return o.appendChild(e)}),a.forEach(function(e){return n.removeChild(e)}),r&&r()}var We=q.script;function Je(e,t){return j(this,void 0,void 0,function(){var n;return __generator(this,function(r){switch(r.label){case 0:return e.url?[4,function(e){return j(this,void 0,void 0,function(){var t,n,r,o,a,i,s,c;return __generator(this,function(u){switch(u.label){case 0:return t=e.name,n=e.url,r=e.selector,o=e.loadStylesheets,document.head,(i=t&&r&&n)?[4,fetch(n).then(function(e){return e.text()})]:[3,2];case 1:i=u.sent(),u.label=2;case 2:if(s=(a=i)&&document.createElement(A.template),c=null,!t)throw new Error(je);if(!r)throw new Error(_e);if(!n)throw new Error(Se);if(!a)throw new Error(ke);return s?(s.innerHTML=a,c=s.content.querySelector(r),o&&c?[4,ve(g({},e,{container:s}))]:[3,4]):[3,5];case 3:u.sent(),u.label=4;case 4:u.label=5;case 5:if(!c)throw new Error(Ee);return c.setAttribute(\"dataset-name\",t),[2,c]}})})}(e)]:[3,2];case 1:return n=r.sent(),[3,4];case 2:return[4,function(e){return j(this,void 0,void 0,function(){var t,n,r,o,a,i;return __generator(this,function(s){switch(s.label){case 0:if(t=e.name,n=e.template,r=e.loadStylesheets,o=e.selector,a=t&&n&&document.createElement(A.template),i=null,!t)throw new Error(we);if(!n)throw new Error(be);return a?(a.innerHTML=n,i=o&&a.content.firstElementChild&&a.content.firstElementChild.querySelector(o)||a.content.firstElementChild,r&&i?[4,ve(g({},e,{container:a}))]:[3,2]):[3,3];case 1:s.sent(),s.label=2;case 2:s.label=3;case 3:if(!i)throw new Error(ge);return i.dataset.name=t,[2,i]}})})}(e)];case 3:n=r.sent(),r.label=4;case 4:return n?[4,qe({selector:We,parent:n})]:[3,6];case 5:r.sent(),r.label=6;case 6:return t(n),[2]}})})}var He=S.webComponent;function Re(e){var t,n=e.key,r={resolve:e.resolve,reject:e.reject},o=self.VamtigerBrowserMethod.messageQueue;!o.has(n)&&o.set(n,new Set),(t=o.get(n))&&t.add(r),setTimeout(function(){return function(e){var t=e.key,n=e.queueEntry,r=self.VamtigerBrowserMethod.messageQueue,o=r.get(t);o&&(o.has(n)&&o.delete(n),!o.size&&r.delete(t))}({key:n,queueEntry:r})},He)}var Ve=H.vamtigerBrowserSupport;function Qe(e){return j(this,void 0,void 0,function(){var t,n,r,o,a;return __generator(this,function(i){switch(i.label){case 0:return t=e.storeName,e.keyPath,n=e.mode,[4,new Promise(function(e,t){var n=indexedDB.open(Ve,1);n.addEventListener(\"error\",t),n.addEventListener(\"upgradeneeded\",function(){return e={db:n.result},t=e.db,void Object.keys(Q).forEach(function(e){return!t.objectStoreNames.contains(e)&&t.createObjectStore(R[e],{keyPath:Q[e]})});var e,t}),n.addEventListener(\"success\",function(){return e(n.result)})})];case 1:return r=i.sent(),o=r&&r.transaction&&r.transaction(t,n),a=o&&o.objectStore&&o.objectStore(t),[2,{db:r,transaction:o,store:a}]}})})}var Ue=V.readwrite,Fe=J.getWebComponentData;function Ge(e){var t=e.storeName,n=e.keyPath,r=e.data,o=e.messageId;return j(this,void 0,void 0,function(){var e,a;return __generator(this,function(i){switch(i.label){case 0:return[4,Qe({storeName:t,keyPath:n,mode:Ue})];case 1:return e=i.sent().store,(a=e.put(r)).addEventListener(\"error\",$e),a.addEventListener(\"success\",function(){return function(e){var t=e.messageId,n=e.key,r=t&&{action:Fe,params:{messageId:t,key:n}};r&&Oe(r)}({messageId:o,key:n})}),[2]}})})}function $e(e){throw console.error(e),e}var ze=V.readonly;function Ke(e){var t=e.storeName,n=e.keyPath,r=e.key;return j(this,void 0,Promise,function(){var e=this;return __generator(this,function(o){return[2,new Promise(function(o,a){return j(e,void 0,void 0,function(){var e,i;return __generator(this,function(s){switch(s.label){case 0:return[4,Qe({storeName:t,keyPath:n,mode:ze})];case 1:return e=s.sent().store,(i=e.get(r)).addEventListener(\"error\",a),i.addEventListener(\"success\",function(){return o(i.result)}),[2]}})})})]})})}function Xe(e){var t=e.key,n=e.data,r=self.VamtigerBrowserMethod.messageQueue.get(t)||new Set;Array.from(r).forEach(function(e){e.resolve(n),r.delete(e)})}var Ye=J.getWebComponentData,Ze=JSON.parse;function et(e){var t,n,r,o,a,i,s,c,u=self.VamtigerBrowserMethod,l=u.support,f=u.workerSupport,d=u.worker;if(Le()){if(d&&f&&f.indexedDbIsAccessible)return function(e){var t=e.key;return j(this,void 0,void 0,function(){return __generator(this,function(e){return Oe({action:Ye,params:{key:t}}),[2]})})}(e);d&&l&&l.indexedDbIsAccessible?function(e){var t=e.key;j(this,void 0,void 0,function(){var e,n;return __generator(this,function(r){switch(r.label){case 0:return[4,tt({key:t})];case 1:return e=r.sent(),(n=e&&{key:t,data:e})&&Xe(n),[2]}})})}(e):(t=e.key,n=document.head,r='script[data-json-ld=\"'+t+'\"][type=\"'+M.jsonld+'\"]',o='script[data-json-ld=\"'+t+'\"][type=\"'+M.json+'\"]',a=Array.from(n.querySelectorAll(r)),i=n.querySelector(o),s=a.length&&{jsonLd:a.map(function(e){var t=e.innerHTML;return t&&Ze(t)}),json:i&&i.innerHTML&&Ze(i.innerHTML)||{}},(c=s&&{key:t,data:s})&&Xe(c))}else if(Pe())return function(e){var t=e.key;return j(this,void 0,void 0,function(){var e;return __generator(this,function(n){switch(n.label){case 0:return[4,tt({key:t})];case 1:return e=n.sent(),[2,e&&e.jsonLd&&e.jsonLd.length&&{action:J.dequeue,params:{key:t,data:{jsonLd:e.jsonLd,json:e.json}}}]}})})}(e)}function tt(e){var t=e.key;return j(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,Ke({storeName:R.webComponent,keyPath:Q.webComponent,key:t})];case 1:return[2,e.sent()]}})})}var nt=R.webComponent,rt=Q.webComponent;function ot(e){return Le()?function(e){return j(this,void 0,void 0,function(){var t,n,r,o,a,i,s;return __generator(this,function(c){switch(c.label){case 0:return t=self.VamtigerBrowserMethod,n=t.support,r=t.workerSupport,o=e.url,a=st({url:o}),i=it(e),s=i&&{action:J.saveWebComponentData,params:i},r&&r.indexedDbIsAccessible?(s&&Oe(s),[3,4]):[3,1];case 1:return n&&n.indexedDbIsAccessible?[4,at(e)]:[3,4];case 2:return c.sent(),[4,et({key:o})];case 3:c.sent(),Ne({selector:a}),c.label=4;case 4:return[2]}})})}(e):Pe()?function(e){return j(this,void 0,void 0,function(){var t,n,r,o;return __generator(this,function(a){switch(a.label){case 0:return t=e.url,n=st({url:t}),[4,at(e)];case 1:return a.sent(),r={action:J.getWebComponentData,params:{key:t}},o={action:J.removeRedundantScripts,params:{selector:n}},Oe(r),Oe(o),[2]}})})}(e):void 0}function at(e){return j(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:return t=it(e),(n=t&&{storeName:nt,keyPath:rt,data:t})?[4,Ge(n)]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})}function it(e){var t=e.url,n=e.created,r=void 0===n?(new Date).getTime():n,o=e.json,a=e.jsonLd;return t&&a&&{url:t,created:r,jsonLd:a,json:o}}function st(e){return'script[type=\"application/json\"][data-json-ld=\"'+e.url+'\"]'}var ct=JSON.parse,ut=JSON.stringify,lt={jsonLd:[],json:{}};function ft(e){return j(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,Le()&&function(e){var t=e.url,n=e.loadJsonJsonLd;return j(this,void 0,void 0,function(){var e,r,o,a,i,s,c,u,l,f,d;return __generator(this,function(p){switch(p.label){case 0:return e=self.VamtigerBrowserMethod,r=e.worker,o=document.head,a='script[type=\"application/ld+json\"][data-json-ld=\"'+t+'\"]',[4,function(e){var t=e.url;return j(this,void 0,void 0,function(){var e,n,r,o,a,i,s,c,u,l,f,d,p;return __generator(this,function(m){switch(m.label){case 0:return m.trys.push([0,5,,6]),e=document.head,n=q.script+'[src=\"'+t+'\"]',r='script[type=\"application/ld+json\"][data-json-ld=\"'+t+'\"]',o='script[type=\"application/json\"][data-json-ld=\"'+t+'\"]',a=e.querySelector(n),(i=!a)?[4,de({src:t})]:[3,2];case 1:i=m.sent(),m.label=2;case 2:return(s=i)?[4,Promise.all([Array.from(e.querySelectorAll(r)).map(function(e){var t=e.innerHTML;return t}),e.querySelector(o)])]:[3,4];case 3:s=m.sent(),m.label=4;case 4:return u=(c=s||[void 0,void 0])[0],l=c[1],f=u&&u.map(function(e){return ct(e)}),d=l&&ct(l.innerHTML)||{},[2,{jsonLd:f,json:d}];case 5:return p=m.sent(),console.error(p),[2,lt];case 6:return[2]}})})}({url:t})];case 1:return i=p.sent(),s=i.jsonLd,c=i.json,(l=n&&c&&Array.isArray(c.jsonLd))?[4,Promise.all(c.jsonLd.map(dt))]:[3,3];case 2:l=p.sent(),p.label=3;case 3:return u=l,f=s&&{url:t,created:(new Date).getTime(),jsonLd:s,json:c},d=o.querySelector(a),u?(u.forEach(function(e){return e.forEach(function(e){var t=e.index,n=e.key,r=e.jsonLd;s&&Array.isArray(s)&&s[t]&&n&&!0===s[t][n]&&r&&(s[t][n]=r)})}),d&&s?(o.removeChild(d),[4,Promise.all(s.map(function(e){return de({name:t,json:ut(e),jsonld:!0})}))]):[3,5]):[3,5];case 4:p.sent(),p.label=5;case 5:return r&&f&&ot(f),[2]}})})}(e)];case 1:return[2,t.sent()]}})})}function dt(e){var t=e.index,n=e.fields;return j(this,void 0,void 0,function(){var e;return __generator(this,function(r){switch(r.label){case 0:return e=Object.keys(n),[4,Promise.all(e.map(function(e){return function(e){var t=e.urls,n=e.key;return j(this,void 0,void 0,function(){var e,r,o,a;return __generator(this,function(i){switch(i.label){case 0:return e=!1,r=Array.isArray(t)&&t.filter(function(e){return\"string\"==typeof e})||[],[4,Promise.all(r.map(function(t){return pt({jsonLd:t,loadJsonJsonLd:e})}))];case 1:return o=i.sent(),a={key:n,jsonLd:[]},o.forEach(function(e){var t=e.jsonLd;return t&&t.forEach(function(e){return e&&a.jsonLd.push(e)})}),[2,a]}})})}({key:e,urls:n[e]}).then(function(e){return g({index:t},e)})}))];case 1:return[2,r.sent()]}})})}function pt(e){var t=this,n=e.jsonLd,r=e.loadJsonJsonLd,o=void 0===r||r;return new Promise(function(e,r){return j(t,void 0,void 0,function(){var t;return __generator(this,function(a){switch(a.label){case 0:Re({key:n,resolve:e,reject:r}),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,ft({url:n,loadJsonJsonLd:o})];case 2:return a.sent(),[3,4];case 3:return t=a.sent(),console.error(t),[3,4];case 4:return et({key:n}),[2]}})})})}var mt=T.noJsonLdParameter;function ht(){return self.hasOwnProperty(\"WorkerGlobalScope\")&&_.worker||_.window}var vt=JSON.parse,yt={action:J.ignore,params:{}},wt=new TextDecoder;function bt(e){var t;try{t=function(e){var t=e.data,n=\"string\"==typeof t&&vt(t)||t instanceof Uint8Array&&vt(wt.decode(t));\"string\"==typeof n.params&&(n.params=vt(n.params));return n}(e)||yt}catch(e){t=yt}return t}var gt=R.support;function jt(e){return j(this,void 0,void 0,function(){return __generator(this,function(t){return Le()&&function(e){var t=self.VamtigerBrowserMethod.workerSupport,n=t&&t.indexedDbIsAccessible&&{action:J.saveSupport,params:e};n?Oe(n):_t(e)}(e),Pe()&&function(e){_t(e)}(e),[2]})})}function _t(e){var t=e.environment,n=t&&{storeName:gt,keyPath:Q.support,data:g({environment:t},e)};n&&Ge(n)}var St=Q.support,kt=R.support;function Et(){return j(this,void 0,void 0,function(){var e,t,n,r,o;return __generator(this,function(a){switch(a.label){case 0:return e=self.VamtigerBrowserMethod,t=self.localStorage,n=self.indexedDB,[4,Promise.all([function(){var e=this;return new Promise(function(t,n){return j(e,void 0,void 0,function(){var e,n,r;return __generator(this,function(o){switch(o.label){case 0:return e=!1,n=!1,r=_.worker,setTimeout(function(){return!n&&t(e)},S.indexDbIsAccessible),[4,Ke({storeName:kt,keyPath:St,key:r})];case 1:return o.sent(),n=!0,t(e=!0),[2]}})})})}()])];case 1:return r=a.sent()[0],o={localStorage:!!t,indexedDb:!!n,indexedDbIsAccessible:r,worker:!!self.hasOwnProperty(\"Worker\"),sharedWorker:self.hasOwnProperty(\"SharedWorker\"),textEncoder:self.hasOwnProperty(\"TextEncoder\"),textDecoder:self.hasOwnProperty(\"TextDecoder\")},e.support=o,Pe()&&function(){var e=self.VamtigerBrowserMethod;Oe({action:J.setWorkerSupport,params:e.support||{}})}(),[2]}})})}var Lt,Pt=\"Message Ignored\";var Ct=((Lt={})[J.ignore]=function(e){console.log(Pt),console.warn(e)},Lt[J.removeRedundantScripts]=Ne,Lt[J.setWorkerSupport]=function(e){return j(this,void 0,void 0,function(){var t,n,r;return __generator(this,function(o){return t=self.VamtigerBrowserMethod,n=t.support,r=t.environment,t.workerSupport=e,n&&jt(g({environment:r},n)),e&&jt(g({environment:_.worker},e)),[2]})})},Lt[J.saveWebComponentData]=ot,Lt[J.getWebComponentData]=et,Lt[J.dequeue]=Xe,Lt[J.loadWebComponentData]=ft,Lt[J.saveSupport]=jt,Lt);function Mt(e){return j(this,void 0,void 0,function(){var t,n,r,o;return __generator(this,function(a){switch(a.label){case 0:return t=bt(e)||{action:J.ignore,params:{}},n=t.action,r=t.params,[4,(0,Ct[n])(r)];case 1:return(o=a.sent())&&Oe(o),[2]}})})}var Ot=C.vamtigerBrowserMethod;function xt(){return j(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return n=window.location,(e=P.localHost===n.hostname)?[4,fetch(Ot).then(function(e){return e.ok}).catch(function(e){return\"\"})]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return[2,e&&Ot||\"\"]}var n})})}var Tt,Dt=JSON.stringify,At={type:M.js};function Bt(e){Object.keys(e).forEach(function(t){return console.error(\"string\"==typeof e[t]||Dt(e[t]))})}function Nt(){Le()&&function(){j(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return e=self.VamtigerBrowserMethod,t=e,[4,function(){return j(this,void 0,void 0,function(){var e,t,n,r,o,a,i,s;return __generator(this,function(c){switch(c.label){case 0:return[4,xt()];case 1:return e=c.sent(),t=document.head,n=URL.createObjectURL,r=!Tt&&$.worker,o=(r&&Array.from(t.querySelectorAll(r))||[]).map(function(e){return e.innerHTML}).filter(function(e){return e}),a=o&&o.length&&new Blob(o,At),i=a&&n&&n(a),(s=i&&new Worker(e||i))&&(s.addEventListener(\"message\",Mt),s.addEventListener(\"error\",Bt)),[2,Tt=Tt||s]}})})}()];case 1:return t.worker=n.sent(),[2]}})})}()}function qt(){Pe()&&(addEventListener(\"message\",Mt),Ne({selector:$.redundantScripts}))}var It,Wt,Jt=self.document,Ht=D.nothing;Jt&&(It=Jt.createElement(\"template\"),Wt=[\"<figcaption data-linked-data-caption></figcaption> <span data-linked-data-caption-element></span> <a></a>\"].join(Ht),It.innerHTML=Wt);var Rt=function(e){var t=e.selector,n=e.attributes,r=void 0===n?{}:n,o=e.properties,a=void 0===o?{}:o,i=Object.keys(r),s=It.content.querySelector(t),c=s&&s.cloneNode(!0);return c&&(Object.assign(c,a),i.forEach(function(e){return r[e]&&c.setAttribute(e,r[e]||\"\")})),c},Vt=D.nothing,Qt=D.slash;var Ut=ht(),Ft={loadScript:de,loadScripts:function(e){return Promise.all(e.map(de))},loadScriptsSequentially:function(e){return new Promise(function(t,n){var r=new Set,o=Promise.resolve();return e.forEach(function(e){o=o.then(function(){return j(void 0,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(de))];case 1:return[2,t.sent()]}})})}).then(function(e){return e.forEach(function(e){return r.add(e)})})}),o=o.then(function(){return t(Array.from(r))})})},loadShadowStylesheet:function(e){var t=e.css,n=e.element,r=n.shadowRoot,o=(n.localName,r&&r.querySelector(q.lastStylesheet)),a=r&&document.createElement(\"style\");a&&r&&(a.innerHTML=t,o&&o.nextElementSibling?r.insertBefore(a,o.nextElementSibling):r.appendChild(a))},defineCustomElement:function e(t){var n=t.name,r=t.constructor,o=t.ignore,a=self.customElements,i=a&&a.define,s=i&&a.get&&a.get(n);if(i&&!s)a.define(n,r);else{if(s)throw new Error(me+\": \"+n);if(o)throw new Error(pe+\": Custom Elements - \"+n);e({name:n,constructor:r,ignore:!0})}},pause:function(e){var t=e.milliseconds,n=void 0===t?1e3:t;return new Promise(function(e,t){return setTimeout(e,n)})},getElement:function(e){return j(this,void 0,void 0,function(){return __generator(this,function(t){return[2,new Promise(function(t,n){var r=self.requestIdleCallback;r?r(function(){return Je(e,t)}):Je(e,t)})]})})},getData:function(e){var t=e.jsonLd;return new Promise(function(e,n){var r=self.requestIdleCallback;t?r?r(function(){return pt({jsonLd:t}).then(e)}):pt({jsonLd:t}).then(e):n(new Error(mt))})},getEnvironment:ht,environment:Ut,messageQueue:new Map,getMicrodataCaption:function(e){var t,n,r=e.imageData,o=e.fieldKey,a=r[o],i=Array.isArray(a)&&a||[a]||[],s=a&&Rt({selector:q.linkedDataCaption,attributes:{itemprop:o}});return i.forEach(function(e){e&&(t=e[\"@context\"]&&e[\"@type\"]&&[e[\"@context\"],e[\"@type\"]].join(Qt),(n=Rt({selector:q.linkedDataCaption}))&&(n.setAttribute(\"itemscope\",Vt),t&&n.setAttribute(\"itemtype\",t),[e.name&&Rt({selector:q.linkedDataCaptionElement,properties:{innerHTML:e.name},attributes:{itemprop:\"name\"}}),e.description&&Rt({selector:q.linkedDataCaptionElement,properties:{innerHTML:e.description},attributes:{itemprop:\"description\"}}),e.url&&Rt({selector:q.a,properties:{innerHTML:e.name||e.url},attributes:{itemprop:\"url\",href:e.url}})].forEach(function(e){return e&&n&&n.appendChild(e)}),s&&s.appendChild(n)))}),s}};!function(){try{var e=self.VamtigerBrowserMethod;e||(self.VamtigerBrowserMethod=Ft,Et(),Nt(),qt())}catch(e){!function(e){throw console.error(e),e}(e)}}()}();\n//# sourceMappingURL=vamtiger-browser-method.js.map\n"});              document.head.appendChild(script);         }     })()