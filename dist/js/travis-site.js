/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.1.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.1",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=lt(),k=lt(),E=lt(),S=!1,A=function(){return 0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=bt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+xt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return At(e.replace(z,"$1"),t,n,i)}function st(e){return K.test(e+"")}function lt(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[b]=!0,e}function ct(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function pt(e,t,n){e=e.split("|");var r,i=e.length,a=n?null:t;while(i--)(r=o.attrHandle[e[i]])&&r!==t||(o.attrHandle[e[i]]=a)}function ft(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function dt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:t}function gt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function yt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function vt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.parentWindow;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.frameElement&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ct(function(e){return e.innerHTML="<a href='#'></a>",pt("type|href|height|width",dt,"#"===e.firstChild.getAttribute("href")),pt(B,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),r.input=ct(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),pt("value",ht,r.attributes&&r.input),r.getElementsByTagName=ct(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ct(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ct(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=st(n.querySelectorAll))&&(ct(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ct(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=st(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ct(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=st(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},r.sortDetached=ct(function(e){return 1&e.compareDocumentPosition(n.createElement("div"))}),A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return gt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?gt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=bt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?ut(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return at(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:vt(function(){return[0]}),last:vt(function(e,t){return[t-1]}),eq:vt(function(e,t,n){return[0>n?n+t:n]}),even:vt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:vt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:vt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:vt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=mt(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=yt(n);function bt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function wt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function Tt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Ct(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function Nt(e,t,n,r,i,o){return r&&!r[b]&&(r=Nt(r)),i&&!i[b]&&(i=Nt(i,o)),ut(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||St(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:Ct(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=Ct(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=Ct(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function kt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=wt(function(e){return e===t},s,!0),p=wt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[wt(Tt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return Nt(l>1&&Tt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),i>r&&kt(e=e.slice(r)),i>r&&xt(e))}f.push(n)}return Tt(f)}function Et(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=Ct(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?ut(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=bt(e)),n=t.length;while(n--)o=kt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Et(i,r))}return o};function St(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function At(e,t,n,i){var a,s,u,c,p,f=bt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&xt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}o.pseudos.nth=o.pseudos.eq;function jt(){}jt.prototype=o.filters=o.pseudos,o.setFilters=new jt,r.sortStable=b.split("").sort(A).join("")===b,p(),[0,0].sort(A),r.detectDuplicates=S,x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!u||(n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
}),n=s=l=u=r=o=null,t}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=x(this),l=t,u=e.match(T)||[];while(o=u[a++])l=r?l:!s.hasClass(o),s[l?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
;
/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/**
 * EvEmitter v1.0.3
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var i = 0;
  var listener = listeners[i];
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  while ( listener ) {
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
    // get next listener
    i += isOnce ? 0 : 1;
    listener = listeners[i];
  }

  return this;
};

return EvEmitter;

}));

/*!
 * imagesLoaded v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( window,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {



var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  if ( typeof elem == 'string' ) {
    elem = document.querySelectorAll( elem );
  }

  this.elements = makeArray( elem );
  this.options = extend( {}, this.options );

  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( function() {
    this.check();
  }.bind( this ));
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  return this.img.complete && this.img.naturalWidth !== undefined;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});

;
/*!
 * Masonry PACKAGED v4.1.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      return factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));

/**
 * EvEmitter v1.0.3
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var i = 0;
  var listener = listeners[i];
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  while ( listener ) {
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
    // get next listener
    i += isOnce ? 0 : 1;
    listener = listeners[i];
  }

  return this;
};

return EvEmitter;

}));

/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false, console: false */

( function( window, factory ) {
  'use strict';

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'get-size/get-size',[],function() {
      return factory();
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See http://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );

  getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
  body.removeChild( div );

}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

/**
 * matchesSelector v2.0.1
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'desandro-matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

/**
 * Fizzy UI utils v2.0.2
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  var ary = [];
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( obj && typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    if ( timeout ) {
      clearTimeout( timeout );
    }
    var args = arguments;

    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold || 100 );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    callback();
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('layoutname')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/item',[
        'ev-emitter/ev-emitter',
        'get-size/get-size'
      ],
      factory
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize
    );
  }

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  // convert percent to pixels
  var layoutSize = this.layout.size;
  var x = xValue.indexOf('%') != -1 ?
    ( parseFloat( xValue ) / 100 ) * layoutSize.width : parseInt( xValue, 10 );
  var y = yValue.indexOf('%') != -1 ?
    ( parseFloat( yValue ) / 100 ) * layoutSize.height : parseInt( yValue, 10 );

  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var compareX = parseInt( x, 10 );
  var compareY = parseInt( y, 10 );
  var didNotMove = compareX === this.position.x && compareY === this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseInt( x, 10 );
  this.position.y = parseInt( y, 10 );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

/*!
 * Outlayer v2.1.0
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/outlayer',[
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));

/*!
 * Masonry v4.1.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'outlayer/outlayer',
        'get-size/get-size'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}( window, function factory( Outlayer, getSize ) {



// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  Masonry.prototype._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
  };

  Masonry.prototype.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  Masonry.prototype.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  Masonry.prototype._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );

    var colGroup = this._getColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );
    var shortColIndex = colGroup.indexOf( minimumY );

    // position the brick
    var position = {
      x: this.columnWidth * shortColIndex,
      y: minimumY
    };

    // apply setHeight to necessary columns
    var setHeight = minimumY + item.size.outerHeight;
    var setSpan = this.cols + 1 - colGroup.length;
    for ( var i = 0; i < setSpan; i++ ) {
      this.colYs[ shortColIndex + i ] = setHeight;
    }

    return position;
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  Masonry.prototype._getColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      // make an array of colY values for that one group
      var groupColYs = this.colYs.slice( i, i + colSpan );
      // and get the max value of the array
      colGroup[i] = Math.max.apply( Math, groupColYs );
    }
    return colGroup;
  };

  Masonry.prototype._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  Masonry.prototype._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  Masonry.prototype._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  Masonry.prototype.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));

;
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

(function (window, document, $, undefined) {
	"use strict";

	var H = $("html"),
		W = $(window),
		D = $(document),
		F = $.fancybox = function () {
			F.open.apply( this, arguments );
		},
		IE =  navigator.userAgent.match(/msie/i),
		didUpdate	= null,
		isTouch		= document.createTouch !== undefined,

		isQuery	= function(obj) {
			return obj && obj.hasOwnProperty && obj instanceof $;
		},
		isString = function(str) {
			return str && $.type(str) === "string";
		},
		isPercentage = function(str) {
			return isString(str) && str.indexOf('%') > 0;
		},
		isScrollable = function(el) {
			return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
		},
		getScalar = function(orig, dim) {
			var value = parseInt(orig, 10) || 0;

			if (dim && isPercentage(orig)) {
				value = F.getViewport()[ dim ] / 100 * value;
			}

			return Math.ceil(value);
		},
		getValue = function(value, dim) {
			return getScalar(value, dim) + 'px';
		};

	$.extend(F, {
		// The current version of fancyBox
		version: '2.1.5',

		defaults: {
			padding : 15,
			margin  : 20,

			width     : 800,
			height    : 600,
			minWidth  : 100,
			minHeight : 100,
			maxWidth  : 9999,
			maxHeight : 9999,
			pixelRatio: 1, // Set to 2 for retina display support

			autoSize   : true,
			autoHeight : false,
			autoWidth  : false,

			autoResize  : true,
			autoCenter  : !isTouch,
			fitToView   : true,
			aspectRatio : false,
			topRatio    : 0.5,
			leftRatio   : 0.5,

			scrolling : 'auto', // 'auto', 'yes' or 'no'
			wrapCSS   : '',

			arrows     : true,
			closeBtn   : true,
			closeClick : false,
			nextClick  : false,
			mouseWheel : true,
			autoPlay   : false,
			playSpeed  : 3000,
			preload    : 3,
			modal      : false,
			loop       : true,

			ajax  : {
				dataType : 'html',
				headers  : { 'X-fancyBox': true }
			},
			iframe : {
				scrolling : 'auto',
				preload   : true
			},
			swf : {
				wmode: 'transparent',
				allowfullscreen   : 'true',
				allowscriptaccess : 'always'
			},

			keys  : {
				next : {
					13 : 'left', // enter
					34 : 'up',   // page down
					39 : 'left', // right arrow
					40 : 'up'    // down arrow
				},
				prev : {
					8  : 'right',  // backspace
					33 : 'down',   // page up
					37 : 'right',  // left arrow
					38 : 'down'    // up arrow
				},
				close  : [27], // escape key
				play   : [32], // space - start/stop slideshow
				toggle : [70]  // letter "f" - toggle fullscreen
			},

			direction : {
				next : 'left',
				prev : 'right'
			},

			scrollOutside  : true,

			// Override some properties
			index   : 0,
			type    : null,
			href    : null,
			content : null,
			title   : null,

			// HTML templates
			tpl: {
				wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image    : '<img class="fancybox-image" src="{href}" alt="" />',
				iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
				error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},

			// Properties for each animation type
			// Opening fancyBox
			openEffect  : 'fade', // 'elastic', 'fade' or 'none'
			openSpeed   : 250,
			openEasing  : 'swing',
			openOpacity : true,
			openMethod  : 'zoomIn',

			// Closing fancyBox
			closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
			closeSpeed   : 250,
			closeEasing  : 'swing',
			closeOpacity : true,
			closeMethod  : 'zoomOut',

			// Changing next gallery item
			nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
			nextSpeed  : 250,
			nextEasing : 'swing',
			nextMethod : 'changeIn',

			// Changing previous gallery item
			prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
			prevSpeed  : 250,
			prevEasing : 'swing',
			prevMethod : 'changeOut',

			// Enable default helpers
			helpers : {
				overlay : true,
				title   : true
			},

			// Callbacks
			onCancel     : $.noop, // If canceling
			beforeLoad   : $.noop, // Before loading
			afterLoad    : $.noop, // After loading
			beforeShow   : $.noop, // Before changing in current item
			afterShow    : $.noop, // After opening
			beforeChange : $.noop, // Before changing gallery item
			beforeClose  : $.noop, // Before closing
			afterClose   : $.noop  // After closing
		},

		//Current state
		group    : {}, // Selected group
		opts     : {}, // Group options
		previous : null,  // Previous element
		coming   : null,  // Element being loaded
		current  : null,  // Currently loaded element
		isActive : false, // Is activated
		isOpen   : false, // Is currently open
		isOpened : false, // Have been fully opened at least once

		wrap  : null,
		skin  : null,
		outer : null,
		inner : null,

		player : {
			timer    : null,
			isActive : false
		},

		// Loaders
		ajaxLoad   : null,
		imgPreload : null,

		// Some collections
		transitions : {},
		helpers     : {},

		/*
		 *	Static methods
		 */

		open: function (group, opts) {
			if (!group) {
				return;
			}

			if (!$.isPlainObject(opts)) {
				opts = {};
			}

			// Close if already active
			if (false === F.close(true)) {
				return;
			}

			// Normalize group
			if (!$.isArray(group)) {
				group = isQuery(group) ? $(group).get() : [group];
			}

			// Recheck if the type of each element is `object` and set content type (image, ajax, etc)
			$.each(group, function(i, element) {
				var obj = {},
					href,
					title,
					content,
					type,
					rez,
					hrefParts,
					selector;

				if ($.type(element) === "object") {
					// Check if is DOM element
					if (element.nodeType) {
						element = $(element);
					}

					if (isQuery(element)) {
						obj = {
							href    : element.data('fancybox-href') || element.attr('href'),
							title   : element.data('fancybox-title') || element.attr('title'),
							isDom   : true,
							element : element
						};

						if ($.metadata) {
							$.extend(true, obj, element.metadata());
						}

					} else {
						obj = element;
					}
				}

				href  = opts.href  || obj.href || (isString(element) ? element : null);
				title = opts.title !== undefined ? opts.title : obj.title || '';

				content = opts.content || obj.content;
				type    = content ? 'html' : (opts.type  || obj.type);

				if (!type && obj.isDom) {
					type = element.data('fancybox-type');

					if (!type) {
						rez  = element.prop('class').match(/fancybox\.(\w+)/);
						type = rez ? rez[1] : null;
					}
				}

				if (isString(href)) {
					// Try to guess the content type
					if (!type) {
						if (F.isImage(href)) {
							type = 'image';

						} else if (F.isSWF(href)) {
							type = 'swf';

						} else if (href.charAt(0) === '#') {
							type = 'inline';

						} else if (isString(element)) {
							type    = 'html';
							content = element;
						}
					}

					// Split url into two pieces with source url and content selector, e.g,
					// "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
					if (type === 'ajax') {
						hrefParts = href.split(/\s+/, 2);
						href      = hrefParts.shift();
						selector  = hrefParts.shift();
					}
				}

				if (!content) {
					if (type === 'inline') {
						if (href) {
							content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

						} else if (obj.isDom) {
							content = element;
						}

					} else if (type === 'html') {
						content = href;

					} else if (!type && !href && obj.isDom) {
						type    = 'inline';
						content = element;
					}
				}

				$.extend(obj, {
					href     : href,
					type     : type,
					content  : content,
					title    : title,
					selector : selector
				});

				group[ i ] = obj;
			});

			// Extend the defaults
			F.opts = $.extend(true, {}, F.defaults, opts);

			// All options are merged recursive except keys
			if (opts.keys !== undefined) {
				F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
			}

			F.group = group;

			return F._start(F.opts.index);
		},

		// Cancel image loading or abort ajax request
		cancel: function () {
			var coming = F.coming;

			if (!coming || false === F.trigger('onCancel')) {
				return;
			}

			F.hideLoading();

			if (F.ajaxLoad) {
				F.ajaxLoad.abort();
			}

			F.ajaxLoad = null;

			if (F.imgPreload) {
				F.imgPreload.onload = F.imgPreload.onerror = null;
			}

			if (coming.wrap) {
				coming.wrap.stop(true, true).trigger('onReset').remove();
			}

			F.coming = null;

			// If the first item has been canceled, then clear everything
			if (!F.current) {
				F._afterZoomOut( coming );
			}
		},

		// Start closing animation if is open; remove immediately if opening/closing
		close: function (event) {
			F.cancel();

			if (false === F.trigger('beforeClose')) {
				return;
			}

			F.unbindEvents();

			if (!F.isActive) {
				return;
			}

			if (!F.isOpen || event === true) {
				$('.fancybox-wrap').stop(true).trigger('onReset').remove();

				F._afterZoomOut();

			} else {
				F.isOpen = F.isOpened = false;
				F.isClosing = true;

				$('.fancybox-item, .fancybox-nav').remove();

				F.wrap.stop(true, true).removeClass('fancybox-opened');

				F.transitions[ F.current.closeMethod ]();
			}
		},

		// Manage slideshow:
		//   $.fancybox.play(); - toggle slideshow
		//   $.fancybox.play( true ); - start
		//   $.fancybox.play( false ); - stop
		play: function ( action ) {
			var clear = function () {
					clearTimeout(F.player.timer);
				},
				set = function () {
					clear();

					if (F.current && F.player.isActive) {
						F.player.timer = setTimeout(F.next, F.current.playSpeed);
					}
				},
				stop = function () {
					clear();

					D.unbind('.player');

					F.player.isActive = false;

					F.trigger('onPlayEnd');
				},
				start = function () {
					if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
						F.player.isActive = true;

						D.bind({
							'onCancel.player beforeClose.player' : stop,
							'onUpdate.player'   : set,
							'beforeLoad.player' : clear
						});

						set();

						F.trigger('onPlayStart');
					}
				};

			if (action === true || (!F.player.isActive && action !== false)) {
				start();
			} else {
				stop();
			}
		},

		// Navigate to next gallery item
		next: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.next;
				}

				F.jumpto(current.index + 1, direction, 'next');
			}
		},

		// Navigate to previous gallery item
		prev: function ( direction ) {
			var current = F.current;

			if (current) {
				if (!isString(direction)) {
					direction = current.direction.prev;
				}

				F.jumpto(current.index - 1, direction, 'prev');
			}
		},

		// Navigate to gallery item by index
		jumpto: function ( index, direction, router ) {
			var current = F.current;

			if (!current) {
				return;
			}

			index = getScalar(index);

			F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
			F.router    = router || 'jumpto';

			if (current.loop) {
				if (index < 0) {
					index = current.group.length + (index % current.group.length);
				}

				index = index % current.group.length;
			}

			if (current.group[ index ] !== undefined) {
				F.cancel();

				F._start(index);
			}
		},

		// Center inside viewport and toggle position type to fixed or absolute if needed
		reposition: function (e, onlyAbsolute) {
			var current = F.current,
				wrap    = current ? current.wrap : null,
				pos;

			if (wrap) {
				pos = F._getPosition(onlyAbsolute);

				if (e && e.type === 'scroll') {
					delete pos.position;

					wrap.stop(true, true).animate(pos, 200);

				} else {
					wrap.css(pos);

					current.pos = $.extend({}, current.dim, pos);
				}
			}
		},

		update: function (e) {
			var type = (e && e.type),
				anyway = !type || type === 'orientationchange';

			if (anyway) {
				clearTimeout(didUpdate);

				didUpdate = null;
			}

			if (!F.isOpen || didUpdate) {
				return;
			}

			didUpdate = setTimeout(function() {
				var current = F.current;

				if (!current || F.isClosing) {
					return;
				}

				F.wrap.removeClass('fancybox-tmp');

				if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
					F._setDimension();
				}

				if (!(type === 'scroll' && current.canShrink)) {
					F.reposition(e);
				}

				F.trigger('onUpdate');

				didUpdate = null;

			}, (anyway && !isTouch ? 0 : 300));
		},

		// Shrink content to fit inside viewport or restore if resized
		toggle: function ( action ) {
			if (F.isOpen) {
				F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

				// Help browser to restore document dimensions
				if (isTouch) {
					F.wrap.removeAttr('style').addClass('fancybox-tmp');

					F.trigger('onUpdate');
				}

				F.update();
			}
		},

		hideLoading: function () {
			D.unbind('.loading');

			$('#fancybox-loading').remove();
		},

		showLoading: function () {
			var el, viewport;

			F.hideLoading();

			el = $('<div id="fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

			// If user will press the escape-button, the request will be canceled
			D.bind('keydown.loading', function(e) {
				if ((e.which || e.keyCode) === 27) {
					e.preventDefault();

					F.cancel();
				}
			});

			if (!F.defaults.fixed) {
				viewport = F.getViewport();

				el.css({
					position : 'absolute',
					top  : (viewport.h * 0.5) + viewport.y,
					left : (viewport.w * 0.5) + viewport.x
				});
			}
		},

		getViewport: function () {
			var locked = (F.current && F.current.locked) || false,
				rez    = {
					x: W.scrollLeft(),
					y: W.scrollTop()
				};

			if (locked) {
				rez.w = locked[0].clientWidth;
				rez.h = locked[0].clientHeight;

			} else {
				// See http://bugs.jquery.com/ticket/6724
				rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
				rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
			}

			return rez;
		},

		// Unbind the keyboard / clicking actions
		unbindEvents: function () {
			if (F.wrap && isQuery(F.wrap)) {
				F.wrap.unbind('.fb');
			}

			D.unbind('.fb');
			W.unbind('.fb');
		},

		bindEvents: function () {
			var current = F.current,
				keys;

			if (!current) {
				return;
			}

			// Changing document height on iOS devices triggers a 'resize' event,
			// that can change document height... repeating infinitely
			W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

			keys = current.keys;

			if (keys) {
				D.bind('keydown.fb', function (e) {
					var code   = e.which || e.keyCode,
						target = e.target || e.srcElement;

					// Skip esc key if loading, because showLoading will cancel preloading
					if (code === 27 && F.coming) {
						return false;
					}

					// Ignore key combinations and key events within form elements
					if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
						$.each(keys, function(i, val) {
							if (current.group.length > 1 && val[ code ] !== undefined) {
								F[ i ]( val[ code ] );

								e.preventDefault();
								return false;
							}

							if ($.inArray(code, val) > -1) {
								F[ i ] ();

								e.preventDefault();
								return false;
							}
						});
					}
				});
			}

			if ($.fn.mousewheel && current.mouseWheel) {
				F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
					var target = e.target || null,
						parent = $(target),
						canScroll = false;

					while (parent.length) {
						if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
							break;
						}

						canScroll = isScrollable( parent[0] );
						parent    = $(parent).parent();
					}

					if (delta !== 0 && !canScroll) {
						if (F.group.length > 1 && !current.canShrink) {
							if (deltaY > 0 || deltaX > 0) {
								F.prev( deltaY > 0 ? 'down' : 'left' );

							} else if (deltaY < 0 || deltaX < 0) {
								F.next( deltaY < 0 ? 'up' : 'right' );
							}

							e.preventDefault();
						}
					}
				});
			}
		},

		trigger: function (event, o) {
			var ret, obj = o || F.coming || F.current;

			if (!obj) {
				return;
			}

			if ($.isFunction( obj[event] )) {
				ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
			}

			if (ret === false) {
				return false;
			}

			if (obj.helpers) {
				$.each(obj.helpers, function (helper, opts) {
					if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
						F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
					}
				});
			}

			D.trigger(event);
		},

		isImage: function (str) {
			return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
		},

		isSWF: function (str) {
			return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
		},

		_start: function (index) {
			var coming = {},
				obj,
				href,
				type,
				margin,
				padding;

			index = getScalar( index );
			obj   = F.group[ index ] || null;

			if (!obj) {
				return false;
			}

			coming = $.extend(true, {}, F.opts, obj);

			// Convert margin and padding properties to array - top, right, bottom, left
			margin  = coming.margin;
			padding = coming.padding;

			if ($.type(margin) === 'number') {
				coming.margin = [margin, margin, margin, margin];
			}

			if ($.type(padding) === 'number') {
				coming.padding = [padding, padding, padding, padding];
			}

			// 'modal' propery is just a shortcut
			if (coming.modal) {
				$.extend(true, coming, {
					closeBtn   : false,
					closeClick : false,
					nextClick  : false,
					arrows     : false,
					mouseWheel : false,
					keys       : null,
					helpers: {
						overlay : {
							closeClick : false
						}
					}
				});
			}

			// 'autoSize' property is a shortcut, too
			if (coming.autoSize) {
				coming.autoWidth = coming.autoHeight = true;
			}

			if (coming.width === 'auto') {
				coming.autoWidth = true;
			}

			if (coming.height === 'auto') {
				coming.autoHeight = true;
			}

			/*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

			coming.group  = F.group;
			coming.index  = index;

			// Give a chance for callback or helpers to update coming item (type, title, etc)
			F.coming = coming;

			if (false === F.trigger('beforeLoad')) {
				F.coming = null;

				return;
			}

			type = coming.type;
			href = coming.href;

			if (!type) {
				F.coming = null;

				//If we can not determine content type then drop silently or display next/prev item if looping through gallery
				if (F.current && F.router && F.router !== 'jumpto') {
					F.current.index = index;

					return F[ F.router ]( F.direction );
				}

				return false;
			}

			F.isActive = true;

			if (type === 'image' || type === 'swf') {
				coming.autoHeight = coming.autoWidth = false;
				coming.scrolling  = 'visible';
			}

			if (type === 'image') {
				coming.aspectRatio = true;
			}

			if (type === 'iframe' && isTouch) {
				coming.scrolling = 'scroll';
			}

			// Build the neccessary markup
			coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

			$.extend(coming, {
				skin  : $('.fancybox-skin',  coming.wrap),
				outer : $('.fancybox-outer', coming.wrap),
				inner : $('.fancybox-inner', coming.wrap)
			});

			$.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
				coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
			});

			F.trigger('onReady');

			// Check before try to load; 'inline' and 'html' types need content, others - href
			if (type === 'inline' || type === 'html') {
				if (!coming.content || !coming.content.length) {
					return F._error( 'content' );
				}

			} else if (!href) {
				return F._error( 'href' );
			}

			if (type === 'image') {
				F._loadImage();

			} else if (type === 'ajax') {
				F._loadAjax();

			} else if (type === 'iframe') {
				F._loadIframe();

			} else {
				F._afterLoad();
			}
		},

		_error: function ( type ) {
			$.extend(F.coming, {
				type       : 'html',
				autoWidth  : true,
				autoHeight : true,
				minWidth   : 0,
				minHeight  : 0,
				scrolling  : 'no',
				hasError   : type,
				content    : F.coming.tpl.error
			});

			F._afterLoad();
		},

		_loadImage: function () {
			// Reset preload image so it is later possible to check "complete" property
			var img = F.imgPreload = new Image();

			img.onload = function () {
				this.onload = this.onerror = null;

				F.coming.width  = this.width / F.opts.pixelRatio;
				F.coming.height = this.height / F.opts.pixelRatio;

				F._afterLoad();
			};

			img.onerror = function () {
				this.onload = this.onerror = null;

				F._error( 'image' );
			};

			img.src = F.coming.href;

			if (img.complete !== true) {
				F.showLoading();
			}
		},

		_loadAjax: function () {
			var coming = F.coming;

			F.showLoading();

			F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
				url: coming.href,
				error: function (jqXHR, textStatus) {
					if (F.coming && textStatus !== 'abort') {
						F._error( 'ajax', jqXHR );

					} else {
						F.hideLoading();
					}
				},
				success: function (data, textStatus) {
					if (textStatus === 'success') {
						coming.content = data;

						F._afterLoad();
					}
				}
			}));
		},

		_loadIframe: function() {
			var coming = F.coming,
				iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
					.attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
					.attr('src', coming.href);

			// This helps IE
			$(coming.wrap).bind('onReset', function () {
				try {
					$(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
				} catch (e) {}
			});

			if (coming.iframe.preload) {
				F.showLoading();

				iframe.one('load', function() {
					$(this).data('ready', 1);

					// iOS will lose scrolling if we resize
					if (!isTouch) {
						$(this).bind('load.fb', F.update);
					}

					// Without this trick:
					//   - iframe won't scroll on iOS devices
					//   - IE7 sometimes displays empty iframe
					$(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

					F._afterLoad();
				});
			}

			coming.content = iframe.appendTo( coming.inner );

			if (!coming.iframe.preload) {
				F._afterLoad();
			}
		},

		_preloadImages: function() {
			var group   = F.group,
				current = F.current,
				len     = group.length,
				cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
				item,
				i;

			for (i = 1; i <= cnt; i += 1) {
				item = group[ (current.index + i ) % len ];

				if (item.type === 'image' && item.href) {
					new Image().src = item.href;
				}
			}
		},

		_afterLoad: function () {
			var coming   = F.coming,
				previous = F.current,
				placeholder = 'fancybox-placeholder',
				current,
				content,
				type,
				scrolling,
				href,
				embed;

			F.hideLoading();

			if (!coming || F.isActive === false) {
				return;
			}

			if (false === F.trigger('afterLoad', coming, previous)) {
				coming.wrap.stop(true).trigger('onReset').remove();

				F.coming = null;

				return;
			}

			if (previous) {
				F.trigger('beforeChange', previous);

				previous.wrap.stop(true).removeClass('fancybox-opened')
					.find('.fancybox-item, .fancybox-nav')
					.remove();
			}

			F.unbindEvents();

			current   = coming;
			content   = coming.content;
			type      = coming.type;
			scrolling = coming.scrolling;

			$.extend(F, {
				wrap  : current.wrap,
				skin  : current.skin,
				outer : current.outer,
				inner : current.inner,
				current  : current,
				previous : previous
			});

			href = current.href;

			switch (type) {
				case 'inline':
				case 'ajax':
				case 'html':
					if (current.selector) {
						content = $('<div>').html(content).find(current.selector);

					} else if (isQuery(content)) {
						if (!content.data(placeholder)) {
							content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
						}

						content = content.show().detach();

						current.wrap.bind('onReset', function () {
							if ($(this).find(content).length) {
								content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
							}
						});
					}
				break;

				case 'image':
					content = current.tpl.image.replace('{href}', href);
				break;

				case 'swf':
					content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
					embed   = '';

					$.each(current.swf, function(name, val) {
						content += '<param name="' + name + '" value="' + val + '"></param>';
						embed   += ' ' + name + '="' + val + '"';
					});

					content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
				break;
			}

			if (!(isQuery(content) && content.parent().is(current.inner))) {
				current.inner.append( content );
			}

			// Give a chance for helpers or callbacks to update elements
			F.trigger('beforeShow');

			// Set scrolling before calculating dimensions
			current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

			// Set initial dimensions and start position
			F._setDimension();

			F.reposition();

			F.isOpen = false;
			F.coming = null;

			F.bindEvents();

			if (!F.isOpened) {
				$('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

			} else if (previous.prevMethod) {
				F.transitions[ previous.prevMethod ]();
			}

			F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

			F._preloadImages();
		},

		_setDimension: function () {
			var viewport   = F.getViewport(),
				steps      = 0,
				canShrink  = false,
				canExpand  = false,
				wrap       = F.wrap,
				skin       = F.skin,
				inner      = F.inner,
				current    = F.current,
				width      = current.width,
				height     = current.height,
				minWidth   = current.minWidth,
				minHeight  = current.minHeight,
				maxWidth   = current.maxWidth,
				maxHeight  = current.maxHeight,
				scrolling  = current.scrolling,
				scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
				margin     = current.margin,
				wMargin    = getScalar(margin[1] + margin[3]),
				hMargin    = getScalar(margin[0] + margin[2]),
				wPadding,
				hPadding,
				wSpace,
				hSpace,
				origWidth,
				origHeight,
				origMaxWidth,
				origMaxHeight,
				ratio,
				width_,
				height_,
				maxWidth_,
				maxHeight_,
				iframe,
				body;

			// Reset dimensions so we could re-check actual size
			wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

			wPadding = getScalar(skin.outerWidth(true)  - skin.width());
			hPadding = getScalar(skin.outerHeight(true) - skin.height());

			// Any space between content and viewport (margin, padding, border, title)
			wSpace = wMargin + wPadding;
			hSpace = hMargin + hPadding;

			origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
			origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

			if (current.type === 'iframe') {
				iframe = current.content;

				if (current.autoHeight && iframe.data('ready') === 1) {
					try {
						if (iframe[0].contentWindow.document.location) {
							inner.width( origWidth ).height(9999);

							body = iframe.contents().find('body');

							if (scrollOut) {
								body.css('overflow-x', 'hidden');
							}

							origHeight = body.outerHeight(true);
						}

					} catch (e) {}
				}

			} else if (current.autoWidth || current.autoHeight) {
				inner.addClass( 'fancybox-tmp' );

				// Set width or height in case we need to calculate only one dimension
				if (!current.autoWidth) {
					inner.width( origWidth );
				}

				if (!current.autoHeight) {
					inner.height( origHeight );
				}

				if (current.autoWidth) {
					origWidth = inner.width();
				}

				if (current.autoHeight) {
					origHeight = inner.height();
				}

				inner.removeClass( 'fancybox-tmp' );
			}

			width  = getScalar( origWidth );
			height = getScalar( origHeight );

			ratio  = origWidth / origHeight;

			// Calculations for the content
			minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
			maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

			minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
			maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

			// These will be used to determine if wrap can fit in the viewport
			origMaxWidth  = maxWidth;
			origMaxHeight = maxHeight;

			if (current.fitToView) {
				maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
				maxHeight = Math.min(viewport.h - hSpace, maxHeight);
			}

			maxWidth_  = viewport.w - wMargin;
			maxHeight_ = viewport.h - hMargin;

			if (current.aspectRatio) {
				if (width > maxWidth) {
					width  = maxWidth;
					height = getScalar(width / ratio);
				}

				if (height > maxHeight) {
					height = maxHeight;
					width  = getScalar(height * ratio);
				}

				if (width < minWidth) {
					width  = minWidth;
					height = getScalar(width / ratio);
				}

				if (height < minHeight) {
					height = minHeight;
					width  = getScalar(height * ratio);
				}

			} else {
				width = Math.max(minWidth, Math.min(width, maxWidth));

				if (current.autoHeight && current.type !== 'iframe') {
					inner.width( width );

					height = inner.height();
				}

				height = Math.max(minHeight, Math.min(height, maxHeight));
			}

			// Try to fit inside viewport (including the title)
			if (current.fitToView) {
				inner.width( width ).height( height );

				wrap.width( width + wPadding );

				// Real wrap dimensions
				width_  = wrap.width();
				height_ = wrap.height();

				if (current.aspectRatio) {
					while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
						if (steps++ > 19) {
							break;
						}

						height = Math.max(minHeight, Math.min(maxHeight, height - 10));
						width  = getScalar(height * ratio);

						if (width < minWidth) {
							width  = minWidth;
							height = getScalar(width / ratio);
						}

						if (width > maxWidth) {
							width  = maxWidth;
							height = getScalar(width / ratio);
						}

						inner.width( width ).height( height );

						wrap.width( width + wPadding );

						width_  = wrap.width();
						height_ = wrap.height();
					}

				} else {
					width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
					height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
				}
			}

			if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
				width += scrollOut;
			}

			inner.width( width ).height( height );

			wrap.width( width + wPadding );

			width_  = wrap.width();
			height_ = wrap.height();

			canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
			canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

			$.extend(current, {
				dim : {
					width	: getValue( width_ ),
					height	: getValue( height_ )
				},
				origWidth  : origWidth,
				origHeight : origHeight,
				canShrink  : canShrink,
				canExpand  : canExpand,
				wPadding   : wPadding,
				hPadding   : hPadding,
				wrapSpace  : height_ - skin.outerHeight(true),
				skinSpace  : skin.height() - height
			});

			if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
				inner.height('auto');
			}
		},

		_getPosition: function (onlyAbsolute) {
			var current  = F.current,
				viewport = F.getViewport(),
				margin   = current.margin,
				width    = F.wrap.width()  + margin[1] + margin[3],
				height   = F.wrap.height() + margin[0] + margin[2],
				rez      = {
					position: 'absolute',
					top  : margin[0],
					left : margin[3]
				};

			if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
				rez.position = 'fixed';

			} else if (!current.locked) {
				rez.top  += viewport.y;
				rez.left += viewport.x;
			}

			rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
			rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

			return rez;
		},

		_afterZoomIn: function () {
			var current = F.current;

			if (!current) {
				return;
			}

			F.isOpen = F.isOpened = true;

			F.wrap.css('overflow', 'visible').addClass('fancybox-opened');

			F.update();

			// Assign a click event
			if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
				F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
					if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
						e.preventDefault();

						F[ current.closeClick ? 'close' : 'next' ]();
					}
				});
			}

			// Create a close button
			if (current.closeBtn) {
				$(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
					e.preventDefault();

					F.close();
				});
			}

			// Create navigation arrows
			if (current.arrows && F.group.length > 1) {
				if (current.loop || current.index > 0) {
					$(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
				}

				if (current.loop || current.index < F.group.length - 1) {
					$(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
				}
			}

			F.trigger('afterShow');

			// Stop the slideshow if this is the last item
			if (!current.loop && current.index === current.group.length - 1) {
				F.play( false );

			} else if (F.opts.autoPlay && !F.player.isActive) {
				F.opts.autoPlay = false;

				F.play();
			}
		},

		_afterZoomOut: function ( obj ) {
			obj = obj || F.current;

			$('.fancybox-wrap').trigger('onReset').remove();

			$.extend(F, {
				group  : {},
				opts   : {},
				router : false,
				current   : null,
				isActive  : false,
				isOpened  : false,
				isOpen    : false,
				isClosing : false,
				wrap   : null,
				skin   : null,
				outer  : null,
				inner  : null
			});

			F.trigger('afterClose', obj);
		}
	});

	/*
	 *	Default transitions
	 */

	F.transitions = {
		getOrigPosition: function () {
			var current  = F.current,
				element  = current.element,
				orig     = current.orig,
				pos      = {},
				width    = 50,
				height   = 50,
				hPadding = current.hPadding,
				wPadding = current.wPadding,
				viewport = F.getViewport();

			if (!orig && current.isDom && element.is(':visible')) {
				orig = element.find('img:first');

				if (!orig.length) {
					orig = element;
				}
			}

			if (isQuery(orig)) {
				pos = orig.offset();

				if (orig.is('img')) {
					width  = orig.outerWidth();
					height = orig.outerHeight();
				}

			} else {
				pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
				pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
			}

			if (F.wrap.css('position') === 'fixed' || current.locked) {
				pos.top  -= viewport.y;
				pos.left -= viewport.x;
			}

			pos = {
				top     : getValue(pos.top  - hPadding * current.topRatio),
				left    : getValue(pos.left - wPadding * current.leftRatio),
				width   : getValue(width  + wPadding),
				height  : getValue(height + hPadding)
			};

			return pos;
		},

		step: function (now, fx) {
			var ratio,
				padding,
				value,
				prop       = fx.prop,
				current    = F.current,
				wrapSpace  = current.wrapSpace,
				skinSpace  = current.skinSpace;

			if (prop === 'width' || prop === 'height') {
				ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

				if (F.isClosing) {
					ratio = 1 - ratio;
				}

				padding = prop === 'width' ? current.wPadding : current.hPadding;
				value   = now - padding;

				F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
				F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
			}
		},

		zoomIn: function () {
			var current  = F.current,
				startPos = current.pos,
				effect   = current.openEffect,
				elastic  = effect === 'elastic',
				endPos   = $.extend({opacity : 1}, startPos);

			// Remove "position" property that breaks older IE
			delete endPos.position;

			if (elastic) {
				startPos = this.getOrigPosition();

				if (current.openOpacity) {
					startPos.opacity = 0.1;
				}

			} else if (effect === 'fade') {
				startPos.opacity = 0.1;
			}

			F.wrap.css(startPos).animate(endPos, {
				duration : effect === 'none' ? 0 : current.openSpeed,
				easing   : current.openEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomIn
			});
		},

		zoomOut: function () {
			var current  = F.current,
				effect   = current.closeEffect,
				elastic  = effect === 'elastic',
				endPos   = {opacity : 0.1};

			if (elastic) {
				endPos = this.getOrigPosition();

				if (current.closeOpacity) {
					endPos.opacity = 0.1;
				}
			}

			F.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : current.closeSpeed,
				easing   : current.closeEasing,
				step     : elastic ? this.step : null,
				complete : F._afterZoomOut
			});
		},

		changeIn: function () {
			var current   = F.current,
				effect    = current.nextEffect,
				startPos  = current.pos,
				endPos    = { opacity : 1 },
				direction = F.direction,
				distance  = 200,
				field;

			startPos.opacity = 0.1;

			if (effect === 'elastic') {
				field = direction === 'down' || direction === 'up' ? 'top' : 'left';

				if (direction === 'down' || direction === 'right') {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
					endPos[ field ]   = '+=' + distance + 'px';

				} else {
					startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
					endPos[ field ]   = '-=' + distance + 'px';
				}
			}

			// Workaround for http://bugs.jquery.com/ticket/12273
			if (effect === 'none') {
				F._afterZoomIn();

			} else {
				F.wrap.css(startPos).animate(endPos, {
					duration : current.nextSpeed,
					easing   : current.nextEasing,
					complete : F._afterZoomIn
				});
			}
		},

		changeOut: function () {
			var previous  = F.previous,
				effect    = previous.prevEffect,
				endPos    = { opacity : 0.1 },
				direction = F.direction,
				distance  = 200;

			if (effect === 'elastic') {
				endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
			}

			previous.wrap.animate(endPos, {
				duration : effect === 'none' ? 0 : previous.prevSpeed,
				easing   : previous.prevEasing,
				complete : function () {
					$(this).trigger('onReset').remove();
				}
			});
		}
	};

	/*
	 *	Overlay helper
	 */

	F.helpers.overlay = {
		defaults : {
			closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
			speedOut   : 200,       // duration of fadeOut animation
			showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
			css        : {},        // custom CSS properties
			locked     : !isTouch,  // if true, the content will be locked into overlay
			fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
		},

		overlay : null,      // current handle
		fixed   : false,     // indicates if the overlay has position "fixed"
		el      : $('html'), // element that contains "the lock"

		// Public methods
		create : function(opts) {
			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.close();
			}

			this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( F.coming ? F.coming.parent : opts.parent );
			this.fixed   = false;

			if (opts.fixed && F.defaults.fixed) {
				this.overlay.addClass('fancybox-overlay-fixed');

				this.fixed = true;
			}
		},

		open : function(opts) {
			var that = this;

			opts = $.extend({}, this.defaults, opts);

			if (this.overlay) {
				this.overlay.unbind('.overlay').width('auto').height('auto');

			} else {
				this.create(opts);
			}

			if (!this.fixed) {
				W.bind('resize.overlay', $.proxy( this.update, this) );

				this.update();
			}

			if (opts.closeClick) {
				this.overlay.bind('click.overlay', function(e) {
					if ($(e.target).hasClass('fancybox-overlay')) {
						if (F.isActive) {
							F.close();
						} else {
							that.close();
						}

						return false;
					}
				});
			}

			this.overlay.css( opts.css ).show();
		},

		close : function() {
			var scrollV, scrollH;

			W.unbind('resize.overlay');

			if (this.el.hasClass('fancybox-lock')) {
				$('.fancybox-margin').removeClass('fancybox-margin');

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.removeClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			$('.fancybox-overlay').remove().hide();

			$.extend(this, {
				overlay : null,
				fixed   : false
			});
		},

		// Private, callbacks

		update : function () {
			var width = '100%', offsetWidth;

			// Reset width/height so it will not mess
			this.overlay.width(width).height('100%');

			// jQuery does not return reliable result for IE
			if (IE) {
				offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

				if (D.width() > offsetWidth) {
					width = D.width();
				}

			} else if (D.width() > W.width()) {
				width = D.width();
			}

			this.overlay.width(width).height(D.height());
		},

		// This is where we can manipulate DOM, because later it would cause iframes to reload
		onReady : function (opts, obj) {
			var overlay = this.overlay;

			$('.fancybox-overlay').stop(true, true);

			if (!overlay) {
				this.create(opts);
			}

			if (opts.locked && this.fixed && obj.fixed) {
				if (!overlay) {
					this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
				}

				obj.locked = this.overlay.append( obj.wrap );
				obj.fixed  = false;
			}

			if (opts.showEarly === true) {
				this.beforeShow.apply(this, arguments);
			}
		},

		beforeShow : function(opts, obj) {
			var scrollV, scrollH;

			if (obj.locked) {
				if (this.margin !== false) {
					$('*').filter(function(){
						return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
					}).addClass('fancybox-margin');

					this.el.addClass('fancybox-margin');
				}

				scrollV = W.scrollTop();
				scrollH = W.scrollLeft();

				this.el.addClass('fancybox-lock');

				W.scrollTop( scrollV ).scrollLeft( scrollH );
			}

			this.open(opts);
		},

		onUpdate : function() {
			if (!this.fixed) {
				this.update();
			}
		},

		afterClose: function (opts) {
			// Remove overlay if exists and fancyBox is not opening
			// (e.g., it is not being open using afterClose callback)
			//if (this.overlay && !F.isActive) {
			if (this.overlay && !F.coming) {
				this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
			}
		}
	};

	/*
	 *	Title helper
	 */

	F.helpers.title = {
		defaults : {
			type     : 'float', // 'float', 'inside', 'outside' or 'over',
			position : 'bottom' // 'top' or 'bottom'
		},

		beforeShow: function (opts) {
			var current = F.current,
				text    = current.title,
				type    = opts.type,
				title,
				target;

			if ($.isFunction(text)) {
				text = text.call(current.element, current);
			}

			if (!isString(text) || $.trim(text) === '') {
				return;
			}

			title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

			switch (type) {
				case 'inside':
					target = F.skin;
				break;

				case 'outside':
					target = F.wrap;
				break;

				case 'over':
					target = F.inner;
				break;

				default: // 'float'
					target = F.skin;

					title.appendTo('body');

					if (IE) {
						title.width( title.width() );
					}

					title.wrapInner('<span class="child"></span>');

					//Increase bottom margin so this title will also fit into viewport
					F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
				break;
			}

			title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
		}
	};

	// jQuery plugin initialization
	$.fn.fancybox = function (options) {
		var index,
			that     = $(this),
			selector = this.selector || '',
			run      = function(e) {
				var what = $(this).blur(), idx = index, relType, relVal;

				if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
					relType = options.groupAttr || 'data-fancybox-group';
					relVal  = what.attr(relType);

					if (!relVal) {
						relType = 'rel';
						relVal  = what.get(0)[ relType ];
					}

					if (relVal && relVal !== '' && relVal !== 'nofollow') {
						what = selector.length ? $(selector) : that;
						what = what.filter('[' + relType + '="' + relVal + '"]');
						idx  = what.index(this);
					}

					options.index = idx;

					// Stop an event from bubbling if everything is fine
					if (F.open(what, options) !== false) {
						e.preventDefault();
					}
				}
			};

		options = options || {};
		index   = options.index || 0;

		if (!selector || options.live === false) {
			that.unbind('click.fb-start').bind('click.fb-start', run);

		} else {
			D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
		}

		this.filter('[data-fancybox-start=1]').trigger('click');

		return this;
	};

	// Tests that need a body at doc ready
	D.ready(function() {
		var w1, w2;

		if ( $.scrollbarWidth === undefined ) {
			// http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
			$.scrollbarWidth = function() {
				var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
					child  = parent.children(),
					width  = child.innerWidth() - child.height( 99 ).innerWidth();

				parent.remove();

				return width;
			};
		}

		if ( $.support.fixedPosition === undefined ) {
			$.support.fixedPosition = (function() {
				var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
					fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

				elem.remove();

				return fixed;
			}());
		}

		$.extend(F.defaults, {
			scrollbarWidth : $.scrollbarWidth(),
			fixed  : $.support.fixedPosition,
			parent : $('body')
		});

		//Get real width of page scroll-bar
		w1 = $(window).width();

		H.addClass('fancybox-lock-test');

		w2 = $(window).width();

		H.removeClass('fancybox-lock-test');

		$("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
	});

}(window, document, jQuery));;
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof module&&module.exports?module.exports=e():t.bodymovin=e()}(window,function(){function ProjectInterface(){return{}}function roundValues(t){bm_rnd=t?Math.round:function(t){return t}}function roundTo2Decimals(t){return Math.round(1e4*t)/1e4}function roundTo3Decimals(t){return Math.round(100*t)/100}function styleDiv(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin=t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility=t.style.webkitBackfaceVisibility="visible",t.style.transformStyle=t.style.webkitTransformStyle=t.style.mozTransformStyle="preserve-3d"}function styleUnselectableDiv(t){t.style.userSelect="none",t.style.MozUserSelect="none",t.style.webkitUserSelect="none",t.style.oUserSelect="none"}function BMEnterFrameEvent(t,e,s,r){this.type=t,this.currentTime=e,this.totalTime=s,this.direction=0>r?-1:1}function BMCompleteEvent(t,e){this.type=t,this.direction=0>e?-1:1}function BMCompleteLoopEvent(t,e,s,r){this.type=t,this.currentLoop=e,this.totalLoops=s,this.direction=0>r?-1:1}function BMSegmentStartEvent(t,e,s){this.type=t,this.firstFrame=e,this.totalFrames=s}function BMDestroyEvent(t,e){this.type=t,this.target=e}function _addEventListener(t,e){this._cbs[t]||(this._cbs[t]=[]),this._cbs[t].push(e)}function _removeEventListener(t,e){if(e){if(this._cbs[t]){for(var s=0,r=this._cbs[t].length;r>s;)this._cbs[t][s]===e&&(this._cbs[t].splice(s,1),s-=1,r-=1),s+=1;this._cbs[t].length||(this._cbs[t]=null)}}else this._cbs[t]=null}function _triggerEvent(t,e){if(this._cbs[t])for(var s=this._cbs[t].length,r=0;s>r;r++)this._cbs[t][r](e)}function randomString(t,e){void 0===e&&(e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");var s,r="";for(s=t;s>0;--s)r+=e[Math.round(Math.random()*(e.length-1))];return r}function HSVtoRGB(t,e,s){var r,i,a,n,o,h,l,p;switch(1===arguments.length&&(e=t.s,s=t.v,t=t.h),n=Math.floor(6*t),o=6*t-n,h=s*(1-e),l=s*(1-o*e),p=s*(1-(1-o)*e),n%6){case 0:r=s,i=p,a=h;break;case 1:r=l,i=s,a=h;break;case 2:r=h,i=s,a=p;break;case 3:r=h,i=l,a=s;break;case 4:r=p,i=h,a=s;break;case 5:r=s,i=h,a=l}return[r,i,a]}function RGBtoHSV(t,e,s){1===arguments.length&&(e=t.g,s=t.b,t=t.r);var r,i=Math.max(t,e,s),a=Math.min(t,e,s),n=i-a,o=0===i?0:n/i,h=i/255;switch(i){case a:r=0;break;case t:r=e-s+n*(s>e?6:0),r/=6*n;break;case e:r=s-t+2*n,r/=6*n;break;case s:r=t-e+4*n,r/=6*n}return[r,o,h]}function addSaturationToRGB(t,e){var s=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return s[1]+=e,s[1]>1?s[1]=1:s[1]<=0&&(s[1]=0),HSVtoRGB(s[0],s[1],s[2])}function addBrightnessToRGB(t,e){var s=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return s[2]+=e,s[2]>1?s[2]=1:s[2]<0&&(s[2]=0),HSVtoRGB(s[0],s[1],s[2])}function addHueToRGB(t,e){var s=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return s[0]+=e/360,s[0]>1?s[0]-=1:s[0]<0&&(s[0]+=1),HSVtoRGB(s[0],s[1],s[2])}function componentToHex(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function fillToRgba(t,e){if(!cachedColors[t]){var s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);cachedColors[t]=parseInt(s[1],16)+","+parseInt(s[2],16)+","+parseInt(s[3],16)}return"rgba("+cachedColors[t]+","+e+")"}function RenderedFrame(t,e){this.tr=t,this.o=e}function LetterProps(t,e,s,r,i,a){this.o=t,this.sw=e,this.sc=s,this.fc=r,this.m=i,this.props=a}function iterateDynamicProperties(t){var e,s=this.dynamicProperties;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(t)}function reversePath(t){var e,s,r=[],i=[],a=[],n={},o=0;t.c&&(r[0]=t.o[0],i[0]=t.i[0],a[0]=t.v[0],o=1),s=t.i.length;var h=s-1;for(e=o;s>e;e+=1)r.push(t.o[h]),i.push(t.i[h]),a.push(t.v[h]),h-=1;return n.i=r,n.o=i,n.v=a,n}function Matrix(){}function matrixManagerFunction(){var t=new Matrix,e=function(e,s,r,i,a){return t.reset().translate(i,a).rotate(e).scale(s,r).toCSS()},s=function(t){return e(t.tr.r[2],t.tr.s[0],t.tr.s[1],t.tr.p[0],t.tr.p[1])};return{getMatrix:s}}function createElement(t,e,s){if(!e){var r=Object.create(t.prototype,s),i={};return r&&"[object Function]"===i.toString.call(r.init)&&r.init(),r}e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype._parent=t.prototype}function extendPrototype(t,e){for(var s in t.prototype)t.prototype.hasOwnProperty(s)&&(e.prototype[s]=t.prototype[s])}function bezFunction(){function t(t,e,s,r,i,a){var n=t*r+e*i+s*a-i*r-a*t-s*e;return n>-1e-4&&1e-4>n}function e(e,s,r,i,a,n,o,h,l){return t(e,s,i,a,o,h)&&t(e,r,i,n,o,l)}function s(t){this.segmentLength=0,this.points=new Array(t)}function r(t,e){this.partialLength=t,this.point=e}function i(t,e){var s=e.segments,r=s.length,i=bm_floor((r-1)*t),a=t*e.addedLength,n=0;if(a==s[i].l)return s[i].p;for(var o=s[i].l>a?-1:1,h=!0;h;)s[i].l<=a&&s[i+1].l>a?(n=(a-s[i].l)/(s[i+1].l-s[i].l),h=!1):i+=o,(0>i||i>=r-1)&&(h=!1);return s[i].p+(s[i+1].p-s[i].p)*n}function a(){this.pt1=new Array(2),this.pt2=new Array(2),this.pt3=new Array(2),this.pt4=new Array(2)}function n(t,e,s,r,n,o,h){var l=new a;n=0>n?0:n>1?1:n;var p=i(n,h);o=o>1?1:o;var m,f=i(o,h),d=t.length,c=1-p,u=1-f;for(m=0;d>m;m+=1)l.pt1[m]=Math.round(1e3*(c*c*c*t[m]+(p*c*c+c*p*c+c*c*p)*s[m]+(p*p*c+c*p*p+p*c*p)*r[m]+p*p*p*e[m]))/1e3,l.pt3[m]=Math.round(1e3*(c*c*u*t[m]+(p*c*u+c*p*u+c*c*f)*s[m]+(p*p*u+c*p*f+p*c*f)*r[m]+p*p*f*e[m]))/1e3,l.pt4[m]=Math.round(1e3*(c*u*u*t[m]+(p*u*u+c*f*u+c*u*f)*s[m]+(p*f*u+c*f*f+p*u*f)*r[m]+p*f*f*e[m]))/1e3,l.pt2[m]=Math.round(1e3*(u*u*u*t[m]+(f*u*u+u*f*u+u*u*f)*s[m]+(f*f*u+u*f*f+f*u*f)*r[m]+f*f*f*e[m]))/1e3;return l}var o=(Math,function(){function t(t,e){this.l=t,this.p=e}return function(e,s,r,i){var a,n,o,h,l,p,m=defaultCurveSegments,f=0,d=[],c=[],u={addedLength:0,segments:[]};for(o=r.length,a=0;m>a;a+=1){for(l=a/(m-1),p=0,n=0;o>n;n+=1)h=bm_pow(1-l,3)*e[n]+3*bm_pow(1-l,2)*l*r[n]+3*(1-l)*bm_pow(l,2)*i[n]+bm_pow(l,3)*s[n],d[n]=h,null!==c[n]&&(p+=bm_pow(d[n]-c[n],2)),c[n]=d[n];p&&(p=bm_sqrt(p),f+=p),u.segments.push(new t(f,l))}return u.addedLength=f,u}}()),h=function(){var e={};return function(i){var a=i.s,n=i.e,o=i.to,h=i.ti,l=(a.join("_")+"_"+n.join("_")+"_"+o.join("_")+"_"+h.join("_")).replace(/\./g,"p");if(e[l])return void(i.bezierData=e[l]);var p,m,f,d,c,u,y,g=defaultCurveSegments,v=0,b=null;2===a.length&&(a[0]!=n[0]||a[1]!=n[1])&&t(a[0],a[1],n[0],n[1],a[0]+o[0],a[1]+o[1])&&t(a[0],a[1],n[0],n[1],n[0]+h[0],n[1]+h[1])&&(g=2);var E=new s(g);for(f=o.length,p=0;g>p;p+=1){for(y=new Array(f),c=p/(g-1),u=0,m=0;f>m;m+=1)d=bm_pow(1-c,3)*a[m]+3*bm_pow(1-c,2)*c*(a[m]+o[m])+3*(1-c)*bm_pow(c,2)*(n[m]+h[m])+bm_pow(c,3)*n[m],y[m]=d,null!==b&&(u+=bm_pow(y[m]-b[m],2));u=bm_sqrt(u),v+=u,E.points[p]=new r(u,y),b=y}E.segmentLength=v,i.bezierData=E,e[l]=E}}();return{getBezierLength:o,getNewSegment:n,buildBezierData:h,pointOnLine2D:t,pointOnLine3D:e}}function dataFunctionManager(){function t(i,a,o){var h,l,p,m,f,d,c,u,y=i.length;for(m=0;y>m;m+=1)if(h=i[m],"ks"in h&&!h.completed){if(h.completed=!0,h.tt&&(i[m-1].td=h.tt),l=[],p=-1,h.hasMask){var g=h.masksProperties;for(d=g.length,f=0;d>f;f+=1)if(g[f].pt.k.i)r(g[f].pt.k);else for(u=g[f].pt.k.length,c=0;u>c;c+=1)g[f].pt.k[c].s&&r(g[f].pt.k[c].s[0]),g[f].pt.k[c].e&&r(g[f].pt.k[c].e[0])}0===h.ty?(h.layers=e(h.refId,a),t(h.layers,a,o)):4===h.ty?s(h.shapes):5==h.ty&&n(h,o)}}function e(t,e){for(var s=0,r=e.length;r>s;){if(e[s].id===t)return e[s].layers;s+=1}}function s(t){var e,i,a,n=t.length,o=!1;for(e=n-1;e>=0;e-=1)if("sh"==t[e].ty){if(t[e].ks.k.i)r(t[e].ks.k);else for(a=t[e].ks.k.length,i=0;a>i;i+=1)t[e].ks.k[i].s&&r(t[e].ks.k[i].s[0]),t[e].ks.k[i].e&&r(t[e].ks.k[i].e[0]);o=!0}else"gr"==t[e].ty&&s(t[e].it)}function r(t){var e,s=t.i.length;for(e=0;s>e;e+=1)t.i[e][0]+=t.v[e][0],t.i[e][1]+=t.v[e][1],t.o[e][0]+=t.v[e][0],t.o[e][1]+=t.v[e][1]}function i(t,e){var s=e?e.split("."):[100,100,100];return t[0]>s[0]?!0:s[0]>t[0]?!1:t[1]>s[1]?!0:s[1]>t[1]?!1:t[2]>s[2]?!0:s[2]>t[2]?!1:void 0}function a(e,s){e.__complete||(h(e),o(e),l(e),t(e.layers,e.assets,s),e.__complete=!0)}function n(t,e){var s,r,i=t.t.d.k,a=i.length;for(r=0;a>r;r+=1){var n=t.t.d.k[r].s;s=[];var o,h,l,p,m,f,d,c=0,u=t.t.m.g,y=0,g=0,v=0,b=[],E=0,P=0,k=e.getFontByName(n.f),S=0,x=k.fStyle.split(" "),C="normal",M="normal";for(h=x.length,o=0;h>o;o+=1)"italic"===x[o].toLowerCase()?M="italic":"bold"===x[o].toLowerCase()?C="700":"black"===x[o].toLowerCase()?C="900":"medium"===x[o].toLowerCase()?C="500":"regular"===x[o].toLowerCase()||"normal"===x[o].toLowerCase()?C="400":("light"===x[o].toLowerCase()||"thin"===x[o].toLowerCase())&&(C="200");if(n.fWeight=C,n.fStyle=M,h=n.t.length,n.sz){var D=n.sz[0],A=-1;for(o=0;h>o;o+=1)l=!1," "===n.t.charAt(o)?A=o:13===n.t.charCodeAt(o)&&(E=0,l=!0),e.chars?(d=e.getCharData(n.t.charAt(o),k.fStyle,k.fFamily),S=l?0:d.w*n.s/100):S=e.measureText(n.t.charAt(o),n.f,n.s),E+S>D?(-1===A?(n.t=n.t.substr(0,o)+"\r"+n.t.substr(o),h+=1):(o=A,n.t=n.t.substr(0,o)+"\r"+n.t.substr(o+1)),A=-1,E=0):E+=S;h=n.t.length}for(E=0,S=0,o=0;h>o;o+=1)if(l=!1," "===n.t.charAt(o)?p=" ":13===n.t.charCodeAt(o)?(b.push(E),P=E>P?E:P,E=0,p="",l=!0,v+=1):p=n.t.charAt(o),e.chars?(d=e.getCharData(n.t.charAt(o),k.fStyle,e.getFontByName(n.f).fFamily),S=l?0:d.w*n.s/100):S=e.measureText(p,n.f,n.s),E+=S,s.push({l:S,an:S,add:y,n:l,anIndexes:[],val:p,line:v}),2==u){if(y+=S,""==p||" "==p||o==h-1){for((""==p||" "==p)&&(y-=S);o>=g;)s[g].an=y,s[g].ind=c,s[g].extra=S,g+=1;c+=1,y=0}}else if(3==u){if(y+=S,""==p||o==h-1){for(""==p&&(y-=S);o>=g;)s[g].an=y,s[g].ind=c,s[g].extra=S,g+=1;y=0,c+=1}}else s[c].ind=c,s[c].extra=0,c+=1;if(n.l=s,P=E>P?E:P,b.push(E),n.sz)n.boxWidth=n.sz[0],n.justifyOffset=0;else switch(n.boxWidth=P,n.j){case 1:n.justifyOffset=-n.boxWidth;break;case 2:n.justifyOffset=-n.boxWidth/2;break;default:n.justifyOffset=0}n.lineWidths=b;var T=t.t.a;f=T.length;var F,w,I=[];for(m=0;f>m;m+=1){for(T[m].a.sc&&(n.strokeColorAnim=!0),T[m].a.sw&&(n.strokeWidthAnim=!0),(T[m].a.fc||T[m].a.fh||T[m].a.fs||T[m].a.fb)&&(n.fillColorAnim=!0),w=0,F=T[m].s.b,o=0;h>o;o+=1)s[o].anIndexes[m]=w,(1==F&&""!=s[o].val||2==F&&""!=s[o].val&&" "!=s[o].val||3==F&&(s[o].n||" "==s[o].val||o==h-1)||4==F&&(s[o].n||o==h-1))&&(1===T[m].s.rn&&I.push(w),w+=1);t.t.a[m].s.totalChars=w;var V,B=-1;if(1===T[m].s.rn)for(o=0;h>o;o+=1)B!=s[o].anIndexes[m]&&(B=s[o].anIndexes[m],V=I.splice(Math.floor(Math.random()*I.length),1)[0]),s[o].anIndexes[m]=V}0!==f||"m"in t.t.p||(t.singleShape=!0),n.yOffset=n.lh||1.2*n.s,n.ascent=k.ascent*n.s/100}}var o=function(){function t(t){var e=t.t.d;t.t.d={k:[{s:e,t:0}]}}function e(e){var s,r=e.length;for(s=0;r>s;s+=1)5===e[s].ty&&t(e[s])}var s=[4,4,14];return function(t){if(i(s,t.v)&&(e(t.layers),t.assets)){var r,a=t.assets.length;for(r=0;a>r;r+=1)t.assets[r].layers&&e(t.assets[r].layers)}}}(),h=function(){function t(e){var s,r,i,a=e.length;for(s=0;a>s;s+=1)if("gr"===e[s].ty)t(e[s].it);else if("fl"===e[s].ty||"st"===e[s].ty)if(e[s].c.k&&e[s].c.k[0].i)for(i=e[s].c.k.length,r=0;i>r;r+=1)e[s].c.k[r].s&&(e[s].c.k[r].s[0]/=255,e[s].c.k[r].s[1]/=255,e[s].c.k[r].s[2]/=255,e[s].c.k[r].s[3]/=255),e[s].c.k[r].e&&(e[s].c.k[r].e[0]/=255,e[s].c.k[r].e[1]/=255,e[s].c.k[r].e[2]/=255,e[s].c.k[r].e[3]/=255);else e[s].c.k[0]/=255,e[s].c.k[1]/=255,e[s].c.k[2]/=255,e[s].c.k[3]/=255}function e(e){var s,r=e.length;for(s=0;r>s;s+=1)4===e[s].ty&&t(e[s].shapes)}var s=[4,1,9];return function(t){if(i(s,t.v)&&(e(t.layers),t.assets)){var r,a=t.assets.length;for(r=0;a>r;r+=1)t.assets[r].layers&&e(t.assets[r].layers)}}}(),l=function(){function t(e){var s,r,i,a=e.length,n=!1;for(s=a-1;s>=0;s-=1)if("sh"==e[s].ty){if(e[s].ks.k.i)e[s].ks.k.c=e[s].closed;else for(i=e[s].ks.k.length,r=0;i>r;r+=1)e[s].ks.k[r].s&&(e[s].ks.k[r].s[0].c=e[s].closed),e[s].ks.k[r].e&&(e[s].ks.k[r].e[0].c=e[s].closed);n=!0}else"gr"==e[s].ty&&t(e[s].it)}function e(e){var s,r,i,a,n,o,h=e.length;for(r=0;h>r;r+=1){if(s=e[r],s.hasMask){var l=s.masksProperties;for(a=l.length,i=0;a>i;i+=1)if(l[i].pt.k.i)l[i].pt.k.c=l[i].cl;else for(o=l[i].pt.k.length,n=0;o>n;n+=1)l[i].pt.k[n].s&&(l[i].pt.k[n].s[0].c=l[i].cl),l[i].pt.k[n].e&&(l[i].pt.k[n].e[0].c=l[i].cl)}4===s.ty&&t(s.shapes)}}var s=[4,4,18];return function(t){if(i(s,t.v)&&(e(t.layers),t.assets)){var r,a=t.assets.length;for(r=0;a>r;r+=1)t.assets[r].layers&&e(t.assets[r].layers)}}}(),p={};return p.completeData=a,p}function ShapeModifier(){}function TrimModifier(){}function RoundCornersModifier(){}function BaseRenderer(){}function SVGRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.globalData={frameNum:-1},this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",progressiveLoad:e&&e.progressiveLoad||!1},this.elements=[],this.pendingElements=[],this.destroyed=!1}function MaskElement(t,e,s){this.dynamicProperties=[],this.data=t,this.element=e,this.globalData=s,this.paths=[],this.storedData=[],this.masksProperties=this.data.masksProperties,this.viewData=new Array(this.masksProperties.length),this.maskElement=null,this.firstFrame=!0;var r,i,a,n,o,h,l,p,m=this.globalData.defs,f=this.masksProperties.length,d=this.masksProperties,c=0,u=[],y=randomString(10),g="clipPath",v="clip-path";for(r=0;f>r;r++)if(("a"!==d[r].mode&&"n"!==d[r].mode||d[r].inv||100!==d[r].o.k)&&(g="mask",v="mask"),"s"!=d[r].mode&&"i"!=d[r].mode||0!=c?o=null:(o=document.createElementNS(svgNS,"rect"),o.setAttribute("fill","#ffffff"),o.setAttribute("width",this.element.comp.data?this.element.comp.data.w:this.element.globalData.compSize.w),o.setAttribute("height",this.element.comp.data?this.element.comp.data.h:this.element.globalData.compSize.h),u.push(o)),i=document.createElementNS(svgNS,"path"),"n"!=d[r].mode){if(c+=1,"s"==d[r].mode?i.setAttribute("fill","#000000"):i.setAttribute("fill","#ffffff"),i.setAttribute("clip-rule","nonzero"),0!==d[r].x.k){g="mask",v="mask",p=PropertyFactory.getProp(this.element,d[r].x,0,null,this.dynamicProperties);var b="fi_"+randomString(10);h=document.createElementNS(svgNS,"filter"),h.setAttribute("id",b),l=document.createElementNS(svgNS,"feMorphology"),l.setAttribute("operator","dilate"),l.setAttribute("in","SourceGraphic"),l.setAttribute("radius","0"),h.appendChild(l),m.appendChild(h),"s"==d[r].mode?i.setAttribute("stroke","#000000"):i.setAttribute("stroke","#ffffff")}else l=null,p=null;if(this.storedData[r]={elem:i,x:p,expan:l,lastPath:"",lastOperator:"",filterId:b,lastRadius:0},"i"==d[r].mode){n=u.length;var E=document.createElementNS(svgNS,"g");for(a=0;n>a;a+=1)E.appendChild(u[a]);var P=document.createElementNS(svgNS,"mask");P.setAttribute("mask-type","alpha"),P.setAttribute("id",y+"_"+c),P.appendChild(i),m.appendChild(P),E.setAttribute("mask","url(#"+y+"_"+c+")"),u.length=0,u.push(E)}else u.push(i);d[r].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[r]={elem:i,lastPath:"",op:PropertyFactory.getProp(this.element,d[r].o,0,.01,this.dynamicProperties),prop:ShapePropertyFactory.getShapeProp(this.element,d[r],3,this.dynamicProperties,null)},o&&(this.viewData[r].invRect=o),this.viewData[r].prop.k||this.drawPath(d[r],this.viewData[r].prop.v,this.viewData[r])}else this.viewData[r]={op:PropertyFactory.getProp(this.element,d[r].o,0,.01,this.dynamicProperties),prop:ShapePropertyFactory.getShapeProp(this.element,d[r],3,this.dynamicProperties,null),elem:i},m.appendChild(i);for(this.maskElement=document.createElementNS(svgNS,g),f=u.length,r=0;f>r;r+=1)this.maskElement.appendChild(u[r]);this.maskElement.setAttribute("id",y),c>0&&this.element.maskedElement.setAttribute(v,"url(#"+y+")"),m.appendChild(this.maskElement)}function BaseElement(){}function SVGBaseElement(t,e,s,r,i){this.globalData=s,this.comp=r,this.data=t,this.matteElement=null,this.transformedElement=null,this.parentContainer=e,this.layerId=i?i.layerId:"ly_"+randomString(10),this.placeholder=i,this.init()}function ITextElement(t,e,s,r){}function SVGTextElement(t,e,s,r,i){this.textSpans=[],this.renderType="svg",this._parent.constructor.call(this,t,e,s,r,i)}function SVGTintFilter(t,e){this.filterManager=e;var s=document.createElementNS(svgNS,"feColorMatrix");if(s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","linearRGB"),s.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),s.setAttribute("result","f1"),t.appendChild(s),s=document.createElementNS(svgNS,"feColorMatrix"),s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","sRGB"),s.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),s.setAttribute("result","f2"),t.appendChild(s),this.matrixFilter=s,100!==e.effectElements[2].p.v||e.effectElements[2].p.k){var r=document.createElementNS(svgNS,"feMerge");t.appendChild(r);var i;i=document.createElementNS(svgNS,"feMergeNode"),i.setAttribute("in","SourceGraphic"),r.appendChild(i),i=document.createElementNS(svgNS,"feMergeNode"),i.setAttribute("in","f2"),r.appendChild(i)}}function SVGFillFilter(t,e){this.filterManager=e;var s=document.createElementNS(svgNS,"feColorMatrix");s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","sRGB"),s.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),t.appendChild(s),this.matrixFilter=s}function SVGStrokeEffect(t,e){this.initialized=!1,this.filterManager=e,this.elem=t,this.paths=[]}function SVGTritoneFilter(t,e){this.filterManager=e;var s=document.createElementNS(svgNS,"feColorMatrix");s.setAttribute("type","matrix"),s.setAttribute("color-interpolation-filters","linearRGB"),s.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),s.setAttribute("result","f1"),t.appendChild(s);var r=document.createElementNS(svgNS,"feComponentTransfer");r.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(r),this.matrixFilter=r;var i=document.createElementNS(svgNS,"feFuncR");i.setAttribute("type","table"),r.appendChild(i),this.feFuncR=i;var a=document.createElementNS(svgNS,"feFuncG");a.setAttribute("type","table"),r.appendChild(a),this.feFuncG=a;var n=document.createElementNS(svgNS,"feFuncB");n.setAttribute("type","table"),r.appendChild(n),this.feFuncB=n}function SVGProLevelsFilter(t,e){this.filterManager=e;var s,r,i,a=this.filterManager.effectElements,n=document.createElementNS(svgNS,"feComponentTransfer");if((a[9].p.k||0!==a[9].p.v||a[10].p.k||1!==a[10].p.v||a[11].p.k||1!==a[11].p.v||a[12].p.k||0!==a[12].p.v||a[13].p.k||1!==a[13].p.v)&&(s=document.createElementNS(svgNS,"feFuncR"),s.setAttribute("type","table"),n.appendChild(s),this.feFuncR=s),(a[16].p.k||0!==a[16].p.v||a[17].p.k||1!==a[17].p.v||a[18].p.k||1!==a[18].p.v||a[19].p.k||0!==a[19].p.v||a[20].p.k||1!==a[20].p.v)&&(r=document.createElementNS(svgNS,"feFuncG"),r.setAttribute("type","table"),n.appendChild(r),this.feFuncG=r),a[23].p.k||0!==a[23].p.v||a[24].p.k||1!==a[24].p.v||a[25].p.k||1!==a[25].p.v||a[26].p.k||0!==a[26].p.v||a[27].p.k||1!==a[27].p.v){var i=document.createElementNS(svgNS,"feFuncB");i.setAttribute("type","table"),n.appendChild(i),this.feFuncB=i}if(a[30].p.k||0!==a[30].p.v||a[31].p.k||1!==a[31].p.v||a[32].p.k||1!==a[32].p.v||a[33].p.k||0!==a[33].p.v||a[34].p.k||1!==a[34].p.v){var o=document.createElementNS(svgNS,"feFuncA");o.setAttribute("type","table"),n.appendChild(o),this.feFuncA=o}(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(n.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(n),n=document.createElementNS(svgNS,"feComponentTransfer")),(a[2].p.k||0!==a[2].p.v||a[3].p.k||1!==a[3].p.v||a[4].p.k||1!==a[4].p.v||a[5].p.k||0!==a[5].p.v||a[6].p.k||1!==a[6].p.v)&&(n.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(n),s=document.createElementNS(svgNS,"feFuncR"),s.setAttribute("type","table"),n.appendChild(s),this.feFuncRComposed=s,r=document.createElementNS(svgNS,"feFuncG"),r.setAttribute("type","table"),n.appendChild(r),this.feFuncGComposed=r,i=document.createElementNS(svgNS,"feFuncB"),i.setAttribute("type","table"),n.appendChild(i),this.feFuncBComposed=i)}function SVGEffects(t){var e,s=t.data.ef.length,r=randomString(10),i=filtersFactory.createFilter(r),a=0;this.filters=[];var n;for(e=0;s>e;e+=1)20===t.data.ef[e].ty?(a+=1,n=new SVGTintFilter(i,t.effects.effectElements[e]),this.filters.push(n)):21===t.data.ef[e].ty?(a+=1,n=new SVGFillFilter(i,t.effects.effectElements[e]),this.filters.push(n)):22===t.data.ef[e].ty?(n=new SVGStrokeEffect(t,t.effects.effectElements[e]),this.filters.push(n)):23===t.data.ef[e].ty?(a+=1,n=new SVGTritoneFilter(i,t.effects.effectElements[e]),this.filters.push(n)):24===t.data.ef[e].ty&&(a+=1,n=new SVGProLevelsFilter(i,t.effects.effectElements[e]),this.filters.push(n));a&&(t.globalData.defs.appendChild(i),t.layerElement.setAttribute("filter","url(#"+r+")"))}function ICompElement(t,e,s,r,i){this._parent.constructor.call(this,t,e,s,r,i),this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?Array.apply(null,{length:this.layers.length}):[],this.data.tm&&(this.tm=PropertyFactory.getProp(this,this.data.tm,0,s.frameRate,this.dynamicProperties)),this.data.xt?(this.layerElement=document.createElementNS(svgNS,"g"),this.buildAllItems()):s.progressiveLoad||this.buildAllItems()}function IImageElement(t,e,s,r,i){this.assetData=s.getAssetData(t.refId),this._parent.constructor.call(this,t,e,s,r,i)}function IShapeElement(t,e,s,r,i){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.viewData=[],this.shapeModifiers=[],this._parent.constructor.call(this,t,e,s,r,i)}function ISolidElement(t,e,s,r,i){this._parent.constructor.call(this,t,e,s,r,i)}function CanvasRenderer(t,e){this.animationItem=t,this.renderConfig={clearCanvas:e&&void 0!==e.clearCanvas?e.clearCanvas:!0,context:e&&e.context||null,progressiveLoad:e&&e.progressiveLoad||!1,preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet"},this.renderConfig.dpr=e&&e.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=e&&e.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1},this.contextData={saved:Array.apply(null,{length:15}),savedOp:Array.apply(null,{length:15}),cArrPos:0,cTr:new Matrix,cO:1};var s,r=15;for(s=0;r>s;s+=1)this.contextData.saved[s]=Array.apply(null,{length:16});this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1}function HybridRenderer(t){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.globalData={frameNum:-1},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0}function CVBaseElement(t,e,s){this.globalData=s,this.data=t,this.comp=e,this.canvasContext=s.canvasContext,this.init()}function CVCompElement(t,e,s){this._parent.constructor.call(this,t,e,s);var r={};for(var i in s)s.hasOwnProperty(i)&&(r[i]=s[i]);r.renderer=this,r.compHeight=this.data.h,r.compWidth=this.data.w,this.renderConfig={clearCanvas:!0},this.contextData={saved:Array.apply(null,{length:15}),savedOp:Array.apply(null,{length:15}),cArrPos:0,cTr:new Matrix,cO:1},this.completeLayers=!1;var a,n=15;for(a=0;n>a;a+=1)this.contextData.saved[a]=Array.apply(null,{length:16});this.transformMat=new Matrix,this.parentGlobalData=this.globalData;var o=document.createElement("canvas");r.canvasContext=o.getContext("2d"),this.canvasContext=r.canvasContext,o.width=this.data.w,o.height=this.data.h,this.canvas=o,this.globalData=r,this.layers=t.layers,this.pendingElements=[],this.elements=Array.apply(null,{length:this.layers.length}),this.data.tm&&(this.tm=PropertyFactory.getProp(this,this.data.tm,0,s.frameRate,this.dynamicProperties)),(this.data.xt||!s.progressiveLoad)&&this.buildAllItems()}function CVImageElement(t,e,s){this.assetData=s.getAssetData(t.refId),this._parent.constructor.call(this,t,e,s),this.globalData.addPendingElement()}function CVMaskElement(t,e){this.data=t,this.element=e,this.dynamicProperties=[],this.masksProperties=this.data.masksProperties,this.viewData=new Array(this.masksProperties.length);var s,r=this.masksProperties.length;for(s=0;r>s;s++)this.viewData[s]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[s],3,this.dynamicProperties,null)}function CVShapeElement(t,e,s){this.shapes=[],this.stylesList=[],this.viewData=[],this.shapeModifiers=[],this.shapesData=t.shapes,this.firstFrame=!0,this._parent.constructor.call(this,t,e,s)}function CVSolidElement(t,e,s){this._parent.constructor.call(this,t,e,s)}function CVTextElement(t,e,s){this.textSpans=[],this.yOffset=0,this.fillColorAnim=!1,this.strokeColorAnim=!1,this.strokeWidthAnim=!1,this.stroke=!1,this.fill=!1,this.justifyOffset=0,this.currentRender=null,this.renderType="canvas",this.values={fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,0)",sWidth:0,fValue:""},this._parent.constructor.call(this,t,e,s)}function HBaseElement(t,e,s,r,i){this.globalData=s,this.comp=r,this.data=t,this.matteElement=null,this.parentContainer=e,this.layerId=i?i.layerId:"ly_"+randomString(10),this.placeholder=i,this.init()}function HSolidElement(t,e,s,r,i){this._parent.constructor.call(this,t,e,s,r,i)}function HCompElement(t,e,s,r,i){this._parent.constructor.call(this,t,e,s,r,i),this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=Array.apply(null,{length:this.layers.length}),this.data.tm&&(this.tm=PropertyFactory.getProp(this,this.data.tm,0,s.frameRate,this.dynamicProperties)),this.data.hasMask&&(this.supports3d=!1),this.data.xt&&(this.layerElement=document.createElement("div")),this.buildAllItems()}function HShapeElement(t,e,s,r,i){this.shapes=[],this.shapeModifiers=[],this.shapesData=t.shapes,this.stylesList=[],this.viewData=[],this._parent.constructor.call(this,t,e,s,r,i),this.addedTransforms={mdf:!1,mats:[this.finalTransform.mat]},this.currentBBox={x:999999,y:-999999,h:0,w:0}}function HTextElement(t,e,s,r,i){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this._parent.constructor.call(this,t,e,s,r,i)}function HImageElement(t,e,s,r,i){this.assetData=s.getAssetData(t.refId),this._parent.constructor.call(this,t,e,s,r,i)}function HCameraElement(t,e,s,r,i){if(this._parent.constructor.call(this,t,e,s,r,i),this.pe=PropertyFactory.getProp(this,t.pe,0,0,this.dynamicProperties),t.ks.p.s?(this.px=PropertyFactory.getProp(this,t.ks.p.x,1,0,this.dynamicProperties),this.py=PropertyFactory.getProp(this,t.ks.p.y,1,0,this.dynamicProperties),this.pz=PropertyFactory.getProp(this,t.ks.p.z,1,0,this.dynamicProperties)):this.p=PropertyFactory.getProp(this,t.ks.p,1,0,this.dynamicProperties),t.ks.a&&(this.a=PropertyFactory.getProp(this,t.ks.a,1,0,this.dynamicProperties)),t.ks.or.k.length){var a,n=t.ks.or.k.length;for(a=0;n>a;a+=1)t.ks.or.k[a].to=null,t.ks.or.k[a].ti=null}this.or=PropertyFactory.getProp(this,t.ks.or,1,degToRads,this.dynamicProperties),this.or.sh=!0,this.rx=PropertyFactory.getProp(this,t.ks.rx,0,degToRads,this.dynamicProperties),this.ry=PropertyFactory.getProp(this,t.ks.ry,0,degToRads,this.dynamicProperties),this.rz=PropertyFactory.getProp(this,t.ks.rz,0,degToRads,this.dynamicProperties),this.mat=new Matrix}function SliderEffect(t,e,s){this.p=PropertyFactory.getProp(e,t.v,0,0,s)}function AngleEffect(t,e,s){this.p=PropertyFactory.getProp(e,t.v,0,0,s)}function ColorEffect(t,e,s){this.p=PropertyFactory.getProp(e,t.v,1,0,s)}function PointEffect(t,e,s){this.p=PropertyFactory.getProp(e,t.v,1,0,s)}function LayerIndexEffect(t,e,s){this.p=PropertyFactory.getProp(e,t.v,0,0,s)}function CheckboxEffect(t,e,s){this.p=PropertyFactory.getProp(e,t.v,1,0,s)}function NoValueEffect(){this.p={}}function EffectsManager(t,e,s){var r=t.ef;this.effectElements=[];var i,a,n=r.length;for(i=0;n>i;i++)a=new GroupEffect(r[i],e,s),this.effectElements.push(a)}function GroupEffect(t,e,s){this.dynamicProperties=[],this.init(t,e,this.dynamicProperties),this.dynamicProperties.length&&s.push(this)}function play(t){animationManager.play(t)}function pause(t){animationManager.pause(t)}function togglePause(t){animationManager.togglePause(t)}function setSpeed(t,e){animationManager.setSpeed(t,e)}function setDirection(t,e){animationManager.setDirection(t,e)}function stop(t){animationManager.stop(t)}function moveFrame(t){animationManager.moveFrame(t)}function searchAnimations(){standalone===!0?animationManager.searchAnimations(animationData,standalone,renderer):animationManager.searchAnimations()}function registerAnimation(t){return animationManager.registerAnimation(t)}function resize(){animationManager.resize()}function start(){animationManager.start()}function goToAndStop(t,e,s){animationManager.goToAndStop(t,e,s)}function setSubframeRendering(t){subframeEnabled=t}function loadAnimation(t){return standalone===!0&&(t.animationData=JSON.parse(animationData)),animationManager.loadAnimation(t)}function destroy(t){return animationManager.destroy(t)}function setQuality(t){if("string"==typeof t)switch(t){case"high":defaultCurveSegments=200;break;case"medium":defaultCurveSegments=50;break;case"low":defaultCurveSegments=10}else!isNaN(t)&&t>1&&(defaultCurveSegments=t);roundValues(defaultCurveSegments>=50?!1:!0)}function installPlugin(t,e){"expressions"===t&&(expressionsPlugin=e)}function getFactory(t){switch(t){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix}}function checkReady(){"complete"===document.readyState&&(clearInterval(readyStateCheckInterval),searchAnimations())}function getQueryVariable(t){for(var e=queryString.split("&"),s=0;s<e.length;s++){var r=e[s].split("=");if(decodeURIComponent(r[0])==t)return decodeURIComponent(r[1])}}var svgNS="http://www.w3.org/2000/svg",subframeEnabled=!0,expressionsPlugin,isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),cachedColors={},bm_rounder=Math.round,bm_rnd,bm_pow=Math.pow,bm_sqrt=Math.sqrt,bm_abs=Math.abs,bm_floor=Math.floor,bm_max=Math.max,bm_min=Math.min,blitter=10,BMMath={};!function(){var t,e=Object.getOwnPropertyNames(Math),s=e.length;for(t=0;s>t;t+=1)BMMath[e[t]]=Math[e[t]]}(),BMMath.random=Math.random,BMMath.abs=function(t){var e=typeof t;if("object"===e&&t.length){var s,r=Array.apply(null,{length:t.length}),i=t.length;for(s=0;i>s;s+=1)r[s]=Math.abs(t[s]);return r}return Math.abs(t)};var defaultCurveSegments=75,degToRads=Math.PI/180,roundCorner=.5519;roundValues(!1);var rgbToHex=function(){var t,e,s=[];for(t=0;256>t;t+=1)e=t.toString(16),s[t]=1==e.length?"0"+e:e;return function(t,e,r){return 0>t&&(t=0),0>e&&(e=0),0>r&&(r=0),"#"+s[t]+s[e]+s[r]}}(),fillColorToString=function(){var t=[];return function(e,s){return void 0!==s&&(e[3]=s),t[e[0]]||(t[e[0]]={}),t[e[0]][e[1]]||(t[e[0]][e[1]]={}),t[e[0]][e[1]][e[2]]||(t[e[0]][e[1]][e[2]]={}),t[e[0]][e[1]][e[2]][e[3]]||(t[e[0]][e[1]][e[2]][e[3]]="rgba("+e.join(",")+")"),t[e[0]][e[1]][e[2]][e[3]]}}(),Matrix=function(){function t(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function e(t){if(0===t)return this;var e=Math.cos(t),s=Math.sin(t);return this._t(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1)}function s(t){if(0===t)return this;var e=Math.cos(t),s=Math.sin(t);return this._t(1,0,0,0,0,e,-s,0,0,s,e,0,0,0,0,1)}function r(t){if(0===t)return this;var e=Math.cos(t),s=Math.sin(t);return this._t(e,0,s,0,0,1,0,0,-s,0,e,0,0,0,0,1)}function i(t){if(0===t)return this;var e=Math.cos(t),s=Math.sin(t);return this._t(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1)}function a(t,e){return this._t(1,e,t,1,0,0)}function n(t,e){return this.shear(Math.tan(t),Math.tan(e))}function o(t,e){var s=Math.cos(e),r=Math.sin(e);return this._t(s,r,0,0,-r,s,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,Math.tan(t),1,0,0,0,0,1,0,0,0,0,1)._t(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)}function h(t,e,s){return s=isNaN(s)?1:s,1==t&&1==e&&1==s?this:this._t(t,0,0,0,0,e,0,0,0,0,s,0,0,0,0,1)}function l(t,e,s,r,i,a,n,o,h,l,p,m,f,d,c,u){return this.props[0]=t,this.props[1]=e,this.props[2]=s,this.props[3]=r,this.props[4]=i,this.props[5]=a,this.props[6]=n,this.props[7]=o,this.props[8]=h,this.props[9]=l,this.props[10]=p,this.props[11]=m,
this.props[12]=f,this.props[13]=d,this.props[14]=c,this.props[15]=u,this}function p(t,e,s){return s=s||0,0!==t||0!==e||0!==s?this._t(1,0,0,0,0,1,0,0,0,0,1,0,t,e,s,1):this}function m(t,e,s,r,i,a,n,o,h,l,p,m,f,d,c,u){if(1===t&&0===e&&0===s&&0===r&&0===i&&1===a&&0===n&&0===o&&0===h&&0===l&&1===p&&0===m)return(0!==f||0!==d||0!==c)&&(this.props[12]=this.props[12]*t+this.props[13]*i+this.props[14]*h+this.props[15]*f,this.props[13]=this.props[12]*e+this.props[13]*a+this.props[14]*l+this.props[15]*d,this.props[14]=this.props[12]*s+this.props[13]*n+this.props[14]*p+this.props[15]*c,this.props[15]=this.props[12]*r+this.props[13]*o+this.props[14]*m+this.props[15]*u),this;var y=this.props[0],g=this.props[1],v=this.props[2],b=this.props[3],E=this.props[4],P=this.props[5],k=this.props[6],S=this.props[7],x=this.props[8],C=this.props[9],M=this.props[10],D=this.props[11],A=this.props[12],T=this.props[13],F=this.props[14],w=this.props[15];return this.props[0]=y*t+g*i+v*h+b*f,this.props[1]=y*e+g*a+v*l+b*d,this.props[2]=y*s+g*n+v*p+b*c,this.props[3]=y*r+g*o+v*m+b*u,this.props[4]=E*t+P*i+k*h+S*f,this.props[5]=E*e+P*a+k*l+S*d,this.props[6]=E*s+P*n+k*p+S*c,this.props[7]=E*r+P*o+k*m+S*u,this.props[8]=x*t+C*i+M*h+D*f,this.props[9]=x*e+C*a+M*l+D*d,this.props[10]=x*s+C*n+M*p+D*c,this.props[11]=x*r+C*o+M*m+D*u,this.props[12]=A*t+T*i+F*h+w*f,this.props[13]=A*e+T*a+F*l+w*d,this.props[14]=A*s+T*n+F*p+w*c,this.props[15]=A*r+T*o+F*m+w*u,this}function f(t){var e;for(e=0;16>e;e+=1)t.props[e]=this.props[e]}function d(t){var e;for(e=0;16>e;e+=1)this.props[e]=t[e]}function c(t,e,s){return{x:t*this.props[0]+e*this.props[4]+s*this.props[8]+this.props[12],y:t*this.props[1]+e*this.props[5]+s*this.props[9]+this.props[13],z:t*this.props[2]+e*this.props[6]+s*this.props[10]+this.props[14]}}function u(t,e,s){return t*this.props[0]+e*this.props[4]+s*this.props[8]+this.props[12]}function y(t,e,s){return t*this.props[1]+e*this.props[5]+s*this.props[9]+this.props[13]}function g(t,e,s){return t*this.props[2]+e*this.props[6]+s*this.props[10]+this.props[14]}function v(t){var e,s=this.props[0]*this.props[5]-this.props[1]*this.props[4],r=this.props[5]/s,i=-this.props[1]/s,a=-this.props[4]/s,n=this.props[0]/s,o=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/s,h=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/s,l=t.length,p=[];for(e=0;l>e;e+=1)p[e]=[t[e][0]*r+t[e][1]*a+o,t[e][0]*i+t[e][1]*n+h,0];return p}function b(t,e,s){return[t*this.props[0]+e*this.props[4]+s*this.props[8]+this.props[12],t*this.props[1]+e*this.props[5]+s*this.props[9]+this.props[13],t*this.props[2]+e*this.props[6]+s*this.props[10]+this.props[14]]}function E(t,e){return bm_rnd(t*this.props[0]+e*this.props[4]+this.props[12])+","+bm_rnd(t*this.props[1]+e*this.props[5]+this.props[13])}function P(){return[this.props[0],this.props[1],this.props[2],this.props[3],this.props[4],this.props[5],this.props[6],this.props[7],this.props[8],this.props[9],this.props[10],this.props[11],this.props[12],this.props[13],this.props[14],this.props[15]]}function k(){return isSafari?"matrix3d("+roundTo2Decimals(this.props[0])+","+roundTo2Decimals(this.props[1])+","+roundTo2Decimals(this.props[2])+","+roundTo2Decimals(this.props[3])+","+roundTo2Decimals(this.props[4])+","+roundTo2Decimals(this.props[5])+","+roundTo2Decimals(this.props[6])+","+roundTo2Decimals(this.props[7])+","+roundTo2Decimals(this.props[8])+","+roundTo2Decimals(this.props[9])+","+roundTo2Decimals(this.props[10])+","+roundTo2Decimals(this.props[11])+","+roundTo2Decimals(this.props[12])+","+roundTo2Decimals(this.props[13])+","+roundTo2Decimals(this.props[14])+","+roundTo2Decimals(this.props[15])+")":(this.cssParts[1]=this.props.join(","),this.cssParts.join(""))}function S(){return"matrix("+this.props[0]+","+this.props[1]+","+this.props[4]+","+this.props[5]+","+this.props[12]+","+this.props[13]+")"}function x(){return""+this.toArray()}return function(){this.reset=t,this.rotate=e,this.rotateX=s,this.rotateY=r,this.rotateZ=i,this.skew=n,this.skewFromAxis=o,this.shear=a,this.scale=h,this.setTransform=l,this.translate=p,this.transform=m,this.applyToPoint=c,this.applyToX=u,this.applyToY=y,this.applyToZ=g,this.applyToPointArray=b,this.applyToPointStringified=E,this.toArray=P,this.toCSS=k,this.to2dCSS=S,this.toString=x,this.clone=f,this.cloneFromProps=d,this.inversePoints=v,this._t=this.transform,this.props=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],this.cssParts=["matrix3d(","",")"]}}();!function(t,e){function s(s,l,p){var d=[];l=1==l?{entropy:!0}:l||{};var v=n(a(l.entropy?[s,h(t)]:null==s?o():s,3),d),b=new r(d),E=function(){for(var t=b.g(f),e=u,s=0;y>t;)t=(t+s)*m,e*=m,s=b.g(1);for(;t>=g;)t/=2,e/=2,s>>>=1;return(t+s)/e};return E.int32=function(){return 0|b.g(4)},E.quick=function(){return b.g(4)/4294967296},E["double"]=E,n(h(b.S),t),(l.pass||p||function(t,s,r,a){return a&&(a.S&&i(a,b),t.state=function(){return i(b,{})}),r?(e[c]=t,s):t})(E,v,"global"in l?l.global:this==e,l.state)}function r(t){var e,s=t.length,r=this,i=0,a=r.i=r.j=0,n=r.S=[];for(s||(t=[s++]);m>i;)n[i]=i++;for(i=0;m>i;i++)n[i]=n[a=v&a+t[i%s]+(e=n[i])],n[a]=e;(r.g=function(t){for(var e,s=0,i=r.i,a=r.j,n=r.S;t--;)e=n[i=v&i+1],s=s*m+n[v&(n[i]=n[a=v&a+e])+(n[a]=e)];return r.i=i,r.j=a,s})(m)}function i(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function a(t,e){var s,r=[],i=typeof t;if(e&&"object"==i)for(s in t)try{r.push(a(t[s],e-1))}catch(n){}return r.length?r:"string"==i?t:t+"\x00"}function n(t,e){for(var s,r=t+"",i=0;i<r.length;)e[v&i]=v&(s^=19*e[v&i])+r.charCodeAt(i++);return h(e)}function o(){try{if(l)return h(l.randomBytes(m));var e=new Uint8Array(m);return(p.crypto||p.msCrypto).getRandomValues(e),h(e)}catch(s){var r=p.navigator,i=r&&r.plugins;return[+new Date,p,i,p.screen,h(t)]}}function h(t){return String.fromCharCode.apply(0,t)}var l,p=this,m=256,f=6,d=52,c="random",u=e.pow(m,f),y=e.pow(2,d),g=2*y,v=m-1;e["seed"+c]=s,n(e.random(),t)}([],BMMath);var BezierFactory=function(){function t(t,e,s,r,i){var a=i||("bez_"+t+"_"+e+"_"+s+"_"+r).replace(/\./g,"p");if(p[a])return p[a];var n=new h([t,e,s,r]);return p[a]=n,n}function e(t,e){return 1-3*e+3*t}function s(t,e){return 3*e-6*t}function r(t){return 3*t}function i(t,i,a){return((e(i,a)*t+s(i,a))*t+r(i))*t}function a(t,i,a){return 3*e(i,a)*t*t+2*s(i,a)*t+r(i)}function n(t,e,s,r,a){var n,o,h=0;do o=e+(s-e)/2,n=i(o,r,a)-t,n>0?s=o:e=o;while(Math.abs(n)>d&&++h<c);return o}function o(t,e,s,r){for(var n=0;m>n;++n){var o=a(e,s,r);if(0===o)return e;var h=i(e,s,r)-t;e-=h/o}return e}function h(t){this._p=t,this._mSampleValues=g?new Float32Array(u):new Array(u),this._precomputed=!1,this.get=this.get.bind(this)}var l={};l.getBezierEasing=t;var p={},m=4,f=.001,d=1e-7,c=10,u=11,y=1/(u-1),g="function"==typeof Float32Array;return h.prototype={get:function(t){var e=this._p[0],s=this._p[1],r=this._p[2],a=this._p[3];return this._precomputed||this._precompute(),e===s&&r===a?t:0===t?0:1===t?1:i(this._getTForX(t),s,a)},_precompute:function(){var t=this._p[0],e=this._p[1],s=this._p[2],r=this._p[3];this._precomputed=!0,(t!==e||s!==r)&&this._calcSampleValues()},_calcSampleValues:function(){for(var t=this._p[0],e=this._p[2],s=0;u>s;++s)this._mSampleValues[s]=i(s*y,t,e)},_getTForX:function(t){for(var e=this._p[0],s=this._p[2],r=this._mSampleValues,i=0,h=1,l=u-1;h!==l&&r[h]<=t;++h)i+=y;--h;var p=(t-r[h])/(r[h+1]-r[h]),m=i+p*y,d=a(m,e,s);return d>=f?o(t,m,e,s):0===d?m:n(t,i,i+y,e,s)}},l}(),MatrixManager=matrixManagerFunction;!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!window.requestAnimationFrame;++s)window.requestAnimationFrame=window[e[s]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[s]+"CancelAnimationFrame"]||window[e[s]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,s){var r=(new Date).getTime(),i=Math.max(0,16-(r-t)),a=window.setTimeout(function(){e(r+i)},i);return t=r+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var bez=bezFunction(),dataManager=dataFunctionManager(),FontManager=function(){function t(t,e){var s=document.createElement("span");s.style.fontFamily=e;var r=document.createElement("span");r.innerHTML="giItT1WQy@!-/#",s.style.position="absolute",s.style.left="-10000px",s.style.top="-10000px",s.style.fontSize="300px",s.style.fontVariant="normal",s.style.fontStyle="normal",s.style.fontWeight="normal",s.style.letterSpacing="0",s.appendChild(r),document.body.appendChild(s);var i=r.offsetWidth;return r.style.fontFamily=t+", "+e,{node:r,w:i,parent:s}}function e(){var t,s,r,i=this.fonts.length,a=i;for(t=0;i>t;t+=1)if(this.fonts[t].loaded)a-=1;else if("t"===this.fonts[t].fOrigin){if(window.Typekit&&window.Typekit.load&&0===this.typekitLoaded){this.typekitLoaded=1;try{window.Typekit.load({async:!0,active:function(){this.typekitLoaded=2}.bind(this)})}catch(n){}}2===this.typekitLoaded&&(this.fonts[t].loaded=!0)}else"n"===this.fonts[t].fOrigin?this.fonts[t].loaded=!0:(s=this.fonts[t].monoCase.node,r=this.fonts[t].monoCase.w,s.offsetWidth!==r?(a-=1,this.fonts[t].loaded=!0):(s=this.fonts[t].sansCase.node,r=this.fonts[t].sansCase.w,s.offsetWidth!==r&&(a-=1,this.fonts[t].loaded=!0)),this.fonts[t].loaded&&(this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));0!==a&&Date.now()-this.initTime<h?setTimeout(e.bind(this),20):setTimeout(function(){this.loaded=!0}.bind(this),0)}function s(t,e){var s=document.createElementNS(svgNS,"text");s.style.fontSize="100px",s.style.fontFamily=e.fFamily,s.textContent="1",e.fClass?(s.style.fontFamily="inherit",s.className=e.fClass):s.style.fontFamily=e.fFamily,t.appendChild(s);var r=document.createElement("canvas").getContext("2d");return r.font="100px "+e.fFamily,r}function r(r,i){if(!r)return void(this.loaded=!0);if(this.chars)return this.loaded=!0,void(this.fonts=r.list);var a,n=r.list,o=n.length;for(a=0;o>a;a+=1){if(n[a].loaded=!1,n[a].monoCase=t(n[a].fFamily,"monospace"),n[a].sansCase=t(n[a].fFamily,"sans-serif"),n[a].fPath){if("p"===n[a].fOrigin){var h=document.createElement("style");h.type="text/css",h.innerHTML="@font-face {font-family: "+n[a].fFamily+"; font-style: normal; src: url('"+n[a].fPath+"');}",i.appendChild(h)}else if("g"===n[a].fOrigin){var l=document.createElement("link");l.type="text/css",l.rel="stylesheet",l.href=n[a].fPath,i.appendChild(l)}else if("t"===n[a].fOrigin){var p=document.createElement("script");p.setAttribute("src",n[a].fPath),i.appendChild(p)}}else n[a].loaded=!0;n[a].helper=s(i,n[a]),this.fonts.push(n[a])}e.bind(this)()}function i(t){if(t){this.chars||(this.chars=[]);var e,s,r,i=t.length,a=this.chars.length;for(e=0;i>e;e+=1){for(s=0,r=!1;a>s;)this.chars[s].style===t[e].style&&this.chars[s].fFamily===t[e].fFamily&&this.chars[s].ch===t[e].ch&&(r=!0),s+=1;r||(this.chars.push(t[e]),a+=1)}}}function a(t,e,s){for(var r=0,i=this.chars.length;i>r;){if(this.chars[r].ch===t&&this.chars[r].style===e&&this.chars[r].fFamily===s)return this.chars[r];r+=1}}function n(t,e,s){var r=this.getFontByName(e),i=r.helper;return i.measureText(t).width*s/100}function o(t){for(var e=0,s=this.fonts.length;s>e;){if(this.fonts[e].fName===t)return this.fonts[e];e+=1}return"sans-serif"}var h=5e3,l=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.loaded=!1,this.initTime=Date.now()};return l.prototype.addChars=i,l.prototype.addFonts=r,l.prototype.getCharData=a,l.prototype.getFontByName=o,l.prototype.measureText=n,l}(),PropertyFactory=function(){function t(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1;var t=this.comp.renderedFrame-this.offsetTime;if(t===this.lastFrame||this.lastFrame!==l&&(this.lastFrame>=this.keyframes[this.keyframes.length-1].t-this.offsetTime&&t>=this.keyframes[this.keyframes.length-1].t-this.offsetTime||this.lastFrame<this.keyframes[0].t-this.offsetTime&&t<this.keyframes[0].t-this.offsetTime));else{for(var e,s,r=0,i=this.keyframes.length-1,a=1,n=!0;n;){if(e=this.keyframes[r],s=this.keyframes[r+1],r==i-1&&t>=s.t-this.offsetTime){e.h&&(e=s);break}if(s.t-this.offsetTime>t)break;i-1>r?r+=a:n=!1}var o,h,p,m,f,d=0;if(e.to){e.bezierData||bez.buildBezierData(e);var c=e.bezierData;if(t>=s.t-this.offsetTime||t<e.t-this.offsetTime){var u=t>=s.t-this.offsetTime?c.points.length-1:0;for(h=c.points[u].point.length,o=0;h>o;o+=1)this.v[o]=this.mult?c.points[u].point[o]*this.mult:c.points[u].point[o],this.pv[o]=c.points[u].point[o],this.lastPValue[o]!==this.pv[o]&&(this.mdf=!0,this.lastPValue[o]=this.pv[o])}else{e.__fnct?f=e.__fnct:(f=BezierFactory.getBezierEasing(e.o.x,e.o.y,e.i.x,e.i.y,e.n).get,e.__fnct=f),p=f((t-(e.t-this.offsetTime))/(s.t-this.offsetTime-(e.t-this.offsetTime)));var y,g=c.segmentLength*p,v=0;for(a=1,n=!0,m=c.points.length;n;){if(v+=c.points[d].partialLength*a,0===g||0===p||d==c.points.length-1){for(h=c.points[d].point.length,o=0;h>o;o+=1)this.v[o]=this.mult?c.points[d].point[o]*this.mult:c.points[d].point[o],this.pv[o]=c.points[d].point[o],this.lastPValue[o]!==this.pv[o]&&(this.mdf=!0,this.lastPValue[o]=this.pv[o]);break}if(g>=v&&g<v+c.points[d+1].partialLength){for(y=(g-v)/c.points[d+1].partialLength,h=c.points[d].point.length,o=0;h>o;o+=1)this.v[o]=this.mult?(c.points[d].point[o]+(c.points[d+1].point[o]-c.points[d].point[o])*y)*this.mult:c.points[d].point[o]+(c.points[d+1].point[o]-c.points[d].point[o])*y,this.pv[o]=c.points[d].point[o]+(c.points[d+1].point[o]-c.points[d].point[o])*y,this.lastPValue[o]!==this.pv[o]&&(this.mdf=!0,this.lastPValue[o]=this.pv[o]);break}m-1>d&&1==a||d>0&&-1==a?d+=a:n=!1}}}else{var b,E,P,k,S,x=!1;for(i=e.s.length,r=0;i>r;r+=1){if(1!==e.h&&(e.o.x instanceof Array?(x=!0,e.__fnct||(e.__fnct=[]),e.__fnct[r]||(b=e.o.x[r]||e.o.x[0],E=e.o.y[r]||e.o.y[0],P=e.i.x[r]||e.i.x[0],k=e.i.y[r]||e.i.y[0])):(x=!1,e.__fnct||(b=e.o.x,E=e.o.y,P=e.i.x,k=e.i.y)),x?e.__fnct[r]?f=e.__fnct[r]:(f=BezierFactory.getBezierEasing(b,E,P,k).get,e.__fnct[r]=f):e.__fnct?f=e.__fnct:(f=BezierFactory.getBezierEasing(b,E,P,k).get,e.__fnct=f),p=t>=s.t-this.offsetTime?1:t<e.t-this.offsetTime?0:f((t-(e.t-this.offsetTime))/(s.t-this.offsetTime-(e.t-this.offsetTime)))),this.sh&&1!==e.h){var C=e.s[r],M=e.e[r];-180>C-M?C+=360:C-M>180&&(C-=360),S=C+(M-C)*p}else S=1===e.h?e.s[r]:e.s[r]+(e.e[r]-e.s[r])*p;1===i?(this.v=this.mult?S*this.mult:S,this.pv=S,this.lastPValue!=this.pv&&(this.mdf=!0,this.lastPValue=this.pv)):(this.v[r]=this.mult?S*this.mult:S,this.pv[r]=S,this.lastPValue[r]!==this.pv[r]&&(this.mdf=!0,this.lastPValue[r]=this.pv[r]))}}}this.lastFrame=t,this.frameId=this.elem.globalData.frameId}}function e(){}function s(t,s,r){this.mult=r,this.v=r?s.k*r:s.k,this.pv=s.k,this.mdf=!1,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.getValue=e}function r(t,s,r){this.mult=r,this.data=s,this.mdf=!1,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1,this.v=new Array(s.k.length),this.pv=new Array(s.k.length),this.lastValue=new Array(s.k.length);var i=Array.apply(null,{length:s.k.length});this.vel=i.map(function(){return 0});var a,n=s.k.length;for(a=0;n>a;a+=1)this.v[a]=r?s.k[a]*r:s.k[a],this.pv[a]=s.k[a];this.getValue=e}function i(e,s,r){this.keyframes=s.k,this.offsetTime=e.data.st,this.lastValue=-99999,this.lastPValue=-99999,this.frameId=-1,this.k=!0,this.kf=!0,this.data=s,this.mult=r,this.elem=e,this.comp=e.comp,this.lastFrame=l,this.v=r?s.k[0].s[0]*r:s.k[0].s[0],this.pv=s.k[0].s[0],this.getValue=t}function a(e,s,r){var i,a,n,o,h,p=s.k.length;for(i=0;p-1>i;i+=1)s.k[i].to&&s.k[i].s&&s.k[i].e&&(a=s.k[i].s,n=s.k[i].e,o=s.k[i].to,h=s.k[i].ti,(2===a.length&&(a[0]!==n[0]||a[1]!==n[1])&&bez.pointOnLine2D(a[0],a[1],n[0],n[1],a[0]+o[0],a[1]+o[1])&&bez.pointOnLine2D(a[0],a[1],n[0],n[1],n[0]+h[0],n[1]+h[1])||3===a.length&&(a[0]!==n[0]||a[1]!==n[1]||a[2]!==n[2])&&bez.pointOnLine3D(a[0],a[1],a[2],n[0],n[1],n[2],a[0]+o[0],a[1]+o[1],a[2]+o[2])&&bez.pointOnLine3D(a[0],a[1],a[2],n[0],n[1],n[2],n[0]+h[0],n[1]+h[1],n[2]+h[2]))&&(s.k[i].to=null,s.k[i].ti=null));this.keyframes=s.k,this.offsetTime=e.data.st,this.k=!0,this.kf=!0,this.mult=r,this.elem=e,this.comp=e.comp,this.getValue=t,this.frameId=-1,this.v=new Array(s.k[0].s.length),this.pv=new Array(s.k[0].s.length),this.lastValue=new Array(s.k[0].s.length),this.lastPValue=new Array(s.k[0].s.length),this.lastFrame=l}function n(t,e,n,o,h){var l;if(2===n)l=new p(t,e,h);else if(e.k.length)if("number"==typeof e.k[0])l=new r(t,e,o);else switch(n){case 0:l=new i(t,e,o);break;case 1:l=new a(t,e,o)}else l=new s(t,e,o);return l.k&&h.push(l),l}function o(t,e,s,r){return new f(t,e,s,r)}function h(t,e,s){return new d(t,e,s)}var l=-999999,p=function(){function t(){return this.p.k&&this.p.getValue(),this.p.v.key||(this.p.v.key=function(t){return this.p.v.numKeys?this.p.keyframes[t-1].t:0}.bind(this)),this.p.v.numKeys||(this.p.v.numKeys=this.p.keyframes?this.p.keyframes.length:0),this.p.v.valueAtTime||(this.p.v.valueAtTime=this.p.getValueAtTime.bind(this.p)),this.p.v}function e(){return this.px.k&&this.px.getValue(),this.px.v}function s(){return this.py.k&&this.py.getValue(),this.py.v}function r(){return this.a.k&&this.a.getValue(),this.a.v}function i(){return this.or.k&&this.or.getValue(),this.or.v}function a(){return this.r.k&&this.r.getValue(),this.r.v/degToRads}function n(){return this.s.k&&this.s.getValue(),this.s.v}function o(){return this.o.k&&this.o.getValue(),this.o.v}function h(){return this.sk.k&&this.sk.getValue(),this.sk.v}function l(){return this.sa.k&&this.sa.getValue(),this.sa.v}function p(t){var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0);this.a&&t.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&t.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.r?t.rotate(-this.r.v):t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?t.translate(this.px.v,this.py.v,-this.pz.v):t.translate(this.px.v,this.py.v,0):t.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function m(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1;var t,e=this.dynamicProperties.length;for(t=0;e>t;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t].mdf&&(this.mdf=!0);if(this.mdf){if(this.v.reset(),this.a&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r?this.v.rotate(-this.r.v):this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented&&this.p.keyframes&&this.p.getValueAtTime){var s,r;this.p.lastFrame+this.p.offsetTime<this.p.keyframes[0].t?(s=this.p.getValueAtTime(this.p.keyframes[0].t+.01,0),r=this.p.getValueAtTime(this.p.keyframes[0].t,0)):this.p.lastFrame+this.p.offsetTime>this.p.keyframes[this.p.keyframes.length-1].t?(s=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t,0),r=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t-.01,0)):(s=this.p.pv,r=this.p.getValueAtTime(this.p.lastFrame+this.p.offsetTime-.01,this.p.offsetTime)),this.v.rotate(-Math.atan2(s[1]-r[1],s[0]-r[0]))}this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function f(){this.inverted=!0,this.iv=new Matrix,this.k||(this.data.p.s?this.iv.translate(this.px.v,this.py.v,-this.pz.v):this.iv.translate(this.p.v[0],this.p.v[1],-this.p.v[2]),this.r?this.iv.rotate(-this.r.v):this.iv.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.s&&this.iv.scale(this.s.v[0],this.s.v[1],1),this.a&&this.iv.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]))}function d(){}return function(c,u,y){this.elem=c,this.frameId=-1,this.dynamicProperties=[],this.mdf=!1,this.data=u,this.getValue=m,this.applyToMatrix=p,this.setInverted=f,this.autoOrient=d,this.v=new Matrix,u.p.s?(this.px=PropertyFactory.getProp(c,u.p.x,0,0,this.dynamicProperties),this.py=PropertyFactory.getProp(c,u.p.y,0,0,this.dynamicProperties),u.p.z&&(this.pz=PropertyFactory.getProp(c,u.p.z,0,0,this.dynamicProperties))):this.p=PropertyFactory.getProp(c,u.p,1,0,this.dynamicProperties),u.r?this.r=PropertyFactory.getProp(c,u.r,0,degToRads,this.dynamicProperties):u.rx&&(this.rx=PropertyFactory.getProp(c,u.rx,0,degToRads,this.dynamicProperties),this.ry=PropertyFactory.getProp(c,u.ry,0,degToRads,this.dynamicProperties),this.rz=PropertyFactory.getProp(c,u.rz,0,degToRads,this.dynamicProperties),this.or=PropertyFactory.getProp(c,u.or,0,degToRads,this.dynamicProperties)),u.sk&&(this.sk=PropertyFactory.getProp(c,u.sk,0,degToRads,this.dynamicProperties),this.sa=PropertyFactory.getProp(c,u.sa,0,degToRads,this.dynamicProperties)),u.a&&(this.a=PropertyFactory.getProp(c,u.a,1,0,this.dynamicProperties)),u.s&&(this.s=PropertyFactory.getProp(c,u.s,1,.01,this.dynamicProperties)),this.o=u.o?PropertyFactory.getProp(c,u.o,0,.01,y):{mdf:!1,v:1},this.dynamicProperties.length?y.push(this):(this.a&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r?this.v.rotate(-this.r.v):this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?u.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])),Object.defineProperty(this,"position",{get:t}),Object.defineProperty(this,"xPosition",{get:e}),Object.defineProperty(this,"yPosition",{get:s}),Object.defineProperty(this,"orientation",{get:i}),Object.defineProperty(this,"anchorPoint",{get:r}),Object.defineProperty(this,"rotation",{get:a}),Object.defineProperty(this,"scale",{get:n}),Object.defineProperty(this,"opacity",{get:o}),Object.defineProperty(this,"skew",{get:h}),Object.defineProperty(this,"skewAxis",{get:l})}}(),m=function(){function t(t){if(this.prop.getValue(),this.cmdf=!1,this.omdf=!1,this.prop.mdf||t){var e,s,r,i=4*this.data.p;for(e=0;i>e;e+=1)s=e%4===0?100:255,r=Math.round(this.prop.v[e]*s),this.c[e]!==r&&(this.c[e]=r,this.cmdf=!0);if(this.o.length)for(i=this.prop.v.length,e=4*this.data.p;i>e;e+=1)s=e%2===0?100:1,r=e%2===0?Math.round(100*this.prop.v[e]):this.prop.v[e],this.o[e-4*this.data.p]!==r&&(this.o[e-4*this.data.p]=r,this.omdf=!0)}}function e(e,s,r){this.prop=n(e,s.k,1,null,[]),this.data=s,this.k=this.prop.k,this.c=Array.apply(null,{length:4*s.p});var i=s.k.k[0].s?s.k.k[0].s.length-4*s.p:s.k.k.length-4*s.p;this.o=Array.apply(null,{length:i}),this.cmdf=!1,this.omdf=!1,this.getValue=t,this.prop.k&&r.push(this),this.getValue(!0)}return function(t,s,r){return new e(t,s,r)}}(),f=function(){function t(t){var e=0,s=this.dataProps.length;if(this.elem.globalData.frameId!==this.frameId||t){for(this.mdf=!1,this.frameId=this.elem.globalData.frameId;s>e;){if(this.dataProps[e].p.mdf){this.mdf=!0;break}e+=1}if(this.mdf||t)for("svg"===this.renderer&&(this.dasharray=""),e=0;s>e;e+=1)"o"!=this.dataProps[e].n?"svg"===this.renderer?this.dasharray+=" "+this.dataProps[e].p.v:this.dasharray[e]=this.dataProps[e].p.v:this.dashoffset=this.dataProps[e].p.v}}return function(e,s,r,i){this.elem=e,this.frameId=-1,this.dataProps=new Array(s.length),this.renderer=r,this.mdf=!1,this.k=!1,this.dasharray="svg"===this.renderer?"":new Array(s.length-1),this.dashoffset=0;var a,n,o=s.length;for(a=0;o>a;a+=1)n=PropertyFactory.getProp(e,s[a].v,0,0,i),this.k=n.k?!0:this.k,this.dataProps[a]={n:s[a].n,p:n};this.getValue=t,this.k?i.push(this):this.getValue(!0)}}(),d=function(){function t(){if(this.dynamicProperties.length){var t,e=this.dynamicProperties.length;for(t=0;e>t;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t].mdf&&(this.mdf=!0)}var s=this.data.totalChars,r=2===this.data.r?1:100/s,i=this.o.v/r,a=this.s.v/r+i,n=this.e.v/r+i;if(a>n){var o=a;a=n,n=o}this.finalS=a,this.finalE=n}function e(t){var e=BezierFactory.getBezierEasing(this.ne.v/100,0,1-this.xe.v/100,1).get,a=0,n=this.finalS,o=this.finalE,h=this.data.sh;if(2==h)a=o===n?t>=o?1:0:s(0,r(.5/(o-n)+(t-n)/(o-n),1)),a=e(a);else if(3==h)a=o===n?t>=o?0:1:1-s(0,r(.5/(o-n)+(t-n)/(o-n),1)),a=e(a);else if(4==h)o===n?a=t>=o?0:1:(a=s(0,r(.5/(o-n)+(t-n)/(o-n),1)),.5>a?a*=2:a=1-2*(a-.5)),a=e(a);else if(5==h){if(o===n)a=t>=o?0:1;else{var l=o-n;t=r(s(0,t+.5-n),o-n);var p=-l/2+t,m=l/2;a=Math.sqrt(1-p*p/(m*m))}a=e(a)}else 6==h?(o===n?a=t>=o?0:1:(t=r(s(0,t+.5-n),o-n),a=(1+Math.cos(Math.PI+2*Math.PI*t/(o-n)))/2),a=e(a)):(t>=i(n)&&(a=0>t-n?1-(n-t):s(0,r(o-t,1))),a=e(a));return a*this.a.v}var s=Math.max,r=Math.min,i=Math.floor;return this.mdf=!1,function(s,r,i){this.mdf=!1,this.k=!1,this.data=r,this.dynamicProperties=[],this.getValue=t,this.getMult=e,this.comp=s.comp,this.finalS=0,this.finalE=0,this.s=PropertyFactory.getProp(s,r.s||{k:0},0,0,this.dynamicProperties),this.e="e"in r?PropertyFactory.getProp(s,r.e,0,0,this.dynamicProperties):{v:2===r.r?r.totalChars:100},this.o=PropertyFactory.getProp(s,r.o||{k:0},0,0,this.dynamicProperties),this.xe=PropertyFactory.getProp(s,r.xe||{k:0},0,0,this.dynamicProperties),this.ne=PropertyFactory.getProp(s,r.ne||{k:0},0,0,this.dynamicProperties),this.a=PropertyFactory.getProp(s,r.a,0,.01,this.dynamicProperties),this.dynamicProperties.length?i.push(this):this.getValue()}}(),c={};return c.getProp=n,c.getDashProp=o,c.getTextSelectorProp=h,c.getGradientProp=m,c}(),ShapePropertyFactory=function(){function t(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1;var t=this.comp.renderedFrame-this.offsetTime;if(this.lastFrame!==n&&(this.lastFrame<this.keyframes[0].t-this.offsetTime&&t<this.keyframes[0].t-this.offsetTime||this.lastFrame>this.keyframes[this.keyframes.length-1].t-this.offsetTime&&t>this.keyframes[this.keyframes.length-1].t-this.offsetTime));else{var e,s,r;if(t<this.keyframes[0].t-this.offsetTime)e=this.keyframes[0].s[0],r=!0;else if(t>=this.keyframes[this.keyframes.length-1].t-this.offsetTime)e=1===this.keyframes[this.keyframes.length-2].h?this.keyframes[this.keyframes.length-1].s[0]:this.keyframes[this.keyframes.length-2].e[0],r=!0;else{for(var i,a,o,h,l,p,m=0,f=this.keyframes.length-1,d=!0;d&&(i=this.keyframes[m],a=this.keyframes[m+1],!(a.t-this.offsetTime>t));)f-1>m?m+=1:d=!1;r=1===i.h,r&&m===f&&(i=a);var c;if(!r){var u;i.__fnct?u=i.__fnct:(u=BezierFactory.getBezierEasing(i.o.x,i.o.y,i.i.x,i.i.y).get,i.__fnct=u),c=t>=a.t-this.offsetTime?1:t<i.t-this.offsetTime?0:u((t-(i.t-this.offsetTime))/(a.t-this.offsetTime-(i.t-this.offsetTime))),s=i.e[0]}e=i.s[0]}h=this.v.i.length,p=e.i[0].length;var y,g=!1;for(o=0;h>o;o+=1)for(l=0;p>l;l+=1)r?(y=e.i[o][l],this.v.i[o][l]!==y&&(this.v.i[o][l]=y,this.pv.i[o][l]=y,g=!0),y=e.o[o][l],this.v.o[o][l]!==y&&(this.v.o[o][l]=y,this.pv.o[o][l]=y,g=!0),y=e.v[o][l],this.v.v[o][l]!==y&&(this.v.v[o][l]=y,this.pv.v[o][l]=y,g=!0)):(y=e.i[o][l]+(s.i[o][l]-e.i[o][l])*c,this.v.i[o][l]!==y&&(this.v.i[o][l]=y,this.pv.i[o][l]=y,g=!0),y=e.o[o][l]+(s.o[o][l]-e.o[o][l])*c,this.v.o[o][l]!==y&&(this.v.o[o][l]=y,this.pv.o[o][l]=y,g=!0),y=e.v[o][l]+(s.v[o][l]-e.v[o][l])*c,this.v.v[o][l]!==y&&(this.v.v[o][l]=y,this.pv.v[o][l]=y,g=!0));this.mdf=g,this.paths.length=0,this.v.c=e.c,this.paths[0]=this.v}this.lastFrame=t,this.frameId=this.elem.globalData.frameId}}function e(){return this.v}function s(){this.resetPaths.length=1,this.resetPaths[0]=this.v,this.paths=this.resetPaths,this.k||(this.mdf=!1)}function r(t,r,i){this.resetPaths=[],this.comp=t.comp,this.k=!1,this.mdf=!1,this.numNodes=3===i?r.pt.k.v.length:r.ks.k.v.length,this.v=3===i?r.pt.k:r.ks.k,this.getValue=e,this.pv=this.v,this.paths=[this.v],this.reset=s}function i(e,r,i){this.resetPaths=[],this.comp=e.comp,this.elem=e,this.offsetTime=e.data.st,this.getValue=t,this.keyframes=3===i?r.pt.k:r.ks.k,this.k=!0;var a,o=this.keyframes[0].s[0].i.length,h=this.keyframes[0].s[0].i[0].length;for(this.numNodes=o,this.v={i:Array.apply(null,{length:o}),o:Array.apply(null,{length:o}),v:Array.apply(null,{length:o}),c:this.keyframes[0].s[0].c},this.pv={i:Array.apply(null,{length:o}),o:Array.apply(null,{length:o}),v:Array.apply(null,{length:o}),c:this.keyframes[0].s[0].c},a=0;o>a;a+=1)this.v.i[a]=Array.apply(null,{length:h}),this.v.o[a]=Array.apply(null,{length:h}),this.v.v[a]=Array.apply(null,{length:h}),this.pv.i[a]=Array.apply(null,{length:h}),this.pv.o[a]=Array.apply(null,{length:h}),this.pv.v[a]=Array.apply(null,{length:h});this.paths=[],this.lastFrame=n,this.reset=s}function a(t,e,s,a){var n;if(3===s||4===s){var p=3===s?e.pt.k:e.ks.k;n=p.length?new i(t,e,s):new r(t,e,s)}else 5===s?n=new l(t,e):6===s?n=new o(t,e):7===s&&(n=new h(t,e));return n.k&&a.push(n),n}var n=-999999,o=function(){function t(){var t=this.p.v[0],e=this.p.v[1],s=this.s.v[0]/2,i=this.s.v[1]/2;2!==this.d&&3!==this.d?(this.v.v[0]=[t,e-i],this.v.i[0]=[t-s*r,e-i],this.v.o[0]=[t+s*r,e-i],this.v.v[1]=[t+s,e],this.v.i[1]=[t+s,e-i*r],this.v.o[1]=[t+s,e+i*r],this.v.v[2]=[t,e+i],this.v.i[2]=[t+s*r,e+i],this.v.o[2]=[t-s*r,e+i],this.v.v[3]=[t-s,e],this.v.i[3]=[t-s,e+i*r],this.v.o[3]=[t-s,e-i*r]):(this.v.v[0]=[t,e-i],this.v.o[0]=[t-s*r,e-i],this.v.i[0]=[t+s*r,e-i],this.v.v[1]=[t-s,e],this.v.o[1]=[t-s,e+i*r],this.v.i[1]=[t-s,e-i*r],this.v.v[2]=[t,e+i],this.v.o[2]=[t+s*r,e+i],this.v.i[2]=[t-s*r,e+i],this.v.v[3]=[t+s,e],this.v.o[3]=[t+s,e-i*r],this.v.i[3]=[t+s,e+i*r]),this.paths.length=0,this.paths[0]=this.v}function e(t){var e,s=this.dynamicProperties.length;if(this.elem.globalData.frameId!==this.frameId){for(this.mdf=!1,this.frameId=this.elem.globalData.frameId,e=0;s>e;e+=1)this.dynamicProperties[e].getValue(t),this.dynamicProperties[e].mdf&&(this.mdf=!0);this.mdf&&(this.convertEllToPath(),this.paths.length=0,this.paths[0]=this.v)}}var r=roundCorner;return function(r,i){this.v={v:Array.apply(null,{length:4}),i:Array.apply(null,{length:4}),o:Array.apply(null,{length:4}),c:!0},this.numNodes=4,this.d=i.d,this.dynamicProperties=[],this.resetPaths=[],this.paths=[],this.elem=r,this.comp=r.comp,this.frameId=-1,this.mdf=!1,this.getValue=e,this.convertEllToPath=t,this.reset=s,this.p=PropertyFactory.getProp(r,i.p,1,0,this.dynamicProperties),this.s=PropertyFactory.getProp(r,i.s,1,0,this.dynamicProperties),this.dynamicProperties.length?this.k=!0:this.convertEllToPath()}}(),h=function(){function t(){var t=Math.floor(this.pt.v),e=2*Math.PI/t;this.v.v.length=t,this.v.i.length=t,this.v.o.length=t;var s,r=this.or.v,i=this.os.v,a=2*Math.PI*r/(4*t),n=-Math.PI/2,o=3===this.data.d?-1:1;for(n+=this.r.v,s=0;t>s;s+=1){var h=r*Math.cos(n),l=r*Math.sin(n),p=0===h&&0===l?0:l/Math.sqrt(h*h+l*l),m=0===h&&0===l?0:-h/Math.sqrt(h*h+l*l);h+=+this.p.v[0],l+=+this.p.v[1],this.v.v[s]=[h,l],this.v.i[s]=[h+p*a*i*o,l+m*a*i*o],this.v.o[s]=[h-p*a*i*o,l-m*a*i*o],n+=e*o}this.numNodes=t,this.paths.length=0,this.paths[0]=this.v}function e(){var t=2*Math.floor(this.pt.v),e=2*Math.PI/t;this.v.v.length=t,this.v.i.length=t,this.v.o.length=t;var s,r,i,a,n=!0,o=this.or.v,h=this.ir.v,l=this.os.v,p=this.is.v,m=2*Math.PI*o/(2*t),f=2*Math.PI*h/(2*t),d=-Math.PI/2;d+=this.r.v;var c=3===this.data.d?-1:1;for(s=0;t>s;s+=1){r=n?o:h,i=n?l:p,a=n?m:f;var u=r*Math.cos(d),y=r*Math.sin(d),g=0===u&&0===y?0:y/Math.sqrt(u*u+y*y),v=0===u&&0===y?0:-u/Math.sqrt(u*u+y*y);u+=+this.p.v[0],y+=+this.p.v[1],this.v.v[s]=[u,y],this.v.i[s]=[u+g*a*i*c,y+v*a*i*c],this.v.o[s]=[u-g*a*i*c,y-v*a*i*c],n=!n,d+=e*c}this.numNodes=t,this.paths.length=0,this.paths[0]=this.v}function r(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1,this.frameId=this.elem.globalData.frameId;var t,e=this.dynamicProperties.length;for(t=0;e>t;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t].mdf&&(this.mdf=!0);this.mdf&&this.convertToPath()}}return function(i,a){this.v={v:[],i:[],o:[],c:!0},this.resetPaths=[],this.elem=i,this.comp=i.comp,this.data=a,this.frameId=-1,this.d=a.d,this.dynamicProperties=[],this.mdf=!1,this.getValue=r,this.reset=s,1===a.sy?(this.ir=PropertyFactory.getProp(i,a.ir,0,0,this.dynamicProperties),
this.is=PropertyFactory.getProp(i,a.is,0,.01,this.dynamicProperties),this.convertToPath=e):this.convertToPath=t,this.pt=PropertyFactory.getProp(i,a.pt,0,0,this.dynamicProperties),this.p=PropertyFactory.getProp(i,a.p,1,0,this.dynamicProperties),this.r=PropertyFactory.getProp(i,a.r,0,degToRads,this.dynamicProperties),this.or=PropertyFactory.getProp(i,a.or,0,0,this.dynamicProperties),this.os=PropertyFactory.getProp(i,a.os,0,.01,this.dynamicProperties),this.paths=[],this.dynamicProperties.length?this.k=!0:this.convertToPath()}}(),l=function(){function t(t){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1,this.frameId=this.elem.globalData.frameId;var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(t),this.dynamicProperties[e].mdf&&(this.mdf=!0);this.mdf&&this.convertRectToPath()}}function e(){var t=this.p.v[0],e=this.p.v[1],s=this.s.v[0]/2,r=this.s.v[1]/2,i=bm_min(s,r,this.r.v),a=i*(1-roundCorner);0===i?(this.v.v.length=4,this.v.i.length=4,this.v.o.length=4):(this.v.v.length=8,this.v.i.length=8,this.v.o.length=8),2===this.d||1===this.d?(this.v.v[0]=[t+s,e-r+i],this.v.o[0]=this.v.v[0],this.v.i[0]=[t+s,e-r+a],this.v.v[1]=[t+s,e+r-i],this.v.o[1]=[t+s,e+r-a],this.v.i[1]=this.v.v[1],0!==i?(this.v.v[2]=[t+s-i,e+r],this.v.o[2]=this.v.v[2],this.v.i[2]=[t+s-a,e+r],this.v.v[3]=[t-s+i,e+r],this.v.o[3]=[t-s+a,e+r],this.v.i[3]=this.v.v[3],this.v.v[4]=[t-s,e+r-i],this.v.o[4]=this.v.v[4],this.v.i[4]=[t-s,e+r-a],this.v.v[5]=[t-s,e-r+i],this.v.o[5]=[t-s,e-r+a],this.v.i[5]=this.v.v[5],this.v.v[6]=[t-s+i,e-r],this.v.o[6]=this.v.v[6],this.v.i[6]=[t-s+a,e-r],this.v.v[7]=[t+s-i,e-r],this.v.o[7]=[t+s-a,e-r],this.v.i[7]=this.v.v[7]):(this.v.v[2]=[t-s+i,e+r],this.v.o[2]=[t-s+a,e+r],this.v.i[2]=this.v.v[2],this.v.v[3]=[t-s,e-r+i],this.v.o[3]=[t-s,e-r+a],this.v.i[3]=this.v.v[3])):(this.v.v[0]=[t+s,e-r+i],this.v.o[0]=[t+s,e-r+a],this.v.i[0]=this.v.v[0],0!==i?(this.v.v[1]=[t+s-i,e-r],this.v.o[1]=this.v.v[1],this.v.i[1]=[t+s-a,e-r],this.v.v[2]=[t-s+i,e-r],this.v.o[2]=[t-s+a,e-r],this.v.i[2]=this.v.v[2],this.v.v[3]=[t-s,e-r+i],this.v.o[3]=this.v.v[3],this.v.i[3]=[t-s,e-r+a],this.v.v[4]=[t-s,e+r-i],this.v.o[4]=[t-s,e+r-a],this.v.i[4]=this.v.v[4],this.v.v[5]=[t-s+i,e+r],this.v.o[5]=this.v.v[5],this.v.i[5]=[t-s+a,e+r],this.v.v[6]=[t+s-i,e+r],this.v.o[6]=[t+s-a,e+r],this.v.i[6]=this.v.v[6],this.v.v[7]=[t+s,e+r-i],this.v.o[7]=this.v.v[7],this.v.i[7]=[t+s,e+r-a]):(this.v.v[1]=[t-s+i,e-r],this.v.o[1]=[t-s+a,e-r],this.v.i[1]=this.v.v[1],this.v.v[2]=[t-s,e+r-i],this.v.o[2]=[t-s,e+r-a],this.v.i[2]=this.v.v[2],this.v.v[3]=[t+s-i,e+r],this.v.o[3]=[t+s-a,e+r],this.v.i[3]=this.v.v[3])),this.paths.length=0,this.paths[0]=this.v}return function(r,i){this.v={v:Array.apply(null,{length:8}),i:Array.apply(null,{length:8}),o:Array.apply(null,{length:8}),c:!0},this.resetPaths=[],this.paths=[],this.numNodes=8,this.elem=r,this.comp=r.comp,this.frameId=-1,this.d=i.d,this.dynamicProperties=[],this.mdf=!1,this.getValue=t,this.convertRectToPath=e,this.reset=s,this.p=PropertyFactory.getProp(r,i.p,1,0,this.dynamicProperties),this.s=PropertyFactory.getProp(r,i.s,1,0,this.dynamicProperties),this.r=PropertyFactory.getProp(r,i.r,0,0,this.dynamicProperties),this.dynamicProperties.length?this.k=!0:this.convertRectToPath()}}(),p={};return p.getShapeProp=a,p}(),ShapeModifiers=function(){function t(t,e){r[t]||(r[t]=e)}function e(t,e,s,i){return new r[t](e,s,i)}var s={},r={};return s.registerModifier=t,s.getModifier=e,s}();ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifier.prototype.addShapeToModifier=function(){},ShapeModifier.prototype.addShape=function(t){this.closed||(this.shapes.push({shape:t,last:[]}),this.addShapeToModifier(t))},ShapeModifier.prototype.init=function(t,e,s){this.elem=t,this.frameId=-1,this.shapes=[],this.dynamicProperties=[],this.mdf=!1,this.closed=!1,this.k=!1,this.isTrimming=!1,this.comp=t.comp,this.initModifierProperties(t,e),this.dynamicProperties.length?(this.k=!0,s.push(this)):this.getValue(!0)},extendPrototype(ShapeModifier,TrimModifier),TrimModifier.prototype.processKeys=function(t){if(this.elem.globalData.frameId!==this.frameId||t){this.mdf=t?!0:!1,this.frameId=this.elem.globalData.frameId;var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0);if(this.mdf||t){var r=this.o.v%360/360;0>r&&(r+=1);var i=this.s.v+r,a=this.e.v+r;if(i>a){var n=i;i=a,a=n}this.sValue=i,this.eValue=a,this.oValue=r}}},TrimModifier.prototype.initModifierProperties=function(t,e){this.sValue=0,this.eValue=0,this.oValue=0,this.getValue=this.processKeys,this.s=PropertyFactory.getProp(t,e.s,0,.01,this.dynamicProperties),this.e=PropertyFactory.getProp(t,e.e,0,.01,this.dynamicProperties),this.o=PropertyFactory.getProp(t,e.o,0,0,this.dynamicProperties),this.dynamicProperties.length||this.getValue(!0)},TrimModifier.prototype.getSegmentsLength=function(t){var e,s=t.c,r=t.v,i=t.o,a=t.i,n=r.length,o=[],h=0;for(e=0;n-1>e;e+=1)o[e]=bez.getBezierLength(r[e],r[e+1],i[e],a[e+1]),h+=o[e].addedLength;return s&&(o[e]=bez.getBezierLength(r[e],r[0],i[e],a[0]),h+=o[e].addedLength),{lengths:o,totalLength:h}},TrimModifier.prototype.processShapes=function(t){var e,s,r,i,a,n,o,h=this.shapes.length,l=this.sValue,p=this.eValue,m=0;if(p===l)for(s=0;h>s;s+=1)this.shapes[s].shape.paths=[],this.shapes[s].shape.mdf=!0;else if(1===p&&0===l||0===p&&1===l)for(s=0;h>s;s+=1)f=this.shapes[s],f.shape.paths!==f.last&&(f.shape.mdf=!0,f.last=f.shape.paths);else{var f,d,c=[];for(s=0;h>s;s+=1){if(f=this.shapes[s],f.shape.mdf||this.mdf||t){if(e=f.shape.paths,i=e.length,o=0,!f.shape.mdf&&f.pathsData)o=f.totalShapeLength;else{for(a=[],r=0;i>r;r+=1)n=this.getSegmentsLength(e[r]),a.push(n),o+=n.totalLength;f.totalShapeLength=o,f.pathsData=a}m+=o}else f.shape.paths=f.last;f.shape.mdf=!0}for(s=0;h>s;s+=1)if(d=[],f=this.shapes[s],f.shape.mdf){c.length=0,1>=p?c.push({s:f.totalShapeLength*l,e:f.totalShapeLength*p}):l>=1?c.push({s:f.totalShapeLength*(l-1),e:f.totalShapeLength*(p-1)}):(c.push({s:f.totalShapeLength*l,e:f.totalShapeLength}),c.push({s:0,e:f.totalShapeLength*(p-1)}));var u,y=this.addShapes(f,c[0]);d.push(y),c.length>1&&(f.shape.v.c?this.addShapes(f,c[1],y):(y.i[0]=[y.v[0][0],y.v[0][1]],u=y.v.length-1,y.o[u]=[y.v[u][0],y.v[u][1]],y=this.addShapes(f,c[1]),d.push(y))),y.i[0]=[y.v[0][0],y.v[0][1]],u=y.v.length-1,y.o[u]=[y.v[u][0],y.v[u][1]],f.last=d,f.shape.paths=d}}this.dynamicProperties.length||(this.mdf=!1)},TrimModifier.prototype.addSegment=function(t,e,s,r,i,a){i.o[a]=e,i.i[a+1]=s,i.v[a+1]=r,i.v[a]=t},TrimModifier.prototype.addShapes=function(t,e,s){var r,i,a,n,o,h,l,p=t.pathsData,m=t.shape.paths,f=m.length,d=0;for(s?o=s.v.length-1:(s={c:!1,v:[],i:[],o:[]},o=0),r=0;f>r;r+=1){for(h=p[r].lengths,a=m[r].c?h.length:h.length+1,i=1;a>i;i+=1)if(n=h[i-1],d+n.addedLength<e.s)d+=n.addedLength;else{if(d>e.e)break;e.s<=d&&e.e>=d+n.addedLength?this.addSegment(m[r].v[i-1],m[r].o[i-1],m[r].i[i],m[r].v[i],s,o):(l=bez.getNewSegment(m[r].v[i-1],m[r].v[i],m[r].o[i-1],m[r].i[i],(e.s-d)/n.addedLength,(e.e-d)/n.addedLength,h[i-1]),this.addSegment(l.pt1,l.pt3,l.pt4,l.pt2,s,o)),d+=n.addedLength,o+=1}if(m[r].c&&d<=e.e){var c=h[i-1].addedLength;e.s<=d&&e.e>=d+c?this.addSegment(m[r].v[i-1],m[r].o[i-1],m[r].i[0],m[r].v[0],s,o):(l=bez.getNewSegment(m[r].v[i-1],m[r].v[0],m[r].o[i-1],m[r].i[0],(e.s-d)/c,(e.e-d)/c,h[i-1]),this.addSegment(l.pt1,l.pt3,l.pt4,l.pt2,s,o))}}return s},ShapeModifiers.registerModifier("tm",TrimModifier),extendPrototype(ShapeModifier,RoundCornersModifier),RoundCornersModifier.prototype.processKeys=function(t){if(this.elem.globalData.frameId!==this.frameId||t){this.mdf=t?!0:!1,this.frameId=this.elem.globalData.frameId;var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0)}},RoundCornersModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(t,e.r,0,null,this.dynamicProperties),this.dynamicProperties.length||this.getValue(!0)},RoundCornersModifier.prototype.processPath=function(t,e){var s,r,i,a,n,o,h,l,p,m,f=t.v.length,d=[],c=[],u=[];for(s=0;f>s;s+=1)r=t.v[s],a=t.o[s],i=t.i[s],r[0]===a[0]&&r[1]===a[1]&&r[0]===i[0]&&r[1]===i[1]?0!==s&&s!==f-1||t.c?(n=0===s?t.v[f-1]:t.v[s-1],p=Math.sqrt(Math.pow(r[0]-n[0],2)+Math.pow(r[1]-n[1],2)),m=p?Math.min(p/2,e)/p:0,o=[r[0]+(n[0]-r[0])*m,r[1]-(r[1]-n[1])*m],l=o,h=[o[0]-(o[0]-r[0])*roundCorner,o[1]-(o[1]-r[1])*roundCorner],d.push(o),c.push(h),u.push(l),n=s===f-1?t.v[0]:t.v[s+1],p=Math.sqrt(Math.pow(r[0]-n[0],2)+Math.pow(r[1]-n[1],2)),m=p?Math.min(p/2,e)/p:0,o=[r[0]+(n[0]-r[0])*m,r[1]+(n[1]-r[1])*m],l=[o[0]-(o[0]-r[0])*roundCorner,o[1]-(o[1]-r[1])*roundCorner],h=o,d.push(o),c.push(h),u.push(l)):(d.push(r),c.push(a),u.push(i)):(d.push(t.v[s]),c.push(t.o[s]),u.push(t.i[s]));return{v:d,o:c,i:u,c:t.c}},RoundCornersModifier.prototype.processShapes=function(){var t,e,s,r,i=this.shapes.length,a=this.rd.v;if(0!==a){var n,o;for(e=0;i>e;e+=1)if(o=[],n=this.shapes[e],n.shape.mdf||this.mdf){for(n.shape.mdf=!0,t=n.shape.paths,r=t.length,s=0;r>s;s+=1)o.push(this.processPath(t[s],a));n.shape.paths=o,n.last=o}else n.shape.paths=n.last}this.dynamicProperties.length||(this.mdf=!1)},ShapeModifiers.registerModifier("rd",RoundCornersModifier);var ImagePreloader=function(){function t(){this.loadedAssets+=1,this.loadedAssets===this.totalImages}function e(t){var e="";if(this.assetsPath){var s=t.p;-1!==s.indexOf("images/")&&(s=s.split("/")[1]),e=this.assetsPath+s}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e}function s(e){var s=document.createElement("img");s.addEventListener("load",t.bind(this),!1),s.addEventListener("error",t.bind(this),!1),s.src=e}function r(t){this.totalAssets=t.length;var r;for(r=0;r<this.totalAssets;r+=1)t[r].layers||(s.bind(this)(e.bind(this)(t[r])),this.totalImages+=1)}function i(t){this.path=t||""}function a(t){this.assetsPath=t||""}return function(){this.loadAssets=r,this.setAssetsPath=a,this.setPath=i,this.assetsPath="",this.path="",this.totalAssets=0,this.totalImages=0,this.loadedAssets=0}}(),featureSupport=function(){var t={maskType:!0};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),t}(),filtersFactory=function(){function t(t){var e=document.createElementNS(svgNS,"filter");return e.setAttribute("id",t),e.setAttribute("filterUnits","objectBoundingBox"),e.setAttribute("x","0%"),e.setAttribute("y","0%"),e.setAttribute("width","100%"),e.setAttribute("height","100%"),e}function e(){var t=document.createElementNS(svgNS,"feColorMatrix");return t.setAttribute("type","matrix"),t.setAttribute("color-interpolation-filters","sRGB"),t.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 0 1"),t}var s={};return s.createFilter=t,s.createAlphaToLuminanceFilter=e,s}();BaseRenderer.prototype.checkLayers=function(t){var e,s,r=this.layers.length;for(this.completeLayers=!0,e=r-1;e>=0;e--)this.elements[e]||(s=this.layers[e],s.ip-s.st<=t-this.layers[e].st&&s.op-s.st>t-this.layers[e].st&&this.buildItem(e)),this.completeLayers=this.elements[e]?this.completeLayers:!1;this.checkPendingElements()},BaseRenderer.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 99:return null}return this.createBase(t)},BaseRenderer.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;e>t;t+=1)this.buildItem(t);this.checkPendingElements()},BaseRenderer.prototype.includeLayers=function(t){this.completeLayers=!1;var e,s,r=t.length,i=this.layers.length;for(e=0;r>e;e+=1)for(s=0;i>s;){if(this.layers[s].id==t[e].id){this.layers[s]=t[e];break}s+=1}},BaseRenderer.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},BaseRenderer.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},BaseRenderer.prototype.buildElementParenting=function(t,e,s){s=s||[];for(var r=this.elements,i=this.layers,a=0,n=i.length;n>a;)i[a].ind==e&&(r[a]&&r[a]!==!0?void 0!==i[a].parent?(s.push(r[a]),this.buildElementParenting(t,i[a].parent,s)):(s.push(r[a]),t.setHierarchy(s)):(this.buildItem(a),this.addPendingElement(t))),a+=1},BaseRenderer.prototype.addPendingElement=function(t){this.pendingElements.push(t)},extendPrototype(BaseRenderer,SVGRenderer),SVGRenderer.prototype.createBase=function(t){return new SVGBaseElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.createShape=function(t){return new IShapeElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.createText=function(t){return new SVGTextElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.createImage=function(t){return new IImageElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.createComp=function(t){return new ICompElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.createSolid=function(t){return new ISolidElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.configAnimation=function(t){this.layerElement=document.createElementNS(svgNS,"svg"),this.layerElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.layerElement.setAttribute("width",t.w),this.layerElement.setAttribute("height",t.h),this.layerElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.layerElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.layerElement.style.width="100%",this.layerElement.style.height="100%",this.animationItem.wrapper.appendChild(this.layerElement);var e=document.createElementNS(svgNS,"defs");this.globalData.defs=e,this.layerElement.appendChild(e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.globalData.frameId=0,this.globalData.compSize={w:t.w,h:t.h},this.globalData.frameRate=t.fr;var s=document.createElementNS(svgNS,"clipPath"),r=document.createElementNS(svgNS,"rect");r.setAttribute("width",t.w),r.setAttribute("height",t.h),r.setAttribute("x",0),r.setAttribute("y",0);var i="animationMask_"+randomString(10);s.setAttribute("id",i),s.appendChild(r);var a=document.createElementNS(svgNS,"g");a.setAttribute("clip-path","url(#"+i+")"),this.layerElement.appendChild(a),e.appendChild(s),this.layerElement=a,this.layers=t.layers,this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.elements=Array.apply(null,{length:t.layers.length})},SVGRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML="",this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;e>t;t++)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRenderer.prototype.updateContainerSize=function(){},SVGRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!=this.layers[t].ty){e[t]=!0;var s=this.createItem(this.layers[t]);e[t]=s,expressionsPlugin&&(0===this.layers[t].ty&&this.globalData.projectInterface.registerComposition(s),s.initExpressions()),this.appendElementInPos(s,t),this.layers[t].tt&&(this.elements[t-1]&&this.elements[t-1]!==!0?s.setMatte(e[t-1].layerId):(this.buildItem(t-1),this.addPendingElement(s)))}},SVGRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,s=this.elements.length;s>e;){if(this.elements[e]===t){t.setMatte(this.elements[e-1].layerId);break}e+=1}}},SVGRenderer.prototype.renderFrame=function(t){if(this.renderedFrame!=t&&!this.destroyed){null===t?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t;var e,s=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=s-1;e>=0;e--)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);for(e=s-1;e>=0;e--)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},SVGRenderer.prototype.appendElementInPos=function(t,e){var s=t.getBaseElement();if(s){for(var r,i=0;e>i;)this.elements[i]&&this.elements[i]!==!0&&this.elements[i].getBaseElement()&&(r=this.elements[i].getBaseElement()),i+=1;r?this.layerElement.insertBefore(s,r):this.layerElement.appendChild(s)}},SVGRenderer.prototype.hide=function(){this.layerElement.style.display="none"},SVGRenderer.prototype.show=function(){this.layerElement.style.display="block"},SVGRenderer.prototype.searchExtraCompositions=function(t){var e,s=t.length,r=document.createElementNS(svgNS,"g");for(e=0;s>e;e+=1)if(t[e].xt){var i=this.createComp(t[e],r,this.globalData.comp,null);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},MaskElement.prototype.getMaskProperty=function(t){return this.viewData[t].prop},MaskElement.prototype.prepareFrame=function(){var t,e=this.dynamicProperties.length;for(t=0;e>t;t+=1)this.dynamicProperties[t].getValue()},MaskElement.prototype.renderFrame=function(t){var e,s=this.masksProperties.length;for(e=0;s>e;e++)if((this.viewData[e].prop.mdf||this.firstFrame)&&this.drawPath(this.masksProperties[e],this.viewData[e].prop.v,this.viewData[e]),(this.viewData[e].op.mdf||this.firstFrame)&&this.viewData[e].elem.setAttribute("fill-opacity",this.viewData[e].op.v),"n"!==this.masksProperties[e].mode&&(this.viewData[e].invRect&&(this.element.finalTransform.mProp.mdf||this.firstFrame)&&(this.viewData[e].invRect.setAttribute("x",-t.props[12]),this.viewData[e].invRect.setAttribute("y",-t.props[13])),this.storedData[e].x&&(this.storedData[e].x.mdf||this.firstFrame))){var r=this.storedData[e].expan;this.storedData[e].x.v<0?("erode"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="erode",this.storedData[e].elem.setAttribute("filter","url(#"+this.storedData[e].filterId+")")),r.setAttribute("radius",-this.storedData[e].x.v)):("dilate"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="dilate",this.storedData[e].elem.setAttribute("filter",null)),this.storedData[e].elem.setAttribute("stroke-width",2*this.storedData[e].x.v))}this.firstFrame=!1},MaskElement.prototype.getMaskelement=function(){return this.maskElement},MaskElement.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" "},MaskElement.prototype.drawPath=function(t,e,s){var r,i,a="";for(i=e.v.length,r=1;i>r;r+=1)1==r&&(a+=" M"+bm_rnd(e.v[0][0])+","+bm_rnd(e.v[0][1])),a+=" C"+bm_rnd(e.o[r-1][0])+","+bm_rnd(e.o[r-1][1])+" "+bm_rnd(e.i[r][0])+","+bm_rnd(e.i[r][1])+" "+bm_rnd(e.v[r][0])+","+bm_rnd(e.v[r][1]);e.c&&i>1&&(a+=" C"+bm_rnd(e.o[r-1][0])+","+bm_rnd(e.o[r-1][1])+" "+bm_rnd(e.i[0][0])+","+bm_rnd(e.i[0][1])+" "+bm_rnd(e.v[0][0])+","+bm_rnd(e.v[0][1])),s.lastPath!==a&&(s.elem&&(e.c?t.inv?s.elem.setAttribute("d",this.solidPath+a):s.elem.setAttribute("d",a):s.elem.setAttribute("d","")),s.lastPath=a)},MaskElement.prototype.getMask=function(t){for(var e=0,s=this.masksProperties.length;s>e;){if(this.masksProperties[e].nm===t)return{maskPath:this.viewData[e].prop.pv};e+=1}},MaskElement.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.paths=null,this.masksProperties=null},BaseElement.prototype.checkMasks=function(){if(!this.data.hasMask)return!1;for(var t=0,e=this.data.masksProperties.length;e>t;){if("n"!==this.data.masksProperties[t].mode&&this.data.masksProperties[t].cl!==!1)return!0;t+=1}return!1},BaseElement.prototype.checkParenting=function(){void 0!==this.data.parent&&this.comp.buildElementParenting(this,this.data.parent)},BaseElement.prototype.prepareFrame=function(t){this.data.ip-this.data.st<=t&&this.data.op-this.data.st>t?this.isVisible!==!0&&(this.elemMdf=!0,this.globalData.mdf=!0,this.isVisible=!0,this.firstFrame=!0,this.data.hasMask&&(this.maskManager.firstFrame=!0)):this.isVisible!==!1&&(this.elemMdf=!0,this.globalData.mdf=!0,this.isVisible=!1);var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.elemMdf=!0,this.globalData.mdf=!0);return this.data.hasMask&&this.maskManager.prepareFrame(t*this.data.sr),this.currentFrameNum=t*this.data.sr,this.isVisible},BaseElement.prototype.globalToLocal=function(t){var e=[];e.push(this.finalTransform);for(var s=!0,r=this.comp;s;)r.finalTransform?(r.data.hasMask&&e.splice(0,0,r.finalTransform),r=r.comp):s=!1;var i,a,n=e.length;for(i=0;n>i;i+=1)a=e[i].mat.applyToPointArray(0,0,0),t=[t[0]-a[0],t[1]-a[1],0];return t},BaseElement.prototype.initExpressions=function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.layerInterface.registerMaskInterface(this.maskManager);var t=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(t),0===this.data.ty||this.data.xt?this.compInterface=CompExpressionInterface(this):4===this.data.ty&&(this.layerInterface.shapeInterface=ShapeExpressionInterface.createShapeInterface(this.shapesData,this.viewData,this.layerInterface))},BaseElement.prototype.setBlendMode=function(){var t="";switch(this.data.bm){case 1:t="multiply";break;case 2:t="screen";break;case 3:t="overlay";break;case 4:t="darken";break;case 5:t="lighten";break;case 6:t="color-dodge";break;case 7:t="color-burn";break;case 8:t="hard-light";break;case 9:t="soft-light";break;case 10:t="difference";break;case 11:t="exclusion";break;case 12:t="hue";break;case 13:t="saturation";break;case 14:t="color";break;case 15:t="luminosity"}var e=this.baseElement||this.layerElement;e.style["mix-blend-mode"]=t},BaseElement.prototype.init=function(){this.data.sr||(this.data.sr=1),this.dynamicProperties=[],this.data.ef&&(this.effects=new EffectsManager(this.data,this,this.dynamicProperties)),this.hidden=!1,this.firstFrame=!0,this.isVisible=!1,this.currentFrameNum=-99999,this.lastNum=-99999,this.data.ks&&(this.finalTransform={mProp:PropertyFactory.getProp(this,this.data.ks,2,null,this.dynamicProperties),matMdf:!1,opMdf:!1,mat:new Matrix,opacity:1},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.finalTransform.op=this.finalTransform.mProp.o,this.transform=this.finalTransform.mProp,11!==this.data.ty&&this.createElements(),this.data.hasMask&&this.addMasks(this.data)),this.elemMdf=!1},BaseElement.prototype.getType=function(){return this.type},BaseElement.prototype.resetHierarchy=function(){this.hierarchy?this.hierarchy.length=0:this.hierarchy=[]},BaseElement.prototype.getHierarchy=function(){return this.hierarchy||(this.hierarchy=[]),this.hierarchy},BaseElement.prototype.setHierarchy=function(t){this.hierarchy=t},BaseElement.prototype.getLayerSize=function(){return 5===this.data.ty?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}},BaseElement.prototype.hide=function(){},BaseElement.prototype.mHelper=new Matrix,createElement(BaseElement,SVGBaseElement),SVGBaseElement.prototype.createElements=function(){this.layerElement=document.createElementNS(svgNS,"g"),this.transformedElement=this.layerElement,this.data.hasMask&&(this.maskedElement=this.layerElement);var t=null;if(this.data.td){if(3==this.data.td||1==this.data.td){var e=document.createElementNS(svgNS,"mask");if(e.setAttribute("id",this.layerId),e.setAttribute("mask-type",3==this.data.td?"luminance":"alpha"),e.appendChild(this.layerElement),t=e,this.globalData.defs.appendChild(e),!featureSupport.maskType&&1==this.data.td){e.setAttribute("mask-type","luminance");var s=randomString(10),r=filtersFactory.createFilter(s);this.globalData.defs.appendChild(r),r.appendChild(filtersFactory.createAlphaToLuminanceFilter());var i=document.createElementNS(svgNS,"g");i.appendChild(this.layerElement),t=i,e.appendChild(i),i.setAttribute("filter","url(#"+s+")")}}else if(2==this.data.td){var a=document.createElementNS(svgNS,"mask");a.setAttribute("id",this.layerId),a.setAttribute("mask-type","alpha");var n=document.createElementNS(svgNS,"g");a.appendChild(n);var s=randomString(10),r=filtersFactory.createFilter(s),o=document.createElementNS(svgNS,"feColorMatrix");o.setAttribute("type","matrix"),o.setAttribute("color-interpolation-filters","sRGB"),o.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1"),r.appendChild(o),this.globalData.defs.appendChild(r);var h=document.createElementNS(svgNS,"rect");if(h.setAttribute("width",this.comp.data?this.comp.data.w:this.globalData.compSize.w),h.setAttribute("height",this.comp.data?this.comp.data.h:this.globalData.compSize.h),h.setAttribute("x","0"),h.setAttribute("y","0"),h.setAttribute("fill","#ffffff"),h.setAttribute("opacity","0"),n.setAttribute("filter","url(#"+s+")"),n.appendChild(h),n.appendChild(this.layerElement),t=n,!featureSupport.maskType){a.setAttribute("mask-type","luminance"),r.appendChild(filtersFactory.createAlphaToLuminanceFilter());var i=document.createElementNS(svgNS,"g");n.appendChild(h),i.appendChild(this.layerElement),t=i,n.appendChild(i)}this.globalData.defs.appendChild(a)}}else(this.data.hasMask||this.data.tt)&&this.data.tt?(this.matteElement=document.createElementNS(svgNS,"g"),this.matteElement.appendChild(this.layerElement),t=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(!this.data.ln&&!this.data.cl||4!==this.data.ty&&0!==this.data.ty||(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl)),0===this.data.ty){var l=document.createElementNS(svgNS,"clipPath"),p=document.createElementNS(svgNS,"path");p.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var m="cp_"+randomString(8);if(l.setAttribute("id",m),l.appendChild(p),this.globalData.defs.appendChild(l),this.checkMasks()){var f=document.createElementNS(svgNS,"g");f.setAttribute("clip-path","url(#"+m+")"),f.appendChild(this.layerElement),this.transformedElement=f,t?t.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url(#"+m+")")}0!==this.data.bm&&this.setBlendMode(),this.layerElement!==this.parentContainer&&(this.placeholder=null),this.data.ef&&(this.effectsManager=new SVGEffects(this)),this.checkParenting()},SVGBaseElement.prototype.setBlendMode=BaseElement.prototype.setBlendMode,SVGBaseElement.prototype.renderFrame=function(t){if(3===this.data.ty||this.data.hd)return!1;if(!this.isVisible)return this.isVisible;this.lastNum=this.currentFrameNum,this.finalTransform.opMdf=this.finalTransform.op.mdf,this.finalTransform.matMdf=this.finalTransform.mProp.mdf,this.finalTransform.opacity=this.finalTransform.op.v,this.firstFrame&&(this.finalTransform.opMdf=!0,this.finalTransform.matMdf=!0);var e,s=this.finalTransform.mat;if(this.hierarchy){var r,i=this.hierarchy.length;for(e=this.finalTransform.mProp.v.props,s.cloneFromProps(e),r=0;i>r;r+=1)this.finalTransform.matMdf=this.hierarchy[r].finalTransform.mProp.mdf?!0:this.finalTransform.matMdf,e=this.hierarchy[r].finalTransform.mProp.v.props,s.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}else this.isVisible&&s.cloneFromProps(this.finalTransform.mProp.v.props);return t&&(e=t.mat.props,s.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),this.finalTransform.opacity*=t.opacity,this.finalTransform.opMdf=t.opMdf?!0:this.finalTransform.opMdf,this.finalTransform.matMdf=t.matMdf?!0:this.finalTransform.matMdf),this.finalTransform.matMdf&&this.layerElement&&this.transformedElement.setAttribute("transform",s.to2dCSS()),this.finalTransform.opMdf&&this.layerElement&&this.transformedElement.setAttribute("opacity",this.finalTransform.opacity),this.data.hasMask&&this.maskManager.renderFrame(s),this.effectsManager&&this.effectsManager.renderFrame(this.firstFrame),this.isVisible},SVGBaseElement.prototype.destroy=function(){this.layerElement=null,this.parentContainer=null,this.matteElement&&(this.matteElement=null),this.maskManager&&this.maskManager.destroy()},SVGBaseElement.prototype.getBaseElement=function(){return this.baseElement},SVGBaseElement.prototype.addMasks=function(t){this.maskManager=new MaskElement(t,this,this.globalData)},SVGBaseElement.prototype.setMatte=function(t){this.matteElement&&this.matteElement.setAttribute("mask","url(#"+t+")")},SVGBaseElement.prototype.setMatte=function(t){this.matteElement&&this.matteElement.setAttribute("mask","url(#"+t+")")},SVGBaseElement.prototype.hide=function(){},ITextElement.prototype.init=function(){this._parent.init.call(this),this.lettersChangedFlag=!1,this.currentTextDocumentData={};var t=this.data;this.viewData={m:{a:PropertyFactory.getProp(this,t.t.m.a,1,0,this.dynamicProperties)}};var e=this.data.t;if(e.a.length){this.viewData.a=Array.apply(null,{length:e.a.length});var s,r,i,a=e.a.length;for(s=0;a>s;s+=1)i=e.a[s],r={a:{},s:{}},"r"in i.a&&(r.a.r=PropertyFactory.getProp(this,i.a.r,0,degToRads,this.dynamicProperties)),"rx"in i.a&&(r.a.rx=PropertyFactory.getProp(this,i.a.rx,0,degToRads,this.dynamicProperties)),"ry"in i.a&&(r.a.ry=PropertyFactory.getProp(this,i.a.ry,0,degToRads,this.dynamicProperties)),"sk"in i.a&&(r.a.sk=PropertyFactory.getProp(this,i.a.sk,0,degToRads,this.dynamicProperties)),"sa"in i.a&&(r.a.sa=PropertyFactory.getProp(this,i.a.sa,0,degToRads,this.dynamicProperties)),"s"in i.a&&(r.a.s=PropertyFactory.getProp(this,i.a.s,1,.01,this.dynamicProperties)),"a"in i.a&&(r.a.a=PropertyFactory.getProp(this,i.a.a,1,0,this.dynamicProperties)),"o"in i.a&&(r.a.o=PropertyFactory.getProp(this,i.a.o,0,.01,this.dynamicProperties)),"p"in i.a&&(r.a.p=PropertyFactory.getProp(this,i.a.p,1,0,this.dynamicProperties)),"sw"in i.a&&(r.a.sw=PropertyFactory.getProp(this,i.a.sw,0,0,this.dynamicProperties)),"sc"in i.a&&(r.a.sc=PropertyFactory.getProp(this,i.a.sc,1,0,this.dynamicProperties)),"fc"in i.a&&(r.a.fc=PropertyFactory.getProp(this,i.a.fc,1,0,this.dynamicProperties)),"fh"in i.a&&(r.a.fh=PropertyFactory.getProp(this,i.a.fh,0,0,this.dynamicProperties)),"fs"in i.a&&(r.a.fs=PropertyFactory.getProp(this,i.a.fs,0,.01,this.dynamicProperties)),"fb"in i.a&&(r.a.fb=PropertyFactory.getProp(this,i.a.fb,0,.01,this.dynamicProperties)),"t"in i.a&&(r.a.t=PropertyFactory.getProp(this,i.a.t,0,0,this.dynamicProperties)),r.s=PropertyFactory.getTextSelectorProp(this,i.s,this.dynamicProperties),r.s.t=i.s.t,this.viewData.a[s]=r}else this.viewData.a=[];e.p&&"m"in e.p?(this.viewData.p={f:PropertyFactory.getProp(this,e.p.f,0,0,this.dynamicProperties),l:PropertyFactory.getProp(this,e.p.l,0,0,this.dynamicProperties),r:e.p.r,m:this.maskManager.getMaskProperty(e.p.m)},this.maskPath=!0):this.maskPath=!1},ITextElement.prototype.prepareFrame=function(t){var e=0,s=this.data.t.d.k.length,r=this.data.t.d.k[e].s;for(e+=1;s>e&&!(this.data.t.d.k[e].t>t);)r=this.data.t.d.k[e].s,e+=1;this.lettersChangedFlag=!1,r!==this.currentTextDocumentData&&(this.currentTextDocumentData=r,this.lettersChangedFlag=!0,this.buildNewText()),this._parent.prepareFrame.call(this,t)},ITextElement.prototype.createPathShape=function(t,e){var s,r,i,a,n=e.length,o="";for(s=0;n>s;s+=1){for(i=e[s].ks.k.i.length,a=e[s].ks.k,r=1;i>r;r+=1)1==r&&(o+=" M"+t.applyToPointStringified(a.v[0][0],a.v[0][1])),o+=" C"+t.applyToPointStringified(a.o[r-1][0],a.o[r-1][1])+" "+t.applyToPointStringified(a.i[r][0],a.i[r][1])+" "+t.applyToPointStringified(a.v[r][0],a.v[r][1]);o+=" C"+t.applyToPointStringified(a.o[r-1][0],a.o[r-1][1])+" "+t.applyToPointStringified(a.i[0][0],a.i[0][1])+" "+t.applyToPointStringified(a.v[0][0],a.v[0][1]),
o+="z"}return o},ITextElement.prototype.getMeasures=function(){var t,e,s,r,i=this.mHelper,a=this.renderType,n=this.data,o=this.currentTextDocumentData,h=o.l;if(this.maskPath){var l=this.viewData.p.m;if(!this.viewData.p.n||this.viewData.p.mdf){var p=l.v;this.viewData.p.r&&(p=reversePath(p));var m={tLength:0,segments:[]};r=p.v.length-1;var f,d=0;for(s=0;r>s;s+=1)f={s:p.v[s],e:p.v[s+1],to:[p.o[s][0]-p.v[s][0],p.o[s][1]-p.v[s][1]],ti:[p.i[s+1][0]-p.v[s+1][0],p.i[s+1][1]-p.v[s+1][1]]},bez.buildBezierData(f),m.tLength+=f.bezierData.segmentLength,m.segments.push(f),d+=f.bezierData.segmentLength;s=r,l.v.c&&(f={s:p.v[s],e:p.v[0],to:[p.o[s][0]-p.v[s][0],p.o[s][1]-p.v[s][1]],ti:[p.i[0][0]-p.v[0][0],p.i[0][1]-p.v[0][1]]},bez.buildBezierData(f),m.tLength+=f.bezierData.segmentLength,m.segments.push(f),d+=f.bezierData.segmentLength),this.viewData.p.pi=m}var c,u,y,m=this.viewData.p.pi,g=this.viewData.p.f.v,v=0,b=1,E=0,P=!0,k=m.segments;if(0>g&&l.v.c)for(m.tLength<Math.abs(g)&&(g=-Math.abs(g)%m.tLength),v=k.length-1,y=k[v].bezierData.points,b=y.length-1;0>g;)g+=y[b].partialLength,b-=1,0>b&&(v-=1,y=k[v].bezierData.points,b=y.length-1);y=k[v].bezierData.points,u=y[b-1],c=y[b];var S,x,C=c.partialLength}r=h.length,t=0,e=0;var M,D,A,T,F,w=1.2*o.s*.714,I=!0,V=this.viewData,B=Array.apply(null,{length:r});T=V.a.length;var R,N,_,L,G,j,z,O,H,W,q,X,Y,U,Z,J,K=-1,Q=g,$=v,tt=b,et=-1,st=0;for(s=0;r>s;s+=1)if(i.reset(),j=1,h[s].n)t=0,e+=o.yOffset,e+=I?1:0,g=Q,I=!1,st=0,this.maskPath&&(v=$,b=tt,y=k[v].bezierData.points,u=y[b-1],c=y[b],C=c.partialLength,E=0),B[s]=this.emptyProp;else{if(this.maskPath){if(et!==h[s].line){switch(o.j){case 1:g+=d-o.lineWidths[h[s].line];break;case 2:g+=(d-o.lineWidths[h[s].line])/2}et=h[s].line}K!==h[s].ind&&(h[K]&&(g+=h[K].extra),g+=h[s].an/2,K=h[s].ind),g+=V.m.a.v[0]*h[s].an/200;var rt=0;for(A=0;T>A;A+=1)M=V.a[A].a,"p"in M&&(D=V.a[A].s,N=D.getMult(h[s].anIndexes[A],n.t.a[A].s.totalChars),rt+=N.length?M.p.v[0]*N[0]:M.p.v[0]*N);for(P=!0;P;)E+C>=g+rt||!y?(S=(g+rt-E)/c.partialLength,L=u.point[0]+(c.point[0]-u.point[0])*S,G=u.point[1]+(c.point[1]-u.point[1])*S,i.translate(0,-(V.m.a.v[1]*w/100)+e),P=!1):y&&(E+=c.partialLength,b+=1,b>=y.length&&(b=0,v+=1,k[v]?y=k[v].bezierData.points:l.v.c?(b=0,v=0,y=k[v].bezierData.points):(E-=c.partialLength,y=null)),y&&(u=c,c=y[b],C=c.partialLength));_=h[s].an/2-h[s].add,i.translate(-_,0,0)}else _=h[s].an/2-h[s].add,i.translate(-_,0,0),i.translate(-V.m.a.v[0]*h[s].an/200,-V.m.a.v[1]*w/100,0);for(st+=h[s].l/2,A=0;T>A;A+=1)M=V.a[A].a,"t"in M&&(D=V.a[A].s,N=D.getMult(h[s].anIndexes[A],n.t.a[A].s.totalChars),this.maskPath?g+=N.length?M.t*N[0]:M.t*N:t+=N.length?M.t.v*N[0]:M.t.v*N);for(st+=h[s].l/2,o.strokeWidthAnim&&(O=o.sw||0),o.strokeColorAnim&&(z=o.sc?[o.sc[0],o.sc[1],o.sc[2]]:[0,0,0]),o.fillColorAnim&&(H=[o.fc[0],o.fc[1],o.fc[2]]),A=0;T>A;A+=1)M=V.a[A].a,"a"in M&&(D=V.a[A].s,N=D.getMult(h[s].anIndexes[A],n.t.a[A].s.totalChars),N.length?i.translate(-M.a.v[0]*N[0],-M.a.v[1]*N[1],M.a.v[2]*N[2]):i.translate(-M.a.v[0]*N,-M.a.v[1]*N,M.a.v[2]*N));for(A=0;T>A;A+=1)M=V.a[A].a,"s"in M&&(D=V.a[A].s,N=D.getMult(h[s].anIndexes[A],n.t.a[A].s.totalChars),N.length?i.scale(1+(M.s.v[0]-1)*N[0],1+(M.s.v[1]-1)*N[1],1):i.scale(1+(M.s.v[0]-1)*N,1+(M.s.v[1]-1)*N,1));for(A=0;T>A;A+=1){if(M=V.a[A].a,D=V.a[A].s,N=D.getMult(h[s].anIndexes[A],n.t.a[A].s.totalChars),"sk"in M&&(N.length?i.skewFromAxis(-M.sk.v*N[0],M.sa.v*N[1]):i.skewFromAxis(-M.sk.v*N,M.sa.v*N)),"r"in M&&i.rotateZ(N.length?-M.r.v*N[2]:-M.r.v*N),"ry"in M&&i.rotateY(N.length?M.ry.v*N[1]:M.ry.v*N),"rx"in M&&i.rotateX(N.length?M.rx.v*N[0]:M.rx.v*N),"o"in M&&(j+=N.length?(M.o.v*N[0]-j)*N[0]:(M.o.v*N-j)*N),o.strokeWidthAnim&&"sw"in M&&(O+=N.length?M.sw.v*N[0]:M.sw.v*N),o.strokeColorAnim&&"sc"in M)for(W=0;3>W;W+=1)z[W]=Math.round(N.length?255*(z[W]+(M.sc.v[W]-z[W])*N[0]):255*(z[W]+(M.sc.v[W]-z[W])*N));if(o.fillColorAnim){if("fc"in M)for(W=0;3>W;W+=1)H[W]=N.length?H[W]+(M.fc.v[W]-H[W])*N[0]:H[W]+(M.fc.v[W]-H[W])*N;"fh"in M&&(H=N.length?addHueToRGB(H,M.fh.v*N[0]):addHueToRGB(H,M.fh.v*N)),"fs"in M&&(H=N.length?addSaturationToRGB(H,M.fs.v*N[0]):addSaturationToRGB(H,M.fs.v*N)),"fb"in M&&(H=N.length?addBrightnessToRGB(H,M.fb.v*N[0]):addBrightnessToRGB(H,M.fb.v*N))}}for(A=0;T>A;A+=1)M=V.a[A].a,"p"in M&&(D=V.a[A].s,N=D.getMult(h[s].anIndexes[A],n.t.a[A].s.totalChars),this.maskPath?N.length?i.translate(0,M.p.v[1]*N[0],-M.p.v[2]*N[1]):i.translate(0,M.p.v[1]*N,-M.p.v[2]*N):N.length?i.translate(M.p.v[0]*N[0],M.p.v[1]*N[1],-M.p.v[2]*N[2]):i.translate(M.p.v[0]*N,M.p.v[1]*N,-M.p.v[2]*N));if(o.strokeWidthAnim&&(q=0>O?0:O),o.strokeColorAnim&&(X="rgb("+Math.round(255*z[0])+","+Math.round(255*z[1])+","+Math.round(255*z[2])+")"),o.fillColorAnim&&(Y="rgb("+Math.round(255*H[0])+","+Math.round(255*H[1])+","+Math.round(255*H[2])+")"),this.maskPath){if(n.t.p.p){x=(c.point[1]-u.point[1])/(c.point[0]-u.point[0]);var it=180*Math.atan(x)/Math.PI;c.point[0]<u.point[0]&&(it+=180),i.rotate(-it*Math.PI/180)}i.translate(L,G,0),i.translate(V.m.a.v[0]*h[s].an/200,V.m.a.v[1]*w/100,0),g-=V.m.a.v[0]*h[s].an/200,h[s+1]&&K!==h[s+1].ind&&(g+=h[s].an/2,g+=o.tr/1e3*o.s)}else{switch(i.translate(t,e,0),o.ps&&i.translate(o.ps[0],o.ps[1]+o.ascent,0),o.j){case 1:i.translate(o.justifyOffset+(o.boxWidth-o.lineWidths[h[s].line]),0,0);break;case 2:i.translate(o.justifyOffset+(o.boxWidth-o.lineWidths[h[s].line])/2,0,0)}i.translate(_,0,0),i.translate(V.m.a.v[0]*h[s].an/200,V.m.a.v[1]*w/100,0),t+=h[s].l+o.tr/1e3*o.s}"html"===a?U=i.toCSS():"svg"===a?U=i.to2dCSS():Z=[i.props[0],i.props[1],i.props[2],i.props[3],i.props[4],i.props[5],i.props[6],i.props[7],i.props[8],i.props[9],i.props[10],i.props[11],i.props[12],i.props[13],i.props[14],i.props[15]],J=j,R=this.renderedLetters[s],!R||R.o===J&&R.sw===q&&R.sc===X&&R.fc===Y?"svg"!==a&&"html"!==a||R&&R.m===U?"canvas"!==a||R&&R.props[0]===Z[0]&&R.props[1]===Z[1]&&R.props[4]===Z[4]&&R.props[5]===Z[5]&&R.props[12]===Z[12]&&R.props[13]===Z[13]?F=R:(this.lettersChangedFlag=!0,F=new LetterProps(J,q,X,Y,null,Z)):(this.lettersChangedFlag=!0,F=new LetterProps(J,q,X,Y,U)):(this.lettersChangedFlag=!0,F=new LetterProps(J,q,X,Y,U,Z)),this.renderedLetters[s]=F}},ITextElement.prototype.emptyProp=new LetterProps,createElement(SVGBaseElement,SVGTextElement),SVGTextElement.prototype.init=ITextElement.prototype.init,SVGTextElement.prototype.createPathShape=ITextElement.prototype.createPathShape,SVGTextElement.prototype.getMeasures=ITextElement.prototype.getMeasures,SVGTextElement.prototype.prepareFrame=ITextElement.prototype.prepareFrame,SVGTextElement.prototype.createElements=function(){this._parent.createElements.call(this),this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl)},SVGTextElement.prototype.buildNewText=function(){var t,e,s=this.currentTextDocumentData;this.renderedLetters=Array.apply(null,{length:this.currentTextDocumentData.l?this.currentTextDocumentData.l.length:0}),s.fc?this.layerElement.setAttribute("fill","rgb("+Math.round(255*s.fc[0])+","+Math.round(255*s.fc[1])+","+Math.round(255*s.fc[2])+")"):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),s.sc&&(this.layerElement.setAttribute("stroke","rgb("+Math.round(255*s.sc[0])+","+Math.round(255*s.sc[1])+","+Math.round(255*s.sc[2])+")"),this.layerElement.setAttribute("stroke-width",s.sw)),this.layerElement.setAttribute("font-size",s.s);var r=this.globalData.fontManager.getFontByName(s.f);if(r.fClass)this.layerElement.setAttribute("class",r.fClass);else{this.layerElement.setAttribute("font-family",r.fFamily);var i=s.fWeight,a=s.fStyle;this.layerElement.setAttribute("font-style",a),this.layerElement.setAttribute("font-weight",i)}var n=s.l||[];if(e=n.length){var o,h,l=this.mHelper,p="",m=this.data.singleShape;if(m)var f=0,d=0,c=s.lineWidths,u=s.boxWidth,y=!0;var g=0;for(t=0;e>t;t+=1){if(this.globalData.fontManager.chars?m&&0!==t||(o=this.textSpans[g]?this.textSpans[g]:document.createElementNS(svgNS,"path")):o=this.textSpans[g]?this.textSpans[g]:document.createElementNS(svgNS,"text"),o.style.display="inherit",o.setAttribute("stroke-linecap","butt"),o.setAttribute("stroke-linejoin","round"),o.setAttribute("stroke-miterlimit","4"),m&&n[t].n&&(f=0,d+=s.yOffset,d+=y?1:0,y=!1),l.reset(),this.globalData.fontManager.chars&&l.scale(s.s/100,s.s/100),m){switch(s.ps&&l.translate(s.ps[0],s.ps[1]+s.ascent,0),s.j){case 1:l.translate(s.justifyOffset+(u-c[n[t].line]),0,0);break;case 2:l.translate(s.justifyOffset+(u-c[n[t].line])/2,0,0)}l.translate(f,d,0)}if(this.globalData.fontManager.chars){var v,b=this.globalData.fontManager.getCharData(s.t.charAt(t),r.fStyle,this.globalData.fontManager.getFontByName(s.f).fFamily);v=b?b.data:null,v&&v.shapes&&(h=v.shapes[0].it,m||(p=""),p+=this.createPathShape(l,h),m||o.setAttribute("d",p)),m||this.layerElement.appendChild(o)}else o.textContent=n[t].val,o.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.layerElement.appendChild(o),m&&o.setAttribute("transform",l.to2dCSS());m&&(f+=n[t].l,f+=s.tr/1e3*s.s),this.textSpans[g]=o,g+=1}if(!m)for(;g<this.textSpans.length;)this.textSpans[g].style.display="none",g+=1;m&&this.globalData.fontManager.chars&&(o.setAttribute("d",p),this.layerElement.appendChild(o))}},SVGTextElement.prototype.hide=function(){this.hidden||(this.layerElement.style.display="none",this.hidden=!0)},SVGTextElement.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);if(e===!1)return void this.hide();if(this.hidden&&(this.hidden=!1,this.layerElement.style.display="block"),!this.data.singleShape&&(this.getMeasures(),this.lettersChangedFlag)){var s,r,i=this.renderedLetters,a=this.currentTextDocumentData.l;r=a.length;var n;for(s=0;r>s;s+=1)a[s].n||(n=i[s],this.textSpans[s].setAttribute("transform",n.m),this.textSpans[s].setAttribute("opacity",n.o),n.sw&&this.textSpans[s].setAttribute("stroke-width",n.sw),n.sc&&this.textSpans[s].setAttribute("stroke",n.sc),n.fc&&this.textSpans[s].setAttribute("fill",n.fc));this.firstFrame&&(this.firstFrame=!1)}},SVGTextElement.prototype.destroy=function(){this._parent.destroy.call()},SVGTintFilter.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e=this.filterManager.effectElements[0].p.v,s=this.filterManager.effectElements[1].p.v,r=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute("values",s[0]-e[0]+" 0 0 0 "+e[0]+" "+(s[1]-e[1])+" 0 0 0 "+e[1]+" "+(s[2]-e[2])+" 0 0 0 "+e[2]+" 0 0 0 "+r+" 0")}},SVGFillFilter.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e=this.filterManager.effectElements[2].p.v,s=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 0 0 0 "+e[2]+" 0 0 0 "+s+" 0")}},SVGStrokeEffect.prototype.initialize=function(){var t,e,s,r,i=this.elem.layerElement.children||this.elem.layerElement.childNodes;for(1===this.filterManager.effectElements[1].p.v?(r=this.elem.maskManager.masksProperties.length,s=0):(s=this.filterManager.effectElements[0].p.v-1,r=s+1),e=document.createElementNS(svgNS,"g"),e.setAttribute("fill","none"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-dashoffset",1),s;r>s;s+=1)t=document.createElementNS(svgNS,"path"),e.appendChild(t),this.paths.push({p:t,m:s});if(3===this.filterManager.effectElements[10].p.v){var a=document.createElementNS(svgNS,"mask"),n="stms_"+randomString(10);a.setAttribute("id",n),a.setAttribute("mask-type","alpha"),a.appendChild(e),this.elem.globalData.defs.appendChild(a);var o=document.createElementNS(svgNS,"g");o.setAttribute("mask","url(#"+n+")"),i[0]&&o.appendChild(i[0]),this.elem.layerElement.appendChild(o),this.masker=a,e.setAttribute("stroke","#fff")}else if(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v){if(2===this.filterManager.effectElements[10].p.v)for(var i=this.elem.layerElement.children||this.elem.layerElement.childNodes;i.length;)this.elem.layerElement.removeChild(i[0]);this.elem.layerElement.appendChild(e),this.elem.layerElement.removeAttribute("mask"),e.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=e},SVGStrokeEffect.prototype.renderFrame=function(t){this.initialized||this.initialize();var e,s,r,i=this.paths.length;for(e=0;i>e;e+=1)if(s=this.elem.maskManager.viewData[this.paths[e].m],r=this.paths[e].p,(t||this.filterManager.mdf||s.prop.mdf)&&r.setAttribute("d",s.lastPath),t||this.filterManager.effectElements[9].p.mdf||this.filterManager.effectElements[4].p.mdf||this.filterManager.effectElements[7].p.mdf||this.filterManager.effectElements[8].p.mdf||s.prop.mdf){var a;if(0!==this.filterManager.effectElements[7].p.v||100!==this.filterManager.effectElements[8].p.v){var n=Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,o=Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,h=r.getTotalLength();a="0 0 0 "+h*n+" ";var l,p=h*(o-n),m=1+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100,f=Math.floor(p/m);for(l=0;f>l;l+=1)a+="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100+" ";a+="0 "+10*h+" 0 0"}else a="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100;r.setAttribute("stroke-dasharray",a)}if((t||this.filterManager.effectElements[4].p.mdf)&&this.pathMasker.setAttribute("stroke-width",2*this.filterManager.effectElements[4].p.v),(t||this.filterManager.effectElements[6].p.mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v)&&(t||this.filterManager.effectElements[3].p.mdf)){var d=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+bm_floor(255*d[0])+","+bm_floor(255*d[1])+","+bm_floor(255*d[2])+")")}},SVGTritoneFilter.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e=this.filterManager.effectElements[0].p.v,s=this.filterManager.effectElements[1].p.v,r=this.filterManager.effectElements[2].p.v,i=r[0]+" "+s[0]+" "+e[0],a=r[1]+" "+s[1]+" "+e[1],n=r[2]+" "+s[2]+" "+e[2];this.feFuncR.setAttribute("tableValues",i),this.feFuncG.setAttribute("tableValues",a),this.feFuncB.setAttribute("tableValues",n)}},SVGProLevelsFilter.prototype.createFeFunc=function(t,e){var s=document.createElementNS(svgNS,t);return s.setAttribute("type","table"),feComponentTransfer.appendChild(s),s},SVGProLevelsFilter.prototype.getTableValue=function(t,e,s,r,i){var a=Math.min(t,0),n=r;for(1===s?bezier={get:function(t){return t}}:s>1?(perc=(s-1)/4,bezier=BezierFactory.getBezierEasing(0,perc,1-perc,1)):(perc=s/1,bezier=BezierFactory.getBezierEasing(1-perc,0,1,perc));1>a;)perc=bezier.get(a),0>a||(n+=perc<=t?" "+r:perc>t&&perc<e?" "+(r+(i-r)*((perc-t)/(e-t))):" "+i),a+=1/255;return n},SVGProLevelsFilter.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e,s=this.filterManager.effectElements;this.feFuncRComposed&&(t||s[2].p.mdf||s[3].p.mdf||s[4].p.mdf||s[5].p.mdf||s[6].p.mdf)&&(e=this.getTableValue(s[2].p.v,s[3].p.v,s[4].p.v,s[5].p.v,s[6].p.v),this.feFuncRComposed.setAttribute("tableValues",e),this.feFuncGComposed.setAttribute("tableValues",e),this.feFuncBComposed.setAttribute("tableValues",e)),this.feFuncR&&(t||s[9].p.mdf||s[10].p.mdf||s[11].p.mdf||s[12].p.mdf||s[13].p.mdf)&&(e=this.getTableValue(s[9].p.v,s[10].p.v,s[11].p.v,s[12].p.v,s[13].p.v),this.feFuncR.setAttribute("tableValues",e)),this.feFuncG&&(t||s[16].p.mdf||s[17].p.mdf||s[18].p.mdf||s[19].p.mdf||s[20].p.mdf)&&(e=this.getTableValue(s[16].p.v,s[17].p.v,s[18].p.v,s[19].p.v,s[20].p.v),this.feFuncG.setAttribute("tableValues",e)),this.feFuncB&&(t||s[23].p.mdf||s[24].p.mdf||s[25].p.mdf||s[26].p.mdf||s[27].p.mdf)&&(e=this.getTableValue(s[23].p.v,s[24].p.v,s[25].p.v,s[26].p.v,s[27].p.v),this.feFuncB.setAttribute("tableValues",e)),this.feFuncA&&(t||s[30].p.mdf||s[31].p.mdf||s[32].p.mdf||s[33].p.mdf||s[34].p.mdf)&&(e=this.getTableValue(s[30].p.v,s[31].p.v,s[32].p.v,s[33].p.v,s[34].p.v),this.feFuncA.setAttribute("tableValues",e))}},SVGEffects.prototype.renderFrame=function(t){var e,s=this.filters.length;for(e=0;s>e;e+=1)this.filters[e].renderFrame(t)},createElement(SVGBaseElement,ICompElement),ICompElement.prototype.hide=function(){if(!this.hidden){var t,e=this.elements.length;for(t=0;e>t;t+=1)this.elements[t]&&this.elements[t].hide();this.hidden=!0}},ICompElement.prototype.prepareFrame=function(t){if(this._parent.prepareFrame.call(this,t),this.isVisible!==!1||this.data.xt){if(this.tm){var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}else this.renderedFrame=t/this.data.sr;var s,r=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),s=0;r>s;s+=1)(this.completeLayers||this.elements[s])&&this.elements[s].prepareFrame(this.renderedFrame-this.layers[s].st)}},ICompElement.prototype.renderFrame=function(t){var e,s=this._parent.renderFrame.call(this,t),r=this.layers.length;if(s===!1)return void this.hide();for(this.hidden=!1,e=0;r>e;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame();this.firstFrame&&(this.firstFrame=!1)},ICompElement.prototype.setElements=function(t){this.elements=t},ICompElement.prototype.getElements=function(){return this.elements},ICompElement.prototype.destroy=function(){this._parent.destroy.call();var t,e=this.layers.length;for(t=0;e>t;t+=1)this.elements[t]&&this.elements[t].destroy()},ICompElement.prototype.checkLayers=SVGRenderer.prototype.checkLayers,ICompElement.prototype.buildItem=SVGRenderer.prototype.buildItem,ICompElement.prototype.buildAllItems=SVGRenderer.prototype.buildAllItems,ICompElement.prototype.buildElementParenting=SVGRenderer.prototype.buildElementParenting,ICompElement.prototype.createItem=SVGRenderer.prototype.createItem,ICompElement.prototype.createImage=SVGRenderer.prototype.createImage,ICompElement.prototype.createComp=SVGRenderer.prototype.createComp,ICompElement.prototype.createSolid=SVGRenderer.prototype.createSolid,ICompElement.prototype.createShape=SVGRenderer.prototype.createShape,ICompElement.prototype.createText=SVGRenderer.prototype.createText,ICompElement.prototype.createBase=SVGRenderer.prototype.createBase,ICompElement.prototype.appendElementInPos=SVGRenderer.prototype.appendElementInPos,ICompElement.prototype.checkPendingElements=SVGRenderer.prototype.checkPendingElements,ICompElement.prototype.addPendingElement=SVGRenderer.prototype.addPendingElement,createElement(SVGBaseElement,IImageElement),IImageElement.prototype.createElements=function(){var t=this.globalData.getAssetsPath(this.assetData);this._parent.createElements.call(this),this.innerElem=document.createElementNS(svgNS,"image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio","xMidYMid slice"),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.maskedElement=this.innerElem,this.layerElement.appendChild(this.innerElem),this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl)},IImageElement.prototype.hide=function(){this.hidden||(this.layerElement.style.display="none",this.hidden=!0)},IImageElement.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);return e===!1?void this.hide():(this.hidden&&(this.hidden=!1,this.layerElement.style.display="block"),void(this.firstFrame&&(this.firstFrame=!1)))},IImageElement.prototype.destroy=function(){this._parent.destroy.call(),this.innerElem=null},createElement(SVGBaseElement,IShapeElement),IShapeElement.prototype.lcEnum={1:"butt",2:"round",3:"butt"},IShapeElement.prototype.ljEnum={1:"miter",2:"round",3:"butt"},IShapeElement.prototype.buildExpressionInterface=function(){},IShapeElement.prototype.createElements=function(){this._parent.createElements.call(this),this.searchShapes(this.shapesData,this.viewData,this.layerElement,this.dynamicProperties,0),(!this.data.hd||this.data.td)&&styleUnselectableDiv(this.layerElement)},IShapeElement.prototype.setGradientData=function(t,e,s){var r,i="gr_"+randomString(10);r=1===e.t?document.createElementNS(svgNS,"linearGradient"):document.createElementNS(svgNS,"radialGradient"),r.setAttribute("id",i),r.setAttribute("spreadMethod","pad"),r.setAttribute("gradientUnits","userSpaceOnUse");var a,n,o,h=[];for(o=4*e.g.p,n=0;o>n;n+=4)a=document.createElementNS(svgNS,"stop"),r.appendChild(a),h.push(a);t.setAttribute("gf"===e.ty?"fill":"stroke","url(#"+i+")"),this.globalData.defs.appendChild(r),s.gf=r,s.cst=h},IShapeElement.prototype.setGradientOpacity=function(t,e,s){if(t.g.k.k[0].s&&t.g.k.k[0].s.length>4*t.g.p||t.g.k.k.length>4*t.g.p){var r,i,a,n,o=document.createElementNS(svgNS,"mask"),h=document.createElementNS(svgNS,"path");o.appendChild(h);var l="op_"+randomString(10),p="mk_"+randomString(10);o.setAttribute("id",p),r=1===t.t?document.createElementNS(svgNS,"linearGradient"):document.createElementNS(svgNS,"radialGradient"),r.setAttribute("id",l),r.setAttribute("spreadMethod","pad"),r.setAttribute("gradientUnits","userSpaceOnUse"),n=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var m=[];for(a=4*t.g.p;n>a;a+=2)i=document.createElementNS(svgNS,"stop"),i.setAttribute("stop-color","rgb(255,255,255)"),r.appendChild(i),m.push(i);return h.setAttribute("gf"===t.ty?"fill":"stroke","url(#"+l+")"),this.globalData.defs.appendChild(r),this.globalData.defs.appendChild(o),e.of=r,e.ost=m,s.msElem=h,p}},IShapeElement.prototype.searchShapes=function(t,e,s,r,i,a){a=a||[];var n,o,h,l,p,m=[].concat(a),f=t.length-1,d=[],c=[];for(n=f;n>=0;n-=1)if("fl"==t[n].ty||"st"==t[n].ty||"gf"==t[n].ty||"gs"==t[n].ty){e[n]={},l={type:t[n].ty,d:"",ld:"",lvl:i,mdf:!1};var u=document.createElementNS(svgNS,"path");if(e[n].o=PropertyFactory.getProp(this,t[n].o,0,.01,r),("st"==t[n].ty||"gs"==t[n].ty)&&(u.setAttribute("stroke-linecap",this.lcEnum[t[n].lc]||"round"),u.setAttribute("stroke-linejoin",this.ljEnum[t[n].lj]||"round"),u.setAttribute("fill-opacity","0"),1==t[n].lj&&u.setAttribute("stroke-miterlimit",t[n].ml),e[n].w=PropertyFactory.getProp(this,t[n].w,0,null,r),t[n].d)){var y=PropertyFactory.getDashProp(this,t[n].d,"svg",r);y.k||(u.setAttribute("stroke-dasharray",y.dasharray),u.setAttribute("stroke-dashoffset",y.dashoffset)),e[n].d=y}if("fl"==t[n].ty||"st"==t[n].ty)e[n].c=PropertyFactory.getProp(this,t[n].c,1,255,r),s.appendChild(u);else{e[n].g=PropertyFactory.getGradientProp(this,t[n].g,r),2==t[n].t&&(e[n].h=PropertyFactory.getProp(this,t[n].h,1,.01,r),e[n].a=PropertyFactory.getProp(this,t[n].a,1,degToRads,r)),e[n].s=PropertyFactory.getProp(this,t[n].s,1,null,r),e[n].e=PropertyFactory.getProp(this,t[n].e,1,null,r),this.setGradientData(u,t[n],e[n],l);var g=this.setGradientOpacity(t[n],e[n],l);g&&u.setAttribute("mask","url(#"+g+")"),e[n].elem=u,s.appendChild(u)}t[n].ln&&u.setAttribute("id",t[n].ln),t[n].cl&&u.setAttribute("class",t[n].cl),l.pElem=u,this.stylesList.push(l),e[n].style=l,d.push(l)}else if("gr"==t[n].ty){e[n]={it:[]};var v=document.createElementNS(svgNS,"g");s.appendChild(v),e[n].gr=v,this.searchShapes(t[n].it,e[n].it,v,r,i+1,a)}else if("tr"==t[n].ty)e[n]={transform:{op:PropertyFactory.getProp(this,t[n].o,0,.01,r),mProps:PropertyFactory.getProp(this,t[n],2,null,r)},elements:[]},p=e[n].transform,m.push(p);else if("sh"==t[n].ty||"rc"==t[n].ty||"el"==t[n].ty||"sr"==t[n].ty){e[n]={elements:[],caches:[],styles:[],transformers:m,lStr:""};var b=4;for("rc"==t[n].ty?b=5:"el"==t[n].ty?b=6:"sr"==t[n].ty&&(b=7),e[n].sh=ShapePropertyFactory.getShapeProp(this,t[n],b,r),e[n].lvl=i,this.shapes.push(e[n].sh),this.addShapeToModifiers(e[n].sh),h=this.stylesList.length,o=0;h>o;o+=1)this.stylesList[o].closed||e[n].elements.push({ty:this.stylesList[o].type,st:this.stylesList[o]})}else if("tm"==t[n].ty||"rd"==t[n].ty||"ms"==t[n].ty){var E=ShapeModifiers.getModifier(t[n].ty);E.init(this,t[n],r),this.shapeModifiers.push(E),c.push(E),e[n]=E}for(f=d.length,n=0;f>n;n+=1)d[n].closed=!0;for(f=c.length,n=0;f>n;n+=1)c[n].closed=!0},IShapeElement.prototype.addShapeToModifiers=function(t){var e,s=this.shapeModifiers.length;for(e=0;s>e;e+=1)this.shapeModifiers[e].addShape(t)},IShapeElement.prototype.renderModifiers=function(){if(this.shapeModifiers.length){var t,e=this.shapes.length;for(t=0;e>t;t+=1)this.shapes[t].reset();for(e=this.shapeModifiers.length,t=e-1;t>=0;t-=1)this.shapeModifiers[t].processShapes(this.firstFrame)}},IShapeElement.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);return e===!1?void this.hide():(this.globalToLocal([0,0,0]),this.hidden&&(this.layerElement.style.display="block",this.hidden=!1),this.renderModifiers(),void this.renderShape(null,null,!0,null))},IShapeElement.prototype.hide=function(){if(!this.hidden){this.layerElement.style.display="none";var t,e=this.stylesList.length;for(t=e-1;t>=0;t-=1)"0"!==this.stylesList[t].ld&&(this.stylesList[t].ld="0",this.stylesList[t].pElem.style.display="none",this.stylesList[t].pElem.parentNode&&(this.stylesList[t].parent=this.stylesList[t].pElem.parentNode));this.hidden=!0}},IShapeElement.prototype.renderShape=function(t,e,s,r){var i,a;if(!t)for(t=this.shapesData,a=this.stylesList.length,i=0;a>i;i+=1)this.stylesList[i].d="",this.stylesList[i].mdf=!1;e||(e=this.viewData),a=t.length-1;var n;for(i=a;i>=0;i-=1)n=t[i].ty,"tr"==n?((this.firstFrame||e[i].transform.op.mdf&&r)&&r.setAttribute("opacity",e[i].transform.op.v),(this.firstFrame||e[i].transform.mProps.mdf&&r)&&r.setAttribute("transform",e[i].transform.mProps.v.to2dCSS())):"sh"==n||"el"==n||"rc"==n||"sr"==n?this.renderPath(t[i],e[i]):"fl"==n?this.renderFill(t[i],e[i]):"gf"==n?this.renderGradient(t[i],e[i]):"gs"==n?(this.renderGradient(t[i],e[i]),this.renderStroke(t[i],e[i])):"st"==n?this.renderStroke(t[i],e[i]):"gr"==n&&this.renderShape(t[i].it,e[i].it,!1,e[i].gr);if(s){for(a=this.stylesList.length,i=0;a>i;i+=1)"0"===this.stylesList[i].ld&&(this.stylesList[i].ld="1",this.stylesList[i].pElem.style.display="block"),(this.stylesList[i].mdf||this.firstFrame)&&(this.stylesList[i].pElem.setAttribute("d",this.stylesList[i].d),this.stylesList[i].msElem&&this.stylesList[i].msElem.setAttribute("d",this.stylesList[i].d));this.firstFrame&&(this.firstFrame=!1)}},IShapeElement.prototype.renderPath=function(t,e){var s,r,i,a,n,o,h,l,p=e.elements.length,m=e.lvl;for(l=0;p>l;l+=1){o=e.sh.mdf||this.firstFrame,n="";var f=e.sh.paths;if(a=f.length,e.elements[l].st.lvl<m){var d,c,u=this.mHelper.reset();for(c=e.transformers.length-1;c>=0;c-=1)o=e.transformers[c].mProps.mdf||o,d=e.transformers[c].mProps.v.props,u.transform(d[0],d[1],d[2],d[3],d[4],d[5],d[6],d[7],d[8],d[9],d[10],d[11],d[12],d[13],d[14],d[15]);if(o){for(i=0;a>i;i+=1)if(h=f[i],h&&h.v){for(s=h.v.length,r=1;s>r;r+=1)1==r&&(n+=" M"+u.applyToPointStringified(h.v[0][0],h.v[0][1])),n+=" C"+u.applyToPointStringified(h.o[r-1][0],h.o[r-1][1])+" "+u.applyToPointStringified(h.i[r][0],h.i[r][1])+" "+u.applyToPointStringified(h.v[r][0],h.v[r][1]);1==s&&(n+=" M"+u.applyToPointStringified(h.v[0][0],h.v[0][1])),h.c&&(n+=" C"+u.applyToPointStringified(h.o[r-1][0],h.o[r-1][1])+" "+u.applyToPointStringified(h.i[0][0],h.i[0][1])+" "+u.applyToPointStringified(h.v[0][0],h.v[0][1]),n+="z")}e.caches[l]=n}else n=e.caches[l]}else if(o){for(i=0;a>i;i+=1)if(h=f[i],h&&h.v){for(s=h.v.length,r=1;s>r;r+=1)1==r&&(n+=" M"+h.v[0].join(",")),n+=" C"+h.o[r-1].join(",")+" "+h.i[r].join(",")+" "+h.v[r].join(",");1==s&&(n+=" M"+h.v[0].join(",")),h.c&&s&&(n+=" C"+h.o[r-1].join(",")+" "+h.i[0].join(",")+" "+h.v[0].join(","),n+="z")}e.caches[l]=n}else n=e.caches[l];e.elements[l].st.d+=n,e.elements[l].st.mdf=o||e.elements[l].st.mdf}},IShapeElement.prototype.renderFill=function(t,e){var s=e.style;(e.c.mdf||this.firstFrame)&&s.pElem.setAttribute("fill","rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o.mdf||this.firstFrame)&&s.pElem.setAttribute("fill-opacity",e.o.v)},IShapeElement.prototype.renderGradient=function(t,e){var s=e.gf,r=e.of,i=e.s.v,a=e.e.v;if(e.o.mdf||this.firstFrame){var n="gf"===t.ty?"fill-opacity":"stroke-opacity";e.elem.setAttribute(n,e.o.v)}if(e.s.mdf||this.firstFrame){var o=1===t.t?"x1":"cx",h="x1"===o?"y1":"cy";s.setAttribute(o,i[0]),s.setAttribute(h,i[1]),r&&(r.setAttribute(o,i[0]),r.setAttribute(h,i[1]))}var l,p,m,f;if(e.g.cmdf||this.firstFrame){l=e.cst;var d=e.g.c;for(m=l.length,p=0;m>p;p+=1)f=l[p],f.setAttribute("offset",d[4*p]+"%"),f.setAttribute("stop-color","rgb("+d[4*p+1]+","+d[4*p+2]+","+d[4*p+3]+")")}if(r&&(e.g.omdf||this.firstFrame)){l=e.ost;var c=e.g.o;for(m=l.length,p=0;m>p;p+=1)f=l[p],f.setAttribute("offset",c[2*p]+"%"),f.setAttribute("stop-opacity",c[2*p+1])}if(1===t.t)(e.e.mdf||this.firstFrame)&&(s.setAttribute("x2",a[0]),s.setAttribute("y2",a[1]),r&&(r.setAttribute("x2",a[0]),r.setAttribute("y2",a[1])));else{var u;if((e.s.mdf||e.e.mdf||this.firstFrame)&&(u=Math.sqrt(Math.pow(i[0]-a[0],2)+Math.pow(i[1]-a[1],2)),s.setAttribute("r",u),r&&r.setAttribute("r",u)),e.e.mdf||e.h.mdf||e.a.mdf||this.firstFrame){u||(u=Math.sqrt(Math.pow(i[0]-a[0],2)+Math.pow(i[1]-a[1],2)));var y=Math.atan2(a[1]-i[1],a[0]-i[0]),g=e.h.v>=1?.99:e.h.v<=-1?-.99:e.h.v,v=u*g,b=Math.cos(y+e.a.v)*v+i[0],E=Math.sin(y+e.a.v)*v+i[1];s.setAttribute("fx",b),s.setAttribute("fy",E),r&&(r.setAttribute("fx",b),r.setAttribute("fy",E))}}},IShapeElement.prototype.renderStroke=function(t,e){var s=e.style,r=e.d;r&&r.k&&(r.mdf||this.firstFrame)&&(s.pElem.setAttribute("stroke-dasharray",r.dasharray),s.pElem.setAttribute("stroke-dashoffset",r.dashoffset)),e.c&&(e.c.mdf||this.firstFrame)&&s.pElem.setAttribute("stroke","rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o.mdf||this.firstFrame)&&s.pElem.setAttribute("stroke-opacity",e.o.v),(e.w.mdf||this.firstFrame)&&(s.pElem.setAttribute("stroke-width",e.w.v),s.msElem&&s.msElem.setAttribute("stroke-width",e.w.v))},IShapeElement.prototype.destroy=function(){this._parent.destroy.call(),this.shapeData=null,this.viewData=null,this.parentContainer=null,this.placeholder=null},createElement(SVGBaseElement,ISolidElement),ISolidElement.prototype.createElements=function(){this._parent.createElements.call(this);var t=document.createElementNS(svgNS,"rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t),this.innerElem=t,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl)},ISolidElement.prototype.hide=IImageElement.prototype.hide,ISolidElement.prototype.renderFrame=IImageElement.prototype.renderFrame,ISolidElement.prototype.destroy=IImageElement.prototype.destroy;var animationManager=function(){function t(t){for(var e=0,s=t.target;x>e;)k[e].animation===s&&(k.splice(e,1),e-=1,x-=1,s.isPaused||r()),e+=1}function e(t,e){if(!t)return null;for(var s=0;x>s;){if(k[s].elem==t&&null!==k[s].elem)return k[s].animation;s+=1}var r=new AnimationItem;return r.setData(t,e),i(r,t),r}function s(){M+=1,E()}function r(){M-=1,0===M&&(C=!0)}function i(e,i){e.addEventListener("destroy",t),e.addEventListener("_active",s),e.addEventListener("_idle",r),k.push({elem:i,animation:e}),x+=1}function a(t){var e=new AnimationItem;return i(e,null),e.setParams(t),e}function n(t,e){var s;for(s=0;x>s;s+=1)k[s].animation.setSpeed(t,e)}function o(t,e){var s;for(s=0;x>s;s+=1)k[s].animation.setDirection(t,e)}function h(t){var e;for(e=0;x>e;e+=1)k[e].animation.play(t)}function l(t,e){S=Date.now();var s;for(s=0;x>s;s+=1)k[s].animation.moveFrame(t,e)}function p(t){var e,s=t-S;for(e=0;x>e;e+=1)k[e].animation.advanceTime(s);S=t,C||requestAnimationFrame(p)}function m(t){S=t,requestAnimationFrame(p)}function f(t){var e;for(e=0;x>e;e+=1)k[e].animation.pause(t)}function d(t,e,s){var r;for(r=0;x>r;r+=1)k[r].animation.goToAndStop(t,e,s)}function c(t){var e;for(e=0;x>e;e+=1)k[e].animation.stop(t)}function u(t){var e;for(e=0;x>e;e+=1)k[e].animation.togglePause(t);

}function y(t){var e;for(e=0;x>e;e+=1)k[e].animation.destroy(t)}function g(t,s,r){var i,a=document.getElementsByClassName("bodymovin"),n=a.length;for(i=0;n>i;i+=1)r&&a[i].setAttribute("data-bm-type",r),e(a[i],t);if(s&&0===n){r||(r="svg");var o=document.getElementsByTagName("body")[0];o.innerHTML="";var h=document.createElement("div");h.style.width="100%",h.style.height="100%",h.setAttribute("data-bm-type",r),o.appendChild(h),e(h,t)}}function v(){var t;for(t=0;x>t;t+=1)k[t].animation.resize()}function b(){requestAnimationFrame(m)}function E(){C&&(C=!1,requestAnimationFrame(m))}var P={},k=[],S=0,x=0,C=!0,M=0;return setTimeout(b,0),P.registerAnimation=e,P.loadAnimation=a,P.setSpeed=n,P.setDirection=o,P.play=h,P.moveFrame=l,P.pause=f,P.stop=c,P.togglePause=u,P.searchAnimations=g,P.resize=v,P.start=b,P.goToAndStop=d,P.destroy=y,P}(),AnimationItem=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.pendingElements=0,this.playCount=0,this.prerenderFramesFlag=!0,this.animationData={},this.layers=[],this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=randomString(10),this.scaleMode="fit",this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.subframeEnabled=subframeEnabled,this.segments=[],this.pendingSegment=!1,this._idle=!0,this.projectInterface=ProjectInterface()};AnimationItem.prototype.setParams=function(t){var e=this;t.context&&(this.context=t.context),(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var s=t.animType?t.animType:t.renderer?t.renderer:"svg";switch(s){case"canvas":this.renderer=new CanvasRenderer(this,t.rendererSettings);break;case"svg":this.renderer=new SVGRenderer(this,t.rendererSettings);break;case"hybrid":case"html":default:this.renderer=new HybridRenderer(this,t.rendererSettings)}if(this.renderer.setProjectInterface(this.projectInterface),this.animType=s,""===t.loop||null===t.loop||(this.loop=t.loop===!1?!1:t.loop===!0?!0:parseInt(t.loop)),this.autoplay="autoplay"in t?t.autoplay:!0,this.name=t.name?t.name:"",this.prerenderFramesFlag="prerender"in t?t.prerender:!0,this.autoloadSegments=t.hasOwnProperty("autoloadSegments")?t.autoloadSegments:!0,t.animationData)e.configAnimation(t.animationData);else if(t.path){"json"!=t.path.substr(-4)&&("/"!=t.path.substr(-1,1)&&(t.path+="/"),t.path+="data.json");var r=new XMLHttpRequest;this.path=-1!=t.path.lastIndexOf("\\")?t.path.substr(0,t.path.lastIndexOf("\\")+1):t.path.substr(0,t.path.lastIndexOf("/")+1),this.assetsPath=t.assetsPath,this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),r.open("GET",t.path,!0),r.send(),r.onreadystatechange=function(){if(4==r.readyState)if(200==r.status)e.configAnimation(JSON.parse(r.responseText));else try{var t=JSON.parse(r.responseText);e.configAnimation(t)}catch(s){}}}},AnimationItem.prototype.setData=function(t,e){var s={wrapper:t,animationData:e?"object"==typeof e?e:JSON.parse(e):null},r=t.attributes;s.path=r.getNamedItem("data-animation-path")?r.getNamedItem("data-animation-path").value:r.getNamedItem("data-bm-path")?r.getNamedItem("data-bm-path").value:r.getNamedItem("bm-path")?r.getNamedItem("bm-path").value:"",s.animType=r.getNamedItem("data-anim-type")?r.getNamedItem("data-anim-type").value:r.getNamedItem("data-bm-type")?r.getNamedItem("data-bm-type").value:r.getNamedItem("bm-type")?r.getNamedItem("bm-type").value:r.getNamedItem("data-bm-renderer")?r.getNamedItem("data-bm-renderer").value:r.getNamedItem("bm-renderer")?r.getNamedItem("bm-renderer").value:"canvas";var i=r.getNamedItem("data-anim-loop")?r.getNamedItem("data-anim-loop").value:r.getNamedItem("data-bm-loop")?r.getNamedItem("data-bm-loop").value:r.getNamedItem("bm-loop")?r.getNamedItem("bm-loop").value:"";""===i||(s.loop="false"===i?!1:"true"===i?!0:parseInt(i));var a=r.getNamedItem("data-anim-autoplay")?r.getNamedItem("data-anim-autoplay").value:r.getNamedItem("data-bm-autoplay")?r.getNamedItem("data-bm-autoplay").value:r.getNamedItem("bm-autoplay")?r.getNamedItem("bm-autoplay").value:!0;s.autoplay="false"!==a,s.name=r.getNamedItem("data-name")?r.getNamedItem("data-name").value:r.getNamedItem("data-bm-name")?r.getNamedItem("data-bm-name").value:r.getNamedItem("bm-name")?r.getNamedItem("bm-name").value:"";var n=r.getNamedItem("data-anim-prerender")?r.getNamedItem("data-anim-prerender").value:r.getNamedItem("data-bm-prerender")?r.getNamedItem("data-bm-prerender").value:r.getNamedItem("bm-prerender")?r.getNamedItem("bm-prerender").value:"";"false"===n&&(s.prerender=!1),this.setParams(s)},AnimationItem.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip),this.animationData.tf=this.totalFrames);var e,s,r=this.animationData.layers,i=r.length,a=t.layers,n=a.length;for(s=0;n>s;s+=1)for(e=0;i>e;){if(r[e].id==a[s].id){r[e]=a[s];break}e+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(i=t.assets.length,e=0;i>e;e+=1)this.animationData.assets.push(t.assets[e]);this.animationData.__complete=!1,dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.renderer.includeLayers(t.layers),expressionsPlugin&&expressionsPlugin.initExpressions(this),this.renderer.renderFrame(null),this.loadNextSegment()},AnimationItem.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||0===t.length||!this.autoloadSegments)return this.trigger("data_ready"),void(this.timeCompleted=this.animationData.tf);var e=t.shift();this.timeCompleted=e.time*this.frameRate;var s=new XMLHttpRequest,r=this,i=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,s.open("GET",i,!0),s.send(),s.onreadystatechange=function(){if(4==s.readyState)if(200==s.status)r.includeLayers(JSON.parse(s.responseText));else try{var t=JSON.parse(s.responseText);r.includeLayers(t)}catch(e){}}},AnimationItem.prototype.loadSegments=function(){var t=this.animationData.segments;t||(this.timeCompleted=this.animationData.tf),this.loadNextSegment()},AnimationItem.prototype.configAnimation=function(t){this.renderer&&this.renderer.destroyed||(this.animationData=t,this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.animationData.tf=this.totalFrames,this.renderer.configAnimation(t),t.assets||(t.assets=[]),t.comps&&(t.assets=t.assets.concat(t.comps),t.comps=null),this.renderer.searchExtraCompositions(t.assets),this.layers=this.animationData.layers,this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.firstFrame=Math.round(this.animationData.ip),this.frameMult=this.animationData.fr/1e3,this.trigger("config_ready"),this.imagePreloader=new ImagePreloader,this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(t.assets),this.loadSegments(),this.updaFrameModifier(),this.renderer.globalData.fontManager?this.waitForFontsLoaded():(dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.checkLoaded()))},AnimationItem.prototype.waitForFontsLoaded=function(){function t(){this.renderer.globalData.fontManager.loaded?(dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.checkLoaded()):setTimeout(t.bind(this),20)}return function(){t.bind(this)()}}(),AnimationItem.prototype.addPendingElement=function(){this.pendingElements+=1},AnimationItem.prototype.elementLoaded=function(){this.pendingElements--,this.checkLoaded()},AnimationItem.prototype.checkLoaded=function(){0===this.pendingElements&&(expressionsPlugin&&expressionsPlugin.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.isLoaded=!0,this.gotoFrame(),this.autoplay&&this.play())},AnimationItem.prototype.resize=function(){this.renderer.updateContainerSize()},AnimationItem.prototype.setSubframe=function(t){this.subframeEnabled=t?!0:!1},AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.subframeEnabled?this.currentRawFrame:Math.floor(this.currentRawFrame),this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame()},AnimationItem.prototype.renderFrame=function(){this.isLoaded!==!1&&this.renderer.renderFrame(this.currentFrame+this.firstFrame)},AnimationItem.prototype.play=function(t){t&&this.name!=t||this.isPaused===!0&&(this.isPaused=!1,this._idle&&(this._idle=!1,this.trigger("_active")))},AnimationItem.prototype.pause=function(t){t&&this.name!=t||this.isPaused===!1&&(this.isPaused=!0,this.pendingSegment||(this._idle=!0,this.trigger("_idle")))},AnimationItem.prototype.togglePause=function(t){t&&this.name!=t||(this.isPaused===!0?this.play():this.pause())},AnimationItem.prototype.stop=function(t){t&&this.name!=t||(this.pause(),this.currentFrame=this.currentRawFrame=0,this.playCount=0,this.gotoFrame())},AnimationItem.prototype.goToAndStop=function(t,e,s){s&&this.name!=s||(this.setCurrentRawFrameValue(e?t:t*this.frameModifier),this.pause())},AnimationItem.prototype.goToAndPlay=function(t,e,s){this.goToAndStop(t,e,s),this.play()},AnimationItem.prototype.advanceTime=function(t){return this.pendingSegment?(this.pendingSegment=!1,this.adjustSegment(this.segments.shift()),void(this.isPaused&&this.play())):void(this.isPaused!==!0&&this.isLoaded!==!1&&this.setCurrentRawFrameValue(this.currentRawFrame+t*this.frameModifier))},AnimationItem.prototype.updateAnimation=function(t){this.setCurrentRawFrameValue(this.totalFrames*t)},AnimationItem.prototype.moveFrame=function(t,e){e&&this.name!=e||this.setCurrentRawFrameValue(this.currentRawFrame+t)},AnimationItem.prototype.adjustSegment=function(t){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.01)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.firstFrame=t[0],this.setCurrentRawFrameValue(0)),this.trigger("segmentStart")},AnimationItem.prototype.setSegment=function(t,e){var s=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?s=t:this.currentRawFrame+this.firstFrame>e&&(s=e-t-.01)),this.firstFrame=t,this.totalFrames=e-t,-1!==s&&this.goToAndStop(s,!0)},AnimationItem.prototype.playSegments=function(t,e){if("object"==typeof t[0]){var s,r=t.length;for(s=0;r>s;s+=1)this.segments.push(t[s])}else this.segments.push(t);e&&this.adjustSegment(this.segments.shift()),this.isPaused&&this.play()},AnimationItem.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip*this.frameRate,Math.floor(this.animationData.op-this.animationData.ip+this.animationData.ip*this.frameRate)]),t&&this.adjustSegment(this.segments.shift())},AnimationItem.prototype.checkSegments=function(){this.segments.length&&(this.pendingSegment=!0)},AnimationItem.prototype.remove=function(t){t&&this.name!=t||this.renderer.destroy()},AnimationItem.prototype.destroy=function(t){t&&this.name!=t||this.renderer&&this.renderer.destroyed||(this.renderer.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=this.onLoopComplete=this.onComplete=this.onSegmentStart=this.onDestroy=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(t){if(this.currentRawFrame=t,this.currentRawFrame>=this.totalFrames){if(this.checkSegments(),this.loop===!1)return this.currentRawFrame=this.totalFrames-.01,this.gotoFrame(),this.pause(),void this.trigger("complete");if(this.trigger("loopComplete"),this.playCount+=1,this.loop!==!0&&this.playCount==this.loop||this.pendingSegment)return this.currentRawFrame=this.totalFrames-.01,this.gotoFrame(),this.pause(),void this.trigger("complete");this.currentRawFrame=this.currentRawFrame%this.totalFrames}else if(this.currentRawFrame<0)return this.checkSegments(),this.playCount-=1,this.playCount<0&&(this.playCount=0),this.loop===!1||this.pendingSegment?(this.currentRawFrame=0,this.gotoFrame(),this.pause(),void this.trigger("complete")):(this.trigger("loopComplete"),this.currentRawFrame=(this.totalFrames+this.currentRawFrame)%this.totalFrames,void this.gotoFrame());this.gotoFrame()},AnimationItem.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},AnimationItem.prototype.setDirection=function(t){this.playDirection=0>t?-1:1,this.updaFrameModifier()},AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection},AnimationItem.prototype.getPath=function(){return this.path},AnimationItem.prototype.getAssetsPath=function(t){var e="";if(this.assetsPath){var s=t.p;-1!==s.indexOf("images/")&&(s=s.split("/")[1]),e=this.assetsPath+s}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},AnimationItem.prototype.getAssetData=function(t){for(var e=0,s=this.assets.length;s>e;){if(t==this.assets[e].id)return this.assets[e];e+=1}},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototype.show=function(){this.renderer.show()},AnimationItem.prototype.getAssets=function(){return this.assets},AnimationItem.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult));break;case"loopComplete":this.triggerEvent(t,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new BMCompleteEvent(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new BMDestroyEvent(t,this));break;default:this.triggerEvent(t)}"enterFrame"===t&&this.onEnterFrame&&this.onEnterFrame.call(this,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),"loopComplete"===t&&this.onLoopComplete&&this.onLoopComplete.call(this,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),"complete"===t&&this.onComplete&&this.onComplete.call(this,new BMCompleteEvent(t,this.frameMult)),"segmentStart"===t&&this.onSegmentStart&&this.onSegmentStart.call(this,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),"destroy"===t&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(t,this))},AnimationItem.prototype.addEventListener=_addEventListener,AnimationItem.prototype.removeEventListener=_removeEventListener,AnimationItem.prototype.triggerEvent=_triggerEvent,extendPrototype(BaseRenderer,CanvasRenderer),CanvasRenderer.prototype.createBase=function(t){return new CVBaseElement(t,this,this.globalData)},CanvasRenderer.prototype.createShape=function(t){return new CVShapeElement(t,this,this.globalData)},CanvasRenderer.prototype.createText=function(t){return new CVTextElement(t,this,this.globalData)},CanvasRenderer.prototype.createImage=function(t){return new CVImageElement(t,this,this.globalData)},CanvasRenderer.prototype.createComp=function(t){return new CVCompElement(t,this,this.globalData)},CanvasRenderer.prototype.createSolid=function(t){return new CVSolidElement(t,this,this.globalData)},CanvasRenderer.prototype.ctxTransform=function(t){if(1!==t[0]||0!==t[1]||0!==t[4]||1!==t[5]||0!==t[12]||0!==t[13]){if(!this.renderConfig.clearCanvas)return void this.canvasContext.transform(t[0],t[1],t[4],t[5],t[12],t[13]);this.transformMat.cloneFromProps(t),this.transformMat.transform(this.contextData.cTr.props[0],this.contextData.cTr.props[1],this.contextData.cTr.props[2],this.contextData.cTr.props[3],this.contextData.cTr.props[4],this.contextData.cTr.props[5],this.contextData.cTr.props[6],this.contextData.cTr.props[7],this.contextData.cTr.props[8],this.contextData.cTr.props[9],this.contextData.cTr.props[10],this.contextData.cTr.props[11],this.contextData.cTr.props[12],this.contextData.cTr.props[13],this.contextData.cTr.props[14],this.contextData.cTr.props[15]),this.contextData.cTr.cloneFromProps(this.transformMat.props);var e=this.contextData.cTr.props;this.canvasContext.setTransform(e[0],e[1],e[4],e[5],e[12],e[13])}},CanvasRenderer.prototype.ctxOpacity=function(t){if(1!==t){if(!this.renderConfig.clearCanvas)return void(this.canvasContext.globalAlpha*=0>t?0:t);this.contextData.cO*=0>t?0:t,this.canvasContext.globalAlpha=this.contextData.cO}},CanvasRenderer.prototype.reset=function(){return this.renderConfig.clearCanvas?(this.contextData.cArrPos=0,this.contextData.cTr.reset(),void(this.contextData.cO=1)):void this.canvasContext.restore()},CanvasRenderer.prototype.save=function(t){if(!this.renderConfig.clearCanvas)return void this.canvasContext.save();t&&this.canvasContext.save();var e=this.contextData.cTr.props;(null===this.contextData.saved[this.contextData.cArrPos]||void 0===this.contextData.saved[this.contextData.cArrPos])&&(this.contextData.saved[this.contextData.cArrPos]=new Array(16));var s,r=this.contextData.saved[this.contextData.cArrPos];for(s=0;16>s;s+=1)r[s]=e[s];this.contextData.savedOp[this.contextData.cArrPos]=this.contextData.cO,this.contextData.cArrPos+=1},CanvasRenderer.prototype.restore=function(t){if(!this.renderConfig.clearCanvas)return void this.canvasContext.restore();t&&this.canvasContext.restore(),this.contextData.cArrPos-=1;var e,s=this.contextData.saved[this.contextData.cArrPos],r=this.contextData.cTr.props;for(e=0;16>e;e+=1)r[e]=s[e];this.canvasContext.setTransform(s[0],s[1],s[4],s[5],s[12],s[13]),s=this.contextData.savedOp[this.contextData.cArrPos],this.contextData.cO=s,this.canvasContext.globalAlpha=s},CanvasRenderer.prototype.configAnimation=function(t){this.animationItem.wrapper?(this.animationItem.container=document.createElement("canvas"),this.animationItem.container.style.width="100%",this.animationItem.container.style.height="100%",this.animationItem.container.style.transformOrigin=this.animationItem.container.style.mozTransformOrigin=this.animationItem.container.style.webkitTransformOrigin=this.animationItem.container.style["-webkit-transform"]="0px 0px 0px",this.animationItem.wrapper.appendChild(this.animationItem.container),this.canvasContext=this.animationItem.container.getContext("2d")):this.canvasContext=this.renderConfig.context,this.globalData.canvasContext=this.canvasContext,this.globalData.renderer=this,this.globalData.isDashed=!1,this.globalData.totalFrames=Math.floor(t.tf),this.globalData.compWidth=t.w,this.globalData.compHeight=t.h,this.globalData.frameRate=t.fr,this.globalData.frameId=0,this.globalData.compSize={w:t.w,h:t.h},this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.layers=t.layers,this.transformCanvas={},this.transformCanvas.w=t.w,this.transformCanvas.h=t.h,this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,document.body),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.elementLoaded=this.animationItem.elementLoaded.bind(this.animationItem),this.globalData.addPendingElement=this.animationItem.addPendingElement.bind(this.animationItem),this.globalData.transformCanvas=this.transformCanvas,this.elements=Array.apply(null,{length:t.layers.length}),this.updateContainerSize()},CanvasRenderer.prototype.updateContainerSize=function(){var t,e;this.animationItem.wrapper&&this.animationItem.container?(t=this.animationItem.wrapper.offsetWidth,e=this.animationItem.wrapper.offsetHeight,this.animationItem.container.setAttribute("width",t*this.renderConfig.dpr),this.animationItem.container.setAttribute("height",e*this.renderConfig.dpr)):(t=this.canvasContext.canvas.width*this.renderConfig.dpr,e=this.canvasContext.canvas.height*this.renderConfig.dpr);var s,r;if(-1!==this.renderConfig.preserveAspectRatio.indexOf("meet")||-1!==this.renderConfig.preserveAspectRatio.indexOf("slice")){var i=this.renderConfig.preserveAspectRatio.split(" "),a=i[1]||"meet",n=i[0]||"xMidYMid",o=n.substr(0,4),h=n.substr(4);s=t/e,r=this.transformCanvas.w/this.transformCanvas.h,r>s&&"meet"===a||s>r&&"slice"===a?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=t/(this.transformCanvas.w/this.renderConfig.dpr)):(this.transformCanvas.sx=e/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr)),this.transformCanvas.tx="xMid"===o&&(s>r&&"meet"===a||r>s&&"slice"===a)?(t-this.transformCanvas.w*(e/this.transformCanvas.h))/2*this.renderConfig.dpr:"xMax"===o&&(s>r&&"meet"===a||r>s&&"slice"===a)?(t-this.transformCanvas.w*(e/this.transformCanvas.h))*this.renderConfig.dpr:0,this.transformCanvas.ty="YMid"===h&&(r>s&&"meet"===a||s>r&&"slice"===a)?(e-this.transformCanvas.h*(t/this.transformCanvas.w))/2*this.renderConfig.dpr:"YMax"===h&&(r>s&&"meet"===a||s>r&&"slice"===a)?(e-this.transformCanvas.h*(t/this.transformCanvas.w))*this.renderConfig.dpr:0}else"none"==this.renderConfig.preserveAspectRatio?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.tx=0,this.transformCanvas.ty=0):(this.transformCanvas.sx=this.renderConfig.dpr,this.transformCanvas.sy=this.renderConfig.dpr,this.transformCanvas.tx=0,this.transformCanvas.ty=0);this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1];var l,p=this.elements.length;for(l=0;p>l;l+=1)this.elements[l]&&0===this.elements[l].data.ty&&this.elements[l].resize(this.globalData.transformCanvas)},CanvasRenderer.prototype.destroy=function(){this.renderConfig.clearCanvas&&(this.animationItem.wrapper.innerHTML="");var t,e=this.layers?this.layers.length:0;for(t=e-1;t>=0;t-=1)this.elements[t].destroy();this.elements.length=0,this.globalData.canvasContext=null,this.animationItem.container=null,this.destroyed=!0},CanvasRenderer.prototype.renderFrame=function(t){if(!(this.renderedFrame==t&&this.renderConfig.clearCanvas===!0||this.destroyed||null===t)){this.renderedFrame=t,this.globalData.frameNum=t-this.animationItem.firstFrame,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.renderConfig.clearCanvas===!0?(this.reset(),this.canvasContext.save(),this.canvasContext.clearRect(this.transformCanvas.tx,this.transformCanvas.ty,this.transformCanvas.w*this.transformCanvas.sx,this.transformCanvas.h*this.transformCanvas.sy)):this.save(),this.ctxTransform(this.transformCanvas.props),this.canvasContext.beginPath(),this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h),this.canvasContext.closePath(),this.canvasContext.clip();var e,s=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=0;s>e;e++)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);for(e=s-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame();this.renderConfig.clearCanvas!==!0?this.restore():this.canvasContext.restore()}},CanvasRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!=this.layers[t].ty){var s=this.createItem(this.layers[t],this,this.globalData);e[t]=s,s.initExpressions(),0===this.layers[t].ty&&s.resize(this.globalData.transformCanvas)}},CanvasRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();t.checkParenting()}},CanvasRenderer.prototype.hide=function(){this.animationItem.container.style.display="none"},CanvasRenderer.prototype.show=function(){this.animationItem.container.style.display="block"},CanvasRenderer.prototype.searchExtraCompositions=function(t){{var e,s=t.length;document.createElementNS(svgNS,"g")}for(e=0;s>e;e+=1)if(t[e].xt){var r=this.createComp(t[e],this.globalData.comp,this.globalData);r.initExpressions(),this.globalData.projectInterface.registerComposition(r)}},extendPrototype(BaseRenderer,HybridRenderer),HybridRenderer.prototype.buildItem=SVGRenderer.prototype.buildItem,HybridRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();t.checkParenting()}},HybridRenderer.prototype.appendElementInPos=function(t,e){var s=t.getBaseElement();if(s){var r=this.layers[e];if(r.ddd&&this.supports3d)this.addTo3dContainer(s,e);else{for(var i,a=0;e>a;)this.elements[a]&&this.elements[a]!==!0&&this.elements[a].getBaseElement()&&(i=this.elements[a].getBaseElement()),a+=1;i?r.ddd&&this.supports3d||this.layerElement.insertBefore(s,i):r.ddd&&this.supports3d||this.layerElement.appendChild(s)}}},HybridRenderer.prototype.createBase=function(t){return new SVGBaseElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.createShape=function(t){return this.supports3d?new HShapeElement(t,this.layerElement,this.globalData,this):new IShapeElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.createText=function(t){return this.supports3d?new HTextElement(t,this.layerElement,this.globalData,this):new SVGTextElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.createCamera=function(t){return this.camera=new HCameraElement(t,this.layerElement,this.globalData,this),this.camera},HybridRenderer.prototype.createImage=function(t){return this.supports3d?new HImageElement(t,this.layerElement,this.globalData,this):new IImageElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.layerElement,this.globalData,this):new ICompElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.createSolid=function(t){return this.supports3d?new HSolidElement(t,this.layerElement,this.globalData,this):new ISolidElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.getThreeDContainer=function(t){var e=document.createElement("div");styleDiv(e),e.style.width=this.globalData.compSize.w+"px",e.style.height=this.globalData.compSize.h+"px",e.style.transformOrigin=e.style.mozTransformOrigin=e.style.webkitTransformOrigin="50% 50%";var s=document.createElement("div");styleDiv(s),s.style.transform=s.style.webkitTransform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",e.appendChild(s),this.resizerElem.appendChild(e);var r={container:s,perspectiveElem:e,startPos:t,endPos:t};return this.threeDElements.push(r),r},HybridRenderer.prototype.build3dContainers=function(){var t,e,s=this.layers.length;for(t=0;s>t;t+=1)this.layers[t].ddd?(e||(e=this.getThreeDContainer(t)),e.endPos=Math.max(e.endPos,t)):e=null},HybridRenderer.prototype.addTo3dContainer=function(t,e){for(var s=0,r=this.threeDElements.length;r>s;){if(e<=this.threeDElements[s].endPos){for(var i,a=this.threeDElements[s].startPos;e>a;)this.elements[a]&&this.elements[a].getBaseElement()&&(i=this.elements[a].getBaseElement()),a+=1;i?this.threeDElements[s].container.insertBefore(t,i):this.threeDElements[s].container.appendChild(t);break}s+=1}},HybridRenderer.prototype.configAnimation=function(t){var e=document.createElement("div"),s=this.animationItem.wrapper;e.style.width=t.w+"px",e.style.height=t.h+"px",this.resizerElem=e,styleDiv(e),e.style.transformStyle=e.style.webkitTransformStyle=e.style.mozTransformStyle="flat",s.appendChild(e),e.style.overflow="hidden";var r=document.createElementNS(svgNS,"svg");r.setAttribute("width","1"),r.setAttribute("height","1"),styleDiv(r),this.resizerElem.appendChild(r);var i=document.createElementNS(svgNS,"defs");r.appendChild(i),this.globalData.defs=i,this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.elementLoaded=this.animationItem.elementLoaded.bind(this.animationItem),this.globalData.frameId=0,this.globalData.compSize={w:t.w,h:t.h},this.globalData.frameRate=t.fr,this.layers=t.layers,this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,r),this.layerElement=this.resizerElem,this.build3dContainers(),this.updateContainerSize()},HybridRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML="",this.animationItem.container=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;e>t;t++)this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},HybridRenderer.prototype.updateContainerSize=function(){var t,e,s,r,i=this.animationItem.wrapper.offsetWidth,a=this.animationItem.wrapper.offsetHeight,n=i/a,o=this.globalData.compSize.w/this.globalData.compSize.h;o>n?(t=i/this.globalData.compSize.w,e=i/this.globalData.compSize.w,s=0,r=(a-this.globalData.compSize.h*(i/this.globalData.compSize.w))/2):(t=a/this.globalData.compSize.h,e=a/this.globalData.compSize.h,s=(i-this.globalData.compSize.w*(a/this.globalData.compSize.h))/2,r=0),this.resizerElem.style.transform=this.resizerElem.style.webkitTransform="matrix3d("+t+",0,0,0,0,"+e+",0,0,0,0,1,0,"+s+","+r+",0,1)"},HybridRenderer.prototype.renderFrame=SVGRenderer.prototype.renderFrame,HybridRenderer.prototype.hide=function(){this.resizerElem.style.display="none"},HybridRenderer.prototype.show=function(){this.resizerElem.style.display="block"},HybridRenderer.prototype.initItems=function(){if(this.buildAllItems(),this.camera)this.camera.setup();else{var t,e=this.globalData.compSize.w,s=this.globalData.compSize.h,r=this.threeDElements.length;for(t=0;r>t;t+=1)this.threeDElements[t].perspectiveElem.style.perspective=this.threeDElements[t].perspectiveElem.style.webkitPerspective=Math.sqrt(Math.pow(e,2)+Math.pow(s,2))+"px"}},HybridRenderer.prototype.searchExtraCompositions=function(t){var e,s=t.length,r=document.createElement("div");for(e=0;s>e;e+=1)if(t[e].xt){var i=this.createComp(t[e],r,this.globalData.comp,null);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},createElement(BaseElement,CVBaseElement),CVBaseElement.prototype.createElements=function(){this.checkParenting()},CVBaseElement.prototype.checkBlendMode=function(t){if(t.blendMode!==this.data.bm){t.blendMode=this.data.bm;var e="";switch(this.data.bm){case 0:e="normal";break;case 1:e="multiply";break;case 2:e="screen";break;case 3:e="overlay";break;case 4:e="darken";break;case 5:e="lighten";break;case 6:e="color-dodge";break;case 7:e="color-burn";break;case 8:e="hard-light";break;case 9:e="soft-light";break;case 10:e="difference";break;case 11:e="exclusion";break;case 12:e="hue";break;case 13:e="saturation";break;case 14:e="color";break;case 15:e="luminosity"}t.canvasContext.globalCompositeOperation=e}},CVBaseElement.prototype.renderFrame=function(t){if(3===this.data.ty)return!1;if(this.checkBlendMode(0===this.data.ty?this.parentGlobalData:this.globalData),!this.isVisible)return this.isVisible;this.finalTransform.opMdf=this.finalTransform.op.mdf,this.finalTransform.matMdf=this.finalTransform.mProp.mdf,this.finalTransform.opacity=this.finalTransform.op.v;var e,s=this.finalTransform.mat;if(this.hierarchy){var r,i=this.hierarchy.length;for(e=this.finalTransform.mProp.v.props,s.cloneFromProps(e),r=0;i>r;r+=1)this.finalTransform.matMdf=this.hierarchy[r].finalTransform.mProp.mdf?!0:this.finalTransform.matMdf,e=this.hierarchy[r].finalTransform.mProp.v.props,s.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}else t?(e=this.finalTransform.mProp.v.props,s.cloneFromProps(e)):s.cloneFromProps(this.finalTransform.mProp.v.props);return t&&(e=t.mat.props,s.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),
this.finalTransform.opacity*=t.opacity,this.finalTransform.opMdf=t.opMdf?!0:this.finalTransform.opMdf,this.finalTransform.matMdf=t.matMdf?!0:this.finalTransform.matMdf),this.data.hasMask&&(this.globalData.renderer.save(!0),this.maskManager.renderFrame(0===this.data.ty?null:s)),this.data.hd&&(this.isVisible=!1),this.isVisible},CVBaseElement.prototype.addMasks=function(t){this.maskManager=new CVMaskElement(t,this,this.globalData)},CVBaseElement.prototype.destroy=function(){this.canvasContext=null,this.data=null,this.globalData=null,this.maskManager&&this.maskManager.destroy()},CVBaseElement.prototype.mHelper=new Matrix,createElement(CVBaseElement,CVCompElement),CVCompElement.prototype.ctxTransform=CanvasRenderer.prototype.ctxTransform,CVCompElement.prototype.ctxOpacity=CanvasRenderer.prototype.ctxOpacity,CVCompElement.prototype.save=CanvasRenderer.prototype.save,CVCompElement.prototype.restore=CanvasRenderer.prototype.restore,CVCompElement.prototype.reset=function(){this.contextData.cArrPos=0,this.contextData.cTr.reset(),this.contextData.cO=1},CVCompElement.prototype.resize=function(t){var e=Math.max(t.sx,t.sy);this.canvas.width=this.data.w*e,this.canvas.height=this.data.h*e,this.transformCanvas={sc:e,w:this.data.w*e,h:this.data.h*e,props:[e,0,0,0,0,e,0,0,0,0,1,0,0,0,0,1]};var s,r=this.elements.length;for(s=0;r>s;s+=1)this.elements[s]&&0===this.elements[s].data.ty&&this.elements[s].resize(t)},CVCompElement.prototype.prepareFrame=function(t){if(this.globalData.frameId=this.parentGlobalData.frameId,this.globalData.mdf=!1,this._parent.prepareFrame.call(this,t),this.isVisible!==!1||this.data.xt){var e=t;this.tm&&(e=this.tm.v,e===this.data.op&&(e=this.data.op-1)),this.renderedFrame=e/this.data.sr;var s,r=this.elements.length;for(this.completeLayers||this.checkLayers(t),s=0;r>s;s+=1)(this.completeLayers||this.elements[s])&&(this.elements[s].prepareFrame(e/this.data.sr-this.layers[s].st),0===this.elements[s].data.ty&&this.elements[s].globalData.mdf&&(this.globalData.mdf=!0));this.globalData.mdf&&!this.data.xt&&(this.canvasContext.clearRect(0,0,this.data.w,this.data.h),this.ctxTransform(this.transformCanvas.props))}},CVCompElement.prototype.renderFrame=function(t){if(this._parent.renderFrame.call(this,t)!==!1){if(this.globalData.mdf){var e,s=this.layers.length;for(e=s-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}this.data.hasMask&&this.globalData.renderer.restore(!0),this.firstFrame&&(this.firstFrame=!1),this.parentGlobalData.renderer.save(),this.parentGlobalData.renderer.ctxTransform(this.finalTransform.mat.props),this.parentGlobalData.renderer.ctxOpacity(this.finalTransform.opacity),this.parentGlobalData.renderer.canvasContext.drawImage(this.canvas,0,0,this.data.w,this.data.h),this.parentGlobalData.renderer.restore(),this.globalData.mdf&&this.reset()}},CVCompElement.prototype.setElements=function(t){this.elements=t},CVCompElement.prototype.getElements=function(){return this.elements},CVCompElement.prototype.destroy=function(){var t,e=this.layers.length;for(t=e-1;t>=0;t-=1)this.elements[t].destroy();this.layers=null,this.elements=null,this._parent.destroy.call()},CVCompElement.prototype.checkLayers=CanvasRenderer.prototype.checkLayers,CVCompElement.prototype.buildItem=CanvasRenderer.prototype.buildItem,CVCompElement.prototype.checkPendingElements=CanvasRenderer.prototype.checkPendingElements,CVCompElement.prototype.addPendingElement=CanvasRenderer.prototype.addPendingElement,CVCompElement.prototype.buildAllItems=CanvasRenderer.prototype.buildAllItems,CVCompElement.prototype.createItem=CanvasRenderer.prototype.createItem,CVCompElement.prototype.createImage=CanvasRenderer.prototype.createImage,CVCompElement.prototype.createComp=CanvasRenderer.prototype.createComp,CVCompElement.prototype.createSolid=CanvasRenderer.prototype.createSolid,CVCompElement.prototype.createShape=CanvasRenderer.prototype.createShape,CVCompElement.prototype.createText=CanvasRenderer.prototype.createText,CVCompElement.prototype.createBase=CanvasRenderer.prototype.createBase,CVCompElement.prototype.buildElementParenting=CanvasRenderer.prototype.buildElementParenting,createElement(CVBaseElement,CVImageElement),CVImageElement.prototype.createElements=function(){var t=function(){if(this.globalData.elementLoaded(),this.assetData.w!==this.img.width||this.assetData.h!==this.img.height){var t=document.createElement("canvas");t.width=this.assetData.w,t.height=this.assetData.h;var e,s,r=t.getContext("2d"),i=this.img.width,a=this.img.height,n=i/a,o=this.assetData.w/this.assetData.h;n>o?(s=a,e=s*o):(e=i,s=e/o),r.drawImage(this.img,(i-e)/2,(a-s)/2,e,s,0,0,this.assetData.w,this.assetData.h),this.img=t}}.bind(this),e=function(){this.failed=!0,this.globalData.elementLoaded()}.bind(this);this.img=new Image,this.img.addEventListener("load",t,!1),this.img.addEventListener("error",e,!1);var s=this.globalData.getAssetsPath(this.assetData);this.img.src=s,this._parent.createElements.call(this)},CVImageElement.prototype.renderFrame=function(t){if(!this.failed&&this._parent.renderFrame.call(this,t)!==!1){var e=this.canvasContext;this.globalData.renderer.save();var s=this.finalTransform.mat.props;this.globalData.renderer.ctxTransform(s),this.globalData.renderer.ctxOpacity(this.finalTransform.opacity),e.drawImage(this.img,0,0),this.globalData.renderer.restore(this.data.hasMask),this.firstFrame&&(this.firstFrame=!1)}},CVImageElement.prototype.destroy=function(){this.img=null,this._parent.destroy.call()},CVMaskElement.prototype.getMaskProperty=function(t){return this.viewData[t]},CVMaskElement.prototype.prepareFrame=function(t){var e,s=this.dynamicProperties.length;for(e=0;s>e;e+=1)this.dynamicProperties[e].getValue(t),this.dynamicProperties[e].mdf&&(this.element.globalData.mdf=!0)},CVMaskElement.prototype.renderFrame=function(t){var e,s,r,i,a,n=this.element.canvasContext,o=this.data.masksProperties.length,h=!1;for(e=0;o>e;e++)if("n"!==this.masksProperties[e].mode){h===!1&&(n.beginPath(),h=!0),this.masksProperties[e].inv&&(n.moveTo(0,0),n.lineTo(this.element.globalData.compWidth,0),n.lineTo(this.element.globalData.compWidth,this.element.globalData.compHeight),n.lineTo(0,this.element.globalData.compHeight),n.lineTo(0,0)),a=this.viewData[e].v,s=t?t.applyToPointArray(a.v[0][0],a.v[0][1],0):a.v[0],n.moveTo(s[0],s[1]);var l,p=a.v.length;for(l=1;p>l;l++)s=t?t.applyToPointArray(a.o[l-1][0],a.o[l-1][1],0):a.o[l-1],r=t?t.applyToPointArray(a.i[l][0],a.i[l][1],0):a.i[l],i=t?t.applyToPointArray(a.v[l][0],a.v[l][1],0):a.v[l],n.bezierCurveTo(s[0],s[1],r[0],r[1],i[0],i[1]);s=t?t.applyToPointArray(a.o[l-1][0],a.o[l-1][1],0):a.o[l-1],r=t?t.applyToPointArray(a.i[0][0],a.i[0][1],0):a.i[0],i=t?t.applyToPointArray(a.v[0][0],a.v[0][1],0):a.v[0],n.bezierCurveTo(s[0],s[1],r[0],r[1],i[0],i[1])}h&&n.clip()},CVMaskElement.prototype.getMask=function(t){for(var e=0,s=this.masksProperties.length;s>e;){if(this.masksProperties[e].nm===t)return{maskPath:this.viewData[e].pv};e+=1}},CVMaskElement.prototype.destroy=function(){this.element=null},createElement(CVBaseElement,CVShapeElement),CVShapeElement.prototype.lcEnum={1:"butt",2:"round",3:"butt"},CVShapeElement.prototype.ljEnum={1:"miter",2:"round",3:"butt"},CVShapeElement.prototype.transformHelper={opacity:1,mat:new Matrix,matMdf:!1,opMdf:!1},CVShapeElement.prototype.dashResetter=[],CVShapeElement.prototype.createElements=function(){this._parent.createElements.call(this),this.searchShapes(this.shapesData,this.viewData,this.dynamicProperties)},CVShapeElement.prototype.searchShapes=function(t,e,s){var r,i,a,n,o=t.length-1,h=[],l=[];for(r=o;r>=0;r-=1)if("fl"==t[r].ty||"st"==t[r].ty){if(n={type:t[r].ty,elements:[]},e[r]={},("fl"==t[r].ty||"st"==t[r].ty)&&(e[r].c=PropertyFactory.getProp(this,t[r].c,1,255,s),e[r].c.k||(n.co="rgb("+bm_floor(e[r].c.v[0])+","+bm_floor(e[r].c.v[1])+","+bm_floor(e[r].c.v[2])+")")),e[r].o=PropertyFactory.getProp(this,t[r].o,0,.01,s),"st"==t[r].ty&&(n.lc=this.lcEnum[t[r].lc]||"round",n.lj=this.ljEnum[t[r].lj]||"round",1==t[r].lj&&(n.ml=t[r].ml),e[r].w=PropertyFactory.getProp(this,t[r].w,0,null,s),e[r].w.k||(n.wi=e[r].w.v),t[r].d)){var p=PropertyFactory.getDashProp(this,t[r].d,"canvas",s);e[r].d=p,e[r].d.k||(n.da=e[r].d.dasharray,n["do"]=e[r].d.dashoffset)}this.stylesList.push(n),e[r].style=n,h.push(e[r].style)}else if("gr"==t[r].ty)e[r]={it:[]},this.searchShapes(t[r].it,e[r].it,s);else if("tr"==t[r].ty)e[r]={transform:{mat:new Matrix,opacity:1,matMdf:!1,opMdf:!1,op:PropertyFactory.getProp(this,t[r].o,0,.01,s),mProps:PropertyFactory.getProp(this,t[r],2,null,s)},elements:[]};else if("sh"==t[r].ty||"rc"==t[r].ty||"el"==t[r].ty||"sr"==t[r].ty){e[r]={nodes:[],trNodes:[],tr:[0,0,0,0,0,0]};var m=4;"rc"==t[r].ty?m=5:"el"==t[r].ty?m=6:"sr"==t[r].ty&&(m=7),e[r].sh=ShapePropertyFactory.getShapeProp(this,t[r],m,s),this.shapes.push(e[r].sh),this.addShapeToModifiers(e[r].sh),a=this.stylesList.length;var f=!1,d=!1;for(i=0;a>i;i+=1)this.stylesList[i].closed||(this.stylesList[i].elements.push(e[r]),"st"===this.stylesList[i].type?f=!0:d=!0);e[r].st=f,e[r].fl=d}else if("tm"==t[r].ty||"rd"==t[r].ty){var c=ShapeModifiers.getModifier(t[r].ty);c.init(this,t[r],s),this.shapeModifiers.push(c),l.push(c),e[r]=c}for(o=h.length,r=0;o>r;r+=1)h[r].closed=!0;for(o=l.length,r=0;o>r;r+=1)l[r].closed=!0},CVShapeElement.prototype.addShapeToModifiers=IShapeElement.prototype.addShapeToModifiers,CVShapeElement.prototype.renderModifiers=IShapeElement.prototype.renderModifiers,CVShapeElement.prototype.renderFrame=function(t){this._parent.renderFrame.call(this,t)!==!1&&(this.transformHelper.mat.reset(),this.transformHelper.opacity=this.finalTransform.opacity,this.transformHelper.matMdf=!1,this.transformHelper.opMdf=this.finalTransform.opMdf,this.renderModifiers(),this.renderShape(this.transformHelper,null,null,!0),this.data.hasMask&&this.globalData.renderer.restore(!0))},CVShapeElement.prototype.renderShape=function(t,e,s,r){var i,a;if(!e)for(e=this.shapesData,a=this.stylesList.length,i=0;a>i;i+=1)this.stylesList[i].d="",this.stylesList[i].mdf=!1;s||(s=this.viewData),a=e.length-1;var n,o;for(n=t,i=a;i>=0;i-=1)if("tr"==e[i].ty){n=s[i].transform;var h=s[i].transform.mProps.v.props;if(n.matMdf=n.mProps.mdf,n.opMdf=n.op.mdf,o=n.mat,o.cloneFromProps(h),t){var l=t.mat.props;n.opacity=t.opacity,n.opacity*=s[i].transform.op.v,n.matMdf=t.matMdf?!0:n.matMdf,n.opMdf=t.opMdf?!0:n.opMdf,o.transform(l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8],l[9],l[10],l[11],l[12],l[13],l[14],l[15])}else n.opacity=n.op.o}else"sh"==e[i].ty||"el"==e[i].ty||"rc"==e[i].ty||"sr"==e[i].ty?this.renderPath(e[i],s[i],n):"fl"==e[i].ty?this.renderFill(e[i],s[i],n):"st"==e[i].ty?this.renderStroke(e[i],s[i],n):"gr"==e[i].ty?this.renderShape(n,e[i].it,s[i].it):"tm"==e[i].ty;if(r){a=this.stylesList.length;var p,m,f,d,c,u,y,g=this.globalData.renderer,v=this.globalData.canvasContext;for(g.save(),g.ctxTransform(this.finalTransform.mat.props),i=0;a>i;i+=1)if(y=this.stylesList[i].type,"st"!==y||0!==this.stylesList[i].wi){for(g.save(),c=this.stylesList[i].elements,"st"===y?(v.strokeStyle=this.stylesList[i].co,v.lineWidth=this.stylesList[i].wi,v.lineCap=this.stylesList[i].lc,v.lineJoin=this.stylesList[i].lj,v.miterLimit=this.stylesList[i].ml||0):v.fillStyle=this.stylesList[i].co,g.ctxOpacity(this.stylesList[i].coOp),"st"!==y&&v.beginPath(),m=c.length,p=0;m>p;p+=1){for("st"===y&&(v.beginPath(),this.stylesList[i].da?(v.setLineDash(this.stylesList[i].da),v.lineDashOffset=this.stylesList[i]["do"],this.globalData.isDashed=!0):this.globalData.isDashed&&(v.setLineDash(this.dashResetter),this.globalData.isDashed=!1)),u=c[p].trNodes,d=u.length,f=0;d>f;f+=1)"m"==u[f].t?v.moveTo(u[f].p[0],u[f].p[1]):"c"==u[f].t?v.bezierCurveTo(u[f].p1[0],u[f].p1[1],u[f].p2[0],u[f].p2[1],u[f].p3[0],u[f].p3[1]):v.closePath();"st"===y&&v.stroke()}"st"!==y&&v.fill(),g.restore()}g.restore(),this.firstFrame&&(this.firstFrame=!1)}},CVShapeElement.prototype.renderPath=function(t,e,s){var r,i,a,n,o=s.matMdf||e.sh.mdf||this.firstFrame;if(o){var h=e.sh.paths;n=h.length;var l=e.trNodes;for(l.length=0,a=0;n>a;a+=1){var p=h[a];if(p&&p.v){for(r=p.v.length,i=1;r>i;i+=1)1==i&&l.push({t:"m",p:s.mat.applyToPointArray(p.v[0][0],p.v[0][1],0)}),l.push({t:"c",p1:s.mat.applyToPointArray(p.o[i-1][0],p.o[i-1][1],0),p2:s.mat.applyToPointArray(p.i[i][0],p.i[i][1],0),p3:s.mat.applyToPointArray(p.v[i][0],p.v[i][1],0)});1==r&&l.push({t:"m",p:s.mat.applyToPointArray(p.v[0][0],p.v[0][1],0)}),p.c&&r&&(l.push({t:"c",p1:s.mat.applyToPointArray(p.o[i-1][0],p.o[i-1][1],0),p2:s.mat.applyToPointArray(p.i[0][0],p.i[0][1],0),p3:s.mat.applyToPointArray(p.v[0][0],p.v[0][1],0)}),l.push({t:"z"})),e.lStr=l}}if(e.st)for(i=0;16>i;i+=1)e.tr[i]=s.mat.props[i];e.trNodes=l}},CVShapeElement.prototype.renderFill=function(t,e,s){var r=e.style;(e.c.mdf||this.firstFrame)&&(r.co="rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o.mdf||s.opMdf||this.firstFrame)&&(r.coOp=e.o.v*s.opacity)},CVShapeElement.prototype.renderStroke=function(t,e,s){var r=e.style,i=e.d;i&&(i.mdf||this.firstFrame)&&(r.da=i.dasharray,r["do"]=i.dashoffset),(e.c.mdf||this.firstFrame)&&(r.co="rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o.mdf||s.opMdf||this.firstFrame)&&(r.coOp=e.o.v*s.opacity),(e.w.mdf||this.firstFrame)&&(r.wi=e.w.v)},CVShapeElement.prototype.destroy=function(){this.shapesData=null,this.globalData=null,this.canvasContext=null,this.stylesList.length=0,this.viewData.length=0,this._parent.destroy.call()},createElement(CVBaseElement,CVSolidElement),CVSolidElement.prototype.renderFrame=function(t){if(this._parent.renderFrame.call(this,t)!==!1){var e=this.canvasContext;this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),this.globalData.renderer.ctxOpacity(this.finalTransform.opacity),e.fillStyle=this.data.sc,e.fillRect(0,0,this.data.sw,this.data.sh),this.globalData.renderer.restore(this.data.hasMask),this.firstFrame&&(this.firstFrame=!1)}},createElement(CVBaseElement,CVTextElement),CVTextElement.prototype.init=ITextElement.prototype.init,CVTextElement.prototype.getMeasures=ITextElement.prototype.getMeasures,CVTextElement.prototype.getMult=ITextElement.prototype.getMult,CVTextElement.prototype.prepareFrame=ITextElement.prototype.prepareFrame,CVTextElement.prototype.tHelper=document.createElement("canvas").getContext("2d"),CVTextElement.prototype.createElements=function(){this._parent.createElements.call(this)},CVTextElement.prototype.buildNewText=function(){var t=this.currentTextDocumentData;this.renderedLetters=Array.apply(null,{length:this.currentTextDocumentData.l?this.currentTextDocumentData.l.length:0});var e=!1;t.fc?(e=!0,this.values.fill="rgb("+Math.round(255*t.fc[0])+","+Math.round(255*t.fc[1])+","+Math.round(255*t.fc[2])+")"):this.values.fill="rgba(0,0,0,0)",this.fill=e;var s=!1;t.sc&&(s=!0,this.values.stroke="rgb("+Math.round(255*t.sc[0])+","+Math.round(255*t.sc[1])+","+Math.round(255*t.sc[2])+")",this.values.sWidth=t.sw);var r,i,a=this.globalData.fontManager.getFontByName(t.f),n=t.l,o=this.mHelper;this.stroke=s,this.values.fValue=t.s+"px "+this.globalData.fontManager.getFontByName(t.f).fFamily,i=t.t.length,this.tHelper.font=this.values.fValue;var h,l,p,m,f,d,c,u,y,g,v=this.data.singleShape;if(v)var b=0,E=0,P=t.lineWidths,k=t.boxWidth,S=!0;var x=0;for(r=0;i>r;r+=1){h=this.globalData.fontManager.getCharData(t.t.charAt(r),a.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily);var l;if(l=h?h.data:null,o.reset(),v&&n[r].n&&(b=0,E+=t.yOffset,E+=S?1:0,S=!1),l&&l.shapes){if(f=l.shapes[0].it,c=f.length,o.scale(t.s/100,t.s/100),v){switch(t.ps&&o.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:o.translate(t.justifyOffset+(k-P[n[r].line]),0,0);break;case 2:o.translate(t.justifyOffset+(k-P[n[r].line])/2,0,0)}o.translate(b,E,0)}for(y=new Array(c),d=0;c>d;d+=1){for(m=f[d].ks.k.i.length,u=f[d].ks.k,g=[],p=1;m>p;p+=1)1==p&&g.push(o.applyToX(u.v[0][0],u.v[0][1],0),o.applyToY(u.v[0][0],u.v[0][1],0)),g.push(o.applyToX(u.o[p-1][0],u.o[p-1][1],0),o.applyToY(u.o[p-1][0],u.o[p-1][1],0),o.applyToX(u.i[p][0],u.i[p][1],0),o.applyToY(u.i[p][0],u.i[p][1],0),o.applyToX(u.v[p][0],u.v[p][1],0),o.applyToY(u.v[p][0],u.v[p][1],0));g.push(o.applyToX(u.o[p-1][0],u.o[p-1][1],0),o.applyToY(u.o[p-1][0],u.o[p-1][1],0),o.applyToX(u.i[0][0],u.i[0][1],0),o.applyToY(u.i[0][0],u.i[0][1],0),o.applyToX(u.v[0][0],u.v[0][1],0),o.applyToY(u.v[0][0],u.v[0][1],0)),y[d]=g}}else y=[];v&&(b+=n[r].l),this.textSpans[x]?this.textSpans[x].elem=y:this.textSpans[x]={elem:y},x+=1}},CVTextElement.prototype.renderFrame=function(t){if(this._parent.renderFrame.call(this,t)!==!1){var e=this.canvasContext,s=this.finalTransform.mat.props;this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(s),this.globalData.renderer.ctxOpacity(this.finalTransform.opacity),e.font=this.values.fValue,e.lineCap="butt",e.lineJoin="miter",e.miterLimit=4,this.data.singleShape||this.getMeasures();var r,i,a,n,o,h,l=this.renderedLetters,p=this.currentTextDocumentData.l;i=p.length;var m,f,d,c=null,u=null,y=null;for(r=0;i>r;r+=1)if(!p[r].n){if(m=l[r],m&&(this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(m.props),this.globalData.renderer.ctxOpacity(m.o)),this.fill){for(m&&m.fc?c!==m.fc&&(c=m.fc,e.fillStyle=m.fc):c!==this.values.fill&&(c=this.values.fill,e.fillStyle=this.values.fill),f=this.textSpans[r].elem,n=f.length,this.globalData.canvasContext.beginPath(),a=0;n>a;a+=1)for(d=f[a],h=d.length,this.globalData.canvasContext.moveTo(d[0],d[1]),o=2;h>o;o+=6)this.globalData.canvasContext.bezierCurveTo(d[o],d[o+1],d[o+2],d[o+3],d[o+4],d[o+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.fill()}if(this.stroke){for(m&&m.sw?y!==m.sw&&(y=m.sw,e.lineWidth=m.sw):y!==this.values.sWidth&&(y=this.values.sWidth,e.lineWidth=this.values.sWidth),m&&m.sc?u!==m.sc&&(u=m.sc,e.strokeStyle=m.sc):u!==this.values.stroke&&(u=this.values.stroke,e.strokeStyle=this.values.stroke),f=this.textSpans[r].elem,n=f.length,this.globalData.canvasContext.beginPath(),a=0;n>a;a+=1)for(d=f[a],h=d.length,this.globalData.canvasContext.moveTo(d[0],d[1]),o=2;h>o;o+=6)this.globalData.canvasContext.bezierCurveTo(d[o],d[o+1],d[o+2],d[o+3],d[o+4],d[o+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.stroke()}m&&this.globalData.renderer.restore()}this.globalData.renderer.restore(this.data.hasMask),this.firstFrame&&(this.firstFrame=!1)}},createElement(BaseElement,HBaseElement),HBaseElement.prototype.checkBlendMode=function(){},HBaseElement.prototype.setBlendMode=BaseElement.prototype.setBlendMode,HBaseElement.prototype.getBaseElement=function(){return this.baseElement},HBaseElement.prototype.createElements=function(){this.data.hasMask?(this.layerElement=document.createElementNS(svgNS,"svg"),styleDiv(this.layerElement),this.baseElement=this.layerElement,this.maskedElement=this.layerElement):this.layerElement=this.parentContainer,this.transformedElement=this.layerElement,!this.data.ln||4!==this.data.ty&&0!==this.data.ty||(this.layerElement===this.parentContainer&&(this.layerElement=document.createElementNS(svgNS,"g"),this.baseElement=this.layerElement),this.layerElement.setAttribute("id",this.data.ln)),this.setBlendMode(),this.layerElement!==this.parentContainer&&(this.placeholder=null),this.checkParenting()},HBaseElement.prototype.renderFrame=function(t){if(3===this.data.ty)return!1;if(this.currentFrameNum===this.lastNum||!this.isVisible)return this.isVisible;this.lastNum=this.currentFrameNum,this.finalTransform.opMdf=this.finalTransform.op.mdf,this.finalTransform.matMdf=this.finalTransform.mProp.mdf,this.finalTransform.opacity=this.finalTransform.op.v,this.firstFrame&&(this.finalTransform.opMdf=!0,this.finalTransform.matMdf=!0);var e,s=this.finalTransform.mat;if(this.hierarchy){var r,i=this.hierarchy.length;for(e=this.finalTransform.mProp.v.props,s.cloneFromProps(e),r=0;i>r;r+=1)this.finalTransform.matMdf=this.hierarchy[r].finalTransform.mProp.mdf?!0:this.finalTransform.matMdf,e=this.hierarchy[r].finalTransform.mProp.v.props,s.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}else this.isVisible&&this.finalTransform.matMdf&&(t?(e=this.finalTransform.mProp.v.props,s.cloneFromProps(e)):s.cloneFromProps(this.finalTransform.mProp.v.props));return this.data.hasMask&&this.maskManager.renderFrame(s),t&&(e=t.mat.props,s.cloneFromProps(e),this.finalTransform.opacity*=t.opacity,this.finalTransform.opMdf=t.opMdf?!0:this.finalTransform.opMdf,this.finalTransform.matMdf=t.matMdf?!0:this.finalTransform.matMdf),this.finalTransform.matMdf&&(this.transformedElement.style.transform=this.transformedElement.style.webkitTransform=s.toCSS(),this.finalMat=s),this.finalTransform.opMdf&&(this.transformedElement.style.opacity=this.finalTransform.opacity),this.isVisible},HBaseElement.prototype.destroy=function(){this.layerElement=null,this.transformedElement=null,this.parentContainer=null,this.matteElement&&(this.matteElement=null),this.maskManager&&(this.maskManager.destroy(),this.maskManager=null)},HBaseElement.prototype.getDomElement=function(){return this.layerElement},HBaseElement.prototype.addMasks=function(t){this.maskManager=new MaskElement(t,this,this.globalData)},HBaseElement.prototype.hide=function(){},HBaseElement.prototype.setMatte=function(){},HBaseElement.prototype.buildElementParenting=HybridRenderer.prototype.buildElementParenting,createElement(HBaseElement,HSolidElement),HSolidElement.prototype.createElements=function(){var t=document.createElement("div");styleDiv(t);var e=document.createElementNS(svgNS,"svg");styleDiv(e),e.setAttribute("width",this.data.sw),e.setAttribute("height",this.data.sh),t.appendChild(e),this.layerElement=t,this.transformedElement=t,this.baseElement=t,this.innerElem=t,this.data.ln&&this.innerElem.setAttribute("id",this.data.ln),0!==this.data.bm&&this.setBlendMode();var s=document.createElementNS(svgNS,"rect");s.setAttribute("width",this.data.sw),s.setAttribute("height",this.data.sh),s.setAttribute("fill",this.data.sc),e.appendChild(s),this.data.hasMask&&(this.maskedElement=s),this.checkParenting()},HSolidElement.prototype.hide=IImageElement.prototype.hide,HSolidElement.prototype.renderFrame=IImageElement.prototype.renderFrame,HSolidElement.prototype.destroy=IImageElement.prototype.destroy,createElement(HBaseElement,HCompElement),HCompElement.prototype.createElements=function(){var t=document.createElement("div");if(styleDiv(t),this.data.ln&&t.setAttribute("id",this.data.ln),t.style.clip="rect(0px, "+this.data.w+"px, "+this.data.h+"px, 0px)",this.data.hasMask){var e=document.createElementNS(svgNS,"svg");styleDiv(e),e.setAttribute("width",this.data.w),e.setAttribute("height",this.data.h);var s=document.createElementNS(svgNS,"g");e.appendChild(s),t.appendChild(e),this.maskedElement=s,this.baseElement=t,this.layerElement=s,this.transformedElement=t}else this.layerElement=t,this.baseElement=this.layerElement,this.transformedElement=t;this.checkParenting()},HCompElement.prototype.hide=ICompElement.prototype.hide,HCompElement.prototype.prepareFrame=ICompElement.prototype.prepareFrame,HCompElement.prototype.setElements=ICompElement.prototype.setElements,HCompElement.prototype.getElements=ICompElement.prototype.getElements,HCompElement.prototype.destroy=ICompElement.prototype.destroy,HCompElement.prototype.renderFrame=function(t){var e,s=this._parent.renderFrame.call(this,t),r=this.layers.length;if(s===!1)return void this.hide();for(this.hidden=!1,e=0;r>e;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame();this.firstFrame&&(this.firstFrame=!1)},HCompElement.prototype.checkLayers=BaseRenderer.prototype.checkLayers,HCompElement.prototype.buildItem=HybridRenderer.prototype.buildItem,HCompElement.prototype.checkPendingElements=HybridRenderer.prototype.checkPendingElements,HCompElement.prototype.addPendingElement=HybridRenderer.prototype.addPendingElement,HCompElement.prototype.buildAllItems=BaseRenderer.prototype.buildAllItems,HCompElement.prototype.createItem=HybridRenderer.prototype.createItem,HCompElement.prototype.buildElementParenting=HybridRenderer.prototype.buildElementParenting,HCompElement.prototype.createImage=HybridRenderer.prototype.createImage,HCompElement.prototype.createComp=HybridRenderer.prototype.createComp,HCompElement.prototype.createSolid=HybridRenderer.prototype.createSolid,HCompElement.prototype.createShape=HybridRenderer.prototype.createShape,HCompElement.prototype.createText=HybridRenderer.prototype.createText,HCompElement.prototype.createBase=HybridRenderer.prototype.createBase,HCompElement.prototype.appendElementInPos=HybridRenderer.prototype.appendElementInPos,createElement(HBaseElement,HShapeElement);var parent=HShapeElement.prototype._parent;extendPrototype(IShapeElement,HShapeElement),HShapeElement.prototype._parent=parent,HShapeElement.prototype.createElements=function(){var t=document.createElement("div");styleDiv(t);var e=document.createElementNS(svgNS,"svg");styleDiv(e);var s=this.comp.data?this.comp.data:this.globalData.compSize;if(e.setAttribute("width",s.w),e.setAttribute("height",s.h),this.data.hasMask){var r=document.createElementNS(svgNS,"g");t.appendChild(e),e.appendChild(r),this.maskedElement=r,this.layerElement=r,this.shapesContainer=r}else t.appendChild(e),this.layerElement=e,this.shapesContainer=document.createElementNS(svgNS,"g"),this.layerElement.appendChild(this.shapesContainer);this.data.hd||(this.baseElement=t),this.innerElem=t,this.data.ln&&this.innerElem.setAttribute("id",this.data.ln),this.searchShapes(this.shapesData,this.viewData,this.layerElement,this.dynamicProperties,0),this.buildExpressionInterface(),this.layerElement=t,this.transformedElement=t,this.shapeCont=e,0!==this.data.bm&&this.setBlendMode(),this.checkParenting()},HShapeElement.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);if(e===!1)return void this.hide();if(this.hidden&&(this.layerElement.style.display="block",this.hidden=!1),this.renderModifiers(),this.addedTransforms.mdf=this.finalTransform.matMdf,this.addedTransforms.mats.length=1,this.addedTransforms.mats[0]=this.finalTransform.mat,this.renderShape(null,null,!0,null),this.isVisible&&(this.elemMdf||this.firstFrame)){var s=this.shapeCont.getBBox(),r=!1;this.currentBBox.w!==s.width&&(this.currentBBox.w=s.width,this.shapeCont.setAttribute("width",s.width),r=!0),this.currentBBox.h!==s.height&&(this.currentBBox.h=s.height,this.shapeCont.setAttribute("height",s.height),r=!0),(r||this.currentBBox.x!==s.x||this.currentBBox.y!==s.y)&&(this.currentBBox.w=s.width,this.currentBBox.h=s.height,this.currentBBox.x=s.x,this.currentBBox.y=s.y,this.shapeCont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),this.shapeCont.style.transform=this.shapeCont.style.webkitTransform="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)")}},createElement(HBaseElement,HTextElement),HTextElement.prototype.init=ITextElement.prototype.init,HTextElement.prototype.getMeasures=ITextElement.prototype.getMeasures,HTextElement.prototype.createPathShape=ITextElement.prototype.createPathShape,HTextElement.prototype.prepareFrame=ITextElement.prototype.prepareFrame,HTextElement.prototype.createElements=function(){this.isMasked=this.checkMasks();var t=document.createElement("div");if(styleDiv(t),this.layerElement=t,this.transformedElement=t,this.isMasked){this.renderType="svg";var e=document.createElementNS(svgNS,"svg");styleDiv(e),this.cont=e,this.compW=this.comp.data?this.comp.data.w:this.globalData.compSize.w,this.compH=this.comp.data?this.comp.data.h:this.globalData.compSize.h,e.setAttribute("width",this.compW),e.setAttribute("height",this.compH);var s=document.createElementNS(svgNS,"g");e.appendChild(s),t.appendChild(e),this.maskedElement=s,this.innerElem=s}else this.renderType="html",this.innerElem=t;this.baseElement=t,this.checkParenting()},HTextElement.prototype.buildNewText=function(){var t=this.currentTextDocumentData;this.renderedLetters=Array.apply(null,{length:this.currentTextDocumentData.l?this.currentTextDocumentData.l.length:0}),this.innerElem.style.color=this.innerElem.style.fill=t.fc?"rgb("+Math.round(255*t.fc[0])+","+Math.round(255*t.fc[1])+","+Math.round(255*t.fc[2])+")":"rgba(0,0,0,0)",t.sc&&(this.innerElem.style.stroke="rgb("+Math.round(255*t.sc[0])+","+Math.round(255*t.sc[1])+","+Math.round(255*t.sc[2])+")",this.innerElem.style.strokeWidth=t.sw+"px");var e=this.globalData.fontManager.getFontByName(t.f);if(!this.globalData.fontManager.chars)if(this.innerElem.style.fontSize=t.s+"px",this.innerElem.style.lineHeight=t.s+"px",e.fClass)this.innerElem.className=e.fClass;else{this.innerElem.style.fontFamily=e.fFamily;var s=t.fWeight,r=t.fStyle;this.innerElem.style.fontStyle=r,this.innerElem.style.fontWeight=s}var i,a,n=t.l;a=n.length;var o,h,l,p,m=this.mHelper,f="",d=0;for(i=0;a>i;i+=1){if(this.globalData.fontManager.chars?(this.textPaths[d]?o=this.textPaths[d]:(o=document.createElementNS(svgNS,"path"),o.setAttribute("stroke-linecap","butt"),o.setAttribute("stroke-linejoin","round"),o.setAttribute("stroke-miterlimit","4")),this.isMasked||(this.textSpans[d]?(h=this.textSpans[d],l=h.children[0]):(h=document.createElement("div"),l=document.createElementNS(svgNS,"svg"),l.appendChild(o),styleDiv(h)))):this.isMasked?o=this.textPaths[d]?this.textPaths[d]:document.createElementNS(svgNS,"text"):this.textSpans[d]?(h=this.textSpans[d],o=this.textPaths[d]):(h=document.createElement("span"),styleDiv(h),o=document.createElement("span"),styleDiv(o),h.appendChild(o)),this.globalData.fontManager.chars){var c,u=this.globalData.fontManager.getCharData(t.t.charAt(i),e.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily);if(c=u?u.data:null,m.reset(),c&&c.shapes&&(p=c.shapes[0].it,m.scale(t.s/100,t.s/100),f=this.createPathShape(m,p),o.setAttribute("d",f)),this.isMasked)this.innerElem.appendChild(o);else if(this.innerElem.appendChild(h),c&&c.shapes){document.body.appendChild(l);var y=l.getBBox();l.setAttribute("width",y.width),l.setAttribute("height",y.height),l.setAttribute("viewBox",y.x+" "+y.y+" "+y.width+" "+y.height),l.style.transform=l.style.webkitTransform="translate("+y.x+"px,"+y.y+"px)",n[i].yOffset=y.y,h.appendChild(l)}else l.setAttribute("width",1),l.setAttribute("height",1)}else o.textContent=n[i].val,o.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.isMasked?this.innerElem.appendChild(o):(this.innerElem.appendChild(h),o.style.transform=o.style.webkitTransform="translate3d(0,"+-t.s/1.2+"px,0)");this.textSpans[d]=this.isMasked?o:h,this.textSpans[d].style.display="block",this.textPaths[d]=o,d+=1}for(;d<this.textSpans.length;)this.textSpans[d].style.display="none",d+=1},HTextElement.prototype.hide=SVGTextElement.prototype.hide,HTextElement.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);if(e===!1)return void this.hide();if(this.hidden&&(this.hidden=!1,this.innerElem.style.display="block",this.layerElement.style.display="block"),this.data.singleShape){if(!this.firstFrame&&!this.lettersChangedFlag)return;this.isMasked&&this.finalTransform.matMdf&&(this.cont.setAttribute("viewBox",-this.finalTransform.mProp.p.v[0]+" "+-this.finalTransform.mProp.p.v[1]+" "+this.compW+" "+this.compH),this.cont.style.transform=this.cont.style.webkitTransform="translate("+-this.finalTransform.mProp.p.v[0]+"px,"+-this.finalTransform.mProp.p.v[1]+"px)")}if(this.getMeasures(),this.lettersChangedFlag){var s,r,i=this.renderedLetters,a=this.currentTextDocumentData.l;r=a.length;var n;for(s=0;r>s;s+=1)a[s].n||(n=i[s],this.isMasked?this.textSpans[s].setAttribute("transform",n.m):this.textSpans[s].style.transform=this.textSpans[s].style.webkitTransform=n.m,this.textSpans[s].style.opacity=n.o,n.sw&&this.textPaths[s].setAttribute("stroke-width",n.sw),n.sc&&this.textPaths[s].setAttribute("stroke",n.sc),n.fc&&(this.textPaths[s].setAttribute("fill",n.fc),this.textPaths[s].style.color=n.fc));if(this.isVisible&&(this.elemMdf||this.firstFrame)&&this.innerElem.getBBox){
var o=this.innerElem.getBBox();this.currentBBox.w!==o.width&&(this.currentBBox.w=o.width,this.cont.setAttribute("width",o.width)),this.currentBBox.h!==o.height&&(this.currentBBox.h=o.height,this.cont.setAttribute("height",o.height)),(this.currentBBox.w!==o.width||this.currentBBox.h!==o.height||this.currentBBox.x!==o.x||this.currentBBox.y!==o.y)&&(this.currentBBox.w=o.width,this.currentBBox.h=o.height,this.currentBBox.x=o.x,this.currentBBox.y=o.y,this.cont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),this.cont.style.transform=this.cont.style.webkitTransform="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)")}this.firstFrame&&(this.firstFrame=!1)}},HTextElement.prototype.destroy=SVGTextElement.prototype.destroy,createElement(HBaseElement,HImageElement),HImageElement.prototype.createElements=function(){var t=this.globalData.getAssetsPath(this.assetData),e=new Image;if(this.data.hasMask){var s=document.createElement("div");styleDiv(s);var r=document.createElementNS(svgNS,"svg");styleDiv(r),r.setAttribute("width",this.assetData.w),r.setAttribute("height",this.assetData.h),s.appendChild(r),this.imageElem=document.createElementNS(svgNS,"image"),this.imageElem.setAttribute("width",this.assetData.w+"px"),this.imageElem.setAttribute("height",this.assetData.h+"px"),this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),r.appendChild(this.imageElem),this.layerElement=s,this.transformedElement=s,this.baseElement=s,this.innerElem=s,this.maskedElement=this.imageElem}else styleDiv(e),this.layerElement=e,this.baseElement=e,this.innerElem=e;e.src=t,this.data.ln&&this.innerElem.setAttribute("id",this.data.ln),this.checkParenting()},HImageElement.prototype.hide=HSolidElement.prototype.hide,HImageElement.prototype.renderFrame=HSolidElement.prototype.renderFrame,HImageElement.prototype.destroy=HSolidElement.prototype.destroy,createElement(HBaseElement,HCameraElement),HCameraElement.prototype.setup=function(){var t,e,s=this.comp.threeDElements.length;for(t=0;s>t;t+=1)e=this.comp.threeDElements[t],e.perspectiveElem.style.perspective=e.perspectiveElem.style.webkitPerspective=this.pe.v+"px",e.container.style.transformOrigin=e.container.style.mozTransformOrigin=e.container.style.webkitTransformOrigin="0px 0px 0px",e.perspectiveElem.style.transform=e.perspectiveElem.style.webkitTransform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"},HCameraElement.prototype.createElements=function(){},HCameraElement.prototype.hide=function(){},HCameraElement.prototype.renderFrame=function(){var t,e,s=this.firstFrame;if(this.hierarchy)for(e=this.hierarchy.length,t=0;e>t;t+=1)s=this.hierarchy[t].finalTransform.mProp.mdf?!0:s;if(s||this.p&&this.p.mdf||this.px&&(this.px.mdf||this.py.mdf||this.pz.mdf)||this.rx.mdf||this.ry.mdf||this.rz.mdf||this.or.mdf||this.a&&this.a.mdf){if(this.mat.reset(),this.p?this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]):this.mat.translate(-this.px.v,-this.py.v,this.pz.v),this.a){var r=[this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]],i=Math.sqrt(Math.pow(r[0],2)+Math.pow(r[1],2)+Math.pow(r[2],2)),a=[r[0]/i,r[1]/i,r[2]/i],n=Math.sqrt(a[2]*a[2]+a[0]*a[0]),o=Math.atan2(a[1],n),h=Math.atan2(a[0],-a[2]);this.mat.rotateY(h).rotateX(-o)}if(this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0),this.mat.translate(0,0,this.pe.v),this.hierarchy){var l;for(e=this.hierarchy.length,t=0;e>t;t+=1)l=this.hierarchy[t].finalTransform.mProp.iv.props,this.mat.transform(l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8],l[9],l[10],l[11],-l[12],-l[13],l[14],l[15])}e=this.comp.threeDElements.length;var p;for(t=0;e>t;t+=1)p=this.comp.threeDElements[t],p.container.style.transform=p.container.style.webkitTransform=this.mat.toCSS()}this.firstFrame=!1},HCameraElement.prototype.destroy=function(){};var Expressions=function(){function t(t){t.renderer.compInterface=CompExpressionInterface(t.renderer),t.renderer.globalData.projectInterface.registerComposition(t.renderer)}var e={};return e.initExpressions=t,e}();expressionsPlugin=Expressions,function(){function t(){return this.pv}function e(t,e){var s,r,i=0,a=this.keyframes.length-1,n=1,o=!0;e=void 0===e?this.offsetTime:0;for(var h="object"==typeof this.pv?[this.pv.length]:0;o;){if(s=this.keyframes[i],r=this.keyframes[i+1],i==a-1&&t>=r.t-e){s.h&&(s=r);break}if(r.t-e>t)break;a-1>i?i+=n:o=!1}var l,p,m,f,d,c=0;if(s.to){s.bezierData||bez.buildBezierData(s);var u=s.bezierData;if(t>=r.t-e||t<s.t-e){var y=t>=r.t-e?u.points.length-1:0;for(p=u.points[y].point.length,l=0;p>l;l+=1)h[l]=u.points[y].point[l]}else{s.__fnct?d=s.__fnct:(d=BezierFactory.getBezierEasing(s.o.x,s.o.y,s.i.x,s.i.y,s.n).get,s.__fnct=d),m=d((t-(s.t-e))/(r.t-e-(s.t-e)));var g,v=u.segmentLength*m,b=0;for(n=1,o=!0,f=u.points.length;o;){if(b+=u.points[c].partialLength*n,0===v||0===m||c==u.points.length-1){for(p=u.points[c].point.length,l=0;p>l;l+=1)h[l]=u.points[c].point[l];break}if(v>=b&&v<b+u.points[c+1].partialLength){for(g=(v-b)/u.points[c+1].partialLength,p=u.points[c].point.length,l=0;p>l;l+=1)h[l]=u.points[c].point[l]+(u.points[c+1].point[l]-u.points[c].point[l])*g;break}f-1>c&&1==n||c>0&&-1==n?c+=n:o=!1}}}else{var E,P,k,S,x,C=!1;for(a=s.s.length,i=0;a>i;i+=1){if(1!==s.h&&(s.o.x instanceof Array?(C=!0,s.__fnct||(s.__fnct=[]),s.__fnct[i]||(E=s.o.x[i]||s.o.x[0],P=s.o.y[i]||s.o.y[0],k=s.i.x[i]||s.i.x[0],S=s.i.y[i]||s.i.y[0])):(C=!1,s.__fnct||(E=s.o.x,P=s.o.y,k=s.i.x,S=s.i.y)),C?s.__fnct[i]?d=s.__fnct[i]:(d=BezierFactory.getBezierEasing(E,P,k,S).get,s.__fnct[i]=d):s.__fnct?d=s.__fnct:(d=BezierFactory.getBezierEasing(E,P,k,S).get,s.__fnct=d),m=t>=r.t-e?1:t<s.t-e?0:d((t-(s.t-e))/(r.t-e-(s.t-e)))),this.sh&&1!==s.h){var M=s.s[i],D=s.e[i];-180>M-D?M+=360:M-D>180&&(M-=360),x=M+(D-M)*m}else x=1===s.h?s.s[i]:s.s[i]+(s.e[i]-s.s[i])*m;1===a?h=x:h[i]=x}}return h}function s(t){if(void 0!==this.vel)return this.vel;var e=-.01;t*=this.elem.globalData.frameRate;var s,r=this.getValueAtTime(t,0),i=this.getValueAtTime(t+e,0);if(r.length){s=Array.apply(null,{length:r.length});var a;for(a=0;a<r.length;a+=1)s[a]=this.elem.globalData.frameRate*((i[a]-r[a])/e)}else s=(i-r)/e;return s}function r(t){this.propertyGroup=t}function i(t,e,s){e.x&&(s.k=!0,s.x=!0,s.getValue&&(s.getPreValue=s.getValue),s.getValue=ExpressionManager.initiateExpression.bind(s)(t,e,s))}var a=function(){function a(t,e){return this.textIndex=t+1,this.textTotal=e,this.getValue(),this.v}return function(n,o){this.pv=1,this.comp=n.comp,this.elem=n,this.mult=.01,this.type="textSelector",this.textTotal=o.totalChars,this.selectorValue=100,this.lastValue=[1,1,1],i.bind(this)(n,o,this),this.getMult=a,this.getVelocityAtTime=s,this.getValueAtTime=this.kf?e:t,this.setGroupProperty=r}}(),n=PropertyFactory.getProp;PropertyFactory.getProp=function(a,o,h,l,p){var m=n(a,o,h,l,p);m.getVelocityAtTime=s,m.getValueAtTime=m.kf?e:t,m.setGroupProperty=r;var f=m.k;return void 0!==o.ix&&Object.defineProperty(m,"propertyIndex",{get:function(){return o.ix}}),i(a,o,m),!f&&m.x&&p.push(m),m};var o=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(t,e,s,a,n){var h=o(t,e,s,a,n);h.setGroupProperty=r;var l=h.k;return void 0!==e.ix&&Object.defineProperty(h,"propertyIndex",{get:function(){return e.ix}}),3===s?i(t,e.pt,h):4===s&&i(t,e.ks,h),!l&&h.x&&a.push(h),h};var h=PropertyFactory.getTextSelectorProp;PropertyFactory.getTextSelectorProp=function(t,e,s){return 1===e.t?new a(t,e,s):h(t,e,s)}}();var ExpressionManager=function(){function duplicatePropertyValue(t,e){if(e=e||1,"number"==typeof t)return t*e;if(t.i)return JSON.parse(JSON.stringify(t));var s,r=Array.apply(null,{length:t.length}),i=t.length;for(s=0;i>s;s+=1)r[s]=t[s]*e;return r}function $bm_neg(t){var e=typeof t;if("number"===e||"boolean"===e)return-t;if("object"===e){var s,r=t.length,i=[];for(s=0;r>s;s+=1)i[s]=-t[s];return i}}function sum(t,e){var s=typeof t,r=typeof e;if("string"===s||"string"===r)return t+e;if(!("number"!==s&&"boolean"!==s&&"string"!==s||"number"!==r&&"boolean"!==r&&"string"!==r))return t+e;if("object"===s&&("number"===r||"boolean"===r||"string"===r))return t[0]=t[0]+e,t;if(("number"===s||"boolean"===s||"string"===s)&&"object"===r)return e[0]=t+e[0],e;if("object"===s&&"object"===r){for(var i=0,a=t.length,n=e.length,o=[];a>i||n>i;)o[i]="number"==typeof t[i]&&"number"==typeof e[i]?t[i]+e[i]:void 0==e[i]?t[i]:t[i]||e[i],i+=1;return o}return 0}function sub(t,e){var s=typeof t,r=typeof e;if(!("number"!==s&&"boolean"!==s&&"string"!==s||"number"!==r&&"boolean"!==r&&"string"!==r))return t-e;if("object"===s&&("number"===r||"boolean"===r||"string"===r))return t[0]=t[0]-e,t;if(("number"===s||"boolean"===s||"string"===s)&&"object"===r)return e[0]=t-e[0],e;if("object"===s&&"object"===r){for(var i=0,a=t.length,n=e.length,o=[];a>i||n>i;)o[i]="number"==typeof t[i]&&"number"==typeof e[i]?t[i]-e[i]:void 0==e[i]?t[i]:t[i]||e[i],i+=1;return o}return 0}function mul(t,e){var s,r=typeof t,i=typeof e;if(!("number"!==r&&"boolean"!==r&&"string"!==r||"number"!==i&&"boolean"!==i&&"string"!==i))return t*e;var a,n;if("object"===r&&("number"===i||"boolean"===i||"string"===i)){for(n=t.length,s=Array.apply(null,{length:n}),a=0;n>a;a+=1)s[a]=t[a]*e;return s}if(("number"===r||"boolean"===r||"string"===r)&&"object"===i){for(n=e.length,s=Array.apply(null,{length:n}),a=0;n>a;a+=1)s[a]=t*e[a];return s}return 0}function div(t,e){var s,r=typeof t,i=typeof e;if(!("number"!==r&&"boolean"!==r&&"string"!==r||"number"!==i&&"boolean"!==i&&"string"!==i))return t/e;var a,n;if("object"===r&&("number"===i||"boolean"===i||"string"===i)){for(n=t.length,s=Array.apply(null,{length:n}),a=0;n>a;a+=1)s[a]=t[a]/e;return s}if(("number"===r||"boolean"===r||"string"===r)&&"object"===i){for(n=e.length,s=Array.apply(null,{length:n}),a=0;n>a;a+=1)s[a]=t/e[a];return s}return 0}function clamp(t,e,s){if(e>s){var r=s;s=e,e=r}return Math.min(Math.max(t,e),s)}function radiansToDegrees(t){return t/degToRads}function degreesToRadians(t){return t*degToRads}function length(t,e){if("number"==typeof t)return e=e||0,Math.abs(t-e);e||(e=helperLengthArray);var s,r=Math.min(t.length,e.length),i=0;for(s=0;r>s;s+=1)i+=Math.pow(e[s]-t[s],2);return Math.sqrt(i)}function normalize(t){return div(t,length(t))}function rgbToHsl(t){var e,s,r=t[0],i=t[1],a=t[2],n=Math.max(r,i,a),o=Math.min(r,i,a),h=(n+o)/2;if(n==o)e=s=0;else{var l=n-o;switch(s=h>.5?l/(2-n-o):l/(n+o),n){case r:e=(i-a)/l+(a>i?6:0);break;case i:e=(a-r)/l+2;break;case a:e=(r-i)/l+4}e/=6}return[e,s,h,t[3]]}function hslToRgb(t){function e(t,e,s){return 0>s&&(s+=1),s>1&&(s-=1),1/6>s?t+6*(e-t)*s:.5>s?e:2/3>s?t+(e-t)*(2/3-s)*6:t}var s,r,i,a=t[0],n=t[1],o=t[2];if(0==n)s=r=i=o;else{var h=.5>o?o*(1+n):o+n-o*n,l=2*o-h;s=e(l,h,a+1/3),r=e(l,h,a),i=e(l,h,a-1/3)}return[s,r,i,t[3]]}function linear(t,e,s,r,i){if(void 0===r||void 0===i)return linear(t,0,1,e,s);if(e>=t)return r;if(t>=s)return i;var a=s===e?0:(t-e)/(s-e);if(!r.length)return r+(i-r)*a;var n,o=r.length,h=Array.apply(null,{length:o});for(n=0;o>n;n+=1)h[n]=r[n]+(i[n]-r[n])*a;return h}function random(t,e){if(void 0===e&&(void 0===t?(t=0,e=1):(e=t,t=void 0)),e.length){var s,r=e.length;t||(t=Array.apply(null,{length:r}));var i=Array.apply(null,{length:r}),a=BMMath.random();for(s=0;r>s;s+=1)i[s]=t[s]+a*(e[s]-t[s]);return i}void 0===t&&(t=0);var n=BMMath.random();return t+n*(e-t)}function initiateExpression(elem,data,property){function lookAt(t,e){var s=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],r=Math.atan2(s[0],Math.sqrt(s[1]*s[1]+s[2]*s[2]))/degToRads,i=-Math.atan2(s[1],s[2])/degToRads;return[i,r,0]}function easeOut(t,e,s){return-(s-e)*t*(t-2)+e}function nearestKey(t){var e,s,r,i=data.k.length;if(data.k.length&&"number"!=typeof data.k[0]){for(s=-1,t*=elem.comp.globalData.frameRate,e=0;i-1>e;e+=1){if(t===data.k[e].t){s=e+1,r=data.k[e].t;break}if(t>data.k[e].t&&t<data.k[e+1].t){t-data.k[e].t>data.k[e+1].t-t?(s=e+2,r=data.k[e+1].t):(s=e+1,r=data.k[e].t);break}}-1===s&&(s=e+1,r=data.k[e].t)}else s=0,r=0;var a={};return a.index=s,a.time=r/elem.comp.globalData.frameRate,a}function key(t){if(!data.k.length||"number"==typeof data.k[0])return{time:0};t-=1;var e,s={time:data.k[t].t/elem.comp.globalData.frameRate};e=t===data.k.length-1?data.k[t-1].e:data.k[t].s;var r,i=e.length;for(r=0;i>r;r+=1)s[r]=e[r];return s}function framesToTime(t,e){return e||(e=elem.comp.globalData.frameRate),t/e}function timeToFrames(t,e){return t||(t=time),e||(e=elem.comp.globalData.frameRate),t*e}function toWorld(t){if(toworldMatrix.reset(),elem.finalTransform.mProp.applyToMatrix(toworldMatrix),elem.hierarchy&&elem.hierarchy.length){var e,s=elem.hierarchy.length;for(e=0;s>e;e+=1)elem.hierarchy[e].finalTransform.mProp.applyToMatrix(toworldMatrix);return toworldMatrix.applyToPointArray(t[0],t[1],t[2]||0)}return toworldMatrix.applyToPointArray(t[0],t[1],t[2]||0)}function fromWorld(t){fromworldMatrix.reset();var e=[];if(e.push(t),elem.finalTransform.mProp.applyToMatrix(fromworldMatrix),elem.hierarchy&&elem.hierarchy.length){var s,r=elem.hierarchy.length;for(s=0;r>s;s+=1)elem.hierarchy[s].finalTransform.mProp.applyToMatrix(fromworldMatrix);return fromworldMatrix.inversePoints(e)[0]}return fromworldMatrix.inversePoints(e)[0]}function seedRandom(t){BMMath.seedrandom(randSeed+t)}function execute(){if(seedRandom(randSeed),this.frameExpressionId!==elem.globalData.frameId||"textSelector"===this.type){if(this.lock)return this.v=duplicatePropertyValue(this.pv,this.mult),!0;"textSelector"===this.type&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),transform||(transform=elem.transform),thisLayer||(thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface),4!==elemType||content||(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),hasParent=!(!elem.hierarchy||!elem.hierarchy.length),hasParent&&!parent&&(parent=elem.hierarchy[elem.hierarchy.length-1].layerInterface),this.lock=!0,this.getPreValue&&this.getPreValue(),value=this.pv,time=this.comp.renderedFrame/this.comp.globalData.frameRate,needsVelocity&&(velocity=velocityAtTime(time)),bindedFn(),this.frameExpressionId=elem.globalData.frameId;var t,e;if(this.mult)if("number"==typeof this.v)this.v*=this.mult;else for(e=this.v.length,value===this.v&&(this.v=2===e?[value[0],value[1]]:[value[0],value[1],value[2]]),t=0;e>t;t+=1)this.v[t]*=this.mult;if("number"==typeof this.v)this.lastValue!==this.v&&(this.lastValue=this.v,this.mdf=!0);else if(this.v.i)this.mdf=!0,this.paths.length=0,this.paths[0]=this.v;else for(e=this.v.length,t=0;e>t;t+=1)this.v[t]!==this.lastValue[t]&&(this.lastValue[t]=this.v[t],this.mdf=!0);this.lock=!1}}var val=data.x,needsVelocity=-1!==val.indexOf("velocity"),elemType=elem.data.ty,transform,content,effect,thisComp=elem.comp,thisProperty=property;elem.comp.frameDuration=1/elem.comp.globalData.frameRate;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,thisLayer,thisComp,fn=new Function,fnStr="var fn = function(){"+val+";this.v = $bm_rt;}";eval(fnStr);var bindedFn=fn.bind(this),numKeys=data.k?data.k.length:0,wiggle=function(t,e){var s,r,i=this.pv.length?this.pv.length:1,a=Array.apply(null,{len:i});for(r=0;i>r;r+=1)a[r]=0;t=5;var n=Math.floor(time*t);for(s=0,r=0;n>s;){for(r=0;i>r;r+=1)a[r]+=-e+2*e*BMMath.random();s+=1}var o=time*t,h=o-Math.floor(o),l=Array.apply({length:i});for(r=0;i>r;r+=1)l[r]=this.pv[r]+a[r]+(-e+2*e*BMMath.random())*h;return l}.bind(this),loopIn=function(t,e,s){if(!this.k)return this.pv;var r=time*elem.comp.globalData.frameRate,i=this.keyframes,a=i[0].t;if(r>=a)return this.pv;var n,o;s?(n=e?Math.abs(elem.comp.globalData.frameRate*e):Math.max(0,this.elem.data.op-a),o=a+n):((!e||e>i.length-1)&&(e=i.length-1),o=i[e].t,n=o-a);var h,l,p;if("pingpong"===t){var m=Math.floor((a-r)/n);if(m%2===0)return this.getValueAtTime((a-r)%n+a,0)}else{if("offset"===t){var f=this.getValueAtTime(a,0),d=this.getValueAtTime(o,0),c=this.getValueAtTime(n-(a-r)%n+a,0),u=Math.floor((a-r)/n)+1;if(this.pv.length){for(p=new Array(f.length),l=p.length,h=0;l>h;h+=1)p[h]=c[h]-(d[h]-f[h])*u;return p}return c-(d-f)*u}if("continue"===t){var y=this.getValueAtTime(a,0),g=this.getValueAtTime(a+.001,0);if(this.pv.length){for(p=new Array(y.length),l=p.length,h=0;l>h;h+=1)p[h]=y[h]+(y[h]-g[h])*(a-r)/5e-4;return p}return y+(y-g)*(a-r)/5e-4}}return this.getValueAtTime(n-(a-r)%n+a,0)}.bind(this),loopInDuration=function(t,e){return loopIn(t,e,!0)}.bind(this),loopOut=function(t,e,s){if(!this.k||!this.keyframes)return this.pv;var r=time*elem.comp.globalData.frameRate,i=this.keyframes,a=i[i.length-1].t;if(a>=r)return this.pv;var n,o;s?(n=e?Math.abs(a-elem.comp.globalData.frameRate*e):Math.max(0,a-this.elem.data.ip),o=a-n):((!e||e>i.length-1)&&(e=i.length-1),o=i[i.length-1-e].t,n=a-o);var h,l,p;if("pingpong"===t){var m=Math.floor((r-o)/n);if(m%2!==0)return this.getValueAtTime(n-(r-o)%n+o,0)}else{if("offset"===t){var f=this.getValueAtTime(o,0),d=this.getValueAtTime(a,0),c=this.getValueAtTime((r-o)%n+o,0),u=Math.floor((r-o)/n);if(this.pv.length){for(p=new Array(f.length),l=p.length,h=0;l>h;h+=1)p[h]=(d[h]-f[h])*u+c[h];return p}return(d-f)*u+c}if("continue"===t){var y=this.getValueAtTime(a,0),g=this.getValueAtTime(a-.001,0);if(this.pv.length){for(p=new Array(y.length),l=p.length,h=0;l>h;h+=1)p[h]=y[h]+(y[h]-g[h])*(r-a)/5e-4;return p}return y+(y-g)*(r-a)/5e-4}}return this.getValueAtTime((r-o)%n+o,0)}.bind(this),loop_out=loopOut,loopOutDuration=function(t,e){return loopOut(t,e,!0)}.bind(this),valueAtTime=function(t){return this.getValueAtTime(t*elem.comp.globalData.frameRate,0)}.bind(this),velocityAtTime=function(t){return this.getVelocityAtTime(t)}.bind(this),comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),toworldMatrix=new Matrix,fromworldMatrix=new Matrix,time,velocity,value,textIndex,textTotal,selectorValue,index=elem.data.ind+1,hasParent=!(!elem.hierarchy||!elem.hierarchy.length),parent,randSeed=Math.floor(1e6*Math.random());return execute}var ob={},Math=BMMath,radians_to_degrees=radiansToDegrees,degrees_to_radians=radiansToDegrees,helperLengthArray=[0,0,0,0,0,0];return ob.initiateExpression=initiateExpression,ob}(),ShapeExpressionInterface=function(){function t(t,e,s){return d(t,e,s)}function e(t,e,s){return u(t,e,s)}function s(t,e,s){return y(t,e,s)}function r(t,e,s){return g(t,e,s)}function i(t,e,s){return v(t,e,s)}function a(t,e,s){return b(t,e,s)}function n(t,e,s){return E(t,e,s)}function o(t,e,s){return P(t,e,s)}function h(t,e,s){return k(t,e,s)}function l(t,e,s){return S(t,e,s)}function p(t,e,s){return x(t,e,s)}function m(t,e,s){var r,i=[],a=t?t.length:0;for(r=0;a>r;r+=1)"gr"==t[r].ty?i.push(ShapeExpressionInterface.createGroupInterface(t[r],e[r],s)):"fl"==t[r].ty?i.push(ShapeExpressionInterface.createFillInterface(t[r],e[r],s)):"st"==t[r].ty?i.push(ShapeExpressionInterface.createStrokeInterface(t[r],e[r],s)):"tm"==t[r].ty?i.push(ShapeExpressionInterface.createTrimInterface(t[r],e[r],s)):"tr"==t[r].ty||("el"==t[r].ty?i.push(ShapeExpressionInterface.createEllipseInterface(t[r],e[r],s)):"sr"==t[r].ty?i.push(ShapeExpressionInterface.createStarInterface(t[r],e[r],s)):"sh"==t[r].ty?i.push(ShapeExpressionInterface.createPathInterface(t[r],e[r],s)):"rc"==t[r].ty?i.push(ShapeExpressionInterface.createRectInterface(t[r],e[r],s)):"rd"==t[r].ty&&i.push(ShapeExpressionInterface.createRoundedInterface(t[r],e[r],s)));return i}var f={createShapeInterface:t,createGroupInterface:e,createTrimInterface:i,createStrokeInterface:r,createTransformInterface:a,createEllipseInterface:n,createStarInterface:o,createRectInterface:h,createRoundedInterface:l,createPathInterface:p,createFillInterface:s},d=function(){return function(t,e,s){function r(t){if("number"==typeof t)return i[t-1];for(var e=0,s=i.length;s>e;){if(i[e]._name===t)return i[e];e+=1}}var i;return r.propertyGroup=s,i=m(t,e,r),r}}(),c=function(){return function(t,e,s){var r,i=function(t){if("number"==typeof t)return r[t-1];for(var e=0,s=r.length;s>e;){if(r[e]._name===t||r[e].mn===t)return r[e];e+=1}};return i.propertyGroup=function(t){return 1===t?i:s(t-1)},r=m(t.it,e.it,i.propertyGroup),i.numProperties=r.length,i}}(),u=function(){return function(t,e,s){var r=function(t){switch(t){case"ADBE Vectors Group":case 2:return r.content;case"ADBE Vector Transform Group":case 3:default:return r.transform}};r.propertyGroup=function(t){return 1===t?r:s(t-1)};var i=c(t,e,r.propertyGroup),a=ShapeExpressionInterface.createTransformInterface(t.it[t.it.length-1],e.it[e.it.length-1],r.propertyGroup);return r.content=i,r.transform=a,Object.defineProperty(r,"_name",{get:function(){return t.nm}}),r.numProperties=1,r.nm=t.nm,r.mn=t.mn,r}}(),y=function(){return function(t,e,s){e.c.setGroupProperty(s),e.o.setGroupProperty(s);var r={get color(){return e.c.k&&e.c.getValue(),[e.c.v[0]/e.c.mult,e.c.v[1]/e.c.mult,e.c.v[2]/e.c.mult,1]},get opacity(){return e.o.k&&e.o.getValue(),e.o.v},_name:t.nm,mn:t.mn};return r}}(),g=function(){return function(t,e,s){function r(t){return 1===t?i:s(t-1)}e.c.setGroupProperty(r),e.o.setGroupProperty(r),e.w.setGroupProperty(r);var i={get color(){return e.c.k&&e.c.getValue(),[e.c.v[0]/e.c.mult,e.c.v[1]/e.c.mult,e.c.v[2]/e.c.mult,1]},get opacity(){return e.o.k&&e.o.getValue(),e.o.v},get strokeWidth(){return e.w.k&&e.w.getValue(),e.w.v},dashOb:{},get dash(){var r,i=e.d,a=t.d,n=a.length;for(r=0;n>r;r+=1)i.dataProps[r].p.k&&i.dataProps[r].p.getValue(),i.dataProps[r].p.setGroupProperty(s),this.dashOb[a[r].nm]=i.dataProps[r].p.v;return this.dashOb},_name:t.nm,mn:t.mn};return i}}(),v=function(){return function(t,e,s){function r(t){return 1==t?i:s(--t)}function i(e){return e===t.e.ix?i.end:e===t.s.ix?i.start:e===t.o.ix?i.offset:void 0}return i.propertyIndex=t.ix,e.s.setGroupProperty(r),e.e.setGroupProperty(r),e.o.setGroupProperty(r),i.propertyIndex=t.ix,Object.defineProperty(i,"start",{get:function(){return e.s.k&&e.s.getValue(),e.s.v/e.s.mult}}),Object.defineProperty(i,"end",{get:function(){return e.e.k&&e.e.getValue(),e.e.v/e.e.mult}}),Object.defineProperty(i,"offset",{get:function(){return e.o.k&&e.o.getValue(),e.o.v}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),b=function(){return function(t,e,s){function r(t){return 1==t?i:s(--t)}function i(e){return t.a.ix===e?i.anchorPoint:t.o.ix===e?i.opacity:t.p.ix===e?i.position:t.r.ix===e?i.rotation:t.s.ix===e?i.scale:t.sk&&t.sk.ix===e?i.skew:t.sa&&t.sa.ix===e?i.skewAxis:void 0}e.transform.mProps.o.setGroupProperty(r),e.transform.mProps.p.setGroupProperty(r),e.transform.mProps.a.setGroupProperty(r),e.transform.mProps.s.setGroupProperty(r),e.transform.mProps.r.setGroupProperty(r),e.transform.mProps.sk&&(e.transform.mProps.sk.setGroupProperty(r),e.transform.mProps.sa.setGroupProperty(r)),e.transform.op.setGroupProperty(r),Object.defineProperty(i,"opacity",{get:function(){return e.transform.mProps.o.k&&e.transform.mProps.o.getValue(),e.transform.mProps.o.v/e.transform.mProps.o.mult}}),Object.defineProperty(i,"position",{get:function(){return e.transform.mProps.p.k&&e.transform.mProps.p.getValue(),[e.transform.mProps.p.v[0],e.transform.mProps.p.v[1]]}}),Object.defineProperty(i,"anchorPoint",{get:function(){return e.transform.mProps.a.k&&e.transform.mProps.a.getValue(),[e.transform.mProps.a.v[0],e.transform.mProps.a.v[1]]}});var a=[];return Object.defineProperty(i,"scale",{get:function(){return e.transform.mProps.s.k&&e.transform.mProps.s.getValue(),a[0]=e.transform.mProps.s.v[0]/e.transform.mProps.s.mult,a[1]=e.transform.mProps.s.v[1]/e.transform.mProps.s.mult,a}}),Object.defineProperty(i,"rotation",{get:function(){return e.transform.mProps.r.k&&e.transform.mProps.r.getValue(),e.transform.mProps.r.v/e.transform.mProps.r.mult}}),Object.defineProperty(i,"skew",{get:function(){return e.transform.mProps.sk.k&&e.transform.mProps.sk.getValue(),e.transform.mProps.sk.v}}),Object.defineProperty(i,"skewAxis",{get:function(){return e.transform.mProps.sa.k&&e.transform.mProps.sa.getValue(),e.transform.mProps.sa.v}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.ty="tr",i.mn=t.mn,i}}(),E=function(){return function(t,e,s){function r(t){return 1==t?i:s(--t)}function i(e){return t.p.ix===e?i.position:t.s.ix===e?i.size:void 0}i.propertyIndex=t.ix;var a="tm"===e.sh.ty?e.sh.prop:e.sh;return a.s.setGroupProperty(r),a.p.setGroupProperty(r),Object.defineProperty(i,"size",{get:function(){return a.s.k&&a.s.getValue(),[a.s.v[0],a.s.v[1]]}}),Object.defineProperty(i,"position",{get:function(){return a.p.k&&a.p.getValue(),[a.p.v[0],a.p.v[1]]}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),P=function(){return function(t,e,s){function r(t){return 1==t?i:s(--t)}function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.rotation:t.pt.ix===e?i.points:t.or.ix===e||"ADBE Vector Star Outer Radius"===e?i.outerRadius:t.os.ix===e?i.outerRoundness:!t.ir||t.ir.ix!==e&&"ADBE Vector Star Inner Radius"!==e?t.is&&t.is.ix===e?i.innerRoundness:void 0:i.innerRadius}var a="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,a.or.setGroupProperty(r),a.os.setGroupProperty(r),a.pt.setGroupProperty(r),a.p.setGroupProperty(r),a.r.setGroupProperty(r),t.ir&&(a.ir.setGroupProperty(r),a.is.setGroupProperty(r)),Object.defineProperty(i,"position",{get:function(){return a.p.k&&a.p.getValue(),a.p.v}}),Object.defineProperty(i,"rotation",{get:function(){return a.r.k&&a.r.getValue(),a.r.v/a.r.mult}}),Object.defineProperty(i,"points",{get:function(){return a.pt.k&&a.pt.getValue(),a.pt.v}}),Object.defineProperty(i,"outerRadius",{get:function(){return a.or.k&&a.or.getValue(),a.or.v}}),Object.defineProperty(i,"outerRoundness",{get:function(){return a.os.k&&a.os.getValue(),a.os.v/a.os.mult}}),Object.defineProperty(i,"innerRadius",{get:function(){return a.ir?(a.ir.k&&a.ir.getValue(),a.ir.v):0}}),Object.defineProperty(i,"innerRoundness",{get:function(){return a.is?(a.is.k&&a.is.getValue(),a.is.v/a.is.mult):0}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),k=function(){return function(t,e,s){function r(t){return 1==t?i:s(--t)}function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.rotation:t.pt.ix===e?i.points:t.or.ix===e||"ADBE Vector Star Outer Radius"===e?i.outerRadius:t.os.ix===e?i.outerRoundness:!t.ir||t.ir.ix!==e&&"ADBE Vector Star Inner Radius"!==e?t.is&&t.is.ix===e?i.innerRoundness:void 0:i.innerRadius}var a="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,a.p.setGroupProperty(r),a.s.setGroupProperty(r),a.r.setGroupProperty(r),Object.defineProperty(i,"position",{get:function(){return a.p.k&&a.p.getValue(),a.p.v}}),Object.defineProperty(i,"roundness",{get:function(){return a.r.k&&a.r.getValue(),a.r.v}}),Object.defineProperty(i,"size",{get:function(){return a.s.k&&a.s.getValue(),a.s.v}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),S=function(){return function(t,e,s){function r(t){return 1==t?i:s(--t)}function i(e){return t.r.ix===e||"Round Corners 1"===e?i.radius:void 0}var a=e;return i.propertyIndex=t.ix,a.rd.setGroupProperty(r),Object.defineProperty(i,"radius",{get:function(){return a.rd.k&&a.rd.getValue(),a.rd.v}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),x=function(){return function(t,e,s){var r="tm"===e.sh.ty?e.sh.prop:e.sh;r.setGroupProperty(s);var i={get shape(){return r.k&&r.getValue(),r.v},get path(){return r.k&&r.getValue(),r.v},_name:t.nm,mn:t.mn};return i}}();return f}(),LayerExpressionInterface=function(){function t(t){var e=new Matrix;if(e.reset(),this._elem.finalTransform.mProp.applyToMatrix(e),this._elem.hierarchy&&this._elem.hierarchy.length){var s,r=this._elem.hierarchy.length;for(s=0;r>s;s+=1)this._elem.hierarchy[s].finalTransform.mProp.applyToMatrix(e);return e.applyToPointArray(t[0],t[1],t[2]||0)}return e.applyToPointArray(t[0],t[1],t[2]||0)}return function(e){function s(t){i.mask=t.getMask.bind(t)}function r(t){i.effect=t}function i(t){switch(t){case"ADBE Root Vectors Group":case 2:return i.shapeInterface;case 1:case"Transform":case"transform":case"ADBE Transform Group":return a;case 4:case"ADBE Effect Parade":return i.effect}}var a=TransformExpressionInterface(e.transform);return i.toWorld=t,i.toComp=t,i._elem=e,Object.defineProperty(i,"hasParent",{get:function(){return!!e.hierarchy}}),Object.defineProperty(i,"parent",{get:function(){return e.hierarchy[0].layerInterface}}),Object.defineProperty(i,"rotation",{get:function(){return a.rotation}}),Object.defineProperty(i,"scale",{get:function(){return a.scale}}),Object.defineProperty(i,"position",{get:function(){return a.position}}),Object.defineProperty(i,"anchorPoint",{get:function(){return a.anchorPoint}}),Object.defineProperty(i,"transform",{get:function(){return a}}),Object.defineProperty(i,"_name",{value:e.data.nm}),Object.defineProperty(i,"content",{get:function(){return i.shapeInterface}}),i.active=!0,i.registerMaskInterface=s,i.registerEffectsInterface=r,i}}(),CompExpressionInterface=function(){return function(t){function e(e){for(var s=0,r=t.layers.length;r>s;){if(t.layers[s].nm===e||t.layers[s].ind===e-1)return t.elements[s].layerInterface;s+=1}}return e.layer=e,e.pixelAspect=1,e.height=t.globalData.compSize.h,e.width=t.globalData.compSize.w,e.pixelAspect=1,e.frameDuration=1/t.globalData.frameRate,e}}(),TransformExpressionInterface=function(){return function(t){function e(s){switch(s){case"scale":case"Scale":case"ADBE Scale":return e.scale;case"rotation":case"Rotation":case"ADBE Rotation":return e.rotation;case"position":case"Position":case"ADBE Position":return t.position;case"anchorPoint":case"AnchorPoint":case"ADBE AnchorPoint":return e.anchorPoint;case"opacity":case"Opacity":return e.opacity}}return Object.defineProperty(e,"rotation",{get:function(){return t.rotation}}),Object.defineProperty(e,"scale",{get:function(){var e,s=t.scale,r=s.length,i=Array.apply(null,{length:r});for(e=0;r>e;e+=1)i[e]=100*s[e];return i}}),Object.defineProperty(e,"position",{get:function(){return t.position}}),Object.defineProperty(e,"xPosition",{get:function(){return t.xPosition}}),Object.defineProperty(e,"yPosition",{get:function(){return t.yPosition}}),Object.defineProperty(e,"anchorPoint",{get:function(){return t.anchorPoint}}),Object.defineProperty(e,"opacity",{get:function(){return 100*t.opacity}}),e}}(),ProjectInterface=function(){function t(t){this.compositions.push(t)}return function(){function e(t){for(var e=0,s=this.compositions.length;s>e;){if(this.compositions[e].data&&this.compositions[e].data.nm===t)return this.compositions[e].prepareFrame(this.currentFrame),this.compositions[e].compInterface;e+=1}}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}}(),EffectsExpressionInterface=function(){function t(t,s){if(t.effects){var r,i=[],a=t.data.ef,n=t.effects.effectElements.length;for(r=0;n>r;r+=1)i.push(e(a[r],t.effects.effectElements[r],s,t));return function(e){for(var s=t.data.ef,r=0,a=s.length;a>r;){if(e===s[r].nm||e===s[r].mn||e===s[r].ix)return i[r];r+=1}}}}function e(t,r,i,a){var n,o=[],h=t.ef.length;for(n=0;h>n;n+=1)o.push(5===t.ef[n].ty?e(t.ef[n],r.effectElements[n],i,a):s(r.effectElements[n],t.ef[n].ty,a));return function(e){for(var s=t.ef,r=0,i=s.length;i>r;){if(e===s[r].nm||e===s[r].mn||e===s[r].ix)return 5===s[r].ty?o[r]:o[r]();r+=1}return o[0]()}}function s(t,e,s){return function(){if(10===e)return s.comp.compInterface(t.p.v);if(t.p.k&&t.p.getValue(),"number"==typeof t.p.v)return t.p.v;var r,i=t.p.v.length,a=Array.apply(null,{length:i});for(r=0;i>r;r+=1)a[r]=t.p.v[r];return a}}var r={createEffectsInterface:t};return r}();GroupEffect.prototype.getValue=function(){this.mdf=!1;var t,e=this.dynamicProperties.length;for(t=0;e>t;t+=1)this.dynamicProperties[t].getValue(),this.mdf=this.dynamicProperties[t].mdf?!0:this.mdf},GroupEffect.prototype.init=function(t,e,s){this.data=t,this.mdf=!1,this.effectElements=[];var r,i,a=this.data.ef.length,n=this.data.ef;for(r=0;a>r;r+=1)switch(n[r].ty){
case 0:i=new SliderEffect(n[r],e,s),this.effectElements.push(i);break;case 1:i=new AngleEffect(n[r],e,s),this.effectElements.push(i);break;case 2:i=new ColorEffect(n[r],e,s),this.effectElements.push(i);break;case 3:i=new PointEffect(n[r],e,s),this.effectElements.push(i);break;case 4:case 7:i=new CheckboxEffect(n[r],e,s),this.effectElements.push(i);break;case 10:i=new LayerIndexEffect(n[r],e,s),this.effectElements.push(i);break;case 5:i=new EffectsManager(n[r],e,s),this.effectElements.push(i);break;case 6:i=new NoValueEffect(n[r],e,s),this.effectElements.push(i)}};var bodymovinjs={};bodymovinjs.play=play,bodymovinjs.pause=pause,bodymovinjs.togglePause=togglePause,bodymovinjs.setSpeed=setSpeed,bodymovinjs.setDirection=setDirection,bodymovinjs.stop=stop,bodymovinjs.moveFrame=moveFrame,bodymovinjs.searchAnimations=searchAnimations,bodymovinjs.registerAnimation=registerAnimation,bodymovinjs.loadAnimation=loadAnimation,bodymovinjs.setSubframeRendering=setSubframeRendering,bodymovinjs.resize=resize,bodymovinjs.start=start,bodymovinjs.goToAndStop=goToAndStop,bodymovinjs.destroy=destroy,bodymovinjs.setQuality=setQuality,bodymovinjs.installPlugin=installPlugin,bodymovinjs.__getFactory=getFactory,bodymovinjs.version="4.5.0";var standalone="__[STANDALONE]__",animationData="__[ANIMATIONDATA]__",renderer="";if(standalone){var scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index],queryString=myScript.src.replace(/^[^\?]+\??/,"");renderer=getQueryVariable("renderer")}var readyStateCheckInterval=setInterval(checkReady,100);return bodymovinjs});;

//$(document).ready(setTimeout(function() {gridInit(); }, 1000));
//$(document).ready(function() {gridInit();});
/*if (window.addEventListener)
  window.addEventListener("load", gridInit(), false);
else if (window.attachEvent)
  window.attachEvent("onload", gridInit());
else window.onload = gridInit();*/

//function gridInit() {
var $grid = $('.container').masonry( {
    columnWidth: '.item.w2',
    percentPosition: true,
    "gutter": 5 
});
$grid.imagesLoaded().progress(function()
{
  $grid.masonry();
});

function getHref(href) {
  return (href.indexOf('youtube') == -1 ? 'image' : 'iframe');
} 

$('.fancybox').click(function () {
  if (!this.nextSibling) {
    return;
  }

  $('.item').fancybox({
    'padding'       : 0,
    'autoScale'     : true,
    'autoDimensions': true,
    'fitToView'       : true,
    'transitionIn'  : 'none',
    'transitionOut' : 'none',
    prevEffect : 'none',
    nextEffect : 'none',
    arrows : true,
    'title'         : this.title,
    'swf'           : {
    'wmode'        : 'transparent',
    'allowfullscreen'   : 'true'
    },
    helpers : {
    media : {},
    buttons : {}
    },beforeLoad : function(){
    this.type = getHref(this.href);
      if(this.type != 'image') 
      {
        this.width = $(window).width();
        this.height = $(window).width()/2;
      }
    },afterLoad :
    function (){
      if(this.type != 'image') 
      {
        this.width = $(window).width();
        this.height = $(window).width()/2;
      }
    }
  });
});

var _intro = document.getElementById('Intro');
var _github = document.getElementById('Github');
var _resume = document.getElementById('Resume');
var _linkedin = document.getElementById('Linkedin');
var _email = document.getElementById('Email');

var intro = bodymovin.loadAnimation({
  container: _intro, // the dom element
  renderer: 'svg',
  loop: false,
  prerender: false,
  autoplay: false,
  autoloadSegments: false,
  path: 'img/Intro/data.json'
});

var github = bodymovin.loadAnimation({
  container: _github, // the dom element
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'img/Github/data.json' // the animation data
});

var resume = bodymovin.loadAnimation({
  container: _resume, // the dom element
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'img/Resume/data.json' // the animation data
});

var linkedin = bodymovin.loadAnimation({
  container: _linkedin, // the dom element
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'img/Linkedin/data.json' // the animation data
});

var email = bodymovin.loadAnimation({
  container: _email, // the dom element
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'img/Email/data.json' // the animation data
});

var intro_fade = false;
intro.addEventListener('DOMLoaded', function () {//animate in
            intro.playSegments([0,40],true);
        });

$('.parallax').scroll( function() {
    
    if(getViewportOffset($('#Intro')).top < ($(window).height()*0.05))
    {
      if (!intro_fade) {
        intro_fade = true;
        intro.playSegments([40,60],true);
      }

    } else if (getViewportOffset($('#Intro')).top > ($(window).height()*0.28))
    {
      if (intro_fade) {
        intro_fade = false;
        intro.playSegments([0,40],true);
      }

    }
});

github_pause = true;
_github.addEventListener('mouseover', githubButtonOver);

github.addEventListener('loopComplete',function(){
  if(github_pause){
    console.log('paused');
    github.pause();
  }
});
  
function githubButtonOver(){
  github.play();
  github_pause = false;
  console.log('played');
  setTimeout(function() {
    document.addEventListener('mouseover', githubButtonOut);
  }, 0);
  _github.removeEventListener('mouseover', githubButtonOver);
}

function githubButtonOut(ev){
  if(!checkIfChild(ev.target, _github)){
    console.log('trying paused');
    github_pause = true;
    document.removeEventListener('mouseover', githubButtonOut);
    _github.addEventListener('mouseover', githubButtonOver);
  }
}

resume_pause = true;
_resume.addEventListener('mouseover', resumeButtonOver);

resume.addEventListener('loopComplete',function(){
  if(resume_pause){
    console.log('paused');
    resume.pause();
  }
});
  
function resumeButtonOver(){
  resume.play();
  resume_pause = false;
  console.log('played');
  setTimeout(function() {
    document.addEventListener('mouseover', resumeButtonOut);
  }, 0);
  _resume.removeEventListener('mouseover', resumeButtonOver);
}

function resumeButtonOut(ev){
  if(!checkIfChild(ev.target, _resume)){
    console.log('trying paused');
    resume_pause = true;
    document.removeEventListener('mouseover', resumeButtonOut);
    _resume.addEventListener('mouseover', resumeButtonOver);
  }
}

linkedin_pause = true;
_linkedin.addEventListener('mouseover', linkedinButtonOver);

linkedin.addEventListener('loopComplete',function(){
  if(linkedin_pause){
    console.log('paused');
    linkedin.pause();
  }
});
  
function linkedinButtonOver(){
  linkedin.play();
  linkedin_pause = false;
  console.log('played');
  setTimeout(function() {
    document.addEventListener('mouseover', linkedinButtonOut);
  }, 0);
  _linkedin.removeEventListener('mouseover', linkedinButtonOver);
}

function linkedinButtonOut(ev){
  if(!checkIfChild(ev.target, _linkedin)){
    console.log('trying paused');
    linkedin_pause = true;
    document.removeEventListener('mouseover', linkedinButtonOut);
    _linkedin.addEventListener('mouseover', linkedinButtonOver);
  }
}

email_pause = true;
_email.addEventListener('mouseover', emailButtonOver);

email.addEventListener('loopComplete',function(){
  if(email_pause){
    console.log('paused');
    email.pause();
  }
});
  
function emailButtonOver(){
  email.play();
  email_pause = false;
  console.log('played');
  setTimeout(function() {
    document.addEventListener('mouseover', emailButtonOut);
  }, 0);
  _email.removeEventListener('mouseover', emailButtonOver);
}

function emailButtonOut(ev){
  if(!checkIfChild(ev.target, _email)){
    console.log('trying paused');
    email_pause = true;
    document.removeEventListener('mouseover', emailButtonOut);
    _email.addEventListener('mouseover', emailButtonOver);
  }
}

function checkIfChild(elem, parent) {
  while (elem.parentNode) {
    if (elem.parentNode === parent) {
      return true;
    }
    elem = elem.parentNode;
  }
  return false;
}

function getViewportOffset($e) {
  var $window = $(window),
    scrollLeft = $window.scrollLeft(),
    scrollTop = $window.scrollTop(),
    offset = $e.offset(),
    rect1 = { x1: scrollLeft, y1: scrollTop, x2: scrollLeft + $window.width(), y2: scrollTop + $window.height() },
    rect2 = { x1: offset.left, y1: offset.top, x2: offset.left + $e.width(), y2: offset.top + $e.height() };
  return {
    left: offset.left - scrollLeft,
    top: offset.top - scrollTop,
    insideViewport: rect1.x1 < rect2.x2 && rect1.x2 > rect2.x1 && rect1.y1 < rect2.y2 && rect1.y2 > rect2.y1
  };
}
