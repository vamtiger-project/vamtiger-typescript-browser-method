!function(){"use strict";function e(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}l((r=r.apply(e,t)).next())})}var t,n,r,o,i,a,s,l,c,u,m;!function(e){e.jsonld="application/ld+json"}(t||(t={})),function(e){e.type="type"}(n||(n={})),function(e){e.vamtigerElementQuery="vamtigerLoadElementQueryCss",e.elementQueryCssLoaded="elementQueryCssLoaded"}(r||(r={})),function(e){e.failedToLoadScript="Failed to load script",e.windowPropertyNotSet="Window property not set",e.unsupportedFeature="Unsupported feature",e.customElementAreadyDefined="Custom element already defined",e.noElementName="No Element Name",e.noTemplateUrl="No Template URL",e.noElementSelector="No Template Selector",e.noTemplateForUrl="No Template for URL",e.noTemplate="No Template",e.noElementForSelector="No Element for Selector"}(o||(o={})),function(e){e.nothing="",e.slash="/",e.dash="-"}(i||(i={})),function(e){e.div="div"}(a||(a={})),function(e){e.stylesheet="stylesheet"}(s||(s={})),function(e){e.script="script",e.link="link",e.style="style"}(l||(l={})),function(e){e.lastStylesheet="style:last-of-type",e.lastMetaElement="head > meta:last-of-type",e.webcomponentsjs='script[src*="@webcomponents/webcomponentsjs"]',e.style="style",e.stylesheet=' link[rel="stylesheet"]'}(c||(c={})),function(e){e.loadElementQueryCss="vamtiger-load-element-query-css"}(u||(u={})),function(e){e.style="style",e.stylesheet="stylesheet"}(m||(m={}));var d=/:{1,2}host/gm,f=(new RegExp(i.dash,"g"),/\W+/g),h=i.nothing;var p=i.nothing,y=f,w=function(e){return e.split(y).map(function(e,t){return!t&&e.toLowerCase()||e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}).join(p)},v=d,E=i.nothing;function S(e){var t=e.css,n=e.stylesheetName,r=void 0===n?E:n,o=e.hostName,i=void 0===o?E:o,a=function(e){var t=e.selector,n=void 0===t?h:t,r=e.properties,o=void 0===r?{}:r,i=e.dataset,a=void 0===i?{}:i,s=e.attributes,l=void 0===s?{}:s,u=o.id,m=document.head,d=m.querySelector(c.lastMetaElement),f=Object.keys(l),p=u&&(window[u]||n&&m.querySelector(n)),y=!p&&document.createElement("meta"),w=p||y;return y&&(Object.assign(y,o),Object.assign(y.dataset,a),d&&d.nextElementSibling?m.insertBefore(y,d.nextElementSibling):m.appendChild(y)),f.forEach(function(e){return!w.hasAttribute(e)&&w.setAttribute(void 0,l[e])}),w}({properties:{id:u.loadElementQueryCss}}),s=w(r),l=a.dataset,m=!l.hasOwnProperty(i)&&i&&t.replace(v,i)||t,d=window.EQCSS;m&&d&&(d.register(d.parse(m)),s?l[s]=E:i&&(l[i]=E))}var g=o.failedToLoadScript,b=s.stylesheet,L=l.script,T=l.link,C=l.style,N=function(e){return new Promise(function(r,o){var i=document.head,a=document.body,s=e,l=s.js,c=s.name,u=s.jsonld,m=s.removeFromDom,d=e.src,f=e,h=f.css,p=f.name,y=e.href,w=e.hasOwnProperty("src")||e.hasOwnProperty("href"),v=(l||d)&&L||h&&C||y&&T,E=d&&'script[src="'+d+'"]'||y&&'link[href="'+y+'"]'||l&&c&&'script[data-name="'+c+'"]'||h&&p&&'style[data-name="'+p+'"]',N=i.querySelector(E)||a.querySelector(E),M=E&&v&&document.createElement(v);function P(){M&&(q(),m&&i.removeChild(M),r(M))}function j(e){q(),console.error(e),o(new Error(""+g))}function q(){M&&(M.removeEventListener("load",P),M.removeEventListener("error",j))}M instanceof HTMLScriptElement?d?M.src=d:l&&(M.innerHTML=l,M.dataset.name=c,u&&M.setAttribute(n.type,t.jsonld)):M instanceof HTMLLinkElement?(M.rel=b,M.href=y):M instanceof HTMLStyleElement&&(M.innerHTML=h,M.dataset.name=p,S({css:h,stylesheetName:p})),N?r(N):M&&(M.addEventListener("load",P),M.addEventListener("error",j),i.appendChild(M),w||P())})};var M=o.unsupportedFeature,P=o.customElementAreadyDefined;var j=a.div,q=o.noElementName,A=o.noTemplate,_=o.noElementForSelector;var k=a.div,F=o.noElementName,H=o.noElementSelector,x=o.noTemplateUrl,U=o.noTemplateForUrl,Q=o.noElementForSelector;var O=i.dash;function B(e){return new Promise(function(t,n){var r=window.requestIdleCallback;r?r(function(){return R(e,t)}):R(e,t)})}function R(t,n){return e(this,void 0,void 0,function(){var e,r,o,i,a;return __generator(this,function(s){switch(s.label){case 0:return e=t.element,r=t.name,o=Array.from(e.querySelectorAll(c.style)).map(function(e,t){return{name:[r,m.style,t].join(O),css:e.innerHTML}}),i=Array.from(e.querySelectorAll(c.stylesheet)).map(function(e,t){return{name:[r,m.stylesheet,t].join(O),href:e.href}}),[4,Promise.all(o.map(N).concat(i.map(N)))];case 1:return a=s.sent(),n(a),[2]}})})}function D(t,n){return e(this,void 0,void 0,function(){var r,o,i;return __generator(this,function(a){switch(a.label){case 0:return r=t.loadStylesheets,o=t.name,t.url?[4,function(t){var n=t.name,r=t.url,o=t.selector;return t.loadStylesheets,e(this,void 0,void 0,function(){var e,t,i,a;return __generator(this,function(s){switch(s.label){case 0:return document.head,(t=n&&o&&r)?[4,fetch(r).then(function(e){return e.text()})]:[3,2];case 1:t=s.sent(),s.label=2;case 2:if(i=(e=t)&&document.createElement(k),a=null,!n)throw new Error(F);if(!o)throw new Error(H);if(!r)throw new Error(x);if(!e)throw new Error(U);if(i&&(i.innerHTML=e,a=i.querySelector(o)),!a)throw new Error(Q);return a.setAttribute("dataset-name",n),[2,a]}})})}(t)]:[3,2];case 1:return i=a.sent(),[3,3];case 2:i=function(e){var t=e.name,n=e.template,r=t&&n&&document.createElement(j),o=null;if(!t)throw new Error(q);if(!n)throw new Error(A);if(r&&(r.innerHTML=n,o=r.firstElementChild),!o)throw new Error(_);return o.dataset.name=t,o}(t),a.label=3;case 3:return r&&i?[4,B({element:i,name:o})]:[3,5];case 4:a.sent(),a.label=5;case 5:return n(i),[2]}})})}var V=window.VamtigerBrowserMethod,I={loadScript:N,loadScripts:function(e){return Promise.all(e.map(N))},loadScriptsSequentially:function(t){return new Promise(function(n,r){var o=new Set,i=Promise.resolve();return t.forEach(function(t){i=i.then(function(){return e(void 0,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,Promise.all(t.map(N))];case 1:return[2,e.sent()]}})})}).then(function(e){return e.forEach(function(e){return o.add(e)})})}),i=i.then(function(){return n(Array.from(o))})})},loadShadowStylesheet:function(e){var t=e.css,n=e.element,r=n.shadowRoot,o=(n.localName,r&&r.querySelector(c.lastStylesheet)),i=r&&document.createElement("style");i&&r&&(i.innerHTML=t,o&&o.nextElementSibling?r.insertBefore(i,o.nextElementSibling):r.appendChild(i))},defineCustomElement:function e(t){var n=t.name,r=t.constructor,o=t.ignore,i=window.customElements,a=i&&i.define,s=a&&i.get&&i.get(n);if(a&&!s)i.define(n,r);else{if(s)throw new Error(P+": "+n);if(o)throw new Error(M+": Custom Elements - "+n);e({name:n,constructor:r,ignore:!0})}},pause:function(e){var t=e.milliseconds,n=void 0===t?1e3:t;return new Promise(function(e,t){return setTimeout(e,n)})},getElement:function(t){return e(this,void 0,void 0,function(){return __generator(this,function(e){return[2,new Promise(function(e,n){var r=window.requestIdleCallback;r?r(function(){return D(t,e)}):D(t,e)})]})})}};try{V||(window.VamtigerBrowserMethod=I)}catch(e){global.VamtigerBrowserMethod=V}}();
//# sourceMappingURL=vamtiger-browser-method.js.map
