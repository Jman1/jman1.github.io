// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__51663 = arguments.length;
switch (G__51663) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51664 = (function (f,blockable,meta51665){
this.f = f;
this.blockable = blockable;
this.meta51665 = meta51665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51666,meta51665__$1){
var self__ = this;
var _51666__$1 = this;
return (new cljs.core.async.t_cljs$core$async51664(self__.f,self__.blockable,meta51665__$1));
}));

(cljs.core.async.t_cljs$core$async51664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51666){
var self__ = this;
var _51666__$1 = this;
return self__.meta51665;
}));

(cljs.core.async.t_cljs$core$async51664.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51664.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async51664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async51664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51665","meta51665",1057976967,null)], null);
}));

(cljs.core.async.t_cljs$core$async51664.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51664");

(cljs.core.async.t_cljs$core$async51664.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async51664");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51664.
 */
cljs.core.async.__GT_t_cljs$core$async51664 = (function cljs$core$async$__GT_t_cljs$core$async51664(f__$1,blockable__$1,meta51665){
return (new cljs.core.async.t_cljs$core$async51664(f__$1,blockable__$1,meta51665));
});

}

return (new cljs.core.async.t_cljs$core$async51664(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__51670 = arguments.length;
switch (G__51670) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__51673 = arguments.length;
switch (G__51673) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__51676 = arguments.length;
switch (G__51676) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_51678 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_51678);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_51678);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
var G__51680 = arguments.length;
switch (G__51680) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___51682 = n;
var x_51683 = (0);
while(true){
if((x_51683 < n__4613__auto___51682)){
(a[x_51683] = (0));

var G__51684 = (x_51683 + (1));
x_51683 = G__51684;
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

var G__51685 = (i + (1));
i = G__51685;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51686 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51686 = (function (flag,meta51687){
this.flag = flag;
this.meta51687 = meta51687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51688,meta51687__$1){
var self__ = this;
var _51688__$1 = this;
return (new cljs.core.async.t_cljs$core$async51686(self__.flag,meta51687__$1));
}));

(cljs.core.async.t_cljs$core$async51686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51688){
var self__ = this;
var _51688__$1 = this;
return self__.meta51687;
}));

(cljs.core.async.t_cljs$core$async51686.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async51686.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async51686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51687","meta51687",-532397272,null)], null);
}));

(cljs.core.async.t_cljs$core$async51686.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51686");

(cljs.core.async.t_cljs$core$async51686.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async51686");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51686.
 */
cljs.core.async.__GT_t_cljs$core$async51686 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async51686(flag__$1,meta51687){
return (new cljs.core.async.t_cljs$core$async51686(flag__$1,meta51687));
});

}

return (new cljs.core.async.t_cljs$core$async51686(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51689 = (function (flag,cb,meta51690){
this.flag = flag;
this.cb = cb;
this.meta51690 = meta51690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51691,meta51690__$1){
var self__ = this;
var _51691__$1 = this;
return (new cljs.core.async.t_cljs$core$async51689(self__.flag,self__.cb,meta51690__$1));
}));

(cljs.core.async.t_cljs$core$async51689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51691){
var self__ = this;
var _51691__$1 = this;
return self__.meta51690;
}));

(cljs.core.async.t_cljs$core$async51689.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51689.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async51689.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51689.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async51689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51690","meta51690",651321362,null)], null);
}));

(cljs.core.async.t_cljs$core$async51689.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51689");

(cljs.core.async.t_cljs$core$async51689.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async51689");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51689.
 */
cljs.core.async.__GT_t_cljs$core$async51689 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async51689(flag__$1,cb__$1,meta51690){
return (new cljs.core.async.t_cljs$core$async51689(flag__$1,cb__$1,meta51690));
});

}

return (new cljs.core.async.t_cljs$core$async51689(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__51692_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51692_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51693_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51693_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__51694 = (i + (1));
i = G__51694;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___51700 = arguments.length;
var i__4737__auto___51701 = (0);
while(true){
if((i__4737__auto___51701 < len__4736__auto___51700)){
args__4742__auto__.push((arguments[i__4737__auto___51701]));

var G__51702 = (i__4737__auto___51701 + (1));
i__4737__auto___51701 = G__51702;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51697){
var map__51698 = p__51697;
var map__51698__$1 = (((((!((map__51698 == null))))?(((((map__51698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51698):map__51698);
var opts = map__51698__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq51695){
var G__51696 = cljs.core.first.call(null,seq51695);
var seq51695__$1 = cljs.core.next.call(null,seq51695);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51696,seq51695__$1);
}));

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
var G__51704 = arguments.length;
switch (G__51704) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__49726__auto___51750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_51728){
var state_val_51729 = (state_51728[(1)]);
if((state_val_51729 === (7))){
var inst_51724 = (state_51728[(2)]);
var state_51728__$1 = state_51728;
var statearr_51730_51751 = state_51728__$1;
(statearr_51730_51751[(2)] = inst_51724);

(statearr_51730_51751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51729 === (1))){
var state_51728__$1 = state_51728;
var statearr_51731_51752 = state_51728__$1;
(statearr_51731_51752[(2)] = null);

(statearr_51731_51752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51729 === (4))){
var inst_51707 = (state_51728[(7)]);
var inst_51707__$1 = (state_51728[(2)]);
var inst_51708 = (inst_51707__$1 == null);
var state_51728__$1 = (function (){var statearr_51732 = state_51728;
(statearr_51732[(7)] = inst_51707__$1);

return statearr_51732;
})();
if(cljs.core.truth_(inst_51708)){
var statearr_51733_51753 = state_51728__$1;
(statearr_51733_51753[(1)] = (5));

} else {
var statearr_51734_51754 = state_51728__$1;
(statearr_51734_51754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51729 === (13))){
var state_51728__$1 = state_51728;
var statearr_51735_51755 = state_51728__$1;
(statearr_51735_51755[(2)] = null);

(statearr_51735_51755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51729 === (6))){
var inst_51707 = (state_51728[(7)]);
var state_51728__$1 = state_51728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51728__$1,(11),to,inst_51707);
} else {
if((state_val_51729 === (3))){
var inst_51726 = (state_51728[(2)]);
var state_51728__$1 = state_51728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51728__$1,inst_51726);
} else {
if((state_val_51729 === (12))){
var state_51728__$1 = state_51728;
var statearr_51736_51756 = state_51728__$1;
(statearr_51736_51756[(2)] = null);

(statearr_51736_51756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51729 === (2))){
var state_51728__$1 = state_51728;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51728__$1,(4),from);
} else {
if((state_val_51729 === (11))){
var inst_51717 = (state_51728[(2)]);
var state_51728__$1 = state_51728;
if(cljs.core.truth_(inst_51717)){
var statearr_51737_51757 = state_51728__$1;
(statearr_51737_51757[(1)] = (12));

} else {
var statearr_51738_51758 = state_51728__$1;
(statearr_51738_51758[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51729 === (9))){
var state_51728__$1 = state_51728;
var statearr_51739_51759 = state_51728__$1;
(statearr_51739_51759[(2)] = null);

(statearr_51739_51759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51729 === (5))){
var state_51728__$1 = state_51728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51740_51760 = state_51728__$1;
(statearr_51740_51760[(1)] = (8));

} else {
var statearr_51741_51761 = state_51728__$1;
(statearr_51741_51761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51729 === (14))){
var inst_51722 = (state_51728[(2)]);
var state_51728__$1 = state_51728;
var statearr_51742_51762 = state_51728__$1;
(statearr_51742_51762[(2)] = inst_51722);

(statearr_51742_51762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51729 === (10))){
var inst_51714 = (state_51728[(2)]);
var state_51728__$1 = state_51728;
var statearr_51743_51763 = state_51728__$1;
(statearr_51743_51763[(2)] = inst_51714);

(statearr_51743_51763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51729 === (8))){
var inst_51711 = cljs.core.async.close_BANG_.call(null,to);
var state_51728__$1 = state_51728;
var statearr_51744_51764 = state_51728__$1;
(statearr_51744_51764[(2)] = inst_51711);

(statearr_51744_51764[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__49559__auto__ = null;
var cljs$core$async$state_machine__49559__auto____0 = (function (){
var statearr_51745 = [null,null,null,null,null,null,null,null];
(statearr_51745[(0)] = cljs$core$async$state_machine__49559__auto__);

(statearr_51745[(1)] = (1));

return statearr_51745;
});
var cljs$core$async$state_machine__49559__auto____1 = (function (state_51728){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_51728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e51746){if((e51746 instanceof Object)){
var ex__49562__auto__ = e51746;
var statearr_51747_51765 = state_51728;
(statearr_51747_51765[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51766 = state_51728;
state_51728 = G__51766;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$state_machine__49559__auto__ = function(state_51728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49559__auto____1.call(this,state_51728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49559__auto____0;
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49559__auto____1;
return cljs$core$async$state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_51748 = f__49727__auto__.call(null);
(statearr_51748[(6)] = c__49726__auto___51750);

return statearr_51748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__51767){
var vec__51768 = p__51767;
var v = cljs.core.nth.call(null,vec__51768,(0),null);
var p = cljs.core.nth.call(null,vec__51768,(1),null);
var job = vec__51768;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__49726__auto___51939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_51775){
var state_val_51776 = (state_51775[(1)]);
if((state_val_51776 === (1))){
var state_51775__$1 = state_51775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51775__$1,(2),res,v);
} else {
if((state_val_51776 === (2))){
var inst_51772 = (state_51775[(2)]);
var inst_51773 = cljs.core.async.close_BANG_.call(null,res);
var state_51775__$1 = (function (){var statearr_51777 = state_51775;
(statearr_51777[(7)] = inst_51772);

return statearr_51777;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51775__$1,inst_51773);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____0 = (function (){
var statearr_51778 = [null,null,null,null,null,null,null,null];
(statearr_51778[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__);

(statearr_51778[(1)] = (1));

return statearr_51778;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____1 = (function (state_51775){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_51775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e51779){if((e51779 instanceof Object)){
var ex__49562__auto__ = e51779;
var statearr_51780_51940 = state_51775;
(statearr_51780_51940[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51941 = state_51775;
state_51775 = G__51941;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__ = function(state_51775){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____1.call(this,state_51775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_51781 = f__49727__auto__.call(null);
(statearr_51781[(6)] = c__49726__auto___51939);

return statearr_51781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__51782){
var vec__51783 = p__51782;
var v = cljs.core.nth.call(null,vec__51783,(0),null);
var p = cljs.core.nth.call(null,vec__51783,(1),null);
var job = vec__51783;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___51942 = n;
var __51943 = (0);
while(true){
if((__51943 < n__4613__auto___51942)){
var G__51786_51944 = type;
var G__51786_51945__$1 = (((G__51786_51944 instanceof cljs.core.Keyword))?G__51786_51944.fqn:null);
switch (G__51786_51945__$1) {
case "compute":
var c__49726__auto___51947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__51943,c__49726__auto___51947,G__51786_51944,G__51786_51945__$1,n__4613__auto___51942,jobs,results,process,async){
return (function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = ((function (__51943,c__49726__auto___51947,G__51786_51944,G__51786_51945__$1,n__4613__auto___51942,jobs,results,process,async){
return (function (state_51799){
var state_val_51800 = (state_51799[(1)]);
if((state_val_51800 === (1))){
var state_51799__$1 = state_51799;
var statearr_51801_51948 = state_51799__$1;
(statearr_51801_51948[(2)] = null);

(statearr_51801_51948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (2))){
var state_51799__$1 = state_51799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51799__$1,(4),jobs);
} else {
if((state_val_51800 === (3))){
var inst_51797 = (state_51799[(2)]);
var state_51799__$1 = state_51799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51799__$1,inst_51797);
} else {
if((state_val_51800 === (4))){
var inst_51789 = (state_51799[(2)]);
var inst_51790 = process.call(null,inst_51789);
var state_51799__$1 = state_51799;
if(cljs.core.truth_(inst_51790)){
var statearr_51802_51949 = state_51799__$1;
(statearr_51802_51949[(1)] = (5));

} else {
var statearr_51803_51950 = state_51799__$1;
(statearr_51803_51950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (5))){
var state_51799__$1 = state_51799;
var statearr_51804_51951 = state_51799__$1;
(statearr_51804_51951[(2)] = null);

(statearr_51804_51951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (6))){
var state_51799__$1 = state_51799;
var statearr_51805_51952 = state_51799__$1;
(statearr_51805_51952[(2)] = null);

(statearr_51805_51952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51800 === (7))){
var inst_51795 = (state_51799[(2)]);
var state_51799__$1 = state_51799;
var statearr_51806_51953 = state_51799__$1;
(statearr_51806_51953[(2)] = inst_51795);

(statearr_51806_51953[(1)] = (3));


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
});})(__51943,c__49726__auto___51947,G__51786_51944,G__51786_51945__$1,n__4613__auto___51942,jobs,results,process,async))
;
return ((function (__51943,switch__49558__auto__,c__49726__auto___51947,G__51786_51944,G__51786_51945__$1,n__4613__auto___51942,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____0 = (function (){
var statearr_51807 = [null,null,null,null,null,null,null];
(statearr_51807[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__);

(statearr_51807[(1)] = (1));

return statearr_51807;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____1 = (function (state_51799){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_51799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e51808){if((e51808 instanceof Object)){
var ex__49562__auto__ = e51808;
var statearr_51809_51954 = state_51799;
(statearr_51809_51954[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51955 = state_51799;
state_51799 = G__51955;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__ = function(state_51799){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____1.call(this,state_51799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__;
})()
;})(__51943,switch__49558__auto__,c__49726__auto___51947,G__51786_51944,G__51786_51945__$1,n__4613__auto___51942,jobs,results,process,async))
})();
var state__49728__auto__ = (function (){var statearr_51810 = f__49727__auto__.call(null);
(statearr_51810[(6)] = c__49726__auto___51947);

return statearr_51810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
});})(__51943,c__49726__auto___51947,G__51786_51944,G__51786_51945__$1,n__4613__auto___51942,jobs,results,process,async))
);


break;
case "async":
var c__49726__auto___51956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__51943,c__49726__auto___51956,G__51786_51944,G__51786_51945__$1,n__4613__auto___51942,jobs,results,process,async){
return (function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = ((function (__51943,c__49726__auto___51956,G__51786_51944,G__51786_51945__$1,n__4613__auto___51942,jobs,results,process,async){
return (function (state_51823){
var state_val_51824 = (state_51823[(1)]);
if((state_val_51824 === (1))){
var state_51823__$1 = state_51823;
var statearr_51825_51957 = state_51823__$1;
(statearr_51825_51957[(2)] = null);

(statearr_51825_51957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51824 === (2))){
var state_51823__$1 = state_51823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51823__$1,(4),jobs);
} else {
if((state_val_51824 === (3))){
var inst_51821 = (state_51823[(2)]);
var state_51823__$1 = state_51823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51823__$1,inst_51821);
} else {
if((state_val_51824 === (4))){
var inst_51813 = (state_51823[(2)]);
var inst_51814 = async.call(null,inst_51813);
var state_51823__$1 = state_51823;
if(cljs.core.truth_(inst_51814)){
var statearr_51826_51958 = state_51823__$1;
(statearr_51826_51958[(1)] = (5));

} else {
var statearr_51827_51959 = state_51823__$1;
(statearr_51827_51959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51824 === (5))){
var state_51823__$1 = state_51823;
var statearr_51828_51960 = state_51823__$1;
(statearr_51828_51960[(2)] = null);

(statearr_51828_51960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51824 === (6))){
var state_51823__$1 = state_51823;
var statearr_51829_51961 = state_51823__$1;
(statearr_51829_51961[(2)] = null);

(statearr_51829_51961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51824 === (7))){
var inst_51819 = (state_51823[(2)]);
var state_51823__$1 = state_51823;
var statearr_51830_51962 = state_51823__$1;
(statearr_51830_51962[(2)] = inst_51819);

(statearr_51830_51962[(1)] = (3));


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
});})(__51943,c__49726__auto___51956,G__51786_51944,G__51786_51945__$1,n__4613__auto___51942,jobs,results,process,async))
;
return ((function (__51943,switch__49558__auto__,c__49726__auto___51956,G__51786_51944,G__51786_51945__$1,n__4613__auto___51942,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____0 = (function (){
var statearr_51831 = [null,null,null,null,null,null,null];
(statearr_51831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__);

(statearr_51831[(1)] = (1));

return statearr_51831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____1 = (function (state_51823){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_51823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e51832){if((e51832 instanceof Object)){
var ex__49562__auto__ = e51832;
var statearr_51833_51963 = state_51823;
(statearr_51833_51963[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51964 = state_51823;
state_51823 = G__51964;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__ = function(state_51823){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____1.call(this,state_51823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__;
})()
;})(__51943,switch__49558__auto__,c__49726__auto___51956,G__51786_51944,G__51786_51945__$1,n__4613__auto___51942,jobs,results,process,async))
})();
var state__49728__auto__ = (function (){var statearr_51834 = f__49727__auto__.call(null);
(statearr_51834[(6)] = c__49726__auto___51956);

return statearr_51834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
});})(__51943,c__49726__auto___51956,G__51786_51944,G__51786_51945__$1,n__4613__auto___51942,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51786_51945__$1)].join('')));

}

var G__51965 = (__51943 + (1));
__51943 = G__51965;
continue;
} else {
}
break;
}

var c__49726__auto___51966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_51856){
var state_val_51857 = (state_51856[(1)]);
if((state_val_51857 === (7))){
var inst_51852 = (state_51856[(2)]);
var state_51856__$1 = state_51856;
var statearr_51858_51967 = state_51856__$1;
(statearr_51858_51967[(2)] = inst_51852);

(statearr_51858_51967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51857 === (1))){
var state_51856__$1 = state_51856;
var statearr_51859_51968 = state_51856__$1;
(statearr_51859_51968[(2)] = null);

(statearr_51859_51968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51857 === (4))){
var inst_51837 = (state_51856[(7)]);
var inst_51837__$1 = (state_51856[(2)]);
var inst_51838 = (inst_51837__$1 == null);
var state_51856__$1 = (function (){var statearr_51860 = state_51856;
(statearr_51860[(7)] = inst_51837__$1);

return statearr_51860;
})();
if(cljs.core.truth_(inst_51838)){
var statearr_51861_51969 = state_51856__$1;
(statearr_51861_51969[(1)] = (5));

} else {
var statearr_51862_51970 = state_51856__$1;
(statearr_51862_51970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51857 === (6))){
var inst_51837 = (state_51856[(7)]);
var inst_51842 = (state_51856[(8)]);
var inst_51842__$1 = cljs.core.async.chan.call(null,(1));
var inst_51843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51844 = [inst_51837,inst_51842__$1];
var inst_51845 = (new cljs.core.PersistentVector(null,2,(5),inst_51843,inst_51844,null));
var state_51856__$1 = (function (){var statearr_51863 = state_51856;
(statearr_51863[(8)] = inst_51842__$1);

return statearr_51863;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51856__$1,(8),jobs,inst_51845);
} else {
if((state_val_51857 === (3))){
var inst_51854 = (state_51856[(2)]);
var state_51856__$1 = state_51856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51856__$1,inst_51854);
} else {
if((state_val_51857 === (2))){
var state_51856__$1 = state_51856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51856__$1,(4),from);
} else {
if((state_val_51857 === (9))){
var inst_51849 = (state_51856[(2)]);
var state_51856__$1 = (function (){var statearr_51864 = state_51856;
(statearr_51864[(9)] = inst_51849);

return statearr_51864;
})();
var statearr_51865_51971 = state_51856__$1;
(statearr_51865_51971[(2)] = null);

(statearr_51865_51971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51857 === (5))){
var inst_51840 = cljs.core.async.close_BANG_.call(null,jobs);
var state_51856__$1 = state_51856;
var statearr_51866_51972 = state_51856__$1;
(statearr_51866_51972[(2)] = inst_51840);

(statearr_51866_51972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51857 === (8))){
var inst_51842 = (state_51856[(8)]);
var inst_51847 = (state_51856[(2)]);
var state_51856__$1 = (function (){var statearr_51867 = state_51856;
(statearr_51867[(10)] = inst_51847);

return statearr_51867;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51856__$1,(9),results,inst_51842);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____0 = (function (){
var statearr_51868 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__);

(statearr_51868[(1)] = (1));

return statearr_51868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____1 = (function (state_51856){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_51856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e51869){if((e51869 instanceof Object)){
var ex__49562__auto__ = e51869;
var statearr_51870_51973 = state_51856;
(statearr_51870_51973[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51974 = state_51856;
state_51856 = G__51974;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__ = function(state_51856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____1.call(this,state_51856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_51871 = f__49727__auto__.call(null);
(statearr_51871[(6)] = c__49726__auto___51966);

return statearr_51871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


var c__49726__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_51909){
var state_val_51910 = (state_51909[(1)]);
if((state_val_51910 === (7))){
var inst_51905 = (state_51909[(2)]);
var state_51909__$1 = state_51909;
var statearr_51911_51975 = state_51909__$1;
(statearr_51911_51975[(2)] = inst_51905);

(statearr_51911_51975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51910 === (20))){
var state_51909__$1 = state_51909;
var statearr_51912_51976 = state_51909__$1;
(statearr_51912_51976[(2)] = null);

(statearr_51912_51976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51910 === (1))){
var state_51909__$1 = state_51909;
var statearr_51913_51977 = state_51909__$1;
(statearr_51913_51977[(2)] = null);

(statearr_51913_51977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51910 === (4))){
var inst_51874 = (state_51909[(7)]);
var inst_51874__$1 = (state_51909[(2)]);
var inst_51875 = (inst_51874__$1 == null);
var state_51909__$1 = (function (){var statearr_51914 = state_51909;
(statearr_51914[(7)] = inst_51874__$1);

return statearr_51914;
})();
if(cljs.core.truth_(inst_51875)){
var statearr_51915_51978 = state_51909__$1;
(statearr_51915_51978[(1)] = (5));

} else {
var statearr_51916_51979 = state_51909__$1;
(statearr_51916_51979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51910 === (15))){
var inst_51887 = (state_51909[(8)]);
var state_51909__$1 = state_51909;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51909__$1,(18),to,inst_51887);
} else {
if((state_val_51910 === (21))){
var inst_51900 = (state_51909[(2)]);
var state_51909__$1 = state_51909;
var statearr_51917_51980 = state_51909__$1;
(statearr_51917_51980[(2)] = inst_51900);

(statearr_51917_51980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51910 === (13))){
var inst_51902 = (state_51909[(2)]);
var state_51909__$1 = (function (){var statearr_51918 = state_51909;
(statearr_51918[(9)] = inst_51902);

return statearr_51918;
})();
var statearr_51919_51981 = state_51909__$1;
(statearr_51919_51981[(2)] = null);

(statearr_51919_51981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51910 === (6))){
var inst_51874 = (state_51909[(7)]);
var state_51909__$1 = state_51909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51909__$1,(11),inst_51874);
} else {
if((state_val_51910 === (17))){
var inst_51895 = (state_51909[(2)]);
var state_51909__$1 = state_51909;
if(cljs.core.truth_(inst_51895)){
var statearr_51920_51982 = state_51909__$1;
(statearr_51920_51982[(1)] = (19));

} else {
var statearr_51921_51983 = state_51909__$1;
(statearr_51921_51983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51910 === (3))){
var inst_51907 = (state_51909[(2)]);
var state_51909__$1 = state_51909;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51909__$1,inst_51907);
} else {
if((state_val_51910 === (12))){
var inst_51884 = (state_51909[(10)]);
var state_51909__$1 = state_51909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51909__$1,(14),inst_51884);
} else {
if((state_val_51910 === (2))){
var state_51909__$1 = state_51909;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51909__$1,(4),results);
} else {
if((state_val_51910 === (19))){
var state_51909__$1 = state_51909;
var statearr_51922_51984 = state_51909__$1;
(statearr_51922_51984[(2)] = null);

(statearr_51922_51984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51910 === (11))){
var inst_51884 = (state_51909[(2)]);
var state_51909__$1 = (function (){var statearr_51923 = state_51909;
(statearr_51923[(10)] = inst_51884);

return statearr_51923;
})();
var statearr_51924_51985 = state_51909__$1;
(statearr_51924_51985[(2)] = null);

(statearr_51924_51985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51910 === (9))){
var state_51909__$1 = state_51909;
var statearr_51925_51986 = state_51909__$1;
(statearr_51925_51986[(2)] = null);

(statearr_51925_51986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51910 === (5))){
var state_51909__$1 = state_51909;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51926_51987 = state_51909__$1;
(statearr_51926_51987[(1)] = (8));

} else {
var statearr_51927_51988 = state_51909__$1;
(statearr_51927_51988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51910 === (14))){
var inst_51887 = (state_51909[(8)]);
var inst_51887__$1 = (state_51909[(2)]);
var inst_51888 = (inst_51887__$1 == null);
var inst_51889 = cljs.core.not.call(null,inst_51888);
var state_51909__$1 = (function (){var statearr_51928 = state_51909;
(statearr_51928[(8)] = inst_51887__$1);

return statearr_51928;
})();
if(inst_51889){
var statearr_51929_51989 = state_51909__$1;
(statearr_51929_51989[(1)] = (15));

} else {
var statearr_51930_51990 = state_51909__$1;
(statearr_51930_51990[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51910 === (16))){
var state_51909__$1 = state_51909;
var statearr_51931_51991 = state_51909__$1;
(statearr_51931_51991[(2)] = false);

(statearr_51931_51991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51910 === (10))){
var inst_51881 = (state_51909[(2)]);
var state_51909__$1 = state_51909;
var statearr_51932_51992 = state_51909__$1;
(statearr_51932_51992[(2)] = inst_51881);

(statearr_51932_51992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51910 === (18))){
var inst_51892 = (state_51909[(2)]);
var state_51909__$1 = state_51909;
var statearr_51933_51993 = state_51909__$1;
(statearr_51933_51993[(2)] = inst_51892);

(statearr_51933_51993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51910 === (8))){
var inst_51878 = cljs.core.async.close_BANG_.call(null,to);
var state_51909__$1 = state_51909;
var statearr_51934_51994 = state_51909__$1;
(statearr_51934_51994[(2)] = inst_51878);

(statearr_51934_51994[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____0 = (function (){
var statearr_51935 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__);

(statearr_51935[(1)] = (1));

return statearr_51935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____1 = (function (state_51909){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_51909);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e51936){if((e51936 instanceof Object)){
var ex__49562__auto__ = e51936;
var statearr_51937_51995 = state_51909;
(statearr_51937_51995[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51996 = state_51909;
state_51909 = G__51996;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__ = function(state_51909){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____1.call(this,state_51909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__49559__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_51938 = f__49727__auto__.call(null);
(statearr_51938[(6)] = c__49726__auto__);

return statearr_51938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));

return c__49726__auto__;
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
var G__51998 = arguments.length;
switch (G__51998) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__52001 = arguments.length;
switch (G__52001) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__52004 = arguments.length;
switch (G__52004) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__49726__auto___52053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_52030){
var state_val_52031 = (state_52030[(1)]);
if((state_val_52031 === (7))){
var inst_52026 = (state_52030[(2)]);
var state_52030__$1 = state_52030;
var statearr_52032_52054 = state_52030__$1;
(statearr_52032_52054[(2)] = inst_52026);

(statearr_52032_52054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52031 === (1))){
var state_52030__$1 = state_52030;
var statearr_52033_52055 = state_52030__$1;
(statearr_52033_52055[(2)] = null);

(statearr_52033_52055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52031 === (4))){
var inst_52007 = (state_52030[(7)]);
var inst_52007__$1 = (state_52030[(2)]);
var inst_52008 = (inst_52007__$1 == null);
var state_52030__$1 = (function (){var statearr_52034 = state_52030;
(statearr_52034[(7)] = inst_52007__$1);

return statearr_52034;
})();
if(cljs.core.truth_(inst_52008)){
var statearr_52035_52056 = state_52030__$1;
(statearr_52035_52056[(1)] = (5));

} else {
var statearr_52036_52057 = state_52030__$1;
(statearr_52036_52057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52031 === (13))){
var state_52030__$1 = state_52030;
var statearr_52037_52058 = state_52030__$1;
(statearr_52037_52058[(2)] = null);

(statearr_52037_52058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52031 === (6))){
var inst_52007 = (state_52030[(7)]);
var inst_52013 = p.call(null,inst_52007);
var state_52030__$1 = state_52030;
if(cljs.core.truth_(inst_52013)){
var statearr_52038_52059 = state_52030__$1;
(statearr_52038_52059[(1)] = (9));

} else {
var statearr_52039_52060 = state_52030__$1;
(statearr_52039_52060[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52031 === (3))){
var inst_52028 = (state_52030[(2)]);
var state_52030__$1 = state_52030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52030__$1,inst_52028);
} else {
if((state_val_52031 === (12))){
var state_52030__$1 = state_52030;
var statearr_52040_52061 = state_52030__$1;
(statearr_52040_52061[(2)] = null);

(statearr_52040_52061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52031 === (2))){
var state_52030__$1 = state_52030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52030__$1,(4),ch);
} else {
if((state_val_52031 === (11))){
var inst_52007 = (state_52030[(7)]);
var inst_52017 = (state_52030[(2)]);
var state_52030__$1 = state_52030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52030__$1,(8),inst_52017,inst_52007);
} else {
if((state_val_52031 === (9))){
var state_52030__$1 = state_52030;
var statearr_52041_52062 = state_52030__$1;
(statearr_52041_52062[(2)] = tc);

(statearr_52041_52062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52031 === (5))){
var inst_52010 = cljs.core.async.close_BANG_.call(null,tc);
var inst_52011 = cljs.core.async.close_BANG_.call(null,fc);
var state_52030__$1 = (function (){var statearr_52042 = state_52030;
(statearr_52042[(8)] = inst_52010);

return statearr_52042;
})();
var statearr_52043_52063 = state_52030__$1;
(statearr_52043_52063[(2)] = inst_52011);

(statearr_52043_52063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52031 === (14))){
var inst_52024 = (state_52030[(2)]);
var state_52030__$1 = state_52030;
var statearr_52044_52064 = state_52030__$1;
(statearr_52044_52064[(2)] = inst_52024);

(statearr_52044_52064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52031 === (10))){
var state_52030__$1 = state_52030;
var statearr_52045_52065 = state_52030__$1;
(statearr_52045_52065[(2)] = fc);

(statearr_52045_52065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52031 === (8))){
var inst_52019 = (state_52030[(2)]);
var state_52030__$1 = state_52030;
if(cljs.core.truth_(inst_52019)){
var statearr_52046_52066 = state_52030__$1;
(statearr_52046_52066[(1)] = (12));

} else {
var statearr_52047_52067 = state_52030__$1;
(statearr_52047_52067[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__49559__auto__ = null;
var cljs$core$async$state_machine__49559__auto____0 = (function (){
var statearr_52048 = [null,null,null,null,null,null,null,null,null];
(statearr_52048[(0)] = cljs$core$async$state_machine__49559__auto__);

(statearr_52048[(1)] = (1));

return statearr_52048;
});
var cljs$core$async$state_machine__49559__auto____1 = (function (state_52030){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_52030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e52049){if((e52049 instanceof Object)){
var ex__49562__auto__ = e52049;
var statearr_52050_52068 = state_52030;
(statearr_52050_52068[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52069 = state_52030;
state_52030 = G__52069;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$state_machine__49559__auto__ = function(state_52030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49559__auto____1.call(this,state_52030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49559__auto____0;
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49559__auto____1;
return cljs$core$async$state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_52051 = f__49727__auto__.call(null);
(statearr_52051[(6)] = c__49726__auto___52053);

return statearr_52051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__49726__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_52090){
var state_val_52091 = (state_52090[(1)]);
if((state_val_52091 === (7))){
var inst_52086 = (state_52090[(2)]);
var state_52090__$1 = state_52090;
var statearr_52092_52110 = state_52090__$1;
(statearr_52092_52110[(2)] = inst_52086);

(statearr_52092_52110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52091 === (1))){
var inst_52070 = init;
var state_52090__$1 = (function (){var statearr_52093 = state_52090;
(statearr_52093[(7)] = inst_52070);

return statearr_52093;
})();
var statearr_52094_52111 = state_52090__$1;
(statearr_52094_52111[(2)] = null);

(statearr_52094_52111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52091 === (4))){
var inst_52073 = (state_52090[(8)]);
var inst_52073__$1 = (state_52090[(2)]);
var inst_52074 = (inst_52073__$1 == null);
var state_52090__$1 = (function (){var statearr_52095 = state_52090;
(statearr_52095[(8)] = inst_52073__$1);

return statearr_52095;
})();
if(cljs.core.truth_(inst_52074)){
var statearr_52096_52112 = state_52090__$1;
(statearr_52096_52112[(1)] = (5));

} else {
var statearr_52097_52113 = state_52090__$1;
(statearr_52097_52113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52091 === (6))){
var inst_52073 = (state_52090[(8)]);
var inst_52077 = (state_52090[(9)]);
var inst_52070 = (state_52090[(7)]);
var inst_52077__$1 = f.call(null,inst_52070,inst_52073);
var inst_52078 = cljs.core.reduced_QMARK_.call(null,inst_52077__$1);
var state_52090__$1 = (function (){var statearr_52098 = state_52090;
(statearr_52098[(9)] = inst_52077__$1);

return statearr_52098;
})();
if(inst_52078){
var statearr_52099_52114 = state_52090__$1;
(statearr_52099_52114[(1)] = (8));

} else {
var statearr_52100_52115 = state_52090__$1;
(statearr_52100_52115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52091 === (3))){
var inst_52088 = (state_52090[(2)]);
var state_52090__$1 = state_52090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52090__$1,inst_52088);
} else {
if((state_val_52091 === (2))){
var state_52090__$1 = state_52090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52090__$1,(4),ch);
} else {
if((state_val_52091 === (9))){
var inst_52077 = (state_52090[(9)]);
var inst_52070 = inst_52077;
var state_52090__$1 = (function (){var statearr_52101 = state_52090;
(statearr_52101[(7)] = inst_52070);

return statearr_52101;
})();
var statearr_52102_52116 = state_52090__$1;
(statearr_52102_52116[(2)] = null);

(statearr_52102_52116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52091 === (5))){
var inst_52070 = (state_52090[(7)]);
var state_52090__$1 = state_52090;
var statearr_52103_52117 = state_52090__$1;
(statearr_52103_52117[(2)] = inst_52070);

(statearr_52103_52117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52091 === (10))){
var inst_52084 = (state_52090[(2)]);
var state_52090__$1 = state_52090;
var statearr_52104_52118 = state_52090__$1;
(statearr_52104_52118[(2)] = inst_52084);

(statearr_52104_52118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52091 === (8))){
var inst_52077 = (state_52090[(9)]);
var inst_52080 = cljs.core.deref.call(null,inst_52077);
var state_52090__$1 = state_52090;
var statearr_52105_52119 = state_52090__$1;
(statearr_52105_52119[(2)] = inst_52080);

(statearr_52105_52119[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__49559__auto__ = null;
var cljs$core$async$reduce_$_state_machine__49559__auto____0 = (function (){
var statearr_52106 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52106[(0)] = cljs$core$async$reduce_$_state_machine__49559__auto__);

(statearr_52106[(1)] = (1));

return statearr_52106;
});
var cljs$core$async$reduce_$_state_machine__49559__auto____1 = (function (state_52090){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_52090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e52107){if((e52107 instanceof Object)){
var ex__49562__auto__ = e52107;
var statearr_52108_52120 = state_52090;
(statearr_52108_52120[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52121 = state_52090;
state_52090 = G__52121;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__49559__auto__ = function(state_52090){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__49559__auto____1.call(this,state_52090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__49559__auto____0;
cljs$core$async$reduce_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__49559__auto____1;
return cljs$core$async$reduce_$_state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_52109 = f__49727__auto__.call(null);
(statearr_52109[(6)] = c__49726__auto__);

return statearr_52109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));

return c__49726__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__49726__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_52127){
var state_val_52128 = (state_52127[(1)]);
if((state_val_52128 === (1))){
var inst_52122 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_52127__$1 = state_52127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52127__$1,(2),inst_52122);
} else {
if((state_val_52128 === (2))){
var inst_52124 = (state_52127[(2)]);
var inst_52125 = f__$1.call(null,inst_52124);
var state_52127__$1 = state_52127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52127__$1,inst_52125);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__49559__auto__ = null;
var cljs$core$async$transduce_$_state_machine__49559__auto____0 = (function (){
var statearr_52129 = [null,null,null,null,null,null,null];
(statearr_52129[(0)] = cljs$core$async$transduce_$_state_machine__49559__auto__);

(statearr_52129[(1)] = (1));

return statearr_52129;
});
var cljs$core$async$transduce_$_state_machine__49559__auto____1 = (function (state_52127){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_52127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e52130){if((e52130 instanceof Object)){
var ex__49562__auto__ = e52130;
var statearr_52131_52133 = state_52127;
(statearr_52131_52133[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52134 = state_52127;
state_52127 = G__52134;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__49559__auto__ = function(state_52127){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__49559__auto____1.call(this,state_52127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__49559__auto____0;
cljs$core$async$transduce_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__49559__auto____1;
return cljs$core$async$transduce_$_state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_52132 = f__49727__auto__.call(null);
(statearr_52132[(6)] = c__49726__auto__);

return statearr_52132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));

return c__49726__auto__;
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
var G__52136 = arguments.length;
switch (G__52136) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__49726__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_52161){
var state_val_52162 = (state_52161[(1)]);
if((state_val_52162 === (7))){
var inst_52143 = (state_52161[(2)]);
var state_52161__$1 = state_52161;
var statearr_52163_52184 = state_52161__$1;
(statearr_52163_52184[(2)] = inst_52143);

(statearr_52163_52184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52162 === (1))){
var inst_52137 = cljs.core.seq.call(null,coll);
var inst_52138 = inst_52137;
var state_52161__$1 = (function (){var statearr_52164 = state_52161;
(statearr_52164[(7)] = inst_52138);

return statearr_52164;
})();
var statearr_52165_52185 = state_52161__$1;
(statearr_52165_52185[(2)] = null);

(statearr_52165_52185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52162 === (4))){
var inst_52138 = (state_52161[(7)]);
var inst_52141 = cljs.core.first.call(null,inst_52138);
var state_52161__$1 = state_52161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52161__$1,(7),ch,inst_52141);
} else {
if((state_val_52162 === (13))){
var inst_52155 = (state_52161[(2)]);
var state_52161__$1 = state_52161;
var statearr_52166_52186 = state_52161__$1;
(statearr_52166_52186[(2)] = inst_52155);

(statearr_52166_52186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52162 === (6))){
var inst_52146 = (state_52161[(2)]);
var state_52161__$1 = state_52161;
if(cljs.core.truth_(inst_52146)){
var statearr_52167_52187 = state_52161__$1;
(statearr_52167_52187[(1)] = (8));

} else {
var statearr_52168_52188 = state_52161__$1;
(statearr_52168_52188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52162 === (3))){
var inst_52159 = (state_52161[(2)]);
var state_52161__$1 = state_52161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52161__$1,inst_52159);
} else {
if((state_val_52162 === (12))){
var state_52161__$1 = state_52161;
var statearr_52169_52189 = state_52161__$1;
(statearr_52169_52189[(2)] = null);

(statearr_52169_52189[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52162 === (2))){
var inst_52138 = (state_52161[(7)]);
var state_52161__$1 = state_52161;
if(cljs.core.truth_(inst_52138)){
var statearr_52170_52190 = state_52161__$1;
(statearr_52170_52190[(1)] = (4));

} else {
var statearr_52171_52191 = state_52161__$1;
(statearr_52171_52191[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52162 === (11))){
var inst_52152 = cljs.core.async.close_BANG_.call(null,ch);
var state_52161__$1 = state_52161;
var statearr_52172_52192 = state_52161__$1;
(statearr_52172_52192[(2)] = inst_52152);

(statearr_52172_52192[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52162 === (9))){
var state_52161__$1 = state_52161;
if(cljs.core.truth_(close_QMARK_)){
var statearr_52173_52193 = state_52161__$1;
(statearr_52173_52193[(1)] = (11));

} else {
var statearr_52174_52194 = state_52161__$1;
(statearr_52174_52194[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52162 === (5))){
var inst_52138 = (state_52161[(7)]);
var state_52161__$1 = state_52161;
var statearr_52175_52195 = state_52161__$1;
(statearr_52175_52195[(2)] = inst_52138);

(statearr_52175_52195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52162 === (10))){
var inst_52157 = (state_52161[(2)]);
var state_52161__$1 = state_52161;
var statearr_52176_52196 = state_52161__$1;
(statearr_52176_52196[(2)] = inst_52157);

(statearr_52176_52196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52162 === (8))){
var inst_52138 = (state_52161[(7)]);
var inst_52148 = cljs.core.next.call(null,inst_52138);
var inst_52138__$1 = inst_52148;
var state_52161__$1 = (function (){var statearr_52177 = state_52161;
(statearr_52177[(7)] = inst_52138__$1);

return statearr_52177;
})();
var statearr_52178_52197 = state_52161__$1;
(statearr_52178_52197[(2)] = null);

(statearr_52178_52197[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__49559__auto__ = null;
var cljs$core$async$state_machine__49559__auto____0 = (function (){
var statearr_52179 = [null,null,null,null,null,null,null,null];
(statearr_52179[(0)] = cljs$core$async$state_machine__49559__auto__);

(statearr_52179[(1)] = (1));

return statearr_52179;
});
var cljs$core$async$state_machine__49559__auto____1 = (function (state_52161){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_52161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e52180){if((e52180 instanceof Object)){
var ex__49562__auto__ = e52180;
var statearr_52181_52198 = state_52161;
(statearr_52181_52198[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52199 = state_52161;
state_52161 = G__52199;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$state_machine__49559__auto__ = function(state_52161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49559__auto____1.call(this,state_52161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49559__auto____0;
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49559__auto____1;
return cljs$core$async$state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_52182 = f__49727__auto__.call(null);
(statearr_52182[(6)] = c__49726__auto__);

return statearr_52182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));

return c__49726__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mux$muxch_STAR_$dyn_52200 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_52200.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52201 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_52201.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52202 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_52202.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52203 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_52203.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52204 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52204 = (function (ch,cs,meta52205){
this.ch = ch;
this.cs = cs;
this.meta52205 = meta52205;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52204.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52206,meta52205__$1){
var self__ = this;
var _52206__$1 = this;
return (new cljs.core.async.t_cljs$core$async52204(self__.ch,self__.cs,meta52205__$1));
}));

(cljs.core.async.t_cljs$core$async52204.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52206){
var self__ = this;
var _52206__$1 = this;
return self__.meta52205;
}));

(cljs.core.async.t_cljs$core$async52204.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52204.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52204.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52204.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async52204.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async52204.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async52204.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta52205","meta52205",1740692543,null)], null);
}));

(cljs.core.async.t_cljs$core$async52204.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52204.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52204");

(cljs.core.async.t_cljs$core$async52204.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async52204");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52204.
 */
cljs.core.async.__GT_t_cljs$core$async52204 = (function cljs$core$async$mult_$___GT_t_cljs$core$async52204(ch__$1,cs__$1,meta52205){
return (new cljs.core.async.t_cljs$core$async52204(ch__$1,cs__$1,meta52205));
});

}

return (new cljs.core.async.t_cljs$core$async52204(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__49726__auto___52426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_52341){
var state_val_52342 = (state_52341[(1)]);
if((state_val_52342 === (7))){
var inst_52337 = (state_52341[(2)]);
var state_52341__$1 = state_52341;
var statearr_52343_52427 = state_52341__$1;
(statearr_52343_52427[(2)] = inst_52337);

(statearr_52343_52427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (20))){
var inst_52240 = (state_52341[(7)]);
var inst_52252 = cljs.core.first.call(null,inst_52240);
var inst_52253 = cljs.core.nth.call(null,inst_52252,(0),null);
var inst_52254 = cljs.core.nth.call(null,inst_52252,(1),null);
var state_52341__$1 = (function (){var statearr_52344 = state_52341;
(statearr_52344[(8)] = inst_52253);

return statearr_52344;
})();
if(cljs.core.truth_(inst_52254)){
var statearr_52345_52428 = state_52341__$1;
(statearr_52345_52428[(1)] = (22));

} else {
var statearr_52346_52429 = state_52341__$1;
(statearr_52346_52429[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (27))){
var inst_52282 = (state_52341[(9)]);
var inst_52209 = (state_52341[(10)]);
var inst_52284 = (state_52341[(11)]);
var inst_52289 = (state_52341[(12)]);
var inst_52289__$1 = cljs.core._nth.call(null,inst_52282,inst_52284);
var inst_52290 = cljs.core.async.put_BANG_.call(null,inst_52289__$1,inst_52209,done);
var state_52341__$1 = (function (){var statearr_52347 = state_52341;
(statearr_52347[(12)] = inst_52289__$1);

return statearr_52347;
})();
if(cljs.core.truth_(inst_52290)){
var statearr_52348_52430 = state_52341__$1;
(statearr_52348_52430[(1)] = (30));

} else {
var statearr_52349_52431 = state_52341__$1;
(statearr_52349_52431[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (1))){
var state_52341__$1 = state_52341;
var statearr_52350_52432 = state_52341__$1;
(statearr_52350_52432[(2)] = null);

(statearr_52350_52432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (24))){
var inst_52240 = (state_52341[(7)]);
var inst_52259 = (state_52341[(2)]);
var inst_52260 = cljs.core.next.call(null,inst_52240);
var inst_52218 = inst_52260;
var inst_52219 = null;
var inst_52220 = (0);
var inst_52221 = (0);
var state_52341__$1 = (function (){var statearr_52351 = state_52341;
(statearr_52351[(13)] = inst_52218);

(statearr_52351[(14)] = inst_52259);

(statearr_52351[(15)] = inst_52220);

(statearr_52351[(16)] = inst_52221);

(statearr_52351[(17)] = inst_52219);

return statearr_52351;
})();
var statearr_52352_52433 = state_52341__$1;
(statearr_52352_52433[(2)] = null);

(statearr_52352_52433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (39))){
var state_52341__$1 = state_52341;
var statearr_52356_52434 = state_52341__$1;
(statearr_52356_52434[(2)] = null);

(statearr_52356_52434[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (4))){
var inst_52209 = (state_52341[(10)]);
var inst_52209__$1 = (state_52341[(2)]);
var inst_52210 = (inst_52209__$1 == null);
var state_52341__$1 = (function (){var statearr_52357 = state_52341;
(statearr_52357[(10)] = inst_52209__$1);

return statearr_52357;
})();
if(cljs.core.truth_(inst_52210)){
var statearr_52358_52435 = state_52341__$1;
(statearr_52358_52435[(1)] = (5));

} else {
var statearr_52359_52436 = state_52341__$1;
(statearr_52359_52436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (15))){
var inst_52218 = (state_52341[(13)]);
var inst_52220 = (state_52341[(15)]);
var inst_52221 = (state_52341[(16)]);
var inst_52219 = (state_52341[(17)]);
var inst_52236 = (state_52341[(2)]);
var inst_52237 = (inst_52221 + (1));
var tmp52353 = inst_52218;
var tmp52354 = inst_52220;
var tmp52355 = inst_52219;
var inst_52218__$1 = tmp52353;
var inst_52219__$1 = tmp52355;
var inst_52220__$1 = tmp52354;
var inst_52221__$1 = inst_52237;
var state_52341__$1 = (function (){var statearr_52360 = state_52341;
(statearr_52360[(13)] = inst_52218__$1);

(statearr_52360[(18)] = inst_52236);

(statearr_52360[(15)] = inst_52220__$1);

(statearr_52360[(16)] = inst_52221__$1);

(statearr_52360[(17)] = inst_52219__$1);

return statearr_52360;
})();
var statearr_52361_52437 = state_52341__$1;
(statearr_52361_52437[(2)] = null);

(statearr_52361_52437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (21))){
var inst_52263 = (state_52341[(2)]);
var state_52341__$1 = state_52341;
var statearr_52365_52438 = state_52341__$1;
(statearr_52365_52438[(2)] = inst_52263);

(statearr_52365_52438[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (31))){
var inst_52289 = (state_52341[(12)]);
var inst_52293 = done.call(null,null);
var inst_52294 = cljs.core.async.untap_STAR_.call(null,m,inst_52289);
var state_52341__$1 = (function (){var statearr_52366 = state_52341;
(statearr_52366[(19)] = inst_52293);

return statearr_52366;
})();
var statearr_52367_52439 = state_52341__$1;
(statearr_52367_52439[(2)] = inst_52294);

(statearr_52367_52439[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (32))){
var inst_52283 = (state_52341[(20)]);
var inst_52281 = (state_52341[(21)]);
var inst_52282 = (state_52341[(9)]);
var inst_52284 = (state_52341[(11)]);
var inst_52296 = (state_52341[(2)]);
var inst_52297 = (inst_52284 + (1));
var tmp52362 = inst_52283;
var tmp52363 = inst_52281;
var tmp52364 = inst_52282;
var inst_52281__$1 = tmp52363;
var inst_52282__$1 = tmp52364;
var inst_52283__$1 = tmp52362;
var inst_52284__$1 = inst_52297;
var state_52341__$1 = (function (){var statearr_52368 = state_52341;
(statearr_52368[(20)] = inst_52283__$1);

(statearr_52368[(21)] = inst_52281__$1);

(statearr_52368[(9)] = inst_52282__$1);

(statearr_52368[(22)] = inst_52296);

(statearr_52368[(11)] = inst_52284__$1);

return statearr_52368;
})();
var statearr_52369_52440 = state_52341__$1;
(statearr_52369_52440[(2)] = null);

(statearr_52369_52440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (40))){
var inst_52309 = (state_52341[(23)]);
var inst_52313 = done.call(null,null);
var inst_52314 = cljs.core.async.untap_STAR_.call(null,m,inst_52309);
var state_52341__$1 = (function (){var statearr_52370 = state_52341;
(statearr_52370[(24)] = inst_52313);

return statearr_52370;
})();
var statearr_52371_52441 = state_52341__$1;
(statearr_52371_52441[(2)] = inst_52314);

(statearr_52371_52441[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (33))){
var inst_52300 = (state_52341[(25)]);
var inst_52302 = cljs.core.chunked_seq_QMARK_.call(null,inst_52300);
var state_52341__$1 = state_52341;
if(inst_52302){
var statearr_52372_52442 = state_52341__$1;
(statearr_52372_52442[(1)] = (36));

} else {
var statearr_52373_52443 = state_52341__$1;
(statearr_52373_52443[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (13))){
var inst_52230 = (state_52341[(26)]);
var inst_52233 = cljs.core.async.close_BANG_.call(null,inst_52230);
var state_52341__$1 = state_52341;
var statearr_52374_52444 = state_52341__$1;
(statearr_52374_52444[(2)] = inst_52233);

(statearr_52374_52444[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (22))){
var inst_52253 = (state_52341[(8)]);
var inst_52256 = cljs.core.async.close_BANG_.call(null,inst_52253);
var state_52341__$1 = state_52341;
var statearr_52375_52445 = state_52341__$1;
(statearr_52375_52445[(2)] = inst_52256);

(statearr_52375_52445[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (36))){
var inst_52300 = (state_52341[(25)]);
var inst_52304 = cljs.core.chunk_first.call(null,inst_52300);
var inst_52305 = cljs.core.chunk_rest.call(null,inst_52300);
var inst_52306 = cljs.core.count.call(null,inst_52304);
var inst_52281 = inst_52305;
var inst_52282 = inst_52304;
var inst_52283 = inst_52306;
var inst_52284 = (0);
var state_52341__$1 = (function (){var statearr_52376 = state_52341;
(statearr_52376[(20)] = inst_52283);

(statearr_52376[(21)] = inst_52281);

(statearr_52376[(9)] = inst_52282);

(statearr_52376[(11)] = inst_52284);

return statearr_52376;
})();
var statearr_52377_52446 = state_52341__$1;
(statearr_52377_52446[(2)] = null);

(statearr_52377_52446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (41))){
var inst_52300 = (state_52341[(25)]);
var inst_52316 = (state_52341[(2)]);
var inst_52317 = cljs.core.next.call(null,inst_52300);
var inst_52281 = inst_52317;
var inst_52282 = null;
var inst_52283 = (0);
var inst_52284 = (0);
var state_52341__$1 = (function (){var statearr_52378 = state_52341;
(statearr_52378[(20)] = inst_52283);

(statearr_52378[(27)] = inst_52316);

(statearr_52378[(21)] = inst_52281);

(statearr_52378[(9)] = inst_52282);

(statearr_52378[(11)] = inst_52284);

return statearr_52378;
})();
var statearr_52379_52447 = state_52341__$1;
(statearr_52379_52447[(2)] = null);

(statearr_52379_52447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (43))){
var state_52341__$1 = state_52341;
var statearr_52380_52448 = state_52341__$1;
(statearr_52380_52448[(2)] = null);

(statearr_52380_52448[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (29))){
var inst_52325 = (state_52341[(2)]);
var state_52341__$1 = state_52341;
var statearr_52381_52449 = state_52341__$1;
(statearr_52381_52449[(2)] = inst_52325);

(statearr_52381_52449[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (44))){
var inst_52334 = (state_52341[(2)]);
var state_52341__$1 = (function (){var statearr_52382 = state_52341;
(statearr_52382[(28)] = inst_52334);

return statearr_52382;
})();
var statearr_52383_52450 = state_52341__$1;
(statearr_52383_52450[(2)] = null);

(statearr_52383_52450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (6))){
var inst_52273 = (state_52341[(29)]);
var inst_52272 = cljs.core.deref.call(null,cs);
var inst_52273__$1 = cljs.core.keys.call(null,inst_52272);
var inst_52274 = cljs.core.count.call(null,inst_52273__$1);
var inst_52275 = cljs.core.reset_BANG_.call(null,dctr,inst_52274);
var inst_52280 = cljs.core.seq.call(null,inst_52273__$1);
var inst_52281 = inst_52280;
var inst_52282 = null;
var inst_52283 = (0);
var inst_52284 = (0);
var state_52341__$1 = (function (){var statearr_52384 = state_52341;
(statearr_52384[(29)] = inst_52273__$1);

(statearr_52384[(20)] = inst_52283);

(statearr_52384[(21)] = inst_52281);

(statearr_52384[(9)] = inst_52282);

(statearr_52384[(11)] = inst_52284);

(statearr_52384[(30)] = inst_52275);

return statearr_52384;
})();
var statearr_52385_52451 = state_52341__$1;
(statearr_52385_52451[(2)] = null);

(statearr_52385_52451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (28))){
var inst_52281 = (state_52341[(21)]);
var inst_52300 = (state_52341[(25)]);
var inst_52300__$1 = cljs.core.seq.call(null,inst_52281);
var state_52341__$1 = (function (){var statearr_52386 = state_52341;
(statearr_52386[(25)] = inst_52300__$1);

return statearr_52386;
})();
if(inst_52300__$1){
var statearr_52387_52452 = state_52341__$1;
(statearr_52387_52452[(1)] = (33));

} else {
var statearr_52388_52453 = state_52341__$1;
(statearr_52388_52453[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (25))){
var inst_52283 = (state_52341[(20)]);
var inst_52284 = (state_52341[(11)]);
var inst_52286 = (inst_52284 < inst_52283);
var inst_52287 = inst_52286;
var state_52341__$1 = state_52341;
if(cljs.core.truth_(inst_52287)){
var statearr_52389_52454 = state_52341__$1;
(statearr_52389_52454[(1)] = (27));

} else {
var statearr_52390_52455 = state_52341__$1;
(statearr_52390_52455[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (34))){
var state_52341__$1 = state_52341;
var statearr_52391_52456 = state_52341__$1;
(statearr_52391_52456[(2)] = null);

(statearr_52391_52456[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (17))){
var state_52341__$1 = state_52341;
var statearr_52392_52457 = state_52341__$1;
(statearr_52392_52457[(2)] = null);

(statearr_52392_52457[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (3))){
var inst_52339 = (state_52341[(2)]);
var state_52341__$1 = state_52341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52341__$1,inst_52339);
} else {
if((state_val_52342 === (12))){
var inst_52268 = (state_52341[(2)]);
var state_52341__$1 = state_52341;
var statearr_52393_52458 = state_52341__$1;
(statearr_52393_52458[(2)] = inst_52268);

(statearr_52393_52458[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (2))){
var state_52341__$1 = state_52341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52341__$1,(4),ch);
} else {
if((state_val_52342 === (23))){
var state_52341__$1 = state_52341;
var statearr_52394_52459 = state_52341__$1;
(statearr_52394_52459[(2)] = null);

(statearr_52394_52459[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (35))){
var inst_52323 = (state_52341[(2)]);
var state_52341__$1 = state_52341;
var statearr_52395_52460 = state_52341__$1;
(statearr_52395_52460[(2)] = inst_52323);

(statearr_52395_52460[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (19))){
var inst_52240 = (state_52341[(7)]);
var inst_52244 = cljs.core.chunk_first.call(null,inst_52240);
var inst_52245 = cljs.core.chunk_rest.call(null,inst_52240);
var inst_52246 = cljs.core.count.call(null,inst_52244);
var inst_52218 = inst_52245;
var inst_52219 = inst_52244;
var inst_52220 = inst_52246;
var inst_52221 = (0);
var state_52341__$1 = (function (){var statearr_52396 = state_52341;
(statearr_52396[(13)] = inst_52218);

(statearr_52396[(15)] = inst_52220);

(statearr_52396[(16)] = inst_52221);

(statearr_52396[(17)] = inst_52219);

return statearr_52396;
})();
var statearr_52397_52461 = state_52341__$1;
(statearr_52397_52461[(2)] = null);

(statearr_52397_52461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (11))){
var inst_52218 = (state_52341[(13)]);
var inst_52240 = (state_52341[(7)]);
var inst_52240__$1 = cljs.core.seq.call(null,inst_52218);
var state_52341__$1 = (function (){var statearr_52398 = state_52341;
(statearr_52398[(7)] = inst_52240__$1);

return statearr_52398;
})();
if(inst_52240__$1){
var statearr_52399_52462 = state_52341__$1;
(statearr_52399_52462[(1)] = (16));

} else {
var statearr_52400_52463 = state_52341__$1;
(statearr_52400_52463[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (9))){
var inst_52270 = (state_52341[(2)]);
var state_52341__$1 = state_52341;
var statearr_52401_52464 = state_52341__$1;
(statearr_52401_52464[(2)] = inst_52270);

(statearr_52401_52464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (5))){
var inst_52216 = cljs.core.deref.call(null,cs);
var inst_52217 = cljs.core.seq.call(null,inst_52216);
var inst_52218 = inst_52217;
var inst_52219 = null;
var inst_52220 = (0);
var inst_52221 = (0);
var state_52341__$1 = (function (){var statearr_52402 = state_52341;
(statearr_52402[(13)] = inst_52218);

(statearr_52402[(15)] = inst_52220);

(statearr_52402[(16)] = inst_52221);

(statearr_52402[(17)] = inst_52219);

return statearr_52402;
})();
var statearr_52403_52465 = state_52341__$1;
(statearr_52403_52465[(2)] = null);

(statearr_52403_52465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (14))){
var state_52341__$1 = state_52341;
var statearr_52404_52466 = state_52341__$1;
(statearr_52404_52466[(2)] = null);

(statearr_52404_52466[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (45))){
var inst_52331 = (state_52341[(2)]);
var state_52341__$1 = state_52341;
var statearr_52405_52467 = state_52341__$1;
(statearr_52405_52467[(2)] = inst_52331);

(statearr_52405_52467[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (26))){
var inst_52273 = (state_52341[(29)]);
var inst_52327 = (state_52341[(2)]);
var inst_52328 = cljs.core.seq.call(null,inst_52273);
var state_52341__$1 = (function (){var statearr_52406 = state_52341;
(statearr_52406[(31)] = inst_52327);

return statearr_52406;
})();
if(inst_52328){
var statearr_52407_52468 = state_52341__$1;
(statearr_52407_52468[(1)] = (42));

} else {
var statearr_52408_52469 = state_52341__$1;
(statearr_52408_52469[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (16))){
var inst_52240 = (state_52341[(7)]);
var inst_52242 = cljs.core.chunked_seq_QMARK_.call(null,inst_52240);
var state_52341__$1 = state_52341;
if(inst_52242){
var statearr_52409_52470 = state_52341__$1;
(statearr_52409_52470[(1)] = (19));

} else {
var statearr_52410_52471 = state_52341__$1;
(statearr_52410_52471[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (38))){
var inst_52320 = (state_52341[(2)]);
var state_52341__$1 = state_52341;
var statearr_52411_52472 = state_52341__$1;
(statearr_52411_52472[(2)] = inst_52320);

(statearr_52411_52472[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (30))){
var state_52341__$1 = state_52341;
var statearr_52412_52473 = state_52341__$1;
(statearr_52412_52473[(2)] = null);

(statearr_52412_52473[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (10))){
var inst_52221 = (state_52341[(16)]);
var inst_52219 = (state_52341[(17)]);
var inst_52229 = cljs.core._nth.call(null,inst_52219,inst_52221);
var inst_52230 = cljs.core.nth.call(null,inst_52229,(0),null);
var inst_52231 = cljs.core.nth.call(null,inst_52229,(1),null);
var state_52341__$1 = (function (){var statearr_52413 = state_52341;
(statearr_52413[(26)] = inst_52230);

return statearr_52413;
})();
if(cljs.core.truth_(inst_52231)){
var statearr_52414_52474 = state_52341__$1;
(statearr_52414_52474[(1)] = (13));

} else {
var statearr_52415_52475 = state_52341__$1;
(statearr_52415_52475[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (18))){
var inst_52266 = (state_52341[(2)]);
var state_52341__$1 = state_52341;
var statearr_52416_52476 = state_52341__$1;
(statearr_52416_52476[(2)] = inst_52266);

(statearr_52416_52476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (42))){
var state_52341__$1 = state_52341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52341__$1,(45),dchan);
} else {
if((state_val_52342 === (37))){
var inst_52309 = (state_52341[(23)]);
var inst_52300 = (state_52341[(25)]);
var inst_52209 = (state_52341[(10)]);
var inst_52309__$1 = cljs.core.first.call(null,inst_52300);
var inst_52310 = cljs.core.async.put_BANG_.call(null,inst_52309__$1,inst_52209,done);
var state_52341__$1 = (function (){var statearr_52417 = state_52341;
(statearr_52417[(23)] = inst_52309__$1);

return statearr_52417;
})();
if(cljs.core.truth_(inst_52310)){
var statearr_52418_52477 = state_52341__$1;
(statearr_52418_52477[(1)] = (39));

} else {
var statearr_52419_52478 = state_52341__$1;
(statearr_52419_52478[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52342 === (8))){
var inst_52220 = (state_52341[(15)]);
var inst_52221 = (state_52341[(16)]);
var inst_52223 = (inst_52221 < inst_52220);
var inst_52224 = inst_52223;
var state_52341__$1 = state_52341;
if(cljs.core.truth_(inst_52224)){
var statearr_52420_52479 = state_52341__$1;
(statearr_52420_52479[(1)] = (10));

} else {
var statearr_52421_52480 = state_52341__$1;
(statearr_52421_52480[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__49559__auto__ = null;
var cljs$core$async$mult_$_state_machine__49559__auto____0 = (function (){
var statearr_52422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52422[(0)] = cljs$core$async$mult_$_state_machine__49559__auto__);

(statearr_52422[(1)] = (1));

return statearr_52422;
});
var cljs$core$async$mult_$_state_machine__49559__auto____1 = (function (state_52341){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_52341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e52423){if((e52423 instanceof Object)){
var ex__49562__auto__ = e52423;
var statearr_52424_52481 = state_52341;
(statearr_52424_52481[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52482 = state_52341;
state_52341 = G__52482;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__49559__auto__ = function(state_52341){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__49559__auto____1.call(this,state_52341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__49559__auto____0;
cljs$core$async$mult_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__49559__auto____1;
return cljs$core$async$mult_$_state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_52425 = f__49727__auto__.call(null);
(statearr_52425[(6)] = c__49726__auto___52426);

return statearr_52425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__52484 = arguments.length;
switch (G__52484) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_52486 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_52486.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52487 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_52487.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52488 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52488.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52489 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_52489.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52490 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52490.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52501 = arguments.length;
var i__4737__auto___52502 = (0);
while(true){
if((i__4737__auto___52502 < len__4736__auto___52501)){
args__4742__auto__.push((arguments[i__4737__auto___52502]));

var G__52503 = (i__4737__auto___52502 + (1));
i__4737__auto___52502 = G__52503;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__52495){
var map__52496 = p__52495;
var map__52496__$1 = (((((!((map__52496 == null))))?(((((map__52496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52496):map__52496);
var opts = map__52496__$1;
var statearr_52498_52504 = state;
(statearr_52498_52504[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_52499_52505 = state;
(statearr_52499_52505[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_52500_52506 = state;
(statearr_52500_52506[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq52491){
var G__52492 = cljs.core.first.call(null,seq52491);
var seq52491__$1 = cljs.core.next.call(null,seq52491);
var G__52493 = cljs.core.first.call(null,seq52491__$1);
var seq52491__$2 = cljs.core.next.call(null,seq52491__$1);
var G__52494 = cljs.core.first.call(null,seq52491__$2);
var seq52491__$3 = cljs.core.next.call(null,seq52491__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52492,G__52493,G__52494,seq52491__$3);
}));

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
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52507 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52507 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta52508){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta52508 = meta52508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52509,meta52508__$1){
var self__ = this;
var _52509__$1 = this;
return (new cljs.core.async.t_cljs$core$async52507(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta52508__$1));
}));

(cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52509){
var self__ = this;
var _52509__$1 = this;
return self__.meta52508;
}));

(cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async52507.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async52507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta52508","meta52508",1481632059,null)], null);
}));

(cljs.core.async.t_cljs$core$async52507.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52507");

(cljs.core.async.t_cljs$core$async52507.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async52507");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52507.
 */
cljs.core.async.__GT_t_cljs$core$async52507 = (function cljs$core$async$mix_$___GT_t_cljs$core$async52507(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52508){
return (new cljs.core.async.t_cljs$core$async52507(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta52508));
});

}

return (new cljs.core.async.t_cljs$core$async52507(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49726__auto___52671 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_52611){
var state_val_52612 = (state_52611[(1)]);
if((state_val_52612 === (7))){
var inst_52526 = (state_52611[(2)]);
var state_52611__$1 = state_52611;
var statearr_52613_52672 = state_52611__$1;
(statearr_52613_52672[(2)] = inst_52526);

(statearr_52613_52672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (20))){
var inst_52538 = (state_52611[(7)]);
var state_52611__$1 = state_52611;
var statearr_52614_52673 = state_52611__$1;
(statearr_52614_52673[(2)] = inst_52538);

(statearr_52614_52673[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (27))){
var state_52611__$1 = state_52611;
var statearr_52615_52674 = state_52611__$1;
(statearr_52615_52674[(2)] = null);

(statearr_52615_52674[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (1))){
var inst_52513 = (state_52611[(8)]);
var inst_52513__$1 = calc_state.call(null);
var inst_52515 = (inst_52513__$1 == null);
var inst_52516 = cljs.core.not.call(null,inst_52515);
var state_52611__$1 = (function (){var statearr_52616 = state_52611;
(statearr_52616[(8)] = inst_52513__$1);

return statearr_52616;
})();
if(inst_52516){
var statearr_52617_52675 = state_52611__$1;
(statearr_52617_52675[(1)] = (2));

} else {
var statearr_52618_52676 = state_52611__$1;
(statearr_52618_52676[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (24))){
var inst_52585 = (state_52611[(9)]);
var inst_52571 = (state_52611[(10)]);
var inst_52562 = (state_52611[(11)]);
var inst_52585__$1 = inst_52562.call(null,inst_52571);
var state_52611__$1 = (function (){var statearr_52619 = state_52611;
(statearr_52619[(9)] = inst_52585__$1);

return statearr_52619;
})();
if(cljs.core.truth_(inst_52585__$1)){
var statearr_52620_52677 = state_52611__$1;
(statearr_52620_52677[(1)] = (29));

} else {
var statearr_52621_52678 = state_52611__$1;
(statearr_52621_52678[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (4))){
var inst_52529 = (state_52611[(2)]);
var state_52611__$1 = state_52611;
if(cljs.core.truth_(inst_52529)){
var statearr_52622_52679 = state_52611__$1;
(statearr_52622_52679[(1)] = (8));

} else {
var statearr_52623_52680 = state_52611__$1;
(statearr_52623_52680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (15))){
var inst_52556 = (state_52611[(2)]);
var state_52611__$1 = state_52611;
if(cljs.core.truth_(inst_52556)){
var statearr_52624_52681 = state_52611__$1;
(statearr_52624_52681[(1)] = (19));

} else {
var statearr_52625_52682 = state_52611__$1;
(statearr_52625_52682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (21))){
var inst_52561 = (state_52611[(12)]);
var inst_52561__$1 = (state_52611[(2)]);
var inst_52562 = cljs.core.get.call(null,inst_52561__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52563 = cljs.core.get.call(null,inst_52561__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52564 = cljs.core.get.call(null,inst_52561__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_52611__$1 = (function (){var statearr_52626 = state_52611;
(statearr_52626[(13)] = inst_52563);

(statearr_52626[(12)] = inst_52561__$1);

(statearr_52626[(11)] = inst_52562);

return statearr_52626;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_52611__$1,(22),inst_52564);
} else {
if((state_val_52612 === (31))){
var inst_52593 = (state_52611[(2)]);
var state_52611__$1 = state_52611;
if(cljs.core.truth_(inst_52593)){
var statearr_52627_52683 = state_52611__$1;
(statearr_52627_52683[(1)] = (32));

} else {
var statearr_52628_52684 = state_52611__$1;
(statearr_52628_52684[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (32))){
var inst_52570 = (state_52611[(14)]);
var state_52611__$1 = state_52611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52611__$1,(35),out,inst_52570);
} else {
if((state_val_52612 === (33))){
var inst_52561 = (state_52611[(12)]);
var inst_52538 = inst_52561;
var state_52611__$1 = (function (){var statearr_52629 = state_52611;
(statearr_52629[(7)] = inst_52538);

return statearr_52629;
})();
var statearr_52630_52685 = state_52611__$1;
(statearr_52630_52685[(2)] = null);

(statearr_52630_52685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (13))){
var inst_52538 = (state_52611[(7)]);
var inst_52545 = inst_52538.cljs$lang$protocol_mask$partition0$;
var inst_52546 = (inst_52545 & (64));
var inst_52547 = inst_52538.cljs$core$ISeq$;
var inst_52548 = (cljs.core.PROTOCOL_SENTINEL === inst_52547);
var inst_52549 = ((inst_52546) || (inst_52548));
var state_52611__$1 = state_52611;
if(cljs.core.truth_(inst_52549)){
var statearr_52631_52686 = state_52611__$1;
(statearr_52631_52686[(1)] = (16));

} else {
var statearr_52632_52687 = state_52611__$1;
(statearr_52632_52687[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (22))){
var inst_52570 = (state_52611[(14)]);
var inst_52571 = (state_52611[(10)]);
var inst_52569 = (state_52611[(2)]);
var inst_52570__$1 = cljs.core.nth.call(null,inst_52569,(0),null);
var inst_52571__$1 = cljs.core.nth.call(null,inst_52569,(1),null);
var inst_52572 = (inst_52570__$1 == null);
var inst_52573 = cljs.core._EQ_.call(null,inst_52571__$1,change);
var inst_52574 = ((inst_52572) || (inst_52573));
var state_52611__$1 = (function (){var statearr_52633 = state_52611;
(statearr_52633[(14)] = inst_52570__$1);

(statearr_52633[(10)] = inst_52571__$1);

return statearr_52633;
})();
if(cljs.core.truth_(inst_52574)){
var statearr_52634_52688 = state_52611__$1;
(statearr_52634_52688[(1)] = (23));

} else {
var statearr_52635_52689 = state_52611__$1;
(statearr_52635_52689[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (36))){
var inst_52561 = (state_52611[(12)]);
var inst_52538 = inst_52561;
var state_52611__$1 = (function (){var statearr_52636 = state_52611;
(statearr_52636[(7)] = inst_52538);

return statearr_52636;
})();
var statearr_52637_52690 = state_52611__$1;
(statearr_52637_52690[(2)] = null);

(statearr_52637_52690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (29))){
var inst_52585 = (state_52611[(9)]);
var state_52611__$1 = state_52611;
var statearr_52638_52691 = state_52611__$1;
(statearr_52638_52691[(2)] = inst_52585);

(statearr_52638_52691[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (6))){
var state_52611__$1 = state_52611;
var statearr_52639_52692 = state_52611__$1;
(statearr_52639_52692[(2)] = false);

(statearr_52639_52692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (28))){
var inst_52581 = (state_52611[(2)]);
var inst_52582 = calc_state.call(null);
var inst_52538 = inst_52582;
var state_52611__$1 = (function (){var statearr_52640 = state_52611;
(statearr_52640[(15)] = inst_52581);

(statearr_52640[(7)] = inst_52538);

return statearr_52640;
})();
var statearr_52641_52693 = state_52611__$1;
(statearr_52641_52693[(2)] = null);

(statearr_52641_52693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (25))){
var inst_52607 = (state_52611[(2)]);
var state_52611__$1 = state_52611;
var statearr_52642_52694 = state_52611__$1;
(statearr_52642_52694[(2)] = inst_52607);

(statearr_52642_52694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (34))){
var inst_52605 = (state_52611[(2)]);
var state_52611__$1 = state_52611;
var statearr_52643_52695 = state_52611__$1;
(statearr_52643_52695[(2)] = inst_52605);

(statearr_52643_52695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (17))){
var state_52611__$1 = state_52611;
var statearr_52644_52696 = state_52611__$1;
(statearr_52644_52696[(2)] = false);

(statearr_52644_52696[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (3))){
var state_52611__$1 = state_52611;
var statearr_52645_52697 = state_52611__$1;
(statearr_52645_52697[(2)] = false);

(statearr_52645_52697[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (12))){
var inst_52609 = (state_52611[(2)]);
var state_52611__$1 = state_52611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52611__$1,inst_52609);
} else {
if((state_val_52612 === (2))){
var inst_52513 = (state_52611[(8)]);
var inst_52518 = inst_52513.cljs$lang$protocol_mask$partition0$;
var inst_52519 = (inst_52518 & (64));
var inst_52520 = inst_52513.cljs$core$ISeq$;
var inst_52521 = (cljs.core.PROTOCOL_SENTINEL === inst_52520);
var inst_52522 = ((inst_52519) || (inst_52521));
var state_52611__$1 = state_52611;
if(cljs.core.truth_(inst_52522)){
var statearr_52646_52698 = state_52611__$1;
(statearr_52646_52698[(1)] = (5));

} else {
var statearr_52647_52699 = state_52611__$1;
(statearr_52647_52699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (23))){
var inst_52570 = (state_52611[(14)]);
var inst_52576 = (inst_52570 == null);
var state_52611__$1 = state_52611;
if(cljs.core.truth_(inst_52576)){
var statearr_52648_52700 = state_52611__$1;
(statearr_52648_52700[(1)] = (26));

} else {
var statearr_52649_52701 = state_52611__$1;
(statearr_52649_52701[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (35))){
var inst_52596 = (state_52611[(2)]);
var state_52611__$1 = state_52611;
if(cljs.core.truth_(inst_52596)){
var statearr_52650_52702 = state_52611__$1;
(statearr_52650_52702[(1)] = (36));

} else {
var statearr_52651_52703 = state_52611__$1;
(statearr_52651_52703[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (19))){
var inst_52538 = (state_52611[(7)]);
var inst_52558 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52538);
var state_52611__$1 = state_52611;
var statearr_52652_52704 = state_52611__$1;
(statearr_52652_52704[(2)] = inst_52558);

(statearr_52652_52704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (11))){
var inst_52538 = (state_52611[(7)]);
var inst_52542 = (inst_52538 == null);
var inst_52543 = cljs.core.not.call(null,inst_52542);
var state_52611__$1 = state_52611;
if(inst_52543){
var statearr_52653_52705 = state_52611__$1;
(statearr_52653_52705[(1)] = (13));

} else {
var statearr_52654_52706 = state_52611__$1;
(statearr_52654_52706[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (9))){
var inst_52513 = (state_52611[(8)]);
var state_52611__$1 = state_52611;
var statearr_52655_52707 = state_52611__$1;
(statearr_52655_52707[(2)] = inst_52513);

(statearr_52655_52707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (5))){
var state_52611__$1 = state_52611;
var statearr_52656_52708 = state_52611__$1;
(statearr_52656_52708[(2)] = true);

(statearr_52656_52708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (14))){
var state_52611__$1 = state_52611;
var statearr_52657_52709 = state_52611__$1;
(statearr_52657_52709[(2)] = false);

(statearr_52657_52709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (26))){
var inst_52571 = (state_52611[(10)]);
var inst_52578 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_52571);
var state_52611__$1 = state_52611;
var statearr_52658_52710 = state_52611__$1;
(statearr_52658_52710[(2)] = inst_52578);

(statearr_52658_52710[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (16))){
var state_52611__$1 = state_52611;
var statearr_52659_52711 = state_52611__$1;
(statearr_52659_52711[(2)] = true);

(statearr_52659_52711[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (38))){
var inst_52601 = (state_52611[(2)]);
var state_52611__$1 = state_52611;
var statearr_52660_52712 = state_52611__$1;
(statearr_52660_52712[(2)] = inst_52601);

(statearr_52660_52712[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (30))){
var inst_52563 = (state_52611[(13)]);
var inst_52571 = (state_52611[(10)]);
var inst_52562 = (state_52611[(11)]);
var inst_52588 = cljs.core.empty_QMARK_.call(null,inst_52562);
var inst_52589 = inst_52563.call(null,inst_52571);
var inst_52590 = cljs.core.not.call(null,inst_52589);
var inst_52591 = ((inst_52588) && (inst_52590));
var state_52611__$1 = state_52611;
var statearr_52661_52713 = state_52611__$1;
(statearr_52661_52713[(2)] = inst_52591);

(statearr_52661_52713[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (10))){
var inst_52513 = (state_52611[(8)]);
var inst_52534 = (state_52611[(2)]);
var inst_52535 = cljs.core.get.call(null,inst_52534,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_52536 = cljs.core.get.call(null,inst_52534,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_52537 = cljs.core.get.call(null,inst_52534,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_52538 = inst_52513;
var state_52611__$1 = (function (){var statearr_52662 = state_52611;
(statearr_52662[(16)] = inst_52536);

(statearr_52662[(17)] = inst_52537);

(statearr_52662[(18)] = inst_52535);

(statearr_52662[(7)] = inst_52538);

return statearr_52662;
})();
var statearr_52663_52714 = state_52611__$1;
(statearr_52663_52714[(2)] = null);

(statearr_52663_52714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (18))){
var inst_52553 = (state_52611[(2)]);
var state_52611__$1 = state_52611;
var statearr_52664_52715 = state_52611__$1;
(statearr_52664_52715[(2)] = inst_52553);

(statearr_52664_52715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (37))){
var state_52611__$1 = state_52611;
var statearr_52665_52716 = state_52611__$1;
(statearr_52665_52716[(2)] = null);

(statearr_52665_52716[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52612 === (8))){
var inst_52513 = (state_52611[(8)]);
var inst_52531 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52513);
var state_52611__$1 = state_52611;
var statearr_52666_52717 = state_52611__$1;
(statearr_52666_52717[(2)] = inst_52531);

(statearr_52666_52717[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__49559__auto__ = null;
var cljs$core$async$mix_$_state_machine__49559__auto____0 = (function (){
var statearr_52667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52667[(0)] = cljs$core$async$mix_$_state_machine__49559__auto__);

(statearr_52667[(1)] = (1));

return statearr_52667;
});
var cljs$core$async$mix_$_state_machine__49559__auto____1 = (function (state_52611){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_52611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e52668){if((e52668 instanceof Object)){
var ex__49562__auto__ = e52668;
var statearr_52669_52718 = state_52611;
(statearr_52669_52718[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52719 = state_52611;
state_52611 = G__52719;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__49559__auto__ = function(state_52611){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__49559__auto____1.call(this,state_52611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__49559__auto____0;
cljs$core$async$mix_$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__49559__auto____1;
return cljs$core$async$mix_$_state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_52670 = f__49727__auto__.call(null);
(statearr_52670[(6)] = c__49726__auto___52671);

return statearr_52670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_52722 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_52722.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52723 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_52723.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52724 = (function() {
var G__52725 = null;
var G__52725__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__52725__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__52725 = function(p,v){
switch(arguments.length){
case 1:
return G__52725__1.call(this,p);
case 2:
return G__52725__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52725.cljs$core$IFn$_invoke$arity$1 = G__52725__1;
G__52725.cljs$core$IFn$_invoke$arity$2 = G__52725__2;
return G__52725;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__52721 = arguments.length;
switch (G__52721) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52724.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52724.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__52729 = arguments.length;
switch (G__52729) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__52727_SHARP_){
if(cljs.core.truth_(p1__52727_SHARP_.call(null,topic))){
return p1__52727_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__52727_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async52730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52730 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52731){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52731 = meta52731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52732,meta52731__$1){
var self__ = this;
var _52732__$1 = this;
return (new cljs.core.async.t_cljs$core$async52730(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52731__$1));
}));

(cljs.core.async.t_cljs$core$async52730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52732){
var self__ = this;
var _52732__$1 = this;
return self__.meta52731;
}));

(cljs.core.async.t_cljs$core$async52730.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52730.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52730.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52730.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async52730.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async52730.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async52730.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async52730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52731","meta52731",688895518,null)], null);
}));

(cljs.core.async.t_cljs$core$async52730.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52730");

(cljs.core.async.t_cljs$core$async52730.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async52730");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52730.
 */
cljs.core.async.__GT_t_cljs$core$async52730 = (function cljs$core$async$__GT_t_cljs$core$async52730(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52731){
return (new cljs.core.async.t_cljs$core$async52730(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta52731));
});

}

return (new cljs.core.async.t_cljs$core$async52730(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__49726__auto___52850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_52804){
var state_val_52805 = (state_52804[(1)]);
if((state_val_52805 === (7))){
var inst_52800 = (state_52804[(2)]);
var state_52804__$1 = state_52804;
var statearr_52806_52851 = state_52804__$1;
(statearr_52806_52851[(2)] = inst_52800);

(statearr_52806_52851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (20))){
var state_52804__$1 = state_52804;
var statearr_52807_52852 = state_52804__$1;
(statearr_52807_52852[(2)] = null);

(statearr_52807_52852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (1))){
var state_52804__$1 = state_52804;
var statearr_52808_52853 = state_52804__$1;
(statearr_52808_52853[(2)] = null);

(statearr_52808_52853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (24))){
var inst_52783 = (state_52804[(7)]);
var inst_52792 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_52783);
var state_52804__$1 = state_52804;
var statearr_52809_52854 = state_52804__$1;
(statearr_52809_52854[(2)] = inst_52792);

(statearr_52809_52854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (4))){
var inst_52735 = (state_52804[(8)]);
var inst_52735__$1 = (state_52804[(2)]);
var inst_52736 = (inst_52735__$1 == null);
var state_52804__$1 = (function (){var statearr_52810 = state_52804;
(statearr_52810[(8)] = inst_52735__$1);

return statearr_52810;
})();
if(cljs.core.truth_(inst_52736)){
var statearr_52811_52855 = state_52804__$1;
(statearr_52811_52855[(1)] = (5));

} else {
var statearr_52812_52856 = state_52804__$1;
(statearr_52812_52856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (15))){
var inst_52777 = (state_52804[(2)]);
var state_52804__$1 = state_52804;
var statearr_52813_52857 = state_52804__$1;
(statearr_52813_52857[(2)] = inst_52777);

(statearr_52813_52857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (21))){
var inst_52797 = (state_52804[(2)]);
var state_52804__$1 = (function (){var statearr_52814 = state_52804;
(statearr_52814[(9)] = inst_52797);

return statearr_52814;
})();
var statearr_52815_52858 = state_52804__$1;
(statearr_52815_52858[(2)] = null);

(statearr_52815_52858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (13))){
var inst_52759 = (state_52804[(10)]);
var inst_52761 = cljs.core.chunked_seq_QMARK_.call(null,inst_52759);
var state_52804__$1 = state_52804;
if(inst_52761){
var statearr_52816_52859 = state_52804__$1;
(statearr_52816_52859[(1)] = (16));

} else {
var statearr_52817_52860 = state_52804__$1;
(statearr_52817_52860[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (22))){
var inst_52789 = (state_52804[(2)]);
var state_52804__$1 = state_52804;
if(cljs.core.truth_(inst_52789)){
var statearr_52818_52861 = state_52804__$1;
(statearr_52818_52861[(1)] = (23));

} else {
var statearr_52819_52862 = state_52804__$1;
(statearr_52819_52862[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (6))){
var inst_52783 = (state_52804[(7)]);
var inst_52785 = (state_52804[(11)]);
var inst_52735 = (state_52804[(8)]);
var inst_52783__$1 = topic_fn.call(null,inst_52735);
var inst_52784 = cljs.core.deref.call(null,mults);
var inst_52785__$1 = cljs.core.get.call(null,inst_52784,inst_52783__$1);
var state_52804__$1 = (function (){var statearr_52820 = state_52804;
(statearr_52820[(7)] = inst_52783__$1);

(statearr_52820[(11)] = inst_52785__$1);

return statearr_52820;
})();
if(cljs.core.truth_(inst_52785__$1)){
var statearr_52821_52863 = state_52804__$1;
(statearr_52821_52863[(1)] = (19));

} else {
var statearr_52822_52864 = state_52804__$1;
(statearr_52822_52864[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (25))){
var inst_52794 = (state_52804[(2)]);
var state_52804__$1 = state_52804;
var statearr_52823_52865 = state_52804__$1;
(statearr_52823_52865[(2)] = inst_52794);

(statearr_52823_52865[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (17))){
var inst_52759 = (state_52804[(10)]);
var inst_52768 = cljs.core.first.call(null,inst_52759);
var inst_52769 = cljs.core.async.muxch_STAR_.call(null,inst_52768);
var inst_52770 = cljs.core.async.close_BANG_.call(null,inst_52769);
var inst_52771 = cljs.core.next.call(null,inst_52759);
var inst_52745 = inst_52771;
var inst_52746 = null;
var inst_52747 = (0);
var inst_52748 = (0);
var state_52804__$1 = (function (){var statearr_52824 = state_52804;
(statearr_52824[(12)] = inst_52745);

(statearr_52824[(13)] = inst_52747);

(statearr_52824[(14)] = inst_52746);

(statearr_52824[(15)] = inst_52748);

(statearr_52824[(16)] = inst_52770);

return statearr_52824;
})();
var statearr_52825_52866 = state_52804__$1;
(statearr_52825_52866[(2)] = null);

(statearr_52825_52866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (3))){
var inst_52802 = (state_52804[(2)]);
var state_52804__$1 = state_52804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52804__$1,inst_52802);
} else {
if((state_val_52805 === (12))){
var inst_52779 = (state_52804[(2)]);
var state_52804__$1 = state_52804;
var statearr_52826_52867 = state_52804__$1;
(statearr_52826_52867[(2)] = inst_52779);

(statearr_52826_52867[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (2))){
var state_52804__$1 = state_52804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52804__$1,(4),ch);
} else {
if((state_val_52805 === (23))){
var state_52804__$1 = state_52804;
var statearr_52827_52868 = state_52804__$1;
(statearr_52827_52868[(2)] = null);

(statearr_52827_52868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (19))){
var inst_52785 = (state_52804[(11)]);
var inst_52735 = (state_52804[(8)]);
var inst_52787 = cljs.core.async.muxch_STAR_.call(null,inst_52785);
var state_52804__$1 = state_52804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52804__$1,(22),inst_52787,inst_52735);
} else {
if((state_val_52805 === (11))){
var inst_52745 = (state_52804[(12)]);
var inst_52759 = (state_52804[(10)]);
var inst_52759__$1 = cljs.core.seq.call(null,inst_52745);
var state_52804__$1 = (function (){var statearr_52828 = state_52804;
(statearr_52828[(10)] = inst_52759__$1);

return statearr_52828;
})();
if(inst_52759__$1){
var statearr_52829_52869 = state_52804__$1;
(statearr_52829_52869[(1)] = (13));

} else {
var statearr_52830_52870 = state_52804__$1;
(statearr_52830_52870[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (9))){
var inst_52781 = (state_52804[(2)]);
var state_52804__$1 = state_52804;
var statearr_52831_52871 = state_52804__$1;
(statearr_52831_52871[(2)] = inst_52781);

(statearr_52831_52871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (5))){
var inst_52742 = cljs.core.deref.call(null,mults);
var inst_52743 = cljs.core.vals.call(null,inst_52742);
var inst_52744 = cljs.core.seq.call(null,inst_52743);
var inst_52745 = inst_52744;
var inst_52746 = null;
var inst_52747 = (0);
var inst_52748 = (0);
var state_52804__$1 = (function (){var statearr_52832 = state_52804;
(statearr_52832[(12)] = inst_52745);

(statearr_52832[(13)] = inst_52747);

(statearr_52832[(14)] = inst_52746);

(statearr_52832[(15)] = inst_52748);

return statearr_52832;
})();
var statearr_52833_52872 = state_52804__$1;
(statearr_52833_52872[(2)] = null);

(statearr_52833_52872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (14))){
var state_52804__$1 = state_52804;
var statearr_52837_52873 = state_52804__$1;
(statearr_52837_52873[(2)] = null);

(statearr_52837_52873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (16))){
var inst_52759 = (state_52804[(10)]);
var inst_52763 = cljs.core.chunk_first.call(null,inst_52759);
var inst_52764 = cljs.core.chunk_rest.call(null,inst_52759);
var inst_52765 = cljs.core.count.call(null,inst_52763);
var inst_52745 = inst_52764;
var inst_52746 = inst_52763;
var inst_52747 = inst_52765;
var inst_52748 = (0);
var state_52804__$1 = (function (){var statearr_52838 = state_52804;
(statearr_52838[(12)] = inst_52745);

(statearr_52838[(13)] = inst_52747);

(statearr_52838[(14)] = inst_52746);

(statearr_52838[(15)] = inst_52748);

return statearr_52838;
})();
var statearr_52839_52874 = state_52804__$1;
(statearr_52839_52874[(2)] = null);

(statearr_52839_52874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (10))){
var inst_52745 = (state_52804[(12)]);
var inst_52747 = (state_52804[(13)]);
var inst_52746 = (state_52804[(14)]);
var inst_52748 = (state_52804[(15)]);
var inst_52753 = cljs.core._nth.call(null,inst_52746,inst_52748);
var inst_52754 = cljs.core.async.muxch_STAR_.call(null,inst_52753);
var inst_52755 = cljs.core.async.close_BANG_.call(null,inst_52754);
var inst_52756 = (inst_52748 + (1));
var tmp52834 = inst_52745;
var tmp52835 = inst_52747;
var tmp52836 = inst_52746;
var inst_52745__$1 = tmp52834;
var inst_52746__$1 = tmp52836;
var inst_52747__$1 = tmp52835;
var inst_52748__$1 = inst_52756;
var state_52804__$1 = (function (){var statearr_52840 = state_52804;
(statearr_52840[(12)] = inst_52745__$1);

(statearr_52840[(13)] = inst_52747__$1);

(statearr_52840[(17)] = inst_52755);

(statearr_52840[(14)] = inst_52746__$1);

(statearr_52840[(15)] = inst_52748__$1);

return statearr_52840;
})();
var statearr_52841_52875 = state_52804__$1;
(statearr_52841_52875[(2)] = null);

(statearr_52841_52875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (18))){
var inst_52774 = (state_52804[(2)]);
var state_52804__$1 = state_52804;
var statearr_52842_52876 = state_52804__$1;
(statearr_52842_52876[(2)] = inst_52774);

(statearr_52842_52876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52805 === (8))){
var inst_52747 = (state_52804[(13)]);
var inst_52748 = (state_52804[(15)]);
var inst_52750 = (inst_52748 < inst_52747);
var inst_52751 = inst_52750;
var state_52804__$1 = state_52804;
if(cljs.core.truth_(inst_52751)){
var statearr_52843_52877 = state_52804__$1;
(statearr_52843_52877[(1)] = (10));

} else {
var statearr_52844_52878 = state_52804__$1;
(statearr_52844_52878[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__49559__auto__ = null;
var cljs$core$async$state_machine__49559__auto____0 = (function (){
var statearr_52845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52845[(0)] = cljs$core$async$state_machine__49559__auto__);

(statearr_52845[(1)] = (1));

return statearr_52845;
});
var cljs$core$async$state_machine__49559__auto____1 = (function (state_52804){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_52804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e52846){if((e52846 instanceof Object)){
var ex__49562__auto__ = e52846;
var statearr_52847_52879 = state_52804;
(statearr_52847_52879[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52880 = state_52804;
state_52804 = G__52880;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$state_machine__49559__auto__ = function(state_52804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49559__auto____1.call(this,state_52804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49559__auto____0;
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49559__auto____1;
return cljs$core$async$state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_52848 = f__49727__auto__.call(null);
(statearr_52848[(6)] = c__49726__auto___52850);

return statearr_52848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__52882 = arguments.length;
switch (G__52882) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__52885 = arguments.length;
switch (G__52885) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__52888 = arguments.length;
switch (G__52888) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__49726__auto___52955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_52927){
var state_val_52928 = (state_52927[(1)]);
if((state_val_52928 === (7))){
var state_52927__$1 = state_52927;
var statearr_52929_52956 = state_52927__$1;
(statearr_52929_52956[(2)] = null);

(statearr_52929_52956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (1))){
var state_52927__$1 = state_52927;
var statearr_52930_52957 = state_52927__$1;
(statearr_52930_52957[(2)] = null);

(statearr_52930_52957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (4))){
var inst_52891 = (state_52927[(7)]);
var inst_52893 = (inst_52891 < cnt);
var state_52927__$1 = state_52927;
if(cljs.core.truth_(inst_52893)){
var statearr_52931_52958 = state_52927__$1;
(statearr_52931_52958[(1)] = (6));

} else {
var statearr_52932_52959 = state_52927__$1;
(statearr_52932_52959[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (15))){
var inst_52923 = (state_52927[(2)]);
var state_52927__$1 = state_52927;
var statearr_52933_52960 = state_52927__$1;
(statearr_52933_52960[(2)] = inst_52923);

(statearr_52933_52960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (13))){
var inst_52916 = cljs.core.async.close_BANG_.call(null,out);
var state_52927__$1 = state_52927;
var statearr_52934_52961 = state_52927__$1;
(statearr_52934_52961[(2)] = inst_52916);

(statearr_52934_52961[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (6))){
var state_52927__$1 = state_52927;
var statearr_52935_52962 = state_52927__$1;
(statearr_52935_52962[(2)] = null);

(statearr_52935_52962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (3))){
var inst_52925 = (state_52927[(2)]);
var state_52927__$1 = state_52927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52927__$1,inst_52925);
} else {
if((state_val_52928 === (12))){
var inst_52913 = (state_52927[(8)]);
var inst_52913__$1 = (state_52927[(2)]);
var inst_52914 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_52913__$1);
var state_52927__$1 = (function (){var statearr_52936 = state_52927;
(statearr_52936[(8)] = inst_52913__$1);

return statearr_52936;
})();
if(cljs.core.truth_(inst_52914)){
var statearr_52937_52963 = state_52927__$1;
(statearr_52937_52963[(1)] = (13));

} else {
var statearr_52938_52964 = state_52927__$1;
(statearr_52938_52964[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (2))){
var inst_52890 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_52891 = (0);
var state_52927__$1 = (function (){var statearr_52939 = state_52927;
(statearr_52939[(9)] = inst_52890);

(statearr_52939[(7)] = inst_52891);

return statearr_52939;
})();
var statearr_52940_52965 = state_52927__$1;
(statearr_52940_52965[(2)] = null);

(statearr_52940_52965[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (11))){
var inst_52891 = (state_52927[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_52927,(10),Object,null,(9));
var inst_52900 = chs__$1.call(null,inst_52891);
var inst_52901 = done.call(null,inst_52891);
var inst_52902 = cljs.core.async.take_BANG_.call(null,inst_52900,inst_52901);
var state_52927__$1 = state_52927;
var statearr_52941_52966 = state_52927__$1;
(statearr_52941_52966[(2)] = inst_52902);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52927__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (9))){
var inst_52891 = (state_52927[(7)]);
var inst_52904 = (state_52927[(2)]);
var inst_52905 = (inst_52891 + (1));
var inst_52891__$1 = inst_52905;
var state_52927__$1 = (function (){var statearr_52942 = state_52927;
(statearr_52942[(10)] = inst_52904);

(statearr_52942[(7)] = inst_52891__$1);

return statearr_52942;
})();
var statearr_52943_52967 = state_52927__$1;
(statearr_52943_52967[(2)] = null);

(statearr_52943_52967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (5))){
var inst_52911 = (state_52927[(2)]);
var state_52927__$1 = (function (){var statearr_52944 = state_52927;
(statearr_52944[(11)] = inst_52911);

return statearr_52944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52927__$1,(12),dchan);
} else {
if((state_val_52928 === (14))){
var inst_52913 = (state_52927[(8)]);
var inst_52918 = cljs.core.apply.call(null,f,inst_52913);
var state_52927__$1 = state_52927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52927__$1,(16),out,inst_52918);
} else {
if((state_val_52928 === (16))){
var inst_52920 = (state_52927[(2)]);
var state_52927__$1 = (function (){var statearr_52945 = state_52927;
(statearr_52945[(12)] = inst_52920);

return statearr_52945;
})();
var statearr_52946_52968 = state_52927__$1;
(statearr_52946_52968[(2)] = null);

(statearr_52946_52968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (10))){
var inst_52895 = (state_52927[(2)]);
var inst_52896 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_52927__$1 = (function (){var statearr_52947 = state_52927;
(statearr_52947[(13)] = inst_52895);

return statearr_52947;
})();
var statearr_52948_52969 = state_52927__$1;
(statearr_52948_52969[(2)] = inst_52896);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52927__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52928 === (8))){
var inst_52909 = (state_52927[(2)]);
var state_52927__$1 = state_52927;
var statearr_52949_52970 = state_52927__$1;
(statearr_52949_52970[(2)] = inst_52909);

(statearr_52949_52970[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__49559__auto__ = null;
var cljs$core$async$state_machine__49559__auto____0 = (function (){
var statearr_52950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52950[(0)] = cljs$core$async$state_machine__49559__auto__);

(statearr_52950[(1)] = (1));

return statearr_52950;
});
var cljs$core$async$state_machine__49559__auto____1 = (function (state_52927){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_52927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e52951){if((e52951 instanceof Object)){
var ex__49562__auto__ = e52951;
var statearr_52952_52971 = state_52927;
(statearr_52952_52971[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52972 = state_52927;
state_52927 = G__52972;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$state_machine__49559__auto__ = function(state_52927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49559__auto____1.call(this,state_52927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49559__auto____0;
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49559__auto____1;
return cljs$core$async$state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_52953 = f__49727__auto__.call(null);
(statearr_52953[(6)] = c__49726__auto___52955);

return statearr_52953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__52975 = arguments.length;
switch (G__52975) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49726__auto___53029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_53007){
var state_val_53008 = (state_53007[(1)]);
if((state_val_53008 === (7))){
var inst_52987 = (state_53007[(7)]);
var inst_52986 = (state_53007[(8)]);
var inst_52986__$1 = (state_53007[(2)]);
var inst_52987__$1 = cljs.core.nth.call(null,inst_52986__$1,(0),null);
var inst_52988 = cljs.core.nth.call(null,inst_52986__$1,(1),null);
var inst_52989 = (inst_52987__$1 == null);
var state_53007__$1 = (function (){var statearr_53009 = state_53007;
(statearr_53009[(7)] = inst_52987__$1);

(statearr_53009[(8)] = inst_52986__$1);

(statearr_53009[(9)] = inst_52988);

return statearr_53009;
})();
if(cljs.core.truth_(inst_52989)){
var statearr_53010_53030 = state_53007__$1;
(statearr_53010_53030[(1)] = (8));

} else {
var statearr_53011_53031 = state_53007__$1;
(statearr_53011_53031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53008 === (1))){
var inst_52976 = cljs.core.vec.call(null,chs);
var inst_52977 = inst_52976;
var state_53007__$1 = (function (){var statearr_53012 = state_53007;
(statearr_53012[(10)] = inst_52977);

return statearr_53012;
})();
var statearr_53013_53032 = state_53007__$1;
(statearr_53013_53032[(2)] = null);

(statearr_53013_53032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53008 === (4))){
var inst_52977 = (state_53007[(10)]);
var state_53007__$1 = state_53007;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53007__$1,(7),inst_52977);
} else {
if((state_val_53008 === (6))){
var inst_53003 = (state_53007[(2)]);
var state_53007__$1 = state_53007;
var statearr_53014_53033 = state_53007__$1;
(statearr_53014_53033[(2)] = inst_53003);

(statearr_53014_53033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53008 === (3))){
var inst_53005 = (state_53007[(2)]);
var state_53007__$1 = state_53007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53007__$1,inst_53005);
} else {
if((state_val_53008 === (2))){
var inst_52977 = (state_53007[(10)]);
var inst_52979 = cljs.core.count.call(null,inst_52977);
var inst_52980 = (inst_52979 > (0));
var state_53007__$1 = state_53007;
if(cljs.core.truth_(inst_52980)){
var statearr_53016_53034 = state_53007__$1;
(statearr_53016_53034[(1)] = (4));

} else {
var statearr_53017_53035 = state_53007__$1;
(statearr_53017_53035[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53008 === (11))){
var inst_52977 = (state_53007[(10)]);
var inst_52996 = (state_53007[(2)]);
var tmp53015 = inst_52977;
var inst_52977__$1 = tmp53015;
var state_53007__$1 = (function (){var statearr_53018 = state_53007;
(statearr_53018[(10)] = inst_52977__$1);

(statearr_53018[(11)] = inst_52996);

return statearr_53018;
})();
var statearr_53019_53036 = state_53007__$1;
(statearr_53019_53036[(2)] = null);

(statearr_53019_53036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53008 === (9))){
var inst_52987 = (state_53007[(7)]);
var state_53007__$1 = state_53007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53007__$1,(11),out,inst_52987);
} else {
if((state_val_53008 === (5))){
var inst_53001 = cljs.core.async.close_BANG_.call(null,out);
var state_53007__$1 = state_53007;
var statearr_53020_53037 = state_53007__$1;
(statearr_53020_53037[(2)] = inst_53001);

(statearr_53020_53037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53008 === (10))){
var inst_52999 = (state_53007[(2)]);
var state_53007__$1 = state_53007;
var statearr_53021_53038 = state_53007__$1;
(statearr_53021_53038[(2)] = inst_52999);

(statearr_53021_53038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53008 === (8))){
var inst_52977 = (state_53007[(10)]);
var inst_52987 = (state_53007[(7)]);
var inst_52986 = (state_53007[(8)]);
var inst_52988 = (state_53007[(9)]);
var inst_52991 = (function (){var cs = inst_52977;
var vec__52982 = inst_52986;
var v = inst_52987;
var c = inst_52988;
return (function (p1__52973_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__52973_SHARP_);
});
})();
var inst_52992 = cljs.core.filterv.call(null,inst_52991,inst_52977);
var inst_52977__$1 = inst_52992;
var state_53007__$1 = (function (){var statearr_53022 = state_53007;
(statearr_53022[(10)] = inst_52977__$1);

return statearr_53022;
})();
var statearr_53023_53039 = state_53007__$1;
(statearr_53023_53039[(2)] = null);

(statearr_53023_53039[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__49559__auto__ = null;
var cljs$core$async$state_machine__49559__auto____0 = (function (){
var statearr_53024 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53024[(0)] = cljs$core$async$state_machine__49559__auto__);

(statearr_53024[(1)] = (1));

return statearr_53024;
});
var cljs$core$async$state_machine__49559__auto____1 = (function (state_53007){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_53007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e53025){if((e53025 instanceof Object)){
var ex__49562__auto__ = e53025;
var statearr_53026_53040 = state_53007;
(statearr_53026_53040[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53041 = state_53007;
state_53007 = G__53041;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$state_machine__49559__auto__ = function(state_53007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49559__auto____1.call(this,state_53007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49559__auto____0;
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49559__auto____1;
return cljs$core$async$state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_53027 = f__49727__auto__.call(null);
(statearr_53027[(6)] = c__49726__auto___53029);

return statearr_53027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__53043 = arguments.length;
switch (G__53043) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49726__auto___53088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_53067){
var state_val_53068 = (state_53067[(1)]);
if((state_val_53068 === (7))){
var inst_53049 = (state_53067[(7)]);
var inst_53049__$1 = (state_53067[(2)]);
var inst_53050 = (inst_53049__$1 == null);
var inst_53051 = cljs.core.not.call(null,inst_53050);
var state_53067__$1 = (function (){var statearr_53069 = state_53067;
(statearr_53069[(7)] = inst_53049__$1);

return statearr_53069;
})();
if(inst_53051){
var statearr_53070_53089 = state_53067__$1;
(statearr_53070_53089[(1)] = (8));

} else {
var statearr_53071_53090 = state_53067__$1;
(statearr_53071_53090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53068 === (1))){
var inst_53044 = (0);
var state_53067__$1 = (function (){var statearr_53072 = state_53067;
(statearr_53072[(8)] = inst_53044);

return statearr_53072;
})();
var statearr_53073_53091 = state_53067__$1;
(statearr_53073_53091[(2)] = null);

(statearr_53073_53091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53068 === (4))){
var state_53067__$1 = state_53067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53067__$1,(7),ch);
} else {
if((state_val_53068 === (6))){
var inst_53062 = (state_53067[(2)]);
var state_53067__$1 = state_53067;
var statearr_53074_53092 = state_53067__$1;
(statearr_53074_53092[(2)] = inst_53062);

(statearr_53074_53092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53068 === (3))){
var inst_53064 = (state_53067[(2)]);
var inst_53065 = cljs.core.async.close_BANG_.call(null,out);
var state_53067__$1 = (function (){var statearr_53075 = state_53067;
(statearr_53075[(9)] = inst_53064);

return statearr_53075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53067__$1,inst_53065);
} else {
if((state_val_53068 === (2))){
var inst_53044 = (state_53067[(8)]);
var inst_53046 = (inst_53044 < n);
var state_53067__$1 = state_53067;
if(cljs.core.truth_(inst_53046)){
var statearr_53076_53093 = state_53067__$1;
(statearr_53076_53093[(1)] = (4));

} else {
var statearr_53077_53094 = state_53067__$1;
(statearr_53077_53094[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53068 === (11))){
var inst_53044 = (state_53067[(8)]);
var inst_53054 = (state_53067[(2)]);
var inst_53055 = (inst_53044 + (1));
var inst_53044__$1 = inst_53055;
var state_53067__$1 = (function (){var statearr_53078 = state_53067;
(statearr_53078[(10)] = inst_53054);

(statearr_53078[(8)] = inst_53044__$1);

return statearr_53078;
})();
var statearr_53079_53095 = state_53067__$1;
(statearr_53079_53095[(2)] = null);

(statearr_53079_53095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53068 === (9))){
var state_53067__$1 = state_53067;
var statearr_53080_53096 = state_53067__$1;
(statearr_53080_53096[(2)] = null);

(statearr_53080_53096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53068 === (5))){
var state_53067__$1 = state_53067;
var statearr_53081_53097 = state_53067__$1;
(statearr_53081_53097[(2)] = null);

(statearr_53081_53097[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53068 === (10))){
var inst_53059 = (state_53067[(2)]);
var state_53067__$1 = state_53067;
var statearr_53082_53098 = state_53067__$1;
(statearr_53082_53098[(2)] = inst_53059);

(statearr_53082_53098[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53068 === (8))){
var inst_53049 = (state_53067[(7)]);
var state_53067__$1 = state_53067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53067__$1,(11),out,inst_53049);
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
});
return (function() {
var cljs$core$async$state_machine__49559__auto__ = null;
var cljs$core$async$state_machine__49559__auto____0 = (function (){
var statearr_53083 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53083[(0)] = cljs$core$async$state_machine__49559__auto__);

(statearr_53083[(1)] = (1));

return statearr_53083;
});
var cljs$core$async$state_machine__49559__auto____1 = (function (state_53067){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_53067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e53084){if((e53084 instanceof Object)){
var ex__49562__auto__ = e53084;
var statearr_53085_53099 = state_53067;
(statearr_53085_53099[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53100 = state_53067;
state_53067 = G__53100;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$state_machine__49559__auto__ = function(state_53067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49559__auto____1.call(this,state_53067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49559__auto____0;
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49559__auto____1;
return cljs$core$async$state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_53086 = f__49727__auto__.call(null);
(statearr_53086[(6)] = c__49726__auto___53088);

return statearr_53086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53102 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53102 = (function (f,ch,meta53103){
this.f = f;
this.ch = ch;
this.meta53103 = meta53103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53104,meta53103__$1){
var self__ = this;
var _53104__$1 = this;
return (new cljs.core.async.t_cljs$core$async53102(self__.f,self__.ch,meta53103__$1));
}));

(cljs.core.async.t_cljs$core$async53102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53104){
var self__ = this;
var _53104__$1 = this;
return self__.meta53103;
}));

(cljs.core.async.t_cljs$core$async53102.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53102.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async53102.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async53102.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53102.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53105 = (function (f,ch,meta53103,_,fn1,meta53106){
this.f = f;
this.ch = ch;
this.meta53103 = meta53103;
this._ = _;
this.fn1 = fn1;
this.meta53106 = meta53106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53107,meta53106__$1){
var self__ = this;
var _53107__$1 = this;
return (new cljs.core.async.t_cljs$core$async53105(self__.f,self__.ch,self__.meta53103,self__._,self__.fn1,meta53106__$1));
}));

(cljs.core.async.t_cljs$core$async53105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53107){
var self__ = this;
var _53107__$1 = this;
return self__.meta53106;
}));

(cljs.core.async.t_cljs$core$async53105.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53105.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async53105.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async53105.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__53101_SHARP_){
return f1.call(null,(((p1__53101_SHARP_ == null))?null:self__.f.call(null,p1__53101_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async53105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53103","meta53103",-2005339526,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async53102","cljs.core.async/t_cljs$core$async53102",-1495434087,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta53106","meta53106",-757690076,null)], null);
}));

(cljs.core.async.t_cljs$core$async53105.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53105");

(cljs.core.async.t_cljs$core$async53105.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async53105");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53105.
 */
cljs.core.async.__GT_t_cljs$core$async53105 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53105(f__$1,ch__$1,meta53103__$1,___$2,fn1__$1,meta53106){
return (new cljs.core.async.t_cljs$core$async53105(f__$1,ch__$1,meta53103__$1,___$2,fn1__$1,meta53106));
});

}

return (new cljs.core.async.t_cljs$core$async53105(self__.f,self__.ch,self__.meta53103,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async53102.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53102.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async53102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53103","meta53103",-2005339526,null)], null);
}));

(cljs.core.async.t_cljs$core$async53102.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53102");

(cljs.core.async.t_cljs$core$async53102.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async53102");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53102.
 */
cljs.core.async.__GT_t_cljs$core$async53102 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async53102(f__$1,ch__$1,meta53103){
return (new cljs.core.async.t_cljs$core$async53102(f__$1,ch__$1,meta53103));
});

}

return (new cljs.core.async.t_cljs$core$async53102(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53108 = (function (f,ch,meta53109){
this.f = f;
this.ch = ch;
this.meta53109 = meta53109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53110,meta53109__$1){
var self__ = this;
var _53110__$1 = this;
return (new cljs.core.async.t_cljs$core$async53108(self__.f,self__.ch,meta53109__$1));
}));

(cljs.core.async.t_cljs$core$async53108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53110){
var self__ = this;
var _53110__$1 = this;
return self__.meta53109;
}));

(cljs.core.async.t_cljs$core$async53108.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53108.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async53108.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53108.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async53108.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53108.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async53108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53109","meta53109",225264194,null)], null);
}));

(cljs.core.async.t_cljs$core$async53108.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53108");

(cljs.core.async.t_cljs$core$async53108.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async53108");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53108.
 */
cljs.core.async.__GT_t_cljs$core$async53108 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async53108(f__$1,ch__$1,meta53109){
return (new cljs.core.async.t_cljs$core$async53108(f__$1,ch__$1,meta53109));
});

}

return (new cljs.core.async.t_cljs$core$async53108(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async53111 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async53111 = (function (p,ch,meta53112){
this.p = p;
this.ch = ch;
this.meta53112 = meta53112;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async53111.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53113,meta53112__$1){
var self__ = this;
var _53113__$1 = this;
return (new cljs.core.async.t_cljs$core$async53111(self__.p,self__.ch,meta53112__$1));
}));

(cljs.core.async.t_cljs$core$async53111.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53113){
var self__ = this;
var _53113__$1 = this;
return self__.meta53112;
}));

(cljs.core.async.t_cljs$core$async53111.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53111.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async53111.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async53111.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53111.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async53111.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async53111.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async53111.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta53112","meta53112",-1741145719,null)], null);
}));

(cljs.core.async.t_cljs$core$async53111.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async53111.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async53111");

(cljs.core.async.t_cljs$core$async53111.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async53111");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async53111.
 */
cljs.core.async.__GT_t_cljs$core$async53111 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async53111(p__$1,ch__$1,meta53112){
return (new cljs.core.async.t_cljs$core$async53111(p__$1,ch__$1,meta53112));
});

}

return (new cljs.core.async.t_cljs$core$async53111(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__53115 = arguments.length;
switch (G__53115) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49726__auto___53155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_53136){
var state_val_53137 = (state_53136[(1)]);
if((state_val_53137 === (7))){
var inst_53132 = (state_53136[(2)]);
var state_53136__$1 = state_53136;
var statearr_53138_53156 = state_53136__$1;
(statearr_53138_53156[(2)] = inst_53132);

(statearr_53138_53156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53137 === (1))){
var state_53136__$1 = state_53136;
var statearr_53139_53157 = state_53136__$1;
(statearr_53139_53157[(2)] = null);

(statearr_53139_53157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53137 === (4))){
var inst_53118 = (state_53136[(7)]);
var inst_53118__$1 = (state_53136[(2)]);
var inst_53119 = (inst_53118__$1 == null);
var state_53136__$1 = (function (){var statearr_53140 = state_53136;
(statearr_53140[(7)] = inst_53118__$1);

return statearr_53140;
})();
if(cljs.core.truth_(inst_53119)){
var statearr_53141_53158 = state_53136__$1;
(statearr_53141_53158[(1)] = (5));

} else {
var statearr_53142_53159 = state_53136__$1;
(statearr_53142_53159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53137 === (6))){
var inst_53118 = (state_53136[(7)]);
var inst_53123 = p.call(null,inst_53118);
var state_53136__$1 = state_53136;
if(cljs.core.truth_(inst_53123)){
var statearr_53143_53160 = state_53136__$1;
(statearr_53143_53160[(1)] = (8));

} else {
var statearr_53144_53161 = state_53136__$1;
(statearr_53144_53161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53137 === (3))){
var inst_53134 = (state_53136[(2)]);
var state_53136__$1 = state_53136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53136__$1,inst_53134);
} else {
if((state_val_53137 === (2))){
var state_53136__$1 = state_53136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53136__$1,(4),ch);
} else {
if((state_val_53137 === (11))){
var inst_53126 = (state_53136[(2)]);
var state_53136__$1 = state_53136;
var statearr_53145_53162 = state_53136__$1;
(statearr_53145_53162[(2)] = inst_53126);

(statearr_53145_53162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53137 === (9))){
var state_53136__$1 = state_53136;
var statearr_53146_53163 = state_53136__$1;
(statearr_53146_53163[(2)] = null);

(statearr_53146_53163[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53137 === (5))){
var inst_53121 = cljs.core.async.close_BANG_.call(null,out);
var state_53136__$1 = state_53136;
var statearr_53147_53164 = state_53136__$1;
(statearr_53147_53164[(2)] = inst_53121);

(statearr_53147_53164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53137 === (10))){
var inst_53129 = (state_53136[(2)]);
var state_53136__$1 = (function (){var statearr_53148 = state_53136;
(statearr_53148[(8)] = inst_53129);

return statearr_53148;
})();
var statearr_53149_53165 = state_53136__$1;
(statearr_53149_53165[(2)] = null);

(statearr_53149_53165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53137 === (8))){
var inst_53118 = (state_53136[(7)]);
var state_53136__$1 = state_53136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53136__$1,(11),out,inst_53118);
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
});
return (function() {
var cljs$core$async$state_machine__49559__auto__ = null;
var cljs$core$async$state_machine__49559__auto____0 = (function (){
var statearr_53150 = [null,null,null,null,null,null,null,null,null];
(statearr_53150[(0)] = cljs$core$async$state_machine__49559__auto__);

(statearr_53150[(1)] = (1));

return statearr_53150;
});
var cljs$core$async$state_machine__49559__auto____1 = (function (state_53136){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_53136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e53151){if((e53151 instanceof Object)){
var ex__49562__auto__ = e53151;
var statearr_53152_53166 = state_53136;
(statearr_53152_53166[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53167 = state_53136;
state_53136 = G__53167;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$state_machine__49559__auto__ = function(state_53136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49559__auto____1.call(this,state_53136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49559__auto____0;
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49559__auto____1;
return cljs$core$async$state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_53153 = f__49727__auto__.call(null);
(statearr_53153[(6)] = c__49726__auto___53155);

return statearr_53153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__53169 = arguments.length;
switch (G__53169) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__49726__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_53232){
var state_val_53233 = (state_53232[(1)]);
if((state_val_53233 === (7))){
var inst_53228 = (state_53232[(2)]);
var state_53232__$1 = state_53232;
var statearr_53234_53272 = state_53232__$1;
(statearr_53234_53272[(2)] = inst_53228);

(statearr_53234_53272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (20))){
var inst_53198 = (state_53232[(7)]);
var inst_53209 = (state_53232[(2)]);
var inst_53210 = cljs.core.next.call(null,inst_53198);
var inst_53184 = inst_53210;
var inst_53185 = null;
var inst_53186 = (0);
var inst_53187 = (0);
var state_53232__$1 = (function (){var statearr_53235 = state_53232;
(statearr_53235[(8)] = inst_53185);

(statearr_53235[(9)] = inst_53186);

(statearr_53235[(10)] = inst_53209);

(statearr_53235[(11)] = inst_53187);

(statearr_53235[(12)] = inst_53184);

return statearr_53235;
})();
var statearr_53236_53273 = state_53232__$1;
(statearr_53236_53273[(2)] = null);

(statearr_53236_53273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (1))){
var state_53232__$1 = state_53232;
var statearr_53237_53274 = state_53232__$1;
(statearr_53237_53274[(2)] = null);

(statearr_53237_53274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (4))){
var inst_53173 = (state_53232[(13)]);
var inst_53173__$1 = (state_53232[(2)]);
var inst_53174 = (inst_53173__$1 == null);
var state_53232__$1 = (function (){var statearr_53238 = state_53232;
(statearr_53238[(13)] = inst_53173__$1);

return statearr_53238;
})();
if(cljs.core.truth_(inst_53174)){
var statearr_53239_53275 = state_53232__$1;
(statearr_53239_53275[(1)] = (5));

} else {
var statearr_53240_53276 = state_53232__$1;
(statearr_53240_53276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (15))){
var state_53232__$1 = state_53232;
var statearr_53244_53277 = state_53232__$1;
(statearr_53244_53277[(2)] = null);

(statearr_53244_53277[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (21))){
var state_53232__$1 = state_53232;
var statearr_53245_53278 = state_53232__$1;
(statearr_53245_53278[(2)] = null);

(statearr_53245_53278[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (13))){
var inst_53185 = (state_53232[(8)]);
var inst_53186 = (state_53232[(9)]);
var inst_53187 = (state_53232[(11)]);
var inst_53184 = (state_53232[(12)]);
var inst_53194 = (state_53232[(2)]);
var inst_53195 = (inst_53187 + (1));
var tmp53241 = inst_53185;
var tmp53242 = inst_53186;
var tmp53243 = inst_53184;
var inst_53184__$1 = tmp53243;
var inst_53185__$1 = tmp53241;
var inst_53186__$1 = tmp53242;
var inst_53187__$1 = inst_53195;
var state_53232__$1 = (function (){var statearr_53246 = state_53232;
(statearr_53246[(8)] = inst_53185__$1);

(statearr_53246[(9)] = inst_53186__$1);

(statearr_53246[(14)] = inst_53194);

(statearr_53246[(11)] = inst_53187__$1);

(statearr_53246[(12)] = inst_53184__$1);

return statearr_53246;
})();
var statearr_53247_53279 = state_53232__$1;
(statearr_53247_53279[(2)] = null);

(statearr_53247_53279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (22))){
var state_53232__$1 = state_53232;
var statearr_53248_53280 = state_53232__$1;
(statearr_53248_53280[(2)] = null);

(statearr_53248_53280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (6))){
var inst_53173 = (state_53232[(13)]);
var inst_53182 = f.call(null,inst_53173);
var inst_53183 = cljs.core.seq.call(null,inst_53182);
var inst_53184 = inst_53183;
var inst_53185 = null;
var inst_53186 = (0);
var inst_53187 = (0);
var state_53232__$1 = (function (){var statearr_53249 = state_53232;
(statearr_53249[(8)] = inst_53185);

(statearr_53249[(9)] = inst_53186);

(statearr_53249[(11)] = inst_53187);

(statearr_53249[(12)] = inst_53184);

return statearr_53249;
})();
var statearr_53250_53281 = state_53232__$1;
(statearr_53250_53281[(2)] = null);

(statearr_53250_53281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (17))){
var inst_53198 = (state_53232[(7)]);
var inst_53202 = cljs.core.chunk_first.call(null,inst_53198);
var inst_53203 = cljs.core.chunk_rest.call(null,inst_53198);
var inst_53204 = cljs.core.count.call(null,inst_53202);
var inst_53184 = inst_53203;
var inst_53185 = inst_53202;
var inst_53186 = inst_53204;
var inst_53187 = (0);
var state_53232__$1 = (function (){var statearr_53251 = state_53232;
(statearr_53251[(8)] = inst_53185);

(statearr_53251[(9)] = inst_53186);

(statearr_53251[(11)] = inst_53187);

(statearr_53251[(12)] = inst_53184);

return statearr_53251;
})();
var statearr_53252_53282 = state_53232__$1;
(statearr_53252_53282[(2)] = null);

(statearr_53252_53282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (3))){
var inst_53230 = (state_53232[(2)]);
var state_53232__$1 = state_53232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53232__$1,inst_53230);
} else {
if((state_val_53233 === (12))){
var inst_53218 = (state_53232[(2)]);
var state_53232__$1 = state_53232;
var statearr_53253_53283 = state_53232__$1;
(statearr_53253_53283[(2)] = inst_53218);

(statearr_53253_53283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (2))){
var state_53232__$1 = state_53232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53232__$1,(4),in$);
} else {
if((state_val_53233 === (23))){
var inst_53226 = (state_53232[(2)]);
var state_53232__$1 = state_53232;
var statearr_53254_53284 = state_53232__$1;
(statearr_53254_53284[(2)] = inst_53226);

(statearr_53254_53284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (19))){
var inst_53213 = (state_53232[(2)]);
var state_53232__$1 = state_53232;
var statearr_53255_53285 = state_53232__$1;
(statearr_53255_53285[(2)] = inst_53213);

(statearr_53255_53285[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (11))){
var inst_53198 = (state_53232[(7)]);
var inst_53184 = (state_53232[(12)]);
var inst_53198__$1 = cljs.core.seq.call(null,inst_53184);
var state_53232__$1 = (function (){var statearr_53256 = state_53232;
(statearr_53256[(7)] = inst_53198__$1);

return statearr_53256;
})();
if(inst_53198__$1){
var statearr_53257_53286 = state_53232__$1;
(statearr_53257_53286[(1)] = (14));

} else {
var statearr_53258_53287 = state_53232__$1;
(statearr_53258_53287[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (9))){
var inst_53220 = (state_53232[(2)]);
var inst_53221 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_53232__$1 = (function (){var statearr_53259 = state_53232;
(statearr_53259[(15)] = inst_53220);

return statearr_53259;
})();
if(cljs.core.truth_(inst_53221)){
var statearr_53260_53288 = state_53232__$1;
(statearr_53260_53288[(1)] = (21));

} else {
var statearr_53261_53289 = state_53232__$1;
(statearr_53261_53289[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (5))){
var inst_53176 = cljs.core.async.close_BANG_.call(null,out);
var state_53232__$1 = state_53232;
var statearr_53262_53290 = state_53232__$1;
(statearr_53262_53290[(2)] = inst_53176);

(statearr_53262_53290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (14))){
var inst_53198 = (state_53232[(7)]);
var inst_53200 = cljs.core.chunked_seq_QMARK_.call(null,inst_53198);
var state_53232__$1 = state_53232;
if(inst_53200){
var statearr_53263_53291 = state_53232__$1;
(statearr_53263_53291[(1)] = (17));

} else {
var statearr_53264_53292 = state_53232__$1;
(statearr_53264_53292[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (16))){
var inst_53216 = (state_53232[(2)]);
var state_53232__$1 = state_53232;
var statearr_53265_53293 = state_53232__$1;
(statearr_53265_53293[(2)] = inst_53216);

(statearr_53265_53293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53233 === (10))){
var inst_53185 = (state_53232[(8)]);
var inst_53187 = (state_53232[(11)]);
var inst_53192 = cljs.core._nth.call(null,inst_53185,inst_53187);
var state_53232__$1 = state_53232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53232__$1,(13),out,inst_53192);
} else {
if((state_val_53233 === (18))){
var inst_53198 = (state_53232[(7)]);
var inst_53207 = cljs.core.first.call(null,inst_53198);
var state_53232__$1 = state_53232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53232__$1,(20),out,inst_53207);
} else {
if((state_val_53233 === (8))){
var inst_53186 = (state_53232[(9)]);
var inst_53187 = (state_53232[(11)]);
var inst_53189 = (inst_53187 < inst_53186);
var inst_53190 = inst_53189;
var state_53232__$1 = state_53232;
if(cljs.core.truth_(inst_53190)){
var statearr_53266_53294 = state_53232__$1;
(statearr_53266_53294[(1)] = (10));

} else {
var statearr_53267_53295 = state_53232__$1;
(statearr_53267_53295[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__49559__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__49559__auto____0 = (function (){
var statearr_53268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53268[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__49559__auto__);

(statearr_53268[(1)] = (1));

return statearr_53268;
});
var cljs$core$async$mapcat_STAR__$_state_machine__49559__auto____1 = (function (state_53232){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_53232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e53269){if((e53269 instanceof Object)){
var ex__49562__auto__ = e53269;
var statearr_53270_53296 = state_53232;
(statearr_53270_53296[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53297 = state_53232;
state_53232 = G__53297;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__49559__auto__ = function(state_53232){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__49559__auto____1.call(this,state_53232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__49559__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__49559__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_53271 = f__49727__auto__.call(null);
(statearr_53271[(6)] = c__49726__auto__);

return statearr_53271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));

return c__49726__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__53299 = arguments.length;
switch (G__53299) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__53302 = arguments.length;
switch (G__53302) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__53305 = arguments.length;
switch (G__53305) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49726__auto___53352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_53329){
var state_val_53330 = (state_53329[(1)]);
if((state_val_53330 === (7))){
var inst_53324 = (state_53329[(2)]);
var state_53329__$1 = state_53329;
var statearr_53331_53353 = state_53329__$1;
(statearr_53331_53353[(2)] = inst_53324);

(statearr_53331_53353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53330 === (1))){
var inst_53306 = null;
var state_53329__$1 = (function (){var statearr_53332 = state_53329;
(statearr_53332[(7)] = inst_53306);

return statearr_53332;
})();
var statearr_53333_53354 = state_53329__$1;
(statearr_53333_53354[(2)] = null);

(statearr_53333_53354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53330 === (4))){
var inst_53309 = (state_53329[(8)]);
var inst_53309__$1 = (state_53329[(2)]);
var inst_53310 = (inst_53309__$1 == null);
var inst_53311 = cljs.core.not.call(null,inst_53310);
var state_53329__$1 = (function (){var statearr_53334 = state_53329;
(statearr_53334[(8)] = inst_53309__$1);

return statearr_53334;
})();
if(inst_53311){
var statearr_53335_53355 = state_53329__$1;
(statearr_53335_53355[(1)] = (5));

} else {
var statearr_53336_53356 = state_53329__$1;
(statearr_53336_53356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53330 === (6))){
var state_53329__$1 = state_53329;
var statearr_53337_53357 = state_53329__$1;
(statearr_53337_53357[(2)] = null);

(statearr_53337_53357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53330 === (3))){
var inst_53326 = (state_53329[(2)]);
var inst_53327 = cljs.core.async.close_BANG_.call(null,out);
var state_53329__$1 = (function (){var statearr_53338 = state_53329;
(statearr_53338[(9)] = inst_53326);

return statearr_53338;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53329__$1,inst_53327);
} else {
if((state_val_53330 === (2))){
var state_53329__$1 = state_53329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53329__$1,(4),ch);
} else {
if((state_val_53330 === (11))){
var inst_53309 = (state_53329[(8)]);
var inst_53318 = (state_53329[(2)]);
var inst_53306 = inst_53309;
var state_53329__$1 = (function (){var statearr_53339 = state_53329;
(statearr_53339[(7)] = inst_53306);

(statearr_53339[(10)] = inst_53318);

return statearr_53339;
})();
var statearr_53340_53358 = state_53329__$1;
(statearr_53340_53358[(2)] = null);

(statearr_53340_53358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53330 === (9))){
var inst_53309 = (state_53329[(8)]);
var state_53329__$1 = state_53329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53329__$1,(11),out,inst_53309);
} else {
if((state_val_53330 === (5))){
var inst_53306 = (state_53329[(7)]);
var inst_53309 = (state_53329[(8)]);
var inst_53313 = cljs.core._EQ_.call(null,inst_53309,inst_53306);
var state_53329__$1 = state_53329;
if(inst_53313){
var statearr_53342_53359 = state_53329__$1;
(statearr_53342_53359[(1)] = (8));

} else {
var statearr_53343_53360 = state_53329__$1;
(statearr_53343_53360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53330 === (10))){
var inst_53321 = (state_53329[(2)]);
var state_53329__$1 = state_53329;
var statearr_53344_53361 = state_53329__$1;
(statearr_53344_53361[(2)] = inst_53321);

(statearr_53344_53361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53330 === (8))){
var inst_53306 = (state_53329[(7)]);
var tmp53341 = inst_53306;
var inst_53306__$1 = tmp53341;
var state_53329__$1 = (function (){var statearr_53345 = state_53329;
(statearr_53345[(7)] = inst_53306__$1);

return statearr_53345;
})();
var statearr_53346_53362 = state_53329__$1;
(statearr_53346_53362[(2)] = null);

(statearr_53346_53362[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__49559__auto__ = null;
var cljs$core$async$state_machine__49559__auto____0 = (function (){
var statearr_53347 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_53347[(0)] = cljs$core$async$state_machine__49559__auto__);

(statearr_53347[(1)] = (1));

return statearr_53347;
});
var cljs$core$async$state_machine__49559__auto____1 = (function (state_53329){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_53329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e53348){if((e53348 instanceof Object)){
var ex__49562__auto__ = e53348;
var statearr_53349_53363 = state_53329;
(statearr_53349_53363[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53364 = state_53329;
state_53329 = G__53364;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$state_machine__49559__auto__ = function(state_53329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49559__auto____1.call(this,state_53329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49559__auto____0;
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49559__auto____1;
return cljs$core$async$state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_53350 = f__49727__auto__.call(null);
(statearr_53350[(6)] = c__49726__auto___53352);

return statearr_53350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__53366 = arguments.length;
switch (G__53366) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49726__auto___53432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_53404){
var state_val_53405 = (state_53404[(1)]);
if((state_val_53405 === (7))){
var inst_53400 = (state_53404[(2)]);
var state_53404__$1 = state_53404;
var statearr_53406_53433 = state_53404__$1;
(statearr_53406_53433[(2)] = inst_53400);

(statearr_53406_53433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53405 === (1))){
var inst_53367 = (new Array(n));
var inst_53368 = inst_53367;
var inst_53369 = (0);
var state_53404__$1 = (function (){var statearr_53407 = state_53404;
(statearr_53407[(7)] = inst_53369);

(statearr_53407[(8)] = inst_53368);

return statearr_53407;
})();
var statearr_53408_53434 = state_53404__$1;
(statearr_53408_53434[(2)] = null);

(statearr_53408_53434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53405 === (4))){
var inst_53372 = (state_53404[(9)]);
var inst_53372__$1 = (state_53404[(2)]);
var inst_53373 = (inst_53372__$1 == null);
var inst_53374 = cljs.core.not.call(null,inst_53373);
var state_53404__$1 = (function (){var statearr_53409 = state_53404;
(statearr_53409[(9)] = inst_53372__$1);

return statearr_53409;
})();
if(inst_53374){
var statearr_53410_53435 = state_53404__$1;
(statearr_53410_53435[(1)] = (5));

} else {
var statearr_53411_53436 = state_53404__$1;
(statearr_53411_53436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53405 === (15))){
var inst_53394 = (state_53404[(2)]);
var state_53404__$1 = state_53404;
var statearr_53412_53437 = state_53404__$1;
(statearr_53412_53437[(2)] = inst_53394);

(statearr_53412_53437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53405 === (13))){
var state_53404__$1 = state_53404;
var statearr_53413_53438 = state_53404__$1;
(statearr_53413_53438[(2)] = null);

(statearr_53413_53438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53405 === (6))){
var inst_53369 = (state_53404[(7)]);
var inst_53390 = (inst_53369 > (0));
var state_53404__$1 = state_53404;
if(cljs.core.truth_(inst_53390)){
var statearr_53414_53439 = state_53404__$1;
(statearr_53414_53439[(1)] = (12));

} else {
var statearr_53415_53440 = state_53404__$1;
(statearr_53415_53440[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53405 === (3))){
var inst_53402 = (state_53404[(2)]);
var state_53404__$1 = state_53404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53404__$1,inst_53402);
} else {
if((state_val_53405 === (12))){
var inst_53368 = (state_53404[(8)]);
var inst_53392 = cljs.core.vec.call(null,inst_53368);
var state_53404__$1 = state_53404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53404__$1,(15),out,inst_53392);
} else {
if((state_val_53405 === (2))){
var state_53404__$1 = state_53404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53404__$1,(4),ch);
} else {
if((state_val_53405 === (11))){
var inst_53384 = (state_53404[(2)]);
var inst_53385 = (new Array(n));
var inst_53368 = inst_53385;
var inst_53369 = (0);
var state_53404__$1 = (function (){var statearr_53416 = state_53404;
(statearr_53416[(7)] = inst_53369);

(statearr_53416[(10)] = inst_53384);

(statearr_53416[(8)] = inst_53368);

return statearr_53416;
})();
var statearr_53417_53441 = state_53404__$1;
(statearr_53417_53441[(2)] = null);

(statearr_53417_53441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53405 === (9))){
var inst_53368 = (state_53404[(8)]);
var inst_53382 = cljs.core.vec.call(null,inst_53368);
var state_53404__$1 = state_53404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53404__$1,(11),out,inst_53382);
} else {
if((state_val_53405 === (5))){
var inst_53369 = (state_53404[(7)]);
var inst_53372 = (state_53404[(9)]);
var inst_53368 = (state_53404[(8)]);
var inst_53377 = (state_53404[(11)]);
var inst_53376 = (inst_53368[inst_53369] = inst_53372);
var inst_53377__$1 = (inst_53369 + (1));
var inst_53378 = (inst_53377__$1 < n);
var state_53404__$1 = (function (){var statearr_53418 = state_53404;
(statearr_53418[(12)] = inst_53376);

(statearr_53418[(11)] = inst_53377__$1);

return statearr_53418;
})();
if(cljs.core.truth_(inst_53378)){
var statearr_53419_53442 = state_53404__$1;
(statearr_53419_53442[(1)] = (8));

} else {
var statearr_53420_53443 = state_53404__$1;
(statearr_53420_53443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53405 === (14))){
var inst_53397 = (state_53404[(2)]);
var inst_53398 = cljs.core.async.close_BANG_.call(null,out);
var state_53404__$1 = (function (){var statearr_53422 = state_53404;
(statearr_53422[(13)] = inst_53397);

return statearr_53422;
})();
var statearr_53423_53444 = state_53404__$1;
(statearr_53423_53444[(2)] = inst_53398);

(statearr_53423_53444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53405 === (10))){
var inst_53388 = (state_53404[(2)]);
var state_53404__$1 = state_53404;
var statearr_53424_53445 = state_53404__$1;
(statearr_53424_53445[(2)] = inst_53388);

(statearr_53424_53445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53405 === (8))){
var inst_53368 = (state_53404[(8)]);
var inst_53377 = (state_53404[(11)]);
var tmp53421 = inst_53368;
var inst_53368__$1 = tmp53421;
var inst_53369 = inst_53377;
var state_53404__$1 = (function (){var statearr_53425 = state_53404;
(statearr_53425[(7)] = inst_53369);

(statearr_53425[(8)] = inst_53368__$1);

return statearr_53425;
})();
var statearr_53426_53446 = state_53404__$1;
(statearr_53426_53446[(2)] = null);

(statearr_53426_53446[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__49559__auto__ = null;
var cljs$core$async$state_machine__49559__auto____0 = (function (){
var statearr_53427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53427[(0)] = cljs$core$async$state_machine__49559__auto__);

(statearr_53427[(1)] = (1));

return statearr_53427;
});
var cljs$core$async$state_machine__49559__auto____1 = (function (state_53404){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_53404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e53428){if((e53428 instanceof Object)){
var ex__49562__auto__ = e53428;
var statearr_53429_53447 = state_53404;
(statearr_53429_53447[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53448 = state_53404;
state_53404 = G__53448;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$state_machine__49559__auto__ = function(state_53404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49559__auto____1.call(this,state_53404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49559__auto____0;
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49559__auto____1;
return cljs$core$async$state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_53430 = f__49727__auto__.call(null);
(statearr_53430[(6)] = c__49726__auto___53432);

return statearr_53430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__53450 = arguments.length;
switch (G__53450) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__49726__auto___53520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__49727__auto__ = (function (){var switch__49558__auto__ = (function (state_53492){
var state_val_53493 = (state_53492[(1)]);
if((state_val_53493 === (7))){
var inst_53488 = (state_53492[(2)]);
var state_53492__$1 = state_53492;
var statearr_53494_53521 = state_53492__$1;
(statearr_53494_53521[(2)] = inst_53488);

(statearr_53494_53521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53493 === (1))){
var inst_53451 = [];
var inst_53452 = inst_53451;
var inst_53453 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_53492__$1 = (function (){var statearr_53495 = state_53492;
(statearr_53495[(7)] = inst_53452);

(statearr_53495[(8)] = inst_53453);

return statearr_53495;
})();
var statearr_53496_53522 = state_53492__$1;
(statearr_53496_53522[(2)] = null);

(statearr_53496_53522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53493 === (4))){
var inst_53456 = (state_53492[(9)]);
var inst_53456__$1 = (state_53492[(2)]);
var inst_53457 = (inst_53456__$1 == null);
var inst_53458 = cljs.core.not.call(null,inst_53457);
var state_53492__$1 = (function (){var statearr_53497 = state_53492;
(statearr_53497[(9)] = inst_53456__$1);

return statearr_53497;
})();
if(inst_53458){
var statearr_53498_53523 = state_53492__$1;
(statearr_53498_53523[(1)] = (5));

} else {
var statearr_53499_53524 = state_53492__$1;
(statearr_53499_53524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53493 === (15))){
var inst_53482 = (state_53492[(2)]);
var state_53492__$1 = state_53492;
var statearr_53500_53525 = state_53492__$1;
(statearr_53500_53525[(2)] = inst_53482);

(statearr_53500_53525[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53493 === (13))){
var state_53492__$1 = state_53492;
var statearr_53501_53526 = state_53492__$1;
(statearr_53501_53526[(2)] = null);

(statearr_53501_53526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53493 === (6))){
var inst_53452 = (state_53492[(7)]);
var inst_53477 = inst_53452.length;
var inst_53478 = (inst_53477 > (0));
var state_53492__$1 = state_53492;
if(cljs.core.truth_(inst_53478)){
var statearr_53502_53527 = state_53492__$1;
(statearr_53502_53527[(1)] = (12));

} else {
var statearr_53503_53528 = state_53492__$1;
(statearr_53503_53528[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53493 === (3))){
var inst_53490 = (state_53492[(2)]);
var state_53492__$1 = state_53492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53492__$1,inst_53490);
} else {
if((state_val_53493 === (12))){
var inst_53452 = (state_53492[(7)]);
var inst_53480 = cljs.core.vec.call(null,inst_53452);
var state_53492__$1 = state_53492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53492__$1,(15),out,inst_53480);
} else {
if((state_val_53493 === (2))){
var state_53492__$1 = state_53492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53492__$1,(4),ch);
} else {
if((state_val_53493 === (11))){
var inst_53460 = (state_53492[(10)]);
var inst_53456 = (state_53492[(9)]);
var inst_53470 = (state_53492[(2)]);
var inst_53471 = [];
var inst_53472 = inst_53471.push(inst_53456);
var inst_53452 = inst_53471;
var inst_53453 = inst_53460;
var state_53492__$1 = (function (){var statearr_53504 = state_53492;
(statearr_53504[(11)] = inst_53470);

(statearr_53504[(12)] = inst_53472);

(statearr_53504[(7)] = inst_53452);

(statearr_53504[(8)] = inst_53453);

return statearr_53504;
})();
var statearr_53505_53529 = state_53492__$1;
(statearr_53505_53529[(2)] = null);

(statearr_53505_53529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53493 === (9))){
var inst_53452 = (state_53492[(7)]);
var inst_53468 = cljs.core.vec.call(null,inst_53452);
var state_53492__$1 = state_53492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53492__$1,(11),out,inst_53468);
} else {
if((state_val_53493 === (5))){
var inst_53460 = (state_53492[(10)]);
var inst_53456 = (state_53492[(9)]);
var inst_53453 = (state_53492[(8)]);
var inst_53460__$1 = f.call(null,inst_53456);
var inst_53461 = cljs.core._EQ_.call(null,inst_53460__$1,inst_53453);
var inst_53462 = cljs.core.keyword_identical_QMARK_.call(null,inst_53453,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_53463 = ((inst_53461) || (inst_53462));
var state_53492__$1 = (function (){var statearr_53506 = state_53492;
(statearr_53506[(10)] = inst_53460__$1);

return statearr_53506;
})();
if(cljs.core.truth_(inst_53463)){
var statearr_53507_53530 = state_53492__$1;
(statearr_53507_53530[(1)] = (8));

} else {
var statearr_53508_53531 = state_53492__$1;
(statearr_53508_53531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53493 === (14))){
var inst_53485 = (state_53492[(2)]);
var inst_53486 = cljs.core.async.close_BANG_.call(null,out);
var state_53492__$1 = (function (){var statearr_53510 = state_53492;
(statearr_53510[(13)] = inst_53485);

return statearr_53510;
})();
var statearr_53511_53532 = state_53492__$1;
(statearr_53511_53532[(2)] = inst_53486);

(statearr_53511_53532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53493 === (10))){
var inst_53475 = (state_53492[(2)]);
var state_53492__$1 = state_53492;
var statearr_53512_53533 = state_53492__$1;
(statearr_53512_53533[(2)] = inst_53475);

(statearr_53512_53533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53493 === (8))){
var inst_53452 = (state_53492[(7)]);
var inst_53460 = (state_53492[(10)]);
var inst_53456 = (state_53492[(9)]);
var inst_53465 = inst_53452.push(inst_53456);
var tmp53509 = inst_53452;
var inst_53452__$1 = tmp53509;
var inst_53453 = inst_53460;
var state_53492__$1 = (function (){var statearr_53513 = state_53492;
(statearr_53513[(14)] = inst_53465);

(statearr_53513[(7)] = inst_53452__$1);

(statearr_53513[(8)] = inst_53453);

return statearr_53513;
})();
var statearr_53514_53534 = state_53492__$1;
(statearr_53514_53534[(2)] = null);

(statearr_53514_53534[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__49559__auto__ = null;
var cljs$core$async$state_machine__49559__auto____0 = (function (){
var statearr_53515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53515[(0)] = cljs$core$async$state_machine__49559__auto__);

(statearr_53515[(1)] = (1));

return statearr_53515;
});
var cljs$core$async$state_machine__49559__auto____1 = (function (state_53492){
while(true){
var ret_value__49560__auto__ = (function (){try{while(true){
var result__49561__auto__ = switch__49558__auto__.call(null,state_53492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__49561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__49561__auto__;
}
break;
}
}catch (e53516){if((e53516 instanceof Object)){
var ex__49562__auto__ = e53516;
var statearr_53517_53535 = state_53492;
(statearr_53517_53535[(5)] = ex__49562__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__49560__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53536 = state_53492;
state_53492 = G__53536;
continue;
} else {
return ret_value__49560__auto__;
}
break;
}
});
cljs$core$async$state_machine__49559__auto__ = function(state_53492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__49559__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__49559__auto____1.call(this,state_53492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__49559__auto____0;
cljs$core$async$state_machine__49559__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__49559__auto____1;
return cljs$core$async$state_machine__49559__auto__;
})()
})();
var state__49728__auto__ = (function (){var statearr_53518 = f__49727__auto__.call(null);
(statearr_53518[(6)] = c__49726__auto___53520);

return statearr_53518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__49728__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1606929293745
