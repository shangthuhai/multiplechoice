var yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var $i={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */$i.exports;(function(i,t){(function(){var r,o="4.17.23",a=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",f="Expected a function",g="Invalid `variable` option passed into `_.template`",y="__lodash_hash_undefined__",v=500,I="__lodash_placeholder__",O=1,D=2,G=4,R=1,k=2,P=1,X=2,ye=4,ee=8,le=16,ae=32,Ne=64,ue=128,yt=256,Mt=512,Mr=30,Ur="...",vn=800,rn=16,ft=1,Fr=2,Ie=3,ht=1/0,ve=9007199254740991,Br=17976931348623157e292,bn=0/0,pe=4294967295,Ut=pe-1,Xn=pe>>>1,En=[["ary",ue],["bind",P],["bindKey",X],["curry",ee],["curryRight",le],["flip",Mt],["partial",ae],["partialRight",Ne],["rearg",yt]],vt="[object Arguments]",Wr="[object Array]",fh="[object AsyncFunction]",Yn="[object Boolean]",Zn="[object Date]",hh="[object DOMException]",Hr="[object Error]",$r="[object Function]",Sa="[object GeneratorFunction]",et="[object Map]",Qn="[object Number]",dh="[object Null]",bt="[object Object]",Aa="[object Promise]",ph="[object Proxy]",er="[object RegExp]",tt="[object Set]",tr="[object String]",qr="[object Symbol]",gh="[object Undefined]",nr="[object WeakMap]",mh="[object WeakSet]",rr="[object ArrayBuffer]",In="[object DataView]",as="[object Float32Array]",us="[object Float64Array]",cs="[object Int8Array]",ls="[object Int16Array]",fs="[object Int32Array]",hs="[object Uint8Array]",ds="[object Uint8ClampedArray]",ps="[object Uint16Array]",gs="[object Uint32Array]",_h=/\b__p \+= '';/g,wh=/\b(__p \+=) '' \+/g,yh=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ra=/&(?:amp|lt|gt|quot|#39);/g,Ca=/[&<>"']/g,vh=RegExp(Ra.source),bh=RegExp(Ca.source),Eh=/<%-([\s\S]+?)%>/g,Ih=/<%([\s\S]+?)%>/g,Oa=/<%=([\s\S]+?)%>/g,Th=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Sh=/^\w*$/,Ah=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ms=/[\\^$.*+?()[\]{}|]/g,Rh=RegExp(ms.source),_s=/^\s+/,Ch=/\s/,Oh=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ph=/\{\n\/\* \[wrapped with (.+)\] \*/,Lh=/,? & /,xh=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Nh=/[()=,{}\[\]\/\s]/,Dh=/\\(\\)?/g,kh=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Pa=/\w*$/,Mh=/^[-+]0x[0-9a-f]+$/i,Uh=/^0b[01]+$/i,Fh=/^\[object .+?Constructor\]$/,Bh=/^0o[0-7]+$/i,Wh=/^(?:0|[1-9]\d*)$/,Hh=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,zr=/($^)/,$h=/['\n\r\u2028\u2029\\]/g,Vr="\\ud800-\\udfff",qh="\\u0300-\\u036f",zh="\\ufe20-\\ufe2f",Vh="\\u20d0-\\u20ff",La=qh+zh+Vh,xa="\\u2700-\\u27bf",Na="a-z\\xdf-\\xf6\\xf8-\\xff",Gh="\\xac\\xb1\\xd7\\xf7",Kh="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Jh="\\u2000-\\u206f",jh=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Da="A-Z\\xc0-\\xd6\\xd8-\\xde",ka="\\ufe0e\\ufe0f",Ma=Gh+Kh+Jh+jh,ws="['’]",Xh="["+Vr+"]",Ua="["+Ma+"]",Gr="["+La+"]",Fa="\\d+",Yh="["+xa+"]",Ba="["+Na+"]",Wa="[^"+Vr+Ma+Fa+xa+Na+Da+"]",ys="\\ud83c[\\udffb-\\udfff]",Zh="(?:"+Gr+"|"+ys+")",Ha="[^"+Vr+"]",vs="(?:\\ud83c[\\udde6-\\uddff]){2}",bs="[\\ud800-\\udbff][\\udc00-\\udfff]",Tn="["+Da+"]",$a="\\u200d",qa="(?:"+Ba+"|"+Wa+")",Qh="(?:"+Tn+"|"+Wa+")",za="(?:"+ws+"(?:d|ll|m|re|s|t|ve))?",Va="(?:"+ws+"(?:D|LL|M|RE|S|T|VE))?",Ga=Zh+"?",Ka="["+ka+"]?",ed="(?:"+$a+"(?:"+[Ha,vs,bs].join("|")+")"+Ka+Ga+")*",td="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",nd="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ja=Ka+Ga+ed,rd="(?:"+[Yh,vs,bs].join("|")+")"+Ja,id="(?:"+[Ha+Gr+"?",Gr,vs,bs,Xh].join("|")+")",sd=RegExp(ws,"g"),od=RegExp(Gr,"g"),Es=RegExp(ys+"(?="+ys+")|"+id+Ja,"g"),ad=RegExp([Tn+"?"+Ba+"+"+za+"(?="+[Ua,Tn,"$"].join("|")+")",Qh+"+"+Va+"(?="+[Ua,Tn+qa,"$"].join("|")+")",Tn+"?"+qa+"+"+za,Tn+"+"+Va,nd,td,Fa,rd].join("|"),"g"),ud=RegExp("["+$a+Vr+La+ka+"]"),cd=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ld=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],fd=-1,ie={};ie[as]=ie[us]=ie[cs]=ie[ls]=ie[fs]=ie[hs]=ie[ds]=ie[ps]=ie[gs]=!0,ie[vt]=ie[Wr]=ie[rr]=ie[Yn]=ie[In]=ie[Zn]=ie[Hr]=ie[$r]=ie[et]=ie[Qn]=ie[bt]=ie[er]=ie[tt]=ie[tr]=ie[nr]=!1;var re={};re[vt]=re[Wr]=re[rr]=re[In]=re[Yn]=re[Zn]=re[as]=re[us]=re[cs]=re[ls]=re[fs]=re[et]=re[Qn]=re[bt]=re[er]=re[tt]=re[tr]=re[qr]=re[hs]=re[ds]=re[ps]=re[gs]=!0,re[Hr]=re[$r]=re[nr]=!1;var hd={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},dd={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},pd={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},gd={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},md=parseFloat,_d=parseInt,ja=typeof yr=="object"&&yr&&yr.Object===Object&&yr,wd=typeof self=="object"&&self&&self.Object===Object&&self,be=ja||wd||Function("return this")(),Is=t&&!t.nodeType&&t,sn=Is&&!0&&i&&!i.nodeType&&i,Xa=sn&&sn.exports===Is,Ts=Xa&&ja.process,Ve=function(){try{var _=sn&&sn.require&&sn.require("util").types;return _||Ts&&Ts.binding&&Ts.binding("util")}catch{}}(),Ya=Ve&&Ve.isArrayBuffer,Za=Ve&&Ve.isDate,Qa=Ve&&Ve.isMap,eu=Ve&&Ve.isRegExp,tu=Ve&&Ve.isSet,nu=Ve&&Ve.isTypedArray;function Be(_,T,E){switch(E.length){case 0:return _.call(T);case 1:return _.call(T,E[0]);case 2:return _.call(T,E[0],E[1]);case 3:return _.call(T,E[0],E[1],E[2])}return _.apply(T,E)}function yd(_,T,E,x){for(var W=-1,Y=_==null?0:_.length;++W<Y;){var ge=_[W];T(x,ge,E(ge),_)}return x}function Ge(_,T){for(var E=-1,x=_==null?0:_.length;++E<x&&T(_[E],E,_)!==!1;);return _}function vd(_,T){for(var E=_==null?0:_.length;E--&&T(_[E],E,_)!==!1;);return _}function ru(_,T){for(var E=-1,x=_==null?0:_.length;++E<x;)if(!T(_[E],E,_))return!1;return!0}function Ft(_,T){for(var E=-1,x=_==null?0:_.length,W=0,Y=[];++E<x;){var ge=_[E];T(ge,E,_)&&(Y[W++]=ge)}return Y}function Kr(_,T){var E=_==null?0:_.length;return!!E&&Sn(_,T,0)>-1}function Ss(_,T,E){for(var x=-1,W=_==null?0:_.length;++x<W;)if(E(T,_[x]))return!0;return!1}function se(_,T){for(var E=-1,x=_==null?0:_.length,W=Array(x);++E<x;)W[E]=T(_[E],E,_);return W}function Bt(_,T){for(var E=-1,x=T.length,W=_.length;++E<x;)_[W+E]=T[E];return _}function As(_,T,E,x){var W=-1,Y=_==null?0:_.length;for(x&&Y&&(E=_[++W]);++W<Y;)E=T(E,_[W],W,_);return E}function bd(_,T,E,x){var W=_==null?0:_.length;for(x&&W&&(E=_[--W]);W--;)E=T(E,_[W],W,_);return E}function Rs(_,T){for(var E=-1,x=_==null?0:_.length;++E<x;)if(T(_[E],E,_))return!0;return!1}var Ed=Cs("length");function Id(_){return _.split("")}function Td(_){return _.match(xh)||[]}function iu(_,T,E){var x;return E(_,function(W,Y,ge){if(T(W,Y,ge))return x=Y,!1}),x}function Jr(_,T,E,x){for(var W=_.length,Y=E+(x?1:-1);x?Y--:++Y<W;)if(T(_[Y],Y,_))return Y;return-1}function Sn(_,T,E){return T===T?Md(_,T,E):Jr(_,su,E)}function Sd(_,T,E,x){for(var W=E-1,Y=_.length;++W<Y;)if(x(_[W],T))return W;return-1}function su(_){return _!==_}function ou(_,T){var E=_==null?0:_.length;return E?Ps(_,T)/E:bn}function Cs(_){return function(T){return T==null?r:T[_]}}function Os(_){return function(T){return _==null?r:_[T]}}function au(_,T,E,x,W){return W(_,function(Y,ge,te){E=x?(x=!1,Y):T(E,Y,ge,te)}),E}function Ad(_,T){var E=_.length;for(_.sort(T);E--;)_[E]=_[E].value;return _}function Ps(_,T){for(var E,x=-1,W=_.length;++x<W;){var Y=T(_[x]);Y!==r&&(E=E===r?Y:E+Y)}return E}function Ls(_,T){for(var E=-1,x=Array(_);++E<_;)x[E]=T(E);return x}function Rd(_,T){return se(T,function(E){return[E,_[E]]})}function uu(_){return _&&_.slice(0,hu(_)+1).replace(_s,"")}function We(_){return function(T){return _(T)}}function xs(_,T){return se(T,function(E){return _[E]})}function ir(_,T){return _.has(T)}function cu(_,T){for(var E=-1,x=_.length;++E<x&&Sn(T,_[E],0)>-1;);return E}function lu(_,T){for(var E=_.length;E--&&Sn(T,_[E],0)>-1;);return E}function Cd(_,T){for(var E=_.length,x=0;E--;)_[E]===T&&++x;return x}var Od=Os(hd),Pd=Os(dd);function Ld(_){return"\\"+gd[_]}function xd(_,T){return _==null?r:_[T]}function An(_){return ud.test(_)}function Nd(_){return cd.test(_)}function Dd(_){for(var T,E=[];!(T=_.next()).done;)E.push(T.value);return E}function Ns(_){var T=-1,E=Array(_.size);return _.forEach(function(x,W){E[++T]=[W,x]}),E}function fu(_,T){return function(E){return _(T(E))}}function Wt(_,T){for(var E=-1,x=_.length,W=0,Y=[];++E<x;){var ge=_[E];(ge===T||ge===I)&&(_[E]=I,Y[W++]=E)}return Y}function jr(_){var T=-1,E=Array(_.size);return _.forEach(function(x){E[++T]=x}),E}function kd(_){var T=-1,E=Array(_.size);return _.forEach(function(x){E[++T]=[x,x]}),E}function Md(_,T,E){for(var x=E-1,W=_.length;++x<W;)if(_[x]===T)return x;return-1}function Ud(_,T,E){for(var x=E+1;x--;)if(_[x]===T)return x;return x}function Rn(_){return An(_)?Bd(_):Ed(_)}function nt(_){return An(_)?Wd(_):Id(_)}function hu(_){for(var T=_.length;T--&&Ch.test(_.charAt(T)););return T}var Fd=Os(pd);function Bd(_){for(var T=Es.lastIndex=0;Es.test(_);)++T;return T}function Wd(_){return _.match(Es)||[]}function Hd(_){return _.match(ad)||[]}var $d=function _(T){T=T==null?be:Cn.defaults(be.Object(),T,Cn.pick(be,ld));var E=T.Array,x=T.Date,W=T.Error,Y=T.Function,ge=T.Math,te=T.Object,Ds=T.RegExp,qd=T.String,Ke=T.TypeError,Xr=E.prototype,zd=Y.prototype,On=te.prototype,Yr=T["__core-js_shared__"],Zr=zd.toString,Z=On.hasOwnProperty,Vd=0,du=function(){var e=/[^.]+$/.exec(Yr&&Yr.keys&&Yr.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Qr=On.toString,Gd=Zr.call(te),Kd=be._,Jd=Ds("^"+Zr.call(Z).replace(ms,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ei=Xa?T.Buffer:r,Ht=T.Symbol,ti=T.Uint8Array,pu=ei?ei.allocUnsafe:r,ni=fu(te.getPrototypeOf,te),gu=te.create,mu=On.propertyIsEnumerable,ri=Xr.splice,_u=Ht?Ht.isConcatSpreadable:r,sr=Ht?Ht.iterator:r,on=Ht?Ht.toStringTag:r,ii=function(){try{var e=fn(te,"defineProperty");return e({},"",{}),e}catch{}}(),jd=T.clearTimeout!==be.clearTimeout&&T.clearTimeout,Xd=x&&x.now!==be.Date.now&&x.now,Yd=T.setTimeout!==be.setTimeout&&T.setTimeout,si=ge.ceil,oi=ge.floor,ks=te.getOwnPropertySymbols,Zd=ei?ei.isBuffer:r,wu=T.isFinite,Qd=Xr.join,ep=fu(te.keys,te),me=ge.max,Te=ge.min,tp=x.now,np=T.parseInt,yu=ge.random,rp=Xr.reverse,Ms=fn(T,"DataView"),or=fn(T,"Map"),Us=fn(T,"Promise"),Pn=fn(T,"Set"),ar=fn(T,"WeakMap"),ur=fn(te,"create"),ai=ar&&new ar,Ln={},ip=hn(Ms),sp=hn(or),op=hn(Us),ap=hn(Pn),up=hn(ar),ui=Ht?Ht.prototype:r,cr=ui?ui.valueOf:r,vu=ui?ui.toString:r;function h(e){if(ce(e)&&!H(e)&&!(e instanceof K)){if(e instanceof Je)return e;if(Z.call(e,"__wrapped__"))return bc(e)}return new Je(e)}var xn=function(){function e(){}return function(n){if(!oe(n))return{};if(gu)return gu(n);e.prototype=n;var s=new e;return e.prototype=r,s}}();function ci(){}function Je(e,n){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=r}h.templateSettings={escape:Eh,evaluate:Ih,interpolate:Oa,variable:"",imports:{_:h}},h.prototype=ci.prototype,h.prototype.constructor=h,Je.prototype=xn(ci.prototype),Je.prototype.constructor=Je;function K(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=pe,this.__views__=[]}function cp(){var e=new K(this.__wrapped__);return e.__actions__=De(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=De(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=De(this.__views__),e}function lp(){if(this.__filtered__){var e=new K(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function fp(){var e=this.__wrapped__.value(),n=this.__dir__,s=H(e),u=n<0,c=s?e.length:0,d=Ig(0,c,this.__views__),p=d.start,m=d.end,w=m-p,S=u?m:p-1,A=this.__iteratees__,C=A.length,L=0,N=Te(w,this.__takeCount__);if(!s||!u&&c==w&&N==w)return zu(e,this.__actions__);var U=[];e:for(;w--&&L<N;){S+=n;for(var q=-1,F=e[S];++q<C;){var V=A[q],j=V.iteratee,qe=V.type,Oe=j(F);if(qe==Fr)F=Oe;else if(!Oe){if(qe==ft)continue e;break e}}U[L++]=F}return U}K.prototype=xn(ci.prototype),K.prototype.constructor=K;function an(e){var n=-1,s=e==null?0:e.length;for(this.clear();++n<s;){var u=e[n];this.set(u[0],u[1])}}function hp(){this.__data__=ur?ur(null):{},this.size=0}function dp(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}function pp(e){var n=this.__data__;if(ur){var s=n[e];return s===y?r:s}return Z.call(n,e)?n[e]:r}function gp(e){var n=this.__data__;return ur?n[e]!==r:Z.call(n,e)}function mp(e,n){var s=this.__data__;return this.size+=this.has(e)?0:1,s[e]=ur&&n===r?y:n,this}an.prototype.clear=hp,an.prototype.delete=dp,an.prototype.get=pp,an.prototype.has=gp,an.prototype.set=mp;function Et(e){var n=-1,s=e==null?0:e.length;for(this.clear();++n<s;){var u=e[n];this.set(u[0],u[1])}}function _p(){this.__data__=[],this.size=0}function wp(e){var n=this.__data__,s=li(n,e);if(s<0)return!1;var u=n.length-1;return s==u?n.pop():ri.call(n,s,1),--this.size,!0}function yp(e){var n=this.__data__,s=li(n,e);return s<0?r:n[s][1]}function vp(e){return li(this.__data__,e)>-1}function bp(e,n){var s=this.__data__,u=li(s,e);return u<0?(++this.size,s.push([e,n])):s[u][1]=n,this}Et.prototype.clear=_p,Et.prototype.delete=wp,Et.prototype.get=yp,Et.prototype.has=vp,Et.prototype.set=bp;function It(e){var n=-1,s=e==null?0:e.length;for(this.clear();++n<s;){var u=e[n];this.set(u[0],u[1])}}function Ep(){this.size=0,this.__data__={hash:new an,map:new(or||Et),string:new an}}function Ip(e){var n=Ei(this,e).delete(e);return this.size-=n?1:0,n}function Tp(e){return Ei(this,e).get(e)}function Sp(e){return Ei(this,e).has(e)}function Ap(e,n){var s=Ei(this,e),u=s.size;return s.set(e,n),this.size+=s.size==u?0:1,this}It.prototype.clear=Ep,It.prototype.delete=Ip,It.prototype.get=Tp,It.prototype.has=Sp,It.prototype.set=Ap;function un(e){var n=-1,s=e==null?0:e.length;for(this.__data__=new It;++n<s;)this.add(e[n])}function Rp(e){return this.__data__.set(e,y),this}function Cp(e){return this.__data__.has(e)}un.prototype.add=un.prototype.push=Rp,un.prototype.has=Cp;function rt(e){var n=this.__data__=new Et(e);this.size=n.size}function Op(){this.__data__=new Et,this.size=0}function Pp(e){var n=this.__data__,s=n.delete(e);return this.size=n.size,s}function Lp(e){return this.__data__.get(e)}function xp(e){return this.__data__.has(e)}function Np(e,n){var s=this.__data__;if(s instanceof Et){var u=s.__data__;if(!or||u.length<a-1)return u.push([e,n]),this.size=++s.size,this;s=this.__data__=new It(u)}return s.set(e,n),this.size=s.size,this}rt.prototype.clear=Op,rt.prototype.delete=Pp,rt.prototype.get=Lp,rt.prototype.has=xp,rt.prototype.set=Np;function bu(e,n){var s=H(e),u=!s&&dn(e),c=!s&&!u&&Gt(e),d=!s&&!u&&!c&&Mn(e),p=s||u||c||d,m=p?Ls(e.length,qd):[],w=m.length;for(var S in e)(n||Z.call(e,S))&&!(p&&(S=="length"||c&&(S=="offset"||S=="parent")||d&&(S=="buffer"||S=="byteLength"||S=="byteOffset")||Rt(S,w)))&&m.push(S);return m}function Eu(e){var n=e.length;return n?e[Js(0,n-1)]:r}function Dp(e,n){return Ii(De(e),cn(n,0,e.length))}function kp(e){return Ii(De(e))}function Fs(e,n,s){(s!==r&&!it(e[n],s)||s===r&&!(n in e))&&Tt(e,n,s)}function lr(e,n,s){var u=e[n];(!(Z.call(e,n)&&it(u,s))||s===r&&!(n in e))&&Tt(e,n,s)}function li(e,n){for(var s=e.length;s--;)if(it(e[s][0],n))return s;return-1}function Mp(e,n,s,u){return $t(e,function(c,d,p){n(u,c,s(c),p)}),u}function Iu(e,n){return e&&pt(n,we(n),e)}function Up(e,n){return e&&pt(n,Me(n),e)}function Tt(e,n,s){n=="__proto__"&&ii?ii(e,n,{configurable:!0,enumerable:!0,value:s,writable:!0}):e[n]=s}function Bs(e,n){for(var s=-1,u=n.length,c=E(u),d=e==null;++s<u;)c[s]=d?r:vo(e,n[s]);return c}function cn(e,n,s){return e===e&&(s!==r&&(e=e<=s?e:s),n!==r&&(e=e>=n?e:n)),e}function je(e,n,s,u,c,d){var p,m=n&O,w=n&D,S=n&G;if(s&&(p=c?s(e,u,c,d):s(e)),p!==r)return p;if(!oe(e))return e;var A=H(e);if(A){if(p=Sg(e),!m)return De(e,p)}else{var C=Se(e),L=C==$r||C==Sa;if(Gt(e))return Ku(e,m);if(C==bt||C==vt||L&&!c){if(p=w||L?{}:hc(e),!m)return w?pg(e,Up(p,e)):dg(e,Iu(p,e))}else{if(!re[C])return c?e:{};p=Ag(e,C,m)}}d||(d=new rt);var N=d.get(e);if(N)return N;d.set(e,p),Hc(e)?e.forEach(function(F){p.add(je(F,n,s,F,e,d))}):Bc(e)&&e.forEach(function(F,V){p.set(V,je(F,n,s,V,e,d))});var U=S?w?so:io:w?Me:we,q=A?r:U(e);return Ge(q||e,function(F,V){q&&(V=F,F=e[V]),lr(p,V,je(F,n,s,V,e,d))}),p}function Fp(e){var n=we(e);return function(s){return Tu(s,e,n)}}function Tu(e,n,s){var u=s.length;if(e==null)return!u;for(e=te(e);u--;){var c=s[u],d=n[c],p=e[c];if(p===r&&!(c in e)||!d(p))return!1}return!0}function Su(e,n,s){if(typeof e!="function")throw new Ke(f);return _r(function(){e.apply(r,s)},n)}function fr(e,n,s,u){var c=-1,d=Kr,p=!0,m=e.length,w=[],S=n.length;if(!m)return w;s&&(n=se(n,We(s))),u?(d=Ss,p=!1):n.length>=a&&(d=ir,p=!1,n=new un(n));e:for(;++c<m;){var A=e[c],C=s==null?A:s(A);if(A=u||A!==0?A:0,p&&C===C){for(var L=S;L--;)if(n[L]===C)continue e;w.push(A)}else d(n,C,u)||w.push(A)}return w}var $t=Zu(dt),Au=Zu(Hs,!0);function Bp(e,n){var s=!0;return $t(e,function(u,c,d){return s=!!n(u,c,d),s}),s}function fi(e,n,s){for(var u=-1,c=e.length;++u<c;){var d=e[u],p=n(d);if(p!=null&&(m===r?p===p&&!$e(p):s(p,m)))var m=p,w=d}return w}function Wp(e,n,s,u){var c=e.length;for(s=$(s),s<0&&(s=-s>c?0:c+s),u=u===r||u>c?c:$(u),u<0&&(u+=c),u=s>u?0:qc(u);s<u;)e[s++]=n;return e}function Ru(e,n){var s=[];return $t(e,function(u,c,d){n(u,c,d)&&s.push(u)}),s}function Ee(e,n,s,u,c){var d=-1,p=e.length;for(s||(s=Cg),c||(c=[]);++d<p;){var m=e[d];n>0&&s(m)?n>1?Ee(m,n-1,s,u,c):Bt(c,m):u||(c[c.length]=m)}return c}var Ws=Qu(),Cu=Qu(!0);function dt(e,n){return e&&Ws(e,n,we)}function Hs(e,n){return e&&Cu(e,n,we)}function hi(e,n){return Ft(n,function(s){return Ct(e[s])})}function ln(e,n){n=zt(n,e);for(var s=0,u=n.length;e!=null&&s<u;)e=e[gt(n[s++])];return s&&s==u?e:r}function Ou(e,n,s){var u=n(e);return H(e)?u:Bt(u,s(e))}function Re(e){return e==null?e===r?gh:dh:on&&on in te(e)?Eg(e):kg(e)}function $s(e,n){return e>n}function Hp(e,n){return e!=null&&Z.call(e,n)}function $p(e,n){return e!=null&&n in te(e)}function qp(e,n,s){return e>=Te(n,s)&&e<me(n,s)}function qs(e,n,s){for(var u=s?Ss:Kr,c=e[0].length,d=e.length,p=d,m=E(d),w=1/0,S=[];p--;){var A=e[p];p&&n&&(A=se(A,We(n))),w=Te(A.length,w),m[p]=!s&&(n||c>=120&&A.length>=120)?new un(p&&A):r}A=e[0];var C=-1,L=m[0];e:for(;++C<c&&S.length<w;){var N=A[C],U=n?n(N):N;if(N=s||N!==0?N:0,!(L?ir(L,U):u(S,U,s))){for(p=d;--p;){var q=m[p];if(!(q?ir(q,U):u(e[p],U,s)))continue e}L&&L.push(U),S.push(N)}}return S}function zp(e,n,s,u){return dt(e,function(c,d,p){n(u,s(c),d,p)}),u}function hr(e,n,s){n=zt(n,e),e=mc(e,n);var u=e==null?e:e[gt(Ye(n))];return u==null?r:Be(u,e,s)}function Pu(e){return ce(e)&&Re(e)==vt}function Vp(e){return ce(e)&&Re(e)==rr}function Gp(e){return ce(e)&&Re(e)==Zn}function dr(e,n,s,u,c){return e===n?!0:e==null||n==null||!ce(e)&&!ce(n)?e!==e&&n!==n:Kp(e,n,s,u,dr,c)}function Kp(e,n,s,u,c,d){var p=H(e),m=H(n),w=p?Wr:Se(e),S=m?Wr:Se(n);w=w==vt?bt:w,S=S==vt?bt:S;var A=w==bt,C=S==bt,L=w==S;if(L&&Gt(e)){if(!Gt(n))return!1;p=!0,A=!1}if(L&&!A)return d||(d=new rt),p||Mn(e)?cc(e,n,s,u,c,d):vg(e,n,w,s,u,c,d);if(!(s&R)){var N=A&&Z.call(e,"__wrapped__"),U=C&&Z.call(n,"__wrapped__");if(N||U){var q=N?e.value():e,F=U?n.value():n;return d||(d=new rt),c(q,F,s,u,d)}}return L?(d||(d=new rt),bg(e,n,s,u,c,d)):!1}function Jp(e){return ce(e)&&Se(e)==et}function zs(e,n,s,u){var c=s.length,d=c,p=!u;if(e==null)return!d;for(e=te(e);c--;){var m=s[c];if(p&&m[2]?m[1]!==e[m[0]]:!(m[0]in e))return!1}for(;++c<d;){m=s[c];var w=m[0],S=e[w],A=m[1];if(p&&m[2]){if(S===r&&!(w in e))return!1}else{var C=new rt;if(u)var L=u(S,A,w,e,n,C);if(!(L===r?dr(A,S,R|k,u,C):L))return!1}}return!0}function Lu(e){if(!oe(e)||Pg(e))return!1;var n=Ct(e)?Jd:Fh;return n.test(hn(e))}function jp(e){return ce(e)&&Re(e)==er}function Xp(e){return ce(e)&&Se(e)==tt}function Yp(e){return ce(e)&&Oi(e.length)&&!!ie[Re(e)]}function xu(e){return typeof e=="function"?e:e==null?Ue:typeof e=="object"?H(e)?ku(e[0],e[1]):Du(e):el(e)}function Vs(e){if(!mr(e))return ep(e);var n=[];for(var s in te(e))Z.call(e,s)&&s!="constructor"&&n.push(s);return n}function Zp(e){if(!oe(e))return Dg(e);var n=mr(e),s=[];for(var u in e)u=="constructor"&&(n||!Z.call(e,u))||s.push(u);return s}function Gs(e,n){return e<n}function Nu(e,n){var s=-1,u=ke(e)?E(e.length):[];return $t(e,function(c,d,p){u[++s]=n(c,d,p)}),u}function Du(e){var n=ao(e);return n.length==1&&n[0][2]?pc(n[0][0],n[0][1]):function(s){return s===e||zs(s,e,n)}}function ku(e,n){return co(e)&&dc(n)?pc(gt(e),n):function(s){var u=vo(s,e);return u===r&&u===n?bo(s,e):dr(n,u,R|k)}}function di(e,n,s,u,c){e!==n&&Ws(n,function(d,p){if(c||(c=new rt),oe(d))Qp(e,n,p,s,di,u,c);else{var m=u?u(fo(e,p),d,p+"",e,n,c):r;m===r&&(m=d),Fs(e,p,m)}},Me)}function Qp(e,n,s,u,c,d,p){var m=fo(e,s),w=fo(n,s),S=p.get(w);if(S){Fs(e,s,S);return}var A=d?d(m,w,s+"",e,n,p):r,C=A===r;if(C){var L=H(w),N=!L&&Gt(w),U=!L&&!N&&Mn(w);A=w,L||N||U?H(m)?A=m:fe(m)?A=De(m):N?(C=!1,A=Ku(w,!0)):U?(C=!1,A=Ju(w,!0)):A=[]:wr(w)||dn(w)?(A=m,dn(m)?A=zc(m):(!oe(m)||Ct(m))&&(A=hc(w))):C=!1}C&&(p.set(w,A),c(A,w,u,d,p),p.delete(w)),Fs(e,s,A)}function Mu(e,n){var s=e.length;if(s)return n+=n<0?s:0,Rt(n,s)?e[n]:r}function Uu(e,n,s){n.length?n=se(n,function(d){return H(d)?function(p){return ln(p,d.length===1?d[0]:d)}:d}):n=[Ue];var u=-1;n=se(n,We(M()));var c=Nu(e,function(d,p,m){var w=se(n,function(S){return S(d)});return{criteria:w,index:++u,value:d}});return Ad(c,function(d,p){return hg(d,p,s)})}function eg(e,n){return Fu(e,n,function(s,u){return bo(e,u)})}function Fu(e,n,s){for(var u=-1,c=n.length,d={};++u<c;){var p=n[u],m=ln(e,p);s(m,p)&&pr(d,zt(p,e),m)}return d}function tg(e){return function(n){return ln(n,e)}}function Ks(e,n,s,u){var c=u?Sd:Sn,d=-1,p=n.length,m=e;for(e===n&&(n=De(n)),s&&(m=se(e,We(s)));++d<p;)for(var w=0,S=n[d],A=s?s(S):S;(w=c(m,A,w,u))>-1;)m!==e&&ri.call(m,w,1),ri.call(e,w,1);return e}function Bu(e,n){for(var s=e?n.length:0,u=s-1;s--;){var c=n[s];if(s==u||c!==d){var d=c;Rt(c)?ri.call(e,c,1):Ys(e,c)}}return e}function Js(e,n){return e+oi(yu()*(n-e+1))}function ng(e,n,s,u){for(var c=-1,d=me(si((n-e)/(s||1)),0),p=E(d);d--;)p[u?d:++c]=e,e+=s;return p}function js(e,n){var s="";if(!e||n<1||n>ve)return s;do n%2&&(s+=e),n=oi(n/2),n&&(e+=e);while(n);return s}function z(e,n){return ho(gc(e,n,Ue),e+"")}function rg(e){return Eu(Un(e))}function ig(e,n){var s=Un(e);return Ii(s,cn(n,0,s.length))}function pr(e,n,s,u){if(!oe(e))return e;n=zt(n,e);for(var c=-1,d=n.length,p=d-1,m=e;m!=null&&++c<d;){var w=gt(n[c]),S=s;if(w==="__proto__"||w==="constructor"||w==="prototype")return e;if(c!=p){var A=m[w];S=u?u(A,w,m):r,S===r&&(S=oe(A)?A:Rt(n[c+1])?[]:{})}lr(m,w,S),m=m[w]}return e}var Wu=ai?function(e,n){return ai.set(e,n),e}:Ue,sg=ii?function(e,n){return ii(e,"toString",{configurable:!0,enumerable:!1,value:Io(n),writable:!0})}:Ue;function og(e){return Ii(Un(e))}function Xe(e,n,s){var u=-1,c=e.length;n<0&&(n=-n>c?0:c+n),s=s>c?c:s,s<0&&(s+=c),c=n>s?0:s-n>>>0,n>>>=0;for(var d=E(c);++u<c;)d[u]=e[u+n];return d}function ag(e,n){var s;return $t(e,function(u,c,d){return s=n(u,c,d),!s}),!!s}function pi(e,n,s){var u=0,c=e==null?u:e.length;if(typeof n=="number"&&n===n&&c<=Xn){for(;u<c;){var d=u+c>>>1,p=e[d];p!==null&&!$e(p)&&(s?p<=n:p<n)?u=d+1:c=d}return c}return Xs(e,n,Ue,s)}function Xs(e,n,s,u){var c=0,d=e==null?0:e.length;if(d===0)return 0;n=s(n);for(var p=n!==n,m=n===null,w=$e(n),S=n===r;c<d;){var A=oi((c+d)/2),C=s(e[A]),L=C!==r,N=C===null,U=C===C,q=$e(C);if(p)var F=u||U;else S?F=U&&(u||L):m?F=U&&L&&(u||!N):w?F=U&&L&&!N&&(u||!q):N||q?F=!1:F=u?C<=n:C<n;F?c=A+1:d=A}return Te(d,Ut)}function Hu(e,n){for(var s=-1,u=e.length,c=0,d=[];++s<u;){var p=e[s],m=n?n(p):p;if(!s||!it(m,w)){var w=m;d[c++]=p===0?0:p}}return d}function $u(e){return typeof e=="number"?e:$e(e)?bn:+e}function He(e){if(typeof e=="string")return e;if(H(e))return se(e,He)+"";if($e(e))return vu?vu.call(e):"";var n=e+"";return n=="0"&&1/e==-ht?"-0":n}function qt(e,n,s){var u=-1,c=Kr,d=e.length,p=!0,m=[],w=m;if(s)p=!1,c=Ss;else if(d>=a){var S=n?null:wg(e);if(S)return jr(S);p=!1,c=ir,w=new un}else w=n?[]:m;e:for(;++u<d;){var A=e[u],C=n?n(A):A;if(A=s||A!==0?A:0,p&&C===C){for(var L=w.length;L--;)if(w[L]===C)continue e;n&&w.push(C),m.push(A)}else c(w,C,s)||(w!==m&&w.push(C),m.push(A))}return m}function Ys(e,n){n=zt(n,e);var s=-1,u=n.length;if(!u)return!0;for(var c=e==null||typeof e!="object"&&typeof e!="function";++s<u;){var d=n[s];if(typeof d=="string"){if(d==="__proto__"&&!Z.call(e,"__proto__"))return!1;if(d==="constructor"&&s+1<u&&typeof n[s+1]=="string"&&n[s+1]==="prototype"){if(c&&s===0)continue;return!1}}}var p=mc(e,n);return p==null||delete p[gt(Ye(n))]}function qu(e,n,s,u){return pr(e,n,s(ln(e,n)),u)}function gi(e,n,s,u){for(var c=e.length,d=u?c:-1;(u?d--:++d<c)&&n(e[d],d,e););return s?Xe(e,u?0:d,u?d+1:c):Xe(e,u?d+1:0,u?c:d)}function zu(e,n){var s=e;return s instanceof K&&(s=s.value()),As(n,function(u,c){return c.func.apply(c.thisArg,Bt([u],c.args))},s)}function Zs(e,n,s){var u=e.length;if(u<2)return u?qt(e[0]):[];for(var c=-1,d=E(u);++c<u;)for(var p=e[c],m=-1;++m<u;)m!=c&&(d[c]=fr(d[c]||p,e[m],n,s));return qt(Ee(d,1),n,s)}function Vu(e,n,s){for(var u=-1,c=e.length,d=n.length,p={};++u<c;){var m=u<d?n[u]:r;s(p,e[u],m)}return p}function Qs(e){return fe(e)?e:[]}function eo(e){return typeof e=="function"?e:Ue}function zt(e,n){return H(e)?e:co(e,n)?[e]:vc(Q(e))}var ug=z;function Vt(e,n,s){var u=e.length;return s=s===r?u:s,!n&&s>=u?e:Xe(e,n,s)}var Gu=jd||function(e){return be.clearTimeout(e)};function Ku(e,n){if(n)return e.slice();var s=e.length,u=pu?pu(s):new e.constructor(s);return e.copy(u),u}function to(e){var n=new e.constructor(e.byteLength);return new ti(n).set(new ti(e)),n}function cg(e,n){var s=n?to(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.byteLength)}function lg(e){var n=new e.constructor(e.source,Pa.exec(e));return n.lastIndex=e.lastIndex,n}function fg(e){return cr?te(cr.call(e)):{}}function Ju(e,n){var s=n?to(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.length)}function ju(e,n){if(e!==n){var s=e!==r,u=e===null,c=e===e,d=$e(e),p=n!==r,m=n===null,w=n===n,S=$e(n);if(!m&&!S&&!d&&e>n||d&&p&&w&&!m&&!S||u&&p&&w||!s&&w||!c)return 1;if(!u&&!d&&!S&&e<n||S&&s&&c&&!u&&!d||m&&s&&c||!p&&c||!w)return-1}return 0}function hg(e,n,s){for(var u=-1,c=e.criteria,d=n.criteria,p=c.length,m=s.length;++u<p;){var w=ju(c[u],d[u]);if(w){if(u>=m)return w;var S=s[u];return w*(S=="desc"?-1:1)}}return e.index-n.index}function Xu(e,n,s,u){for(var c=-1,d=e.length,p=s.length,m=-1,w=n.length,S=me(d-p,0),A=E(w+S),C=!u;++m<w;)A[m]=n[m];for(;++c<p;)(C||c<d)&&(A[s[c]]=e[c]);for(;S--;)A[m++]=e[c++];return A}function Yu(e,n,s,u){for(var c=-1,d=e.length,p=-1,m=s.length,w=-1,S=n.length,A=me(d-m,0),C=E(A+S),L=!u;++c<A;)C[c]=e[c];for(var N=c;++w<S;)C[N+w]=n[w];for(;++p<m;)(L||c<d)&&(C[N+s[p]]=e[c++]);return C}function De(e,n){var s=-1,u=e.length;for(n||(n=E(u));++s<u;)n[s]=e[s];return n}function pt(e,n,s,u){var c=!s;s||(s={});for(var d=-1,p=n.length;++d<p;){var m=n[d],w=u?u(s[m],e[m],m,s,e):r;w===r&&(w=e[m]),c?Tt(s,m,w):lr(s,m,w)}return s}function dg(e,n){return pt(e,uo(e),n)}function pg(e,n){return pt(e,lc(e),n)}function mi(e,n){return function(s,u){var c=H(s)?yd:Mp,d=n?n():{};return c(s,e,M(u,2),d)}}function Nn(e){return z(function(n,s){var u=-1,c=s.length,d=c>1?s[c-1]:r,p=c>2?s[2]:r;for(d=e.length>3&&typeof d=="function"?(c--,d):r,p&&Ce(s[0],s[1],p)&&(d=c<3?r:d,c=1),n=te(n);++u<c;){var m=s[u];m&&e(n,m,u,d)}return n})}function Zu(e,n){return function(s,u){if(s==null)return s;if(!ke(s))return e(s,u);for(var c=s.length,d=n?c:-1,p=te(s);(n?d--:++d<c)&&u(p[d],d,p)!==!1;);return s}}function Qu(e){return function(n,s,u){for(var c=-1,d=te(n),p=u(n),m=p.length;m--;){var w=p[e?m:++c];if(s(d[w],w,d)===!1)break}return n}}function gg(e,n,s){var u=n&P,c=gr(e);function d(){var p=this&&this!==be&&this instanceof d?c:e;return p.apply(u?s:this,arguments)}return d}function ec(e){return function(n){n=Q(n);var s=An(n)?nt(n):r,u=s?s[0]:n.charAt(0),c=s?Vt(s,1).join(""):n.slice(1);return u[e]()+c}}function Dn(e){return function(n){return As(Zc(Yc(n).replace(sd,"")),e,"")}}function gr(e){return function(){var n=arguments;switch(n.length){case 0:return new e;case 1:return new e(n[0]);case 2:return new e(n[0],n[1]);case 3:return new e(n[0],n[1],n[2]);case 4:return new e(n[0],n[1],n[2],n[3]);case 5:return new e(n[0],n[1],n[2],n[3],n[4]);case 6:return new e(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new e(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var s=xn(e.prototype),u=e.apply(s,n);return oe(u)?u:s}}function mg(e,n,s){var u=gr(e);function c(){for(var d=arguments.length,p=E(d),m=d,w=kn(c);m--;)p[m]=arguments[m];var S=d<3&&p[0]!==w&&p[d-1]!==w?[]:Wt(p,w);if(d-=S.length,d<s)return sc(e,n,_i,c.placeholder,r,p,S,r,r,s-d);var A=this&&this!==be&&this instanceof c?u:e;return Be(A,this,p)}return c}function tc(e){return function(n,s,u){var c=te(n);if(!ke(n)){var d=M(s,3);n=we(n),s=function(m){return d(c[m],m,c)}}var p=e(n,s,u);return p>-1?c[d?n[p]:p]:r}}function nc(e){return At(function(n){var s=n.length,u=s,c=Je.prototype.thru;for(e&&n.reverse();u--;){var d=n[u];if(typeof d!="function")throw new Ke(f);if(c&&!p&&bi(d)=="wrapper")var p=new Je([],!0)}for(u=p?u:s;++u<s;){d=n[u];var m=bi(d),w=m=="wrapper"?oo(d):r;w&&lo(w[0])&&w[1]==(ue|ee|ae|yt)&&!w[4].length&&w[9]==1?p=p[bi(w[0])].apply(p,w[3]):p=d.length==1&&lo(d)?p[m]():p.thru(d)}return function(){var S=arguments,A=S[0];if(p&&S.length==1&&H(A))return p.plant(A).value();for(var C=0,L=s?n[C].apply(this,S):A;++C<s;)L=n[C].call(this,L);return L}})}function _i(e,n,s,u,c,d,p,m,w,S){var A=n&ue,C=n&P,L=n&X,N=n&(ee|le),U=n&Mt,q=L?r:gr(e);function F(){for(var V=arguments.length,j=E(V),qe=V;qe--;)j[qe]=arguments[qe];if(N)var Oe=kn(F),ze=Cd(j,Oe);if(u&&(j=Xu(j,u,c,N)),d&&(j=Yu(j,d,p,N)),V-=ze,N&&V<S){var he=Wt(j,Oe);return sc(e,n,_i,F.placeholder,s,j,he,m,w,S-V)}var st=C?s:this,Pt=L?st[e]:e;return V=j.length,m?j=Mg(j,m):U&&V>1&&j.reverse(),A&&w<V&&(j.length=w),this&&this!==be&&this instanceof F&&(Pt=q||gr(Pt)),Pt.apply(st,j)}return F}function rc(e,n){return function(s,u){return zp(s,e,n(u),{})}}function wi(e,n){return function(s,u){var c;if(s===r&&u===r)return n;if(s!==r&&(c=s),u!==r){if(c===r)return u;typeof s=="string"||typeof u=="string"?(s=He(s),u=He(u)):(s=$u(s),u=$u(u)),c=e(s,u)}return c}}function no(e){return At(function(n){return n=se(n,We(M())),z(function(s){var u=this;return e(n,function(c){return Be(c,u,s)})})})}function yi(e,n){n=n===r?" ":He(n);var s=n.length;if(s<2)return s?js(n,e):n;var u=js(n,si(e/Rn(n)));return An(n)?Vt(nt(u),0,e).join(""):u.slice(0,e)}function _g(e,n,s,u){var c=n&P,d=gr(e);function p(){for(var m=-1,w=arguments.length,S=-1,A=u.length,C=E(A+w),L=this&&this!==be&&this instanceof p?d:e;++S<A;)C[S]=u[S];for(;w--;)C[S++]=arguments[++m];return Be(L,c?s:this,C)}return p}function ic(e){return function(n,s,u){return u&&typeof u!="number"&&Ce(n,s,u)&&(s=u=r),n=Ot(n),s===r?(s=n,n=0):s=Ot(s),u=u===r?n<s?1:-1:Ot(u),ng(n,s,u,e)}}function vi(e){return function(n,s){return typeof n=="string"&&typeof s=="string"||(n=Ze(n),s=Ze(s)),e(n,s)}}function sc(e,n,s,u,c,d,p,m,w,S){var A=n&ee,C=A?p:r,L=A?r:p,N=A?d:r,U=A?r:d;n|=A?ae:Ne,n&=~(A?Ne:ae),n&ye||(n&=~(P|X));var q=[e,n,c,N,C,U,L,m,w,S],F=s.apply(r,q);return lo(e)&&_c(F,q),F.placeholder=u,wc(F,e,n)}function ro(e){var n=ge[e];return function(s,u){if(s=Ze(s),u=u==null?0:Te($(u),292),u&&wu(s)){var c=(Q(s)+"e").split("e"),d=n(c[0]+"e"+(+c[1]+u));return c=(Q(d)+"e").split("e"),+(c[0]+"e"+(+c[1]-u))}return n(s)}}var wg=Pn&&1/jr(new Pn([,-0]))[1]==ht?function(e){return new Pn(e)}:Ao;function oc(e){return function(n){var s=Se(n);return s==et?Ns(n):s==tt?kd(n):Rd(n,e(n))}}function St(e,n,s,u,c,d,p,m){var w=n&X;if(!w&&typeof e!="function")throw new Ke(f);var S=u?u.length:0;if(S||(n&=~(ae|Ne),u=c=r),p=p===r?p:me($(p),0),m=m===r?m:$(m),S-=c?c.length:0,n&Ne){var A=u,C=c;u=c=r}var L=w?r:oo(e),N=[e,n,s,u,c,A,C,d,p,m];if(L&&Ng(N,L),e=N[0],n=N[1],s=N[2],u=N[3],c=N[4],m=N[9]=N[9]===r?w?0:e.length:me(N[9]-S,0),!m&&n&(ee|le)&&(n&=~(ee|le)),!n||n==P)var U=gg(e,n,s);else n==ee||n==le?U=mg(e,n,m):(n==ae||n==(P|ae))&&!c.length?U=_g(e,n,s,u):U=_i.apply(r,N);var q=L?Wu:_c;return wc(q(U,N),e,n)}function ac(e,n,s,u){return e===r||it(e,On[s])&&!Z.call(u,s)?n:e}function uc(e,n,s,u,c,d){return oe(e)&&oe(n)&&(d.set(n,e),di(e,n,r,uc,d),d.delete(n)),e}function yg(e){return wr(e)?r:e}function cc(e,n,s,u,c,d){var p=s&R,m=e.length,w=n.length;if(m!=w&&!(p&&w>m))return!1;var S=d.get(e),A=d.get(n);if(S&&A)return S==n&&A==e;var C=-1,L=!0,N=s&k?new un:r;for(d.set(e,n),d.set(n,e);++C<m;){var U=e[C],q=n[C];if(u)var F=p?u(q,U,C,n,e,d):u(U,q,C,e,n,d);if(F!==r){if(F)continue;L=!1;break}if(N){if(!Rs(n,function(V,j){if(!ir(N,j)&&(U===V||c(U,V,s,u,d)))return N.push(j)})){L=!1;break}}else if(!(U===q||c(U,q,s,u,d))){L=!1;break}}return d.delete(e),d.delete(n),L}function vg(e,n,s,u,c,d,p){switch(s){case In:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case rr:return!(e.byteLength!=n.byteLength||!d(new ti(e),new ti(n)));case Yn:case Zn:case Qn:return it(+e,+n);case Hr:return e.name==n.name&&e.message==n.message;case er:case tr:return e==n+"";case et:var m=Ns;case tt:var w=u&R;if(m||(m=jr),e.size!=n.size&&!w)return!1;var S=p.get(e);if(S)return S==n;u|=k,p.set(e,n);var A=cc(m(e),m(n),u,c,d,p);return p.delete(e),A;case qr:if(cr)return cr.call(e)==cr.call(n)}return!1}function bg(e,n,s,u,c,d){var p=s&R,m=io(e),w=m.length,S=io(n),A=S.length;if(w!=A&&!p)return!1;for(var C=w;C--;){var L=m[C];if(!(p?L in n:Z.call(n,L)))return!1}var N=d.get(e),U=d.get(n);if(N&&U)return N==n&&U==e;var q=!0;d.set(e,n),d.set(n,e);for(var F=p;++C<w;){L=m[C];var V=e[L],j=n[L];if(u)var qe=p?u(j,V,L,n,e,d):u(V,j,L,e,n,d);if(!(qe===r?V===j||c(V,j,s,u,d):qe)){q=!1;break}F||(F=L=="constructor")}if(q&&!F){var Oe=e.constructor,ze=n.constructor;Oe!=ze&&"constructor"in e&&"constructor"in n&&!(typeof Oe=="function"&&Oe instanceof Oe&&typeof ze=="function"&&ze instanceof ze)&&(q=!1)}return d.delete(e),d.delete(n),q}function At(e){return ho(gc(e,r,Tc),e+"")}function io(e){return Ou(e,we,uo)}function so(e){return Ou(e,Me,lc)}var oo=ai?function(e){return ai.get(e)}:Ao;function bi(e){for(var n=e.name+"",s=Ln[n],u=Z.call(Ln,n)?s.length:0;u--;){var c=s[u],d=c.func;if(d==null||d==e)return c.name}return n}function kn(e){var n=Z.call(h,"placeholder")?h:e;return n.placeholder}function M(){var e=h.iteratee||To;return e=e===To?xu:e,arguments.length?e(arguments[0],arguments[1]):e}function Ei(e,n){var s=e.__data__;return Og(n)?s[typeof n=="string"?"string":"hash"]:s.map}function ao(e){for(var n=we(e),s=n.length;s--;){var u=n[s],c=e[u];n[s]=[u,c,dc(c)]}return n}function fn(e,n){var s=xd(e,n);return Lu(s)?s:r}function Eg(e){var n=Z.call(e,on),s=e[on];try{e[on]=r;var u=!0}catch{}var c=Qr.call(e);return u&&(n?e[on]=s:delete e[on]),c}var uo=ks?function(e){return e==null?[]:(e=te(e),Ft(ks(e),function(n){return mu.call(e,n)}))}:Ro,lc=ks?function(e){for(var n=[];e;)Bt(n,uo(e)),e=ni(e);return n}:Ro,Se=Re;(Ms&&Se(new Ms(new ArrayBuffer(1)))!=In||or&&Se(new or)!=et||Us&&Se(Us.resolve())!=Aa||Pn&&Se(new Pn)!=tt||ar&&Se(new ar)!=nr)&&(Se=function(e){var n=Re(e),s=n==bt?e.constructor:r,u=s?hn(s):"";if(u)switch(u){case ip:return In;case sp:return et;case op:return Aa;case ap:return tt;case up:return nr}return n});function Ig(e,n,s){for(var u=-1,c=s.length;++u<c;){var d=s[u],p=d.size;switch(d.type){case"drop":e+=p;break;case"dropRight":n-=p;break;case"take":n=Te(n,e+p);break;case"takeRight":e=me(e,n-p);break}}return{start:e,end:n}}function Tg(e){var n=e.match(Ph);return n?n[1].split(Lh):[]}function fc(e,n,s){n=zt(n,e);for(var u=-1,c=n.length,d=!1;++u<c;){var p=gt(n[u]);if(!(d=e!=null&&s(e,p)))break;e=e[p]}return d||++u!=c?d:(c=e==null?0:e.length,!!c&&Oi(c)&&Rt(p,c)&&(H(e)||dn(e)))}function Sg(e){var n=e.length,s=new e.constructor(n);return n&&typeof e[0]=="string"&&Z.call(e,"index")&&(s.index=e.index,s.input=e.input),s}function hc(e){return typeof e.constructor=="function"&&!mr(e)?xn(ni(e)):{}}function Ag(e,n,s){var u=e.constructor;switch(n){case rr:return to(e);case Yn:case Zn:return new u(+e);case In:return cg(e,s);case as:case us:case cs:case ls:case fs:case hs:case ds:case ps:case gs:return Ju(e,s);case et:return new u;case Qn:case tr:return new u(e);case er:return lg(e);case tt:return new u;case qr:return fg(e)}}function Rg(e,n){var s=n.length;if(!s)return e;var u=s-1;return n[u]=(s>1?"& ":"")+n[u],n=n.join(s>2?", ":" "),e.replace(Oh,`{
/* [wrapped with `+n+`] */
`)}function Cg(e){return H(e)||dn(e)||!!(_u&&e&&e[_u])}function Rt(e,n){var s=typeof e;return n=n??ve,!!n&&(s=="number"||s!="symbol"&&Wh.test(e))&&e>-1&&e%1==0&&e<n}function Ce(e,n,s){if(!oe(s))return!1;var u=typeof n;return(u=="number"?ke(s)&&Rt(n,s.length):u=="string"&&n in s)?it(s[n],e):!1}function co(e,n){if(H(e))return!1;var s=typeof e;return s=="number"||s=="symbol"||s=="boolean"||e==null||$e(e)?!0:Sh.test(e)||!Th.test(e)||n!=null&&e in te(n)}function Og(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}function lo(e){var n=bi(e),s=h[n];if(typeof s!="function"||!(n in K.prototype))return!1;if(e===s)return!0;var u=oo(s);return!!u&&e===u[0]}function Pg(e){return!!du&&du in e}var Lg=Yr?Ct:Co;function mr(e){var n=e&&e.constructor,s=typeof n=="function"&&n.prototype||On;return e===s}function dc(e){return e===e&&!oe(e)}function pc(e,n){return function(s){return s==null?!1:s[e]===n&&(n!==r||e in te(s))}}function xg(e){var n=Ri(e,function(u){return s.size===v&&s.clear(),u}),s=n.cache;return n}function Ng(e,n){var s=e[1],u=n[1],c=s|u,d=c<(P|X|ue),p=u==ue&&s==ee||u==ue&&s==yt&&e[7].length<=n[8]||u==(ue|yt)&&n[7].length<=n[8]&&s==ee;if(!(d||p))return e;u&P&&(e[2]=n[2],c|=s&P?0:ye);var m=n[3];if(m){var w=e[3];e[3]=w?Xu(w,m,n[4]):m,e[4]=w?Wt(e[3],I):n[4]}return m=n[5],m&&(w=e[5],e[5]=w?Yu(w,m,n[6]):m,e[6]=w?Wt(e[5],I):n[6]),m=n[7],m&&(e[7]=m),u&ue&&(e[8]=e[8]==null?n[8]:Te(e[8],n[8])),e[9]==null&&(e[9]=n[9]),e[0]=n[0],e[1]=c,e}function Dg(e){var n=[];if(e!=null)for(var s in te(e))n.push(s);return n}function kg(e){return Qr.call(e)}function gc(e,n,s){return n=me(n===r?e.length-1:n,0),function(){for(var u=arguments,c=-1,d=me(u.length-n,0),p=E(d);++c<d;)p[c]=u[n+c];c=-1;for(var m=E(n+1);++c<n;)m[c]=u[c];return m[n]=s(p),Be(e,this,m)}}function mc(e,n){return n.length<2?e:ln(e,Xe(n,0,-1))}function Mg(e,n){for(var s=e.length,u=Te(n.length,s),c=De(e);u--;){var d=n[u];e[u]=Rt(d,s)?c[d]:r}return e}function fo(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}var _c=yc(Wu),_r=Yd||function(e,n){return be.setTimeout(e,n)},ho=yc(sg);function wc(e,n,s){var u=n+"";return ho(e,Rg(u,Ug(Tg(u),s)))}function yc(e){var n=0,s=0;return function(){var u=tp(),c=rn-(u-s);if(s=u,c>0){if(++n>=vn)return arguments[0]}else n=0;return e.apply(r,arguments)}}function Ii(e,n){var s=-1,u=e.length,c=u-1;for(n=n===r?u:n;++s<n;){var d=Js(s,c),p=e[d];e[d]=e[s],e[s]=p}return e.length=n,e}var vc=xg(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Ah,function(s,u,c,d){n.push(c?d.replace(Dh,"$1"):u||s)}),n});function gt(e){if(typeof e=="string"||$e(e))return e;var n=e+"";return n=="0"&&1/e==-ht?"-0":n}function hn(e){if(e!=null){try{return Zr.call(e)}catch{}try{return e+""}catch{}}return""}function Ug(e,n){return Ge(En,function(s){var u="_."+s[0];n&s[1]&&!Kr(e,u)&&e.push(u)}),e.sort()}function bc(e){if(e instanceof K)return e.clone();var n=new Je(e.__wrapped__,e.__chain__);return n.__actions__=De(e.__actions__),n.__index__=e.__index__,n.__values__=e.__values__,n}function Fg(e,n,s){(s?Ce(e,n,s):n===r)?n=1:n=me($(n),0);var u=e==null?0:e.length;if(!u||n<1)return[];for(var c=0,d=0,p=E(si(u/n));c<u;)p[d++]=Xe(e,c,c+=n);return p}function Bg(e){for(var n=-1,s=e==null?0:e.length,u=0,c=[];++n<s;){var d=e[n];d&&(c[u++]=d)}return c}function Wg(){var e=arguments.length;if(!e)return[];for(var n=E(e-1),s=arguments[0],u=e;u--;)n[u-1]=arguments[u];return Bt(H(s)?De(s):[s],Ee(n,1))}var Hg=z(function(e,n){return fe(e)?fr(e,Ee(n,1,fe,!0)):[]}),$g=z(function(e,n){var s=Ye(n);return fe(s)&&(s=r),fe(e)?fr(e,Ee(n,1,fe,!0),M(s,2)):[]}),qg=z(function(e,n){var s=Ye(n);return fe(s)&&(s=r),fe(e)?fr(e,Ee(n,1,fe,!0),r,s):[]});function zg(e,n,s){var u=e==null?0:e.length;return u?(n=s||n===r?1:$(n),Xe(e,n<0?0:n,u)):[]}function Vg(e,n,s){var u=e==null?0:e.length;return u?(n=s||n===r?1:$(n),n=u-n,Xe(e,0,n<0?0:n)):[]}function Gg(e,n){return e&&e.length?gi(e,M(n,3),!0,!0):[]}function Kg(e,n){return e&&e.length?gi(e,M(n,3),!0):[]}function Jg(e,n,s,u){var c=e==null?0:e.length;return c?(s&&typeof s!="number"&&Ce(e,n,s)&&(s=0,u=c),Wp(e,n,s,u)):[]}function Ec(e,n,s){var u=e==null?0:e.length;if(!u)return-1;var c=s==null?0:$(s);return c<0&&(c=me(u+c,0)),Jr(e,M(n,3),c)}function Ic(e,n,s){var u=e==null?0:e.length;if(!u)return-1;var c=u-1;return s!==r&&(c=$(s),c=s<0?me(u+c,0):Te(c,u-1)),Jr(e,M(n,3),c,!0)}function Tc(e){var n=e==null?0:e.length;return n?Ee(e,1):[]}function jg(e){var n=e==null?0:e.length;return n?Ee(e,ht):[]}function Xg(e,n){var s=e==null?0:e.length;return s?(n=n===r?1:$(n),Ee(e,n)):[]}function Yg(e){for(var n=-1,s=e==null?0:e.length,u={};++n<s;){var c=e[n];u[c[0]]=c[1]}return u}function Sc(e){return e&&e.length?e[0]:r}function Zg(e,n,s){var u=e==null?0:e.length;if(!u)return-1;var c=s==null?0:$(s);return c<0&&(c=me(u+c,0)),Sn(e,n,c)}function Qg(e){var n=e==null?0:e.length;return n?Xe(e,0,-1):[]}var em=z(function(e){var n=se(e,Qs);return n.length&&n[0]===e[0]?qs(n):[]}),tm=z(function(e){var n=Ye(e),s=se(e,Qs);return n===Ye(s)?n=r:s.pop(),s.length&&s[0]===e[0]?qs(s,M(n,2)):[]}),nm=z(function(e){var n=Ye(e),s=se(e,Qs);return n=typeof n=="function"?n:r,n&&s.pop(),s.length&&s[0]===e[0]?qs(s,r,n):[]});function rm(e,n){return e==null?"":Qd.call(e,n)}function Ye(e){var n=e==null?0:e.length;return n?e[n-1]:r}function im(e,n,s){var u=e==null?0:e.length;if(!u)return-1;var c=u;return s!==r&&(c=$(s),c=c<0?me(u+c,0):Te(c,u-1)),n===n?Ud(e,n,c):Jr(e,su,c,!0)}function sm(e,n){return e&&e.length?Mu(e,$(n)):r}var om=z(Ac);function Ac(e,n){return e&&e.length&&n&&n.length?Ks(e,n):e}function am(e,n,s){return e&&e.length&&n&&n.length?Ks(e,n,M(s,2)):e}function um(e,n,s){return e&&e.length&&n&&n.length?Ks(e,n,r,s):e}var cm=At(function(e,n){var s=e==null?0:e.length,u=Bs(e,n);return Bu(e,se(n,function(c){return Rt(c,s)?+c:c}).sort(ju)),u});function lm(e,n){var s=[];if(!(e&&e.length))return s;var u=-1,c=[],d=e.length;for(n=M(n,3);++u<d;){var p=e[u];n(p,u,e)&&(s.push(p),c.push(u))}return Bu(e,c),s}function po(e){return e==null?e:rp.call(e)}function fm(e,n,s){var u=e==null?0:e.length;return u?(s&&typeof s!="number"&&Ce(e,n,s)?(n=0,s=u):(n=n==null?0:$(n),s=s===r?u:$(s)),Xe(e,n,s)):[]}function hm(e,n){return pi(e,n)}function dm(e,n,s){return Xs(e,n,M(s,2))}function pm(e,n){var s=e==null?0:e.length;if(s){var u=pi(e,n);if(u<s&&it(e[u],n))return u}return-1}function gm(e,n){return pi(e,n,!0)}function mm(e,n,s){return Xs(e,n,M(s,2),!0)}function _m(e,n){var s=e==null?0:e.length;if(s){var u=pi(e,n,!0)-1;if(it(e[u],n))return u}return-1}function wm(e){return e&&e.length?Hu(e):[]}function ym(e,n){return e&&e.length?Hu(e,M(n,2)):[]}function vm(e){var n=e==null?0:e.length;return n?Xe(e,1,n):[]}function bm(e,n,s){return e&&e.length?(n=s||n===r?1:$(n),Xe(e,0,n<0?0:n)):[]}function Em(e,n,s){var u=e==null?0:e.length;return u?(n=s||n===r?1:$(n),n=u-n,Xe(e,n<0?0:n,u)):[]}function Im(e,n){return e&&e.length?gi(e,M(n,3),!1,!0):[]}function Tm(e,n){return e&&e.length?gi(e,M(n,3)):[]}var Sm=z(function(e){return qt(Ee(e,1,fe,!0))}),Am=z(function(e){var n=Ye(e);return fe(n)&&(n=r),qt(Ee(e,1,fe,!0),M(n,2))}),Rm=z(function(e){var n=Ye(e);return n=typeof n=="function"?n:r,qt(Ee(e,1,fe,!0),r,n)});function Cm(e){return e&&e.length?qt(e):[]}function Om(e,n){return e&&e.length?qt(e,M(n,2)):[]}function Pm(e,n){return n=typeof n=="function"?n:r,e&&e.length?qt(e,r,n):[]}function go(e){if(!(e&&e.length))return[];var n=0;return e=Ft(e,function(s){if(fe(s))return n=me(s.length,n),!0}),Ls(n,function(s){return se(e,Cs(s))})}function Rc(e,n){if(!(e&&e.length))return[];var s=go(e);return n==null?s:se(s,function(u){return Be(n,r,u)})}var Lm=z(function(e,n){return fe(e)?fr(e,n):[]}),xm=z(function(e){return Zs(Ft(e,fe))}),Nm=z(function(e){var n=Ye(e);return fe(n)&&(n=r),Zs(Ft(e,fe),M(n,2))}),Dm=z(function(e){var n=Ye(e);return n=typeof n=="function"?n:r,Zs(Ft(e,fe),r,n)}),km=z(go);function Mm(e,n){return Vu(e||[],n||[],lr)}function Um(e,n){return Vu(e||[],n||[],pr)}var Fm=z(function(e){var n=e.length,s=n>1?e[n-1]:r;return s=typeof s=="function"?(e.pop(),s):r,Rc(e,s)});function Cc(e){var n=h(e);return n.__chain__=!0,n}function Bm(e,n){return n(e),e}function Ti(e,n){return n(e)}var Wm=At(function(e){var n=e.length,s=n?e[0]:0,u=this.__wrapped__,c=function(d){return Bs(d,e)};return n>1||this.__actions__.length||!(u instanceof K)||!Rt(s)?this.thru(c):(u=u.slice(s,+s+(n?1:0)),u.__actions__.push({func:Ti,args:[c],thisArg:r}),new Je(u,this.__chain__).thru(function(d){return n&&!d.length&&d.push(r),d}))});function Hm(){return Cc(this)}function $m(){return new Je(this.value(),this.__chain__)}function qm(){this.__values__===r&&(this.__values__=$c(this.value()));var e=this.__index__>=this.__values__.length,n=e?r:this.__values__[this.__index__++];return{done:e,value:n}}function zm(){return this}function Vm(e){for(var n,s=this;s instanceof ci;){var u=bc(s);u.__index__=0,u.__values__=r,n?c.__wrapped__=u:n=u;var c=u;s=s.__wrapped__}return c.__wrapped__=e,n}function Gm(){var e=this.__wrapped__;if(e instanceof K){var n=e;return this.__actions__.length&&(n=new K(this)),n=n.reverse(),n.__actions__.push({func:Ti,args:[po],thisArg:r}),new Je(n,this.__chain__)}return this.thru(po)}function Km(){return zu(this.__wrapped__,this.__actions__)}var Jm=mi(function(e,n,s){Z.call(e,s)?++e[s]:Tt(e,s,1)});function jm(e,n,s){var u=H(e)?ru:Bp;return s&&Ce(e,n,s)&&(n=r),u(e,M(n,3))}function Xm(e,n){var s=H(e)?Ft:Ru;return s(e,M(n,3))}var Ym=tc(Ec),Zm=tc(Ic);function Qm(e,n){return Ee(Si(e,n),1)}function e_(e,n){return Ee(Si(e,n),ht)}function t_(e,n,s){return s=s===r?1:$(s),Ee(Si(e,n),s)}function Oc(e,n){var s=H(e)?Ge:$t;return s(e,M(n,3))}function Pc(e,n){var s=H(e)?vd:Au;return s(e,M(n,3))}var n_=mi(function(e,n,s){Z.call(e,s)?e[s].push(n):Tt(e,s,[n])});function r_(e,n,s,u){e=ke(e)?e:Un(e),s=s&&!u?$(s):0;var c=e.length;return s<0&&(s=me(c+s,0)),Pi(e)?s<=c&&e.indexOf(n,s)>-1:!!c&&Sn(e,n,s)>-1}var i_=z(function(e,n,s){var u=-1,c=typeof n=="function",d=ke(e)?E(e.length):[];return $t(e,function(p){d[++u]=c?Be(n,p,s):hr(p,n,s)}),d}),s_=mi(function(e,n,s){Tt(e,s,n)});function Si(e,n){var s=H(e)?se:Nu;return s(e,M(n,3))}function o_(e,n,s,u){return e==null?[]:(H(n)||(n=n==null?[]:[n]),s=u?r:s,H(s)||(s=s==null?[]:[s]),Uu(e,n,s))}var a_=mi(function(e,n,s){e[s?0:1].push(n)},function(){return[[],[]]});function u_(e,n,s){var u=H(e)?As:au,c=arguments.length<3;return u(e,M(n,4),s,c,$t)}function c_(e,n,s){var u=H(e)?bd:au,c=arguments.length<3;return u(e,M(n,4),s,c,Au)}function l_(e,n){var s=H(e)?Ft:Ru;return s(e,Ci(M(n,3)))}function f_(e){var n=H(e)?Eu:rg;return n(e)}function h_(e,n,s){(s?Ce(e,n,s):n===r)?n=1:n=$(n);var u=H(e)?Dp:ig;return u(e,n)}function d_(e){var n=H(e)?kp:og;return n(e)}function p_(e){if(e==null)return 0;if(ke(e))return Pi(e)?Rn(e):e.length;var n=Se(e);return n==et||n==tt?e.size:Vs(e).length}function g_(e,n,s){var u=H(e)?Rs:ag;return s&&Ce(e,n,s)&&(n=r),u(e,M(n,3))}var m_=z(function(e,n){if(e==null)return[];var s=n.length;return s>1&&Ce(e,n[0],n[1])?n=[]:s>2&&Ce(n[0],n[1],n[2])&&(n=[n[0]]),Uu(e,Ee(n,1),[])}),Ai=Xd||function(){return be.Date.now()};function __(e,n){if(typeof n!="function")throw new Ke(f);return e=$(e),function(){if(--e<1)return n.apply(this,arguments)}}function Lc(e,n,s){return n=s?r:n,n=e&&n==null?e.length:n,St(e,ue,r,r,r,r,n)}function xc(e,n){var s;if(typeof n!="function")throw new Ke(f);return e=$(e),function(){return--e>0&&(s=n.apply(this,arguments)),e<=1&&(n=r),s}}var mo=z(function(e,n,s){var u=P;if(s.length){var c=Wt(s,kn(mo));u|=ae}return St(e,u,n,s,c)}),Nc=z(function(e,n,s){var u=P|X;if(s.length){var c=Wt(s,kn(Nc));u|=ae}return St(n,u,e,s,c)});function Dc(e,n,s){n=s?r:n;var u=St(e,ee,r,r,r,r,r,n);return u.placeholder=Dc.placeholder,u}function kc(e,n,s){n=s?r:n;var u=St(e,le,r,r,r,r,r,n);return u.placeholder=kc.placeholder,u}function Mc(e,n,s){var u,c,d,p,m,w,S=0,A=!1,C=!1,L=!0;if(typeof e!="function")throw new Ke(f);n=Ze(n)||0,oe(s)&&(A=!!s.leading,C="maxWait"in s,d=C?me(Ze(s.maxWait)||0,n):d,L="trailing"in s?!!s.trailing:L);function N(he){var st=u,Pt=c;return u=c=r,S=he,p=e.apply(Pt,st),p}function U(he){return S=he,m=_r(V,n),A?N(he):p}function q(he){var st=he-w,Pt=he-S,tl=n-st;return C?Te(tl,d-Pt):tl}function F(he){var st=he-w,Pt=he-S;return w===r||st>=n||st<0||C&&Pt>=d}function V(){var he=Ai();if(F(he))return j(he);m=_r(V,q(he))}function j(he){return m=r,L&&u?N(he):(u=c=r,p)}function qe(){m!==r&&Gu(m),S=0,u=w=c=m=r}function Oe(){return m===r?p:j(Ai())}function ze(){var he=Ai(),st=F(he);if(u=arguments,c=this,w=he,st){if(m===r)return U(w);if(C)return Gu(m),m=_r(V,n),N(w)}return m===r&&(m=_r(V,n)),p}return ze.cancel=qe,ze.flush=Oe,ze}var w_=z(function(e,n){return Su(e,1,n)}),y_=z(function(e,n,s){return Su(e,Ze(n)||0,s)});function v_(e){return St(e,Mt)}function Ri(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new Ke(f);var s=function(){var u=arguments,c=n?n.apply(this,u):u[0],d=s.cache;if(d.has(c))return d.get(c);var p=e.apply(this,u);return s.cache=d.set(c,p)||d,p};return s.cache=new(Ri.Cache||It),s}Ri.Cache=It;function Ci(e){if(typeof e!="function")throw new Ke(f);return function(){var n=arguments;switch(n.length){case 0:return!e.call(this);case 1:return!e.call(this,n[0]);case 2:return!e.call(this,n[0],n[1]);case 3:return!e.call(this,n[0],n[1],n[2])}return!e.apply(this,n)}}function b_(e){return xc(2,e)}var E_=ug(function(e,n){n=n.length==1&&H(n[0])?se(n[0],We(M())):se(Ee(n,1),We(M()));var s=n.length;return z(function(u){for(var c=-1,d=Te(u.length,s);++c<d;)u[c]=n[c].call(this,u[c]);return Be(e,this,u)})}),_o=z(function(e,n){var s=Wt(n,kn(_o));return St(e,ae,r,n,s)}),Uc=z(function(e,n){var s=Wt(n,kn(Uc));return St(e,Ne,r,n,s)}),I_=At(function(e,n){return St(e,yt,r,r,r,n)});function T_(e,n){if(typeof e!="function")throw new Ke(f);return n=n===r?n:$(n),z(e,n)}function S_(e,n){if(typeof e!="function")throw new Ke(f);return n=n==null?0:me($(n),0),z(function(s){var u=s[n],c=Vt(s,0,n);return u&&Bt(c,u),Be(e,this,c)})}function A_(e,n,s){var u=!0,c=!0;if(typeof e!="function")throw new Ke(f);return oe(s)&&(u="leading"in s?!!s.leading:u,c="trailing"in s?!!s.trailing:c),Mc(e,n,{leading:u,maxWait:n,trailing:c})}function R_(e){return Lc(e,1)}function C_(e,n){return _o(eo(n),e)}function O_(){if(!arguments.length)return[];var e=arguments[0];return H(e)?e:[e]}function P_(e){return je(e,G)}function L_(e,n){return n=typeof n=="function"?n:r,je(e,G,n)}function x_(e){return je(e,O|G)}function N_(e,n){return n=typeof n=="function"?n:r,je(e,O|G,n)}function D_(e,n){return n==null||Tu(e,n,we(n))}function it(e,n){return e===n||e!==e&&n!==n}var k_=vi($s),M_=vi(function(e,n){return e>=n}),dn=Pu(function(){return arguments}())?Pu:function(e){return ce(e)&&Z.call(e,"callee")&&!mu.call(e,"callee")},H=E.isArray,U_=Ya?We(Ya):Vp;function ke(e){return e!=null&&Oi(e.length)&&!Ct(e)}function fe(e){return ce(e)&&ke(e)}function F_(e){return e===!0||e===!1||ce(e)&&Re(e)==Yn}var Gt=Zd||Co,B_=Za?We(Za):Gp;function W_(e){return ce(e)&&e.nodeType===1&&!wr(e)}function H_(e){if(e==null)return!0;if(ke(e)&&(H(e)||typeof e=="string"||typeof e.splice=="function"||Gt(e)||Mn(e)||dn(e)))return!e.length;var n=Se(e);if(n==et||n==tt)return!e.size;if(mr(e))return!Vs(e).length;for(var s in e)if(Z.call(e,s))return!1;return!0}function $_(e,n){return dr(e,n)}function q_(e,n,s){s=typeof s=="function"?s:r;var u=s?s(e,n):r;return u===r?dr(e,n,r,s):!!u}function wo(e){if(!ce(e))return!1;var n=Re(e);return n==Hr||n==hh||typeof e.message=="string"&&typeof e.name=="string"&&!wr(e)}function z_(e){return typeof e=="number"&&wu(e)}function Ct(e){if(!oe(e))return!1;var n=Re(e);return n==$r||n==Sa||n==fh||n==ph}function Fc(e){return typeof e=="number"&&e==$(e)}function Oi(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ve}function oe(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}function ce(e){return e!=null&&typeof e=="object"}var Bc=Qa?We(Qa):Jp;function V_(e,n){return e===n||zs(e,n,ao(n))}function G_(e,n,s){return s=typeof s=="function"?s:r,zs(e,n,ao(n),s)}function K_(e){return Wc(e)&&e!=+e}function J_(e){if(Lg(e))throw new W(l);return Lu(e)}function j_(e){return e===null}function X_(e){return e==null}function Wc(e){return typeof e=="number"||ce(e)&&Re(e)==Qn}function wr(e){if(!ce(e)||Re(e)!=bt)return!1;var n=ni(e);if(n===null)return!0;var s=Z.call(n,"constructor")&&n.constructor;return typeof s=="function"&&s instanceof s&&Zr.call(s)==Gd}var yo=eu?We(eu):jp;function Y_(e){return Fc(e)&&e>=-ve&&e<=ve}var Hc=tu?We(tu):Xp;function Pi(e){return typeof e=="string"||!H(e)&&ce(e)&&Re(e)==tr}function $e(e){return typeof e=="symbol"||ce(e)&&Re(e)==qr}var Mn=nu?We(nu):Yp;function Z_(e){return e===r}function Q_(e){return ce(e)&&Se(e)==nr}function ew(e){return ce(e)&&Re(e)==mh}var tw=vi(Gs),nw=vi(function(e,n){return e<=n});function $c(e){if(!e)return[];if(ke(e))return Pi(e)?nt(e):De(e);if(sr&&e[sr])return Dd(e[sr]());var n=Se(e),s=n==et?Ns:n==tt?jr:Un;return s(e)}function Ot(e){if(!e)return e===0?e:0;if(e=Ze(e),e===ht||e===-ht){var n=e<0?-1:1;return n*Br}return e===e?e:0}function $(e){var n=Ot(e),s=n%1;return n===n?s?n-s:n:0}function qc(e){return e?cn($(e),0,pe):0}function Ze(e){if(typeof e=="number")return e;if($e(e))return bn;if(oe(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=oe(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=uu(e);var s=Uh.test(e);return s||Bh.test(e)?_d(e.slice(2),s?2:8):Mh.test(e)?bn:+e}function zc(e){return pt(e,Me(e))}function rw(e){return e?cn($(e),-ve,ve):e===0?e:0}function Q(e){return e==null?"":He(e)}var iw=Nn(function(e,n){if(mr(n)||ke(n)){pt(n,we(n),e);return}for(var s in n)Z.call(n,s)&&lr(e,s,n[s])}),Vc=Nn(function(e,n){pt(n,Me(n),e)}),Li=Nn(function(e,n,s,u){pt(n,Me(n),e,u)}),sw=Nn(function(e,n,s,u){pt(n,we(n),e,u)}),ow=At(Bs);function aw(e,n){var s=xn(e);return n==null?s:Iu(s,n)}var uw=z(function(e,n){e=te(e);var s=-1,u=n.length,c=u>2?n[2]:r;for(c&&Ce(n[0],n[1],c)&&(u=1);++s<u;)for(var d=n[s],p=Me(d),m=-1,w=p.length;++m<w;){var S=p[m],A=e[S];(A===r||it(A,On[S])&&!Z.call(e,S))&&(e[S]=d[S])}return e}),cw=z(function(e){return e.push(r,uc),Be(Gc,r,e)});function lw(e,n){return iu(e,M(n,3),dt)}function fw(e,n){return iu(e,M(n,3),Hs)}function hw(e,n){return e==null?e:Ws(e,M(n,3),Me)}function dw(e,n){return e==null?e:Cu(e,M(n,3),Me)}function pw(e,n){return e&&dt(e,M(n,3))}function gw(e,n){return e&&Hs(e,M(n,3))}function mw(e){return e==null?[]:hi(e,we(e))}function _w(e){return e==null?[]:hi(e,Me(e))}function vo(e,n,s){var u=e==null?r:ln(e,n);return u===r?s:u}function ww(e,n){return e!=null&&fc(e,n,Hp)}function bo(e,n){return e!=null&&fc(e,n,$p)}var yw=rc(function(e,n,s){n!=null&&typeof n.toString!="function"&&(n=Qr.call(n)),e[n]=s},Io(Ue)),vw=rc(function(e,n,s){n!=null&&typeof n.toString!="function"&&(n=Qr.call(n)),Z.call(e,n)?e[n].push(s):e[n]=[s]},M),bw=z(hr);function we(e){return ke(e)?bu(e):Vs(e)}function Me(e){return ke(e)?bu(e,!0):Zp(e)}function Ew(e,n){var s={};return n=M(n,3),dt(e,function(u,c,d){Tt(s,n(u,c,d),u)}),s}function Iw(e,n){var s={};return n=M(n,3),dt(e,function(u,c,d){Tt(s,c,n(u,c,d))}),s}var Tw=Nn(function(e,n,s){di(e,n,s)}),Gc=Nn(function(e,n,s,u){di(e,n,s,u)}),Sw=At(function(e,n){var s={};if(e==null)return s;var u=!1;n=se(n,function(d){return d=zt(d,e),u||(u=d.length>1),d}),pt(e,so(e),s),u&&(s=je(s,O|D|G,yg));for(var c=n.length;c--;)Ys(s,n[c]);return s});function Aw(e,n){return Kc(e,Ci(M(n)))}var Rw=At(function(e,n){return e==null?{}:eg(e,n)});function Kc(e,n){if(e==null)return{};var s=se(so(e),function(u){return[u]});return n=M(n),Fu(e,s,function(u,c){return n(u,c[0])})}function Cw(e,n,s){n=zt(n,e);var u=-1,c=n.length;for(c||(c=1,e=r);++u<c;){var d=e==null?r:e[gt(n[u])];d===r&&(u=c,d=s),e=Ct(d)?d.call(e):d}return e}function Ow(e,n,s){return e==null?e:pr(e,n,s)}function Pw(e,n,s,u){return u=typeof u=="function"?u:r,e==null?e:pr(e,n,s,u)}var Jc=oc(we),jc=oc(Me);function Lw(e,n,s){var u=H(e),c=u||Gt(e)||Mn(e);if(n=M(n,4),s==null){var d=e&&e.constructor;c?s=u?new d:[]:oe(e)?s=Ct(d)?xn(ni(e)):{}:s={}}return(c?Ge:dt)(e,function(p,m,w){return n(s,p,m,w)}),s}function xw(e,n){return e==null?!0:Ys(e,n)}function Nw(e,n,s){return e==null?e:qu(e,n,eo(s))}function Dw(e,n,s,u){return u=typeof u=="function"?u:r,e==null?e:qu(e,n,eo(s),u)}function Un(e){return e==null?[]:xs(e,we(e))}function kw(e){return e==null?[]:xs(e,Me(e))}function Mw(e,n,s){return s===r&&(s=n,n=r),s!==r&&(s=Ze(s),s=s===s?s:0),n!==r&&(n=Ze(n),n=n===n?n:0),cn(Ze(e),n,s)}function Uw(e,n,s){return n=Ot(n),s===r?(s=n,n=0):s=Ot(s),e=Ze(e),qp(e,n,s)}function Fw(e,n,s){if(s&&typeof s!="boolean"&&Ce(e,n,s)&&(n=s=r),s===r&&(typeof n=="boolean"?(s=n,n=r):typeof e=="boolean"&&(s=e,e=r)),e===r&&n===r?(e=0,n=1):(e=Ot(e),n===r?(n=e,e=0):n=Ot(n)),e>n){var u=e;e=n,n=u}if(s||e%1||n%1){var c=yu();return Te(e+c*(n-e+md("1e-"+((c+"").length-1))),n)}return Js(e,n)}var Bw=Dn(function(e,n,s){return n=n.toLowerCase(),e+(s?Xc(n):n)});function Xc(e){return Eo(Q(e).toLowerCase())}function Yc(e){return e=Q(e),e&&e.replace(Hh,Od).replace(od,"")}function Ww(e,n,s){e=Q(e),n=He(n);var u=e.length;s=s===r?u:cn($(s),0,u);var c=s;return s-=n.length,s>=0&&e.slice(s,c)==n}function Hw(e){return e=Q(e),e&&bh.test(e)?e.replace(Ca,Pd):e}function $w(e){return e=Q(e),e&&Rh.test(e)?e.replace(ms,"\\$&"):e}var qw=Dn(function(e,n,s){return e+(s?"-":"")+n.toLowerCase()}),zw=Dn(function(e,n,s){return e+(s?" ":"")+n.toLowerCase()}),Vw=ec("toLowerCase");function Gw(e,n,s){e=Q(e),n=$(n);var u=n?Rn(e):0;if(!n||u>=n)return e;var c=(n-u)/2;return yi(oi(c),s)+e+yi(si(c),s)}function Kw(e,n,s){e=Q(e),n=$(n);var u=n?Rn(e):0;return n&&u<n?e+yi(n-u,s):e}function Jw(e,n,s){e=Q(e),n=$(n);var u=n?Rn(e):0;return n&&u<n?yi(n-u,s)+e:e}function jw(e,n,s){return s||n==null?n=0:n&&(n=+n),np(Q(e).replace(_s,""),n||0)}function Xw(e,n,s){return(s?Ce(e,n,s):n===r)?n=1:n=$(n),js(Q(e),n)}function Yw(){var e=arguments,n=Q(e[0]);return e.length<3?n:n.replace(e[1],e[2])}var Zw=Dn(function(e,n,s){return e+(s?"_":"")+n.toLowerCase()});function Qw(e,n,s){return s&&typeof s!="number"&&Ce(e,n,s)&&(n=s=r),s=s===r?pe:s>>>0,s?(e=Q(e),e&&(typeof n=="string"||n!=null&&!yo(n))&&(n=He(n),!n&&An(e))?Vt(nt(e),0,s):e.split(n,s)):[]}var ey=Dn(function(e,n,s){return e+(s?" ":"")+Eo(n)});function ty(e,n,s){return e=Q(e),s=s==null?0:cn($(s),0,e.length),n=He(n),e.slice(s,s+n.length)==n}function ny(e,n,s){var u=h.templateSettings;s&&Ce(e,n,s)&&(n=r),e=Q(e),n=Li({},n,u,ac);var c=Li({},n.imports,u.imports,ac),d=we(c),p=xs(c,d),m,w,S=0,A=n.interpolate||zr,C="__p += '",L=Ds((n.escape||zr).source+"|"+A.source+"|"+(A===Oa?kh:zr).source+"|"+(n.evaluate||zr).source+"|$","g"),N="//# sourceURL="+(Z.call(n,"sourceURL")?(n.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++fd+"]")+`
`;e.replace(L,function(F,V,j,qe,Oe,ze){return j||(j=qe),C+=e.slice(S,ze).replace($h,Ld),V&&(m=!0,C+=`' +
__e(`+V+`) +
'`),Oe&&(w=!0,C+=`';
`+Oe+`;
__p += '`),j&&(C+=`' +
((__t = (`+j+`)) == null ? '' : __t) +
'`),S=ze+F.length,F}),C+=`';
`;var U=Z.call(n,"variable")&&n.variable;if(!U)C=`with (obj) {
`+C+`
}
`;else if(Nh.test(U))throw new W(g);C=(w?C.replace(_h,""):C).replace(wh,"$1").replace(yh,"$1;"),C="function("+(U||"obj")+`) {
`+(U?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(m?", __e = _.escape":"")+(w?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+C+`return __p
}`;var q=Qc(function(){return Y(d,N+"return "+C).apply(r,p)});if(q.source=C,wo(q))throw q;return q}function ry(e){return Q(e).toLowerCase()}function iy(e){return Q(e).toUpperCase()}function sy(e,n,s){if(e=Q(e),e&&(s||n===r))return uu(e);if(!e||!(n=He(n)))return e;var u=nt(e),c=nt(n),d=cu(u,c),p=lu(u,c)+1;return Vt(u,d,p).join("")}function oy(e,n,s){if(e=Q(e),e&&(s||n===r))return e.slice(0,hu(e)+1);if(!e||!(n=He(n)))return e;var u=nt(e),c=lu(u,nt(n))+1;return Vt(u,0,c).join("")}function ay(e,n,s){if(e=Q(e),e&&(s||n===r))return e.replace(_s,"");if(!e||!(n=He(n)))return e;var u=nt(e),c=cu(u,nt(n));return Vt(u,c).join("")}function uy(e,n){var s=Mr,u=Ur;if(oe(n)){var c="separator"in n?n.separator:c;s="length"in n?$(n.length):s,u="omission"in n?He(n.omission):u}e=Q(e);var d=e.length;if(An(e)){var p=nt(e);d=p.length}if(s>=d)return e;var m=s-Rn(u);if(m<1)return u;var w=p?Vt(p,0,m).join(""):e.slice(0,m);if(c===r)return w+u;if(p&&(m+=w.length-m),yo(c)){if(e.slice(m).search(c)){var S,A=w;for(c.global||(c=Ds(c.source,Q(Pa.exec(c))+"g")),c.lastIndex=0;S=c.exec(A);)var C=S.index;w=w.slice(0,C===r?m:C)}}else if(e.indexOf(He(c),m)!=m){var L=w.lastIndexOf(c);L>-1&&(w=w.slice(0,L))}return w+u}function cy(e){return e=Q(e),e&&vh.test(e)?e.replace(Ra,Fd):e}var ly=Dn(function(e,n,s){return e+(s?" ":"")+n.toUpperCase()}),Eo=ec("toUpperCase");function Zc(e,n,s){return e=Q(e),n=s?r:n,n===r?Nd(e)?Hd(e):Td(e):e.match(n)||[]}var Qc=z(function(e,n){try{return Be(e,r,n)}catch(s){return wo(s)?s:new W(s)}}),fy=At(function(e,n){return Ge(n,function(s){s=gt(s),Tt(e,s,mo(e[s],e))}),e});function hy(e){var n=e==null?0:e.length,s=M();return e=n?se(e,function(u){if(typeof u[1]!="function")throw new Ke(f);return[s(u[0]),u[1]]}):[],z(function(u){for(var c=-1;++c<n;){var d=e[c];if(Be(d[0],this,u))return Be(d[1],this,u)}})}function dy(e){return Fp(je(e,O))}function Io(e){return function(){return e}}function py(e,n){return e==null||e!==e?n:e}var gy=nc(),my=nc(!0);function Ue(e){return e}function To(e){return xu(typeof e=="function"?e:je(e,O))}function _y(e){return Du(je(e,O))}function wy(e,n){return ku(e,je(n,O))}var yy=z(function(e,n){return function(s){return hr(s,e,n)}}),vy=z(function(e,n){return function(s){return hr(e,s,n)}});function So(e,n,s){var u=we(n),c=hi(n,u);s==null&&!(oe(n)&&(c.length||!u.length))&&(s=n,n=e,e=this,c=hi(n,we(n)));var d=!(oe(s)&&"chain"in s)||!!s.chain,p=Ct(e);return Ge(c,function(m){var w=n[m];e[m]=w,p&&(e.prototype[m]=function(){var S=this.__chain__;if(d||S){var A=e(this.__wrapped__),C=A.__actions__=De(this.__actions__);return C.push({func:w,args:arguments,thisArg:e}),A.__chain__=S,A}return w.apply(e,Bt([this.value()],arguments))})}),e}function by(){return be._===this&&(be._=Kd),this}function Ao(){}function Ey(e){return e=$(e),z(function(n){return Mu(n,e)})}var Iy=no(se),Ty=no(ru),Sy=no(Rs);function el(e){return co(e)?Cs(gt(e)):tg(e)}function Ay(e){return function(n){return e==null?r:ln(e,n)}}var Ry=ic(),Cy=ic(!0);function Ro(){return[]}function Co(){return!1}function Oy(){return{}}function Py(){return""}function Ly(){return!0}function xy(e,n){if(e=$(e),e<1||e>ve)return[];var s=pe,u=Te(e,pe);n=M(n),e-=pe;for(var c=Ls(u,n);++s<e;)n(s);return c}function Ny(e){return H(e)?se(e,gt):$e(e)?[e]:De(vc(Q(e)))}function Dy(e){var n=++Vd;return Q(e)+n}var ky=wi(function(e,n){return e+n},0),My=ro("ceil"),Uy=wi(function(e,n){return e/n},1),Fy=ro("floor");function By(e){return e&&e.length?fi(e,Ue,$s):r}function Wy(e,n){return e&&e.length?fi(e,M(n,2),$s):r}function Hy(e){return ou(e,Ue)}function $y(e,n){return ou(e,M(n,2))}function qy(e){return e&&e.length?fi(e,Ue,Gs):r}function zy(e,n){return e&&e.length?fi(e,M(n,2),Gs):r}var Vy=wi(function(e,n){return e*n},1),Gy=ro("round"),Ky=wi(function(e,n){return e-n},0);function Jy(e){return e&&e.length?Ps(e,Ue):0}function jy(e,n){return e&&e.length?Ps(e,M(n,2)):0}return h.after=__,h.ary=Lc,h.assign=iw,h.assignIn=Vc,h.assignInWith=Li,h.assignWith=sw,h.at=ow,h.before=xc,h.bind=mo,h.bindAll=fy,h.bindKey=Nc,h.castArray=O_,h.chain=Cc,h.chunk=Fg,h.compact=Bg,h.concat=Wg,h.cond=hy,h.conforms=dy,h.constant=Io,h.countBy=Jm,h.create=aw,h.curry=Dc,h.curryRight=kc,h.debounce=Mc,h.defaults=uw,h.defaultsDeep=cw,h.defer=w_,h.delay=y_,h.difference=Hg,h.differenceBy=$g,h.differenceWith=qg,h.drop=zg,h.dropRight=Vg,h.dropRightWhile=Gg,h.dropWhile=Kg,h.fill=Jg,h.filter=Xm,h.flatMap=Qm,h.flatMapDeep=e_,h.flatMapDepth=t_,h.flatten=Tc,h.flattenDeep=jg,h.flattenDepth=Xg,h.flip=v_,h.flow=gy,h.flowRight=my,h.fromPairs=Yg,h.functions=mw,h.functionsIn=_w,h.groupBy=n_,h.initial=Qg,h.intersection=em,h.intersectionBy=tm,h.intersectionWith=nm,h.invert=yw,h.invertBy=vw,h.invokeMap=i_,h.iteratee=To,h.keyBy=s_,h.keys=we,h.keysIn=Me,h.map=Si,h.mapKeys=Ew,h.mapValues=Iw,h.matches=_y,h.matchesProperty=wy,h.memoize=Ri,h.merge=Tw,h.mergeWith=Gc,h.method=yy,h.methodOf=vy,h.mixin=So,h.negate=Ci,h.nthArg=Ey,h.omit=Sw,h.omitBy=Aw,h.once=b_,h.orderBy=o_,h.over=Iy,h.overArgs=E_,h.overEvery=Ty,h.overSome=Sy,h.partial=_o,h.partialRight=Uc,h.partition=a_,h.pick=Rw,h.pickBy=Kc,h.property=el,h.propertyOf=Ay,h.pull=om,h.pullAll=Ac,h.pullAllBy=am,h.pullAllWith=um,h.pullAt=cm,h.range=Ry,h.rangeRight=Cy,h.rearg=I_,h.reject=l_,h.remove=lm,h.rest=T_,h.reverse=po,h.sampleSize=h_,h.set=Ow,h.setWith=Pw,h.shuffle=d_,h.slice=fm,h.sortBy=m_,h.sortedUniq=wm,h.sortedUniqBy=ym,h.split=Qw,h.spread=S_,h.tail=vm,h.take=bm,h.takeRight=Em,h.takeRightWhile=Im,h.takeWhile=Tm,h.tap=Bm,h.throttle=A_,h.thru=Ti,h.toArray=$c,h.toPairs=Jc,h.toPairsIn=jc,h.toPath=Ny,h.toPlainObject=zc,h.transform=Lw,h.unary=R_,h.union=Sm,h.unionBy=Am,h.unionWith=Rm,h.uniq=Cm,h.uniqBy=Om,h.uniqWith=Pm,h.unset=xw,h.unzip=go,h.unzipWith=Rc,h.update=Nw,h.updateWith=Dw,h.values=Un,h.valuesIn=kw,h.without=Lm,h.words=Zc,h.wrap=C_,h.xor=xm,h.xorBy=Nm,h.xorWith=Dm,h.zip=km,h.zipObject=Mm,h.zipObjectDeep=Um,h.zipWith=Fm,h.entries=Jc,h.entriesIn=jc,h.extend=Vc,h.extendWith=Li,So(h,h),h.add=ky,h.attempt=Qc,h.camelCase=Bw,h.capitalize=Xc,h.ceil=My,h.clamp=Mw,h.clone=P_,h.cloneDeep=x_,h.cloneDeepWith=N_,h.cloneWith=L_,h.conformsTo=D_,h.deburr=Yc,h.defaultTo=py,h.divide=Uy,h.endsWith=Ww,h.eq=it,h.escape=Hw,h.escapeRegExp=$w,h.every=jm,h.find=Ym,h.findIndex=Ec,h.findKey=lw,h.findLast=Zm,h.findLastIndex=Ic,h.findLastKey=fw,h.floor=Fy,h.forEach=Oc,h.forEachRight=Pc,h.forIn=hw,h.forInRight=dw,h.forOwn=pw,h.forOwnRight=gw,h.get=vo,h.gt=k_,h.gte=M_,h.has=ww,h.hasIn=bo,h.head=Sc,h.identity=Ue,h.includes=r_,h.indexOf=Zg,h.inRange=Uw,h.invoke=bw,h.isArguments=dn,h.isArray=H,h.isArrayBuffer=U_,h.isArrayLike=ke,h.isArrayLikeObject=fe,h.isBoolean=F_,h.isBuffer=Gt,h.isDate=B_,h.isElement=W_,h.isEmpty=H_,h.isEqual=$_,h.isEqualWith=q_,h.isError=wo,h.isFinite=z_,h.isFunction=Ct,h.isInteger=Fc,h.isLength=Oi,h.isMap=Bc,h.isMatch=V_,h.isMatchWith=G_,h.isNaN=K_,h.isNative=J_,h.isNil=X_,h.isNull=j_,h.isNumber=Wc,h.isObject=oe,h.isObjectLike=ce,h.isPlainObject=wr,h.isRegExp=yo,h.isSafeInteger=Y_,h.isSet=Hc,h.isString=Pi,h.isSymbol=$e,h.isTypedArray=Mn,h.isUndefined=Z_,h.isWeakMap=Q_,h.isWeakSet=ew,h.join=rm,h.kebabCase=qw,h.last=Ye,h.lastIndexOf=im,h.lowerCase=zw,h.lowerFirst=Vw,h.lt=tw,h.lte=nw,h.max=By,h.maxBy=Wy,h.mean=Hy,h.meanBy=$y,h.min=qy,h.minBy=zy,h.stubArray=Ro,h.stubFalse=Co,h.stubObject=Oy,h.stubString=Py,h.stubTrue=Ly,h.multiply=Vy,h.nth=sm,h.noConflict=by,h.noop=Ao,h.now=Ai,h.pad=Gw,h.padEnd=Kw,h.padStart=Jw,h.parseInt=jw,h.random=Fw,h.reduce=u_,h.reduceRight=c_,h.repeat=Xw,h.replace=Yw,h.result=Cw,h.round=Gy,h.runInContext=_,h.sample=f_,h.size=p_,h.snakeCase=Zw,h.some=g_,h.sortedIndex=hm,h.sortedIndexBy=dm,h.sortedIndexOf=pm,h.sortedLastIndex=gm,h.sortedLastIndexBy=mm,h.sortedLastIndexOf=_m,h.startCase=ey,h.startsWith=ty,h.subtract=Ky,h.sum=Jy,h.sumBy=jy,h.template=ny,h.times=xy,h.toFinite=Ot,h.toInteger=$,h.toLength=qc,h.toLower=ry,h.toNumber=Ze,h.toSafeInteger=rw,h.toString=Q,h.toUpper=iy,h.trim=sy,h.trimEnd=oy,h.trimStart=ay,h.truncate=uy,h.unescape=cy,h.uniqueId=Dy,h.upperCase=ly,h.upperFirst=Eo,h.each=Oc,h.eachRight=Pc,h.first=Sc,So(h,function(){var e={};return dt(h,function(n,s){Z.call(h.prototype,s)||(e[s]=n)}),e}(),{chain:!1}),h.VERSION=o,Ge(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){h[e].placeholder=h}),Ge(["drop","take"],function(e,n){K.prototype[e]=function(s){s=s===r?1:me($(s),0);var u=this.__filtered__&&!n?new K(this):this.clone();return u.__filtered__?u.__takeCount__=Te(s,u.__takeCount__):u.__views__.push({size:Te(s,pe),type:e+(u.__dir__<0?"Right":"")}),u},K.prototype[e+"Right"]=function(s){return this.reverse()[e](s).reverse()}}),Ge(["filter","map","takeWhile"],function(e,n){var s=n+1,u=s==ft||s==Ie;K.prototype[e]=function(c){var d=this.clone();return d.__iteratees__.push({iteratee:M(c,3),type:s}),d.__filtered__=d.__filtered__||u,d}}),Ge(["head","last"],function(e,n){var s="take"+(n?"Right":"");K.prototype[e]=function(){return this[s](1).value()[0]}}),Ge(["initial","tail"],function(e,n){var s="drop"+(n?"":"Right");K.prototype[e]=function(){return this.__filtered__?new K(this):this[s](1)}}),K.prototype.compact=function(){return this.filter(Ue)},K.prototype.find=function(e){return this.filter(e).head()},K.prototype.findLast=function(e){return this.reverse().find(e)},K.prototype.invokeMap=z(function(e,n){return typeof e=="function"?new K(this):this.map(function(s){return hr(s,e,n)})}),K.prototype.reject=function(e){return this.filter(Ci(M(e)))},K.prototype.slice=function(e,n){e=$(e);var s=this;return s.__filtered__&&(e>0||n<0)?new K(s):(e<0?s=s.takeRight(-e):e&&(s=s.drop(e)),n!==r&&(n=$(n),s=n<0?s.dropRight(-n):s.take(n-e)),s)},K.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},K.prototype.toArray=function(){return this.take(pe)},dt(K.prototype,function(e,n){var s=/^(?:filter|find|map|reject)|While$/.test(n),u=/^(?:head|last)$/.test(n),c=h[u?"take"+(n=="last"?"Right":""):n],d=u||/^find/.test(n);c&&(h.prototype[n]=function(){var p=this.__wrapped__,m=u?[1]:arguments,w=p instanceof K,S=m[0],A=w||H(p),C=function(V){var j=c.apply(h,Bt([V],m));return u&&L?j[0]:j};A&&s&&typeof S=="function"&&S.length!=1&&(w=A=!1);var L=this.__chain__,N=!!this.__actions__.length,U=d&&!L,q=w&&!N;if(!d&&A){p=q?p:new K(this);var F=e.apply(p,m);return F.__actions__.push({func:Ti,args:[C],thisArg:r}),new Je(F,L)}return U&&q?e.apply(this,m):(F=this.thru(C),U?u?F.value()[0]:F.value():F)})}),Ge(["pop","push","shift","sort","splice","unshift"],function(e){var n=Xr[e],s=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",u=/^(?:pop|shift)$/.test(e);h.prototype[e]=function(){var c=arguments;if(u&&!this.__chain__){var d=this.value();return n.apply(H(d)?d:[],c)}return this[s](function(p){return n.apply(H(p)?p:[],c)})}}),dt(K.prototype,function(e,n){var s=h[n];if(s){var u=s.name+"";Z.call(Ln,u)||(Ln[u]=[]),Ln[u].push({name:n,func:s})}}),Ln[_i(r,X).name]=[{name:"wrapper",func:r}],K.prototype.clone=cp,K.prototype.reverse=lp,K.prototype.value=fp,h.prototype.at=Wm,h.prototype.chain=Hm,h.prototype.commit=$m,h.prototype.next=qm,h.prototype.plant=Vm,h.prototype.reverse=Gm,h.prototype.toJSON=h.prototype.valueOf=h.prototype.value=Km,h.prototype.first=h.prototype.head,sr&&(h.prototype[sr]=zm),h},Cn=$d();sn?((sn.exports=Cn)._=Cn,Is._=Cn):be._=Cn}).call(yr)})($i,$i.exports);var Yy=$i.exports;const Zy=Xy(Yy);function Kl(i,t){return function(){return i.apply(t,arguments)}}const{toString:Qy}=Object.prototype,{getPrototypeOf:ra}=Object,{iterator:Zi,toStringTag:Jl}=Symbol,Qi=(i=>t=>{const r=Qy.call(t);return i[r]||(i[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),lt=i=>(i=i.toLowerCase(),t=>Qi(t)===i),es=i=>t=>typeof t===i,{isArray:Kn}=Array,qn=es("undefined");function Ar(i){return i!==null&&!qn(i)&&i.constructor!==null&&!qn(i.constructor)&&Fe(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const jl=lt("ArrayBuffer");function ev(i){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(i):t=i&&i.buffer&&jl(i.buffer),t}const tv=es("string"),Fe=es("function"),Xl=es("number"),Rr=i=>i!==null&&typeof i=="object",nv=i=>i===!0||i===!1,Di=i=>{if(Qi(i)!=="object")return!1;const t=ra(i);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Jl in i)&&!(Zi in i)},rv=i=>{if(!Rr(i)||Ar(i))return!1;try{return Object.keys(i).length===0&&Object.getPrototypeOf(i)===Object.prototype}catch{return!1}},iv=lt("Date"),sv=lt("File"),ov=i=>!!(i&&typeof i.uri<"u"),av=i=>i&&typeof i.getParts<"u",uv=lt("Blob"),cv=lt("FileList"),lv=i=>Rr(i)&&Fe(i.pipe);function fv(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const nl=fv(),rl=typeof nl.FormData<"u"?nl.FormData:void 0,hv=i=>{let t;return i&&(rl&&i instanceof rl||Fe(i.append)&&((t=Qi(i))==="formdata"||t==="object"&&Fe(i.toString)&&i.toString()==="[object FormData]"))},dv=lt("URLSearchParams"),[pv,gv,mv,_v]=["ReadableStream","Request","Response","Headers"].map(lt),wv=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Cr(i,t,{allOwnKeys:r=!1}={}){if(i===null||typeof i>"u")return;let o,a;if(typeof i!="object"&&(i=[i]),Kn(i))for(o=0,a=i.length;o<a;o++)t.call(null,i[o],o,i);else{if(Ar(i))return;const l=r?Object.getOwnPropertyNames(i):Object.keys(i),f=l.length;let g;for(o=0;o<f;o++)g=l[o],t.call(null,i[g],g,i)}}function Yl(i,t){if(Ar(i))return null;t=t.toLowerCase();const r=Object.keys(i);let o=r.length,a;for(;o-- >0;)if(a=r[o],t===a.toLowerCase())return a;return null}const gn=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Zl=i=>!qn(i)&&i!==gn;function $o(){const{caseless:i,skipUndefined:t}=Zl(this)&&this||{},r={},o=(a,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;const f=i&&Yl(r,l)||l;Di(r[f])&&Di(a)?r[f]=$o(r[f],a):Di(a)?r[f]=$o({},a):Kn(a)?r[f]=a.slice():(!t||!qn(a))&&(r[f]=a)};for(let a=0,l=arguments.length;a<l;a++)arguments[a]&&Cr(arguments[a],o);return r}const yv=(i,t,r,{allOwnKeys:o}={})=>(Cr(t,(a,l)=>{r&&Fe(a)?Object.defineProperty(i,l,{value:Kl(a,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(i,l,{value:a,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:o}),i),vv=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),bv=(i,t,r,o)=>{i.prototype=Object.create(t.prototype,o),Object.defineProperty(i.prototype,"constructor",{value:i,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(i,"super",{value:t.prototype}),r&&Object.assign(i.prototype,r)},Ev=(i,t,r,o)=>{let a,l,f;const g={};if(t=t||{},i==null)return t;do{for(a=Object.getOwnPropertyNames(i),l=a.length;l-- >0;)f=a[l],(!o||o(f,i,t))&&!g[f]&&(t[f]=i[f],g[f]=!0);i=r!==!1&&ra(i)}while(i&&(!r||r(i,t))&&i!==Object.prototype);return t},Iv=(i,t,r)=>{i=String(i),(r===void 0||r>i.length)&&(r=i.length),r-=t.length;const o=i.indexOf(t,r);return o!==-1&&o===r},Tv=i=>{if(!i)return null;if(Kn(i))return i;let t=i.length;if(!Xl(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=i[t];return r},Sv=(i=>t=>i&&t instanceof i)(typeof Uint8Array<"u"&&ra(Uint8Array)),Av=(i,t)=>{const o=(i&&i[Zi]).call(i);let a;for(;(a=o.next())&&!a.done;){const l=a.value;t.call(i,l[0],l[1])}},Rv=(i,t)=>{let r;const o=[];for(;(r=i.exec(t))!==null;)o.push(r);return o},Cv=lt("HTMLFormElement"),Ov=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,o,a){return o.toUpperCase()+a}),il=(({hasOwnProperty:i})=>(t,r)=>i.call(t,r))(Object.prototype),Pv=lt("RegExp"),Ql=(i,t)=>{const r=Object.getOwnPropertyDescriptors(i),o={};Cr(r,(a,l)=>{let f;(f=t(a,l,i))!==!1&&(o[l]=f||a)}),Object.defineProperties(i,o)},Lv=i=>{Ql(i,(t,r)=>{if(Fe(i)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const o=i[r];if(Fe(o)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},xv=(i,t)=>{const r={},o=a=>{a.forEach(l=>{r[l]=!0})};return Kn(i)?o(i):o(String(i).split(t)),r},Nv=()=>{},Dv=(i,t)=>i!=null&&Number.isFinite(i=+i)?i:t;function kv(i){return!!(i&&Fe(i.append)&&i[Jl]==="FormData"&&i[Zi])}const Mv=i=>{const t=new Array(10),r=(o,a)=>{if(Rr(o)){if(t.indexOf(o)>=0)return;if(Ar(o))return o;if(!("toJSON"in o)){t[a]=o;const l=Kn(o)?[]:{};return Cr(o,(f,g)=>{const y=r(f,a+1);!qn(y)&&(l[g]=y)}),t[a]=void 0,l}}return o};return r(i,0)},Uv=lt("AsyncFunction"),Fv=i=>i&&(Rr(i)||Fe(i))&&Fe(i.then)&&Fe(i.catch),ef=((i,t)=>i?setImmediate:t?((r,o)=>(gn.addEventListener("message",({source:a,data:l})=>{a===gn&&l===r&&o.length&&o.shift()()},!1),a=>{o.push(a),gn.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",Fe(gn.postMessage)),Bv=typeof queueMicrotask<"u"?queueMicrotask.bind(gn):typeof process<"u"&&process.nextTick||ef,Wv=i=>i!=null&&Fe(i[Zi]),b={isArray:Kn,isArrayBuffer:jl,isBuffer:Ar,isFormData:hv,isArrayBufferView:ev,isString:tv,isNumber:Xl,isBoolean:nv,isObject:Rr,isPlainObject:Di,isEmptyObject:rv,isReadableStream:pv,isRequest:gv,isResponse:mv,isHeaders:_v,isUndefined:qn,isDate:iv,isFile:sv,isReactNativeBlob:ov,isReactNative:av,isBlob:uv,isRegExp:Pv,isFunction:Fe,isStream:lv,isURLSearchParams:dv,isTypedArray:Sv,isFileList:cv,forEach:Cr,merge:$o,extend:yv,trim:wv,stripBOM:vv,inherits:bv,toFlatObject:Ev,kindOf:Qi,kindOfTest:lt,endsWith:Iv,toArray:Tv,forEachEntry:Av,matchAll:Rv,isHTMLForm:Cv,hasOwnProperty:il,hasOwnProp:il,reduceDescriptors:Ql,freezeMethods:Lv,toObjectSet:xv,toCamelCase:Ov,noop:Nv,toFiniteNumber:Dv,findKey:Yl,global:gn,isContextDefined:Zl,isSpecCompliantForm:kv,toJSONObject:Mv,isAsyncFn:Uv,isThenable:Fv,setImmediate:ef,asap:Bv,isIterable:Wv};class xe extends Error{static from(t,r,o,a,l,f){const g=new xe(t.message,r||t.code,o,a,l);return g.cause=t,g.name=t.name,t.status!=null&&g.status==null&&(g.status=t.status),f&&Object.assign(g,f),g}constructor(t,r,o,a,l){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),o&&(this.config=o),a&&(this.request=a),l&&(this.response=l,this.status=l.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.status}}}xe.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";xe.ERR_BAD_OPTION="ERR_BAD_OPTION";xe.ECONNABORTED="ECONNABORTED";xe.ETIMEDOUT="ETIMEDOUT";xe.ERR_NETWORK="ERR_NETWORK";xe.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";xe.ERR_DEPRECATED="ERR_DEPRECATED";xe.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";xe.ERR_BAD_REQUEST="ERR_BAD_REQUEST";xe.ERR_CANCELED="ERR_CANCELED";xe.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";xe.ERR_INVALID_URL="ERR_INVALID_URL";const J=xe,Hv=null;function qo(i){return b.isPlainObject(i)||b.isArray(i)}function tf(i){return b.endsWith(i,"[]")?i.slice(0,-2):i}function Oo(i,t,r){return i?i.concat(t).map(function(a,l){return a=tf(a),!r&&l?"["+a+"]":a}).join(r?".":""):t}function $v(i){return b.isArray(i)&&!i.some(qo)}const qv=b.toFlatObject(b,{},null,function(t){return/^is[A-Z]/.test(t)});function ts(i,t,r){if(!b.isObject(i))throw new TypeError("target must be an object");t=t||new FormData,r=b.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,P){return!b.isUndefined(P[k])});const o=r.metaTokens,a=r.visitor||I,l=r.dots,f=r.indexes,y=(r.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(t);if(!b.isFunction(a))throw new TypeError("visitor must be a function");function v(R){if(R===null)return"";if(b.isDate(R))return R.toISOString();if(b.isBoolean(R))return R.toString();if(!y&&b.isBlob(R))throw new J("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(R)||b.isTypedArray(R)?y&&typeof Blob=="function"?new Blob([R]):Buffer.from(R):R}function I(R,k,P){let X=R;if(b.isReactNative(t)&&b.isReactNativeBlob(R))return t.append(Oo(P,k,l),v(R)),!1;if(R&&!P&&typeof R=="object"){if(b.endsWith(k,"{}"))k=o?k:k.slice(0,-2),R=JSON.stringify(R);else if(b.isArray(R)&&$v(R)||(b.isFileList(R)||b.endsWith(k,"[]"))&&(X=b.toArray(R)))return k=tf(k),X.forEach(function(ee,le){!(b.isUndefined(ee)||ee===null)&&t.append(f===!0?Oo([k],le,l):f===null?k:k+"[]",v(ee))}),!1}return qo(R)?!0:(t.append(Oo(P,k,l),v(R)),!1)}const O=[],D=Object.assign(qv,{defaultVisitor:I,convertValue:v,isVisitable:qo});function G(R,k){if(!b.isUndefined(R)){if(O.indexOf(R)!==-1)throw Error("Circular reference detected in "+k.join("."));O.push(R),b.forEach(R,function(X,ye){(!(b.isUndefined(X)||X===null)&&a.call(t,X,b.isString(ye)?ye.trim():ye,k,D))===!0&&G(X,k?k.concat(ye):[ye])}),O.pop()}}if(!b.isObject(i))throw new TypeError("data must be an object");return G(i),t}function sl(i){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(o){return t[o]})}function ia(i,t){this._pairs=[],i&&ts(i,this,t)}const nf=ia.prototype;nf.append=function(t,r){this._pairs.push([t,r])};nf.toString=function(t){const r=t?function(o){return t.call(this,o,sl)}:sl;return this._pairs.map(function(a){return r(a[0])+"="+r(a[1])},"").join("&")};function zv(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function rf(i,t,r){if(!t)return i;const o=r&&r.encode||zv,a=b.isFunction(r)?{serialize:r}:r,l=a&&a.serialize;let f;if(l?f=l(t,a):f=b.isURLSearchParams(t)?t.toString():new ia(t,a).toString(o),f){const g=i.indexOf("#");g!==-1&&(i=i.slice(0,g)),i+=(i.indexOf("?")===-1?"?":"&")+f}return i}class Vv{constructor(){this.handlers=[]}use(t,r,o){return this.handlers.push({fulfilled:t,rejected:r,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){b.forEach(this.handlers,function(o){o!==null&&t(o)})}}const ol=Vv,sa={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Gv=typeof URLSearchParams<"u"?URLSearchParams:ia,Kv=typeof FormData<"u"?FormData:null,Jv=typeof Blob<"u"?Blob:null,jv={isBrowser:!0,classes:{URLSearchParams:Gv,FormData:Kv,Blob:Jv},protocols:["http","https","file","blob","url","data"]},oa=typeof window<"u"&&typeof document<"u",zo=typeof navigator=="object"&&navigator||void 0,Xv=oa&&(!zo||["ReactNative","NativeScript","NS"].indexOf(zo.product)<0),Yv=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Zv=oa&&window.location.href||"http://localhost",Qv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:oa,hasStandardBrowserEnv:Xv,hasStandardBrowserWebWorkerEnv:Yv,navigator:zo,origin:Zv},Symbol.toStringTag,{value:"Module"})),Ae={...Qv,...jv};function e0(i,t){return ts(i,new Ae.classes.URLSearchParams,{visitor:function(r,o,a,l){return Ae.isNode&&b.isBuffer(r)?(this.append(o,r.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...t})}function t0(i){return b.matchAll(/\w+|\[(\w*)]/g,i).map(t=>t[0]==="[]"?"":t[1]||t[0])}function n0(i){const t={},r=Object.keys(i);let o;const a=r.length;let l;for(o=0;o<a;o++)l=r[o],t[l]=i[l];return t}function sf(i){function t(r,o,a,l){let f=r[l++];if(f==="__proto__")return!0;const g=Number.isFinite(+f),y=l>=r.length;return f=!f&&b.isArray(a)?a.length:f,y?(b.hasOwnProp(a,f)?a[f]=[a[f],o]:a[f]=o,!g):((!a[f]||!b.isObject(a[f]))&&(a[f]=[]),t(r,o,a[f],l)&&b.isArray(a[f])&&(a[f]=n0(a[f])),!g)}if(b.isFormData(i)&&b.isFunction(i.entries)){const r={};return b.forEachEntry(i,(o,a)=>{t(t0(o),a,r,0)}),r}return null}function r0(i,t,r){if(b.isString(i))try{return(t||JSON.parse)(i),b.trim(i)}catch(o){if(o.name!=="SyntaxError")throw o}return(r||JSON.stringify)(i)}const aa={transitional:sa,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const o=r.getContentType()||"",a=o.indexOf("application/json")>-1,l=b.isObject(t);if(l&&b.isHTMLForm(t)&&(t=new FormData(t)),b.isFormData(t))return a?JSON.stringify(sf(t)):t;if(b.isArrayBuffer(t)||b.isBuffer(t)||b.isStream(t)||b.isFile(t)||b.isBlob(t)||b.isReadableStream(t))return t;if(b.isArrayBufferView(t))return t.buffer;if(b.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let g;if(l){if(o.indexOf("application/x-www-form-urlencoded")>-1)return e0(t,this.formSerializer).toString();if((g=b.isFileList(t))||o.indexOf("multipart/form-data")>-1){const y=this.env&&this.env.FormData;return ts(g?{"files[]":t}:t,y&&new y,this.formSerializer)}}return l||a?(r.setContentType("application/json",!1),r0(t)):t}],transformResponse:[function(t){const r=this.transitional||aa.transitional,o=r&&r.forcedJSONParsing,a=this.responseType==="json";if(b.isResponse(t)||b.isReadableStream(t))return t;if(t&&b.isString(t)&&(o&&!this.responseType||a)){const f=!(r&&r.silentJSONParsing)&&a;try{return JSON.parse(t,this.parseReviver)}catch(g){if(f)throw g.name==="SyntaxError"?J.from(g,J.ERR_BAD_RESPONSE,this,null,this.response):g}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ae.classes.FormData,Blob:Ae.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};b.forEach(["delete","get","head","post","put","patch"],i=>{aa.headers[i]={}});const ua=aa,i0=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),s0=i=>{const t={};let r,o,a;return i&&i.split(`
`).forEach(function(f){a=f.indexOf(":"),r=f.substring(0,a).trim().toLowerCase(),o=f.substring(a+1).trim(),!(!r||t[r]&&i0[r])&&(r==="set-cookie"?t[r]?t[r].push(o):t[r]=[o]:t[r]=t[r]?t[r]+", "+o:o)}),t},al=Symbol("internals");function vr(i){return i&&String(i).trim().toLowerCase()}function ki(i){return i===!1||i==null?i:b.isArray(i)?i.map(ki):String(i)}function o0(i){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=r.exec(i);)t[o[1]]=o[2];return t}const a0=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Po(i,t,r,o,a){if(b.isFunction(o))return o.call(this,t,r);if(a&&(t=r),!!b.isString(t)){if(b.isString(o))return t.indexOf(o)!==-1;if(b.isRegExp(o))return o.test(t)}}function u0(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,o)=>r.toUpperCase()+o)}function c0(i,t){const r=b.toCamelCase(" "+t);["get","set","has"].forEach(o=>{Object.defineProperty(i,o+r,{value:function(a,l,f){return this[o].call(this,t,a,l,f)},configurable:!0})})}class ns{constructor(t){t&&this.set(t)}set(t,r,o){const a=this;function l(g,y,v){const I=vr(y);if(!I)throw new Error("header name must be a non-empty string");const O=b.findKey(a,I);(!O||a[O]===void 0||v===!0||v===void 0&&a[O]!==!1)&&(a[O||y]=ki(g))}const f=(g,y)=>b.forEach(g,(v,I)=>l(v,I,y));if(b.isPlainObject(t)||t instanceof this.constructor)f(t,r);else if(b.isString(t)&&(t=t.trim())&&!a0(t))f(s0(t),r);else if(b.isObject(t)&&b.isIterable(t)){let g={},y,v;for(const I of t){if(!b.isArray(I))throw TypeError("Object iterator must return a key-value pair");g[v=I[0]]=(y=g[v])?b.isArray(y)?[...y,I[1]]:[y,I[1]]:I[1]}f(g,r)}else t!=null&&l(r,t,o);return this}get(t,r){if(t=vr(t),t){const o=b.findKey(this,t);if(o){const a=this[o];if(!r)return a;if(r===!0)return o0(a);if(b.isFunction(r))return r.call(this,a,o);if(b.isRegExp(r))return r.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=vr(t),t){const o=b.findKey(this,t);return!!(o&&this[o]!==void 0&&(!r||Po(this,this[o],o,r)))}return!1}delete(t,r){const o=this;let a=!1;function l(f){if(f=vr(f),f){const g=b.findKey(o,f);g&&(!r||Po(o,o[g],g,r))&&(delete o[g],a=!0)}}return b.isArray(t)?t.forEach(l):l(t),a}clear(t){const r=Object.keys(this);let o=r.length,a=!1;for(;o--;){const l=r[o];(!t||Po(this,this[l],l,t,!0))&&(delete this[l],a=!0)}return a}normalize(t){const r=this,o={};return b.forEach(this,(a,l)=>{const f=b.findKey(o,l);if(f){r[f]=ki(a),delete r[l];return}const g=t?u0(l):String(l).trim();g!==l&&delete r[l],r[g]=ki(a),o[g]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return b.forEach(this,(o,a)=>{o!=null&&o!==!1&&(r[a]=t&&b.isArray(o)?o.join(", "):o)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const o=new this(t);return r.forEach(a=>o.set(a)),o}static accessor(t){const o=(this[al]=this[al]={accessors:{}}).accessors,a=this.prototype;function l(f){const g=vr(f);o[g]||(c0(a,f),o[g]=!0)}return b.isArray(t)?t.forEach(l):l(t),this}}ns.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.reduceDescriptors(ns.prototype,({value:i},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>i,set(o){this[r]=o}}});b.freezeMethods(ns);const ut=ns;function Lo(i,t){const r=this||ua,o=t||r,a=ut.from(o.headers);let l=o.data;return b.forEach(i,function(g){l=g.call(r,l,a.normalize(),t?t.status:void 0)}),a.normalize(),l}function of(i){return!!(i&&i.__CANCEL__)}class l0 extends J{constructor(t,r,o){super(t??"canceled",J.ERR_CANCELED,r,o),this.name="CanceledError",this.__CANCEL__=!0}}const Or=l0;function af(i,t,r){const o=r.config.validateStatus;!r.status||!o||o(r.status)?i(r):t(new J("Request failed with status code "+r.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function f0(i){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return t&&t[1]||""}function h0(i,t){i=i||10;const r=new Array(i),o=new Array(i);let a=0,l=0,f;return t=t!==void 0?t:1e3,function(y){const v=Date.now(),I=o[l];f||(f=v),r[a]=y,o[a]=v;let O=l,D=0;for(;O!==a;)D+=r[O++],O=O%i;if(a=(a+1)%i,a===l&&(l=(l+1)%i),v-f<t)return;const G=I&&v-I;return G?Math.round(D*1e3/G):void 0}}function d0(i,t){let r=0,o=1e3/t,a,l;const f=(v,I=Date.now())=>{r=I,a=null,l&&(clearTimeout(l),l=null),i(...v)};return[(...v)=>{const I=Date.now(),O=I-r;O>=o?f(v,I):(a=v,l||(l=setTimeout(()=>{l=null,f(a)},o-O)))},()=>a&&f(a)]}const qi=(i,t,r=3)=>{let o=0;const a=h0(50,250);return d0(l=>{const f=l.loaded,g=l.lengthComputable?l.total:void 0,y=f-o,v=a(y),I=f<=g;o=f;const O={loaded:f,total:g,progress:g?f/g:void 0,bytes:y,rate:v||void 0,estimated:v&&g&&I?(g-f)/v:void 0,event:l,lengthComputable:g!=null,[t?"download":"upload"]:!0};i(O)},r)},ul=(i,t)=>{const r=i!=null;return[o=>t[0]({lengthComputable:r,total:i,loaded:o}),t[1]]},cl=i=>(...t)=>b.asap(()=>i(...t)),p0=Ae.hasStandardBrowserEnv?((i,t)=>r=>(r=new URL(r,Ae.origin),i.protocol===r.protocol&&i.host===r.host&&(t||i.port===r.port)))(new URL(Ae.origin),Ae.navigator&&/(msie|trident)/i.test(Ae.navigator.userAgent)):()=>!0,g0=Ae.hasStandardBrowserEnv?{write(i,t,r,o,a,l,f){if(typeof document>"u")return;const g=[`${i}=${encodeURIComponent(t)}`];b.isNumber(r)&&g.push(`expires=${new Date(r).toUTCString()}`),b.isString(o)&&g.push(`path=${o}`),b.isString(a)&&g.push(`domain=${a}`),l===!0&&g.push("secure"),b.isString(f)&&g.push(`SameSite=${f}`),document.cookie=g.join("; ")},read(i){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+i+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(i){this.write(i,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function m0(i){return typeof i!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function _0(i,t){return t?i.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):i}function uf(i,t,r){let o=!m0(t);return i&&(o||r==!1)?_0(i,t):t}const ll=i=>i instanceof ut?{...i}:i;function _n(i,t){t=t||{};const r={};function o(v,I,O,D){return b.isPlainObject(v)&&b.isPlainObject(I)?b.merge.call({caseless:D},v,I):b.isPlainObject(I)?b.merge({},I):b.isArray(I)?I.slice():I}function a(v,I,O,D){if(b.isUndefined(I)){if(!b.isUndefined(v))return o(void 0,v,O,D)}else return o(v,I,O,D)}function l(v,I){if(!b.isUndefined(I))return o(void 0,I)}function f(v,I){if(b.isUndefined(I)){if(!b.isUndefined(v))return o(void 0,v)}else return o(void 0,I)}function g(v,I,O){if(O in t)return o(v,I);if(O in i)return o(void 0,v)}const y={url:l,method:l,data:l,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:g,headers:(v,I,O)=>a(ll(v),ll(I),O,!0)};return b.forEach(Object.keys({...i,...t}),function(I){if(I==="__proto__"||I==="constructor"||I==="prototype")return;const O=b.hasOwnProp(y,I)?y[I]:a,D=O(i[I],t[I],I);b.isUndefined(D)&&O!==g||(r[I]=D)}),r}const cf=i=>{const t=_n({},i);let{data:r,withXSRFToken:o,xsrfHeaderName:a,xsrfCookieName:l,headers:f,auth:g}=t;if(t.headers=f=ut.from(f),t.url=rf(uf(t.baseURL,t.url,t.allowAbsoluteUrls),i.params,i.paramsSerializer),g&&f.set("Authorization","Basic "+btoa((g.username||"")+":"+(g.password?unescape(encodeURIComponent(g.password)):""))),b.isFormData(r)){if(Ae.hasStandardBrowserEnv||Ae.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if(b.isFunction(r.getHeaders)){const y=r.getHeaders(),v=["content-type","content-length"];Object.entries(y).forEach(([I,O])=>{v.includes(I.toLowerCase())&&f.set(I,O)})}}if(Ae.hasStandardBrowserEnv&&(o&&b.isFunction(o)&&(o=o(t)),o||o!==!1&&p0(t.url))){const y=a&&l&&g0.read(l);y&&f.set(a,y)}return t},w0=typeof XMLHttpRequest<"u",y0=w0&&function(i){return new Promise(function(r,o){const a=cf(i);let l=a.data;const f=ut.from(a.headers).normalize();let{responseType:g,onUploadProgress:y,onDownloadProgress:v}=a,I,O,D,G,R;function k(){G&&G(),R&&R(),a.cancelToken&&a.cancelToken.unsubscribe(I),a.signal&&a.signal.removeEventListener("abort",I)}let P=new XMLHttpRequest;P.open(a.method.toUpperCase(),a.url,!0),P.timeout=a.timeout;function X(){if(!P)return;const ee=ut.from("getAllResponseHeaders"in P&&P.getAllResponseHeaders()),ae={data:!g||g==="text"||g==="json"?P.responseText:P.response,status:P.status,statusText:P.statusText,headers:ee,config:i,request:P};af(function(ue){r(ue),k()},function(ue){o(ue),k()},ae),P=null}"onloadend"in P?P.onloadend=X:P.onreadystatechange=function(){!P||P.readyState!==4||P.status===0&&!(P.responseURL&&P.responseURL.indexOf("file:")===0)||setTimeout(X)},P.onabort=function(){P&&(o(new J("Request aborted",J.ECONNABORTED,i,P)),P=null)},P.onerror=function(le){const ae=le&&le.message?le.message:"Network Error",Ne=new J(ae,J.ERR_NETWORK,i,P);Ne.event=le||null,o(Ne),P=null},P.ontimeout=function(){let le=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const ae=a.transitional||sa;a.timeoutErrorMessage&&(le=a.timeoutErrorMessage),o(new J(le,ae.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,i,P)),P=null},l===void 0&&f.setContentType(null),"setRequestHeader"in P&&b.forEach(f.toJSON(),function(le,ae){P.setRequestHeader(ae,le)}),b.isUndefined(a.withCredentials)||(P.withCredentials=!!a.withCredentials),g&&g!=="json"&&(P.responseType=a.responseType),v&&([D,R]=qi(v,!0),P.addEventListener("progress",D)),y&&P.upload&&([O,G]=qi(y),P.upload.addEventListener("progress",O),P.upload.addEventListener("loadend",G)),(a.cancelToken||a.signal)&&(I=ee=>{P&&(o(!ee||ee.type?new Or(null,i,P):ee),P.abort(),P=null)},a.cancelToken&&a.cancelToken.subscribe(I),a.signal&&(a.signal.aborted?I():a.signal.addEventListener("abort",I)));const ye=f0(a.url);if(ye&&Ae.protocols.indexOf(ye)===-1){o(new J("Unsupported protocol "+ye+":",J.ERR_BAD_REQUEST,i));return}P.send(l||null)})},v0=(i,t)=>{const{length:r}=i=i?i.filter(Boolean):[];if(t||r){let o=new AbortController,a;const l=function(v){if(!a){a=!0,g();const I=v instanceof Error?v:this.reason;o.abort(I instanceof J?I:new Or(I instanceof Error?I.message:I))}};let f=t&&setTimeout(()=>{f=null,l(new J(`timeout of ${t}ms exceeded`,J.ETIMEDOUT))},t);const g=()=>{i&&(f&&clearTimeout(f),f=null,i.forEach(v=>{v.unsubscribe?v.unsubscribe(l):v.removeEventListener("abort",l)}),i=null)};i.forEach(v=>v.addEventListener("abort",l));const{signal:y}=o;return y.unsubscribe=()=>b.asap(g),y}},b0=v0,E0=function*(i,t){let r=i.byteLength;if(!t||r<t){yield i;return}let o=0,a;for(;o<r;)a=o+t,yield i.slice(o,a),o=a},I0=async function*(i,t){for await(const r of T0(i))yield*E0(r,t)},T0=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const t=i.getReader();try{for(;;){const{done:r,value:o}=await t.read();if(r)break;yield o}}finally{await t.cancel()}},fl=(i,t,r,o)=>{const a=I0(i,t);let l=0,f,g=y=>{f||(f=!0,o&&o(y))};return new ReadableStream({async pull(y){try{const{done:v,value:I}=await a.next();if(v){g(),y.close();return}let O=I.byteLength;if(r){let D=l+=O;r(D)}y.enqueue(new Uint8Array(I))}catch(v){throw g(v),v}},cancel(y){return g(y),a.return()}},{highWaterMark:2})},hl=64*1024,{isFunction:xi}=b,S0=(({Request:i,Response:t})=>({Request:i,Response:t}))(b.global),{ReadableStream:dl,TextEncoder:pl}=b.global,gl=(i,...t)=>{try{return!!i(...t)}catch{return!1}},A0=i=>{i=b.merge.call({skipUndefined:!0},S0,i);const{fetch:t,Request:r,Response:o}=i,a=t?xi(t):typeof fetch=="function",l=xi(r),f=xi(o);if(!a)return!1;const g=a&&xi(dl),y=a&&(typeof pl=="function"?(R=>k=>R.encode(k))(new pl):async R=>new Uint8Array(await new r(R).arrayBuffer())),v=l&&g&&gl(()=>{let R=!1;const k=new r(Ae.origin,{body:new dl,method:"POST",get duplex(){return R=!0,"half"}}).headers.has("Content-Type");return R&&!k}),I=f&&g&&gl(()=>b.isReadableStream(new o("").body)),O={stream:I&&(R=>R.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(R=>{!O[R]&&(O[R]=(k,P)=>{let X=k&&k[R];if(X)return X.call(k);throw new J(`Response type '${R}' is not supported`,J.ERR_NOT_SUPPORT,P)})});const D=async R=>{if(R==null)return 0;if(b.isBlob(R))return R.size;if(b.isSpecCompliantForm(R))return(await new r(Ae.origin,{method:"POST",body:R}).arrayBuffer()).byteLength;if(b.isArrayBufferView(R)||b.isArrayBuffer(R))return R.byteLength;if(b.isURLSearchParams(R)&&(R=R+""),b.isString(R))return(await y(R)).byteLength},G=async(R,k)=>{const P=b.toFiniteNumber(R.getContentLength());return P??D(k)};return async R=>{let{url:k,method:P,data:X,signal:ye,cancelToken:ee,timeout:le,onDownloadProgress:ae,onUploadProgress:Ne,responseType:ue,headers:yt,withCredentials:Mt="same-origin",fetchOptions:Mr}=cf(R),Ur=t||fetch;ue=ue?(ue+"").toLowerCase():"text";let vn=b0([ye,ee&&ee.toAbortSignal()],le),rn=null;const ft=vn&&vn.unsubscribe&&(()=>{vn.unsubscribe()});let Fr;try{if(Ne&&v&&P!=="get"&&P!=="head"&&(Fr=await G(yt,X))!==0){let pe=new r(k,{method:"POST",body:X,duplex:"half"}),Ut;if(b.isFormData(X)&&(Ut=pe.headers.get("content-type"))&&yt.setContentType(Ut),pe.body){const[Xn,En]=ul(Fr,qi(cl(Ne)));X=fl(pe.body,hl,Xn,En)}}b.isString(Mt)||(Mt=Mt?"include":"omit");const Ie=l&&"credentials"in r.prototype,ht={...Mr,signal:vn,method:P.toUpperCase(),headers:yt.normalize().toJSON(),body:X,duplex:"half",credentials:Ie?Mt:void 0};rn=l&&new r(k,ht);let ve=await(l?Ur(rn,Mr):Ur(k,ht));const Br=I&&(ue==="stream"||ue==="response");if(I&&(ae||Br&&ft)){const pe={};["status","statusText","headers"].forEach(vt=>{pe[vt]=ve[vt]});const Ut=b.toFiniteNumber(ve.headers.get("content-length")),[Xn,En]=ae&&ul(Ut,qi(cl(ae),!0))||[];ve=new o(fl(ve.body,hl,Xn,()=>{En&&En(),ft&&ft()}),pe)}ue=ue||"text";let bn=await O[b.findKey(O,ue)||"text"](ve,R);return!Br&&ft&&ft(),await new Promise((pe,Ut)=>{af(pe,Ut,{data:bn,headers:ut.from(ve.headers),status:ve.status,statusText:ve.statusText,config:R,request:rn})})}catch(Ie){throw ft&&ft(),Ie&&Ie.name==="TypeError"&&/Load failed|fetch/i.test(Ie.message)?Object.assign(new J("Network Error",J.ERR_NETWORK,R,rn,Ie&&Ie.response),{cause:Ie.cause||Ie}):J.from(Ie,Ie&&Ie.code,R,rn,Ie&&Ie.response)}}},R0=new Map,lf=i=>{let t=i&&i.env||{};const{fetch:r,Request:o,Response:a}=t,l=[o,a,r];let f=l.length,g=f,y,v,I=R0;for(;g--;)y=l[g],v=I.get(y),v===void 0&&I.set(y,v=g?new Map:A0(t)),I=v;return v};lf();const ca={http:Hv,xhr:y0,fetch:{get:lf}};b.forEach(ca,(i,t)=>{if(i){try{Object.defineProperty(i,"name",{value:t})}catch{}Object.defineProperty(i,"adapterName",{value:t})}});const ml=i=>`- ${i}`,C0=i=>b.isFunction(i)||i===null||i===!1;function O0(i,t){i=b.isArray(i)?i:[i];const{length:r}=i;let o,a;const l={};for(let f=0;f<r;f++){o=i[f];let g;if(a=o,!C0(o)&&(a=ca[(g=String(o)).toLowerCase()],a===void 0))throw new J(`Unknown adapter '${g}'`);if(a&&(b.isFunction(a)||(a=a.get(t))))break;l[g||"#"+f]=a}if(!a){const f=Object.entries(l).map(([y,v])=>`adapter ${y} `+(v===!1?"is not supported by the environment":"is not available in the build"));let g=r?f.length>1?`since :
`+f.map(ml).join(`
`):" "+ml(f[0]):"as no adapter specified";throw new J("There is no suitable adapter to dispatch the request "+g,"ERR_NOT_SUPPORT")}return a}const ff={getAdapter:O0,adapters:ca};function xo(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Or(null,i)}function _l(i){return xo(i),i.headers=ut.from(i.headers),i.data=Lo.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),ff.getAdapter(i.adapter||ua.adapter,i)(i).then(function(o){return xo(i),o.data=Lo.call(i,i.transformResponse,o),o.headers=ut.from(o.headers),o},function(o){return of(o)||(xo(i),o&&o.response&&(o.response.data=Lo.call(i,i.transformResponse,o.response),o.response.headers=ut.from(o.response.headers))),Promise.reject(o)})}const hf="1.13.6",rs={};["object","boolean","number","function","string","symbol"].forEach((i,t)=>{rs[i]=function(o){return typeof o===i||"a"+(t<1?"n ":" ")+i}});const wl={};rs.transitional=function(t,r,o){function a(l,f){return"[Axios v"+hf+"] Transitional option '"+l+"'"+f+(o?". "+o:"")}return(l,f,g)=>{if(t===!1)throw new J(a(f," has been removed"+(r?" in "+r:"")),J.ERR_DEPRECATED);return r&&!wl[f]&&(wl[f]=!0,console.warn(a(f," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(l,f,g):!0}};rs.spelling=function(t){return(r,o)=>(console.warn(`${o} is likely a misspelling of ${t}`),!0)};function P0(i,t,r){if(typeof i!="object")throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const o=Object.keys(i);let a=o.length;for(;a-- >0;){const l=o[a],f=t[l];if(f){const g=i[l],y=g===void 0||f(g,l,i);if(y!==!0)throw new J("option "+l+" must be "+y,J.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new J("Unknown option "+l,J.ERR_BAD_OPTION)}}const Mi={assertOptions:P0,validators:rs},Qe=Mi.validators;class zi{constructor(t){this.defaults=t||{},this.interceptors={request:new ol,response:new ol}}async request(t,r){try{return await this._request(t,r)}catch(o){if(o instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const l=a.stack?a.stack.replace(/^.+\n/,""):"";try{o.stack?l&&!String(o.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+l):o.stack=l}catch{}}throw o}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=_n(this.defaults,r);const{transitional:o,paramsSerializer:a,headers:l}=r;o!==void 0&&Mi.assertOptions(o,{silentJSONParsing:Qe.transitional(Qe.boolean),forcedJSONParsing:Qe.transitional(Qe.boolean),clarifyTimeoutError:Qe.transitional(Qe.boolean),legacyInterceptorReqResOrdering:Qe.transitional(Qe.boolean)},!1),a!=null&&(b.isFunction(a)?r.paramsSerializer={serialize:a}:Mi.assertOptions(a,{encode:Qe.function,serialize:Qe.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Mi.assertOptions(r,{baseUrl:Qe.spelling("baseURL"),withXsrfToken:Qe.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let f=l&&b.merge(l.common,l[r.method]);l&&b.forEach(["delete","get","head","post","put","patch","common"],R=>{delete l[R]}),r.headers=ut.concat(f,l);const g=[];let y=!0;this.interceptors.request.forEach(function(k){if(typeof k.runWhen=="function"&&k.runWhen(r)===!1)return;y=y&&k.synchronous;const P=r.transitional||sa;P&&P.legacyInterceptorReqResOrdering?g.unshift(k.fulfilled,k.rejected):g.push(k.fulfilled,k.rejected)});const v=[];this.interceptors.response.forEach(function(k){v.push(k.fulfilled,k.rejected)});let I,O=0,D;if(!y){const R=[_l.bind(this),void 0];for(R.unshift(...g),R.push(...v),D=R.length,I=Promise.resolve(r);O<D;)I=I.then(R[O++],R[O++]);return I}D=g.length;let G=r;for(;O<D;){const R=g[O++],k=g[O++];try{G=R(G)}catch(P){k.call(this,P);break}}try{I=_l.call(this,G)}catch(R){return Promise.reject(R)}for(O=0,D=v.length;O<D;)I=I.then(v[O++],v[O++]);return I}getUri(t){t=_n(this.defaults,t);const r=uf(t.baseURL,t.url,t.allowAbsoluteUrls);return rf(r,t.params,t.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(t){zi.prototype[t]=function(r,o){return this.request(_n(o||{},{method:t,url:r,data:(o||{}).data}))}});b.forEach(["post","put","patch"],function(t){function r(o){return function(l,f,g){return this.request(_n(g||{},{method:t,headers:o?{"Content-Type":"multipart/form-data"}:{},url:l,data:f}))}}zi.prototype[t]=r(),zi.prototype[t+"Form"]=r(!0)});const Ui=zi;class la{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(l){r=l});const o=this;this.promise.then(a=>{if(!o._listeners)return;let l=o._listeners.length;for(;l-- >0;)o._listeners[l](a);o._listeners=null}),this.promise.then=a=>{let l;const f=new Promise(g=>{o.subscribe(g),l=g}).then(a);return f.cancel=function(){o.unsubscribe(l)},f},t(function(l,f,g){o.reason||(o.reason=new Or(l,f,g),r(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=o=>{t.abort(o)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new la(function(a){t=a}),cancel:t}}}const L0=la;function x0(i){return function(r){return i.apply(null,r)}}function N0(i){return b.isObject(i)&&i.isAxiosError===!0}const Vo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Vo).forEach(([i,t])=>{Vo[t]=i});const D0=Vo;function df(i){const t=new Ui(i),r=Kl(Ui.prototype.request,t);return b.extend(r,Ui.prototype,t,{allOwnKeys:!0}),b.extend(r,t,null,{allOwnKeys:!0}),r.create=function(a){return df(_n(i,a))},r}const de=df(ua);de.Axios=Ui;de.CanceledError=Or;de.CancelToken=L0;de.isCancel=of;de.VERSION=hf;de.toFormData=ts;de.AxiosError=J;de.Cancel=de.CanceledError;de.all=function(t){return Promise.all(t)};de.spread=x0;de.isAxiosError=N0;de.mergeConfig=_n;de.AxiosHeaders=ut;de.formToJSON=i=>sf(b.isHTMLForm(i)?new FormData(i):i);de.getAdapter=ff.getAdapter;de.HttpStatusCode=D0;de.default=de;const k0=de;window._=Zy;window.axios=k0;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";const M0=()=>{};/**
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
 */const pf=function(i){const t=[];let r=0;for(let o=0;o<i.length;o++){let a=i.charCodeAt(o);a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=a&63|128):(a&64512)===55296&&o+1<i.length&&(i.charCodeAt(o+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++o)&1023),t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=a&63|128):(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=a&63|128)}return t},U0=function(i){const t=[];let r=0,o=0;for(;r<i.length;){const a=i[r++];if(a<128)t[o++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[r++];t[o++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[r++],f=i[r++],g=i[r++],y=((a&7)<<18|(l&63)<<12|(f&63)<<6|g&63)-65536;t[o++]=String.fromCharCode(55296+(y>>10)),t[o++]=String.fromCharCode(56320+(y&1023))}else{const l=i[r++],f=i[r++];t[o++]=String.fromCharCode((a&15)<<12|(l&63)<<6|f&63)}}return t.join("")},gf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let a=0;a<i.length;a+=3){const l=i[a],f=a+1<i.length,g=f?i[a+1]:0,y=a+2<i.length,v=y?i[a+2]:0,I=l>>2,O=(l&3)<<4|g>>4;let D=(g&15)<<2|v>>6,G=v&63;y||(G=64,f||(D=64)),o.push(r[I],r[O],r[D],r[G])}return o.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(pf(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):U0(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let a=0;a<i.length;){const l=r[i.charAt(a++)],g=a<i.length?r[i.charAt(a)]:0;++a;const v=a<i.length?r[i.charAt(a)]:64;++a;const O=a<i.length?r[i.charAt(a)]:64;if(++a,l==null||g==null||v==null||O==null)throw new F0;const D=l<<2|g>>4;if(o.push(D),v!==64){const G=g<<4&240|v>>2;if(o.push(G),O!==64){const R=v<<6&192|O;o.push(R)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class F0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const B0=function(i){const t=pf(i);return gf.encodeByteArray(t,!0)},mf=function(i){return B0(i).replace(/\./g,"")},_f=function(i){try{return gf.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function W0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const H0=()=>W0().__FIREBASE_DEFAULTS__,$0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const i={}.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},q0=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&_f(i[1]);return t&&JSON.parse(t)},fa=()=>{try{return M0()||H0()||$0()||q0()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},z0=i=>{var t,r;return(r=(t=fa())==null?void 0:t.emulatorHosts)==null?void 0:r[i]},wf=()=>{var i;return(i=fa())==null?void 0:i.config},yf=i=>{var t;return(t=fa())==null?void 0:t[`_${i}`]};/**
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
 */class V0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,o)=>{r?this.reject(r):this.resolve(o),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,o))}}}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function G0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function K0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function J0(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function j0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function X0(){const i=Le();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Y0(){try{return typeof indexedDB=="object"}catch{return!1}}function Z0(){return new Promise((i,t)=>{try{let r=!0;const o="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(o);a.onsuccess=()=>{a.result.close(),r||self.indexedDB.deleteDatabase(o),i(!0)},a.onupgradeneeded=()=>{r=!1},a.onerror=()=>{var l;t(((l=a.error)==null?void 0:l.message)||"")}}catch(r){t(r)}})}/**
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
 */const Q0="FirebaseError";class tn extends Error{constructor(t,r,o){super(r),this.code=t,this.customData=o,this.name=Q0,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pr.prototype.create)}}class Pr{constructor(t,r,o){this.service=t,this.serviceName=r,this.errors=o}create(t,...r){const o=r[0]||{},a=`${this.service}/${t}`,l=this.errors[t],f=l?eb(l,o):"Error",g=`${this.serviceName}: ${f} (${a}).`;return new tn(a,g,o)}}function eb(i,t){return i.replace(tb,(r,o)=>{const a=t[o];return a!=null?String(a):`<${o}?>`})}const tb=/\{\$([^}]+)}/g;function nb(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function zn(i,t){if(i===t)return!0;const r=Object.keys(i),o=Object.keys(t);for(const a of r){if(!o.includes(a))return!1;const l=i[a],f=t[a];if(yl(l)&&yl(f)){if(!zn(l,f))return!1}else if(l!==f)return!1}for(const a of o)if(!r.includes(a))return!1;return!0}function yl(i){return i!==null&&typeof i=="object"}/**
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
 */function Lr(i){const t=[];for(const[r,o]of Object.entries(i))Array.isArray(o)?o.forEach(a=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(a))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(o));return t.length?"&"+t.join("&"):""}function rb(i,t){const r=new ib(i,t);return r.subscribe.bind(r)}class ib{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(o=>{this.error(o)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,o){let a;if(t===void 0&&r===void 0&&o===void 0)throw new Error("Missing Observer.");sb(t,["next","error","complete"])?a=t:a={next:t,error:r,complete:o},a.next===void 0&&(a.next=No),a.error===void 0&&(a.error=No),a.complete===void 0&&(a.complete=No);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sb(i,t){if(typeof i!="object"||i===null)return!1;for(const r of t)if(r in i&&typeof i[r]=="function")return!0;return!1}function No(){}/**
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
 */function nn(i){return i&&i._delegate?i._delegate:i}/**
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
 */function ha(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ob(i){return(await fetch(i,{credentials:"include"})).ok}class Vn{constructor(t,r,o){this.name=t,this.instanceFactory=r,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const pn="[DEFAULT]";/**
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
 */class ab{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const o=new V0;if(this.instancesDeferred.set(r,o),this.isInitialized(r)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:r});a&&o.resolve(a)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(t==null?void 0:t.optional)??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(cb(t))try{this.getOrInitializeService({instanceIdentifier:pn})}catch{}for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);try{const l=this.getOrInitializeService({instanceIdentifier:a});o.resolve(l)}catch{}}}}clearInstance(t=pn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=pn){return this.instances.has(t)}getOptions(t=pn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:o,options:r});for(const[l,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(l);o===g&&f.resolve(a)}return a}onInit(t,r){const o=this.normalizeInstanceIdentifier(r),a=this.onInitCallbacks.get(o)??new Set;a.add(t),this.onInitCallbacks.set(o,a);const l=this.instances.get(o);return l&&t(l,o),()=>{a.delete(t)}}invokeOnInitCallbacks(t,r){const o=this.onInitCallbacks.get(r);if(o)for(const a of o)try{a(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let o=this.instances.get(t);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:ub(t),options:r}),this.instances.set(t,o),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(o,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,o)}catch{}return o||null}normalizeInstanceIdentifier(t=pn){return this.component?this.component.multipleInstances?t:pn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ub(i){return i===pn?void 0:i}function cb(i){return i.instantiationMode==="EAGER"}/**
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
 */class lb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new ab(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ne||(ne={}));const fb={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},hb=ne.INFO,db={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},pb=(i,t,...r)=>{if(t<i.logLevel)return;const o=new Date().toISOString(),a=db[t];if(a)console[a](`[${o}]  ${i.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class vf{constructor(t){this.name=t,this._logLevel=hb,this._logHandler=pb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ne))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?fb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...t),this._logHandler(this,ne.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...t),this._logHandler(this,ne.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...t),this._logHandler(this,ne.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...t),this._logHandler(this,ne.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...t),this._logHandler(this,ne.ERROR,...t)}}const gb=(i,t)=>t.some(r=>i instanceof r);let vl,bl;function mb(){return vl||(vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _b(){return bl||(bl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bf=new WeakMap,Go=new WeakMap,Ef=new WeakMap,Do=new WeakMap,da=new WeakMap;function wb(i){const t=new Promise((r,o)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",f)},l=()=>{r(Zt(i.result)),a()},f=()=>{o(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",f)});return t.then(r=>{r instanceof IDBCursor&&bf.set(r,i)}).catch(()=>{}),da.set(t,i),t}function yb(i){if(Go.has(i))return;const t=new Promise((r,o)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",f),i.removeEventListener("abort",f)},l=()=>{r(),a()},f=()=>{o(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",f),i.addEventListener("abort",f)});Go.set(i,t)}let Ko={get(i,t,r){if(i instanceof IDBTransaction){if(t==="done")return Go.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Ef.get(i);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Zt(i[t])},set(i,t,r){return i[t]=r,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function vb(i){Ko=i(Ko)}function bb(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const o=i.call(ko(this),t,...r);return Ef.set(o,t.sort?t.sort():[t]),Zt(o)}:_b().includes(i)?function(...t){return i.apply(ko(this),t),Zt(bf.get(this))}:function(...t){return Zt(i.apply(ko(this),t))}}function Eb(i){return typeof i=="function"?bb(i):(i instanceof IDBTransaction&&yb(i),gb(i,mb())?new Proxy(i,Ko):i)}function Zt(i){if(i instanceof IDBRequest)return wb(i);if(Do.has(i))return Do.get(i);const t=Eb(i);return t!==i&&(Do.set(i,t),da.set(t,i)),t}const ko=i=>da.get(i);function Ib(i,t,{blocked:r,upgrade:o,blocking:a,terminated:l}={}){const f=indexedDB.open(i,t),g=Zt(f);return o&&f.addEventListener("upgradeneeded",y=>{o(Zt(f.result),y.oldVersion,y.newVersion,Zt(f.transaction),y)}),r&&f.addEventListener("blocked",y=>r(y.oldVersion,y.newVersion,y)),g.then(y=>{l&&y.addEventListener("close",()=>l()),a&&y.addEventListener("versionchange",v=>a(v.oldVersion,v.newVersion,v))}).catch(()=>{}),g}const Tb=["get","getKey","getAll","getAllKeys","count"],Sb=["put","add","delete","clear"],Mo=new Map;function El(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Mo.get(t))return Mo.get(t);const r=t.replace(/FromIndex$/,""),o=t!==r,a=Sb.includes(r);if(!(r in(o?IDBIndex:IDBObjectStore).prototype)||!(a||Tb.includes(r)))return;const l=async function(f,...g){const y=this.transaction(f,a?"readwrite":"readonly");let v=y.store;return o&&(v=v.index(g.shift())),(await Promise.all([v[r](...g),a&&y.done]))[0]};return Mo.set(t,l),l}vb(i=>({...i,get:(t,r,o)=>El(t,r)||i.get(t,r,o),has:(t,r)=>!!El(t,r)||i.has(t,r)}));/**
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
 */class Ab{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Rb(r)){const o=r.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(r=>r).join(" ")}}function Rb(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Jo="@firebase/app",Il="0.14.10";/**
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
 */const Dt=new vf("@firebase/app"),Cb="@firebase/app-compat",Ob="@firebase/analytics-compat",Pb="@firebase/analytics",Lb="@firebase/app-check-compat",xb="@firebase/app-check",Nb="@firebase/auth",Db="@firebase/auth-compat",kb="@firebase/database",Mb="@firebase/data-connect",Ub="@firebase/database-compat",Fb="@firebase/functions",Bb="@firebase/functions-compat",Wb="@firebase/installations",Hb="@firebase/installations-compat",$b="@firebase/messaging",qb="@firebase/messaging-compat",zb="@firebase/performance",Vb="@firebase/performance-compat",Gb="@firebase/remote-config",Kb="@firebase/remote-config-compat",Jb="@firebase/storage",jb="@firebase/storage-compat",Xb="@firebase/firestore",Yb="@firebase/ai",Zb="@firebase/firestore-compat",Qb="firebase",eE="12.11.0";/**
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
 */const jo="[DEFAULT]",tE={[Jo]:"fire-core",[Cb]:"fire-core-compat",[Pb]:"fire-analytics",[Ob]:"fire-analytics-compat",[xb]:"fire-app-check",[Lb]:"fire-app-check-compat",[Nb]:"fire-auth",[Db]:"fire-auth-compat",[kb]:"fire-rtdb",[Mb]:"fire-data-connect",[Ub]:"fire-rtdb-compat",[Fb]:"fire-fn",[Bb]:"fire-fn-compat",[Wb]:"fire-iid",[Hb]:"fire-iid-compat",[$b]:"fire-fcm",[qb]:"fire-fcm-compat",[zb]:"fire-perf",[Vb]:"fire-perf-compat",[Gb]:"fire-rc",[Kb]:"fire-rc-compat",[Jb]:"fire-gcs",[jb]:"fire-gcs-compat",[Xb]:"fire-fst",[Zb]:"fire-fst-compat",[Yb]:"fire-vertex","fire-js":"fire-js",[Qb]:"fire-js-all"};/**
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
 */const Vi=new Map,nE=new Map,Xo=new Map;function Tl(i,t){try{i.container.addComponent(t)}catch(r){Dt.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,r)}}function Ir(i){const t=i.name;if(Xo.has(t))return Dt.debug(`There were multiple attempts to register component ${t}.`),!1;Xo.set(t,i);for(const r of Vi.values())Tl(r,i);for(const r of nE.values())Tl(r,i);return!0}function If(i,t){const r=i.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),i.container.getProvider(t)}function ot(i){return i==null?!1:i.settings!==void 0}/**
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
 */const rE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qt=new Pr("app","Firebase",rE);/**
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
 */class iE{constructor(t,r,o){this._isDeleted=!1,this._options={...t},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qt.create("app-deleted",{appName:this._name})}}/**
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
 */const xr=eE;function Tf(i,t={}){let r=i;typeof t!="object"&&(t={name:t});const o={name:jo,automaticDataCollectionEnabled:!0,...t},a=o.name;if(typeof a!="string"||!a)throw Qt.create("bad-app-name",{appName:String(a)});if(r||(r=wf()),!r)throw Qt.create("no-options");const l=Vi.get(a);if(l){if(zn(r,l.options)&&zn(o,l.config))return l;throw Qt.create("duplicate-app",{appName:a})}const f=new lb(a);for(const y of Xo.values())f.addComponent(y);const g=new iE(r,o,f);return Vi.set(a,g),g}function sE(i=jo){const t=Vi.get(i);if(!t&&i===jo&&wf())return Tf();if(!t)throw Qt.create("no-app",{appName:i});return t}function Bn(i,t,r){let o=tE[i]??i;r&&(o+=`-${r}`);const a=o.match(/\s|\//),l=t.match(/\s|\//);if(a||l){const f=[`Unable to register library "${o}" with version "${t}":`];a&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&l&&f.push("and"),l&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Dt.warn(f.join(" "));return}Ir(new Vn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
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
 */const oE="firebase-heartbeat-database",aE=1,Tr="firebase-heartbeat-store";let Uo=null;function Sf(){return Uo||(Uo=Ib(oE,aE,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(Tr)}catch(r){console.warn(r)}}}}).catch(i=>{throw Qt.create("idb-open",{originalErrorMessage:i.message})})),Uo}async function uE(i){try{const r=(await Sf()).transaction(Tr),o=await r.objectStore(Tr).get(Af(i));return await r.done,o}catch(t){if(t instanceof tn)Dt.warn(t.message);else{const r=Qt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Dt.warn(r.message)}}}async function Sl(i,t){try{const o=(await Sf()).transaction(Tr,"readwrite");await o.objectStore(Tr).put(t,Af(i)),await o.done}catch(r){if(r instanceof tn)Dt.warn(r.message);else{const o=Qt.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});Dt.warn(o.message)}}}function Af(i){return`${i.name}!${i.options.appId}`}/**
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
 */const cE=1024,lE=30;class fE{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new dE(r),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var t,r;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Al();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)==null?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(f=>f.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>lE){const f=pE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){Dt.warn(o)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Al(),{heartbeatsToSend:o,unsentEntries:a}=hE(this._heartbeatsCache.heartbeats),l=mf(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=r,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(r){return Dt.warn(r),""}}}function Al(){return new Date().toISOString().substring(0,10)}function hE(i,t=cE){const r=[];let o=i.slice();for(const a of i){const l=r.find(f=>f.agent===a.agent);if(l){if(l.dates.push(a.date),Rl(r)>t){l.dates.pop();break}}else if(r.push({agent:a.agent,dates:[a.date]}),Rl(r)>t){r.pop();break}o=o.slice(1)}return{heartbeatsToSend:r,unsentEntries:o}}class dE{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y0()?Z0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await uE(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const o=await this.read();return Sl(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const o=await this.read();return Sl(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Rl(i){return mf(JSON.stringify({version:2,heartbeats:i})).length}function pE(i){if(i.length===0)return-1;let t=0,r=i[0].date;for(let o=1;o<i.length;o++)i[o].date<r&&(r=i[o].date,t=o);return t}/**
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
 */function gE(i){Ir(new Vn("platform-logger",t=>new Ab(t),"PRIVATE")),Ir(new Vn("heartbeat",t=>new fE(t),"PRIVATE")),Bn(Jo,Il,i),Bn(Jo,Il,"esm2020"),Bn("fire-js","")}gE("");var mE="firebase",_E="12.11.0";/**
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
 */Bn(mE,_E,"app");function Rf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wE=Rf,Cf=new Pr("auth","Firebase",Rf());/**
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
 */const Gi=new vf("@firebase/auth");function yE(i,...t){Gi.logLevel<=ne.WARN&&Gi.warn(`Auth (${xr}): ${i}`,...t)}function Fi(i,...t){Gi.logLevel<=ne.ERROR&&Gi.error(`Auth (${xr}): ${i}`,...t)}/**
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
 */function wt(i,...t){throw ga(i,...t)}function ct(i,...t){return ga(i,...t)}function pa(i,t,r){const o={...wE(),[t]:r};return new Pr("auth","Firebase",o).create(t,{appName:i.name})}function en(i){return pa(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Of(i,t,r){const o=r;if(!(t instanceof o))throw o.name!==t.constructor.name&&wt(i,"argument-error"),pa(i,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ga(i,...t){if(typeof i!="string"){const r=t[0],o=[...t.slice(1)];return o[0]&&(o[0].appName=i.name),i._errorFactory.create(r,...o)}return Cf.create(i,...t)}function B(i,t,...r){if(!i)throw ga(t,...r)}function xt(i){const t="INTERNAL ASSERTION FAILED: "+i;throw Fi(t),new Error(t)}function kt(i,t){i||xt(t)}/**
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
 */function Yo(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function vE(){return Cl()==="http:"||Cl()==="https:"}function Cl(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
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
 */function bE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vE()||J0()||"connection"in navigator)?navigator.onLine:!0}function EE(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Nr{constructor(t,r){this.shortDelay=t,this.longDelay=r,kt(r>t,"Short delay should be less than long delay!"),this.isMobile=G0()||j0()}get(){return bE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ma(i,t){kt(i.emulator,"Emulator should always be set here");const{url:r}=i.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
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
 */class Pf{static initialize(t,r,o){this.fetchImpl=t,r&&(this.headersImpl=r),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const IE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const TE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],SE=new Nr(3e4,6e4);function _a(i,t){return i.tenantId&&!t.tenantId?{...t,tenantId:i.tenantId}:t}async function Jn(i,t,r,o,a={}){return Lf(i,a,async()=>{let l={},f={};o&&(t==="GET"?f=o:l={body:JSON.stringify(o)});const g=Lr({key:i.config.apiKey,...f}).slice(1),y=await i._getAdditionalHeaders();y["Content-Type"]="application/json",i.languageCode&&(y["X-Firebase-Locale"]=i.languageCode);const v={method:t,headers:y,...l};return K0()||(v.referrerPolicy="no-referrer"),i.emulatorConfig&&ha(i.emulatorConfig.host)&&(v.credentials="include"),Pf.fetch()(await xf(i,i.config.apiHost,r,g),v)})}async function Lf(i,t,r){i._canInitEmulator=!1;const o={...IE,...t};try{const a=new RE(i),l=await Promise.race([r(),a.promise]);a.clearNetworkTimeout();const f=await l.json();if("needConfirmation"in f)throw Ni(i,"account-exists-with-different-credential",f);if(l.ok&&!("errorMessage"in f))return f;{const g=l.ok?f.errorMessage:f.error.message,[y,v]=g.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ni(i,"credential-already-in-use",f);if(y==="EMAIL_EXISTS")throw Ni(i,"email-already-in-use",f);if(y==="USER_DISABLED")throw Ni(i,"user-disabled",f);const I=o[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw pa(i,I,v);wt(i,I)}}catch(a){if(a instanceof tn)throw a;wt(i,"network-request-failed",{message:String(a)})}}async function AE(i,t,r,o,a={}){const l=await Jn(i,t,r,o,a);return"mfaPendingCredential"in l&&wt(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function xf(i,t,r,o){const a=`${t}${r}?${o}`,l=i,f=l.config.emulator?ma(i.config,a):`${i.config.apiScheme}://${a}`;return TE.includes(r)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(f).toString():f}class RE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((r,o)=>{this.timer=setTimeout(()=>o(ct(this.auth,"network-request-failed")),SE.get())})}}function Ni(i,t,r){const o={appName:i.name};r.email&&(o.email=r.email),r.phoneNumber&&(o.phoneNumber=r.phoneNumber);const a=ct(i,t,o);return a.customData._tokenResponse=r,a}/**
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
 */async function CE(i,t){return Jn(i,"POST","/v1/accounts:delete",t)}async function Ki(i,t){return Jn(i,"POST","/v1/accounts:lookup",t)}/**
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
 */function Er(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function OE(i,t=!1){const r=nn(i),o=await r.getIdToken(t),a=wa(o);B(a&&a.exp&&a.auth_time&&a.iat,r.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,f=l==null?void 0:l.sign_in_provider;return{claims:a,token:o,authTime:Er(Fo(a.auth_time)),issuedAtTime:Er(Fo(a.iat)),expirationTime:Er(Fo(a.exp)),signInProvider:f||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Fo(i){return Number(i)*1e3}function wa(i){const[t,r,o]=i.split(".");if(t===void 0||r===void 0||o===void 0)return Fi("JWT malformed, contained fewer than 3 sections"),null;try{const a=_f(r);return a?JSON.parse(a):(Fi("Failed to decode base64 JWT payload"),null)}catch(a){return Fi("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Ol(i){const t=wa(i);return B(t,"internal-error"),B(typeof t.exp<"u","internal-error"),B(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Sr(i,t,r=!1){if(r)return t;try{return await t}catch(o){throw o instanceof tn&&PE(o)&&i.auth.currentUser===i&&await i.auth.signOut(),o}}function PE({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class LE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const r=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zo{constructor(t,r){this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Er(this.lastLoginAt),this.creationTime=Er(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ji(i){var O;const t=i.auth,r=await i.getIdToken(),o=await Sr(i,Ki(t,{idToken:r}));B(o==null?void 0:o.users.length,t,"internal-error");const a=o.users[0];i._notifyReloadListener(a);const l=(O=a.providerUserInfo)!=null&&O.length?Nf(a.providerUserInfo):[],f=NE(i.providerData,l),g=i.isAnonymous,y=!(i.email&&a.passwordHash)&&!(f!=null&&f.length),v=g?y:!1,I={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:f,metadata:new Zo(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(i,I)}async function xE(i){const t=nn(i);await Ji(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function NE(i,t){return[...i.filter(o=>!t.some(a=>a.providerId===o.providerId)),...t]}function Nf(i){return i.map(({providerId:t,...r})=>({providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}))}/**
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
 */async function DE(i,t){const r=await Lf(i,{},async()=>{const o=Lr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,f=await xf(i,a,"/v1/token",`key=${l}`),g=await i._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:g,body:o};return i.emulatorConfig&&ha(i.emulatorConfig.host)&&(y.credentials="include"),Pf.fetch()(f,y)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function kE(i,t){return Jn(i,"POST","/v2/accounts:revokeToken",_a(i,t))}/**
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
 */class Wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){B(t.idToken,"internal-error"),B(typeof t.idToken<"u","internal-error"),B(typeof t.refreshToken<"u","internal-error");const r="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ol(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,r)}updateFromIdToken(t){B(t.length!==0,"internal-error");const r=Ol(t);this.updateTokensAndExpiration(t,null,r)}async getToken(t,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,r){const{accessToken:o,refreshToken:a,expiresIn:l}=await DE(t,r);this.updateTokensAndExpiration(o,a,Number(l))}updateTokensAndExpiration(t,r,o){this.refreshToken=r||null,this.accessToken=t||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(t,r){const{refreshToken:o,accessToken:a,expirationTime:l}=r,f=new Wn;return o&&(B(typeof o=="string","internal-error",{appName:t}),f.refreshToken=o),a&&(B(typeof a=="string","internal-error",{appName:t}),f.accessToken=a),l&&(B(typeof l=="number","internal-error",{appName:t}),f.expirationTime=l),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Wn,this.toJSON())}_performRefresh(){return xt("not implemented")}}/**
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
 */function Kt(i,t){B(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class at{constructor({uid:t,auth:r,stsTokenManager:o,...a}){this.providerId="firebase",this.proactiveRefresh=new LE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Zo(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(t){const r=await Sr(this,this.stsTokenManager.getToken(this.auth,t));return B(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(t){return OE(this,t)}reload(){return xE(this)}_assign(t){this!==t&&(B(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(r=>({...r})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const r=new at({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return r.metadata._copy(this.metadata),r}_onReload(t){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,r=!1){let o=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),o=!0),r&&await Ji(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ot(this.auth.app))return Promise.reject(en(this.auth));const t=await this.getIdToken();return await Sr(this,CE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,r){const o=r.displayName??void 0,a=r.email??void 0,l=r.phoneNumber??void 0,f=r.photoURL??void 0,g=r.tenantId??void 0,y=r._redirectEventId??void 0,v=r.createdAt??void 0,I=r.lastLoginAt??void 0,{uid:O,emailVerified:D,isAnonymous:G,providerData:R,stsTokenManager:k}=r;B(O&&k,t,"internal-error");const P=Wn.fromJSON(this.name,k);B(typeof O=="string",t,"internal-error"),Kt(o,t.name),Kt(a,t.name),B(typeof D=="boolean",t,"internal-error"),B(typeof G=="boolean",t,"internal-error"),Kt(l,t.name),Kt(f,t.name),Kt(g,t.name),Kt(y,t.name),Kt(v,t.name),Kt(I,t.name);const X=new at({uid:O,auth:t,email:a,emailVerified:D,displayName:o,isAnonymous:G,photoURL:f,phoneNumber:l,tenantId:g,stsTokenManager:P,createdAt:v,lastLoginAt:I});return R&&Array.isArray(R)&&(X.providerData=R.map(ye=>({...ye}))),y&&(X._redirectEventId=y),X}static async _fromIdTokenResponse(t,r,o=!1){const a=new Wn;a.updateFromServerResponse(r);const l=new at({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:o});return await Ji(l),l}static async _fromGetAccountInfoResponse(t,r,o){const a=r.users[0];B(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?Nf(a.providerUserInfo):[],f=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),g=new Wn;g.updateFromIdToken(o);const y=new at({uid:a.localId,auth:t,stsTokenManager:g,isAnonymous:f}),v={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Zo(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(y,v),y}}/**
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
 */const Pl=new Map;function Nt(i){kt(i instanceof Function,"Expected a class definition");let t=Pl.get(i);return t?(kt(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,Pl.set(i,t),t)}/**
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
 */class Df{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,r){this.storage[t]=r}async _get(t){const r=this.storage[t];return r===void 0?null:r}async _remove(t){delete this.storage[t]}_addListener(t,r){}_removeListener(t,r){}}Df.type="NONE";const Ll=Df;/**
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
 */function Bi(i,t,r){return`firebase:${i}:${t}:${r}`}class Hn{constructor(t,r,o){this.persistence=t,this.auth=r,this.userKey=o;const{config:a,name:l}=this.auth;this.fullUserKey=Bi(this.userKey,a.apiKey,l),this.fullPersistenceKey=Bi("persistence",a.apiKey,l),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const r=await Ki(this.auth,{idToken:t}).catch(()=>{});return r?at._fromGetAccountInfoResponse(this.auth,r,t):null}return at._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,r,o="authUser"){if(!r.length)return new Hn(Nt(Ll),t,o);const a=(await Promise.all(r.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let l=a[0]||Nt(Ll);const f=Bi(o,t.config.apiKey,t.name);let g=null;for(const v of r)try{const I=await v._get(f);if(I){let O;if(typeof I=="string"){const D=await Ki(t,{idToken:I}).catch(()=>{});if(!D)break;O=await at._fromGetAccountInfoResponse(t,D,I)}else O=at._fromJSON(t,I);v!==l&&(g=O),l=v;break}}catch{}const y=a.filter(v=>v._shouldAllowMigration);return!l._shouldAllowMigration||!y.length?new Hn(l,t,o):(l=y[0],g&&await l._set(f,g.toJSON()),await Promise.all(r.map(async v=>{if(v!==l)try{await v._remove(f)}catch{}})),new Hn(l,t,o))}}/**
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
 */function xl(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ff(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(kf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Wf(t))return"Blackberry";if(Hf(t))return"Webos";if(Mf(t))return"Safari";if((t.includes("chrome/")||Uf(t))&&!t.includes("edge/"))return"Chrome";if(Bf(t))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=i.match(r);if((o==null?void 0:o.length)===2)return o[1]}return"Other"}function kf(i=Le()){return/firefox\//i.test(i)}function Mf(i=Le()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Uf(i=Le()){return/crios\//i.test(i)}function Ff(i=Le()){return/iemobile/i.test(i)}function Bf(i=Le()){return/android/i.test(i)}function Wf(i=Le()){return/blackberry/i.test(i)}function Hf(i=Le()){return/webos/i.test(i)}function ya(i=Le()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function ME(i=Le()){var t;return ya(i)&&!!((t=window.navigator)!=null&&t.standalone)}function UE(){return X0()&&document.documentMode===10}function $f(i=Le()){return ya(i)||Bf(i)||Hf(i)||Wf(i)||/windows phone/i.test(i)||Ff(i)}/**
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
 */function qf(i,t=[]){let r;switch(i){case"Browser":r=xl(Le());break;case"Worker":r=`${xl(Le())}-${i}`;break;default:r=i}const o=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${xr}/${o}`}/**
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
 */class FE{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,r){const o=l=>new Promise((f,g)=>{try{const y=t(l);f(y)}catch(y){g(y)}});o.onAbort=r,this.queue.push(o);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const r=[];try{for(const o of this.queue)await o(t),o.onAbort&&r.push(o.onAbort)}catch(o){r.reverse();for(const a of r)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message})}}}/**
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
 */async function BE(i,t={}){return Jn(i,"GET","/v2/passwordPolicy",_a(i,t))}/**
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
 */const WE=6;class HE{constructor(t){var o;const r=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??WE,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((o=t.allowedNonAlphanumericCharacters)==null?void 0:o.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const r={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,r),this.validatePasswordCharacterOptions(t,r),r.isValid&&(r.isValid=r.meetsMinPasswordLength??!0),r.isValid&&(r.isValid=r.meetsMaxPasswordLength??!0),r.isValid&&(r.isValid=r.containsLowercaseLetter??!0),r.isValid&&(r.isValid=r.containsUppercaseLetter??!0),r.isValid&&(r.isValid=r.containsNumericCharacter??!0),r.isValid&&(r.isValid=r.containsNonAlphanumericCharacter??!0),r}validatePasswordLengthOptions(t,r){const o=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;o&&(r.meetsMinPasswordLength=t.length>=o),a&&(r.meetsMaxPasswordLength=t.length<=a)}validatePasswordCharacterOptions(t,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let o;for(let a=0;a<t.length;a++)o=t.charAt(a),this.updatePasswordCharacterOptionsStatuses(r,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(t,r,o,a,l){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=l))}}/**
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
 */class $E{constructor(t,r,o,a){this.app=t,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=o,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nl(this),this.idTokenSubscription=new Nl(this),this.beforeStateQueue=new FE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(t,r){return r&&(this._popupRedirectResolver=Nt(r)),this._initializationPromise=this.queue(async()=>{var o,a,l;if(!this._deleted&&(this.persistenceManager=await Hn.create(this,t),(o=this._resolvePersistenceManagerAvailable)==null||o.call(this),!this._deleted)){if((a=this._popupRedirectResolver)!=null&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((l=this.currentUser)==null?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const r=await Ki(this,{idToken:t}),o=await at._fromGetAccountInfoResponse(this,r,t);await this.directlySetCurrentUser(o)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var l;if(ot(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(g,g))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,a=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(l=this.redirectUser)==null?void 0:l._redirectEventId,g=o==null?void 0:o._redirectEventId,y=await this.tryRedirectSignIn(t);(!f||f===g)&&(y!=null&&y.user)&&(o=y.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(t){try{await Ji(t)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=EE()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(ot(this.app))return Promise.reject(en(this));const r=t?nn(t):null;return r&&B(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(t,r=!1){if(!this._deleted)return t&&B(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return ot(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return ot(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await BE(this),r=new HE(t);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Pr("auth","Firebase",t())}onAuthStateChanged(t,r,o){return this.registerStateListener(this.authStateSubscription,t,r,o)}beforeAuthStateChanged(t,r){return this.beforeStateQueue.pushCallback(t,r)}onIdTokenChanged(t,r,o){return this.registerStateListener(this.idTokenSubscription,t,r,o)}authStateReady(){return new Promise((t,r)=>{if(this.currentUser)t();else{const o=this.onAuthStateChanged(()=>{o(),t()},r)}})}async revokeAccessToken(t){if(this.currentUser){const r=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:r};this.tenantId!=null&&(o.tenantId=this.tenantId),await kE(this,o)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,r){const o=await this.getOrInitRedirectPersistenceManager(r);return t===null?o.removeCurrentUser():o.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const r=t&&Nt(t)||this._popupRedirectResolver;B(r,this,"argument-error"),this.redirectPersistenceManager=await Hn.create(this,[Nt(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var r,o;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)==null?void 0:r._redirectEventId)===t?this._currentUser:((o=this.redirectUser)==null?void 0:o._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((r=this.currentUser)==null?void 0:r.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,r,o,a){if(this._deleted)return()=>{};const l=typeof r=="function"?r:r.next.bind(r);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(g,this,"internal-error"),g.then(()=>{f||l(this.currentUser)}),typeof r=="function"){const y=t.addObserver(r,o,a);return()=>{f=!0,y()}}else{const y=t.addObserver(r);return()=>{f=!0,y()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=qf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var a;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((a=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:a.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var r;if(ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((r=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getToken());return t!=null&&t.error&&yE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function jn(i){return nn(i)}class Nl{constructor(t){this.auth=t,this.observer=null,this.addObserver=rb(r=>this.observer=r)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let va={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qE(i){va=i}function zE(i){return va.loadJS(i)}function VE(){return va.gapiScript}function GE(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function KE(i,t){const r=If(i,"auth");if(r.isInitialized()){const a=r.getImmediate(),l=r.getOptions();if(zn(l,t??{}))return a;wt(a,"already-initialized")}return r.initialize({options:t})}function JE(i,t){const r=(t==null?void 0:t.persistence)||[],o=(Array.isArray(r)?r:[r]).map(Nt);t!=null&&t.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(o,t==null?void 0:t.popupRedirectResolver)}function jE(i,t,r){const o=jn(i);B(/^https?:\/\//.test(t),o,"invalid-emulator-scheme");const a=!!(r!=null&&r.disableWarnings),l=zf(t),{host:f,port:g}=XE(t),y=g===null?"":`:${g}`,v={url:`${l}//${f}${y}/`},I=Object.freeze({host:f,port:g,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!o._canInitEmulator){B(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),B(zn(v,o.config.emulator)&&zn(I,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=v,o.emulatorConfig=I,o.settings.appVerificationDisabledForTesting=!0,ha(f)?ob(`${l}//${f}${y}`):a||YE()}function zf(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function XE(i){const t=zf(i),r=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!r)return{host:"",port:null};const o=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(o);if(a){const l=a[1];return{host:l,port:Dl(o.substr(l.length+1))}}else{const[l,f]=o.split(":");return{host:l,port:Dl(f)}}}function Dl(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function YE(){function i(){const t=document.createElement("p"),r=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Vf{constructor(t,r){this.providerId=t,this.signInMethod=r}toJSON(){return xt("not implemented")}_getIdTokenResponse(t){return xt("not implemented")}_linkToIdToken(t,r){return xt("not implemented")}_getReauthenticationResolver(t){return xt("not implemented")}}/**
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
 */async function $n(i,t){return AE(i,"POST","/v1/accounts:signInWithIdp",_a(i,t))}/**
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
 */const ZE="http://localhost";class wn extends Vf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const r=new wn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):wt("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t,{providerId:o,signInMethod:a,...l}=r;if(!o||!a)return null;const f=new wn(o,a);return f.idToken=l.idToken||void 0,f.accessToken=l.accessToken||void 0,f.secret=l.secret,f.nonce=l.nonce,f.pendingToken=l.pendingToken||null,f}_getIdTokenResponse(t){const r=this.buildRequest();return $n(t,r)}_linkToIdToken(t,r){const o=this.buildRequest();return o.idToken=r,$n(t,o)}_getReauthenticationResolver(t){const r=this.buildRequest();return r.autoCreate=!1,$n(t,r)}buildRequest(){const t={requestUri:ZE,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=Lr(r)}return t}}/**
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
 */class is{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Dr extends is{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jt extends Dr{constructor(){super("facebook.com")}static credential(t){return wn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Jt.credentialFromTaggedObject(t)}static credentialFromError(t){return Jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Jt.credential(t.oauthAccessToken)}catch{return null}}}Jt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jt.PROVIDER_ID="facebook.com";/**
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
 */class Lt extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,r){return wn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})}static credentialFromResult(t){return Lt.credentialFromTaggedObject(t)}static credentialFromError(t){return Lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:o}=t;if(!r&&!o)return null;try{return Lt.credential(r,o)}catch{return null}}}Lt.GOOGLE_SIGN_IN_METHOD="google.com";Lt.PROVIDER_ID="google.com";/**
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
 */class jt extends Dr{constructor(){super("github.com")}static credential(t){return wn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jt.credential(t.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
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
 */class Xt extends Dr{constructor(){super("twitter.com")}static credential(t,r){return wn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:r,oauthTokenSecret:o}=t;if(!r||!o)return null;try{return Xt.credential(r,o)}catch{return null}}}Xt.TWITTER_SIGN_IN_METHOD="twitter.com";Xt.PROVIDER_ID="twitter.com";/**
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
 */class Gn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,r,o,a=!1){const l=await at._fromIdTokenResponse(t,o,a),f=kl(o);return new Gn({user:l,providerId:f,_tokenResponse:o,operationType:r})}static async _forOperation(t,r,o){await t._updateTokensIfNecessary(o,!0);const a=kl(o);return new Gn({user:t,providerId:a,_tokenResponse:o,operationType:r})}}function kl(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class ji extends tn{constructor(t,r,o,a){super(r.code,r.message),this.operationType=o,this.user=a,Object.setPrototypeOf(this,ji.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:r.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(t,r,o,a){return new ji(t,r,o,a)}}function Gf(i,t,r,o){return(t==="reauthenticate"?r._getReauthenticationResolver(i):r._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?ji._fromErrorAndOperation(i,l,t,o):l})}async function QE(i,t,r=!1){const o=await Sr(i,t._linkToIdToken(i.auth,await i.getIdToken()),r);return Gn._forOperation(i,"link",o)}/**
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
 */async function eI(i,t,r=!1){const{auth:o}=i;if(ot(o.app))return Promise.reject(en(o));const a="reauthenticate";try{const l=await Sr(i,Gf(o,a,t,i),r);B(l.idToken,o,"internal-error");const f=wa(l.idToken);B(f,o,"internal-error");const{sub:g}=f;return B(i.uid===g,o,"user-mismatch"),Gn._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&wt(o,"user-mismatch"),l}}/**
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
 */async function tI(i,t,r=!1){if(ot(i.app))return Promise.reject(en(i));const o="signIn",a=await Gf(i,o,t),l=await Gn._fromIdTokenResponse(i,o,a);return r||await i._updateCurrentUser(l.user),l}function nI(i,t,r,o){return nn(i).onIdTokenChanged(t,r,o)}function rI(i,t,r){return nn(i).beforeAuthStateChanged(t,r)}function Kf(i,t,r,o){return nn(i).onAuthStateChanged(t,r,o)}function iI(i){return nn(i).signOut()}const Xi="__sak";/**
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
 */class Jf{constructor(t,r){this.storageRetriever=t,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Xi,"1"),this.storage.removeItem(Xi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,r){return this.storage.setItem(t,JSON.stringify(r)),Promise.resolve()}_get(t){const r=this.storage.getItem(t);return Promise.resolve(r?JSON.parse(r):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const sI=1e3,oI=10;class jf extends Jf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,r)=>this.onStorageEvent(t,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$f(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const r of Object.keys(this.listeners)){const o=this.storage.getItem(r),a=this.localCache[r];o!==a&&t(r,a,o)}}onStorageEvent(t,r=!1){if(!t.key){this.forAllChangedKeys((f,g,y)=>{this.notifyListeners(f,y)});return}const o=t.key;r?this.detachListener():this.stopPolling();const a=()=>{const f=this.storage.getItem(o);!r&&this.localCache[o]===f||this.notifyListeners(o,f)},l=this.storage.getItem(o);UE()&&l!==t.newValue&&t.newValue!==t.oldValue?setTimeout(a,oI):a()}notifyListeners(t,r){this.localCache[t]=r;const o=this.listeners[t];if(o)for(const a of Array.from(o))a(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,r,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:r,newValue:o}),!0)})},sI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,r){await super._set(t,r),this.localCache[t]=JSON.stringify(r)}async _get(t){const r=await super._get(t);return this.localCache[t]=JSON.stringify(r),r}async _remove(t){await super._remove(t),delete this.localCache[t]}}jf.type="LOCAL";const aI=jf;/**
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
 */class Xf extends Jf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,r){}_removeListener(t,r){}}Xf.type="SESSION";const Yf=Xf;/**
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
 */function uI(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class ss{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const r=this.receivers.find(a=>a.isListeningto(t));if(r)return r;const o=new ss(t);return this.receivers.push(o),o}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const r=t,{eventId:o,eventType:a,data:l}=r.data,f=this.handlersMap[a];if(!(f!=null&&f.size))return;r.ports[0].postMessage({status:"ack",eventId:o,eventType:a});const g=Array.from(f).map(async v=>v(r.origin,l)),y=await uI(g);r.ports[0].postMessage({status:"done",eventId:o,eventType:a,response:y})}_subscribe(t,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(r)}_unsubscribe(t,r){this.handlersMap[t]&&r&&this.handlersMap[t].delete(r),(!r||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ss.receivers=[];/**
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
 */function ba(i="",t=10){let r="";for(let o=0;o<t;o++)r+=Math.floor(Math.random()*10);return i+r}/**
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
 */class cI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,r,o=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,f;return new Promise((g,y)=>{const v=ba("",20);a.port1.start();const I=setTimeout(()=>{y(new Error("unsupported_event"))},o);f={messageChannel:a,onMessage(O){const D=O;if(D.data.eventId===v)switch(D.data.status){case"ack":clearTimeout(I),l=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),g(D.data.response);break;default:clearTimeout(I),clearTimeout(l),y(new Error("invalid_response"));break}}},this.handlers.add(f),a.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:v,data:r},[a.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function _t(){return window}function lI(i){_t().location.href=i}/**
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
 */function Zf(){return typeof _t().WorkerGlobalScope<"u"&&typeof _t().importScripts=="function"}async function fI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hI(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function dI(){return Zf()?self:null}/**
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
 */const Qf="firebaseLocalStorageDb",pI=1,Yi="firebaseLocalStorage",eh="fbase_key";class kr{constructor(t){this.request=t}toPromise(){return new Promise((t,r)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function os(i,t){return i.transaction([Yi],t?"readwrite":"readonly").objectStore(Yi)}function gI(){const i=indexedDB.deleteDatabase(Qf);return new kr(i).toPromise()}function Qo(){const i=indexedDB.open(Qf,pI);return new Promise((t,r)=>{i.addEventListener("error",()=>{r(i.error)}),i.addEventListener("upgradeneeded",()=>{const o=i.result;try{o.createObjectStore(Yi,{keyPath:eh})}catch(a){r(a)}}),i.addEventListener("success",async()=>{const o=i.result;o.objectStoreNames.contains(Yi)?t(o):(o.close(),await gI(),t(await Qo()))})})}async function Ml(i,t,r){const o=os(i,!0).put({[eh]:t,value:r});return new kr(o).toPromise()}async function mI(i,t){const r=os(i,!1).get(t),o=await new kr(r).toPromise();return o===void 0?null:o.value}function Ul(i,t){const r=os(i,!0).delete(t);return new kr(r).toPromise()}const _I=800,wI=3;class th{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qo(),this.db)}async _withRetries(t){let r=0;for(;;)try{const o=await this._openDb();return await t(o)}catch(o){if(r++>wI)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ss._getInstance(dI()),this.receiver._subscribe("keyChanged",async(t,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(t,r)=>["keyChanged"])}async initializeSender(){var r,o;if(this.activeServiceWorker=await fI(),!this.activeServiceWorker)return;this.sender=new cI(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(r=t[0])!=null&&r.fulfilled&&(o=t[0])!=null&&o.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||hI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Qo();return await Ml(t,Xi,"1"),await Ul(t,Xi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,r){return this._withPendingWrite(async()=>(await this._withRetries(o=>Ml(o,t,r)),this.localCache[t]=r,this.notifyServiceWorker(t)))}async _get(t){const r=await this._withRetries(o=>mI(o,t));return this.localCache[t]=r,r}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ul(r,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(a=>{const l=os(a,!1).getAll();return new kr(l).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const r=[],o=new Set;if(t.length!==0)for(const{fbase_key:a,value:l}of t)o.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),r.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!o.has(a)&&(this.notifyListeners(a,null),r.push(a));return r}notifyListeners(t,r){this.localCache[t]=r;const o=this.listeners[t];if(o)for(const a of Array.from(o))a(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}th.type="LOCAL";const yI=th;new Nr(3e4,6e4);/**
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
 */function Ea(i,t){return t?Nt(t):(B(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Ia extends Vf{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $n(t,this._buildIdpRequest())}_linkToIdToken(t,r){return $n(t,this._buildIdpRequest(r))}_getReauthenticationResolver(t){return $n(t,this._buildIdpRequest())}_buildIdpRequest(t){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r}}function vI(i){return tI(i.auth,new Ia(i),i.bypassAuthState)}function bI(i){const{auth:t,user:r}=i;return B(r,t,"internal-error"),eI(r,new Ia(i),i.bypassAuthState)}async function EI(i){const{auth:t,user:r}=i;return B(r,t,"internal-error"),QE(r,new Ia(i),i.bypassAuthState)}/**
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
 */class nh{constructor(t,r,o,a,l=!1){this.auth=t,this.resolver=o,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(t,r)=>{this.pendingPromise={resolve:t,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(t){const{urlResponse:r,sessionId:o,postBody:a,tenantId:l,error:f,type:g}=t;if(f){this.reject(f);return}const y={auth:this.auth,requestUri:r,sessionId:o,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(y))}catch(v){this.reject(v)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return vI;case"linkViaPopup":case"linkViaRedirect":return EI;case"reauthViaPopup":case"reauthViaRedirect":return bI;default:wt(this.auth,"internal-error")}}resolve(t){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const II=new Nr(2e3,1e4);async function TI(i,t,r){if(ot(i.app))return Promise.reject(ct(i,"operation-not-supported-in-this-environment"));const o=jn(i);Of(i,t,is);const a=Ea(o,r);return new mn(o,"signInViaPopup",t,a).executeNotNull()}class mn extends nh{constructor(t,r,o,a,l){super(t,r,a,l),this.provider=o,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return B(t,this.auth,"internal-error"),t}async onExecution(){kt(this.filter.length===1,"Popup operations only handle one event");const t=ba();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var r,o;if((o=(r=this.authWindow)==null?void 0:r.window)!=null&&o.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,II.get())};t()}}mn.currentPopupAction=null;/**
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
 */const SI="pendingRedirect",Wi=new Map;class AI extends nh{constructor(t,r,o=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,o),this.eventId=null}async execute(){let t=Wi.get(this.auth._key());if(!t){try{const o=await RI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(o)}catch(r){t=()=>Promise.reject(r)}Wi.set(this.auth._key(),t)}return this.bypassAuthState||Wi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const r=await this.auth._redirectUserForId(t.eventId);if(r)return this.user=r,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RI(i,t){const r=ih(t),o=rh(i);if(!await o._isAvailable())return!1;const a=await o._get(r)==="true";return await o._remove(r),a}async function CI(i,t){return rh(i)._set(ih(t),"true")}function OI(i,t){Wi.set(i._key(),t)}function rh(i){return Nt(i._redirectPersistence)}function ih(i){return Bi(SI,i.config.apiKey,i.name)}/**
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
 */function PI(i,t,r){return LI(i,t,r)}async function LI(i,t,r){if(ot(i.app))return Promise.reject(en(i));const o=jn(i);Of(i,t,is),await o._initializationPromise;const a=Ea(o,r);return await CI(a,o),a._openRedirect(o,t,"signInViaRedirect")}async function xI(i,t){return await jn(i)._initializationPromise,sh(i,t,!1)}async function sh(i,t,r=!1){if(ot(i.app))return Promise.reject(en(i));const o=jn(i),a=Ea(o,t),f=await new AI(o,a,r).execute();return f&&!r&&(delete f.user._redirectEventId,await o._persistUserIfCurrent(f.user),await o._setRedirectUser(null,t)),f}/**
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
 */const NI=10*60*1e3;class DI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let r=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(t,o)&&(r=!0,this.sendToConsumer(t,o),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!kI(t)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=t,r=!0)),r}sendToConsumer(t,r){var o;if(t.error&&!oh(t)){const a=((o=t.error.code)==null?void 0:o.split("auth/")[1])||"internal-error";r.onError(ct(this.auth,a))}else r.onAuthEvent(t)}isEventForConsumer(t,r){const o=r.eventId===null||!!t.eventId&&t.eventId===r.eventId;return r.filter.includes(t.type)&&o}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=NI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fl(t))}saveEventToCache(t){this.cachedEventUids.add(Fl(t)),this.lastProcessedEventTime=Date.now()}}function Fl(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function oh({type:i,error:t}){return i==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function kI(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oh(i);default:return!1}}/**
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
 */async function MI(i,t={}){return Jn(i,"GET","/v1/projects",t)}/**
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
 */const UI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FI=/^https?/;async function BI(i){if(i.config.emulator)return;const{authorizedDomains:t}=await MI(i);for(const r of t)try{if(WI(r))return}catch{}wt(i,"unauthorized-domain")}function WI(i){const t=Yo(),{protocol:r,hostname:o}=new URL(t);if(i.startsWith("chrome-extension://")){const f=new URL(i);return f.hostname===""&&o===""?r==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):r==="chrome-extension:"&&f.hostname===o}if(!FI.test(r))return!1;if(UI.test(i))return o===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(o)}/**
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
 */const HI=new Nr(3e4,6e4);function Bl(){const i=_t().___jsl;if(i!=null&&i.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let r=0;r<i.CP.length;r++)i.CP[r]=null}}function $I(i){return new Promise((t,r)=>{var a,l,f;function o(){Bl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Bl(),r(ct(i,"network-request-failed"))},timeout:HI.get()})}if((l=(a=_t().gapi)==null?void 0:a.iframes)!=null&&l.Iframe)t(gapi.iframes.getContext());else if((f=_t().gapi)!=null&&f.load)o();else{const g=GE("iframefcb");return _t()[g]=()=>{gapi.load?o():r(ct(i,"network-request-failed"))},zE(`${VE()}?onload=${g}`).catch(y=>r(y))}}).catch(t=>{throw Hi=null,t})}let Hi=null;function qI(i){return Hi=Hi||$I(i),Hi}/**
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
 */const zI=new Nr(5e3,15e3),VI="__/auth/iframe",GI="emulator/auth/iframe",KI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jI(i){const t=i.config;B(t.authDomain,i,"auth-domain-config-required");const r=t.emulator?ma(t,GI):`https://${i.config.authDomain}/${VI}`,o={apiKey:t.apiKey,appName:i.name,v:xr},a=JI.get(i.config.apiHost);a&&(o.eid=a);const l=i._getFrameworks();return l.length&&(o.fw=l.join(",")),`${r}?${Lr(o).slice(1)}`}async function XI(i){const t=await qI(i),r=_t().gapi;return B(r,i,"internal-error"),t.open({where:document.body,url:jI(i),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KI,dontclear:!0},o=>new Promise(async(a,l)=>{await o.restyle({setHideOnLeave:!1});const f=ct(i,"network-request-failed"),g=_t().setTimeout(()=>{l(f)},zI.get());function y(){_t().clearTimeout(g),a(o)}o.ping(y).then(y,()=>{l(f)})}))}/**
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
 */const YI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZI=500,QI=600,eT="_blank",tT="http://localhost";class Wl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nT(i,t,r,o=ZI,a=QI){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),f=Math.max((window.screen.availWidth-o)/2,0).toString();let g="";const y={...YI,width:o.toString(),height:a.toString(),top:l,left:f},v=Le().toLowerCase();r&&(g=Uf(v)?eT:r),kf(v)&&(t=t||tT,y.scrollbars="yes");const I=Object.entries(y).reduce((D,[G,R])=>`${D}${G}=${R},`,"");if(ME(v)&&g!=="_self")return rT(t||"",g),new Wl(null);const O=window.open(t||"",g,I);B(O,i,"popup-blocked");try{O.focus()}catch{}return new Wl(O)}function rT(i,t){const r=document.createElement("a");r.href=i,r.target=t;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(o)}/**
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
 */const iT="__/auth/handler",sT="emulator/auth/handler",oT=encodeURIComponent("fac");async function Hl(i,t,r,o,a,l){B(i.config.authDomain,i,"auth-domain-config-required"),B(i.config.apiKey,i,"invalid-api-key");const f={apiKey:i.config.apiKey,appName:i.name,authType:r,redirectUrl:o,v:xr,eventId:a};if(t instanceof is){t.setDefaultLanguage(i.languageCode),f.providerId=t.providerId||"",nb(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[I,O]of Object.entries(l||{}))f[I]=O}if(t instanceof Dr){const I=t.getScopes().filter(O=>O!=="");I.length>0&&(f.scopes=I.join(","))}i.tenantId&&(f.tid=i.tenantId);const g=f;for(const I of Object.keys(g))g[I]===void 0&&delete g[I];const y=await i._getAppCheckToken(),v=y?`#${oT}=${encodeURIComponent(y)}`:"";return`${aT(i)}?${Lr(g).slice(1)}${v}`}function aT({config:i}){return i.emulator?ma(i,sT):`https://${i.authDomain}/${iT}`}/**
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
 */const Bo="webStorageSupport";class uT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yf,this._completeRedirectFn=sh,this._overrideRedirectResult=OI}async _openPopup(t,r,o,a){var f;kt((f=this.eventManagers[t._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const l=await Hl(t,r,o,Yo(),a);return nT(t,l,ba())}async _openRedirect(t,r,o,a){await this._originValidation(t);const l=await Hl(t,r,o,Yo(),a);return lI(l),new Promise(()=>{})}_initialize(t){const r=t._key();if(this.eventManagers[r]){const{manager:a,promise:l}=this.eventManagers[r];return a?Promise.resolve(a):(kt(l,"If manager is not set, promise should be"),l)}const o=this.initAndGetManager(t);return this.eventManagers[r]={promise:o},o.catch(()=>{delete this.eventManagers[r]}),o}async initAndGetManager(t){const r=await XI(t),o=new DI(t);return r.register("authEvent",a=>(B(a==null?void 0:a.authEvent,t,"invalid-auth-event"),{status:o.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:o},this.iframes[t._key()]=r,o}_isIframeWebStorageSupported(t,r){this.iframes[t._key()].send(Bo,{type:Bo},a=>{var f;const l=(f=a==null?void 0:a[0])==null?void 0:f[Bo];l!==void 0&&r(!!l),wt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const r=t._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=BI(t)),this.originValidationPromises[r]}get _shouldInitProactively(){return $f()||Mf()||ya()}}const cT=uT;var $l="@firebase/auth",ql="1.12.2";/**
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
 */class lT{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const r=this.auth.onIdTokenChanged(o=>{t((o==null?void 0:o.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,r),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const r=this.internalListeners.get(t);r&&(this.internalListeners.delete(t),r(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fT(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hT(i){Ir(new Vn("auth",(t,{options:r})=>{const o=t.getProvider("app").getImmediate(),a=t.getProvider("heartbeat"),l=t.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=o.options;B(f&&!f.includes(":"),"invalid-api-key",{appName:o.name});const y={apiKey:f,authDomain:g,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qf(i)},v=new $E(o,a,l,y);return JE(v,r),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,r,o)=>{t.getProvider("auth-internal").initialize()})),Ir(new Vn("auth-internal",t=>{const r=jn(t.getProvider("auth").getImmediate());return(o=>new lT(o))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn($l,ql,fT(i)),Bn($l,ql,"esm2020")}/**
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
 */const dT=5*60,pT=yf("authIdTokenMaxAge")||dT;let zl=null;const gT=i=>async t=>{const r=t&&await t.getIdTokenResult(),o=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(o&&o>pT)return;const a=r==null?void 0:r.token;zl!==a&&(zl=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function mT(i=sE()){const t=If(i,"auth");if(t.isInitialized())return t.getImmediate();const r=KE(i,{popupRedirectResolver:cT,persistence:[yI,aI,Yf]}),o=yf("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(o,location.origin);if(location.origin===l.origin){const f=gT(l.toString());rI(r,f,()=>f(r.currentUser)),nI(r,g=>f(g))}}const a=z0("auth");return a&&jE(r,`http://${a}`),r}function _T(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}qE({loadJS(i){return new Promise((t,r)=>{const o=document.createElement("script");o.setAttribute("src",i),o.onload=t,o.onerror=a=>{const l=ct("internal-error");l.customData=a,r(l)},o.type="text/javascript",o.charset="UTF-8",_T().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hT("Browser");const wT={apiKey:"AIzaSyBD0OkN3KM4nnT6lpk2Z3X-PX10AsnAwTo",authDomain:"tracnghiemdemo-a2567.firebaseapp.com",projectId:"tracnghiemdemo-a2567",storageBucket:"tracnghiemdemo-a2567.firebasestorage.app",messagingSenderId:"856722669723",appId:"1:856722669723:web:9f5795bec5949fa64c063e",measurementId:"G-SZRZ18TTM1"},yT=Tf(wT),Fn=mT(yT),ea=new Lt;ea.setCustomParameters({prompt:"select_account"});const yn={login:"/login",logout:"/logout",session:"/auth/session",localLogin:"/auth/login-local",localRegister:"/auth/register-local",googleSync:"/auth/google-sync"},_e={authMessage:"#authMessage",authTabLogin:"#authTabLogin",authTabRegister:"#authTabRegister",loginForm:"#loginForm",registerForm:"#registerForm",loginUsername:"#loginUsername",loginPassword:"#loginPassword",registerName:"#registerName",registerPassword:"#registerPassword",registerPasswordConfirmation:"#registerPasswordConfirmation",googleAuthBtn:"#googleAuthBtn",authEmail:"[data-auth-email]",logoutButton:"[data-auth-logout]",csrfToken:'meta[name="csrf-token"]'};function Pe(i){return document.querySelector(i)}function Yt(i){document.cookie=`quiz_firebase_uid=${encodeURIComponent(i)}; path=/; max-age=2592000; samesite=lax`}function ah(){document.cookie="quiz_firebase_uid=; path=/; max-age=0; samesite=lax"}function mt(i,t){const r=Pe(_e.authMessage);r&&(r.classList.remove("hidden","bg-red-50","text-red-700","bg-green-50","text-green-700"),i==="error"?r.classList.add("bg-red-50","text-red-700"):r.classList.add("bg-green-50","text-green-700"),r.textContent=t)}function br(){return new URL(window.location.href).searchParams.get("redirect")||"/"}function Wo(i){const t=Pe(_e.authTabLogin),r=Pe(_e.authTabRegister),o=Pe(_e.loginForm),a=Pe(_e.registerForm);if(!t||!r||!o||!a)return;const l=i==="login";o.classList.toggle("hidden",!l),a.classList.toggle("hidden",l),t.classList.toggle("bg-white",l),t.classList.toggle("text-gray-900",l),t.classList.toggle("text-gray-500",!l),r.classList.toggle("bg-white",!l),r.classList.toggle("text-gray-900",!l),r.classList.toggle("text-gray-500",l)}function Ho(i){return{"auth/popup-closed-by-user":"Bạn đã đóng cửa sổ đăng nhập Google.","auth/popup-blocked":"Trình duyệt đã chặn popup. Hệ thống sẽ chuyển sang chế độ đăng nhập redirect.","auth/operation-not-allowed":"Google Sign-In chưa được bật trong Firebase Console (Authentication > Sign-in method).","auth/unauthorized-domain":"Domain hiện tại chưa được cấp quyền trong Firebase. Hãy thêm localhost hoặc 127.0.0.1 vào Authorized domains.","auth/network-request-failed":"Lỗi mạng, vui lòng kiểm tra kết nối internet và thử lại."}[i]||"Đăng nhập Google thất bại. Vui lòng thử lại."}async function ta(i,t){var l;const r=((l=document.querySelector(_e.csrfToken))==null?void 0:l.content)||"",o=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-CSRF-TOKEN":r},body:JSON.stringify(t)}),a=await o.json().catch(()=>({}));if(!o.ok){let f=(a==null?void 0:a.message)||"Yêu cầu không hợp lệ.";if(a!=null&&a.errors){const g=Object.values(a.errors)[0];Array.isArray(g)&&g[0]&&(f=g[0])}throw new Error(f)}return a}async function uh(){const i=await fetch(yn.session,{method:"GET",headers:{Accept:"application/json"}});return i.ok?i.json():{authenticated:!1}}async function Vl(i){if(!(i!=null&&i.uid))return null;const t=await ta(yn.googleSync,{firebase_uid:i.uid,email:i.email||`${i.uid}@google.local`,name:i.displayName||""});return t!=null&&t.owner_uid?Yt(t.owner_uid):Yt(i.uid),t}function vT(){if(document.body.dataset.authPage!=="true")return;const i=document.body.dataset.authMode==="register"?"register":"login";Wo(i);const t=Pe(_e.authTabLogin),r=Pe(_e.authTabRegister);t==null||t.addEventListener("click",()=>Wo("login")),r==null||r.addEventListener("click",()=>Wo("register"));const o=Pe(_e.loginForm),a=Pe(_e.registerForm),l=Pe(_e.googleAuthBtn);uh().then(f=>{f!=null&&f.authenticated&&(f.owner_uid&&Yt(f.owner_uid),window.location.href=br())}),xI(Fn).then(async f=>{f!=null&&f.user&&(await Vl(f.user),window.location.href=br())}).catch(f=>{mt("error",Ho(f.code))}),Kf(Fn,f=>{f&&Yt(f.uid)}),o==null||o.addEventListener("submit",async f=>{var v,I,O;f.preventDefault();const g=(I=(v=Pe(_e.loginUsername))==null?void 0:v.value)==null?void 0:I.trim(),y=(O=Pe(_e.loginPassword))==null?void 0:O.value;try{const D=await ta(yn.localLogin,{username:g,password:y});D!=null&&D.owner_uid&&Yt(D.owner_uid),mt("success","Đăng nhập thành công, đang chuyển hướng..."),window.location.href=br()}catch(D){mt("error",(D==null?void 0:D.message)||"Đăng nhập thất bại.")}}),a==null||a.addEventListener("submit",async f=>{var I,O,D,G;f.preventDefault();const g=(O=(I=Pe(_e.registerName))==null?void 0:I.value)==null?void 0:O.trim(),y=(D=Pe(_e.registerPassword))==null?void 0:D.value,v=(G=Pe(_e.registerPasswordConfirmation))==null?void 0:G.value;if(!g){mt("error","Vui lòng nhập tên đăng nhập.");return}if(y!==v){mt("error","Mật khẩu nhập lại không khớp.");return}try{const R=await ta(yn.localRegister,{username:g,password:y,password_confirmation:v});R!=null&&R.owner_uid&&Yt(R.owner_uid),mt("success","Đăng ký thành công, đang chuyển hướng..."),window.location.href=br()}catch(R){mt("error",(R==null?void 0:R.message)||"Đăng ký thất bại.")}}),l==null||l.addEventListener("click",async()=>{try{const f=await TI(Fn,ea);await Vl(f.user),mt("success","Đăng nhập Google thành công, đang chuyển hướng..."),window.location.href=br()}catch(f){if(f.code==="auth/popup-blocked"){mt("error",Ho(f.code)),await PI(Fn,ea);return}mt("error",`${Ho(f.code)} (Mã lỗi: ${f.code||"unknown"})`)}})}function bT(){document.body.dataset.authRequired==="true"&&uh().then(i=>{if(i!=null&&i.authenticated){i.owner_uid&&Yt(i.owner_uid);const t=document.querySelector(_e.authEmail);t&&(t.textContent=i.display_name||"Người dùng");return}Kf(Fn,t=>{if(!t){ah();const o=encodeURIComponent(window.location.pathname+window.location.search);window.location.href=`${yn.login}?redirect=${o}`;return}Yt(t.uid);const r=document.querySelector(_e.authEmail);r&&(r.textContent=t.displayName||t.email||"Người dùng")})})}function ET(){const i=document.querySelector(_e.logoutButton);i&&i.addEventListener("click",async()=>{try{await fetch(yn.logout,{method:"GET",headers:{Accept:"application/json"}})}catch(t){console.error("Error calling logout endpoint:",t)}try{await iI(Fn)}catch{}ah();try{localStorage.removeItem("firebase_uid"),localStorage.removeItem("quiz_session")}catch{}window.location.href=yn.login})}const ch="quiz-theme";function lh(){try{const i=window.localStorage.getItem(ch);return i==="dark"||i==="light"?i:null}catch{return null}}function IT(i){try{window.localStorage.setItem(ch,i)}catch{}}function TT(){const i=lh();return i||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}function Ta(i){const t=i==="dark";document.documentElement.classList.toggle("dark",t),document.documentElement.style.colorScheme=t?"dark":"light"}function Gl(){return document.documentElement.classList.contains("dark")?"dark":"light"}function ST(i){return i==="dark"?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9 9 0 1 0 20.354 15.354z"/></svg>'}function na(i,t){const r=t==="dark"?"light":"dark",o=r==="dark"?"Dark mode":"Light mode";i.innerHTML=`${ST(r)}<span>${o}</span>`,i.setAttribute("aria-label",`Switch to ${o.toLowerCase()}`),i.setAttribute("title",`Switch to ${o.toLowerCase()}`)}function AT(){if(!document.body||document.querySelector("[data-theme-toggle]"))return;const i=document.createElement("button");i.type="button",i.className="theme-toggle-btn",i.setAttribute("data-theme-toggle","true"),na(i,Gl()),i.addEventListener("click",()=>{const r=Gl()==="dark"?"light":"dark";Ta(r),IT(r),na(i,r)}),document.body.appendChild(i)}function RT(){const i=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null;if(!i)return;const t=r=>{if(lh())return;const o=r.matches?"dark":"light";Ta(o);const a=document.querySelector("[data-theme-toggle]");a&&na(a,o)};if(i.addEventListener){i.addEventListener("change",t);return}i.addListener&&i.addListener(t)}Ta(TT());document.addEventListener("DOMContentLoaded",()=>{vT(),bT(),ET(),AT(),RT()});
