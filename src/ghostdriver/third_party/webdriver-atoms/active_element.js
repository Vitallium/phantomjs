function(){return function(){var g=this;
function h(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function aa(a){var b=h(a);return"array"==b||"object"==b&&"number"==typeof a.length}function ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ca=Date.now||function(){return+new Date};function k(a,b){this.code=a;this.state=l[a]||da;this.message=b||"";var c=this.state.replace(/((?:^|\s+)[a-z])/g,function(a){return a.toUpperCase().replace(/^[\s\xa0]+/g,"")}),d=c.length-5;if(0>d||c.indexOf("Error",d)!=d)c+="Error";this.name=c;c=Error(this.message);c.name=this.name;this.stack=c.stack||""}
(function(){var a=Error;function b(){}b.prototype=a.prototype;k.f=a.prototype;k.prototype=new b;k.prototype.constructor=k;k.e=function(b,d,e){return a.prototype[d].apply(b,Array.prototype.slice.call(arguments,2))}})();
var da="unknown error",l={15:"element not selectable",11:"element not visible",31:"ime engine activation failed",30:"ime not available",24:"invalid cookie domain",29:"invalid element coordinates",12:"invalid element state",32:"invalid selector",51:"invalid selector",52:"invalid selector",17:"javascript error",405:"unsupported operation",34:"move target out of bounds",27:"no such alert",7:"no such element",8:"no such frame",23:"no such window",28:"script timeout",33:"session not created",10:"stale element reference",
0:"success",21:"timeout",25:"unable to set cookie",26:"unexpected alert open"};l[13]=da;l[9]="unknown command";k.prototype.toString=function(){return this.name+": "+this.message};var ea=window;var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function m(a,b){for(var c=0,d=fa(String(a)).split("."),e=fa(String(b)).split("."),f=Math.max(d.length,e.length),t=0;0==c&&t<f;t++){var H=d[t]||"",x=e[t]||"",Ca=RegExp("(\\d*)(\\D*)","g"),Da=RegExp("(\\d*)(\\D*)","g");do{var y=Ca.exec(H)||["","",""],z=Da.exec(x)||["","",""];if(0==y[0].length&&0==z[0].length)break;c=n(0==y[1].length?0:parseInt(y[1],10),0==z[1].length?0:parseInt(z[1],10))||n(0==y[2].length,0==z[2].length)||n(y[2],z[2])}while(0==c)}return c}function n(a,b){return a<b?-1:a>b?1:0};function p(a,b){for(var c=a.length,d=Array(c),e="string"==typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d};var q;a:{var ga=g.navigator;if(ga){var ha=ga.userAgent;if(ha){q=ha;break a}}q=""};function ia(a,b){var c={},d;for(d in a)b.call(void 0,a[d],d,a)&&(c[d]=a[d]);return c}function ja(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function ka(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c};var r=-1!=q.indexOf("Opera")||-1!=q.indexOf("OPR"),u=-1!=q.indexOf("Trident")||-1!=q.indexOf("MSIE"),v=-1!=q.indexOf("Gecko")&&-1==q.toLowerCase().indexOf("webkit")&&!(-1!=q.indexOf("Trident")||-1!=q.indexOf("MSIE")),la=-1!=q.toLowerCase().indexOf("webkit");function ma(){var a=g.document;return a?a.documentMode:void 0}
var w=function(){var a="",b;if(r&&g.opera)return a=g.opera.version,"function"==h(a)?a():a;v?b=/rv\:([^\);]+)(\)|;)/:u?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:la&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(q))?a[1]:"");return u&&(b=ma(),b>parseFloat(a))?String(b):a}(),na={};function A(a){return na[a]||(na[a]=0<=m(w,a))}var oa=g.document,B=oa&&u?ma()||("CSS1Compat"==oa.compatMode?parseInt(w,10):5):void 0;!v&&!u||u&&u&&9<=B||v&&A("1.9.1");u&&A("9");var C,D,E,F,G,I,J;J=I=G=F=E=D=C=!1;var K=q;K&&(-1!=K.indexOf("Firefox")?C=!0:-1!=K.indexOf("Camino")?D=!0:-1!=K.indexOf("iPad")?F=!0:-1!=K.indexOf("iPhone")||-1!=K.indexOf("iPod")?E=!0:-1!=K.indexOf("Chrome")?I=!0:-1!=K.indexOf("Android")?G=!0:-1!=K.indexOf("Safari")&&(J=!0));var pa=C,qa=D,ra=E,sa=F,L=G,ta=I,ua=J;function M(a){return(a=a.exec(q))?a[1]:""}var va=function(){if(pa)return M(/Firefox\/([0-9.]+)/);if(u||r)return w;if(ta)return M(/Chrome\/([0-9.]+)/);if(ua)return M(/Version\/([0-9.]+)/);if(ra||sa){var a;if(a=/Version\/(\S+).*Mobile\/(\S+)/.exec(q))return a[1]+"."+a[2]}else{if(L)return(a=M(/Android\s+([0-9.]+)/))?a:M(/Version\/([0-9.]+)/);if(qa)return M(/Camino\/([0-9.]+)/)}return""}();var N,wa;function O(a){P?wa(a):L?m(xa,a):m(va,a)}var P=function(){if(!v)return!1;var a=g.Components;if(!a)return!1;try{if(!a.classes)return!1}catch(b){return!1}var c=a.classes,a=a.interfaces,d=c["@mozilla.org/xpcom/version-comparator;1"].getService(a.nsIVersionComparator),c=c["@mozilla.org/xre/app-info;1"].getService(a.nsIXULAppInfo),e=c.platformVersion,f=c.version;N=function(a){return 0<=d.compare(e,""+a)};wa=function(a){d.compare(f,""+a)};return!0}(),Q;
if(L){var ya=/Android\s+([0-9\.]+)/.exec(q);Q=ya?ya[1]:"0"}else Q="0";var xa=Q;L&&O(2.3);L&&O(4);ua&&O(6);function za(a){this.d=a}za.prototype.toString=function(){return this.d};var Aa={};function R(a){if(Aa.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new za(a);Aa[a.toString()]=a}R("div");R("mod");R("*");R("+");R("-");R("<");R(">");R("<=");R(">=");R("=");R("!=");R("and");R("or");function Ba(a){this.b=a}Ba.prototype.toString=function(){return this.b};var Ea={};function S(a){if(Ea.hasOwnProperty(a))throw Error("Function already created: "+a+".");Ea[a]=new Ba(a)}S("boolean");S("ceiling");S("concat");S("contains");S("count");S("false");S("floor");S("id");S("lang");S("last");S("local-name");S("name");S("namespace-uri");S("normalize-space");S("not");S("number");S("position");S("round");S("starts-with");S("string");S("string-length");S("substring");S("substring-after");S("substring-before");
S("sum");S("translate");S("true");function Fa(a){this.b=a}Fa.prototype.toString=function(){return this.b};var Ga={};function T(a){if(Ga.hasOwnProperty(a))throw Error("Axis already created: "+a);Ga[a]=new Fa(a)}T("ancestor");T("ancestor-or-self");T("attribute");T("child");T("descendant");T("descendant-or-self");T("following");T("following-sibling");T("namespace");T("parent");T("preceding");T("preceding-sibling");T("self");function Ha(){return document.activeElement||document.body};function Ia(){this.a=void 0}
function U(a,b,c){switch(typeof b){case "string":Ja(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if("array"==h(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],U(a,a.a?a.a.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Ja(f,
c),c.push(":"),U(a,a.a?a.a.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var V={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ka=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function Ja(a,b){b.push('"',a.replace(Ka,function(a){if(a in V)return V[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return V[a]=e+b.toString(16)}),'"')};la||r||v&&(P?N(3.5):u?0<=m(B,3.5):A(3.5))||u&&(P?N(8):u?m(B,8):A(8));function W(a){switch(h(a)){case "string":case "number":case "boolean":return a;case "function":return a.toString();case "array":return p(a,W);case "object":if("nodeType"in a&&(1==a.nodeType||9==a.nodeType)){var b={};b.ELEMENT=La(a);return b}if("document"in a)return b={},b.WINDOW=La(a),b;if(aa(a))return p(a,W);a=ia(a,function(a,b){return"number"==typeof b||"string"==typeof b});return ja(a,W);default:return null}}
function Ma(a,b){return"array"==h(a)?p(a,function(a){return Ma(a,b)}):ba(a)?"function"==typeof a?a:"ELEMENT"in a?Na(a.ELEMENT,b):"WINDOW"in a?Na(a.WINDOW,b):ja(a,function(a){return Ma(a,b)}):a}function Oa(a){a=a||document;var b=a.$wdc_;b||(b=a.$wdc_={},b.c=ca());b.c||(b.c=ca());return b}function La(a){var b=Oa(a.ownerDocument),c=ka(b,function(b){return b==a});c||(c=":wdc:"+b.c++,b[c]=a);return c}
function Na(a,b){a=decodeURIComponent(a);var c=b||document,d=Oa(c);if(!(a in d))throw new k(10,"Element does not exist in cache");var e=d[a];if("setInterval"in e){if(e.closed)throw delete d[a],new k(23,"Window has been closed.");return e}for(var f=e;f;){if(f==c.documentElement)return e;f=f.parentNode}delete d[a];throw new k(10,"Element is no longer attached to the DOM");};function Pa(){var a=Ha,b=[],c=window||ea,d;try{a:{var e=a;if("string"==typeof e)try{a=new c.Function(e);break a}catch(f){if(u&&c.execScript){c.execScript(";");a=new c.Function(e);break a}throw f;}a=c==window?e:new c.Function("return ("+e+").apply(null,arguments);")}var t=Ma(b,c.document),H=a.apply(null,t);d={status:0,value:W(H)}}catch(x){d={status:"code"in x?x.code:13,value:{message:x.message}}}a=[];U(new Ia,d,a);return a.join("")}var X=["_"],Y=g;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);
for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Pa?Y=Y[Z]?Y[Z]:Y[Z]={}:Y[Z]=Pa;; return this._.apply(null,arguments);}.apply({navigator:typeof window!=undefined?window.navigator:null,document:typeof window!=undefined?window.document:null}, arguments);}
