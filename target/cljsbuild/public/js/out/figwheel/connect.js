// Compiled by ClojureScript 1.10.773 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__60619__delegate = function (x__60598__auto__){
if(cljs.core.truth_(jordanwebsites.core.mount_components)){
return cljs.core.apply.call(null,jordanwebsites.core.mount_components,x__60598__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","jordanwebsites.core/mount-components","' is missing"].join(''));
}
};
var G__60619 = function (var_args){
var x__60598__auto__ = null;
if (arguments.length > 0) {
var G__60620__i = 0, G__60620__a = new Array(arguments.length -  0);
while (G__60620__i < G__60620__a.length) {G__60620__a[G__60620__i] = arguments[G__60620__i + 0]; ++G__60620__i;}
  x__60598__auto__ = new cljs.core.IndexedSeq(G__60620__a,0,null);
} 
return G__60619__delegate.call(this,x__60598__auto__);};
G__60619.cljs$lang$maxFixedArity = 0;
G__60619.cljs$lang$applyTo = (function (arglist__60621){
var x__60598__auto__ = cljs.core.seq(arglist__60621);
return G__60619__delegate(x__60598__auto__);
});
G__60619.cljs$core$IFn$_invoke$arity$variadic = G__60619__delegate;
return G__60619;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1606929299016
