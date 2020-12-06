// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__44783__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__44783 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44784__i = 0, G__44784__a = new Array(arguments.length -  0);
while (G__44784__i < G__44784__a.length) {G__44784__a[G__44784__i] = arguments[G__44784__i + 0]; ++G__44784__i;}
  args = new cljs.core.IndexedSeq(G__44784__a,0,null);
} 
return G__44783__delegate.call(this,args);};
G__44783.cljs$lang$maxFixedArity = 0;
G__44783.cljs$lang$applyTo = (function (arglist__44785){
var args = cljs.core.seq(arglist__44785);
return G__44783__delegate(args);
});
G__44783.cljs$core$IFn$_invoke$arity$variadic = G__44783__delegate;
return G__44783;
})()
);

(o.error = (function() { 
var G__44786__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__44786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44787__i = 0, G__44787__a = new Array(arguments.length -  0);
while (G__44787__i < G__44787__a.length) {G__44787__a[G__44787__i] = arguments[G__44787__i + 0]; ++G__44787__i;}
  args = new cljs.core.IndexedSeq(G__44787__a,0,null);
} 
return G__44786__delegate.call(this,args);};
G__44786.cljs$lang$maxFixedArity = 0;
G__44786.cljs$lang$applyTo = (function (arglist__44788){
var args = cljs.core.seq(arglist__44788);
return G__44786__delegate(args);
});
G__44786.cljs$core$IFn$_invoke$arity$variadic = G__44786__delegate;
return G__44786;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1606929282450
