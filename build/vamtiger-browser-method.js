!function(){"use strict";var e,t,n,r,o,i,a,c,u,l,f,s,y,p,d,h,m,b,w;!function(e){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function n(e,n){return e!==t&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(t,r){return e[t]=n?n(t,r):r}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(r){e(n(t,n(r)))}):"object"==typeof module&&"object"==typeof module.exports?e(n(t,n(module.exports))):e(n(t))}(function(v){var _=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};e=function(e,t){function n(){this.constructor=e}_(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},r=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=function(e,t){return function(n,r){t(n,r,e)}},i=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,c)}u((r=r.apply(e,t||[])).next())})},c=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},u=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},l=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},f=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},s=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(f(arguments[t]));return e},y=function(e){return this instanceof y?(this.v=e,this):new y(e)},p=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise(function(n,r){i.push([e,t,n,r])>1||c(e,t)})})}function c(e,t){try{(n=o[e](t)).value instanceof y?Promise.resolve(n.value.v).then(u,l):f(i[0][2],n)}catch(e){f(i[0][3],e)}var n}function u(e){c("next",e)}function l(e){c("throw",e)}function f(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}},d=function(e){var t,n;return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:y(e[r](t)),done:"return"===r}:o?o(t):t}:o}},h=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof l?l(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){(function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)})(r,o,(t=e[n](t)).done,t.value)})}}},m=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},w=function(e){return e&&e.__esModule?e:{default:e}},v("__extends",e),v("__assign",t),v("__rest",n),v("__decorate",r),v("__param",o),v("__metadata",i),v("__awaiter",a),v("__generator",c),v("__exportStar",u),v("__values",l),v("__read",f),v("__spread",s),v("__await",y),v("__asyncGenerator",p),v("__asyncDelegator",d),v("__asyncValues",h),v("__makeTemplateObject",m),v("__importStar",b),v("__importDefault",w)});var v,_,S,O,j,g,E,P=Object.freeze({});Object.keys(P).forEach(function(e){window[e]||(window[e]=P[e])}),function(e){e.jsonld="application/ld+json"}(v||(v={})),function(e){e.type="type"}(_||(_={})),function(e){e.failedToLoadScript="Failed to load script",e.windowPropertyNotSet="Window property not set",e.unsupportedFeature="Unsupported feature",e.customElementAreadyDefined="Custom element already defined"}(S||(S={})),function(e){e.slash="/"}(O||(O={})),function(e){e.stylesheet="stylesheet"}(j||(j={})),function(e){e.script="script",e.link="link",e.style="style"}(g||(g={})),function(e){e.lastStylesheet="style:last-of-type"}(E||(E={}));var x=S.failedToLoadScript,L=j.stylesheet,T=g.script,M=g.link,k=g.style;var I=S.unsupportedFeature,R=S.customElementAreadyDefined;var C={loadScript:function(e){return new Promise(function(t,n){var r=document.head,o=document.body,i=e,a=i.js,c=i.name,u=i.jsonld,l=e.src,f=e,s=f.css,y=f.name,p=e.href,d=e.hasOwnProperty("src")||e.hasOwnProperty("href"),h=(a||l)&&T||s&&k||p&&M,m=l&&'script[src="'+l+'"]'||p&&'link[href="'+p+'"]'||a&&c&&'script[data-name="'+c+'"]'||s&&y&&'style[data-name="'+y+'"]',b=r.querySelector(m)||o.querySelector(m),w=m&&h&&document.createElement(h);w instanceof HTMLScriptElement?l?w.src=l:a&&(w.innerHTML=a,w.dataset.name=c,u&&w.setAttribute(_.type,v.jsonld)):w instanceof HTMLLinkElement?(w.rel=L,w.href=p):w instanceof HTMLStyleElement&&(w.innerHTML=s,w.dataset.name=y),b?t(b):w&&(r.appendChild(w),d?(w.addEventListener("load",function e(n){w&&(w.removeEventListener("load",e),t(w))}),w.addEventListener("error",function e(t){w&&w.removeEventListener("error",e),console.error(t),n(new Error(""+x))})):t(w))})},loadShadowStylesheet:function(e){var t=e.css,n=e.element.shadowRoot,r=n&&n.querySelector(E.lastStylesheet),o=n&&document.createElement("style");o&&n&&(o.innerHTML=t,r&&r.nextElementSibling?n.insertBefore(o,r.nextElementSibling):n.appendChild(o))},defineCustomElement:function e(t){var n=t.name,r=t.constructor,o=window.customElements,i=o&&o.define,a=i&&o.get&&o.get(n);i&&!a?o.define(n,r):setTimeout(function(){var t=window.WebComponents;if(!t)throw a?new Error(R+": "+n):new Error(I+": Custom Elements - "+n);t.waitFor&&t.waitFor(e)},2e3)}};try{window.VamtigerBrowserMethod=C}catch(e){global.VamtigerBrowserMethod=C}}();
//# sourceMappingURL=vamtiger-browser-method.js.map
