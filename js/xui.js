(function(){function H(a){return a.firstChild===null?{UL:"LI",DL:"DT",TR:"TD"}[a.tagName]||a.tagName:a.firstChild.tagName}function t(a,b){return typeof a==x?I(a,H(b)):a}function I(a,b){var c={},d=/^<([A-Z][A-Z0-9]*)([^>]*)>(.*)<\/\1>/i,e,g;g=0;if(d.test(a)){result=d.exec(a);b=result[1];if(result[2]!=="")for(a=result[2].split(/([A-Z]*\s*=\s*['|"][A-Z0-9:;#\s]*['|"])/i);g<a.length;g++){d=a[g].replace(/^\s*|\s*$/g,"");if(d!==""&&d!==" "){d=d.split("=");c[d[0]]=d[1].replace(/(["']?)/g,"")}}a=result[3]}b=
o.createElement(b);for(e in c){g=o.createAttribute(e);g.nodeValue=c[e];b.setAttributeNode(g)}b.innerHTML=a;return b}function J(a){var b=/\S/;a.each(function(c){for(var d=c.firstChild,e=-1,g;d;){g=d.nextSibling;if(d.nodeType==3&&!b.test(d.nodeValue))c.removeChild(d);else d.nodeIndex=++e;d=g}})}function K(a){var b=o.createElement("i");return a in b||b.setAttribute&&b.setAttribute(a,"return;")||false}function y(a){if(a._xuiEventID)return a._xuiEventID[0];return a._xuiEventID=[++y.id]}function B(a,b){a=
cache[a]=cache[a]||{};return a[b]=a[b]||[]}function L(a,b,c){var d=y(a);b=B(d,b);d=function(e){if(c.call(a,e)===false){e.preventDefault();e.stopPropagation()}};d.handler=c;b.push(d);return d}function A(a,b){return C(b).test(a.className)}function M(a){return(a||"").replace(N,"")}function D(a,b){return o.defaultView.getComputedStyle(a,"").getPropertyValue(b.replace(/[A-Z]/g,function(c){return"-"+c.toLowerCase()}))}var u,i,z=this,x="string",o=z.document,O=/^#?([\w-]+)$/,P=/^#/,Q=/<([\w:]+)/,p=function(a){return[].slice.call(a,
0)};try{p(o.documentElement.childNodes)}catch(T){p=function(a){for(var b=[],c=0;a[c];c++)b.push(a[c]);return b}}z.x$=z.xui=i=function(a,b){return new i.fn.find(a,b)};if(![].forEach)Array.prototype.forEach=function(a,b){var c=this.length||0,d=0;that=b;if(typeof a=="function")for(;d<c;d++)a.call(that,this[d],d,this)};i.fn=i.prototype={extend:function(a){for(var b in a)i.fn[b]=a[b]},find:function(a,b){var c=[];if(a)if(b==u&&this.length)c=this.each(function(d){c=c.concat(p(i(a,d)))}).reduce(c);else{b=
b||o;if(typeof a==x){if(O.test(a))c=P.test(a)?[b.getElementById(a.substr(1))]:b.getElementsByTagName(a);else if(Q.test(a)){b=o.createElement("i");b.innerHTML=a;p(b.childNodes).forEach(function(d){c.push(d)})}else c=z.Sizzle!==u?Sizzle(a):b.querySelectorAll(a);c=p(c)}else c=a instanceof Array?a:a.toString()=="[object NodeList]"?p(a):[a]}else return this;return this.set(c)},set:function(a){var b=i();b.cache=p(this.length?this:[]);b.length=0;[].push.apply(b,a);return b},reduce:function(a,b){var c=[];
a=a||p(this);a.forEach(function(d){c.indexOf(d,0,b)<0&&c.push(d)});return c},has:function(a){var b=i(a);return this.filter(function(){var c=this,d=null;b.each(function(e){d=d||e==c});return d})},filter:function(a){var b=[];return this.each(function(c,d){a.call(c,d)&&b.push(c)}).set(b)},not:function(a){var b=p(this);return this.filter(function(c){var d;i(a).each(function(e){return d=b[c]!=e});return d})},each:function(a){for(var b=0,c=this.length;b<c;++b)if(a.call(this[b],this[b],b,this)===false)break;
return this}};i.fn.find.prototype=i.fn;i.extend=i.fn.extend;i.extend({html:function(a,b){J(this);if(arguments.length==0)return this[0].innerHTML;if(arguments.length==1&&arguments[0]!="remove"){b=a;a="inner"}return this.each(function(c){var d,e=0;if(a=="inner")if(typeof b==x){c.innerHTML=b;c=c.getElementsByTagName("SCRIPT");for(d=c.length;e<d;e++)eval(c[e].text)}else{c.innerHTML="";c.appendChild(b)}else if(a=="outer")c.parentNode.replaceChild(t(b,c),c);else if(a=="top")c.insertBefore(t(b,c),c.firstChild);
else if(a=="bottom")c.insertBefore(t(b,c),null);else if(a=="remove")c.parentNode.removeChild(c);else if(a=="before")c.parentNode.insertBefore(t(b,c.parentNode),c);else a=="after"&&c.parentNode.insertBefore(t(b,c.parentNode),c.nextSibling)})},append:function(a){return this.html(a,"bottom")},prepend:function(a){return this.html(a,"top")},attr:function(a,b){if(arguments.length==2)return this.each(function(d){d.setAttribute(a,b)});else{var c=[];this.each(function(d){d=d.getAttribute(a);d!=null&&c.push(d)});
return c}}});i.extend({touch:K("ontouchstart"),on:function(a,b){return this.each(function(c){c.addEventListener(a,L(c,a,b),false)})},un:function(a){return this.each(function(b){for(var c=y(b),d=B(c,a),e=d.length;e--;)b.removeEventListener(a,d[e],false);delete cache[c]})},fire:function(a,b){return this.each(function(c){if(c==o&&!c.dispatchEvent)c=o.documentElement;var d=o.createEvent("HTMLEvents");d.initEvent(a,true,true);d.data=b||{};d.eventName=a;c.dispatchEvent(d)})}});y.id=1;i.extend({tween:function(a,
b){a instanceof Array&&a.forEach(function(){});var c=function(){var e={};"duration after easing".split(" ").forEach(function(g){if(a[g]){e[g]=a[g];delete a[g]}});return e}(a),d=function(e){var g=[],k;if(typeof e!=x){for(k in e)g.push(k+":"+e[k]);g=g.join(";")}else g=e;return g}(a);if(typeof b=="function")options.after=b;return this.each(function(e){emile(e,d,c,b)})}});var N=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;i.extend({setStyle:function(a,b){return this.each(function(c){c.style[a]=b})},getStyle:function(a,
b){return b===u?D(this[0],a):this.each(function(c){b(D(c,a))})},addClass:function(a){return this.each(function(b){if(A(b,a)===false)b.className=M(b.className+" "+a)})},hasClass:function(a,b){return b===u&&this.length==1?A(this[0],a):this.each(function(c){A(c,a)&&b(c)})},removeClass:function(a){if(a===u)this.each(function(c){c.className=""});else{var b=C(a);this.each(function(c){c.className=c.className.replace(b,"")})}return this},css:function(a){for(var b in a)this.setStyle(b,a[b]);return this}});
var E={},C=function(a){var b=E[a];if(!b){b=new RegExp("(?:^|\\s+)"+a+"(?:\\s+|$)");E[a]=b}return b};i.extend({xhr:function(a,b,c){function d(){if(k.status===0||k.status==200&&k.readyState==4)k.handleResp()}if(!/^(inner|outer|top|bottom|before|after)$/.test(a)){c=b;b=a;a="inner"}var e=c?c:{};if(typeof c=="function"){e={};e.callback=c}var g=this,k=new XMLHttpRequest;c=e.method||"get";var r=e.async||false,s=e.data||null,f=0;k.queryString=s;k.open(c,b,r);if(e.headers)for(;f<e.headers.length;f++)k.setRequestHeader(e.headers[f].name,
e.headers[f].value);k.handleResp=e.callback!=null?e.callback:function(){g.html(a,this.responseText)};if(r)k.onreadystatechange=d;k.send(s);r||d();return this}});(function(a,b){function c(f,n,l){return(f+(n-f)*l).toFixed(3)}function d(f,n,l){return f.substr(n,l||1)}function e(f,n,l){for(var m=2,h,j,q=[],v=[];h=3,j=arguments[m-1],m--;)if(d(j,0)=="r")for(j=j.match(/\d+/g);h--;)q.push(~~j[h]);else{if(j.length==4)j="#"+d(j,1)+d(j,1)+d(j,2)+d(j,2)+d(j,3)+d(j,3);for(;h--;)q.push(parseInt(d(j,1+h*2,2),16))}for(;h--;){m=
~~(q[h+3]+(q[h]-q[h+3])*l);v.push(m<0?0:m>255?255:m)}return"rgb("+v.join(",")+")"}function g(f){var n=parseFloat(f);f=f.replace(/^[\-\d\.]+/,"");return isNaN(n)?{v:f,f:e,u:""}:{v:n,f:c,u:f}}function k(f){var n={},l=s.length,m;r.innerHTML='<div style="'+f+'"></div>';for(f=r.childNodes[0].style;l--;)if(m=f[s[l]])n[s[l]]=g(m);return n}var r=o.createElement("div"),s="backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
b[a]=function(f,n,l){f=typeof f=="string"?o.getElementById(f):f;l=l||{};var m=k(n);n=f.currentStyle?f.currentStyle:getComputedStyle(f,null);var h,j={},q=+new Date,v=l.duration||200,F=q+v,G,R=l.easing||function(w){return-Math.cos(w*Math.PI)/2+0.5};for(h in m)j[h]=g(n[h]);G=setInterval(function(){var w=+new Date,S=w>F?1:(w-q)/v;for(h in m)f.style[h]=m[h].f(j[h].v,m[h].v,R(S))+m[h].u;if(w>F){clearInterval(G);l.after&&l.after()}},10)}})("emile",this)})();