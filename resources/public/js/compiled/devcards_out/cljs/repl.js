// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36485){
var map__36510 = p__36485;
var map__36510__$1 = ((((!((map__36510 == null)))?((((map__36510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36510):map__36510);
var m = map__36510__$1;
var n = cljs.core.get.call(null,map__36510__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36510__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36512_36534 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36513_36535 = null;
var count__36514_36536 = (0);
var i__36515_36537 = (0);
while(true){
if((i__36515_36537 < count__36514_36536)){
var f_36538 = cljs.core._nth.call(null,chunk__36513_36535,i__36515_36537);
cljs.core.println.call(null,"  ",f_36538);

var G__36539 = seq__36512_36534;
var G__36540 = chunk__36513_36535;
var G__36541 = count__36514_36536;
var G__36542 = (i__36515_36537 + (1));
seq__36512_36534 = G__36539;
chunk__36513_36535 = G__36540;
count__36514_36536 = G__36541;
i__36515_36537 = G__36542;
continue;
} else {
var temp__4657__auto___36543 = cljs.core.seq.call(null,seq__36512_36534);
if(temp__4657__auto___36543){
var seq__36512_36544__$1 = temp__4657__auto___36543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36512_36544__$1)){
var c__25645__auto___36545 = cljs.core.chunk_first.call(null,seq__36512_36544__$1);
var G__36546 = cljs.core.chunk_rest.call(null,seq__36512_36544__$1);
var G__36547 = c__25645__auto___36545;
var G__36548 = cljs.core.count.call(null,c__25645__auto___36545);
var G__36549 = (0);
seq__36512_36534 = G__36546;
chunk__36513_36535 = G__36547;
count__36514_36536 = G__36548;
i__36515_36537 = G__36549;
continue;
} else {
var f_36550 = cljs.core.first.call(null,seq__36512_36544__$1);
cljs.core.println.call(null,"  ",f_36550);

var G__36551 = cljs.core.next.call(null,seq__36512_36544__$1);
var G__36552 = null;
var G__36553 = (0);
var G__36554 = (0);
seq__36512_36534 = G__36551;
chunk__36513_36535 = G__36552;
count__36514_36536 = G__36553;
i__36515_36537 = G__36554;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36555 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24834__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36555);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36555)))?cljs.core.second.call(null,arglists_36555):arglists_36555));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36516_36556 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36517_36557 = null;
var count__36518_36558 = (0);
var i__36519_36559 = (0);
while(true){
if((i__36519_36559 < count__36518_36558)){
var vec__36520_36560 = cljs.core._nth.call(null,chunk__36517_36557,i__36519_36559);
var name_36561 = cljs.core.nth.call(null,vec__36520_36560,(0),null);
var map__36523_36562 = cljs.core.nth.call(null,vec__36520_36560,(1),null);
var map__36523_36563__$1 = ((((!((map__36523_36562 == null)))?((((map__36523_36562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36523_36562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36523_36562):map__36523_36562);
var doc_36564 = cljs.core.get.call(null,map__36523_36563__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36565 = cljs.core.get.call(null,map__36523_36563__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36561);

cljs.core.println.call(null," ",arglists_36565);

if(cljs.core.truth_(doc_36564)){
cljs.core.println.call(null," ",doc_36564);
} else {
}

var G__36566 = seq__36516_36556;
var G__36567 = chunk__36517_36557;
var G__36568 = count__36518_36558;
var G__36569 = (i__36519_36559 + (1));
seq__36516_36556 = G__36566;
chunk__36517_36557 = G__36567;
count__36518_36558 = G__36568;
i__36519_36559 = G__36569;
continue;
} else {
var temp__4657__auto___36570 = cljs.core.seq.call(null,seq__36516_36556);
if(temp__4657__auto___36570){
var seq__36516_36571__$1 = temp__4657__auto___36570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36516_36571__$1)){
var c__25645__auto___36572 = cljs.core.chunk_first.call(null,seq__36516_36571__$1);
var G__36573 = cljs.core.chunk_rest.call(null,seq__36516_36571__$1);
var G__36574 = c__25645__auto___36572;
var G__36575 = cljs.core.count.call(null,c__25645__auto___36572);
var G__36576 = (0);
seq__36516_36556 = G__36573;
chunk__36517_36557 = G__36574;
count__36518_36558 = G__36575;
i__36519_36559 = G__36576;
continue;
} else {
var vec__36525_36577 = cljs.core.first.call(null,seq__36516_36571__$1);
var name_36578 = cljs.core.nth.call(null,vec__36525_36577,(0),null);
var map__36528_36579 = cljs.core.nth.call(null,vec__36525_36577,(1),null);
var map__36528_36580__$1 = ((((!((map__36528_36579 == null)))?((((map__36528_36579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36528_36579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36528_36579):map__36528_36579);
var doc_36581 = cljs.core.get.call(null,map__36528_36580__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36582 = cljs.core.get.call(null,map__36528_36580__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36578);

cljs.core.println.call(null," ",arglists_36582);

if(cljs.core.truth_(doc_36581)){
cljs.core.println.call(null," ",doc_36581);
} else {
}

var G__36583 = cljs.core.next.call(null,seq__36516_36571__$1);
var G__36584 = null;
var G__36585 = (0);
var G__36586 = (0);
seq__36516_36556 = G__36583;
chunk__36517_36557 = G__36584;
count__36518_36558 = G__36585;
i__36519_36559 = G__36586;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36530 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36531 = null;
var count__36532 = (0);
var i__36533 = (0);
while(true){
if((i__36533 < count__36532)){
var role = cljs.core._nth.call(null,chunk__36531,i__36533);
var temp__4657__auto___36587__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36587__$1)){
var spec_36588 = temp__4657__auto___36587__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36588));
} else {
}

var G__36589 = seq__36530;
var G__36590 = chunk__36531;
var G__36591 = count__36532;
var G__36592 = (i__36533 + (1));
seq__36530 = G__36589;
chunk__36531 = G__36590;
count__36532 = G__36591;
i__36533 = G__36592;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36530);
if(temp__4657__auto____$1){
var seq__36530__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36530__$1)){
var c__25645__auto__ = cljs.core.chunk_first.call(null,seq__36530__$1);
var G__36593 = cljs.core.chunk_rest.call(null,seq__36530__$1);
var G__36594 = c__25645__auto__;
var G__36595 = cljs.core.count.call(null,c__25645__auto__);
var G__36596 = (0);
seq__36530 = G__36593;
chunk__36531 = G__36594;
count__36532 = G__36595;
i__36533 = G__36596;
continue;
} else {
var role = cljs.core.first.call(null,seq__36530__$1);
var temp__4657__auto___36597__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36597__$2)){
var spec_36598 = temp__4657__auto___36597__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36598));
} else {
}

var G__36599 = cljs.core.next.call(null,seq__36530__$1);
var G__36600 = null;
var G__36601 = (0);
var G__36602 = (0);
seq__36530 = G__36599;
chunk__36531 = G__36600;
count__36532 = G__36601;
i__36533 = G__36602;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1513976124434