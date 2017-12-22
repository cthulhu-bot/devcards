// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24834__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24834__auto__){
return or__24834__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24834__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34150_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34150_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34155 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34156 = null;
var count__34157 = (0);
var i__34158 = (0);
while(true){
if((i__34158 < count__34157)){
var n = cljs.core._nth.call(null,chunk__34156,i__34158);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34159 = seq__34155;
var G__34160 = chunk__34156;
var G__34161 = count__34157;
var G__34162 = (i__34158 + (1));
seq__34155 = G__34159;
chunk__34156 = G__34160;
count__34157 = G__34161;
i__34158 = G__34162;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34155);
if(temp__4657__auto__){
var seq__34155__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34155__$1)){
var c__25645__auto__ = cljs.core.chunk_first.call(null,seq__34155__$1);
var G__34163 = cljs.core.chunk_rest.call(null,seq__34155__$1);
var G__34164 = c__25645__auto__;
var G__34165 = cljs.core.count.call(null,c__25645__auto__);
var G__34166 = (0);
seq__34155 = G__34163;
chunk__34156 = G__34164;
count__34157 = G__34165;
i__34158 = G__34166;
continue;
} else {
var n = cljs.core.first.call(null,seq__34155__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34167 = cljs.core.next.call(null,seq__34155__$1);
var G__34168 = null;
var G__34169 = (0);
var G__34170 = (0);
seq__34155 = G__34167;
chunk__34156 = G__34168;
count__34157 = G__34169;
i__34158 = G__34170;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34221_34232 = cljs.core.seq.call(null,deps);
var chunk__34222_34233 = null;
var count__34223_34234 = (0);
var i__34224_34235 = (0);
while(true){
if((i__34224_34235 < count__34223_34234)){
var dep_34236 = cljs.core._nth.call(null,chunk__34222_34233,i__34224_34235);
topo_sort_helper_STAR_.call(null,dep_34236,(depth + (1)),state);

var G__34237 = seq__34221_34232;
var G__34238 = chunk__34222_34233;
var G__34239 = count__34223_34234;
var G__34240 = (i__34224_34235 + (1));
seq__34221_34232 = G__34237;
chunk__34222_34233 = G__34238;
count__34223_34234 = G__34239;
i__34224_34235 = G__34240;
continue;
} else {
var temp__4657__auto___34241 = cljs.core.seq.call(null,seq__34221_34232);
if(temp__4657__auto___34241){
var seq__34221_34242__$1 = temp__4657__auto___34241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34221_34242__$1)){
var c__25645__auto___34243 = cljs.core.chunk_first.call(null,seq__34221_34242__$1);
var G__34244 = cljs.core.chunk_rest.call(null,seq__34221_34242__$1);
var G__34245 = c__25645__auto___34243;
var G__34246 = cljs.core.count.call(null,c__25645__auto___34243);
var G__34247 = (0);
seq__34221_34232 = G__34244;
chunk__34222_34233 = G__34245;
count__34223_34234 = G__34246;
i__34224_34235 = G__34247;
continue;
} else {
var dep_34248 = cljs.core.first.call(null,seq__34221_34242__$1);
topo_sort_helper_STAR_.call(null,dep_34248,(depth + (1)),state);

var G__34249 = cljs.core.next.call(null,seq__34221_34242__$1);
var G__34250 = null;
var G__34251 = (0);
var G__34252 = (0);
seq__34221_34232 = G__34249;
chunk__34222_34233 = G__34250;
count__34223_34234 = G__34251;
i__34224_34235 = G__34252;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34225){
var vec__34229 = p__34225;
var seq__34230 = cljs.core.seq.call(null,vec__34229);
var first__34231 = cljs.core.first.call(null,seq__34230);
var seq__34230__$1 = cljs.core.next.call(null,seq__34230);
var x = first__34231;
var xs = seq__34230__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34229,seq__34230,first__34231,seq__34230__$1,x,xs,get_deps__$1){
return (function (p1__34171_SHARP_){
return clojure.set.difference.call(null,p1__34171_SHARP_,x);
});})(vec__34229,seq__34230,first__34231,seq__34230__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34265 = cljs.core.seq.call(null,provides);
var chunk__34266 = null;
var count__34267 = (0);
var i__34268 = (0);
while(true){
if((i__34268 < count__34267)){
var prov = cljs.core._nth.call(null,chunk__34266,i__34268);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34269_34277 = cljs.core.seq.call(null,requires);
var chunk__34270_34278 = null;
var count__34271_34279 = (0);
var i__34272_34280 = (0);
while(true){
if((i__34272_34280 < count__34271_34279)){
var req_34281 = cljs.core._nth.call(null,chunk__34270_34278,i__34272_34280);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34281,prov);

var G__34282 = seq__34269_34277;
var G__34283 = chunk__34270_34278;
var G__34284 = count__34271_34279;
var G__34285 = (i__34272_34280 + (1));
seq__34269_34277 = G__34282;
chunk__34270_34278 = G__34283;
count__34271_34279 = G__34284;
i__34272_34280 = G__34285;
continue;
} else {
var temp__4657__auto___34286 = cljs.core.seq.call(null,seq__34269_34277);
if(temp__4657__auto___34286){
var seq__34269_34287__$1 = temp__4657__auto___34286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34269_34287__$1)){
var c__25645__auto___34288 = cljs.core.chunk_first.call(null,seq__34269_34287__$1);
var G__34289 = cljs.core.chunk_rest.call(null,seq__34269_34287__$1);
var G__34290 = c__25645__auto___34288;
var G__34291 = cljs.core.count.call(null,c__25645__auto___34288);
var G__34292 = (0);
seq__34269_34277 = G__34289;
chunk__34270_34278 = G__34290;
count__34271_34279 = G__34291;
i__34272_34280 = G__34292;
continue;
} else {
var req_34293 = cljs.core.first.call(null,seq__34269_34287__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34293,prov);

var G__34294 = cljs.core.next.call(null,seq__34269_34287__$1);
var G__34295 = null;
var G__34296 = (0);
var G__34297 = (0);
seq__34269_34277 = G__34294;
chunk__34270_34278 = G__34295;
count__34271_34279 = G__34296;
i__34272_34280 = G__34297;
continue;
}
} else {
}
}
break;
}

var G__34298 = seq__34265;
var G__34299 = chunk__34266;
var G__34300 = count__34267;
var G__34301 = (i__34268 + (1));
seq__34265 = G__34298;
chunk__34266 = G__34299;
count__34267 = G__34300;
i__34268 = G__34301;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34265);
if(temp__4657__auto__){
var seq__34265__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34265__$1)){
var c__25645__auto__ = cljs.core.chunk_first.call(null,seq__34265__$1);
var G__34302 = cljs.core.chunk_rest.call(null,seq__34265__$1);
var G__34303 = c__25645__auto__;
var G__34304 = cljs.core.count.call(null,c__25645__auto__);
var G__34305 = (0);
seq__34265 = G__34302;
chunk__34266 = G__34303;
count__34267 = G__34304;
i__34268 = G__34305;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34265__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34273_34306 = cljs.core.seq.call(null,requires);
var chunk__34274_34307 = null;
var count__34275_34308 = (0);
var i__34276_34309 = (0);
while(true){
if((i__34276_34309 < count__34275_34308)){
var req_34310 = cljs.core._nth.call(null,chunk__34274_34307,i__34276_34309);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34310,prov);

var G__34311 = seq__34273_34306;
var G__34312 = chunk__34274_34307;
var G__34313 = count__34275_34308;
var G__34314 = (i__34276_34309 + (1));
seq__34273_34306 = G__34311;
chunk__34274_34307 = G__34312;
count__34275_34308 = G__34313;
i__34276_34309 = G__34314;
continue;
} else {
var temp__4657__auto___34315__$1 = cljs.core.seq.call(null,seq__34273_34306);
if(temp__4657__auto___34315__$1){
var seq__34273_34316__$1 = temp__4657__auto___34315__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34273_34316__$1)){
var c__25645__auto___34317 = cljs.core.chunk_first.call(null,seq__34273_34316__$1);
var G__34318 = cljs.core.chunk_rest.call(null,seq__34273_34316__$1);
var G__34319 = c__25645__auto___34317;
var G__34320 = cljs.core.count.call(null,c__25645__auto___34317);
var G__34321 = (0);
seq__34273_34306 = G__34318;
chunk__34274_34307 = G__34319;
count__34275_34308 = G__34320;
i__34276_34309 = G__34321;
continue;
} else {
var req_34322 = cljs.core.first.call(null,seq__34273_34316__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34322,prov);

var G__34323 = cljs.core.next.call(null,seq__34273_34316__$1);
var G__34324 = null;
var G__34325 = (0);
var G__34326 = (0);
seq__34273_34306 = G__34323;
chunk__34274_34307 = G__34324;
count__34275_34308 = G__34325;
i__34276_34309 = G__34326;
continue;
}
} else {
}
}
break;
}

var G__34327 = cljs.core.next.call(null,seq__34265__$1);
var G__34328 = null;
var G__34329 = (0);
var G__34330 = (0);
seq__34265 = G__34327;
chunk__34266 = G__34328;
count__34267 = G__34329;
i__34268 = G__34330;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__34335_34339 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34336_34340 = null;
var count__34337_34341 = (0);
var i__34338_34342 = (0);
while(true){
if((i__34338_34342 < count__34337_34341)){
var ns_34343 = cljs.core._nth.call(null,chunk__34336_34340,i__34338_34342);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34343);

var G__34344 = seq__34335_34339;
var G__34345 = chunk__34336_34340;
var G__34346 = count__34337_34341;
var G__34347 = (i__34338_34342 + (1));
seq__34335_34339 = G__34344;
chunk__34336_34340 = G__34345;
count__34337_34341 = G__34346;
i__34338_34342 = G__34347;
continue;
} else {
var temp__4657__auto___34348 = cljs.core.seq.call(null,seq__34335_34339);
if(temp__4657__auto___34348){
var seq__34335_34349__$1 = temp__4657__auto___34348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34335_34349__$1)){
var c__25645__auto___34350 = cljs.core.chunk_first.call(null,seq__34335_34349__$1);
var G__34351 = cljs.core.chunk_rest.call(null,seq__34335_34349__$1);
var G__34352 = c__25645__auto___34350;
var G__34353 = cljs.core.count.call(null,c__25645__auto___34350);
var G__34354 = (0);
seq__34335_34339 = G__34351;
chunk__34336_34340 = G__34352;
count__34337_34341 = G__34353;
i__34338_34342 = G__34354;
continue;
} else {
var ns_34355 = cljs.core.first.call(null,seq__34335_34349__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34355);

var G__34356 = cljs.core.next.call(null,seq__34335_34349__$1);
var G__34357 = null;
var G__34358 = (0);
var G__34359 = (0);
seq__34335_34339 = G__34356;
chunk__34336_34340 = G__34357;
count__34337_34341 = G__34358;
i__34338_34342 = G__34359;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24834__auto__ = goog.require__;
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__34360__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34361__i = 0, G__34361__a = new Array(arguments.length -  0);
while (G__34361__i < G__34361__a.length) {G__34361__a[G__34361__i] = arguments[G__34361__i + 0]; ++G__34361__i;}
  args = new cljs.core.IndexedSeq(G__34361__a,0);
} 
return G__34360__delegate.call(this,args);};
G__34360.cljs$lang$maxFixedArity = 0;
G__34360.cljs$lang$applyTo = (function (arglist__34362){
var args = cljs.core.seq(arglist__34362);
return G__34360__delegate(args);
});
G__34360.cljs$core$IFn$_invoke$arity$variadic = G__34360__delegate;
return G__34360;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34363 = cljs.core._EQ_;
var expr__34364 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34363.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34364))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34363,expr__34364){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34363,expr__34364))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34363,expr__34364){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34366){if((e34366 instanceof Error)){
var e = e34366;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34366;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34363,expr__34364))
} else {
if(cljs.core.truth_(pred__34363.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34364))){
return ((function (pred__34363,expr__34364){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34363,expr__34364){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34363,expr__34364))
);

return deferred.addErrback(((function (deferred,pred__34363,expr__34364){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34363,expr__34364))
);
});
;})(pred__34363,expr__34364))
} else {
if(cljs.core.truth_(pred__34363.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34364))){
return ((function (pred__34363,expr__34364){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34367){if((e34367 instanceof Error)){
var e = e34367;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34367;

}
}})());
});
;})(pred__34363,expr__34364))
} else {
return ((function (pred__34363,expr__34364){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34363,expr__34364))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34368,callback){
var map__34371 = p__34368;
var map__34371__$1 = ((((!((map__34371 == null)))?((((map__34371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34371):map__34371);
var file_msg = map__34371__$1;
var request_url = cljs.core.get.call(null,map__34371__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34371,map__34371__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34371,map__34371__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__29907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto__){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto__){
return (function (state_34395){
var state_val_34396 = (state_34395[(1)]);
if((state_val_34396 === (7))){
var inst_34391 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
var statearr_34397_34417 = state_34395__$1;
(statearr_34397_34417[(2)] = inst_34391);

(statearr_34397_34417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (1))){
var state_34395__$1 = state_34395;
var statearr_34398_34418 = state_34395__$1;
(statearr_34398_34418[(2)] = null);

(statearr_34398_34418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (4))){
var inst_34375 = (state_34395[(7)]);
var inst_34375__$1 = (state_34395[(2)]);
var state_34395__$1 = (function (){var statearr_34399 = state_34395;
(statearr_34399[(7)] = inst_34375__$1);

return statearr_34399;
})();
if(cljs.core.truth_(inst_34375__$1)){
var statearr_34400_34419 = state_34395__$1;
(statearr_34400_34419[(1)] = (5));

} else {
var statearr_34401_34420 = state_34395__$1;
(statearr_34401_34420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (6))){
var state_34395__$1 = state_34395;
var statearr_34402_34421 = state_34395__$1;
(statearr_34402_34421[(2)] = null);

(statearr_34402_34421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (3))){
var inst_34393 = (state_34395[(2)]);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34395__$1,inst_34393);
} else {
if((state_val_34396 === (2))){
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34395__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34396 === (11))){
var inst_34387 = (state_34395[(2)]);
var state_34395__$1 = (function (){var statearr_34403 = state_34395;
(statearr_34403[(8)] = inst_34387);

return statearr_34403;
})();
var statearr_34404_34422 = state_34395__$1;
(statearr_34404_34422[(2)] = null);

(statearr_34404_34422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (9))){
var inst_34381 = (state_34395[(9)]);
var inst_34379 = (state_34395[(10)]);
var inst_34383 = inst_34381.call(null,inst_34379);
var state_34395__$1 = state_34395;
var statearr_34405_34423 = state_34395__$1;
(statearr_34405_34423[(2)] = inst_34383);

(statearr_34405_34423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (5))){
var inst_34375 = (state_34395[(7)]);
var inst_34377 = figwheel.client.file_reloading.blocking_load.call(null,inst_34375);
var state_34395__$1 = state_34395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34395__$1,(8),inst_34377);
} else {
if((state_val_34396 === (10))){
var inst_34379 = (state_34395[(10)]);
var inst_34385 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34379);
var state_34395__$1 = state_34395;
var statearr_34406_34424 = state_34395__$1;
(statearr_34406_34424[(2)] = inst_34385);

(statearr_34406_34424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34396 === (8))){
var inst_34381 = (state_34395[(9)]);
var inst_34375 = (state_34395[(7)]);
var inst_34379 = (state_34395[(2)]);
var inst_34380 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34381__$1 = cljs.core.get.call(null,inst_34380,inst_34375);
var state_34395__$1 = (function (){var statearr_34407 = state_34395;
(statearr_34407[(9)] = inst_34381__$1);

(statearr_34407[(10)] = inst_34379);

return statearr_34407;
})();
if(cljs.core.truth_(inst_34381__$1)){
var statearr_34408_34425 = state_34395__$1;
(statearr_34408_34425[(1)] = (9));

} else {
var statearr_34409_34426 = state_34395__$1;
(statearr_34409_34426[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29907__auto__))
;
return ((function (switch__29795__auto__,c__29907__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29796__auto__ = null;
var figwheel$client$file_reloading$state_machine__29796__auto____0 = (function (){
var statearr_34413 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34413[(0)] = figwheel$client$file_reloading$state_machine__29796__auto__);

(statearr_34413[(1)] = (1));

return statearr_34413;
});
var figwheel$client$file_reloading$state_machine__29796__auto____1 = (function (state_34395){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_34395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e34414){if((e34414 instanceof Object)){
var ex__29799__auto__ = e34414;
var statearr_34415_34427 = state_34395;
(statearr_34415_34427[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34428 = state_34395;
state_34395 = G__34428;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29796__auto__ = function(state_34395){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29796__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29796__auto____1.call(this,state_34395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29796__auto____0;
figwheel$client$file_reloading$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29796__auto____1;
return figwheel$client$file_reloading$state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto__))
})();
var state__29909__auto__ = (function (){var statearr_34416 = f__29908__auto__.call(null);
(statearr_34416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto__);

return statearr_34416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto__))
);

return c__29907__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34429,callback){
var map__34432 = p__34429;
var map__34432__$1 = ((((!((map__34432 == null)))?((((map__34432.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34432.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34432):map__34432);
var file_msg = map__34432__$1;
var namespace = cljs.core.get.call(null,map__34432__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34432,map__34432__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34432,map__34432__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34434){
var map__34437 = p__34434;
var map__34437__$1 = ((((!((map__34437 == null)))?((((map__34437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34437):map__34437);
var file_msg = map__34437__$1;
var namespace = cljs.core.get.call(null,map__34437__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34439){
var map__34442 = p__34439;
var map__34442__$1 = ((((!((map__34442 == null)))?((((map__34442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34442):map__34442);
var file_msg = map__34442__$1;
var namespace = cljs.core.get.call(null,map__34442__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24822__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__24822__auto__){
var or__24834__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
var or__24834__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24834__auto____$1)){
return or__24834__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24822__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34444,callback){
var map__34447 = p__34444;
var map__34447__$1 = ((((!((map__34447 == null)))?((((map__34447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34447):map__34447);
var file_msg = map__34447__$1;
var request_url = cljs.core.get.call(null,map__34447__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34447__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__29907__auto___34551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto___34551,out){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto___34551,out){
return (function (state_34533){
var state_val_34534 = (state_34533[(1)]);
if((state_val_34534 === (1))){
var inst_34507 = cljs.core.seq.call(null,files);
var inst_34508 = cljs.core.first.call(null,inst_34507);
var inst_34509 = cljs.core.next.call(null,inst_34507);
var inst_34510 = files;
var state_34533__$1 = (function (){var statearr_34535 = state_34533;
(statearr_34535[(7)] = inst_34509);

(statearr_34535[(8)] = inst_34510);

(statearr_34535[(9)] = inst_34508);

return statearr_34535;
})();
var statearr_34536_34552 = state_34533__$1;
(statearr_34536_34552[(2)] = null);

(statearr_34536_34552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (2))){
var inst_34510 = (state_34533[(8)]);
var inst_34516 = (state_34533[(10)]);
var inst_34515 = cljs.core.seq.call(null,inst_34510);
var inst_34516__$1 = cljs.core.first.call(null,inst_34515);
var inst_34517 = cljs.core.next.call(null,inst_34515);
var inst_34518 = (inst_34516__$1 == null);
var inst_34519 = cljs.core.not.call(null,inst_34518);
var state_34533__$1 = (function (){var statearr_34537 = state_34533;
(statearr_34537[(11)] = inst_34517);

(statearr_34537[(10)] = inst_34516__$1);

return statearr_34537;
})();
if(inst_34519){
var statearr_34538_34553 = state_34533__$1;
(statearr_34538_34553[(1)] = (4));

} else {
var statearr_34539_34554 = state_34533__$1;
(statearr_34539_34554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (3))){
var inst_34531 = (state_34533[(2)]);
var state_34533__$1 = state_34533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34533__$1,inst_34531);
} else {
if((state_val_34534 === (4))){
var inst_34516 = (state_34533[(10)]);
var inst_34521 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34516);
var state_34533__$1 = state_34533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34533__$1,(7),inst_34521);
} else {
if((state_val_34534 === (5))){
var inst_34527 = cljs.core.async.close_BANG_.call(null,out);
var state_34533__$1 = state_34533;
var statearr_34540_34555 = state_34533__$1;
(statearr_34540_34555[(2)] = inst_34527);

(statearr_34540_34555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (6))){
var inst_34529 = (state_34533[(2)]);
var state_34533__$1 = state_34533;
var statearr_34541_34556 = state_34533__$1;
(statearr_34541_34556[(2)] = inst_34529);

(statearr_34541_34556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34534 === (7))){
var inst_34517 = (state_34533[(11)]);
var inst_34523 = (state_34533[(2)]);
var inst_34524 = cljs.core.async.put_BANG_.call(null,out,inst_34523);
var inst_34510 = inst_34517;
var state_34533__$1 = (function (){var statearr_34542 = state_34533;
(statearr_34542[(12)] = inst_34524);

(statearr_34542[(8)] = inst_34510);

return statearr_34542;
})();
var statearr_34543_34557 = state_34533__$1;
(statearr_34543_34557[(2)] = null);

(statearr_34543_34557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__29907__auto___34551,out))
;
return ((function (switch__29795__auto__,c__29907__auto___34551,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29796__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29796__auto____0 = (function (){
var statearr_34547 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34547[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29796__auto__);

(statearr_34547[(1)] = (1));

return statearr_34547;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29796__auto____1 = (function (state_34533){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_34533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e34548){if((e34548 instanceof Object)){
var ex__29799__auto__ = e34548;
var statearr_34549_34558 = state_34533;
(statearr_34549_34558[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34559 = state_34533;
state_34533 = G__34559;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29796__auto__ = function(state_34533){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29796__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29796__auto____1.call(this,state_34533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29796__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29796__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto___34551,out))
})();
var state__29909__auto__ = (function (){var statearr_34550 = f__29908__auto__.call(null);
(statearr_34550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___34551);

return statearr_34550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto___34551,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34560,opts){
var map__34564 = p__34560;
var map__34564__$1 = ((((!((map__34564 == null)))?((((map__34564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34564):map__34564);
var eval_body__$1 = cljs.core.get.call(null,map__34564__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34564__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24822__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24822__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24822__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34566){var e = e34566;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34567_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34567_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__34576){
var vec__34577 = p__34576;
var k = cljs.core.nth.call(null,vec__34577,(0),null);
var v = cljs.core.nth.call(null,vec__34577,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34580){
var vec__34581 = p__34580;
var k = cljs.core.nth.call(null,vec__34581,(0),null);
var v = cljs.core.nth.call(null,vec__34581,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34587,p__34588){
var map__34835 = p__34587;
var map__34835__$1 = ((((!((map__34835 == null)))?((((map__34835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34835):map__34835);
var opts = map__34835__$1;
var before_jsload = cljs.core.get.call(null,map__34835__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34835__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34835__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34836 = p__34588;
var map__34836__$1 = ((((!((map__34836 == null)))?((((map__34836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34836):map__34836);
var msg = map__34836__$1;
var files = cljs.core.get.call(null,map__34836__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34836__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34836__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34989){
var state_val_34990 = (state_34989[(1)]);
if((state_val_34990 === (7))){
var inst_34852 = (state_34989[(7)]);
var inst_34851 = (state_34989[(8)]);
var inst_34853 = (state_34989[(9)]);
var inst_34850 = (state_34989[(10)]);
var inst_34858 = cljs.core._nth.call(null,inst_34851,inst_34853);
var inst_34859 = figwheel.client.file_reloading.eval_body.call(null,inst_34858,opts);
var inst_34860 = (inst_34853 + (1));
var tmp34991 = inst_34852;
var tmp34992 = inst_34851;
var tmp34993 = inst_34850;
var inst_34850__$1 = tmp34993;
var inst_34851__$1 = tmp34992;
var inst_34852__$1 = tmp34991;
var inst_34853__$1 = inst_34860;
var state_34989__$1 = (function (){var statearr_34994 = state_34989;
(statearr_34994[(7)] = inst_34852__$1);

(statearr_34994[(11)] = inst_34859);

(statearr_34994[(8)] = inst_34851__$1);

(statearr_34994[(9)] = inst_34853__$1);

(statearr_34994[(10)] = inst_34850__$1);

return statearr_34994;
})();
var statearr_34995_35081 = state_34989__$1;
(statearr_34995_35081[(2)] = null);

(statearr_34995_35081[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (20))){
var inst_34893 = (state_34989[(12)]);
var inst_34901 = figwheel.client.file_reloading.sort_files.call(null,inst_34893);
var state_34989__$1 = state_34989;
var statearr_34996_35082 = state_34989__$1;
(statearr_34996_35082[(2)] = inst_34901);

(statearr_34996_35082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (27))){
var state_34989__$1 = state_34989;
var statearr_34997_35083 = state_34989__$1;
(statearr_34997_35083[(2)] = null);

(statearr_34997_35083[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (1))){
var inst_34842 = (state_34989[(13)]);
var inst_34839 = before_jsload.call(null,files);
var inst_34840 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34841 = (function (){return ((function (inst_34842,inst_34839,inst_34840,state_val_34990,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34584_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34584_SHARP_);
});
;})(inst_34842,inst_34839,inst_34840,state_val_34990,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34842__$1 = cljs.core.filter.call(null,inst_34841,files);
var inst_34843 = cljs.core.not_empty.call(null,inst_34842__$1);
var state_34989__$1 = (function (){var statearr_34998 = state_34989;
(statearr_34998[(14)] = inst_34840);

(statearr_34998[(15)] = inst_34839);

(statearr_34998[(13)] = inst_34842__$1);

return statearr_34998;
})();
if(cljs.core.truth_(inst_34843)){
var statearr_34999_35084 = state_34989__$1;
(statearr_34999_35084[(1)] = (2));

} else {
var statearr_35000_35085 = state_34989__$1;
(statearr_35000_35085[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (24))){
var state_34989__$1 = state_34989;
var statearr_35001_35086 = state_34989__$1;
(statearr_35001_35086[(2)] = null);

(statearr_35001_35086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (39))){
var inst_34943 = (state_34989[(16)]);
var state_34989__$1 = state_34989;
var statearr_35002_35087 = state_34989__$1;
(statearr_35002_35087[(2)] = inst_34943);

(statearr_35002_35087[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (46))){
var inst_34984 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_35003_35088 = state_34989__$1;
(statearr_35003_35088[(2)] = inst_34984);

(statearr_35003_35088[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (4))){
var inst_34887 = (state_34989[(2)]);
var inst_34888 = cljs.core.List.EMPTY;
var inst_34889 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34888);
var inst_34890 = (function (){return ((function (inst_34887,inst_34888,inst_34889,state_val_34990,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34585_SHARP_){
var and__24822__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34585_SHARP_);
if(cljs.core.truth_(and__24822__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34585_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34585_SHARP_)));
} else {
return and__24822__auto__;
}
});
;})(inst_34887,inst_34888,inst_34889,state_val_34990,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34891 = cljs.core.filter.call(null,inst_34890,files);
var inst_34892 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34893 = cljs.core.concat.call(null,inst_34891,inst_34892);
var state_34989__$1 = (function (){var statearr_35004 = state_34989;
(statearr_35004[(12)] = inst_34893);

(statearr_35004[(17)] = inst_34887);

(statearr_35004[(18)] = inst_34889);

return statearr_35004;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35005_35089 = state_34989__$1;
(statearr_35005_35089[(1)] = (16));

} else {
var statearr_35006_35090 = state_34989__$1;
(statearr_35006_35090[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (15))){
var inst_34877 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_35007_35091 = state_34989__$1;
(statearr_35007_35091[(2)] = inst_34877);

(statearr_35007_35091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (21))){
var inst_34903 = (state_34989[(19)]);
var inst_34903__$1 = (state_34989[(2)]);
var inst_34904 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34903__$1);
var state_34989__$1 = (function (){var statearr_35008 = state_34989;
(statearr_35008[(19)] = inst_34903__$1);

return statearr_35008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34989__$1,(22),inst_34904);
} else {
if((state_val_34990 === (31))){
var inst_34987 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34989__$1,inst_34987);
} else {
if((state_val_34990 === (32))){
var inst_34943 = (state_34989[(16)]);
var inst_34948 = inst_34943.cljs$lang$protocol_mask$partition0$;
var inst_34949 = (inst_34948 & (64));
var inst_34950 = inst_34943.cljs$core$ISeq$;
var inst_34951 = (inst_34949) || (inst_34950);
var state_34989__$1 = state_34989;
if(cljs.core.truth_(inst_34951)){
var statearr_35009_35092 = state_34989__$1;
(statearr_35009_35092[(1)] = (35));

} else {
var statearr_35010_35093 = state_34989__$1;
(statearr_35010_35093[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (40))){
var inst_34964 = (state_34989[(20)]);
var inst_34963 = (state_34989[(2)]);
var inst_34964__$1 = cljs.core.get.call(null,inst_34963,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34965 = cljs.core.get.call(null,inst_34963,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34966 = cljs.core.not_empty.call(null,inst_34964__$1);
var state_34989__$1 = (function (){var statearr_35011 = state_34989;
(statearr_35011[(20)] = inst_34964__$1);

(statearr_35011[(21)] = inst_34965);

return statearr_35011;
})();
if(cljs.core.truth_(inst_34966)){
var statearr_35012_35094 = state_34989__$1;
(statearr_35012_35094[(1)] = (41));

} else {
var statearr_35013_35095 = state_34989__$1;
(statearr_35013_35095[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (33))){
var state_34989__$1 = state_34989;
var statearr_35014_35096 = state_34989__$1;
(statearr_35014_35096[(2)] = false);

(statearr_35014_35096[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (13))){
var inst_34863 = (state_34989[(22)]);
var inst_34867 = cljs.core.chunk_first.call(null,inst_34863);
var inst_34868 = cljs.core.chunk_rest.call(null,inst_34863);
var inst_34869 = cljs.core.count.call(null,inst_34867);
var inst_34850 = inst_34868;
var inst_34851 = inst_34867;
var inst_34852 = inst_34869;
var inst_34853 = (0);
var state_34989__$1 = (function (){var statearr_35015 = state_34989;
(statearr_35015[(7)] = inst_34852);

(statearr_35015[(8)] = inst_34851);

(statearr_35015[(9)] = inst_34853);

(statearr_35015[(10)] = inst_34850);

return statearr_35015;
})();
var statearr_35016_35097 = state_34989__$1;
(statearr_35016_35097[(2)] = null);

(statearr_35016_35097[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (22))){
var inst_34906 = (state_34989[(23)]);
var inst_34903 = (state_34989[(19)]);
var inst_34907 = (state_34989[(24)]);
var inst_34911 = (state_34989[(25)]);
var inst_34906__$1 = (state_34989[(2)]);
var inst_34907__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34906__$1);
var inst_34908 = (function (){var all_files = inst_34903;
var res_SINGLEQUOTE_ = inst_34906__$1;
var res = inst_34907__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34906,inst_34903,inst_34907,inst_34911,inst_34906__$1,inst_34907__$1,state_val_34990,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34586_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34586_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34906,inst_34903,inst_34907,inst_34911,inst_34906__$1,inst_34907__$1,state_val_34990,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34909 = cljs.core.filter.call(null,inst_34908,inst_34906__$1);
var inst_34910 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34911__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34910);
var inst_34912 = cljs.core.not_empty.call(null,inst_34911__$1);
var state_34989__$1 = (function (){var statearr_35017 = state_34989;
(statearr_35017[(26)] = inst_34909);

(statearr_35017[(23)] = inst_34906__$1);

(statearr_35017[(24)] = inst_34907__$1);

(statearr_35017[(25)] = inst_34911__$1);

return statearr_35017;
})();
if(cljs.core.truth_(inst_34912)){
var statearr_35018_35098 = state_34989__$1;
(statearr_35018_35098[(1)] = (23));

} else {
var statearr_35019_35099 = state_34989__$1;
(statearr_35019_35099[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (36))){
var state_34989__$1 = state_34989;
var statearr_35020_35100 = state_34989__$1;
(statearr_35020_35100[(2)] = false);

(statearr_35020_35100[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (41))){
var inst_34964 = (state_34989[(20)]);
var inst_34968 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34969 = cljs.core.map.call(null,inst_34968,inst_34964);
var inst_34970 = cljs.core.pr_str.call(null,inst_34969);
var inst_34971 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34970)].join('');
var inst_34972 = figwheel.client.utils.log.call(null,inst_34971);
var state_34989__$1 = state_34989;
var statearr_35021_35101 = state_34989__$1;
(statearr_35021_35101[(2)] = inst_34972);

(statearr_35021_35101[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (43))){
var inst_34965 = (state_34989[(21)]);
var inst_34975 = (state_34989[(2)]);
var inst_34976 = cljs.core.not_empty.call(null,inst_34965);
var state_34989__$1 = (function (){var statearr_35022 = state_34989;
(statearr_35022[(27)] = inst_34975);

return statearr_35022;
})();
if(cljs.core.truth_(inst_34976)){
var statearr_35023_35102 = state_34989__$1;
(statearr_35023_35102[(1)] = (44));

} else {
var statearr_35024_35103 = state_34989__$1;
(statearr_35024_35103[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (29))){
var inst_34909 = (state_34989[(26)]);
var inst_34906 = (state_34989[(23)]);
var inst_34903 = (state_34989[(19)]);
var inst_34907 = (state_34989[(24)]);
var inst_34943 = (state_34989[(16)]);
var inst_34911 = (state_34989[(25)]);
var inst_34939 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34942 = (function (){var all_files = inst_34903;
var res_SINGLEQUOTE_ = inst_34906;
var res = inst_34907;
var files_not_loaded = inst_34909;
var dependencies_that_loaded = inst_34911;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34909,inst_34906,inst_34903,inst_34907,inst_34943,inst_34911,inst_34939,state_val_34990,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34941){
var map__35025 = p__34941;
var map__35025__$1 = ((((!((map__35025 == null)))?((((map__35025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35025):map__35025);
var namespace = cljs.core.get.call(null,map__35025__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34909,inst_34906,inst_34903,inst_34907,inst_34943,inst_34911,inst_34939,state_val_34990,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34943__$1 = cljs.core.group_by.call(null,inst_34942,inst_34909);
var inst_34945 = (inst_34943__$1 == null);
var inst_34946 = cljs.core.not.call(null,inst_34945);
var state_34989__$1 = (function (){var statearr_35027 = state_34989;
(statearr_35027[(16)] = inst_34943__$1);

(statearr_35027[(28)] = inst_34939);

return statearr_35027;
})();
if(inst_34946){
var statearr_35028_35104 = state_34989__$1;
(statearr_35028_35104[(1)] = (32));

} else {
var statearr_35029_35105 = state_34989__$1;
(statearr_35029_35105[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (44))){
var inst_34965 = (state_34989[(21)]);
var inst_34978 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34965);
var inst_34979 = cljs.core.pr_str.call(null,inst_34978);
var inst_34980 = [cljs.core.str("not required: "),cljs.core.str(inst_34979)].join('');
var inst_34981 = figwheel.client.utils.log.call(null,inst_34980);
var state_34989__$1 = state_34989;
var statearr_35030_35106 = state_34989__$1;
(statearr_35030_35106[(2)] = inst_34981);

(statearr_35030_35106[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (6))){
var inst_34884 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_35031_35107 = state_34989__$1;
(statearr_35031_35107[(2)] = inst_34884);

(statearr_35031_35107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (28))){
var inst_34909 = (state_34989[(26)]);
var inst_34936 = (state_34989[(2)]);
var inst_34937 = cljs.core.not_empty.call(null,inst_34909);
var state_34989__$1 = (function (){var statearr_35032 = state_34989;
(statearr_35032[(29)] = inst_34936);

return statearr_35032;
})();
if(cljs.core.truth_(inst_34937)){
var statearr_35033_35108 = state_34989__$1;
(statearr_35033_35108[(1)] = (29));

} else {
var statearr_35034_35109 = state_34989__$1;
(statearr_35034_35109[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (25))){
var inst_34907 = (state_34989[(24)]);
var inst_34923 = (state_34989[(2)]);
var inst_34924 = cljs.core.not_empty.call(null,inst_34907);
var state_34989__$1 = (function (){var statearr_35035 = state_34989;
(statearr_35035[(30)] = inst_34923);

return statearr_35035;
})();
if(cljs.core.truth_(inst_34924)){
var statearr_35036_35110 = state_34989__$1;
(statearr_35036_35110[(1)] = (26));

} else {
var statearr_35037_35111 = state_34989__$1;
(statearr_35037_35111[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (34))){
var inst_34958 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
if(cljs.core.truth_(inst_34958)){
var statearr_35038_35112 = state_34989__$1;
(statearr_35038_35112[(1)] = (38));

} else {
var statearr_35039_35113 = state_34989__$1;
(statearr_35039_35113[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (17))){
var state_34989__$1 = state_34989;
var statearr_35040_35114 = state_34989__$1;
(statearr_35040_35114[(2)] = recompile_dependents);

(statearr_35040_35114[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (3))){
var state_34989__$1 = state_34989;
var statearr_35041_35115 = state_34989__$1;
(statearr_35041_35115[(2)] = null);

(statearr_35041_35115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (12))){
var inst_34880 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_35042_35116 = state_34989__$1;
(statearr_35042_35116[(2)] = inst_34880);

(statearr_35042_35116[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (2))){
var inst_34842 = (state_34989[(13)]);
var inst_34849 = cljs.core.seq.call(null,inst_34842);
var inst_34850 = inst_34849;
var inst_34851 = null;
var inst_34852 = (0);
var inst_34853 = (0);
var state_34989__$1 = (function (){var statearr_35043 = state_34989;
(statearr_35043[(7)] = inst_34852);

(statearr_35043[(8)] = inst_34851);

(statearr_35043[(9)] = inst_34853);

(statearr_35043[(10)] = inst_34850);

return statearr_35043;
})();
var statearr_35044_35117 = state_34989__$1;
(statearr_35044_35117[(2)] = null);

(statearr_35044_35117[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (23))){
var inst_34909 = (state_34989[(26)]);
var inst_34906 = (state_34989[(23)]);
var inst_34903 = (state_34989[(19)]);
var inst_34907 = (state_34989[(24)]);
var inst_34911 = (state_34989[(25)]);
var inst_34914 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34916 = (function (){var all_files = inst_34903;
var res_SINGLEQUOTE_ = inst_34906;
var res = inst_34907;
var files_not_loaded = inst_34909;
var dependencies_that_loaded = inst_34911;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34909,inst_34906,inst_34903,inst_34907,inst_34911,inst_34914,state_val_34990,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34915){
var map__35045 = p__34915;
var map__35045__$1 = ((((!((map__35045 == null)))?((((map__35045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35045):map__35045);
var request_url = cljs.core.get.call(null,map__35045__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34909,inst_34906,inst_34903,inst_34907,inst_34911,inst_34914,state_val_34990,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34917 = cljs.core.reverse.call(null,inst_34911);
var inst_34918 = cljs.core.map.call(null,inst_34916,inst_34917);
var inst_34919 = cljs.core.pr_str.call(null,inst_34918);
var inst_34920 = figwheel.client.utils.log.call(null,inst_34919);
var state_34989__$1 = (function (){var statearr_35047 = state_34989;
(statearr_35047[(31)] = inst_34914);

return statearr_35047;
})();
var statearr_35048_35118 = state_34989__$1;
(statearr_35048_35118[(2)] = inst_34920);

(statearr_35048_35118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (35))){
var state_34989__$1 = state_34989;
var statearr_35049_35119 = state_34989__$1;
(statearr_35049_35119[(2)] = true);

(statearr_35049_35119[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (19))){
var inst_34893 = (state_34989[(12)]);
var inst_34899 = figwheel.client.file_reloading.expand_files.call(null,inst_34893);
var state_34989__$1 = state_34989;
var statearr_35050_35120 = state_34989__$1;
(statearr_35050_35120[(2)] = inst_34899);

(statearr_35050_35120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (11))){
var state_34989__$1 = state_34989;
var statearr_35051_35121 = state_34989__$1;
(statearr_35051_35121[(2)] = null);

(statearr_35051_35121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (9))){
var inst_34882 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_35052_35122 = state_34989__$1;
(statearr_35052_35122[(2)] = inst_34882);

(statearr_35052_35122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (5))){
var inst_34852 = (state_34989[(7)]);
var inst_34853 = (state_34989[(9)]);
var inst_34855 = (inst_34853 < inst_34852);
var inst_34856 = inst_34855;
var state_34989__$1 = state_34989;
if(cljs.core.truth_(inst_34856)){
var statearr_35053_35123 = state_34989__$1;
(statearr_35053_35123[(1)] = (7));

} else {
var statearr_35054_35124 = state_34989__$1;
(statearr_35054_35124[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (14))){
var inst_34863 = (state_34989[(22)]);
var inst_34872 = cljs.core.first.call(null,inst_34863);
var inst_34873 = figwheel.client.file_reloading.eval_body.call(null,inst_34872,opts);
var inst_34874 = cljs.core.next.call(null,inst_34863);
var inst_34850 = inst_34874;
var inst_34851 = null;
var inst_34852 = (0);
var inst_34853 = (0);
var state_34989__$1 = (function (){var statearr_35055 = state_34989;
(statearr_35055[(32)] = inst_34873);

(statearr_35055[(7)] = inst_34852);

(statearr_35055[(8)] = inst_34851);

(statearr_35055[(9)] = inst_34853);

(statearr_35055[(10)] = inst_34850);

return statearr_35055;
})();
var statearr_35056_35125 = state_34989__$1;
(statearr_35056_35125[(2)] = null);

(statearr_35056_35125[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (45))){
var state_34989__$1 = state_34989;
var statearr_35057_35126 = state_34989__$1;
(statearr_35057_35126[(2)] = null);

(statearr_35057_35126[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (26))){
var inst_34909 = (state_34989[(26)]);
var inst_34906 = (state_34989[(23)]);
var inst_34903 = (state_34989[(19)]);
var inst_34907 = (state_34989[(24)]);
var inst_34911 = (state_34989[(25)]);
var inst_34926 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34928 = (function (){var all_files = inst_34903;
var res_SINGLEQUOTE_ = inst_34906;
var res = inst_34907;
var files_not_loaded = inst_34909;
var dependencies_that_loaded = inst_34911;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34909,inst_34906,inst_34903,inst_34907,inst_34911,inst_34926,state_val_34990,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34927){
var map__35058 = p__34927;
var map__35058__$1 = ((((!((map__35058 == null)))?((((map__35058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35058):map__35058);
var namespace = cljs.core.get.call(null,map__35058__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35058__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34909,inst_34906,inst_34903,inst_34907,inst_34911,inst_34926,state_val_34990,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34929 = cljs.core.map.call(null,inst_34928,inst_34907);
var inst_34930 = cljs.core.pr_str.call(null,inst_34929);
var inst_34931 = figwheel.client.utils.log.call(null,inst_34930);
var inst_34932 = (function (){var all_files = inst_34903;
var res_SINGLEQUOTE_ = inst_34906;
var res = inst_34907;
var files_not_loaded = inst_34909;
var dependencies_that_loaded = inst_34911;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34909,inst_34906,inst_34903,inst_34907,inst_34911,inst_34926,inst_34928,inst_34929,inst_34930,inst_34931,state_val_34990,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34909,inst_34906,inst_34903,inst_34907,inst_34911,inst_34926,inst_34928,inst_34929,inst_34930,inst_34931,state_val_34990,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34933 = setTimeout(inst_34932,(10));
var state_34989__$1 = (function (){var statearr_35060 = state_34989;
(statearr_35060[(33)] = inst_34931);

(statearr_35060[(34)] = inst_34926);

return statearr_35060;
})();
var statearr_35061_35127 = state_34989__$1;
(statearr_35061_35127[(2)] = inst_34933);

(statearr_35061_35127[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (16))){
var state_34989__$1 = state_34989;
var statearr_35062_35128 = state_34989__$1;
(statearr_35062_35128[(2)] = reload_dependents);

(statearr_35062_35128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (38))){
var inst_34943 = (state_34989[(16)]);
var inst_34960 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34943);
var state_34989__$1 = state_34989;
var statearr_35063_35129 = state_34989__$1;
(statearr_35063_35129[(2)] = inst_34960);

(statearr_35063_35129[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (30))){
var state_34989__$1 = state_34989;
var statearr_35064_35130 = state_34989__$1;
(statearr_35064_35130[(2)] = null);

(statearr_35064_35130[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (10))){
var inst_34863 = (state_34989[(22)]);
var inst_34865 = cljs.core.chunked_seq_QMARK_.call(null,inst_34863);
var state_34989__$1 = state_34989;
if(inst_34865){
var statearr_35065_35131 = state_34989__$1;
(statearr_35065_35131[(1)] = (13));

} else {
var statearr_35066_35132 = state_34989__$1;
(statearr_35066_35132[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (18))){
var inst_34897 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
if(cljs.core.truth_(inst_34897)){
var statearr_35067_35133 = state_34989__$1;
(statearr_35067_35133[(1)] = (19));

} else {
var statearr_35068_35134 = state_34989__$1;
(statearr_35068_35134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (42))){
var state_34989__$1 = state_34989;
var statearr_35069_35135 = state_34989__$1;
(statearr_35069_35135[(2)] = null);

(statearr_35069_35135[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (37))){
var inst_34955 = (state_34989[(2)]);
var state_34989__$1 = state_34989;
var statearr_35070_35136 = state_34989__$1;
(statearr_35070_35136[(2)] = inst_34955);

(statearr_35070_35136[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34990 === (8))){
var inst_34863 = (state_34989[(22)]);
var inst_34850 = (state_34989[(10)]);
var inst_34863__$1 = cljs.core.seq.call(null,inst_34850);
var state_34989__$1 = (function (){var statearr_35071 = state_34989;
(statearr_35071[(22)] = inst_34863__$1);

return statearr_35071;
})();
if(inst_34863__$1){
var statearr_35072_35137 = state_34989__$1;
(statearr_35072_35137[(1)] = (10));

} else {
var statearr_35073_35138 = state_34989__$1;
(statearr_35073_35138[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29795__auto__,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29796__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29796__auto____0 = (function (){
var statearr_35077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35077[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29796__auto__);

(statearr_35077[(1)] = (1));

return statearr_35077;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29796__auto____1 = (function (state_34989){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_34989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e35078){if((e35078 instanceof Object)){
var ex__29799__auto__ = e35078;
var statearr_35079_35139 = state_34989;
(statearr_35079_35139[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35140 = state_34989;
state_34989 = G__35140;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29796__auto__ = function(state_34989){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29796__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29796__auto____1.call(this,state_34989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29796__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29796__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29909__auto__ = (function (){var statearr_35080 = f__29908__auto__.call(null);
(statearr_35080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto__);

return statearr_35080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto__,map__34835,map__34835__$1,opts,before_jsload,on_jsload,reload_dependents,map__34836,map__34836__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29907__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35143,link){
var map__35146 = p__35143;
var map__35146__$1 = ((((!((map__35146 == null)))?((((map__35146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35146):map__35146);
var file = cljs.core.get.call(null,map__35146__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35146,map__35146__$1,file){
return (function (p1__35141_SHARP_,p2__35142_SHARP_){
if(cljs.core._EQ_.call(null,p1__35141_SHARP_,p2__35142_SHARP_)){
return p1__35141_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35146,map__35146__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35152){
var map__35153 = p__35152;
var map__35153__$1 = ((((!((map__35153 == null)))?((((map__35153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35153):map__35153);
var match_length = cljs.core.get.call(null,map__35153__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35153__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35148_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35148_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35155_SHARP_,p2__35156_SHARP_){
return cljs.core.assoc.call(null,p1__35155_SHARP_,cljs.core.get.call(null,p2__35156_SHARP_,key),p2__35156_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35157 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35157);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35157);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35158,p__35159){
var map__35164 = p__35158;
var map__35164__$1 = ((((!((map__35164 == null)))?((((map__35164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35164):map__35164);
var on_cssload = cljs.core.get.call(null,map__35164__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35165 = p__35159;
var map__35165__$1 = ((((!((map__35165 == null)))?((((map__35165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35165):map__35165);
var files_msg = map__35165__$1;
var files = cljs.core.get.call(null,map__35165__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1513976122828