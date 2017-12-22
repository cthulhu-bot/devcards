// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35221 = arguments.length;
var i__25910__auto___35222 = (0);
while(true){
if((i__25910__auto___35222 < len__25909__auto___35221)){
args__25916__auto__.push((arguments[i__25910__auto___35222]));

var G__35223 = (i__25910__auto___35222 + (1));
i__25910__auto___35222 = G__35223;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq35220){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35220));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35225 = arguments.length;
var i__25910__auto___35226 = (0);
while(true){
if((i__25910__auto___35226 < len__25909__auto___35225)){
args__25916__auto__.push((arguments[i__25910__auto___35226]));

var G__35227 = (i__25910__auto___35226 + (1));
i__25910__auto___35226 = G__35227;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq35224){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35224));
});

var g_QMARK__35228 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_35229 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35228){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35228))
,null));
var mkg_35230 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35228,g_35229){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35228,g_35229))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__35228,g_35229,mkg_35230){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35228).call(null,x);
});})(g_QMARK__35228,g_35229,mkg_35230))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__35228,g_35229,mkg_35230){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_35230).call(null,gfn);
});})(g_QMARK__35228,g_35229,mkg_35230))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__35228,g_35229,mkg_35230){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_35229).call(null,generator);
});})(g_QMARK__35228,g_35229,mkg_35230))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35192__auto___35249 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__35192__auto___35249){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35250 = arguments.length;
var i__25910__auto___35251 = (0);
while(true){
if((i__25910__auto___35251 < len__25909__auto___35250)){
args__25916__auto__.push((arguments[i__25910__auto___35251]));

var G__35252 = (i__25910__auto___35251 + (1));
i__25910__auto___35251 = G__35252;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35249))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35249){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35249),args);
});})(g__35192__auto___35249))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__35192__auto___35249){
return (function (seq35231){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35231));
});})(g__35192__auto___35249))
;


var g__35192__auto___35253 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__35192__auto___35253){
return (function cljs$spec$impl$gen$list(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35254 = arguments.length;
var i__25910__auto___35255 = (0);
while(true){
if((i__25910__auto___35255 < len__25909__auto___35254)){
args__25916__auto__.push((arguments[i__25910__auto___35255]));

var G__35256 = (i__25910__auto___35255 + (1));
i__25910__auto___35255 = G__35256;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35253))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35253){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35253),args);
});})(g__35192__auto___35253))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__35192__auto___35253){
return (function (seq35232){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35232));
});})(g__35192__auto___35253))
;


var g__35192__auto___35257 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__35192__auto___35257){
return (function cljs$spec$impl$gen$map(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35258 = arguments.length;
var i__25910__auto___35259 = (0);
while(true){
if((i__25910__auto___35259 < len__25909__auto___35258)){
args__25916__auto__.push((arguments[i__25910__auto___35259]));

var G__35260 = (i__25910__auto___35259 + (1));
i__25910__auto___35259 = G__35260;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35257))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35257){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35257),args);
});})(g__35192__auto___35257))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__35192__auto___35257){
return (function (seq35233){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35233));
});})(g__35192__auto___35257))
;


var g__35192__auto___35261 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__35192__auto___35261){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35262 = arguments.length;
var i__25910__auto___35263 = (0);
while(true){
if((i__25910__auto___35263 < len__25909__auto___35262)){
args__25916__auto__.push((arguments[i__25910__auto___35263]));

var G__35264 = (i__25910__auto___35263 + (1));
i__25910__auto___35263 = G__35264;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35261))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35261){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35261),args);
});})(g__35192__auto___35261))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__35192__auto___35261){
return (function (seq35234){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35234));
});})(g__35192__auto___35261))
;


var g__35192__auto___35265 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__35192__auto___35265){
return (function cljs$spec$impl$gen$set(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35266 = arguments.length;
var i__25910__auto___35267 = (0);
while(true){
if((i__25910__auto___35267 < len__25909__auto___35266)){
args__25916__auto__.push((arguments[i__25910__auto___35267]));

var G__35268 = (i__25910__auto___35267 + (1));
i__25910__auto___35267 = G__35268;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35265))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35265){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35265),args);
});})(g__35192__auto___35265))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__35192__auto___35265){
return (function (seq35235){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35235));
});})(g__35192__auto___35265))
;


var g__35192__auto___35269 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__35192__auto___35269){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35270 = arguments.length;
var i__25910__auto___35271 = (0);
while(true){
if((i__25910__auto___35271 < len__25909__auto___35270)){
args__25916__auto__.push((arguments[i__25910__auto___35271]));

var G__35272 = (i__25910__auto___35271 + (1));
i__25910__auto___35271 = G__35272;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35269))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35269){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35269),args);
});})(g__35192__auto___35269))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__35192__auto___35269){
return (function (seq35236){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35236));
});})(g__35192__auto___35269))
;


var g__35192__auto___35273 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__35192__auto___35273){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35274 = arguments.length;
var i__25910__auto___35275 = (0);
while(true){
if((i__25910__auto___35275 < len__25909__auto___35274)){
args__25916__auto__.push((arguments[i__25910__auto___35275]));

var G__35276 = (i__25910__auto___35275 + (1));
i__25910__auto___35275 = G__35276;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35273))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35273){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35273),args);
});})(g__35192__auto___35273))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__35192__auto___35273){
return (function (seq35237){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35237));
});})(g__35192__auto___35273))
;


var g__35192__auto___35277 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__35192__auto___35277){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35278 = arguments.length;
var i__25910__auto___35279 = (0);
while(true){
if((i__25910__auto___35279 < len__25909__auto___35278)){
args__25916__auto__.push((arguments[i__25910__auto___35279]));

var G__35280 = (i__25910__auto___35279 + (1));
i__25910__auto___35279 = G__35280;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35277))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35277){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35277),args);
});})(g__35192__auto___35277))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__35192__auto___35277){
return (function (seq35238){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35238));
});})(g__35192__auto___35277))
;


var g__35192__auto___35281 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__35192__auto___35281){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35282 = arguments.length;
var i__25910__auto___35283 = (0);
while(true){
if((i__25910__auto___35283 < len__25909__auto___35282)){
args__25916__auto__.push((arguments[i__25910__auto___35283]));

var G__35284 = (i__25910__auto___35283 + (1));
i__25910__auto___35283 = G__35284;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35281))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35281){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35281),args);
});})(g__35192__auto___35281))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__35192__auto___35281){
return (function (seq35239){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35239));
});})(g__35192__auto___35281))
;


var g__35192__auto___35285 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__35192__auto___35285){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35286 = arguments.length;
var i__25910__auto___35287 = (0);
while(true){
if((i__25910__auto___35287 < len__25909__auto___35286)){
args__25916__auto__.push((arguments[i__25910__auto___35287]));

var G__35288 = (i__25910__auto___35287 + (1));
i__25910__auto___35287 = G__35288;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35285))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35285){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35285),args);
});})(g__35192__auto___35285))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__35192__auto___35285){
return (function (seq35240){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35240));
});})(g__35192__auto___35285))
;


var g__35192__auto___35289 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__35192__auto___35289){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35290 = arguments.length;
var i__25910__auto___35291 = (0);
while(true){
if((i__25910__auto___35291 < len__25909__auto___35290)){
args__25916__auto__.push((arguments[i__25910__auto___35291]));

var G__35292 = (i__25910__auto___35291 + (1));
i__25910__auto___35291 = G__35292;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35289))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35289){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35289),args);
});})(g__35192__auto___35289))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__35192__auto___35289){
return (function (seq35241){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35241));
});})(g__35192__auto___35289))
;


var g__35192__auto___35293 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__35192__auto___35293){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35294 = arguments.length;
var i__25910__auto___35295 = (0);
while(true){
if((i__25910__auto___35295 < len__25909__auto___35294)){
args__25916__auto__.push((arguments[i__25910__auto___35295]));

var G__35296 = (i__25910__auto___35295 + (1));
i__25910__auto___35295 = G__35296;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35293))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35293){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35293),args);
});})(g__35192__auto___35293))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__35192__auto___35293){
return (function (seq35242){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35242));
});})(g__35192__auto___35293))
;


var g__35192__auto___35297 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__35192__auto___35297){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35298 = arguments.length;
var i__25910__auto___35299 = (0);
while(true){
if((i__25910__auto___35299 < len__25909__auto___35298)){
args__25916__auto__.push((arguments[i__25910__auto___35299]));

var G__35300 = (i__25910__auto___35299 + (1));
i__25910__auto___35299 = G__35300;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35297))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35297){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35297),args);
});})(g__35192__auto___35297))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__35192__auto___35297){
return (function (seq35243){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35243));
});})(g__35192__auto___35297))
;


var g__35192__auto___35301 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__35192__auto___35301){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35302 = arguments.length;
var i__25910__auto___35303 = (0);
while(true){
if((i__25910__auto___35303 < len__25909__auto___35302)){
args__25916__auto__.push((arguments[i__25910__auto___35303]));

var G__35304 = (i__25910__auto___35303 + (1));
i__25910__auto___35303 = G__35304;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35301))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35301){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35301),args);
});})(g__35192__auto___35301))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__35192__auto___35301){
return (function (seq35244){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35244));
});})(g__35192__auto___35301))
;


var g__35192__auto___35305 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__35192__auto___35305){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35306 = arguments.length;
var i__25910__auto___35307 = (0);
while(true){
if((i__25910__auto___35307 < len__25909__auto___35306)){
args__25916__auto__.push((arguments[i__25910__auto___35307]));

var G__35308 = (i__25910__auto___35307 + (1));
i__25910__auto___35307 = G__35308;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35305))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35305){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35305),args);
});})(g__35192__auto___35305))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__35192__auto___35305){
return (function (seq35245){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35245));
});})(g__35192__auto___35305))
;


var g__35192__auto___35309 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__35192__auto___35309){
return (function cljs$spec$impl$gen$return(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35310 = arguments.length;
var i__25910__auto___35311 = (0);
while(true){
if((i__25910__auto___35311 < len__25909__auto___35310)){
args__25916__auto__.push((arguments[i__25910__auto___35311]));

var G__35312 = (i__25910__auto___35311 + (1));
i__25910__auto___35311 = G__35312;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35309))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35309){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35309),args);
});})(g__35192__auto___35309))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__35192__auto___35309){
return (function (seq35246){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35246));
});})(g__35192__auto___35309))
;


var g__35192__auto___35313 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__35192__auto___35313){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35314 = arguments.length;
var i__25910__auto___35315 = (0);
while(true){
if((i__25910__auto___35315 < len__25909__auto___35314)){
args__25916__auto__.push((arguments[i__25910__auto___35315]));

var G__35316 = (i__25910__auto___35315 + (1));
i__25910__auto___35315 = G__35316;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35313))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35313){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35313),args);
});})(g__35192__auto___35313))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35192__auto___35313){
return (function (seq35247){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35247));
});})(g__35192__auto___35313))
;


var g__35192__auto___35317 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__35192__auto___35317){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35318 = arguments.length;
var i__25910__auto___35319 = (0);
while(true){
if((i__25910__auto___35319 < len__25909__auto___35318)){
args__25916__auto__.push((arguments[i__25910__auto___35319]));

var G__35320 = (i__25910__auto___35319 + (1));
i__25910__auto___35319 = G__35320;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35192__auto___35317))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35192__auto___35317){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35192__auto___35317),args);
});})(g__35192__auto___35317))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__35192__auto___35317){
return (function (seq35248){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35248));
});})(g__35192__auto___35317))
;

var g__35205__auto___35342 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__35205__auto___35342){
return (function cljs$spec$impl$gen$any(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35343 = arguments.length;
var i__25910__auto___35344 = (0);
while(true){
if((i__25910__auto___35344 < len__25909__auto___35343)){
args__25916__auto__.push((arguments[i__25910__auto___35344]));

var G__35345 = (i__25910__auto___35344 + (1));
i__25910__auto___35344 = G__35345;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35342))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35342){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35342);
});})(g__35205__auto___35342))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__35205__auto___35342){
return (function (seq35321){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35321));
});})(g__35205__auto___35342))
;


var g__35205__auto___35346 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__35205__auto___35346){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35347 = arguments.length;
var i__25910__auto___35348 = (0);
while(true){
if((i__25910__auto___35348 < len__25909__auto___35347)){
args__25916__auto__.push((arguments[i__25910__auto___35348]));

var G__35349 = (i__25910__auto___35348 + (1));
i__25910__auto___35348 = G__35349;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35346))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35346){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35346);
});})(g__35205__auto___35346))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__35205__auto___35346){
return (function (seq35322){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35322));
});})(g__35205__auto___35346))
;


var g__35205__auto___35350 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__35205__auto___35350){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35351 = arguments.length;
var i__25910__auto___35352 = (0);
while(true){
if((i__25910__auto___35352 < len__25909__auto___35351)){
args__25916__auto__.push((arguments[i__25910__auto___35352]));

var G__35353 = (i__25910__auto___35352 + (1));
i__25910__auto___35352 = G__35353;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35350))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35350){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35350);
});})(g__35205__auto___35350))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__35205__auto___35350){
return (function (seq35323){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35323));
});})(g__35205__auto___35350))
;


var g__35205__auto___35354 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__35205__auto___35354){
return (function cljs$spec$impl$gen$char(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35355 = arguments.length;
var i__25910__auto___35356 = (0);
while(true){
if((i__25910__auto___35356 < len__25909__auto___35355)){
args__25916__auto__.push((arguments[i__25910__auto___35356]));

var G__35357 = (i__25910__auto___35356 + (1));
i__25910__auto___35356 = G__35357;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35354))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35354){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35354);
});})(g__35205__auto___35354))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__35205__auto___35354){
return (function (seq35324){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35324));
});})(g__35205__auto___35354))
;


var g__35205__auto___35358 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__35205__auto___35358){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35359 = arguments.length;
var i__25910__auto___35360 = (0);
while(true){
if((i__25910__auto___35360 < len__25909__auto___35359)){
args__25916__auto__.push((arguments[i__25910__auto___35360]));

var G__35361 = (i__25910__auto___35360 + (1));
i__25910__auto___35360 = G__35361;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35358))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35358){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35358);
});})(g__35205__auto___35358))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__35205__auto___35358){
return (function (seq35325){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35325));
});})(g__35205__auto___35358))
;


var g__35205__auto___35362 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__35205__auto___35362){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35363 = arguments.length;
var i__25910__auto___35364 = (0);
while(true){
if((i__25910__auto___35364 < len__25909__auto___35363)){
args__25916__auto__.push((arguments[i__25910__auto___35364]));

var G__35365 = (i__25910__auto___35364 + (1));
i__25910__auto___35364 = G__35365;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35362))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35362){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35362);
});})(g__35205__auto___35362))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__35205__auto___35362){
return (function (seq35326){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35326));
});})(g__35205__auto___35362))
;


var g__35205__auto___35366 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__35205__auto___35366){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35367 = arguments.length;
var i__25910__auto___35368 = (0);
while(true){
if((i__25910__auto___35368 < len__25909__auto___35367)){
args__25916__auto__.push((arguments[i__25910__auto___35368]));

var G__35369 = (i__25910__auto___35368 + (1));
i__25910__auto___35368 = G__35369;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35366))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35366){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35366);
});})(g__35205__auto___35366))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__35205__auto___35366){
return (function (seq35327){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35327));
});})(g__35205__auto___35366))
;


var g__35205__auto___35370 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__35205__auto___35370){
return (function cljs$spec$impl$gen$double(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35371 = arguments.length;
var i__25910__auto___35372 = (0);
while(true){
if((i__25910__auto___35372 < len__25909__auto___35371)){
args__25916__auto__.push((arguments[i__25910__auto___35372]));

var G__35373 = (i__25910__auto___35372 + (1));
i__25910__auto___35372 = G__35373;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35370))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35370){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35370);
});})(g__35205__auto___35370))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__35205__auto___35370){
return (function (seq35328){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35328));
});})(g__35205__auto___35370))
;


var g__35205__auto___35374 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__35205__auto___35374){
return (function cljs$spec$impl$gen$int(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35375 = arguments.length;
var i__25910__auto___35376 = (0);
while(true){
if((i__25910__auto___35376 < len__25909__auto___35375)){
args__25916__auto__.push((arguments[i__25910__auto___35376]));

var G__35377 = (i__25910__auto___35376 + (1));
i__25910__auto___35376 = G__35377;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35374))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35374){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35374);
});})(g__35205__auto___35374))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__35205__auto___35374){
return (function (seq35329){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35329));
});})(g__35205__auto___35374))
;


var g__35205__auto___35378 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__35205__auto___35378){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35379 = arguments.length;
var i__25910__auto___35380 = (0);
while(true){
if((i__25910__auto___35380 < len__25909__auto___35379)){
args__25916__auto__.push((arguments[i__25910__auto___35380]));

var G__35381 = (i__25910__auto___35380 + (1));
i__25910__auto___35380 = G__35381;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35378))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35378){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35378);
});})(g__35205__auto___35378))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__35205__auto___35378){
return (function (seq35330){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35330));
});})(g__35205__auto___35378))
;


var g__35205__auto___35382 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__35205__auto___35382){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35383 = arguments.length;
var i__25910__auto___35384 = (0);
while(true){
if((i__25910__auto___35384 < len__25909__auto___35383)){
args__25916__auto__.push((arguments[i__25910__auto___35384]));

var G__35385 = (i__25910__auto___35384 + (1));
i__25910__auto___35384 = G__35385;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35382))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35382){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35382);
});})(g__35205__auto___35382))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__35205__auto___35382){
return (function (seq35331){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35331));
});})(g__35205__auto___35382))
;


var g__35205__auto___35386 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__35205__auto___35386){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35387 = arguments.length;
var i__25910__auto___35388 = (0);
while(true){
if((i__25910__auto___35388 < len__25909__auto___35387)){
args__25916__auto__.push((arguments[i__25910__auto___35388]));

var G__35389 = (i__25910__auto___35388 + (1));
i__25910__auto___35388 = G__35389;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35386))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35386){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35386);
});})(g__35205__auto___35386))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__35205__auto___35386){
return (function (seq35332){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35332));
});})(g__35205__auto___35386))
;


var g__35205__auto___35390 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__35205__auto___35390){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35391 = arguments.length;
var i__25910__auto___35392 = (0);
while(true){
if((i__25910__auto___35392 < len__25909__auto___35391)){
args__25916__auto__.push((arguments[i__25910__auto___35392]));

var G__35393 = (i__25910__auto___35392 + (1));
i__25910__auto___35392 = G__35393;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35390))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35390){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35390);
});})(g__35205__auto___35390))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__35205__auto___35390){
return (function (seq35333){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35333));
});})(g__35205__auto___35390))
;


var g__35205__auto___35394 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__35205__auto___35394){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35395 = arguments.length;
var i__25910__auto___35396 = (0);
while(true){
if((i__25910__auto___35396 < len__25909__auto___35395)){
args__25916__auto__.push((arguments[i__25910__auto___35396]));

var G__35397 = (i__25910__auto___35396 + (1));
i__25910__auto___35396 = G__35397;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35394))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35394){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35394);
});})(g__35205__auto___35394))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__35205__auto___35394){
return (function (seq35334){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35334));
});})(g__35205__auto___35394))
;


var g__35205__auto___35398 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__35205__auto___35398){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35399 = arguments.length;
var i__25910__auto___35400 = (0);
while(true){
if((i__25910__auto___35400 < len__25909__auto___35399)){
args__25916__auto__.push((arguments[i__25910__auto___35400]));

var G__35401 = (i__25910__auto___35400 + (1));
i__25910__auto___35400 = G__35401;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35398))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35398){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35398);
});})(g__35205__auto___35398))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__35205__auto___35398){
return (function (seq35335){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35335));
});})(g__35205__auto___35398))
;


var g__35205__auto___35402 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__35205__auto___35402){
return (function cljs$spec$impl$gen$string(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35403 = arguments.length;
var i__25910__auto___35404 = (0);
while(true){
if((i__25910__auto___35404 < len__25909__auto___35403)){
args__25916__auto__.push((arguments[i__25910__auto___35404]));

var G__35405 = (i__25910__auto___35404 + (1));
i__25910__auto___35404 = G__35405;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35402))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35402){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35402);
});})(g__35205__auto___35402))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__35205__auto___35402){
return (function (seq35336){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35336));
});})(g__35205__auto___35402))
;


var g__35205__auto___35406 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__35205__auto___35406){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35407 = arguments.length;
var i__25910__auto___35408 = (0);
while(true){
if((i__25910__auto___35408 < len__25909__auto___35407)){
args__25916__auto__.push((arguments[i__25910__auto___35408]));

var G__35409 = (i__25910__auto___35408 + (1));
i__25910__auto___35408 = G__35409;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35406))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35406){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35406);
});})(g__35205__auto___35406))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__35205__auto___35406){
return (function (seq35337){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35337));
});})(g__35205__auto___35406))
;


var g__35205__auto___35410 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__35205__auto___35410){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35411 = arguments.length;
var i__25910__auto___35412 = (0);
while(true){
if((i__25910__auto___35412 < len__25909__auto___35411)){
args__25916__auto__.push((arguments[i__25910__auto___35412]));

var G__35413 = (i__25910__auto___35412 + (1));
i__25910__auto___35412 = G__35413;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35410))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35410){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35410);
});})(g__35205__auto___35410))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__35205__auto___35410){
return (function (seq35338){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35338));
});})(g__35205__auto___35410))
;


var g__35205__auto___35414 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__35205__auto___35414){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35415 = arguments.length;
var i__25910__auto___35416 = (0);
while(true){
if((i__25910__auto___35416 < len__25909__auto___35415)){
args__25916__auto__.push((arguments[i__25910__auto___35416]));

var G__35417 = (i__25910__auto___35416 + (1));
i__25910__auto___35416 = G__35417;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35414))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35414){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35414);
});})(g__35205__auto___35414))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__35205__auto___35414){
return (function (seq35339){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35339));
});})(g__35205__auto___35414))
;


var g__35205__auto___35418 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__35205__auto___35418){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35419 = arguments.length;
var i__25910__auto___35420 = (0);
while(true){
if((i__25910__auto___35420 < len__25909__auto___35419)){
args__25916__auto__.push((arguments[i__25910__auto___35420]));

var G__35421 = (i__25910__auto___35420 + (1));
i__25910__auto___35420 = G__35421;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35418))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35418){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35418);
});})(g__35205__auto___35418))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__35205__auto___35418){
return (function (seq35340){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35340));
});})(g__35205__auto___35418))
;


var g__35205__auto___35422 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__35205__auto___35422){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35423 = arguments.length;
var i__25910__auto___35424 = (0);
while(true){
if((i__25910__auto___35424 < len__25909__auto___35423)){
args__25916__auto__.push((arguments[i__25910__auto___35424]));

var G__35425 = (i__25910__auto___35424 + (1));
i__25910__auto___35424 = G__35425;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35205__auto___35422))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35205__auto___35422){
return (function (args){
return cljs.core.deref.call(null,g__35205__auto___35422);
});})(g__35205__auto___35422))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__35205__auto___35422){
return (function (seq35341){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35341));
});})(g__35205__auto___35422))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35428 = arguments.length;
var i__25910__auto___35429 = (0);
while(true){
if((i__25910__auto___35429 < len__25909__auto___35428)){
args__25916__auto__.push((arguments[i__25910__auto___35429]));

var G__35430 = (i__25910__auto___35429 + (1));
i__25910__auto___35429 = G__35430;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__35426_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35426_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq35427){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35427));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__35431_SHARP_){
return (new Date(p1__35431_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1513976123202