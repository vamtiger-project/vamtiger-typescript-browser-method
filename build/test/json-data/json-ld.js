var index=function(){"use strict";var e,t,n,o,r,a,i,s,c,l,u,d,m,p,f,y,h,v,w;!function(e){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function n(e,n){return e!==t&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(t,o){return e[t]=n?n(t,o):o}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(o){e(n(t,n(o)))}):"object"==typeof module&&"object"==typeof module.exports?e(n(t,n(module.exports))):e(n(t))}(function(b){var g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};e=function(e,t){function n(){this.constructor=e}g(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},t=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},o=function(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},r=function(e,t){return function(n,o){t(n,o,e)}},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=function(e,t,n,o){return new(n||(n=Promise))(function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function s(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,s)}c((o=o.apply(e,t||[])).next())})},s=function(e,t){var n,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&a[0]?o.return:a[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,a[1])).done)return r;switch(o=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,o=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){i.label=a[1];break}if(6===a[0]&&i.label<r[1]){i.label=r[1],r=a;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(a);break}r[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],o=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},c=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},l=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},u=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(o=a.next()).done;)i.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return i},d=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(u(arguments[t]));return e},m=function(e){return this instanceof m?(this.v=e,this):new m(e)},p=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(e,t||[]),a=[];return o={},i("next"),i("throw"),i("return"),o[Symbol.asyncIterator]=function(){return this},o;function i(e){r[e]&&(o[e]=function(t){return new Promise(function(n,o){a.push([e,t,n,o])>1||s(e,t)})})}function s(e,t){try{(n=r[e](t)).value instanceof m?Promise.resolve(n.value.v).then(c,l):u(a[0][2],n)}catch(e){u(a[0][3],e)}var n}function c(e){s("next",e)}function l(e){s("throw",e)}function u(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}},f=function(e){var t,n;return t={},o("next"),o("throw",function(e){throw e}),o("return"),t[Symbol.iterator]=function(){return this},t;function o(o,r){t[o]=e[o]?function(t){return(n=!n)?{value:m(e[o](t)),done:"return"===o}:r?r(t):t}:r}},y=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof l?l(e):e[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(n){t[n]=e[n]&&function(t){return new Promise(function(o,r){(function(e,t,n,o){Promise.resolve(o).then(function(t){e({value:t,done:n})},t)})(o,r,(t=e[n](t)).done,t.value)})}}},h=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},v=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},w=function(e){return e&&e.__esModule?e:{default:e}},b("__extends",e),b("__assign",t),b("__rest",n),b("__decorate",o),b("__param",r),b("__metadata",a),b("__awaiter",i),b("__generator",s),b("__exportStar",c),b("__values",l),b("__read",u),b("__spread",d),b("__await",m),b("__asyncGenerator",p),b("__asyncDelegator",f),b("__asyncValues",y),b("__makeTemplateObject",h),b("__importStar",v),b("__importDefault",w)});const b=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};var g,j,_,S,k,M,x,O,E,C,P,D,N,B,T,W,R,L,I,J,U,q,F,Q,A,V,$,G,H,z,K,X;!function(e){e.window="window",e.worker="worker",e.serviceWorker="serviceWorker",e.unknown="unknown"}(g||(g={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method"}(j||(j={})),function(e){e.vamtigerBrowserMethodReady="vamtigerBrowserMethodReady"}(_||(_={})),function(e){e[e.webComponent=3e4]="webComponent",e[e.indexDbIsAccessible=100]="indexDbIsAccessible"}(S||(S={})),function(e){e.webComponent="webComponent"}(k||(k={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method",e.db="vamtiger-browser-method",e.messageIdWindow="vamtiger-browser-method-window",e.messageIdWorker="vamtiger-browser-method-worker",e.messageIdServiceWorker="vamtiger-browser-method-service-worker",e.messageIdUnknownEnvironment="vamtiger-browser-method-unknown-environment"}(M||(M={})),function(e){e.metaElement="vamtiger-browser-method"}(x||(x={})),function(e){e.nowhere="",e.everyWhere="*"}(O||(O={})),function(e){e.localHost="localhost"}(E||(E={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method.js"}(C||(C={})),function(e){e.js="text/javascript",e.babel="text/babel",e.json="application/json",e.jsonld="application/ld+json"}(P||(P={})),function(e){e.type="type"}(D||(D={})),function(e){e.vamtigerElementQuery="vamtigerLoadElementQueryCss",e.elementQueryCssLoaded="elementQueryCssLoaded",e.customElementName="customElementName",e.visible="visible"}(N||(N={})),function(e){e.failedToLoadScript="Failed to load script",e.windowPropertyNotSet="Window property not set",e.unsupportedFeature="Unsupported feature",e.customElementAreadyDefined="Custom element already defined",e.noElementName="No Element Name",e.noTemplateUrl="No Template URL",e.noElementSelector="No Template Selector",e.noTemplateForUrl="No Template for URL",e.noTemplate="No Template",e.noElementForSelector="No Element for Selector",e.noJsonLdParameter='No "jsonLd" property set',e.scriptLoadedButMethodNameNotFound="Failed to load method: Script loaded, but method name not found",e.crossOriginMethodsNotAllowed="Cross-Origin methods are not allowed"}(B||(B={})),function(e){e.nothing="",e.slash="/",e.dash="-",e.pipe="|",e.comma=",",e.backTick="`",e.doubleQuote='"',e.commaSpace=", ",e.space=" ",e.period=".",e.newline="\n",e.semiColon=";"}(T||(T={})),function(e){e.div="div",e.template="template"}(W||(W={})),function(e){e.stylesheet="stylesheet"}(R||(R={})),function(e){e.script="script",e.link="link",e.style="style"}(L||(L={})),function(e){e.lastStylesheet="style:last-of-type",e.lastMetaElement="head > meta:last-of-type",e.webcomponentsjs='script[src*="@webcomponents/webcomponentsjs"]',e.style="style",e.stylesheet=' link[rel="stylesheet"]',e.vamtigerBrowserMethodJs='[src="vamtiger-browser-method.js"]',e.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',e.worker='[src$="js.json.js"][data-worker]',e.workderDependency="script[data-worker-dependency]",e.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]',e.vamtigerBrowserMethod='[data-name$="vamtiger-browser-method.js"]',e.script="script",e.jsonScript='script[type="application/json"]',e.jsonLdScript='script[type="application/ld+json"]',e.a="a",e.linkedDataCaption="[data-linked-data-caption]",e.linkedDataCaptionElement="[data-linked-data-caption-element]",e.jsonLdViewer="vamtiger-json-ld-viewer",e.transpiledJs="[data-transpiled-js]",e.htmlTextMode="html[data-vamtiger-text-mode]",e.customElementNameMetaElement="meta[data-custom-element-name]",e.dependencyUrlMetaElement="meta[data-dependency]",e.urlMetaElement="meta[data-url]"}(I||(I={})),function(e){e.vamtigerJsonLdViewer="vamtiger-json-ld-viewer"}(J||(J={})),function(e){e.loadElementQueryCss="vamtiger-load-element-query-css"}(U||(U={})),function(e){e.all="all",e.worker="worker",e.serviceWorker="serviceWorker"}(q||(q={})),function(e){e.style="style",e.stylesheet="stylesheet"}(F||(F={})),function(e){e.textMode="vamtiger-text-mode"}(Q||(Q={})),function(e){e.ignore="ignore",e.removeRedundantScripts="removeRedundantScripts",e.setWorkerSupport="setWorkerSupport",e.saveWebComponentData="saveWebComponentData",e.getWebComponentData="getWebComponentData",e.dequeue="dequeue",e.loadWebComponentData="loadWebComponentData",e.saveSupport="saveSupport",e.saveCustomElementName="saveCustomElementName",e.getTextModeCss="getTextModeCss",e.loadScript="loadScript",e.loadMethod="loadMethod",e.updateMethod="updateMethod",e.getMethodResult="getMethodResult",e.importDependencies="importDependencies",e.removeDependencyUrl="removeDependencyUrl"}(A||(A={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method"}(V||(V={})),function(e){e.dequeue="vamtiger-browser-method-dequeue"}($||($={})),function(e){e.vamtigerBrowserSupport="vamtiger-browser-support"}(G||(G={})),function(e){e.support="support",e.webComponent="web-component",e.customElementName="custom-element-name"}(H||(H={})),function(e){e.readonly="readonly",e.readwrite="readwrite",e.versionchange="versionchange"}(z||(z={})),function(e){e.webComponent="url",e.support="environment",e.customElementName="name"}(K||(K={})),function(e){e.lodash="https://cdn.jsdelivr.net/npm/lodash@4.17.11",e.jsonLdViewer="https://vamtiger-project.github.io/vamtiger-json-ld-viewer/build/vamtiger-json-ld-viewer.js"}(X||(X={}));new RegExp(T.dash,"g"),new RegExp(Object.keys(J).map(function(e){return J[e]}).join(T.pipe),"i"),[I.vamtigerBrowserMethodJsonJs,I.vamtigerBrowserMethodJson,I.vamtigerBrowserMethod,I.transpiledJs].concat(Object.keys(X).map(function(e){return'[src="'+X[e]+'"]'})).join(T.comma);var Y=V.vamtigerBrowserMethod,Z=$.dequeue,ee={key:"test/json-data/json-ld.js"};function te(){return e=this,t=void 0,o=function(){var e,t,n,o;return __generator(this,function(r){switch(r.label){case 0:return e=self.VamtigerBrowserMethod,[4,(0,e.getData)({json:"test/json-data/json-ld-thing.js",dependency:!0})];case 1:return t=r.sent(),n=t.jsonLd,o=new CustomEvent(Y,{detail:{action:Z,params:b({},ee,{data:{jsonLd:{"@context":"http://schema.org/","@type":"Thing",name:"Some thing",description:"Describing some thing",about:n},json:{}}})}}),dispatchEvent(o),[2]}})},new((n=void 0)||(n=Promise))(function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function s(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(i,s)}c((o=o.apply(e,t)).next())});var e,t,n,o}return te(),te}();
//# sourceMappingURL=json-ld.js.map
