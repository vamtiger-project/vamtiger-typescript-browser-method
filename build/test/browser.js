!function(e,t){"use strict";var n,r,o,i,a,s,c,u,l,d,f,m,p,h,v,w,y,b,g,j,_,S,x,k,E,M,L,O,T,P,C,B,D,q,A,H,V,N,I,R,W,J,Q,$;function F(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t)).next())})}!function(e){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function n(e,n){return e!==t&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(t,r){return e[t]=n?n(t,r):r}}"function"==typeof define&&define.amd?define("tslib",["exports"],function(r){e(n(t,n(r)))}):"object"==typeof module&&"object"==typeof module.exports?e(n(t,n(module.exports))):e(n(t))}(function(e){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};n=function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)},r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},i=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},a=function(e,t){return function(n,r){t(n,r,e)}},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},u=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},l=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},d=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}},f=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},m=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(f(arguments[t]));return e},p=function(e){return this instanceof p?(this.v=e,this):new p(e)},h=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise(function(n,r){i.push([e,t,n,r])>1||s(e,t)})})}function s(e,t){try{(n=o[e](t)).value instanceof p?Promise.resolve(n.value.v).then(c,u):l(i[0][2],n)}catch(e){l(i[0][3],e)}var n}function c(e){s("next",e)}function u(e){s("throw",e)}function l(e,t){e(t),i.shift(),i.length&&s(i[0][0],i[0][1])}},v=function(e){var t,n;return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:p(e[r](t)),done:"return"===r}:o?o(t):t}:o}},w=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof d?d(e):e[Symbol.iterator](),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,o){(function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)})(r,o,(t=e[n](t)).done,t.value)})}}},y=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},g=function(e){return e&&e.__esModule?e:{default:e}},e("__extends",n),e("__assign",r),e("__rest",o),e("__decorate",i),e("__param",a),e("__metadata",s),e("__awaiter",c),e("__generator",u),e("__exportStar",l),e("__values",d),e("__read",f),e("__spread",m),e("__await",p),e("__asyncGenerator",h),e("__asyncDelegator",v),e("__asyncValues",w),e("__makeTemplateObject",y),e("__importStar",b),e("__importDefault",g)}),function(e){e.window="window",e.worker="worker"}(j||(j={})),function(e){e.vamtigerBrowserMethodReady="vamtigerBrowserMethodReady"}(_||(_={})),function(e){e[e.webComponent=6e4]="webComponent",e[e.indexDbIsAccessible=100]="indexDbIsAccessible"}(S||(S={})),function(e){e.webComponent="webComponent"}(x||(x={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method",e.db="vamtiger-browser-method",e.messageIdWindow="vamtiger-browser-method-window",e.messageIdWorker="vamtiger-browser-method-worker"}(k||(k={})),function(e){e.nowhere="",e.everyWhere="*"}(E||(E={})),function(e){e.localHost="localhost"}(M||(M={})),function(e){e.vamtigerBrowserMethod="vamtiger-browser-method.js"}(L||(L={})),function(e){e.js="text/javascript",e.babel="text/babel",e.json="application/json",e.jsonld="application/ld+json"}(O||(O={})),function(e){e.type="type"}(T||(T={})),function(e){e.vamtigerElementQuery="vamtigerLoadElementQueryCss",e.elementQueryCssLoaded="elementQueryCssLoaded"}(P||(P={})),function(e){e.failedToLoadScript="Failed to load script",e.windowPropertyNotSet="Window property not set",e.unsupportedFeature="Unsupported feature",e.customElementAreadyDefined="Custom element already defined",e.noElementName="No Element Name",e.noTemplateUrl="No Template URL",e.noElementSelector="No Template Selector",e.noTemplateForUrl="No Template for URL",e.noTemplate="No Template",e.noElementForSelector="No Element for Selector",e.noJsonLdParameter='No "jsonLd" property set'}(C||(C={})),function(e){e.nothing="",e.slash="/",e.dash="-",e.pipe="|",e.comma=",",e.backTick="`",e.doubleQuote='"',e.commaSpace=", ",e.space=" ",e.period=".",e.newline="\n"}(B||(B={})),function(e){e.div="div",e.template="template"}(D||(D={})),function(e){e.stylesheet="stylesheet"}(q||(q={})),function(e){e.script="script",e.link="link",e.style="style"}(A||(A={})),function(e){e.lastStylesheet="style:last-of-type",e.lastMetaElement="head > meta:last-of-type",e.webcomponentsjs='script[src*="@webcomponents/webcomponentsjs"]',e.style="style",e.stylesheet=' link[rel="stylesheet"]',e.vamtigerBrowserMethodJsonJs='[src$="vamtiger-browser-method.js.json.js"]',e.worker='[src$="js.json.js"][data-worker]',e.workderDependency="script[data-worker-dependency]",e.vamtigerBrowserMethodJson='[data-name$="vamtiger-browser-method.js.json"]',e.vamtigerBrowserMethod='[data-name$="vamtiger-browser-method.js"]',e.script="script",e.jsonScript='script[type="application/json"]',e.jsonLdScript='script[type="application/ld+json"]',e.a="a",e.linkedDataCaption="[data-linked-data-caption]",e.linkedDataCaptionElement="[data-linked-data-caption-element]",e.jsonLdViewer="vamtiger-json-ld-viewer"}(H||(H={})),function(e){e.loadElementQueryCss="vamtiger-load-element-query-css"}(V||(V={})),function(e){e.style="style",e.stylesheet="stylesheet"}(N||(N={})),function(e){e.ignore="ignore",e.removeRedundantScripts="removeRedundantScripts",e.setWorkerSupport="setWorkerSupport",e.saveWebComponentData="saveWebComponentData",e.getWebComponentData="getWebComponentData",e.dequeue="dequeue",e.loadWebComponentData="loadWebComponentData",e.saveSupport="saveSupport"}(I||(I={})),function(e){e.vamtigerBrowserSupport="vamtiger-browser-support"}(R||(R={})),function(e){e.support="support",e.webComponent="web-component"}(W||(W={})),function(e){e.readonly="readonly",e.readwrite="readwrite",e.versionchange="versionchange"}(J||(J={})),function(e){e.webComponent="url",e.support="environment"}(Q||(Q={})),function(e){e.lodash="https://vamtiger-project.github.io/vamtiger-browser-method/build/lodash.min.js.json.js",e.jsonLdViewer="https://vamtiger-project.github.io/vamtiger-json-ld-viewer/build/vamtiger-json-ld-viewer.js.json.js"}($||($={}));var U=/:{1,2}host/gm,G=(new RegExp(B.dash,"g"),/^http(s)?/i),z=/\.js\.json\.js$/,K=/\.json\.js$/,X=/\.js$/,Y=/^@/,Z=/^email$/i,ee=([H.vamtigerBrowserMethodJsonJs,H.vamtigerBrowserMethodJson,H.vamtigerBrowserMethod].join(B.comma),B.nothing);var te=self.requestIdleCallback,ne=U,re=B.nothing;function oe(e){var t=e.css,n=e.stylesheetName,r=void 0===n?re:n,o=e.hostName,i=void 0===o?re:o;return F(this,void 0,void 0,function(){var e,n,o,a,s,c,u;return __generator(this,function(l){return e=self._,n=e.camelCase,o=function(e){var t=e.selector,n=void 0===t?ee:t,r=e.properties,o=void 0===r?{}:r,i=e.dataset,a=void 0===i?{}:i,s=e.attributes,c=void 0===s?{}:s,u=o.id,l=document.head,d=l.querySelector(H.lastMetaElement),f=Object.keys(c),m=u&&(window[u]||n&&l.querySelector(n)),p=!m&&document.createElement("meta"),h=m||p;return p&&(Object.assign(p,o),Object.assign(p.dataset,a),d&&d.nextElementSibling?l.insertBefore(p,d.nextElementSibling):l.appendChild(p)),f.forEach(function(e){return!h.hasAttribute(e)&&h.setAttribute(void 0,c[e])}),h}({properties:{id:V.loadElementQueryCss}}),a=n(r),s=o.dataset,c=!s.hasOwnProperty(i)&&i&&t.replace(ne,i)||t,u=self.EQCSS,c&&u&&(u.register(u.parse(c)),a?s[a]=re:i&&(s[i]=re)),[2,!0]})})}B.slash;var ie={presets:["es2015"]},ae=new Set(["number","string",typeof!0]);B.nothing;function se(e){return console.warn(e.message),console.warn(e.stack),""}var ce=JSON.parse,ue=C.failedToLoadScript,le=q.stylesheet,de=A.script,fe=A.link,me=A.style,pe=G,he=z,ve=K,we=X,ye=B.nothing,be=B.slash;function ge(e){var t=this;return new Promise(function(n,r){return F(t,void 0,void 0,function(){function t(){return F(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return M?(i(),f&&a.removeChild(M),h&&h.match(he)?[4,function(e){var t=e.src,n=e.workerDependency;return F(this,void 0,void 0,function(){var e,r,o,i,a,s,c,u;return __generator(this,function(l){switch(l.label){case 0:return e=document.head,r=t.replace(we,ye).split(be),o=r[r.length-1],i=t&&o&&'script[type="'+O.json+'"][data-name="'+o+'"]',a=i&&e.querySelector(i),s=a&&a.innerHTML&&ce(a.innerHTML),c=s&&s.text,u=t.replace(ve,ye),u&&c?[4,ge({name:u,js:c,workerDependency:n}).catch(je)]:[3,2];case 1:l.sent(),l.label=2;case 2:return[2]}})})}({src:h,workerDependency:p})]:[3,2]):[3,3];case 1:e.sent(),e.label=2;case 2:n(M),e.label=3;case 3:return[2]}})})}function o(e){i(),console.error(e),r(new Error(""+ue))}function i(){M&&(M.removeEventListener("load",t),M.removeEventListener("error",o))}var a,s,c,u,l,d,f,m,p,h,v,w,y,b,g,j,_,S,x,k,E,M;return __generator(this,function(r){switch(r.label){case 0:return a=document.head,s=document.body,u=(c=e).js,l=c.name,d=c.jsonld,f=c.removeFromDom,m=c.workerDependency,p=void 0!==m&&m,h=e.src,(w=u||h&&!h.match(pe))?[4,function(e){var t=e.url,n=e.js;return F(this,void 0,void 0,function(){var e,r,o,i,a,s,c;return __generator(this,function(u){switch(u.label){case 0:return e=self.fetch,r=self.Babel,o=(r||{transform:void 0}).transform,(a=o)?(s=n)?[3,3]:(c=t)?[4,e(t).then(function(e){return e&&e.text()}).catch(se)]:[3,2]:[3,4];case 1:c=u.sent(),u.label=2;case 2:s=c,u.label=3;case 3:a=s,u.label=4;case 4:return[2,((i=a)&&i.trim()&&o&&o(i,ie)||{code:""}).code||n]}})})}({js:u,url:h})]:[3,2];case 1:w=r.sent(),r.label=2;case 2:return v=w||"",b=(y=e).css,g=y.name,j=e.href,_=e.json,S=e.hasOwnProperty("src")||e.hasOwnProperty("href"),x=(u||_||h)&&de||b&&me||j&&fe,k=h&&'script[src="'+h+'"]'||j&&'link[href="'+j+'"]'||u&&l&&'script[data-name="'+l+'"]'||d&&l&&'script[data-name="'+l+'"][type="'+O.jsonld+'"]'||b&&g&&'style[data-name="'+g+'"]',E=a.querySelector(k)||s.querySelector(k),(M=k&&x&&document.createElement(x))instanceof HTMLScriptElement?(!v&&h?M.src=h:(_||v||u)&&(M.innerHTML=_||v||u,M.dataset.name=l||h,d?(M.setAttribute(T.type,O.jsonld),M.dataset.jsonLd=M.dataset.name):_?M.setAttribute(T.type,O.json):v&&(M.dataset.transpiledJs=ye)),[3,6]):[3,3];case 3:return M instanceof HTMLLinkElement?(M.rel=le,M.href=j,[3,6]):[3,4];case 4:return M instanceof HTMLStyleElement?(M.innerHTML=b,M.dataset.name=g,[4,function(e){var t=this;return new Promise(function(n,r){return F(t,void 0,void 0,function(){return __generator(this,function(t){return te?te(function(){return oe(e).then(n)}):setTimeout(function(){return oe(e).then(n)},0),[2]})})})}({css:b,stylesheetName:g})]):[3,6];case 5:r.sent(),r.label=6;case 6:return E?n(E):M&&(M.addEventListener("load",t),M.addEventListener("error",o),a.appendChild(M),p&&(M.dataset.workerDependency=ye),!v&&S||t()),[2]}})})})}function je(e){console.warn(e.name),console.warn(e.message),console.warn(e.stack)}var _e="vamtiger-browser-method.js.json.js";function Se(){return new Promise(function(e,t){addEventListener(_.vamtigerBrowserMethodReady,e),ge({name:_e,src:_e})})}function xe(){return new Promise(function(t,n){var r=window.VamtigerBrowserMethod;e.expect(r).to.be.ok,t()})}var ke=B.slash,Ee=["test","empty-script.js"].join(ke),Me=["test","empty-stylesheet.css"].join(ke),Le=new Array(10).fill(Ee),Oe=new Array(10).fill(Me);function Te(){return F(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:return t=window.VamtigerBrowserMethod,[4,(0,t.getElement)({name:"templateTest",template:"<div>/div>"})];case 1:return n=r.sent(),e.expect(n).to.be.ok,[2]}})})}function Pe(){return F(this,void 0,void 0,function(){var t,n;return __generator(this,function(r){switch(r.label){case 0:return t=window.VamtigerBrowserMethod,[4,(0,t.getElement)({name:"urlTemplateTest",url:"template.html",selector:"[data-url-template]"})];case 1:return n=r.sent(),e.expect(n).to.be.ok,[2]}})})}function Ce(){return F(this,void 0,void 0,function(){var t,n,r,o;return __generator(this,function(i){switch(i.label){case 0:return t=window.VamtigerBrowserMethod,[4,(0,t.getData)({jsonLd:"https://vamtiger-project.github.io/vamtiger-mental-health-botswana-json-ld/build/vamtiger-mental-health-botswana-2018-json-ld.js",textMode:!0})];case 1:return n=i.sent(),r=n.jsonLd,o=r[0],e.expect(o).to.be.ok,e.expect(o["@context"]).to.equal("http://schema.org"),e.expect(o["@type"]).to.equal("VisualArtwork"),[2]}})})}function Be(e){var t=e.href,n=e.text;return t&&n&&'<a href="'+t+'" target="_blank">'+n+"</a>"||""}var De=self.requestIdleCallback,qe=B.nothing,Ae=B.slash,He=Y,Ve=G,Ne=Z;function Ie(e){var t=e.jsonLd;return F(this,void 0,void 0,function(){var e,n,r,o;return __generator(this,function(i){switch(i.label){case 0:return e=function(e){var t=e.jsonLd,n=self._.startCase,r=t["@context"],o=void 0===r?void 0:r,i=t["@type"],a=void 0===i?void 0:i,s=o&&a&&[o,a].join(Ae),c=a&&n(a),u=Be({href:s,text:c});u&&(t["@type"]=u);return t}({jsonLd:t}),n=Object.keys(e),[4,Promise.all(n.map(function(t){return function(e){var t=e.key,n=e.value;return F(this,void 0,void 0,function(){var e,r,o,i,a,s,c;return __generator(this,function(u){switch(u.label){case 0:return e=self._,r=e.startCase,o=ae.has(typeof n)&&n,i=Array.isArray(n)&&n||"object"==typeof n&&[n],(s=i)?[4,Promise.all(i.map(function(e){return Ie({jsonLd:e})}))]:[3,2];case 1:s=u.sent(),u.label=2;case 2:return a=s,c=[[r(t.replace(He,qe)),o&&(t.match(Ne)&&(l={href:o.toString(),text:o.toString()},d=l.href,f=l.text,d&&f&&'<a href="mailto:'+d+'">'+f+"</a>"||"")||function(e){var t=e.toString().trim(),n=t.match(Ve)&&t,r=n&&t&&t.split(Ae).pop();return n&&r&&Be({href:n,text:r})||t}(o))||qe]],a&&a.forEach(function(e){return e.forEach(function(e){return c.push(e)})}),[2,c]}var l,d,f})})}({key:t,value:e[t]})}))];case 1:return r=i.sent(),o=[],r.forEach(function(e){return e.forEach(function(e){return o.push(e)})}),[2,o]}})})}var Re=JSON.parse,We=function(){return describe("getJsonLdArray",function(){it("jsonLd arrray",function(){return F(this,void 0,void 0,function(){var t,n,r,o,i;return __generator(this,function(a){switch(a.label){case 0:return t=document.head,n=t.querySelector('[data-name="https://vamtiger-project.github.io/vamtiger-mental-health-botswana-json-ld/build/vamtiger-mental-health-botswana-2018-json-ld.js"]'),r=n&&Re(n.innerHTML),(i=r)?[4,function(e){var t=this;return new Promise(function(n,r){return F(t,void 0,void 0,function(){return __generator(this,function(t){return De?De(function(){return Ie(e).then(n)}):setTimeout(function(){return Ie(e).then(n)},0),[2]})})})}({jsonLd:r})]:[3,2];case 1:i=a.sent(),a.label=2;case 2:return o=i,e.expect(o).to.be.ok,[2]}})})})})};addEventListener("load",function(){t.setup("bdd"),describe("load vamtiger-browser-method",function(){it("load script",Se),it("window.VamtigerBrowserMethod",xe)}),describe("loadScript",function(){before(function(){return F(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return e=window.VamtigerBrowserMethod,t=e.loadScript,[4,Promise.all(Le.map(function(e){return t({src:e})}))];case 1:return n.sent(),[4,Promise.all(Oe.map(function(e){return t({href:e})}))];case 2:return n.sent(),[2]}})})}),it("Append to Document Head",function(){return F(this,void 0,void 0,function(){var t,n,r,o,i;return __generator(this,function(a){return t=document.head,n='script[src="'+Ee+'"]',r='link[href="'+Me+'"]',o=t.querySelector(n),i=t.querySelector(r),e.expect(o).to.be.ok,e.expect(i).to.be.ok,[2]})})}),it("Append once per script",function(){return F(this,void 0,void 0,function(){var t,n,r,o,i;return __generator(this,function(a){return t=document.head,n='script[src="'+Ee+'"]',r='link[href="'+Me+'"]',o=Array.from(t.querySelectorAll(n)),i=Array.from(t.querySelectorAll(r)),e.expect(o.length).to.equal(1),e.expect(i.length).to.equal(1),[2]})})}),it("remote script",function(){return F(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,(0,window.VamtigerBrowserMethod.loadScript)({src:Ee})];case 1:return t=n.sent(),e.expect(t instanceof HTMLScriptElement).to.be.true,[2]}})})}),it("remote stylesheet",function(){return F(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,(0,window.VamtigerBrowserMethod.loadScript)({href:Me})];case 1:return t=n.sent(),e.expect(t instanceof HTMLLinkElement).to.be.true,[2]}})})}),it("inline script",function(){return F(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,(0,window.VamtigerBrowserMethod.loadScript)({js:'console.log("inline script");',name:"inline-script"})];case 1:return t=n.sent(),e.expect(t instanceof HTMLScriptElement).to.be.true,e.expect(t.dataset.name).to.equal("inline-script"),[2]}})})}),it("inline stylesheet",function(){return F(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return[4,(0,window.VamtigerBrowserMethod.loadScript)({css:"/** Inline Stylesheet **/",name:"inline-stylesheet"})];case 1:return t=n.sent(),e.expect(t instanceof HTMLStyleElement).to.be.true,e.expect(t.dataset.name).to.equal("inline-stylesheet"),[2]}})})})}),describe("defineCustomElement",function(){before(function(){(0,window.VamtigerBrowserMethod.defineCustomElement)({name:"new-custom-element",constructor:HTMLElement})}),it("define a new custom element",function(){return F(this,void 0,void 0,function(){var t;return __generator(this,function(n){return t=window.customElements,e.expect(t.get("new-custom-element")).to.be.ok,[2]})})}),it("throw an error when already defined",function(){return F(this,void 0,void 0,function(){var t,n,r;return __generator(this,function(o){return t=window.VamtigerBrowserMethod,n=t.defineCustomElement,r={name:"new-custom-element",constructor:HTMLElement},[2,Promise.resolve().then(function(){return n(r)}).catch(function(t){return e.expect(t).to.be.an("error")})]})})})}),describe("getTemplate",function(){this.timeout(5e3),it("template",Te),it("url",Pe)}),describe("getData",function(){this.timeout(5e3),before(function(){document.documentElement.dataset.vamtigerTextMode=""}),it("json-ld",Ce)}),We(),t.run()})}(chai,mocha);
//# sourceMappingURL=browser.js.map
