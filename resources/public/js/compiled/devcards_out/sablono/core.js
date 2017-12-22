// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__28257__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__28254 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__28255 = cljs.core.seq.call(null,vec__28254);
var first__28256 = cljs.core.first.call(null,seq__28255);
var seq__28255__$1 = cljs.core.next.call(null,seq__28255);
var tag = first__28256;
var body = seq__28255__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__28257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28258__i = 0, G__28258__a = new Array(arguments.length -  0);
while (G__28258__i < G__28258__a.length) {G__28258__a[G__28258__i] = arguments[G__28258__i + 0]; ++G__28258__i;}
  args = new cljs.core.IndexedSeq(G__28258__a,0);
} 
return G__28257__delegate.call(this,args);};
G__28257.cljs$lang$maxFixedArity = 0;
G__28257.cljs$lang$applyTo = (function (arglist__28259){
var args = cljs.core.seq(arglist__28259);
return G__28257__delegate(args);
});
G__28257.cljs$core$IFn$_invoke$arity$variadic = G__28257__delegate;
return G__28257;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__25614__auto__ = (function sablono$core$update_arglists_$_iter__28264(s__28265){
return (new cljs.core.LazySeq(null,(function (){
var s__28265__$1 = s__28265;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28265__$1);
if(temp__4657__auto__){
var s__28265__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28265__$2)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,s__28265__$2);
var size__25613__auto__ = cljs.core.count.call(null,c__25612__auto__);
var b__28267 = cljs.core.chunk_buffer.call(null,size__25613__auto__);
if((function (){var i__28266 = (0);
while(true){
if((i__28266 < size__25613__auto__)){
var args = cljs.core._nth.call(null,c__25612__auto__,i__28266);
cljs.core.chunk_append.call(null,b__28267,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__28268 = (i__28266 + (1));
i__28266 = G__28268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28267),sablono$core$update_arglists_$_iter__28264.call(null,cljs.core.chunk_rest.call(null,s__28265__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28267),null);
}
} else {
var args = cljs.core.first.call(null,s__28265__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__28264.call(null,cljs.core.rest.call(null,s__28265__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25614__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__25916__auto__ = [];
var len__25909__auto___28274 = arguments.length;
var i__25910__auto___28275 = (0);
while(true){
if((i__25910__auto___28275 < len__25909__auto___28274)){
args__25916__auto__.push((arguments[i__25910__auto___28275]));

var G__28276 = (i__25910__auto___28275 + (1));
i__25910__auto___28275 = G__28276;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__25614__auto__ = (function sablono$core$iter__28270(s__28271){
return (new cljs.core.LazySeq(null,(function (){
var s__28271__$1 = s__28271;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28271__$1);
if(temp__4657__auto__){
var s__28271__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28271__$2)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,s__28271__$2);
var size__25613__auto__ = cljs.core.count.call(null,c__25612__auto__);
var b__28273 = cljs.core.chunk_buffer.call(null,size__25613__auto__);
if((function (){var i__28272 = (0);
while(true){
if((i__28272 < size__25613__auto__)){
var style = cljs.core._nth.call(null,c__25612__auto__,i__28272);
cljs.core.chunk_append.call(null,b__28273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__28277 = (i__28272 + (1));
i__28272 = G__28277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28273),sablono$core$iter__28270.call(null,cljs.core.chunk_rest.call(null,s__28271__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28273),null);
}
} else {
var style = cljs.core.first.call(null,s__28271__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__28270.call(null,cljs.core.rest.call(null,s__28271__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25614__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq28269){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28269));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to28278 = (function sablono$core$link_to28278(var_args){
var args__25916__auto__ = [];
var len__25909__auto___28281 = arguments.length;
var i__25910__auto___28282 = (0);
while(true){
if((i__25910__auto___28282 < len__25909__auto___28281)){
args__25916__auto__.push((arguments[i__25910__auto___28282]));

var G__28283 = (i__25910__auto___28282 + (1));
i__25910__auto___28282 = G__28283;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((1) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28278.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25917__auto__);
});

sablono.core.link_to28278.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to28278.cljs$lang$maxFixedArity = (1);

sablono.core.link_to28278.cljs$lang$applyTo = (function (seq28279){
var G__28280 = cljs.core.first.call(null,seq28279);
var seq28279__$1 = cljs.core.next.call(null,seq28279);
return sablono.core.link_to28278.cljs$core$IFn$_invoke$arity$variadic(G__28280,seq28279__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28278);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28284 = (function sablono$core$mail_to28284(var_args){
var args__25916__auto__ = [];
var len__25909__auto___28291 = arguments.length;
var i__25910__auto___28292 = (0);
while(true){
if((i__25910__auto___28292 < len__25909__auto___28291)){
args__25916__auto__.push((arguments[i__25910__auto___28292]));

var G__28293 = (i__25910__auto___28292 + (1));
i__25910__auto___28292 = G__28293;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((1) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28284.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25917__auto__);
});

sablono.core.mail_to28284.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28287){
var vec__28288 = p__28287;
var content = cljs.core.nth.call(null,vec__28288,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__24834__auto__ = content;
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to28284.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to28284.cljs$lang$applyTo = (function (seq28285){
var G__28286 = cljs.core.first.call(null,seq28285);
var seq28285__$1 = cljs.core.next.call(null,seq28285);
return sablono.core.mail_to28284.cljs$core$IFn$_invoke$arity$variadic(G__28286,seq28285__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28284);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28294 = (function sablono$core$unordered_list28294(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__25614__auto__ = (function sablono$core$unordered_list28294_$_iter__28299(s__28300){
return (new cljs.core.LazySeq(null,(function (){
var s__28300__$1 = s__28300;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28300__$1);
if(temp__4657__auto__){
var s__28300__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28300__$2)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,s__28300__$2);
var size__25613__auto__ = cljs.core.count.call(null,c__25612__auto__);
var b__28302 = cljs.core.chunk_buffer.call(null,size__25613__auto__);
if((function (){var i__28301 = (0);
while(true){
if((i__28301 < size__25613__auto__)){
var x = cljs.core._nth.call(null,c__25612__auto__,i__28301);
cljs.core.chunk_append.call(null,b__28302,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28303 = (i__28301 + (1));
i__28301 = G__28303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28302),sablono$core$unordered_list28294_$_iter__28299.call(null,cljs.core.chunk_rest.call(null,s__28300__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28302),null);
}
} else {
var x = cljs.core.first.call(null,s__28300__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list28294_$_iter__28299.call(null,cljs.core.rest.call(null,s__28300__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25614__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28294);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28304 = (function sablono$core$ordered_list28304(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__25614__auto__ = (function sablono$core$ordered_list28304_$_iter__28309(s__28310){
return (new cljs.core.LazySeq(null,(function (){
var s__28310__$1 = s__28310;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28310__$1);
if(temp__4657__auto__){
var s__28310__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28310__$2)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,s__28310__$2);
var size__25613__auto__ = cljs.core.count.call(null,c__25612__auto__);
var b__28312 = cljs.core.chunk_buffer.call(null,size__25613__auto__);
if((function (){var i__28311 = (0);
while(true){
if((i__28311 < size__25613__auto__)){
var x = cljs.core._nth.call(null,c__25612__auto__,i__28311);
cljs.core.chunk_append.call(null,b__28312,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28313 = (i__28311 + (1));
i__28311 = G__28313;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28312),sablono$core$ordered_list28304_$_iter__28309.call(null,cljs.core.chunk_rest.call(null,s__28310__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28312),null);
}
} else {
var x = cljs.core.first.call(null,s__28310__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list28304_$_iter__28309.call(null,cljs.core.rest.call(null,s__28310__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25614__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28304);
/**
 * Create an image element.
 */
sablono.core.image28314 = (function sablono$core$image28314(var_args){
var args28315 = [];
var len__25909__auto___28318 = arguments.length;
var i__25910__auto___28319 = (0);
while(true){
if((i__25910__auto___28319 < len__25909__auto___28318)){
args28315.push((arguments[i__25910__auto___28319]));

var G__28320 = (i__25910__auto___28319 + (1));
i__25910__auto___28319 = G__28320;
continue;
} else {
}
break;
}

var G__28317 = args28315.length;
switch (G__28317) {
case 1:
return sablono.core.image28314.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28314.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28315.length)].join('')));

}
});

sablono.core.image28314.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image28314.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image28314.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28314);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__28322_SHARP_,p2__28323_SHARP_){
return [cljs.core.str(p1__28322_SHARP_),cljs.core.str("["),cljs.core.str(p2__28323_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__28324_SHARP_,p2__28325_SHARP_){
return [cljs.core.str(p1__28324_SHARP_),cljs.core.str("-"),cljs.core.str(p2__28325_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24834__auto__ = value;
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field28326 = (function sablono$core$color_field28326(var_args){
var args28327 = [];
var len__25909__auto___28394 = arguments.length;
var i__25910__auto___28395 = (0);
while(true){
if((i__25910__auto___28395 < len__25909__auto___28394)){
args28327.push((arguments[i__25910__auto___28395]));

var G__28396 = (i__25910__auto___28395 + (1));
i__25910__auto___28395 = G__28396;
continue;
} else {
}
break;
}

var G__28329 = args28327.length;
switch (G__28329) {
case 1:
return sablono.core.color_field28326.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28326.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28327.length)].join('')));

}
});

sablono.core.color_field28326.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.color_field28326.call(null,name__28241__auto__,null);
});

sablono.core.color_field28326.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.color_field28326.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28326);

/**
 * Creates a date input field.
 */
sablono.core.date_field28330 = (function sablono$core$date_field28330(var_args){
var args28331 = [];
var len__25909__auto___28398 = arguments.length;
var i__25910__auto___28399 = (0);
while(true){
if((i__25910__auto___28399 < len__25909__auto___28398)){
args28331.push((arguments[i__25910__auto___28399]));

var G__28400 = (i__25910__auto___28399 + (1));
i__25910__auto___28399 = G__28400;
continue;
} else {
}
break;
}

var G__28333 = args28331.length;
switch (G__28333) {
case 1:
return sablono.core.date_field28330.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28330.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28331.length)].join('')));

}
});

sablono.core.date_field28330.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.date_field28330.call(null,name__28241__auto__,null);
});

sablono.core.date_field28330.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.date_field28330.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28330);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28334 = (function sablono$core$datetime_field28334(var_args){
var args28335 = [];
var len__25909__auto___28402 = arguments.length;
var i__25910__auto___28403 = (0);
while(true){
if((i__25910__auto___28403 < len__25909__auto___28402)){
args28335.push((arguments[i__25910__auto___28403]));

var G__28404 = (i__25910__auto___28403 + (1));
i__25910__auto___28403 = G__28404;
continue;
} else {
}
break;
}

var G__28337 = args28335.length;
switch (G__28337) {
case 1:
return sablono.core.datetime_field28334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28335.length)].join('')));

}
});

sablono.core.datetime_field28334.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.datetime_field28334.call(null,name__28241__auto__,null);
});

sablono.core.datetime_field28334.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.datetime_field28334.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28334);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28338 = (function sablono$core$datetime_local_field28338(var_args){
var args28339 = [];
var len__25909__auto___28406 = arguments.length;
var i__25910__auto___28407 = (0);
while(true){
if((i__25910__auto___28407 < len__25909__auto___28406)){
args28339.push((arguments[i__25910__auto___28407]));

var G__28408 = (i__25910__auto___28407 + (1));
i__25910__auto___28407 = G__28408;
continue;
} else {
}
break;
}

var G__28341 = args28339.length;
switch (G__28341) {
case 1:
return sablono.core.datetime_local_field28338.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28338.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28339.length)].join('')));

}
});

sablono.core.datetime_local_field28338.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.datetime_local_field28338.call(null,name__28241__auto__,null);
});

sablono.core.datetime_local_field28338.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.datetime_local_field28338.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28338);

/**
 * Creates a email input field.
 */
sablono.core.email_field28342 = (function sablono$core$email_field28342(var_args){
var args28343 = [];
var len__25909__auto___28410 = arguments.length;
var i__25910__auto___28411 = (0);
while(true){
if((i__25910__auto___28411 < len__25909__auto___28410)){
args28343.push((arguments[i__25910__auto___28411]));

var G__28412 = (i__25910__auto___28411 + (1));
i__25910__auto___28411 = G__28412;
continue;
} else {
}
break;
}

var G__28345 = args28343.length;
switch (G__28345) {
case 1:
return sablono.core.email_field28342.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28342.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28343.length)].join('')));

}
});

sablono.core.email_field28342.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.email_field28342.call(null,name__28241__auto__,null);
});

sablono.core.email_field28342.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.email_field28342.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28342);

/**
 * Creates a file input field.
 */
sablono.core.file_field28346 = (function sablono$core$file_field28346(var_args){
var args28347 = [];
var len__25909__auto___28414 = arguments.length;
var i__25910__auto___28415 = (0);
while(true){
if((i__25910__auto___28415 < len__25909__auto___28414)){
args28347.push((arguments[i__25910__auto___28415]));

var G__28416 = (i__25910__auto___28415 + (1));
i__25910__auto___28415 = G__28416;
continue;
} else {
}
break;
}

var G__28349 = args28347.length;
switch (G__28349) {
case 1:
return sablono.core.file_field28346.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28346.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28347.length)].join('')));

}
});

sablono.core.file_field28346.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.file_field28346.call(null,name__28241__auto__,null);
});

sablono.core.file_field28346.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.file_field28346.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28346);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28350 = (function sablono$core$hidden_field28350(var_args){
var args28351 = [];
var len__25909__auto___28418 = arguments.length;
var i__25910__auto___28419 = (0);
while(true){
if((i__25910__auto___28419 < len__25909__auto___28418)){
args28351.push((arguments[i__25910__auto___28419]));

var G__28420 = (i__25910__auto___28419 + (1));
i__25910__auto___28419 = G__28420;
continue;
} else {
}
break;
}

var G__28353 = args28351.length;
switch (G__28353) {
case 1:
return sablono.core.hidden_field28350.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28350.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28351.length)].join('')));

}
});

sablono.core.hidden_field28350.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.hidden_field28350.call(null,name__28241__auto__,null);
});

sablono.core.hidden_field28350.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.hidden_field28350.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28350);

/**
 * Creates a month input field.
 */
sablono.core.month_field28354 = (function sablono$core$month_field28354(var_args){
var args28355 = [];
var len__25909__auto___28422 = arguments.length;
var i__25910__auto___28423 = (0);
while(true){
if((i__25910__auto___28423 < len__25909__auto___28422)){
args28355.push((arguments[i__25910__auto___28423]));

var G__28424 = (i__25910__auto___28423 + (1));
i__25910__auto___28423 = G__28424;
continue;
} else {
}
break;
}

var G__28357 = args28355.length;
switch (G__28357) {
case 1:
return sablono.core.month_field28354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28355.length)].join('')));

}
});

sablono.core.month_field28354.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.month_field28354.call(null,name__28241__auto__,null);
});

sablono.core.month_field28354.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.month_field28354.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28354);

/**
 * Creates a number input field.
 */
sablono.core.number_field28358 = (function sablono$core$number_field28358(var_args){
var args28359 = [];
var len__25909__auto___28426 = arguments.length;
var i__25910__auto___28427 = (0);
while(true){
if((i__25910__auto___28427 < len__25909__auto___28426)){
args28359.push((arguments[i__25910__auto___28427]));

var G__28428 = (i__25910__auto___28427 + (1));
i__25910__auto___28427 = G__28428;
continue;
} else {
}
break;
}

var G__28361 = args28359.length;
switch (G__28361) {
case 1:
return sablono.core.number_field28358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28359.length)].join('')));

}
});

sablono.core.number_field28358.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.number_field28358.call(null,name__28241__auto__,null);
});

sablono.core.number_field28358.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.number_field28358.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28358);

/**
 * Creates a password input field.
 */
sablono.core.password_field28362 = (function sablono$core$password_field28362(var_args){
var args28363 = [];
var len__25909__auto___28430 = arguments.length;
var i__25910__auto___28431 = (0);
while(true){
if((i__25910__auto___28431 < len__25909__auto___28430)){
args28363.push((arguments[i__25910__auto___28431]));

var G__28432 = (i__25910__auto___28431 + (1));
i__25910__auto___28431 = G__28432;
continue;
} else {
}
break;
}

var G__28365 = args28363.length;
switch (G__28365) {
case 1:
return sablono.core.password_field28362.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28362.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28363.length)].join('')));

}
});

sablono.core.password_field28362.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.password_field28362.call(null,name__28241__auto__,null);
});

sablono.core.password_field28362.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.password_field28362.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28362);

/**
 * Creates a range input field.
 */
sablono.core.range_field28366 = (function sablono$core$range_field28366(var_args){
var args28367 = [];
var len__25909__auto___28434 = arguments.length;
var i__25910__auto___28435 = (0);
while(true){
if((i__25910__auto___28435 < len__25909__auto___28434)){
args28367.push((arguments[i__25910__auto___28435]));

var G__28436 = (i__25910__auto___28435 + (1));
i__25910__auto___28435 = G__28436;
continue;
} else {
}
break;
}

var G__28369 = args28367.length;
switch (G__28369) {
case 1:
return sablono.core.range_field28366.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28366.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28367.length)].join('')));

}
});

sablono.core.range_field28366.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.range_field28366.call(null,name__28241__auto__,null);
});

sablono.core.range_field28366.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.range_field28366.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28366);

/**
 * Creates a search input field.
 */
sablono.core.search_field28370 = (function sablono$core$search_field28370(var_args){
var args28371 = [];
var len__25909__auto___28438 = arguments.length;
var i__25910__auto___28439 = (0);
while(true){
if((i__25910__auto___28439 < len__25909__auto___28438)){
args28371.push((arguments[i__25910__auto___28439]));

var G__28440 = (i__25910__auto___28439 + (1));
i__25910__auto___28439 = G__28440;
continue;
} else {
}
break;
}

var G__28373 = args28371.length;
switch (G__28373) {
case 1:
return sablono.core.search_field28370.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28370.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28371.length)].join('')));

}
});

sablono.core.search_field28370.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.search_field28370.call(null,name__28241__auto__,null);
});

sablono.core.search_field28370.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.search_field28370.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28370);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28374 = (function sablono$core$tel_field28374(var_args){
var args28375 = [];
var len__25909__auto___28442 = arguments.length;
var i__25910__auto___28443 = (0);
while(true){
if((i__25910__auto___28443 < len__25909__auto___28442)){
args28375.push((arguments[i__25910__auto___28443]));

var G__28444 = (i__25910__auto___28443 + (1));
i__25910__auto___28443 = G__28444;
continue;
} else {
}
break;
}

var G__28377 = args28375.length;
switch (G__28377) {
case 1:
return sablono.core.tel_field28374.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28374.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28375.length)].join('')));

}
});

sablono.core.tel_field28374.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.tel_field28374.call(null,name__28241__auto__,null);
});

sablono.core.tel_field28374.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.tel_field28374.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28374);

/**
 * Creates a text input field.
 */
sablono.core.text_field28378 = (function sablono$core$text_field28378(var_args){
var args28379 = [];
var len__25909__auto___28446 = arguments.length;
var i__25910__auto___28447 = (0);
while(true){
if((i__25910__auto___28447 < len__25909__auto___28446)){
args28379.push((arguments[i__25910__auto___28447]));

var G__28448 = (i__25910__auto___28447 + (1));
i__25910__auto___28447 = G__28448;
continue;
} else {
}
break;
}

var G__28381 = args28379.length;
switch (G__28381) {
case 1:
return sablono.core.text_field28378.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28378.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28379.length)].join('')));

}
});

sablono.core.text_field28378.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.text_field28378.call(null,name__28241__auto__,null);
});

sablono.core.text_field28378.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.text_field28378.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28378);

/**
 * Creates a time input field.
 */
sablono.core.time_field28382 = (function sablono$core$time_field28382(var_args){
var args28383 = [];
var len__25909__auto___28450 = arguments.length;
var i__25910__auto___28451 = (0);
while(true){
if((i__25910__auto___28451 < len__25909__auto___28450)){
args28383.push((arguments[i__25910__auto___28451]));

var G__28452 = (i__25910__auto___28451 + (1));
i__25910__auto___28451 = G__28452;
continue;
} else {
}
break;
}

var G__28385 = args28383.length;
switch (G__28385) {
case 1:
return sablono.core.time_field28382.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28383.length)].join('')));

}
});

sablono.core.time_field28382.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.time_field28382.call(null,name__28241__auto__,null);
});

sablono.core.time_field28382.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.time_field28382.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28382);

/**
 * Creates a url input field.
 */
sablono.core.url_field28386 = (function sablono$core$url_field28386(var_args){
var args28387 = [];
var len__25909__auto___28454 = arguments.length;
var i__25910__auto___28455 = (0);
while(true){
if((i__25910__auto___28455 < len__25909__auto___28454)){
args28387.push((arguments[i__25910__auto___28455]));

var G__28456 = (i__25910__auto___28455 + (1));
i__25910__auto___28455 = G__28456;
continue;
} else {
}
break;
}

var G__28389 = args28387.length;
switch (G__28389) {
case 1:
return sablono.core.url_field28386.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28386.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28387.length)].join('')));

}
});

sablono.core.url_field28386.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.url_field28386.call(null,name__28241__auto__,null);
});

sablono.core.url_field28386.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.url_field28386.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28386);

/**
 * Creates a week input field.
 */
sablono.core.week_field28390 = (function sablono$core$week_field28390(var_args){
var args28391 = [];
var len__25909__auto___28458 = arguments.length;
var i__25910__auto___28459 = (0);
while(true){
if((i__25910__auto___28459 < len__25909__auto___28458)){
args28391.push((arguments[i__25910__auto___28459]));

var G__28460 = (i__25910__auto___28459 + (1));
i__25910__auto___28459 = G__28460;
continue;
} else {
}
break;
}

var G__28393 = args28391.length;
switch (G__28393) {
case 1:
return sablono.core.week_field28390.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28390.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28391.length)].join('')));

}
});

sablono.core.week_field28390.cljs$core$IFn$_invoke$arity$1 = (function (name__28241__auto__){
return sablono.core.week_field28390.call(null,name__28241__auto__,null);
});

sablono.core.week_field28390.cljs$core$IFn$_invoke$arity$2 = (function (name__28241__auto__,value__28242__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__28241__auto__,value__28242__auto__);
});

sablono.core.week_field28390.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28390);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28462 = (function sablono$core$check_box28462(var_args){
var args28463 = [];
var len__25909__auto___28466 = arguments.length;
var i__25910__auto___28467 = (0);
while(true){
if((i__25910__auto___28467 < len__25909__auto___28466)){
args28463.push((arguments[i__25910__auto___28467]));

var G__28468 = (i__25910__auto___28467 + (1));
i__25910__auto___28467 = G__28468;
continue;
} else {
}
break;
}

var G__28465 = args28463.length;
switch (G__28465) {
case 1:
return sablono.core.check_box28462.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28462.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28462.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28463.length)].join('')));

}
});

sablono.core.check_box28462.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box28462.call(null,name,null);
});

sablono.core.check_box28462.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box28462.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box28462.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24834__auto__ = value;
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box28462.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28462);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28470 = (function sablono$core$radio_button28470(var_args){
var args28471 = [];
var len__25909__auto___28474 = arguments.length;
var i__25910__auto___28475 = (0);
while(true){
if((i__25910__auto___28475 < len__25909__auto___28474)){
args28471.push((arguments[i__25910__auto___28475]));

var G__28476 = (i__25910__auto___28475 + (1));
i__25910__auto___28475 = G__28476;
continue;
} else {
}
break;
}

var G__28473 = args28471.length;
switch (G__28473) {
case 1:
return sablono.core.radio_button28470.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28470.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28470.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28471.length)].join('')));

}
});

sablono.core.radio_button28470.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button28470.call(null,group,null);
});

sablono.core.radio_button28470.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button28470.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button28470.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24834__auto__ = value;
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button28470.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28470);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28478 = (function sablono$core$select_options28478(coll){
var iter__25614__auto__ = (function sablono$core$select_options28478_$_iter__28495(s__28496){
return (new cljs.core.LazySeq(null,(function (){
var s__28496__$1 = s__28496;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28496__$1);
if(temp__4657__auto__){
var s__28496__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28496__$2)){
var c__25612__auto__ = cljs.core.chunk_first.call(null,s__28496__$2);
var size__25613__auto__ = cljs.core.count.call(null,c__25612__auto__);
var b__28498 = cljs.core.chunk_buffer.call(null,size__25613__auto__);
if((function (){var i__28497 = (0);
while(true){
if((i__28497 < size__25613__auto__)){
var x = cljs.core._nth.call(null,c__25612__auto__,i__28497);
cljs.core.chunk_append.call(null,b__28498,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28505 = x;
var text = cljs.core.nth.call(null,vec__28505,(0),null);
var val = cljs.core.nth.call(null,vec__28505,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28505,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options28478.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__28511 = (i__28497 + (1));
i__28497 = G__28511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28498),sablono$core$select_options28478_$_iter__28495.call(null,cljs.core.chunk_rest.call(null,s__28496__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28498),null);
}
} else {
var x = cljs.core.first.call(null,s__28496__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28508 = x;
var text = cljs.core.nth.call(null,vec__28508,(0),null);
var val = cljs.core.nth.call(null,vec__28508,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28508,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options28478.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options28478_$_iter__28495.call(null,cljs.core.rest.call(null,s__28496__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25614__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28478);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28512 = (function sablono$core$drop_down28512(var_args){
var args28513 = [];
var len__25909__auto___28516 = arguments.length;
var i__25910__auto___28517 = (0);
while(true){
if((i__25910__auto___28517 < len__25909__auto___28516)){
args28513.push((arguments[i__25910__auto___28517]));

var G__28518 = (i__25910__auto___28517 + (1));
i__25910__auto___28517 = G__28518;
continue;
} else {
}
break;
}

var G__28515 = args28513.length;
switch (G__28515) {
case 2:
return sablono.core.drop_down28512.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28512.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28513.length)].join('')));

}
});

sablono.core.drop_down28512.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28512.call(null,name,options,null);
});

sablono.core.drop_down28512.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down28512.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28512);
/**
 * Creates a text area element.
 */
sablono.core.text_area28520 = (function sablono$core$text_area28520(var_args){
var args28521 = [];
var len__25909__auto___28524 = arguments.length;
var i__25910__auto___28525 = (0);
while(true){
if((i__25910__auto___28525 < len__25909__auto___28524)){
args28521.push((arguments[i__25910__auto___28525]));

var G__28526 = (i__25910__auto___28525 + (1));
i__25910__auto___28525 = G__28526;
continue;
} else {
}
break;
}

var G__28523 = args28521.length;
switch (G__28523) {
case 1:
return sablono.core.text_area28520.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28520.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28521.length)].join('')));

}
});

sablono.core.text_area28520.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area28520.call(null,name,null);
});

sablono.core.text_area28520.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__24834__auto__ = value;
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area28520.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28520);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28528 = (function sablono$core$label28528(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28528);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28529 = (function sablono$core$submit_button28529(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28529);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28530 = (function sablono$core$reset_button28530(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28530);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28531 = (function sablono$core$form_to28531(var_args){
var args__25916__auto__ = [];
var len__25909__auto___28538 = arguments.length;
var i__25910__auto___28539 = (0);
while(true){
if((i__25910__auto___28539 < len__25909__auto___28538)){
args__25916__auto__.push((arguments[i__25910__auto___28539]));

var G__28540 = (i__25910__auto___28539 + (1));
i__25910__auto___28539 = G__28540;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((1) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to28531.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25917__auto__);
});

sablono.core.form_to28531.cljs$core$IFn$_invoke$arity$variadic = (function (p__28534,body){
var vec__28535 = p__28534;
var method = cljs.core.nth.call(null,vec__28535,(0),null);
var action = cljs.core.nth.call(null,vec__28535,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to28531.cljs$lang$maxFixedArity = (1);

sablono.core.form_to28531.cljs$lang$applyTo = (function (seq28532){
var G__28533 = cljs.core.first.call(null,seq28532);
var seq28532__$1 = cljs.core.next.call(null,seq28532);
return sablono.core.form_to28531.cljs$core$IFn$_invoke$arity$variadic(G__28533,seq28532__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28531);

//# sourceMappingURL=core.js.map?rel=1513976118761