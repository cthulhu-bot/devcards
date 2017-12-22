// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29952 = [];
var len__25909__auto___29958 = arguments.length;
var i__25910__auto___29959 = (0);
while(true){
if((i__25910__auto___29959 < len__25909__auto___29958)){
args29952.push((arguments[i__25910__auto___29959]));

var G__29960 = (i__25910__auto___29959 + (1));
i__25910__auto___29959 = G__29960;
continue;
} else {
}
break;
}

var G__29954 = args29952.length;
switch (G__29954) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29952.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29955 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29955 = (function (f,blockable,meta29956){
this.f = f;
this.blockable = blockable;
this.meta29956 = meta29956;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29957,meta29956__$1){
var self__ = this;
var _29957__$1 = this;
return (new cljs.core.async.t_cljs$core$async29955(self__.f,self__.blockable,meta29956__$1));
});

cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29957){
var self__ = this;
var _29957__$1 = this;
return self__.meta29956;
});

cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29955.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29955.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29956","meta29956",1621281150,null)], null);
});

cljs.core.async.t_cljs$core$async29955.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29955.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29955";

cljs.core.async.t_cljs$core$async29955.cljs$lang$ctorPrWriter = (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async29955");
});

cljs.core.async.__GT_t_cljs$core$async29955 = (function cljs$core$async$__GT_t_cljs$core$async29955(f__$1,blockable__$1,meta29956){
return (new cljs.core.async.t_cljs$core$async29955(f__$1,blockable__$1,meta29956));
});

}

return (new cljs.core.async.t_cljs$core$async29955(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29964 = [];
var len__25909__auto___29967 = arguments.length;
var i__25910__auto___29968 = (0);
while(true){
if((i__25910__auto___29968 < len__25909__auto___29967)){
args29964.push((arguments[i__25910__auto___29968]));

var G__29969 = (i__25910__auto___29968 + (1));
i__25910__auto___29968 = G__29969;
continue;
} else {
}
break;
}

var G__29966 = args29964.length;
switch (G__29966) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29964.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29971 = [];
var len__25909__auto___29974 = arguments.length;
var i__25910__auto___29975 = (0);
while(true){
if((i__25910__auto___29975 < len__25909__auto___29974)){
args29971.push((arguments[i__25910__auto___29975]));

var G__29976 = (i__25910__auto___29975 + (1));
i__25910__auto___29975 = G__29976;
continue;
} else {
}
break;
}

var G__29973 = args29971.length;
switch (G__29973) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29971.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29978 = [];
var len__25909__auto___29981 = arguments.length;
var i__25910__auto___29982 = (0);
while(true){
if((i__25910__auto___29982 < len__25909__auto___29981)){
args29978.push((arguments[i__25910__auto___29982]));

var G__29983 = (i__25910__auto___29982 + (1));
i__25910__auto___29982 = G__29983;
continue;
} else {
}
break;
}

var G__29980 = args29978.length;
switch (G__29980) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29978.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29985 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29985);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29985,ret){
return (function (){
return fn1.call(null,val_29985);
});})(val_29985,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29986 = [];
var len__25909__auto___29989 = arguments.length;
var i__25910__auto___29990 = (0);
while(true){
if((i__25910__auto___29990 < len__25909__auto___29989)){
args29986.push((arguments[i__25910__auto___29990]));

var G__29991 = (i__25910__auto___29990 + (1));
i__25910__auto___29990 = G__29991;
continue;
} else {
}
break;
}

var G__29988 = args29986.length;
switch (G__29988) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29986.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25749__auto___29993 = n;
var x_29994 = (0);
while(true){
if((x_29994 < n__25749__auto___29993)){
(a[x_29994] = (0));

var G__29995 = (x_29994 + (1));
x_29994 = G__29995;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29996 = (i + (1));
i = G__29996;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30000 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30000 = (function (alt_flag,flag,meta30001){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30001 = meta30001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30002,meta30001__$1){
var self__ = this;
var _30002__$1 = this;
return (new cljs.core.async.t_cljs$core$async30000(self__.alt_flag,self__.flag,meta30001__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30002){
var self__ = this;
var _30002__$1 = this;
return self__.meta30001;
});})(flag))
;

cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30000.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30000.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30001","meta30001",1287873564,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30000";

cljs.core.async.t_cljs$core$async30000.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async30000");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30000 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30000(alt_flag__$1,flag__$1,meta30001){
return (new cljs.core.async.t_cljs$core$async30000(alt_flag__$1,flag__$1,meta30001));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30000(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30006 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30006 = (function (alt_handler,flag,cb,meta30007){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30007 = meta30007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30008,meta30007__$1){
var self__ = this;
var _30008__$1 = this;
return (new cljs.core.async.t_cljs$core$async30006(self__.alt_handler,self__.flag,self__.cb,meta30007__$1));
});

cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30008){
var self__ = this;
var _30008__$1 = this;
return self__.meta30007;
});

cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30006.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30007","meta30007",1815563805,null)], null);
});

cljs.core.async.t_cljs$core$async30006.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30006";

cljs.core.async.t_cljs$core$async30006.cljs$lang$ctorPrWriter = (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async30006");
});

cljs.core.async.__GT_t_cljs$core$async30006 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30006(alt_handler__$1,flag__$1,cb__$1,meta30007){
return (new cljs.core.async.t_cljs$core$async30006(alt_handler__$1,flag__$1,cb__$1,meta30007));
});

}

return (new cljs.core.async.t_cljs$core$async30006(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30009_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30009_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30010_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30010_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24834__auto__ = wport;
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30011 = (i + (1));
i = G__30011;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24834__auto__ = ret;
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24822__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24822__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24822__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25916__auto__ = [];
var len__25909__auto___30017 = arguments.length;
var i__25910__auto___30018 = (0);
while(true){
if((i__25910__auto___30018 < len__25909__auto___30017)){
args__25916__auto__.push((arguments[i__25910__auto___30018]));

var G__30019 = (i__25910__auto___30018 + (1));
i__25910__auto___30018 = G__30019;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((1) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25917__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30014){
var map__30015 = p__30014;
var map__30015__$1 = ((((!((map__30015 == null)))?((((map__30015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30015):map__30015);
var opts = map__30015__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30012){
var G__30013 = cljs.core.first.call(null,seq30012);
var seq30012__$1 = cljs.core.next.call(null,seq30012);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30013,seq30012__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30020 = [];
var len__25909__auto___30070 = arguments.length;
var i__25910__auto___30071 = (0);
while(true){
if((i__25910__auto___30071 < len__25909__auto___30070)){
args30020.push((arguments[i__25910__auto___30071]));

var G__30072 = (i__25910__auto___30071 + (1));
i__25910__auto___30071 = G__30072;
continue;
} else {
}
break;
}

var G__30022 = args30020.length;
switch (G__30022) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30020.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29907__auto___30074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto___30074){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto___30074){
return (function (state_30046){
var state_val_30047 = (state_30046[(1)]);
if((state_val_30047 === (7))){
var inst_30042 = (state_30046[(2)]);
var state_30046__$1 = state_30046;
var statearr_30048_30075 = state_30046__$1;
(statearr_30048_30075[(2)] = inst_30042);

(statearr_30048_30075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (1))){
var state_30046__$1 = state_30046;
var statearr_30049_30076 = state_30046__$1;
(statearr_30049_30076[(2)] = null);

(statearr_30049_30076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (4))){
var inst_30025 = (state_30046[(7)]);
var inst_30025__$1 = (state_30046[(2)]);
var inst_30026 = (inst_30025__$1 == null);
var state_30046__$1 = (function (){var statearr_30050 = state_30046;
(statearr_30050[(7)] = inst_30025__$1);

return statearr_30050;
})();
if(cljs.core.truth_(inst_30026)){
var statearr_30051_30077 = state_30046__$1;
(statearr_30051_30077[(1)] = (5));

} else {
var statearr_30052_30078 = state_30046__$1;
(statearr_30052_30078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (13))){
var state_30046__$1 = state_30046;
var statearr_30053_30079 = state_30046__$1;
(statearr_30053_30079[(2)] = null);

(statearr_30053_30079[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (6))){
var inst_30025 = (state_30046[(7)]);
var state_30046__$1 = state_30046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30046__$1,(11),to,inst_30025);
} else {
if((state_val_30047 === (3))){
var inst_30044 = (state_30046[(2)]);
var state_30046__$1 = state_30046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30046__$1,inst_30044);
} else {
if((state_val_30047 === (12))){
var state_30046__$1 = state_30046;
var statearr_30054_30080 = state_30046__$1;
(statearr_30054_30080[(2)] = null);

(statearr_30054_30080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (2))){
var state_30046__$1 = state_30046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30046__$1,(4),from);
} else {
if((state_val_30047 === (11))){
var inst_30035 = (state_30046[(2)]);
var state_30046__$1 = state_30046;
if(cljs.core.truth_(inst_30035)){
var statearr_30055_30081 = state_30046__$1;
(statearr_30055_30081[(1)] = (12));

} else {
var statearr_30056_30082 = state_30046__$1;
(statearr_30056_30082[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (9))){
var state_30046__$1 = state_30046;
var statearr_30057_30083 = state_30046__$1;
(statearr_30057_30083[(2)] = null);

(statearr_30057_30083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (5))){
var state_30046__$1 = state_30046;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30058_30084 = state_30046__$1;
(statearr_30058_30084[(1)] = (8));

} else {
var statearr_30059_30085 = state_30046__$1;
(statearr_30059_30085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (14))){
var inst_30040 = (state_30046[(2)]);
var state_30046__$1 = state_30046;
var statearr_30060_30086 = state_30046__$1;
(statearr_30060_30086[(2)] = inst_30040);

(statearr_30060_30086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (10))){
var inst_30032 = (state_30046[(2)]);
var state_30046__$1 = state_30046;
var statearr_30061_30087 = state_30046__$1;
(statearr_30061_30087[(2)] = inst_30032);

(statearr_30061_30087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30047 === (8))){
var inst_30029 = cljs.core.async.close_BANG_.call(null,to);
var state_30046__$1 = state_30046;
var statearr_30062_30088 = state_30046__$1;
(statearr_30062_30088[(2)] = inst_30029);

(statearr_30062_30088[(1)] = (10));


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
});})(c__29907__auto___30074))
;
return ((function (switch__29795__auto__,c__29907__auto___30074){
return (function() {
var cljs$core$async$state_machine__29796__auto__ = null;
var cljs$core$async$state_machine__29796__auto____0 = (function (){
var statearr_30066 = [null,null,null,null,null,null,null,null];
(statearr_30066[(0)] = cljs$core$async$state_machine__29796__auto__);

(statearr_30066[(1)] = (1));

return statearr_30066;
});
var cljs$core$async$state_machine__29796__auto____1 = (function (state_30046){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_30046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e30067){if((e30067 instanceof Object)){
var ex__29799__auto__ = e30067;
var statearr_30068_30089 = state_30046;
(statearr_30068_30089[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30090 = state_30046;
state_30046 = G__30090;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$state_machine__29796__auto__ = function(state_30046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29796__auto____1.call(this,state_30046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29796__auto____0;
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29796__auto____1;
return cljs$core$async$state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto___30074))
})();
var state__29909__auto__ = (function (){var statearr_30069 = f__29908__auto__.call(null);
(statearr_30069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___30074);

return statearr_30069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto___30074))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30278){
var vec__30279 = p__30278;
var v = cljs.core.nth.call(null,vec__30279,(0),null);
var p = cljs.core.nth.call(null,vec__30279,(1),null);
var job = vec__30279;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29907__auto___30465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto___30465,res,vec__30279,v,p,job,jobs,results){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto___30465,res,vec__30279,v,p,job,jobs,results){
return (function (state_30286){
var state_val_30287 = (state_30286[(1)]);
if((state_val_30287 === (1))){
var state_30286__$1 = state_30286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30286__$1,(2),res,v);
} else {
if((state_val_30287 === (2))){
var inst_30283 = (state_30286[(2)]);
var inst_30284 = cljs.core.async.close_BANG_.call(null,res);
var state_30286__$1 = (function (){var statearr_30288 = state_30286;
(statearr_30288[(7)] = inst_30283);

return statearr_30288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30286__$1,inst_30284);
} else {
return null;
}
}
});})(c__29907__auto___30465,res,vec__30279,v,p,job,jobs,results))
;
return ((function (switch__29795__auto__,c__29907__auto___30465,res,vec__30279,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____0 = (function (){
var statearr_30292 = [null,null,null,null,null,null,null,null];
(statearr_30292[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__);

(statearr_30292[(1)] = (1));

return statearr_30292;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____1 = (function (state_30286){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_30286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e30293){if((e30293 instanceof Object)){
var ex__29799__auto__ = e30293;
var statearr_30294_30466 = state_30286;
(statearr_30294_30466[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30467 = state_30286;
state_30286 = G__30467;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__ = function(state_30286){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____1.call(this,state_30286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto___30465,res,vec__30279,v,p,job,jobs,results))
})();
var state__29909__auto__ = (function (){var statearr_30295 = f__29908__auto__.call(null);
(statearr_30295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___30465);

return statearr_30295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto___30465,res,vec__30279,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30296){
var vec__30297 = p__30296;
var v = cljs.core.nth.call(null,vec__30297,(0),null);
var p = cljs.core.nth.call(null,vec__30297,(1),null);
var job = vec__30297;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25749__auto___30468 = n;
var __30469 = (0);
while(true){
if((__30469 < n__25749__auto___30468)){
var G__30300_30470 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30300_30470) {
case "compute":
var c__29907__auto___30472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30469,c__29907__auto___30472,G__30300_30470,n__25749__auto___30468,jobs,results,process,async){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (__30469,c__29907__auto___30472,G__30300_30470,n__25749__auto___30468,jobs,results,process,async){
return (function (state_30313){
var state_val_30314 = (state_30313[(1)]);
if((state_val_30314 === (1))){
var state_30313__$1 = state_30313;
var statearr_30315_30473 = state_30313__$1;
(statearr_30315_30473[(2)] = null);

(statearr_30315_30473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30314 === (2))){
var state_30313__$1 = state_30313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30313__$1,(4),jobs);
} else {
if((state_val_30314 === (3))){
var inst_30311 = (state_30313[(2)]);
var state_30313__$1 = state_30313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30313__$1,inst_30311);
} else {
if((state_val_30314 === (4))){
var inst_30303 = (state_30313[(2)]);
var inst_30304 = process.call(null,inst_30303);
var state_30313__$1 = state_30313;
if(cljs.core.truth_(inst_30304)){
var statearr_30316_30474 = state_30313__$1;
(statearr_30316_30474[(1)] = (5));

} else {
var statearr_30317_30475 = state_30313__$1;
(statearr_30317_30475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30314 === (5))){
var state_30313__$1 = state_30313;
var statearr_30318_30476 = state_30313__$1;
(statearr_30318_30476[(2)] = null);

(statearr_30318_30476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30314 === (6))){
var state_30313__$1 = state_30313;
var statearr_30319_30477 = state_30313__$1;
(statearr_30319_30477[(2)] = null);

(statearr_30319_30477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30314 === (7))){
var inst_30309 = (state_30313[(2)]);
var state_30313__$1 = state_30313;
var statearr_30320_30478 = state_30313__$1;
(statearr_30320_30478[(2)] = inst_30309);

(statearr_30320_30478[(1)] = (3));


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
});})(__30469,c__29907__auto___30472,G__30300_30470,n__25749__auto___30468,jobs,results,process,async))
;
return ((function (__30469,switch__29795__auto__,c__29907__auto___30472,G__30300_30470,n__25749__auto___30468,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____0 = (function (){
var statearr_30324 = [null,null,null,null,null,null,null];
(statearr_30324[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__);

(statearr_30324[(1)] = (1));

return statearr_30324;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____1 = (function (state_30313){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_30313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e30325){if((e30325 instanceof Object)){
var ex__29799__auto__ = e30325;
var statearr_30326_30479 = state_30313;
(statearr_30326_30479[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30480 = state_30313;
state_30313 = G__30480;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__ = function(state_30313){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____1.call(this,state_30313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__;
})()
;})(__30469,switch__29795__auto__,c__29907__auto___30472,G__30300_30470,n__25749__auto___30468,jobs,results,process,async))
})();
var state__29909__auto__ = (function (){var statearr_30327 = f__29908__auto__.call(null);
(statearr_30327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___30472);

return statearr_30327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(__30469,c__29907__auto___30472,G__30300_30470,n__25749__auto___30468,jobs,results,process,async))
);


break;
case "async":
var c__29907__auto___30481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30469,c__29907__auto___30481,G__30300_30470,n__25749__auto___30468,jobs,results,process,async){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (__30469,c__29907__auto___30481,G__30300_30470,n__25749__auto___30468,jobs,results,process,async){
return (function (state_30340){
var state_val_30341 = (state_30340[(1)]);
if((state_val_30341 === (1))){
var state_30340__$1 = state_30340;
var statearr_30342_30482 = state_30340__$1;
(statearr_30342_30482[(2)] = null);

(statearr_30342_30482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30341 === (2))){
var state_30340__$1 = state_30340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30340__$1,(4),jobs);
} else {
if((state_val_30341 === (3))){
var inst_30338 = (state_30340[(2)]);
var state_30340__$1 = state_30340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30340__$1,inst_30338);
} else {
if((state_val_30341 === (4))){
var inst_30330 = (state_30340[(2)]);
var inst_30331 = async.call(null,inst_30330);
var state_30340__$1 = state_30340;
if(cljs.core.truth_(inst_30331)){
var statearr_30343_30483 = state_30340__$1;
(statearr_30343_30483[(1)] = (5));

} else {
var statearr_30344_30484 = state_30340__$1;
(statearr_30344_30484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30341 === (5))){
var state_30340__$1 = state_30340;
var statearr_30345_30485 = state_30340__$1;
(statearr_30345_30485[(2)] = null);

(statearr_30345_30485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30341 === (6))){
var state_30340__$1 = state_30340;
var statearr_30346_30486 = state_30340__$1;
(statearr_30346_30486[(2)] = null);

(statearr_30346_30486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30341 === (7))){
var inst_30336 = (state_30340[(2)]);
var state_30340__$1 = state_30340;
var statearr_30347_30487 = state_30340__$1;
(statearr_30347_30487[(2)] = inst_30336);

(statearr_30347_30487[(1)] = (3));


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
});})(__30469,c__29907__auto___30481,G__30300_30470,n__25749__auto___30468,jobs,results,process,async))
;
return ((function (__30469,switch__29795__auto__,c__29907__auto___30481,G__30300_30470,n__25749__auto___30468,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____0 = (function (){
var statearr_30351 = [null,null,null,null,null,null,null];
(statearr_30351[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__);

(statearr_30351[(1)] = (1));

return statearr_30351;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____1 = (function (state_30340){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_30340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e30352){if((e30352 instanceof Object)){
var ex__29799__auto__ = e30352;
var statearr_30353_30488 = state_30340;
(statearr_30353_30488[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30489 = state_30340;
state_30340 = G__30489;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__ = function(state_30340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____1.call(this,state_30340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__;
})()
;})(__30469,switch__29795__auto__,c__29907__auto___30481,G__30300_30470,n__25749__auto___30468,jobs,results,process,async))
})();
var state__29909__auto__ = (function (){var statearr_30354 = f__29908__auto__.call(null);
(statearr_30354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___30481);

return statearr_30354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(__30469,c__29907__auto___30481,G__30300_30470,n__25749__auto___30468,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30490 = (__30469 + (1));
__30469 = G__30490;
continue;
} else {
}
break;
}

var c__29907__auto___30491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto___30491,jobs,results,process,async){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto___30491,jobs,results,process,async){
return (function (state_30376){
var state_val_30377 = (state_30376[(1)]);
if((state_val_30377 === (1))){
var state_30376__$1 = state_30376;
var statearr_30378_30492 = state_30376__$1;
(statearr_30378_30492[(2)] = null);

(statearr_30378_30492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (2))){
var state_30376__$1 = state_30376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30376__$1,(4),from);
} else {
if((state_val_30377 === (3))){
var inst_30374 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30376__$1,inst_30374);
} else {
if((state_val_30377 === (4))){
var inst_30357 = (state_30376[(7)]);
var inst_30357__$1 = (state_30376[(2)]);
var inst_30358 = (inst_30357__$1 == null);
var state_30376__$1 = (function (){var statearr_30379 = state_30376;
(statearr_30379[(7)] = inst_30357__$1);

return statearr_30379;
})();
if(cljs.core.truth_(inst_30358)){
var statearr_30380_30493 = state_30376__$1;
(statearr_30380_30493[(1)] = (5));

} else {
var statearr_30381_30494 = state_30376__$1;
(statearr_30381_30494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (5))){
var inst_30360 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30376__$1 = state_30376;
var statearr_30382_30495 = state_30376__$1;
(statearr_30382_30495[(2)] = inst_30360);

(statearr_30382_30495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (6))){
var inst_30362 = (state_30376[(8)]);
var inst_30357 = (state_30376[(7)]);
var inst_30362__$1 = cljs.core.async.chan.call(null,(1));
var inst_30363 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30364 = [inst_30357,inst_30362__$1];
var inst_30365 = (new cljs.core.PersistentVector(null,2,(5),inst_30363,inst_30364,null));
var state_30376__$1 = (function (){var statearr_30383 = state_30376;
(statearr_30383[(8)] = inst_30362__$1);

return statearr_30383;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30376__$1,(8),jobs,inst_30365);
} else {
if((state_val_30377 === (7))){
var inst_30372 = (state_30376[(2)]);
var state_30376__$1 = state_30376;
var statearr_30384_30496 = state_30376__$1;
(statearr_30384_30496[(2)] = inst_30372);

(statearr_30384_30496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30377 === (8))){
var inst_30362 = (state_30376[(8)]);
var inst_30367 = (state_30376[(2)]);
var state_30376__$1 = (function (){var statearr_30385 = state_30376;
(statearr_30385[(9)] = inst_30367);

return statearr_30385;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30376__$1,(9),results,inst_30362);
} else {
if((state_val_30377 === (9))){
var inst_30369 = (state_30376[(2)]);
var state_30376__$1 = (function (){var statearr_30386 = state_30376;
(statearr_30386[(10)] = inst_30369);

return statearr_30386;
})();
var statearr_30387_30497 = state_30376__$1;
(statearr_30387_30497[(2)] = null);

(statearr_30387_30497[(1)] = (2));


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
});})(c__29907__auto___30491,jobs,results,process,async))
;
return ((function (switch__29795__auto__,c__29907__auto___30491,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____0 = (function (){
var statearr_30391 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30391[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__);

(statearr_30391[(1)] = (1));

return statearr_30391;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____1 = (function (state_30376){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_30376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e30392){if((e30392 instanceof Object)){
var ex__29799__auto__ = e30392;
var statearr_30393_30498 = state_30376;
(statearr_30393_30498[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30499 = state_30376;
state_30376 = G__30499;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__ = function(state_30376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____1.call(this,state_30376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto___30491,jobs,results,process,async))
})();
var state__29909__auto__ = (function (){var statearr_30394 = f__29908__auto__.call(null);
(statearr_30394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___30491);

return statearr_30394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto___30491,jobs,results,process,async))
);


var c__29907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto__,jobs,results,process,async){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto__,jobs,results,process,async){
return (function (state_30432){
var state_val_30433 = (state_30432[(1)]);
if((state_val_30433 === (7))){
var inst_30428 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30434_30500 = state_30432__$1;
(statearr_30434_30500[(2)] = inst_30428);

(statearr_30434_30500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (20))){
var state_30432__$1 = state_30432;
var statearr_30435_30501 = state_30432__$1;
(statearr_30435_30501[(2)] = null);

(statearr_30435_30501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (1))){
var state_30432__$1 = state_30432;
var statearr_30436_30502 = state_30432__$1;
(statearr_30436_30502[(2)] = null);

(statearr_30436_30502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (4))){
var inst_30397 = (state_30432[(7)]);
var inst_30397__$1 = (state_30432[(2)]);
var inst_30398 = (inst_30397__$1 == null);
var state_30432__$1 = (function (){var statearr_30437 = state_30432;
(statearr_30437[(7)] = inst_30397__$1);

return statearr_30437;
})();
if(cljs.core.truth_(inst_30398)){
var statearr_30438_30503 = state_30432__$1;
(statearr_30438_30503[(1)] = (5));

} else {
var statearr_30439_30504 = state_30432__$1;
(statearr_30439_30504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (15))){
var inst_30410 = (state_30432[(8)]);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30432__$1,(18),to,inst_30410);
} else {
if((state_val_30433 === (21))){
var inst_30423 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30440_30505 = state_30432__$1;
(statearr_30440_30505[(2)] = inst_30423);

(statearr_30440_30505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (13))){
var inst_30425 = (state_30432[(2)]);
var state_30432__$1 = (function (){var statearr_30441 = state_30432;
(statearr_30441[(9)] = inst_30425);

return statearr_30441;
})();
var statearr_30442_30506 = state_30432__$1;
(statearr_30442_30506[(2)] = null);

(statearr_30442_30506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (6))){
var inst_30397 = (state_30432[(7)]);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(11),inst_30397);
} else {
if((state_val_30433 === (17))){
var inst_30418 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
if(cljs.core.truth_(inst_30418)){
var statearr_30443_30507 = state_30432__$1;
(statearr_30443_30507[(1)] = (19));

} else {
var statearr_30444_30508 = state_30432__$1;
(statearr_30444_30508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (3))){
var inst_30430 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30432__$1,inst_30430);
} else {
if((state_val_30433 === (12))){
var inst_30407 = (state_30432[(10)]);
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(14),inst_30407);
} else {
if((state_val_30433 === (2))){
var state_30432__$1 = state_30432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30432__$1,(4),results);
} else {
if((state_val_30433 === (19))){
var state_30432__$1 = state_30432;
var statearr_30445_30509 = state_30432__$1;
(statearr_30445_30509[(2)] = null);

(statearr_30445_30509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (11))){
var inst_30407 = (state_30432[(2)]);
var state_30432__$1 = (function (){var statearr_30446 = state_30432;
(statearr_30446[(10)] = inst_30407);

return statearr_30446;
})();
var statearr_30447_30510 = state_30432__$1;
(statearr_30447_30510[(2)] = null);

(statearr_30447_30510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (9))){
var state_30432__$1 = state_30432;
var statearr_30448_30511 = state_30432__$1;
(statearr_30448_30511[(2)] = null);

(statearr_30448_30511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (5))){
var state_30432__$1 = state_30432;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30449_30512 = state_30432__$1;
(statearr_30449_30512[(1)] = (8));

} else {
var statearr_30450_30513 = state_30432__$1;
(statearr_30450_30513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (14))){
var inst_30410 = (state_30432[(8)]);
var inst_30412 = (state_30432[(11)]);
var inst_30410__$1 = (state_30432[(2)]);
var inst_30411 = (inst_30410__$1 == null);
var inst_30412__$1 = cljs.core.not.call(null,inst_30411);
var state_30432__$1 = (function (){var statearr_30451 = state_30432;
(statearr_30451[(8)] = inst_30410__$1);

(statearr_30451[(11)] = inst_30412__$1);

return statearr_30451;
})();
if(inst_30412__$1){
var statearr_30452_30514 = state_30432__$1;
(statearr_30452_30514[(1)] = (15));

} else {
var statearr_30453_30515 = state_30432__$1;
(statearr_30453_30515[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (16))){
var inst_30412 = (state_30432[(11)]);
var state_30432__$1 = state_30432;
var statearr_30454_30516 = state_30432__$1;
(statearr_30454_30516[(2)] = inst_30412);

(statearr_30454_30516[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (10))){
var inst_30404 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30455_30517 = state_30432__$1;
(statearr_30455_30517[(2)] = inst_30404);

(statearr_30455_30517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (18))){
var inst_30415 = (state_30432[(2)]);
var state_30432__$1 = state_30432;
var statearr_30456_30518 = state_30432__$1;
(statearr_30456_30518[(2)] = inst_30415);

(statearr_30456_30518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30433 === (8))){
var inst_30401 = cljs.core.async.close_BANG_.call(null,to);
var state_30432__$1 = state_30432;
var statearr_30457_30519 = state_30432__$1;
(statearr_30457_30519[(2)] = inst_30401);

(statearr_30457_30519[(1)] = (10));


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
});})(c__29907__auto__,jobs,results,process,async))
;
return ((function (switch__29795__auto__,c__29907__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____0 = (function (){
var statearr_30461 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30461[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__);

(statearr_30461[(1)] = (1));

return statearr_30461;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____1 = (function (state_30432){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_30432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e30462){if((e30462 instanceof Object)){
var ex__29799__auto__ = e30462;
var statearr_30463_30520 = state_30432;
(statearr_30463_30520[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30521 = state_30432;
state_30432 = G__30521;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__ = function(state_30432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____1.call(this,state_30432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29796__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto__,jobs,results,process,async))
})();
var state__29909__auto__ = (function (){var statearr_30464 = f__29908__auto__.call(null);
(statearr_30464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto__);

return statearr_30464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto__,jobs,results,process,async))
);

return c__29907__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30522 = [];
var len__25909__auto___30525 = arguments.length;
var i__25910__auto___30526 = (0);
while(true){
if((i__25910__auto___30526 < len__25909__auto___30525)){
args30522.push((arguments[i__25910__auto___30526]));

var G__30527 = (i__25910__auto___30526 + (1));
i__25910__auto___30526 = G__30527;
continue;
} else {
}
break;
}

var G__30524 = args30522.length;
switch (G__30524) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30522.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30529 = [];
var len__25909__auto___30532 = arguments.length;
var i__25910__auto___30533 = (0);
while(true){
if((i__25910__auto___30533 < len__25909__auto___30532)){
args30529.push((arguments[i__25910__auto___30533]));

var G__30534 = (i__25910__auto___30533 + (1));
i__25910__auto___30533 = G__30534;
continue;
} else {
}
break;
}

var G__30531 = args30529.length;
switch (G__30531) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30529.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30536 = [];
var len__25909__auto___30589 = arguments.length;
var i__25910__auto___30590 = (0);
while(true){
if((i__25910__auto___30590 < len__25909__auto___30589)){
args30536.push((arguments[i__25910__auto___30590]));

var G__30591 = (i__25910__auto___30590 + (1));
i__25910__auto___30590 = G__30591;
continue;
} else {
}
break;
}

var G__30538 = args30536.length;
switch (G__30538) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30536.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29907__auto___30593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto___30593,tc,fc){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto___30593,tc,fc){
return (function (state_30564){
var state_val_30565 = (state_30564[(1)]);
if((state_val_30565 === (7))){
var inst_30560 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30566_30594 = state_30564__$1;
(statearr_30566_30594[(2)] = inst_30560);

(statearr_30566_30594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (1))){
var state_30564__$1 = state_30564;
var statearr_30567_30595 = state_30564__$1;
(statearr_30567_30595[(2)] = null);

(statearr_30567_30595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (4))){
var inst_30541 = (state_30564[(7)]);
var inst_30541__$1 = (state_30564[(2)]);
var inst_30542 = (inst_30541__$1 == null);
var state_30564__$1 = (function (){var statearr_30568 = state_30564;
(statearr_30568[(7)] = inst_30541__$1);

return statearr_30568;
})();
if(cljs.core.truth_(inst_30542)){
var statearr_30569_30596 = state_30564__$1;
(statearr_30569_30596[(1)] = (5));

} else {
var statearr_30570_30597 = state_30564__$1;
(statearr_30570_30597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (13))){
var state_30564__$1 = state_30564;
var statearr_30571_30598 = state_30564__$1;
(statearr_30571_30598[(2)] = null);

(statearr_30571_30598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (6))){
var inst_30541 = (state_30564[(7)]);
var inst_30547 = p.call(null,inst_30541);
var state_30564__$1 = state_30564;
if(cljs.core.truth_(inst_30547)){
var statearr_30572_30599 = state_30564__$1;
(statearr_30572_30599[(1)] = (9));

} else {
var statearr_30573_30600 = state_30564__$1;
(statearr_30573_30600[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (3))){
var inst_30562 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30564__$1,inst_30562);
} else {
if((state_val_30565 === (12))){
var state_30564__$1 = state_30564;
var statearr_30574_30601 = state_30564__$1;
(statearr_30574_30601[(2)] = null);

(statearr_30574_30601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (2))){
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30564__$1,(4),ch);
} else {
if((state_val_30565 === (11))){
var inst_30541 = (state_30564[(7)]);
var inst_30551 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30564__$1,(8),inst_30551,inst_30541);
} else {
if((state_val_30565 === (9))){
var state_30564__$1 = state_30564;
var statearr_30575_30602 = state_30564__$1;
(statearr_30575_30602[(2)] = tc);

(statearr_30575_30602[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (5))){
var inst_30544 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30545 = cljs.core.async.close_BANG_.call(null,fc);
var state_30564__$1 = (function (){var statearr_30576 = state_30564;
(statearr_30576[(8)] = inst_30544);

return statearr_30576;
})();
var statearr_30577_30603 = state_30564__$1;
(statearr_30577_30603[(2)] = inst_30545);

(statearr_30577_30603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (14))){
var inst_30558 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30578_30604 = state_30564__$1;
(statearr_30578_30604[(2)] = inst_30558);

(statearr_30578_30604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (10))){
var state_30564__$1 = state_30564;
var statearr_30579_30605 = state_30564__$1;
(statearr_30579_30605[(2)] = fc);

(statearr_30579_30605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (8))){
var inst_30553 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
if(cljs.core.truth_(inst_30553)){
var statearr_30580_30606 = state_30564__$1;
(statearr_30580_30606[(1)] = (12));

} else {
var statearr_30581_30607 = state_30564__$1;
(statearr_30581_30607[(1)] = (13));

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
});})(c__29907__auto___30593,tc,fc))
;
return ((function (switch__29795__auto__,c__29907__auto___30593,tc,fc){
return (function() {
var cljs$core$async$state_machine__29796__auto__ = null;
var cljs$core$async$state_machine__29796__auto____0 = (function (){
var statearr_30585 = [null,null,null,null,null,null,null,null,null];
(statearr_30585[(0)] = cljs$core$async$state_machine__29796__auto__);

(statearr_30585[(1)] = (1));

return statearr_30585;
});
var cljs$core$async$state_machine__29796__auto____1 = (function (state_30564){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_30564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e30586){if((e30586 instanceof Object)){
var ex__29799__auto__ = e30586;
var statearr_30587_30608 = state_30564;
(statearr_30587_30608[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30609 = state_30564;
state_30564 = G__30609;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$state_machine__29796__auto__ = function(state_30564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29796__auto____1.call(this,state_30564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29796__auto____0;
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29796__auto____1;
return cljs$core$async$state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto___30593,tc,fc))
})();
var state__29909__auto__ = (function (){var statearr_30588 = f__29908__auto__.call(null);
(statearr_30588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___30593);

return statearr_30588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto___30593,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto__){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto__){
return (function (state_30673){
var state_val_30674 = (state_30673[(1)]);
if((state_val_30674 === (7))){
var inst_30669 = (state_30673[(2)]);
var state_30673__$1 = state_30673;
var statearr_30675_30696 = state_30673__$1;
(statearr_30675_30696[(2)] = inst_30669);

(statearr_30675_30696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (1))){
var inst_30653 = init;
var state_30673__$1 = (function (){var statearr_30676 = state_30673;
(statearr_30676[(7)] = inst_30653);

return statearr_30676;
})();
var statearr_30677_30697 = state_30673__$1;
(statearr_30677_30697[(2)] = null);

(statearr_30677_30697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (4))){
var inst_30656 = (state_30673[(8)]);
var inst_30656__$1 = (state_30673[(2)]);
var inst_30657 = (inst_30656__$1 == null);
var state_30673__$1 = (function (){var statearr_30678 = state_30673;
(statearr_30678[(8)] = inst_30656__$1);

return statearr_30678;
})();
if(cljs.core.truth_(inst_30657)){
var statearr_30679_30698 = state_30673__$1;
(statearr_30679_30698[(1)] = (5));

} else {
var statearr_30680_30699 = state_30673__$1;
(statearr_30680_30699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (6))){
var inst_30653 = (state_30673[(7)]);
var inst_30660 = (state_30673[(9)]);
var inst_30656 = (state_30673[(8)]);
var inst_30660__$1 = f.call(null,inst_30653,inst_30656);
var inst_30661 = cljs.core.reduced_QMARK_.call(null,inst_30660__$1);
var state_30673__$1 = (function (){var statearr_30681 = state_30673;
(statearr_30681[(9)] = inst_30660__$1);

return statearr_30681;
})();
if(inst_30661){
var statearr_30682_30700 = state_30673__$1;
(statearr_30682_30700[(1)] = (8));

} else {
var statearr_30683_30701 = state_30673__$1;
(statearr_30683_30701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (3))){
var inst_30671 = (state_30673[(2)]);
var state_30673__$1 = state_30673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30673__$1,inst_30671);
} else {
if((state_val_30674 === (2))){
var state_30673__$1 = state_30673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30673__$1,(4),ch);
} else {
if((state_val_30674 === (9))){
var inst_30660 = (state_30673[(9)]);
var inst_30653 = inst_30660;
var state_30673__$1 = (function (){var statearr_30684 = state_30673;
(statearr_30684[(7)] = inst_30653);

return statearr_30684;
})();
var statearr_30685_30702 = state_30673__$1;
(statearr_30685_30702[(2)] = null);

(statearr_30685_30702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (5))){
var inst_30653 = (state_30673[(7)]);
var state_30673__$1 = state_30673;
var statearr_30686_30703 = state_30673__$1;
(statearr_30686_30703[(2)] = inst_30653);

(statearr_30686_30703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (10))){
var inst_30667 = (state_30673[(2)]);
var state_30673__$1 = state_30673;
var statearr_30687_30704 = state_30673__$1;
(statearr_30687_30704[(2)] = inst_30667);

(statearr_30687_30704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (8))){
var inst_30660 = (state_30673[(9)]);
var inst_30663 = cljs.core.deref.call(null,inst_30660);
var state_30673__$1 = state_30673;
var statearr_30688_30705 = state_30673__$1;
(statearr_30688_30705[(2)] = inst_30663);

(statearr_30688_30705[(1)] = (10));


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
});})(c__29907__auto__))
;
return ((function (switch__29795__auto__,c__29907__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29796__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29796__auto____0 = (function (){
var statearr_30692 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30692[(0)] = cljs$core$async$reduce_$_state_machine__29796__auto__);

(statearr_30692[(1)] = (1));

return statearr_30692;
});
var cljs$core$async$reduce_$_state_machine__29796__auto____1 = (function (state_30673){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_30673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e30693){if((e30693 instanceof Object)){
var ex__29799__auto__ = e30693;
var statearr_30694_30706 = state_30673;
(statearr_30694_30706[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30707 = state_30673;
state_30673 = G__30707;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29796__auto__ = function(state_30673){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29796__auto____1.call(this,state_30673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29796__auto____0;
cljs$core$async$reduce_$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29796__auto____1;
return cljs$core$async$reduce_$_state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto__))
})();
var state__29909__auto__ = (function (){var statearr_30695 = f__29908__auto__.call(null);
(statearr_30695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto__);

return statearr_30695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto__))
);

return c__29907__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30708 = [];
var len__25909__auto___30760 = arguments.length;
var i__25910__auto___30761 = (0);
while(true){
if((i__25910__auto___30761 < len__25909__auto___30760)){
args30708.push((arguments[i__25910__auto___30761]));

var G__30762 = (i__25910__auto___30761 + (1));
i__25910__auto___30761 = G__30762;
continue;
} else {
}
break;
}

var G__30710 = args30708.length;
switch (G__30710) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30708.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto__){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto__){
return (function (state_30735){
var state_val_30736 = (state_30735[(1)]);
if((state_val_30736 === (7))){
var inst_30717 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30737_30764 = state_30735__$1;
(statearr_30737_30764[(2)] = inst_30717);

(statearr_30737_30764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (1))){
var inst_30711 = cljs.core.seq.call(null,coll);
var inst_30712 = inst_30711;
var state_30735__$1 = (function (){var statearr_30738 = state_30735;
(statearr_30738[(7)] = inst_30712);

return statearr_30738;
})();
var statearr_30739_30765 = state_30735__$1;
(statearr_30739_30765[(2)] = null);

(statearr_30739_30765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (4))){
var inst_30712 = (state_30735[(7)]);
var inst_30715 = cljs.core.first.call(null,inst_30712);
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30735__$1,(7),ch,inst_30715);
} else {
if((state_val_30736 === (13))){
var inst_30729 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30740_30766 = state_30735__$1;
(statearr_30740_30766[(2)] = inst_30729);

(statearr_30740_30766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (6))){
var inst_30720 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
if(cljs.core.truth_(inst_30720)){
var statearr_30741_30767 = state_30735__$1;
(statearr_30741_30767[(1)] = (8));

} else {
var statearr_30742_30768 = state_30735__$1;
(statearr_30742_30768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (3))){
var inst_30733 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30735__$1,inst_30733);
} else {
if((state_val_30736 === (12))){
var state_30735__$1 = state_30735;
var statearr_30743_30769 = state_30735__$1;
(statearr_30743_30769[(2)] = null);

(statearr_30743_30769[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (2))){
var inst_30712 = (state_30735[(7)]);
var state_30735__$1 = state_30735;
if(cljs.core.truth_(inst_30712)){
var statearr_30744_30770 = state_30735__$1;
(statearr_30744_30770[(1)] = (4));

} else {
var statearr_30745_30771 = state_30735__$1;
(statearr_30745_30771[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (11))){
var inst_30726 = cljs.core.async.close_BANG_.call(null,ch);
var state_30735__$1 = state_30735;
var statearr_30746_30772 = state_30735__$1;
(statearr_30746_30772[(2)] = inst_30726);

(statearr_30746_30772[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (9))){
var state_30735__$1 = state_30735;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30747_30773 = state_30735__$1;
(statearr_30747_30773[(1)] = (11));

} else {
var statearr_30748_30774 = state_30735__$1;
(statearr_30748_30774[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (5))){
var inst_30712 = (state_30735[(7)]);
var state_30735__$1 = state_30735;
var statearr_30749_30775 = state_30735__$1;
(statearr_30749_30775[(2)] = inst_30712);

(statearr_30749_30775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (10))){
var inst_30731 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30750_30776 = state_30735__$1;
(statearr_30750_30776[(2)] = inst_30731);

(statearr_30750_30776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (8))){
var inst_30712 = (state_30735[(7)]);
var inst_30722 = cljs.core.next.call(null,inst_30712);
var inst_30712__$1 = inst_30722;
var state_30735__$1 = (function (){var statearr_30751 = state_30735;
(statearr_30751[(7)] = inst_30712__$1);

return statearr_30751;
})();
var statearr_30752_30777 = state_30735__$1;
(statearr_30752_30777[(2)] = null);

(statearr_30752_30777[(1)] = (2));


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
});})(c__29907__auto__))
;
return ((function (switch__29795__auto__,c__29907__auto__){
return (function() {
var cljs$core$async$state_machine__29796__auto__ = null;
var cljs$core$async$state_machine__29796__auto____0 = (function (){
var statearr_30756 = [null,null,null,null,null,null,null,null];
(statearr_30756[(0)] = cljs$core$async$state_machine__29796__auto__);

(statearr_30756[(1)] = (1));

return statearr_30756;
});
var cljs$core$async$state_machine__29796__auto____1 = (function (state_30735){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_30735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e30757){if((e30757 instanceof Object)){
var ex__29799__auto__ = e30757;
var statearr_30758_30778 = state_30735;
(statearr_30758_30778[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30779 = state_30735;
state_30735 = G__30779;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$state_machine__29796__auto__ = function(state_30735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29796__auto____1.call(this,state_30735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29796__auto____0;
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29796__auto____1;
return cljs$core$async$state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto__))
})();
var state__29909__auto__ = (function (){var statearr_30759 = f__29908__auto__.call(null);
(statearr_30759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto__);

return statearr_30759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto__))
);

return c__29907__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25497__auto__ = (((_ == null))?null:_);
var m__25498__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,_);
} else {
var m__25498__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25498__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m,ch);
} else {
var m__25498__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m);
} else {
var m__25498__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31005 = (function (mult,ch,cs,meta31006){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31006 = meta31006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31007,meta31006__$1){
var self__ = this;
var _31007__$1 = this;
return (new cljs.core.async.t_cljs$core$async31005(self__.mult,self__.ch,self__.cs,meta31006__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31007){
var self__ = this;
var _31007__$1 = this;
return self__.meta31006;
});})(cs))
;

cljs.core.async.t_cljs$core$async31005.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31005.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31005.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31005.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31005.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31005.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31005.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31006","meta31006",-1888612374,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31005";

cljs.core.async.t_cljs$core$async31005.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async31005");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31005 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31005(mult__$1,ch__$1,cs__$1,meta31006){
return (new cljs.core.async.t_cljs$core$async31005(mult__$1,ch__$1,cs__$1,meta31006));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31005(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29907__auto___31230 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto___31230,cs,m,dchan,dctr,done){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto___31230,cs,m,dchan,dctr,done){
return (function (state_31142){
var state_val_31143 = (state_31142[(1)]);
if((state_val_31143 === (7))){
var inst_31138 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
var statearr_31144_31231 = state_31142__$1;
(statearr_31144_31231[(2)] = inst_31138);

(statearr_31144_31231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (20))){
var inst_31041 = (state_31142[(7)]);
var inst_31053 = cljs.core.first.call(null,inst_31041);
var inst_31054 = cljs.core.nth.call(null,inst_31053,(0),null);
var inst_31055 = cljs.core.nth.call(null,inst_31053,(1),null);
var state_31142__$1 = (function (){var statearr_31145 = state_31142;
(statearr_31145[(8)] = inst_31054);

return statearr_31145;
})();
if(cljs.core.truth_(inst_31055)){
var statearr_31146_31232 = state_31142__$1;
(statearr_31146_31232[(1)] = (22));

} else {
var statearr_31147_31233 = state_31142__$1;
(statearr_31147_31233[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (27))){
var inst_31083 = (state_31142[(9)]);
var inst_31010 = (state_31142[(10)]);
var inst_31090 = (state_31142[(11)]);
var inst_31085 = (state_31142[(12)]);
var inst_31090__$1 = cljs.core._nth.call(null,inst_31083,inst_31085);
var inst_31091 = cljs.core.async.put_BANG_.call(null,inst_31090__$1,inst_31010,done);
var state_31142__$1 = (function (){var statearr_31148 = state_31142;
(statearr_31148[(11)] = inst_31090__$1);

return statearr_31148;
})();
if(cljs.core.truth_(inst_31091)){
var statearr_31149_31234 = state_31142__$1;
(statearr_31149_31234[(1)] = (30));

} else {
var statearr_31150_31235 = state_31142__$1;
(statearr_31150_31235[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (1))){
var state_31142__$1 = state_31142;
var statearr_31151_31236 = state_31142__$1;
(statearr_31151_31236[(2)] = null);

(statearr_31151_31236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (24))){
var inst_31041 = (state_31142[(7)]);
var inst_31060 = (state_31142[(2)]);
var inst_31061 = cljs.core.next.call(null,inst_31041);
var inst_31019 = inst_31061;
var inst_31020 = null;
var inst_31021 = (0);
var inst_31022 = (0);
var state_31142__$1 = (function (){var statearr_31152 = state_31142;
(statearr_31152[(13)] = inst_31060);

(statearr_31152[(14)] = inst_31021);

(statearr_31152[(15)] = inst_31022);

(statearr_31152[(16)] = inst_31020);

(statearr_31152[(17)] = inst_31019);

return statearr_31152;
})();
var statearr_31153_31237 = state_31142__$1;
(statearr_31153_31237[(2)] = null);

(statearr_31153_31237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (39))){
var state_31142__$1 = state_31142;
var statearr_31157_31238 = state_31142__$1;
(statearr_31157_31238[(2)] = null);

(statearr_31157_31238[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (4))){
var inst_31010 = (state_31142[(10)]);
var inst_31010__$1 = (state_31142[(2)]);
var inst_31011 = (inst_31010__$1 == null);
var state_31142__$1 = (function (){var statearr_31158 = state_31142;
(statearr_31158[(10)] = inst_31010__$1);

return statearr_31158;
})();
if(cljs.core.truth_(inst_31011)){
var statearr_31159_31239 = state_31142__$1;
(statearr_31159_31239[(1)] = (5));

} else {
var statearr_31160_31240 = state_31142__$1;
(statearr_31160_31240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (15))){
var inst_31021 = (state_31142[(14)]);
var inst_31022 = (state_31142[(15)]);
var inst_31020 = (state_31142[(16)]);
var inst_31019 = (state_31142[(17)]);
var inst_31037 = (state_31142[(2)]);
var inst_31038 = (inst_31022 + (1));
var tmp31154 = inst_31021;
var tmp31155 = inst_31020;
var tmp31156 = inst_31019;
var inst_31019__$1 = tmp31156;
var inst_31020__$1 = tmp31155;
var inst_31021__$1 = tmp31154;
var inst_31022__$1 = inst_31038;
var state_31142__$1 = (function (){var statearr_31161 = state_31142;
(statearr_31161[(14)] = inst_31021__$1);

(statearr_31161[(15)] = inst_31022__$1);

(statearr_31161[(18)] = inst_31037);

(statearr_31161[(16)] = inst_31020__$1);

(statearr_31161[(17)] = inst_31019__$1);

return statearr_31161;
})();
var statearr_31162_31241 = state_31142__$1;
(statearr_31162_31241[(2)] = null);

(statearr_31162_31241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (21))){
var inst_31064 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
var statearr_31166_31242 = state_31142__$1;
(statearr_31166_31242[(2)] = inst_31064);

(statearr_31166_31242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (31))){
var inst_31090 = (state_31142[(11)]);
var inst_31094 = done.call(null,null);
var inst_31095 = cljs.core.async.untap_STAR_.call(null,m,inst_31090);
var state_31142__$1 = (function (){var statearr_31167 = state_31142;
(statearr_31167[(19)] = inst_31094);

return statearr_31167;
})();
var statearr_31168_31243 = state_31142__$1;
(statearr_31168_31243[(2)] = inst_31095);

(statearr_31168_31243[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (32))){
var inst_31083 = (state_31142[(9)]);
var inst_31084 = (state_31142[(20)]);
var inst_31085 = (state_31142[(12)]);
var inst_31082 = (state_31142[(21)]);
var inst_31097 = (state_31142[(2)]);
var inst_31098 = (inst_31085 + (1));
var tmp31163 = inst_31083;
var tmp31164 = inst_31084;
var tmp31165 = inst_31082;
var inst_31082__$1 = tmp31165;
var inst_31083__$1 = tmp31163;
var inst_31084__$1 = tmp31164;
var inst_31085__$1 = inst_31098;
var state_31142__$1 = (function (){var statearr_31169 = state_31142;
(statearr_31169[(22)] = inst_31097);

(statearr_31169[(9)] = inst_31083__$1);

(statearr_31169[(20)] = inst_31084__$1);

(statearr_31169[(12)] = inst_31085__$1);

(statearr_31169[(21)] = inst_31082__$1);

return statearr_31169;
})();
var statearr_31170_31244 = state_31142__$1;
(statearr_31170_31244[(2)] = null);

(statearr_31170_31244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (40))){
var inst_31110 = (state_31142[(23)]);
var inst_31114 = done.call(null,null);
var inst_31115 = cljs.core.async.untap_STAR_.call(null,m,inst_31110);
var state_31142__$1 = (function (){var statearr_31171 = state_31142;
(statearr_31171[(24)] = inst_31114);

return statearr_31171;
})();
var statearr_31172_31245 = state_31142__$1;
(statearr_31172_31245[(2)] = inst_31115);

(statearr_31172_31245[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (33))){
var inst_31101 = (state_31142[(25)]);
var inst_31103 = cljs.core.chunked_seq_QMARK_.call(null,inst_31101);
var state_31142__$1 = state_31142;
if(inst_31103){
var statearr_31173_31246 = state_31142__$1;
(statearr_31173_31246[(1)] = (36));

} else {
var statearr_31174_31247 = state_31142__$1;
(statearr_31174_31247[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (13))){
var inst_31031 = (state_31142[(26)]);
var inst_31034 = cljs.core.async.close_BANG_.call(null,inst_31031);
var state_31142__$1 = state_31142;
var statearr_31175_31248 = state_31142__$1;
(statearr_31175_31248[(2)] = inst_31034);

(statearr_31175_31248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (22))){
var inst_31054 = (state_31142[(8)]);
var inst_31057 = cljs.core.async.close_BANG_.call(null,inst_31054);
var state_31142__$1 = state_31142;
var statearr_31176_31249 = state_31142__$1;
(statearr_31176_31249[(2)] = inst_31057);

(statearr_31176_31249[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (36))){
var inst_31101 = (state_31142[(25)]);
var inst_31105 = cljs.core.chunk_first.call(null,inst_31101);
var inst_31106 = cljs.core.chunk_rest.call(null,inst_31101);
var inst_31107 = cljs.core.count.call(null,inst_31105);
var inst_31082 = inst_31106;
var inst_31083 = inst_31105;
var inst_31084 = inst_31107;
var inst_31085 = (0);
var state_31142__$1 = (function (){var statearr_31177 = state_31142;
(statearr_31177[(9)] = inst_31083);

(statearr_31177[(20)] = inst_31084);

(statearr_31177[(12)] = inst_31085);

(statearr_31177[(21)] = inst_31082);

return statearr_31177;
})();
var statearr_31178_31250 = state_31142__$1;
(statearr_31178_31250[(2)] = null);

(statearr_31178_31250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (41))){
var inst_31101 = (state_31142[(25)]);
var inst_31117 = (state_31142[(2)]);
var inst_31118 = cljs.core.next.call(null,inst_31101);
var inst_31082 = inst_31118;
var inst_31083 = null;
var inst_31084 = (0);
var inst_31085 = (0);
var state_31142__$1 = (function (){var statearr_31179 = state_31142;
(statearr_31179[(9)] = inst_31083);

(statearr_31179[(20)] = inst_31084);

(statearr_31179[(27)] = inst_31117);

(statearr_31179[(12)] = inst_31085);

(statearr_31179[(21)] = inst_31082);

return statearr_31179;
})();
var statearr_31180_31251 = state_31142__$1;
(statearr_31180_31251[(2)] = null);

(statearr_31180_31251[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (43))){
var state_31142__$1 = state_31142;
var statearr_31181_31252 = state_31142__$1;
(statearr_31181_31252[(2)] = null);

(statearr_31181_31252[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (29))){
var inst_31126 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
var statearr_31182_31253 = state_31142__$1;
(statearr_31182_31253[(2)] = inst_31126);

(statearr_31182_31253[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (44))){
var inst_31135 = (state_31142[(2)]);
var state_31142__$1 = (function (){var statearr_31183 = state_31142;
(statearr_31183[(28)] = inst_31135);

return statearr_31183;
})();
var statearr_31184_31254 = state_31142__$1;
(statearr_31184_31254[(2)] = null);

(statearr_31184_31254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (6))){
var inst_31074 = (state_31142[(29)]);
var inst_31073 = cljs.core.deref.call(null,cs);
var inst_31074__$1 = cljs.core.keys.call(null,inst_31073);
var inst_31075 = cljs.core.count.call(null,inst_31074__$1);
var inst_31076 = cljs.core.reset_BANG_.call(null,dctr,inst_31075);
var inst_31081 = cljs.core.seq.call(null,inst_31074__$1);
var inst_31082 = inst_31081;
var inst_31083 = null;
var inst_31084 = (0);
var inst_31085 = (0);
var state_31142__$1 = (function (){var statearr_31185 = state_31142;
(statearr_31185[(9)] = inst_31083);

(statearr_31185[(20)] = inst_31084);

(statearr_31185[(30)] = inst_31076);

(statearr_31185[(29)] = inst_31074__$1);

(statearr_31185[(12)] = inst_31085);

(statearr_31185[(21)] = inst_31082);

return statearr_31185;
})();
var statearr_31186_31255 = state_31142__$1;
(statearr_31186_31255[(2)] = null);

(statearr_31186_31255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (28))){
var inst_31101 = (state_31142[(25)]);
var inst_31082 = (state_31142[(21)]);
var inst_31101__$1 = cljs.core.seq.call(null,inst_31082);
var state_31142__$1 = (function (){var statearr_31187 = state_31142;
(statearr_31187[(25)] = inst_31101__$1);

return statearr_31187;
})();
if(inst_31101__$1){
var statearr_31188_31256 = state_31142__$1;
(statearr_31188_31256[(1)] = (33));

} else {
var statearr_31189_31257 = state_31142__$1;
(statearr_31189_31257[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (25))){
var inst_31084 = (state_31142[(20)]);
var inst_31085 = (state_31142[(12)]);
var inst_31087 = (inst_31085 < inst_31084);
var inst_31088 = inst_31087;
var state_31142__$1 = state_31142;
if(cljs.core.truth_(inst_31088)){
var statearr_31190_31258 = state_31142__$1;
(statearr_31190_31258[(1)] = (27));

} else {
var statearr_31191_31259 = state_31142__$1;
(statearr_31191_31259[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (34))){
var state_31142__$1 = state_31142;
var statearr_31192_31260 = state_31142__$1;
(statearr_31192_31260[(2)] = null);

(statearr_31192_31260[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (17))){
var state_31142__$1 = state_31142;
var statearr_31193_31261 = state_31142__$1;
(statearr_31193_31261[(2)] = null);

(statearr_31193_31261[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (3))){
var inst_31140 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31142__$1,inst_31140);
} else {
if((state_val_31143 === (12))){
var inst_31069 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
var statearr_31194_31262 = state_31142__$1;
(statearr_31194_31262[(2)] = inst_31069);

(statearr_31194_31262[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (2))){
var state_31142__$1 = state_31142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31142__$1,(4),ch);
} else {
if((state_val_31143 === (23))){
var state_31142__$1 = state_31142;
var statearr_31195_31263 = state_31142__$1;
(statearr_31195_31263[(2)] = null);

(statearr_31195_31263[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (35))){
var inst_31124 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
var statearr_31196_31264 = state_31142__$1;
(statearr_31196_31264[(2)] = inst_31124);

(statearr_31196_31264[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (19))){
var inst_31041 = (state_31142[(7)]);
var inst_31045 = cljs.core.chunk_first.call(null,inst_31041);
var inst_31046 = cljs.core.chunk_rest.call(null,inst_31041);
var inst_31047 = cljs.core.count.call(null,inst_31045);
var inst_31019 = inst_31046;
var inst_31020 = inst_31045;
var inst_31021 = inst_31047;
var inst_31022 = (0);
var state_31142__$1 = (function (){var statearr_31197 = state_31142;
(statearr_31197[(14)] = inst_31021);

(statearr_31197[(15)] = inst_31022);

(statearr_31197[(16)] = inst_31020);

(statearr_31197[(17)] = inst_31019);

return statearr_31197;
})();
var statearr_31198_31265 = state_31142__$1;
(statearr_31198_31265[(2)] = null);

(statearr_31198_31265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (11))){
var inst_31041 = (state_31142[(7)]);
var inst_31019 = (state_31142[(17)]);
var inst_31041__$1 = cljs.core.seq.call(null,inst_31019);
var state_31142__$1 = (function (){var statearr_31199 = state_31142;
(statearr_31199[(7)] = inst_31041__$1);

return statearr_31199;
})();
if(inst_31041__$1){
var statearr_31200_31266 = state_31142__$1;
(statearr_31200_31266[(1)] = (16));

} else {
var statearr_31201_31267 = state_31142__$1;
(statearr_31201_31267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (9))){
var inst_31071 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
var statearr_31202_31268 = state_31142__$1;
(statearr_31202_31268[(2)] = inst_31071);

(statearr_31202_31268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (5))){
var inst_31017 = cljs.core.deref.call(null,cs);
var inst_31018 = cljs.core.seq.call(null,inst_31017);
var inst_31019 = inst_31018;
var inst_31020 = null;
var inst_31021 = (0);
var inst_31022 = (0);
var state_31142__$1 = (function (){var statearr_31203 = state_31142;
(statearr_31203[(14)] = inst_31021);

(statearr_31203[(15)] = inst_31022);

(statearr_31203[(16)] = inst_31020);

(statearr_31203[(17)] = inst_31019);

return statearr_31203;
})();
var statearr_31204_31269 = state_31142__$1;
(statearr_31204_31269[(2)] = null);

(statearr_31204_31269[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (14))){
var state_31142__$1 = state_31142;
var statearr_31205_31270 = state_31142__$1;
(statearr_31205_31270[(2)] = null);

(statearr_31205_31270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (45))){
var inst_31132 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
var statearr_31206_31271 = state_31142__$1;
(statearr_31206_31271[(2)] = inst_31132);

(statearr_31206_31271[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (26))){
var inst_31074 = (state_31142[(29)]);
var inst_31128 = (state_31142[(2)]);
var inst_31129 = cljs.core.seq.call(null,inst_31074);
var state_31142__$1 = (function (){var statearr_31207 = state_31142;
(statearr_31207[(31)] = inst_31128);

return statearr_31207;
})();
if(inst_31129){
var statearr_31208_31272 = state_31142__$1;
(statearr_31208_31272[(1)] = (42));

} else {
var statearr_31209_31273 = state_31142__$1;
(statearr_31209_31273[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (16))){
var inst_31041 = (state_31142[(7)]);
var inst_31043 = cljs.core.chunked_seq_QMARK_.call(null,inst_31041);
var state_31142__$1 = state_31142;
if(inst_31043){
var statearr_31210_31274 = state_31142__$1;
(statearr_31210_31274[(1)] = (19));

} else {
var statearr_31211_31275 = state_31142__$1;
(statearr_31211_31275[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (38))){
var inst_31121 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
var statearr_31212_31276 = state_31142__$1;
(statearr_31212_31276[(2)] = inst_31121);

(statearr_31212_31276[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (30))){
var state_31142__$1 = state_31142;
var statearr_31213_31277 = state_31142__$1;
(statearr_31213_31277[(2)] = null);

(statearr_31213_31277[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (10))){
var inst_31022 = (state_31142[(15)]);
var inst_31020 = (state_31142[(16)]);
var inst_31030 = cljs.core._nth.call(null,inst_31020,inst_31022);
var inst_31031 = cljs.core.nth.call(null,inst_31030,(0),null);
var inst_31032 = cljs.core.nth.call(null,inst_31030,(1),null);
var state_31142__$1 = (function (){var statearr_31214 = state_31142;
(statearr_31214[(26)] = inst_31031);

return statearr_31214;
})();
if(cljs.core.truth_(inst_31032)){
var statearr_31215_31278 = state_31142__$1;
(statearr_31215_31278[(1)] = (13));

} else {
var statearr_31216_31279 = state_31142__$1;
(statearr_31216_31279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (18))){
var inst_31067 = (state_31142[(2)]);
var state_31142__$1 = state_31142;
var statearr_31217_31280 = state_31142__$1;
(statearr_31217_31280[(2)] = inst_31067);

(statearr_31217_31280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (42))){
var state_31142__$1 = state_31142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31142__$1,(45),dchan);
} else {
if((state_val_31143 === (37))){
var inst_31010 = (state_31142[(10)]);
var inst_31101 = (state_31142[(25)]);
var inst_31110 = (state_31142[(23)]);
var inst_31110__$1 = cljs.core.first.call(null,inst_31101);
var inst_31111 = cljs.core.async.put_BANG_.call(null,inst_31110__$1,inst_31010,done);
var state_31142__$1 = (function (){var statearr_31218 = state_31142;
(statearr_31218[(23)] = inst_31110__$1);

return statearr_31218;
})();
if(cljs.core.truth_(inst_31111)){
var statearr_31219_31281 = state_31142__$1;
(statearr_31219_31281[(1)] = (39));

} else {
var statearr_31220_31282 = state_31142__$1;
(statearr_31220_31282[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31143 === (8))){
var inst_31021 = (state_31142[(14)]);
var inst_31022 = (state_31142[(15)]);
var inst_31024 = (inst_31022 < inst_31021);
var inst_31025 = inst_31024;
var state_31142__$1 = state_31142;
if(cljs.core.truth_(inst_31025)){
var statearr_31221_31283 = state_31142__$1;
(statearr_31221_31283[(1)] = (10));

} else {
var statearr_31222_31284 = state_31142__$1;
(statearr_31222_31284[(1)] = (11));

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
});})(c__29907__auto___31230,cs,m,dchan,dctr,done))
;
return ((function (switch__29795__auto__,c__29907__auto___31230,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29796__auto__ = null;
var cljs$core$async$mult_$_state_machine__29796__auto____0 = (function (){
var statearr_31226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31226[(0)] = cljs$core$async$mult_$_state_machine__29796__auto__);

(statearr_31226[(1)] = (1));

return statearr_31226;
});
var cljs$core$async$mult_$_state_machine__29796__auto____1 = (function (state_31142){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_31142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e31227){if((e31227 instanceof Object)){
var ex__29799__auto__ = e31227;
var statearr_31228_31285 = state_31142;
(statearr_31228_31285[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31286 = state_31142;
state_31142 = G__31286;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29796__auto__ = function(state_31142){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29796__auto____1.call(this,state_31142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29796__auto____0;
cljs$core$async$mult_$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29796__auto____1;
return cljs$core$async$mult_$_state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto___31230,cs,m,dchan,dctr,done))
})();
var state__29909__auto__ = (function (){var statearr_31229 = f__29908__auto__.call(null);
(statearr_31229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___31230);

return statearr_31229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto___31230,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31287 = [];
var len__25909__auto___31290 = arguments.length;
var i__25910__auto___31291 = (0);
while(true){
if((i__25910__auto___31291 < len__25909__auto___31290)){
args31287.push((arguments[i__25910__auto___31291]));

var G__31292 = (i__25910__auto___31291 + (1));
i__25910__auto___31291 = G__31292;
continue;
} else {
}
break;
}

var G__31289 = args31287.length;
switch (G__31289) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31287.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m,ch);
} else {
var m__25498__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m,ch);
} else {
var m__25498__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m);
} else {
var m__25498__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m,state_map);
} else {
var m__25498__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m,mode);
} else {
var m__25498__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25916__auto__ = [];
var len__25909__auto___31304 = arguments.length;
var i__25910__auto___31305 = (0);
while(true){
if((i__25910__auto___31305 < len__25909__auto___31304)){
args__25916__auto__.push((arguments[i__25910__auto___31305]));

var G__31306 = (i__25910__auto___31305 + (1));
i__25910__auto___31305 = G__31306;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((3) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25917__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31298){
var map__31299 = p__31298;
var map__31299__$1 = ((((!((map__31299 == null)))?((((map__31299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31299):map__31299);
var opts = map__31299__$1;
var statearr_31301_31307 = state;
(statearr_31301_31307[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31299,map__31299__$1,opts){
return (function (val){
var statearr_31302_31308 = state;
(statearr_31302_31308[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31299,map__31299__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31303_31309 = state;
(statearr_31303_31309[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31294){
var G__31295 = cljs.core.first.call(null,seq31294);
var seq31294__$1 = cljs.core.next.call(null,seq31294);
var G__31296 = cljs.core.first.call(null,seq31294__$1);
var seq31294__$2 = cljs.core.next.call(null,seq31294__$1);
var G__31297 = cljs.core.first.call(null,seq31294__$2);
var seq31294__$3 = cljs.core.next.call(null,seq31294__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31295,G__31296,G__31297,seq31294__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31475 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31476){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31476 = meta31476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31477,meta31476__$1){
var self__ = this;
var _31477__$1 = this;
return (new cljs.core.async.t_cljs$core$async31475(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31476__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31477){
var self__ = this;
var _31477__$1 = this;
return self__.meta31476;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31475.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31475.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31476","meta31476",483724779,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31475";

cljs.core.async.t_cljs$core$async31475.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async31475");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31475 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31475(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31476){
return (new cljs.core.async.t_cljs$core$async31475(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31476));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31475(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29907__auto___31640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto___31640,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto___31640,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31577){
var state_val_31578 = (state_31577[(1)]);
if((state_val_31578 === (7))){
var inst_31493 = (state_31577[(2)]);
var state_31577__$1 = state_31577;
var statearr_31579_31641 = state_31577__$1;
(statearr_31579_31641[(2)] = inst_31493);

(statearr_31579_31641[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (20))){
var inst_31505 = (state_31577[(7)]);
var state_31577__$1 = state_31577;
var statearr_31580_31642 = state_31577__$1;
(statearr_31580_31642[(2)] = inst_31505);

(statearr_31580_31642[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (27))){
var state_31577__$1 = state_31577;
var statearr_31581_31643 = state_31577__$1;
(statearr_31581_31643[(2)] = null);

(statearr_31581_31643[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (1))){
var inst_31481 = (state_31577[(8)]);
var inst_31481__$1 = calc_state.call(null);
var inst_31483 = (inst_31481__$1 == null);
var inst_31484 = cljs.core.not.call(null,inst_31483);
var state_31577__$1 = (function (){var statearr_31582 = state_31577;
(statearr_31582[(8)] = inst_31481__$1);

return statearr_31582;
})();
if(inst_31484){
var statearr_31583_31644 = state_31577__$1;
(statearr_31583_31644[(1)] = (2));

} else {
var statearr_31584_31645 = state_31577__$1;
(statearr_31584_31645[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (24))){
var inst_31551 = (state_31577[(9)]);
var inst_31528 = (state_31577[(10)]);
var inst_31537 = (state_31577[(11)]);
var inst_31551__$1 = inst_31528.call(null,inst_31537);
var state_31577__$1 = (function (){var statearr_31585 = state_31577;
(statearr_31585[(9)] = inst_31551__$1);

return statearr_31585;
})();
if(cljs.core.truth_(inst_31551__$1)){
var statearr_31586_31646 = state_31577__$1;
(statearr_31586_31646[(1)] = (29));

} else {
var statearr_31587_31647 = state_31577__$1;
(statearr_31587_31647[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (4))){
var inst_31496 = (state_31577[(2)]);
var state_31577__$1 = state_31577;
if(cljs.core.truth_(inst_31496)){
var statearr_31588_31648 = state_31577__$1;
(statearr_31588_31648[(1)] = (8));

} else {
var statearr_31589_31649 = state_31577__$1;
(statearr_31589_31649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (15))){
var inst_31522 = (state_31577[(2)]);
var state_31577__$1 = state_31577;
if(cljs.core.truth_(inst_31522)){
var statearr_31590_31650 = state_31577__$1;
(statearr_31590_31650[(1)] = (19));

} else {
var statearr_31591_31651 = state_31577__$1;
(statearr_31591_31651[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (21))){
var inst_31527 = (state_31577[(12)]);
var inst_31527__$1 = (state_31577[(2)]);
var inst_31528 = cljs.core.get.call(null,inst_31527__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31529 = cljs.core.get.call(null,inst_31527__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31530 = cljs.core.get.call(null,inst_31527__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31577__$1 = (function (){var statearr_31592 = state_31577;
(statearr_31592[(10)] = inst_31528);

(statearr_31592[(12)] = inst_31527__$1);

(statearr_31592[(13)] = inst_31529);

return statearr_31592;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31577__$1,(22),inst_31530);
} else {
if((state_val_31578 === (31))){
var inst_31559 = (state_31577[(2)]);
var state_31577__$1 = state_31577;
if(cljs.core.truth_(inst_31559)){
var statearr_31593_31652 = state_31577__$1;
(statearr_31593_31652[(1)] = (32));

} else {
var statearr_31594_31653 = state_31577__$1;
(statearr_31594_31653[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (32))){
var inst_31536 = (state_31577[(14)]);
var state_31577__$1 = state_31577;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31577__$1,(35),out,inst_31536);
} else {
if((state_val_31578 === (33))){
var inst_31527 = (state_31577[(12)]);
var inst_31505 = inst_31527;
var state_31577__$1 = (function (){var statearr_31595 = state_31577;
(statearr_31595[(7)] = inst_31505);

return statearr_31595;
})();
var statearr_31596_31654 = state_31577__$1;
(statearr_31596_31654[(2)] = null);

(statearr_31596_31654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (13))){
var inst_31505 = (state_31577[(7)]);
var inst_31512 = inst_31505.cljs$lang$protocol_mask$partition0$;
var inst_31513 = (inst_31512 & (64));
var inst_31514 = inst_31505.cljs$core$ISeq$;
var inst_31515 = (inst_31513) || (inst_31514);
var state_31577__$1 = state_31577;
if(cljs.core.truth_(inst_31515)){
var statearr_31597_31655 = state_31577__$1;
(statearr_31597_31655[(1)] = (16));

} else {
var statearr_31598_31656 = state_31577__$1;
(statearr_31598_31656[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (22))){
var inst_31536 = (state_31577[(14)]);
var inst_31537 = (state_31577[(11)]);
var inst_31535 = (state_31577[(2)]);
var inst_31536__$1 = cljs.core.nth.call(null,inst_31535,(0),null);
var inst_31537__$1 = cljs.core.nth.call(null,inst_31535,(1),null);
var inst_31538 = (inst_31536__$1 == null);
var inst_31539 = cljs.core._EQ_.call(null,inst_31537__$1,change);
var inst_31540 = (inst_31538) || (inst_31539);
var state_31577__$1 = (function (){var statearr_31599 = state_31577;
(statearr_31599[(14)] = inst_31536__$1);

(statearr_31599[(11)] = inst_31537__$1);

return statearr_31599;
})();
if(cljs.core.truth_(inst_31540)){
var statearr_31600_31657 = state_31577__$1;
(statearr_31600_31657[(1)] = (23));

} else {
var statearr_31601_31658 = state_31577__$1;
(statearr_31601_31658[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (36))){
var inst_31527 = (state_31577[(12)]);
var inst_31505 = inst_31527;
var state_31577__$1 = (function (){var statearr_31602 = state_31577;
(statearr_31602[(7)] = inst_31505);

return statearr_31602;
})();
var statearr_31603_31659 = state_31577__$1;
(statearr_31603_31659[(2)] = null);

(statearr_31603_31659[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (29))){
var inst_31551 = (state_31577[(9)]);
var state_31577__$1 = state_31577;
var statearr_31604_31660 = state_31577__$1;
(statearr_31604_31660[(2)] = inst_31551);

(statearr_31604_31660[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (6))){
var state_31577__$1 = state_31577;
var statearr_31605_31661 = state_31577__$1;
(statearr_31605_31661[(2)] = false);

(statearr_31605_31661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (28))){
var inst_31547 = (state_31577[(2)]);
var inst_31548 = calc_state.call(null);
var inst_31505 = inst_31548;
var state_31577__$1 = (function (){var statearr_31606 = state_31577;
(statearr_31606[(7)] = inst_31505);

(statearr_31606[(15)] = inst_31547);

return statearr_31606;
})();
var statearr_31607_31662 = state_31577__$1;
(statearr_31607_31662[(2)] = null);

(statearr_31607_31662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (25))){
var inst_31573 = (state_31577[(2)]);
var state_31577__$1 = state_31577;
var statearr_31608_31663 = state_31577__$1;
(statearr_31608_31663[(2)] = inst_31573);

(statearr_31608_31663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (34))){
var inst_31571 = (state_31577[(2)]);
var state_31577__$1 = state_31577;
var statearr_31609_31664 = state_31577__$1;
(statearr_31609_31664[(2)] = inst_31571);

(statearr_31609_31664[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (17))){
var state_31577__$1 = state_31577;
var statearr_31610_31665 = state_31577__$1;
(statearr_31610_31665[(2)] = false);

(statearr_31610_31665[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (3))){
var state_31577__$1 = state_31577;
var statearr_31611_31666 = state_31577__$1;
(statearr_31611_31666[(2)] = false);

(statearr_31611_31666[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (12))){
var inst_31575 = (state_31577[(2)]);
var state_31577__$1 = state_31577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31577__$1,inst_31575);
} else {
if((state_val_31578 === (2))){
var inst_31481 = (state_31577[(8)]);
var inst_31486 = inst_31481.cljs$lang$protocol_mask$partition0$;
var inst_31487 = (inst_31486 & (64));
var inst_31488 = inst_31481.cljs$core$ISeq$;
var inst_31489 = (inst_31487) || (inst_31488);
var state_31577__$1 = state_31577;
if(cljs.core.truth_(inst_31489)){
var statearr_31612_31667 = state_31577__$1;
(statearr_31612_31667[(1)] = (5));

} else {
var statearr_31613_31668 = state_31577__$1;
(statearr_31613_31668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (23))){
var inst_31536 = (state_31577[(14)]);
var inst_31542 = (inst_31536 == null);
var state_31577__$1 = state_31577;
if(cljs.core.truth_(inst_31542)){
var statearr_31614_31669 = state_31577__$1;
(statearr_31614_31669[(1)] = (26));

} else {
var statearr_31615_31670 = state_31577__$1;
(statearr_31615_31670[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (35))){
var inst_31562 = (state_31577[(2)]);
var state_31577__$1 = state_31577;
if(cljs.core.truth_(inst_31562)){
var statearr_31616_31671 = state_31577__$1;
(statearr_31616_31671[(1)] = (36));

} else {
var statearr_31617_31672 = state_31577__$1;
(statearr_31617_31672[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (19))){
var inst_31505 = (state_31577[(7)]);
var inst_31524 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31505);
var state_31577__$1 = state_31577;
var statearr_31618_31673 = state_31577__$1;
(statearr_31618_31673[(2)] = inst_31524);

(statearr_31618_31673[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (11))){
var inst_31505 = (state_31577[(7)]);
var inst_31509 = (inst_31505 == null);
var inst_31510 = cljs.core.not.call(null,inst_31509);
var state_31577__$1 = state_31577;
if(inst_31510){
var statearr_31619_31674 = state_31577__$1;
(statearr_31619_31674[(1)] = (13));

} else {
var statearr_31620_31675 = state_31577__$1;
(statearr_31620_31675[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (9))){
var inst_31481 = (state_31577[(8)]);
var state_31577__$1 = state_31577;
var statearr_31621_31676 = state_31577__$1;
(statearr_31621_31676[(2)] = inst_31481);

(statearr_31621_31676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (5))){
var state_31577__$1 = state_31577;
var statearr_31622_31677 = state_31577__$1;
(statearr_31622_31677[(2)] = true);

(statearr_31622_31677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (14))){
var state_31577__$1 = state_31577;
var statearr_31623_31678 = state_31577__$1;
(statearr_31623_31678[(2)] = false);

(statearr_31623_31678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (26))){
var inst_31537 = (state_31577[(11)]);
var inst_31544 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31537);
var state_31577__$1 = state_31577;
var statearr_31624_31679 = state_31577__$1;
(statearr_31624_31679[(2)] = inst_31544);

(statearr_31624_31679[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (16))){
var state_31577__$1 = state_31577;
var statearr_31625_31680 = state_31577__$1;
(statearr_31625_31680[(2)] = true);

(statearr_31625_31680[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (38))){
var inst_31567 = (state_31577[(2)]);
var state_31577__$1 = state_31577;
var statearr_31626_31681 = state_31577__$1;
(statearr_31626_31681[(2)] = inst_31567);

(statearr_31626_31681[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (30))){
var inst_31528 = (state_31577[(10)]);
var inst_31529 = (state_31577[(13)]);
var inst_31537 = (state_31577[(11)]);
var inst_31554 = cljs.core.empty_QMARK_.call(null,inst_31528);
var inst_31555 = inst_31529.call(null,inst_31537);
var inst_31556 = cljs.core.not.call(null,inst_31555);
var inst_31557 = (inst_31554) && (inst_31556);
var state_31577__$1 = state_31577;
var statearr_31627_31682 = state_31577__$1;
(statearr_31627_31682[(2)] = inst_31557);

(statearr_31627_31682[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (10))){
var inst_31481 = (state_31577[(8)]);
var inst_31501 = (state_31577[(2)]);
var inst_31502 = cljs.core.get.call(null,inst_31501,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31503 = cljs.core.get.call(null,inst_31501,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31504 = cljs.core.get.call(null,inst_31501,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31505 = inst_31481;
var state_31577__$1 = (function (){var statearr_31628 = state_31577;
(statearr_31628[(16)] = inst_31502);

(statearr_31628[(7)] = inst_31505);

(statearr_31628[(17)] = inst_31504);

(statearr_31628[(18)] = inst_31503);

return statearr_31628;
})();
var statearr_31629_31683 = state_31577__$1;
(statearr_31629_31683[(2)] = null);

(statearr_31629_31683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (18))){
var inst_31519 = (state_31577[(2)]);
var state_31577__$1 = state_31577;
var statearr_31630_31684 = state_31577__$1;
(statearr_31630_31684[(2)] = inst_31519);

(statearr_31630_31684[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (37))){
var state_31577__$1 = state_31577;
var statearr_31631_31685 = state_31577__$1;
(statearr_31631_31685[(2)] = null);

(statearr_31631_31685[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31578 === (8))){
var inst_31481 = (state_31577[(8)]);
var inst_31498 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31481);
var state_31577__$1 = state_31577;
var statearr_31632_31686 = state_31577__$1;
(statearr_31632_31686[(2)] = inst_31498);

(statearr_31632_31686[(1)] = (10));


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
});})(c__29907__auto___31640,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29795__auto__,c__29907__auto___31640,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29796__auto__ = null;
var cljs$core$async$mix_$_state_machine__29796__auto____0 = (function (){
var statearr_31636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31636[(0)] = cljs$core$async$mix_$_state_machine__29796__auto__);

(statearr_31636[(1)] = (1));

return statearr_31636;
});
var cljs$core$async$mix_$_state_machine__29796__auto____1 = (function (state_31577){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_31577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e31637){if((e31637 instanceof Object)){
var ex__29799__auto__ = e31637;
var statearr_31638_31687 = state_31577;
(statearr_31638_31687[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31688 = state_31577;
state_31577 = G__31688;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29796__auto__ = function(state_31577){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29796__auto____1.call(this,state_31577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29796__auto____0;
cljs$core$async$mix_$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29796__auto____1;
return cljs$core$async$mix_$_state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto___31640,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29909__auto__ = (function (){var statearr_31639 = f__29908__auto__.call(null);
(statearr_31639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___31640);

return statearr_31639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto___31640,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25497__auto__ = (((p == null))?null:p);
var m__25498__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25498__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25497__auto__ = (((p == null))?null:p);
var m__25498__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,p,v,ch);
} else {
var m__25498__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31689 = [];
var len__25909__auto___31692 = arguments.length;
var i__25910__auto___31693 = (0);
while(true){
if((i__25910__auto___31693 < len__25909__auto___31692)){
args31689.push((arguments[i__25910__auto___31693]));

var G__31694 = (i__25910__auto___31693 + (1));
i__25910__auto___31693 = G__31694;
continue;
} else {
}
break;
}

var G__31691 = args31689.length;
switch (G__31691) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31689.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25497__auto__ = (((p == null))?null:p);
var m__25498__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,p);
} else {
var m__25498__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25497__auto__ = (((p == null))?null:p);
var m__25498__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,p,v);
} else {
var m__25498__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31697 = [];
var len__25909__auto___31822 = arguments.length;
var i__25910__auto___31823 = (0);
while(true){
if((i__25910__auto___31823 < len__25909__auto___31822)){
args31697.push((arguments[i__25910__auto___31823]));

var G__31824 = (i__25910__auto___31823 + (1));
i__25910__auto___31823 = G__31824;
continue;
} else {
}
break;
}

var G__31699 = args31697.length;
switch (G__31699) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31697.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24834__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24834__auto__,mults){
return (function (p1__31696_SHARP_){
if(cljs.core.truth_(p1__31696_SHARP_.call(null,topic))){
return p1__31696_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31696_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24834__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31700 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31700 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31701){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31701 = meta31701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31702,meta31701__$1){
var self__ = this;
var _31702__$1 = this;
return (new cljs.core.async.t_cljs$core$async31700(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31701__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31700.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31702){
var self__ = this;
var _31702__$1 = this;
return self__.meta31701;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31700.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31700.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31700.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31700.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31700.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31700.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31700.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31700.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31701","meta31701",1584132026,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31700.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31700";

cljs.core.async.t_cljs$core$async31700.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async31700");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31700 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31700(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31701){
return (new cljs.core.async.t_cljs$core$async31700(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31701));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31700(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29907__auto___31826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto___31826,mults,ensure_mult,p){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto___31826,mults,ensure_mult,p){
return (function (state_31774){
var state_val_31775 = (state_31774[(1)]);
if((state_val_31775 === (7))){
var inst_31770 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31776_31827 = state_31774__$1;
(statearr_31776_31827[(2)] = inst_31770);

(statearr_31776_31827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (20))){
var state_31774__$1 = state_31774;
var statearr_31777_31828 = state_31774__$1;
(statearr_31777_31828[(2)] = null);

(statearr_31777_31828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (1))){
var state_31774__$1 = state_31774;
var statearr_31778_31829 = state_31774__$1;
(statearr_31778_31829[(2)] = null);

(statearr_31778_31829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (24))){
var inst_31753 = (state_31774[(7)]);
var inst_31762 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31753);
var state_31774__$1 = state_31774;
var statearr_31779_31830 = state_31774__$1;
(statearr_31779_31830[(2)] = inst_31762);

(statearr_31779_31830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (4))){
var inst_31705 = (state_31774[(8)]);
var inst_31705__$1 = (state_31774[(2)]);
var inst_31706 = (inst_31705__$1 == null);
var state_31774__$1 = (function (){var statearr_31780 = state_31774;
(statearr_31780[(8)] = inst_31705__$1);

return statearr_31780;
})();
if(cljs.core.truth_(inst_31706)){
var statearr_31781_31831 = state_31774__$1;
(statearr_31781_31831[(1)] = (5));

} else {
var statearr_31782_31832 = state_31774__$1;
(statearr_31782_31832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (15))){
var inst_31747 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31783_31833 = state_31774__$1;
(statearr_31783_31833[(2)] = inst_31747);

(statearr_31783_31833[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (21))){
var inst_31767 = (state_31774[(2)]);
var state_31774__$1 = (function (){var statearr_31784 = state_31774;
(statearr_31784[(9)] = inst_31767);

return statearr_31784;
})();
var statearr_31785_31834 = state_31774__$1;
(statearr_31785_31834[(2)] = null);

(statearr_31785_31834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (13))){
var inst_31729 = (state_31774[(10)]);
var inst_31731 = cljs.core.chunked_seq_QMARK_.call(null,inst_31729);
var state_31774__$1 = state_31774;
if(inst_31731){
var statearr_31786_31835 = state_31774__$1;
(statearr_31786_31835[(1)] = (16));

} else {
var statearr_31787_31836 = state_31774__$1;
(statearr_31787_31836[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (22))){
var inst_31759 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
if(cljs.core.truth_(inst_31759)){
var statearr_31788_31837 = state_31774__$1;
(statearr_31788_31837[(1)] = (23));

} else {
var statearr_31789_31838 = state_31774__$1;
(statearr_31789_31838[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (6))){
var inst_31755 = (state_31774[(11)]);
var inst_31705 = (state_31774[(8)]);
var inst_31753 = (state_31774[(7)]);
var inst_31753__$1 = topic_fn.call(null,inst_31705);
var inst_31754 = cljs.core.deref.call(null,mults);
var inst_31755__$1 = cljs.core.get.call(null,inst_31754,inst_31753__$1);
var state_31774__$1 = (function (){var statearr_31790 = state_31774;
(statearr_31790[(11)] = inst_31755__$1);

(statearr_31790[(7)] = inst_31753__$1);

return statearr_31790;
})();
if(cljs.core.truth_(inst_31755__$1)){
var statearr_31791_31839 = state_31774__$1;
(statearr_31791_31839[(1)] = (19));

} else {
var statearr_31792_31840 = state_31774__$1;
(statearr_31792_31840[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (25))){
var inst_31764 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31793_31841 = state_31774__$1;
(statearr_31793_31841[(2)] = inst_31764);

(statearr_31793_31841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (17))){
var inst_31729 = (state_31774[(10)]);
var inst_31738 = cljs.core.first.call(null,inst_31729);
var inst_31739 = cljs.core.async.muxch_STAR_.call(null,inst_31738);
var inst_31740 = cljs.core.async.close_BANG_.call(null,inst_31739);
var inst_31741 = cljs.core.next.call(null,inst_31729);
var inst_31715 = inst_31741;
var inst_31716 = null;
var inst_31717 = (0);
var inst_31718 = (0);
var state_31774__$1 = (function (){var statearr_31794 = state_31774;
(statearr_31794[(12)] = inst_31716);

(statearr_31794[(13)] = inst_31717);

(statearr_31794[(14)] = inst_31715);

(statearr_31794[(15)] = inst_31718);

(statearr_31794[(16)] = inst_31740);

return statearr_31794;
})();
var statearr_31795_31842 = state_31774__$1;
(statearr_31795_31842[(2)] = null);

(statearr_31795_31842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (3))){
var inst_31772 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31774__$1,inst_31772);
} else {
if((state_val_31775 === (12))){
var inst_31749 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31796_31843 = state_31774__$1;
(statearr_31796_31843[(2)] = inst_31749);

(statearr_31796_31843[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (2))){
var state_31774__$1 = state_31774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31774__$1,(4),ch);
} else {
if((state_val_31775 === (23))){
var state_31774__$1 = state_31774;
var statearr_31797_31844 = state_31774__$1;
(statearr_31797_31844[(2)] = null);

(statearr_31797_31844[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (19))){
var inst_31755 = (state_31774[(11)]);
var inst_31705 = (state_31774[(8)]);
var inst_31757 = cljs.core.async.muxch_STAR_.call(null,inst_31755);
var state_31774__$1 = state_31774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31774__$1,(22),inst_31757,inst_31705);
} else {
if((state_val_31775 === (11))){
var inst_31715 = (state_31774[(14)]);
var inst_31729 = (state_31774[(10)]);
var inst_31729__$1 = cljs.core.seq.call(null,inst_31715);
var state_31774__$1 = (function (){var statearr_31798 = state_31774;
(statearr_31798[(10)] = inst_31729__$1);

return statearr_31798;
})();
if(inst_31729__$1){
var statearr_31799_31845 = state_31774__$1;
(statearr_31799_31845[(1)] = (13));

} else {
var statearr_31800_31846 = state_31774__$1;
(statearr_31800_31846[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (9))){
var inst_31751 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31801_31847 = state_31774__$1;
(statearr_31801_31847[(2)] = inst_31751);

(statearr_31801_31847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (5))){
var inst_31712 = cljs.core.deref.call(null,mults);
var inst_31713 = cljs.core.vals.call(null,inst_31712);
var inst_31714 = cljs.core.seq.call(null,inst_31713);
var inst_31715 = inst_31714;
var inst_31716 = null;
var inst_31717 = (0);
var inst_31718 = (0);
var state_31774__$1 = (function (){var statearr_31802 = state_31774;
(statearr_31802[(12)] = inst_31716);

(statearr_31802[(13)] = inst_31717);

(statearr_31802[(14)] = inst_31715);

(statearr_31802[(15)] = inst_31718);

return statearr_31802;
})();
var statearr_31803_31848 = state_31774__$1;
(statearr_31803_31848[(2)] = null);

(statearr_31803_31848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (14))){
var state_31774__$1 = state_31774;
var statearr_31807_31849 = state_31774__$1;
(statearr_31807_31849[(2)] = null);

(statearr_31807_31849[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (16))){
var inst_31729 = (state_31774[(10)]);
var inst_31733 = cljs.core.chunk_first.call(null,inst_31729);
var inst_31734 = cljs.core.chunk_rest.call(null,inst_31729);
var inst_31735 = cljs.core.count.call(null,inst_31733);
var inst_31715 = inst_31734;
var inst_31716 = inst_31733;
var inst_31717 = inst_31735;
var inst_31718 = (0);
var state_31774__$1 = (function (){var statearr_31808 = state_31774;
(statearr_31808[(12)] = inst_31716);

(statearr_31808[(13)] = inst_31717);

(statearr_31808[(14)] = inst_31715);

(statearr_31808[(15)] = inst_31718);

return statearr_31808;
})();
var statearr_31809_31850 = state_31774__$1;
(statearr_31809_31850[(2)] = null);

(statearr_31809_31850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (10))){
var inst_31716 = (state_31774[(12)]);
var inst_31717 = (state_31774[(13)]);
var inst_31715 = (state_31774[(14)]);
var inst_31718 = (state_31774[(15)]);
var inst_31723 = cljs.core._nth.call(null,inst_31716,inst_31718);
var inst_31724 = cljs.core.async.muxch_STAR_.call(null,inst_31723);
var inst_31725 = cljs.core.async.close_BANG_.call(null,inst_31724);
var inst_31726 = (inst_31718 + (1));
var tmp31804 = inst_31716;
var tmp31805 = inst_31717;
var tmp31806 = inst_31715;
var inst_31715__$1 = tmp31806;
var inst_31716__$1 = tmp31804;
var inst_31717__$1 = tmp31805;
var inst_31718__$1 = inst_31726;
var state_31774__$1 = (function (){var statearr_31810 = state_31774;
(statearr_31810[(17)] = inst_31725);

(statearr_31810[(12)] = inst_31716__$1);

(statearr_31810[(13)] = inst_31717__$1);

(statearr_31810[(14)] = inst_31715__$1);

(statearr_31810[(15)] = inst_31718__$1);

return statearr_31810;
})();
var statearr_31811_31851 = state_31774__$1;
(statearr_31811_31851[(2)] = null);

(statearr_31811_31851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (18))){
var inst_31744 = (state_31774[(2)]);
var state_31774__$1 = state_31774;
var statearr_31812_31852 = state_31774__$1;
(statearr_31812_31852[(2)] = inst_31744);

(statearr_31812_31852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31775 === (8))){
var inst_31717 = (state_31774[(13)]);
var inst_31718 = (state_31774[(15)]);
var inst_31720 = (inst_31718 < inst_31717);
var inst_31721 = inst_31720;
var state_31774__$1 = state_31774;
if(cljs.core.truth_(inst_31721)){
var statearr_31813_31853 = state_31774__$1;
(statearr_31813_31853[(1)] = (10));

} else {
var statearr_31814_31854 = state_31774__$1;
(statearr_31814_31854[(1)] = (11));

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
});})(c__29907__auto___31826,mults,ensure_mult,p))
;
return ((function (switch__29795__auto__,c__29907__auto___31826,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29796__auto__ = null;
var cljs$core$async$state_machine__29796__auto____0 = (function (){
var statearr_31818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31818[(0)] = cljs$core$async$state_machine__29796__auto__);

(statearr_31818[(1)] = (1));

return statearr_31818;
});
var cljs$core$async$state_machine__29796__auto____1 = (function (state_31774){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_31774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e31819){if((e31819 instanceof Object)){
var ex__29799__auto__ = e31819;
var statearr_31820_31855 = state_31774;
(statearr_31820_31855[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31856 = state_31774;
state_31774 = G__31856;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$state_machine__29796__auto__ = function(state_31774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29796__auto____1.call(this,state_31774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29796__auto____0;
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29796__auto____1;
return cljs$core$async$state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto___31826,mults,ensure_mult,p))
})();
var state__29909__auto__ = (function (){var statearr_31821 = f__29908__auto__.call(null);
(statearr_31821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___31826);

return statearr_31821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto___31826,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31857 = [];
var len__25909__auto___31860 = arguments.length;
var i__25910__auto___31861 = (0);
while(true){
if((i__25910__auto___31861 < len__25909__auto___31860)){
args31857.push((arguments[i__25910__auto___31861]));

var G__31862 = (i__25910__auto___31861 + (1));
i__25910__auto___31861 = G__31862;
continue;
} else {
}
break;
}

var G__31859 = args31857.length;
switch (G__31859) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31857.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31864 = [];
var len__25909__auto___31867 = arguments.length;
var i__25910__auto___31868 = (0);
while(true){
if((i__25910__auto___31868 < len__25909__auto___31867)){
args31864.push((arguments[i__25910__auto___31868]));

var G__31869 = (i__25910__auto___31868 + (1));
i__25910__auto___31868 = G__31869;
continue;
} else {
}
break;
}

var G__31866 = args31864.length;
switch (G__31866) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31864.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31871 = [];
var len__25909__auto___31942 = arguments.length;
var i__25910__auto___31943 = (0);
while(true){
if((i__25910__auto___31943 < len__25909__auto___31942)){
args31871.push((arguments[i__25910__auto___31943]));

var G__31944 = (i__25910__auto___31943 + (1));
i__25910__auto___31943 = G__31944;
continue;
} else {
}
break;
}

var G__31873 = args31871.length;
switch (G__31873) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31871.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29907__auto___31946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto___31946,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto___31946,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31912){
var state_val_31913 = (state_31912[(1)]);
if((state_val_31913 === (7))){
var state_31912__$1 = state_31912;
var statearr_31914_31947 = state_31912__$1;
(statearr_31914_31947[(2)] = null);

(statearr_31914_31947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (1))){
var state_31912__$1 = state_31912;
var statearr_31915_31948 = state_31912__$1;
(statearr_31915_31948[(2)] = null);

(statearr_31915_31948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (4))){
var inst_31876 = (state_31912[(7)]);
var inst_31878 = (inst_31876 < cnt);
var state_31912__$1 = state_31912;
if(cljs.core.truth_(inst_31878)){
var statearr_31916_31949 = state_31912__$1;
(statearr_31916_31949[(1)] = (6));

} else {
var statearr_31917_31950 = state_31912__$1;
(statearr_31917_31950[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (15))){
var inst_31908 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
var statearr_31918_31951 = state_31912__$1;
(statearr_31918_31951[(2)] = inst_31908);

(statearr_31918_31951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (13))){
var inst_31901 = cljs.core.async.close_BANG_.call(null,out);
var state_31912__$1 = state_31912;
var statearr_31919_31952 = state_31912__$1;
(statearr_31919_31952[(2)] = inst_31901);

(statearr_31919_31952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (6))){
var state_31912__$1 = state_31912;
var statearr_31920_31953 = state_31912__$1;
(statearr_31920_31953[(2)] = null);

(statearr_31920_31953[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (3))){
var inst_31910 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31912__$1,inst_31910);
} else {
if((state_val_31913 === (12))){
var inst_31898 = (state_31912[(8)]);
var inst_31898__$1 = (state_31912[(2)]);
var inst_31899 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31898__$1);
var state_31912__$1 = (function (){var statearr_31921 = state_31912;
(statearr_31921[(8)] = inst_31898__$1);

return statearr_31921;
})();
if(cljs.core.truth_(inst_31899)){
var statearr_31922_31954 = state_31912__$1;
(statearr_31922_31954[(1)] = (13));

} else {
var statearr_31923_31955 = state_31912__$1;
(statearr_31923_31955[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (2))){
var inst_31875 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31876 = (0);
var state_31912__$1 = (function (){var statearr_31924 = state_31912;
(statearr_31924[(9)] = inst_31875);

(statearr_31924[(7)] = inst_31876);

return statearr_31924;
})();
var statearr_31925_31956 = state_31912__$1;
(statearr_31925_31956[(2)] = null);

(statearr_31925_31956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (11))){
var inst_31876 = (state_31912[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31912,(10),Object,null,(9));
var inst_31885 = chs__$1.call(null,inst_31876);
var inst_31886 = done.call(null,inst_31876);
var inst_31887 = cljs.core.async.take_BANG_.call(null,inst_31885,inst_31886);
var state_31912__$1 = state_31912;
var statearr_31926_31957 = state_31912__$1;
(statearr_31926_31957[(2)] = inst_31887);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31912__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (9))){
var inst_31876 = (state_31912[(7)]);
var inst_31889 = (state_31912[(2)]);
var inst_31890 = (inst_31876 + (1));
var inst_31876__$1 = inst_31890;
var state_31912__$1 = (function (){var statearr_31927 = state_31912;
(statearr_31927[(10)] = inst_31889);

(statearr_31927[(7)] = inst_31876__$1);

return statearr_31927;
})();
var statearr_31928_31958 = state_31912__$1;
(statearr_31928_31958[(2)] = null);

(statearr_31928_31958[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (5))){
var inst_31896 = (state_31912[(2)]);
var state_31912__$1 = (function (){var statearr_31929 = state_31912;
(statearr_31929[(11)] = inst_31896);

return statearr_31929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31912__$1,(12),dchan);
} else {
if((state_val_31913 === (14))){
var inst_31898 = (state_31912[(8)]);
var inst_31903 = cljs.core.apply.call(null,f,inst_31898);
var state_31912__$1 = state_31912;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31912__$1,(16),out,inst_31903);
} else {
if((state_val_31913 === (16))){
var inst_31905 = (state_31912[(2)]);
var state_31912__$1 = (function (){var statearr_31930 = state_31912;
(statearr_31930[(12)] = inst_31905);

return statearr_31930;
})();
var statearr_31931_31959 = state_31912__$1;
(statearr_31931_31959[(2)] = null);

(statearr_31931_31959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (10))){
var inst_31880 = (state_31912[(2)]);
var inst_31881 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31912__$1 = (function (){var statearr_31932 = state_31912;
(statearr_31932[(13)] = inst_31880);

return statearr_31932;
})();
var statearr_31933_31960 = state_31912__$1;
(statearr_31933_31960[(2)] = inst_31881);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31912__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31913 === (8))){
var inst_31894 = (state_31912[(2)]);
var state_31912__$1 = state_31912;
var statearr_31934_31961 = state_31912__$1;
(statearr_31934_31961[(2)] = inst_31894);

(statearr_31934_31961[(1)] = (5));


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
});})(c__29907__auto___31946,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29795__auto__,c__29907__auto___31946,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29796__auto__ = null;
var cljs$core$async$state_machine__29796__auto____0 = (function (){
var statearr_31938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31938[(0)] = cljs$core$async$state_machine__29796__auto__);

(statearr_31938[(1)] = (1));

return statearr_31938;
});
var cljs$core$async$state_machine__29796__auto____1 = (function (state_31912){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_31912);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e31939){if((e31939 instanceof Object)){
var ex__29799__auto__ = e31939;
var statearr_31940_31962 = state_31912;
(statearr_31940_31962[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31963 = state_31912;
state_31912 = G__31963;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$state_machine__29796__auto__ = function(state_31912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29796__auto____1.call(this,state_31912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29796__auto____0;
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29796__auto____1;
return cljs$core$async$state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto___31946,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29909__auto__ = (function (){var statearr_31941 = f__29908__auto__.call(null);
(statearr_31941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___31946);

return statearr_31941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto___31946,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31965 = [];
var len__25909__auto___32023 = arguments.length;
var i__25910__auto___32024 = (0);
while(true){
if((i__25910__auto___32024 < len__25909__auto___32023)){
args31965.push((arguments[i__25910__auto___32024]));

var G__32025 = (i__25910__auto___32024 + (1));
i__25910__auto___32024 = G__32025;
continue;
} else {
}
break;
}

var G__31967 = args31965.length;
switch (G__31967) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31965.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29907__auto___32027 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto___32027,out){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto___32027,out){
return (function (state_31999){
var state_val_32000 = (state_31999[(1)]);
if((state_val_32000 === (7))){
var inst_31979 = (state_31999[(7)]);
var inst_31978 = (state_31999[(8)]);
var inst_31978__$1 = (state_31999[(2)]);
var inst_31979__$1 = cljs.core.nth.call(null,inst_31978__$1,(0),null);
var inst_31980 = cljs.core.nth.call(null,inst_31978__$1,(1),null);
var inst_31981 = (inst_31979__$1 == null);
var state_31999__$1 = (function (){var statearr_32001 = state_31999;
(statearr_32001[(7)] = inst_31979__$1);

(statearr_32001[(9)] = inst_31980);

(statearr_32001[(8)] = inst_31978__$1);

return statearr_32001;
})();
if(cljs.core.truth_(inst_31981)){
var statearr_32002_32028 = state_31999__$1;
(statearr_32002_32028[(1)] = (8));

} else {
var statearr_32003_32029 = state_31999__$1;
(statearr_32003_32029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (1))){
var inst_31968 = cljs.core.vec.call(null,chs);
var inst_31969 = inst_31968;
var state_31999__$1 = (function (){var statearr_32004 = state_31999;
(statearr_32004[(10)] = inst_31969);

return statearr_32004;
})();
var statearr_32005_32030 = state_31999__$1;
(statearr_32005_32030[(2)] = null);

(statearr_32005_32030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (4))){
var inst_31969 = (state_31999[(10)]);
var state_31999__$1 = state_31999;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31999__$1,(7),inst_31969);
} else {
if((state_val_32000 === (6))){
var inst_31995 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
var statearr_32006_32031 = state_31999__$1;
(statearr_32006_32031[(2)] = inst_31995);

(statearr_32006_32031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (3))){
var inst_31997 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31999__$1,inst_31997);
} else {
if((state_val_32000 === (2))){
var inst_31969 = (state_31999[(10)]);
var inst_31971 = cljs.core.count.call(null,inst_31969);
var inst_31972 = (inst_31971 > (0));
var state_31999__$1 = state_31999;
if(cljs.core.truth_(inst_31972)){
var statearr_32008_32032 = state_31999__$1;
(statearr_32008_32032[(1)] = (4));

} else {
var statearr_32009_32033 = state_31999__$1;
(statearr_32009_32033[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (11))){
var inst_31969 = (state_31999[(10)]);
var inst_31988 = (state_31999[(2)]);
var tmp32007 = inst_31969;
var inst_31969__$1 = tmp32007;
var state_31999__$1 = (function (){var statearr_32010 = state_31999;
(statearr_32010[(11)] = inst_31988);

(statearr_32010[(10)] = inst_31969__$1);

return statearr_32010;
})();
var statearr_32011_32034 = state_31999__$1;
(statearr_32011_32034[(2)] = null);

(statearr_32011_32034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (9))){
var inst_31979 = (state_31999[(7)]);
var state_31999__$1 = state_31999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31999__$1,(11),out,inst_31979);
} else {
if((state_val_32000 === (5))){
var inst_31993 = cljs.core.async.close_BANG_.call(null,out);
var state_31999__$1 = state_31999;
var statearr_32012_32035 = state_31999__$1;
(statearr_32012_32035[(2)] = inst_31993);

(statearr_32012_32035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (10))){
var inst_31991 = (state_31999[(2)]);
var state_31999__$1 = state_31999;
var statearr_32013_32036 = state_31999__$1;
(statearr_32013_32036[(2)] = inst_31991);

(statearr_32013_32036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32000 === (8))){
var inst_31979 = (state_31999[(7)]);
var inst_31980 = (state_31999[(9)]);
var inst_31969 = (state_31999[(10)]);
var inst_31978 = (state_31999[(8)]);
var inst_31983 = (function (){var cs = inst_31969;
var vec__31974 = inst_31978;
var v = inst_31979;
var c = inst_31980;
return ((function (cs,vec__31974,v,c,inst_31979,inst_31980,inst_31969,inst_31978,state_val_32000,c__29907__auto___32027,out){
return (function (p1__31964_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31964_SHARP_);
});
;})(cs,vec__31974,v,c,inst_31979,inst_31980,inst_31969,inst_31978,state_val_32000,c__29907__auto___32027,out))
})();
var inst_31984 = cljs.core.filterv.call(null,inst_31983,inst_31969);
var inst_31969__$1 = inst_31984;
var state_31999__$1 = (function (){var statearr_32014 = state_31999;
(statearr_32014[(10)] = inst_31969__$1);

return statearr_32014;
})();
var statearr_32015_32037 = state_31999__$1;
(statearr_32015_32037[(2)] = null);

(statearr_32015_32037[(1)] = (2));


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
});})(c__29907__auto___32027,out))
;
return ((function (switch__29795__auto__,c__29907__auto___32027,out){
return (function() {
var cljs$core$async$state_machine__29796__auto__ = null;
var cljs$core$async$state_machine__29796__auto____0 = (function (){
var statearr_32019 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32019[(0)] = cljs$core$async$state_machine__29796__auto__);

(statearr_32019[(1)] = (1));

return statearr_32019;
});
var cljs$core$async$state_machine__29796__auto____1 = (function (state_31999){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_31999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e32020){if((e32020 instanceof Object)){
var ex__29799__auto__ = e32020;
var statearr_32021_32038 = state_31999;
(statearr_32021_32038[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32039 = state_31999;
state_31999 = G__32039;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$state_machine__29796__auto__ = function(state_31999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29796__auto____1.call(this,state_31999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29796__auto____0;
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29796__auto____1;
return cljs$core$async$state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto___32027,out))
})();
var state__29909__auto__ = (function (){var statearr_32022 = f__29908__auto__.call(null);
(statearr_32022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___32027);

return statearr_32022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto___32027,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32040 = [];
var len__25909__auto___32089 = arguments.length;
var i__25910__auto___32090 = (0);
while(true){
if((i__25910__auto___32090 < len__25909__auto___32089)){
args32040.push((arguments[i__25910__auto___32090]));

var G__32091 = (i__25910__auto___32090 + (1));
i__25910__auto___32090 = G__32091;
continue;
} else {
}
break;
}

var G__32042 = args32040.length;
switch (G__32042) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32040.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29907__auto___32093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto___32093,out){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto___32093,out){
return (function (state_32066){
var state_val_32067 = (state_32066[(1)]);
if((state_val_32067 === (7))){
var inst_32048 = (state_32066[(7)]);
var inst_32048__$1 = (state_32066[(2)]);
var inst_32049 = (inst_32048__$1 == null);
var inst_32050 = cljs.core.not.call(null,inst_32049);
var state_32066__$1 = (function (){var statearr_32068 = state_32066;
(statearr_32068[(7)] = inst_32048__$1);

return statearr_32068;
})();
if(inst_32050){
var statearr_32069_32094 = state_32066__$1;
(statearr_32069_32094[(1)] = (8));

} else {
var statearr_32070_32095 = state_32066__$1;
(statearr_32070_32095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (1))){
var inst_32043 = (0);
var state_32066__$1 = (function (){var statearr_32071 = state_32066;
(statearr_32071[(8)] = inst_32043);

return statearr_32071;
})();
var statearr_32072_32096 = state_32066__$1;
(statearr_32072_32096[(2)] = null);

(statearr_32072_32096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (4))){
var state_32066__$1 = state_32066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32066__$1,(7),ch);
} else {
if((state_val_32067 === (6))){
var inst_32061 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32073_32097 = state_32066__$1;
(statearr_32073_32097[(2)] = inst_32061);

(statearr_32073_32097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (3))){
var inst_32063 = (state_32066[(2)]);
var inst_32064 = cljs.core.async.close_BANG_.call(null,out);
var state_32066__$1 = (function (){var statearr_32074 = state_32066;
(statearr_32074[(9)] = inst_32063);

return statearr_32074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32066__$1,inst_32064);
} else {
if((state_val_32067 === (2))){
var inst_32043 = (state_32066[(8)]);
var inst_32045 = (inst_32043 < n);
var state_32066__$1 = state_32066;
if(cljs.core.truth_(inst_32045)){
var statearr_32075_32098 = state_32066__$1;
(statearr_32075_32098[(1)] = (4));

} else {
var statearr_32076_32099 = state_32066__$1;
(statearr_32076_32099[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (11))){
var inst_32043 = (state_32066[(8)]);
var inst_32053 = (state_32066[(2)]);
var inst_32054 = (inst_32043 + (1));
var inst_32043__$1 = inst_32054;
var state_32066__$1 = (function (){var statearr_32077 = state_32066;
(statearr_32077[(8)] = inst_32043__$1);

(statearr_32077[(10)] = inst_32053);

return statearr_32077;
})();
var statearr_32078_32100 = state_32066__$1;
(statearr_32078_32100[(2)] = null);

(statearr_32078_32100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (9))){
var state_32066__$1 = state_32066;
var statearr_32079_32101 = state_32066__$1;
(statearr_32079_32101[(2)] = null);

(statearr_32079_32101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (5))){
var state_32066__$1 = state_32066;
var statearr_32080_32102 = state_32066__$1;
(statearr_32080_32102[(2)] = null);

(statearr_32080_32102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (10))){
var inst_32058 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32081_32103 = state_32066__$1;
(statearr_32081_32103[(2)] = inst_32058);

(statearr_32081_32103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (8))){
var inst_32048 = (state_32066[(7)]);
var state_32066__$1 = state_32066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32066__$1,(11),out,inst_32048);
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
});})(c__29907__auto___32093,out))
;
return ((function (switch__29795__auto__,c__29907__auto___32093,out){
return (function() {
var cljs$core$async$state_machine__29796__auto__ = null;
var cljs$core$async$state_machine__29796__auto____0 = (function (){
var statearr_32085 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32085[(0)] = cljs$core$async$state_machine__29796__auto__);

(statearr_32085[(1)] = (1));

return statearr_32085;
});
var cljs$core$async$state_machine__29796__auto____1 = (function (state_32066){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_32066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e32086){if((e32086 instanceof Object)){
var ex__29799__auto__ = e32086;
var statearr_32087_32104 = state_32066;
(statearr_32087_32104[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32105 = state_32066;
state_32066 = G__32105;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$state_machine__29796__auto__ = function(state_32066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29796__auto____1.call(this,state_32066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29796__auto____0;
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29796__auto____1;
return cljs$core$async$state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto___32093,out))
})();
var state__29909__auto__ = (function (){var statearr_32088 = f__29908__auto__.call(null);
(statearr_32088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___32093);

return statearr_32088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto___32093,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32113 = (function (map_LT_,f,ch,meta32114){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32114 = meta32114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32115,meta32114__$1){
var self__ = this;
var _32115__$1 = this;
return (new cljs.core.async.t_cljs$core$async32113(self__.map_LT_,self__.f,self__.ch,meta32114__$1));
});

cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32115){
var self__ = this;
var _32115__$1 = this;
return self__.meta32114;
});

cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32116 = (function (map_LT_,f,ch,meta32114,_,fn1,meta32117){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32114 = meta32114;
this._ = _;
this.fn1 = fn1;
this.meta32117 = meta32117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32118,meta32117__$1){
var self__ = this;
var _32118__$1 = this;
return (new cljs.core.async.t_cljs$core$async32116(self__.map_LT_,self__.f,self__.ch,self__.meta32114,self__._,self__.fn1,meta32117__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32118){
var self__ = this;
var _32118__$1 = this;
return self__.meta32117;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32116.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32116.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32106_SHARP_){
return f1.call(null,(((p1__32106_SHARP_ == null))?null:self__.f.call(null,p1__32106_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32116.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32114","meta32114",-1501481273,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32113","cljs.core.async/t_cljs$core$async32113",1496004617,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32117","meta32117",-712745879,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32116";

cljs.core.async.t_cljs$core$async32116.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async32116");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32116 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32116(map_LT___$1,f__$1,ch__$1,meta32114__$1,___$2,fn1__$1,meta32117){
return (new cljs.core.async.t_cljs$core$async32116(map_LT___$1,f__$1,ch__$1,meta32114__$1,___$2,fn1__$1,meta32117));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32116(self__.map_LT_,self__.f,self__.ch,self__.meta32114,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24822__auto__ = ret;
if(cljs.core.truth_(and__24822__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24822__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32113.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32114","meta32114",-1501481273,null)], null);
});

cljs.core.async.t_cljs$core$async32113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32113";

cljs.core.async.t_cljs$core$async32113.cljs$lang$ctorPrWriter = (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async32113");
});

cljs.core.async.__GT_t_cljs$core$async32113 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32113(map_LT___$1,f__$1,ch__$1,meta32114){
return (new cljs.core.async.t_cljs$core$async32113(map_LT___$1,f__$1,ch__$1,meta32114));
});

}

return (new cljs.core.async.t_cljs$core$async32113(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32122 = (function (map_GT_,f,ch,meta32123){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32123 = meta32123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32124,meta32123__$1){
var self__ = this;
var _32124__$1 = this;
return (new cljs.core.async.t_cljs$core$async32122(self__.map_GT_,self__.f,self__.ch,meta32123__$1));
});

cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32124){
var self__ = this;
var _32124__$1 = this;
return self__.meta32123;
});

cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32122.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32123","meta32123",-134938015,null)], null);
});

cljs.core.async.t_cljs$core$async32122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32122";

cljs.core.async.t_cljs$core$async32122.cljs$lang$ctorPrWriter = (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async32122");
});

cljs.core.async.__GT_t_cljs$core$async32122 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32122(map_GT___$1,f__$1,ch__$1,meta32123){
return (new cljs.core.async.t_cljs$core$async32122(map_GT___$1,f__$1,ch__$1,meta32123));
});

}

return (new cljs.core.async.t_cljs$core$async32122(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32128 = (function (filter_GT_,p,ch,meta32129){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32129 = meta32129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32130,meta32129__$1){
var self__ = this;
var _32130__$1 = this;
return (new cljs.core.async.t_cljs$core$async32128(self__.filter_GT_,self__.p,self__.ch,meta32129__$1));
});

cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32130){
var self__ = this;
var _32130__$1 = this;
return self__.meta32129;
});

cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32128.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32129","meta32129",756680363,null)], null);
});

cljs.core.async.t_cljs$core$async32128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32128";

cljs.core.async.t_cljs$core$async32128.cljs$lang$ctorPrWriter = (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async32128");
});

cljs.core.async.__GT_t_cljs$core$async32128 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32128(filter_GT___$1,p__$1,ch__$1,meta32129){
return (new cljs.core.async.t_cljs$core$async32128(filter_GT___$1,p__$1,ch__$1,meta32129));
});

}

return (new cljs.core.async.t_cljs$core$async32128(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32131 = [];
var len__25909__auto___32175 = arguments.length;
var i__25910__auto___32176 = (0);
while(true){
if((i__25910__auto___32176 < len__25909__auto___32175)){
args32131.push((arguments[i__25910__auto___32176]));

var G__32177 = (i__25910__auto___32176 + (1));
i__25910__auto___32176 = G__32177;
continue;
} else {
}
break;
}

var G__32133 = args32131.length;
switch (G__32133) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32131.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29907__auto___32179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto___32179,out){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto___32179,out){
return (function (state_32154){
var state_val_32155 = (state_32154[(1)]);
if((state_val_32155 === (7))){
var inst_32150 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
var statearr_32156_32180 = state_32154__$1;
(statearr_32156_32180[(2)] = inst_32150);

(statearr_32156_32180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (1))){
var state_32154__$1 = state_32154;
var statearr_32157_32181 = state_32154__$1;
(statearr_32157_32181[(2)] = null);

(statearr_32157_32181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (4))){
var inst_32136 = (state_32154[(7)]);
var inst_32136__$1 = (state_32154[(2)]);
var inst_32137 = (inst_32136__$1 == null);
var state_32154__$1 = (function (){var statearr_32158 = state_32154;
(statearr_32158[(7)] = inst_32136__$1);

return statearr_32158;
})();
if(cljs.core.truth_(inst_32137)){
var statearr_32159_32182 = state_32154__$1;
(statearr_32159_32182[(1)] = (5));

} else {
var statearr_32160_32183 = state_32154__$1;
(statearr_32160_32183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (6))){
var inst_32136 = (state_32154[(7)]);
var inst_32141 = p.call(null,inst_32136);
var state_32154__$1 = state_32154;
if(cljs.core.truth_(inst_32141)){
var statearr_32161_32184 = state_32154__$1;
(statearr_32161_32184[(1)] = (8));

} else {
var statearr_32162_32185 = state_32154__$1;
(statearr_32162_32185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (3))){
var inst_32152 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32154__$1,inst_32152);
} else {
if((state_val_32155 === (2))){
var state_32154__$1 = state_32154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32154__$1,(4),ch);
} else {
if((state_val_32155 === (11))){
var inst_32144 = (state_32154[(2)]);
var state_32154__$1 = state_32154;
var statearr_32163_32186 = state_32154__$1;
(statearr_32163_32186[(2)] = inst_32144);

(statearr_32163_32186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (9))){
var state_32154__$1 = state_32154;
var statearr_32164_32187 = state_32154__$1;
(statearr_32164_32187[(2)] = null);

(statearr_32164_32187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (5))){
var inst_32139 = cljs.core.async.close_BANG_.call(null,out);
var state_32154__$1 = state_32154;
var statearr_32165_32188 = state_32154__$1;
(statearr_32165_32188[(2)] = inst_32139);

(statearr_32165_32188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (10))){
var inst_32147 = (state_32154[(2)]);
var state_32154__$1 = (function (){var statearr_32166 = state_32154;
(statearr_32166[(8)] = inst_32147);

return statearr_32166;
})();
var statearr_32167_32189 = state_32154__$1;
(statearr_32167_32189[(2)] = null);

(statearr_32167_32189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32155 === (8))){
var inst_32136 = (state_32154[(7)]);
var state_32154__$1 = state_32154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32154__$1,(11),out,inst_32136);
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
});})(c__29907__auto___32179,out))
;
return ((function (switch__29795__auto__,c__29907__auto___32179,out){
return (function() {
var cljs$core$async$state_machine__29796__auto__ = null;
var cljs$core$async$state_machine__29796__auto____0 = (function (){
var statearr_32171 = [null,null,null,null,null,null,null,null,null];
(statearr_32171[(0)] = cljs$core$async$state_machine__29796__auto__);

(statearr_32171[(1)] = (1));

return statearr_32171;
});
var cljs$core$async$state_machine__29796__auto____1 = (function (state_32154){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_32154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e32172){if((e32172 instanceof Object)){
var ex__29799__auto__ = e32172;
var statearr_32173_32190 = state_32154;
(statearr_32173_32190[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32191 = state_32154;
state_32154 = G__32191;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$state_machine__29796__auto__ = function(state_32154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29796__auto____1.call(this,state_32154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29796__auto____0;
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29796__auto____1;
return cljs$core$async$state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto___32179,out))
})();
var state__29909__auto__ = (function (){var statearr_32174 = f__29908__auto__.call(null);
(statearr_32174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___32179);

return statearr_32174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto___32179,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32192 = [];
var len__25909__auto___32195 = arguments.length;
var i__25910__auto___32196 = (0);
while(true){
if((i__25910__auto___32196 < len__25909__auto___32195)){
args32192.push((arguments[i__25910__auto___32196]));

var G__32197 = (i__25910__auto___32196 + (1));
i__25910__auto___32196 = G__32197;
continue;
} else {
}
break;
}

var G__32194 = args32192.length;
switch (G__32194) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32192.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29907__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto__){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto__){
return (function (state_32364){
var state_val_32365 = (state_32364[(1)]);
if((state_val_32365 === (7))){
var inst_32360 = (state_32364[(2)]);
var state_32364__$1 = state_32364;
var statearr_32366_32407 = state_32364__$1;
(statearr_32366_32407[(2)] = inst_32360);

(statearr_32366_32407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (20))){
var inst_32330 = (state_32364[(7)]);
var inst_32341 = (state_32364[(2)]);
var inst_32342 = cljs.core.next.call(null,inst_32330);
var inst_32316 = inst_32342;
var inst_32317 = null;
var inst_32318 = (0);
var inst_32319 = (0);
var state_32364__$1 = (function (){var statearr_32367 = state_32364;
(statearr_32367[(8)] = inst_32317);

(statearr_32367[(9)] = inst_32319);

(statearr_32367[(10)] = inst_32316);

(statearr_32367[(11)] = inst_32318);

(statearr_32367[(12)] = inst_32341);

return statearr_32367;
})();
var statearr_32368_32408 = state_32364__$1;
(statearr_32368_32408[(2)] = null);

(statearr_32368_32408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (1))){
var state_32364__$1 = state_32364;
var statearr_32369_32409 = state_32364__$1;
(statearr_32369_32409[(2)] = null);

(statearr_32369_32409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (4))){
var inst_32305 = (state_32364[(13)]);
var inst_32305__$1 = (state_32364[(2)]);
var inst_32306 = (inst_32305__$1 == null);
var state_32364__$1 = (function (){var statearr_32370 = state_32364;
(statearr_32370[(13)] = inst_32305__$1);

return statearr_32370;
})();
if(cljs.core.truth_(inst_32306)){
var statearr_32371_32410 = state_32364__$1;
(statearr_32371_32410[(1)] = (5));

} else {
var statearr_32372_32411 = state_32364__$1;
(statearr_32372_32411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (15))){
var state_32364__$1 = state_32364;
var statearr_32376_32412 = state_32364__$1;
(statearr_32376_32412[(2)] = null);

(statearr_32376_32412[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (21))){
var state_32364__$1 = state_32364;
var statearr_32377_32413 = state_32364__$1;
(statearr_32377_32413[(2)] = null);

(statearr_32377_32413[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (13))){
var inst_32317 = (state_32364[(8)]);
var inst_32319 = (state_32364[(9)]);
var inst_32316 = (state_32364[(10)]);
var inst_32318 = (state_32364[(11)]);
var inst_32326 = (state_32364[(2)]);
var inst_32327 = (inst_32319 + (1));
var tmp32373 = inst_32317;
var tmp32374 = inst_32316;
var tmp32375 = inst_32318;
var inst_32316__$1 = tmp32374;
var inst_32317__$1 = tmp32373;
var inst_32318__$1 = tmp32375;
var inst_32319__$1 = inst_32327;
var state_32364__$1 = (function (){var statearr_32378 = state_32364;
(statearr_32378[(8)] = inst_32317__$1);

(statearr_32378[(9)] = inst_32319__$1);

(statearr_32378[(14)] = inst_32326);

(statearr_32378[(10)] = inst_32316__$1);

(statearr_32378[(11)] = inst_32318__$1);

return statearr_32378;
})();
var statearr_32379_32414 = state_32364__$1;
(statearr_32379_32414[(2)] = null);

(statearr_32379_32414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (22))){
var state_32364__$1 = state_32364;
var statearr_32380_32415 = state_32364__$1;
(statearr_32380_32415[(2)] = null);

(statearr_32380_32415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (6))){
var inst_32305 = (state_32364[(13)]);
var inst_32314 = f.call(null,inst_32305);
var inst_32315 = cljs.core.seq.call(null,inst_32314);
var inst_32316 = inst_32315;
var inst_32317 = null;
var inst_32318 = (0);
var inst_32319 = (0);
var state_32364__$1 = (function (){var statearr_32381 = state_32364;
(statearr_32381[(8)] = inst_32317);

(statearr_32381[(9)] = inst_32319);

(statearr_32381[(10)] = inst_32316);

(statearr_32381[(11)] = inst_32318);

return statearr_32381;
})();
var statearr_32382_32416 = state_32364__$1;
(statearr_32382_32416[(2)] = null);

(statearr_32382_32416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (17))){
var inst_32330 = (state_32364[(7)]);
var inst_32334 = cljs.core.chunk_first.call(null,inst_32330);
var inst_32335 = cljs.core.chunk_rest.call(null,inst_32330);
var inst_32336 = cljs.core.count.call(null,inst_32334);
var inst_32316 = inst_32335;
var inst_32317 = inst_32334;
var inst_32318 = inst_32336;
var inst_32319 = (0);
var state_32364__$1 = (function (){var statearr_32383 = state_32364;
(statearr_32383[(8)] = inst_32317);

(statearr_32383[(9)] = inst_32319);

(statearr_32383[(10)] = inst_32316);

(statearr_32383[(11)] = inst_32318);

return statearr_32383;
})();
var statearr_32384_32417 = state_32364__$1;
(statearr_32384_32417[(2)] = null);

(statearr_32384_32417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (3))){
var inst_32362 = (state_32364[(2)]);
var state_32364__$1 = state_32364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32364__$1,inst_32362);
} else {
if((state_val_32365 === (12))){
var inst_32350 = (state_32364[(2)]);
var state_32364__$1 = state_32364;
var statearr_32385_32418 = state_32364__$1;
(statearr_32385_32418[(2)] = inst_32350);

(statearr_32385_32418[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (2))){
var state_32364__$1 = state_32364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32364__$1,(4),in$);
} else {
if((state_val_32365 === (23))){
var inst_32358 = (state_32364[(2)]);
var state_32364__$1 = state_32364;
var statearr_32386_32419 = state_32364__$1;
(statearr_32386_32419[(2)] = inst_32358);

(statearr_32386_32419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (19))){
var inst_32345 = (state_32364[(2)]);
var state_32364__$1 = state_32364;
var statearr_32387_32420 = state_32364__$1;
(statearr_32387_32420[(2)] = inst_32345);

(statearr_32387_32420[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (11))){
var inst_32316 = (state_32364[(10)]);
var inst_32330 = (state_32364[(7)]);
var inst_32330__$1 = cljs.core.seq.call(null,inst_32316);
var state_32364__$1 = (function (){var statearr_32388 = state_32364;
(statearr_32388[(7)] = inst_32330__$1);

return statearr_32388;
})();
if(inst_32330__$1){
var statearr_32389_32421 = state_32364__$1;
(statearr_32389_32421[(1)] = (14));

} else {
var statearr_32390_32422 = state_32364__$1;
(statearr_32390_32422[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (9))){
var inst_32352 = (state_32364[(2)]);
var inst_32353 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32364__$1 = (function (){var statearr_32391 = state_32364;
(statearr_32391[(15)] = inst_32352);

return statearr_32391;
})();
if(cljs.core.truth_(inst_32353)){
var statearr_32392_32423 = state_32364__$1;
(statearr_32392_32423[(1)] = (21));

} else {
var statearr_32393_32424 = state_32364__$1;
(statearr_32393_32424[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (5))){
var inst_32308 = cljs.core.async.close_BANG_.call(null,out);
var state_32364__$1 = state_32364;
var statearr_32394_32425 = state_32364__$1;
(statearr_32394_32425[(2)] = inst_32308);

(statearr_32394_32425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (14))){
var inst_32330 = (state_32364[(7)]);
var inst_32332 = cljs.core.chunked_seq_QMARK_.call(null,inst_32330);
var state_32364__$1 = state_32364;
if(inst_32332){
var statearr_32395_32426 = state_32364__$1;
(statearr_32395_32426[(1)] = (17));

} else {
var statearr_32396_32427 = state_32364__$1;
(statearr_32396_32427[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (16))){
var inst_32348 = (state_32364[(2)]);
var state_32364__$1 = state_32364;
var statearr_32397_32428 = state_32364__$1;
(statearr_32397_32428[(2)] = inst_32348);

(statearr_32397_32428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32365 === (10))){
var inst_32317 = (state_32364[(8)]);
var inst_32319 = (state_32364[(9)]);
var inst_32324 = cljs.core._nth.call(null,inst_32317,inst_32319);
var state_32364__$1 = state_32364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32364__$1,(13),out,inst_32324);
} else {
if((state_val_32365 === (18))){
var inst_32330 = (state_32364[(7)]);
var inst_32339 = cljs.core.first.call(null,inst_32330);
var state_32364__$1 = state_32364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32364__$1,(20),out,inst_32339);
} else {
if((state_val_32365 === (8))){
var inst_32319 = (state_32364[(9)]);
var inst_32318 = (state_32364[(11)]);
var inst_32321 = (inst_32319 < inst_32318);
var inst_32322 = inst_32321;
var state_32364__$1 = state_32364;
if(cljs.core.truth_(inst_32322)){
var statearr_32398_32429 = state_32364__$1;
(statearr_32398_32429[(1)] = (10));

} else {
var statearr_32399_32430 = state_32364__$1;
(statearr_32399_32430[(1)] = (11));

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
});})(c__29907__auto__))
;
return ((function (switch__29795__auto__,c__29907__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29796__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29796__auto____0 = (function (){
var statearr_32403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32403[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29796__auto__);

(statearr_32403[(1)] = (1));

return statearr_32403;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29796__auto____1 = (function (state_32364){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_32364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e32404){if((e32404 instanceof Object)){
var ex__29799__auto__ = e32404;
var statearr_32405_32431 = state_32364;
(statearr_32405_32431[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32432 = state_32364;
state_32364 = G__32432;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29796__auto__ = function(state_32364){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29796__auto____1.call(this,state_32364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29796__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29796__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto__))
})();
var state__29909__auto__ = (function (){var statearr_32406 = f__29908__auto__.call(null);
(statearr_32406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto__);

return statearr_32406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto__))
);

return c__29907__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32433 = [];
var len__25909__auto___32436 = arguments.length;
var i__25910__auto___32437 = (0);
while(true){
if((i__25910__auto___32437 < len__25909__auto___32436)){
args32433.push((arguments[i__25910__auto___32437]));

var G__32438 = (i__25910__auto___32437 + (1));
i__25910__auto___32437 = G__32438;
continue;
} else {
}
break;
}

var G__32435 = args32433.length;
switch (G__32435) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32433.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32440 = [];
var len__25909__auto___32443 = arguments.length;
var i__25910__auto___32444 = (0);
while(true){
if((i__25910__auto___32444 < len__25909__auto___32443)){
args32440.push((arguments[i__25910__auto___32444]));

var G__32445 = (i__25910__auto___32444 + (1));
i__25910__auto___32444 = G__32445;
continue;
} else {
}
break;
}

var G__32442 = args32440.length;
switch (G__32442) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32440.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32447 = [];
var len__25909__auto___32498 = arguments.length;
var i__25910__auto___32499 = (0);
while(true){
if((i__25910__auto___32499 < len__25909__auto___32498)){
args32447.push((arguments[i__25910__auto___32499]));

var G__32500 = (i__25910__auto___32499 + (1));
i__25910__auto___32499 = G__32500;
continue;
} else {
}
break;
}

var G__32449 = args32447.length;
switch (G__32449) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32447.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29907__auto___32502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto___32502,out){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto___32502,out){
return (function (state_32473){
var state_val_32474 = (state_32473[(1)]);
if((state_val_32474 === (7))){
var inst_32468 = (state_32473[(2)]);
var state_32473__$1 = state_32473;
var statearr_32475_32503 = state_32473__$1;
(statearr_32475_32503[(2)] = inst_32468);

(statearr_32475_32503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (1))){
var inst_32450 = null;
var state_32473__$1 = (function (){var statearr_32476 = state_32473;
(statearr_32476[(7)] = inst_32450);

return statearr_32476;
})();
var statearr_32477_32504 = state_32473__$1;
(statearr_32477_32504[(2)] = null);

(statearr_32477_32504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (4))){
var inst_32453 = (state_32473[(8)]);
var inst_32453__$1 = (state_32473[(2)]);
var inst_32454 = (inst_32453__$1 == null);
var inst_32455 = cljs.core.not.call(null,inst_32454);
var state_32473__$1 = (function (){var statearr_32478 = state_32473;
(statearr_32478[(8)] = inst_32453__$1);

return statearr_32478;
})();
if(inst_32455){
var statearr_32479_32505 = state_32473__$1;
(statearr_32479_32505[(1)] = (5));

} else {
var statearr_32480_32506 = state_32473__$1;
(statearr_32480_32506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (6))){
var state_32473__$1 = state_32473;
var statearr_32481_32507 = state_32473__$1;
(statearr_32481_32507[(2)] = null);

(statearr_32481_32507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (3))){
var inst_32470 = (state_32473[(2)]);
var inst_32471 = cljs.core.async.close_BANG_.call(null,out);
var state_32473__$1 = (function (){var statearr_32482 = state_32473;
(statearr_32482[(9)] = inst_32470);

return statearr_32482;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32473__$1,inst_32471);
} else {
if((state_val_32474 === (2))){
var state_32473__$1 = state_32473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32473__$1,(4),ch);
} else {
if((state_val_32474 === (11))){
var inst_32453 = (state_32473[(8)]);
var inst_32462 = (state_32473[(2)]);
var inst_32450 = inst_32453;
var state_32473__$1 = (function (){var statearr_32483 = state_32473;
(statearr_32483[(10)] = inst_32462);

(statearr_32483[(7)] = inst_32450);

return statearr_32483;
})();
var statearr_32484_32508 = state_32473__$1;
(statearr_32484_32508[(2)] = null);

(statearr_32484_32508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (9))){
var inst_32453 = (state_32473[(8)]);
var state_32473__$1 = state_32473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32473__$1,(11),out,inst_32453);
} else {
if((state_val_32474 === (5))){
var inst_32453 = (state_32473[(8)]);
var inst_32450 = (state_32473[(7)]);
var inst_32457 = cljs.core._EQ_.call(null,inst_32453,inst_32450);
var state_32473__$1 = state_32473;
if(inst_32457){
var statearr_32486_32509 = state_32473__$1;
(statearr_32486_32509[(1)] = (8));

} else {
var statearr_32487_32510 = state_32473__$1;
(statearr_32487_32510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (10))){
var inst_32465 = (state_32473[(2)]);
var state_32473__$1 = state_32473;
var statearr_32488_32511 = state_32473__$1;
(statearr_32488_32511[(2)] = inst_32465);

(statearr_32488_32511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32474 === (8))){
var inst_32450 = (state_32473[(7)]);
var tmp32485 = inst_32450;
var inst_32450__$1 = tmp32485;
var state_32473__$1 = (function (){var statearr_32489 = state_32473;
(statearr_32489[(7)] = inst_32450__$1);

return statearr_32489;
})();
var statearr_32490_32512 = state_32473__$1;
(statearr_32490_32512[(2)] = null);

(statearr_32490_32512[(1)] = (2));


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
});})(c__29907__auto___32502,out))
;
return ((function (switch__29795__auto__,c__29907__auto___32502,out){
return (function() {
var cljs$core$async$state_machine__29796__auto__ = null;
var cljs$core$async$state_machine__29796__auto____0 = (function (){
var statearr_32494 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32494[(0)] = cljs$core$async$state_machine__29796__auto__);

(statearr_32494[(1)] = (1));

return statearr_32494;
});
var cljs$core$async$state_machine__29796__auto____1 = (function (state_32473){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_32473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e32495){if((e32495 instanceof Object)){
var ex__29799__auto__ = e32495;
var statearr_32496_32513 = state_32473;
(statearr_32496_32513[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32514 = state_32473;
state_32473 = G__32514;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$state_machine__29796__auto__ = function(state_32473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29796__auto____1.call(this,state_32473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29796__auto____0;
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29796__auto____1;
return cljs$core$async$state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto___32502,out))
})();
var state__29909__auto__ = (function (){var statearr_32497 = f__29908__auto__.call(null);
(statearr_32497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___32502);

return statearr_32497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto___32502,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32515 = [];
var len__25909__auto___32585 = arguments.length;
var i__25910__auto___32586 = (0);
while(true){
if((i__25910__auto___32586 < len__25909__auto___32585)){
args32515.push((arguments[i__25910__auto___32586]));

var G__32587 = (i__25910__auto___32586 + (1));
i__25910__auto___32586 = G__32587;
continue;
} else {
}
break;
}

var G__32517 = args32515.length;
switch (G__32517) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32515.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29907__auto___32589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto___32589,out){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto___32589,out){
return (function (state_32555){
var state_val_32556 = (state_32555[(1)]);
if((state_val_32556 === (7))){
var inst_32551 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32557_32590 = state_32555__$1;
(statearr_32557_32590[(2)] = inst_32551);

(statearr_32557_32590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (1))){
var inst_32518 = (new Array(n));
var inst_32519 = inst_32518;
var inst_32520 = (0);
var state_32555__$1 = (function (){var statearr_32558 = state_32555;
(statearr_32558[(7)] = inst_32519);

(statearr_32558[(8)] = inst_32520);

return statearr_32558;
})();
var statearr_32559_32591 = state_32555__$1;
(statearr_32559_32591[(2)] = null);

(statearr_32559_32591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (4))){
var inst_32523 = (state_32555[(9)]);
var inst_32523__$1 = (state_32555[(2)]);
var inst_32524 = (inst_32523__$1 == null);
var inst_32525 = cljs.core.not.call(null,inst_32524);
var state_32555__$1 = (function (){var statearr_32560 = state_32555;
(statearr_32560[(9)] = inst_32523__$1);

return statearr_32560;
})();
if(inst_32525){
var statearr_32561_32592 = state_32555__$1;
(statearr_32561_32592[(1)] = (5));

} else {
var statearr_32562_32593 = state_32555__$1;
(statearr_32562_32593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (15))){
var inst_32545 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32563_32594 = state_32555__$1;
(statearr_32563_32594[(2)] = inst_32545);

(statearr_32563_32594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (13))){
var state_32555__$1 = state_32555;
var statearr_32564_32595 = state_32555__$1;
(statearr_32564_32595[(2)] = null);

(statearr_32564_32595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (6))){
var inst_32520 = (state_32555[(8)]);
var inst_32541 = (inst_32520 > (0));
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32541)){
var statearr_32565_32596 = state_32555__$1;
(statearr_32565_32596[(1)] = (12));

} else {
var statearr_32566_32597 = state_32555__$1;
(statearr_32566_32597[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (3))){
var inst_32553 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32555__$1,inst_32553);
} else {
if((state_val_32556 === (12))){
var inst_32519 = (state_32555[(7)]);
var inst_32543 = cljs.core.vec.call(null,inst_32519);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32555__$1,(15),out,inst_32543);
} else {
if((state_val_32556 === (2))){
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32555__$1,(4),ch);
} else {
if((state_val_32556 === (11))){
var inst_32535 = (state_32555[(2)]);
var inst_32536 = (new Array(n));
var inst_32519 = inst_32536;
var inst_32520 = (0);
var state_32555__$1 = (function (){var statearr_32567 = state_32555;
(statearr_32567[(7)] = inst_32519);

(statearr_32567[(10)] = inst_32535);

(statearr_32567[(8)] = inst_32520);

return statearr_32567;
})();
var statearr_32568_32598 = state_32555__$1;
(statearr_32568_32598[(2)] = null);

(statearr_32568_32598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (9))){
var inst_32519 = (state_32555[(7)]);
var inst_32533 = cljs.core.vec.call(null,inst_32519);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32555__$1,(11),out,inst_32533);
} else {
if((state_val_32556 === (5))){
var inst_32528 = (state_32555[(11)]);
var inst_32519 = (state_32555[(7)]);
var inst_32523 = (state_32555[(9)]);
var inst_32520 = (state_32555[(8)]);
var inst_32527 = (inst_32519[inst_32520] = inst_32523);
var inst_32528__$1 = (inst_32520 + (1));
var inst_32529 = (inst_32528__$1 < n);
var state_32555__$1 = (function (){var statearr_32569 = state_32555;
(statearr_32569[(12)] = inst_32527);

(statearr_32569[(11)] = inst_32528__$1);

return statearr_32569;
})();
if(cljs.core.truth_(inst_32529)){
var statearr_32570_32599 = state_32555__$1;
(statearr_32570_32599[(1)] = (8));

} else {
var statearr_32571_32600 = state_32555__$1;
(statearr_32571_32600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (14))){
var inst_32548 = (state_32555[(2)]);
var inst_32549 = cljs.core.async.close_BANG_.call(null,out);
var state_32555__$1 = (function (){var statearr_32573 = state_32555;
(statearr_32573[(13)] = inst_32548);

return statearr_32573;
})();
var statearr_32574_32601 = state_32555__$1;
(statearr_32574_32601[(2)] = inst_32549);

(statearr_32574_32601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (10))){
var inst_32539 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32575_32602 = state_32555__$1;
(statearr_32575_32602[(2)] = inst_32539);

(statearr_32575_32602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (8))){
var inst_32528 = (state_32555[(11)]);
var inst_32519 = (state_32555[(7)]);
var tmp32572 = inst_32519;
var inst_32519__$1 = tmp32572;
var inst_32520 = inst_32528;
var state_32555__$1 = (function (){var statearr_32576 = state_32555;
(statearr_32576[(7)] = inst_32519__$1);

(statearr_32576[(8)] = inst_32520);

return statearr_32576;
})();
var statearr_32577_32603 = state_32555__$1;
(statearr_32577_32603[(2)] = null);

(statearr_32577_32603[(1)] = (2));


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
});})(c__29907__auto___32589,out))
;
return ((function (switch__29795__auto__,c__29907__auto___32589,out){
return (function() {
var cljs$core$async$state_machine__29796__auto__ = null;
var cljs$core$async$state_machine__29796__auto____0 = (function (){
var statearr_32581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32581[(0)] = cljs$core$async$state_machine__29796__auto__);

(statearr_32581[(1)] = (1));

return statearr_32581;
});
var cljs$core$async$state_machine__29796__auto____1 = (function (state_32555){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_32555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e32582){if((e32582 instanceof Object)){
var ex__29799__auto__ = e32582;
var statearr_32583_32604 = state_32555;
(statearr_32583_32604[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32605 = state_32555;
state_32555 = G__32605;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$state_machine__29796__auto__ = function(state_32555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29796__auto____1.call(this,state_32555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29796__auto____0;
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29796__auto____1;
return cljs$core$async$state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto___32589,out))
})();
var state__29909__auto__ = (function (){var statearr_32584 = f__29908__auto__.call(null);
(statearr_32584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___32589);

return statearr_32584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto___32589,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32606 = [];
var len__25909__auto___32680 = arguments.length;
var i__25910__auto___32681 = (0);
while(true){
if((i__25910__auto___32681 < len__25909__auto___32680)){
args32606.push((arguments[i__25910__auto___32681]));

var G__32682 = (i__25910__auto___32681 + (1));
i__25910__auto___32681 = G__32682;
continue;
} else {
}
break;
}

var G__32608 = args32606.length;
switch (G__32608) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32606.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29907__auto___32684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29907__auto___32684,out){
return (function (){
var f__29908__auto__ = (function (){var switch__29795__auto__ = ((function (c__29907__auto___32684,out){
return (function (state_32650){
var state_val_32651 = (state_32650[(1)]);
if((state_val_32651 === (7))){
var inst_32646 = (state_32650[(2)]);
var state_32650__$1 = state_32650;
var statearr_32652_32685 = state_32650__$1;
(statearr_32652_32685[(2)] = inst_32646);

(statearr_32652_32685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (1))){
var inst_32609 = [];
var inst_32610 = inst_32609;
var inst_32611 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32650__$1 = (function (){var statearr_32653 = state_32650;
(statearr_32653[(7)] = inst_32610);

(statearr_32653[(8)] = inst_32611);

return statearr_32653;
})();
var statearr_32654_32686 = state_32650__$1;
(statearr_32654_32686[(2)] = null);

(statearr_32654_32686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (4))){
var inst_32614 = (state_32650[(9)]);
var inst_32614__$1 = (state_32650[(2)]);
var inst_32615 = (inst_32614__$1 == null);
var inst_32616 = cljs.core.not.call(null,inst_32615);
var state_32650__$1 = (function (){var statearr_32655 = state_32650;
(statearr_32655[(9)] = inst_32614__$1);

return statearr_32655;
})();
if(inst_32616){
var statearr_32656_32687 = state_32650__$1;
(statearr_32656_32687[(1)] = (5));

} else {
var statearr_32657_32688 = state_32650__$1;
(statearr_32657_32688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (15))){
var inst_32640 = (state_32650[(2)]);
var state_32650__$1 = state_32650;
var statearr_32658_32689 = state_32650__$1;
(statearr_32658_32689[(2)] = inst_32640);

(statearr_32658_32689[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (13))){
var state_32650__$1 = state_32650;
var statearr_32659_32690 = state_32650__$1;
(statearr_32659_32690[(2)] = null);

(statearr_32659_32690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (6))){
var inst_32610 = (state_32650[(7)]);
var inst_32635 = inst_32610.length;
var inst_32636 = (inst_32635 > (0));
var state_32650__$1 = state_32650;
if(cljs.core.truth_(inst_32636)){
var statearr_32660_32691 = state_32650__$1;
(statearr_32660_32691[(1)] = (12));

} else {
var statearr_32661_32692 = state_32650__$1;
(statearr_32661_32692[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (3))){
var inst_32648 = (state_32650[(2)]);
var state_32650__$1 = state_32650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32650__$1,inst_32648);
} else {
if((state_val_32651 === (12))){
var inst_32610 = (state_32650[(7)]);
var inst_32638 = cljs.core.vec.call(null,inst_32610);
var state_32650__$1 = state_32650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32650__$1,(15),out,inst_32638);
} else {
if((state_val_32651 === (2))){
var state_32650__$1 = state_32650;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32650__$1,(4),ch);
} else {
if((state_val_32651 === (11))){
var inst_32614 = (state_32650[(9)]);
var inst_32618 = (state_32650[(10)]);
var inst_32628 = (state_32650[(2)]);
var inst_32629 = [];
var inst_32630 = inst_32629.push(inst_32614);
var inst_32610 = inst_32629;
var inst_32611 = inst_32618;
var state_32650__$1 = (function (){var statearr_32662 = state_32650;
(statearr_32662[(11)] = inst_32630);

(statearr_32662[(7)] = inst_32610);

(statearr_32662[(8)] = inst_32611);

(statearr_32662[(12)] = inst_32628);

return statearr_32662;
})();
var statearr_32663_32693 = state_32650__$1;
(statearr_32663_32693[(2)] = null);

(statearr_32663_32693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (9))){
var inst_32610 = (state_32650[(7)]);
var inst_32626 = cljs.core.vec.call(null,inst_32610);
var state_32650__$1 = state_32650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32650__$1,(11),out,inst_32626);
} else {
if((state_val_32651 === (5))){
var inst_32614 = (state_32650[(9)]);
var inst_32618 = (state_32650[(10)]);
var inst_32611 = (state_32650[(8)]);
var inst_32618__$1 = f.call(null,inst_32614);
var inst_32619 = cljs.core._EQ_.call(null,inst_32618__$1,inst_32611);
var inst_32620 = cljs.core.keyword_identical_QMARK_.call(null,inst_32611,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32621 = (inst_32619) || (inst_32620);
var state_32650__$1 = (function (){var statearr_32664 = state_32650;
(statearr_32664[(10)] = inst_32618__$1);

return statearr_32664;
})();
if(cljs.core.truth_(inst_32621)){
var statearr_32665_32694 = state_32650__$1;
(statearr_32665_32694[(1)] = (8));

} else {
var statearr_32666_32695 = state_32650__$1;
(statearr_32666_32695[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (14))){
var inst_32643 = (state_32650[(2)]);
var inst_32644 = cljs.core.async.close_BANG_.call(null,out);
var state_32650__$1 = (function (){var statearr_32668 = state_32650;
(statearr_32668[(13)] = inst_32643);

return statearr_32668;
})();
var statearr_32669_32696 = state_32650__$1;
(statearr_32669_32696[(2)] = inst_32644);

(statearr_32669_32696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (10))){
var inst_32633 = (state_32650[(2)]);
var state_32650__$1 = state_32650;
var statearr_32670_32697 = state_32650__$1;
(statearr_32670_32697[(2)] = inst_32633);

(statearr_32670_32697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32651 === (8))){
var inst_32614 = (state_32650[(9)]);
var inst_32618 = (state_32650[(10)]);
var inst_32610 = (state_32650[(7)]);
var inst_32623 = inst_32610.push(inst_32614);
var tmp32667 = inst_32610;
var inst_32610__$1 = tmp32667;
var inst_32611 = inst_32618;
var state_32650__$1 = (function (){var statearr_32671 = state_32650;
(statearr_32671[(14)] = inst_32623);

(statearr_32671[(7)] = inst_32610__$1);

(statearr_32671[(8)] = inst_32611);

return statearr_32671;
})();
var statearr_32672_32698 = state_32650__$1;
(statearr_32672_32698[(2)] = null);

(statearr_32672_32698[(1)] = (2));


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
});})(c__29907__auto___32684,out))
;
return ((function (switch__29795__auto__,c__29907__auto___32684,out){
return (function() {
var cljs$core$async$state_machine__29796__auto__ = null;
var cljs$core$async$state_machine__29796__auto____0 = (function (){
var statearr_32676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32676[(0)] = cljs$core$async$state_machine__29796__auto__);

(statearr_32676[(1)] = (1));

return statearr_32676;
});
var cljs$core$async$state_machine__29796__auto____1 = (function (state_32650){
while(true){
var ret_value__29797__auto__ = (function (){try{while(true){
var result__29798__auto__ = switch__29795__auto__.call(null,state_32650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29798__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29798__auto__;
}
break;
}
}catch (e32677){if((e32677 instanceof Object)){
var ex__29799__auto__ = e32677;
var statearr_32678_32699 = state_32650;
(statearr_32678_32699[(5)] = ex__29799__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32700 = state_32650;
state_32650 = G__32700;
continue;
} else {
return ret_value__29797__auto__;
}
break;
}
});
cljs$core$async$state_machine__29796__auto__ = function(state_32650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29796__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29796__auto____1.call(this,state_32650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29796__auto____0;
cljs$core$async$state_machine__29796__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29796__auto____1;
return cljs$core$async$state_machine__29796__auto__;
})()
;})(switch__29795__auto__,c__29907__auto___32684,out))
})();
var state__29909__auto__ = (function (){var statearr_32679 = f__29908__auto__.call(null);
(statearr_32679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29907__auto___32684);

return statearr_32679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29909__auto__);
});})(c__29907__auto___32684,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1513976120665