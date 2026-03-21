var yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ki={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ki.exports;(function(i,t){(function(){var r,o="4.17.23",a=200,u="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",f="Expected a function",p="Invalid `variable` option passed into `_.template`",_="__lodash_hash_undefined__",E=500,b="__lodash_placeholder__",O=1,k=2,G=4,A=1,N=2,P=1,Y=2,we=4,ee=8,le=16,ae=32,xe=64,ce=128,Et=256,Ft=512,Wr=30,Hr="...",In=800,on=16,ft=1,$r=2,Ie=3,ht=1/0,ye=9007199254740991,qr=17976931348623157e292,bn=0/0,pe=4294967295,Bt=pe-1,Yn=pe>>>1,Tn=[["ary",ce],["bind",P],["bindKey",Y],["curry",ee],["curryRight",le],["flip",Ft],["partial",ae],["partialRight",xe],["rearg",Et]],vt="[object Arguments]",Vr="[object Array]",ph="[object AsyncFunction]",Xn="[object Boolean]",Zn="[object Date]",gh="[object DOMException]",zr="[object Error]",Gr="[object Function]",Ca="[object GeneratorFunction]",tt="[object Map]",Qn="[object Number]",mh="[object Null]",It="[object Object]",Oa="[object Promise]",_h="[object Proxy]",er="[object RegExp]",nt="[object Set]",tr="[object String]",Kr="[object Symbol]",wh="[object Undefined]",nr="[object WeakMap]",yh="[object WeakSet]",rr="[object ArrayBuffer]",Sn="[object DataView]",ds="[object Float32Array]",ps="[object Float64Array]",gs="[object Int8Array]",ms="[object Int16Array]",_s="[object Int32Array]",ws="[object Uint8Array]",ys="[object Uint8ClampedArray]",Es="[object Uint16Array]",vs="[object Uint32Array]",Eh=/\b__p \+= '';/g,vh=/\b(__p \+=) '' \+/g,Ih=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Pa=/&(?:amp|lt|gt|quot|#39);/g,La=/[&<>"']/g,bh=RegExp(Pa.source),Th=RegExp(La.source),Sh=/<%-([\s\S]+?)%>/g,Rh=/<%([\s\S]+?)%>/g,xa=/<%=([\s\S]+?)%>/g,Ah=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ch=/^\w*$/,Oh=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Is=/[\\^$.*+?()[\]{}|]/g,Ph=RegExp(Is.source),bs=/^\s+/,Lh=/\s/,xh=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Nh=/\{\n\/\* \[wrapped with (.+)\] \*/,Dh=/,? & /,kh=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Uh=/[()=,{}\[\]\/\s]/,Mh=/\\(\\)?/g,Fh=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Na=/\w*$/,Bh=/^[-+]0x[0-9a-f]+$/i,Wh=/^0b[01]+$/i,Hh=/^\[object .+?Constructor\]$/,$h=/^0o[0-7]+$/i,qh=/^(?:0|[1-9]\d*)$/,Vh=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Jr=/($^)/,zh=/['\n\r\u2028\u2029\\]/g,jr="\\ud800-\\udfff",Gh="\\u0300-\\u036f",Kh="\\ufe20-\\ufe2f",Jh="\\u20d0-\\u20ff",Da=Gh+Kh+Jh,ka="\\u2700-\\u27bf",Ua="a-z\\xdf-\\xf6\\xf8-\\xff",jh="\\xac\\xb1\\xd7\\xf7",Yh="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Xh="\\u2000-\\u206f",Zh=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ma="A-Z\\xc0-\\xd6\\xd8-\\xde",Fa="\\ufe0e\\ufe0f",Ba=jh+Yh+Xh+Zh,Ts="['’]",Qh="["+jr+"]",Wa="["+Ba+"]",Yr="["+Da+"]",Ha="\\d+",ed="["+ka+"]",$a="["+Ua+"]",qa="[^"+jr+Ba+Ha+ka+Ua+Ma+"]",Ss="\\ud83c[\\udffb-\\udfff]",td="(?:"+Yr+"|"+Ss+")",Va="[^"+jr+"]",Rs="(?:\\ud83c[\\udde6-\\uddff]){2}",As="[\\ud800-\\udbff][\\udc00-\\udfff]",Rn="["+Ma+"]",za="\\u200d",Ga="(?:"+$a+"|"+qa+")",nd="(?:"+Rn+"|"+qa+")",Ka="(?:"+Ts+"(?:d|ll|m|re|s|t|ve))?",Ja="(?:"+Ts+"(?:D|LL|M|RE|S|T|VE))?",ja=td+"?",Ya="["+Fa+"]?",rd="(?:"+za+"(?:"+[Va,Rs,As].join("|")+")"+Ya+ja+")*",id="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",sd="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Xa=Ya+ja+rd,od="(?:"+[ed,Rs,As].join("|")+")"+Xa,ad="(?:"+[Va+Yr+"?",Yr,Rs,As,Qh].join("|")+")",cd=RegExp(Ts,"g"),ud=RegExp(Yr,"g"),Cs=RegExp(Ss+"(?="+Ss+")|"+ad+Xa,"g"),ld=RegExp([Rn+"?"+$a+"+"+Ka+"(?="+[Wa,Rn,"$"].join("|")+")",nd+"+"+Ja+"(?="+[Wa,Rn+Ga,"$"].join("|")+")",Rn+"?"+Ga+"+"+Ka,Rn+"+"+Ja,sd,id,Ha,od].join("|"),"g"),fd=RegExp("["+za+jr+Da+Fa+"]"),hd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,dd=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],pd=-1,ie={};ie[ds]=ie[ps]=ie[gs]=ie[ms]=ie[_s]=ie[ws]=ie[ys]=ie[Es]=ie[vs]=!0,ie[vt]=ie[Vr]=ie[rr]=ie[Xn]=ie[Sn]=ie[Zn]=ie[zr]=ie[Gr]=ie[tt]=ie[Qn]=ie[It]=ie[er]=ie[nt]=ie[tr]=ie[nr]=!1;var re={};re[vt]=re[Vr]=re[rr]=re[Sn]=re[Xn]=re[Zn]=re[ds]=re[ps]=re[gs]=re[ms]=re[_s]=re[tt]=re[Qn]=re[It]=re[er]=re[nt]=re[tr]=re[Kr]=re[ws]=re[ys]=re[Es]=re[vs]=!0,re[zr]=re[Gr]=re[nr]=!1;var gd={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},md={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},_d={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},wd={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},yd=parseFloat,Ed=parseInt,Za=typeof yr=="object"&&yr&&yr.Object===Object&&yr,vd=typeof self=="object"&&self&&self.Object===Object&&self,Ee=Za||vd||Function("return this")(),Os=t&&!t.nodeType&&t,an=Os&&!0&&i&&!i.nodeType&&i,Qa=an&&an.exports===Os,Ps=Qa&&Za.process,ze=function(){try{var w=an&&an.require&&an.require("util").types;return w||Ps&&Ps.binding&&Ps.binding("util")}catch{}}(),ec=ze&&ze.isArrayBuffer,tc=ze&&ze.isDate,nc=ze&&ze.isMap,rc=ze&&ze.isRegExp,ic=ze&&ze.isSet,sc=ze&&ze.isTypedArray;function Fe(w,T,I){switch(I.length){case 0:return w.call(T);case 1:return w.call(T,I[0]);case 2:return w.call(T,I[0],I[1]);case 3:return w.call(T,I[0],I[1],I[2])}return w.apply(T,I)}function Id(w,T,I,x){for(var W=-1,X=w==null?0:w.length;++W<X;){var ge=w[W];T(x,ge,I(ge),w)}return x}function Ge(w,T){for(var I=-1,x=w==null?0:w.length;++I<x&&T(w[I],I,w)!==!1;);return w}function bd(w,T){for(var I=w==null?0:w.length;I--&&T(w[I],I,w)!==!1;);return w}function oc(w,T){for(var I=-1,x=w==null?0:w.length;++I<x;)if(!T(w[I],I,w))return!1;return!0}function Wt(w,T){for(var I=-1,x=w==null?0:w.length,W=0,X=[];++I<x;){var ge=w[I];T(ge,I,w)&&(X[W++]=ge)}return X}function Xr(w,T){var I=w==null?0:w.length;return!!I&&An(w,T,0)>-1}function Ls(w,T,I){for(var x=-1,W=w==null?0:w.length;++x<W;)if(I(T,w[x]))return!0;return!1}function se(w,T){for(var I=-1,x=w==null?0:w.length,W=Array(x);++I<x;)W[I]=T(w[I],I,w);return W}function Ht(w,T){for(var I=-1,x=T.length,W=w.length;++I<x;)w[W+I]=T[I];return w}function xs(w,T,I,x){var W=-1,X=w==null?0:w.length;for(x&&X&&(I=w[++W]);++W<X;)I=T(I,w[W],W,w);return I}function Td(w,T,I,x){var W=w==null?0:w.length;for(x&&W&&(I=w[--W]);W--;)I=T(I,w[W],W,w);return I}function Ns(w,T){for(var I=-1,x=w==null?0:w.length;++I<x;)if(T(w[I],I,w))return!0;return!1}var Sd=Ds("length");function Rd(w){return w.split("")}function Ad(w){return w.match(kh)||[]}function ac(w,T,I){var x;return I(w,function(W,X,ge){if(T(W,X,ge))return x=X,!1}),x}function Zr(w,T,I,x){for(var W=w.length,X=I+(x?1:-1);x?X--:++X<W;)if(T(w[X],X,w))return X;return-1}function An(w,T,I){return T===T?Bd(w,T,I):Zr(w,cc,I)}function Cd(w,T,I,x){for(var W=I-1,X=w.length;++W<X;)if(x(w[W],T))return W;return-1}function cc(w){return w!==w}function uc(w,T){var I=w==null?0:w.length;return I?Us(w,T)/I:bn}function Ds(w){return function(T){return T==null?r:T[w]}}function ks(w){return function(T){return w==null?r:w[T]}}function lc(w,T,I,x,W){return W(w,function(X,ge,te){I=x?(x=!1,X):T(I,X,ge,te)}),I}function Od(w,T){var I=w.length;for(w.sort(T);I--;)w[I]=w[I].value;return w}function Us(w,T){for(var I,x=-1,W=w.length;++x<W;){var X=T(w[x]);X!==r&&(I=I===r?X:I+X)}return I}function Ms(w,T){for(var I=-1,x=Array(w);++I<w;)x[I]=T(I);return x}function Pd(w,T){return se(T,function(I){return[I,w[I]]})}function fc(w){return w&&w.slice(0,gc(w)+1).replace(bs,"")}function Be(w){return function(T){return w(T)}}function Fs(w,T){return se(T,function(I){return w[I]})}function ir(w,T){return w.has(T)}function hc(w,T){for(var I=-1,x=w.length;++I<x&&An(T,w[I],0)>-1;);return I}function dc(w,T){for(var I=w.length;I--&&An(T,w[I],0)>-1;);return I}function Ld(w,T){for(var I=w.length,x=0;I--;)w[I]===T&&++x;return x}var xd=ks(gd),Nd=ks(md);function Dd(w){return"\\"+wd[w]}function kd(w,T){return w==null?r:w[T]}function Cn(w){return fd.test(w)}function Ud(w){return hd.test(w)}function Md(w){for(var T,I=[];!(T=w.next()).done;)I.push(T.value);return I}function Bs(w){var T=-1,I=Array(w.size);return w.forEach(function(x,W){I[++T]=[W,x]}),I}function pc(w,T){return function(I){return w(T(I))}}function $t(w,T){for(var I=-1,x=w.length,W=0,X=[];++I<x;){var ge=w[I];(ge===T||ge===b)&&(w[I]=b,X[W++]=I)}return X}function Qr(w){var T=-1,I=Array(w.size);return w.forEach(function(x){I[++T]=x}),I}function Fd(w){var T=-1,I=Array(w.size);return w.forEach(function(x){I[++T]=[x,x]}),I}function Bd(w,T,I){for(var x=I-1,W=w.length;++x<W;)if(w[x]===T)return x;return-1}function Wd(w,T,I){for(var x=I+1;x--;)if(w[x]===T)return x;return x}function On(w){return Cn(w)?$d(w):Sd(w)}function rt(w){return Cn(w)?qd(w):Rd(w)}function gc(w){for(var T=w.length;T--&&Lh.test(w.charAt(T)););return T}var Hd=ks(_d);function $d(w){for(var T=Cs.lastIndex=0;Cs.test(w);)++T;return T}function qd(w){return w.match(Cs)||[]}function Vd(w){return w.match(ld)||[]}var zd=function w(T){T=T==null?Ee:Pn.defaults(Ee.Object(),T,Pn.pick(Ee,dd));var I=T.Array,x=T.Date,W=T.Error,X=T.Function,ge=T.Math,te=T.Object,Ws=T.RegExp,Gd=T.String,Ke=T.TypeError,ei=I.prototype,Kd=X.prototype,Ln=te.prototype,ti=T["__core-js_shared__"],ni=Kd.toString,Z=Ln.hasOwnProperty,Jd=0,mc=function(){var e=/[^.]+$/.exec(ti&&ti.keys&&ti.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),ri=Ln.toString,jd=ni.call(te),Yd=Ee._,Xd=Ws("^"+ni.call(Z).replace(Is,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ii=Qa?T.Buffer:r,qt=T.Symbol,si=T.Uint8Array,_c=ii?ii.allocUnsafe:r,oi=pc(te.getPrototypeOf,te),wc=te.create,yc=Ln.propertyIsEnumerable,ai=ei.splice,Ec=qt?qt.isConcatSpreadable:r,sr=qt?qt.iterator:r,cn=qt?qt.toStringTag:r,ci=function(){try{var e=dn(te,"defineProperty");return e({},"",{}),e}catch{}}(),Zd=T.clearTimeout!==Ee.clearTimeout&&T.clearTimeout,Qd=x&&x.now!==Ee.Date.now&&x.now,ep=T.setTimeout!==Ee.setTimeout&&T.setTimeout,ui=ge.ceil,li=ge.floor,Hs=te.getOwnPropertySymbols,tp=ii?ii.isBuffer:r,vc=T.isFinite,np=ei.join,rp=pc(te.keys,te),me=ge.max,be=ge.min,ip=x.now,sp=T.parseInt,Ic=ge.random,op=ei.reverse,$s=dn(T,"DataView"),or=dn(T,"Map"),qs=dn(T,"Promise"),xn=dn(T,"Set"),ar=dn(T,"WeakMap"),cr=dn(te,"create"),fi=ar&&new ar,Nn={},ap=pn($s),cp=pn(or),up=pn(qs),lp=pn(xn),fp=pn(ar),hi=qt?qt.prototype:r,ur=hi?hi.valueOf:r,bc=hi?hi.toString:r;function h(e){if(ue(e)&&!H(e)&&!(e instanceof K)){if(e instanceof Je)return e;if(Z.call(e,"__wrapped__"))return Tu(e)}return new Je(e)}var Dn=function(){function e(){}return function(n){if(!oe(n))return{};if(wc)return wc(n);e.prototype=n;var s=new e;return e.prototype=r,s}}();function di(){}function Je(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=r}h.templateSettings={escape:Sh,evaluate:Rh,interpolate:xa,variable:"",imports:{_:h}},h.prototype=di.prototype,h.prototype.constructor=h,Je.prototype=Dn(di.prototype),Je.prototype.constructor=Je;function K(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=pe,this.__views__=[]}function hp(){var e=new K(this.__wrapped__);return e.__actions__=Ne(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ne(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ne(this.__views__),e}function dp(){if(this.__filtered__){var e=new K(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function pp(){var e=this.__wrapped__.value(),n=this.__dir__,s=H(e),c=n<0,l=s?e.length:0,d=Rg(0,l,this.__views__),g=d.start,m=d.end,y=m-g,S=c?m:g-1,R=this.__iteratees__,C=R.length,L=0,D=be(y,this.__takeCount__);if(!s||!c&&l==y&&D==y)return Kc(e,this.__actions__);var M=[];e:for(;y--&&L<D;){S+=n;for(var q=-1,F=e[S];++q<C;){var z=R[q],j=z.iteratee,$e=z.type,Ce=j(F);if($e==$r)F=Ce;else if(!Ce){if($e==ft)continue e;break e}}M[L++]=F}return M}K.prototype=Dn(di.prototype),K.prototype.constructor=K;function un(e){var n=-1,s=e==null?0:e.length;for(this.clear();++n<s;){var c=e[n];this.set(c[0],c[1])}}function gp(){this.__data__=cr?cr(null):{},this.size=0}function mp(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function _p(e){var n=this.__data__;if(cr){var s=n[e];return s===_?r:s}return Z.call(n,e)?n[e]:r}function wp(e){var n=this.__data__;return cr?n[e]!==r:Z.call(n,e)}function yp(e,n){var s=this.__data__;return this.size+=this.has(e)?0:1,s[e]=cr&&n===r?_:n,this}un.prototype.clear=gp,un.prototype.delete=mp,un.prototype.get=_p,un.prototype.has=wp,un.prototype.set=yp;function bt(e){var n=-1,s=e==null?0:e.length;for(this.clear();++n<s;){var c=e[n];this.set(c[0],c[1])}}function Ep(){this.__data__=[],this.size=0}function vp(e){var n=this.__data__,s=pi(n,e);if(s<0)return!1;var c=n.length-1;return s==c?n.pop():ai.call(n,s,1),--this.size,!0}function Ip(e){var n=this.__data__,s=pi(n,e);return s<0?r:n[s][1]}function bp(e){return pi(this.__data__,e)>-1}function Tp(e,n){var s=this.__data__,c=pi(s,e);return c<0?(++this.size,s.push([e,n])):s[c][1]=n,this}bt.prototype.clear=Ep,bt.prototype.delete=vp,bt.prototype.get=Ip,bt.prototype.has=bp,bt.prototype.set=Tp;function Tt(e){var n=-1,s=e==null?0:e.length;for(this.clear();++n<s;){var c=e[n];this.set(c[0],c[1])}}function Sp(){this.size=0,this.__data__={hash:new un,map:new(or||bt),string:new un}}function Rp(e){var n=Ri(this,e).delete(e);return this.size-=n?1:0,n}function Ap(e){return Ri(this,e).get(e)}function Cp(e){return Ri(this,e).has(e)}function Op(e,n){var s=Ri(this,e),c=s.size;return s.set(e,n),this.size+=s.size==c?0:1,this}Tt.prototype.clear=Sp,Tt.prototype.delete=Rp,Tt.prototype.get=Ap,Tt.prototype.has=Cp,Tt.prototype.set=Op;function ln(e){var n=-1,s=e==null?0:e.length;for(this.__data__=new Tt;++n<s;)this.add(e[n])}function Pp(e){return this.__data__.set(e,_),this}function Lp(e){return this.__data__.has(e)}ln.prototype.add=ln.prototype.push=Pp,ln.prototype.has=Lp;function it(e){var n=this.__data__=new bt(e);this.size=n.size}function xp(){this.__data__=new bt,this.size=0}function Np(e){var n=this.__data__,s=n.delete(e);return this.size=n.size,s}function Dp(e){return this.__data__.get(e)}function kp(e){return this.__data__.has(e)}function Up(e,n){var s=this.__data__;if(s instanceof bt){var c=s.__data__;if(!or||c.length<a-1)return c.push([e,n]),this.size=++s.size,this;s=this.__data__=new Tt(c)}return s.set(e,n),this.size=s.size,this}it.prototype.clear=xp,it.prototype.delete=Np,it.prototype.get=Dp,it.prototype.has=kp,it.prototype.set=Up;function Tc(e,n){var s=H(e),c=!s&&gn(e),l=!s&&!c&&Jt(e),d=!s&&!c&&!l&&Fn(e),g=s||c||l||d,m=g?Ms(e.length,Gd):[],y=m.length;for(var S in e)(n||Z.call(e,S))&&!(g&&(S=="length"||l&&(S=="offset"||S=="parent")||d&&(S=="buffer"||S=="byteLength"||S=="byteOffset")||Ct(S,y)))&&m.push(S);return m}function Sc(e){var n=e.length;return n?e[eo(0,n-1)]:r}function Mp(e,n){return Ai(Ne(e),fn(n,0,e.length))}function Fp(e){return Ai(Ne(e))}function Vs(e,n,s){(s!==r&&!st(e[n],s)||s===r&&!(n in e))&&St(e,n,s)}function lr(e,n,s){var c=e[n];(!(Z.call(e,n)&&st(c,s))||s===r&&!(n in e))&&St(e,n,s)}function pi(e,n){for(var s=e.length;s--;)if(st(e[s][0],n))return s;return-1}function Bp(e,n,s,c){return Vt(e,function(l,d,g){n(c,l,s(l),g)}),c}function Rc(e,n){return e&&pt(n,_e(n),e)}function Wp(e,n){return e&&pt(n,ke(n),e)}function St(e,n,s){n=="__proto__"&&ci?ci(e,n,{configurable:!0,enumerable:!0,value:s,writable:!0}):e[n]=s}function zs(e,n){for(var s=-1,c=n.length,l=I(c),d=e==null;++s<c;)l[s]=d?r:Ro(e,n[s]);return l}function fn(e,n,s){return e===e&&(s!==r&&(e=e<=s?e:s),n!==r&&(e=e>=n?e:n)),e}function je(e,n,s,c,l,d){var g,m=n&O,y=n&k,S=n&G;if(s&&(g=l?s(e,c,l,d):s(e)),g!==r)return g;if(!oe(e))return e;var R=H(e);if(R){if(g=Cg(e),!m)return Ne(e,g)}else{var C=Te(e),L=C==Gr||C==Ca;if(Jt(e))return Yc(e,m);if(C==It||C==vt||L&&!l){if(g=y||L?{}:gu(e),!m)return y?_g(e,Wp(g,e)):mg(e,Rc(g,e))}else{if(!re[C])return l?e:{};g=Og(e,C,m)}}d||(d=new it);var D=d.get(e);if(D)return D;d.set(e,g),Vu(e)?e.forEach(function(F){g.add(je(F,n,s,F,e,d))}):$u(e)&&e.forEach(function(F,z){g.set(z,je(F,n,s,z,e,d))});var M=S?y?fo:lo:y?ke:_e,q=R?r:M(e);return Ge(q||e,function(F,z){q&&(z=F,F=e[z]),lr(g,z,je(F,n,s,z,e,d))}),g}function Hp(e){var n=_e(e);return function(s){return Ac(s,e,n)}}function Ac(e,n,s){var c=s.length;if(e==null)return!c;for(e=te(e);c--;){var l=s[c],d=n[l],g=e[l];if(g===r&&!(l in e)||!d(g))return!1}return!0}function Cc(e,n,s){if(typeof e!="function")throw new Ke(f);return _r(function(){e.apply(r,s)},n)}function fr(e,n,s,c){var l=-1,d=Xr,g=!0,m=e.length,y=[],S=n.length;if(!m)return y;s&&(n=se(n,Be(s))),c?(d=Ls,g=!1):n.length>=a&&(d=ir,g=!1,n=new ln(n));e:for(;++l<m;){var R=e[l],C=s==null?R:s(R);if(R=c||R!==0?R:0,g&&C===C){for(var L=S;L--;)if(n[L]===C)continue e;y.push(R)}else d(n,C,c)||y.push(R)}return y}var Vt=tu(dt),Oc=tu(Ks,!0);function $p(e,n){var s=!0;return Vt(e,function(c,l,d){return s=!!n(c,l,d),s}),s}function gi(e,n,s){for(var c=-1,l=e.length;++c<l;){var d=e[c],g=n(d);if(g!=null&&(m===r?g===g&&!He(g):s(g,m)))var m=g,y=d}return y}function qp(e,n,s,c){var l=e.length;for(s=$(s),s<0&&(s=-s>l?0:l+s),c=c===r||c>l?l:$(c),c<0&&(c+=l),c=s>c?0:Gu(c);s<c;)e[s++]=n;return e}function Pc(e,n){var s=[];return Vt(e,function(c,l,d){n(c,l,d)&&s.push(c)}),s}function ve(e,n,s,c,l){var d=-1,g=e.length;for(s||(s=Lg),l||(l=[]);++d<g;){var m=e[d];n>0&&s(m)?n>1?ve(m,n-1,s,c,l):Ht(l,m):c||(l[l.length]=m)}return l}var Gs=nu(),Lc=nu(!0);function dt(e,n){return e&&Gs(e,n,_e)}function Ks(e,n){return e&&Lc(e,n,_e)}function mi(e,n){return Wt(n,function(s){return Ot(e[s])})}function hn(e,n){n=Gt(n,e);for(var s=0,c=n.length;e!=null&&s<c;)e=e[gt(n[s++])];return s&&s==c?e:r}function xc(e,n,s){var c=n(e);return H(e)?c:Ht(c,s(e))}function Re(e){return e==null?e===r?wh:mh:cn&&cn in te(e)?Sg(e):Fg(e)}function Js(e,n){return e>n}function Vp(e,n){return e!=null&&Z.call(e,n)}function zp(e,n){return e!=null&&n in te(e)}function Gp(e,n,s){return e>=be(n,s)&&e<me(n,s)}function js(e,n,s){for(var c=s?Ls:Xr,l=e[0].length,d=e.length,g=d,m=I(d),y=1/0,S=[];g--;){var R=e[g];g&&n&&(R=se(R,Be(n))),y=be(R.length,y),m[g]=!s&&(n||l>=120&&R.length>=120)?new ln(g&&R):r}R=e[0];var C=-1,L=m[0];e:for(;++C<l&&S.length<y;){var D=R[C],M=n?n(D):D;if(D=s||D!==0?D:0,!(L?ir(L,M):c(S,M,s))){for(g=d;--g;){var q=m[g];if(!(q?ir(q,M):c(e[g],M,s)))continue e}L&&L.push(M),S.push(D)}}return S}function Kp(e,n,s,c){return dt(e,function(l,d,g){n(c,s(l),d,g)}),c}function hr(e,n,s){n=Gt(n,e),e=yu(e,n);var c=e==null?e:e[gt(Xe(n))];return c==null?r:Fe(c,e,s)}function Nc(e){return ue(e)&&Re(e)==vt}function Jp(e){return ue(e)&&Re(e)==rr}function jp(e){return ue(e)&&Re(e)==Zn}function dr(e,n,s,c,l){return e===n?!0:e==null||n==null||!ue(e)&&!ue(n)?e!==e&&n!==n:Yp(e,n,s,c,dr,l)}function Yp(e,n,s,c,l,d){var g=H(e),m=H(n),y=g?Vr:Te(e),S=m?Vr:Te(n);y=y==vt?It:y,S=S==vt?It:S;var R=y==It,C=S==It,L=y==S;if(L&&Jt(e)){if(!Jt(n))return!1;g=!0,R=!1}if(L&&!R)return d||(d=new it),g||Fn(e)?hu(e,n,s,c,l,d):bg(e,n,y,s,c,l,d);if(!(s&A)){var D=R&&Z.call(e,"__wrapped__"),M=C&&Z.call(n,"__wrapped__");if(D||M){var q=D?e.value():e,F=M?n.value():n;return d||(d=new it),l(q,F,s,c,d)}}return L?(d||(d=new it),Tg(e,n,s,c,l,d)):!1}function Xp(e){return ue(e)&&Te(e)==tt}function Ys(e,n,s,c){var l=s.length,d=l,g=!c;if(e==null)return!d;for(e=te(e);l--;){var m=s[l];if(g&&m[2]?m[1]!==e[m[0]]:!(m[0]in e))return!1}for(;++l<d;){m=s[l];var y=m[0],S=e[y],R=m[1];if(g&&m[2]){if(S===r&&!(y in e))return!1}else{var C=new it;if(c)var L=c(S,R,y,e,n,C);if(!(L===r?dr(R,S,A|N,c,C):L))return!1}}return!0}function Dc(e){if(!oe(e)||Ng(e))return!1;var n=Ot(e)?Xd:Hh;return n.test(pn(e))}function Zp(e){return ue(e)&&Re(e)==er}function Qp(e){return ue(e)&&Te(e)==nt}function eg(e){return ue(e)&&Ni(e.length)&&!!ie[Re(e)]}function kc(e){return typeof e=="function"?e:e==null?Ue:typeof e=="object"?H(e)?Fc(e[0],e[1]):Mc(e):rl(e)}function Xs(e){if(!mr(e))return rp(e);var n=[];for(var s in te(e))Z.call(e,s)&&s!="constructor"&&n.push(s);return n}function tg(e){if(!oe(e))return Mg(e);var n=mr(e),s=[];for(var c in e)c=="constructor"&&(n||!Z.call(e,c))||s.push(c);return s}function Zs(e,n){return e<n}function Uc(e,n){var s=-1,c=De(e)?I(e.length):[];return Vt(e,function(l,d,g){c[++s]=n(l,d,g)}),c}function Mc(e){var n=po(e);return n.length==1&&n[0][2]?_u(n[0][0],n[0][1]):function(s){return s===e||Ys(s,e,n)}}function Fc(e,n){return mo(e)&&mu(n)?_u(gt(e),n):function(s){var c=Ro(s,e);return c===r&&c===n?Ao(s,e):dr(n,c,A|N)}}function _i(e,n,s,c,l){e!==n&&Gs(n,function(d,g){if(l||(l=new it),oe(d))ng(e,n,g,s,_i,c,l);else{var m=c?c(wo(e,g),d,g+"",e,n,l):r;m===r&&(m=d),Vs(e,g,m)}},ke)}function ng(e,n,s,c,l,d,g){var m=wo(e,s),y=wo(n,s),S=g.get(y);if(S){Vs(e,s,S);return}var R=d?d(m,y,s+"",e,n,g):r,C=R===r;if(C){var L=H(y),D=!L&&Jt(y),M=!L&&!D&&Fn(y);R=y,L||D||M?H(m)?R=m:fe(m)?R=Ne(m):D?(C=!1,R=Yc(y,!0)):M?(C=!1,R=Xc(y,!0)):R=[]:wr(y)||gn(y)?(R=m,gn(m)?R=Ku(m):(!oe(m)||Ot(m))&&(R=gu(y))):C=!1}C&&(g.set(y,R),l(R,y,c,d,g),g.delete(y)),Vs(e,s,R)}function Bc(e,n){var s=e.length;if(s)return n+=n<0?s:0,Ct(n,s)?e[n]:r}function Wc(e,n,s){n.length?n=se(n,function(d){return H(d)?function(g){return hn(g,d.length===1?d[0]:d)}:d}):n=[Ue];var c=-1;n=se(n,Be(U()));var l=Uc(e,function(d,g,m){var y=se(n,function(S){return S(d)});return{criteria:y,index:++c,value:d}});return Od(l,function(d,g){return gg(d,g,s)})}function rg(e,n){return Hc(e,n,function(s,c){return Ao(e,c)})}function Hc(e,n,s){for(var c=-1,l=n.length,d={};++c<l;){var g=n[c],m=hn(e,g);s(m,g)&&pr(d,Gt(g,e),m)}return d}function ig(e){return function(n){return hn(n,e)}}function Qs(e,n,s,c){var l=c?Cd:An,d=-1,g=n.length,m=e;for(e===n&&(n=Ne(n)),s&&(m=se(e,Be(s)));++d<g;)for(var y=0,S=n[d],R=s?s(S):S;(y=l(m,R,y,c))>-1;)m!==e&&ai.call(m,y,1),ai.call(e,y,1);return e}function $c(e,n){for(var s=e?n.length:0,c=s-1;s--;){var l=n[s];if(s==c||l!==d){var d=l;Ct(l)?ai.call(e,l,1):ro(e,l)}}return e}function eo(e,n){return e+li(Ic()*(n-e+1))}function sg(e,n,s,c){for(var l=-1,d=me(ui((n-e)/(s||1)),0),g=I(d);d--;)g[c?d:++l]=e,e+=s;return g}function to(e,n){var s="";if(!e||n<1||n>ye)return s;do n%2&&(s+=e),n=li(n/2),n&&(e+=e);while(n);return s}function V(e,n){return yo(wu(e,n,Ue),e+"")}function og(e){return Sc(Bn(e))}function ag(e,n){var s=Bn(e);return Ai(s,fn(n,0,s.length))}function pr(e,n,s,c){if(!oe(e))return e;n=Gt(n,e);for(var l=-1,d=n.length,g=d-1,m=e;m!=null&&++l<d;){var y=gt(n[l]),S=s;if(y==="__proto__"||y==="constructor"||y==="prototype")return e;if(l!=g){var R=m[y];S=c?c(R,y,m):r,S===r&&(S=oe(R)?R:Ct(n[l+1])?[]:{})}lr(m,y,S),m=m[y]}return e}var qc=fi?function(e,n){return fi.set(e,n),e}:Ue,cg=ci?function(e,n){return ci(e,"toString",{configurable:!0,enumerable:!1,value:Oo(n),writable:!0})}:Ue;function ug(e){return Ai(Bn(e))}function Ye(e,n,s){var c=-1,l=e.length;n<0&&(n=-n>l?0:l+n),s=s>l?l:s,s<0&&(s+=l),l=n>s?0:s-n>>>0,n>>>=0;for(var d=I(l);++c<l;)d[c]=e[c+n];return d}function lg(e,n){var s;return Vt(e,function(c,l,d){return s=n(c,l,d),!s}),!!s}function wi(e,n,s){var c=0,l=e==null?c:e.length;if(typeof n=="number"&&n===n&&l<=Yn){for(;c<l;){var d=c+l>>>1,g=e[d];g!==null&&!He(g)&&(s?g<=n:g<n)?c=d+1:l=d}return l}return no(e,n,Ue,s)}function no(e,n,s,c){var l=0,d=e==null?0:e.length;if(d===0)return 0;n=s(n);for(var g=n!==n,m=n===null,y=He(n),S=n===r;l<d;){var R=li((l+d)/2),C=s(e[R]),L=C!==r,D=C===null,M=C===C,q=He(C);if(g)var F=c||M;else S?F=M&&(c||L):m?F=M&&L&&(c||!D):y?F=M&&L&&!D&&(c||!q):D||q?F=!1:F=c?C<=n:C<n;F?l=R+1:d=R}return be(d,Bt)}function Vc(e,n){for(var s=-1,c=e.length,l=0,d=[];++s<c;){var g=e[s],m=n?n(g):g;if(!s||!st(m,y)){var y=m;d[l++]=g===0?0:g}}return d}function zc(e){return typeof e=="number"?e:He(e)?bn:+e}function We(e){if(typeof e=="string")return e;if(H(e))return se(e,We)+"";if(He(e))return bc?bc.call(e):"";var n=e+"";return n=="0"&&1/e==-ht?"-0":n}function zt(e,n,s){var c=-1,l=Xr,d=e.length,g=!0,m=[],y=m;if(s)g=!1,l=Ls;else if(d>=a){var S=n?null:vg(e);if(S)return Qr(S);g=!1,l=ir,y=new ln}else y=n?[]:m;e:for(;++c<d;){var R=e[c],C=n?n(R):R;if(R=s||R!==0?R:0,g&&C===C){for(var L=y.length;L--;)if(y[L]===C)continue e;n&&y.push(C),m.push(R)}else l(y,C,s)||(y!==m&&y.push(C),m.push(R))}return m}function ro(e,n){n=Gt(n,e);var s=-1,c=n.length;if(!c)return!0;for(var l=e==null||typeof e!="object"&&typeof e!="function";++s<c;){var d=n[s];if(typeof d=="string"){if(d==="__proto__"&&!Z.call(e,"__proto__"))return!1;if(d==="constructor"&&s+1<c&&typeof n[s+1]=="string"&&n[s+1]==="prototype"){if(l&&s===0)continue;return!1}}}var g=yu(e,n);return g==null||delete g[gt(Xe(n))]}function Gc(e,n,s,c){return pr(e,n,s(hn(e,n)),c)}function yi(e,n,s,c){for(var l=e.length,d=c?l:-1;(c?d--:++d<l)&&n(e[d],d,e););return s?Ye(e,c?0:d,c?d+1:l):Ye(e,c?d+1:0,c?l:d)}function Kc(e,n){var s=e;return s instanceof K&&(s=s.value()),xs(n,function(c,l){return l.func.apply(l.thisArg,Ht([c],l.args))},s)}function io(e,n,s){var c=e.length;if(c<2)return c?zt(e[0]):[];for(var l=-1,d=I(c);++l<c;)for(var g=e[l],m=-1;++m<c;)m!=l&&(d[l]=fr(d[l]||g,e[m],n,s));return zt(ve(d,1),n,s)}function Jc(e,n,s){for(var c=-1,l=e.length,d=n.length,g={};++c<l;){var m=c<d?n[c]:r;s(g,e[c],m)}return g}function so(e){return fe(e)?e:[]}function oo(e){return typeof e=="function"?e:Ue}function Gt(e,n){return H(e)?e:mo(e,n)?[e]:bu(Q(e))}var fg=V;function Kt(e,n,s){var c=e.length;return s=s===r?c:s,!n&&s>=c?e:Ye(e,n,s)}var jc=Zd||function(e){return Ee.clearTimeout(e)};function Yc(e,n){if(n)return e.slice();var s=e.length,c=_c?_c(s):new e.constructor(s);return e.copy(c),c}function ao(e){var n=new e.constructor(e.byteLength);return new si(n).set(new si(e)),n}function hg(e,n){var s=n?ao(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.byteLength)}function dg(e){var n=new e.constructor(e.source,Na.exec(e));return n.lastIndex=e.lastIndex,n}function pg(e){return ur?te(ur.call(e)):{}}function Xc(e,n){var s=n?ao(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.length)}function Zc(e,n){if(e!==n){var s=e!==r,c=e===null,l=e===e,d=He(e),g=n!==r,m=n===null,y=n===n,S=He(n);if(!m&&!S&&!d&&e>n||d&&g&&y&&!m&&!S||c&&g&&y||!s&&y||!l)return 1;if(!c&&!d&&!S&&e<n||S&&s&&l&&!c&&!d||m&&s&&l||!g&&l||!y)return-1}return 0}function gg(e,n,s){for(var c=-1,l=e.criteria,d=n.criteria,g=l.length,m=s.length;++c<g;){var y=Zc(l[c],d[c]);if(y){if(c>=m)return y;var S=s[c];return y*(S=="desc"?-1:1)}}return e.index-n.index}function Qc(e,n,s,c){for(var l=-1,d=e.length,g=s.length,m=-1,y=n.length,S=me(d-g,0),R=I(y+S),C=!c;++m<y;)R[m]=n[m];for(;++l<g;)(C||l<d)&&(R[s[l]]=e[l]);for(;S--;)R[m++]=e[l++];return R}function eu(e,n,s,c){for(var l=-1,d=e.length,g=-1,m=s.length,y=-1,S=n.length,R=me(d-m,0),C=I(R+S),L=!c;++l<R;)C[l]=e[l];for(var D=l;++y<S;)C[D+y]=n[y];for(;++g<m;)(L||l<d)&&(C[D+s[g]]=e[l++]);return C}function Ne(e,n){var s=-1,c=e.length;for(n||(n=I(c));++s<c;)n[s]=e[s];return n}function pt(e,n,s,c){var l=!s;s||(s={});for(var d=-1,g=n.length;++d<g;){var m=n[d],y=c?c(s[m],e[m],m,s,e):r;y===r&&(y=e[m]),l?St(s,m,y):lr(s,m,y)}return s}function mg(e,n){return pt(e,go(e),n)}function _g(e,n){return pt(e,du(e),n)}function Ei(e,n){return function(s,c){var l=H(s)?Id:Bp,d=n?n():{};return l(s,e,U(c,2),d)}}function kn(e){return V(function(n,s){var c=-1,l=s.length,d=l>1?s[l-1]:r,g=l>2?s[2]:r;for(d=e.length>3&&typeof d=="function"?(l--,d):r,g&&Ae(s[0],s[1],g)&&(d=l<3?r:d,l=1),n=te(n);++c<l;){var m=s[c];m&&e(n,m,c,d)}return n})}function tu(e,n){return function(s,c){if(s==null)return s;if(!De(s))return e(s,c);for(var l=s.length,d=n?l:-1,g=te(s);(n?d--:++d<l)&&c(g[d],d,g)!==!1;);return s}}function nu(e){return function(n,s,c){for(var l=-1,d=te(n),g=c(n),m=g.length;m--;){var y=g[e?m:++l];if(s(d[y],y,d)===!1)break}return n}}function wg(e,n,s){var c=n&P,l=gr(e);function d(){var g=this&&this!==Ee&&this instanceof d?l:e;return g.apply(c?s:this,arguments)}return d}function ru(e){return function(n){n=Q(n);var s=Cn(n)?rt(n):r,c=s?s[0]:n.charAt(0),l=s?Kt(s,1).join(""):n.slice(1);return c[e]()+l}}function Un(e){return function(n){return xs(tl(el(n).replace(cd,"")),e,"")}}function gr(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var s=Dn(e.prototype),c=e.apply(s,n);return oe(c)?c:s}}function yg(e,n,s){var c=gr(e);function l(){for(var d=arguments.length,g=I(d),m=d,y=Mn(l);m--;)g[m]=arguments[m];var S=d<3&&g[0]!==y&&g[d-1]!==y?[]:$t(g,y);if(d-=S.length,d<s)return cu(e,n,vi,l.placeholder,r,g,S,r,r,s-d);var R=this&&this!==Ee&&this instanceof l?c:e;return Fe(R,this,g)}return l}function iu(e){return function(n,s,c){var l=te(n);if(!De(n)){var d=U(s,3);n=_e(n),s=function(m){return d(l[m],m,l)}}var g=e(n,s,c);return g>-1?l[d?n[g]:g]:r}}function su(e){return At(function(n){var s=n.length,c=s,l=Je.prototype.thru;for(e&&n.reverse();c--;){var d=n[c];if(typeof d!="function")throw new Ke(f);if(l&&!g&&Si(d)=="wrapper")var g=new Je([],!0)}for(c=g?c:s;++c<s;){d=n[c];var m=Si(d),y=m=="wrapper"?ho(d):r;y&&_o(y[0])&&y[1]==(ce|ee|ae|Et)&&!y[4].length&&y[9]==1?g=g[Si(y[0])].apply(g,y[3]):g=d.length==1&&_o(d)?g[m]():g.thru(d)}return function(){var S=arguments,R=S[0];if(g&&S.length==1&&H(R))return g.plant(R).value();for(var C=0,L=s?n[C].apply(this,S):R;++C<s;)L=n[C].call(this,L);return L}})}function vi(e,n,s,c,l,d,g,m,y,S){var R=n&ce,C=n&P,L=n&Y,D=n&(ee|le),M=n&Ft,q=L?r:gr(e);function F(){for(var z=arguments.length,j=I(z),$e=z;$e--;)j[$e]=arguments[$e];if(D)var Ce=Mn(F),qe=Ld(j,Ce);if(c&&(j=Qc(j,c,l,D)),d&&(j=eu(j,d,g,D)),z-=qe,D&&z<S){var he=$t(j,Ce);return cu(e,n,vi,F.placeholder,s,j,he,m,y,S-z)}var ot=C?s:this,Lt=L?ot[e]:e;return z=j.length,m?j=Bg(j,m):M&&z>1&&j.reverse(),R&&y<z&&(j.length=y),this&&this!==Ee&&this instanceof F&&(Lt=q||gr(Lt)),Lt.apply(ot,j)}return F}function ou(e,n){return function(s,c){return Kp(s,e,n(c),{})}}function Ii(e,n){return function(s,c){var l;if(s===r&&c===r)return n;if(s!==r&&(l=s),c!==r){if(l===r)return c;typeof s=="string"||typeof c=="string"?(s=We(s),c=We(c)):(s=zc(s),c=zc(c)),l=e(s,c)}return l}}function co(e){return At(function(n){return n=se(n,Be(U())),V(function(s){var c=this;return e(n,function(l){return Fe(l,c,s)})})})}function bi(e,n){n=n===r?" ":We(n);var s=n.length;if(s<2)return s?to(n,e):n;var c=to(n,ui(e/On(n)));return Cn(n)?Kt(rt(c),0,e).join(""):c.slice(0,e)}function Eg(e,n,s,c){var l=n&P,d=gr(e);function g(){for(var m=-1,y=arguments.length,S=-1,R=c.length,C=I(R+y),L=this&&this!==Ee&&this instanceof g?d:e;++S<R;)C[S]=c[S];for(;y--;)C[S++]=arguments[++m];return Fe(L,l?s:this,C)}return g}function au(e){return function(n,s,c){return c&&typeof c!="number"&&Ae(n,s,c)&&(s=c=r),n=Pt(n),s===r?(s=n,n=0):s=Pt(s),c=c===r?n<s?1:-1:Pt(c),sg(n,s,c,e)}}function Ti(e){return function(n,s){return typeof n=="string"&&typeof s=="string"||(n=Ze(n),s=Ze(s)),e(n,s)}}function cu(e,n,s,c,l,d,g,m,y,S){var R=n&ee,C=R?g:r,L=R?r:g,D=R?d:r,M=R?r:d;n|=R?ae:xe,n&=~(R?xe:ae),n&we||(n&=~(P|Y));var q=[e,n,l,D,C,M,L,m,y,S],F=s.apply(r,q);return _o(e)&&Eu(F,q),F.placeholder=c,vu(F,e,n)}function uo(e){var n=ge[e];return function(s,c){if(s=Ze(s),c=c==null?0:be($(c),292),c&&vc(s)){var l=(Q(s)+"e").split("e"),d=n(l[0]+"e"+(+l[1]+c));return l=(Q(d)+"e").split("e"),+(l[0]+"e"+(+l[1]-c))}return n(s)}}var vg=xn&&1/Qr(new xn([,-0]))[1]==ht?function(e){return new xn(e)}:xo;function uu(e){return function(n){var s=Te(n);return s==tt?Bs(n):s==nt?Fd(n):Pd(n,e(n))}}function Rt(e,n,s,c,l,d,g,m){var y=n&Y;if(!y&&typeof e!="function")throw new Ke(f);var S=c?c.length:0;if(S||(n&=~(ae|xe),c=l=r),g=g===r?g:me($(g),0),m=m===r?m:$(m),S-=l?l.length:0,n&xe){var R=c,C=l;c=l=r}var L=y?r:ho(e),D=[e,n,s,c,l,R,C,d,g,m];if(L&&Ug(D,L),e=D[0],n=D[1],s=D[2],c=D[3],l=D[4],m=D[9]=D[9]===r?y?0:e.length:me(D[9]-S,0),!m&&n&(ee|le)&&(n&=~(ee|le)),!n||n==P)var M=wg(e,n,s);else n==ee||n==le?M=yg(e,n,m):(n==ae||n==(P|ae))&&!l.length?M=Eg(e,n,s,c):M=vi.apply(r,D);var q=L?qc:Eu;return vu(q(M,D),e,n)}function lu(e,n,s,c){return e===r||st(e,Ln[s])&&!Z.call(c,s)?n:e}function fu(e,n,s,c,l,d){return oe(e)&&oe(n)&&(d.set(n,e),_i(e,n,r,fu,d),d.delete(n)),e}function Ig(e){return wr(e)?r:e}function hu(e,n,s,c,l,d){var g=s&A,m=e.length,y=n.length;if(m!=y&&!(g&&y>m))return!1;var S=d.get(e),R=d.get(n);if(S&&R)return S==n&&R==e;var C=-1,L=!0,D=s&N?new ln:r;for(d.set(e,n),d.set(n,e);++C<m;){var M=e[C],q=n[C];if(c)var F=g?c(q,M,C,n,e,d):c(M,q,C,e,n,d);if(F!==r){if(F)continue;L=!1;break}if(D){if(!Ns(n,function(z,j){if(!ir(D,j)&&(M===z||l(M,z,s,c,d)))return D.push(j)})){L=!1;break}}else if(!(M===q||l(M,q,s,c,d))){L=!1;break}}return d.delete(e),d.delete(n),L}function bg(e,n,s,c,l,d,g){switch(s){case Sn:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case rr:return!(e.byteLength!=n.byteLength||!d(new si(e),new si(n)));case Xn:case Zn:case Qn:return st(+e,+n);case zr:return e.name==n.name&&e.message==n.message;case er:case tr:return e==n+"";case tt:var m=Bs;case nt:var y=c&A;if(m||(m=Qr),e.size!=n.size&&!y)return!1;var S=g.get(e);if(S)return S==n;c|=N,g.set(e,n);var R=hu(m(e),m(n),c,l,d,g);return g.delete(e),R;case Kr:if(ur)return ur.call(e)==ur.call(n)}return!1}function Tg(e,n,s,c,l,d){var g=s&A,m=lo(e),y=m.length,S=lo(n),R=S.length;if(y!=R&&!g)return!1;for(var C=y;C--;){var L=m[C];if(!(g?L in n:Z.call(n,L)))return!1}var D=d.get(e),M=d.get(n);if(D&&M)return D==n&&M==e;var q=!0;d.set(e,n),d.set(n,e);for(var F=g;++C<y;){L=m[C];var z=e[L],j=n[L];if(c)var $e=g?c(j,z,L,n,e,d):c(z,j,L,e,n,d);if(!($e===r?z===j||l(z,j,s,c,d):$e)){q=!1;break}F||(F=L=="constructor")}if(q&&!F){var Ce=e.constructor,qe=n.constructor;Ce!=qe&&"constructor"in e&&"constructor"in n&&!(typeof Ce=="function"&&Ce instanceof Ce&&typeof qe=="function"&&qe instanceof qe)&&(q=!1)}return d.delete(e),d.delete(n),q}function At(e){return yo(wu(e,r,Au),e+"")}function lo(e){return xc(e,_e,go)}function fo(e){return xc(e,ke,du)}var ho=fi?function(e){return fi.get(e)}:xo;function Si(e){for(var n=e.name+"",s=Nn[n],c=Z.call(Nn,n)?s.length:0;c--;){var l=s[c],d=l.func;if(d==null||d==e)return l.name}return n}function Mn(e){var n=Z.call(h,"placeholder")?h:e;return n.placeholder}function U(){var e=h.iteratee||Po;return e=e===Po?kc:e,arguments.length?e(arguments[0],arguments[1]):e}function Ri(e,n){var s=e.__data__;return xg(n)?s[typeof n=="string"?"string":"hash"]:s.map}function po(e){for(var n=_e(e),s=n.length;s--;){var c=n[s],l=e[c];n[s]=[c,l,mu(l)]}return n}function dn(e,n){var s=kd(e,n);return Dc(s)?s:r}function Sg(e){var n=Z.call(e,cn),s=e[cn];try{e[cn]=r;var c=!0}catch{}var l=ri.call(e);return c&&(n?e[cn]=s:delete e[cn]),l}var go=Hs?function(e){return e==null?[]:(e=te(e),Wt(Hs(e),function(n){return yc.call(e,n)}))}:No,du=Hs?function(e){for(var n=[];e;)Ht(n,go(e)),e=oi(e);return n}:No,Te=Re;($s&&Te(new $s(new ArrayBuffer(1)))!=Sn||or&&Te(new or)!=tt||qs&&Te(qs.resolve())!=Oa||xn&&Te(new xn)!=nt||ar&&Te(new ar)!=nr)&&(Te=function(e){var n=Re(e),s=n==It?e.constructor:r,c=s?pn(s):"";if(c)switch(c){case ap:return Sn;case cp:return tt;case up:return Oa;case lp:return nt;case fp:return nr}return n});function Rg(e,n,s){for(var c=-1,l=s.length;++c<l;){var d=s[c],g=d.size;switch(d.type){case"drop":e+=g;break;case"dropRight":n-=g;break;case"take":n=be(n,e+g);break;case"takeRight":e=me(e,n-g);break}}return{start:e,end:n}}function Ag(e){var n=e.match(Nh);return n?n[1].split(Dh):[]}function pu(e,n,s){n=Gt(n,e);for(var c=-1,l=n.length,d=!1;++c<l;){var g=gt(n[c]);if(!(d=e!=null&&s(e,g)))break;e=e[g]}return d||++c!=l?d:(l=e==null?0:e.length,!!l&&Ni(l)&&Ct(g,l)&&(H(e)||gn(e)))}function Cg(e){var n=e.length,s=new e.constructor(n);return n&&typeof e[0]=="string"&&Z.call(e,"index")&&(s.index=e.index,s.input=e.input),s}function gu(e){return typeof e.constructor=="function"&&!mr(e)?Dn(oi(e)):{}}function Og(e,n,s){var c=e.constructor;switch(n){case rr:return ao(e);case Xn:case Zn:return new c(+e);case Sn:return hg(e,s);case ds:case ps:case gs:case ms:case _s:case ws:case ys:case Es:case vs:return Xc(e,s);case tt:return new c;case Qn:case tr:return new c(e);case er:return dg(e);case nt:return new c;case Kr:return pg(e)}}function Pg(e,n){var s=n.length;if(!s)return e;var c=s-1;return n[c]=(s>1?"& ":"")+n[c],n=n.join(s>2?", ":" "),e.replace(xh,`{
/* [wrapped with `+n+`] */
`)}function Lg(e){return H(e)||gn(e)||!!(Ec&&e&&e[Ec])}function Ct(e,n){var s=typeof e;return n=n??ye,!!n&&(s=="number"||s!="symbol"&&qh.test(e))&&e>-1&&e%1==0&&e<n}function Ae(e,n,s){if(!oe(s))return!1;var c=typeof n;return(c=="number"?De(s)&&Ct(n,s.length):c=="string"&&n in s)?st(s[n],e):!1}function mo(e,n){if(H(e))return!1;var s=typeof e;return s=="number"||s=="symbol"||s=="boolean"||e==null||He(e)?!0:Ch.test(e)||!Ah.test(e)||n!=null&&e in te(n)}function xg(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function _o(e){var n=Si(e),s=h[n];if(typeof s!="function"||!(n in K.prototype))return!1;if(e===s)return!0;var c=ho(s);return!!c&&e===c[0]}function Ng(e){return!!mc&&mc in e}var Dg=ti?Ot:Do;function mr(e){var n=e&&e.constructor,s=typeof n=="function"&&n.prototype||Ln;return e===s}function mu(e){return e===e&&!oe(e)}function _u(e,n){return function(s){return s==null?!1:s[e]===n&&(n!==r||e in te(s))}}function kg(e){var n=Li(e,function(c){return s.size===E&&s.clear(),c}),s=n.cache;return n}function Ug(e,n){var s=e[1],c=n[1],l=s|c,d=l<(P|Y|ce),g=c==ce&&s==ee||c==ce&&s==Et&&e[7].length<=n[8]||c==(ce|Et)&&n[7].length<=n[8]&&s==ee;if(!(d||g))return e;c&P&&(e[2]=n[2],l|=s&P?0:we);var m=n[3];if(m){var y=e[3];e[3]=y?Qc(y,m,n[4]):m,e[4]=y?$t(e[3],b):n[4]}return m=n[5],m&&(y=e[5],e[5]=y?eu(y,m,n[6]):m,e[6]=y?$t(e[5],b):n[6]),m=n[7],m&&(e[7]=m),c&ce&&(e[8]=e[8]==null?n[8]:be(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=l,e}function Mg(e){var n=[];if(e!=null)for(var s in te(e))n.push(s);return n}function Fg(e){return ri.call(e)}function wu(e,n,s){return n=me(n===r?e.length-1:n,0),function(){for(var c=arguments,l=-1,d=me(c.length-n,0),g=I(d);++l<d;)g[l]=c[n+l];l=-1;for(var m=I(n+1);++l<n;)m[l]=c[l];return m[n]=s(g),Fe(e,this,m)}}function yu(e,n){return n.length<2?e:hn(e,Ye(n,0,-1))}function Bg(e,n){for(var s=e.length,c=be(n.length,s),l=Ne(e);c--;){var d=n[c];e[c]=Ct(d,s)?l[d]:r}return e}function wo(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var Eu=Iu(qc),_r=ep||function(e,n){return Ee.setTimeout(e,n)},yo=Iu(cg);function vu(e,n,s){var c=n+"";return yo(e,Pg(c,Wg(Ag(c),s)))}function Iu(e){var n=0,s=0;return function(){var c=ip(),l=on-(c-s);if(s=c,l>0){if(++n>=In)return arguments[0]}else n=0;return e.apply(r,arguments)}}function Ai(e,n){var s=-1,c=e.length,l=c-1;for(n=n===r?c:n;++s<n;){var d=eo(s,l),g=e[d];e[d]=e[s],e[s]=g}return e.length=n,e}var bu=kg(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Oh,function(s,c,l,d){n.push(l?d.replace(Mh,"$1"):c||s)}),n});function gt(e){if(typeof e=="string"||He(e))return e;var n=e+"";return n=="0"&&1/e==-ht?"-0":n}function pn(e){if(e!=null){try{return ni.call(e)}catch{}try{return e+""}catch{}}return""}function Wg(e,n){return Ge(Tn,function(s){var c="_."+s[0];n&s[1]&&!Xr(e,c)&&e.push(c)}),e.sort()}function Tu(e){if(e instanceof K)return e.clone();var n=new Je(e.__wrapped__,e.__chain__);return n.__actions__=Ne(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Hg(e,n,s){(s?Ae(e,n,s):n===r)?n=1:n=me($(n),0);var c=e==null?0:e.length;if(!c||n<1)return[];for(var l=0,d=0,g=I(ui(c/n));l<c;)g[d++]=Ye(e,l,l+=n);return g}function $g(e){for(var n=-1,s=e==null?0:e.length,c=0,l=[];++n<s;){var d=e[n];d&&(l[c++]=d)}return l}function qg(){var e=arguments.length;if(!e)return[];for(var n=I(e-1),s=arguments[0],c=e;c--;)n[c-1]=arguments[c];return Ht(H(s)?Ne(s):[s],ve(n,1))}var Vg=V(function(e,n){return fe(e)?fr(e,ve(n,1,fe,!0)):[]}),zg=V(function(e,n){var s=Xe(n);return fe(s)&&(s=r),fe(e)?fr(e,ve(n,1,fe,!0),U(s,2)):[]}),Gg=V(function(e,n){var s=Xe(n);return fe(s)&&(s=r),fe(e)?fr(e,ve(n,1,fe,!0),r,s):[]});function Kg(e,n,s){var c=e==null?0:e.length;return c?(n=s||n===r?1:$(n),Ye(e,n<0?0:n,c)):[]}function Jg(e,n,s){var c=e==null?0:e.length;return c?(n=s||n===r?1:$(n),n=c-n,Ye(e,0,n<0?0:n)):[]}function jg(e,n){return e&&e.length?yi(e,U(n,3),!0,!0):[]}function Yg(e,n){return e&&e.length?yi(e,U(n,3),!0):[]}function Xg(e,n,s,c){var l=e==null?0:e.length;return l?(s&&typeof s!="number"&&Ae(e,n,s)&&(s=0,c=l),qp(e,n,s,c)):[]}function Su(e,n,s){var c=e==null?0:e.length;if(!c)return-1;var l=s==null?0:$(s);return l<0&&(l=me(c+l,0)),Zr(e,U(n,3),l)}function Ru(e,n,s){var c=e==null?0:e.length;if(!c)return-1;var l=c-1;return s!==r&&(l=$(s),l=s<0?me(c+l,0):be(l,c-1)),Zr(e,U(n,3),l,!0)}function Au(e){var n=e==null?0:e.length;return n?ve(e,1):[]}function Zg(e){var n=e==null?0:e.length;return n?ve(e,ht):[]}function Qg(e,n){var s=e==null?0:e.length;return s?(n=n===r?1:$(n),ve(e,n)):[]}function em(e){for(var n=-1,s=e==null?0:e.length,c={};++n<s;){var l=e[n];c[l[0]]=l[1]}return c}function Cu(e){return e&&e.length?e[0]:r}function tm(e,n,s){var c=e==null?0:e.length;if(!c)return-1;var l=s==null?0:$(s);return l<0&&(l=me(c+l,0)),An(e,n,l)}function nm(e){var n=e==null?0:e.length;return n?Ye(e,0,-1):[]}var rm=V(function(e){var n=se(e,so);return n.length&&n[0]===e[0]?js(n):[]}),im=V(function(e){var n=Xe(e),s=se(e,so);return n===Xe(s)?n=r:s.pop(),s.length&&s[0]===e[0]?js(s,U(n,2)):[]}),sm=V(function(e){var n=Xe(e),s=se(e,so);return n=typeof n=="function"?n:r,n&&s.pop(),s.length&&s[0]===e[0]?js(s,r,n):[]});function om(e,n){return e==null?"":np.call(e,n)}function Xe(e){var n=e==null?0:e.length;return n?e[n-1]:r}function am(e,n,s){var c=e==null?0:e.length;if(!c)return-1;var l=c;return s!==r&&(l=$(s),l=l<0?me(c+l,0):be(l,c-1)),n===n?Wd(e,n,l):Zr(e,cc,l,!0)}function cm(e,n){return e&&e.length?Bc(e,$(n)):r}var um=V(Ou);function Ou(e,n){return e&&e.length&&n&&n.length?Qs(e,n):e}function lm(e,n,s){return e&&e.length&&n&&n.length?Qs(e,n,U(s,2)):e}function fm(e,n,s){return e&&e.length&&n&&n.length?Qs(e,n,r,s):e}var hm=At(function(e,n){var s=e==null?0:e.length,c=zs(e,n);return $c(e,se(n,function(l){return Ct(l,s)?+l:l}).sort(Zc)),c});function dm(e,n){var s=[];if(!(e&&e.length))return s;var c=-1,l=[],d=e.length;for(n=U(n,3);++c<d;){var g=e[c];n(g,c,e)&&(s.push(g),l.push(c))}return $c(e,l),s}function Eo(e){return e==null?e:op.call(e)}function pm(e,n,s){var c=e==null?0:e.length;return c?(s&&typeof s!="number"&&Ae(e,n,s)?(n=0,s=c):(n=n==null?0:$(n),s=s===r?c:$(s)),Ye(e,n,s)):[]}function gm(e,n){return wi(e,n)}function mm(e,n,s){return no(e,n,U(s,2))}function _m(e,n){var s=e==null?0:e.length;if(s){var c=wi(e,n);if(c<s&&st(e[c],n))return c}return-1}function wm(e,n){return wi(e,n,!0)}function ym(e,n,s){return no(e,n,U(s,2),!0)}function Em(e,n){var s=e==null?0:e.length;if(s){var c=wi(e,n,!0)-1;if(st(e[c],n))return c}return-1}function vm(e){return e&&e.length?Vc(e):[]}function Im(e,n){return e&&e.length?Vc(e,U(n,2)):[]}function bm(e){var n=e==null?0:e.length;return n?Ye(e,1,n):[]}function Tm(e,n,s){return e&&e.length?(n=s||n===r?1:$(n),Ye(e,0,n<0?0:n)):[]}function Sm(e,n,s){var c=e==null?0:e.length;return c?(n=s||n===r?1:$(n),n=c-n,Ye(e,n<0?0:n,c)):[]}function Rm(e,n){return e&&e.length?yi(e,U(n,3),!1,!0):[]}function Am(e,n){return e&&e.length?yi(e,U(n,3)):[]}var Cm=V(function(e){return zt(ve(e,1,fe,!0))}),Om=V(function(e){var n=Xe(e);return fe(n)&&(n=r),zt(ve(e,1,fe,!0),U(n,2))}),Pm=V(function(e){var n=Xe(e);return n=typeof n=="function"?n:r,zt(ve(e,1,fe,!0),r,n)});function Lm(e){return e&&e.length?zt(e):[]}function xm(e,n){return e&&e.length?zt(e,U(n,2)):[]}function Nm(e,n){return n=typeof n=="function"?n:r,e&&e.length?zt(e,r,n):[]}function vo(e){if(!(e&&e.length))return[];var n=0;return e=Wt(e,function(s){if(fe(s))return n=me(s.length,n),!0}),Ms(n,function(s){return se(e,Ds(s))})}function Pu(e,n){if(!(e&&e.length))return[];var s=vo(e);return n==null?s:se(s,function(c){return Fe(n,r,c)})}var Dm=V(function(e,n){return fe(e)?fr(e,n):[]}),km=V(function(e){return io(Wt(e,fe))}),Um=V(function(e){var n=Xe(e);return fe(n)&&(n=r),io(Wt(e,fe),U(n,2))}),Mm=V(function(e){var n=Xe(e);return n=typeof n=="function"?n:r,io(Wt(e,fe),r,n)}),Fm=V(vo);function Bm(e,n){return Jc(e||[],n||[],lr)}function Wm(e,n){return Jc(e||[],n||[],pr)}var Hm=V(function(e){var n=e.length,s=n>1?e[n-1]:r;return s=typeof s=="function"?(e.pop(),s):r,Pu(e,s)});function Lu(e){var n=h(e);return n.__chain__=!0,n}function $m(e,n){return n(e),e}function Ci(e,n){return n(e)}var qm=At(function(e){var n=e.length,s=n?e[0]:0,c=this.__wrapped__,l=function(d){return zs(d,e)};return n>1||this.__actions__.length||!(c instanceof K)||!Ct(s)?this.thru(l):(c=c.slice(s,+s+(n?1:0)),c.__actions__.push({func:Ci,args:[l],thisArg:r}),new Je(c,this.__chain__).thru(function(d){return n&&!d.length&&d.push(r),d}))});function Vm(){return Lu(this)}function zm(){return new Je(this.value(),this.__chain__)}function Gm(){this.__values__===r&&(this.__values__=zu(this.value()));var e=this.__index__>=this.__values__.length,n=e?r:this.__values__[this.__index__++];return{done:e,value:n}}function Km(){return this}function Jm(e){for(var n,s=this;s instanceof di;){var c=Tu(s);c.__index__=0,c.__values__=r,n?l.__wrapped__=c:n=c;var l=c;s=s.__wrapped__}return l.__wrapped__=e,n}function jm(){var e=this.__wrapped__;if(e instanceof K){var n=e;return this.__actions__.length&&(n=new K(this)),n=n.reverse(),n.__actions__.push({func:Ci,args:[Eo],thisArg:r}),new Je(n,this.__chain__)}return this.thru(Eo)}function Ym(){return Kc(this.__wrapped__,this.__actions__)}var Xm=Ei(function(e,n,s){Z.call(e,s)?++e[s]:St(e,s,1)});function Zm(e,n,s){var c=H(e)?oc:$p;return s&&Ae(e,n,s)&&(n=r),c(e,U(n,3))}function Qm(e,n){var s=H(e)?Wt:Pc;return s(e,U(n,3))}var e_=iu(Su),t_=iu(Ru);function n_(e,n){return ve(Oi(e,n),1)}function r_(e,n){return ve(Oi(e,n),ht)}function i_(e,n,s){return s=s===r?1:$(s),ve(Oi(e,n),s)}function xu(e,n){var s=H(e)?Ge:Vt;return s(e,U(n,3))}function Nu(e,n){var s=H(e)?bd:Oc;return s(e,U(n,3))}var s_=Ei(function(e,n,s){Z.call(e,s)?e[s].push(n):St(e,s,[n])});function o_(e,n,s,c){e=De(e)?e:Bn(e),s=s&&!c?$(s):0;var l=e.length;return s<0&&(s=me(l+s,0)),Di(e)?s<=l&&e.indexOf(n,s)>-1:!!l&&An(e,n,s)>-1}var a_=V(function(e,n,s){var c=-1,l=typeof n=="function",d=De(e)?I(e.length):[];return Vt(e,function(g){d[++c]=l?Fe(n,g,s):hr(g,n,s)}),d}),c_=Ei(function(e,n,s){St(e,s,n)});function Oi(e,n){var s=H(e)?se:Uc;return s(e,U(n,3))}function u_(e,n,s,c){return e==null?[]:(H(n)||(n=n==null?[]:[n]),s=c?r:s,H(s)||(s=s==null?[]:[s]),Wc(e,n,s))}var l_=Ei(function(e,n,s){e[s?0:1].push(n)},function(){return[[],[]]});function f_(e,n,s){var c=H(e)?xs:lc,l=arguments.length<3;return c(e,U(n,4),s,l,Vt)}function h_(e,n,s){var c=H(e)?Td:lc,l=arguments.length<3;return c(e,U(n,4),s,l,Oc)}function d_(e,n){var s=H(e)?Wt:Pc;return s(e,xi(U(n,3)))}function p_(e){var n=H(e)?Sc:og;return n(e)}function g_(e,n,s){(s?Ae(e,n,s):n===r)?n=1:n=$(n);var c=H(e)?Mp:ag;return c(e,n)}function m_(e){var n=H(e)?Fp:ug;return n(e)}function __(e){if(e==null)return 0;if(De(e))return Di(e)?On(e):e.length;var n=Te(e);return n==tt||n==nt?e.size:Xs(e).length}function w_(e,n,s){var c=H(e)?Ns:lg;return s&&Ae(e,n,s)&&(n=r),c(e,U(n,3))}var y_=V(function(e,n){if(e==null)return[];var s=n.length;return s>1&&Ae(e,n[0],n[1])?n=[]:s>2&&Ae(n[0],n[1],n[2])&&(n=[n[0]]),Wc(e,ve(n,1),[])}),Pi=Qd||function(){return Ee.Date.now()};function E_(e,n){if(typeof n!="function")throw new Ke(f);return e=$(e),function(){if(--e<1)return n.apply(this,arguments)}}function Du(e,n,s){return n=s?r:n,n=e&&n==null?e.length:n,Rt(e,ce,r,r,r,r,n)}function ku(e,n){var s;if(typeof n!="function")throw new Ke(f);return e=$(e),function(){return--e>0&&(s=n.apply(this,arguments)),e<=1&&(n=r),s}}var Io=V(function(e,n,s){var c=P;if(s.length){var l=$t(s,Mn(Io));c|=ae}return Rt(e,c,n,s,l)}),Uu=V(function(e,n,s){var c=P|Y;if(s.length){var l=$t(s,Mn(Uu));c|=ae}return Rt(n,c,e,s,l)});function Mu(e,n,s){n=s?r:n;var c=Rt(e,ee,r,r,r,r,r,n);return c.placeholder=Mu.placeholder,c}function Fu(e,n,s){n=s?r:n;var c=Rt(e,le,r,r,r,r,r,n);return c.placeholder=Fu.placeholder,c}function Bu(e,n,s){var c,l,d,g,m,y,S=0,R=!1,C=!1,L=!0;if(typeof e!="function")throw new Ke(f);n=Ze(n)||0,oe(s)&&(R=!!s.leading,C="maxWait"in s,d=C?me(Ze(s.maxWait)||0,n):d,L="trailing"in s?!!s.trailing:L);function D(he){var ot=c,Lt=l;return c=l=r,S=he,g=e.apply(Lt,ot),g}function M(he){return S=he,m=_r(z,n),R?D(he):g}function q(he){var ot=he-y,Lt=he-S,il=n-ot;return C?be(il,d-Lt):il}function F(he){var ot=he-y,Lt=he-S;return y===r||ot>=n||ot<0||C&&Lt>=d}function z(){var he=Pi();if(F(he))return j(he);m=_r(z,q(he))}function j(he){return m=r,L&&c?D(he):(c=l=r,g)}function $e(){m!==r&&jc(m),S=0,c=y=l=m=r}function Ce(){return m===r?g:j(Pi())}function qe(){var he=Pi(),ot=F(he);if(c=arguments,l=this,y=he,ot){if(m===r)return M(y);if(C)return jc(m),m=_r(z,n),D(y)}return m===r&&(m=_r(z,n)),g}return qe.cancel=$e,qe.flush=Ce,qe}var v_=V(function(e,n){return Cc(e,1,n)}),I_=V(function(e,n,s){return Cc(e,Ze(n)||0,s)});function b_(e){return Rt(e,Ft)}function Li(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new Ke(f);var s=function(){var c=arguments,l=n?n.apply(this,c):c[0],d=s.cache;if(d.has(l))return d.get(l);var g=e.apply(this,c);return s.cache=d.set(l,g)||d,g};return s.cache=new(Li.Cache||Tt),s}Li.Cache=Tt;function xi(e){if(typeof e!="function")throw new Ke(f);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function T_(e){return ku(2,e)}var S_=fg(function(e,n){n=n.length==1&&H(n[0])?se(n[0],Be(U())):se(ve(n,1),Be(U()));var s=n.length;return V(function(c){for(var l=-1,d=be(c.length,s);++l<d;)c[l]=n[l].call(this,c[l]);return Fe(e,this,c)})}),bo=V(function(e,n){var s=$t(n,Mn(bo));return Rt(e,ae,r,n,s)}),Wu=V(function(e,n){var s=$t(n,Mn(Wu));return Rt(e,xe,r,n,s)}),R_=At(function(e,n){return Rt(e,Et,r,r,r,n)});function A_(e,n){if(typeof e!="function")throw new Ke(f);return n=n===r?n:$(n),V(e,n)}function C_(e,n){if(typeof e!="function")throw new Ke(f);return n=n==null?0:me($(n),0),V(function(s){var c=s[n],l=Kt(s,0,n);return c&&Ht(l,c),Fe(e,this,l)})}function O_(e,n,s){var c=!0,l=!0;if(typeof e!="function")throw new Ke(f);return oe(s)&&(c="leading"in s?!!s.leading:c,l="trailing"in s?!!s.trailing:l),Bu(e,n,{leading:c,maxWait:n,trailing:l})}function P_(e){return Du(e,1)}function L_(e,n){return bo(oo(n),e)}function x_(){if(!arguments.length)return[];var e=arguments[0];return H(e)?e:[e]}function N_(e){return je(e,G)}function D_(e,n){return n=typeof n=="function"?n:r,je(e,G,n)}function k_(e){return je(e,O|G)}function U_(e,n){return n=typeof n=="function"?n:r,je(e,O|G,n)}function M_(e,n){return n==null||Ac(e,n,_e(n))}function st(e,n){return e===n||e!==e&&n!==n}var F_=Ti(Js),B_=Ti(function(e,n){return e>=n}),gn=Nc(function(){return arguments}())?Nc:function(e){return ue(e)&&Z.call(e,"callee")&&!yc.call(e,"callee")},H=I.isArray,W_=ec?Be(ec):Jp;function De(e){return e!=null&&Ni(e.length)&&!Ot(e)}function fe(e){return ue(e)&&De(e)}function H_(e){return e===!0||e===!1||ue(e)&&Re(e)==Xn}var Jt=tp||Do,$_=tc?Be(tc):jp;function q_(e){return ue(e)&&e.nodeType===1&&!wr(e)}function V_(e){if(e==null)return!0;if(De(e)&&(H(e)||typeof e=="string"||typeof e.splice=="function"||Jt(e)||Fn(e)||gn(e)))return!e.length;var n=Te(e);if(n==tt||n==nt)return!e.size;if(mr(e))return!Xs(e).length;for(var s in e)if(Z.call(e,s))return!1;return!0}function z_(e,n){return dr(e,n)}function G_(e,n,s){s=typeof s=="function"?s:r;var c=s?s(e,n):r;return c===r?dr(e,n,r,s):!!c}function To(e){if(!ue(e))return!1;var n=Re(e);return n==zr||n==gh||typeof e.message=="string"&&typeof e.name=="string"&&!wr(e)}function K_(e){return typeof e=="number"&&vc(e)}function Ot(e){if(!oe(e))return!1;var n=Re(e);return n==Gr||n==Ca||n==ph||n==_h}function Hu(e){return typeof e=="number"&&e==$(e)}function Ni(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ye}function oe(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function ue(e){return e!=null&&typeof e=="object"}var $u=nc?Be(nc):Xp;function J_(e,n){return e===n||Ys(e,n,po(n))}function j_(e,n,s){return s=typeof s=="function"?s:r,Ys(e,n,po(n),s)}function Y_(e){return qu(e)&&e!=+e}function X_(e){if(Dg(e))throw new W(u);return Dc(e)}function Z_(e){return e===null}function Q_(e){return e==null}function qu(e){return typeof e=="number"||ue(e)&&Re(e)==Qn}function wr(e){if(!ue(e)||Re(e)!=It)return!1;var n=oi(e);if(n===null)return!0;var s=Z.call(n,"constructor")&&n.constructor;return typeof s=="function"&&s instanceof s&&ni.call(s)==jd}var So=rc?Be(rc):Zp;function ew(e){return Hu(e)&&e>=-ye&&e<=ye}var Vu=ic?Be(ic):Qp;function Di(e){return typeof e=="string"||!H(e)&&ue(e)&&Re(e)==tr}function He(e){return typeof e=="symbol"||ue(e)&&Re(e)==Kr}var Fn=sc?Be(sc):eg;function tw(e){return e===r}function nw(e){return ue(e)&&Te(e)==nr}function rw(e){return ue(e)&&Re(e)==yh}var iw=Ti(Zs),sw=Ti(function(e,n){return e<=n});function zu(e){if(!e)return[];if(De(e))return Di(e)?rt(e):Ne(e);if(sr&&e[sr])return Md(e[sr]());var n=Te(e),s=n==tt?Bs:n==nt?Qr:Bn;return s(e)}function Pt(e){if(!e)return e===0?e:0;if(e=Ze(e),e===ht||e===-ht){var n=e<0?-1:1;return n*qr}return e===e?e:0}function $(e){var n=Pt(e),s=n%1;return n===n?s?n-s:n:0}function Gu(e){return e?fn($(e),0,pe):0}function Ze(e){if(typeof e=="number")return e;if(He(e))return bn;if(oe(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=oe(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=fc(e);var s=Wh.test(e);return s||$h.test(e)?Ed(e.slice(2),s?2:8):Bh.test(e)?bn:+e}function Ku(e){return pt(e,ke(e))}function ow(e){return e?fn($(e),-ye,ye):e===0?e:0}function Q(e){return e==null?"":We(e)}var aw=kn(function(e,n){if(mr(n)||De(n)){pt(n,_e(n),e);return}for(var s in n)Z.call(n,s)&&lr(e,s,n[s])}),Ju=kn(function(e,n){pt(n,ke(n),e)}),ki=kn(function(e,n,s,c){pt(n,ke(n),e,c)}),cw=kn(function(e,n,s,c){pt(n,_e(n),e,c)}),uw=At(zs);function lw(e,n){var s=Dn(e);return n==null?s:Rc(s,n)}var fw=V(function(e,n){e=te(e);var s=-1,c=n.length,l=c>2?n[2]:r;for(l&&Ae(n[0],n[1],l)&&(c=1);++s<c;)for(var d=n[s],g=ke(d),m=-1,y=g.length;++m<y;){var S=g[m],R=e[S];(R===r||st(R,Ln[S])&&!Z.call(e,S))&&(e[S]=d[S])}return e}),hw=V(function(e){return e.push(r,fu),Fe(ju,r,e)});function dw(e,n){return ac(e,U(n,3),dt)}function pw(e,n){return ac(e,U(n,3),Ks)}function gw(e,n){return e==null?e:Gs(e,U(n,3),ke)}function mw(e,n){return e==null?e:Lc(e,U(n,3),ke)}function _w(e,n){return e&&dt(e,U(n,3))}function ww(e,n){return e&&Ks(e,U(n,3))}function yw(e){return e==null?[]:mi(e,_e(e))}function Ew(e){return e==null?[]:mi(e,ke(e))}function Ro(e,n,s){var c=e==null?r:hn(e,n);return c===r?s:c}function vw(e,n){return e!=null&&pu(e,n,Vp)}function Ao(e,n){return e!=null&&pu(e,n,zp)}var Iw=ou(function(e,n,s){n!=null&&typeof n.toString!="function"&&(n=ri.call(n)),e[n]=s},Oo(Ue)),bw=ou(function(e,n,s){n!=null&&typeof n.toString!="function"&&(n=ri.call(n)),Z.call(e,n)?e[n].push(s):e[n]=[s]},U),Tw=V(hr);function _e(e){return De(e)?Tc(e):Xs(e)}function ke(e){return De(e)?Tc(e,!0):tg(e)}function Sw(e,n){var s={};return n=U(n,3),dt(e,function(c,l,d){St(s,n(c,l,d),c)}),s}function Rw(e,n){var s={};return n=U(n,3),dt(e,function(c,l,d){St(s,l,n(c,l,d))}),s}var Aw=kn(function(e,n,s){_i(e,n,s)}),ju=kn(function(e,n,s,c){_i(e,n,s,c)}),Cw=At(function(e,n){var s={};if(e==null)return s;var c=!1;n=se(n,function(d){return d=Gt(d,e),c||(c=d.length>1),d}),pt(e,fo(e),s),c&&(s=je(s,O|k|G,Ig));for(var l=n.length;l--;)ro(s,n[l]);return s});function Ow(e,n){return Yu(e,xi(U(n)))}var Pw=At(function(e,n){return e==null?{}:rg(e,n)});function Yu(e,n){if(e==null)return{};var s=se(fo(e),function(c){return[c]});return n=U(n),Hc(e,s,function(c,l){return n(c,l[0])})}function Lw(e,n,s){n=Gt(n,e);var c=-1,l=n.length;for(l||(l=1,e=r);++c<l;){var d=e==null?r:e[gt(n[c])];d===r&&(c=l,d=s),e=Ot(d)?d.call(e):d}return e}function xw(e,n,s){return e==null?e:pr(e,n,s)}function Nw(e,n,s,c){return c=typeof c=="function"?c:r,e==null?e:pr(e,n,s,c)}var Xu=uu(_e),Zu=uu(ke);function Dw(e,n,s){var c=H(e),l=c||Jt(e)||Fn(e);if(n=U(n,4),s==null){var d=e&&e.constructor;l?s=c?new d:[]:oe(e)?s=Ot(d)?Dn(oi(e)):{}:s={}}return(l?Ge:dt)(e,function(g,m,y){return n(s,g,m,y)}),s}function kw(e,n){return e==null?!0:ro(e,n)}function Uw(e,n,s){return e==null?e:Gc(e,n,oo(s))}function Mw(e,n,s,c){return c=typeof c=="function"?c:r,e==null?e:Gc(e,n,oo(s),c)}function Bn(e){return e==null?[]:Fs(e,_e(e))}function Fw(e){return e==null?[]:Fs(e,ke(e))}function Bw(e,n,s){return s===r&&(s=n,n=r),s!==r&&(s=Ze(s),s=s===s?s:0),n!==r&&(n=Ze(n),n=n===n?n:0),fn(Ze(e),n,s)}function Ww(e,n,s){return n=Pt(n),s===r?(s=n,n=0):s=Pt(s),e=Ze(e),Gp(e,n,s)}function Hw(e,n,s){if(s&&typeof s!="boolean"&&Ae(e,n,s)&&(n=s=r),s===r&&(typeof n=="boolean"?(s=n,n=r):typeof e=="boolean"&&(s=e,e=r)),e===r&&n===r?(e=0,n=1):(e=Pt(e),n===r?(n=e,e=0):n=Pt(n)),e>n){var c=e;e=n,n=c}if(s||e%1||n%1){var l=Ic();return be(e+l*(n-e+yd("1e-"+((l+"").length-1))),n)}return eo(e,n)}var $w=Un(function(e,n,s){return n=n.toLowerCase(),e+(s?Qu(n):n)});function Qu(e){return Co(Q(e).toLowerCase())}function el(e){return e=Q(e),e&&e.replace(Vh,xd).replace(ud,"")}function qw(e,n,s){e=Q(e),n=We(n);var c=e.length;s=s===r?c:fn($(s),0,c);var l=s;return s-=n.length,s>=0&&e.slice(s,l)==n}function Vw(e){return e=Q(e),e&&Th.test(e)?e.replace(La,Nd):e}function zw(e){return e=Q(e),e&&Ph.test(e)?e.replace(Is,"\\$&"):e}var Gw=Un(function(e,n,s){return e+(s?"-":"")+n.toLowerCase()}),Kw=Un(function(e,n,s){return e+(s?" ":"")+n.toLowerCase()}),Jw=ru("toLowerCase");function jw(e,n,s){e=Q(e),n=$(n);var c=n?On(e):0;if(!n||c>=n)return e;var l=(n-c)/2;return bi(li(l),s)+e+bi(ui(l),s)}function Yw(e,n,s){e=Q(e),n=$(n);var c=n?On(e):0;return n&&c<n?e+bi(n-c,s):e}function Xw(e,n,s){e=Q(e),n=$(n);var c=n?On(e):0;return n&&c<n?bi(n-c,s)+e:e}function Zw(e,n,s){return s||n==null?n=0:n&&(n=+n),sp(Q(e).replace(bs,""),n||0)}function Qw(e,n,s){return(s?Ae(e,n,s):n===r)?n=1:n=$(n),to(Q(e),n)}function ey(){var e=arguments,n=Q(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var ty=Un(function(e,n,s){return e+(s?"_":"")+n.toLowerCase()});function ny(e,n,s){return s&&typeof s!="number"&&Ae(e,n,s)&&(n=s=r),s=s===r?pe:s>>>0,s?(e=Q(e),e&&(typeof n=="string"||n!=null&&!So(n))&&(n=We(n),!n&&Cn(e))?Kt(rt(e),0,s):e.split(n,s)):[]}var ry=Un(function(e,n,s){return e+(s?" ":"")+Co(n)});function iy(e,n,s){return e=Q(e),s=s==null?0:fn($(s),0,e.length),n=We(n),e.slice(s,s+n.length)==n}function sy(e,n,s){var c=h.templateSettings;s&&Ae(e,n,s)&&(n=r),e=Q(e),n=ki({},n,c,lu);var l=ki({},n.imports,c.imports,lu),d=_e(l),g=Fs(l,d),m,y,S=0,R=n.interpolate||Jr,C="__p += '",L=Ws((n.escape||Jr).source+"|"+R.source+"|"+(R===xa?Fh:Jr).source+"|"+(n.evaluate||Jr).source+"|$","g"),D="//# sourceURL="+(Z.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++pd+"]")+`
`;e.replace(L,function(F,z,j,$e,Ce,qe){return j||(j=$e),C+=e.slice(S,qe).replace(zh,Dd),z&&(m=!0,C+=`' +
__e(`+z+`) +
'`),Ce&&(y=!0,C+=`';
`+Ce+`;
__p += '`),j&&(C+=`' +
((__t = (`+j+`)) == null ? '' : __t) +
'`),S=qe+F.length,F}),C+=`';
`;var M=Z.call(n,"variable")&&n.variable;if(!M)C=`with (obj) {
`+C+`
}
`;else if(Uh.test(M))throw new W(p);C=(y?C.replace(Eh,""):C).replace(vh,"$1").replace(Ih,"$1;"),C="function("+(M||"obj")+`) {
`+(M?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(m?", __e = _.escape":"")+(y?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+C+`return __p
}`;var q=nl(function(){return X(d,D+"return "+C).apply(r,g)});if(q.source=C,To(q))throw q;return q}function oy(e){return Q(e).toLowerCase()}function ay(e){return Q(e).toUpperCase()}function cy(e,n,s){if(e=Q(e),e&&(s||n===r))return fc(e);if(!e||!(n=We(n)))return e;var c=rt(e),l=rt(n),d=hc(c,l),g=dc(c,l)+1;return Kt(c,d,g).join("")}function uy(e,n,s){if(e=Q(e),e&&(s||n===r))return e.slice(0,gc(e)+1);if(!e||!(n=We(n)))return e;var c=rt(e),l=dc(c,rt(n))+1;return Kt(c,0,l).join("")}function ly(e,n,s){if(e=Q(e),e&&(s||n===r))return e.replace(bs,"");if(!e||!(n=We(n)))return e;var c=rt(e),l=hc(c,rt(n));return Kt(c,l).join("")}function fy(e,n){var s=Wr,c=Hr;if(oe(n)){var l="separator"in n?n.separator:l;s="length"in n?$(n.length):s,c="omission"in n?We(n.omission):c}e=Q(e);var d=e.length;if(Cn(e)){var g=rt(e);d=g.length}if(s>=d)return e;var m=s-On(c);if(m<1)return c;var y=g?Kt(g,0,m).join(""):e.slice(0,m);if(l===r)return y+c;if(g&&(m+=y.length-m),So(l)){if(e.slice(m).search(l)){var S,R=y;for(l.global||(l=Ws(l.source,Q(Na.exec(l))+"g")),l.lastIndex=0;S=l.exec(R);)var C=S.index;y=y.slice(0,C===r?m:C)}}else if(e.indexOf(We(l),m)!=m){var L=y.lastIndexOf(l);L>-1&&(y=y.slice(0,L))}return y+c}function hy(e){return e=Q(e),e&&bh.test(e)?e.replace(Pa,Hd):e}var dy=Un(function(e,n,s){return e+(s?" ":"")+n.toUpperCase()}),Co=ru("toUpperCase");function tl(e,n,s){return e=Q(e),n=s?r:n,n===r?Ud(e)?Vd(e):Ad(e):e.match(n)||[]}var nl=V(function(e,n){try{return Fe(e,r,n)}catch(s){return To(s)?s:new W(s)}}),py=At(function(e,n){return Ge(n,function(s){s=gt(s),St(e,s,Io(e[s],e))}),e});function gy(e){var n=e==null?0:e.length,s=U();return e=n?se(e,function(c){if(typeof c[1]!="function")throw new Ke(f);return[s(c[0]),c[1]]}):[],V(function(c){for(var l=-1;++l<n;){var d=e[l];if(Fe(d[0],this,c))return Fe(d[1],this,c)}})}function my(e){return Hp(je(e,O))}function Oo(e){return function(){return e}}function _y(e,n){return e==null||e!==e?n:e}var wy=su(),yy=su(!0);function Ue(e){return e}function Po(e){return kc(typeof e=="function"?e:je(e,O))}function Ey(e){return Mc(je(e,O))}function vy(e,n){return Fc(e,je(n,O))}var Iy=V(function(e,n){return function(s){return hr(s,e,n)}}),by=V(function(e,n){return function(s){return hr(e,s,n)}});function Lo(e,n,s){var c=_e(n),l=mi(n,c);s==null&&!(oe(n)&&(l.length||!c.length))&&(s=n,n=e,e=this,l=mi(n,_e(n)));var d=!(oe(s)&&"chain"in s)||!!s.chain,g=Ot(e);return Ge(l,function(m){var y=n[m];e[m]=y,g&&(e.prototype[m]=function(){var S=this.__chain__;if(d||S){var R=e(this.__wrapped__),C=R.__actions__=Ne(this.__actions__);return C.push({func:y,args:arguments,thisArg:e}),R.__chain__=S,R}return y.apply(e,Ht([this.value()],arguments))})}),e}function Ty(){return Ee._===this&&(Ee._=Yd),this}function xo(){}function Sy(e){return e=$(e),V(function(n){return Bc(n,e)})}var Ry=co(se),Ay=co(oc),Cy=co(Ns);function rl(e){return mo(e)?Ds(gt(e)):ig(e)}function Oy(e){return function(n){return e==null?r:hn(e,n)}}var Py=au(),Ly=au(!0);function No(){return[]}function Do(){return!1}function xy(){return{}}function Ny(){return""}function Dy(){return!0}function ky(e,n){if(e=$(e),e<1||e>ye)return[];var s=pe,c=be(e,pe);n=U(n),e-=pe;for(var l=Ms(c,n);++s<e;)n(s);return l}function Uy(e){return H(e)?se(e,gt):He(e)?[e]:Ne(bu(Q(e)))}function My(e){var n=++Jd;return Q(e)+n}var Fy=Ii(function(e,n){return e+n},0),By=uo("ceil"),Wy=Ii(function(e,n){return e/n},1),Hy=uo("floor");function $y(e){return e&&e.length?gi(e,Ue,Js):r}function qy(e,n){return e&&e.length?gi(e,U(n,2),Js):r}function Vy(e){return uc(e,Ue)}function zy(e,n){return uc(e,U(n,2))}function Gy(e){return e&&e.length?gi(e,Ue,Zs):r}function Ky(e,n){return e&&e.length?gi(e,U(n,2),Zs):r}var Jy=Ii(function(e,n){return e*n},1),jy=uo("round"),Yy=Ii(function(e,n){return e-n},0);function Xy(e){return e&&e.length?Us(e,Ue):0}function Zy(e,n){return e&&e.length?Us(e,U(n,2)):0}return h.after=E_,h.ary=Du,h.assign=aw,h.assignIn=Ju,h.assignInWith=ki,h.assignWith=cw,h.at=uw,h.before=ku,h.bind=Io,h.bindAll=py,h.bindKey=Uu,h.castArray=x_,h.chain=Lu,h.chunk=Hg,h.compact=$g,h.concat=qg,h.cond=gy,h.conforms=my,h.constant=Oo,h.countBy=Xm,h.create=lw,h.curry=Mu,h.curryRight=Fu,h.debounce=Bu,h.defaults=fw,h.defaultsDeep=hw,h.defer=v_,h.delay=I_,h.difference=Vg,h.differenceBy=zg,h.differenceWith=Gg,h.drop=Kg,h.dropRight=Jg,h.dropRightWhile=jg,h.dropWhile=Yg,h.fill=Xg,h.filter=Qm,h.flatMap=n_,h.flatMapDeep=r_,h.flatMapDepth=i_,h.flatten=Au,h.flattenDeep=Zg,h.flattenDepth=Qg,h.flip=b_,h.flow=wy,h.flowRight=yy,h.fromPairs=em,h.functions=yw,h.functionsIn=Ew,h.groupBy=s_,h.initial=nm,h.intersection=rm,h.intersectionBy=im,h.intersectionWith=sm,h.invert=Iw,h.invertBy=bw,h.invokeMap=a_,h.iteratee=Po,h.keyBy=c_,h.keys=_e,h.keysIn=ke,h.map=Oi,h.mapKeys=Sw,h.mapValues=Rw,h.matches=Ey,h.matchesProperty=vy,h.memoize=Li,h.merge=Aw,h.mergeWith=ju,h.method=Iy,h.methodOf=by,h.mixin=Lo,h.negate=xi,h.nthArg=Sy,h.omit=Cw,h.omitBy=Ow,h.once=T_,h.orderBy=u_,h.over=Ry,h.overArgs=S_,h.overEvery=Ay,h.overSome=Cy,h.partial=bo,h.partialRight=Wu,h.partition=l_,h.pick=Pw,h.pickBy=Yu,h.property=rl,h.propertyOf=Oy,h.pull=um,h.pullAll=Ou,h.pullAllBy=lm,h.pullAllWith=fm,h.pullAt=hm,h.range=Py,h.rangeRight=Ly,h.rearg=R_,h.reject=d_,h.remove=dm,h.rest=A_,h.reverse=Eo,h.sampleSize=g_,h.set=xw,h.setWith=Nw,h.shuffle=m_,h.slice=pm,h.sortBy=y_,h.sortedUniq=vm,h.sortedUniqBy=Im,h.split=ny,h.spread=C_,h.tail=bm,h.take=Tm,h.takeRight=Sm,h.takeRightWhile=Rm,h.takeWhile=Am,h.tap=$m,h.throttle=O_,h.thru=Ci,h.toArray=zu,h.toPairs=Xu,h.toPairsIn=Zu,h.toPath=Uy,h.toPlainObject=Ku,h.transform=Dw,h.unary=P_,h.union=Cm,h.unionBy=Om,h.unionWith=Pm,h.uniq=Lm,h.uniqBy=xm,h.uniqWith=Nm,h.unset=kw,h.unzip=vo,h.unzipWith=Pu,h.update=Uw,h.updateWith=Mw,h.values=Bn,h.valuesIn=Fw,h.without=Dm,h.words=tl,h.wrap=L_,h.xor=km,h.xorBy=Um,h.xorWith=Mm,h.zip=Fm,h.zipObject=Bm,h.zipObjectDeep=Wm,h.zipWith=Hm,h.entries=Xu,h.entriesIn=Zu,h.extend=Ju,h.extendWith=ki,Lo(h,h),h.add=Fy,h.attempt=nl,h.camelCase=$w,h.capitalize=Qu,h.ceil=By,h.clamp=Bw,h.clone=N_,h.cloneDeep=k_,h.cloneDeepWith=U_,h.cloneWith=D_,h.conformsTo=M_,h.deburr=el,h.defaultTo=_y,h.divide=Wy,h.endsWith=qw,h.eq=st,h.escape=Vw,h.escapeRegExp=zw,h.every=Zm,h.find=e_,h.findIndex=Su,h.findKey=dw,h.findLast=t_,h.findLastIndex=Ru,h.findLastKey=pw,h.floor=Hy,h.forEach=xu,h.forEachRight=Nu,h.forIn=gw,h.forInRight=mw,h.forOwn=_w,h.forOwnRight=ww,h.get=Ro,h.gt=F_,h.gte=B_,h.has=vw,h.hasIn=Ao,h.head=Cu,h.identity=Ue,h.includes=o_,h.indexOf=tm,h.inRange=Ww,h.invoke=Tw,h.isArguments=gn,h.isArray=H,h.isArrayBuffer=W_,h.isArrayLike=De,h.isArrayLikeObject=fe,h.isBoolean=H_,h.isBuffer=Jt,h.isDate=$_,h.isElement=q_,h.isEmpty=V_,h.isEqual=z_,h.isEqualWith=G_,h.isError=To,h.isFinite=K_,h.isFunction=Ot,h.isInteger=Hu,h.isLength=Ni,h.isMap=$u,h.isMatch=J_,h.isMatchWith=j_,h.isNaN=Y_,h.isNative=X_,h.isNil=Q_,h.isNull=Z_,h.isNumber=qu,h.isObject=oe,h.isObjectLike=ue,h.isPlainObject=wr,h.isRegExp=So,h.isSafeInteger=ew,h.isSet=Vu,h.isString=Di,h.isSymbol=He,h.isTypedArray=Fn,h.isUndefined=tw,h.isWeakMap=nw,h.isWeakSet=rw,h.join=om,h.kebabCase=Gw,h.last=Xe,h.lastIndexOf=am,h.lowerCase=Kw,h.lowerFirst=Jw,h.lt=iw,h.lte=sw,h.max=$y,h.maxBy=qy,h.mean=Vy,h.meanBy=zy,h.min=Gy,h.minBy=Ky,h.stubArray=No,h.stubFalse=Do,h.stubObject=xy,h.stubString=Ny,h.stubTrue=Dy,h.multiply=Jy,h.nth=cm,h.noConflict=Ty,h.noop=xo,h.now=Pi,h.pad=jw,h.padEnd=Yw,h.padStart=Xw,h.parseInt=Zw,h.random=Hw,h.reduce=f_,h.reduceRight=h_,h.repeat=Qw,h.replace=ey,h.result=Lw,h.round=jy,h.runInContext=w,h.sample=p_,h.size=__,h.snakeCase=ty,h.some=w_,h.sortedIndex=gm,h.sortedIndexBy=mm,h.sortedIndexOf=_m,h.sortedLastIndex=wm,h.sortedLastIndexBy=ym,h.sortedLastIndexOf=Em,h.startCase=ry,h.startsWith=iy,h.subtract=Yy,h.sum=Xy,h.sumBy=Zy,h.template=sy,h.times=ky,h.toFinite=Pt,h.toInteger=$,h.toLength=Gu,h.toLower=oy,h.toNumber=Ze,h.toSafeInteger=ow,h.toString=Q,h.toUpper=ay,h.trim=cy,h.trimEnd=uy,h.trimStart=ly,h.truncate=fy,h.unescape=hy,h.uniqueId=My,h.upperCase=dy,h.upperFirst=Co,h.each=xu,h.eachRight=Nu,h.first=Cu,Lo(h,function(){var e={};return dt(h,function(n,s){Z.call(h.prototype,s)||(e[s]=n)}),e}(),{chain:!1}),h.VERSION=o,Ge(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){h[e].placeholder=h}),Ge(["drop","take"],function(e,n){K.prototype[e]=function(s){s=s===r?1:me($(s),0);var c=this.__filtered__&&!n?new K(this):this.clone();return c.__filtered__?c.__takeCount__=be(s,c.__takeCount__):c.__views__.push({size:be(s,pe),type:e+(c.__dir__<0?"Right":"")}),c},K.prototype[e+"Right"]=function(s){return this.reverse()[e](s).reverse()}}),Ge(["filter","map","takeWhile"],function(e,n){var s=n+1,c=s==ft||s==Ie;K.prototype[e]=function(l){var d=this.clone();return d.__iteratees__.push({iteratee:U(l,3),type:s}),d.__filtered__=d.__filtered__||c,d}}),Ge(["head","last"],function(e,n){var s="take"+(n?"Right":"");K.prototype[e]=function(){return this[s](1).value()[0]}}),Ge(["initial","tail"],function(e,n){var s="drop"+(n?"":"Right");K.prototype[e]=function(){return this.__filtered__?new K(this):this[s](1)}}),K.prototype.compact=function(){return this.filter(Ue)},K.prototype.find=function(e){return this.filter(e).head()},K.prototype.findLast=function(e){return this.reverse().find(e)},K.prototype.invokeMap=V(function(e,n){return typeof e=="function"?new K(this):this.map(function(s){return hr(s,e,n)})}),K.prototype.reject=function(e){return this.filter(xi(U(e)))},K.prototype.slice=function(e,n){e=$(e);var s=this;return s.__filtered__&&(e>0||n<0)?new K(s):(e<0?s=s.takeRight(-e):e&&(s=s.drop(e)),n!==r&&(n=$(n),s=n<0?s.dropRight(-n):s.take(n-e)),s)},K.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},K.prototype.toArray=function(){return this.take(pe)},dt(K.prototype,function(e,n){var s=/^(?:filter|find|map|reject)|While$/.test(n),c=/^(?:head|last)$/.test(n),l=h[c?"take"+(n=="last"?"Right":""):n],d=c||/^find/.test(n);l&&(h.prototype[n]=function(){var g=this.__wrapped__,m=c?[1]:arguments,y=g instanceof K,S=m[0],R=y||H(g),C=function(z){var j=l.apply(h,Ht([z],m));return c&&L?j[0]:j};R&&s&&typeof S=="function"&&S.length!=1&&(y=R=!1);var L=this.__chain__,D=!!this.__actions__.length,M=d&&!L,q=y&&!D;if(!d&&R){g=q?g:new K(this);var F=e.apply(g,m);return F.__actions__.push({func:Ci,args:[C],thisArg:r}),new Je(F,L)}return M&&q?e.apply(this,m):(F=this.thru(C),M?c?F.value()[0]:F.value():F)})}),Ge(["pop","push","shift","sort","splice","unshift"],function(e){var n=ei[e],s=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",c=/^(?:pop|shift)$/.test(e);h.prototype[e]=function(){var l=arguments;if(c&&!this.__chain__){var d=this.value();return n.apply(H(d)?d:[],l)}return this[s](function(g){return n.apply(H(g)?g:[],l)})}}),dt(K.prototype,function(e,n){var s=h[n];if(s){var c=s.name+"";Z.call(Nn,c)||(Nn[c]=[]),Nn[c].push({name:n,func:s})}}),Nn[vi(r,Y).name]=[{name:"wrapper",func:r}],K.prototype.clone=hp,K.prototype.reverse=dp,K.prototype.value=pp,h.prototype.at=qm,h.prototype.chain=Vm,h.prototype.commit=zm,h.prototype.next=Gm,h.prototype.plant=Jm,h.prototype.reverse=jm,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=Ym,h.prototype.first=h.prototype.head,sr&&(h.prototype[sr]=Km),h},Pn=zd();an?((an.exports=Pn)._=Pn,Os._=Pn):Ee._=Pn}).call(yr)})(Ki,Ki.exports);var eE=Ki.exports;const tE=Qy(eE);function jl(i,t){return function(){return i.apply(t,arguments)}}const{toString:nE}=Object.prototype,{getPrototypeOf:aa}=Object,{iterator:rs,toStringTag:Yl}=Symbol,is=(i=>t=>{const r=nE.call(t);return i[r]||(i[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),lt=i=>(i=i.toLowerCase(),t=>is(t)===i),ss=i=>t=>typeof t===i,{isArray:Jn}=Array,Vn=ss("undefined");function Or(i){return i!==null&&!Vn(i)&&i.constructor!==null&&!Vn(i.constructor)&&Me(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Xl=lt("ArrayBuffer");function rE(i){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(i):t=i&&i.buffer&&Xl(i.buffer),t}const iE=ss("string"),Me=ss("function"),Zl=ss("number"),Pr=i=>i!==null&&typeof i=="object",sE=i=>i===!0||i===!1,Bi=i=>{if(is(i)!=="object")return!1;const t=aa(i);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Yl in i)&&!(rs in i)},oE=i=>{if(!Pr(i)||Or(i))return!1;try{return Object.keys(i).length===0&&Object.getPrototypeOf(i)===Object.prototype}catch{return!1}},aE=lt("Date"),cE=lt("File"),uE=i=>!!(i&&typeof i.uri<"u"),lE=i=>i&&typeof i.getParts<"u",fE=lt("Blob"),hE=lt("FileList"),dE=i=>Pr(i)&&Me(i.pipe);function pE(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const sl=pE(),ol=typeof sl.FormData<"u"?sl.FormData:void 0,gE=i=>{let t;return i&&(ol&&i instanceof ol||Me(i.append)&&((t=is(i))==="formdata"||t==="object"&&Me(i.toString)&&i.toString()==="[object FormData]"))},mE=lt("URLSearchParams"),[_E,wE,yE,EE]=["ReadableStream","Request","Response","Headers"].map(lt),vE=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Lr(i,t,{allOwnKeys:r=!1}={}){if(i===null||typeof i>"u")return;let o,a;if(typeof i!="object"&&(i=[i]),Jn(i))for(o=0,a=i.length;o<a;o++)t.call(null,i[o],o,i);else{if(Or(i))return;const u=r?Object.getOwnPropertyNames(i):Object.keys(i),f=u.length;let p;for(o=0;o<f;o++)p=u[o],t.call(null,i[p],p,i)}}function Ql(i,t){if(Or(i))return null;t=t.toLowerCase();const r=Object.keys(i);let o=r.length,a;for(;o-- >0;)if(a=r[o],t===a.toLowerCase())return a;return null}const _n=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ef=i=>!Vn(i)&&i!==_n;function Ko(){const{caseless:i,skipUndefined:t}=ef(this)&&this||{},r={},o=(a,u)=>{if(u==="__proto__"||u==="constructor"||u==="prototype")return;const f=i&&Ql(r,u)||u;Bi(r[f])&&Bi(a)?r[f]=Ko(r[f],a):Bi(a)?r[f]=Ko({},a):Jn(a)?r[f]=a.slice():(!t||!Vn(a))&&(r[f]=a)};for(let a=0,u=arguments.length;a<u;a++)arguments[a]&&Lr(arguments[a],o);return r}const IE=(i,t,r,{allOwnKeys:o}={})=>(Lr(t,(a,u)=>{r&&Me(a)?Object.defineProperty(i,u,{value:jl(a,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(i,u,{value:a,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:o}),i),bE=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),TE=(i,t,r,o)=>{i.prototype=Object.create(t.prototype,o),Object.defineProperty(i.prototype,"constructor",{value:i,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(i,"super",{value:t.prototype}),r&&Object.assign(i.prototype,r)},SE=(i,t,r,o)=>{let a,u,f;const p={};if(t=t||{},i==null)return t;do{for(a=Object.getOwnPropertyNames(i),u=a.length;u-- >0;)f=a[u],(!o||o(f,i,t))&&!p[f]&&(t[f]=i[f],p[f]=!0);i=r!==!1&&aa(i)}while(i&&(!r||r(i,t))&&i!==Object.prototype);return t},RE=(i,t,r)=>{i=String(i),(r===void 0||r>i.length)&&(r=i.length),r-=t.length;const o=i.indexOf(t,r);return o!==-1&&o===r},AE=i=>{if(!i)return null;if(Jn(i))return i;let t=i.length;if(!Zl(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=i[t];return r},CE=(i=>t=>i&&t instanceof i)(typeof Uint8Array<"u"&&aa(Uint8Array)),OE=(i,t)=>{const o=(i&&i[rs]).call(i);let a;for(;(a=o.next())&&!a.done;){const u=a.value;t.call(i,u[0],u[1])}},PE=(i,t)=>{let r;const o=[];for(;(r=i.exec(t))!==null;)o.push(r);return o},LE=lt("HTMLFormElement"),xE=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,o,a){return o.toUpperCase()+a}),al=(({hasOwnProperty:i})=>(t,r)=>i.call(t,r))(Object.prototype),NE=lt("RegExp"),tf=(i,t)=>{const r=Object.getOwnPropertyDescriptors(i),o={};Lr(r,(a,u)=>{let f;(f=t(a,u,i))!==!1&&(o[u]=f||a)}),Object.defineProperties(i,o)},DE=i=>{tf(i,(t,r)=>{if(Me(i)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const o=i[r];if(Me(o)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},kE=(i,t)=>{const r={},o=a=>{a.forEach(u=>{r[u]=!0})};return Jn(i)?o(i):o(String(i).split(t)),r},UE=()=>{},ME=(i,t)=>i!=null&&Number.isFinite(i=+i)?i:t;function FE(i){return!!(i&&Me(i.append)&&i[Yl]==="FormData"&&i[rs])}const BE=i=>{const t=new Array(10),r=(o,a)=>{if(Pr(o)){if(t.indexOf(o)>=0)return;if(Or(o))return o;if(!("toJSON"in o)){t[a]=o;const u=Jn(o)?[]:{};return Lr(o,(f,p)=>{const _=r(f,a+1);!Vn(_)&&(u[p]=_)}),t[a]=void 0,u}}return o};return r(i,0)},WE=lt("AsyncFunction"),HE=i=>i&&(Pr(i)||Me(i))&&Me(i.then)&&Me(i.catch),nf=((i,t)=>i?setImmediate:t?((r,o)=>(_n.addEventListener("message",({source:a,data:u})=>{a===_n&&u===r&&o.length&&o.shift()()},!1),a=>{o.push(a),_n.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Me(_n.postMessage)),$E=typeof queueMicrotask<"u"?queueMicrotask.bind(_n):typeof process<"u"&&process.nextTick||nf,qE=i=>i!=null&&Me(i[rs]),v={isArray:Jn,isArrayBuffer:Xl,isBuffer:Or,isFormData:gE,isArrayBufferView:rE,isString:iE,isNumber:Zl,isBoolean:sE,isObject:Pr,isPlainObject:Bi,isEmptyObject:oE,isReadableStream:_E,isRequest:wE,isResponse:yE,isHeaders:EE,isUndefined:Vn,isDate:aE,isFile:cE,isReactNativeBlob:uE,isReactNative:lE,isBlob:fE,isRegExp:NE,isFunction:Me,isStream:dE,isURLSearchParams:mE,isTypedArray:CE,isFileList:hE,forEach:Lr,merge:Ko,extend:IE,trim:vE,stripBOM:bE,inherits:TE,toFlatObject:SE,kindOf:is,kindOfTest:lt,endsWith:RE,toArray:AE,forEachEntry:OE,matchAll:PE,isHTMLForm:LE,hasOwnProperty:al,hasOwnProp:al,reduceDescriptors:tf,freezeMethods:DE,toObjectSet:kE,toCamelCase:xE,noop:UE,toFiniteNumber:ME,findKey:Ql,global:_n,isContextDefined:ef,isSpecCompliantForm:FE,toJSONObject:BE,isAsyncFn:WE,isThenable:HE,setImmediate:nf,asap:$E,isIterable:qE};class Le extends Error{static from(t,r,o,a,u,f){const p=new Le(t.message,r||t.code,o,a,u);return p.cause=t,p.name=t.name,t.status!=null&&p.status==null&&(p.status=t.status),f&&Object.assign(p,f),p}constructor(t,r,o,a,u){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),o&&(this.config=o),a&&(this.request=a),u&&(this.response=u,this.status=u.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.status}}}Le.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Le.ERR_BAD_OPTION="ERR_BAD_OPTION";Le.ECONNABORTED="ECONNABORTED";Le.ETIMEDOUT="ETIMEDOUT";Le.ERR_NETWORK="ERR_NETWORK";Le.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Le.ERR_DEPRECATED="ERR_DEPRECATED";Le.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Le.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Le.ERR_CANCELED="ERR_CANCELED";Le.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Le.ERR_INVALID_URL="ERR_INVALID_URL";const J=Le,VE=null;function Jo(i){return v.isPlainObject(i)||v.isArray(i)}function rf(i){return v.endsWith(i,"[]")?i.slice(0,-2):i}function ko(i,t,r){return i?i.concat(t).map(function(a,u){return a=rf(a),!r&&u?"["+a+"]":a}).join(r?".":""):t}function zE(i){return v.isArray(i)&&!i.some(Jo)}const GE=v.toFlatObject(v,{},null,function(t){return/^is[A-Z]/.test(t)});function os(i,t,r){if(!v.isObject(i))throw new TypeError("target must be an object");t=t||new FormData,r=v.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(N,P){return!v.isUndefined(P[N])});const o=r.metaTokens,a=r.visitor||b,u=r.dots,f=r.indexes,_=(r.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(t);if(!v.isFunction(a))throw new TypeError("visitor must be a function");function E(A){if(A===null)return"";if(v.isDate(A))return A.toISOString();if(v.isBoolean(A))return A.toString();if(!_&&v.isBlob(A))throw new J("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(A)||v.isTypedArray(A)?_&&typeof Blob=="function"?new Blob([A]):Buffer.from(A):A}function b(A,N,P){let Y=A;if(v.isReactNative(t)&&v.isReactNativeBlob(A))return t.append(ko(P,N,u),E(A)),!1;if(A&&!P&&typeof A=="object"){if(v.endsWith(N,"{}"))N=o?N:N.slice(0,-2),A=JSON.stringify(A);else if(v.isArray(A)&&zE(A)||(v.isFileList(A)||v.endsWith(N,"[]"))&&(Y=v.toArray(A)))return N=rf(N),Y.forEach(function(ee,le){!(v.isUndefined(ee)||ee===null)&&t.append(f===!0?ko([N],le,u):f===null?N:N+"[]",E(ee))}),!1}return Jo(A)?!0:(t.append(ko(P,N,u),E(A)),!1)}const O=[],k=Object.assign(GE,{defaultVisitor:b,convertValue:E,isVisitable:Jo});function G(A,N){if(!v.isUndefined(A)){if(O.indexOf(A)!==-1)throw Error("Circular reference detected in "+N.join("."));O.push(A),v.forEach(A,function(Y,we){(!(v.isUndefined(Y)||Y===null)&&a.call(t,Y,v.isString(we)?we.trim():we,N,k))===!0&&G(Y,N?N.concat(we):[we])}),O.pop()}}if(!v.isObject(i))throw new TypeError("data must be an object");return G(i),t}function cl(i){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(o){return t[o]})}function ca(i,t){this._pairs=[],i&&os(i,this,t)}const sf=ca.prototype;sf.append=function(t,r){this._pairs.push([t,r])};sf.toString=function(t){const r=t?function(o){return t.call(this,o,cl)}:cl;return this._pairs.map(function(a){return r(a[0])+"="+r(a[1])},"").join("&")};function KE(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function of(i,t,r){if(!t)return i;const o=r&&r.encode||KE,a=v.isFunction(r)?{serialize:r}:r,u=a&&a.serialize;let f;if(u?f=u(t,a):f=v.isURLSearchParams(t)?t.toString():new ca(t,a).toString(o),f){const p=i.indexOf("#");p!==-1&&(i=i.slice(0,p)),i+=(i.indexOf("?")===-1?"?":"&")+f}return i}class JE{constructor(){this.handlers=[]}use(t,r,o){return this.handlers.push({fulfilled:t,rejected:r,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){v.forEach(this.handlers,function(o){o!==null&&t(o)})}}const ul=JE,ua={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},jE=typeof URLSearchParams<"u"?URLSearchParams:ca,YE=typeof FormData<"u"?FormData:null,XE=typeof Blob<"u"?Blob:null,ZE={isBrowser:!0,classes:{URLSearchParams:jE,FormData:YE,Blob:XE},protocols:["http","https","file","blob","url","data"]},la=typeof window<"u"&&typeof document<"u",jo=typeof navigator=="object"&&navigator||void 0,QE=la&&(!jo||["ReactNative","NativeScript","NS"].indexOf(jo.product)<0),ev=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),tv=la&&window.location.href||"http://localhost",nv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:la,hasStandardBrowserEnv:QE,hasStandardBrowserWebWorkerEnv:ev,navigator:jo,origin:tv},Symbol.toStringTag,{value:"Module"})),Se={...nv,...ZE};function rv(i,t){return os(i,new Se.classes.URLSearchParams,{visitor:function(r,o,a,u){return Se.isNode&&v.isBuffer(r)?(this.append(o,r.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)},...t})}function iv(i){return v.matchAll(/\w+|\[(\w*)]/g,i).map(t=>t[0]==="[]"?"":t[1]||t[0])}function sv(i){const t={},r=Object.keys(i);let o;const a=r.length;let u;for(o=0;o<a;o++)u=r[o],t[u]=i[u];return t}function af(i){function t(r,o,a,u){let f=r[u++];if(f==="__proto__")return!0;const p=Number.isFinite(+f),_=u>=r.length;return f=!f&&v.isArray(a)?a.length:f,_?(v.hasOwnProp(a,f)?a[f]=[a[f],o]:a[f]=o,!p):((!a[f]||!v.isObject(a[f]))&&(a[f]=[]),t(r,o,a[f],u)&&v.isArray(a[f])&&(a[f]=sv(a[f])),!p)}if(v.isFormData(i)&&v.isFunction(i.entries)){const r={};return v.forEachEntry(i,(o,a)=>{t(iv(o),a,r,0)}),r}return null}function ov(i,t,r){if(v.isString(i))try{return(t||JSON.parse)(i),v.trim(i)}catch(o){if(o.name!=="SyntaxError")throw o}return(r||JSON.stringify)(i)}const fa={transitional:ua,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const o=r.getContentType()||"",a=o.indexOf("application/json")>-1,u=v.isObject(t);if(u&&v.isHTMLForm(t)&&(t=new FormData(t)),v.isFormData(t))return a?JSON.stringify(af(t)):t;if(v.isArrayBuffer(t)||v.isBuffer(t)||v.isStream(t)||v.isFile(t)||v.isBlob(t)||v.isReadableStream(t))return t;if(v.isArrayBufferView(t))return t.buffer;if(v.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let p;if(u){if(o.indexOf("application/x-www-form-urlencoded")>-1)return rv(t,this.formSerializer).toString();if((p=v.isFileList(t))||o.indexOf("multipart/form-data")>-1){const _=this.env&&this.env.FormData;return os(p?{"files[]":t}:t,_&&new _,this.formSerializer)}}return u||a?(r.setContentType("application/json",!1),ov(t)):t}],transformResponse:[function(t){const r=this.transitional||fa.transitional,o=r&&r.forcedJSONParsing,a=this.responseType==="json";if(v.isResponse(t)||v.isReadableStream(t))return t;if(t&&v.isString(t)&&(o&&!this.responseType||a)){const f=!(r&&r.silentJSONParsing)&&a;try{return JSON.parse(t,this.parseReviver)}catch(p){if(f)throw p.name==="SyntaxError"?J.from(p,J.ERR_BAD_RESPONSE,this,null,this.response):p}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Se.classes.FormData,Blob:Se.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],i=>{fa.headers[i]={}});const ha=fa,av=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),cv=i=>{const t={};let r,o,a;return i&&i.split(`
`).forEach(function(f){a=f.indexOf(":"),r=f.substring(0,a).trim().toLowerCase(),o=f.substring(a+1).trim(),!(!r||t[r]&&av[r])&&(r==="set-cookie"?t[r]?t[r].push(o):t[r]=[o]:t[r]=t[r]?t[r]+", "+o:o)}),t},ll=Symbol("internals");function Er(i){return i&&String(i).trim().toLowerCase()}function Wi(i){return i===!1||i==null?i:v.isArray(i)?i.map(Wi):String(i)}function uv(i){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=r.exec(i);)t[o[1]]=o[2];return t}const lv=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Uo(i,t,r,o,a){if(v.isFunction(o))return o.call(this,t,r);if(a&&(t=r),!!v.isString(t)){if(v.isString(o))return t.indexOf(o)!==-1;if(v.isRegExp(o))return o.test(t)}}function fv(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,o)=>r.toUpperCase()+o)}function hv(i,t){const r=v.toCamelCase(" "+t);["get","set","has"].forEach(o=>{Object.defineProperty(i,o+r,{value:function(a,u,f){return this[o].call(this,t,a,u,f)},configurable:!0})})}class as{constructor(t){t&&this.set(t)}set(t,r,o){const a=this;function u(p,_,E){const b=Er(_);if(!b)throw new Error("header name must be a non-empty string");const O=v.findKey(a,b);(!O||a[O]===void 0||E===!0||E===void 0&&a[O]!==!1)&&(a[O||_]=Wi(p))}const f=(p,_)=>v.forEach(p,(E,b)=>u(E,b,_));if(v.isPlainObject(t)||t instanceof this.constructor)f(t,r);else if(v.isString(t)&&(t=t.trim())&&!lv(t))f(cv(t),r);else if(v.isObject(t)&&v.isIterable(t)){let p={},_,E;for(const b of t){if(!v.isArray(b))throw TypeError("Object iterator must return a key-value pair");p[E=b[0]]=(_=p[E])?v.isArray(_)?[..._,b[1]]:[_,b[1]]:b[1]}f(p,r)}else t!=null&&u(r,t,o);return this}get(t,r){if(t=Er(t),t){const o=v.findKey(this,t);if(o){const a=this[o];if(!r)return a;if(r===!0)return uv(a);if(v.isFunction(r))return r.call(this,a,o);if(v.isRegExp(r))return r.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Er(t),t){const o=v.findKey(this,t);return!!(o&&this[o]!==void 0&&(!r||Uo(this,this[o],o,r)))}return!1}delete(t,r){const o=this;let a=!1;function u(f){if(f=Er(f),f){const p=v.findKey(o,f);p&&(!r||Uo(o,o[p],p,r))&&(delete o[p],a=!0)}}return v.isArray(t)?t.forEach(u):u(t),a}clear(t){const r=Object.keys(this);let o=r.length,a=!1;for(;o--;){const u=r[o];(!t||Uo(this,this[u],u,t,!0))&&(delete this[u],a=!0)}return a}normalize(t){const r=this,o={};return v.forEach(this,(a,u)=>{const f=v.findKey(o,u);if(f){r[f]=Wi(a),delete r[u];return}const p=t?fv(u):String(u).trim();p!==u&&delete r[u],r[p]=Wi(a),o[p]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return v.forEach(this,(o,a)=>{o!=null&&o!==!1&&(r[a]=t&&v.isArray(o)?o.join(", "):o)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const o=new this(t);return r.forEach(a=>o.set(a)),o}static accessor(t){const o=(this[ll]=this[ll]={accessors:{}}).accessors,a=this.prototype;function u(f){const p=Er(f);o[p]||(hv(a,f),o[p]=!0)}return v.isArray(t)?t.forEach(u):u(t),this}}as.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(as.prototype,({value:i},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>i,set(o){this[r]=o}}});v.freezeMethods(as);const ct=as;function Mo(i,t){const r=this||ha,o=t||r,a=ct.from(o.headers);let u=o.data;return v.forEach(i,function(p){u=p.call(r,u,a.normalize(),t?t.status:void 0)}),a.normalize(),u}function cf(i){return!!(i&&i.__CANCEL__)}class dv extends J{constructor(t,r,o){super(t??"canceled",J.ERR_CANCELED,r,o),this.name="CanceledError",this.__CANCEL__=!0}}const xr=dv;function uf(i,t,r){const o=r.config.validateStatus;!r.status||!o||o(r.status)?i(r):t(new J("Request failed with status code "+r.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function pv(i){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return t&&t[1]||""}function gv(i,t){i=i||10;const r=new Array(i),o=new Array(i);let a=0,u=0,f;return t=t!==void 0?t:1e3,function(_){const E=Date.now(),b=o[u];f||(f=E),r[a]=_,o[a]=E;let O=u,k=0;for(;O!==a;)k+=r[O++],O=O%i;if(a=(a+1)%i,a===u&&(u=(u+1)%i),E-f<t)return;const G=b&&E-b;return G?Math.round(k*1e3/G):void 0}}function mv(i,t){let r=0,o=1e3/t,a,u;const f=(E,b=Date.now())=>{r=b,a=null,u&&(clearTimeout(u),u=null),i(...E)};return[(...E)=>{const b=Date.now(),O=b-r;O>=o?f(E,b):(a=E,u||(u=setTimeout(()=>{u=null,f(a)},o-O)))},()=>a&&f(a)]}const Ji=(i,t,r=3)=>{let o=0;const a=gv(50,250);return mv(u=>{const f=u.loaded,p=u.lengthComputable?u.total:void 0,_=f-o,E=a(_),b=f<=p;o=f;const O={loaded:f,total:p,progress:p?f/p:void 0,bytes:_,rate:E||void 0,estimated:E&&p&&b?(p-f)/E:void 0,event:u,lengthComputable:p!=null,[t?"download":"upload"]:!0};i(O)},r)},fl=(i,t)=>{const r=i!=null;return[o=>t[0]({lengthComputable:r,total:i,loaded:o}),t[1]]},hl=i=>(...t)=>v.asap(()=>i(...t)),_v=Se.hasStandardBrowserEnv?((i,t)=>r=>(r=new URL(r,Se.origin),i.protocol===r.protocol&&i.host===r.host&&(t||i.port===r.port)))(new URL(Se.origin),Se.navigator&&/(msie|trident)/i.test(Se.navigator.userAgent)):()=>!0,wv=Se.hasStandardBrowserEnv?{write(i,t,r,o,a,u,f){if(typeof document>"u")return;const p=[`${i}=${encodeURIComponent(t)}`];v.isNumber(r)&&p.push(`expires=${new Date(r).toUTCString()}`),v.isString(o)&&p.push(`path=${o}`),v.isString(a)&&p.push(`domain=${a}`),u===!0&&p.push("secure"),v.isString(f)&&p.push(`SameSite=${f}`),document.cookie=p.join("; ")},read(i){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+i+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(i){this.write(i,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function yv(i){return typeof i!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function Ev(i,t){return t?i.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):i}function lf(i,t,r){let o=!yv(t);return i&&(o||r==!1)?Ev(i,t):t}const dl=i=>i instanceof ct?{...i}:i;function yn(i,t){t=t||{};const r={};function o(E,b,O,k){return v.isPlainObject(E)&&v.isPlainObject(b)?v.merge.call({caseless:k},E,b):v.isPlainObject(b)?v.merge({},b):v.isArray(b)?b.slice():b}function a(E,b,O,k){if(v.isUndefined(b)){if(!v.isUndefined(E))return o(void 0,E,O,k)}else return o(E,b,O,k)}function u(E,b){if(!v.isUndefined(b))return o(void 0,b)}function f(E,b){if(v.isUndefined(b)){if(!v.isUndefined(E))return o(void 0,E)}else return o(void 0,b)}function p(E,b,O){if(O in t)return o(E,b);if(O in i)return o(void 0,E)}const _={url:u,method:u,data:u,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:p,headers:(E,b,O)=>a(dl(E),dl(b),O,!0)};return v.forEach(Object.keys({...i,...t}),function(b){if(b==="__proto__"||b==="constructor"||b==="prototype")return;const O=v.hasOwnProp(_,b)?_[b]:a,k=O(i[b],t[b],b);v.isUndefined(k)&&O!==p||(r[b]=k)}),r}const ff=i=>{const t=yn({},i);let{data:r,withXSRFToken:o,xsrfHeaderName:a,xsrfCookieName:u,headers:f,auth:p}=t;if(t.headers=f=ct.from(f),t.url=of(lf(t.baseURL,t.url,t.allowAbsoluteUrls),i.params,i.paramsSerializer),p&&f.set("Authorization","Basic "+btoa((p.username||"")+":"+(p.password?unescape(encodeURIComponent(p.password)):""))),v.isFormData(r)){if(Se.hasStandardBrowserEnv||Se.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if(v.isFunction(r.getHeaders)){const _=r.getHeaders(),E=["content-type","content-length"];Object.entries(_).forEach(([b,O])=>{E.includes(b.toLowerCase())&&f.set(b,O)})}}if(Se.hasStandardBrowserEnv&&(o&&v.isFunction(o)&&(o=o(t)),o||o!==!1&&_v(t.url))){const _=a&&u&&wv.read(u);_&&f.set(a,_)}return t},vv=typeof XMLHttpRequest<"u",Iv=vv&&function(i){return new Promise(function(r,o){const a=ff(i);let u=a.data;const f=ct.from(a.headers).normalize();let{responseType:p,onUploadProgress:_,onDownloadProgress:E}=a,b,O,k,G,A;function N(){G&&G(),A&&A(),a.cancelToken&&a.cancelToken.unsubscribe(b),a.signal&&a.signal.removeEventListener("abort",b)}let P=new XMLHttpRequest;P.open(a.method.toUpperCase(),a.url,!0),P.timeout=a.timeout;function Y(){if(!P)return;const ee=ct.from("getAllResponseHeaders"in P&&P.getAllResponseHeaders()),ae={data:!p||p==="text"||p==="json"?P.responseText:P.response,status:P.status,statusText:P.statusText,headers:ee,config:i,request:P};uf(function(ce){r(ce),N()},function(ce){o(ce),N()},ae),P=null}"onloadend"in P?P.onloadend=Y:P.onreadystatechange=function(){!P||P.readyState!==4||P.status===0&&!(P.responseURL&&P.responseURL.indexOf("file:")===0)||setTimeout(Y)},P.onabort=function(){P&&(o(new J("Request aborted",J.ECONNABORTED,i,P)),P=null)},P.onerror=function(le){const ae=le&&le.message?le.message:"Network Error",xe=new J(ae,J.ERR_NETWORK,i,P);xe.event=le||null,o(xe),P=null},P.ontimeout=function(){let le=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const ae=a.transitional||ua;a.timeoutErrorMessage&&(le=a.timeoutErrorMessage),o(new J(le,ae.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,i,P)),P=null},u===void 0&&f.setContentType(null),"setRequestHeader"in P&&v.forEach(f.toJSON(),function(le,ae){P.setRequestHeader(ae,le)}),v.isUndefined(a.withCredentials)||(P.withCredentials=!!a.withCredentials),p&&p!=="json"&&(P.responseType=a.responseType),E&&([k,A]=Ji(E,!0),P.addEventListener("progress",k)),_&&P.upload&&([O,G]=Ji(_),P.upload.addEventListener("progress",O),P.upload.addEventListener("loadend",G)),(a.cancelToken||a.signal)&&(b=ee=>{P&&(o(!ee||ee.type?new xr(null,i,P):ee),P.abort(),P=null)},a.cancelToken&&a.cancelToken.subscribe(b),a.signal&&(a.signal.aborted?b():a.signal.addEventListener("abort",b)));const we=pv(a.url);if(we&&Se.protocols.indexOf(we)===-1){o(new J("Unsupported protocol "+we+":",J.ERR_BAD_REQUEST,i));return}P.send(u||null)})},bv=(i,t)=>{const{length:r}=i=i?i.filter(Boolean):[];if(t||r){let o=new AbortController,a;const u=function(E){if(!a){a=!0,p();const b=E instanceof Error?E:this.reason;o.abort(b instanceof J?b:new xr(b instanceof Error?b.message:b))}};let f=t&&setTimeout(()=>{f=null,u(new J(`timeout of ${t}ms exceeded`,J.ETIMEDOUT))},t);const p=()=>{i&&(f&&clearTimeout(f),f=null,i.forEach(E=>{E.unsubscribe?E.unsubscribe(u):E.removeEventListener("abort",u)}),i=null)};i.forEach(E=>E.addEventListener("abort",u));const{signal:_}=o;return _.unsubscribe=()=>v.asap(p),_}},Tv=bv,Sv=function*(i,t){let r=i.byteLength;if(!t||r<t){yield i;return}let o=0,a;for(;o<r;)a=o+t,yield i.slice(o,a),o=a},Rv=async function*(i,t){for await(const r of Av(i))yield*Sv(r,t)},Av=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const t=i.getReader();try{for(;;){const{done:r,value:o}=await t.read();if(r)break;yield o}}finally{await t.cancel()}},pl=(i,t,r,o)=>{const a=Rv(i,t);let u=0,f,p=_=>{f||(f=!0,o&&o(_))};return new ReadableStream({async pull(_){try{const{done:E,value:b}=await a.next();if(E){p(),_.close();return}let O=b.byteLength;if(r){let k=u+=O;r(k)}_.enqueue(new Uint8Array(b))}catch(E){throw p(E),E}},cancel(_){return p(_),a.return()}},{highWaterMark:2})},gl=64*1024,{isFunction:Ui}=v,Cv=(({Request:i,Response:t})=>({Request:i,Response:t}))(v.global),{ReadableStream:ml,TextEncoder:_l}=v.global,wl=(i,...t)=>{try{return!!i(...t)}catch{return!1}},Ov=i=>{i=v.merge.call({skipUndefined:!0},Cv,i);const{fetch:t,Request:r,Response:o}=i,a=t?Ui(t):typeof fetch=="function",u=Ui(r),f=Ui(o);if(!a)return!1;const p=a&&Ui(ml),_=a&&(typeof _l=="function"?(A=>N=>A.encode(N))(new _l):async A=>new Uint8Array(await new r(A).arrayBuffer())),E=u&&p&&wl(()=>{let A=!1;const N=new r(Se.origin,{body:new ml,method:"POST",get duplex(){return A=!0,"half"}}).headers.has("Content-Type");return A&&!N}),b=f&&p&&wl(()=>v.isReadableStream(new o("").body)),O={stream:b&&(A=>A.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(A=>{!O[A]&&(O[A]=(N,P)=>{let Y=N&&N[A];if(Y)return Y.call(N);throw new J(`Response type '${A}' is not supported`,J.ERR_NOT_SUPPORT,P)})});const k=async A=>{if(A==null)return 0;if(v.isBlob(A))return A.size;if(v.isSpecCompliantForm(A))return(await new r(Se.origin,{method:"POST",body:A}).arrayBuffer()).byteLength;if(v.isArrayBufferView(A)||v.isArrayBuffer(A))return A.byteLength;if(v.isURLSearchParams(A)&&(A=A+""),v.isString(A))return(await _(A)).byteLength},G=async(A,N)=>{const P=v.toFiniteNumber(A.getContentLength());return P??k(N)};return async A=>{let{url:N,method:P,data:Y,signal:we,cancelToken:ee,timeout:le,onDownloadProgress:ae,onUploadProgress:xe,responseType:ce,headers:Et,withCredentials:Ft="same-origin",fetchOptions:Wr}=ff(A),Hr=t||fetch;ce=ce?(ce+"").toLowerCase():"text";let In=Tv([we,ee&&ee.toAbortSignal()],le),on=null;const ft=In&&In.unsubscribe&&(()=>{In.unsubscribe()});let $r;try{if(xe&&E&&P!=="get"&&P!=="head"&&($r=await G(Et,Y))!==0){let pe=new r(N,{method:"POST",body:Y,duplex:"half"}),Bt;if(v.isFormData(Y)&&(Bt=pe.headers.get("content-type"))&&Et.setContentType(Bt),pe.body){const[Yn,Tn]=fl($r,Ji(hl(xe)));Y=pl(pe.body,gl,Yn,Tn)}}v.isString(Ft)||(Ft=Ft?"include":"omit");const Ie=u&&"credentials"in r.prototype,ht={...Wr,signal:In,method:P.toUpperCase(),headers:Et.normalize().toJSON(),body:Y,duplex:"half",credentials:Ie?Ft:void 0};on=u&&new r(N,ht);let ye=await(u?Hr(on,Wr):Hr(N,ht));const qr=b&&(ce==="stream"||ce==="response");if(b&&(ae||qr&&ft)){const pe={};["status","statusText","headers"].forEach(vt=>{pe[vt]=ye[vt]});const Bt=v.toFiniteNumber(ye.headers.get("content-length")),[Yn,Tn]=ae&&fl(Bt,Ji(hl(ae),!0))||[];ye=new o(pl(ye.body,gl,Yn,()=>{Tn&&Tn(),ft&&ft()}),pe)}ce=ce||"text";let bn=await O[v.findKey(O,ce)||"text"](ye,A);return!qr&&ft&&ft(),await new Promise((pe,Bt)=>{uf(pe,Bt,{data:bn,headers:ct.from(ye.headers),status:ye.status,statusText:ye.statusText,config:A,request:on})})}catch(Ie){throw ft&&ft(),Ie&&Ie.name==="TypeError"&&/Load failed|fetch/i.test(Ie.message)?Object.assign(new J("Network Error",J.ERR_NETWORK,A,on,Ie&&Ie.response),{cause:Ie.cause||Ie}):J.from(Ie,Ie&&Ie.code,A,on,Ie&&Ie.response)}}},Pv=new Map,hf=i=>{let t=i&&i.env||{};const{fetch:r,Request:o,Response:a}=t,u=[o,a,r];let f=u.length,p=f,_,E,b=Pv;for(;p--;)_=u[p],E=b.get(_),E===void 0&&b.set(_,E=p?new Map:Ov(t)),b=E;return E};hf();const da={http:VE,xhr:Iv,fetch:{get:hf}};v.forEach(da,(i,t)=>{if(i){try{Object.defineProperty(i,"name",{value:t})}catch{}Object.defineProperty(i,"adapterName",{value:t})}});const yl=i=>`- ${i}`,Lv=i=>v.isFunction(i)||i===null||i===!1;function xv(i,t){i=v.isArray(i)?i:[i];const{length:r}=i;let o,a;const u={};for(let f=0;f<r;f++){o=i[f];let p;if(a=o,!Lv(o)&&(a=da[(p=String(o)).toLowerCase()],a===void 0))throw new J(`Unknown adapter '${p}'`);if(a&&(v.isFunction(a)||(a=a.get(t))))break;u[p||"#"+f]=a}if(!a){const f=Object.entries(u).map(([_,E])=>`adapter ${_} `+(E===!1?"is not supported by the environment":"is not available in the build"));let p=r?f.length>1?`since :
`+f.map(yl).join(`
`):" "+yl(f[0]):"as no adapter specified";throw new J("There is no suitable adapter to dispatch the request "+p,"ERR_NOT_SUPPORT")}return a}const df={getAdapter:xv,adapters:da};function Fo(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new xr(null,i)}function El(i){return Fo(i),i.headers=ct.from(i.headers),i.data=Mo.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),df.getAdapter(i.adapter||ha.adapter,i)(i).then(function(o){return Fo(i),o.data=Mo.call(i,i.transformResponse,o),o.headers=ct.from(o.headers),o},function(o){return cf(o)||(Fo(i),o&&o.response&&(o.response.data=Mo.call(i,i.transformResponse,o.response),o.response.headers=ct.from(o.response.headers))),Promise.reject(o)})}const pf="1.13.6",cs={};["object","boolean","number","function","string","symbol"].forEach((i,t)=>{cs[i]=function(o){return typeof o===i||"a"+(t<1?"n ":" ")+i}});const vl={};cs.transitional=function(t,r,o){function a(u,f){return"[Axios v"+pf+"] Transitional option '"+u+"'"+f+(o?". "+o:"")}return(u,f,p)=>{if(t===!1)throw new J(a(f," has been removed"+(r?" in "+r:"")),J.ERR_DEPRECATED);return r&&!vl[f]&&(vl[f]=!0,console.warn(a(f," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(u,f,p):!0}};cs.spelling=function(t){return(r,o)=>(console.warn(`${o} is likely a misspelling of ${t}`),!0)};function Nv(i,t,r){if(typeof i!="object")throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const o=Object.keys(i);let a=o.length;for(;a-- >0;){const u=o[a],f=t[u];if(f){const p=i[u],_=p===void 0||f(p,u,i);if(_!==!0)throw new J("option "+u+" must be "+_,J.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new J("Unknown option "+u,J.ERR_BAD_OPTION)}}const Hi={assertOptions:Nv,validators:cs},Qe=Hi.validators;class ji{constructor(t){this.defaults=t||{},this.interceptors={request:new ul,response:new ul}}async request(t,r){try{return await this._request(t,r)}catch(o){if(o instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const u=a.stack?a.stack.replace(/^.+\n/,""):"";try{o.stack?u&&!String(o.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+u):o.stack=u}catch{}}throw o}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=yn(this.defaults,r);const{transitional:o,paramsSerializer:a,headers:u}=r;o!==void 0&&Hi.assertOptions(o,{silentJSONParsing:Qe.transitional(Qe.boolean),forcedJSONParsing:Qe.transitional(Qe.boolean),clarifyTimeoutError:Qe.transitional(Qe.boolean),legacyInterceptorReqResOrdering:Qe.transitional(Qe.boolean)},!1),a!=null&&(v.isFunction(a)?r.paramsSerializer={serialize:a}:Hi.assertOptions(a,{encode:Qe.function,serialize:Qe.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Hi.assertOptions(r,{baseUrl:Qe.spelling("baseURL"),withXsrfToken:Qe.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let f=u&&v.merge(u.common,u[r.method]);u&&v.forEach(["delete","get","head","post","put","patch","common"],A=>{delete u[A]}),r.headers=ct.concat(f,u);const p=[];let _=!0;this.interceptors.request.forEach(function(N){if(typeof N.runWhen=="function"&&N.runWhen(r)===!1)return;_=_&&N.synchronous;const P=r.transitional||ua;P&&P.legacyInterceptorReqResOrdering?p.unshift(N.fulfilled,N.rejected):p.push(N.fulfilled,N.rejected)});const E=[];this.interceptors.response.forEach(function(N){E.push(N.fulfilled,N.rejected)});let b,O=0,k;if(!_){const A=[El.bind(this),void 0];for(A.unshift(...p),A.push(...E),k=A.length,b=Promise.resolve(r);O<k;)b=b.then(A[O++],A[O++]);return b}k=p.length;let G=r;for(;O<k;){const A=p[O++],N=p[O++];try{G=A(G)}catch(P){N.call(this,P);break}}try{b=El.call(this,G)}catch(A){return Promise.reject(A)}for(O=0,k=E.length;O<k;)b=b.then(E[O++],E[O++]);return b}getUri(t){t=yn(this.defaults,t);const r=lf(t.baseURL,t.url,t.allowAbsoluteUrls);return of(r,t.params,t.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(t){ji.prototype[t]=function(r,o){return this.request(yn(o||{},{method:t,url:r,data:(o||{}).data}))}});v.forEach(["post","put","patch"],function(t){function r(o){return function(u,f,p){return this.request(yn(p||{},{method:t,headers:o?{"Content-Type":"multipart/form-data"}:{},url:u,data:f}))}}ji.prototype[t]=r(),ji.prototype[t+"Form"]=r(!0)});const $i=ji;class pa{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(u){r=u});const o=this;this.promise.then(a=>{if(!o._listeners)return;let u=o._listeners.length;for(;u-- >0;)o._listeners[u](a);o._listeners=null}),this.promise.then=a=>{let u;const f=new Promise(p=>{o.subscribe(p),u=p}).then(a);return f.cancel=function(){o.unsubscribe(u)},f},t(function(u,f,p){o.reason||(o.reason=new xr(u,f,p),r(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=o=>{t.abort(o)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new pa(function(a){t=a}),cancel:t}}}const Dv=pa;function kv(i){return function(r){return i.apply(null,r)}}function Uv(i){return v.isObject(i)&&i.isAxiosError===!0}const Yo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Yo).forEach(([i,t])=>{Yo[t]=i});const Mv=Yo;function gf(i){const t=new $i(i),r=jl($i.prototype.request,t);return v.extend(r,$i.prototype,t,{allOwnKeys:!0}),v.extend(r,t,null,{allOwnKeys:!0}),r.create=function(a){return gf(yn(i,a))},r}const de=gf(ha);de.Axios=$i;de.CanceledError=xr;de.CancelToken=Dv;de.isCancel=cf;de.VERSION=pf;de.toFormData=os;de.AxiosError=J;de.Cancel=de.CanceledError;de.all=function(t){return Promise.all(t)};de.spread=kv;de.isAxiosError=Uv;de.mergeConfig=yn;de.AxiosHeaders=ct;de.formToJSON=i=>af(v.isHTMLForm(i)?new FormData(i):i);de.getAdapter=df.getAdapter;de.HttpStatusCode=Mv;de.default=de;const Fv=de;window._=tE;window.axios=Fv;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const Bv=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=function(i){const t=[];let r=0;for(let o=0;o<i.length;o++){let a=i.charCodeAt(o);a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=a&63|128):(a&64512)===55296&&o+1<i.length&&(i.charCodeAt(o+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++o)&1023),t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=a&63|128):(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=a&63|128)}return t},Wv=function(i){const t=[];let r=0,o=0;for(;r<i.length;){const a=i[r++];if(a<128)t[o++]=String.fromCharCode(a);else if(a>191&&a<224){const u=i[r++];t[o++]=String.fromCharCode((a&31)<<6|u&63)}else if(a>239&&a<365){const u=i[r++],f=i[r++],p=i[r++],_=((a&7)<<18|(u&63)<<12|(f&63)<<6|p&63)-65536;t[o++]=String.fromCharCode(55296+(_>>10)),t[o++]=String.fromCharCode(56320+(_&1023))}else{const u=i[r++],f=i[r++];t[o++]=String.fromCharCode((a&15)<<12|(u&63)<<6|f&63)}}return t.join("")},_f={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let a=0;a<i.length;a+=3){const u=i[a],f=a+1<i.length,p=f?i[a+1]:0,_=a+2<i.length,E=_?i[a+2]:0,b=u>>2,O=(u&3)<<4|p>>4;let k=(p&15)<<2|E>>6,G=E&63;_||(G=64,f||(k=64)),o.push(r[b],r[O],r[k],r[G])}return o.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(mf(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):Wv(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let a=0;a<i.length;){const u=r[i.charAt(a++)],p=a<i.length?r[i.charAt(a)]:0;++a;const E=a<i.length?r[i.charAt(a)]:64;++a;const O=a<i.length?r[i.charAt(a)]:64;if(++a,u==null||p==null||E==null||O==null)throw new Hv;const k=u<<2|p>>4;if(o.push(k),E!==64){const G=p<<4&240|E>>2;if(o.push(G),O!==64){const A=E<<6&192|O;o.push(A)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Hv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $v=function(i){const t=mf(i);return _f.encodeByteArray(t,!0)},wf=function(i){return $v(i).replace(/\./g,"")},yf=function(i){try{return _f.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=()=>qv().__FIREBASE_DEFAULTS__,zv=()=>{if(typeof process>"u"||typeof process.env>"u")return;const i={}.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},Gv=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&yf(i[1]);return t&&JSON.parse(t)},ga=()=>{try{return Bv()||Vv()||zv()||Gv()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Kv=i=>{var t,r;return(r=(t=ga())==null?void 0:t.emulatorHosts)==null?void 0:r[i]},Ef=()=>{var i;return(i=ga())==null?void 0:i.config},vf=i=>{var t;return(t=ga())==null?void 0:t[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,o)=>{r?this.reject(r):this.resolve(o),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,o))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Yv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Xv(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function Zv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qv(){const i=Pe();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function eI(){try{return typeof indexedDB=="object"}catch{return!1}}function tI(){return new Promise((i,t)=>{try{let r=!0;const o="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(o);a.onsuccess=()=>{a.result.close(),r||self.indexedDB.deleteDatabase(o),i(!0)},a.onupgradeneeded=()=>{r=!1},a.onerror=()=>{var u;t(((u=a.error)==null?void 0:u.message)||"")}}catch(r){t(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="FirebaseError";class rn extends Error{constructor(t,r,o){super(r),this.code=t,this.customData=o,this.name=nI,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nr.prototype.create)}}class Nr{constructor(t,r,o){this.service=t,this.serviceName=r,this.errors=o}create(t,...r){const o=r[0]||{},a=`${this.service}/${t}`,u=this.errors[t],f=u?rI(u,o):"Error",p=`${this.serviceName}: ${f} (${a}).`;return new rn(a,p,o)}}function rI(i,t){return i.replace(iI,(r,o)=>{const a=t[o];return a!=null?String(a):`<${o}?>`})}const iI=/\{\$([^}]+)}/g;function sI(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function zn(i,t){if(i===t)return!0;const r=Object.keys(i),o=Object.keys(t);for(const a of r){if(!o.includes(a))return!1;const u=i[a],f=t[a];if(Il(u)&&Il(f)){if(!zn(u,f))return!1}else if(u!==f)return!1}for(const a of o)if(!r.includes(a))return!1;return!0}function Il(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(i){const t=[];for(const[r,o]of Object.entries(i))Array.isArray(o)?o.forEach(a=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(a))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(o));return t.length?"&"+t.join("&"):""}function br(i){const t={};return i.replace(/^\?/,"").split("&").forEach(o=>{if(o){const[a,u]=o.split("=");t[decodeURIComponent(a)]=decodeURIComponent(u)}}),t}function Tr(i){const t=i.indexOf("?");if(!t)return"";const r=i.indexOf("#",t);return i.substring(t,r>0?r:void 0)}function oI(i,t){const r=new aI(i,t);return r.subscribe.bind(r)}class aI{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(o=>{this.error(o)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,o){let a;if(t===void 0&&r===void 0&&o===void 0)throw new Error("Missing Observer.");cI(t,["next","error","complete"])?a=t:a={next:t,error:r,complete:o},a.next===void 0&&(a.next=Bo),a.error===void 0&&(a.error=Bo),a.complete===void 0&&(a.complete=Bo);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cI(i,t){if(typeof i!="object"||i===null)return!1;for(const r of t)if(r in i&&typeof i[r]=="function")return!0;return!1}function Bo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function uI(i){return(await fetch(i,{credentials:"include"})).ok}class Gn{constructor(t,r,o){this.name=t,this.instanceFactory=r,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const o=new Jv;if(this.instancesDeferred.set(r,o),this.isInitialized(r)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:r});a&&o.resolve(a)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(t==null?void 0:t.optional)??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(hI(t))try{this.getOrInitializeService({instanceIdentifier:mn})}catch{}for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);try{const u=this.getOrInitializeService({instanceIdentifier:a});o.resolve(u)}catch{}}}}clearInstance(t=mn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=mn){return this.instances.has(t)}getOptions(t=mn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:o,options:r});for(const[u,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);o===p&&f.resolve(a)}return a}onInit(t,r){const o=this.normalizeInstanceIdentifier(r),a=this.onInitCallbacks.get(o)??new Set;a.add(t),this.onInitCallbacks.set(o,a);const u=this.instances.get(o);return u&&t(u,o),()=>{a.delete(t)}}invokeOnInitCallbacks(t,r){const o=this.onInitCallbacks.get(r);if(o)for(const a of o)try{a(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let o=this.instances.get(t);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:fI(t),options:r}),this.instances.set(t,o),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(o,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,o)}catch{}return o||null}normalizeInstanceIdentifier(t=mn){return this.component?this.component.multipleInstances?t:mn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fI(i){return i===mn?void 0:i}function hI(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new lI(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ne||(ne={}));const pI={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},gI=ne.INFO,mI={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},_I=(i,t,...r)=>{if(t<i.logLevel)return;const o=new Date().toISOString(),a=mI[t];if(a)console[a](`[${o}]  ${i.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class If{constructor(t){this.name=t,this._logLevel=gI,this._logHandler=_I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ne))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?pI[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...t),this._logHandler(this,ne.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...t),this._logHandler(this,ne.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...t),this._logHandler(this,ne.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...t),this._logHandler(this,ne.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...t),this._logHandler(this,ne.ERROR,...t)}}const wI=(i,t)=>t.some(r=>i instanceof r);let bl,Tl;function yI(){return bl||(bl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EI(){return Tl||(Tl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bf=new WeakMap,Xo=new WeakMap,Tf=new WeakMap,Wo=new WeakMap,_a=new WeakMap;function vI(i){const t=new Promise((r,o)=>{const a=()=>{i.removeEventListener("success",u),i.removeEventListener("error",f)},u=()=>{r(tn(i.result)),a()},f=()=>{o(i.error),a()};i.addEventListener("success",u),i.addEventListener("error",f)});return t.then(r=>{r instanceof IDBCursor&&bf.set(r,i)}).catch(()=>{}),_a.set(t,i),t}function II(i){if(Xo.has(i))return;const t=new Promise((r,o)=>{const a=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",f),i.removeEventListener("abort",f)},u=()=>{r(),a()},f=()=>{o(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",u),i.addEventListener("error",f),i.addEventListener("abort",f)});Xo.set(i,t)}let Zo={get(i,t,r){if(i instanceof IDBTransaction){if(t==="done")return Xo.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Tf.get(i);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return tn(i[t])},set(i,t,r){return i[t]=r,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function bI(i){Zo=i(Zo)}function TI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const o=i.call(Ho(this),t,...r);return Tf.set(o,t.sort?t.sort():[t]),tn(o)}:EI().includes(i)?function(...t){return i.apply(Ho(this),t),tn(bf.get(this))}:function(...t){return tn(i.apply(Ho(this),t))}}function SI(i){return typeof i=="function"?TI(i):(i instanceof IDBTransaction&&II(i),wI(i,yI())?new Proxy(i,Zo):i)}function tn(i){if(i instanceof IDBRequest)return vI(i);if(Wo.has(i))return Wo.get(i);const t=SI(i);return t!==i&&(Wo.set(i,t),_a.set(t,i)),t}const Ho=i=>_a.get(i);function RI(i,t,{blocked:r,upgrade:o,blocking:a,terminated:u}={}){const f=indexedDB.open(i,t),p=tn(f);return o&&f.addEventListener("upgradeneeded",_=>{o(tn(f.result),_.oldVersion,_.newVersion,tn(f.transaction),_)}),r&&f.addEventListener("blocked",_=>r(_.oldVersion,_.newVersion,_)),p.then(_=>{u&&_.addEventListener("close",()=>u()),a&&_.addEventListener("versionchange",E=>a(E.oldVersion,E.newVersion,E))}).catch(()=>{}),p}const AI=["get","getKey","getAll","getAllKeys","count"],CI=["put","add","delete","clear"],$o=new Map;function Sl(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if($o.get(t))return $o.get(t);const r=t.replace(/FromIndex$/,""),o=t!==r,a=CI.includes(r);if(!(r in(o?IDBIndex:IDBObjectStore).prototype)||!(a||AI.includes(r)))return;const u=async function(f,...p){const _=this.transaction(f,a?"readwrite":"readonly");let E=_.store;return o&&(E=E.index(p.shift())),(await Promise.all([E[r](...p),a&&_.done]))[0]};return $o.set(t,u),u}bI(i=>({...i,get:(t,r,o)=>Sl(t,r)||i.get(t,r,o),has:(t,r)=>!!Sl(t,r)||i.has(t,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(PI(r)){const o=r.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(r=>r).join(" ")}}function PI(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Qo="@firebase/app",Rl="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new If("@firebase/app"),LI="@firebase/app-compat",xI="@firebase/analytics-compat",NI="@firebase/analytics",DI="@firebase/app-check-compat",kI="@firebase/app-check",UI="@firebase/auth",MI="@firebase/auth-compat",FI="@firebase/database",BI="@firebase/data-connect",WI="@firebase/database-compat",HI="@firebase/functions",$I="@firebase/functions-compat",qI="@firebase/installations",VI="@firebase/installations-compat",zI="@firebase/messaging",GI="@firebase/messaging-compat",KI="@firebase/performance",JI="@firebase/performance-compat",jI="@firebase/remote-config",YI="@firebase/remote-config-compat",XI="@firebase/storage",ZI="@firebase/storage-compat",QI="@firebase/firestore",eb="@firebase/ai",tb="@firebase/firestore-compat",nb="firebase",rb="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="[DEFAULT]",ib={[Qo]:"fire-core",[LI]:"fire-core-compat",[NI]:"fire-analytics",[xI]:"fire-analytics-compat",[kI]:"fire-app-check",[DI]:"fire-app-check-compat",[UI]:"fire-auth",[MI]:"fire-auth-compat",[FI]:"fire-rtdb",[BI]:"fire-data-connect",[WI]:"fire-rtdb-compat",[HI]:"fire-fn",[$I]:"fire-fn-compat",[qI]:"fire-iid",[VI]:"fire-iid-compat",[zI]:"fire-fcm",[GI]:"fire-fcm-compat",[KI]:"fire-perf",[JI]:"fire-perf-compat",[jI]:"fire-rc",[YI]:"fire-rc-compat",[XI]:"fire-gcs",[ZI]:"fire-gcs-compat",[QI]:"fire-fst",[tb]:"fire-fst-compat",[eb]:"fire-vertex","fire-js":"fire-js",[nb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new Map,sb=new Map,ta=new Map;function Al(i,t){try{i.container.addComponent(t)}catch(r){kt.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,r)}}function Rr(i){const t=i.name;if(ta.has(t))return kt.debug(`There were multiple attempts to register component ${t}.`),!1;ta.set(t,i);for(const r of Yi.values())Al(r,i);for(const r of sb.values())Al(r,i);return!0}function Sf(i,t){const r=i.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),i.container.getProvider(t)}function Ve(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nn=new Nr("app","Firebase",ob);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(t,r,o){this._isDeleted=!1,this._options={...t},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=rb;function Rf(i,t={}){let r=i;typeof t!="object"&&(t={name:t});const o={name:ea,automaticDataCollectionEnabled:!0,...t},a=o.name;if(typeof a!="string"||!a)throw nn.create("bad-app-name",{appName:String(a)});if(r||(r=Ef()),!r)throw nn.create("no-options");const u=Yi.get(a);if(u){if(zn(r,u.options)&&zn(o,u.config))return u;throw nn.create("duplicate-app",{appName:a})}const f=new dI(a);for(const _ of ta.values())f.addComponent(_);const p=new ab(r,o,f);return Yi.set(a,p),p}function cb(i=ea){const t=Yi.get(i);if(!t&&i===ea&&Ef())return Rf();if(!t)throw nn.create("no-app",{appName:i});return t}function Wn(i,t,r){let o=ib[i]??i;r&&(o+=`-${r}`);const a=o.match(/\s|\//),u=t.match(/\s|\//);if(a||u){const f=[`Unable to register library "${o}" with version "${t}":`];a&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kt.warn(f.join(" "));return}Rr(new Gn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub="firebase-heartbeat-database",lb=1,Ar="firebase-heartbeat-store";let qo=null;function Af(){return qo||(qo=RI(ub,lb,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(Ar)}catch(r){console.warn(r)}}}}).catch(i=>{throw nn.create("idb-open",{originalErrorMessage:i.message})})),qo}async function fb(i){try{const r=(await Af()).transaction(Ar),o=await r.objectStore(Ar).get(Cf(i));return await r.done,o}catch(t){if(t instanceof rn)kt.warn(t.message);else{const r=nn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});kt.warn(r.message)}}}async function Cl(i,t){try{const o=(await Af()).transaction(Ar,"readwrite");await o.objectStore(Ar).put(t,Cf(i)),await o.done}catch(r){if(r instanceof rn)kt.warn(r.message);else{const o=nn.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});kt.warn(o.message)}}}function Cf(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb=1024,db=30;class pb{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new mb(r),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var t,r;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Ol();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)==null?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:a}),this._heartbeatsCache.heartbeats.length>db){const f=_b(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){kt.warn(o)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Ol(),{heartbeatsToSend:o,unsentEntries:a}=gb(this._heartbeatsCache.heartbeats),u=wf(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=r,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(r){return kt.warn(r),""}}}function Ol(){return new Date().toISOString().substring(0,10)}function gb(i,t=hb){const r=[];let o=i.slice();for(const a of i){const u=r.find(f=>f.agent===a.agent);if(u){if(u.dates.push(a.date),Pl(r)>t){u.dates.pop();break}}else if(r.push({agent:a.agent,dates:[a.date]}),Pl(r)>t){r.pop();break}o=o.slice(1)}return{heartbeatsToSend:r,unsentEntries:o}}class mb{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eI()?tI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await fb(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const o=await this.read();return Cl(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const o=await this.read();return Cl(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Pl(i){return wf(JSON.stringify({version:2,heartbeats:i})).length}function _b(i){if(i.length===0)return-1;let t=0,r=i[0].date;for(let o=1;o<i.length;o++)i[o].date<r&&(r=i[o].date,t=o);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(i){Rr(new Gn("platform-logger",t=>new OI(t),"PRIVATE")),Rr(new Gn("heartbeat",t=>new pb(t),"PRIVATE")),Wn(Qo,Rl,i),Wn(Qo,Rl,"esm2020"),Wn("fire-js","")}wb("");var yb="firebase",Eb="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wn(yb,Eb,"app");function Of(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vb=Of,Pf=new Nr("auth","Firebase",Of());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new If("@firebase/auth");function Ib(i,...t){Xi.logLevel<=ne.WARN&&Xi.warn(`Auth (${kr}): ${i}`,...t)}function qi(i,...t){Xi.logLevel<=ne.ERROR&&Xi.error(`Auth (${kr}): ${i}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(i,...t){throw ya(i,...t)}function ut(i,...t){return ya(i,...t)}function wa(i,t,r){const o={...vb(),[t]:r};return new Nr("auth","Firebase",o).create(t,{appName:i.name})}function mt(i){return wa(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lf(i,t,r){const o=r;if(!(t instanceof o))throw o.name!==t.constructor.name&&et(i,"argument-error"),wa(i,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ya(i,...t){if(typeof i!="string"){const r=t[0],o=[...t.slice(1)];return o[0]&&(o[0].appName=i.name),i._errorFactory.create(r,...o)}return Pf.create(i,...t)}function B(i,t,...r){if(!i)throw ya(t,...r)}function Nt(i){const t="INTERNAL ASSERTION FAILED: "+i;throw qi(t),new Error(t)}function Ut(i,t){i||Nt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function bb(){return Ll()==="http:"||Ll()==="https:"}function Ll(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bb()||Xv()||"connection"in navigator)?navigator.onLine:!0}function Sb(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,r){this.shortDelay=t,this.longDelay=r,Ut(r>t,"Short delay should be less than long delay!"),this.isMobile=jv()||Zv()}get(){return Tb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(i,t){Ut(i.emulator,"Emulator should always be set here");const{url:r}=i.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{static initialize(t,r,o){this.fetchImpl=t,r&&(this.headersImpl=r),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Cb=new Ur(3e4,6e4);function sn(i,t){return i.tenantId&&!t.tenantId?{...t,tenantId:i.tenantId}:t}async function Mt(i,t,r,o,a={}){return Nf(i,a,async()=>{let u={},f={};o&&(t==="GET"?f=o:u={body:JSON.stringify(o)});const p=Dr({key:i.config.apiKey,...f}).slice(1),_=await i._getAdditionalHeaders();_["Content-Type"]="application/json",i.languageCode&&(_["X-Firebase-Locale"]=i.languageCode);const E={method:t,headers:_,...u};return Yv()||(E.referrerPolicy="no-referrer"),i.emulatorConfig&&ma(i.emulatorConfig.host)&&(E.credentials="include"),xf.fetch()(await Df(i,i.config.apiHost,r,p),E)})}async function Nf(i,t,r){i._canInitEmulator=!1;const o={...Rb,...t};try{const a=new Pb(i),u=await Promise.race([r(),a.promise]);a.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Mi(i,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const p=u.ok?f.errorMessage:f.error.message,[_,E]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mi(i,"credential-already-in-use",f);if(_==="EMAIL_EXISTS")throw Mi(i,"email-already-in-use",f);if(_==="USER_DISABLED")throw Mi(i,"user-disabled",f);const b=o[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw wa(i,b,E);et(i,b)}}catch(a){if(a instanceof rn)throw a;et(i,"network-request-failed",{message:String(a)})}}async function Mr(i,t,r,o,a={}){const u=await Mt(i,t,r,o,a);return"mfaPendingCredential"in u&&et(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function Df(i,t,r,o){const a=`${t}${r}?${o}`,u=i,f=u.config.emulator?Ea(i.config,a):`${i.config.apiScheme}://${a}`;return Ab.includes(r)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function Ob(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Pb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((r,o)=>{this.timer=setTimeout(()=>o(ut(this.auth,"network-request-failed")),Cb.get())})}}function Mi(i,t,r){const o={appName:i.name};r.email&&(o.email=r.email),r.phoneNumber&&(o.phoneNumber=r.phoneNumber);const a=ut(i,t,o);return a.customData._tokenResponse=r,a}function xl(i){return i!==void 0&&i.enterprise!==void 0}class Lb{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===t)return Ob(r.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xb(i,t){return Mt(i,"GET","/v2/recaptchaConfig",sn(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nb(i,t){return Mt(i,"POST","/v1/accounts:delete",t)}async function Zi(i,t){return Mt(i,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Db(i,t=!1){const r=wt(i),o=await r.getIdToken(t),a=va(o);B(a&&a.exp&&a.auth_time&&a.iat,r.auth,"internal-error");const u=typeof a.firebase=="object"?a.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:a,token:o,authTime:Sr(Vo(a.auth_time)),issuedAtTime:Sr(Vo(a.iat)),expirationTime:Sr(Vo(a.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Vo(i){return Number(i)*1e3}function va(i){const[t,r,o]=i.split(".");if(t===void 0||r===void 0||o===void 0)return qi("JWT malformed, contained fewer than 3 sections"),null;try{const a=yf(r);return a?JSON.parse(a):(qi("Failed to decode base64 JWT payload"),null)}catch(a){return qi("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Nl(i){const t=va(i);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(i,t,r=!1){if(r)return t;try{return await t}catch(o){throw o instanceof rn&&kb(o)&&i.auth.currentUser===i&&await i.auth.signOut(),o}}function kb({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const r=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(t,r){this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Sr(this.lastLoginAt),this.creationTime=Sr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(i){var O;const t=i.auth,r=await i.getIdToken(),o=await Kn(i,Zi(t,{idToken:r}));B(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];i._notifyReloadListener(a);const u=(O=a.providerUserInfo)!=null&&O.length?kf(a.providerUserInfo):[],f=Fb(i.providerData,u),p=i.isAnonymous,_=!(i.email&&a.passwordHash)&&!(f!=null&&f.length),E=p?_:!1,b={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:f,metadata:new ra(a.createdAt,a.lastLoginAt),isAnonymous:E};Object.assign(i,b)}async function Mb(i){const t=wt(i);await Qi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Fb(i,t){return[...i.filter(o=>!t.some(a=>a.providerId===o.providerId)),...t]}function kf(i){return i.map(({providerId:t,...r})=>({providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bb(i,t){const r=await Nf(i,{},async()=>{const o=Dr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:a,apiKey:u}=i.config,f=await Df(i,a,"/v1/token",`key=${u}`),p=await i._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:o};return i.emulatorConfig&&ma(i.emulatorConfig.host)&&(_.credentials="include"),xf.fetch()(f,_)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Wb(i,t){return Mt(i,"POST","/v2/accounts:revokeToken",sn(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const r="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Nl(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,r)}updateFromIdToken(t){B(t.length!==0,"internal-error");const r=Nl(t);this.updateTokensAndExpiration(t,null,r)}async getToken(t,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,r){const{accessToken:o,refreshToken:a,expiresIn:u}=await Bb(t,r);this.updateTokensAndExpiration(o,a,Number(u))}updateTokensAndExpiration(t,r,o){this.refreshToken=r||null,this.accessToken=t||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(t,r){const{refreshToken:o,accessToken:a,expirationTime:u}=r,f=new Hn;return o&&(B(typeof o=="string","internal-error",{appName:t}),f.refreshToken=o),a&&(B(typeof a=="string","internal-error",{appName:t}),f.accessToken=a),u&&(B(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Hn,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(i,t){B(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class at{constructor({uid:t,auth:r,stsTokenManager:o,...a}){this.providerId="firebase",this.proactiveRefresh=new Ub(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new ra(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const r=await Kn(this,this.stsTokenManager.getToken(this.auth,t));return B(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(t){return Db(this,t)}reload(){return Mb(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(r=>({...r})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const r=new at({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,r=!1){let o=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),o=!0),r&&await Qi(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(mt(this.auth));const t=await this.getIdToken();return await Kn(this,Nb(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,r){const o=r.displayName??void 0,a=r.email??void 0,u=r.phoneNumber??void 0,f=r.photoURL??void 0,p=r.tenantId??void 0,_=r._redirectEventId??void 0,E=r.createdAt??void 0,b=r.lastLoginAt??void 0,{uid:O,emailVerified:k,isAnonymous:G,providerData:A,stsTokenManager:N}=r;B(O&&N,t,"internal-error");const P=Hn.fromJSON(this.name,N);B(typeof O=="string",t,"internal-error"),jt(o,t.name),jt(a,t.name),B(typeof k=="boolean",t,"internal-error"),B(typeof G=="boolean",t,"internal-error"),jt(u,t.name),jt(f,t.name),jt(p,t.name),jt(_,t.name),jt(E,t.name),jt(b,t.name);const Y=new at({uid:O,auth:t,email:a,emailVerified:k,displayName:o,isAnonymous:G,photoURL:f,phoneNumber:u,tenantId:p,stsTokenManager:P,createdAt:E,lastLoginAt:b});return A&&Array.isArray(A)&&(Y.providerData=A.map(we=>({...we}))),_&&(Y._redirectEventId=_),Y}static async _fromIdTokenResponse(t,r,o=!1){const a=new Hn;a.updateFromServerResponse(r);const u=new at({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:o});return await Qi(u),u}static async _fromGetAccountInfoResponse(t,r,o){const a=r.users[0];B(a.localId!==void 0,"internal-error");const u=a.providerUserInfo!==void 0?kf(a.providerUserInfo):[],f=!(a.email&&a.passwordHash)&&!(u!=null&&u.length),p=new Hn;p.updateFromIdToken(o);const _=new at({uid:a.localId,auth:t,stsTokenManager:p,isAnonymous:f}),E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new ra(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(u!=null&&u.length)};return Object.assign(_,E),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new Map;function Dt(i){Ut(i instanceof Function,"Expected a class definition");let t=Dl.get(i);return t?(Ut(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,Dl.set(i,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,r){this.storage[t]=r}async _get(t){const r=this.storage[t];return r===void 0?null:r}async _remove(t){delete this.storage[t]}_addListener(t,r){}_removeListener(t,r){}}Uf.type="NONE";const kl=Uf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(i,t,r){return`firebase:${i}:${t}:${r}`}class $n{constructor(t,r,o){this.persistence=t,this.auth=r,this.userKey=o;const{config:a,name:u}=this.auth;this.fullUserKey=Vi(this.userKey,a.apiKey,u),this.fullPersistenceKey=Vi("persistence",a.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const r=await Zi(this.auth,{idToken:t}).catch(()=>{});return r?at._fromGetAccountInfoResponse(this.auth,r,t):null}return at._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,r,o="authUser"){if(!r.length)return new $n(Dt(kl),t,o);const a=(await Promise.all(r.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let u=a[0]||Dt(kl);const f=Vi(o,t.config.apiKey,t.name);let p=null;for(const E of r)try{const b=await E._get(f);if(b){let O;if(typeof b=="string"){const k=await Zi(t,{idToken:b}).catch(()=>{});if(!k)break;O=await at._fromGetAccountInfoResponse(t,k,b)}else O=at._fromJSON(t,b);E!==u&&(p=O),u=E;break}}catch{}const _=a.filter(E=>E._shouldAllowMigration);return!u._shouldAllowMigration||!_.length?new $n(u,t,o):(u=_[0],p&&await u._set(f,p.toJSON()),await Promise.all(r.map(async E=>{if(E!==u)try{await E._remove(f)}catch{}})),new $n(u,t,o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Wf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Mf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if($f(t))return"Blackberry";if(qf(t))return"Webos";if(Ff(t))return"Safari";if((t.includes("chrome/")||Bf(t))&&!t.includes("edge/"))return"Chrome";if(Hf(t))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=i.match(r);if((o==null?void 0:o.length)===2)return o[1]}return"Other"}function Mf(i=Pe()){return/firefox\//i.test(i)}function Ff(i=Pe()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Bf(i=Pe()){return/crios\//i.test(i)}function Wf(i=Pe()){return/iemobile/i.test(i)}function Hf(i=Pe()){return/android/i.test(i)}function $f(i=Pe()){return/blackberry/i.test(i)}function qf(i=Pe()){return/webos/i.test(i)}function Ia(i=Pe()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Hb(i=Pe()){var t;return Ia(i)&&!!((t=window.navigator)!=null&&t.standalone)}function $b(){return Qv()&&document.documentMode===10}function Vf(i=Pe()){return Ia(i)||Hf(i)||qf(i)||$f(i)||/windows phone/i.test(i)||Wf(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(i,t=[]){let r;switch(i){case"Browser":r=Ul(Pe());break;case"Worker":r=`${Ul(Pe())}-${i}`;break;default:r=i}const o=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${kr}/${o}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,r){const o=u=>new Promise((f,p)=>{try{const _=t(u);f(_)}catch(_){p(_)}});o.onAbort=r,this.queue.push(o);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const r=[];try{for(const o of this.queue)await o(t),o.onAbort&&r.push(o.onAbort)}catch(o){r.reverse();for(const a of r)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vb(i,t={}){return Mt(i,"GET","/v2/passwordPolicy",sn(i,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=6;class Gb{constructor(t){var o;const r=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??zb,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((o=t.allowedNonAlphanumericCharacters)==null?void 0:o.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,r),this.validatePasswordCharacterOptions(t,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(t,r){const o=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;o&&(r.meetsMinPasswordLength=t.length>=o),a&&(r.meetsMaxPasswordLength=t.length<=a)}validatePasswordCharacterOptions(t,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let o;for(let a=0;a<t.length;a++)o=t.charAt(a),this.updatePasswordCharacterOptionsStatuses(r,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(t,r,o,a,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(t,r,o,a){this.app=t,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=o,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ml(this),this.idTokenSubscription=new Ml(this),this.beforeStateQueue=new qb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,r){return r&&(this._popupRedirectResolver=Dt(r)),this._initializationPromise=this.queue(async()=>{var o,a,u;if(!this._deleted&&(this.persistenceManager=await $n.create(this,t),(o=this._resolvePersistenceManagerAvailable)==null||o.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const r=await Zi(this,{idToken:t}),o=await at._fromGetAccountInfoResponse(this,r,t);await this.directlySetCurrentUser(o)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var u;if(Ve(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(p,p))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,p=o==null?void 0:o._redirectEventId,_=await this.tryRedirectSignIn(t);(!f||f===p)&&(_!=null&&_.user)&&(o=_.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(t){try{await Qi(t)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Sb()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ve(this.app))return Promise.reject(mt(this));const r=t?wt(t):null;return r&&B(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(t,r=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ve(this.app)?Promise.reject(mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ve(this.app)?Promise.reject(mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Vb(this),r=new Gb(t);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Nr("auth","Firebase",t())}onAuthStateChanged(t,r,o){return this.registerStateListener(this.authStateSubscription,t,r,o)}beforeAuthStateChanged(t,r){return this.beforeStateQueue.pushCallback(t,r)}onIdTokenChanged(t,r,o){return this.registerStateListener(this.idTokenSubscription,t,r,o)}authStateReady(){return new Promise((t,r)=>{if(this.currentUser)t();else{const o=this.onAuthStateChanged(()=>{o(),t()},r)}})}async revokeAccessToken(t){if(this.currentUser){const r=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:r};this.tenantId!=null&&(o.tenantId=this.tenantId),await Wb(this,o)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,r){const o=await this.getOrInitRedirectPersistenceManager(r);return t===null?o.removeCurrentUser():o.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const r=t&&Dt(t)||this._popupRedirectResolver;B(r,this,"argument-error"),this.redirectPersistenceManager=await $n.create(this,[Dt(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var r,o;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)==null?void 0:r._redirectEventId)===t?this._currentUser:((o=this.redirectUser)==null?void 0:o._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((r=this.currentUser)==null?void 0:r.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,r,o,a){if(this._deleted)return()=>{};const u=typeof r=="function"?r:r.next.bind(r);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(p,this,"internal-error"),p.then(()=>{f||u(this.currentUser)}),typeof r=="function"){const _=t.addObserver(r,o,a);return()=>{f=!0,_()}}else{const _=t.addObserver(r);return()=>{f=!0,_()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=zf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var r;if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((r=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getToken());return t!=null&&t.error&&Ib(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yt(i){return wt(i)}class Ml{constructor(t){this.auth=t,this.observer=null,this.addObserver=oI(r=>this.observer=r)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jb(i){us=i}function Gf(i){return us.loadJS(i)}function jb(){return us.recaptchaEnterpriseScript}function Yb(){return us.gapiScript}function Xb(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class Zb{constructor(){this.enterprise=new Qb}ready(t){t()}execute(t,r){return Promise.resolve("token")}render(t,r){return""}}class Qb{ready(t){t()}execute(t,r){return Promise.resolve("token")}render(t,r){return""}}const e0="recaptcha-enterprise",Kf="NO_RECAPTCHA";class t0{constructor(t){this.type=e0,this.auth=yt(t)}async verify(t="verify",r=!1){async function o(u){if(!r){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,p)=>{xb(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const E=new Lb(_);return u.tenantId==null?u._agentRecaptchaConfig=E:u._tenantRecaptchaConfigs[u.tenantId]=E,f(E.siteKey)}}).catch(_=>{p(_)})})}function a(u,f,p){const _=window.grecaptcha;xl(_)?_.enterprise.ready(()=>{_.enterprise.execute(u,{action:t}).then(E=>{f(E)}).catch(()=>{f(Kf)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Zb().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{o(this.auth).then(p=>{if(!r&&xl(window.grecaptcha))a(p,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let _=jb();_.length!==0&&(_+=p),Gf(_).then(()=>{a(p,u,f)}).catch(E=>{f(E)})}}).catch(p=>{f(p)})})}}async function vr(i,t,r,o=!1,a=!1){const u=new t0(i);let f;if(a)f=Kf;else try{f=await u.verify(r)}catch{f=await u.verify(r,!0)}const p={...t};if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const _=p.phoneEnrollmentInfo.phoneNumber,E=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:E,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const _=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return o?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function ia(i,t,r,o,a){var u,f;if(a==="EMAIL_PASSWORD_PROVIDER")if((u=i._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const p=await vr(i,t,r,r==="getOobCode");return o(i,p)}else return o(i,t).catch(async p=>{if(p.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const _=await vr(i,t,r,r==="getOobCode");return o(i,_)}else return Promise.reject(p)});else if(a==="PHONE_PROVIDER")if((f=i._getRecaptchaConfig())!=null&&f.isProviderEnabled("PHONE_PROVIDER")){const p=await vr(i,t,r);return o(i,p).catch(async _=>{var E;if(((E=i._getRecaptchaConfig())==null?void 0:E.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(_.code==="auth/missing-recaptcha-token"||_.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${r} flow.`);const b=await vr(i,t,r,!1,!0);return o(i,b)}return Promise.reject(_)})}else{const p=await vr(i,t,r,!1,!0);return o(i,p)}else return Promise.reject(a+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(i,t){const r=Sf(i,"auth");if(r.isInitialized()){const a=r.getImmediate(),u=r.getOptions();if(zn(u,t??{}))return a;et(a,"already-initialized")}return r.initialize({options:t})}function r0(i,t){const r=(t==null?void 0:t.persistence)||[],o=(Array.isArray(r)?r:[r]).map(Dt);t!=null&&t.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(o,t==null?void 0:t.popupRedirectResolver)}function i0(i,t,r){const o=yt(i);B(/^https?:\/\//.test(t),o,"invalid-emulator-scheme");const a=!!(r!=null&&r.disableWarnings),u=Jf(t),{host:f,port:p}=s0(t),_=p===null?"":`:${p}`,E={url:`${u}//${f}${_}/`},b=Object.freeze({host:f,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!o._canInitEmulator){B(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),B(zn(E,o.config.emulator)&&zn(b,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=E,o.emulatorConfig=b,o.settings.appVerificationDisabledForTesting=!0,ma(f)?uI(`${u}//${f}${_}`):a||o0()}function Jf(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function s0(i){const t=Jf(i),r=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!r)return{host:"",port:null};const o=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(o);if(a){const u=a[1];return{host:u,port:Fl(o.substr(u.length+1))}}else{const[u,f]=o.split(":");return{host:u,port:Fl(f)}}}function Fl(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function o0(){function i(){const t=document.createElement("p"),r=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t,r){this.providerId=t,this.signInMethod=r}toJSON(){return Nt("not implemented")}_getIdTokenResponse(t){return Nt("not implemented")}_linkToIdToken(t,r){return Nt("not implemented")}_getReauthenticationResolver(t){return Nt("not implemented")}}async function a0(i,t){return Mt(i,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c0(i,t){return Mr(i,"POST","/v1/accounts:signInWithPassword",sn(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(i,t){return Mr(i,"POST","/v1/accounts:signInWithEmailLink",sn(i,t))}async function l0(i,t){return Mr(i,"POST","/v1/accounts:signInWithEmailLink",sn(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends ba{constructor(t,r,o,a=null){super("password",o),this._email=t,this._password=r,this._tenantId=a}static _fromEmailAndPassword(t,r){return new Cr(t,r,"password")}static _fromEmailAndCode(t,r,o=null){return new Cr(t,r,"emailLink",o)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ia(t,r,"signInWithPassword",c0,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return u0(t,{email:this._email,oobCode:this._password});default:et(t,"internal-error")}}async _linkToIdToken(t,r){switch(this.signInMethod){case"password":const o={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ia(t,o,"signUpPassword",a0,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return l0(t,{idToken:r,email:this._email,oobCode:this._password});default:et(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(i,t){return Mr(i,"POST","/v1/accounts:signInWithIdp",sn(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="http://localhost";class En extends ba{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const r=new En(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):et("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t,{providerId:o,signInMethod:a,...u}=r;if(!o||!a)return null;const f=new En(o,a);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const r=this.buildRequest();return qn(t,r)}_linkToIdToken(t,r){const o=this.buildRequest();return o.idToken=r,qn(t,o)}_getReauthenticationResolver(t){const r=this.buildRequest();return r.autoCreate=!1,qn(t,r)}buildRequest(){const t={requestUri:f0,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=Dr(r)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function d0(i){const t=br(Tr(i)).link,r=t?br(Tr(t)).deep_link_id:null,o=br(Tr(i)).deep_link_id;return(o?br(Tr(o)).link:null)||o||r||t||i}class Ta{constructor(t){const r=br(Tr(t)),o=r.apiKey??null,a=r.oobCode??null,u=h0(r.mode??null);B(o&&a&&u,"argument-error"),this.apiKey=o,this.operation=u,this.code=a,this.continueUrl=r.continueUrl??null,this.languageCode=r.lang??null,this.tenantId=r.tenantId??null}static parseLink(t){const r=d0(t);try{return new Ta(r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.providerId=jn.PROVIDER_ID}static credential(t,r){return Cr._fromEmailAndPassword(t,r)}static credentialWithLink(t,r){const o=Ta.parseLink(r);return B(o,"argument-error"),Cr._fromEmailAndCode(t,o.code,o.tenantId)}}jn.PROVIDER_ID="password";jn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends ls{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Fr{constructor(){super("facebook.com")}static credential(t){return En._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Zt.credentialFromTaggedObject(t)}static credentialFromError(t){return Zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Zt.credential(t.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Fr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,r){return En._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})}static credentialFromResult(t){return xt.credentialFromTaggedObject(t)}static credentialFromError(t){return xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:o}=t;if(!r&&!o)return null;try{return xt.credential(r,o)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Fr{constructor(){super("github.com")}static credential(t){return En._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Qt.credential(t.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Fr{constructor(){super("twitter.com")}static credential(t,r){return En._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})}static credentialFromResult(t){return en.credentialFromTaggedObject(t)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:r,oauthTokenSecret:o}=t;if(!r||!o)return null;try{return en.credential(r,o)}catch{return null}}}en.TWITTER_SIGN_IN_METHOD="twitter.com";en.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(i,t){return Mr(i,"POST","/v1/accounts:signUp",sn(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,r,o,a=!1){const u=await at._fromIdTokenResponse(t,o,a),f=Bl(o);return new vn({user:u,providerId:f,_tokenResponse:o,operationType:r})}static async _forOperation(t,r,o){await t._updateTokensIfNecessary(o,!0);const a=Bl(o);return new vn({user:t,providerId:a,_tokenResponse:o,operationType:r})}}function Bl(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends rn{constructor(t,r,o,a){super(r.code,r.message),this.operationType=o,this.user=a,Object.setPrototypeOf(this,es.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(t,r,o,a){return new es(t,r,o,a)}}function jf(i,t,r,o){return(t==="reauthenticate"?r._getReauthenticationResolver(i):r._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?es._fromErrorAndOperation(i,u,t,o):u})}async function g0(i,t,r=!1){const o=await Kn(i,t._linkToIdToken(i.auth,await i.getIdToken()),r);return vn._forOperation(i,"link",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(i,t,r=!1){const{auth:o}=i;if(Ve(o.app))return Promise.reject(mt(o));const a="reauthenticate";try{const u=await Kn(i,jf(o,a,t,i),r);B(u.idToken,o,"internal-error");const f=va(u.idToken);B(f,o,"internal-error");const{sub:p}=f;return B(i.uid===p,o,"user-mismatch"),vn._forOperation(i,a,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&et(o,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yf(i,t,r=!1){if(Ve(i.app))return Promise.reject(mt(i));const o="signIn",a=await jf(i,o,t),u=await vn._fromIdTokenResponse(i,o,a);return r||await i._updateCurrentUser(u.user),u}async function _0(i,t){return Yf(yt(i),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xf(i){const t=yt(i);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function w0(i,t,r){if(Ve(i.app))return Promise.reject(mt(i));const o=yt(i),f=await ia(o,{returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",p0,"EMAIL_PASSWORD_PROVIDER").catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&Xf(i),_}),p=await vn._fromIdTokenResponse(o,"signIn",f);return await o._updateCurrentUser(p.user),p}function y0(i,t,r){return Ve(i.app)?Promise.reject(mt(i)):_0(wt(i),jn.credential(t,r)).catch(async o=>{throw o.code==="auth/password-does-not-meet-requirements"&&Xf(i),o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(i,t){return Mt(i,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(i,{displayName:t,photoURL:r}){if(t===void 0&&r===void 0)return;const o=wt(i),u={idToken:await o.getIdToken(),displayName:t,photoUrl:r,returnSecureToken:!0},f=await Kn(o,E0(o.auth,u));o.displayName=f.displayName||null,o.photoURL=f.photoUrl||null;const p=o.providerData.find(({providerId:_})=>_==="password");p&&(p.displayName=o.displayName,p.photoURL=o.photoURL),await o._updateTokensIfNecessary(f)}function I0(i,t,r,o){return wt(i).onIdTokenChanged(t,r,o)}function b0(i,t,r){return wt(i).beforeAuthStateChanged(t,r)}function Zf(i,t,r,o){return wt(i).onAuthStateChanged(t,r,o)}function T0(i){return wt(i).signOut()}const ts="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t,r){this.storageRetriever=t,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(ts,"1"),this.storage.removeItem(ts),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,r){return this.storage.setItem(t,JSON.stringify(r)),Promise.resolve()}_get(t){const r=this.storage.getItem(t);return Promise.resolve(r?JSON.parse(r):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=1e3,R0=10;class eh extends Qf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,r)=>this.onStorageEvent(t,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const r of Object.keys(this.listeners)){const o=this.storage.getItem(r),a=this.localCache[r];o!==a&&t(r,a,o)}}onStorageEvent(t,r=!1){if(!t.key){this.forAllChangedKeys((f,p,_)=>{this.notifyListeners(f,_)});return}const o=t.key;r?this.detachListener():this.stopPolling();const a=()=>{const f=this.storage.getItem(o);!r&&this.localCache[o]===f||this.notifyListeners(o,f)},u=this.storage.getItem(o);$b()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(a,R0):a()}notifyListeners(t,r){this.localCache[t]=r;const o=this.listeners[t];if(o)for(const a of Array.from(o))a(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,r,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:r,newValue:o}),!0)})},S0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,r){await super._set(t,r),this.localCache[t]=JSON.stringify(r)}async _get(t){const r=await super._get(t);return this.localCache[t]=JSON.stringify(r),r}async _remove(t){await super._remove(t),delete this.localCache[t]}}eh.type="LOCAL";const A0=eh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends Qf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,r){}_removeListener(t,r){}}th.type="SESSION";const nh=th;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const r=this.receivers.find(a=>a.isListeningto(t));if(r)return r;const o=new fs(t);return this.receivers.push(o),o}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const r=t,{eventId:o,eventType:a,data:u}=r.data,f=this.handlersMap[a];if(!(f!=null&&f.size))return;r.ports[0].postMessage({status:"ack",eventId:o,eventType:a});const p=Array.from(f).map(async E=>E(r.origin,u)),_=await C0(p);r.ports[0].postMessage({status:"done",eventId:o,eventType:a,response:_})}_subscribe(t,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(r)}_unsubscribe(t,r){this.handlersMap[t]&&r&&this.handlersMap[t].delete(r),(!r||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(i="",t=10){let r="";for(let o=0;o<t;o++)r+=Math.floor(Math.random()*10);return i+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,r,o=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let u,f;return new Promise((p,_)=>{const E=Sa("",20);a.port1.start();const b=setTimeout(()=>{_(new Error("unsupported_event"))},o);f={messageChannel:a,onMessage(O){const k=O;if(k.data.eventId===E)switch(k.data.status){case"ack":clearTimeout(b),u=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(k.data.response);break;default:clearTimeout(b),clearTimeout(u),_(new Error("invalid_response"));break}}},this.handlers.add(f),a.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:E,data:r},[a.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return window}function P0(i){_t().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function L0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function x0(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function N0(){return rh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="firebaseLocalStorageDb",D0=1,ns="firebaseLocalStorage",sh="fbase_key";class Br{constructor(t){this.request=t}toPromise(){return new Promise((t,r)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function hs(i,t){return i.transaction([ns],t?"readwrite":"readonly").objectStore(ns)}function k0(){const i=indexedDB.deleteDatabase(ih);return new Br(i).toPromise()}function sa(){const i=indexedDB.open(ih,D0);return new Promise((t,r)=>{i.addEventListener("error",()=>{r(i.error)}),i.addEventListener("upgradeneeded",()=>{const o=i.result;try{o.createObjectStore(ns,{keyPath:sh})}catch(a){r(a)}}),i.addEventListener("success",async()=>{const o=i.result;o.objectStoreNames.contains(ns)?t(o):(o.close(),await k0(),t(await sa()))})})}async function Wl(i,t,r){const o=hs(i,!0).put({[sh]:t,value:r});return new Br(o).toPromise()}async function U0(i,t){const r=hs(i,!1).get(t),o=await new Br(r).toPromise();return o===void 0?null:o.value}function Hl(i,t){const r=hs(i,!0).delete(t);return new Br(r).toPromise()}const M0=800,F0=3;class oh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sa(),this.db)}async _withRetries(t){let r=0;for(;;)try{const o=await this._openDb();return await t(o)}catch(o){if(r++>F0)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fs._getInstance(N0()),this.receiver._subscribe("keyChanged",async(t,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(t,r)=>["keyChanged"])}async initializeSender(){var r,o;if(this.activeServiceWorker=await L0(),!this.activeServiceWorker)return;this.sender=new O0(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(r=t[0])!=null&&r.fulfilled&&(o=t[0])!=null&&o.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||x0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await sa();return await Wl(t,ts,"1"),await Hl(t,ts),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,r){return this._withPendingWrite(async()=>(await this._withRetries(o=>Wl(o,t,r)),this.localCache[t]=r,this.notifyServiceWorker(t)))}async _get(t){const r=await this._withRetries(o=>U0(o,t));return this.localCache[t]=r,r}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hl(r,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(a=>{const u=hs(a,!1).getAll();return new Br(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const r=[],o=new Set;if(t.length!==0)for(const{fbase_key:a,value:u}of t)o.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(u)&&(this.notifyListeners(a,u),r.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!o.has(a)&&(this.notifyListeners(a,null),r.push(a));return r}notifyListeners(t,r){this.localCache[t]=r;const o=this.listeners[t];if(o)for(const a of Array.from(o))a(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),M0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oh.type="LOCAL";const B0=oh;new Ur(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(i,t){return t?Dt(t):(B(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends ba{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return qn(t,this._buildIdpRequest())}_linkToIdToken(t,r){return qn(t,this._buildIdpRequest(r))}_getReauthenticationResolver(t){return qn(t,this._buildIdpRequest())}_buildIdpRequest(t){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r}}function W0(i){return Yf(i.auth,new Aa(i),i.bypassAuthState)}function H0(i){const{auth:t,user:r}=i;return B(r,t,"internal-error"),m0(r,new Aa(i),i.bypassAuthState)}async function $0(i){const{auth:t,user:r}=i;return B(r,t,"internal-error"),g0(r,new Aa(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(t,r,o,a,u=!1){this.auth=t,this.resolver=o,this.user=a,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(t,r)=>{this.pendingPromise={resolve:t,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(t){const{urlResponse:r,sessionId:o,postBody:a,tenantId:u,error:f,type:p}=t;if(f){this.reject(f);return}const _={auth:this.auth,requestUri:r,sessionId:o,tenantId:u||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(E){this.reject(E)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return W0;case"linkViaPopup":case"linkViaRedirect":return $0;case"reauthViaPopup":case"reauthViaRedirect":return H0;default:et(this.auth,"internal-error")}}resolve(t){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=new Ur(2e3,1e4);async function V0(i,t,r){if(Ve(i.app))return Promise.reject(ut(i,"operation-not-supported-in-this-environment"));const o=yt(i);Lf(i,t,ls);const a=Ra(o,r);return new wn(o,"signInViaPopup",t,a).executeNotNull()}class wn extends ah{constructor(t,r,o,a,u){super(t,r,a,u),this.provider=o,this.authWindow=null,this.pollId=null,wn.currentPopupAction&&wn.currentPopupAction.cancel(),wn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const t=Sa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var r,o;if((o=(r=this.authWindow)==null?void 0:r.window)!=null&&o.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,q0.get())};t()}}wn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="pendingRedirect",zi=new Map;class G0 extends ah{constructor(t,r,o=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,o),this.eventId=null}async execute(){let t=zi.get(this.auth._key());if(!t){try{const o=await K0(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(o)}catch(r){t=()=>Promise.reject(r)}zi.set(this.auth._key(),t)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const r=await this.auth._redirectUserForId(t.eventId);if(r)return this.user=r,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function K0(i,t){const r=uh(t),o=ch(i);if(!await o._isAvailable())return!1;const a=await o._get(r)==="true";return await o._remove(r),a}async function J0(i,t){return ch(i)._set(uh(t),"true")}function j0(i,t){zi.set(i._key(),t)}function ch(i){return Dt(i._redirectPersistence)}function uh(i){return Vi(z0,i.config.apiKey,i.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(i,t,r){return X0(i,t,r)}async function X0(i,t,r){if(Ve(i.app))return Promise.reject(mt(i));const o=yt(i);Lf(i,t,ls),await o._initializationPromise;const a=Ra(o,r);return await J0(a,o),a._openRedirect(o,t,"signInViaRedirect")}async function Z0(i,t){return await yt(i)._initializationPromise,lh(i,t,!1)}async function lh(i,t,r=!1){if(Ve(i.app))return Promise.reject(mt(i));const o=yt(i),a=Ra(o,t),f=await new G0(o,a,r).execute();return f&&!r&&(delete f.user._redirectEventId,await o._persistUserIfCurrent(f.user),await o._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=10*60*1e3;class eT{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let r=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(t,o)&&(r=!0,this.sendToConsumer(t,o),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!tT(t)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=t,r=!0)),r}sendToConsumer(t,r){var o;if(t.error&&!fh(t)){const a=((o=t.error.code)==null?void 0:o.split("auth/")[1])||"internal-error";r.onError(ut(this.auth,a))}else r.onAuthEvent(t)}isEventForConsumer(t,r){const o=r.eventId===null||!!t.eventId&&t.eventId===r.eventId;return r.filter.includes(t.type)&&o}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Q0&&this.cachedEventUids.clear(),this.cachedEventUids.has($l(t))}saveEventToCache(t){this.cachedEventUids.add($l(t)),this.lastProcessedEventTime=Date.now()}}function $l(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function fh({type:i,error:t}){return i==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function tT(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fh(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(i,t={}){return Mt(i,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iT=/^https?/;async function sT(i){if(i.config.emulator)return;const{authorizedDomains:t}=await nT(i);for(const r of t)try{if(oT(r))return}catch{}et(i,"unauthorized-domain")}function oT(i){const t=na(),{protocol:r,hostname:o}=new URL(t);if(i.startsWith("chrome-extension://")){const f=new URL(i);return f.hostname===""&&o===""?r==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):r==="chrome-extension:"&&f.hostname===o}if(!iT.test(r))return!1;if(rT.test(i))return o===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(o)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new Ur(3e4,6e4);function ql(){const i=_t().___jsl;if(i!=null&&i.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let r=0;r<i.CP.length;r++)i.CP[r]=null}}function cT(i){return new Promise((t,r)=>{var a,u,f;function o(){ql(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ql(),r(ut(i,"network-request-failed"))},timeout:aT.get()})}if((u=(a=_t().gapi)==null?void 0:a.iframes)!=null&&u.Iframe)t(gapi.iframes.getContext());else if((f=_t().gapi)!=null&&f.load)o();else{const p=Xb("iframefcb");return _t()[p]=()=>{gapi.load?o():r(ut(i,"network-request-failed"))},Gf(`${Yb()}?onload=${p}`).catch(_=>r(_))}}).catch(t=>{throw Gi=null,t})}let Gi=null;function uT(i){return Gi=Gi||cT(i),Gi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=new Ur(5e3,15e3),fT="__/auth/iframe",hT="emulator/auth/iframe",dT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gT(i){const t=i.config;B(t.authDomain,i,"auth-domain-config-required");const r=t.emulator?Ea(t,hT):`https://${i.config.authDomain}/${fT}`,o={apiKey:t.apiKey,appName:i.name,v:kr},a=pT.get(i.config.apiHost);a&&(o.eid=a);const u=i._getFrameworks();return u.length&&(o.fw=u.join(",")),`${r}?${Dr(o).slice(1)}`}async function mT(i){const t=await uT(i),r=_t().gapi;return B(r,i,"internal-error"),t.open({where:document.body,url:gT(i),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dT,dontclear:!0},o=>new Promise(async(a,u)=>{await o.restyle({setHideOnLeave:!1});const f=ut(i,"network-request-failed"),p=_t().setTimeout(()=>{u(f)},lT.get());function _(){_t().clearTimeout(p),a(o)}o.ping(_).then(_,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wT=500,yT=600,ET="_blank",vT="http://localhost";class Vl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IT(i,t,r,o=wT,a=yT){const u=Math.max((window.screen.availHeight-a)/2,0).toString(),f=Math.max((window.screen.availWidth-o)/2,0).toString();let p="";const _={..._T,width:o.toString(),height:a.toString(),top:u,left:f},E=Pe().toLowerCase();r&&(p=Bf(E)?ET:r),Mf(E)&&(t=t||vT,_.scrollbars="yes");const b=Object.entries(_).reduce((k,[G,A])=>`${k}${G}=${A},`,"");if(Hb(E)&&p!=="_self")return bT(t||"",p),new Vl(null);const O=window.open(t||"",p,b);B(O,i,"popup-blocked");try{O.focus()}catch{}return new Vl(O)}function bT(i,t){const r=document.createElement("a");r.href=i,r.target=t;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="__/auth/handler",ST="emulator/auth/handler",RT=encodeURIComponent("fac");async function zl(i,t,r,o,a,u){B(i.config.authDomain,i,"auth-domain-config-required"),B(i.config.apiKey,i,"invalid-api-key");const f={apiKey:i.config.apiKey,appName:i.name,authType:r,redirectUrl:o,v:kr,eventId:a};if(t instanceof ls){t.setDefaultLanguage(i.languageCode),f.providerId=t.providerId||"",sI(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[b,O]of Object.entries(u||{}))f[b]=O}if(t instanceof Fr){const b=t.getScopes().filter(O=>O!=="");b.length>0&&(f.scopes=b.join(","))}i.tenantId&&(f.tid=i.tenantId);const p=f;for(const b of Object.keys(p))p[b]===void 0&&delete p[b];const _=await i._getAppCheckToken(),E=_?`#${RT}=${encodeURIComponent(_)}`:"";return`${AT(i)}?${Dr(p).slice(1)}${E}`}function AT({config:i}){return i.emulator?Ea(i,ST):`https://${i.authDomain}/${TT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="webStorageSupport";class CT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nh,this._completeRedirectFn=lh,this._overrideRedirectResult=j0}async _openPopup(t,r,o,a){var f;Ut((f=this.eventManagers[t._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await zl(t,r,o,na(),a);return IT(t,u,Sa())}async _openRedirect(t,r,o,a){await this._originValidation(t);const u=await zl(t,r,o,na(),a);return P0(u),new Promise(()=>{})}_initialize(t){const r=t._key();if(this.eventManagers[r]){const{manager:a,promise:u}=this.eventManagers[r];return a?Promise.resolve(a):(Ut(u,"If manager is not set, promise should be"),u)}const o=this.initAndGetManager(t);return this.eventManagers[r]={promise:o},o.catch(()=>{delete this.eventManagers[r]}),o}async initAndGetManager(t){const r=await mT(t),o=new eT(t);return r.register("authEvent",a=>(B(a==null?void 0:a.authEvent,t,"invalid-auth-event"),{status:o.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:o},this.iframes[t._key()]=r,o}_isIframeWebStorageSupported(t,r){this.iframes[t._key()].send(zo,{type:zo},a=>{var f;const u=(f=a==null?void 0:a[0])==null?void 0:f[zo];u!==void 0&&r(!!u),et(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const r=t._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=sT(t)),this.originValidationPromises[r]}get _shouldInitProactively(){return Vf()||Ff()||Ia()}}const OT=CT;var Gl="@firebase/auth",Kl="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const r=this.auth.onIdTokenChanged(o=>{t((o==null?void 0:o.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,r),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const r=this.internalListeners.get(t);r&&(this.internalListeners.delete(t),r(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xT(i){Rr(new Gn("auth",(t,{options:r})=>{const o=t.getProvider("app").getImmediate(),a=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=o.options;B(f&&!f.includes(":"),"invalid-api-key",{appName:o.name});const _={apiKey:f,authDomain:p,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zf(i)},E=new Kb(o,a,u,_);return r0(E,r),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,r,o)=>{t.getProvider("auth-internal").initialize()})),Rr(new Gn("auth-internal",t=>{const r=yt(t.getProvider("auth").getImmediate());return(o=>new PT(o))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn(Gl,Kl,LT(i)),Wn(Gl,Kl,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=5*60,DT=vf("authIdTokenMaxAge")||NT;let Jl=null;const kT=i=>async t=>{const r=t&&await t.getIdTokenResult(),o=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(o&&o>DT)return;const a=r==null?void 0:r.token;Jl!==a&&(Jl=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function UT(i=cb()){const t=Sf(i,"auth");if(t.isInitialized())return t.getImmediate();const r=n0(i,{popupRedirectResolver:OT,persistence:[B0,A0,nh]}),o=vf("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(o,location.origin);if(location.origin===u.origin){const f=kT(u.toString());b0(r,f,()=>f(r.currentUser)),I0(r,p=>f(p))}}const a=Kv("auth");return a&&i0(r,`http://${a}`),r}function MT(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}Jb({loadJS(i){return new Promise((t,r)=>{const o=document.createElement("script");o.setAttribute("src",i),o.onload=t,o.onerror=a=>{const u=ut("internal-error");u.customData=a,r(u)},o.type="text/javascript",o.charset="UTF-8",MT().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xT("Browser");const FT={apiKey:"AIzaSyBD0OkN3KM4nnT6lpk2Z3X-PX10AsnAwTo",authDomain:"tracnghiemdemo-a2567.firebaseapp.com",projectId:"tracnghiemdemo-a2567",storageBucket:"tracnghiemdemo-a2567.firebasestorage.app",messagingSenderId:"856722669723",appId:"1:856722669723:web:9f5795bec5949fa64c063e",measurementId:"G-SZRZ18TTM1"},BT=Rf(FT),Xt=UT(BT),oa=new xt;oa.setCustomParameters({prompt:"select_account"});function Oe(i){return document.querySelector(i)}function hh(i){document.cookie=`quiz_firebase_uid=${encodeURIComponent(i)}; path=/; max-age=2592000; samesite=lax`}function dh(){document.cookie="quiz_firebase_uid=; path=/; max-age=0; samesite=lax"}function Yt(i,t){const r=Oe("#authMessage");r&&(r.classList.remove("hidden","bg-red-50","text-red-700","bg-green-50","text-green-700"),i==="error"?r.classList.add("bg-red-50","text-red-700"):r.classList.add("bg-green-50","text-green-700"),r.textContent=t)}function Fi(){return new URL(window.location.href).searchParams.get("redirect")||"/"}function Go(i){const t=Oe("#authTabLogin"),r=Oe("#authTabRegister"),o=Oe("#loginForm"),a=Oe("#registerForm");if(!t||!r||!o||!a)return;const u=i==="login";o.classList.toggle("hidden",!u),a.classList.toggle("hidden",u),t.classList.toggle("bg-white",u),t.classList.toggle("text-gray-900",u),t.classList.toggle("text-gray-500",!u),r.classList.toggle("bg-white",!u),r.classList.toggle("text-gray-900",!u),r.classList.toggle("text-gray-500",u)}function Ir(i){return{"auth/email-already-in-use":"Email này đã được đăng ký.","auth/invalid-email":"Email không hợp lệ.","auth/user-not-found":"Không tìm thấy tài khoản.","auth/wrong-password":"Mật khẩu không đúng.","auth/invalid-credential":"Thông tin đăng nhập không đúng.","auth/weak-password":"Mật khẩu quá yếu (ít nhất 6 ký tự).","auth/popup-closed-by-user":"Bạn đã đóng cửa sổ đăng nhập Google.","auth/popup-blocked":"Trình duyệt đã chặn popup. Hệ thống sẽ chuyển sang chế độ đăng nhập redirect.","auth/operation-not-allowed":"Google Sign-In chưa được bật trong Firebase Console (Authentication > Sign-in method).","auth/unauthorized-domain":"Domain hiện tại chưa được cấp quyền trong Firebase. Hãy thêm localhost hoặc 127.0.0.1 vào Authorized domains.","auth/network-request-failed":"Lỗi mạng, vui lòng kiểm tra kết nối internet và thử lại."}[i]||"Có lỗi xảy ra. Vui lòng thử lại."}function WT(){if(document.body.dataset.authPage!=="true")return;const i=document.body.dataset.authMode==="register"?"register":"login";Go(i);const t=Oe("#authTabLogin"),r=Oe("#authTabRegister");t==null||t.addEventListener("click",()=>Go("login")),r==null||r.addEventListener("click",()=>Go("register"));const o=Oe("#loginForm"),a=Oe("#registerForm"),u=Oe("#googleAuthBtn");Z0(Xt).catch(f=>{Yt("error",Ir(f.code))}),Zf(Xt,f=>{f&&(hh(f.uid),window.location.href=Fi())}),o==null||o.addEventListener("submit",async f=>{var E,b,O;f.preventDefault();const p=(b=(E=Oe("#loginEmail"))==null?void 0:E.value)==null?void 0:b.trim(),_=(O=Oe("#loginPassword"))==null?void 0:O.value;try{await y0(Xt,p,_),Yt("success","Đăng nhập thành công, đang chuyển hướng..."),window.location.href=Fi()}catch(k){Yt("error",Ir(k.code))}}),a==null||a.addEventListener("submit",async f=>{var b,O,k,G,A;f.preventDefault();const p=(O=(b=Oe("#registerName"))==null?void 0:b.value)==null?void 0:O.trim(),_=(G=(k=Oe("#registerEmail"))==null?void 0:k.value)==null?void 0:G.trim(),E=(A=Oe("#registerPassword"))==null?void 0:A.value;try{const N=await w0(Xt,_,E);p&&await v0(N.user,{displayName:p}),Yt("success","Đăng ký thành công, đang chuyển hướng..."),window.location.href=Fi()}catch(N){Yt("error",Ir(N.code))}}),u==null||u.addEventListener("click",async()=>{try{await V0(Xt,oa),Yt("success","Đăng nhập Google thành công, đang chuyển hướng..."),window.location.href=Fi()}catch(f){if(f.code==="auth/popup-blocked"){Yt("error",Ir(f.code)),await Y0(Xt,oa);return}Yt("error",`${Ir(f.code)} (Mã lỗi: ${f.code||"unknown"})`)}})}function HT(){document.body.dataset.authRequired==="true"&&Zf(Xt,i=>{if(!i){dh();const r=encodeURIComponent(window.location.pathname+window.location.search);window.location.href=`/login?redirect=${r}`;return}hh(i.uid);const t=document.querySelector("[data-auth-email]");t&&(t.textContent=i.displayName||i.email||"Người dùng")})}function $T(){const i=document.querySelector("[data-auth-logout]");i&&i.addEventListener("click",async()=>{await T0(Xt),dh(),window.location.href="/login"})}document.addEventListener("DOMContentLoaded",()=>{WT(),HT(),$T()});
