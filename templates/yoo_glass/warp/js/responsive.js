
(function(a,f,g){function d(a){k.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>';b.insertBefore(j,l);e=42==k.offsetWidth;b.removeChild(j);return e}function h(a){var b=d(a.media);if(a._listeners&&a.matches!=b){a.matches=b;for(var b=0,c=a._listeners.length;b<c;b++)a._listeners[b](a)}}function c(a,b,c){var d;return function(){var f=this,e=arguments,j=c&&!d;clearTimeout(d);d=setTimeout(function(){d=null;c||a.apply(f,e)},b);j&&a.apply(f,e)}}if(!f.matchMedia||a.userAgent.match(/(iPhone|iPod|iPad)/i)){var e,
b=g.documentElement,l=b.firstElementChild||b.firstChild,j=g.createElement("body"),k=g.createElement("div");k.id="mq-test-1";k.style.cssText="position:absolute;top:-100em";j.style.background="none";j.appendChild(k);f.matchMedia=function(a){var b,e=[];b={matches:d(a),media:a,_listeners:e,addListener:function(a){"function"===typeof a&&e.push(a)},removeListener:function(a){for(var b=0,c=e.length;b<c;b++)e[b]===a&&delete e[b]}};f.addEventListener&&f.addEventListener("resize",c(function(){h(b)},150),!1);
g.addEventListener&&g.addEventListener("orientationchange",function(){h(b)},!1);return b}}})(navigator,window,document);
(function(a,f,g){if(!a.onMediaQuery){var d={},h=f.matchMedia&&f.matchMedia("only all").matches;a(g).ready(function(){for(var c in d)a(d[c]).trigger("init"),d[c].matches&&a(d[c]).trigger("valid")});a(f).bind("load",function(){for(var c in d)d[c].matches&&a(d[c]).trigger("valid")});a.onMediaQuery=function(c,e){var b=c&&d[c];b||(b=d[c]=f.matchMedia(c),b.supported=h,b.addListener(function(){a(b).trigger(b.matches?"valid":"invalid")}));a(b).bind(e);return b}}})(jQuery,window,document);
(function(a,f,g){a.fn.responsiveMenu=function(d){function h(c,e){var b="";a(c).children().each(function(){var c=a(this);c.children("a, span.separator").each(function(){var d=a(this),f=d.is("a")?d.attr("href"):"",g=d.is("span")?" disabled":"",m=1<e?Array(e).join("-")+" ":"",p=d.find(".title").length?d.find(".title").text():d.text();b+='<option value="'+f+'" class="'+d.attr("class")+'"'+g+">"+m+p+"</option>";c.find("ul.level"+(e+1)).each(function(){b+=h(this,e+1)})})});return b}d=a.extend({current:".current"},
d);return this.each(function(){var c=a(this),e=a("<select/>"),b="";c.find("ul.menu").each(function(){b+=h(this,1)});e.append(b).change(function(){g.location.href=e.val()});e.find(d.current).attr("selected",!0);/iPhone|iPad|iPod/.test(f.platform)&&(/OS [1-5]_[0-9_]* like Mac OS X/i.test(f.userAgent)&&-1<f.userAgent.indexOf("AppleWebKit"))&&e.find(":disabled").remove();c.after(e)})}})(jQuery,navigator,window);
(function(a,f){function g(){c.setAttribute("content",b);l=!0}function d(b){m=b.accelerationIncludingGravity;j=Math.abs(m.x);k=Math.abs(m.y);n=Math.abs(m.z);(!a.orientation||180===a.orientation)&&(7<j||(6<n&&8>k||8>n&&6<k)&&5<j)?l&&(c.setAttribute("content",e),l=!1):l||g()}if(/iPhone|iPad|iPod/.test(f.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(f.userAgent)&&-1<f.userAgent.indexOf("AppleWebKit")){var h=a.document;if(h.querySelector){var c=h.querySelector("meta[name=viewport]"),h=c&&c.getAttribute("content"),
e=h+",maximum-scale=1",b=h+",maximum-scale=10",l=!0,j,k,n,m;c&&(a.addEventListener("orientationchange",g,!1),a.addEventListener("devicemotion",d,!1))}}})(this,navigator);
