(function(){         const stringify = JSON.stringify;         const selector = 'script[type="application/json"][data-name="vamtiger-browser-method.js.json"]';         const existingScript = document.querySelector(selector);         const script = !existingScript && document.createElement('script');          if (script) {             script.type = 'application/json';             script.dataset.name = 'vamtiger-browser-method.js.json';             script.innerHTML = stringify({"name":"vamtiger-browser-method.js.json","text":"!function(){\"use strict\";const e=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e};function t(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,s)}c((r=r.apply(e,t)).next())})}var n,r,o,a,i,s,c,u,l,d,f,p,m,h,v,y,w,b,g,j,_,k,S,E,L;!function(e){e.window=\"window\",e.worker=\"worker\"}(n||(n={})),function(e){e.vamtigerBrowserMethodReady=\"vamtigerBrowserMethodReady\"}(r||(r={})),function(e){e[e.webComponent=6e4]=\"webComponent\",e[e.indexDbIsAccessible=100]=\"indexDbIsAccessible\"}(o||(o={})),function(e){e.webComponent=\"webComponent\"}(a||(a={})),function(e){e.vamtigerBrowserMethod=\"vamtiger-browser-method\",e.db=\"vamtiger-browser-method\",e.messageIdWindow=\"vamtiger-browser-method-window\",e.messageIdWorker=\"vamtiger-browser-method-worker\"}(i||(i={})),function(e){e.nowhere=\"\",e.everyWhere=\"*\"}(s||(s={})),function(e){e.localHost=\"localhost\"}(c||(c={})),function(e){e.vamtigerBrowserMethod=\"vamtiger-browser-method.js\"}(u||(u={})),function(e){e.js=\"text/javascript\",e.babel=\"text/babel\",e.json=\"application/json\",e.jsonld=\"application/ld+json\"}(l||(l={})),function(e){e.type=\"type\"}(d||(d={})),function(e){e.vamtigerElementQuery=\"vamtigerLoadElementQueryCss\",e.elementQueryCssLoaded=\"elementQueryCssLoaded\"}(f||(f={})),function(e){e.failedToLoadScript=\"Failed to load script\",e.windowPropertyNotSet=\"Window property not set\",e.unsupportedFeature=\"Unsupported feature\",e.customElementAreadyDefined=\"Custom element already defined\",e.noElementName=\"No Element Name\",e.noTemplateUrl=\"No Template URL\",e.noElementSelector=\"No Template Selector\",e.noTemplateForUrl=\"No Template for URL\",e.noTemplate=\"No Template\",e.noElementForSelector=\"No Element for Selector\",e.noJsonLdParameter='No \"jsonLd\" property set'}(p||(p={})),function(e){e.nothing=\"\",e.slash=\"/\",e.dash=\"-\",e.pipe=\"|\",e.comma=\",\",e.backTick=\"`\",e.doubleQuote='\"',e.commaSpace=\", \",e.space=\" \",e.period=\".\",e.newline=\"\\n\"}(m||(m={})),function(e){e.div=\"div\",e.template=\"template\"}(h||(h={})),function(e){e.stylesheet=\"stylesheet\"}(v||(v={})),function(e){e.script=\"script\",e.link=\"link\",e.style=\"style\"}(y||(y={})),function(e){e.lastStylesheet=\"style:last-of-type\",e.lastMetaElement=\"head > meta:last-of-type\",e.webcomponentsjs='script[src*=\"@webcomponents/webcomponentsjs\"]',e.style=\"style\",e.stylesheet=' link[rel=\"stylesheet\"]',e.vamtigerBrowserMethodJsonJs='[src$=\"vamtiger-browser-method.js.json.js\"]',e.worker='[src$=\"js.json.js\"][data-worker]',e.workderDependency=\"script[data-worker-dependency]\",e.vamtigerBrowserMethodJson='[data-name$=\"vamtiger-browser-method.js.json\"]',e.vamtigerBrowserMethod='[data-name$=\"vamtiger-browser-method.js\"]',e.script=\"script\",e.jsonScript='script[type=\"application/json\"]',e.jsonLdScript='script[type=\"application/ld+json\"]',e.a=\"a\",e.linkedDataCaption=\"[data-linked-data-caption]\",e.linkedDataCaptionElement=\"[data-linked-data-caption-element]\",e.jsonLdViewer=\"vamtiger-json-ld-viewer\"}(w||(w={})),function(e){e.loadElementQueryCss=\"vamtiger-load-element-query-css\"}(b||(b={})),function(e){e.style=\"style\",e.stylesheet=\"stylesheet\"}(g||(g={})),function(e){e.ignore=\"ignore\",e.removeRedundantScripts=\"removeRedundantScripts\",e.setWorkerSupport=\"setWorkerSupport\",e.saveWebComponentData=\"saveWebComponentData\",e.getWebComponentData=\"getWebComponentData\",e.dequeue=\"dequeue\",e.loadWebComponentData=\"loadWebComponentData\",e.saveSupport=\"saveSupport\"}(j||(j={})),function(e){e.vamtigerBrowserSupport=\"vamtiger-browser-support\"}(_||(_={})),function(e){e.support=\"support\",e.webComponent=\"web-component\"}(k||(k={})),function(e){e.readonly=\"readonly\",e.readwrite=\"readwrite\",e.versionchange=\"versionchange\"}(S||(S={})),function(e){e.webComponent=\"url\",e.support=\"environment\"}(E||(E={})),function(e){e.lodash=\"https://vamtiger-project.github.io/vamtiger-browser-method/build/lodash.min.js.json.js\",e.jsonLdViewer=\"https://vamtiger-project.github.io/vamtiger-json-ld-viewer/build/vamtiger-json-ld-viewer.js.json.js\"}(L||(L={}));var P,M,C,x,O,T,D,A,B,N,q,I,J,W,H,R,V,Q,U,F=/:{1,2}host/gm,$=(new RegExp(m.dash,\"g\"),/^http(s)?/i),G=/\\.js\\.json\\.js$/,z=/\\.json\\.js$/,K=/\\.js$/,X=/^@/,Y=/^email$/i,Z={redundantScripts:[w.vamtigerBrowserMethodJsonJs,w.vamtigerBrowserMethodJson,w.vamtigerBrowserMethod].join(m.comma)},ee=postMessage;!function(e){var t=\"object\"==typeof global?global:\"object\"==typeof self?self:\"object\"==typeof this?this:{};function n(e,n){return e!==t&&(\"function\"==typeof Object.create?Object.defineProperty(e,\"__esModule\",{value:!0}):e.__esModule=!0),function(t,r){return e[t]=n?n(t,r):r}}\"function\"==typeof define&&define.amd?define(\"tslib\",[\"exports\"],function(r){e(n(t,n(r)))}):\"object\"==typeof module&&\"object\"==typeof module.exports?e(n(t,n(module.exports))):e(n(t))}(function(e){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};P=function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)},M=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},C=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&\"function\"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},x=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if(\"object\"==typeof Reflect&&\"function\"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},O=function(e,t){return function(n,r){t(n,r,e)}},T=function(e,t){if(\"object\"==typeof Reflect&&\"function\"==typeof Reflect.metadata)return Reflect.metadata(e,t)},D=function(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(i,s)}c((r=r.apply(e,t||[])).next())})},A=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},\"function\"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError(\"Generator is already executing.\");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},B=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},N=function(e){var t=\"function\"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},q=function(e,t){var n=\"function\"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i},I=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(q(arguments[t]));return e},J=function(e){return this instanceof J?(this.v=e,this):new J(e)},W=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError(\"Symbol.asyncIterator is not defined.\");var r,o=n.apply(e,t||[]),a=[];return r={},i(\"next\"),i(\"throw\"),i(\"return\"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise(function(n,r){a.push([e,t,n,r])>1||s(e,t)})})}function s(e,t){try{(n=o[e](t)).value instanceof J?Promise.resolve(n.value.v).then(c,u):l(a[0][2],n)}catch(e){l(a[0][3],e)}var n}function c(e){s(\"next\",e)}function u(e){s(\"throw\",e)}function l(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}},H=function(e){var t,n;return t={},r(\"next\"),r(\"throw\",function(e){throw e}),r(\"return\"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:J(e[r](t)),done:\"return\"===r}:o?o(t):t}:o}},R=function(e){if(!Symbol.asyncIterator)throw new TypeError(\"Symbol.asyncIterator is not defined.\");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=\"function\"==typeof N?N(e):e[Symbol.iterator](),t={},r(\"next\"),r(\"throw\"),r(\"return\"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){(function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)})(r,o,(t=e[n](t)).done,t.value)})}}},V=function(e,t){return Object.defineProperty?Object.defineProperty(e,\"raw\",{value:t}):e.raw=t,e},Q=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},U=function(e){return e&&e.__esModule?e:{default:e}},e(\"__extends\",P),e(\"__assign\",M),e(\"__rest\",C),e(\"__decorate\",x),e(\"__param\",O),e(\"__metadata\",T),e(\"__awaiter\",D),e(\"__generator\",A),e(\"__exportStar\",B),e(\"__values\",N),e(\"__read\",q),e(\"__spread\",I),e(\"__await\",J),e(\"__asyncGenerator\",W),e(\"__asyncDelegator\",H),e(\"__asyncValues\",R),e(\"__makeTemplateObject\",V),e(\"__importStar\",Q),e(\"__importDefault\",U)});var te=Object.freeze({});Object.keys(te).forEach(function(e){self[e]||(self[e]=te[e])});var ne=m.nothing;var re=self.requestIdleCallback,oe=F,ae=m.nothing;function ie(e){var n=e.css,r=e.stylesheetName,o=void 0===r?ae:r,a=e.hostName,i=void 0===a?ae:a;return t(this,void 0,void 0,function(){var e,t,r,a,s,c,u;return __generator(this,function(l){return e=self._,t=e.camelCase,r=function(e){var t=e.selector,n=void 0===t?ne:t,r=e.properties,o=void 0===r?{}:r,a=e.dataset,i=void 0===a?{}:a,s=e.attributes,c=void 0===s?{}:s,u=o.id,l=document.head,d=l.querySelector(w.lastMetaElement),f=Object.keys(c),p=u&&(window[u]||n&&l.querySelector(n)),m=!p&&document.createElement(\"meta\"),h=p||m;return m&&(Object.assign(m,o),Object.assign(m.dataset,i),d&&d.nextElementSibling?l.insertBefore(m,d.nextElementSibling):l.appendChild(m)),f.forEach(function(e){return!h.hasAttribute(e)&&h.setAttribute(void 0,c[e])}),h}({properties:{id:b.loadElementQueryCss}}),a=t(o),s=r.dataset,c=!s.hasOwnProperty(i)&&i&&n.replace(oe,i)||n,u=self.EQCSS,c&&u&&(u.register(u.parse(c)),a?s[a]=ae:i&&(s[i]=ae)),[2,!0]})})}m.slash;var se={presets:[\"es2015\"]},ce=new Set([\"number\",\"string\",typeof!0]),ue=function(){return[!self._&&L.lodash||\"\"].filter(function(e){return e})};m.nothing;function le(e){return console.warn(e.message),console.warn(e.stack),\"\"}var de=JSON.parse,fe=p.failedToLoadScript,pe=v.stylesheet,me=y.script,he=y.link,ve=y.style,ye=$,we=G,be=z,ge=K,je=m.nothing,_e=m.slash;function ke(e){return Se(e)}function Se(e){var n=this;return new Promise(function(r,o){return t(n,void 0,void 0,function(){function n(){return t(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return x?(i(),h&&s.removeChild(x),w&&w.match(we)?[4,function(e){var n=e.src,r=e.workerDependency;return t(this,void 0,void 0,function(){var e,t,o,a,i,s,c,u;return __generator(this,function(d){switch(d.label){case 0:return e=document.head,t=n.replace(ge,je).split(_e),o=t[t.length-1],a=n&&o&&'script[type=\"'+l.json+'\"][data-name=\"'+o+'\"]',i=a&&e.querySelector(a),s=i&&i.innerHTML&&de(i.innerHTML),c=s&&s.text,u=n.replace(be,je),u&&c?[4,Se({name:u,js:c,workerDependency:r}).catch(Ee)]:[3,2];case 1:d.sent(),d.label=2;case 2:return[2]}})})}({src:w,workerDependency:y})]:[3,2]):[3,3];case 1:e.sent(),e.label=2;case 2:r(x),e.label=3;case 3:return[2]}})})}function a(e){i(),console.error(e),o(new Error(\"\"+fe))}function i(){x&&(x.removeEventListener(\"load\",n),x.removeEventListener(\"error\",a))}var s,c,u,f,p,m,h,v,y,w,b,g,j,_,k,S,E,L,P,M,C,x;return __generator(this,function(o){switch(o.label){case 0:return s=document.head,c=document.body,f=(u=e).js,p=u.name,m=u.jsonld,h=u.removeFromDom,v=u.workerDependency,y=void 0!==v&&v,w=e.src,(g=f||w&&!w.match(ye))?[4,function(e){var n=e.url,r=e.js;return t(this,void 0,void 0,function(){var e,t,o,a,i,s,c;return __generator(this,function(u){switch(u.label){case 0:return e=self.fetch,t=self.Babel,o=(t||{transform:void 0}).transform,(i=o)?(s=r)?[3,3]:(c=n)?[4,e(n).then(function(e){return e&&e.text()}).catch(le)]:[3,2]:[3,4];case 1:c=u.sent(),u.label=2;case 2:s=c,u.label=3;case 3:i=s,u.label=4;case 4:return[2,((a=i)&&a.trim()&&o&&o(a,se)||{code:\"\"}).code||r]}})})}({js:f,url:w})]:[3,2];case 1:g=o.sent(),o.label=2;case 2:return b=g||\"\",_=(j=e).css,k=j.name,S=e.href,E=e.json,L=e.hasOwnProperty(\"src\")||e.hasOwnProperty(\"href\"),P=(f||E||w)&&me||_&&ve||S&&he,M=w&&'script[src=\"'+w+'\"]'||S&&'link[href=\"'+S+'\"]'||f&&p&&'script[data-name=\"'+p+'\"]'||m&&p&&'script[data-name=\"'+p+'\"][type=\"'+l.jsonld+'\"]'||_&&k&&'style[data-name=\"'+k+'\"]',C=s.querySelector(M)||c.querySelector(M),(x=M&&P&&document.createElement(P))instanceof HTMLScriptElement?(!b&&w?x.src=w:(E||b||f)&&(x.innerHTML=E||b||f,x.dataset.name=p||w,m?(x.setAttribute(d.type,l.jsonld),x.dataset.jsonLd=x.dataset.name):E?x.setAttribute(d.type,l.json):b&&(x.dataset.transpiledJs=je)),[3,6]):[3,3];case 3:return x instanceof HTMLLinkElement?(x.rel=pe,x.href=S,[3,6]):[3,4];case 4:return x instanceof HTMLStyleElement?(x.innerHTML=_,x.dataset.name=k,[4,function(e){var n=this;return new Promise(function(r,o){return t(n,void 0,void 0,function(){return __generator(this,function(t){return re?re(function(){return ie(e).then(r)}):setTimeout(function(){return ie(e).then(r)},0),[2]})})})}({css:_,stylesheetName:k})]):[3,6];case 5:o.sent(),o.label=6;case 6:return C?r(C):x&&(x.addEventListener(\"load\",n),x.addEventListener(\"error\",a),s.appendChild(x),y&&(x.dataset.workerDependency=je),!b&&L||n()),[2]}})})})}function Ee(e){console.warn(e.name),console.warn(e.message),console.warn(e.stack)}var Le=p.unsupportedFeature,Pe=p.customElementAreadyDefined;var Me=m.dash;function Ce(e){return new Promise(function(t,n){var r=self.requestIdleCallback;r?r(function(){return xe(e,t)}):setTimeout(function(){return xe(e,t)},0)})}function xe(e,n){return t(this,void 0,void 0,function(){var t,r,o,a,i;return __generator(this,function(s){switch(s.label){case 0:return t=e.container,r=e.name,o=Array.from(t.content.querySelectorAll(w.style)).map(function(e,t){return{name:[r,g.style,t++].join(Me),css:e.innerHTML}}),a=Array.from(t.content.querySelectorAll(w.stylesheet)).map(function(e,t){return{name:[r,g.stylesheet,t++].join(Me),href:e.href}}),[4,Promise.all(o.map(ke).concat(a.map(ke)))];case 1:return i=s.sent(),n(i),[2]}})})}var Oe=p.noElementName,Te=p.noTemplate,De=p.noElementForSelector;var Ae=p.noElementName,Be=p.noElementSelector,Ne=p.noTemplateUrl,qe=p.noTemplateForUrl,Ie=p.noElementForSelector;function Je(){return self.VamtigerBrowserMethod.environment===n.window}function We(){return self.VamtigerBrowserMethod.environment===n.worker}var He=JSON.stringify,Re=new TextEncoder;function Ve(e){var t=self.VamtigerBrowserMethod,n=t.worker,r=(t.support||{}).textEncoder,o=He(e),a=r&&Re.encode(o)||o;Je()&&n&&n.postMessage(a),We()&&ee(a)}var Qe=JSON.parse;function Ue(e){var t=e.script.innerHTML,n=!1;try{Qe(t),n=!0}catch(e){console.warn(e),n=!1}return n}var Fe=self.requestIdleCallback,$e=m.dash,Ge=i.vamtigerBrowserMethod;function ze(n){return t(this,void 0,void 0,function(){return __generator(this,function(r){switch(r.label){case 0:return Je()?[4,function(n){return t(this,void 0,void 0,function(){var t;return __generator(this,function(r){switch(r.label){case 0:return t=document.head,[4,Ke(e({},n,{parent:t}))];case 1:return r.sent(),[2]}})})}(n)]:[3,2];case 1:r.sent(),r.label=2;case 2:return We()&&function(e){var t=e.selector;Ve({action:j.removeRedundantScripts,params:{selector:t}})}(n),[2]}})})}function Ke(t){return new Promise(function(n,r){Fe?Fe(function(){return Xe(e({},t,{resolve:n,reject:r}))}):setTimeout(function(){return Xe(e({},t,{resolve:n,reject:r}))},0)})}function Xe(e){var t=e.selector,n=e.parent,r=e.resolve,o=(e.reject,document.head),a=Array.from(n.querySelectorAll(t)),i=a.filter(function(e){var t=e.type;return e.src||!t||t===l.js}),s=a.filter(function(e){return e.type===l.json}).filter(function(e){return Ue({script:e})}),c=a.filter(function(e){return e.type===l.jsonld}).filter(function(e){return Ue({script:e})}),u=c.concat(s),d=(new Date).getTime(),f=s.length&&[Ge,l.json,d].join($e),p=f&&'script[type=\"'+l.json+'\"][data-name=\"'+f+'\"]',m=c.length&&[Ge,l.jsonld,d].join($e),h=m&&'script[type=\"'+l.jsonld+'\"][data-name=\"'+m+'\"]';i.length&&f&&i.forEach(function(e){return e.dataset.name=f||\"\"}),c.length&&m&&h&&c.forEach(function(e){return e.dataset.name=m||\"\"}),p&&n!==o&&(n.dataset.json=p),h&&n!==o&&(n.dataset.jsonLd=h),a.length&&(n.dataset.removedScripts=a.length.toString()),u.forEach(function(e){return o.appendChild(e)}),a.forEach(function(e){return n.removeChild(e)}),r&&r()}var Ye=w.script;function Ze(n,r){return t(this,void 0,void 0,function(){var o;return __generator(this,function(a){switch(a.label){case 0:return n.url?[4,function(n){return t(this,void 0,void 0,function(){var t,r,o,a,i,s,c,u;return __generator(this,function(l){switch(l.label){case 0:return t=n.name,r=n.url,o=n.selector,a=n.loadStylesheets,document.head,(s=t&&o&&r)?[4,fetch(r).then(function(e){return e.text()})]:[3,2];case 1:s=l.sent(),l.label=2;case 2:if(c=(i=s)&&document.createElement(h.template),u=null,!t)throw new Error(Ae);if(!o)throw new Error(Be);if(!r)throw new Error(Ne);if(!i)throw new Error(qe);return c?(c.innerHTML=i,u=c.content.querySelector(o),a&&u?[4,Ce(e({},n,{container:c}))]:[3,4]):[3,5];case 3:l.sent(),l.label=4;case 4:l.label=5;case 5:if(!u)throw new Error(Ie);return u.setAttribute(\"dataset-name\",t),[2,u]}})})}(n)]:[3,2];case 1:return o=a.sent(),[3,4];case 2:return[4,function(n){return t(this,void 0,void 0,function(){var t,r,o,a,i,s;return __generator(this,function(c){switch(c.label){case 0:if(t=n.name,r=n.template,o=n.loadStylesheets,a=n.selector,i=t&&r&&document.createElement(h.template),s=null,!t)throw new Error(Oe);if(!r)throw new Error(Te);return i?(i.innerHTML=r,s=a&&i.content.firstElementChild&&i.content.firstElementChild.querySelector(a)||i.content.firstElementChild,o&&s?[4,Ce(e({},n,{container:i}))]:[3,2]):[3,3];case 1:c.sent(),c.label=2;case 2:c.label=3;case 3:if(!s)throw new Error(De);return s.dataset.name=t,[2,s]}})})}(n)];case 3:o=a.sent(),a.label=4;case 4:return o?[4,Ke({selector:Ye,parent:o})]:[3,6];case 5:a.sent(),a.label=6;case 6:return r(o),[2]}})})}var et=o.webComponent;function tt(e){var t,n=e.key,r={resolve:e.resolve,reject:e.reject},o=self.VamtigerBrowserMethod.messageQueue;!o.has(n)&&o.set(n,new Set),(t=o.get(n))&&t.add(r),setTimeout(function(){return function(e){var t=e.key,n=e.queueEntry,r=self.VamtigerBrowserMethod.messageQueue,o=r.get(t);o&&(o.has(n)&&o.delete(n),!o.size&&r.delete(t))}({key:n,queueEntry:r})},et)}var nt=_.vamtigerBrowserSupport;function rt(e){return t(this,void 0,void 0,function(){var t,n,r,o,a;return __generator(this,function(i){switch(i.label){case 0:return t=e.storeName,e.keyPath,n=e.mode,[4,new Promise(function(e,t){var n=indexedDB.open(nt,1);n.addEventListener(\"error\",t),n.addEventListener(\"upgradeneeded\",function(){return e={db:n.result},t=e.db,void Object.keys(E).forEach(function(e){return!t.objectStoreNames.contains(e)&&t.createObjectStore(k[e],{keyPath:E[e]})});var e,t}),n.addEventListener(\"success\",function(){return e(n.result)})})];case 1:return r=i.sent(),o=r&&r.transaction&&r.transaction(t,n),a=o&&o.objectStore&&o.objectStore(t),[2,{db:r,transaction:o,store:a}]}})})}var ot=S.readwrite,at=j.getWebComponentData;function it(e){var n=e.storeName,r=e.keyPath,o=e.data,a=e.messageId;return t(this,void 0,void 0,function(){var e,t;return __generator(this,function(i){switch(i.label){case 0:return[4,rt({storeName:n,keyPath:r,mode:ot})];case 1:return e=i.sent().store,(t=e.put(o)).addEventListener(\"error\",st),t.addEventListener(\"success\",function(){return function(e){var t=e.messageId,n=e.key,r=t&&{action:at,params:{messageId:t,key:n}};r&&Ve(r)}({messageId:a,key:r})}),[2]}})})}function st(e){throw console.error(e),e}var ct=S.readonly;function ut(e){var n=e.storeName,r=e.keyPath,o=e.key;return t(this,void 0,Promise,function(){var e=this;return __generator(this,function(a){return[2,new Promise(function(a,i){return t(e,void 0,void 0,function(){var e,t;return __generator(this,function(s){switch(s.label){case 0:return[4,rt({storeName:n,keyPath:r,mode:ct})];case 1:return e=s.sent().store,(t=e.get(o)).addEventListener(\"error\",i),t.addEventListener(\"success\",function(){return a(t.result)}),[2]}})})})]})})}function lt(e){var t=e.key,n=e.data,r=self.VamtigerBrowserMethod.messageQueue.get(t)||new Set;Array.from(r).forEach(function(e){e.resolve(n),r.delete(e)})}var dt=j.getWebComponentData,ft=JSON.parse;function pt(e){var n,r,o,a,i,s,c,u,d=self.VamtigerBrowserMethod,f=d.support,p=d.workerSupport,m=d.worker;if(Je()){if(m&&p&&p.indexedDbIsAccessible)return function(e){var n=e.key;return t(this,void 0,void 0,function(){return __generator(this,function(e){return Ve({action:dt,params:{key:n}}),[2]})})}(e);m&&f&&f.indexedDbIsAccessible?function(e){var n=e.key;t(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:return[4,mt({key:n})];case 1:return e=r.sent(),(t=e&&{key:n,data:e})&&lt(t),[2]}})})}(e):(n=e.key,r=document.head,o='script[data-json-ld=\"'+n+'\"][type=\"'+l.jsonld+'\"]',a='script[data-json-ld=\"'+n+'\"][type=\"'+l.json+'\"]',i=Array.from(r.querySelectorAll(o)),s=r.querySelector(a),c=i.length&&{jsonLd:i.map(function(e){var t=e.innerHTML;return t&&ft(t)}),json:s&&s.innerHTML&&ft(s.innerHTML)||{}},(u=c&&{key:n,data:c})&&lt(u))}else if(We())return function(e){var n=e.key;return t(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,mt({key:n})];case 1:return e=t.sent(),[2,e&&e.jsonLd&&e.jsonLd.length&&{action:j.dequeue,params:{key:n,data:{jsonLd:e.jsonLd,json:e.json}}}]}})})}(e)}function mt(e){var n=e.key;return t(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,ut({storeName:k.webComponent,keyPath:E.webComponent,key:n})];case 1:return[2,e.sent()]}})})}var ht=k.webComponent,vt=E.webComponent;function yt(e){return Je()?function(e){return t(this,void 0,void 0,function(){var t,n,r,o,a,i,s;return __generator(this,function(c){switch(c.label){case 0:return t=self.VamtigerBrowserMethod,n=t.support,r=t.workerSupport,o=e.url,a=gt({url:o}),i=bt(e),s=i&&{action:j.saveWebComponentData,params:i},r&&r.indexedDbIsAccessible?(s&&Ve(s),[3,4]):[3,1];case 1:return n&&n.indexedDbIsAccessible?[4,wt(e)]:[3,4];case 2:return c.sent(),[4,pt({key:o})];case 3:c.sent(),ze({selector:a}),c.label=4;case 4:return[2]}})})}(e):We()?function(e){return t(this,void 0,void 0,function(){var t,n,r,o;return __generator(this,function(a){switch(a.label){case 0:return t=e.url,n=gt({url:t}),[4,wt(e)];case 1:return a.sent(),r={action:j.getWebComponentData,params:{key:t}},o={action:j.removeRedundantScripts,params:{selector:n}},Ve(r),Ve(o),[2]}})})}(e):void 0}function wt(e){return t(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:return t=bt(e),(n=t&&{storeName:ht,keyPath:vt,data:t})?[4,it(n)]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})}function bt(e){var t=e.url,n=e.created,r=void 0===n?(new Date).getTime():n,o=e.json,a=e.jsonLd;return t&&a&&{url:t,created:r,jsonLd:a,json:o}}function gt(e){return'script[type=\"application/json\"][data-json-ld=\"'+e.url+'\"]'}var jt=JSON.parse,_t=JSON.stringify,kt={jsonLd:[],json:{}};function St(e){return t(this,void 0,void 0,function(){return __generator(this,function(n){switch(n.label){case 0:return[4,Je()&&function(e){var n=e.url,r=e.loadJsonJsonLd;return t(this,void 0,void 0,function(){var e,o,a,i,s,c,u,l,d,f,p;return __generator(this,function(m){switch(m.label){case 0:return e=self.VamtigerBrowserMethod,o=e.worker,a=document.head,i='script[type=\"application/ld+json\"][data-json-ld=\"'+n+'\"]',[4,function(e){var n=e.url;return t(this,void 0,void 0,function(){var e,t,r,o,a,i,s,c,u,l,d,f,p;return __generator(this,function(m){switch(m.label){case 0:return m.trys.push([0,5,,6]),e=document.head,t=w.script+'[src=\"'+n+'\"]',r='script[type=\"application/ld+json\"][data-json-ld=\"'+n+'\"]',o='script[type=\"application/json\"][data-json-ld=\"'+n+'\"]',a=e.querySelector(t),(i=!a)?[4,ke({src:n})]:[3,2];case 1:i=m.sent(),m.label=2;case 2:return(s=i)?[4,Promise.all([Array.from(e.querySelectorAll(r)).map(function(e){var t=e.innerHTML;return t}),e.querySelector(o)])]:[3,4];case 3:s=m.sent(),m.label=4;case 4:return u=(c=s||[void 0,void 0])[0],l=c[1],d=u&&u.map(function(e){return jt(e)}),f=l&&jt(l.innerHTML)||{},[2,{jsonLd:d,json:f}];case 5:return p=m.sent(),console.error(p),[2,kt];case 6:return[2]}})})}({url:n})];case 1:return s=m.sent(),c=s.jsonLd,u=s.json,(d=r&&u&&Array.isArray(u.jsonLd))?[4,Promise.all(u.jsonLd.map(Et))]:[3,3];case 2:d=m.sent(),m.label=3;case 3:return l=d,f=c&&{url:n,created:(new Date).getTime(),jsonLd:c,json:u},p=a.querySelector(i),l?(l.forEach(function(e){return e.forEach(function(e){var t=e.index,n=e.key,r=e.jsonLd;c&&Array.isArray(c)&&c[t]&&n&&!0===c[t][n]&&r&&(c[t][n]=r)})}),p&&c?(a.removeChild(p),[4,Promise.all(c.map(function(e){return ke({name:n,json:_t(e),jsonld:!0})}))]):[3,5]):[3,5];case 4:m.sent(),m.label=5;case 5:return o&&f&&yt(f),[2]}})})}(e)];case 1:return[2,n.sent()]}})})}function Et(n){var r=n.index,o=n.fields;return t(this,void 0,void 0,function(){var n;return __generator(this,function(a){switch(a.label){case 0:return n=Object.keys(o),[4,Promise.all(n.map(function(n){return function(e){var n=e.urls,r=e.key;return t(this,void 0,void 0,function(){var e,t,o,a;return __generator(this,function(i){switch(i.label){case 0:return e=!1,t=Array.isArray(n)&&n.filter(function(e){return\"string\"==typeof e})||[],[4,Promise.all(t.map(function(t){return Lt({jsonLd:t,loadJsonJsonLd:e})}))];case 1:return o=i.sent(),a={key:r,jsonLd:[]},o.forEach(function(e){var t=e.jsonLd;return t&&t.forEach(function(e){return e&&a.jsonLd.push(e)})}),[2,a]}})})}({key:n,urls:o[n]}).then(function(t){return e({index:r},t)})}))];case 1:return[2,a.sent()]}})})}function Lt(e){var n=this,r=e.jsonLd,o=e.loadJsonJsonLd,a=void 0===o||o;return new Promise(function(e,o){return t(n,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:tt({key:r,resolve:e,reject:o}),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,St({url:r,loadJsonJsonLd:a})];case 2:return n.sent(),[3,4];case 3:return t=n.sent(),console.error(t),[3,4];case 4:return pt({key:r}),[2]}})})})}var Pt,Mt=L.jsonLdViewer;function Ct(e){return t(this,void 0,void 0,function(){var n;return __generator(this,function(r){switch(r.label){case 0:return n=document.documentElement,n.dataset.hasOwnProperty(\"vamtigerTextMode\")?[4,function(e){var n=e.jsonLd;return t(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,ke({name:Mt,src:Mt})];case 1:return t.sent(),e=function(){var e=document.body,t=Pt||document.createElement(\"vamtiger-json-ld-viewer\");Pt||(Pt=t,e.appendChild(t));return t}(),e.dataset.jsonLd=n,[2]}})})}(e)]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})}var xt=p.noJsonLdParameter;function Ot(){return self.hasOwnProperty(\"WorkerGlobalScope\")&&n.worker||n.window}var Tt=JSON.parse,Dt={action:j.ignore,params:{}},At=new TextDecoder;function Bt(e){var t;try{t=function(e){var t=e.data,n=\"string\"==typeof t&&Tt(t)||t instanceof Uint8Array&&Tt(At.decode(t));\"string\"==typeof n.params&&(n.params=Tt(n.params));return n}(e)||Dt}catch(e){t=Dt}return t}var Nt=k.support;function qt(e){return t(this,void 0,void 0,function(){return __generator(this,function(t){return Je()&&function(e){var t=self.VamtigerBrowserMethod.workerSupport,n=t&&t.indexedDbIsAccessible&&{action:j.saveSupport,params:e};n?Ve(n):It(e)}(e),We()&&function(e){It(e)}(e),[2]})})}function It(t){var n=t.environment,r=n&&{storeName:Nt,keyPath:E.support,data:e({environment:n},t)};r&&it(r)}var Jt=E.support,Wt=k.support;function Ht(){return t(this,void 0,void 0,function(){var e,r,a,i,s;return __generator(this,function(c){switch(c.label){case 0:return e=self.VamtigerBrowserMethod,r=self.localStorage,a=self.indexedDB,[4,Promise.all([function(){var e=this;return new Promise(function(r,a){return t(e,void 0,void 0,function(){var e,t,a;return __generator(this,function(i){switch(i.label){case 0:return e=!1,t=!1,a=n.worker,setTimeout(function(){return!t&&r(e)},o.indexDbIsAccessible),[4,ut({storeName:Wt,keyPath:Jt,key:a})];case 1:return i.sent(),t=!0,r(e=!0),[2]}})})})}()])];case 1:return i=c.sent()[0],s={localStorage:!!r,indexedDb:!!a,indexedDbIsAccessible:i,worker:!!self.hasOwnProperty(\"Worker\"),sharedWorker:self.hasOwnProperty(\"SharedWorker\"),textEncoder:self.hasOwnProperty(\"TextEncoder\"),textDecoder:self.hasOwnProperty(\"TextDecoder\")},e.support=s,We()&&function(){var e=self.VamtigerBrowserMethod;Ve({action:j.setWorkerSupport,params:e.support||{}})}(),[2]}})})}var Rt,Vt=\"Message Ignored\";var Qt=((Rt={})[j.ignore]=function(e){console.log(Vt),console.warn(e)},Rt[j.removeRedundantScripts]=ze,Rt[j.setWorkerSupport]=function(r){return t(this,void 0,void 0,function(){var t,o,a;return __generator(this,function(i){return t=self.VamtigerBrowserMethod,o=t.support,a=t.environment,t.workerSupport=r,o&&qt(e({environment:a},o)),r&&qt(e({environment:n.worker},r)),[2]})})},Rt[j.saveWebComponentData]=yt,Rt[j.getWebComponentData]=pt,Rt[j.dequeue]=lt,Rt[j.loadWebComponentData]=St,Rt[j.saveSupport]=qt,Rt);function Ut(e){return t(this,void 0,void 0,function(){var t,n,r,o;return __generator(this,function(a){switch(a.label){case 0:return t=Bt(e)||{action:j.ignore,params:{}},n=t.action,r=t.params,[4,(0,Qt[n])(r)];case 1:return(o=a.sent())&&Ve(o),[2]}})})}var Ft=u.vamtigerBrowserMethod;function $t(){return t(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return n=window.location,(e=c.localHost===n.hostname)?[4,fetch(Ft).then(function(e){return e.ok}).catch(function(e){return\"\"})]:[3,2];case 1:e=t.sent(),t.label=2;case 2:return[2,e&&Ft||\"\"]}var n})})}var Gt,zt=JSON.stringify,Kt={type:l.js},Xt=m.newline;function Yt(e){Object.keys(e).forEach(function(t){return console.error(\"string\"==typeof e[t]||zt(e[t]))})}function Zt(){Je()&&function(){t(this,void 0,void 0,function(){var e,n;return __generator(this,function(r){switch(r.label){case 0:return e=self.VamtigerBrowserMethod,n=e,[4,function(){return t(this,void 0,void 0,function(){var e,t,n,r,o,a,i,s,c;return __generator(this,function(u){switch(u.label){case 0:return[4,$t()];case 1:return e=u.sent(),t=document.head,n=URL.createObjectURL,r=t.querySelector(w.vamtigerBrowserMethod),o=(Array.from(t.querySelectorAll(w.workderDependency))||[]).map(function(e){return e.innerHTML}).filter(function(e){return e}),a=o.concat([r&&r.innerHTML||\"\"]).filter(function(e){return e}).join(Xt.repeat(2)),i=a&&a.length&&new Blob([a],Kt),s=i&&n&&n(i),(c=s&&new Worker(e||s))&&(c.addEventListener(\"message\",Ut),c.addEventListener(\"error\",Yt)),[2,Gt=Gt||c]}})})}()];case 1:return n.worker=r.sent(),[2]}})})}()}function en(){We()&&(addEventListener(\"message\",Ut),ze({selector:Z.redundantScripts}))}var tn,nn,rn=self.document,on=m.nothing;rn&&(tn=rn.createElement(\"template\"),nn=[\"<figcaption data-linked-data-caption></figcaption> <span data-linked-data-caption-element></span> <a></a>\"].join(on),tn.innerHTML=nn);var an=function(e){var t=e.selector,n=e.attributes,r=void 0===n?{}:n,o=e.properties,a=void 0===o?{}:o,i=Object.keys(r),s=tn.content.querySelector(t),c=s&&s.cloneNode(!0);return c&&(Object.assign(c,a),i.forEach(function(e){return r[e]&&c.setAttribute(e,r[e]||\"\")})),c},sn=m.nothing,cn=m.slash;function un(e){var t=e.href,n=e.text;return t&&n&&'<a href=\"'+t+'\" target=\"_blank\">'+n+\"</a>\"||\"\"}var ln=self.requestIdleCallback,dn=m.nothing,fn=m.slash,pn=X,mn=$,hn=Y;function vn(e){var n=e.jsonLd;return t(this,void 0,void 0,function(){var e,r,o,a;return __generator(this,function(i){switch(i.label){case 0:return e=function(e){var t=e.jsonLd,n=self._.startCase,r=t[\"@context\"],o=void 0===r?void 0:r,a=t[\"@type\"],i=void 0===a?void 0:a,s=o&&i&&[o,i].join(fn),c=i&&n(i),u=un({href:s,text:c});u&&(t[\"@type\"]=u);return t}({jsonLd:n}),r=Object.keys(e),[4,Promise.all(r.map(function(n){return function(e){var n=e.key,r=e.value;return t(this,void 0,void 0,function(){var e,t,o,a,i,s,c;return __generator(this,function(u){switch(u.label){case 0:return e=self._,t=e.startCase,o=ce.has(typeof r)&&r,a=Array.isArray(r)&&r||\"object\"==typeof r&&[r],(s=a)?[4,Promise.all(a.map(function(e){return vn({jsonLd:e})}))]:[3,2];case 1:s=u.sent(),u.label=2;case 2:return i=s,c=[[t(n.replace(pn,dn)),o&&(n.match(hn)&&(l={href:o.toString(),text:o.toString()},d=l.href,f=l.text,d&&f&&'<a href=\"mailto:'+d+'\">'+f+\"</a>\"||\"\")||function(e){var t=e.toString().trim(),n=t.match(mn)&&t,r=n&&t&&t.split(fn).pop();return n&&r&&un({href:n,text:r})||t}(o))||dn]],i&&i.forEach(function(e){return e.forEach(function(e){return c.push(e)})}),[2,c]}var l,d,f})})}({key:n,value:e[n]})}))];case 1:return o=i.sent(),a=[],o.forEach(function(e){return e.forEach(function(e){return a.push(e)})}),[2,a]}})})}function yn(){return t(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return Je()?[4,function(){return t(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return e=!0,t=ue(),[4,Promise.all(t.map(function(t){return ke({name:t,src:t,workerDependency:e})}))];case 1:return n.sent(),[2]}})})}()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})}var wn={bubbles:!0};function bn(t){var n,r,o,a;Je()&&(r=(n=t).eventName,o=n.detail,a=new CustomEvent(r,e({},wn,{detail:void 0===o?{}:o})),self.dispatchEvent(a))}var gn={loadScript:ke,loadScripts:function(e){return Promise.all(e.map(ke))},loadScriptsSequentially:function(e){return new Promise(function(n,r){var o=new Set,a=Promise.resolve();return e.forEach(function(e){a=a.then(function(){return t(void 0,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(ke))];case 1:return[2,t.sent()]}})})}).then(function(e){return e.forEach(function(e){return o.add(e)})})}),a=a.then(function(){return n(Array.from(o))})})},loadShadowStylesheet:function(e){var t=e.css,n=e.element,r=n.shadowRoot,o=(n.localName,r&&r.querySelector(w.lastStylesheet)),a=r&&document.createElement(\"style\");a&&r&&(a.innerHTML=t,o&&o.nextElementSibling?r.insertBefore(a,o.nextElementSibling):r.appendChild(a))},defineCustomElement:function e(t){var n=t.name,r=t.constructor,o=t.ignore,a=self.customElements,i=a&&a.define,s=i&&a.get&&a.get(n);if(i&&!s)a.define(n,r);else{if(s)throw new Error(Pe+\": \"+n);if(o)throw new Error(Le+\": Custom Elements - \"+n);e({name:n,constructor:r,ignore:!0})}},pause:function(e){var t=e.milliseconds,n=void 0===t?1e3:t;return new Promise(function(e,t){return setTimeout(e,n)})},getElement:function(e){return t(this,void 0,void 0,function(){return __generator(this,function(t){return[2,new Promise(function(t,n){var r=self.requestIdleCallback;r?r(function(){return Ze(e,t)}):setTimeout(function(){return Ze(e,t)},0)})]})})},getData:function(e){return new Promise(function(t,n){var r=self.requestIdleCallback,o=e.textMode;e.jsonLd?(o&&Ct(e),r?r(function(){return Lt(e).then(t)}):setTimeout(function(){return Lt(e).then(t)},0)):n(new Error(xt))})},getEnvironment:Ot,environment:Ot(),messageQueue:new Map,getMicrodataCaption:function(e){var t,n,r=e.imageData,o=e.fieldKey,a=r[o],i=Array.isArray(a)&&a||[a]||[],s=a&&an({selector:w.linkedDataCaption,attributes:{itemprop:o}});return i.forEach(function(e){e&&(t=e[\"@context\"]&&e[\"@type\"]&&[e[\"@context\"],e[\"@type\"]].join(cn),(n=an({selector:w.linkedDataCaption}))&&(n.setAttribute(\"itemscope\",sn),t&&n.setAttribute(\"itemtype\",t),[e.name&&an({selector:w.linkedDataCaptionElement,properties:{innerHTML:e.name},attributes:{itemprop:\"name\"}}),e.description&&an({selector:w.linkedDataCaptionElement,properties:{innerHTML:e.description},attributes:{itemprop:\"description\"}}),e.url&&an({selector:w.a,properties:{innerHTML:e.name||e.url},attributes:{itemprop:\"url\",href:e.url}})].forEach(function(e){return e&&n&&n.appendChild(e)}),s&&s.appendChild(n)))}),s},getJsonLdArray:function(e){var n=this;return new Promise(function(r,o){return t(n,void 0,void 0,function(){return __generator(this,function(t){return ln?ln(function(){return vn(e).then(r)}):setTimeout(function(){return vn(e).then(r)},0),[2]})})})}};function jn(e){throw console.error(e),e}(function(){return t(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,6,,7]),self.VamtigerBrowserMethod?[3,5]:(self.VamtigerBrowserMethod=gn,[4,yn()]);case 1:return e.sent(),[4,Ht()];case 2:return e.sent(),[4,Zt()];case 3:return e.sent(),[4,en()];case 4:e.sent(),bn({eventName:r.vamtigerBrowserMethodReady}),e.label=5;case 5:return[3,7];case 6:return jn(e.sent()),[3,7];case 7:return[2]}})})})().catch(jn)}();\n//# sourceMappingURL=vamtiger-browser-method.js.map\n"});              document.head.appendChild(script);         }     })()